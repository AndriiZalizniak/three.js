import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

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


export default class Sketch {
  constructor(options) {
    this.time = 0;
    this.container = options.dom;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.objects = [];

    this.camera = new THREE.PerspectiveCamera(10, this.width / this.height, 0.1, 100000);
    this.camera.position.z = 900;
    this.camera.position.y = 100;
    this.camera.position.x = 2700;

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({
      antialias: false
    });
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

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
    this.solarSystem = new THREE.Object3D();
    this.scene.add(this.solarSystem);
    this.mercurySystem = new THREE.Object3D();
    this.scene.add(this.mercurySystem);
    this.venusSystem = new THREE.Object3D();
    this.scene.add(this.venusSystem);
    this.earthSystem = new THREE.Object3D();
    this.scene.add(this.earthSystem);
    this.marsSystem = new THREE.Object3D();
    this.scene.add(this.marsSystem);
    this.jupiterSystem = new THREE.Object3D();
    this.scene.add(this.jupiterSystem);
    this.saturnSystem = new THREE.Object3D();
    this.scene.add(this.saturnSystem);
    this.uranusSystem = new THREE.Object3D();
    this.scene.add(this.uranusSystem);
    this.neptuneSystem = new THREE.Object3D();
    this.scene.add(this.neptuneSystem);
    this.plutoSystem = new THREE.Object3D();
    this.plutoSystem.rotateX(1.7);
    this.scene.add(this.plutoSystem);


    this.color = 'yellow';
    this.intensity = 1;
    this.light = new THREE.AmbientLight(this.color, this.intensity, 0, 2);
    this.light.position.set(0, 0, 0);
    // this.light.target.position.set(0, 0, 0);
    this.scene.add(this.light);
    // this.scene.add(this.light.target);

    this.helper = new THREE.PointLightHelper(this.light);
    this.scene.add(this.helper);

    this.sunTexture = new THREE.TextureLoader().load(SunTextureImg);
    this.sunGeometry = new THREE.SphereGeometry(200, 62, 60);
    this.sunMaterial = new THREE.MeshBasicMaterial({
      map: this.sunTexture
    });
    this.sun = new THREE.Mesh(this.sunGeometry, this.sunMaterial);
    this.solarSystem.add(this.sun);
    // this.objects.push(this.sun);

    this.mercuryTexture = new THREE.TextureLoader().load(MercuryTextureImg);
    this.mercuryGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.mercuryMaterial = new THREE.MeshBasicMaterial({
      map: this.mercuryTexture,
    });
    this.mercury = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial);
    this.mercury.position.x = 260;
    this.mercury.position.z = 100;
    this.mercurySystem.add(this.mercury);
    // this.objects.push(this.mercury);

    this.venusTexture = new THREE.TextureLoader().load(VenusTextureImg);
    this.venusGeometry = new THREE.SphereGeometry(3, 50, 50);
    this.venusMaterial = new THREE.MeshBasicMaterial({
      map: this.venusTexture
    });
    this.venus = new THREE.Mesh(this.venusGeometry, this.venusMaterial);
    this.venus.position.x = 400;
    this.venus.position.z = 200;
    // this.venus.position.y = 100;
    this.venusSystem.add(this.venus);
    // this.objects.push(this.venus);

