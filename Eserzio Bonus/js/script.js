function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value
)
    let cellsNumber;
    let cellsRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsRow = 10;
    }
    generateGameGrid(cellsNumber, cellsRow)
}

function createSingleSquare(num, cells_per_row){
    const cell = document.createElement('div');
    cell.classList.add('square');
    let sideLength = `100px`;

    cell.style.width = sideLength;
    cell.style.height = sideLength;

    cell.innerText = num;

    return cell
}

function generateGameGrid(cellsNumber, cellsRow)
{
    document.querySelector('.container').innerHTML = '';

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const grid_side = cellsRow * 100;
    grid.style.width = `${grid_side}px`
    grid.style.height = `${grid_side}px`

    for(let i = 0; i < cellsNumber; i++){
        const cell = createSingleSquare(i, cellsRow);
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');
        })

        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid)

}

document.getElementById('play-game').addEventListener('click', function(){
    createNewGame();
})