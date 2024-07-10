const container = document.querySelector("#container");

const btn = document.createElement("button");
btn.textContent = "Change grid size";

let gridSize;

btn.addEventListener('click', () => {
    gridSize = prompt("Enter number of squares per side: ");
    while(gridSize > 100 || gridSize < 0) {
        gridSize = prompt("Please enter a number less than 100: ");
    }
    container.replaceChildren(container.firstChild);
    makeGrid(gridSize);
    applyEffect();
});

btn.setAttribute("id", "btn");
container.appendChild(btn);

function makeGrid(size = 16) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "square");
            row.appendChild(div);
        }
    }
}

function applyEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(i) {
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = "lightgreen";
    });
    i.addEventListener('mouseout', () => {
        i.style.backgroundColor = "white";
    })
});
}


makeGrid();
applyEffect();