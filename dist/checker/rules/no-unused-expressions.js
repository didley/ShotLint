"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUnusedExpressions = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const ASSIGN_OPS = new Set([
    typescript_1.default.SyntaxKind.EqualsToken,
    typescript_1.default.SyntaxKind.PlusEqualsToken,
    typescript_1.default.SyntaxKind.MinusEqualsToken,
    typescript_1.default.SyntaxKind.AsteriskEqualsToken,
    typescript_1.default.SyntaxKind.SlashEqualsToken,
    typescript_1.default.SyntaxKind.PercentEqualsToken,
    typescript_1.default.SyntaxKind.AsteriskAsteriskEqualsToken,
    typescript_1.default.SyntaxKind.AmpersandEqualsToken,
    typescript_1.default.SyntaxKind.BarEqualsToken,
    typescript_1.default.SyntaxKind.CaretEqualsToken,
    typescript_1.default.SyntaxKind.LessThanLessThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
    typescript_1.default.SyntaxKind.BarBarEqualsToken,
    typescript_1.default.SyntaxKind.AmpersandAmpersandEqualsToken,
    typescript_1.default.SyntaxKind.QuestionQuestionEqualsToken,
]);
// Short-circuit ops that may have side effects on the RHS - handled by no-and-shorthand
const SHORTCIRCUIT_OPS = new Set([
    typescript_1.default.SyntaxKind.AmpersandAmpersandToken,
    typescript_1.default.SyntaxKind.BarBarToken,
    typescript_1.default.SyntaxKind.QuestionQuestionToken,
]);
function hasNoSideEffect(expr) {
    const k = expr.kind;
    if (k === typescript_1.default.SyntaxKind.Identifier)
        return true;
    if (k === typescript_1.default.SyntaxKind.PropertyAccessExpression)
        return true;
    if (k === typescript_1.default.SyntaxKind.ElementAccessExpression)
        return true;
    if (typescript_1.default.isBinaryExpression(expr)) {
        const op = expr.operatorToken.kind;
        if (ASSIGN_OPS.has(op))
            return false;
        if (SHORTCIRCUIT_OPS.has(op))
            return false;
        return true;
    }
    if (typescript_1.default.isConditionalExpression(expr))
        return true;
    return false;
}
exports.noUnusedExpressions = {
    name: "no-unused-expressions",
    visit(node, ctx) {
        if (!typescript_1.default.isExpressionStatement(node))
            return;
        if (!hasNoSideEffect(node.expression))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-unused-expressions", message: "Bare expression has no effect." });
    },
};
//# sourceMappingURL=no-unused-expressions.js.map