window.alert("Here is a random number " +  Math.random() * 100);

function addition_function() {
    var addtion = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addtion
}

function subtraction_function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;

}

function multiplication(){
    var simple_math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_math;
}

function division(){
    var simple_math2 = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 ÷ 6 = " + simple_math2;
}

function modulus_operator(){
    var simple_math3 = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math3;
}

function negation_operator(){
    var x =10;
    document.getElementById("Math6").innerHTML = -x;
}

var X = 5;
X++
document.write(X);
document.write("<br>")

var Y = 5.25;
Y--;
document.write(Y);