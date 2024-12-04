# Scripts Directory

This directory contains shell scripts for managing the environment, verification, and deployment tasks for both Python and TypeScript components of the project.

## Documentation Navigation

- [↑ Project Root](../README.md): Main project documentation
- [→ Library](../library/README.md): Python implementation
- [→ Source](../src/README.md): TypeScript implementation

## Available Scripts

### Environment Management

- **create_environment.sh**

  - Creates the initial development environment
  - Sets up both Python and Node.js dependencies
  - Configures necessary environment variables

- **regenerate_environment.sh**

  - Rebuilds the environment from scratch
  - Useful for resolving dependency conflicts
  - Maintains existing configurations

- **reset_env.sh**
  - Resets environment to a clean state
  - Removes generated files and caches
  - Preserves essential configurations

### Verification Scripts

- **verify_env.sh**

  - Validates environment configuration
  - Checks required dependencies
  - Ensures correct versions are installed

- **verify_integration.sh**
  - Tests Python-TypeScript integration
  - Validates cross-language communication
  - Checks data transformation pipeline

### Setup Scripts

- **setup_env.sh**

  - Configures development environment
  - Sets up necessary tools and utilities
  - Establishes project-specific settings

- **bootstrap.sh**
  - Initial project setup script
  - Installs required dependencies
  - Configures development environment

## Usage

1. Initial Setup

   ```bash
   # Run the bootstrap script first
   ./bootstrap.sh

   # Then create the environment
   ./create_environment.sh
   ```

2. Environment Verification

   ```bash
   # Verify environment setup
   ./verify_env.sh

   # Check integration
   ./verify_integration.sh
   ```

3. Environment Management

   ```bash
   # Reset environment if needed
   ./reset_env.sh

   # Regenerate environment
   ./regenerate_environment.sh
   ```

## Integration Context

These scripts support the integration between:

- [Python library](../library/README.md) components
- [TypeScript implementation](../src/README.md)

## Additional Resources

- See [Project README](../README.md) for overall project structure
- Check [Library README](../library/README.md) for Python implementation
- Review [Source README](../src/README.md) for TypeScript details
