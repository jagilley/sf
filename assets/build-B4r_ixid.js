import{bn as e,u as t}from"./three.core-CMmUIUzP.js";import{l as n,t as r}from"./uniforms-Bhz7fZ2N.js";import{t as i}from"./kit-Dfvzj6n2.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./style-Bj83bnuw.js";var d={sky:[`#141a4c`,`#26306c`,`#4e4484`,`#a8688a`],light:`#a4aee8`,sun:.7,shade:`#56509c`,ground:`#9a5a3a`,air:`#3e3a72`,leaves:[`#0c1a26`,`#1a3038`,`#3a5850`],ratio:.5,pull:.6,haze:1800,night:1,wash:`#1a1c4a`,washAmount:.04},f={sky:[`#161c4e`,`#283270`,`#4a4486`,`#8e6890`],light:`#9498d0`,sun:.3,shade:`#4e4c94`,ground:`#6a4a40`,air:`#3c3a70`,leaves:[`#0a1622`,`#162a34`,`#2c4446`],ratio:.5,pull:.5,haze:2400,night:.9,wash:`#2a2870`,washAmount:.05},p=.9,m=c.map(e=>e.hour===0||e.hour===20.9?{...d,hour:e.hour}:e.hour===5.2?{...f,hour:e.hour}:e),h={fog:{sky:[`#8692aa`,`#97a2b8`,`#a6aec0`,`#b0b8c6`],shade:`#6a7894`,air:`#a2acbe`,leaves:[`#3c4c58`,`#5a6a70`,`#76848a`],ratio:.82,pull:.5},overcast:{sky:[`#8a92a6`,`#9ca4b4`,`#aab0bc`,`#b4b8c2`],shade:`#6e7890`,air:`#a8afbc`,leaves:[`#2a424c`,`#567060`,`#88966c`],ratio:.78,pull:.45}},g={clear:0,fog:.95,overcast:.7};function _(e){return m.map(t=>({...e.reduce((e,n)=>Math.abs(n.hour-t.hour)<Math.abs(e.hour-t.hour)?n:e),hour:t.hour,skyZenith:t.sky[0],skyHorizon:t.sky[3],sunColor:t.light,sunIntensity:t.sun,ambientSky:t.shade,ambientGround:t.ground,fogColor:t.air,haze:t.haze,nightGlow:t.night,tint:`#ffffff`,wash:t.wash,washAmount:t.washAmount,contrast:1,saturation:t.night>=1?p:1}))}var v={skyHigh:new t,skyMid:new t,skyBand:new t,skyLow:new t,shade:new t,leafDeep:new t,leafMid:new t,leafLit:new t},y=new e,b=``,x=new t,S=(e,t,n,r)=>e.set(t).lerp(x.set(n),r),C={shade:`#86687e`,leaves:[`#22444e`,`#5a865a`,`#a6ba5c`],ratio:.68,pull:.45},w=()=>r.uFogNear.value>1e5;function T(){let e=r.uHour.value,t=String(n.weather),i=w(),a=i?`room`:`${e.toFixed(4)}|${t}`;if(a===b)return;if(b=a,i){v.shade.set(C.shade),v.leafDeep.set(C.leaves[0]),v.leafMid.set(C.leaves[1]),v.leafLit.set(C.leaves[2]),y.set(C.ratio,C.pull,0,1);return}let o=(e%24+24)%24,s=m.findIndex(e=>e.hour>o),c,l,u;s<=0?(c=m[m.length-1],l=m[0],u=((o-c.hour)%24+24)%24/(l.hour+24-c.hour)):(c=m[s-1],l=m[s],u=(o-c.hour)/(l.hour-c.hour)),S(v.skyHigh,c.sky[0],l.sky[0],u),S(v.skyMid,c.sky[1],l.sky[1],u),S(v.skyBand,c.sky[2],l.sky[2],u),S(v.skyLow,c.sky[3],l.sky[3],u),S(v.shade,c.shade,l.shade,u),S(v.leafDeep,c.leaves[0],l.leaves[0],u),S(v.leafMid,c.leaves[1],l.leaves[1],u),S(v.leafLit,c.leaves[2],l.leaves[2],u);let d=c.ratio+(l.ratio-c.ratio)*u,f=c.pull+(l.pull-c.pull)*u,p=c.night+(l.night-c.night)*u,_=h[t],T=(g[t]??0)*(1-.5*p);_&&T>0&&(v.skyHigh.lerp(x.set(_.sky[0]),T),v.skyMid.lerp(x.set(_.sky[1]),T),v.skyBand.lerp(x.set(_.sky[2]),T),v.skyLow.lerp(x.set(_.sky[3]),T),v.shade.lerp(x.set(_.shade),T),v.leafDeep.lerp(x.set(_.leaves[0]),T),v.leafMid.lerp(x.set(_.leaves[1]),T),v.leafLit.lerp(x.set(_.leaves[2]),T),d+=(_.ratio-d)*T,f+=(_.pull-f)*T),y.set(d,f,t===`fog`?1:t===`overcast`?.5:0,p)}var E=e=>({get value(){return T(),e()}}),D={uGSkyHigh:E(()=>v.skyHigh),uGSkyMid:E(()=>v.skyMid),uGSkyBand:E(()=>v.skyBand),uGSkyLow:E(()=>v.skyLow),uGShade:E(()=>v.shade),uGLeafDeep:E(()=>v.leafDeep),uGLeafMid:E(()=>v.leafMid),uGLeafLit:E(()=>v.leafLit),uGShape:E(()=>y)};function O(e,t,n,r){if(!e.includes(t))throw Error(`line-wash: ${r} changed; src/look/styles/line-wash/night.ts can't find ${JSON.stringify(t.slice(0,70))}`);return e.replace(t,n)}var k=`
float lwNightK() { return smoothstep(0.7, 1.0, uGShape.w) * (1.0 - uLwIndoor); }
`,A=`Gouache's light hook`,j=o.light;j=O(j,`* (1.0 - smoothstep(0.4, 0.9, uGShape.w)) * (1.0 - uGShape.z);`,`* (1.0 - smoothstep(0.4, 0.9, uGShape.w) * (1.0 - lwNightK() * (1.0 - smoothstep(0.4, 0.6, abs(s.normal.y))))) * (1.0 - uGShape.z);`,A),j=O(j,`return mix(lit * (1.0 - castSh), `,`return mix(lit * (1.0 - castSh) * lwGroundK(s), `,A);var M=`float plane = mix(mix(mix(0.76, 1.0, smoothstep(0.64, 0.72, s.ndl)), 1.0, smoothstep(0.5, 0.8, s.normal.y)), 1.0, uGShape.z);`;j=O(j,M,`${M}\n  plane = mix(plane, 1.0, 0.8 * lwNightK());`,A),j=O(j,`return vec3(mix(shade, lv * plane, t) * (1.0 - 0.2 * s.ao));`,`return vec3(mix(shade, lv * plane, t) * (1.0 - 0.2 * s.ao) * lwGroundV(s));`,A);var ee=`
float lwGround(Surface s) { return smoothstep(0.85, 0.95, s.normal.y) * (s.above < 0.4 || s.above > 900.0 ? 1.0 : 0.0); }
float lwGroundK(Surface s) { return 1.0 - 0.6 * lwNightK() * lwGround(s); }
float lwGroundV(Surface s) {
  float road = s.cutout < 0.5 && s.foliage <= 0.0 && (s.kind & 8) != 0 ? 1.0 : 0.0;
  return 1.0 - 0.25 * lwNightK() * lwGround(s) * (1.0 - road);
}
${j}`,N=`
// the steps: each a doubling of the light, one flat value (its middle), the first at a faint light so the street's
// low glow between the lamps stays a wash. By night the light counts a step stronger, three steps where the evening
// has two; a lit surface tops out under the light itself (rooms, lamp heads and windows glow after this hook, so they
// stay the brightest things). Only the strength goes with the hour: a street lamp is one light, its pool, head, corona
// and light up the fronts all the LED white of look.lights.lampColor (build.ts) at every hour it is on. A shop's warm
// spill is taken by night most of the way to one warm cream (LW_WARM), as it was: the warm share of the light
// (lwWarmShare) is, the lamps' white never
const float LW_L0 = 0.15, LW_GAIN_N = 1.3, LW_TOP_N = 0.76;
const vec3 LW_WARM = vec3(1.0, 0.84, 0.6);
// how much of a light is warm (a shop's spill, #ffc47a) rather than the lamps' white (uLampColor), by its blue against
// its red: 0 for the lamps (and the headlights' near white), 1 for a shop's spill, between where they overlap
float lwWarmShare(vec3 L) {
  return smoothstep(0.05, 0.3, uLampColor.b / max(uLampColor.r, 1e-4) - L.b / max(L.r, 1e-4));
}
// the default look's lamp colour (look.ts lights.lampColor, #ff8a34): the amber that the shops' rooms and every other
// glow of the lamp's kind keep (lwKeepWarmGlow)
const vec3 LW_SODIUM = vec3(1.0, 0.541, 0.204);
// a shop's room behind its glass (Gouache's SHOP_MARK, alpha 96) is an interior and stays warm: the lamp map knows no
// walls, so a street lamp's pool runs on through a shop's front onto its room; the lamps' share of what reaches it is
// taken in the amber the rooms had under the old sodium lamps, and counts as warm light (by night toward the cream),
// so a shop's room is as it was
float lwShopRoom(Surface s) { return s.cutout < 0.5 ? 1.0 - smoothstep(0.003, 0.006, abs(s.texel.a - 96.0 / 255.0)) : 0.0; }
// The engine draws every glow of the lamp's kind (Surface light 'lamp': a street lamp's glass, and also a shop's room,
// signs, bulbs and door glass, the Ladies' porches, a row's lamps, a theatre's box office) in a colour taken 0.65 of the
// way from look.glowColor to look.lights.lampColor on its paler texels (src/render/materials.ts, the night glow), after
// styleSurface. Line & wash's lamps are white, the rest keep the default look's amber: styleFog (glsl.ts) calls this
// first, and it puts back what the engine's glow would have been with LW_SODIUM on every glow of the lamp's kind but a
// street lamp's: its glass (the lens tiles, marked LW_LENS_MARK in build.ts) and the far city's street-light strips
// (flat, beyond the ground shade). The engine's glow weight is recomputed here from the same terms (vGlow, the glow
// mask, uNightGlow, uLampOn, a shop's closing hour), kept in step by hand: README "Known and not fixed"
const float LW_LENS_MARK = 129.0 / 255.0;
vec3 lwKeepWarmGlow(vec3 col, Surface s) {
  if ((s.kind & 7) != 1 || uNightGlow <= 0.0 || vGlow <= 0.0) return col;
  if (s.cutout < 0.5 && abs(s.texel.a - LW_LENS_MARK) < 0.0019) return col;  // a street lamp's glass
  if (s.normal.y > 0.7 && s.above > 900.0) return col;                       // the far city's street-light strips
  vec3 b = s.albedo;
  float mx = max(b.r, max(b.g, b.b)), mn = min(b.r, min(b.g, b.b));
  float sat = (mx - mn) / max(mx, 1e-3);
  float mask = s.cutout > 0.5 ? 1.0 : clamp((1.0 - s.texel.a) * 2.0, 0.0, 1.0);
  float open = 1.0;
  if (((int(vMat.y + 0.5) >> 9) & 1) == 1) open = (uHour < 12.0 ? uHour + 24.0 : uHour) < vMat.x * 0.1 ? 1.0 : 0.0;
  float g = clamp(vGlow * mask * uNightGlow * uLampOn * open, 0.0, 1.0);
  return col + g * 0.65 * (LW_SODIUM - uLampColor) * (0.7 + 0.4 * mx) * (1.0 - smoothstep(0.3, 0.7, sat)) * 1.1;
}
// the night's moonlit paint: a value above the knee is pressed toward it (the Ladies' white trim and stoops read as
// moonlit paint, a clear step under the lit windows and lamps)
const float LW_KNEE_N = 0.36, LW_KNEE_K = 0.35;
// by night green paint takes a warm light (a shop's) golden, at its own value, not lime; a leaf a muted olive (the
// world's crowns under a lamp went rust-brown at Deco's gold). nk: the night weight times the light's warm share; under
// the lamps' white, paint and leaves keep their own colour
vec3 lwWarmAlbedo(Surface s, float nk) {
  bool leaf = s.cutout > 0.5 && s.foliage > 0.0;
  return leaf ? mix(s.albedo, vec3(gLum(s.albedo)) * vec3(1.08, 1.0, 0.72), 0.6 * nk) : mix(s.albedo, vec3(gLum(s.albedo)) * vec3(1.3, 0.9, 0.55), 0.8 * nk * gGreen(s.albedo));
}
// The street's light thrown up the fronts: what a front has in front of it (a shop's spill, a lamp's pool: the
// engine's ground light 1.2 m out from its foot, groundShade in src/render/materials.ts, the function the surface
// hooks sit beside) washes up it in three flat steps by height from the top of a shop's glass, in that light's own
// colour (a lamp's white; a shop's spill the warm cream, as the spill is by night); undersides (a bay's, a cornice's,
// an awning's) take it most; nothing where nothing is lit
vec3 lwUplight(Surface s) {
  if (s.cutout > 0.5 || s.above > 900.0 || s.normal.y > 0.5) return vec3(0.0);
  vec3 nh = vec3(s.normal.x, 0.0, s.normal.z);
  float lh = length(nh);
  vec3 q = s.pos - vec3(0.0, s.above, 0.0) + (lh > 0.3 ? nh / lh * 1.2 : vec3(0.0));
  vec3 Lf;
  groundShade(q, vec3(0.0, 1.0, 0.0), Lf);
  float lf = min(gLum(max(Lf, 0.0)) * LW_GAIN_N, 1.6);
  float up = s.above - 2.7;
  if (up <= 0.0 || lf < 0.05) return vec3(0.0);
  float wash = 0.45 * step(up, 2.6) + 0.33 * step(up, 5.2) + 0.22 * step(up, 8.7);
  float front = smoothstep(0.3, 0.6, lh), under = smoothstep(0.5, 0.8, -s.normal.y);
  Lf = max(Lf, 0.0);
  float ws = max(lwWarmShare(Lf), lwShopRoom(s));
  vec3 hue = mix(Lf / max(gLum(Lf), 1e-4), LW_WARM / gLum(LW_WARM), ws) * gLum(LW_WARM);
  return lwWarmAlbedo(s, ws) * hue * lf * wash * (0.3 * front + 0.8 * under);
}
// k: the light in steps out from the first (with the brush's wander: lwLampSteps), w: its fwidth
float lwLampSteps(Surface s, float le, float nk) {
  // (a brush's edge, not a compass's: the steps' level wanders by up to half a step in waves a metre or two long)
  vec2 lp = s.pos.xz + s.pos.y * vec2(0.7, -0.4);
  float wander = (vnoise(lp * 0.7 + 3.1) - 0.5) * 0.5 + (vnoise(lp * 2.6 - 1.3) - 0.5) * 0.25;
  return log2(max(le * mix(1.0, LW_GAIN_N, nk), 1e-5) / LW_L0) + wander;
}
// (Sketchbook's) the pen where the light gives out: on the ground near the eye, strokes hatched just outside the
// outermost step's edge, each its own length (4 to 15 px out, measured in pixels from the light's slope, so the
// street's flat glow takes none), laid on the paper as the relief's hatching is (laid on the ground they
// foreshortened into stitches). fk: fwidth of the steps
float lwPoolPen(Surface s, float k, float fk) {
  if (s.cutout > 0.5 || (s.kind & 24) == 0 || s.dist > 60.0) return 0.0;
  float px = (0.5 - k) / max(fk, 1e-4);
  float len = mix(4.0, 15.0, lwHash(vec2(floor(dot(gl_FragCoord.xy, vec2(0.7071)) / 3.6), 7.0)));
  float band = (1.0 - smoothstep(len - 2.0, len, px)) * smoothstep(0.5, 1.5, px) * smoothstep(0.3, 0.6, uNightGlow) * (1.0 - smoothstep(25.0, 60.0, s.dist));
  return lwHatch(gl_FragCoord.xy, 0.32 * band, 3.6, 0.7854) * 0.8 * LW_INK;
}
vec3 lwLamps(vec3 c, Surface s, float k, float w, float fk, float nk) {
  vec3 L = max(s.lamps, 0.0);
  float le = gLum(L);
  // in a room the lamps' pools are the room's own light, in its own colour and uncapped (capped at 0.66 they dulled a
  // lamp-lit room's walls to tan by night), laid in the street's steps as the rest of its light is (room.ts)
  if (uLwIndoor > 0.5) {
    if (le <= 1e-4) return c;
    float i = floor(k), f = k - i;
    float lq = k < 0.5 - w ? le : LW_L0 * exp2(min(i + smoothstep(0.5 - w, 0.5 + w, f), 3.0) - 0.05);
    return c + s.albedo * L * (lq / max(le, 1e-4));
  }
  // (by night) moonlit paint a clear step under the lights; the asphalt toward the night (the pools and spills are the
  // street's light); the street's light up the fronts
  float cl = gLum(c);
  if (nk > 0.0 && cl > LW_KNEE_N) c *= mix(1.0, (LW_KNEE_N + (cl - LW_KNEE_N) * LW_KNEE_K) / cl, nk);
  bool road = s.cutout < 0.5 && s.foliage <= 0.0 && (s.kind & 8) != 0;
  if (road) c *= mix(1.0, 0.6, smoothstep(0.3, 0.9, uNightGlow));
  vec3 up = nk > 0.0 ? lwUplight(s) * nk : vec3(0.0);
  if (le <= 1e-4) return c + up;
  float pen = lwPoolPen(s, k, fk);
  if (pen > 0.0) c = mix(c, mix(c * 0.5, lwInk(), 0.4), pen);
  float i = floor(k), f = k - i;
  float ring = i + smoothstep(0.5 - w, 0.5 + w, f);                // the step's index, a crisp edge between
  float lq = mix(LW_L0 * exp2(min(ring, 2.0) - 0.15), LW_L0 * exp2(min(ring, 3.0) - 0.05), nk);   // the evening's two, the night's three
  lq = k < 0.5 - w ? le : lq;                                       // under the first step: what is there
  // near the eye, where a pool can be seen as a shape (farther off, the steps would only flicker); a crown takes the
  // light as it falls (rings on leaf cards read as a target painted on the tree), and only after dark, as Gouache has it
  bool isLeaf = s.cutout > 0.5 && s.foliage > 0.0;
  float stepK = (1.0 - smoothstep(70.0, 110.0, s.dist)) * (isLeaf ? 0.0 : 1.0);
  // the light's own colour at every hour (the lamps' white), in a shop's room the lamps' share in its amber; the warm
  // share by night most of the way to the cream
  float ws = lwWarmShare(L), room = lwShopRoom(s);
  vec3 Lh = mix(L, le * LW_SODIUM / gLum(LW_SODIUM), room * (1.0 - ws));
  ws = max(ws, room);
  Lh = mix(Lh, le * LW_WARM / gLum(LW_WARM), 0.7 * nk * ws);
  float leaf = isLeaf ? smoothstep(0.0, 0.2, uNightGlow) : 1.0;
  vec3 lamps = lwWarmAlbedo(s, nk * ws) * Lh * mix(1.0, lq / max(le, 1e-4), stepK) * leaf;
  // what a lamp or a shop lights stays under the light itself, its colour kept (by night the light's colour wins
  // where it tops out: the sum is scaled, not the light alone)
  vec3 lit = c + lamps + up;
  float top = mix(0.66, LW_TOP_N, nk), ll = gLum(lit);
  if (ll > top) lit = mix(c + (lamps + up) * clamp((top - gLum(c)) / max(ll - gLum(c), 1e-4), 0.0, 1.0), lit * top / ll, nk);
  return lit;
}`,P=`Gouache's sky hooks`,F=O(O(l.sky,`  c = mix(c, gCloud.rgb, gCloud.a);`,`  c = lwMoon(c, d);
  c = mix(c, gCloud.rgb, gCloud.a);`,P),`    c += vec3(0.7, 0.72, 0.95) * exp((sv - 1.0) / 0.003) * uMoonGlow;
    c = mix(c, vec3(0.9, 0.9, 0.96), disc * 0.9);`,`    c += vec3(0.7, 0.72, 0.95) * exp((sv - 1.0) / 0.003) * uMoonGlow * (1.0 - lwNightK());
    c = mix(c, vec3(0.9, 0.9, 0.96), disc * 0.9 * (1.0 - lwNightK()));`,P),I=`
const vec3 LW_MOON = vec3(-0.0493, 0.3338, 0.9413);   // bearing 183, 19.5 up (the Divisadero frame's)
float lwMoonAng(vec3 d) { return degrees(acos(clamp(dot(d, LW_MOON), -1.0, 1.0))); }
vec3 lwMoon(vec3 c, vec3 d) {
  float nk = lwNightK();
  if (nk <= 0.0) return c;
  float ang = lwMoonAng(d);
  vec3 m = mix(c, c * 1.08 + vec3(0.015, 0.015, 0.035), 1.0 - smoothstep(4.2, 4.35, ang));
  m = mix(m, m * 1.15 + vec3(0.035, 0.035, 0.06), 1.0 - smoothstep(2.1, 2.2, ang));
  m = mix(m, vec3(0.97, 0.95, 0.86), 1.0 - smoothstep(1.0, 1.08, ang));
  return mix(c, m, nk);
}`,L=`
float styleCloudField(vec2 uv);
// (the night's: how much thinner the cover; the belly's and the rim's depth, in the cloud texture's uv)
const float LW_CLOUD_THIN = 0.02, LW_BELLY = 0.025;
// the night's cloud over Gouache's (g), and the cover its outline follows
vec4 lwNightCloud(vec4 g, float field, float threshold, vec3 dir) {
  float nk = lwNightK();
  if (nk <= 0.0) return g;
  // the cloud plane's uv as the sky has it (src/render/sky.ts); farther out along it is lower on the screen
  float h = max(dir.y, 0.0);
  vec2 uv = (dir.xz / (h + 0.2) * uCloudGeom.y + uCloudWind * uTime) / uCloudGeom.x;
  vec2 o = normalize(dir.xz + vec2(1e-5)) * LW_BELLY;
  float thr = threshold + LW_CLOUD_THIN, e = 0.008;
  float a = smoothstep(thr - e, thr + e, field) * smoothstep(0.03, 0.16, dir.y) * (1.0 - uGShape.z);
  float low = 1.0 - smoothstep(0.25, 0.5, h);
  float belly = (1.0 - smoothstep(thr - e, thr + e, styleCloudField(uv + o))) * low;
  float rim = (1.0 - smoothstep(thr - e, thr + e, styleCloudField(uv - o * 0.4))) * low;
  vec3 body = vec3(0.29, 0.27, 0.52);
  vec3 c = mix(body, mix(vec3(0.98, 0.56, 0.5), vec3(1.0, 0.74, 0.56), smoothstep(0.1, 0.3, h)), belly);
  c = mix(c, vec3(0.66, 0.66, 0.9), rim * (1.0 - belly) * 0.8);
  return mix(g, vec4(c, a), nk);
}`,R=`
// The light's level, in steps (two to a doubling of the light), from the tint's value. lwRoomSteps lays it in those steps:
// one flat value each (its middle), the edge between two crisp and wandering as a brush's does (the street's wander, but
// bounded on the surface to about 10 cm: where the light barely changes, a wander of a fraction of a step moved an edge
// metres and drew stains), and only where the light changes across the surface (a pool, a lamp's falloff: from a third of
// a step a metre up; a wall or a ceiling lit evenly keeps its value, which one rounding would have moved by up to a step).
// Only on surfaces painted from a texture (16 px and up: walls, floors, ceilings, panels, upholstery: their tint is mostly
// the light); a piece in a flat colour keeps its value (its tint is its paint as much as its light: two chairs would
// differ by a step); not on what glows (its own light) or on leaves (rings on leaf cards read as a target).
// l0: lwRoomLevel; g, m: its fwidth and the surface's (m a pixel) at this pixel
const float LW_ROOM_PER = 2.0;
float lwRoomLevel(Surface s) { return log2(max(gLum(s.tint), 1e-4)) * LW_ROOM_PER; }
float lwRoomSteps(Surface s, float l0, float g, float m) {
  float tex = step(15.5, min(s.tile.z * uAtlasSize.x, s.tile.w * uAtlasSize.y));
  if (tex <= 0.0 || vGlow > 0.0 || s.foliage > 0.0) return 1.0;
  float perM = g / max(m, 1e-5);
  float k = smoothstep(0.3, 1.0, perM);
  if (k <= 0.0) return 1.0;
  vec2 lp = s.pos.xz + s.pos.y * vec2(0.7, -0.4);
  float wander = (vnoise(lp * 2.3 + 3.1) - 0.5) * 0.4 + (vnoise(lp * 6.1 - 1.3) - 0.5) * 0.2;
  float rk = l0 + wander * min(1.0, perM * 0.33);
  float w = clamp(g * 0.75, 0.02, 0.5);
  float i = floor(rk), f = rk - i;
  float q = i + smoothstep(0.5 - w, 0.5 + w, f);
  return mix(1.0, clamp(exp2(q / LW_ROOM_PER) / max(gLum(s.tint), 1e-4), 0.5, 2.0), k);
}
// The darks lifted (COO's toonValue: the frame's only blacks are drawn ones): a value under the floor (0.22) is raised by a
// dark warm grey, most at black (+0.1) and none at the floor, smoothly (its slope never under 0, so the darks keep their
// order): a black-box room's walls are black paint in little light, and came out as holes, darker than the pen
const float LW_ROOM_FLOOR = 0.22;
const vec3 LW_ROOM_DARK = vec3(0.118, 0.097, 0.09);   // (value 0.1: a warm grey, the paper's under a dark wash)
vec3 lwRoomDark(vec3 c) {
  float u = 1.0 - min(gLum(c) / LW_ROOM_FLOOR, 1.0);
  return c + u * u * LW_ROOM_DARK;
}
`,z=`
// the engine's air (src/render/shaders.ts fogAmount, from the same uniforms: build.ts hands them to this pass)
uniform float uHazeStart, uHazeDensity, uHazeMax, uFogNear, uFogFar;
uniform vec3 uGroundFog;
float lwFogAmount(vec3 worldPos, vec3 camPos) {
  vec3 d = worldPos - camPos;
  float dist = length(d);
  float hd = max(dist - uHazeStart, 0.0);
  float haze = 1.0 - exp(-hd * uHazeDensity);
  float a = uGroundFog.x, H = max(uGroundFog.y, 1.0);
  float y0 = camPos.y - uGroundFog.z;
  float e0 = exp(-max(y0, -200.0) / H);
  float optical = abs(d.y) < 0.01 ? a * e0 * dist : a * H * dist / d.y * (e0 - exp(-max(y0 + d.y, -200.0) / H));
  float ground = 1.0 - exp(-max(optical, 0.0) * hd / max(dist, 1e-3));
  float lin = clamp((dist - uFogNear) / max(uFogFar - uFogNear, 1.0), 0.0, 1.0);
  return 1.0 - (1.0 - uHazeMax * (1.0 - (1.0 - haze) * (1.0 - ground))) * (1.0 - lin);
}
float lwW(ivec2 p) { return depthTexel(p); }
float lwEdge(float d, float opp, float lim, float thr) { return smoothstep(thr, thr * 2.0, d - 1.5 * clamp(-opp, 0.0, lim)); }
vec2 lwH2(vec2 p) { vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); q += dot(q, q.yzx + 33.33); return fract((q.xx + q.yz) * q.zy); }
vec2 lwVn2(vec2 p) { vec2 i = floor(p), f = p - i; f = f * f * (3.0 - 2.0 * f); return mix(mix(lwH2(i), lwH2(i + vec2(1.0, 0.0)), f.x), mix(lwH2(i + vec2(0.0, 1.0)), lwH2(i + vec2(1.0, 1.0)), f.x), f.y); }
float lwH3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float lwVn3(vec3 p) {
  vec3 i = floor(p), f = p - i; f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(lwH3(i), lwH3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(lwH3(i + vec3(0.0, 1.0, 0.0)), lwH3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(lwH3(i + vec3(0.0, 0.0, 1.0)), lwH3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(lwH3(i + vec3(0.0, 1.0, 1.0)), lwH3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// The hand, fixed to the thing drawn (it wobbled ten times a second on the screen: a boil standing still): smooth
// noise of the drawn point's world position, its waves about 'px' pixels long at that depth, in power-of-two steps
// crossfaded (so the waves don't swim as the eye comes nearer). Two values 0..1.
vec2 lwHand(vec3 wp, float w, float px) {
  float l = log2(px * 2.0 * uStyleHalf.y * w / uSrcSize.y), k = floor(l), t = l - k;
  vec3 q = wp * exp2(-k);
  return mix(vec2(lwVn3(q), lwVn3(q + 41.7)), vec2(lwVn3(q * 0.5 + 17.1), lwVn3(q * 0.5 + 63.3)), t);
}

// (Sketchbook) 0..1: how near a colour's hue is to one of the hour's leaf greens (the script's), whatever its value.
// No foliage flag reaches post: a crown is found by its paint
float lwLeaf(vec3 c) {
  float l = max(lwLum(c), 1e-3);
  vec3 h = c / l;
  float d = min(min(length(h - uGLeafDeep / max(lwLum(uGLeafDeep), 1e-3)), length(h - uGLeafMid / max(lwLum(uGLeafMid), 1e-3))),
                length(h - uGLeafLit / max(lwLum(uGLeafLit), 1e-3)));
  return (1.0 - smoothstep(0.1, 0.24, d)) * smoothstep(0.02, 0.06, l);
}

// occlusion from depth: a spiral of taps over a disc ~6 % of the distance (0.3 to 1.4 m) round the point
float lwOcc(ivec2 p, float w0) {
  vec3 P = viewPosTexel(p);
  vec3 l = viewPosTexel(p - ivec2(1, 0)), r = viewPosTexel(p + ivec2(1, 0));
  vec3 b = viewPosTexel(p - ivec2(0, 1)), t = viewPosTexel(p + ivec2(0, 1));
  vec3 dx = abs(r.z - P.z) < abs(P.z - l.z) ? r - P : P - l;
  vec3 dy = abs(t.z - P.z) < abs(P.z - b.z) ? t - P : P - b;
  vec3 N = normalize(cross(dx, dy));
  float pxPerM = uSrcSize.y / (2.0 * uStyleHalf.y * w0);
  // (at least 30 cm whatever the distance: capped in pixels, the reach shrank to a few centimetres near the eye and
  // found every eye socket and the shade under a chin; COO's peopleFace keeps a face's own hollows unhatched)
  float R = clamp(0.035 * w0, 0.25, 0.9);
  float rpx = min(R * pxPerM, 72.0);
  if (rpx < 2.0) return 0.0;
  float o = 0.0;
  for (int i = 0; i < 14; i++) {
    float fi = float(i);
    float a = fi * 2.39996 + 0.7;
    float rr = rpx * sqrt((fi + 0.5) / 14.0);
    ivec2 q = p + ivec2(floor(vec2(cos(a), sin(a)) * rr + 0.5));
    vec3 v = viewPosTexel(q) - P;
    float d = length(v);
    o += max(0.0, dot(N, v) / max(d, 1e-4) - 0.12) * (1.0 - smoothstep(R, 2.2 * R, d));
  }
  return clamp(o / 14.0 * 2.0, 0.0, 1.0) * smoothstep(2.0, 5.0, rpx);
}

#if LW_PAINT
// (COO's finish: key-finish-paint-print) the frame flattened into painted patches: a Kuwahara filter (four
// overlapping quadrants, each weighted by how flat it is, so an edge keeps to the flattest side), its brush
// growing with distance (one texel near, three far); thin hard things the filter would erase (wires, poles,
// lettering) are kept as painted
vec3 lwPaint(ivec2 p, vec3 c0, float w0) {
  int r = w0 < 10.0 ? 1 : w0 < 45.0 ? 2 : 3;
  vec3 m0 = vec3(0.0), m1 = vec3(0.0), m2 = vec3(0.0), m3 = vec3(0.0);
  vec3 q0 = vec3(0.0), q1 = vec3(0.0), q2 = vec3(0.0), q3 = vec3(0.0);
  for (int j = -3; j <= 3; j++) {
    if (j < -r || j > r) continue;
    for (int i = -3; i <= 3; i++) {
      if (i < -r || i > r) continue;
      vec3 c = sceneTexelColor(p + ivec2(i, j)), cc = c * c;
      if (i <= 0 && j <= 0) { m0 += c; q0 += cc; }
      if (i >= 0 && j <= 0) { m1 += c; q1 += cc; }
      if (i <= 0 && j >= 0) { m2 += c; q2 += cc; }
      if (i >= 0 && j >= 0) { m3 += c; q3 += cc; }
    }
  }
  float n = float((r + 1) * (r + 1));
  m0 /= n; m1 /= n; m2 /= n; m3 /= n;
  vec4 v = vec4(dot(q0 / n - m0 * m0, vec3(1.0)), dot(q1 / n - m1 * m1, vec3(1.0)), dot(q2 / n - m2 * m2, vec3(1.0)), dot(q3 / n - m3 * m3, vec3(1.0)));
  vec4 w = 1.0 / (1.0 + pow(max(v, 0.0) * 600.0, vec4(2.0)));
  vec3 k = (m0 * w.x + m1 * w.y + m2 * w.z + m3 * w.w) / max(w.x + w.y + w.z + w.w, 1e-5);
  float keep = smoothstep(0.1, 0.26, abs(lwLum(k) - lwLum(c0)));
  return mix(k, c0, keep);
}
#endif

// ---- the placed line. A pixel is covered by the share of it a line covers (a box filter one pixel wide), so a
// line that moves a tenth of a pixel changes a tenth of a pixel's ink, never hopping a whole one
float lwOverlap(float lo, float hi, float j) { return clamp(min(hi, j + 0.5) - max(lo, j - 0.5), 0.0, 1.0); }
// a line W px wide centred d px from this pixel's centre
float lwCover(float d, float W) { return lwOverlap(d - 0.5 * W, d + 0.5 * W, 0.0); }
// Where an edge between a near pixel n (at 0) and a far one (n + dir, at 1) lies, in pixels from n's centre. Depth
// says only which pixel is near; the scene's colour, resolved from four samples, says how much of each the near
// surface covers (its paint taken a pixel inside, the far paint a pixel beyond). Paints too alike to tell put the
// edge midway. cn, cf: those two paints.
float lwShare(vec3 c, vec3 cn, vec3 cf) {
  vec3 d = cn - cf;
  float dd = dot(d, d);
  return dd < 0.0015 ? -1.0 : clamp(dot(c - cf, d) / dd, 0.0, 1.0);
}
float lwEdgeAt(ivec2 n, ivec2 dir, out vec3 cn, out vec3 cf) {
  cn = sceneTexelColor(n - dir); cf = sceneTexelColor(n + 2 * dir);
  float a0 = lwShare(sceneTexelColor(n), cn, cf), a1 = lwShare(sceneTexelColor(n + dir), cn, cf);
  return a0 < 0.0 || a1 < 0.0 ? 0.5 : clamp(a0 + a1 - 0.5, -0.5, 1.5);
}
// the hand's weight at a silhouette, from what is drawn (its near paint cn, its depth wn, the depth behind wf):
// heavy outer contours, thinner in the light and with distance; hw: the wobble's share (lwHand)
float lwNight = 0.0, lwFog = 0.0, lwBrk = 1.0, lwPress = 1.0, lwThin = 0.0;
// what counts as glowing (a lit window, a lamp), by its brightest channel: by night on the street anything past 0.62-0.8
// (the moonlit paint is pressed under it); in a room only what is near white (a room's lamp-lit cream walls pass 0.8,
// and took no relief and no inner line: they read as lit glass)
vec2 lwGlowT = vec2(0.62, 0.8);
const vec2 LW_ROOM_GLOW = vec2(0.9, 0.98);
// One silhouette between a near pixel n and n + dir; this pixel at j from n (0: n itself, -1: the one inside it,
// 1: the far one). x: the line's cover of this pixel, y: the paper's (the gap left on the far side)
vec2 lwSilEdge(ivec2 n, ivec2 dir, float wn, float wf, float wb, float j) {
  float s = lwEdge(wf - wn, wb - wn, 0.1 * wn, 0.035 * wn + 0.06);
  if (s <= 0.0) return vec2(0.0);
  vec3 cn, cf;
  float e = lwEdgeAt(n, dir, cn, cf);
  float outer = smoothstep(0.12, 0.5, (wf - wn) / wn);
  // (Sketchbook) a crown is outlined once: between two leaf colours a line only where the one behind is another
  // mass, metres back (more with distance), not round each card inside it
  s *= 1.0 - lwLeaf(cn) * lwLeaf(cf) * (1.0 - smoothstep(2.5 + 0.03 * wn, 5.0 + 0.06 * wn, wf - wn));
  // where the wash already parts the two sides the pen insists; inside a mass of one colour an inner edge is a faint
  // touch; in full sun an inner line breaks here and there (the outer contour stays closed)
  s *= mix(1.0, mix(0.15, 1.0, smoothstep(0.035, 0.14, length(cf - cn))), 1.0 - outer);
  s *= mix(lwBrk, 1.0, 0.8 * outer);
  // at night a lit window or lamp is one clean shape: no inner line on what glows (its outline stays)
  s *= 1.0 - smoothstep(lwGlowT.x, lwGlowT.y, max(max(cn.r, cn.g), cn.b)) * lwNight * (1.0 - outer);
  float sun = smoothstep(0.55, 0.85, lwLum(cn)) * (1.0 - lwNight) * (1.0 - lwFog);
  float away = 1.0 - smoothstep(0.15, 0.4, lwLum(cn));
  float ease = pow(1.0 + wn / 60.0, -0.5);
  float W = mix(mix(1.0, 1.6, outer) * (1.0 + 0.3 * away - 0.25 * sun) * (0.55 + 0.45 * ease), 1.0, lwThin) * lwPress;
  W = clamp(W, 0.6, 1.75);
  return vec2(s * lwOverlap(e - W, e, j), s * lwOverlap(e, e + 1.0, j));
}
// the silhouettes along one direction: this pixel near (the far one at +1), the next near (this one inside it), or
// the one before near (this one far). wm2, wm, w0, wq, wq2: depth at -2 .. +2 along dir
vec2 lwSilDir(ivec2 p, ivec2 dir, float wm2, float wm, float w0, float wq, float wq2) {
  return max(max(lwSilEdge(p, dir, w0, wq, wm, 0.0), lwSilEdge(p + dir, dir, wq, wq2, w0, -1.0)), lwSilEdge(p - dir, dir, wm, w0, wm2, 1.0));
}
// (Deco's) where the positive part of three second differences at -1, 0, 1 px lies, and how much it is; the same for
// the negative part
vec4 lwKink(vec3 D) {
  vec3 P = max(D, 0.0), N = max(-D, 0.0);
  float bp = P.x + P.y + P.z, bn = N.x + N.y + N.z;
  return vec4((P.z - P.x) / max(bp, 1e-30), bp, (N.z - N.x) / max(bn, 1e-30), bn);
}
// where a step between this pixel's neighbours lies (m: the pair's middle, -0.5 or 0.5 px; wm, w0, wq: depth at -1, 0,
// +1 along dir): placed from the colour as a silhouette is, the edge being between a near face and a far one
float lwStepAt(ivec2 p, ivec2 dir, float m, float wm, float w0, float wq) {
  int a = m < 0.0 ? -1 : 0;
  float wA = a < 0 ? wm : w0, wB = a < 0 ? w0 : wq;
  ivec2 A = p + a * dir;
  vec3 cn, cf;
  return wA <= wB ? float(a) + lwEdgeAt(A, dir, cn, cf) : float(a + 1) - lwEdgeAt(A + dir, -dir, cn, cf);
}

vec3 styleScene(vec2 uv) {
  ivec2 p = sceneTexel(uv);
  vec3 c = sceneTexelColor(p);
  float w0 = lwW(p);
#if LW_PAINT
  c = lwPaint(p, c, min(w0, 3.0e4));
#endif
  ivec2 tx = ivec2(1, 0), ty = ivec2(0, 1);
  float wl = lwW(p - tx), wq = lwW(p + tx), wd = lwW(p - ty), wu = lwW(p + ty);
  // the nearest thing at this pixel or beside it: what a line here is drawn on (a silhouette's line can lie partly
  // in the pixel beyond it, the sky's included)
  float wN = min(w0, min(min(wl, wq), min(wd, wu)));
  if (wN > 3.0e4) return c;   // the sky: drawn in its own pass
  bool sky = w0 > 3.0e4;
  ivec2 pN = wN == w0 ? p : wN == wl ? p - tx : wN == wq ? p + tx : wN == wd ? p - ty : p + ty;
  vec2 frag = vec2(p) + 0.5;
  vec3 ink = lwInk();
  vec3 sh = c * lwShadeHue() * 0.62;
  // (in a room the script's row has no fog and the night's weight: script.ts)
  float night = uGShape.w, fog = uGShape.z;
  lwNight = night; lwFog = fog;
  lwGlowT = mix(lwGlowT, LW_ROOM_GLOW, uLwIndoor);
  // the air over this pixel, as the surface under it got it (the same fog, banks and steps): what the ink is seen through
  vec3 wp = worldPosTexel(pN);
  float F = lwFogShape(lwFogAmount(wp, uStyleCamPos), wp, uStyleCamPos, 0.15);
  float clearK = (1.0 - F) * (1.0 - F);
  float bright = max(max(c.r, c.g), c.b);

  // ---- the relief
  if (!sky) {
    float holdR = smoothstep(4.9, 9.0, log2(max(w0, 1.0)));
    // (and eased off within a few metres of the eye: what is at arm's length, a person beside you above all, is left
    // as wash, the way a pen leaves the near foreground unworked)
    float occ = lwOcc(p, w0) * clearK * (1.0 - smoothstep(25.0, 140.0, w0) * 0.6) * smoothstep(1.8, 4.5, w0);
    // (Sketchbook) inside a crown the occlusion is a pool of its shade, not hatching or spotted blacks: card over card
    // read as a mottled ceiling of ink
    float leaf = lwLeaf(c);
    occ *= 1.0 - 0.65 * leaf;
    // lit windows and lamps keep their light whole at night: no pool, hatching or black from a deep reveal (read as
    // dirt in the pane from across the street)
    float keepLight = 1.0 - smoothstep(lwGlowT.x, lwGlowT.y, bright) * night;
    // (at night the pools and hatching ease off; the blacks keep their depth: the ink masses are what night is drawn with)
    float occB = occ * keepLight;
    occ *= keepLight * (1.0 - 0.35 * night);
    if (occB > 0.02 && LW_RELIEF == 1) {
      float pool = smoothstep(0.40, 0.48, occ);
      float cover = smoothstep(0.2, 0.65, occ) * 0.5;
#if LW_DOTS
      float tone = lwDots(frag, cover, 4.0, 0.4363);
      c = mix(c, sh, max(tone, pool * 0.8));
      float deep = lwHatch(frag, 0.32 * smoothstep(0.6, 0.85, occ), 3.0, 0.7854);
      c = mix(c, mix(sh * 0.6, ink, 0.45), deep);
#else
      // the pen's hatching: one way for the half of it, crossed in the deepest
      float h1 = lwHatch(frag, 0.3 * smoothstep(0.26, 0.55, occ), 3.2, 0.7854) * (1.0 - leaf);
      float h2 = lwHatch(frag, 0.3 * smoothstep(0.55, 0.8, occ), 3.2, -0.7854);
      c = mix(c, sh, pool * 0.75);
      c = mix(c, mix(sh * 0.7, ink, 0.55), max(h1, h2) * 0.85 * LW_INK);
#endif
      // the spotted blacks: the very deepest closes up into solid ink, clean-edged (the frame's darkest shape)
      float blk = smoothstep(0.76 - 0.12 * night, 0.8 - 0.12 * night, occB) * (1.0 - holdR * 0.6);
      // (inside a crown, a limb glimpsed between the leaves takes a pool, not a black: one there read as a hole)
      if (blk > 0.0) {
        float around = lwLeaf(sceneTexelColor(p + ivec2(3, 0))) + lwLeaf(sceneTexelColor(p - ivec2(3, 0))) + lwLeaf(sceneTexelColor(p + ivec2(0, 3))) + lwLeaf(sceneTexelColor(p - ivec2(0, 3)));
        blk *= 1.0 - 0.8 * smoothstep(1.5, 3.0, around + leaf * 2.0);
      }
      c = mix(c, mix(ink, sh, 0.15), blk * LW_INK);
    }
  }

  // ---- the line
  float fade = clearK;
  if (fade <= 0.01 || LW_LINES == 0) return c;
  float wl2 = lwW(p - 2 * tx), wq2 = lwW(p + 2 * tx), wd2 = lwW(p - 2 * ty), wu2 = lwW(p + 2 * ty);
  float thr = 0.035 * w0 + 0.06, l1 = 0.1 * w0, l2 = 0.2 * w0;
  float dl = wl - w0, dr = wq - w0, dd = wd - w0, du = wu - w0;
  float dl2 = wl2 - w0, dr2 = wq2 - w0, dd2 = wd2 - w0, du2 = wu2 - w0;
  // a thing a pixel or two across with what stands behind it on both sides (a wire, a mullion, a far pole)
  float sl = lwEdge(dl, dr, l1, thr), sr = lwEdge(dr, dl, l1, thr), sd = lwEdge(dd, du, l1, thr), su = lwEdge(du, dd, l1, thr);
  float thin = max(min(max(sl, lwEdge(dl2, dr2, l2, thr)), max(sr, lwEdge(dr2, dl2, l2, thr))), min(max(sd, lwEdge(dd2, du2, l2, thr)), max(su, lwEdge(du2, dd2, l2, thr))));
  // creases: the second difference of 1/w across continuous surface
  float z0 = 1.0 / w0, eps = 1e-4 * z0;
  float zl = 1.0 / wl, zr = 1.0 / wq, zd = 1.0 / wd, zu = 1.0 / wu;
  float zl2 = 1.0 / wl2, zr2 = 1.0 / wq2, zd2 = 1.0 / wd2, zu2 = 1.0 / wu2;
  float gl = z0 - zl, gr = zr - z0, gd = z0 - zd, gu = zu - z0;
  float contX = step(max(abs(gl), abs(gr)), 0.06 * z0), contY = step(max(abs(gd), abs(gu)), 0.06 * z0);
  // (Deco's fold, placed) along each axis the change of slope over five taps (the slopes 1.5 px out on either side)
  // is the fold's strength, the same wherever it falls between the samples, and its centre of mass is where it lies;
  // a slope 1.5 px out that crosses a silhouette is taken as the inner one, so a fold doesn't blink off as a
  // silhouette two pixels away moves across the taps
  float gOx = zl - zl2, gPx = zr2 - zr, gOy = zd - zd2, gPy = zu2 - zu;
  gOx = abs(gOx) <= 0.06 * z0 ? gOx : gl; gPx = abs(gPx) <= 0.06 * z0 ? gPx : gr;
  gOy = abs(gOy) <= 0.06 * z0 ? gOy : gd; gPy = abs(gPy) <= 0.06 * z0 ? gPy : gu;
  vec4 kx = lwKink(vec3(gl - gOx, gr - gl, gPx - gr)) * contX, ky = lwKink(vec3(gd - gOy, gu - gd, gPy - gu)) * contY;
  float sx = max(abs(gOx), abs(gPx)) + eps, sy = max(abs(gOy), abs(gPy)) + eps;
  vec4 sk = vec4(smoothstep(0.5, 0.9, kx.y / sx), smoothstep(0.5, 0.9, kx.w / sx), smoothstep(0.5, 0.9, ky.y / sy), smoothstep(0.5, 0.9, ky.w / sy));
  // (a convex and a concave fold a pixel apart are one thing narrower than a pixel: a ridge, a groove, a step's riser
  // seen edge on. Where it lies between the samples can't be known, so it would hop a pixel at a time: it is drawn only
  // as a step, one line on its middle; a ridge or a groove that small is left to the paint)
  vec2 pr = vec2(min(sk.x, sk.y) * (1.0 - smoothstep(1.2, 1.8, abs(kx.x - kx.z))), min(sk.z, sk.w) * (1.0 - smoothstep(1.2, 1.8, abs(ky.x - ky.z))));
  bool foldAny = max(max(sk.x, sk.y), max(sk.z, sk.w)) > 0.0;
  bool silAny = max(max(max(sl, sr), max(sd, su)), max(max(lwEdge(-dl, wl2 - wl, 0.1 * wl, 0.035 * wl + 0.06), lwEdge(-dr, wq2 - wq, 0.1 * wq, 0.035 * wq + 0.06)),
                max(lwEdge(-dd, wd2 - wd, 0.1 * wd, 0.035 * wd + 0.06), lwEdge(-du, wu2 - wu, 0.1 * wu, 0.035 * wu + 0.06)))) > 0.0
             || max(max(lwEdge(wl2 - wl, w0 - wl, 0.1 * wl, 0.035 * wl + 0.06), lwEdge(wq2 - wq, w0 - wq, 0.1 * wq, 0.035 * wq + 0.06)),
                    max(lwEdge(wd2 - wd, w0 - wd, 0.1 * wd, 0.035 * wd + 0.06), lwEdge(wu2 - wu, w0 - wu, 0.1 * wu, 0.035 * wu + 0.06))) > 0.0;
  if (!foldAny && !silAny) return c;

  // ---- the hand, fixed to what is drawn
  vec3 cN = sceneTexelColor(pN);
  float holdT = smoothstep(4.9, 9.0, log2(max(wN, 1.0)));   // how far into the colour holds: ~30 m .. ~500 m
  float wob = 1.0 - 0.85 * holdT;
  vec2 n = lwHand(wp, wN, 15.0);
  float gapN = lwHand(wp + 31.7, wN, 31.0).x;
  float sunP = smoothstep(0.55, 0.85, lwLum(cN)) * (1.0 - night) * (1.0 - fog);
  float away = 1.0 - smoothstep(0.15, 0.4, lwLum(cN));
  lwPress = 1.0 + wob * (0.12 * (n.y * 2.0 - 1.0) + 0.2 * smoothstep(0.45, 0.95, n.x) * (1.0 - thin));
  lwBrk = 1.0 - sunP * 0.6 * smoothstep(0.55, 0.72, gapN);
  lwThin = thin;

  // ---- silhouettes and the paper beside them
  vec2 sil = max(max(lwSilDir(p, tx, wl2, wl, w0, wq, wq2), lwSilDir(p, -tx, wq2, wq, w0, wl, wl2)),
                 max(lwSilDir(p, ty, wd2, wd, w0, wu, wu2), lwSilDir(p, -ty, wu2, wu, w0, wd, wd2)));
  // (the paper between a near thing and what stands behind it: the wash stops short of the line)
  // (eased by night on the street, where the dark is the night's; a room is lit, and its gap stays)
  if (!sky) c = mix(c, mix(c, LW_PAPER * max(lwLum(c) * 1.25, 0.35), 0.55), sil.y * (1.0 - sil.x) * LW_GAP * (1.0 - holdT) * (1.0 - night * 0.7 * (1.0 - uLwIndoor)));

  // ---- folds
  float crease = 0.0;
  if (foldAny && !sky) {
    vec2 nf = vec2(max(kx.y, kx.w), max(ky.y, ky.w));
    nf /= max(length(nf), 1e-30);
    float Wf = clamp(lwPress, 0.7, 1.4);   // a fold is a fine line, a pixel wide, as the hand presses
    float fold = max((1.0 - pr.x) * max(sk.x * lwCover(kx.x * nf.x, Wf), sk.y * lwCover(kx.z * nf.x, Wf)),
                     (1.0 - pr.y) * max(sk.z * lwCover(ky.x * nf.y, Wf), sk.w * lwCover(ky.z * nf.y, Wf)));
    float pair = max(pr.x > 0.0 ? pr.x * lwCover(lwStepAt(p, tx, 0.5 * (kx.x + kx.z), wl, w0, wq) * nf.x, Wf) : 0.0,
                     pr.y > 0.0 ? pr.y * lwCover(lwStepAt(p, ty, 0.5 * (ky.x + ky.z), wd, w0, wu) * nf.y, Wf) : 0.0);
    if (max(fold, pair) > 0.0) {
      // (COO inkFold) a crease only where two faces meet at 40 degrees or more: each face's plane from the taps on
      // its own side; a step between parallel faces (a reveal, a sill, a kerb) is a line all the same
      vec2 kk = 0.5 / (uStyleHalf / uSrcSize), nd = (uv * 2.0 - 1.0) * uStyleHalf;
      vec2 gA = vec2(zl - zl2, zd - zd2) * kk, gB = vec2(zr2 - zr, zu2 - zu) * kk;
      vec2 gC = vec2(gA.x, gB.y), gD = vec2(gB.x, gA.y);
      float cosF = min(dot(normalize(vec3(gA, dot(gA, nd) - z0)), normalize(vec3(gB, dot(gB, nd) - z0))),
        dot(normalize(vec3(gC, dot(gC, nd) - z0)), normalize(vec3(gD, dot(gD, nd) - z0))));
      vec2 gO = vec2(zl - zl2, zd - zd2), gP = vec2(zr2 - zr, zu2 - zu);
      vec2 J = abs((vec2(zl, zd) + gO) - (vec2(zr, zu) - gP)), Dg = abs(gO - gP);
      float S = max(max(abs(gO.x), abs(gP.x)), max(abs(gO.y), abs(gP.y))) + eps;
      // (a step takes a line only when it is deep enough to cast a shadow a sketcher would draw: 5 to 9 cm near the
      // eye, a casing, a sill, a cornice, not a board's lap or a dentil's face; deeper as it recedes. Sketchbook's)
      float stepK = smoothstep(0.3, 0.5, max(J.x - Dg.x, J.y - Dg.y) / (0.5 * S + max(J.x, J.y))) * smoothstep(max(0.006, 0.05 / w0), max(0.012, 0.09 / w0), max(J.x, J.y) / z0);
      // Near the eye a fold must be nearly square to be drawn (70 degrees and more, none under 55), easing to the
      // 40 degrees of the rest of the frame by 7 m. A person beside you is small and round: a face's nose, brow and
      // eyelids, a sleeve's creases fold at 30 to 60 degrees and took a line at every one (COO's peopleSmooth and
      // peopleFace keep the ink off a face); a corner, a stair, a sill folds square and keeps it
      float nearF = 1.0 - smoothstep(3.0, 7.0, w0);
      float angK = 1.0 - smoothstep(mix(0.766, 0.34, nearF), mix(0.94, 0.57, nearF), cosF);
      float ease = pow(1.0 + w0 / 60.0, -0.5);
      crease = max(fold * angK, pair * stepK) * 0.6 * min(1.0, ease * 1.25);
      // folds inside a crown (cards crossing) are left to the wash (Sketchbook's)
      crease *= (1.0 + 0.25 * away - 0.3 * sunP) * lwBrk * (1.0 - 0.8 * lwLeaf(c)) * (1.0 - smoothstep(lwGlowT.x, lwGlowT.y, bright) * night);
    }
  }
  float line = max(sil.x, crease);
  if (line <= 0.0) return c;
  // features a pixel or two across lose their line as they recede
  line *= 1.0 - thin * smoothstep(5.0, 7.0, log2(max(w0, 1.0)));
  // A pen's lighter hand for what stands back: the line thins in strength from a dozen metres to a block and a half
  // (the background stays behind the foreground instead of leaping forward), hairline things a step lighter still
  // (a wire is a light line by day: Sketchbook's), and by day a step lighter overall (a sunlit street is not drawn in black)
  float dayK = (1.0 - night) * (1.0 - uLwIndoor);
  float handK = mix(1.0, 0.35, smoothstep(20.0, 220.0, wN)) * mix(1.0, mix(0.5, 0.25, dayK), thin) * mix(1.0, 0.8, dayK);
  float amt = line * fade * handK * LW_INK;
  // (a thin thing with what is behind it, sky or anything twice as far, within 3 px on both sides along one axis: a
  // wire. Its own paint is lifted toward what is behind it and its line eased, by day; half as much after dark)
  if (thin > 0.0 && !sky) {
    float bk = 2.0 * w0;
    float wl3 = lwW(p - 3 * tx), wq3 = lwW(p + 3 * tx), wd3 = lwW(p - 3 * ty), wu3 = lwW(p + 3 * ty);
    float skyX = step(bk, max(max(wl, wl2), wl3)) * step(bk, max(max(wq, wq2), wq3)), skyY = step(bk, max(max(wd, wd2), wd3)) * step(bk, max(max(wu, wu2), wu3));
    float wire = max(skyX, skyY) * mix(0.5, 1.0, dayK);
    if (wire > 0.0) {
      vec3 behind = skyY > 0.5 ? 0.5 * (sceneTexelColor(p - 3 * ty) + sceneTexelColor(p + 3 * ty)) : 0.5 * (sceneTexelColor(p - 3 * tx) + sceneTexelColor(p + 3 * tx));
      c = mix(c, behind, 0.45 * wire);
      amt *= 1.0 - 0.45 * wire;
    }
  }
  // the ink near; farther off the line holds the colour of what is there, a deeper shade of it; by day it leans
  // toward the local colour's own dark; and it is seen through the same air as the surface (toward the air's colour)
  vec3 col = mix(ink, cN * 0.56 + ink * 0.1, holdT);
  col = mix(col, cN * 0.42, 0.45 * dayK * (1.0 - holdT));
  col = mix(col, uFogColor, F);
  return mix(c, col, clamp(amt, 0.0, 1.0));
}
`,B=e=>({lines:!0,relief:!0,tone:!0,sky:!0,finish:!0,...e.layers}),V=e=>`
#define LW_DOTS ${e.dots}
#define LW_PLATES ${e.plates.toFixed(2)}
#define LW_PLATES_ON ${+(e.plates>0)}
#define LW_GAP ${e.gap.toFixed(3)}
#define LW_INK ${e.ink.toFixed(3)}
#define LW_PAINT ${e.paint}
#define LW_LINES ${+!!B(e).lines}
#define LW_RELIEF ${+!!B(e).relief}
#define LW_TONE ${+!!B(e).tone}
`,H=`
const vec3 LW_PAPER = vec3(0.957, 0.925, 0.847);   // COO's paper, #f4ecd8
const vec3 LW_INK0 = vec3(0.110, 0.102, 0.180);    // COO's ink, #1c1a2e
float lwHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float lwNoise(vec2 p) { vec2 i = floor(p), f = p - i; f = f * f * (3.0 - 2.0 * f); return mix(mix(lwHash(i), lwHash(i + vec2(1, 0)), f.x), mix(lwHash(i + vec2(0, 1)), lwHash(i + vec2(1, 1)), f.x), f.y); }
uniform float uLwIndoor;   // 1 in a room (build.ts: the fog pushed out to a million metres, src/engine/interior.ts)
// (a room's pen: a deep umber, darker than the street's so it reads on a room's lifted darks: README "In a room")
const vec3 LW_ROOM_INK = vec3(0.078, 0.05, 0.046);
// the hour's ink: the shade's hue taken most of the way to COO's ink (violet at sunset, indigo at night,
// a blue-grey pencil in fog), never black; in a room an umber pen (the outside's hour is not its light)
vec3 lwInk() {
  vec3 h = uGShade / max(max(uGShade.r, uGShade.g), max(uGShade.b, 1e-3));
  vec3 ink = mix(LW_INK0, h * 0.24, 0.45);
  ink = mix(ink, h * 0.40 + 0.04, uGShape.z * 0.7);
  return mix(ink, LW_ROOM_INK, uLwIndoor);
}
// The air's shape (COO toonFogF, toonHazeF): in fog it rolls in banks on the wind (its depth varies by where the
// ray crosses the street, 60 % of the way out, in masses a block or two across), and it is laid in flat steps
// (five in fog, four in clear air). amount: the engine's fogAmount; w: the steps' edge (fwidth, or a constant).
// Shared by the surfaces (styleFog) and the ink (the scene pass), so a line is seen through the same air as
// the wall it is drawn on.
float lwFogShape(float amount, vec3 pos, vec3 cam, float w) {
  float fogK = uGShape.z;
  vec2 m = (cam.xz + (pos.xz - cam.xz) * 0.6) / 70.0 + vec2(uTime * 0.012, 0.0);
  float bank = mix(1.0, 0.35 + 1.3 * lwNoise(m), 0.7 * fogK);
  amount = 1.0 - pow(max(1.0 - amount, 1e-4), bank);
  float N = mix(4.0, 5.0, fogK);
  float g = amount * N, i = floor(g);
  return min(mix(amount, (i + smoothstep(0.5 - w, 0.5 + w, g - i)) / N, mix(0.8, 0.9, fogK)), 0.97);
}
// the shade's hue at full value (what the occlusion's wash is mixed from)
vec3 lwShadeHue() { return uGShade / max(max(uGShade.r, uGShade.g), max(uGShade.b, 1e-3)); }
float lwLum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
// Ben-Day dots: cover 0..1 of a cell px across, turned by ang; 1 inside a dot (anti-aliased)
float lwDots(vec2 frag, float cover, float cell, float ang) {
  if (cover <= 0.002) return 0.0;
  float c = cos(ang), s = sin(ang);
  vec2 f = fract(mat2(c, -s, s, c) * frag / cell) - 0.5;
  float r = sqrt(cover / 3.14159), aa = 0.55 / cell;
  return 1.0 - smoothstep(r - aa, r + aa, length(f));
}
// hatching: lines period px apart turned by ang, each cover x period wide; 1 on a line
float lwHatch(vec2 frag, float cover, float period, float ang) {
  if (cover <= 0.002) return 0.0;
  float d = abs(fract(dot(frag, vec2(cos(ang), sin(ang))) / period) - 0.5), aa = 0.55 / period;
  return 1.0 - smoothstep(cover * 0.5 - aa, cover * 0.5 + aa, d);
}
`,U=e=>`${s}\n${V(e)}\n${H}\n${k}`,W=o.albedo.replace(`vec3 styleAlbedo(Surface s)`,`vec3 gStyleAlbedo(Surface s)`),G=`float green = gGreen(s.albedo) * (`;if(!o.surface.includes(G))throw Error(`line-wash: Gouache's surface hook changed; src/look/styles/line-wash/glsl.ts can't find its greens`);var K=o.surface.replace(`vec3 styleSurface(vec3 col, Surface s)`,`vec3 gStyleSurface(vec3 col, Surface s)`).replace(G,`float green = (1.0 - uLwIndoor) * gGreen(s.albedo) * (`),q={albedo:`
${W}
vec3 styleAlbedo(Surface s) {
  vec3 a = gStyleAlbedo(s);
  // (COO toonValue) the darks are kept for the ink: a near-black paint (a tyre, a black car, a dark trim) is
  // lifted toward a floor so the frame's only blacks are drawn ones
  float L = lwLum(a);
  return a * mix(1.0, clamp(0.075 / max(L, 1e-3), 1.0, 2.6), 0.85);
}`,light:ee,surface:`
${K}

float lwToneFlat = 0.0;
vec4 lwToneAt(vec3 sp) {
  vec3 dx = dFdx(sp), dy = dFdy(sp), c = cross(dx, dy);
  vec3 n = c / max(length(c), 1e-20);
  float a = floor(atan(n.z, n.x + 1e-9) * 2.5464791 + 0.5) * 0.3926991, ca = cos(a), sa = sin(a);
  bool up = abs(n.y) > 0.707;
  vec2 gu = up ? vec2(dx.x, dy.x) : vec2(dx.z * ca - dx.x * sa, dy.z * ca - dy.x * sa), gv = up ? vec2(dx.z, dy.z) : vec2(dx.y, dy.y);
  float fu = length(gu), fv = length(gv), det = abs(gu.x * gv.y - gu.y * gv.x);
  lwToneFlat = 1.0 - smoothstep(0.45, 0.75, det / max(fu * fv, 1e-20)) * (1.0 - smoothstep(0.2, 0.6, sqrt(det)));
  return vec4(up ? sp.xz : vec2(sp.z * ca - sp.x * sa, sp.y), fu, fv);
}
float lwToneDot(float dist, float r) { return (1.0 - smoothstep(r - 0.55, r + 0.55, dist)) * min(r / 0.55, 1.0); }
float lwHalftoneS(vec4 tone, float cover, float cell) {
  if (cover <= 0.002 || tone.z <= 1e-9) return 0.0;
  vec2 l = log2(max(tone.zw * cell, 1e-9)), k = floor(l), t = l - k, cp = cell * exp2(-t), p = tone.xy * exp2(-k);
  vec2 go = 1.0 - smoothstep(0.25, 0.75, t);
  vec2 e = (p - 0.5 - 2.0 * floor((p + 0.5) * 0.5)) * cp, o = (p - 1.5 - 2.0 * floor((p - 0.5) * 0.5)) * cp;
  float A = cover * cp.x * cp.y / 3.14159;
  float d = max(max(lwToneDot(length(e), sqrt(A * (2.0 - go.x) * (2.0 - go.y))), lwToneDot(length(vec2(o.x, e.y)), sqrt(A * go.x * (2.0 - go.y)))),
                max(lwToneDot(length(vec2(e.x, o.y)), sqrt(A * (2.0 - go.x) * go.y)), lwToneDot(length(o), sqrt(A * go.x * go.y))));
  return mix(d, cover, lwToneFlat);
}
float lwHatchS(vec4 tone, float cover, float period, float ang) {
  if (cover <= 0.002 || tone.z <= 1e-9) return 0.0;
  float l = log2(max(sqrt(tone.z * tone.w) * period, 1e-9)), k = floor(l), t = l - k;
  float x = dot(tone.xy * exp2(-k), vec2(cos(ang), sin(ang)));
  float i = floor(x + 0.5), par = i - 2.0 * floor(i * 0.5), go = 1.0 - smoothstep(0.25, 0.75, t);
  float w = cover * mix(2.0 - go, go, par), aa = 0.55 * exp2(t) / period;
  float d = (1.0 - smoothstep(w * 0.5 - aa, w * 0.5 + aa, abs(x - i))) * min(w / aa, 1.0);
  return mix(d, cover, lwToneFlat);
}

// (COO bldgIndication) a wall's courses (siding, shingles, brick) indicated, not drawn all over: a few pen strokes
// along the courses in clusters, more of them in shade and along the wall's foot, none on its glass or trim; gone
// before a course is less than ~6 px apart (at 480 lines a line every course reads as a checker: Gouache's lesson);
// and only where the paint has courses: a textured tile, 16 px and up (Sketchbook's: on a small flat tile they were
// courses that do not exist)
float lwIndicate(Surface s, vec4 tn) {
  float spacing = 0.3;
  float vis = smoothstep(3.5, 6.0, spacing / max(tn.w, 1e-5)) * (1.0 - lwToneFlat) * step(15.5, min(s.tile.z * uAtlasSize.x, s.tile.w * uAtlasSize.y));
  if (vis <= 0.0) return 0.0;
  float body = 1.0 - smoothstep(0.12, 0.22, length(s.texel.rgb - atlasMean(s.uv, s.tile)));
  float v = tn.y / spacing, k = floor(v + 0.5);
  float d = abs(v - k) * spacing / max(tn.w, 1e-5);   // px from the course's line
  float line = 1.0 - smoothstep(0.3, 0.85, d);
  float u = tn.x / 1.25 + lwHash(vec2(k, 3.0)) * 7.0, cell = floor(u), f = u - cell;
  float h = lwHash(vec2(cell, k)), a = 0.05 + 0.3 * lwHash(vec2(cell, k + 9.0)), b = a + 0.25 + 0.45 * h;
  float seg = step(0.3, h) * smoothstep(a, a + 0.03, f) * (1.0 - smoothstep(b - 0.03, b, f));
  float cl = lwNoise(tn.xy / vec2(3.2, 2.0) + 11.0) * 0.75 + lwNoise(tn.xy / 1.1 + 3.0) * 0.25;
  float where = smoothstep(0.56, 0.6, cl + 0.16 * (1.0 - gT) + 0.25 * (1.0 - smoothstep(0.4, 1.4, s.above)));
  return line * seg * where * vis * body;
}
// A crown drawn by hand (Sketchbook's, carried to the world's leaf cards): its wash varied in soft blooms a metre or
// two across, and its shade hatched one way, in patches. A crown is hundreds of cards, each its own plane: strokes laid
// on a card's plane turn with every card (a woven grain, Gouache's lesson on light: light a crown as a mass, not per
// card). So each patch's strokes are laid on the paper, pinned to a point of the crown (the patch's anchor, fixed in
// the world): they travel with the crown as the eye moves and hold still with it. X: the pixel's projective
// coordinate (view x, y over depth), fpx: pixels per unit of it (both from styleSurface, outside any branch)
vec3 lwCrown(Surface s, vec3 c, vec2 X, float fpx) {
  // (its lamps are laid on after, with every surface's: styleSurface)
  // The shade a wash a sketcher can draw into: Gouache's deep green, darkened by the crown's baked occlusion to near
  // black, held no lower than a step toward the middle green (Sketchbook's body), the occlusion kept as a softer step
  // (the lower and inner cards a little darker); the leaf's own value a hint
  float tv = lwLum(s.tint);
  vec3 body = mix(uGLeafDeep, uGLeafMid, 0.42) * mix(0.74, 1.04, smoothstep(0.45, 1.0, tv)) * (0.92 + 0.16 * smoothstep(0.15, 0.55, s.texel.g));
  c = mix(c, max(c, body), (1.0 - gT) * (1.0 - uGShape.z));
  c *= 1.0 + 0.09 * (vnoise(s.pos.xz * 0.9 + s.pos.y * 0.7 + 4.1) - 0.5) + 0.05 * (vnoise(s.pos.xz * 3.1 - s.pos.y * 2.3) - 0.5);
  float shadeK = (1.0 - gT) * (1.0 - uGShape.z) * (1.0 - 0.6 * smoothstep(20.0, 80.0, s.dist)) * (1.0 - 0.7 * smoothstep(0.3, 0.9, uNightGlow)) * LW_INK;
  if (shadeK <= 0.0) return c;
  // the patch: a blob round a point jittered in a 1.6 m cell of the world, seven cells in ten
  const float CELL = 1.6;
  vec3 ci = floor(s.pos / CELL);
  float h1 = lwHash(ci.xz + ci.y * 7.13), h2 = lwHash(ci.zx * 1.7 + ci.y * 3.9 + 3.1), h3 = lwHash(ci.xy * 2.3 + ci.z * 1.3 + 5.7);
  vec3 A = (ci + 0.3 + 0.4 * vec3(h1, h2, h3)) * CELL;
  float blob = (1.0 - smoothstep(0.28, 0.5, length(s.pos - A) / CELL + 0.12 * (vnoise(s.pos.xz * 2.7 + s.pos.y * 1.9) - 0.5))) * step(0.3, h1);
  if (blob <= 0.0) return c;
  vec4 Av = viewMatrix * vec4(A, 1.0);
  vec2 d = (X - Av.xy / max(-Av.z, 1e-3)) * fpx;   // pixels from the anchor, on the paper
  vec3 inkC = mix(c * 0.45, lwInk(), 0.35);
#if LW_DOTS
  float k = lwDots(d, 0.22, 4.0, 0.4363);
  return mix(c, mix(c * 0.62, lwInk(), 0.15), k * blob * shadeK);
#else
  // strokes 5.5 px apart, one way (a hand's few degrees between patches), each five to seven periods long with gaps,
  // some dropped, as a pen hatches
  float ang = 0.7854 + (h2 - 0.5) * 0.3;
  float t = dot(d, vec2(cos(ang), sin(ang))) / 5.5, u = dot(d, vec2(-sin(ang), cos(ang))) / 5.5;
  float i = floor(t + 0.5), aa = 0.55 / 5.5;
  float sg = u / 6.0 + lwHash(vec2(i, h3 * 53.0)) * 7.0, fs = fract(sg), sh = lwHash(vec2(i, floor(sg)) + h1 * 17.0);
  float line = (1.0 - smoothstep(0.12 - aa, 0.12 + aa, abs(t - i))) * step(0.2, sh) * smoothstep(0.0, 0.05, fs) * (1.0 - smoothstep(0.72 + 0.22 * sh, 0.78 + 0.22 * sh, fs));
  return mix(c, inkC, line * blob * shadeK * 0.9);
#endif
}
vec3 lwInnerSurface(vec3 col, Surface s) {
  vec4 tn = lwToneAt(s.pos);   // (derivatives: outside any branch)
  vec4 vp = viewMatrix * vec4(s.pos, 1.0);
  vec2 X = vp.xy / max(-vp.z, 1e-4);
  float fpx = 1.0 / max(abs(dFdy(X.y)), 1e-7);
  vec3 c = gStyleSurface(col, s);
  if (s.cutout > 0.5 && s.foliage > 0.0) {
    vec3 tx = s.texel.rgb;
    // (a leaf: grey in the atlas, as Gouache finds it; blossom and fruit keep their paint)
    if (LW_TONE == 1 && max(tx.r, max(tx.g, tx.b)) - min(tx.r, min(tx.g, tx.b)) < 0.08) c = lwCrown(s, c, X, fpx);
    return c;
  }
  if (s.cutout > 0.5 || s.foliage > 0.0 || LW_TONE == 0) return c;
  // (not in a room: its walls are plaster, paper, paint and sheets, and strokes 0.3 m apart drew courses that don't exist)
  float wallI = (1.0 - smoothstep(0.3, 0.5, abs(s.normal.y))) * step(0.9, s.texel.a) * (1.0 - step(0.05, s.gloss)) * (1.0 - smoothstep(0.3, 0.6, uGShape.z)) * (1.0 - uLwIndoor);
  if (wallI > 0.0) c = mix(c, mix(c * 0.5, lwInk(), 0.3), lwIndicate(s, tn) * wallI * 0.75 * LW_INK * smoothstep(1.8, 4.5, s.dist));
  float day = 1.0 - smoothstep(0.2, 0.5, uNightGlow);
  float wall = 1.0 - smoothstep(0.5, 0.8, abs(s.normal.y));
  float halfT = gT * (1.0 - smoothstep(0.64, 0.72, s.ndl)) * wall * (1.0 - uGShape.z) * day * (1.0 - smoothstep(0.9, 1.0, gLum(c)))
    * step(0.9, s.texel.a);   // (not on glass)
  vec3 shc = c * mix(vec3(1.0), lwShadeHue(), 0.6) * 0.78;
#if LW_DOTS
  c = mix(c, shc, lwHalftoneS(tn, 0.3 * halfT, 4.0));
#else
  c = mix(c, mix(shc, lwInk(), 0.25), lwHatchS(tn, 0.16 * halfT, 3.6, 0.7854) * 0.7 * (1.0 - 0.7 * smoothstep(15.0, 70.0, s.dist)) * smoothstep(1.8, 4.5, s.dist));
#endif
  return c;
}
${N}
${R}
// the surface drawn without its lamps (lwInnerSurface: Gouache's paint and Line & wash's tone), then the lamps' light
// laid on in steps, and by night the moonlit paint and the street's light up the fronts (night.ts); in a room its own
// lamps' light (in its vertex colours) laid in steps first, and its darks lifted last (room.ts)
vec3 styleSurface(vec3 col, Surface s) {
  float nk = lwNightK();
  float k = lwLampSteps(s, gLum(max(s.lamps, 0.0)), nk);
  float fk = fwidth(k), w = clamp(fk * 0.75, 0.02, 0.5);   // (derivatives outside any branch)
  if (uLwIndoor > 0.5) {
    // (a branch on a uniform: every pixel takes it, so its derivatives hold)
    float l0 = lwRoomLevel(s);
    s.albedo *= lwRoomSteps(s, l0, fwidth(l0), length(fwidth(s.pos)));
  }
  Surface s0 = s;
  s0.lamps = vec3(0.0);
  vec3 c = lwLamps(lwInnerSurface(col, s0), s, k, w, fk, nk);
  return uLwIndoor > 0.5 ? lwRoomDark(c) : c;
}`,fog:`
vec3 styleFog(vec3 col, vec3 haze, float amount, Surface s) {
  col = lwKeepWarmGlow(col, s);   // (night.ts: the lamp's kind of glow but the street lamps' keeps the default's amber)
  float w = clamp(fwidth(amount * mix(4.0, 5.0, uGShape.z)), 1e-4, 0.5);
  float F = lwFogShape(amount, s.pos, cameraPosition, w);
  float L = lwLum(col), u = F * 1.08;
  vec3 pc = haze * 0.92 * mix(vec3(1.0), clamp(col / max(L, 1e-3), 0.0, 3.0), 0.4);
  vec3 pl = mix(col, pc, min(1.1 * u, 0.88));
  return mix(pl, haze, u * u * u * u);
}`},J=l.cloud.replace(`vec4 styleCloud(`,`vec4 gStyleCloud(`),Y=F.replace(`vec3 styleSky(vec3 col, vec3 d)`,`vec3 gStyleSky(vec3 col, vec3 d)`),X={cloudField:l.cloudField,cloud:`
${J}
${L}
float lwCloudLine = 0.0; // the cloud's drawn outline at this pixel, for styleSky
vec4 styleCloud(vec4 cloud, float field, float threshold, float core, float lit, vec3 dir) {
  vec4 c = lwNightCloud(gStyleCloud(cloud, field, threshold, core, lit, dir), field, threshold, dir);
  gCloud = c;
  threshold += LW_CLOUD_THIN * lwNightK();   // (the night's cover is a little thinner: its outline follows it)
  // (COO skyCloudLight) the cut paper drawn round in ink, thinning toward the horizon and with the light;
  // a fainter second line inside it where the thick heart begins (the belly)
  float fw = max(fwidth(field), 1e-5);
  float edge = 1.0 - smoothstep(fw * 0.45, fw * 1.45, abs(field - threshold));
  float heart = 1.0 - smoothstep(fw * 0.3, fw * 1.1, abs(field - threshold - 0.16));
  float fade = smoothstep(0.04, 0.2, dir.y) * (1.0 - uGShape.z) * (1.0 - 0.6 * uGShape.w);
  lwCloudLine = max(edge * 0.75, heart * 0.22 * (1.0 - smoothstep(0.52, 0.58, lit))) * fade;
  return c;
}`,sky:`
${I}
${Y}
// Gouache's four stops and the low sky's warmth toward the sun (the first lines of its styleSky)
vec3 lwGrad(vec3 d) {
  float h = clamp(d.y, 0.0, 1.0), t = sqrt(h);
  vec3 c = mix(uGSkyLow, uGSkyBand, smoothstep(0.0, 0.04, h));
  c = mix(c, uGSkyMid, smoothstep(0.035, 0.13, h));
  c = mix(c, uGSkyHigh, smoothstep(0.12, 0.45, h));
  vec3 sd = normalize(vec3(uTrueSunDir.x, max(uTrueSunDir.y, 0.02), uTrueSunDir.z));
  float warm = pow(max(dot(d, sd), 0.0), 5.0) * uAfterglow * (1.0 - smoothstep(0.2, 0.7, uTrueSunDir.y)) * (1.0 - uGShape.z);
  vec3 sunHue = uSkySunColor / max(max(uSkySunColor.r, max(uSkySunColor.g, uSkySunColor.b)), 1e-3);
  return mix(c, mix(uGSkyLow, sunHue, 0.45), warm * (1.0 - t * 0.7));
}
vec3 styleSky(vec3 col, vec3 d) {
  float y = d.y;
  vec2 saz = vec2(atan(d.x, d.z), 0.5 * log((1.0 + y) / max(1.0 - y, 1e-3)));
  float pw = max(length(fwidth(d)), 2e-4);
  // (COO skyBands) at golden hour and dusk the low sky in flat bands. Gouache's four stops are read at an
  // elevation stepped into six; the steps meet along a ragged brushed edge (line-wash) or a dot screen
  // (comic-wash). By day and night the gradient stays as Gouache paints it.
  float lowSun = uAfterglow * (1.0 - smoothstep(0.18, 0.5, uTrueSunDir.y)) * (1.0 - uGShape.z) * (1.0 - smoothstep(0.5, 0.9, uGShape.w));
  vec3 dq = d;
  if (lowSun > 0.0 && y > 0.0 && y < 0.62) {
    float g = pow(clamp(y / 0.55, 0.0, 1.0), 0.6) * 6.0, gi = floor(g), gf = g - gi;
#if LW_DOTS
    // (the screen's cell held near 7 px whatever the lens: cells per radian snapped to a power of two)
    float cells = exp2(floor(log2(1.0 / (pw * 7.0)) + 0.5));
    vec2 sc = saz * cells;
    vec2 cf = fract(vec2(0.8 * sc.x + 0.6 * sc.y, 0.8 * sc.y - 0.6 * sc.x)) - 0.5;
    float cw = pw * cells * inversesqrt(max(1.0 - y * y, 1e-3)), rad = mix(-cw, 0.5, smoothstep(0.45, 1.0, gf));
    float up = max(1.0 - smoothstep(rad - cw, rad + cw, length(cf)), smoothstep(0.97, 1.0, gf));
#else
    // a brush's ragged edge along the band: the stroke wanders and breaks along the azimuth
    float rag = lwNoise(vec2(saz.x * 30.0, gi * 7.3)) * 0.6 + lwNoise(vec2(saz.x * 130.0, gi * 3.1 + 5.0)) * 0.4;
    float bw = clamp(fwidth(g) * 0.8, 1e-4, 0.3);
    float up = smoothstep(0.55 + 0.4 * rag - bw, 0.55 + 0.4 * rag + bw, gf + 0.08 * (lwNoise(vec2(saz.x * 400.0, y * 300.0)) - 0.5));
#endif
    float gq = (gi + up) / 6.0;
    float yq = 0.55 * pow(gq, 1.0 / 0.6);
    dq = vec3(d.x, mix(y, max(yq, 0.002), lowSun), d.z);
  }
  vec3 c = gStyleSky(col, d);
  c += (lwGrad(normalize(dq)) - lwGrad(d)) * (1.0 - gCloud.a) * step(0.0, y);
  // the clouds' outline, over their paint
  vec3 ink = lwInk();
  c = mix(c, mix(ink, gCloud.rgb, 0.45), lwCloudLine * LW_INK);
  // (COO skyHigh) a high layer of thin streaks lying along the horizon, one flat tone, behind the clouds
  if (y > 0.04 && y < 0.7 && uGShape.z < 0.5) {
    vec4 hs = textureLod(uCloudTex, vec2(saz.x * 0.3183 + uTime * 2.0e-5, saz.y / 0.32) * vec2(1.0, 9.0) * 0.5, log2(max(pw * 900.0, 1.0)));
    float n2 = hs.r * 0.55 + hs.g * 0.45;
    float aw = clamp(fwidth(n2), 1e-4, 0.2);
    float in2 = smoothstep(0.71 - aw, 0.71 + aw, n2) * smoothstep(0.06, 0.16, y) * (1.0 - smoothstep(0.32, 0.5, y)) * (1.0 - gCloud.a);
    vec3 streak = mix(c, mix(uGSkyBand, vec3(1.0), 0.35 * (1.0 - uGShape.w)), 0.5 - 0.25 * uGShape.w);
    c = mix(c, streak, in2 * mix(0.8, 0.35, uGShape.w));
  }
  // (COO skySun) a low sun larger, in two flat rings of its own light
  float sv = dot(d, uSunDir), R = acos(clamp(uDiscCos, -1.0, 1.0)) * 1.25, r = acos(clamp(sv, -1.0, 1.0)), fw = max(fwidth(r), 1e-5);
  vec3 sunHue = uSkySunColor / max(max(uSkySunColor.r, max(uSkySunColor.g, uSkySunColor.b)), 1e-3);
  if (uSunUp > 0.5) {
    float lowK = 1.0 - smoothstep(0.15, 0.45, uSunDir.y);
    float a1 = 1.0 - smoothstep(R * 1.9 - fw, R * 1.9 + fw, r), a2 = 1.0 - smoothstep(R * 3.1 - fw, R * 3.1 + fw, r);
    c = mix(c, mix(c, sunHue, 0.8), (0.3 * a1 + 0.2 * a2) * lowK * smoothstep(-0.01, 0.02, y) * (1.0 - uGShape.z));
    // the disc itself flat, a size up, with an ink ring
    float disc = 1.0 - smoothstep(R - fw, R + fw, r);
    c = mix(c, mix(sunHue, vec3(1.0), 0.8), disc * smoothstep(-0.01, 0.012, y) * (1.0 - uGShape.z * 0.8));
  } else {
    // (COO skyStars) stars as marks: dots, the brightest a four-point sparkle, twinkling in steps
    float night = smoothstep(0.5, 0.9, uGShape.w) * smoothstep(0.06, 0.2, y) * (1.0 - uGShape.z);
    night *= mix(1.0, smoothstep(4.3, 5.0, lwMoonAng(d)), lwNightK());   // (none on the moon's light)
    if (night > 0.0) {
      vec2 gp = vec2(saz.x * 60.0, saz.y * 60.0);
      vec2 cell = floor(gp), f = gp - cell;
      float h = lwHash(cell + 3.1), h2 = lwHash(cell * 1.7 + 9.2);
      vec2 at = 0.2 + 0.6 * vec2(h2, lwHash(cell * 2.3 + 1.7));
      vec2 dd = (f - at) / max(pw * 60.0, 1e-4);   // in pixels
      float tw = step(0.25, lwHash(cell + floor(uTime * 3.0)));
      float star = (1.0 - smoothstep(0.5, 1.2, length(dd))) * step(0.94, h) * mix(0.5, 1.0, h2);
      float big = step(0.992, h);
      float spark = big * max(1.0 - smoothstep(0.3, 1.0, abs(dd.x)) * 1.0, 0.0) * (1.0 - smoothstep(1.0, 4.5, abs(dd.y)))
                  + big * (1.0 - smoothstep(0.3, 1.0, abs(dd.y))) * (1.0 - smoothstep(1.0, 4.5, abs(dd.x)));
      c = mix(c, mix(LW_PAPER, vec3(1.0, 0.95, 0.8), h2), clamp(max(star * mix(0.55, 1.0, tw), spark), 0.0, 1.0) * night);
    }
    // the moon drawn round in ink (night.ts lwMoon paints it), behind the clouds
    float ma = lwMoonAng(d), mw = max(fwidth(ma), 1e-4);
    float ring = 1.0 - smoothstep(0.4 * mw, 1.2 * mw, abs(ma - 1.06));
    c = mix(c, mix(ink, c, 0.45), ring * lwNightK() * (1.0 - gCloud.a) * LW_INK);
  }
  return c;
}`},Z=`
vec3 lwGraded(vec2 uv) {
  vec3 c = sceneAt(uv) + texture(tBloom, uv).rgb * uBloom;
  c *= uExposure;
  c = 1.0 - (1.0 - c) * (1.0 - uWash * uWashAmount);
  c = (c - 0.5) * uContrast + 0.5;
  return mix(vec3(dot(c, vec3(0.299, 0.587, 0.114))), c, uSaturation) * uTint;
}
vec3 stylePost(vec3 c, vec2 uv) {
  vec2 frag = gl_FragCoord.xy;
  vec2 outPx = vec2(dFdx(uv.x), dFdy(uv.y));
  float res = 1.0 / max(abs(outPx.y), 1e-6);     // output height in px
  float k1080 = res / 1080.0;
  vec2 q = uv - 0.5;
  float aspect = abs(outPx.y / max(abs(outPx.x), 1e-9));
  float rr = length(q * vec2(aspect, 1.0));
  // the plates off register: red one way, blue the other, along the radius, in whole pixels; none at the centre
#if LW_PLATES_ON
  vec2 mo = floor(normalize(q + vec2(1e-4, 0.0)) * LW_PLATES * k1080 * (0.15 + smoothstep(0.4, 0.95, rr)) + 0.5) * abs(outPx);
  if (dot(mo, mo) > 0.0) { c.r = lwGraded(uv + mo).r; c.b = lwGraded(uv - mo).b; }
#endif
  // what glows (the bloom field: lamps, lit windows, headlights) ringed in its own colour
  vec3 B = texture(tBloom, uv).rgb * uBloom;
  float hm = max(max(B.r, B.g), B.b);
  if (hm > 1e-4) {
    vec3 hue = B / hm;
    float cover = clamp((log2(max(hm, 1e-9)) + 4.2) / 3.6, 0.0, 1.0);
#if LW_DOTS
    float cell = 5.5 * k1080;
    vec2 f = fract(mat2(0.9659, 0.2588, -0.2588, 0.9659) * frag / cell) - 0.5;
    float r = 0.73 * sqrt(cover), aa = 0.7 / cell;
    float dots = (1.0 - smoothstep(r - aa, r + aa, length(f))) * step(0.02, cover);
    c = mix(c, max(c, hue * 0.96), dots * 0.9 * uNightGlow);
#else
    // flat painted rings: the glow laid in three decided steps of its own colour, lightening only
    float st = floor(cover * 3.0 + 0.35) / 3.0;
    c = mix(c, max(c, mix(c, hue * 0.98, 0.35 + 0.5 * st)), step(0.3, st) * 0.5 * uNightGlow);
#endif
  }
  // the paper: its cream in the whites (the paint is laid on it), its fibre fixed to the page
  vec2 pq = frag / max(k1080, 1e-3);
  float fib = lwNoise(pq * 0.45) * 0.45 + lwNoise(pq * 1.6 + 7.0) * 0.35 + lwNoise(vec2(pq.x * 0.25, pq.y * 2.2) + 3.0) * 0.2;
  c *= mix(vec3(1.0), LW_PAPER, 0.3);
  c *= 1.0 + (fib - 0.5) * 0.05;
  return c;
}
`,Q=/^(madrone|nopa|independent|beretta)\//,te=/^(alarm|board-|drinks|flag|flyers|greens|pawl|plaque-|plate|poster-|show-poster|stencil-|stop|tv-game|zebra|indy-|nopa-|mural-|show\.art-|beretta\.art-|ik-(digits|exit|photos|wc|strips|bottles|bottles-cut|glasses|sticker-wood|stickers|fire|glass-event|glass-main|deck|octave)$)/,ne=/^ik-(plaster|velvet|leather|brushed|concrete-floor)$/,re=/^ik-(floor-|boards$|quarry$|reclaimed$|stone$|concrete-floor$|slate-floor$)/;function ie(e,t){let n=Q.exec(t.name);if(!n)return!1;let r=t.name.slice(n[0].length);if(te.test(r)){let n=e.getImageData(0,0,t.w,t.h);return ae(n.data,t.w,t.h,t.cutout),e.putImageData(n,0,0),!0}if(ne.test(r)&&!t.cutout){let n=e.getImageData(0,0,t.w,t.h),r=t.w*t.h,i=[0,0,0];for(let e=0;e<r;e++)for(let t=0;t<3;t++)i[t]+=n.data[e*4+t]/r;for(let e=0;e<r;e++)for(let t=0;t<3;t++)n.data[e*4+t]=i[t];return e.putImageData(n,0,0),!0}if(a(e,{...t,name:`room/${r}`}),!t.cutout){let n=e.getImageData(0,0,t.w,t.h),i=re.test(r);oe(n.data,t.w,t.h,i?10:4),i&&$(n.data,t.w*t.h,.45),e.putImageData(n,0,0)}return!0}function ae(e,t,n,r){let i=Uint8ClampedArray.from(e),a=e=>!r||i[e*4+3]>=128;for(let r=0;r<n;r++)for(let o=0;o<t;o++){let s=r*t+o;if(!a(s))continue;let c=i[s*4],l=i[s*4+1],u=i[s*4+2],d=0,f=0,p=0,m=0;for(let e=-2;e<=2;e++)for(let s=-2;s<=2;s++){let h=(r+e+n)%n*t+(o+s+t)%t;if(!a(h))continue;let g=i[h*4],_=i[h*4+1],v=i[h*4+2];(g-c)**2+(_-l)**2+(v-u)**2>676||(d+=g,f+=_,p+=v,m++)}e[s*4]=d/m,e[s*4+1]=f/m,e[s*4+2]=p/m}}function oe(e,t,n,r){let i=t*n,a=t=>e[t*4]<<16|e[t*4+1]<<8|e[t*4+2],o=new Set;for(let e=0;e<i&&o.size<=12;e++)o.add(a(e));if(o.size>12)return;let s=new Int32Array(i).fill(-1),c=(e,r)=>(r+n)%n*t+(e+t)%t,l=[];for(let e=0;e<i;e++){if(s[e]>=0)continue;let n=a(e),r=l.length,i=[e];s[e]=r;for(let e=0;e<i.length;e++){let o=i[e],l=o%t,u=(o-l)/t;for(let e of[c(l+1,u),c(l-1,u),c(l,u+1),c(l,u-1)])s[e]<0&&a(e)===n&&(s[e]=r,i.push(e))}l.push(i)}for(let n of l){if(n.length>=r||n.length===i)continue;let o=new Map,l=s[n[0]];for(let e of n){let n=e%t,r=(e-n)/t;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let i=c(n+t,r+e);if(s[i]===l)continue;let u=a(i);o.set(u,(o.get(u)??0)+1)}}if(!o.size)continue;let u=[...o.entries()].sort((e,t)=>t[1]-e[1]||e[0]-t[0])[0][0];for(let t of n)e[t*4]=u>>16&255,e[t*4+1]=u>>8&255,e[t*4+2]=u&255}}function $(e,t,n){let r=new Map;for(let n=0;n<t;n++){let t=e[n*4]<<16|e[n*4+1]<<8|e[n*4+2];r.set(t,(r.get(t)??0)+1)}if(r.size>12)return;let i=[...r.entries()].sort((e,t)=>t[1]-e[1]||e[0]-t[0])[0][0],a=[i>>16&255,i>>8&255,i&255];for(let r=0;r<t;r++)for(let t=0;t<3;t++)e[r*4+t]=a[t]+(e[r*4+t]-a[t])*n}var se=129,ce=e=>/\/lens$/.test(e)||e===`park-lamp/glass`;function le(e,t){if(ie(e,t)||(u.tiles?.(e,t),t.cutout||!ce(t.name)))return;let n=e.getImageData(0,0,t.w,t.h);for(let e=3;e<n.data.length;e+=4)n.data[e]===128&&(n.data[e]=se);e.putImageData(n,0,0)}function ue(e,t,n,a={}){let s=u,c=B(n);return i({name:e,description:t,look:{...s.look,windowColors:[`#ffa848`,`#ffdb8e`,`#ffb860`,`#bfeae0`],moon:{azimuthDeg:210,elevationDeg:46},lights:{...s.look?.lights,lampColor:`#fff0de`,streetGlow:{base:.04},shopPool:{color:`#ffc47a`,reach:4.5}},...a},time:_,tiles:le,clouds:s.clouds,uniforms:{...D,uHazeStart:r.uHazeStart,uHazeDensity:r.uHazeDensity,uHazeMax:r.uHazeMax,uFogNear:r.uFogNear,uFogFar:r.uFogFar,uGroundFog:r.uGroundFog,uLwIndoor:{get value(){return+(r.uFogNear.value>1e5)}}},sceneSize:`internal`,glsl:{common:U(n),...q,...c.finish?{}:{albedo:o.albedo,fog:void 0},...c.sky?X:l,scene:z,...c.finish?{post:Z}:{}}})}export{ue as t};