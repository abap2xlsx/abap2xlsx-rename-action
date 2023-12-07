const core = require('@actions/core');
const child_process = require('child_process');

try {
  const patterns = core.getInput('patterns');
  console.log(`Patterns: ${patterns}!`);

  const folder = core.getInput('folder');
  console.log(`Folder: ${folder}!`);

  child_process.execSync(`git clone --depth 1 https://github.com/abap2xlsx/abap2xlsx`);
  child_process.execSync(`ls`);

} catch (error) {
  core.setFailed(error.message);
}
