import * as PIXI from 'pixi.js';
import logoSources from './logosMix.list';

const canvasElement = document.getElementById('logos-mix');
const app = new PIXI.Application({ transparent: true, view: canvasElement });

// make it fullscreen
const resize = () => app.renderer.resize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', resize);
resize(); // execute it once

const logos = logoSources.map((logoSrc) => {
  // create a new Sprite that uses the image name that we just generated as its source
  const logo = PIXI.Sprite.fromImage(`/static/logos-mix/${logoSrc}.png`);

  // set the anchor point so the texture is centerd on the sprite
  logo.anchor.set(0.5);

  // set a random scale for the logo - no point them all being the same size!
  logo.scale.set(0.8 + (Math.random() * 0.3));

  // finally lets set the logo to be at a random position..
  logo.x = Math.random() * app.screen.width;
  logo.y = Math.random() * app.screen.height;

  // create some extra properties that will control movement :
  // create a random direction in radians. This is a number between 0
  // and PI*2 which is the equivalent of 0 - 360 degrees
  logo.direction = Math.random() * Math.PI * 2;

  // this number will be used to modify the direction of the logo over time
  logo.turningSpeed = Math.random() - 0.8;

  // create a random speed for the logo between 0 - 2
  logo.speed = 2 + (Math.random() * 2);

  // finally we push the logo into the logos array so it it can be easily accessed later
  app.stage.addChild(logo);
  return logo;
});

// create a bounding box for the little logos
const logoBoundsPadding = 100;
const logoBounds = new PIXI.Rectangle(
  -logoBoundsPadding,
  -logoBoundsPadding,
  app.screen.width + (logoBoundsPadding * 2),
  app.screen.height + (logoBoundsPadding * 2),
);

app.ticker.add(() => {
  // iterate through the logos and update their position
  for (let i = 0; i < logos.length; i += 1) {
    const logo = logos[i];
    logo.direction += logo.turningSpeed * 0.01;
    logo.x += Math.sin(logo.direction) * logo.speed;
    logo.y += Math.cos(logo.direction) * logo.speed;

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
  }
});
