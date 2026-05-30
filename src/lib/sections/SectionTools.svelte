<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Card from '$lib/components/Card.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { tools, toolsHref, packages } from '$lib/data';

	const kindLabel: Record<string, string> = {
		app: 'App',
		data: 'Dataset',
		lib: 'Library',
		mod: 'Resource pack'
	};

	const registryKeys = ['npm', 'crates', 'pypi'] as const;
	const registryLabel: Record<(typeof registryKeys)[number], string> = {
		npm: 'npm',
		crates: 'crates.io',
		pypi: 'PyPI'
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

		<h3 class="pkg-label">Packages</h3>
		<div class="grid">
			{#each packages as pkg (pkg.name)}
				<div class="pkg">
					<div class="pkg-head">
						<span class="mono">{pkg.name.charAt(0).toUpperCase()}</span>
						<div class="pkg-text">
							<h4 class="pkg-name">{pkg.name}</h4>
							<p class="pkg-desc">{pkg.desc}</p>
						</div>
					</div>
					<div class="registries">
						{#each registryKeys as reg (reg)}
							{#if pkg.registries[reg]}
								<a class="reg" href={pkg.registries[reg]} target="_blank" rel="noreferrer">
									{registryLabel[reg]}
								</a>
							{/if}
						{/each}
						{#if pkg.registries.github}
							<a
								class="reg gh"
								href={pkg.registries.github}
								target="_blank"
								rel="noreferrer"
								aria-label="{pkg.name} on GitHub"
							>
								<Icon name="github" size={15} />
							</a>
						{/if}
					</div>
				</div>
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

	.pkg-label {
		margin-top: 2.75rem;
		margin-bottom: 1.25rem;
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--madder);
	}

	.pkg {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		height: 100%;
		padding: 1.6rem;
		background: var(--surface);
		border: 1px solid var(--hairline);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
	}

	.pkg-head {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	.pkg-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.pkg-name {
		font-size: 1.15rem;
		font-family: var(--font-body);
		font-weight: 700;
	}

	.pkg-desc {
		color: var(--ink-muted);
		font-size: 0.9rem;
		line-height: 1.55;
	}

	.registries {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.reg {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.3rem 0.7rem;
		border-radius: 999px;
		border: 1px solid var(--hairline);
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--ink-muted);
		transition:
			color 0.18s ease,
			border-color 0.18s ease;
	}

	.reg:hover {
		color: var(--madder);
		border-color: color-mix(in srgb, var(--madder) 45%, var(--hairline));
	}

	.reg.gh {
		padding: 0.3rem 0.55rem;
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
