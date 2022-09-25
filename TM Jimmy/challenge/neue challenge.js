    

function ATM(/*amount,a,b,c,d*/){

      //let AmountNote100 = a;
/*       a = 0;
 */    /*   let AmountNote50 = b;
      let AmountNote20 = c;
      let AmountNote10 = d; */

  
      let amount = document.getElementById("Amount").value;
      let reserve = 3000;
  
  
      let note100 = Math.floor(amount/100);
      let remain1 = amount % 100;
  
      let note50 = Math.floor(remain1/50);
      let remain2 = remain1 % 50;
  
      let note20 = Math.floor(remain2/20);
      let remain3 = remain2 % 20;
  
      let note10 = Math.floor(remain3/10);
      let remain4 = remain3 % 10;

/*       
      if (a=0){
        return amount = 0;
      }
      if (b=0){
        return (remain1 = 0, remain2 = amount % 100 );
      }
      if (c=0){
        return (remain2 = 0, remain3 = remain1 % 100 );
      }
      if (d=0){
        return (remain3 = 0, remain4 = remain2 % 100 );
      };
       */
  
      //Total amount available in this ATM
  
      let maxAvailable = 4500;
  
      if (maxAvailable < amount) {
        document.getElementById("check2").innerHTML = "Checking Amount.....Amount max is limited to 1500$";
        return;}
      else{ 
        document.getElementById("check2").innerHTML = "Checking Amount.....operation going on"
          }
  
  
      //amount should not have any remain at the end of the process
      if (remain4>0)  {
        document.getElementById("check").innerHTML = "Checking.......operation not possible";
        return;}
      else { 
        document.getElementById("check").innerHTML = "Checking.......operation succeeded"
      }
      
      // checking balance
      if (reserve<amount)  {
        document.getElementById("check").innerHTML = "Checking.......your account balance doesn't allow you this operation";
        return;}
      else { 
        document.getElementById("check").innerHTML = "Checking.......operation succeeded"
      }
      // balance statement


          const bodyElement = document.getElementById("parent")
          const balance = document.createElement("p");
          balance.innerHTML=`Balance before transaction was ${reserve}.<br>
          Your new balance is ${reserve-amount}`;
          bodyElement.appendChild(balance);
        
      
      
      //if an amount of a bill is empty
      // if (a=0) {
      //     remain1 = amount;
      //     note100 = 0;
  
     
      document.getElementById("ote100").innerHTML = note100 ;
      document.getElementById("ote50").innerHTML = note50 ;
      document.getElementById("ote20").innerHTML = note20 ;
      document.getElementById("ote10").innerHTML = note10 ;
   }
  
      //return ` You will get ${note100} 100 notes, ${note50} 50 notes, ${note20} 20 notes and ${note10} 10notes`
  /* } */
  //console.log(ATM(200,25,50,100,200));