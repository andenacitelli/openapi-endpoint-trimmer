import eslint_js from "@eslint/js";
import eslint_ts from "typescript-eslint";

export default [
    eslint_js.configs.recommended,
    ...eslint_ts.configs.recommended
];