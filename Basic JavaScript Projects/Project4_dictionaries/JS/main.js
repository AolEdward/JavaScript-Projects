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