// Nordgrain layered veneer column lamp: a parametric model of the standing lamp.
// Four radial plywood supports slot into a plywood disc at each end. The supports
// alternate between wide and narrow sections: four big veneer bands wrap the wide
// sections and three small bands sit in the notches between them. A light tube runs
// up the middle. The shade stands on a round wooden foot on a base of stacked cork.
// Model units are centimetres; the lamp group is scaled to metres for the scene and exports.
import * as THREE from "./vendor/three.min.js";
import { fmm, xmlEsc, laserNewSerial, laserCleanSerial, laserFitText, laserOffset } from "./laser-text.js";

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const fmt = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);
const cmTxt = v => fmt(v).replace(/\.0$/, ""); // 16 -> "16", 9.5 -> "9.5"
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

// ---------- materials and limits ----------
const VENEER_MAX_LEN = 120; // veneer sheet length, cm
const VENEER_MAX_H = 12; // veneer sheet height, cm
const SLIT_CLEAR = 0.1; // the small band's top edge stops this far short of the end of its slit, cm
const LEDGE_H = 0.2; // the ledge under each big band is 2 mm tall
const LIP = 0.5; // each support reaches this far under the disc, inside the disc slot, cm
const TUBE_R = 1.25; // light tube radius, cm
const CORE_R = 3.5; // supports start this far from the centre, room for the light tube, cm
const CORK_LAYER = 1.25; // thickness of one cork disc, cm

// Foot: material, then colour within it. grain: wood texture tinted by the colour
const FOOT_MATS = {
  wood: { label: "Wood", colors: {
    beech: { label: "Beech", color: 0xf1d3b3, rough: .62, grain: true },
    oak: { label: "Oak", color: 0xdcb07a, rough: .6, grain: true },
    walnut: { label: "Walnut", color: 0x8a5a38, rough: .55, grain: true },
    black: { label: "Black stain", color: 0x3a332d, rough: .55, grain: true }
  } },
  metal: { label: "Metal", colors: {
    steel: { label: "Steel", color: 0xc4c7ca, rough: .32, metal: 1 },
    black: { label: "Black", color: 0x262626, rough: .42, metal: .6 },
    brass: { label: "Brass", color: 0xcfa75e, rough: .3, metal: 1 },
    copper: { label: "Copper", color: 0xc07a52, rough: .32, metal: 1 }
  } },
  painted: { label: "Painted", colors: {
    white: { label: "White", color: 0xeeeae4, rough: .5 },
    black: { label: "Black", color: 0x232323, rough: .5 },
    sage: { label: "Sage", color: 0x8fa596, rough: .5 },
    clay: { label: "Clay", color: 0xb8644a, rough: .5 }
  } }
};
const BASE_MATS = {
  cork: { label: "Cork" },
  concrete: { label: "Concrete" },
  wood: { label: "Oak" }
};

const VENEERS = {
  light: { label: "Light", url: "images/veneer-light.jpg", cmH: 10.5, glow: 1, rough: .7 },
  dark: { label: "Dark", url: "images/veneer-dark.jpg", cmH: 9.8, glow: .4, rough: .66 }
};
const FINISHES = {
  birch: { label: "Birch", color: 0xffffff, map: true, rough: .78 },
  black: { label: "Black", color: 0x3a3631, map: true, rough: .7 },
  white: { label: "White", color: 0xefe9e9, map: false, rough: .6 }
};
const ROOMS = {
  day: { bg: 0xd5ddd7, hemi: 1.05, sun: 2.1, env: .75, glow: .62, tube: .55 },
  evening: { bg: 0x131816, hemi: .04, sun: 0, env: .05, glow: 1.5, tube: .75 }
};
// Bands from the top: big, small, big, small, big, small, big
const BAND_KINDS = ["big", "small", "big", "small", "big", "small", "big"];
const BAND_NAMES = ["Big 1", "Small 1", "Big 2", "Small 2", "Big 3", "Small 3", "Big 4"];
const PRESETS = {
  light: { label: "All light", bands: ["light", "light", "light", "light", "light", "light", "light"] },
  smallDark: { label: "Dark small", bands: ["light", "dark", "light", "dark", "light", "dark", "light"] },
  bigDark: { label: "Dark big", bands: ["dark", "light", "dark", "light", "dark", "light", "dark"] },
  dark: { label: "All dark", bands: ["dark", "dark", "dark", "dark", "dark", "dark", "dark"] }
};

const SIZE_DEFAULTS = { bigD: 16, bigH: 9.5, smallD: 13, smallH: 5, footH: 24, footD: 5.5, baseD: 14, baseH: 5 };
const cfg = {
  ...SIZE_DEFAULTS,
  bands: [...PRESETS.light.bands],
  veneer: .55, // mm
  overlap: 20, // mm
  ply: 3, // mm
  lap: 5, // mm the big bands reach past the wide sections over the small bands
  frame: "birch",
  footMat: "wood",
  footColor: "beech",
  baseMat: "cork",
  lightOn: true,
  brightness: .7,
  kelvin: 2700,
  room: "day",
  plySheet: "610x610", // laser stock sheet, or "custom" with plySheetW x plySheetH cm
  plySheetW: 61,
  plySheetH: 61,
  kerf: .15, // mm
  marks: true, // engrave the serial on support 1
  serial: laserNewSerial()
};
const view = { explode: 0, hideBands: false, spin: false };

// Largest band diameter whose band (circumference at mid-veneer plus the seam overlap) fits the veneer length
const maxBandD = () => Math.floor(((VENEER_MAX_LEN - cfg.overlap / 10) / Math.PI - cfg.veneer / 10) * 2) / 2;

// The range of each size control, given the other sizes
function limits() {
  const big = maxBandD();
  return {
    bigD: [12, big],
    bigH: [Math.max(3, cfg.lap / 10 + 1.5), VENEER_MAX_H],
    smallD: [7, Math.min(big, cfg.bigD) - 2], // the wide sections reach at least 1 cm past the notches
    smallH: [Math.max(3, cfg.lap / 10 + 1.5), VENEER_MAX_H], // keep at least 1.5 cm of the small band clear of the big bands
    footH: [5, 120],
    footD: [2, Math.min(10, cfg.baseD - 2)],
    baseD: [8, 40],
    baseH: [1, 10]
  };
}

function fitSizes() {
  // Order matters: the small band depends on the big one, the foot on the base
  for (const key of ["bigD", "bigH", "smallD", "smallH", "baseD", "baseH", "footD", "footH"]) {
    const [lo, hi] = limits()[key], el = $("#" + key);
    el.min = lo, el.max = hi, cfg[key] = clamp(cfg[key], lo, hi), el.value = cfg[key];
  }
}

