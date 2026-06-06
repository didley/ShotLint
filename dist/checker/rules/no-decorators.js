"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDecorators = void 0;
const typescript_1 = __importDefault(require("typescript"));
const mod_js_1 = require("../mod.js");
exports.noDecorators = {
    name: "no-decorators",
    visit(node, ctx) {
        if (typescript_1.default.canHaveDecorators(node)) {
            const decorators = typescript_1.default.getDecorators(node);
            if (decorators && decorators.length > 0) {
                ctx.push({ ...(0, mod_js_1.posOf)(ctx.sourceFile, node), rule: "no-decorators", message: "Decorators are not allowed." });
            }
        }
    },
};
//# sourceMappingURL=no-decorators.js.map