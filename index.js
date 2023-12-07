const core = require('@actions/core');
const github = require('@actions/github');

try {
  const patterns = core.getInput('patterns');
  console.log(`Hello ${patterns}!`);

  const folder = core.getInput('folder');
  console.log(`Hello ${folder}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
