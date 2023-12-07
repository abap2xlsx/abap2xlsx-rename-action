const core = require('@actions/core');
const child_process = require('child_process');
const fs = require('fs');

const inputFolder = "temp-abap2xlsx-input";
const outputFolder = "temp-abap2xlsx-output";

const config = {
  "global": {
    "files": "/" + inputFolder + "/src/*.*",
    "skipGeneratedGatewayClasses": true,
    "skipGeneratedPersistentClasses": true,
    "skipGeneratedFunctionGroups": true,
    "useApackDependencies": false
  },
  "dependencies": [
    {
      "url": "https://github.com/abaplint/deps",
      "folder": "/deps",
      "files": "/src/**/*.*"
    }
  ],
  "rename": {
    "output": outputFolder,
    "patterns": []
  },
  "syntax": {
    "version": "v702",
    "errorNamespace": "^(Z|Y)"
  },
  "rules": {
    "begin_end_names": true,
    "check_ddic": true,
    "check_include": true,
    "check_syntax": true,
    "global_class": true,
    "implement_methods": true,
    "method_implemented_twice": true,
    "parser_error": true,
    "parser_missing_space": true,
    "superclass_final": false,
    "unknown_types": true,
    "xml_consistency": true
  }
}

try {
  const patterns = core.getInput('patterns');
  console.log(`Patterns: ${patterns}`);

  const folder = core.getInput('folder');
  console.log(`Folder: ${folder}`);

  child_process.execSync(`npm install @abaplint/cli -g`);
  child_process.execSync(`git clone --depth 1 https://github.com/abap2xlsx/abap2xlsx ` + inputFolder);
  child_process.execSync(`mkdir ` + outputFolder);
  fs.writeFileSync("abaplint-rename.json", JSON.stringify(config, null, 2));
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
