(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["support"],{1796:function(e,t,c){},"3c68":function(e,t,c){"use strict";var a=c("7a23"),n={class:"cpn-get-in-touch"},o={class:"contain"},r={key:0,class:"t-big text-center"},l={key:1,class:"t-big text-center"},s=Object(a["createTextVNode"])("GET IN "),i=Object(a["createElementVNode"])("span",{class:"tune"},"TOUCH",-1),m=[s,i],u=Object(a["createElementVNode"])("div",{class:"t-small t-small-mg text-center t2"},"Tell us everything about your questions/problem,we'll be glad to help. Fill out the form, we will get back to you shortly.",-1),d=Object(a["createElementVNode"])("div",{class:"label"},"First Name",-1),b=Object(a["createElementVNode"])("div",{class:"label"},"Last Name",-1),O=Object(a["createElementVNode"])("div",{class:"label"},"Your Email",-1),j=Object(a["createElementVNode"])("div",{class:"label"},"Your Message",-1),p={class:"text-right"},f=Object(a["createTextVNode"])("Send Message");function g(e,t,c,s,i,g){var v=Object(a["resolveComponent"])("el-input"),N=Object(a["resolveComponent"])("el-col"),h=Object(a["resolveComponent"])("el-row"),V=Object(a["resolveComponent"])("el-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",n,[Object(a["createElementVNode"])("div",o,[g.haveTitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["renderSlot"])(e.$slots,"title")])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,m)),u,Object(a["createVNode"])(h,{gutter:40},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{sm:12},{default:Object(a["withCtx"])((function(){return[d,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.fName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.fName=e}),placeholder:"What's your first name?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(N,{sm:12},{default:Object(a["withCtx"])((function(){return[b,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.lName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.lName=e}),placeholder:"What's your last name?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(N,null,{default:Object(a["withCtx"])((function(){return[O,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.email=e}),placeholder:"What's your email?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(N,null,{default:Object(a["withCtx"])((function(){return[j,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.msg,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.msg=e}),rows:5,type:"textarea",placeholder:"Tell us how we can help!"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createElementVNode"])("div",p,[Object(a["createVNode"])(V,{type:"primary",class:"btn",onClick:g.submit,loading:i.loading},{default:Object(a["withCtx"])((function(){return[f]})),_:1},8,["onClick","loading"])])])])}var v=c("1da1"),N=(c("96cf"),c("3ef4")),h=c("f00f"),V={data:function(){return{form:{fName:"",lName:"",email:"",msg:""},loading:!1}},computed:{haveTitle:function(){return!!Object(a["useSlots"])().title}},methods:{submit:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var c,a,n,o,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,c=e.form,a=c.fName,n=c.lName,o=c.email,r=c.msg,a){t.next=4;break}return t.abrupt("return",Object(N["a"])({message:"Please enter your first name",type:"warning"}));case 4:if(n){t.next=6;break}return t.abrupt("return",Object(N["a"])({message:"Please enter your last name",type:"warning"}));case 6:if(o){t.next=8;break}return t.abrupt("return",Object(N["a"])({message:"Please enter your email",type:"warning"}));case 8:if(h["b"](o)){t.next=10;break}return t.abrupt("return",Object(N["a"])({message:"Invalid email",type:"warning"}));case 10:if(r){t.next=12;break}return t.abrupt("return",Object(N["a"])({message:"Please enter your message",type:"warning"}));case 12:return l={type:"CONTACT",firstName:a,lastName:n,email:o,message:r},e.loading=!0,t.next=16,e.$q.post("/api/mail",l);case 16:t.sent,Object(N["a"])({message:"Submitted successfully",type:"success"}),e.form={fName:"",lName:"",email:"",msg:""},e.loading=!1,t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](0),e.loading=!1,Object(N["a"])({message:t.t0.message||t.t0,type:"error"});case 26:case"end":return t.stop()}}),t,null,[[0,22]])})))()}}},k=(c("7734"),c("d959")),y=c.n(k);const w=y()(V,[["render",g]]);t["a"]=w},7734:function(e,t,c){"use strict";c("1796")},b8fa:function(e,t,c){"use strict";c.r(t);c("9911");var a=c("7a23"),n={class:"page-contact"},o=Object(a["createStaticVNode"])('<section class="sct1 bg4 text-center"><div class="contain"><div class="t-banner3">- Contact Us -</div><div class="t-banner1 t1">We believe <span class="tune">Technology</span> can change the World, do you?</div><div class="t-banner2 t2"> Mainet is committed to fill in the gap between traditional e-commerce and decentralized blockchain. We know that&#39;s our mission to archieve that goal. If you have any question, find the answer below. </div></div></section>',1),r={class:"sct2"},l={class:"contain"},s=Object(a["createElementVNode"])("div",{class:"t-big text-center"},[Object(a["createTextVNode"])("How can we "),Object(a["createElementVNode"])("span",{class:"tune"},"help you ?")],-1),i={class:"color1 title"},m={class:"desc"},u=["href"],d={key:1,class:"item card-box-shadow2"},b={class:"color1 title"},O={class:"desc"},j=["href"],p=Object(a["createElementVNode"])("div",{class:"t-muted text-center t3"},[Object(a["createTextVNode"])("If not mentioned above, please refer to the FAQ, please visit "),Object(a["createElementVNode"])("a",{href:"https://docs.mainet.network",target:"_blank"},"docs.mainet.network")],-1);function f(e,t,c,f,g,v){var N=Object(a["resolveComponent"])("Menu"),h=Object(a["resolveComponent"])("el-image"),V=Object(a["resolveComponent"])("router-link"),k=Object(a["resolveComponent"])("el-col"),y=Object(a["resolveComponent"])("el-row"),w=Object(a["resolveComponent"])("GetInTouch"),x=Object(a["resolveComponent"])("EnterEmail"),C=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(N,{activeIndex:"contact"}),Object(a["createElementVNode"])("div",n,[o,Object(a["createElementVNode"])("section",r,[Object(a["createElementVNode"])("div",l,[s,Object(a["createVNode"])(y,{class:"list",gutter:40},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.sct2,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(k,{sm:12,md:8,key:t},{default:Object(a["withCtx"])((function(){return[e.link?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:0,to:e.link,class:"item card-box-shadow2"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(h,{class:"img",src:e.img},null,8,["src"]),Object(a["createElementVNode"])("div",i,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",m,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.desc)+" ",1),e.mail?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:0,class:"mail",href:"mailto:"+e.mail},Object(a["toDisplayString"])(e.mail),9,u)):Object(a["createCommentVNode"])("",!0)])]})),_:2},1032,["to"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,[Object(a["createVNode"])(h,{class:"img",src:e.img},null,8,["src"]),Object(a["createElementVNode"])("div",b,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",O,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.desc)+" ",1),e.mail?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:0,class:"mail",href:"mailto:"+e.mail},Object(a["toDisplayString"])(e.mail),9,j)):Object(a["createCommentVNode"])("",!0)])]))]})),_:2},1024)})),128))]})),_:1}),p])])]),Object(a["createVNode"])(w),Object(a["createVNode"])(x),Object(a["createVNode"])(C)],64)}var g=c("fb62"),v=c("4cf1"),N=c("fd2d"),h=c("3c68"),V=(c("e2a5"),Object(a["defineComponent"])({components:{Menu:g["a"],EnterEmail:v["a"],Footer:N["a"],GetInTouch:h["a"]},data:function(){return{sct2:[]}},mounted:function(){this.init()},methods:{init:function(){this.sct2=[{img:"img/contact-sct2-1.svg",title:"Global Customer Support",desc:"If you need product support, please email to: ",mail:"support@mainet.network"},{img:"img/contact-sct2-2.svg",title:"Business Inquiries",desc:"For media/business inquiries, please email to: ",mail:"business@mainet.network"},{img:"img/contact-sct2-3.svg",title:"Node operator",desc:"If you are an investor Apply Node Server Installation",link:"/node-maintainers"},{img:"img/contact-sct2-4.svg",title:"Dev sDK",desc:"To learn more, contribute or share feedback about SDK",link:"/dev-res"},{img:"img/contact-sct2-5.svg",title:"Careers",desc:"Interested in working at Mainet? Visit our Careers Page or send your CV to: ",mail:"hr@mainet.network"},{img:"img/contact-sct2-6.svg",title:"Join a growing community",desc:"Mainet is building an active community, we welcome you to join at any time",link:"/community"}]}}})),k=c("d959"),y=c.n(k);const w=y()(V,[["render",f]]);t["default"]=w},e2a5:function(e,t,c){}}]);