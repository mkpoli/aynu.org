<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { members } from '$lib/data';
</script>

<section class="section members-section" id="utar">
	<div class="container">
		<SectionHeading eyebrow="Utar" title="Aynu.org Utar" intro="ne wa na an na…" />

		<ul class="members">
			{#each members as member (member.href)}
				<li>
					<a class="member" href={member.href} target="_blank" rel="noreferrer">
						<span class="avatar">
							<picture>
								{#if member.avatar.avif}
									<source srcset={member.avatar.avif} type="image/avif" />
								{/if}
								<source srcset={member.avatar.png} type="image/png" />
								<img src={member.avatar.png} alt={member.name} loading="lazy" />
							</picture>
							<span class="badge"><Icon name={member.platform} size={14} /></span>
						</span>
						<span class="name">{member.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.members {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem 2.5rem;
	}

	.member {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.85rem;
		color: var(--ink);
	}

	.avatar {
		position: relative;
		display: block;
		transition: transform 0.2s ease;
	}

	.member:hover .avatar {
		transform: translateY(-4px);
	}

	.member picture {
		display: block;
	}

	.member img {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid var(--surface);
		box-shadow: var(--shadow);
		transition: box-shadow 0.2s ease;
	}

	.member:hover img {
		box-shadow: var(--shadow-hover);
	}

	.badge {
		position: absolute;
		right: 0;
		bottom: 0;
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--indigo-deep);
		color: var(--cream);
		border: 2px solid var(--paper);
	}

	.name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.05rem;
		color: var(--ink);
	}

	.member:hover .name {
		color: var(--madder);
	}
</style>
