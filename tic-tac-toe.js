document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let isXTurn = true; // tracks whose turn it is (X or O)  - 1st player is X
    let gameState = Array(9).fill(null); // Initialize array with 9 null values (empty squares)

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
                isXTurn = !isXTurn; // Alternate turns
            }
        });
    });
});