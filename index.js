// // Import necessary modules and classes from Three.js
// import * as THREE from "three";
// // Import orbite controller
// import { OrbitControls } from "jsm/controls/OrbitControls.js";

// width and height of the canvas
const w = window.innerWidth;
const h = window.innerHeight;

// // Create a new WebGL context
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// // Set the canvas size
// renderer.setSize(w, h);
// //append the renderer to the DOM
// document.body.appendChild(renderer.domElement);

// // create a prespective camera
// const fov = 75;
// const aspect = w / h;
// const near = 0.1;
// const far = 10;
// // create a scene
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// // set the camera position
// camera.position.z = 2;
// // camera.position.x = 2;
// // camera.position.y = 3;

// // create a scene
// const scene = new THREE.Scene();

// // create an OrbitControls object
// const controls = new OrbitControls(camera, renderer.domElement);
// // enable damping for better performance
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// // create a sphera geometry
// const geometry = new THREE.IcosahedronGeometry(1.0, 2);
// // create a material with a azur color
// const mat = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   flatShading: true,
// });

// // create a mesh with the geometry and material
// const mesh = new THREE.Mesh(geometry, mat);
// // add the mesh to the scene
// scene.add(mesh);

// // create a wireframe material
// const wireMat = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
//   wireframe: true,
// })
// // create a wireframe mesh with the same geometry and wireframe material
// const wireMesh = new THREE.Mesh(geometry, wireMat);
// // add the wireframe mesh as a child of the main mesh
// mesh.add(wireMesh);
// // light the scene
// const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500, 1);
// scene.add(hemiLight);
// // animate the scene
// function animate() {
//   // api call the animate function again after the next frame of the animation
//   requestAnimationFrame(animate);
//   // rotate the mesh
//   mesh.rotation.y += 0.001;
//   // render the scene to the canvas from the perspective of the camera
//   renderer.render(scene, camera);
//   // required after each render for OrbitControls
//   controls.update();
// }
// animate();

import * as THREE from "three";

//base
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 50);

//geometries
const geometry = new THREE.TorusGeometry(20, 2, 8, 20);
const geometry1 = new THREE.IcosahedronGeometry(10, 2);

//materials
const mat1 = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
});
const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});

//adding
const mesh = new THREE.Mesh(geometry, wireMat);
const mesh1 = new THREE.Mesh(geometry1, mat1);
const wireMesh = new THREE.Mesh(geometry1, wireMat);
mesh1.add(wireMesh);
mesh.rotation.x = 90;
scene.add(mesh, mesh1);

//light
const light = new THREE.HemisphereLight(0x000fff, 0xaa5500, 1);
scene.add(light);

//animation function
function animate() {
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.005;
  mesh1.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
