import{r as _,c as z,B as Ie,a as v,d as G,Q as b,w as k,f as a,R as f,e as x,F as E,S as q,n as V,U as N,h as C,x as w,m as le,u as He,q as de,V as cn,W as mn,v as fn,s as Q,X as gn}from"./vue-DuvXskzu.js";import{S as hn,T as ke,M as Ye,B as $,U as vn,a as yn,b as bn,I as Ve,c as wn,C as xn,A as Ge,z as In,d as kn,e as An}from"./ui-vendor-CZTLfC0-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const H=_(document.documentElement.dataset.theme==="dark");function Cn(){H.value=!H.value;const e=H.value?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("dip-theme",e)}catch{}}const Bn=z(()=>{const e=H.value;return{common:{primaryColor:e?"#b6cea0":"#526d47",primaryColorHover:e?"#d0e1bf":"#405837",primaryColorPressed:e?"#9dbb82":"#32492a",primaryColorSuppl:"#526d47",bodyColor:e?"#141b17":"#f4f4ee",cardColor:e?"#1b251f":"#ffffff",modalColor:e?"#1b251f":"#ffffff",popoverColor:e?"#26332a":"#ffffff",inputColor:e?"#18211b":"#ffffff",textColorBase:e?"#e7ebdf":"#25352c",textColor1:e?"#e7ebdf":"#25352c",textColor2:e?"#cdd7c3":"#56634f",textColor3:e?"#97a591":"#7b857b",borderColor:e?"#33422f":"#e2e6db",dividerColor:e?"#33422f":"#e9ebdf",borderRadius:"8px",borderRadiusSmall:"6px",fontFamily:'Inter, "Segoe UI", "Microsoft YaHei", sans-serif',fontSize:"13px",heightSmall:"34px",heightMedium:"38px"},Button:{fontWeight:"500",borderRadiusSmall:"7px",textColorPrimary:e?"#253323":"#ffffff"},Card:{borderRadius:"12px"},Slider:{railHeight:"4px",handleSize:"15px"}}}),ue={__name:"UiSelect",props:{placeholder:{type:String,default:"请选择"},value:[String,Number],options:Array,label:String,controlId:String,disabled:Boolean,size:{type:String,default:"small"}},emits:["update:value"],setup(e,{emit:t}){const n=e,i=t,r=_(!1);function o(p){const d=p.querySelector(".n-base-selection-label");d&&(d.setAttribute("role","combobox"),d.setAttribute("aria-label",n.label),d.setAttribute("aria-expanded",String(r.value)),d.setAttribute("aria-disabled",String(n.disabled)),d.setAttribute("aria-haspopup","listbox"),n.controlId&&(d.id=n.controlId),r.value&&n.controlId?d.setAttribute("aria-controls",n.controlId+"-options"):d.removeAttribute("aria-controls"))}const u={mounted:o,updated:o};return(p,d)=>Ie((v(),G(b(hn),{placeholder:e.placeholder,"virtual-scroll":!1,value:e.value,options:e.options,disabled:e.disabled,size:e.size,show:r.value,"onUpdate:show":d[0]||(d[0]=s=>r.value=s),"onUpdate:value":d[1]||(d[1]=s=>i("update:value",s)),"menu-props":{id:e.controlId?e.controlId+"-options":void 0,role:"listbox","aria-label":e.label},"node-props":s=>({role:"option","aria-selected":s.value===e.value})},null,8,["placeholder","value","options","disabled","size","show","menu-props","node-props"])),[[u]])}},Ae=[{id:"flower",name:"荷花 · 颜色与灰度",chapter:"c2",page:80,file:"samples/course/flower.jpg",description:"加权灰度、颜色空间、通道观察",width:352,height:232,reference:"第 2 章 · 第 80 页",deck:"第2章 数字图像处理基础.pptx",originalMedia:"ppt/media/image131.jpg",originalSha256:"c68f168eda86c78c434411a075b221e2eeb70535f6dd44f0b4e249f454da8dc9",sha256:"c68f168eda86c78c434411a075b221e2eeb70535f6dd44f0b4e249f454da8dc9",conversion:"原始嵌入文件，未重编码"},{id:"lotus",name:"荷花 · HSV 换色",chapter:"c2",page:89,file:"samples/course/lotus.jpg",description:"HSV 局部换色原图",width:400,height:300,reference:"第 2 章 · 第 89 页",deck:"第2章 数字图像处理基础.pptx",originalMedia:"ppt/media/image146.jpg",originalSha256:"151d406d7b365d9fcb849c72b779f544b368702f09caefe36a2a5d76ac34bf0e",sha256:"151d406d7b365d9fcb849c72b779f544b368702f09caefe36a2a5d76ac34bf0e",conversion:"原始嵌入文件，未重编码"},{id:"bird",name:"鸟 · 几何变换",chapter:"c3",page:20,file:"samples/course/bird.jpeg",description:"平移、镜像、缩放与插值",width:352,height:228,reference:"第 3 章 · 第 20 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image56.jpeg",originalSha256:"144bee84c759c0437f988392273dd1d4938b43a1306935b6dcc1f00f3795c57d",sha256:"144bee84c759c0437f988392273dd1d4938b43a1306935b6dcc1f00f3795c57d",conversion:"原始嵌入文件，未重编码"},{id:"coins",name:"硬币 · 阈值分割",chapter:"c2",page:79,file:"samples/course/coins.png",description:"灰度图阈值二值化",width:300,height:246,reference:"第 2 章 · 第 79 页",deck:"第2章 数字图像处理基础.pptx",originalMedia:"ppt/media/image125.png",originalSha256:"e7dcc41c9b38659eb8c217815ece69778e218df97bd5167235cc2f6d45419e21",sha256:"e7dcc41c9b38659eb8c217815ece69778e218df97bd5167235cc2f6d45419e21",conversion:"原始嵌入文件，未重编码"},{id:"rose",name:"玫瑰 · 联合阈值",chapter:"c2",page:79,file:"samples/course/rose.jpg",description:"红、蓝通道联合阈值",width:288,height:216,reference:"第 2 章 · 第 79 页",deck:"第2章 数字图像处理基础.pptx",originalMedia:"ppt/media/image127.jpg",originalSha256:"29d6426a8c15f951afb3d1fe9e854b6298076a8d9abac46b703f0ac43dff6aee",sha256:"29d6426a8c15f951afb3d1fe9e854b6298076a8d9abac46b703f0ac43dff6aee",conversion:"原始嵌入文件，未重编码"},{id:"peppers",name:"彩椒 · 正交变换",chapter:"c4",page:50,file:"samples/course/peppers.jpg",description:"逐通道 DCT 与频域观察",width:256,height:256,reference:"第 4 章 · 第 50 页",deck:"第4章_图像的正交变换_刘兴庭_润色版.pptx  -  已修复 (1)(1).pptx",originalMedia:"ppt/media/image69.JPG",originalSha256:"8f845dbdfb9562566371974968e5d7ed81269cf3a18e1f7b2af409cdff37a928",sha256:"8f845dbdfb9562566371974968e5d7ed81269cf3a18e1f7b2af409cdff37a928",conversion:"原始嵌入文件，未重编码"},{id:"cameraman",name:"摄影师 · 傅里叶变换",chapter:"c4",page:21,file:"samples/course/cameraman.png",description:"DFT、相位、逆变换",width:256,height:256,reference:"第 4 章 · 第 21 页",deck:"第4章_图像的正交变换_刘兴庭_润色版.pptx  -  已修复 (1)(1).pptx",originalMedia:"ppt/media/image61.tif",originalSha256:"bae785b3236037abe32914516e758ea108eac0a2f3430f3f4216574bbae6ea51",sha256:"a78aa7864a9b2899ce851451cec38f1d692facc64bdf2dfca646826568481d27",conversion:"TIFF 转 PNG，像素保持一致"},{id:"desert",name:"沙漠 · 双图背景",chapter:"c3",page:45,file:"samples/course/desert.jpg",description:"图像加法、加权融合、差分",width:352,height:231,reference:"第 3 章 · 第 45 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image156.jpg",originalSha256:"9d8b5a27c04e0ed22e865f83bcdf46dff29a9191c879df6b79d5116c7f39a515",sha256:"9d8b5a27c04e0ed22e865f83bcdf46dff29a9191c879df6b79d5116c7f39a515",conversion:"原始嵌入文件，未重编码"},{id:"car",name:"汽车 · 双图前景",chapter:"c3",page:45,file:"samples/course/car.jpg",description:"与沙漠背景组成课件双图实验",width:352,height:231,reference:"第 3 章 · 第 45 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image157.jpg",originalSha256:"c5c76a0eff9305afb5e835b883ac0e9db3126736b264207a9e837f8d4b48b8bf",sha256:"c5c76a0eff9305afb5e835b883ac0e9db3126736b264207a9e837f8d4b48b8bf",conversion:"原始嵌入文件，未重编码"},{id:"landscape",name:"山谷 · 合成背景",chapter:"c3",page:63,file:"samples/course/landscape.jpeg",description:"课件蝴蝶合成实例的背景",width:497,height:379,reference:"第 3 章 · 第 63 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image197.jpeg",originalSha256:"3bb771fe12b0c4570fd204e0a2f8f03757c3a69065f7d591551d5f66e234f65a",sha256:"3bb771fe12b0c4570fd204e0a2f8f03757c3a69065f7d591551d5f66e234f65a",conversion:"原始嵌入文件，未重编码"},{id:"butterfly",name:"蝴蝶 · 合成前景",chapter:"c3",page:63,file:"samples/course/butterfly.png",description:"随机变换、通道交换与合成",width:180,height:157,reference:"第 3 章 · 第 63 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image196.png",originalSha256:"ae994fde1784a8fecbb29bf154f3b26b9ac79158802fac6f5f7ba3b9658cf5fd",sha256:"ae994fde1784a8fecbb29bf154f3b26b9ac79158802fac6f5f7ba3b9658cf5fd",conversion:"原始嵌入文件，未重编码"},{id:"snoopy",name:"索引图 · 调色板",chapter:"c2",page:82,file:"samples/course/snoopy.png",description:"索引调色板密度分割",width:240,height:320,reference:"第 2 章 · 第 82 页",deck:"第2章 数字图像处理基础.pptx",originalMedia:"ppt/media/image137.png",originalSha256:"579010bf7d9a2e499a45940699ac9ed68e8dbca05c2269b53d71690ad2e80185",sha256:"579010bf7d9a2e499a45940699ac9ed68e8dbca05c2269b53d71690ad2e80185",conversion:"原始嵌入文件，未重编码"},{id:"office",name:"室内 · 亮度点运算",chapter:"c3",page:3,file:"samples/course/office.jpeg",description:"课件亮度乘 4 的低照度原图",width:521,height:346,reference:"第 3 章 · 第 3 页",deck:"第3章 图像基本性运算.pptx",originalMedia:"ppt/media/image3.jpeg",originalSha256:"e601f926ed3c76076b020c3b4889602d37b6d5da444956945d170dc0799eb95f",sha256:"e601f926ed3c76076b020c3b4889602d37b6d5da444956945d170dc0799eb95f",conversion:"原始嵌入文件，未重编码"}],De=Ae,we=Object.fromEntries(Ae.map(e=>[e.id,e])),Tn=Ae.map(e=>({value:e.id,label:e.name}));function pe(e){return new URL("./"+e.file,document.baseURI).href}function Mn(e,t={}){return e.id==="binary"?t.binaryMode==="rgb"?"rose":"coins":{pseudo:"snoopy",recolor:"lotus",brightness:"office",resize:"bird",geometry:"bird",arithmetic:"desert",composite:"landscape",fft:"cameraman",dct:"peppers",pca:"cameraman",radon:"cameraman",hadamard:"cameraman",wavelet:"flower"}[e.id]||"flower"}function Pn(e){return e.id==="composite"?"butterfly":e.id==="arithmetic"?"car":"flower"}const Rn={class:"gallery-description"},_n={class:"course-gallery-grid"},zn=["onClick","aria-label","aria-pressed"],Nn={class:"course-image-preview"},$n=["src","alt"],Ln={key:0,class:"sample-check"},Sn={class:"course-image-info"},Gn={class:"gallery-bottom"},Dn={__name:"CourseGallery",props:{show:Boolean,selected:String,secondary:Boolean},emits:["update:show","select"],setup(e,{emit:t}){const n=t;return(i,r)=>(v(),G(b(Ye),{show:e.show,"onUpdate:show":r[0]||(r[0]=o=>n("update:show",o)),preset:"card",class:"course-gallery-modal",title:e.secondary?"选择第二幅课件图片":"课件图像库",bordered:!1,style:{width:"min(920px, calc(100vw - 32px))"}},{default:k(()=>[a("p",Rn,"从课件中提取的原图。点选图片"+f(e.secondary?"作为第二图":"用于当前实验")+"，每幅图片均保留来源页码。",1),a("div",_n,[(v(!0),x(E,null,q(b(De),o=>(v(),x("button",{key:o.id,class:V(["course-image-card",{selected:o.id===e.selected}]),onClick:u=>n("select",o.id),"aria-label":"选用"+o.name+"，"+o.reference,"aria-pressed":o.id===e.selected},[a("div",Nn,[a("img",{src:b(pe)(o),alt:o.name,loading:"lazy"},null,8,$n),o.id===e.selected?(v(),x("span",Ln,"✓")):N("",!0)]),a("div",Sn,[a("strong",null,f(o.name),1),a("span",null,f(o.reference),1),a("p",null,f(o.description),1)])],10,zn))),128))]),a("div",Gn,[C(b(ke),{bordered:!1,size:"small"},{default:k(()=>[w(f(b(De).length)+" 幅课件原图",1)]),_:1}),r[1]||(r[1]=a("span",null,"支持继续上传自己的 JPG / PNG",-1))])]),_:1},8,["show","title"]))}};function me(e,t){return!!e&&!!t&&e.width===t.width&&e.height===t.height}function xe(e,t,n){if(!e||!Number.isInteger(t)||!Number.isInteger(n)||t<0||n<0||t>=e.width||n>=e.height)return null;const i=(n*e.width+t)*4;return Array.from(e.data.slice(i,i+4))}function Fn(e,t,n,i){if(!t||!e.width||!e.height)return null;const r=Math.min(e.width/t.width,e.height/t.height),o=e.left+(e.width-t.width*r)/2,u=e.top+(e.height-t.height*r)/2,p=Math.floor((n-o)/r),d=Math.floor((i-u)/r);return xe(t,p,d)?{x:p,y:d}:null}function Ue(e,t){if(!me(e,t))return null;let n=0,i=0,r=0;const o=e.width*e.height;if(!o)return null;for(let p=0;p<o*4;p+=4){let d=!1;for(let s=0;s<3;s++){const c=t.data[p+s]-e.data[p+s];n+=Math.abs(c),i+=c*c,d||=c!==0}d&&r++}const u=i/(o*3);return{mae:n/(o*3),mse:u,psnr:u===0?1/0:10*Math.log10(255**2/u),changedPercent:r/o*100}}const En={class:"analysis-section","aria-labelledby":"analysis-title"},On={class:"analysis-layout"},jn={class:"pixel-readout","aria-label":"像素读数"},Hn={class:"pixel-coordinate"},Yn={class:"pixel-row"},Vn={class:"pixel-row"},Un={class:"pixel-row"},qn={key:0},Wn={class:"metrics-area"},Xn={key:0,class:"metric-grid"},Kn={key:1,class:"metrics-empty"},Zn={class:"metrics-note"},Jn={__name:"PixelAnalysis",props:{input:Object,output:Object,point:Object,ready:Boolean,stale:Boolean},setup(e){const t=e,n=z(()=>me(t.input,t.output)),i=z(()=>t.ready?Ue(t.input,t.output):null),r=z(()=>t.point&&(n.value||t.point.side==="input")?xe(t.input,t.point.x,t.point.y):null),o=z(()=>t.point&&t.ready&&(n.value||t.point.side==="output")?xe(t.output,t.point.x,t.point.y):null),u=z(()=>r.value&&o.value?o.value.map((d,s)=>d-r.value[s]):null),p=d=>({backgroundColor:`rgba(${d[0]},${d[1]},${d[2]},${d[3]/255})`});return(d,s)=>(v(),x("section",En,[s[9]||(s[9]=a("div",{class:"analysis-heading"},[a("div",null,[a("span",{class:"eyebrow"},"PIXEL INSPECTOR"),a("h2",{id:"analysis-title"},"观察像素与差异")]),a("p",null,"在图像上移动或点选，查看像素；聚焦画布后可用方向键移动。")],-1)),a("div",On,[a("div",jn,[a("div",Hn,[w(f(e.point?`坐标 (${e.point.x}, ${e.point.y})`:"尚未选取像素"),1),s[0]||(s[0]=a("span",null,"原点在左上角 · 从 0 开始",-1))]),a("div",Yn,[s[1]||(s[1]=a("span",null,"输入 RGBA",-1)),r.value?(v(),x("i",{key:0,class:"pixel-swatch",style:le(p(r.value))},null,4)):N("",!0),a("code",null,f(r.value?r.value.join(", "):"—"),1)]),a("div",Vn,[s[2]||(s[2]=a("span",null,"结果 RGBA",-1)),o.value?(v(),x("i",{key:0,class:"pixel-swatch",style:le(p(o.value))},null,4)):N("",!0),a("code",null,f(o.value?o.value.join(", "):"—"),1)]),a("div",Un,[s[3]||(s[3]=a("span",null,"结果 − 输入",-1)),a("code",null,f(u.value?u.value.map(c=>c>0?"+"+c:c).join(", "):"—"),1)]),n.value?N("",!0):(v(),x("p",qn,"输入与输出尺寸不同，只读取所选画布的像素。"))]),a("div",Wn,[i.value?(v(),x("div",Xn,[a("div",null,[s[4]||(s[4]=a("span",null,"平均绝对误差 MAE",-1)),a("strong",null,f(i.value.mae.toFixed(2)),1)]),a("div",null,[s[5]||(s[5]=a("span",null,"均方误差 MSE",-1)),a("strong",null,f(i.value.mse.toFixed(2)),1)]),a("div",null,[s[6]||(s[6]=a("span",null,"峰值信噪比 PSNR",-1)),a("strong",null,f(Number.isFinite(i.value.psnr)?i.value.psnr.toFixed(2)+" dB":"∞"),1)]),a("div",null,[s[8]||(s[8]=a("span",null,"RGB 变化像素",-1)),a("strong",null,[w(f(i.value.changedPercent.toFixed(2)),1),s[7]||(s[7]=a("small",null,"%",-1))])])])):(v(),x("p",Kn,f(e.ready?"输入与输出尺寸不同，不计算逐像素差异。":"运行实验后显示差异指标。"),1)),a("p",Zn,f(e.stale?"参数已变更；此处仍为上次运行结果。":"")+"指标按 8 位 RGB 计算，不含透明度；用于描述差异，不能单独评价处理效果。",1)])])]))}},Qn={key:0,class:"session-list"},ea=["src","alt"],na={class:"session-info"},aa={class:"session-actions"},ra={key:1,class:"session-empty"},ta={class:"gallery-bottom"},ia={__name:"SessionHistory",props:{show:Boolean,entries:Array,disabled:Boolean},emits:["update:show","restore","export","clear"],setup(e){const t=n=>new Date(n).toLocaleTimeString("zh-CN",{hour12:!1});return(n,i)=>(v(),G(b(Ye),{show:e.show,"onUpdate:show":i[1]||(i[1]=r=>n.$emit("update:show",r)),preset:"card",title:"本次实验记录",class:"session-history-modal",style:{width:"min(760px, calc(100vw - 32px))"},bordered:!1},{default:k(()=>[i[5]||(i[5]=a("p",{class:"gallery-description"},"自动保留最近 8 次成功运行，可恢复输入、第二图、参数和结果。记录仅保存在当前页面，刷新后清空；图像缓冲区合计最多 64 MB。",-1)),e.entries.length?(v(),x("div",Qn,[(v(!0),x(E,null,q(e.entries,r=>(v(),x("article",{key:r.id,class:"session-card"},[a("img",{src:r.thumbnail,alt:r.name+"运行结果"},null,8,ea),a("div",na,[a("strong",null,f(r.name),1),a("span",null,f(t(r.createdAt))+" · "+f(r.result.output.width)+" × "+f(r.result.output.height)+" · Python "+f(r.result.milliseconds)+" ms",1),a("p",null,f(r.source.name),1),a("p",null,f(r.parameterRows.map(o=>`${o.label}：${o.value}`).join(" · ")||"无可调参数"),1)]),a("div",aa,[C(b($),{size:"small",secondary:"",disabled:e.disabled,onClick:o=>n.$emit("restore",r)},{default:k(()=>[...i[2]||(i[2]=[w("恢复此记录",-1)])]),_:1},8,["disabled","onClick"]),C(b($),{size:"small",quaternary:"",onClick:o=>n.$emit("export",r)},{default:k(()=>[...i[3]||(i[3]=[w("导出报告",-1)])]),_:1},8,["onClick"])])]))),128))])):(v(),x("p",ra,"尚无记录。完成一次实验后，会在这里自动保存。")),a("div",ta,[a("span",null,f(e.entries.length)+" / 8 条记录 · 仅当前会话",1),e.entries.length?(v(),G(b($),{key:0,size:"small",quaternary:"",onClick:i[0]||(i[0]=r=>n.$emit("clear"))},{default:k(()=>[...i[4]||(i[4]=[w("清空记录",-1)])]),_:1})):N("",!0)])]),_:1},8,["show"]))}},sa={"aria-hidden":"true"},oa={__name:"ThemeToggle",setup(e){return(t,n)=>(v(),G(b($),{secondary:"",size:"small",class:"appearance-button",onClick:b(Cn),"aria-pressed":b(H),"aria-label":b(H)?"切换浅色模式":"切换深色模式"},{icon:k(()=>[a("span",sa,f(b(H)?"☀":"☾"),1)]),default:k(()=>[w(" "+f(b(H)?"浅色":"深色"),1)]),_:1},8,["onClick","aria-pressed","aria-label"]))}},qe={__name:"ImageUploader",props:{secondary:Boolean,name:String,disabled:Boolean},emits:["file"],setup(e,{emit:t}){const n=e,i=t;function r({file:o}){return!n.disabled&&o.file&&i("file",o.file),!1}return(o,u)=>(v(),G(b(yn),{class:V(["image-uploader",{"second-uploader":e.secondary}]),"default-upload":!1,"show-file-list":!1,"file-list":[],max:1,disabled:e.disabled,"on-before-upload":r,accept:"image/jpeg,image/png,.jpg,.jpeg,.png","input-props":{"aria-label":e.secondary?"上传第二幅图像":"上传本地图片"}},{default:k(()=>[C(b(vn),{class:V(e.secondary?"second-dropzone":"primary-dropzone")},{default:k(()=>[e.secondary?(v(),x(E,{key:0},[u[0]||(u[0]=a("span",{class:"upload-symbol","aria-hidden":"true"},"＋",-1)),u[1]||(u[1]=a("strong",null,"上传第二幅图像",-1)),a("small",null,f(e.name||"选择或拖入 JPG / PNG"),1)],64)):(v(),G(b($),{key:1,type:"primary",secondary:"",size:"small",disabled:e.disabled},{icon:k(()=>[...u[2]||(u[2]=[a("span",{"aria-hidden":"true"},"↥",-1)])]),default:k(()=>[u[3]||(u[3]=w("上传本地图片 ",-1))]),_:1},8,["disabled"]))]),_:1},8,["class"])]),_:1},8,["class","disabled","input-props"]))}},la={class:"parameter-panel"},da={class:"panel-heading"},ua={class:"fields"},pa=["for","id"],ca={key:0},ma={key:0,class:"empty-params"},fa={class:"run-row"},ga={__name:"ExperimentPanel",props:{experiment:Object,params:Object,busy:Boolean,loading:Boolean,secondName:String,secondSampleLabel:String},emits:["update","run","cancel","second","second-sample","second-gallery"],setup(e,{emit:t}){const n=t;function i(p,d){return["dx","dy"].includes(p.key)?d.mode==="translate":p.key==="expand"?["translate","rotate"].includes(d.mode):p.key==="angle"?d.mode==="rotate":["shearX","shearY"].includes(p.key)?d.mode==="shear":p.key==="cutoff"?["lowpass","highpass"].includes(d.view):p.key==="alpha"?d.operation==="blend":p.key==="keep"?d.view==="reconstruct":p.key==="threshold"&&d.view?["denoise","compress","reconstruct"].includes(d.view):p.key==="gain"&&d.view?d.view==="enhance":!0}function r(p,{value:d}){p.querySelector('[role="slider"]')?.setAttribute("aria-label",d)}const o={mounted:r,updated:r},u=p=>typeof p=="number"?Number(p.toFixed(4)):p;return(p,d)=>(v(),x("div",la,[a("div",da,[d[5]||(d[5]=a("span",{class:"eyebrow"},"实验参数",-1)),C(b(ke),{size:"small",bordered:!1},{default:k(()=>[w(f(e.experiment.tag),1)]),_:1})]),a("h2",null,f(e.experiment.name),1),d[11]||(d[11]=a("p",{class:"parameter-description"},"调整参数后，点击运行查看结果。",-1)),a("div",ua,[(v(!0),x(E,null,q(e.experiment.params,s=>(v(),x(E,{key:s.key},[i(s,e.params)?(v(),x("div",{key:0,class:V(["field",{"switch-field":s.type==="checkbox"}])},[a("label",{for:"param-"+s.key,id:"label-"+s.key},[w(f(s.label),1),s.type==="range"?(v(),x("output",ca,f(u(e.params[s.key])),1)):N("",!0)],8,pa),s.type==="select"?(v(),G(ue,{key:0,"control-id":"param-"+s.key,label:s.label,value:e.params[s.key],options:s.options,"onUpdate:value":c=>n("update",s.key,c)},null,8,["control-id","label","value","options","onUpdate:value"])):s.type==="range"?Ie((v(),G(b(bn),{key:1,min:s.min,max:s.max,step:s.step,value:e.params[s.key],"format-tooltip":u,"onUpdate:value":c=>n("update",s.key,c)},null,8,["min","max","step","value","onUpdate:value"])),[[o,s.label]]):s.type==="kernel"?(v(),G(b(Ve),{key:2,type:"textarea",rows:3,value:e.params[s.key],"input-props":{id:"param-"+s.key,"aria-label":s.label},"onUpdate:value":c=>n("update",s.key,c)},null,8,["value","input-props","onUpdate:value"])):(v(),G(b(wn),{key:3,id:"param-"+s.key,value:e.params[s.key],"aria-label":s.label,size:"small","onUpdate:value":c=>n("update",s.key,c)},null,8,["id","value","aria-label","onUpdate:value"]))],2)):N("",!0)],64))),128))]),e.experiment.params.length?N("",!0):(v(),x("p",ma,"这个实验无需设置参数。")),e.experiment.second||e.experiment.id==="wavelet"&&e.params.view==="fusion"?(v(),x(E,{key:1},[C(qe,{secondary:"",name:e.secondName,disabled:e.busy||e.loading,onFile:d[0]||(d[0]=s=>n("second",s))},null,8,["name","disabled"]),C(b($),{quaternary:"",size:"small",block:"",class:"secondary-gallery",disabled:e.busy||e.loading,onClick:d[1]||(d[1]=s=>n("second-gallery"))},{default:k(()=>[...d[6]||(d[6]=[w("从课件图片库选择第二图",-1)])]),_:1},8,["disabled"]),C(b($),{text:"",size:"small",type:"primary",class:"secondary-sample",disabled:e.busy||e.loading,onClick:d[2]||(d[2]=s=>n("second-sample"))},{default:k(()=>[w(f(e.secondSampleLabel),1)]),_:1},8,["disabled"])],64)):N("",!0),a("div",fa,[e.busy?(v(),G(b($),{key:0,block:"",size:"large",type:"primary",secondary:"",onClick:d[3]||(d[3]=s=>n("cancel"))},{icon:k(()=>[...d[7]||(d[7]=[a("span",{class:"spinner"},null,-1)])]),default:k(()=>[d[8]||(d[8]=w("停止处理 ",-1))]),_:1})):(v(),G(b($),{key:1,disabled:e.loading,block:"",size:"large",type:"primary",onClick:d[4]||(d[4]=s=>n("run"))},{icon:k(()=>[...d[9]||(d[9]=[a("span",{"aria-hidden":"true"},"▷",-1)])]),default:k(()=>[d[10]||(d[10]=w("运行实验 ",-1))]),_:1},8,["disabled"]))]),d[12]||(d[12]=a("p",{class:"privacy"},"图片仅在当前浏览器中处理",-1))]))}};function ce(e,t){!e||!t||(e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(t.data),t.width,t.height),0,0))}async function ha(e,t){const n=new Image;if(n.decoding="async",await new Promise((p,d)=>{n.onload=p,n.onerror=()=>d(new Error("图像无法解码，请选择有效的 JPG 或 PNG 文件。")),n.src=e}),!n.naturalWidth||n.naturalWidth*n.naturalHeight>64e6)throw new Error("图片尺寸过大，请使用不超过 6400 万像素的图像。");const i=Math.min(1,1600/Math.max(n.naturalWidth,n.naturalHeight)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(n.naturalWidth*i)),r.height=Math.max(1,Math.round(n.naturalHeight*i));const o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(n,0,0,r.width,r.height);const{data:u}=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,data:u,name:t,originalWidth:n.naturalWidth,originalHeight:n.naturalHeight}}async function We(e){if(!e)return null;if(!/\.(jpe?g|png)$/i.test(e.name))throw new Error("请选择 JPG、JPEG 或 PNG 图片。");if(e.size>25*1024*1024)throw new Error("图片文件超过 25 MB，请压缩后重试。");const t=new Uint8Array(await e.slice(0,8).arrayBuffer());if(!(t[0]===255&&t[1]===216||t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71))throw new Error("文件内容与图片格式不符，请选择有效的 JPG 或 PNG。");const n=await new Promise((i,r)=>{const o=new FileReader;o.onload=()=>i(o.result),o.onerror=()=>r(new Error("无法读取本地图片，请重新选择。")),o.readAsDataURL(e)});return ha(n,e.name)}async function ye(e="flower"){const t=we[e];if(!t)throw new Error("未找到这幅课件图片，请重新选择。");const n=await fetch(pe(t));if(!n.ok)throw new Error("课件图片加载失败，请刷新重试。");const i=t.file.split(".").at(-1),r=await n.blob();return{...await We(new File([r],`${t.name}.${i}`,{type:i==="png"?"image/png":"image/jpeg"})),sampleId:t.id,reference:t.reference}}function va(e,t){const n=document.createElement("canvas");ce(n,e),n.toBlob(i=>{if(!i)return;const r=document.createElement("a"),o=URL.createObjectURL(i);r.href=o,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)},"image/png")}function ie(e,t){const n=document.createElement("canvas");if(ce(n,e),t&&Math.max(e.width,e.height)>t){const i=document.createElement("canvas"),r=t/Math.max(e.width,e.height);return i.width=Math.max(1,Math.round(e.width*r)),i.height=Math.max(1,Math.round(e.height*r)),i.getContext("2d").drawImage(n,0,0,i.width,i.height),i.toDataURL("image/png")}return n.toDataURL("image/png")}const ya={key:0,class:"compare-grid overlay-compare"},ba={class:"canvas-stage slider-stage"},wa={class:"comparison-layer"},xa={key:0,class:"processing-overlay"},Ia={class:"image-foot slider-control"},ka={key:1,class:"compare-grid"},Aa={class:"canvas-stage"},Ca={key:0,class:"processing-overlay"},Ba={class:"image-foot"},Ta={__name:"ImageCompare",props:{input:Object,output:Object,busy:Boolean,stale:Boolean,mode:String},emits:["inspect"],setup(e,{emit:t}){const n=e,i=t,r=_(),o=_(),u=_(50),p=_(null),d=_(!1),s=z(()=>n.mode==="slider"&&me(n.input,n.output));function c(){ce(r.value,n.input),ce(o.value,n.output)}He(c),de(()=>[n.input,n.output],()=>{c(),p.value=null,i("inspect",null)},{flush:"post"}),de(s,c,{flush:"post"});function y(T,g){const I=g==="input"?n.input:n.output,F=Fn(T.currentTarget.getBoundingClientRect(),I,T.clientX,T.clientY);F&&(p.value={...F,side:g},i("inspect",p.value))}function A(T,g){const I=g==="input"?n.input:n.output;if(!I||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"].includes(T.key))return;T.preventDefault();const F=p.value||{x:Math.floor(I.width/2),y:Math.floor(I.height/2)},re=T.key==="ArrowLeft"?-1:T.key==="ArrowRight"?1:0,W=T.key==="ArrowUp"?-1:T.key==="ArrowDown"?1:0;p.value={x:Math.max(0,Math.min(I.width-1,F.x+re)),y:Math.max(0,Math.min(I.height-1,F.y+W)),side:g},i("inspect",p.value)}function B(T){if(!d.value)return;const g=T.currentTarget.parentElement.getBoundingClientRect();u.value=Math.round(Math.max(0,Math.min(100,(T.clientX-g.left)/g.width*100)))}function M(T){d.value=!0,T.currentTarget.setPointerCapture(T.pointerId),B(T)}return(T,g)=>s.value?(v(),x("div",ya,[a("figure",null,[a("figcaption",null,[g[16]||(g[16]=a("span",null,"前后滑动对比",-1)),a("small",null,f(e.stale?"参数已变更 · 待运行":`${e.input.width} × ${e.input.height}`),1)]),a("div",ba,[a("div",wa,[a("canvas",{ref_key:"before",ref:r,tabindex:"0","aria-label":"处理前图像",onPointermove:g[0]||(g[0]=I=>y(I,"input")),onClick:g[1]||(g[1]=I=>y(I,"input")),onKeydown:g[2]||(g[2]=I=>A(I,"input"))},null,544)]),a("div",{class:"comparison-layer",style:le({clipPath:`inset(0 ${100-u.value}% 0 0)`})},[a("canvas",{ref_key:"after",ref:o,tabindex:"0","aria-label":"处理后图像",onPointermove:g[3]||(g[3]=I=>y(I,"output")),onClick:g[4]||(g[4]=I=>y(I,"output")),onKeydown:g[5]||(g[5]=I=>A(I,"output"))},null,544)],4),a("span",{class:"split-line",style:le({left:u.value+"%"}),"aria-hidden":"true",onPointerdown:cn(M,["prevent"]),onPointermove:B,onPointerup:g[6]||(g[6]=I=>d.value=!1),onPointercancel:g[7]||(g[7]=I=>d.value=!1),onLostpointercapture:g[8]||(g[8]=I=>d.value=!1)},[...g[17]||(g[17]=[a("b",null,"↔",-1)])],36),g[19]||(g[19]=a("span",{class:"slider-image-label output-label"},"处理后",-1)),g[20]||(g[20]=a("span",{class:"slider-image-label input-label"},"处理前",-1)),e.busy?(v(),x("div",xa,[...g[18]||(g[18]=[a("span",{class:"spinner"},null,-1),w("正在计算…",-1)])])):N("",!0)]),a("div",Ia,[g[21]||(g[21]=a("label",{for:"comparison-split"},"分界线",-1)),Ie(a("input",{id:"comparison-split",type:"range",min:"0",max:"100",step:"1","onUpdate:modelValue":g[9]||(g[9]=I=>u.value=I),"aria-label":"前后对比分界线"},null,512),[[mn,u.value,void 0,{number:!0}]]),a("output",null,f(u.value)+"%",1)])])])):(v(),x("div",ka,[a("figure",null,[a("figcaption",null,[g[22]||(g[22]=a("span",null,[a("i",{class:"dot original"}),w("处理前")],-1)),a("small",null,f(e.input?`${e.input.width} × ${e.input.height}`:"等待图片"),1)]),a("div",Aa,[a("canvas",{ref_key:"before",ref:r,tabindex:"0","aria-label":"处理前图像",onPointermove:g[10]||(g[10]=I=>y(I,"input")),onClick:g[11]||(g[11]=I=>y(I,"input")),onKeydown:g[12]||(g[12]=I=>A(I,"input"))},null,544)]),g[23]||(g[23]=a("div",{class:"image-foot"},[w("输入图像"),a("span",null,"ORIGINAL")],-1))]),a("figure",null,[a("figcaption",null,[g[24]||(g[24]=a("span",null,[a("i",{class:"dot"}),w("处理后")],-1)),a("small",null,f(e.stale?"参数已变更 · 待运行":e.output?`${e.output.width} × ${e.output.height}`:"尚未处理"),1)]),a("div",{class:V(["canvas-stage",{processing:e.busy}])},[a("canvas",{ref_key:"after",ref:o,tabindex:"0","aria-label":"处理后图像",onPointermove:g[13]||(g[13]=I=>y(I,"output")),onClick:g[14]||(g[14]=I=>y(I,"output")),onKeydown:g[15]||(g[15]=I=>A(I,"output"))},null,544),e.busy?(v(),x("div",Ca,[...g[25]||(g[25]=[a("span",{class:"spinner"},null,-1),w("正在计算… ",-1)])])):N("",!0)],2),a("div",Ba,[w(f(e.stale?"上次运行结果":"输出图像"),1),g[26]||(g[26]=a("span",null,"RESULT",-1))])])]))}},Ma=`import math  # @ 提供角度、三角函数和几何计算。\r
import time  # @ 统计算法计算时间。\r
import numpy as np  # @ 用 NumPy 数组表示图像并执行矩阵运算。\r
\r
\r
def clamp(values):  # @ 将任意数值转换为可显示的八位像素。\r
    return np.clip(np.rint(values), 0, 255).astype(np.uint8)  # @ 四舍五入后限制在 0～255，再转为无符号整数。\r
