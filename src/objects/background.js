import { PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';
import sceneConf from '../../confs/scene-conf';

class Background {
  constructor() {}

  init() {
    const geometry = new PlaneGeometry(
      sceneConf.frustumSize * 2,
      (window.innerHeight / window.innerWidth) * sceneConf.frustumSize * 2
    );
    const material = new MeshBasicMaterial({
      color: 0xd7dbe6,
      transparent: true,
      opacity: 1,
    });

    this.instance = new Mesh(geometry, material);
  }
}

export default new Background();
