import{A as e,tn as t}from"./three.core-CMmUIUzP.js";import{c as n,d as r,l as i,s as a,u as o}from"./builder-DA6owUhM.js";import{t as s}from"./uniforms-Bhz7fZ2N.js";var c=[`albedo`,`light`,`surface`,`fog`,`alpha`],l=[`cloudField`,`cloud`,`sky`],u=[`scene`,`post`],d=e=>`#define STYLE_${e.replace(/[A-Z]/g,e=>`_`+e).toUpperCase()}\n`,f=`
struct Surface {
  vec4 texel;     // the atlas sample: rgb, and a = cutout alpha (cutouts) or glow mask (opaque: 1 never glows)
  vec3 tint;      // vertex colour the texel is multiplied by
  vec3 albedo;    // texel x tint (+ macro variation on the ground): the colour before light
  vec2 uv;        // tile-repeat uv: sampleAtlas(s.uv, s.tile) samples the texture again
  vec4 tile;      // the tile's atlas rect
  vec3 pos;       // world position, m (Y up)
  vec3 normal;    // unit world normal
  vec3 toEye;     // unit vector toward the camera
  float dist;     // distance to the camera, m
  vec3 amb;       // hemisphere ambient at this normal (foliage: from all round)
  vec3 sun;       // the sun's (moon's) light on it: colour x wrapped Lambert, per vertex, before shadow
  float ndl;      // dot(normal, uSunDir), per pixel
  float shadow;   // baked sun shadow 0..1 (the ground shade; sun-side ground and low things only)
  float ao;       // baked contact darkening 0..1
  float gloss;    // 0 matte .. 1 water
  float cutout;   // 1 on the cutout material (leaves, railings, fences)
  float foliage;  // wind-sway weight 0..1, interpolated across the surface: > 0 is a leaf card or crown
  int kind;       // Surface kind bits: & 8 road, & 16 sidewalk; & 7 light kind (0 none, 3 window); exact on every surface (flat), swaying cards too
  float above;    // height above the ground beneath it, m (1000 beyond the ground shade's reach, ~160 m round the camera)
  float sunShadow; // cast sun shadow 0..1 on any surface (look.sunShadow.enabled; 0 when off or outside its region)
  // styleSurface only (set after styleLight): col = albedo * (light + lamps) + sheen
  vec3 light;     // the sun and sky light (styleLight's result, or the default's)
  vec3 lamps;     // light the engine adds after it: lamp pools, headlight cones, the night street glow
  vec3 sheen;     // what gloss added (sky reflection, sun glint; may be negative: a reflection can darken)
};
// the tile's mean colour (4 taps at a coarse mip, inside the tile): a flat-colour version of any texture
vec3 atlasMean(vec2 uv, vec4 tile) {
  vec2 px = tile.zw * uAtlasSize;
  float lod = max(0.0, log2(max(px.x, px.y)) - 2.0);
  vec3 m = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    vec2 f = vec2(i & 1, i >> 1) * 0.5 + 0.25;
    m += textureLod(uAtlas, tile.xy + f * tile.zw, lod).rgb;
  }
  return m * 0.25;
}
`,p=`
uniform sampler2D uSunShadowMap;
uniform mat4 uSunShadowMatrix;
uniform vec4 uSunShadowParams;
uniform vec2 uSunShadowSoft;
const vec2 SUN_SPIRAL[8] = vec2[8](${Array.from({length:8},(e,t)=>{let n=Math.sqrt((t+.5)/8),r=t*2.399963;return`vec2(${(n*Math.cos(r)).toFixed(4)}, ${(n*Math.sin(r)).toFixed(4)})`}).join(`, `)});
// 0 lit .. 1 shaded at a map uv, bilinear between the four texels round it
float sunShadowTap(vec2 uv, float d, bool rev, float bias, vec2 res) {
  vec2 t = uv * res - 0.5;
  vec2 f = fract(t);
  ivec2 b = ivec2(floor(t)), hi = ivec2(res) - 1;
  vec4 z = vec4(texelFetch(uSunShadowMap, clamp(b, ivec2(0), hi), 0).r, texelFetch(uSunShadowMap, clamp(b + ivec2(1, 0), ivec2(0), hi), 0).r,
                texelFetch(uSunShadowMap, clamp(b + ivec2(0, 1), ivec2(0), hi), 0).r, texelFetch(uSunShadowMap, clamp(b + ivec2(1, 1), ivec2(0), hi), 0).r);
  vec4 k = rev ? step(vec4(d + bias), z) : step(z, vec4(d - bias));
  return mix(mix(k.x, k.y, f.x), mix(k.z, k.w, f.x), f.y);
}
float sunShadowAt(vec3 p, vec3 n) {
  if (uSunShadowParams.w < 0.5) return 0.0;
  vec4 c = uSunShadowMatrix * vec4(p + n * uSunShadowParams.z, 1.0);
  vec3 q = c.xyz / c.w;
  vec2 uv = q.xy * 0.5 + 0.5;
  bool rev = uSunShadowParams.x > 0.5;
  float d = rev ? q.z : q.z * 0.5 + 0.5;
  vec2 e = min(uv, 1.0 - uv);
  float edge = smoothstep(0.0, 0.06, min(e.x, e.y));
  if (edge <= 0.0 || d < 0.0 || d > 1.0) return 0.0;
  vec2 res = vec2(textureSize(uSunShadowMap, 0));
  float bias = uSunShadowParams.y;
  // (the radius in texels comes from uniforms alone: every pixel takes the same branch)
  float sh = 0.0;
  if (max(uSunShadowSoft.x * res.x, uSunShadowSoft.y * res.y) < 1.0) {
    // crisp: four bilinear taps on a square half a texel across, turned off the map's grid
    for (int i = 0; i < 4; i++) sh += sunShadowTap(uv + vec2(i == 0 ? 0.5 : i == 1 ? -0.5 : i == 2 ? 0.15 : -0.15, i == 2 ? 0.5 : i == 3 ? -0.5 : i == 0 ? -0.15 : 0.15) * 0.6 / res, d, rev, bias, res);
    return sh * 0.25 * edge;
  }
  for (int i = 0; i < 8; i++) sh += sunShadowTap(uv + SUN_SPIRAL[i] * uSunShadowSoft, d, rev, bias, res);
  return sh / 8.0 * edge;
}
`,m=`
uniform sampler2D tDepth;
uniform vec2 uStyleNearFar;   // camera near, far (m)
uniform float uStyleReversed; // 1: reversed float depth (1 near, 0 far)
uniform vec2 uStyleHalf;      // tan(fov / 2) x aspect, tan(fov / 2)
uniform float uStyleHasDepth;
uniform vec3 uStyleCamPos;    // the camera that drew the scene: its world position (m)
uniform mat3 uStyleCamRot;    // and its rotation, view space to world space
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbSky;
uniform vec3 uAmbGround;
uniform vec3 uFogColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uNightGlow;
uniform float uTime;
uniform float uHour;
// internal (scene) texel of an output uv
ivec2 sceneTexel(vec2 uv) { return clamp(ivec2(uv * uSrcSize), ivec2(0), ivec2(uSrcSize) - 1); }
// the scene's colour at an internal texel / at uv (bilinear), before bloom and the grade
vec3 sceneTexelColor(ivec2 p) { return texelFetch(tScene, clamp(p, ivec2(0), ivec2(uSrcSize) - 1), 0).rgb; }
vec3 sceneAt(vec2 uv) { return texture(tScene, uv).rgb; }
// distance along the view axis at an internal texel, m (the sky: the far plane)
float depthTexel(ivec2 p) {
  if (uStyleHasDepth < 0.5) return uStyleNearFar.y;
  float d = texelFetch(tDepth, clamp(p, ivec2(0), ivec2(uSrcSize) - 1), 0).r;
  float n = uStyleNearFar.x, f = uStyleNearFar.y;
  return uStyleReversed > 0.5 ? -(n * f) / ((n - f) * d - n) : -(n * f) / ((f - n) * d - f);
}
float styleDepth(vec2 uv) { return depthTexel(sceneTexel(uv)); }
// view-space position at an internal texel (camera at 0, looking down -Z)
vec3 viewPosTexel(ivec2 p) {
  float z = depthTexel(p);
  vec2 uv = (vec2(p) + 0.5) / uSrcSize;
  return vec3((uv * 2.0 - 1.0) * uStyleHalf * z, -z);
}
// world-space position at an internal texel (m; the sky: 70 km out along the view ray)
vec3 worldPosTexel(ivec2 p) { return uStyleCamPos + uStyleCamRot * viewPosTexel(p); }
// view-space normal from depth (the flatter side of each neighbour pair, so edges don't smear)
vec3 styleNormal(vec2 uv) {
  ivec2 p = sceneTexel(uv);
  vec3 c = viewPosTexel(p);
  vec3 l = viewPosTexel(p - ivec2(1, 0)), r = viewPosTexel(p + ivec2(1, 0));
  vec3 b = viewPosTexel(p - ivec2(0, 1)), t = viewPosTexel(p + ivec2(0, 1));
  vec3 dx = abs(r.z - c.z) < abs(c.z - l.z) ? r - c : c - l;
  vec3 dy = abs(t.z - c.z) < abs(c.z - b.z) ? t - c : c - b;
  return normalize(cross(dx, dy));
}
`;function h(e,t,n){let r=e?.glsl;if(!r)return``;let i=t.filter(e=>r[e]?.trim());return i.length?`\n// ---- style "${e.name}"\n${i.map(d).join(``)}${n}\n${r.common??``}\n${i.map(e=>r[e]).join(`
`)}\n// ---- end of style\n`:``}function g(e,t=!1){if(!e)return``;let n=e.glsl??{},r=c.filter(e=>n[e]?.trim());if(!r.length&&!t)return``;let i=t||r.some(e=>e!==`alpha`);return`\n// ---- style "${e.name}"\n${i?`#define STYLE_SURFACES
`:``}${t?`#define STYLE_SUN_SHADOW
`:``}${r.map(d).join(``)}${f}${t?p:``}\n${n.common??``}\n${r.map(e=>n[e]).join(`
`)}\n// ---- end of style\n`}function _(e){return h(e,l,``)}function v(e){return h(e,y(e)?[`post`]:u,m)}function y(e){return e?.sceneSize===`internal`&&!!e.glsl?.scene?.trim()}function b(e){return y(e)?h(e,[`scene`],m):``}function x(e){return u.some(t=>e?.glsl?.[t]?.trim())}var S=`
in vec4 aTile;
in vec4 aColor;
in vec2 aMat;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbSky;
uniform vec3 uAmbGround;
uniform float uLightWrap;
uniform vec3 uFoliage;
uniform vec3 uFoliageNight;
uniform float uNightGlow;
out vec2 vUv;
out vec4 vTile;
out vec3 vAmb;
out vec3 vSun;
out vec3 vBase;
out float vGlow;
out vec3 vWorldPos;
// the same position from the camera: interpolated near zero, so its screen derivatives keep their precision
// (the night window hash solves each window's corner from them; see the fragment stage)
out vec3 vRel;
out vec3 vNormal;
// aMat as written (builder.ts emit: x gloss, or a switch / indicator / closing code; y the light kind in bits
// 0-2, road 8, sidewalk 16, sway level x 32, closes 512). Its codes are per surface and must read exactly,
// so they pass flat (interpolated, a shop's lit sign at exactly its closing hour stippled open and shut).
// The sway level is per vertex (a crown's cards sway more toward its rim): interpolated with the codes, y
// swept through the integers between and the low bits read as a switched-off signal lens (dark stripes on
// near crowns, a knit on the cypress) or as road and pavement (the night street glow on leaves). The sway
// goes on its own (vSway), gloss as it always went (vGloss).
flat out vec2 vMat;
out float vGloss;
out float vSway;
// the night window hash's per-surface inputs (aColor.a: glow, aTile.x), flat: interpolated, a lit pane's glow
// of exactly 1 put vGlow * 97 on 97.0, and floor() picked between two windows' lights from pixel to pixel
flat out vec2 vCell;
uniform vec2 uWireTile;
uniform vec2 uWire;
uniform float uWireFade;
uniform vec2 uSway;
uniform float uTime;
uniform float uInternalH;
out float vWire;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normal);
  // wind sway (Surface.sway, packed in aMat.y above bit 5): a slow lean plus a faster flutter, from
  // simulation time, phase varied by world position so a row of trees doesn't move as one
  float swayW = float((int(aMat.y + 0.5) >> 5) & 15) / 15.0;
  if (swayW > 0.0 && uSway.x > 0.0) {
    float ph = dot(wp.xz, vec2(0.071, 0.053)) + sin(wp.x * 0.013) * 3.0;
    float t = uTime;
    vec2 lean = vec2(sin(t * 0.83 + ph), sin(t * 0.61 + ph * 1.37 + 1.3)) * uSway.x;
    vec2 flutter = vec2(sin(t * 3.7 + ph * 5.1 + wp.y * 0.9), sin(t * 4.3 + ph * 4.3 + wp.y * 1.1)) * uSway.y;
    wp.xz += (lean + flutter) * swayW;
    wp.y += sin(t * 3.1 + ph * 3.3) * uSway.y * 0.4 * swayW;
  }
  // wires (common tile "wire", radial normals): inflate across the view so they never get
  // thinner than ~uWire.x internal pixels; continuous lines instead of dashes at a distance
  vWire = step(abs(aTile.x - uWireTile.x) + abs(aTile.y - uWireTile.y), 2e-3); // tolerant of half-float attributes
  if (vWire > 0.5) {
    vec3 toCam = cameraPosition - wp.xyz;
    float dist = length(toCam);
    vec3 v = toCam / max(dist, 1e-4);
    vec3 np = n - dot(n, v) * v;
    // world size of one internal pixel: grows with distance in perspective, constant in an
    // orthographic camera (top-down map captures)
    float ortho = projectionMatrix[3][3];
    float px = 2.0 * mix(dist, 1.0, ortho) / (projectionMatrix[1][1] * max(uInternalH, 1.0));
    // the floor holds near the camera only; far wires thin to their true width (MSAA fades them)
    float hold = ortho > 0.5 ? 1.0 : 1.0 - smoothstep(uWire.y, uWire.y + uWireFade, dist);
    wp.xyz += np / max(length(np), 0.35) * px * 0.5 * uWire.x * hold;
  }
  vAmb = mix(uAmbGround, uAmbSky, n.y * 0.5 + 0.5);
#ifdef CUTOUT
  // foliage takes the sky and the ground's light from all round (a crown is lit through, not by
  // its card normals): undersides are no longer ground-ambient black
  vAmb = mix(uAmbSky, uAmbGround, 0.5);
  // at night the ground's ambient is the city's warm uplight, which lit canopies lime: a crown
  // takes a share of the sky's light instead (none of this at sunset, nightGlow 0.12)
  vAmb = mix(vAmb, uAmbSky * uFoliageNight.y, smoothstep(0.15, 0.85, uNightGlow) * uFoliageNight.x);
#endif
  float d = dot(n, uSunDir);
#ifdef CUTOUT
  // foliage: trust the authored normals (crowns lean up/outward, so the far side of a tree
  // against a low sun reads as a dark mass, like the reel); uFoliage.x = 1 lights cards from
  // both sides instead. y = wrap, z = floor.
  d = mix(d, abs(d), uFoliage.x);
  float sun = max((d + uFoliage.y) / (1.0 + uFoliage.y), uFoliage.z);
#else
  float sun = max((d + uLightWrap) / (1.0 + uLightWrap), 0.0);
#endif
  vSun = uSunColor * sun;
  vBase = aColor.rgb;
  vGlow = aColor.a;
  vMat = aMat;
  vGloss = aMat.x;
  vSway = swayW;
  vCell = vec2(aColor.a, aTile.x);
  vUv = uv;
  vTile = aTile;
  vWorldPos = wp.xyz;
  vRel = wp.xyz - cameraPosition;
  vNormal = n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,C=`
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
  vec4 g = texture(t, uv);
  lamp = texture(tl, uv).rgb;
  g.a += reg.w; // absolute ground height
  return g;
}
// x: contact darkening, y: sun shadow, w: height above the ground; lamp: pool light colour
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
  // contact darkening: ground-like surfaces up to the receive height; walls, car doors and other
  // upright or downward faces only a light band at their very base (contact at a wall foot),
  // so a caster never paints its own footprint onto its sides
  float flatness = smoothstep(0.35, 0.85, n.y);
  float wallBase = (1.0 - smoothstep(0.05, 0.45, above)) * 0.55;
  float ao = g.r * uGroundParams.x * mix(wallBase, near, flatness) * edge;
  float sun = g.g * uGroundParams.y * near * smoothstep(0.3, 0.8, n.y) * edge;
  float lampNear = 1.0 - smoothstep(0.5, 7.0, above);
  lamp *= uGroundParams.w * lampNear * (0.45 + 0.55 * max(n.y, 0.0)) * edge;
  return vec4(ao, sun, 0.0, above);
}
`,w=`
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
    // soft at every edge: a wide penumbra across the cone, a fade-in from the lens (no straight
    // line at the bumper) and a smooth fall-off with range
    float cone = smoothstep(uSpotDir[i].w, mix(uSpotDir[i].w, 1.0, 0.8), dot(-l, uSpotDir[i].xyz));
    float att = 1.0 - smoothstep(0.15 * uSpotPos[i].w, uSpotPos[i].w, d);
    att *= att * smoothstep(0.4, 3.5, d) * min(1.0, d / 4.0); // no blow-out on things right in front
    float facing = 0.35 + 0.65 * max(dot(n, l), 0.0);
    acc += c * cone * att * facing;
  }
  return acc;
}
`,T=e=>`
out highp vec4 fragColor;
uniform float uNightGlow;
uniform vec3 uFoliageNight;
uniform vec3 uGlowColor;
uniform vec3 uWindowColors[4];
uniform float uWindowsDark;
uniform float uEmissiveKeep;
uniform float uGroundDebug;
uniform float uMacro;
uniform float uA2C;
uniform vec3 uLeafNear;
uniform vec2 uWire;
uniform float uLensOn;
uniform float uLensBrake;
uniform float uLampOn;
uniform float uIndicator;
uniform float uBlink;
uniform float uHour;
uniform sampler2D uLightGroups;
uniform float uTime;
uniform vec2 uAsphaltTile;
uniform vec3 uStreetGlow;
uniform float uStreetGlowBase;
uniform float uReflect;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uSkyPower;
uniform vec3 uSunColor;
uniform vec3 uAmbSky;
uniform vec3 uAmbGround;
in float vWire;
flat in vec2 vMat;
in float vGloss;
in float vSway;
flat in vec2 vCell;
in vec2 vUv;
in vec4 vTile;
in vec3 vAmb;
in vec3 vSun;
in vec3 vBase;
in float vGlow;
in vec3 vWorldPos;
in vec3 vRel;
in vec3 vNormal;
${a}
${n}
${i}
${r}
${o}
${C}
${w}
${e}
void main() {
  vec4 tex = sampleAtlas(vUv, vTile);
  float cov = 1.0;
#ifdef CUTOUT
#ifdef STYLE_ALPHA
  tex.a = styleAlpha(tex, vUv, vTile, vWorldPos);
#endif
  // with MSAA: alpha-to-coverage. Near: a crisp edge one pixel wide; far (high mip, where an
  // alpha test would erase fences and twigs): coverage follows the averaged alpha, a soft veil
  float aw = fwidth(tex.a);
  // leaf cards right at the camera (a stoop under a street tree) fade out instead of filling the screen
  float camDist = length(vWorldPos - cameraPosition);
  float near = smoothstep(0.9, 2.5, camDist);
  // From the walker's eyes (uLeafNear.x > 0, setLeafView) an eye under a low street tree lives inside that
  // band, and its canopy dissolved into speckle (a coverage fade at 4x MSAA is a screen door). There a leaf
  // card (foliage: it sways, Surface.sway) is drawn whole down to uLeafNear.z m and, nearer, gives way in
  // holes that open and grow over it (smooth noise over the card's own uv, cut with a crisp edge: no screen
  // door, and the holes stay on the leaves as the view moves), all gone at uLeafNear.y. Between 0 and 1 (the
  // opening settling into the eyes) the two blend, so nothing pops.
  // (the branch is on a uniform and everything in it is a select, so the derivatives stay defined)
  float keep = 1.0;
  if (uLeafNear.x > 0.0) {
    bool leaf = vSway > 0.0;
    float gone = uLeafNear.x * (1.0 - smoothstep(uLeafNear.y, uLeafNear.z, camDist));
    float holes = vnoise(vUv * 7.0 + vTile.xy * 61.0) * 0.7 + vnoise(vUv * 17.0 + 5.3) * 0.3;
    float hw = max(fwidth(holes), 1e-4);
    // (only where it is giving way: on a far card the noise's own derivative would thin it)
    keep = leaf && gone > 0.0 ? clamp((holes - (gone * 1.2 - 0.1)) / hw + 0.5, 0.0, 1.0) : 1.0;
    near = leaf ? mix(near, 1.0, uLeafNear.x) : near;
  }
  if (uA2C > 0.5) {
    float sharp = clamp((tex.a - 0.5) / max(aw, 1e-3) + 0.5, 0.0, 1.0);
    cov = mix(sharp, clamp(tex.a * 1.25, 0.0, 1.0), smoothstep(0.75, 2.5, gAtlasLod)) * near * keep;
    if (cov < 0.02) discard;
  } else if (tex.a < 0.5 || near < 0.5 || keep < 0.5) discard;
  float glowMask = 1.0;
#else
  // opaque tiles store a glow mask in alpha: 1 = never glows, 0.5 = glows (see paint.markGlow)
  float glowMask = clamp((1.0 - tex.a) * 2.0, 0.0, 1.0);
#endif
  vec3 n = normalize(vNormal);
  vec3 base = tex.rgb * vBase;
  // switched lenses (light kind 6: traffic signals, blinkers; light-groups.ts): lit only while their
  // group shows what they were built for, dark glass otherwise. aMat.x holds the switch code, not gloss.
  vec2 mat = vec2(vGloss, vMat.y);
  float switchOn = 1.0;
  if ((int(vMat.y + 0.5) & 7) == 6) {
    int code = int(vMat.x + 0.5);
    int st = int(texelFetch(uLightGroups, ivec2(code >> 3, 0), 0).r * 255.0 + 0.5);
    switchOn = (st == 255 ? (code & 1) == 1 : st == ((code >> 1) & 3)) ? uLampOn : 0.0;
    base *= mix(0.22, 1.0, switchOn);
    mat.x = 0.4;
  }
  // a lit shop's surfaces (Surface.closes: flag 512 in aMat.y, the closing hour x 10 in aMat.x, after
  // midnight as 24+): dark after closing; no gloss
  float shopOpen = 1.0;
  if (((int(vMat.y + 0.5) >> 9) & 1) == 1) {
    float hh = uHour < 12.0 ? uHour + 24.0 : uHour;
    shopOpen = hh < vMat.x * 0.1 ? 1.0 : 0.0;
    mat.x = 0.0;
  }
  // turn indicator lenses (light kind 7): aMat.x = side (1 left, 2 right) + 4 x a state written per vertex
  // by a merged mesh (1 left, 2 right, 3 hazard); otherwise the object's uIndicator. Blink: uBlink.
  if ((int(vMat.y + 0.5) & 7) == 7) {
    int code = int(vMat.x + 0.5);
    int state = int(uIndicator + 0.5) | ((code >> 2) & 3);
    switchOn = ((code & 3) & state) != 0 && uBlink > 0.5 ? 1.0 : 0.0;
    base *= mix(0.5, 1.0, switchOn);
    mat.x = 0.4;
  }
#ifdef CUTOUT
  // leaves at night: a dark, greyed green (see the vertex stage)
  float leafNight = smoothstep(0.15, 0.85, uNightGlow) * uFoliageNight.x;
  base = mix(base, vec3(dot(base, vec3(0.299, 0.587, 0.114))), leafNight * uFoliageNight.z);
#endif
  // macro variation on ground-like surfaces: breaks up the tile repeat over lawns and roads
  if (uMacro > 0.0 && n.y > 0.5) {
    vec2 mp = vWorldPos.xz;
    float mv = vnoise(mp / 21.0) * 0.6 + vnoise(mp / 6.7 + 13.1) * 0.4;
    base *= 1.0 + uMacro * (mv - 0.5) * 2.0 * smoothstep(0.5, 0.9, n.y);
  }
  vec3 lampLight;
  vec4 gs = groundShade(vWorldPos, n, lampLight);
#ifdef STYLE_SURFACES
  Surface S;
  S.texel = tex;
  S.tint = vBase;
  S.albedo = base;
  S.uv = vUv;
  S.tile = vTile;
  S.pos = vWorldPos;
  S.normal = n;
  vec3 styleEye = cameraPosition - vWorldPos;
  S.dist = length(styleEye);
  S.toEye = styleEye / max(S.dist, 1e-4);
  S.amb = vAmb;
  S.sun = vSun;
  S.ndl = dot(n, uSunDir);
  S.shadow = gs.y;
  S.ao = gs.x;
  S.gloss = mat.x;
#ifdef CUTOUT
  S.cutout = 1.0;
#else
  S.cutout = 0.0;
#endif
  S.foliage = vSway;
  S.kind = int(vMat.y + 0.5) & 31;
  S.above = gs.w;
#ifdef STYLE_SUN_SHADOW
  S.sunShadow = sunShadowAt(vWorldPos, n);
#else
  S.sunShadow = 0.0;
#endif
  S.light = vec3(0.0);
  S.lamps = vec3(0.0);
  S.sheen = vec3(0.0);
#ifdef STYLE_ALBEDO
  base = styleAlbedo(S);
  S.albedo = base;
#endif
#endif
  vec3 light = (vAmb + vSun * (1.0 - gs.y)) * (1.0 - gs.x);
#ifdef STYLE_LIGHT
  light = styleLight(S);
#elif defined(STYLE_SUN_SHADOW)
  light = (vAmb + vSun * (1.0 - max(gs.y, S.sunShadow))) * (1.0 - gs.x);
#endif
#ifdef STYLE_SURFACES
  S.light = light;
#endif
  // streets at night. Near the camera the real lamps' baked pools are the light (they bead along
  // the street and spill onto pavements, car sides and façade bases); a low sodium glow on road
  // (and ~70 % on pavement) fills between them, rising to the full stand-in for lamps too small to
  // draw toward the edge of the baked region, beaded at a lamp-like spacing, and handing over to
  // the far-zone street-light strips past ~1 km
  float streetGlow = 0.0;
  int surf = int(vMat.y + 0.5) & 31;
  bool isRoad = (surf & 8) != 0 || abs(vTile.x - uAsphaltTile.x) + abs(vTile.y - uAsphaltTile.y) < 2e-3;
  bool isWalk = (surf & 16) != 0;
  if (uNightGlow > 0.0 && uStreetGlow.x > 0.0 && (isRoad || isWalk)) {
    float dist = length(vWorldPos - cameraPosition);
    float sd = smoothstep(uStreetGlow.y, uStreetGlow.z, dist);
    float bead = 1.0 + 0.4 * cos(6.2832 * (vWorldPos.x + vWorldPos.z) / 35.0) * sd;
    float handover = 1.0 - smoothstep(2500.0, 3000.0, dist); // detailed streets carry the grid to ~3 km, where the far strips take over
    streetGlow = uStreetGlow.x * uNightGlow * mix(uStreetGlowBase, 1.0, sd) * bead * handover * (isRoad ? 1.0 : 0.7);
    light += uLampColor * streetGlow;
  }
#ifdef CUTOUT
  // a street lamp lights a tree's underside, not the top of its crown (a lime blob from above)
  lampLight *= 1.0 - 0.85 * smoothstep(-0.1, 0.5, n.y) * leafNight;
#endif
  light += lampLight + spotLights(vWorldPos, n);
#ifdef STYLE_SURFACES
  S.lamps = light - S.light;
#endif
  vec3 col = base * light;
  // gloss: the sky (or the ground below the horizon) reflected with a fresnel falloff, plus the
  // sun's glint: the era's cheap environment reflection for car paint and glass
  if (mat.x > 0.0) {
    vec3 Vn = normalize(cameraPosition - vWorldPos);
    vec3 R = reflect(-Vn, n);
    // very glossy, flat surfaces (water): a little wave jitter in the reflection (sim time), so the
    // sun's glint breaks into a streak of sparkles instead of one broad blob
    float rippleAmt = smoothstep(0.7, 1.0, mat.x) * smoothstep(0.9, 0.99, n.y);
    if (rippleAmt > 0.0) {
      vec2 wp2 = vWorldPos.xz * 0.45 + vec2(uTime * 0.35, uTime * 0.21);
      R.xz += (vec2(vnoise(wp2), vnoise(wp2.yx + 7.3)) - 0.5) * 0.12 * rippleAmt + (vec2(vnoise(wp2 * 6.1 + 3.1), vnoise(wp2.yx * 5.3 + 1.7)) - 0.5) * 0.05 * rippleAmt;
      R = normalize(R);
    }
    vec3 sky = mix(uSkyHorizon, uSkyZenith, pow(clamp(R.y, 0.0, 1.0), uSkyPower));
    sky = mix(sky, hazeColor(R), 1.0 - smoothstep(0.0, 0.18, R.y));
    vec3 env = R.y >= 0.0 ? sky : mix(hazeColor(R) * 0.8, (uAmbGround + uAmbSky) * 0.22, smoothstep(0.0, 0.25, -R.y));
    // reflection rises toward grazing angles only, and can't lift a dark surface (glass, black
    // paint) past ~0.45 value: the reel's glass is near-black with a highlight. Lamp lenses take little.
    float fres = 0.06 + 0.94 * pow(1.0 - max(dot(n, Vn), 0.0), 5.0);
    int lkG = int(vMat.y + 0.5) & 7;
    float k = clamp(mat.x * mix(0.35, 1.2, fres), 0.0, 1.0) * (1.0 - gs.x) * (lkG == 0 || lkG == 3 ? 1.0 : 0.25) * uReflect; // lenses (1,2,4,5) take little
    vec3 before = col;
    col = mix(col, env, k);
    float lb = max(before.r, max(before.g, before.b)), la = max(col.r, max(col.g, col.b));
    float cap = max(lb, mix(0.45, 1.0, rippleAmt)); // water may reflect the bright horizon at grazing angles
    if (la > cap) col *= cap / la;
    float shininess = mix(60.0, 4000.0, smoothstep(0.6, 1.0, mat.x)); // water: a tight glint the ripple breaks into sparkle
    col += uSunColor * pow(max(dot(R, uSunDir), 0.0), shininess) * mix(2.2, 3.5, smoothstep(0.6, 1.0, mat.x)) * mat.x * (1.0 - gs.y) * (1.0 - gs.x);
  }
#ifdef STYLE_SURFACES
  S.sheen = col - base * light;
#endif
#ifdef STYLE_SURFACE
  col = styleSurface(col, S);
#endif
  col = shoulder(col);

  // world position of this tile repeat's corner (constant across one window / one facade
  // repeat), from screen derivatives: lets every window vary without per-window data. Solved from the
  // position relative to the camera (vRel): differences of world coordinates a kilometre out had lost
  // their precision, and on oblique panes (a bay's sides) the corner wandered from one 2x2 quad to the next
  // by enough to cross a cell boundary below, so the pane switched between two windows' lights
  vec3 dpx = dFdx(vRel), dpy = dFdy(vRel);
  vec2 dux = dFdx(vUv), duy = dFdy(vUv);
  float det = dux.x * duy.y - dux.y * duy.x;
  vec2 fu = fract(vUv + 1e-4);
  vec3 corner = abs(det) > 1e-12 ? cameraPosition + (vRel - ((dpx * duy.y - dpy * dux.y) * fu.x + (dpy * dux.x - dpx * duy.x) * fu.y) / det) : vWorldPos;

  // night glow. Dark textured glow (window glass) varies per window: some stay dark, some
  // light earlier at dusk, warm/cool bulbs. Bright glow (lamp heads, car lights) emits its own colour.
  float glow = 0.0;
  if (vGlow > 0.0 && glowMask > 0.0 && (uNightGlow > 0.0 || (int(vMat.y + 0.5) & 7) >= 6)) {
    float texLum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    vec3 emissive;
    int lk = int(vMat.y + 0.5) & 7;
    if (lk == 3 || (lk == 0 && texLum < 0.55)) {
      vec3 cq = floor(corner * 1.25 + 0.31);
      vec2 cell = vec2(cq.x + cq.y * 131.0, cq.z) + vec2(floor(vCell.x * 97.0), floor(vCell.y * 4093.0));
      float h1 = hash12(cell), h2 = hash12(cell + 17.31), h3 = hash12(cell + 41.7);
      float on = step(uWindowsDark, h1) * smoothstep(h3 * 0.6, h3 * 0.6 + 0.25, uNightGlow);
      vec3 wc = h2 < 0.5 ? mix(uWindowColors[0], uWindowColors[1], h2 * 2.0) : (h2 < 0.88 ? mix(uWindowColors[1], uWindowColors[2], (h2 - 0.5) / 0.38) : uWindowColors[3]);
      emissive = mix(uGlowColor, wc, 0.8) * (0.85 + 0.4 * texLum + 0.15 * h2);
      glow = vGlow * glowMask * on * shopOpen;
    } else {
      float mx = max(base.r, max(base.g, base.b)), mn = min(base.r, min(base.g, base.b));
      float sat = (mx - mn) / max(mx, 1e-3);
      vec3 neutral = lk == 1 ? mix(uGlowColor, uLampColor, 0.65) : uGlowColor; // light: 'lamp' heads glow sodium
      emissive = mix(neutral * (0.7 + 0.4 * mx), base / max(mx, 0.25), lk == 5 || lk == 7 ? 1.0 : smoothstep(0.3, 0.7, sat)) * 1.1; // 'lamp-white': own colour
      glow = vGlow * glowMask * uNightGlow * (lk == 2 || lk == 4 ? uLensOn : uLampOn) * shopOpen;
      // a switched lens glows while it is lit, by day too (a signal reads in sunlight)
      if (lk >= 6) glow = vGlow * glowMask * max(uNightGlow, 0.6) * switchOn;
      // tail lenses (light: 'tail') light up when braking, day or night, at ~2.5x
      if (lk == 4 && uLensBrake > 0.0) {
        glow = max(glow, vGlow * glowMask);
        emissive *= 2.5;
      }
    }
    col = mix(col, emissive, clamp(glow, 0.0, 1.0));
  }
  if (uGroundDebug > 0.5) {
    vec2 guv = (vWorldPos.xz - uGroundRegion.xy) * uGroundRegion.z;
    vec4 raw = texture(uGround, guv);
    fragColor = vec4(raw.r, raw.g, raw.b, 1.0);
    if (uGroundDebug > 1.5) fragColor = vec4(gs.x * 2.0, gs.y * 2.0, dot(lampLight, vec3(0.33)), 1.0);
    if (uGroundDebug > 2.5) fragColor = vec4(clamp(gs.w * 0.25 + 0.5, 0.0, 1.0), clamp(-gs.w * 0.25 + 0.5, 0.0, 1.0), fract(raw.a), 1.0);
    // 4: what the material codes say: magenta sways (Surface.sway), green lights as a window at night (the
    // window hash's branch), white both, black neither (to attribute a change to leaves or windows)
    if (uGroundDebug > 3.5) {
      int lkD = int(vMat.y + 0.5) & 7;
      bool win = vGlow > 0.0 && glowMask > 0.0 && (lkD == 3 || (lkD == 0 && dot(tex.rgb, vec3(0.299, 0.587, 0.114)) < 0.55));
      float sw = vSway > 0.0 ? 1.0 : 0.0;
      fragColor = vec4(sw, win ? 1.0 : 0.0, sw, 1.0);
    }
    return;
  }
  vec3 V = vWorldPos - cameraPosition;
  float f = fogAmount(vWorldPos, cameraPosition);
#ifdef STYLE_SUN_SHADOW
  // look.sunShadow.debug: where the cast shadow lands (warm lit, blue shaded, black facing away), shaded by the albedo
  if (uSunShadowParams.w > 1.5) {
    vec3 dbg = S.ndl <= 0.0 ? vec3(0.05) : mix(vec3(1.0, 0.75, 0.4), vec3(0.15, 0.25, 0.7), S.sunShadow);
    fragColor = vec4(dbg * (0.45 + 0.55 * dot(S.albedo, vec3(0.333))), cov);
    return;
  }
#endif
#ifdef STYLE_FOG
  col = styleFog(col, hazeColor(normalize(V)), f * (1.0 - clamp(max(glow, streetGlow * 0.6), 0.0, 1.0) * uEmissiveKeep), S);
#else
  col = mix(col, hazeColor(normalize(V)), f * (1.0 - clamp(max(glow, streetGlow * 0.6), 0.0, 1.0) * uEmissiveKeep));
#endif
  fragColor = vec4(dither(col), cov);
}
`,E=`
out highp vec4 fragColor;
uniform float uBlobStrength;
uniform vec3 uAmbGround;
in vec2 vUv;
in vec4 vTile;
in vec3 vAmb;
in vec3 vSun;
in vec3 vBase;
in float vGlow;
in vec3 vWorldPos;
in vec3 vNormal;
${a}
${n}
void main() {
  vec4 tex = sampleAtlas(vUv, vTile);
  float f = fogAmount(vWorldPos, cameraPosition);
  fragColor = vec4(uAmbGround * 0.12, tex.a * vBase.r * uBlobStrength * (1.0 - f));
}
`,D=T(``);function O(n,r=D,i={}){return new t({glslVersion:e,uniforms:s,vertexShader:S,fragmentShader:r,defines:n,defaultAttributeValues:{color:[1,1,1],uv:[0,0],uv1:[0,0],aMat:[0,0]},...i})}var k=`
out highp vec4 fragColor;
void main() {
#ifdef CUTOUT
  fragColor = vec4(1.0 / 32.0, 0.0, 0.0, 1.0);
#else
  fragColor = vec4(0.0, 1.0 / 32.0, 0.0, 1.0);
#endif
}
`,A=e=>O(e?{CUTOUT:``}:{},k,{side:e?2:0,depthTest:!1,depthWrite:!1,transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:201}),j={opaque:A(!1),cutout:A(!0)},M={from:.15,to:.6};function N(e){s.uLeafNear.value.set(Math.min(1,Math.max(0,e)),M.from,M.to)}var P=`
out highp vec4 fragColor;
in vec2 vUv;
in vec4 vTile;
${a}
void main() {
#ifdef CUTOUT
  if (sampleAtlas(vUv, vTile).a < 0.5) discard;
#endif
  fragColor = vec4(1.0);
}
`,F={opaque:O({},P,{side:2}),cutout:O({CUTOUT:``},P,{side:2})},I={opaque:O({}),cutout:O({CUTOUT:``},D,{side:2}),blob:O({},E,{transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})};I.opaque.name=`world-opaque`;function L(e,t=!1){let n=T(g(e,t));for(let e of[I.opaque,I.cutout])e.fragmentShader!==n&&(e.fragmentShader=n,e.needsUpdate=!0)}I.cutout.name=`world-cutout`,I.blob.name=`blob-shadow`;export{F as a,b as c,L as i,_ as l,j as n,v as o,N as r,x as s,I as t};