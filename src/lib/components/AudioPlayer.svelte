<script lang="ts">
	let { src, autoplay } = $props<{
		src: { data: { signedUrl: string } | null };
		autoplay: boolean;
	}>();

	let audio: HTMLAudioElement | null;

	$effect(() => {
        audio = new Audio(src.data?.signedUrl as string);
		console.log(src, audio);

		if (autoplay) {
			audio.play();
		}
	});
</script>

<div class="audio-player">
	<button onclick={() => (audio?.paused ? audio.play() : audio?.pause())}>
		{audio?.paused ? 'Play' : 'Pause'}
	</button>
</div>

<style>
	.audio-player {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	button {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	button:hover {
		text-decoration: underline;
	}
</style>
