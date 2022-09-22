//ex1
let temp = (Math.floor(Math.random()*26))-5;
console.log(temp);


   if (temp < 11 ){
       console.log ("The weather is cold");
    }
    else {
       console.log("The weather is moderate");
    }

//ex2

let goodFood = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
    let random = Math.floor(Math.random()*4);
    console.log(goodFood[random]);
}
randomFood();

//ex3
function crystalGlazer(NumberOfChildren, partnerName, location, jobTitle) {

    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${NumberOfChildren} childrens`

}
console.log(crystalGlazer(2, "Zuzana", "Wien", "web developer" ));

//ex4
function ageCalculator (birthYear, currentYear) {
    let age = (currentYear) - (birthYear);

    return `You are ${age} or ${age-1}`
}
console.log(ageCalculator(1988, 2022));

//ex5


function ageCalculator (birthYear) {
     let currentYear = new Date().getFullYear();
console.log(currentYear);
    let age = (currentYear) - (birthYear);


    return `You are ${age} or ${age-1}`
}
console.log(ageCalculator(1988));

//ex6

function convertDegToRad (degrees){

    let calcRadians = degrees*(Math.PI/180);
    return `${degrees} degrees ist equal to ${calcRadians} radians`
}
console.log(convertDegToRad(90));

//ex7

function boxSize (width, heihgt, depth){
    let area = width*heihgt ;
    let volume = width*heihgt*depth ;

    return ` The area of the box is : ${area} 
    The volume of the box is : ${volume}` ;
}
console.log(boxSize (5,5,5));