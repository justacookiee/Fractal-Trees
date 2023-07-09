var proportion = .75;
var angle;
var slider;

function setup() {
    createCanvas(800, 800);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(51);
    stroke(255);
    angle = slider.value();
    textSize(32);
    var deg = nf(angle * 360 / TWO_PI, 3, 1);
    text(deg + "°", 10, 700);
    translate(width / 2, height);
    line(0, 0, 0, -100);
    translate(0, -100);

    // rotate(PI/4);
    // line(0, 0, 0, -66.66);
    // rotate(-PI/2);
    // line(0,0,0, -66.66);

    branch(100);
}

function branch(len) {
    if(len <= 4)
        return;
    rotate(angle);
    var scl = len * proportion;
    var temp = scl;
    line(0, 0, 0, -scl);
    translate(0,-scl);
    branch(temp);
    translate(0, scl);
    rotate(-2 * angle);
    line(0, 0, 0, -scl);
    translate(0, -scl);
    temp = scl;
    branch(temp);
    translate(0, scl);
    rotate(angle);
}