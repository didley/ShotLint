import ts from "typescript"
import type { Diagnostic, Context } from "./types.js"
import { rules } from "./rules/index.js"
export { posOf } from "./pos.js"

export function check(file: string, source: string): Diagnostic[] {
    const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
    const diagnostics: Diagnostic[] = []

    interface SourceFileInternal {
        parseDiagnostics?: ts.DiagnosticWithLocation[]
    }
    const parseDiags = (sourceFile as unknown as SourceFileInternal).parseDiagnostics ?? []
    if (parseDiags.length > 0) {
        const d = parseDiags[0]
        if (!d) return diagnostics
        const pos = sourceFile.getLineAndCharacterOfPosition(d.start ?? 0)
        diagnostics.push({
            file,
            line: pos.line + 1,
            col: pos.character + 1,
            rule: "parse-error",
            message: ts.flattenDiagnosticMessageText(d.messageText, " "),
        })
        return diagnostics
    }

    const ctx: Context = {
        file,
        source,
        sourceFile,
        push(d) {
            diagnostics.push({ file, ...d })
        },
    }

    function walk(node: ts.Node): void {
        for (const rule of rules) {
            rule.visit(node, ctx)
        }
        ts.forEachChild(node, walk)
    }
    walk(sourceFile)

    return diagnostics
}
