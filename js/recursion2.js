let brown1, brown2, slider
function setup() {
    // createCanvas
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeJoin(round)
    brown1 = color('#681807')
    brown2 = color('#BA5C1B')
    noLoop();
    slider = createSlider(0, 100, 0);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);

}
function draw() {
    background(220);
    // changes the angle origin
    resetMatrix()
    translate(width / 2, height);
    branch(slider.value() + 200)
}

function branch(len) { // length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 10, 300, 1, 10));
    stroke(lerpColor(brown1, brown2, random(0.1, 0.75)));
    line(0, 0, 0, -len);
    translate(0, -len)
    if (len > 50) {
        if (len < 80) {
            //leaves
            let r = 20 + random(20, 255);
            let g = 20 + slider.value();
            let b = 20 + slider.value();
            fill(r, g, b, 100);
            let size = 15;
            noStroke()
            // triangle(-size / 2, 0, size / 2, 0, 0, -size)
            beginShape()
            let radius = random(10, 30);
            for (let i = 55; i < 135; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                curveVertex(x - 10, y + 10);
                curveVertex(x + 10, y - 10);
            }
            for (let i = 135; i > 55; i--) {
                let x = radius * cos(i);
                let y = radius * sin(-i);
                curveVertex(x - 10, y + 10);
                curveVertex(x + 10, y - 10);
            }
            endShape(CLOSE);
        } else {
            //branch1
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.8);
            pop();
            //branch2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.67);
            pop();
            //branch3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop();
            //branch4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.2);
            pop();
        }
    }
}