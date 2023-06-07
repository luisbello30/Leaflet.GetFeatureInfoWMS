module.exports = {
    env: {
        commonjs: true,
        node: false
    },
    // extends: 'mourner',
    overrides: [
    ],
    plugins: [
        'eslint-plugin-import'
    ],
    globals: {
        globalThis: true,
        L: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
};
