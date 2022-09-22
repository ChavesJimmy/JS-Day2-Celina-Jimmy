//Capitalize

const mySentence = (function () {
let myText = "i am a web developer";
let cap = myText.charAt(0).toUpperCase() + myText.slice(1);

return cap

}());

console.log(mySentence);

//Average Grade

function averageGrade(MathGrade, PhysGrade, EngGrade){
    let SumGrade = (MathGrade+PhysGrade+EngGrade);
    let Average = (SumGrade/3);

    return `
Sum : ${SumGrade}
Average : ${Average}` ;
}
console.log(averageGrade(12, 7, 17));
// output sum : 36 / average : 12