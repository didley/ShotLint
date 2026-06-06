"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDelete = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDelete = {
    name: "no-delete",
    visit(node, ctx) {
        if (!typescript_1.default.isDeleteExpression(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-delete", message: "`delete` is not allowed." });
    },
};
//# sourceMappingURL=no-delete.js.map