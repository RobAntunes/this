<script lang="ts">
	import SideSelector from '../lib/components/SideSelector.svelte';
	import SideSelectorContainer from '$lib/containers/SideSelectorContainer.svelte';
	import { openDrawer, getDrawerData } from '../lib/functions/drawer.svelte';
	import { type RenderOutput } from 'svelte/server';

	$effect.pre(() => {
		(async () => {
			(await import('@lottiefiles/lottie-player')).default;
		})();
	});

	let ref: any;

	const { data } = getDrawerData();
</script>

<main>
	<section class="h-[100vh]">
		<div class="grid grid-cols-8 grid-rows-3">
			<img
				src="/hero.webp"
				alt="Depiction of ancient philosopher's head as a statue"
				class="absolute inset-0 -z-10"
			/>
			<div
				class="z-50 text-9xl font-bold relative left-6 grid grid-cols-4 grid-rows-4 col-span-4 col-start-1"
			>
				<h1 class="col-start-2 col-span-3 -translate-x-[30%] translate-y-16 w-full font-unbounded">
					This.
				</h1>
				<div
					class="text-lg col-start-2 flex flex-col row-start-2 justify-end font-unbounded col-span-4 w-[80%] relative -translate-x-[37%] translate-y-[28%]"
				>
					<div class="relative bottom-8">
						<h2>(Re)Think. Reflect. Evolve.</h2>
					</div>
					<div
						class="col-start-1 text-3xl font-poppins col-span-4 rounded-md right-4 row-start-2 -translate-x-[5%]"
					>
						<p class="p-6 w-full relative bottom-5">
							Enlightening Journeys in Mindfulness and Thought.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="h-[25%] bg-gradient-to-br bg-[#d0d0d0] text-white">
		<div class="grid grid-cols-10 items-center">
			<div class="col-span-8 col-start-2 text-center font-unbounded text-2xl py-20">
				This, is your personal space for self-discovery and mental clarity.<br /><br />
				Here, we blend timeless philosophical insights with practical psychological tools backed by revered
				thinkers and reputable, peer-reviewed scientific research, to guide you on a unique journey of
				self-exploration.<br /><br />Unlock a mindful approach to life, tailored just for you.
			</div>
		</div>
	</section>
	<section class="h-[150%]">
		<div class="font-poppins grid grid-cols-8 grid-rows-2">
			<div class="col-start-2 col-span-8 grid grid-cols-2">
				<p class="col-start-1 flex items-center text-lg">
					Dive into the world of philosophy with This, exploring everything from its vast branches
					to fundamental principles. <br />Engage in guided sessions that not only dissect
					philosophical doctrines but also reveal how to integrate these timeless ideas into your
					daily life.<br /><br /> With This, you draw from the wisdom of history's greatest thinkers,
					crafting a personal philosophy that guides and enriches your everyday experience.
				</p>
				<lottie-player autoplay loop mode="normal" src="/psychonaut.json" class="col-start-2">
				</lottie-player>
			</div>

			<div class="col-start-4 col-span-4 row-start-2 flex items-center">
				<p class="text-lg font-poppins">
					Psychology explorations offer a window into understanding thoughts, emotions, and
					behaviors. Delve into the intricacies of the mind, guided by the wisdom of renowned
					psychologists and current research.<br /><br /> Discover how psychological principles apply
					to everyday life, enhancing self-awareness and interpersonal relationships. This, provides
					a unique platform where psychology meets personal growth, empowering you with tools for mental
					well-being and emotional resilience.
				</p>
			</div>
		</div>
	</section>
	<section class={`relative flex justify-end w-[100vw] h-[100vh] items-center`}>
		<img
			class="absolute"
			src="/It.png"
			alt="A representation of AI, Philosophy, and Psychology featuring a statue head, cybernetic wiring, and a brain, all in greyscale; minimal style"
		/>
		<SideSelectorContainer className="w-[25%] h-1/2 flex justify-between flex-col">
			{#each data as item, i (i)}
				<SideSelector
					className="text-right text-lg relative z-50 right-0"
					title={item.title}
					idx={i}
					{ref}
					{openDrawer}
				/>
			{/each}
		</SideSelectorContainer>
	</section>
</main>