// ---------- geometry ----------
function layout(c = cfg) {
  const t = c.ply / 10, vt = c.veneer / 10, ov = c.overlap / 10;
  const R = c.bigD / 2, r = c.smallD / 2;
  const rIn = Math.min(CORE_R, r - 1.5); // supports are at least 1.5 cm deep at the notches
  const rJ = rIn + LIP;
  // The bands overlap so no light gets out between them. A big band stands on a ledge at the
  // bottom of its wide section and reaches lap above it, over the small band above. A small band
  // stands on the step at the bottom of its notch and its top edge reaches lap up into slits in
  // the wide section above, behind the big band there.
  const lap = c.lap / 10;
  const slitW = Math.max(.12, vt + .06), slitD = lap + SLIT_CLEAR;
  const ledgeOut = vt + .1; // the ledge reaches 1 mm past the veneer
  const wide = LEDGE_H + c.bigH - lap, notch = c.smallH - lap;
  // Sections of a support from the bottom up
  const sections = [];
  let y = 0;
  BAND_KINDS.slice().reverse().forEach((kind, n) => {
    const h = kind === "big" ? wide : notch;
    sections.push({ kind, y0: y, y1: y + h, xo: kind === "big" ? R : r, band: BAND_KINDS.length - 1 - n }), y += h;
  });
  const L = y; // support length
  const y0 = c.baseH + c.footH; // shade bottom above the floor
  const bands = sections.map(s => {
    const big = s.kind === "big", h = big ? c.bigH : c.smallH, yBot = y0 + s.y0 + (big ? LEDGE_H : 0);
    return { i: s.band, kind: s.kind, r: s.xo, h, yBot, yTop: yBot + h, len: 2 * Math.PI * (s.xo + vt / 2) + ov, vt, ov };
  }).sort((a, b) => a.i - b.i);
  // The top big band stands lap above the top disc
  return { t, vt, ov, R, r, rIn, rJ, L, y0, lap, slitW, slitD, ledgeOut, sections, bands, total: y0 + L + lap, finAngles: [0, 1, 2, 3].map(k => k * Math.PI / 2) };
}

// Support outline in its own plane: x = distance from the centre, y = height from the shade bottom
function finOutline(g) {
  const { sections: s, rIn, rJ, L, t, r, R, slitW, slitD, ledgeOut } = g, p = [[rJ, 0]];
  s.forEach((sec, n) => {
    if (sec.kind === "big") {
      // Slit for the top edge of the small band below, then the ledge the big band stands on
      n > 0 && p.push([r, sec.y0 + slitD], [r + slitW, sec.y0 + slitD], [r + slitW, sec.y0]);
      p.push([R + ledgeOut, sec.y0], [R + ledgeOut, sec.y0 + LEDGE_H], [R, sec.y0 + LEDGE_H], [R, sec.y1]);
    } else p.push([r, sec.y0], [r, sec.y1]);
  });
  p.push([rJ, L], [rJ, L - t], [rIn, L - t], [rIn, t], [rJ, t]);
  // Drop repeated points where neighbouring sections have the same depth
  return p.filter((q, n) => !n || q[0] !== p[n - 1][0] || q[1] !== p[n - 1][1]);
}

// Disc outline in the disc plane, with four slots from the rim in to rJ, one per support
function discOutline(g, seg = 160) {
  const { R, rJ, t } = g, w = t / 2, d = Math.asin(w / R), pts = [];
  // Shape space: a support at world angle a points along (sin a, -cos a), i.e. shape angle a - pi/2
  const slots = g.finAngles.map(a => a - Math.PI / 2).sort((a, b) => a - b);
  slots.forEach((b, k) => {
    const dir = [Math.cos(b), Math.sin(b)], perp = [-Math.sin(b), Math.cos(b)];
    pts.push([Math.cos(b - d) * R, Math.sin(b - d) * R]);
    pts.push([dir[0] * rJ - perp[0] * w, dir[1] * rJ - perp[1] * w]);
    pts.push([dir[0] * rJ + perp[0] * w, dir[1] * rJ + perp[1] * w]);
    pts.push([Math.cos(b + d) * R, Math.sin(b + d) * R]);
    const next = (slots[(k + 1) % 4] + (k === 3 ? 2 * Math.PI : 0)) - d, from = b + d;
    const n = Math.max(2, Math.ceil((next - from) / (2 * Math.PI) * seg));
    for (let j = 1; j < n; j++) {
      const a = from + (next - from) * j / n;
      pts.push([Math.cos(a) * R, Math.sin(a) * R]);
    }
  });
  return pts;
}

const CABLE_HOLE = .6; // radius of the cable hole in the bottom disc, cm

// A veneer band: an open strip wrapped once round plus the seam overlap, stepping out by
// one veneer thickness over the overlap so the outer end lies on top of the inner end
function bandGeometry(b, seamAngle) {
  const circ = 2 * Math.PI * b.r, len = circ + b.ov, n = Math.ceil(len / .3);
  const start = seamAngle - b.ov / b.r / 2, pos = [], nor = [], uv = [], idx = [];
  for (const [row, y] of [[1, b.yTop], [0, b.yBot]]) {
    for (let p = 0; p <= n; p++) {
      const s = len * p / n, a = start + s / b.r, rr = b.r + b.vt / 2 + .04 + b.vt * smooth(circ - 1.2, circ, s); // .04 keeps the support edges from showing through
      pos.push(Math.sin(a) * rr, y, Math.cos(a) * rr), nor.push(Math.sin(a), 0, Math.cos(a)), uv.push(s / len, row);
    }
  }
  for (let p = 0; p < n; p++) idx.push(p, p + n + 1, p + 1, p + n + 1, p + n + 2, p + 1);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  return geo;
}

// ---------- renderer and scene ----------
const stage = $("#stage"), canvas = $("#c");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
} catch (e) {
  $("#webglError").hidden = false;
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, .05, 20);
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true, controls.dampingFactor = .08, controls.minDistance = .3, controls.maxDistance = 6, controls.autoRotateSpeed = 1.2;
controls.maxPolarAngle = Math.PI / 2 - .02; // stay above the floor

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new THREE.RoomEnvironment(), .04).texture;
const hemi = new THREE.HemisphereLight(0xffffff, 0x9aa69e, 1);
const sun = new THREE.DirectionalLight(0xfff0e6, 2);
sun.position.set(1.4, 3, 1.8), sun.castShadow = true, sun.shadow.mapSize.set(2048, 2048), sun.shadow.bias = -4e-4, sun.shadow.radius = 6;
Object.assign(sun.shadow.camera, { left: -1, right: 1, top: 1.6, bottom: -.4, near: .5, far: 8 });
sun.target.position.set(0, .4, 0);
scene.add(hemi, sun, sun.target);

const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0xc9d1cb, roughness: .95 }));
floor.rotation.x = -Math.PI / 2, floor.receiveShadow = true;
scene.add(floor);

// Three lights along the tube; the middle one casts shadows through the gaps between bands
const tubeLights = [0, 1, 2].map(k => {
  const l = new THREE.PointLight(0xffb36b, 1, 0, 1);
  if (k === 1) l.castShadow = true, l.shadow.mapSize.set(1024, 1024), l.shadow.camera.near = .02, l.shadow.bias = -.003, l.shadow.radius = 3;
  scene.add(l);
  return l;
});

