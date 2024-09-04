<script lang="ts">
import { onMount } from 'svelte';
import * as THREE from 'three';

let canvas: HTMLCanvasElement;

onMount(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  const resizeRenderer = () => {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.7; // Reduce height to 70% of viewport
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  window.addEventListener('resize', resizeRenderer);
  resizeRenderer();

  // Create starfield
  const starCount = 20000;
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    vertexColors: true
  });

  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  const speeds = new Float32Array(starCount);

  for (let i = 0; i < starCount * 3; i += 3) {
    positions[i] = Math.random() * 3000 - 1500;
    positions[i + 1] = Math.random() * 3000 - 1500;
    positions[i + 2] = Math.random() * 3000 - 1500;
    speeds[i / 3] = Math.random() * 1 + 0.5;

    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 0.7, Math.random() * 0.2 + 0.8);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const starField = new THREE.Points(starGeometry, starMaterial);
  scene.add(starField);

  // Add gas clouds
  const cloudCount = 10;
  const cloudGeometry = new THREE.BufferGeometry();
  const cloudMaterial = new THREE.PointsMaterial({
    size: 3,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending,
    vertexColors: true
  });

  const cloudPositions = new Float32Array(cloudCount * 5000 * 3);
  const cloudColors = new Float32Array(cloudCount * 5000 * 3);
  const cloudSpeeds = new Float32Array(cloudCount * 5000);

  for (let i = 0; i < cloudCount; i++) {
    const centerX = Math.random() * 3000 - 1500;
    const centerY = Math.random() * 3000 - 1500;
    const centerZ = Math.random() * 3000 - 1500;
    const color = new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5);

    for (let j = 0; j < 5000; j++) {
      const index = i * 5000 * 3 + j * 3;
      cloudPositions[index] = centerX + (Math.random() - 0.5) * 300;
      cloudPositions[index + 1] = centerY + (Math.random() - 0.5) * 300;
      cloudPositions[index + 2] = centerZ + (Math.random() - 0.5) * 300;
      cloudColors[index] = color.r;
      cloudColors[index + 1] = color.g;
      cloudColors[index + 2] = color.b;
      cloudSpeeds[i * 5000 + j] = Math.random() * 0.5 + 0.1;
    }
  }

  cloudGeometry.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
  cloudGeometry.setAttribute('color', new THREE.BufferAttribute(cloudColors, 3));

  const clouds = new THREE.Points(cloudGeometry, cloudMaterial);
  scene.add(clouds);

  // Position camera
  camera.position.z = 1000;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) / 50; // Increased sensitivity
    mouseY = (event.clientY - windowHalfY) / 50; // Increased sensitivity
  });

  const animate = () => {
    requestAnimationFrame(animate);

    targetX = mouseX * 0.003; // Increased effect
    targetY = mouseY * 0.003; // Increased effect

    starField.rotation.y += 0.1 * (targetX - starField.rotation.y);
    starField.rotation.x += 0.1 * (targetY - starField.rotation.x);

    clouds.rotation.y += 0.15 * (targetX - clouds.rotation.y);
    clouds.rotation.x += 0.15 * (targetY - clouds.rotation.x);

    const starPositions = starField.geometry.attributes.position.array;
    const cloudPositions = clouds.geometry.attributes.position.array;

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i + 2] += speeds[i / 3];

      if (starPositions[i + 2] > 1500) {
        starPositions[i + 2] = -1500;
        starPositions[i] = Math.random() * 3000 - 1500;
        starPositions[i + 1] = Math.random() * 3000 - 1500;
      }
    }

    for (let i = 0; i < cloudCount * 5000 * 3; i += 3) {
      cloudPositions[i + 2] += cloudSpeeds[i / 3];

      if (cloudPositions[i + 2] > 1500) {
        cloudPositions[i + 2] = -1500;
        cloudPositions[i] = Math.random() * 3000 - 1500;
        cloudPositions[i + 1] = Math.random() * 3000 - 1500;
      }
    }

    starField.geometry.attributes.position.needsUpdate = true;
    clouds.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  };

  animate();

  return () => {
    window.removeEventListener('resize', resizeRenderer);
    document.removeEventListener('mousemove', () => {});
  };
});
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-[70vh]"></canvas>