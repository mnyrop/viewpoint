<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { sampleManifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { selectedManifests, selectedViewer, query } from '$lib/vars/stores.js';

	import Icon from 'svelte-awesome';
	import { copy, externalLink } from 'svelte-awesome/icons';

	let embedCode, absoluteQuery;
	let appURL = '';
	let embedCopiedMessage = false;

	$: absoluteQuery = appURL + $query;
	$: embedCode = `<iframe src="${absoluteQuery}" height="400"/>`;
	$: $query, generateIframe();

	function copyToClipboard(id) {
		console.log(id);
		let text = document.getElementById(id).textContent;
		navigator.clipboard.writeText(text);
	}

	function triggerEmbedCopiedMessage() {
		embedCopiedMessage = true;
		setTimeout(() => {
			embedCopiedMessage = false;
		}, 1000);
	}

	function generateIframe() {
		if (typeof window !== 'undefined') {
			let existing = document.getElementById('viewer-iframe');
			let iframeContainer = document.getElementById('iframe-container');

			if (existing !== null) {
				existing.remove();
			}

			let iframe = document.createElement('iframe');
			iframe.setAttribute('src', $query);
			iframe.setAttribute('id', 'viewer-iframe');
			iframe.style.width = '100%';
			iframe.style.height = '75vh';
			iframeContainer.prepend(iframe);
		}
	}

	onMount(async () => {
		appURL = window.location.protocol + '//' + window.location.host;
		generateIframe();
	});
</script>

<div class="columns is-gapless is-multiline fullwidth">
	<div id="iframe-container" class="column is-12"></div>
	<div class="column is-half is-flex">
		<article class="message is-primary fullwidth">
			<div class="message-header is-justify-content-left">
				Link to Full Screen Viewerfullwidth
				<a
					title="Open in new window"
					href={absoluteQuery}
					target="_none"
					class="button is-ghost has-text-white"><Icon data={externalLink} /></a
				>
			</div>
			<div class="message-body fullwidth">
				<a href={absoluteQuery} target="_none">{absoluteQuery}</a>
			</div>
		</article>
	</div>

	<div class="column is-half is-flex">
		<article class="message is-link mr-5 fullwidth">
			<div id="embed-header" class="message-header fullwidth is-justify-content-left">
				Embed Code
				<button
					title="Copy to clipboard"
					on:click={() => copyToClipboard('embed-code')}
					on:click={triggerEmbedCopiedMessage}
					class="button is-ghost has-text-white"><Icon data={copy} /></button
				>
				{#if embedCopiedMessage}
					<span transition:fade class="ephemeral-message">Copied to clipboard!</span>
				{/if}
			</div>
			<div id="embed-code" class="message-body fullwidth">
				{embedCode}
			</div>
		</article>
	</div>
</div>
