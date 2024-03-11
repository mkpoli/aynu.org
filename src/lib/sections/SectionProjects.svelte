<script lang="ts">
	import AynuwikiPNG from '$assets/images/logos/png/Aynuwiki.png';
	import AynuwikiAVIF from '$assets/images/logos/avif/Aynuwiki.avif';
	import UkosammaniPNG from '$assets/images/logos/png/Ukosamani.png';
	import UkosammaniAVIF from '$assets/images/logos/avif/Ukosamani.avif';
	import IeonnekunnepPNG from '$assets/images/logos/png/Ieonnekunnep.png';
	import IeonnekunnepAVIF from '$assets/images/logos/avif/Ieonnekunnep.avif';
</script>

<section>
	<h2>Cikarkoranpe</h2>

	<div class="projects">
		<a href="https://wiki.aynu.org/">
			<picture>
				<source type="image/avif" srcset={AynuwikiAVIF} />
				<source type="image/png" srcset={AynuwikiPNG} />
				<img src={AynuwikiPNG} alt="Aynuwiki" />
			</picture>
			<h3>Aynuwiki</h3>
		</a>
		<a href="https://site.aynu.org/">
			<picture>
				<source type="image/avif" srcset={UkosammaniAVIF} />
				<source type="image/png" srcset={UkosammaniPNG} />
				<img src={UkosammaniPNG} alt="Ukosammani" />
			</picture>
			<h3>Aynuitak-nuye <br /> Ukosamaani Sait</h3>
		</a>
		<a href="https://dict.aynu.org/">
			<picture>
				<source type="image/avif" srcset={IeonnekunnepAVIF} />
				<source type="image/png" srcset={IeonnekunnepPNG} />
				<img src={IeonnekunnepPNG} alt="Ieonnekunnep" />
			</picture>
			<h3>Aynuitak-<br />Eonnekunnep</h3>
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
		gap: 1em 4em;
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
