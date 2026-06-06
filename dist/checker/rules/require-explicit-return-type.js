"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireExplicitReturnType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.requireExplicitReturnType = {
    name: "require-explicit-return-type",
    visit(node, ctx) {
        if ((typescript_1.default.isFunctionDeclaration(node) || typescript_1.default.isFunctionExpression(node) || typescript_1.default.isMethodDeclaration(node)) &&
            node.type === undefined) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "require-explicit-return-type", message: "Function declarations must have an explicit return type annotation." });
        }
    },
};
//# sourceMappingURL=require-explicit-return-type.js.map