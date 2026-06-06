"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTaggedTemplates = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noTaggedTemplates = {
    name: "no-tagged-templates",
    visit(node, ctx) {
        if (!typescript_1.default.isTaggedTemplateExpression(node))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-tagged-templates", message: "Tagged template literals are not allowed." });
    },
};
//# sourceMappingURL=no-tagged-templates.js.map