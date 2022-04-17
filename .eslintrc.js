module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
	"next",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "2016",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {

	"react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-mixed-spaces-and-tabs": 0,
    "react/prop-types": "off",
	"no-unused-vars": "off"
	}

}
