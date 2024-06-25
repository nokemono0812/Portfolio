let ellipseArr = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  frameRate(60);
  noStroke();
}

function draw() {
  background(17, 17, 26);

  if (ellipseArr.length < 5) {
    createEllipse();
  }

  for (let i = 0; i < ellipseArr.length; i++) {
    drawEllipse(i);
  }
}

function createEllipse(){
  let r = random(90);
  if (r < 1) {
    let pos = [random(width), random(height)],
      direction = [random(-1.5, 1.5), random(-1.5, 1.5)],
      size;
    if (width > height) {
      size = random(width / 3, width * (3/4));
    } else {
      size = random(height / 3, height * (3/4));
    }
    let timer = [0, random(240, 900)],
      fillColor = [random(50,255), random(125), random(50, 255), random(150, 220)];

    ellipseArr[ellipseArr.length] = [pos, direction, size, timer, fillColor];
  }
}

function drawEllipse(n) {
  let obj = ellipseArr[n];
  let timer = obj[3][0],
    timeLevel = obj[3][1] / 3,
    size = obj[2],
    fillColor = [obj[4][0], obj[4][1], obj[4][2], obj[4][3]];

  if (timer < timeLevel * 1) {
    fillColor[3] *= timer / timeLevel;
  } else if (timer > timeLevel * 2) {
    fillColor[3] *= (timeLevel * 3 - timer) / timeLevel;
  }

  fill(fillColor[0], fillColor[1], fillColor[2], fillColor[3]);
  ellipse(obj[0][0], obj[0][1], size);

  obj[0][0] += obj[1][0];
  obj[0][1] += obj[1][1];

  obj[3][0]++;
  if (obj[3][0] >= obj[3][1]) {
    ellipseArr.splice(n, 1);
  } else {
    ellipseArr[n] = obj;
  }
}
