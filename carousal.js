var img1 = "./bJk.gif";
var img2 = "./web dev.gif";
var img3 = "./design gif.gif";
var img_bg = document.querySelector("#img-bg");

document.querySelector(".left").addEventListener("click", function(){
    var cur_img_div = document.querySelector(".active");
    var cur_img = document.querySelector(".active>img");
    left_function(cur_img_div,cur_img);
});

function left_function(div_a,img_a){
    switch(img_a){
        case img1:
            img_bg.setAttribute("src",img2);
            document.querySelector("#img-2").classList.add("active");
            document.querySelector("#img-2").classList.remove("dim");
            div_a.classList.remove("active");
            div_a.classList.add("dim");
            break
        case img2:
            img_bg.setAttribute("src",img3);
            document.querySelector("#img-3").classList.add("active");
            document.querySelector("#img-3").classList.remove("dim");
            div-a.classList.remove("active");
            div-a.classList.add("dim");
            break
        case img3:
            img_bg.setAttribute("src",img1);
            document.querySelector("#img-1").classList.add("active");
            document.querySelector("#img-1").classList.remove("dim");
            cur_img_div.classList.remove("active");
            cur_img_div.classList.add("dim");
            break
    }
}


document.querySelector(".right").addEventListener("click", function(){
    var cur_img_div = document.querySelector(".active");
    var cur_img = document.querySelector(".active>img");

    right_function(cur_img_div);
});

function right_function(div_a,cur_img){
    switch(img_a){
        case img1:
            img_bg.setAttribute("src",img3);
            document.querySelector("#img-3").classList.add("active");
            document.querySelector("#img-3").classList.remove("dim");
            div_a.classList.remove("active");
            div_a.classList.add("dim");
            break
        case img2:
            img_bg.setAttribute("src",img1);
            document.querySelector("#img-1").classList.add("active");
            document.querySelector("#img-1").classList.remove("dim");
            div-a.classList.remove("active");
            div-a.classList.add("dim");
            break
        case img3:
            img_bg.setAttribute("src",img2);
            document.querySelector("#img-2").classList.add("active");
            document.querySelector("#img-2").classList.remove("dim");
            cur_img_div.classList.remove("active");
            cur_img_div.classList.add("dim");
            break
    }
}