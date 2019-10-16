var canvas;
var speed = 0.05;



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup () {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
    canvas.position (0,0);
    canvas.style ('z-index', '-1');



}

function draw () {
    background (11,230,123);
    push();
      rotateX(frameCount * speed);
      rotateY(frameCount * speed);

      translate(mouseX/2,mouseY/2);
      box( 100, 320, 100);
    pop();

    push();
      fill(200,110,20);
      translate(100,200);
      sphere(50);
    pop();

}