\r
\r
def gray_values(source):  # @ 从 RGBA 图像提取浮点亮度矩阵。\r
    return source[..., :3].astype(float) @ np.array([0.299, 0.587, 0.114])  # @ 最后一维的 RGB 与亮度权重做内积。\r
\r
\r
def gray_image(values, normalize=False):  # @ 将二维实数矩阵转换为不透明 RGBA 灰度图。\r
    values = np.asarray(values, dtype=float)  # @ 保留中间计算的浮点精度。\r
    if normalize:  # @ 频谱与梯度可选择按数值范围归一化。\r
        low, high = float(values.min()), float(values.max())  # @ 查找显示范围两端。\r
        values = (values - low) * 255 / (high - low if high > low else 1)  # @ 将最小值映射到黑，最大值映射到白，常数矩阵避免除零。\r
    gray = clamp(values)  # @ 统一量化为 8 位灰度。\r
    return np.stack([gray, gray, gray, np.full_like(gray, 255)], axis=-1)  # @ 堆叠三个相同颜色通道和不透明 Alpha 通道。\r
\r
\r
def grayscale(source, params):  # @ 使用加权法或平均法进行灰度化。\r
    rgb = source[..., :3].astype(float)  # @ 读取全部 RGB 像素并转为浮点数。\r
    values = rgb.mean(axis=-1) if params['method'] == 'average' else gray_values(source)  # @ 平均法等权组合三个通道，加权法采用人眼亮度权重。\r
    output = gray_image(values)  # @ 把灰度矩阵转换为可显示图像。\r
    output[..., 3] = source[..., 3]  # @ 保留原图的透明度。\r
    return output  # @ 返回 RGBA 灰度图像。\r
\r
\r
def threshold(source, params):  # @ 按设定阈值将图像分成黑白两类。\r
    values = gray_values(source)  # @ 彩色输入先转换为加权灰度。\r
    return gray_image(np.where(values > params['threshold'], 255, 0))  # @ 严格大于阈值的像素取白色，其余取黑色。\r
\r
\r
def quantize(source, params):  # @ 将图像亮度量化为指定的灰度级数。\r
    levels = 2 ** int(params['bits'])  # @ n 位量化具有 2 的 n 次方个灰度级。\r
    bins = np.floor(gray_values(source) * (levels - 1) / 255 + 0.5)  # @ 将灰度映射到最近的离散级别。\r
    return gray_image(bins * 255 / (levels - 1))  # @ 将离散级别重新映射到显示亮度。\r
\r
\r
def brightness(source, params):  # @ 对每个颜色分量执行线性点运算。\r
    output = source.copy()  # @ 复制输入，避免覆盖原图。\r
    output[..., :3] = clamp(source[..., :3].astype(float) * params['gain'] + params['offset'])  # @ 增益调节幅度，偏移移动亮度，越界结果饱和截断。\r
    return output  # @ 返回亮度调整后的图像，Alpha 保持原值。\r
\r
\r
def rgb_to_hsv(rgb):  # @ 将整幅图像的 RGB 转换为归一化 HSV。\r
    rgb = np.asarray(rgb, dtype=float) / 255  # @ 将颜色值归一化到 0～1。\r
    maximum, minimum = rgb.max(axis=-1), rgb.min(axis=-1)  # @ 求每个像素的最大和最小通道。\r
    delta = maximum - minimum  # @ 通道差值衡量彩度。\r
    safe = np.where(delta == 0, 1, delta)  # @ 为灰色像素避免色相计算除零。\r
    red = ((rgb[..., 1] - rgb[..., 2]) / safe) % 6  # @ 红色主导时根据绿蓝差值确定色相。\r
    green = (rgb[..., 2] - rgb[..., 0]) / safe + 2  # @ 绿色主导时将色相移动到第二扇区。\r
    blue = (rgb[..., 0] - rgb[..., 1]) / safe + 4  # @ 蓝色主导时将色相移动到第三扇区。\r
    hue = np.where(maximum == rgb[..., 0], red, np.where(maximum == rgb[..., 1], green, blue)) / 6  # @ 按主导通道选择色相并归一化。\r
    hue = np.where(delta == 0, 0, hue)  # @ 无彩色的色相约定为零。\r
    saturation = np.divide(delta, maximum, out=np.zeros_like(delta), where=maximum != 0)  # @ 饱和度为彩度除以明度，黑色取零。\r
    return np.stack([hue, saturation, maximum], axis=-1)  # @ 按 H、S、V 顺序组织结果。\r
\r
\r
def hsv_to_rgb(hsv):  # @ 将归一化 HSV 矩阵恢复为 RGB。\r
    hue, saturation, value = np.moveaxis(np.asarray(hsv, dtype=float), -1, 0)  # @ 分离三个颜色分量。\r
    sector = np.mod(hue, 1) * 6  # @ 将色相换算为六个扇区的位置。\r
    chroma = value * saturation  # @ 彩度由明度和饱和度决定。\r
    cross = chroma * (1 - np.abs(sector % 2 - 1))  # @ 根据扇区内部位置计算第二颜色分量。\r
    zero = np.zeros_like(chroma)  # @ 准备六扇区中的零颜色分量。\r
    choices = np.stack([np.stack(v, axis=-1) for v in [(chroma, cross, zero), (cross, chroma, zero), (zero, chroma, cross), (zero, cross, chroma), (cross, zero, chroma), (chroma, zero, cross)]])  # @ 构造六个扇区对应的 RGB 组合。\r
    indices = np.floor(sector).astype(int)  # @ 得到每个像素所在的扇区编号。\r
    selected = np.take_along_axis(choices, indices[None, ..., None], axis=0)[0]  # @ 为每个像素选择其扇区的颜色组合。\r
    return clamp((selected + (value - chroma)[..., None]) * 255)  # @ 加回明度偏移并恢复 8 位 RGB。\r
\r
\r
def color_space_values(rgb, space):  # @ 计算选定颜色空间中的真实分量。\r
    rgb = np.asarray(rgb, dtype=float)  # @ 颜色矩阵以浮点表示。\r
    red, green, blue = np.moveaxis(rgb, -1, 0)  # @ 分离红、绿、蓝通道。\r
    if space == 'HSV':  # @ HSV 分离色相、饱和度和明度。\r
        return rgb_to_hsv(rgb)  # @ 使用统一的 HSV 变换。\r
    if space == 'HSI':  # @ HSI 用平均强度与色相、饱和度表示颜色。\r
        total = red + green + blue  # @ 三通道和用于计算平均强度。\r
        denominator = np.sqrt((red - green) ** 2 + (red - blue) * (green - blue))  # @ 计算色相余弦公式的分母。\r
        cosine = np.divide(red - (green + blue) / 2, denominator, out=np.ones_like(red), where=denominator != 0)  # @ 灰色像素约定余弦值为 1，避免除零。\r
        angle = np.arccos(np.clip(cosine, -1, 1))  # @ 限制反余弦输入以消除浮点误差。\r
        hue = np.where(blue > green, 2 * np.pi - angle, angle) / (2 * np.pi)  # @ 根据蓝绿关系确定色环的正确半周。\r
        saturation = 1 - np.divide(3 * rgb.min(axis=-1), total, out=np.ones_like(total), where=total != 0)  # @ 黑色的饱和度取零。\r
        return np.stack([hue, saturation, total / 765], axis=-1)  # @ 返回归一化的色相、饱和度和平均强度。\r
    if space == 'CMY':  # @ CMY 为归一化 RGB 的补色。\r
        return 1 - rgb / 255  # @ 分别对红绿蓝取补。\r
    matrices = {'YCbCr': [[0.299, 0.587, 0.114], [-0.168736, -0.331264, 0.5], [0.5, -0.418688, -0.081312]], 'YIQ': [[0.299, 0.587, 0.114], [0.596, -0.274, -0.322], [0.211, -0.523, 0.312]], 'YUV': [[0.299, 0.587, 0.114], [-0.14713, -0.28886, 0.436], [0.615, -0.51499, -0.10001]]}  # @ 三种亮度与色度空间使用各自的线性变换矩阵。\r
    if space in matrices:  # @ 处理线性色彩模型。\r
        result = rgb @ np.asarray(matrices[space]).T / 255  # @ 对每个像素做颜色矩阵乘法。\r
        if space == 'YCbCr':  # @ 全范围 YCbCr 的色度分量包含中心偏置。\r
            result[..., 1:] += 128 / 255  # @ 将 Cb、Cr 的中性值设置为 128。\r
        return result  # @ 返回真实的亮度和色度分量。\r
    normalized = rgb / 255  # @ 进入需要线性光强的 XYZ/Lab 分支。\r
    linear = np.where(normalized <= 0.04045, normalized / 12.92, ((normalized + 0.055) / 1.055) ** 2.4)  # @ 解除 sRGB 的非线性编码。\r
    xyz = linear @ np.array([[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.072175], [0.0193339, 0.119192, 0.9503041]]).T  # @ 在 D65 白点约定下计算相对三刺激值。\r
    if space == 'XYZ':  # @ XYZ 分量可直接返回。\r
        return xyz  # @ 保留三刺激值的真实量纲。\r
    relative = xyz / np.array([0.95047, 1, 1.08883])  # @ 将 XYZ 除以 D65 参考白点。\r
    transformed = np.where(relative > 216 / 24389, np.cbrt(relative), relative * 841 / 108 + 4 / 29)  # @ 应用 CIELAB 分段函数。\r
    fx, fy, fz = np.moveaxis(transformed, -1, 0)  # @ 分离三个变换后的刺激值。\r
    return np.stack([116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)], axis=-1)  # @ 得到 L*、a*、b* 分量。\r
\r
\r
def color_space_inverse(values, space):  # @ 将指定空间的分量恢复到 RGB。\r
    values = np.asarray(values, dtype=float)  # @ 确保计算使用浮点矩阵。\r
    if space == 'HSV':  # @ HSV 使用六扇区恢复颜色。\r
        return hsv_to_rgb(values)  # @ 调用统一的 HSV 逆变换。\r
    if space == 'CMY':  # @ CMY 再次取补即可恢复颜色。\r
        return clamp((1 - values) * 255)  # @ 恢复 8 位 RGB。\r
    first, second, third = np.moveaxis(values, -1, 0)  # @ 分离三个输入分量。\r
    if space == 'HSI':  # @ HSI 按三个主色扇区恢复颜色。\r
        sector = np.floor(np.mod(first, 1) * 3).astype(int)  # @ 色环分为三个各占 120° 的扇区。\r
        angle = np.mod(first, 1) * 2 * np.pi - sector * 2 * np.pi / 3  # @ 求当前扇区内的相对角度。\r
        low = third * (1 - second)  # @ 最小通道由强度和饱和度确定。\r
        high = third * (1 + second * np.cos(angle) / np.cos(np.pi / 3 - angle))  # @ 主导通道通过色相关系恢复。\r
        middle = 3 * third - low - high  # @ 三通道之和应等于三倍平均强度。\r
        rgb = np.stack([np.where(sector == 0, high, np.where(sector == 1, low, middle)), np.where(sector == 0, middle, np.where(sector == 1, high, low)), np.where(sector == 0, low, np.where(sector == 1, middle, high))], axis=-1)  # @ 按所在扇区排列红、绿、蓝分量。\r
        return clamp(rgb * 255)  # @ 转为可显示的 RGB。\r
    matrices = {'YCbCr': [[0.299, 0.587, 0.114], [-0.168736, -0.331264, 0.5], [0.5, -0.418688, -0.081312]], 'YIQ': [[0.299, 0.587, 0.114], [0.596, -0.274, -0.322], [0.211, -0.523, 0.312]], 'YUV': [[0.299, 0.587, 0.114], [-0.14713, -0.28886, 0.436], [0.615, -0.51499, -0.10001]]}  # @ 使用与正变换相同的矩阵作为求逆依据。\r
    if space in matrices:  # @ 对线性空间执行矩阵逆变换。\r
        centered = values - np.array([0, 128 / 255, 128 / 255]) if space == 'YCbCr' else values  # @ YCbCr 需先去掉色度偏置。\r
        return clamp(centered @ np.linalg.inv(matrices[space]).T * 255)  # @ 使用精确逆矩阵减少往返误差。\r
    xyz = values  # @ XYZ 输入已经是三刺激值。\r
    if space == 'Lab':  # @ Lab 需先恢复参考白点下的 XYZ。\r
        fy = (first + 16) / 116  # @ 由 L* 恢复亮度变换值。\r
        transformed = np.stack([fy + second / 500, fy, fy - third / 200], axis=-1)  # @ 根据 a*、b* 恢复另外两个变换分量。\r
        xyz = np.where(transformed > 6 / 29, transformed ** 3, (transformed - 4 / 29) * 108 / 841) * [0.95047, 1, 1.08883]  # @ 应用分段逆函数并乘回 D65 白点。\r
    linear = xyz @ np.array([[3.2404542, -1.5371385, -0.4985314], [-0.969266, 1.8760108, 0.041556], [0.0556434, -0.2040259, 1.0572252]]).T  # @ 将三刺激值恢复为线性 RGB。\r
    encoded = np.where(linear <= 0.0031308, 12.92 * linear, 1.055 * np.maximum(linear, 0) ** (1 / 2.4) - 0.055)  # @ 恢复 sRGB 编码，负值分支不执行分数次幂。\r
    return clamp(encoded * 255)  # @ 限制显示色域并转换为八位颜色。\r
\r
\r
def color_space(source, params):  # @ 显示颜色空间分量或执行往返恢复。\r
    values = color_space_values(source[..., :3], params['space'])  # @ 从输入 RGB 计算目标空间坐标。\r
    channel = int(params['channel'])  # @ -1 表示往返重建，0～2 表示单独分量。\r
    if channel == -1:  # @ 重建需使用真实颜色空间数值。\r
        output = source.copy()  # @ 复制原始尺寸及 Alpha。\r
        output[..., :3] = color_space_inverse(values, params['space'])  # @ 将目标空间坐标逆变换为 RGB。\r
        return output  # @ 返回颜色往返结果。\r
    ranges = {'Lab': [(0, 100), (-128, 127), (-128, 127)], 'XYZ': [(0, 0.95047), (0, 1), (0, 1.08883)], 'YIQ': [(0, 1), (-0.596, 0.596), (-0.523, 0.523)], 'YUV': [(0, 1), (-0.436, 0.436), (-0.615, 0.615)]}  # @ 为不同量纲的分量设置显示范围。\r
    low, high = ranges.get(params['space'], [(0, 1)] * 3)[channel]  # @ HSV 等归一化空间使用 0～1。\r
    output = gray_image((values[..., channel] - low) / (high - low) * 255)  # @ 将目标分量映射到灰度显示。\r
    output[..., 3] = source[..., 3]  # @ 继承输入透明度。\r
    return output  # @ 返回颜色分量图。\r
\r
\r
def channel_view(source, params):  # @ 查看单个 RGB 通道或交换红蓝通道。\r
    output = source.copy()  # @ 创建不覆盖输入的结果。\r
    if params['channel'] == 'swap':  # @ 通道交换改变颜色组合。\r
        output[..., :3] = source[..., [2, 1, 0]]  # @ 把红蓝通道的位置互换。\r
    else:  # @ 单通道以灰度显示其强度。\r
        output[..., :3] = source[..., int(params['channel']), None]  # @ 将选定通道广播到三个颜色通道。\r
    return output  # @ 返回通道图或交换结果。\r
