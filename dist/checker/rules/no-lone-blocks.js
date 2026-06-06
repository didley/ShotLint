"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLoneBlocks = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noLoneBlocks = {
    name: "no-lone-blocks",
    visit(node, ctx) {
        if (!typescript_1.default.isBlock(node))
            return;
        const parent = node.parent;
        if (!parent)
            return;
        const pk = parent.kind;
        if (pk === typescript_1.default.SyntaxKind.SourceFile ||
            pk === typescript_1.default.SyntaxKind.Block ||
            pk === typescript_1.default.SyntaxKind.ModuleBlock) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-lone-blocks", message: "Lone blocks are not allowed." });
        }
    },
};
//# sourceMappingURL=no-lone-blocks.js.map