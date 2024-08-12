// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "bird"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let userGuess = prompt("Welcome to hangman,please enter a letter!")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (word.includes(userGuess)) {
  console.log("\nNice Job, You guessed a letter!!!")
} else {
  console.log("\nAww letter is incorrect!!!")
}

// Prompt the user to guess the word 
userGuess = prompt("Guess a word please: ")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (word === userGuess) {
  console.log("\nNice Job, You guessed the word!!!")
} else {
  console.log("\nAww word is incorrect!!!")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
while (word !== userGuess) {
  userGuess = prompt("Try again, guess a different word")
  // In the while loop, copy the prompt and if/else check for a letter
  if (word === userGuess) {
    console.log("\nNice Job, You guessed the word!!!")
  } else {
    console.log("\nAww word is incorrect!!!")
    attempts++
  }
}

// After the while loop, print "It took (attempts) attempts"
console.log("\n\nIt took", attempts, "attempts")