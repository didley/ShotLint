"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noNamespace = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noNamespace = {
    name: "no-namespace",
    visit(node, ctx) {
        if (!typescript_1.default.isModuleDeclaration(node))
            return;
        const keyword = (node.flags & typescript_1.default.NodeFlags.Namespace) !== 0 ? "namespace" : "module";
        ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-namespace", message: `\`${keyword}\` declarations are not allowed. Use ES modules instead.` });
    },
};
//# sourceMappingURL=no-namespace.js.map