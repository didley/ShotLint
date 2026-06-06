"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchNoFallthrough = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const TERMINATORS = new Set([
    typescript_1.default.SyntaxKind.BreakStatement,
    typescript_1.default.SyntaxKind.ReturnStatement,
    typescript_1.default.SyntaxKind.ThrowStatement,
    typescript_1.default.SyntaxKind.ContinueStatement,
]);
exports.switchNoFallthrough = {
    name: "switch-no-fallthrough",
    visit(node, ctx) {
        if (!typescript_1.default.isCaseClause(node))
            return;
        if (node.statements.length === 0)
            return;
        const last = node.statements[node.statements.length - 1];
        if (TERMINATORS.has(last.kind))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "switch-no-fallthrough", message: "Switch case must end with `break` or `return`." });
    },
};
//# sourceMappingURL=switch-no-fallthrough.js.map