function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has changed!";
}





function myFunction() {
    var sentence = " I am learning";
    sentence += " a lot from this boook";
    document.getElementById("demo").innerHTML = sentence;
    
}


function myTime() {
    var time = Date();
    document.getElementById("clock").innerHTML = time;
}

function myFunction2() {
    var addition =  2 + 2;
    document.getElementById("demo2").innerHTML = "2 + 2 = " + addition;

}