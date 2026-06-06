"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noInterface = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noInterface = {
    name: "no-interface",
    visit(node, ctx) {
        if (typescript_1.default.isInterfaceDeclaration(node)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-interface", message: "`interface` is not allowed. Use `type`." });
        }
    },
};
//# sourceMappingURL=no-interface.js.map