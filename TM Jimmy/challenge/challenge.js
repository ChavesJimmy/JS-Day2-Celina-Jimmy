    

function ATM(amount,a,b,c,d){

    let Amount100 = a;
    let Amount50 = b;
    let Amount20 = c;
    let Amount10 = d;


    let bill100 = Math.floor(amount/100);
    let remain1 = amount % 100;

    let bill50 = Math.floor(remain1/50);
    let remain2 = remain1 % 50;

    let bill20 = Math.floor(remain2/20);
    let remain3 = remain2 % 20;

    let bill10 = Math.floor(remain3/10);
    let remain4 = remain3 % 10;

    
    //alert amount of notes to low
    if(Amount100 < 6) {
        alert("refill the 100 notes")
    }
    if(Amount50 < 11) {
        alert("refill the 50 notes")
    }
    if(Amount20 < 21) {
        alert("refill the 20 notes")
    }
    if(Amount10 < 51) {
        alert("refill the 10 notes")
    }

    //Total amount available in this ATM

    let totalAvailable = (100*a + 50*b + 20*c + 10*d);

    if (totalAvailable < amount) {
        return("operation not possible")
    }
    else{ 
        console.log ("operation going on")
        }


    //amount should not have any remain at the end of the process
    if (remain4>0)  {
    return("operation not possible")
}
    else{ 
    console.log ("operation going on")
    }
    
    //if an amount of a bill is empty
    if (a=0) {
        remain1 = amount;
        bill100 = 0;

    }

     return ` You will get ${bill100} 100 notes, ${bill50} 50 notes, ${bill20} 20 notes and ${bill10} 10notes`
}
console.log(ATM(580,15,32,31,85))
