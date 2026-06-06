"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noConstructorType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noConstructorType = {
    name: "no-constructor-type",
    visit(node, ctx) {
        if (typescript_1.default.isConstructorTypeNode(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-constructor-type", message: "Constructor type signatures are not allowed (no classes)." });
        }
    },
};
//# sourceMappingURL=no-constructor-type.js.map