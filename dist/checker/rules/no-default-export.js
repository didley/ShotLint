"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDefaultExport = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDefaultExport = {
    name: "no-default-export",
    visit(node, ctx) {
        if (!typescript_1.default.isExportAssignment(node))
            return;
        if (node.isExportEquals)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-default-export", message: "Default exports are not allowed. Use named exports." });
    },
};
//# sourceMappingURL=no-default-export.js.map