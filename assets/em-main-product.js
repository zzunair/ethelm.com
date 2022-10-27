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

function t({data:t,variantId:a,containsAlcohol:e,customAssortment:s}){const n=Object.fromEntries(t.variants.map((t=>[t.id,t])));return{variantId:a,customAssortmentReady:!0,alcoholRestrictionsAccepted:this.$persist(!1).as("product_alcohol_restrictions_accepted").using(sessionStorage),get variant(){return n[this.variantId]},get addToCartEnabled(){return(!0!==s||!1!==this.customAssortmentReady)&&(!1!==s||!0!==e||!1!==this.alcoholRestrictionsAccepted)},selectVariant(t){this.variantId=parseInt(t,10)}}}document.addEventListener("alpine:init",(()=>{Alpine.data("product",t)}));
