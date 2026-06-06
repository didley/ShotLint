"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noAny = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noAny = {
    name: "no-any",
    visit(node, ctx) {
        if (node.kind === typescript_1.default.SyntaxKind.AnyKeyword) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-any", message: "`any` is not allowed. Use `unknown` or a concrete type." });
        }
    },
};
//# sourceMappingURL=no-any.js.map