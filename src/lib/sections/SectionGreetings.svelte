<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
</script>

<section class="section" id="uerankarap">
	<div class="container">
		<SectionHeading eyebrow="Irankarapte" title="Uerankarap" />
		<div class="prose">
			<p>
				<b>Aynu.org</b> anak usa okay cikarkoranpe kar kur uekarpare sait ne. Aynu itak ka Aynu puri ka
				irammakaka eci=eramuoka wa un=kore yak pirka na.
			</p>
			<p class="en">
				Aynu.org is a gathering place for tools and resources made by our community. We hope they
				help you come to know the Ainu language and culture a little more deeply.
			</p>
		</div>
	</div>
</section>

<style>
	.prose {
		max-width: 60ch;
		margin-inline: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.prose p {
		font-size: 1.2rem;
		line-height: 1.85;
	}

	.prose .en {
		font-size: 1rem;
		color: var(--ink-muted);
	}
</style>
