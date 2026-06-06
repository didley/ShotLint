"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireReadonlyArrays = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.requireReadonlyArrays = {
    name: "require-readonly-arrays",
    visit(node, ctx) {
        if (typescript_1.default.isArrayTypeNode(node)) {
            const parent = node.parent;
            const coveredByReadonly = typescript_1.default.isTypeOperatorNode(parent) &&
                parent.operator === typescript_1.default.SyntaxKind.ReadonlyKeyword;
            if (!coveredByReadonly) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "require-readonly-arrays", message: "Array types must be declared `readonly T[]`." });
            }
        }
    },
};
//# sourceMappingURL=require-readonly-arrays.js.map