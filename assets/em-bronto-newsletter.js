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

var t=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var i=function(i){return t.test(i)};function s({id:t,list:s}){return{email:"",name:{first:"",last:""},zip:"",birthday:"",submitting:!1,src:void 0,get valid(){return i(this.email)},brontoSubmit(){if(!t||!s)return void this.formSubmit();const i={q:"direct_add",fn:"Public_DirectAddForm",id:t,comment:"WebSignUp",email:this.email,list1:s};let e=2;if(this.name.first?.length>0&&(i["field"+e++]=`firstname,set,${this.name.first}`),this.name.last?.length>0&&(i["field"+e++]=`lastname,set,${this.name.last}`),this.zip?.length>0&&(i["field"+e++]=`zipcode,set,${this.zip}`),this.birthday?.length>0&&/\d{4}-\d{2}-\d{2}/.test(this.birthday)){const[t,s,r]=this.birthday.split("-");i["field"+e++]=`birthday,set,${[s,r,t].join("/")}`}const r=new URL("https://app.bronto.com/public/");r.search=new URLSearchParams(i).toString(),this.src=r.toString()},formSubmit(){this.src=void 0,this.submitting=!1,this.$root.onsubmit()},directives:{image:{"@load"(){this.formSubmit()},"@error"(){this.formSubmit()}},submit:{":disabled"(){return this.submitting||!this.valid},"@click.prevent"(){this.submitting=!0,this.brontoSubmit()}}}}}document.addEventListener("alpine:init",(()=>{Alpine.data("brontoForm",s)}));
