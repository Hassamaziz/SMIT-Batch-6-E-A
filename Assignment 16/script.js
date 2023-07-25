// 1- Practice exercise 13.1

// function greet(fullname) {
//     console.log(`Hello! ${fullname[0]} ${fullname[1]}.` );

// }

// function other(name,callback) {
//     fullname = name.split(" ")

//     callback(fullname);

// }
// other("Hassam Aziz",greet )

// 2- Practice exercise 13.2

// let promise = new Promise((resolve) => {
//     resolve('Start Counting......');
//   });

//   function counter(value) {
//     console.log(value);
//   }

//   promise
//     .then((value) => {
//       counter(value);
//       return 'One';
//     })
//     .then((value) => {
//       counter(value);
//       return 'Two';
//     })
//     .then((value) => {
//       counter(value);
//       return 'Three';
//     })
//     .then((value) => {
//       counter(value);
//     });

// 3- Practice exercise 13.3

// var counter = 0;

// function simpleFunc(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       counter++;
//       resolve(`x value ${x} counter:${counter}`);
//     }, 1000*x );
//   });
// }

// async function asyncFunc(x) {
//   console.log(`ready ${x} counter:${counter}`);
//   var capture = await simpleFunc(x);
//   console.log(capture);
// }

// for (let index = 1; index <= 10; index++) {
//   asyncFunc(index);
// }

// Password checker

const allowedPasswords = ["hassam", "aziz"];

function login(password) {
  return allowedPasswords.includes(password);
}

function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (login(password)) {
      resolve({ status: true });
    } else {
      reject({ status: false });
    }
  });
}

function passwordChecker() {
  const passwordInput = document.getElementById("password-input");
  const accessIcon = document.getElementById("access-icon");
  const accessText = document.getElementById("access-text");

  const password = passwordInput.value;

  checkPassword(password)
    .then((result) => {
      accessIcon.className = "fas fa-check-circle";
      accessText.innerHTML = "Access Granted";
      accessText.style.color = "green";
    })
    .catch((error) => {
      accessIcon.className = "fas fa-times-circle";
      accessText.innerHTML = "Access Denied";
      accessText.style.color = "red";
    });
}
