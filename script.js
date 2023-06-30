// ***************** values and variables **************/
console.log("Hello World");


let firstName= "Donald";

console.log(firstName);


// ***************** Varible Naming Cnventions ***********/
let last_name2 ="John"
let $function ="50"

console.log(last_name2);

// *************** Basic Operators ************/

// Math Operators
const now =2023;
const divineAge = now -1990;
const davidAge = now - 1981;

console.log(divineAge, davidAge);
console.log(divineAge * 2, divineAge /10, 2 ** 3);

/** 
* Create 2 variables
* The datatype must be strings
* Concatenate (Add) the two variables
* And display the result in the console
*/




// ------ASSIGNMENT OPERATOR (=)-----
let numberOne =10 + 15;
numberOne +5;
console.log(numberOne);
// numberOne = numberOne + 5;  

let numberTwo = 2 + 5;
numberTwo *= 7;
numberTwo = numberTwo * 7;
console.log(numberTwo);


let numberThree = 1;
numberThree++;
// can be rewritten as:
numberThree  = numberThree + 1;
console.log(numberThree);

let numberFour = 4;
numberFour--;
// can be rewritten as:
numberFour = numberFour - 1;
console.log(numberFour);

// ----Comparison Operators ( >, <, >=, <=)-----------
let ugoAge, olisaAge;
ugoAge = 32;
olisaAge = 35;
console.log(ugoAge === olisaAge);

// -----Operetor Precedence--------------------
const yearNow = 2023;
const josephAge = yearNow - 1999;
const henryAge = yearNow - 1990;
console.log((josephAge + henryAge) * 10);
// 22 + 33 * 10



const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2; 
const johnkBMI = johnMass / johnHeight ** 2; 

console.log(markBMI, johnkBMI);

const markHeightBMI = markBMI > johnkBMI;
console.log (markHeightBMI);
const johnHeightBMI =  johnkBMI > markBMI;

// *************** Strings and Template Literals ****************
const myName = 'Donald';
const myJob = "Developer";
const yearofBirth = 1717;
const currentYear = 2077;

const donald = "I'm " + myName + ', a ' + (currentYear - yearofBirth) + ' year old ' + myJob + '!';
console.log(donald);

const newDonald = `I'm ${myName}, a ${currentYear - yearofBirth} year old ${myJob}!`;
console.log(newDonald);

console.log(`Hello how are you doing`);

console.log(`This is \n\
for multiple \n\
lines`);

console.log(`This
is
for multiple
lines`)



//******************* Taking Decision: if / else syayement ****************/
const kelsAge = 5;

// If statement only executes when the expression evaluated to true
if(kelsAge >= 18){
    console.log(`kels is eligible to drink Alcohol cos his age is ${kelsAge}`);    
}

// Eles statement executes when the if statement returns false
else{
    const yearsLeft = 18 - kelsAge;
    console.log(`kels is not eligible to drink alcohol . Wait another ${yearsLeft} years`)
}

let dayofTheWeek = 'Monday';

if(dayofTheWeek == 'Monday'){
    console.log('SIT AT HOME')
} 
else{
    console.log('Write some code!');
}



if(markBMI > johnkBMI){
    console.log(`mark's BMI ${markBMI} is higher than John's ${johnkBMI}!`)
} 

else{
    console.log(`John's BMI ${johnkBMI} is higher than Marks's ${markBMI}!`)
} 

// ************* Type Coversion and coercion ********
// Type conversion is the processing of converting a value from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Donald'));
console.log(typeof NaN);

// Type Coersion
// Tyope Coersion is when Javascript coerces or changes a data type by itself
const sum = 35 + 'hello';
console.log(sum)

console.log('23' - '10' - '3');

console.log('24' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// We have 5 Falsey Values: 0, '', undefined, null, Nan 
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;

if(money){
    console.log('Go on a shopping spree!');    
}
else{
    console.log('Dont spend the money');
}

let product = 0;
if(product){
      console.log('stay at home');      
} 
else{
    console.log('Go on a shopping spree!');
} 

// ************** Logical Operators ***************

const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if(hasDriversLicense && hasGoodVision || isTired){
  console.log('Nonse is eligible to drive');
}

else{
    console.log('someon else should drive');
}









 


