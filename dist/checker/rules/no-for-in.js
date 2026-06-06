"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noForIn = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noForIn = {
    name: "no-for-in",
    visit(node, ctx) {
        if (!typescript_1.default.isForInStatement(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-for-in", message: "`for...in` is not allowed. Use `for...of` or indexed `for`." });
    },
};
//# sourceMappingURL=no-for-in.js.map