const lamp = new THREE.Group();
lamp.name = "Nordgrain veneer column lamp";
lamp.scale.setScalar(.01);
scene.add(lamp);

// ---------- textures and materials ----------
const loadImage = url => new Promise((ok, fail) => {
  const img = new Image();
  img.onload = () => ok(img), img.onerror = fail, img.src = url;
});
const images = {};

function imageTexture(img, kind = "image/jpeg") {
  const tex = new THREE.Texture(img);
  tex.colorSpace = THREE.SRGBColorSpace, tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy(), tex.userData.mimeType = kind, tex.needsUpdate = true;
  return tex;
}

// Cork: warm brown with darker and lighter granules
function corkTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#b48a5e", g.fillRect(0, 0, 512, 512);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let n = 0; n < 9000; n++) {
    const shade = rnd();
    g.fillStyle = shade < .5 ? `rgba(92,58,30,${.25 + rnd() * .4})` : `rgba(222,186,140,${.2 + rnd() * .35})`;
    g.beginPath(), g.arc(rnd() * 512, rnd() * 512, .6 + rnd() * 2.6, 0, Math.PI * 2), g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace, tex.wrapS = tex.wrapT = THREE.RepeatWrapping, tex.userData.mimeType = "image/png";
  return tex;
}

// Concrete: grey with soft blotches and small air pores
function concreteTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#a9a8a2", g.fillRect(0, 0, 512, 512);
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let n = 0; n < 260; n++) {
    const x = rnd() * 512, y = rnd() * 512, r = 20 + rnd() * 70, light = rnd() < .5;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, light ? "rgba(200,199,193,.22)" : "rgba(120,119,114,.2)"), gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr, g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  for (let n = 0; n < 7000; n++) {
    g.fillStyle = rnd() < .7 ? `rgba(70,70,66,${.15 + rnd() * .3})` : `rgba(235,234,228,${.15 + rnd() * .3})`;
    g.fillRect(rnd() * 512, rnd() * 512, 1 + rnd() * 1.5, 1 + rnd() * 1.5);
  }
  for (let n = 0; n < 380; n++) {
    g.fillStyle = `rgba(55,55,52,${.35 + rnd() * .4})`;
    g.beginPath(), g.arc(rnd() * 512, rnd() * 512, .8 + rnd() * 2.2, 0, Math.PI * 2), g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace, tex.wrapS = tex.wrapT = THREE.RepeatWrapping, tex.userData.mimeType = "image/png";
  return tex;
}

