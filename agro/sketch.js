var blob;

var blobs = [];
var zoom = 1;
var move = 5;

function setup() {
  createCanvas(600, 600);
  
  blob = new Blob(0, 0, 64);
 
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    blobs[i] = new Blob(x, y, 16);
  }
}



function draw() {

  background(1000);
  
  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();

    if (blob.eats(blobs[i])) {
      //if og blob touches you consume the other blob and grow
      blobs.splice(i, 1);
      //if you eat a blob generate a new one
      var x = random(-width, width);
      var y = random(-height, height);
      blobs.push(new Blob(x,y,16));
    }
  }

  blob.show();

  blob.update();

}