<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import psych from '../../assets/psychonaut.json';
	import meta from '../../assets/meta.json';
	import mindful from '../../assets/mindful.json';

	const anims = [psych, meta, mindful];
	const animNames = ['Philosophy', 'Psychology', 'Mindfulness'];
	const descriptions = [
		"Explore the fundamental nature of knowledge, reality, and existence.",
		"Understand the human mind and behavior through scientific study.",
		"Practice present-moment awareness and non-judgmental observation."
	];

	let lottiePlayer: any;
	let lottieLoaded = $state(false);

	onMount(async () => {
		if (browser) {
			const module = await import('@lottiefiles/lottie-player');
			lottiePlayer = module.LottiePlayer;
			if (!customElements.get('lottie-player')) {
				customElements.define('lottie-player', lottiePlayer);
			}
			lottieLoaded = true;
		}
	});
</script>

<div class="container mx-auto px-4">
	<div class="flex flex-wrap justify-center -mx-4">
		{#each anims as anim, index}
			<div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
				<div class="relative overflow-hidden bg-white rounded-lg shadow-md p-6 text-center">
					<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
					<div class="relative z-10">
						{#if lottieLoaded}
							<lottie-player 
								src={anim} 
								autoplay 
								loop 
								class="w-full h-48"
							></lottie-player>
						{:else}
							<div class="w-full h-48 flex items-center justify-center">
								<p class="text-gray-500">Loading animation...</p>
							</div>
						{/if}
						<h3 class="text-2xl font-semibold mb-2">{animNames[index]}</h3>
						<p class="text-gray-600 mb-4">{descriptions[index]}</p>
						<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
							Learn More
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes shimmer {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}
	.animate-shimmer {
		animation: shimmer 2s infinite;
	}
</style>
