import{V as m,Z as w,j as t,F as M,f as a,B as c,ah as d,a1 as u,a2 as S,I as k,a3 as T,a4 as D,a5 as C,T as x,a6 as v,a7 as A,a8 as I,a9 as L,aa as p}from"./index.2e67cac5.js";import{c as N,L as R}from"./linkify-react.module.5189b658.js";const z=({m:e,i:o,message:n,deleteMessage:f,user:r,star:F,setStar:_})=>{const i=l=>l<10?"0"+l:l,h={target:"_blank",className:"link--s"},g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=m(),{colorMode:s}=w();return t(M,{children:a(c,{style:{backgroundColor:s==="dark"?"#232b38":"#e6e6e6",marginLeft:"auto",boxShadow:"-1px 4px 20px -6px rgb(0 0 0 / 40%)",marginTop:1.5,marginRight:5,borderRadius:d(n,e,o,r._id)||u(n,o,r._id)?"20px":"20px 20px 9px 20px",marginBottom:d(n,e,o,r._id)||u(n,o,r._id)?"0px":"20px",padding:"10px 10px"},maxWidth:{base:"80%",xl:"63%"},children:[e.image!==""&&t(S,{transitionDuration:600,zoomZindex:0,children:t(k,{src:e.image,alt:"",className:"image"})}),e.audio!==""&&t(T,{src:e.audio,style:{marginTop:e.image?"10px":0,marginBottom:e.gif?"10px":0,backgroundColor:s==="dark"?"#232b38":"#fff",color:s==="dark"?"#fff":"#333"}}),e.gif!==""&&t(D,{showRotation:!0,showZoom:!0,src:e.gif,alt:"",className:"rounded-2xl w-full max-h-full"}),e.video!==""&&t("video",{src:e.video,controls:!0,className:"rounded-2xl w-full max-h-full"}),e.file!==""&&t("a",{href:e.file,target:"_blank",children:a(c,{bg:"#fff",borderRadius:"17px",w:"100%",h:"250px",px:"30px",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",children:[t(C,{mr:1}),t(x,{fontFamily:"Nunito",children:"Open file in New Tab"})]})}),t(N,{width:"auto",showLoader:!1,borderRadius:17,url:e.content,textAlign:"center"}),t(R,{options:h,children:t(x,{fontFamily:"Nunito",children:e.content})}),a(c,{display:"flex",position:"relative",alignItems:"center",justifyContent:"center",children:[a("span",{style:{fontSize:"12px",marginRight:"auto",display:"flex",color:"GrayText"},children:[i(g[new Date(e.createdAt).getDay()])," ",i(new Date(e.createdAt).getDate())," ",i(b[new Date(e.createdAt).getMonth()])," ",i(new Date(e.createdAt).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"}))]}),a(v,{children:[t(A,{children:t(I,{fontSize:"2xl",color:"GrayText"})}),a(L,{borderRadius:"2xl",boxShadow:"2xl",children:[t(p,{onClick:()=>f(e),children:"Delete"}),e.content!==""&&t(p,{onClick:()=>{navigator.clipboard.writeText(e.content),y({title:"Successfully copied the text to clipboard.",status:"success",position:"top",duration:2e3,isClosable:!0})},children:"Copy Text"})]})]})]})]})})};export{z as default};
