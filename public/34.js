(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{114:function(t,e,n){var i=n(274);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(8)(i,r);i.locals&&(t.exports=i.locals)},22:function(t,e,n){"use strict";var i=n(75);e.a=i.a},262:function(t,e,n){"use strict";n(114);var i=n(38),r=n(52),a=n(25),s=n(2);e.a=Object(s.a)(r.a,a.a,i.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.a.options.computed.classes.call(this)}},styles(){const t={...i.a.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},274:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'.theme--light.v-card {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-card > .v-card__text,\n.theme--light.v-card .v-card__subtitle {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-card {\n  background-color: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-card > .v-card__text,\n.theme--dark.v-card .v-card__subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-sheet.v-card {\n  border-radius: 4px;\n}\n.v-sheet.v-card:not(.v-sheet--outlined) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-card.v-sheet--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-card {\n  border-width: thin;\n  display: block;\n  max-width: 100%;\n  outline: none;\n  text-decoration: none;\n  transition-property: box-shadow, opacity;\n  overflow-wrap: break-word;\n  position: relative;\n  white-space: normal;\n}\n.v-card > *:first-child:not(.v-btn):not(.v-chip),\n.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.v-card > *:last-child:not(.v-btn):not(.v-chip) {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.v-card__progress {\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.v-card__subtitle + .v-card__text {\n  padding-top: 0;\n}\n\n.v-card__subtitle,\n.v-card__text {\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.375rem;\n  letter-spacing: 0.0071428571em;\n}\n\n.v-card__subtitle,\n.v-card__text,\n.v-card__title {\n  padding: 16px;\n}\n\n.v-card__title {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  line-height: 2rem;\n  word-break: break-all;\n}\n.v-card__title + .v-card__subtitle,\n.v-card__title + .v-card__text {\n  padding-top: 0;\n}\n.v-card__title + .v-card__subtitle {\n  margin-top: -16px;\n}\n\n.v-card__text {\n  width: 100%;\n}\n\n.v-card__actions {\n  align-items: center;\n  display: flex;\n  padding: 8px;\n}\n.v-card__actions > .v-btn.v-btn {\n  padding: 0 8px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn {\n  margin-left: 8px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--left {\n  margin-left: 4px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--right {\n  margin-right: 4px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn + .v-btn {\n  margin-right: 8px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--left {\n  margin-right: 4px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--right {\n  margin-left: 4px;\n}\n\n.v-card--flat {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-card--hover {\n  cursor: pointer;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-card--hover:hover, .v-card--hover:focus {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.v-card--link {\n  cursor: pointer;\n}\n.v-card--link .v-chip {\n  cursor: pointer;\n}\n.v-card--link:focus:before {\n  opacity: 0.08;\n}\n.v-card--link:before {\n  background: currentColor;\n  bottom: 0;\n  content: "";\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.2s opacity;\n}\n\n.v-card--disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-card--disabled > *:not(.v-card__progress) {\n  opacity: 0.6;\n  transition: inherit;\n}\n\n.v-card--loading {\n  overflow: hidden;\n}\n\n.v-card--raised {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}',""])},41:function(t,e,n){"use strict";var i={data:function(){return{options:{},backToList:!1}},watch:{options:{handler:function(){if(this.backToList&&(this.options.page!=this.page||this.perPage==this.total&&-1!=this.options.itemsPerPage||this.options.itemsPerPage!=this.perPage))return this.options.page=this.page,void(this.options.itemsPerPage=this.perPage==this.total?-1:this.perPage);this.backToList?this.backToList=!1:(this.options.itemsPerPage!=this.perPage?(this.perPage=-1==this.options.itemsPerPage?this.total:this.options.itemsPerPage,this.page=1):this.page=this.options.page,this.getItems())},deep:!0}},created:function(){this.backToList=this.page}},r=n(6),a=Object(r.a)(i,void 0,void 0,!1,null,null,null);e.a=a.exports},481:function(t,e,n){"use strict";n.r(e);var i=n(15),r=n(10);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={mixins:[n(41).a],data:function(){return{headers:[{text:"Creado",value:"created_at"},{text:"Remitente",align:"start",sortable:!1,value:"user"},{text:"Rol",value:"user.role.name"},{text:"Beneficiado",value:"user2"},{text:"Rol",value:"user2.role.name"},{text:"Acción",value:"action"},{text:"Status",value:"status"},{text:"Transferido",value:"amount"},{text:"Id",value:"id"}]}},computed:s(s({},Object(r.b)("finance",["page","items","loadingList","perPage","pages","total","search",,"filterActive","filters"])),Object(r.b)("user",["usersSelect"])),watch:{"filters.from":function(t){this.getItems()},"filters.to":function(t){this.getItems()},"filters.state":function(t){this.getItems()},"filters.first_name":function(t){var e=this;if(!t)return this.loadingList=!1,void(1!=this.page?this.page=1:this.getItems());clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.length<3||(1!=e.page?e.page=1:e.getItems())}),1e3)},"filters.email":function(t){var e=this;if(!t)return this.loadingList=!1,void(1!=this.page?this.page=1:this.getItems());clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.length<3||(1!=e.page?e.page=1:e.getItems())}),1e3)},"filters.last_name":function(t){var e=this;if(!t)return this.loadingList=!1,void(1!=this.page?this.page=1:this.getItems());clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.length<3||(1!=e.page?e.page=1:e.getItems())}),1e3)},"filters.phone":function(t){var e=this;if(!t)return this.loadingList=!1,void(1!=this.page?this.page=1:this.getItems());clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.length<3||(1!=e.page?e.page=1:e.getItems())}),1e3)}},methods:s(s({},Object(i.b)({getItemsAction:"finance/getItems",getRemoveAction:"finance/remove",getUsers:"generic/getItemsGeneric",getCompanies:"generic/getItemsGeneric"})),{},{getItems:function(){this.getItemsAction("finance")}})},l=n(6),p=n(11),d=n.n(p),v=n(106),g=n(262),h=n(398),u=n(476),m=n(84),b=n(399),f=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"/finance/pdf/download"}},[n("v-icon",{staticClass:"cursor-pointer",attrs:{color:"teal",size:"40"}},[t._v("mdi-file-pdf")])],1)])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{elevation:"3"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"server-items-length":t.total,options:t.options,loading:t.loadingList,"items-per-page":t.perPage,"footer-props":{showFirstLastPage:!0,itemsPerPageOptions:[10,15,30,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var n=e.item;return[t._v(t._s(t._f("dateFormat")(n.created_at)))]}},{key:"item.user",fn:function(e){var i=e.item;return[i.user?n("div",{staticStyle:{"white-space":"nowrap"}},[n("v-avatar",{attrs:{size:"40",color:"grey"}},[i.user.image?n("img",{attrs:{src:i.user.image.url}}):n("v-icon",{attrs:{dark:"",size:"40"}},[t._v("mdi-account")])],1),t._v(" "),n("label",{staticClass:"ml-3"},[t._v(t._s(i.user.name))])],1):n("div",[t._v("No disponible")])]}},{key:"item.user2",fn:function(e){var i=e.item;return[i.user2?n("div",{staticStyle:{"white-space":"nowrap"}},[n("v-avatar",{attrs:{size:"40",color:"grey"}},[i.user2.image?n("img",{attrs:{src:i.user2.image.url}}):n("v-icon",{attrs:{dark:"",size:"40"}},[t._v("mdi-account")])],1),t._v(" "),n("label",{staticClass:"ml-3"},[t._v(t._s(i.user2.name))])],1):n("div",[t._v("No disponible")])]}},{key:"item.amount",fn:function(e){var n=e.item;return[t._v(t._s(t._f("money")(n.amount)))]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;d()(f,{VAvatar:v.a,VCard:g.a,VCol:h.a,VDataTable:u.a,VIcon:m.a,VRow:b.a})}}]);