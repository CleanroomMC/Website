<template>
    <div class="cm">
        <!-- Colour-coded anatomy of an example coordinate -->
        <div class="cm-anatomy">
            <span class="cm-group">curse.maven</span><span class="cm-punct">:</span><span
                class="cm-label">mouse-tweaks</span><span class="cm-punct">-</span><span
                class="cm-project">60089</span><span class="cm-punct">:</span><span
                class="cm-file">3359843</span><span class="cm-punct">+</span><span class="cm-source">3359844</span>
        </div>

        <!-- Legend: swatches share the exact colours used above -->
        <ul class="cm-legend">
            <li><span class="cm-dot cm-bg-group"></span><code>curse.maven</code> - fixed group id. Always this, never
                changes.</li>
            <li><span class="cm-dot cm-bg-label"></span><b>Label</b> - free-form readability tag. Use the mod's slug; it
                has no effect on resolution.</li>
            <li><span class="cm-dot cm-bg-project"></span><b>Project ID</b> - numeric CurseForge project id, found on
                the mod page sidebar.</li>
            <li><span class="cm-dot cm-bg-file"></span><b>File ID</b> - numeric id of the specific file, from its
                download/files URL.</li>
            <li><span class="cm-dot cm-bg-source"></span><b>Source File ID</b> - optional <code>+suffix</code> pointing
                at the matching <em>sources</em> jar. Compatible with IntelliJ's <code>Download Sources</code> mechanic.</li>
        </ul>

        <!-- Interactive builder -->
        <div class="cm-builder">
            <label class="cm-field">
                <span>CurseForge link</span>
                <input v-model="link" type="text"
                    placeholder="https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/files/3359843" />
            </label>

            <div class="cm-row">
                <label class="cm-field">
                    <span>Label <em>(auto)</em></span>
                    <input v-model="label" type="text" placeholder="mouse-tweaks" />
                </label>
                <label class="cm-field">
                    <span>Project ID
                        <em v-if="resolving">(resolving…)</em>
                        <em v-else-if="resolveError" class="cm-err">{{ resolveError }}</em>
                        <em v-else>(auto)</em>
                    </span>
                    <input v-model="projectId" type="text" inputmode="numeric" placeholder="60089" />
                </label>
                <label class="cm-field">
                    <span>File ID <em>(auto)</em></span>
                    <input v-model="fileId" type="text" inputmode="numeric" placeholder="3359843" />
                </label>
                <label class="cm-field">
                    <span>Source File ID <em>(optional)</em></span>
                    <input v-model="sourceId" type="text" inputmode="numeric" placeholder="3359844" />
                </label>
            </div>

            <div class="cm-result" v-if="coordinate">
                <code class="cm-output"><span class="cm-group">curse.maven</span><span
                        class="cm-punct">:</span><span class="cm-label">{{ label }}</span><span
                        class="cm-punct">-</span><span class="cm-project">{{ projectId }}</span><span
                        class="cm-punct">:</span><span class="cm-file">{{ fileId }}</span><template
                        v-if="sourceId"><span class="cm-punct">+</span><span class="cm-source">{{ sourceId }}</span></template></code>
                <button class="cm-copy" @click="copy">{{ copied ? "Copied!" : "Copy" }}</button>
            </div>
            <p class="cm-hint" v-else>Fill in <b>label</b>, <b>Project ID</b> and <b>File ID</b> to generate a
                coordinate.</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

// CurseMaven worker endpoint.
const RESOLVE_ENDPOINT = "https://curse.cleanroommc.com/resolve";

const link = ref("");
const label = ref("");
const projectId = ref("");
const fileId = ref("");
const sourceId = ref("");
const copied = ref(false);

const resolving = ref(false);
const resolveError = ref("");
let lastSlug = "";
let debounce: ReturnType<typeof setTimeout> | undefined;

async function resolveSlug(slug: string) {
    if (!slug || slug === lastSlug) return;
    lastSlug = slug;
    resolving.value = true;
    resolveError.value = "";
    try {
        const r = await fetch(`${RESOLVE_ENDPOINT}?slug=${encodeURIComponent(slug)}`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const d = await r.json();
        if (d?.projectId) projectId.value = String(d.projectId);
        if (!fileId.value && d?.latestFileId) fileId.value = String(d.latestFileId);
    } catch {
        resolveError.value = "auto-resolve failed — enter manually";
    } finally {
        resolving.value = false;
    }
}

watch(link, (url) => {
    url = (url || "").trim();
    if (!url) return;
    const slug = url.match(/curseforge\.com\/[^/]+\/[^/]+\/([^/?#]+)/i);
    if (slug) label.value = slug[1];
    const file = url.match(/\/(?:files|download)\/(\d+)/i);
    if (file) fileId.value = file[1];

    clearTimeout(debounce);
    if (slug) {
        const s = slug[1];
        debounce = setTimeout(() => resolveSlug(s), 400);
    }
});

const coordinate = computed(() => {
    if (!label.value || !projectId.value || !fileId.value) return "";
    let c = `curse.maven:${label.value}-${projectId.value}:${fileId.value}`;
    if (sourceId.value) c += `+${sourceId.value}`;
    return c;
});

function copy() {
    if (!coordinate.value) return;
    navigator.clipboard?.writeText(coordinate.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
}
</script>

<style scoped>
.cm-group { color: var(--vp-c-text-2); }
.cm-label { color: #3b82f6; }
.cm-project { color: #10b981; }
.cm-file { color: #f59e0b; }
.cm-source { color: #a855f7; }
.cm-punct { color: var(--vp-c-text-3); }

.cm-anatomy {
    font-family: var(--vp-font-family-mono);
    font-size: 1.15rem;
    font-weight: 600;
    padding: 16px;
    margin: 16px 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    overflow-x: auto;
}

.cm-legend { list-style: none; padding: 0; margin: 12px 0; }
.cm-legend li { display: flex; align-items: baseline; gap: 8px; margin: 6px 0; }

.cm-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex: 0 0 auto;
    position: relative;
    top: 1px;
}

.cm-bg-group { background: var(--vp-c-text-2); }
.cm-bg-label { background: #3b82f6; }
.cm-bg-project { background: #10b981; }
.cm-bg-file { background: #f59e0b; }
.cm-bg-source { background: #a855f7; }

.cm-builder {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    padding: 16px;
    margin: 16px 0;
}

.cm-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin-top: 12px;
}

.cm-field { display: flex; flex-direction: column; gap: 4px; }
.cm-field > span { font-size: 0.85rem; color: var(--vp-c-text-2); }
.cm-field > span em { color: var(--vp-c-text-3); font-style: normal; }
.cm-field > span em.cm-err { color: var(--vp-c-danger-1); }

.cm-field input {
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    padding: 8px 10px;
    font-size: 0.9rem;
    color: var(--vp-c-text-1);
    width: 100%;
}

.cm-field input:focus {
    outline: none;
    border-color: var(--vp-c-brand-1);
}

.cm-result {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
    flex-wrap: wrap;
}

.cm-output {
    font-family: var(--vp-font-family-mono);
    font-size: 1rem;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 6px;
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
}

.cm-copy {
    border: 1px solid var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    background: transparent;
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 0.85rem;
    cursor: pointer;
}

.cm-copy:hover { background: var(--vp-c-brand-soft); }
.cm-hint { color: var(--vp-c-text-3); margin-top: 16px; }
</style>
