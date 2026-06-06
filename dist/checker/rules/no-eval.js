"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noEval = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noEval = {
    name: "no-eval",
    visit(node, ctx) {
        if (!typescript_1.default.isCallExpression(node))
            return;
        const expr = node.expression;
        if (!typescript_1.default.isIdentifier(expr))
            return;
        if (expr.text !== "eval")
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-eval", message: "`eval` is not allowed." });
    },
};
//# sourceMappingURL=no-eval.js.map