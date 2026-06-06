"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSelfCompare = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const CMP_OPS = new Set([
    typescript_1.default.SyntaxKind.EqualsEqualsEqualsToken,
    typescript_1.default.SyntaxKind.ExclamationEqualsEqualsToken,
    typescript_1.default.SyntaxKind.EqualsEqualsToken,
    typescript_1.default.SyntaxKind.ExclamationEqualsToken,
]);
function nodeText(node, sf) {
    return sf.text.slice(node.getStart(sf), node.getEnd());
}
exports.noSelfCompare = {
    name: "no-self-compare",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (!CMP_OPS.has(node.operatorToken.kind))
            return;
        const lText = nodeText(node.left, ctx.sourceFile);
        const rText = nodeText(node.right, ctx.sourceFile);
        if (lText !== rText)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-self-compare", message: "Comparing a value to itself is a bug or a NaN-check abuse — use `Number.isNaN()`." });
    },
};
//# sourceMappingURL=no-self-compare.js.map