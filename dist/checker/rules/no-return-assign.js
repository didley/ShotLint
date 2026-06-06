"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noReturnAssign = void 0;
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
exports.noReturnAssign = {
    name: "no-return-assign",
    visit(node, ctx) {
        if (!typescript_1.default.isReturnStatement(node))
            return;
        const expr = node.expression;
        if (!expr)
            return;
        if (!typescript_1.default.isBinaryExpression(expr))
            return;
        if (!ASSIGN_OPS.has(expr.operatorToken.kind))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-return-assign", message: "Return value cannot be an assignment expression." });
    },
};
//# sourceMappingURL=no-return-assign.js.map