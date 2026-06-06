"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noThrowingGlobals = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const BANNED_MEMBERS = new Map([
    ["JSON", new Set(["parse", "stringify"])],
    ["globalThis", new Set(["fetch"])],
]);
function isBannedPropertyAccess(node) {
    const obj = node.expression;
    if (!typescript_1.default.isIdentifier(obj))
        return false;
    const banned = BANNED_MEMBERS.get(obj.text);
    return banned !== undefined && banned.has(node.name.text);
}
exports.noThrowingGlobals = {
    name: "no-throwing-globals",
    visit(node, ctx) {
        if (typescript_1.default.isPropertyAccessExpression(node)) {
            if (isBannedPropertyAccess(node)) {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-throwing-globals", message: "This global throws on failure — wrap it in a safe function that returns [T, Error | null] instead." });
            }
        }
        else if (typescript_1.default.isCallExpression(node)) {
            const expr = node.expression;
            if (typescript_1.default.isIdentifier(expr) && expr.text === "fetch") {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-throwing-globals", message: "This global throws on failure — wrap it in a safe function that returns [T, Error | null] instead." });
            }
        }
    },
};
//# sourceMappingURL=no-throwing-globals.js.map