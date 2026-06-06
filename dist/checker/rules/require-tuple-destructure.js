"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireTupleDestructure = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const STD_FNS = new Set(["fetch", "jsonParse", "jsonStringify", "readFile", "writeFile"]);
function collectStdImports(sourceFile) {
    const imported = new Set();
    for (const stmt of sourceFile.statements) {
        if (!typescript_1.default.isImportDeclaration(stmt))
            continue;
        const spec = stmt.moduleSpecifier;
        if (!typescript_1.default.isStringLiteral(spec) || spec.text !== "shot:std")
            continue;
        const bindings = stmt.importClause?.namedBindings;
        if (!bindings || !typescript_1.default.isNamedImports(bindings))
            continue;
        for (const el of bindings.elements) {
            const name = el.name.escapedText;
            if (STD_FNS.has(name))
                imported.add(name);
        }
    }
    return imported;
}
function walk(node, stdImports, ctx) {
    if (typescript_1.default.isVariableDeclaration(node)) {
        if (stdImports.size > 0 && typescript_1.default.isIdentifier(node.name) && node.initializer) {
            let init = node.initializer;
            // Peel one await
            if (typescript_1.default.isAwaitExpression(init))
                init = init.expression;
            if (typescript_1.default.isCallExpression(init)) {
                const callee = init.expression;
                if (typescript_1.default.isIdentifier(callee) && stdImports.has(callee.escapedText)) {
                    ctx.push({
                        ...(0, mod_js_1.posOf)(ctx.sourceFile, node),
                        rule: "require-tuple-destructure",
                        message: `Tuple-returning calls must be destructured: use \`const [result, err] = ...\`.`,
                    });
                }
            }
        }
    }
    typescript_1.default.forEachChild(node, child => walk(child, stdImports, ctx));
}
exports.requireTupleDestructure = {
    name: "require-tuple-destructure",
    visit(node, ctx) {
        if (node.kind !== typescript_1.default.SyntaxKind.SourceFile)
            return;
        const stdImports = collectStdImports(node);
        // Walk children only (SourceFile itself is not a VariableDeclaration)
        typescript_1.default.forEachChild(node, child => walk(child, stdImports, ctx));
    },
};
//# sourceMappingURL=require-tuple-destructure.js.map