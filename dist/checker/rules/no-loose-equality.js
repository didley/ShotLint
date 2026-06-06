"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLooseEquality = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noLooseEquality = {
    name: "no-loose-equality",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        const op = node.operatorToken.kind;
        if (op !== typescript_1.default.SyntaxKind.EqualsEqualsToken && op !== typescript_1.default.SyntaxKind.ExclamationEqualsToken)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-loose-equality", message: "Loose equality is not allowed. Use `===` / `!==`." });
    },
};
//# sourceMappingURL=no-loose-equality.js.map