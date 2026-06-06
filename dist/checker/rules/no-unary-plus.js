"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUnaryPlus = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noUnaryPlus = {
    name: "no-unary-plus",
    visit(node, ctx) {
        if (!typescript_1.default.isPrefixUnaryExpression(node))
            return;
        if (node.operator !== typescript_1.default.SyntaxKind.PlusToken)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-unary-plus", message: "Unary `+` coercion is not allowed. Use `Number()`." });
    },
};
//# sourceMappingURL=no-unary-plus.js.map