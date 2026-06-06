"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noThrow = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noThrow = {
    name: "no-throw",
    visit(node, ctx) {
        if (!typescript_1.default.isThrowStatement(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-throw", message: "`throw` is not allowed. Return `[T, Error | null]` tuples." });
    },
};
//# sourceMappingURL=no-throw.js.map