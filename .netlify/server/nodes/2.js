import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.c305da71.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.4200373c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/ContactIcons.340affc3.js","_app/immutable/chunks/index.b970fcc4.js"];
export const stylesheets = ["_app/immutable/assets/2.d3b18c49.css"];
export const fonts = [];
