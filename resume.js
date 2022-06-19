
var buttons = document.querySelectorAll('.nav-menu a');
console.log(buttons);

for(let i =0;i<buttons.length;i++){
 buttons[i].addEventListener('click',function(event){
     event.preventDefault();
     var tragetSelectorID = this.textContent.trim().toLowerCase();
     var targetSection = document.getElementById(tragetSelectorID);
     console.log(targetSection);
     var interval = setInterval(function(){
         var targetSectionCoordinate = targetSection.getBoundingClientRect();
         if(targetSectionCoordinate.top<=0){
             clearInterval(interval);
             return;
         }
    window.scrollBy(0,50);
     },20);
 })
}



var progressBar = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll());
var animatiopnDone = false;
// we will set that initial percentage where the bar should start filling 
function initialiseBar(){
    for(let bar of progressBar){
        bar.style.width = 0+'%';
    }
}
initialiseBar();

// function to fill the whole bar 
function fillBar(){
    for(let bar of progressBar){
        let targetBar = bar.getAttribute('data-bar-width');
        let currentwidth =0;
        let interval =setInterval(function(){
            if(currentwidth>targetBar){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width = currentwidth+'%';
        }, 5);
    }
}


// making a function for scrollcheck 
// and here we will have to check whether the screen have to come to that point or not 
function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animatiopnDone &&coordinates.top<=window.innerHeight){
        animatiopnDone=true;
        console.log("skills section is visible");
        fillBar();
    }
    else if(coordinates.top>window.innerHeight){
animatiopnDone=false;
initialiseBar();
    }
}