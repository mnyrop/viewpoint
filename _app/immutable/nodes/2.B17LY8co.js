import{s as de,n as ne,d as dt,y as ue,u as mt,g as _t,e as gt,z as Me,A as vt,b as qt,B as Et,h as kt,c as ae,C as fe,r as bt,f as Pe,o as yt,D as Xe}from"../chunks/scheduler.CyqyXQQ-.js";import{S as me,i as _e,y as Ne,H as It,z as Le,a as C,A as Ct,d as g,f as L,B as ve,C as x,o as S,m as O,u as Q,v as X,w as Y,x as Z,s as D,l as ze,h as N,q as He,n as Ue,D as be,E as Mt,e as q,c as E,F as he,b as m,j as _,G as ke,I as re,t as W,g as J,J as Te,k as Ve,K as Ye,L as Ze,M as zt}from"../chunks/index.BiUZxXfI.js";import{b as qe}from"../chunks/paths.C8PAqJ9g.js";import{q as Tt}from"../chunks/base.C7euzKDi.js";import{w as je}from"../chunks/index.D6XWBd7Z.js";function le(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Se(l,e){const t={},s={},n={$$scope:1};let i=l.length;for(;i--;){const a=l[i],f=e[i];if(f){for(const h in a)h in f||(s[h]=1);for(const h in f)n[h]||(t[h]=f[h],n[h]=1);l[i]=f}else for(const h in a)n[h]=1}for(const a in s)a in t||(t[a]=void 0);return t}function Vt(l){return typeof l=="object"&&l!==null?l:{}}const Oe="viewpoint",xe="embeddable iiif viewers with svelte-kit",Ee=["https://purl.stanford.edu/wr796rv9498/iiif/manifest","https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json","https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json","https://jsonstorage.net/api/items/1a6e2d6e-fa90-4d44-95a5-35bb6c011aa2","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json"],Dt="URI input",pt=[{id:"mirador",label:"Mirador",options:[{id:"theme",label:"Theme",values:["Dark","Light"],icon:"paintBrush"},{id:"view",label:"View style",values:["Single","Book","Gallery"]},{id:"thumbs",label:"Thumbnail view",values:["Off","Right","Bottom"]},{id:"workspacecontrols",label:"Show controls",values:["False","True"],icon:"cog"}]}],Nt="03/06/24 @ 01:00 EST";function Lt(l){let e,t;return{c(){e=Ne("g"),t=new It(!0),this.h()},l(s){e=Le(s,"g",{});var n=C(e);t=Ct(n,!0),n.forEach(g),this.h()},h(){t.a=null},m(s,n){L(s,e,n),t.m(l[0],e)},p(s,[n]){n&1&&t.p(s[0])},i:ne,o:ne,d(s){s&&g(e)}}}function jt(l,e,t){let s=870711;function n(){return s+=1,`fa-${s.toString(16)}`}let i="",{data:a}=e;function f(h){if(!h||!h.raw)return"";let r=h.raw;const p={};return r=r.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(y,v)=>{const c=n();return p[v]=c,` id="${c}"`}),r=r.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(y,v,c,w)=>{const b=v||w;return!b||!p[b]?y:`#${p[b]}`}),r}return l.$$set=h=>{"data"in h&&t(1,a=h.data)},l.$$.update=()=>{l.$$.dirty&2&&t(0,i=f(a))},[i,a]}class St extends me{constructor(e){super(),_e(this,e,jt,Lt,de,{data:1})}}function Bt(l){let e,t,s,n;const i=l[12].default,a=dt(i,l,l[11],null);let f=[{version:"1.1"},{class:t="fa-icon "+l[0]},{width:l[1]},{height:l[2]},{"aria-label":l[9]},{role:s=l[9]?"img":"presentation"},{viewBox:l[3]},{style:l[8]},l[10]],h={};for(let r=0;r<f.length;r+=1)h=ue(h,f[r]);return{c(){e=Ne("svg"),a&&a.c(),this.h()},l(r){e=Le(r,"svg",{version:!0,class:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var p=C(e);a&&a.l(p),p.forEach(g),this.h()},h(){ve(e,h),x(e,"fa-spin",l[4]),x(e,"fa-pulse",l[6]),x(e,"fa-inverse",l[5]),x(e,"fa-flip-horizontal",l[7]==="horizontal"),x(e,"fa-flip-vertical",l[7]==="vertical"),x(e,"svelte-1mc5hvj",!0)},m(r,p){L(r,e,p),a&&a.m(e,null),n=!0},p(r,[p]){a&&a.p&&(!n||p&2048)&&mt(a,i,r,r[11],n?gt(i,r[11],p,null):_t(r[11]),null),ve(e,h=Se(f,[{version:"1.1"},(!n||p&1&&t!==(t="fa-icon "+r[0]))&&{class:t},(!n||p&2)&&{width:r[1]},(!n||p&4)&&{height:r[2]},(!n||p&512)&&{"aria-label":r[9]},(!n||p&512&&s!==(s=r[9]?"img":"presentation"))&&{role:s},(!n||p&8)&&{viewBox:r[3]},(!n||p&256)&&{style:r[8]},p&1024&&r[10]])),x(e,"fa-spin",r[4]),x(e,"fa-pulse",r[6]),x(e,"fa-inverse",r[5]),x(e,"fa-flip-horizontal",r[7]==="horizontal"),x(e,"fa-flip-vertical",r[7]==="vertical"),x(e,"svelte-1mc5hvj",!0)},i(r){n||(S(a,r),n=!0)},o(r){O(a,r),n=!1},d(r){r&&g(e),a&&a.d(r)}}}function Ot(l,e,t){const s=["class","width","height","box","spin","inverse","pulse","flip","style","label"];let n=Me(e,s),{$$slots:i={},$$scope:a}=e,{class:f=""}=e,{width:h}=e,{height:r}=e,{box:p="0 0 0 0"}=e,{spin:y=!1}=e,{inverse:v=!1}=e,{pulse:c=!1}=e,{flip:w="none"}=e,{style:b=""}=e,{label:I=""}=e;return l.$$set=u=>{e=ue(ue({},e),vt(u)),t(10,n=Me(e,s)),"class"in u&&t(0,f=u.class),"width"in u&&t(1,h=u.width),"height"in u&&t(2,r=u.height),"box"in u&&t(3,p=u.box),"spin"in u&&t(4,y=u.spin),"inverse"in u&&t(5,v=u.inverse),"pulse"in u&&t(6,c=u.pulse),"flip"in u&&t(7,w=u.flip),"style"in u&&t(8,b=u.style),"label"in u&&t(9,I=u.label),"$$scope"in u&&t(11,a=u.$$scope)},[f,h,r,p,y,v,c,w,b,I,n,a,i]}class At extends me{constructor(e){super(),_e(this,e,Ot,Bt,de,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,style:8,label:9})}}function $e(l,e,t){const s=l.slice();return s[24]=e[t],s}function et(l,e,t){const s=l.slice();return s[27]=e[t],s}function tt(l){let e,t=[l[27]],s={};for(let n=0;n<t.length;n+=1)s=ue(s,t[n]);return{c(){e=Ne("path"),this.h()},l(n){e=Le(n,"path",{}),C(e).forEach(g),this.h()},h(){ve(e,s)},m(n,i){L(n,e,i)},p(n,i){ve(e,s=Se(t,[i&64&&n[27]]))},d(n){n&&g(e)}}}function lt(l){let e,t=[l[24]],s={};for(let n=0;n<t.length;n+=1)s=ue(s,t[n]);return{c(){e=Ne("polygon"),this.h()},l(n){e=Le(n,"polygon",{}),C(e).forEach(g),this.h()},h(){ve(e,s)},m(n,i){L(n,e,i)},p(n,i){ve(e,s=Se(t,[i&64&&n[24]]))},d(n){n&&g(e)}}}function st(l){let e,t,s;function n(a){l[16](a)}let i={};return l[6]!==void 0&&(i.data=l[6]),e=new St({props:i}),qt.push(()=>Mt(e,"data",n)),{c(){Q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,f){Y(e,a,f),s=!0},p(a,f){const h={};!t&&f&64&&(t=!0,h.data=a[6],Et(()=>t=!1)),e.$set(h)},i(a){s||(S(e.$$.fragment,a),s=!0)},o(a){O(e.$$.fragment,a),s=!1},d(a){Z(e,a)}}}function Rt(l){var p,y,v;let e,t,s,n,i=le(((p=l[6])==null?void 0:p.paths)||[]),a=[];for(let c=0;c<i.length;c+=1)a[c]=tt(et(l,i,c));let f=le(((y=l[6])==null?void 0:y.polygons)||[]),h=[];for(let c=0;c<f.length;c+=1)h[c]=lt($e(l,f,c));let r=((v=l[6])==null?void 0:v.raw)&&st(l);return{c(){for(let c=0;c<a.length;c+=1)a[c].c();e=D();for(let c=0;c<h.length;c+=1)h[c].c();t=D(),r&&r.c(),s=ze()},l(c){for(let w=0;w<a.length;w+=1)a[w].l(c);e=N(c);for(let w=0;w<h.length;w+=1)h[w].l(c);t=N(c),r&&r.l(c),s=ze()},m(c,w){for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(c,w);L(c,e,w);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(c,w);L(c,t,w),r&&r.m(c,w),L(c,s,w),n=!0},p(c,w){var b,I,u;if(w&64){i=le(((b=c[6])==null?void 0:b.paths)||[]);let d;for(d=0;d<i.length;d+=1){const o=et(c,i,d);a[d]?a[d].p(o,w):(a[d]=tt(o),a[d].c(),a[d].m(e.parentNode,e))}for(;d<a.length;d+=1)a[d].d(1);a.length=i.length}if(w&64){f=le(((I=c[6])==null?void 0:I.polygons)||[]);let d;for(d=0;d<f.length;d+=1){const o=$e(c,f,d);h[d]?h[d].p(o,w):(h[d]=lt(o),h[d].c(),h[d].m(t.parentNode,t))}for(;d<h.length;d+=1)h[d].d(1);h.length=f.length}(u=c[6])!=null&&u.raw?r?(r.p(c,w),w&64&&S(r,1)):(r=st(c),r.c(),S(r,1),r.m(s.parentNode,s)):r&&(He(),O(r,1,1,()=>{r=null}),Ue())},i(c){n||(S(r),n=!0)},o(c){O(r),n=!1},d(c){c&&(g(e),g(t),g(s)),be(a,c),be(h,c),r&&r.d(c)}}}function Pt(l){let e;const t=l[15].default,s=dt(t,l,l[17],null),n=s||Rt(l);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){s?s.p&&(!e||a&131072)&&mt(s,t,i,i[17],e?gt(t,i[17],a,null):_t(i[17]),null):n&&n.p&&(!e||a&64)&&n.p(i,e?a:-1)},i(i){e||(S(n,i),e=!0)},o(i){O(n,i),e=!1},d(i){n&&n.d(i)}}}function Ht(l){let e,t;const s=[{label:l[5]},{width:l[7]},{height:l[8]},{box:l[10]},{style:l[9]},{spin:l[1]},{flip:l[4]},{inverse:l[2]},{pulse:l[3]},{class:l[0]},l[11]];let n={$$slots:{default:[Pt]},$$scope:{ctx:l}};for(let i=0;i<s.length;i+=1)n=ue(n,s[i]);return e=new At({props:n}),{c(){Q(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,a){Y(e,i,a),t=!0},p(i,[a]){const f=a&4031?Se(s,[a&32&&{label:i[5]},a&128&&{width:i[7]},a&256&&{height:i[8]},a&1024&&{box:i[10]},a&512&&{style:i[9]},a&2&&{spin:i[1]},a&16&&{flip:i[4]},a&4&&{inverse:i[2]},a&8&&{pulse:i[3]},a&1&&{class:i[0]},a&2048&&Vt(i[11])]):{};a&131136&&(f.$$scope={dirty:a,ctx:i}),e.$set(f)},i(i){t||(S(e.$$.fragment,i),t=!0)},o(i){O(e.$$.fragment,i),t=!1},d(i){Z(e,i)}}}let nt=1;function Ut(l){let e,t;if(l)if("definition"in l){console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");return}else if("iconName"in l&&"icon"in l){e=l.iconName;const[s,n,,,i]=l.icon,a=Array.isArray(i)?i:[i];t={width:s,height:n,paths:a.map(f=>({d:f}))}}else e=Object.keys(l)[0],t=l[e];else return;return t}function Ft(l,e,t){const s=["class","data","scale","spin","inverse","pulse","flip","label","style"];let n=Me(e,s),{$$slots:i={},$$scope:a}=e,{class:f=""}=e,{data:h}=e,r,{scale:p=1}=e,{spin:y=!1}=e,{inverse:v=!1}=e,{pulse:c=!1}=e,{flip:w=void 0}=e,{label:b=""}=e,{style:I=""}=e,u=10,d=10,o,M;function z(){let k=1;return typeof p<"u"&&(k=Number(p)),isNaN(k)||k<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),nt):k*nt}function j(){return r?`0 0 ${r.width} ${r.height}`:`0 0 ${u} ${d}`}function B(){return r?Math.max(r.width,r.height)/16:1}function A(){return r?r.width/B()*z():0}function P(){return r?r.height/B()*z():0}function $(){let k="";I!==null&&(k+=I);let T=z();return T===1?k.length===0?"":k:(k!==""&&!k.endsWith(";")&&(k+="; "),`${k}font-size: ${T}em`)}function U(k){r=k,t(6,r),t(12,h),t(14,I),t(13,p)}return l.$$set=k=>{e=ue(ue({},e),vt(k)),t(11,n=Me(e,s)),"class"in k&&t(0,f=k.class),"data"in k&&t(12,h=k.data),"scale"in k&&t(13,p=k.scale),"spin"in k&&t(1,y=k.spin),"inverse"in k&&t(2,v=k.inverse),"pulse"in k&&t(3,c=k.pulse),"flip"in k&&t(4,w=k.flip),"label"in k&&t(5,b=k.label),"style"in k&&t(14,I=k.style),"$$scope"in k&&t(17,a=k.$$scope)},l.$$.update=()=>{l.$$.dirty&28672&&(t(6,r=Ut(h)),t(7,u=A()),t(8,d=P()),t(9,o=$()),t(10,M=j()))},[f,y,v,c,w,b,r,u,d,o,M,n,h,p,I,i,U,a]}class ge extends me{constructor(e){super(),_e(this,e,Ft,Ht,de,{class:0,data:12,scale:13,spin:1,inverse:2,pulse:3,flip:4,label:5,style:14})}}const Gt={remove:{width:1408,height:1792,paths:[{d:"M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"}]}},wt={minus:{width:1408,height:1792,paths:[{d:"M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"}]}},Kt={"external-link":{width:1792,height:1792,paths:[{d:"M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zM1792 64v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"}]}},Wt={github:{width:1536,height:1792,paths:[{d:"M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z"}]}},Jt={copy:{width:1792,height:1792,paths:[{d:"M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"}]}};function it(l,{delay:e=0,duration:t=400,easing:s=kt}={}){const n=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:s,css:i=>`opacity: ${i*n}`}}const ce=je(),De=je(),Ae=je(""),ye=je({});var Qt={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};function at(l,e,t){const s=l.slice();return s[10]=e[t],s[11]=e,s[12]=t,s}function Xt(l){let e,t,s,n,i;t=new ge({props:{data:wt}});function a(){return l[5](l[12])}return{c(){e=q("button"),Q(t.$$.fragment),this.h()},l(f){e=E(f,"BUTTON",{title:!0,class:!0});var h=C(e);X(t.$$.fragment,h),h.forEach(g),this.h()},h(){m(e,"title","Remove"),m(e,"class","button is-small")},m(f,h){L(f,e,h),Y(t,e,null),s=!0,n||(i=re(e,"click",a),n=!0)},p(f,h){l=f},i(f){s||(S(t.$$.fragment,f),s=!0)},o(f){O(t.$$.fragment,f),s=!1},d(f){f&&g(e),Z(t),n=!1,i()}}}function Yt(l){let e,t,s;return t=new ge({props:{data:wt}}),{c(){e=q("button"),Q(t.$$.fragment),this.h()},l(n){e=E(n,"BUTTON",{title:!0,class:!0});var i=C(e);X(t.$$.fragment,i),i.forEach(g),this.h()},h(){m(e,"title","Remove"),m(e,"class","button is-small"),e.disabled=!0},m(n,i){L(n,e,i),Y(t,e,null),s=!0},p:ne,i(n){s||(S(t.$$.fragment,n),s=!0)},o(n){O(t.$$.fragment,n),s=!1},d(n){n&&g(e),Z(t)}}}function rt(l){let e,t,s,n,i,a,f,h,r="URI:",p,y,v,c,w,b,I,u,d,o,M,z,j;const B=[Yt,Xt],A=[];function P(T,V){return T[12]==0?0:1}s=P(l),n=A[s]=B[s](l);function $(){l[6].call(y,l[11],l[12])}b=new ge({props:{data:Qt}});function U(){return l[7](l[12])}o=new ge({props:{data:Gt}});function k(){return l[8](l[12])}return{c(){e=q("div"),t=q("div"),n.c(),i=D(),a=q("div"),f=q("label"),h=q("span"),h.textContent=r,p=D(),y=q("input"),v=D(),c=q("div"),w=q("button"),Q(b.$$.fragment),I=D(),u=q("div"),d=q("button"),Q(o.$$.fragment),this.h()},l(T){e=E(T,"DIV",{class:!0});var V=C(e);t=E(V,"DIV",{class:!0});var oe=C(t);n.l(oe),oe.forEach(g),i=N(V),a=E(V,"DIV",{class:!0});var ee=C(a);f=E(ee,"LABEL",{});var H=C(f);h=E(H,"SPAN",{class:!0,"data-svelte-h":!0}),he(h)!=="svelte-vzqbgi"&&(h.textContent=r),p=N(H),y=E(H,"INPUT",{class:!0,type:!0,placeholder:!0}),H.forEach(g),ee.forEach(g),v=N(V),c=E(V,"DIV",{class:!0});var ie=C(c);w=E(ie,"BUTTON",{title:!0,class:!0});var G=C(w);X(b.$$.fragment,G),G.forEach(g),ie.forEach(g),I=N(V),u=E(V,"DIV",{class:!0});var K=C(u);d=E(K,"BUTTON",{title:!0,class:!0});var se=C(d);X(o.$$.fragment,se),se.forEach(g),K.forEach(g),V.forEach(g),this.h()},h(){m(t,"class","control"),m(h,"class","is-hidden"),m(y,"class","input is-expanded is-small is-visible"),m(y,"type","text"),m(y,"placeholder",Dt),m(a,"class","control fullwidth"),m(w,"title","Random"),m(w,"class","button is-success is-small"),m(c,"class","control"),m(d,"title","Clear"),m(d,"class","button is-danger is-small"),m(u,"class","control"),m(e,"class","field has-addons fullwidth")},m(T,V){L(T,e,V),_(e,t),A[s].m(t,null),_(e,i),_(e,a),_(a,f),_(f,h),_(f,p),_(f,y),ke(y,l[10]),_(e,v),_(e,c),_(c,w),Y(b,w,null),_(e,I),_(e,u),_(u,d),Y(o,d,null),M=!0,z||(j=[re(y,"input",$),re(w,"click",U),re(d,"click",k)],z=!0)},p(T,V){l=T,n.p(l,V),V&1&&y.value!==l[10]&&ke(y,l[10])},i(T){M||(S(n),S(b.$$.fragment,T),S(o.$$.fragment,T),M=!0)},o(T){O(n),O(b.$$.fragment,T),O(o.$$.fragment,T),M=!1},d(T){T&&g(e),A[s].d(),Z(b),Z(o),z=!1,bt(j)}}}function Zt(l){let e,t="Add another +",s,n;return{c(){e=q("button"),e.textContent=t,this.h()},l(i){e=E(i,"BUTTON",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-18z1vdc"&&(e.textContent=t),this.h()},h(){m(e,"class","subtitle is-7 p-0 button has-text-white is-ghost")},m(i,a){L(i,e,a),s||(n=re(e,"click",l[4]),s=!0)},p:ne,d(i){i&&g(e),s=!1,n()}}}function xt(l){let e,t,s;return{c(){e=q("p"),t=W(Re),s=W(" items is the current maximum"),this.h()},l(n){e=E(n,"P",{class:!0});var i=C(e);t=J(i,Re),s=J(i," items is the current maximum"),i.forEach(g),this.h()},h(){m(e,"class","subtitle is-7")},m(n,i){L(n,e,i),_(e,t),_(e,s)},p:ne,d(n){n&&g(e)}}}function $t(l){let e,t,s,n="<legend>IIIF Manifest(s)</legend>",i,a,f="Input your own URI or use a random example.",h,r,p,y=le(l[0]),v=[];for(let u=0;u<y.length;u+=1)v[u]=rt(at(l,y,u));const c=u=>O(v[u],1,1,()=>{v[u]=null});function w(u,d){return u[0].length>=Re?xt:Zt}let b=w(l),I=b(l);return{c(){e=q("form"),t=q("fieldset"),s=q("h2"),s.innerHTML=n,i=D(),a=q("p"),a.textContent=f,h=D();for(let u=0;u<v.length;u+=1)v[u].c();r=D(),I.c(),this.h()},l(u){e=E(u,"FORM",{});var d=C(e);t=E(d,"FIELDSET",{});var o=C(t);s=E(o,"H2",{class:!0,"data-svelte-h":!0}),he(s)!=="svelte-58tfxo"&&(s.innerHTML=n),i=N(o),a=E(o,"P",{class:!0,"data-svelte-h":!0}),he(a)!=="svelte-1bid6ea"&&(a.textContent=f),h=N(o);for(let M=0;M<v.length;M+=1)v[M].l(o);r=N(o),I.l(o),o.forEach(g),d.forEach(g),this.h()},h(){m(s,"class","title is-6 mt-5"),m(a,"class","subtitle is-7")},m(u,d){L(u,e,d),_(e,t),_(t,s),_(t,i),_(t,a),_(t,h);for(let o=0;o<v.length;o+=1)v[o]&&v[o].m(t,null);_(t,r),I.m(t,null),p=!0},p(u,[d]){if(d&15){y=le(u[0]);let o;for(o=0;o<y.length;o+=1){const M=at(u,y,o);v[o]?(v[o].p(M,d),S(v[o],1)):(v[o]=rt(M),v[o].c(),S(v[o],1),v[o].m(t,r))}for(He(),o=y.length;o<v.length;o+=1)c(o);Ue()}b===(b=w(u))&&I?I.p(u,d):(I.d(1),I=b(u),I&&(I.c(),I.m(t,null)))},i(u){if(!p){for(let d=0;d<y.length;d+=1)S(v[d]);p=!0}},o(u){v=v.filter(Boolean);for(let d=0;d<v.length;d+=1)O(v[d]);p=!1},d(u){u&&g(e),be(v,u),I.d()}}}let Re=4;function el(l,e,t){let s,n;ae(l,ce,c=>t(0,s=c)),ae(l,ye,c=>t(9,n=c));function i(c){fe(ce,s[c]="",s)}function a(c){let w=s.length,b=s.slice(0,c).concat(s.slice(c+1,w));fe(ce,s=b,s)}function f(c){for(;;){let w=Math.floor(Math.random()*Ee.length),b=Ee[w];if(b!==s[c]){fe(ce,s[c]=b,s);break}}}function h(){let c=s.length;fe(ce,s[c]=Ee[c],s)}const r=c=>a(c);function p(c,w){c[w]=this.value,ce.set(s)}const y=c=>f(c),v=c=>i(c);return l.$$.update=()=>{l.$$.dirty&1&&fe(ye,n.manifests=s,n)},[s,i,a,f,h,r,p,y,v]}class tl extends me{constructor(e){super(),_e(this,e,el,$t,de,{})}}function ot(l,e,t){const s=l.slice();return s[4]=e[t],s[5]=e,s[6]=t,s}function ct(l,e,t){const s=l.slice();return s[7]=e[t],s}function ll(l,e,t){const s=l.slice();return s[10]=e[t],s}function sl(l){let e,t=l[10].label+"",s;return{c(){e=q("option"),s=W(t),this.h()},l(n){e=E(n,"OPTION",{});var i=C(e);s=J(i,t),i.forEach(g),this.h()},h(){e.__value=l[10],ke(e,e.__value)},m(n,i){L(n,e,i),_(e,s)},p:ne,d(n){n&&g(e)}}}function ft(l){let e,t=l[7]+"",s,n;return{c(){e=q("option"),s=W(t),this.h()},l(i){e=E(i,"OPTION",{});var a=C(e);s=J(a,t),a.forEach(g),this.h()},h(){e.__value=n=l[7].toLowerCase(),ke(e,e.__value)},m(i,a){L(i,e,a),_(e,s)},p(i,a){a&1&&t!==(t=i[7]+"")&&Ve(s,t),a&1&&n!==(n=i[7].toLowerCase())&&(e.__value=n,ke(e,e.__value))},d(i){i&&g(e)}}}function ut(l){let e,t,s=l[4].label+"",n,i,a,f,h,r,p,y,v,c,w=le(l[4].values),b=[];for(let u=0;u<w.length;u+=1)b[u]=ft(ct(l,w,u));function I(){l[3].call(r,l[4])}return{c(){e=q("div"),t=q("label"),n=W(s),a=D(),f=q("div"),h=q("div"),r=q("select");for(let u=0;u<b.length;u+=1)b[u].c();y=D(),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=C(e);t=E(d,"LABEL",{for:!0,class:!0});var o=C(t);n=J(o,s),o.forEach(g),a=N(d),f=E(d,"DIV",{class:!0});var M=C(f);h=E(M,"DIV",{class:!0});var z=C(h);r=E(z,"SELECT",{id:!0,class:!0});var j=C(r);for(let B=0;B<b.length;B+=1)b[B].l(j);j.forEach(g),z.forEach(g),M.forEach(g),y=N(d),d.forEach(g),this.h()},h(){m(t,"for",i=l[4].id+"-select"),m(t,"class","control button no-hover is-primary is-small"),m(r,"id",p=l[4].id+"-select"),m(r,"class","fullwidth"),l[1][l[4].id]===void 0&&Pe(I),m(h,"class","select is-small fullwidth"),m(f,"class","control fullwidth"),m(e,"class","field has-addons has-addons-left fullwidth")},m(u,d){L(u,e,d),_(e,t),_(t,n),_(e,a),_(e,f),_(f,h),_(h,r);for(let o=0;o<b.length;o+=1)b[o]&&b[o].m(r,null);Te(r,l[1][l[4].id],!0),_(e,y),v||(c=re(r,"change",I),v=!0)},p(u,d){if(l=u,d&1&&s!==(s=l[4].label+"")&&Ve(n,s),d&1&&i!==(i=l[4].id+"-select")&&m(t,"for",i),d&1){w=le(l[4].values);let o;for(o=0;o<w.length;o+=1){const M=ct(l,w,o);b[o]?b[o].p(M,d):(b[o]=ft(M),b[o].c(),b[o].m(r,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=w.length}d&1&&p!==(p=l[4].id+"-select")&&m(r,"id",p),d&3&&Te(r,l[1][l[4].id])},d(u){u&&g(e),be(b,u),v=!1,c()}}}function nl(l){let e,t="Viewer Settings",s,n,i,a="Viewer",f,h,r,p,y,v,c,w,b=le(pt),I=[];for(let o=0;o<b.length;o+=1)I[o]=sl(ll(l,b,o));let u=le(l[0].options),d=[];for(let o=0;o<u.length;o+=1)d[o]=ut(ot(l,u,o));return{c(){e=q("h2"),e.textContent=t,s=D(),n=q("div"),i=q("label"),i.textContent=a,f=D(),h=q("div"),r=q("div"),p=q("select");for(let o=0;o<I.length;o+=1)I[o].c();y=D();for(let o=0;o<d.length;o+=1)d[o].c();v=ze(),this.h()},l(o){e=E(o,"H2",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-1chwb8c"&&(e.textContent=t),s=N(o),n=E(o,"DIV",{class:!0});var M=C(n);i=E(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),he(i)!=="svelte-16ldjpo"&&(i.textContent=a),f=N(M),h=E(M,"DIV",{class:!0});var z=C(h);r=E(z,"DIV",{class:!0});var j=C(r);p=E(j,"SELECT",{id:!0,class:!0});var B=C(p);for(let A=0;A<I.length;A+=1)I[A].l(B);B.forEach(g),j.forEach(g),z.forEach(g),M.forEach(g),y=N(o);for(let A=0;A<d.length;A+=1)d[A].l(o);v=ze(),this.h()},h(){m(e,"class","title is-6 mt-5"),m(i,"for","viewer-select"),m(i,"class","control button no-hover is-primary is-small"),m(p,"id","viewer-select"),m(p,"class","fullwidth"),l[0]===void 0&&Pe(()=>l[2].call(p)),m(r,"class","select is-small fullwidth"),m(h,"class","control fullwidth"),m(n,"class","field has-addons has-addons-left fullwidth")},m(o,M){L(o,e,M),L(o,s,M),L(o,n,M),_(n,i),_(n,f),_(n,h),_(h,r),_(r,p);for(let z=0;z<I.length;z+=1)I[z]&&I[z].m(p,null);Te(p,l[0],!0),L(o,y,M);for(let z=0;z<d.length;z+=1)d[z]&&d[z].m(o,M);L(o,v,M),c||(w=re(p,"change",l[2]),c=!0)},p(o,[M]){if(M&1&&Te(p,o[0]),M&3){u=le(o[0].options);let z;for(z=0;z<u.length;z+=1){const j=ot(o,u,z);d[z]?d[z].p(j,M):(d[z]=ut(j),d[z].c(),d[z].m(v.parentNode,v))}for(;z<d.length;z+=1)d[z].d(1);d.length=u.length}},i:ne,o:ne,d(o){o&&(g(e),g(s),g(n),g(y),g(v)),be(I,o),be(d,o),c=!1,w()}}}function il(l,e,t){let s,n;ae(l,De,f=>t(0,s=f)),ae(l,ye,f=>t(1,n=f));function i(){s=Ye(this),De.set(s)}function a(f){n[f.id]=Ye(this),ye.set(n)}return[s,n,i,a]}class al extends me{constructor(e){super(),_e(this,e,il,nl,de,{})}}function rl(l){let e,t,s,n,i;return t=new tl({}),n=new al({}),{c(){e=q("section"),Q(t.$$.fragment),s=D(),Q(n.$$.fragment),this.h()},l(a){e=E(a,"SECTION",{role:!0});var f=C(e);X(t.$$.fragment,f),s=N(f),X(n.$$.fragment,f),f.forEach(g),this.h()},h(){m(e,"role","form")},m(a,f){L(a,e,f),Y(t,e,null),_(e,s),Y(n,e,null),i=!0},p:ne,i(a){i||(S(t.$$.fragment,a),S(n.$$.fragment,a),i=!0)},o(a){O(t.$$.fragment,a),O(n.$$.fragment,a),i=!1},d(a){a&&g(e),Z(t),Z(n)}}}function ol(l,e,t){let s,n,i,a;return ae(l,ye,f=>t(0,s=f)),ae(l,De,f=>t(1,n=f)),ae(l,Ae,f=>t(2,i=f)),ae(l,ce,f=>t(3,a=f)),fe(ce,a=[Ee[0],Ee[1]],a),fe(De,n=pt[0],n),l.$$.update=()=>{l.$$.dirty&3&&fe(Ae,i=`${qe}/${n.id}#${Tt.stringify(s,{arrayFormat:"bracket"})}`,i)},[s,n]}class cl extends me{constructor(e){super(),_e(this,e,ol,rl,de,{})}}function ht(l){let e,t="Copied to clipboard!",s,n;return{c(){e=q("span"),e.textContent=t,this.h()},l(i){e=E(i,"SPAN",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-1w6o7wx"&&(e.textContent=t),this.h()},h(){m(e,"class","ephemeral-message")},m(i,a){L(i,e,a),n=!0},i(i){n||(i&&Pe(()=>{n&&(s||(s=Ze(e,it,{},!0)),s.run(1))}),n=!0)},o(i){i&&(s||(s=Ze(e,it,{},!1)),s.run(0)),n=!1},d(i){i&&g(e),i&&s&&s.end()}}}function fl(l){let e,t,s,n,i,a,f,h,r,p,y,v,c,w,b,I,u,d,o,M,z,j,B,A,P,$,U;r=new ge({props:{data:Kt}}),M=new ge({props:{data:Jt}});let k=l[2]&&ht();return{c(){e=q("div"),t=q("div"),s=D(),n=q("div"),i=q("article"),a=q("div"),f=W(`Link to Full Screen Viewerfullwidth
				`),h=q("a"),Q(r.$$.fragment),p=D(),y=q("div"),v=q("a"),c=W(l[0]),w=D(),b=q("div"),I=q("article"),u=q("div"),d=W(`Embed Code
				`),o=q("button"),Q(M.$$.fragment),z=D(),k&&k.c(),j=D(),B=q("div"),A=W(l[1]),this.h()},l(T){e=E(T,"DIV",{class:!0});var V=C(e);t=E(V,"DIV",{id:!0,class:!0}),C(t).forEach(g),s=N(V),n=E(V,"DIV",{class:!0});var oe=C(n);i=E(oe,"ARTICLE",{class:!0});var ee=C(i);a=E(ee,"DIV",{class:!0});var H=C(a);f=J(H,`Link to Full Screen Viewerfullwidth
				`),h=E(H,"A",{title:!0,href:!0,target:!0,class:!0});var ie=C(h);X(r.$$.fragment,ie),ie.forEach(g),H.forEach(g),p=N(ee),y=E(ee,"DIV",{class:!0});var G=C(y);v=E(G,"A",{href:!0,target:!0});var K=C(v);c=J(K,l[0]),K.forEach(g),G.forEach(g),ee.forEach(g),oe.forEach(g),w=N(V),b=E(V,"DIV",{class:!0});var se=C(b);I=E(se,"ARTICLE",{class:!0});var R=C(I);u=E(R,"DIV",{id:!0,class:!0});var te=C(u);d=J(te,`Embed Code
				`),o=E(te,"BUTTON",{title:!0,class:!0});var pe=C(o);X(M.$$.fragment,pe),pe.forEach(g),z=N(te),k&&k.l(te),te.forEach(g),j=N(R),B=E(R,"DIV",{id:!0,class:!0});var we=C(B);A=J(we,l[1]),we.forEach(g),R.forEach(g),se.forEach(g),V.forEach(g),this.h()},h(){m(t,"id","iframe-container"),m(t,"class","column is-12"),m(h,"title","Open in new window"),m(h,"href",l[0]),m(h,"target","_none"),m(h,"class","button is-ghost has-text-white"),m(a,"class","message-header is-justify-content-left"),m(v,"href",l[0]),m(v,"target","_none"),m(y,"class","message-body fullwidth"),m(i,"class","message is-primary fullwidth"),m(n,"class","column is-half is-flex"),m(o,"title","Copy to clipboard"),m(o,"class","button is-ghost has-text-white"),m(u,"id","embed-header"),m(u,"class","message-header fullwidth is-justify-content-left"),m(B,"id","embed-code"),m(B,"class","message-body fullwidth"),m(I,"class","message is-link mr-5 fullwidth"),m(b,"class","column is-half is-flex"),m(e,"class","columns is-gapless is-multiline fullwidth")},m(T,V){L(T,e,V),_(e,t),_(e,s),_(e,n),_(n,i),_(i,a),_(a,f),_(a,h),Y(r,h,null),_(i,p),_(i,y),_(y,v),_(v,c),_(e,w),_(e,b),_(b,I),_(I,u),_(u,d),_(u,o),Y(M,o,null),_(u,z),k&&k.m(u,null),_(I,j),_(I,B),_(B,A),P=!0,$||(U=[re(o,"click",l[6]),re(o,"click",l[3])],$=!0)},p(T,[V]){(!P||V&1)&&m(h,"href",T[0]),(!P||V&1)&&Ve(c,T[0]),(!P||V&1)&&m(v,"href",T[0]),T[2]?k?V&4&&S(k,1):(k=ht(),k.c(),S(k,1),k.m(u,null)):k&&(He(),O(k,1,1,()=>{k=null}),Ue()),(!P||V&2)&&Ve(A,T[1])},i(T){P||(S(r.$$.fragment,T),S(M.$$.fragment,T),S(k),P=!0)},o(T){O(r.$$.fragment,T),O(M.$$.fragment,T),O(k),P=!1},d(T){T&&g(e),Z(r),Z(M),k&&k.d(),$=!1,bt(U)}}}function ul(l){console.log(l);let e=document.getElementById(l).textContent;navigator.clipboard.writeText(e)}function hl(l,e,t){let s;ae(l,Ae,y=>t(5,s=y));let n,i,a="",f=!1;function h(){t(2,f=!0),setTimeout(()=>{t(2,f=!1)},1e3)}function r(){if(typeof window<"u"){let y=document.getElementById("viewer-iframe"),v=document.getElementById("iframe-container");y!==null&&y.remove();let c=document.createElement("iframe");c.setAttribute("src",s),c.setAttribute("id","viewer-iframe"),c.style.width="100%",c.style.height="75vh",v.prepend(c)}}yt(async()=>{t(4,a=window.location.protocol+"//"+window.location.host),r()});const p=()=>ul("embed-code");return l.$$.update=()=>{l.$$.dirty&48&&t(0,i=a+s),l.$$.dirty&1&&t(1,n=`<iframe src="${i}" height="400"/>`),l.$$.dirty&32&&r()},[i,n,f,h,a,s,p]}class dl extends me{constructor(e){super(),_e(this,e,hl,fl,de,{})}}function ml(l){let e,t,s,n,i,a,f,h,r,p,y,v,c,w,b,I,u,d,o,M="!! for experimental use only !!",z,j,B,A=Nt.toLowerCase()+"",P,$,U,k,T,V,oe,ee,H,ie,G,K,se;return document.title=Oe,w=new ge({props:{data:Wt,scale:"1.5"}}),H=new cl({}),K=new dl({}),{c(){e=q("link"),t=D(),s=q("section"),n=q("div"),i=q("div"),a=q("div"),f=q("div"),h=q("a"),r=q("h1"),p=W(Oe),y=D(),v=q("a"),c=q("button"),Q(w.$$.fragment),b=D(),I=q("p"),u=W(xe),d=D(),o=q("p"),o.textContent=M,z=D(),j=q("p"),B=W("last built on "),P=W(A),$=D(),U=q("img"),T=D(),V=q("img"),ee=D(),Q(H.$$.fragment),ie=D(),G=q("div"),Q(K.$$.fragment),this.h()},l(R){const te=zt("svelte-1up494f",document.head);e=E(te,"LINK",{rel:!0,href:!0}),te.forEach(g),t=N(R),s=E(R,"SECTION",{class:!0});var pe=C(s);n=E(pe,"DIV",{class:!0});var we=C(n);i=E(we,"DIV",{class:!0});var Ie=C(i);a=E(Ie,"DIV",{class:!0});var F=C(a);f=E(F,"DIV",{class:!0});var Ce=C(f);h=E(Ce,"A",{href:!0});var Fe=C(h);r=E(Fe,"H1",{class:!0});var Ge=C(r);p=J(Ge,Oe),Ge.forEach(g),Fe.forEach(g),y=N(Ce),v=E(Ce,"A",{href:!0,target:!0,"aria-label":!0});var Ke=C(v);c=E(Ke,"BUTTON",{title:!0,class:!0});var We=C(c);X(w.$$.fragment,We),We.forEach(g),Ke.forEach(g),Ce.forEach(g),b=N(F),I=E(F,"P",{class:!0});var Je=C(I);u=J(Je,xe),Je.forEach(g),d=N(F),o=E(F,"P",{class:!0,"data-svelte-h":!0}),he(o)!=="svelte-17vg4wv"&&(o.textContent=M),z=N(F),j=E(F,"P",{class:!0});var Be=C(j);B=J(Be,"last built on "),P=J(Be,A),Be.forEach(g),$=N(F),U=E(F,"IMG",{alt:!0,src:!0,class:!0}),T=N(F),V=E(F,"IMG",{alt:!0,src:!0,class:!0}),ee=N(F),X(H.$$.fragment,F),F.forEach(g),ie=N(Ie),G=E(Ie,"DIV",{role:!0,class:!0});var Qe=C(G);X(K.$$.fragment,Qe),Qe.forEach(g),Ie.forEach(g),we.forEach(g),pe.forEach(g),this.h()},h(){m(e,"rel","icon"),m(e,"href",qe+"/favicon.png"),m(r,"class","title is-size-4"),m(h,"href",qe+"/"),m(c,"title","Open on GitHub"),m(c,"class","button is-ghost has-text-white"),m(v,"href","https://github.com/nyu-dss/viewpoint"),m(v,"target","_blank"),m(v,"aria-label","GitHub link"),m(f,"class","is-flex fullwidth is-justify-content-space-between"),m(I,"class","subtitle is-size-6"),m(o,"class","is-size-7 has-text-success"),m(j,"class","subtitle is-size-7"),m(U,"alt","animated blinking eye logo left"),Xe(U.src,k=qe+"/eye.gif")||m(U,"src",k),m(U,"class","eye-spaced"),m(V,"alt","animated blinking eye logo right"),Xe(V.src,oe=qe+"/eye.gif")||m(V,"src",oe),m(V,"class","eye-spaced"),m(a,"class","form-sidebar columnn p-5 is-one-third fullwidth"),m(G,"role","main"),m(G,"class","results-pane column is-two-thirds fullwidth"),m(i,"class","columns is-gapless m-0 fullwidth"),m(n,"class","hero-body m-0 p-0 fullwidth"),m(s,"class","hero m-0 p-0 fullheight")},m(R,te){_(document.head,e),L(R,t,te),L(R,s,te),_(s,n),_(n,i),_(i,a),_(a,f),_(f,h),_(h,r),_(r,p),_(f,y),_(f,v),_(v,c),Y(w,c,null),_(a,b),_(a,I),_(I,u),_(a,d),_(a,o),_(a,z),_(a,j),_(j,B),_(j,P),_(a,$),_(a,U),_(a,T),_(a,V),_(a,ee),Y(H,a,null),_(i,ie),_(i,G),Y(K,G,null),se=!0},p:ne,i(R){se||(S(w.$$.fragment,R),S(H.$$.fragment,R),S(K.$$.fragment,R),se=!0)},o(R){O(w.$$.fragment,R),O(H.$$.fragment,R),O(K.$$.fragment,R),se=!1},d(R){R&&(g(t),g(s)),g(e),Z(w),Z(H),Z(K)}}}class wl extends me{constructor(e){super(),_e(this,e,null,ml,de,{})}}export{wl as component};
