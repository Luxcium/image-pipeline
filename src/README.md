# Source Directory

This directory contains the TypeScript implementation of the image processing pipeline's frontend components and integration layers.

## Documentation Navigation

- [↑ Project Root](../README.md): Main project documentation
- [→ Library](../library/README.md): Python implementation
- [→ Scripts](../scripts/README.md): Environment management

## Directory Structure

📁 src

### Core Components

- **dateFormatter.ts**

  - Date formatting utilities
  - Timestamp management
  - Time zone handling

- **nodeBridge.ts**

  - Python-TypeScript integration
  - Cross-language communication
  - Data transformation handlers

- **progressTracker.ts**

  - Progress monitoring
  - Status tracking
  - Event management

- **stateVerifier.ts**
  - State validation
  - Integrity checks
  - Error handling

## Integration Layer

The TypeScript implementation serves as the frontend layer, integrating with the [Python library](../library/README.md) through defined interfaces. Key integration points include:

- Data transformation pipelines
- Image processing workflows
- Status monitoring and reporting
- Error handling and recovery

## Development Setup

1. Environment Setup

   ```bash
   # Use the environment setup script
   ../scripts/create_environment.sh
   ```

2. Install Dependencies

   ```bash
   pnpm install
   ```

3. Build Project

   ```bash
   pnpm build
   ```

## Testing

The TypeScript implementation includes:

- Unit tests for components
- Integration tests with Python layer
- End-to-end workflow tests

Run tests using:

```bash
pnpm test
```

## Additional Resources

- See [Project README](../README.md) for overall project structure
- Check [Library README](../library/README.md) for Python implementation
- Review [Scripts README](../scripts/README.md) for environment management
- See [AI Agent Guidance](AI_agent_guidance.md) for development guidelines

## Development Guidelines

1. Follow TypeScript best practices
2. Maintain strict type checking
3. Document all public interfaces
4. Include comprehensive tests
5. Keep integration points clean and well-documented
