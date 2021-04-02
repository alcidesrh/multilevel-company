(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{385:function(t,e,r){"use strict";var i=r(2),n=r(30),a=r(28);e.a=Object(i.a)(n.a,Object(a.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),r={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))}):r.valid=e(t),r},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const r=this.watchers.find(t=>t._uid===e._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},495:function(t,e,r){"use strict";r.r(e);var i=r(63),n=r.n(i),a=r(15),o=r(10),s=r(17);function c(t,e,r,i,n,a,o){try{var s=t[a](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(i,n)}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={data:function(){return{fieldRequire:s.b,children:[]}},computed:h(h({},Object(o.b)("category",["item","items","loadingItem","categories"])),{},{categoriesSelectChildren:function(){if(!this.item.parent_id)return this.categories;for(var t=[],e=0;e<this.items.length&&!(t=this.getChildren([this.items[e]]).map((function(t){return t.id}))).includes(this.item.parent_id);e++)t=[];return this.categories.filter((function(e){return!t.includes(e.id)}))}}),watch:{children:function(t){t.includes(this.item.parent_id)&&(this.item.parent_id=null)}},methods:h(h({getChildren:function(t){var e=this,r=[];return t.forEach((function(t){if(r.push(t),t.id==e.item.parent_id)return r;t.children.length&&r.push.apply(r,l(e.getChildren(t.children)))})),r}},Object(a.b)({getItem:"category/getItem",saveAction:"category/save",getCategories:"generic/getTableList",getItems:"category/getItems"})),{},{save:function(){var t=this;this.$refs.form.validate()&&(this.item.children=this.children,this.saveAction("category").then((function(e){t.getItems("categories"),t.$router.push({name:"category_list"})})))}}),created:function(){var t,e=this;return(t=n.a.mark((function t(){var r,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.params.id,e.items.length||e.getItems("categories"),i=e.categories,e.categories.length){t.next=6;break}return t.next=6,e.getCategories({query:{table:"categories",fields:["id","name"]}}).then((function(t){i=t.data.data}));case 6:r&&"new"!=r?e.getItem({endpoint:"category",query:{id:decodeURIComponent(r)}}).then((function(){e.categories=i.filter((function(t){return t.id!=e.item.id})),e.children=e.item.children.map((function(t){return t.id}))})):(e.categories=i,e.item={});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(i,n){var a=t.apply(e,r);function o(t){c(a,i,n,o,s,"next",t)}function s(t){c(a,i,n,o,s,"throw",t)}o(void 0)}))})()},destroyed:function(){this.item=null}},p=r(6),g=r(11),v=r.n(g),b=r(75),y=r(398),w=r(456),_=r(385),O=r(399),j=r(39),C=r(26),V=Object(p.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("v-container",{attrs:{fluid:""}},[r("div",[r("v-row",[r("v-col",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Nombre",rules:t.fieldRequire,required:""},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-select",{attrs:{clearable:"",items:t.categories,label:"Categoría padre","item-text":"name","item-value":"id"},model:{value:t.item.parent_id,callback:function(e){t.$set(t.item,"parent_id",e)},expression:"item.parent_id"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-select",{attrs:{clearable:"",multiple:"",items:t.categoriesSelectChildren,label:"Categoría hijos","item-text":"name","item-value":"id"},model:{value:t.children,callback:function(e){t.children=e},expression:"children"}})],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-end align-end",attrs:{cols:"12",md:"4"}},[r("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(e){return t.$router.push({name:"category_list"})}}},[t._v("Cancelar")]),t._v(" "),r("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:t.loadingItem},on:{click:function(e){return t.save()}}},[t._v("Guardar")])],1)],1)],1)],1)],1)],1)]):t._e()}),[],!1,null,null,null);e.default=V.exports;v()(V,{VBtn:b.a,VCol:y.a,VContainer:w.a,VForm:_.a,VRow:O.a,VSelect:j.a,VTextField:C.a})}}]);