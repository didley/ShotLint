"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLabels = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noLabels = {
    name: "no-labels",
    visit(node, ctx) {
        if (typescript_1.default.isLabeledStatement(node)) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-labels", message: "Labels are not allowed. Extract a function and `return`." });
        }
        else if (typescript_1.default.isBreakStatement(node) && node.label !== undefined) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-labels", message: "Labels are not allowed. Extract a function and `return`." });
        }
        else if (typescript_1.default.isContinueStatement(node) && node.label !== undefined) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
            ctx.push({ ...pos, rule: "no-labels", message: "Labels are not allowed. Extract a function and `return`." });
        }
    },
};
//# sourceMappingURL=no-labels.js.map