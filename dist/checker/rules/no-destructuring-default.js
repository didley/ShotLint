"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDestructuringDefault = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDestructuringDefault = {
    name: "no-destructuring-default",
    visit(node, ctx) {
        if (!typescript_1.default.isBindingElement(node))
            return;
        if (node.initializer === undefined)
            return;
        const parent = node.parent;
        if (!typescript_1.default.isObjectBindingPattern(parent) && !typescript_1.default.isArrayBindingPattern(parent))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-destructuring-default", message: "Defaults in destructuring rely on `undefined` (banned sentinel)." });
    },
};
//# sourceMappingURL=no-destructuring-default.js.map