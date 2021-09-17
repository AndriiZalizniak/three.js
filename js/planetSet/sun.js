import * as THREE from 'three';
import SunTextureImg from '../../img/sun-texure.png';

export default class Sun {
  constructor(options) {
    this.sunTexture = new THREE.TextureLoader().load(SunTextureImg);
    this.sunGeometry = new THREE.SphereGeometry(200, 62, 60);
    this.sunMaterial = new THREE.MeshBasicMaterial({
      map: this.sunTexture
    });
    this.sun = new THREE.Mesh(this.sunGeometry, this.sunMaterial);
    this.solarSystem.add(this.sun);
    this.objects.push(this.sun);
  }
};

new Sun();