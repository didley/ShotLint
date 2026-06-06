"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noArguments = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function isBindingPosition(node) {
    const parent = node.parent;
    if (!parent)
        return false;
    if (typescript_1.default.isVariableDeclaration(parent) && parent.name === node)
        return true;
    if (typescript_1.default.isParameter(parent) && parent.name === node)
        return true;
    if (typescript_1.default.isBindingElement(parent) && parent.name === node)
        return true;
    if (typescript_1.default.isFunctionDeclaration(parent) && parent.name === node)
        return true;
    if (typescript_1.default.isFunctionExpression(parent) && parent.name === node)
        return true;
    if (typescript_1.default.isPropertyAssignment(parent) && parent.name === node)
        return true;
    return false;
}
exports.noArguments = {
    name: "no-arguments",
    visit(node, ctx) {
        if (!typescript_1.default.isIdentifier(node))
            return;
        if (node.text !== "arguments")
            return;
        if (isBindingPosition(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-arguments", message: "`arguments` is not allowed. Use rest params `...args`." });
    },
};
//# sourceMappingURL=no-arguments.js.map