const github = require("@actions/github");
const core = require("@actions/core");

async function run() {
  try {
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const ctx = github.context;
//     const res = await octokit.repos.createOrUpdateFileContents({
//       owner: ctx.repo.owner,
//       repo: ctx.repo.repo,
//       path: `docs/somefile.md`,
//       message: "initial template setup",
//       content: Buffer.from("some super simple test").toString("base64"),
//       branch: ctx.ref,
//     });
    const {data} = await octokit.repos.getContent({
  owner: ctx.repo.owner,
  repo: ctx.repo.repo,
  branch: ctx.ref,
  path: '.github/actions/writer',
});

    console.log(data);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
