const toggleBtn = document.querySelector("#button-h");
const toggleBtnIcon = document.querySelector("i");
const dropDown = document.querySelector("#dropdown");



toggleBtn.addEventListener("click",function(){
    dropDown.classList.toggle("open");
    var isOpen = dropDown.classList.contains("open");

    if(isOpen===true){
        document.querySelector("nav").style.height = "240px";


    }
    else{
        document.querySelector("nav").style.height = "60px";
        document.querySelector("nav").style.transition = "all 1s";

    }

    /*toggleBtn.classList = isOpen
    ? "fa fa-xmark"
    : "fa fa-bars"
    ? "bi bi-x"a
    : "bi bi-justify"*/ 
})
