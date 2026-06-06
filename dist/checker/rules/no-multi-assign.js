"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noMultiAssign = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const ASSIGN_OPS = new Set([
    typescript_1.default.SyntaxKind.EqualsToken,
    typescript_1.default.SyntaxKind.PlusEqualsToken,
    typescript_1.default.SyntaxKind.MinusEqualsToken,
    typescript_1.default.SyntaxKind.AsteriskEqualsToken,
    typescript_1.default.SyntaxKind.SlashEqualsToken,
    typescript_1.default.SyntaxKind.PercentEqualsToken,
]);
exports.noMultiAssign = {
    name: "no-multi-assign",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.EqualsToken)
            return;
        if (!typescript_1.default.isBinaryExpression(node.right))
            return;
        if (!ASSIGN_OPS.has(node.right.operatorToken.kind))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-multi-assign", message: "Chained assignment (`a = b = c`) is not allowed." });
    },
};
//# sourceMappingURL=no-multi-assign.js.map