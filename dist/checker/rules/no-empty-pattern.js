"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noEmptyPattern = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noEmptyPattern = {
    name: "no-empty-pattern",
    visit(node, ctx) {
        if (typescript_1.default.isObjectBindingPattern(node) && node.elements.length === 0) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-empty-pattern", message: "Empty destructure has no effect." });
        }
        else if (typescript_1.default.isArrayBindingPattern(node) && node.elements.length === 0) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-empty-pattern", message: "Empty destructure has no effect." });
        }
    },
};
//# sourceMappingURL=no-empty-pattern.js.map