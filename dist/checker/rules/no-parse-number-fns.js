"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noParseNumberFns = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function isParseNumberCall(node) {
    const expr = node.expression;
    if (typescript_1.default.isIdentifier(expr)) {
        return expr.text === "parseInt" || expr.text === "parseFloat";
    }
    if (typescript_1.default.isPropertyAccessExpression(expr)) {
        const obj = expr.expression;
        const name = expr.name.text;
        if (typescript_1.default.isIdentifier(obj) && obj.text === "Number") {
            return name === "parseInt" || name === "parseFloat";
        }
    }
    return false;
}
exports.noParseNumberFns = {
    name: "no-parse-number-fns",
    visit(node, ctx) {
        if (!typescript_1.default.isCallExpression(node))
            return;
        if (!isParseNumberCall(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-parse-number-fns", message: "Use `Number()` instead of `parseInt` / `parseFloat`." });
    },
};
//# sourceMappingURL=no-parse-number-fns.js.map