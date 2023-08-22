// first import the readline module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,    // process User input
  output: process.stdout   // process output data
});

// Display game instructions
console.log("Welcome to the guessing game!");
console.log("In this game, you are prompted to give any number between 1 and 10.");
console.log("If you are correct, you win. If you are wrong, you get only three attempts.");
console.log("After the third attempt, you are automatically logged out.\n");

// Collect User Input
rl.question("Please enter your name: ", (name) => {
  console.log(`Hello, ${name}!\n`);
  console.log('please do well to read the instructions above');

  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 3;

  // Implement the guessing game
  const askForGuess = () => {
    rl.question("Guess a number between 1 and 10: ", (guess) => {
      const parsedGuess = parseInt(guess);

      // conditions for the game
      if (parsedGuess === randomNumber ){
        console.log(`congratulations, ${name}!! you guessed the right number.`)
        // end of game
        rl.close();

      } else {
        attempts--;
        if (attempts > 0) {
          if (parsedGuess > randomNumber){
            console.log(`Wrong guess, ${name}! The number is lower than your guess. You have ${attempts} attempt(s) left.`);
          } else {
            console.log(`Wrong guess, ${name}! The number is higher than your guess. You have ${attempts} attempt(s) left.`);
          }
          askForGuess();
        } else {
          console.log(`Sorry, ${name}. You've used all your attempts. The right number was ${randomNumber}.`);
          // end of game
          rl.close();
        }
          

      }

  
    });
     
  };
  // Start the guessing game
  askForGuess(); 

})
