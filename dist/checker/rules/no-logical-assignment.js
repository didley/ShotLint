"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLogicalAssignment = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const LOGICAL_ASSIGN_OPS = new Set([
    typescript_1.default.SyntaxKind.BarBarEqualsToken,
    typescript_1.default.SyntaxKind.AmpersandAmpersandEqualsToken,
    typescript_1.default.SyntaxKind.QuestionQuestionEqualsToken,
]);
exports.noLogicalAssignment = {
    name: "no-logical-assignment",
    visit(node, ctx) {
        if (!typescript_1.default.isBinaryExpression(node))
            return;
        if (!LOGICAL_ASSIGN_OPS.has(node.operatorToken.kind))
            return;
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-logical-assignment", message: "Logical assignment is not allowed. Spell it out." });
    },
};
//# sourceMappingURL=no-logical-assignment.js.map