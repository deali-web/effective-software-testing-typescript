module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    settings: {
        react: {
            "version": "detect"
        },
        "import/resolver": {
            // eslint-plugin-import 설정
            typescript: {
                "alwaysTryTypes": true
            },
            node: true
        }
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": "error"
    }
}
