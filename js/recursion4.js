let brown1, brown2, green1, green2, purple1, purple2, slider;
function setup() {
    // createCanvas
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeJoin(round)
    // brown1 = color('#681807');
    brown1 = color(104, 24, 7);
    purple1 = color(255, 81, 139)
    purple2 = color(222, 0, 74)
    // brown2 = color('#BA5C1B');
    brown2 = color(186, 92, 27);
    green1 = color('#09b300');
    green2 = color('#1f7d1a');
    noLoop();
    slider = createSlider(0, 100, 0);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw() {
    background(255, 183, 183);
    // changes the angle origin
    resetMatrix()
    translate(width / 2, height);
    branch(slider.value() + 400);
}

function branch(len) { // length of branch to draw
    let maxAngle = 45;
    strokeWeight(map(len, 20, 400, 2, 20));
    stroke(lerpColor(purple1, purple2, random(0.1, 0.9)));
    line(0, 0, 0, -len);
    translate(0, -len)
    if (len > 50) {
        if (len < 80) {
            //leaves
            let r = random(255);
            let g = random(255);
            let b = random(255);
            fill(r, g, b, 100);
            let size = 15;
            noStroke()
            // triangle(-size / 2, 0, size / 2, 0, 0, -size)
            beginShape()
            let radius = random(10, 30);
            for (let i = 55; i < 185; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                curveVertex(x - 10, y + 10);
                curveVertex(x + 10, y - 10);
            }
            for (let i = 10; i > 60; i--) {
                let x = radius * cos(i);
                let y = radius * sin(-i);
                curveVertex(x - 5, y + 5);
                curveVertex(x + 5, y - 5);
            }
            endShape(CLOSE);
        } else {
            //branch1\
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.95);
            pop();
            //branch2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.85);
            pop();
            //branch3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.75);
            pop();
            //branch4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.65);
            pop();
            //branch5
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.55);
            pop();
            //branch6
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.45);
            pop();
            //branch7
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop();
        }
    }
}