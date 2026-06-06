"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const glob_1 = require("glob");
const mod_js_1 = require("./checker/mod.js");
function usage() {
    process.stderr.write("Usage: shot-rules <glob...>\n");
    process.stderr.write("  shot-rules 'src/**/*.ts'\n");
    process.stderr.write("  shot-rules src/index.ts src/lib.ts\n");
    process.exit(1);
}
const patterns = process.argv.slice(2).filter(function isNotFlag(a) { return !a.startsWith("--"); });
const flags = process.argv.slice(2).filter(function isFlag(a) { return a.startsWith("--"); });
const jsonOutput = flags.includes("--json");
if (patterns.length === 0) {
    usage();
}
const files = patterns.flatMap(function expand(pattern) {
    return (0, glob_1.globSync)(pattern, { absolute: true });
});
if (files.length === 0) {
    process.stderr.write(`shot-rules: no files matched patterns: ${patterns.join(", ")}\n`);
    process.exit(1);
}
let totalDiagnostics = 0;
const results = files.map(function checkFile(file) {
    const source = (0, node_fs_1.readFileSync)(file, "utf8");
    return (0, mod_js_1.check)((0, node_path_1.relative)(process.cwd(), (0, node_path_1.resolve)(file)), source);
});
if (jsonOutput) {
    const all = results.flat();
    process.stdout.write(JSON.stringify(all, null, 2) + "\n");
    process.exit(all.length > 0 ? 1 : 0);
}
for (const diags of results) {
    for (const d of diags) {
        process.stdout.write(`${d.file}:${d.line}:${d.col}: [${d.rule}] ${d.message}\n`);
        totalDiagnostics += 1;
    }
}
if (totalDiagnostics > 0) {
    process.stderr.write(`\n${totalDiagnostics} violation${totalDiagnostics === 1 ? "" : "s"} found.\n`);
    process.exit(1);
}
//# sourceMappingURL=cli.js.map