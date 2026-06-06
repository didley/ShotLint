"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOptionalParameter = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noOptionalParameter = {
    name: "no-optional-parameter",
    visit(node, ctx) {
        if (typescript_1.default.isParameter(node) && node.questionToken !== undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-optional-parameter", message: "Optional parameters are not allowed. Use `| null` and require explicit values." });
        }
    },
};
//# sourceMappingURL=no-optional-parameter.js.map