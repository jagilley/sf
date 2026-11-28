import{A as e,D as t,E as n,G as r,R as i,X as a,_ as o,bn as s,o as c,tn as l,u,un as d,ut as f,vn as p,yn as m,z as h}from"./three.core-CMmUIUzP.js";import"./kit-G_mORq1U.js";import{l as g,t as _}from"./uniforms-Bhz7fZ2N.js";import{c as v,d as y,h as b,l as x,p as S,u as C}from"./builder-DA6owUhM.js";import{d as w,f as T,r as E,s as D}from"./rooms-C5JIgs41.js";import{r as O}from"./types-CB6Dacmf.js";import{t as ee}from"./contract-Bivv3cyh.js";import{l as te}from"./textures-CcCyLauz.js";var ne=`
in float aBox;
in float aView;
in vec4 aGlass;
in float aFrost;
out vec3 vWorld;
out vec3 vN;
out vec4 vGlass;
out float vFrost;
flat out int vBox;
flat out int vView;
uniform float uProud;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  // out from the glass's plane: under the real room's portal glass, or over it (FarRooms.mode)
  wp.xyz += normalize(mat3(modelMatrix) * normal) * uProud;
  vWorld = wp.xyz;
  vN = normal;
  vGlass = aGlass;
  vFrost = aFrost;
  vBox = int(aBox + 0.5);
  vView = int(floor(aView + 0.5));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,re=`
out highp vec4 fragColor;
uniform highp sampler2D uFarRooms;
uniform vec4 uFarDay;      // the outside's daylight d, the sky's hue
uniform vec3 uSkyHorizon;
uniform float uHour;
uniform float uEmissiveKeep;
uniform float uNightGlow;
uniform vec3 uCityWash;    // the city's grade (wash x amount), to undo
uniform vec4 uCityGrade;   // contrast, saturation, exposure, undo (0..1)
uniform vec3 uCityTint;
uniform vec3 uRoomWash;    // the room's grade
uniform vec4 uRoomGrade;   // contrast, saturation
uniform vec3 uRoomTint;
uniform highp sampler2D uBakeA;  // baked rooms' pictures: night rgb, depth's high byte
uniform highp sampler2D uBakeB;  // day rgb, depth's low byte
uniform vec2 uBakeSize;
uniform float uInternalH;
in vec3 vWorld;
in vec3 vN;
in vec4 vGlass;
in float vFrost;
flat in int vBox;
flat in int vView;
${v}
${x}
${y}
${C}
const vec3 LUM = vec3(0.299, 0.587, 0.114);
vec4 T(int k) { return texelFetch(uFarRooms, ivec2(k, vBox), 0); }
vec4 TV(int row, int k) { return texelFetch(uFarRooms, ivec2(k, row), 0); }

// A BAKED ROOM (baked.ts): where a point of the room stands in a view's picture (atlas px, rows top down) and how
// deep along the view; what the picture's depth holds there (the code: 0..65520 over the view's depth range, in steps
// of 16, plus 1 where it is one of the room's other windows; 65535 nothing of the room)
vec3 bakeAt(vec3 P, vec4 v0, vec4 v1, vec4 v2, vec4 v3, vec4 v4, vec4 fr) {
  vec3 q = P - v0.xyz;
  float z = max(dot(q, v3.xyz), 1e-3);
  vec2 f = clamp((vec2(dot(q, v1.xyz), dot(q, v2.xyz)) / z - fr.xz) / (fr.yw - fr.xz), 0.0, 1.0);
  return vec3(v4.x + f.x * v4.z, v4.y + (1.0 - f.y) * v4.w, z);
}
float bakeCode(vec2 at, vec4 v4) {
  ivec2 ip = clamp(ivec2(floor(at)), ivec2(v4.xy), ivec2(v4.xy + v4.zw) - 1);
  return floor(texelFetch(uBakeA, ip, 0).a * 255.0 + 0.5) * 256.0 + floor(texelFetch(uBakeB, ip, 0).a * 255.0 + 0.5);
}

// The room as one view's picture shows it along the ray from p (on the glass) along dir: the ray stepped on through the
// picture until it is at or a little behind what the picture shows there (within band, a step's depth at least; further
// behind is behind a thing standing in front of what lies beyond, a post or a lamp's cord, which the picture has as it
// is and not as a solid running back from where it was taken: the ray goes on past it), then halved down onto it; its
// colour there, as near as a pixel here covers the picture, by the hour (the lamps alone by night, the windows'
// daylight over them by day, in its hue now); frosted glass blurred as the portal blurs the real room (7 px at 360 lines).
// Alpha 0: the ray met nothing of the room there.
vec4 bakedView(int row, vec3 p, vec3 dir, float camDist, float px) {
  vec4 v0 = TV(row, 0), v1 = TV(row, 1), v2 = TV(row, 2), v3 = TV(row, 3), v4 = TV(row, 4), v5 = TV(row, 5), fr = TV(row, 10);
  vec3 q0 = p - v0.xyz;
  float dz = max(dot(dir, v3.xyz), 0.02), z0 = dot(q0, v3.xyz), zr = (v5.y - v5.x) / 65520.0;
  float tEnd = max((v5.y - z0) / dz, 0.0);
  // (no further than where it leaves the view across or up: out of the room)
  float dx = dot(dir, v1.xyz), x0 = dot(q0, v1.xyz), dy = dot(dir, v2.xyz), y0 = dot(q0, v2.xyz);
  for (int s = 0; s < 2; s++) {
    float bx = s == 0 ? fr.x : fr.y, by = s == 0 ? fr.z : fr.w, sg = s == 0 ? -1.0 : 1.0;
    float ax = dx - bx * dz, ay = dy - by * dz;
    if (ax * sg > 1e-5) tEnd = min(tEnd, max((bx * z0 - x0) / ax, 0.0));
    if (ay * sg > 1e-5) tEnd = min(tEnd, max((by * z0 - y0) / ay, 0.0));
  }
  tEnd = min(tEnd, 80.0);
  float steps = 48.0, band = max(0.35, 1.5 * tEnd / steps * dz);
  float tA = 0.0, tB = tEnd;
  vec3 sp = bakeAt(p, v0, v1, v2, v3, v4, fr);
  float gap = sp.z - v5.x - floor(bakeCode(sp.xy, v4) / 16.0) * 16.0 * zr;
  bool hit = gap >= 0.0 && gap <= band;
  if (hit) tB = 0.0;
  for (int i = 1; i <= 48; i++) {
    if (hit) break;
    float tt = tEnd * float(i) / steps;
    sp = bakeAt(p + dir * tt, v0, v1, v2, v3, v4, fr);
    gap = sp.z - v5.x - floor(bakeCode(sp.xy, v4) / 16.0) * 16.0 * zr;
    if (gap >= 0.0 && gap <= band) {
      tB = tt;
      hit = true;
    } else tA = tt;
  }
  for (int i = 0; i < 6; i++) {
    if (!hit) break;
    float tm = 0.5 * (tA + tB);
    sp = bakeAt(p + dir * tm, v0, v1, v2, v3, v4, fr);
    gap = sp.z - v5.x - floor(bakeCode(sp.xy, v4) / 16.0) * 16.0 * zr;
    if (gap >= 0.0 && gap <= band) tB = tm;
    else tA = tm;
  }
  sp = bakeAt(p + dir * tB, v0, v1, v2, v3, v4, fr);
  float hitCode = bakeCode(sp.xy, v4);
  // (nothing of the room there, or one of its other windows: the city's own glass behind this pane shows, as it does
  // through the real room's portal)
  if (hitCode > 65534.5 || hitCode - 16.0 * floor(hitCode / 16.0) > 0.5) return vec4(0.0);
  float foot = px * (camDist + tB) / max(camDist, 0.1), texel = v3.w * sp.z / max(v0.w, 1.0);
  float lod = log2(max(foot / texel, 1.0));
  lod = min(max(lod, vFrost * log2(max(2.0 * 7.0 * uInternalH / 360.0 * foot / texel, 1.0))), 4.0);
  vec2 uv = clamp(sp.xy, v4.xy + 0.5, v4.xy + v4.zw - 0.5) / uBakeSize;
  vec3 cN = textureLod(uBakeA, uv, lod).rgb, cD = textureLod(uBakeB, uv, lod).rgb;
  vec4 v6 = TV(row, 6), v7 = TV(row, 7);
  float w = clamp((uFarDay.x - v7.w) / max(v6.w - v7.w, 1e-3), 0.0, 1.0);
  return vec4(clamp(cN + w * (cD - cN) * uFarDay.yzw / max(v6.xyz, vec3(1e-3)), 0.0, 1.0), 1.0);
}

vec3 gradeOf(vec3 c, vec3 wash, float contrast, float sat, vec3 tint) {
  c = 1.0 - (1.0 - c) * (1.0 - wash);
  c = (c - 0.5) * contrast + 0.5;
  float l = dot(c, LUM);
  return mix(vec3(l), c, sat) * tint;
}
vec3 ungrade(vec3 g, vec3 wash, float contrast, float sat, vec3 tint) {
  vec3 x = g / max(tint, vec3(1e-3));
  float l = dot(x, LUM);
  vec3 c = vec3(l) + (x - vec3(l)) / max(sat, 1e-3);
  c = (c - 0.5) / max(contrast, 1e-3) + 0.5;
  return 1.0 - (1.0 - c) / max(vec3(1.0) - wash, vec3(1e-3));
}

