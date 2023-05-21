// Date Handling

// // Program 1

// function isDate(input) {
//     return Object.prototype.toString.call(input) === '[object Date]';
//   }
  
// console.log(isDate(new Date(86400000)));
// console.log(isDate("October 13, 2014 11:13:00"));  

// // Program 2

// function curday(sep) {
//     let sepa = sep;

// const date = new Date();
// const year = date.getFullYear();
// const month =String(date.getMonth() +1);
// const day = String(date.getDate());
// return ` ${month}${sepa}${day}${sepa}${year}`;
// }

// console.log(curday('-'));
// console.log(curday('/'));

// // Program 3

// function getDaysInMonth(month, year) {
//     return new Date(year, month ,0).getDate();
//   }
  
//   console.log(getDaysInMonth(1, 2023)); 
//   console.log(getDaysInMonth(2, 2023)); 
//   console.log(getDaysInMonth(3, 2023)); 
//   console.log(getDaysInMonth(4, 2023)); 
  

// // Program 4
// function findMonth(date) {
//     const months = [
//       "January", "February", "March", "April", "May", "June", 
//       "July", "August", "September", "October", "November", "December"
//     ];
//     return months[date.getMonth()];
//   }
//   console.log(findMonth(new Date("10/11/2009")));
//   console.log(findMonth(new Date("11/13/2014"))); 
//   console.log(findMonth(new Date("7/16/2002"))); 
  

// // Program 7
// function isWeekend(date) {
//     const day = date.getDay();
//     return day === 0 || day === 6;
//   }
  
//   console.log(isWeekend(new Date("04/02/2023"))); // true (Sunday)
//   console.log(isWeekend(new Date("04/01/2023"))); // true (Saturday)
//   console.log(isWeekend(new Date("04/05/2023"))); // false (Tuesday)
  

// // Program 9
// function callLastDay(year, month) {
//     return new Date(year, month + 1, 0).getDate();
//   }
//   console.log(callLastDay(2014,0));

// console.log(callLastDay(2014,1));

// console.log(callLastDay(2014,11));

// console.log(callLastDay(2023,3));
  

// // Program 13
// function timeInhourandmin(mins) {
//     const hours = Math.floor(mins/ 60);
//     const remainingMinutes = mins % 60;
//     return `${mins} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
//   }
// console.log(timeInhourandmin(300)); 
// console.log(timeInhourandmin(200));

// // Program 14
// function daysOfYear(year) {
//     const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     return isLeapYear ? 366 : 365;
//   }
// console.log(daysOfYear(2020));  
// console.log(daysOfYear(2021));  


// // Program 52
// function getMonthStartDate(date) {
//     return new Date(date.getFullYear(), date.getMonth(), 1);
//   }
//   const today = new Date();
//   const monthStartDate = getMonthStartDate(today);
//   console.log(monthStartDate); 
    