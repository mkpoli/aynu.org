<script lang="ts">
	import Moreu from '$lib/components/Moreu.svelte';
</script>

<section class="hero" id="top">
	<div class="frieze frieze-top"><Moreu variant="frieze" /></div>

	<div class="container content">
		<p class="eyebrow">Aynu Mosir · アイヌモシㇼ</p>
		<h1>Aynu.org Mosem</h1>
		<p class="lead">Aynu itak, Aynu puri eyam — usa cikarkoranpe uekarpa sait.</p>
		<p class="sub">
			A community hub for free, open tools and resources that help people learn, use and cherish the
			Ainu language and culture.
		</p>
		<div class="cta">
			<a class="btn btn-primary" href="#cikarkoranpe">Cikarkoranpe nukar</a>
			<a class="btn btn-ghost" href="https://discord.aynu.org/" target="_blank" rel="noreferrer">
				Discord un arpa
			</a>
		</div>
	</div>

	<div class="frieze frieze-bottom"><Moreu variant="frieze" /></div>
</section>

<style>
	.hero {
		position: relative;
		background: var(--indigo-deep);
		color: var(--cream);
		overflow: hidden;
	}

	.frieze {
		color: color-mix(in srgb, var(--cream) 34%, transparent);
	}

	.frieze-top {
		padding-top: 1.25rem;
	}

	.frieze-bottom {
		padding-bottom: 1.25rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		padding-block: clamp(3.5rem, 9vw, 6.5rem);
	}

	.eyebrow {
		color: color-mix(in srgb, var(--cream) 70%, transparent);
	}

	h1 {
		color: var(--cream);
		font-size: clamp(2.6rem, 7vw, 4.75rem);
		font-weight: 800;
		letter-spacing: 0.005em;
	}

	.lead {
		max-width: 30ch;
		font-family: var(--font-display);
		font-size: clamp(1.15rem, 2.6vw, 1.6rem);
		line-height: 1.5;
		color: var(--cream);
	}

	.sub {
		max-width: 56ch;
		color: color-mix(in srgb, var(--cream) 74%, transparent);
		font-size: 1.02rem;
		line-height: 1.75;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.9rem;
		margin-top: 1.25rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		padding: 0.8rem 1.6rem;
		border-radius: 999px;
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 1rem;
		transition:
			transform 0.18s ease,
			background 0.18s ease,
			color 0.18s ease;
	}

	.btn:hover {
		transform: translateY(-2px);
	}

	.btn-primary {
		background: var(--cream);
		color: var(--indigo-deep);
	}

	.btn-primary:hover {
		background: #fff;
		color: var(--indigo-deep);
	}

	.btn-ghost {
		border: 1px solid color-mix(in srgb, var(--cream) 45%, transparent);
		color: var(--cream);
	}

	.btn-ghost:hover {
		border-color: var(--cream);
		color: var(--cream);
	}
</style>
