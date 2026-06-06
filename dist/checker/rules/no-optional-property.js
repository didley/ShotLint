"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOptionalProperty = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noOptionalProperty = {
    name: "no-optional-property",
    visit(node, ctx) {
        if (typescript_1.default.isPropertySignature(node) && node.questionToken !== undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-optional-property", message: "Optional properties (`?:`) are not allowed. Use `| null` explicitly." });
        }
    },
};
//# sourceMappingURL=no-optional-property.js.map