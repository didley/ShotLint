"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noAssertion = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function isAsConst(node) {
    const t = node.type;
    return typescript_1.default.isTypeReferenceNode(t) &&
        typescript_1.default.isIdentifier(t.typeName) &&
        t.typeName.escapedText === "const";
}
exports.noAssertion = {
    name: "no-assertion",
    visit(node, ctx) {
        if (typescript_1.default.isAsExpression(node)) {
            if (!isAsConst(node)) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-assertion", message: "Type assertions are not allowed. `as const` is the only exception." });
            }
        }
        else if (typescript_1.default.isTypeAssertionExpression(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-assertion", message: "Type assertions are not allowed. `as const` is the only exception." });
        }
    },
};
//# sourceMappingURL=no-assertion.js.map