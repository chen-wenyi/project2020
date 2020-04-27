import sceneConf from '../../confs/scene-conf';
import { OrthographicCamera, Vector3 } from 'three';

class Camera {
  constructor() {
    this.instance = null;
  }

  init() {
    const aspect = window.innerHeight / window.innerWidth;
    this.instance = new OrthographicCamera(
      -sceneConf.frustumSize,
      sceneConf.frustumSize,
      sceneConf.frustumSize * aspect,
      -sceneConf.frustumSize * aspect,
      -100,
      85
    );
    this.instance.position.set(-10, 10, 10);
    this.target = new Vector3(0, 0, 0);
    this.instance.lookAt(this.target);
  }
}

export default new Camera();
