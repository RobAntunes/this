<script lang="ts">
	let { className, title, idx, ref, openDrawer } = $props<{
		className: string;
		title: string;
		idx: number;
		ref: HTMLDivElement | null;
		openDrawer: (idx: number, e: Event, ref: HTMLDivElement | null) => void;
	}>();
</script>

<div
	bind:this={ref}
	class={`font-poppins hover:cursor-pointer ${className}`}
	onmouseenter={(e) => {
		openDrawer(idx, e, ref);
	}}
	role="listitem"
>
	<div class="flex items-end flex-col after:w-[90%] after:border after:border-b-black group">
		<p class="pr-4 group-hover:-translate-x-8 transition-all">{title}</p>
	</div>
</div>
