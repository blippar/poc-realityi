AFRAME.registerComponent('floorshadow', {
    schema: {
        opacity: { default: 0.5 }
    },  
    init: function() {
        let el = this.el;
        let self = this;
        let mesh = el.getObject3D('mesh');
        if (!mesh) { return; }
        mesh.material = new THREE.ShadowMaterial();
        mesh.material.opacity = this.data.opacity;
    }
});
AFRAME.registerComponent('nocull', {
  init() {
      this.el.addEventListener("model-loaded", this.update.bind(this));
  },
  update() {
      const mesh = this.el.getObject3D("mesh");
      if (!mesh) {
          return;
      }
      mesh.traverse(function(node) {
          if (node.isMesh) {
              node.frustumCulled = false;
          }
      });
  },
});
AFRAME.registerComponent("eq-env-map", {
  schema: {
      map: { default: './images/envmap.jpg' }
  },  
  init: function () {
      this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function () {
      const mesh = this.el.getObject3D('mesh');
      const currentData = this.data;
      var texture = new THREE.TextureLoader().load(currentData.map, function () {
          const sceneEl = document.querySelector("a-scene");
          var targetCube = new THREE.WebGLCubeRenderTarget(512);
          var renderer = sceneEl.renderer;
          var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
          if (mesh === undefined) return;
          mesh.traverse(function (node) {
              if (node.material) {
                  node.material.envMap = cubeTex.texture;
                  node.material.envMap.intensity = 1;
                  node.material.needsUpdate = true;
              }
          });
      });
  }
});