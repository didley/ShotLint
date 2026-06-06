"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIndexImport = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const INDEX_SUFFIXES = ["/index.ts", "/index.tsx", "/index.js", "/index.mjs", "/index.cjs"];
function isIndexPath(spec) {
    return INDEX_SUFFIXES.some(function isSuffix(s) { return spec.endsWith(s); })
        || /\/index$/.test(spec);
}
function check(spec, node, ctx) {
    if (!isIndexPath(spec))
        return;
    ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-index-import", message: `Importing index files is not allowed. Import the specific module file instead (e.g. "./dir/module.ts").` });
}
exports.noIndexImport = {
    name: "no-index-import",
    visit(node, ctx) {
        if (typescript_1.default.isImportDeclaration(node) && typescript_1.default.isStringLiteral(node.moduleSpecifier)) {
            check(node.moduleSpecifier.text, node.moduleSpecifier, ctx);
        }
        else if (typescript_1.default.isExportDeclaration(node) && node.moduleSpecifier && typescript_1.default.isStringLiteral(node.moduleSpecifier)) {
            check(node.moduleSpecifier.text, node.moduleSpecifier, ctx);
        }
    },
};
//# sourceMappingURL=no-index-import.js.map