const screen = {
    userProfile: document.querySelector('.user'),
render(user){
        let render = renderUser(user);
        render += renderRepositories(user);
        render += renderEvents(user);
        render += `</div>`
        this.userProfile.innerHTML = render;
    },
    renderUserNotUser(){
        this.userProfile.innerHTML = userNotFound();
    }
}
function renderUser(user){
    const renderHTML = `<div>
                        <ul>
                            <li>
                                <h1 class="name">${user.name ??'Sem nome cadastrado'}</h1>
                            </li>
                            <li>
                                <p class="login"> 
                                    <strong>${user.login}</strong>
                                </p>
                            </li>
                            <li>
                                <img src="${user.avatarUrl} " class="picture" alt="foto de perfil"/>
                            </li>
                            <li>
                            <p class="bio">${user.bio}</p>
                            </li>
                            <ul class= "popularity">
                                <li>
                                    <strong> <i class="fa-regular fa-flag"></i> followers: </strong>${user.followers}
                                </li>
                                <li>
                                    <strong> <i class="fa-solid fa-flag"></i> following: </strong>${user.following}
                                </li>
                            </ul>
                        </ul>
                        <hr>`;
    return renderHTML;
}
function renderRepositories(user){
    let renderHTML =`
                        <div class="repositories"> 
                            <h2 class="header"> Repositories </h2> 
                            <ul>`;
    user.repositories.forEach(repo => renderHTML += `
                                <li>
                                    <a href="${repo.html_url}" target="_blank" class="repository">
                                        ${repo.name}
                                    </a>
                                    <input id="${repo.id}" type="radio" name="checker">
                                    <label for="${repo.id}" class="checker cheked">
                                        <i class="fa-solid fa-plus icon-right"></i>
                                    </label>
                                    <label for="${repo.id}" class="unchecked">
                                        <i class="fa-solid fa-minus icon-right"></i>
                                    </label> 
                                    <p class="repositoryData">
                                        <strong> Descriptio:&nbsp; </strong> ${repo.description ?? `There is no description for this repository.`}
                                    </p>
                                    <p class="repositoryData">
                                        <strong> Language:&nbsp; </strong>${repo.language ?? `Unknown or uninformed language.`}
                                    </p>
                                    <p class="repositoryData">
                                        <strong> URL:&nbsp; </strong><a class="url" href='${repo.html_url}'>${repo.html_url}</a>
                                    </p>
                                    <p class="repositoryData repositoryStats">
                                        <abbr title="Viwers count"> <i class="fa-regular fa-eye">:&nbsp;${repo.watchers_count} </i> </abbr>
                                        <abbr title="Forks count"> <i class="fa-solid fa-code-fork">:&nbsp;${repo.forks_count} </i> </abbr>
                                        <i class="fa-regular fa-star">:&nbsp;${repo.stargazers_count}</i>
                                    </p>
                                </li>`
    );
    renderHTML += `         </ul>
                        </div>
                        <hr>`
    return renderHTML;
}
function renderEvents(user){
    let renderHTML =`<div class="events"> 
                        <h2 class="header"> Events </h2>
                        <ul>`;
    user.events.forEach(event =>{ 
        if(checkEventType(event)){
            renderHTML += `<li class="eventIten">
                                <p class="${event.type} eventType"><strong>${event.type.replace(/([a-z])([A-Z])/g, '$1 $2')}</strong> at repository: ${event.repo.name.split("/")[1]}</p>
                                <p>${defineEventMessage(event)}</p>
                            </li>`
        }
    });   
    renderHTML+=`       </ul>
                    </div>`           
    return renderHTML;
}
function checkEventType(event){
    if (event.type==="PushEvent"||event.type==="CreateEvent"){
       return true;
    }
    return false;
}
function defineEventMessage(event){
    if (event && event.payload && event.payload.commits && event.payload.commits.length >= 0){
        return `<strong>Message:</strong> ${event.payload.commits[0].message}`;
      }else{
        return '<strong>Message:</strong> There are no messages for this event'
      }     
}
function userNotFound(){
    const renderHTML = `<div>
                            <h1 class="name"> User not found </h1>
                            </br></br></br>
                            <img src="./src/img/userImgNotFound.png" class="picture" alt="foto de perfil"/>

                            <p class="bio">Maybe this user doesn't exist, hasn't been registered yet, or you typed their name wrong. Please try again.</p>
                        </div>`
    return renderHTML 
}
export{screen}

