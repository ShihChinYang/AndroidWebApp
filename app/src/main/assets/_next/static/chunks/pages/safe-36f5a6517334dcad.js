(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2598],{5333:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/safe",function(){return t(5758)}])},5758:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var c=t(85893),r=t(67294),s=t(9473),o=t(11163),a=t(41664),i=t.n(a),l=t(33353),u=t(68888),d=t(88083),h=t(81011),x=t(92442),f=t(56693),j=t(76529),v=t(37383);function y(e){let{show:n=!1,onHide:t}=e,o=(0,s.I0)(),a=(0,s.v9)(e=>e.account.newAccountCreated),[i,h]=(0,r.useState)(!1),[x,y]=(0,r.useState)(null),w=()=>{confirm("Did you save your account recovery code? Close this?")&&(o((0,v.Jb)(null)),t())};return(0,r.useEffect)(()=>{if(a){let e=new File([a.accountRecoveryPhrase],"account.txt",{type:"text/plain"});y(URL.createObjectURL(e))}},[a]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(f.Z,{show:n,fullscreen:!0,onHide:w,children:[(0,c.jsx)(f.Z.Header,{closeButton:!0,children:(0,c.jsxs)(f.Z.Title,{children:[(0,c.jsx)("i",{className:"fa fa-ambulance","aria-hidden":"true"})," Save Your Account Recovery Code "]})}),(0,c.jsx)(f.Z.Body,{children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("p",{children:"Store your account recovery code in a secure location. If you forget your Nickname and Key Password, using account recovery code is the only way to recover your account."}),(0,c.jsx)("p",{children:"You can copy the following recovery code and paste it to a safe location"}),(0,c.jsx)("hr",{}),(0,c.jsx)(u.Z,{children:(0,c.jsx)(d.Z,{style:{overflowX:"auto",overflowY:"hidden",textOverflow:"ellipsis"},children:(0,c.jsx)("p",{children:a&&a.accountRecoveryPhrase})})}),(0,c.jsx)("hr",{}),(0,c.jsx)(u.Z,{children:(0,c.jsx)(d.Z,{className:"d-flex justify-content-center",children:(0,c.jsx)(j.Z,{className:"text-center",variant:"primary",onClick:()=>{navigator.clipboard.writeText(a.accountRecoveryPhrase),h(!0)},children:i?"Copied":"Copy"})})}),(0,c.jsx)("br",{}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:"or download the following file, rename it, and save it in a secure location."}),(0,c.jsx)(u.Z,{children:(0,c.jsx)(d.Z,{className:"d-flex justify-content-center",children:x&&(0,c.jsx)("a",{href:x,download:"account.txt",children:"account.txt"})})}),(0,c.jsx)("br",{})]}),(0,c.jsx)("hr",{}),(0,c.jsx)(u.Z,{children:(0,c.jsx)(d.Z,{className:"d-flex justify-content-center",children:(0,c.jsx)(j.Z,{className:"text-center",variant:"warning",onClick:w,children:"Done"})})})]})})]})})}var w=t(82354),p=t.n(w),Z=t(40699),m=t(84390);function g(){let e=(0,o.useRouter)(),n=(0,s.I0)(),[t,a]=(0,r.useState)(!1),f=(0,s.v9)(e=>e.account.newAccountCreated),j=(0,s.v9)(e=>e.auth.memberId),w=(0,s.v9)(e=>e.auth.accountVersion),g=(0,s.v9)(e=>e.auth.expandedKey),N=(0,s.v9)(e=>e.auth.searchKey),C=(0,s.v9)(e=>e.auth.searchIV),_=(0,s.v9)(e=>e.container.workspace);return(0,r.useEffect)(()=>{let t=(e,t)=>{let{shallow:c}=t;console.log("App is changing to ".concat(e," ").concat(c?"with":"without"," shallow routing")),n((0,m.JG)())};return e.events.on("routeChangeStart",t),()=>{e.events.off("routeChangeStart",t)}},[]),(0,r.useEffect)(()=>{if(j&&g){let e;"v1"===w?e=1:"v2"===w&&(e=3);let t="u:"+j+":"+e+":0";n((0,Z.XZ)({container:"root",workspaceId:t,workspaceKey:g,searchKey:N,searchIV:C})),n((0,Z.vB)(!0)),a(!0)}},[j,g]),(0,c.jsx)("div",{className:p().spaceBackground,children:(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)(l.Z,{fluid:!0,children:[(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(u.Z,{hidden:-1!=="default;".indexOf("hide"),children:(0,c.jsx)(d.Z,{className:"text-center",children:(0,c.jsx)(i(),{href:"/activities/".concat(_),children:"Activities"})})}),(0,c.jsx)(u.Z,{className:"justify-content-center",children:(0,c.jsx)(d.Z,{lg:8,children:(0,c.jsx)(x.Z,{readyToList:t})})})]}),(0,c.jsx)(y,{show:f,onHide:()=>{n((0,v.rn)(!0)),e.push("/services/dataCenterSetup")}})]})})}}},function(e){e.O(0,[3937,1664,1011,4074,318,2888,9774,179],function(){return e(e.s=5333)}),_N_E=e.O()}]);