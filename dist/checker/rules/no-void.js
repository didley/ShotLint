"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noVoid = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noVoid = {
    name: "no-void",
    visit(node, ctx) {
        if (!typescript_1.default.isVoidExpression(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-void", message: "Statement-level `void` is not allowed." });
    },
};
//# sourceMappingURL=no-void.js.map