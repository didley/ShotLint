"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSymbolType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noSymbolType = {
    name: "no-symbol-type",
    visit(node, ctx) {
        if (node.kind === typescript_1.default.SyntaxKind.SymbolKeyword) {
            // Skip the SymbolKeyword child of `unique symbol` — the TypeOperatorNode fires instead
            const parent = node.parent;
            if (typescript_1.default.isTypeOperatorNode(parent) && parent.operator === typescript_1.default.SyntaxKind.UniqueKeyword)
                return;
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-symbol-type", message: "`symbol` / `unique symbol` types are not allowed." });
        }
        else if (typescript_1.default.isTypeOperatorNode(node) && node.operator === typescript_1.default.SyntaxKind.UniqueKeyword) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-symbol-type", message: "`symbol` / `unique symbol` types are not allowed." });
        }
    },
};
//# sourceMappingURL=no-symbol-type.js.map