<script lang="ts">
	import HachiaPNG from '$assets/images/avatars/png/Hachia.png';
	import MkpoliPNG from '$assets/images/avatars/png/Mkpoli.png';
	import LucasPNG from '$assets/images/avatars/png/Lucas.png';
	import KarumoPNG from '$assets/images/avatars/png/Karumo.png';
	import HachiaAVIF from '$assets/images/avatars/avif/Hachia.avif';
	import MkpoliAVIF from '$assets/images/avatars/avif/Mkpoli.avif';
	import LucasAVIF from '$assets/images/avatars/avif/Lucas.avif';
	import KarumoAVIF from '$assets/images/avatars/avif/Karumo.avif';
</script>

<section>
	<h2>Utar</h2>

	<div class="members">
		<div class="member-card">
			<a href="https://twitter.com/hachia_go" target="_blank">
				<picture>
					<source srcset={HachiaAVIF} type="image/avif" />
					<source srcset={HachiaPNG} type="image/png" />
					<img src={HachiaPNG} alt="Hachia" />
				</picture>
				<h3>はちあ</h3>
			</a>
		</div>
		<div class="member-card">
			<a href="https://twitter.com/mkpoli" target="_blank">
				<picture>
					<source srcset={MkpoliAVIF} type="image/avif" />
					<source srcset={MkpoliPNG} type="image/png" />
					<img src={MkpoliPNG} alt="Mkpoli" />
				</picture>
				<h3>まくぽり</h3>
			</a>
		</div>
		<div class="member-card">
			<a href="https://twitter.com/Lucas_Yoyogi" target="_blank">
				<picture>
					<source srcset={LucasAVIF} type="image/avif" />
					<source srcset={LucasPNG} type="image/png" />
					<img src={LucasPNG} alt="Lucas" />
				</picture>
				<h3>代々木 ルーカス</h3>
			</a>
		</div>
		<div class="member-card">
			<a href="https://twitter.com/ranekrm" target="_blank">
				<picture>
					<source srcset={KarumoAVIF} type="image/avif" />
					<source srcset={KarumoPNG} type="image/png" />
					<img src={KarumoPNG} alt="Karumo" />
				</picture>
				<h3>かるも</h3>
			</a>
		</div>
		<p>ne wa na an na…</p>
	</div>
</section>

<style>
	.members {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1em 2em;
	}

	.member-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* Make p always break to next line */

	.members p {
		width: 100%;
		text-align: center;
	}

	.member-card img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
	}

	.member-card > a {
		text-decoration: none;
		color: inherit;
		text-align: center;
	}
</style>
