<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Card from '$lib/components/Card.svelte';
	import { tools, toolsHref } from '$lib/data';

	const kindLabel: Record<string, string> = {
		app: 'App',
		data: 'Dataset',
		lib: 'Library',
		mod: 'Resource pack'
	};
</script>

<section class="section tools" id="aynu-io">
	<div class="container">
		<SectionHeading
			eyebrow="aynu.io"
			title="Aynu itak aeywankep"
			intro="Open-source software for the Ainu language, built by aynumosir and friends on aynu.io."
		/>

		<div class="grid">
			{#each tools as tool (tool.href)}
				<Card href={tool.href} name={tool.name} desc={tool.desc} host={tool.host}>
					{#snippet media()}
						<span class="badge" data-kind={tool.kind}>
							<span class="mono">{tool.name.charAt(0).toUpperCase()}</span>
							<span class="kind">{kindLabel[tool.kind]}</span>
						</span>
					{/snippet}
				</Card>
			{/each}
		</div>

		<div class="more">
			<a class="more-link" href={toolsHref} target="_blank" rel="noreferrer">
				aynu.io or un arpa <span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</section>

<style>
	.tools {
		background: color-mix(in srgb, var(--indigo) 6%, var(--paper));
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
	}

	.mono {
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 12px;
		background: var(--indigo-deep);
		color: var(--cream);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.4rem;
	}

	.kind {
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--madder);
	}

	.more {
		margin-top: 2.25rem;
		text-align: center;
	}

	.more-link {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 1.05rem;
	}
</style>
