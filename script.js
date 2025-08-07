

function setup() {
  createCanvas(800, 800);
  background(255);

  // start screen
startScreen();


//making a button for start
let startButtonText = `
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbb`;

  let palette1 = {
    b: color(51,56,99),//outline more than likely orange

    s:color(118,188,239),//this will be the lighter orange
    d:color(86,149,234),//yellow main color
    f:color(55,96,193)//word color like black for visibility
  };
        startButton = new Sprite();
        startButton.img = spriteArt(startButtonText, 20, palette1);
       startButton.pos={x:115, y: 75};
        startButton.rotation =0;
        startButton.collider = "kinematic";
}

function draw() {
  //
}

function startScreen() {
  background(91,181,49);
}
