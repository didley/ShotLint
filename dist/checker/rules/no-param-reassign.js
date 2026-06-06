"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noParamReassign = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const ASSIGN_OPS = new Set([
    typescript_1.default.SyntaxKind.EqualsToken,
    typescript_1.default.SyntaxKind.PlusEqualsToken,
    typescript_1.default.SyntaxKind.MinusEqualsToken,
    typescript_1.default.SyntaxKind.AsteriskEqualsToken,
    typescript_1.default.SyntaxKind.SlashEqualsToken,
    typescript_1.default.SyntaxKind.PercentEqualsToken,
    typescript_1.default.SyntaxKind.AsteriskAsteriskEqualsToken,
    typescript_1.default.SyntaxKind.AmpersandEqualsToken,
    typescript_1.default.SyntaxKind.BarEqualsToken,
    typescript_1.default.SyntaxKind.CaretEqualsToken,
    typescript_1.default.SyntaxKind.LessThanLessThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanEqualsToken,
    typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
]);
function collectNames(node) {
    if (typescript_1.default.isIdentifier(node))
        return [node.text];
    const names = [];
    for (const elem of node.elements) {
        if (typescript_1.default.isBindingElement(elem))
            names.push(...collectNames(elem.name));
    }
    return names;
}
function isParamInScope(frames, name) {
    for (let i = frames.length - 1; i >= 0; i--) {
        if (frames[i].isFunction) {
            return frames[i].params.has(name);
        }
    }
    return false;
}
function walk(node, frames, ctx) {
    if (typescript_1.default.isFunctionDeclaration(node) || typescript_1.default.isFunctionExpression(node) || typescript_1.default.isArrowFunction(node)) {
        const fnNode = node;
        const params = new Set();
        for (const param of fnNode.parameters) {
            for (const name of collectNames(param.name))
                params.add(name);
        }
        frames.push({ params, isFunction: true });
        const body = node.body;
        if (body)
            walk(body, frames, ctx);
        frames.pop();
    }
    else if (typescript_1.default.isBinaryExpression(node) && ASSIGN_OPS.has(node.operatorToken.kind)) {
        const lhs = node.left;
        if (typescript_1.default.isIdentifier(lhs) && isParamInScope(frames, lhs.text)) {
            const pos = (0, mod_js_1.posOf)(ctx.sourceFile, lhs);
            ctx.push({ ...pos, rule: "no-param-reassign", message: "Function parameters cannot be reassigned. Use a new `const`." });
        }
        walk(node.right, frames, ctx);
    }
    else {
        typescript_1.default.forEachChild(node, (child) => walk(child, frames, ctx));
    }
}
exports.noParamReassign = {
    name: "no-param-reassign",
    visit(node, ctx) {
        if (node.kind !== typescript_1.default.SyntaxKind.SourceFile)
            return;
        typescript_1.default.forEachChild(node, (child) => walk(child, [{ params: new Set(), isFunction: false }], ctx));
    },
};
//# sourceMappingURL=no-param-reassign.js.map