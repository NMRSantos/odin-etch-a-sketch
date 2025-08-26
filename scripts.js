const grid = document.querySelector(".grid");
const button = document.querySelector(".button");

let gridSize = 16

function makeSquare(row) {
    const square = document.createElement("div");
    //SQUARE CSS STYLING
    row.appendChild(square);
    square.style.height = "16px";
    square.style.width = "16px";
    square.style.border = "solid black 1px";
    square.className = "square";
};

function makeRow() {
    const row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    for (let i = 0; i < gridSize; i++) {
        makeSquare(row); 
    }
};

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        makeRow(); 
    }
};

document.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "red";
    };
});

makeGrid();

button.addEventListener("click", () => {
    gridSize = prompt("Please, set a grid size");
    if (gridSize <= 100) {
        grid.innerHTML = "";
        makeGrid();
        console.log("New grid size is", gridSize);
    } else {
        gridSize = prompt("Please, set a size lower than 100");
        grid.innerHTML = "";
        makeGrid();
        console.log("New grid size is", gridSize);
    };
});