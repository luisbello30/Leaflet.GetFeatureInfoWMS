module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'mourner',
    overrides: [
    ],
    plugins: [
        'eslint-plugin-import'
    ],
    globals: {
        globalThis: true,
        L: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'consistent-return': 'off',
        'curly': 'error',
        'import/extensions': ['error', 'ignorePackages'],
        'indent': ['error', 4, {VariableDeclarator: 0, flatTernaryExpressions: true}],
        'key-spacing': 'off',
        'linebreak-style': ['off', 'unix'],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-unused-expressions': ['error', {allowShortCircuit: true}],
        'spaced-comment': 'error',
        'strict': 'off',
        'wrap-iife': 'off',
        'guard-for-in': 'error',
        // TODO: Re-enable the rules below and fix the linting issues.
        'no-invalid-this': 'off',
        'prefer-object-has-own': 'error',
        'prefer-spread': 'off'
    },
};
