
function colorSquare(e) {
    this.classList.add('visited');
}

// Create dim x dim grid with squares that leaved colored trails as the mouse hovers over them
let dim = 16;

for(let row = 0; row < dim; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');

    for(let col = 0; col < dim; col++) {
        const square = document.createElement('div');
        // Have the square change color as the mouse hovers over them
        square.addEventListener('mouseenter', colorSquare);
        rowContainer.appendChild(square);
    }

    document.body.appendChild(rowContainer);
}
