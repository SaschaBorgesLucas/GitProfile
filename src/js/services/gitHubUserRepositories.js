import {gitHubApiUrl} from '../variables.js'

async function getGitHubRepositories(userName){
    const apiResponse = await fetch(`${gitHubApiUrl}/${userName}/repos`);
    return await apiResponse.json();
}

export {getGitHubRepositories}