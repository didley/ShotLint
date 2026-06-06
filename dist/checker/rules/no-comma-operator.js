"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noCommaOperator = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noCommaOperator = {
    name: "no-comma-operator",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.CommaToken)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-comma-operator", message: "Comma operator is not allowed." });
    },
};
//# sourceMappingURL=no-comma-operator.js.map