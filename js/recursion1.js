// Loops that can be rexecuted multiple times
const MAX_LEVEL = 8;
const MIN_LEVEL = 0;
function setup() {
    createCanvas(innerWidth, innerHeight);
    stroke(255);
    noFill();
    // So that the draw function does not keep looping
    noLoop();
    // calling the function
    drawCircle(width / 2, height / 2, width / 4, MAX_LEVEL)
}

function drawCircle(x, y, d, count) {
    ellipse(x, y, d);
    if (count > MIN_LEVEL) {
        count--;
        drawCircle(x + d / 2, y, d / 2, count)
        drawCircle(x - d / 2, y, d / 2, count)
        drawCircle(x, y + d / 2, d / 2, count)
    }
}