// Wood with the grain running up: the light veneer photo turned on its side and greyed,
// so the material colour sets the species
const GRAIN_W = 10.5, GRAIN_H = 10.5 * 2048 / 581; // cm of wood the texture shows across and up
function grainTexture(img) {
  const c = document.createElement("canvas");
  c.width = img.height, c.height = img.width;
  const g = c.getContext("2d");
  g.filter = "grayscale(1) brightness(1.45) contrast(1.15)";
  g.translate(c.width, 0), g.rotate(Math.PI / 2), g.drawImage(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace, tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy(), tex.userData.mimeType = "image/jpeg";
  return tex;
}

// Veneer is lit from inside; dim the glow on the inner faces as the pendant does
function insideDamp(m) {
  m.onBeforeCompile = s => {
    s.fragmentShader = s.fragmentShader.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
	totalEmissiveRadiance *= ( gl_FrontFacing ? 1.0 : 0.12 );`);
  };
  m.customProgramCacheKey = () => "insideFaceDamp";
  return m;
}

const bandMats = BAND_KINDS.map((k, i) => insideDamp(new THREE.MeshStandardMaterial({ name: `Veneer band ${i + 1}`, side: THREE.DoubleSide, roughness: .7 })));
const plyMat = new THREE.MeshStandardMaterial({ name: "Plywood", roughness: .78 });
const footMat = new THREE.MeshStandardMaterial({ name: "Foot" });
const baseMat = new THREE.MeshStandardMaterial({ name: "Base" });
const tex = {}; // cork, concrete, footGrain, baseGrain
const tubeMat = new THREE.MeshStandardMaterial({ name: "Light tube, opal", color: 0xf4f1ea, roughness: .35 });
const capMat = new THREE.MeshStandardMaterial({ name: "Tube caps", color: 0x1c1d1d, roughness: .5 });

// ---------- build ----------
let geo = layout(), parts = null;

function disposeLamp() {
  lamp.traverse(o => o.geometry && o.geometry.dispose());
  lamp.clear();
}

function bandTexture(b) {
  const v = VENEERS[cfg.bands[b.i]], img = images[cfg.bands[b.i]], tex = imageTexture(img);
  const wCm = v.cmH * img.width / img.height;
  tex.repeat.set(b.len / wCm, Math.min(1, b.h / v.cmH));
  tex.offset.set((b.i * .37) % 1, (1 - Math.min(1, b.h / v.cmH)) * ((b.i * .61) % 1));
  return tex;
}

function build() {
  fitSizes();
  geo = layout();
  disposeLamp();
  parts = { bands: [], fins: [] };
  const g = geo;

  const bands = new THREE.Group();
  bands.name = "Veneer bands";
  g.bands.forEach(b => {
    const m = new THREE.Mesh(bandGeometry(b, Math.PI), bandMats[b.i]);
    m.name = `Band ${b.i + 1} (${BAND_NAMES[b.i].toLowerCase()})`, m.castShadow = true, m.userData.band = b;
    bands.add(m), parts.bands.push(m);
  });

  const fins = new THREE.Group();
  fins.name = "Supports";
  const finGeo = new THREE.ExtrudeGeometry(new THREE.Shape(finOutline(g).map(([x, y]) => new THREE.Vector2(x, y))), { depth: g.t, bevelEnabled: false, curveSegments: 1 });
  finGeo.translate(0, 0, -g.t / 2);
  g.finAngles.forEach((a, k) => {
    const m = new THREE.Mesh(finGeo, plyMat);
    m.name = `Support ${k + 1}`, m.rotation.y = a - Math.PI / 2, m.position.y = g.y0, m.castShadow = m.receiveShadow = true, m.userData.angle = a;
    fins.add(m), parts.fins.push(m);
  });

  const disc = withHole => {
    const shape = new THREE.Shape(discOutline(g).map(([x, y]) => new THREE.Vector2(x, y)));
    if (withHole) {
      const h = new THREE.Path();
      h.absarc(0, 0, CABLE_HOLE, 0, Math.PI * 2, true), shape.holes.push(h);
    }
    const dg = new THREE.ExtrudeGeometry(shape, { depth: g.t, bevelEnabled: false, curveSegments: 48 });
    dg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(dg, plyMat);
    m.castShadow = m.receiveShadow = true;
    return m;
  };
  const top = disc(false), bottom = disc(true);
  top.name = "Disc (top)", bottom.name = "Disc (bottom)";
  parts.top = top, parts.bottom = bottom;

  const light = new THREE.Group();
  light.name = "Light tube";
  const tubeLen = g.L - 2 * g.t - 2;
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(TUBE_R, TUBE_R, tubeLen, 40), tubeMat);
  tube.name = "Light tube, opal", tube.position.y = g.y0 + g.L / 2;
  const capGeo = new THREE.CylinderGeometry(TUBE_R + .15, TUBE_R + .15, 1, 40);
  const capB = new THREE.Mesh(capGeo, capMat), capT = new THREE.Mesh(capGeo, capMat);
  capB.name = "Tube cap (bottom)", capT.name = "Tube cap (top)";
  capB.position.y = g.y0 + g.t + .5, capT.position.y = g.y0 + g.L - g.t - .5;
  light.add(tube, capB, capT);
  parts.light = light, parts.tubeLen = tubeLen;

  const foot = new THREE.Mesh(new THREE.CylinderGeometry(cfg.footD / 2, cfg.footD / 2, cfg.footH, 64), footMat);
  foot.name = "Foot", foot.position.y = cfg.baseH + cfg.footH / 2, foot.castShadow = foot.receiveShadow = true;

  // Cork comes in discs stacked to height; concrete and oak are one piece
  const base = new THREE.Group(), cork = cfg.baseMat === "cork";
  base.name = `Base, ${BASE_MATS[cfg.baseMat].label.toLowerCase()}`;
  const layers = cork ? Math.max(1, Math.round(cfg.baseH / CORK_LAYER)) : 1, lh = cfg.baseH / layers;
  for (let n = 0; n < layers; n++) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(cfg.baseD / 2, cfg.baseD / 2, lh - (cork ? .04 : 0), 72), baseMat);
    m.name = cork ? `Cork disc ${n + 1}` : base.name, m.position.y = lh * n + lh / 2, m.castShadow = m.receiveShadow = true;
    base.add(m);
  }
  parts.layers = layers;

  lamp.add(bands, fins, top, bottom, light, foot, base);
  showBands(!view.hideBands), applyExplode(), applyLook(), syncOutputs(), renderElev(), renderCutList(), syncLaser();
}

function showBands(on) {
  parts && parts.bands.forEach(m => m.visible = on);
}

function applyExplode() {
  if (!parts) return;
  const e = view.explode, g = geo;
  parts.bands.forEach(m => {
    const b = m.userData.band;
    m.position.y = (3 - b.i) * 3 * e, m.scale.setScalar(1), m.position.x = 0;
  });
  parts.fins.forEach(m => {
    const a = m.userData.angle;
    m.position.set(Math.sin(a) * 7 * e, g.y0, Math.cos(a) * 7 * e);
  });
  parts.top.position.y = g.y0 + g.L - g.t + 16 * e;
  parts.bottom.position.y = g.y0 - 16 * e;
  parts.light.position.y = 0;
  const ys = [.2, .5, .8].map(f => (g.y0 + g.L * f) * .01);
  tubeLights.forEach((l, k) => l.position.set(0, ys[k], 0));
  lamp.updateMatrixWorld(true);
}

// Black body colour for the light, as in the pendant
function kelvinColor(k) {
  const t = k / 100;
  let r, gr, b;
  if (t <= 66) r = 255, gr = 99.4708025861 * Math.log(t) - 161.1195681661, b = t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  else r = 329.698727446 * (t - 60) ** -.1332047592, gr = 288.1221695283 * (t - 60) ** -.0755148492, b = 255;
  return new THREE.Color().setRGB(clamp(r, 0, 255) / 255, clamp(gr, 0, 255) / 255, clamp(b, 0, 255) / 255, THREE.SRGBColorSpace);
}

function applyLook() {
  const room = ROOMS[cfg.room], on = cfg.lightOn, col = kelvinColor(cfg.kelvin), n = cfg.brightness;
  const glow = on ? room.glow * (.15 + n) : 0;
  scene.background = new THREE.Color(room.bg);
  stage.dataset.room = cfg.room;
  hemi.intensity = room.hemi, sun.intensity = room.sun, scene.environmentIntensity = room.env;
  floor.material.color.set(cfg.room === "day" ? 0xc9d1cb : 0x2a2622);
  if (parts) parts.bands.forEach(m => {
    const b = m.userData.band, v = VENEERS[cfg.bands[b.i]], mat = bandMats[b.i];
    mat.map && mat.map.dispose();
    mat.map = bandTexture(b), mat.emissiveMap = mat.map, mat.roughness = v.rough;
    mat.emissive.copy(col), mat.emissiveIntensity = glow * v.glow * .9;
    mat.name = `${v.label} veneer, band ${b.i + 1}`, mat.needsUpdate = true;
  });
  const fin = FINISHES[cfg.frame];
  plyMat.color.set(fin.color), plyMat.map = fin.map ? plyTex : null, plyMat.roughness = fin.rough;
  plyMat.emissive.copy(col), plyMat.emissiveIntensity = on ? (cfg.frame === "black" ? .05 : .16) * room.glow * n : 0;
  plyMat.name = `${fin.label} plywood, ${fmt(cfg.ply)} mm`, plyMat.needsUpdate = true;
  const foot = FOOT_MATS[cfg.footMat].colors[cfg.footColor];
  footMat.color.set(foot.color), footMat.roughness = foot.rough, footMat.metalness = foot.metal || 0;
  footMat.map = foot.grain ? tex.footGrain : null;
  tex.footGrain.repeat.set(Math.PI * cfg.footD / GRAIN_W, cfg.footH / GRAIN_H);
  footMat.name = `Foot, ${footLabel().toLowerCase()}`, footMat.needsUpdate = true;
  const bm = cfg.baseMat;
  baseMat.color.set(bm === "wood" ? 0xdcb07a : 0xffffff), baseMat.roughness = bm === "wood" ? .6 : bm === "concrete" ? .92 : .95;
  baseMat.map = bm === "cork" ? tex.cork : bm === "concrete" ? tex.concrete : tex.baseGrain;
  [tex.cork, tex.concrete].forEach(t => t.repeat.set(Math.PI * cfg.baseD / 30, cfg.baseH / 10));
  tex.baseGrain.repeat.set(Math.PI * cfg.baseD / GRAIN_W, cfg.baseH / GRAIN_H);
  baseMat.name = `Base, ${BASE_MATS[bm].label.toLowerCase()}`, baseMat.needsUpdate = true;
  tubeMat.emissive.copy(col), tubeMat.emissiveIntensity = on ? room.tube * (.6 + 2 * n) : 0;
  tubeLights.forEach(l => {
    l.color.copy(col), l.intensity = on ? (cfg.room === "day" ? .25 : .5) * (.15 + n) : 0;
    l.visible = on;
  });
}

// ---------- panel ----------
const SLIDERS = {
  bigD: v => `${cmTxt(v)} cm`, bigH: v => `${cmTxt(v)} cm`, smallD: v => `${cmTxt(v)} cm`, smallH: v => `${cmTxt(v)} cm`,
  lap: v => `${v} mm`, footH: v => `${cmTxt(v)} cm`, footD: v => `${cmTxt(v)} cm`, baseD: v => `${cmTxt(v)} cm`, baseH: v => `${cmTxt(v)} cm`
};

function syncOutputs() {
  const g = geo;
  Object.entries(SLIDERS).forEach(([k, f]) => {
    $("#" + k).value = cfg[k], $(`#${k}Out`).textContent = f(cfg[k]);
  });
  $("#veneer").value = cfg.veneer, $("#veneerOut").textContent = `${fmt(cfg.veneer, 2)} mm`;
  $("#overlap").value = cfg.overlap, $("#overlapOut").textContent = `${cfg.overlap} mm`;
  $("#ply").value = cfg.ply, $("#plyOut").textContent = `${fmt(cfg.ply)} mm`;
  $("#dimLine").textContent = `${cmTxt(Math.max(cfg.bigD, cfg.baseD))} cm wide, ${cmTxt(g.total)} cm high`;
  $("#lede").textContent = `Seven bands of thin veneer on four ${fmt(cfg.ply)} mm plywood supports between two plywood discs. The bands overlap by ${cfg.lap} mm so no light gets out between them. The shade is ${cmTxt(g.L + g.lap)} cm tall and stands on a ${cmTxt(cfg.footH)} cm ${footLabel().toLowerCase()} foot on ${/^[aeiou]/i.test(BASE_MATS[cfg.baseMat].label) ? "an" : "a"} ${BASE_MATS[cfg.baseMat].label.toLowerCase()} base.`;
  $("#overlapHint").textContent = `Band lengths include the ${cfg.overlap} mm seam overlap and ${fmt(Math.PI * cfg.veneer, 1)} mm extra for wrapping ${fmt(cfg.veneer, 2)} mm veneer around the supports. The widest band can be ${cmTxt(maxBandD())} cm across.`;
  $("#resetSize").disabled = Object.keys(SIZE_DEFAULTS).every(k => cfg[k] === SIZE_DEFAULTS[k]);
}

