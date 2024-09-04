<script lang="ts">
	let mainCircleSize = $state(210);
	let mainCircleOpacity = $state(0.3);
	let numCircles = $state(8);

	let circles = $derived(Array.from({ length: numCircles }, (_, i) => ({
		size: mainCircleSize * (1 + i * 0.2),
		opacity: mainCircleOpacity / (i + 1)
	})));
</script>

<div class="relative w-full h-full">
	{#each circles as circle, i}
		<div
			class="absolute rounded-full bg-black animate-breath flex items-center justify-center"
			style="width: {circle.size}px; height: {circle.size}px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: {circle.opacity}; animation-delay: {i * -0.5}s;"
		>
			{#if i === 0}
				<span class="text-white text-6xl font-bold z-50">it</span>
			{/if}
		</div>
	{/each}
</div>

<style>
	@keyframes breath {
		0%, 100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.1; }
		50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
	}
	.animate-breath {
		animation: breath 4s ease-in-out infinite;
	}
</style>
