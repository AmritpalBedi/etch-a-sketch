let gridSize = 16;

function createBoard() {
    const tablet = document.querySelector("#tablet");
    const drawingArea = document.createElement("div");
    drawingArea.setAttribute("id", "drawingArea");
    tablet.appendChild(drawingArea);
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement("div");
        box.classList.add("box")
        box.setAttribute("id", "box")
        box.setAttribute("onmouseover", "mouseOver(this)")
        box.style.width = `${600 / gridSize}px`;
        box.style['background-color'] = "white";
        drawingArea.appendChild(box);
    }
}

createBoard();

function mouseOver(element) {
    element.style['background-color'] = "black";
}

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    const element = document.getElementsByClassName("box");
    drawingArea.remove();
    createBoard();
});

const chooseSize = document.getElementById("size");
chooseSize.addEventListener("click", () => {
    while (true) {
        gridSize = prompt("Grid size?\n(Between 2-100)")
        gridSize = +gridSize;
        if (gridSize > 1 && gridSize < 101) {
            break;
        }
    }
    drawingArea.remove();
    createBoard();
});