Object.keys(SLIDERS).forEach(k => $("#" + k).addEventListener("input", e => {
  cfg[k] = +e.target.value, scheduleBuild();
}));
$("#veneer").addEventListener("input", e => {
  cfg.veneer = +e.target.value, scheduleBuild();
});
$("#overlap").addEventListener("input", e => {
  cfg.overlap = +e.target.value, scheduleBuild();
});
$("#ply").addEventListener("input", e => {
  cfg.ply = +e.target.value, scheduleBuild();
});
$("#resetSize").addEventListener("click", () => {
  Object.assign(cfg, SIZE_DEFAULTS), build(), frameView(currentView);
});

let pending = false;
function scheduleBuild() {
  pending || (pending = true, requestAnimationFrame(() => {
    pending = false, build();
  }));
}

// Elevation picker: one row per band, as tall as its section and as wide as the band
function renderElev() {
  const el = $("#elev"), g = geo, scale = 250 / g.bands.reduce((a, b) => a + b.h, 0);
  el.innerHTML = "";
  g.bands.forEach(b => {
    const ven = cfg.bands[b.i], other = ven === "light" ? "dark" : "light";
    const row = document.createElement("div");
    row.className = "elev-row", row.style.height = `${b.h * scale}px`;
    const chip = document.createElement("button");
    chip.type = "button", chip.className = "band-chip", chip.dataset.veneer = ven, chip.dataset.i = b.i;
    chip.style.width = `${b.r / g.R * 100}%`;
    chip.style.backgroundImage = `url(${VENEERS[ven].url})`;
    chip.setAttribute("aria-label", `${BAND_NAMES[b.i]} band, ${VENEERS[ven].label.toLowerCase()} veneer. Switch to ${other}.`);
    chip.addEventListener("click", () => {
      cfg.bands[b.i] = other, applyLook(), renderElev(), renderCutList();
      const again = $(`#elev [data-i="${b.i}"]`);
      again && again.focus();
    });
    const col = document.createElement("div");
    col.className = "chip-col", col.style.alignItems = "center", col.appendChild(chip);
    const label = document.createElement("div");
    label.className = "band-label";
    label.innerHTML = `<span>${BAND_NAMES[b.i]}</span><span class="band-veneer">${VENEERS[ven].label}</span>`;
    row.append(col, label), el.appendChild(row);
  });
  $$("#presets .chip").forEach(c => c.setAttribute("aria-pressed", String(PRESETS[c.dataset.preset].bands.every((v, n) => v === cfg.bands[n]))));
}

Object.entries(PRESETS).forEach(([key, p]) => {
  const c = document.createElement("button");
  c.type = "button", c.className = "chip", c.dataset.preset = key, c.textContent = p.label;
  c.addEventListener("click", () => {
    cfg.bands = [...p.bands], applyLook(), renderElev(), renderCutList();
  });
  $("#presets").appendChild(c);
});

function renderCutList() {
  const g = geo, rows = [], tally = { light: 0, dark: 0 };
  // Group bands of the same kind and veneer
  const groups = new Map();
  g.bands.forEach(b => {
    const ven = cfg.bands[b.i], key = `${b.kind}|${ven}`;
    groups.has(key) ? groups.get(key).n++ : groups.set(key, { b, ven, n: 1 });
    tally[ven] += b.len;
  });
  [...groups.values()].sort((a, b) => (a.b.kind === "big" ? 0 : 1) - (b.b.kind === "big" ? 0 : 1)).forEach(({ b, ven, n }) => {
    rows.push([`${b.kind === "big" ? "Big" : "Small"} band, ${ven} veneer`, n, `${fmt(b.len)} × ${fmt(b.h)} cm`]);
  });
  rows.push([`Support, ${fmt(cfg.ply)} mm plywood`, 4, `${fmt(g.L)} × ${fmt(g.R + g.ledgeOut - g.rIn)} cm`]);
  rows.push([`Disc, ${fmt(cfg.ply)} mm plywood`, 2, `Ø ${fmt(cfg.bigD)} cm`]);
  rows.push(["Light tube", 1, `Ø ${fmt(TUBE_R * 2)} × ${fmt(parts.tubeLen)} cm`]);
  rows.push([`Foot, ${footLabel().toLowerCase()}`, 1, `Ø ${fmt(cfg.footD)} × ${fmt(cfg.footH)} cm`]);
  rows.push(cfg.baseMat === "cork" ? ["Base, cork disc", parts.layers, `Ø ${fmt(cfg.baseD)} × ${fmt(cfg.baseH / parts.layers)} cm`]
    : [`Base, ${BASE_MATS[cfg.baseMat].label.toLowerCase()}`, 1, `Ø ${fmt(cfg.baseD)} × ${fmt(cfg.baseH)} cm`]);
  const tb = $("#cutList tbody");
  tb.innerHTML = "";
  rows.forEach(([part, qty, size]) => {
    const tr = document.createElement("tr"), th = document.createElement("th");
    th.scope = "row", th.textContent = part;
    const q = document.createElement("td"), s = document.createElement("td");
    q.textContent = qty, s.textContent = size, tr.append(th, q, s), tb.appendChild(tr);
  });
  const total = [];
  tally.light && total.push(`${fmt(tally.light / 100, 2)} m of light`), tally.dark && total.push(`${fmt(tally.dark / 100, 2)} m of dark`);
  $("#veneerTotal").textContent = `Veneer strip needed: ${total.join(" and ")}. Every band fits a ${VENEER_MAX_LEN} × ${VENEER_MAX_H} cm veneer sheet.`;
}

