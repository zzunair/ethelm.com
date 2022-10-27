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

class t extends HTMLElement{constructor(){super(),this.form=this.querySelector("form"),this.form.addEventListener("submit",this.onSubmitHandler.bind(this)),this.cartNotification=document.querySelector("cart-notification")}onSubmitHandler(t){t.preventDefault(),this.cartNotification.setActiveElement(document.activeElement);const e=this.querySelector('[type="submit"]');e.setAttribute("disabled",!0),e.classList.add("loading");const i=JSON.parse(serializeForm(this.form)),s=/^properties\[([^\]]+)\]$/;i.properties=Object.fromEntries(Object.keys(i).filter((t=>s.test(t))).map((t=>{const e=t.match(s)[1],o=i[t];return delete i[t],[e,o]})));const o=JSON.stringify({...i,sections:this.cartNotification.getSectionsToRender().map((t=>t.id)),sections_url:window.location.pathname});fetch(`${routes.cart_add_url}`,{...fetchConfig("javascript"),body:o}).then((t=>t.json())).then((t=>{document.dispatchEvent(new CustomEvent("add-to-cart",{bubbles:!0,response:t})),this.cartNotification.renderContents(t)})).catch((t=>{console.error(t)})).finally((()=>{e.classList.remove("loading"),e.removeAttribute("disabled")}))}}customElements.define("product-form",t);
