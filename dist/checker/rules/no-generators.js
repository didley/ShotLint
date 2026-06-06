"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noGenerators = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noGenerators = {
    name: "no-generators",
    visit(node, ctx) {
        if ((typescript_1.default.isFunctionDeclaration(node) || typescript_1.default.isFunctionExpression(node) || typescript_1.default.isMethodDeclaration(node)) &&
            node.asteriskToken !== undefined) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-generators", message: "Generators are not allowed." });
        }
        else if (typescript_1.default.isYieldExpression(node)) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-generators", message: "Generators are not allowed." });
        }
    },
};
//# sourceMappingURL=no-generators.js.map