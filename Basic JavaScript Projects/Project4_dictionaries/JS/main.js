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



function NanFunction() {
    document.getElementById("Test").innerHTML = 0/0
}


