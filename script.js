// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            const container = document.getElementById("container");
        //let i =0;
        json.sort((a,b)=>(a.hoursInSpace - b.hoursInSpace));
           for (let i=0;i<json.length;i++){
            
            container.innerHTML += `

            <h3>Astronaut # ${[i].length+i}</h3>
            <div class="astronaut">
            <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${json[i].hoursInSpace}</li>
            <li class='${json[i].active}'>Active: ${json[i].active}</li>
            <li>Skills: ${json[i].skills}</li>
            </ul>
            </div>
            <img class="avatar" src=${json[i].picture}>
            </div>
            
            `;
            
           };
           
        })
     });



});

