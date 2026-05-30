<script lang="ts">
	import Moreu from './Moreu.svelte';
	import Icon from './Icon.svelte';
	import { sites, communityLinks } from '$lib/data';
</script>

<footer class="footer">
	<div class="frieze"><Moreu variant="frieze" /></div>
	<div class="container inner">
		<div class="cols">
			<div class="col brand-col">
				<a class="brand" href="#top">
					<span class="brand-mark">ᴀ</span>
					<span>Aynu.org</span>
				</a>
				<p class="tagline">Aynu itak Aynu puri eyam cikarkoranpe uekarpare sait.</p>
				<div class="socials">
					{#each communityLinks as link (link.href)}
						<a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
							<Icon name={link.icon} size={20} />
						</a>
					{/each}
				</div>
			</div>

			<nav class="col" aria-label="Sait">
				<h4>Sait</h4>
				<ul>
					{#each sites as site (site.href)}
						<li><a href={site.href} target="_blank" rel="noreferrer">{site.name}</a></li>
					{/each}
				</ul>
			</nav>

			<nav class="col" aria-label="Uekarpare">
				<h4>Uekarpare</h4>
				<ul>
					{#each communityLinks as link (link.href)}
						<li>
							<a href={link.href} target="_blank" rel="noreferrer">
								<Icon name={link.icon} size={16} />
								<span>{link.label}</span>
							</a>
						</li>
					{/each}
					<li><a href="https://aynu.io/" target="_blank" rel="noreferrer">aynu.io</a></li>
				</ul>
			</nav>
		</div>

		<div class="bottom">
			<p>© 2023–2026 Aynu.org Mosem</p>
			<p class="lang">Aynu itak / アイヌ イタㇰ</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		margin-top: 2rem;
		background: var(--indigo-deep);
		color: var(--cream);
	}

	.frieze {
		color: color-mix(in srgb, var(--cream) 38%, transparent);
		padding-top: 1.5rem;
	}

	.inner {
		padding-block: 2.5rem 2rem;
	}

	.cols {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr;
		gap: 2rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--cream);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
	}

	.brand:hover {
		color: var(--cream);
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 8px;
		background: color-mix(in srgb, var(--cream) 16%, transparent);
		color: var(--cream);
		font-size: 1.05rem;
		line-height: 1;
	}

	.tagline {
		margin-top: 0.9rem;
		max-width: 34ch;
		color: color-mix(in srgb, var(--cream) 72%, transparent);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.col h4 {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--cream) 60%, transparent);
		margin-bottom: 0.9rem;
	}

	.col ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.col a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: color-mix(in srgb, var(--cream) 88%, transparent);
		font-size: 0.95rem;
	}

	.col a:hover {
		color: #fff;
	}

	.socials {
		display: flex;
		gap: 0.85rem;
		margin-top: 1.1rem;
	}

	.socials a {
		display: grid;
		place-items: center;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 999px;
		border: 1px solid color-mix(in srgb, var(--cream) 20%, transparent);
		color: color-mix(in srgb, var(--cream) 82%, transparent);
		transition:
			border-color 0.18s ease,
			color 0.18s ease,
			transform 0.18s ease;
	}

	.socials a:hover {
		color: #fff;
		border-color: color-mix(in srgb, var(--cream) 55%, transparent);
		transform: translateY(-2px);
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid color-mix(in srgb, var(--cream) 16%, transparent);
		font-size: 0.85rem;
		color: color-mix(in srgb, var(--cream) 60%, transparent);
	}

	.bottom p {
		margin: 0;
	}

	@media (max-width: 720px) {
		.cols {
			grid-template-columns: 1fr 1fr;
		}

		.brand-col {
			grid-column: 1 / -1;
		}
	}
</style>
