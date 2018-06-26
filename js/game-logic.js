// All code should be written in this file.

// Define valid inputs
const validPlayers = ['Player One', 'Player Two'];
const validMoveTypes = ['rock', 'paper', 'scissors'];

// Initialize global move type and value variables
let playerOneMoveOneType,
  playerOneMoveOneValue,
  playerOneMoveTwoType,
  playerOneMoveTwoValue,
  playerOneMoveThreeType,
  playerOneMoveThreeValue,
  playerTwoMoveOneType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoType,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeType,
  playerTwoMoveThreeValue = undefined;

// Check if player input is valid
function validatePlayer(player) {
  return validPlayers.includes(String(player));
}

// Check if move type inputs are valid
function validateMoveTypes(moveOneType, moveTwoType, moveThreeType) {
  return validMoveTypes.includes(moveOneType)
  && validMoveTypes.includes(moveTwoType)
  && validMoveTypes.includes(moveThreeType);
}

// Check if move value inputs are valid
function validateMoveValues(moveOneValue, moveTwoValue, moveThreeValue) {
  return moveOneValue >= 1
    && moveOneValue <= 99
    && moveTwoValue >= 1
    && moveTwoValue <= 99
    && moveThreeValue >= 1
    && moveThreeValue <= 99
    && moveOneValue + moveTwoValue + moveThreeValue <= 99;
}

// Set moves for player one
function setPlayerOneMoves(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  playerOneMoveOneType = moveOneType;
  playerOneMoveOneValue = moveOneValue;

  playerOneMoveTwoType = moveTwoType;
  playerOneMoveTwoValue = moveTwoValue;

  playerOneMoveThreeType = moveThreeType;
  playerOneMoveThreeValue = moveThreeValue;
}

// Set moves for player two
function setPlayerTwoMoves(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  playerTwoMoveOneType = moveOneType;
  playerTwoMoveOneValue = moveOneValue;

  playerTwoMoveTwoType = moveTwoType;
  playerTwoMoveTwoValue = moveTwoValue;

  playerTwoMoveThreeType = moveThreeType;
  playerTwoMoveThreeValue = moveThreeValue;
}

// Set values for the move and type variables
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  const [firstMoveType, secondMoveType, thirdMoveType] = [String(moveOneType).toLowerCase(),
    String(moveTwoType).toLowerCase(),
    String(moveThreeType).toLowerCase()];

  if (validatePlayer(player)
  && validateMoveTypes(firstMoveType, secondMoveType, thirdMoveType)
  && validateMoveValues(moveOneValue, moveTwoValue, moveThreeValue)) {

    if (String(player) === 'Player One') {
      setPlayerOneMoves(firstMoveType, moveOneValue, secondMoveType, moveTwoValue, thirdMoveType, moveThreeValue);
    } else {
      setPlayerTwoMoves(firstMoveType, moveOneValue, secondMoveType, moveTwoValue, thirdMoveType, moveThreeValue);
    }
  }
}

// Initialize shorthand variables
let playerOneType, playerOneValue, playerTwoType, playerTwoValue = undefined;

function setShorthandVariables(roundNumber) {
  if (roundNumber === 1) {
    [playerOneType, playerOneValue] = [playerOneMoveOneType, playerOneMoveOneValue];
    [playerTwoType, playerTwoValue] = [playerTwoMoveOneType, playerTwoMoveOneValue];
  } else if (roundNumber === 2) {
    [playerOneType, playerOneValue] = [playerOneMoveTwoType, playerOneMoveTwoValue];
    [playerTwoType, playerTwoValue] = [playerTwoMoveTwoType, playerTwoMoveTwoValue];
  } else if (roundNumber === 3) {
    [playerOneType, playerOneValue] = [playerOneMoveThreeType, playerOneMoveThreeValue];
    [playerTwoType, playerTwoValue] = [playerTwoMoveThreeType, playerTwoMoveThreeValue];
  } else {
    throw new Error("Invalid round number supplied");
    return;
  }
}

