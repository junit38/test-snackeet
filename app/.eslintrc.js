module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		semi: 0,
		indent: [2, 'tab'],
		camelcase: 0,
		'no-dupe-keys': 0,
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
			variables: true
		}],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'comma-dangle': ['error', 'only-multiline'],
		'prefer-promise-reject-errors': 0,
		'handle-callback-err': 0,
		'no-unused-vars': 0,
		'no-labels': [2, { allowLoop: true, allowSwitch: false }],
		'no-multiple-empty-lines': 0,
		'no-useless-escape': 0,
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react/react-in-jsx-scope': 0,
		'react/jsx-indent': [2, 'tab', { checkAttributes: true }],
		'react/jsx-props-no-spreading': 0,
		'react/forbid-prop-types': 0
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['lib', './lib'],
					['components', './components'],
					['organisms', './components/organisms'],
				],
				extensions: ['.ts', '.js', '.jsx', '.json'],
			}
		}
	}
};
