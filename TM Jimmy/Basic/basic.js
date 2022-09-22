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
