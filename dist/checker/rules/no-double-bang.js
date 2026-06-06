"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDoubleBang = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDoubleBang = {
    name: "no-double-bang",
    visit(node, ctx) {
        if (!typescript_1.default.isPrefixUnaryExpression(node))
            return;
        if (node.operator !== typescript_1.default.SyntaxKind.ExclamationToken)
            return;
        const operand = node.operand;
        if (!typescript_1.default.isPrefixUnaryExpression(operand))
            return;
        if (operand.operator !== typescript_1.default.SyntaxKind.ExclamationToken)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-double-bang", message: "`!!` is not allowed. Use `Boolean()`." });
    },
};
//# sourceMappingURL=no-double-bang.js.map