<script lang="ts">
	let { className, children } = $props<{
		className: string;
		children: () => any;
	}>();
</script>

<div class={className} role="list">
	{#if children}
		<!-- {children()} -->
	{/if}
</div>
