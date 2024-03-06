import { writable } from 'svelte/store';

export const selectedManifests = writable();
export const selectedViewer = writable();
export const query = writable('');
export const queryObject = writable({});
