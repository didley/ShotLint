"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posOf = posOf;
exports.check = check;
const typescript_1 = __importDefault(require("typescript"));
const index_js_1 = require("./rules/index.js");
function posOf(sourceFile, node) {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
    return { line: line + 1, col: character + 1 };
}
function check(file, source) {
    const sourceFile = typescript_1.default.createSourceFile(file, source, typescript_1.default.ScriptTarget.Latest, true, typescript_1.default.ScriptKind.TS);
    const diagnostics = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parseDiags = sourceFile.parseDiagnostics ?? [];
    if (parseDiags.length > 0) {
        const d = parseDiags[0];
        if (!d)
            return diagnostics;
        const pos = sourceFile.getLineAndCharacterOfPosition(d.start ?? 0);
        diagnostics.push({
            file,
            line: pos.line + 1,
            col: pos.character + 1,
            rule: "parse-error",
            message: typescript_1.default.flattenDiagnosticMessageText(d.messageText, " "),
        });
        return diagnostics;
    }
    const ctx = {
        file,
        source,
        sourceFile,
        push(d) {
            diagnostics.push({ file, ...d });
        },
    };
    function walk(node) {
        for (const rule of index_js_1.rules) {
            rule.visit(node, ctx);
        }
        typescript_1.default.forEachChild(node, walk);
    }
    walk(sourceFile);
    return diagnostics;
}
//# sourceMappingURL=mod.js.map