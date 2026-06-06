"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireReadonlyProperty = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.requireReadonlyProperty = {
    name: "require-readonly-property",
    visit(node, ctx) {
        if (typescript_1.default.isPropertySignature(node)) {
            const hasReadonly = node.modifiers?.some(m => m.kind === typescript_1.default.SyntaxKind.ReadonlyKeyword) ?? false;
            if (!hasReadonly) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "require-readonly-property", message: "Object type properties must be declared `readonly`." });
            }
        }
    },
};
//# sourceMappingURL=require-readonly-property.js.map