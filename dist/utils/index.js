"use strict";
/**
 * shot-rules/utils — safe wrappers for globals that throw.
 *
 * Every function here returns [value, error] instead of throwing.
 * These are the canonical replacements for the globals banned by
 * the no-throwing-globals rule.
 *
 * Usage:
 *   import { tryCatch, tryCatchAsync, jsonParse, jsonStringify, safeFetch } from "shot-rules/utils"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = tryCatch;
exports.tryCatchAsync = tryCatchAsync;
exports.jsonParse = jsonParse;
exports.jsonStringify = jsonStringify;
exports.safeFetch = safeFetch;
/**
 * Wraps any synchronous call that might throw.
 * Use for third-party library calls that shot-rules can't detect.
 *
 *   const [value, err] = tryCatch(() => someLib.parse(input))
 */
function tryCatch(fn) {
    try {
        return [fn(), null];
    }
    catch (e) {
        if (e instanceof Error) {
            return [null, e];
        }
        return [null, new Error(String(e))];
    }
}
/**
 * Wraps any async call that might reject.
 * Use for third-party async functions that shot-rules can't detect.
 *
 *   const [value, err] = await tryCatchAsync(() => someLib.fetchData(id))
 */
async function tryCatchAsync(fn) {
    try {
        return [await fn(), null];
    }
    catch (e) {
        if (e instanceof Error) {
            return [null, e];
        }
        return [null, new Error(String(e))];
    }
}
/**
 * Safe JSON.parse — replaces the banned JSON.parse global.
 * Returns [parsed, null] on success, [null, Error] on invalid JSON.
 *
 *   const [data, err] = jsonParse<User>(text)
 */
function jsonParse(text) {
    try {
        return [JSON.parse(text), null];
    }
    catch (e) {
        if (e instanceof Error) {
            return [null, e];
        }
        return [null, new Error(`JSON.parse failed: ${String(e)}`)];
    }
}
/**
 * Safe JSON.stringify — replaces the banned JSON.stringify global.
 * Throws only on circular references or BigInt values; both are surfaced as Error.
 *
 *   const [json, err] = jsonStringify(value)
 */
function jsonStringify(value, indent = null) {
    try {
        return [JSON.stringify(value, null, indent ?? undefined), null];
    }
    catch (e) {
        if (e instanceof Error) {
            return [null, e];
        }
        return [null, new Error(`JSON.stringify failed: ${String(e)}`)];
    }
}
/**
 * Safe fetch — replaces the banned global fetch.
 * Network errors (DNS failure, timeout, etc.) surface as Error.
 * HTTP error status codes are NOT treated as errors here — check res.ok yourself.
 *
 *   const [res, err] = await safeFetch("https://api.example.com/users/1")
 *   if (err !== null) { return [null, err] }
 *   if (!res.ok) { return [null, new Error(`HTTP ${res.status.toString()}`)] }
 */
async function safeFetch(url, init = null) {
    try {
        const res = await fetch(url, init ?? undefined);
        return [res, null];
    }
    catch (e) {
        if (e instanceof Error) {
            return [null, e];
        }
        return [null, new Error(`fetch failed: ${String(e)}`)];
    }
}
//# sourceMappingURL=index.js.map