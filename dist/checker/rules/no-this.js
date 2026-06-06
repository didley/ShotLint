"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noThis = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noThis = {
    name: "no-this",
    visit(node, ctx) {
        if (node.kind === typescript_1.default.SyntaxKind.ThisKeyword) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-this", message: "`this` is not allowed." });
        }
    },
};
//# sourceMappingURL=no-this.js.map