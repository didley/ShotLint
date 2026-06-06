"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noNonNull = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noNonNull = {
    name: "no-non-null",
    visit(node, ctx) {
        if (typescript_1.default.isNonNullExpression(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-non-null", message: "Non-null assertions (`!`) are not allowed." });
        }
    },
};
//# sourceMappingURL=no-non-null.js.map