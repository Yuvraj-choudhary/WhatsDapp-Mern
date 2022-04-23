"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[633],{9633:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(6651),a=n(5971),s=n(2791),i=n(5336),o=n(4562),l=n(5223),c=n(4083),d=n(684);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var h=["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"],f=["isDisabled","isFocusable"],m=["isSelected","id","children"],x=(0,o.n)(),b=x[0],v=x[1],g=x[2],w=x[3];var y=(0,d.kr)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),j=y[0],C=y[1];function S(e,t){return e+"--tab-"+t}function I(e,t){return e+"--tabpanel-"+t}var N=["children","className"],k=["htmlProps","descendants"],_=(0,r.Gp)((function(e,t){var n=(0,r.jC)("Tabs",e),i=(0,r.Lr)(e),o=i.children,c=i.className,d=function(e){var t=e.defaultIndex,n=e.onChange,r=e.index,a=e.isManual,i=e.isLazy,o=e.lazyBehavior,c=void 0===o?"unmount":o,d=e.orientation,u=void 0===d?"horizontal":d,f=e.direction,m=void 0===f?"ltr":f,x=p(e,h),b=s.useState(null!=t?t:0),v=b[0],w=b[1],y=(0,l.Tx)({defaultValue:null!=t?t:0,value:r,onChange:n}),j=y[0],C=y[1];s.useEffect((function(){null!=r&&w(r)}),[r]);var S=g();return{id:(0,l.Me)(e.id,"tabs"),selectedIndex:j,focusedIndex:v,setSelectedIndex:C,setFocusedIndex:w,isManual:a,isLazy:i,lazyBehavior:c,orientation:u,descendants:S,direction:m,htmlProps:x}}(p(i,N)),f=d.htmlProps,m=d.descendants,x=p(d,k),v=s.useMemo((function(){return x}),[x]),w=(0,a.CE)(f,["isFitted"]);return s.createElement(b,{value:m},s.createElement(j,{value:v},s.createElement(r.Fo,{value:n},s.createElement(r.m$.div,u({className:(0,a.cx)("chakra-tabs",c),ref:t},w,{__css:n.root}),o))))}));a.Ts&&(_.displayName="Tabs");var E=(0,r.Gp)((function(e,t){var n=(0,r.yK)(),o=function(e){var t=e.isDisabled,n=e.isFocusable,r=p(e,f),s=C(),o=s.setSelectedIndex,l=s.isManual,c=s.id,h=s.setFocusedIndex,m=s.selectedIndex,x=w({disabled:t&&!n}),b=x.index,v=x.register,g=b===m,y=(0,i.h)(u({},r,{ref:(0,d.lq)(v,e.ref),isDisabled:t,isFocusable:n,onClick:(0,a.v0)(e.onClick,(function(){o(b)}))}));return u({},y,{id:S(c,b),role:"tab",tabIndex:g?0:-1,type:"button","aria-selected":g,"aria-controls":I(c,b),onFocus:t?void 0:(0,a.v0)(e.onFocus,(function(){h(b),!l&&(!t||!n)&&o(b)}))})}(u({},e,{ref:t})),l=u({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},n.tab);return s.createElement(r.m$.button,u({},o,{className:(0,a.cx)("chakra-tabs__tab",e.className),__css:l}))}));a.Ts&&(E.displayName="Tab");var T=(0,r.Gp)((function(e,t){var n=function(e){var t=C(),n=t.focusedIndex,r=t.orientation,i=t.direction,o=v(),l=s.useCallback((function(e){var t,s=function(){var e=o.nextEnabled(n);e&&(0,a.T_)(e.node)},l=function(){var e=o.prevEnabled(n);e&&(0,a.T_)(e.node)},c="horizontal"===r,d="vertical"===r,u=(0,a.uh)(e),p="ltr"===i?"ArrowRight":"ArrowLeft",h=((t={})["ltr"===i?"ArrowLeft":"ArrowRight"]=function(){return c&&l()},t[p]=function(){return c&&s()},t.ArrowDown=function(){return d&&s()},t.ArrowUp=function(){return d&&l()},t.Home=function(){var e=o.firstEnabled();e&&(0,a.T_)(e.node)},t.End=function(){var e=o.lastEnabled();e&&(0,a.T_)(e.node)},t)[u];h&&(e.preventDefault(),h(e))}),[o,n,r,i]);return u({},e,{role:"tablist","aria-orientation":r,onKeyDown:(0,a.v0)(e.onKeyDown,l)})}(u({},e,{ref:t})),i=u({display:"flex"},(0,r.yK)().tablist);return s.createElement(r.m$.div,u({},n,{className:(0,a.cx)("chakra-tabs__tablist",e.className),__css:i}))}));a.Ts&&(T.displayName="TabList");var z=(0,r.Gp)((function(e,t){var n=function(e){var t=e.isSelected,n=e.id,r=e.children,i=p(e,m),o=C(),l=o.isLazy,c=o.lazyBehavior,d=s.useRef(!1);return t&&(d.current=!0),u({tabIndex:0},i,{children:(0,a.VI)({hasBeenSelected:d.current,isSelected:t,isLazy:l,lazyBehavior:c})?r:null,role:"tabpanel",hidden:!t,id:n})}(u({},e,{ref:t})),i=(0,r.yK)();return s.createElement(r.m$.div,u({outline:"0"},n,{className:(0,a.cx)("chakra-tabs__tab-panel",e.className),__css:i.tabpanel}))}));a.Ts&&(z.displayName="TabPanel");var F=(0,r.Gp)((function(e,t){var n=function(e){var t=C(),n=t.id,r=t.selectedIndex;return u({},e,{children:(0,d.WR)(e.children).map((function(e,t){return s.cloneElement(e,{isSelected:t===r,id:I(n,t),"aria-labelledby":S(n,t)})}))})}(e),i=(0,r.yK)();return s.createElement(r.m$.div,u({},n,{width:"100%",ref:t,className:(0,a.cx)("chakra-tabs__tab-panels",e.className),__css:i.tabpanels}))}));a.Ts&&(F.displayName="TabPanels");var L=(0,r.Gp)((function(e,t){var n=function(){var e=C(),t=v(),n=e.selectedIndex,r=e.orientation,i="horizontal"===r,o="vertical"===r,l=s.useState((function(){return i?{left:0,width:0}:o?{top:0,height:0}:void 0})),d=l[0],p=l[1],h=s.useState(!1),f=h[0],m=h[1];return(0,c.a)((function(){if(!(0,a.o8)(n)){var e=t.item(n);if(!(0,a.o8)(e)){i&&p({left:e.node.offsetLeft,width:e.node.offsetWidth}),o&&p({top:e.node.offsetTop,height:e.node.offsetHeight});var r=requestAnimationFrame((function(){m(!0)}));return function(){r&&cancelAnimationFrame(r)}}}}),[n,i,o,t]),u({position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:f?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},d)}(),i=u({},e.style,n),o=(0,r.yK)();return s.createElement(r.m$.div,u({ref:t},e,{className:(0,a.cx)("chakra-tabs__tab-indicator",e.className),style:i,__css:o.indicator}))}));a.Ts&&(L.displayName="TabIndicator");var P=n(8735),Z=n(9271),D=n(5861),G=n(885),O=n(7757),R=n.n(O),A=n(2908),H=n(4569),B=n.n(H),M=n(3393),K=n(5798),q=n(2504),U=n(1443),W=n(7860),$=(n(1724),n(184)),X=function(e){var t=e.setName,n=e.setEmail,r=e.setPassword,a=e.setConfirmpassword,s=e.picLoading,i=e.show,o=e.isLogin,l=e.postDetails,c=e.submitHandler,d=e.handleClick,u=e.email,p=e.password,h=new U.hJ;return(0,$.jsxs)($.Fragment,{children:[!o&&(0,$.jsxs)(M.NI,{id:"first-name",isRequired:!0,children:[(0,$.jsx)(M.lX,{children:"Name"}),(0,$.jsx)(K.II,{placeholder:"Enter Your Name",onChange:function(e){return t(e.target.value)},borderColor:"rgb(255 255 255 / 0%)",boxShadow:"inset 0 0 6px 2px rgba(0,0,0,0.2)"})]}),(0,$.jsxs)(M.NI,{id:"email",isRequired:!0,children:[(0,$.jsx)(M.lX,{children:"Email Address"}),(0,$.jsx)(K.II,{type:"button",value:u||"Get The Email From Google",onClick:function(){(0,U.rh)(W.I8,h).then((function(e){return n(e.user.email)})).catch((function(e){return console.error(e)}))},borderColor:"rgb(255 255 255 / 0%)",boxShadow:"inset 0 0 6px 2px rgba(0,0,0,0.2)"})]}),(0,$.jsxs)(M.NI,{id:"password",isRequired:!0,children:[(0,$.jsx)(M.lX,{children:"Password"}),(0,$.jsxs)(K.BZ,{size:"md",children:[(0,$.jsx)(K.II,{type:i?"text":"password",value:p,placeholder:"Enter Password",onChange:function(e){return r(e.target.value)},borderColor:"rgb(255 255 255 / 0%)",boxShadow:"inset 0 0 6px 2px rgba(0,0,0,0.2)"}),(0,$.jsx)(K.xH,{width:"4.5rem",children:(0,$.jsx)(q.zx,{h:"1.75rem",size:"sm",onClick:d,children:i?"Hide":"Show"})})]})]}),!o&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(M.NI,{id:"password",isRequired:!0,children:[(0,$.jsx)(M.lX,{children:"Confirm Password"}),(0,$.jsxs)(K.BZ,{size:"md",children:[(0,$.jsx)(K.II,{type:i?"text":"password",placeholder:"Confirm password",onChange:function(e){return a(e.target.value)},borderColor:"rgb(255 255 255 / 0%)",boxShadow:"inset 0 0 6px 2px rgba(0,0,0,0.2)"}),(0,$.jsx)(K.xH,{width:"4.5rem",children:(0,$.jsx)(q.zx,{h:"1.75rem",size:"sm",onClick:d,children:i?"Hide":"Show"})})]})]}),(0,$.jsxs)(M.NI,{id:"pic",children:[(0,$.jsx)(M.lX,{children:"Upload your Picture"}),(0,$.jsx)(K.II,{type:"file",p:1.5,accept:"image/*",onChange:function(e){return l(e.target.files[0])},borderColor:"rgb(255 255 255 / 0%)",boxShadow:"inset 0 0 6px 2px rgba(0,0,0,0.2)"})]})]}),(0,$.jsx)(q.zx,{colorScheme:"blue",width:"100%",style:{marginTop:15},onClick:c,isLoading:s,className:"button-inner-effect",children:o?"Login":"Sign Up"}),o&&(0,$.jsx)(q.zx,{variant:"solid",width:"100%",className:"button-inner-effect",onClick:function(){n("guestUser@example.com"),r("1234567")},children:"Get Guest User Credentials"})]})},J=function(){var e=(0,s.useState)(""),t=(0,G.Z)(e,2),n=t[0],r=t[1],a=(0,s.useState)(""),i=(0,G.Z)(a,2),o=i[0],l=i[1],c=(0,s.useState)(!1),d=(0,G.Z)(c,2),u=d[0],p=d[1],h=(0,s.useState)(!1),f=(0,G.Z)(h,2),m=(f[0],f[1]),x=(0,s.useState)(),b=(0,G.Z)(x,2),v=(b[0],b[1]),g=(0,s.useState)(!1),w=(0,G.Z)(g,2),y=w[0],j=(w[1],(0,A.pm)()),C=function(){var e=(0,D.Z)(R().mark((function e(){var t,r,a;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(!0),n&&o){e.next=5;break}return j({title:"Please Fill all the Feilds",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),m(!1),e.abrupt("return");case 5:return e.prev=5,t={headers:{"Content-type":"application/json"}},e.next=9,B().post("".concat("https://chatdapp-mern.herokuapp.com","/api/user/login"),{email:n,password:o},t);case 9:r=e.sent,a=r.data,localStorage.setItem("userInfo",JSON.stringify(a)),m(!1),window.location.reload(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),j({title:"Error Occured!",description:e.t0.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom"}),m(!1);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(){return e.apply(this,arguments)}}();return(0,$.jsx)(P.gC,{children:(0,$.jsx)(X,{isLogin:!0,picLoading:y,postDetails:null,setConfirmpassword:v,setEmail:r,setName:null,setPassword:l,show:u,submitHandler:C,handleClick:function(){return p(!u)},email:n,password:o})})},V=function(){var e=(0,s.useState)(!1),t=(0,G.Z)(e,2),n=t[0],r=t[1],a=(0,A.pm)(),i=(0,s.useState)(),o=(0,G.Z)(i,2),l=o[0],c=o[1],d=(0,s.useState)(),u=(0,G.Z)(d,2),p=u[0],h=u[1],f=(0,s.useState)(),m=(0,G.Z)(f,2),x=m[0],b=m[1],v=(0,s.useState)(),g=(0,G.Z)(v,2),w=g[0],y=g[1],j=(0,s.useState)(),C=(0,G.Z)(j,2),S=C[0],I=C[1],N=(0,s.useState)(!1),k=(0,G.Z)(N,2),_=k[0],E=k[1],T=function(){var e=(0,D.Z)(R().mark((function e(){var t,n,r;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),l&&p&&w&&x){e.next=5;break}return a({title:"Please Fill all the Feilds",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),E(!1),e.abrupt("return");case 5:if(w===x){e.next=8;break}return a({title:"Passwords Do Not Match",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),e.abrupt("return");case 8:return e.prev=8,t={headers:{"Content-type":"application/json"}},e.next=12,B().post("/api/user",{name:l,email:p,password:w,pic:S,coin:0},t);case 12:n=e.sent,r=n.data,localStorage.setItem("userInfo",JSON.stringify(r)),E(!1),window.location.reload(),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),a({title:"Error Occurred!",description:e.t0.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom"}),E(!1);case 23:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(){return e.apply(this,arguments)}}();return(0,$.jsx)("form",{children:(0,$.jsx)(P.gC,{spacing:"5px",children:(0,$.jsx)(X,{isLogin:!1,picLoading:_,postDetails:function(e){if(E(!0),void 0!==e){if("image/jpeg"!==e.type&&"image/png"!==e.type)return a({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),void E(!1);var t=new FormData;t.append("file",e),t.append("upload_preset","chat-app-mern"),t.append("cloud_name","yuvraj-choudahry-dev"),fetch("https://api.cloudinary.com/v1_1/yuvraj-choudahry-dev/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){I(e.url.toString()),E(!1)})).catch((function(e){E(!1)}))}else a({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"})},setConfirmpassword:b,setEmail:h,setName:c,setPassword:y,show:n,submitHandler:T,handleClick:function(){return r(!n)},email:p,password:w})})})},Y=n(1052);n(4905);var Q=function(){var e=(0,Z.k6)(),t=(0,Y.g)().setIsLoggedIn;return(0,s.useEffect)((function(){JSON.parse(localStorage.getItem("userInfo"))&&t(!0)}),[e]),(0,$.jsx)("div",{className:"home",children:(0,$.jsxs)(P.W2,{maxW:"xl",centerContent:!0,children:[(0,$.jsx)(P.xu,{d:"flex",justifyContent:"center",p:3,w:"100%",m:"40px 0 15px 0",borderRadius:"3xl",borderWidth:"1px",shadow:"2xl",children:(0,$.jsx)(P.xv,{fontSize:"4xl",fontFamily:"nunito",children:"Chat Dapp"})}),(0,$.jsx)(P.xu,{w:"100%",p:5,borderRadius:"3xl",borderWidth:"1px",shadow:"2xl",children:(0,$.jsxs)(_,{isFitted:!0,variant:"enclosed",children:[(0,$.jsxs)(T,{mb:"1em",children:[(0,$.jsx)(E,{className:"button-inner-effect",mr:2,children:"Login"}),(0,$.jsx)(E,{className:"button-inner-effect",ml:2,children:"Sign Up"})]}),(0,$.jsxs)(F,{children:[(0,$.jsx)(z,{children:(0,$.jsx)(J,{})}),(0,$.jsx)(z,{children:(0,$.jsx)(V,{})})]})]})})]})})}}}]);
//# sourceMappingURL=633.c819fb63.chunk.js.map