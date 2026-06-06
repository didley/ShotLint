"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDefaultParameter = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDefaultParameter = {
    name: "no-default-parameter",
    visit(node, ctx) {
        if (typescript_1.default.isParameter(node) && node.initializer !== undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-default-parameter", message: "Default parameters are not allowed (uses `undefined` as sentinel). Wrap with a thin function instead." });
        }
    },
};
//# sourceMappingURL=no-default-parameter.js.map