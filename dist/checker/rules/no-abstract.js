"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noAbstract = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function hasAbstractModifier(node) {
    const mods = node.modifiers;
    return mods?.some(m => m.kind === typescript_1.default.SyntaxKind.AbstractKeyword) ?? false;
}
exports.noAbstract = {
    name: "no-abstract",
    visit(node, ctx) {
        if (typescript_1.default.isClassDeclaration(node) && hasAbstractModifier(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-abstract", message: "`abstract` is not allowed." });
        }
        else if ((typescript_1.default.isMethodDeclaration(node) || typescript_1.default.isPropertyDeclaration(node) || typescript_1.default.isGetAccessorDeclaration(node) || typescript_1.default.isSetAccessorDeclaration(node)) &&
            hasAbstractModifier(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-abstract", message: "`abstract` is not allowed." });
        }
    },
};
//# sourceMappingURL=no-abstract.js.map