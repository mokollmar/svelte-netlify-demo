import { writable } from 'svelte/store';

export const page_views = writable(0); // counts the total page views (stored locally)

