import { PlaneGeometry, ShadowMaterial, Mesh } from 'three';

class Ground {
  constructor() {}

  init() {
    const groundGeometry = new PlaneGeometry(200, 200);
    const material = new ShadowMaterial({
      transparent: true,
      color: 0x000000,
      opacity: 0.3,
    });
    this.instance = new Mesh(groundGeometry, material);
    this.instance.rotation.x = -Math.PI / 2;
    this.instance.position.y = -16 / 3.2;

    this.instance.receiveShadow = true;
  }
}

export default new Ground();
