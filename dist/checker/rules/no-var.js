"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noVar = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noVar = {
    name: "no-var",
    visit(node, ctx) {
        if (!typescript_1.default.isVariableDeclarationList(node))
            return;
        if ((node.flags & (typescript_1.default.NodeFlags.Let | typescript_1.default.NodeFlags.Const)) !== 0)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-var", message: "`var` is not allowed. Use `const`." });
    },
};
//# sourceMappingURL=no-var.js.map