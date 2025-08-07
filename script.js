

function setup() {
  createCanvas(600, 600);
  background(255);

  // start screen
startScreen();


//making a button for start
let startButtonText = `
  ...bbbbbbbbbbbbbbbbbb
  bssssddddddddddddddb
  bssfffdfdddfffdfdfdb
  bsdfffdfdddfffdfffsb
  bddfdddfffdfdfddfssb
  bddddddddddddddssssb
  .bbbbbbbbbbbbbbbbbb
  `;

  let palette1 = {
    b: color(175,0,0),//outline more than likely orange

    s:color(204,0,0),//this will be the lighter orange
    d:color(86,149,234),//yellow main color
    f:color(55,96,193)//word color like black for visibility
  };
        startButton = new Sprite();
        startButton.img = spriteArt(startButtonText, 10, palette1);
       startButton.pos={x:285, y: 400};
        startButton.rotation =0;
        startButton.collider = "kinematic";
}

function draw() {
  //
}

function startScreen() {
  background(91,181,49);
}
