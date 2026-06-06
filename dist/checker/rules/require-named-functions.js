"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireNamedFunctions = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.requireNamedFunctions = {
    name: "require-named-functions",
    visit(node, ctx) {
        if (!typescript_1.default.isFunctionExpression(node))
            return;
        if (node.name !== undefined)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "require-named-functions", message: "Function expressions must be named." });
    },
};
//# sourceMappingURL=require-named-functions.js.map