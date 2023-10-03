import { gitHubApiUrl, quantityOfEvents } from '/src/js/variables.js'

async function getGitHubEvents(userName){
    const apiResponse = await fetch(`${gitHubApiUrl}/${userName}/events?per_page=${quantityOfEvents}`);
    return await apiResponse.json();
}

export { getGitHubEvents }