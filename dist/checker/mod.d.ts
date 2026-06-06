import ts from "typescript";
import type { Diagnostic } from "./types.js";
export declare function posOf(sourceFile: ts.SourceFile, node: ts.Node): {
    line: number;
    col: number;
};
export declare function check(file: string, source: string): Diagnostic[];
//# sourceMappingURL=mod.d.ts.map