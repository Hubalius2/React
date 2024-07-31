export default function GameOver({ winner, onPlayAgain }) {
    
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>The winner is {winner}</p>}
            {!winner && <p>It's a draw</p>}
            <p>
                <button onClick={onPlayAgain}> Play Again</button>
            </p>

        </div>
    );
}