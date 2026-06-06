"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noReadonlyWrapper = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noReadonlyWrapper = {
    name: "no-readonly-wrapper",
    visit(node, ctx) {
        if (typescript_1.default.isTypeReferenceNode(node) &&
            typescript_1.default.isIdentifier(node.typeName) &&
            node.typeName.escapedText === "Readonly") {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-readonly-wrapper", message: "`Readonly<T>` is redundant; declare each property `readonly`." });
        }
    },
};
//# sourceMappingURL=no-readonly-wrapper.js.map