"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUselessComputedKey = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const IDENT_RE = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
exports.noUselessComputedKey = {
    name: "no-useless-computed-key",
    visit(node, ctx) {
        if (!typescript_1.default.isComputedPropertyName(node))
            return;
        const expr = node.expression;
        if (typescript_1.default.isStringLiteral(expr) && IDENT_RE.test(expr.text)) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-useless-computed-key", message: "Computed key is unnecessary — use the identifier form." });
        }
    },
};
//# sourceMappingURL=no-useless-computed-key.js.map