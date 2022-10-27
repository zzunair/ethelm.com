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

var t=function(t){t.directive("collapse",((e,{expression:n,modifiers:i},{effect:s,evaluateLater:r})=>{let a=function(t,e,n){if(-1===t.indexOf(e))return n;const i=t[t.indexOf(e)+1];if(!i)return n;if("duration"===e){let t=i.match(/([0-9]+)ms/);if(t)return t[1]}return i}(i,"duration",250)/1e3;e._x_isShown||(e.style.height="0px"),e._x_isShown||e.style.removeProperty("display"),e._x_isShown||(e.style.overflow="hidden");let o=(e,n)=>{let i=t.setStyles(e,n);return n.height?()=>{}:i},h={overflow:"hidden",transitionProperty:"height",transitionDuration:`${a}s`,transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"};e._x_transition={in(n=(()=>{}),i=(()=>{})){let s=e.getBoundingClientRect().height;t.setStyles(e,{height:"auto"});let r=e.getBoundingClientRect().height;t.setStyles(e,{overflow:null}),s===r&&(s=0),t.transition(e,t.setStyles,{during:h,start:{height:s+"px"},end:{height:r+"px"}},(()=>e._x_isShown=!0),(()=>{}))},out(n=(()=>{}),i=(()=>{})){let s=e.getBoundingClientRect().height;t.transition(e,o,{during:h,start:{height:s+"px"},end:{height:"0px"}},(()=>{}),(()=>{e._x_isShown=!1,"0px"==e.style.height&&t.nextTick((()=>t.setStyles(e,{overflow:"hidden"})))}))}}}))};const e=/[^\s-]+?-\b|\S+|\s+|\r\n?|\n/g,n=/\u001b.*?m/g;function i(t){return this.options.noTrim?t:t.trim()}function s(t){return t.replace(n,"")}function r(t){if(s(t).length>this.options.width){const e=t.split("");let n;const i=[];for(;(n=e.splice(0,this.options.width)).length;)i.push(n.join(""));return i}return t}const a=3;function o({message:t}){const n=(new DOMParser).parseFromString(t,"text/html").documentElement.textContent;return{message:n,committedMessage:n,valid:!0,linesRemaining:0,scale:1/749,textAreaFontSize:"1em",saved:!0,init(){this.scale=1/this.$refs.textarea.clientWidth,this.resize(this.$refs.container);new ResizeObserver((t=>{for(const e of t)this.resize(e.target)})).observe(this.$refs.container),Alpine.effect((()=>{this.scrub();const t=this.message.split(/\r*\n/).length;this.valid=t<=a,this.linesRemaining=""===this.message?3:Math.max(a-t,0),this.saved=this.message===this.committedMessage}));const t=(e=()=>{dataLayer&&dataLayer.push({event:"giftMessage",typing:!0,length:this.message.length})},n=500,function(){var t=this,s=arguments,r=function(){i=null,e.apply(t,s)};clearTimeout(i),i=setTimeout(r,n)});var e,n,i;this.$watch("message",(()=>t()))},scrub(){this.message=class{constructor(t="",e={}){this._lines=String(t).split(/\r\n|\n/g),this.options={eol:"\n",width:30,...e}}lines(){return this._lines.map(i,this).map((t=>t.match(e)||["~~empty~~"])).map((t=>this.options.break?t.map(r,this):t)).map((t=>t.flat())).map((t=>t.reduce(((t,e)=>{const n=t[t.length-1];return s(e).length+s(n).length>this.options.width?t.push(e):t[t.length-1]+=e,t}),[""]))).flat().map(i,this).filter((t=>t.trim())).map((t=>t.replace("~~empty~~","")))}wrap(){return this.lines().join(this.options.eol)}toString(){return this.wrap()}static wrap(t,e){return new this(t,e).wrap()}static lines(t,e){return new this(t,e).lines()}static isWrappable(t=""){const n=String(t).match(e);return!!n&&n.length>1}static getChunks(t){return t.match(e)||[]}}.lines(this.message,{width:75,break:!0,noTrim:!0}).filter(((t,e)=>!(e+1>a&&""===t.trim()))).join("\n").replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu,""),this.$refs.textarea.value=this.message},resize(t){this.textAreaFontSize=`${Math.min(1,this.scale*t.clientWidth)}em`},async commit(){if(!1!==this.valid&&this.message!==this.committedMessage)try{await fetch("/cart/update",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({note:this.message})}),this.committedMessage=this.message}catch(t){console.warn(t)}}}}
/*!
 * calendar.js: inspired by the calendar module from Python
 * Copyright(c) 2011 Luciano Ramalho <luciano@ramalho.org>
 * MIT Licensed
 */var h=function(t){this.message=t,this.toString=function(){return this.constructor.name+": "+this.message}},l=function(t){this.firstWeekDay=t||0};l.prototype={constructor:l,weekStartDate:function(t){for(var e=new Date(t.getTime());e.getDay()!==this.firstWeekDay;)e.setDate(e.getDate()-1);return e},monthDates:function(t,e,n,i){if("number"!=typeof t||t<1970)throw new h("year must be a number >= 1970");if("number"!=typeof e||e<0||e>11)throw new h("month must be a number (Jan is 0)");var s=[],r=[],a=0,o=this.weekStartDate(new Date(t,e,1));do{for(a=0;a<7;a++)r.push(n?n(o):o),(o=new Date(o.getTime())).setDate(o.getDate()+1);s.push(i?i(r):r),r=[]}while(o.getMonth()<=e&&o.getFullYear()===t);return s},monthDays:function(t,e){return this.monthDates(t,e,(function(t){return t.getMonth()===e?t.getDate():0}))},monthText:function(t,e){if(void 0===t){var n=new Date;t=n.getFullYear(),e=n.getMonth()}return this.monthDates(t,e,(function(t){for(var n=t.getMonth()===e?t.getDate().toString():"  ";n.length<2;)n=" "+n;return n}),(function(t){return t.join(" ")})).join("\n")}};for(var c="JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" "),m=0;m<c.length;m++)l[c[m]]=m;const u=new l;function g({designMode:t=!1,trimEmptyWeeks:e,showToday:n}){const i=this.$store.customDeliveryDate;return{open:t,showToday:n,calendar(){if(0===i.selectableDates.length)return[];const t=Array.from(new Set(i.selectableDates.map((t=>i.format.yyyymm(t))))).map((t=>t.split("/").map((t=>parseInt(t,10))))).map((([t,e])=>({name:new Date(t,e-1).toLocaleDateString("en-US",{month:"long"}),weeks:u.monthDates(t,e-1,(t=>{const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}).format(t);return{date:t.getDate(),mmddyyyy:n,today:i.format.mmddyyyy(i.currentDate)===n,selectable:i.formattedSelectableDates.includes(n),requested:i.requested===n,selected:i.committed===n,inCurrentMonth:t.getMonth()===e-1}}))})));if(!0===e){function s({months:t=[],reverse:e=!1}){for(const i of!0===e?t.slice().reverse():t){let t=0,s=!1;for(const r of!0===e?i.weeks.slice().reverse():i.weeks){const e=r.some((t=>!0===t.selectable)),i=r.some((t=>!0===t.today));if(!0===e||!0===n&&!0===i){s=!0;break}t++}if(t>0&&i.weeks.splice(!0===e?-1*t:0,t),!0===s)break}}s({months:t}),s({months:t,reverse:!0})}return t}}}document.addEventListener("alpine:init",(()=>{Alpine.plugin(t),Alpine.data("note",o),Alpine.data("calendar",g)}));
