import{V as w,Z as S,j as a,F as u,f as t,B as c,ah as x,a1 as p,a2 as M,I as C,a3 as N,a4 as T,a5 as k,T as s,a6 as D,a7 as v,a8 as R,a9 as A,aa as f,ai as F}from"./index.d6ecb37b.js";import{c as I,L}from"./linkify-react.module.227291ed.js";const J=({m:e,i:o,message:n,deleteMessage:h,user:i,star:j,setStar:B})=>{const r=d=>d<10?"0"+d:d,g={target:"_blank",className:"link--s"},m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=w(),{colorMode:l}=S();return a(u,{children:t(c,{style:{backgroundColor:l==="dark"?"#232b38":"#e6e6e6",marginLeft:"auto",boxShadow:"-1px 4px 20px -6px rgb(0 0 0 / 40%)",marginTop:1.5,marginRight:5,borderRadius:x(n,e,o,i._id)||p(n,o,i._id)?"20px":"20px 20px 9px 20px",marginBottom:x(n,e,o,i._id)||p(n,o,i._id)?"0px":"20px",padding:"10px 10px"},maxWidth:{base:"80%",xl:"63%"},children:[e.image!==""&&a(M,{transitionDuration:600,zoomZindex:0,children:a(C,{src:e.image,alt:"",className:"image"})}),e.audio!==""&&a(N,{src:e.audio,style:{marginTop:e.image?"10px":0,marginBottom:e.gif?"10px":0,backgroundColor:l==="dark"?"#232b38":"#fff",color:l==="dark"?"#fff":"#333"}}),e.gif!==""&&a(T,{showRotation:!0,showZoom:!0,src:e.gif,alt:"",className:"rounded-2xl w-full max-h-full"}),e.video!==""&&a("video",{src:e.video,controls:!0,className:"rounded-2xl w-full max-h-full"}),e.file!==""&&a("a",{href:e.file,target:"_blank",children:t(c,{bg:"#fff",borderRadius:"17px",w:"100%",h:"250px",px:"30px",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",children:[a(k,{mr:1}),a(s,{fontFamily:"Nunito",children:"Open file in New Tab"})]})}),a(I,{width:"auto",showLoader:!1,borderRadius:17,url:e.content,textAlign:"center"}),a(L,{options:g,children:a(s,{fontFamily:"Nunito",children:e.content})}),t(c,{display:"flex",position:"relative",alignItems:"center",justifyContent:"center",children:[t("span",{style:{fontSize:"12px",marginRight:"auto",display:"flex",color:"GrayText"},children:[r(m[new Date(e.createdAt).getDay()])," ",r(new Date(e.createdAt).getDate())," ",r(b[new Date(e.createdAt).getMonth()])," ",r(new Date(e.createdAt).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"}))]}),t(D,{children:[a(v,{children:a(R,{fontSize:"2xl",color:"GrayText"})}),t(A,{borderColor:"#d3d3d300",borderRadius:"33px",boxShadow:"2xl",padding:1.5,className:"transition-all duration-300 ease-in-out",children:[a(f,{onClick:()=>h(e),borderRadius:"24px 24px 0 0",boxShadow:"inset 0 1px 4px 2px rgba(0,0,0,0.1)",className:"transition-all duration-1000 ease-in-out hover:shadow-sm",display:"flex",justifyContent:"center",children:a(s,{p:2,fontSize:18,fontFamily:"Nunito",children:"Delete"})}),e.content!==""&&t(u,{children:[a(F,{marginTop:"0.2rem",marginBottom:"0.2rem"}),a(f,{onClick:()=>{navigator.clipboard.writeText(e.content),y({title:"Successfully copied the text to clipboard.",status:"success",position:"top",duration:2e3,isClosable:!0})},borderRadius:"0 0 24px 24px",boxShadow:"inset 0 0 4px 2px rgba(0,0,0,0.1)",className:"transition-all duration-1000 ease-in-out hover:shadow-sm",display:"flex",justifyContent:"center",children:a(s,{p:2,fontSize:18,fontFamily:"Nunito",children:"Copy Text"})})]})]})]})]})]})})};export{J as default};
