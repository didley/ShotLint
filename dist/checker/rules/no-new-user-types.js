"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noNewUserTypes = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const ALLOWED_CONSTRUCTORS = new Set([
    // Primitive wrappers — caught by no-new-wrappers, allowed here to avoid double-reporting
    "String", "Number", "Boolean", "Symbol",
    "Error", "TypeError", "RangeError", "SyntaxError",
    "Map", "Set", "WeakMap", "WeakSet",
    "Date", "URL", "URLSearchParams", "RegExp",
    "Promise",
    "Uint8Array", "Uint16Array", "Uint32Array",
    "Int8Array", "Int16Array", "Int32Array",
    "Float32Array", "Float64Array",
    "BigInt64Array", "BigUint64Array",
    "ArrayBuffer", "DataView",
    "TextDecoder", "TextEncoder",
    "AbortController", "AbortSignal",
    "EventTarget", "Event", "CustomEvent",
    "Headers", "Request", "Response",
    "Blob", "File", "FormData",
    "Worker",
]);
exports.noNewUserTypes = {
    name: "no-new-user-types",
    visit(node, ctx) {
        if (!typescript_1.default.isNewExpression(node))
            return;
        const expr = node.expression;
        if (!typescript_1.default.isIdentifier(expr))
            return;
        if (ALLOWED_CONSTRUCTORS.has(expr.text))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-new-user-types", message: "`new` is only allowed on built-in runtime constructors." });
    },
};
//# sourceMappingURL=no-new-user-types.js.map