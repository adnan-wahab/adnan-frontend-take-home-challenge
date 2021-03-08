import getGameWinner from '../services/getGameWinner'
import { useEffect, useState } from 'react'

const initialGameState = new Array(9).fill(null)

const App = () => {
  const [gameState, setGameState] = useState(initialGameState)

  const [winner, setWinner] = useState(() => getGameWinner({ gameState }))

  useEffect(() => {
    setWinner(getGameWinner({ gameState }))
  }, [gameState])

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <pre>Winner: {winner}</pre>
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
    </div>
  )
}

export default App
