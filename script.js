// ***************** values and variables **************/
console.log("Hello World");


let firstName= "Donald";

console.log(firstName);


// ***************** Varible Naming Conventions ***********/
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


const manchesterSecores = (96 + 108 + 89) / 3;
const barcelonaScores = (88 + 91 + 110) / 3;

console.log(manchesterSecores,  barcelonaScores)

if(manchesterSecores > barcelonaScores){
    console.log('manchester wins the trophy');
}

else if(manchesterSecores < barcelonaScores){
    console.log('barcelona wins the trophy');
}
else if(manchesterSecores === barcelonaScores){
    console.log('Its a Dsraw! Both teams ')
} 

// step 3
const manchesterSecores2 = (97 + 112 + 101) / 3;
const barcelonaScores2 = (109 + 95 + 123) / 3;
console.log(manchesterSecores2, barcelonaScores2);

if(manchesterSecores2 > barcelonaScores2 && manchesterSecores2 >= 100 ){
    console.log("manchester wins the trophy")
}
else if(barcelonaScores2 > manchesterSecores2 && barcelonaScores2 >= 100){
    console.log("barcelona wins the trophy");
} 
else if(barcelonaScores2 === barcelonaScores2 && manchesterSecores2 >= 100 && barcelonaScores2 >= 100){
    console.log("Both wins the trophy");
}
else{
    console.log("No one wins")
}






 


// ********************************* The Switch Statement ********************************

const day = "tuesday";

switch(day){
    case 'monday':
        console.log('Sit at home');
        break;
    case 'tuesday':
        console.log('Go for JavaScript Class');
        break;
    case 'wednesday':
        console.log('Go to the Gym');
        break;
    case 'thursday':
    case 'friday':
        console.log('Bake some Cake');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Write some code!');
        break;
    default:
        console.log('Don"t do anything');
}

if(day === 'monday'){
    console.log('sit at home');
 }
 else if(day === 'tuesday'){
    console.log('Go for class');
 }
 else if(day === 'wednesday'){
    console.log('Go for Javascript')
 }
 else if(day === thursday || day === 'friday'){
    console.log('Bake some cake');
 }
 else console.log('Dont do anything');



//++++++++ The Ternary operator ++++++++
 
       const bill = 275
       const tip = bill >=50 && bill <=300 ? bill * 0.15 : bill *0.2;
       console.log('The nbill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}');
       

       // ********************************* Functions ******************************************
function sayHiToDonald(){
    console.log('My name is Donald. Say Hi!');
}
// In order for the function to be used it has to be invoked / called
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
function getFriutName(item1, item2){
    const juice = `Friut Salad is made with ${item1} and ${item2}`;
    return juice;
}
const friutSalad = getFriutName('Cabbage', 'Carrot');
console.log(friutSalad);
console.log(getFriutName('Eggs', 'Milk'));
console.log(getFriutName('Paw Paw', 'Peanut'));
// ************************** Function Declearation and Function Expressions *******************************
// Function Declaration
function calculateAge(birthYear){
    return 2023 - birthYear;
}
console.log(calculateAge(1998));
// Function Expressions
// let a = b + c
const calculateAge1 = function(birthYear){
    return 2023 - birthYear;
}
console.log(calculateAge1(1989));
// ********************************* Arrow Functions ***********************************
// const calculateAge2 = birthYear => 2023 - birthYear;
// console.log(calculateAge2(1717));
// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntillRetirement(1965, 'Donald'));
// console.log(yearsUntillRetirement(2006, 'Nonso'));
// ***************************** Functions Calling other Functions ***********************
function cutFriutPieces(friutNumber){
    return friutNumber * 4;
}
function friutProcessor(item1, item2){
    const item1Pieces = cutFriutPieces(item1);
    const item2Pieces = cutFriutPieces(item2);
    const juice = `Juice is made with ${item1Pieces} pieces of Oranges and ${item2Pieces} pieces of Bananas`;
    return juice;
}
console.log(friutProcessor(3, 2));
// *************************** Reviewing Functioons *************************************
const calculateAge2 = birthYear => 2023 - birthYear;
console.log(calculateAge2(1717));
const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    }
    else{
        console.log(`${firstName} has already retires`);
        return -1;
    }
}

console.log(yearsUntillRetirement(1965, 'Donald'));
console.log(yearsUntillRetirement(1945, 'Nonso'));


/* CODING CHALLANGE 6 ~ Functions!
                            Manchester and Barcelona. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgManchester' and 'avgBarcelone'),
 and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Barcelons win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Manchester scores 44, 23 and 71. Barcelona scores 65, 54 and 49
TEST DATA 2: Manchester scores 85, 54 and 41. Barcelona scores 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
// Task 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
// Task 2
let scoreManchester = calcAverage(44, 23, 71);
let scoreBarcelona = calcAverage(65, 54, 49);
console.log(scoreManchester, scoreBarcelona);
// Task 3
const checkWinner = function (avgManchester, avgBarcelona){
    if(avgManchester >= 2 * avgBarcelona){
        console.log(`Manchester wins 🔥 (${avgManchester} vs ${avgBarcelona})`);
    }
    else if(avgBarcelona >= 2 * avgManchester){
        console.log(`Barcelona wins 🔥 (${avgBarcelona} vs ${avgManchester})`);
    }
    else{
        console.log(`Nobody won 💀`);
    }
}
// Task 4
checkWinner(scoreManchester, scoreBarcelona);
// console.log(finale);
let scoreManchesterTwo = calcAverage(85, 54, 41);
let scoreBarcelonaTwo = calcAverage(23, 34, 27);
console.log(scoreManchesterTwo, scoreBarcelonaTwo)
checkWinner(scoreManchesterTwo, scoreBarcelonaTwo);



// ************************************ Introduction to Arrays ***************************
let student1, student2, student3;
student1 = "Donald";
student2 = "Somto";
student3 = "Micheal";
// Method 1
const friends = ['Ugo', 'Prisca', 'David', 'Divine'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

friends[1] = "Donald";
console.log(friends.sort());
console.log(friends);


// Method 2
// const people = new Array('Joseph', 'Donald', 23, 81);
// console.log(people);
// console.log(people);

// More on Arrays
const findAge = function(birthYear){
    return 2023 - birthYear;
}

const years = [1990, 1965, 1914, 1945, 2000];

const age1 = findAge(years[0]);
const age2 = findAge(years[1]);
const age3 = findAge(years[years.length - 1]);

console.log(age1, age2, age3);



//***************Array Methods*******************
const newFriends = ['Ugo', 'Prisca', 'Henry', 'Divine', 'David'];


/* Add Elements
    The Push Method Appends new elements to the end of an array, and returns the new length of the array.
*/
const newLength = newFriends.push('Donald');
console.log(newFriends);
console.log(newLength);
console.log(newLength);

/* The unshift Method Inserts new elements at the start of an array, and returns the new length of the array. */
newFriends.unshift('Kels');
console.log(newFriends);


/* Removing Elements
    The pop Method Removes the last element from an array and returns it. */
newFriends.pop();
console.log(newFriends);

// Removes the first element from an array 
newFriends.shift();
console.log(newFriends);

console.log(newFriends.indexOf('Divine'));

console.log(newFriends.includes('Henry'));

if(newFriends.includes('Divine')){
    console.log('He is a Senior Dev ✨💪🏿');
}
else{
    console.log('He still de learn work 🤣');
}




/*                              Coding Challange 7 ✨
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

// Task 1
const calculateTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calculateTip(100));


// Task 2
const bills = [125, 555, 44];

// Task 3
const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];


// Task 4
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
