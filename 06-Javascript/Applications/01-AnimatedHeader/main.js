window.addEventListener("load", init);

var header = null;

function init(){
    var btn = document.getElementById("btn");
    header = document.getElementById("header");
    cont = document.getElementById("content");
    //menu.classList.add("disable");
    //menu.style.transform = "translate(-120%,0px)";
    btn.addEventListener("click", showmenu);
}

function showmenu(){
    header.classList.toggle("active");
    cont.classList.toggle("active");
}