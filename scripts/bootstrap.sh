#!/bin/bash

# SECTION: Project initialization script
# INFO: This script initializes a new TypeScript project with all necessary configurations

git init
echo "node_modules/\ndist/\n.env\n.DS_Store" > .gitignore
pnpm init -y
pnpm add -D typescript eslint prettier jest @typescript-eslint/parser @typescript-eslint/eslint-plugin
echo '{
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}' > tsconfig.json
mkdir -p src tests .vscode .github scripts
touch src/index.ts README.md

# Add linting and formatting scripts to package.json
jq '.scripts.lint = "eslint \\"src/**/*.ts\\""' package.json > tmp.$$.json && mv tmp.$$.json package.json
jq '.scripts.format = "prettier --write \\"src/**/*.ts\\""' package.json > tmp.$$.json && mv tmp.$$.json package.json
