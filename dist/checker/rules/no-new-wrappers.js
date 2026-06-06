"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noNewWrappers = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const WRAPPER_TYPES = new Set(["String", "Number", "Boolean", "Symbol"]);
exports.noNewWrappers = {
    name: "no-new-wrappers",
    visit(node, ctx) {
        if (!typescript_1.default.isNewExpression(node))
            return;
        const expr = node.expression;
        if (!typescript_1.default.isIdentifier(expr))
            return;
        if (!WRAPPER_TYPES.has(expr.text))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-new-wrappers", message: "`new String/Number/Boolean/Symbol` creates wrapped primitives — use the function call form." });
    },
};
//# sourceMappingURL=no-new-wrappers.js.map