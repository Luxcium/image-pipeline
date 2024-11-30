#!/bin/bash
# bootstrap.sh

# SECTION: Project initialization
echo "Initializing new TypeScript project..."

# Initialize Git repository
git init
cat > .gitignore << EOL
node_modules/
dist/
coverage/
.env
.DS_Store
*.log
EOL

# Initialize pnpm project
pnpm init

# SECTION: Install dependencies
pnpm add -D typescript \
  @types/node \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  prettier \
  jest \
  @types/jest \
  ts-jest

# SECTION: TypeScript configuration
cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
EOL

# SECTION: ESLint configuration
cat > .eslintrc.json << EOL
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "root": true
}
EOL

# SECTION: Prettier configuration
cat > .prettierrc << EOL
{
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true
}
EOL

# SECTION: Jest configuration
cat > jest.config.js << EOL
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
EOL

# SECTION: Create directory structure
mkdir -p src/domain
mkdir -p src/infrastructure
mkdir -p src/application
mkdir -p tests/unit
mkdir -p tests/integration
mkdir -p .vscode
mkdir -p .github/workflows

# SECTION: Create initial files
cat > src/index.ts << EOL
// src/index.ts
// Main application entry point

export function bootstrap(): void {
  // TODO: Implement application bootstrap logic
  console.log('Application starting...');
}

if (require.main === module) {
  bootstrap();
}
EOL

# SECTION: VS Code settings
cat > .vscode/settings.json << EOL
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
EOL

# SECTION: Update package.json scripts
cat > package.json << EOL
{
  "name": "typescript-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint 'src/**/*.ts'",
    "format": "prettier --write 'src/**/*.ts'"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOL

# SECTION: Create README
cat > README.md << EOL
# TypeScript Project

## Setup
\`\`\`bash
pnpm install
\`\`\`

## Development
\`\`\`bash
pnpm dev     # Watch mode
pnpm build   # Production build
pnpm test    # Run tests
pnpm lint    # Lint code
pnpm format  # Format code
\`\`\`

## Project Structure
- \`src/domain\`: Domain logic and entities
- \`src/infrastructure\`: External services and implementations
- \`src/application\`: Application services and use cases
- \`tests\`: Unit and integration tests
EOL

echo "Project setup complete! Run 'pnpm install' to install dependencies."
