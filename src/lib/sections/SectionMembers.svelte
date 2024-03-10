<script lang="ts">
	import Hachia from '$assets/images/Hachia.png';
	import Mkpoli from '$assets/images/Mkpoli.jpg';
</script>

<section>
	<h2>Utar</h2>

	<div class="members">
		<div class="member-card">
			<a href="https://twitter.com/hachia_go" target="_blank">
				<img src={Hachia} alt="Hachia" />
				<h3>はちあ</h3>
			</a>
		</div>
		<div class="member-card">
			<a href="https://twitter.com/mkpoli" target="_blank">
				<img src={Mkpoli} alt="Hachia" />
				<h3>まくぽり</h3>
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
