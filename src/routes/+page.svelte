<script lang="ts">
	import hero from '/src/assets/hero.webp';
	import type { LottiePlayer } from '@lottiefiles/lottie-player';
	import { icons } from 'feather-icons';
	import { slide } from 'svelte/transition';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import QE from '$lib/components/QE.svelte';
	import bin from '../assets/scene.bin';
	import thinker from '../assets/scene.gltf';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import Ripple from '$lib/components/Ripple.svelte';
	import LottieSection from '$lib/components/Anims.svelte';
	import Anims from '$lib/components/Anims.svelte';
	let lottiePlayer = $state<LottiePlayer | null>(null);
</script>

<svelte:head>
	<style>
		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes pulse-1 {
			0%,
			100% {
				transform: scale(1);
				opacity: 0.8;
			}
			50% {
				transform: scale(1.05);
				opacity: 1;
			}
		}

		@keyframes pulse-2 {
			0%,
			100% {
				transform: scale(1.05);
				opacity: 1;
			}
			50% {
				transform: scale(1);
				opacity: 0.8;
			}
		}

		@keyframes pulse-3 {
			0%,
			100% {
				transform: scale(1);
				opacity: 0.9;
			}
			33% {
				transform: scale(1.03);
				opacity: 1;
			}
			66% {
				transform: scale(0.97);
				opacity: 0.8;
			}
		}

		.it-circle {
			animation: rotate 20s linear infinite;
			transform-origin: center;
		}

		.it-circle:nth-child(1) {
			animation:
				rotate 25s linear infinite,
				pulse-1 4s ease-in-out infinite;
		}

		.it-circle:nth-child(2) {
			animation:
				rotate 20s linear infinite reverse,
				pulse-2 5s ease-in-out infinite;
		}

		.it-circle:nth-child(3) {
			animation:
				rotate 15s linear infinite,
				pulse-3 6s ease-in-out infinite;
		}

		.it-pulse {
			animation: pulse-1 4s ease-in-out infinite;
		}
	</style>
</svelte:head>

<main class="relative">
	<section class="h-screen relative z-10">
		<img
			src={hero}
			alt="Depiction of ancient philosopher's head as a statue"
			class="absolute inset-0 w-full h-full object-cover"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
			style="--tw-gradient-from-position: 70%; --tw-gradient-via-position: 90%; --tw-gradient-to-position: 100%;"
		></div>
		<div class="container pl-10 relative z-10 h-full flex flex-col pt-12">
			<h1 class="text-9xl font-bold font-unbounded mb-4">This.</h1>
			<div class="text-lg font-unbounded">
				<h2>Think. Reflect. Evolve.</h2>
				<p class="text-xl font-poppins font-extralight mt-4 max-w-sm">
					Enlightening Journeys in Mindfulness and Thought.
				</p>
			</div>
		</div>
	</section>

	<div class="relative bg-white overflow-hidden">
		<section class="relative z-10">
			<div class="container mx-auto px-4 min-h-[70vh] flex items-center justify-around">
				<div class="mb-12 max-w-2xl">
					<h2 class="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
						Discover Your Path to Personal Growth
					</h2>
					<p class="text-xl mb-8 opacity-90 text-gray-600">
						Embark on a journey of self-discovery with "It", your AI companion. Explore
						philosophical questions, gain personalized insights, and unlock your potential.<br /><br
						/> Here we blend timeless insights with modern psychology to provide you with a personalized
						and adaptive learning experience.
					</p>
					<div class="flex space-x-4">
						<button
							class="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
						>
							Get Started
						</button>
						<button
							class="border-2 border-black text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition duration-300"
						>
							Learn More
						</button>
					</div>
				</div>
				<Ripple />
			</div>
		</section>

		<!-- Features Grid -->
		<section class="py-20">
			<div class="container mx-auto px-4">
				<h2 class="text-4xl font-bold mb-12 text-center">Key Features</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<FeatureCard
						title="Personalized Insights"
						description="Tailored recommendations based on your responses to philosophical questions."
						icon={icons.user}
					/>
					<FeatureCard
						title="Adaptive Learning"
						description="Continuously evolving journey based on your progress and interests."
						icon={icons['trending-up']}
					/>
					<FeatureCard
						title="Emotional Intelligence"
						description="EQ coaching to help you understand and manage your emotions effectively."
						icon={icons.heart}
					/>
					<FeatureCard
						title="Virtual Debates"
						description="Engage in thought-provoking discussions with AI-powered historical philosophers."
						icon={icons['message-circle']}
					/>
					<FeatureCard
						title="Mindfulness Assistant"
						description="Guided meditation and exercises adapted to your stress levels and preferences."
						icon={icons.sun}
					/>
					<FeatureCard
						title="Progress Tracking"
						description="Visual insights and milestone celebrations to monitor your growth journey."
						icon={icons['bar-chart-2']}
					/>
				</div>
			</div>
		</section>

		<!-- Call to Action -->
		<section class="py-20">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
				<button
					class="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
				>
					Begin Now
				</button>
			</div>
		</section>

		<!-- Modified Question Everything section -->
		<section class="py-20">
			<div class="container mx-auto px-4 flex items-center">
				<div class="w-full pr-8 relative">
					<QE />
				</div>
			</div>
		</section>
		<Anims />
	</div>
</main>
