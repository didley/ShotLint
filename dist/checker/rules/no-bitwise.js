"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noBitwise = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const BITWISE_BINARY = new Set([
    typescript_1.default.SyntaxKind.AmpersandToken,
    typescript_1.default.SyntaxKind.BarToken,
    typescript_1.default.SyntaxKind.CaretToken,
    typescript_1.default.SyntaxKind.LessThanLessThanToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanToken,
    typescript_1.default.SyntaxKind.AmpersandEqualsToken,
    typescript_1.default.SyntaxKind.BarEqualsToken,
    typescript_1.default.SyntaxKind.CaretEqualsToken,
    typescript_1.default.SyntaxKind.LessThanLessThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
]);
exports.noBitwise = {
    name: "no-bitwise",
    visit(node, ctx) {
        if (typescript_1.default.isBinaryExpression(node) && BITWISE_BINARY.has(node.operatorToken.kind)) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-bitwise", message: "Bitwise operators are not allowed." });
        }
        else if (typescript_1.default.isPrefixUnaryExpression(node) && node.operator === typescript_1.default.SyntaxKind.TildeToken) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-bitwise", message: "Bitwise operators are not allowed." });
        }
    },
};
//# sourceMappingURL=no-bitwise.js.map