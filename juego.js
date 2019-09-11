function onDocumentMouseDown(event) {
    event.preventDefault();
}



var projector = new THREE.Projector();



var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);



projector.unprojectVector(vector, camera);
var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());


var intersects = raycaster.intersectObjects(objects);


if (intersects.length > 0) {
        intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
}