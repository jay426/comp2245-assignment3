document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let isXTurn = true; //tracks the turns(X or O)
    let gameState = Array(9).fill(null); // set array 

    // adding squares to the board
    squares.forEach((square, index) => {
        square.classList.add("square");

       
        square.addEventListener("click", function () {
            if (square.textContent === "") {
                const playerSymbol = isXTurn ? "X" : "O"; 
                square.textContent = playerSymbol; 
                square.classList.add(playerSymbol); 
                gameState[index] = playerSymbol; 
                isXTurn = !isXTurn; 
            }
        });

        // Add mouseenter event to change style on hover
        square.addEventListener("mouseenter", function () {
            if (square.textContent === "") { 
                square.classList.add("hover"); // Adds hover class
            }
        });

        // Add mouseleave event to revert style when mouse leaves
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover"); // Removes hover class
        });
    });
});