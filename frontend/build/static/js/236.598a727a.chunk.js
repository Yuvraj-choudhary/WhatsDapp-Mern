(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[236],{8236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(5272),r=n(2908),i=n(8227),a=n(8735),l=n(3046),u=n(8473),s=n(231),d=n(3094),c=n(7772),f=n(4174),m=n.n(f),p=(n(1570),n(2791)),g=n(4164),v=n(1042),h=n(3339),x=n(3431),w=function(e){return e+"ms"},y=function(e){var t=e.height,n=e.innerHeight,o=e.innerWidth,r=e.isLoaded,i=e.isUnloading,a=e.left,l=e.originalTransform,u=e.top,s=e.transitionDuration,d=e.width,c=e.zoomMargin,f=w(s);if(!r||i){var m=(0,x.__spreadArrays)(["scale(1)","translate(0, 0)"],l?[l]:[]).join(" ");return{height:t,left:a,top:u,transform:m,WebkitTransform:m,transitionDuration:f,width:d}}var p=function(e){var t=e.height,n=e.innerHeight,o=e.innerWidth,r=e.width,i=e.zoomMargin,a=o/(r+i),l=n/(t+i);return Math.min(a,l)}({height:t,innerWidth:o,innerHeight:n,width:d,zoomMargin:c}),g=(o/2-(a+d/2))/p,v=(n/2-(u+t/2))/p,h=(0,x.__spreadArrays)(["scale("+p+")","translate("+g+"px, "+v+"px)"],l?[l]:[]).join(" ");return{height:t,left:a,top:u,transform:h,WebkitTransform:h,transitionDuration:f,width:d}},b={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},E=(0,p.memo)((function(e){var t=e.children,n=e.closeText,o=void 0===n?"Unzoom Image":n,r=e.onUnload,i=e.onLoad,a=e.overlayBgColorEnd,l=void 0===a?"rgba(255, 255, 255, 0.95)":a,u=e.overlayBgColorStart,s=void 0===u?"rgba(255, 255, 255, 0)":u,d=e.parentRef,c=e.portalEl,f=void 0===c?document.body:c,m=e.scrollableEl,x=void 0===m?window:m,E=e.transitionDuration,C=void 0===E?300:E,j=e.zoomMargin,k=void 0===j?0:j,S=e.zoomZindex,T=void 0===S?2147483647:S,z=(0,p.useRef)(null),D=(0,p.useState)(0)[1],M=(0,p.useState)(!1),_=M[0],B=M[1],L=(0,p.useState)(!1),R=L[0],Z=L[1],A=(0,h.Z)(),N=A.width,F=A.height,H=(0,p.useCallback)((function(e){e.preventDefault(),Z(!0)}),[]),O=(0,p.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),Z(!0))}),[]),W=(0,p.useCallback)((function(){D((function(e){return e+1})),R||Z(!0)}),[R]);(0,v.Z)("keydown",O,document),(0,v.Z)("scroll",W,x),(0,p.useEffect)((function(){B(!0),i(),z.current&&z.current.focus({preventScroll:!0})}),[i]),(0,p.useEffect)((function(){var e=R?setTimeout(r,C):null;return function(){e&&clearTimeout(e)}}),[R,r,C]);var U=d.current||b,P=U.getBoundingClientRect(),I=P.height,q=P.left,G=P.top,J=P.width,Q=function(e){var t=e.isLoaded,n=e.isUnloading,o=e.overlayBgColorEnd,r=e.overlayBgColorStart,i=e.transitionDuration,a=e.zoomZindex,l={backgroundColor:r,transitionDuration:w(i),zIndex:a};return t&&!n&&(l.backgroundColor=o),l}({isLoaded:_,isUnloading:R,overlayBgColorEnd:l,overlayBgColorStart:s,transitionDuration:C,zoomZindex:T}),X=y({height:I,isLoaded:_,innerHeight:F,innerWidth:N,isUnloading:R,left:q,originalTransform:U.style.transform,top:G,transitionDuration:C,width:J,zoomMargin:k});return(0,g.createPortal)(p.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:Q},p.createElement("div",{"data-rmiz-modal-content":!0,style:X},t),p.createElement("button",{"aria-label":o,"data-rmiz-btn-close":!0,onClick:H,ref:z})),f)})),C=(0,p.memo)((function(e){var t=e.children,n=e.closeText,o=void 0===n?"Unzoom image":n,r=e.overlayBgColorEnd,i=void 0===r?"rgba(255, 255, 255, 0.95)":r,a=e.overlayBgColorStart,l=void 0===a?"rgba(255, 255, 255, 0)":a,u=e.portalEl,s=e.openText,d=void 0===s?"Zoom image":s,c=e.scrollableEl,f=e.transitionDuration,m=void 0===f?300:f,g=e.wrapElement,v=void 0===g?"div":g,h=e.wrapStyle,x=e.zoomMargin,w=void 0===x?0:x,y=e.zoomZindex,b=void 0===y?2147483647:y,C=(0,p.useState)(!1),j=C[0],k=C[1],S=(0,p.useState)(!1),T=S[0],z=S[1],D=(0,p.useRef)(null),M=(0,p.useRef)(null),_=(0,p.useCallback)((function(e){j||(e.preventDefault(),k(!0))}),[j]),B=(0,p.useCallback)((function(){z(!0)}),[]),L=(0,p.useCallback)((function(){k(!1),z(!1),M.current&&M.current.focus({preventScroll:!0})}),[]),R=j&&T?"hidden":"visible";return p.createElement(p.StrictMode,null,p.createElement(v,{"data-rmiz-wrap":R,ref:D,style:h},t,p.createElement("button",{"aria-label":d,"data-rmiz-btn-open":!0,onClick:_,ref:M}),"undefined"!==typeof window&&j&&p.createElement(E,{closeText:o,onLoad:B,onUnload:L,overlayBgColorEnd:i,overlayBgColorStart:l,parentRef:D,portalEl:u,scrollableEl:c,transitionDuration:m,zoomMargin:w,zoomZindex:b},t)))})),j=n(9030),k=(n(1724),n(184)),S=function(e){var t=e.m,n=e.i,f=e.message,p=e.deleteMessage,g=e.user,v=(e.star,e.setStar,function(e){return e<10?"0"+e:e}),h=(0,r.pm)(),x=(0,i.If)().colorMode;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(a.xu,{style:{backgroundColor:"dark"===x?"#232b38":"#e6e6e6",marginLeft:"auto",boxShadow:"-1px 4px 20px -6px rgb(0 0 0 / 40%)",marginTop:1.5,marginRight:5,borderRadius:(0,j.TQ)(f,t,n,g._id)||(0,j.Iq)(f,n,g._id)?"20px":"20px 20px 9px 20px",marginBottom:(0,j.TQ)(f,t,n,g._id)||(0,j.Iq)(f,n,g._id)?"0px":"20px",padding:"10px 10px"},maxWidth:{base:"80%",xl:"63%"},children:[""!==t.image&&(0,k.jsx)(C,{transitionDuration:600,zoomZindex:0,overlayBgColorEnd:"RGBA(255,255,255,0.09)",children:(0,k.jsx)(l.Ee,{src:t.image,alt:"",className:"image"})}),""!==t.audio&&(0,k.jsx)(c.Z,{src:t.audio,style:{marginTop:t.image?"10px":0,marginBottom:t.gif?"10px":0,backgroundColor:"dark"===x?"#232b38":"#fff",color:"dark"===x?"#fff":"#333"}}),""!==t.gif&&(0,k.jsx)(m(),{showRotation:!0,showZoom:!0,src:t.gif,alt:"",className:"rounded-2xl w-full max-h-full"}),""!==t.video&&(0,k.jsx)("video",{src:t.video,controls:!0,className:"rounded-2xl w-full max-h-full"}),""!==t.file&&(0,k.jsx)("a",{href:t.file,target:"_blank",children:(0,k.jsxs)(a.xu,{bg:"#fff",borderRadius:"17px",w:"100%",h:"250px",px:"30px",color:"#000",cursor:"pointer",d:"flex",alignItems:"center",justifyContent:"center",children:[(0,k.jsx)(o.h0,{mr:1}),(0,k.jsx)(a.xv,{fontFamily:"Nunito",children:"Open file in New Tab"})]})}),(0,k.jsx)(s.G,{width:"auto",showLoader:!1,borderRadius:17,url:t.content,textAlign:"center"}),(0,k.jsx)(d.Z,{options:{target:"_blank",className:"link--s"},children:(0,k.jsx)(a.xv,{fontFamily:"Nunito",children:t.content})}),(0,k.jsxs)(a.xu,{d:"flex",position:"relative",alignItems:"center",justifyContent:"center",children:[(0,k.jsxs)("span",{style:{fontSize:"12px",marginRight:"auto",display:"flex",color:"GrayText"},children:[v(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(t.createdAt).getDay()])," ",v(new Date(t.createdAt).getDate())," ",v(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(t.createdAt).getMonth()])," ",v(new Date(t.createdAt).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"}))]}),(0,k.jsxs)(u.v2,{children:[(0,k.jsx)(u.j2,{children:(0,k.jsx)(o.v4,{fontSize:"2xl",color:"GrayText"})}),(0,k.jsxs)(u.qy,{borderRadius:"2xl",boxShadow:"2xl",children:[(0,k.jsx)(u.sN,{onClick:function(){return p(t)},children:"Delete"}),""!==t.content&&(0,k.jsx)(u.sN,{onClick:function(){navigator.clipboard.writeText(t.content),h({title:"Successfully copied the text to clipboard.",status:"success",position:"top",duration:2e3,isClosable:!0})},children:"Copy Text"})]})]})]})]})})}},1570:function(){!function(){if("undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){e=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){var t=window.scrollY||window.pageYOffset;this.nativeFocus(),e&&e.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,t)}),0)}}}}()},5448:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNavigator=t.isBrowser=t.off=t.on=t.noop=void 0;t.noop=function(){},t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)},t.isBrowser="undefined"!==typeof window,t.isNavigator="undefined"!==typeof navigator},8118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2791);t.default=function(e){o.useEffect(e,[])}},1042:function(e,t,n){"use strict";var o=n(2791),r=n(5448),i=r.isBrowser?window:null,a=function(e){return!!e.addEventListener},l=function(e){return!!e.on};t.Z=function(e,t,n,u){void 0===n&&(n=i),o.useEffect((function(){if(t&&n)return a(n)?r.on(n,e,t,u):l(n)&&n.on(e,t,u),function(){a(n)?r.off(n,e,t,u):l(n)&&n.off(e,t,u)}}),[e,t,n,JSON.stringify(u)])}},3178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3431),r=n(2791),i=o.__importDefault(n(9802));t.default=function(e){var t=r.useRef(0),n=r.useState(e),o=n[0],a=n[1],l=r.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[o,l]}},9802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3431),r=n(2791),i=o.__importDefault(n(8118));t.default=function(e){var t=r.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},3339:function(e,t,n){"use strict";var o=n(3431),r=n(2791),i=o.__importDefault(n(3178)),a=n(5448);t.Z=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isBrowser?window.innerWidth:e,height:a.isBrowser?window.innerHeight:t}),o=n[0],l=n[1];return r.useEffect((function(){if(a.isBrowser){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return a.on(window,"resize",e),function(){a.off(window,"resize",e)}}}),[]),o}}}]);
//# sourceMappingURL=236.598a727a.chunk.js.map