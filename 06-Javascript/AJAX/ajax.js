window.addEventListener("load", init);


function init(){
    document.getElementById("btn").addEventListener("click",loadAjax)
    /*loadAjax()*/
}

function loadAjax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET","demo_1",true)
    xhttp.send();

}

/*
 readyState	Holds the status of the XMLHttpRequest.
 0: request not initialized
 1: server connection established
 2: request received
 3: processing request
 4: request finished and response is ready

 status	Returns the status-number of a request
 200: "OK"
 403: "Forbidden"
 404: "Not Found"*/