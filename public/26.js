(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{263:function(e,t,i){var a=i(387);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(8)(a,r);a.locals&&(e.exports=a.locals)},265:function(e,t,i){"use strict";var a={props:["usersSelected","users","label","usersRemoved"],data:function(){return{items:null,removed:[],search:null}},watch:{items:function(e){this.search=null,this.$emit("update:usersSelected",e),this.$emit("update:usersRemoved",this.removed)},usersSelected:function(e){this.items=this.usersSelected}},methods:{remove:function(e){for(var t,i=0;i<this.items.length;i++)if(this.items[i].id==e.id){t=i,this.removed.push(e.id);break}t>=0&&this.items.splice(t,1)},customFilter:function(e,t,i){var a=e.name.toLowerCase(),r=e.email.toLowerCase(),n=t.toLowerCase();return a.indexOf(n)>-1||r.indexOf(n)>-1}},created:function(){this.items=this.usersSelected}},r=i(6),n=i(11),s=i.n(n),o=i(470),l=i(106),c=i(93),u=i(84),m=i(69),d=i(110),v=i(23),p=Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-autocomplete",{attrs:{clearable:"",items:e.users,color:"blue-grey lighten-2",label:e.label||"Administrador","item-text":"name","item-value":"id","return-object":"",filter:e.customFilter,multiple:"","search-input":e.search},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[i("v-list-item",[i("v-list-item-title",[e._v("Escribe nombre o correo del usuario")])],1)]},proxy:!0},{key:"selection",fn:function(t){return[i("v-chip",e._b({attrs:{"input-value":t.selected,close:""},on:{click:t.select,"click:close":function(i){return e.remove(t.item)}}},"v-chip",t.attrs,!1),[i("v-avatar",{attrs:{left:""}},[t.item.image?i("img",{attrs:{src:t.item.image.url}}):i("v-icon",{attrs:{dark:"",size:"24"}},[e._v("mdi-account")])],1),e._v("\n      "+e._s(t.item.name)+e._s(t.item.id)+"\n    ")],1)]}},{key:"item",fn:function(t){return["object"!=typeof t.item?[i("v-list-item-content",{domProps:{textContent:e._s(t.item)}})]:[i("v-list-item-avatar",[t.item.image?i("img",{attrs:{src:t.item.image.url}}):i("v-icon",{attrs:{color:"grey",dark:"",size:"40"}},[e._v("mdi-account")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.items,callback:function(t){e.items=t},expression:"items"}})}),[],!1,null,null,null);t.a=p.exports;s()(p,{VAutocomplete:o.a,VAvatar:l.a,VChip:c.a,VIcon:u.a,VListItem:m.a,VListItemAvatar:d.a,VListItemContent:v.a,VListItemTitle:v.c})},267:function(e,t,i){"use strict";var a={props:["user","users","label"],data:function(){return{item:null,search:null}},watch:{item:function(e){this.search=null,this.$emit("update:user",e)},user:function(e){this.item=this.user}},methods:{customFilter:function(e,t,i){var a=e.name.toLowerCase(),r=e.email.toLowerCase(),n=t.toLowerCase();return a.indexOf(n)>-1||r.indexOf(n)>-1}},created:function(){this.item=this.user}},r=i(6),n=i(11),s=i.n(n),o=i(470),l=i(106),c=i(93),u=i(84),m=i(69),d=i(110),v=i(23),p=Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-autocomplete",{attrs:{clearable:"",items:e.users,color:"blue-grey lighten-2",label:e.label||"Administrador","item-text":"name","item-value":"id","return-object":"",filter:e.customFilter,"search-input":e.search},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[i("v-list-item",[i("v-list-item-title",[e._v("Escribe nombre o correo del usuario")])],1)]},proxy:!0},{key:"selection",fn:function(t){return[i("v-chip",e._b({attrs:{"input-value":t.selected,close:""},on:{click:t.select,"click:close":function(t){e.item=null}}},"v-chip",t.attrs,!1),[i("v-avatar",{attrs:{left:""}},[t.item.image?i("img",{attrs:{src:t.item.image.url}}):i("v-icon",{attrs:{dark:"",size:"24"}},[e._v("mdi-account")])],1),e._v("\n      "+e._s(t.item.name)+"\n    ")],1)]}},{key:"item",fn:function(t){return["object"!=typeof t.item?[i("v-list-item-content",{domProps:{textContent:e._s(t.item)}})]:[i("v-list-item-avatar",[t.item.image?i("img",{attrs:{src:t.item.image.url}}):i("v-icon",{attrs:{color:"grey",dark:"",size:"40"}},[e._v("mdi-account")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.item,callback:function(t){e.item=t},expression:"item"}})}),[],!1,null,null,null);t.a=p.exports;s()(p,{VAutocomplete:o.a,VAvatar:l.a,VChip:c.a,VIcon:u.a,VListItem:m.a,VListItemAvatar:d.a,VListItemContent:v.a,VListItemTitle:v.c})},36:function(e,t,i){"use strict";var a={props:["dateParam","label","birthday","max","min","allowedDates"],data:function(){return{menu:!1,date:null}},computed:{computedDateFormattedMomentjs:function(){return this.date?this.$options.filters.dateFormat(this.date):""}},watch:{menu:function(e){var t=this;this.birthday&&e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))},date:function(e){this.$emit("update:dateParam",e)},dateParam:function(e){e||(this.date=null)}},created:function(){this.date=this.dateParam||null}},r=i(6),n=i(11),s=i.n(n),o=i(477),l=i(105),c=i(26),u=Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{clearable:"",value:e.computedDateFormattedMomentjs,label:e.label,readonly:"","prepend-inner-icon":"mdi-calendar-month"},on:{"click:clear":function(t){e.date=null}}},"v-text-field",r,!1),a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),i("v-date-picker",{ref:"picker",attrs:{"allowed-dates":e.allowedDates,min:e.min||null,max:e.max||null},on:{input:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)}),[],!1,null,null,null);t.a=u.exports;s()(u,{VDatePicker:o.a,VMenu:l.a,VTextField:c.a})},386:function(e,t,i){"use strict";var a=i(263);i.n(a).a},387:function(e,t,i){(e.exports=i(7)(!1)).push([e.i,"\niframe {\n  border: 1px solid #949494;\n}\n",""])},489:function(e,t,i){"use strict";i.r(t);var a=i(15);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o={components:{Form:i(88).a},methods:n(n({},Object(a.b)({getItems:"broker/getItems"})),{},{refreshList:function(){this.getItems({endpoint:"users",query:{role:"broker"}}),this.$router.push({name:"broker_list"},(function(){}))}}),created:function(){}},l=i(6),c=Object(l.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("Form",{attrs:{role:"broker"},on:{"refresh-list":this.refreshList}})}),[],!1,null,null,null);t.default=c.exports},62:function(e,t,i){"use strict";var a={props:["image","icon","inputFile","fileType","multiple","filesInput"],data:function(){return{files:[],cont:0,file:{}}},watch:{files:function(e){this.$emit("update:files",e)},file:function(e){this.$emit("update:image",e)},image:function(e){this.file=this.image}},computed:{id:function(){return this.inputFile?this.inputFile:"files"}},methods:{clear:function(){this.$emit("remove","all"),this.$emit("update:files",[])},removeFile:function(e){this.files[e].id&&this.$emit("remove",this.files[e].id),this.files.splice(e,1)},clickFile:function(){document.getElementById(this.id).click()},readFile:function(e,t){var i=this,a=new FileReader;a.addEventListener("load",(function(t){!i.multiple&&e.type&&-1!==e.type.indexOf("image")?(i.file={name:e.name,size:e.size},i.$set(i.file,"url",t.target.result)):i.multiple&&i.$set(i.files,i.files.length,e)})),a.readAsDataURL(e)}},created:function(){this.file=this.image,this.files=this.filesInput||[]},mounted:function(){var e=this;document.getElementById(this.id).addEventListener("change",(function(t){if(e.multiple)for(var i=0;i<t.target.files.length;i++)e.readFile(t.target.files[i],i);else e.readFile(t.target.files[0])}))}},r=i(6),n=i(11),s=i.n(n),o=i(106),l=i(75),c=i(93),u=i(471),m=i(84),d=Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.fileType?i("div",[i("v-file-input",{attrs:{value:e.files,"show-size":"",counter:"","small-chips":"",multiple:"",id:e.id,label:"Adjuntar archivo o imagen"},on:{"click:clear":e.clear},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.text,r=t.index;return[i("v-chip",{attrs:{small:"",close:""},on:{"click:close":function(t){return e.removeFile(r)}}},[e._v("\n        "+e._s(a)+"\n      ")])]}}])})],1):i("div",[i("v-avatar",{attrs:{size:"80",color:"grey"}},[e.file&&e.file.url?i("img",{attrs:{src:e.file.url}}):i("v-icon",{attrs:{dark:"",size:"60"}},[e._v(e._s(e.icon||"mdi-office-building"))])],1),e._v(" "),i("v-btn",{attrs:{small:"",rounded:"",color:"primary",dark:""},on:{click:e.clickFile}},[i("v-icon",{staticClass:"mr-1"},[e._v("mdi-upload")]),e._v(" Subir imagen")],1),e._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"file",id:e.id,name:"files",accept:"image/*"}})],1)}),[],!1,null,null,null);t.a=d.exports;s()(d,{VAvatar:o.a,VBtn:l.a,VChip:c.a,VFileInput:u.a,VIcon:m.a})},86:function(e,t,i){"use strict";var a=i(63),r=i.n(a),n=i(14);function s(e,t,i,a,r,n,s){try{var o=e[n](s),l=o.value}catch(e){return void i(e)}o.done?t(l):Promise.resolve(l).then(a,r)}var o={props:["nonce","loading","dialog"],data:function(){return{paymentForm:null,loadingForm:!1}},methods:{onGetCardNonce:function(e){var t,i=this;return(t=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.paymentForm.requestCardNonce();case 2:case"end":return e.stop()}}),e)})),function(){var e=this,i=arguments;return new Promise((function(a,r){var n=t.apply(e,i);function o(e){s(n,a,r,o,l,"next",e)}function l(e){s(n,a,r,o,l,"throw",e)}o(void 0)}))})()}},mounted:function(){var e=this,t=new SqPaymentForm({applicationId:"sq0idp-o14s9Ua7LYz1EkUbOMP88g",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",lineHeight:"24px",padding:"16px",placeholderColor:"#a0a0a0",backgroundColor:"transparent"}],cardNumber:{elementId:"sq-card-number",placeholder:"Número de la tarjeta"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY Fecha expiración"},postalCode:{elementId:"sq-postal-code",placeholder:"Zip Code"},callbacks:{cardNonceResponseReceived:function(t,i,a){if(e.$emit("update:loading",!1),t)return console.error("Encountered errors:"),void t.forEach((function(e){n.a.$emit("alert",{text:e.message,color:"warning"}),console.error("  "+e.message)}));e.$emit("update:nonce",i)},paymentFormLoaded:function(){e.loadingForm=!1}}});this.paymentForm=t,this.paymentForm&&(this.loadingForm=!0,this.paymentForm.build())}},l=(i(386),i(6)),c=i(11),u=i.n(c),m=i(398),d=i(101),v=i(399),p=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"form-container"}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:e.dialog?12:5}},[i("div",{attrs:{id:"sq-card-number"}})]),e._v(" "),i("v-col",{attrs:{cols:"12",md:e.dialog?3:2}},[i("div",{staticClass:"third",attrs:{id:"sq-cvv"}})]),e._v(" "),i("v-col",{attrs:{cols:"12",md:e.dialog?6:3}},[i("div",{staticClass:"third",attrs:{id:"sq-expiration-date"}})]),e._v(" "),i("v-col",{attrs:{cols:"12",md:e.dialog?3:2}},[i("div",{staticClass:"third",attrs:{id:"sq-postal-code"}})])],1),e._v(" "),i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loadingForm,expression:"loadingForm"}],attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.a=p.exports;u()(p,{VCol:m.a,VProgressLinear:d.a,VRow:v.a})},88:function(e,t,i){"use strict";var a=i(63),r=i.n(a),n=i(17),s=i(267),o=i(62),l=i(265),c=i(36),u=i(86),m=i(15),d=i(10),v=i(14);function p(e,t,i,a,r,n,s){try{var o=e[n](s),l=o.value}catch(e){return void i(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){g(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var b={props:["role"],components:{UserSelect:s.a,FileUpload:o.a,UserSelectMultiple:l.a,DatePicker:c.a,PaymentForm:u.a},data:function(){return{emailRequire:n.a,fieldRequire:n.b,image:null,parent:null,children:null,childrenRemoved:[],pickerDialog:null,nonce:null,loading:null,promoteDialog:!1,promote:null,message:null,messageDialog:null,subscription:null,paid:!1,pay:null}},watch:{pickerDialog:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))},nonce:function(){var e=this;this.item.nonce=this.nonce,this.saveAction("user").then((function(t){t.data.error?v.a.$emit("alert",{text:t.data.error,color:"warning"}):t.data&&(e.paymentDialog=!1,e.message=t.data,e.messageDialog=!0)})).finally((function(){return e.loading=!1}))}},computed:h(h(h(h(h({},Object(d.b)("user",["loadingItem","usersSelect","item","user"])),Object(d.b)("subscription",{subscriptions:"items"})),Object(d.b)("license",{licenses:"items"})),Object(d.b)("role",{roles:"items"})),{},{childrenSelect:function(){var e=this;return this.usersSelect.filter((function(t){return!e.parent||t.id!=e.parent.id}))}}),methods:h(h({savePromote:function(){var e=this;this.promoteDialog=!1,this.promote?this.item.role=this.is(this.item,"broker")?3:2:this.item.role=this.is(this.item,"agency")?3:4,this.save().then((function(){e.getItemsAgency({endpoint:"users",query:{role:"agency",noFilters:!0}}),e.getItemsElite({endpoint:"users",query:{role:"elite",noFilters:!0}}),e.getItemsBroker({endpoint:"users",query:{role:"broker",noFilters:!0}})}))},isNumber:function(e,t){return Object(n.c)(e.keyCode)?t:t.slice(0,-1)}},Object(m.b)({getItem:"user/getItemGeneric",getItems:"generic/getItemsGeneric",getRoles:"role/getTableList",getSubscription:"subscription/getTableList",getLicenses:"license/getTableList",saveAction:"user/save",getItemsAgency:"agency/getItems",getItemsElite:"elite/getItems",getItemsBroker:"broker/getItems",getUserFreeCount:"generic/getItemGenericTable"})),{},{save:function(){var e=this;if(this.$refs.form.validate()){if(this.$can("change","family")&&(this.item.parent=this.parent,this.item.children=this.children?this.children.map((function(e){return e.id})):[],this.item.childrenRemoved=this.childrenRemoved),this.image&&this.image.id?this.item.image={id:this.image.id}:this.image&&(this.item.image={url:this.image.url,name:this.image.name}),"yes"!=this.pay||!this.paid||this.item.id||!this.$can("pay","subscription"))return this.item.sendPayLink="no"==this.pay,this.saveAction("user").then((function(t){t.data.error?v.a.$emit("alert",{text:t.data.error,color:"warning"}):(t.data&&(v.a.$emit("alert",{text:t.data,color:"success"}),e.paymentDialog=!1),e.$emit("refresh-list"))})).finally((function(){return e.loading=!1}));this.loading=!0,this.$refs.payment.onGetCardNonce()}}}),created:function(){var e,t=this;return(e=r.a.mark((function e(){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.parent={},i=t.$route.params.id,0==t.licenses.length&&t.getLicenses({query:{table:"licenses",fields:["id","title"]},saveState:!0}),t.usersSelect.length||t.getItems({endpoint:"users-select"}).then((function(e){e.data.data.length&&(t.usersSelect=e.data.data)})).catch((function(e){console.log(e)})),!i||"new"==i){e.next=9;break}return e.next=7,t.getItem({endpoint:"user/edit",query:{id:decodeURIComponent(i)}}).then((function(e){e.parent&&(t.parent=e.parent),t.image=e.image,t.$can("user","admin"),t.children=e.children,t.item=e}));case 7:e.next=12;break;case 9:0==t.subscriptions.length&&t.getSubscription({query:{table:"subscriptions",fields:["price"],where:{role_id:t.role,type:"default"}},saveState:!0}).then((function(e){e.data.data[0]&&(t.subscription=e.data.data[0])})),t.item={},"staff"==t.role?t.paid=!1:t.paid=!0;case 12:0==t.roles.length?t.getRoles({query:{table:"roles",fields:["id","name","slug"]},saveState:!0}).then((function(){t.item.role=t.roles.filter((function(e){return e.slug==t.role}))[0].id})):t.item.role=t.roles.filter((function(e){return e.slug==t.role}))[0].id;case 13:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(a,r){var n=e.apply(t,i);function s(e){p(n,a,r,s,o,"next",e)}function o(e){p(n,a,r,s,o,"throw",e)}s(void 0)}))})()},destroyed:function(){this.item=null}},y=i(6),_=i(11),k=i.n(_),x=i(75),w=i(262),O=i(16),$=i(472),C=i(398),I=i(456),j=i(397),F=i(102),P=i(385),V=i(395),D=i(396),S=i(399),q=i(39),E=i(459),L=i(26),R=Object(y.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.item?i("v-container",{attrs:{fluid:""}},[i("div",[i("v-row",[i("v-col",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("FileUpload",{attrs:{image:e.image,icon:"mdi-account","input-file":"userImageInput"},on:{"update:image":function(t){e.image=t}}})],1),e._v(" "),e.$can("user","admin")?i("v-col",{staticClass:"d-md-flex justify-md-end",attrs:{cols:"12",md:"6"}},[i("v-checkbox",{attrs:{label:"Activado"},model:{value:e.item.active,callback:function(t){e.$set(e.item,"active",t)},expression:"item.active"}})],1):e._e()],1),e._v(" "),e.is(e.item,"agency")?i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Nombre de Agencia"},model:{value:e.item.company_name,callback:function(t){e.$set(e.item,"company_name",t)},expression:"item.company_name"}})],1)],1):e._e(),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Nombre",rules:e.fieldRequire,required:""},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Apellido"},model:{value:e.item.last_name,callback:function(t){e.$set(e.item,"last_name",t)},expression:"item.last_name"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"Email",rules:e.emailRequire,required:""},model:{value:e.item.email,callback:function(t){e.$set(e.item,"email",t)},expression:"item.email"}})],1)],1),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",md:"3"}},[i("DatePicker",{attrs:{label:"Fecha nacimiento",birthday:"true","date-param":e.item.birthday,max:new Date((new Date).setFullYear((new Date).getFullYear()-18)).toISOString().substr(0,10)},on:{"update:dateParam":function(t){return e.$set(e.item,"birthday",t)},"update:date-param":function(t){return e.$set(e.item,"birthday",t)}}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"3"}},[i("v-text-field",{attrs:{label:"Número telefónico"},on:{keyup:function(t){e.item.phone=e.isNumber(t,e.item.phone)}},model:{value:e.item.phone,callback:function(t){e.$set(e.item,"phone",t)},expression:"item.phone"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Dirección"},model:{value:e.item.address,callback:function(t){e.$set(e.item,"address",t)},expression:"item.address"}})],1)],1),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",md:"5"}},[i("v-select",{attrs:{items:e.licenses,label:"Licencias","item-value":"id","item-text":"title",multiple:""},model:{value:e.item.licenses,callback:function(t){e.$set(e.item,"licenses",t)},expression:"item.licenses"}})],1),e._v(" "),"staff"!=e.role?i("v-col",{attrs:{cols:"12",md:"5"}},[i("v-text-field",{attrs:{label:"Título"},model:{value:e.item.title,callback:function(t){e.$set(e.item,"title",t)},expression:"item.title"}})],1):e._e(),e._v(" "),"staff"!=e.role?i("v-col",{attrs:{cols:"12",md:"2"}},[i("v-text-field",{attrs:{label:"Comisión"},on:{keyup:function(t){e.item.commission_rate=e.isNumber(t,e.item.commission_rate)}},model:{value:e.item.commission_rate,callback:function(t){e.$set(e.item,"commission_rate",t)},expression:"item.commission_rate"}})],1):e._e()],1),e._v(" "),e.$can("change","family")?i("div",[i("v-row",[i("v-col",{attrs:{cols:"5",md:"5"}},[i("UserSelect",{attrs:{user:e.parent,users:e.usersSelect,label:"Upline"},on:{"update:user":function(t){e.parent=t}}})],1)],1),e._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("UserSelectMultiple",{attrs:{usersSelected:e.children,usersRemoved:e.childrenRemoved,users:e.childrenSelect,label:"Downline"},on:{"update:usersSelected":function(t){e.children=t},"update:users-selected":function(t){e.children=t},"update:usersRemoved":function(t){e.childrenRemoved=t},"update:users-removed":function(t){e.childrenRemoved=t}}})],1)],1)],1):e._e(),e._v(" "),"staff"!=e.role?i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-radio-group",{attrs:{row:"",label:"Salario"},model:{value:e.item.salary,callback:function(t){e.$set(e.item,"salary",t)},expression:"item.salary"}},[i("v-radio",{attrs:{label:"$ 1000",value:1e3}}),e._v(" "),i("v-radio",{attrs:{label:"$ 2000",value:2e3}})],1)],1)],1):e._e(),e._v(" "),e.paid&&!e.item.id&&e.$can("pay","subscription")?i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-radio-group",{attrs:{rules:e.fieldRequire,required:""},model:{value:e.pay,callback:function(t){e.pay=t},expression:"pay"}},[i("v-radio",{attrs:{label:"Pagar con tarjeta",value:"yes"}}),e._v(" "),i("v-radio",{attrs:{label:"Enviar link de pago",value:"no"}})],1)],1)],1):e._e(),e._v(" "),"yes"==e.pay&&e.paid&&!e.item.id&&e.$can("pay","subscription")?i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("p",[e._v("\n                Usted va a pagar la membresía del nuevo representante. Una\n                nueva cuenta será creada en el sistema y un correo será\n                enviado al nuevo representante para que active su cuenta.\n              ")]),e._v(" "),e.subscription?i("strong",[e._v("Membresia: "+e._s(e._f("money")(e.subscription.price)))]):e._e()]),e._v(" "),i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("PaymentForm",{ref:"payment",attrs:{nonce:e.nonce,loading:e.loading},on:{"update:nonce":function(t){e.nonce=t},"update:loading":function(t){e.loading=t}}})],1)],1):e._e(),e._v(" "),i("v-row",[i("v-col",{staticClass:"d-md-flex justify-md-end text-center",attrs:{cols:"12"}},[i("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.$router.push({name:e.role+"_list"})}}},[e._v("Cancelar")]),e._v(" "),i("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:e.loadingItem||e.loading},on:{click:function(t){return e.save()}}},[e._v("Guardar")]),e._v(" "),e.item&&e.item.id&&e.$can("promote",e.item)?i("v-btn",{staticClass:"ml-3 mt-2 mt-md-0",attrs:{rounded:"",color:"teal",dark:"",loading:e.loadingItem||e.loading},on:{click:function(t){e.promote=e.promoteDialog=!0}}},[e._v("Promover")]):e._e(),e._v(" "),e.item&&e.item.id&&e.$can("descender",e.item)?i("v-btn",{staticClass:"ml-3 mt-2 mt-md-0",attrs:{rounded:"",color:"warning",dark:"",loading:e.loadingItem||e.loading},on:{click:function(t){e.promote=!1,e.promoteDialog=!0}}},[e._v("Descender")]):e._e()],1)],1)],1)],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.promoteDialog,callback:function(t){e.promoteDialog=t},expression:"promoteDialog"}},[i("v-card",[i("v-card-text",{staticClass:"py-5"},[e.promote?i("p",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("\n          Esta seguro que desea promover a "+e._s(e.item.name)+" a usuario\n          "+e._s(e.is(e.item,"broker")?"Elite":"Agencia")+"?\n        ")]):i("p",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("\n          Esta seguro que desea descender a "+e._s(e.item.name)+" a usuario\n          "+e._s(e.is(e.item,"agency")?"Elite":"Representante")+"?\n        ")])]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.promoteDialog=!1}}},[e._v("Cancelar")]),e._v(" "),i("v-btn",{attrs:{text:"",color:"primary",loading:e.loading},on:{click:e.savePromote}},[e._v("Promover")])],1)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.messageDialog,callback:function(t){e.messageDialog=t},expression:"messageDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("El pago se ha realizado")]),e._v(" "),i("v-card-text",{staticClass:"my-5"},[i("p",{staticStyle:{"font-size":"16px"}},[e._v(e._s(e.message))])]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:"",color:"primary",loading:e.loading},on:{click:function(t){return e.$emit("refresh-list")}}},[e._v("Ok")])],1)],1)],1)],1):e._e()}),[],!1,null,null,null);t.a=R.exports;k()(R,{VBtn:x.a,VCard:w.a,VCardActions:O.a,VCardText:O.b,VCardTitle:O.c,VCheckbox:$.a,VCol:C.a,VContainer:I.a,VDialog:j.a,VDivider:F.a,VForm:P.a,VRadio:V.a,VRadioGroup:D.a,VRow:S.a,VSelect:q.a,VSpacer:E.a,VTextField:L.a})}}]);