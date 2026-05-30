<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		name,
		desc = '',
		host = '',
		media
	}: {
		href: string;
		name: string;
		desc?: string;
		host?: string;
		media?: Snippet;
	} = $props();
</script>

<a class="card" {href} target="_blank" rel="noreferrer">
	{#if media}
		<div class="card-media">{@render media()}</div>
	{/if}
	<div class="card-text">
		<h3 class="card-title">{name}</h3>
		{#if desc}
			<p class="card-desc">{desc}</p>
		{/if}
		{#if host}
			<span class="card-host">{host}<span class="arrow" aria-hidden="true">↗</span></span>
		{/if}
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		height: 100%;
		padding: 1.6rem;
		background: var(--surface);
		border: 1px solid var(--hairline);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		color: var(--ink);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			border-color 0.2s ease;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-hover);
		border-color: color-mix(in srgb, var(--madder) 40%, var(--hairline));
		color: var(--ink);
	}

	.card-media {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.card-media :global(img) {
		width: 4.5rem;
		height: 4.5rem;
		object-fit: contain;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		flex: 1;
	}

	.card-title {
		font-size: 1.3rem;
	}

	.card-desc {
		color: var(--ink-muted);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.card-host {
		margin-top: auto;
		padding-top: 0.6rem;
		font-size: 0.82rem;
		font-family: var(--font-body);
		letter-spacing: 0.02em;
		color: var(--indigo);
	}

	.arrow {
		margin-left: 0.35em;
		transition: transform 0.2s ease;
		display: inline-block;
	}

	.card:hover .arrow {
		transform: translate(2px, -2px);
		color: var(--madder);
	}
</style>
