import {getGitHubUser} from './services/gitHubUser.js';
import {getGitHubRepositories} from './services/gitHubUserRepositories.js';
import {getGitHubEvents} from './services/gitHubUserEvents.js';
import {user} from './objects/user.js';
import {screen} from './objects/screen.js';

btnSearch.addEventListener("click",()=>{
  const userName = inputSearch.value;
  if (validateInput(userName)) return;
  displayUser(userName);
});
function validateInput(userName){
  if(userName.length===0){
      alert("Por favor, preencha o campo com o nome do usuário que deseja buscar");
      return true;
  }
}
inputSearch.addEventListener("keyup",(e)=>{
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if(isEnterKeyPressed){
      if (validateInput(userName)) return;
      displayUser(userName);
  }
});
async function displayUser(userName){
  const userResponse = await getGitHubUser(userName);
  if(userResponse.message==="Not Found"){
    screen.renderUserNotUser(user);
    return;
  }
  user.setInfo(userResponse);
  user.setRepositories(await getGitHubRepositories(userName));
  user.setEvents(await getGitHubEvents(userName));
  screen.render(user);
}