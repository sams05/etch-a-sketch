
function getSquareSize(dim) {
/*
    Given the dimension of the grid, find the size of the squares to fit the width of the container
*/
    const container = document.querySelector('.container');
    containerWidth = container.offsetWidth;
    return `${containerWidth / dim}px`;
}

function colorSquare() {
    this.classList.add('visited');
}

// Create dim x dim grid with squares that leaved colored trails as the mouse hovers over them
function drawGrid(dim=16) {
    const squareSize = getSquareSize(dim);
    for(let row = 0; row < dim; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
    
        for(let col = 0; col < dim; col++) {
            const square = document.createElement('div');
            square.style.width = squareSize;
            square.style.height = squareSize;
            // Have the square change color as the mouse hovers over them
            square.addEventListener('mouseenter', colorSquare);
            rowContainer.appendChild(square);
        }
    
        const container = document.querySelector('.container');
        container.appendChild(rowContainer);
    }
}

drawGrid(); // Initialize default grid

/*
const btn = document.querySelector('button');
btn.addEventListener('click', )
*/