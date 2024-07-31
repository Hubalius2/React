import { useState } from "react";

import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/log";
import GameOver from "./component/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const [firstSquare, secondSquare, thirdSquare] = combination;
    const firstSquareSymbol = gameBoard[firstSquare.row][firstSquare.column];
    const secondSquareSymbol = gameBoard[secondSquare.row][secondSquare.column];
    const thirdSquareSymbol = gameBoard[thirdSquare.row][thirdSquare.column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}


function App() {

  //const [activePlayer, setActivePlayer] = useState('X');
  const [players, setPlayers] = useState({
    'X': 'Pablo',
    'O': 'Pedro'
  });

  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...previousTurns];
      return updatedTurns;
    });
  }

  function handleResetGame() {
    setGameTurns([]);
  }

  const winner = deriveWinner(gameBoard, players);
  const draw = gameTurns.length === 9 && !winner;

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((previousPlayers) => {
      const updatedPlayers = { ...previousPlayers, [symbol]: newName };
      return updatedPlayers;
    });
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Pablo" symbol="X" isActive={players.X === 'X'} onChangeName={handlePlayerNameChange} />
          <Player name="Pedro" symbol="O" isActive={players.O === 'O'} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onPlayAgain={handleResetGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />

      </div>
      <Log turns={gameTurns} />
    </>

  );
}

export default App
