<script>
  import { siteTitle, siteDescription } from '$lib/vars/constants.js';
  import { timestamp } from '$lib/BuildTimeStamp.svelte';
  import { base } from '$app/paths';

  import Icon from 'svelte-awesome';
  import { github } from 'svelte-awesome/icons';

  import Form from '$lib/Form.svelte';
  import Results from '$lib/Results.svelte';
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<section class="hero m-0 p-0 fullheight">
	<div class="hero-body m-0 p-0 fullwidth">
		<div class="columns is-gapless m-0 fullwidth">
			<div class="form-sidebar columnn p-5 is-one-third fullwidth">
				<div class="is-flex fullwidth is-justify-content-space-between">
					<a href="{base}/">
						<h1 class="title is-size-4">{siteTitle}</h1>
					</a>
					<a href="https://github.com/middlicomp/viewpoint" target="_blank" aria-label="GitHub link">
						<button title="Open on GitHub" class="button is-ghost has-text-white"
							><Icon data={github} scale="1.5" /></button
						>
					</a>
				</div>
				<p class="subtitle is-size-6">{siteDescription}</p>
				<p class="is-size-7 has-text-success">!! for experimental use only !!</p>
				<p class="subtitle is-size-7">last built on {timestamp.toLowerCase()}</p>
				<img alt="animated blinking eye logo left" src="{base}/eye.gif" class="eye-spaced" />
				<img alt="animated blinking eye logo right" src="{base}/eye.gif" class="eye-spaced" />
				<Form />
			</div>
			<div role="main" class="results-pane column is-two-thirds fullwidth">
				<Results />
			</div>
		</div>
	</div>
</section>
