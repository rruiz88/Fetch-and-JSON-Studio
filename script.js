// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            const container = document.getElementById("container");
        //let i =0;
           for (let i=0;i<json.length;i++){
            
            container.innerHTML += `
            <div class="astronaut">
            <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${json[i].hoursInSpace}</li>
            <li class='${json[i].active ? "green" : "red"}'>Active: ${json[i].active}</li>
            <li>Skills: ${json[i].skills}</li>
            </ul>
            </div>
            <img class="avatar" src=${json[i].picture}>
            </div>
            `;
           } 
        })
     });



});

