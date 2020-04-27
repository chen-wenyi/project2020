import camera from './camera';
import {
  Scene as TScene,
  WebGLRenderer,
  AxesHelper,
  PCFShadowMap,
} from 'three';
import sceneConf from '../../confs/scene-conf';
import light from './light';
import background from '../objects/background';

class Scene {
  constructor() {
    this.instance = null;
  }

  init() {
    this.instance = new TScene();
    this.renderer = new WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFShadowMap;

    this.camera = camera;
    this.light = light;
    this.camera.init();
    this.light.init();
    this.axesHelper = new AxesHelper(100);

    this.instance.add(this.axesHelper);
    this.instance.add(this.camera.instance);
    for (let ligthType in this.light.instances) {
      this.instance.add(this.light.instances[ligthType]);
    }

    this.background = background;
    this.background.init();
    this.background.instance.position.z = -84;
    this.camera.instance.add(this.background.instance);

    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onResize.bind(this));
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance);
  }

  onResize() {
    const aspect = window.innerHeight / window.innerWidth;
    this.camera.instance.top = sceneConf.frustumSize * aspect;
    this.camera.instance.bottom = -sceneConf.frustumSize * aspect;
    this.camera.instance.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

export default new Scene();
