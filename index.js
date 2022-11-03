// Let's start by getting the user's input that can rock, paper, or scissors
// We can set the user input to be case insensitive so that Rock, rock, or
// ROCK all return user input

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || 
    userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid input, try again!');
    }
}

// Secondly, let's get the computer's input
// We use random numbers between 0 and 3 to get a random input from the comp
// We then swith between the numbers, assigning each an input of rock, paper, 
// or scissors

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// Next, we can compare the two choices and determine the winner
// For ease, we can compare the two choices with the user as the point
// of reference

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'You chose rock. The computer chose paper. Paper covers rock, so the computer won!';
        } else {
            return 'You chose rock. The computer chose scissors. Rock crashes scissors, so you won!';
        }
    }

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'You chose paper. The computer chose scissors. Scissors cut paper, so the computer won!';
        } else {
            return 'You chose paper. The computer chose rock. Paper covers rock, so you won!';
        }
    }

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'You chose scissors. The computer chose rock. Rock crashes scissors, so the computer won!';
        } else {
            return 'You chose scissors. The computer chose paper. Scissors cut paper, so you won!';
        }
    }
}

// Now it's time to play the game

const playGame = () => {
    const userChoice = getUserChoice('rock');
    console.log(`Your choice: ${userChoice}`);

    const computerChoice = getComputerChoice();
    console.log(`The Computer's choice: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}

// Call the playGame function to play the game on the console

playGame();