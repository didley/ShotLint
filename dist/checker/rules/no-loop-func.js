"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLoopFunc = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const LOOP_KINDS = new Set([
    typescript_1.default.SyntaxKind.ForStatement,
    typescript_1.default.SyntaxKind.ForOfStatement,
    typescript_1.default.SyntaxKind.ForInStatement,
    typescript_1.default.SyntaxKind.WhileStatement,
    typescript_1.default.SyntaxKind.DoStatement,
]);
const FN_KINDS = new Set([
    typescript_1.default.SyntaxKind.FunctionDeclaration,
    typescript_1.default.SyntaxKind.FunctionExpression,
    typescript_1.default.SyntaxKind.ArrowFunction,
    typescript_1.default.SyntaxKind.MethodDeclaration,
]);
function walk(node, inLoop, ctx) {
    const isLoop = LOOP_KINDS.has(node.kind);
    const isFn = FN_KINDS.has(node.kind);
    if (isFn && inLoop) {
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, node);
        ctx.push({ ...pos, rule: "no-loop-func", message: "Declaring a function inside a loop closes over the loop variable — extract it." });
        typescript_1.default.forEachChild(node, (child) => walk(child, false, ctx));
        return;
    }
    typescript_1.default.forEachChild(node, (child) => walk(child, inLoop || isLoop, ctx));
}
exports.noLoopFunc = {
    name: "no-loop-func",
    visit(node, ctx) {
        if (node.kind !== typescript_1.default.SyntaxKind.SourceFile)
            return;
        typescript_1.default.forEachChild(node, (child) => walk(child, false, ctx));
    },
};
//# sourceMappingURL=no-loop-func.js.map