"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIndexSignature = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noIndexSignature = {
    name: "no-index-signature",
    visit(node, ctx) {
        if (typescript_1.default.isIndexSignatureDeclaration(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-index-signature", message: "Index signatures are not allowed. Use `Map<K, V>`." });
        }
    },
};
//# sourceMappingURL=no-index-signature.js.map