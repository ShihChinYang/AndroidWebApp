"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6252],{19221:function(e,s,a){a.d(s,{Z:function(){return Z}});var n=a(85893),t=a(67294),r=a(9473),l=a(11163),i=a(68888),c=a(88083),d=a(49614),o=a(53918),f=a(14153),h=a(45314),x=a(72565),m=a(81968),j=a(87383),u=a(82354),p=a.n(u),N=a(28714),g=a(92867),k=a(40699);function Z(e){let{itemIndex:s,item:a,mode:u="listAll",onAdd:Z,onSelect:y}=e,I=(0,l.useRouter)(),v=(0,r.I0)(),[w,C]=(0,t.useState)(!1),[b,_]=(0,t.useState)(null),L=(0,r.v9)(e=>e.container.workspace),T=(0,r.v9)(e=>e.container.selectedItems),M=a.id,P=document.createElement("span");P.innerHTML=a.title;let S=P.textContent||P.innerText,E=(0,h.default)(a.itemPack.pageNumber,"yyyyLLdd",new Date),D=E.getDay(),H=(0,t.forwardRef)(function(e,s){let{children:a,onClick:t}=e;return(0,n.jsxs)("a",{href:"",ref:s,onClick:e=>{e.preventDefault(),t(e)},children:[(0,n.jsx)("i",{className:"fa fa-plus text-dark","aria-hidden":"true"}),a]})}),R=(0,t.forwardRef)(function(e,s){let{children:a,onClick:t}=e;return(0,n.jsxs)("a",{href:"",ref:s,onClick:e=>{e.preventDefault(),t(e)},children:[(0,n.jsx)("i",{className:"fa fa-sort text-dark","aria-hidden":"true"}),a]})}),A=()=>{(0,N.qu)(!1,"rowClicked ...");let e=(0,g.vp)(a);I.push(e)},B=e=>{_(e),C(!0)},F=async e=>{let n={space:L,targetContainer:a.container,items:T,targetItem:a.id,targetItemIndex:s,targetPosition:a.position};try{v((0,k.Xy)({action:e,payload:n}))}catch(e){(0,N.qu)(!1,"Moving items failed.")}};return(0,n.jsxs)(n.Fragment,{children:[a.id.startsWith("np")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(c.Z,{xs:{span:2,offset:1},sm:{span:2,offset:1},md:{span:1,offset:1},onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:a.itemPack.pageNumber}})}),(0,n.jsx)(c.Z,{xs:7,sm:7,md:8,onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})}),(0,n.jsx)(c.Z,{xs:1,children:(0,n.jsx)("a",{className:p().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})})]}),a.id.startsWith("dp")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{className:p().contentsItemRow,children:[(0,n.jsx)(c.Z,{className:"".concat(0===D||6===D?p().diaryWeekendItem:""," ").concat((0,m.default)(new Date,E)?p().diaryTodayItem:""),xs:{span:3,offset:1},sm:{span:2,offset:1},xl:{span:1,offset:1},onClick:A,style:{cursor:"pointer"},children:"listAll"===u?(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:(0,x.default)(E,"dd EEEEE")}}):(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:(0,x.default)(E,"yyyy-LL-dd")}})}),(0,n.jsx)(c.Z,{xs:6,sm:7,xl:8,onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})}),(0,n.jsx)(c.Z,{xs:1,children:(0,n.jsx)("a",{className:p().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})})]}),a.id.startsWith("p")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{className:p().contentsItemRow,children:[(0,n.jsxs)(c.Z,{xs:{span:7,offset:1},onClick:A,style:{cursor:"pointer"},children:[(0,n.jsx)("i",{className:"fa fa-file-text-o fa-lg ".concat(p().safeItemTypeIcon),"aria-hidden":"true"}),(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})]}),(0,n.jsx)(c.Z,{xs:3,className:"p-1",children:(0,n.jsxs)(d.Z,{className:"pull-right",children:[(0,n.jsx)("a",{className:p().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})}),(0,n.jsx)(f.Z.Group,{className:"me-2",children:(0,n.jsx)(f.Z.Check,{type:"checkbox",checked:!!T.find(e=>e.id===a.id),onChange:e=>{if(e.target.checked){let e=JSON.parse(JSON.stringify(a));v((0,k.Gh)(e))}else v((0,k.z_)(a.id))}})}),!T.length&&(0,n.jsxs)(o.Z,{align:"end",className:"justify-content-end",children:[(0,n.jsx)(o.Z.Toggle,{as:H,variant:"link"}),(0,n.jsxs)(o.Z.Menu,{children:[(0,n.jsx)(o.Z.Item,{onClick:()=>B("addAnItemBefore"),children:"Add before"}),(0,n.jsx)(o.Z.Item,{onClick:()=>B("addAnItemAfter"),children:"Add after"})]})]}),!!T.length&&(0,n.jsxs)(o.Z,{align:"end",className:"justify-content-end",children:[(0,n.jsx)(o.Z.Toggle,{as:R,variant:"link"}),(0,n.jsxs)(o.Z.Menu,{children:[(0,n.jsx)(o.Z.Item,{onClick:()=>F("dropItemsBefore"),children:"Drop before"}),(0,n.jsx)(o.Z.Item,{onClick:()=>F("dropItemsAfter"),children:"Drop after"})]})]})]})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})}),(0,n.jsx)(j.Z,{show:w,handleClose:()=>C(!1),optionSelected:e=>{C(!1),Z(e,b,M,a.position)}})]})]})}},87383:function(e,s,a){a.d(s,{Z:function(){return i}});var n=a(85893),t=a(56693),r=a(49003),l=a(28714);function i(e){let{show:s=!1,optionSelected:a,handleClose:i,pageOnly:c=!1}=e;return(0,l.qu)(!1,"Rendering ItemTypeModal: ","".concat(s,"}")),(0,n.jsxs)(t.Z,{show:s,onHide:i,children:[(0,n.jsx)(t.Z.Header,{closeButton:!0,children:(0,n.jsx)(t.Z.Title,{children:"Please Select a Type"})}),(0,n.jsx)(t.Z.Body,{children:(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(r.Z.Item,{id:"Page",action:!0,onClick:()=>a("Page"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-file-text-o me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Page"})]}),c?"":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.Z.Item,{id:"Notebook",action:!0,onClick:()=>a("Notebook"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-book me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Notebook"})]}),(0,n.jsxs)(r.Z.Item,{id:"Diary",action:!0,onClick:()=>a("Diary"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-calendar me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Diary"})]}),(0,n.jsxs)(r.Z.Item,{id:"Box",action:!0,onClick:()=>a("Box"),className:"pt-3 pb-3",variant:"primary",children:[(0,n.jsx)("i",{className:"fa fa-archive me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Box"})]}),(0,n.jsxs)(r.Z.Item,{id:"Folder",action:!0,onClick:()=>a("Folder"),className:"pt-3 pb-3",variant:"warning",children:[(0,n.jsx)("i",{className:"fa fa-folder-o me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Folder"})]})]})]})})]})}},42017:function(e,s,a){a.d(s,{Z:function(){return k}});var n=a(85893),t=a(68888),r=a(88083),l=a(94184),i=a.n(l),c=a(67294),d=a(54728),o=a(13551);let f=c.forwardRef((e,s)=>{let{active:a=!1,disabled:t=!1,className:r,style:l,activeLabel:c="(current)",children:d,linkStyle:f,linkClassName:h,as:x=o.Z,...m}=e,j=a||t?"span":x;return(0,n.jsx)("li",{ref:s,style:l,className:i()(r,"page-item",{active:a,disabled:t}),children:(0,n.jsxs)(j,{className:i()("page-link",h),style:f,...m,children:[d,a&&c&&(0,n.jsx)("span",{className:"visually-hidden",children:c})]})})});function h(e,s){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,t=c.forwardRef((e,t)=>{let{children:r,...l}=e;return(0,n.jsxs)(f,{...l,ref:t,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:r||s}),(0,n.jsx)("span",{className:"visually-hidden",children:a})]})});return t.displayName=e,t}f.displayName="PageItem";let x=h("First","\xab"),m=h("Prev","‹","Previous"),j=h("Ellipsis","…","More"),u=h("Next","›"),p=h("Last","\xbb"),N=c.forwardRef((e,s)=>{let{bsPrefix:a,className:t,size:r,...l}=e,c=(0,d.vE)(a,"pagination");return(0,n.jsx)("ul",{ref:s,...l,className:i()(t,c,r&&"".concat(c,"-").concat(r))})});N.displayName="Pagination";var g=Object.assign(N,{First:x,Prev:m,Ellipsis:j,Item:f,Next:u,Last:p});function k(e){let{page:s,total:a,limit:l,changePage:i}=e,c=[],d=Math.ceil(a/l),o=Math.ceil(d/5);for(let e=1;e<=o;e++){let a=!1;5*e>=d&&(a=!0);let t=[];for(let r=(e-1)*5+1;r<=(a?d:5*e);r++)t.push((0,n.jsx)(g.Item,{active:r===s,onClick:()=>i(r),children:r},r));c.push((0,n.jsx)(r.Z,{children:(0,n.jsx)(g,{children:t})},e))}return(0,n.jsx)(t.Z,{children:c})}}}]);