// script.js
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    if (gameOver || board[index] !== null) return; // Prevent move if cell is filled or game is over

    board[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].innerText = currentPlayer;
    
    if (checkWinner()) {
        document.getElementById('message').innerText = `${currentPlayer} wins!`;
        gameOver = true;
    } else if (board.every(cell => cell !== null)) {
        document.getElementById('message').innerText = 'It\'s a draw!';
        gameOver = true;
    } else {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    gameOver = false;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('message').innerText = '';
}
