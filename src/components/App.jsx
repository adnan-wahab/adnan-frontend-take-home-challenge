import getGameWinner from '../services/getGameWinner'
import { useEffect, useState } from 'react'
import Game from './Game'

const initialGameState = new Array(9).fill(null)

const App = () => {
  const [gameState, setGameState] = useState(initialGameState)

  const [winner, setWinner] = useState(() => getGameWinner({ gameState }))

  const [xTurn, setXTurn] = useState(true);

  useEffect(() => {
    setWinner(getGameWinner({ gameState }))
  }, [xTurn])

  const handleClick = (i) => {
    if (winner || gameState[i]) return;
    
    gameState.prev = [...gameState]  //linked list to save state 
    gameState[i] = xTurn ? "X" : "O";
    setGameState(gameState);
    setXTurn(!xTurn);
};

const handleUndo = ( ) => {
  if(gameState.prev)
  setGameState(gameState.prev)
  setXTurn(! xTurn)
}

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>{winner ? `Winner: ${winner}` : `Next Turn: ${xTurn ? 'X' : 'O'}`}</p>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={() => setGameState(Array(9).fill(null))}>Start Game</button>
        <Game setGameState={setGameState} 
        gameState={gameState} 
        onClick={handleClick}/>
    </div>
  )
}

export default App