    this.earthTexture = new THREE.TextureLoader().load(EarthTextureImg);
    this.earthGeometry = new THREE.SphereGeometry(3, 50, 50);
    this.earthMaterial = new THREE.MeshBasicMaterial({
      map: this.earthTexture
    });
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial);
    this.earth.position.x = 500;
    // this.earth.position.z = 500;
    this.solarSystem.add(this.earth);
    // this.objects.push(this.earth);
    // 
    this.earthSystemLocal = new THREE.Object3D();
    this.earth.add(this.earthSystemLocal);
    // this.objects.push(this.earthSystemLocal);

    this.moonTexture = new THREE.TextureLoader().load(MoonTextureImg);
    this.moonGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.moonMaterial = new THREE.MeshBasicMaterial({
      map: this.moonTexture
    });
    this.moon = new THREE.Mesh(this.moonGeometry, this.moonMaterial);
    this.moon.position.x = 10;
    this.earthSystemLocal.add(this.moon);
    // this.objects.push(this.moon);

    this.marsTexture = new THREE.TextureLoader().load(MarsTextureImg);
    this.marsGeometry = new THREE.SphereGeometry(2.5, 50, 50);
    this.marsMaterial = new THREE.MeshBasicMaterial({
      map: this.marsTexture
    });
    this.mars = new THREE.Mesh(this.marsGeometry, this.marsMaterial);
    this.mars.position.x = 600;
    // this.mars.position.y = 584;
    // this.mars.position.z = 650;
    // this.mars.position.y = -134;
    this.marsSystem.add(this.mars);
    // this.objects.push(this.mars);

    this.sunRingGeometry = new THREE.RingBufferGeometry(670, 720, 100, 32);
    this.sunRingTexture = new THREE.TextureLoader().load(SunRingTextureImg);
    this.sunRingMaterial = new THREE.MeshBasicMaterial({
      color: 'grey',
      // map: sunRingTexture,
      side: THREE.DoubleSide,
      transparent: true
    });
    this.sunRing = new THREE.Mesh(this.sunRingGeometry, this.sunRingMaterial);
    this.sunRing.rotateX(1.5);
    this.solarSystem.add(this.sunRing);

    this.jupiterTexture = new THREE.TextureLoader().load(JupiterTextureImg);
    this.jupiterGeometry = new THREE.SphereGeometry(25, 50, 50);
    this.jupiterMaterial = new THREE.MeshBasicMaterial({
      map: this.jupiterTexture
    });
    this.jupiter = new THREE.Mesh(this.jupiterGeometry, this.jupiterMaterial);
    this.jupiter.position.x = 800;
    this.jupiter.position.z = 100;

    this.jupiterSystem.add(this.jupiter);
    // this.objects.push(this.jupiter);

    this.saturnTexture = new THREE.TextureLoader().load(SaturnTextureImg);
    this.saturnGeometry = new THREE.SphereGeometry(20, 50, 50);
    this.saturnMaterial = new THREE.MeshBasicMaterial({
      map: this.saturnTexture
    });
    this.saturn = new THREE.Mesh(this.saturnGeometry, this.saturnMaterial);
    this.saturn.position.x = 950;
    this.saturn.position.z = 350;
    // this.saturn.position.y = 234;
    this.saturnSystem.add(this.saturn);
    // this.objects.push(this.saturn);

    this.saturnRingGeometry = new THREE.RingGeometry(50, 28, 32);
    this.saturnRingMaterial = new THREE.MeshBasicMaterial({
      color: 'grey',
      side: THREE.DoubleSide
    });
    this.saturnRing = new THREE.Mesh(this.saturnRingGeometry, this.saturnRingMaterial);
    this.saturnRing.rotateX(1.6);
    this.saturn.add(this.saturnRing);

    this.uranusTexture = new THREE.TextureLoader().load(UranusTextureImg);
    this.uranusGeometry = new THREE.SphereGeometry(10, 50, 50);
    this.uranusMaterial = new THREE.MeshBasicMaterial({
      map: this.uranusTexture
    });
    this.uranus = new THREE.Mesh(this.uranusGeometry, this.uranusMaterial);
    this.uranus.position.x = 1100;
    this.uranus.position.z = -400;
    // this.uranus.position.y = 234;
    this.uranusSystem.add(this.uranus);
    // this.objects.push(this.uranus);

    this.neptuneTexture = new THREE.TextureLoader().load(NeptuneTextureImg);
    this.neptuneGeometry = new THREE.SphereGeometry(9, 50, 50);
    this.neptuneMaterial = new THREE.MeshBasicMaterial({
      map: this.neptuneTexture
    });
    this.neptune = new THREE.Mesh(this.neptuneGeometry, this.neptuneMaterial);
    this.neptune.position.x = 1200;
    this.neptune.position.z = 600;
    // this.neptune.position.y = 234;
    this.neptuneSystem.add(this.neptune);
    // this.objects.push(this.neptune);

    this.plutoTexture = new THREE.TextureLoader().load(PlutoTextureImg);
    this.plutoGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.plutoMaterial = new THREE.MeshBasicMaterial({
      map: this.plutoTexture
    });
    this.pluto = new THREE.Mesh(this.plutoGeometry, this.plutoMaterial);
    this.pluto.position.x = 1300;
    this.pluto.position.z = -500;
    // this.pluto.position.y = 234;
    this.plutoSystem.add(this.pluto);
    // this.objects.push(this.pluto);


    this.sceneTexture = new THREE.TextureLoader().load(SceneTextureImg);
    this.scene.background = this.sceneTexture;

    // this.color = "red";
    // this.intensity = 3;
    // this.light = new THREE.PointLight(this.color, this.intensity);
    // this.light.position.set(0, 10, 0);
    // this.light.distance = 1500;
    // this.solarSystem.add(this.light);

  }

  render() {
    this.time += 0.001;

    // this.solarSystem.rotation.y = this.time * 100;
    this.mercurySystem.rotation.y = this.time / 0.241 * -1;
    this.venusSystem.rotation.y = this.time / 0.615 * -1;
    this.earthSystem.rotation.y = this.time * 100 * -1;
    this.marsSystem.rotation.y = this.time / 1.88 * -1;
    this.jupiterSystem.rotation.y = this.time / 11.857 * -1;
    this.saturnSystem.rotation.y = this.time / 29.4 * -1;
    this.uranusSystem.rotation.y = this.time / 82.02 * -1;
    this.neptuneSystem.rotation.y = this.time / 164.79 * -1;
    this.plutoSystem.rotation.y = this.time / 247.92;


    this.sun.rotation.y = this.time / 2;
    this.mercury.rotation.y = this.time * 10 / 58 * -1;
    this.venus.rotation.y = this.time * 243 / 243;
    this.earth.rotation.y = this.time * 10 * -1;
    this.earthSystemLocal.rotation.y = this.time * 120 - 1;
    this.mars.rotation.y = this.time * 10 * 0.26 * -1;
    this.jupiter.rotation.y = this.time * 10 / 0.414 * -1;
    this.saturn.rotation.y = this.time * 10 / 0.444 * -1;
    this.uranus.rotation.y = this.time * 10 / 0.720;
    this.neptune.rotation.y = this.time * 10 / 0.671 * -1;
    this.pluto.rotation.y = this.time * 10 / 6.387 * -1;

    // this.objects.forEach((obj, i) => {
    // obj.rotation.y = this.time / 100 * Math.PI;
    // });

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch({
  dom: document.getElementById('container')
});