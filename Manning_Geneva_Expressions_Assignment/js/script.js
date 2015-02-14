/**
 * Geneva Manning
 * 02/13/2015
 * Assignment: Expression Assignment
 */
//This program will keep track of the hours you work each day, when you enter the hours you work daily. You will be able to keep
//track of the total hours worked, regular and overtime.You will also know your pay for regular and overtime.

//Declare and define variables


var payRate;//I am declaring the variable payRate.
payRate = prompt("What is your pay rate by the hour");//I am defining the variable payRate.

hoursPerDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];//This is my array collecting information.
hoursPerDay[0] = prompt('How many hours did you work on Sunday?');// Prompting user for information of hours worked on Sunday.
hoursPerDay[1] = prompt('How many hours did you work on Monday?');//Prompting user for information of hours worked on Monday.
hoursPerDay[2] = prompt('How many hours did you work on Tuesday?');//Prompting user for information of hours worked on Tuesday.
hoursPerDay[3] = prompt('How many hours did you work on Wednesday?');////Prompting user for information of hours worked on Wednesday.
hoursPerDay[4] = prompt('How many hours did you work on Thursday?');//Prompting user for information of hours worked on Thursday.
hoursPerDay[5] = prompt('How many hours did you work on Friday?');//Prompting user for information of hours worked on Friday.
hoursPerDay[6] = prompt('How many hours did you work on Saturday?');////Prompting user for information of hours worked on Saturday.

var totalHoursWorked = parseInt(hoursPerDay[0]) + parseInt(hoursPerDay[1]) + parseInt(hoursPerDay[2]) + parseInt(hoursPerDay[3]) + parseInt(hoursPerDay[4]) + parseInt(hoursPerDay[5]) + parseInt(hoursPerDay[6]);// Calculating total hours worked through the week.
alert(totalHoursWorked);// This calculate the total hours worked for the week.

var regularHoursWorked;//This is for calculating the regular hours worked.
regularHoursWorked = prompt("How many regular hours did you work?");// this prompts user for information on how many regular hours they worked.
var overtimeHoursWorked;// this is for calculating overtime worked.
overtimeHoursWorked = totalHoursWorked - 40;//this is how overtime is calculated.

var regularPay;//this information holds the regular pay.
regularPay = payRate * regularHoursWorked;//this calculate the regular pay.
var overtimePay;//this is the storage to hold overtime pay
overtimePay = regularPay + (regularPay / 2);//this is the calculation of overtime pay
var totalPay;//this is the storage that holds total pay
totalPay = regularPay + overtimePay;//this is the calculation of total pay
result =("You have worked a total of " + totalHoursWorked + " hours, " + regularHoursWorked + " regular hours and " +
overtimeHoursWorked + " overtime hours.  " + " Your regular pay is $" + regularPay + " and your overtime pay is $" + overtimePay +
", which gives you a total pay of $" + totalPay + ".");// this is the output that the user see's as the result after putting in information at the prompts

var result;//declaring the variable result
alert(result);//this is an alert box that the users sees
console.log(result);//this is logged into the console

//I tested the program and for my payrate I said $9.50 and I put in the values of Sun 16 hrs, Mon 8 hrs, Tues 10 hrs, Wedne 8 hrs, Thurs 16 hrs, Frid 8 hrs, and Sat 0 hrs.
//This calculated to 66 hrs a week. The result said You have worked a total of 66 hours, 40 regular hours and 26 overtime hours.   Your regular pay is $380 and your overtime pay is $570, which gives you a total pay of $950.