\r
\r
def recolor(source, params):  # @ 在 HSV 空间局部替换指定颜色。\r
    hsv = rgb_to_hsv(source[..., :3])  # @ 将图像转为便于按色相筛选的空间。\r
    distance = np.abs(hsv[..., 0] - params['hue'] / 360)  # @ 求像素与目标色相的直接距离。\r
    distance = np.minimum(distance, 1 - distance)  # @ 色相是圆周量，使用跨越零点的最短距离。\r
    mask = (distance <= params['tolerance'] / 360) & (hsv[..., 1] > 0.15)  # @ 筛选色相范围内且有足够饱和度的像素。\r
    hsv[..., 0][mask] = params['targetHue'] / 360  # @ 只修改色相，保留明度和饱和度。\r
    output = source.copy()  # @ 保留原尺寸及 Alpha 通道。\r
    output[..., :3] = hsv_to_rgb(hsv)  # @ 将修改后的 HSV 转回 RGB。\r
    return output  # @ 返回局部换色图像。\r
\r
\r
def pseudocolor(source, params):  # @ 通过分段查表或连续编码将灰度变为伪彩色。\r
    values = gray_values(source) / 255  # @ 提取归一化亮度。\r
    if params['palette'] == 'density':  # @ 密度分割为每段灰度指定一种颜色。\r
        palette = np.array([[30, 32, 30], [93, 193, 195], [180, 108, 186], [67, 119, 98], [210, 170, 90], [215, 95, 75], [245, 210, 155], [255, 255, 255]])  # @ 定义八段颜色查找表。\r
        rgb = palette[np.minimum(7, np.floor(values * 8).astype(int))]  # @ 按灰度所在区间查表。\r
    elif params['palette'] == 'heat':  # @ 热色编码依次提高红绿蓝亮度。\r
        rgb = clamp((values[..., None] * 3 - np.arange(3)) * 255)  # @ 用三个错开的分段线性函数生成热色。\r
    else:  # @ 连续彩虹映射从蓝色过渡到绿色与红色。\r
        rgb = hsv_to_rgb(np.stack([(1 - values) * 2 / 3, np.ones_like(values), np.ones_like(values)], axis=-1))  # @ 灰度控制色相，饱和度与明度固定为 1。\r
    return np.concatenate([clamp(rgb), source[..., 3:4]], axis=-1)  # @ 组合伪彩色和原图 Alpha。\r
\r
\r
def boundary_indices(indices, length, mode='replicate'):  # @ 将图像外的坐标映射为指定的边界延拓。\r
    valid = (indices >= 0) & (indices < length)  # @ 记录哪些坐标位于原图范围内。\r
    if mode == 'reflect':  # @ 对称反射在边缘位置重复一次像素。\r
        wrapped = np.mod(indices, 2 * length)  # @ 将任意正负坐标归入反射周期。\r
        indices = np.where(wrapped < length, wrapped, 2 * length - wrapped - 1)  # @ 把后半周期折回图像。\r
    else:  # @ 复制与零填充先取得合法的访问坐标。\r
        indices = np.clip(indices, 0, length - 1)  # @ 复制策略将坐标截到最近边缘。\r
    return indices.astype(int), valid if mode == 'zero' else np.ones_like(valid)  # @ 零填充额外返回有效掩膜，其余策略全部有效。\r
\r
\r
def cubic_weight(distance):  # @ 计算参数 a=-0.5 的 Keys 三次插值核。\r
    distance = np.abs(distance)  # @ 三次核关于原点对称。\r
    return np.where(distance <= 1, 1.5 * distance ** 3 - 2.5 * distance ** 2 + 1, np.where(distance < 2, -0.5 * distance ** 3 + 2.5 * distance ** 2 - 4 * distance + 2, 0))  # @ 在两个支撑区间内使用不同多项式，范围外权重为零。\r
\r
\r
def sample(source, x, y, method='bilinear', boundary='replicate'):  # @ 在整组非整数坐标上采样四个图像通道。\r
    if method == 'nearest':  # @ 最近邻只访问最接近的整数位置。\r
        xx, vx = boundary_indices(np.floor(x + 0.5), source.shape[1], boundary)  # @ 对水平坐标取整并处理边界。\r
        yy, vy = boundary_indices(np.floor(y + 0.5), source.shape[0], boundary)  # @ 对垂直坐标取整并处理边界。\r
        return source[yy, xx].astype(float) * (vx & vy)[..., None]  # @ 一次读取所有 RGBA 值，零边界按掩膜置零。\r
    x0, y0 = np.floor(x).astype(int), np.floor(y).astype(int)  # @ 找到每个采样点左上方的整数坐标。\r
    dx, dy = x - x0, y - y0  # @ 计算水平、垂直方向的小数距离。\r
    output = np.zeros(np.broadcast_shapes(x.shape, y.shape) + (4,), dtype=float)  # @ 为所有采样点分配浮点 RGBA 结果。\r
    offsets = range(2) if method == 'bilinear' else range(-1, 3)  # @ 双线性访问 2×2 邻域，双三次访问 4×4 邻域。\r
    for j in offsets:  # @ 遍历采样点附近的行。\r
        for i in offsets:  # @ 遍历采样点附近的列。\r
            xx, vx = boundary_indices(x0 + i, source.shape[1], boundary)  # @ 处理水平方向边界。\r
            yy, vy = boundary_indices(y0 + j, source.shape[0], boundary)  # @ 处理垂直方向边界。\r
            weight = (dx if i else 1 - dx) * (dy if j else 1 - dy) if method == 'bilinear' else cubic_weight(i - dx) * cubic_weight(j - dy)  # @ 计算可分离的二维插值权重。\r
            output += source[yy, xx] * (weight * vx * vy)[..., None]  # @ 按权重累加所有颜色及 Alpha 分量。\r
    return output  # @ 返回尚未截断的插值结果。\r
\r
\r
def resize(source, params):  # @ 通过像素中心对齐和后向映射缩放图像。\r
    height, width = source.shape[:2]  # @ 读取输入尺寸。\r
    target_width = int(params.get('width') or max(1, math.floor(width * params['scaleX'] + 0.5)))  # @ 指定宽度优先，否则按水平倍率计算。\r
    target_height = int(params.get('height') or max(1, math.floor(height * params['scaleY'] + 0.5)))  # @ 指定高度优先，否则按垂直倍率计算。\r
    if target_width * target_height > 4000000 or max(target_width, target_height) > 4096:  # @ 分配数组前限制输出内存与单边长度。\r
        raise ValueError('输出过大，请减小缩放比例。')  # @ 给出可操作的尺寸错误提示。\r
    y, x = np.indices((target_height, target_width), dtype=float)  # @ 创建目标像素网格。\r
    sx, sy = (x + 0.5) * width / target_width - 0.5, (y + 0.5) * height / target_height - 0.5  # @ 将目标像素中心反算到输入坐标。\r
    return clamp(sample(source, sx, sy, params.get('interpolation', 'bilinear')))  # @ 按选定插值采样并量化结果。\r
\r
\r
def geometry(source, params):  # @ 统一实现平移、旋转、镜像、错切和转置。\r
    height, width = source.shape[:2]  # @ 读取图像高宽。\r
    mode, angle = params['mode'], np.deg2rad(params.get('angle', 0))  # @ 读取类型并把旋转角换为弧度。\r
    matrix = np.eye(2)  # @ 初始线性变换为单位矩阵。\r
    if mode == 'rotate':  # @ 图像 y 轴向下，视觉逆时针采用这一符号约定。\r
        matrix = np.array([[np.cos(angle), np.sin(angle)], [-np.sin(angle), np.cos(angle)]])  # @ 生成二维旋转矩阵。\r
    elif mode == 'shear':  # @ 错切把一个方向的位置加入另一个方向。\r
        matrix = np.array([[1, params['shearX']], [params['shearY'], 1]])  # @ 设置水平与垂直错切系数。\r
    elif mode in ('horizontal', 'vertical'):  # @ 镜像将指定坐标方向取反。\r
        matrix = np.diag([-1, 1] if mode == 'horizontal' else [1, -1])  # @ 水平镜像反转 x，垂直镜像反转 y。\r
    elif mode == 'transpose':  # @ 转置交换坐标轴。\r
        matrix = np.array([[0, 1], [1, 0]])  # @ 用交换矩阵实现 x 与 y 互换。\r
    if abs(np.linalg.det(matrix)) < 1e-6:  # @ 后向映射需要矩阵可逆。\r
        raise ValueError('错切矩阵不可逆，请调整参数。')  # @ 拒绝奇异变换。\r
    center = np.array([(width - 1) / 2, (height - 1) / 2])  # @ 以图像像素中心的中点作为变换中心。\r
    shift = center - matrix @ center  # @ 先平移到中心，再变换并移回。\r
    if mode == 'translate':  # @ 平移额外加入两个方向的位移。\r
        shift += [params['dx'], params['dy']]  # @ 将水平和垂直位移写入偏移。\r
    corners = np.array([[-0.5, -0.5], [width - 0.5, -0.5], [-0.5, height - 0.5], [width - 0.5, height - 0.5]]) @ matrix.T + shift  # @ 变换像素外边界四角以确定完整画布。\r
    origin, target = np.zeros(2), np.array([width, height])  # @ 默认保持原画布。\r
    if params.get('expand') and mode not in ('horizontal', 'vertical'):  # @ 选择扩展时包含全部变换后内容。\r
        origin = corners.min(axis=0) + 0.5  # @ 新图第一个像素中心对齐到边界内半像素。\r
        target = np.maximum(1, np.ceil(np.ptp(corners, axis=0) - 1e-9)).astype(int)  # @ 通过边界跨度计算新尺寸，并消除浮点误差。\r
        if mode == 'translate':  # @ 平移画布同时包含原位置和新位置。\r
            origin, target = np.minimum(0, [params['dx'], params['dy']]), np.array([width + abs(params['dx']), height + abs(params['dy'])], dtype=int)  # @ 防止自动居中抵消平移效果。\r
    if np.prod(target) > 4000000:  # @ 避免异常参数造成过大的画布。\r
        raise ValueError('变换后的画布超过 400 万像素，请减小参数。')  # @ 提示用户缩小变换范围。\r
    y, x = np.indices((int(target[1]), int(target[0])), dtype=float)  # @ 创建输出坐标网格。\r
    mapped = (np.stack([x, y], axis=-1) + origin - shift) @ np.linalg.inv(matrix).T  # @ 通过逆矩阵查找输入位置。\r
    sx, sy = mapped[..., 0], mapped[..., 1]  # @ 分离输入水平和垂直坐标。\r
    inside = (sx >= -0.500001) & (sy >= -0.500001) & (sx < width - 0.499999) & (sy < height - 0.499999)  # @ 判断采样点是否位于输入覆盖范围内。\r
    values = sample(source, sx, sy, params.get('interpolation', 'bilinear'))  # @ 对有效位置执行指定插值。\r
    return clamp(np.where(inside[..., None], values, 255))  # @ 图像外区域填不透明白色，内部保留采样结果。\r
\r
\r
def neighborhood(source, params):  # @ 实现相关、卷积、均值与中值邻域运算。\r
    size = int(params.get('size', 3))  # @ 读取奇数邻域尺寸。\r
    radius = size // 2  # @ 窗口中心到边界的距离。\r
    mode = {'replicate': 'edge', 'reflect': 'symmetric', 'zero': 'constant'}[params['boundary']]  # @ 将教学边界策略对应到 NumPy 填充模式。\r
    padded = np.pad(source[..., :3].astype(float), ((radius, radius), (radius, radius), (0, 0)), mode=mode)  # @ 仅对 RGB 的空间边界扩展，通道维不扩展。\r
    windows = np.lib.stride_tricks.sliding_window_view(padded, (size, size), axis=(0, 1))  # @ 获取每个像素的邻域视图，不复制整幅邻域数据。\r
    if params['operation'] == 'median':  # @ 中值是排序统计，不是线性卷积。\r
        values = np.median(windows, axis=(-2, -1))  # @ 对每个颜色通道独立取邻域中位数。\r
    else:  # @ 相关、卷积和均值均可写为模板加权和。\r
        kernel = np.asarray(params.get('kernel', np.ones(size * size) / (size * size))).reshape(size, size)  # @ 自定义模板优先，默认生成均值模板。\r
        if params['operation'] == 'convolution':  # @ 卷积相对相关需要翻转模板。\r
            kernel = kernel[::-1, ::-1]  # @ 同时反转行列，实现旋转 180°。\r
        values = np.einsum('hwcij,ij->hwc', windows, kernel) + params.get('bias', 0)  # @ 对邻域乘模板并累加，偏移可显示有符号响应。\r
    output = source.copy()  # @ 保留输入尺寸与透明度。\r
    output[..., :3] = clamp(values)  # @ 将运算结果写入三个颜色通道。\r
    return output  # @ 返回邻域处理图像。\r
\r
\r
def sobel(source, params):  # @ 用两个方向的 Sobel 模板计算亮度梯度。\r
    mode = {'replicate': 'edge', 'reflect': 'symmetric', 'zero': 'constant'}[params['boundary']]  # @ 选择与其他邻域运算相同的边界约定。\r
    padded = np.pad(gray_values(source), 1, mode=mode)  # @ 灰度图四周补一个像素。\r
    windows = np.lib.stride_tricks.sliding_window_view(padded, (3, 3))  # @ 构造每个位置的 3×3 邻域。\r
    horizontal = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])  # @ 水平方向 Sobel 差分模板。\r
    gx = np.einsum('hwij,ij->hw', windows, horizontal)  # @ 计算沿 x 方向的亮度变化。\r
    gy = np.einsum('hwij,ij->hw', windows, horizontal.T)  # @ 转置模板计算沿 y 方向的亮度变化。\r
    return gray_image(np.hypot(gx, gy), normalize=True)  # @ 两方向合成为梯度幅值，再归一化显示。\r
\r
\r
def histogram(source):  # @ 统计图像的 256 档灰度频数。\r
    values = clamp(gray_values(source))  # @ 将加权亮度四舍五入到灰度级。\r
    return np.bincount(values.ravel(), minlength=256)  # @ 展平矩阵后累计每个灰度级的像素数量。\r
\r
\r
def equalize(source, params=None):  # @ 通过累积分布函数均衡灰度直方图。\r
    bins = histogram(source)  # @ 统计原始灰度分布。\r
    cdf = np.cumsum(bins)  # @ 计算从暗到亮的累积频数。\r
    minimum, total = cdf[np.flatnonzero(bins)[0]], source.shape[0] * source.shape[1]  # @ 找到首个非空累积值与像素总数。\r
    if minimum == total:  # @ 常数图无法通过重分布增加对比度。\r
        return gray_image(gray_values(source))  # @ 保持常数图原有灰度。\r
    table = np.maximum(0, (cdf - minimum) * 255 / (total - minimum))  # @ 去掉最低累积偏置，得到 0～255 的映射表。\r
    return gray_image(table[clamp(gray_values(source))])  # @ 用灰度索引查表，生成均衡化结果。\r
\r
\r
def align_second(source, second):  # @ 把第二幅图像对齐到主图的像素网格。\r
    if second is None:  # @ 双图运算需要明确的第二输入。\r
        raise ValueError('请先上传第二幅图像。')  # @ 缺少输入时提示用户补充。\r
    return resize(second, {'width': source.shape[1], 'height': source.shape[0], 'interpolation': 'bilinear'})  # @ 使用双线性插值拉伸对齐，宽高比可能变化。\r
\r
\r
def arithmetic(source, params, second=None):  # @ 执行双图代数及八位按位逻辑运算。\r
    other = align_second(source, second)  # @ 先统一两幅图像的尺寸。\r
    first, last = source[..., :3].astype(float), other[..., :3].astype(float)  # @ 转为浮点，避免加减运算提前发生整数溢出。\r
    operation = params['operation']  # @ 读取选择的运算类型。\r
    if operation == 'add':  # @ 加法用于亮度叠加。\r
        values = first + last  # @ 先求和，输出时再饱和截断。\r
    elif operation == 'blend':  # @ 加权和用于图像融合。\r
        values = (1 - params['alpha']) * first + params['alpha'] * last  # @ alpha 控制第二幅图的贡献。\r
    elif operation == 'subtract':  # @ 普通差值区分变化方向。\r
        values = first - last  # @ 负值在输出时截断为零。\r
    elif operation == 'difference':  # @ 绝对差只保留变化幅度。\r
        values = np.abs(first - last)  # @ 对差值取绝对值。\r
    elif operation == 'multiply':  # @ 归一化乘法可作为灰度掩膜。\r
        values = first * last / 255  # @ 将第二幅图的颜色值视为 0～1 的权重。\r
    elif operation == 'divide':  # @ 归一化除法生成比率图。\r
        values = np.divide(first * 255, last, out=np.full_like(first, 255), where=last != 0)  # @ 零分母显式取最大灰度，避免无穷值。\r
    else:  # @ 逻辑分支按颜色分量的每个二进制位运算。\r
        functions = {'and': np.bitwise_and, 'or': np.bitwise_or, 'xor': np.bitwise_xor}  # @ 建立按位与、或、异或的分派表。\r
        values = functions[operation](source[..., :3], other[..., :3])  # @ 对两个 uint8 RGB 数组执行逐位逻辑操作。\r
    return np.concatenate([clamp(values), np.full(source.shape[:2] + (1,), 255, dtype=np.uint8)], axis=-1)  # @ 返回截断后的 RGB，并采用不透明输出。\r
\r
\r
def invert(source, params=None):  # @ 反转每个八位颜色分量。\r
    output = source.copy()  # @ 保留输入图像不变。\r
    output[..., :3] = 255 - source[..., :3]  # @ 八位按位非等价于用 255 减去原值。\r
    return output  # @ Alpha 不参与反色。\r
\r
\r
def noise_average(source, params):  # @ 模拟多个独立高斯噪声观测并求平均。\r
    random = np.random.default_rng(int(params['seed']))  # @ 固定种子使同参数实验可复现。\r
    accumulator = np.zeros(source.shape[:2] + (3,), dtype=float)  # @ 浮点累加避免中途截断带来偏差。\r
    for frame in range(int(params['frames'])):  # @ 生成设定数量的独立观测。\r
        accumulator += source[..., :3] + random.normal(0, params['sigma'], accumulator.shape)  # @ 每帧加入零均值、指定标准差的高斯噪声。\r
    output = source.copy()  # @ 保留原尺寸及透明度。\r
    output[..., :3] = clamp(accumulator / params['frames'])  # @ 平均后再量化，噪声标准差约缩小为原来的 1/√N。\r
    return output  # @ 返回多帧平均结果。\r
\r
\r
def sampling_convolution(source, params):  # @ 演示补零卷积上采样和卷积后抽取下采样。\r
    factor, up = int(params['factor']), params['direction'] == 'up'  # @ 读取整数倍率与采样方向。\r
    height, width = source.shape[:2]  # @ 读取原始网格尺寸。\r
    if up:  # @ 上采样先把原像素放到更稀疏的网格。\r
        if height * width * factor ** 2 > 4000000:  # @ 检查放大后的内存需求。\r
            raise ValueError('输出过大，请减小输入尺寸或采样因子。')  # @ 避免分配过大的补零数组。\r
        grid = np.zeros((height * factor, width * factor, 3), dtype=float)  # @ 创建补零后的 RGB 网格。\r
        weights = np.zeros(grid.shape[:2], dtype=float)  # @ 有效像素掩膜用于边缘归一化。\r
        grid[::factor, ::factor] = source[..., :3]  # @ 每隔 factor 个位置插入原图像素。\r
        weights[::factor, ::factor] = 1  # @ 标记原始像素在补零网格中的位置。\r
    else:  # @ 下采样先在原网格执行低通平滑。\r
        grid = source[..., :3].astype(float)  # @ 将原 RGB 网格作为卷积输入。\r
        weights = np.ones((height, width), dtype=float)  # @ 标记全部输入像素有效。\r
    radius = factor - 1  # @ 三角核在两个方向的支撑半径。\r
    kernel = factor - np.abs(np.arange(-radius, radius + 1))  # @ 一维三角核可分离地实现二维低通或重建。\r
    for axis in (0, 1):  # @ 先沿垂直方向再沿水平方向卷积。\r
        pads = [(0, 0)] * grid.ndim; pads[axis] = (radius, radius)  # @ 设置 RGB 网格当前方向的零填充。\r
        weight_pads = [(0, 0)] * weights.ndim; weight_pads[axis] = (radius, radius)  # @ 为有效掩膜采用相同填充范围。\r
        windows = np.lib.stride_tricks.sliding_window_view(np.pad(grid, pads), len(kernel), axis=axis)  # @ 提取一维卷积窗口。\r
        grid = np.tensordot(windows, kernel, axes=([-1], [0]))  # @ 对 RGB 窗口乘三角权重并累加。\r
        windows = np.lib.stride_tricks.sliding_window_view(np.pad(weights, weight_pads), len(kernel), axis=axis)  # @ 提取有效权重的相同窗口。\r
        weights = np.tensordot(windows, kernel, axes=([-1], [0]))  # @ 统计实际参与卷积的权重总和。\r
    values = grid / np.maximum(weights[..., None], 1)  # @ 归一化有效权重，保持常数图亮度。\r
    if not up:  # @ 平滑后的下采样按整数间隔抽取。\r
        values = values[::factor, ::factor]  # @ 每个方向保留每 factor 个位置中的一个。\r
    return np.concatenate([clamp(values), np.full(values.shape[:2] + (1,), 255, dtype=np.uint8)], axis=-1)  # @ 组合 RGB 与不透明 Alpha。\r
\r
\r
def composite(source, params, second=None):  # @ 综合随机几何变换、通道交换与透明度叠加。\r
    if second is None:  # @ 合成必须提供前景图像。\r
        raise ValueError('请上传前景图，建议使用有透明背景的 PNG。')  # @ 缺少前景时停止处理。\r
    random, output = np.random.default_rng(int(params['seed'])), source.copy()  # @ 采用固定种子生成可复现的随机布局。\r
    for item in range(int(params['count'])):  # @ 生成指定数量的前景副本。\r
        scale = (0.08 + random.random() * 0.15) * min(source.shape[:2]) / max(second.shape[:2])  # @ 按背景尺寸随机确定前景比例。\r
        small = resize(second, {'scaleX': scale, 'scaleY': scale, 'interpolation': 'bilinear'})  # @ 缩小前景以控制计算量。\r
        sprite = geometry(small, {'mode': 'rotate', 'angle': random.random() * 360, 'expand': True, 'interpolation': 'bilinear'})  # @ 随机旋转并扩展画布保留完整图像。\r
        y = int(random.random() * max(1, source.shape[0] - sprite.shape[0]))  # @ 随机选择前景的垂直位置。\r
        x = int(random.random() * max(1, source.shape[1] - sprite.shape[1]))  # @ 随机选择前景的水平位置。\r
        sprite = sprite[:source.shape[0] - y, :source.shape[1] - x].copy()  # @ 当背景过小时裁去超出的前景。\r
        if random.random() > 0.5:  # @ 随机执行课件中的通道交换。\r
            sprite[..., :3] = sprite[..., [2, 1, 0]]  # @ 交换红蓝通道，保留绿色。\r
        alpha = sprite[..., 3:4].astype(float) / 255  # @ 将前景透明度转为混合权重。\r
        if params.get('removeWhite'):  # @ 可选移除旋转画布及前景的近白色背景。\r
            alpha[np.all(sprite[..., :3] > 245, axis=-1)] = 0  # @ 近白色像素视为透明。\r
        region = output[y:y + sprite.shape[0], x:x + sprite.shape[1]]  # @ 取得对应背景区域的数组视图。\r
        beta = region[..., 3:4].astype(float) / 255  # @ 读取背景透明度。\r
        combined = alpha + beta * (1 - alpha)  # @ 计算 source-over 合成的总透明度。\r
        premultiplied = sprite[..., :3] * alpha + region[..., :3] * beta * (1 - alpha)  # @ 在预乘透明度空间混合颜色。\r
        region[..., :3] = clamp(np.divide(premultiplied, combined, out=np.zeros_like(premultiplied), where=combined != 0))  # @ 除回总透明度，得到直通道 RGB。\r
        region[..., 3:4] = clamp(combined * 255)  # @ 写入合成后的 Alpha。\r
    return output  # @ 返回多图合成结果。\r
\r
\r
def fourier(source, params):  # @ 执行二维 DFT、频谱显示与理想频域滤波。\r
    values = gray_values(source)  # @ 将彩色输入转换为亮度矩阵。\r
    coefficients = np.fft.fft2(values)  # @ 使用行列可分离的快速算法计算二维 DFT。\r
    if params['view'] == 'spectrum':  # @ 幅度谱需要中心搬移和动态范围压缩。\r
        return gray_image(np.log1p(np.abs(np.fft.fftshift(coefficients))), normalize=True)  # @ 直流移到中心，取 log(1+幅值) 后归一化。\r
    if params['view'] == 'phase':  # @ 相位谱采用固定角度范围显示。\r
        return gray_image((np.angle(np.fft.fftshift(coefficients)) + np.pi) / (2 * np.pi) * 255)  # @ 将 −π～π 的相位映射到 0～255。\r
    if params['view'] in ('lowpass', 'highpass'):  # @ 滤波通过保留或舍弃指定频率系数实现。\r
        height, width = values.shape  # @ 读取频率网格尺寸。\r
        fy, fx = np.fft.fftfreq(height) * height, np.fft.fftfreq(width) * width  # @ 构造以频率格点计量的周期频率坐标。\r
        mask = np.hypot(fy[:, None], fx[None, :]) <= params['cutoff']  # @ 欧氏半径不超过阈值的部分为低通通带。\r
        coefficients *= mask if params['view'] == 'lowpass' else ~mask  # @ 低通与高通采用互补掩膜。\r
    reconstructed = np.fft.ifft2(coefficients).real  # @ 对完整或滤波后的系数做逆变换并取实部。\r
    return gray_image(reconstructed, normalize=params['view'] == 'highpass')  # @ 高通有正负响应，归一化显示；完整重建保持原灰度尺度。\r
\r
\r
def dct_matrix(length):  # @ 构造正交归一化的 DCT-II 基矩阵。\r
    frequency, position = np.arange(length)[:, None], np.arange(length)[None, :]  # @ 行表示频率，列表示空间位置。\r
    basis = np.sqrt(2 / length) * np.cos(np.pi * (2 * position + 1) * frequency / (2 * length))  # @ 计算非直流基函数的归一化余弦值。\r
    basis[0] /= np.sqrt(2)  # @ 直流分量的归一化系数改为 √(1/N)。\r
    return basis  # @ 返回正交 DCT 基。\r
\r
\r
def cosine(source, params):  # @ 展示 DCT 系数或保留低频后重建。\r
    values = gray_values(source)  # @ 提取图像亮度。\r
    rows, columns = dct_matrix(values.shape[0]), dct_matrix(values.shape[1])  # @ 为高和宽分别生成正交基。\r
    coefficients = rows @ values @ columns.T  # @ 依次沿两个方向执行 DCT。\r
    if params['view'] == 'coefficients':  # @ 系数幅值差异较大，需要对数压缩。\r
        return gray_image(np.log1p(np.abs(coefficients)), normalize=True)  # @ 显示左上角低频能量集中现象。\r
    height, width = np.ceil(np.array(values.shape) * params['keep'] / 100).astype(int)  # @ 保留比例针对每个方向分别计算。\r
    coefficients[height:, :] = 0  # @ 去掉垂直方向较高频率。\r
    coefficients[:, width:] = 0  # @ 去掉水平方向较高频率。\r
    return gray_image(rows.T @ coefficients @ columns)  # @ 正交基的转置构成 IDCT，按原灰度尺度重建。\r
