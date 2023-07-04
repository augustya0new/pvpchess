// script.js

// Add event listener to all squares
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('click', handleSquareClick));

// Track selected square
let selectedSquare = null;

// Handle square click event
function handleSquareClick() {
    const currentSquare = this;
  
    // If a square is already selected, move the piece
    if (selectedSquare) {
        movePiece(selectedSquare, currentSquare);
        clearSelection();
    } else {
        // If no square is selected, select the current square
        selectSquare(currentSquare);
    }
}

// Select a square
function selectSquare(square) {
    if (selectedSquare) {
        selectedSquare.classList.remove('selected');
    }
    square.classList.add('selected');
    selectedSquare = square;
}

// Move the piece to the target square
function movePiece(sourceSquare, targetSquare) {
    // Check if there is a piece in the source square
    if (sourceSquare.innerHTML) {
        // Move the piece by copying its HTML to the target square
        targetSquare.innerHTML = sourceSquare.innerHTML;
        sourceSquare.innerHTML = '';
    }
}

// Clear the selection
function clearSelection() {
    selectedSquare.classList.remove('selected');
    selectedSquare = null;
}
