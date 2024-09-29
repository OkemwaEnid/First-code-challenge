// Import readline module to take input from the user
const readline = require('readline');

// Create an interface to prompt user input in the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check speed and calculate demerit points
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;
  
  // If the speed is less than or equal to 70
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
    
    if (demeritPoints > 12) {
        console.log(`Points: ${demeritPoints}`);
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

// Prompt the user to enter the speed
rl.question("Enter the speed of the car (in km/h): ", function(input) {
  const speed = parseInt(input);

  // Check if the input is a valid number
  if (isNaN(speed) || speed < 0) {
    console.log('Please enter a valid speed.');
  } else {
    // Call the function to check speed and calculate points
    checkSpeed(speed);
  }

  // Close the readline interface
  rl.close();
});
