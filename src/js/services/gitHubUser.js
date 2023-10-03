import { gitHubApiUrl } from '/src/js/variables.js'

async function getGitHubUser(userName){
    const apiResponse = await fetch(`${gitHubApiUrl}/${userName}`);
    return await apiResponse.json();
}

export{getGitHubUser}