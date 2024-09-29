// Import readline module to take input from the user
const readline = require('readline');

// Create an interface to prompt user input in the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate grade based on marks
function calculateGrade(marks) {
  if (marks > 79) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 49 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else {
    return 'E';
  }
}

// Prompt the user to enter the marks
rl.question("Enter the student's marks (0-100): ", function(input) {
  const marks = parseInt(input);

  // Check if the input is a valid number and within the expected range
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log('Please enter a valid number between 0 and 100.');
  } else {
    // Calculate and output the grade
    const grade = calculateGrade(marks);
    console.log(`The grade for marks ${marks} is: ${grade}`);
  }

  // Close the readline interface
  rl.close();
});