\r
\r
def pca(source, params):  # @ 以每行作为样本、每列作为特征执行 K-L/PCA。\r
    values = gray_values(source)  # @ 构造样本矩阵。\r
    mean = values.mean(axis=0)  # @ 沿样本维求每个特征的均值。\r
    centered = values - mean  # @ 中心化后再计算协方差。\r
    covariance = centered.T @ centered / max(1, values.shape[0] - 1)  # @ 用样本自由度归一化特征协方差矩阵。\r
    eigenvalues, eigenvectors = np.linalg.eigh(covariance)  # @ 对实对称矩阵进行稳定的特征分解。\r
    order = np.argsort(eigenvalues)[::-1]  # @ 按方差从大到小排列主成分。\r
    count = min(int(params['components']), values.shape[1])  # @ 保留数量不能超过特征维数。\r
    basis = eigenvectors[:, order[:count]]  # @ 选择最大特征值对应的单位特征向量。\r
    reconstructed = centered @ basis @ basis.T + mean  # @ 投影到低维后再投影回来，并加回均值。\r
    total = np.maximum(eigenvalues, 0).sum()  # @ 总方差忽略浮点负误差。\r
    contribution = 100 * np.maximum(eigenvalues[order[:count]], 0).sum() / total if total else 100  # @ 计算保留主成分的方差贡献率。\r
    return {'image': gray_image(reconstructed), 'note': f'保留 {count}/{values.shape[1]} 个主成分，方差贡献率 {contribution:.2f}%。每行是样本，每列是特征。'}  # @ 同时返回重建图和样本约定、贡献率。\r
\r
\r
def hadamard_1d(values):  # @ 对矩阵最后一维执行快速正交 Hadamard 变换。\r
    output = np.asarray(values, dtype=float).copy()  # @ 浮点副本避免原图被改动。\r
    length, step = output.shape[-1], 1  # @ 每一级蝶形跨度从 1 开始。\r
    while step < length:  # @ 每级合并的分组长度翻倍。\r
        blocks = output.reshape(*output.shape[:-1], -1, step * 2)  # @ 将最后一维划分为相邻蝶形组。\r
        first, second = blocks[..., :step].copy(), blocks[..., step:].copy()  # @ 暂存两半数据，防止原位写回覆盖输入。\r
        blocks[..., :step], blocks[..., step:] = first + second, first - second  # @ 蝶形核心只使用加法和减法。\r
        step *= 2  # @ 进入下一变换级。\r
    return output / np.sqrt(length)  # @ 正交归一化后相同变换可用于重建。\r
\r
\r
def hadamard_2d(values):  # @ 沿图像两个方向执行 Hadamard 变换。\r
    return hadamard_1d(hadamard_1d(values).T).T  # @ 先处理行，再转置处理列并转回。\r
\r
\r
def hadamard(source, params):  # @ 展示 Sylvester 自然顺序的系数或阈值重建。\r
    coefficients = hadamard_2d(gray_values(source))  # @ 将图像亮度变换为二维 Hadamard 系数。\r
    if params['view'] == 'coefficients':  # @ 幅值视图只用于观察系数分布。\r
        return gray_image(np.log1p(np.abs(coefficients)), normalize=True)  # @ 用对数压缩幅值后显示。\r
    keep = np.abs(coefficients) >= params['threshold']  # @ 按绝对幅值选择保留的系数。\r
    keep[0, 0] = True  # @ 始终保留直流亮度。\r
    return gray_image(hadamard_2d(coefficients * keep))  # @ 正交 Hadamard 自逆，再次变换即得到重建。\r
