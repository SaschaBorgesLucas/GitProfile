import {gitHubApiUrl, quantityOfrepositories} from '/src/js/variables.js'

async function getGitHubRepositories(userName){
    const apiResponse = await fetch(`${gitHubApiUrl}/${userName}/repos?per_page=${quantityOfrepositories}`);
    return await apiResponse.json();
}

export {getGitHubRepositories}