/**
 * Geneva Manning
 * 02/09/2015
 * Assignment: Expression Worksheet
 * example
 */

//Problem Dog Years
//Conversion from Sparky human years to dog years

//First declare variables
var sparkyAge;
var dogYears;
var result;
//define the variables
sparkyAge = prompt("How old is Sparky in human years?"); //This is the prompt that asks users how old Sparky is in human years.
dogYears = sparkyAge * 7; // This is how the expression is calculated to answer how old Sparky is in dog years
result = ("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years."); //This is the results from calculation from human years to dog years.
alert(result); //This is the calculation of what the user sees on their screen.
console.log(result); //This is what is logged into the console
// I said the sparky was 3 human years old and the calculation said he was 21 years old in dog years.

// Problem Slice of Pie Pt 1
//Calculating total slices of pie between people at a party

//Declaring the variables

var slicesPerPizza;
var peopleAtParty;
var pizzasOrdered;
var pizzaPerPerson;
var result;

//Defining the variables
slicesPerPizza = prompt("How many slices per pizza?"); //This is the prompt that the users see to answer the question.
peopleAtParty = prompt("How many people at party?"); //This is the prompt that users see to answer the question.
pizzasOrdered = prompt("How many pizzas was ordered?"); //This is the prompt that asks users how many pizzas was ordered.
pizzaPerPerson = slicesPerPizza * pizzasOrdered / peopleAtParty; //This is how the expression is calculated.
result = ("Each person ate " + pizzaPerPerson + " slices of pizza at the party"); //This is the result from the variables.
alert(result);//This is the result to the solution and this is what the user sees.
console.log(result);//This is what is logged into the console.
//In my calculation I used 10 slices of pia, with 12 people at the party and 3 boxes of pizza was ordered, the computer says that each person ate 2.5 slices of pizza at the party.


//Slice of Pie Pt 2
//Calculating how many slices of pizza the dog Sparky get.

//Declaring Variables

var slicesPerPizza; //This represent how many slices of pizzas there are.
var peopleAtParty; //This represent how many people are at the party.
var pizzasOrdered; //This tells us how many pizzas were ordered.
var pizzaPerPerson; //This lets us know how many slices each person gets.
var result; // This gives us the results to how many slices of pizza Sparky the dog gets.
//Defining the variables
slicesPerPizza = prompt("How many slices per pizza?"); //This prompts the user to put in information about how many slices per pizza is in a box.
peopleAtParty = prompt("How many people art at the party?"); //This prompt the user to put in information about how many people is at the party.
pizzasOrdered = prompt("How many pizzas was ordered?"); //This prompt the user to put in information about how many pizzas was ordered.
pizzaPerPerson = (slicesPerPizza * pizzasOrdered)  -  (peopleAtParty * 2); //This results show how many of slices Sparky will get.
result = ("Sparky got " + pizzaPerPerson + " slices of pizza."); //Calculation of how many slices Sparky gets.
alert(result); //This is the result to the solution and this is what the user sees.
console.log(result); //The result get logged into the console.
//In my calculation I used 10 slices per pizza, with 12 people at the party, and 3 pizzas ordered and that gave everyone 2 slices of pizza and Sparky had 6 left over.


//Average Shopping Bill
//Calculating the average of a weekly grocery shopping spending over 5 weeks.

var groceryShopping = [170, 120, 145, 130, 128];
var total = groceryShopping[0] + groceryShopping[1] + groceryShopping[2] groceryShopping[3] groceryShopping[4];
alert(total);