// ---------- light and room ----------
const lightBtn = $("#lightOn");
function syncLight() {
  lightBtn.setAttribute("aria-checked", String(cfg.lightOn)), $("#lightState").textContent = cfg.lightOn ? "On" : "Off";
  $("#lightControls").classList.toggle("is-off", !cfg.lightOn);
  $("#brightnessOut").textContent = `${Math.round(cfg.brightness * 100)}%`, $("#kelvinOut").textContent = `${cfg.kelvin} K`;
}
lightBtn.addEventListener("click", () => {
  cfg.lightOn = !cfg.lightOn, syncLight(), applyLook();
});
$("#brightness").addEventListener("input", e => {
  cfg.brightness = +e.target.value, syncLight(), applyLook();
});
$("#kelvin").addEventListener("input", e => {
  cfg.kelvin = +e.target.value, syncLight(), applyLook();
});

function segGroup(sel, key) {
  const el = $(sel), sync = () => $$("button", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.value === cfg[key])));
  $$("button", el).forEach(b => b.addEventListener("click", () => {
    cfg[key] = b.dataset.value, sync(), applyLook();
  }));
  sync();
}
segGroup("#room", "room");
segGroup("#frame", "frame");

function footLabel() {
  const m = cfg.footMat, c = FOOT_MATS[m].colors[cfg.footColor].label;
  return m === "wood" ? `${c} wood` : m === "metal" ? `${c} metal` : `Painted ${c.toLowerCase()}`;
}

// Foot material, then the colours that material comes in
function renderFootColors() {
  $$("#footMat button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.value === cfg.footMat)));
  const el = $("#footColor");
  el.innerHTML = "";
  Object.entries(FOOT_MATS[cfg.footMat].colors).forEach(([key, c]) => {
    const b = document.createElement("button");
    b.type = "button", b.className = "chip swatch-chip", b.dataset.value = key, b.setAttribute("aria-pressed", String(key === cfg.footColor));
    b.innerHTML = `<span class="swatch" style="background:#${c.color.toString(16).padStart(6, "0")}"></span>${c.label}`;
    b.addEventListener("click", () => {
      cfg.footColor = key, renderFootColors(), applyLook(), renderCutList();
    });
    el.appendChild(b);
  });
}
$$("#footMat button").forEach(b => b.addEventListener("click", () => {
  cfg.footMat = b.dataset.value, cfg.footColor = Object.keys(FOOT_MATS[cfg.footMat].colors)[0];
  renderFootColors(), applyLook(), renderCutList();
}));
renderFootColors();
$$("#baseMat button").forEach(b => b.addEventListener("click", () => {
  cfg.baseMat = b.dataset.value, $$("#baseMat button").forEach(x => x.setAttribute("aria-pressed", String(x === b))), build();
}));
$$("#baseMat button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.value === cfg.baseMat)));

// ---------- view ----------
let currentView = "front";
function frameView(name) {
  currentView = name;
  $$("#views button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.view === name)));
  const g = geo, H = g.total * .01, shadeMid = (g.y0 + g.L / 2) * .01, w = Math.max(cfg.bigD, cfg.baseD) * .01;
  const fit = (h, ww) => Math.max(h / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), ww / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / camera.aspect) * 1.25;
  if (name === "shade") {
    const d = fit(g.L * .01, g.R * .02);
    controls.target.set(0, shadeMid, 0), camera.position.set(d * .94, shadeMid + d * .12, d * .34);
  } else if (name === "above") {
    const d = fit(g.L * .01, w) * .9;
    controls.target.set(0, shadeMid, 0), camera.position.set(.001, shadeMid + d, .001);
  } else {
    // Aim a little low and leave room so the toolbar doesn't cover the base
    const d = fit(H * 1.12, w);
    controls.target.set(0, H * .44, 0), camera.position.set(d * .94, H * .44 + d * .1, d * .34);
  }
  controls.update();
}
$$("#views button").forEach(b => b.addEventListener("click", () => frameView(b.dataset.view)));
$("#hideBands").addEventListener("change", e => {
  view.hideBands = e.target.checked, showBands(!view.hideBands);
});
$("#explode").addEventListener("input", e => {
  view.explode = +e.target.value, applyExplode();
});
$("#spin").addEventListener("change", e => {
  view.spin = e.target.checked, controls.autoRotate = view.spin;
});

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false), camera.aspect = w / h, camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);

// ---------- toast and downloads ----------
let toastTimer;
function toast(msg, kind = "ok") {
  const t = $("#toast");
  t.textContent = msg, t.dataset.kind = kind, t.classList.add("show");
  clearTimeout(toastTimer), toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}
function save(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob), a.download = name, document.body.appendChild(a), a.click(), a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
const baseName = () => `nordgrain-veneer-column-${Math.round(cfg.bigD * 10)}x${Math.round(geo.total * 10)}mm`;

function exportModel(binary) {
  const e = view.explode, buttons = $$("[data-export]");
  view.explode = 0, applyExplode(), showBands(true), buttons.forEach(b => b.disabled = true);
  lamp.userData = { lampConfig: structuredClone(cfg), generator: "Nordgrain veneer column lamp configurator", units: "metres" };
  const done = () => {
    view.explode = e, applyExplode(), showBands(!view.hideBands), buttons.forEach(b => b.disabled = false);
  };
  new THREE.GLTFExporter().parse(lamp, out => {
    const name = `${baseName()}.${binary ? "glb" : "gltf"}`;
    save(binary ? new Blob([out], { type: "model/gltf-binary" }) : new Blob([JSON.stringify(out)], { type: "model/gltf+json" }), name);
    done(), toast(`Downloaded ${name}`);
  }, err => {
    done(), console.error(err), toast("Export failed. Try the other format, or reload the page and export again.", "error");
  }, { binary, onlyVisible: true, maxTextureSize: 2048 });
}
$$("[data-export]").forEach(b => b.addEventListener("click", () => exportModel(b.dataset.export === "glb")));

