"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTsComment = void 0;
const typescript_1 = __importDefault(require("typescript"));
const TS_ESCAPE = /^\s*@ts-(ignore|expect-error|nocheck)\b/;
function scanComments(source, pos, ctx) {
    const ranges = typescript_1.default.getLeadingCommentRanges(source, pos) ?? [];
    for (const r of ranges) {
        const text = source.slice(r.pos, r.end);
        const body = r.kind === typescript_1.default.SyntaxKind.SingleLineCommentTrivia
            ? text.slice(2)
            : text.slice(2, -2);
        if (TS_ESCAPE.test(body)) {
            const before = source.slice(0, r.pos);
            const line = (before.match(/\n/g) ?? []).length + 1;
            const lastNl = before.lastIndexOf("\n");
            const col = r.pos - (lastNl === -1 ? -1 : lastNl);
            ctx.push({ line, col, rule: "no-ts-comment", message: "TS escape-hatch comments are not allowed." });
        }
    }
}
exports.noTsComment = {
    name: "no-ts-comment",
    visit(node, ctx) {
        if (node.kind !== typescript_1.default.SyntaxKind.SourceFile)
            return;
        const source = ctx.source;
        const seen = new Set();
        function walk(n) {
            const start = n.getFullStart();
            if (!seen.has(start)) {
                seen.add(start);
                scanComments(source, start, ctx);
            }
            typescript_1.default.forEachChild(n, walk);
        }
        walk(node);
    },
};
//# sourceMappingURL=no-ts-comment.js.map