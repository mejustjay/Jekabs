var canvas;
let n = 0.0;
let increment = 0.1;
let y = [];
let x = [];

function setup () {
    canvas = createCanvas (windowWidth,windowHeight);
    canvas.position (0,0);
    canvas.style ('z-index', '-1');

    background (100,120,254);

    for(let i = 0; i <20; i++){
      x[i]= random(0,windowWidth);
      y[i]= random(0,windowHeight);

    }
}

function draw () {

  n+=increment;
  for (let i = 0; i<13; i++){
  let pos = noise(n)*1000;
  stroke(random(0,255),random(0,255),random(0,255));

  line(x[i]+pos,y[i],x[i]+pos,y[i]+50);
}
  increment++;
}
