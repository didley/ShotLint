"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUselessReturn = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const FN_KINDS = new Set([
    typescript_1.default.SyntaxKind.FunctionDeclaration,
    typescript_1.default.SyntaxKind.FunctionExpression,
    typescript_1.default.SyntaxKind.ArrowFunction,
    typescript_1.default.SyntaxKind.MethodDeclaration,
]);
exports.noUselessReturn = {
    name: "no-useless-return",
    visit(node, ctx) {
        if (!typescript_1.default.isReturnStatement(node))
            return;
        if (node.expression !== undefined)
            return;
        const parent = node.parent;
        if (!typescript_1.default.isBlock(parent))
            return;
        const stmts = parent.statements;
        if (stmts.length === 0)
            return;
        if (stmts[stmts.length - 1] !== node)
            return;
        const grandParent = parent.parent;
        if (!grandParent || !FN_KINDS.has(grandParent.kind))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-useless-return", message: "Trailing bare `return` is unnecessary." });
    },
};
//# sourceMappingURL=no-useless-return.js.map