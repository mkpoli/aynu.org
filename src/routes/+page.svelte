<script lang="ts">
	import SectionGreetings from '$lib/sections/SectionGreetings.svelte';
	import SectionMembers from '$lib/sections/SectionMembers.svelte';
	import SectionProjects from '$lib/sections/SectionProjects.svelte';
</script>

<svelte:head>
	<title>Aynu.org Mosem</title>
</svelte:head>

<main>
	<section>
		<h1>Aynu.org Mosem</h1>
	</section>

	<SectionGreetings />

	<SectionProjects />

	<h2>Uwekarpare</h2>

	<ul>
		<li>
			<a href="https://discord.aynu.org/"> Discord </a>
		</li>
	</ul>

	<SectionMembers />
</main>

<footer>
	<p>© 2024 Aynu.org</p>
</footer>

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

	main > :global(section > h2) {
		margin-top: 2em;
		margin-bottom: 2em;
	}

	footer {
		margin-top: 2em;
		padding: 2em;
	}

	footer > p {
		text-align: center;
	}
</style>
