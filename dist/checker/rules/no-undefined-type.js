"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUndefinedType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noUndefinedType = {
    name: "no-undefined-type",
    visit(node, ctx) {
        // UndefinedKeyword only appears in type positions in the TS AST;
        // runtime `undefined` identifiers are Identifier nodes, not UndefinedKeyword.
        // Use `null` everywhere instead; use `void` for functions that return nothing.
        if (node.kind === typescript_1.default.SyntaxKind.UndefinedKeyword) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-undefined-type", message: "`undefined` is not allowed in types. Use `null` for absent values; use `void` for functions that return nothing." });
        }
    },
};
//# sourceMappingURL=no-undefined-type.js.map