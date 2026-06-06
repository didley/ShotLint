"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noShadow = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
function collectNames(node) {
    if (typescript_1.default.isIdentifier(node))
        return [node.text];
    const names = [];
    for (const elem of node.elements) {
        if (typescript_1.default.isBindingElement(elem))
            names.push(...collectNames(elem.name));
        // OmittedExpression: skip
    }
    return names;
}
function isDefinedAbove(scopes, name) {
    for (let i = scopes.length - 2; i >= 0; i--) {
        if (scopes[i].bindings.has(name))
            return true;
    }
    return false;
}
function addBinding(scopes, name, declNode, ctx) {
    if (isDefinedAbove(scopes, name)) {
        const pos = (0, mod_js_1.posOf)(ctx.sourceFile, declNode);
        ctx.push({ ...pos, rule: "no-shadow", message: "Variable shadowing is not allowed. Rename the inner binding." });
    }
    scopes[scopes.length - 1].bindings.set(name, declNode);
}
function walk(node, scopes, ctx) {
    if (typescript_1.default.isFunctionDeclaration(node)) {
        if (node.name) {
            addBinding(scopes, node.name.text, node.name, ctx);
        }
        const frame = { bindings: new Map() };
        scopes.push(frame);
        for (const param of node.parameters) {
            for (const name of collectNames(param.name)) {
                addBinding(scopes, name, param.name, ctx);
            }
        }
        if (node.body)
            walk(node.body, scopes, ctx);
        scopes.pop();
    }
    else if (typescript_1.default.isFunctionExpression(node)) {
        const frame = { bindings: new Map() };
        scopes.push(frame);
        if (node.name) {
            frame.bindings.set(node.name.text, node.name);
        }
        for (const param of node.parameters) {
            for (const name of collectNames(param.name)) {
                addBinding(scopes, name, param.name, ctx);
            }
        }
        if (node.body)
            walk(node.body, scopes, ctx);
        scopes.pop();
    }
    else if (typescript_1.default.isArrowFunction(node)) {
        const frame = { bindings: new Map() };
        scopes.push(frame);
        for (const param of node.parameters) {
            for (const name of collectNames(param.name)) {
                addBinding(scopes, name, param.name, ctx);
            }
        }
        const body = node.body;
        if (typescript_1.default.isBlock(body)) {
            walk(body, scopes, ctx);
        }
        else {
            walk(body, scopes, ctx);
        }
        scopes.pop();
    }
    else if (typescript_1.default.isBlock(node)) {
        const parent = node.parent;
        const isFnBody = parent &&
            (typescript_1.default.isFunctionDeclaration(parent) || typescript_1.default.isFunctionExpression(parent) || typescript_1.default.isArrowFunction(parent));
        if (!isFnBody) {
            scopes.push({ bindings: new Map() });
        }
        typescript_1.default.forEachChild(node, (child) => walk(child, scopes, ctx));
        if (!isFnBody)
            scopes.pop();
    }
    else if (typescript_1.default.isVariableDeclaration(node)) {
        for (const name of collectNames(node.name)) {
            addBinding(scopes, name, node.name, ctx);
        }
        if (node.initializer)
            walk(node.initializer, scopes, ctx);
    }
    else if (typescript_1.default.isForStatement(node) || typescript_1.default.isForOfStatement(node) || typescript_1.default.isForInStatement(node)) {
        scopes.push({ bindings: new Map() });
        typescript_1.default.forEachChild(node, (child) => walk(child, scopes, ctx));
        scopes.pop();
    }
    else if (typescript_1.default.isImportDeclaration(node)) {
        const clause = node.importClause;
        if (clause) {
            if (clause.name)
                addBinding(scopes, clause.name.text, clause.name, ctx);
            if (clause.namedBindings) {
                if (typescript_1.default.isNamespaceImport(clause.namedBindings)) {
                    addBinding(scopes, clause.namedBindings.name.text, clause.namedBindings.name, ctx);
                }
                else if (typescript_1.default.isNamedImports(clause.namedBindings)) {
                    for (const spec of clause.namedBindings.elements) {
                        addBinding(scopes, spec.name.text, spec.name, ctx);
                    }
                }
            }
        }
    }
    else {
        typescript_1.default.forEachChild(node, (child) => walk(child, scopes, ctx));
    }
}
exports.noShadow = {
    name: "no-shadow",
    visit(node, ctx) {
        if (node.kind !== typescript_1.default.SyntaxKind.SourceFile)
            return;
        const scopes = [{ bindings: new Map() }];
        typescript_1.default.forEachChild(node, (child) => walk(child, scopes, ctx));
    },
};
//# sourceMappingURL=no-shadow.js.map