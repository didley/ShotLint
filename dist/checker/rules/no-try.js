"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTry = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noTry = {
    name: "no-try",
    visit(node, ctx) {
        if (!typescript_1.default.isTryStatement(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-try", message: "`try`/`catch`/`finally` is not allowed." });
    },
};
//# sourceMappingURL=no-try.js.map