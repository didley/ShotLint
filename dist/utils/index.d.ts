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
export type Result<T> = [T, null] | [null, Error];
/**
 * Wraps any synchronous call that might throw.
 * Use for third-party library calls that shot-rules can't detect.
 *
 *   const [value, err] = tryCatch(() => someLib.parse(input))
 */
export declare function tryCatch<T>(fn: () => T): Result<T>;
/**
 * Wraps any async call that might reject.
 * Use for third-party async functions that shot-rules can't detect.
 *
 *   const [value, err] = await tryCatchAsync(() => someLib.fetchData(id))
 */
export declare function tryCatchAsync<T>(fn: () => Promise<T>): Promise<Result<T>>;
/**
 * Safe JSON.parse — replaces the banned JSON.parse global.
 * Returns [parsed, null] on success, [null, Error] on invalid JSON.
 *
 *   const [data, err] = jsonParse<User>(text)
 */
export declare function jsonParse<T>(text: string): Result<T>;
/**
 * Safe JSON.stringify — replaces the banned JSON.stringify global.
 * Throws only on circular references or BigInt values; both are surfaced as Error.
 *
 *   const [json, err] = jsonStringify(value)
 */
export declare function jsonStringify(value: unknown, indent?: number | null): Result<string>;
/**
 * Safe fetch — replaces the banned global fetch.
 * Network errors (DNS failure, timeout, etc.) surface as Error.
 * HTTP error status codes are NOT treated as errors here — check res.ok yourself.
 *
 *   const [res, err] = await safeFetch("https://api.example.com/users/1")
 *   if (err !== null) { return [null, err] }
 *   if (!res.ok) { return [null, new Error(`HTTP ${res.status.toString()}`)] }
 */
export declare function safeFetch(url: string | URL, init?: RequestInit | null): Promise<Result<Response>>;
//# sourceMappingURL=index.d.ts.map