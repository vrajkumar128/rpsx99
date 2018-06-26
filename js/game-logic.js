// All code should be written in this file.

// Map strings to constants (better typo detection)
const P1 = 'Player One';
const P2 = 'Player Two';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const TIE = 'Tie';

// Define valid inputs
const VALID_PLAYERS = [P1, P2];
const VALID_MOVE_TYPES = [ROCK, PAPER, SCISSORS];

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
const validatePlayer = player => {
  return VALID_PLAYERS.includes(String(player));
}

// Check if move type inputs are valid
const validateMoveTypes = (moveOneType, moveTwoType, moveThreeType) => {
  return VALID_MOVE_TYPES.includes(moveOneType)
  && VALID_MOVE_TYPES.includes(moveTwoType)
  && VALID_MOVE_TYPES.includes(moveThreeType);
}

// Check if move value inputs are valid
const validateMoveValues = (moveOneValue, moveTwoValue, moveThreeValue) => {
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

    if (String(player) === P1) {
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

  if (playerTwoType === SCISSORS) {
    return P1;
  } else if (playerTwoType === PAPER) {
    return P2;
  } else if (playerTwoType === ROCK && playerTwoValue < playerOneValue) {
    return P1;
  } else if (playerTwoType === ROCK && playerTwoValue > playerOneValue) {
    return P2;
  } else if (playerTwoType === ROCK && playerTwoValue === playerOneValue) {
    return TIE;
  } else {
    return null;
  }
}

// Determine winner for a given round when player one chooses paper
function playerOnePaper(roundNumber) {
  setShorthandVariables(roundNumber);

  if (playerTwoType === ROCK) {
    return P1;
  } else if (playerTwoType === SCISSORS) {
    return P2;
  } else if (playerTwoType === PAPER && playerTwoValue < playerOneValue) {
    return P1;
  } else if (playerTwoType === PAPER && playerTwoValue > playerOneValue) {
    return P2;
  } else if (playerTwoType === PAPER && playerTwoValue === playerOneValue) {
    return TIE;
  } else {
    return null;
  }
}

// Determine winner for a given round when player one chooses scissors
function playerOneScissors(roundNumber) {
  setShorthandVariables(roundNumber);

  if (playerTwoType === PAPER) {
    return P1;
  } else if (playerTwoType === ROCK) {
    return P2;
  } else if (playerTwoType === SCISSORS && playerTwoValue < playerOneValue) {
    return P1;
  } else if (playerTwoType === SCISSORS && playerTwoValue > playerOneValue) {
    return P2;
  } else if (playerTwoType === SCISSORS && playerTwoValue === playerOneValue) {
    return TIE;
  } else {
    return null;
  }
}

// Determine winner of round one
function getRoundOneWinner() {
  switch (playerOneMoveOneType) {
    case ROCK:
      return playerOneRock(1);
    case PAPER:
      return playerOnePaper(1);
    case SCISSORS:
      return playerOneScissors(1);
    default:
      return null;
  }
}

// Determine winner of round two
function getRoundTwoWinner() {
  switch (playerOneMoveTwoType) {
    case ROCK:
      return playerOneRock(2);
    case PAPER:
      return playerOnePaper(2);
    case SCISSORS:
      return playerOneScissors(2);
    default:
      return null;
  }
}

// Determine winner of round three
function getRoundThreeWinner() {
  switch (playerOneMoveThreeType) {
    case ROCK:
      return playerOneRock(3);
    case PAPER:
      return playerOnePaper(3);
    case SCISSORS:
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
  if (getRoundWinner(roundNumber) === P1) {
    playerOneWins++;
  } else if (getRoundWinner(roundNumber) === P2) {
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
      return P1;
    } else if (playerOneWins < playerTwoWins) {
      return P2;
    } else {
      return TIE;
    }
  }
}

// Randomly generate player two's moves
function setComputerMoves() {
  const RANDOM_INDEX_1 = Math.floor(Math.random() * VALID_MOVE_TYPES.length);
  const RANDOM_INDEX_2 = Math.floor(Math.random() * VALID_MOVE_TYPES.length);
  const RANDOM_INDEX_3 = Math.floor(Math.random() * VALID_MOVE_TYPES.length);

  const RANDOM_M1T = VALID_MOVE_TYPES[RANDOM_INDEX_1];
  const RANDOM_M2T = VALID_MOVE_TYPES[RANDOM_INDEX_2];
  const RANDOM_M3T = VALID_MOVE_TYPES[RANDOM_INDEX_3];

  const RANDOM_M1V = Math.floor(Math.random() * 99);
  const RANDOM_M2V = Math.floor(Math.random() * (99 - RANDOM_M1V));
  const RANDOM_M3V = 99 - RANDOM_M1V - RANDOM_M2V;

  setPlayerMoves('Player Two', RANDOM_M1T, RANDOM_M1V, RANDOM_M2T, RANDOM_M2V, RANDOM_M3T, RANDOM_M3V);
}
