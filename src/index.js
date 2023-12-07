const core = require('@actions/core');
const child_process = require('child_process');
const fs = require('fs');
const rename = require('./rename.js');

try {
  const patterns = core.getInput('patterns');
  console.log(`Patterns: ${patterns}`);

  const folder = core.getInput('folder');
  console.log(`Folder: ${folder}`);

  const inputFolder = "temp-abap2xlsx-input";
  const outputFolder = "temp-abap2xlsx-output";

  child_process.execSync(`npm install @abaplint/cli -g`);
  child_process.execSync(`git clone --depth 1 https://github.com/abap2xlsx/abap2xlsx ` + inputFolder);
  child_process.execSync(`mkdir ` + outputFolder);
  fs.writeFileSync("abaplint-rename.json", rename.config);
//  child_process.execSync(`abaplint --rename abaplint-rename.json`);
  child_process.execSync(`ls`);

  if (fs.existsSync(folder) === false) {
    child_process.execSync(`mkdir ` + folder);
  } else {
    child_process.execSync(`rm ` + folder + `/*.*`);
  }

// rm temp-abap2xlsx-input
// rm temp-abap2xlsx-output

} catch (error) {
  core.setFailed(error.message);
}
