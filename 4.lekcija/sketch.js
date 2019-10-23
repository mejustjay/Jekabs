var canvas;
var speed = 0.05;
let img;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
function setup () {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
    canvas.position (0,0);
    canvas.style ('z-index', '-1');
    img = loadImage ("https://res.cloudinary.com/teepublic/image/private/s--3ZgkfM_p--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1538161028/production/designs/3228139_2.jpg");



}

function draw () {
    background (11,230,123);

}

class Object {
  constructor(size) {
      this.size = size;

  }
  display(){
    push();
      rotateX(frameCount * speed);
      rotateY(frameCount * speed);

      translate(mouseX/2,mouseY/2);
      texture(img);
      box( 100, 320, 100);
    pop();

    push();
      fill(200,110,20);
      translate(100,200);
      sphere(50);
    pop();
  }
}
