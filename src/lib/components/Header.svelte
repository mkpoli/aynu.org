<script lang="ts">
	import Icon from './Icon.svelte';

	const nav = [
		{ label: 'Uerankarap', href: '#uerankarap' },
		{ label: 'Cikarkoranpe', href: '#cikarkoranpe' },
		{ label: 'aynu.io', href: '#aynu-io' },
		{ label: 'Utar', href: '#utar' }
	];
</script>

<header class="header">
	<div class="container bar">
		<a class="brand" href="#top">
			<span class="brand-mark">ᴀ</span>
			<span class="brand-name">Aynu.org</span>
		</a>

		<nav class="nav" aria-label="Sait uhuyka">
			{#each nav as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<a class="discord" href="https://discord.aynu.org/" target="_blank" rel="noreferrer">
			<Icon name="discord" size={16} />
			<span>Discord</span>
		</a>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--paper) 82%, transparent);
		backdrop-filter: saturate(140%) blur(10px);
		border-bottom: 1px solid var(--hairline);
	}

	.bar {
		height: var(--header-h);
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--ink);
		font-family: var(--font-display);
		font-weight: 700;
	}

	.brand:hover {
		color: var(--ink);
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 8px;
		background: var(--indigo-deep);
		color: var(--cream);
		font-size: 1.05rem;
		line-height: 1;
	}

	.brand-name {
		font-size: 1.2rem;
		letter-spacing: 0.01em;
	}

	.nav {
		display: flex;
		gap: 1.5rem;
		margin-left: auto;
		font-family: var(--font-body);
		font-size: 0.95rem;
	}

	.nav a {
		color: var(--ink-muted);
	}

	.nav a:hover {
		color: var(--madder);
	}

	.discord {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		background: var(--indigo-deep);
		color: var(--cream);
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.discord:hover {
		background: var(--madder);
		color: var(--cream);
	}

	@media (max-width: 720px) {
		.nav {
			display: none;
		}

		.discord {
			margin-left: auto;
		}
	}
</style>
