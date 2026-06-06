"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noInfer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noInfer = {
    name: "no-infer",
    visit(node, ctx) {
        if (typescript_1.default.isInferTypeNode(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-infer", message: "`infer` is not allowed." });
        }
    },
};
//# sourceMappingURL=no-infer.js.map