\r
\r
def haar_transform(values, levels, inverse=False):  # @ 实现多层正交 Haar 分解与逆变换。\r
    output = np.asarray(values, dtype=float).copy()  # @ 使用浮点副本保存系数。\r
    for step in range(int(levels)):  # @ 每一层只继续分解左上低频子区域。\r
        level = levels - 1 - step if inverse else step  # @ 逆变换按从小到大的顺序恢复。\r
        height, width = output.shape[0] >> level, output.shape[1] >> level  # @ 确定当前层的有效区域尺寸。\r
        region = output[:height, :width]  # @ 建立当前区域的可写视图。\r
        if not inverse:  # @ 正变换先沿行分解，再沿列分解。\r
            first, second = region[:, ::2].copy(), region[:, 1::2].copy()  # @ 取得水平方向相邻像素对。\r
            horizontal = np.concatenate([(first + second) / np.sqrt(2), (first - second) / np.sqrt(2)], axis=1)  # @ 左半区存和低频，右半区存差高频。\r
            first, second = horizontal[::2], horizontal[1::2]  # @ 取得垂直方向相邻的两行。\r
            region[:] = np.concatenate([(first + second) / np.sqrt(2), (first - second) / np.sqrt(2)], axis=0)  # @ 上下分解产生四个子带。\r
        else:  # @ 逆变换以相反顺序恢复列和行。\r
            low, high = region[:height // 2].copy(), region[height // 2:].copy()  # @ 分离垂直方向低频与高频。\r
            vertical = np.empty_like(region)  # @ 分配垂直重建的中间矩阵。\r
            vertical[::2], vertical[1::2] = (low + high) / np.sqrt(2), (low - high) / np.sqrt(2)  # @ 和差恢复原来相邻的两行。\r
            low, high = vertical[:, :width // 2], vertical[:, width // 2:]  # @ 分离水平方向低频与高频。\r
            region[:, ::2], region[:, 1::2] = (low + high) / np.sqrt(2), (low - high) / np.sqrt(2)  # @ 和差恢复原来相邻的两列。\r
    return output  # @ 返回小波系数或未量化重建值。\r
\r
\r
def wavelet(source, params, second=None):  # @ 通过 Haar 子带演示重建、降噪、边缘、增强、压缩和融合。\r
    levels, view = int(params['levels']), params['view']  # @ 读取分解层数和输出方式。\r
    coefficients = haar_transform(gray_values(source), levels)  # @ 执行正交多层分解。\r
    low_height, low_width = np.array(coefficients.shape) >> levels  # @ 最终低频近似位于左上角的小矩形。\r
    low = np.zeros_like(coefficients, dtype=bool)  # @ 构造最终低频区域掩膜。\r
    low[:low_height, :low_width] = True  # @ 标记最低频子带，其余位置为各层细节。\r
    if view == 'decomposition':  # @ 分解图需要区分原始亮度与有符号细节。\r
        return gray_image(np.where(low, coefficients / 2 ** levels, 128 + coefficients * 0.5))  # @ 低频按尺度还原，高频零点显示为中灰。\r
    if view == 'edges':  # @ 边缘对应高频局部变化。\r
        coefficients[low] = 0  # @ 去掉低频近似，只保留细节。\r
    elif view == 'denoise':  # @ 软阈值平滑收缩细节系数。\r
        coefficients[~low] = np.sign(coefficients[~low]) * np.maximum(0, np.abs(coefficients[~low]) - params['threshold'])  # @ 小于阈值的细节置零，其余幅值减去阈值。\r
    elif view == 'compress':  # @ 硬阈值压缩示意直接舍弃小细节系数。\r
        coefficients[(~low) & (np.abs(coefficients) < params['threshold'])] = 0  # @ 保持大系数不变，减少非零系数。\r
    elif view == 'enhance':  # @ 放大细节以增强局部对比度。\r
        coefficients[~low] *= params['gain']  # @ 低频不变，高频乘增强倍率。\r
    elif view == 'fusion':  # @ 在小波域合成两幅图像。\r
        other = haar_transform(gray_values(align_second(source, second)), levels)  # @ 第二幅图对齐后进行相同分解。\r
        coefficients = np.where(low, (coefficients + other) / 2, np.where(np.abs(coefficients) >= np.abs(other), coefficients, other))  # @ 低频平均，高频选择绝对值较大的系数。\r
    reconstructed = haar_transform(coefficients, levels, inverse=True)  # @ 对修改后的子带执行逆变换。\r
    return gray_image(np.abs(reconstructed) if view == 'edges' else reconstructed, normalize=view == 'edges')  # @ 边缘取幅值并归一化，其他输出按原亮度尺度显示。\r
\r
\r
def radon_projection(source, angles):  # @ 通过离散像素累加计算各方向的平行投影。\r
    values = gray_values(source)  # @ 投影对亮度矩阵进行积分近似。\r
    height, width = values.shape  # @ 读取原始尺寸。\r
    bins = math.ceil(math.hypot(width, height)) + 2  # @ 探测器范围覆盖对角线，留出线性分摊空间。\r
    sinogram = np.zeros((angles, bins), dtype=float)  # @ 行对应角度，列对应探测器位置。\r
    y, x = np.indices(values.shape, dtype=float)  # @ 创建图像坐标网格。\r
    x -= (width - 1) / 2; y -= (height - 1) / 2  # @ 将坐标原点移到图像中心。\r
    for index in range(angles):  # @ 在半周内均匀采样投影角度。\r
        angle = index * np.pi / angles  # @ 角度覆盖 0～180°，不重复末端。\r
        rho = x * np.cos(angle) + y * np.sin(angle) + (bins - 1) / 2  # @ 每个像素投影到探测器法向位置。\r
        left = np.floor(rho).astype(int)  # @ 确定探测器左邻点。\r
        fraction = rho - left  # @ 小数距离用于线性分摊。\r
        np.add.at(sinogram[index], left.ravel(), (values * (1 - fraction)).ravel())  # @ 把像素贡献加到左侧探测器位置。\r
        np.add.at(sinogram[index], (left + 1).ravel(), (values * fraction).ravel())  # @ 剩余贡献加到右侧位置。\r
    return sinogram  # @ 返回各角度构成的正弦图。\r
\r
\r
def filter_projections(sinogram):  # @ 在反投影之前应用带 Hann 窗的斜坡滤波器。\r
    length = 2 ** math.ceil(math.log2(sinogram.shape[1] * 2))  # @ 零填充到至少两倍探测器长度，减轻循环卷积影响。\r
    frequency = np.fft.rfftfreq(length)  # @ 获取实信号 FFT 的非负频率。\r
    ramp = 2 * frequency * (0.5 + 0.5 * np.cos(2 * np.pi * frequency))  # @ 斜坡强化高频，Hann 窗抑制高频噪声。\r
    spectrum = np.fft.rfft(sinogram, n=length, axis=1)  # @ 对每条投影沿探测器方向做 FFT。\r
    return np.fft.irfft(spectrum * ramp, n=length, axis=1)[:, :sinogram.shape[1]]  # @ 乘滤波器并逆变换，截取有效探测器范围。\r
\r
\r
def radon(source, params):  # @ 展示正弦图、普通反投影或滤波反投影。\r
    angles = int(params['angles'])  # @ 读取投影角度的采样数量。\r
    sinogram = radon_projection(source, angles)  # @ 从输入图像真实计算离散投影。\r
    if params['view'] == 'sinogram':  # @ 直接观察各方向投影。\r
        return gray_image(sinogram, normalize=True)  # @ 横轴为探测器位置，纵轴为角度。\r
    projections = filter_projections(sinogram) if params['view'] == 'filtered' else sinogram  # @ 区分滤波反投影和普通反投影。\r
    height, width = source.shape[:2]  # @ 重建图采用原工作尺寸。\r
    output = np.zeros((height, width), dtype=float)  # @ 为所有方向的反投影累加分配空间。\r
    y, x = np.indices((height, width), dtype=float)  # @ 创建重建像素位置。\r
    x -= (width - 1) / 2; y -= (height - 1) / 2  # @ 与正变换保持相同中心约定。\r
    for index in range(angles):  # @ 将每个方向的投影回填到图像中。\r
        angle = index * np.pi / angles  # @ 与正投影采用相同角度。\r
        rho = x * np.cos(angle) + y * np.sin(angle) + (sinogram.shape[1] - 1) / 2  # @ 求每个重建像素对应的探测器位置。\r
        output += np.interp(rho, np.arange(sinogram.shape[1]), projections[index], left=0, right=0)  # @ 线性插值投影值并累加到对应射线上的像素。\r
    return gray_image(output, normalize=True)  # @ 将教学重建归一化显示，有限角度与离散化会产生误差。\r
\r
\r
def unpack_image(frame):  # @ 将网页传入的扁平 RGBA 缓冲区变为 NumPy 图像。\r
    if not frame:  # @ Python None 与浏览器传入的空值均表示缺少第二图，交由双图实验检查。\r
        return None  # @ 保留缺失图像的明确状态。\r
    return np.frombuffer(frame['data'], dtype=np.uint8).reshape(int(frame['height']), int(frame['width']), 4).copy()  # @ 按高、宽、四通道解释字节，并复制到 Python 自有内存。\r
\r
\r
def pack_image(values):  # @ 将 NumPy 图像转为 Canvas 可接收的结构。\r
    values = np.ascontiguousarray(values, dtype=np.uint8)  # @ 确保 RGBA 数组连续存储。\r
    return {'width': values.shape[1], 'height': values.shape[0], 'data': values.tobytes()}  # @ 宽高配合 RGBA 字节返回给网页。\r
\r
\r
def run_course_example(working, second, lesson):  # @ 网页适配层：调用单独保存的课件转译函数，算法本体不混入 Canvas 通信。\r
    import course_examples as course  # @ 模块中的函数就是代码区展示的源文件。\r
    allowed = {'grayscale', 'binary', 'density_segmentation', 'lotus_recolor', 'point_brightness', 'translation', 'translation_expanded', 'mirror', 'rotation', 'scaling', 'shearing', 'transpose', 'addition', 'subtraction', 'multiplication', 'division', 'bitwise', 'ycbcr_palette', 'butterfly_composite', 'fourier', 'cosine', 'pca', 'hadamard', 'wavelet'}  # @ 固定允许的课件函数，拒绝任意程序文本。\r
    name = lesson['name']  # @ 从实验目录读取当前原例函数名。\r
    if name not in allowed:  # @ 防止越过明确注册的课程目录。\r
        raise ValueError('未找到课件示例。')  # @ 报告不可执行的示例。\r
    images = [working[:, :, :3].copy()]  # @ 课件处理 RGB，网页 RGBA 的透明度不混入颜色计算。\r
    if lesson['inputs'] == 2:  # @ 双图例子需要额外输入。\r
        if second is None:  # @ 明确检查缺少第二张图片的情况。\r
            raise ValueError('请先上传第二张图片。')  # @ 返回可读错误给网页。\r
        other = second if name == 'butterfly_composite' else align_second(working, second)  # @ 合成例保留前景独立尺寸，其余双图例对齐尺寸。\r
        images.append(other[:, :, :3].copy())  # @ 第二图也去除网页透明通道。\r
    result = getattr(course, name)(*images, *list(lesson['args']))  # @ 传入目录内的实际参数，直接执行可见 Python 函数。\r
    result = np.nan_to_num(result) * (255 if lesson['range'] == 'unit' else 1)  # @ 统一 MATLAB 浮点显示范围与八位图显示范围。\r
    if result.ndim == 2:  # @ 灰度或二值图转为三个相同颜色通道。\r
        result = np.repeat(result[:, :, None], 3, axis=2)  # @ 保持灰度数值不变。\r
    output = np.full((*result.shape[:2], 4), 255, dtype=np.uint8)  # @ 创建可供 Canvas 显示的不透明 RGBA 图。\r
    output[:, :, :3] = np.clip(np.floor(result + 0.5), 0, 255).astype(np.uint8)  # @ 与图像显示一致截断，不修改算法函数的原始数值。\r
    return output  # @ 只把显示适配后的像素传回网页。\r
\r
\r
def process_request(request):  # @ 运行实际 Python 实验，并返回输入、结果与统计信息。\r
    source, second = unpack_image(request['source']), unpack_image(request.get('second'))  # @ 解包两幅输入图像。\r
    params, function = dict(request['params']), request['function']  # @ 参数由网页验证，函数名来自固定实验目录。\r
    limit = int(request.get('limit') or 800)  # @ 普通实验最长边限制为 800 像素。\r
    ratio = min(1, limit / max(source.shape[:2]))  # @ 为大图计算等比工作倍率。\r
    height, width = [max(1, math.floor(value * ratio + 0.5)) for value in source.shape[:2]]  # @ 得到工作图高宽。\r
    if request.get('power'):  # @ FFT、Hadamard、Haar 使用 2 的幂次工作尺寸。\r
        height, width = [max(8, 2 ** math.floor(math.log2(value))) for value in (height, width)]  # @ 两个方向分别重采样到不大于目标的幂次。\r
    working = source if (height, width) == source.shape[:2] else resize(source, {'height': height, 'width': width, 'interpolation': 'bilinear'})  # @ Python 同时负责工作图准备，展示与运算使用同一图像。\r
    if function == 'wavelet':  # @ 小波层数不能超过短边允许的分解层数。\r
        params['levels'] = min(int(params['levels']), int(math.log2(min(height, width))))  # @ 限制低频子区尺寸至少为 1。\r
    allowed = {'grayscale', 'threshold', 'quantize', 'pseudocolor', 'channel_view', 'color_space', 'recolor', 'brightness', 'neighborhood', 'resize', 'geometry', 'arithmetic', 'invert', 'noise_average', 'sampling_convolution', 'composite', 'fourier', 'cosine', 'pca', 'radon', 'hadamard', 'wavelet', 'sobel', 'equalize'}  # @ 仅允许调用已经注册的实验函数。\r
    if function not in allowed:  # @ 防止任意字符串被当作 Python 程序运行。\r
        raise ValueError('未找到该实验。')  # @ 拒绝目录外函数。\r
    started = time.perf_counter()  # @ 单独统计算法时间，不含运行时首次加载。\r
    lesson = request.get('lesson')  # @ 课件原例由单独目录描述，未提供程序的选项仍明确作为补充实验。\r
    result = run_course_example(working, second, lesson) if lesson and lesson.get('name') else (globals()[function](working, params, second) if function in {'arithmetic', 'wavelet', 'composite'} else globals()[function](working, params))  # @ 优先实际执行当前代码区展示的课件转译函数。\r
    output = result['image'] if isinstance(result, dict) else result  # @ PCA 同时返回图像和方差说明。\r
    milliseconds = round((time.perf_counter() - started) * 1000)  # @ 把秒转换为毫秒。\r
    return {'input': pack_image(working), 'output': pack_image(output), 'note': result.get('note', '') if isinstance(result, dict) else '', 'milliseconds': milliseconds, 'changed': working.shape[:2] != source.shape[:2], 'engine': 'Python / NumPy'}  # @ 将实际 Python 运算结果传回界面。\r
`,Pa=`import numpy as np  # @ 对应 MATLAB 的数组、矩阵与逐元素运算。\r
\r
\r
def grayscale(Image, method='weighted'):  # @ 转译第 2 章第 80 页，保留 Image、r、g、b、Y、I 的原例命名。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 im2double(imread(...))；网页上传代替文件读取。\r
    r = Image[:, :, 0]  # @ 对应 Image(:,:,1)，Python 的红通道下标从 0 开始。\r
    g = Image[:, :, 1]  # @ 对应 Image(:,:,2)，读取绿通道。\r
    b = Image[:, :, 2]  # @ 对应 Image(:,:,3)，读取蓝通道。\r
    Y = 0.299 * r + 0.587 * g + 0.114 * b  # @ 原样保留课件中的加权灰度公式。\r
    I = (r + g + b) / 3  # @ 原样保留课件中的三通道平均公式。\r
    return Y if method == 'weighted' else I  # @ 网页选项决定展示课件中的 Y 或 I。\r
\r
\r
def binary(Image, thresh=100, mode='gray'):  # @ 转译第 2 章第 79 页的灰度阈值与红蓝联合阈值两个例子。\r
    if mode == 'gray':  # @ 对应课件 coins.png 的灰度图例子。\r
        gray = np.rint(0.299 * Image[:, :, 0] + 0.587 * Image[:, :, 1] + 0.114 * Image[:, :, 2])  # @ 上传彩色图时补充灰度读取；原灰度图三个分量相同，数值保持不变。\r
        BW1 = np.zeros(gray.shape)  # @ 对应 BW1=zeros(size(gray))，创建全黑的二值图。\r
        BW1[gray > thresh] = 1  # @ 对应 BW1(gray>thresh)=1，严格使用大于号。\r
        return BW1  # @ 返回课件第一个例子的黑白结果。\r
    RGB = Image  # @ 对应课件读取 rose.jpg 得到的 RGB 图像。\r
    N, M, color = RGB.shape  # @ 对应 [N,M,color]=size(RGB)。\r
    BW2 = np.zeros((N, M))  # @ 对应 BW2=zeros(N,M)。\r
    pos1 = RGB[:, :, 0] > thresh  # @ 对应 RGB(:,:,1)>thresh，判断红通道。\r
    pos2 = RGB[:, :, 2] > thresh  # @ 对应 RGB(:,:,3)>thresh，判断蓝通道。\r
    pos = pos1 & pos2  # @ 原样保留课件的逻辑与条件。\r
    BW2[pos] = 1  # @ 对应 BW2(pos)=1，满足两个条件的像素设为白。\r
    return BW2  # @ 返回课件第二个例子的二值图。\r
\r
\r
def density_segmentation(Image):  # @ 转译第 2 章第 82 页的索引图调色板映射。\r
    from PIL import Image as PILImage  # @ Pillow 用于取得相当于 MATLAB 索引图的像素索引。\r
    Indexed = PILImage.fromarray(Image).quantize(colors=256)  # @ 网站接收 RGB 图片，先补充生成索引图；量化算法与 MATLAB rgb2ind 不完全相同。\r
    Image1 = np.asarray(Indexed)  # @ 对应课件读取 cartoon.bmp 得到的索引矩阵 Image1。\r
    MAP2 = np.zeros((256, 3))  # @ 对应 MAP2=zeros(256,3)。\r
    MAP2[0:32, :] = np.array([30, 32, 30]) / 256  # @ 对应 MATLAB 1:32，保留原例的除数 256。\r
    MAP2[32:64, :] = np.array([93, 193, 195]) / 256  # @ 对应 MATLAB 33:64，切片右端不包含 64。\r
    MAP2[64:96, :] = np.array([180, 108, 186]) / 256  # @ 对应 MATLAB 65:96 的三个颜色分量。\r
    MAP2[96:128, :] = np.array([67, 119, 98]) / 256  # @ 对应 MATLAB 97:128。\r
    MAP2[128:160, :] = np.array([95, 137, 110]) / 256  # @ 对应 MATLAB 129:160，恢复课件原来的颜色值。\r
    MAP2[160:192, :] = np.array([81, 173, 255]) / 256  # @ 对应 MATLAB 161:192，恢复课件原来的颜色值。\r
    MAP2[192:256, :] = np.array([256, 256, 256]) / 256  # @ 对应 MATLAB 193:256；原例最后 64 个索引均映射为白色。\r
    result = MAP2[Image1]  # @ 对应 imshow(Image1,MAP2)，由每个索引查出 RGB 颜色。\r
    return result  # @ 返回归一化的伪彩色图，网页负责显示。\r
\r
\r
def lotus_recolor(Image, tolerance=0.02, target_hue=4 / 6):  # @ 转译第 2 章第 91 页的荷花换色程序。\r
    import cv2 as cv  # @ OpenCV 提供 RGB 与 HSV 的转换。\r
    hsv = cv.cvtColor(Image.astype(np.float32) / 255, cv.COLOR_RGB2HSV)  # @ 对应 hsv=rgb2hsv(Image)，浮点 OpenCV 的 H 范围为 0～360。\r
    hsv[:, :, 0] = hsv[:, :, 0] / 360  # @ 把 H 转为 MATLAB 使用的 0～1 范围，S、V 无需改动。\r
    h = hsv[:, :, 0].copy()  # @ 对应 h=hsv(:,:,1)，复制色相通道。\r
    h[h > 5 / 6 + tolerance] = target_hue  # @ 保留课件第一段色相判断，默认替换为 4/6。\r
    h[h < 1 / 6 - tolerance] = target_hue  # @ 保留课件第二段色相判断，不额外添加饱和度筛选。\r
    hsv[:, :, 0] = h  # @ 对应 hsv(:,:,1)=h，把修改后的色相放回。\r
    hsv[:, :, 0] = hsv[:, :, 0] * 360  # @ 逆变换前将 H 恢复为 OpenCV 的角度单位。\r
    result = cv.cvtColor(hsv, cv.COLOR_HSV2RGB)  # @ 对应 result=hsv2rgb(hsv)，S 和 V 保持原值。\r
    return result  # @ 网页的前后对比替代课件的 subplot 和 imshow。\r
\r
\r
def point_brightness(Image, gain=4):  # @ 转译第 3 章第 3 页的点运算示例。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 Image=im2double(imread('office.jpg'))。\r
    result = gain * Image  # @ 课件为 result=4*Image，默认 gain=4；右侧参数允许观察其他倍率。\r
    return result  # @ 数值不提前截断；与 MATLAB imshow 一样，显示时把超出 0～1 的值截断。\r
\r
\r
def translation(Image, deltax=20, deltay=20):  # @ 逐句转译第 3 章第 19–20 页的手写后向映射。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 im2double(imread('bird.jpg'))。\r
    h, w, c = Image.shape  # @ 对应 [h,w,c]=size(Image)。\r
    NewImage = np.ones((h, w, c))  # @ 对应 NewImage=ones(h,w,c)，空白区域为白色。\r
    for x in range(w):  # @ 对应 for x=1:w；Python 从 0 到 w-1。\r
        for y in range(h):  # @ 对应 for y=1:h；Python 从 0 到 h-1。\r
            oldx = x - deltax  # @ 对应 oldx=x-deltax，反查原图横坐标。\r
            oldy = y - deltay  # @ 对应 oldy=y-deltay，反查原图纵坐标。\r
            if 0 <= oldx < w and 0 <= oldy < h:  # @ 将 MATLAB 的 1 基边界判断等价改为 Python 的 0 基判断。\r
                NewImage[y, x, :] = Image[oldy, oldx, :]  # @ 对应 NewImage(y,x,:)=Image(oldy,oldx,:)；行下标始终是 y。\r
    return NewImage  # @ 对应课件的平移结果，画布尺寸保持不变。\r
\r
\r
def translation_expanded(Image, deltax=20, deltay=20):  # @ 转译第 3 章第 21–22 页的扩大画布平移。\r
    import cv2 as cv  # @ 用 warpAffine 对应 affine2d 与 imwarp。\r
    h, w, c = Image.shape  # @ 对应 [h,w,c]=size(Image)。\r
    newh = h + abs(deltay)  # @ 对应 newh=h+abs(deltay)。\r
    neww = w + abs(deltax)  # @ 对应 neww=w+abs(deltax)。\r
    T = np.array([[1, 0, deltax], [0, 1, deltay]], dtype=float)  # @ MATLAB 行向量矩阵的平移量位于末行，OpenCV 列向量矩阵位于末列。\r
    T[:, 2] -= np.minimum([deltax, deltay], 0)  # @ 对应课件调整 xLimitsOut、yLimitsOut 的负位移处理。\r
    NewImage = cv.warpAffine(Image, T, (neww, newh), flags=cv.INTER_LINEAR, borderValue=(255, 255, 255))  # @ 对应 imwarp(...,'FillValue',255,'OutputView',R)。\r
    return NewImage  # @ 返回同时容纳原位置与平移位置的扩展画布。\r
\r
\r
def mirror(Image, direction='horizontal'):  # @ 转译第 3 章第 24 页的镜像及四格拼接示例。\r
    HImage = np.fliplr(Image)  # @ 对应 HImage=fliplr(Image)，左右翻转。\r
    VImage = np.flipud(Image)  # @ 对应 VImage=flipud(Image)，上下翻转。\r
    CImage = np.flip(HImage, axis=0)  # @ 对应 CImage=flip(HImage,1)；MATLAB 第 1 维对应 NumPy axis=0。\r
    mosaic = np.vstack([np.hstack([Image, HImage]), np.hstack([VImage, CImage])])  # @ 对应 mosaic=[Image HImage;VImage CImage]。\r
    if direction == 'horizontal':  # @ 网页允许单独观察课件中的水平镜像。\r
        return HImage  # @ 返回 HImage。\r
    if direction == 'vertical':  # @ 网页允许单独观察垂直镜像。\r
        return VImage  # @ 返回 VImage。\r
    return CImage if direction == 'diagonal' else mosaic  # @ 双轴镜像与转置不同；mosaic 显示课件四格拼接。\r
\r
\r
def warp_expanded(Image, T, fill=0):  # @ Python 接口适配：OpenCV 需显式指定 MATLAB imwarp 自动计算的输出边界。\r
    import cv2 as cv  # @ 使用 OpenCV 执行二维仿射变换。\r
    h, w = Image.shape[:2]  # @ 读取原图尺寸。\r
    corners = np.array([[0, 0, 1], [w - 1, 0, 1], [0, h - 1, 1], [w - 1, h - 1, 1]])  # @ 用四角齐次坐标确定变换后的边界。\r
    points = corners @ T.T  # @ 计算仿射变换后的四角位置。\r
    low, high = points.min(axis=0), points.max(axis=0)  # @ 分别取得横纵方向的最小和最大坐标。\r
    size = np.maximum(1, np.ceil(high - low + 1 - 1e-8)).astype(int)  # @ 计算包含所有像素中心的宽高，抑制整数变换的浮点误差。\r
    T = T.copy()  # @ 避免修改调用方的变换矩阵。\r
    T[:, 2] -= low  # @ 将新的坐标原点平移到输出画布左上角。\r
    return cv.warpAffine(Image, T, tuple(map(int, size)), flags=cv.INTER_LINEAR, borderValue=(fill, fill, fill))  # @ 对应 imwarp 的双线性重采样与填充。\r
\r
\r
def rotation(Image, angle=15, crop=False):  # @ 转译第 3 章第 34 页的非剪切与剪切旋转两个结果。\r
    import cv2 as cv  # @ 使用 OpenCV 对应 MATLAB 的 imrotate。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应原例 im2double。\r
    h, w = Image.shape[:2]  # @ OpenCV 旋转接口需要明确图像中心和输出尺寸。\r
    T = cv.getRotationMatrix2D(((w - 1) / 2, (h - 1) / 2), angle, 1.0)  # @ 以图像中心生成逆时针旋转矩阵。\r
    if not crop:  # @ 对应 NewImage1=imrotate(Image,15,'bilinear')。\r
        NewImage1 = warp_expanded(Image, T, fill=0)  # @ 扩展画布并使用黑色背景，保留整个旋转图像。\r
        return NewImage1  # @ 返回课件第一个旋转结果。\r
    RImage = 1 - Image  # @ 原样保留课件“先反色”的步骤。\r
    NewImage2 = cv.warpAffine(RImage, T, (w, h), flags=cv.INTER_LINEAR, borderValue=(0, 0, 0))  # @ 对应 imrotate(RImage,15,'bilinear','crop')，保持原尺寸。\r
    NewImage2 = 1 - NewImage2  # @ 原样保留再次反色的步骤，使旋转空白处成为白色。\r
    return NewImage2  # @ 返回课件第二个旋转结果。\r
\r
\r
def scaling(Image, scale_x=0.6, scale_y=0.6, method='bilinear'):  # @ 转译第 3 章第 37 页的 imresize 示例。\r
    import cv2 as cv  # @ 使用 resize 对应 MATLAB imresize。\r
    methods = {'nearest': cv.INTER_NEAREST, 'bilinear': cv.INTER_LINEAR, 'bicubic': cv.INTER_CUBIC}  # @ 将课件的三种插值方式映射到 OpenCV 常量。\r
    newh = max(1, int(np.ceil(Image.shape[0] * scale_y)))  # @ 与 MATLAB imresize 一样，非整数输出高度向上取整。\r
    neww = max(1, int(np.ceil(Image.shape[1] * scale_x)))  # @ 输出宽度也向上取整，避免极小图片缩为零。\r
    NewImage1 = cv.resize(Image, (neww, newh), interpolation=methods[method])  # @ 默认 0.6 倍双线性；原例第二种 Scale=[2.8,1.6] 对应纵向 2.8、横向 1.6。\r
    return NewImage1  # @ 保留宽高倍率的独立控制，返回缩放结果。\r
\r
\r
def shearing(Image, dx=0.5, dy=0.2, direction='both'):  # @ 转译第 3 章第 40 页的三个 affine2d 矩阵。\r
    tform1 = np.array([[1, 0, 0], [dx, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留 MATLAB 水平错切的行向量矩阵。\r
    tform2 = np.array([[1, dy, 0], [0, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留 MATLAB 垂直错切矩阵。\r
    tform3 = np.array([[1, dy, 0], [dx, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留水平、垂直同时错切的矩阵。\r
    T = tform1 if direction == 'horizontal' else tform2 if direction == 'vertical' else tform3  # @ 网页选项选择课件中的 hImage、vImage 或 hvImage。\r
    if abs(np.linalg.det(T)) < 1e-6:  # @ 补充输入检查，奇异矩阵无法定义有效的二维重采样。\r
        raise ValueError('错切矩阵不可逆，请调整 dx 或 dy。')  # @ 提示用户使用可逆参数。\r
    return warp_expanded(Image, T.T[:2, :], fill=255)  # @ 转为 OpenCV 列向量矩阵；对应 imwarp(...,'FillValue',255)。\r
\r
\r
def transpose(Image):  # @ 逐句转译第 3 章第 42 页的按通道转置。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 Image=im2double(imread('dog.jpg'))。\r
    height, width, color = Image.shape  # @ 对应 [height,width,color]=size(Image)。\r
    result = np.zeros((width, height, color))  # @ 对应 result=zeros(width,height,color)，交换输出宽高。\r
    for i in range(color):  # @ 对应 for i=1:color，Python 通道编号从 0 开始。\r
        result[:, :, i] = Image[:, :, i].T  # @ 对应 result(:,:,i)=Image(:,:,i)'，图像实数矩阵直接使用 .T。\r
    return result  # @ 返回逐通道转置结果。\r
\r
\r
def addition(Back, Foreground, alpha=0.6, weighted=True):  # @ 转译第 3 章第 45 页的 imadd 和 imlincomb。\r
    import cv2 as cv  # @ OpenCV 的八位加法同样执行饱和截断。\r
    result1 = cv.add(Back, Foreground)  # @ 对应 result1=imadd(Back,Foreground)，相加超过 255 时保留 255。\r
    result2 = (1 - alpha) * Back.astype(float) + alpha * Foreground.astype(float)  # @ 对应 imlincomb(1-alpha,Back,alpha,Foreground)，默认 alpha=0.6。\r
    return result2 if weighted else result1  # @ 根据网页选项显示课件中的加权和或截断和。\r
\r
\r
def subtraction(Back, Foreground, absolute=True):  # @ 转译第 3 章第 50 页的两种减法。\r
    import cv2 as cv  # @ absdiff 对应 MATLAB 的 imabsdiff。\r
    result1 = cv.absdiff(Back, Foreground)  # @ 对应 result1=imabsdiff(Back,Foreground)。\r
    result2 = Foreground.astype(float) / 255 - Back.astype(float) / 255  # @ 保留原例“前景减背景”的顺序及 im2double，而不是背景减前景。\r
    return result1 if absolute else result2  # @ 浮点差值中的负数由显示层截为黑色，不改写计算结果。\r
\r
\r
def multiplication(Back, Foreground):  # @ 对应第 3 章第 53 页的逐元素乘法和 immultiply 函数说明。\r
    import cv2 as cv  # @ 使用与 MATLAB 八位整数类似的饱和运算。\r
    result = cv.multiply(Back, Foreground)  # @ 直接逐元素相乘；没有擅自增加除以 255 的归一化步骤。\r
    return result  # @ 0/1 掩膜可直接提取图像，普通八位乘法会饱和。\r
\r
\r
def division(Back, Foreground):  # @ 按第 3 章第 54 页的 imdivide 与黑色分母处理说明实现。\r
    result = np.full(Back.shape, 255.0)  # @ 按课件“黑色部分设为较大值”，预置零分母位置为 255。\r
    np.divide(Back.astype(float), Foreground.astype(float), out=result, where=Foreground != 0)  # @ 对应逐元素 ./，保留原始数值比率，不额外乘以 255。\r
    return result  # @ 由网页按八位结果显示比率图。\r
\r
\r
def bitwise(Image, Mask=None, operation='not'):  # @ 对应第 3 章第 55 页列出的八位按位函数。\r
    if operation == 'not':  # @ 对应 C=bitcmp(A)。\r
        return np.bitwise_not(Image)  # @ 对每一位取反，不对图像做逻辑真假求非。\r
    if operation == 'and':  # @ 对应 C=bitand(A,B)。\r
        return np.bitwise_and(Image, Mask)  # @ 对应位均为 1 时结果为 1。\r
    if operation == 'or':  # @ 对应 C=bitor(A,B)。\r
        return np.bitwise_or(Image, Mask)  # @ 对应位至少一个为 1 时结果为 1。\r
    return np.bitwise_xor(Image, Mask)  # @ 对应 C=bitxor(A,B)，对应位不相同时为 1。\r
\r
\r
def ycbcr_palette(RGB, component=0, gain=1.5):  # @ 转译第 2 章第 88 页的“索引图—调色板—YCbCr”处理流程。\r
    from PIL import Image as PILImage  # @ Pillow 的量化图提供索引矩阵和调色板。\r
    Indexed = PILImage.fromarray(RGB).quantize(colors=256)  # @ 对应 rgb2ind(RGB,256)；不同库的调色板量化可能不同。\r
    Image = np.asarray(Indexed)  # @ 对应原例 Image，保存各像素的调色板索引。\r
    MAP = np.asarray(Indexed.getpalette(), dtype=float).reshape(-1, 3)[:256] / 255  # @ 对应原例 MAP，将调色板 RGB 归一化。\r
    T = np.array([[65.481, 128.553, 24.966], [-37.797, -74.203, 112], [112, -93.786, -18.214]]) / 255  # @ MATLAB rgb2ycbcr 对浮点 RGB 使用视频范围转换，而非 OpenCV 的全范围 YCrCb。\r
    offset = np.array([16, 128, 128]) / 255  # @ Y、Cb、Cr 的视频范围偏置。\r
    YCbCrMAP1 = MAP @ T.T + offset  # @ 对应 YCbCrMAP1=rgb2ycbcr(MAP)。\r
    YCbCrMAP2 = YCbCrMAP1.copy()  # @ 对应 YCbCrMAP2=YCbCrMAP1，Python 需复制以免共享同一数组。\r
    YCbCrMAP3 = YCbCrMAP1.copy()  # @ 对应 YCbCrMAP3=YCbCrMAP1。\r
    YCbCrMAP1[:, 0] *= gain  # @ 对应原例第一分量乘 1.5，即提高 Y。\r
    YCbCrMAP2[:, 1] *= gain  # @ 对应原例第二分量乘 1.5，即修改 Cb。\r
    YCbCrMAP3[:, 2] *= gain  # @ 对应原例第三分量乘 1.5，即修改 Cr。\r
    MAP1 = (YCbCrMAP1 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP1=ycbcr2rgb(YCbCrMAP1)。\r
    MAP2 = (YCbCrMAP2 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP2=ycbcr2rgb(YCbCrMAP2)。\r
    MAP3 = (YCbCrMAP3 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP3=ycbcr2rgb(YCbCrMAP3)。\r
    return [MAP1, MAP2, MAP3][component][Image]  # @ 用原始索引重建选中的结果，网页替代 subplot 展示。\r
\r
\r
def butterfly_composite(Back, Image, population=20, num=3, seed=42, remove_black=True):  # @ 转译第 3 章第 63–68 页，保留每只蝴蝶连续进行 num 次随机变换的流程。\r
    import cv2 as cv  # @ OpenCV 分别对应 imresize、imrotate 与 imtransform。\r
    random = np.random.default_rng(seed)  # @ 网页补充固定种子便于复现；与 MATLAB 随机数序列不保证逐点相同。\r
    Back = Back.copy()  # @ 避免直接修改上传的背景原图。\r
    h, w, c = Back.shape  # @ 对应 [h,w,c]=size(Back)。\r
    for k in range(population):  # @ 对应 for k=1:population，默认生成 20 个前景。\r
        types = random.integers(1, 7, size=num)  # @ 对应 type=randi(6,1,num)，六类变换中独立抽取三次。\r
        NewImage = Image.copy()  # @ 对应 NewImage=Image，每个前景均从原图开始。\r
        for kind in types:  # @ 对应 for n=1:num 和 switch type(n)。\r
            if kind == 1:  # @ 对应 case 1 的随机缩放。\r
                scale = random.random()  # @ 对应 scale=rand()。\r
                neww = max(1, int(np.ceil(NewImage.shape[1] * scale)))  # @ 补充最小一像素保护，防止小图缩为零。\r
                newh = max(1, int(np.ceil(NewImage.shape[0] * scale)))  # @ 补充最小高度保护。\r
                NewImage = cv.resize(NewImage, (neww, newh), interpolation=cv.INTER_LINEAR)  # @ 对应 imresize(NewImage,scale,'bilinear')。\r
            elif kind == 2:  # @ 对应 case 2 的随机旋转。\r
                angle = round(random.random() * 100)  # @ 对应 angle=round(rand()*100)。\r
                center = ((NewImage.shape[1] - 1) / 2, (NewImage.shape[0] - 1) / 2)  # @ 为 OpenCV 显式设置图像中心。\r
                T = cv.getRotationMatrix2D(center, angle, 1)  # @ 生成与 imrotate 相同方向的旋转矩阵。\r
                NewImage = warp_expanded(NewImage, T, fill=0)  # @ 保留原例默认的黑色扩展背景。\r
            elif kind == 3:  # @ 对应 case 3 的两次错切。\r
                shear = random.random() / 2  # @ 对应 shear=rand()/2。\r
                tform1 = np.array([[1, 0, 0], [shear, 1, 0], [0, 0, 1]])  # @ 原样保留 MATLAB 第一错切矩阵。\r
                tform2 = np.array([[1, shear, 0], [0, 1, 0], [0, 0, 1]])  # @ 原样保留 MATLAB 第二错切矩阵。\r
                NewImage = warp_expanded(NewImage, tform1.T[:2], fill=0)  # @ 对应第一次 imtransform，注意行列向量约定转换。\r
                NewImage = warp_expanded(NewImage, tform2.T[:2], fill=0)  # @ 对应第二次 imtransform。\r
            elif kind == 4:  # @ 对应 case 4 的水平镜像。\r
                NewImage = np.flip(NewImage, axis=1)  # @ 对应 flipdim(NewImage,2)。\r
            elif kind == 5:  # @ 对应 case 5 的垂直镜像。\r
                NewImage = np.flip(NewImage, axis=0)  # @ 对应 flipdim(NewImage,1)。\r
            else:  # @ 对应 case 6，原例所谓“对角镜像”是连续左右、上下翻转。\r
                NewImage = np.flip(np.flip(NewImage, axis=1), axis=0)  # @ 保留原例两次 flipdim，而不是换成矩阵转置。\r
        newh, neww, newc = NewImage.shape  # @ 对应 [newh,neww,newc]=size(NewImage)。\r
        fit = min(1, max(1, (w - 1) // 2) / neww, max(1, (h - 1) // 2) / newh)  # @ 网页补充小背景保护，避免原例 randi 上界小于等于零。\r
        if fit < 1:  # @ 只有前景超出安全范围时才补充缩小。\r
            NewImage = cv.resize(NewImage, (max(1, int(neww * fit)), max(1, int(newh * fit))), interpolation=cv.INTER_LINEAR)  # @ 保持前景比例，保证可以放进背景。\r
        newh, neww = NewImage.shape[:2]  # @ 更新必要保护后的尺寸。\r
        positionx = int(random.integers(max(1, w - 2 * neww)))  # @ 对应 randi(w-2*neww)，将结果换成 Python 的 0 基坐标。\r
        positiony = int(random.integers(max(1, h - 2 * newh)))  # @ 对应 randi(h-2*newh)。\r
        temp = Back[positiony:positiony + newh, positionx:positionx + neww, :].copy()  # @ 对应取出背景中相同大小的矩形区域。\r
        colorchange = random.integers(0, 3, size=2)  # @ 对应 colorchange=randi(3,1,2)，Python 通道编号为 0～2。\r
        if colorchange[0] != colorchange[1]:  # @ 对应 if colorchange(1)~=colorchange(2)。\r
            color = NewImage[:, :, colorchange[0]].copy()  # @ 对应暂存第一个通道。\r
            NewImage[:, :, colorchange[0]] = NewImage[:, :, colorchange[1]]  # @ 对应把第二通道放到第一通道。\r
            NewImage[:, :, colorchange[1]] = color  # @ 对应把暂存通道放到第二通道。\r
        c = (NewImage[:, :, 0] != 0) & (NewImage[:, :, 1] != 0) & (NewImage[:, :, 2] != 0)  # @ 保留课件的逻辑与背景规则：任一通道为零则认为属于背景。\r
        if remove_black:  # @ 网页允许观察使用或停用原例背景规则的差异。\r
            NewImage[~c] = temp[~c]  # @ 等价替代 MATLAB find 与列优先线性索引的三次通道赋值。\r
        temp = NewImage  # @ 对应 temp=NewImage。\r
        Back[positiony:positiony + newh, positionx:positionx + neww, :] = temp  # @ 对应把处理后的前景写回背景区域。\r
    return Back  # @ 网页显示合成结果，对应课件 subplot(133),imshow(Back)。\r
\r
\r
def fourier(Image, view='spectrum', cutoff=20):  # @ 第 4 章第 21–22 页原本就是 Python/OpenCV，按原例整理，非 MATLAB 转译。\r
    import cv2 as cv  # @ 保留原例 cv.dft、cv.idft、cv.magnitude、cv.phase 的接口。\r
    grayI = cv.cvtColor(Image, cv.COLOR_RGB2GRAY)  # @ 对应原例按灰度读取 cameraman.tif；网页提供 RGB 输入。\r
    grayI = grayI.astype(np.float32)  # @ 保留原例单精度转换。\r
    DFT = cv.dft(grayI, flags=cv.DFT_COMPLEX_OUTPUT)  # @ 保留原例二维复数 DFT。\r
    ADFT = cv.magnitude(DFT[:, :, 0], DFT[:, :, 1])  # @ 保留原例由实部和虚部求幅值。\r
    top, bottom = np.max(ADFT), np.min(ADFT)  # @ 保留原例的幅值最大值与最小值。\r
    ADFT1 = (ADFT - bottom) / (top - bottom if top > bottom else 1) * 100  # @ 保留课件乘 100 的线性幅度显示，仅补充常数图除零保护。\r
    ADFT2 = np.fft.fftshift(ADFT1)  # @ 保留原例频谱搬移。\r
    phaseI = cv.phase(DFT[:, :, 0], DFT[:, :, 1])  # @ 保留原例 OpenCV 的 0～2π 相位约定，不擅自改成 −π～π。\r
    phaseI = phaseI / max(float(np.max(phaseI)), 1e-12)  # @ 保留原例按最大相位归一化，补充分母保护。\r
    if view == 'spectrum':  # @ 网页展示课件中的中心化线性幅度谱。\r
        return ADFT2  # @ 与 cv.imshow 的浮点显示一致，超过 1 的亮度在显示时截断。\r
    if view == 'phase':  # @ 原例相位图没有额外搬移。\r
        return phaseI  # @ 返回按原例约定归一化的相位。\r
    if view == 'log_spectrum':  # @ 此分支是明确标注的观察补充，原例未使用对数幅度。\r
        values = np.log1p(np.fft.fftshift(ADFT))  # @ 对数压缩便于观察较弱的高频。\r
        return (values - values.min()) / max(float(np.ptp(values)), 1e-12)  # @ 将补充显示归一化到 0～1。\r
    if view in ('lowpass', 'highpass'):  # @ 频域滤波对应第 37–38 页的原理，程序为补充。\r
        height, width = grayI.shape  # @ 获取频率网格尺寸。\r
        y, x = np.fft.fftfreq(height) * height, np.fft.fftfreq(width) * width  # @ 构造周期频率坐标。\r
        mask = np.hypot(y[:, None], x[None, :]) <= cutoff  # @ 以到直流的距离定义理想低通。\r
        DFT *= (mask if view == 'lowpass' else ~mask)[:, :, None]  # @ 掩膜同时作用于实部与虚部。\r
    recI = cv.idft(DFT, flags=cv.DFT_REAL_OUTPUT + cv.DFT_SCALE)  # @ 保留课件逆变换标志，包含必要的幅值缩放。\r
    if view == 'highpass':  # @ 高频有符号响应的显示为补充。\r
        return (recI - recI.min()) / max(float(np.ptp(recI)), 1e-12)  # @ 仅在高通观察时归一化。\r
    return np.clip(recI, 0, 255).astype(np.uint8)  # @ 按原例转回 uint8，补充截断以避免边界浮点误差回绕。\r
\r
\r
def cosine(Image, view='coefficients', keep=100):  # @ 整理第 4 章第 50–51 页已有 Python 程序，保留逐颜色通道处理。\r
    import cv2 as cv  # @ 原例使用 cv.dct 和 cv.idct。\r
    Image = Image.astype(np.float32)  # @ 保留原例单精度输入。\r
    original_height, original_width = Image.shape[:2]  # @ 网页补充记录原尺寸，以兼容任意上传图片。\r
    Image = np.pad(Image, ((0, Image.shape[0] % 2), (0, Image.shape[1] % 2), (0, 0)), mode='edge')  # @ OpenCV DCT 需偶数边长，奇数图片补一行或一列，原例偶数图不受影响。\r
    height, width, color = Image.shape  # @ 对应原例 np.shape(Image)。\r
    DCTs = np.zeros((height, width, color))  # @ 保留原例系数显示图。\r
    BGROut = np.zeros((height, width, color))  # @ 保留原例重建图变量名；网页输入使用 RGB 排列。\r
    for i in range(color):  # @ 保留原例对三个通道分别计算的循环。\r
        channel = Image[:, :, i]  # @ 保留原例的通道提取。\r
        DCT = cv.dct(channel)  # @ 保留原例二维 DCT。\r
        ADCT = np.log(np.abs(DCT) + 1)  # @ 保留原例对数幅值。\r
        top, bottom = np.max(ADCT), np.min(ADCT)  # @ 保留原例逐通道显示范围。\r
        DCTs[:, :, i] = (ADCT - bottom) / (top - bottom if top > bottom else 1)  # @ 保留原例归一化，补充常数通道除零保护。\r
        if keep < 100:  # @ 系数舍弃对应第 52 页应用原理，作为标明的补充选项；默认保留全部。\r
            DCT[int(np.ceil(height * keep / 100)):, :] = 0  # @ 补充：舍弃较高垂直频率。\r
            DCT[:, int(np.ceil(width * keep / 100)):] = 0  # @ 补充：舍弃较高水平频率。\r
        BGROut[:, :, i] = cv.idct(DCT)  # @ idct 本身已按 DCT 约定归一化，修正原例混入 DFT 标志的写法。\r
    BGROut = np.clip(BGROut, 0, 255).astype(np.uint8)  # @ 保留原例 uint8 输出并防止浮点误差回绕。\r
    result = DCTs if view == 'coefficients' else BGROut  # @ 网页选择原例的系数图或重建图。\r
    return result[:original_height, :original_width]  # @ 移除仅为接口兼容补出的边缘。\r
\r
\r
def pca(Image, components=8):  # @ 第 4 章第 54 页原有 Python 片段；图像样本构造和重建为补充。\r
    data = np.mean(Image, axis=2).astype(float)  # @ 补充：每行作为一个变量，每列作为一次观测，适配原例 np.cov(data)。\r
    mean = data.mean(axis=1, keepdims=True)  # @ 补充：保存每个变量的均值，用于重建。\r
    X = np.cov(data)  # @ 保留课件 X=np.cov(data)，默认每行是一个变量。\r
    val, vec = np.linalg.eig(X)  # @ 保留课件特征值、特征向量求解接口。\r
    idx = np.argsort(val)[::-1]  # @ 保留课件按特征值降序排列的步骤。\r
    basis = vec[:, idx[:components]].real  # @ 补充：取最大特征值对应的主成分。\r
    result = basis @ (basis.T @ (data - mean)) + mean  # @ 补充：投影到所选主成分，再重建灰度图。\r
    return result  # @ 返回按 0～255 亮度显示的补充图像实验。\r
\r
\r
def hadamard(Image, view='coefficients', threshold=0):  # @ 第 4 章第 56 页只生成 H=hadamard(8)，图像变换与重建为补充。\r
    from scipy.linalg import hadamard as make_hadamard  # @ 对应课件 from scipy.linalg import hadamard，仅为避免同名函数而改导入别名。\r
    data = np.mean(Image, axis=2).astype(float)  # @ 补充：将上传图像转为二维灰度数据。\r
    height, width = data.shape  # @ 补充：工作尺寸已由网页准备为 2 的幂。\r
    H = make_hadamard(height)  # @ 保留课件的 Sylvester 矩阵生成；图像尺寸替代原例固定的 8。\r
    W = make_hadamard(width)  # @ 补充：为可能不同的宽度生成第二个矩阵。\r
    D = H @ data @ W.T / np.sqrt(height * width)  # @ 补充：二维正交归一化 Hadamard 变换。\r
    if view == 'coefficients':  # @ 补充：网页提供系数观察。\r
        values = np.log1p(np.abs(D))  # @ 补充：压缩系数显示动态范围。\r
        return (values - values.min()) / max(float(np.ptp(values)), 1e-12)  # @ 补充：归一化系数图。\r
    D[np.abs(D) < threshold] = 0  # @ 补充：可选舍弃小系数，默认阈值为零。\r
    return H.T @ D @ W / np.sqrt(height * width)  # @ 补充：利用正交性质逆变换，返回 0～255 亮度。\r
\r
\r
def wavelet(Image, view='decomposition'):  # @ 第 4 章第 59 页已有 Python/PyWavelets 片段，此处保留单层 Haar 调用。\r
    import pywt  # @ 保留课件使用的 PyWavelets 库。\r
    img = np.mean(Image, axis=2).astype(float)  # @ 补充：课件未定义 img，这里由上传图片生成灰度输入。\r
    cA, (cH, cV, cD) = pywt.dwt2(img, 'haar')  # @ 原样保留课件的 Haar 二维小波分解接口。\r
    if view == 'reconstruct':  # @ 补充：课件片段未包含重建显示。\r
        return pywt.idwt2((cA, (cH, cV, cD)), 'haar')[:img.shape[0], :img.shape[1]]  # @ 补充：用相同基逆变换，裁去边界补齐。\r
    details = [0.5 + values / max(float(np.max(np.abs(values))), 1e-12) / 2 for values in (cH, cV, cD)]  # @ 补充：带符号细节映射到以 0.5 为零点的显示范围。\r
    return np.block([[cA / 510, details[0]], [details[1], details[2]]])  # @ 补充：按 cA、cH、cV、cD 排列子带图，与原调用的返回次序一致。\r
`,Fe={"c2:79":`79
2.4.1多值图像转换为二值图像
彩色、灰度图像→二值图像：二值化，应用图像分割技术
gray=imread('coins.png'); 
BW1=zeros(size(gray));         
thresh=100;                      
BW1(gray>thresh)=1;
 
  
RGB=imread('rose.jpg');
[N,M,color]=size(RGB);         
BW2=zeros(N,M);
pos1=RGB(:,:,1)>thresh;        
pos2=RGB(:,:,3)>thresh;        
pos=pos1 & pos2;    
BW2(pos)=1; 
图像类型转换`,"c2:80":`80
2.4.2彩色图像转换为灰度图像
图像类型转换
彩色图像→灰度图像：灰度化
Image=im2double(imread('flower.jpg'));   
r=Image(:,:,1);    
g=Image(:,:,2);    
b=Image(:,:,3);  
Y=0.299*r+0.587*g+0.114*b;                  
I=(r+g+b)/3;    
Y
I
R
G
B`,"c2:82":`82
2.4.3灰度图像转换为彩色图像
图像类型转换
密度分割法
[Image1,MAP1]=imread('cartoon.bmp');     
MAP2=zeros(256,3);                 
MAP2(1:32,1)=30/256;    
MAP2(1:32,2)=32/256;    
 MAP2(1:32,3)=30/256;
MAP2(33:64,1)=93/256;   MAP2(33:64,2)=193/256;   MAP2(33:64,3)=195/256;
MAP2(65:96,1)=180/256;  MAP2(65:96,2)=108/256;   MAP2(65:96,3)=186/256;
MAP2(97:128,1)=67/256;  MAP2(97:128,2)=119/256;  MAP2(97:128,3)=98/256;
MAP2(129:160,1)=95/256; MAP2(129:160,2)=137/256; MAP2(129:160,3)=110/256;
MAP2(161:192,1)=81/256; MAP2(161:192,2)=173/256; MAP2(161:192,3)=255/256;
MAP2(193:256,1)=256/256;MAP2(193:256,2)=256/256; MAP2(193:256,3)=256/256;
figure,imshow(Image1,MAP2),title('调整颜色映射表实现彩色化');`,"c2:88":`88
RGB=imread('flower.jpg');
[Image,MAP]=rgb2ind(RGB,256);        
YCbCrMAP1=rgb2ycbcr(MAP);             
YCbCrMAP2=YCbCrMAP1;
YCbCrMAP3=YCbCrMAP1;
YCbCrMAP1(:,1)=YCbCrMAP1(:,1)*1.5; YCbCrMAP2(:,2)=YCbCrMAP2(:,2)*1.5;  
YCbCrMAP3(:,3)=YCbCrMAP3(:,3)*1.5; MAP1=ycbcr2rgb(YCbCrMAP1);  
MAP2=ycbcr2rgb(YCbCrMAP2);
MAP3=ycbcr2rgb(YCbCrMAP3); 
subplot(221),imshow(Image,MAP),title('索引图原图');
2.5色彩空间变换
数字图像处理基础`,"c2:91":`91
（3）程序及结果
2.6综合实例
数字图像处理基础
clear,clc,close all;
Image=imread('lotus.jpg');
hsv=rgb2hsv(Image);                 
h=hsv(:,:,1);                        
tolerance=0.02;                      
h(h>5/6+tolerance)=4/6;
h(h<1/6-tolerance)=4/6;             
hsv(:,:,1)=h;
result=hsv2rgb(hsv);               
subplot(121),imshow(Image),title('原始图像');
subplot(122),imshow(result),title('处理后的图像');`,"c3:3":`3.1点运算
3
图像基础性运算
一种常用的处理方法，每个像素点的输出值只取决于其自身的输入和相关参数，与其他像素无关。
clear,clc,close all;
Image=im2double(imread('office.jpg'));
result=4*Image;
subplot(121),imshow(Image);
title("原图");
subplot(122),imshow(result);
title("增大亮度");`,"c3:19":`19
3.4.2图像平移
几何变换
（2）实例
根据原理，采用后向映射法，将图像沿x轴、y轴平移20个像素
clear,clc,close all;
Image=im2double(imread(‘bird.jpg'));                   
[h,w,c]=size(Image);  
NewImage=ones(h,w,c);   
deltax=20;              
deltay=20;  
需要注意
是否扩大图像
映射过程
插值方法`,"c3:20":`20
for x=1:w                                       
    for y=1:h         
        oldx=x-deltax;    
        oldy=y-deltay;                   
        if oldx>0 && oldx<w+1 && oldy>0 && oldy<h+1  
            NewImage(y,x,:)=Image(oldy,oldx,:);  
        end
    end
end
subplot(121),imshow(Image),title('原图');
subplot(122),imshow(NewImage),title('平移后的图像');
3.4.2图像平移
几何变换`,"c3:21":`21
函数
（2）实例
3.4.2图像平移
几何变换
tform = affine2d(A)
B = imwarp(A,TFORM)
程序
clear,clc,close all;
Image=imread(‘bird.jpg');
[h,w,c]=size(Image);
deltax=20;                           deltay=20;
newh=h+abs(deltay);        neww=w+abs(deltax);     
tform=affine2d([1 0 0;0 1 0;deltax deltay 1]);   
[xLimitsOut,yLimitsOut]=outputLimits(tform,[1 w],[1 h]);`,"c3:22":`22
3.4.2图像平移
几何变换
if deltax<0
    xLimitsOut(2)=xLimitsOut(2)+abs(deltax);
else
    xLimitsOut(1)=xLimitsOut(1)-abs(deltax);
end
if deltay<0
    yLimitsOut(2)=yLimitsOut(2)+abs(deltay);
else
    yLimitsOut(1)=yLimitsOut(1)-abs(deltay);
end                           
R=imref2d([newh,neww],xLimitsOut,yLimitsOut);    
NewImage=imwarp(Image,tform,'FillValue',255,'OutputView',R);
figure……`,"c3:24":`24
fliplr(X)   
flipud(X)  
flip(X,DIM) 
（2）实例
3.4.3图像镜像
几何变换
clear,clc,close all;
Image=imread(‘bird.jpg');
HImage=fliplr(Image);        
VImage=flipud(Image);   
CImage=flip(HImage,1);     
mosaic=[Image HImage;VImage CImage]; 
imshow(Image),title('原始图像');
figure,imshow(mosaic),title('镜像图像拼接');
函数
程序`,"c3:34":`34
（4）实现
3.4.4图像旋转
几何变换
按照后向映射法实现
函数
affine2d和imwarp
imrotate
程序
clear,clc,close all;
Image=im2double(imread('dog.jpg'));               
NewImage1=imrotate(Image,15,'bilinear');         
RImage=1-Image;                                       
NewImage2=imrotate(RImage,15,'bilinear','crop');
NewImage2=1-NewImage2;                               
subplot(131),imshow(Image) ,title('原图');
……`,"c3:37":`37
B=imresize(A,SCALE,METHOD))
B=imresize(A,[NUMROWS NUMCOLS], METHOD))
[Y, NEWMAP] = imresize(X, MAP, SCALE, METHOD))
（2）实现
3.4.5图像缩放
几何变换
按照后向映射法实现
函数
程序
[Image1,MAP1]=imread('kids.tif');  
Image2=im2double(imread('dog.jpg'));   
[NewImage1,MAP2]=imresize(Image1,MAP1,0.6,'bilinear'); 
NewImage2=imresize(Image2,'Scale',[2.8,1.6]);`,"c3:40":`40
3.4.6图像错切
几何变换
（2）实现
按照后向映射法实现
函数
affine2d和imwarp
Image=imread(‘dog.jpg');
dx=0.5;    dy=0.2;                                    
tform1=affine2d([1  0 0;dx 1 0;0 0 1]);         
tform2=affine2d([1 dy 0; 0 1 0;0 0 1]);          
tform3=affine2d([1 dy 0;dx 1 0;0 0 1]);         
hImage=imwarp(Image,tform1,'FillValue',255);
vImage=imwarp(Image,tform2,'FillValue',255);
hvImage=imwarp(Image,tform3,'FillValue',255);
程序`,"c3:42":`42
3.4.7图像转置
几何变换
Image=im2double(imread('dog.jpg'));
[height,width,color]=size(Image);
result=zeros(width,height,color);
for i=1:color
    result(:,:,i)=Image(:,:,i)';                 
end`,"c3:45":`45


代数运算
3.5.1加法运算
（2）实现
程序
Back=imread('back.jpg'); 
Foreground=imread('fore.jpg'); 
result1=imadd(Back,Foreground);             
alpha=0.6; 
result2=imlincomb(1-alpha,Back,
                        alpha,Foreground);
背景图
目标图
截断处理 
加权求和`,"c3:50":`50
代数运算
3.5.2减法运算
（2）实现
Back=imread(‘back.jpg');
Foreground=imread(‘fore.jpg');
result1=imabsdiff(Back,Foreground);
result2=im2double(Foreground)-im2double(Back);
程序

 
 
 
背景图
目标图
截断相减
相减取绝对值`,"c3:53":`53
代数运算
（1）原理
图像的局部显示和提取
生成合成图像
（3）应用
＝
×
背景
模板
目标
3.5.3乘法运算
（2）实现
运算符：.*
immultiply`,"c3:54":`54
代数运算
（1）原理
（3）应用
消除空间可变的量化敏感函数、归一化、产生比率图像等
图像的局部显示和提取
生成合成图像
背景
模板
图像相除
运算中黑色部分设为较大值
3.5.4除法运算
（2）实现
运算符：./
imdivide`,"c3:55":`55
非：
与：
或：
（2）函数
（1）原理
C = bitcmp(A)：按位求补
C = bitand(A,B)：按位求与
C = bitor(A,B)： 按位求或
C = bitxor(A,B)：按位求异或
&、|、~：按运算数据的值，不按位
3.5.5逻辑运算
代数运算`,"c3:63":`63
Image=imread('butterfly.bmp');
Back=imread('IMG3_13.jpg');
subplot(131),imshow(Image),title('蝴蝶');
subplot(132),imshow(Back),title('背景');
[h,w,c]=size(Back);
population=20;       
                  %随机变化出20只蝴蝶
num=3;                    
                   %拟进行三种几何变换
（3）程序
3.7综合实例
图像基础性运算`,"c3:64":`64
for k=1:population
    type=randi(6,1,num);    
    NewImage=Image;
    for n=1:num
        switch type(n)
            case 1                 
                scale=rand();                                       
                NewImage=imresize(NewImage,scale,'bilinear'); 
            case 2                 
                angle=round(rand()*100);  
                NewImage=imrotate(NewImage,angle,'bilinear'); 
（3）程序
3.7综合实例
图像基础性运算`,"c3:65":`65
（3）程序
             case 3                  %错切变换
                 shear=rand()/2;                                     
                 tform1=maketform('affine', [1 0 0;shear 1 0; 0 0 1]);
                 tform2=maketform('affine', [1 shear 0;0 1 0; 0 0 1]);
                 NewImage=imtransform(NewImage,tform1);
                 NewImage=imtransform(NewImage,tform2);               
             case 4                  %水平镜像
                 NewImage=flipdim(NewImage,2);     
             case 5                  %垂直镜像
                 NewImage=flipdim(NewImage,1);        
3.7综合实例
图像基础性运算`,"c3:66":`66
           case 6                   %对角镜像
                NewImage=flipdim(NewImage,2);
                NewImage=flipdim(NewImage,1);
           end          
    end
    [newh neww newc]=size(NewImage);
    positionx=randi(w-2*neww,1,1);
    positiony=randi(h-2*newh,1,1);            %叠加位置
    temp=Back(positiony:positiony+newh-1,
                         positionx:positionx+neww-1,:);
    colorchange=randi(3,1,2);
（3）程序
3.7综合实例
图像基础性运算`,"c3:67":`67
（3）程序
    if colorchange(1)~=colorchange(2)
        color=NewImage(:,:,colorchange(1));
        NewImage(:,:,colorchange(1))=NewImage(:,:,colorchange(2));
        NewImage(:,:,colorchange(2))=color;
    end                                             %色彩通道交换
    c=NewImage(:,:,1) & NewImage(:,:,2) & NewImage(:,:,3);
    pos=find(c(:)==0);
    NewImage(pos)=temp(pos);
    NewImage(pos+newh*neww)=temp(pos+newh*neww);
    NewImage(pos+2*newh*neww)=temp(pos+2*newh*neww); 
                             %去除几何变换中产生的背景黑色点
3.7综合实例
图像基础性运算`,"c3:68":`68
    temp=NewImage;    
    Back(positiony:positiony+newh-1,
              positionx:positionx+neww-1,:)
            =temp;    %叠加
end
subplot(133),imshow(Back);
title('合成图');
（3）程序
3.7综合实例
图像基础性运算`,"c4:21":`21
cv.dft(src[, dst[, flags[, nonzeroRows]]]) -> dst
cv.idft(src[, dst[, flags[, nonzeroRows]]]) -> dst
cv.magnitude(x, y[, magnitude]) -> magnitude
cv.phase(x, y[, angle[, angleInDegrees]]) -> angle
函数
DFT的实现
（3）实例
grayI = cv.imread('cameraman.tif', cv.IMREAD_GRAYSCALE)
cv.imshow("Original image", grayI)
grayI = grayI.astype(np.float32)
DFT = cv.dft(grayI, flags=cv.DFT_COMPLEX_OUTPUT) 
ADFT = cv.magnitude(DFT[:, :, 0], DFT[:, :, 1])  
top, bottom = np.max(ADFT), np.min(ADFT)
ADFT1 = (ADFT - bottom) / (top - bottom) * 100   
程序`,"c4:22":`22
ADFT2 = np.fft.fftshift(ADFT1)   
phaseI = cv.phase(DFT[:, :, 0], DFT[:, :, 1])   
phaseI = phaseI / np.max(phaseI)                   
recI = cv.idft(DFT, flags=cv.DFT_REAL_OUTPUT 
                                         + cv.DFT_SCALE).astype(np.uint8)
DFT的实现
（3）实例`,"c4:50":`50
4.2.2 DCT的实现
离散余弦变换
函数
cv.dct(src[, dst[, flags]]) -> dst
cv.idct(src[, dst[, flags]]) -> dst
程序
Image = cv.imread('peppers.png')                
Image = Image.astype(np.float32)
height, width, color = np.shape(Image)
DCTs = np.zeros([height, width, color])       
BGROut = np.zeros([height, width, color])
原图`,"c4:51":`51
彩色频谱图
DCT重建图
4.2.2 DCT的实现
离散余弦变换
能量主要集中在左上角低频分量处
for i in range(color):                            
    channel = Image[:, :, i]
    DCT = cv.dct(channel)                         
    ADCT = np.log(np.abs(DCT) + 1)              
    top, bottom = np.max(ADCT), np.min(ADCT)
    DCTs[:, :, i] = (ADCT - bottom) / (top - bottom)      
    BGROut[:, :, i] = cv.idct(DCT, 
          flags=cv.DFT_REAL_OUTPUT + cv.DFT_SCALE) 
BGROut = BGROut.astype(np.uint8)    `,"c4:54":`4.3 生活实例｜刷脸怎么认出你
K-L变换
【场景】手机刷脸解锁：几十万像素的人脸只浓缩成几十个“特征脸”就能认出你——这就是 K-L 变换（主成分分析 PCA）。
【通俗原理】K-L 变换找出数据方差最大的方向（特征值最大的特征向量），把大量相关的数据浓缩成少数几个“最重要的方向”，去掉相关性、突出差异，实现降维。
【类比】数学、物理、化学分都很高的人，可用“理科强”一个词概括——K-L 就是自动找这种“概括词”。
【一句话记住】K-L 变换＝抓住数据“最主要的变化方向”，是降维与特征提取之王。
import numpy as np
X = np.cov(data)                  # 协方差矩阵
val, vec = np.linalg.eig(X)       # 特征值/特征向量
idx = np.argsort(val)[::-1]       # 特征值降序=主成分`,"c4:55":`4.4 生活实例｜CT怎么看透身体
Radon变换
【场景】做 CT 时，X 射线绕着身体转一圈、从几百个角度透视，计算机据此重建出断层图像。
【通俗原理】Radon 变换＝沿某条直线把图像“累加”得到投影；一个角度出一条投影线，转一圈得到“正弦图”，再反变换（iradon）重建原图。
【类比】给苹果从各个方向拍“影子”，把影子叠起来就能还原苹果的形状。
【一句话记住】Radon 变换是 CT、工业无损检测的数学基础。
import cv2
img = cv2.imread('scan.png', 0)
R = cv2.ximgproc.RadonTransform(
      img, theta=1, start_angle=0, end_angle=180)`,"c4:56":`4.5 生活实例｜最省事的变换
图像的正交变换
【场景】二维码扫描、卫星通信、视频压缩（H.264）里都在用它——因为它算得飞快。
【通俗原理】Hadamard 矩阵每个元素只有 +1 或 -1，变换只用“加减”就能完成、没有乘法，特别适合硬件 / 芯片实时实现。
【类比】傅里叶要算三角函数（乘法），Hadamard 只要“加加减减”，像数数一样简单。
【一句话记住】Hadamard 变换＝牺牲一点精度，换极致的计算速度。
from scipy.linalg import hadamard
H = hadamard(8)    # 8 阶矩阵, 元素只有 +1 / -1
print(H)`,"c4:59":`4.6 生活实例｜全局细节都能看
小波变换
【场景】手机相册的“降噪 / 去雾”、高清医学影像、JPEG2000、指纹识别，背后都是小波变换。
【通俗原理】小波变换把图像同时拆成“大局（低频）＋各方向细节（高频）”，像放大镜＋显微镜，可以分层处理。
【对比】傅里叶只有“频率”、丢了“位置”；小波频率和位置都能保留，更适合局部突变（边缘、噪声）。
【一句话记住】小波＝傅里叶的“升级版”，兼顾频率与位置。
import pywt
cA, (cH, cV, cD) = pywt.dwt2(img, 'haar')
# cA=低频近似, cH/cV/cD=水平/垂直/对角细节`};function ae(e,t={}){const n={...Object.fromEntries(e.params.map(M=>[M.key,M.value])),...e.fixed,...t};let i,r=[],o="byte",u=[],p="",d=1,s=[];const c=e.id;if(c==="gray"&&(i="grayscale",r=[n.method],o="unit",u=[80]),c==="binary"&&(i="binary",r=[n.threshold,n.binaryMode],o="unit",u=[79],p="原例分别读取 coins.png 灰度图与 rose.jpg 彩色图；上传彩色图做灰度阈值时，补充加权灰度预处理。"),c==="pseudo"&&n.palette==="density"&&(i="density_segmentation",o="unit",u=[82],s=["pillow"],p="原例读取 cartoon.bmp 的索引矩阵，最后 64 项均为白色。上传 RGB 图片时补充 Pillow 量化生成索引；不同量化库可能得到不同索引。"),c==="ycbcr"&&(i="ycbcr_palette",r=[Number(n.component),n.gain],o="unit",u=[88],s=["pillow"],p="保留索引图→调色板→YCbCr→分量乘 1.5→RGB 的流程及 MATLAB 视频范围公式。Pillow 量化与 rgb2ind 不保证相同调色板。"),c==="recolor"&&(i="lotus_recolor",r=[n.tolerance,n.targetHue],o="unit",u=[91],s=["opencv-python"],p="保留 h>5/6+tolerance 与 h<1/6-tolerance 两次赋值；默认 tolerance=0.02、替换色相=4/6。OpenCV H 单位转换写在代码中。"),c==="brightness"&&(i="point_brightness",r=[n.gain],o="unit",u=[3],p="原例 result=4*Image，默认增益恢复为 4；超过 0～1 的值仅在显示时截断。"),c==="resize"&&(i="scaling",r=[n.scaleX,n.scaleY,n.interpolation],u=[37],s=["opencv-python"],p="保留 imresize 对应的库函数调用；默认对应索引图的 0.6 倍例。彩色图另一例 Scale=[2.8,1.6] 对应纵向 2.8、横向 1.6。不同库的像素中心、抗混叠约定可能造成边缘数值差异。"),c==="geometry"){const M=n.mode;M==="translate"&&(i=n.expand?"translation_expanded":"translation",r=[n.dx,n.dy],o=n.expand?"byte":"unit",u=n.expand?[21,22]:[19,20]),["horizontal","vertical","diagonal","mosaic"].includes(M)&&(i="mirror",r=[M],u=[24]),M==="rotate"&&(i="rotation",r=[n.angle,!n.expand],o="unit",u=[34],p="默认 15° 双线性旋转。扩展结果黑底；裁剪结果保留原例 1-Image→旋转→1-result 的白底处理。"),M==="shear"&&(i="shearing",r=[n.shearX,n.shearY,"both"],u=[40],p="保留课件行向量仿射矩阵，调用 OpenCV 时显式转置；扩展范围由 warp_expanded 适配。"),M==="transpose"&&(i="transpose",o="unit",u=[42]),s=["opencv-python"],p||="保留原例变量与处理步骤；Python 下标从 0 开始。库函数的画布边界计算属于接口适配，未承诺 MATLAB 与 OpenCV 逐像素相同。"}c==="arithmetic"&&(d=2,s=["opencv-python"],["blend","add"].includes(n.operation)&&(i="addition",r=[n.alpha,n.operation==="blend"],u=[45]),["subtract","difference"].includes(n.operation)&&(i="subtraction",r=[n.operation==="difference"],o=n.operation==="subtract"?"unit":"byte",u=[50]),n.operation==="multiply"&&(i="multiplication",u=[53]),n.operation==="divide"&&(i="division",u=[54]),["and","or","xor"].includes(n.operation)&&(i="bitwise",r=[n.operation],u=[55]),p="主图为 Back，第二图为 Foreground。减法保留 Foreground-Back；乘除不添加归一化。乘除、按位操作页只有函数说明，调用程序为对应接口整理。网页将第二图对齐主图尺寸。"),c==="invert"&&(i="bitwise",r=[null,"not"],u=[55],p="课件此页列出 bitcmp 等接口；这里是对应的 NumPy 按位函数调用。"),c==="composite"&&(i="butterfly_composite",d=2,r=[n.count,3,n.seed,n.removeBlack],u=[63,64,65,66,67,68],s=["opencv-python"],p="恢复 population=20、num=3，以及缩放/旋转/两次错切/三种镜像和随机通道交换。保留原例任一通道为零即背景的规则（纯色前景也可能被去除）。固定种子、小图保护为网页补充。"),c==="fft"&&(i="fourier",r=[n.view,n.cutoff],o=["reconstruct","lowpass"].includes(n.view)?"byte":"unit",u=[21,22],s=["opencv-python"],p="第 4 章原例已经是 Python。保留线性幅度×100、cv.phase 与 cv.idft；对数幅度和高/低通分支为原理补充，未冒充原例。"),c==="dct"&&(i="cosine",r=[n.view,n.keep],o=n.view==="coefficients"?"unit":"byte",u=[50,51],s=["opencv-python"],p="原例已经是 Python，保留逐通道 cv.dct、对数系数和 cv.idct。修正 idct 中误用的 DFT 标志，默认保留全部系数；奇数尺寸补齐、系数截断选项为补充。"),c==="pca"&&(i="pca",r=[n.components],u=[54],p="课件只给出 np.cov(data)、np.linalg.eig、argsort 三行核心片段；保留这三步。图像样本约定、中心化和重建为补充，不能视为课件完整程序。"),c==="hadamard"&&(i="hadamard",r=[n.view,n.threshold],o=n.view==="coefficients"?"unit":"byte",u=[56],s=["scipy"],p="课件只给出 scipy.linalg.hadamard(8) 生成矩阵。保留该库调用；图像尺寸矩阵、二维变换、阈值和重建属于补充。"),c==="wavelet"&&n.levels===1&&["decomposition","reconstruct"].includes(n.view)&&(i="wavelet",r=[n.view],o=n.view==="decomposition"?"unit":"byte",u=[59],s=["pywavelets"],p="保留原例 pywt.dwt2(img,'haar')。课件此处只给出分解片段；输入构造、子带显示与逆变换为补充。多层及应用选项另标为原理补充。");const y=e.chapter,A=u.map(M=>`—— 第 ${y.slice(1)} 章 · 第 ${M} 页 ——
${Fe[`${y}:${M}`]||""}`).join(`

`),B=i?y==="c4"?"课件 Python 整理":["invert"].includes(c)||c==="arithmetic"&&[53,54,55].includes(u[0])?"课件接口整理":"MATLAB → Python":"原理补充";return i||(p=c==="radon"?"课件第 55 页原有 Python ximgproc.RadonTransform 片段；此演示采用 NumPy 离散投影补充实现，接口与数值离散方式不同。":"这一选项依据课件原理补充实现，课件未提供对应完整程序。"),{name:i,args:r,range:o,inputs:d,packages:s,kind:B,pages:u,original:A||(c==="radon"?Fe["c4:55"]:""),note:p,source:u.length?`第 ${y.slice(1)} 章 · 第 ${u.join("、")} 页`:e.source}}function Ce(e){return e.replace(/[A-Z]/g,t=>"_"+t.toLowerCase())}function Xe(e,t){const n=ae(e,t),i=n.name?Pa:Ma,r=[...i.matchAll(/^def ([a-zA-Z_]\w*)\(/gm)],o=new Map(r.map((y,A)=>[y[1],i.slice(y.index,r[A+1]?.index??i.length).trim()])),u=i.slice(0,r[0].index).trim(),p=n.name||Ce(e.fn),d=new Set,s=[];function c(y){if(d.has(y)||!o.has(y))return;d.add(y);const A=o.get(y);s.push({name:y,source:A,language:"python"});for(const B of A.matchAll(/\b([a-zA-Z_]\w*)\s*\(/g))B[1]!==y&&c(B[1])}return c(p),[...s,{name:"环境依赖",source:u,kind:"imports",language:"python"}]}function Ke(e,t={}){const n={...Object.fromEntries(e.params.map(y=>[y.key,y.value])),...t,...e.fixed},i=ae(e,n),r=Xe(e,n),o=r.filter(y=>y.kind!=="imports"),u={gray:"flower.jpg",binary:n.binaryMode==="rgb"?"rose.jpg":"coins.png",pseudo:"cartoon.bmp",ycbcr:"flower.jpg",recolor:"lotus.jpg",brightness:"office.jpg",resize:"kids.tif",geometry:n.mode==="translate"?"bird.jpg":"dog.jpg",arithmetic:"back.jpg",composite:"IMG3_13.jpg",fft:"cameraman.tif",dct:"peppers.png"},p=y=>JSON.stringify(y).replace(/\btrue\b/g,"True").replace(/\bfalse\b/g,"False").replace(/\bnull\b/g,"None"),d=i.name?i.inputs===2:e.second||e.id==="wavelet"&&n.view==="fusion",s={...n};e.id==="kernel"&&(s.kernel=String(n.kernel).trim().split(/[\s,，;；]+/).map(Number));const c=i.name?`${i.name}(Image, ${d?"Foreground, ":""}*${p(i.args)})`:`${Ce(e.fn)}(Image, ${p(s)}${d?", Foreground":""})`;return`# ${i.kind} · ${i.source}
# ${i.note}
# 读写及工作尺寸准备为运行入口补充；算法函数与网页实际执行源码一致。
# 安装依赖：python -m pip install numpy pillow opencv-python scipy PyWavelets
${r.find(y=>y.kind==="imports").source}

${o.map(y=>y.source).join(`


`)}

if __name__ == '__main__':
    import argparse
    from PIL import Image as PILImage
    parser = argparse.ArgumentParser(description='${e.name}：${i.kind}')
    parser.add_argument('image', nargs='?', default='${u[e.id]||"input.png"}')
    parser.add_argument('--second', default='${e.id==="composite"?"butterfly.bmp":"fore.jpg"}')
    parser.add_argument('--output', default='result.png')
    options = parser.parse_args()
    original = PILImage.open(options.image).convert('${i.name?"RGB":"RGBA"}')
    ratio = min(1, ${e.limit||800} / max(original.size))
    width, height = [max(1, int(value * ratio + 0.5)) for value in original.size]
${e.power?`    width, height = [max(8, 2 ** int(np.floor(np.log2(value)))) for value in (width, height)]
`:""}    Image = np.asarray(original.resize((width, height), PILImage.Resampling.BILINEAR))
${d?`    other = PILImage.open(options.second).convert('${i.name?"RGB":"RGBA"}')
    Foreground = np.asarray(${e.id==="composite"?"other":"other.resize((width, height), PILImage.Resampling.BILINEAR)"})
`:""}    result = ${c}
${i.name?"":`    result = result['image'] if isinstance(result, dict) else result
`}    result = np.nan_to_num(result)${i.name&&i.range==="unit"?" * 255":""}
    PILImage.fromarray(np.clip(np.floor(result + 0.5), 0, 255).astype(np.uint8)).save(options.output)
    print(options.output)
`}const Ee=[{id:"c2",number:"02",name:"图像处理基础"},{id:"c3",number:"03",name:"图像基础性运算"},{id:"c4",number:"04",name:"图像的正交变换"},{id:"extra",number:"＋",name:"补充实验"}],S=(e,t,n,i)=>({key:e,label:t,type:"select",options:n.map(r=>typeof r=="string"?{value:r,label:r}:{value:r[0],label:r[1]}),value:i}),P=(e,t,n,i,r,o=1)=>({key:e,label:t,type:"range",value:n,min:i,max:r,step:o}),Ze=(e,t,n)=>({key:e,label:t,type:"checkbox",value:n}),Ra=()=>S("interpolation","插值方式",[["nearest","最近邻"],["bilinear","双线性"],["bicubic","双三次"]],"bilinear"),se=()=>S("boundary","边界填充",[["replicate","复制边缘"],["zero","零填充"],["reflect","对称反射"]],"replicate"),Oe=()=>P("size","邻域尺寸",3,3,7,2),_a=[P("angle","逆时针角度（°）",15,-180,180),P("dx","水平位移（px）",20,-150,150),P("dy","垂直位移（px）",20,-150,150),P("shearX","水平错切",.5,-1,1,.1),P("shearY","垂直错切",.2,-1,1,.1),Ze("expand","扩展画布，保留完整图像",!0)],Y=[{id:"gray",chapter:"c2",name:"灰度化",tag:"颜色 → 亮度",fn:"grayscale",source:"第 2 章 · 2.4.2 · 第 80 页",description:"比较加权亮度与三通道平均值。灰度化保留明暗结构，去除色彩差异。",formula:"Y = 0.299R + 0.587G + 0.114B",params:[S("method","灰度计算",[["weighted","加权亮度"],["average","RGB 平均"]],"weighted")]},{id:"binary",chapter:"c2",name:"阈值二值化",tag:"灰度 → 黑白",fn:"threshold",source:"第 2 章 · 2.4.1 · 第 79 页",description:"先提取加权灰度，再按阈值分成黑白两类。边界比较使用大于号。",formula:"g(x, y) = f(x, y) > T ? 255 : 0",params:[P("threshold","分割阈值",100,0,255),S("binaryMode","课件例子",[["gray","灰度阈值"],["rgb","红、蓝通道联合阈值"]],"gray")]},{id:"quantize",chapter:"c2",name:"灰度量化",tag:"采样与量化",fn:"quantize",source:"第 2 章 · 2.3.1 · 第 58–62 页",description:"降低灰度位深，观察灰度台阶与伪轮廓。1 位对应两级灰度，8 位对应 256 级。",formula:"L = 2ⁿ",params:[P("bits","量化位数",3,1,8)]},{id:"pseudo",chapter:"c2",name:"伪彩色映射",tag:"灰度 → 颜色",fn:"pseudocolor",source:"第 2 章 · 2.4.3 · 第 81–86 页",description:"按灰度密度分段查表，或通过热色、彩虹映射生成伪彩色。颜色用于表现强度，不代表恢复真实色彩。",formula:"(R, G, B) = LUT(Y)",params:[S("palette","映射方式",[["density","课件索引调色板（七段）"],["heat","热色编码"],["rainbow","蓝—绿—红连续映射"]],"density")]},{id:"channels",chapter:"c2",name:"RGB 通道",tag:"通道分离",fn:"channelView",source:"第 2 章 · 第 43、80 页；第 3 章 · 第 67 页",description:"以灰度观察某个 RGB 通道的强度，也可交换红蓝通道观察色彩变化。",formula:"RGB ↔ BGR",params:[S("channel","通道操作",[["0","红色 R"],["1","绿色 G"],["2","蓝色 B"],["swap","交换 R / B"]],"0")]},{id:"space",chapter:"c2",name:"颜色空间转换",tag:"颜色模型",fn:"colorSpace",source:"第 2 章 · 2.2、2.5 · 第 42–56、87 页",description:"查看 HSV、HSI、CMY、YCbCr、YIQ、YUV、XYZ、Lab 分量与往返重建。XYZ/Lab 采用 sRGB、D65 白点，YCbCr 采用全范围。分量视图映射为灰度，数值范围各不相同。",formula:"RGB → 颜色空间 → RGB",params:[S("space","目标空间",["HSV","HSI","CMY","YCbCr","YIQ","YUV","XYZ","Lab"],"HSV"),S("channel","显示方式",[["0","第 1 分量"],["1","第 2 分量"],["2","第 3 分量"],["-1","往返重建"]],"0")]},{id:"ycbcr",chapter:"c2",name:"YCbCr 调色板",tag:"课件第 88 页",fn:"colorSpace",source:"第 2 章 · 第 88 页",description:"按课件修改索引图调色板的 Y、Cb 或 Cr 分量，再转换回 RGB。",formula:"YCbCrMAP(:, k) × 1.5",params:[S("component","修改分量",[["0","Y 亮度"],["1","Cb 蓝色差"],["2","Cr 红色差"]],"0"),P("gain","分量倍率",1.5,0,3,.1)]},{id:"recolor",chapter:"c2",name:"HSV 局部换色",tag:"综合实例",fn:"recolor",source:"第 2 章 · 2.6 · 第 89–91 页",description:"保留课件两段色相判断，将红色区间改为 4/6，饱和度和明度保持不变。",formula:"H ∈ 目标范围 → H′",params:[P("tolerance","色相容差（0～1）",.02,0,.15,.01),P("targetHue","替换色相（0～1）",4/6,0,1,1/60)]},{id:"brightness",chapter:"c3",name:"亮度点运算",tag:"3.1 点运算",fn:"brightness",source:"第 3 章 · 3.1 · 第 3 页",description:"按课件 result=4*Image 转译，先归一化再乘 4；可调整增益观察点运算。",formula:"result = 4 × Image",params:[P("gain","增益（课件默认 4）",4,0,6,.1)]},{id:"kernel",chapter:"c3",name:"相关与卷积",tag:"3.2 邻域运算",fn:"neighborhood",source:"第 3 章 · 3.2 · 第 4–8 页",description:"卷积先将模板旋转 180°，相关直接使用模板。使用非对称模板观察二者差异；复制、零填充、对称反射会产生不同边界。",formula:"g(x,y) = Σ K(i,j) · f(x+i,y+j)",params:[S("operation","运算方式",[["correlation","相关"],["convolution","卷积"]],"correlation"),{key:"kernel",label:"3×3 模板（空格或逗号分隔）",type:"kernel",value:"0 0 0, -1 0 1, 0 0 0"},P("bias","响应显示偏移",128,0,255),se()],fixed:{size:3}},{id:"resize",chapter:"c3",name:"缩放与插值",tag:"3.3 / 3.4.5",fn:"resize",source:"第 3 章 · 第 9–12、36–38 页",description:"从输出像素反查输入坐标，比较最近邻、双线性与双三次插值。缩小插值本身不保证充分抗混叠，可对比卷积采样实验。",formula:"xₛ = (x + ½) · Wₛ/Wₜ − ½",params:[P("scaleX","水平倍率",.6,.1,3,.05),P("scaleY","垂直倍率",.6,.1,3,.05),Ra()]},{id:"geometry",chapter:"c3",name:"几何变换",tag:"3.4 后向映射",fn:"geometry",source:"第 3 章 · 3.4 · 第 13–42 页",description:"按所选操作展示课件对应的独立程序：手写平移、扩展平移、镜像、旋转、错切与逐通道转置。",formula:"pₛ = T⁻¹ · pₜ",params:[S("mode","变换类型",[["rotate","旋转"],["translate","平移"],["horizontal","水平镜像"],["vertical","垂直镜像"],["diagonal","双向镜像（课件对角镜像）"],["mosaic","四图镜像拼接"],["shear","错切"],["transpose","转置"]],"rotate"),..._a]},{id:"arithmetic",chapter:"c3",name:"双图代数与逻辑",tag:"3.5 代数运算",fn:"arithmetic",second:!0,source:"第 3 章 · 3.5 · 第 43–56 页",description:"主图为 Back，第二图为 Foreground（对齐尺寸）。保留课件前景减背景、八位乘法饱和与原始比值除法；除零显示为 255。",formula:"g = (1 − α)A + αB",params:[S("operation","双图操作",[["blend","加权融合"],["add","截断相加"],["subtract","前景减背景（浮点）"],["difference","绝对差"],["multiply","八位饱和乘法"],["divide","逐元素比值除法"],["and","按位与"],["or","按位或"],["xor","按位异或"]],"blend"),P("alpha","第二图权重 α",.6,0,1,.05)]},{id:"invert",chapter:"c3",name:"按位非 / 反色",tag:"3.5.5 逻辑运算",fn:"invert",source:"第 3 章 · 第 55–56 页",description:"8 位无符号颜色值的逐位取补等价于用 255 减去原值，透明度保持不变。",formula:"g = 255 − f",params:[]},{id:"average",chapter:"c3",name:"多帧平均去噪",tag:"3.5.1 加法应用",fn:"noiseAverage",source:"第 3 章 · 第 46 页",description:"生成独立零均值高斯噪声的多个观测并求平均。设为 1 帧查看噪声，增加帧数观察抑制效果；固定种子便于复现。",formula:"σ平均 ≈ σ / √N",params:[P("frames","模拟帧数",10,1,30),P("sigma","噪声标准差",35,0,80),P("seed","随机种子",42,1,1e3)]},{id:"sampling",chapter:"c3",name:"卷积上 / 下采样",tag:"3.6 采样",fn:"samplingConvolution",source:"第 3 章 · 3.6 · 第 57–60 页",description:"上采样采用补零网格与三角重建核卷积；下采样先做三角核平滑，再按整数间隔抽取，减少混叠。",formula:"补零 → 卷积 / 卷积 → 抽取",params:[S("direction","采样方向",[["up","上采样"],["down","下采样"]],"down"),P("factor","整数采样因子",2,2,4)]},{id:"composite",chapter:"c3",name:"多图合成",tag:"3.7 综合实例",fn:"composite",second:!0,source:"第 3 章 · 3.7 · 第 61–68 页",description:"按课件每个前景随机进行三次变换，交换随机两个通道，再按原例黑色背景规则合成。固定种子和小图保护为网页补充。",formula:"C = αF + (1 − α)B",params:[P("count","前景数量",20,1,30),P("seed","随机种子",42,1,1e3),Ze("removeBlack","使用课件零通道背景规则",!0)]},{id:"fft",chapter:"c4",name:"傅里叶变换",tag:"4.1 DFT / FFT",fn:"fourier",limit:256,power:!0,source:"第 4 章 · 4.1 · 第 7–41 页",description:"整理课件已有 Python/OpenCV 程序，保留线性幅度乘 100 与原相位显示。对数幅度和频域滤波作为补充选项。",formula:"F(u,v) = ΣΣ f(x,y)e⁻ʲ²π(ux/W+vy/H)",params:[S("view","输出视图",[["spectrum","课件线性幅度谱 ×100"],["log_spectrum","补充：对数幅度谱"],["phase","相位谱"],["reconstruct","完整逆变换"],["lowpass","理想低通重建"],["highpass","理想高通响应"]],"spectrum"),P("cutoff","截止频率（频率格点）",20,1,120)]},{id:"dct",chapter:"c4",name:"离散余弦变换",tag:"4.2 DCT",fn:"cosine",limit:128,source:"第 4 章 · 4.2 · 第 42–52 页",description:"正交 DCT-II 将能量集中到左上低频区。保留比例针对每个方向，例如 25%×25% 约保留 6.25% 系数。这是系数截断演示，不包含 JPEG 量化与熵编码。",formula:"D = Cₕ · f · C𝓌ᵀ",params:[S("view","输出视图",[["coefficients","对数系数幅值"],["reconstruct","逆变换重建（可选截断）"]],"coefficients"),P("keep","每方向系数保留（%）",100,1,100)]},{id:"pca",chapter:"c4",name:"K-L / PCA 变换",tag:"4.3 主成分",fn:"pca",limit:48,source:"第 4 章 · 4.3 · 第 53–54 页",description:"保留课件 np.cov(data)、eig、argsort 三行片段。图像每行作为一个变量、每列作为一次观测；样本构造与重建为网页补充。",formula:"X = np.cov(data)",params:[P("components","保留主成分数",8,1,48)]},{id:"radon",chapter:"c4",name:"Radon 投影",tag:"4.4 投影与重建",fn:"radon",limit:96,source:"第 4 章 · 4.4 · 第 55 页",description:"离散累加形成正弦图：横轴为探测器位置，纵轴为 0～180° 投影角度。普通反投影存在模糊；滤波反投影使用 Hann 窗斜坡滤波。结果归一化，有限角度与采样会带来误差。",formula:"ρ = x cos θ + y sin θ",params:[S("view","输出视图",[["sinogram","正弦图"],["backproject","普通反投影"],["filtered","滤波反投影"]],"sinogram"),P("angles","投影角度数量",90,12,180,6)]},{id:"hadamard",chapter:"c4",name:"Hadamard 变换",tag:"4.5 加减蝶形",fn:"hadamard",limit:256,power:!0,source:"第 4 章 · 4.5 · 第 56–57 页",description:"快速 Hadamard 变换的蝶形只需加减，正交归一化后可用相同变换重建。系数采用 Sylvester 自然顺序，不能直接当作连续频率排列。",formula:"H · Hᵀ = I",params:[S("view","输出视图",[["coefficients","对数系数幅值"],["reconstruct","阈值后重建"]],"coefficients"),P("threshold","系数舍弃阈值",0,0,200)]},{id:"wavelet",chapter:"c4",name:"Haar 小波",tag:"4.6 多分辨分析",fn:"wavelet",limit:256,power:!0,source:"第 4 章 · 4.6 · 第 58–81 页",description:"用正交 Haar 基作多层分解。左上为低频，右上为沿 x 变化的细节，左下为沿 y 变化的细节，右下为对角细节。支持软阈值降噪、硬阈值压缩示意、细节增强及双图融合。",formula:"L = (a+b)/√2，H = (a−b)/√2",params:[S("view","输出视图",[["decomposition","子带分解图"],["reconstruct","完整重建"],["denoise","软阈值降噪"],["edges","高频边缘提取"],["compress","硬阈值压缩重建"],["enhance","细节增强"],["fusion","双图小波融合"]],"decomposition"),P("levels","分解层数",1,1,3),P("threshold","系数阈值",20,0,100),P("gain","细节增强倍率",1.5,0,4,.1)]},{id:"mean",chapter:"extra",name:"均值滤波",tag:"补充 · 平滑",fn:"neighborhood",source:"补充实验 · 对应第 3 章邻域运算",description:"采用等权归一化模板，降低局部噪声，同时会模糊边缘。可切换窗口和边界策略。",formula:"g = Σ邻域像素 / 邻域像素数",fixed:{operation:"mean"},params:[Oe(),se()]},{id:"median",limit:384,chapter:"extra",name:"中值滤波",tag:"补充 · 非线性",fn:"neighborhood",source:"补充实验 · 对应第 3 章邻域运算",description:"对每个 RGB 通道独立排序邻域值并取中位数，适合观察孤立脉冲噪声的抑制。它不是卷积。",formula:"g = median(邻域像素)",fixed:{operation:"median"},params:[Oe(),se()]},{id:"sobel",chapter:"extra",name:"Sobel 边缘检测",tag:"补充 · 梯度",fn:"sobel",source:"补充实验 · 对应第 3 章模板运算",description:"分别计算两个方向的灰度梯度，用欧氏长度合成幅值。输出按最大梯度归一化显示。",formula:"G = √(Gₓ² + Gᵧ²)",params:[se()]},{id:"equalize",chapter:"extra",name:"直方图均衡",tag:"补充 · 对比度",fn:"equalize",source:"补充实验 · 灰度分布映射",description:"通过累积分布重映射灰度，扩展亮度分布。输出为灰度图，常数图保持原灰度；直方图不一定成为完全平坦分布。",formula:"g = (CDF(f) − CDFmin) / (N − CDFmin) · 255",params:[]}];function be(e){return{...Object.fromEntries(e.params.map(t=>[t.key,t.value])),...e.fixed}}function za(e,t){return Xe(e,t)}function oe(e,t){return e.second||e.id==="wavelet"&&t.view==="fusion"}function Na(e){return e.split(`
`).map((t,n)=>{const[i,...r]=t.split("# @");return{number:n+1,code:i.trimEnd(),explanation:r.join("# @").trim()}})}const $a={class:"code-section",id:"code"},La={class:"section-title"},Sa={key:0,class:"small-note"},Ga={key:1},Da={class:"code-layout"},Fa={class:"code-box"},Ea={class:"code-toolbar"},Oa={key:0,class:"small-note"},ja={class:"code-scroll",role:"group","aria-label":"逐行代码，点击查看解释"},Ha=["onClick","aria-pressed"],Ya={class:"line-number"},Va={key:0,class:"line-mark"},Ua={class:"explanation","aria-live":"polite"},qa={class:"explanation-title"},Wa={__name:"CodeViewer",props:{experiment:Object,params:Object},setup(e){const t=e,n=_(0),i=_(0),r=_(!1),o=_(""),u=z(()=>za(t.experiment,t.params)),p=z(()=>ae(t.experiment,t.params)),d=z(()=>Na(u.value[n.value]?.source||"")),s=z(()=>d.value[i.value]);de(()=>`${t.experiment.id}:${p.value.name}`,()=>{n.value=0,i.value=0}),de(n,()=>{i.value=0});async function c(){try{await navigator.clipboard.writeText(d.value.map(A=>A.code).join(`
`)),r.value=!0,setTimeout(()=>r.value=!1,1800)}catch{o.value="复制不可用，可直接选择代码文本复制。"}}function y(){const A=URL.createObjectURL(new Blob([Ke(t.experiment,t.params)],{type:"text/x-python;charset=utf-8"})),B=document.createElement("a");B.href=A,B.download=p.value.name?`${p.value.name}_example.py`:`${t.experiment.id}_supplement.py`,B.click(),setTimeout(()=>URL.revokeObjectURL(A),1e3)}return(A,B)=>(v(),x("section",$a,[a("div",La,[B[1]||(B[1]=a("div",null,[a("span",{class:"eyebrow"},"02 / READ THE CODE"),a("h2",null,"从像素到代码"),a("p",null,"点击任意一行，查看它在算法中的作用。")],-1)),C(b(ke),{type:"primary",bordered:!1,size:"small"},{default:k(()=>[w(f(p.value.kind),1)]),_:1})]),C(b(xn),{size:"small",class:"source-provenance"},{default:k(()=>[a("strong",null,f(p.value.kind)+" · "+f(p.value.source),1),a("p",null,f(p.value.note||"保留课件公式、变量与处理步骤；上传和前后对比替代原例文件读取及 subplot 显示。"),1),p.value.name?(v(),x("p",Sa,"读写、展示和必要的库接口适配已注明。调整参数会改变调用值，算法代码保持为同一函数。")):N("",!0),p.value.original?(v(),x("details",Ga,[a("summary",null,"对照课件原文（"+f(e.experiment.chapter==="c4"?"Python":"MATLAB")+"，含页内说明）",1),a("pre",null,f(p.value.original),1)])):N("",!0)]),_:1}),a("div",Da,[a("div",Fa,[a("div",Ea,[B[2]||(B[2]=a("label",{for:"source-function"},"函数",-1)),C(ue,{class:"function-picker","control-id":"source-function",label:"函数",value:n.value,"onUpdate:value":B[0]||(B[0]=M=>n.value=M),options:u.value.map((M,T)=>({value:T,label:M.kind==="imports"?"依赖导入":`${T===0?"主函数":"辅助函数"} · ${M.name}()`}))},null,8,["value","options"]),C(b($),{size:"small",secondary:"",onClick:y},{default:k(()=>[w(f(p.value.name?"下载本例 .py":"下载补充 .py"),1)]),_:1}),C(b($),{size:"small",quaternary:"",onClick:c},{default:k(()=>[w(f(r.value?"已复制":"复制"),1)]),_:1})]),o.value?(v(),x("p",Oa,f(o.value),1)):N("",!0),a("div",ja,[(v(!0),x(E,null,q(d.value,(M,T)=>(v(),x("button",{key:T,class:V(["code-line",{selected:T===i.value}]),onClick:g=>i.value=T,"aria-pressed":T===i.value},[a("span",Ya,f(M.number),1),a("code",null,f(M.code||" "),1),T===i.value?(v(),x("span",Va,"←")):N("",!0)],10,Ha))),128))]),B[3]||(B[3]=a("div",{class:"code-caption"}," 这里展示浏览器实际执行的 Python 函数；下载本例包含当前参数及本地图片读写入口。 ",-1))]),a("aside",Ua,[a("div",qa,[B[4]||(B[4]=a("span",{class:"explanation-icon"},"↳",-1)),a("span",null,"第 "+f(s.value?.number)+" 行",1)]),a("code",null,f(s.value?.code),1),a("p",null,f(s.value?.explanation||"该行用于组织当前函数的代码结构。"),1),B[5]||(B[5]=a("div",{class:"explanation-tip"}," 也可用 Tab 聚焦代码行，按 Enter 或空格查看解释。 ",-1))])])]))}};function Xa({id:e,source:t,params:n,second:i}){const r=Y.find(u=>u.id===e);if(!r)throw new Error("未找到该实验。");if(!t?.data||t.data.length!==t.width*t.height*4)throw new Error("输入图像数据无效。");if(oe(r,n)&&!i)throw new Error("该实验需要第二幅图像，请先上传。");for(const u of r.params){if(u.type==="range"&&(!Number.isFinite(n[u.key])||n[u.key]<u.min||n[u.key]>u.max))throw new Error(`${u.label}超出允许范围。`);if(u.type==="select"&&!u.options.some(p=>String(p.value)===String(n[u.key])))throw new Error(`${u.label}选项无效。`)}const o={...n,...r.fixed};if(r.id==="kernel"&&(o.kernel=String(n.kernel).trim().split(/[\s,，;；]+/).map(Number),o.kernel.length!==9||o.kernel.some(u=>!Number.isFinite(u)||Math.abs(u)>100)))throw new Error("模板需要 9 个有限数值，每项绝对值不超过 100。");return{experiment:r,params:o}}function Ka(){let e=null,t=null;function n(){e?.terminate(),e=null}return{run(i,r=()=>{}){t&&this.cancel();const{experiment:o,params:u}=Xa(i);return new Promise((p,d)=>{try{e||(e=new Worker(new URL(""+new URL("processing.worker-DXz73C9X.js",import.meta.url).href,import.meta.url),{type:"module"}),e.onmessage=({data:s})=>{if(!t)return;if(s.type==="progress"){t.onProgress(s.message);return}const c=t;t=null,s.error?c.reject(new Error(s.error)):c.resolve(s)},e.onerror=s=>{const c=t;t=null,n(),c?.reject(new Error(s.message||"Python 运算线程异常，请重试。"))}),t={resolve:p,reject:d,onProgress:r},e.postMessage({...i,params:u,lesson:ae(o,u),function:Ce(o.fn),limit:o.limit,power:o.power,runtimeURL:new URL("python-runtime/",document.baseURI).href})}catch(s){t=null,n(),d(s)}})},cancel(){if(t){const i=t;t=null,n(),i.reject(new Error("处理已停止。"))}},dispose(){this.cancel(),n()}}}function je(e){const t=Array(256).fill(0);for(let n=0;n<e.data.length;n+=4){const i=e.data[n]*.299+e.data[n+1]*.587+e.data[n+2]*.114,r=Math.floor(i),o=i-r,u=o>.5||o===.5&&r%2?r+1:r;t[Math.max(0,Math.min(255,u))]++}return t}function Za({id:e,experiment:t,params:n,source:i,original:r,second:o,result:u,code:p,provenance:d,thumbnail:s,createdAt:c=new Date().toISOString()}){return{id:e,experimentId:t.id,chapter:t.chapter,name:t.name,params:structuredClone(n),source:i,original:r,second:o,result:u,code:p,provenance:{...d},thumbnail:s,createdAt:c,parameterRows:t.params.map(y=>({label:y.label,value:y.options?.find(A=>A.value===n[y.key])?.label??(typeof n[y.key]=="boolean"?n[y.key]?"开启":"关闭":String(n[y.key]))}))}}function Ja(e){const t=new Set;for(const n of e)for(const i of[n.source,n.original,n.second,n.result.input,n.result.output])i?.data?.buffer&&t.add(i.data.buffer);return[...t].reduce((n,i)=>n+i.byteLength,0)}function Qa(e,t,{maxEntries:n=8,maxBytes:i=64*1024*1024}={}){const r=[t,...e].slice(0,n);for(;r.length&&Ja(r)>i;)r.pop();return r}function er(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function nr(e,t){const n=er,i=Ue(e.result.input,e.result.output),r=(u,p)=>{if(!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(p||""))throw new Error("报告图片格式无效，请重新导出。");return`<figure><img src="${p}" alt="${n(u)}"><figcaption>${n(u)}</figcaption></figure>`},o=e.parameterRows.map(u=>`<tr><th>${n(u.label)}</th><td>${n(u.value)}</td></tr>`).join("");return`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'">
<title>${n(e.name)} · 实验报告</title>
<style>
*{box-sizing:border-box}body{max-width:1000px;margin:32px auto;padding:0 24px;color:#25352c;background:#fff;font:15px/1.8 'Segoe UI','Microsoft YaHei',sans-serif}h1{font-size:30px}h2{font-size:20px;margin-top:32px}p{overflow-wrap:anywhere}header{border-bottom:2px solid #526d47;padding-bottom:20px}.meta,.tip{color:#637065;font-size:13px}.images{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}figure{margin:0;min-width:0}img{width:100%;height:260px;object-fit:contain;background:#f4f4ee;border:1px solid #e1e5dc}figcaption{font-size:13px;color:#637065}table{border-collapse:collapse;width:100%}th,td{border:1px solid #dfe4db;padding:9px 12px;text-align:left;overflow-wrap:anywhere}th{width:42%;font-weight:500;background:#f4f4ee}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:20px;border:1px solid #dfe4db;background:#f6f7f3;font:12px/1.8 Consolas,monospace}footer{margin:32px 0;border-top:1px solid #dfe4db;padding-top:18px;font-size:12px;color:#637065}@media(max-width:600px){body{padding:0 16px}.images{grid-template-columns:1fr}h1{font-size:24px}}@media print{body{margin:0;max-width:none}.tip{display:none}pre{font-size:10px}figure,tr{break-inside:avoid}}
</style></head><body>
<header><p class="meta">像素实验室 / 数字图像处理</p><h1>${n(e.name)} · 实验报告</h1>
<p class="meta">运行时间：${n(new Date(e.createdAt).toLocaleString("zh-CN",{timeZone:"Asia/Shanghai",hour12:!1}))}（北京时间）</p>
<p class="tip">此文件已包含图片和代码，可离线阅读。使用浏览器“打印”可另存为 PDF；实验结论可依据下方结果自行撰写。</p></header>
<h2>实验依据</h2><p>${n(e.provenance.kind)} · ${n(e.provenance.source)}</p><p>${n(e.provenance.note)}</p>
<p>输入：${n(e.source.name)}${e.source.reference?" · "+n(e.source.reference):""}。工作图：${e.result.input.width} × ${e.result.input.height}；输出：${e.result.output.width} × ${e.result.output.height}。Python 处理：${n(e.result.milliseconds)} ms。</p>
<h2>实际运行参数</h2>${o?`<table>${o}</table>`:"<p>本实验无可调参数。</p>"}
<h2>图像结果</h2><div class="images">${r("参与运算的输入图像",t.input)}${r("处理结果",t.output)}${t.second?r("第二幅输入图像（对齐前）",t.second):""}</div>
<h2>差异指标</h2>${i?`<table><tr><th>平均绝对误差 MAE</th><td>${i.mae.toFixed(4)}</td></tr><tr><th>均方误差 MSE</th><td>${i.mse.toFixed(4)}</td></tr><tr><th>峰值信噪比 PSNR</th><td>${Number.isFinite(i.psnr)?i.psnr.toFixed(2)+" dB":"∞（RGB 完全相同）"}</td></tr><tr><th>发生 RGB 变化的像素</th><td>${i.changedPercent.toFixed(2)}%</td></tr></table>`:"<p>输入与输出尺寸不同，未计算逐像素差异。</p>"}
<p class="meta">指标按显示的 8 位 RGB 工作图计算，不含透明度；用于描述差异，不能单独评价处理效果。</p>
<h2>Python 实验代码</h2><p class="meta">对应上述成功运行的参数，包含独立运行入口及依赖说明。</p><pre><code>${n(e.code)}</code></pre>
<footer>课件：刘兴庭《数字图像处理》第 2—4 章。此报告在本地浏览器生成；图像无需上传服务器。</footer>
</body></html>`}function ar(e,t){const n=nr(e,t),i=URL.createObjectURL(new Blob([n],{type:"text/html;charset=utf-8"})),r=document.createElement("a");r.href=i,r.download=`${e.experimentId}-实验报告.html`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const rr={class:"site-header"},tr={class:"header-right"},ir={class:"history-count"},sr={class:"intro"},or={class:"intro-copy"},lr={class:"intro-meta"},dr={class:"hero-gallery","aria-label":"课件图片示例"},ur=["disabled","onClick","aria-label"],pr=["src","alt"],cr={class:"chapter-nav","aria-label":"课程章节"},mr={class:"chapter-number"},fr={class:"workspace","aria-label":"图像处理实验工作台"},gr={class:"experiment-nav"},hr={class:"nav-heading"},vr={class:"experiment-list"},yr={class:"experiment-index"},br={key:0,class:"nav-arrow"},wr={key:0,class:"small-note"},xr={class:"lab-main"},Ir={class:"lab-toolbar"},kr={class:"sample-picker"},Ar=["src"],Cr={class:"sample-selection"},Br={class:"asset-toolbar-actions"},Tr={class:"lab-body"},Mr={class:"visual-panel"},Pr={class:"visual-heading"},Rr={class:"live-label"},_r={class:"comparison-switch",role:"group","aria-label":"图像对比方式"},zr={class:"result-toolbar"},Nr=["title"],$r={key:0},Lr={class:"run-status",role:"status"},Sr={key:0},Gr={key:1},Dr={key:0,class:"small-note limit-note"},Fr={class:"principle-section",id:"principle"},Er={class:"principle-copy"},Or={class:"source-label",href:"#course-sources"},jr={class:"principle-detail"},Hr={class:"formula"},Yr={class:"histogram",viewBox:"0 0 512 78",role:"img","aria-label":"输入与结果灰度分布对比"},Vr=["d"],Ur=["d"],qr={__name:"App",setup(e){const t=_("c2"),n=_("gray"),i=_(be(Y[0])),r=Q(null),o=Q(null),u=Q(null),p=Q(null),d=_(!1),s=_(!0),c=_(""),y=_(""),A=_(!1),B=_(""),M=_("flower"),T=Ka(),g=_(!1),I=_(!1),F=_("side"),re=_(null),W=_(!1),ee=Q([]),te=Q(null);let Je=0;const Qe=["lotus","bird","peppers"].map(h=>we[h]),X=z(()=>we[r.value?.sampleId]),en=z(()=>n.value==="composite"?"使用课件蝴蝶前景":n.value==="arithmetic"?"使用课件汽车前景":"使用课件荷花作为第二图");let K=0,L=0;const D=z(()=>Y.find(h=>h.id===n.value)),Be=z(()=>Y.filter(h=>h.chapter===t.value&&(!B.value||`${h.name}${h.tag}`.toLowerCase().includes(B.value.toLowerCase())))),nn=z(()=>Ee.find(h=>h.id===t.value)),ne=z(()=>p.value?.input||r.value),U=z(()=>p.value?.output||r.value),j=z(()=>!!p.value&&me(ne.value,U.value)),Te=z(()=>te.value?.result===p.value?te.value:null),Me=z(()=>ne.value?je(ne.value):[]),Pe=z(()=>U.value?je(U.value):[]),an=z(()=>Math.max(1,...Me.value,...Pe.value));function Re(h){return h.map((l,m)=>`${m===0?"M":"L"}${m*2},${70-l/an.value*65}`).join(" ")}function O(){K++,T.cancel(),d.value=!1}function fe(h){O(),n.value=h,i.value=be(D.value),p.value=null,c.value="",y.value="",A.value=!1}function rn(h){t.value=h,B.value="",fe(Y.find(l=>l.chapter===h).id)}function tn(h,l){i.value={...i.value,[h]:l},A.value=!!p.value,c.value=""}async function Z(){if(!r.value||d.value||s.value)return;const h=++K;d.value=!0,c.value="",y.value="";const l=JSON.stringify(i.value),m={id:n.value,source:r.value,params:{...i.value},second:u.value},R=D.value,ve=o.value;try{const J=await T.run(m,pn=>{h===K&&(y.value=pn)});if(h!==K)return;p.value=J,A.value=l!==JSON.stringify(i.value),y.value=J.note||"处理完成";const Se=Za({id:++Je,experiment:R,params:m.params,source:m.source,original:ve,second:oe(R,m.params)?m.second:null,result:J,code:Ke(R,m.params),provenance:ae(R,m.params),thumbnail:ie(J.output,160)});te.value=Se,ee.value=Qa(ee.value,Se)}catch(J){h===K&&(c.value=J.message)}finally{h===K&&(d.value=!1)}}async function _e(h,l=!1){const m=++L;O(),s.value=!0,c.value="";try{const R=await We(h);if(m!==L||!R)return;l?(u.value=R,A.value=!!p.value,y.value=`第二幅图像：${R.name}；双图运算会对齐到主图工作尺寸。`):(M.value=null,r.value=R,o.value=R,p.value=null,A.value=!1,y.value=R.originalWidth!==R.width?`输入已从 ${R.originalWidth}×${R.originalHeight} 缩至 ${R.width}×${R.height}。`:`已载入 ${R.name}`)}catch(R){m===L&&(c.value=R.message)}finally{m===L&&(s.value=!1)}}async function ge(h=M.value){const l=++L;O(),s.value=!0,c.value="";try{const m=await ye(h);if(l!==L)return;M.value=h,r.value=m,o.value=m,p.value=null,A.value=!1,y.value="已载入本地教学样例"}catch(m){l===L&&(c.value=m.message)}finally{l===L&&(s.value=!1)}}async function ze(){const h=++L;O(),s.value=!0,c.value="";try{const l=await ye(Pn(D.value));if(h!==L)return;u.value=l,A.value=!!p.value,y.value=`第二图：${l.name}，${l.reference}。`}catch(l){h===L&&(c.value=l.message)}finally{h===L&&(s.value=!1)}}async function he(h){await ge(h),!c.value&&(!oe(D.value,i.value)||u.value)&&await Z()}function Ne(h=!1){I.value=h,g.value=!0}async function sn(h){if(g.value=!1,!I.value)return he(h);const l=++L;O(),s.value=!0,c.value="";try{const m=await ye(h);if(l!==L)return;u.value=m,A.value=!!p.value,y.value=`第二图：${m.name}，${m.reference}。`}catch(m){l===L&&(c.value=m.message)}finally{l===L&&(s.value=!1)}l===L&&!c.value&&await Z()}async function on(){const h=n.value;await ge(Mn(D.value,i.value)),!(n.value!==h||c.value)&&(oe(D.value,i.value)&&await ze(),n.value===h&&!c.value&&await Z())}function ln(){O(),r.value=o.value,M.value=o.value?.sampleId||null,p.value=null,i.value=be(D.value),A.value=!1,c.value="",y.value="已恢复原始图片与默认参数"}function dn(){p.value&&(O(),r.value={...p.value.output,name:"上次处理结果"},M.value=null,p.value=null,A.value=!1,y.value="已将结果作为下一次输入，可切换实验继续处理。")}function un(h){O(),L++,s.value=!1,t.value=h.chapter,n.value=h.experimentId,i.value={...h.params},r.value=h.source,o.value=h.original,u.value=h.second,M.value=h.source.sampleId||null,p.value=h.result,te.value=h,A.value=!1,B.value="",c.value="",y.value="已恢复记录中的图片、参数和结果。",W.value=!1}function $e(h=Te.value){if(h)try{ar(h,{input:ie(h.result.input),output:ie(h.result.output),second:h.second?ie(h.second):null}),y.value="已导出成功运行时的实验报告，可离线打开或打印为 PDF。"}catch(l){c.value=l.message||"报告导出失败，请重试。"}}function Le(h){h.key==="Enter"&&h.ctrlKey&&(h.preventDefault(),Z())}return He(async()=>{document.addEventListener("keydown",Le),await ge(),await Z()}),fn(()=>{O(),T.dispose(),document.removeEventListener("keydown",Le)}),(h,l)=>(v(),G(b(An),{theme:b(H)?b(kn):null,"theme-overrides":b(Bn),locale:b(In)},{default:k(()=>[a("header",rr,[l[15]||(l[15]=a("a",{class:"brand",href:"#"},[a("span",{class:"brand-symbol","aria-hidden":"true"},[a("i"),a("i"),a("i"),a("i")]),a("strong",null,"像素实验室"),a("span",{class:"brand-en"},"IMAGE PROCESSING LAB")],-1)),a("div",tr,[l[14]||(l[14]=a("span",{class:"course-label"},"数字图像处理 · 课程工作台",-1)),C(b($),{size:"small",quaternary:"",class:"history-trigger",onClick:l[0]||(l[0]=m=>W.value=!0)},{default:k(()=>[l[13]||(l[13]=w("实验记录 ",-1)),a("span",ir,f(ee.value.length),1)]),_:1}),C(oa)])]),a("main",null,[a("section",sr,[a("div",or,[l[20]||(l[20]=a("span",{class:"eyebrow"},"DIGITAL IMAGE PROCESSING / 课程实验",-1)),l[21]||(l[21]=a("h1",null,[w("数字图像处理实验室"),a("span",{class:"title-dot"},".")],-1)),l[22]||(l[22]=a("p",null,"从课件中的一幅原图开始，观察像素变化，理解每一行 Python。",-1)),a("div",lr,[l[16]||(l[16]=a("span",null,"刘兴庭 · 数字图像处理",-1)),l[17]||(l[17]=a("i",null,null,-1)),l[18]||(l[18]=a("span",null,"第 2—4 章",-1)),l[19]||(l[19]=a("i",null,null,-1)),a("span",null,f(b(Y).length)+" 项交互实验",1)])]),a("div",dr,[(v(!0),x(E,null,q(b(Qe),(m,R)=>(v(),x("button",{key:m.id,disabled:d.value||s.value,onClick:ve=>he(m.id),"aria-label":"使用课件图片："+m.name},[a("img",{src:b(pe)(m),alt:m.name},null,8,pr),a("span",null,[a("b",null,f(String(R+1).padStart(2,"0")),1),w(f(m.name.split(" · ")[0]),1)])],8,ur))),128)),l[23]||(l[23]=a("p",null,[w("图像选自课程原例 "),a("span",null,"COURSE IMAGES")],-1))])]),a("nav",cr,[(v(!0),x(E,null,q(b(Ee),m=>(v(),G(b($),{key:m.id,type:t.value===m.id?"primary":"default",secondary:t.value===m.id,quaternary:t.value!==m.id,class:V(["chapter-button",{active:t.value===m.id}]),"aria-current":t.value===m.id?"page":void 0,onClick:R=>rn(m.id)},{default:k(()=>[a("span",mr,f(m.number),1),a("span",null,f(m.name),1),a("small",null,f(b(Y).filter(R=>R.chapter===m.id).length),1)]),_:2},1032,["type","secondary","quaternary","class","aria-current","onClick"]))),128))]),a("section",fr,[a("aside",gr,[a("div",hr,[l[24]||(l[24]=a("span",null,"实验目录",-1)),a("small",null,f(nn.value.number),1)]),C(b(Ve),{class:"experiment-search",size:"small",value:B.value,"onUpdate:value":l[1]||(l[1]=m=>B.value=m),clearable:"",placeholder:"查找本章实验","input-props":{"aria-label":"查找本章实验"}},{prefix:k(()=>[...l[25]||(l[25]=[a("span",{"aria-hidden":"true"},"⌕",-1)])]),_:1},8,["value"]),C(ue,{class:"mobile-experiment-picker","control-id":"mobile-experiment",label:"实验目录",value:n.value,options:b(Y).filter(m=>m.chapter===t.value).map(m=>({value:m.id,label:m.name})),"onUpdate:value":fe},null,8,["value","options"]),a("div",vr,[(v(!0),x(E,null,q(Be.value,(m,R)=>(v(),G(b($),{key:m.id,block:"",type:n.value===m.id?"primary":"default",secondary:n.value===m.id,quaternary:n.value!==m.id,"aria-pressed":n.value===m.id,class:V({active:n.value===m.id}),onClick:ve=>fe(m.id)},{default:k(()=>[a("span",yr,f(String(R+1).padStart(2,"0")),1),a("span",null,f(m.name),1),n.value===m.id?(v(),x("span",br,"↗")):N("",!0)]),_:2},1032,["type","secondary","quaternary","aria-pressed","class","onClick"]))),128)),Be.value.length?N("",!0):(v(),x("p",wr,"本章没有匹配的实验。"))]),l[26]||(l[26]=a("div",{class:"nav-foot"},[a("span",{class:"status-dot"}),w("图片仅在本地处理"),a("br"),a("small",null,"课件原文与代码对照")],-1))]),a("div",xr,[a("div",Ir,[a("div",kr,[X.value?(v(),x("img",{key:0,class:"sample-miniature",src:b(pe)(X.value),alt:"当前课件样例"},null,8,Ar)):N("",!0),a("div",Cr,[l[27]||(l[27]=a("label",{for:"sample-choice"},"图像素材",-1)),C(ue,{"control-id":"sample-choice",label:"教学样例",placeholder:r.value?.name||"选择课件图片",value:M.value,options:b(Tn),disabled:s.value||d.value,"onUpdate:value":he},null,8,["placeholder","value","options","disabled"])])]),a("div",Br,[C(b($),{size:"small",quaternary:"",disabled:s.value||d.value,onClick:l[2]||(l[2]=m=>Ne(!1))},{default:k(()=>[...l[28]||(l[28]=[w("浏览课件图片",-1)])]),_:1},8,["disabled"]),C(b($),{size:"small",secondary:"",disabled:s.value||d.value,onClick:on},{default:k(()=>[...l[29]||(l[29]=[w("使用推荐图",-1)])]),_:1},8,["disabled"]),C(qe,{disabled:s.value||d.value,onFile:_e},null,8,["disabled"])])]),a("div",Tr,[a("div",Mr,[a("div",Pr,[a("div",null,[l[30]||(l[30]=a("span",{class:"eyebrow"},"01 / IMAGE EXPERIMENT",-1)),a("h2",null,[w(f(D.value.name),1),a("span",Rr,f(d.value?"计算中":s.value?"载入中":"交互实验"),1)])]),a("div",_r,[C(b($),{size:"tiny",secondary:F.value!=="slider"||!j.value,quaternary:F.value==="slider"&&j.value,"aria-pressed":F.value!=="slider"||!j.value,onClick:l[3]||(l[3]=m=>F.value="side")},{default:k(()=>[...l[31]||(l[31]=[w("并排",-1)])]),_:1},8,["secondary","quaternary","aria-pressed"]),C(b($),{size:"tiny",secondary:F.value==="slider"&&j.value,quaternary:F.value!=="slider"||!j.value,"aria-pressed":F.value==="slider"&&j.value,disabled:!j.value,title:j.value?"滑动分界线比较前后图像":"需先运行，且输入输出尺寸相同",onClick:l[4]||(l[4]=m=>F.value="slider")},{default:k(()=>[...l[32]||(l[32]=[w("滑动",-1)])]),_:1},8,["secondary","quaternary","aria-pressed","disabled","title"])])]),C(Ta,{input:ne.value,output:U.value,busy:d.value,stale:A.value,mode:j.value?F.value:"side",onInspect:l[5]||(l[5]=m=>re.value=m)},null,8,["input","output","busy","stale","mode"]),a("div",zr,[a("span",{class:"file-name",title:r.value?.name},[a("span",null,f(X.value?X.value.name:r.value?.name||"正在载入…"),1),X.value?(v(),x("small",$r,f(X.value.reference),1)):N("",!0)],8,Nr),a("div",null,[C(b($),{size:"small",quaternary:"",onClick:ln,disabled:s.value||!o.value},{default:k(()=>[...l[33]||(l[33]=[w(" 恢复原图",-1)])]),_:1},8,["disabled"]),C(b($),{size:"small",quaternary:"",onClick:dn,disabled:d.value||!p.value},{default:k(()=>[...l[34]||(l[34]=[w(" 结果作为输入",-1)])]),_:1},8,["disabled"]),C(b($),{size:"small",quaternary:"",onClick:l[6]||(l[6]=m=>b(va)(U.value,`${n.value}-result.png`)),disabled:d.value||!U.value},{default:k(()=>[...l[35]||(l[35]=[w(" 下载 PNG ↓ ",-1)])]),_:1},8,["disabled"]),C(b($),{size:"small",quaternary:"",disabled:d.value||!Te.value,title:"导出上次成功运行的参数、图像和 Python 代码",onClick:l[7]||(l[7]=m=>$e())},{default:k(()=>[...l[36]||(l[36]=[w("导出报告",-1)])]),_:1},8,["disabled"])])]),a("div",Lr,[p.value?(v(),x("span",Sr,[w("Python · "+f(p.value.milliseconds)+" ms ",1),l[37]||(l[37]=a("span",{class:"status-separator"},"/",-1)),w(" 工作图 "+f(p.value.input.width)+" × "+f(p.value.input.height)+" ",1),p.value.changed?(v(),x(E,{key:0},[w("（由输入重采样）")],64)):N("",!0)])):(v(),x("span",Gr,"等待运行 · Ctrl + Enter 快捷执行"))]),D.value.limit?(v(),x("p",Dr,[w(" 此实验工作图最长边 ≤ "+f(D.value.limit)+" px。",1),D.value.power?(v(),x(E,{key:0},[w("两边重采样到 2 的幂次，宽高比可能轻微变化。")],64)):N("",!0),l[38]||(l[38]=w("左侧展示实际参与运算的输入；结果不回填到原尺寸。 ",-1))])):N("",!0),c.value?(v(),G(b(Ge),{key:1,type:"error","show-icon":!1,class:"notice-alert",role:"alert"},{default:k(()=>[w(f(c.value),1)]),_:1})):y.value&&y.value!=="处理完成"?(v(),G(b(Ge),{key:2,class:"notice-alert",type:"info","show-icon":!1,role:"status"},{default:k(()=>[w(f(y.value),1)]),_:1})):N("",!0)]),C(ga,{experiment:D.value,params:i.value,busy:d.value,loading:s.value,"second-name":u.value?.name,"second-sample-label":en.value,onUpdate:tn,onRun:Z,onCancel:O,onSecond:l[8]||(l[8]=m=>_e(m,!0)),onSecondSample:ze,onSecondGallery:l[9]||(l[9]=m=>Ne(!0))},null,8,["experiment","params","busy","loading","second-name","second-sample-label"])])])]),a("section",Fr,[a("div",Er,[l[39]||(l[39]=a("span",{class:"eyebrow"},"理解这个实验",-1)),l[40]||(l[40]=a("h2",null,"像素为什么会变化？",-1)),a("p",null,f(D.value.description),1),a("a",Or,"▤ "+f(D.value.source),1)]),a("div",jr,[a("div",Hr,f(D.value.formula),1),l[41]||(l[41]=a("div",{class:"histogram-heading"},[a("span",null,"灰度直方图"),a("div",null,[a("span",{class:"hist-legend before"}),w("输入 "),a("span",{class:"hist-legend after"}),w("结果 ")])],-1)),(v(),x("svg",Yr,[a("path",{d:Re(Me.value),class:"hist-before"},null,8,Vr),a("path",{d:Re(Pe.value),class:"hist-after"},null,8,Ur)])),l[42]||(l[42]=a("div",{class:"hist-axis"},[a("span",null,"0 · 暗"),a("span",null,"255 · 亮")],-1))])]),C(Jn,{input:ne.value,output:U.value,point:re.value,ready:!!p.value,stale:A.value},null,8,["input","output","point","ready","stale"]),C(Wa,{experiment:D.value,params:i.value},null,8,["experiment","params"]),C(Dn,{show:g.value,"onUpdate:show":l[10]||(l[10]=m=>g.value=m),secondary:I.value,selected:I.value?u.value?.sampleId:r.value?.sampleId,onSelect:sn},null,8,["show","secondary","selected"]),C(ia,{show:W.value,"onUpdate:show":l[11]||(l[11]=m=>W.value=m),entries:ee.value,disabled:d.value||s.value,onRestore:un,onExport:$e,onClear:l[12]||(l[12]=m=>ee.value=[])},null,8,["show","entries","disabled"]),l[43]||(l[43]=a("footer",{id:"course-sources"},[a("div",null,[a("strong",null,"像素实验室"),a("p",null," 课程依据：刘兴庭《数字图像处理》第 2、3、4 章课件。补充实验已单独标注。 "),a("p",null," 图像素材选自所提供课件，来源页码随图片展示。图片仅在当前浏览器内处理。 ")]),a("a",{href:"#"},"返回顶部 ↑")],-1))])]),_:1},8,["theme","theme-overrides","locale"]))}};gn(qr).mount("#app");
