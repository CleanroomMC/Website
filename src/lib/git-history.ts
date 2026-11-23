
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { contributors, type Contributor } from '../data/contributors';

export interface Commit {
	hash: string;
	date: number;
	author: string;
	email: string;
	subject: string;
}

export interface Author {
	name: string;
	avatar?: string;
	url?: string;
	commits: number;
}

let index: { root: string; byFile: Map<string, Commit[]> } | null | undefined;
let loadedAt = 0;

function load() {
	if (index !== undefined && !(import.meta.env?.DEV && Date.now() - loadedAt > 60_000)) return index;
	loadedAt = Date.now();
	try {
		const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 1 << 30, stdio: ['ignore', 'pipe', 'ignore'] });
		const root = git('rev-parse', '--show-toplevel').trim();
		const log = git('-C', root, 'log', '-M', '--name-status', '--format=%x1e%H%x1f%an%x1f%ae%x1f%at%x1f%s');
		const byFile = new Map<string, Commit[]>();
		const alias = new Map<string, string>();

		for (const chunk of log.split('\x1e')) {
			if (!chunk.trim()) continue;
			const [header, ...lines] = chunk.split('\n');
			const [hash, author, email, at, subject] = header.split('\x1f');
			const commit: Commit = { hash, author, email, date: Number(at), subject };
			for (const line of lines) {
				const parts = line.split('\t');
				if (parts.length < 2) continue;
				const status = parts[0];
				const current = parts[parts.length - 1];
				const canonical = alias.get(current) ?? current;
				if (status.startsWith('D') && !byFile.has(canonical)) continue;
				const list = byFile.get(canonical) ?? [];
				if (list[list.length - 1]?.hash !== hash) list.push(commit);
				byFile.set(canonical, list);
				if (status.startsWith('R') && parts.length >= 3) alias.set(parts[1], canonical);
			}
		}
		index = { root, byFile };
	} catch {
		index = null;
	}
	return index;
}

const NEW_ROOT = 'src/content/docs/';
const OLD_ROOT = 'docs/';
const LEGACY_ALIASES: Record<string, string> = {
	'src/content/docs/sponsors.mdx': 'docs/index.md',
};
function legacyPaths(rel: string): string[] {
	if (LEGACY_ALIASES[rel]) return [LEGACY_ALIASES[rel]];
	if (!rel.startsWith(NEW_ROOT)) return [];
	const page = rel.slice(NEW_ROOT.length).replace(/\.mdx?$/, '');
	return [`${OLD_ROOT}${page}.md`, `${OLD_ROOT}${page}/index.md`];
}

export function historyFor(file: string) {
	const idx = load();
	if (!idx) return null;
	const rel = path.relative(idx.root, path.resolve(file)).split(path.sep).join('/');
	const candidates = [rel, ...legacyPaths(rel)];
	const seen = new Set<string>();
	const commits = candidates
		.flatMap((p) => idx.byFile.get(p) ?? [])
		.filter((c) => !seen.has(c.hash) && seen.add(c.hash))
		.sort((a, b) => b.date - a.date);
	if (!commits.length) return null;
	const linkPath = candidates.find((p) => idx.byFile.get(p)?.length) ?? rel;
	return { path: linkPath, commits };
}

const norm = (s: string) => s.trim().toLowerCase();
function lookup(name: string, email: string): Contributor | undefined {
	const n = norm(name);
	const user = email.match(/^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/i)?.[1];
	return contributors.find((c) =>
		[c.name, c.github, ...(c.aliases ?? [])].some((k) => k && (norm(k) === n || (user && norm(k) === norm(user)))),
	);
}

export function authorsOf(commits: Commit[]): Author[] {
	const people = new Map<string, Author>();
	for (const c of commits) {
		const known = lookup(c.author, c.email);
		const key = known ? `k:${known.name}` : `e:${norm(c.email) || norm(c.author)}`;
		const existing = people.get(key);
		if (existing) {
			existing.commits++;
			continue;
		}
		const noreply = c.email.match(/^(?:(\d+)\+)?([^@]+)@users\.noreply\.github\.com$/i);
		const github = known?.github ?? noreply?.[2];
		const avatar =
			known?.avatar ??
			(noreply?.[1] ? `https://avatars.githubusercontent.com/u/${noreply[1]}?v=4` : github ? `https://github.com/${github}.png` : undefined);
		people.set(key, {
			name: known?.name ?? c.author,
			avatar: avatar?.includes('avatars.githubusercontent.com') ? `${avatar}${avatar.includes('?') ? '&' : '?'}s=64` : avatar,
			url: github && /^[A-Za-z0-9-]+$/.test(github) ? `https://github.com/${github}` : undefined,
			commits: 1,
		});
	}
	return [...people.values()].sort((a, b) => b.commits - a.commits);
}
