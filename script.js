
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

// Create dim x dim grid with squares that leave colored trails as the mouse hovers over them
function drawGrid(dim=16) {
    if(dim > 100) {
        dim = 100; // Limit to max of 100 squares
    }

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

function clearGrid() {
    const container = document.querySelector('.container');
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function changeGrid() {
    clearGrid();
    let dim;
    do {
        dim = +prompt('Number of squares on each side (max 100): ', 16);
    } while(!Number.isInteger(dim) || dim < 1)
    drawGrid(dim);
}

const btn = document.querySelector('button');
btn.addEventListener('click', changeGrid)

drawGrid(); // Initialize default grid
