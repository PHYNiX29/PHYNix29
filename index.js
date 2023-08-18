var length=document.querySelectorAll("button,a").length;
for(var i=0;i<length;i++){
    document.querySelectorAll("button,a")[i].addEventListener("click",function(){
        var audio=new Audio("bassdrum-10-45967.mp3");
        audio.play();
    })    
};

window.addEventListener("scroll",reveal());
function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 48;

        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}