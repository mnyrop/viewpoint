# viewpoint

## Using the template

1. Click the `Use this template` button and select where you would like to copy this repo to.
2. Next, open the `svelte.config.js` file in your new repo using GitHub editor and change the following line
   ```js
   base: '/viewpoint';
   ```
   to the **name** of your repository, e.g., `my-repo`
   ```js
   base: '/my-repo';
   ```
3. Open the `src/lib/vars/constants.js` file in your new repo using GitHub editor and change the following lines:
   ```js
   export const siteTitle = 'viewpoint';
   export const baseUrl = '/viewpoint'; // this should be the same as your repo too, e.g., '/my-repo'
   export const siteDescription = 'embeddable iiif viewers with svelte-kit';
   export const sampleManifests = [
   	'https://purl.stanford.edu/wr796rv9498/iiif/manifest',
   	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json',
   	'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
   	'https://jsonstorage.net/api/items/1a6e2d6e-fa90-4d44-95a5-35bb6c011aa2',
   	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json',
   	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json',
   	'https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json',
   	'https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json',
   	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json',
   	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json',
   	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json',
   	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json',
   	'https://jsonstorage.net/api/items/ce49ca3a-3031-4914-bb60-069a65642f9f'
   ];
   ```
4. Go to your repo's homepage and navigate to `Settings` > `Pages` (on the left panel). Under `Source` select `Branch gh-pages` and click `Save`.

> _Note: If `gh-pages` doesn't show up as an option, make sure you have `Actions` enabled and that your first `gh-deploy.yml` action ran successfully in your Actions panel. This action creates the built site in the `gh-pages` branch._

## Local development

### Prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) (NVM)
- [Git](https://git-scm.com/downloads)

### Steps

1. Clone the repo
   ```sh
   git clone git@github.com:nyu-dss/viewpoint-template.git && cd viewpoint-template
   ```
2. Install project node version (specified in `.nvmrc`)
   ```sh
   nvm install
   ```
3. Install npm packages
   ```sh
   npm install
   ```
4. Run the dev server
   ```sh
   npm run dev
   ```
5. Open in browser at [http://localhost:3000/viewpoint-template/](http://localhost:3000/viewpoint/)
6. Quit the server with `Ctrl-c`.
7. Auto-format code
   ```sh
   npm run format
   ```
8. Lint code
   ```sh
   npm run lint
   ```
