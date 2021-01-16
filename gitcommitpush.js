// ########## Important!! This file need to be at the root directory of the project ########## 
// Simple-git without promise 
const simpleGit = require('simple-git')(__dirname);
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')(__dirname);


const gitCommitPush = async (filename) => {
    
    const repo = process.env.GITHUB_REPO;
    const userName = process.env.GITHUB_USERNAME;
    const password = process.env.GITHUB_PASSWORD;
    // Set up GitHub url like this so no manual entry of user pass needed
    const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
    // add local git config like username and email
    simpleGit.addConfig('user.email',process.env.GITHUB_USEREMAIL);
    simpleGit.addConfig('user.name',process.env.GITHUB_FULLUSERNAME);
    // check if git repo exists, if not initialize Repo, create a Remote, add file, commit and push it to Remote
    simpleGit.checkIsRepo()
    .then(isRepo => !isRepo && initializeRepo(simpleGit))
    .then(() => simpleGit.fetch())
    .then(() => simpleGit.add(`${__dirname}/${filename}`), () => console.log(`Git staging file ${filename} done`))
    .then(() => simpleGit.commit(process.env.GITHUB_COMMITMESSAGE), () => console.log('Git commit done'))
    .then(() => simpleGit.push(['-f', 'origin', 'master'], () => console.log('Git push done')));
 
    function initializeRepo (git) {
        return git.init()
        .then(() => git.addRemote('origin', gitHubUrl))
        .then(() => git.listRemote(['--get-url'], (err, data) => {
            if (!err) {
                console.log(`Remote url for repository at ${__dirname}:`);
                console.log(data);
            } else {
                console.log(`There is an error. No remote url for repository at ${__dirname} was created!`);
            }
        }))
    }    
}

module.exports = {
    gitCommitPush
}