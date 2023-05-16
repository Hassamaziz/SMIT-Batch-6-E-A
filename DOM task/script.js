// console.log(document);

//  console.log(document.getElementById('heading1'));

//  console.log(document.getElementsByClassName("headings"));

// let heading = document.getElementsByClassName("headings");

//  heading[0].style.color = "red";

// Select the button element
const button = document.getElementById('myButton');

// Attach an event listener to the button for 'click' event
button.addEventListener('click', function(event) {
  // Code to execute when the button is clicked
  let heading =  document.getElementsByClassName("headings");
  heading[0].style.color = "red";
  heading[1].style.backgroundColor = "purple";
  // You can access the event object and the event target
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});
