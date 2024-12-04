# Special Instructions for Cline

Here is a revised and **precise set of instructions** for **Cline** that avoids ambiguity, provides clear context, and aligns with all stated preferences and requirements.

## Table of Contents

- [Special Instructions for Cline](#special-instructions-for-cline)
  - [Table of Contents](#table-of-contents)
  - [Cline Instructions](#cline-instructions)
  - [Project Context](#project-context)
  - [General Guidelines](#general-guidelines)
  - [Package Management](#package-management)
  - [Project Initialization](#project-initialization)
  - [Code Conventions](#code-conventions)
    - [JavaScript/TypeScript Standards](#javascripttypescript-standards)
    - [Python Standards](#python-standards)
    - [Shell Scripting Standards](#shell-scripting-standards)
  - [Task Execution](#task-execution)
  - [Modularity and Scalability](#modularity-and-scalability)
    - [Structural Principles](#structural-principles)
    - [Key Directories](#key-directories)
  - [Error Handling](#error-handling)
  - [Maintenance Guidelines](#maintenance-guidelines)
    - [Purpose](#purpose)
    - [Maintenance Principles](#maintenance-principles)
  - [Related Documentation](#related-documentation)
  - [Summary of Approach](#summary-of-approach)

## Cline Instructions

This document serves as the comprehensive instruction set for AI agent operation, meticulously organized to provide clear, actionable guidance.

## Project Context

This project combines Python and TypeScript components with the following key aspects:

- Python library in `library/` for core functionality
- TypeScript implementation in `src/` for frontend operations
- Integration testing framework for cross-language verification
- Shell scripts in `scripts/` for environment management
- Current focus: Build system integration and configuration

## General Guidelines

- Context-Specific Outputs: Adapt outputs to respect the specific context of the current programming language or framework
- Conciseness and Clarity: Use precise, direct language to eliminate ambiguity
- Adaptive Intelligence: Interpret instructions with nuanced understanding while maintaining strict adherence to core principles
- Cross-Language Integration: Ensure seamless interaction between Python and TypeScript components

## Package Management

- Utilize pnpm exclusively for Node.js and TypeScript projects
- Python dependency management through pip/poetry as specified in requirements.txt
- Dependency management must rely on pnpm lock file for version control
- Command-line execution is preferred for all package-related operations

## Project Initialization

- Use language-specific initialization tools:
  - Node.js/TypeScript: `pnpm init`
  - Python: `pip` or `poetry`
  - PHP: `composer`
- Ensure configuration aligns with best practices for the specific ecosystem

## Code Conventions

### JavaScript/TypeScript Standards

- Strict TypeScript configuration:
  - Enable `"strict"`, `"noImplicitAny"`, `"noImplicitThis"`, `"alwaysStrict"`
- Naming Conventions:
  - PascalCase for classes and types
  - camelCase for functions and variables
- Export Strategy:
  - Prefer named exports
  - Avoid default exports

### Python Standards

- Adhere to PEP 8 guidelines
- Use explicit, descriptive naming
- Prefer absolute import paths
- Follow library/ structure for Python components

### Shell Scripting Standards

- Use POSIX-compliant syntax
- Include comprehensive comments
- Avoid hardcoded paths when possible
- Follow scripts/ directory conventions

## Task Execution

- Prioritize command-line tools for:
  - Project initialization
  - Dependency management
  - Script execution
- Minimize direct file manipulation
- Maintain non-destructive approach to existing resources
- Use provided verification scripts for environment checks

## Modularity and Scalability

### Structural Principles

- Separate concerns into distinct modules
- Use clear, meaningful directory structures
- Implement dependency injection
- Create clear architectural boundaries
- Maintain Python-TypeScript integration points

### Key Directories

- `src/`: TypeScript source code and frontend components
- `library/`: Python library and core functionality
- `tests/`: Testing infrastructure for both languages
- `scripts/`: Environment and verification scripts
- `docs/`: Project documentation

## Error Handling

- Implement comprehensive input validation
- Use type assertions in TypeScript
- Create robust error management strategies
- Prevent unhandled exceptions
- Ensure data integrity through strict validation
- Handle cross-language communication errors

## Maintenance Guidelines

### Purpose

- Primary instruction repository
- Memory and preference management system
- Operational parameter definition
- Cross-language integration guidance

### Maintenance Principles

1. Periodic Review

   - Regular accuracy assessment
   - Update to reflect current best practices
   - Verify cross-language compatibility

2. Update Methodology

   - Incremental modifications
   - Preserve existing information
   - Align with core ethical guidelines
   - Maintain integration points

3. Documentation Standards

   - Maintain hierarchical structure
   - Consistent markdown formatting
   - Comprehensive navigation support
   - Cross-reference related files

4. Autonomous Decision Framework
   - Assess change impact
   - Consider long-term implications
   - Implement only high-value modifications
   - Ensure cross-component compatibility

## Related Documentation

- `progress.md`: Current project status and pending items
- `tasks.txt`: Detailed task tracking and completion status
- `library/docs/AI_agent_instructions.md`: Python-specific agent guidelines
- `src/AI_agent_guidance.md`: TypeScript-specific agent guidelines

## Summary of Approach

A dynamic, context-aware instruction set designed to provide flexible yet precise operational guidance across diverse programming environments, with special attention to Python-TypeScript integration and build system configuration.

**Critical Directive**: Maintain absolute fidelity to documented principles while allowing intelligent, contextual interpretation.

---

**Note**: This document represents the definitive operational blueprint. Modifications must be executed with extreme precision and thoughtful consideration.

For additional instructions and preferences, please refer to the `.github/copilot-instructions.md` file.
