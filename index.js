const base = require('./lib/base.js');
const react = require('./lib/react.js');

module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        ...base,
        ...react,
        // ...prettier,
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.jsx'],
            },
        },
    },
}
