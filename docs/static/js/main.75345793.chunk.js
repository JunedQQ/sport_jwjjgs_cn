(this.webpackJsonpsport=this.webpackJsonpsport||[]).push([[0],{191:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(279),c=n(33),r=n.n(c),i=n(0),s=n.n(i),o=n(22),u=n.n(o),d=(n(191),n(85)),j=n(26),l=n(126),b=n.n(l),h=n(150),m=n(108),p=n(53),f=n(165),O=n(274),x=n(75),g=n(281),v=n(275),y=n(278),I=n(276),T=n(280),w=n(277),S=n(168),k=n(282),C=n(283),L=n(76),P=n.n(L),z=n(151),B=n.n(z),M=n(94),R=n.n(M),q=n(7),J="V 2.5.6",D=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},E=function(){return new Promise((function(e,t){r.a.get("/health/api/v1/homePage/user").then((function(t){var n=t.runningRule,a=n.rule,c=n.userCampus;e({rule:a,userCampus:c})})).catch((function(){t(!1)}))}))},F=function(e){return new Promise((function(t,n){var a={campusId:e,latitude:"30.786842".concat(D(1e4,99999)),longitude:"103.886128".concat(D(1e4,99999)),type:1};r.a.post("/running/api/v1/running/start",Object(p.a)({},a)).then((function(e){var n=e.randomCircuit;t(Object(p.a)({},n))})).catch((function(){n(!1)}))}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((function(a,c){var i=Object(p.a)(Object(p.a)({},e),{},{time:P()().format("YYYY-MM-DD HH:mm:ss")}),s={circuitInfo:{circuitString:JSON.stringify(i)},version:J,valid:1,id:1,type:1,platform:1,stepRate:D(40,80),invalidReason:"",distance:t,validDistance:t,phone:"",startTime:P()().valueOf(),endTime:P()().add(n,"seconds").valueOf(),calories:parseInt(t/20)},o=[s.startTime+D(10,100),s.endTime-D(1500,2500)];s.totalTime=parseInt((o[1]-o[0])/1e3);for(var u=[],d=[],j=[],l=i.randomCircuit,b=l.requireLatitude,h=l.requireLongitude,m=0;m<3;m++)u.push(b[m]),d.push(h[m]),j.push(D(2,20));s.circuitInfo=Object(p.a)(Object(p.a)({},s.circuitInfo),{},{latitude:[u],longitude:[d],segment:[o],speed:j,calories:parseInt(t/20)}),s.md5=B()("EndRunningInfo{a='".concat(s.invalidReason,"', b=").concat(s.totalTime,", c=").concat(s.distance,", d=").concat(s.type,", e=").concat(s.startTime,", f=").concat(s.endTime,", g='").concat(s.phone,"'}"));var f={};Object.keys(s).sort().map((function(e){return f[e]=s[e]})),r.a.post("/running/api/v1/running/end3",f).then((function(e){a(e)})).catch((function(){c(!1)}))}))};var Y=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(a.b)((function(e){return new Promise(function(){var t=Object(h.a)(b.a.mark((function t(n,a){var c,r,i,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E().catch((function(){return a("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25")}));case 2:return c=t.sent,t.next=5,F(c.rule.campusId).catch((function(){return a("\u83b7\u53d6\u8dd1\u6b65\u4fe1\u606f\u5931\u8d25")}));case 5:return r=t.sent,t.next=8,N({runningRule:c,randomCircuit:r},e.distance,e.time).catch((function(e){a("\u7ed3\u675f\u8dd1\u6b65\u5931\u8d25")}));case 8:i=t.sent,s=i.invalidReason,1===i.valid?n(!0):a(s);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}),{manual:!0,onSuccess:function(){f.b.success("\u8dd1\u6b65\u5b8c\u6210"),p()},onError:function(e){f.b.error(e),p()}}),o=s.loading,u=s.run,j=Object(a.b)((function(){return e=1,new Promise((function(t,n){var a=P()().subtract(720,"days").valueOf(),c=P()().valueOf();r.a.post("running/api/v1/running/recordList",{pageNum:e,pageSize:100,startTime:a,endTime:c}).then((function(e){t(e.items)})).catch((function(e){n("\u83b7\u53d6\u5217\u8868\u5931\u8d25")}))}));var e}),{manual:!0,onSuccess:function(e){c(e),console.log(e)},onError:function(e){f.b.error(e)}}),l=j.loading,p=j.run;return Object(i.useEffect)((function(){p(),E()}),[]),Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(O.a,{title:"\u4e50\u5065",subTitle:"\u5b8c\u5168\u514d\u8d39",extra:Object(q.jsx)(d.b,{to:"/login",children:Object(q.jsx)(x.a,{type:"link",children:"\u5207\u6362\u8d26\u53f7"})}),children:Object(q.jsxs)(g.b,{direction:"vertical",style:{width:"100%"},size:"large",children:[Object(q.jsxs)(v.a,{title:"\u544a\u77e5 \u66f4\u65b0\u4e8e2021/03/16",children:[Object(q.jsxs)(y.a.Text,{children:["1.\u672c\u529f\u80fd\u5c5e\u4e8e\u7eaf\u524d\u7aef\u5b9e\u73b0\uff0c\u4e0d\u5b58\u5728\u6536\u96c6\uff0c\u4fdd\u7559\u7528\u6237\u4fe1\u606f\u7b49",Object(q.jsx)("br",{})]}),Object(q.jsxs)(y.a.Text,{children:["2.\u4ec5\u4f9b\u5b66\u4e60\u7814\u7a76\u4f7f\u7528\uff0c\u5207\u52ff\u7528\u4e8e\u975e\u6cd5\u6216\u5546\u4e1a\u7b49\u7528\u9014",Object(q.jsx)("br",{})]}),Object(q.jsxs)(y.a.Text,{children:["3.\u5b8c\u5168\u514d\u8d39\u5f00\u6e90\uff0c\u8bf7\u52ff\u4e0a\u5f53\u53d7\u9a97\uff0c\u5982\u679c\u4f60\u662f\u6536\u8d39\u770b\u5230\u9875\u9762\uff0c\u8bf7\u53ca\u65f6\u4e3e\u62a5\u8bc8\u9a97\u8005",Object(q.jsx)("br",{})]}),Object(q.jsxs)(y.a.Text,{children:["4.github:",Object(q.jsx)("a",{href:"https://github.com/jwjjgs/sport_jwjjgs_cn",children:"\u70b9\u6211\u67e5\u770b\u5f00\u6e90\u4ee3\u7801/\u66f4\u65b0\u65e5\u5fd7"}),Object(q.jsx)("br",{})]})]}),Object(q.jsxs)(I.a,{onFinish:function(e){u(e)},children:[Object(q.jsx)(I.a.Item,{name:"distance",children:Object(q.jsx)(T.a,{addonBefore:"\u8ddd\u79bb",addonAfter:"\u7c73"})}),Object(q.jsx)(I.a.Item,{name:"time",children:Object(q.jsx)(T.a,{addonBefore:"\u65f6\u95f4",addonAfter:"\u79d2"})}),Object(q.jsx)(I.a.Item,{children:Object(q.jsx)(x.a,{htmlType:"submit",type:"primary",block:!0,loading:o,children:"\u5954\u8dd1"})})]}),Object(q.jsx)(w.b,{loading:l,itemLayout:"horizontal",dataSource:n,renderItem:function(e){return Object(q.jsxs)(w.b.Item,{children:[Object(q.jsx)(w.b.Item.Meta,{avatar:1===e.valid?Object(q.jsx)(k.a,{twoToneColor:"#52c41a"}):Object(q.jsx)(C.a,{twoToneColor:"#eb2f96"}),title:"\u8ddd\u79bb:".concat(e.validDistance,"m \u65f6\u95f4:").concat(e.totalTime,"s"),description:e.startTime}),Object(q.jsx)(S.a,{content:Object(q.jsxs)(g.b,{direction:"vertical",children:[Object(q.jsx)(d.b,{to:{pathname:"/",state:{circuitInfo:JSON.parse(e.circuitInfo)}},children:Object(q.jsx)(x.a,{ghost:!0,type:"primary",children:"\u67e5\u770b\u8def\u7ebf\u8f68\u8ff9"})}),Object(q.jsx)(x.a,{type:"primary",onClick:function(){try{var t=JSON.parse(e.circuitInfo),n=t.latitude,a=t.longitude,c=t.speed;R()(JSON.stringify({latitude:n,longitude:a,speed:c})),f.b.success("\u5df2\u590d\u5236")}catch(r){f.b.error("\u590d\u5236\u5931\u8d25")}},children:"\u5bfc\u51fa\u8f68\u8ff9\u6570\u636e"})]}),children:Object(q.jsx)(x.a,{children:"\u66f4\u591a"})})]})}})]})})})},V=n(87);var A=function(){var e=Object(j.g)(),t=Object(i.useState)([]),n=Object(m.a)(t,2),c=n[0],s=n[1];Object(i.useEffect)((function(){r.a.get("/health/api/v2/organization/list",{params:{orgType:1}}).then((function(e){s(e.map((function(e){return{label:e.name,value:e.id}})))}))}),[]);var o=Object(a.b)((function(e){return{url:"/health/api/v1/login",method:"post",data:Object(p.a)({},e)}}),{manual:!0,onSuccess:function(t){var n=t.token;localStorage.setItem("token","Bearer ".concat(n)),f.b.success("\u767b\u9646\u6210\u529f"),e.push("/")}}),u=o.loading,d=o.run;return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(O.a,{title:"\u767b\u5f55",children:Object(q.jsxs)(I.a,{onFinish:function(e){return d(e)},initialValues:{username:"",password:""},children:[Object(q.jsx)(I.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}],children:Object(q.jsx)(T.a,{addonBefore:"\u8d26\u53f7",type:"tel",maxLength:11})}),Object(q.jsx)(I.a.Item,{name:"password",maxLength:16,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(q.jsx)(T.a.Password,{addonBefore:"\u5bc6\u7801"})}),Object(q.jsx)(I.a.Item,{name:"orgId",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u533a"}],children:Object(q.jsx)(V.a,{options:c})}),Object(q.jsx)(I.a.Item,{children:Object(q.jsx)(x.a,{htmlType:"submit",type:"primary",block:!0,loading:u,children:"\u767b\u5f55"})})]})})})},H=n(130);var Q=function(e){var t=Object(H.b)({zoom:17,center:"\u56db\u5ddd"});return t.setContainer,t.map,Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(O.a,{title:"\u8f68\u8ff9\u663e\u793a",onBack:function(){e.history.goBack()}}),Object(q.jsx)("div",{style:{height:"100vh",paddingTop:"72px",marginTop:"-72px"},children:Object(q.jsx)(H.a,{akay:"DmvaTbVhDI5FzcLmG8zcZQdPllicdMXQ"})})]})};var _=function(){return Object(q.jsx)(d.a,{children:Object(q.jsxs)(j.d,{children:[Object(q.jsx)(j.b,{path:"/login",component:A}),Object(q.jsx)(j.b,{path:"/",render:function(){return localStorage.getItem("token")?Object(q.jsxs)(j.d,{children:[Object(q.jsx)(j.b,{path:"/map",component:Q}),Object(q.jsx)(j.b,{path:"/",component:Y})]}):Object(q.jsx)(j.a,{to:"/login"})}})]})})};r.a.defaults.withCredentials=!1,r.a.defaults.baseURL="https://upes.legym.cn/",r.a.defaults.headers.post["Content-Type"]="application/json;; charset=utf-8",r.a.interceptors.request.use((function(e){"post"===e.method.toLowerCase()&&"object"===typeof e.data&&(e.data=JSON.stringify(e.data));var t=localStorage.getItem("token");return t&&(e.headers.authorization=t),e})),r.a.interceptors.response.use((function(e){var t=e.data,n=t.code,a=t.message,c=t.data;return 0!==n?(f.b.warning(a||"\u672a\u77e5\u539f\u56e0"),Promise.reject()):(a&&f.b.success(a),c)})),u.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(a.a,{value:{requestMethod:function(e){return r()(e)}},children:Object(q.jsx)(_,{})})}),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.75345793.chunk.js.map