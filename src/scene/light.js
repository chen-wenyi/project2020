import {
  AmbientLight,
  DirectionalLight,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
} from 'three';

class Light {
  constructor() {
    this.instances = {};
  }

  init() {
    const ambientLight = new AmbientLight(0xffffff, 0.8);
    const shadowLight = new DirectionalLight(0xffffff, 0.3);

    shadowLight.position.set(10, 30, 20);
    const basicMaterial = new MeshBasicMaterial({ color: 0xf5f5f5 });
    const shadowTarget = new Mesh(new PlaneGeometry(0.1, 0.1), basicMaterial);
    shadowTarget.visible = false;
    shadowTarget.name = 'shadowTarget';

    shadowLight.target = shadowTarget;
    shadowLight.castShadow = true;

    shadowLight.shadow.camera.near = 0.5;
    shadowLight.shadow.camera.far = 500;
    shadowLight.shadow.camera.left = -100;
    shadowLight.shadow.camera.right = 100;
    shadowLight.shadow.camera.top = 100;
    shadowLight.shadow.camera.bottom = -100;
    shadowLight.shadow.mapSize.width = 1024;
    shadowLight.shadow.mapSize.height = 1024;

    this.instances.ambientLight = ambientLight;
    this.instances.shadowLight = shadowLight;
    this.instances.shadowTarget = shadowTarget;
  }
}

export default new Light();
