
const scopes = (c) => [
	{ scope: ['comment', 'punctuation.definition.comment', 'string.comment'], settings: { foreground: c.comment, fontStyle: 'italic' } },
	{ scope: ['keyword', 'storage', 'storage.type', 'storage.modifier', 'keyword.control', 'keyword.operator.new', 'variable.language', 'constant.language'], settings: { foreground: c.keyword, fontStyle: 'bold' } },
	{ scope: ['keyword.operator', 'punctuation'], settings: { foreground: c.ink } },
	{ scope: ['entity.name.type', 'entity.name.class', 'support.class', 'support.type', 'entity.other.inherited-class', 'storage.type.java', 'storage.type.groovy'], settings: { foreground: c.type } },
	{ scope: ['string', 'string.quoted', 'string.template', 'punctuation.definition.string'], settings: { foreground: c.string } },
	{ scope: ['constant.numeric', 'constant.character', 'constant.other', 'support.constant'], settings: { foreground: c.number } },
	{ scope: ['storage.type.annotation', 'punctuation.definition.annotation', 'meta.declaration.annotation', 'entity.name.tag', 'meta.tag'], settings: { foreground: c.annotation } },
	{ scope: ['entity.name.function', 'support.function', 'meta.function-call entity.name.function', 'meta.method-call', 'entity.name.function.member'], settings: { foreground: c.fn } },
	{ scope: ['variable', 'variable.other', 'variable.parameter', 'meta.definition.variable'], settings: { foreground: c.ink } },
	{ scope: ['entity.other.attribute-name', 'support.type.property-name', 'meta.object-literal.key'], settings: { foreground: c.type } },
	{ scope: ['markup.heading', 'markup.bold'], settings: { foreground: c.keyword, fontStyle: 'bold' } },
	{ scope: ['markup.inserted'], settings: { foreground: c.string } },
	{ scope: ['markup.deleted'], settings: { foreground: c.danger } },
	{ scope: ['invalid'], settings: { foreground: c.danger } },
];

const make = (name, type, c) => ({
	name,
	type,
	colors: {
		'editor.background': c.bg,
		'editor.foreground': c.ink,
		'editorLineNumber.foreground': c.comment,
		'editor.selectionBackground': c.selection,
		'editorGroupHeader.tabsBackground': c.head,
		'tab.activeBackground': c.bg,
		'tab.activeForeground': c.ink,
		'tab.inactiveForeground': c.muted,
		'tab.activeBorderTop': c.accent,
		'tab.border': c.line,
		'titleBar.activeBackground': c.head,
		'titleBar.activeForeground': c.muted,
		'titleBar.border': c.line,
		'terminal.background': c.bg,
		'terminal.foreground': c.ink,
	},
	tokenColors: scopes(c),
});

export const aeroDay = make('cleanroom-aero-day', 'light', {
	bg: '#e6f2f5', head: '#ffffff', ink: '#0a1f2e', muted: '#3a5566', line: '#c2d9e1', accent: '#36c9cf',
	selection: '#9fe3ff80',
	keyword: '#1a5180', type: '#0a6a6f', string: '#17723e', number: '#8a4b00', comment: '#4f6b7b',
	annotation: '#8d2f6a', fn: '#7a3fa0', danger: '#a8231b',
});

export const aeroNight = make('cleanroom-aero-night', 'dark', {
	bg: '#112737', head: '#0b1c29', ink: '#e9f6fa', muted: '#a6c4d2', line: '#28475c', accent: '#25b3b9',
	selection: '#7fd3f540',
	keyword: '#8fc7f2', type: '#5fe0e3', string: '#8be3a9', number: '#ffc765', comment: '#8fb0c0',
	annotation: '#f2a0cf', fn: '#d7b4ff', danger: '#ff9a8f',
});
