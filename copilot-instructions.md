# AI Agent Self-Instructions for Documentation Enforcement

- Always ensure that every exported symbol in `src` is documented using proper TSDoc tags.
- If `@param` or `@returns` are missing where expected, add them.
- If documentation quality can be improved, update it automatically.
- Refer to MDN documentation links where beneficial.
- Check `typedoc.json` and `tsconfig.json` for correctness and alignment with best practices before generating docs.
- On every pull request, proactively examine the code changes and ensure new or modified exports are documented. If not, use comments in the PR to suggest improvements.
- On merges to `main`, keep documentation synchronized and consistent.
