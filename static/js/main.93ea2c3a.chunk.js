(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(18),r=a.n(i),o=(a(54),a(55),a(16)),c=a(94),l=a(23),d=l.a.initializeApp({apiKey:"AIzaSyDQP2y0MD1NYDm20NM2x6LxmEF7Z_u6vLs",authDomain:"instagram-clone-82f58.firebaseapp.com",projectId:"instagram-clone-82f58",storageBucket:"instagram-clone-82f58.appspot.com",messagingSenderId:"1077428323885",appId:"1:1077428323885:web:409d8476e5d390ba9ddaa4",measurementId:"G-4NNW8S528H"}).firestore(),p=l.a.auth(),j=l.a.storage(),x=(a(59),a(3)),m=function(e){var t=e.user,a=e.postId,s=e.username,i=e.caption,r=e.imageUrl,p=Object(n.useState)([]),j=Object(o.a)(p,2),m=j[0],u=j[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),h=g[0],f=g[1];Object(n.useEffect)((function(){a&&d.collection("posts").doc(a).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return e.data()})))}))}),[a]);return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsxs)("div",{className:"post__header",children:[Object(x.jsx)(c.a,{className:"post__avatar",alt:"CoderJakaria",src:""}),Object(x.jsxs)("h3",{children:[" ",s," "]})]}),Object(x.jsx)("img",{className:"post__image",src:r,alt:""}),Object(x.jsxs)("h4",{className:"post__text",children:[Object(x.jsxs)("strong",{children:[s,":"]})," ",i," "]}),Object(x.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(x.jsxs)("p",{children:[Object(x.jsxs)("strong",{children:[" ",e.username," "]})," ",e.text]})}))}),t&&Object(x.jsxs)("form",{className:"post__commentBox",children:[Object(x.jsx)("input",{type:"text",className:"post__input",placeholder:"Add a comment...",value:h,onChange:function(e){return f(e.target.value)}}),Object(x.jsx)("button",{className:"post__button",disabled:!h,type:"submit",onClick:function(e){e.preventDefault(),d.collection("posts").doc(a).collection("comments").add({text:h,username:t.displayName,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),f("")},children:"Post"})]})]})},u=(a(65),a(90)),b=a(91),g=a(93),h=a(92),f=(a(66),function(e){var t=e.username,a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],r=s[1],c=Object(n.useState)(""),p=Object(o.a)(c,2),m=p[0],u=p[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),f=g[0],O=g[1];return Object(x.jsxs)("div",{className:"imageUpload",children:[Object(x.jsx)("progress",{className:"imageUpload__progress",value:f,max:"100"}),Object(x.jsx)("input",{type:"text",placeholder:"Enter a caption...",value:i,onChange:function(e){return r(e.target.value)}}),Object(x.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&u(e.target.files[0])}}),Object(x.jsx)(h.a,{onClick:function(){j.ref("images/".concat(m.name)).put(m).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);O(t)}),(function(e){console.log(e),alert(e.message)}),(function(){j.ref("images").child(m.name).getDownloadURL().then((function(e){d.collection("posts").add({timestamp:l.a.firestore.FieldValue.serverTimestamp(),caption:i,imageUrl:e,username:t}),O(0),r(""),u(null)}))}))},children:"Upload"})]})}),O=(a(67),a(37)),C=function(){var e;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("blockquote",{class:"instagram-media","data-instgrm-captioned":!0,"data-instgrm-permalink":"https://www.instagram.com/p/CN90Gkuj6b6/?utm_source=ig_embed&utm_campaign=loading","data-instgrm-version":"13",style:(e={background:"#FFF",border:"0",borderRadius:"3px",boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:"1px",maxWidth:"540px",minWidth:"326px",padding:"0",width:"99.375%"},Object(O.a)(e,"width","-webkit-calc(100% - 2px)"),Object(O.a)(e,"width","calc(100% - 2px)"),e),children:Object(x.jsxs)("div",{style:{padding:"16px"},children:[" ",Object(x.jsxs)("a",{href:"https://www.instagram.com/p/CN90Gkuj6b6/?utm_source=ig_embed&utm_campaign=loading",style:{background:"#FFFFFF",lineSeight:"0",padding:"0 0",textAlign:"center",textDecoration:"none",width:"100%"},target:"_blank",children:[" ",Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[" ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:"0",height:"40px",marginRight:"14px",width:"40px"}})," ",Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:"1",justifyContent:"center"},children:[" ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:"0",height:"14px",marginBottom:"6px",width:"100px"}})," ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:"0",height:"14px",width:"60px"}})]})]}),Object(x.jsx)("div",{style:{padding:"19% 0"}})," ",Object(x.jsx)("div",{style:{display:"block",height:"50px",margin:"0 auto 12px",width:"50px"},children:Object(x.jsx)("svg",{width:"50px",height:"50px",viewBox:"0 0 60 60",version:"1.1",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",children:Object(x.jsx)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(x.jsx)("g",{transform:"translate(-511.000000, -20.000000)",fill:"#000000",children:Object(x.jsx)("g",{children:Object(x.jsx)("path",{d:"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"})})})})})}),Object(x.jsxs)("div",{style:{paddingTop:"8px"},children:[" ",Object(x.jsx)("div",{style:{color:"#3897f0",fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",fontWeight:"550",lineHeight:"18px"},children:" View this post on Instagram"})]}),Object(x.jsx)("div",{style:{padding:"12.5% 0"}})," ",Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginBottom:"14px",alignItems:"center"},children:[Object(x.jsxs)("div",{children:[" ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}})," ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:"0",marginRight:"14px",marginLeft:"2px"}})," ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})]}),Object(x.jsxs)("div",{style:{marginLeft:"8px"},children:[" ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:"0",height:"20px",width:"20px"}})," ",Object(x.jsx)("div",{style:{width:"0",height:"0",borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})]}),Object(x.jsxs)("div",{style:{marginLeft:"auto"},children:[" ",Object(x.jsx)("div",{style:{width:"0px",borderTop:"8px solid #F4F4F4",borderRight:"8px solid transparent; transform: translateY(16px)"}})," ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",flexGrow:"0",height:"12px",width:"16px",transform:"translateY(-4px)"}})," ",Object(x.jsx)("div",{style:{width:"0",height:"0",borderTop:"8px solid #F4F4F4",borderLeft:"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}})]})]})," ",Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:"1",justifyContent:"center",marginGottom:"24px"},children:[" ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:"0",height:"14px",marginBottom:"6px",width:"224px"}})," ",Object(x.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:"0",height:"14px",width:"144px"}})]})]}),Object(x.jsx)("p",{style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:"14px",lineHeight:"17px",marginBottom:"0",marginTop:"8px",overflow:"hidden",padding:"8px 0 7px",textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Object(x.jsx)("a",{href:"https://www.instagram.com/p/CN90Gkuj6b6/?utm_source=ig_embed&utm_campaign=loading",style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",lineHeight:"17px",textDecoration:"none"},target:"_blank",children:"A post shared by BD CRICKETERS (@bd_cricketers)"})})]})})})};function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var w=Object(u.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),y=function(){var e=w(),t=s.a.useState(v),a=Object(o.a)(t,1)[0],i=Object(n.useState)([]),r=Object(o.a)(i,2),c=r[0],l=r[1],j=Object(n.useState)(!1),u=Object(o.a)(j,2),O=u[0],y=u[1],_=Object(n.useState)(!1),F=Object(o.a)(_,2),k=F[0],N=F[1],S=Object(n.useState)(""),I=Object(o.a)(S,2),R=I[0],D=I[1],G=Object(n.useState)(""),A=Object(o.a)(G,2),B=A[0],U=A[1],E=Object(n.useState)(""),L=Object(o.a)(E,2),M=L[0],T=L[1],W=Object(n.useState)(null),Y=Object(o.a)(W,2),X=Y[0],z=Y[1];Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){e?(console.log(e),z(e)):z(null)}));return function(){e()}}),[X,R]),Object(n.useEffect)((function(){d.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]);return Object(x.jsxs)("div",{className:"instagram_page",children:[Object(x.jsx)(b.a,{open:O,onClose:function(){return y(!1)},children:Object(x.jsx)("div",{style:a,className:e.paper,children:Object(x.jsxs)("form",{className:"insta__signUp",children:[Object(x.jsx)("center",{children:Object(x.jsx)("img",{className:"insta__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"headerImage"})}),Object(x.jsx)(g.a,{placeholder:"username",type:"text",value:R,onChange:function(e){return D(e.target.value)}}),Object(x.jsx)(g.a,{placeholder:"email",type:"text",value:B,onChange:function(e){return U(e.target.value)}}),Object(x.jsx)(g.a,{placeholder:"password",type:"password",value:M,onChange:function(e){return T(e.target.value)}}),Object(x.jsx)(h.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(B,M).then((function(e){return e.user.updateProfile({displayName:R})})).catch((function(e){return alert(e.message)})),y(!1),U(""),T(""),D("")},children:"Sign Up"})]})})}),Object(x.jsx)(b.a,{open:k,onClose:function(){return N(!1)},children:Object(x.jsx)("div",{style:a,className:e.paper,children:Object(x.jsxs)("form",{className:"insta__signUp",children:[Object(x.jsx)("center",{children:Object(x.jsx)("img",{className:"insta__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"headerImage"})}),Object(x.jsx)(g.a,{placeholder:"email",type:"text",value:B,onChange:function(e){return U(e.target.value)}}),Object(x.jsx)(g.a,{placeholder:"password",type:"password",value:M,onChange:function(e){return T(e.target.value)}}),Object(x.jsx)(h.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(B,M).catch((function(e){return alert(e.message)})),N(!1),U(""),T("")},children:"Sign In"})]})})}),Object(x.jsxs)("div",{className:"insta__header",children:[Object(x.jsx)("img",{className:"insta__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"headerImage"}),X?Object(x.jsx)(h.a,{onClick:function(){return p.signOut()},children:"Logout"}):Object(x.jsxs)("div",{className:"insta__loginContainer",children:[Object(x.jsx)(h.a,{onClick:function(){return N(!0)},children:"Sign In"}),Object(x.jsx)(h.a,{onClick:function(){return y(!0)},children:"Sign up"})]})]}),Object(x.jsxs)("div",{className:"insta__post",children:[Object(x.jsx)("div",{className:"insta__postLeft",children:c.map((function(e){var t=e.id,a=e.post;return Object(x.jsx)(m,{postId:t,user:X,username:a.username,caption:a.caption,imageUrl:a.imageUrl},t)}))}),Object(x.jsxs)("div",{className:"insta__postRight",children:[Object(x.jsx)(C,{})," "]})]}),(null===X||void 0===X?void 0:X.displayName)?Object(x.jsx)(f,{username:X.displayName}):Object(x.jsx)("h3",{style:{textAlign:"center"},children:"Sorry you need to login to upload!"})]})};var _=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(y,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.93ea2c3a.chunk.js.map