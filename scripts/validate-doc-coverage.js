const fs = require('fs');

const docsFilePath = './docs.json';

/**
 * Validates the documentation coverage by parsing the TypeDoc JSON output.
 * Exits with a non-zero status code if any undocumented exports are found.
 */
function validateDocCoverage() {
  if (!fs.existsSync(docsFilePath)) {
    console.error(`Documentation file not found at path: ${docsFilePath}. Please ensure the file exists and try again.`);
    process.exit(1);
  }

  const docs = JSON.parse(fs.readFileSync(docsFilePath, 'utf-8'));
  const undocumentedExports = [];

  function checkDocumentation(node) {
    if (node.kindString === 'Module' || node.kindString === 'Namespace') {
      node.children.forEach(checkDocumentation);
    } else if (node.kindString === 'Class' || node.kindString === 'Interface' || node.kindString === 'Function') {
      if (!node.comment || !node.comment.shortText) {
        undocumentedExports.push(node.name);
      }
    }
  }

  docs.children.forEach(checkDocumentation);

  if (undocumentedExports.length > 0) {
    console.error('Undocumented exports found. Please ensure the following exports are documented to pass the validation:');
    undocumentedExports.forEach((name) => console.error(`- ${name}`));
    process.exit(1);
  } else {
    console.log('All exports are documented.');
  }
}

validateDocCoverage();
