import { writable } from 'svelte/store';

export const did_update = writable(false); // counts the total page views (stored locally)

