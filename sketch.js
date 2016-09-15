// Dominique Ketchens © 2016 hw3 //

var x;

function setup () {
  x = 20;
  createCanvas (550, 350);
  println("variableeeee =". x, "width = ", "height = ");
}
function draw () {
  background (50);
  // Dots //
strokeWeight (4)
  for (var y = 0; y <= height; y += 35) {
    for (var x = 160; x <= width; x += 18) {
      ellipse (x + y, y, 16 - y/20.0, 16 - y/20.0);
    }
  }
for(var n = 0; n < 1000; n = n + 10){
 stroke(0,0,0);
 println("the value n:", n);
  // lines //
    for(var i = 0; i < 600; i += 10){
    blendMode(LIGHTEST);
    strokeWeight (1);
    stroke(210, 9, 110);
    line (i, 0, i + i/-1, 350);
    stroke(9, 210, 204);
    line (i + i/-1, 0, i*1.2, 350);
  }
}
}
