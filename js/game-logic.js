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
  if (validPlayers.includes(String(player))) {
    return true;
  }

  return false;
}

// Check if move type inputs are valid
function validateMoveTypes(moveOneType, moveTwoType, moveThreeType) {

  if (validMoveTypes.includes(moveOneType)
  && validMoveTypes.includes(moveTwoType)
  && validMoveTypes.includes(moveThreeType)) {
    return true;
  }

  return false;
}

// Check if move value inputs are valid
function validateMoveValues(moveOneValue, moveTwoValue, moveThreeValue) {

  if (moveOneValue >= 1
    && moveOneValue <= 99
    && moveTwoValue >= 1
    && moveTwoValue <= 99
    && moveThreeValue >= 1
    && moveThreeValue <= 99
    && moveOneValue + moveTwoValue + moveThreeValue <= 99) {
    return true;
  }

  return false;
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

      // Set first move for player one
      playerOneMoveOneType = firstMoveType;
      playerOneMoveOneValue = moveOneValue;

      // Set second move for player one
      playerOneMoveTwoType = secondMoveType;
      playerOneMoveTwoValue = moveTwoValue;

      // Set third move for player one
      playerOneMoveThreeType = thirdMoveType;
      playerOneMoveThreeValue = moveThreeValue;

    } else {

      // Set first move for player two
      playerTwoMoveOneType = firstMoveType;
      playerTwoMoveOneValue = moveOneValue;

      // Set second move for player two
      playerTwoMoveTwoType = secondMoveType;
      playerTwoMoveTwoValue = moveTwoValue;

      // Set third move for player two
      playerTwoMoveThreeType = thirdMoveType;
      playerTwoMoveThreeValue = moveThreeValue;

    }

  }

}

function getRoundWinner(roundNumber) {
  switch (roundNumber) {
    // Determine winner for round 1
    case 1:

      switch (playerOneMoveOneType) {

        case 'rock':
          if (playerTwoMoveOneType == 'scissors') {
            return 'Player One';
          } else if (playerTwoMoveOneType == 'paper') {
            return 'Player Two';
          } else if (playerTwoMoveOneValue < playerOneMoveOneValue) {
            return 'Player One';
          } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
            return 'Player Two';
          } else if (playerTwoMoveOneValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'paper':
          if (playerTwoMoveOneType == 'rock') {
            return 'Player One';
          } else if (playerTwoMoveOneType == 'scissors') {
            return 'Player Two';
          } else if (playerTwoMoveOneValue < playerOneMoveOneValue) {
            return 'Player One';
          } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
            return 'Player Two';
          } else if (playerTwoMoveOneValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'scissors':
          if (playerTwoMoveOneType == 'paper') {
            return 'Player One';
          } else if (playerTwoMoveOneType == 'rock') {
            return 'Player Two';
          } else if (playerTwoMoveOneValue < playerOneMoveOneValue) {
            return 'Player One';
          } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
            return 'Player Two';
          } else if (playerTwoMoveOneValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        default:
          return null;

      }

    // Determine winner for round 2
    case 2:

      switch (playerOneMoveTwoType) {

        case 'rock':
          if (playerTwoMoveTwoType == 'scissors') {
            return 'Player One';
          } else if (playerTwoMoveTwoType == 'paper') {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue < playerOneMoveTwoValue) {
            return 'Player One';
          } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'paper':
          if (playerTwoMoveTwoType == 'rock') {
            return 'Player One';
          } else if (playerTwoMoveTwoType == 'scissors') {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue < playerOneMoveTwoValue) {
            return 'Player One';
          } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'scissors':
          if (playerTwoMoveTwoType == 'paper') {
            return 'Player One';
          } else if (playerTwoMoveTwoType == 'rock') {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue < playerOneMoveTwoValue) {
            return 'Player One';
          } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
            return 'Player Two';
          } else if (playerTwoMoveTwoValue === playerOneMoveOneValue) {
            return 'Tie';
          } else {
            return null;
          }

        default:
          return null;

      }

    // Determine winner for round 3
    case 3:

      switch (playerOneMoveThreeType) {

        case 'rock':
          if (playerTwoMoveThreeType === 'scissors') {
            return 'Player One';
          } else if (playerTwoMoveThreeType === 'paper') {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue < playerOneMoveThreeValue) {
            return 'Player One';
          } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue === playerOneMoveThreeValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'paper':
          if (playerTwoMoveThreeType === 'rock') {
            return 'Player One';
          } else if (playerTwoMoveThreeType === 'scissors') {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue < playerOneMoveThreeValue) {
            return 'Player One';
          } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue === playerOneMoveThreeValue) {
            return 'Tie';
          } else {
            return null;
          }

        case 'scissors':
          if (playerTwoMoveThreeType === 'paper') {
            return 'Player One';
          } else if (playerTwoMoveThreeType === 'rock') {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue < playerOneMoveThreeValue) {
            return 'Player One';
          } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
            return 'Player Two';
          } else if (playerTwoMoveThreeValue === playerOneMoveThreeValue) {
            return 'Tie';
          } else {
            return null;
          }

        default:
          return null;

      }

    default:
      return null;

  }
}
