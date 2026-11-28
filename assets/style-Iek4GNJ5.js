import{C as e,M as t,T as n,_ as r,c as i,g as a,k as o,o as s}from"./three.core-BV62Qcki.js";import{t as c}from"./kit-Dfvzj6n2.js";import{n as l}from"./rng-BVZPdspY.js";import{r as u}from"./paint-B2wJ_iH6.js";import{t as d}from"./look-CoNAVUHR.js";import{t as f}from"./uniforms-D7QLcwSD.js";const p=[{hour:0,sky:[`#141640`,`#1c1f52`,`#2a2b64`,`#3a3672`],light:`#b0b4d4`,sun:.42,shade:`#34407a`,ground:`#6a4c3a`,air:`#2e2c5e`,leaves:[`#08121c`,`#10202a`,`#1c3036`],ratio:.85,pull:.3,haze:5e3,night:1,wash:`#1a1840`,washAmount:.06},{hour:5.2,sky:[`#181c50`,`#262a62`,`#3e3c76`,`#56508a`],light:`#8a8cc0`,sun:.16,shade:`#30346a`,ground:`#3a3440`,air:`#3c3a6c`,leaves:[`#08121c`,`#10202a`,`#1c3036`],ratio:.62,pull:.3,haze:5e3,night:.9,wash:`#2a2870`,washAmount:.05},{hour:6.4,sky:[`#4a5a96`,`#8a86b4`,`#e4a6a8`,`#f4c09a`],light:`#ffbe94`,sun:.6,shade:`#6c6aa0`,ground:`#5a4a48`,air:`#bca4bc`,leaves:[`#24404a`,`#5a7a5c`,`#a8a85e`],ratio:.68,pull:.5,haze:3200,night:.35,wash:`#e0a088`,washAmount:.04},{hour:7.6,sky:[`#4f7cc0`,`#86aad6`,`#d2c4ca`,`#ecd6c0`],light:`#ffe2bc`,sun:.74,shade:`#6e7eac`,ground:`#6a5c4c`,air:`#c4c2cc`,leaves:[`#24424c`,`#5c805c`,`#a8b25e`],ratio:.68,pull:.45,haze:3800,night:0,wash:`#e8c8a8`,washAmount:.03},{hour:9.5,sky:[`#3a72c4`,`#74a4da`,`#b0c8e2`,`#cfdbe8`],light:`#fff0d8`,sun:.78,shade:`#6a7caa`,ground:`#7a6c58`,air:`#aabcd4`,leaves:[`#22444e`,`#5a845a`,`#a4b85c`],ratio:.68,pull:.45,haze:4200,night:0,wash:`#a8c4e0`,washAmount:.03},{hour:12.5,sky:[`#3670c6`,`#70a2dc`,`#accae6`,`#ccdcea`],light:`#fff4e2`,sun:.8,shade:`#6c7eac`,ground:`#7a6c58`,air:`#a6bcd6`,leaves:[`#22444e`,`#5a865a`,`#a6ba5c`],ratio:.68,pull:.45,haze:4800,night:0,wash:`#a8c4e0`,washAmount:.03},{hour:16,sky:[`#3a70c2`,`#76a4d8`,`#b4c8de`,`#d2dae2`],light:`#fff0d2`,sun:.8,shade:`#6a7aa6`,ground:`#7a6a56`,air:`#acbad0`,leaves:[`#22424e`,`#5c845a`,`#aab85c`],ratio:.68,pull:.45,haze:4400,night:0,wash:`#c0c8d8`,washAmount:.03},{hour:18.2,sky:[`#6264a8`,`#a48ec0`,`#eab0a2`,`#f8d0a0`],light:`#ffc888`,sun:.95,shade:`#7a6ea8`,ground:`#7a5e4c`,air:`#c6aac2`,leaves:[`#263848`,`#566a50`,`#b8a85a`],ratio:.64,pull:.5,haze:3400,night:0,wash:`#e8b888`,washAmount:.04},{hour:19.2,sky:[`#5c5a9c`,`#9a84bc`,`#e6a2aa`,`#f7c69c`],light:`#ffbc80`,sun:1.1,shade:`#7a66a6`,ground:`#7a5a4e`,air:`#b9a2c8`,leaves:[`#222c46`,`#566e50`,`#c6ac54`],ratio:.62,pull:.55,haze:3e3,night:.12,wash:`#e8a060`,washAmount:.04},{hour:20,sky:[`#2c2c68`,`#443e7e`,`#7c5686`,`#a46a7e`],light:`#c88c80`,sun:.24,shade:`#3c3870`,ground:`#4a3434`,air:`#62507e`,leaves:[`#0e1822`,`#1c2a36`,`#3a4440`],ratio:.64,pull:.4,haze:3600,night:.7,wash:`#6a4a78`,washAmount:.05},{hour:20.9,sky:[`#141640`,`#1c1f52`,`#2a2b64`,`#3a3672`],light:`#b0b4d4`,sun:.42,shade:`#34407a`,ground:`#6a4c3a`,air:`#2e2c5e`,leaves:[`#08121c`,`#10202a`,`#1c3036`],ratio:.85,pull:.3,haze:5e3,night:1,wash:`#1a1840`,washAmount:.06}],m={fog:{sky:[`#8692aa`,`#97a2b8`,`#a6aec0`,`#b0b8c6`],shade:`#6a7894`,air:`#a2acbe`,leaves:[`#3c4c58`,`#5a6a70`,`#76848a`],ratio:.82,pull:.5},overcast:{sky:[`#8a92a6`,`#9ca4b4`,`#aab0bc`,`#b4b8c2`],shade:`#6e7890`,air:`#a8afbc`,leaves:[`#2a424c`,`#567060`,`#88966c`],ratio:.78,pull:.45}},h={clear:0,fog:.95,overcast:.7};function g(e){return p.map(t=>({...e.reduce((e,n)=>Math.abs(n.hour-t.hour)<Math.abs(e.hour-t.hour)?n:e),hour:t.hour,skyZenith:t.sky[0],skyHorizon:t.sky[3],sunColor:t.light,sunIntensity:t.sun,ambientSky:t.shade,ambientGround:t.ground,fogColor:t.air,haze:t.haze,nightGlow:t.night,tint:`#ffffff`,wash:t.wash,washAmount:t.washAmount,contrast:1,saturation:1}))}const _={skyHigh:new s,skyMid:new s,skyBand:new s,skyLow:new s,shade:new s,leafDeep:new s,leafMid:new s,leafLit:new s},v=new t;let y=``;const b=new s,x=new s;function S(e,t,n,r){return e.set(t).lerp(x.set(n),r)}function C(){let e=f.uHour.value,t=String(d.weather),n=`${e.toFixed(4)}|${t}`;if(n===y)return;y=n;let r=(e%24+24)%24,i=p,a=i.findIndex(e=>e.hour>r),o,s,c;a<=0?(o=i[i.length-1],s=i[0],c=((r-o.hour)%24+24)%24/(s.hour+24-o.hour)):(o=i[a-1],s=i[a],c=(r-o.hour)/(s.hour-o.hour)),S(_.skyHigh,o.sky[0],s.sky[0],c),S(_.skyMid,o.sky[1],s.sky[1],c),S(_.skyBand,o.sky[2],s.sky[2],c),S(_.skyLow,o.sky[3],s.sky[3],c),S(_.shade,o.shade,s.shade,c),S(_.leafDeep,o.leaves[0],s.leaves[0],c),S(_.leafMid,o.leaves[1],s.leaves[1],c),S(_.leafLit,o.leaves[2],s.leaves[2],c);let l=o.ratio+(s.ratio-o.ratio)*c,u=o.pull+(s.pull-o.pull)*c,g=o.night+(s.night-o.night)*c,x=m[t],C=(h[t]??0)*(1-.5*g);x&&C>0&&(_.skyHigh.lerp(b.set(x.sky[0]),C),_.skyMid.lerp(b.set(x.sky[1]),C),_.skyBand.lerp(b.set(x.sky[2]),C),_.skyLow.lerp(b.set(x.sky[3]),C),_.shade.lerp(b.set(x.shade),C),_.leafDeep.lerp(b.set(x.leaves[0]),C),_.leafMid.lerp(b.set(x.leaves[1]),C),_.leafLit.lerp(b.set(x.leaves[2]),C),l+=(x.ratio-l)*C,u+=(x.pull-u)*C),v.set(l,u,t===`fog`?1:t===`overcast`?.5:0,g)}const w=e=>({get value(){return C(),e()}}),T={uGSkyHigh:w(()=>_.skyHigh),uGSkyMid:w(()=>_.skyMid),uGSkyBand:w(()=>_.skyBand),uGSkyLow:w(()=>_.skyLow),uGShade:w(()=>_.shade),uGLeafDeep:w(()=>_.leafDeep),uGLeafMid:w(()=>_.leafMid),uGLeafLit:w(()=>_.leafLit),uGShape:w(()=>v)},E=/^(concept-cypress\/cy-bark|pedestrian\/|figure|person|street-sign\/|parking-sign\/|traffic\/sign|traffic-signal\/|bus-shelter\/(ad-|d\d|bus)|news-rack\/|shop-furniture\/(board|menu|poster|slogan)|buildings\/(numbers|glyphs|sign|mural)|picnic-blanket\/|road-barrier\/(arrow|closed|detour|local|sidewalk)|parklet\/mural|study-|nopa\/|glow$|flat$|wire$|blob$|horizon\/)/,D=/^(asphalt|sidewalk|concrete|streets\/(asphalt|lane|walk|kerb)|areas\/(lotAsphalt|concrete|slabs)|paths\/pathAsphalt)$/,O=/(leaves|clump|spray|frond|tuft|bloom|\/far(-|$)|\/grass)/,k=/(blossom|lilac|pink|yellow|bloom)/;function A(e,t){if(E.test(t.name))return;let n=e.getImageData(0,0,t.w,t.h);if(t.cutout)O.test(t.name)?F(n.data,t.w,t.h,k.test(t.name)):P(n.data,t.w,t.h,3,!0);else if(/^(grass|areas\/lawn)$/.test(t.name))I(n.data,t);else if(/\/mass(-|$)/.test(t.name))L(n.data,t.w,t.h);else if(/(^|\/)brick$/.test(t.name))R(n.data,t.w,t.h);else if(/(^|\/)cedar$/.test(t.name))z(n.data,t.w,t.h);else if(/^buildings\/int-/.test(t.name)){t.name===`buildings/int-shelves`?U(n.data,t):P(n.data,t.w,t.h,3,!1,34);for(let e=3;e<n.data.length;e+=4)n.data[e]===128&&(n.data[e]=96)}else D.test(t.name)?P(n.data,t.w,t.h,3,!1,24,/asphalt|lane/i.test(t.name)?1.3:1.06,/asphalt|lane/i.test(t.name)?.2:.6):t.name===`buildings/fac-edw`&&H(n.data,t.w,t.h)||(/^buildings\/fac-/.test(t.name)&&(B(n.data,t.w,t.h),V(n.data,t.w,t.h),V(n.data,t.w,t.h)),P(n.data,t.w,t.h,t.w*t.h>=4096?4:3,!1));if(!t.cutout&&/bark|trunk/.test(t.name))for(let e=3;e<n.data.length;e+=4)n.data[e]===255&&(n.data[e]=254);e.putImageData(n,0,0)}const j=[96,98,100],M=[58,60,62],N=(e,t,n)=>.299*e+.587*t+.114*n;function P(e,t,n,r,i,a=14,o=1,s=1){let c=t*n,l=t=>!i||e[t*4+3]>=128,u=new Float32Array(c*3);for(let r=0;r<n;r++)for(let i=0;i<t;i++){let a=r*t+i;if(!l(a))continue;let o=e[a*4],s=e[a*4+1],c=e[a*4+2],d=0,f=0,p=0,m=0;for(let a=-2;a<=2;a++)for(let u=-2;u<=2;u++){let h=(r+a+n)%n*t+(i+u+t)%t;if(!l(h))continue;let g=e[h*4],_=e[h*4+1],v=e[h*4+2];(g-o)**2+(_-s)**2+(v-c)**2>676||(d+=g,f+=_,p+=v,m++)}u[a*3]=d/m,u[a*3+1]=f/m,u[a*3+2]=p/m}let d=[];for(let e=0;e<c;e++)l(e)&&d.push(e);if(d.length<4)return;let f=[...d].sort((e,t)=>N(u[e*3],u[e*3+1],u[e*3+2])-N(u[t*3],u[t*3+1],u[t*3+2])),p=[];for(let e=0;e<r;e++){let t=f[Math.min(f.length-1,Math.floor((e+.5)/r*f.length))];p.push([u[t*3],u[t*3+1],u[t*3+2]])}let m=new Int16Array(c).fill(-1),h=()=>{for(let e of d){let t=0,n=1/0;for(let r=0;r<p.length;r++){let i=(u[e*3]-p[r][0])**2+(u[e*3+1]-p[r][1])**2+(u[e*3+2]-p[r][2])**2;i<n&&(n=i,t=r)}m[e]=t}};for(let e=0;e<8;e++){h();let e=p.map(()=>[0,0,0,0]);for(let t of d){let n=e[m[t]];n[0]+=u[t*3],n[1]+=u[t*3+1],n[2]+=u[t*3+2],n[3]++}p=p.map((t,n)=>e[n][3]?[e[n][0]/e[n][3],e[n][1]/e[n][3],e[n][2]/e[n][3]]:t)}let g=a*a;for(let e=!0;e&&p.length>1;){e=!1;for(let t=0;t<p.length&&!e;t++)for(let n=t+1;n<p.length&&!e;n++)(p[t][0]-p[n][0])**2+(p[t][1]-p[n][1])**2+(p[t][2]-p[n][2])**2<g&&(p[t]=p[t].map((e,t)=>(e+p[n][t])/2),p.splice(n,1),e=!0)}h();let _=Int16Array.from(m);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(m[i]<0)continue;let a=/* @__PURE__ */ new Map,o=0;for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++){if(!c&&!s)continue;let l=(e+s+n)%n*t+(r+c+t)%t;m[l]<0||(m[l]===m[i]&&o++,a.set(m[l],(a.get(m[l])??0)+1))}o===0&&a.size&&(_[i]=[...a.entries()].sort((e,t)=>t[1]-e[1]||e[0]-t[0])[0][0])}let v=p.map(()=>[0,0,0,0]);for(let t of d){let n=v[_[t]];n[0]+=e[t*4],n[1]+=e[t*4+1],n[2]+=e[t*4+2],n[3]++}let y=v.map((e,t)=>e[3]?[e[0]/e[3],e[1]/e[3],e[2]/e[3]]:p[t]);if(s!==1){let e=y[v.reduce((e,t,n)=>t[3]>v[e][3]?n:e,0)];y=y.map(t=>t.map((t,n)=>e[n]+(t-e[n])*s))}for(let t of d){let n=y[_[t]];e[t*4]=n[0]*o,e[t*4+1]=n[1]*o,e[t*4+2]=n[2]*o}}function F(e,t,n,r){let i=t*n,a=new Uint8Array(i);for(let t=0;t<i;t++)a[t]=+(e[t*4+3]>=128);let o=(e,r)=>{let a=new Uint8Array(i);for(let i=0;i<n;i++)for(let o=0;o<t;o++){let s=+!r;for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){if(Math.abs(c)+Math.abs(a)>1)continue;let l=o+c,u=i+a,d=l<0||u<0||l>=t||u>=n?0:e[u*t+l];s=r?Math.max(s,d):Math.min(s,d)}a[i*t+o]=s}return a},s=o(o(a,!0),!1);if(r){for(let r=0;r<n;r++)for(let i=0;i<t;i++){let o=r*t+i;if(!s[o]||a[o])continue;let c=0,l=0,u=0,d=0;for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){let f=i+s,p=r+o;if(f<0||p<0||f>=t||p>=n||!a[p*t+f])continue;let m=(p*t+f)*4;c+=e[m],l+=e[m+1],u+=e[m+2],d++}d&&(e[o*4]=c/d,e[o*4+1]=l/d,e[o*4+2]=u/d)}for(let t=0;t<i;t++)e[t*4+3]=s[t]?255:0;P(e,t,n,3,!0);return}let c=new Float32Array(i);for(let t=0;t<i;t++)c[t]=N(e[t*4],e[t*4+1],e[t*4+2]);let l=new Float32Array(i),u=255,d=0;for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(!s[i])continue;let o=0,f=0;for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++){let l=r+s,u=e+i;if(l<0||u<0||l>=t||u>=n)continue;let d=u*t+l;a[d]&&(o+=c[d],f++)}l[i]=f?o/f:c[i],u=Math.min(u,l[i]),d=Math.max(d,l[i])}let f=[40,92,150];for(let t=0;t<i;t++){if(!s[t]){e[t*4]=e[t*4+1]=e[t*4+2]=f[0],e[t*4+3]=0;continue}let n=d>u?(l[t]-u)/(d-u):.5,r=f[n<.36?0:n<.7?1:2];e[t*4]=r,e[t*4+1]=r,e[t*4+2]=r,e[t*4+3]=255}}function I(e,t){let{w:n,h:r,rng:i}=t,a=[140,158,96],o=[122,140,84];for(let t=0;t<r;t++)for(let r=0;r<n;r++){let i=(t*n+r)*4,o=a;e[i]=o[0],e[i+1]=o[1],e[i+2]=o[2]}for(let t=0;t<6;t++){let t=i()*n,a=i()*r,s=i.range(n*.15,n*.35),c=i.range(-.25,.25);for(let i=0;i<s;i++){let s=Math.floor(t+Math.cos(c)*i+n)%n,l=(Math.floor(a+Math.sin(c)*i+r)%r*n+s)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2]}}}function L(e,t,n){let r=t*n,i=new Float32Array(r);for(let t=0;t<r;t++)i[t]=N(e[t*4],e[t*4+1],e[t*4+2]);let a=new Float32Array(r),o=255,s=0,c=Math.max(2,Math.round(t/10));for(let e=0;e<n;e++)for(let r=0;r<t;r++){let l=0,u=0;for(let a=-c;a<=c;a++)for(let o=-c;o<=c;o++)o*o+a*a>c*c||(l+=i[(e+a+n)%n*t+(r+o+t)%t],u++);a[e*t+r]=l/u,o=Math.min(o,l/u),s=Math.max(s,l/u)}let l=new Uint8Array(r),u=[0,1,2].map(()=>[0,0,0,0]);for(let t=0;t<r;t++){let n=s>o?(a[t]-o)/(s-o):.5;l[t]=n<.4?0:n<.72?1:2;let r=u[l[t]];r[0]+=e[t*4],r[1]+=e[t*4+1],r[2]+=e[t*4+2],r[3]++}let d=[0,1,2].map(e=>u.reduce((t,n)=>t+n[e],0)/r);for(let t=0;t<r;t++){let n=u[l[t]];for(let r=0;r<3;r++)e[t*4+r]=d[r]+(n[r]/n[3]-d[r])*.45}}function R(e,t,n){let r=t*n,i=[0,0,0];for(let t=0;t<r;t++)for(let n=0;n<3;n++)i[n]+=e[t*4+n]/r;let a=[i[0]*1.08,i[1]*.97,i[2]*.9],o=a.map((e,t)=>e+([184,174,160][t]-e)*.1),s=Math.max(2,Math.round(n/8));for(let r=0;r<n;r++)for(let n=0;n<t;n++){let i=r%s===0?o:a;for(let a=0;a<3;a++)e[(r*t+n)*4+a]=i[a]}}function z(e,t,n){let r=t*n,i=Math.max(2,Math.round(n/4)),a=t=>N(e[t*4],e[t*4+1],e[t*4+2]),o=[0,0,0],s=0;for(let n=0;n<r;n++)Math.floor(n/t)%i!==i-1&&(o[0]+=e[n*4],o[1]+=e[n*4+1],o[2]+=e[n*4+2],s++);for(let e=0;e<3;e++)o[e]/=Math.max(1,s);let c=N(o[0],o[1],o[2]);for(let n=0;n<r;n++){let r=Math.floor(n/t)%i===i-1;!r&&(a(n),c-18);let s=r?.3:0;for(let t=0;t<3;t++)e[n*4+t]=o[t]+(e[n*4+t]-o[t])*s}}function B(e,t,n){let r=t*n,i=new Uint8Array(r),a=0,o=0,s=0,c=0;for(let t=0;t<r;t++){let n=e[t*4],r=e[t*4+1],l=e[t*4+2];n>=85&&n<=185&&r<=115&&n>r*1.3&&n>l*1.5&&(i[t]=1,a+=n,o+=r,s+=l,c++)}if(c<r*.15)return;let l=[a/c,o/c,s/c];for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=r*t+a;if(i[o]){for(let t=0;t<3;t++)e[o*4+t]=l[t];continue}let s=e[o*4],c=e[o*4+1],u=e[o*4+2];if(Math.max(s,c,u)-Math.min(s,c,u)>40||N(s,c,u)<110)continue;let d=(e,r)=>i[(r+n)%n*t+(e+t)%t];if((d(a,r-1)||d(a,r-2))&&(d(a,r+1)||d(a,r+2))||(d(a-1,r)||d(a-2,r))&&(d(a+1,r)||d(a+2,r)))for(let t=0;t<3;t++)e[o*4+t]=l[t]+(e[o*4+t]-l[t])*.1}}function V(e,t,n){let r=Uint8ClampedArray.from(e),i=(e,r)=>((r+n)%n*t+(e+t)%t)*4,a=(e,t)=>Math.abs(r[e]-r[t])+Math.abs(r[e+1]-r[t+1])+Math.abs(r[e+2]-r[t+2]);for(let o=0;o<n;o++)for(let n=0;n<t;n++){let t=i(n,o);for(let[s,c]of[[i(n,o-1),i(n,o+1)],[i(n-1,o),i(n+1,o)]]){let n=a(t,s);if(a(s,c)<24&&n>8&&n<110&&a(t,c)<110){for(let n=0;n<3;n++)e[t+n]=(r[s+n]+r[c+n])/2;break}}}}function H(e,t,n){let r=t/2,i=n/2,a=new Uint8Array(r*i),o=r,s=-1,c=i,l=-1;for(let n=0;n<i;n++)for(let i=0;i<r;i++)e[(n*t+i+r)*4+3]<200&&(a[n*r+i]=1,o=Math.min(o,i),s=Math.max(s,i),c=Math.min(c,n),l=Math.max(l,n));if(s<0||o<4||s>r-5||c<4||l>i-7)return!1;let u=(e,t)=>e>=o-3&&e<=s+3&&t>=c-3&&t<=l+3,d=(e,t)=>e>=o-1&&e<=s+1&&t>=c-1&&t<=l+2,f=(e,t)=>e>=o-4&&e<=s+4&&t>=l+3&&t<=l+4,p=(e,t)=>e>=o-4&&e<=s+4&&t===l+5,m=-1;for(let e=c;e<=l&&m<0;e++){let t=0;for(let n=o;n<=s;n++)t|=a[e*r+n];t||(m=e)}let h=[0,0,0],g=0;for(let a=0;a<n;a++)for(let n=0;n<t;n++){let o=n%r,s=a%i;if(!(u(o,s)||f(o,s)||p(o,s))){for(let r=0;r<3;r++)h[r]+=e[(a*t+n)*4+r];g++}}for(let e=0;e<3;e++)h[e]/=Math.max(1,g);let _=N(h[0],h[1],h[2]),v=e=>h.map(t=>t*e/Math.max(_,1)),y=v(252.45),b=v(255),x=v(_*.72),S=[44,40,37],C=j,w=M;for(let o=0;o<n;o++)for(let n=0;n<t;n++){let s=(o*t+n)*4,c=n%r,l=o%i,g=a[l*r+c]===1,_=g?m>=0&&l>m?w:C:d(c,l)?S:u(c,l)?y:f(c,l)?b:p(c,l)?x:h;for(let t=0;t<3;t++)e[s+t]=_[t];g&&e[s+3]===255?e[s+3]=253:g||(e[s+3]=255)}return!0}function U(e,t){let{w:n,h:r,rng:i}=t,a=[74,54,42],o=[214,196,160],s=[226,214,190],c=[58,42,34],l=[138,98,62],u=[[200,64,44],[226,138,44],[232,196,64],[74,138,72],[236,230,212]],d=(t,i,a,o,s)=>{for(let c=Math.max(0,i);c<Math.min(r,i+o);c++)for(let r=t;r<t+a;r++){let t=(c*n+(r%n+n)%n)*4;for(let n=0;n<3;n++)e[t+n]=s[n]}};d(0,0,n,r,a),d(0,0,n,2,o),d(0,r-3,n,3,c);let f=-1;for(let e of[4,11,18]){d(0,e+5,n,1,s);for(let t=i.int(0,6);t<n;){let n=i.int(9,16),r=i.int(0,u.length-1);r===f&&(r=(r+1)%u.length),f=r,d(t,e+1,n-1,4,u[r]),t+=n+1}}for(let e=2;e<n;e+=21)d(e,r-7,15,4,l),d(e+1,r-9,13,2,u[i.int(0,3)])}const W=`
// #define GDEBUG 1  // surfaces drawn as the cut: r cast sun shadow, g lit side (x the wall step), b ground shade shadow

uniform vec3 uGSkyHigh;
uniform vec3 uGSkyMid;
uniform vec3 uGSkyBand;
uniform vec3 uGSkyLow;
uniform vec3 uGShade;
uniform vec3 uGLeafDeep;
uniform vec3 uGLeafMid;
uniform vec3 uGLeafLit;
uniform vec4 uGShape;

#define GLASS_UPPER ${j.map(e=>e.toFixed(1)).join(`, `)}
#define GLASS_LOWER ${M.map(e=>e.toFixed(1)).join(`, `)}
float gLum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
// the designed parts' colours (styleSurface, "designed parts"): the cypress's pads, rim and bark, a lit window
#define CY_BODY vec3(0.118, 0.235, 0.239)
#define CY_UNDER vec3(0.094, 0.165, 0.208)
#define CY_AIRY vec3(0.42, 0.44, 0.56)
#define CY_RIM vec3(0.900, 0.635, 0.270)
#define CY_RIM_FAR vec3(0.960, 0.745, 0.420)
#define CY_BARK_DARK vec3(0.165, 0.120, 0.150)
#define CY_BARK_LIT vec3(0.600, 0.360, 0.250)
#define CY_LIT_FROM 0.6
#define CY_KEY vec3(-0.887, 0.0, 0.462)
#define CB_WARM vec3(1.0, 0.74, 0.40)
// the shade hue as a luminance-free offset: c + l * gHueOffset() * pull keeps c's value, turns its hue
vec3 gHueOffset(vec3 hue) { return hue / max(gLum(hue), 1e-3) - 1.0; }
// 0..1: how green a paint is (green over red and blue, and saturated enough to be a colour)
float gGreen(vec3 c) {
  float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
  float sat = (mx - mn) / max(mx, 1e-3);
  return smoothstep(0.02, 0.12, (c.g - max(c.r, c.b)) / max(mx, 1e-3)) * smoothstep(0.08, 0.2, sat);
}
`,G={albedo:`
vec3 styleAlbedo(Surface s) {
  vec3 a = s.albedo;
  // far things lose their texture before the air takes them: flat silhouettes
  float far = smoothstep(160.0, 700.0, s.dist);
  if (far > 0.0) a = mix(a, atlasMean(s.uv, s.tile) * s.tint, far);
  // the ground's patches: big flat shapes a few percent apart in value and hue (Townscaper's jitter, not noise)
  if (s.normal.y > 0.7 && far < 1.0) {
    vec2 p = s.pos.xz;
    float f = vnoise(p / 11.0) * 0.65 + vnoise(p / 4.3 + 7.1) * 0.35;
    float spot = smoothstep(0.53, 0.57, f) - smoothstep(0.29, 0.33, f);
    // roads wear more: worn paler patches and darker fresh ones, broad, a step apart
    float road = (s.kind & 8) != 0 ? 1.0 : 0.0;
    float wear = mix(0.065, 0.16, road);
    a *= 1.0 + spot * vec3(wear, wear * 0.85, wear * 0.62) * (1.0 - far);
    if (road > 0.0) {
      float g = vnoise(p / 26.0 + 2.7);
      a *= 1.0 - 0.11 * (smoothstep(0.58, 0.62, g)) * (1.0 - far);
    }
  }
  // walls: a few big painted patches (plaster stains, a brick front's warmer and cooler areas), a few
  // percent apart in value, metres across, drawn in the wall's own plane
  if (abs(s.normal.y) < 0.3 && s.cutout < 0.5 && s.dist < 60.0) {
    vec2 q = vec2(s.pos.x + s.pos.z, s.pos.y);
    float f = vnoise(q / vec2(4.5, 3.2)) * 0.7 + vnoise(q / 1.7 + 3.3) * 0.3;
    float stain = smoothstep(0.56, 0.6, f) - smoothstep(0.3, 0.34, f);
    a *= 1.0 + stain * vec3(0.06, 0.05, 0.035) * (1.0 - far);
  }
  return a;
}`,light:`
// 1 on bark: its tile's alpha is 254 throughout (tiles.ts), read from the whole tile (a coarse mip at its
// centre), so a window's glow mask fading 255 to 128 never passes for it
float gIsBark(Surface s) {
  if (s.cutout > 0.5) return 0.0;
  vec2 px = s.tile.zw * uAtlasSize;
  float a = textureLod(uAtlas, s.tile.xy + 0.5 * s.tile.zw, max(0.0, log2(min(px.x, px.y)) - 3.0)).a;
  return step(abs(a - 254.0 / 255.0), 0.0012);
}
// The cast sun shadow, sampled again with bilinear comparisons (4 taps of 4 texels on a square of the
// soft radius). The engine's s.sunShadow compares nearest texels, so any cut of it follows the map's
// texel grid in steps (0.16 m: a sawtooth near the eye); this one is continuous, so the cut draws a
// smooth, crisp line. Same map, matrix, bias and edge fade as sunShadowAt (src/render/style-glsl.ts).
#ifdef STYLE_SUN_SHADOW
float gSunShadow(vec3 p, vec3 n) {
  if (uSunShadowParams.w < 0.5) return 0.0;
  vec4 c = uSunShadowMatrix * vec4(p + n * uSunShadowParams.z, 1.0);
  vec3 q = c.xyz / c.w;
  vec2 uv = q.xy * 0.5 + 0.5;
  bool rev = uSunShadowParams.x > 0.5;
  float d = rev ? q.z : q.z * 0.5 + 0.5;
  vec2 e = min(uv, 1.0 - uv);
  float edge = smoothstep(0.0, 0.06, min(e.x, e.y));
  if (edge <= 0.0 || d < 0.0 || d > 1.0) return 0.0;
  vec2 res = vec2(textureSize(uSunShadowMap, 0)), px = 1.0 / res;
  float bias = uSunShadowParams.y, sh = 0.0;
  for (int i = 0; i < 4; i++) {
    vec2 o = vec2(i == 0 || i == 3 ? -0.45 : 0.45, i < 2 ? -0.2 : 0.2);
    o = vec2(o.x - o.y, o.x + o.y) * 0.75; // a square turned off the map's grid
    vec2 t = (uv + o * uSunShadowSoft) * res - 0.5;
    vec2 f = fract(t), b = (floor(t) + 0.5) * px;
    vec4 z = vec4(texture(uSunShadowMap, b).r, texture(uSunShadowMap, b + vec2(px.x, 0.0)).r,
                  texture(uSunShadowMap, b + vec2(0.0, px.y)).r, texture(uSunShadowMap, b + px).r);
    vec4 k = rev ? step(vec4(d + bias), z) : step(z, vec4(d - bias));
    sh += mix(mix(k.x, k.y, f.x), mix(k.z, k.w, f.x), f.y);
  }
  return sh * 0.25 * edge;
}
#else
float gSunShadow(vec3 p, vec3 n) { return 0.0; }
#endif
// 0 shade .. 1 lit: the sun's side cut by a narrow ramp, the ground's cast shadows and contact cut too
float gLit(Surface s) {
  // a cutout (double-sided card) is lit by the face we see: a shelf seen from below is its shaded underside
  // (but a leaf card's normal is its crown's, outward: it is lit as the crown is, from whichever side it is seen)
  float ndl = s.cutout > 0.5 && s.foliage <= 0.0 && dot(s.normal, s.toEye) < 0.0 ? -s.ndl : s.ndl;
  // the low sun lands: open ground takes it a little past the terminator (a lawn tipped a few degrees
  // from a sunset is lit, and the trees' long shadows cross it)
  float lit = smoothstep(-0.03, 0.03, ndl - 0.015 + 0.15 * smoothstep(0.6, 0.9, s.normal.y));
  // (weak shadow, a wire's broken dashes in the bake, never makes the cut: only solid casters do)
  // (and the sun shadow on every surface, walls included: trees dapple the fronts, the hill's big tree
  // crosses the lawn; cut as crisply, from whichever of the two is darker)
  // (the moon casts none: at night the street's light is the lamps' pools, not striped moonlight)
  float castSh = max(smoothstep(0.52, 0.74, s.shadow), smoothstep(0.45, 0.55, gSunShadow(s.pos, s.normal))) * (1.0 - smoothstep(0.4, 0.9, uGShape.w)) * (1.0 - uGShape.z);
  float contact = smoothstep(0.4, 0.75, s.ao);
  // (a surface the house's designer keeps in shade, its porch recess and door: the concept kit's in-shade tile,
  // alpha 250, as concept-cross holds it)
  if (s.cutout < 0.5 && abs(s.texel.a - 250.0 / 255.0) < 0.0025) castSh = 1.0;
  // bark (marked in the atlas): limbs inside a crown stay in its shade; only a trunk square to the sun lights
  float bark = gIsBark(s);
  lit *= mix(1.0, smoothstep(0.4, 0.5, s.ndl), bark);
  // (and a trunk keeps its sun side whatever its own crown casts: the warm flat of the frame's cypress)
  castSh *= 1.0 - bark;
  // (designed: the city beyond the park lies in the hill's long shadow; only what stands above a sun line,
  // rising with distance, catches the last sun: the row's neighbours in shade, the towers' tops lit)
  float sunLine = mix(80.0, 165.0, smoothstep(300.0, 3200.0, s.dist));
  castSh = max(castSh, smoothstep(250.0, 320.0, s.dist) * (1.0 - smoothstep(sunLine - 1.5, sunLine + 1.5, s.pos.y)));
  // (hand-placed: 700 Steiner, the right edge of the frame, in the shade of the park's trees across the
  // street, all but a lit band under its cornice, the edge a clean diagonal: a frame, not a lit plane)
  if (s.pos.x > -1182.0 + (s.pos.z + 123.2) * 0.1635 - 1.0 && s.pos.x < -1158.0 && s.pos.z > -123.7 && s.pos.z < -88.0 && s.pos.y > 60.0)
    castSh = max(castSh, 1.0 - smoothstep(-0.12, 0.12, s.pos.y - (86.5 + (s.pos.z + 127.0) * 0.32)));
  // (hand-placed: a pool of the last sun round the picnic (concept-picnic's placement in the scene), through a gap in
  // the grove's long shadow; its edge one clean, gently lobed cut; low things only)
  {
    vec2 d = s.pos.xz - vec2(-1241.72, -100.99);
    vec2 q = vec2(dot(d, vec2(0.682, 0.731)) / 1.65, dot(d, vec2(-0.731, 0.682)) / 1.3);
    float a = atan(q.y, q.x);
    float r = length(q) * (1.0 + 0.07 * sin(a * 5.0 + 0.6) + 0.04 * sin(a * 11.0 + 2.0));
    castSh *= 1.0 - (1.0 - smoothstep(0.985, 1.015, r)) * (1.0 - smoothstep(0.8, 1.2, s.above));
  }
  // (in fog, and half in overcast, there is no cut and nothing cast: a soft turn of form toward the hidden sun)
  return mix(lit * (1.0 - castSh), 0.5 + 0.5 * smoothstep(-0.2, 0.7, s.ndl), uGShape.z) * (1.0 - contact);
}
// the lit side's light: the key plus a little sky; planes facing the sun a step brighter
// (in fog the sky is the light: its share grows as the weather thickens, so fog is pale, not dim)
vec3 gKey(Surface s) {
  // (and at night the sky's share is larger too: moonlight is soft, the paint stays readable)
  return uSunColor + uAmbSky * mix(mix(0.2, 0.6, uGShape.w), 0.85, uGShape.z);
}
// the cut, kept for styleSurface (the engine always calls styleLight first, on the same Surface)
float gT = 0.0;
// the light's value only: its hue is laid on in styleSurface as a pull at equal value, so sun on blue
// paint is warm blue, not the grey an orange multiply makes of it
vec3 styleLight(Surface s) {
  float t = gLit(s);
  gT = t;
  float lv = gLum(gKey(s));
  // a wall square to the sun takes it whole, one turned from it a decided step less (a bay: one gold
  // face, its sides a half tone); the ground takes the light whole
  float plane = mix(mix(mix(0.76, 1.0, smoothstep(0.64, 0.72, s.ndl)), 1.0, smoothstep(0.5, 0.8, s.normal.y)), 1.0, uGShape.z);
  float shade = uGShape.x * lv * mix(0.9, 1.04, s.normal.y * 0.5 + 0.5);
  return vec3(mix(shade, lv * plane, t) * (1.0 - 0.2 * s.ao));
}`,surface:`
vec3 styleSurface(vec3 col, Surface s) {
  #ifdef GDEBUG
  { float nd = s.cutout > 0.5 && dot(s.normal, s.toEye) < 0.0 ? -s.ndl : s.ndl;
    float lt = smoothstep(-0.03, 0.03, nd - 0.015 + 0.15 * smoothstep(0.6, 0.9, s.normal.y));
    float pl = mix(mix(0.0, 1.0, smoothstep(0.64, 0.72, s.ndl)), 1.0, smoothstep(0.5, 0.8, s.normal.y));
    return vec3(smoothstep(0.45, 0.55, gSunShadow(s.pos, s.normal)), lt * pl, smoothstep(0.52, 0.74, s.shadow)); }
  #endif
  // ---- the frame's designed parts: this frame's own assets mark them with vertex colours that are not paint
  // (every channel exactly 0 or 1, neither white nor black), and they take designed colours whatever the light
  {
    vec3 mk = s.tint;
    vec3 off = min(mk, 1.0 - mk);
    float sumM = mk.r + mk.g + mk.b;
    if (max(off.r, max(off.g, off.b)) < 0.004 && sumM > 0.5 && sumM < 2.5) {
      // the cypress (concept-cypress): magenta a pad's body and its dark notched edge (the underside a step deeper)
      if (mk.r > 0.5 && mk.g < 0.5 && mk.b > 0.5) {
        vec3 c = mix(CY_BODY, CY_UNDER, smoothstep(-0.35, -0.75, s.normal.y) * (1.0 - s.cutout));
        return mix(c, CY_AIRY, smoothstep(7.0, 20.0, s.dist) * 0.2);
      }
      // cyan: the gold rim along a pad's top, a touch paler on the far pads
      if (mk.r < 0.5 && mk.g > 0.5 && mk.b > 0.5) return mix(CY_RIM, CY_RIM_FAR, smoothstep(8.0, 18.0, s.dist));
      // red: bark, near-dark, its facets square to a designed key (the low sun, from the eye's left: the lit flat
      // falls on the trunk's face, not round its back) one warm flat; the tile's strokes darker
      if (mk.r > 0.5 && mk.g < 0.5 && mk.b < 0.5) {
        float lit = smoothstep(CY_LIT_FROM, CY_LIT_FROM + 0.05, dot(s.normal, CY_KEY));
        float stroke = 1.0 - smoothstep(0.35, 0.65, s.texel.g);
        return mix(CY_BARK_DARK, CY_BARK_LIT, lit) * (1.0 - stroke * mix(0.14, 0.24, lit));
      }
      // yellow: a limb's or a root's bark, dark, lit only along its top (a warm line where it faces up toward the key)
      if (mk.r > 0.5 && mk.g > 0.5 && mk.b < 0.5) {
        float lit = smoothstep(0.5, 0.56, s.normal.y) * smoothstep(-0.2, -0.1, dot(s.normal, CY_KEY));
        float stroke = 1.0 - smoothstep(0.35, 0.65, s.texel.g);
        return mix(CY_BARK_DARK, CY_BARK_LIT * 0.9, lit) * (1.0 - stroke * 0.12);
      }
      // blue: a lit window (concept-blocks), warm whatever the light
      if (mk.r < 0.5 && mk.g < 0.5 && mk.b > 0.5) return CB_WARM;
    }
  }
  // the engine's parts, each treated on its own: the sun and sky light (styleLight's: a value), the lamps
  // (pools, headlights, the night street glow), the gloss
  vec3 c = s.albedo * s.light;
  vec3 lamps = s.albedo * s.lamps;
  vec3 sheen = s.sheen;
  float t = gT;
  // a foliage lobe (the concept kit's lobe tile, alpha LOBE_MARK 252): one volume in the leaves' own two
  // tones, the same as its fringe's, so inside the outline nothing shows but the cut of the light
  if (s.cutout < 0.5 && abs(s.texel.a - 252.0 / 255.0) < 0.0025) {
    vec3 sh = mix(uGLeafDeep, uGLeafMid, 0.3);
    // (only its cap takes the light: a lit cap over a dark body, whatever the low sun does to its sides; one crisp cut)
    c = mix(sh, uGLeafLit, t * smoothstep(0.2, 0.25, s.normal.y)) * 1.06;
    return c + max(lamps, 0.0) * smoothstep(0.0, 0.2, uNightGlow);
  }
  // the greens: a leaf (grey in the atlas) takes the hour's three greens by its value and the light
  if (s.cutout > 0.5 && s.foliage > 0.0) {
    vec3 tx = s.texel.rgb;
    float sat = max(tx.r, max(tx.g, tx.b)) - min(tx.r, min(tx.g, tx.b));
    if (sat < 0.08) {
      float v = tx.g;
      vec3 lit = v > 0.45 ? uGLeafLit : v > 0.25 ? uGLeafMid : mix(uGLeafDeep, uGLeafMid, 0.45);
      vec3 sh = v > 0.45 ? mix(uGLeafDeep, uGLeafMid, 0.1) : uGLeafDeep;
      // a card minified (far, or foreshortened) is a smear of its tile: its value means nothing, so it
      // takes one flat tone by the light (mid lit, deep in shade): far crowns become two-tone silhouettes
      float smear = smoothstep(1.0, 2.2, gAtlasLod);
      lit = mix(lit, uGLeafMid, smear);
      sh = mix(sh, uGLeafDeep, smear);
      // a fringe seen from below, off its crown's cap, is the shelf's underside: shade (only the cap's leaves,
      // on the top silhouette, carry the lit edge)
      float under = smoothstep(0.02, -0.12, s.toEye.y) * (1.0 - smoothstep(0.2, 0.45, s.normal.y));
      c = mix(sh, lit, t * (1.0 - under));
      c *= clamp(s.tint * 1.06, 0.0, 1.2);
      // (a leaf's gloss is not kept: the sky it would reflect at grazing angles streaks a crown pale;
      // lamps and headlights are, after dark)
      return c + max(lamps, 0.0) * smoothstep(0.0, 0.2, uNightGlow);
    }
  }
  // shade: the hour's hue at the same value (a pull: the paint keeps its own colour under it, a little
  // richer, as a painter's shadow is); undersides take the ground's warm bounce instead
  float l = gLum(c);
  vec3 hue = mix(uGShade, uAmbGround, smoothstep(-0.25, -0.7, s.normal.y));
  vec3 shaded = max(c + l * gHueOffset(hue) * uGShape.y, 0.0);
  shaded = max(vec3(gLum(shaded)) + (shaded - gLum(shaded)) * 1.2, 0.0);
  // the lit side: the light's hue laid on at the paint's value (a white wall takes the light's own peach,
  // a blue one stays blue, warmed: a multiply by an orange light greys it), a little richer, and a small
  // glow toward the light, so sun on any paint reads as light, not as mud or chalk
  vec3 lit = max(c + l * gHueOffset(gKey(s)), 0.0);
  lit = max(vec3(gLum(lit)) + (lit - gLum(lit)) * 1.18, 0.0);
  lit = 1.0 - (1.0 - lit) * (1.0 - uSunColor * 0.07);
  vec3 painted = mix(shaded, lit, t);
  float day = 1.0 - smoothstep(0.2, 0.5, uNightGlow);
  // a shop's room behind its glass (tiles.ts SHOP_MARK: alpha 96, below any blend of a window's 128 and a wall's
  // 255) and glass that never lights (GLASS_MARK 253 and its exact paint: a blend at a lit window's edge passes 253)
  float shop = s.cutout < 0.5 ? 1.0 - smoothstep(0.003, 0.006, abs(s.texel.a - 96.0 / 255.0)) : 0.0;
  float unlitGlass = 0.0;
  if (s.cutout < 0.5 && abs(s.texel.a - 253.0 / 255.0) < 0.003) {
    vec3 tx = s.texel.rgb * 255.0;
    unlitGlass = step(min(length(tx - vec3(GLASS_UPPER)), length(tx - vec3(GLASS_LOWER))), 3.0);
  }
  // window glass (glow-masked texels) holds the sky's colour by day, not a dead grey
  // (what is painted behind it keeps its colour: only neutral glass takes the sky)
  if (s.cutout < 0.5 && (s.texel.a < 0.85 || unlitGlass > 0.5) && shop < 0.5) {
    vec3 tx = s.texel.rgb;
    float tsat = (max(tx.r, max(tx.g, tx.b)) - min(tx.r, min(tx.g, tx.b))) / max(max(tx.r, max(tx.g, tx.b)), 1e-3);
    painted = mix(painted, mix(uGSkyMid, uGSkyLow, 0.35) * 0.62, 0.45 * day * (1.0 - smoothstep(0.25, 0.5, tsat)));
  }
  // a shop window by day: the room a step darker than the street (its neutral walls more than its goods) under a
  // faint veil of sky: glass, not a grey smudge (no glint stripes: on glass they read as tape)
  if (shop > 0.0 && day > 0.0) {
    vec3 tx = s.texel.rgb;
    float tsat = (max(tx.r, max(tx.g, tx.b)) - min(tx.r, min(tx.g, tx.b))) / max(max(tx.r, max(tx.g, tx.b)), 1e-3);
    vec3 skyHue = mix(uGSkyMid, uGSkyLow, 0.45);
    vec3 glassC = mix(painted * mix(0.62, 0.9, smoothstep(0.3, 0.6, tsat)), skyHue * 0.55, 0.14);
    painted = mix(painted, glassC, shop * day);
  }
  // gloss (car paint, glass) by day: the body's flat colour, a crisp sky sheen on what faces up, one hard
  // highlight (the engine's reflection is left out; by night it is kept, with the lamps and headlights)
  if (s.gloss > 0.05 && s.gloss < 0.9) {
    vec3 R = reflect(-s.toEye, s.normal);
    vec3 sky = mix(painted, mix(uGSkyMid, uGSkyHigh, 0.4), 0.35 * s.gloss * smoothstep(0.1, 0.14, R.y));
    sky += uSunColor * 0.7 * smoothstep(0.985, 0.99, dot(R, uSunDir)) * t;
    // a car (gloss within a man's height of the street): the body's shoulder above the beltline catches the
    // sky in one crisp band; its glass is a plain dark pane, faintly the sky's colour (no streaks: they read as tape)
    if (s.above < 2.4 && s.dist < 80.0) {
      float side = 1.0 - smoothstep(0.35, 0.6, abs(s.normal.y));
      // (glass is dark gloss above the beltline: a black bumper or grille below it is paint, not glass)
      float glass = (1.0 - smoothstep(0.1, 0.22, gLum(s.albedo))) * smoothstep(0.72, 0.85, s.above);
      vec3 skyHue = mix(uGSkyMid, uGSkyLow, 0.45);
      sky = mix(sky, skyHue * mix(0.95, 1.1, t), 0.3 * smoothstep(0.8, 0.84, s.above) * side * (1.0 - glass));
      sky = mix(sky * mix(1.0, 0.8, glass), skyHue * 0.85, 0.15 * glass * side);
    }
    painted = mix(painted, sky, day);
    sheen *= 1.0 - day;
  }
  // a green takes the script's greens at its own value: shade the deep-to-mid hue (teal sage), lit
  // the lit green's (ochre-lime); greens from the hour, values from the paint and the light
  float green = gGreen(s.albedo);
  float mixLit = 0.25, mixSh = 0.6, lv = l;
  // a lawn is painted, lit or in shade: big patches a step warmer (toward the lit green) or deeper and
  // cooler (toward the deep), and long strokes of the grass laid one way, a hand wide and a stride long;
  // in world space, so nothing repeats, and gone with distance before they could shimmer
  if (green > 0.0 && s.normal.y > 0.7 && s.cutout < 0.5 && s.dist < 90.0) {
    vec2 p = s.pos.xz;
    float near = 1.0 - smoothstep(45.0, 90.0, s.dist);
    float f = vnoise(p / 6.5) * 0.62 + vnoise(p / 2.6 + 5.3) * 0.38;
    float warm = smoothstep(0.56, 0.59, f) * near, cool = smoothstep(0.39, 0.36, f) * near;
    vec2 r = vec2(dot(p, vec2(0.82, 0.57)), dot(p, vec2(-0.57, 0.82)));
    float fade = 1.0 - smoothstep(25.0, 50.0, s.dist);
    float stroke = smoothstep(0.66, 0.69, vnoise(r * vec2(0.55, 4.2) + 1.9)) * fade;
    float tip = smoothstep(0.68, 0.71, vnoise(r * vec2(0.5, 3.6) + 8.4)) * fade * (1.0 - stroke);
    mixLit += 0.5 * warm - 0.25 * cool + 0.3 * tip;
    mixSh += 0.35 * warm - 0.45 * cool + 0.3 * tip;
    lv *= 1.0 + 0.1 * warm - 0.12 * cool - 0.16 * stroke + 0.1 * tip;
  }
  vec3 greens = lv * mix(gHueOffset(mix(uGLeafDeep, uGLeafMid, mixSh)) + 1.0, gHueOffset(mix(uGLeafMid, uGLeafLit, mixLit)) + 1.0, t);
  c = mix(painted, greens, green * 0.85);
  // after dark, the lamps' light on the ground falls off in a few decided steps (pools painted as rings
  // of value, not airbrushed), near the eye where they can be seen as shapes
  if (uNightGlow > 0.3 && (s.kind & 24) != 0 && s.dist < 90.0) {
    float le = gLum(lamps);
    float f = le * 7.0;
    float lq = (floor(f) + smoothstep(0.35, 0.65, fract(f))) / 7.0;
    lamps *= mix(1.0, lq / max(le, 1e-3), smoothstep(0.02, 0.05, le) * (1.0 - smoothstep(60.0, 90.0, s.dist)));
  }
  return c + lamps + sheen;
}`},K=e=>e.toFixed(4),q=[{base:5,lobes:[[53.4,5.08,1.3,.24],[55.6,5.42,1.5,.56],[58.2,5.8,1.7,.85],[61,6.35,1.6,1.05],[63.8,6.15,1.5,.82],[66.4,6.85,2,1.3],[69.8,6.5,2.2,1.1],[73,7.3,2.6,1.6],[59.6,6.95,.8,.4],[64.9,7.55,1,.55]]},{base:3.5,lobes:[[55.6,3.62,1.7,.2],[58.8,3.72,2.3,.3],[62,3.66,1.6,.22],[64.4,3.6,1,.14]]},{base:6.6,lobes:[[47.4,6.7,.8,.2],[48.7,6.88,1.1,.36],[50,6.72,.7,.18]]}];function J(){let e=[];return q.forEach((t,n)=>{let r=(e,n)=>t.lobes.map(([t,r,i,a])=>`ccLobe(vec2(az - ${K(t)} + ${e}, el - ${K(r)} + ${n}), vec2(${K(i)}, ${K(a)}))`).reduce((e,t)=>`min(${e}, ${t})`);e.push(`  // cloud ${n}`),e.push(`  { float base = ${K(t.base)};`),e.push(`    float d0 = ${r(`0.0`,`0.0`)};`),e.push(`    float d1 = ${r(`0.32`,`0.5`)};`),e.push(`    float in_ = (1.0 - smoothstep(-px, px, d0)) * smoothstep(base - px, base + px, el);`),e.push(`    float sh = smoothstep(-px, px, d1);`),e.push(`    float lip = 1.0 - smoothstep(base + 0.07, base + 0.07 + px * 2.0, el);`),e.push(`    vec3 cc = mix(mix(CL_LIT, CL_SHADE, sh), CL_LIP, lip);`),e.push(`    c = mix(c, cc, in_); }`)}),e.join(`
`)}const Y={cloudField:`
float styleCloudField(vec2 uv) { return 0.0; }`,cloud:`
vec4 styleCloud(vec4 cloud, float field, float threshold, float core, float lit, vec3 dir) { return vec4(0.0); }`,sky:`
#define CL_LIT vec3(0.957, 0.700, 0.660)
#define CL_LIP vec3(1.0, 0.835, 0.690)
#define CL_SHADE vec3(0.690, 0.560, 0.760)
#define RG_LIT vec3(0.855, 0.680, 0.760)
#define RG_SHADE vec3(0.735, 0.620, 0.770)
#define RG_FAR vec3(0.900, 0.760, 0.800)
// the ridge's height (deg) at a bearing: a few straight facets between peaks (faceted hills, not noise)
float ccRidge(float az, out float lit) {
  // peaks: bearing, elevation (the Berkeley and Oakland hills, a little exaggerated, read as one band)
  const int N = 9;
  vec2 P[N] = vec2[N](vec2(20.0, 0.55), vec2(28.5, 1.05), vec2(34.0, 0.78), vec2(41.5, 1.32), vec2(47.0, 0.95),
                      vec2(54.0, 1.22), vec2(60.5, 0.82), vec2(66.0, 1.12), vec2(76.0, 0.6));
  float h = 0.5; lit = 1.0;
  for (int i = 0; i < N - 1; i++) {
    if (az >= P[i].x && az < P[i + 1].x) {
      float t = (az - P[i].x) / (P[i + 1].x - P[i].x);
      h = mix(P[i].y, P[i + 1].y, t);
      // slopes rising to the right face the sun (west, behind the camera, a little left): lit; falling: a step darker
      lit = P[i + 1].y > P[i].y ? 1.0 : 0.0;
    }
  }
  return h;
}
// a lobe: a squarish ellipse (a superellipse, exponent 2.6: cut paper, not cotton), signed distance in deg
float ccLobe(vec2 q, vec2 r) {
  vec2 u = abs(q) / r;
  float k = pow(pow(u.x, 2.6) + pow(u.y, 2.6), 1.0 / 2.6);
  return (k - 1.0) * min(r.x, r.y);
}
// a bird far off: a dark chevron, wings lifted (the poster's two strokes), span in deg
float ccSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0));
}
float ccBird(vec2 q, float span, float lift) {
  vec2 l = vec2(-span * 0.5, span * lift), r = vec2(span * 0.5, span * lift * 0.8), m = vec2(0.0, -span * 0.06);
  float d = min(ccSeg(q, l, m), ccSeg(q, m, r));
  return d - span * 0.045;
}
vec3 styleSky(vec3 col, vec3 d) {
  float el = degrees(asin(clamp(d.y, -1.0, 1.0)));
  float az = degrees(atan(d.x, -d.z));
  // a pixel is ~0.024 deg at 1080 lines: edges are cut within about one
  float px = 0.03;
  // the gradient in four bands over the eight degrees the lens sees (the real sky's degrees squeezed: the
  // reel's sunset turns the whole sky; here peach at the horizon to violet at the frame's top)
  vec3 c = mix(uGSkyLow * vec3(1.02, 1.0, 0.94), uGSkyBand, smoothstep(0.9, 2.9, el));
  c = mix(c, uGSkyMid, smoothstep(2.6, 6.2, el));
  c = mix(c, uGSkyHigh, smoothstep(6.0, 11.0, el));
${J()}
  // three birds in the open sky under the bank, going home
  float bd = min(ccBird(vec2(az - 58.2, el - 4.32), 0.32, 0.32), min(ccBird(vec2(az - 59.1, el - 4.6), 0.26, 0.22), ccBird(vec2(az - 57.4, el - 4.66), 0.21, 0.36)));
  c = mix(c, vec3(0.36, 0.30, 0.44), 1.0 - smoothstep(-0.012, 0.012, bd));
  // the East Bay hills: one pale faceted ridge card, the far side of a lilac air
  float lit;
  float rh = ccRidge(az, lit);
  float ridge = 1.0 - smoothstep(rh - px, rh + px, el);
  vec3 rc = mix(RG_SHADE, RG_LIT, lit);
  c = mix(c, rc, ridge);
  // below the hills: the Bay, a pale band lit by the sky
  c = mix(c, mix(uGSkyLow, RG_FAR, 0.5), 1.0 - smoothstep(-0.32 - px, -0.32 + px, el));
  return c;
}`};let X=null;var Z=c({name:`concept-classic`,description:`Concept frame classic: Gouache taken for one camera: designed cut clouds and a painted ridge, flat far layers, long shadows.`,look:{textureMacro:0,sunShadow:{enabled:!0,soft:.3,minElevation:9},grade:{contrast:1.06,saturation:1.12,wash:.5,vignette:.12,shoulder:.92,bloom:{strength:.12,nightStrength:.45}},shadows:{blur:.5,sun:1,contact:.6,near:{blur:.12}},clouds:{scale:6e3},weathers:{fog:{grey:`#8c9cba`,saturation:.9,hazeScale:.035},overcast:{grey:`#98a0b0`}},windowColors:[`#ffb24e`,`#ffbc5c`,`#ffc46a`,`#ffd488`],lights:{poolStrength:1.6}},time:g,tiles:A,clouds:()=>{if(X)return X;let t=l(`style-concept-classic-clouds`),s=u(256,256,t,{cells:3,octaves:4,gain:.48,warp:.6}),c=u(256,256,t.fork(`fine`),{cells:7,octaves:2,gain:.5}),d=/* @__PURE__ */ new Uint8Array(262144);for(let e=0;e<65536;e++)d[e*4]=Math.round(s[e]*255),d[e*4+1]=Math.round(c[e]*255),d[e*4+3]=255;return X=new i(d,256,256,e,o),X.wrapS=X.wrapT=n,X.magFilter=a,X.minFilter=r,X.generateMipmaps=!0,X.needsUpdate=!0,X},uniforms:T,glsl:{common:W,...G,fog:`
#define CC_AIR vec3(0.725, 0.635, 0.785)
#define CC_FAR_SHADE vec3(0.615, 0.535, 0.735)
#define CC_FAR_LIT vec3(1.0, 0.845, 0.690)
#define CC_FAR_BACK vec3(0.800, 0.690, 0.800)
vec3 styleFog(vec3 col, vec3 haze, float amount, Surface s) {
  float d = s.dist;
  float a = amount;
  a = max(a, mix(0.0, 0.14, smoothstep(90.0, 250.0, d)));
  a = max(a, mix(0.14, 0.42, smoothstep(250.0, 1100.0, d)));
  vec3 c = mix(col, CC_AIR, a);
  float dt = smoothstep(1150.0, 1800.0, d);
  if (dt > 0.0) {
    float pl = gLum(s.albedo);
    // (a dark paint, 555 California's slab, keeps the shade's hue whatever the light: a dark shape under a lit crown)
    vec3 far = mix(CC_FAR_SHADE, CC_FAR_LIT, gT * smoothstep(0.2, 0.3, pl)) * mix(0.55, 1.03, smoothstep(0.12, 0.7, pl));
    far = mix(far, CC_FAR_BACK, smoothstep(2600.0, 4200.0, d) * 0.4);
    c = mix(c, far, dt);
  }
  return c;
}`,post:`
vec3 stylePost(vec3 c, vec2 uv) {
  // the focus: an ellipse round the row (uv y up: the row is a little above the middle, right of centre)
  vec2 q = (uv - vec2(0.6, 0.52)) / vec2(0.52, 0.44);
  float e = smoothstep(0.6, 1.45, length(q));
  e *= mix(0.4, 1.0, smoothstep(0.08, 0.45, uv.y));
  // (the cypress's corner is dark already: there it sinks less, so the pads' gold keeps its colour)
  e *= 1.0 - 0.45 * smoothstep(0.55, 0.25, uv.x) * smoothstep(0.6, 0.85, uv.y);
  float l = gLum(c);
  vec3 hue = uGShade / max(gLum(uGShade), 1e-3);
  vec3 sunk = mix(c, l * hue, 0.42) * 0.74;
  c = mix(c, sunk, e * 0.85);
  // and the focus itself a touch warmer and lighter: the last sun on the row
  float f = 1.0 - smoothstep(0.0, 0.75, length(q));
  return c * (1.0 + f * vec3(0.05, 0.03, 0.0));
}`,...Y}});export{Z as default};