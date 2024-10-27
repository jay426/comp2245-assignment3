document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.getElementById("new-game");
    let isXTurn = true; // tracks turns 
    let gameState = Array(9).fill(null); 

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    // Check if there is a winner
    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return true;
            }
        }
        return false;
    }
    // Check if there is a draw
    function checkDraw() {
        return gameState.every(cell => cell !== null);
    }

    function resetGame() {
        gameState.fill(null);
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        isXTurn = true;
    }

    // Sets up the squares
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event to each square
        square.addEventListener("click", function () {
            if (square.textContent === "" && !checkWinner()) { // Only add X or O if square is empty and no winner
                const playerSymbol = isXTurn ? "X" : "O"; // Determine which player's turn it is
                square.textContent = playerSymbol; // Update the square's content
                square.classList.add(playerSymbol); // Add the appropriate class for styling
                gameState[index] = playerSymbol; // Update the game state array
                if (!checkWinner()) {
                    if (checkDraw()) {
                        statusDiv.textContent = "It's a Draw!";
                    } else {
                        isXTurn = !isXTurn; // Alternate turns
                    }
                }
            }
        });

       
        square.addEventListener("mouseenter", function () {
            if (square.textContent === "") { 
                square.classList.add("hover"); // Adds hover class
            }
        });

       
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover"); // Removes hover class
        });
    });

    newGameButton.addEventListener("click", resetGame);
});

// note that this assignment was done with the help of the following resources: chatgbt,geeks for geeks 