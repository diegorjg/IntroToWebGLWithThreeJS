var loader = new THREE.JSONLoader(),
mesh;

loader.load('gooseFull.js', function (geometry) {
      var gooseMaterial = new THREE.MeshLambertMaterial({
       map: THREE.ImageUtils.loadTexture('goose.jpg')
   });

   mesh = new THREE.Mesh(geometry, gooseMaterial);
   mesh.scale.set(1000, 1000, 1000);

   scene.add(mesh);
});
