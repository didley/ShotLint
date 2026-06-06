"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noEmpty = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noEmpty = {
    name: "no-empty",
    visit(node, ctx) {
        if (!typescript_1.default.isBlock(node))
            return;
        if (node.statements.length !== 0)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-empty", message: "Empty blocks are not allowed." });
    },
};
//# sourceMappingURL=no-empty.js.map