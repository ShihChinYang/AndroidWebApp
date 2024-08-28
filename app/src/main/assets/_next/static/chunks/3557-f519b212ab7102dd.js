"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3557],{2772:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(85893),n=a(67294),i=a(11163),r=a(68888),c=a(88083),l=a(76529),o=a(5401),u=a(51417),f=a(14153),h=a(9198),d=a.n(h),p=a(82354),g=a.n(p);function m(e){let{datePickerViewMode:t="dayMonth",startDate:a,setStartDate:h,showListIcon:p=!1,showSearchIcon:m=!1,handleSearch:x,onCoverClicked:v,onContentsClicked:j,onSubmitSearch:k=null,onCancelSearch:w=null}=e,Z=(0,i.useRouter)(),C=(0,n.useRef)(null),[I,y]=(0,n.useState)(!1),[P,N]=(0,n.useState)(""),q=(0,n.forwardRef)((e,t)=>{let{value:a,onClick:n}=e;return(0,s.jsx)(l.Z,{variant:"link",size:"sm",className:"text-white pull-right",onClick:n,ref:t,children:(0,s.jsx)("i",{className:"fa fa-calendar fa-lg","aria-hidden":"true"})})}),E=e=>{e.preventDefault(),k(P)};return(0,n.useEffect)(()=>{I&&C.current.focus()},[I]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{children:(0,s.jsx)(c.Z,{xs:12,sm:{span:10,offset:1},lg:{span:8,offset:2},children:(0,s.jsx)(o.Z,{className:"".concat(g().containerControlPanel),children:(0,s.jsx)(o.Z.Body,{className:g().diaryControlPanelBody,children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(c.Z,{xs:4,children:[(0,s.jsx)(l.Z,{variant:"link",size:"sm",className:"text-white",onClick:v,children:(0,s.jsx)("i",{className:"fa fa-book fa-lg","aria-hidden":"true"})}),p&&(0,s.jsx)(l.Z,{variant:"link",size:"sm",className:"text-white",onClick:j,children:(0,s.jsx)("i",{className:"fa fa-list-ul fa-lg","aria-hidden":"true"})})]}),(0,s.jsx)(c.Z,{xs:4}),(0,s.jsxs)(c.Z,{xs:4,children:[Z.asPath.includes("/contents/")&&!I&&(0,s.jsx)(l.Z,{variant:"link",size:"sm",className:"text-white pull-right",onClick:e=>{y(!0)},children:(0,s.jsx)("i",{className:"fa fa-search fa-lg","aria-hidden":"true"})}),(0,s.jsx)("div",{className:"pull-right",children:(0,s.jsx)(d(),{selected:a,onChange:e=>h(e),customInput:(0,s.jsx)(q,{}),showPopperArrow:!1,..."monthYear"===t?{showMonthYearPicker:!0,showFullMonthYearPicker:!0}:{}})})]})]})})})})}),I&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(c.Z,{xs:12,sm:{span:10,offset:1},lg:{span:8,offset:2},children:(0,s.jsx)(o.Z,{className:"".concat(g().containerControlPanel),children:(0,s.jsx)(f.Z,{onSubmit:E,className:g().searchBar,children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(f.Z.Control,{ref:C,type:"text",className:"".concat(g().searchBarInput," text-white display-1"),value:P,onChange:e=>{N(e.target.value)}}),(0,s.jsx)(l.Z,{variant:"link",children:(0,s.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-white","aria-hidden":"true",onClick:E})}),(0,s.jsx)(l.Z,{variant:"link",children:(0,s.jsx)("i",{id:"1",className:"fa fa-times fa-lg text-white","aria-hidden":"true",onClick:e=>{e.preventDefault(),N(""),y(!1),w()}})})]})})})})})]})]})}},36321:function(e,t,a){var s=a(85893),n=a(67294),i=a(11163),r=a(9473),c=a(39332),l=a(33353),o=a(72565),u=a(82354),f=a.n(u),h=a(40699),d=a(84390),p=a(28714);t.Z=e=>{let{itemId:t,children:a}=e,u=(0,r.I0)(),g=(0,i.useRouter)(),m=(0,c.useSearchParams)(),[x,v]=(0,n.useState)(!1),j=(0,r.v9)(e=>e.auth.accountVersion),k=(0,r.v9)(e=>e.auth.isLoggedIn),w=(0,r.v9)(e=>e.auth.searchKey),Z=(0,r.v9)(e=>e.auth.searchIV),C=(0,r.v9)(e=>e.auth.expandedKey),I=(0,r.v9)(e=>e.container.navigationInSameContainer),y=(0,r.v9)(e=>e.container.container),P=(0,r.v9)(e=>e.container.workspace),N=(0,r.v9)(e=>e.container.workspaceKey),q=(0,r.v9)(e=>e.container.workspaceKeyReady),E=(0,r.v9)(e=>e.container.startDateValue),[b,D]=(0,n.useState)(new Date(E)),B=(0,r.v9)(e=>e.page.aborted),S=(0,r.v9)(e=>e.page.id),K=(0,r.v9)(e=>e.page.pageNumber),R=(0,r.v9)(e=>e.page.navigationMode),M=(0,r.v9)(e=>e.page.space),_=(0,r.v9)(e=>e.page.container),T=(0,r.v9)(e=>e.page.itemCopy);(0,p.qu)(!1,"aborted: ",B),(0,p.qu)(!1,"itemId: ",t),(0,p.qu)(!1,"pageItemId: ",S);let V=()=>{(0,p.qu)(!1,"Reload a page: ",t),u((0,d.cD)(!1)),u((0,h.vB)(!1)),(0,p.qu)(!1,"set pageItemId: ",g.query.itemId),u((0,d.sF)(g.query.itemId));let e=g.asPath;"contents"===(e=e.split("/")[2])&&(u((0,h.H5)()),"d"===t.split(":")[0]&&(u((0,h.Pm)(new Date().getTime())),u((0,h.p8)(!1))))};return(0,n.useEffect)(()=>{(0,p.qu)(!1,"pageItemWrapper useEffect, []");let e=(e,t)=>{let{shallow:a}=t;console.log("App is changing to ".concat(e," ").concat(a?"with":"without"," shallow routing")),u((0,d.JG)()),u((0,d.rs)()),u((0,h.H5)())},t=()=>{(0,p.qu)(!1,"handleRouteChangeComplete - initPage"),u((0,d.df)())};return g.events.on("routeChangeStart",e),g.events.on("routeChangeComplete",t),()=>{(0,p.qu)(!1,"pageItemWrapper events.off"),g.events.off("routeChangeStart",e),g.events.off("routeChangeComplete",t)}},[]),(0,n.useEffect)(()=>{(0,p.qu)(!1,"initPage"),u((0,d.df)())},[t]),(0,n.useEffect)(()=>{(0,p.qu)(!1,"".concat(k,", ").concat(t,", ").concat(S)),k&&t&&!S&&!B&&V()},[k,t,S,B]),(0,n.useEffect)(()=>{if(S){let e=m.get("version");(0,p.qu)(!1,"Dispatch getPageItemThunk ...");let t={itemId:S,navigationInSameContainer:I};e&&(t.version=parseInt(e)),u((0,d.Ed)(t))}},[S]),(0,n.useEffect)(()=>{R&&((0,p.qu)(!1,"setContainerData ..."),u((0,d.BT)({itemId:S,container:{space:P,id:y}})))},[R]),(0,n.useEffect)(()=>{K&&((0,p.qu)(!1,"pageNumber: ",K),K%2?u((0,d.ml)(f().leftPagePanel)):u((0,d.ml)(f().rightPagePanel)))},[K]),(0,n.useEffect)(()=>{if(M){let e=g.asPath;if("contents"!==(e=e.split("/")[2])&&_===y){u((0,h.vB)(!0));return}if("contents"===e&&M===P){S!==y&&u((0,h.ef)({container:S})),u((0,h.vB)(!0));return}if(M===P){_!==y&&u((0,h.ef)({container:_})),u((0,h.vB)(!0));return}u((0,h.k_)()),v(!0)}},[M]),(0,n.useEffect)(()=>{if(x){let e=g.asPath;if(e=e.split("/")[2],"u"===M.substring(0,1))(0,p.qu)(!1,"Dispatch initWorkspace ..."),"contents"!==e?u((0,h.XZ)({container:_,workspaceId:M,workspaceKey:C,searchKey:w,searchIV:Z})):u((0,h.XZ)({container:S,workspaceId:M,workspaceKey:C,searchKey:w,searchIV:Z})),u((0,h.vB)(!0));else{let t;t="v1"===j?M.substring(0,M.length-4):M,"contents"!==e?u((0,h.VM)({teamId:t,container:_})):u((0,h.VM)({teamId:t,container:S}))}}},[x]),(0,n.useEffect)(()=>{if((0,p.qu)(!1,"useEffect [workspaceKey] ..."),!q||!T)return;let e=g.asPath;if("contents"!==(e=e.split("/")[2])&&q&&N&&T){let e=S.split(":")[0];(0,p.qu)(!1,"Dispatch decryptPageItemThunk ..."),u((0,d.t_)({itemId:S,workspaceKey:N})),"f"===e||"b"===e||"n"===e||"d"===e||u((0,d.s6)({itemId:S})),v(!1)}},[q]),(0,n.useEffect)(()=>{if((0,p.qu)(!1,"useEffect [workspaceKey] ..."),q&&S&&y&&q){let e=S.split(":")[0],t=g.asPath;"contents"===(t=t.split("/")[2])&&(v(!1),(0,p.qu)(!1,"listItemsThunk ..."),"d"!==e?u((0,h.bZ)({pageNumber:1})):(u((0,h.bZ)({startDate:(0,o.default)(b,"yyyyLL")})),u((0,h.p8)(!1))))}},[q,y]),(0,s.jsx)(l.Z,{fluid:!0,children:a})}}}]);