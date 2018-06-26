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
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

// Check if player input is valid
const validatePlayer = player => {
  return VALID_PLAYERS.includes(player);
}

// Check if move type inputs are valid
const validateMoveTypes = (m1t, m2t, m3t) => {
  return VALID_MOVE_TYPES.includes(m1t)
  && VALID_MOVE_TYPES.includes(m2t)
  && VALID_MOVE_TYPES.includes(m3t);
}

// Check if move value inputs are valid
const validateMoveValues = (m1v, m2v, m3v) => {
  return m1v >= 1 && m1v <= 99 && m2v >= 1 && m2v <= 99 && m3v >= 1 && m3v <= 99 && m1v + m2v + m3v <= 99;
}

// Set moves for player one
const setPlayerOneMoves = (m1t, m1v, m2t, m2v, m3t, m3v) => {
  [playerOneMoveOneType,
  playerOneMoveOneValue,
  playerOneMoveTwoType,
  playerOneMoveTwoValue,
  playerOneMoveThreeType,
  playerOneMoveThreeValue] = [m1t, m1v, m2t, m2v, m3t, m3v];
}

// Set moves for player two
const setPlayerTwoMoves = (m1t, m1v, m2t, m2v, m3t, m3v) => {
  [playerTwoMoveOneType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoType,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeType,
  playerTwoMoveThreeValue] = [m1t, m1v, m2t, m2v, m3t, m3v];
}

// Set values for the move and type variables
const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {
  const [firstMoveType, secondMoveType, thirdMoveType] = [String(m1t).toLowerCase(),
    String(m2t).toLowerCase(),
    String(m3t).toLowerCase()];

  if (validatePlayer(player)
  && validateMoveTypes(firstMoveType, secondMoveType, thirdMoveType)
  && validateMoveValues(m1v, m2v, m3v)) {

    if (player === P1) {
      setPlayerOneMoves(firstMoveType, m1v, secondMoveType, m2v, thirdMoveType, m3v);
    } else {
      setPlayerTwoMoves(firstMoveType, m1v, secondMoveType, m2v, thirdMoveType, m3v);
    }
  }
}

// Initialize reference variables
let playerOneType = undefined;
let playerOneValue = undefined;
let playerTwoType = undefined;
let playerTwoValue = undefined;

const setReferenceVariables = roundNumber => {
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
const playerOneRock = roundNumber => {
  setReferenceVariables(roundNumber);

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
const playerOnePaper = roundNumber => {
  setReferenceVariables(roundNumber);

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
const playerOneScissors = roundNumber => {
  setReferenceVariables(roundNumber);

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
const getRoundOneWinner = () => {
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
const getRoundTwoWinner = () => {
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
const getRoundThreeWinner = () => {
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
const getRoundWinner = roundNumber => {
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

// Increment a player's win count after a given round number
const incrementPlayerWins = roundNumber => {
  if (getRoundWinner(roundNumber) === P1) {
    playerOneWins += 1;
  } else if (getRoundWinner(roundNumber) === P2) {
    playerTwoWins += 1;
  }
}

// Verify that all move types and values are set
const allValuesSet = () => {
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
const getGameWinner = () => {
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

// Generate a random move type
const generateRandomMoveType = () => {
  const randomIndex = Math.floor(Math.random() * VALID_MOVE_TYPES.length);
  return VALID_MOVE_TYPES[randomIndex];
}

// Randomly generate player two's moves
const setComputerMoves = () => {
  const randomM1t = generateRandomMoveType();
  const randomM2t = generateRandomMoveType();
  const randomM3t = generateRandomMoveType();

  const randomM1v = Math.floor(Math.random() * 97) + 1;
  const randomM2v = Math.floor(Math.random() * (98 - randomM1v)) + 1;
  const randomM3v = 99 - randomM1v - randomM2v;

  setPlayerMoves(P2, randomM1t, randomM1v, randomM2t, randomM2v, randomM3t, randomM3v);
}
