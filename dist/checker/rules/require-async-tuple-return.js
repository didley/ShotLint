"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAsyncTupleReturn = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
// Returns true if typeNode is a union containing `null` (i.e. `X | null`).
function containsNull(typeNode) {
    if (!typescript_1.default.isUnionTypeNode(typeNode))
        return false;
    return typeNode.types.some(t => typescript_1.default.isLiteralTypeNode(t) && t.literal.kind === typescript_1.default.SyntaxKind.NullKeyword);
}
// Valid async return types:
//   Promise<void>                          — side-effect async, no meaningful return
//   Promise<never>                         — function that never resolves
//   Promise<[T | null, E | null]>          — standard tuple (second element nullable)
//   ShotPromise<T> / ShotPromise<T, E>     — canonical alias
function isValidAsyncReturn(typeNode) {
    if (!typescript_1.default.isTypeReferenceNode(typeNode))
        return false;
    const name = typeNode.typeName;
    if (!typescript_1.default.isIdentifier(name))
        return false;
    if (name.text === "ShotPromise")
        return true;
    if (name.text !== "Promise")
        return false;
    const args = typeNode.typeArguments;
    if (!args || args.length !== 1)
        return false;
    const inner = args[0];
    if (!inner)
        return false;
    if (inner.kind === typescript_1.default.SyntaxKind.VoidKeyword)
        return true;
    if (inner.kind === typescript_1.default.SyntaxKind.NeverKeyword)
        return true;
    if (!typescript_1.default.isTupleTypeNode(inner))
        return false;
    if (inner.elements.length !== 2)
        return false;
    const second = inner.elements[1];
    return second !== undefined && containsNull(second);
}
exports.requireAsyncTupleReturn = {
    name: "require-async-tuple-return",
    visit(node, ctx) {
        if (!typescript_1.default.isFunctionDeclaration(node) && !typescript_1.default.isFunctionExpression(node))
            return;
        const isAsync = node.modifiers?.some(m => m.kind === typescript_1.default.SyntaxKind.AsyncKeyword) ?? false;
        if (!isAsync)
            return;
        if (!node.type)
            return; // require-explicit-return-type already catches the missing annotation
        if (!isValidAsyncReturn(node.type)) {
            ctx.push({
                ...(0, mod_js_1.posOf)(ctx.sourceFile, node),
                rule: "require-async-tuple-return",
                message: `Async functions must return Promise<[T | null, E | null]> or ShotPromise<T, E>. Use a tuple return type so callers can handle errors explicitly.`,
            });
        }
    },
};
//# sourceMappingURL=require-async-tuple-return.js.map