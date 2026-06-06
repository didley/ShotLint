"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noClass = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function hasAbstract(node) {
    return node.modifiers?.some(m => m.kind === typescript_1.default.SyntaxKind.AbstractKeyword) ?? false;
}
function hasDecorator(node) {
    return node.modifiers?.some(m => m.kind === typescript_1.default.SyntaxKind.Decorator) ?? false;
}
exports.noClass = {
    name: "no-class",
    visit(node, ctx) {
        if (typescript_1.default.isClassDeclaration(node) || typescript_1.default.isClassExpression(node)) {
            // Defer abstract classes to no-abstract and decorated to no-decorators
            if (hasAbstract(node) || hasDecorator(node))
                return;
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-class", message: "`class` is not allowed. Use plain objects + functions." });
        }
    },
};
//# sourceMappingURL=no-class.js.map