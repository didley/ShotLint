import ts from "typescript"
import type { Rule } from "../types.js"
import { posOf } from "../mod.js"

export const noVoid: Rule = {
    name: "no-void",
    visit(node, ctx) {
        if (!ts.isVoidExpression(node)) return
        const pos = posOf(ctx.sourceFile, node)
        ctx.push({ ...pos, rule: "no-void", message: "Statement-level `void` is not allowed." })
    },
}
