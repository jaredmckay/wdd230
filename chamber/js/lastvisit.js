// Load the local storage and set the element variable
const lastVisit = localStorage.getItem('lastVisit');
const msgDisp = document.querySelector('.msgDisp');

// converts milliseconds to single day
const DAY = 1000 * 60 * 60 * 24;

// Calculate today and last visit day to the day
let lastDay = Math.trunc(lastVisit / DAY);
let today = Math.trunc(Date.now() / DAY);

let daysSinceVisit = today - lastDay;


// Display welcome message based on last visit day
if (lastVisit == null){
    msgDisp.innerHTML = "Welcome to the the Lakeland chamber discovery, Hope you enjoy!";

} else {
    msgDisp.innerHTML = `Welcome Back! It's been ${daysSinceVisit} days since you last visited.`;
}

localStorage.setItem('lastVisit', Date.now());
