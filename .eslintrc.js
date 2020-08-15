module.exports = {
    root: true,
    extends: 'airbnb-base',
    env: {
        browser: true,
    },
    globals: {
        $: true,
        jQuery: true,
        Konami: true,
        dataLayer: true,
        AOS: true,
    },
    rules: {
        indent: ['error', 4],
        'max-len': 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
        'func-names': 'off',
        'no-console': ['warn', {
            allow: ['warn', 'error'],
        }],
        'no-restricted-syntax': [
            'warn', 'DebuggerStatement',
        ],
        'no-debugger': 'warn',
    },
    // "settings": {
    //   "import/resolver": {
    //     "webpack": {
    //       "config": {
    //         "resolve": 'js')
    //       }
    //     }
    //   }
    // }
};
