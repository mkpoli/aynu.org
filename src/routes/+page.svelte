<script lang="ts">
	import SectionMembers from '$lib/sections/SectionMembers.svelte';
</script>

<svelte:head>
	<title>Aynu.org Mosem</title>
</svelte:head>

<main>
	<section>
		<h1>Aynu.org Mosem</h1>
	</section>

	<section>
		<h2>Cikarkoranpe</h2>

		<ul>
			<li>
				<a href="https://wiki.aynu.org/"> Aynuwiki </a>
			</li>
			<li>
				<a href="https://site.aynu.org/"> Aynuitak Inuypa Ukosammaani Sait </a>
			</li>
			<li>
				<a href="https://dict.aynu.org/"> Aynuitak-Eonnekunnep </a>
			</li>
		</ul>
	</section>

	<section>
		<h2>Uwerankarap</h2>
	</section>

	<h2>Uwekarpare</h2>

	<ul>
		<li>
			<a href="https://discord.aynu.org/"> Discord </a>
		</li>
	</ul>

	<SectionMembers />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		min-height: 100svh;
	}

	main > :global(section) {
		margin: 2em 0;
		min-height: 100svh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
