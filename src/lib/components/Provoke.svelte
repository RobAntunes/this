<script>
	let stage = 1;
	let userResponse = '';
	let devilAdvocateResponse = '';
	let insights = '';
</script>

<div class="p-6 max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg">
	{#if stage === 1}
		<h2 class="text-xl font-bold text-gray-700 mb-4">What does it mean to live a good life?</h2>
		<textarea
			class="w-full p-2 border rounded-lg mb-4"
			bind:value={userResponse}
			placeholder="Your thoughts..."
		></textarea>
		<button class="bg-blue-500 text-white py-2 px-4 rounded-lg" on:click={() => (stage = 2)}
			>Submit</button
		>
	{/if}

	{#if stage === 2}
		<h3 class="text-lg font-semibold text-gray-700">Let's dive deeper.</h3>
		<p class="text-gray-600 mt-2">
			Why do you think this definition resonates with you? How have your experiences shaped this
			view?
		</p>
		<textarea class="w-full p-2 border rounded-lg mt-4" bind:value={userResponse}></textarea>
		<button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" on:click={() => (stage = 3)}
			>Next</button
		>
	{/if}

	{#if stage === 3}
		<h3 class="text-lg font-semibold text-gray-700">Consider this counterpoint...</h3>
		<p class="text-gray-600 mt-2">
			What if someone argues that focusing on personal growth is selfish? How would you respond to
			the idea that the good life is about serving others, even at the expense of your own growth?
		</p>
		<textarea class="w-full p-2 border rounded-lg mt-4" bind:value={devilAdvocateResponse}
		></textarea>
		<button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" on:click={() => (stage = 4)}
			>Reflect</button
		>
	{/if}

	{#if stage === 4}
		<h3 class="text-lg font-semibold text-gray-700">AI Insight</h3>
		<p class="text-gray-600 mt-2">
			Based on your reflections, here's an insight: Your exploration touches on the balance between
			egoism and ethical altruism...
		</p>
		<textarea class="w-full p-2 border rounded-lg mt-4" bind:value={insights}></textarea>
		<button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" on:click={() => (stage = 5)}
			>Finish</button
		>
	{/if}

	{#if stage === 5}
		<h3 class="text-lg font-semibold text-gray-700">Final Reflection</h3>
		<p class="text-gray-600 mt-2">
			Take a few minutes to reflect on today’s journey. How has your understanding of a good life
			evolved? What steps will you take?
		</p>
		<textarea class="w-full p-2 border rounded-lg mt-4" bind:value={insights}></textarea>
		<button class="bg-green-500 text-white py-2 px-4 rounded-lg mt-4" on:click={() => (stage = 1)}
			>New Session</button
		>
	{/if}
</div>
