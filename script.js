

function setup() {
  createCanvas(800, 800);
  background(255);

  // start screen
startScreen();


//making a button for start
let horchataText = `
  bbb`;

  let palette1 = {
    b: color(51,56,99),//dark

    s:color(118,188,239),//cyanlike
    d:color(86,149,234),//neutral blue
    f:color(55,96,193)//gray/dark blue
  };
        horchata = new Sprite();
        horchata.img = spriteArt(horchataText, 20, palette1);
       horchata.pos={x:115, y: 75};
        horchata.rotation =0;
        horchata.collider = "kinematic";
}

function draw() {
  //
}

function startScreen() {
  background(91,181,49);
}
