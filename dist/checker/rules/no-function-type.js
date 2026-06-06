"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noFunctionType = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noFunctionType = {
    name: "no-function-type",
    visit(node, ctx) {
        if (typescript_1.default.isTypeReferenceNode(node) &&
            typescript_1.default.isIdentifier(node.typeName) &&
            node.typeName.escapedText === "Function") {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-function-type", message: "`Function` is not allowed. Declare the specific function signature." });
        }
    },
};
//# sourceMappingURL=no-function-type.js.map