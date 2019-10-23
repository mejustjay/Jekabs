var canvas;
let mic;


function windowResized() {
  console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}
function setup () {
    canvas = createCanvas (windowWidth,windowHeight);
    canvas.position (0,0);
    canvas.style ('z-index', '-1');
    mic = new p5.AudioIn();
    mic.start();




}
function draw () {
    background (100,120,254);

    var vol = mic.getLevel();
    ellipse(width / 2, height / 2, vol * width);
    rect(100, 100, vol*width, vol * height);


}


function touchStarted(){


  getAudioContext().resume();
}
