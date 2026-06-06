"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDoWhile = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDoWhile = {
    name: "no-do-while",
    visit(node, ctx) {
        if (!typescript_1.default.isDoStatement(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-do-while", message: "`do...while` is not allowed. Use `while`." });
    },
};
//# sourceMappingURL=no-do-while.js.map