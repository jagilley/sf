import{C as e,T as t,_ as n,c as r,g as i,k as a}from"./three.core-BV62Qcki.js";import{n as o}from"./rng-BVZPdspY.js";import{r as s}from"./paint-B2wJ_iH6.js";import{t as c}from"./kit-Dfvzj6n2.js";let l=null;var u=c({name:`example`,description:`Throwaway: every hook exercised (toon bands, rim, ink lines, banded sky and fog).`,look:{grade:{saturation:1.12,vignette:.3},lightWrap:0,sky:{glowStrength:.8},shadows:{sun:.9},sunShadow:{enabled:!0,soft:.15}},time:e=>e.map(e=>e.hour>=18&&e.hour<=19.5?{...e,ambientSky:`#9c88c4`,ambientGround:`#6a4a5a`}:e),tiles:(e,t)=>{let n=e.getImageData(0,0,t.w,t.h),r=n.data;for(let e=0;e<r.length;e+=4)if(t.cutout)r[e+1]=Math.min(255,r[e+1]*1.12);else for(let t=0;t<3;t++)r[e+t]=(r[e+t]+Math.round(r[e+t]/51)*51)/2;e.putImageData(n,0,0)},clouds:()=>{if(l)return l;let c=o(`style-example-clouds`),u=s(256,256,c,{cells:2,octaves:3,gain:.45}),d=s(256,256,c.fork(`fine`),{cells:5,octaves:3,gain:.5}),f=/* @__PURE__ */ new Uint8Array(262144);for(let e=0;e<65536;e++)f[e*4]=Math.round(u[e]*255),f[e*4+1]=Math.round(d[e]*255),f[e*4+3]=255;return l=new r(f,256,256,e,a),l.wrapS=l.wrapT=t,l.magFilter=i,l.minFilter=n,l.generateMipmaps=!0,l.needsUpdate=!0,l},uniforms:{uExInk:{value:1},uExRim:{value:.35}},sceneSize:`internal`,glsl:{common:`
uniform float uExInk;
uniform float uExRim;
`,albedo:`
vec3 styleAlbedo(Surface s) {
  return mix(s.albedo, atlasMean(s.uv, s.tile) * s.tint, 0.5);
}`,light:`
vec3 styleLight(Surface s) {
  float lit = (s.cutout > 0.5 ? s.ndl * 0.5 + 0.5 : max(s.ndl, 0.0)) * (1.0 - max(s.shadow, s.sunShadow));
  float band = lit > 0.5 ? 1.0 : lit > 0.12 ? 0.5 : 0.0;
  vec3 shade = s.amb * mix(vec3(0.8, 0.88, 1.2), vec3(1.0), band);
  return (shade + uSunColor * band) * (1.0 - s.ao);
}`,surface:`
vec3 styleSurface(vec3 col, Surface s) {
  col = s.albedo * (s.light + s.lamps * vec3(1.1, 0.95, 0.8)) + s.sheen * (1.0 - step(0.01, s.foliage));
  float rim = pow(1.0 - max(dot(s.normal, s.toEye), 0.0), 4.0) * step(0.0, s.ndl + 0.3) * (1.0 - smoothstep(20.0, 40.0, s.above));
  return col + uSunColor * rim * uExRim * (1.0 - s.shadow);
}`,fog:`
vec3 styleFog(vec3 col, vec3 haze, float amount, Surface s) {
  return mix(col, haze, floor(amount * 6.0 + 0.5) / 6.0);
}`,alpha:`
float styleAlpha(vec4 texel, vec2 uv, vec4 tile, vec3 pos) {
  vec2 t = fract(uv);
  t.y = 1.0 - t.y;
  return mix(texel.a, textureLod(uAtlas, tile.xy + t * tile.zw, gAtlasLod + 1.5).a, 0.6);
}`,cloudField:`
float styleCloudField(vec2 uv) {
  return texture(uCloudTex, uv).r * 0.8 + texture(uCloudTex, uv * 2.0 + 0.3).g * 0.2;
}`,cloud:`
vec4 styleCloud(vec4 cloud, float field, float threshold, float core, float lit, vec3 dir) {
  float a = smoothstep(threshold - 0.015, threshold + 0.015, field);
  return vec4(cloud.rgb * mix(0.88, 1.08, step(0.5, lit)), a);
}`,sky:`
vec3 styleSky(vec3 col, vec3 dir) {
  return floor(col * 14.0 + 0.5) / 14.0;
}`,scene:`
vec3 styleScene(vec2 uv) {
  vec3 c = sceneAt(uv);
  ivec2 p = sceneTexel(uv);
  float d = depthTexel(p);
  float e = 0.0;
  for (int i = 0; i < 4; i++) {
    ivec2 o = ivec2(i == 0 ? 1 : i == 1 ? -1 : 0, i == 2 ? 1 : i == 3 ? -1 : 0);
    e = max(e, abs(depthTexel(p + o) - d) / max(d, 0.1));
  }
  vec2 px = 1.0 / uSrcSize;
  vec3 n = styleNormal(uv);
  float crease = max(1.0 - dot(n, styleNormal(uv + vec2(px.x, 0.0))), 1.0 - dot(n, styleNormal(uv + vec2(0.0, px.y))));
  float line = max(smoothstep(0.03, 0.1, e), smoothstep(0.25, 0.6, crease)) * (1.0 - smoothstep(150.0, 600.0, d));
  return mix(c, c * 0.3, line * uExInk);
}`,post:`
vec3 stylePost(vec3 c, vec2 uv) {
  return c * (0.96 + 0.06 * ditherHash(floor(uv * uSrcSize)));
}`}});export{u as default};