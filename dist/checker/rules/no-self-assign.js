"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSelfAssign = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function nodeText(node, sf) {
    return sf.text.slice(node.getStart(sf), node.getEnd());
}
exports.noSelfAssign = {
    name: "no-self-assign",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.EqualsToken)
            return;
        const lText = nodeText(node.left, ctx.sourceFile);
        const rText = nodeText(node.right, ctx.sourceFile);
        if (lText !== rText)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-self-assign", message: "Self-assignment has no effect." });
    },
};
//# sourceMappingURL=no-self-assign.js.map