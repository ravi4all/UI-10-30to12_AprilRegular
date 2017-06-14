window.addEventListener("load",init)

function init() {
    /*document.getElementById("btn_1").addEventListener("click", doCalculation);
    document.getElementById("btn_2").addEventListener("click", doCalculation);
    document.getElementById("btn_3").addEventListener("click", doCalculation);
    document.getElementById("btn_4").addEventListener("click", doCalculation);*/
    buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", doCalculation);
    }
}
function doCalculation(event){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    print_result = document.getElementsByTagName("span");
    var result = 0;

    buttonValue = event.srcElement.innerHTML;
    console.log(buttonValue, typeof buttonValue);
    var expression = a.value + buttonValue + b.value;
    console.log(eval(expression));
    console.log(expression);
    print_result[0].innerHTML = eval(expression);
    /*if(buttonValue == "+"){
        result = parseInt(a.value) + parseInt(b.value);
        print_result[0].innerHTML = result;
    }
    else if(buttonValue == "-"){
        result = parseInt(a.value) - parseInt(b.value);
        print_result[0].innerHTML = result;
    }*/

}

