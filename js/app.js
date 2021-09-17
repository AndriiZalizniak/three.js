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
    this.objects.push(this.solarSystem);

    this.sunTexture = new THREE.TextureLoader().load(SunTextureImg);
    this.sunGeometry = new THREE.SphereGeometry(200, 62, 60);
    this.sunMaterial = new THREE.MeshBasicMaterial({
      map: this.sunTexture
    });
    this.sun = new THREE.Mesh(this.sunGeometry, this.sunMaterial);
    this.solarSystem.add(this.sun);
    this.objects.push(this.sun);

    this.mercuryTexture = new THREE.TextureLoader().load(MercuryTextureImg);
    this.mercuryGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.mercuryMaterial = new THREE.MeshBasicMaterial({
      map: this.mercuryTexture
    });
    this.mercury = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial);
    this.mercury.position.x = 300;
    this.solarSystem.add(this.mercury);
    this.objects.push(this.mercury);

    this.venusTexture = new THREE.TextureLoader().load(VenusTextureImg);
    this.venusGeometry = new THREE.SphereGeometry(3, 50, 50);
    this.venusMaterial = new THREE.MeshBasicMaterial({
      map: this.venusTexture
    });
    this.venus = new THREE.Mesh(this.venusGeometry, this.venusMaterial);
    this.venus.position.x = 300;
    this.venus.position.z = 300;
    // this.venus.position.y = 100;
    this.solarSystem.add(this.venus);
    this.objects.push(this.venus);


    //
    this.earthTexture = new THREE.TextureLoader().load(EarthTextureImg);
    this.earthGeometry = new THREE.SphereGeometry(3, 50, 50);
    this.earthMaterial = new THREE.MeshBasicMaterial({
      map: this.earthTexture
    });
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial);
    this.earth.position.x = 450;
    this.earth.position.z = 250;
    // this.earth.position.y = -100;
    this.solarSystem.add(this.earth);
    this.objects.push(this.earth);
    // 
    this.earthSystem = new THREE.Object3D();
    this.earth.add(this.earthSystem);
    this.objects.push(this.earthSystem);

    this.moonTexture = new THREE.TextureLoader().load(MoonTextureImg);
    this.moonGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.moonMaterial = new THREE.MeshBasicMaterial({
      map: this.moonTexture
    });
    this.moon = new THREE.Mesh(this.moonGeometry, this.moonMaterial);
    this.moon.position.x = 10;
    this.earthSystem.add(this.moon);
    this.objects.push(this.moon);

    this.marsTexture = new THREE.TextureLoader().load(MarsTextureImg);
    this.marsGeometry = new THREE.SphereGeometry(2.5, 50, 50);
    this.marsMaterial = new THREE.MeshBasicMaterial({
      map: this.marsTexture
    });
    this.mars = new THREE.Mesh(this.marsGeometry, this.marsMaterial);
    this.mars.position.x = 550;
    // this.mars.position.y = 584;
    this.mars.position.z = 650;
    // this.mars.position.y = -134;
    this.solarSystem.add(this.mars);
    this.objects.push(this.mars);

    this.jupiterTexture = new THREE.TextureLoader().load(JupiterTextureImg);
    this.jupiterGeometry = new THREE.SphereGeometry(25, 50, 50);
    this.jupiterMaterial = new THREE.MeshBasicMaterial({
      map: this.jupiterTexture
    });
    this.jupiter = new THREE.Mesh(this.jupiterGeometry, this.jupiterMaterial);
    this.jupiter.position.x = 800;
    // this.jupiter.position.y = 400;
    this.jupiter.position.z = -300;
    // this.jupiter.position.y = 234;
    this.solarSystem.add(this.jupiter);
    this.objects.push(this.jupiter);

    this.saturnTexture = new THREE.TextureLoader().load(SaturnTextureImg);
    this.saturnGeometry = new THREE.SphereGeometry(20, 50, 50);
    this.saturnMaterial = new THREE.MeshBasicMaterial({
      map: this.saturnTexture
    });
    this.saturn = new THREE.Mesh(this.saturnGeometry, this.saturnMaterial);
    this.saturn.position.x = 950;
    this.saturn.position.z = 250;
    // this.saturn.position.y = 234;
    this.solarSystem.add(this.saturn);
    this.objects.push(this.saturn);

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
    this.uranus.position.z = -200;
    // this.uranus.position.y = 234;
    this.solarSystem.add(this.uranus);
    this.objects.push(this.uranus);

    this.neptuneTexture = new THREE.TextureLoader().load(NeptuneTextureImg);
    this.neptuneGeometry = new THREE.SphereGeometry(9, 50, 50);
    this.neptuneMaterial = new THREE.MeshBasicMaterial({
      map: this.neptuneTexture
    });
    this.neptune = new THREE.Mesh(this.neptuneGeometry, this.neptuneMaterial);
    this.neptune.position.x = 1200;
    this.neptune.position.z = 200;
    // this.neptune.position.y = 234;
    this.solarSystem.add(this.neptune);
    this.objects.push(this.neptune);

    this.plutoTexture = new THREE.TextureLoader().load(PlutoTextureImg);
    this.plutoGeometry = new THREE.SphereGeometry(1, 50, 50);
    this.plutoMaterial = new THREE.MeshBasicMaterial({
      map: this.plutoTexture
    });
    this.pluto = new THREE.Mesh(this.plutoGeometry, this.plutoMaterial);
    this.pluto.position.x = 1300;
    this.pluto.position.z = -300;
    // this.pluto.position.y = 234;
    this.solarSystem.add(this.pluto);
    this.objects.push(this.pluto);


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
    this.time += 0.005;

    this.sun.rotation.y = this.time / 6 * -1;
    this.solarSystem.rotation.y = this.time / 10;

    this.mercury.rotation.x = this.time * 10;
    this.venus.rotation.x = this.time * 3;
    // this.earth.rotation.x = this.time / 2;
    this.earth.rotation.y = this.time * 2 * -1;
    this.earthSystem.rotation.y = this.time * 4 - 1;
    this.moon.rotation.y = this.time * 2 * -1;
    this.mars.rotation.x = this.time * 2.5 * -1;
    this.jupiter.rotation.y = this.time / 3;
    this.saturn.rotation.y = this.time / 2 * -1;
    this.uranus.rotation.y = this.time / 4 * -1;
    this.neptune.rotation.y = this.time * -1;
    this.pluto.rotation.y = this.time * 3;

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