import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

import * as dat from 'dat.gui';



import SunTextureImg from '../img/sun-texure.png';
import MercuryTextureImg from '../img/mercury-texture.jpg';
import VenusTextureImg from '../img/venus-texture.jpg';
import EarthTextureImg from '../img/earth-texture.jpg';
import MoonTextureImg from '../img/moon-texture.jpg';
import MarsTextureImg from '../img/mars-texture.jpg';
import JupiterTextureImg from '../img/jupiter-texture.jpg';
import SaturnTextureImg from '../img/saturn-texture.jpg';
import UranusTextureImg from '../img/uranus-texture.jpg';
import NeptuneTextureImg from '../img/neptune-texture.jpg';
import PlutoTextureImg from '../img/pluto-texure.png';

import SunRingTextureImg from '../img/main-ring.png';
import SceneTextureImg from '../img/scene-background.jpg';

class ColorGUIHelper {
  constructor(object, prop) {
    this.object = object;
    this.prop = prop;
  }
  get value() {
    return `#${this.object[this.prop].getHexString()}`;
  }
  set value(hexString) {
    this.object[this.prop].set(hexString);
  }
}

export default class Sketch {
  constructor(options) {
    this.time = 0;
    this.container = options.dom;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.objects = [];

    this.camera = new THREE.PerspectiveCamera(45, 40, 0.1, 1000);
    this.camera.position.z = 20;

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color('red');

    this.renderer = new THREE.WebGLRenderer({
      antialias: false
    });
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(5, 5, 5);
    this.controls.update();



    this.setupResize();
    this.resize();
    this.addObjects();
    this.render();
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  };

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix()
  }

  addObjects() {

    this.planeSize = 40;

    this.loader = new THREE.TextureLoader();
    this.texture = new THREE.TextureLoader().load(
      '../img/chess-bg.jpg');
    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.magFilter = THREE.NearestFilter;
    this.repeats = this.planeSize / 2;
    this.texture.repeat.set(this.repeats, this.repeats);

    this.planeGeo = new THREE.PlaneGeometry(this.planeSize, this.planeSize);
    this.planeMat = new THREE.MeshPhongMaterial({
      map: this.texture,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(this.planeGeo, this.planeMat);
    this.mesh.rotation.x = Math.PI * -.5;
    this.scene.add(this.mesh);

    this.cubeSize = 4;
    this.cubeGeo = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
    this.cubeMat = new THREE.MeshPhongMaterial({
      color: '#8AC'
    });
    this.cubeMesh = new THREE.Mesh(this.cubeGeo, this.cubeMat);
    this.cubeMesh.position.set(this.cubeSize + 1, this.cubeSize / 2, 0);
    this.scene.add(this.cubeMesh);

    this.sphereRadius = 3;
    this.sphereWidthDivisions = 32;
    this.sphereHeightDivisions = 16;
    this.sphereGeo = new THREE.SphereGeometry(this.sphereRadius, this.sphereWidthDivisions, this.sphereHeightDivisions);
    this.sphereMat = new THREE.MeshPhongMaterial({
      color: '#CA8'
    });
    this.sphereMesh = new THREE.Mesh(this.sphereGeo, this.sphereMat);
    this.sphereMesh.position.set(-this.sphereRadius - 1, this.sphereRadius + 2, 0);
    this.scene.add(this.sphereMesh);

    this.color = '0xFFFFFF';
    this.intensity = 1;
    this.light = new THREE.DirectionalLight(this.color, this.intensity);
    this.light.position.set(0, 10, 0);
    this.light.target.position.set(-5, 0, 0);
    this.scene.add(this.light);
    this.scene.add(this.light.target);
    this.scene.add(this.light);

    // this.gui = new dat.GUI();
    // this.gui.add(this.light, 'intensity', 0, 2, 0.01);
    // this.gui.add(this.light.target.position, 'x', -10, 10);
    // this.gui.add(this.light.target.position, 'z', -10, 10);
    // this.gui.add(this.light.target.position, 'y', 0, 10);

    // this.helper = new THREE.DirectionalLightHelper(this.light);
    // this.scene.add(this.helper);
  }

  render() {
    this.time += 0.005;


    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch({
  dom: document.getElementById('container')
});