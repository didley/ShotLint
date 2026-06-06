"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIn = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noIn = {
    name: "no-in",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (node.operatorToken.kind !== typescript_1.default.SyntaxKind.InKeyword)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-in", message: "`in` operator is not allowed." });
    },
};
//# sourceMappingURL=no-in.js.map