                //  Array Handling

// // Program 1

// let arr = [1,3,5,7,11];
// console.log(`Contents of array are`)
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }


// // Program 2

// const arr = [-2, 4, -7, 8, -1, 0, -3];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < 0) {
//     console.log(arr[i]);
//   }
// }

// // Program 3

// let arr = [1,3,5,7,11];

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {

//     sum =sum + arr[index];
   
    
// }
// console.log(`the sum of all elements in array is ${sum}`);

// 


// // Program 4

// const arr = [12,45,32,675,1,66,876,0];

// let max = arr[0];
// let min = arr[0];

// for(let i = 1; i < arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i];
//   }
//   if(arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log('Maximum element:', max);
// console.log('Minimum element:', min);

// // Program 5

// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];
//       }
//     }
    
//     return secondLargest;
//   }
//   const arr = [10,32,44,1,65,45,98];
//   const secondLargest = findSecondLargest(arr);
//   console.log( `second largest value is `+ secondLargest); 
  
// // Program 6

// function countEvenAndOdd(arr) {
//     let even = 0;
//     let odd = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         even++;
//       } else {
//         odd++;
//       }
//     }
//     return { even: even, odd: odd };
//   }
  
//   const arr = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];
//   const counts = countEvenAndOdd(arr);
//   console.log(counts); 
  

    // // Program 7

    // function countNegs(arr) {
    //     let count = 0;
    
    //     for (let i = 0; i < arr.length; i++) {
    //       if (arr[i] < 0) {
    //         count++;
    //       }
    //     }
    
    //     return count;
    //   }
    //   const arr = [-15,14,-20,-45,17,-34];
    //   const negativeCount = countNegs(arr);
    //   console.log(negativeCount); 
    
// // Program 8

// function copyArray(arr) {
//     const copy = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       copy.push(arr[i]);
//     }
  
//     return copy;
//   }

//   const arr1 = [1,3,5,7,11,13,17];
//   const arr2 = copyArray(arr1);
//   console.log(arr2); 
  

// // Program 9

// function insertElement(arr, element, index) {
//     arr.splice(index, 0, element);
//     return arr;
//   }
  
//   const arr = [1,3,5,7,11,];
//   const newArr = insertElement(arr, 12, 2);
//   console.log(newArr); 
  

// // Program 10

// function deleteElement(arr, index) {
//     arr.splice(index, 1);
//     return arr;
//   }


//   const arr = [9,8,7,6,5,4,3,2,1];
//   console.log(`array before deletion`);
//   console.log(arr);
//   const newArr = deleteElement(arr, 4);
//   console.log(`Array after deletion`);
//   console.log(newArr); 
  

// // Program 13


// function countDuplicateElements(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//       if(arr.indexOf(arr[i]) !== i && arr.lastIndexOf(arr[i]) === i) {
//         count++;
//       }
//     }
//     console.log("Total number of duplicate elements in the array: " + count);
//   }
  
//   let arr = [1, 2, 3, 4, 5, 1, 3, 6, 6, 7, 7, 8, 8];
//   countDuplicateElements(arr);
  
// // Program 14 

// function deleteDuplicateElements(arr) {
//     let uniqueArr = [];
//     for(let i = 0; i < arr.length; i++) {
//       if(uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i]);
//       }
//     }
//     return uniqueArr;
//   }
  
//   let arr = [ 1,1,2,2,3,3,4,4];
//   let uniqueArr = deleteDuplicateElements(arr);
//   console.log("Array with duplicate elements removed: " + uniqueArr);
  
