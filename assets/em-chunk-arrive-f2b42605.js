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

!function(e,t,n){if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,i=0,o=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,l=0;i=e[l];l++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&o.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}),l=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),c=function(t,r){var i=new l,c=this,a={fireOnAttributesModification:!1};return i.beforeAdding((function(n){var i,o=n.target;o!==e.document&&o!==e||(o=document.getElementsByTagName("html")[0]),i=new MutationObserver((function(e){r.call(this,e,n)}));var l=t(n.options);i.observe(o,l),n.observer=i,n.me=c})),i.beforeRemoving((function(e){e.observer.disconnect()})),this.bindEvent=function(e,t,n){t=o.mergeArrays(a,t);for(var r=o.toElementsArray(this),l=0;l<r.length;l++)i.addEvent(r[l],e,t,n)},this.unbindEvent=function(){var e=o.toElementsArray(this);i.removeEvent((function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1}))},this.unbindEventWithSelectorOrCallback=function(e){var t,r=o.toElementsArray(this),l=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===l)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=o.toElementsArray(this);i.removeEvent((function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1}))},this},a=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function t(e,t,r){return!(!o.matchesSelector(e,t.selector)||(e._id===n&&(e._id=i++),-1!=t.firedElems.indexOf(e._id)))&&(t.firedElems.push(e._id),!0)}var r=(a=new c((function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}),(function(e,n){e.forEach((function(e){var r=e.addedNodes,i=e.target,l=[];null!==r&&r.length>0?o.checkChildNodesRecursively(r,n,t,l):"attributes"===e.type&&t(i,n)&&l.push({callback:n.callback,elem:i}),o.callCallbacks(l,n)}))}))).bindEvent;return a.bindEvent=function(t,n,i){void 0===i?(i=n,n=e):n=o.mergeArrays(e,n);var l=o.toElementsArray(this);if(n.existing){for(var c=[],a=0;a<l.length;a++)for(var s=l[a].querySelectorAll(t),u=0;u<s.length;u++)c.push({callback:i,elem:s[u]});if(n.onceOnly&&c.length)return i.call(c[0].elem,c[0].elem);setTimeout(o.callCallbacks,1,c)}r.call(this,t,n,i)},a},s=new function(){var e={};function t(e,t){return o.matchesSelector(e,t.selector)}var n=(s=new c((function(){return{childList:!0,subtree:!0}}),(function(e,n){e.forEach((function(e){var r=e.removedNodes,i=[];null!==r&&r.length>0&&o.checkChildNodesRecursively(r,n,t,i),o.callCallbacks(i,n)}))}))).bindEvent;return s.bindEvent=function(t,r,i){void 0===i?(i=r,r=e):r=o.mergeArrays(e,r),n.call(this,t,r,i)},s};t&&f(t.fn),f(HTMLElement.prototype),f(NodeList.prototype),f(HTMLCollection.prototype),f(HTMLDocument.prototype),f(Window.prototype);var u={};return d(a,u,"unbindAllArrive"),d(s,u,"unbindAllLeave"),u}function d(e,t,n){o.addMethod(t,n,e.unbindEvent),o.addMethod(t,n,e.unbindEventWithSelectorOrCallback),o.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function f(e){e.arrive=a.bindEvent,d(a,e,"unbindArrive"),e.leave=s.bindEvent,d(s,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);
