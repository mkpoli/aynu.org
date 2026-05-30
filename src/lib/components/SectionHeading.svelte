<script lang="ts">
	import Moreu from './Moreu.svelte';

	let {
		eyebrow = '',
		title,
		intro = ''
	}: { eyebrow?: string; title: string; intro?: string } = $props();
</script>

<div class="heading">
	<span class="ornament"><Moreu variant="ornament" /></span>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<h2>{title}</h2>
	{#if intro}
		<p class="intro">{intro}</p>
	{/if}
</div>

<style>
	.heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.6rem;
		margin-bottom: 2.75rem;
	}

	.ornament {
		color: var(--madder);
		line-height: 0;
	}

	h2 {
		font-size: clamp(1.9rem, 4.5vw, 2.6rem);
	}

	.intro {
		max-width: 60ch;
		color: var(--ink-muted);
		font-size: 1.05rem;
		line-height: 1.75;
	}
</style>
