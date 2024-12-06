# Project Overview

This project is structured to support both Python and TypeScript development, implementing an image processing pipeline with cross-language integration.

## Directory Structure

📁 Project Root

- [📁 **library/**](library/README.md): Python library implementation
  - `src/`: Source code for the Python library
  - `tests/`: Test files for the Python library
  - `docs/`: Documentation for the Python library
- [📁 **src/**](src/README.md): TypeScript implementation
- [📁 **scripts/**](scripts/README.md): Environment management scripts
- `progress.md`: Project progress tracking
- `tasks.txt`: Task management
- `cline.md`: AI agent instructions
- `.github/copilot-instructions.md`: GitHub Copilot instructions and preferences

## Documentation Structure

Each directory contains its own README.md with specific documentation:

- [Library Documentation](library/README.md): Python library implementation details
- [Source Documentation](src/README.md): TypeScript code structure and components
- [Scripts Documentation](scripts/README.md): Environment management and utilities
- [Copilot Instructions](.github/copilot-instructions.md): GitHub Copilot instructions and preferences

## Folder Purposes and Relationships

### [Library Directory](library/README.md)

The Python implementation directory contains:

- Core image processing functionality
- Python-specific utilities and helpers
- Unit and integration tests
- Library-specific documentation

### [Source Directory](src/README.md)

The TypeScript implementation directory includes:

- Frontend application logic
- Cross-language integration handlers
- TypeScript-specific utilities

### [Scripts Directory](scripts/README.md)

Environment management utilities including:

- Environment setup and configuration
- Integration verification
- Build and deployment tools

## Project Status

Current project status and progress are tracked in:

- `progress.md`: Detailed progress tracking
- `tasks.txt`: Task completion status
- `cline.md`: AI agent operational guidelines
- `.github/copilot-instructions.md`: GitHub Copilot instructions and preferences

## Getting Started

1. Review the [Scripts Documentation](scripts/README.md) for environment setup
2. Follow the [Library Documentation](library/README.md) for Python setup
3. Check the [Source Documentation](src/README.md) for TypeScript setup
4. Refer to the [Copilot Instructions](.github/copilot-instructions.md) for GitHub Copilot guidelines

## Additional Resources

- See `progress.md` for current project status
- Check `tasks.txt` for task tracking
- Review `cline.md` for AI agent guidelines
- Refer to `.github/copilot-instructions.md` for GitHub Copilot instructions and preferences

### Documentation Tools

- [TypeDoc Overview](https://typedoc.org/guides/overview/)
- [TSDoc](https://tsdoc.org/)

### Inactive URLs

- The link to `library/README.md` is currently inactive and will be updated in the future.

## GitHub Copilot Instructions

GitHub Copilot has completed a comprehensive awareness scan and cataloged all relevant project files and directories. For detailed instructions, please refer to [copilot.md](copilot.md).

## Using TypeDoc Effectively

To ensure comprehensive and up-to-date documentation, follow these guidelines:

1. **Run TypeDoc Locally**: Generate documentation locally to preview changes before committing.
   ```bash
   pnpm typedoc
   ```

2. **Check Copilot Instructions**: Review `copilot-instructions.md` for guidelines on maintaining and improving documentation quality.

3. **Review Generated Docs**: Inspect the `docs/` folder to see the output and make incremental improvements to documentation comments.

4. **Leverage TSDoc Tags**: Use TSDoc tags such as `@param`, `@returns`, and `@deprecated` to provide detailed information about the code.

5. **Use TypeDoc Plugins**: Enhance documentation with plugins like `typedoc-plugin-markdown` and `typedoc-plugin-mdn-links`.

By following these steps, you can ensure that the documentation remains accurate, comprehensive, and useful for all team members.
