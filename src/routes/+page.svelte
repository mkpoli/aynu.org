<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SectionHero from '$lib/sections/SectionHero.svelte';
	import SectionGreetings from '$lib/sections/SectionGreetings.svelte';
	import SectionProjects from '$lib/sections/SectionProjects.svelte';
	import SectionTools from '$lib/sections/SectionTools.svelte';
	import SectionMembers from '$lib/sections/SectionMembers.svelte';
</script>

<svelte:head>
	<title>Aynu.org Mosem</title>
</svelte:head>

<Header />

<main>
	<SectionHero />
	<SectionGreetings />
	<SectionProjects />
	<SectionTools />
	<SectionMembers />
</main>

<Footer />
