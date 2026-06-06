"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noMetaprogrammingGlobals = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const BANNED_GLOBALS = new Set(["Proxy", "Reflect", "Function", "Symbol"]);
const BANNED_OBJECT_METHODS = new Set([
    "create", "assign", "defineProperty", "defineProperties",
    "getOwnPropertyDescriptor", "getOwnPropertyDescriptors",
    "getOwnPropertyNames", "getOwnPropertySymbols",
    "getPrototypeOf", "setPrototypeOf",
]);
exports.noMetaprogrammingGlobals = {
    name: "no-metaprogramming-globals",
    visit(node, ctx) {
        if (typescript_1.default.isIdentifier(node)) {
            const name = node.escapedText;
            if (BANNED_GLOBALS.has(name)) {
                // Skip when in type position (TypeReferenceNode's typeName)
                if (typescript_1.default.isTypeReferenceNode(node.parent))
                    return;
                // Skip when it's the property name part of a PropertyAccessExpression
                if (typescript_1.default.isPropertyAccessExpression(node.parent) && node.parent.name === node)
                    return;
                // Skip import bindings
                if (typescript_1.default.isImportSpecifier(node.parent) || typescript_1.default.isImportClause(node.parent))
                    return;
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-metaprogramming-globals", message: "Metaprogramming globals are banned." });
            }
        }
        else if (typescript_1.default.isPropertyAccessExpression(node)) {
            const expr = node.expression;
            if (typescript_1.default.isIdentifier(expr) &&
                expr.escapedText === "Object" &&
                BANNED_OBJECT_METHODS.has(node.name.escapedText)) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-metaprogramming-globals", message: "Metaprogramming globals are banned." });
            }
        }
    },
};
//# sourceMappingURL=no-metaprogramming-globals.js.map