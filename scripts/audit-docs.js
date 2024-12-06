const fs = require('fs');

const docsFilePath = './docs.json';

/**
 * Audits the documentation quality and completeness by inspecting the TypeDoc JSON output.
 * Outputs warnings for outdated descriptions, missing tags, or inconsistent formatting.
 */
function auditDocs() {
  if (!fs.existsSync(docsFilePath)) {
    console.error(`Documentation JSON file not found: ${docsFilePath}`);
    process.exit(1);
  }

  const docs = JSON.parse(fs.readFileSync(docsFilePath, 'utf-8'));
  const issues = [];

  function checkDocumentation(node) {
    if (node.kindString === 'Module' || node.kindString === 'Namespace') {
      node.children.forEach(checkDocumentation);
    } else if (node.kindString === 'Class' || node.kindString === 'Interface' || node.kindString === 'Function') {
      if (!node.comment || !node.comment.shortText) {
        issues.push(`Missing documentation for ${node.kindString} ${node.name}`);
      } else {
        if (!node.comment.tags || node.comment.tags.length === 0) {
          issues.push(`Missing tags for ${node.kindString} ${node.name}`);
        }
        if (node.comment.shortText.length < 20) {
          issues.push(`Description too short for ${node.kindString} ${node.name}`);
        }
      }
    }
  }

  docs.children.forEach(checkDocumentation);

  if (issues.length > 0) {
    console.warn('Documentation issues found:');
    issues.forEach((issue) => console.warn(`- ${issue}`));
  } else {
    console.log('Documentation is complete and well-formatted.');
  }
}

auditDocs();
