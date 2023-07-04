// script.js

// Variables to keep track of selected piece and destination square
let selectedPiece = null;
let destinationSquare = null;

// Event listener for the chessboard squares
const chessboardSquares = document.querySelectorAll("#chessboard div");
chessboardSquares.forEach(square => {
    square.addEventListener("click", () => {
        // If a piece is already selected
        if (selectedPiece) {
            // Get the ID of the clicked square
            const squareId = square.getAttribute("id");
            
            // If the clicked square is the same as the selected piece, deselect it
            if (selectedPiece === square) {
                square.classList.remove("selected");
                selectedPiece = null;
            }
            // If the clicked square is a valid move for the selected piece, move it
            else if (isValidMove(selectedPiece, squareId)) {
                movePiece(selectedPiece, square);
                selectedPiece = null;
            }
            // If the clicked square is not a valid move, select a new piece
            else {
                selectedPiece.classList.remove("selected");
                square.classList.add("selected");
                selectedPiece = square;
            }
        }
        // If no piece is selected, select the clicked piece
        else {
            square.classList.add("selected");
            selectedPiece = square;
        }
    });
});

// Function to check if a move is valid
function isValidMove(piece, destination) {
    // Implement your own logic here to validate the move
    // For example, you can check if the move follows the rules of chess
    // and if the destination square is empty or contains an opponent's piece
    // Return true if the move is valid, false otherwise
    return true;
}

// Function to move a piece to the destination square
function movePiece(piece, destination) {
    // Implement your own logic here to move the piece
    // For example, you can update the position of the piece on the chessboard
    // and update the visual representation of the chessboard
    // based on the selected piece and destination square
    piece.classList.remove("selected");
    destination.classList.add("selected");
    piece.innerHTML = "";
    destination.innerHTML = piece.innerHTML;
}

// Additional features

// Reset button to clear the chessboard
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    // Clear the selected piece and destination square
    selectedPiece = null;
    destinationSquare = null;

    // Reset the visual representation of the chessboard
    chessboardSquares.forEach(square => {
        square.innerHTML = "";
        square.classList.remove("selected");
    });
});
