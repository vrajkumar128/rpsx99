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
