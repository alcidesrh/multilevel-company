(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{269:function(e,t,a){var r=a(422);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(8)(r,i);r.locals&&(e.exports=r.locals)},421:function(e,t,a){"use strict";var r=a(269);a.n(r).a},422:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,"\n.v-messages__message[data-v-c7ecaffe] {\n  color: white !important;\n  font-weight: bold;\n}\n#myVideo[data-v-c7ecaffe] {\n  position: fixed;\n  min-height: 100%;\n  left: -20%;\n}\n.flexible-container[data-v-c7ecaffe] {\n  position: relative;\n  background-color: black;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.flexible-container video[data-v-c7ecaffe] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: 0;\n  transform: translateX(-50%) translateY(-50%);\n}\n.login-card[data-v-c7ecaffe] {\n  position: absolute;\n  max-width: 400px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  top: 50%;\n  margin-top: -285px;\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n.login-card[data-v-c7ecaffe]{\n    top: 0;\n    margin-top: 0px;\n    height: 100%;\n    background-color: transparent !important;\n}\n}\n@media only screen and (max-width: 1366px) {\n.flexible-container video[data-v-c7ecaffe] {\n    max-width: 290%;\n    left: 37%;\n}\n}\n",""])},483:function(e,t,a){"use strict";a.r(t);var r=a(15),i=a(14),n=a(10),o=a(17),s=a(20),l=a.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={data:function(){return{dialog:!1,valid:!0,valid2:!0,password:"",password2:"",passwordRules:o.b,email:"",email2:"",emailRules:o.a,remember:!1,lazy:!1,loading:!1,loading2:!1,items:[],item:null}},computed:m(m(m({},Object(r.c)({host:"util/host"})),Object(n.b)("user",["error"])),{},{newPassword:function(){if(("undefined"==typeof data?"undefined":c(data))==c("string")){var e=JSON.parse(data);return"undefined"!=c(e.email)&&e.email}return!1}}),watch:{item:function(e){var t=this;this.loading=!0,this.$store.dispatch("user/authenticate",{email:e.email,password:"admin"==e.role.slug?"admin":"123",remember:!0,newPassword:!1}).then((function(){t.loading=!1})).catch((function(e){t.error=e,console.log(error)}))}},methods:m(m({},Object(r.b)({resetPassword:"user/resetPassword"})),{},{sendResetPasswordEmail:function(){var e=this;this.$refs.form2.validate()&&(this.loading2=!0,this.resetPassword({email:this.email2}).then((function(t){e.loading2=!1,200==t.status&&(e.dialog=!1,i.a.$emit("alert",{text:t.data,color:"success"}))})).catch((function(e){i.a.$emit("alert",{text:e.response.data,color:"error"})})).finally((function(){return e.loading2=!1})))},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},authenticate:function(){var e=this;if(this.$refs.form.validate()){if(this.newPassword&&this.password!=this.password2)return void(this.error={data:{error:"Las contraseñas deben ser iguales."}});this.loading=!0,this.$store.dispatch("user/authenticate",{email:this.email,password:this.password,remember:this.remember,newPassword:!!this.newPassword}).then((function(){e.loading=!1})).catch((function(t){e.error=t,console.log(error)}))}}}),created:function(){var e=this;this.email=this.newPassword||"",l.a.get("/users-select-test").then((function(t){var a,r,i;e.items=[{header:"Role Admin"},{divider:!0}].concat(t.data.data),(a=e.items).splice.apply(a,[3,0].concat([{header:"Role Agency"},{divider:!0}])),(r=e.items).splice.apply(r,[7,0].concat([{header:"Role Elite"},{divider:!0}])),(i=e.items).splice.apply(i,[11,0].concat([{header:"Role Broker"},{divider:!0}]))}))}},f=(a(421),a(6)),v=a(11),h=a.n(v),b=a(400),w=a(106),g=a(75),y=a(262),x=a(472),_=a(93),P=a(398),k=a(385),O=a(84),V=a(110),C=a(23),j=a(399),R=a(39),S=a(26),$=Object(f.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"h-100"},[a("v-col",{staticClass:"d-md-flex pa-0",attrs:{cols:"12"}},[a("div",{staticClass:"flexible-container"},[a("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVidedo"},domProps:{muted:!0}},[a("source",{attrs:{src:"/videos/company-video.mp4",type:"video/mp4"}}),e._v(" "),a("source",{attrs:{src:"/videos/company-video.mp4",type:"video/ogg"}})]),e._v(" "),a("v-card",{staticClass:"w-100 mr-0 mr-md-10 login-card",attrs:{elevation:"0"}},[a("div",{staticClass:"pa-5"},[e.error?a("v-alert",{staticClass:"my-3",attrs:{type:"error"}},[e._v(e._s(e.error.data.error||e.error.data.message))]):e._e(),e._v(" "),a("div",{staticClass:"text-h5 mt-10 white--text"},[e._v("Iniciar sesión")]),e._v(" "),a("v-form",{ref:"form",staticClass:"mb-10 mt-5",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-select",{attrs:{items:e.items,label:"Select a test user",outlined:"",solo:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",e._b({},"v-chip",t.attrs,!1),[a("v-avatar",{attrs:{left:""}},[t.item.image?a("img",{attrs:{src:t.item.image.url,alt:""}}):a("v-icon",{attrs:{color:"grey",dark:"",size:"40"}},[e._v("mdi-account")])],1),e._v("\n                  "+e._s(t.item.name)+"\n                ")],1)]}},{key:"item",fn:function(t){return["object"!=typeof t.item?[a("v-list-item-content",{domProps:{textContent:e._s(t.item)}})]:[a("v-list-item-avatar",[t.item.image?a("img",{attrs:{src:t.item.image.url,alt:""}}):a("v-icon",{attrs:{color:"grey",dark:"",size:"40"}},[e._v("mdi-account")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}),e._v(" "),a("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.group)}})],1)]]}}]),model:{value:e.item,callback:function(t){e.item=t},expression:"item"}}),e._v(" "),a("v-text-field",{attrs:{disabled:""!=e.newPassword,rules:e.emailRules,label:"Email","prepend-inner-icon":"mdi-email",required:"",solo:"",outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.passwordRules,label:e.newPassword?"Crear contraseña":"Contraseña","prepend-inner-icon":"mdi-lock",type:"password",required:"",solo:"",outlined:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),e.newPassword?a("v-text-field",{attrs:{rules:e.passwordRules,label:"Repetir contraseña","prepend-inner-icon":"mdi-lock",type:"password",required:"",solo:"",outlined:""},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}):e._e(),e._v(" "),e.newPassword?e._e():a("v-checkbox",{attrs:{dark:"",label:"Recordar contraseña?",required:""},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}}),e._v(" "),a("v-btn",{attrs:{"min-width":"100%",rounded:"",color:"primary",loading:e.loading},on:{click:e.authenticate}},[e._v(e._s("Iniciar sesión"))]),e._v(" "),e.newPassword?e._e():a("div",{staticClass:"mt-5 font-weight-600 white--text"},[a("a",{staticClass:"white--text",on:{click:function(t){e.dialog=!0}}},[e._v("Olvide mi contraseña")])])],1)],1)])],1)])],1)}),[],!1,null,"c7ecaffe",null);t.default=$.exports;h()($,{VAlert:b.a,VAvatar:w.a,VBtn:g.a,VCard:y.a,VCheckbox:x.a,VChip:_.a,VCol:P.a,VForm:k.a,VIcon:O.a,VListItemAvatar:V.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VRow:j.a,VSelect:R.a,VTextField:S.a})}}]);