"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noEmptyObjectType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noEmptyObjectType = {
    name: "no-empty-object-type",
    visit(node, ctx) {
        if (typescript_1.default.isTypeLiteralNode(node) && node.members.length === 0) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-empty-object-type", message: "`{}` is not allowed as a type. Use `unknown` or a specific shape." });
        }
    },
};
//# sourceMappingURL=no-empty-object-type.js.map