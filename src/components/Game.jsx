const Game = ({ gameState, onClick}) => {
    return <div className="board">
        {gameState.map((square, i) => (
            <button className={"square " + (gameState[i] && 'bazinga')} key={i} onClick={() => onClick(i)}>
		{square}
	</button>
    ))}
</div>
}

export default Game;