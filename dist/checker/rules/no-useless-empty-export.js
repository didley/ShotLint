"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUselessEmptyExport = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noUselessEmptyExport = {
    name: "no-useless-empty-export",
    visit(node, ctx) {
        if (!typescript_1.default.isExportDeclaration(node))
            return;
        const clause = node.exportClause;
        if (!clause)
            return;
        if (!typescript_1.default.isNamedExports(clause))
            return;
        if (clause.elements.length !== 0)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-useless-empty-export", message: "`export {}` is meaningless under `moduleDetection: force`." });
    },
};
//# sourceMappingURL=no-useless-empty-export.js.map