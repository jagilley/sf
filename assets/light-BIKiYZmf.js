import{A as e,G as t,U as n,bn as r,tn as i,u as a,yn as o}from"./three.core-CMmUIUzP.js";import{c as s,d as c,l,n as u,o as d,r as f,s as p}from"./builder-DA6owUhM.js";import{l as m,t as h}from"./uniforms-Bhz7fZ2N.js";import{t as g}from"./materials-SOi59nxP.js";var _={perPixel:0,wrap:-1,wrapPow:1,key:1,fill:1,hemiFlat:0,keySat:1,fillSat:1,scatter:0,knee:1,feet:1,sheenSkin:0,sheenCloth:0,sheenPow:8,rim:0,rimKey:0,viewFill:0,lampPoint:0,lampWrap:.5,lampScale:1,lampTilt:1.2,lampFloor:.25,footShade:0,round:0,norm:0,target:1,gainMax:1,skinNeutral:0},v={perPixel:1,wrap:.55,wrapPow:1.4,key:.95,fill:.88,hemiFlat:-.3,keySat:1,fillSat:1,scatter:1,knee:.68,feet:.7,sheenSkin:.3,sheenCloth:.15,sheenPow:7,rim:.3,rimKey:.5,viewFill:.16,lampPoint:1,lampWrap:.6,lampScale:.45,lampTilt:.9,lampFloor:.3,footShade:1,round:.55,norm:.6,target:.95,gainMax:2,skinNeutral:.35},y={study:{},vertex:{perPixel:0},wrap:{wrap:.8,wrapPow:1.6,key:.85,fill:1.05,hemiFlat:.3,scatter:0,knee:1,feet:1,sheenSkin:0,sheenCloth:0,rim:0,rimKey:0,viewFill:0,lampPoint:0,footShade:0,round:0,keySat:1,fillSat:1,norm:0,skinNeutral:0},noround:{round:0},same:_};function b(e,t={}){let n=y[e];if(!n)throw Error(`study-l: unknown light "${e}"; one of world, ${Object.keys(y).join(`, `)}`);return{...v,...n,...t}}var x=8,S={uPLampPos:{value:Array.from({length:x},()=>new r)},uPLampCol:{value:Array.from({length:x},()=>new r)},uPLampAux:{value:Array.from({length:x},()=>new r)}},C=new WeakMap;function w(e){let t=C.get(e);if(t)return t;t=[];let n=e.getAttribute(`aTile`),r=e.getAttribute(`position`),i=e.getAttribute(`normal`);if(n?.array?.length&&r?.array?.length&&i?.array?.length){let e=new Set;for(let a=0;a<n.count;a++){let s=n.getX(a);if(s>-999.5)continue;let c=Math.round(u-s);if(c!==f.Lamp&&c!==f.Spill)continue;let l=`${c}:${r.getX(a).toFixed(2)},${r.getY(a).toFixed(2)},${r.getZ(a).toFixed(2)}`;e.has(l)||(e.add(l),t.push({kind:c,variant:Math.round(n.getY(a)),code:Math.round(n.getZ(a)),local:new o(r.getX(a),r.getY(a),r.getZ(a)),dir:new o(i.getX(a),i.getY(a),i.getZ(a))}))}}return C.set(e,t),t}var T=new WeakMap;function E(e){let t=T.get(e);if(t)return t;t=[],e.updateMatrixWorld();let r=new n;return e.traverse(e=>{let n=e;if(!n.isMesh||!n.geometry?.getAttribute?.(`aTile`))return;let i=w(n.geometry);if(i.length){r.getNormalMatrix(n.matrixWorld);for(let e of i)(e.kind!==f.Lamp||e.code===0)&&t.push({kind:e.kind,variant:e.variant,code:e.code,pos:e.local.clone().applyMatrix4(n.matrixWorld),dir:e.dir.clone().applyMatrix3(r).normalize()})}}),T.set(e,t),t}var D=-1,O=new a,k=new a,A=new a;function j(e,t,n){let r=e.info.render.frame;if(r===D)return;D=r;let i=m.lights;O.set(i.lampColor),k.set(i.whiteLampColor).multiplyScalar(.85),A.set(i.shopPool.color).multiplyScalar(i.shopPool.strength);let a=n.position,o=E(t).filter(e=>e.kind===f.Lamp||d(e.code)).map(e=>({l:e,d:e.pos.distanceToSquared(a)})).sort((e,t)=>e.d-t.d).slice(0,x);for(let e=0;e<x;e++){let t=S.uPLampPos.value[e],n=S.uPLampCol.value[e],r=S.uPLampAux.value[e],a=o[e];if(!a){n.set(0,0,0,0);continue}let s=a.l;if(s.kind===f.Spill){let e=Math.hypot(s.dir.x,s.dir.z)||1;t.set(s.pos.x,s.pos.y,s.pos.z,1),n.set(A.r,A.g,A.b,i.shopPool.reach),r.set(s.dir.x/e,s.dir.z/e,s.variant/20,0)}else{let e=!!(s.variant&2),a=s.variant&1?k:O,o=e?i.smallPoolStrength:1;t.set(s.pos.x,s.pos.y,s.pos.z,0),n.set(a.r*o,a.g*o,a.b*o,e?i.smallPoolRadius:i.poolRadius),r.set(+!!e,0,0,0)}}}var M=`
uniform vec4 uPA; // perPixel, wrap, wrapPow, key
uniform vec4 uPB; // fill, hemiFlat, keySat, fillSat
uniform vec4 uPC; // scatter, knee, feet, sheenSkin
uniform vec4 uPD; // sheenCloth, sheenPow, rim, rimKey
uniform vec4 uPE; // viewFill, lampPoint, lampWrap, lampScale
uniform vec4 uPF; // lampTilt, lampFloor, footShade, -
uniform vec4 uPG; // norm, target, gainMax, skinNeutral
`,N=`
uniform sampler2D uGround;
uniform vec4 uGroundRegion;
uniform vec4 uGroundParams;
uniform vec3 uLampColor;
uniform sampler2D uGroundNear;
uniform vec4 uGroundNearRegion;
uniform sampler2D uGroundLamp;
uniform sampler2D uGroundNearLamp;
vec4 groundLevel(sampler2D t, sampler2D tl, vec4 reg, vec2 xz, float fadeW, out float edge, out vec3 lamp) {
  edge = 0.0;
  lamp = vec3(0.0);
  if (reg.z <= 0.0) return vec4(0.0);
  vec2 uv = (xz - reg.xy) * reg.z;
  vec2 e = min(uv, 1.0 - uv);
  edge = smoothstep(0.0, fadeW, min(e.x, e.y));
  if (edge <= 0.0) return vec4(0.0);
  vec4 g = textureLod(t, uv, 0.0);
  lamp = textureLod(tl, uv, 0.0).rgb;
  g.a += reg.w;
  return g;
}
vec4 groundShade(vec3 p, vec3 n, out vec3 lamp) {
  float ef, en;
  vec3 lf, ln;
  vec4 g = groundLevel(uGround, uGroundLamp, uGroundRegion, p.xz, 0.07, ef, lf);
  vec4 gn = groundLevel(uGroundNear, uGroundNearLamp, uGroundNearRegion, p.xz, 0.18, en, ln);
  lamp = lf;
  if (en > 0.0) {
    g = ef > 0.0 ? mix(g, gn, en) : gn;
    lamp = ef > 0.0 ? mix(lf, ln, en) : ln;
  }
  float edge = max(ef, en);
  if (edge <= 0.0) {
    lamp = vec3(0.0);
    return vec4(0.0, 0.0, 0.0, 1e3);
  }
  float above = p.y - g.a;
  float near = 1.0 - smoothstep(0.0, uGroundParams.z, above);
  float flatness = smoothstep(0.35, 0.85, n.y);
  float wallBase = (1.0 - smoothstep(0.05, 0.45, above)) * 0.55;
  float ao = g.r * uGroundParams.x * mix(wallBase, near, flatness) * edge;
  float sun = g.g * uGroundParams.y * near * smoothstep(0.3, 0.8, n.y) * edge;
  float lampNear = 1.0 - smoothstep(0.5, 7.0, above);
  lamp *= uGroundParams.w * lampNear * (0.45 + 0.55 * max(n.y, 0.0)) * edge;
  return vec4(ao, sun, g.g * uGroundParams.y * edge, above);
}
`,P=`
uniform vec4 uSpotPos[4];
uniform vec4 uSpotDir[4];
uniform vec3 uSpotColor[4];
vec3 spotLights(vec3 p, vec3 n) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    vec3 c = uSpotColor[i];
    if (c.r + c.g + c.b <= 0.0) continue;
    vec3 L = uSpotPos[i].xyz - p;
    float d = length(L);
    vec3 l = L / max(d, 1e-3);
    float cone = smoothstep(uSpotDir[i].w, mix(uSpotDir[i].w, 1.0, 0.8), dot(-l, uSpotDir[i].xyz));
    float att = 1.0 - smoothstep(0.15 * uSpotPos[i].w, uSpotPos[i].w, d);
    att *= att * smoothstep(0.4, 3.5, d) * min(1.0, d / 4.0);
    float facing = 0.35 + 0.65 * max(dot(n, l), 0.0);
    acc += c * cone * att * facing;
  }
  return acc;
}
`,F=`
uniform float uNightGlow;
uniform vec3 uSunColor;
uniform vec3 uAmbSky;
uniform vec3 uAmbGround;
uniform vec4 uPLampPos[${x}];
uniform vec4 uPLampCol[${x}];
uniform vec4 uPLampAux[${x}];
float lumOf(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec3 sat(vec3 c, float s) { return mix(vec3(lumOf(c)), c, s); }
float wrapD(float d, float w, float p) {
  // w < 0: the world's own wrap (uLightWrap), plain Lambert shape
  return pow(clamp((d + w) / (1.0 + w), 0.0, 1.0), p);
}
void personLight(vec3 p, vec3 n, vec3 V, float skin, vec3 root, out vec3 fill, out vec3 key, out vec3 lamps, out vec3 sheen) {
  float h = p.y - root.y;
  // how much of the light's colour a surface keeps: cloth as the dials say, skin less (it reads as skin
  // under any light, as a painter keeps it)
  float keepFill = uPB.w * mix(1.0, 1.0 - uPG.w, skin), keepKey = uPB.z * mix(1.0, 1.0 - uPG.w, skin);
  vec3 ambMean = 0.5 * (uAmbGround + uAmbSky);
  // fill: the hemisphere, flattened toward its mean
  vec3 hemi = mix(uAmbGround, uAmbSky, n.y * 0.5 + 0.5);
  fill = sat(mix(hemi, ambMean, uPB.y), keepFill) * uPB.x;
  // view fill: the era's character light, from the camera: faces toward the viewer lightest, the silhouette
  // a little darker (the reel's limbs: flat across, darker at the edges); at night a dim neutral of its own
  float nv = clamp(dot(n, V), 0.0, 1.0);
  fill += uPE.x * (sat(ambMean, keepFill) + uNightGlow * vec3(0.17, 0.16, 0.19)) * wrapD(nv, 0.25, 1.0);
  // key: wrapped; skin's red wraps furthest round the terminator
  float wrap = uPA.y < 0.0 ? uLightWrap : uPA.y;
  float d = dot(n, uSunDir);
  vec3 w = vec3(wrap) + skin * uPC.x * vec3(0.28, 0.09, 0.03);
  vec3 k = vec3(wrapD(d, w.r, uPA.z), wrapD(d, w.g, uPA.z), wrapD(d, w.b, uPA.z));
  vec3 kc = sat(uSunColor, keepKey) * uPA.w;
  key = kc * k;
  // sheen: a broad soft highlight from the key (Blinn), skin and cloth apart
  vec3 H = normalize(uSunDir + V);
  float sp = pow(max(dot(n, H), 0.0), uPD.y) * smoothstep(-0.1, 0.3, d);
  sheen = sat(uSunColor, keepKey) * sp * mix(uPD.x, uPC.w, skin);
  // reflected light: on the shadow side toward the silhouette, light bounced back off the street (a
  // painter's lighter edge beyond the core shadow); and a key behind the person rims it
  float fr = pow(1.0 - nv, 2.0);
  float shadowSide = 1.0 - wrapD(d, 0.2, 1.0);
  vec3 bounceCol = sat(mix(uAmbGround, uAmbSky, 0.35) + 0.25 * uSunColor, keepFill);
  float behind = clamp(dot(normalize(vec3(-V.x, 0.0, -V.z) + 1e-4), normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + 1e-4)), 0.0, 1.0) * smoothstep(-0.2, 0.2, d);
  fill += uPD.z * fr * shadowSide * bounceCol * smoothstep(-0.8, 0.0, n.y);
  fill += uPD.w * pow(1.0 - nv, 3.0) * kc * behind;
  // skin's shade is warmer than its light (blood under the skin): the fill on skin leans red
  fill *= mix(vec3(1.0), vec3(1.1, 0.96, 0.88), skin * min(uPC.x, 1.0) * 0.7);
  // the figure's value plan: lightest at the head, darker toward the feet
  float plan = mix(uPC.z, 1.0, smoothstep(0.1, 1.45, h));
  fill *= plan;
  key *= mix(1.0, plan, 0.6);
  // the character's own exposure: raised toward a target level (the fill's mean plus 0.6 x the key) where
  // the light is dimmer than that, at most gainMax: people read at night; by day nothing changes
  float env = lumOf(ambMean) + 0.6 * lumOf(uSunColor);
  float gain = mix(1.0, clamp(uPG.y / max(env, 0.05), 1.0, uPG.z), uPG.x);
  fill *= gain;
  key *= gain;
  sheen *= gain;
  // lamps (incl. lit shop fronts), each with a position: the pool's own brightness where the person stands,
  // lit from the lamp's side
  lamps = vec3(0.0);
  for (int i = 0; i < ${x}; i++) {
    vec3 c = uPLampCol[i].rgb;
    if (c.r + c.g + c.b <= 0.0) continue;
    vec4 lp = uPLampPos[i];
    vec3 L = lp.xyz - p;
    float f;
    vec3 src;
    if (lp.w < 0.5) {
      // a street lamp: the pool's falloff (ground.ts lampFrag), sized and strengthened by its height
      float hl = max(lp.y - root.y, 1.0);
      float r2 = dot(L.xz, L.xz) / pow(uPLampCol[i].w * clamp(hl / 6.0, 0.35, 1.8), 2.0);
      if (r2 >= 1.0) continue;
      f = (1.0 - r2) * (1.0 - r2) * (0.55 + 0.45 * exp(-r2 * 6.0)) * clamp(hl / 8.0, 0.3, 1.2);
      src = L;
    } else {
      // a lit shop front: light from the nearest point of its window, falling off over its reach x 1.5
      vec2 o = uPLampAux[i].xy, al = vec2(-o.y, o.x);
      vec2 rel = p.xz - lp.xz;
      float out_ = dot(rel, o), along = dot(rel, al), hw = uPLampAux[i].z;
      if (out_ < 0.05) continue;
      float reach = uPLampCol[i].w * 1.5;
      float acr = 1.0 - smoothstep(hw - 0.35, hw + 0.7, abs(along));
      f = acr * pow(1.0 - clamp(out_ / reach, 0.0, 1.0), 1.2) * smoothstep(0.05, 0.4, out_);
      vec2 w2 = lp.xz + al * clamp(along, -hw, hw);
      src = vec3(w2.x, lp.y + 1.3, w2.y) - p;
    }
    vec3 cc = sat(c, mix(1.0, 1.0 - uPG.w, skin)) * f * uGroundParams.w;
    if (uPE.y < 0.5) {
      // the world's way: the pool under the pixel, by how upward the surface faces
      lamps += cc * (0.45 + 0.55 * max(n.y, 0.0));
      continue;
    }
    float dxz = length(src.xz);
    vec3 l = normalize(vec3(src.x, min(src.y, max(dxz, 0.4) * uPF.x), src.z));
    float ld = dot(n, l);
    vec3 lw = vec3(uPE.z) + skin * uPC.x * vec3(0.28, 0.09, 0.03);
    vec3 fac = vec3(wrapD(ld, lw.r, 1.3), wrapD(ld, lw.g, 1.3), wrapD(ld, lw.b, 1.3));
    lamps += cc * uPE.w * mix(vec3(uPF.y), vec3(1.0), fac);
    vec3 Hl = normalize(l + V);
    sheen += cc * uPE.w * pow(max(dot(n, Hl), 0.0), uPD.y) * mix(uPD.x, uPC.w, skin) * smoothstep(-0.1, 0.3, ld);
  }
  lamps *= mix(1.0, plan, 0.5);
}
`,I=`
in vec4 aTile;
in vec4 aColor;
in vec2 aMat;
uniform float uLightWrap;
uniform vec3 uSunDir;
${M}
${N}
${F}
out vec2 vUv;
out vec4 vTile;
out vec3 vBase;
out vec3 vWorldPos;
out vec3 vNormal;
out vec2 vMat;
out vec3 vRoot;
out vec3 vFill;
out vec3 vKey;
out vec3 vLamps;
out vec3 vSheen;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normal);
  vRoot = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vBase = aColor.rgb;
  vMat = aMat;
  vUv = uv;
  vTile = aTile;
  vWorldPos = wp.xyz;
  vNormal = n;
  vFill = vec3(0.0); vKey = vec3(0.0); vLamps = vec3(0.0); vSheen = vec3(0.0);
  if (uPA.x < 0.5) personLight(wp.xyz, n, normalize(cameraPosition - wp.xyz), clamp(aMat.x, 0.0, 1.0), vRoot, vFill, vKey, vLamps, vSheen);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,L=`
