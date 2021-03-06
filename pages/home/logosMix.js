import * as PIXI from 'pixi.js';
import logoSources from './logosMix.list';

// drop console log message about pixi
PIXI.utils.skipHello();

const canvasElement = document.getElementById('logos-mix');
const app = new PIXI.Application({ transparent: true, view: canvasElement });

// create a bounding box for the logos
const logoBoundsPadding = 100;
let logoBounds;

// responsive scaling
let responsiveScale;

// be aware of resizings
const resizeFunction = () => {
  // resize canvas to the window to make it fullscreen
  app.renderer.resize(window.innerWidth, window.innerHeight);

  // update bounding box
  logoBounds = new PIXI.Rectangle(
    -logoBoundsPadding,
    -logoBoundsPadding,
    app.screen.width + (logoBoundsPadding * 2),
    app.screen.height + (logoBoundsPadding * 2),
  );

  // update scaling
  responsiveScale = Math.min(1, Math.max(0.3, window.innerWidth / 1920));
};

window.addEventListener('resize', resizeFunction);
resizeFunction(); // execute it once

const logos = logoSources.map((logoSrc) => {
  // create a new Sprite from the logo image
  const logo = PIXI.Sprite.fromImage(`/static/logos-mix/${logoSrc}.png`);

  // set the anchor point so the texture is centerd on the sprite
  logo.anchor.set(0.5);

  // set the logo to be at a random position
  logo.x = Math.random() * app.screen.width;
  logo.y = Math.random() * app.screen.height;

  // create extra properties to control movement
  // random direction in radians, this is a number between 0
  // and PI*2 which is the equivalent of 0 - 360 degrees
  logo.direction = Math.random() * Math.PI * 2;

  // this will be used to modify the direction of the logo over time
  logo.turningSpeed = Math.random() - 0.8;

  // create a random speed for the logo between 0 - 2
  logo.speed = 2 + (Math.random() * 2);

  // done, adding to stage
  app.stage.addChild(logo);
  return logo;
});

let started = false;

app.ticker.add(() => {
  if (!started) {
    started = true;
    canvasElement.classList.add('ready');
  }

  // iterate through the logos and update their values
  logos.forEach((logo) => {
    logo.direction += logo.turningSpeed * 0.01;
    logo.x += Math.sin(logo.direction) * logo.speed;
    logo.y += Math.cos(logo.direction) * logo.speed;

    // update scale - trying to be responsive!
    logo.scale.x = responsiveScale;
    logo.scale.y = responsiveScale;

    // wrap the logos by testing their bounds...
    if (logo.x < logoBounds.x) {
      logo.x += logoBounds.width;
    } else if (logo.x > logoBounds.x + logoBounds.width) {
      logo.x -= logoBounds.width;
    }

    if (logo.y < logoBounds.y) {
      logo.y += logoBounds.height;
    } else if (logo.y > logoBounds.y + logoBounds.height) {
      logo.y -= logoBounds.height;
    }
  });
});
