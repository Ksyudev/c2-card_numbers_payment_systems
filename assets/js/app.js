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
let mastercard = ['51','52','53','54','55'];
let maestro = ['5018','5020','5038','5893','6304','6759','6761','6762','6763','676770','676774'];

if (isCorrect == true) 
   { 
     if ((visa.includes(number.slice(0,1)))||(visa.includes(number.slice(0,4)))||(visa.includes(number.slice(0,6))))
       {console.log('Your payment system - Visa');}
     else if ( (mastercard.includes(number.slice(0,2))||((number.slice(0,4)>=2221)&&(number.slice(0,4)<=2720))) )
         {console.log('Your payment system - MasterCard');}
     else if ((maestro.includes(number.slice(0,4)))||(maestro.includes(number.slice(0,6))))
       {console.log('Your payment system - Maestro');}
     else
        {console.log('Your payment system - another');}
   }
else 
    {console.log('Your card number is not correct');}