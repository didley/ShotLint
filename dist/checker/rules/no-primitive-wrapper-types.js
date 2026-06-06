"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noPrimitiveWrapperTypes = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const BANNED = new Set(["String", "Number", "Boolean", "Symbol"]);
exports.noPrimitiveWrapperTypes = {
    name: "no-primitive-wrapper-types",
    visit(node, ctx) {
        if (typescript_1.default.isTypeReferenceNode(node) &&
            typescript_1.default.isIdentifier(node.typeName) &&
            BANNED.has(node.typeName.escapedText)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-primitive-wrapper-types", message: "Use the lowercase primitive type." });
        }
    },
};
//# sourceMappingURL=no-primitive-wrapper-types.js.map