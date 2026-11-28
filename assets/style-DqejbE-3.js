import{Kt as e,R as t,_ as n,bn as r,u as i,un as a,ut as o,z as s}from"./three.core-CMmUIUzP.js";import{t as c}from"./kit-Dfvzj6n2.js";import{n as l}from"./rng-BVZPdspY.js";import{r as u}from"./paint-B2wJ_iH6.js";import{l as d,t as f}from"./uniforms-Bhz7fZ2N.js";var p=[{hour:0,sky:[`#141a4c`,`#26306c`,`#4e4484`,`#a8688a`],light:`#a4aee8`,sun:.48,shade:`#56509c`,ground:`#9a5a3a`,air:`#3e3a72`,leaves:[`#0c1a26`,`#1a3038`,`#3a5850`],ratio:.4,pull:.6,haze:700,night:1,wash:`#1a1c4a`,washAmount:.04},{hour:5.2,sky:[`#181c50`,`#262a62`,`#3e3c76`,`#56508a`],light:`#8a8cc0`,sun:.16,shade:`#30346a`,ground:`#3a3440`,air:`#3c3a6c`,leaves:[`#08121c`,`#10202a`,`#1c3036`],ratio:.62,pull:.3,haze:5e3,night:.9,wash:`#2a2870`,washAmount:.05},{hour:6.4,sky:[`#4a5a96`,`#8a86b4`,`#e4a6a8`,`#f4c09a`],light:`#ffbe94`,sun:.6,shade:`#6c6aa0`,ground:`#5a4a48`,air:`#bca4bc`,leaves:[`#24404a`,`#5a7a5c`,`#a8a85e`],ratio:.68,pull:.5,haze:3200,night:.35,wash:`#e0a088`,washAmount:.04},{hour:7.6,sky:[`#4f7cc0`,`#86aad6`,`#d2c4ca`,`#ecd6c0`],light:`#ffe2bc`,sun:.74,shade:`#6e7eac`,ground:`#6a5c4c`,air:`#c4c2cc`,leaves:[`#24424c`,`#5c805c`,`#a8b25e`],ratio:.68,pull:.45,haze:3800,night:0,wash:`#e8c8a8`,washAmount:.03},{hour:9.5,sky:[`#3a72c4`,`#74a4da`,`#b0c8e2`,`#cfdbe8`],light:`#fff0d8`,sun:.78,shade:`#6a7caa`,ground:`#7a6c58`,air:`#aabcd4`,leaves:[`#22444e`,`#5a845a`,`#a4b85c`],ratio:.68,pull:.45,haze:4200,night:0,wash:`#a8c4e0`,washAmount:.03},{hour:12.5,sky:[`#3670c6`,`#70a2dc`,`#accae6`,`#ccdcea`],light:`#fff4e2`,sun:.8,shade:`#6c7eac`,ground:`#7a6c58`,air:`#a6bcd6`,leaves:[`#22444e`,`#5a865a`,`#a6ba5c`],ratio:.68,pull:.45,haze:4800,night:0,wash:`#a8c4e0`,washAmount:.03},{hour:16,sky:[`#3a70c2`,`#76a4d8`,`#b4c8de`,`#d2dae2`],light:`#fff0d2`,sun:.8,shade:`#6a7aa6`,ground:`#7a6a56`,air:`#acbad0`,leaves:[`#22424e`,`#5c845a`,`#aab85c`],ratio:.68,pull:.45,haze:4400,night:0,wash:`#c0c8d8`,washAmount:.03},{hour:18.2,sky:[`#6264a8`,`#a48ec0`,`#eab0a2`,`#f8d0a0`],light:`#ffc888`,sun:.95,shade:`#7a6ea8`,ground:`#7a5e4c`,air:`#c6aac2`,leaves:[`#263848`,`#566a50`,`#b8a85a`],ratio:.64,pull:.5,haze:3400,night:0,wash:`#e8b888`,washAmount:.04},{hour:19.2,sky:[`#5c5a9c`,`#9a84bc`,`#e6a2aa`,`#f7c69c`],light:`#ffbc80`,sun:1.1,shade:`#7a66a6`,ground:`#7a5a4e`,air:`#b9a2c8`,leaves:[`#252f45`,`#4e5e50`,`#c09a58`],ratio:.62,pull:.55,haze:3e3,night:.12,wash:`#e8a060`,washAmount:.04},{hour:20,sky:[`#2c2c68`,`#443e7e`,`#7c5686`,`#a46a7e`],light:`#c88c80`,sun:.24,shade:`#3c3870`,ground:`#4a3434`,air:`#62507e`,leaves:[`#0e1822`,`#1c2a36`,`#3a4440`],ratio:.64,pull:.4,haze:3600,night:.7,wash:`#6a4a78`,washAmount:.05},{hour:20.9,sky:[`#141a4c`,`#26306c`,`#4e4484`,`#a8688a`],light:`#a4aee8`,sun:.48,shade:`#56509c`,ground:`#9a5a3a`,air:`#3e3a72`,leaves:[`#0c1a26`,`#1a3038`,`#3a5850`],ratio:.4,pull:.6,haze:700,night:1,wash:`#1a1c4a`,washAmount:.04}],m={fog:{sky:[`#8692aa`,`#97a2b8`,`#a6aec0`,`#b0b8c6`],shade:`#6a7894`,air:`#a2acbe`,leaves:[`#3c4c58`,`#5a6a70`,`#76848a`],ratio:.82,pull:.5},overcast:{sky:[`#8a92a6`,`#9ca4b4`,`#aab0bc`,`#b4b8c2`],shade:`#6e7890`,air:`#a8afbc`,leaves:[`#2a424c`,`#567060`,`#88966c`],ratio:.78,pull:.45}},h={clear:0,fog:.95,overcast:.7};function g(e){return p.map(t=>({...e.reduce((e,n)=>Math.abs(n.hour-t.hour)<Math.abs(e.hour-t.hour)?n:e),hour:t.hour,skyZenith:t.sky[0],skyHorizon:t.sky[3],sunColor:t.light,sunIntensity:t.sun,ambientSky:t.shade,ambientGround:t.ground,fogColor:t.air,haze:t.haze,nightGlow:t.night,tint:`#ffffff`,wash:t.wash,washAmount:t.washAmount,contrast:1,saturation:1}))}var _={skyHigh:new i,skyMid:new i,skyBand:new i,skyLow:new i,shade:new i,leafDeep:new i,leafMid:new i,leafLit:new i},v=new r,y=``,b=new i,x=new i;function S(e,t,n,r){return e.set(t).lerp(x.set(n),r)}function C(){let e=f.uHour.value,t=String(d.weather),n=`${e.toFixed(4)}|${t}`;if(n===y)return;y=n;let r=(e%24+24)%24,i=p,a=i.findIndex(e=>e.hour>r),o,s,c;a<=0?(o=i[i.length-1],s=i[0],c=((r-o.hour)%24+24)%24/(s.hour+24-o.hour)):(o=i[a-1],s=i[a],c=(r-o.hour)/(s.hour-o.hour)),S(_.skyHigh,o.sky[0],s.sky[0],c),S(_.skyMid,o.sky[1],s.sky[1],c),S(_.skyBand,o.sky[2],s.sky[2],c),S(_.skyLow,o.sky[3],s.sky[3],c),S(_.shade,o.shade,s.shade,c),S(_.leafDeep,o.leaves[0],s.leaves[0],c),S(_.leafMid,o.leaves[1],s.leaves[1],c),S(_.leafLit,o.leaves[2],s.leaves[2],c);let l=o.ratio+(s.ratio-o.ratio)*c,u=o.pull+(s.pull-o.pull)*c,g=o.night+(s.night-o.night)*c,x=m[t],C=(h[t]??0)*(1-.5*g);x&&C>0&&(_.skyHigh.lerp(b.set(x.sky[0]),C),_.skyMid.lerp(b.set(x.sky[1]),C),_.skyBand.lerp(b.set(x.sky[2]),C),_.skyLow.lerp(b.set(x.sky[3]),C),_.shade.lerp(b.set(x.shade),C),_.leafDeep.lerp(b.set(x.leaves[0]),C),_.leafMid.lerp(b.set(x.leaves[1]),C),_.leafLit.lerp(b.set(x.leaves[2]),C),l+=(x.ratio-l)*C,u+=(x.pull-u)*C),v.set(l,u,t===`fog`?1:t===`overcast`?.5:0,g)}var w=e=>({get value(){return C(),e()}}),T={uGSkyHigh:w(()=>_.skyHigh),uGSkyMid:w(()=>_.skyMid),uGSkyBand:w(()=>_.skyBand),uGSkyLow:w(()=>_.skyLow),uGShade:w(()=>_.shade),uGLeafDeep:w(()=>_.leafDeep),uGLeafMid:w(()=>_.leafMid),uGLeafLit:w(()=>_.leafLit),uGShape:w(()=>v)},E=`
uniform vec3 uGSkyHigh;
uniform vec3 uGSkyMid;
uniform vec3 uGSkyBand;
uniform vec3 uGSkyLow;
uniform vec3 uGShade;
uniform vec3 uGLeafDeep;
uniform vec3 uGLeafMid;
uniform vec3 uGLeafLit;
uniform vec4 uGShape;
`,D=/^(concept-|pedestrian\/|figure|person|street-sign\/|parking-sign\/|traffic\/sign|traffic-signal\/|bus-shelter\/(ad-|d\d|bus)|news-rack\/|shop-furniture\/(board|menu|poster|slogan)|buildings\/(numbers|glyphs|sign|mural)|picnic-blanket\/|road-barrier\/(arrow|closed|detour|local|sidewalk)|parklet\/mural|study-|nopa\/|glow$|flat$|wire$|blob$|horizon\/)/,O=/^(asphalt|sidewalk|concrete|streets\/(asphalt|lane|walk|kerb)|areas\/(lotAsphalt|concrete|slabs)|paths\/pathAsphalt)$/,k=/(leaves|clump|spray|frond|tuft|bloom|\/far(-|$)|\/grass)/,A=/(blossom|lilac|pink|yellow|bloom)/;function j(e,t){if(D.test(t.name))return;let n=e.getImageData(0,0,t.w,t.h);if(t.cutout)k.test(t.name)?ee(n.data,t.w,t.h,A.test(t.name)):F(n.data,t.w,t.h,3,!0);else if(/^(grass|areas\/lawn)$/.test(t.name))te(n.data,t);else if(/\/mass(-|$)/.test(t.name))ne(n.data,t.w,t.h);else if(/(^|\/)brick$/.test(t.name))I(n.data,t.w,t.h);else if(/(^|\/)cedar$/.test(t.name))L(n.data,t.w,t.h);else if(/^buildings\/int-/.test(t.name)){t.name===`buildings/int-shelves`?V(n.data,t):F(n.data,t.w,t.h,3,!1,34);for(let e=3;e<n.data.length;e+=4)n.data[e]===128&&(n.data[e]=96)}else O.test(t.name)?F(n.data,t.w,t.h,3,!1,24,/asphalt|lane/i.test(t.name)?1.3:1.06,/asphalt|lane/i.test(t.name)?.2:.6):t.name===`buildings/fac-edw`&&B(n.data,t.w,t.h)||(/^buildings\/fac-/.test(t.name)&&(R(n.data,t.w,t.h),z(n.data,t.w,t.h),z(n.data,t.w,t.h)),F(n.data,t.w,t.h,t.w*t.h>=4096?4:3,!1));if(!t.cutout&&/bark|trunk/.test(t.name))for(let e=3;e<n.data.length;e+=4)n.data[e]===255&&(n.data[e]=254);e.putImageData(n,0,0)}var M=[96,98,100],N=[58,60,62],P=(e,t,n)=>.299*e+.587*t+.114*n;function F(e,t,n,r,i,a=14,o=1,s=1){let c=t*n,l=t=>!i||e[t*4+3]>=128,u=new Float32Array(c*3);for(let r=0;r<n;r++)for(let i=0;i<t;i++){let a=r*t+i;if(!l(a))continue;let o=e[a*4],s=e[a*4+1],c=e[a*4+2],d=0,f=0,p=0,m=0;for(let a=-2;a<=2;a++)for(let u=-2;u<=2;u++){let h=(r+a+n)%n*t+(i+u+t)%t;if(!l(h))continue;let g=e[h*4],_=e[h*4+1],v=e[h*4+2];(g-o)**2+(_-s)**2+(v-c)**2>676||(d+=g,f+=_,p+=v,m++)}u[a*3]=d/m,u[a*3+1]=f/m,u[a*3+2]=p/m}let d=[];for(let e=0;e<c;e++)l(e)&&d.push(e);if(d.length<4)return;let f=[...d].sort((e,t)=>P(u[e*3],u[e*3+1],u[e*3+2])-P(u[t*3],u[t*3+1],u[t*3+2])),p=[];for(let e=0;e<r;e++){let t=f[Math.min(f.length-1,Math.floor((e+.5)/r*f.length))];p.push([u[t*3],u[t*3+1],u[t*3+2]])}let m=new Int16Array(c).fill(-1),h=()=>{for(let e of d){let t=0,n=1/0;for(let r=0;r<p.length;r++){let i=(u[e*3]-p[r][0])**2+(u[e*3+1]-p[r][1])**2+(u[e*3+2]-p[r][2])**2;i<n&&(n=i,t=r)}m[e]=t}};for(let e=0;e<8;e++){h();let e=p.map(()=>[0,0,0,0]);for(let t of d){let n=e[m[t]];n[0]+=u[t*3],n[1]+=u[t*3+1],n[2]+=u[t*3+2],n[3]++}p=p.map((t,n)=>e[n][3]?[e[n][0]/e[n][3],e[n][1]/e[n][3],e[n][2]/e[n][3]]:t)}let g=a*a;for(let e=!0;e&&p.length>1;){e=!1;for(let t=0;t<p.length&&!e;t++)for(let n=t+1;n<p.length&&!e;n++)(p[t][0]-p[n][0])**2+(p[t][1]-p[n][1])**2+(p[t][2]-p[n][2])**2<g&&(p[t]=p[t].map((e,t)=>(e+p[n][t])/2),p.splice(n,1),e=!0)}h();let _=Int16Array.from(m);for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(m[i]<0)continue;let a=new Map,o=0;for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++){if(!c&&!s)continue;let l=(e+s+n)%n*t+(r+c+t)%t;m[l]<0||(m[l]===m[i]&&o++,a.set(m[l],(a.get(m[l])??0)+1))}o===0&&a.size&&(_[i]=[...a.entries()].sort((e,t)=>t[1]-e[1]||e[0]-t[0])[0][0])}let v=p.map(()=>[0,0,0,0]);for(let t of d){let n=v[_[t]];n[0]+=e[t*4],n[1]+=e[t*4+1],n[2]+=e[t*4+2],n[3]++}let y=v.map((e,t)=>e[3]?[e[0]/e[3],e[1]/e[3],e[2]/e[3]]:p[t]);if(s!==1){let e=y[v.reduce((e,t,n)=>t[3]>v[e][3]?n:e,0)];y=y.map(t=>t.map((t,n)=>e[n]+(t-e[n])*s))}for(let t of d){let n=y[_[t]];e[t*4]=n[0]*o,e[t*4+1]=n[1]*o,e[t*4+2]=n[2]*o}}function ee(e,t,n,r){let i=t*n,a=new Uint8Array(i);for(let t=0;t<i;t++)a[t]=+(e[t*4+3]>=128);let o=(e,r)=>{let a=new Uint8Array(i);for(let i=0;i<n;i++)for(let o=0;o<t;o++){let s=+!r;for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){if(Math.abs(c)+Math.abs(a)>1)continue;let l=o+c,u=i+a,d=l<0||u<0||l>=t||u>=n?0:e[u*t+l];s=r?Math.max(s,d):Math.min(s,d)}a[i*t+o]=s}return a},s=o(o(a,!0),!1);if(r){for(let r=0;r<n;r++)for(let i=0;i<t;i++){let o=r*t+i;if(!s[o]||a[o])continue;let c=0,l=0,u=0,d=0;for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){let f=i+s,p=r+o;if(f<0||p<0||f>=t||p>=n||!a[p*t+f])continue;let m=(p*t+f)*4;c+=e[m],l+=e[m+1],u+=e[m+2],d++}d&&(e[o*4]=c/d,e[o*4+1]=l/d,e[o*4+2]=u/d)}for(let t=0;t<i;t++)e[t*4+3]=s[t]?255:0;F(e,t,n,3,!0);return}let c=new Float32Array(i);for(let t=0;t<i;t++)c[t]=P(e[t*4],e[t*4+1],e[t*4+2]);let l=new Float32Array(i),u=255,d=0;for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(!s[i])continue;let o=0,f=0;for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++){let l=r+s,u=e+i;if(l<0||u<0||l>=t||u>=n)continue;let d=u*t+l;a[d]&&(o+=c[d],f++)}l[i]=f?o/f:c[i],u=Math.min(u,l[i]),d=Math.max(d,l[i])}let f=[40,92,150];for(let t=0;t<i;t++){if(!s[t]){e[t*4]=e[t*4+1]=e[t*4+2]=f[0],e[t*4+3]=0;continue}let n=d>u?(l[t]-u)/(d-u):.5,r=f[n<.36?0:n<.7?1:2];e[t*4]=r,e[t*4+1]=r,e[t*4+2]=r,e[t*4+3]=255}}function te(e,t){let{w:n,h:r,rng:i}=t,a=[140,158,96],o=[122,140,84];for(let t=0;t<r;t++)for(let r=0;r<n;r++){let i=(t*n+r)*4,o=a;e[i]=o[0],e[i+1]=o[1],e[i+2]=o[2]}for(let t=0;t<6;t++){let t=i()*n,a=i()*r,s=i.range(n*.15,n*.35),c=i.range(-.25,.25);for(let i=0;i<s;i++){let s=Math.floor(t+Math.cos(c)*i+n)%n,l=(Math.floor(a+Math.sin(c)*i+r)%r*n+s)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2]}}}function ne(e,t,n){let r=t*n,i=new Float32Array(r);for(let t=0;t<r;t++)i[t]=P(e[t*4],e[t*4+1],e[t*4+2]);let a=new Float32Array(r),o=255,s=0,c=Math.max(2,Math.round(t/10));for(let e=0;e<n;e++)for(let r=0;r<t;r++){let l=0,u=0;for(let a=-c;a<=c;a++)for(let o=-c;o<=c;o++)o*o+a*a>c*c||(l+=i[(e+a+n)%n*t+(r+o+t)%t],u++);a[e*t+r]=l/u,o=Math.min(o,l/u),s=Math.max(s,l/u)}let l=new Uint8Array(r),u=[0,1,2].map(()=>[0,0,0,0]);for(let t=0;t<r;t++){let n=s>o?(a[t]-o)/(s-o):.5;l[t]=n<.4?0:n<.72?1:2;let r=u[l[t]];r[0]+=e[t*4],r[1]+=e[t*4+1],r[2]+=e[t*4+2],r[3]++}let d=[0,1,2].map(e=>u.reduce((t,n)=>t+n[e],0)/r);for(let t=0;t<r;t++){let n=u[l[t]];for(let r=0;r<3;r++)e[t*4+r]=d[r]+(n[r]/n[3]-d[r])*.45}}function I(e,t,n){let r=t*n,i=[0,0,0];for(let t=0;t<r;t++)for(let n=0;n<3;n++)i[n]+=e[t*4+n]/r;let a=[i[0]*1.08,i[1]*.97,i[2]*.9],o=a.map((e,t)=>e+([184,174,160][t]-e)*.1),s=Math.max(2,Math.round(n/8));for(let r=0;r<n;r++)for(let n=0;n<t;n++){let i=r%s===0?o:a;for(let a=0;a<3;a++)e[(r*t+n)*4+a]=i[a]}}function L(e,t,n){let r=t*n,i=Math.max(2,Math.round(n/4)),a=t=>P(e[t*4],e[t*4+1],e[t*4+2]),o=[0,0,0],s=0;for(let n=0;n<r;n++)Math.floor(n/t)%i!==i-1&&(o[0]+=e[n*4],o[1]+=e[n*4+1],o[2]+=e[n*4+2],s++);for(let e=0;e<3;e++)o[e]/=Math.max(1,s);let c=P(o[0],o[1],o[2]);for(let n=0;n<r;n++){let r=Math.floor(n/t)%i===i-1;!r&&(a(n),c-18);let s=r?.3:0;for(let t=0;t<3;t++)e[n*4+t]=o[t]+(e[n*4+t]-o[t])*s}}function R(e,t,n){let r=t*n,i=new Uint8Array(r),a=0,o=0,s=0,c=0;for(let t=0;t<r;t++){let n=e[t*4],r=e[t*4+1],l=e[t*4+2];n>=85&&n<=185&&r<=115&&n>r*1.3&&n>l*1.5&&(i[t]=1,a+=n,o+=r,s+=l,c++)}if(c<r*.15)return;let l=[a/c,o/c,s/c];for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=r*t+a;if(i[o]){for(let t=0;t<3;t++)e[o*4+t]=l[t];continue}let s=e[o*4],c=e[o*4+1],u=e[o*4+2];if(Math.max(s,c,u)-Math.min(s,c,u)>40||P(s,c,u)<110)continue;let d=(e,r)=>i[(r+n)%n*t+(e+t)%t];if((d(a,r-1)||d(a,r-2))&&(d(a,r+1)||d(a,r+2))||(d(a-1,r)||d(a-2,r))&&(d(a+1,r)||d(a+2,r)))for(let t=0;t<3;t++)e[o*4+t]=l[t]+(e[o*4+t]-l[t])*.1}}function z(e,t,n){let r=Uint8ClampedArray.from(e),i=(e,r)=>((r+n)%n*t+(e+t)%t)*4,a=(e,t)=>Math.abs(r[e]-r[t])+Math.abs(r[e+1]-r[t+1])+Math.abs(r[e+2]-r[t+2]);for(let o=0;o<n;o++)for(let n=0;n<t;n++){let t=i(n,o);for(let[s,c]of[[i(n,o-1),i(n,o+1)],[i(n-1,o),i(n+1,o)]]){let n=a(t,s);if(a(s,c)<24&&n>8&&n<110&&a(t,c)<110){for(let n=0;n<3;n++)e[t+n]=(r[s+n]+r[c+n])/2;break}}}}function B(e,t,n){let r=t/2,i=n/2,a=new Uint8Array(r*i),o=r,s=-1,c=i,l=-1;for(let n=0;n<i;n++)for(let i=0;i<r;i++)e[(n*t+i+r)*4+3]<200&&(a[n*r+i]=1,o=Math.min(o,i),s=Math.max(s,i),c=Math.min(c,n),l=Math.max(l,n));if(s<0||o<4||s>r-5||c<4||l>i-7)return!1;let u=(e,t)=>e>=o-3&&e<=s+3&&t>=c-3&&t<=l+3,d=(e,t)=>e>=o-1&&e<=s+1&&t>=c-1&&t<=l+2,f=(e,t)=>e>=o-4&&e<=s+4&&t>=l+3&&t<=l+4,p=(e,t)=>e>=o-4&&e<=s+4&&t===l+5,m=-1;for(let e=c;e<=l&&m<0;e++){let t=0;for(let n=o;n<=s;n++)t|=a[e*r+n];t||(m=e)}let h=[0,0,0],g=0;for(let a=0;a<n;a++)for(let n=0;n<t;n++){let o=n%r,s=a%i;if(!(u(o,s)||f(o,s)||p(o,s))){for(let r=0;r<3;r++)h[r]+=e[(a*t+n)*4+r];g++}}for(let e=0;e<3;e++)h[e]/=Math.max(1,g);let _=P(h[0],h[1],h[2]),v=e=>h.map(t=>t*e/Math.max(_,1)),y=v(252.45),b=v(255),x=v(_*.72),S=[44,40,37],C=M,w=N;for(let o=0;o<n;o++)for(let n=0;n<t;n++){let s=(o*t+n)*4,c=n%r,l=o%i,g=a[l*r+c]===1,_=g?m>=0&&l>m?w:C:d(c,l)?S:u(c,l)?y:f(c,l)?b:p(c,l)?x:h;for(let t=0;t<3;t++)e[s+t]=_[t];g&&e[s+3]===255?e[s+3]=253:g||(e[s+3]=255)}return!0}function V(e,t){let{w:n,h:r,rng:i}=t,a=[74,54,42],o=[214,196,160],s=[226,214,190],c=[58,42,34],l=[138,98,62],u=[[200,64,44],[226,138,44],[232,196,64],[74,138,72],[236,230,212]],d=(t,i,a,o,s)=>{for(let c=Math.max(0,i);c<Math.min(r,i+o);c++)for(let r=t;r<t+a;r++){let t=(c*n+(r%n+n)%n)*4;for(let n=0;n<3;n++)e[t+n]=s[n]}};d(0,0,n,r,a),d(0,0,n,2,o),d(0,r-3,n,3,c);let f=-1;for(let e of[4,11,18]){d(0,e+5,n,1,s);for(let t=i.int(0,6);t<n;){let n=i.int(9,16),r=i.int(0,u.length-1);r===f&&(r=(r+1)%u.length),f=r,d(t,e+1,n-1,4,u[r]),t+=n+1}}for(let e=2;e<n;e+=21)d(e,r-7,15,4,l),d(e+1,r-9,13,2,u[i.int(0,3)])}var H=`
// #define GDEBUG 1  // surfaces drawn as the cut: r cast sun shadow, g lit side (x the wall step), b ground shade shadow
${E}
#define GLASS_UPPER ${M.map(e=>e.toFixed(1)).join(`, `)}
#define GLASS_LOWER ${N.map(e=>e.toFixed(1)).join(`, `)}
float gLum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float cdHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// ---- the night sky of the Divisadero frame, designed for its one camera (bearing 0 north, 90 east; degrees)
// the moon drawn where the composition wants it (its light comes from look.moon, further west, so the
// east side's fronts take it: a cheat)
const vec3 CD_MOON = vec3(-0.0493, 0.3338, 0.9413); // bearing 183, 19.5 up
// a cut cloud: a flat bottom at e0, a top of round puffs (bearing centre, half-width, height)
float cdPuffs(float b, vec4 p0, vec4 p1, vec4 p2, vec4 p3) {
  float h = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 q = i == 0 ? p0 : i == 1 ? p1 : i == 2 ? p2 : p3;
    float u = (b - q.x) / q.y;
    h = max(h, q.z * sqrt(max(0.0, 1.0 - u * u)));
  }
  return h;
}
// body a step off the sky, the belly lit by the city below (coral to peach), the moon's side a pale rim
vec3 cdCloud(vec3 sk, float b, float e, float e0, float h, float belly, float moonSide) {
  float top = e0 + h;
  float a = smoothstep(e0 - 0.06, e0 + 0.06, e) * (1.0 - smoothstep(top - 0.08, top + 0.08, e)) * step(0.05, h);
  if (a <= 0.0) return sk;
  vec3 body = vec3(0.29, 0.27, 0.52);
  vec3 bel = mix(vec3(0.98, 0.56, 0.5), vec3(1.0, 0.76, 0.56), smoothstep(0.0, 1.0, belly));
  float under = 1.0 - smoothstep(e0 + 0.32 * belly + 0.2, e0 + 0.32 * belly + 0.3, e);
  vec3 c = mix(body, mix(body, bel, 0.85), under * step(0.01, belly));
  // a second, thinner band over the belly: the glow's falloff in one step
  float under2 = (1.0 - smoothstep(e0 + 0.75 * belly + 0.35, e0 + 0.75 * belly + 0.45, e)) * (1.0 - under);
  c = mix(c, mix(body, bel, 0.35), under2 * step(0.01, belly));
  // the rim on the moon's side: the top edge within a hair of the silhouette
  float rim = (1.0 - smoothstep(0.22, 0.3, top - e)) * moonSide;
  c = mix(c, vec3(0.66, 0.66, 0.9), rim * 0.8);
  return mix(sk, c, a);
}
vec3 cdClouds(vec3 sk, float b, float e) {
  // a long low bank over the street's end, its belly lit warm by the city
  float h = cdPuffs(b, vec4(161.0, 4.0, 1.3, 0.0), vec4(169.0, 6.0, 2.3, 0.0), vec4(179.0, 5.5, 1.8, 0.0), vec4(189.5, 7.5, 1.4, 0.0));
  sk = cdCloud(sk, b, e, 8.3, h, 1.0, smoothstep(178.0, 188.0, b));
  // a smaller one at the moon's shoulder, lit beneath more faintly
  h = cdPuffs(b, vec4(170.5, 3.0, 0.9, 0.0), vec4(175.0, 3.4, 1.7, 0.0), vec4(179.5, 2.8, 1.1, 0.0), vec4(166.5, 2.0, 0.5, 0.0));
  sk = cdCloud(sk, b, e, 17.7, h, 0.5, smoothstep(172.0, 178.0, b));
  // a high thin streak on the right
  h = cdPuffs(b, vec4(150.0, 9.0, 0.45, 0.0), vec4(160.0, 7.0, 0.7, 0.0), vec4(168.0, 5.0, 0.35, 0.0), vec4(0.0));
  sk = cdCloud(sk, b, e, 25.5, h, 0.0, 0.4);
  return sk;
}
// the hopium at the street's end: a far hillside in pastels under the glow, its houses little lit cards
vec3 cdHill(vec3 sk, float b, float e) {
  float x = b - 170.7;
  if (abs(x) > 40.0) return sk;
  // two ridges: the far one pale and lit, the nearer a dusk violet
  float rf = -0.2 + 4.4 * exp(-pow((x + 2.5) / 7.5, 2.0)) + 2.8 * exp(-pow((x - 9.0) / 5.0, 2.0)) + 1.0 * exp(-pow((x + 14.0) / 6.0, 2.0));
  float rn = -0.6 + 2.0 * exp(-pow((x - 4.0) / 9.0, 2.0)) + 1.1 * exp(-pow((x + 10.0) / 5.0, 2.0));
  vec3 c = sk;
  if (e < rf) {
    // the far hill: rose, its right-hand slopes a lit peach facet
    float slope = rf - (-0.2 + 4.4 * exp(-pow((x + 2.6) / 7.5, 2.0)) + 2.8 * exp(-pow((x - 8.9) / 5.0, 2.0)) + 1.0 * exp(-pow((x + 13.9) / 6.0, 2.0)));
    vec3 hill = slope < 0.0 ? vec3(0.9, 0.62, 0.58) : vec3(0.66, 0.48, 0.64);
    // its houses: rows of little fronts in four pastels, dark roofs, a lit window or two
    float rowH = 0.5, row = floor((e + 3.0) / rowH);
    float off = cdHash(vec2(row, 3.1)) * 0.9;
    float cw = 0.78, cell = floor((x + off) / cw);
    vec2 f = vec2(fract((x + off) / cw), fract((e + 3.0) / rowH));
    float hk = cdHash(vec2(cell, row));
    float house = step(0.3, hk) * step(0.14, f.x) * step(f.x, 0.86) * step(0.1, f.y) * step(f.y, 0.7) * step(e, rf - 0.25);
    vec3 paint = hk < 0.48 ? vec3(0.98, 0.84, 0.7) : hk < 0.64 ? vec3(0.96, 0.7, 0.7) : hk < 0.82 ? vec3(0.72, 0.84, 0.82) : vec3(0.92, 0.88, 0.78);
    vec3 roof = vec3(0.4, 0.28, 0.44);
    vec3 hc = f.y > 0.58 ? roof : paint * mix(1.0, 0.82, step(0.0, slope));
    float win = step(0.55, cdHash(vec2(cell, row) + 7.3)) * step(0.4, f.x) * step(f.x, 0.6) * step(0.24, f.y) * step(f.y, 0.44);
    hc = mix(hc, vec3(1.0, 0.82, 0.42), win);
    hill = mix(hill, hc, house * 0.8);
    c = mix(hill, sk, 0.34);
  }
  if (e < rn) {
    // the nearer ridge: dusk violet, a scatter of warm windows
    vec3 near = vec3(0.36, 0.27, 0.48);
    vec2 g = vec2(x / 0.32, (e + 3.0) / 0.2);
    vec2 id = floor(g), fr = fract(g);
    float w = step(0.8, cdHash(id)) * step(0.3, fr.x) * step(fr.x, 0.7) * step(0.3, fr.y) * step(fr.y, 0.7);
    c = mix(near, vec3(1.0, 0.78, 0.4), w);
  }
  return c;
}

// the designed night over the script's gradient: the moon (a crisp disc in two flat rings of its light), the
// clouds, the hill
vec3 cdNightSky(vec3 c, vec3 d, float moonK) {
  float b = mod(degrees(atan(d.x, -d.z)) + 360.0, 360.0), e = degrees(asin(clamp(d.y, -1.0, 1.0)));
  float ang = degrees(acos(clamp(dot(d, CD_MOON), -1.0, 1.0))) + (1.0 - moonK) * 90.0;
  vec3 sk = c;
  sk = mix(sk, sk * 1.08 + vec3(0.015, 0.015, 0.035), 1.0 - smoothstep(4.2, 4.35, ang));
  sk = mix(sk, sk * 1.15 + vec3(0.035, 0.035, 0.06), 1.0 - smoothstep(2.1, 2.2, ang));
  sk = mix(sk, vec3(0.97, 0.95, 0.86), 1.0 - smoothstep(1.0, 1.08, ang));
  sk = cdClouds(sk, b, e);
  return cdHill(sk, b, e);
}
// the script's gradient and the designed night, in any direction (what a puddle mirrors: its clouds, not the
// moon, whose mirror would fall at the frame's foot, cut by it)
vec3 cdSkyDir(vec3 d) {
  float h = clamp(d.y, 0.0, 1.0);
  vec3 c = mix(uGSkyLow, uGSkyBand, smoothstep(0.0, 0.04, h));
  c = mix(c, uGSkyMid, smoothstep(0.035, 0.13, h));
  c = mix(c, uGSkyHigh, smoothstep(0.12, 0.45, h));
  return cdNightSky(c, d, 0.0);
}

// the designed light shapes of the Divisadero frame (lights.ts): lamp pools and shop spills
#define CD_N 96
uniform vec4 uCdA[CD_N]; // position xyz, reach
uniform vec4 uCdB[CD_N]; // colour rgb, strength
uniform vec4 uCdC[CD_N]; // dir xz, half-width, kind (0 pool, 1 spill)
uniform vec4 uCdParams;  // count, gain, engine lamps kept, wet reflections
uniform vec4 uCdPuddles[6]; // hand-placed puddles: x, z, radius along Divisadero, across
uniform vec4 uCdFronts[48]; // the fronts along Divisadero, for the puddles' mirror: side (+1 east), s from, s to, top above its ground
uniform float uCdFrontN;
// the shade hue as a luminance-free offset: c + l * gHueOffset() * pull keeps c's value, turns its hue
vec3 gHueOffset(vec3 hue) { return hue / max(gLum(hue), 1e-3) - 1.0; }
// 0..1: how green a paint is (green over red and blue, and saturated enough to be a colour)
float gGreen(vec3 c) {
  float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
  float sat = (mx - mn) / max(mx, 1e-3);
  return smoothstep(0.02, 0.12, (c.g - max(c.r, c.b)) / max(mx, 1e-3)) * smoothstep(0.08, 0.2, sat);
}
`,U={albedo:`
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
  if (abs(s.normal.y) < 0.3 && s.cutout < 0.5 && far < 1.0) {
    vec2 q = vec2(s.pos.x + s.pos.z, s.pos.y);
    // (big and few: the moon's cast shadows are the fronts' real shapes; the patches stay a quiet step under them)
    float f = vnoise(q / vec2(8.0, 5.0)) * 0.78 + vnoise(q / 2.4 + 3.3) * 0.17 + vnoise(q / 0.5 + 1.7) * 0.05;
    float stain = step(0.62, f) - step(f, 0.3);
    a *= 1.0 + stain * mix(vec3(0.06, 0.05, 0.035), vec3(0.08, 0.07, 0.055), uGShape.w) * (1.0 - far);
    // the foot of a wall darker, its top edge wavering (rain splash, grime): one flat band
    float foot = 1.0 - smoothstep(0.0, 0.04, s.above - 0.55 - 0.35 * vnoise(q * vec2(0.7, 0.0) + 2.1));
    a *= 1.0 - 0.22 * foot * uGShape.w * step(s.above, 900.0) * (1.0 - far);
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
  float ndl = s.cutout > 0.5 && dot(s.normal, s.toEye) < 0.0 ? -s.ndl : s.ndl;
  // the low sun lands: open ground takes it a little past the terminator (a lawn tipped a few degrees
  // from a sunset is lit, and the trees' long shadows cross it)
  float lit = smoothstep(-0.03, 0.03, ndl - 0.015 + 0.15 * smoothstep(0.6, 0.9, s.normal.y));
  // (weak shadow, a wire's broken dashes in the bake, never makes the cut: only solid casters do)
  // (and the sun shadow on every surface, walls included: trees dapple the fronts, the hill's big tree
  // crosses the lawn; cut as crisply, from whichever of the two is darker)
  // (the moon casts none: at night the street's light is the lamps' pools, not striped moonlight)
  float castSh = max(smoothstep(0.52, 0.74, s.shadow), smoothstep(0.45, 0.55, gSunShadow(s.pos, s.normal))) * (1.0 - uGShape.z);
  // (the moon casts on the fronts only: its cut shadows are their relief; the street's light is the pools)
  castSh *= 1.0 - smoothstep(0.4, 0.9, uGShape.w) * smoothstep(0.4, 0.6, abs(s.normal.y));
  float contact = smoothstep(0.4, 0.75, s.ao);
  // bark (marked in the atlas): limbs inside a crown stay in its shade; only a trunk square to the sun lights
  float bark = gIsBark(s);
  lit *= mix(1.0, smoothstep(0.4, 0.5, s.ndl), bark);
  // (in fog, and half in overcast, there is no cut and nothing cast: a soft turn of form toward the hidden sun)
  // (after dark the ground keeps a part of the moon: the street's light is its pools and spills)
  float groundK = 1.0 - 0.6 * uGShape.w * step(0.9, s.normal.y) * step(s.above, 0.4);
  return mix(lit * (1.0 - castSh) * groundK, 0.5 + 0.5 * smoothstep(-0.2, 0.7, s.ndl), uGShape.z) * (1.0 - contact);
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
  // (after dark a front the moon reaches takes it whole: the corner's two faces in two values)
  plane = mix(plane, 1.0, 0.8 * uGShape.w);
  float shade = uGShape.x * lv * mix(0.9, 1.04, s.normal.y * 0.5 + 0.5);
  return vec3(mix(shade, lv * plane, t) * (1.0 - 0.2 * s.ao));
}`,surface:`
// three decided steps of falloff, crisp edges: 0 at the source .. 1 at the reach
float cdSteps(float f) {
  float e = 0.012;
  return 0.28 * (1.0 - smoothstep(1.0 - e, 1.0 + e, f)) + 0.3 * (1.0 - smoothstep(0.7 - e, 0.7 + e, f)) + 0.42 * (1.0 - smoothstep(0.38 - e, 0.38 + e, f));
}
// the light the frame's designed sources put on a surface (a hand-placed shape each, lit by N.L, stepped)
vec3 cdLights(Surface s) {
  vec3 acc = vec3(0.0);
  int n = int(uCdParams.x + 0.5);
  for (int i = 0; i < CD_N; i++) {
    if (i >= n) break;
    vec4 A = uCdA[i], B = uCdB[i], C = uCdC[i];
    if (C.w > 2.5) continue; // (reflection only)
    vec3 rel = s.pos - A.xyz;
    vec2 dir = C.xy, acr = vec2(-C.y, C.x);
    float a = dot(rel.xz, dir), b = dot(rel.xz, acr);
    if (C.w < 0.5) {
      // a lamp's pool: a stadium on the ground stretched across by hw, lit from the globe
      float d = length(vec2(max(abs(a) - C.z, 0.0), b)) / A.w;
      if (d > 1.05) continue;
      float lv = cdSteps(d) * (1.0 - smoothstep(-0.6, 0.4, rel.y));
      vec3 L = normalize(A.xyz - s.pos);
      // (the ground takes the shape whole: its value is the design, not the angle)
      float nd = s.normal.y > 0.6 ? 1.0 : smoothstep(0.02, 0.2, dot(s.normal, L));
      acc += B.rgb * B.w * lv * nd;
    } else {
      // a shop's spill: out of the glass (a out, b along it), widening as it goes, stepped by reach
      if (a < -0.3 || a > A.w * 1.05) continue;
      float hwOut = C.z + max(a, 0.0) * 0.42;
      float latF = 1.0 - smoothstep(hwOut - 0.05, hwOut + 0.05, abs(b));
      float lv = cdSteps(max(a, 0.0) / A.w);
      float vf = 1.0 - smoothstep(2.0, 2.35, rel.y);
      vec3 q = A.xyz + vec3(acr.x, 0.0, acr.y) * clamp(b, -C.z, C.z);
      vec3 L = normalize(q - s.pos);
      float nd = s.normal.y > 0.6 ? 1.0 : smoothstep(0.0, 0.18, dot(s.normal, L));
      acc += B.rgb * B.w * lv * latF * vf * nd;
      // the warm thrown up the front over the shop (its awning's bulbs, its sign) and into the undersides of the
      // bays and the cornice: three flat steps by height, so the storeys are warm underneath and cool on top
      float up = rel.y - 1.6;
      if (up > 0.0 && a < 2.3 && abs(b) < C.z + 1.0 && B.w > 0.5) {
        float wash = 0.45 * (1.0 - smoothstep(2.6, 2.7, up)) + 0.33 * (1.0 - smoothstep(5.2, 5.3, up)) + 0.22 * (1.0 - smoothstep(8.6, 8.7, up));
        float front = smoothstep(0.5, 0.8, dot(s.normal.xz, dir)) * step(abs(s.normal.y), 0.5);
        float under = smoothstep(0.5, 0.8, -s.normal.y);
        acc += B.rgb * B.w * wash * (0.16 * front + 0.75 * under);
      }
      // what stands out in front of the glass (a tree's crown, a pole) takes the light on the side turned to it, up
      // to the crown's height, in two steps
      if (up > 0.0 && a > 0.6 && a < 4.0 && abs(b) < C.z + 1.5 && B.w > 0.5) {
        float toward = smoothstep(0.1, 0.35, -dot(s.normal, normalize(vec3(dir.x, 0.35, dir.y))));
        float reach = 0.6 * (1.0 - smoothstep(3.6, 3.7, up)) + 0.4 * (1.0 - smoothstep(6.4, 6.5, up));
        acc += B.rgb * B.w * toward * reach * 0.55;
      }
    }
  }
  return acc * uCdParams.y;
}
// the wet street: every designed light mirrored in the asphalt as broken vertical streaks (stretched down the
// view, two values with a crisp edge), strongest in the puddles: big world-space patches with a hard rim
float cdPuddle(vec2 p, out float rim) {
  float w = vnoise(p / 9.0) * 0.65 + vnoise(p / 3.4 + 4.7) * 0.35;
  float q = smoothstep(0.62, 0.635, w);
  rim = smoothstep(0.605, 0.615, w) * (1.0 - smoothstep(0.625, 0.635, w));
  // the hand-placed ones: ellipses along the street (9.3 deg off north), their rims wobbling
  vec2 d = vec2(0.1613, 0.9869), e = vec2(0.9869, -0.1613);
  for (int i = 0; i < 6; i++) {
    vec4 P = uCdPuddles[i];
    if (P.z <= 0.0) continue;
    vec2 r = p - P.xy;
    float f = length(vec2(dot(r, d) / P.z, dot(r, e) / P.w)) + (vnoise(p * 1.1 + float(i) * 5.0) - 0.5) * 0.3 + (vnoise(p * 3.1 + float(i)) - 0.5) * 0.08;
    q = max(q, 1.0 - smoothstep(0.985, 1.0, f));
    rim = max(rim, smoothstep(0.95, 0.965, f) * (1.0 - smoothstep(0.985, 1.0, f)));
  }
  rim *= 1.0 - q;
  return q;
}
// a puddle's mirror: the street canyon as two fronts (their tops from the scene, a lit band of shops at their
// foot, awnings, a few lit windows, the cornice's warm underside) under the designed sky
vec3 cdMirror(vec3 P, vec3 R) {
  vec3 sky = cdSkyDir(R) * 0.92;
  vec2 Dd = vec2(0.1613, 0.9869), Ee = vec2(0.9869, -0.1613);
  vec2 rel = P.xz - vec2(-1671.0, -321.0);
  float ps = dot(rel, Dd), pt = dot(rel, Ee), rs = dot(R.xz, Dd), rt = dot(R.xz, Ee);
  if (abs(rt) < 1e-4) return sky;
  float side = rt > 0.0 ? 1.0 : -1.0;
  float k = ((side > 0.0 ? 12.43 : -12.51) - pt) / rt;
  float hs = ps + rs * k;
  float hy = R.y * k + 0.031 * (hs - ps); // height over the front's own ground (the street falls 3%)
  float top = 0.0;
  int nf = int(uCdFrontN + 0.5);
  for (int i = 0; i < 48; i++) {
    if (i >= nf) break;
    vec4 F = uCdFronts[i];
    if (abs(F.x - side) < 0.5 && hs >= F.y && hs < F.z) top = F.w;
  }
  if (hy > top) return sky;
  // the wall: the east side moonlit slate, the west in shade, plum; the cornice's crown pale, its underside warm
  vec3 wall = side > 0.0 ? vec3(0.27, 0.28, 0.42) : vec3(0.2, 0.16, 0.27);
  if (hy > top - 0.75) wall = side > 0.0 ? vec3(0.5, 0.5, 0.66) : vec3(0.32, 0.27, 0.4);
  else if (hy > top - 1.25) wall = vec3(0.62, 0.38, 0.26);
  else if (hy > 4.4 && hy < 7.0) wall = mix(wall, vec3(0.5, 0.3, 0.22), 0.35);
  // windows: one every 2.6 m, a storey every 3.2 m over the shop; only the lit ones show (one in five, a warm
  // pane a step dimmer than the shops'): the mirrored wall is a quiet field, not a barcode of dark panes
  if (hy > 5.2 && hy < top - 1.5) {
    float wu = fract(hs / 2.6), wv = fract((hy - 4.4) / 3.2);
    if (wu > 0.3 && wu < 0.7 && wv > 0.26 && wv < 0.84) {
      float on = step(0.8, cdHash(vec2(floor(hs / 2.6) + side * 50.0, floor((hy - 4.4) / 3.2))));
      wall = mix(wall, vec3(0.86, 0.62, 0.36), on);
    }
  }
  // the shops' glass and awnings, from the designed lights on this side
  float wy = P.y + R.y * k;
  vec3 hit = P + R * k;
  int n = int(uCdParams.x + 0.5);
  for (int i = 0; i < CD_N; i++) {
    if (i >= n) break;
    vec4 A = uCdA[i], B = uCdB[i], C = uCdC[i];
    if (C.w < 0.5 || dot(C.xy, Ee) * side > -0.5) continue;
    float along = dot((hit - A.xyz).xz, vec2(-C.y, C.x));
    if (abs(along) > C.z) continue;
    float dy = wy - A.y;
    if (C.w < 2.5) {
      if (dy > -1.25 && dy < 1.2) {
        float mull = step(0.05, fract((along + C.z) / 3.2)) * step(-1.05, dy);
        wall = mix(vec3(0.08, 0.06, 0.06), B.rgb * mix(0.55, 1.15, B.w), mull);
      }
    } else if (abs(dy) < A.w) wall = B.rgb * (A.w > 0.25 ? 0.95 : 1.2);
  }
  return wall;
}
vec3 cdWet(Surface s, float puddle) {
  if (s.normal.y < 0.9 || s.dist > 220.0 || s.cutout > 0.5) return vec3(0.0);
  // (paint takes reflections only under a puddle: a crosswalk's stripes are not glass)
  float paintK = gLum(s.albedo) > 0.3 ? puddle : 1.0;
  if (paintK <= 0.0) return vec3(0.0);
  vec3 V = -s.toEye;
  vec3 R = vec3(V.x, -V.y, V.z);
  vec3 acc = vec3(0.0);
  int n = int(uCdParams.x + 0.5);
  // the ripples: bands across each streak (constant distance from the eye reads as across), a hand apart
  float rr = length(s.pos.xz - cameraPosition.xz);
  for (int i = 0; i < CD_N; i++) {
    if (i >= n) break;
    vec4 A = uCdA[i], B = uCdB[i], C = uCdC[i];
    float kind = C.w;
    bool flat_ = kind > 0.5; // a shape on a front (shop glass, awning, sign, neon); else a lamp's globes
    // (the fronts' shapes are mirrored only in the puddles, whole: cdMirror; the wet road between keeps the lamps)
    float fk = flat_ && C.z > 0.5 ? 0.0 : 1.0;
    if (fk <= 0.0) continue;
    vec2 n2 = flat_ ? C.xy : normalize(cameraPosition.xz - A.xz);
    vec3 o = A.xyz;
    float den = dot(R.xz, n2);
    if (den > -1e-3) continue;
    float t = -dot((s.pos - o).xz, n2) / den;
    if (t < 0.0 || t > 160.0) continue;
    vec3 h = s.pos + R * t;
    vec2 acr = vec2(-n2.y, n2.x);
    float lat = dot((h - o).xz, acr);
    float vy = h.y - o.y;
    float hw, v0, v1, k, pitch = 0.0, fill = 1.0;
    if (kind < 0.5) {
      // a lamp: one globe, or the median standard's two across the street
      hw = 0.32; v0 = -0.34; v1 = 0.34; k = 0.9;
      if (C.z > 1.5) lat = abs(lat) - abs(dot(C.xy, acr)) * 0.78;
      if (C.z < 0.5) { hw = 0.07; v0 = -1.2; v1 = 1.2; k = 1.0; } // a neon tube: a line of light
    } else if (kind < 2.5) {
      // a shop's glass: its panes (a mullion every couple of metres) each a narrow streak
      hw = C.z; v0 = -1.0; v1 = 1.0; k = 0.5; pitch = 2.1; fill = 0.42;
    } else {
      // reflection only (lights.ts kind 3): an awning's lit underside, a sign's letters (A.w its half-height)
      hw = C.z; v0 = -A.w; v1 = A.w; k = 1.0; pitch = 1.3; fill = 0.5;
    }
    if (abs(lat) > hw + 0.5) continue;
    float inLat = 1.0 - smoothstep(hw - 0.04, hw + 0.04, abs(lat));
    float len = 1.0;
    if (pitch > 0.0) {
      // broken into vertical streaks across the shape, each its own width and length
      float g = (lat + hw) / pitch + float(i) * 0.37;
      float id = floor(g), u = fract(g) - 0.5;
      float hk = cdHash(vec2(id, float(i)));
      float fl = fill * mix(0.55, 1.25, hk);
      len = mix(0.45, 1.2, cdHash(vec2(float(i), id + 3.1)));
      inLat *= 1.0 - smoothstep(fl * 0.5 - 0.04, fl * 0.5 + 0.04, abs(u));
    }
    // stretched down the ray by the wet's roughness: a puddle nearly a mirror (a short bright streak), the
    // wet road a long dim one; two values with crisp edges
    float vd = max(v0 - vy, vy - v1);
    float core = 1.0 - smoothstep(0.0, 0.05, vd - t * len * mix(0.018, 0.012, puddle));
    float outer = 1.0 - smoothstep(0.0, 0.08, vd - t * len * mix(0.1, 0.06, puddle));
    // broken by the ripples into dashes across the streak (a puddle is still: whole)
    float brk = mix(step(0.42, vnoise(vec2(rr * 2.2, lat * 0.6 + float(i) * 3.7))), 1.0, puddle * 0.85);
    acc += B.rgb * B.w * k * inLat * (0.4 * outer + 0.6 * core) * brk * fk;
  }
  return acc * mix(0.4, 1.1, puddle) * paintK;
}
vec3 styleSurface(vec3 col, Surface s) {
  #ifdef GDEBUG
  { float nd = s.cutout > 0.5 && dot(s.normal, s.toEye) < 0.0 ? -s.ndl : s.ndl;
    float lt = smoothstep(-0.03, 0.03, nd - 0.015 + 0.15 * smoothstep(0.6, 0.9, s.normal.y));
    float pl = mix(mix(0.0, 1.0, smoothstep(0.64, 0.72, s.ndl)), 1.0, smoothstep(0.5, 0.8, s.normal.y));
    return vec3(smoothstep(0.45, 0.55, gSunShadow(s.pos, s.normal)), lt * pl, smoothstep(0.52, 0.74, s.shadow)); }
  #endif
  // the engine's parts, each treated on its own: the sun and sky light (styleLight's: a value), the lamps
  // (pools, headlights, the night street glow), the gloss
  vec3 c = s.albedo * s.light;
  vec3 lamps = s.albedo * s.lamps;
  vec3 sheen = s.sheen;
  float t = gT;
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
      c = mix(sh, lit, t);
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
  // the designed light shapes, after dark: the frame's real light
  float night = smoothstep(0.3, 0.7, uNightGlow);
  // after dark the city is lit from the street: what stands above the shopfronts sinks into the night
  // (a painter's fade upward), so the storeys are dark masses and their cornices cut against the sky
  // (a mild fade only: the moon keeps the paint readable; the street's warm holds the foot of every front)
  if (s.above < 900.0 && s.cutout < 0.5 && abs(s.normal.y) < 0.95) c *= mix(1.0, 0.8, smoothstep(6.0, 13.0, s.above) * night);
  // lit edges: what faces up on a front (sills, the bands, the cornice's crown, a bay's cap) takes the moon
  // as one pale cool stroke
  // (not a crown's cap: the moon on leaves is the script's lit green)
  if (s.normal.y > 0.6 && s.above > 2.6 && s.above < 900.0 && s.cutout < 0.5 && (s.kind & 24) == 0)
    c = mix(c, vec3(0.6, 0.62, 0.84) * (0.5 + 0.7 * gLum(s.albedo)), 0.6 * night * gT * (1.0 - green));
  vec3 cd = s.cutout > 0.5 ? vec3(0.0) : cdLights(s) * night;
  // (the shop's warm on leaves is golden, not lime: a green takes it at its value, half its own hue)
  vec3 cdAlb = mix(s.albedo, vec3(gLum(s.albedo)) * vec3(1.35, 0.88, 0.52), 0.7 * green) * (1.0 - 0.5 * green);
  float rim;
  float puddle = (s.normal.y > 0.9 && s.cutout < 0.5) ? cdPuddle(s.pos.xz, rim) : 0.0;
  if (s.normal.y <= 0.9 || s.cutout > 0.5) rim = 0.0;
  vec3 wet = cdWet(s, puddle) * night * uCdParams.w;
  // wet asphalt is darker, a puddle darker still (it holds the sky's indigo, not the road's grey)
  // (the sky's colour in the mirrored direction: a puddle is a cut shape of sky lying in the road)
  vec3 Vw = -s.toEye;
  float ry = clamp(-Vw.y, 0.0, 1.0);
  vec3 skyR = mix(mix(uGSkyLow, uGSkyBand, smoothstep(0.0, 0.06, ry)), mix(uGSkyMid, uGSkyHigh, smoothstep(0.15, 0.6, ry)), smoothstep(0.04, 0.2, ry));
  // a figure's long shadow (concept-divis-figure: its exact paint, #07050a) is a cut shape: not wet, not lit
  float figSh = (s.normal.y > 0.5 && s.cutout < 0.5 && length(s.albedo - vec3(7.0, 5.0, 10.0) / 255.0) < 0.006) ? 1.0 : 0.0;
  wet *= 1.0 - figSh;
  float wetK = night * step(0.9, s.normal.y) * max(step(gLum(s.albedo), 0.3), puddle) * (s.cutout > 0.5 ? 0.0 : 1.0) * (1.0 - figSh);
  vec3 Rm = vec3(Vw.x, -Vw.y, Vw.z);
  vec3 mir = puddle > 0.0 && wetK > 0.0 ? cdMirror(s.pos, normalize(Rm)) * 0.82 : vec3(0.0);
  c = mix(c, mix(mix(c * 0.85, skyR * 0.5, 0.12), mir, puddle), wetK);
  // a puddle's rim: a thin paler line where the water thins (Season's edge, not a glint)
  c = mix(c, c * 1.35 + vec3(0.02, 0.02, 0.04), rim * wetK * step(s.dist, 60.0));
  if (figSh > 0.5) return vec3(0.07, 0.055, 0.11);
  return c + lamps * uCdParams.z + sheen + cdAlb * cd + wet;
}`},W={cloudField:`
float styleCloudField(vec2 uv) {
  // stretched east-west: banks rather than blots
  vec2 q = uv * vec2(0.6, 1.4);
  return texture(uCloudTex, q).r * 0.9 + texture(uCloudTex, q * 2.3 + 0.37).g * 0.1;
}`,cloud:`
vec4 gCloud = vec4(0.0); // the cloud at this pixel, for styleSky (colour, cover)
vec4 styleCloud(vec4 cloud, float field, float threshold, float core, float lit, vec3 dir) {
  // cut paper: a crisp edge, two tones (the sun's side lit), a darker core
  float a = smoothstep(threshold - 0.008, threshold + 0.008, field);
  float rim = smoothstep(0.52, 0.58, lit);
  vec3 body = mix(uGSkyMid, uGShade, 0.45);
  vec3 sunlit = mix(uGSkyBand, uGSkyLow, 0.4) * 1.06;
  vec3 c = mix(body, sunlit, rim);
  c = mix(c, body * 0.9, smoothstep(threshold + 0.12, threshold + 0.2, field) * (1.0 - rim) * 0.6);
  // (fewer at night: the indigo stays clean)
  float fade = smoothstep(0.03, 0.16, dir.y) * (1.0 - uGShape.z) * (1.0 - uGShape.w);
  // (at night: a body a step off the sky, the moon's side a pale lilac rim)
  c = mix(c, mix(mix(uGSkyMid, uGSkyHigh, 0.3) * 1.25, vec3(0.62, 0.6, 0.86), rim * 0.8), uGShape.w);
  gCloud = vec4(c, a * fade);
  return vec4(c, a * fade);
}`,sky:`
vec3 styleSky(vec3 col, vec3 d) {
  // the four stops by elevation (sin): horizon, the band a few degrees up, the middle, the zenith
  float h = clamp(d.y, 0.0, 1.0);
  float t = sqrt(h);
  vec3 c = mix(uGSkyLow, uGSkyBand, smoothstep(0.0, 0.04, h));
  c = mix(c, uGSkyMid, smoothstep(0.035, 0.13, h));
  c = mix(c, uGSkyHigh, smoothstep(0.12, 0.45, h));
  // the sun's side: the low sky warms toward the light (and keeps it a while after sunset)
  vec3 sd = normalize(vec3(uTrueSunDir.x, max(uTrueSunDir.y, 0.02), uTrueSunDir.z));
  float s = max(dot(d, sd), 0.0);
  float warm = pow(s, 5.0) * uAfterglow * (1.0 - smoothstep(0.2, 0.7, uTrueSunDir.y)) * (1.0 - uGShape.z);
  vec3 sunHue = uSkySunColor / max(max(uSkySunColor.r, max(uSkySunColor.g, uSkySunColor.b)), 1e-3);
  c = mix(c, mix(uGSkyLow, sunHue, 0.45), warm * (1.0 - t * 0.7));
  // the clouds
  c = mix(c, gCloud.rgb, gCloud.a);
  // into the air at the horizon
  c = mix(c, mix(hazeColor(d), uGSkyLow, 0.45), 1.0 - smoothstep(-0.02, 0.035, d.y));
  float sv = max(dot(d, uSunDir), 0.0);
  if (uSunUp > 0.5) {
    float disc = smoothstep(uDiscCos, uDiscCos + (1.0 - uDiscCos) * 0.25, sv) * smoothstep(-0.01, 0.012, d.y);
    c += sunHue * exp((sv - 1.0) / 0.0035) * 0.35 * (1.0 - uGShape.z);
    c = mix(c, mix(sunHue, vec3(1.0), 0.75), disc * (1.0 - uGShape.z * 0.8));
  } else {
    // the night: the designed moon, clouds and hill (common: cdNightSky)
    c = mix(c, cdNightSky(c, d, 1.0), smoothstep(0.5, 0.8, uGShape.w));
  }
  return c;
}`},G=[{kind:1,p:[-1655.51,67.44,-303.31],r:6.5,dir:[-.99,.16],hw:8.89,col:`#ffcf80`,k:1},{kind:3,p:[-1656.5,68.94,-303.15],r:.32,dir:[-.99,.16],hw:8.89,col:`#ff7f5d`,k:.75},{kind:3,p:[-1655.65,69.82,-303.29],r:.22,dir:[-.99,.16],hw:5.25,col:`#f2d58a`,k:.55},{kind:1,p:[-1642.23,67.33,-315.04],r:6.5,dir:[-.16,-.99],hw:14.45,col:`#ffcf80`,k:1},{kind:1,p:[-1653.38,66.76,-290.24],r:6.5,dir:[-.99,.16],hw:3.25,col:`#ff9a48`,k:1},{kind:3,p:[-1653.52,69.14,-290.22],r:.22,dir:[-.99,.16],hw:2.85,col:`#ffc46a`,k:.55},{kind:1,p:[-1652.14,66.44,-282.69],r:6.5,dir:[-.99,.16],hw:3.3,col:`#ffb868`,k:1},{kind:3,p:[-1653.13,67.94,-282.53],r:.32,dir:[-.99,.16],hw:3.3,col:`#97caa5`,k:.75},{kind:3,p:[-1652.28,68.82,-282.67],r:.22,dir:[-.99,.16],hw:1.89,col:`#f2d58a`,k:.55},{kind:1,p:[-1650.9,65.95,-275.09],r:6.5,dir:[-.99,.16],hw:3.3,col:`#ff9a48`,k:1},{kind:3,p:[-1651.89,67.45,-274.93],r:.32,dir:[-.99,.16],hw:3.3,col:`#ffa774`,k:.75},{kind:3,p:[-1651.04,68.33,-275.07],r:.22,dir:[-.99,.16],hw:1.68,col:`#f2d58a`,k:.55},{kind:1,p:[-1649.71,65.58,-267.79],r:6.5,dir:[-.99,.16],hw:3,col:`#a06a40`,k:.35},{kind:1,p:[-1647.2,64.82,-252.44],r:6.5,dir:[-.99,.16],hw:3.05,col:`#a06a40`,k:.35},{kind:1,p:[-1644.89,63.99,-238.33],r:6.5,dir:[-.99,.16],hw:10.15,col:`#ffb868`,k:1},{kind:3,p:[-1645.88,65.49,-238.17],r:.32,dir:[-.99,.16],hw:10.15,col:`#ffa174`,k:.75},{kind:3,p:[-1645.03,66.37,-238.31],r:.22,dir:[-.99,.16],hw:2.52,col:`#f2d58a`,k:.55},{kind:1,p:[-1639.56,63.26,-205.71],r:6.5,dir:[-.99,.16],hw:4.9,col:`#ffb868`,k:1},{kind:1,p:[-1634.01,62.73,-171.76],r:6.5,dir:[-.99,.16],hw:3.2,col:`#ffb868`,k:.8},{kind:1,p:[-1632.65,62.55,-163.42],r:6.5,dir:[-.99,.16],hw:4.15,col:`#a06a40`,k:.35},{kind:1,p:[-1680.91,67.88,-304.07],r:6.5,dir:[.99,-.16],hw:4.04,col:`#ffcf80`,k:1},{kind:3,p:[-1680.77,70.26,-304.09],r:.22,dir:[.99,-.16],hw:3.15,col:`#f2d58a`,k:.55},{kind:1,p:[-1679.43,67.31,-295],r:6.5,dir:[.99,-.16],hw:4.05,col:`#ffb868`,k:1},{kind:3,p:[-1678.44,68.81,-295.16],r:.32,dir:[.99,-.16],hw:4.05,col:`#ffaa75`,k:.75},{kind:3,p:[-1679.29,69.69,-295.02],r:.22,dir:[.99,-.16],hw:3.36,col:`#f2d58a`,k:.55},{kind:1,p:[-1677.91,66.85,-285.72],r:6.5,dir:[.99,-.16],hw:4.25,col:`#a06a40`,k:.35},{kind:1,p:[-1676.25,66.37,-275.56],r:6.5,dir:[.99,-.16],hw:4.95,col:`#ff9a48`,k:1},{kind:3,p:[-1675.26,67.87,-275.72],r:.32,dir:[.99,-.16],hw:4.95,col:`#9ac8a5`,k:.75},{kind:3,p:[-1676.11,68.75,-275.58],r:.22,dir:[.99,-.16],hw:1.68,col:`#f2d58a`,k:.55},{kind:1,p:[-1672.72,65.13,-253.95],r:6.5,dir:[.99,-.16],hw:5.55,col:`#ffb868`,k:1},{kind:3,p:[-1671.73,66.83,-254.11],r:.32,dir:[.99,-.16],hw:5.55,col:`#a2d4a0`,k:.75},{kind:3,p:[-1672.58,67.71,-253.97],r:.22,dir:[.99,-.16],hw:4.2,col:`#f2d58a`,k:.55},{kind:1,p:[-1670.76,64.44,-242],r:6.5,dir:[.99,-.16],hw:5.45,col:`#a06a40`,k:.4},{kind:3,p:[-1670.62,67.02,-242.02],r:.22,dir:[.99,-.16],hw:3.78,col:`#f2d58a`,k:.55},{kind:1,p:[-1668.79,63.89,-229.91],r:6.5,dir:[.99,-.16],hw:5.7,col:`#ff9a48`,k:1},{kind:3,p:[-1667.8,65.59,-230.07],r:.32,dir:[.99,-.16],hw:5.7,col:`#937356`,k:.75},{kind:3,p:[-1668.65,66.47,-229.93],r:.22,dir:[.99,-.16],hw:1.47,col:`#f2d58a`,k:.55},{kind:1,p:[-1659.93,64.08,-237.7],r:6.5,dir:[-.16,-.99],hw:9.45,col:`#ff9a48`,k:1},{kind:1,p:[-1661.52,62.86,-185.45],r:6.5,dir:[.99,-.16],hw:21.15,col:`#ffcf80`,k:1},{kind:1,p:[-1656.68,62.4,-155.8],r:6.5,dir:[.99,-.16],hw:7.8,col:`#a06a40`,k:.35},{kind:1,p:[-1622.68,61.83,-102.43],r:6.5,dir:[-.99,.16],hw:3.45,col:`#ffb868`,k:.7},{kind:1,p:[-1618.25,61.41,-75.29],r:6.5,dir:[-.99,.16],hw:5.45,col:`#ffb868`,k:.7},{kind:1,p:[-1613.73,61.05,-47.66],r:6.5,dir:[-.99,.16],hw:4.45,col:`#ffb868`,k:.7},{kind:1,p:[-1609.05,60.46,-19.04],r:6.5,dir:[-.99,.16],hw:3.95,col:`#ffb868`,k:.7},{kind:1,p:[-1604.82,60.4,6.87],r:6.5,dir:[-.99,.16],hw:3.2,col:`#ffb868`,k:.7},{kind:1,p:[-1600.18,59.93,35.24],r:6.5,dir:[-.99,.16],hw:3.45,col:`#ffb868`,k:.7},{kind:1,p:[-1595.75,59.28,62.38],r:6.5,dir:[-.99,.16],hw:5.45,col:`#ffb868`,k:.7},{kind:1,p:[-1647.3,61.85,-98.41],r:6.5,dir:[.99,-.16],hw:3.45,col:`#ffb868`,k:.7},{kind:1,p:[-1642.86,61.39,-71.27],r:6.5,dir:[.99,-.16],hw:5.45,col:`#ffb868`,k:.7},{kind:1,p:[-1638.34,60.94,-43.64],r:6.5,dir:[.99,-.16],hw:4.45,col:`#ffb868`,k:.7},{kind:1,p:[-1633.67,60.42,-15.02],r:6.5,dir:[.99,-.16],hw:3.95,col:`#ffb868`,k:.7},{kind:1,p:[-1629.43,60.32,10.89],r:6.5,dir:[.99,-.16],hw:3.2,col:`#ffb868`,k:.7},{kind:1,p:[-1624.79,59.83,39.26],r:6.5,dir:[.99,-.16],hw:3.45,col:`#ffb868`,k:.7},{kind:1,p:[-1620.36,59.21,66.4],r:6.5,dir:[.99,-.16],hw:5.45,col:`#ffb868`,k:.7},{kind:0,p:[-1668.37,75.3,-308.06],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1662.09,73.17,-269.66],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1655.8,71.27,-231.18],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1651.32,70.62,-203.74],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1645.14,70.01,-165.94],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1638.91,69.55,-127.85],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1632.59,69.09,-89.16],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1626.3,68.38,-50.67],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1620.01,67.88,-12.18],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1613.72,67.39,26.31],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1607.43,66.64,64.8],r:8,dir:[.99,-.16],hw:1.6,col:`#ffd49a`,k:1},{kind:0,p:[-1663.43,70.08,-224.46],r:10,dir:[.16,.99],hw:1.1,col:`#ffc27a`,k:.8},{kind:0,p:[-1644.68,69.74,-210.19],r:10,dir:[.16,.99],hw:1.1,col:`#ffc27a`,k:.8},{kind:0,p:[-1653.73,69.6,-287.24],r:4,dir:[.16,.99],hw:.4,col:`#ff3c8c`,k:1}],K=[[-1672.97,-315.1,1.45,2.6],[-1667.77,-317.37,1.35,2.3],[-1663.83,-310.62,1.3,2.6],[-1670.64,-303.33,2.6,1.3],[-1665.23,-295.6,3.2,1.1]],q=[[1,10.52,29.4,11.9],[1,29.4,37,8.34],[1,37,44.7,8.34],[1,44.7,52.4,8.34],[1,52.4,59.5,9.3],[1,59.5,67.9,13.9],[1,67.9,75.1,14.1],[1,75.1,96.5,11.7],[1,113.4,124.3,11.7],[1,124.3,132.7,11.7],[1,132.7,140.9,11.7],[1,140.9,149.5,11.7],[1,149.5,157,5.74],[1,157,166.4,8.5],[1,166.4,199.5,21.4],[-1,10.52,19.7,11.7],[-1,19.7,28.9,11.7],[-1,28.9,38.5,11.7],[-1,38.5,49.5,11.7],[-1,49.5,59.8,9.9],[-1,59.8,72,9.5],[-1,72,84,9.5],[-1,84,96.5,9.5],[-1,113.6,157,8.5],[-1,157,173.7,6.34],[-1,173.7,199.5,11.7],[1,219.5,227.5,11.7],[1,227.5,237.5,14.9],[1,237.5,245,11.7],[1,245,257,14.9],[1,257,266,11.7],[1,266,274,14.9],[1,274,284,11.7],[1,284,291.5,14.9],[1,291.5,303.5,11.7],[1,303.5,312.5,14.9],[1,312.5,320.5,11.7],[1,320.5,330.5,14.9],[1,330.5,338,11.7],[1,338,350,14.9],[1,350,359,11.7],[1,359,367,14.9],[1,367,377,11.7],[1,377,384.5,14.9],[1,384.5,396.5,11.7],[1,396.5,405.5,14.9],[1,405.5,413.5,11.7],[-1,219.5,227.5,11.7],[-1,227.5,237.5,14.9],[-1,237.5,245,11.7],[-1,245,257,14.9],[-1,257,266,11.7],[-1,266,274,14.9],[-1,274,284,11.7],[-1,284,291.5,14.9],[-1,291.5,303.5,11.7],[-1,303.5,312.5,14.9],[-1,312.5,320.5,11.7],[-1,320.5,330.5,14.9],[-1,330.5,338,11.7],[-1,338,350,14.9],[-1,350,359,11.7],[-1,359,367,14.9],[-1,367,377,11.7],[-1,377,384.5,14.9],[-1,384.5,396.5,11.7],[-1,396.5,405.5,14.9],[-1,405.5,413.5,11.7]],J=96,Y=Array.from({length:J},()=>new r),X=Array.from({length:J},()=>new r),Z=Array.from({length:J},()=>new r);G.slice(0,J).forEach((e,t)=>{let n=new i(e.col);Y[t].set(e.p[0],e.p[1],e.p[2],e.r),X[t].set(n.r,n.g,n.b,e.k);let r=Math.hypot(e.dir[0],e.dir[1])||1;Z[t].set(e.dir[0]/r,e.dir[1]/r,e.hw,e.kind)});var re=Array.from({length:6},(e,t)=>new r(...K[t]??[0,0,0,0])),ie=Array.from({length:48},(e,t)=>new r(...q[t]??[0,0,0,0])),Q=new r(Math.min(J,G.length),2.2,0,1),$=null,ae=c({name:`concept-divis`,description:`Concept: Divisadero at night, noir. Gouache light with designed light shapes (shop spills, lamp pools) and a deep indigo night.`,look:{textureMacro:0,moon:{azimuthDeg:210,elevationDeg:46},sunShadow:{enabled:!0,soft:.3,minElevation:30},grade:{contrast:1.06,saturation:1.12,wash:.5,vignette:.12,shoulder:.92,bloom:{strength:.12,nightStrength:.45}},shadows:{blur:.5,sun:1,contact:.6,near:{blur:.12}},clouds:{scale:6e3},weathers:{fog:{grey:`#8c9cba`,saturation:.9,hazeScale:.035},overcast:{grey:`#98a0b0`}},windowColors:[`#ffb24e`,`#ffbc5c`,`#ffc46a`,`#ffd488`],lights:{poolStrength:1.6}},time:g,tiles:j,clouds:()=>{if($)return $;let r=l(`style-gouache-clouds`),i=u(256,256,r,{cells:3,octaves:4,gain:.48,warp:.6}),c=u(256,256,r.fork(`fine`),{cells:7,octaves:2,gain:.5}),d=new Uint8Array(262144);for(let e=0;e<65536;e++)d[e*4]=Math.round(i[e]*255),d[e*4+1]=Math.round(c[e]*255),d[e*4+3]=255;return $=new n(d,256,256,o,a),$.wrapS=$.wrapT=e,$.magFilter=t,$.minFilter=s,$.generateMipmaps=!0,$.needsUpdate=!0,$},uniforms:{...T,uCdA:{value:Y},uCdB:{value:X},uCdC:{value:Z},uCdParams:{value:Q},uCdPuddles:{value:re},uCdFronts:{value:ie},uCdFrontN:{value:Math.min(48,q.length)}},glsl:{common:H,...U,...W}});export{Q as cdParams,ae as default};