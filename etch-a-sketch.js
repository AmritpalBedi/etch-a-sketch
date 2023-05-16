let gridSize = 16;
// while (true){
//     gridSize = prompt("Grid size?\n(Between 2-100)")
//     gridSize = +gridSize;
//     if (gridSize > 1 && gridSize < 101) {
//         break;
//     }
// }

let drawingArea = document.querySelector("#drawing-area");
let box;
for (let i = 0; i < gridSize * gridSize; i++) {
    box = document.createElement("div");
    box.setAttribute("id", "box")
    box.setAttribute("onmouseover", "mouseOver(this)")
    //box.style['width'] = `${600 / gridSize}px`;
    box.style.width = `${600 / gridSize}px`;
    drawingArea.appendChild(box);
    
}

function mouseOver(element) {
    element.style['background-color'] = "blue";
}
