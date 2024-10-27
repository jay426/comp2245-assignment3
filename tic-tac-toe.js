document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status"); // Get the status div
    let isXTurn = true; // Keeps track of whose turn it is (X or O)
    let gameState = Array(9).fill(null); // Initialize array with 9 null values

    // Define winning combinations
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    // Set up each square
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event to each square
        square.addEventListener("click", function () {
            if (square.textContent === "") { // Only add X or O if square is empty
                const playerSymbol = isXTurn ? "X" : "O"; // Determine which player's turn it is
                square.textContent = playerSymbol; // Update the square's content
                square.classList.add(playerSymbol); // Add the appropriate class for styling
                gameState[index] = playerSymbol; // Update the game state array

                // Check for a winner
                checkWinner(playerSymbol);

                isXTurn = !isXTurn; // Alternate turns
            }
        });

        // Add mouseenter event to change style on hover
        square.addEventListener("mouseenter", function () {
            if (square.textContent === "") { // Only change style if square is empty
                square.classList.add("hover"); // Add hover class
            }
        });

        // Add mouseleave event to revert style when mouse leaves
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover"); // Remove hover class
        });
    });

    function checkWinner(player) {
        // Check if the player has won
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] === player && gameState[b] === player && gameState[c] === player) {
                // Update the status message
                statusDiv.textContent = Congratulations! ${player} is the Winner!;
                statusDiv.classList.add("won"); // Add the you-won class
                return; // Exit the function once a winner is found
            }
        }

        // Optionally: Check for a draw (if all squares are filled)
        if (!gameState.includes(null)) {
            statusDiv.textContent = "Draw!";
            statusDiv.classList.add("won");
        }
    }
});