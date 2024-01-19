// script.js
console.log("Script loaded successfully!");

let angle = 0;
let spacing = 10;
let radius = 50;
let colorSpeed = 1.2; // 控制颜色变化的速度

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-sketch1');
    background(255,255,255);
    noFill();
    strokeWeight(2);
}

function draw() {
    translate(width / 2, height / 2);
    let x1 = cos(angle) * radius;
    let y1 = sin(angle) * radius;
    let x2 = cos(angle + radians(spacing)) * (radius + 10);
    let y2 = sin(angle + radians(spacing)) * (radius + 10);
    
    // 使用 colorSpeed 控制颜色变化速度
    
    angle += radians(spacing);
    radius += 0.15;
    
    // 每次 draw() 被调用时更新颜色
    angle += colorSpeed;

    let randomColor = color(random(255), random(255), random(255));
    stroke(randomColor);

    line(x1, y1, x2, y2);
    angle += radians(spacing);
    radius += 0.15;
}

