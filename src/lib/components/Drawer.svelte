<script lang="ts">
	import { closeDrawer, controls } from '$lib/functions/drawer.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let { className, children } = $props<{
		className: string;
		children: () => any;
	}>();

	let ref: any;

	$effect.root(() => {
		document.body.addEventListener('click', (e) => {
			if (!e.composedPath().includes(ref as EventTarget)) {
				if (controls.state) {
					controls.state = 0;
				}
			}
		});

		return () =>
			document.body.removeEventListener('click', (e) => {
				if (!e.composedPath().includes(ref as EventTarget)) {
					if (controls.state) {
						controls.state = 0;
					}
				}
			});
	});
</script>

{#if controls.state}
	<aside
		class="h-[100vh] bg-white {className} text-balance w-[45em]"
		in:slide={{
			delay: 200,
			easing: cubicInOut,
			axis: 'x'
		}}
		out:slide={{
			delay: 50,
			easing: cubicInOut,
			axis: 'x'
		}}
		bind:this={ref}
	>
		<div class="w-[30em]">
			{@render children()}
		</div>
		<button type="button" onclick={closeDrawer}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 absolute right-6 top-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</button>
	</aside>
{/if}
