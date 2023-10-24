function my_dictionary() {
    var animal = {
        species: "Dog",
        color: "Brown",
        breed:"Dalmatian",
        age:7, //numbers does not need quotation marks
        sound: "Woof! Woof!"
    
    };

    document.getElementById("Dictionary").innerHTML = animal.sound;
}

function my_dictionary() {
    var animal = {
        species: "Dog",
        color: "Brown",
        breed:"Dalmatian",
        age:7, //numbers does not need quotation marks
        sound: "Woof! Woof!"
    
    };
    delete animal.sound //answer is undefined since it gets deleted
    document.getElementById("Dictionary").innerHTML = animal.sound;

}

document.write(typeof "!");
document.write("<br>");
document.write(typeof 3);
document.write("<br>");
document.write(typeof "Edward");
document.write("<br>");
document.write("10" + 5); //Coercion 5 will be tacked to string 10
document.write("<br>");
document.write(2E310); // Infinity Test - displays string named
document.write("<br>");
document.write(-3E310); // negative Infinity Test // -1.7976931348623157E308
document.write("<br>");
document.write("is 10 greater than 2 = ", 10 > 2); //Boolean Logic
document.write("<br>");
document.write(10 < 2); //Boolean Logic
document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(10 == 11);
document.write("<br>");

X =10;
Y = 10;
A = 82;
B = "82";
AB = "Edward";
AC = "Edward";

document.write("Using Triple Equal Sign === ", X === Y); //Triple Equal Sign
document.write("<br>");
document.write("Using Triple Equal Sign ===", A === B); // Triple Equal Sign
document.write("<br>");
document.write("Using Triple Equal Sign === ", AB === AC); // Triple Equal Sign
document.write("<br>");

document.write(5 > 2 && 10 > 4); //Operators
document.write("<br>");
document.write(5 > 10 && 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 20);




function NanFunction() {
    document.getElementById("Test").innerHTML = 0/0
}

function not_function(){
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    vote = (age < 18) ? "You are under age" : "You are eligible ";
    document.getElementById("vote").innerHTML = vote + " to vote.";
}