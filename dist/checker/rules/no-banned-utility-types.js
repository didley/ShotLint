"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noBannedUtilityTypes = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
const BANNED = new Set([
    "Partial", "Required", "Record", "InstanceType", "ConstructorParameters",
    "ThisType", "Generator", "GeneratorFunction", "AsyncGenerator",
    "AsyncGeneratorFunction", "ClassDecorator", "MethodDecorator",
    "PropertyDecorator", "ParameterDecorator",
]);
exports.noBannedUtilityTypes = {
    name: "no-banned-utility-types",
    visit(node, ctx) {
        if (typescript_1.default.isTypeReferenceNode(node) &&
            typescript_1.default.isIdentifier(node.typeName) &&
            BANNED.has(node.typeName.escapedText)) {
            ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-banned-utility-types", message: "This utility type is banned. See `docs/LANGUAGE.md` for the canonical form." });
        }
    },
};
//# sourceMappingURL=no-banned-utility-types.js.map