// ---------- laser file: plywood supports and discs, in mm ----------
// Same conventions as the pendant: red hairline cuts, black filled engraving, one layer per
// stock sheet, outlines offset by half the kerf so the parts come out at their true size.
const LASER = { margin: 6, gap: 6, sheetGap: 60, cutColor: "#FF0000", cutWidth: .01, engraveColor: "#000000" };
const PLY_SHEETS = {
  bed: { label: "Laser bed, 121.9 × 91.4 cm", w: 1219.2, h: 914.4 },
  "610x610": { label: "61 × 61 cm (24 × 24 in)", w: 609.6, h: 609.6 },
  "610x457": { label: "61 × 45.7 cm (24 × 18 in)", w: 609.6, h: 457.2 },
  "610x305": { label: "61 × 30.5 cm (24 × 12 in)", w: 609.6, h: 304.8 },
  "305x610": { label: "30.5 × 61 cm (12 × 24 in)", w: 304.8, h: 609.6 },
  "305x305": { label: "30.5 × 30.5 cm (12 × 12 in)", w: 304.8, h: 304.8 },
  "600x600": { label: "60 × 60 cm", w: 600, h: 600 },
  "600x400": { label: "60 × 40 cm", w: 600, h: 400 },
  "600x300": { label: "60 × 30 cm", w: 600, h: 300 },
  custom: { label: "Custom size" }
};
const cm1 = v => fmt(v / 10).replace(/\.0$/, ""); // mm -> "61" or "45.7" (cm)
const sheetSize = () => cfg.plySheet === "custom" ? { w: cfg.plySheetW * 10, h: cfg.plySheetH * 10 } : { w: PLY_SHEETS[cfg.plySheet].w, h: PLY_SHEETS[cfg.plySheet].h };

// Each part: cut outlines in its own frame with the bounding box at the origin, plus any engraving
function laserParts() {
  const g = geo, k = cfg.kerf / 2, parts = [];
  const frame = (outer, extra = {}) => {
    const o = laserOffset(outer, k), x0 = Math.min(...o.map(p => p[0])), y0 = Math.min(...o.map(p => p[1]));
    return { cut: [o.map(([x, y]) => [x - x0, y - y0])], x0, y0, w: Math.max(...o.map(p => p[0])) - x0, h: Math.max(...o.map(p => p[1])) - y0, holes: [], texts: [], ...extra };
  };
  // Supports: length along x, depth from the centre along y
  const fin = finOutline(g).map(([x, y]) => [y * 10, (x - g.rIn) * 10]);
  const serial = laserCleanSerial(cfg.serial), low = g.sections[0];
  for (let n = 1; n <= 4; n++) {
    const p = frame(fin, { id: `support-${n}`, title: `Support ${n}` });
    // The serial goes on support 1, along the bottom wide section, inside the shade
    n === 1 && cfg.marks && serial && p.texts.push({ str: serial, cx: (low.y0 + low.y1) * 5 - p.x0, cy: (g.R - g.rIn) * 5 - p.y0, maxW: (low.y1 - low.y0) * 10 - 16, cap: 4 });
    parts.push(p);
  }
  const disc = discOutline(g).map(([x, y]) => [x * 10, -y * 10]);
  for (const [name, hole] of [["top", false], ["bottom", true]]) {
    const p = frame(disc, { id: `disc-${name}`, title: `Disc, ${name}` });
    hole && p.holes.push({ cx: -p.x0, cy: -p.y0, r: CABLE_HOLE * 10 - k }); // a hole cut shrinks the hole
    parts.push(p);
  }
  return parts;
}

// Shelf packing onto as many stock sheets as needed; a part turns 90° only if it doesn't fit as drawn
function laserPlan() {
  const S = sheetSize(), m = LASER.margin, gp = LASER.gap, sheets = [];
  let sh = null, x = 0, y = 0, rowH = 0;
  const newSheet = () => {
    sh = { w: S.w, h: S.h, placed: [] }, sheets.push(sh), x = m, y = m, rowH = 0;
  };
  for (const p of laserParts()) {
    const opts = [[p.w, p.h, false], [p.h, p.w, true]].filter(([w, h]) => w <= S.w - 2 * m && h <= S.h - 2 * m).slice(0, 1);
    if (!opts.length) return { size: S, sheets: [], problem: `${p.title} is ${cm1(p.w)} × ${cm1(p.h)} cm and doesn't fit on a ${cm1(S.w)} × ${cm1(S.h)} cm sheet. Pick a bigger sheet.` };
    sh || newSheet();
    for (let tries = 0; tries < 2; tries++) {
      const here = opts.find(([w, h]) => x + w <= S.w - m && y + h <= S.h - m);
      const below = !here && opts.find(([w, h]) => y + rowH + gp + h <= S.h - m && m + w <= S.w - m);
      if (here || below) {
        below && (y += rowH + gp, x = m, rowH = 0);
        const [w, h, rot] = here || below;
        sh.placed.push({ p, x, y, w, h, rot }), x += w + gp, rowH = Math.max(rowH, h);
        break;
      }
      newSheet();
    }
  }
  return { size: S, sheets };
}

function laserSheetSvg(sheet, idx, ox) {
  const id = `sheet-${idx + 1}`, cut = [], eng = [];
  for (const { p, x, y, rot } of sheet.placed) {
    // Turning 90° clockwise: (u, v) -> (h - v, u), with h the part's unturned height
    const at = (u, v) => rot ? [ox + x + p.h - v, y + u] : [ox + x + u, y + v];
    p.cut.forEach(o => cut.push(`      <path id="${id}-${p.id}" d="${o.map((q, n) => `${n ? "L" : "M"}${at(...q).map(fmm).join(" ")}`).join("")}Z" fill="none" stroke="${LASER.cutColor}" stroke-width="${LASER.cutWidth}"/>`));
    p.holes.forEach(h => {
      const [cx, cy] = at(h.cx, h.cy);
      cut.unshift(`      <circle id="${id}-${p.id}-hole" cx="${fmm(cx)}" cy="${fmm(cy)}" r="${fmm(h.r)}" fill="none" stroke="${LASER.cutColor}" stroke-width="${LASER.cutWidth}"/>`);
    });
    p.texts.forEach(t => {
      const [cx, cy] = at(t.cx, t.cy), d = laserFitText(t.str, cx, cy, t.maxW, t.cap, rot ? 90 : 0);
      d && eng.push(`      <path d="${d}" fill="${LASER.engraveColor}" stroke="none"/>`);
    });
  }
  const layer = (lid, label, body) => body.length ? `    <g id="${id}-${lid}" inkscape:groupmode="layer" inkscape:label="${label}">\n${body.join("\n")}\n    </g>\n` : "";
  // Inner cuts (holes) come first so parts don't drop out before their holes are cut
  return `  <g id="${id}" inkscape:groupmode="layer" inkscape:label="${xmlEsc(`${idx + 1} Plywood ${fmt(cfg.ply)} mm, ${cm1(sheet.w)} × ${cm1(sheet.h)} cm`)}">\n${layer("engrave", "Engrave (serial)", eng)}${layer("cut", "Cut", cut)}  </g>`;
}

