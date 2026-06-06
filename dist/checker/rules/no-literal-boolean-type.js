"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLiteralBooleanType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function isBooleanLiteral(node) {
    return typescript_1.default.isLiteralTypeNode(node) &&
        (node.literal.kind === typescript_1.default.SyntaxKind.TrueKeyword || node.literal.kind === typescript_1.default.SyntaxKind.FalseKeyword);
}
exports.noLiteralBooleanType = {
    name: "no-literal-boolean-type",
    visit(node, ctx) {
        if (typescript_1.default.isUnionTypeNode(node) && node.types.length === 2) {
            const [a, b] = node.types;
            if (a && b && isBooleanLiteral(a) && isBooleanLiteral(b)) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-literal-boolean-type", message: "`true | false` is just `boolean`." });
            }
        }
    },
};
//# sourceMappingURL=no-literal-boolean-type.js.map