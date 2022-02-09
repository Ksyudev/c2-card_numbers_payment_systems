let number= prompt ('Enter your card number');
console.log (`Your card number:`, number);

let card = number.split('').reverse().map(i=>+i);

//console.log (card);

let sum = 0;

 for(let i=0;i<card.length; i++) 
    {
      if (i%2 ==0)    
       {
        sum = sum + card[i];
       }
     else 
       {
        let double = card[i]*2;
        sum = sum + (double >9 ? (double - 9) : double); 
       }
    }

 let isCorrect = sum % 10 == 0 ;

 console.log (`Is Correct:`,isCorrect)

let visa = ['4'];
let mastercard = ['2','51','52','53','54','55'];
let maestro = ['50','58','630','67'];
let first = number.slice(0,1);
let second = number.slice(0,2);
let third = number.slice(0,3);

if (isCorrect == true) 
   { 
     if (visa.includes(first))
       {console.log('Your payment system - Visa');}
     else if ((mastercard.includes(first))||(mastercard.includes(second)))
       {console.log('Your payment system - MasterCard');}
     else if ((maestro.includes(second))||(maestro.includes(third)))
       {console.log('Your payment system - Maestro');}
     else
        {console.log('Your payment system - another');}
   }
else 
    {console.log('Your card number is not correct');}