function laserSvg(plan, which = null) {
  const list = which == null ? plan.sheets.map((s, n) => [s, n]) : [[plan.sheets[which], which]], offs = [];
  let W = 0;
  list.forEach(([s], k) => {
    offs.push(W), W += s.w + (k < list.length - 1 ? LASER.sheetGap : 0);
  });
  const H = Math.max(...list.map(([s]) => s.h)), serial = laserCleanSerial(cfg.serial);
  const meta = {
    generator: "Nordgrain veneer column lamp configurator", serial, created: new Date().toISOString(), units: "mm",
    cut: { fill: "none", stroke: LASER.cutColor, strokeWidth_mm: LASER.cutWidth },
    engrave: { fill: LASER.engraveColor, stroke: "none", content: cfg.marks && serial ? "serial number on support 1" : "none" },
    plywood_mm: cfg.ply, plywoodSheet_mm: [plan.size.w, plan.size.h], kerf_mm: cfg.kerf,
    joint_mm: { discSlotWidth: cfg.ply, discSlotDepth: +((geo.R - geo.rJ) * 10).toFixed(2), bandSlit: [+(geo.slitW * 10).toFixed(2), +(geo.slitD * 10).toFixed(2)], ledge: [LEDGE_H * 10, +(geo.ledgeOut * 10).toFixed(2)] },
    veneer: "not included", lampConfig: cfg
  };
  const title = which == null ? "all sheets" : `sheet ${which + 1} of ${plan.sheets.length}`;
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Nordgrain layered veneer column lamp, serial ${serial}. Laser cutting file, 1:1 in mm.
     Each sheet is a layer the size of its stock sheet, with sub-layers Engrave (serial, filled text, no stroke)
     and Cut (fill none, ${LASER.cutWidth} mm stroke). Outlines are already offset by half the kerf (${fmt(cfg.kerf, 2)} mm).
     Veneer bands, the foot and the base are not included. -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="${fmm(W)}mm" height="${fmm(H)}mm" viewBox="0 0 ${fmm(W)} ${fmm(H)}">
  <title>${xmlEsc(`${serial} Nordgrain layered veneer column lamp, ${title}`)}</title>
  <metadata id="nordgrain-lamp"><![CDATA[${JSON.stringify(meta)}]]></metadata>
${list.map(([s, n], k) => laserSheetSvg(s, n, offs[k])).join("\n")}
</svg>
`;
}

const laserFileName = (plan, which = null) => `${baseName()}-${laserCleanSerial(cfg.serial)}${which == null ? "-laser" : `-sheet-${which + 1}`}.svg`;
function laserDownload(which = null) {
  const plan = laserPlan();
  if (plan.problem) return toast(plan.problem, "error");
  const name = laserFileName(plan, which);
  save(new Blob([laserSvg(plan, which)], { type: "image/svg+xml" }), name), toast(`Downloaded ${name}`);
}

Object.entries(PLY_SHEETS).forEach(([key, s]) => {
  const o = document.createElement("option");
  o.value = key, o.textContent = s.label, $("#plySheet").appendChild(o);
});

function syncLaser() {
  const plan = laserPlan(), g = geo, n = plan.sheets.length;
  $("#plySheet").value = cfg.plySheet, $("#plyCustom").hidden = cfg.plySheet !== "custom";
  document.activeElement !== $("#plySheetW") && ($("#plySheetW").value = cfg.plySheetW);
  document.activeElement !== $("#plySheetH") && ($("#plySheetH").value = cfg.plySheetH);
  $("#kerf").value = cfg.kerf, $("#kerfOut").textContent = `${fmt(cfg.kerf, 2)} mm`;
  document.activeElement !== $("#serial") && ($("#serial").value = cfg.serial), $("#marks").checked = cfg.marks;
  const layout = plan.problem || `Plywood: ${n} sheet${n > 1 ? "s" : ""} of ${cm1(plan.size.w)} × ${cm1(plan.size.h)} cm.`;
  const note = $("#laserNote");
  note.textContent = `${layout} The disc slots are ${fmt(cfg.ply)} mm wide and ${fmt((g.R - g.rJ) * 10, 0)} mm deep; each support has a ${fmt(LIP * 10, 0)} × ${fmt(cfg.ply)} mm notch at both ends that hooks under its disc. Each big band stands on a ${fmt(LEDGE_H * 10, 0)} mm ledge that reaches ${fmt(g.ledgeOut * 10)} mm past the support, and the small bands' top edges go into ${fmt(g.slitW * 10)} × ${fmt(g.slitD * 10, 0)} mm slits.`;
  note.dataset.kind = plan.problem ? "error" : "";
  $("#laserAll").disabled = !!plan.problem;
  const chips = $("#laserSheets");
  chips.innerHTML = "";
  plan.sheets.forEach((s, k) => {
    const b = document.createElement("button");
    b.type = "button", b.className = "chip", b.textContent = `${k + 1}. Plywood ${fmt(cfg.ply)} mm`;
    b.title = `${s.placed.map(q => q.p.title).join(", ")}. Download as its own file.`;
    b.addEventListener("click", () => laserDownload(k)), chips.appendChild(b);
  });
}

$("#plySheet").addEventListener("change", e => {
  cfg.plySheet = e.target.value, syncLaser();
});
["W", "H"].forEach(d => {
  const el = $("#plySheet" + d), lim = d === "W" ? 121.9 : 91.4;
  el.addEventListener("input", () => {
    const v = parseFloat(el.value);
    Number.isFinite(v) && (cfg["plySheet" + d] = Math.round(clamp(v, 10, lim) * 10) / 10, syncLaser());
  });
  el.addEventListener("change", () => {
    el.value = cfg["plySheet" + d], syncLaser();
  });
});
$("#kerf").addEventListener("input", e => {
  cfg.kerf = +e.target.value, syncLaser();
});
$("#marks").addEventListener("change", e => {
  cfg.marks = e.target.checked, syncLaser();
});
$("#serial").addEventListener("input", e => {
  cfg.serial = laserCleanSerial(e.target.value), syncLaser();
});
$("#serial").addEventListener("change", e => {
  cfg.serial || (cfg.serial = laserNewSerial()), e.target.value = cfg.serial, syncLaser();
});
$("#newSerial").addEventListener("click", () => {
  cfg.serial = laserNewSerial(), $("#serial").value = cfg.serial, syncLaser();
});
$("#laserAll").addEventListener("click", () => laserDownload(null));

// ---------- start ----------
let plyTex = null;
function frame() {
  controls.update(), renderer.render(scene, camera), requestAnimationFrame(frame);
}
Promise.all(["light", "dark", "ply"].map(k => loadImage(k === "ply" ? "images/veneer-ply.jpg" : VENEERS[k].url).then(img => images[k] = img))).then(() => {
  plyTex = imageTexture(images.ply), plyTex.repeat.set(1 / 22, 1 / 7.5);
  tex.cork = corkTexture(), tex.concrete = concreteTexture(), tex.footGrain = grainTexture(images.light), tex.baseGrain = tex.footGrain.clone(), tex.baseGrain.needsUpdate = true;
  $("#brightness").value = cfg.brightness, $("#kelvin").value = cfg.kelvin, syncLight();
  resize(), build(), frameView("front");
  document.body.classList.add("ready");
  requestAnimationFrame(frame);
  window.__column = { cfg, view, build, layout: () => geo, laserPlan, laserSvg };
}).catch(err => {
  console.error(err), toast("The veneer textures failed to load. Reload the page.", "error");
});
