"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noObjectType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noObjectType = {
    name: "no-object-type",
    visit(node, ctx) {
        if (node.kind === typescript_1.default.SyntaxKind.ObjectKeyword) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-object-type", message: "`object` / `Object` is not allowed. Use a specific type." });
        }
        else if (typescript_1.default.isTypeReferenceNode(node) &&
            typescript_1.default.isIdentifier(node.typeName) &&
            node.typeName.escapedText === "Object") {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-object-type", message: "`object` / `Object` is not allowed. Use a specific type." });
        }
    },
};
//# sourceMappingURL=no-object-type.js.map