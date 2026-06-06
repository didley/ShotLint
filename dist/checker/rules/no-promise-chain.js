"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noPromiseChain = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const CHAIN_METHODS = new Set(["then", "catch", "finally"]);
exports.noPromiseChain = {
    name: "no-promise-chain",
    visit(node, ctx) {
        if (!typescript_1.default.isCallExpression(node))
            return;
        const expr = node.expression;
        if (!typescript_1.default.isPropertyAccessExpression(expr))
            return;
        if (!CHAIN_METHODS.has(expr.name.text))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-promise-chain", message: "Promise chains are not allowed. Use `async`/`await`." });
    },
};
//# sourceMappingURL=no-promise-chain.js.map