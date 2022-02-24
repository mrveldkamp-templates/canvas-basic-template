// Canvas Template

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Draw Function
window.addEventListener("load", draw);

function draw() {

  // Request Animation Frame
  requestAnimationFrame(draw);
}