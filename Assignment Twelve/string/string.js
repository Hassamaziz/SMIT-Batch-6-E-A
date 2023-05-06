// String Handling

// // Program 1
// let Str=`hassam`;
// let length= Str.length;
// console.log(`length of string is`);
//  console.log(length);

// //  Program 2

// const originalString = 'Hello, world!';
// const copiedString = originalString;
// console.log(copiedString);

// // // Program 3

// let str1 = `hassam`;
// let str2 = `aziz`;

// let str3 = str1.concat(str2);

// console.log(`first string = ${str1} 
// second string = ${str2}
// After concatination`);
// console.log(str3);

// // Program 4
// const string1 = 'hassam';
// const string2 = 'aziz';
// if (string1 === string2) {
//   console.log('The strings are equal.');
// } else {
//   console.log('The strings are not equal.');
// }

// // Program 5
// let string1= `hassam`;

// let Touppercase = string1.toUpperCase()
// console.log(Touppercase);

// // program 6
// let string1= `HASSAM`;

// let tolowerCase = string1.toLowerCase()
// console.log(tolowerCase);

// // // Program 7
// const originalString = 'hello, WORLD!';
// const toggledString = originalString.split('').map(char => {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join('');
// console.log(toggledString);

// // // Program 8

// const inputString = 'Hassam.Aziz@79865!';
// let alphas = 0;
// let digits = 0;
// let specialChars = 0;
// for (let i = 0; i < inputString.length; i++) {
//   const char = inputString[i];
//   if (/[a-z]/i.test(char)) {
//     alphas++;
//   } else if (/[0-9]/.test(char)) {
//     digits++;
//   } else {
//     specialChars++;
//   }
// }
// console.log(`Alphabets: ${alphas}`);
// console.log(`Digits: ${digits}`);
// console.log(`Special characters: ${specialChars}`);


// // Program 9

// function countVowelsConsonants(str) {
//     let vowels = 0;
//     let consonants = 0;
//     const regex = /[aeiou]/gi; 
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i].toLowerCase(); 
//       if (char.match(regex)) {
//         vowels++;
//       } else if (char.match(/[a-z]/i)) { 
//         consonants++;
//       }
//     }
//     return { vowels, consonants };
//   }
  
//   const inputStr = "hassam aziz";
//   const result = countVowelsConsonants(inputStr);
//   console.log(`Vowels: ${result.vowels}`);
//   console.log(`Consonants: ${result.consonants}`);
  

// // Program 10

// function countWords(str) {
//     const words = str.split(' '); 
//     return words.length;
//   }
//   const inputStr = "My name is Hassam aziz.";
//   const result = countWords(inputStr);
//   console.log(`Number of words: ${result}`);
  
// // Program 11

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
//       const inputStr = "hassam aziz";
//   const result = reverseString(inputStr);
//   console.log(`Reverse of "${inputStr}": ${result}`);
  

// // Program 12

// function reverseString(str) {
//    let rev= str.split('').reverse().join('');

//    if (rev === str) {
// console.log(`word is in pallindrome`);
    
//    }
//    else{
//     console.log(`word is not in pallindrome`);
//    }
//   }
//       const inputStr = "non";
//   const result = reverseString(inputStr);
  
  
// // program 13

// function reverseWords(str) {
//     const words = str.split(' ');
//     const reversedWords = words.reverse(); 
//     return reversedWords.join(' '); 
//   }
  
//   const inputStr = "My name is hassam aziz";
//   const result = reverseWords(inputStr);
//   console.log(`Reverse of "${inputStr}":
//    ${result}`);
  

// // Program 14

// function firstOccur(str) {
//     let m = prompt(`which alphabet you want.`);
//     let first =1 + str.indexOf(m);
//     console.log(`First occurence of ${m} in ${str} is at ${first} `);
    
// }
// firstOccur('hassam');

// // Program 15

// function lastOccur(str) {
//     let m = prompt(`which alphabet you want.`);
//     let last =1 + str.lastIndexOf(m);
//     console.log(`Last occurence of ${m} in ${str} is at ${last} `);
    
// }
// lastOccur('hassam aziz');


// // Program 16

// function searchChar(str, char) {
//     const occurrences = [];
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         occurrences.push(i);
//       }
//     }
//     return occurrences;
//   }
//   const inputStr = "Hello! My name is Hassam Aziz.";
//   const chara = prompt(` which alphabet do you want to see.`)
//   const result = searchChar(inputStr, chara  );
//   console.log(`Occurrences of "${chara}" in "${inputStr}": ${result}`);
  

// // Program 17

// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// let str = prompt(`Enter the phrase.`);
// let char = prompt(`Enter the alphabet you want to count:`);
// console.log(countOccurrences(str,char)); 

// // Program 21

// function removeFirstChar(str, char) {
//   return str.replace(char, '');
// }

// console.log(removeFirstChar("hassam aziz", "s"));

// // Program 22
// function removeLastChar(str, char) {
//   let index = str.lastIndexOf(char);
//   if (index !== -1) {
//     return str.slice(0, index) + str.slice(index + 1);
//   }
//   return str;
// }

// // Example usage
// console.log(removeLastChar("hassam aziz", "a")); 

// // Program 23

// function removeAllChar(str, char) {
//   return str.split(char).join('');
// }

// console.log(removeAllChar("hassam aziz", "s")); 


// // Program 24

// function removeRepeatedChars(str) {
//   let newStr = '';
//   for(let i = 0; i < str.length; i++) {
//     if(newStr.indexOf(str[i]) === -1) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(removeRepeatedChars('hassam aziz')); 
 




