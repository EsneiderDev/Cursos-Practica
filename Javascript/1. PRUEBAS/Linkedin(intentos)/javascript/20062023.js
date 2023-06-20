let a = ["e", "o", "s"]

let key = a => animal === "s"

//====================================================
let animalss = [{ type: "lion" }, "tiger"];
let clones = animalss.slice();

clones[0].type = "bear";
clones[1] = "sheep";

console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);


//====================================================

const animals = ["Rabbit", "Dog", "Cat"];
animals.unshift("Lizard");






//====================================================
let conservation = true;
let deforestation = false;
let acresOfRainForest = 100;

if (conservation && !deforestation) {
    ++acresOfRainForest;
    console.log( acresOfRainForest );
}





//====================================================
"popato".include("pot")



//====================================================
let value1 = 2;
let value2 = 4;

value1 *= value1 + value2 * value2 / value1;
console.log(value1);





//====================================================


if (true) {
    var first = 'You';
}

function fScope() {
    var second = "got this!";
}

fScope();
console.log(first);
console.log(second);


//====================================================

let bear = {
    sound: "roar",
    roar() {
        console.log(this.sound);
    }
}

bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();



//====================================================
console.log(typeof (42.1));
