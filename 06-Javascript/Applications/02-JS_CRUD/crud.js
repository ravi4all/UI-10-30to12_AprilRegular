window.addEventListener("load", init);


function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");

    document.getElementById("add").addEventListener("click",addTask);
}

function addTask(){
    /*result = document.getElementById("result");
    result.innerHTML = a.value + b.value;*/

    ul = document.getElementById("taskList");
    li = document.createElement("li");

    li.innerHTML = a.value + " " + b.value;
    ul.appendChild(li);


}