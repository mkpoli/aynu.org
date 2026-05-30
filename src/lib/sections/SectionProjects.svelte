<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Card from '$lib/components/Card.svelte';
	import { sites } from '$lib/data';
</script>

<section class="section projects" id="cikarkoranpe">
	<div class="container">
		<SectionHeading eyebrow="aynu.org" title="Cikarkoranpe" />
		<div class="grid">
			{#each sites as site (site.href)}
				<Card href={site.href} name={site.name} host={site.host}>
					{#snippet media()}
						{#if site.logo}
							<picture>
								{#if site.logo.avif}
									<source srcset={site.logo.avif} type="image/avif" />
								{/if}
								<source srcset={site.logo.png} type="image/png" />
								<img src={site.logo.png} alt="{site.name} logo" loading="lazy" />
							</picture>
						{:else}
							<span class="mono">{site.name.charAt(0).toUpperCase()}</span>
						{/if}
					{/snippet}
				</Card>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.mono {
		display: grid;
		place-items: center;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 14px;
		background: var(--indigo-deep);
		color: var(--cream);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 2rem;
	}
</style>
