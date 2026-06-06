"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLetOutsideFor = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noLetOutsideFor = {
    name: "no-let-outside-for",
    visit(node, ctx) {
        if (!typescript_1.default.isVariableStatement(node))
            return;
        if ((node.declarationList.flags & typescript_1.default.NodeFlags.Let) === 0)
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-let-outside-for", message: "`let` is only allowed in a `for` header. Use `const`." });
    },
};
//# sourceMappingURL=no-let-outside-for.js.map