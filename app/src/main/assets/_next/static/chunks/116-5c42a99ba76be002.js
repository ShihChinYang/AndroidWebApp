"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[116],{59215:function(e,t,a){a.d(t,{Z:function(){return L}});var s=a(85893),n=a(67294),l=a(9473),i=a(68888),d=a(88083),r=a(76529),o=a(97056),c=a(18296),u=a(58832),p=a.n(u),h=a(38411),m=a.n(h),f=a(63801),g=a(36622),x=a(53918),v=a(52482),j=a(36762),w=a(19755),y=a.n(w);function N(e){let{id:t}=e;return(0,s.jsx)("div",{className:"bsafesImageSpinner",style:{position:"absolute",textAlign:"center"},children:(0,s.jsx)(c.no,{id:t,visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})})}var b=a(84390),_=a(28714);function k(e){let{panelIndex:t,panel:a,onVideoClicked:o,editorMode:c,onContentChanged:u,onPenClicked:p,editable:h=!0}=e,m=(0,l.I0)(),w=(0,n.useRef)(null),k=a.s3KeyPrefix,Z=(0,l.v9)(e=>e.container.workspaceKey),[D,C]=(0,n.useState)(!1),I=(e,t)=>{m((0,b.ig)({files:e,where:t,workspaceKey:Z}))};async function S(e){let t=$('<canvas hidden id = "canvas" width = "640" height = "300"></canvas>'),a=t[0];t.insertAfter("body");let s=parseInt(640/(e.videoWidth/e.videoHeight),10);a.width=640,a.height=s;let n=a.getContext("2d"),l=()=>{if(D)return;console.log("takeAShot..."),console.log("snapshotTaken",D),n.fillRect(0,0,640,s),n.drawImage(e,0,0,640,s),console.log("myWidth, myHeight",640,s);let t=n.getImageData(0,0,640,s),i=!0;for(let e=0;e<t.data.length;e++)if((e+1)%4&&0!==t.data[e]){i=!1;break}i?(setTimeout(l,1e3),console.log("Blank snapshot")):a.toBlob(e=>{let t=new FileReader;t.onload=()=>{m((0,b.MV)({s3KeyPrefix:k,snapshot:t.result}))},t.readAsBinaryString(e),C(!0)})};setTimeout(l,100)}return(0,n.useEffect)(()=>{window.$=window.jQuery=y()},[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{ref:w,onChange:e=>{e.preventDefault(),(0,_.qu)(!1,"handleVideoFiles: ",e.target.id);let a=e.target.files;a.length&&I(a,t)},type:"file",accept:"video/*",className:"d-none editControl",id:"videos"}),(0,s.jsx)(i.Z,{className:"",children:(0,s.jsxs)(d.Z,{children:["Uploaded"===a.status||"Downloaded"===a.status||"DownloadFailed"===a.status||"DownloadingVideo"===a.status||"DownloadedFromServiceWorker"===a.status||"Downloading"===a.status||"DownloadingThumbnail"===a.status||"ThumbnailDownloaded"===a.status?(0,s.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100",children:a.play?(0,s.jsx)(s.Fragment,{children:a.src?(0,s.jsx)("video",{alt:"Video broken",playsInline:!0,controls:!0,autoPlay:!0,muted:!0,poster:a.thumbnail,src:a.src,onPlaying:e=>{(0,_.qu)(!1,"onPlaying ..."),"Uploaded"===a.status&&S(e.target)},onCanPlay:e=>{(0,_.qu)(!1,"onCanPlay ...")},onLoadedMetadata:e=>{(0,_.qu)(!1,"onLoadedMetaData ..., autoplay muted ")},onLoadedData:e=>{(0,_.qu)(!1,"onLoadedData ...")},className:"w-100"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j.Z,{alt:"image broken",src:a.thumbnail,fluid:!0})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{alt:"image broken",src:a.thumbnail||a.placeholder,fluid:!0}),"Downloaded"===a.status&&(0,s.jsx)("div",{style:{position:"absolute",width:"100px",borderRadius:"10px",textAlign:"center",background:"white",opacity:"0.5",cursor:"pointer"},onClick:()=>{o(a.queueId)},children:(0,s.jsx)("i",{className:"fa fa-play-circle-o fa-4x text-danger","aria-hidden":"true"})}),"DownloadingVideo"===a.status&&(0,s.jsx)(N,{})]})}):"","Uploading"===a.status?(0,s.jsx)(v.Z,{now:a.progress}):"",("WaitingForUpload"===a.status||"WaitingForDownload"===a.status)&&(0,s.jsx)("i",{className:"fa fa-video-camera","aria-hidden":"true"})]})}),(0,s.jsx)(i.Z,{className:"",children:(0,s.jsx)(d.Z,{children:"Downloading"===a.status?(0,s.jsx)(v.Z,{now:a.progress}):""})}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{xs:8,sm:9,children:(0,s.jsx)("div",{className:"pt-2",children:(0,s.jsx)(f.Z,{editorId:t,mode:c,content:a.words,onContentChanged:u,showPen:!1,editable:h,hideIfEmpty:!0})})}),(0,s.jsx)(d.Z,{xs:4,sm:3,className:"p-0",children:"Uploading"!==a.status||"WaitingForUpload"===a.status?(0,s.jsxs)("div",{children:[h?(0,s.jsx)(g.Z,{variant:"link",align:"end",title:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"text-dark fa fa-ellipsis-v","aria-hidden":"true"})}),className:"pull-right",id:"dropdown-menu-align-end",children:(0,s.jsx)(x.Z.Item,{eventKey:"2",className:"deleteVideoBtn",onClick:()=>{confirm("Are you sure you want to delete this video?")&&m((0,b.deleteAVideoThunk)({panel:a}))},children:"Delete Video"})}):"",h?(0,s.jsx)(r.Z,{id:t,onClick:e=>{var t;(0,_.qu)(!1,"handleVideoBtn"),e.preventDefault(),w.current.value=null,null===(t=w.current)||void 0===t||t.click()},variant:"link",className:"px-1 text-dark btn btn-labeled pull-right",children:(0,s.jsx)("i",{id:t,className:"fa fa-video-camera fa-lg","aria-hidden":"true"})}):"",h?(0,s.jsx)(r.Z,{variant:"link",onClick:()=>{p(t)},className:"px-1 text-dark pull-right",children:(0,s.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}):""]}):""})]})]})}function Z(e){let{panelIndex:t,panel:a,onImageClicked:o,editorMode:c,onContentChanged:u,onPenClicked:p,editable:h=!0}=e,m=(0,l.I0)(),w=(0,n.useRef)(null),y=(0,l.v9)(e=>e.container.workspaceKey),N=(e,t)=>{m((0,b.VZ)({files:e,where:t,workspaceKey:y}))};return(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{ref:w,onChange:e=>{e.preventDefault(),(0,_.qu)(!1,"handleImageFiles: ",e.target.id);let a=e.target.files;a.length&&N(a,t)},type:"file",multiple:!0,accept:"image/*",className:"d-none editControl",id:"images"}),(0,s.jsx)(i.Z,{className:"",children:(0,s.jsxs)(d.Z,{children:["Uploaded"===a.status||"Downloaded"===a.status?(0,s.jsx)("div",{children:(0,s.jsx)(j.Z,{alt:"Image broken",src:a.src,onClick:()=>{o(a.queueId)},fluid:!0})}):"","Uploading"===a.status||"Downloading"===a.status?(0,s.jsx)(v.Z,{now:a.progress}):"",("WaitingForUpload"===a.status||"WaitingForDownload"===a.status)&&(0,s.jsx)("i",{className:"fa fa-picture-o","aria-hidden":"true"})]})}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{xs:8,sm:9,children:(0,s.jsx)("div",{className:"pt-2",children:(0,s.jsx)(f.Z,{editorId:t,mode:c,content:a.words,onContentChanged:u,showPen:!1,editable:h,hideIfEmpty:!0})})}),(0,s.jsx)(d.Z,{xs:4,sm:3,className:"p-0",children:"Uploaded"===a.status||"Downloaded"===a.status?(0,s.jsxs)("div",{children:[h?(0,s.jsx)(g.Z,{variant:"link",align:"end",title:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"text-dark fa fa-ellipsis-v","aria-hidden":"true"})}),className:"pull-right",id:"dropdown-menu-align-end",children:(0,s.jsx)(x.Z.Item,{eventKey:"2",className:"deleteImageBtn",onClick:()=>{confirm("Are you sure you want to delete this image?")&&m((0,b.cJ)({panel:a}))},children:"Delete Image"})}):"",h?(0,s.jsx)(r.Z,{id:t,onClick:e=>{var t;(0,_.qu)(!1,"handleImageBtn"),e.preventDefault(),w.current.value=null,null===(t=w.current)||void 0===t||t.click()},variant:"link",className:"px-1 text-dark btn btn-labeled pull-right",children:(0,s.jsx)("i",{id:t,className:"fa fa-picture-o fa-lg","aria-hidden":"true"})}):"",h?(0,s.jsx)(r.Z,{variant:"link",onClick:()=>{p(t)},className:"px-1 text-dark pull-right",children:(0,s.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}):""]}):""})]})]})}var D=a(84138),C=a(5401),I=a(59209),S=a(72854),q=a(82354),E=a.n(q),F=a(92867);function W(e){let{panelIndex:t,panel:a}=e,o=(0,l.I0)(),c=(0,l.v9)(e=>e.container.workspaceKey),u=(0,n.useRef)(null),p=async()=>{o((0,b.sg)({panel:a,workspaceKey:c}))};return(0,n.useEffect)(()=>{if(a.link){var e;null===(e=u.current)||void 0===e||e.click()}},[a]),(0,s.jsx)(C.Z,{children:(0,s.jsxs)(C.Z.Body,{children:[(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{xs:8,md:9,children:(0,s.jsxs)("h6",{children:[(0,s.jsx)("i",{className:"fa fa-file-o","aria-hidden":"true"})," ",(0,s.jsx)("span",{className:"attachmentFileName",children:a.fileName})]})}),(0,s.jsx)(d.Z,{xs:4,md:3,children:(0,s.jsxs)("div",{children:[(0,s.jsx)(g.Z,{variant:"link",align:"end",title:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"text-dark fa fa-ellipsis-v fa-lg","aria-hidden":"true"})}),className:"".concat(E().attachmentMoreBtn," pull-right"),id:"dropdown-menu-align-end",children:(0,s.jsx)(x.Z.Item,{eventKey:"1",onClick:()=>{confirm("Are you sure you want to delete this attachment?")&&o((0,b.ex)({panel:a}))},children:"Delete"})}),("Uploaded"===a.status||"Downloaded"===a.status)&&(0,s.jsx)(r.Z,{variant:"link",className:"pt-0 px-2 pull-right",onClick:p,children:(0,s.jsx)("i",{className:"text-dark fa fa-download fa-lg","aria-hidden":"true"})}),(0,s.jsx)("a",{ref:u,href:a.link,download:a.fileName,className:"d-none",children:"Save"}),("UploadFailed"===a.status||"DownloadFailed"===a.status)&&(0,s.jsx)(I.Z,{placement:"top",overlay:(0,s.jsx)(S.Z,{id:"ResumeUploadingFile",children:"Resume"}),children:(0,s.jsx)(r.Z,{variant:"link",className:"pt-0 px-2 pull-right",onClick:()=>{"UploadFailed"===a.status||o((0,b.sg)({panel:null,workspaceKey:c}))},children:(0,s.jsx)("i",{className:"text-dark fa fa-play-circle-o fa-lg","aria-hidden":"true"})})}),("WaitingForUpload"===a.status||"WaitingForDownload"===a.status)&&(0,s.jsx)(r.Z,{variant:"link",className:"pt-0 px-2 pull-right",children:(0,s.jsx)("i",{className:"text-dark fa fa-hand-paper-o fa-lg","aria-hidden":"true"})}),("Uploading"===a.status||"Downloading"===a.status)&&(0,s.jsx)(I.Z,{placement:"top",overlay:(0,s.jsx)(S.Z,{id:"StopUploadingFile",children:"Stop"}),children:(0,s.jsx)(r.Z,{variant:"link",className:"pt-0 px-2 pull-right",onClick:()=>{"Uploading"===a.status?o((0,b.k2)()):o((0,b.dc)())},children:(0,s.jsx)("i",{className:"text-dark fa fa-pause fa-lg","aria-hidden":"true"})})})]})})]}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{xs:8,md:9,children:(0,s.jsx)("p",{className:"mb-0",children:(0,F.x6)(a.fileSize)+" bytes"})}),(0,s.jsx)(d.Z,{xs:4,md:3,children:("Uploading"===a.status||"UploadFailed"===a.status||"Downloading"===a.status||"DownloadFailed"===a.status)&&(0,s.jsxs)("p",{className:"pull-right",children:[(Math.round(100*a.progress)/100).toFixed(2)," %"]})})]}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(d.Z,{children:"Uploading"===a.status||"UploadFailed"===a.status||"Downloading"===a.status||"DownloadFailed"===a.status?(0,s.jsx)(v.Z,{now:a.progress}):""})})]})})}function L(){let e=(0,l.I0)(),t=(0,l.v9)(e=>e.container.workspaceKey),a=(0,l.v9)(e=>e.container.searchKey),u=(0,l.v9)(e=>e.container.searchIV),h=(0,l.v9)(e=>e.page.activity),g=(0,l.v9)(e=>e.page.id);(0,l.v9)(e=>e.page.itemCopy);let x=(0,l.v9)(e=>e.page.oldVersion),[v,j]=(0,n.useState)("ReadOnly"),w=(0,l.v9)(e=>e.page.title),[y,N]=(0,n.useState)("ReadOnly"),C=(0,l.v9)(e=>e.page.content),[I,S]=(0,n.useState)(null),[q,F]=(0,n.useState)(null),[L,R]=(0,n.useState)(!1),V=(0,l.v9)(e=>e.page.S3SignedUrlForContentUpload),A=(0,l.v9)(e=>e.page.contentImagesDownloadQueue),B=(0,l.v9)(e=>e.page.contentImagesDisplayIndex),U=(0,l.v9)(e=>e.page.contentImagesAllDownloaded),P=B===A.length,O=(0,l.v9)(e=>e.page.contentVideosDownloadQueue),T=(0,l.v9)(e=>e.page.videoPanels),M=(0,l.v9)(e=>e.page.imagePanels),K=(0,l.v9)(e=>e.page.attachmentPanels),H=(0,l.v9)(e=>e.page.comments),z=(0,l.v9)(e=>e.page.draftLoaded),[Q,X]=(0,n.useState)(!1),[Y,G]=(0,n.useState)(!1),J=(0,n.useRef)(null),ee=(0,n.useRef)(null),et=(0,n.useRef)(null),[ea,es]=(0,n.useState)(!1),en=(0,n.useRef)(null),[el,ei]=(0,n.useState)(!1),ed=(0,n.useRef)(null),[er,eo]=(0,n.useState)(!1),ec=t=>{for(let a of((0,_.qu)(!0,"onVideoClicked: ",t),T))if(a.queueId===t){let t=a.queueId,s=a.s3KeyPrefix,n=a.numberOfChunks;e((0,b.f2)({id:t,s3KeyPrefix:s,numberOfChunks:n,fileName:a.fileName,fileType:a.fileType,fileSize:a.fileSize}));break}},eu=e=>{let t;(0,_.qu)(!0,"onImageClicked: ",e);let a=[];for(let s=0;s<M.length;s++){let n=M[s];if("Uploaded"!==n.status&&"Downloaded"!==n.status)continue;let l={};l.src=n.src,l.w=n.width,l.h=n.height,a.push(l),n.queueId===e&&(t=a.length-1)}let s=ee.current,n={history:!1,index:t};new(p())(s,m(),a,n).init()},ep=t=>{let a=t.target;"I"===t.target.tagName&&(a=t.target.parentNode);let s=a.id.replace("playVideoCenter_",""),n=a.parentNode;a.remove();let l=eh(s);n.appendChild(l);let i=s.split("&");if("chunks"===i[0]){let t=i[3],a=parseInt(i[1]),n=i[2],l=parseInt(i[5]),d=i[4];e((0,b.f2)({fromContent:!0,id:s,s3KeyPrefix:t,numberOfChunks:a,fileName:n,fileType:d,fileSize:l}))}else{let t=i[0];e((0,b.f2)({id:s,s3Key:t}))}};function eh(e){let t=J.current.cloneNode(!0);return t.className="bsafesImageSpinner",t.id="spinner_"+e,t.style.position="absolute",t.style.textAlign="center",t.removeAttribute("hidden"),t}function em(e){let t=document.createElement("div"),a="playVideoCenter_"+e.id,s="playVideoButton_"+e.id;return t.className="bsafesPlayVideo",t.id=a,t.style.position="absolute",t.style.width="100px",t.style.borderRadius="10px",t.style.textAlign="center",t.style.background="white",t.style.opacity="0.5",t.innerHTML='<i class="fa fa-play-circle-o fa-4x text-danger" id='.concat(s,' aria-hidden="true"></i>'),t}function ef(){document.querySelectorAll(".bsafesImageSpinner").forEach(e=>{e.remove()}),document.querySelectorAll(".bsafesPlayVideo").forEach(e=>{e.remove()}),S(document.querySelector(".contenEditorRow").querySelector(".inner-html").innerHTML),e((0,b.kj)()),N("Writing")}let eg=t=>{(0,_.qu)(!0,"pen ".concat(t," clicked"));let a=!0;if("content"===t)ef(),F("content"),a=!1;else if("title"===t)j("Writing"),F("title");else if(t.startsWith("video_")){let a=parseInt(t.split("_")[1]);e((0,b.es)({index:a,mode:"Writing"})),F(t)}else if(t.startsWith("image_")){let a=parseInt(t.split("_")[1]);e((0,b.kW)({index:a,mode:"Writing"})),F(t)}else t.startsWith("comment_")&&(e((0,b.pV)({index:t,mode:"Writing"})),F(t));R(a)},ex=(s,n)=>{if((0,_.qu)(!0,"editor-id: ".concat(s," content: ").concat(n)),"content"===q)n!==C?e((0,b.Qs)({content:n,workspaceKey:t})):(ey("ReadOnly"),F(null));else if("title"===q)n!==w?e((0,b.Vf)(n,t,a,u)):(ey("ReadOnly"),F(null));else if(q.startsWith("video_")){let t=parseInt(q.split("_")[1]);console.log(n,T[t].words),n!==T[t].words?e((0,b.f)({index:t,content:n})):(e((0,b.es)({index:t,mode:"ReadOnly"})),F(null))}else if(q.startsWith("image_")){let t=parseInt(q.split("_")[1]);n!==M[t].words?e((0,b.Hk)({index:t,content:n})):(e((0,b.kW)({index:t,mode:"ReadOnly"})),F(null))}else if(q.startsWith("comment_")){if("comment_New"!==q&&H[parseInt(q.split("_")[1])].content===n){e((0,b.pV)({index:q,mode:"ReadOnly"})),F(null);return}e((0,b.qH)({index:q,content:n}))}},ev=T.map((e,t)=>(0,s.jsx)(k,{panelIndex:"video_"+t,panel:e,onVideoClicked:ec,editorMode:e.editorMode,onPenClicked:eg,onContentChanged:ex,editable:!q&&0===h},e.queueId)),ej=M.map((e,t)=>(0,s.jsx)(Z,{panelIndex:"image_"+t,panel:e,onImageClicked:eu,editorMode:e.editorMode,onPenClicked:eg,onContentChanged:ex,editable:!q&&0===h},e.queueId)),ew=()=>{(0,_.qu)(!0,"handleWrite"),ef(),F("content")},ey=t=>{switch(q){case"content":N(t);break;case"title":j(t);break;default:if(q.startsWith("video_")){let a=parseInt(q.split("_")[1]);switch(t){case"Saving":case"ReadOnly":e((0,b.es)({index:a,mode:t}))}}else if(q.startsWith("image_")){let a=parseInt(q.split("_")[1]);switch(t){case"Saving":case"ReadOnly":e((0,b.kW)({index:a,mode:t}))}}else if(q.startsWith("comment_"))switch(t){case"Writing":case"Saving":case"ReadOnly":e((0,b.pV)({index:q,mode:t}))}}},eN=(a,s)=>{e((0,b.ig)({files:a,where:s,workspaceKey:t}))},eb=(a,s)=>{e((0,b.VZ)({files:a,where:s,workspaceKey:t}))},e_=K.map((e,t)=>(0,s.jsx)(W,{panelIndex:"attachment_"+t,panel:e},e.queueId)),ek=a=>{e((0,b.F1)({files:a,workspaceKey:t}))},eZ=(e,t)=>{"videos"===e.target.id?es(t):"images"===e.target.id?ei(t):eo(t)},eD=e=>{(0,_.qu)(!0,"handleDrag"),e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?eZ(e,!0):"dragleave"===e.type&&eZ(e,!1)},eC=function(e){if((0,_.qu)(!0,"handleDrop: ",e.target.id),e.preventDefault(),e.stopPropagation(),eZ(e,!1),e.dataTransfer.files&&e.dataTransfer.files[0]){if((0,_.qu)(!0,"handleDrop, at least one file."),"videos"===e.target.id){let t=/video.*/,a=[];for(let s of e.dataTransfer.files)s.type.match(t)?a.push(s):(0,_.qu)(!0,"Not an image.");eN(a,"top")}else if("images"===e.target.id){let t=/image.*/,a=[];for(let s of e.dataTransfer.files)s.type.match(t)?a.push(s):(0,_.qu)(!0,"Not an image.");eb(a,"top")}else if("attachments"===e.target.id){(0,_.qu)(!0,"handleDrop attachments: ",e.dataTransfer.files.length);let t=[];for(let a of e.dataTransfer.files)t.push(a);ek(t)}}eZ(e,!1)},eI=e=>{let t;(0,_.qu)(!0,"buildContentImagesGallery");let a=[];document.querySelectorAll(".bSafesImage").forEach(s=>{if(s.src.startsWith("blob")){let n={},l=s.id.split("&")[1].split("x");n.src=s.src,n.w=l[0],n.h=l[1],a.push(n),s.id===e&&(t=a.length-1)}});let s=ee.current,n={history:!1,index:t};new(p())(s,m(),a,n).init()};return(0,n.useEffect)(()=>{(0,_.qu)(!0,"pageCommons mounted.")},[]),(0,n.useEffect)(()=>{S(null)},[g]),(0,n.useEffect)(()=>{0===h?q&&(ey("ReadOnly"),F(null)):"Error"===h&&q&&ey("Writing")},[h]),(0,n.useEffect)(()=>{null!==C&&S(C)},[C]),(0,n.useEffect)(()=>{let t,a,s;if((!z||Q)&&(document.querySelectorAll(".videoControls").forEach(e=>{e.remove()}),B<A.length)){if(t=A[B],!(a=document.getElementById(t.id))){e((0,b.XZ)(B+1));return}if(a.parentNode.classList.contains("bsafesMediaContainer")){if(s=a.parentNode,!document.getElementById("spinner_"+t.id)){let e=eh(t.id);s.appendChild(e)}}else{(s=document.createElement("div")).className="bsafesMediaContainer",s.style.display="flex",s.style.alignItems="center",s.style.justifyContent="center";let e=a.cloneNode(!0);s.appendChild(e),a.replaceWith(s),a=e;let n=eh(t.id);s.appendChild(n)}if("Downloading"===t.status)return;if("Downloaded"===t.status||"DownloadFailed"===t.status){let n=document.getElementById("spinner_"+t.id);if(n&&n.remove(),"Downloaded"===t.status&&(a.src=t.src),a.classList.contains("bSafesDownloadVideo")){let e=null;(e=document.getElementById("playVideoCenter_"+t.id))||"ReadOnly"!==y||(e=em(t),s.appendChild(e)),"ReadOnly"===y&&(e.onclick=ep)}else a.onload=()=>{a.onclick=()=>{eI(a.id)}};e((0,b.XZ)(B+1))}}},[A,Q]),(0,n.useEffect)(()=>{let t,a;for(let s=0;s<O.length;s++){let n=(t=O[s]).id;if(a=document.getElementById(n),"Downloading"===t.status);else if("Downloaded"===t.status||"DownloadedFromServiceWorker"===t.status){let l=document.getElementById("spinner_"+n);if(l&&l.remove(),!a.classList.contains("fr-video")){let l=document.createElement("span");l.className="fr-video",l.classList.add("fr-draggable"),l.setAttribute("contenteditable","true"),l.setAttribute("draggable","true");let i=document.createElement("video");i.className="bSafesVideo",i.classList.add("fr-draggable"),i.classList.add("fr-dvi"),i.classList.add("fr-fvc"),i.setAttribute("controls",""),i.innerHTML="Your browser does not support HTML5 video.",i.id=n,i.src=t.src,i.style=a.style,i.addEventListener("loadeddata",e=>{i.play()}),a.classList.contains("fr-dib")&&l.classList.add("fr-dvb"),a.classList.contains("fr-dii")&&l.classList.add("fr-dvi"),a.classList.contains("fr-fil")&&l.classList.add("fr-fvl"),a.classList.contains("fr-fic")&&l.classList.add("fr-fvc"),a.classList.contains("fr-fir")&&l.classList.add("fr-fvr"),l.appendChild(i),a.replaceWith(l),e((0,b.Z8)({itemId:g,indexInQueue:s}))}}}},[O]),(0,n.useEffect)(()=>{"ReadOnly"===y&&(0,_.qu)(!0,"ReadOnly")},[y]),(0,n.useEffect)(()=>{z&&X(!0)},[z]),(0,n.useEffect)(()=>{Q&&e((0,b.Y2)())},[Q]),(0,n.useEffect)(()=>{U&&z&&(ew(),G(!1),X(!1))},[U,z]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{sm:"10",children:(0,s.jsx)("hr",{})})}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{sm:"10",children:(0,s.jsx)(f.Z,{editorId:"title",mode:v,content:w,onContentChanged:ex,onPenClicked:eg,editable:!q&&0===h&&!x})})}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{sm:"10",children:(0,s.jsx)("hr",{})})}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{className:"contenEditorRow",xs:"12",sm:"10",children:(0,s.jsx)(f.Z,{editorId:"content",mode:y,content:I||C,onContentChanged:ex,onPenClicked:eg,editable:!q&&0===h&&!x&&P,writingModeReady:e=>{},readOnlyModeReady:e=>{let t=document.getElementsByClassName("bSafesDownloadVideo");for(let e=0;e<t.length;e++){let a=t[e],s=a.parentNode,n=em(a);s.appendChild(n),n.onclick=ep}document.querySelectorAll(".bSafesImage").forEach(e=>{e.src.startsWith("blob")&&(e.onclick=()=>{eI(e.id)})})},onDraftSampled:t=>{(0,_.qu)(!0,"draft content: ",t),e((0,b.hL)({content:t}))},onDraftClicked:()=>{e((0,b.KT)())},onDraftDelete:()=>{e((0,b._D)())}})})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),!q&&0===h&&!x&&(0,s.jsxs)("div",{className:"videos",children:[(0,s.jsx)("input",{ref:et,onChange:e=>{e.preventDefault(),(0,_.qu)(!0,"handleVideoFiles: ",e.target.id);let t=e.target.files;t.length&&eN(t,"top")},type:"file",accept:"video/*",multiple:!0,className:"d-none editControl",id:"videos"}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(d.Z,{id:"videos",onDragEnter:eD,onDragLeave:eD,onDragOver:eD,onDrop:eC,sm:{span:10,offset:1},md:{span:8,offset:2},className:"text-center ".concat(ea?E().videosDragDropZoneActive:E().videosDragDropZone),children:(0,s.jsx)(r.Z,{id:"videos",onClick:e=>{var t;(0,_.qu)(!0,"handleVideoBtn"),e.preventDefault(),et.current.value=null,null===(t=et.current)||void 0===t||t.click()},variant:"link",className:"text-dark btn btn-labeled",children:(0,s.jsx)("h4",{children:(0,s.jsx)("i",{id:"videos",className:"fa fa-video-camera fa-lg","aria-hidden":"true"})})})})})]}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{xs:"12",md:"8",children:ev})}),(0,s.jsx)("br",{}),!q&&0===h&&!x&&(0,s.jsxs)("div",{className:"images",children:[(0,s.jsx)("input",{ref:en,onChange:e=>{e.preventDefault(),(0,_.qu)(!0,"handleImageFiles: ",e.target.id);let t=e.target.files;t.length&&eb(t,"top")},type:"file",multiple:!0,accept:"image/*",capture:!0,className:"d-none editControl",id:"images"}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(d.Z,{id:"images",onDragLeave:eD,onDragOver:eD,onDrop:eC,sm:{span:10,offset:1},md:{span:8,offset:2},className:"text-center ".concat(el?E().imagesDragDropZoneActive:E().imagesDragDropZone),children:(0,s.jsx)(r.Z,{id:"images",onClick:e=>{var t;(0,_.qu)(!0,"handleImageBtn"),e.preventDefault(),en.current.value=null,null===(t=en.current)||void 0===t||t.click()},variant:"link",className:"text-dark btn btn-labeled",children:(0,s.jsx)("h4",{children:(0,s.jsx)("i",{id:"images",className:"fa fa-picture-o fa-lg","aria-hidden":"true"})})})})})]}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{xs:"12",sm:"10",lg:"8",children:ej})}),(0,s.jsx)("br",{}),!q&&0===h&&!x&&(0,s.jsxs)("div",{className:"attachments",children:[(0,s.jsx)("input",{ref:ed,onChange:e=>{e.preventDefault(),(0,_.qu)(!0,"handleAttachments: ",e.target.id);let t=e.target.files;t.length&&ek(t)},type:"file",multiple:!0,className:"d-none editControl",id:"attachments"}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(d.Z,{id:"attachments",onDragLeave:eD,onDragOver:eD,onDrop:eC,sm:{span:10,offset:1},md:{span:8,offset:2},className:"text-center ".concat(er?E().attachmentsDragDropZoneActive:E().attachmentsDragDropZone),children:(0,s.jsx)(r.Z,{id:"attachments",onClick:e=>{var t;(0,_.qu)(!0,"handleAttachmentBtn"),e.preventDefault(),ed.current.value=null,null===(t=ed.current)||void 0===t||t.click()},variant:"link",className:"text-dark btn btn-labeled",children:(0,s.jsx)("h4",{children:(0,s.jsx)("i",{id:"attachments",className:"fa fa-paperclip fa-lg","aria-hidden":"true"})})})})})]}),(0,s.jsx)(i.Z,{className:"justify-content-center",children:(0,s.jsx)(d.Z,{xs:"12",md:"8",children:e_})}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{ref:ee,className:"pswp",tabIndex:"-1",role:"dialog","aria-hidden":"true",children:[(0,s.jsx)("div",{className:"pswp__bg"}),(0,s.jsxs)("div",{className:"pswp__scroll-wrap",children:[(0,s.jsxs)("div",{className:"pswp__container",children:[(0,s.jsx)("div",{className:"pswp__item"}),(0,s.jsx)("div",{className:"pswp__item"}),(0,s.jsx)("div",{className:"pswp__item"})]}),(0,s.jsxs)("div",{className:"pswp__ui pswp__ui--hidden",children:[(0,s.jsxs)("div",{className:"pswp__top-bar",children:[(0,s.jsx)("div",{className:"pswp__counter"}),(0,s.jsx)("button",{className:"pswp__button pswp__button--close",title:"Close (Esc)"}),(0,s.jsx)("button",{className:"pswp__button pswp__button--share",title:"Share"}),(0,s.jsx)("button",{className:"pswp__button pswp__button--fs",title:"Toggle fullscreen"}),(0,s.jsx)("button",{className:"pswp__button pswp__button--zoom",title:"Zoom in/out"}),(0,s.jsx)("div",{className:"pswp__preloader",children:(0,s.jsx)("div",{className:"pswp__preloader__icn",children:(0,s.jsx)("div",{className:"pswp__preloader__cut",children:(0,s.jsx)("div",{className:"pswp__preloader__donut"})})})})]}),(0,s.jsx)("div",{className:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap",children:(0,s.jsx)("div",{className:"pswp__share-tooltip"})}),(0,s.jsx)("button",{className:"pswp__button pswp__button--arrow--left",title:"Previous (arrow left)"}),(0,s.jsx)("button",{className:"pswp__button pswp__button--arrow--right",title:"Next (arrow right)"}),(0,s.jsx)("div",{className:"pswp__caption",children:(0,s.jsx)("div",{className:"pswp__caption__center"})})]})]})]}),!1,(0,s.jsx)(D.Z,{isEditing:q,onWrite:ew,readyForSaving:null!==V||L,onSave:()=>{(0,_.qu)(!0,"handleSave"),ey("Saving"),e((0,b.hX)(!1)),R(!1)},onCancel:()=>{(0,_.qu)(!0,"handleCancel"),e((0,b.ZC)(null)),ey("ReadOnly"),F(null),z&&e((0,b.eD)()),e((0,b.hX)(!1)),R(!1)},canEdit:!q&&0===h&&!x&&P}),!P&&(0,s.jsx)("div",{className:"fixed-bottom",children:(0,s.jsx)(o.Z,{variant:"info",children:"Loading contents, please wait ..."})}),(0,s.jsx)("div",{ref:J,className:"bsafesMediaSpinner",hidden:!0,children:(0,s.jsx)(c.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})})]})}},27432:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(85893),n=a(67294),l=a(76529),i=a(82280),d=a(88748),r=a(82354),o=a.n(r);function c(e){let{onNextClicked:t,onPreviousClicked:a,cover:r=!1,showAlert:c=!1,alertClosed:u=null}=e,[p,h]=(0,n.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{className:"".concat(o().previousPageBtn," ").concat(r?o().coverBtnFixed:o().pageBtnFixed),onClick:()=>{h(!1),a()},children:(0,s.jsx)("i",{className:"fa fa-chevron-left fa-lg","aria-hidden":"true"})}),(0,s.jsx)(l.Z,{className:"".concat(o().nextPageBtn," ").concat(r?o().coverBtnFixed:o().pageBtnFixed," pull-right"),onClick:()=>{h(!1),t()},children:(0,s.jsx)("i",{className:"fa fa-chevron-right fa-lg","aria-hidden":"true"})}),(0,s.jsx)(d.Z,{className:"p-3",position:r?"top-center":"middle-center",style:{zIndex:1e4},children:(0,s.jsxs)(i.Z,{show:c&&!p,onClose:()=>{h(!0),u()},bg:"warning",children:[(0,s.jsxs)(i.Z.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Alert"}),(0,s.jsx)("small",{})]}),(0,s.jsx)(i.Z.Body,{children:"Hello, your have reached the end."})]})})]})}}}]);