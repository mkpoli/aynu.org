<script lang="ts">
	import Aynuwiki from '$assets/images/Aynuwiki.png';
	import Sait from '$assets/images/Ukosammaani.png';
	import Ieonnekunnep from '$assets/images/Ieonnekunnep.png';
</script>

<section>
	<h2>Cikarkoranpe</h2>

	<div class="projects">
		<a href="https://wiki.aynu.org/">
			<img src={Aynuwiki} alt="Aynuwiki" />
			Aynuwiki
		</a>
		<a href="https://site.aynu.org/">
			<img src={Sait} alt="Sait" />
			Aynuitak Inuypa Ukosammaani Sait
		</a>
		<a href="https://dict.aynu.org/">
			<img src={Ieonnekunnep} alt="Ieonnekunnep" />
			Aynuitak-Eonnekunnep
		</a>
	</div>
</section>

<style>
	img {
		width: 10em;
		height: 10em;
	}

	.projects {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1em 2em;
	}

	a {
		text-decoration: none;
		color: inherit;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.projects > a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}
</style>
