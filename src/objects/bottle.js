import bottleConf from '../../confs/bottle-conf';
import {
  Object3D,
  MeshPhongMaterial,
  OctahedronGeometry,
  Mesh,
  CylinderGeometry,
  SphereGeometry,
} from 'three';

class Bottle {
  constructor() {}
  init() {
    this.obj = new Object3D();
    this.obj.name = 'bottle';
    this.obj.position.set(
      bottleConf.initPosition.x,
      bottleConf.initPosition.y + 30,
      bottleConf.initPosition.z
    );

    this.bottle = new Object3D();
    const basicMaterial = new MeshPhongMaterial({
      color: 0x800080,
    });

    const headRadius = bottleConf.headRadius;

    this.head = new Mesh(
      new OctahedronGeometry(headRadius * 1.4),
      basicMaterial
    );
    this.head.position.set(0, 3.57143 * headRadius, 0);

    let bottom = new Mesh(
      new CylinderGeometry(
        0.88 * headRadius,
        1.27 * headRadius,
        2.68 * headRadius,
        20
      ),
      basicMaterial
    );

    bottom.castShadow = true;

    let middle = new Mesh(
      new CylinderGeometry(headRadius, 0.88 * headRadius, 1.2 * headRadius, 20),
      basicMaterial
    );

    middle.castShadow = true;

    middle.position.set(0, 1.3857 * headRadius, 0);

    const topGeometry = new SphereGeometry(headRadius / 1.4, 20, 20);
    topGeometry.scale(1, 0.54, 1);
    let top = new Mesh(topGeometry, basicMaterial);
    top.castShadow = true;
    top.position.set(0, 1.8143 * headRadius, 0);

    this.body = new Object3D();
    this.body.add(top);
    this.body.add(middle);
    this.body.add(bottom);

    this.bottle.add(this.head);
    this.bottle.add(this.body);
    this.obj.add(this.bottle);
  }
}

export default new Bottle();
