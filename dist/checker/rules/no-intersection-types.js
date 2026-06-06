"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIntersectionTypes = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noIntersectionTypes = {
    name: "no-intersection-types",
    visit(node, ctx) {
        if (typescript_1.default.isIntersectionTypeNode(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-intersection-types", message: "Intersection types are not allowed. Spell out the combined shape." });
        }
    },
};
//# sourceMappingURL=no-intersection-types.js.map