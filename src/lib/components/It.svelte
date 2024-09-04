<section class="relative bg-white pt-20">
	<div class="container mx-auto px-4 relative z-10 pb-20">
		<div class="flex flex-col md:flex-row items-center mb-16">
			<div class="md:w-1/2 mb-8 md:mb-0">
				<h2 class="text-5xl font-bold mb-4 text-center md:text-left">Meet "It"</h2>
				<p class="text-xl text-center md:text-left mb-10 max-w-2xl">
					Your AI companion on the journey to self-discovery and personal growth. "It" adapts to
					your unique path, offering personalized insights and guidance.
				</p>
			</div>
		</div>
		<h3 class="text-3xl font-semibold mb-10 text-center">How "It" Enhances Your Experience</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Personalized Insights</h4>
				<p class="mb-4">
					"It" analyzes your responses to philosophical questions, providing tailored insights and
					recommendations for personal growth.
				</p>
				<p class="text-sm italic">
					"It" might say: "Based on your answers, you might benefit from exploring mindfulness
					practices to enhance your present-moment awareness."
				</p>
			</div>
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Adaptive Learning Path</h4>
				<p class="mb-4">
					"It" continuously adapts your learning journey, suggesting new topics and exercises based
					on your progress and interests.
				</p>
				<p class="text-sm italic">
					"It" might suggest: "Your interest in ethics has grown. Here's a curated selection of
					ethical dilemmas to further challenge your thinking."
				</p>
			</div>
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Emotional Intelligence Coach</h4>
				<p class="mb-4">
					"It" acts as an EQ coach, helping you understand and manage your emotions more effectively
					through various scenarios.
				</p>
				<p class="text-sm italic">
					"It" might observe: "I noticed you've been feeling stressed lately. Let's work on some
					cognitive reframing techniques."
				</p>
			</div>
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Virtual Philosophical Debates</h4>
				<p class="mb-4">
					Engage in thought-provoking debates with "It" as it takes on the personas of historical
					philosophers, challenging your perspectives.
				</p>
				<p class="text-sm italic">
					"It" might propose: "Today, let's debate the nature of justice. I'll take on the role of
					Plato, adapting to your arguments in real-time."
				</p>
			</div>
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Mindfulness Assistant</h4>
				<p class="mb-4">
					"It" guides you through personalized meditation and mindfulness exercises, adapting to
					your stress levels and preferences.
				</p>
				<p class="text-sm italic">
					"It" might suggest: "Your heart rate indicates elevated stress. Let's try a 5-minute
					breathing exercise tailored to your current state."
				</p>
			</div>
			<div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
				<h4 class="text-xl font-semibold mb-4">Progress Tracking & Insights</h4>
				<p class="mb-4">
					"It" tracks your personal growth journey, providing visual insights and celebrating your
					milestones.
				</p>
				<p class="text-sm italic">
					"It" might celebrate: "Congratulations! Your self-reflection skills have improved by 27%
					this month. Here's a breakdown of your progress."
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.it-circle {
		animation: rotate 20s linear infinite;
		transform-origin: center;
	}

	.it-circle:nth-child(2) {
		animation-duration: 15s;
		animation-direction: reverse;
	}

	.it-circle:nth-child(3) {
		animation-duration: 10s;
	}

	.it-pulse {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.5;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}
</style>
