let gridSize = 16;

let drawingArea = document.querySelector("#drawing-area");
let box;
for (let i = 0; i < gridSize * gridSize; i++) {
    box = document.createElement("div");
    box.classList.add("box");
    drawingArea.appendChild(box);
    box.setAttribute("style",`width:${600 / gridSize}; height:${600 / gridSize}`);
}

