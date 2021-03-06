import { scene } from './scene';
import Cuboid from './block/cuboid';
import Cylinder from './block/cylinder';
import ground from './objects/ground';
import bottle from './objects/bottle';

new Game().init();
class Game {
  constructor() {}

  init() {
    this.scene = scene;
    this.ground = ground;
    this.bottle = bottle;
    this.scene.init();
    this.ground.init();
    this.bottle.init();
    this.addGround();
    this.addInitBlock();
    this.addBottle();
    this.render();
  }

  render() {
    this.scene.render();
    requestAnimationFrame(this.render.bind(this));
  }

  addGround() {
    this.scene.instance.add(this.ground.instance);
  }

  addInitBlock() {
    const cuboidBlock = new Cuboid(-15, 0, 0);
    const cylinderBlock = new Cylinder(23, 0, 0);
    this.scene.instance.add(cuboidBlock.instance);
    this.scene.instance.add(cylinderBlock.instance);
  }

  addBottle() {
    this.scene.instance.add(this.bottle.obj);
  }
}
