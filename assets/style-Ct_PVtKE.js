import{C as e,O as t,_ as n,c as r,g as i,w as a}from"./three.core-B5y5TsrG.js";import{n as o}from"./rng-BVZPdspY.js";import{r as s}from"./paint-B2wJ_iH6.js";import{t as c}from"./kit-Dfvzj6n2.js";const l=[1,0],u=[0,1],d=/(^|\/)(flat|glow|wire|blob)$|person|figure|study|skin|face|hair|glyph|numbers|sign|mural|text|sharrow|stop|oneway|all-way|warning|clock|label|logo|plate|menu|poster/,f=/(^|\/|-)tree|cypress|pine|palm|hedge|shrub|flower|tuft|ivy|leaves|leaf|clump|(^|\/)mass|spray|frond|fringe|crown|foliage|canopy/;function p(e,t=!1){let n=e.toLowerCase();return/bark|trunk|pole|shaft|column|flute|spindle|picket|baluster|post/.test(n)?{dir:u,len:3,keep:.5,streak:.06}:!t&&f.test(n)?{dir:[.6,-.8],len:1,keep:.85,streak:.03,foliage:!0}:/asphalt|lane|road|tar(?![a-z])|street/.test(n)?{dir:[.8,.6],len:1.5,keep:.4,streak:.025}:/grass|lawn|weeds|trampled|turf/.test(n)?{dir:[.25,-1],len:2,keep:.4,streak:.06}:/siding|clapboard|board|shingle|cedar|deck|slat|wood|roof|lap|plank|tread|step/.test(n)?{dir:l,len:3,keep:.55,streak:.05}:/brick|masonry|stone|granite|travertine|rock|stucco|concrete|sidewalk|kerb|paver|slab|terrazzo|walk/.test(n)?{dir:l,len:2,keep:.5,streak:.03}:/glass|win-|window|door-glass|acrylic/.test(n)?{dir:u,len:2,keep:.7,streak:.03}:{dir:l,len:2.5,keep:.6,streak:.04}}function m(e,t){let{w:n,h:r,name:i}=t;if(d.test(i)||n<8||r<8)return;let a=e.getImageData(0,0,n,r),o=a.data,s=n*r,c=p(i),l=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),m=new Float32Array(s),g=new Float32Array(s),_=1,v=0;for(let e=0;e<s;e++)l[e]=o[e*4]/255,u[e]=o[e*4+1]/255,f[e]=o[e*4+2]/255,m[e]=t.cutout?+(o[e*4+3]>127):1,g[e]=.299*l[e]+.587*u[e]+.114*f[e],m[e]>0&&(_=Math.min(_,g[e]),v=Math.max(v,g[e]));if(v-_<.02)return;if(c.foliage){let e=0,t=0,n=0,r=0;for(let i=0;i<s;i++)m[i]>0&&(e+=l[i],t+=u[i],n+=f[i],r++);let a=(.299*e+.587*t+.114*n)/Math.max(r,1);c=t>e*1.05&&t>n*1.1?{...c,lift:Math.min(1.9,Math.max(1,.26/Math.max(.02,a)))}:p(i,!0)}if(c.foliage&&t.cutout&&!/palm|frond/.test(i)){h(o,n,r,t.rng,!/fringe/.test(i)),e.putImageData(a,0,0);return}let y=Math.max(.5,Math.min(n,r)/64),b=c.len*Math.sqrt(y),x=(e,t)=>(e%t+t)%t,S=(e,t)=>x(t,r)*n+x(e,n),C=new Float32Array(s),w=new Float32Array(s),T=new Float32Array(s);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=e*n+t,i=(g[S(t+1,e)]-g[S(t-1,e)])*.5,a=(g[S(t,e+1)]-g[S(t,e-1)])*.5;C[r]=i*i,w[r]=i*a,T[r]=a*a}let E=(e,t)=>{let i=new Float32Array(s),a=new Float32Array(s),o=1/(2*t+1);for(let a=0;a<r;a++)for(let r=0;r<n;r++){let s=0;for(let i=-t;i<=t;i++)s+=e[a*n+x(r+i,n)];i[a*n+r]=s*o}for(let e=0;e<r;e++)for(let s=0;s<n;s++){let c=0;for(let a=-t;a<=t;a++)c+=i[x(e+a,r)*n+s];a[e*n+s]=c*o}return a},D=E(C,2),O=E(w,2),k=E(T,2),A=new Float32Array(s),j=new Float32Array(s),M=Math.hypot(c.dir[0],c.dir[1]),N=c.dir[0]/M,P=c.dir[1]/M;for(let e=0;e<s;e++){let t=D[e],n=O[e],r=k[e],i=t+r,a=Math.sqrt((t-r)*(t-r)+4*n*n),o=i>1e-6?Math.min(1,(a/i)**2*Math.min(1,i*400)):0,s=.5*Math.atan2(2*n,t-r)+Math.PI/2,c=Math.cos(s),l=Math.sin(s);c*N+l*P<0&&(c=-c,l=-l);let u=N+(c-N)*o,d=P+(l-P)*o,f=Math.hypot(u,d)||1;A[e]=u/f,j[e]=d/f}let F=(e,t,n)=>{let r=Math.floor(t),i=Math.floor(n),a=t-r,o=n-i,s=e[S(r,i)],c=e[S(r+1,i)],l=e[S(r,i+1)],u=e[S(r+1,i+1)];return(s*(1-a)+c*a)*(1-o)+(l*(1-a)+u*a)*o},I=Math.max(1,Math.round(b)),L=new Float32Array(s),R=new Float32Array(s),z=new Float32Array(s);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=e*n+t;if(m[r]===0){L[r]=l[r],R[r]=u[r],z[r]=f[r];continue}let i=l[r],a=u[r],o=f[r],s=1;for(let n of[1,-1]){let c=t+.5,d=e+.5;for(let e=1;e<=I;e++){let t=S(Math.floor(c),Math.floor(d));c+=A[t]*n*(b/I),d+=j[t]*n*(b/I);let p=c-.5,h=d-.5;if(m[S(Math.round(p),Math.round(h))]===0)break;let g=F(l,p,h),_=F(u,p,h),v=F(f,p,h),y=(g-l[r])**2+(_-u[r])**2+(v-f[r])**2,x=Math.exp(-y*34.72222222222222)*Math.exp(-(e*e)/(2*I*I));i+=g*x,a+=_*x,o+=v*x,s+=x}}L[r]=i/s,R[r]=a/s,z[r]=o/s}let B=new Float32Array(s);for(let e=0;e<s;e++)B[e]=t.rng();let V=new Float32Array(s),H=Math.max(2,Math.round(b*1.3));for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=e*n+t,i=B[r],a=1;for(let n of[1,-1]){let r=t+.5,o=e+.5;for(let e=1;e<=H;e++){let e=S(Math.floor(r),Math.floor(o));r+=A[e]*n,o+=j[e]*n,i+=F(B,r-.5,o-.5),a++}}V[r]=i/a-.5}let U=0;for(let e=0;e<s;e++)U+=V[e]*V[e];U=Math.sqrt(U/s)||1;let W=Math.max(2,Math.round(Math.min(n,r)/16)),G=E(L,W),K=E(R,W),q=E(z,W);for(let e=0;e<s;e++){if(m[e]===0)continue;let t=.299*L[e]+.587*R[e]+.114*z[e],n=.299*G[e]+.587*K[e]+.114*q[e],r,i,a;if(c.foliage){let o=t<n?.3:c.keep;r=G[e]+(L[e]-G[e])*o,i=K[e]+(R[e]-K[e])*o,a=q[e]+(z[e]-q[e])*o;let s=(t-n)*.6+V[e]/U*c.streak*.4;s>0?(r+=s*.35,i+=s*.2,a-=s*.25):(r+=s*.3,a-=s*.25);let l=c.lift??1;r*=l,i*=l,a*=l}else{r=G[e]+(L[e]-G[e])*c.keep,i=K[e]+(R[e]-K[e])*c.keep,a=q[e]+(z[e]-q[e])*c.keep;let o=(t-n)*(1-c.keep)*.7+V[e]/U*c.streak*.4,s=Math.max(.25,Math.min(1,n*2));o>0?(r+=o*.55*s,i+=o*.3*s,a-=o*.3*s):(r+=o*.25*s,i+=o*.15*s,a-=o*.45*s)}let s=1+V[e]/U*c.streak*.35;o[e*4]=Math.max(0,Math.min(255,Math.round(r*s*255))),o[e*4+1]=Math.max(0,Math.min(255,Math.round(i*s*255))),o[e*4+2]=Math.max(0,Math.min(255,Math.round(a*s*255)))}if(t.cutout){let e=new Uint8ClampedArray(o);for(let t=0;t<r;t++)for(let r=0;r<n;r++){let i=t*n+r;if(m[i]>0)continue;let a=0,s=0,c=0,l=0;for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++){let o=S(r+i,t+n);m[o]!==0&&(a+=e[o*4],s+=e[o*4+1],c+=e[o*4+2],l++)}l&&(o[i*4]=Math.round(a/l),o[i*4+1]=Math.round(s/l),o[i*4+2]=Math.round(c/l))}}e.putImageData(a,0,0)}function h(e,t,n,r,i){let a=t*n,o=(e,t)=>(e%t+t)%t,s=new Float32Array(a),c=new Float32Array(a),l=0,u=0,d=0,f=0;for(let t=0;t<a;t++){let n=+(e[t*4+3]>127);s[t]=n,c[t]=(.299*e[t*4]+.587*e[t*4+1]+.114*e[t*4+2])/255,n&&(l+=e[t*4],u+=e[t*4+1],d+=e[t*4+2],f++)}if(!f)return;l/=f*255,u/=f*255,d/=f*255;let p=0;for(let e=0;e<a;e++)s[e]&&(p+=c[e]);p/=f;let m=(e,r)=>{let i=new Float32Array(a),s=new Float32Array(a),c=1/(2*r+1);for(let a=0;a<n;a++)for(let n=0;n<t;n++){let s=0;for(let i=-r;i<=r;i++)s+=e[a*t+o(n+i,t)];i[a*t+n]=s*c}for(let e=0;e<n;e++)for(let a=0;a<t;a++){let l=0;for(let s=-r;s<=r;s++)l+=i[o(e+s,n)*t+a];s[e*t+a]=l*c}return s},h=Math.max(2,Math.round(Math.min(t,n)/9)),g=m(m(s,h),h),_=Math.max(3,Math.round(Math.min(t,n)/7)),v=Math.max(1,Math.round(t/_)),y=Math.max(1,Math.round(n/_)),b=new Float32Array(v*y);for(let e=0;e<b.length;e++)b[e]=r();let x=(e,r)=>{let i=e/t*v,a=r/n*y,s=Math.floor(i),c=Math.floor(a),l=i-s,u=a-c,d=l*l*(3-2*l),f=u*u*(3-2*u),p=(e,t)=>b[o(t,y)*v+o(e,v)];return(p(s,c)*(1-d)+p(s+1,c)*d)*(1-f)+(p(s,c+1)*(1-d)+p(s+1,c+1)*d)*f},S=Math.min(2,Math.max(1,.3/Math.max(.03,p))),C=[l*S,u*S,d*S],w=[C[0]*1.45+.05,C[1]*1.3+.03,C[2]*.8],T=[C[0]*.5,C[1]*.68,C[2]*.95+.06];for(let r=0;r<n;r++)for(let a=0;a<t;a++){let l=r*t+a,u=x(a,r),d=x(a*2.3+17,r*2.3+5),f=.34+(u-.5)*.3+(d-.5)*.12,m=Math.min(a+.5,t-a-.5),_=Math.min(r+.5,n-r-.5),v=i?Math.min(1,Math.min(m,_)/(h*1.5)):1,y=Math.min(1,Math.max(0,(g[l]*(.4+.6*v)-f)/.3+.5)),b=g[r*t+o(a+1,t)]-g[r*t+o(a-1,t)],S=g[o(r+1,n)*t+a]-g[o(r-1,n)*t+a],C=Math.hypot(b,S),E=.55+.14*(C>1e-4?-(b*-.55+S*-.83)/C*Math.min(1,C*6):0)+(d-.5)*.24;E+=(c[l]-p)*.4*s[l],E=Math.min(1,Math.max(0,E));for(let t=0;t<3;t++)e[l*4+t]=Math.max(0,Math.min(255,Math.round((T[t]+(w[t]-T[t])*E)*255)));e[l*4+3]=Math.round(y*255)}}const g={0:{skyZenith:`#132050`,skyHorizon:`#2c4680`,sunColor:`#a8bef0`,sunIntensity:.2,ambientSky:`#34466e`,ambientGround:`#3e3848`,fogColor:`#22345c`,haze:5e3,tint:`#f2f6ff`,wash:`#14204a`,washAmount:.04,contrast:1.04,saturation:1.05},5.2:{skyZenith:`#182a5a`,skyHorizon:`#46588e`,sunColor:`#9eb0e0`,sunIntensity:.24,ambientSky:`#4a5c90`,ambientGround:`#46404e`,fogColor:`#3e4e7e`,haze:4800,tint:`#f2f4ff`,wash:`#203060`,washAmount:.08},6.4:{skyZenith:`#5878bc`,skyHorizon:`#f2bc9c`,sunColor:`#ffc494`,sunIntensity:.55,ambientSky:`#8e9ed0`,ambientGround:`#7a6660`,fogColor:`#e2bcae`,haze:3600,tint:`#fff6f0`,wash:`#e8b8a0`,washAmount:.08},7.6:{skyZenith:`#4886d6`,skyHorizon:`#d2e6f0`,sunColor:`#fff0d6`,sunIntensity:.82,ambientSky:`#93a4d6`,ambientGround:`#7a6c60`,fogColor:`#d8e8f0`,haze:4200,tint:`#fffcf6`,wash:`#d4e6f4`,washAmount:.03},9.5:{skyZenith:`#3282e0`,skyHorizon:`#bce2f4`,sunColor:`#fff6e4`,sunIntensity:.86,ambientSky:`#8c9ed8`,ambientGround:`#7a6c62`,fogColor:`#d6eaf4`,haze:4400,tint:`#ffffff`,wash:`#cfe4f4`,washAmount:.02,contrast:1.04,saturation:1.04},12.5:{skyZenith:`#3080e2`,skyHorizon:`#b8e0f4`,sunColor:`#fff8ea`,sunIntensity:.88,ambientSky:`#8c9ed8`,ambientGround:`#7c6e62`,fogColor:`#d4e8f4`,haze:4600,tint:`#ffffff`,wash:`#cfe4f4`,washAmount:.02,contrast:1.04,saturation:1.04},16:{skyZenith:`#3282de`,skyHorizon:`#bde0f2`,sunColor:`#fff2dc`,sunIntensity:.88,ambientSky:`#8e9cd6`,ambientGround:`#7e6e60`,fogColor:`#d8e8f2`,haze:4400,tint:`#fffdf8`,wash:`#d4e4f2`,washAmount:.02,contrast:1.04,saturation:1.04},18.2:{skyZenith:`#7a9cc8`,skyHorizon:`#fcd690`,sunColor:`#ffcf86`,sunIntensity:.84,ambientSky:`#8282bc`,ambientGround:`#604a48`,fogColor:`#f2c696`,haze:4e3,tint:`#fff6ea`,wash:`#f8d0a0`,washAmount:.03,contrast:1.06,saturation:1.12},19.2:{skyZenith:`#9a88b8`,skyHorizon:`#ffce88`,sunColor:`#ffae64`,sunIntensity:.88,ambientSky:`#8078b4`,ambientGround:`#5e4644`,fogColor:`#f4b68c`,haze:4200,tint:`#fff4ea`,wash:`#f8c090`,washAmount:.03,contrast:1.06,saturation:1.15},20:{skyZenith:`#263a7c`,skyHorizon:`#d49c8e`,sunColor:`#b4a8cc`,sunIntensity:.26,ambientSky:`#6a7cb0`,ambientGround:`#5a4c56`,fogColor:`#8e86a8`,haze:4200,tint:`#f6f4ff`,wash:`#4a4c80`,washAmount:.08},20.9:{skyZenith:`#132050`,skyHorizon:`#2c4680`,sunColor:`#a8bef0`,sunIntensity:.2,ambientSky:`#34466e`,ambientGround:`#3e3848`,fogColor:`#22345c`,haze:5e3,tint:`#f2f6ff`,wash:`#14204a`,washAmount:.04,contrast:1.04,saturation:1.05}};let _=null;var v=c({name:`bright-air`,description:`Bright Air: soft wrapped light, sky-blue shade and rims, paint a step richer, huge pale air (BotW, Alba).`,look:{lightWrap:.3,foliage:{wrap:.4,floor:.12},grade:{contrast:1,saturation:1,vignette:.08,shoulder:.8,bloom:{strength:.28,nightStrength:.8,threshold:.8,nightThreshold:.52,radius:3.6}},sky:{haloSize:.3,haloStrength:.42,glowSize:.02,glowStrength:.7,discSize:.8,gradientPower:.42,fogBand:.05},clouds:{scale:3400,rim:.8},haze:{start:160,max:.9},fogSunScatter:.7,shadows:{contact:.6,sun:.9,blur:.75,maxLength:5},sunShadow:{enabled:!0,soft:.14,bias:.45,normalOffset:.3},weathers:{clear:{cloudCover:.46,cloudSoftness:.1,cloudDarkness:.2},fog:{grey:`#eceae6`,greyAmount:.8,ambientScale:1.8,sunScale:.14,sunGlowScale:.35,saturation:.85,contrast:.9,hazeScale:.012,hazeStart:20}}},time:e=>e.map(e=>({...e,...g[e.hour]??{}})),tiles:m,sceneSize:`internal`,clouds:()=>{if(_)return _;let c=o(`bright-air-clouds`),l=/* @__PURE__ */ new Float32Array(65536),u=(e,t,n,r)=>{let i=n*n,a=Math.ceil(n*2.2);for(let n=-a;n<=a;n++)for(let o=-a;o<=a;o++){let a=(o*o+n*n)/i;if(a>4.8)continue;let s=((Math.round(t)+n)%256+256)%256*256+((Math.round(e)+o)%256+256)%256;l[s]+=r*Math.exp(-a*1.4)}};for(let e=0;e<10;e++){let e=c()*256,t=c()*256,n=.7+c()*.8,r=9+Math.floor(c()*9);for(let i=0;i<r;i++){let r=c()*Math.PI*2,i=Math.sqrt(c())*26*n;u(e+Math.cos(r)*i*1.7,t+Math.sin(r)*i,(6+c()*11)*n,.35+c()*.3)}}let d=s(256,256,c.fork(`fine`),{cells:8,octaves:3,gain:.5}),f=/* @__PURE__ */ new Uint8Array(262144);for(let e=0;e<65536;e++){let t=1-Math.exp(-l[e]*1.6);f[e*4]=Math.round(Math.min(1,t)*255),f[e*4+1]=Math.round(d[e]*255),f[e*4+3]=255}return _=new r(f,256,256,e,t),_.wrapS=_.wrapT=a,_.magFilter=i,_.minFilter=n,_.generateMipmaps=!0,_.colorSpace=``,_.needsUpdate=!0,_},glsl:{common:`
float baLum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
// how green a colour is, by hue (its margins relative to its brightest channel), 0..1
float baGreen(vec3 c) {
  float m = max(max(c.r, c.g), max(c.b, 0.02));
  return smoothstep(0.0, 0.1, (c.g - c.r) / m) * smoothstep(0.05, 0.2, (c.g - c.b) / m);
}
// what sways in the wind: leaf cards and crown cores (Surface.foliage is the sway level, which
// interpolates without harm); macros, since the sky and post stages have no Surface
#define BA_SWAY(s) ((s).foliage > 0.0)
// the sky's own colour seen toward a direction (for rims and fill)
vec3 baSkyToward(vec3 d) {
  return mix(uSkyHorizon, uSkyZenith, pow(clamp(d.y, 0.0, 1.0), 0.6));
}
`,albedo:`
vec3 styleAlbedo(Surface s) {
  // a crown's colour is its texel x tint, not s.albedo: the engine's packed material code (light kind,
  // surface flags, sway level) is interpolated across a card or core whose corners sway differently, and
  // in the bands where its low bits pass through 6 or 7 the leaves are taken for a switched-off signal
  // lens (x 0.22): those bands were the stripes and dashes on every near crown. The leaves' night
  // greying is redone here.
  bool leaf = BA_SWAY(s);
  // (and the tint's baked crown darkening, 0.4 at a crown's underside, is mostly let go: the cast
  // shadow already shades a crown's core, and the two together made it black)
  vec3 c = leaf ? s.texel.rgb * s.tint * pow(max(baLum(s.tint), 0.05), -0.6) : s.albedo;
  if (leaf) c = mix(c, vec3(baLum(c)), smoothstep(0.15, 0.85, uNightGlow) * uFoliageNight.x * uFoliageNight.z * s.cutout);
  float l = baLum(c);
  c = max(mix(vec3(l), c, 1.15), 0.0);
  // (the surface flags mean nothing on a leaf, for the same reason)
  bool road = !leaf && (s.kind & 8) != 0, walk = !leaf && (s.kind & 16) != 0;
  // vegetation (leaf cards, and green ground that is neither road nor pavement); walls are never touched
  float veg = s.cutout > 0.5 ? 1.0 : (road || walk ? 0.0 : smoothstep(0.6, 0.85, s.normal.y));
  float mx = max(c.r, max(c.g, c.b));
  // (in sunlight: under fog or overcast greens stay as they are)
  float sunny = clamp(baLum(uSunColor) / 0.45, 0.2, 1.0) * (1.0 - uNightGlow);
  // (green by hue, relative to the colour's brightness: a dark card in a crown's underside is as green as
  // a lit one, and must take the same push)
  float green = baGreen(c) * veg;
  vec3 yg = vec3(0.66, 0.78, 0.24) * (mx * mix(1.04, 1.16, 1.0 - s.cutout));
  // the push follows the sun that lands here: lawn and leaves in sun go yellow-green; in a cast shadow
  // (a crown's own core too) they keep their blue and go cool, a sage lawn and a teal core (the cool
  // fill turns a yellow-green olive)
  float here = 1.0 - max(s.shadow, s.sunShadow);
  c = mix(c, mix(c, yg, 0.55), green * sunny * here);
  c = mix(c, (s.cutout > 0.5 ? vec3(0.4, 0.68, 0.64) : vec3(0.52, 0.8, 0.64)) * mx, green * sunny * (1.0 - here) * 0.55);
  // lawn: wind-brushed patches, long along the wind, warm yellow-green to cool blue-green in sun, sage
  // to teal in shade
  vec2 q = vec2(dot(s.pos.xz, vec2(0.8, 0.6)) / 3.0, dot(s.pos.xz, vec2(-0.6, 0.8)));
  float qw = fwidth(q.y / 4.0);
  if (s.cutout < 0.5 && green > 0.0) {
    float n = vnoise(q / 4.0) * 0.6 + vnoise(q / 1.4 + 7.1) * 0.4;
    float k = (n - 0.5) * 2.0 * green * (1.0 - smoothstep(0.08, 0.3, qw));
    c *= 1.0 + k * mix(vec3(0.04, 0.14, 0.2), vec3(0.16, 0.08, -0.12), here);
  }
  // asphalt: broad patches and darker stains a few metres across, warm and cool. A near-white vertex
  // tint gives only its hue: its few per-cent steps between street polygons drew Divisadero's seam
  if (road) {
    float tl = baLum(s.tint);
    c = mix(c, c / max(tl, 0.05) * 0.96, smoothstep(0.8, 0.9, tl));
    float n = vnoise(s.pos.xz / 6.5) * 0.6 + vnoise(s.pos.xz / 2.2 + 3.7) * 0.4;
    float stain = smoothstep(0.62, 0.8, vnoise(s.pos.xz / 3.1 + 11.3));
    c *= (0.9 + 0.22 * n) * (1.0 - 0.14 * stain) * vec3(1.06 + 0.04 * n, 1.04, 1.0 - 0.03 * n);
  }
  return c;
}`,light:`
vec3 styleLight(Surface s) {
  float night = smoothstep(0.15, 0.85, uNightGlow);
  // shade takes the sky's hue: the ambient keeps its brightness but leans to the sky ambient's colour
  vec3 amb = mix(s.amb, uAmbSky * (baLum(s.amb) / max(baLum(uAmbSky), 1e-3)), 0.6 * (1.0 - night * 0.5));
  vec3 sun;
  if (s.cutout > 0.5 || s.foliage > 0.0) {
    // a crown is lit as one mass, nearly regardless of each card's normal (per-card light is what drew
    // the cards as stripes): the clumps' own painted light (brush.ts: warm tops, cool undersides) and
    // the cast sun shadow (a crown shades its own core) carry the form. A little of the card's facing
    // up or down remains; lit through a touch when the sun is behind it.
    // (a double-sided card is lit by the face we see)
    float up = smoothstep(-0.8, 0.9, (dot(s.normal, s.toEye) < 0.0 ? -s.normal : s.normal).y);
    float thru = pow(max(dot(-s.toEye, uSunDir), 0.0), 2.0) * 0.2 * (1.0 - night);
    sun = uSunColor * (0.62 + 0.18 * up) + uSunColor * thru;
    // (a crown's shade is the sky seen through it: a deep teal, lit enough to read as foliage, not a hole)
    vec3 core = vec3(baLum(uAmbSky)) * vec3(0.6, 0.92, 1.0) * 1.3;
    vec3 crown = mix(core, mix(uAmbSky, uAmbGround, 0.3) * 1.2, 0.3 + 0.4 * up);
    // (at night the default's foliage ambient, keeping some of the crown's moonlit top over its core)
    amb = mix(crown, s.amb, night * 0.55);
  } else {
    // Lambert's gradation (so a bay's angled faces part from its front) under a soft terminator
    // the sun lights as if it stood at least ~15 degrees up (as the cast shadow is cast from >= 25):
    // a low sunset sun still lights the lawn it lays its long shadows across
    vec3 L = normalize(vec3(uSunDir.x, max(uSunDir.y, 0.26), uSunDir.z));
    // roads and pavements: lit as if level, so a warped street quad's two triangles don't part along
    // their diagonal (even 15 % of the warped normal drew Divisadero's seam)
    vec3 nrm = (s.kind & 24) != 0 ? vec3(0.0, 1.0, 0.0) : s.normal;
    // open ground sees the whole sky: a lawn or a path in shade is lit by it a step more than a wall
    // (not in fog, where the sky is all the light there is already)
    amb *= 1.0 + 0.45 * smoothstep(0.6, 0.95, s.normal.y) * (1.0 - night) * (1.0 - smoothstep(1.0 / 900.0, 1.0 / 120.0, uHazeDensity));
    float ndl = dot(nrm, L);
    float lam = smoothstep(-0.15, 0.15, ndl) * clamp(ndl * 0.8 + 0.35, 0.0, 1.0);
    sun = uSunColor * lam;
  }
  // greens in shade go cool blue-green, not the violet the sky ambient would multiply them to (mud)
  float g = baGreen(s.albedo);
  amb = mix(amb, vec3(baLum(amb)) * vec3(0.84, 1.06, 1.22) * 1.2, g * 0.75 * (1.0 - night));
  // cast sun shadow (walls, lawns, stairs) and the baked ground shade, whichever is darker
  // (contact darkening is the ground's: a basket or a bench standing in it keeps most of its light)
  float ao = s.ao * mix(0.35, 0.8, smoothstep(0.5, 0.9, s.normal.y)) * (1.0 - 0.6 * g);
  return (amb + sun * (1.0 - max(s.shadow, s.sunShadow))) * (1.0 - ao);
}`,surface:`
vec3 styleSurface(vec3 col, Surface s) {
  float facing = max(dot(s.normal, s.toEye), 0.0);
  float fres = pow(1.0 - facing, 3.0);
  float upright = 1.0 - smoothstep(0.5, 0.9, abs(s.normal.y));
  float day = 1.0 - uNightGlow;
  vec3 back = baSkyToward(normalize(vec3(-s.toEye.x, 0.25, -s.toEye.z)));
  float behind = pow(max(dot(-s.toEye, uSunDir), 0.0), 3.0);
  vec3 rimc = mix(col * 1.3 + 0.06, back, 0.55) + uSunColor * behind * 0.6;
  float k = fres * mix(upright, 1.0, s.cutout) * (s.cutout > 0.5 ? 0.22 : 0.2) * day * (1.0 - s.shadow * 0.6);
  col = mix(col, max(col, rimc), k);
  if (BA_SWAY(s)) {
    // crowns: no gloss and no rim, day or night (the engine reads a gloss in the same interpolated bands
    // as the lens, styleAlbedo); the sun and sky's light and the lamps and headlights only
    // (and without the night street glow, which the engine adds wherever that interpolated code reads
    // road or pavement: bands of lamp colour across the cards, the night knit. Its exact term, taken back)
    vec3 lamps = s.lamps;
    bool rd = (s.kind & 8) != 0, wk = (s.kind & 16) != 0;
    if (uNightGlow > 0.0 && uStreetGlow.x > 0.0 && (rd || wk)) {
      float sd = smoothstep(uStreetGlow.y, uStreetGlow.z, s.dist);
      float bead = 1.0 + 0.4 * cos(6.2832 * (s.pos.x + s.pos.z) / 35.0) * sd;
      float hand = 1.0 - smoothstep(2500.0, 3000.0, s.dist);
      lamps -= uLampColor * uStreetGlow.x * uNightGlow * mix(uStreetGlowBase, 1.0, sd) * bead * hand * (rd ? 1.0 : 0.7);
    }
    col = s.albedo * (s.light + max(lamps, 0.0));
  }
  if (s.cutout > 0.5 || s.foliage > 0.0) {
    float lit = smoothstep(0.2, 0.9, baLum(s.sun) / max(baLum(uSunColor), 1e-3)) * smoothstep(-0.3, 0.6, s.normal.y) * (1.0 - max(s.shadow, s.sunShadow)) * day * clamp(baLum(uSunColor) / 0.45, 0.0, 1.0);
    col *= mix(vec3(1.0), vec3(1.12, 1.05, 0.8), lit * 0.5);
  }
  return col;
}`,fog:`
vec3 styleFog(vec3 col, vec3 haze, float amount, Surface s) {
  // fog (a dense haze) is luminous: a pearl a step brighter than the haze, warm toward the sun
  float fogW = smoothstep(1.0 / 900.0, 1.0 / 120.0, uHazeDensity);
  vec3 pearl = min(haze * 1.05 + 0.03, vec3(0.97));
  pearl = mix(pearl, pearl * vec3(1.06, 1.0, 0.9), pow(max(dot(-s.toEye, uSunDir), 0.0), 4.0));
  haze = mix(haze, pearl, fogW);
  amount = max(amount, fogW * 0.3 * smoothstep(4.0, 30.0, s.dist));
  float dark = 1.0 - clamp(baLum(col) / max(baLum(haze), 0.05), 0.0, 1.0);
  float a = mix(amount, pow(amount, 0.85), dark);
  return mix(col, haze, a);
}`,cloud:`
// the default cloud field's two big scales (sky.ts cloudField, without its detail) at a chosen mip
float baField(vec2 uv, float lod) {
  vec2 q = mat2(0.8, -0.6, 0.6, 0.8) * uv * 0.41 + vec2(0.37, 0.11);
  return textureLod(uCloudTex, uv, lod).r * 0.62 + textureLod(uCloudTex, q, lod).r * 0.38;
}
vec4 styleCloud(vec4 cloud, float field, float threshold, float core, float lit, vec3 dir) {
  float low = 1.0 - smoothstep(0.15, 0.5, uSunDir.y);
  float thr = threshold - 0.09 * low;
  float a = smoothstep(thr - 0.005, thr + 0.03, field) * smoothstep(mix(0.05, 0.015, low), mix(0.2, 0.09, low), dir.y);
  // a cloud's rim is its brightest part (sunlit edges, BotW)
  float edge = 1.0 - smoothstep(thr + 0.02, thr + 0.16, field);
  vec3 top = mix(vec3(1.0, 0.98, 0.94), mix(uSkySunColor * 1.2 + 0.18, vec3(1.0, 0.74, 0.7), 0.6), low);
  vec3 belly = mix(vec3(0.66, 0.72, 0.84), vec3(0.6, 0.5, 0.66), low);
  // tops toward the sun and toward the horizon (seen from the side), bellies overhead and in the thick
  float t = clamp(0.2 + lit * 0.85 - core * 0.45 + (1.0 - dir.y) * 0.35 + edge * 0.45, 0.0, 1.0);
  // by day a painted cloud: a firm edge one pixel wide (the field magnified is a blurred texture), a
  // little scalloped, and inside it form, not spots: a lit body over one shaded belly, where the cloud
  // thins out just below this point on screen (a little farther along the view on the cloud plane),
  // read from a coarse mip so it is one soft shape per cloud
  float dayK = (1.0 - low) * uSunUp * (1.0 - smoothstep(0.6, 0.9, uCloudParams.x));
  if (dayK > 0.0) {
    float fine = texture(uCloudTex, dir.xz / (dir.y + 0.2) * 1.7).g - 0.5;
    float f2 = field + fine * 0.035;
    float w = max(fwidth(f2), 1e-4);
    float crisp = smoothstep(thr + 0.01 - w, thr + 0.01 + w, f2) * smoothstep(0.05, 0.2, dir.y);
    a = mix(a, crisp, dayK);
    vec2 uv = (dir.xz / (dir.y + 0.2) * uCloudGeom.y + uCloudWind * uTime) / uCloudGeom.x;
    vec2 away = normalize(dir.xz + vec2(1e-4)) * 0.07;
    float below = baField(uv + away, 2.5), here = baField(uv, 2.5);
    float bel = smoothstep(0.3, 0.7, smoothstep(thr + 0.14, thr - 0.04, below) * smoothstep(thr - 0.1, thr + 0.1, here) + core * 0.25);
    float body = 0.86 + 0.1 * (lit - 0.5) + 0.06 * edge;
    t = mix(t, mix(body, 0.28, bel), dayK);
  }
  vec3 c = mix(belly, top, smoothstep(0.1, 0.9, t));
  vec3 nightC = baSkyToward(dir) * 0.8 + vec3(0.07, 0.045, 0.03) * (1.0 - core);
  c = uSunUp > 0.5 ? c : mix(nightC, cloud.rgb, uAfterglow);
  // fog: no shapes, one luminous veil (overcast keeps its cloud base)
  float veil = smoothstep(0.9, 1.0, uCloudParams.x);
  c = mix(c, mix(uSkyHorizon, vec3(baLum(uSkyHorizon)), 0.3) * 1.04, veil);
  a = mix(a, 1.0, veil);
  return vec4(c, a);
}`,sky:`
// with the sun low: three layers of long cloud banks over the horizon (the hopium poster's), lumpy tops
// and flat bellies, broken by gaps; mauve bellies, peach-pink tops, gold toward the sun. Drawn here, on
// the finished sky, because the cloud layer is faded out toward the horizon after its hook.
vec3 baBands(vec3 col, vec3 dir, float k) {
  if (k <= 0.0 || dir.y <= 0.0) return col;
  // (azimuth as a fraction of the circle; every texture repeat along it is a whole number, so no seam)
  float az = atan(dir.x, dir.z) / 6.2832;
  float e = dir.y, px = max(fwidth(e), 1e-4);
  vec2 hs = normalize(uTrueSunDir.xz + vec2(1e-4));
  float toward = pow(max(dot(normalize(dir.xz + vec2(1e-4)), hs), 0.0), 3.0);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float c = 0.035 + fi * 0.05;
    // how thick the bank is along the horizon (gaps between banks, fewer higher up; round ends), and its
    // lumps (small heads)
    float m = textureLod(uCloudTex, vec2(az * (3.0 + fi), 0.17 + fi * 0.31), 0.0).g;
    float th = sqrt(smoothstep(0.44 + 0.05 * fi, 0.6 + 0.05 * fi, m)) * (0.026 - 0.006 * fi);
    float lump = textureLod(uCloudTex, vec2(az * (19.0 + 6.0 * fi), 0.53 + fi * 0.23), 0.0).g;
    // (heads: the cumulus texture's puffs where a line crosses them)
    float head = textureLod(uCloudTex, vec2(az * (7.0 + 2.0 * fi), 0.29 + fi * 0.37), 0.0).r;
    float top = c + th * (0.35 + 0.7 * lump + 1.4 * head * head), bot = c - th * 0.35;
    // (a firm lit top, a softer belly)
    float a = smoothstep(bot - px, bot + max(px * 2.0, th * 0.3), e) * (1.0 - smoothstep(top - px, top + px, e)) * step(0.002, th);
    float t = clamp((e - bot) / max(top - bot, 1e-4), 0.0, 1.0);
    vec3 lit = mix(vec3(1.0, 0.78, 0.68), min(uSkySunColor * 1.1 + 0.2, vec3(1.0)), toward * 0.7);
    vec3 belly = mix(vec3(0.62, 0.5, 0.66), vec3(0.72, 0.52, 0.56), toward);
    vec3 cc = mix(belly, lit, smoothstep(0.3, 0.85, t));
    col = mix(col, cc, a * k);
  }
  return col;
}
vec3 styleSky(vec3 col, vec3 dir) {
  float hp = clamp(dir.y, 0.0, 1.0);
  float t = pow(hp, uSkyPower);
  vec3 def = mix(uSkyHorizon, uSkyZenith, t);
  // the middle: the straight mix with its chroma restored and lifted toward the lighter end (gold to
  // lavender passes through peach, not grey)
  float lh = baLum(uSkyHorizon), lz = baLum(uSkyZenith);
  vec3 mid = mix(uSkyHorizon, uSkyZenith, 0.5);
  mid *= mix(1.0, max(lh, lz) / max(baLum(mid), 1e-3), 0.5);
  mid = clamp(mix(vec3(baLum(mid)), mid, 1.4), 0.0, 1.0);
  vec3 mine = mix(mix(uSkyHorizon, mid, t), mix(mid, uSkyZenith, t), t);
  float low = (1.0 - smoothstep(0.3, 0.6, uTrueSunDir.y)) * uAfterglow;
  // only where the sky shows (clouds, the halo and the sun keep theirs)
  float bare = 1.0 - smoothstep(0.02, 0.12, length(col - def));
  col += (mine - def) * low * bare * smoothstep(0.0, 0.06, dir.y);
  float fogW = smoothstep(1.0 / 900.0, 1.0 / 120.0, uHazeDensity);
  // the low banks: only with the sun low (and its afterglow), never in fog or overcast
  col = baBands(col, dir, (1.0 - smoothstep(0.18, 0.36, uTrueSunDir.y)) * uAfterglow * uSunUp * (1.0 - fogW) * (1.0 - smoothstep(0.7, 0.9, uCloudParams.x)));
  if (fogW <= 0.0) return col;
  float s = max(dot(dir, uSunDir), 0.0);
  vec3 pearl = min(col * 1.05 + 0.03, vec3(0.97));
  pearl += vec3(1.0, 0.86, 0.62) * (pow(s, 24.0) * 0.22 + pow(s, 4.0) * 0.06) * uSunUp;
  return mix(col, pearl, fogW);
}`,scene:`
vec3 styleScene(vec2 uv) {
  ivec2 p = sceneTexel(uv);
  float d = depthTexel(p);
  vec3 c = sceneAt(uv);
  vec2 px = 1.0 / uSrcSize;
  float sky = 50000.0;
  // painted distance
  // nothing within ~20 m (the walker's arm's length stays crisp), half from ~70 m, full by ~600 m
  float far = smoothstep(80.0, 600.0, d);
  float paint = smoothstep(18.0, 70.0, d) * mix(0.6, 1.0, far) * (d < sky ? 1.0 : 0.0) * (1.0 - 0.5 * uNightGlow);
  if (paint > 0.01) {
    float r = mix(0.7, 1.3, far);
    vec3 m0 = vec3(0.0), m1 = vec3(0.0), m2 = vec3(0.0), m3 = vec3(0.0);
    vec3 q0 = vec3(0.0), q1 = vec3(0.0), q2 = vec3(0.0), q3 = vec3(0.0);
    for (int j = -2; j <= 2; j++)
      for (int i = -2; i <= 2; i++) {
        vec3 v = sceneAt(uv + vec2(float(i), float(j)) * px * r);
        vec3 v2 = v * v;
        if (i <= 0 && j <= 0) { m0 += v; q0 += v2; }
        if (i >= 0 && j <= 0) { m1 += v; q1 += v2; }
        if (i <= 0 && j >= 0) { m2 += v; q2 += v2; }
        if (i >= 0 && j >= 0) { m3 += v; q3 += v2; }
      }
    m0 /= 9.0; m1 /= 9.0; m2 /= 9.0; m3 /= 9.0;
    float s0 = dot(q0 / 9.0 - m0 * m0, vec3(1.0));
    float s1 = dot(q1 / 9.0 - m1 * m1, vec3(1.0));
    float s2 = dot(q2 / 9.0 - m2 * m2, vec3(1.0));
    float s3 = dot(q3 / 9.0 - m3 * m3, vec3(1.0));
    vec3 k = m0; float sm = s0;
    if (s1 < sm) { sm = s1; k = m1; }
    if (s2 < sm) { sm = s2; k = m2; }
    if (s3 < sm) { sm = s3; k = m3; }
    c = mix(c, k, paint);
  }
  // sky rim: a silhouette edge against something much farther takes that light (two texels, the
  // outer one fainter)
  if (d < sky) {
    float th = d * 1.6 + 3.0;
    vec3 acc = vec3(0.0);
    float e = 0.0, wsum = 0.0;
    for (int k = 0; k < 8; k++) {
      ivec2 o = k == 0 ? ivec2(0, 1) : k == 1 ? ivec2(-1, 0) : k == 2 ? ivec2(1, 0) : k == 3 ? ivec2(0, -1)
              : k == 4 ? ivec2(0, 2) : k == 5 ? ivec2(-2, 0) : k == 6 ? ivec2(2, 0) : ivec2(0, -2);
      float dn = depthTexel(p + o);
      // light comes from above: the upper edge most, the sides less, the underside least
      float w = (o.y > 0 ? 1.0 : o.y < 0 ? 0.35 : 0.75) * (k < 4 ? 1.0 : 0.45);
      float hit = step(th, dn) * w;
      e = max(e, hit);
      acc += sceneTexelColor(p + o) * hit;
      wsum += hit;
    }
    if (e > 0.0) {
      vec3 behind = acc / max(wsum, 1e-3);
      float k = e * 0.45 * (1.0 - 0.75 * uNightGlow) * (1.0 - smoothstep(150.0, 900.0, d));
      c = mix(c, max(c, behind * 0.92 + c * 0.2), k);
    }
  }
  return c;
}`}});export{v as default};