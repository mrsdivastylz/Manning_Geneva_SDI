alert("test");
/**
 * Geneva Manning
 * 02/13/2015
 * Assignment: Expression Assignment
 */
//This program will keep track of the hours you work each day, when you enter the hours you work daily. You will be able to keep
//track of the total hours worked, regular and overtime.You will also know your pay for regular and overtime.

//Declare and define variables


var payRate;
payRate = prompt("What is your pay rate by the hour");

var hoursPerDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
hoursPerDay[0] = prompt('How many hours did you work on Sunday?');
hoursPerDay[1] = prompt('How many hours did you work on Monday?');
hoursPerDay[2] = prompt('How many hours did you work on Tuesday?');
hoursPerDay[3] = prompt('How many hours did you work on Wednesday?');
hoursPerDay[4] = prompt('How many hours did you work on Thursday?');
hoursPerDay[5] = prompt('How many hours did you work on Friday?');
hoursPerDay[6] = prompt('How many hours did you work on Saturday?');

var totalHoursWorked = parseInt(hoursPerDay[0]) + parseInt(hoursPerDay[1]) + parseInt(hoursPerDay[2]) + parseInt(hoursPerDay[3]) + parseInt(hoursPerDay[4]) + parseInt(hoursPerDay[5]) + parseInt(hoursPerDay[6]);
alert(totalHoursWorked);

var regularHoursWorked;
regularHoursWorked = prompt("How many regular hours did you work?");
var overtimeHoursWorked;
overtimeHoursWorked = totalHoursWorked - 40;


var regularPay;
regularPay = payRate * regularHoursWorked;
var overtimePay;
overtimePay = regularPay + (regularPay / 2);
var totalPay;
totalPay = regularPay + overtimePay;
result =("You have worked a total of " + totalHoursWorked + " hours, " + regularHoursWorked + " regular hours and " +
overtimeHoursWorked + " overtime hours.  " + " Your regular pay is " + regularPay + " and your overtime pay is " + overtimePay +
", which gives you a total pay of " + totalPay + ".");

var result;
alert(result);
console.log(result);





