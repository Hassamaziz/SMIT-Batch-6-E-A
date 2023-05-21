// Program Number 1
let myVar = 5;
console.log(myVar);

// Program Number 2
let myString = 'Hello World.';
alert(myString);

// Program Number 3
let num1 = 5;
let num2 = 10;
let userNum = Number(prompt('Enter A Number'));
console.log(num1+num2+userNum);

// Program Number 4
let myBoolean = true ;
if (myBoolean == true){
    console.log('Its true');
}
else{
    console.log('its false');
}

// Program Number 5
let myNum = Number(prompt('enter number to check'));
if(myNum % 2 == 0){
    console.log('Even');
}
else{
    console.log('Odd')
}

// Program Number 6
let str1 = 'Hassam';
let str2 = 'Aziz';
console.log(str1+str2);

// Program Number 7
let no1 = 6;
let no2 = 9;
console.log(no1*no2);

// Program Number 8
let passWord = 'hassam';
let userPass = String(prompt('Enter Password'));
if(userPass == passWord){
    alert('Access Granted');
}
else{
    alert('Access Denied ');
}

// Program Number 9
let a=parseFloat(prompt('Enter First Number'));
let b=parseFloat(prompt('Enter Second Number'));
let c=parseFloat(prompt('Enter Third Number'));
if(a>=b && a>=c) 
{
    console.log(a,'is maximum');
}
else if (b>=c && b>=a) {
    console.log(b ,'is maximum');
    
} else {
    console.log(c , 'is maximum');
    
}

// Program Number 10
let Str1 = String(prompt('Enter string value'));
let Str2 = String(prompt('Enter string value'));
if(Str1.toUpperCase === Str2.toUpperCase){
    alert('Strings are equal');
}
else{
    alert('strings are not equal');
}
