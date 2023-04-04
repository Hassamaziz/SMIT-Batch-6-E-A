// Assignment Ten Javascript Programs











//   Functions

// //  program 1


// function cube(cubeNum) {
//     const total = cubeNum*cubeNum*cubeNum;
//     return total;

// };
// console.log(cube(25));

// // program 2


// function calculateDiameter(radius) {
//     return 2 * radius;
//   }

//   function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }

//   function calculateArea(radius) {
//     return Math.PI * radius*radius;
//   }

//   var radius = 52;
//   var diameter = calculateDiameter(radius);
//   var circumference = calculateCircumference(radius);
//   var area = calculateArea(radius);

//   console.log("Diameter: " + diameter);
//   console.log("Circumference: " + circumference);
//   console.log("Area: " + area);

// // Program 3


// function findMaximum(a, b) {
//   return Math.max(a, b);

// }

// function findMinimum(a, b) {
//   return Math.min(a, b);

// }
// var num1 = 100;
// var num2 = 120;
// var maximum = findMaximum(num1, num2);
// var minimum = findMinimum(num1, num2);


// console.log("Maximum: " + maximum);
// console.log("Minimum: " + minimum);

// // Program 4


// // Write a js program to check whether a number is even or odd using functions

// function oddOReven(num) {
//     if (num%2==0) {
//         console.log(num ,'is even');
        
//     }
//     else
//     console.log(num ,'is odd');
// }

// oddOReven(76);



// // Program 6

