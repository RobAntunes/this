<script lang="ts">
	import { icons } from 'feather-icons';
	type IconName = keyof typeof icons;

	let { title, description, icon } = $props<{ title: string; description: string; icon: IconName }>();
	
	const IconComponent = icon in icons ? icons[icon].toSvg() : '';
</script>

<div
	class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
>
	<div class="text-indigo-400 mb-4">
		{#if IconComponent}
			{@html IconComponent}
		{/if}
	</div>
	<h3 class="text-2xl font-bold mb-4 text-white">{title}</h3>
	<p class="text-gray-300">{description}</p>
</div>
