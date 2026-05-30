<script lang="ts">
	// Moreu — an Ainu-inspired decorative motif rendered as inline SVG.
	// Two counter-phase waves interlock into a chain of "sik" (eye) shapes for
	// the frieze; a single inward spiral curl for the heading ornament.
	// Everything uses currentColor so it themes with the surrounding text.
	let {
		variant = 'frieze',
		class: klass = ''
	}: { variant?: 'frieze' | 'ornament'; class?: string } = $props();
</script>

{#if variant === 'frieze'}
	<svg
		class={klass}
		width="100%"
		height="24"
		fill="none"
		role="presentation"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<pattern id="moreu-tile" width="48" height="24" patternUnits="userSpaceOnUse">
				<path
					d="M0 12 C0 1.5 24 1.5 24 12 C24 22.5 48 22.5 48 12"
					stroke="currentColor"
					stroke-width="1.5"
				/>
				<path
					d="M0 12 C0 22.5 24 22.5 24 12 C24 1.5 48 1.5 48 12"
					stroke="currentColor"
					stroke-width="1.5"
				/>
				<circle cx="24" cy="12" r="1.6" fill="currentColor" stroke="none" />
				<circle cx="0" cy="12" r="1.6" fill="currentColor" stroke="none" />
			</pattern>
		</defs>
		<rect width="100%" height="24" fill="url(#moreu-tile)" />
	</svg>
{:else}
	<svg
		class={klass}
		width="26"
		height="26"
		viewBox="0 0 26 26"
		fill="none"
		role="presentation"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 21 C4 8 22 8 22 16 C22 21.5 13.5 21.5 13.5 16 C13.5 12.5 18 12.5 17.5 15.5"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
		/>
	</svg>
{/if}
