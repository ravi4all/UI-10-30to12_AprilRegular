/*function init(){
    document.getElementById("btn").addEventListener("click", function(){
        var a = document.getElementById("box_1");
        var b = document.getElementById("box_2");
        var c = parseInt(a.value) + parseInt(b.value);
        document.getElementById("result").innerHTML = c;
    });
}*/

var a;
var b;
var c = 0;
function init() {
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    document.getElementById("btn_1").addEventListener("click", add);
    document.getElementById("btn_2").addEventListener("click", sub);
    document.getElementById("btn_3").addEventListener("click", div);
    document.getElementById("btn_4").addEventListener("click", mul);
}

function add(){
    c = parseInt(a.value) + parseInt(b.value);
    display();
}
function sub(){
    c = parseInt(a.value) - parseInt(b.value);
    display();
}
function div(){
    c = parseInt(a.value) / parseInt(b.value);
    display();
}
function mul(){
    c = parseInt(a.value) * parseInt(b.value);
    display();
}

function display(){
    document.getElementById("result").innerHTML = c;
}


init();