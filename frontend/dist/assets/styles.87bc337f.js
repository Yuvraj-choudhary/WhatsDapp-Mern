var Pc=Object.defineProperty,Dc=Object.defineProperties;var xc=Object.getOwnPropertyDescriptors;var cr=Object.getOwnPropertySymbols;var Mc=Object.prototype.hasOwnProperty,Lc=Object.prototype.propertyIsEnumerable;var ur=(n,e,t)=>e in n?Pc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,hr=(n,e)=>{for(var t in e||(e={}))Mc.call(e,t)&&ur(n,t,e[t]);if(cr)for(var t of cr(e))Lc.call(e,t)&&ur(n,t,e[t]);return n},dr=(n,e)=>Dc(n,xc(e));import{l as Bo,k as Sn,r as b,f as fe,u as ai,o as Vn,c as Ne,S as $o,a as it,q as fr,av as hs,Y as Uc,I as Fc,aw as Bc,p as qt,b as li,ax as $c,ay as Hc,az as pr,M as ci}from"./index.4f379bc2.js";function xs(){return xs=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},xs.apply(this,arguments)}function _r(n){return n.sort(function(e,t){var s=e.compareDocumentPosition(t);if(s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(s&Node.DOCUMENT_POSITION_DISCONNECTED||s&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var Wc=function(e){return typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE};function mr(n,e,t){var s=n+1;return t&&s>=e&&(s=0),s}function gr(n,e,t){var s=n-1;return t&&s<0&&(s=e),s}var Ms=typeof window!="undefined"?b.exports.useLayoutEffect:b.exports.useEffect,Rn=function(e){return e},qc=function(){var e=this;this.descendants=new Map,this.register=function(t){if(t!=null)return Wc(t)?e.registerNode(t):function(s){e.registerNode(s,t)}},this.unregister=function(t){e.descendants.delete(t);var s=_r(Array.from(e.descendants.keys()));e.assignIndex(s)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(t){e.descendants.forEach(function(s){var i=t.indexOf(s.node);s.index=i,s.node.dataset.index=s.index.toString()})},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){var t=Array.from(e.descendants.values());return t.sort(function(s,i){return s.index-i.index})},this.enabledValues=function(){return e.values().filter(function(t){return!t.disabled})},this.item=function(t){if(e.count()!==0)return e.values()[t]},this.enabledItem=function(t){if(e.enabledCount()!==0)return e.enabledValues()[t]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var t=e.enabledValues().length-1;return e.enabledItem(t)},this.indexOf=function(t){var s,i;return t&&(s=(i=e.descendants.get(t))==null?void 0:i.index)!=null?s:-1},this.enabledIndexOf=function(t){return t==null?-1:e.enabledValues().findIndex(function(s){return s.node.isSameNode(t)})},this.next=function(t,s){s===void 0&&(s=!0);var i=mr(t,e.count(),s);return e.item(i)},this.nextEnabled=function(t,s){s===void 0&&(s=!0);var i=e.item(t);if(!!i){var r=e.enabledIndexOf(i.node),o=mr(r,e.enabledCount(),s);return e.enabledItem(o)}},this.prev=function(t,s){s===void 0&&(s=!0);var i=gr(t,e.count()-1,s);return e.item(i)},this.prevEnabled=function(t,s){s===void 0&&(s=!0);var i=e.item(t);if(!!i){var r=e.enabledIndexOf(i.node),o=gr(r,e.enabledCount()-1,s);return e.enabledItem(o)}},this.registerNode=function(t,s){if(!(!t||e.descendants.has(t))){var i=Array.from(e.descendants.keys()).concat(t),r=_r(i);s!=null&&s.disabled&&(s.disabled=!!s.disabled);var o=xs({node:t,index:-1},s);e.descendants.set(t,o),e.assignIndex(r)}}};function jc(){var n=b.exports.useRef(new qc);return Ms(function(){return function(){return n.current.destroy()}}),n.current}var Ho=Bo({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),zc=Ho[0],Wo=Ho[1];function Vc(n){var e=Wo(),t=b.exports.useState(-1),s=t[0],i=t[1],r=b.exports.useRef(null);Ms(function(){return function(){!r.current||e.unregister(r.current)}},[]),Ms(function(){if(!!r.current){var a=Number(r.current.dataset.index);s!=a&&!Number.isNaN(a)&&i(a)}});var o=Rn(n?e.register(n):e.register);return{descendants:e,index:s,enabledIndex:e.enabledIndexOf(r.current),register:Sn(o,r)}}function Jv(){var n=Rn(zc),e=function(){return Rn(Wo())},t=function(r){return Vc(r)},s=function(){return jc()};return[n,e,s,t]}function Z(){return Z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Z.apply(this,arguments)}function tn(n,e){if(n==null)return{};var t={},s=Object.keys(n),i,r;for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}var Gc=["id","isRequired","isInvalid","isDisabled","isReadOnly"],Kc=["getRootProps","htmlProps"],qo=Bo({strict:!1,name:"FormControlContext"}),Yc=qo[0],ui=qo[1];function Xc(n){var e=n.id,t=n.isRequired,s=n.isInvalid,i=n.isDisabled,r=n.isReadOnly,o=tn(n,Gc),a=Fc(),l=e||"field-"+a,c=l+"-label",u=l+"-feedback",h=l+"-helptext",d=b.exports.useState(!1),f=d[0],p=d[1],g=b.exports.useState(!1),m=g[0],w=g[1],S=Bc(),v=S[0],k=S[1],U=b.exports.useCallback(function(O,M){return O===void 0&&(O={}),M===void 0&&(M=null),Z({id:h},O,{ref:Sn(M,function(Ee){!Ee||w(!0)})})},[h]),F=b.exports.useCallback(function(O,M){var Ee,ct;return O===void 0&&(O={}),M===void 0&&(M=null),Z({},O,{ref:M,"data-focus":qt(v),"data-disabled":qt(i),"data-invalid":qt(s),"data-readonly":qt(r),id:(Ee=O.id)!=null?Ee:c,htmlFor:(ct=O.htmlFor)!=null?ct:l})},[l,i,v,s,r,c]),V=b.exports.useCallback(function(O,M){return O===void 0&&(O={}),M===void 0&&(M=null),Z({id:u},O,{ref:Sn(M,function(Ee){!Ee||p(!0)}),"aria-live":"polite"})},[u]),B=b.exports.useCallback(function(O,M){return O===void 0&&(O={}),M===void 0&&(M=null),Z({},O,o,{ref:M,role:"group"})},[o]),le=b.exports.useCallback(function(O,M){return O===void 0&&(O={}),M===void 0&&(M=null),Z({},O,{ref:M,role:"presentation","aria-hidden":!0,children:O.children||"*"})},[]);return{isRequired:!!t,isInvalid:!!s,isReadOnly:!!r,isDisabled:!!i,isFocused:!!v,onFocus:k.on,onBlur:k.off,hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:m,setHasHelpText:w,id:l,labelId:c,feedbackId:u,helpTextId:h,htmlProps:o,getHelpTextProps:U,getErrorMessageProps:V,getRootProps:B,getLabelProps:F,getRequiredIndicatorProps:le}}var Qv=fe(function(n,e){var t=ai("Form",n),s=Vn(n),i=Xc(s),r=i.getRootProps;i.htmlProps;var o=tn(i,Kc),a=Ne("chakra-form-control",n.className);return b.exports.createElement(Yc,{value:o},b.exports.createElement($o,{value:t},b.exports.createElement(it.div,Z({},r({},e),{className:a,__css:t.container}))))}),Jc=["isDisabled","isInvalid","isReadOnly","isRequired"],Qc=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function Zc(n){var e=eu(n),t=e.isDisabled,s=e.isInvalid,i=e.isReadOnly,r=e.isRequired,o=tn(e,Jc);return Z({},o,{disabled:t,readOnly:i,required:r,"aria-invalid":hs(s),"aria-required":hs(r),"aria-readonly":hs(i)})}function eu(n){var e,t,s,i=ui(),r=n.id,o=n.disabled,a=n.readOnly,l=n.required,c=n.isRequired,u=n.isInvalid,h=n.isReadOnly,d=n.isDisabled,f=n.onFocus,p=n.onBlur,g=tn(n,Qc),m=n["aria-describedby"]?[n["aria-describedby"]]:[];return i!=null&&i.hasFeedbackText&&i!=null&&i.isInvalid&&m.push(i.feedbackId),i!=null&&i.hasHelpText&&m.push(i.helpTextId),Z({},g,{"aria-describedby":m.join(" ")||void 0,id:r!=null?r:i==null?void 0:i.id,isDisabled:(e=o!=null?o:d)!=null?e:i==null?void 0:i.isDisabled,isReadOnly:(t=a!=null?a:h)!=null?t:i==null?void 0:i.isReadOnly,isRequired:(s=l!=null?l:c)!=null?s:i==null?void 0:i.isRequired,isInvalid:u!=null?u:i==null?void 0:i.isInvalid,onFocus:fr(i==null?void 0:i.onFocus,f),onBlur:fr(i==null?void 0:i.onBlur,p)})}var tu=["className","children","requiredIndicator","optionalIndicator"],Zv=fe(function(n,e){var t,s=Uc("FormLabel",n),i=Vn(n);i.className;var r=i.children,o=i.requiredIndicator,a=o===void 0?b.exports.createElement(nu,null):o,l=i.optionalIndicator,c=l===void 0?null:l,u=tn(i,tu),h=ui(),d=(t=h==null?void 0:h.getLabelProps(u,e))!=null?t:Z({ref:e},u);return b.exports.createElement(it.label,Z({},d,{className:Ne("chakra-form__label",i.className),__css:Z({display:"block",textAlign:"start"},s)}),r,h!=null&&h.isRequired?a:c)}),nu=fe(function(n,e){var t=ui(),s=li();if(!(t!=null&&t.isRequired))return null;var i=Ne("chakra-form__required-indicator",n.className);return b.exports.createElement(it.span,Z({},t==null?void 0:t.getRequiredIndicatorProps(n,e),{__css:s.requiredIndicator,className:i}))});function oe(){return oe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},oe.apply(this,arguments)}function kt(n,e){if(n==null)return{};var t={},s=Object.keys(n),i,r;for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}var su=["htmlSize"],iu=fe(function(n,e){var t=n.htmlSize,s=kt(n,su),i=ai("Input",s),r=Vn(s),o=Zc(r),a=Ne("chakra-input",n.className);return b.exports.createElement(it.input,oe({size:t},o,{__css:i.field,ref:e,className:a}))});iu.id="Input";var ru=["placement"],ou={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},au=it("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),jo=fe(function(n,e){var t,s=n.placement,i=s===void 0?"left":s,r=kt(n,ru),o=(t=ou[i])!=null?t:{},a=li();return b.exports.createElement(au,oe({ref:e},r,{__css:oe({},a.addon,o)}))}),lu=fe(function(n,e){return b.exports.createElement(jo,oe({ref:e,placement:"left"},n,{className:Ne("chakra-input__left-addon",n.className)}))});lu.id="InputLeftAddon";var cu=fe(function(n,e){return b.exports.createElement(jo,oe({ref:e,placement:"right"},n,{className:Ne("chakra-input__right-addon",n.className)}))});cu.id="InputRightAddon";var uu=["children","className"],ey=fe(function(n,e){var t=ai("Input",n),s=Vn(n),i=s.children,r=s.className,o=kt(s,uu),a=Ne("chakra-input__group",r),l={},c=$c(i),u=t.field;c.forEach(function(d){if(!!t){if(u&&d.type.id==="InputLeftElement"){var f;l.paddingStart=(f=u.height)!=null?f:u.h}if(u&&d.type.id==="InputRightElement"){var p;l.paddingEnd=(p=u.height)!=null?p:u.h}d.type.id==="InputRightAddon"&&(l.borderEndRadius=0),d.type.id==="InputLeftAddon"&&(l.borderStartRadius=0)}});var h=c.map(function(d){var f,p,g=Hc({size:((f=d.props)==null?void 0:f.size)||n.size,variant:((p=d.props)==null?void 0:p.variant)||n.variant});return d.type.id!=="Input"?b.exports.cloneElement(d,g):b.exports.cloneElement(d,Object.assign(g,l,d.props))});return b.exports.createElement(it.div,oe({className:a,ref:e,__css:{width:"100%",display:"flex",position:"relative"}},o),b.exports.createElement($o,{value:t},h))}),hu=["placement"],du=["className"],fu=["className"],pu=it("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),hi=fe(function(n,e){var t,s,i,r=n.placement,o=r===void 0?"left":r,a=kt(n,hu),l=li(),c=l.field,u=o==="left"?"insetStart":"insetEnd",h=oe((i={},i[u]="0",i.width=(t=c==null?void 0:c.height)!=null?t:c==null?void 0:c.h,i.height=(s=c==null?void 0:c.height)!=null?s:c==null?void 0:c.h,i.fontSize=c==null?void 0:c.fontSize,i),l.element);return b.exports.createElement(pu,oe({ref:e,__css:h},a))});hi.id="InputElement";var _u=fe(function(n,e){var t=n.className,s=kt(n,du),i=Ne("chakra-input__left-element",t);return b.exports.createElement(hi,oe({ref:e,placement:"left",className:i},s))});_u.id="InputLeftElement";var mu=fe(function(n,e){var t=n.className,s=kt(n,fu),i=Ne("chakra-input__right-element",t);return b.exports.createElement(hi,oe({ref:e,placement:"right",className:i},s))});mu.id="InputRightElement";function kn(){return kn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},kn.apply(this,arguments)}function gu(n,e){if(n==null)return{};var t={},s=Object.keys(n),i,r;for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function vu(){var n=b.exports.useRef(new Map),e=n.current,t=b.exports.useCallback(function(i,r,o,a){n.current.set(o,{type:r,el:i,options:a}),i.addEventListener(r,o,a)},[]),s=b.exports.useCallback(function(i,r,o,a){i.removeEventListener(r,o,a),n.current.delete(o)},[]);return b.exports.useEffect(function(){return function(){e.forEach(function(i,r){s(i.el,i.type,r,i.options)})}},[s,e]),{add:t,remove:s}}var yu=["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"];function ds(n){var e=n.target,t=e.tagName,s=e.isContentEditable;return t!=="INPUT"&&t!=="TEXTAREA"&&s!==!0}function ty(n){n===void 0&&(n={});var e=n,t=e.ref,s=e.isDisabled,i=e.isFocusable,r=e.clickOnEnter,o=r===void 0?!0:r,a=e.clickOnSpace,l=a===void 0?!0:a,c=e.onMouseDown,u=e.onMouseUp,h=e.onClick,d=e.onKeyDown,f=e.onKeyUp,p=e.tabIndex,g=e.onMouseOver,m=e.onMouseLeave,w=gu(e,yu),S=b.exports.useState(!0),v=S[0],k=S[1],U=b.exports.useState(!1),F=U[0],V=U[1],B=vu(),le=function(pe){!pe||pe.tagName!=="BUTTON"&&k(!1)},O=v?p:p||0,M=s&&!i,Ee=b.exports.useCallback(function(y){if(s){y.stopPropagation(),y.preventDefault();return}var pe=y.currentTarget;pe.focus(),h==null||h(y)},[s,h]),ct=b.exports.useCallback(function(y){F&&ds(y)&&(y.preventDefault(),y.stopPropagation(),V(!1),B.remove(document,"keyup",ct,!1))},[F,B]),Tc=b.exports.useCallback(function(y){if(d==null||d(y),!(s||y.defaultPrevented||y.metaKey)&&!(!ds(y.nativeEvent)||v)){var pe=o&&y.key==="Enter",us=l&&y.key===" ";if(us&&(y.preventDefault(),V(!0)),pe){y.preventDefault();var Oc=y.currentTarget;Oc.click()}B.add(document,"keyup",ct,!1)}},[s,v,d,o,l,B,ct]),Sc=b.exports.useCallback(function(y){if(f==null||f(y),!(s||y.defaultPrevented||y.metaKey)&&!(!ds(y.nativeEvent)||v)){var pe=l&&y.key===" ";if(pe){y.preventDefault(),V(!1);var us=y.currentTarget;us.click()}}},[l,v,s,f]),cs=b.exports.useCallback(function(y){y.button===0&&(V(!1),B.remove(document,"mouseup",cs,!1))},[B]),Rc=b.exports.useCallback(function(y){if(!pr(y)){if(s){y.stopPropagation(),y.preventDefault();return}v||V(!0);var pe=y.currentTarget;pe.focus({preventScroll:!0}),B.add(document,"mouseup",cs,!1),c==null||c(y)}},[s,v,c,B,cs]),kc=b.exports.useCallback(function(y){pr(y)||(v||V(!1),u==null||u(y))},[u,v]),Nc=b.exports.useCallback(function(y){if(s){y.preventDefault();return}g==null||g(y)},[s,g]),Ac=b.exports.useCallback(function(y){F&&(y.preventDefault(),V(!1)),m==null||m(y)},[F,m]),lr=Sn(t,le);return v?kn({},w,{ref:lr,type:"button","aria-disabled":M?void 0:s,disabled:M,onClick:Ee,onMouseDown:c,onMouseUp:u,onKeyUp:f,onKeyDown:d,onMouseOver:g,onMouseLeave:m}):kn({},w,{ref:lr,role:"button","data-active":qt(F),"aria-disabled":s?"true":void 0,tabIndex:M?void 0:O,onClick:Ee,onMouseDown:Rc,onMouseUp:kc,onKeyUp:Sc,onKeyDown:Tc,onMouseOver:Nc,onMouseLeave:Ac})}var di={exports:{}},zo=function(e,t){return function(){for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];return e.apply(t,i)}},bu=zo,fi=Object.prototype.toString,pi=function(n){return function(e){var t=fi.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function rt(n){return n=n.toLowerCase(),function(t){return pi(t)===n}}function _i(n){return Array.isArray(n)}function Nn(n){return typeof n=="undefined"}function Eu(n){return n!==null&&!Nn(n)&&n.constructor!==null&&!Nn(n.constructor)&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}var Vo=rt("ArrayBuffer");function Iu(n){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Vo(n.buffer),e}function wu(n){return typeof n=="string"}function Cu(n){return typeof n=="number"}function Go(n){return n!==null&&typeof n=="object"}function bn(n){if(pi(n)!=="object")return!1;var e=Object.getPrototypeOf(n);return e===null||e===Object.prototype}var Tu=rt("Date"),Su=rt("File"),Ru=rt("Blob"),ku=rt("FileList");function mi(n){return fi.call(n)==="[object Function]"}function Nu(n){return Go(n)&&mi(n.pipe)}function Au(n){var e="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||fi.call(n)===e||mi(n.toString)&&n.toString()===e)}var Ou=rt("URLSearchParams");function Pu(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function Du(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function gi(n,e){if(!(n===null||typeof n=="undefined"))if(typeof n!="object"&&(n=[n]),_i(n))for(var t=0,s=n.length;t<s;t++)e.call(null,n[t],t,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.call(null,n[i],i,n)}function Ls(){var n={};function e(i,r){bn(n[r])&&bn(i)?n[r]=Ls(n[r],i):bn(i)?n[r]=Ls({},i):_i(i)?n[r]=i.slice():n[r]=i}for(var t=0,s=arguments.length;t<s;t++)gi(arguments[t],e);return n}function xu(n,e,t){return gi(e,function(i,r){t&&typeof i=="function"?n[r]=bu(i,t):n[r]=i}),n}function Mu(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n}function Lu(n,e,t,s){n.prototype=Object.create(e.prototype,s),n.prototype.constructor=n,t&&Object.assign(n.prototype,t)}function Uu(n,e,t){var s,i,r,o={};e=e||{};do{for(s=Object.getOwnPropertyNames(n),i=s.length;i-- >0;)r=s[i],o[r]||(e[r]=n[r],o[r]=!0);n=Object.getPrototypeOf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e}function Fu(n,e,t){n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;var s=n.indexOf(e,t);return s!==-1&&s===t}function Bu(n){if(!n)return null;var e=n.length;if(Nn(e))return null;for(var t=new Array(e);e-- >0;)t[e]=n[e];return t}var $u=function(n){return function(e){return n&&e instanceof n}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),z={isArray:_i,isArrayBuffer:Vo,isBuffer:Eu,isFormData:Au,isArrayBufferView:Iu,isString:wu,isNumber:Cu,isObject:Go,isPlainObject:bn,isUndefined:Nn,isDate:Tu,isFile:Su,isBlob:Ru,isFunction:mi,isStream:Nu,isURLSearchParams:Ou,isStandardBrowserEnv:Du,forEach:gi,merge:Ls,extend:xu,trim:Pu,stripBOM:Mu,inherits:Lu,toFlatObject:Uu,kindOf:pi,kindOfTest:rt,endsWith:Fu,toArray:Bu,isTypedArray:$u,isFileList:ku},ut=z;function vr(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ko=function(e,t,s){if(!t)return e;var i;if(s)i=s(t);else if(ut.isURLSearchParams(t))i=t.toString();else{var r=[];ut.forEach(t,function(l,c){l===null||typeof l=="undefined"||(ut.isArray(l)?c=c+"[]":l=[l],ut.forEach(l,function(h){ut.isDate(h)?h=h.toISOString():ut.isObject(h)&&(h=JSON.stringify(h)),r.push(vr(c)+"="+vr(h))}))}),i=r.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},Hu=z;function Gn(){this.handlers=[]}Gn.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Gn.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Gn.prototype.forEach=function(e){Hu.forEach(this.handlers,function(s){s!==null&&e(s)})};var Wu=Gn,qu=z,ju=function(e,t){qu.forEach(e,function(i,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[r])})},Yo=z;function Et(n,e,t,s,i){Error.call(this),this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),i&&(this.response=i)}Yo.inherits(Et,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xo=Et.prototype,Jo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(n){Jo[n]={value:n}});Object.defineProperties(Et,Jo);Object.defineProperty(Xo,"isAxiosError",{value:!0});Et.from=function(n,e,t,s,i,r){var o=Object.create(Xo);return Yo.toFlatObject(n,o,function(l){return l!==Error.prototype}),Et.call(o,n.message,e,t,s,i),o.name=n.name,r&&Object.assign(o,r),o};var Nt=Et,Qo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ce=z;function zu(n,e){e=e||new FormData;var t=[];function s(r){return r===null?"":ce.isDate(r)?r.toISOString():ce.isArrayBuffer(r)||ce.isTypedArray(r)?typeof Blob=="function"?new Blob([r]):Buffer.from(r):r}function i(r,o){if(ce.isPlainObject(r)||ce.isArray(r)){if(t.indexOf(r)!==-1)throw Error("Circular reference detected in "+o);t.push(r),ce.forEach(r,function(l,c){if(!ce.isUndefined(l)){var u=o?o+"."+c:c,h;if(l&&!o&&typeof l=="object"){if(ce.endsWith(c,"{}"))l=JSON.stringify(l);else if(ce.endsWith(c,"[]")&&(h=ce.toArray(l))){h.forEach(function(d){!ce.isUndefined(d)&&e.append(u,s(d))});return}}i(l,u)}}),t.pop()}else e.append(o,s(r))}return i(n),e}var Zo=zu,fs=Nt,Vu=function(e,t,s){var i=s.config.validateStatus;!s.status||!i||i(s.status)?e(s):t(new fs("Request failed with status code "+s.status,[fs.ERR_BAD_REQUEST,fs.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},pn=z,Gu=pn.isStandardBrowserEnv()?function(){return{write:function(t,s,i,r,o,a){var l=[];l.push(t+"="+encodeURIComponent(s)),pn.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),pn.isString(r)&&l.push("path="+r),pn.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ku=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Yu=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Xu=Ku,Ju=Yu,ea=function(e,t){return e&&!Xu(t)?Ju(e,t):t},ps=z,Qu=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Zu=function(e){var t={},s,i,r;return e&&ps.forEach(e.split(`
`),function(a){if(r=a.indexOf(":"),s=ps.trim(a.substr(0,r)).toLowerCase(),i=ps.trim(a.substr(r+1)),s){if(t[s]&&Qu.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([i]):t[s]=t[s]?t[s]+", "+i:i}}),t},yr=z,eh=yr.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function i(r){var o=r;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=i(window.location.href),function(o){var a=yr.isString(o)?i(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),Us=Nt,th=z;function ta(n){Us.call(this,n==null?"canceled":n,Us.ERR_CANCELED),this.name="CanceledError"}th.inherits(ta,Us,{__CANCEL__:!0});var Kn=ta,nh=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},Ut=z,sh=Vu,ih=Gu,rh=Ko,oh=ea,ah=Zu,lh=eh,ch=Qo,Ie=Nt,uh=Kn,hh=nh,br=function(e){return new Promise(function(s,i){var r=e.data,o=e.headers,a=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}Ut.isFormData(r)&&Ut.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+d)}var f=oh(e.baseURL,e.url);u.open(e.method.toUpperCase(),rh(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!!u){var w="getAllResponseHeaders"in u?ah(u.getAllResponseHeaders()):null,S=!a||a==="text"||a==="json"?u.responseText:u.response,v={data:S,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};sh(function(U){s(U),c()},function(U){i(U),c()},v),u=null}}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){!u||(i(new Ie("Request aborted",Ie.ECONNABORTED,e,u)),u=null)},u.onerror=function(){i(new Ie("Network Error",Ie.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",v=e.transitional||ch;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),i(new Ie(S,v.clarifyTimeoutError?Ie.ETIMEDOUT:Ie.ECONNABORTED,e,u)),u=null},Ut.isStandardBrowserEnv()){var g=(e.withCredentials||lh(f))&&e.xsrfCookieName?ih.read(e.xsrfCookieName):void 0;g&&(o[e.xsrfHeaderName]=g)}"setRequestHeader"in u&&Ut.forEach(o,function(S,v){typeof r=="undefined"&&v.toLowerCase()==="content-type"?delete o[v]:u.setRequestHeader(v,S)}),Ut.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(w){!u||(i(!w||w&&w.type?new uh:w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),r||(r=null);var m=hh(f);if(m&&["http","https","file"].indexOf(m)===-1){i(new Ie("Unsupported protocol "+m+":",Ie.ERR_BAD_REQUEST,e));return}u.send(r)})},dh=null,$=z,Er=ju,Ir=Nt,fh=Qo,ph=Zo,_h={"Content-Type":"application/x-www-form-urlencoded"};function wr(n,e){!$.isUndefined(n)&&$.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}function mh(){var n;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(n=br),n}function gh(n,e,t){if($.isString(n))try{return(e||JSON.parse)(n),$.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}var Yn={transitional:fh,adapter:mh(),transformRequest:[function(e,t){if(Er(t,"Accept"),Er(t,"Content-Type"),$.isFormData(e)||$.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return wr(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=$.isObject(e),i=t&&t["Content-Type"],r;if((r=$.isFileList(e))||s&&i==="multipart/form-data"){var o=this.env&&this.env.FormData;return ph(r?{"files[]":e}:e,o&&new o)}else if(s||i==="application/json")return wr(t,"application/json"),gh(e);return e}],transformResponse:[function(e){var t=this.transitional||Yn.transitional,s=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,r=!s&&this.responseType==="json";if(r||i&&$.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(r)throw o.name==="SyntaxError"?Ir.from(o,Ir.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dh},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],function(e){Yn.headers[e]={}});$.forEach(["post","put","patch"],function(e){Yn.headers[e]=$.merge(_h)});var vi=Yn,vh=z,yh=vi,bh=function(e,t,s){var i=this||yh;return vh.forEach(s,function(o){e=o.call(i,e,t)}),e},na=function(e){return!!(e&&e.__CANCEL__)},Cr=z,_s=bh,Eh=na,Ih=vi,wh=Kn;function ms(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new wh}var Ch=function(e){ms(e),e.headers=e.headers||{},e.data=_s.call(e,e.data,e.headers,e.transformRequest),e.headers=Cr.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Cr.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||Ih.adapter;return t(e).then(function(i){return ms(e),i.data=_s.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Eh(i)||(ms(e),i&&i.response&&(i.response.data=_s.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},ne=z,sa=function(e,t){t=t||{};var s={};function i(u,h){return ne.isPlainObject(u)&&ne.isPlainObject(h)?ne.merge(u,h):ne.isPlainObject(h)?ne.merge({},h):ne.isArray(h)?h.slice():h}function r(u){if(ne.isUndefined(t[u])){if(!ne.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],t[u])}function o(u){if(!ne.isUndefined(t[u]))return i(void 0,t[u])}function a(u){if(ne.isUndefined(t[u])){if(!ne.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,t[u])}function l(u){if(u in t)return i(e[u],t[u]);if(u in e)return i(void 0,e[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return ne.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var d=c[h]||r,f=d(h);ne.isUndefined(f)&&d!==l||(s[h]=f)}),s},ia={version:"0.27.2"},Th=ia.version,De=Nt,yi={};["object","boolean","number","function","string","symbol"].forEach(function(n,e){yi[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});var Tr={};yi.transitional=function(e,t,s){function i(r,o){return"[Axios v"+Th+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return function(r,o,a){if(e===!1)throw new De(i(o," has been removed"+(t?" in "+t:"")),De.ERR_DEPRECATED);return t&&!Tr[o]&&(Tr[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};function Sh(n,e,t){if(typeof n!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(n),i=s.length;i-- >0;){var r=s[i],o=e[r];if(o){var a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new De("option "+r+" must be "+l,De.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new De("Unknown option "+r,De.ERR_BAD_OPTION)}}var Rh={assertOptions:Sh,validators:yi},ra=z,kh=Ko,Sr=Wu,Rr=Ch,Xn=sa,Nh=ea,oa=Rh,ht=oa.validators;function It(n){this.defaults=n,this.interceptors={request:new Sr,response:new Sr}}It.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Xn(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&oa.assertOptions(s,{silentJSONParsing:ht.transitional(ht.boolean),forcedJSONParsing:ht.transitional(ht.boolean),clarifyTimeoutError:ht.transitional(ht.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(t)===!1||(r=r&&f.synchronous,i.unshift(f.fulfilled,f.rejected))});var o=[];this.interceptors.response.forEach(function(f){o.push(f.fulfilled,f.rejected)});var a;if(!r){var l=[Rr,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),a=Promise.resolve(t);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=t;i.length;){var u=i.shift(),h=i.shift();try{c=u(c)}catch(d){h(d);break}}try{a=Rr(c)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};It.prototype.getUri=function(e){e=Xn(this.defaults,e);var t=Nh(e.baseURL,e.url);return kh(t,e.params,e.paramsSerializer)};ra.forEach(["delete","get","head","options"],function(e){It.prototype[e]=function(t,s){return this.request(Xn(s||{},{method:e,url:t,data:(s||{}).data}))}});ra.forEach(["post","put","patch"],function(e){function t(s){return function(r,o,a){return this.request(Xn(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}It.prototype[e]=t(),It.prototype[e+"Form"]=t(!0)});var Ah=It,Oh=Kn;function wt(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var t=this;this.promise.then(function(s){if(!!t._listeners){var i,r=t._listeners.length;for(i=0;i<r;i++)t._listeners[i](s);t._listeners=null}}),this.promise.then=function(s){var i,r=new Promise(function(o){t.subscribe(o),i=o}).then(s);return r.cancel=function(){t.unsubscribe(i)},r},n(function(i){t.reason||(t.reason=new Oh(i),e(t.reason))})}wt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};wt.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};wt.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};wt.source=function(){var e,t=new wt(function(i){e=i});return{token:t,cancel:e}};var Ph=wt,Dh=function(e){return function(s){return e.apply(null,s)}},xh=z,Mh=function(e){return xh.isObject(e)&&e.isAxiosError===!0},kr=z,Lh=zo,En=Ah,Uh=sa,Fh=vi;function aa(n){var e=new En(n),t=Lh(En.prototype.request,e);return kr.extend(t,En.prototype,e),kr.extend(t,e),t.create=function(i){return aa(Uh(n,i))},t}var te=aa(Fh);te.Axios=En;te.CanceledError=Kn;te.CancelToken=Ph;te.isCancel=na;te.VERSION=ia.version;te.toFormData=Zo;te.AxiosError=Nt;te.Cancel=te.CanceledError;te.all=function(e){return Promise.all(e)};te.spread=Dh;te.isAxiosError=Mh;di.exports=te;di.exports.default=te;var ny=di.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw At(e)},At=function(n){return new Error("Firebase Database ("+la.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ca(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ua=function(n){const e=ca(n);return bi.encodeByteArray(e,!0)},ha=function(n){return ua(n).replace(/\./g,"")},Fs=function(n){try{return bi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return da(void 0,n)}function da(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hh(t)||(n[t]=da(n[t],e[t]));return n}function Hh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ii(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Wh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qh(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pa(){return la.NODE_ADMIN===!0}function jh(){return typeof indexedDB=="object"}function zh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="FirebaseError";class ot extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Vh,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ot(i,a,s)}}function Gh(n,e){return n.replace(Kh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Kh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return JSON.parse(n)}function j(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Yt(Fs(r[0])||""),t=Yt(Fs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Yh=function(n){const e=_a(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Xh=function(n){const e=_a(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function On(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Nr(r)&&Nr(o)){if(!On(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qh(n,e){const t=new Zh(n,e);return t.subscribe.bind(t)}class Zh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ed(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=gs),i.error===void 0&&(i.error=gs),i.complete===void 0&&(i.complete=gs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ed(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gs(){}function td(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n){return n&&n._delegate?n._delegate:n}class He{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ei;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rd(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:id(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function id(n){return n===qe?void 0:n}function rd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(A||(A={}));const ad={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ld=A.INFO,cd={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},ud=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=cd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=ld,this._logHandler=ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ad[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const hd=(n,e)=>e.some(t=>n instanceof t);let Ar,Or;function dd(){return Ar||(Ar=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fd(){return Or||(Or=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ma=new WeakMap,$s=new WeakMap,ga=new WeakMap,vs=new WeakMap,Ci=new WeakMap;function pd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Be(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ma.set(t,n)}).catch(()=>{}),Ci.set(e,n),e}function _d(n){if($s.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});$s.set(n,e)}let Hs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ga.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function md(n){Hs=n(Hs)}function gd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ys(this),e,...t);return ga.set(s,e.sort?e.sort():[e]),Be(s)}:fd().includes(n)?function(...e){return n.apply(ys(this),e),Be(ma.get(this))}:function(...e){return Be(n.apply(ys(this),e))}}function vd(n){return typeof n=="function"?gd(n):(n instanceof IDBTransaction&&_d(n),hd(n,dd())?new Proxy(n,Hs):n)}function Be(n){if(n instanceof IDBRequest)return pd(n);if(vs.has(n))return vs.get(n);const e=vd(n);return e!==n&&(vs.set(n,e),Ci.set(e,n)),e}const ys=n=>Ci.get(n);function yd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Be(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Be(o.result),l.oldVersion,l.newVersion,Be(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bd=["get","getKey","getAll","getAllKeys","count"],Ed=["put","add","delete","clear"],bs=new Map;function Pr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ed.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return bs.set(e,r),r}md(n=>dr(hr({},n),{get:(e,t,s)=>Pr(e,t)||n.get(e,t,s),has:(e,t)=>!!Pr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ws="@firebase/app",Dr="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new wi("@firebase/app"),Cd="@firebase/app-compat",Td="@firebase/analytics-compat",Sd="@firebase/analytics",Rd="@firebase/app-check-compat",kd="@firebase/app-check",Nd="@firebase/auth",Ad="@firebase/auth-compat",Od="@firebase/database",Pd="@firebase/database-compat",Dd="@firebase/functions",xd="@firebase/functions-compat",Md="@firebase/installations",Ld="@firebase/installations-compat",Ud="@firebase/messaging",Fd="@firebase/messaging-compat",Bd="@firebase/performance",$d="@firebase/performance-compat",Hd="@firebase/remote-config",Wd="@firebase/remote-config-compat",qd="@firebase/storage",jd="@firebase/storage-compat",zd="@firebase/firestore",Vd="@firebase/firestore-compat",Gd="firebase",Kd="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="[DEFAULT]",Yd={[Ws]:"fire-core",[Cd]:"fire-core-compat",[Sd]:"fire-analytics",[Td]:"fire-analytics-compat",[kd]:"fire-app-check",[Rd]:"fire-app-check-compat",[Nd]:"fire-auth",[Ad]:"fire-auth-compat",[Od]:"fire-rtdb",[Pd]:"fire-rtdb-compat",[Dd]:"fire-fn",[xd]:"fire-fn-compat",[Md]:"fire-iid",[Ld]:"fire-iid-compat",[Ud]:"fire-fcm",[Fd]:"fire-fcm-compat",[Bd]:"fire-perf",[$d]:"fire-perf-compat",[Hd]:"fire-rc",[Wd]:"fire-rc-compat",[qd]:"fire-gcs",[jd]:"fire-gcs-compat",[zd]:"fire-fst",[Vd]:"fire-fst-compat","fire-js":"fire-js",[Gd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map,qs=new Map;function Xd(n,e){try{n.container.addComponent(e)}catch(t){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xe(n){const e=n.name;if(qs.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,n);for(const t of Pn.values())Xd(t,n);return!0}function Qn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Je=new nn("app","Firebase",Jd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=Kd;function Zd(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:va,automaticDataCollectionEnabled:!1},e),s=t.name;if(typeof s!="string"||!s)throw Je.create("bad-app-name",{appName:String(s)});const i=Pn.get(s);if(i){if(On(n,i.options)&&On(t,i.config))return i;throw Je.create("duplicate-app",{appName:s})}const r=new od(s);for(const a of qs.values())r.addComponent(a);const o=new Qd(n,t,r);return Pn.set(s,o),o}function Si(n=va){const e=Pn.get(n);if(!e)throw Je.create("no-app",{appName:n});return e}function ge(n,e,t){var s;let i=(s=Yd[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Xe(new He(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="firebase-heartbeat-database",tf=1,Xt="firebase-heartbeat-store";let Es=null;function ya(){return Es||(Es=yd(ef,tf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xt)}}}).catch(n=>{throw Je.create("storage-open",{originalErrorMessage:n.message})})),Es}async function nf(n){try{return(await ya()).transaction(Xt).objectStore(Xt).get(ba(n))}catch(e){throw Je.create("storage-get",{originalErrorMessage:e.message})}}async function xr(n,e){try{const s=(await ya()).transaction(Xt,"readwrite");return await s.objectStore(Xt).put(e,ba(n)),s.done}catch(t){throw Je.create("storage-set",{originalErrorMessage:t.message})}}function ba(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=1024,rf=30*24*60*60*1e3;class of{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mr(),{heartbeatsToSend:t,unsentEntries:s}=af(this._heartbeatsCache.heartbeats),i=ha(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mr(){return new Date().toISOString().substring(0,10)}function af(n,e=sf){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Lr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Lr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class lf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jh()?zh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lr(n){return ha(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){Xe(new He("platform-logger",e=>new Id(e),"PRIVATE")),Xe(new He("heartbeat",e=>new of(e),"PRIVATE")),ge(Ws,Dr,n),ge(Ws,Dr,"esm2017"),ge("fire-js","")}cf("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="firebasestorage.googleapis.com",Ia="storageBucket",uf=2*60*1e3,hf=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L extends ot{constructor(e,t){super(Is(e),`Firebase Storage: ${t} (${Is(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,L.prototype)}_codeEquals(e){return Is(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Is(n){return"storage/"+n}function Ri(){const n="An unknown error occurred, please check the error payload for server response.";return new L("unknown",n)}function df(n){return new L("object-not-found","Object '"+n+"' does not exist.")}function ff(n){return new L("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new L("unauthenticated",n)}function _f(){return new L("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function mf(n){return new L("unauthorized","User does not have permission to access '"+n+"'.")}function gf(){return new L("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function wa(){return new L("canceled","User canceled the upload/download.")}function vf(n){return new L("invalid-url","Invalid URL '"+n+"'.")}function yf(n){return new L("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function bf(){return new L("no-default-bucket","No default bucket found. Did you set the '"+Ia+"' property when initializing the app?")}function Ca(){return new L("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ef(){return new L("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function If(){return new L("no-download-url","The given file does not have any download URLs.")}function js(n){return new L("invalid-argument",n)}function Ta(){return new L("app-deleted","The Firebase app was deleted.")}function wf(n){return new L("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jt(n,e){return new L("invalid-format","String does not match format '"+n+"': "+e)}function Ft(n){throw new L("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=se.makeFromUrl(e,t)}catch{return new se(e,"")}if(s.path==="")return s;throw yf(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=t===Ea?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",w=new RegExp(`^https?://${g}/${i}/${m}`,"i"),v=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<v.length;k++){const U=v[k],F=U.regex.exec(e);if(F){const V=F[U.indices.bucket];let B=F[U.indices.path];B||(B=""),s=new se(V,B),U.postModify(s);break}}if(s==null)throw vf(e);return s}}class Cf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){i=setTimeout(()=>{i=null,n(f,l())},m)}function d(){r&&clearTimeout(r)}function f(m,...w){if(c){d();return}if(m){d(),u.call(null,m,...w);return}if(l()||o){d(),u.call(null,m,...w);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,h(v)}let p=!1;function g(m){p||(p=!0,d(),!c&&(i!==null?(m||(a=2),clearTimeout(i),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},t),g}function Sf(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){return n!==void 0}function kf(n){return typeof n=="function"}function Nf(n){return typeof n=="object"&&!Array.isArray(n)}function Zn(n){return typeof n=="string"||n instanceof String}function Ur(n){return ki()&&n instanceof Blob}function ki(){return typeof Blob!="undefined"}function Fr(n,e,t,s){if(s<e)throw js(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw js(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Sa(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ge||(Ge={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s,i,r,o,a,l,c,u,h){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new _n(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ge.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=r.getErrorCode()===Ge.ABORT;s(!1,new _n(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new _n(c,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Rf(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Ri();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ta():wa();o(l)}else{const l=gf();o(l)}};this.canceled_?t(!1,new _n(!1,null,!0)):this.backoffId_=Tf(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return t||i||r}}class _n{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Of(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Pf(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Df(n,e){e&&(n["X-Firebase-GMPID"]=e)}function xf(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Mf(n,e,t,s,i,r){const o=Sa(n.urlParams),a=n.url+o,l=Object.assign({},n.headers);return Df(l,e),Of(l,t),Pf(l,r),xf(l,s),new Af(a,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Uf(...n){const e=Lf();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(ki())return new Blob(n);throw new L("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Ff(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ws{constructor(e,t){this.data=e,this.contentType=t||null}}function $f(n,e){switch(n){case _e.RAW:return new ws(Ra(e));case _e.BASE64:case _e.BASE64URL:return new ws(ka(n,e));case _e.DATA_URL:return new ws(Wf(e),qf(e))}throw Ri()}function Ra(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Hf(n){let e;try{e=decodeURIComponent(n)}catch{throw jt(_e.DATA_URL,"Malformed data URL.")}return Ra(e)}function ka(n,e){switch(n){case _e.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw jt(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _e.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw jt(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Bf(e)}catch{throw jt(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class Na{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw jt(_e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=jf(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Wf(n){const e=new Na(n);return e.base64?ka(_e.BASE64,e.rest):Hf(e.rest)}function qf(n){return new Na(n).contentType}function jf(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){let s=0,i="";Ur(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ur(this.data_)){const s=this.data_,i=Ff(s,e,t);return i===null?null:new xe(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new xe(s,!0)}}static getBlob(...e){if(ki()){const t=e.map(s=>s instanceof xe?s.data_:s);return new xe(Uf.apply(null,t))}else{const t=e.map(o=>Zn(o)?$f(_e.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new xe(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){let e;try{e=JSON.parse(n)}catch{return null}return Nf(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Vf(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Oa(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){return e}class J{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||Gf}}let mn=null;function Kf(n){return!Zn(n)||n.length<2?n:Oa(n)}function Pa(){if(mn)return mn;const n=[];n.push(new J("bucket")),n.push(new J("generation")),n.push(new J("metageneration")),n.push(new J("name","fullPath",!0));function e(r,o){return Kf(o)}const t=new J("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new J("size");return i.xform=s,n.push(i),n.push(new J("timeCreated")),n.push(new J("updated")),n.push(new J("md5Hash",null,!0)),n.push(new J("cacheControl",null,!0)),n.push(new J("contentDisposition",null,!0)),n.push(new J("contentEncoding",null,!0)),n.push(new J("contentLanguage",null,!0)),n.push(new J("contentType",null,!0)),n.push(new J("metadata","customMetadata",!0)),mn=n,mn}function Yf(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new se(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function Xf(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return Yf(s,n),s}function Da(n,e,t){const s=Aa(e);return s===null?null:Xf(n,s,t)}function Jf(n,e,t,s){const i=Aa(e);if(i===null||!Zn(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=sn(d,t,s),p=Sa({alt:"media",token:c});return f+p})[0]}function xa(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Dt{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){if(!n)throw Ri()}function Ni(n,e){function t(s,i){const r=Da(n,i,e);return Se(r!==null),r}return t}function Qf(n,e){function t(s,i){const r=Da(n,i,e);return Se(r!==null),Jf(r,i,n.host,n._protocol)}return t}function rn(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=_f():i=pf():t.getStatus()===402?i=ff(n.bucket):t.getStatus()===403?i=mf(n.path):i=s,i.serverResponse=s.serverResponse,i}return e}function Ma(n){const e=rn(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=df(n.path)),r.serverResponse=i.serverResponse,r}return t}function Zf(n,e,t){const s=e.fullServerUrl(),i=sn(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Dt(i,r,Ni(n,t),o);return a.errorHandler=Ma(e),a}function ep(n,e,t){const s=e.fullServerUrl(),i=sn(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Dt(i,r,Qf(n,t),o);return a.errorHandler=Ma(e),a}function tp(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function La(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=tp(null,e)),s}function np(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let k=0;k<2;k++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=La(e,s,i),u=xa(c,t),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=xe.getBlob(h,s,d);if(f===null)throw Ca();const p={name:c.fullPath},g=sn(r,n.host,n._protocol),m="POST",w=n.maxUploadRetryTime,S=new Dt(g,m,Ni(n,t),w);return S.urlParams=p,S.headers=o,S.body=f.uploadData(),S.errorHandler=rn(e),S}class Dn{constructor(e,t,s,i){this.current=e,this.total=t,this.finalized=!!s,this.metadata=i||null}}function Ai(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Se(!1)}return Se(!!t&&(e||["active"]).indexOf(t)!==-1),t}function sp(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o=La(e,s,i),a={name:o.fullPath},l=sn(r,n.host,n._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=xa(o,t),d=n.maxUploadRetryTime;function f(g){Ai(g);let m;try{m=g.getResponseHeader("X-Goog-Upload-URL")}catch{Se(!1)}return Se(Zn(m)),m}const p=new Dt(l,c,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=rn(e),p}function ip(n,e,t,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=Ai(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Se(!1)}h||Se(!1);const d=Number(h);return Se(!isNaN(d)),new Dn(d,s.size(),u==="final")}const o="POST",a=n.maxUploadRetryTime,l=new Dt(t,o,r,a);return l.headers=i,l.errorHandler=rn(e),l}const Br=256*1024;function rp(n,e,t,s,i,r,o,a){const l=new Dn(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw Ef();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u,p={"X-Goog-Upload-Command":u===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},g=s.slice(h,d);if(g===null)throw Ca();function m(k,U){const F=Ai(k,["active","final"]),V=l.current+u,B=s.size();let le;return F==="final"?le=Ni(e,r)(k,U):le=null,new Dn(V,B,F==="final",le)}const w="POST",S=e.maxUploadRetryTime,v=new Dt(t,w,m,S);return v.headers=p,v.body=g.uploadData(),v.progressCallback=a||null,v.errorHandler=rn(n),v}const Q={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Cs(n){switch(n){case"running":case"pausing":case"canceling":return Q.RUNNING;case"paused":return Q.PAUSED;case"success":return Q.SUCCESS;case"canceled":return Q.CANCELED;case"error":return Q.ERROR;default:return Q.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,s){if(kf(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class ap{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ge.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ge.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ge.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Ft("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ft("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ft("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ft("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ft("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lp extends ap{initXhr(){this.xhr_.responseType="text"}}function pt(){return new lp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Pa(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=sp(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,pt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const i=ip(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,pt,t,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Br*this._chunkMultiplier,t=new Dn(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=rp(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,pt,i,r);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Br*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=Zf(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,pt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=np(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,pt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=wa(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Cs(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,i){const r=new op(t||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Cs(this._state)){case Q.SUCCESS:dt(this._resolve.bind(null,this.snapshot))();break;case Q.CANCELED:case Q.ERROR:const t=this._reject;dt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Cs(this._state)){case Q.RUNNING:case Q.PAUSED:e.next&&dt(e.next.bind(e,this.snapshot))();break;case Q.SUCCESS:e.complete&&dt(e.complete.bind(e))();break;case Q.CANCELED:case Q.ERROR:e.error&&dt(e.error.bind(e,this._error))();break;default:e.error&&dt(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this._service=e,t instanceof se?this._location=t:this._location=se.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qe(e,t)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oa(this._location.path)}get storage(){return this._service}get parent(){const e=zf(this._location.path);if(e===null)return null;const t=new se(this._location.bucket,e);return new Qe(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wf(e)}}function up(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new cp(n,new xe(e),t)}function hp(n){n._throwIfRoot("getDownloadURL");const e=ep(n.storage,n._location,Pa());return n.storage.makeRequestWithTokens(e,pt).then(t=>{if(t===null)throw If();return t})}function dp(n,e){const t=Vf(n._location.path,e),s=new se(n._location.bucket,t);return new Qe(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){return/^[A-Za-z]+:\/\//.test(n)}function pp(n,e){return new Qe(n,e)}function Ua(n,e){if(n instanceof Oi){const t=n;if(t._bucket==null)throw bf();const s=new Qe(t,t._bucket);return e!=null?Ua(s,e):s}else return e!==void 0?dp(n,e):n}function _p(n,e){if(e&&fp(e)){if(n instanceof Oi)return pp(n,e);throw js("To use ref(service, url), the first argument must be a Storage instance.")}else return Ua(n,e)}function $r(n,e){const t=e==null?void 0:e[Ia];return t==null?null:se.makeFromBucketSpec(t,n)}class Oi{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Ea,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uf,this._maxUploadRetryTime=hf,this._requests=new Set,i!=null?this._bucket=se.makeFromBucketSpec(i,this._host):this._bucket=$r(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=$r(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qe(this,e)}_makeRequest(e,t,s,i){if(this._deleted)return new Cf(Ta());{const r=Mf(e,this._appId,s,i,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Hr="@firebase/storage",Wr="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="storage";function sy(n,e,t){return n=Oe(n),up(n,e,t)}function iy(n){return n=Oe(n),hp(n)}function ry(n,e){return n=Oe(n),_p(n,e)}function mp(n=Si(),e){return n=Oe(n),Qn(n,Fa).getImmediate({identifier:e})}function gp(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Oi(t,s,i,e,Pt)}function vp(){Xe(new He(Fa,gp,"PUBLIC").setMultipleInstances(!0)),ge(Hr,Wr,""),ge(Hr,Wr,"esm2017")}vp();var yp="firebase",bp="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge(yp,bp,"app");function Ba(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ep=Ba,$a=new nn("auth","Firebase",Ba());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new wi("@firebase/auth");function In(n,...e){qr.logLevel<=A.ERROR&&qr.error(`Auth (${Pt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,...e){throw Pi(n,...e)}function ve(n,...e){return Pi(n,...e)}function Ha(n,e,t){const s=Object.assign(Object.assign({},Ep()),{[e]:t});return new nn("auth","Firebase",s).create(e,{appName:n.name})}function Ip(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&be(n,"argument-error"),Ha(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $a.create(n,...e)}function E(n,e,...t){if(!n)throw Pi(e,...t)}function we(n){const e="INTERNAL ASSERTION FAILED: "+n;throw In(e),new Error(e)}function ke(n,e){n||we(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map;function Ce(n){ke(n instanceof Function,"Expected a class definition");let e=jr.get(n);return e?(ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e){const t=Qn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(On(r,e!=null?e:{}))return i;be(i,"already-initialized")}return t.initialize({options:e})}function Cp(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tp(){return zr()==="http:"||zr()==="https:"}function zr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||Wh()||"connection"in navigator)?navigator.onLine:!0}function Rp(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.shortDelay=e,this.longDelay=t,ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Ii()||fa()}get(){return Sp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n,e){ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new on(3e4,6e4);function Ap(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function es(n,e,t,s,i={}){return qa(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ot(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Wa.fetch()(ja(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qa(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},kp),e);try{const i=new Pp(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw gn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw gn(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ha(n,u,c);be(n,u)}}catch(i){if(i instanceof ot)throw i;be(n,"network-request-failed")}}async function Op(n,e,t,s,i={}){const r=await es(n,e,t,s,i);return"mfaPendingCredential"in r&&be(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ja(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Di(n.config,i):`${n.config.apiScheme}://${i}`}class Pp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ve(this.auth,"network-request-failed")),Np.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ve(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e){return es(n,"POST","/v1/accounts:delete",e)}async function xp(n,e){return es(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mp(n,e=!1){const t=Oe(n),s=await t.getIdToken(e),i=xi(s);E(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zt(Ts(i.auth_time)),issuedAtTime:zt(Ts(i.iat)),expirationTime:zt(Ts(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ts(n){return Number(n)*1e3}function xi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return In("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fs(t);return i?JSON.parse(i):(In("Failed to decode base64 JWT payload"),null)}catch(i){return In("Caught error parsing JWT payload as JSON",i),null}}function Lp(n){const e=xi(n);return E(e,"internal-error"),E(typeof e.exp!="undefined","internal-error"),E(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ot&&Up(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Up({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zt(this.lastLoginAt),this.creationTime=zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Jt(n,xp(t,{idToken:s}));E(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hp(r.providerUserInfo):[],a=$p(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new za(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Bp(n){const e=Oe(n);await xn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $p(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hp(n){return n.map(e=>{var{providerId:t}=e,s=ci(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n,e){const t=await qa(n,{},async()=>{const s=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=ja(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken!="undefined","internal-error"),E(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Wp(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Qt;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,e){E(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new za(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Jt(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mp(this,e)}reload(){return Bp(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await xn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jt(this,Dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,S=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:k,isAnonymous:U,providerData:F,stsTokenManager:V}=t;E(v&&V,e,"internal-error");const B=Qt.fromJSON(this.name,V);E(typeof v=="string",e,"internal-error"),Pe(h,e.name),Pe(d,e.name),E(typeof k=="boolean",e,"internal-error"),E(typeof U=="boolean",e,"internal-error"),Pe(f,e.name),Pe(p,e.name),Pe(g,e.name),Pe(m,e.name),Pe(w,e.name),Pe(S,e.name);const le=new Ke({uid:v,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:U,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:B,createdAt:w,lastLoginAt:S});return F&&Array.isArray(F)&&(le.providerData=F.map(O=>Object.assign({},O))),m&&(le._redirectEventId=m),le}static async _fromIdTokenResponse(e,t,s=!1){const i=new Qt;i.updateFromServerResponse(t);const r=new Ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await xn(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Va.type="NONE";const Vr=Va;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n,e,t){return`firebase:${n}:${e}:${t}`}class gt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=wn(this.userKey,i.apiKey,r),this.fullPersistenceKey=wn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new gt(Ce(Vr),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ce(Vr);const o=wn(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Ke._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ya(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ga(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ja(e))return"Blackberry";if(Qa(e))return"Webos";if(Mi(e))return"Safari";if((e.includes("chrome/")||Ka(e))&&!e.includes("edge/"))return"Chrome";if(Xa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ga(n=X()){return/firefox\//i.test(n)}function Mi(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ka(n=X()){return/crios\//i.test(n)}function Ya(n=X()){return/iemobile/i.test(n)}function Xa(n=X()){return/android/i.test(n)}function Ja(n=X()){return/blackberry/i.test(n)}function Qa(n=X()){return/webos/i.test(n)}function ts(n=X()){return/iphone|ipad|ipod/i.test(n)}function qp(n=X()){var e;return ts(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jp(){return qh()&&document.documentMode===10}function Za(n=X()){return ts(n)||Xa(n)||Qa(n)||Ja(n)||/windows phone/i.test(n)||Ya(n)}function zp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,e=[]){let t;switch(n){case"Browser":t=Gr(X());break;case"Worker":t=`${Gr(X())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pt}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kr(this),this.idTokenSubscription=new Kr(this),this.beforeStateQueue=new Vp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$a,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ce(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await gt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xn(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Oe(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ce(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[Ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=el(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function Li(n){return Oe(n)}class Kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qh(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,t){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(n,e){return Op(n,"POST","/v1/accounts:signInWithIdp",Ap(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="http://localhost";class Ze extends tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=ci(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ze(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}buildRequest(){const e={requestUri:Kp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ui{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends an{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends an{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Le.credential(t,s)}catch{return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com";Le.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends an{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends an{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Fe.credential(t,s)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ke._fromIdTokenResponse(e,s,i),o=Yr(s);return new Tt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Yr(s);return new Tt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Yr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ot{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Mn(e,t,s,i)}}function nl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mn._fromErrorAndOperation(n,r,e,s):r})}async function Yp(n,e,t=!1){const s=await Jt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tt._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Jt(n,nl(s,i,e,n),t);E(r.idToken,s,"internal-error");const o=xi(r.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Tt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&be(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(n,e,t=!1){const s="signIn",i=await nl(n,s,e),r=await Tt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}const Ln="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ln,"1"),this.storage.removeItem(Ln),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){const n=X();return Mi(n)||ts(n)}const Zp=1e3,e_=10;class il extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qp()&&zp(),this.fallbackToPolling=Za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e_):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const t_=il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rl.type="SESSION";const ol=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ns(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await n_(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fi("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return window}function i_(n){ye().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof ye().WorkerGlobalScope!="undefined"&&typeof ye().importScripts=="function"}async function r_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function a_(){return al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="firebaseLocalStorageDb",l_=1,Un="firebaseLocalStorage",cl="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ss(n,e){return n.transaction([Un],e?"readwrite":"readonly").objectStore(Un)}function c_(){const n=indexedDB.deleteDatabase(ll);return new ln(n).toPromise()}function Vs(){const n=indexedDB.open(ll,l_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Un,{keyPath:cl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Un)?e(s):(s.close(),await c_(),e(await Vs()))})})}async function Xr(n,e,t){const s=ss(n,!0).put({[cl]:e,value:t});return new ln(s).toPromise()}async function u_(n,e){const t=ss(n,!1).get(e),s=await new ln(t).toPromise();return s===void 0?null:s.value}function Jr(n,e){const t=ss(n,!0).delete(e);return new ln(t).toPromise()}const h_=800,d_=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>d_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(a_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await r_(),!this.activeServiceWorker)return;this.sender=new s_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vs();return await Xr(e,Ln,"1"),await Jr(e,Ln),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xr(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>u_(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ss(i,!1).getAll();return new ln(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const f_=ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function __(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ve("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",p_().appendChild(s)})}function m_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new on(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n,e){return e?Ce(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function g_(n){return Jp(n.auth,new Bi(n),n.bypassAuthState)}function v_(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Xp(t,new Bi(n),n.bypassAuthState)}async function y_(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Yp(t,new Bi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g_;case"linkViaPopup":case"linkViaRedirect":return y_;case"reauthViaPopup":case"reauthViaRedirect":return v_;default:be(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new on(2e3,1e4);async function oy(n,e,t){const s=Li(n);Ip(n,e,Ui);const i=hl(s,t);return new ze(s,"signInViaPopup",e,i).executeNotNull()}class ze extends dl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=Fi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,b_.get())};e()}}ze.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="pendingRedirect",Cn=new Map;class I_ extends dl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cn.get(this.auth._key());if(!e){try{const s=await w_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cn.set(this.auth._key(),e)}return this.bypassAuthState||Cn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w_(n,e){const t=S_(e),s=T_(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function C_(n,e){Cn.set(n._key(),e)}function T_(n){return Ce(n._redirectPersistence)}function S_(n){return wn(E_,n.config.apiKey,n.name)}async function R_(n,e,t=!1){const s=Li(n),i=hl(s,e),o=await new I_(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=10*60*1e3;class N_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!fl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}saveEventToCache(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}function Qr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(n,e={}){return es(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D_=/^https?/;async function x_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O_(n);for(const t of e)try{if(M_(t))return}catch{}be(n,"unauthorized-domain")}function M_(n){const e=zs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!D_.test(t))return!1;if(P_.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new on(3e4,6e4);function Zr(){const n=ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function U_(n){return new Promise((e,t)=>{var s,i,r;function o(){Zr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zr(),t(ve(n,"network-request-failed"))},timeout:L_.get()})}if(!((i=(s=ye().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ye().gapi)===null||r===void 0)&&r.load)o();else{const a=m_("iframefcb");return ye()[a]=()=>{gapi.load?o():t(ve(n,"network-request-failed"))},__(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Tn=null,e})}let Tn=null;function F_(n){return Tn=Tn||U_(n),Tn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new on(5e3,15e3),$_="__/auth/iframe",H_="emulator/auth/iframe",W_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j_(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Di(e,H_):`https://${n.config.authDomain}/${$_}`,s={apiKey:e.apiKey,appName:n.name,v:Pt},i=q_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Ot(s).slice(1)}`}async function z_(n){const e=await F_(n),t=ye().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:j_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ve(n,"network-request-failed"),a=ye().setTimeout(()=>{r(o)},B_.get());function l(){ye().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G_=500,K_=600,Y_="_blank",X_="http://localhost";class eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J_(n,e,t,s=G_,i=K_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V_),{width:s.toString(),height:i.toString(),top:r,left:o}),c=X().toLowerCase();t&&(a=Ka(c)?Y_:t),Ga(c)&&(e=e||X_,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(qp(c)&&a!=="_self")return Q_(e||"",a),new eo(null);const h=window.open(e||"",a,u);E(h,n,"popup-blocked");try{h.focus()}catch{}return new eo(h)}function Q_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="__/auth/handler",em="emulator/auth/handler";function to(n,e,t,s,i,r){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pt,eventId:i};if(e instanceof Ui){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Bs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof an){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${tm(n)}?${Ot(a).slice(1)}`}function tm({config:n}){return n.emulator?Di(n,em):`https://${n.authDomain}/${Z_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class nm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=R_,this._overrideRedirectResult=C_}async _openPopup(e,t,s,i){var r;ke((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=to(e,t,s,zs(),i);return J_(e,o,Fi())}async _openRedirect(e,t,s,i){return await this._originValidation(e),i_(to(e,t,s,zs(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ke(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await z_(e),s=new N_(e);return t.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ss,{type:Ss},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ss];o!==void 0&&t(!!o),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=x_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Za()||Mi()||ts()}}const sm=nm;var no="@firebase/auth",so="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function om(n){Xe(new He("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{E(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),E(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:el(n)},u=new Gp(a,l,c);return Cp(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Xe(new He("auth-internal",e=>{const t=Li(e.getProvider("auth").getImmediate());return(s=>new im(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ge(no,so,rm(n)),ge(no,so,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n=Si()){const e=Qn(n,"auth");return e.isInitialized()?e.getImmediate():wp(n,{popupRedirectResolver:sm,persistence:[f_,t_,ol]})}om("Browser");const io="@firebase/database",ro="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="";function lm(n){pl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Yt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cm(e)}}catch{}return new um},Ve=_l("localStorage"),Gs=_l("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new wi("@firebase/database"),hm=function(){let n=1;return function(){return n++}}(),ml=function(n){const e=nd(n),t=new Jh;t.update(e);const s=t.digest();return bi.encodeByteArray(s)},cn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cn.apply(null,s):typeof s=="object"?e+=j(s):e+=s,e+=" "}return e};let Ye=null,oo=!0;const dm=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(yt.logLevel=A.VERBOSE,Ye=yt.log.bind(yt),e&&Gs.set("logging_enabled",!0)):typeof n=="function"?Ye=n:(Ye=null,Gs.remove("logging_enabled"))},G=function(...n){if(oo===!0&&(oo=!1,Ye===null&&Gs.get("logging_enabled")===!0&&dm(!0)),Ye){const e=cn.apply(null,n);Ye(e)}},un=function(n){return function(...e){G(n,...e)}},Ks=function(...n){const e="FIREBASE INTERNAL ERROR: "+cn(...n);yt.error(e)},et=function(...n){const e=`FIREBASE FATAL ERROR: ${cn(...n)}`;throw yt.error(e),new Error(e)},ie=function(...n){const e="FIREBASE WARNING: "+cn(...n);yt.warn(e)},fm=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pm=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},St="[MIN_NAME]",tt="[MAX_NAME]",xt=function(n,e){if(n===e)return 0;if(n===St||e===tt)return-1;if(e===St||n===tt)return 1;{const t=ao(n),s=ao(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},_m=function(n,e){return n===e?0:n<e?-1:1},Bt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+j(e))},$i=function(n){if(typeof n!="object"||n===null)return j(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=j(e[s]),t+=":",t+=$i(n[e[s]]);return t+="}",t},vl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ae(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const yl=function(n){_(!gl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},mm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vm=new RegExp("^-?(0*)\\d{1,10}$"),ym=-2147483648,bm=2147483647,ao=function(n){if(vm.test(n)){const e=Number(n);if(e>=ym&&e<=bm)return e}return null},hn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ie("Exception was thrown by user callback.",t),e},Math.floor(0))}},Em=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vt=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ie(e)}}class Ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ys.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="5",bl="v",El="s",Il="r",wl="f",Cl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tl="ls",Sl="p",Xs="ac",Rl="websocket",kl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,s,i,r=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ve.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ve.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Tm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Nl(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Rl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tm(n)&&(t.ns=n.namespace);const i=[];return ae(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $h(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs={},ks={};function Wi(n){const e=n.toString();return Rs[e]||(Rs[e]=new Sm),Rs[e]}function Rm(n,e){const t=n.toString();return ks[t]||(ks[t]=e()),ks[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="start",Nm="close",Am="pLPCommand",Om="pRTLPCB",Al="id",Ol="pw",Pl="ser",Pm="cb",Dm="seg",xm="ts",Mm="d",Lm="dframe",Dl=1870,xl=30,Um=Dl-xl,Fm=25e3,Bm=3e4;class _t{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=un(e),this.stats_=Wi(t),this.urlFn=l=>(this.appCheckToken&&(l[Xs]=this.appCheckToken),Nl(t,kl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new km(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bm)),pm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qi((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lo)this.id=a,this.password=l;else if(o===Nm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[lo]="t",s[Pl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bl]=Hi,this.transportSessionId&&(s[El]=this.transportSessionId),this.lastSessionId&&(s[Tl]=this.lastSessionId),this.applicationId&&(s[Sl]=this.applicationId),this.appCheckToken&&(s[Xs]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Cl.test(location.hostname)&&(s[Il]=wl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_t.forceAllow_=!0}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){return _t.forceAllow_?!0:!_t.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!mm()&&!gm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ua(t),i=vl(s,Um);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lm]="t",s[Al]=e,s[Ol]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=j(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hm(),window[Am+this.uniqueCallbackIdentifier]=e,window[Om+this.uniqueCallbackIdentifier]=t,this.myIFrame=qi.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){G("frame writing exception"),a.stack&&G(a.stack),G(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Al]=this.myID,e[Ol]=this.myPW,e[Pl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xl+s.length<=Dl;){const o=this.pendingSegs.shift();s=s+"&"+Dm+i+"="+o.seg+"&"+xm+i+"="+o.ts+"&"+Mm+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Fm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=16384,Hm=45e3;let Fn=null;typeof MozWebSocket!="undefined"?Fn=MozWebSocket:typeof WebSocket!="undefined"&&(Fn=WebSocket);class ue{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=un(this.connId),this.stats_=Wi(t),this.connURL=ue.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[bl]=Hi,typeof location!="undefined"&&location.hostname&&Cl.test(location.hostname)&&(o[Il]=wl),t&&(o[El]=t),s&&(o[Tl]=s),i&&(o[Xs]=i),r&&(o[Sl]=r),Nl(e,Rl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ve.set("previous_websocket_failure",!0);try{let s;pa(),this.mySock=new Fn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fn!==null&&!ue.forceDisallow_}static previouslyFailed(){return Ve.isInMemoryStorage||Ve.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ve.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Yt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=vl(t,$m);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hm))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ue.responsesRequiredToBeHealthy=2;ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_t,ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ue&&ue.isAvailable();let s=t&&!ue.previouslyFailed();if(e.webSocketOnly&&(t||ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ue];else{const i=this.transports_=[];for(const r of Zt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Zt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=6e4,qm=5e3,jm=10*1024,zm=100*1024,Ns="t",co="d",Vm="s",uo="r",Gm="e",ho="o",fo="a",po="n",_o="p",Km="h";class Ym{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=un("c:"+this.id+":"),this.transportManager_=new Zt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ns in e){const t=e[Ns];t===fo?this.upgradeIfSecondaryHealthy_():t===uo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ho&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bt("t",e),s=Bt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_o,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:po,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bt("t",e),s=Bt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bt(Ns,e);if(co in e){const s=e[co];if(t===Km)this.onHandshake_(s);else if(t===po){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Vm?this.onConnectionShutdown_(s):t===uo?this.onReset_(s):t===Gm?Ks("Server Error: "+s):t===ho?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ks("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hi!==s&&ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Vt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_o,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ve.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ll{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ii()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bn}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=32,go=768;class x{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new x("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function We(n){return n.pieces_.length-n.pieceNum_}function D(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new x(n.pieces_,e)}function Ul(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Xm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new x(e,0)}function q(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof x)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new x(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function re(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return re(D(n),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function $l(n,e){if(We(n)!==We(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function he(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(We(n)>We(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Jm{constructor(e,t){this.errorPrefix_=t,this.parts_=Fl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jn(this.parts_[s]);Hl(this)}}function Qm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Jn(e),Hl(n)}function Zm(n){const e=n.parts_.pop();n.byteLength_-=Jn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Hl(n){if(n.byteLength_>go)throw new Error(n.errorPrefix_+"has a key path longer than "+go+" bytes ("+n.byteLength_+").");if(n.parts_.length>mo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mo+") or object contains a cycle "+je(n))}function je(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ll{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ji}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=1e3,eg=60*5*1e3,tg=3*1e3,vo=30*1e3,ng=1.3,sg=3e4,ig="server_kill",yo=3;class Re extends Ml{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=un("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$t,this.maxReconnectDelay_=eg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ji.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(j(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ei,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},tg),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Re.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ae(e,"w")){const s=Ct(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Yh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ks("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sg&&(this.reconnectDelay_=$t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ng)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Ym(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ig)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ie(h),l())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bs(this.interruptReasons_)&&(this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>$i(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new x(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){G("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yo&&(this.reconnectDelay_=vo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){G("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+pl.replace(/\./g,"-")]=1,Ii()?e["framework.cordova"]=1:fa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bn.getInstance().currentlyOnline();return Bs(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(St,e),i=new T(St,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class Wl extends is{static get __EMPTY_NODE(){return vn}static set __EMPTY_NODE(e){vn=e}compare(e,t){return xt(e.name,t.name)}isDefinedOn(e){throw At("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(tt,vn)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,vn)}toString(){return".key"}}const bt=new Wl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class W{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:W.RED,this.left=i!=null?i:ee.EMPTY_NODE,this.right=r!=null?r:ee.EMPTY_NODE}copy(e,t,s,i,r){return new W(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}W.RED=!0;W.BLACK=!1;class rg{copy(e,t,s,i,r){return this}insert(e,t,s){return new W(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ee{constructor(e,t=ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,W.BLACK,null,null))}remove(e){return new ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,W.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yn(this.root_,null,this.comparator_,!0,e)}}ee.EMPTY_NODE=new rg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,e){return xt(n.name,e.name)}function zi(n,e){return xt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;function ag(n){Js=n}const ql=function(n){return typeof n=="number"?"number:"+yl(n):"string:"+n},jl=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else _(n===Js||n.isEmpty(),"priority of unexpected type.");_(n===Js||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo;class H{constructor(e,t=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jl(this.priorityNode_)}static set __childrenNodeConstructor(e){bo=e}static get __childrenNodeConstructor(){return bo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:C(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||We(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ql(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=yl(this.value_):e+=this.value_,this.lazyHash_=ml(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=H.VALUE_TYPE_ORDER.indexOf(t),r=H.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl,Vl;function lg(n){zl=n}function cg(n){Vl=n}class ug extends is{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?xt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(tt,new H("[PRIORITY-POST]",Vl))}makePost(e,t){const s=zl(e);return new T(t,new H("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=Math.log(2);class dg{constructor(e){const t=r=>parseInt(Math.log(r)/hg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $n=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new W(d,h.node,W.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return h=n[f],d=t?t(h):h,new W(d,h.node,W.BLACK,p,g)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,g){const m=h-p,w=h;h-=p;const S=i(m+1,w),v=n[m],k=t?t(v):v;f(new W(k,v.node,g,null,S))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,W.BLACK):(d(m,W.BLACK),d(m,W.RED))}return u},o=new dg(n.length),a=r(o);return new ee(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;const ft={};class Te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(ft&&Y,"ChildrenNode.ts has not been loaded"),As=As||new Te({".priority":ft},{".priority":Y}),As}get(e){const t=Ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ee?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){_(e!==bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=$n(s,e.getCompare()):a=ft;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Te(u,c)}addToIndexes(e,t){const s=An(this.indexes_,(i,r)=>{const o=Ct(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===ft)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(T.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$n(a,o.getCompare())}else return ft;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new T(e.name,a))),l.insert(e,e.node)}});return new Te(s,this.indexSet_)}removeFromIndexes(e,t){const s=An(this.indexes_,i=>{if(i===ft)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new Te(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class R{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&jl(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ht||(Ht=new R(new ee(zi),null,Te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ht}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ht:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ht:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{_(C(e)!==".priority"||We(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(D(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ql(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ml(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===dn?-1:0}withIndex(e){if(e===bt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fg extends R{constructor(){super(new ee(zi),R.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const dn=new fg;Object.defineProperties(T,{MIN:{value:new T(St,R.EMPTY_NODE)},MAX:{value:new T(tt,dn)}});Wl.__EMPTY_NODE=R.EMPTY_NODE;H.__childrenNodeConstructor=R;ag(dn);cg(dn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=!0;function K(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new H(t,K(e))}if(!(n instanceof Array)&&pg){const t=[];let s=!1;if(ae(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=K(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new T(o,l)))}}),t.length===0)return R.EMPTY_NODE;const r=$n(t,og,o=>o.name,zi);if(s){const o=$n(t,Y.getCompare());return new R(r,K(e),new Te({".priority":o},{".priority":Y}))}else return new R(r,K(e),Te.Default)}else{let t=R.EMPTY_NODE;return ae(n,(s,i)=>{if(Ae(n,s)&&s.substring(0,1)!=="."){const r=K(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(K(e))}}lg(K);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends is{constructor(e){super(),this.indexPath_=e,_(!I(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?xt(e.name,t.name):r}makePost(e,t){const s=K(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,dn);return new T(tt,e)}toString(){return Fl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends is{compare(e,t){const s=e.node.compareTo(t.node);return s===0?xt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=K(e);return new T(t,s)}toString(){return".value"}}const gg=new mg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){return{type:"value",snapshotNode:n}}function yg(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bg(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Eo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Eg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:St}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Vi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Io(n){const e={};if(n.isDefault())return e;let t;return n.index_===Y?t="$priority":n.index_===gg?t="$value":n.index_===bt?t="$key":(_(n.index_ instanceof _g,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=j(t),n.startSet_&&(e.startAt=j(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+j(n.indexStartName_))),n.endSet_&&(e.endAt=j(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+j(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function wo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ml{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=un("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hn.getListenId_(e,s),a={};this.listens_[o]=a;const l=Io(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ct(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Hn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Io(e._queryParams),s=e._path.toString(),i=new Ei;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ot(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yt(a.responseText)}catch{ie("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ie("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return{value:null,children:new Map}}function Gl(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,Wn());const i=n.children.get(s);e=D(e),Gl(i,e,t)}}function Qs(n,e,t){n.value!==null?t(e,n.value):wg(n,(s,i)=>{const r=new x(e.toString()+"/"+s);Qs(i,r,t)})}function wg(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ae(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=10*1e3,Tg=30*1e3,Sg=5*60*1e3;class Rg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Cg(e);const s=Co+(Tg-Co)*Math.random();Vt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ae(e,(i,r)=>{r>0&&Ae(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Vt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function Kl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=me.ACK_USER_WRITE,this.source=Kl()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new x(e));return new qn(N(),t,this.revert)}}else return _(C(this.path)===e,"operationForChild called for unrelated child."),new qn(D(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=me.OVERWRITE}operationForChild(e){return I(this.path)?new nt(this.source,N(),this.snap.getImmediateChild(e)):new nt(this.source,D(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=me.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new x(e));return t.isEmpty()?null:t.value?new nt(this.source,N(),t.value):new en(this.source,N(),t)}else return _(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new en(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kg(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Eg(o.childName,o.snapshotNode))}),Wt(n,i,"child_removed",e,s,t),Wt(n,i,"child_added",e,s,t),Wt(n,i,"child_moved",r,s,t),Wt(n,i,"child_changed",e,s,t),Wt(n,i,"value",e,s,t),i}function Wt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Ag(n,a,l)),o.forEach(a=>{const l=Ng(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Ng(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ag(n,e,t){if(e.childName==null||t.childName==null)throw At("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n,e){return{eventCache:n,serverCache:e}}function Gt(n,e,t,s){return Jl(new Gi(e,t,s),n.serverCache)}function Ql(n,e,t,s){return Jl(n.eventCache,new Gi(e,t,s))}function Zs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function st(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;const Og=()=>(Os||(Os=new ee(_m)),Os);class P{constructor(e,t=Og()){this.value=e,this.children=t}static fromObject(e){let t=new P(null);return ae(e,(s,i)=>{t=t.set(new x(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(I(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(D(e),t);return r!=null?{path:q(new x(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(D(e)):new P(null)}}set(e,t){if(I(e))return new P(t,this.children);{const s=C(e),r=(this.children.get(s)||new P(null)).set(D(e),t),o=this.children.insert(s,r);return new P(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(D(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(D(e)):null}}setTree(e,t){if(I(e))return t;{const s=C(e),r=(this.children.get(s)||new P(null)).setTree(D(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new P(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(q(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(D(e),q(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(D(e),q(t,i),s):new P(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(q(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.writeTree_=e}static empty(){return new de(new P(null))}}function Kt(n,e,t){if(I(e))return new de(new P(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=re(i,e);return r=r.updateChild(o,t),new de(n.writeTree_.set(i,r))}else{const i=new P(t),r=n.writeTree_.setTree(e,i);return new de(r)}}}function To(n,e,t){let s=n;return ae(t,(i,r)=>{s=Kt(s,q(e,i),r)}),s}function So(n,e){if(I(e))return de.empty();{const t=n.writeTree_.setTree(e,new P(null));return new de(t)}}function ei(n,e){return at(n,e)!=null}function at(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(re(t.path,e)):null}function Ro(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function $e(n,e){if(I(e))return n;{const t=at(n,e);return t!=null?new de(new P(t)):new de(n.writeTree_.subtree(e))}}function ti(n){return n.writeTree_.isEmpty()}function Rt(n,e){return Zl(N(),n.writeTree_,e)}function Zl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Zl(q(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(q(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e){return rc(e,n)}function Pg(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Kt(n.visibleWrites,e,t)),n.lastWriteId=s}function Dg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function xg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Mg(a,s.path)?i=!1:he(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Lg(n),!0;if(s.snap)n.visibleWrites=So(n.visibleWrites,s.path);else{const a=s.children;ae(a,l=>{n.visibleWrites=So(n.visibleWrites,q(s.path,l))})}return!0}else return!1}function Mg(n,e){if(n.snap)return he(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&he(q(n.path,t),e))return!0;return!1}function Lg(n){n.visibleWrites=tc(n.allWrites,Ug,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ug(n){return n.visible}function tc(n,e,t){let s=de.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)he(t,o)?(a=re(t,o),s=Kt(s,a,r.snap)):he(o,t)&&(a=re(o,t),s=Kt(s,N(),r.snap.getChild(a)));else if(r.children){if(he(t,o))a=re(t,o),s=To(s,a,r.children);else if(he(o,t))if(a=re(o,t),I(a))s=To(s,N(),r.children);else{const l=Ct(r.children,C(a));if(l){const c=l.getChild(D(a));s=Kt(s,N(),c)}}}else throw At("WriteRecord should have .snap or .children")}}return s}function nc(n,e,t,s,i){if(!s&&!i){const r=at(n.visibleWrites,e);if(r!=null)return r;{const o=$e(n.visibleWrites,e);if(ti(o))return t;if(t==null&&!ei(o,N()))return null;{const a=t||R.EMPTY_NODE;return Rt(o,a)}}}else{const r=$e(n.visibleWrites,e);if(!i&&ti(r))return t;if(!i&&t==null&&!ei(r,N()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(he(c.path,e)||he(e,c.path))},a=tc(n.allWrites,o,e),l=t||R.EMPTY_NODE;return Rt(a,l)}}}function Fg(n,e,t){let s=R.EMPTY_NODE;const i=at(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=$e(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const l=Rt($e(r,new x(o)),a);s=s.updateImmediateChild(o,l)}),Ro(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$e(n.visibleWrites,e);return Ro(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Bg(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=q(e,t);if(ei(n.visibleWrites,r))return null;{const o=$e(n.visibleWrites,r);return ti(o)?i.getChild(t):Rt(o,i.getChild(t))}}function $g(n,e,t,s){const i=q(e,t),r=at(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=$e(n.visibleWrites,i);return Rt(o,s.getNode().getImmediateChild(t))}else return null}function Hg(n,e){return at(n.visibleWrites,e)}function Wg(n,e,t,s,i,r,o){let a;const l=$e(n.visibleWrites,e),c=at(l,N());if(c!=null)a=c;else if(t!=null)a=Rt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function qg(){return{visibleWrites:de.empty(),allWrites:[],lastWriteId:-1}}function ni(n,e,t,s){return nc(n.writeTree,n.treePath,e,t,s)}function sc(n,e){return Fg(n.writeTree,n.treePath,e)}function ko(n,e,t,s){return Bg(n.writeTree,n.treePath,e,t,s)}function jn(n,e){return Hg(n.writeTree,q(n.treePath,e))}function jg(n,e,t,s,i,r){return Wg(n.writeTree,n.treePath,e,t,s,i,r)}function Ki(n,e,t){return $g(n.writeTree,n.treePath,e,t)}function ic(n,e){return rc(q(n.treePath,e),n.writeTree)}function rc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Eo(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,bg(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,yg(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Eo(s,e.snapshotNode,i.oldSnap));else throw At("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const oc=new Vg;class Yi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ki(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:st(this.viewCache_),r=jg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function Gg(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Kg(n,e,t,s,i){const r=new zg;let o,a;if(t.type===me.OVERWRITE){const c=t;c.source.fromUser?o=si(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=zn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===me.MERGE){const c=t;c.source.fromUser?o=Xg(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ii(n,e,c.path,c.children,s,i,a,r))}else if(t.type===me.ACK_USER_WRITE){const c=t;c.revert?o=Zg(n,e,c.path,s,i,r):o=Jg(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===me.LISTEN_COMPLETE)o=Qg(n,e,t.path,s,r);else throw At("Unknown operation type: "+t.type);const l=r.getChanges();return Yg(e,o,l),{viewCache:o,changes:l}}function Yg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Zs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(vg(Zs(e)))}}function ac(n,e,t,s,i,r){const o=e.eventCache;if(jn(s,t)!=null)return e;{let a,l;if(I(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=st(e),u=c instanceof R?c:R.EMPTY_NODE,h=sc(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ni(s,st(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){_(We(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ko(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=D(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ko(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ki(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Gt(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function zn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=C(t);if(!l.isCompleteForPath(t)&&We(t)>1)return e;const p=D(t),m=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,oc,null)}const h=Ql(e,c,l.isFullyInitialized()||I(t),u.filtersNodes()),d=new Yi(i,h,r);return ac(n,h,t,i,d,a)}function si(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Yi(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Gt(e,c,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Gt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=D(t),f=a.getNode().getImmediateChild(h);let p;if(I(d))p=s;else{const g=u.getCompleteChild(h);g!=null?Ul(d)===".priority"&&g.getChild(Bl(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=R.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Gt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function No(n,e){return n.eventCache.isCompleteForChild(e)}function Xg(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=q(t,l);No(e,C(u))&&(a=si(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=q(t,l);No(e,C(u))||(a=si(n,a,u,c,i,r,o))}),a}function Ao(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ii(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;I(t)?c=s:c=new P(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Ao(n,f,d);l=zn(n,l,new x(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=Ao(n,p,d);l=zn(n,l,new x(h),g,i,r,o,a)}}),l}function Jg(n,e,t,s,i,r,o){if(jn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(I(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return zn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(I(t)){let c=new P(null);return l.getNode().forEachChild(bt,(u,h)=>{c=c.set(new x(u),h)}),ii(n,e,t,c,i,r,a,o)}else return e}else{let c=new P(null);return s.foreach((u,h)=>{const d=q(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ii(n,e,t,c,i,r,a,o)}}function Qg(n,e,t,s,i){const r=e.serverCache,o=Ql(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return ac(n,o,t,s,oc,i)}function Zg(n,e,t,s,i,r){let o;if(jn(s,t)!=null)return e;{const a=new Yi(s,e,i),l=e.eventCache.getNode();let c;if(I(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(s,st(e));else{const h=e.serverCache.getNode();_(h instanceof R,"serverChildren would be complete if leaf node"),u=sc(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=C(t);let h=Ki(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,D(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,R.EMPTY_NODE,D(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(s,st(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||jn(s,N())!=null,Gt(e,c,o,n.filter.filtersNodes())}}function ev(n,e){const t=st(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function Oo(n,e,t,s){e.type===me.MERGE&&e.source.queryId!==null&&(_(st(n.viewCache_),"We should always have a full cache before handling merges"),_(Zs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Kg(n.processor_,i,e,t,s);return Gg(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,tv(n,r.changes,r.viewCache.eventCache.getNode(),null)}function tv(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return kg(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;function nv(n){_(!Po,"__referenceConstructor has already been defined"),Po=n}function Xi(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),Oo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Oo(o,e,t,s));return r}}function Ji(n,e){let t=null;for(const s of n.views.values())t=t||ev(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;function sv(n){_(!Do,"__referenceConstructor has already been defined"),Do=n}class xo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=qg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iv(n,e,t,s,i){return Pg(n.pendingWriteTree_,e,t,s,i),i?os(n,new nt(Kl(),e,t)):[]}function mt(n,e,t=!1){const s=Dg(n.pendingWriteTree_,e);if(xg(n.pendingWriteTree_,e)){let r=new P(null);return s.snap!=null?r=r.set(N(),!0):ae(s.children,o=>{r=r.set(new x(o),!0)}),os(n,new qn(s.path,r,t))}else return[]}function rs(n,e,t){return os(n,new nt(Yl(),e,t))}function rv(n,e,t){const s=P.fromObject(t);return os(n,new en(Yl(),e,s))}function ov(n,e,t,s){const i=hc(n,s);if(i!=null){const r=dc(i),o=r.path,a=r.queryId,l=re(o,e),c=new nt(Xl(a),l,t);return fc(n,o,c)}else return[]}function av(n,e,t,s){const i=hc(n,s);if(i){const r=dc(i),o=r.path,a=r.queryId,l=re(o,e),c=P.fromObject(t),u=new en(Xl(a),l,c);return fc(n,o,u)}else return[]}function lc(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=re(o,e),c=Ji(a,l);if(c)return c});return nc(i,e,r,t,!0)}function os(n,e){return cc(e,n.syncPointTree_,null,ec(n.pendingWriteTree_,N()))}function cc(n,e,t,s){if(I(n.path))return uc(n,e,t,s);{const i=e.get(N());t==null&&i!=null&&(t=Ji(i,N()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=ic(s,o);r=r.concat(cc(a,l,c,u))}return i&&(r=r.concat(Xi(i,n,s,t))),r}}function uc(n,e,t,s){const i=e.get(N());t==null&&i!=null&&(t=Ji(i,N()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ic(s,o),u=n.operationForChild(o);u&&(r=r.concat(uc(u,a,l,c)))}),i&&(r=r.concat(Xi(i,n,s,t))),r}function hc(n,e){return n.tagToQueryMap.get(e)}function dc(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new x(n.substr(0,e))}}function fc(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=ec(n.pendingWriteTree_,e);return Xi(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qi(t)}node(){return this.node_}}class Zi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=q(this.path_,e);return new Zi(this.syncTree_,t)}node(){return lc(this.syncTree_,this.path_)}}const lv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mo=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uv(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},uv=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hv=function(n,e,t,s){return er(e,new Zi(t,n),s)},dv=function(n,e,t){return er(n,new Qi(e),t)};function er(n,e,t){const s=n.getPriority().val(),i=Mo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Mo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new H(a,K(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new H(i))),o.forEachChild(Y,(a,l)=>{const c=er(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function nr(n,e){let t=e instanceof x?e:new x(e),s=n,i=C(t);for(;i!==null;){const r=Ct(s.node.children,i)||{children:{},childCount:0};s=new tr(i,s,r),t=D(t),i=C(t)}return s}function Mt(n){return n.node.value}function pc(n,e){n.node.value=e,ri(n)}function _c(n){return n.node.childCount>0}function fv(n){return Mt(n)===void 0&&!_c(n)}function as(n,e){ae(n.node.children,(t,s)=>{e(new tr(t,n,s))})}function mc(n,e,t,s){t&&!s&&e(n),as(n,i=>{mc(i,e,!0,s)}),t&&s&&e(n)}function pv(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fn(n){return new x(n.parent===null?n.name:fn(n.parent)+"/"+n.name)}function ri(n){n.parent!==null&&_v(n.parent,n.name,n)}function _v(n,e,t){const s=fv(t),i=Ae(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ri(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ri(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=/[\[\].#$\/\u0000-\u001F\u007F]/,gv=/[\[\].#$\u0000-\u001F\u007F]/,Ps=10*1024*1024,gc=function(n){return typeof n=="string"&&n.length!==0&&!mv.test(n)},vv=function(n){return typeof n=="string"&&n.length!==0&&!gv.test(n)},yv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vv(n)},vc=function(n,e,t){const s=t instanceof x?new Jm(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+je(s));if(typeof e=="function")throw new Error(n+"contains a function "+je(s)+" with contents = "+e.toString());if(gl(e))throw new Error(n+"contains "+e.toString()+" "+je(s));if(typeof e=="string"&&e.length>Ps/3&&Jn(e)>Ps)throw new Error(n+"contains a string greater than "+Ps+" utf8 bytes "+je(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ae(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gc(o)))throw new Error(n+" contains an invalid key ("+o+") "+je(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qm(s,o),vc(n,a,s),Zm(s)}),i&&r)throw new Error(n+' contains ".value" child '+je(s)+" in addition to actual children.")}},bv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!yv(t))throw new Error(td(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iv(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!$l(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function lt(n,e,t){Iv(n,t),wv(n,s=>he(s,e)||he(e,s))}function wv(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Cv(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Cv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ye&&G("event: "+t.toString()),hn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="repo_interrupt",Sv=25;class Rv{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ev,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wn(),this.transactionQueueTree_=new tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kv(n,e,t){if(n.stats_=Wi(n.repoInfo_),n.forceRestClient_||Em())n.server_=new Hn(n.repoInfo_,(s,i,r,o)=>{Lo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Uo(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Re(n.repoInfo_,e,(s,i,r,o)=>{Lo(n,s,i,r,o)},s=>{Uo(n,s)},s=>{Av(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Rm(n.repoInfo_,()=>new Rg(n.stats_,n.server_)),n.infoData_=new Ig,n.infoSyncTree_=new xo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=rs(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),sr(n,"connected",!1),n.serverSyncTree_=new xo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);lt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Nv(n){const t=n.infoData_.getNode(new x(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function yc(n){return lv({timestamp:Nv(n)})}function Lo(n,e,t,s,i){n.dataUpdateCount++;const r=new x(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=An(t,c=>K(c));o=av(n.serverSyncTree_,r,l,i)}else{const l=K(t);o=ov(n.serverSyncTree_,r,l,i)}else if(s){const l=An(t,c=>K(c));o=rv(n.serverSyncTree_,r,l)}else{const l=K(t);o=rs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=rr(n,r)),lt(n.eventQueue_,a,o)}function Uo(n,e){sr(n,"connected",e),e===!1&&Pv(n)}function Av(n,e){ae(e,(t,s)=>{sr(n,t,s)})}function sr(n,e,t){const s=new x("/.info/"+e),i=K(t);n.infoData_.updateSnapshot(s,i);const r=rs(n.infoSyncTree_,s,i);lt(n.eventQueue_,s,r)}function Ov(n){return n.nextWriteId_++}function Pv(n){bc(n,"onDisconnectEvents");const e=yc(n),t=Wn();Qs(n.onDisconnect_,N(),(i,r)=>{const o=hv(i,r,n.serverSyncTree_,e);Gl(t,i,o)});let s=[];Qs(t,N(),(i,r)=>{s=s.concat(rs(n.serverSyncTree_,i,r));const o=Lv(n,i);rr(n,o)}),n.onDisconnect_=Wn(),lt(n.eventQueue_,N(),s)}function Dv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Tv)}function bc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),G(t,...e)}function Ec(n,e,t){return lc(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function ir(n,e=n.transactionQueueTree_){if(e||ls(n,e),Mt(e)){const t=wc(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&xv(n,fn(e),t)}else _c(e)&&as(e,t=>{ir(n,t)})}function xv(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ec(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bc(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(mt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();ls(n,nr(n.transactionQueueTree_,e)),ir(n,n.transactionQueueTree_),lt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)hn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ie("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}rr(n,e)}},o)}function rr(n,e){const t=Ic(n,e),s=fn(t),i=wc(n,t);return Mv(n,i,s),s}function Mv(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=re(t,l.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Sv)u=!0,h="maxretry",i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ec(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){vc("transaction failed: Data returned ",f,l.path);let p=K(f);typeof f=="object"&&f!=null&&Ae(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,w=yc(n),S=dv(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=S,l.currentWriteId=Ov(n),o.splice(o.indexOf(m),1),i=i.concat(iv(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(mt(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0))}lt(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ls(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)hn(s[a]);ir(n,n.transactionQueueTree_)}function Ic(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&Mt(s)===void 0;)s=nr(s,t),e=D(e),t=C(e);return s}function wc(n,e){const t=[];return Cc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Cc(n,e,t){const s=Mt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);as(e,i=>{Cc(n,i,t)})}function ls(n,e){const t=Mt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,pc(e,t.length>0?t:void 0)}as(e,s=>{ls(n,s)})}function Lv(n,e){const t=fn(Ic(n,e)),s=nr(n.transactionQueueTree_,e);return pv(s,i=>{Ds(n,i)}),Ds(n,s),mc(s,i=>{Ds(n,i)}),t}function Ds(n,e){const t=Mt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(mt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pc(e,void 0):t.length=r+1,lt(n.eventQueue_,fn(e),i);for(let o=0;o<s.length;o++)hn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Fv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ie(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fo=function(n,e){const t=Bv(n),s=t.namespace;t.domain==="firebase.com"&&et(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fm();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Cm(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new x(t.pathString)}},Bv=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Uv(n.substring(u,h)));const d=Fv(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:Ul(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=wo(this._queryParams),t=$i(e);return t==="{}"?"default":t}get _queryObject(){return wo(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof or))return!1;const t=this._repo===e._repo,s=$l(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xm(this._path)}}class Lt extends or{constructor(e,t){super(e,t,new Vi,!1)}get parent(){const e=Bl(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}nv(Lt);sv(Lt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="FIREBASE_DATABASE_EMULATOR_HOST",oi={};let Hv=!1;function Wv(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fo(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[$v]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Fo(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ys(Ys.OWNER):new wm(n.name,n.options,e);bv("Invalid Firebase Database URL",o),I(o.path)||et("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jv(a,n,u,new Im(n.name,t));return new zv(h,n)}function qv(n,e){const t=oi[e];(!t||t[n.key]!==n)&&et(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Dv(n),delete t[n.key]}function jv(n,e,t,s){let i=oi[e.name];i||(i={},oi[e.name]=i);let r=i[n.toURLString()];return r&&et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Rv(n,Hv,t,s),i[n.toURLString()]=r,r}class zv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&et("Cannot call "+e+" on a deleted database.")}}function Vv(n=Si(),e){return Qn(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){lm(Pt),Xe(new He("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Wv(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ge(io,ro,n),ge(io,ro,"esm2017")}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Gv();const Kv={apiKey:"AIzaSyC85qBd04aedB2d_8ltfKEGV6hQhW8qslw",authDomain:"chatdapp-maern.firebaseapp.com",databaseURL:"https://chatdapp-maern-default-rtdb.firebaseio.com",projectId:"chatdapp-maern",storageBucket:"chatdapp-maern.appspot.com",messagingSenderId:"322704650394",appId:"1:322704650394:web:161bcb1828c1a572faef23"},ar=Zd(Kv),ay=am(ar),ly=mp(ar);Vv(ar);export{Qv as F,Le as G,iu as I,ny as a,sy as b,Jv as c,Zv as d,ey as e,mu as f,iy as g,oy as h,ay as i,ry as r,ly as s,ty as u};
