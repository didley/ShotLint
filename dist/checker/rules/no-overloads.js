"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOverloads = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noOverloads = {
    name: "no-overloads",
    visit(node, ctx) {
        if (typescript_1.default.isFunctionDeclaration(node) && node.body === undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-overloads", message: "Function overloads are not allowed. Use a union parameter type instead." });
        }
        if (typescript_1.default.isMethodDeclaration(node) && node.body === undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-overloads", message: "Method overloads are not allowed. Use a union parameter type instead." });
        }
    },
};
//# sourceMappingURL=no-overloads.js.map