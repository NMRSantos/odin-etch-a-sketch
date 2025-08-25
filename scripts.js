const body = document.getElementsByName(".body");
const row = document.createElement("div");
document.body.appendChild(row);
row.style.display = "flex";
row.style.width = "525px";
row.style.padding = "0px";
row.style.margin = "0px";
row.style.flexWrap = "wrap";


let gridSize = 16;

function makeRow() {
    for (let i = 0; i < gridSize; i++) {
        const cube = document.createElement("div");
        row.appendChild(cube);
        cube.style.height = "30px";
        cube.style.width = "30px";
        cube.style.border = "solid, black, 1px";        
    };
};

function makeGrid() {
    for (let i = 0; i < gridSize; i++)
        makeRow();
    stopPropagation()
};

addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
});


makeGrid();


// make a 16x16 grid
//make one row with 16 boxes
//repeat until 16 rows


// make one box