"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noArrowFunctions = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noArrowFunctions = {
    name: "no-arrow-functions",
    visit(node, ctx) {
        if (!typescript_1.default.isArrowFunction(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-arrow-functions", message: "Arrow functions are not allowed. Use the `function` keyword." });
    },
};
//# sourceMappingURL=no-arrow-functions.js.map