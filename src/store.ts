import { writable, type Writable } from "svelte/store";

export const nums: Writable<any[]> = writable([]);