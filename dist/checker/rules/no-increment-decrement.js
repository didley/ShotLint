"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIncrementDecrement = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noIncrementDecrement = {
    name: "no-increment-decrement",
    visit(node, ctx) {
        if (typescript_1.default.isPostfixUnaryExpression(node)) {
            const op = node.operator;
            if (op === typescript_1.default.SyntaxKind.PlusPlusToken || op === typescript_1.default.SyntaxKind.MinusMinusToken) {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-increment-decrement", message: "`++` and `--` are not allowed. Use `+= 1` or `-= 1`." });
            }
        }
        else if (typescript_1.default.isPrefixUnaryExpression(node)) {
            const op = node.operator;
            if (op === typescript_1.default.SyntaxKind.PlusPlusToken || op === typescript_1.default.SyntaxKind.MinusMinusToken) {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-increment-decrement", message: "`++` and `--` are not allowed. Use `+= 1` or `-= 1`." });
            }
        }
    },
};
//# sourceMappingURL=no-increment-decrement.js.map