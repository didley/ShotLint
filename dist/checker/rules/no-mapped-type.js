"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noMappedType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noMappedType = {
    name: "no-mapped-type",
    visit(node, ctx) {
        if (typescript_1.default.isMappedTypeNode(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-mapped-type", message: "Mapped types are not allowed." });
        }
    },
};
//# sourceMappingURL=no-mapped-type.js.map