"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const no_arrow_functions_js_1 = require("./no-arrow-functions.js");
const no_let_outside_for_js_1 = require("./no-let-outside-for.js");
const no_var_js_1 = require("./no-var.js");
const no_increment_decrement_js_1 = require("./no-increment-decrement.js");
const no_unary_plus_js_1 = require("./no-unary-plus.js");
const no_throw_js_1 = require("./no-throw.js");
const no_try_js_1 = require("./no-try.js");
const no_promise_chain_js_1 = require("./no-promise-chain.js");
const no_loose_equality_js_1 = require("./no-loose-equality.js");
const no_and_shorthand_js_1 = require("./no-and-shorthand.js");
const no_double_bang_js_1 = require("./no-double-bang.js");
const no_ternary_js_1 = require("./no-ternary.js");
const no_bitwise_js_1 = require("./no-bitwise.js");
const no_delete_js_1 = require("./no-delete.js");
const no_in_js_1 = require("./no-in.js");
const no_comma_operator_js_1 = require("./no-comma-operator.js");
const no_arguments_js_1 = require("./no-arguments.js");
const no_generators_js_1 = require("./no-generators.js");
const no_eval_js_1 = require("./no-eval.js");
const no_for_in_js_1 = require("./no-for-in.js");
const switch_no_fallthrough_js_1 = require("./switch-no-fallthrough.js");
const no_require_js_1 = require("./no-require.js");
const no_default_export_js_1 = require("./no-default-export.js");
const no_parse_number_fns_js_1 = require("./no-parse-number-fns.js");
const no_multi_var_decl_js_1 = require("./no-multi-var-decl.js");
const no_shadow_js_1 = require("./no-shadow.js");
const no_param_reassign_js_1 = require("./no-param-reassign.js");
const no_multi_assign_js_1 = require("./no-multi-assign.js");
const no_return_assign_js_1 = require("./no-return-assign.js");
const no_self_assign_js_1 = require("./no-self-assign.js");
const no_self_compare_js_1 = require("./no-self-compare.js");
const no_empty_js_1 = require("./no-empty.js");
const no_lone_blocks_js_1 = require("./no-lone-blocks.js");
const no_empty_pattern_js_1 = require("./no-empty-pattern.js");
const no_useless_rename_js_1 = require("./no-useless-rename.js");
const no_useless_return_js_1 = require("./no-useless-return.js");
const no_useless_concat_js_1 = require("./no-useless-concat.js");
const no_useless_computed_key_js_1 = require("./no-useless-computed-key.js");
const no_useless_empty_export_js_1 = require("./no-useless-empty-export.js");
const no_loop_func_js_1 = require("./no-loop-func.js");
const no_new_wrappers_js_1 = require("./no-new-wrappers.js");
const no_unused_expressions_js_1 = require("./no-unused-expressions.js");
const no_void_js_1 = require("./no-void.js");
const prefer_template_js_1 = require("./prefer-template.js");
const require_named_functions_js_1 = require("./require-named-functions.js");
const no_do_while_js_1 = require("./no-do-while.js");
const no_labels_js_1 = require("./no-labels.js");
const no_destructuring_default_js_1 = require("./no-destructuring-default.js");
const no_logical_assignment_js_1 = require("./no-logical-assignment.js");
const no_tagged_templates_js_1 = require("./no-tagged-templates.js");
const no_throwing_globals_js_1 = require("./no-throwing-globals.js");
const no_new_user_types_js_1 = require("./no-new-user-types.js");
const no_index_import_js_1 = require("./no-index-import.js");
const no_overloads_js_1 = require("./no-overloads.js");
const no_namespace_js_1 = require("./no-namespace.js");
// T04 type rules
const no_any_js_1 = require("./no-any.js");
const no_assertion_js_1 = require("./no-assertion.js");
const no_non_null_js_1 = require("./no-non-null.js");
const no_ts_comment_js_1 = require("./no-ts-comment.js");
const no_interface_js_1 = require("./no-interface.js");
const no_enum_js_1 = require("./no-enum.js");
const no_conditional_type_js_1 = require("./no-conditional-type.js");
const no_mapped_type_js_1 = require("./no-mapped-type.js");
const no_template_literal_type_js_1 = require("./no-template-literal-type.js");
const no_infer_js_1 = require("./no-infer.js");
const no_class_js_1 = require("./no-class.js");
const no_abstract_js_1 = require("./no-abstract.js");
const no_decorators_js_1 = require("./no-decorators.js");
const no_this_js_1 = require("./no-this.js");
const no_undefined_type_js_1 = require("./no-undefined-type.js");
const no_optional_property_js_1 = require("./no-optional-property.js");
const no_optional_parameter_js_1 = require("./no-optional-parameter.js");
const no_default_parameter_js_1 = require("./no-default-parameter.js");
const no_empty_object_type_js_1 = require("./no-empty-object-type.js");
const no_object_type_js_1 = require("./no-object-type.js");
const no_function_type_js_1 = require("./no-function-type.js");
const require_readonly_property_js_1 = require("./require-readonly-property.js");
const require_readonly_arrays_js_1 = require("./require-readonly-arrays.js");
const require_explicit_return_type_js_1 = require("./require-explicit-return-type.js");
const no_symbol_type_js_1 = require("./no-symbol-type.js");
const no_variadic_tuple_js_1 = require("./no-variadic-tuple.js");
const no_array_generic_js_1 = require("./no-array-generic.js");
const no_readonly_wrapper_js_1 = require("./no-readonly-wrapper.js");
const no_banned_utility_types_js_1 = require("./no-banned-utility-types.js");
const no_index_signature_js_1 = require("./no-index-signature.js");
const no_primitive_wrapper_types_js_1 = require("./no-primitive-wrapper-types.js");
const no_constructor_type_js_1 = require("./no-constructor-type.js");
const no_metaprogramming_globals_js_1 = require("./no-metaprogramming-globals.js");
const no_literal_boolean_type_js_1 = require("./no-literal-boolean-type.js");
const no_intersection_types_js_1 = require("./no-intersection-types.js");
const require_tuple_destructure_js_1 = require("./require-tuple-destructure.js");
const require_async_tuple_return_js_1 = require("./require-async-tuple-return.js");
exports.rules = [
    no_arrow_functions_js_1.noArrowFunctions,
    no_let_outside_for_js_1.noLetOutsideFor,
    no_var_js_1.noVar,
    no_increment_decrement_js_1.noIncrementDecrement,
    no_unary_plus_js_1.noUnaryPlus,
    no_throw_js_1.noThrow,
    no_try_js_1.noTry,
    no_promise_chain_js_1.noPromiseChain,
    no_loose_equality_js_1.noLooseEquality,
    no_and_shorthand_js_1.noAndShorthand,
    no_double_bang_js_1.noDoubleBang,
    no_ternary_js_1.noTernary,
    no_bitwise_js_1.noBitwise,
    no_delete_js_1.noDelete,
    no_in_js_1.noIn,
    no_comma_operator_js_1.noCommaOperator,
    no_arguments_js_1.noArguments,
    no_generators_js_1.noGenerators,
    no_eval_js_1.noEval,
    no_for_in_js_1.noForIn,
    switch_no_fallthrough_js_1.switchNoFallthrough,
    no_require_js_1.noRequire,
    no_default_export_js_1.noDefaultExport,
    no_parse_number_fns_js_1.noParseNumberFns,
    no_multi_var_decl_js_1.noMultiVarDecl,
    no_shadow_js_1.noShadow,
    no_param_reassign_js_1.noParamReassign,
    no_multi_assign_js_1.noMultiAssign,
    no_return_assign_js_1.noReturnAssign,
    no_self_assign_js_1.noSelfAssign,
    no_self_compare_js_1.noSelfCompare,
    no_empty_js_1.noEmpty,
    no_lone_blocks_js_1.noLoneBlocks,
    no_empty_pattern_js_1.noEmptyPattern,
    no_useless_rename_js_1.noUselessRename,
    no_useless_return_js_1.noUselessReturn,
    no_useless_concat_js_1.noUselessConcat,
    no_useless_computed_key_js_1.noUselessComputedKey,
    no_useless_empty_export_js_1.noUselessEmptyExport,
    no_loop_func_js_1.noLoopFunc,
    no_new_wrappers_js_1.noNewWrappers,
    no_unused_expressions_js_1.noUnusedExpressions,
    no_void_js_1.noVoid,
    prefer_template_js_1.preferTemplate,
    require_named_functions_js_1.requireNamedFunctions,
    no_do_while_js_1.noDoWhile,
    no_labels_js_1.noLabels,
    no_destructuring_default_js_1.noDestructuringDefault,
    no_logical_assignment_js_1.noLogicalAssignment,
    no_tagged_templates_js_1.noTaggedTemplates,
    no_throwing_globals_js_1.noThrowingGlobals,
    no_new_user_types_js_1.noNewUserTypes,
    no_index_import_js_1.noIndexImport,
    no_overloads_js_1.noOverloads,
    no_namespace_js_1.noNamespace,
    // T04 type rules
    no_any_js_1.noAny,
    no_assertion_js_1.noAssertion,
    no_non_null_js_1.noNonNull,
    no_ts_comment_js_1.noTsComment,
    no_interface_js_1.noInterface,
    no_enum_js_1.noEnum,
    no_conditional_type_js_1.noConditionalType,
    no_mapped_type_js_1.noMappedType,
    no_template_literal_type_js_1.noTemplateLiteralType,
    no_infer_js_1.noInfer,
    no_class_js_1.noClass,
    no_abstract_js_1.noAbstract,
    no_decorators_js_1.noDecorators,
    no_this_js_1.noThis,
    no_undefined_type_js_1.noUndefinedType,
    no_optional_property_js_1.noOptionalProperty,
    no_optional_parameter_js_1.noOptionalParameter,
    no_default_parameter_js_1.noDefaultParameter,
    no_empty_object_type_js_1.noEmptyObjectType,
    no_object_type_js_1.noObjectType,
    no_function_type_js_1.noFunctionType,
    require_readonly_property_js_1.requireReadonlyProperty,
    require_readonly_arrays_js_1.requireReadonlyArrays,
    require_explicit_return_type_js_1.requireExplicitReturnType,
    no_symbol_type_js_1.noSymbolType,
    no_variadic_tuple_js_1.noVariadicTuple,
    no_array_generic_js_1.noArrayGeneric,
    no_readonly_wrapper_js_1.noReadonlyWrapper,
    no_banned_utility_types_js_1.noBannedUtilityTypes,
    no_index_signature_js_1.noIndexSignature,
    no_primitive_wrapper_types_js_1.noPrimitiveWrapperTypes,
    no_constructor_type_js_1.noConstructorType,
    no_metaprogramming_globals_js_1.noMetaprogrammingGlobals,
    no_literal_boolean_type_js_1.noLiteralBooleanType,
    no_intersection_types_js_1.noIntersectionTypes,
    require_tuple_destructure_js_1.requireTupleDestructure,
    require_async_tuple_return_js_1.requireAsyncTupleReturn,
];
//# sourceMappingURL=index.js.map