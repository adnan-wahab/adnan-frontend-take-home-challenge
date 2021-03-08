const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const getGameWinner = ({ gameState }) => {
  for (let conditionIndices of winningConditions)
    if (
      conditionIndices.every(
        (index) =>
          gameState[index] !== null &&
          gameState[index] === gameState[conditionIndices[0]],
      )
    )
      return gameState[conditionIndices[0]]
}

export default getGameWinner
