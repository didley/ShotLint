"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTernary = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noTernary = {
    name: "no-ternary",
    visit(node, ctx) {
        if (!typescript_1.default.isConditionalExpression(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-ternary", message: "Ternary expressions are not allowed. Use a named function." });
    },
};
//# sourceMappingURL=no-ternary.js.map