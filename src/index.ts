import { getInput } from "@actions/core";
import { context } from "@actions/github";

function greet(name: string, repoUrl: string) {
    console.log(`'Hello ${name}! You are running a GH Action in ${repoUrl}'`);
}

type GithubContext = typeof context;
function getRepoUrl({repo, serverUrl}: GithubContext): string {
    return `${serverUrl}/${repo.owner}/${repo.repo}`;
}

const inputName = getInput("name");
greet(inputName, getRepoUrl(context));
