import{C as e,M as t,T as n,_ as r,c as i,g as a,k as o,o as s}from"./three.core-BV62Qcki.js";import{t as c}from"./kit-Dfvzj6n2.js";import{n as l}from"./rng-BVZPdspY.js";import{t as u}from"./look-CoNAVUHR.js";import{t as d}from"./uniforms-D7QLcwSD.js";const f={sky:[`#07081a`,`#0e0f2c`,`#1a173e`,`#2c2350`],sunSide:`#2c2350`,cloud:[`#161638`,`#22224a`,`#3a2848`],cover:.3,lit:`#34406a`,half:`#262c4c`,shade:`#171a32`,leaf:[`#1e3236`,`#0f1c24`],haze:`#1c1838`,line:`#5a5070`,sunI:.18,hazeE:4200,glow:1},p=[{hour:0,...f},{hour:5.2,sky:[`#0c0f2c`,`#181c46`,`#2e2c60`,`#4c3e72`],sunSide:`#5a4478`,cloud:[`#1c1c40`,`#2a2852`,`#3a2c50`],cover:.45,lit:`#3a4470`,half:`#2a3052`,shade:`#1c1e38`,leaf:[`#22363c`,`#112028`],haze:`#2c2850`,line:`#5a5070`,sunI:.16,hazeE:4200,glow:.9},{hour:6.4,sky:[`#34407e`,`#7670a8`,`#dc9aa0`,`#f8c49e`],sunSide:`#ffcc90`,cloud:[`#e8a2a0`,`#ffd6a8`,`#8a6c98`],cover:.5,lit:`#ffc49c`,half:`#c89aa4`,shade:`#6a6698`,leaf:[`#8e9e66`,`#3e5a54`],haze:`#b496ac`,line:`#4a3c64`,sunI:.5,hazeE:4200,glow:.35},{hour:7.6,sky:[`#3f6cb6`,`#86a4d2`,`#e6c6b4`,`#fbe2bc`],sunSide:`#ffe0a8`,cloud:[`#f6e2d2`,`#fff6e4`,`#b4a4c0`],cover:.45,lit:`#ffe6c4`,half:`#d6c4c4`,shade:`#7e86b6`,leaf:[`#92a666`,`#44645a`],haze:`#c6bccc`,line:`#3e3e66`,sunI:.72,hazeE:5200,glow:0},{hour:9.5,sky:[`#5a8ed2`,`#80b2e0`,`#b4d6ea`,`#f0ecdc`],sunSide:`#fbecc8`,cloud:[`#fbf6ec`,`#ffffff`,`#c6cce2`],cover:.3,lit:`#fff4e0`,half:`#d4d6dc`,shade:`#7c92ba`,leaf:[`#8ea464`,`#42665a`],haze:`#aecae2`,line:`#36446a`,sunI:.74,hazeE:6e3,glow:0},{hour:12.5,sky:[`#588cd0`,`#7eb0e0`,`#b2d4ea`,`#eeecdc`],sunSide:`#f2f0dc`,cloud:[`#fbf6ec`,`#ffffff`,`#c6cce2`],cover:.3,lit:`#fffaf0`,half:`#d6d8de`,shade:`#7a92ba`,leaf:[`#8ca462`,`#42665a`],haze:`#a8c8e2`,line:`#34426a`,sunI:.76,hazeE:6500,glow:0},{hour:16,sky:[`#5a8ccf`,`#80b0de`,`#b4d4e8`,`#f0eadc`],sunSide:`#f8f0d4`,cloud:[`#fbf6ec`,`#ffffff`,`#c6cce2`],cover:.3,lit:`#fff6e4`,half:`#d8d6da`,shade:`#7c90b8`,leaf:[`#8ea462`,`#44665a`],haze:`#aac8e0`,line:`#36426a`,sunI:.78,hazeE:6200,glow:0},{hour:18.2,sky:[`#5674b8`,`#9ea6cc`,`#f0c2a6`,`#fde2ac`],sunSide:`#ffe2a2`,cloud:[`#f8dcc8`,`#fff4dc`,`#bca4c0`],cover:.45,lit:`#ffe6bc`,half:`#dcbcb4`,shade:`#8a88b8`,leaf:[`#a6b26a`,`#48665a`],haze:`#c6b4cc`,line:`#4a4272`,sunI:.76,hazeE:6e3,glow:0},{hour:19.2,sky:[`#6862a6`,`#ae8cbc`,`#f09c8e`,`#fbc98e`],sunSide:`#ffd88e`,cloud:[`#e49cac`,`#ffe0a8`,`#a07aac`],cover:.5,lit:`#ffd8a4`,half:`#d8a6a8`,shade:`#8a7cb2`,leaf:[`#aab06a`,`#4a6258`],haze:`#b9a0cc`,line:`#4e3e72`,sunI:.72,hazeE:5500,glow:.12},{hour:20,sky:[`#1a1c4a`,`#38306c`,`#784c7c`,`#cc786c`],sunSide:`#e48a66`,cloud:[`#4c3a68`,`#9a647a`,`#2e2648`],cover:.5,lit:`#9a7488`,half:`#5c5076`,shade:`#34325e`,leaf:[`#4a584c`,`#22343a`],haze:`#5e4674`,line:`#4a3a5e`,sunI:.22,hazeE:4500,glow:.7},{hour:20.9,...f}],m={sky:[`#b2bcc8`,`#c4ccd4`,`#d4dadf`,`#e2e5e6`],sunSide:`#e8e4dc`,cloud:[`#d6dade`,`#e6e8ea`,`#bcc2ca`],lit:`#f4f2ec`,half:`#e2e4e6`,shade:`#b8c0cc`,leaf:[`#b4baa8`,`#8a9494`],haze:`#d2d8de`,line:`#5a5e6a`},h={sky:[`#14141e`,`#1c1c28`,`#262634`,`#34323e`],sunSide:`#34323e`,cloud:[`#1c1c28`,`#24242e`,`#3a2e34`],lit:`#4a4c5c`,half:`#3c3e4c`,shade:`#2a2c38`,leaf:[`#34403c`,`#1e2828`],haze:`#2c2c36`,line:`#5a5e6a`},g={clear:0,overcast:.6,fog:1},_=()=>new s,v={key:``,sky:[_(),_(),_(),_()],sunSide:_(),cloud:[_(),_(),_()],lit:_(),half:_(),shade:_(),leaf:[_(),_()],haze:_(),line:_(),misc:new t},y=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function b(e){let t=p.findIndex(t=>t.hour>e);if(t<=0){let t=p[p.length-1],n=p[0],r=n.hour+24-t.hour;return[t,n,((e-t.hour)%24+24)%24/r]}let n=p[t-1],r=p[t];return[n,r,(e-n.hour)/(r.hour-n.hour)]}const x=_(),S=_();function C(e,t,n,r){return e.copy(x.set(t)).lerp(S.set(n),r)}function w(e){let t=u.sunPath,n=(e-t.sunrise)/(t.sunset-t.sunrise);if(n>0&&n<1)return y(0,3,t.maxElevationDeg*Math.sin(Math.PI*n));let r=((e-t.sunset)%24+24)%24,i=((t.sunrise-e)%24+24)%24;return Math.min(y(0,.4,r),y(0,.4,i))}function T(){let e=d.uHour.value,t=u.weather,n=`${e.toFixed(5)}|${t}`;if(n===v.key)return;v.key=n;let[r,i,a]=b(e);for(let e=0;e<4;e++)C(v.sky[e],r.sky[e],i.sky[e],a);C(v.sunSide,r.sunSide,i.sunSide,a);for(let e=0;e<3;e++)C(v.cloud[e],r.cloud[e],i.cloud[e],a);C(v.lit,r.lit,i.lit,a),C(v.half,r.half,i.half,a),C(v.shade,r.shade,i.shade,a);for(let e=0;e<2;e++)C(v.leaf[e],r.leaf[e],i.leaf[e],a);C(v.haze,r.haze,i.haze,a),C(v.line,r.line,i.line,a);let o=r.glow+(i.glow-r.glow)*a,s=r.cover+(i.cover-r.cover)*a,c=g[t]??0;if(c>0){let e=y(.1,.8,o),t=(t,n)=>{let r=m[t],i=h[t];return C(_(),n===void 0?r:r[n],n===void 0?i:i[n],e)};for(let e=0;e<4;e++)v.sky[e].lerp(t(`sky`,e),c);v.sunSide.lerp(t(`sunSide`),c);for(let e=0;e<3;e++)v.cloud[e].lerp(t(`cloud`,e),c);v.lit.lerp(t(`lit`),c),v.half.lerp(t(`half`),c),v.shade.lerp(t(`shade`),c);for(let e=0;e<2;e++)v.leaf[e].lerp(t(`leaf`,e),c);v.haze.lerp(t(`haze`),c),v.line.lerp(t(`line`),c),s*=1-c}let l=w(e)*(1-.85*c);v.lit.lerp(v.shade,1-l),v.half.lerp(v.shade,1-l),v.leaf[0].lerp(v.leaf[1],1-l),v.misc.set(c,y(.1,.8,o),s,l)}const E=e=>({get value(){return T(),e()},set value(e){}}),D={uPrSky0:E(()=>v.sky[0]),uPrSky1:E(()=>v.sky[1]),uPrSky2:E(()=>v.sky[2]),uPrSky3:E(()=>v.sky[3]),uPrSunSide:E(()=>v.sunSide),uPrCloud0:E(()=>v.cloud[0]),uPrCloud1:E(()=>v.cloud[1]),uPrCloud2:E(()=>v.cloud[2]),uPrLit:E(()=>v.lit),uPrHalf:E(()=>v.half),uPrShade:E(()=>v.shade),uPrLeafLit:E(()=>v.leaf[0]),uPrLeafShade:E(()=>v.leaf[1]),uPrHaze:E(()=>v.haze),uPrLine:E(()=>v.line),uPrMisc:E(()=>v.misc),uPrHour:d.uHour};function O(){return p.map(e=>({hour:e.hour,skyZenith:e.sky[0],skyHorizon:e.sky[3],sunColor:e.lit,sunIntensity:e.sunI,ambientSky:e.shade,ambientGround:`#`+new s(e.shade).multiplyScalar(.8).getHexString(),fogColor:e.haze,fogNear:18e3,fogFar:6e4,haze:e.hazeE,nightGlow:e.glow,tint:`#ffffff`,wash:`#000000`,washAmount:0,contrast:1,saturation:1}))}const k=/grass|lawn|turf|asphalt|tarmac|^lane|concrete|cement|dirt|soil|gravel|sand|mulch|stucco|plaster|tar\b|water|bark|trunk|path|ground|earth|moss|trampled|rough|rubber|acrylic|bed\b|weeds/,A=/leaf|leaves|foliage|crown|canopy|needle|frond|palm|cypress|ficus|hedge|shrub|bush|ivy|clump|tuft|blossom|flower|bloom|grass-/,j=/^person|study|figure|face|skin|hair|portrait|text|glyph|font|logo|sign|poster|menu|board|mural|numbers|slogan|\/ad-|blanket|^horizon\//,M=/grass|tuft|blade|frond|palm|needle|floret|head|flower/,N=/^(asphalt|lane|lotAsphalt|pathAsphalt)$/;function P(e,t,n,r){if(r<1)return e;let i=new Float32Array(e.length),a=new Float32Array(e.length),o=2*r+1;for(let a=0;a<n;a++)for(let n=0;n<t;n++)for(let s=0;s<3;s++){let c=0;for(let i=-r;i<=r;i++)c+=e[(a*t+(n+i+t)%t)*3+s];i[(a*t+n)*3+s]=c/o}for(let e=0;e<n;e++)for(let s=0;s<t;s++)for(let c=0;c<3;c++){let l=0;for(let a=-r;a<=r;a++)l+=i[((e+a+n)%n*t+s)*3+c];a[(e*t+s)*3+c]=l/o}return a}const F=(e,t,n)=>.299*e+.587*t+.114*n;function I(e,t,n,r,i,a,o){let s=e;for(let e=0;e<o;e++){let e=new Float32Array(s.length);for(let o=0;o<r;o++)for(let c=0;c<n;c++){let l=o*n+c,u=0,d=0,f=0,p=0;for(let e=-i;e<=i;e++)for(let m=-i;m<=i;m++){let i=(o+e+r)%r*n+(c+m+n)%n;if(!t[i])continue;let h=s[i*3]-s[l*3],g=s[i*3+1]-s[l*3+1],_=s[i*3+2]-s[l*3+2];h*h+g*g+_*_>a*a||(u+=s[i*3],d+=s[i*3+1],f+=s[i*3+2],p++)}e[l*3]=p?u/p:s[l*3],e[l*3+1]=p?d/p:s[l*3+1],e[l*3+2]=p?f/p:s[l*3+2]}s=e}return s}function L([e,t,n]){let r=Math.max(e,t,n),i=r-Math.min(e,t,n);return i<.04||i/Math.max(r,.001)<.12?null:((r===e?(t-n)/i%6:r===t?(n-e)/i+2:(e-t)/i+4)*60+360)%360}function R(e,t){let n=L(e),r=L(t);if(n===null||r===null)return n===r?0:180;let i=Math.abs(n-r)%360;return Math.min(i,360-i)}function z(e,t,n,r,i){let a=n.length,o=[];for(let e=0;e<a;e++)n[e]&&o.push(e);let s=new Int16Array(a).fill(-1);if(!o.length)return{labels:s,inks:[]};let c=o.slice().sort((t,n)=>F(e[t*3],e[t*3+1],e[t*3+2])-F(e[n*3],e[n*3+1],e[n*3+2])),l=[];for(let t=0;t<r;t++){let n=c[Math.min(c.length-1,Math.floor((t+.5)/r*c.length))];l.push([e[n*3],e[n*3+1],e[n*3+2]])}let u=Math.max(1,Math.floor(o.length/4096));for(let t=0;t<8;t++){let t=l.map(()=>[0,0,0,0]);for(let n=0;n<o.length;n+=u){let r=o[n],i=0,a=1e9;for(let t=0;t<l.length;t++){let n=e[r*3]-l[t][0],o=e[r*3+1]-l[t][1],s=e[r*3+2]-l[t][2],c=n*n+o*o+s*s;c<a&&(a=c,i=t)}let s=t[i];s[0]+=e[r*3],s[1]+=e[r*3+1],s[2]+=e[r*3+2],s[3]++}l=l.map((e,n)=>t[n][3]?[t[n][0]/t[n][3],t[n][1]/t[n][3],t[n][2]/t[n][3]]:e)}let d=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),f=l.map((e,t)=>t);for(let e=0;e<l.length;e++)for(let t=e+1;t<l.length;t++)f[t]===t&&f[e]===e&&d(l[e],l[t])<i&&(f[t]=e);for(let e=0;e<f.length;e++)for(;f[f[e]]!==f[e];)f[e]=f[f[e]];for(let t of o){let n=0,r=1e9;for(let i=0;i<l.length;i++){let a=e[t*3]-l[i][0],o=e[t*3+1]-l[i][1],s=e[t*3+2]-l[i][2],c=a*a+o*o+s*s;c<r&&(r=c,n=i)}s[t]=f[n]}return{labels:s,inks:B(s,t,l.length)}}function B(e,t,n){let r=Array.from({length:n},()=>[0,0,0,0]);for(let n=0;n<e.length;n++){let i=e[n];i<0||(r[i][0]+=t[n*3],r[i][1]+=t[n*3+1],r[i][2]+=t[n*3+2],r[i][3]++)}return r.map(e=>e[3]?[e[0]/e[3],e[1]/e[3],e[2]/e[3]]:[0,0,0])}function V(e,t,n,r){let i=e;for(let e=0;e<r;e++){let e=i.slice(),r=/* @__PURE__ */ new Map;for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=a*t+o;if(i[s]<0)continue;r.clear();for(let e=-1;e<=1;e++)for(let s=-1;s<=1;s++){let c=i[(a+e+n)%n*t+(o+s+t)%t];c>=0&&r.set(c,(r.get(c)??0)+(s===0&&e===0?1.5:1))}let c=i[s],l=-1;for(let[e,t]of r)t>l&&(l=t,c=e);e[s]=c}i=e}return i}const H={walk:(e,t,n,r)=>{let i=r.map(e=>e*.74),a=r.map(e=>Math.min(1,e*1.07));for(let o=0;o<n;o++)for(let s=0;s<t;s++){let c=s%(t/2),l=o%(n/2),u=c<2||l<2?i:c===2||l===2?a:r;U(e,o*t+s,u)}},kerb:(e,t,n,r)=>{let i=r.map(e=>Math.min(1,e*1.12));for(let a=0;a<n;a++)for(let o=0;o<t;o++)U(e,a*t+o,a<Math.max(1,Math.round(n*.2))?i:r)}};function U(e,t,n){e[t*4]=Math.round(n[0]*255),e[t*4+1]=Math.round(n[1]*255),e[t*4+2]=Math.round(n[2]*255)}function W(e,t){let{w:n,h:r,name:i}=t;if(n*r<=64||j.test(i))return;let a=e.getImageData(0,0,n,r),o=a.data,s=n*r,c=new Float32Array(s*3),l=new Uint8Array(s);for(let e=0;e<s;e++)c[e*3]=o[e*4]/255,c[e*3+1]=o[e*4+1]/255,c[e*3+2]=o[e*4+2]/255,l[e]=+(!t.cutout||o[e*4+3]>=128);let u=P(c,n,r,Math.max(1,Math.round(Math.min(n,r)/64))),d=i.split(`/`).pop()??i,f=0,p=0,m=0,h=0;for(let e=0;e<s;e++)l[e]&&(f+=c[e*3],p+=c[e*3+1],m+=c[e*3+2],h++);let g=h>0&&p/h>f/h+.02&&p/h>m/h+.03,_=t.cutout&&(A.test(i)||g),v=!t.cutout&&(k.test(d)||g);if(!t.cutout&&N.test(d)){let t=B(new Int16Array(s),c,1)[0],n=[.6,.585,.56].map((e,n)=>e*.75+t[n]*.4);for(let e=0;e<s;e++)U(o,e,n);e.putImageData(a,0,0);return}let y=t.cutout?void 0:H[d];if(y){y(o,n,r,B(new Int16Array(s),c,1)[0]),e.putImageData(a,0,0);return}let b,x;if(v)b=new Int16Array(s).fill(0),x=B(b,c,1);else if(_){let e=z(u,c,l,_?2:3,_?.2:.11);if(b=V(e.labels,n,r,_?1:2),x=B(b,c,Math.max(1,e.inks.length)),_){let e=/* @__PURE__ */ new Map;for(let t of b)t>=0&&e.set(t,(e.get(t)??0)+1);let t=[...e.keys()].sort((t,n)=>e.get(n)-e.get(t));if(t.length===2){let[e,n]=t.map(e=>x[e]);if(!(F(n[0],n[1],n[2])>F(e[0],e[1],e[2])+.05&&R(e,n)>=75)){for(let e=0;e<s;e++)b[e]>=0&&(b[e]=t[0]);x=B(b,c,x.length)}}}}else{let t=I(c,l,n,r,2,.1,2);for(let e=0;e<s;e++)l[e]&&U(o,e,[t[e*3],t[e*3+1],t[e*3+2]]);e.putImageData(a,0,0);return}let S=null;if(_){let e=new Float32Array(s*3);for(let t=0;t<s;t++)e[t*3]=+(o[t*4+3]>=128);let t=!M.test(i),a=Math.max(1,Math.round(Math.min(n,r)/(t?22:48))),c=P(P(e,n,r,a),n,r,a);S=new Uint8ClampedArray(s);for(let i=0;i<r;i++)for(let a=0;a<n;a++){let o=i*n+a,s=c[o*3];if(t){let e=Math.hypot(((a+.5)/n-.5)*2,((i+.5)/r-.5)*2);s*=1-Math.min(1,Math.max(0,(e-.84)/.16))}S[o]=s>.45||e[o*3]>0&&s>.22?255:0}}let C=0;if(t.cutout){let e=/* @__PURE__ */ new Map;for(let t of b)t>=0&&e.set(t,(e.get(t)??0)+1);let t=-1;for(let[n,r]of e)r>t&&(t=r,C=n)}for(let e=0;e<s;e++){let t=b[e]>=0?b[e]:C,n=x[t]??x[0];o[e*4]=Math.round(n[0]*255),o[e*4+1]=Math.round(n[1]*255),o[e*4+2]=Math.round(n[2]*255),S&&(o[e*4+3]=S[e])}e.putImageData(a,0,0)}const G={common:`
uniform vec3 uPrSky0;
uniform vec3 uPrSky1;
uniform vec3 uPrSky2;
uniform vec3 uPrSky3;
uniform vec3 uPrSunSide;
uniform vec3 uPrCloud0;
uniform vec3 uPrCloud1;
uniform vec3 uPrCloud2;
uniform vec3 uPrLit;
uniform vec3 uPrHalf;
uniform vec3 uPrShade;
uniform vec3 uPrLeafLit;
uniform vec3 uPrLeafShade;
uniform vec3 uPrHaze;
uniform vec3 uPrLine;
uniform vec4 uPrMisc;   // x weather toward fog, y night, z cloud cover, w the light's fade
uniform float uPrHour;
float prLum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
// a crisp step, anti-aliased over about a pixel
float prStep(float edge, float x) {
  float w = max(fwidth(x), 1e-4) * 0.7;
  return smoothstep(edge - w, edge + w, x);
}
// a step anti-aliased over a given width
float prStepW(float edge, float x, float w) { return smoothstep(edge - w, edge + w, x); }
float prHash(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
// how green a colour is (lawn, leaves): 0 for paint that merely leans green
// leaf-ish for the line pass: any green to teal-green, the leaf shade ink included (sky, lilac and grey are not)
float prLeafish(vec3 c) { return smoothstep(0.0, 0.03, c.g - c.r) * smoothstep(-0.03, 0.01, c.g - c.b); }
float prGreen(vec3 c) {
  return smoothstep(0.01, 0.05, c.g - c.r) * smoothstep(0.0, 0.05, c.g - c.b);
}
// how green a colour's hue is, whatever its value: a leaf deep in a crown's shade is as green as one on
// top (prGreen's absolute margins failed on the darker cards and striped every crown)
float prGreenHue(vec3 c) {
  float mx = max(c.r, max(c.g, c.b));
  vec3 n = c / max(mx, 1e-3);
  return smoothstep(0.04, 0.12, n.g - n.r) * smoothstep(0.0, 0.1, n.g - n.b) * step(0.01, mx);
}
// 1 on road paint (lines, crosswalks, stalls): road decals whose tile is the pale paint (worn patches, darker
// in the tile, stay road). The road is repainted pale (tiles.ts), so paint needs its own step above it.
float prRoadPaint(int kind, vec3 texel) { return float((kind & 8) != 0) * smoothstep(0.66, 0.74, prLum(texel)); }
// 1 on a crown's leaves and core (they sway, and they are leaf cards or green), 0 elsewhere
float prLeafMass(float foliage, float cutout, vec3 a) { return step(0.01, foliage) * max(cutout, prGreenHue(a)); }
`,albedo:`
// green ground (lawns, beds): the layers' smooth per-vertex dryness and wear would be a gradient across
// the lawn; it takes the tile's own flat green instead. Everything else keeps its paint.
// In fog the paint greys toward paper, all but the reds: one red car is the frame's accent.
vec3 styleAlbedo(Surface s) {
  float ground = smoothstep(0.55, 0.8, s.normal.y) * (1.0 - s.cutout) * step(float(s.kind & 24), 0.5);
  float g = prGreen(s.texel.rgb) * ground;
  vec3 a = mix(s.albedo, s.texel.rgb, g);
  // a crown (leaf cards and core): the tile's flat ink in the species' hue at its full value. The vertex
  // colour also carries the crown's baked occlusion (darker toward the bottom and the middle), a gradient
  // across every card; cut into light steps it drew a dark slat on each card. The light makes the mass.
  float mass = prLeafMass(s.foliage, s.cutout, s.albedo);
  vec3 tintN = s.tint / max(max(s.tint.r, max(s.tint.g, s.tint.b)), 0.05);
  a = mix(a, s.texel.rgb * tintN, mass);
  // road paint a clear step above the pale road (its vertex colour, a worn grey, takes it back down to it)
  a = mix(a, min(a * 1.4, vec3(1.0)), prRoadPaint(s.kind, s.texel.rgb));
  float red = smoothstep(0.12, 0.3, a.r - max(a.g, a.b));
  // fog greys the paint with distance (near things keep their colour: it is air, not desaturation);
  // walls and things standing take their paint a step richer (the Ladies the most saturated thing)
  float fogGrey = uPrMisc.x * 0.75 * (1.0 - red) * smoothstep(8.0, 45.0, s.dist);
  float rich = 1.0 + 0.18 * (1.0 - smoothstep(0.4, 0.7, s.normal.y)) * (1.0 - g) * (1.0 - mass);
  return max(mix(vec3(prLum(a)), a, rich * (1.0 - fogGrey)), 0.0);
}
`,light:`
// the designed colour of a surface in three flat steps of light. Faces turned to the sun are lit,
// grazing faces half, the rest and anything in the ground's cast shadow shade. Ground-like faces are
// lit whenever the sun is up (a low sun mustn't put the lawn in the half step); a crown takes lit, shade
// and a deep underside by its authored normals. Greens on the ground and in leaves take the green inks:
// yellow-green in sun, teal in shade, a step richer than life.
vec3 prPaint(Surface s) {
  vec3 a = s.albedo;
  float up = smoothstep(0.6, 0.9, s.normal.y);
  // (by day ground takes the low sun a little past the terminator: a lawn tipped a few degrees from a
  // sunset is lit, and the long shadows cross it; a bank turned away from it stays in shade)
  float litO = prStep(mix(0.3, mix(0.015, -0.07, 1.0 - uPrMisc.y), up), s.ndl);
  float halfO = (1.0 - litO) * prStep(0.0, s.ndl) * (1.0 - up);
  // leaves: lit where the crown turns up to the sun, never on its underside or seen from inside the crown
  // (a low sun would light every other facet of a shell seen from below: stripes); a crown overhead is
  // one dark framing mass
  float litC = prStep(0.06, s.ndl) * prStep(0.05, s.normal.y) * prStep(-0.05, dot(s.normal, s.toEye));
  // the ground shade's shadows and the cast sun shadow (walls, cars, crowns too), both cut hard
  // (not the moon's: at night the lamps make the shapes)
  // Near the eye the cast sun shadow alone decides: the ground shade bakes the low sunset sun's long
  // shadows, which put whole streets in shade where the cast shadow (at its minimum elevation) leaves the
  // light falling between the houses; beyond the cast shadow's reach the ground shade takes over.
  float gsFar = mix(1.0, smoothstep(70.0, 110.0, s.dist), 1.0 - uPrMisc.y);
  float shadow = max(prStep(0.52, s.shadow) * gsFar, prStep(0.5, s.sunShadow) * (1.0 - uPrMisc.y));
  // a crown is one mass in two inks: its leaves and its core light as the crown does, no half step
  float mass = prLeafMass(s.foliage, s.cutout, a);
  float card = max(s.cutout, mass);
  float contact = prStep(0.42, s.ao) * (1.0 - mass);
  float lit = mix(litO, litC, card) * (1.0 - shadow);
  float half_ = halfO * (1.0 - card) * (1.0 - shadow);
  // road paint keeps its ink in shade: a crosswalk in a building's shadow takes a lighter shade ink
  vec3 shadeInk = mix(uPrShade, uPrHalf, 0.55 * prRoadPaint(s.kind, s.texel.rgb));
  // by night a wall's light inks are less indigo and a step lighter, so each front keeps its own paint
  // (a dark ochre, a dark blue, a maroon) rather than the row going one navy mass
  float nightWall = uPrMisc.y * (1.0 - smoothstep(0.4, 0.7, s.normal.y)) * (1.0 - card);
  vec3 litInk = mix(uPrLit, vec3(prLum(uPrLit)) * 1.3, 0.5 * nightWall);
  vec3 halfInk = mix(uPrHalf, vec3(prLum(uPrHalf)) * 1.3, 0.5 * nightWall);
  shadeInk = mix(shadeInk, vec3(prLum(shadeInk)) * 1.3, 0.5 * nightWall);
  vec3 c = a * (shadeInk * (1.0 - lit - half_) + halfInk * half_ + litInk * lit);
  // greens (lawn, beds, leaves) take the hour's green inks, scaled to their own value so a cypress stays
  // darker than a lawn: yellow-green in sun, teal in shade, the half step between
  float plant = max(max(s.cutout, step(0.01, s.foliage)), up);
  float g = prGreen(a) * plant;
  float v = clamp(prLum(a) / 0.36, 0.75, 1.1);
  // (the ground's lit green a step toward sage: a lit lawn is the frame's biggest green, never lime)
  vec3 litG = mix(uPrLeafLit, uPrLeafShade, 0.28 * up);
  v = min(v, mix(1.1, 1.0, up));
  vec3 inkG = (uPrLeafShade * (1.0 - lit - half_) + mix(litG, uPrLeafShade, 0.45) * half_ + litG * lit) * v;
  c = mix(c, inkG, 0.7 * g);
  // leaves: the inks replace the paint wholly (lit ink where the crown turns to the sun, shade ink
  // elsewhere), at the tile's own value so a cypress stays darker than a street tree; a flower keeps its paint
  // A third, deeper ink on the crown's underside (the leaf ceiling's cards face down): from below a
  // crown is lobes of shade over a deep middle, never one flat shape.
  float vL = clamp(prLum(a) / 0.24, 0.72, 1.08);
  float deep = prStep(0.5, -s.normal.y) * (1.0 - lit);
  // a crown seen from below: where its own upper lobes cast their shadow on it, a step deeper (the
  // lobes overhead read as shapes, not one shade)
  float under = 1.0 - prStep(-0.05, dot(s.normal, s.toEye));
  deep = max(deep, 0.6 * under * prStep(0.5, s.sunShadow) * (1.0 - lit) * (1.0 - uPrMisc.y));
  vec3 inkL = mix(mix(uPrLeafShade, uPrLeafShade * 0.74, deep), uPrLeafLit, lit) * vL;
  c = mix(c, inkL, prGreenHue(a) * mass);
  // walls keep their paint's colour under the light inks (a multiply by the lilac or slate shade greys a
  // butter front): a step more chroma at the same value, most in shade, so the Ladies stay the most
  // saturated thing in the frame
  float wall = (1.0 - smoothstep(0.4, 0.7, s.normal.y)) * (1.0 - card) * (1.0 - g) * (1.0 - uPrMisc.x);
  float lc = prLum(c);
  // (and lit walls across the street and the park, the Ladies from the lawn, richer still)
  float across = smoothstep(45.0, 90.0, s.dist) * (1.0 - smoothstep(260.0, 420.0, s.dist));
  c = max(vec3(lc) + (c - lc) * (1.0 + wall * mix(0.45, 0.2 + 0.4 * across, lit)), 0.0);
  // contact: one flat darker step where things meet the ground (under cars, at wall feet)
  return c * (1.0 - 0.3 * contact);
}
vec3 prLight(Surface s) { return prPaint(s) / max(s.albedo, vec3(0.02)); }
vec3 styleLight(Surface s) { return prLight(s); }
`,surface:`
// what the engine adds after the light (s.lamps: lamp pools, headlights, the night street glow) in flat
// steps of its own colour, from dusk on; and gloss (s.sheen) as one flat sheen. No gradients on a surface.
vec3 styleSurface(vec3 col, Surface s) {
  vec3 alb = max(s.albedo, vec3(0.02));
  vec3 flatCol = prPaint(s);
  // gloss: the reflection's lift, cut into one flat sheen of the sky's low inks
  float lift = prLum(s.sheen);
  float sheen = prStep(0.10, lift) * 0.5 + prStep(0.35, lift) * 0.5;
  vec3 env = mix(uPrSky3, uPrSky1, 0.4);
  flatCol = mix(flatCol, max(flatCol, env * 0.9), sheen * min(1.0, s.gloss * 1.4));
  // lamps: three flat levels of their own hue
  float e = max(s.lamps.r, max(s.lamps.g, s.lamps.b));
  vec3 hue = max(s.lamps, 0.0) / max(e, 1e-3);
  // one flat core that fades out in one soft band (a pool's faint spill doesn't count)
  float lvl = smoothstep(0.14, 0.5, e);
  return flatCol + alb * hue * lvl * 1.1 * smoothstep(0.2, 0.5, uNightGlow);
}
`,fog:`
// the haze in four flat planes: street (none), near blocks, the city, the hills. Each plane takes a
// designed step toward the haze ink, or the engine's own haze at that plane if the weather is thicker.
// The planes' bounds scale with where the weather's haze begins, so fog brings them close.
vec3 styleFog(vec3 col, vec3 haze, float amount, Surface s) {
  float raw = fogAmount(s.pos, cameraPosition);
  float keep = raw > 1e-3 ? clamp(amount / raw, 0.0, 1.0) : 1.0;
  vec3 dir = -s.toEye;
  float fog = uPrMisc.x;
  float b1 = max(uHazeStart, 20.0) * mix(1.7, 1.1, fog);
  float b2 = b1 * 3.2;
  float b3 = b2 * 4.0;
  float a1 = max(mix(0.16, 0.42, fog), fogAmount(cameraPosition + dir * b1 * 1.6, cameraPosition));
  float a2 = max(mix(0.42, 0.7, fog), fogAmount(cameraPosition + dir * b2 * 1.6, cameraPosition));
  float a3 = max(mix(0.66, 0.9, fog), fogAmount(cameraPosition + dir * b3 * 1.6, cameraPosition));
  float d = s.dist;
  float a = mix(0.0, a1, smoothstep(b1 * 0.97, b1 * 1.03, d));
  a = mix(a, a2, smoothstep(b2 * 0.97, b2 * 1.03, d));
  a = mix(a, a3, smoothstep(b3 * 0.97, b3 * 1.03, d));
  // the far plane: the engine's own fade hides it
  a = max(a, raw * smoothstep(b3 * 3.0, b3 * 6.0, d));
  vec3 inkH = mix(uPrHaze, haze, 0.35);
  return mix(col, inkH, a * keep);
}
`,alpha:`
float styleAlpha(vec4 texel, vec2 uv, vec4 tile, vec3 pos) {
  return clamp((texel.a - 0.42) * 6.0 + 0.5, 0.0, 1.0);
}
`,sky:`
// the drawn clouds (style.ts builds them as a union of discs: R = 0.5 on the outline)
// (stretched north-south, across the park's east and west views: long banks rather than lozenges)
float styleCloudField(vec2 uv) { return texture(uCloudTex, uv * vec2(0.8, 0.34)).r; }
// the top edge of a row of lobes round the horizon, in lobe cells above the row's base (-10: a gap).
// x: azimuth 0..1, n lobes a turn, k the row's seed, gaps the share of cells left empty
float prLobes(float x, float n, float k, float gaps) {
  float u = x * n;
  float ci = floor(u);
  float top = -10.0;
  for (int j = -2; j <= 2; j++) {
    float c = ci + float(j);
    float cw = mod(c, n);
    float r = 0.55 + 0.6 * prHash(cw * 3.71 + k * 11.3);
    float cx = c + 0.5 + (prHash(cw * 5.37 + k * 2.1) - 0.5) * 0.5;
    float cy = -0.4 + 0.5 * prHash(cw * 9.1 + k * 3.3);
    float dx = u - cx;
    float there = step(gaps, prHash(cw * 7.13 + k * 31.7)) * step(abs(dx), r);
    top = max(top, mix(-10.0, cy + sqrt(max(r * r - dx * dx, 0.0)), there));
  }
  return top;
}
// one bank: big lobes with small billows riding on them; colour in rgb, cover in a (radians)
vec4 prBank(float az, float el, float px, float n, float k, float base, float depth, float drift, vec3 body, vec3 lit, vec3 belly) {
  float cell = 6.28318 / n;
  float x = fract(az / 6.28318 + uTime * drift);
  float big = prLobes(x, n, k, 0.0);
  float small = max(prLobes(x, n * 3.0, k + 7.0, 0.0), 0.0);
  float topEl = big < -5.0 ? -1.0 : base + (big * cell + small * cell / 3.0) * 0.42;
  float bot = base - depth;
  float inside = prStepW(0.0, topEl - el, px) * prStepW(0.0, el - bot, px);
  float rim = 1.0 - prStepW(px * 2.5, topEl - el, px);
  float under = 1.0 - prStepW(depth * 0.3, el - bot, px);
  vec3 c = mix(body, belly, under);
  c = mix(c, lit, rim);
  return vec4(c, inside);
}
// the sky's inks up from the horizon by elevation (radians)
vec3 prGradient(float el) {
  vec3 c = mix(uPrSky3, uPrSky2, smoothstep(0.0, 0.14, el));
  c = mix(c, uPrSky1, smoothstep(0.1, 0.42, el));
  return mix(c, uPrSky0, smoothstep(0.38, 1.1, el));
}
vec3 styleSky(vec3 col, vec3 d) {
  float h = d.y;
  float el = asin(clamp(h, -1.0, 1.0));
  float az = atan(d.x, -d.z);
  float px = max(fwidth(el), 2e-4) * 0.7;
  vec2 hz = normalize(d.xz + vec2(1e-5, 0.0));
  vec2 sz = normalize(uTrueSunDir.xz + vec2(1e-5, 0.0));
  float toSun = dot(hz, sz) * 0.5 + 0.5;
  float fog = uPrMisc.x;
  float cover = uPrMisc.z;
  vec3 c = prGradient(el);
  // the low sky warms toward the sun's side
  c = mix(c, uPrSunSide, pow(toSun, 2.5) * (1.0 - smoothstep(0.02, 0.3, el)) * uAfterglow * (1.0 - fog));
  // drawn clouds on the cloud plane: flat bodies in one ink, no rim (a rim offset from the shape read as a
  // misregistered sticker outline); the horizon banks below carry the lit tops
  vec2 p = d.xz / (max(h, 0.0) + 0.2) * uCloudGeom.y + uCloudWind * uTime;
  vec2 uv = p / uCloudGeom.x;
  float thr = 0.5 + (0.45 - cover) * 0.4;
  float f = styleCloudField(uv);
  float fw = max(fwidth(f), 1e-3) * 0.6;
  float body = prStepW(thr, f, fw) * step(0.02, cover) * (1.0 - fog);
  vec3 cc = uPrCloud0;
  // low on the sky the clouds take a step of the air
  cc = mix(cc, prGradient(el * 0.5), 0.3 * (1.0 - smoothstep(0.06, 0.3, el)));
  c = mix(c, cc, body * smoothstep(0.03, 0.08, h));
  // banks of lobes round the horizon: a far one pale with the air, a near one in the cloud inks
  float banks = smoothstep(0.1, 0.4, cover) * (1.0 - fog);
  vec4 b0 = prBank(az, el, px, 64.0, 1.0, 0.022, 0.03, 0.000015, mix(uPrCloud0, uPrSky3, 0.4), mix(uPrCloud1, uPrSky3, 0.3), mix(uPrCloud2, uPrSky3, 0.45));
  c = mix(c, b0.rgb, b0.a * banks);
  vec4 b1 = prBank(az, el, px, 40.0, 2.0, 0.045, 0.03, -0.00001, mix(uPrCloud0, uPrSky2, 0.15), uPrCloud1, mix(uPrCloud2, uPrSky2, 0.1));
  c = mix(c, b1.rgb, b1.a * banks);
  // the sun and moon as flat discs with one pale ring
  float s = dot(d, uSunDir);
  float sw = max(fwidth(s), 1e-6) * 0.7;
  float sunDisc = prStepW(0.99985, s, sw) * (1.0 - fog * 0.8);
  float sunRing = prStepW(0.9988, s, sw) * 0.22 * (1.0 - fog);
  float moonDisc = prStepW(0.99988, s, sw);
  float moonRing = prStepW(0.9992, s, sw) * 0.12;
  if (uSunUp > 0.5) {
    c = mix(c, mix(uPrSunSide, vec3(1.0, 0.97, 0.88), 0.5), sunRing);
    c = mix(c, vec3(1.0, 0.97, 0.86), sunDisc);
  } else {
    c = mix(c, uPrSky1 * 1.5 + 0.05, moonRing);
    c = mix(c, vec3(0.9, 0.9, 0.84), moonDisc);
  }
  // below the horizon (seen past the world's edge): the horizon ink
  return mix(c, uPrSky3, 1.0 - smoothstep(-0.02, 0.0, h));
}
`,scene:`
// a line one internal pixel wide in the surface's own darker ink, on the near side of every real depth
// jump (a step of a fifth or more of the distance: silhouettes, which stay continuous), within ~130 m
// (~50 m in fog), and none on greens (a crown is a mass, not a hatch of its cards). Creases are not
// drawn: at this resolution they broke into dashes. From depth only, so it holds still in motion.
vec3 styleScene(vec2 uv) {
  vec3 c = sceneAt(uv);
  ivec2 p = sceneTexel(uv);
  float dc = depthTexel(p);
  float fade = 1.0 - smoothstep(mix(60.0, 20.0, uPrMisc.x), mix(130.0, 50.0, uPrMisc.x), dc);
  if (fade <= 0.0) return c;
  float farN = max(max(depthTexel(p + ivec2(-1, 0)), depthTexel(p + ivec2(1, 0))), max(depthTexel(p + ivec2(0, -1)), depthTexel(p + ivec2(0, 1))));
  float sil = smoothstep(0.12, 0.22, (farN - dc) / dc) * step(0.5, farN - dc);
  if (sil <= 0.0) return c;
  vec3 own = sceneTexelColor(p);
  // green here or beside (the beside catches a leaf's edge pixels, mixed by the multisampling)
  float leaf = max(prLeafish(own), max(max(prLeafish(sceneTexelColor(p + ivec2(1, 0))), prLeafish(sceneTexelColor(p - ivec2(1, 0)))),
                                       max(prLeafish(sceneTexelColor(p + ivec2(0, 1))), prLeafish(sceneTexelColor(p - ivec2(0, 1))))));
  float line = sil * fade * (1.0 - leaf);
  return mix(c, own * mix(vec3(0.5), uPrLine * 1.4, 0.35), line);
}
`};let K=null;var q=c({name:`print`,description:`Print: designed inks per hour, flat fills and pattern lines, three light steps, stepped haze planes, depth lines; poster by day, noir by night.`,look:{textureMacro:0,grade:{exposure:1,contrast:1,saturation:1.08,vignette:.06,shoulder:.96,wash:0,bloom:{strength:.04,nightStrength:.35,threshold:.92,nightThreshold:.72,radius:1.6},dither:.5},sky:{glowStrength:0,haloStrength:0},shadows:{sun:1,blur:.35,near:{blur:.08}},sunShadow:{enabled:!0,soft:.12,region:110},weathers:{fog:{saturation:1,contrast:1},overcast:{saturation:1,contrast:1}},glowColor:`#ffb05a`,windowColors:[`#ff9c3a`,`#ffae48`,`#ffc062`,`#ffd88e`],lights:{lampColor:`#ff9636`,poolStrength:1.7,coronaStrength:.8,coronaSize:.9,streetGlow:{base:.04}},foliage:{nightDesaturate:.25}},time:()=>O(),tiles:W,clouds:()=>{if(K)return K;let t=l(`style-print-clouds`),s=[];for(let e of[1,.85,.6,.5,.42,.34,.26,.2,.16]){let n=t()*256,r=t()*256,i=16+64*e,a=Math.max(3,Math.round(i/6));for(let o=0;o<a;o++){let c=(o+.5)/a,l=Math.sin(Math.PI*c),u=2.5+14*e*l*t.range(.7,1);s.push([n+(c-.5)*i+t.range(-2,2),r+t.range(-2,2)*e,u]),l>.55&&t.chance(.6)&&s.push([n+(c-.5)*i+t.range(-3,3),r-u*.7,u*t.range(.45,.7)])}}let c=/* @__PURE__ */ new Uint8Array(262144);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=64;for(let[r,i,a]of s){let o=Math.abs(t-r)%256,s=Math.abs(e-i)%256;o=Math.min(o,256-o),s=Math.min(s,256-s);let c=Math.hypot(o,s)-a,l=Math.max(4-Math.abs(n-c),0)/4;n=Math.min(n,c)-l*l*4*.25}let r=(e*256+t)*4;c[r]=Math.round(Math.min(1,Math.max(0,.5-n/18))*255),c[r+3]=255}return K=new i(c,256,256,e,o),K.wrapS=K.wrapT=n,K.magFilter=a,K.minFilter=r,K.generateMipmaps=!0,K.needsUpdate=!0,K},uniforms:D,sceneSize:`internal`,glsl:G});export{q as default};