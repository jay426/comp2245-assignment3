document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(square => {
        square.classList.add("square");
    });
});