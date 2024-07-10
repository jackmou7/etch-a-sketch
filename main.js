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
        let x = 0;
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = "lightgreen";
        x = opacityCount(x);
        i.style.opacity = x;
    });
    i.addEventListener('mouseout', () => {
        i.style.backgroundColor = "white";
        i.style.opacity = 1;
    })
});
}

function opacityCount(x) {
    if(x == 1) {
        return 1;
    } else {
        return x + 0.1;
    }
}

makeGrid();
applyEffect();