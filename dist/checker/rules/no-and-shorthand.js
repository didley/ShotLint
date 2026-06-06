"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noAndShorthand = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noAndShorthand = {
    name: "no-and-shorthand",
    visit(node, ctx) {
        if (!typescript_1.default.isExpressionStatement(node))
            return;
        const expr = node.expression;
        if (!typescript_1.default.isBinaryExpression(expr))
            return;
        if (expr.operatorToken.kind !== typescript_1.default.SyntaxKind.AmpersandAmpersandToken)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-and-shorthand", message: "Don't use `&&` as conditional execution. Use an `if` block." });
    },
};
//# sourceMappingURL=no-and-shorthand.js.map