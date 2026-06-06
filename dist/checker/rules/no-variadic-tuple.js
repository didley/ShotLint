"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noVariadicTuple = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noVariadicTuple = {
    name: "no-variadic-tuple",
    visit(node, ctx) {
        if (typescript_1.default.isTupleTypeNode(node)) {
            const hasRest = node.elements.some(el => typescript_1.default.isRestTypeNode(el));
            if (hasRest) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-variadic-tuple", message: "Variadic tuples are not allowed. Give the rest a name in a struct type." });
            }
        }
    },
};
//# sourceMappingURL=no-variadic-tuple.js.map