// Determine winner for a given round when player one chooses rock
function playerOneRock(roundNumber) {
  setShorthandVariables(roundNumber);

  if (playerTwoType === 'scissors') {
    return 'Player One';
  } else if (playerTwoType === 'paper') {
    return 'Player Two';
  } else if (playerTwoType === 'rock' && playerTwoValue < playerOneValue) {
    return 'Player One';
  } else if (playerTwoType === 'rock' && playerTwoValue > playerOneValue) {
    return 'Player Two';
  } else if (playerTwoType === 'rock' && playerTwoValue === playerOneValue) {
    return 'Tie';
  } else {
    return null;
  }
}

// Determine winner for a given round when player one chooses paper
function playerOnePaper(roundNumber) {
  setShorthandVariables(roundNumber);

  if (playerTwoType === 'rock') {
    return 'Player One';
  } else if (playerTwoType === 'scissors') {
    return 'Player Two';
  } else if (playerTwoType === 'paper' && playerTwoValue < playerOneValue) {
    return 'Player One';
  } else if (playerTwoType === 'paper' && playerTwoValue > playerOneValue) {
    return 'Player Two';
  } else if (playerTwoType === 'paper' && playerTwoValue === playerOneValue) {
    return 'Tie';
  } else {
    return null;
  }
}

// Determine winner for a given round when player one chooses scissors
function playerOneScissors(roundNumber) {
  setShorthandVariables(roundNumber);

  if (playerTwoType === 'paper') {
    return 'Player One';
  } else if (playerTwoType === 'rock') {
    return 'Player Two';
  } else if (playerTwoType === 'scissors' && playerTwoValue < playerOneValue) {
    return 'Player One';
  } else if (playerTwoType === 'scissors' && playerTwoValue > playerOneValue) {
    return 'Player Two';
  } else if (playerTwoType === 'scissors' && playerTwoValue === playerOneValue) {
    return 'Tie';
  } else {
    return null;
  }
}

// Determine winner of round one
function getRoundOneWinner() {
  switch (playerOneMoveOneType) {
    case 'rock':
      return playerOneRock(1);
    case 'paper':
      return playerOnePaper(1);
    case 'scissors':
      return playerOneScissors(1);
    default:
      return null;
  }
}

// Determine winner of round two
function getRoundTwoWinner() {
  switch (playerOneMoveTwoType) {
    case 'rock':
      return playerOneRock(2);
    case 'paper':
      return playerOnePaper(2);
    case 'scissors':
      return playerOneScissors(2);
    default:
      return null;
  }
}

// Determine winner of round three
function getRoundThreeWinner() {
  switch (playerOneMoveThreeType) {
    case 'rock':
      return playerOneRock(3);
    case 'paper':
      return playerOnePaper(3);
    case 'scissors':
      return playerOneScissors(3);
    default:
      return null;
  }
}

// Determine the winner for a given round number
function getRoundWinner(roundNumber) {
  switch (roundNumber) {
    case 1:
      return getRoundOneWinner();
    case 2:
      return getRoundTwoWinner();
    case 3:
      return getRoundThreeWinner();
    default:
      return null;
  }
}

// Initialize player win counts
let playerOneWins = 0;
let playerTwoWins = 0;

// Increment a player's win count for a given round number
function incrementPlayerWins(roundNumber) {
  if (getRoundWinner(roundNumber) === 'Player One') {
    playerOneWins++;
  } else if (getRoundWinner(roundNumber) === 'Player Two') {
    playerTwoWins++;
  }
}

// Verify that all move types and values are set
function allValuesSet() {
  return playerOneMoveOneType
    && playerOneMoveOneValue
    && playerOneMoveTwoType
    && playerOneMoveTwoValue
    && playerOneMoveThreeType
    && playerOneMoveThreeValue
    && playerTwoMoveOneType
    && playerTwoMoveOneValue
    && playerTwoMoveTwoType
    && playerTwoMoveTwoValue
    && playerTwoMoveThreeType
    && playerTwoMoveThreeValue;
}

// Determine the winner of the entire game
function getGameWinner() {
  // Reset win counts
  playerOneWins = 0;
  playerTwoWins = 0;

  incrementPlayerWins(1);
  incrementPlayerWins(2);
  incrementPlayerWins(3);

  if (!allValuesSet()) {
    return null;
  } else {
    if (playerOneWins > playerTwoWins) {
      return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
}
