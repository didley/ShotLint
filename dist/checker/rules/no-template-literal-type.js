"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTemplateLiteralType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noTemplateLiteralType = {
    name: "no-template-literal-type",
    visit(node, ctx) {
        if (typescript_1.default.isTemplateLiteralTypeNode(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-template-literal-type", message: "Template literal types are not allowed." });
        }
    },
};
//# sourceMappingURL=no-template-literal-type.js.map