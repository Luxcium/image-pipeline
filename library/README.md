# Library Directory

This directory contains the Python implementation of the image processing pipeline. It provides core functionality that integrates with the TypeScript frontend.

## Directory Structure

📁 library

- 📁 **src/**: Python library source code
  - Core image processing modules
  - Integration utilities
  - Helper functions
- 📁 **tests/**: Comprehensive test suite
  - Unit tests
  - Integration tests
  - Test utilities
- 📁 **docs/**: Library documentation
  - API documentation
  - Usage examples
  - Integration guides

## Documentation Navigation

- [↑ Project Root](../README.md): Main project documentation
- [→ Source Code](../src/README.md): TypeScript implementation
- [→ Scripts](../scripts/README.md): Environment management

## Library Components

### Source Code (src/)

Contains the core Python modules implementing:

- Image processing algorithms
- Data transformation utilities
- Integration interfaces
- Helper functions

### Tests (tests/)

Comprehensive test suite including:

- Unit tests for individual components
- Integration tests for cross-language functionality
- Test utilities and helpers

### Documentation (docs/)

Detailed documentation covering:

- API references
- Implementation details
- Usage examples
- Integration guides

## Getting Started

1. Environment Setup

   ```bash
   # Use the environment setup script
   ../scripts/create_environment.sh
   ```

2. Install Dependencies

   ```bash
   pip install -r requirements.txt
   ```

3. Verify Installation
   ```bash
   python -m pytest tests/
   ```

## Integration

This library integrates with the TypeScript implementation in the [src/](../src/README.md) directory through defined interfaces and protocols. See the [integration documentation](docs/AI_agent_instructions.md) for details.

## Additional Resources

- See [Project README](../README.md) for overall project structure
- Check [Scripts README](../scripts/README.md) for environment management
- Review [Source README](../src/README.md) for TypeScript integration
