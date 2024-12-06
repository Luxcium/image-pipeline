# AI Agent Self-Instructions for Documentation Enforcement

- Always ensure that every exported symbol in `src` is documented using proper TSDoc tags.
- If `@param` or `@returns` are missing where expected, add them.
- If documentation quality can be improved, update it automatically.
- Refer to MDN documentation links where beneficial.
- Check `typedoc.json` and `tsconfig.json` for correctness and alignment with best practices before generating docs.
- On every pull request, proactively examine the code changes and ensure new or modified exports are documented. If not, use comments in the PR to suggest improvements.
- On merges to `main`, keep documentation synchronized and consistent.

# AI Agent Self-Instructions for Documentation Automation and Enforcement

- **Automate documentation generation**: Use tools like TypeDoc to automatically generate documentation from comments in the code. This ensures that documentation is always up-to-date and reduces the risk of it being removed accidentally. 📄
- **Enforce documentation rules**: Implement strict rules and guidelines for documentation, as outlined in `.github/copilot-instructions.md`. This includes using TSDoc for inline comments and ensuring comprehensive documentation for each TypeScript file. 📚
- **Code reviews**: Make documentation a mandatory part of the code review process. Reviewers should check that all changes include appropriate documentation and that no existing documentation is removed. 🔍
- **Version control**: Use version control systems like Git to track changes in documentation. This allows you to easily identify and revert any accidental removal of documentation. 🕵️‍♂️
- **Regular audits**: Periodically audit the codebase to ensure that all documentation is present and up-to-date. This can be done manually or through automated scripts. 📝
- **Training and awareness**: Educate team members about the importance of documentation and the guidelines for maintaining it. This helps create a culture of documentation within the team. 🎓

# AI Agent Self-Instructions for TSDoc Best Practices

- **Use TSDoc comment format**: Write comments using the TSDoc format, starting with `/**` and ending with `*/`. This ensures compatibility with tools like TypeDoc. 📄
- **Document all public members**: Ensure that all public classes, methods, properties, and functions are documented with TSDoc comments. This helps other developers understand the code better. 📚
- **Use core tags**: Utilize core TSDoc tags such as `@param`, `@returns`, `@throws`, `@example`, `@remarks`, and `@see` to provide detailed information about the code. For example, see the usage in `src/dateFormatter.ts`. 🏷️
- **Leverage type system tags**: Use type system tags like `@template`, `@typedef`, `@type`, and `@property` to document complex types and generic parameters. This enhances the readability and maintainability of the code. 🛠️
- **Control access with visibility tags**: Use visibility tags such as `@public`, `@private`, `@protected`, and `@internal` to indicate the intended visibility of members. This helps in managing access control and understanding the scope of the code. 🔒
- **Provide usage examples**: Include `@example` tags to demonstrate how to use the documented code. This is particularly helpful for complex functions and classes. 📘
- **Maintain consistency**: Follow a consistent style and format for TSDoc comments throughout the codebase. This makes the documentation easier to read and maintain. 🔄
- **Automate documentation generation**: Use tools like TypeDoc to automatically generate documentation from TSDoc comments. This ensures that the documentation is always up-to-date and reduces the risk of it being removed accidentally. For more information, refer to the guidelines in `.github/copilot-instructions.md`. 🤖
- **Enforce documentation rules**: Implement strict rules and guidelines for documentation, as outlined in `.github/copilot-instructions.md`. This includes making documentation a mandatory part of the code review process. 📏
- **Regularly audit documentation**: Periodically audit the codebase to ensure that all documentation is present and up-to-date. This can be done manually or through automated scripts. 📝

# AI Agent Self-Instructions for Relevant TypeDoc Plugins

- **typedoc-plugin-markdown**: Generates documentation in Markdown format, which can be useful for integrating with static site generators like Jekyll or Hugo. 📄
- **typedoc-plugin-external-module-name**: Allows customization of module names in the generated documentation, making it easier to navigate large projects. 🗂️
- **typedoc-plugin-sourcefile-url**: Adds links to the source files in the generated documentation, providing easy access to the code. 🔗
- **typedoc-plugin-no-inherit**: Prevents inherited members from being documented, which can help reduce clutter in the documentation. 🚫
- **typedoc-plugin-example-tag**: Enhances the `@example` tag to include code examples in the generated documentation, making it easier to understand how to use the documented code. 💡
- **typedoc-plugin-merge-modules**: Merges multiple modules into a single module in the generated documentation, simplifying the structure. 🔄
- **typedoc-plugin-rename-defaults**: Renames default exports in the generated documentation, making it easier to identify and understand them. 📝
