(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{336:function(e,t,r){"use strict";r.r(t);function l(){return(l=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e}).apply(this,arguments)}var o=Object.prototype.hasOwnProperty;var n,c,h,d=(n=!1,c=[],h={resolved:function(){return n},resolve:function(e){if(!n){n=!0;for(var i=0,t=c.length;i<t;i++)c[i](e)}},promise:{then:function(e){n?e():c.push(e)}}},{notify:function(){h.resolve()},wait:function(){return h.promise},render:function(e,t,r){this.wait().then((function(){r(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){o.call(window,"grecaptcha")&&o.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!h.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=d.notify);var m={components:{VueRecaptcha:{name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var script=document.createElement("script");script.id=this.recaptchaScriptId,script.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,script.async=!0,script.defer=!0,document.head.appendChild(script)}},mounted:function(){var e=this;d.checkRecaptchaLoad();var t=l({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),r=this.$slots.default?this.$el.children[0]:this.$el;d.render(r,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){d.reset(this.$widgetId)},execute:function(){d.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}}},data:()=>({form:{displayName:"",city:"",province:"",message:"",recaptcha:!1},rules:{displayName:[{required:!0,message:"You must enter a name",trigger:"change"}],city:[{required:!0,message:"You must enter your city",trigger:"change"}],province:[{required:!0,message:"You must select your province",trigger:"change"}],message:[{required:!0,message:"You must enter a message",trigger:"change"},{min:25,message:"You must enter at least 25 characters",trigger:"change"},{max:280,message:"You must enter at most 280 characters",trigger:"change"}],recaptcha:[{validator:(e,t,r)=>{t?r():r(new Error("Please prove you are not a robot"))},message:"You must prove you are not a robot"}]},options:[{label:"Andhra Pradesh",value:"AP"},{label:"Arunachal Pradesh",value:"PR"},{label:"Assam",value:"AS"},{label:"Bihar",value:"BR"},{label:"Chhattisgarh",value:"CG"},{label:"Goa",value:"GA"},{label:"Gujarat",value:"GJ"},{label:"Haryana",value:"HR"},{label:"Himachal Pradesh",value:"HP"},{label:"Jharkhand",value:"JH"},{label:"Karnataka",value:"KA"},{label:"Kerala",value:"KL"},{label:"Madhya Pradesh",value:"MP"},{label:"Maharashtra",value:"MH"},{label:"Manipur",value:"MN"},{label:"Meghalaya",value:"ML"},{label:"Mizoram",value:"MZ"},{label:"Nagaland",value:"NL"},{label:"Odisha",value:"OR"},{label:"Punjab",value:"PB"},{label:"Rajasthan",value:"RJ"},{label:"Sikkim",value:"SK"},{label:"Tamil Nadu",value:"TN"},{label:"Telangana",value:"TG"},{label:"Tripura",value:"TR"},{label:"Uttar Pradesh",value:"UP"},{label:"Uttarakhand",value:"UT"},{label:"West Bengal",value:"WB"},{label:"Andaman and Nicobar Islands",value:"AN"},{label:"Chandigarh",value:"CH"},{label:"Dadra and Nagar Haveli and Daman and Diu",value:"DD"},{label:"Delhi",value:"DL"},{label:"Jammu and Kashmir",value:"JK"},{label:"Ladakh",value:"LA"},{label:"Lakshadweep",value:"LD"},{label:"Puducherry",value:"PY"}]}),methods:{onVerify(){this.form.recaptcha=!0},onExpired(){this.form.recaptcha=!1},submit(){this.$refs.ShareMessage.validateField("recaptcha"),this.$refs.ShareMessage.validate(async e=>{if(e){const e=this.$fireStoreObj.FieldValue.serverTimestamp(),t=this.$fireStoreObj.FieldValue.increment(1);this.$fireStore.collection("statistics").doc("counters").set({totalMessages:t},{merge:!0}),this.$fireStore.collection("messages").add({timestamp:e,...this.form}),this.$message.success("Thanks for showing your support. Your message has been shared!"),this.$router.push({name:"index"})}})}}},f=r(3),v={components:{ShareMessage:Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ShareMessage",staticClass:"grid grid-cols-3 gap-4",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("el-form-item",{staticClass:"col-span-1",attrs:{label:"Name",prop:"displayName"}},[r("el-input",{attrs:{placeholder:"Enter your name",autofocus:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1),e._v(" "),r("el-form-item",{staticClass:"col-span-1",attrs:{label:"City",prop:"city"}},[r("el-input",{attrs:{placeholder:"Enter your city"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),e._v(" "),r("el-form-item",{staticClass:"col-span-1",attrs:{label:"Province",prop:"province"}},[r("el-select",{staticClass:"block w-full",attrs:{placeholder:"Select your province",filterable:"","value-key":"value","default-first-option":""},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{staticClass:"col-span-3",attrs:{label:"Message",prop:"message"}},[r("el-input",{staticClass:"w-full",attrs:{type:"textarea",autosize:{minRows:5},placeholder:"Kudos to our doctors, nurses, grocery clerks, delivery folks, my neighbours, my co-workers, my family...",minlength:25,maxlength:280,"show-word-limit":""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("el-form-item",{staticClass:"block h-24",attrs:{prop:"recaptcha"}},[r("vue-recaptcha",{ref:"recaptcha",attrs:{sitekey:"6LdACeMUAAAAAEL7Nz72ulZtfGKJ2OtpJK6XCSjB",loadRecaptchaScript:!0},on:{verify:e.onVerify,expired:e.onExpired}})],1),e._v(" "),r("el-form-item",{staticClass:"block"},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Share")])],1)],1)],1)}),[],!1,null,null,null).exports}},y=Object(f.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"post-message max-w-4xl mx-auto px-6"},[t("nuxt-link",{staticClass:"text-xs text-gray-500",attrs:{to:{name:"index"}}},[t("i",{staticClass:"fa fa-angle-left"}),this._v(" Back")]),this._v(" "),t("h1",{staticClass:"font-medium text-4xl text-red-500 mb-4"},[this._v("Post a message")]),this._v(" "),t("p",{staticClass:"text-gray-600 mb-6"},[this._v("Enter your message to support your fellow Indians, as we all power through the COVID-19 crisis.")]),this._v(" "),t("ShareMessage")],1)}),[],!1,null,null,null);t.default=y.exports}}]);