import BaseBlock from './base';
import { CylinderGeometry, MeshPhongMaterial, Mesh } from 'three';

export default class Cylinder extends BaseBlock {
  constructor(x, y, z, width) {
    super('cylinder');
    const size = width || this.width;
    const geometry = new CylinderGeometry(size / 2, size / 2, this.height, 120);
    const material = new MeshPhongMaterial({
      color: 0xffffff,
    });
    this.instance = new Mesh(geometry, material);
    this.instance.name = 'block';
    this.x = x;
    this.y = y;
    this.z = z;
    this.instance.position.set(x, y, z);

    this.instance.receiveShadow = true;
    this.instance.castShadow = true;
  }
}
