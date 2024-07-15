// Import necessary modules and classes from Three.js
import * as THREE from 'three';

// width and height of the canvas
const w = window.innerWidth;
const h = window.innerHeight;

// Create a new WebGL context
const renderer = new THREE.WebGLRenderer({ antialias: true });
// Set the canvas size
renderer.setSize(w, h);
//append the renderer to the DOM
document.body.appendChild(renderer.domElement);

// create a prespective camera
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
// create a scene
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// set the camera position
camera.position.z = 5;
// camera.position.x = 2;
// camera.position.y = 3;

// create a scene
const scene = new THREE.Scene();

// create a sphera geometry
const geometry = new THREE.IcosahedronGeometry(1.0, 2);
// create a material with a azur color
const mat = new THREE.MeshBasicMaterial({
    color: 0x4488ff
});

// create a mesh with the geometry and material
const mesh = new THREE.Mesh(geometry, mat);
// add the mesh to the scene
scene.add(mesh);


// animate the scene

function animate() {
    // api call the animate function again after the next frame of the animation
    requestAnimationFrame(animate);

    // rotate the mesh
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    // render the scene to the canvas from the perspective of the camera
    renderer.render(scene, camera);
}
animate();