// // Write a js program to find all prime numbers between given interval using functions
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   function findPrime(start, end) {
//     const primes = [];
//     for (let i = start; i <= end; i++) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//     }
//     return primes;
//   }
//   const start = 1;
//   const end = 35;
//   const primes = findPrime(start, end);
//   console.log(`The prime numbers between ${start} and ${end} are: ${primes.join(', ')}`);
  
// // Program 10

// // Function to calculate power of a number

// function calculatePower(base, exponent) {

//   let result= Math.pow(base,exponent);
//     return result;
//   }
  
//   console.log(calculatePower(2,5));
  
// //   Program 11


// function getNatNum(n) {
//     for (let i = 1; i <= n; i++) {
//       console.log(i);
//     }
//   }
  
//   // Sample usage
//   const n = 50;
//   console.log(`Natural numbers between 1 and ${n}:`);
//   getNatNum(n);
  

// // Program 12

// // Function to print even or odd numbers in a range
// const start=1
// const end = 10;
// function isEven(start,end) {
    
//     for (let index = start; index <= end; index++)
//     {
//         if (index % 2==0) {

//             console.log(index);
//         }   
//     } 
// }
// console.log(`list of even numbers from ${start} to ${end} is`);
// isEven(start,end); 

// function isOdd(start,end) {
    
//     for (let index = start; index <= end; index++)
//     {
//         if (index % 2!=0) {

//             console.log(index);
//         }   
//     } 
// }
// console.log(`list of odd numbers from ${start} to ${end} is`);
// isOdd(start,end);


// // Program 13


// function getsumNatNum(n) {
//     let result=0;
//     for (let i = 1; i <= n; i++) {
//       result += i;
     
//     }
//     return result;
//   } 
  
//   // Sample usage
//   const n = 50;
//   const result=getsumNatNum(n);
//   console.log(`sum of  Natural numbers between 1 and ${n}: ${result}`);
  
  
// // Program 14


// // Function to print even or odd numbers in a range
// const start=1
// const end = 10;
// function isEven(start,end) {
//     let sumeven=0;
//     for (let index = start; index <= end; index++)
//     {
//         if (index % 2==0) {

//             console.log(index);
//             sumeven+=index;
//         }   
//     } 
//     return sumeven;
// }

// const sumeven=isEven(start,end);
// console.log(`And their sum is ${sumeven}`);



// function isOdd(start,end) {
//    let sumodd=0;
//     for (let index = start; index <= end; index++)
//     {
//         if (index % 2!=0) {

//             console.log(index);
//             sumodd+=index;
//         }   
//     } 
//     return sumodd;
// }
// const sumodd=isOdd(start,end);
// console.log(`And their sum is ${sumodd}`);

// // Program 15
// // Write a js program to find reverse of any number using function.

// function reverseNumber(num) {
//     const strNum = num.toString();
//     const reversedString = strNum.split('').reverse().join('');
//     const reversedNum = parseInt(reversedString);
//     return reversedNum;
//   }
//   let num1=95601;
//   let num2=2134256;
//   console.log(`Reversed Value of ${num1} `);
//   console.log(reverseNumber(num1));
//   console.log(`Reversed Value of ${num2}`);
//   console.log(reverseNumber(2134256)); 
  

// // Program 16
// // Palindrome number

// function Palindrome(num) {
//     const strNum = num.toString();
//     const reversedString = strNum.split('').reverse().join('');
//     let reversedNum = parseInt(reversedString);
    
//     if (reversedNum==num) {
//         console.log(`${num} is in palindrome`);
//     }
//     else
//     console.log(`${num} is not in palindrome`);
//   }
//   Palindrome(1441);
//   Palindrome(2525);

// // Program 17
// // Write a javascript program to find sum of digits of a given number using function.

// function sumOfDigit(num) {
//     const strNum = num.toString();
//     let sum = 0;

//     for (let i = 0; i < strNum.length; i++) {
//       sum += Number(strNum[i]);
//     }
//     return sum;
//   }
  
//   console.log(`Sum of digits of 1234 is ${sumOfDigit(1234)}`); 
//   console.log(`Sum of digits of 987654321 is ${sumOfDigit(987654321)}`); 
//   console.log(`Sum of digits of 2002 is ${sumOfDigit(2002)}`);
  
// // Program 18

// function factorialOFnum(num) {
    
//     let fact = 1;

//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     return fact;
//   }
//   console.log(`Factorial of 5 is ${factorialOFnum(5)}`);


// //Program 19 

// function fibonacci(num) {
//     let fnum=0;
//     let snum=1;
//     let thirdval;
//     console.log(fnum);
//         console.log(snum);
//     for (let index = 0; index < num  ; index++) {
        
//         thirdval=fnum+snum;       
//         console.log(thirdval);
//         fnum=snum;                
//         snum=thirdval;            
//     }
// }
// console.log(`Fibonacci Series:`);
// fibonacci(5);
  

// // Program 20

// function getGCD(a, b) {
    
//     if (a < b) {
//       [a, b] = [b, a];
//     }
//     while (b !== 0) {
//       let remainder = a % b;
//       a = b;
//       b = remainder;
//     }
//     return a;
//   }
// let num1=58;
// let num2=96;

// console.log(`GCD of ${num1} and ${num2} is ${getGCD(num1, num2)}`);

  


// // Program 21

// function getGCD(a, b) {
//     if (a < b) {
//       [a, b] = [b, a];
//     }
//     while (b !== 0) {
//       let remainder = a % b;
//       a = b;
//       b = remainder;
//     }
//     return a;
//   }
//   function getLCM(a,b) {
//     let gcd = getGCD(a,b);
//     let lcm= (a*b) / gcd;

//     console.log(`LCM of ${a} and ${b} is `,lcm);

//   }

//  getLCM(96,76)


// // Program 22

// function arrayWholeprint() {
  
// }
// const array=[9,8,7,6,5,4,3,2,1];
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
  
// }

// // Program 23

// function arrayWholesum(array) {
  

// let sum=0;
// for (let i = 0; i < array.length; i++) {

//   sum += array[i];
// }
// return sum;
// }
// let array=[10,20,1,6,4,7,8,3,45,67];
// console.log(`Sum of array is`);
// console.log(arrayWholesum(array));


// // Program 24

// function findMaxMinValues(array) {
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return [max, min];
// }
// let array = [23,56,76,9,100,600];
// let [max, min] = findMaxMinValues(array);
// console.log("Max value: " , max); 
// console.log("Min value: " , min); 
