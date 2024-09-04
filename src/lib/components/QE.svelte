<script lang="ts">
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import thinker from '../../assets/scene.gltf';

	let container: HTMLDivElement;
	let containerHeight = $state('400px'); // Adjust this value as needed

	$effect(() => {
		if (!container) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = false;

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
		directionalLight.position.set(0, 1, 0);
		scene.add(directionalLight);

		const loader = new GLTFLoader();
		loader.load(
			thinker,
			(gltf) => {
				const model = gltf.scene;
				scene.add(model);

				const box = new THREE.Box3().setFromObject(model);
				const center = box.getCenter(new THREE.Vector3());
				const size = box.getSize(new THREE.Vector3());

				const maxDim = Math.max(size.x, size.y, size.z);
				const fov = camera.fov * (Math.PI / 180);
				let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

				camera.position.z = cameraZ * 1.5;
				const minZ = box.min.z;
				const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

				camera.far = cameraToFarEdge * 3;
				camera.updateProjectionMatrix();

				model.position.x = -center.x;
				model.position.y = -center.y;
				model.position.z = -center.z;

				animate();
			},
			undefined,
			(error) => {
				console.error('An error occurred loading the model:', error);
			}
		);

		function animate() {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		}

		return () => {
			renderer.dispose();
			container.removeChild(renderer.domElement);
		};
	});
</script>

<section class="py-20">
	<div class="mx-auto px-4">
		<h2 class="text-4xl font-bold mb-12 text-center">Question Everything?</h2>
		<div class="flex flex-col md:flex-row items-center justify-between">
			<div class="md:w-1/2 md:pr-8">
				<div class="space-y-6">
					<div class="flex items-start">
						<div
							class="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4"
						>
							1
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2">Daily Philosophical Prompts</h3>
							<p>
								Receive thought-provoking questions to challenge your assumptions and expand your
								perspective.
							</p>
						</div>
					</div>
					<div class="flex items-start">
						<div
							class="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4"
						>
							2
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2">AI-Powered Socratic Dialogue</h3>
							<p>
								Engage in dynamic conversations with an AI that uses the Socratic method to deepen
								your understanding.
							</p>
						</div>
					</div>
					<div class="flex items-start">
						<div
							class="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4"
						>
							3
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2">Belief System Analysis</h3>
							<p>
								Explore and challenge your core beliefs through interactive exercises and
								reflections.
							</p>
						</div>
					</div>
					<div class="flex items-start">
						<div
							class="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4"
						>
							4
						</div>
						<div>
							<h3 class="text-xl font-semibold mb-2">Cognitive Bias Recognition</h3>
							<p>Learn to identify and mitigate cognitive biases in your thinking process.</p>
						</div>
					</div>
				</div>
				<button
					class="mt-8 bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
				>
					Start Questioning
				</button>
			</div>
			<div class="md:w-1/2 mt-8 md:mt-0">
				<div bind:this={container} style="height: {containerHeight}; width: 100%;" class="hover:cursor-pointer"></div>
			</div>
		</div>
	</div>
</section>