// the face a ray from p along d leaves a box [lo, hi] by: its distance, and the face's normal into the box
float leave(vec3 p, vec3 d, vec3 lo, vec3 hi, out vec3 n) {
  vec3 far = vec3(d.x > 0.0 ? hi.x : lo.x, d.y > 0.0 ? hi.y : lo.y, d.z > 0.0 ? hi.z : lo.z);
  vec3 t = (far - p) / d;
  if (t.x <= t.y && t.x <= t.z) { n = vec3(-sign(d.x), 0.0, 0.0); return t.x; }
  if (t.y <= t.z) { n = vec3(0.0, -sign(d.y), 0.0); return t.y; }
  n = vec3(0.0, 0.0, -sign(d.z));
  return t.z;
}

void main() {
  vec4 t0 = T(0), t1 = T(1), t2 = T(2);
  float show = t2.y;
  if (show <= 0.002) discard;
  // the box's plan frame: +u along the bearing, +v 90 degrees left of it, y over the floor
  float b = t0.w;
  vec3 Ud = vec3(sin(b), 0.0, -cos(b)), Vd = vec3(-cos(b), 0.0, -sin(b));
  vec3 pw = vWorld - t0.xyz, cw = cameraPosition - t0.xyz;
  vec3 p = vec3(dot(pw, Ud), pw.y, dot(pw, Vd));
  vec3 c = vec3(dot(cw, Ud), cw.y, dot(cw, Vd));
  vec3 d = normalize(p - c);
  d = mix(d, vec3(1e-5), vec3(lessThan(abs(d), vec3(1e-5)))); // (no division by zero along a face)
  vec3 lo = vec3(t1.x, 0.0, t1.z), hi = vec3(t1.y, t2.x, t1.w);
  // into the room from this pane, and how big a pixel is here (m)
  vec3 inward = -vec3(dot(vN, Ud), 0.0, dot(vN, Vd));
  float camDist = length(cameraPosition - vWorld);
  float px = length(fwidth(vWorld));

  vec3 room = vec3(0.0);
  float on = 1.0;
  bool baked = vView >= 0 && TV(vView, 5).z > 0.5;
  if (baked) {
    // the views of this plane of glass either side of the ray's angle across it, each marched, mixed by angle
    vec3 dir = normalize(vWorld - cameraPosition);
    vec4 g5 = TV(vView, 5), g8 = TV(vView, 8), g9 = TV(vView, 9);
    int count = int(g5.w + 0.5);
    float th = atan(dot(dir, g9.xyz), dot(dir, g8.xyz));
    int k0 = 0;
    float w1 = 0.0;
    for (int k = 0; k < 7; k++) {
      if (k + 1 >= count) break;
      float a0 = TV(vView + k, 8).w, a1 = TV(vView + k + 1, 8).w;
      if (th >= a0) {
        k0 = k;
        w1 = clamp((th - a0) / max(a1 - a0, 1e-3), 0.0, 1.0);
      }
    }
    vec4 c0 = w1 < 0.99 ? bakedView(vView + k0, vWorld, dir, camDist, px) : vec4(0.0);
    vec4 c1 = w1 > 0.01 ? bakedView(vView + k0 + 1, vWorld, dir, camDist, px) : vec4(0.0);
    // where the ray meets nothing of the room (across it, its other windows) the real room's pass draws nothing and its
    // portal shows the city's own glass behind the plane: so does this
    float a0 = c0.a * (1.0 - w1), a1 = c1.a * w1;
    if (a0 + a1 < 0.5) discard;
    room = (c0.rgb * a0 + c1.rgb * a1) / (a0 + a1);
  } else {
  vec4 kWall = T(3), kDado = T(4), kFloor = T(5), kCeil = T(6), kLamp = T(7), kGrid = T(8);
  vec3 n;
  float t = max(leave(p, d, lo, hi, n), 0.0);
  vec3 albedo = n.y > 0.5 ? kFloor.rgb : n.y < -0.5 ? kCeil.rgb : kWall.rgb;
  bool wall = abs(n.y) < 0.5;
  float glow = 0.0, pattern = 0.0, seed = 0.0;
  // the boxes standing in the room, each maybe repeated
  int nThings = int(t2.w + 0.5);
  for (int k = 0; k < 16; k++) {
    if (k >= nThings) break;
    vec4 a = T(16 + 3 * k), e = T(17 + 3 * k), col = T(18 + 3 * k);
    int reps = int(abs(e.z) + 0.5);
    vec3 stepv = e.z < 0.0 ? vec3(0.0, 0.0, e.w) : vec3(e.w, 0.0, 0.0);
    for (int r = 0; r < 12; r++) {
      if (r >= max(reps, 1)) break;
      vec3 bmin = vec3(a.x, e.x, a.z) + stepv * float(r), bmax = vec3(a.y, e.y, a.w) + stepv * float(r);
      vec3 ta = (bmin - p) / d, tb = (bmax - p) / d;
      vec3 tn = min(ta, tb), tx = max(ta, tb);
      float tN = max(max(tn.x, tn.y), tn.z), tX = min(min(tx.x, tx.y), tx.z);
      if (tN <= tX && tN > 0.0 && tN < t) {
        t = tN;
        n = tn.x >= tn.y && tn.x >= tn.z ? vec3(-sign(d.x), 0.0, 0.0) : tn.y >= tn.z ? vec3(0.0, -sign(d.y), 0.0) : vec3(0.0, 0.0, -sign(d.z));
        albedo = col.rgb;
        pattern = floor(col.a / 2.0);
        glow = col.a - 2.0 * pattern;
        seed = float(k * 13 + r);
        wall = false;
      }
    }
  }
  vec3 h = p + d * t;
  // a thing's face patterned: art (blocks of colour, a mural or pictures) or shelves (rows of bottles), fading to its
  // plain colour where a cell gets under about two pixels
  if (pattern > 0.0) {
    vec2 fc = abs(n.x) > 0.5 ? h.zy : abs(n.z) > 0.5 ? h.xy : h.xz;
    float pxAt = px * (camDist + t) / max(camDist, 0.1);
    vec3 patt;
    if (pattern < 1.5) {
      vec2 cell = floor(fc / vec2(0.55, 0.42));
      float r1 = hash12(cell + seed * 7.1), r2 = hash12(cell.yx + seed * 3.3 + 11.0);
      vec3 hue = r1 < 0.25 ? vec3(0.72, 0.3, 0.2) : r1 < 0.5 ? vec3(0.2, 0.48, 0.5) : r1 < 0.75 ? vec3(0.85, 0.62, 0.22) : vec3(0.88, 0.84, 0.74);
      patt = mix(albedo, hue, 0.7) * (0.75 + 0.5 * r2);
    } else {
      float fy = fract(fc.y / 0.36);
      float r1 = hash12(vec2(floor(fc.x / 0.09), floor(fc.y / 0.36)) + seed);
      vec3 bottle = r1 < 0.3 ? vec3(0.85, 0.55, 0.2) : r1 < 0.55 ? vec3(0.35, 0.55, 0.3) : r1 < 0.8 ? vec3(0.9, 0.85, 0.7) : vec3(0.25, 0.15, 0.1);
      patt = fy < 0.14 ? albedo * 0.35 : fy > 0.8 ? albedo * 0.6 : mix(albedo, bottle, 0.8);
    }
    // (a bottle is 9 cm, an art block 55: each fades as it nears a pixel)
    albedo = pattern < 1.5 ? mix(patt, albedo, smoothstep(0.15, 0.4, pxAt)) : mix(patt, albedo * 0.85, smoothstep(0.03, 0.09, pxAt));
  }
  // a dado band round the walls
  if (wall && h.y < kWall.a) albedo = kDado.rgb;
  // a wall with the room's own windows in it, seen across the room: between their sill and head, the outside's light
  vec4 kGlaze = T(14);
  int bit = abs(n.x) > 0.5 ? (n.x > 0.0 ? 1 : 2) : (n.z > 0.0 ? 4 : 8);
  bool glazed = wall && (int(kGlaze.x + 0.5) & bit) != 0 && h.y > kGlaze.y && h.y < kGlaze.z;

  // the light: the room's ambient x (fill + lamps + the windows by day), as its vertices are lit
  float day = uFarDay.x;
  vec3 ambSky = mix(T(9).rgb, T(11).rgb, day), ambGround = mix(T(10).rgb, T(12).rgb, day);
  vec3 amb = mix(ambGround, ambSky, n.y * 0.5 + 0.5);
  float fill = T(13).x;
  float hh = uHour < 12.0 ? uHour + 24.0 : uHour;
  float closes = t2.z;
  on = closes < 0.0 || (uHour >= 6.0 && uHour < 12.0) || hh < closes ? 1.0 : 0.0;
  vec3 L = vec3(fill * mix(0.75, 1.0, n.y * 0.5 + 0.5)) * mix(0.5, 1.0, on);
  float H = t2.x, drop = kDado.a, size = kFloor.a, reach = kCeil.a;
  float yl = H - drop;
  vec2 span = hi.xz - lo.xz;
  vec2 cells = max(vec2(1.0), floor(span / kGrid.xy + 0.5));
  vec2 s = span / cells;
  vec2 cell = clamp(floor((h.xz - lo.xz) / s), vec2(0.0), cells - 1.0);
  vec3 lamps = vec3(0.0);
  for (int i = -1; i <= 1; i++)
    for (int j = -1; j <= 1; j++) {
      vec2 q = cell + vec2(float(i), float(j));
      if (q.x < 0.0 || q.y < 0.0 || q.x > cells.x - 1.0 || q.y > cells.y - 1.0) continue;
      vec3 l = vec3(lo.x + (q.x + 0.5) * s.x, yl, lo.z + (q.y + 0.5) * s.y) - h;
      float dist = max(length(l), 1e-3);
      float ndl = (dot(n, l / dist) + 0.4) / 1.4;
      if (ndl <= 0.0) continue;
      float att = reach * reach / (reach * reach + dist * dist);
      float fall = clamp((4.0 * reach - dist) / (1.5 * reach), 0.0, 1.0);
      lamps += att * fall * fall * ndl;
    }
  L += kLamp.rgb * kLamp.a * lamps * on;
  // the windows by day: strongest at the glass, gone dayReach m in
  float depth = max(dot(h - p, inward), 0.0);
  L += day * kGrid.z * exp(-depth / max(kGrid.w, 0.1)) * uFarDay.yzw * (0.6 + 0.4 * max(dot(n, -inward), 0.0));
  room = albedo * amb * min(L, vec3(2.4));
  // things that glow are their own light
  room = mix(room, albedo * 1.1, glow * mix(1.0, 0.8, day));
  // (the outside through the far windows: the horizon's colour, dimmed by night, under the windows' frames' shade)
  if (glazed) room = mix(room, uSkyHorizon * 0.5, kGlaze.w);
  room = shoulder(room);

  // the bulbs where the ray crosses the lamps' height: a disc and a halo, no smaller than a pixel or so
  float bulbGlow = T(13).y * on;
  if (bulbGlow > 0.0 && abs(d.y) > 1e-4) {
    float tl = (yl - p.y) / d.y;
    if (tl > 0.0 && tl < t + 0.05) {
      vec3 qh = p + d * tl;
      vec2 qc = clamp(floor((qh.xz - lo.xz) / s), vec2(0.0), cells - 1.0);
      vec2 lp = lo.xz + (qc + 0.5) * s;
      float r = length(qh.xz - lp);
      float pxAt = px * (camDist + tl) / max(camDist, 0.1);
      float R = max(size, pxAt * 0.7);
      float k = (size * size) / (R * R);
      float core = smoothstep(R, R * 0.45, r) * k;
      float halo = exp(-(r * r) / (6.0 * R * R)) * 0.35 * min(1.0, k * 4.0);
      room += kLamp.rgb * bulbGlow * (core * 1.4 + halo) * (1.0 - vFrost * 0.7);
    }
  }
  }

  // frosted glass: the room as light and colour, no shapes
  vec3 other = room;
  if (vFrost > 0.0) {
    float l = dot(room, LUM);
    other = mix(room, mix(room, vec3(l), 0.5) * 0.65 + 0.35 * (0.25 + 0.75 * l), vFrost);
  }
  // the glass: its tint, a little of this side's horizon reflected (as src/engine/windows.ts portalFrag)
  float cosv = abs(dot(normalize(cameraPosition - vWorld), normalize(vN)));
  float f = min(vGlass.a + (1.0 - vGlass.a) * pow(1.0 - cosv, 5.0), 0.35);
  vec3 seen = mix(other * vGlass.rgb, uSkyHorizon * 0.6, f);
  // through the room's grade, and the city's undone (the composite grades these pixels by the city's)
  float e = max(uCityGrade.z, 1e-3);
  vec3 asRoom = gradeOf(seen * e, uRoomWash, uRoomGrade.x, uRoomGrade.y, uRoomTint);
  vec3 forCity = clamp(ungrade(asRoom, uCityWash, uCityGrade.x, uCityGrade.y, uCityTint) / e, 0.0, 1.0);
  vec3 col = mix(seen, forCity, uCityGrade.w);
  // the city's air between here and the camera (a lit room keeps through it, as lit windows do)
  float fogA = fogAmount(vWorld, cameraPosition);
  float keep = uEmissiveKeep * on * clamp(uNightGlow, 0.0, 1.0) * 0.6;
  col = mix(col, hazeColor(normalize(vWorld - cameraPosition)), fogA * (1.0 - keep));
  fragColor = vec4(dither(col), show);
}
`;function k(t,n,r){let i=[`uSkyHorizon`,`uHour`,`uEmissiveKeep`,`uNightGlow`,`uFogColor`,`uFogSunColor`,`uFogNear`,`uFogFar`,`uHazeDensity`,`uHazeMax`,`uHazeStart`,`uGroundFog`,`uSunDir`,`uDither`,`uShoulder`,`uInternalH`],a={};for(let e of i)a[e]=_[e];Object.assign(a,{uFarRooms:{value:t},uBakeA:{value:n},uBakeB:{value:r},uBakeSize:{value:new p(1,1)},uFarDay:{value:new s(0,1,1,1)},uCityWash:{value:new m},uCityGrade:{value:new s(1,1,1,1)},uCityTint:{value:new m(1,1,1)},uRoomWash:{value:new m},uRoomGrade:{value:new s(1,1,0,0)},uRoomTint:{value:new m(1,1,1)},uProud:{value:.004}});let o=new l({glslVersion:e,uniforms:a,vertexShader:ne,fragmentShader:re,side:0,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendEquation:100,blendSrc:204,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205});return o.name=`far-room`,o}var A=new u,j=null;function M(e){let t=e.uniforms,n=_.uHour.value;if(!j||j.hour!==n){let e=w(n);j={hour:n,v:[e.d,...e.tint]}}t.uFarDay.value.set(...j.v);let r=g.grade,i=S?.key,a=b(S?.weather);A.set(i?.wash??`#000000`).multiplyScalar((i?.washAmount??0)*r.wash),t.uCityWash.value.set(A.r,A.g,A.b),t.uCityGrade.value.set(r.contrast*a.contrast*(i?.contrast??1),r.saturation*a.saturation*(i?.saturation??1),r.exposure,g.farRooms.undoGrade),A.set(r.tint).multiply(new u(i?.tint??`#ffffff`)),t.uCityTint.value.set(A.r,A.g,A.b);let o=T,s=b(`clear`);A.set(o.wash).multiplyScalar(o.washAmount*r.wash),t.uRoomWash.value.set(A.r,A.g,A.b),t.uRoomGrade.value.set(r.contrast*s.contrast*o.contrast,r.saturation*s.saturation*o.saturation,0,0),A.set(r.tint).multiply(new u(o.tint)),t.uRoomTint.value.set(A.r,A.g,A.b)}function N(e){let t=0,n=1/0,r=-1/0;for(let i of e.panes){let a=i.corners[0].map((e,t)=>(e+i.corners[2][t])/2),[o,s]=H(e,a[0],a[2]),c=[Math.abs(o-e.box[0]),Math.abs(o-e.box[1]),Math.abs(s-e.box[2]),Math.abs(s-e.box[3])];t|=1<<c.indexOf(Math.min(...c)),n=Math.min(n,i.corners[0][1]-e.floor),r=Math.max(r,i.corners[2][1]-e.floor)}return{mask:t,sill:n,head:r}}var P={tint:`#eef2f0`,reflect:.07};function F(e){let t=e.replace(`#`,``),n=parseInt(t.length===3?t.replace(/(.)/g,`$1$1`):t,16);if(!/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(t))throw Error(`far room: "${e}" is not a colour (#rrggbb)`);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var I=[{wall:`#d8cbb4`,dado:`#5a3e2c`,floor:`#6a4a32`,ceiling:`#c8bca8`,lamp:`#ffd49a`,power:.3,fill:.4},{wall:`#7a2e24`,dado:`#2a1a16`,floor:`#3a2a22`,ceiling:`#2a2220`,lamp:`#ffb870`,power:.3,fill:.35},{wall:`#e8e6e0`,dado:`#c8c6c0`,floor:`#9a9894`,ceiling:`#f0eee8`,lamp:`#f4f2ea`,power:.5,fill:.55},{wall:`#c89a5a`,dado:`#4a3424`,floor:`#5a3c28`,ceiling:`#b89a78`,lamp:`#ffcc88`,power:.3,fill:.4},{wall:`#8a9a8a`,dado:`#2e3430`,floor:`#6a5e50`,ceiling:`#d0ccc0`,lamp:`#ffe2b0`,power:.4,fill:.5}];function L(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function R(e){let t=I[e%I.length],n=(e>>>8)%1e3/1e3;return{wall:t.wall,dado:t.dado,dadoHeight:.9+.3*n,floor:t.floor,ceiling:t.ceiling,lamps:{spacing:[2.4+n,2.6+n],drop:.7,color:t.lamp,power:t.power,reach:3.2,size:.13,glow:1},fill:t.fill,daylight:.8,dayReach:6}}function z(...e){let t={};for(let n of e){if(!n)continue;let{lamps:e,...r}=n;Object.assign(t,r),e&&(t.lamps={...t.lamps??{},...e})}return t}function B(e){let t=e.lamps??{};return{wall:F(e.wall??`#d0c4b0`),dado:F(e.dado??e.wall??`#d0c4b0`),dadoHeight:e.dadoHeight??0,floor:F(e.floor??`#5a4636`),ceiling:F(e.ceiling??`#c8bca8`),lamps:{spacing:t.spacing??[2.6,2.6],drop:t.drop??.7,color:F(t.color??`#ffd49a`),power:t.power??.25,reach:t.reach??3.2,size:t.size??.13,glow:t.glow??1},daylight:e.daylight??.8,dayReach:e.dayReach??6,fill:e.fill??.35,outside:e.outside??.4,closes:e.closes??-1}}function V(e,t){let[n,r,i]=e.at.length===3?e.at:[e.at[0],t,e.at[1]],a=O(e.facing),o=[a[2],0,-a[0]],s=o[0]*e.width/2,c=o[2]*e.width/2,l=e.glass??{},u=F(l.tint??P.tint);return{id:e.id,corners:[[n-s,r,i-c],[n+s,r,i+c],[n+s,r+e.height,i+c],[n-s,r+e.height,i-c]],normal:a,tint:u,reflect:l.reflect??P.reflect,frost:l.frost??0}}function H(e,t,n){let r=e.bearing*Math.PI/180,i=Math.sin(r),a=-Math.cos(r),o=-Math.cos(r),s=-Math.sin(r),c=t-e.origin[0],l=n-e.origin[1];return[c*i+l*a,c*o+l*s]}function U(e,t){let n=t.corners[0].map((e,n)=>(e+t.corners[2][n])/2),[r,i]=H(e,n[0],n[2]),[a,o,s,c]=e.box,l=.6;return r<a-l||r>o+l||i<s-l||i>c+l?1/0:Math.min(Math.abs(r-a),Math.abs(r-o),Math.abs(i-s),Math.abs(i-c))}function W(e){let t=[];for(let n of e){let e=t.find(e=>{let t=e[0],r=t.normal[0]*n.normal[0]+t.normal[2]*n.normal[2],i=(n.corners[0][0]-t.corners[0][0])*t.normal[0]+(n.corners[0][2]-t.corners[0][2])*t.normal[2];return r>Math.cos(.5*Math.PI/180)&&Math.abs(i)<.02});e?e.push(n):t.push([n])}return t}function G(e,t,n){let r=e[0].normal,i=((Math.atan2(r[0],-r[2])*180/Math.PI-90)%360+360)%360,a=e[0].corners[0],o={origin:[a[0],a[2]],bearing:i},s=1/0,c=-1/0,l=-1/0;for(let t of e)for(let e of t.corners){let[t]=H(o,e[0],e[2]);s=Math.min(s,t),c=Math.max(c,t),l=Math.max(l,e[1])}return{origin:o.origin,bearing:i,floor:n,box:[s-1.5,c+1.5,0,t],height:Math.max(2.6,l-n+.6)}}function K(e,t){let n={...T,...e??{}},r={...n,...t??{}};return{night:[F(n.ambientSky),F(n.ambientGround)],day:[F(r.ambientSky),F(r.ambientGround)]}}function q(e,t,n={},r,i){let a=z(R(n.seed??L(e)),n.look),o=K(r?.light,r?.daylight),s=e=>({origin:e.origin,bearing:e.bearing,floor:e.floor,box:e.box,height:e.height,look:B(z(a,e.look)),things:(e.things??[]).slice(0,16),ambient:o,panes:[]}),c=(n.boxes??[]).map(s),l=[];for(let e of t){let t=null,n=1/0;for(let r of c){let i=U(r,e);i<n&&(n=i,t=r)}t&&n<.6?t.panes.push(e):l.push(e)}let u=Math.min(...t.map(e=>e.corners[0][1]));for(let e of W(l))c.push({...s(G(e,n.depth??6,i??u-.9)),panes:e});return{name:e,boxes:c.filter(e=>e.panes.length)}}function J(e,t,n){let r=t.windows??[];if(!r.length)return null;let i=Math.min(...r.map(e=>e.at.length===3?e.at[1]:1/0)),a=n??(Number.isFinite(i)?i-.9:0);return q(e,r.map(e=>V(e,a)),t.far,t,n)}var Y={under:0,over:.016};function X(e,t,n,r){let i=e.look,a=(e,r,i,a,o)=>t.set([r,i,a,o],n+e*4);a(0,e.origin[0],e.floor,e.origin[1],e.bearing*Math.PI/180),a(1,e.box[0],e.box[1],e.box[2],e.box[3]),a(2,e.height,r,i.closes,e.things.length),a(3,...i.wall,i.dadoHeight),a(4,...i.dado,i.lamps.drop),a(5,...i.floor,i.lamps.size),a(6,...i.ceiling,i.lamps.reach),a(7,...i.lamps.color,i.lamps.power),a(8,i.lamps.spacing[0],i.lamps.spacing[1],i.daylight,i.dayReach),a(9,...e.ambient.night[0],0),a(10,...e.ambient.night[1],0),a(11,...e.ambient.day[0],0),a(12,...e.ambient.day[1],0),a(13,i.fill,i.lamps.glow,0,0);let o=N(e);a(14,o.mask,o.sill,o.head,i.outside),e.things.forEach((e,t)=>{let[n,r,i,o,s,c]=e.box,l=e.repeat??[1,0],d=new u(e.color);a(16+3*t,n,r,i,o),a(17+3*t,s,c,l[2]===`v`?-l[0]:l[0],l[1]),a(18+3*t,d.r,d.g,d.b,(e.glow??0)+2*(e.pattern===`art`?1:e.pattern===`shelves`?2:0))})}var Z=8;function ie(e,t,n,r,i,a,o){let s=(e,t,n,r,i)=>a.set([t,n,r,i],o+e*4);s(0,...e.eye,e.glass),s(1,...e.right,0),s(2,...e.up,0),s(3,...e.forward,e.texel),s(4,r[0]+e.rect[0],r[1]+e.rect[1],e.rect[2],e.rect[3]),s(5,e.z[0],e.z[1],i,t);let c=n.find(e=>e.name===`day`),l=n.find(e=>e.name===`night`);s(6,...c.tint,c.d),s(7,...l.tint,l.d),s(8,...e.normal,e.angle*Math.PI/180),s(9,...e.across,0),s(10,...e.frustum)}var ae=class{object;rooms=[];tex;data=new Float32Array(256);atlasA;atlasB;constructor(){this.tex=this.makeTexture(1),[this.atlasA,this.atlasB]=this.makeAtlas(1,1,null);let e=k(this.tex,this.atlasA,this.atlasB);this.object=new r(new c,e);let t=this.object;t.name=`far rooms`,t.matrixAutoUpdate=!1,t.userData.caster=!1,t.visible=!1,t.onBeforeRender=()=>M(e),this.mode(`under`)}mode(e){let t=this.object.material,n=e===`over`;this.current!==e&&(this.current=e,t.uniforms.uProud.value=Y[e],t.transparent=n,t.depthWrite=!1,t.blending=n?5:1,this.object.renderOrder=n?1992:1)}current=null;makeTexture(e){this.data=new Float32Array(64*e*4);let n=new o(this.data,64,e,f,t);return n.minFilter=n.magFilter=a,n.generateMipmaps=!1,n.needsUpdate=!0,n}makeAtlas(e,t,n){return[0,1].map(r=>{let s=new o(n?.[r]??new Uint8Array(4),e,t,f,d);return s.minFilter=h,s.magFilter=i,s.generateMipmaps=!!n,n||(s.minFilter=a),s.flipY=!1,s.colorSpace=``,s.needsUpdate=!0,s})}atlasStats(){let e=this.atlasA.image.width,t=this.atlasA.image.height,n=this.rooms.some(e=>e.room.bake);return{size:n?[e,t]:[0,0],bytes:n?Math.round(e*t*4*2*(4/3)):0}}bakeOn(e,t){let n=this.rooms.find(t=>t.room.name===e);if(n?.room.bake&&n.bakeOn!==t){n.bakeOn=t;for(let e=0;e<n.room.bake.file.views.length;e++)this.data[(n.viewRow+e)*64*4+20+2]=+!!t;this.tex.needsUpdate=!0}}bakedIn(e){return this.rooms.find(t=>t.room.name===e)?.room.bake?.file.style??null}names(){return this.rooms.map(e=>e.room.name)}has(e){return this.rooms.some(t=>t.room.name===e)}add(e,t=1){this.rooms=this.rooms.filter(t=>t.room.name!==e.name),this.rooms.push({room:e,show:t,row:0,viewRow:-1,bakeOn:!1,at:[0,0]}),this.rebuild()}remove(e){this.rooms=this.rooms.filter(t=>t.room.name!==e),this.rebuild()}show(e,t){let n=this.rooms.find(t=>t.room.name===e);if(n&&(t=Math.min(1,Math.max(0,t)),t!==n.show)){n.show=t;for(let e=0;e<n.room.boxes.length;e++)this.data[(n.row+e)*64*4+8+1]=t;this.tex.needsUpdate=!0,this.object.visible=this.rooms.some(e=>e.show>0)}}shown(e){return this.rooms.find(t=>t.room.name===e)?.show??0}distance(e,t){let n=this.rooms.find(t=>t.room.name===e),r=1/0;for(let e of n?.room.boxes??[])for(let n of e.panes)for(let e of n.corners)r=Math.min(r,Math.hypot(e[0]-t.x,e[1]-t.y,e[2]-t.z));return r}rebuild(){let e=0;for(let t of this.rooms)t.row=e,e+=t.room.boxes.length;for(let t of this.rooms)t.viewRow=t.room.bake?e:-1,e+=t.room.bake?.file.views.length??0;this.rebuildAtlas(),this.tex.image.height===Math.max(1,e)?this.data.fill(0):(this.tex.dispose(),this.tex=this.makeTexture(Math.max(1,e)),this.object.material.uniforms.uFarRooms.value=this.tex);let t=[],r=[],i=[],a=[],o=[],s=[];for(let e of this.rooms){let n=e.room.bake?.file.views??[];n.forEach((t,r)=>ie(t,n.filter(e=>e.group===t.group).length,e.room.bake.file.layers,e.at,+!!e.bakeOn,this.data,(e.viewRow+r)*64*4)),e.room.boxes.forEach((c,l)=>{let u=e.row+l;X(c,this.data,u*64*4,e.show);for(let l of c.panes){let[c,d,f,p]=l.corners,m=n.findIndex(e=>e.panes.includes(l.id));for(let n of[c,d,f,c,f,p])t.push(...n),r.push(...l.normal),i.push(u),a.push(m>=0?e.viewRow+m:-1),o.push(...l.tint,l.reflect),s.push(l.frost)}})}this.tex.needsUpdate=!0;let l=new c;l.setAttribute(`position`,new n(t,3)),l.setAttribute(`normal`,new n(r,3)),l.setAttribute(`aBox`,new n(i,1)),l.setAttribute(`aView`,new n(a,1)),l.setAttribute(`aGlass`,new n(o,4)),l.setAttribute(`aFrost`,new n(s,1)),l.computeBoundingSphere(),this.object.geometry.dispose(),this.object.geometry=l,this.object.visible=this.rooms.some(e=>e.show>0)}rebuildAtlas(){let e=this.rooms.filter(e=>e.room.bake),t=0;for(let n of e)n.at=[0,t],t+=n.room.bake.size[1]+Z;let n=e.map(e=>`${e.room.name}:${e.room.bake.file.inputs?.hash}`).join(`|`);if(n===this.atlasKey)return;if(this.atlasKey=n,this.atlasA.dispose(),this.atlasB.dispose(),!e.length)[this.atlasA,this.atlasB]=this.makeAtlas(1,1,null);else{let t=Math.max(...e.map(e=>e.room.bake.size[0])),n=e.reduce((e,t)=>e+t.room.bake.size[1],0)+Z*(e.length-1),r=new Uint8Array(t*n*4),i=new Uint8Array(t*n*4);for(let n of e){let{size:e,a,b:o}=n.room.bake,s=n.at[1];for(let n=0;n<e[1];n++)r.set(a.subarray(n*e[0]*4,(n+1)*e[0]*4),(s+n)*t*4),i.set(o.subarray(n*e[0]*4,(n+1)*e[0]*4),(s+n)*t*4)}[this.atlasA,this.atlasB]=this.makeAtlas(t,n,[r,i])}let r=this.object.material.uniforms;r.uBakeA.value=this.atlasA,r.uBakeB.value=this.atlasB,r.uBakeSize.value.set(this.atlasA.image.width,this.atlasA.image.height)}atlasKey=``;dispose(){this.object.geometry.dispose(),this.object.material.dispose(),this.tex.dispose(),this.atlasA.dispose(),this.atlasB.dispose(),this.object.removeFromParent()}},oe={format:2,room:`archbishops-mansion`,style:`line-wash`,size:[663,103],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`d8e3d898cd97c774`,files:43},views:[{panes:[`door`,`parlour-1`,`parlour-2`],group:0,angle:-50,normal:[-.158158,0,-.987414],across:[.987414,0,-.158158],rect:[4,4,217,95],eye:[-1219.762,55,-281.6788],right:[.513541,0,-.858065],up:[0,1,0],forward:[-.858065,0,-.513541],frustum:[-.096719,.264947,-.079167,.079167],glass:30,texel:.05,z:[24.849,45.762]},{panes:[`door`,`parlour-1`,`parlour-2`],group:0,angle:0,normal:[-.158158,0,-.987414],across:[.987414,0,-.158158],rect:[229,4,205,83],eye:[-1240.7592,55,-267.4626],right:[.987414,0,-.158158],up:[0,1,0],forward:[-.158158,0,-.987414],frustum:[-.170833,.170833,-.069167,.069167],glass:30,texel:.05,z:[29.7,46.75]},{panes:[`door`,`parlour-1`,`parlour-2`],group:0,angle:50,normal:[-.158158,0,-.987414],across:[.987414,0,-.158158],rect:[442,4,217,95],eye:[-1265.1462,55,-274.4094],right:[.755853,0,.654741],up:[0,1,0],forward:[.654741,0,-.755853],frustum:[-.264947,.096719,-.079167,.079167],glass:30,texel:.05,z:[24.849,46.139]}]},se={format:2,room:`beretta`,style:`line-wash`,size:[1003,348],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`148cdd0caef5cb48`,files:40},views:[{panes:[`grove-glass`,`grove-clerestory`,`grove-door`,`grove-sidelight`],group:0,angle:-50,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[4,4,334,123],eye:[-1681.7195,62.95,-115.6975],right:[-.512388,0,.858754],up:[0,1,0],forward:[.858754,0,.512388],frustum:[-.139111,.417555,-.1025,.1025],glass:30,texel:.05,z:[23.011,42.246]},{panes:[`grove-glass`,`grove-clerestory`,`grove-door`,`grove-sidelight`],group:0,angle:0,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[346,4,311,98],eye:[-1660.7414,62.95,-129.9419],right:[-.9872,0,.159485],up:[0,1,0],forward:[.159485,0,.9872],frustum:[-.259167,.259167,-.081667,.081667],glass:30,texel:.05,z:[29.744,44.054]},{panes:[`grove-glass`,`grove-clerestory`,`grove-door`,`grove-sidelight`],group:0,angle:50,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[665,4,334,123],eye:[-1636.3451,62.95,-123.0279],right:[-.756733,0,-.653724],up:[0,1,0],forward:[-.653724,0,.756733],frustum:[-.417555,.139111,-.1025,.1025],glass:30,texel:.05,z:[23.011,55.125]},{panes:[`divis-glass-1`,`divis-clerestory`,`divis-glass-2`],group:1,angle:-50,normal:[-.988715,0,.149811],across:[-.149811,0,-.988715],rect:[4,135,313,114],eye:[-1632.0722,62.95,-122.131],right:[-.853696,0,-.520771],up:[0,1,0],forward:[-.520771,0,.853696],frustum:[-.099478,.422189,-.095,.095],glass:30,texel:.05,z:[24.868,54.805]},{panes:[`divis-glass-1`,`divis-clerestory`,`divis-glass-2`],group:1,angle:0,normal:[-.988715,0,.149811],across:[-.149811,0,-.988715],rect:[325,135,209,98],eye:[-1618.0339,62.95,-101.0145],right:[-.149811,0,-.988715],up:[0,1,0],forward:[-.988715,0,.149811],frustum:[-.174167,.174167,-.081667,.081667],glass:30,texel:.05,z:[29.715,63.5]},{panes:[`divis-glass-1`,`divis-clerestory`,`divis-glass-2`],group:1,angle:50,normal:[-.988715,0,.149811],across:[-.149811,0,-.988715],rect:[542,135,313,114],eye:[-1625.1865,62.95,-76.6871],right:[.661102,0,-.750296],up:[0,1,0],forward:[-.750296,0,-.661102],frustum:[-.422189,.099478,-.095,.095],glass:30,texel:.05,z:[24.868,54.97]},{panes:[`sash-1`,`sash-2`,`sash-3`,`sash-4`,`sash-5`,`sash-6`],group:2,angle:-50,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[4,257,264,87],eye:[-1701.6856,62.375,-112.472],right:[-.512388,0,.858754],up:[0,1,0],forward:[.858754,0,.512388],frustum:[-.098488,.341512,-.0725,.0725],glass:30,texel:.05,z:[24.746,50.793]},{panes:[`sash-1`,`sash-2`,`sash-3`,`sash-4`,`sash-5`,`sash-6`],group:2,angle:0,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[276,257,208,76],eye:[-1680.7076,62.375,-126.7163],right:[-.9872,0,.159485],up:[0,1,0],forward:[.159485,0,.9872],frustum:[-.173333,.173333,-.063333,.063333],glass:30,texel:.05,z:[29.7,44.259]},{panes:[`sash-1`,`sash-2`,`sash-3`,`sash-4`,`sash-5`,`sash-6`],group:2,angle:50,normal:[.159485,0,.9872],across:[-.9872,0,.159485],rect:[492,257,264,87],eye:[-1656.3113,62.375,-119.8023],right:[-.756733,0,-.653724],up:[0,1,0],forward:[-.653724,0,.756733],frustum:[-.341512,.098488,-.0725,.0725],glass:30,texel:.05,z:[24.746,40.746]}]},ce={format:2,room:`bi-rite`,style:`line-wash`,size:[893,159],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`0a1a75ddfcf22c57`,files:47},views:[{panes:[`win-n`,`door-n`,`door-s`,`win-s`,`clere-n`,`clere-s`],group:0,angle:-50,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[4,4,329,151],eye:[-1619.1932,61.68,40.4003],right:[.859852,0,.510543],up:[0,1,0],forward:[.510543,0,-.859852],frustum:[-.0998,.448533,-.125833,.125833],glass:30,texel:.05,z:[25.06,47.85]},{panes:[`win-n`,`door-n`,`door-s`,`win-s`,`clere-n`,`clere-s`],group:0,angle:0,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[341,4,211,130],eye:[-1633.4825,61.68,19.4528],right:[.161604,0,.986856],up:[0,1,0],forward:[.986856,0,-.161604],frustum:[-.175833,.175833,-.108333,.108333],glass:30,texel:.05,z:[29.764,58.823]},{panes:[`win-n`,`door-n`,`door-s`,`win-s`,`clere-n`,`clere-s`],group:0,angle:50,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[560,4,329,151],eye:[-1626.6209,61.68,-4.9582],right:[-.652098,0,.758134],up:[0,1,0],forward:[.758134,0,.652098],frustum:[-.448533,.0998,-.125833,.125833],glass:30,texel:.05,z:[25.06,46.69]}]},le={format:2,room:`eddies`,style:`line-wash`,size:[969,275],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`574370f8eac7b83b`,files:37},views:[{panes:[`fulton`],group:0,angle:-50,normal:[-.156434,0,-.987688],across:[.987688,0,-.156434],rect:[4,4,200,78],eye:[-1613.7756,63.745,-214.9895],right:[.515038,0,-.857167],up:[0,1,0],forward:[-.857167,0,-.515038],frustum:[-.080237,.253096,-.065,.065],glass:30,texel:.05,z:[25.336,40.586]},{panes:[`fulton`],group:0,angle:0,normal:[-.156434,0,-.987688],across:[.987688,0,-.156434],rect:[212,4,166,70],eye:[-1634.7976,63.745,-200.81],right:[.987688,0,-.156434],up:[0,1,0],forward:[-.156434,0,-.987688],frustum:[-.138333,.138333,-.058333,.058333],glass:30,texel:.05,z:[29.7,44.167]},{panes:[`fulton`],group:0,angle:50,normal:[-.156434,0,-.987688],across:[.987688,0,-.156434],rect:[386,4,200,78],eye:[-1659.1724,63.745,-207.7993],right:[.75471,0,.656059],up:[0,1,0],forward:[.656059,0,-.75471],frustum:[-.253096,.080237,-.065,.065],glass:30,texel:.05,z:[25.336,40.586]},{panes:[`togo`,`divisadero`],group:1,angle:-50,normal:[.987688,0,-.156434],across:[.156434,0,.987688],rect:[594,4,197,76],eye:[-1659.5517,63.745,-207.4631],right:[.857167,0,.515038],up:[0,1,0],forward:[.515038,0,-.857167],frustum:[-.067529,.260804,-.063333,.063333],glass:30,texel:.05,z:[26.02,39.006]},{panes:[`togo`,`divisadero`],group:1,angle:0,normal:[.987688,0,-.156434],across:[.156434,0,.987688],rect:[799,4,138,70],eye:[-1673.7312,63.745,-228.4851],right:[.156434,0,.987688],up:[0,1,0],forward:[.987688,0,-.156434],frustum:[-.115,.115,-.058333,.058333],glass:30,texel:.05,z:[29.7,42.3]},{panes:[`togo`,`divisadero`],group:1,angle:50,normal:[.987688,0,-.156434],across:[.156434,0,.987688],rect:[4,90,197,76],eye:[-1666.7419,63.745,-252.8599],right:[-.656059,0,.75471],up:[0,1,0],forward:[.75471,0,.656059],frustum:[-.260804,.067529,-.063333,.063333],glass:30,texel:.05,z:[26.02,42.3]},{panes:[`side-divisadero`,`side-fulton`],group:2,angle:-50,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[209,90,263,80],eye:[-1635.299,63.745,-201.232],right:[.970296,0,-.241922],up:[0,1,0],forward:[-.241922,0,-.970296],frustum:[-.101028,.337306,-.066667,.066667],glass:30,texel:.05,z:[24.687,44.167]},{panes:[`side-divisadero`,`side-fulton`],group:2,angle:0,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[480,90,214,69],eye:[-1660.1902,63.745,-206.0703],right:[.809017,0,.587785],up:[0,1,0],forward:[.587785,0,-.809017],frustum:[-.178333,.178333,-.0575,.0575],glass:30,texel:.05,z:[29.7,41.425]},{panes:[`side-divisadero`,`side-fulton`],group:2,angle:50,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[702,90,263,80],eye:[-1672.4836,63.745,-228.2481],right:[.069756,0,.997564],up:[0,1,0],forward:[.997564,0,-.069756],frustum:[-.337306,.101028,-.066667,.066667],glass:30,texel:.05,z:[24.687,42.3]},{panes:[`door`],group:3,angle:-50,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[4,178,133,93],eye:[-1635.7002,63.32,-201.5234],right:[.970296,0,-.241922],up:[0,1,0],forward:[-.241922,0,-.970296],frustum:[-.040297,.181369,-.0775,.0775],glass:30,texel:.05,z:[24.941,43.359]},{panes:[`door`],group:3,angle:0,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[145,178,80,88],eye:[-1660.5915,63.32,-206.3618],right:[.809017,0,.587785],up:[0,1,0],forward:[.587785,0,-.809017],frustum:[-.066667,.066667,-.073333,.073333],glass:30,texel:.05,z:[29.7,38.52]},{panes:[`door`],group:3,angle:50,normal:[.587785,0,-.809017],across:[.809017,0,.587785],rect:[233,178,133,93],eye:[-1672.8848,63.32,-228.5396],right:[.069756,0,.997564],up:[0,1,0],forward:[.997564,0,-.069756],frustum:[-.181369,.040297,-.0775,.0775],glass:30,texel:.05,z:[24.941,40.967]}]},ue={format:2,room:`everlasting`,style:`line-wash`,size:[592,85],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`3c33ec18af0c6cac`,files:45},views:[{panes:[`window-south`,`window-north`],group:0,angle:-50,normal:[-.987441,0,.157986],across:[-.157986,0,-.987441],rect:[4,4,215,77],eye:[-1655.2376,64.43,-263.8169],right:[-.857975,0,-.513691],up:[0,1,0],forward:[-.513691,0,.857975],frustum:[-.068307,.290026,-.064167,.064167],glass:30,texel:.05,z:[26.068,40.38]},{panes:[`window-south`,`window-north`],group:0,angle:0,normal:[-.987441,0,.157986],across:[-.157986,0,-.987441],rect:[227,4,138,70],eye:[-1641.0251,64.43,-242.8172],right:[-.157986,0,-.987441],up:[0,1,0],forward:[-.987441,0,.157986],frustum:[-.115,.115,-.058333,.058333],glass:30,texel:.05,z:[29.708,44.833]},{panes:[`window-south`,`window-north`],group:0,angle:50,normal:[-.987441,0,.157986],across:[-.157986,0,-.987441],rect:[373,4,215,77],eye:[-1647.9761,64.43,-218.4315],right:[.654873,0,-.755739],up:[0,1,0],forward:[-.755739,0,-.654873],frustum:[-.290026,.068307,-.064167,.064167],glass:30,texel:.05,z:[26.068,40.38]}]},de={format:2,room:`green-earth`,style:`line-wash`,size:[987,191],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`2d9a2ebde0279dcb`,files:40},views:[{panes:[`divis-door`,`divis-1`,`divis-2`,`divis-3`],group:0,angle:-50,normal:[.987507,0,-.157572],across:[.157572,0,.987507],rect:[4,4,328,86],eye:[-1671.1925,67.96,-281.1436],right:[.85776,0,.51405],up:[0,1,0],forward:[.51405,0,-.85776],frustum:[-.1135,.433167,-.071667,.071667],glass:30,texel:.05,z:[23.982,44.215]},{panes:[`divis-door`,`divis-1`,`divis-2`,`divis-3`],group:0,angle:0,normal:[.987507,0,-.157572],across:[.157572,0,.987507],rect:[340,4,244,73],eye:[-1685.3962,67.96,-302.1492],right:[.157572,0,.987507],up:[0,1,0],forward:[.987507,0,-.157572],frustum:[-.203333,.203333,-.060833,.060833],glass:30,texel:.05,z:[29.7,51.9]},{panes:[`divis-door`,`divis-1`,`divis-2`,`divis-3`],group:0,angle:50,normal:[.987507,0,-.157572],across:[.157572,0,.987507],rect:[592,4,328,86],eye:[-1678.4349,67.96,-326.5321],right:[-.655189,0,.755465],up:[0,1,0],forward:[.755465,0,.655189],frustum:[-.433167,.1135,-.071667,.071667],glass:30,texel:.05,z:[23.982,44.215]},{panes:[`mcall-1`,`mcall-2`],group:1,angle:-50,normal:[.157572,0,.987507],across:[-.987507,0,.157572],rect:[4,98,337,89],eye:[-1675.3263,67.96,-329.4355],right:[-.51405,0,.85776],up:[0,1,0],forward:[.85776,0,.51405],frustum:[-.130803,.430864,-.074167,.074167],glass:30,texel:.05,z:[23.155,43.547]},{panes:[`mcall-1`,`mcall-2`],group:1,angle:0,normal:[.157572,0,.987507],across:[-.987507,0,.157572],rect:[349,98,289,72],eye:[-1654.3207,67.96,-343.6392],right:[-.987507,0,.157572],up:[0,1,0],forward:[.157572,0,.987507],frustum:[-.240833,.240833,-.06,.06],glass:30,texel:.05,z:[29.7,48.3]},{panes:[`mcall-1`,`mcall-2`],group:1,angle:50,normal:[.157572,0,.987507],across:[-.987507,0,.157572],rect:[646,98,337,89],eye:[-1629.9378,67.96,-336.6779],right:[-.755465,0,-.655189],up:[0,1,0],forward:[-.655189,0,.755465],frustum:[-.430864,.130803,-.074167,.074167],glass:30,texel:.05,z:[23.155,43.46]}]},fe={format:2,room:`lucindas`,style:`line-wash`,size:[509,69],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`3bcf9160dd443d6a`,files:41},views:[{panes:[`window`,`door-left`,`door-right`],group:0,angle:-50,normal:[-1,0,0],across:[0,0,-1],rect:[4,4,187,61],eye:[-1459.3164,62.91,-11.5183],right:[-.766044,0,-.642788],up:[0,1,0],forward:[-.642788,0,.766044],frustum:[-.056066,.2556,-.050833,.050833],glass:30,texel:.05,z:[26.3,38.3]},{panes:[`window`,`door-left`,`door-right`],group:0,angle:0,normal:[-1,0,0],across:[0,0,-1],rect:[199,4,111,57],eye:[-1448.6,62.91,11.4631],right:[0,0,-1],up:[0,1,0],forward:[-1,0,0],frustum:[-.0925,.0925,-.0475,.0475],glass:30,texel:.05,z:[29.745,42.3]},{panes:[`window`,`door-left`,`door-right`],group:0,angle:50,normal:[-1,0,0],across:[0,0,-1],rect:[318,4,187,61],eye:[-1459.3164,62.91,34.4444],right:[.766044,0,-.642788],up:[0,1,0],forward:[-.642788,0,-.766044],frustum:[-.2556,.056066,-.050833,.050833],glass:30,texel:.05,z:[26.3,38.3]}]},pe={format:2,room:`nopa`,style:`line-wash`,size:[913,674],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`396b53ca9c37a4f4`,files:44},views:[{panes:[`D1-low`,`D1-shade`,`D1`,`D2-low`,`D2-shade`,`D2`,`D3`,`door`],group:0,angle:-50,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[4,4,397,145],eye:[-1621.3033,61.78,29.3713],right:[.859852,0,.510543],up:[0,1,0],forward:[.510543,0,-.859852],frustum:[-.105929,.555738,-.120833,.120833],glass:30,texel:.05,z:[24.867,51.056]},{panes:[`D1-low`,`D1-shade`,`D1`,`D2-low`,`D2-shade`,`D2`,`D3`,`door`],group:0,angle:0,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[409,4,226,124],eye:[-1635.5926,61.78,8.4239],right:[.161604,0,.986856],up:[0,1,0],forward:[.986856,0,-.161604],frustum:[-.188333,.188333,-.103333,.103333],glass:30,texel:.05,z:[29.875,59.71]},{panes:[`D1-low`,`D1-shade`,`D1`,`D2-low`,`D2-shade`,`D2`,`D3`,`door`],group:0,angle:50,normal:[.986856,0,-.161604],across:[.161604,0,.986856],rect:[4,157,397,145],eye:[-1628.731,61.78,-15.9872],right:[-.652098,0,.758134],up:[0,1,0],forward:[.758134,0,.652098],frustum:[-.555738,.105929,-.120833,.120833],glass:30,texel:.05,z:[24.867,50.8]},{panes:[`H1`,`H2-frost`,`H2`,`H3-frost`,`H3`,`H4-frost`,`H4`,`H5-frost`,`H5`,`H6-frost`,`H6`,`H7-frost`,`H7`],group:1,angle:-50,normal:[.161604,0,.986856],across:[-.986856,0,.161604],rect:[409,157,500,186],eye:[-1619.8664,61.78,-19.417],right:[-.510543,0,.859852],up:[0,1,0],forward:[.859852,0,.510543],frustum:[-.2097,.623633,-.155,.155],glass:30,texel:.05,z:[19.289,47.307]},{panes:[`H1`,`H2-frost`,`H2`,`H3-frost`,`H3`,`H4-frost`,`H4`,`H5-frost`,`H5`,`H6-frost`,`H6`,`H7-frost`,`H7`],group:1,angle:0,normal:[.161604,0,.986856],across:[-.986856,0,.161604],rect:[4,351,521,125],eye:[-1598.919,61.78,-33.7064],right:[-.986856,0,.161604],up:[0,1,0],forward:[.161604,0,.986856],frustum:[-.434167,.434167,-.104167,.104167],glass:30,texel:.05,z:[29.831,44.495]},{panes:[`H1`,`H2-frost`,`H2`,`H3-frost`,`H3`,`H4-frost`,`H4`,`H5-frost`,`H5`,`H6-frost`,`H6`,`H7-frost`,`H7`],group:1,angle:50,normal:[.161604,0,.986856],across:[-.986856,0,.161604],rect:[4,484,500,186],eye:[-1574.5079,61.78,-26.8447],right:[-.758134,0,-.652098],up:[0,1,0],forward:[-.652098,0,.758134],frustum:[-.623633,.2097,-.155,.155],glass:30,texel:.05,z:[19.289,47.252]}]},me={format:2,room:`polenta`,style:`line-wash`,size:[933,208],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`b65ba979c98a5b03`,files:38},views:[{panes:[`fillmore-glass`],group:0,angle:-50,normal:[-.987106,0,.160071],across:[-.160071,0,-.987106],rect:[4,4,202,91],eye:[-1053.094,48.8,-244.0327],right:[-.859058,0,-.511878],up:[0,1,0],forward:[-.511878,0,.859058],frustum:[-.054755,.281912,-.075833,.075833],glass:30,texel:.05,z:[26.633,43.586]},{panes:[`fillmore-glass`],group:0,angle:0,normal:[-.987106,0,.160071],across:[-.160071,0,-.987106],rect:[214,4,110,85],eye:[-1038.8371,48.8,-223.063],right:[-.160071,0,-.987106],up:[0,1,0],forward:[-.987106,0,.160071],frustum:[-.091667,.091667,-.070833,.070833],glass:30,texel:.05,z:[29.7,48.78]},{panes:[`fillmore-glass`],group:0,angle:50,normal:[-.987106,0,.160071],across:[-.160071,0,-.987106],rect:[332,4,202,91],eye:[-1045.7367,48.8,-198.6627],right:[.653275,0,-.75712],up:[0,1,0],forward:[-.75712,0,-.653275],frustum:[-.281912,.054755,-.075833,.075833],glass:30,texel:.05,z:[26.633,43.586]},{panes:[`grove-glass`,`grove-door`],group:1,angle:-50,normal:[-.165082,0,-.98628],across:[.98628,0,-.165082],rect:[542,4,196,96],eye:[-1046.6404,48.8,-199.5959],right:[.507508,0,-.861647],up:[0,1,0],forward:[-.861647,0,-.507508],frustum:[-.088116,.238551,-.08,.08],glass:30,texel:.05,z:[25.216,41.385]},{panes:[`grove-glass`,`grove-door`],group:1,angle:0,normal:[-.165082,0,-.98628],across:[.98628,0,-.165082],rect:[746,4,183,85],eye:[-1067.5373,48.8,-185.2327],right:[.98628,0,-.165082],up:[0,1,0],forward:[-.165082,0,-.98628],frustum:[-.1525,.1525,-.070833,.070833],glass:30,texel:.05,z:[29.7,43.586]},{panes:[`grove-glass`,`grove-door`],group:1,angle:50,normal:[-.165082,0,-.98628],across:[.98628,0,-.165082],rect:[4,108,196,96],eye:[-1091.9724,48.8,-192.0082],right:[.760429,0,.649422],up:[0,1,0],forward:[.649422,0,-.760429],frustum:[-.238551,.088116,-.08,.08],glass:30,texel:.05,z:[25.216,41.385]}]},he={format:2,room:`the-mill`,style:`line-wash`,size:[919,111],layers:[{name:`night`,hour:22.5,d:0,tint:[.96875,.9375,1.375]},{name:`day`,hour:12.5,d:1,tint:[.9375,1,1.1875]}],renderer:`ANGLE (Mesa, Vulkan 1.4.318 (llvmpipe (LLVM 20.1.2 256 bits) (0x00000000)), llvmpipe)`,inputs:{hash:`6b82119b716ee7df`,files:46},views:[{panes:[`bay-south`,`bay-north`,`transom`,`door-south`,`door-north`],group:0,angle:-50,normal:[.992546,0,-.121869],across:[.121869,0,.992546],rect:[4,4,376,103],eye:[-1650.537,63.345,-146.4959],right:[.838671,0,.544639],up:[0,1,0],forward:[.544639,0,-.838671],frustum:[-.07012,.556547,-.085833,.085833],glass:30,texel:.05,z:[26.112,53.167]},{panes:[`bay-south`,`bay-north`,`transom`,`door-south`,`door-north`],group:0,angle:0,normal:[.992546,0,-.121869],across:[.121869,0,.992546],rect:[388,4,143,93],eye:[-1663.9742,63.345,-167.9999],right:[.121869,0,.992546],up:[0,1,0],forward:[.992546,0,-.121869],frustum:[-.119167,.119167,-.0775,.0775],glass:30,texel:.05,z:[29.746,64.443]},{panes:[`bay-south`,`bay-north`,`transom`,`door-south`,`door-north`],group:0,angle:50,normal:[.992546,0,-.121869],across:[.121869,0,.992546],rect:[539,4,376,103],eye:[-1656.1384,63.345,-192.1159],right:[-.681998,0,.731354],up:[0,1,0],forward:[.731354,0,.681998],frustum:[-.556547,.07012,-.085833,.085833],glass:30,texel:.05,z:[26.112,52.274]}]},ge=new URL(`archbishops-mansion.day-dt56O6aG.jpg`,import.meta.url).href,_e=new URL(`archbishops-mansion.depth-tVhTXykC.png`,import.meta.url).href,ve=new URL(`archbishops-mansion.night-Ck4E3Ihi.jpg`,import.meta.url).href,ye=new URL(`beretta.day-DuTU80WJ.jpg`,import.meta.url).href,be=new URL(`beretta.depth-D6xEwWLi.png`,import.meta.url).href,xe=new URL(`beretta.night-HBnxDhwa.jpg`,import.meta.url).href,Se=new URL(`bi-rite.day-4rrDFK8T.jpg`,import.meta.url).href,Ce=new URL(`bi-rite.depth-GZQUSIPR.png`,import.meta.url).href,we=new URL(`bi-rite.night-D2ZZfc_Y.jpg`,import.meta.url).href,Te=new URL(`eddies.day-B98liQTm.jpg`,import.meta.url).href,Ee=new URL(`eddies.depth-D_n_tobJ.png`,import.meta.url).href,De=new URL(`eddies.night-CSzRsoiI.jpg`,import.meta.url).href,Oe=new URL(`everlasting.day-CcLP3Vfs.jpg`,import.meta.url).href,ke=new URL(`everlasting.depth-C6-IkVzf.png`,import.meta.url).href,Ae=new URL(`everlasting.night-DatHYYbb.jpg`,import.meta.url).href,je=new URL(`green-earth.day-dBiLqFHb.jpg`,import.meta.url).href,Me=new URL(`green-earth.depth-lCi699XO.png`,import.meta.url).href,Ne=new URL(`green-earth.night-BrWPFfGv.jpg`,import.meta.url).href,Pe=new URL(`lucindas.day-Duhb4fci.jpg`,import.meta.url).href,Fe=new URL(`lucindas.depth-CJA9Ot5M.png`,import.meta.url).href,Ie=new URL(`lucindas.night-Bhak98UP.jpg`,import.meta.url).href,Le=new URL(`nopa.day-CD8Va0d9.jpg`,import.meta.url).href,Re=new URL(`nopa.depth-Bph3pRpl.png`,import.meta.url).href,ze=new URL(`nopa.night-BL84Uv_W.jpg`,import.meta.url).href,Be=new URL(`polenta.day-CjI2bMlc.jpg`,import.meta.url).href,Ve=new URL(`polenta.depth-PG_sAOia.png`,import.meta.url).href,He=new URL(`polenta.night-CVsqBNKR.jpg`,import.meta.url).href,Q=new URL(`the-mill.day-CAUz6OSX.jpg`,import.meta.url).href,Ue=new URL(`the-mill.depth-B7pmapXq.png`,import.meta.url).href,We=new URL(`the-mill.night-4yCmmc7n.jpg`,import.meta.url).href,Ge=Object.assign({"./baked/archbishops-mansion.json":oe,"./baked/beretta.json":se,"./baked/bi-rite.json":ce,"./baked/eddies.json":le,"./baked/everlasting.json":ue,"./baked/green-earth.json":de,"./baked/lucindas.json":fe,"./baked/nopa.json":pe,"./baked/polenta.json":me,"./baked/the-mill.json":he}),Ke=Object.assign({"./baked/archbishops-mansion.day.jpg":ge,"./baked/archbishops-mansion.depth.png":_e,"./baked/archbishops-mansion.night.jpg":ve,"./baked/beretta.day.jpg":ye,"./baked/beretta.depth.png":be,"./baked/beretta.night.jpg":xe,"./baked/bi-rite.day.jpg":Se,"./baked/bi-rite.depth.png":Ce,"./baked/bi-rite.night.jpg":we,"./baked/eddies.day.jpg":Te,"./baked/eddies.depth.png":Ee,"./baked/eddies.night.jpg":De,"./baked/everlasting.day.jpg":Oe,"./baked/everlasting.depth.png":ke,"./baked/everlasting.night.jpg":Ae,"./baked/green-earth.day.jpg":je,"./baked/green-earth.depth.png":Me,"./baked/green-earth.night.jpg":Ne,"./baked/lucindas.day.jpg":Pe,"./baked/lucindas.depth.png":Fe,"./baked/lucindas.night.jpg":Ie,"./baked/nopa.day.jpg":Le,"./baked/nopa.depth.png":Re,"./baked/nopa.night.jpg":ze,"./baked/polenta.day.jpg":Be,"./baked/polenta.depth.png":Ve,"./baked/polenta.night.jpg":He,"./baked/the-mill.day.jpg":Q,"./baked/the-mill.depth.png":Ue,"./baked/the-mill.night.jpg":We});function qe(e){let t=Ge[`./baked/${e}.json`];return t&&t.format===2?t:null}async function $(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);let n=await createImageBitmap(await t.blob(),{colorSpaceConversion:`none`,premultiplyAlpha:`none`}),r=typeof OffscreenCanvas==`function`?new OffscreenCanvas(n.width,n.height):Object.assign(document.createElement(`canvas`),{width:n.width,height:n.height}),i=r.getContext(`2d`,{willReadFrequently:!0});return i.drawImage(n,0,0),n.close(),{w:r.width,h:r.height,data:i.getImageData(0,0,r.width,r.height).data}}async function Je(e){let t=qe(e);if(!t||typeof createImageBitmap!=`function`||typeof fetch!=`function`)return null;let n=t=>Ke[`./baked/${e}.${t}`];if(!n(`night.jpg`)||!n(`day.jpg`)||!n(`depth.png`))return null;let[r,i,a]=await Promise.all([$(n(`night.jpg`)),$(n(`day.jpg`)),$(n(`depth.png`))]),[o,s]=t.size;for(let[t,n]of[[`night`,r],[`day`,i],[`depth`,a]])if(n.w!==o||n.h!==s)throw Error(`far room ${e}: its ${t} image is ${n.w}x${n.h}, not ${o}x${s}`);let c=new Uint8Array(o*s*4),l=new Uint8Array(o*s*4);for(let e=0;e<o*s*4;e+=4)c[e]=r.data[e],c[e+1]=r.data[e+1],c[e+2]=r.data[e+2],c[e+3]=a.data[e],l[e]=i.data[e],l[e+1]=i.data[e+1],l[e+2]=i.data[e+2],l[e+3]=a.data[e+1];return{file:t,size:[o,s],a:c,b:l}}var Ye=(e,t,n)=>{if(t<=e)return+(n>=t);let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Xe=ee({name:`far-rooms`,description:`Rooms seen through their windows from afar (src/far-room/): each room the scene's doors lead to that has windows, drawn on its glass by its far version and handed over to the real room close up. Off unless look.farRooms.on.`,consumes:`region`,zones:[`near`],caster:!1,budget:{trianglesPerKm2:{near:10}},params:{rooms:[],shops:[]},build(e,t){let n=new ae;for(let r of t.shops){let t=r.panes.map((t,n)=>V({id:`${r.name}-${n+1}`,at:[t.at[0],e.terrain.heightAt(t.at[0],t.at[1])+t.sill,t.at[1]],facing:t.facing,width:t.width,height:t.height},0));n.add(q(r.name,t,r.far??{}),0)}let r=n.names(),i=!1;e.system({name:`far-rooms`,ready(e){let i=t.rooms.length?[...t.rooms]:[...new Set((e.desc.doors??[]).map(e=>e.to.scene))];return Promise.all(i.map(e=>Promise.all([D(e),Je(e).catch(t=>(console.warn(`far-rooms: ${e}'s bake did not load (its scene's far version instead): ${t}`),null))]).then(([t,i])=>{let a=t.interior?J(e,t.interior):null;a&&(n.add(i?{...a,bake:i}:a,0),r=n.names())},()=>{})))},frame(e,t){if(!g.farRooms.on){n.object.visible=!1;return}i||=(e.scene.add(n.object),!0);let a=g.farRooms.handover;n.mode(a===`engine`?`under`:`over`);let o=a===`engine`?E(e):[],s=te();for(let e of r){n.bakeOn(e,g.farRooms.baked&&n.bakedIn(e)===s);let r=o.find(t=>t.scene===e);n.show(e,a===`engine`?r?.real&&r.share>=1?0:1:a===`always`?1:Ye(g.farRooms.near,g.farRooms.far,n.distance(e,t)))}n.object.visible=r.some(e=>n.shown(e)>0)}})}});export{Xe as default};