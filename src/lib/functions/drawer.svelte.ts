import AudioPlayer from '$lib/components/AudioPlayer.svelte';
import { createRoot, untrack } from 'svelte';

const data = [
	{
		title: 'Personalized Philosophy Journeys',
		content: {
			desc: "Embark on a journey blending philosophy and psychology, tailored to your life. Discover personalized audio sessions and tools for profound insights and self-growth, crafting your unique philosophy for life's challenges.",
			component: (target: Node, src: { data: { signedUrl: string } | null }) =>
				createRoot(AudioPlayer, {
					target,
					props: {
						src,
						autoplay: false
					}
				})
		}
	},
	{
		title: 'Interactive Thought Sessions',
		content: {
			desc: 'Engage in dynamic sessions where philosophy meets interactive learning. Challenge your perspectives and deepen your understanding with thought-provoking questions and activities.'
		}
	},
	{
		title: 'Psychology-Infused Insights',
		content: {
			desc: 'Delve into psychological concepts linked with philosophical teachings. Understand your mind and behavior through a lens that blends psychological science with philosophical thought.'
		}
	},
	{
		title: 'AI-Powered Guidance',
		content: {
			desc: "Ask 'It'—our advanced AI—any question about philosophy or psychology and receive insightful, detailed responses, helping you navigate complex concepts with ease."
		}
	},
	{
		title: 'Mindful Living Tools',
		content: {
			desc: "Embark on tailored explorations of philosophical ideas that resonate with your life and aspirations. 'This' adapts to your interests, offering a unique path through the world of wisdom."
		}
	}
];

export function getDrawerData() {
	return {
		get data() {
			return untrack(() => data);
		}
	};
}

let open = $state(0);
let content = $state(data[0]);

export const controls = drawerControls()();

export function drawerControls() {
	let controls;

	if (controls) {
		return controls;
	}

	return function initControls() {
		controls = {
			set content(idx: number) {
				content = data[idx];
			},
			get content(): (typeof data)[number] {
				return content;
			},
			set state(v: number) {
				open = v;
			},
			get state() {
				return open;
			}
		};
		return controls;
	};
}

export function openDrawer(idx: number, e?: Event, ref?: HTMLDivElement | null) {
	controls.content = idx;
	if ((ref && e?.target === ref && controls.state === 0) || (!ref && controls.state === 0)) {
		controls.state = 1;
	}
}

export function closeDrawer() {
	controls.state = 0;
}
