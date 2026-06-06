"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noConditionalType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function containsInfer(node) {
    if (typescript_1.default.isInferTypeNode(node))
        return true;
    return !!typescript_1.default.forEachChild(node, containsInfer);
}
exports.noConditionalType = {
    name: "no-conditional-type",
    visit(node, ctx) {
        if (typescript_1.default.isConditionalTypeNode(node)) {
            // If the conditional type contains `infer`, defer to no-infer to avoid double-reporting
            if (containsInfer(node))
                return;
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-conditional-type", message: "Conditional types are not allowed." });
        }
    },
};
//# sourceMappingURL=no-conditional-type.js.map