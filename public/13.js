(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{385:function(t,e,i){"use strict";var r=i(2),s=i(30),a=i(28);e.a=Object(r.a)(s.a,Object(a.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},499:function(t,e,i){"use strict";i.r(e);var r=i(15),s=i(10),a=i(17);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={data:function(){return{fieldRequire:a.b}},computed:o(o({},Object(s.b)("license",["item","items","loadingItem"])),Object(s.b)("role",{roles:"items"})),methods:o(o({},Object(r.b)({getItem:"license/getItem",saveAction:"license/save",getRoles:"role/getTableList",getItems:"license/getItems"})),{},{save:function(){var t=this;this.$refs.form.validate()&&this.saveAction("license").then((function(e){if("created"==e.data)t.getItems("licenses");else{var i=0;t.item.id&&t.items.filter((function(e,r){e.id==t.item.id&&(i=r)})),t.$set(t.items,i,e.data.data)}t.$router.push({name:"license_list"})}))}}),created:function(){0==this.roles.length&&this.getRoles({query:{table:"roles",fields:["id","name"]},saveState:!0});var t=this.$route.params.id;t&&"new"!=t?this.getItem({endpoint:"license",query:{id:decodeURIComponent(t)}}).then((function(){})):this.item={}},destroyed:function(){this.item=null}},c=i(6),d=i(11),h=i.n(d),m=i(75),f=i(398),p=i(456),v=i(385),b=i(399),g=i(26),w=Object(c.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[i("v-text-field",{attrs:{label:"Nombre",rules:t.fieldRequire,required:""},model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}})],1),t._v(" "),i("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"6",md:"4",lg:"2"}},[i("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(e){return t.$router.push({name:"license_list"})}}},[t._v("Cancelar")]),t._v(" "),i("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:t.loadingItem},on:{click:function(e){return t.save()}}},[t._v("Guardar")])],1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=w.exports;h()(w,{VBtn:m.a,VCol:f.a,VContainer:p.a,VForm:v.a,VRow:b.a,VTextField:g.a})}}]);