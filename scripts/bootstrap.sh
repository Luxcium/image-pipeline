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
