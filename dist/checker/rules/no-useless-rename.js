"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUselessRename = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noUselessRename = {
    name: "no-useless-rename",
    visit(node, ctx) {
        if (typescript_1.default.isImportSpecifier(node)) {
            if (node.propertyName && node.propertyName.text === node.name.text) {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-useless-rename", message: "Useless rename — drop the alias." });
            }
        }
        else if (typescript_1.default.isExportSpecifier(node)) {
            if (node.propertyName && node.propertyName.text === node.name.text) {
                const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                ctx.push({ ...pos, rule: "no-useless-rename", message: "Useless rename — drop the alias." });
            }
        }
        else if (typescript_1.default.isBindingElement(node)) {
            const propName = node.propertyName;
            if (propName && typescript_1.default.isIdentifier(propName) && typescript_1.default.isIdentifier(node.name)) {
                if (propName.text === node.name.text) {
                    const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
                    ctx.push({ ...pos, rule: "no-useless-rename", message: "Useless rename — drop the alias." });
                }
            }
        }
    },
};
//# sourceMappingURL=no-useless-rename.js.map