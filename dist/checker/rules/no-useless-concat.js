"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUselessConcat = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noUselessConcat = {
    name: "no-useless-concat",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.PlusToken)
            return;
        if (!typescript_1.default.isStringLiteral(node.left))
            return;
        if (!typescript_1.default.isStringLiteral(node.right))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-useless-concat", message: "Concatenating string literals — write a single literal." });
    },
};
//# sourceMappingURL=no-useless-concat.js.map