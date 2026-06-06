"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noMultiVarDecl = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noMultiVarDecl = {
    name: "no-multi-var-decl",
    visit(node, ctx) {
        if (!typescript_1.default.isVariableDeclarationList(node))
            return;
        if (node.declarations.length <= 1)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-multi-var-decl", message: "One variable declaration per statement." });
    },
};
//# sourceMappingURL=no-multi-var-decl.js.map