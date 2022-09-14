module.exports = {
    "files": ["./src/**/*.spec.ts"],
    "typescript": {
        "compile": "tsc",
        "rewritePaths": {
            "src/": "dist/"
        }
    }
};