out highp vec4 fragColor;
uniform float uLightWrap;
${M}
in vec2 vUv;
in vec4 vTile;
in vec3 vBase;
in vec3 vWorldPos;
in vec3 vNormal;
in vec2 vMat;
in vec3 vRoot;
in vec3 vFill;
in vec3 vKey;
in vec3 vLamps;
in vec3 vSheen;
${p}
${s}
${l}
${c}
${N}
${P}
${F}
void main() {
  vec4 tex = sampleAtlas(vUv, vTile);
  vec3 n = normalize(vNormal);
  vec3 base = tex.rgb * vBase;
  float skin = clamp(vMat.x, 0.0, 1.0);
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 fill, key, lamps, sheen;
  if (uPA.x > 0.5) personLight(vWorldPos, n, V, skin, vRoot, fill, key, lamps, sheen);
  else { fill = vFill; key = vKey; lamps = vLamps; sheen = vSheen; }
  vec3 lampTex;
  vec4 gs = groundShade(vWorldPos, n, lampTex);
  // the key's shadow: the world's (ground-like surfaces only) and, for the whole person, one sample of the
  // ground's sun shadow just off the feet toward the sun (clear of the person's own shadow)
  float shadow = gs.y;
  if (uPF.z > 0.0) {
    vec2 ts = uSunDir.xz / max(length(uSunDir.xz), 1e-4);
    vec3 q = vRoot + vec3(ts.x, 0.0, ts.y) * 0.9;
    vec3 lq;
    vec4 gq = groundShade(vec3(q.x, vRoot.y + 0.05, q.z), vec3(0.0, 1.0, 0.0), lq);
    shadow = max(shadow, gq.z * uPF.z);
  }
  // the world's lamp light for people is the pool under the pixel; with lamps as lights it is replaced
  vec3 light = (fill + key * (1.0 - shadow)) * (1.0 - gs.x);
  light += (uPE.y < 0.5 ? lampTex : lamps) + spotLights(vWorldPos, n);
  vec3 col = base * light + sheen * (1.0 - shadow) * (1.0 - gs.x);
  // roll-off: a lit cheek keeps its gradation instead of running into the shoulder
  float m = max(col.r, max(col.g, col.b));
  float kn = uPC.y;
  if (kn < 1.0 && m > kn && skin > 0.0) {
    // skin only: a white shirt keeps the world's own shoulder (rolled off here it went grey)
    float mm = kn + (m - kn) / (1.0 + (m - kn) / (1.0 - kn) * 0.9);
    col *= mix(1.0, mm / m, skin);
  }
  col = shoulder(col);
  vec3 Vw = vWorldPos - cameraPosition;
  float f = fogAmount(vWorldPos, cameraPosition);
  col = mix(col, hazeColor(normalize(Vw)), f);
  fragColor = vec4(dither(col), 1.0);
}
`;function R(e){return{uPA:{value:new r(e.perPixel,e.wrap,e.wrapPow,e.key)},uPB:{value:new r(e.fill,e.hemiFlat,e.keySat,e.fillSat)},uPC:{value:new r(e.scatter,e.knee,e.feet,e.sheenSkin)},uPD:{value:new r(e.sheenCloth,e.sheenPow,e.rim,e.rimKey)},uPE:{value:new r(e.viewFill,e.lampPoint,e.lampWrap,e.lampScale)},uPF:{value:new r(e.lampTilt,e.lampFloor,e.footShade,0)},uPG:{value:new r(e.norm,e.target,e.gainMax,e.skinNeutral)}}}var z=new Map;function B(t){let n=JSON.stringify(t),r=z.get(n);return r||(r=new i({glslVersion:e,uniforms:{...h,...S,...R(t)},vertexShader:I,fragmentShader:L,defaultAttributeValues:{color:[1,1,1],uv:[0,0],uv1:[0,0],aMat:[0,0]}}),r.name=`study-l-person`,z.set(n,r),r)}function V(e,n){let r=[];e.traverse(e=>{let t=e;t.isMesh&&t.material===g.opaque&&r.push(t)});for(let e of r){let r=new t(e.geometry,n);r.name=`${e.name||`person`} (study-l)`,r.onBeforeRender=(e,t,n)=>j(e,t,n),e.layers.set(31),e.add(r)}}export{V as i,B as n,j as r,b as t};