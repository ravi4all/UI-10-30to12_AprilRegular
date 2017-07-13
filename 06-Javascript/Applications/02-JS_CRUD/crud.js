window.addEventListener("load", init);


function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");

    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("del").addEventListener("click",deleteTask);
    document.getElementById("save").addEventListener("click",saveTask);
    document.getElementById("load").addEventListener("click",loadTask);
}

function saveTask(){
    if(window.localStorage){
        var json = JSON.stringify(taskObj.taskList);
        localStorage.setItem('data',json);
        /*console.log(json);*/
        Notification.requestPermission(function(){
            var n = new Notification("ITEM CRUD-Application : By Ravikant Tyagi", {
                body : "Hello User , Your Data is Saved in Your Browser",
                icon : "../success.png"
            });

            document.getElementById("audio").play();
            setTimeout(function(){
                n.close();
                document.getElementById("audio").pause();
                //document.getElementById("audio").currentTime=0;
            },7000);

        });
    }
    else {
        console.log("Local storage not supported");
    }
}

function loadTask(){
    if(window.localStorage){
        if(localStorage.data){
            var data = localStorage.getItem("data");
            var json = JSON.parse(data);
            /*console.log(json);*/
            taskObj.taskList = json;
            printTask();
        }
    }
}

function addTask(){
    /*result = document.getElementById("result");
    result.innerHTML = a.value + b.value;*/

    ul = document.getElementById("taskList");
    li = document.createElement("li");
    taskObj.addTask(a.value, b.value);
    li.innerHTML = a.value + " " + b.value;
    ul.appendChild(li);

    li.addEventListener("click",markTask)
}

function markTask(event){
    event.srcElement.classList.toggle("clicked");
}

function deleteTask(){
    selected = document.getElementsByClassName("clicked");

    for(var i=0; i<selected.length; i++){
        selected[i].style.display = 'none';
    }
}

function printTask(){
    ul = document.getElementById("taskList");
    /*ul.innerHTML = "";*/
    taskObj.taskList.forEach(function(obj){
        li = document.createElement("li");
        li.innerHTML = obj.name + " " + obj.desc;
        ul.appendChild(li);
        li.addEventListener("click",markTask)
    })
}