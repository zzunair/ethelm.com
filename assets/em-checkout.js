/**
 * 
 * WARNING:
 * This file was automatically generated as the output of a build process.
 * If you make changes to it directly via Shopify's Code Editor, your changes
 * will be overwritten the next time a build runs.
 * 
 * If you need to make changes to the source file, request Github Access
 * from the project lead, and follow the process steps in the README file.
 * 
 */

import"./em-chunk-arrive-f2b42605.js";const e={teleportInto:e=>function(){this.innerHTML=e.innerHTML},teleportBefore:e=>function(){this.parentElement.insertBefore(e.cloneNode(!0),this)},teleportHref:e=>function(){this.href=e.href}},t={existing:!0},o=Array.from(document.querySelectorAll("\n  [data-em-checkout-teleports] > [data-teleport-into],\n  [data-em-checkout-teleports] > [data-teleport-before],\n  [data-em-checkout-teleports] > [data-teleport-href]\n"));for(const r of o)for(const o of Object.keys(e))try{r.dataset[o]&&document.arrive(r.dataset[o],t,e[o](r))}catch(e){console.warn(e)}
