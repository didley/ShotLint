"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preferTemplate = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const VAR_KINDS = new Set([
    typescript_1.default.SyntaxKind.Identifier,
    typescript_1.default.SyntaxKind.PropertyAccessExpression,
    typescript_1.default.SyntaxKind.CallExpression,
]);
exports.preferTemplate = {
    name: "prefer-template",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.PlusToken)
            return;
        const left = node.left;
        const right = node.right;
        const leftIsStr = typescript_1.default.isStringLiteral(left);
        const rightIsStr = typescript_1.default.isStringLiteral(right);
        const leftIsVar = VAR_KINDS.has(left.kind);
        const rightIsVar = VAR_KINDS.has(right.kind);
        if (!((leftIsStr && rightIsVar) || (rightIsStr && leftIsVar)))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "prefer-template", message: "Use a template literal instead of `+`." });
    },
};
//# sourceMappingURL=prefer-template.js.map