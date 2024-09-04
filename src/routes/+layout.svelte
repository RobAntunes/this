<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import { controls, getDrawerData } from '../lib/functions/drawer.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import { supabase } from '$lib/supabaseClient';
	import hero from '/src/assets/hero.webp';

	const { data } = getDrawerData();

	let ref: any;
	let audio: HTMLAudioElement | null = $state(null);
	let input: HTMLInputElement | null = $state(null);
	let audioFlag: boolean = $state(false);
	let loc = $state(0);
	let { children } = $props();

	function secondsToTime(secs: number) {
		let minutes = Math.floor(secs / 60);
		let seconds = Math.floor(secs % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	let changeHandler: () => void;

	$effect(() => {
		changeHandler = () => {
			loc = (audio?.['duration'] ?? 1) / (audio?.['currentTime'] ?? 1);
			console.log('1', loc);
		};
		console.log('2', loc);

		// input?.addEventListener('change', changeHandler);

		// return () => {
		// 	input?.removeEventListener('change', changeHandler);
		// };
	});
</script>

<!-- svelte-ignore css_unused_selector -->
<div class="font-poppins">
	<Drawer className="p-12 fixed left-0 z-[999] shadow-2xl">
		<div bind:this={ref}>
			<p class="font-unbounded text-gray text-[32px] text-center">
				{controls.state && controls.content.title}
			</p>
			<br /><br />
			<p class="text-[18px]" in:fade={{ delay: 400 }}>
				{controls.state && controls.content.content.desc}
			</p>
			{#if data.findIndex((el) => {
				return el.title === controls.content.title;
			}) === 0}
				<!-- {#await supabase.storage
					.from('Website')
					.createSignedUrl('This_Journey_Within.flac', 60 * 30) then { data, error }}
					<div class="mt-10 p-8 shadow-lg rounded-lg flex" transition:fade>
						<button
							type="button"
							class="font-poppins text-[18px] p-4 rounded-md"
							onclick={() => {
								if (audioFlag) {
									audio?.pause();
								} else {
									audio?.play();
								}
								audioFlag = !audioFlag;
							}}
						>
							{#if audioFlag && !audio?.paused}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 5.25v13.5m-7.5-13.5v13.5"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
									/>
								</svg>
							{/if}
						</button>
					</div>
					<div class="flex justify-center items-center">
						<audio bind:this={audio}>
							<source src={data?.signedUrl} type="audio/flac" />
						</audio>
						<input
							max={audio.duration}
							min={0}
							bind:this={input}
							type="range"
							class="w-full"
							step="0.01"
							bind:value={loc}
							onchange={() => {
								if (audio) audio.currentTime = (loc / 100) * (audio?.duration ?? 1);
								loc = ((audio?.['currentTime'] ?? 1) / (audio?.['duration'] ?? 1)) * 100;
							}}
						/>
						<div>
							<p class="pl-4">
								{secondsToTime(loc)}
							</p>
						</div>
					</div>
					<p>{error?.message}</p>
				{/await} -->
			{/if}
		</div>
	</Drawer>
</div>

{#if children}
	{@render children()}
{/if}

<style>
	input[type='range'] {
		margin: auto;
		appearance: none;
		-webkit-appearance: none;
		position: relative;
		overflow: hidden;
		height: 40px;
		width: 200px;
		cursor: pointer;
		border-radius: 0; /* iOS */
	}

	::-webkit-slider-runnable-track {
		background: #ddd;
		overflow: hidden;
		border-radius: 4px;
	}

	/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
	::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 0px; /* 1 */
		height: 40px;
		box-shadow: -100vw 0 0 100vw dodgerblue;
		border: 1px solid #999; /* 1 */
	}

	::-moz-range-track {
		height: 40px;
		background: #ddd;
	}

	::-moz-range-thumb {
		background: #fff;
		height: 40px;
		width: 20px;
		border: 3px solid #999;
		border-radius: 0 !important;
		box-shadow: -100vw 0 0 100vw dodgerblue;
		box-sizing: border-box;
		border-radius: 4px;
	}

	:global(body) {
		margin: 0;
		overflow-x: hidden;
		background-color: transparent;
	}

	main {
		position: relative;
		z-index: 1;
	}
</style>
