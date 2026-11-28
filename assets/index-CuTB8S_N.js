const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browser-fHKjpQMd.js","./three.core-CMmUIUzP.js","./physics-T3MAyT-x.js","./registry-B3MTjCpm.js","./system-Co24joyu.js","./types-CB6Dacmf.js","./builder-DA6owUhM.js","./uniforms-Bhz7fZ2N.js","./geom-BgfF7bWU.js","./signals-CGawy0RO.js","./crowd-Cp1qmjF2.js","./skin-BSFu2WXi.js","./source-C9X6zBW2.js","./poses-C0Jvvh_U.js","./rng-BVZPdspY.js","./paint-B2wJ_iH6.js","./kit-G_mORq1U.js","./net-C78giojd.js","./routes-iGxmTAj0.js","./fleet-KvR21HmC.js","./robotaxi-BMYMtEV4.js","./kit-BYVmFDaT.js","./model-Dh--QUIu.js","./font-CtHiwbF9.js","./dsp-CF-b_zG-.js","./data-B_jGo1HE.js","./geo-DOSvPEsb.js","./settings-BroNqkDz.js","./preload-helper-DclECHGd.js"])))=>i.map(i=>d[i]);
import{c as e,f as t,h as n,i as r,m as i,p as a,r as o,s,t as c}from"./builder-DA6owUhM.js";import{$t as l,A as u,An as d,B as f,C as p,Cn as m,D as h,Dn as g,E as _,En as v,F as y,Fn as b,G as x,Gt as S,H as C,Ht as w,J as T,K as E,Kt as D,L as O,M as k,Mn as A,Nn as ee,O as j,On as M,P as N,Pn as P,Q as te,Qt as ne,R as F,Sn as I,Tn as re,U as L,Ut as ie,V as R,Vt as ae,W as oe,Wt as z,X as B,Y as se,Z as V,_ as H,_n as ce,a as le,b as ue,bn as de,cn as fe,d as pe,dt as me,en as he,et as ge,f as _e,fn as ve,g as ye,gn as be,h as xe,hn as Se,i as Ce,in as we,jn as Te,k as Ee,kn as De,l as Oe,ln as ke,m as Ae,mn as je,n as Me,nt as Ne,o as Pe,on as Fe,ot as Ie,p as U,q as Le,qt as Re,r as ze,rt as W,sn as Be,tn as G,tt as K,u as q,un as Ve,ut as He,v as Ue,vn as We,w as Ge,wn as Ke,xn as qe,y as Je,yn as J,z as Ye}from"./three.core-CMmUIUzP.js";import{c as Xe,d as Ze,f as Qe,l as Y,t as X,u as $e}from"./uniforms-Bhz7fZ2N.js";import{a as et,c as tt,i as nt,l as rt,n as it,t as at,u as ot}from"./materials-SOi59nxP.js";import{C as st,D as ct,E as lt,O as ut,S as dt,T as ft,_ as pt,a as mt,b as ht,c as gt,g as _t,h as vt,i as yt,l as bt,m as xt,n as St,o as Ct,p as wt,s as Tt,t as Et,u as Dt,v as Ot,w as kt,x as At,y as jt}from"./rooms-C5JIgs41.js";import{b as Mt,c as Nt,d as Pt,f as Ft,l as It,m as Lt,o as Rt,p as zt,s as Bt,u as Vt}from"./textures-CcCyLauz.js";import{t as Ht}from"./physics-T3MAyT-x.js";import{n as Ut,r as Wt,t as Gt}from"./instantiate-BtyFU-vX.js";import{i as Kt}from"./types-CB6Dacmf.js";import{n as qt,t as Jt}from"./settings-BroNqkDz.js";import{t as Yt}from"./preload-helper-DclECHGd.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Xt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Zt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new L}},envmap:{envMap:{value:null},envMapRotation:{value:new L},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new L}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new L}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new L},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new L},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new L},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new L}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new L}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new L}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0},uvTransform:{value:new L}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}}},Qt={basic:{uniforms:A([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:A([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:A([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:A([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:A([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:A([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:A([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:A([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:A([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:A([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:A([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new L},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new L}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:A([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:A([Q.lights,Q.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Qt.physical={uniforms:A([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new L},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new L},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new L},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new L},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new L},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new L},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new L},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new L},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new L},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new L},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new L},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new L},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new L}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var $t={r:0,b:0,g:0},en=new oe,tn=new L;tn.set(-1,0,0,0,1,0,0,0,1);function nn(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,u,f=null,p=0,m=null;function h(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function g(t){let r=!1,i=h(t);i===null?v(o,s):i&&i.isColor&&(v(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let i=h(n);i&&i.isCubeTexture?(u===void 0&&(u=new x(new Ce(1,1,1),new G({name:`BackgroundCubeMaterial`,uniforms:Ke(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(en.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(tn),u.material.toneMapped=pe.getTransfer(i.colorSpace)!==l,(f!==i||p!==i.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,f=i,p=i.version,m=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new x(new W(2,2),new G({name:`BackgroundMaterial`,uniforms:Ke(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=pe.getTransfer(i.colorSpace)!==l,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(f!==i||p!==i.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,f=i,p=i.version,m=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function v(t,r){t.getRGB($t,d(e)),n.buffers.color.setClear($t.r,$t.g,$t.b,r,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,v(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,v(o,s)},render:g,addToRenderList:_,dispose:y}}function rn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function an(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function on(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&P(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function sn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ne,s=new L,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var cn=class extends I{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ae(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ce(5,5,5),i=new G({name:`CubemapFromEquirect`,uniforms:Ke(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new x(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=F),new _e(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ln=256,un=3,dn=20,fn=256,pn=16,mn=3,hn=new J,gn=new q,_n=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _e(1,10,null),this._boxMesh=new x(new Ce(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=hn}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(gn));let h=new _e(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ln,M(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ln:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=vn(e,!1,!1),n=Math.log2(e)-un;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vn(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=wn()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cn()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=bn(),this._integrationMaterial=xn());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/pn);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-mn)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(fn*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sn());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function vn(e,t,n){return new cn(e,{minFilter:Ye,generateMipmaps:t,type:k,colorSpace:R,depthBuffer:n})}function yn(e,t,n){return new G({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function bn(){return yn(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fn}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xn(){return yn(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pn}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sn(){return yn(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dn}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cn(){return yn(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function wn(){return yn(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new cn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _n(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _n(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function En(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&b(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Dn(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?fe:Be)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function On(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function kn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:g(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function An(e,t,n){let r=new WeakMap,i=new de;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new ye(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new We(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function jn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Mn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Nn(e,t,n,r,i,a){let o=new I(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Pe;u.setAttribute(`position`,new _([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new _([0,2,0,0,2,0],2));let d=new ie({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new x(u,d),p=new ge(-1,1,1,-1,0,1),m=null,h=null,g=!1,v,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new I(t,n,{type:k,depthBuffer:!1,stencilBuffer:!1}),c=new I(t,n,{type:k,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ue(t,n),a===!0&&(l.format=Je,l.type=ve)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},pe.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Mn[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Pn=new Fe,Fn=new ue(1,1),In=new U(1),Ln=new ye,Rn=new xe,zn=new Ae,Bn=[],Vn=[],Hn=new Float32Array(16),Un=new Float32Array(9),Wn=new Float32Array(4);function Gn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bn[i];if(a===void 0&&(a=new Float32Array(i),Bn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Kn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Jn(e,t){let n=Vn[t];n===void 0&&(n=new Int32Array(t),Vn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Yn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kn(n,t))return;e.uniform2fv(this.addr,t),qn(n,t)}}function Zn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Kn(n,t))return;e.uniform3fv(this.addr,t),qn(n,t)}}function Qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kn(n,t))return;e.uniform4fv(this.addr,t),qn(n,t)}}function $n(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qn(n,t)}else{if(Kn(n,r))return;Wn.set(r),e.uniformMatrix2fv(this.addr,!1,Wn),qn(n,r)}}function er(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qn(n,t)}else{if(Kn(n,r))return;Un.set(r),e.uniformMatrix3fv(this.addr,!1,Un),qn(n,r)}}function tr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qn(n,t)}else{if(Kn(n,r))return;Hn.set(r),e.uniformMatrix4fv(this.addr,!1,Hn),qn(n,r)}}function nr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kn(n,t))return;e.uniform2iv(this.addr,t),qn(n,t)}}function ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kn(n,t))return;e.uniform3iv(this.addr,t),qn(n,t)}}function ar(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kn(n,t))return;e.uniform4iv(this.addr,t),qn(n,t)}}function or(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kn(n,t))return;e.uniform2uiv(this.addr,t),qn(n,t)}}function cr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kn(n,t))return;e.uniform3uiv(this.addr,t),qn(n,t)}}function lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kn(n,t))return;e.uniform4uiv(this.addr,t),qn(n,t)}}function ur(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function dr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?ur(Fn):Pn,n.setTexture2D(t||a,i)}function fr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Rn,i)}function pr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?ur(In):zn,n.setTextureCube(t||a,i)}function mr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ln,i)}function hr(e){switch(e){case 5126:return Yn;case 35664:return Xn;case 35665:return Zn;case 35666:return Qn;case 35674:return $n;case 35675:return er;case 35676:return tr;case 5124:case 35670:return nr;case 35667:case 35671:return rr;case 35668:case 35672:return ir;case 35669:case 35673:return ar;case 5125:return or;case 36294:return sr;case 36295:return cr;case 36296:return lr;case 35678:case 36198:case 36298:case 36306:case 35682:return dr;case 35679:case 36299:case 36307:return fr;case 35680:case 36300:case 36308:case 36293:return pr;case 36289:case 36303:case 36311:case 36292:return mr}}function gr(e,t){e.uniform1fv(this.addr,t)}function _r(e,t){let n=Gn(t,this.size,2);e.uniform2fv(this.addr,n)}function vr(e,t){let n=Gn(t,this.size,3);e.uniform3fv(this.addr,n)}function yr(e,t){let n=Gn(t,this.size,4);e.uniform4fv(this.addr,n)}function br(e,t){let n=Gn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xr(e,t){let n=Gn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sr(e,t){let n=Gn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cr(e,t){e.uniform1iv(this.addr,t)}function wr(e,t){e.uniform2iv(this.addr,t)}function Tr(e,t){e.uniform3iv(this.addr,t)}function Er(e,t){e.uniform4iv(this.addr,t)}function Dr(e,t){e.uniform1uiv(this.addr,t)}function Or(e,t){e.uniform2uiv(this.addr,t)}function kr(e,t){e.uniform3uiv(this.addr,t)}function Ar(e,t){e.uniform4uiv(this.addr,t)}function jr(e,t,n){let r=this.cache,i=t.length,a=Jn(n,i);Kn(r,a)||(e.uniform1iv(this.addr,a),qn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ur(Fn):Pn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Mr(e,t,n){let r=this.cache,i=t.length,a=Jn(n,i);Kn(r,a)||(e.uniform1iv(this.addr,a),qn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Rn,a[e])}function Nr(e,t,n){let r=this.cache,i=t.length,a=Jn(n,i);Kn(r,a)||(e.uniform1iv(this.addr,a),qn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?ur(In):zn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Pr(e,t,n){let r=this.cache,i=t.length,a=Jn(n,i);Kn(r,a)||(e.uniform1iv(this.addr,a),qn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ln,a[e])}function Fr(e){switch(e){case 5126:return gr;case 35664:return _r;case 35665:return vr;case 35666:return yr;case 35674:return br;case 35675:return xr;case 35676:return Sr;case 5124:case 35670:return Cr;case 35667:case 35671:return wr;case 35668:case 35672:return Tr;case 35669:case 35673:return Er;case 5125:return Dr;case 36294:return Or;case 36295:return kr;case 36296:return Ar;case 35678:case 36198:case 36298:case 36306:case 35682:return jr;case 35679:case 36299:case 36307:return Mr;case 35680:case 36300:case 36308:case 36293:return Nr;case 36289:case 36303:case 36311:case 36292:return Pr}}var Ir=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hr(t.type)}},Lr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fr(t.type)}},Rr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zr=/(\w+)(\])?(\[|\.)?/g;function Br(e,t){e.seq.push(t),e.map[t.id]=t}function Vr(e,t,n){let r=e.name,i=r.length;for(zr.lastIndex=0;;){let a=zr.exec(r),o=zr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Br(n,l===void 0?new Ir(s,e,t):new Lr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rr(s),Br(n,e)),n=e}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ur(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Wr=37297,Gr=0;function Kr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qr=new L;function Jr(e){pe._getMatrix(qr,pe.workingColorSpace,e);let t=`mat3( ${qr.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(e)){case C:return[t,`LinearTransferOETF`];case l:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Yr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Kr(e.getShaderSource(t),r)}return i}function Xr(e,t){let n=Jr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Zr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qr(e,t){let n=Zr[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $r=new J;function ei(){return pe.getLuminanceCoefficients($r),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$r.x.toFixed(4)}, ${$r.y.toFixed(4)}, ${$r.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ti(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ii).join(`
`)}function ni(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ri(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ii(e){return e!==``}function ai(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function oi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var si=/^[ \t]*#include +<([\w\d./]+)>/gm;function ci(e){return e.replace(si,li)}function li(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ci(n)}var ui=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function di(e){return e.replace(ui,fi)}function fi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pi(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var mi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function hi(e){return mi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var gi={302:`ENVMAP_MODE_REFRACTION`};function _i(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:gi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var vi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function yi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:vi[e.combine]||`ENVMAP_BLENDING_NONE`}function bi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=hi(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=_i(n),d=yi(n),f=ti(n),p=ni(a),m=i.createProgram(),h,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ii).join(`
`),h.length>0&&(h+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ii).join(`
`),_.length>0&&(_+=`
`)):(h=[pi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ii).join(`
`),_=[pi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Qr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Xr(`linearToOutputTexel`,n.outputColorSpace),ei(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ii).join(`
`)),o=ci(o),o=ai(o,n),o=oi(o,n),s=ci(s),s=ai(s,n),s=oi(s,n),o=di(o),s=di(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+h+o,b=v+_+s,x=Ur(i,i.VERTEX_SHADER,y),S=Ur(i,i.FRAGMENT_SHADER,b);i.attachShader(m,x),i.attachShader(m,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,x,S);else{let e=Yr(i,x,`vertex`),n=Yr(i,S,`fragment`);g(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Hr(i,m),T=ri(i,m)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Wr)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=S,this}var xi=0,Si=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ci(e),t.set(e,n)),n}},Ci=class{constructor(e){this.id=xi++,this.code=e,this.usedTimes=0}};function wi(e){return e===1030||e===37490||e===36285}function Ti(e,t,n,r,i,a){let o=new O,s=new Si,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Qt[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,te=!!i.matcap,ne=!!b,F=ne&&b.isPMREMTexture===!0,I=!!i.aoMap,re=!!i.lightMap,L=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,R=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,z=!!i.roughnessMap,B=i.anisotropy>0,se=i.clearcoat>0,V=i.diffuseRoughness>0,H=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=B&&!!i.anisotropyMap,me=se&&!!i.clearcoatMap,he=se&&!!i.clearcoatNormalMap,ge=se&&!!i.clearcoatRoughnessMap,_e=V&&!!i.diffuseRoughnessMap,ve=le&&!!i.iridescenceMap,ye=le&&!!i.iridescenceThicknessMap,be=ue&&!!i.sheenColorMap,xe=ue&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=de&&!!i.transmissionMap,Ee=de&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne=F?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:te,envMap:ne,envMapMode:ne&&b.mapping,envMapPMREM:F,envMapMaxLod:F?Ne.length-1:null,envMapSize:F?Ne[0].width:null,aoMap:I,lightMap:re,bumpMap:L,normalMap:ie,displacementMap:R,emissiveMap:ae,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&wi(i.normalMap.format),metalnessMap:oe,roughnessMap:z,anisotropy:B,anisotropyMap:fe,clearcoat:se,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,diffuseRoughness:V,diffuseRoughnessMap:_e,dispersion:H,retroreflection:ce,iridescence:le,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:ue,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:de,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:I&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:L&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:R&&p(i.displacementMap.channel),emissiveMapUv:ae&&p(i.emissiveMap.channel),metalnessMapUv:oe&&p(i.metalnessMap.channel),roughnessMapUv:z&&p(i.roughnessMap.channel),anisotropyMapUv:fe&&p(i.anisotropyMap.channel),clearcoatMapUv:me&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(i.sheenRoughnessMap.channel),specularMapUv:Se&&p(i.specularMap.channel),specularColorMapUv:Ce&&p(i.specularColorMap.channel),specularIntensityMapUv:we&&p(i.specularIntensityMap.channel),transmissionMapUv:Te&&p(i.transmissionMap.channel),thicknessMapUv:Ee&&p(i.thicknessMap.channel),alphaMapUv:Oe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||B),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&pe.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&pe.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Qt[t];n=ke.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new bi(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ei(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Di(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ki(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Di),r.length>1&&r.sort(t||Oi),i.length>1&&i.sort(t||Oi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ai(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ki,e.set(t,[i])):n>=r.length?(i=new ki,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ji(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new q};break;case`SpotLight`:n={position:new J,direction:new J,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function Mi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ni=0;function Pi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fi(e){let t=new ji,n=Mi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new oe,o=new oe;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Pi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ni++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ii(e){let t=new Fi(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Li(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ii(e),t.set(n,[a])):r>=i.length?(a=new Ii(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ri=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zi=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bi=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Vi=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Hi=new oe,Ui=new J,Wi=new J;function Gi(e,t,n){let r=new j,i=new We,a=new We,o=new de,s=new Le,c=new T,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new G({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ri,fragmentShader:zi}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Pe;m.setAttribute(`position`,new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new x(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new I(i.x,i.y,{format:ae,type:k,minFilter:F,magFilter:F,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ue(i.x,i.y,h),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ue,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=B,d.map.depthTexture.magFilter=B}else l.isPointLight?(d.map=new cn(i.x),d.map.depthTexture=new U(i.x,je)):(d.map=new I(i.x,i.y),d.map.depthTexture=new ue(i.x,i.y,je)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ue,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=F,d.map.depthTexture.magFilter=F):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=B,d.map.depthTexture.magFilter=B);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let v=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<_;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ui.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ui),Wi.copy(e.position),Wi.add(Bi[t]),e.up.copy(Vi[t]),e.lookAt(Wi),e.updateMatrixWorld(),n.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Hi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Hi,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,v,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new I(i.x,i.y,{format:ae,type:k}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=b(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ki(e,t){function n(){let t=!1,n=new de,r=null,i=new de(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Re[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=P>=1);let ne=null,F={},I=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),L=new de().fromArray(I),ie=new de().fromArray(re);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),oe(e.CULL_FACE),le(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function B(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function V(t){return h!==t&&(e.useProgram(t),h=t,!0)}let H={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};H[103]=e.MIN,H[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(z(e.BLEND),_=!1);else if(_===!1&&(oe(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:g(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:g(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:g(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:g(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(H[n],H[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function ue(t,n){t.side===2?z(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function pe(t){t===0?z(e.CULL_FACE):(oe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function me(t){t!==A&&(N&&e.lineWidth(t),A=t)}function he(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(ee!==n||j!==r)&&(ee=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function ge(t){t?oe(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function ve(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function ye(){let t=F[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){g(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){g(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){g(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){g(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){g(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){L.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),L.copy(t))}function Ne(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,F={},f={},c={},p=new WeakMap,m=[],h=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,L.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:z,bindFramebuffer:B,drawBuffers:se,useProgram:V,setBlending:le,setMaterial:ue,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Me,viewport:Ne,reset:Ie}}function qi(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,d=new Set,p,m=new WeakMap,h=new Set,_=new FinalizationRegistry(e=>h.delete(e)),y=!1;try{y=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function b(e,t){return y?new OffscreenCanvas(e,t):v(`canvas`)}function x(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=b(n,a));let o=t?b(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function S(e){return e.generateMipmaps}function w(t){e.generateMipmap(t)}function T(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?C:pe.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return S(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=new WeakRef(e);r.get(e).__ref=t,h.add(t),_.register(e,t,t)}function ee(e){let t=r.get(e).__ref;t!==void 0&&(h.delete(t),_.unregister(t))}function j(e){N(e.target)}function M(e){ne(e.target)}function N(e){e.removeEventListener(`dispose`,j),ee(e),re(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function ne(e){e.removeEventListener(`dispose`,M),ee(e),ie(e)}function I(){for(let e of h){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ne(t):N(t))}h.clear(),d.clear()}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&L(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function L(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&N(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let R=0;function ae(){R=0}function oe(){return R}function z(e){R=e}function H(){let e=R;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),R+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,i){let a=r.get(t);if(t.isVideoTexture&&Ie(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[D]:e.REPEAT,[Oe]:e.CLAMP_TO_EDGE,[se]:e.MIRRORED_REPEAT},he={[B]:e.NEAREST,[te]:e.NEAREST_MIPMAP_NEAREST,[V]:e.NEAREST_MIPMAP_LINEAR,[F]:e.LINEAR,[f]:e.LINEAR_MIPMAP_NEAREST,[Ye]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j),A(n));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=ce(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&L(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=pe.getPrimaries(pe.workingColorSpace),r=o.colorSpace===``?null:pe.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=x(o.image,!1,i.maxTextureSize);t=U(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=E(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=k(o,t);if(o.isDepthTexture)m=O(o.format===Je,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&be(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=De(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=De(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Le(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Le(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);S(o)&&o.mipmapsAutoUpdate===!0&&w(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=pe.getPrimaries(pe.workingColorSpace),r=o.colorSpace===``?null:pe.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=x(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=U(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=E(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,C=l.dataReady,T=k(o,h);_e(e.TEXTURE_CUBE_MAP,o);let D;if(o.isDepthTexture){if(v=O(o.format===Je,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,h.width,h.height);for(let t=0;t<6;t++){D=m[t].mipmaps;for(let r=0;r<D.length;r++){let i=D[r];o.format===1023?y?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?C&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(D=o.mipmaps,y&&b){D.length>0&&T++;let t=Le(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<D.length;r++){let i=D[r].image[t].image;y?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<D.length;r++){let i=D[r];y?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}S(o)&&o.mipmapsAutoUpdate===!0&&w(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=E(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=E(o.internalFormat,c,l,o.normalized,o.colorSpace);Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?fe(i.depthTexture,0):le(i.depthTexture,0);let u=c.__webglTexture,d=Pe(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Ae(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M),A(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Fe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=E(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);S(i)?w(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),S(a)&&w(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);S(i)?w(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ee(t)}function je(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(S(a)&&a.mipmapsAutoUpdate===!0){let t=T(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),w(t),n.unbindTexture()}}}let Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Me.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Me.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ie(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function U(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(pe.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):g(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Fe,this.dispose=I}function Ji(e,t){function n(n,r=``){let i,a=pe.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xi=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ge(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new G({vertexShader:Yi,fragmentShader:Xi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new x(new W(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qi=class extends p{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new Zi,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new We,w=null,T=null,E=new K;E.viewport=new de;let D=new K;D.viewport=new de;let O=[E,D],k=new Me,A=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new m,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new m,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new m,x[e]=t),t.getHandSpace()};function j(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}A=null,ee=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?Je:Ue,a=v.stencil?ve:je);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new I(d.textureWidth,d.textureHeight,{format:He,type:Ve,depthTexture:new ue(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new I(f.framebufferWidth,f.framebufferHeight,{format:He,type:Ve,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(A!==k.near||ee!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,ee=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;te(k,i);for(let e=0;e<a.length;e++)te(a[e],i);k.projectionMatrix.copy(E.projectionMatrix),k.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,k,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ie*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let F=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new K,o.layers.enable(n),o.viewport=new de,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Ge,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let L=new Xt;L.setAnimationLoop(re),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},$i=new oe,ea=new L;ea.set(-1,0,0,0,1,0,0,0,1);function ta(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,d(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),f(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),h(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),g(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($i.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ea),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function na(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ra=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ia=null;function aa(){return ia===null&&(ia=new H(ra,16,16,ae,k),ia.name=`DFG_LUT`,ia.minFilter=F,ia.magFilter=F,ia.wrapS=Oe,ia.wrapT=Oe,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}var oa=class{constructor(e={}){let{canvas:t=re(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ve}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([me,w,S]),_=new Set([Ve,je,ce,ve,Se,be]),v=new Uint32Array(4),y=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},x=null,C=null,T=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,A=!1,M=null,N=null,te=null,F=null;this._outputColorSpace=ne;let L=0,ie=0,R=null,ae=-1,z=null,B=new de,se=new de,V=null,H=new q(0),le=0,ue=t.width,fe=t.height,he=1,ge=null,_e=null,ye=new de(0,0,ue,fe),xe=new de(0,0,ue,fe),Ce=!1,we=new j,De=new Ee,Oe=!1,ke=!1,Ae=new oe,Me=new J,Ne=new de,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return R===null?he:1}let U=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,W,Be,G,K,He,Ue,We,Ge,Ke,Je,Xe,Ze,Qe,Y,X,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),U===null){let t=`webgl2`;if(U=Le(t,e),U===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),g(`WebGLRenderer: `+e.message),e}function at(){Re=new En(U),Re.init(),nt=new Ji(U,Re),ze=new on(U,Re,e,nt),W=new Ki(U,Re),ze.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),N=U.createFramebuffer(),te=U.createFramebuffer(),F=U.createFramebuffer(),Be=new kn(U),G=new Ei,K=new qi(U,Re,W,G,ze,nt,Be),He=new Tn(O),Ue=new Zt(U),rt=new rn(U,Ue),We=new Dn(U,Ue,Be,rt),Ge=new jn(U,We,Ue,rt,Be),$e=new An(U,ze,K),Qe=new sn(G),Ke=new Ti(O,He,Re,ze,rt,Qe),Je=new ta(O,G),Xe=new Ai,Ze=new Li(Re),X=new nn(O,He,W,Ge,p,s),Y=new Gi(O,Ge,ze),it=new na(U,Be,ze,W),et=new an(U,Re,Be),tt=new On(U,Re,Be),Be.programs=Ke.programs,O.capabilities=ze,O.extensions=Re,O.properties=G,O.renderLists=Xe,O.shadowMap=Y,O.state=W,O.info=Be}m!==1009&&(D=new Nn(m,t.width,t.height,o,r,i));let ot=new Qi(O,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(ue,fe,!1))},this.getSize=function(e){return e.set(ue,fe)},this.setSize=function(e,n,r=!0){ot.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,fe=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*he,fe*he).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,fe=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)g(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(B)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),W.viewport(B.copy(ye).multiplyScalar(Ie()).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),W.scissor(se.copy(xe).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){W.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=h.has(t)}if(e){let e=R.texture.type,t=_.has(e),n=X.getClearColor(),r=X.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,U.clearBufferiv(U.COLOR,0,y))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),X.dispose(),Xe.dispose(),Ze.dispose(),K.dispose(),G.dispose(),He.dispose(),Ge.dispose(),We.dispose(),rt.dispose(),it.dispose(),Ke.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Te(`WebGLRenderer: Context Lost.`),A=!0}function ct(){Te(`WebGLRenderer: Context Restored.`),A=!1;let e=Be.autoReset,t=Y.enabled,n=Y.autoUpdate,r=Y.needsUpdate,i=Y.type;at(),Be.autoReset=e,Y.enabled=t,Y.autoUpdate=n,Y.needsUpdate=r,Y.type=i}function lt(e){g(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),G.remove(e)}function ft(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Ue.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),Oe===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),C=Ze.get(n),C.init(t),E.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),M!==null&&M.updateLights(C.state.lightsArray),ke=this.localClippingEnabled,Oe=Qe.init(this.clippingPlanes,ke),Oe===!0&&Qe.setGlobalState(this.clippingPlanes,t),M!==null&&Y.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),C=E.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Xt;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){g(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;M!==null&&M.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=D!==null&&(R===null||n)&&D.begin(O,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,R),C=Ze.get(e,E.length),C.init(t),C.state.textureUnits=K.getTextureUnits(),E.push(C),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):we.setFromProjectionMatrix(Ae,qe,t.reversedDepth),ke=this.localClippingEnabled,Oe=Qe.init(this.clippingPlanes,ke),x=Xe.get(e,T.length),x.init(),T.push(x),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,O.sortObjects)}yt(e,t,0,O.sortObjects),x.finish(),M!==null&&M.updateLights(C.state.lightsArray),O.sortObjects===!0&&x.sort(ge,_e),Fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Fe&&X.addToRenderList(x,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Qe.beginShadows();let i=C.state.shadowsArray;if(Y.render(i,e,t),Oe===!0&&Qe.endShadows(),(r&&D.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Fe&&X.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(x,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Fe&&X.render(e),bt(x,e,t)}R!==null&&ie===0&&(K.updateMultisampleRenderTarget(R),K.updateRenderTargetMipmap(R)),r&&D.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),rt.resetDefaultState(),ae=-1,z=null,E.pop(),E.length>0?(C=E[E.length-1],K.setTextureUnits(C.state.textureUnits),Oe===!0&&Qe.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,T.pop(),x=T.length>0?T[T.length-1]:null,M!==null&&M.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&x.push(e,i,a,n,Ne.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&x.push(e,i,a,n,Ne.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),Oe===!0&&Qe.setGlobalState(O.clippingPlanes,n),r&&W.viewport(B.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new I(1,1,{generateMipmaps:!0,type:e?k:Ve,minFilter:Ye,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||B;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let s=O.getRenderTarget(),c=O.getActiveCubeFace(),l=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(H),le=O.getClearAlpha(),le<1&&O.setClearColor(16777215,.5),O.clear(),Fe&&X.render(n);let u=O.toneMapping;O.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),Oe===!0&&Qe.setGlobalState(O.clippingPlanes,r),St(e,n,r),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}O.setRenderTarget(s,c,l),O.setClearColor(H,le),d!==void 0&&(r.viewport=d),O.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=Pe);let r=G.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ke.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,O),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),Ot(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(C.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=G.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:pe.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=C.state.lights;if(Oe===!0&&(ke===!0||e!==z)){let t=e===z&&r.id===ae;Qe.setState(r,e,t)}let x=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?x=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(C.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):x=!0:x=!0:(x=!0,v.__version=r.version);let w=v.currentProgram;(x===!0||S===!0)&&(w=S===!0?Et(r,t,i,s,h):Tt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,w,v));let T=!1,E=!1,D=!1,k=w.getUniforms(),A=v.uniforms;if(W.useProgram(w.program)&&(T=!0,E=!0,D=!0),r.id!==ae&&(ae=r.id,E=!0),T||z!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(U,`projectionMatrix`,e.projectionMatrix),k.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(U,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&k.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),z!==e&&(z=e,E=!0,D=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&k.setValue(U,`sunShadowMap`,y.state.sunShadowMap,K),y.state.directionalShadowMap.length>0&&k.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&k.setValue(U,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&k.setValue(U,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){k.setOptional(U,i,`bindMatrix`),k.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(U,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(k.setOptional(U,i,`batchingTexture`),k.setValue(U,`batchingTexture`,i._matricesTexture,K),k.setOptional(U,i,`batchingIdTexture`),k.setValue(U,`batchingIdTexture`,i._indirectTexture,K),k.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(U,`batchingColorTexture`,i._colorsTexture,K));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&$e.update(i,n,w),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=aa()),E){if(k.setValue(U,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&At(A,D),a&&r.fog===!0&&Je.refreshFogUniforms(A,a),Je.refreshMaterialUniforms(A,r,he,fe,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=b,t=0;for(let n of C.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;A.probesSH.value=e.textures,A.probesMin.value=e.min,A.probesMax.value=e.max,A.probesResolution.value=e.resolution}Hr.upload(U,Dt(v),A,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hr.upload(U,Dt(v),A,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(U,`center`,i.center),k.setValue(U,`modelViewMatrix`,i.modelViewMatrix),k.setValue(U,`normalMatrix`,i.normalMatrix),k.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,w),it.bind(n,w)}}return w}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,L=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),B.copy(e.viewport),se.copy(e.scissor),V=e.scissorTest,W.viewport(B),W.scissor(se),W.setScissorTest(V),ae=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,B.copy(e.viewport),se.copy(e.scissor),V=e.scissorTest}else B.copy(ye).multiplyScalar(he).floor(),se.copy(xe).multiplyScalar(he).floor(),V=Ce;if(n!==0&&(r=N),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(B),W.scissor(se),W.setScissorTest(V),i){let r=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Mt(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){g(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){g(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){g(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=R===null?null:G.get(R).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=R===null?null:G.get(R).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ee(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,te),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){L=0,ie=0,R=null,W.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(e),t.unpackColorSpace=pe._getUnpackColorSpace()}},sa=`
in vec4 aTile;
uniform vec4 uBakeRegion;
uniform sampler2D uHeightTex;
uniform vec3 uShear;
uniform float uContactH;
uniform float uFootH;
out vec2 vUv;
out vec4 vTile;
out float vW;
out float vFlat;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 p = (wp.xz - uBakeRegion.xy) * uBakeRegion.z;
  vec3 n = normalize(mat3(modelMatrix) * normal);
  vec4 g = textureLod(uHeightTex, clamp(p, 0.0, 1.0), 0.0);
  float h = g.g > 0.5 ? max(wp.y - uBakeRegion.w - g.r, 0.0) : 0.0;
  vec2 off = uShear.xy * h;
  float len = length(off), maxL = uShear.z * h;
  if (len > maxL && len > 0.0) off *= maxL / len;
  p += off * uBakeRegion.z;
  // contact skirts: low geometry counts fully, canopies less; footprint (uFootH > 0): only
  // geometry within uFootH of the ground, projected straight down (dark patch where things touch)
  vW = uFootH > 0.0 ? 1.0 - smoothstep(uFootH * 0.3, uFootH, h) : 1.0 - 0.7 * smoothstep(0.0, uContactH, h);
  // flat things lying on the ground (blankets, kerb tops, rugs, road markings) cast nothing:
  // they would only darken themselves
  vFlat = smoothstep(0.75, 0.92, abs(n.y)) * (1.0 - smoothstep(0.15, 0.35, h));
  vUv = uv;
  vTile = aTile;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,ca=`
out highp vec4 fragColor;
uniform vec4 uChannel;         // which channel this pass writes
uniform float uWeighted;       // 1: weight by height (contact), 0: solid (sun)
in vec2 vUv;
in vec4 vTile;
in float vW;
in float vFlat;
${s}
void main() {
  if (vFlat > 0.99) discard;
#ifdef CUTOUT
  if (vTile.x < -0.5) discard;
  if (sampleAtlas(vUv, vTile).a < 0.5) discard;
#endif
  fragColor = uChannel * mix(1.0, vW, uWeighted) * (1.0 - vFlat);
}
`,la=`
uniform vec4 uBakeRegion;
uniform float uDepthSign;
out float vH;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vH = wp.y - uBakeRegion.w;
  vec2 p = (wp.xz - uBakeRegion.xy) * uBakeRegion.z;
  // the highest ground must win the depth test: nearer = smaller depth normally, larger when reversed
  gl_Position = vec4(p * 2.0 - 1.0, 0.5 + uDepthSign * clamp(vH / 4000.0, -0.49, 0.49), 1.0);
}
`,ua=`
out highp vec4 fragColor;
in float vH;
void main() { fragColor = vec4(vH, 1.0, 0.0, 1.0); }
`,da=`
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,fa=`
out highp vec4 fragColor;
uniform sampler2D tSky;
uniform sampler2D tSun;
uniform vec2 uStep;
uniform float uW[8];
in vec2 vUv;
void main() {
  vec3 acc = vec3(0.0);
  for (int i = -7; i <= 7; i++) {
    vec2 uv = vUv + uStep * float(i);
    float w = uW[abs(i)];
    vec4 s = texture(tSky, uv);
    vec4 sn = texture(tSun, uv);
    acc += w * vec3(dot(s, vec4(0.25)), sn.r, sn.g);
  }
  fragColor = vec4(acc, 1.0);
}
`,pa=`
out highp vec4 fragColor;
uniform sampler2D tIn;
uniform sampler2D tHeight;
uniform vec2 uStep;
uniform float uW[8];
uniform float uFoot;
in vec2 vUv;
void main() {
  vec3 acc = vec3(0.0);
  for (int i = -7; i <= 7; i++) acc += uW[abs(i)] * texture(tIn, vUv + uStep * float(i)).rgb;
  vec4 h = texture(tHeight, vUv);
  // contact = sky skirts combined with the footprint patch
  float contact = 1.0 - (1.0 - acc.r) * (1.0 - clamp(acc.b * uFoot, 0.0, 1.0));
  fragColor = vec4(contact, acc.g, 0.0, h.g > 0.5 ? h.r : -30000.0);
}
`,ma=`
in vec3 aCenter;
in float aRadius;
in vec3 aStrength;
uniform vec4 uBakeRegion;
uniform sampler2D uHeightTex;
out vec2 vQ;
out vec3 vS;
void main() {
  // pool size follows the lamp's height above the ground under it (a 6 m lamp = aRadius)
  vec2 p0 = (aCenter.xz - uBakeRegion.xy) * uBakeRegion.z;
  vec4 g = textureLod(uHeightTex, clamp(p0, 0.0, 1.0), 0.0);
  float h = g.g > 0.5 ? max(aCenter.y - uBakeRegion.w - g.r, 1.0) : 6.0;
  // low lamps (porch lights, wall lamps) throw small, weak pools; tall street lights wide ones
  float k = clamp(h / 6.0, 0.35, 1.8);
  vec2 c = aCenter.xz + position.xy * aRadius * k;
  vec2 p = (c - uBakeRegion.xy) * uBakeRegion.z;
  vQ = position.xy;
  // bigger fixtures are brighter: an 8.6 m street light ~1.1x, a 4.3 m park lamp ~0.55x, a porch lamp dim
  vS = aStrength * clamp(h / 8.0, 0.3, 1.2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,ha=`
out highp vec4 fragColor;
in vec2 vQ;
in vec3 vS;
void main() {
  float r2 = dot(vQ, vQ);
  if (r2 >= 1.0) discard;
  float f = (1.0 - r2);
  f = f * f * (0.55 + 0.45 * exp(-r2 * 6.0));
  fragColor = vec4(f * vS, 0.0);
}
`,ga=`
in vec3 aCenter;
in vec2 aOut;
in float aWidth;
in vec3 aStrength;
uniform vec4 uBakeRegion;
uniform vec2 uSpill; // reach, soft
out vec2 vQ;
out vec3 vS;
out float vHalf;
void main() {
  vec2 along = vec2(-aOut.y, aOut.x);
  float hw = aWidth * 0.5 + uSpill.y;
  float o = (position.y * 0.5 + 0.5) * uSpill.x;
  float a = position.x * hw;
  vec2 c = aCenter.xz + along * a + aOut * o;
  vQ = vec2(a, o);
  vS = aStrength;
  vHalf = aWidth * 0.5;
  vec2 p = (c - uBakeRegion.xy) * uBakeRegion.z;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,_a=`
out highp vec4 fragColor;
uniform vec2 uSpill;
in vec2 vQ;
in vec3 vS;
in float vHalf;
void main() {
  float across = 1.0 - smoothstep(vHalf - uSpill.y * 0.5, vHalf + uSpill.y, abs(vQ.x));
  float d = clamp(vQ.y / uSpill.x, 0.0, 1.0);
  // dark at the wall line itself (the facade isn't lit by its own pool), brightest a little out
  float out_ = smoothstep(0.05, 0.4, vQ.y) * pow(1.0 - d, 1.2);
  fragColor = vec4(vS * across * out_, 0.0);
}
`,va=[45,135,225,315].map(e=>{let t=e*Math.PI/180,n=1/Math.tan(55*Math.PI/180);return new We(Math.sin(t)*n,-Math.cos(t)*n)});function ya(e){let t=[],n=0;for(let r=0;r<8;r++){let i=Math.exp(-(r*r)/(2*e*e));t.push(i),n+=r===0?i:2*i}return t.map(e=>e/n)}var ba=class{first=new WeakMap;movedSet=new WeakSet;reset(){this.first=new WeakMap,this.movedSet=new WeakSet}moved(e){if(this.movedSet.has(e))return!0;let t=this.first.get(e);return t?!t.equals(e.matrixWorld)&&(this.movedSet.add(e),!0):(this.first.set(e,e.matrixWorld.clone()),!1)}};function xa(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}var Sa=class{motion;level;res=0;heightRT;skyRT;sunRT;blurRT;finalRT=[];lampRT=[];front=0;frontRegion=new de;job=null;scene=null;key=``;bakeScene=new he;fsScene=new he;fsMesh;cam=new ge(-1,1,1,-1,0,1);proxies=new WeakMap;bakeUniforms={uBakeRegion:{value:new de},uHeightTex:{value:null},uShear:{value:new J},uContactH:{value:3},uFootH:{value:0},uDepthSign:{value:-1},uChannel:{value:new de(1,0,0,0)},uWeighted:{value:1}};casterMat;casterCutMat;heightMat;blurH;blurV;lampMat;lampGeo=new y;lampMesh;spillGeo=new y;spillMesh;lastBakeDrawCalls=0;bakes=0;constructor(e,t=`far`){this.motion=e,this.level=t;let n={...X,...this.bakeUniforms},r=e=>new G({glslVersion:u,uniforms:n,vertexShader:sa,fragmentShader:ca,defines:e?{CUTOUT:``}:{},side:2,depthTest:!1,depthWrite:!1,blending:5,blendEquation:104,blendSrc:201,blendDst:201});this.casterMat=r(!1),this.casterCutMat=r(!0),this.heightMat=new G({glslVersion:u,uniforms:n,vertexShader:la,fragmentShader:ua,side:2,depthTest:!0,depthWrite:!0,blending:0});let i=(e,t)=>new G({glslVersion:u,uniforms:t,vertexShader:da,fragmentShader:e,depthTest:!1,depthWrite:!1,blending:0});this.blurH=i(fa,{tSky:{value:null},tSun:{value:null},uStep:{value:new We},uW:{value:Array(8).fill(0)}}),this.blurV=i(pa,{tIn:{value:null},tHeight:{value:null},uStep:{value:new We},uW:{value:Array(8).fill(0)},uFoot:{value:.8}});let a=new Pe;a.setAttribute(`position`,new _([-1,-1,0,3,-1,0,-1,3,0],3)),this.fsMesh=new x(a,this.blurH),this.fsMesh.frustumCulled=!1,this.fsScene.add(this.fsMesh);let o=new W(2,2);this.lampGeo.index=o.index,this.lampGeo.setAttribute(`position`,o.getAttribute(`position`)),this.lampMat=new G({glslVersion:u,uniforms:n,vertexShader:ma,fragmentShader:ha,depthTest:!1,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:201}),this.lampMesh=new x(this.lampGeo,this.lampMat),this.lampMesh.frustumCulled=!1,this.spillGeo.index=o.index,this.spillGeo.setAttribute(`position`,o.getAttribute(`position`));let s=new G({glslVersion:u,uniforms:{...n,uSpill:{value:new We(2.6,.7)}},vertexShader:ga,fragmentShader:_a,side:2,depthTest:!1,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:201});this.spillMesh=new x(this.spillGeo,s),this.spillMesh.frustumCulled=!1}ensureTargets(e){if(this.res===e)return;for(let e of[this.heightRT,this.skyRT,this.sunRT,this.blurRT,...this.finalRT,...this.lampRT])e?.dispose();this.key=``;let t={minFilter:F,magFilter:F,generateMipmaps:!1,wrapS:Oe,wrapT:Oe};this.heightRT=new I(e,e,{...t,type:k,format:He,depthBuffer:!0,stencilBuffer:!1}),this.skyRT=new I(e,e,{...t,type:Ve,depthBuffer:!1}),this.sunRT=new I(e,e,{...t,type:Ve,depthBuffer:!1}),this.blurRT=new I(e,e,{...t,type:k,depthBuffer:!1}),this.finalRT=[0,1].map(()=>new I(e,e,{...t,type:k,depthBuffer:!1})),this.lampRT=[0,1].map(()=>new I(e,e,{...t,type:k,depthBuffer:!1})),this.res=e}classify(e){let t=[],n=[],r=!1;e.traverseVisible(e=>{let t=e;t.isMesh&&(t.name===`stage-ground`||t.userData?.ground)&&(r||=t.name===`stage-ground`)});let i=[];return e.traverseVisible(e=>{let r=e;r.isMesh&&r.geometry&&(r.name===`terrain`||r.name===`stage-ground`||r.userData?.ground?(t.push(r),i.push(`g${r.id}`)):r.material!==at.opaque&&r.material!==at.cutout||r.userData?.caster===!1||!r.name.startsWith(`static `)&&r.userData?.caster!==!0&&this.motion.moved(r)||(n.push(r),i.push(`${r.id}`)))}),{ground:t,casters:n,stage:r,signature:i.join(`,`)}}ensure(e,t,n,r,i,a,o=!0){let s=Y.shadows,c=this.level===`near`,l=c?X.uGroundNear:X.uGround,u=c?X.uGroundNearRegion:X.uGroundRegion,d=c?X.uGroundNearLamp:X.uGroundLamp;t!==this.scene&&(this.scene=t,this.job=null,this.key=``);let f=a??this.classify(t);if(!s.enabled||!f.ground.length||c&&(f.stage||!s.near.enabled))return u.value.set(0,0,0,0),this.job=null,0;if(!this.job){let e=this.plan(f,n,r,i);e.key!==this.key&&(this.job=e)}this.job&&[...this.job.casters,...this.job.ground].some(e=>!xa(e,t))&&(this.job=null);let p=0;return this.job&&(p=this.run(e,o||!this.key?1/0:Math.max(1,s.sliceTriangles))),this.key?(u.value.copy(this.frontRegion),l.value=this.finalRT[this.front].texture,d.value=this.lampRT[this.front].texture):u.value.set(0,0,0,0),this.lastBakeDrawCalls=p,p}newRun(){this.job=null,this.key=``}get baking(){return this.job!==null}plan(e,t,n,r){let i=Y.shadows,a=this.level===`near`,o=a?i.near:i,s=o.region,c,l;if(e.stage){let t=new ze;for(let n of e.casters)t.expandByObject(n);let n=t.isEmpty()?4:Math.max(t.max.x-t.min.x,t.max.z-t.min.z,t.max.y-t.min.y);s=Math.min(i.region,Math.max(16,2**Math.ceil(Math.log2(n*3))));let r=t.isEmpty()?new J:t.getCenter(new J);c=r.x,l=r.z}else{let e=new J;t.getWorldDirection(e);let n=Math.hypot(e.x,e.z)||1,r=a?.25:.3;c=t.position.x+e.x/n*s*r,l=t.position.z+e.z/n*s*r}let u=Math.max(64,Math.min(4096,o.resolution)),d=s/(a?8:16),f=Math.round((c-s/2)/d)*d,p=Math.round((l-s/2)/d)*d,m=Math.round(t.position.y/16)*16,h=X.uSunDir.value.clone(),g=e=>Math.round(e*120),_=(e,t)=>{let n=e.geometry,r=n.getAttribute(`position`);!n.boundingSphere&&r?.array?.length&&n.computeBoundingSphere();let i=n.boundingSphere;if(!i)return!0;let a=i.center.clone().applyMatrix4(e.matrixWorld),o=i.radius*e.matrixWorld.getMaxScaleOnAxis()+t;return a.x+o>f&&a.x-o<f+s&&a.z+o>p&&a.z-o<p+s},v=e.stage?e.casters:e.casters.filter(e=>_(e,a?30:60)),y=e.stage?e.ground:e.ground.filter(e=>_(e,0)),b=v.map(e=>e.id).join(`,`)+`|`+y.map(e=>e.id).join(`,`),x=[f,p,s,m,u,g(h.x),g(h.y),g(h.z),b,r,o.blur,i.maxLength,i.contactHeight,i.footprint,i.footprintHeight,Y.lights.poolRadius].join(`|`),S=e=>(e.geometry.index?e.geometry.index.count:e.geometry.getAttribute(`position`).count)/3,C=e=>{let t=[],n=Math.max(1,i.sliceTriangles),r=Math.max(1,i.sliceDraws);for(let i=0,a=0,o=0;i<e.length;i++)a+=S(e[i]),(a>=n||i+1-o>=r||i===e.length-1)&&(t.push([o,i+1]),o=i+1,a=0);return t},w=C(v),T=C(y).map(([e,t],n)=>({kind:`height`,from:e,to:t,first:n===0,tris:y.slice(e,t).reduce((e,t)=>e+S(t),0)}));T.length||T.push({kind:`height`,from:0,to:0,first:!0,tris:0});for(let e=0;e<6;e++)w.forEach(([t,n],r)=>T.push({kind:`casters`,pass:e,from:t,to:n,first:r===0,tris:v.slice(t,n).reduce((e,t)=>e+S(t),0)}));w.length||T.push({kind:`clear`}),T.push({kind:`blur`},{kind:`lamps`});for(let e of[...v,...y])this.proxy(e);return{key:x,minX:f,minZ:p,size:s,refY:m,res:u,blur:o.blur,sun:h,casters:v,ground:y,lamps:n,steps:T,next:0}}run(e,t){let n=this.job,r=Y.shadows;this.ensureTargets(n.res);let i=1-this.front,a=e.getRenderTarget(),s=e.autoClear,c=new q;e.getClearColor(c);let l=e.getClearAlpha();e.autoClear=!1,e.setClearColor(0,0);let u=0,d=t=>{e.render(t,this.cam),u+=e.info.render.calls},f=this.bakeUniforms;f.uBakeRegion.value.set(n.minX,n.minZ,1/n.size,n.refY),f.uContactH.value=r.contactHeight,f.uDepthSign.value=e.capabilities.reversedDepthBuffer?1:-1,f.uHeightTex.value=this.heightRT.texture;let p=this.bakeScene,m=0,h=0,g=t===1/0?1/0:Math.max(1,r.sliceDraws);for(;n.next<n.steps.length;){let a=n.steps[n.next],s=a.kind===`casters`||a.kind===`height`?a.to-a.from:a.kind===`blur`?2:1,c=a.kind===`casters`||a.kind===`height`?a.tris:0;if((m>0||h>0)&&(m+c>t||h+s>g))break;if(n.next++,m+=c,h+=s,p.clear(),a.kind===`height`){for(let e of n.ground.slice(a.from,a.to))p.add(this.proxy(e,!1).height);e.setRenderTarget(this.heightRT),a.first&&e.clear(!0,!0,!1),d(p)}else if(a.kind===`clear`)for(let t of[this.skyRT,this.sunRT])e.setRenderTarget(t),e.clear(!0,!1,!1);else if(a.kind===`casters`){for(let e of n.casters.slice(a.from,a.to)){let t=this.proxy(e,!1);p.add(e.material===at.cutout?t.cutout:t.opaque)}let t=a.pass;if(e.setRenderTarget(t<4?this.skyRT:this.sunRT),a.first&&(t===0||t===4)&&e.clear(!0,!1,!1),f.uFootH.value=0,t<4){let e=va[t];f.uShear.value.set(e.x,e.y,10),f.uChannel.value.set(+(t===0),+(t===1),+(t===2),+(t===3)),f.uWeighted.value=1}else if(t===4){let e=Math.max(n.sun.y,.02);f.uShear.value.set(-n.sun.x/e,-n.sun.z/e,r.maxLength),f.uChannel.value.set(1,0,0,1),f.uWeighted.value=0}else f.uShear.value.set(0,0,0),f.uChannel.value.set(0,1,0,1),f.uWeighted.value=1,f.uFootH.value=r.footprintHeight;d(p),f.uFootH.value=0}else if(a.kind===`blur`){let t=n.size/n.res,a=ya(Math.max(.5,n.blur/t/1.5)),o=1.5/n.res;this.blurH.uniforms.tSky.value=this.skyRT.texture,this.blurH.uniforms.tSun.value=this.sunRT.texture,this.blurH.uniforms.uStep.value.set(o,0),this.blurH.uniforms.uW.value=a,this.fsMesh.material=this.blurH,e.setRenderTarget(this.blurRT),d(this.fsScene),this.blurV.uniforms.tIn.value=this.blurRT.texture,this.blurV.uniforms.tHeight.value=this.heightRT.texture,this.blurV.uniforms.uStep.value.set(0,o),this.blurV.uniforms.uW.value=a,this.blurV.uniforms.uFoot.value=r.footprint,this.fsMesh.material=this.blurV,e.setRenderTarget(this.finalRT[i]),d(this.fsScene)}else{e.setRenderTarget(this.lampRT[i]),e.clear(!0,!1,!1);let{minX:t,minZ:r,size:a}=n,s=n.lamps.filter(e=>e.pos.x>t-20&&e.pos.x<t+a+20&&e.pos.z>r-20&&e.pos.z<r+a+20),c=s.filter(e=>e.kind!==o.Spill),l=s.filter(e=>e.kind===o.Spill);if(l.length){let e=Y.lights.shopPool,t=new q(e.color).multiplyScalar(e.strength),n=new Float32Array(l.length*3),r=new Float32Array(l.length*2),i=new Float32Array(l.length),a=new Float32Array(l.length*3);l.forEach((e,o)=>{let s=Math.hypot(e.dir.x,e.dir.z)||1;n.set([e.pos.x,e.pos.y,e.pos.z],o*3),r.set([e.dir.x/s,e.dir.z/s],o*2),i[o]=e.width??4,a.set([t.r,t.g,t.b],o*3)}),this.spillGeo.setAttribute(`aCenter`,new N(n,3)),this.spillGeo.setAttribute(`aOut`,new N(r,2)),this.spillGeo.setAttribute(`aWidth`,new N(i,1)),this.spillGeo.setAttribute(`aStrength`,new N(a,3)),this.spillGeo.instanceCount=l.length,this.spillMesh.material.uniforms.uSpill.value.set(e.reach,e.soft),p.add(this.spillMesh)}if(c.length){let e=new q(Y.lights.lampColor),t=new q(Y.lights.whiteLampColor),n=new Float32Array(c.length*3),r=new Float32Array(c.length),i=new Float32Array(c.length*3);c.forEach((a,o)=>{n.set([a.pos.x,a.pos.y,a.pos.z],o*3);let s=!!(a.variant&2);r[o]=s?Y.lights.smallPoolRadius:Y.lights.poolRadius;let c=(a.variant&1?t.clone().multiplyScalar(.85):e.clone()).multiplyScalar(s?Y.lights.smallPoolStrength:1);i.set([c.r,c.g,c.b],o*3)}),this.lampGeo.setAttribute(`aCenter`,new N(n,3)),this.lampGeo.setAttribute(`aRadius`,new N(r,1)),this.lampGeo.setAttribute(`aStrength`,new N(i,3)),this.lampGeo.instanceCount=c.length,p.add(this.lampMesh)}p.children.length&&d(p)}p.clear()}return e.setRenderTarget(a),e.autoClear=s,e.setClearColor(c,l),n.next>=n.steps.length&&(this.front=i,this.key=n.key,this.frontRegion.set(n.minX,n.minZ,1/n.size,n.refY),this.job=null,this.bakes++),u}proxy(e,t=!0){let n=this.proxies.get(e);if(!n){let t=t=>{let n=new x(e.geometry,t);return n.matrixAutoUpdate=!1,n.frustumCulled=!1,n};n={opaque:t(this.casterMat),cutout:t(this.casterCutMat),height:t(this.heightMat)},this.proxies.set(e,n)}if(t)for(let t of[n.opaque,n.cutout,n.height])t.geometry=e.geometry,t.matrix.copy(e.matrixWorld),t.matrixWorld.copy(e.matrixWorld);return n}},Ca=`
in vec4 aBlob;     // centre x, z, half length (along heading), half width
in vec4 aBlob2;    // heading sin, cos, root y (fallback ground), car-like 0/1
uniform sampler2D uGround;
uniform vec4 uGroundRegion;
uniform sampler2D uGroundNear;
uniform vec4 uGroundNearRegion;
out vec2 vQ;
out float vCar;
out vec3 vWorld;
float groundAt(vec2 xz, float fallback) {
  vec2 uvn = (xz - uGroundNearRegion.xy) * uGroundNearRegion.z;
  if (uGroundNearRegion.z > 0.0 && all(greaterThan(uvn, vec2(0.0))) && all(lessThan(uvn, vec2(1.0)))) {
    float h = textureLod(uGroundNear, uvn, 0.0).a;
    if (h > -20000.0) return h + uGroundNearRegion.w;
  }
  vec2 uvf = (xz - uGroundRegion.xy) * uGroundRegion.z;
  if (uGroundRegion.z > 0.0 && all(greaterThan(uvf, vec2(0.0))) && all(lessThan(uvf, vec2(1.0)))) {
    float h = textureLod(uGround, uvf, 0.0).a;
    if (h > -20000.0) return h + uGroundRegion.w;
  }
  return fallback;
}
void main() {
  vec2 q = position.xy;                 // -1..1 quad corner
  vec2 fwd = vec2(aBlob2.x, aBlob2.y);  // heading as (x, z)
  vec2 side = vec2(fwd.y, -fwd.x);
  vec2 xz = aBlob.xy + fwd * q.y * aBlob.z + side * q.x * aBlob.w;
  float y = groundAt(xz, aBlob2.z) + 0.04;
  vQ = q;
  vCar = aBlob2.w;
  vWorld = vec3(xz.x, y, xz.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`,wa=`
out highp vec4 fragColor;
uniform float uBlobStrength;
uniform vec3 uAmbGround;
in vec2 vQ;
in float vCar;
in vec3 vWorld;
${e}
void main() {
  // soft rounded rectangle, darkest under the body
  vec2 a = abs(vQ);
  float d = length(max(a - vec2(0.6, 0.72), 0.0)) / 0.36;
  float body = 1.0 - smoothstep(0.0, 1.0, max(d, max(a.x, a.y) * 0.25));
  float k = body * 0.85;
  if (vCar < 0.5) {
    // people and small movers: round and soft, darkest under the feet
    float r = length(vQ);
    k = (1.0 - smoothstep(0.25, 1.0, r)) * 0.75;
  } else {
    // tyre contact patches
    vec2 t = vec2(0.5, 0.56);
    vec2 w = (a - t) / vec2(0.14, 0.13);
    k = max(k, 1.0 - smoothstep(0.3, 1.0, length(w)));
  }
  float f = fogAmount(vWorld, cameraPosition);
  fragColor = vec4(uAmbGround * 0.1, clamp(k, 0.0, 1.0) * uBlobStrength * (1.0 - f));
}
`,Ta=class{motion;mesh;geo=new y;cap=0;a=new Float32Array;b=new Float32Array;info=new WeakMap;constructor(e){this.motion=e;let t=new W(2,2);this.geo.index=t.index,this.geo.setAttribute(`position`,t.getAttribute(`position`));let n=new G({glslVersion:u,uniforms:X,vertexShader:Ca,fragmentShader:wa,transparent:!0,depthWrite:!1,depthTest:!0,side:2});n.name=`dynamic-blobs`,this.mesh=new x(this.geo,n),this.mesh.name=`dynamic-blobs`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=10}rootInfo(e){let t=this.info.get(e);if(t)return t;let n=new ze,r=e.matrixWorld.clone().invert(),i=new J;return e.traverse(e=>{let t=e;if(!t.isMesh||!t.geometry||t.material!==at.opaque&&t.material!==at.cutout)return;let a=r.clone().multiply(t.matrixWorld),o=t.geometry.getAttribute(`position`);if(o?.array?.length)for(let e=0;e<o.count;e++)n.expandByPoint(i.fromBufferAttribute(o,e).applyMatrix4(a));else t.geometry.boundingBox&&n.union(t.geometry.boundingBox.clone().applyMatrix4(a))}),t={box:n},this.info.set(e,t),t}update(e){let t=[];if(Y.shadows.enabled&&Y.shadows.blob>0)for(let n of e.children){if(!n.visible||n.name.startsWith(`static `)||n===this.mesh)continue;let e=!1,r=!1;if(n.traverseVisible(t=>{let n=t;!n.isMesh||n.material!==at.opaque&&n.material!==at.cutout||(r=!0,this.motion.moved(n)&&(e=!0))}),!r||!e)continue;let{box:i}=this.rootInfo(n);if(i.isEmpty())continue;let a=n.matrixWorld.elements,o=a[8],s=a[10],c=Math.hypot(o,s)||1;o/=c,s/=c;let l=new J((i.min.x+i.max.x)/2,0,(i.min.z+i.max.z)/2).applyMatrix4(n.matrixWorld),u=i.max.z-i.min.z,d=i.max.x-i.min.x,f=n.userData?.blob,p=0,m,h;typeof f==`number`?m=h=f/2:Array.isArray(f)?(h=f[0]/2,m=f[1]/2,p=+(f[1]>2.5)):u>2.5?(p=1,m=u*1.3/2,h=d*1.65/2):m=h=Math.min(1,Math.max(.5,Math.max(u,d)*1.6))/2,t.push([l.x,l.z,m,h,o,s,n.position.y,p])}let n=t.length;return n>this.cap&&(this.cap=Math.max(16,n*2),this.a=new Float32Array(this.cap*4),this.b=new Float32Array(this.cap*4),this.geo.setAttribute(`aBlob`,new N(this.a,4)),this.geo.setAttribute(`aBlob2`,new N(this.b,4))),t.forEach((e,t)=>{this.a.set(e.slice(0,4),t*4),this.b.set(e.slice(4,8),t*4)}),this.cap&&(this.geo.getAttribute(`aBlob`).needsUpdate=!0,this.geo.getAttribute(`aBlob2`).needsUpdate=!0),this.geo.instanceCount=n,this.mesh.visible=n>0,n}},Ea=new J,Da=new J,Oa=new J,ka=new J,Aa=class{reversed;rt=null;cam=new ge(-1,1,1,-1,1,100);matrix=new oe;extent=new We(1,1);range=1;key=``;lastDrawCalls=0;constructor(e){this.reversed=e}newRun(){this.key=``}target(e){if(this.rt?.width===e)return this.rt;this.rt?.dispose();let t=new I(e,e,{format:z,type:Ve,minFilter:B,magFilter:B,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1});return t.depthTexture=new ue(e,e,this.reversed?h:je),t.depthTexture.minFilter=t.depthTexture.magFilter=B,this.key=``,this.rt=t}ensure(e,t,n,r){let i=Y.sunShadow,a=Math.max(256,Math.min(4096,Math.round(i.resolution))),o=this.target(a),s=Math.max(10,i.region);n.getWorldDirection(Ea),Ea.y=0,Ea.lengthSq()<1e-6&&Ea.set(0,0,-1),Ea.normalize();let c=s/8,l=e=>Math.round(e/c)*c,u=l(n.position.x+Ea.x*s*.5),d=l(n.position.z+Ea.z*s*.5),f=l(n.position.y),p=ka.copy(X.uSunDir.value),m=Math.sin(Math.max(0,Math.min(89,i.minElevation))*Math.PI/180);if(p.y<m){let e=Math.hypot(p.x,p.z)||1;p.set(p.x/e*Math.sqrt(1-m*m),m,p.z/e*Math.sqrt(1-m*m))}let h=[u,f,d,p.x.toFixed(4),p.y.toFixed(4),p.z.toFixed(4),a,s,t.id,r.signature].join(`|`),g=0;return h!==this.key&&(g=this.bake(e,t,r,o,u,f,d,s,p),this.key=h),X.uSunShadowMap.value=o.depthTexture,X.uSunShadowMatrix.value.copy(this.matrix),X.uSunShadowParams.value.set(+!!this.reversed,(i.bias+2.5*i.soft)/this.range,i.normalOffset,i.debug?2:1),X.uSunShadowSoft.value.set(i.soft/this.extent.x,i.soft/this.extent.y),this.lastDrawCalls=g,g}bake(e,t,n,r,i,a,o,s,c){let l=this.cam;Oa.set(i,a,o),l.up.set(0,1,0),Math.abs(c.y)>.99&&l.up.set(0,0,-1),l.position.copy(Oa).addScaledVector(c,1e3),l.lookAt(Oa),l.updateMatrixWorld();let u=1/0,d=-1/0,f=1/0,p=-1/0,m=1/0,h=-1/0;for(let e=0;e<16;e++)for(let t of[a-60,a+90]){let n=e/16*Math.PI*2;Da.set(i+s*Math.cos(n),t,o+s*Math.sin(n)).applyMatrix4(l.matrixWorldInverse),u=Math.min(u,Da.x),d=Math.max(d,Da.x),f=Math.min(f,Da.y),p=Math.max(p,Da.y),m=Math.min(m,-Da.z),h=Math.max(h,-Da.z)}l.left=u,l.right=d,l.bottom=f,l.top=p,l.near=Math.max(1,m-800),l.far=h+20,l._reversedDepth=this.reversed,l.updateProjectionMatrix(),this.matrix.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),this.extent.set(d-u,p-f),this.range=l.far-l.near;let g=new Set([...n.casters,...n.ground]),_=[],v=[];t.traverseVisible(e=>{let t=e;t.isMesh&&(g.has(t)?_.push([t,t.material]):v.push(t))});for(let[e]of _)e.material=e.material===at.cutout?et.cutout:et.opaque;for(let e of v)e.visible=!1;let y=e.getClearColor(new q),b=e.getClearAlpha();e.setRenderTarget(r),e.setClearColor(16777215,1),e.render(t,l);let x=e.info.render.calls;e.setClearColor(y,b);for(let[e,t]of _)e.material=t;for(let e of v)e.visible=!0;return x}},ja=`
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ma=e=>`
out highp vec4 fragColor;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uExposure;
uniform float uContrast;
uniform float uSaturation;
uniform vec3 uTint;
uniform vec3 uWash;
uniform float uWashAmount;
uniform float uVignette;
uniform float uDither;
uniform float uSharp;   // integer pre-scale factor for the sharp upscale (1 = plain bilinear)
uniform vec2 uSrcSize;
in vec2 vUv;
// sharp bilinear: nearest-neighbour up to an integer multiple, bilinear only across texel edges
vec2 sharpUv(vec2 uv) {
  if (uSharp <= 1.0) return uv;
  vec2 texel = uv * uSrcSize;
  vec2 fl = floor(texel);
  vec2 cd = fract(texel) - 0.5;
  vec2 range = vec2(0.5 - 0.5 / uSharp);
  vec2 f = (cd - clamp(cd, -range, range)) * uSharp + 0.5;
  return (fl + f) / uSrcSize;
}
float ditherHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
${e}
void main() {
#ifdef STYLE_SCENE
  vec3 c = styleScene(sharpUv(vUv));
#else
  vec3 c = texture(tScene, sharpUv(vUv)).rgb;
#endif
  c += texture(tBloom, vUv).rgb * uBloom;
  c *= uExposure;
  // the era's colour filter: screen toward a colour (lifts shadows: sepia sunsets, blue haze)
  c = 1.0 - (1.0 - c) * (1.0 - uWash * uWashAmount);
  c = (c - 0.5) * uContrast + 0.5;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), c, uSaturation) * uTint;
#ifdef STYLE_POST
  c = stylePost(c, vUv);
#endif
  vec2 q = vUv - 0.5;
  c *= 1.0 - uVignette * dot(q, q) * 2.0;
  c += (ditherHash(gl_FragCoord.xy) - 0.5) * uDither * 0.5;
  fragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`,Na=e=>`
out highp vec4 fragColor;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uExposure;
uniform float uContrast;
uniform float uSaturation;
uniform vec3 uTint;
uniform vec3 uWash;
uniform float uWashAmount;
uniform float uContrast2;
uniform float uSaturation2;
uniform vec3 uTint2;
uniform vec3 uWash2;
uniform float uWashAmount2;
uniform float uVignette;
uniform float uDither;
uniform float uSharp;
uniform vec2 uSrcSize;
in vec2 vUv;
vec2 sharpUv(vec2 uv) {
  if (uSharp <= 1.0) return uv;
  vec2 texel = uv * uSrcSize;
  vec2 fl = floor(texel);
  vec2 cd = fract(texel) - 0.5;
  vec2 range = vec2(0.5 - 0.5 / uSharp);
  vec2 f = (cd - clamp(cd, -range, range)) * uSharp + 0.5;
  return (fl + f) / uSrcSize;
}
float ditherHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 grade(vec3 c, vec3 wash, float washAmount, float contrast, float saturation, vec3 tint) {
  c = 1.0 - (1.0 - c) * (1.0 - wash * washAmount);
  c = (c - 0.5) * contrast + 0.5;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  return mix(vec3(l), c, saturation) * tint;
}
${e}
void main() {
  vec4 s = texture(tScene, sharpUv(vUv));
  vec3 c = s.rgb;
#ifdef STYLE_SCENE
  c = styleScene(sharpUv(vUv));
#endif
  c += texture(tBloom, vUv).rgb * uBloom;
  c *= uExposure;
  vec3 own = grade(c, uWash, uWashAmount, uContrast, uSaturation, uTint);
  vec3 other = grade(c, uWash2, uWashAmount2, uContrast2, uSaturation2, uTint2);
  c = mix(other, own, clamp(s.a, 0.0, 1.0));
#ifdef STYLE_POST
  c = stylePost(c, vUv);
#endif
  vec2 q = vUv - 0.5;
  c *= 1.0 - uVignette * dot(q, q) * 2.0;
  c += (ditherHash(gl_FragCoord.xy) - 0.5) * uDither * 0.5;
  fragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`,Pa=e=>`
out highp vec4 fragColor;
uniform sampler2D tScene;
uniform vec2 uSrcSize;
in vec2 vUv;
float ditherHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
${e}
void main() {
  fragColor = vec4(styleScene(vUv), texture(tScene, vUv).a);
}
`,Fa=Ma(``),Ia=Na(``),La=`
void main() {
  gl_Position = vec4(position.xy, 0.5, 1.0);
}
`,Ra=`
out highp vec4 fragColor;
void main() {
  fragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`,za=`
out highp vec4 fragColor;
uniform sampler2D tScene;
uniform vec2 uTexel;
uniform float uThreshold;
in vec2 vUv;
void main() {
  // 4 taps = a 4x4 box when downsampling by 4 with bilinear filtering
  vec3 c = vec3(0.0);
  c += texture(tScene, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture(tScene, vUv + uTexel * vec2(1.0, -1.0)).rgb;
  c += texture(tScene, vUv + uTexel * vec2(-1.0, 1.0)).rgb;
  c += texture(tScene, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  c *= 0.25;
  float m = max(c.r, max(c.g, c.b));
  float k = max(m - uThreshold, 0.0) / max(1.0 - uThreshold, 1e-3);
  fragColor = vec4(c * (k * k / max(m, 1e-3)), 1.0);
}
`,Ba=`
out highp vec4 fragColor;
uniform sampler2D tIn;
uniform vec2 uStep;
uniform float uW[6];
in vec2 vUv;
void main() {
  vec3 c = texture(tIn, vUv).rgb * uW[0];
  for (int i = 1; i < 6; i++) {
    c += texture(tIn, vUv + uStep * float(i)).rgb * uW[i];
    c += texture(tIn, vUv - uStep * float(i)).rgb * uW[i];
  }
  fragColor = vec4(c, 1.0);
}
`;function Va(e,t){let n=Array.from({length:e},(e,n)=>Math.exp(-(n*n)/(2*t*t))),r=n.reduce((e,t,n)=>e+(n?2*t:t),0);return n.map(e=>e/r)}var Ha=class e{canvas;renderer;gl;rt;bloomA;bloomB;quadScene=new he;quadCam=new ge(-1,1,1,-1,0,1);quad;composite;bright;blur;out=[1,1];motion=new ba;ground=new Sa(this.motion,`far`);groundNear=new Sa(this.motion,`near`);lights=new r(this.motion);blobs=new Ta(this.motion);shaderErrors=[];completeBakes=typeof location<`u`&&new URLSearchParams(location.search).has(`harness`);reversedDepth;constructor(e){this.canvas=e;let t;try{t=new oa({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1,stencil:!1,reversedDepthBuffer:!0})}catch(e){throw Error(`WebGL2 unavailable: ${e instanceof Error?e.message:e}`)}this.renderer=t,this.gl=t.getContext(),this.reversedDepth=t.capabilities.reversedDepthBuffer===!0,this.sunShadow=new Aa(this.reversedDepth),this.reversedDepth&&(at.blob.polygonOffsetFactor=2,at.blob.polygonOffsetUnits=2),at.blob.visible=!1,t.setPixelRatio(1),t.outputColorSpace=R,t.autoClear=!0,t.debug.checkShaderErrors=!0,t.debug.onShaderError=(e,t,n,r)=>{let i=t=>e.getShaderInfoLog(t)||``,a=`shader compile/link error: ${e.getProgramInfoLog(t)||``} ${i(n)} ${i(r)}`.trim();this.shaderErrors.push(a),console.error(a)};let n={minFilter:F,magFilter:F,generateMipmaps:!1};this.rt=this.makeSceneTarget(4,4,0),this.bloomA=new I(4,4,{...n,depthBuffer:!1}),this.bloomB=new I(4,4,{...n,depthBuffer:!1});let r=(e,t)=>new G({glslVersion:u,uniforms:t,vertexShader:ja,fragmentShader:e,depthTest:!1,depthWrite:!1});this.composite=r(Fa,{tScene:{value:this.rt.texture},tBloom:{value:this.bloomB.texture},uBloom:{value:0},uExposure:{value:1},uContrast:{value:1},uSaturation:{value:1},uTint:{value:new q(1,1,1)},uWash:{value:new q(0,0,0)},uWashAmount:{value:0},uVignette:{value:0},uDither:{value:0},uSharp:{value:1},uSrcSize:{value:new We(1,1)}}),this.bright=r(za,{tScene:{value:this.rt.texture},uTexel:{value:new We},uThreshold:{value:.75}}),this.blur=r(Ba,{tIn:{value:null},uStep:{value:new We},uW:{value:Va(6,2)}});let i=new Pe;i.setAttribute(`position`,new _([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new x(i,this.composite),this.quad.frustumCulled=!1,this.quadScene.add(this.quad),this.compositeTwo=r(Ia,{...this.composite.uniforms,uContrast2:{value:1},uSaturation2:{value:1},uTint2:{value:new q(1,1,1)},uWash2:{value:new q(0,0,0)},uWashAmount2:{value:0}});let a=new G({glslVersion:u,vertexShader:La,fragmentShader:Ra,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendEquation:100,blendSrc:200,blendDst:201,blendSrcAlpha:201,blendDstAlpha:200});this.compositeOwn=new Set(Object.keys(this.compositeTwo.uniforms)),this.alphaOne=new x(i,a),this.alphaOne.frustumCulled=!1,this.alphaOne.renderOrder=1990}compositeTwo;alphaOne;clipCam=new K;kits=new Map;run=0;glassTargets=[];glassFrame=0;static KIT_IDLE=120;kitOf(t){let n=this.kits.get(t);if(!n){let i=[...this.kits.values()].filter(t=>t.lastFrame<this.glassFrame-e.KIT_IDLE).sort((e,t)=>e.lastFrame-t.lastFrame)[0];if(i)this.kits.delete(i.scene),i.scene=t,this.kitNewRun(i),n=i;else{let e=new ba;n={scene:t,motion:e,ground:new Sa(e,`far`),groundNear:new Sa(e,`near`),lights:new r(e),blobs:new Ta(e),lastSimTime:-1/0,run:this.run,lastFrame:this.glassFrame}}this.kits.set(t,n)}return n.lastFrame=this.glassFrame,n.run!==this.run&&(n.run=this.run,this.kitNewRun(n)),n}kitNewRun(e){e.motion.reset(),e.lights.newRun(),e.ground.newRun(),e.groundNear.newRun(),e.lastSimTime=-1/0}forget(e){let t=this.kits.get(e);t&&this.dropKit(t)}compileGlass(e,t,n=!1){this.syncStyle();let r=this.renderer,i=new he;for(let t of e)i.add(t);i.add(this.alphaOne);let a=this.quad.material;this.quad.material=this.compositeTwo;let o=[r.compileAsync(i,t),r.compileAsync(this.quadScene,this.quadCam)];this.quad.material=a;for(let t of[...e,this.alphaOne])i.remove(t);if(n){let t=[...e.map(e=>e.material),this.alphaOne.material,this.compositeTwo];for(let e of t){let t=r.properties.get(e).currentProgram;t?.getUniforms(),t?.getAttributes()}}return Promise.all(o)}dropKit(e){for(let t of[e.ground,e.groundNear])for(let e of[`heightRT`,`skyRT`,`sunRT`,`blurRT`,`finalRT`,`lampRT`]){let n=t[e];Array.isArray(n)?n.forEach(e=>e.dispose()):n?.dispose()}this.kits.delete(e.scene)}drawThrough(e,t,n,r){let i=this.renderer,o=Math.max(0,Math.round(Y.msaa)),s=o>0;at.cutout.alphaToCoverage!==s&&(at.cutout.alphaToCoverage=s,at.cutout.needsUpdate=!0),t.aspect=n/r,t.far=Y.drawDistance,this.reversedDepth&&(t._reversedDepth=!0),t.updateProjectionMatrix(),t.updateMatrixWorld();let c=[],l=0,u=0,d=0,f=null;r/Math.max(1,Y.internalHeight);let p=i.getClearColor(new q),m=i.getClearAlpha();i.setClearColor(0,0),this.glassFrame++;let h=0;for(let p of e){let e=p.groups.map(e=>({g:e,rect:e.rect(t,[n,r])})).filter(e=>e.rect&&ct(t,e.g.plane,this.clipCam,this.reversedDepth));if(!e.length)continue;p.enter();let{kit:m,bakeDraws:g}=this.enterKit(p,t,n,r,this.completeBakes);d+=g,X.uInternalH.value=r,X.uA2C.value=+!!s;let _=m.lights.drawCalls>0,v=m.blobs.update(p.scene)>0;e.forEach(({g:e,rect:a})=>{let s=h++,d=this.glassTargets[s];d&&d.samples===o||(d?.dispose(),d=this.glassTargets[s]=this.makeSceneTarget(n,r,o)),(d.width!==n||d.height!==r)&&d.setSize(n,r),ct(t,e.plane,this.clipCam,this.reversedDepth),d.viewport.set(0,0,n,r),d.scissor.set(a[0],a[1],a[2],a[3]),d.scissorTest=!0,i.setRenderTarget(d),_&&p.scene.add(m.lights.corona),v&&p.scene.add(m.blobs.mesh),i.render(p.scene,this.clipCam),_&&p.scene.remove(m.lights.corona),v&&p.scene.remove(m.blobs.mesh),l+=i.info.render.calls,u+=i.info.render.triangles,e.portal.material.uniforms.tOther.value=d.texture,e.mask.material.uniforms.tOther.value=d.texture,c.push(e)}),p.leave?.(),f??={key:a?.key,weather:a?.weather}}return i.setClearColor(p,m),{drawn:c,calls:l,tris:u,bake:d,grade:f}}enterKit(e,t,n,r,i){let a=this.renderer;this.restyleAtlas();let o=this.kitOf(e.scene),s=X.uTime.value;s<o.lastSimTime&&this.kitNewRun(o),o.lastSimTime=s;let c=X.uAtlas.value?.image;X.uAtlasSize.value.set(c?.width??1,c?.height??1),X.uWire.value.x=Y.wires.minPixels*(r/Math.max(1,Y.internalHeight)),e.scene.updateMatrixWorld(),Xe(s),o.lights.update(e.scene,t,[n,r]);let l=o.ground.classify(e.scene),u=o.lights.lamps();return{kit:o,bakeDraws:o.ground.ensure(a,e.scene,t,u,o.lights.lampSignature,l,i)+o.groundNear.ensure(a,e.scene,t,u,o.lights.lampSignature,l,i)}}hasKit(e){return this.kits.has(e)}prepareThrough(e,t,n,r){let[i,a]=this.internalSize(),o=Math.max(0,Math.round(Y.msaa));for(let e=0;e<n;e++){let t=this.glassTargets[e];!t||t.samples!==o?(t?.dispose(),this.glassTargets[e]=this.makeSceneTarget(i,a,o)):(t.width!==i||t.height!==a)&&t.setSize(i,a),this.renderer.initRenderTarget(this.glassTargets[e])}e.enter();try{this.enterKit(e,t,i,a,!0)}finally{e.leave?.(),r(),this.restyleAtlas()}}makeSceneTarget(e,t,n,r=!1){let i=new I(e,t,{minFilter:F,magFilter:F,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:n});return this.reversedDepth?i.depthTexture=new ue(e,t,h):r&&(i.depthTexture=new ue(e,t,je)),i}compositeOwn=new Set;styleKey=`0|false`;sunShadow;sunOn=!1;scenePass=null;sceneRT=null;styleDepth=!1;hide=null;syncStyle(){let e=Pt.def,t=!!e&&Y.sunShadow.enabled;if(this.styleKey!==`${Pt.version}|${t}`){this.styleKey=`${Pt.version}|${t}`,this.sunOn=t,this.sunShadow.newRun(),t||(X.uSunShadowParams.value.w=0),nt(e,t),kt(e);let n=tt(e),r={...e?.uniforms??{}};if(rt(e)){for(let e of[`uSunDir`,`uSunColor`,`uAmbSky`,`uAmbGround`,`uFogColor`,`uSkyZenith`,`uSkyHorizon`,`uNightGlow`,`uTime`,`uHour`])r[e]=X[e];Object.assign(r,{tDepth:{value:null},uStyleNearFar:{value:new We(.1,1e3)},uStyleReversed:{value:0},uStyleHalf:{value:new We(1,1)},uStyleHasDepth:{value:0},uStyleCamPos:{value:new J},uStyleCamRot:{value:new L}})}for(let[e,t]of[[this.composite,Ma(n)],[this.compositeTwo,Na(n)]]){for(let[t,n]of Object.entries(r))this.compositeOwn.has(t)||(e.uniforms[t]=n);e.fragmentShader!==t&&(e.fragmentShader=t,e.needsUpdate=!0)}this.styleDepth=rt(e);let i=ot(e);this.scenePass?.dispose(),this.scenePass=i?new G({glslVersion:u,uniforms:{tScene:{value:null},uSrcSize:this.composite.uniforms.uSrcSize,...r},vertexShader:ja,fragmentShader:Pa(i),depthTest:!1,depthWrite:!1}):null,this.ground.newRun(),this.groundNear.newRun()}this.restyleAtlas()}restyleAtlas(){let e=Ft(Pt.def);Mt(X.uAtlas.value,this.renderer,e?.key??``,e?.paint??null)}setOutputSize(e,t){this.out=[Math.max(1,Math.round(e)),Math.max(1,Math.round(t))],this.renderer.setSize(this.out[0],this.out[1],!1)}get outputSize(){return this.out}capture=typeof location<`u`&&new URLSearchParams(location.search).has(`harness`);playLines=0;internalSize(){let[e,t]=this.out,n=this.capture?Y.internalHeight:this.playLines||Y.playInternalHeight,r=Math.min(t,Math.max(16,Math.round(n)));return[Math.max(1,Math.round(r*e/t)),r]}pass(e,t){return this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quadScene,this.quadCam),this.renderer.info.render.calls}newRun(){this.motion.reset(),this.lights.newRun(),this.ground.newRun(),this.groundNear.newRun(),this.sunShadow.newRun(),this.run++;for(let e of[...this.kits.values()])e.scene.userData.disposed&&this.dropKit(e)}lastSimTime=new WeakMap;render(e,t,n={}){this.syncStyle();let r=null;if(this.hide){r=e.children.filter(e=>e.visible&&this.hide(e));for(let e of r)e.visible=!1}try{return this.renderFrame(e,t,n)}finally{if(r)for(let e of r)e.visible=!0}}renderFrame(e,t,r){let i=r.through?.length?this.drawThrough(r.through,t,...this.internalSize()):null;i?.drawn.length&&(r.restore?.(),this.restyleAtlas());let o=i?.drawn??[],s=X.uTime.value;s<(this.lastSimTime.get(e)??-1/0)&&this.newRun(),this.lastSimTime.set(e,s);let[c,l]=this.internalSize();(this.rt.width!==c||this.rt.height!==l)&&this.rt.setSize(c,l);let u=Math.max(4,Math.round(c/4)),d=Math.max(4,Math.round(l/4));(this.bloomA.width!==u||this.bloomA.height!==d)&&(this.bloomA.setSize(u,d),this.bloomB.setSize(u,d)),t.aspect=c/l,t.far=Y.drawDistance,t.updateProjectionMatrix();let f=X.uAtlas.value?.image;X.uAtlasSize.value.set(f?.width??1,f?.height??1);let p=this.renderer,m=l/Math.max(1,Y.internalHeight);X.uWire.value.x=Y.wires.minPixels*m,e.updateMatrixWorld(),t.updateMatrixWorld(),Xe(s),this.lights.update(e,t,[c,l]);let h=this.ground.classify(e),g=this.lights.lamps(),_=this.ground.ensure(p,e,t,g,this.lights.lampSignature,h,this.completeBakes)+this.groundNear.ensure(p,e,t,g,this.lights.lampSignature,h,this.completeBakes)+(this.sunOn?this.sunShadow.ensure(p,e,t,h):0),v=Math.max(0,Math.round(Y.msaa));(this.rt.samples!==v||this.styleDepth&&!this.rt.depthTexture)&&(this.rt.dispose(),this.rt=this.makeSceneTarget(c,l,v,this.styleDepth),this.composite.uniforms.tScene.value=this.rt.texture,this.bright.uniforms.tScene.value=this.rt.texture);let y=v>0;at.cutout.alphaToCoverage!==y&&(at.cutout.alphaToCoverage=y,at.cutout.needsUpdate=!0),X.uInternalH.value=l,X.uA2C.value=+!!y,p.setRenderTarget(this.rt);let b=Y.debug.overdraw>0,x=[];b&&(p.setClearColor(0,1),e.traverseVisible(e=>{let t=e;t.isMesh&&(x.push([t,t.material]),t.material===at.cutout?t.material=it.cutout:t.material===at.opaque?t.material=it.opaque:t.visible=!1)}));let S=this.lights.drawCalls>0&&!b,C=!b&&this.blobs.update(e)>0;S&&e.add(this.lights.corona),C&&e.add(this.blobs.mesh);for(let t of o)t.mask.material.polygonOffset=!0,t.mask.material.polygonOffsetFactor=this.reversedDepth?1:-1,t.mask.material.polygonOffsetUnits=this.reversedDepth?1:-1,t.mask.renderOrder=1991,e.add(t.portal,t.mask);o.length&&e.add(this.alphaOne),p.render(e,t),S&&e.remove(this.lights.corona),C&&e.remove(this.blobs.mesh);for(let t of o)e.remove(t.portal,t.mask);o.length&&e.remove(this.alphaOne);for(let[e,t]of x)e.material=t,e.visible=!0;let w=p.info.render.calls-+!!S-!!C-(o.length?o.length+1:0),T=p.info.render.triangles+(i?.tris??0),E=+!!S+ +!!C+(o.length?o.length+1:0),D=Y.grade,O=D.bloom;Math.max(O.strength,O.nightStrength)>0&&!b&&(this.bright.uniforms.uThreshold.value=O.threshold+(O.nightThreshold-O.threshold)*X.uNightGlow.value,this.bright.uniforms.uTexel.value.set(1/c,1/l),E+=this.pass(this.bright,this.bloomA),this.blur.uniforms.uW.value=Va(6,Math.max(.5,O.radius*m)),this.blur.uniforms.tIn.value=this.bloomA.texture,this.blur.uniforms.uStep.value.set(1/u,0),E+=this.pass(this.blur,this.bloomB),this.blur.uniforms.tIn.value=this.bloomB.texture,this.blur.uniforms.uStep.value.set(0,1/d),E+=this.pass(this.blur,this.bloomA));let k=this.composite.uniforms,A=a?.key;k.tBloom.value=this.bloomA.texture,k.uBloom.value=b?0:O.strength+(O.nightStrength-O.strength)*X.uNightGlow.value,k.uExposure.value=D.exposure;let ee=n(a?.weather);if(k.uContrast.value=D.contrast*ee.contrast*(A?.contrast??1),k.uSaturation.value=D.saturation*ee.saturation*(A?.saturation??1),k.uTint.value.set(D.tint).multiply(new q(A?.tint??`#ffffff`)),k.uWash.value.set(A?.wash??`#000000`),k.uWashAmount.value=(A?.washAmount??0)*D.wash,k.uVignette.value=D.vignette,k.uDither.value=D.dither/255,k.uSharp.value=!this.capture&&Y.playUpscale===`sharp`?Math.max(1,Math.floor(this.out[1]/l)):1,k.uSrcSize.value.set(c,l),this.styleDepth){k.tDepth.value=this.rt.depthTexture,k.uStyleHasDepth.value=+!!this.rt.depthTexture,k.uStyleReversed.value=+!!this.reversedDepth,k.uStyleNearFar.value.set(t.near,t.far);let e=Math.tan(t.fov*Math.PI/360)/Math.max(t.zoom,1e-6);k.uStyleHalf.value.set(e*t.aspect,e),k.uStyleCamPos.value.setFromMatrixPosition(t.matrixWorld),k.uStyleCamRot.value.setFromMatrix4(t.matrixWorld)}if(this.scenePass&&!b?(this.sceneRT||=new I(c,l,{minFilter:F,magFilter:F,generateMipmaps:!1,depthBuffer:!1}),(this.sceneRT.width!==c||this.sceneRT.height!==l)&&this.sceneRT.setSize(c,l),this.scenePass.uniforms.tScene.value=this.rt.texture,E+=this.pass(this.scenePass,this.sceneRT),k.tScene.value=this.sceneRT.texture):k.tScene.value=this.rt.texture,b&&(k.uExposure.value=32/Y.debug.overdraw,k.uContrast.value=1,k.uSaturation.value=1,k.uTint.value.setRGB(1,1,1),k.uWashAmount.value=0,k.uVignette.value=0),o.length){let e=this.compositeTwo.uniforms,t=i.grade?.key,r=n(i.grade?.weather);e.uContrast2.value=D.contrast*r.contrast*(t?.contrast??1),e.uSaturation2.value=D.saturation*r.saturation*(t?.saturation??1),e.uTint2.value.set(D.tint).multiply(new q(t?.tint??`#ffffff`)),e.uWash2.value.set(t?.wash??`#000000`),e.uWashAmount2.value=(t?.washAmount??0)*D.wash,E+=this.pass(this.compositeTwo,null)}else E+=this.pass(this.composite,null);let j=i?.drawn.length?{drawCalls:i.calls,triangles:i.tris,planes:i.drawn.length,bakeDrawCalls:i.bake}:void 0;return{drawCalls:w+E+(j?.drawCalls??0),triangles:T,internal:[c,l],output:this.out,sceneDrawCalls:w,postDrawCalls:E,bakeDrawCalls:_,lights:this.lights.lights.length,...j?{through:j}:{}}}glInfo(){let e=this.gl,t=e.getExtension(`WEBGL_debug_renderer_info`),n=String(t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):e.getParameter(e.VENDOR)),r=String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER));return{vendor:n,renderer:r,software:/swiftshader|llvmpipe|software|basic render/i.test(r),maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE)}}},Ua={fadeOut:.4,hold:.15,fadeIn:.5},Wa=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Ga=class{world;home;fade=0;ticks=0;error=null;loadTimes=[];worlds=new Map;loads=new Map;trip=null;swapListeners=[];loader;rooms;descs=new Map;views=new Map;stateDirty=!1;streamer;ownWorlds;farGlass;glassNow=[];pipeline=null;constructor(e,t={}){this.world=this.home=e,this.worlds.set(e.desc.name,e),this.loader=t.load??(async(e,n)=>Dt.load(await Tt(e),{...t.world??{},...n})),this.rooms=t.rooms??[],this.onlyRooms=t.onlyRooms??!1,this.ownWorlds=!t.load,this.farGlass=t.farGlass??null,this.streamMode=t.stream??(this.ownWorlds&&Ct()?`worker`:`main`),this.streamer=new Et(this.streamMode,()=>this.home,!this.ownWorlds,(e,t,n)=>{this.loadTimes.push({scene:e,ms:t,parts:n,glass:!0}),this.stateDirty=!0},t.world??{})}streamMode;glassCompiled=!1;onlyRooms;get busy(){return this.trip!==null}get phase(){return this.trip?.phase??null}get pending(){let e=this.trip?.travel.to.scene;return e&&this.loads.get(e)||null}get loading(){let e=[...this.loads.values(),...this.streamer.pending];return e.length?Promise.all(e):null}async prepare(e=this.world){e===this.world&&this.evictFar(e.rig.camera.position);for(let t=0;t<4;t++){this.viewsFor(e,e.rig.camera,null);let t=[...this.descLoads.values(),...this.loads.values(),...this.streamer.pending];if(!t.length)return;await Promise.all(t)}}invalidate(){this.stateDirty=!0}loaded(e){return this.worlds.get(e)??null}onSwap(e){return this.swapListeners.push(e),()=>{let t=this.swapListeners.indexOf(e);t>=0&&this.swapListeners.splice(t,1)}}useHint(){return this.trip?null:this.world.useHint()}tick(e=vt()){this.ticks++;let t=this.trip;if(!t){this.step(e);let t=this.world.takeTravel();t&&(this.trip={travel:t,from:this.world,phase:`out`,t:0,failed:!1});return}let n=e=>Math.max(1,Math.round(e/Ht));if(t.t++,t.phase===`out`)this.step(vt()),this.world.takeTravel(),this.fade=Wa(t.t/n(Ua.fadeOut)),t.t>=n(Ua.fadeOut)&&(t.phase=`hold`,t.t=0,this.fade=1,this.need(t.travel.to.scene));else if(t.phase===`hold`){this.fade=1;let e=t.travel.to.scene,r=this.worlds.get(e);t.t>=n(Ua.hold)&&(r||!this.loads.has(e))&&(r?this.swap(t.travel,r):t.failed=!0,t.phase=`in`,t.t=0)}else this.step(vt()),this.world.takeTravel(),this.fade=1-Wa(t.t/n(Ua.fadeIn)),t.t>=n(Ua.fadeIn)&&(this.fade=0,this.trip=null)}outsideOf(e){let t=e.outside,n=t?this.worlds.get(t):void 0;return n&&n!==e?n:null}step(e){let t=this.outsideOf(this.world);t&&(this.syncOutside(t),t.tick(vt()),t.takeTravel(),this.world.activate()),this.world.tick(e)}syncOutside(e){e.timeScale=this.world.timeScale,Math.abs(e.hours-this.world.hours)>1e-9&&(e.hours=this.world.hours),e.controlling===`car`&&e.possess(`player`),e.player.enabled&&e.player.setEnabled(!1)}need(e){if(this.worlds.has(e)||this.loads.has(e))return;this.error=null,this.stateDirty=!0;let t=performance.now(),n=e=>e.complete().then(()=>e),r=this.streamer.groupBuilder,i={tilesFrom:this.world,...r?{buildGroup:r}:{}},a=this.streamer.take(e),o=a?null:this.streamer.inFlight(e),s=(a?n(a):o?o.then(()=>{let t=this.streamer.take(e);return t?n(t):this.loader(e,i)}):this.loader(e,i)).then(n=>(this.loadTimes.push({scene:e,ms:performance.now()-t,parts:{...n.loadTimings}}),this.worlds.set(e,n),this.loads.delete(e),this.stateDirty=!0,n.desc.name===this.world.outside&&this.placeOutside(n),n),t=>(this.error=`the door to "${e}" would not open: ${t instanceof Error?t.message:t}`,console.error(this.error),this.loads.delete(e),this.stateDirty=!0,null));this.loads.set(e,s)}placeOutside(e){let t=this.world,n=t.desc.doors?.find(t=>t.to.scene===e.desc.name);if(n&&e.door(n.to.door))e.arriveAt(n.to.door);else if(t.openings.length){let n=t.openings[0],r=n.corners[0].clone().lerp(n.corners[1],.5).addScaledVector(n.normal,1.5);e.player.teleport([r.x,e.surfaceAt(r.x,r.z,r.y+2)+.02,r.z],e.player.heading)}e.setTime(t.hours),this.syncOutside(e)}roomNames(e){return e.desc.interior?[]:[...new Set([...this.onlyRooms?[]:(e.desc.doors??[]).map(e=>e.to.scene),...this.rooms])]}descLoads=new Map;descOf(e){this.descs.has(e)||this.descLoads.has(e)||this.descLoads.set(e,Tt(e).then(t=>(this.descs.set(e,t),this.descLoads.delete(e)),()=>(this.descs.set(e,null),this.descLoads.delete(e))))}viewOf(e,t,n){let r=`${e.desc.name}>${t.desc.name}`,i=this.views.get(r);return i&&i.other!==t&&(i=void 0),i||this.views.set(r,i=new ft(t,n===`out`?e.openings:t.openings,n)),i}throughFor(e,t,n){return this.viewsFor(t,n,e).map(({view:r,share:i})=>r.through(e,t.hours,n,i))}viewsFor(e,t,n){let r=t.position,i=[],a=this.outsideOf(e);a?i.push({view:this.viewOf(e,a,`out`),share:1}):e.outside&&!this.worlds.has(e.outside)&&this.need(e.outside);let o=[];for(let t of this.roomNames(e)){if(!this.descs.has(t)){this.descOf(t);continue}let n=this.descs.get(t);n?.interior?.windows?.length&&(n.interior.outside??n.doors?.[0]?.to.scene)===e.desc.name&&o.push({name:t,desc:n})}let s=this.streamer.frame(o,r,n,this.ticks,t=>t===e.desc.name?null:this.worlds.get(t)??null,e=>this.free(e));e===this.world&&St(e,this.glassNow=s.map(({world:e,...t})=>t));for(let t of s)t.real&&t.world?.openings.length&&i.push({view:this.viewOf(e,t.world,`in`),share:t.share});if(n&&this.streamMode===`worker`){let r=s.find(e=>e.ready&&!e.real&&e.world?.openings.length&&e.distance<=ut.lookOut&&!n.hasKit(e.world.scene));if(r){let i=this.viewOf(e,r.world,`in`);jt(`look-in: kit and first bake`,()=>n.prepareThrough(i.through(n,e.hours,t),t,i.planes,()=>e.activate()))}}return i}frameViews(e=null){let t=this.world,n=t.rig.camera;return this.evictFar(n.position),this.viewsFor(t,n,e),this.glassNow}glass(){return this.glassNow}glassStats(){let e=this.streamer.stats;return[`rooms seen from the street: ${e.built.map(e=>`${e.scene} built in ${e.ms.toFixed(0)} ms${e.worker?` (placements in the worker)`:``} [${Object.entries(e.parts).map(([e,t])=>`${e} ${t}`).join(`, `)}]`).join(`; `)||`none built`}`,`uploads: ${e.uploadFrames} frames, the most one spent ${e.uploadWorstMs.toFixed(1)} ms; atlases built in the worker: ${e.atlasWorkerMs.map((t,n)=>`${t} ms${e.atlasWorkerStyled[n]?` (in ${e.atlasWorkerStyled[n]})`:``}`).join(`, `)||`none`}; freed: ${[...e.evicted,...this.freed].join(`, `)||`none`}${e.workerFailed?`; WORKER FAILED: ${e.workerFailed}`:``}`]}freed=[];free(e){for(let[t,n]of[...this.views])(n.other===e||t.startsWith(`${e.desc.name}>`))&&this.views.delete(t);this.pipeline?.forget(e.scene),e.dispose()}evictFar(e){if(!this.ownWorlds||this.world.desc.interior)return;let t=new Set([this.home,this.world]),n=this.outsideOf(this.world);n&&t.add(n),this.trip&&t.add(this.trip.from);for(let[n,r]of[...this.worlds]){if(t.has(r)||this.trip?.travel.to.scene===n)continue;let i=[...mt(r.desc),...(this.home.desc.doors??[]).filter(e=>e.to.scene===n).map(e=>[e.at[0],e.at.length===3?e.at[2]:e.at[1]])];!i.length||yt(i,e.x,e.z)<=ut.evict||(this.worlds.delete(n),this.freed.push(n),this.free(r))}}swap(e,t){let n=this.world;if(!t.door(e.to.door)){this.error=`scene "${t.desc.name}" has no door "${e.to.door}" (the door "${e.door}" of "${n.desc.name}" leads there)`,console.error(this.error),this.trip.failed=!0;return}!t.player.enabled&&n.outside===t.desc.name&&t.player.setEnabled(!0),t.timeScale=n.timeScale,t.hours=n.hours,t.rig.setOnFoot(n.rig.onFoot),t.rig.lens=n.rig.lens,t.rig.lensTarget=n.rig.lensTarget,t.rig.setMode(n.rig.mode),t.arriveAt(e.to.door),t.activate(),this.world=t;let r={from:n,to:t,door:e.door,arrived:e.to.door,tick:this.ticks};for(let e of[...this.swapListeners])e(r)}render(e){let t=this.draw(e,this.world);return this.fade>0&&this.veil(e,this.fade),t}draw(e,t=this.world){(this.stateDirty||this.loads.size>0||this.streamer.building||t!==this.world&&t!==this.lastDrawn||t===this.world&&this.lastDrawn!==null&&this.lastDrawn!==t)&&(this.stateDirty=!1,t.activate()),this.lastDrawn=t,this.pipeline=e;let n=t.rig.camera;t===this.world&&this.evictFar(n.position),this.streamMode===`worker`&&!this.glassCompiled&&!t.desc.interior&&this.roomNames(t).length&&(this.glassCompiled=!0,jt(`look-in: compile the glass`,()=>e.compileGlass(lt(),n,!0)).catch(e=>console.warn(`compiling the glass ahead failed (it compiles when first drawn):`,e)));let r=this.throughFor(e,t,n);return this.farGlass?.frame(t,t===this.world?this.glassNow:[],n),t.render(e,r)}lastDrawn=null;outside(){return this.outsideOf(this.world)}veilParts=null;veil(e,t){if(!this.veilParts){let e=new Pe;e.setAttribute(`position`,new _([-1,-1,0,3,-1,0,-1,3,0],3));let t=new E({color:0,transparent:!0,depthTest:!1,depthWrite:!1}),n=new x(e,t);n.frustumCulled=!1;let r=new he;r.add(n),this.veilParts={scene:r,camera:new ge(-1,1,1,-1,0,1),mat:t}}let n=e.renderer,r=this.veilParts;r.mat.opacity=Math.min(1,t);let i=n.autoClear;n.autoClear=!1,n.setRenderTarget(null),n.render(r.scene,r.camera),n.autoClear=i}},Ka=class e{scene=new he;rig=new _t;atlas;built;figure=null;radius=1;center=new J;static async load(t,n={}){let r=new e,i=await dt(t),a=n.scaleFigure!==!1&&t!==`walker`?await dt(bt):null,o=Wt(a?[i,a]:[i]);r.atlas=Gt(await Lt.build(o),o),X.uAtlas.value=r.atlas.texture,r.built=Ut(i,r.atlas,{params:n.params,seed:n.seed??1}),r.scene.add(st()),r.scene.add(r.built.root);let s=r.built.bounds,l=s.getBoundingSphere(new we);r.radius=Math.max(.5,l.radius),r.center.copy(l.center);let u=Math.max(24,r.radius*6),d=new c(e=>r.atlas.get(e));d.quad([-u/2,0,u/2],[u/2,0,u/2],[u/2,0,-u/2],[-u/2,0,-u/2],{tile:`concrete`,color:`#c8c4bc`,scale:4});let f=new x(d.toGeometries().opaque,at.opaque);if(f.name=`stage-ground`,f.position.y=-.005,r.scene.add(f),a){let e=Ut(a,r.atlas,{seed:1});e.root.position.set(s.max.x+.8,0,Math.min(s.max.z,s.min.z+(s.max.z-s.min.z)*.8)),e.root.rotation.y=Kt(180),e.root.name=`scale-figure`;for(let t of e.animators)t(e.root);r.scene.add(e.root),r.figure=e.root}return r.setView(25,18),r}setTime(e){t(i(e))}setView(e,t=18,n=1,r){let i=r?.radius??this.radius,a=r?.at??[this.center.x,this.center.y,this.center.z],o=i/Math.sin(40*Math.PI/360)*1.05*n;this.rig.setMode({kind:`orbit`,target:[a[0],a[1],a[2]],distance:o,heading:e,pitch:t,fov:40}),this.rig.update(0,null,0,0)}render(e){return e.render(this.scene,this.rig.camera)}};function qa(e){let t=e.split(/;|\bthen\b/).map(e=>e.trim()).filter(Boolean);if(!t.length)throw Error(`empty input script`);return t.map(e=>{let t=vt(),n={use:!1},r=-1;for(let i of e.split(/[\s,]+/).filter(Boolean)){let a=i.toLowerCase(),o;if(o=a.match(/^(\d+(?:\.\d+)?)(s|ms|t)$/)){if(r>=0)throw Error(`script segment "${e}": more than one duration`);let t=+o[1];r=o[2]===`t`?Math.round(t):Math.round((o[2]===`ms`?t/1e3:t)/Ht)}else if(o=a.match(/^([a-z]+)=(-?\d+(?:\.\d+)?)$/)){let n=+o[2],r=o[1];if(r===`throttle`)t.throttle=n;else if(r===`brake`)t.brake=n;else if(r===`steer`||r===`movex`)t.moveX=n;else if(r===`movey`)t.moveY=n;else if(r===`lookx`)t.lookX=n;else if(r===`looky`)t.lookY=n;else if(r===`turn`)t.lookX=n*Math.PI*Ht/180;else if(r===`tilt`)t.lookY=-n*Math.PI*Ht/180;else if(r===`lens`)t.lens=n;else throw Error(`script segment "${e}": unknown value "${r}" (throttle, brake, steer, moveX, moveY, lookX, lookY, turn, tilt, lens)`)}else switch(a){case`idle`:case`wait`:case`coast`:break;case`throttle`:t.throttle=1;break;case`brake`:t.brake=1;break;case`reverse`:case`back`:t.moveY=-1;break;case`forward`:t.moveY=1;break;case`left`:t.moveX=-1;break;case`right`:t.moveX=1;break;case`horn`:t.horn=!0;break;case`handbrake`:t.handbrake=!0;break;case`jump`:t.jump=!0;break;case`sprint`:case`run`:t.sprint=!0;break;case`use`:case`enter`:case`exit`:n.use=!0;break;case`click`:n.click=!0;break;case`aim`:case`zoom`:t.aim=!0;break;case`eye`:case`eyes`:n.view=`eye`;break;case`third`:n.view=`third`;break;case`view`:n.view=`toggle`;break;default:throw Error(`script segment "${e}": unknown action "${i}". Actions: idle throttle brake reverse forward back left right handbrake jump sprint horn use click eye third view, key=value (turn= tilt= lens= ...), and a duration like 2s / 500ms / 90t`)}}if(r<0)throw Error(`script segment "${e}": needs a duration (e.g. 2s, 500ms, 90t)`);return{text:e,ticks:r,input:t,pressOnce:n}})}function Ja(e){let t=[],n=[];return e.forEach((e,r)=>{for(let i=0;i<e.ticks;i++){let a=i===0;t.push({...e.input,use:a&&e.pressOnce.use,click:a&&!!e.pressOnce.click,view:a?e.pressOnce.view??``:``}),n.push(r)}}),{inputs:t,segment:n}}var Ya=1600,Xa=`#1d1d1f`,Za=`#e6e6e6`,Qa=`#9a9a9a`,$a=`12px Menlo, ui-monospace, monospace`,eo=`bold 13px Menlo, ui-monospace, monospace`;function to(e,t,n){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);return i.imageSmoothingEnabled=!0,i.imageSmoothingQuality=`high`,i.drawImage(e,0,0,t,n),r}var no=class{width;blocks=[];constructor(e){this.width=e}static cell(e,t,n,r,i,a){return{canvas:to(e,t,n),label:r,sub:i,color:a}}text(e){this.blocks.push({h:e.length*16+12,draw:(t,n)=>{e.forEach((e,r)=>{let i=e.startsWith(`!`),a=e.startsWith(`#`);t.font=a?eo:$a,t.fillStyle=i?`#ff7a6a`:a?`#ffffff`:Za,t.fillText(i||a?e.slice(1):e,10,n+18+r*16)})}})}grid(e,t,n){if(!e.length)return;let r=n?70:0,i=e[0].canvas.width,a=e[0].canvas.height,o=e.some(e=>e.sub)?32:18,s=Math.ceil(e.length/t);this.blocks.push({h:s*(a+o+6)+6,draw:(s,c)=>{e.forEach((e,l)=>{let u=l%t,d=Math.floor(l/t),f=6+r+u*(i+6),p=c+6+d*(a+o+6);s.drawImage(e.canvas,f,p),s.font=$a,s.fillStyle=e.color??Za,s.fillText(ro(s,e.label,i),f,p+a+13),e.sub&&(s.fillStyle=Qa,s.fillText(ro(s,e.sub,i),f,p+a+27)),n&&u===0&&(s.fillStyle=Za,s.font=eo,s.fillText(ro(s,n[d]??``,r-8),6,p+a/2))})}})}panel(e,t){this.blocks.push({h:e,draw:t})}static gridWidth(e,t,n=!1){return 6+(n?70:0)+e*(t+6)}toPNG(){let e=this.blocks.reduce((e,t)=>e+t.h,0)+4,t=document.createElement(`canvas`);t.width=this.width,t.height=e;let n=t.getContext(`2d`);n.fillStyle=Xa,n.fillRect(0,0,t.width,t.height);let r=0;for(let e of this.blocks)e.draw(n,r,this.width),r+=e.h;return t.toDataURL(`image/png`)}};function ro(e,t,n){if(e.measureText(t).width<=n)return t;for(;t.length>1&&e.measureText(t+`…`).width>n;)t=t.slice(0,-1);return t+`…`}var io=`#6a6a6a`,ao=`#333336`,oo=`#c8c8c8`,so=e=>Math.abs(e)>=100?e.toFixed(0):Math.abs(e)>=10?e.toFixed(1):e.toFixed(2);function co(e,t,n,r,i,a=[],o){let s=t.x+44,c=t.y+18,l=t.w-44-8,u=t.h-18-16,d=1/0,f=-1/0;for(let e of i)for(let t of e.values)Number.isFinite(t)&&(d=Math.min(d,t),f=Math.max(f,t));o&&([d,f]=o),Number.isFinite(d)||(d=0,f=1),f-d<1e-6&&(d-=.5,f+=.5);let p=(f-d)*.08;d-=p,f+=p;let m=r[0]??0,h=r[r.length-1]??1,g=e=>s+(e-m)/(h-m||1)*l,_=e=>c+u-(e-d)/(f-d)*u;e.save(),e.font=$a,e.fillStyle=oo,e.fillText(n,t.x+4,t.y+12);let v=t.x+4+e.measureText(n).width+14;for(let n of i)e.fillStyle=n.color,e.fillRect(v,t.y+4,10,10),e.fillStyle=oo,e.fillText(n.name,v+14,t.y+12),v+=e.measureText(n.name).width+30;e.strokeStyle=ao,e.lineWidth=1,e.beginPath(),d<0&&f>0&&(e.moveTo(s,_(0)+.5),e.lineTo(s+l,_(0)+.5)),e.stroke(),e.fillStyle=`#7a7a7a`,e.strokeStyle=`#444448`,a.forEach((t,n)=>{let r=Math.round(g(t))+.5;e.beginPath(),e.moveTo(r,c),e.lineTo(r,c+u),e.stroke(),a.length<=24&&e.fillText(String(n+1),r+2,c+10)}),e.strokeStyle=io,e.strokeRect(s+.5,c+.5,l,u),e.fillStyle=oo,e.fillText(so(f-p),t.x+2,c+10),e.fillText(so(d+p),t.x+2,c+u),e.fillText(`${m.toFixed(1)}s`,s,c+u+13);let y=`${h.toFixed(1)}s`;e.fillText(y,s+l-e.measureText(y).width,c+u+13),e.lineWidth=1.5;for(let t of i)e.strokeStyle=t.color,e.beginPath(),t.values.forEach((t,n)=>{let i=g(r[n]),a=_(t);n===0?e.moveTo(i,a):e.lineTo(i,a)}),e.stroke();e.restore()}function lo(e,t,n,r,i,a=[]){let o=Math.min(...r),s=Math.max(...r),c=Math.min(...i),l=Math.max(...i),u=Math.max(s-o,l-c,4),d=(o+s)/2,f=(c+l)/2;o=d-u/2,s=d+u/2,c=f-u/2,l=f+u/2;let p=Math.min(t.w-20,t.h-18-20),m=t.x+(t.w-p)/2,h=t.y+18+10,g=e=>m+(e-o)/(s-o)*p,_=e=>h+(e-c)/(l-c)*p;e.save(),e.font=$a,e.fillStyle=oo,e.fillText(`${n}  (north up, ${u.toFixed(0)} m across)`,t.x+4,t.y+12),e.strokeStyle=io,e.strokeRect(m+.5,h+.5,p,p),e.strokeStyle=`#e8c070`,e.lineWidth=1.5,e.beginPath(),r.forEach((t,n)=>n?e.lineTo(g(t),_(i[n])):e.moveTo(g(t),_(i[n]))),e.stroke(),e.fillStyle=`#7ad07a`,e.fillRect(g(r[0])-3,_(i[0])-3,6,6),a.forEach((t,n)=>{let o=g(r[t]),s=_(i[t]);e.fillStyle=`#ffffff`,e.beginPath(),e.arc(o,s,2.5,0,Math.PI*2),e.fill(),a.length<=24&&(e.fillStyle=oo,e.fillText(String(n+1),o+4,s-3))}),e.fillStyle=oo,e.fillText(`x ${o.toFixed(0)}..${s.toFixed(0)}  z ${c.toFixed(0)}..${l.toFixed(0)}`,m,h+p+14),e.restore()}var uo=e=>e.slice(e.indexOf(`,`)+1);function fo(e){X.uFogNear.value=1e9,X.uFogFar.value=2e9;let t=X;t.uHazeMax&&(t.uHazeMax.value=0),t.uHazeDensity&&(t.uHazeDensity.value=0);let n=e.scene.getObjectByName(`sky`);n&&(n.visible=!1),Y.wires.minPixels=0,X.uWire.value.x=0,Y.lights.coronaStrength=0}function po(e,t,n,r,i){let a=Y.internalHeight;Y.internalHeight=i,e.pipeline.setOutputSize(r,i);let o=(n[0]+n[2])/2,s=(n[1]+n[3])/2,c=(n[2]-n[0])/2,l=(n[3]-n[1])/2,u=0;t.scene.traverse(e=>{let t=e;t.isMesh&&t.geometry.boundingBox&&(u=Math.max(u,t.geometry.boundingBox.max.y))});let d=new ge(-c,c,l,-l,1,3500);d.position.set(o,Math.min(u,1500)+50,s),d.up.set(0,0,-1),d.lookAt(o,0,s),d.updateMatrixWorld(),t.updateLod(new J(o,d.position.y,s));let f=e.pipeline.render(t.scene,d);return Y.internalHeight=a,e.checkShaders(),f}function mo(e,t,n,r,i,a){let o=(a[2]-a[0])/r,s=[10,20,50,100,200,500,1e3,2e3,5e3].find(e=>e/o>r/6)??5e3,c=s/o;e.save(),e.font=$a,e.fillStyle=`rgba(0,0,0,0.6)`,e.fillRect(t+8,n+i-30,c+70,22),e.fillStyle=`#fff`,e.fillRect(t+14,n+i-18,c,4),e.fillText(`${s} m`,t+20+c,n+i-13),e.fillStyle=`rgba(0,0,0,0.6)`,e.fillRect(t+r-26,n+8,18,20),e.fillStyle=`#fff`,e.fillText(`N`,t+r-21,n+22);let l=(t,n,r)=>{let i=e.measureText(t).width;e.fillStyle=`rgba(0,0,0,0.6)`,e.fillRect(n-2,r-11,i+4,14),e.fillStyle=`#fff`,e.fillText(t,n,r)};l(`(${a[0].toFixed(0)}, ${a[1].toFixed(0)})`,t+4,n+14);let u=`(${a[2].toFixed(0)}, ${a[3].toFixed(0)})`;l(u,t+r-e.measureText(u).width-8,n+i-36),e.restore()}function ho(e,t,n,r,i){let a=i.playable;if(!a)return;let o=e=>(e-r[0])/(r[2]-r[0])*t,s=e=>(e-r[1])/(r[3]-r[1])*n;e.save(),e.lineWidth=2,e.strokeStyle=`#ffd400`,e.beginPath(),(a.outline??a.polygon).forEach(([t,n],r)=>r?e.lineTo(o(t),s(n)):e.moveTo(o(t),s(n))),e.closePath(),e.stroke();let c=i.baked.region.zones.near;e.setLineDash([6,4]),e.strokeStyle=`rgba(255,255,255,0.8)`,e.strokeRect(o(c[0]),s(c[1]),o(c[2])-o(c[0]),s(c[3])-s(c[1])),e.setLineDash([]),e.font=$a;for(let i of a.closures){let a=o(i.at[0]),c=s(i.at[1]);e.fillStyle=`#ff2a2a`,e.beginPath(),e.arc(a,c,4,0,Math.PI*2),e.fill(),e.strokeStyle=`#ff2a2a`,e.beginPath(),e.moveTo(a-i.dir[1]*i.roadway*(t/(r[2]-r[0]))*.5,c+i.dir[0]*i.roadway*(n/(r[3]-r[1]))*.5),e.lineTo(a+i.dir[1]*i.roadway*(t/(r[2]-r[0]))*.5,c-i.dir[0]*i.roadway*(n/(r[3]-r[1]))*.5),e.stroke();let l=i.street.replace(/ (ST|AVE)$/,``);e.fillStyle=`rgba(0,0,0,0.6)`;let u=a+i.dir[0]*14-e.measureText(l).width/2,d=c+i.dir[1]*14+4;e.fillRect(u-2,d-11,e.measureText(l).width+4,14),e.fillStyle=`#fff`,e.fillText(l,u,d)}e.restore()}function go(e,t,n){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);return i.imageSmoothingQuality=`high`,i.drawImage(e,0,0,t,n),r}async function _o(e){let t=new Image;t.src=e;try{await t.decode()}catch{throw Error(`could not load ${e}`)}return t}async function vo(e,t){let n=await Tt(t.scene);if(n.terrain.kind!==`baked`)throw Error(`map: the scene needs baked terrain`);let r=t.bounds??t.compare?.bounds,i=(e,t)=>(t?Math.ceil(e/256):Math.floor(e/256))*256,a=t.window===`full`?null:t.window?jo(...t.window):r?[i(r[0],!1),i(r[1],!1),i(r[2],!0),i(r[3],!0)]:null,o=await e.world(n,{layers:t.layers,noActors:!0,...a?{detail:a}:{}},{map:!0,layers:t.layers??null,detail:a});o.player.setEnabled(!1),o.setTime($e(t.time??`noon`)),fo(o);let s=t.bounds??t.compare?.bounds??o.baked.region.zones.near,c=(s[3]-s[1])/(s[2]-s[0]),l=[`#map  scene=${n.name}  bounds ${s.map(e=>e.toFixed(0)).join(`, `)}  layers: ${(t.layers??(n.layers??[]).map(e=>e.layer)).join(`, `)||`(terrain only)`}  time ${Ze(o.hours)}  (no fog, sky hidden; north up)`],u;if(t.compare){let n=Math.floor((Ya-18)/2),r=Math.round(n*c);po(e,o,s,n,r);let i=go(e.canvas,n,r),a=await _o(t.compare.url),d=document.createElement(`canvas`);d.width=n,d.height=r;let f=d.getContext(`2d`);f.imageSmoothingQuality=`high`;let p=t.compare.bounds,m=a.width/(p[2]-p[0]),h=(a.height-t.compare.header)/(p[3]-p[1]);f.drawImage(a,(s[0]-p[0])*m,t.compare.header+(s[1]-p[1])*h,(s[2]-s[0])*m,(s[3]-s[1])*h,0,0,n,r);let g=document.createElement(`canvas`);g.width=n,g.height=r;let _=g.getContext(`2d`);_.drawImage(d,0,0),_.globalAlpha=.5,_.drawImage(i,0,0),u=new no(no.gridWidth(2,n)),u.text([...l,`left: this render   right: ${t.compare.url.split(`/`).pop()} (pipeline debug map)   below: both at 50%`]);let v=[{canvas:i,label:`render`},{canvas:d,label:`debug map`},{canvas:g,label:`blend: render over debug map`}];for(let e of v)mo(e.canvas.getContext(`2d`),0,0,n,r,s);u.grid(v,2)}else{let n=Math.min(t.width??1600,Ya-12),r=Math.round(n*c);po(e,o,s,n,r);let i=go(e.canvas,n,r);ho(i.getContext(`2d`),n,r,s,o),mo(i.getContext(`2d`),0,0,n,r,s),u=new no(n+12);let a=o.playable;u.text(a?[...l,`playable area (yellow): ${a.closures.length} streets closed (red: closure point and roadway width); dashed: the detailed zone`]:l),u.grid([{canvas:i,label:`${((s[2]-s[0])/n).toFixed(2)} m per pixel`}],1)}let d=o.info();return{images:[{suffix:``,png:uo(u.toPNG()),width:u.width,height:0}],files:[],summary:[`map ${n.name}: bounds ${s.join(`, `)}; ${d.sceneTriangles} triangles in the scene`],warnings:o.warnings,meta:{bounds:s,world:d}}}async function yo(e,t){let n=await Tt(t.scene);if(n.terrain.kind!==`baked`)throw Error(`layer: the scene needs baked terrain`);let r=Math.max(0,Math.min(4,t.radius??1)),i=n.spawn.player.at,a=t.at??[i[0],i.length===3?i[2]:i[1]],o=Math.floor(a[0]/256),s=Math.floor(a[1]/256),c=await e.world(n,{layers:[t.layer],noActors:!0,tileFilter:e=>Math.abs(e.i-o)<=r&&Math.abs(e.j-s)<=r},{layer:t.layer,ci:o,cj:s,r});c.player.setEnabled(!1);let l=[(o-r)*256,(s-r)*256,(o+r+1)*256,(s+r+1)*256];c.setTime($e(t.time??`sunset`)),fo(c),t.alone&&c.scene.traverse(e=>e.name.startsWith(`terrain`)&&(e.visible=!1));let u=c.baked.layers.stats.find(e=>e.layer===t.layer);if(u.failed?.length)throw Error(`layer "${t.layer}" ${u.warnings[0]} (failed in: ${u.failed.slice(0,6).join(`, `)}${u.failed.length>6?`, ...`:``})`);let d=Math.floor((Ya-18)/2),f=Math.round(d*9/16);po(e,c,l,f,f);let p=document.createElement(`canvas`);p.width=d,p.height=f;let m=p.getContext(`2d`);m.fillStyle=`#1d1d1f`,m.fillRect(0,0,d,f),m.drawImage(e.canvas,(d-f)/2,0,f,f),mo(m,(d-f)/2,0,f,f,l);let h=[{canvas:p,label:`top-down ${l[2]-l[0]} m square, north up`}],g=(l[0]+l[2])/2,_=(l[1]+l[3])/2,v=c.terrain.heightAt(g,_),y=l[2]-l[0];e.pipeline.setOutputSize(d*2,f*2);for(let t of[35,155,275]){let n=t*Math.PI/180,r=y*.55,i=[g-Math.sin(n)*r,v+y*.32,_+Math.cos(n)*r];c.rig.setMode({kind:`fixed`,pos:i,lookAt:[g,v,_],fov:50}),c.rig.update(0,null,0,0),c.render(e.pipeline),e.checkShaders(),h.push(no.cell(e.canvas,d,f,`looking ${t} deg (compass), ${Ze(c.hours)}`))}let b=e=>u.km2[e]?`${e}: ${u.tiles[e]} tiles, ${u.triangles[e]} tris = ${u.density[e]}/km^2 (budget ${u.budget[e]??`-`})`:``,x=c.baked.layers.overrides.filter(e=>e.layer===t.layer),S=new no(no.gridWidth(2,d));return S.text([`#layer ${t.layer}  scene=${n.name}  window ${2*r+1}x${2*r+1} tiles around (${a[0].toFixed(0)}, ${a[1].toFixed(0)}) = ${l.join(`, `)}${t.alone?`  (terrain hidden)`:``}  (no fog, sky hidden)`,[b(`near`),b(`far`)].filter(Boolean).join(`    `)+`    features ${u.features}, placements ${u.placements}, colliders ${u.colliders}, build ${u.buildMs.toFixed(0)} ms`,...u.nearVersionTriangles?[`+ ${u.nearVersionTriangles} near-version triangles (lod placements: drawn instead of their far versions only within the switch distance of the camera)`]:[],`counts: ${Object.entries(u.counts).map(([e,t])=>`${e} ${t}`).join(`, `)||`-`}`,...x.map(e=>`override: ${e.selected.length} features taken over${e.asset?` by ${e.asset} (${e.placed} placed)`:``}`),...u.warnings.map(e=>`!${e}`)]),S.grid(h,2),{images:[{suffix:``,png:uo(S.toPNG()),width:S.width,height:0}],files:[],summary:[`layer ${t.layer} over ${l.join(`, `)}: ${u.triangles.near+u.triangles.far} triangles (${b(`near`)}${u.km2.far?`; `+b(`far`):``})${u.nearVersionTriangles?` + ${u.nearVersionTriangles} near-version`:``}, ${u.placements} placements, ${u.colliders} colliders, ${u.buildMs.toFixed(0)} ms`,`counts: ${JSON.stringify(u.counts)}`],warnings:[...u.warnings,...c.warnings.filter(e=>!e.startsWith(`layer ${t.layer}:`))],meta:{bounds:l,stats:u,overrides:x,world:c.info()}}}var bo=async()=>{let e=globalThis.gc;e&&(e(),await new Promise(e=>setTimeout(e,30)),e())},xo=()=>(performance.memory?.usedJSHeapSize??0)/1048576;function So(e){let t=0,n=0;for(let r of[...Object.values(e.attributes),...e.index?[e.index]:[]]){let e=r.array?.BYTES_PER_ELEMENT??4;t+=r.count*r.itemSize*e,n+=r.array?.byteLength??0}return{gpu:t,cpu:n}}var Co=e=>(e.index?e.index.count:e.getAttribute(`position`).count)/3;function wo(e){let t=e.userData.lod;return t?t.kind===`tier`?`tier ${t.index} of ${t.tiers.join(`/`)}`:t.kind===`near`?`lod near <${t.d}`:t.kind===`far`?`lod far >${t.d}`:`cull <${t.d}`:e.name.includes(`knock`)?`knockable`:`always`}function To(e){let t=Co(e.geometry);if(e.userData.owners)return e.userData.owners;for(let n=e;n;n=n.parent)if(n.userData.owner)return{[n.userData.owner]:t};let n=e.name;return n.startsWith(`terrain`)?{terrain:t}:n===`sky`||n===`coronas`||n.startsWith(`blob`)||n.includes(`ground`)?{look:t}:{[`other:${n||e.type}`]:t}}function Eo(e){if(e.userData.assets)return e.userData.assets;for(let t=e;t;t=t.parent)if(t.userData.asset)return{[`${t.userData.owner??`?`}:${t.userData.asset}`]:Co(e.geometry)};return{}}async function Do(e,t){let n=await Tt(t.scene),[r,i]=t.size;e.pipeline.setOutputSize(r,i);let a=e.pipeline.renderer,o=e.pipeline.gl,s=new Uint8Array(4),c=()=>o.readPixels(0,0,1,1,o.RGBA,o.UNSIGNED_BYTE,s);e.dropWorld(),await bo();let l=xo(),u=l,d=setInterval(()=>u=Math.max(u,xo()),20),f=performance.now(),p=Array.isArray(t.window)?(()=>{let[e,n,r]=t.window;return[Math.floor((e-r)/256)*256,Math.floor((n-r)/256)*256,Math.ceil((e+r)/256)*256,Math.ceil((n+r)/256)*256]})():void 0,m=await e.world(n,p?{detail:p}:{},{budget:!0,detail:p??null}),h=performance.now()-f;u=Math.max(u,xo()),await bo();let g=xo();for(let e=0;e<60;e++)m.tick(vt());let _=performance.now();m.render(e.pipeline),c();let v=performance.now()-_;clearInterval(d),u=Math.max(u,xo()),await bo();let y=xo(),b=[];m.scene.traverse(e=>{e.isMesh&&b.push(e)});let x=new Map,S=e=>(x.has(e)||x.set(e,{owner:e,loaded:{},loadedTotal:0,gpuBytes:0,cpuBytes:0,drawn:{},draws:{}}),x.get(e)),C={},w=0,T=0,E=0;for(let e of b){let t=Co(e.geometry);if(!t)continue;let n=So(e.geometry);w+=n.gpu,T+=n.cpu,E+=t;let r=wo(e);for(let[i,a]of Object.entries(To(e))){let e=S(i);e.loaded[r]=(e.loaded[r]??0)+a,e.loadedTotal+=a,e.gpuBytes+=n.gpu*a/t,e.cpuBytes+=n.cpu*a/t}for(let[t,n]of Object.entries(Eo(e)))C[t]=(C[t]??0)+n}for(let e of m.baked?.layers.stats??[]){let t=S(e.layer);t.buildMs=Math.round(e.buildMs),t.assetBuilds=e.assetBuilds,t.placements=e.placements}let D=t.bookmarks?.length?t.bookmarks:n.budget?.bookmarks?.filter(e=>n.bookmarks[e])??Oo(n),O=[],k=new j,A=new oe,ee=await e.windowGame(m),M=ee?.outside()??null,N=ee?.loadTimes.find(e=>e.scene===M?.desc.name)?.ms;for(let t of D){let r=n.bookmarks[t];if(!r)throw Error(`budget: scene "${n.name}" has no bookmark "${t}"`);let i=$e(r.time??n.time??12),a=()=>m.render(e.pipeline);if(ee&&M){let t=m.openings.some(e=>e.normal.dot(new J(...r.pos).sub(e.corners[0]))>.05),n=t?M:m;(t?m:M).setTime(i),n.setTime(i),ee.invalidate(),n.rig.setMode({kind:`fixed`,pos:r.pos,lookAt:r.lookAt,fov:r.fov}),n.rig.update(0,n.subject(),0,0),await ee.prepare(n),a=()=>ee.draw(e.pipeline,n)}else m.setTime(i),m.rig.setMode({kind:`fixed`,pos:r.pos,lookAt:r.lookAt,fov:r.fov}),m.rig.update(0,m.subject(),0,0);let o=a();for(let e=0;e<4;e++)a();c();let s=performance.now();for(let e=0;e<12;e++)a();c();let l=(performance.now()-s)/12,u=m.rig.camera;u.updateMatrixWorld(),A.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),k.setFromProjectionMatrix(A);let d=0,f=0;for(let e of b){let n=!0;for(let t=e;t;t=t.parent)t.visible||(n=!1);if(!n||e.frustumCulled&&!k.intersectsObject(e))continue;let r=Co(e.geometry);if(r){f++,d+=r;for(let[n,r]of Object.entries(To(e))){let e=S(n);e.drawn[t]=(e.drawn[t]??0)+r,e.draws[t]=(e.draws[t]??0)+1}}}O.push({name:t,drawn:d,draws:f,sceneDrawCalls:o.sceneDrawCalls??o.drawCalls,rendererTris:o.triangles,frameMs:+l.toFixed(2),...o.through?{through:o.through}:{}})}let P=null,te=t.drive??360;if(te>0&&m.car){m.reset();for(let e=0;e<30;e++)m.tick(vt());m.setTime($e(n.time??`sunset`)),m.possess(`car`),m.rig.setMode({kind:`follow`});for(let t=0;t<20;t++)m.tick(vt()),m.render(e.pipeline);c(),await bo();let t=e.pipeline.completeBakes;e.pipeline.completeBakes=!1;let r=[],i={...vt(),throttle:1,moveY:1};for(let t=0;t<te;t++){m.tick(i);let t=performance.now();m.render(e.pipeline),c(),r.push(performance.now()-t)}e.pipeline.completeBakes=!0,m.render(e.pipeline),e.pipeline.completeBakes=t;let a=[...r].sort((e,t)=>e-t),o=e=>+a[Math.min(a.length-1,Math.floor(a.length*e))].toFixed(2),s=r.map((e,t)=>[e,t]).sort((e,t)=>t[0]-e[0]).slice(0,5);P={ticks:te,mean:+(r.reduce((e,t)=>e+t,0)/r.length).toFixed(2),p50:o(.5),p95:o(.95),p99:o(.99),worst:+a[a.length-1].toFixed(2),over16:r.filter(e=>e>16.7).length,worstTick:s[0][1],kmh:+(m.telemetry().car?.kmh??0).toFixed(0)}}await bo();let ne=xo(),F=m.atlas,I={};for(let e of F.names()){let t=F.get(e),n=e.includes(`/`)?e.split(`/`)[0]:`common`;I[n]=(I[n]??0)+t.w*t.h}let[re,L]=F.size,ie={size:[re,L],tiles:F.names().length,gpuBytes:Math.round(re*L*4*(4/3)),texelsUsed:Object.values(I).reduce((e,t)=>e+t,0),byOwner:I},R=m.info(),ae=[...x.values()].sort((e,t)=>t.loadedTotal-e.loadedTotal),z={scene:n.name,window:t.window??`full`,when:new Date().toISOString(),renderer:e.pipeline.glInfo().renderer,style:It(),load:{ms:Math.round(h),phases:R.timings??{},firstRenderMs:Math.round(v)},memory:{heapStartMB:+l.toFixed(0),heapPeakMB:+u.toFixed(0),heapAfterLoadMB:+g.toFixed(0),heapAfterWarmUpMB:+y.toFixed(0),heapAfterDriveMB:+ne.toFixed(0),geometryGpuMB:+(w/1048576).toFixed(1),geometryCpuRetainedMB:+(T/1048576).toFixed(1),atlasGpuMB:+(ie.gpuBytes/1048576).toFixed(1),rendererGeometries:a.info.memory.geometries,rendererTextures:a.info.memory.textures,programs:a.info.programs?.length??0,gcAvailable:typeof globalThis.gc==`function`,note:`GPU bytes are vertex + index buffers as allocated; the look's render targets are not counted. JS heap: performance.memory after a forced collection (the capture browser runs with --expose-gc); the peak is sampled every 20 ms during the load, so it can miss a short spike inside a synchronous build.`},triangles:{loaded:E,meshes:b.length},owners:ae.map(e=>({...e,gpuMB:+(e.gpuBytes/1048576).toFixed(2),cpuMB:+(e.cpuBytes/1048576).toFixed(2),gpuBytes:Math.round(e.gpuBytes),cpuBytes:Math.round(e.cpuBytes)})),assets:Object.entries(C).sort((e,t)=>t[1]-e[1]).map(([e,t])=>({asset:e,triangles:t})),shots:O,drive:P,atlas:ie,layerWarnings:R.warnings},B=e=>e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(0)}k`:`${Math.round(e)}`,se=(e,t)=>e.length>=t?e.slice(0,t):e+` `.repeat(t-e.length),V=(e,t)=>e.length>=t?e:` `.repeat(t-e.length)+e,H=[];H.push(`budget ${n.name}  window=${typeof z.window==`string`?z.window:z.window.join(`,`)}  style ${z.style}  ${z.renderer}`),H.push(`load ${(h/1e3).toFixed(1)} s (${Object.entries(z.load.phases).map(([e,t])=>`${e} ${(t/1e3).toFixed(1)}`).join(`, `)}), first render ${(v/1e3).toFixed(1)} s`),H.push(`JS heap MB: start ${z.memory.heapStartMB}, peak ${z.memory.heapPeakMB}, after load ${z.memory.heapAfterLoadMB}, after warm-up ${z.memory.heapAfterWarmUpMB}, after drive ${z.memory.heapAfterDriveMB}`),H.push(`geometry: ${B(E)} triangles loaded in ${b.length} meshes, GPU ${z.memory.geometryGpuMB} MB, CPU still held ${z.memory.geometryCpuRetainedMB} MB; atlas ${re}x${L} ${ie.tiles} tiles, ${z.memory.atlasGpuMB} MB GPU, ${(100*ie.texelsUsed/(re*L)).toFixed(0)}% used`),H.push(``),H.push(`${se(`owner`,22)}${V(`loaded`,8)}${V(`always`,8)}${V(`near/t0`,8)}${V(`far/t1+`,8)}${V(`cull`,7)}${V(`GPU MB`,8)}${V(`CPU MB`,7)}${V(`build`,7)}${V(`builds`,7)}  ${D.map(e=>V(e.slice(0,10),11)).join(``)}`);for(let e of ae){let t=Object.entries(e.loaded).filter(([e])=>e.startsWith(`lod near`)||e.startsWith(`tier 0`)).reduce((e,[,t])=>e+t,0),n=Object.entries(e.loaded).filter(([e])=>e.startsWith(`lod far`)||e.startsWith(`tier`)&&!e.startsWith(`tier 0`)).reduce((e,[,t])=>e+t,0),r=Object.entries(e.loaded).filter(([e])=>e.startsWith(`cull`)).reduce((e,[,t])=>e+t,0);H.push(`${se(e.owner,22)}${V(B(e.loadedTotal),8)}${V(B(e.loaded.always??0),8)}${V(t?B(t):`-`,8)}${V(n?B(n):`-`,8)}${V(r?B(r):`-`,7)}${V((e.gpuBytes/1048576).toFixed(1),8)}${V((e.cpuBytes/1048576).toFixed(1),7)}${V(e.buildMs===void 0?``:`${(e.buildMs/1e3).toFixed(1)}s`,7)}${V(e.assetBuilds===void 0?``:String(e.assetBuilds),7)}  ${D.map(t=>V(e.drawn[t]?`${B(e.drawn[t])}/${e.draws[t]}`:`-`,11)).join(``)}`)}H.push(`${se(`TOTAL drawn/meshes`,22)}${V(``,68)}  ${O.map(e=>V(`${B(e.drawn)}/${e.draws}`,11)).join(``)}`),H.push(`${se(`renderer tris/calls`,22)}${V(``,68)}  ${O.map(e=>V(`${B(e.rendererTris)}/${e.sceneDrawCalls}`,11)).join(``)}`),H.push(`${se(`frame ms (static)`,22)}${V(``,68)}  ${O.map(e=>V(e.frameMs.toFixed(1),11)).join(``)}`),H.push(`(per bookmark: triangles / meshes drawn by the main pass after frustum and LOD; a merged chunk counts for each owner in it. Renderer row: the whole frame incl. ground-shade casters.)`),M&&(H.push(`windows: the outside (${M.desc.name}) loaded in ${N===void 0?`(kept from an earlier job)`:`${(N/1e3).toFixed(1)} s`}; frames draw it through the glass (src/engine/windows.ts). Per bookmark, the other world's passes (in the renderer row's totals):`),H.push(`${se(`through glass tris/calls`,22)}${V(``,68)}  ${O.map(e=>V(e.through?`${B(e.through.triangles)}/${e.through.drawCalls}`:`-`,11)).join(``)}`),H.push(`${se(`  planes of glass`,22)}${V(``,68)}  ${O.map(e=>V(e.through?String(e.through.planes):`-`,11)).join(``)}`)),P&&H.push(`drive ${P.ticks} ticks: frame ms mean ${P.mean}, p50 ${P.p50}, p95 ${P.p95}, p99 ${P.p99}, worst ${P.worst} (tick ${P.worstTick}); ${P.over16} frames over 16.7 ms; ends at ${P.kmh} km/h`),H.push(``),H.push(`largest placed assets (owner:asset, triangles loaded): `+z.assets.slice(0,12).map(e=>`${e.asset} ${B(e.triangles)}`).join(`, `)),H.push(`atlas texels by owner: `+Object.entries(I).sort((e,t)=>t[1]-e[1]).slice(0,12).map(([e,t])=>`${e} ${(100*t/(re*L)).toFixed(1)}%`).join(`, `));let ce=n.budget,le=[];if(ce){let e=(e,t,n)=>n!==void 0&&le.push({what:e,value:+t.toFixed(1),limit:n,ok:t<=n});e(`triangles loaded`,E,ce.trianglesLoaded),e(`GPU geometry MB`,w/1048576,ce.gpuGeometryMB),e(`JS heap steady MB (after warm-up / drive)`,Math.max(y,ne),ce.heapSteadyMB),e(`JS heap peak MB`,u,ce.heapPeakMB);for(let t of O)(!ce.bookmarks||ce.bookmarks.includes(t.name))&&(e(`${t.name}: triangles drawn`,t.rendererTris,ce.trianglesDrawn),e(`${t.name}: draw calls`,t.sceneDrawCalls,ce.drawCalls),e(`${t.name}: frame ms`,t.frameMs,ce.frameMs));P&&e(`drive p99 frame ms`,P.p99,ce.driveP99Ms),e(`load s`,h/1e3,ce.loadS);let t=le.filter(e=>!e.ok).length;H.push(``,`scene budget: ${t?`FAIL (${t} of ${le.length} over)`:`PASS (${le.length} checks)`}`);for(let e of le)H.push(`  ${e.ok?`pass`:`FAIL`}  ${e.what.padEnd(44)} ${String(e.value).padStart(10)}  limit ${e.limit}`);H.push(`  (timings are wall clock: a loaded machine fails them; judge frame and load lines on a quiet one)`)}else H.push(``,`scene budget: none (add "budget" to the scene to check one)`);return{images:[],files:[{suffix:`.budget.json`,text:JSON.stringify({...z,budget:ce??null,checks:le},null,1)}],summary:H,warnings:[],meta:{budget:{load:z.load,memory:z.memory,triangles:z.triangles,shots:O,drive:P,checks:le}}}}function Oo(e){let t=[`classic`,`steiner`,`summit`,`overview`,`drive-start`,`night-return`].filter(t=>e.bookmarks[t]);return t.length?t:Object.keys(e.bookmarks).slice(0,6)}var ko=e=>String(Math.round(e)%360);function Ao(e,t){for(let n of Object.keys(e))n in t||delete e[n];for(let[n,r]of Object.entries(t))r&&typeof r==`object`&&!Array.isArray(r)&&e[n]&&typeof e[n]==`object`?Ao(e[n],r):e[n]=structuredClone(r)}function jo(e,t,n){return[Math.floor((e-n)/256)*256,Math.floor((t-n)/256)*256,Math.ceil((e+n)/256)*256,Math.ceil((t+n)/256)*256]}var Mo=(e,t)=>e?[Math.min(e[0],t[0]),Math.min(e[1],t[1]),Math.max(e[2],t[2]),Math.max(e[3],t[3])]:t,No=e=>e.length===2?[e[0],e[1]]:[e[0],e[2]];function Po(e,t){if(!e||e===`full`)return null;if(Array.isArray(e))return e.length===4?[e[0],e[1],e[2],e[3]]:jo(e[0],e[1],e[2]);let n=null;for(let[e,r]of t)n=Mo(n,jo(e,r,300));return n}var Fo=e=>e.slice(e.indexOf(`,`)+1);function Io(e){for(let[t,n]of Object.entries(e??{})){let e=t.split(`.`),r=Y;for(let n of e.slice(0,-1)){if(typeof r[n]!=`object`||r[n]===null)throw Error(`--set ${t}: no such look dial (top-level keys: ${Object.keys(Y).join(`, `)})`);r=r[n]}let i=e[e.length-1];if(!(i in r))throw Error(`--set ${t}: no such look dial (keys here: ${Object.keys(r).join(`, `)})`);let a=r[i];if(typeof a==`number`){let e=Number(n);if(!Number.isFinite(e))throw Error(`--set ${t}: expected a number, got "${n}"`);r[i]=e}else typeof a==`boolean`?r[i]=n===`true`||n===`1`:r[i]=n}}function Lo(e){let t=Object.entries(e??{});return t.length?[`look overrides: ${t.map(([e,t])=>`${e}=${t}`).join(` `)}`]:[]}var Ro=class{canvas;ready=!1;fatal=null;errors=[];pipeline;lookAtStart=structuredClone(Y);cached=null;reused=!1;dropWorld(){this.cached?.world.dispose(),this.cached=null}async windowGame(e){if(!e.openings.length)return null;let t=new Ga(e,{load:(e,t)=>this.sideWorld(e,t),rooms:[e.desc.name],onlyRooms:!0});return await t.prepare(),t}sides=new Map;reusedSide=new Set;async sideWorld(e,t){let n=this.sides.get(e);if(n)return this.reusedSide.add(e),n.reset(),n;let r=await Dt.load(await Tt(e),t);return this.sides.set(e,r),r}async world(e,t,n){let r=JSON.stringify([e.name,n]);if(this.pipeline.newRun(),this.cached?.key===r)return this.cached.world.reset(),this.reused=!0,this.cached.world;this.cached?.world.dispose(),this.cached=null;let i=await Dt.load(e,t);return this.cached={key:r,world:i},this.reused=!1,i}constructor(e){this.canvas=e,this.pipeline=new Ha(e),this.pipeline.setOutputSize(640,360),this.pipeline.render(new he,new K),this.ready=!0}info(){return{gl:this.pipeline.glInfo(),three:`187`,userAgent:navigator.userAgent}}checkShaders(){if(this.pipeline.shaderErrors.length)throw Error(this.pipeline.shaderErrors.join(`
`));if(this.pipeline.gl.isContextLost())throw Error(`WebGL context lost`)}snapshotMain(){return this.checkShaders(),{png:Fo(this.canvas.toDataURL(`image/png`)),width:this.canvas.width,height:this.canvas.height}}async run(e){switch(Ao(Y,this.lookAtStart),this.reused=!1,this.pipeline.newRun(),this.pipeline.hide=null,await Nt(e.kind===`still`?e.styles?.[0]??e.style:e.kind===`motion`||e.kind===`asset`||e.kind===`budget`?e.style:Rt),e.kind!==`info`&&Io(e.set),e.kind){case`info`:return this.runInfo();case`still`:return this.runStill(e);case`motion`:return this.runMotion(e);case`asset`:return this.runAsset(e);case`map`:return vo(this,e);case`layer`:return yo(this,e);case`budget`:return Do(this,e);default:throw Error(`unknown job kind ${e.kind}`)}}async runInfo(){let e={};for(let t of gt())try{let n=await Tt(t);e[t]={description:n.description??``,time:n.time??null,bookmarks:Object.fromEntries(Object.entries(n.bookmarks).map(([e,t])=>[e,t.note??``]))}}catch(n){e[t]={error:n instanceof Error?n.message:String(n)}}let t={};for(let e of At())try{let n=await dt(e);t[e]={description:n.description,bounds:n.bounds,budget:n.budget,params:n.params}}catch(n){t[e]={error:n instanceof Error?n.message:String(n)}}let n=this.pipeline.glInfo(),r=[`renderer: ${n.renderer} (${n.software?`SOFTWARE`:`GPU`})`,``,`scenes:`];for(let[t,n]of Object.entries(e))if(r.push(n.error?`  ${t}: BROKEN: ${n.error}`:`  ${t}: ${n.description}`),!n.error)for(let[e,t]of Object.entries(n.bookmarks))r.push(`    bookmark ${e}${t?` - ${t}`:``}`);r.push(``,`assets:`);for(let[e,n]of Object.entries(t))r.push(n.error?`  ${e}: BROKEN: ${n.error}`:`  ${e}: ${n.description}  [${n.budget.triangles} tris] params ${JSON.stringify(n.params)}`);return r.push(``,`time presets: ${Object.entries(Qe).map(([e,t])=>`${e}=${t}`).join(`, `)}`),{images:[],files:[],summary:r,warnings:[],meta:{gl:n,scenes:e,assets:t}}}async loadWorld(e,t,n,r,i){let a=await Tt(e),o=a.terrain.kind===`baked`&&i?i(a):null,s={...n?{car:n}:{},...r?{assetParams:r}:{},...o?{detail:o}:{}},c=await this.world(a,s,{car:n,assetParams:r,detail:o});Io(t);let l=o?[`detail window [${o.join(`, `)}]: near content only inside it, far versions beyond (--full for the whole region)`]:[];return c.baked&&l.push(this.reused?`scene reused: built by an earlier capture on this page, reset (no load)`:c.loadSummary()),{world:c,desc:a,loadNotes:l}}shotsOf(e,t){let n=Object.keys(t.bookmarks)[0];return(e.shots.length?e.shots:[{}]).map(e=>e.bookmark||e.pose?e:{...e,bookmark:n})}async runStill(e){let{world:t,desc:n,loadNotes:r}=await this.loadWorld(e.scene,e.set,void 0,e.assetParams,t=>Po(e.window??`auto`,this.shotsOf(e,t).flatMap(e=>{let n=e.bookmark?t.bookmarks[e.bookmark]?.pos:e.pose?.pos;return n?[No(n)]:[]})));this.reusedSide.clear();let i=await this.windowGame(t),a=i?.outside()??null,o=i?null:new Ga(t,{load:(e,t)=>this.sideWorld(e,t)});if(i&&!a)throw Error(`scene "${n.name}" has windows but its outside "${t.outside}" did not load${i.error?`: ${i.error}`:``}`);let s=e.settle??60;for(let e=0;e<s;e++)i?i.tick(vt()):t.tick(vt());let[c,l]=e.size;this.pipeline.setOutputSize(c,l);let u=this.shotsOf(e,n);if(u.some(e=>!e.bookmark&&!e.pose))throw Error(`scene "${n.name}" has no bookmarks; pass --pose`);let d=e.styles?.length?e.styles:[e.style??`line-wash`],f=d.length>1,p=Y.weather,m=u.flatMap(t=>e.weathers?.length?e.weathers.map(e=>({...t,weather:e})):[{...t,weather:t.weather}]);e.people===!1&&(this.pipeline.hide=this.peopleHider(t));let h=[],g=[],_=m.length===1&&!f,v=f?d.length:Math.min(e.cols??Math.min(m.length,3),m.length),y=Math.min(c,Math.floor((Ya-6)/v)-6),b=Math.round(y*l/c),x=null,S=await Promise.all(d.map(e=>Bt(e)));for(let r=0;r<m.length;r++)for(let s=0;s<d.length;s++){f&&(zt(S[s]),Io(e.set));let c=m[r];Y.weather=c.weather??p;let l,u,v;if(c.bookmark){let e=n.bookmarks[c.bookmark];if(!e)throw Error(`scene "${n.name}" has no bookmark "${c.bookmark}". Bookmarks: ${Object.keys(n.bookmarks).join(`, `)}`);l=e,u=c.bookmark,v=$e(c.time??e.time??n.time??12)}else if(c.pose)l=c.pose,u=`pose ${c.pose.pos.map(e=>e.toFixed(1)).join(`,`)}`,v=$e(c.time??n.time??12);else throw Error(`a shot needs a bookmark or a pose`);let C;if(i&&a){let e=t.openings.some(e=>e.normal.dot(new J(...l.pos).sub(e.corners[0]))>.05),n=e?a:t;(e?t:a).setTime(v),n.setTime(v),i.invalidate(),n.rig.setMode({kind:`fixed`,pos:l.pos,lookAt:l.lookAt,fov:l.fov}),n.rig.update(0,n.subject(),0,0),await i.prepare(n),C=i.draw(this.pipeline,n),e&&(u+=` (street)`)}else t.setTime(v),t.rig.setMode({kind:`fixed`,pos:l.pos,lookAt:l.lookAt,fov:l.fov}),t.rig.update(0,t.subject(),0,0),await o.prepare(t),C=o.draw(this.pipeline,t);let w=C.through;if(c.weather&&(u+=` ${c.weather}`),f&&(u=`${It()}: ${u}`),h.push({label:u,time:v,timeLabel:Ze(v),pose:l,drawCalls:C.drawCalls,triangles:C.triangles,internal:C.internal,...w?{through:w}:{},style:It(),...c.weather?{weather:c.weather}:{}}),_)x=this.snapshotMain();else{this.checkShaders();let e=C,t=e.sceneDrawCalls===void 0?`${C.drawCalls} draws`:`${e.sceneDrawCalls}+${e.postDrawCalls??0} draws${e.bakeDrawCalls?` (+${e.bakeDrawCalls} bake)`:``}`;g[f?r*d.length+s:r]=no.cell(this.canvas,y,b,`${u} @ ${Ze(v)}`,`${t}, ${C.triangles} tris${e.lights===void 0?``:`, ${e.lights} lights`}`)}}let C=t.info(),w=[`scene ${n.name}: ${C.placements} placements, ${C.staticMeshes} static batches, ${C.sceneTriangles} scene tris, atlas ${C.atlas.size.join(`x`)} (${C.atlas.tiles} tiles)`,...h.map(e=>{let t=e.through;return`  ${e.label} @ ${e.timeLabel}: ${e.drawCalls} draw calls, ${e.triangles} tris rendered, internal ${e.internal.join(`x`)}${t?`; through glass (${t.planes} plane${t.planes>1?`s`:``}): ${t.drawCalls} draws, ${t.triangles} tris of them`:``}`}),...r,...a?[`windows: the outside (${a.desc.name}) ${this.reusedSide.has(a.desc.name)?`kept from an earlier job, reset`:`loaded in ${(i.loadTimes.find(e=>e.scene===a.desc.name)?.ms??0).toFixed(0)} ms`}, ticked with the room`]:[],...Lo(e.set),`style: ${S.map(e=>e?.name??`original`).join(`, `)}`,...e.people===!1?[`people: left out (--no-people)`]:[]];if(!_){let e=new no(no.gridWidth(v,y));e.grid(g,v),x={png:Fo(e.toPNG()),width:e.width,height:0}}return{images:[{suffix:``,...x}],files:[],summary:w,warnings:C.warnings,meta:{shots:h,world:C,reused:this.reused}}}peopleHider(e){return t=>t.name.startsWith(`people`)||t===e.player.visual.root||t===e.eyeMesh}async runMotion(e){let{world:t,desc:n,loadNotes:r}=await this.loadWorld(e.scene,e.set,e.car,e.assetParams,t=>Po(e.window,[No(e.at??(e.subject===`car`&&t.spawn.car?t.spawn.car.at:t.spawn.player.at))]));if(e.people===!1&&(this.pipeline.hide=this.peopleHider(t)),e.subject===`car`){if(!t.car)throw Error(`scene "${n.name}" has no car (spawn.car)`);t.possess(`car`)}if(e.at){let n=t.ground(e.at);e.subject===`car`?t.car.teleport(n,e.facing??t.car.heading):t.player.teleport(n,e.facing??t.player.heading),t.rig.snapBehind(t.subject())}else e.facing!==void 0&&(e.subject===`car`?t.car.teleport([t.car.position.x,t.car.position.y-.05,t.car.position.z],e.facing):t.player.teleport([t.player.position.x,t.player.position.y,t.player.position.z],e.facing),t.rig.snapBehind(t.subject()));t.setTime($e(e.time??n.time??12));let i=e.camera,a=null;if(typeof i==`object`)t.rig.setMode({kind:`fixed`,...i});else if(i===`chase`||i===`follow`||i===`third`)t.rig.setOnFoot(`third`),t.rig.setMode({kind:`follow`});else if(i===`eye`||i.startsWith(`eye:`)){t.rig.setOnFoot(`eye`);let r=i.includes(`:`)?+i.split(`:`)[1]:NaN;if(i.includes(`:`)&&!(r>0))throw Error(`bad camera "${i}": eye:<lens deg>, e.g. eye:26`);if(t.rig.setLens(Number.isFinite(r)?r:pt.eye.lens,!0),t.rig.setMode({kind:`follow`}),e.opening){let r=n.bookmarks[e.opening];if(!r)throw Error(`--opening: no bookmark "${e.opening}" in scene "${n.name}"`);t.rig.opening(r)}}else if(i.startsWith(`top`))t.rig.setMode({kind:`top`,height:i.includes(`:`)?+i.split(`:`)[1]:25});else if(i.startsWith(`bookmark:`)){let e=n.bookmarks[i.slice(9)];if(!e)throw Error(`no bookmark "${i.slice(9)}" in scene "${n.name}"`);t.rig.setMode({kind:`fixed`,pos:e.pos,lookAt:e.lookAt,fov:e.fov})}else if(i.startsWith(`track`)){let[e,t,n,r]=(i.split(`:`)[1]??``).split(`,`).map(Number);a={bearing:Number.isFinite(e)?e:90,dist:t||6,height:Number.isFinite(n)?n:1.2,fov:r||50}}else throw Error(`bad camera "${i}": chase | third | eye | eye:<lens deg> | top | top:<height m> | track:<bearing>,<dist>,<height>,<fov> | bookmark:<name> | a pose`);if(e.opening&&!(typeof i==`string`&&i.startsWith(`eye`)))throw Error(`--opening needs --camera eye`);let o=e.settle??30;for(let e=0;e<o;e++)t.tick(vt());this.reusedSide.clear();let s=new Ga(t,{load:(e,t)=>this.sideWorld(e,t)});await s.prepare();let c=qa(e.script),{inputs:l,segment:u}=Ja(c),d=l.length,f;if(e.every){f=[];let t=Math.min(48,Math.max(1,e.frames));for(let n=Math.round((e.from??0)/Ht);n<=d&&f.length<t;n+=Math.max(1,Math.round(e.every)))f.push(n);if(!f.length)throw Error(`--from ${e.from} is past the end of the script (${(d*Ht).toFixed(2)} s)`)}else{let t=Math.max(1,Math.min(e.frames,d+1)),n=Math.min(d,Math.round((e.from??0)/Ht));f=t===1?[d]:Array.from({length:t},(e,r)=>n+Math.round(r*(d-n)/(t-1)))}let p=f.length,[m,h]=e.size;this.pipeline.setOutputSize(m,h);let g=Math.min(e.cols??4,p),_=Math.floor((Ya-6)/g)-6,v=Math.round(_*h/m),y=[`FL`,`FR`,`RL`,`RR`],b=[],x=e.subject===`car`,S=new J,C=e=>{let t=s.world,n=t.telemetry(),r=t.rig.camera;r.getWorldDirection(S);let i={t:+(e*Ht).toFixed(4),seg:e===0?-1:u[e-1],camX:r.position.x,camY:r.position.y,camZ:r.position.z,camH:(Math.atan2(S.x,-S.z)*180/Math.PI+360)%360,camP:Math.asin(Math.max(-1,Math.min(1,S.y)))*180/Math.PI,lens:r.fov,scene:t.desc.name,fade:+s.fade.toFixed(3)};if(x&&n.car){let e={...i};for(let[t,r]of Object.entries(n.car))Array.isArray(r)&&r.length===4?y.forEach((n,i)=>e[t+n]=r[i]):Array.isArray(r)?r.forEach((n,r)=>e[`${t}${r}`]=n):(typeof r==`number`||typeof r==`string`||typeof r==`boolean`)&&(e[t]=r);return e}let a=n.walker,o=e===0?vt():l[e-1],c={};for(let[e,t]of Object.entries(a))Array.isArray(t)?t.forEach((t,n)=>c[`${e}_${`xyz`[n]??n}`]=t):(typeof t==`number`||typeof t==`string`||typeof t==`boolean`)&&(c[e]=t);return{...i,...c,moveX:o.moveX,moveY:o.moveY,sprint:o.sprint,jump:o.jump,subject:n.subject}},w=[],T=[],E=!1,D=async(t,n)=>{let r=s.world;if(await s.prepare(),a){let e=r.subject().position,t=a.bearing*Math.PI/180,n=[e.x+Math.sin(t)*a.dist,e.y+a.height,e.z-Math.cos(t)*a.dist];r.rig.setMode({kind:`fixed`,pos:n,lookAt:[e.x,e.y+a.height*.8,e.z],fov:a.fov}),r.rig.update(0,null,0,0)}s.render(this.pipeline),this.checkShaders();let i=b[t],o=(t*Ht).toFixed(2),l=i.seg>=0?c[i.seg].text:`start`,u=r.rig.inEyes?`  look ${ko(i.camH)}/${i.camP.toFixed(0)}  lens ${i.lens.toFixed(0)}`:``,d=x?`${i.kmh.toFixed(1)} km/h  hdg ${ko(i.heading)}  wheels ${i.contact}`:`${i.speed.toFixed(2)} m/s  hdg ${ko(i.heading)}  ${i.grounded?`grounded`:`AIR`}${u}`;E||=s.busy||s.world!==s.home;let f=E?`  ${r.desc.name}${s.fade>0?`  fade ${s.fade.toFixed(2)}`:``}`:``;w.push(no.cell(this.canvas,_,v,`#${n+1}  t=${o}s  [${l}]${f}`,d)),e.raw&&T.push({suffix:`-f${n+1}`,...this.snapshotMain()})};b.push(C(0));let O=0;f[0]===0&&await D(0,O++);for(let e=0;e<d;e++){for(;s.pending;)await s.pending;if(s.tick(l[e]),s.error)throw Error(s.error);for(b.push(C(e+1));O<p&&f[O]===e+1;)await D(e+1,O++)}let k=no.gridWidth(g,_),A=new no(k),ee=c.map(e=>`${e.text}`).join(` ; `);A.text([`#motion  scene=${n.name}  subject=${e.subject}${e.car?` (${e.car.asset}${e.car.seed===void 0?``:` seed `+e.car.seed})`:``}  camera=${typeof i==`string`?i:`pose`}${e.opening?` opening=${e.opening}`:``}  time=${Ze(t.hours)}`,`script: ${ee}   (${(d*Ht).toFixed(2)} s, ${p} frames, settle ${o} ticks)`]),A.grid(w,g);let j=b.map(e=>e.t),M=f.map(e=>e*Ht),N=e=>b.map(t=>Number(t[e])),P=(k-30)/2;x?A.panel(320,(e,t)=>{co(e,{x:10,y:t,w:P,h:150},`speed km/h`,j,[{name:`kmh`,color:`#7ab8ff`,values:N(`kmh`)}],M),co(e,{x:20+P,y:t,w:P,h:150},`inputs`,j,[{name:`throttle`,color:`#7ad07a`,values:N(`throttle`)},{name:`brake`,color:`#ff7a6a`,values:N(`brake`)},{name:`steer`,color:`#e8c070`,values:N(`steer`)}],M,[-1,1]),co(e,{x:10,y:t+150+10,w:P,h:150},`yaw rate deg/s, side slip m/s`,j,[{name:`yawRate`,color:`#d08aff`,values:N(`yawRate`)},{name:`vSide`,color:`#ff9a4a`,values:N(`vSide`)}],M),co(e,{x:20+P,y:t+150+10,w:P,h:150},`wheels in contact, roll deg`,j,[{name:`contacts`,color:`#7ad07a`,values:b.map(e=>String(e.contact).split(``).filter(e=>e===`1`).length)},{name:`roll`,color:`#ff7a6a`,values:N(`roll`)},{name:`pitch`,color:`#7ab8ff`,values:N(`pitch`)}],M)}):A.panel(320,(e,t)=>{co(e,{x:10,y:t,w:P,h:150},`speed m/s`,j,[{name:`speed`,color:`#7ab8ff`,values:N(`speed`)}],M),co(e,{x:20+P,y:t,w:P,h:150},`inputs`,j,[{name:`moveY`,color:`#7ad07a`,values:N(`moveY`)},{name:`moveX`,color:`#e8c070`,values:N(`moveX`)},{name:`jump`,color:`#ff7a6a`,values:b.map(e=>+!!e.jump)}],M,[-1,1]),co(e,{x:10,y:t+150+10,w:P,h:150},`height y m, vertical speed m/s`,j,[{name:`y`,color:`#d08aff`,values:N(`y`)},{name:`vy`,color:`#ff9a4a`,values:N(`vy`)}],M),co(e,{x:20+P,y:t+150+10,w:P,h:150},`grounded, heading/360`,j,[{name:`grounded`,color:`#7ad07a`,values:b.map(e=>+!!e.grounded)},{name:`heading`,color:`#e8c070`,values:b.map(e=>e.heading/360)}],M,[0,1])}),A.panel(300,(e,t)=>{lo(e,{x:10,y:t,w:300,h:300},`path`,N(`x`),N(`z`),f),e.font=`11px Menlo, ui-monospace, monospace`,e.fillStyle=`#c8c8c8`;let n=typeof i==`string`&&i.startsWith(`eye`)?[`camH`,`camP`,`lens`]:[],r=x?[`t`,`x`,`y`,`z`,`heading`,`kmh`,`vSide`,`yawRate`,`steerDeg`,`contact`,...n]:[`t`,`x`,`y`,`z`,`heading`,`speed`,`vy`,`grounded`,...n],a=e=>typeof e==`number`?Math.abs(e)>=100?e.toFixed(1):e.toFixed(2):String(e),o=Math.min(90,Math.floor((k-340)/(r.length+1)));e.fillText(`#`,330,t+30),r.forEach((n,r)=>e.fillText(n,330+(r+1)*o,t+30)),f.slice(0,16).forEach((n,i)=>{let s=b[n];e.fillText(String(i+1),330,t+46+i*15),r.forEach((n,r)=>e.fillText(a(s[n]),330+(r+1)*o,t+46+i*15))})});let te=Object.keys(b[0]),ne=[te.join(`,`),...b.map(e=>te.map(t=>typeof e[t]==`number`?+e[t].toFixed(4):e[t]).join(`,`))].join(`
`)+`
`,F=b[b.length-1],I=[`motion ${n.name}: ${e.subject}, ${d} ticks (${(d*Ht).toFixed(2)} s), ${p} frames`,...r,...s.loadTimes.map(e=>`${e.glass?`seen from the street: ${e.scene} built`:`through a door: ${e.scene} loaded`} in ${e.ms.toFixed(0)} ms${this.reusedSide.has(e.scene)?` (kept from an earlier job, reset)`:` (${Object.entries(e.parts).map(([e,t])=>`${e} ${t}`).join(`, `)})`}`),...f.map((e,t)=>{let n=b[e];return x?`  #${t+1} t=${n.t.toFixed(2)} pos=(${n.x.toFixed(1)}, ${n.y.toFixed(1)}, ${n.z.toFixed(1)}) hdg=${ko(n.heading)} ${n.kmh.toFixed(1)} km/h yaw=${n.yawRate.toFixed(1)}deg/s wheels=${n.contact}`:`  #${t+1} t=${n.t.toFixed(2)} pos=(${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)}) hdg=${ko(n.heading)} ${n.speed.toFixed(2)} m/s ${n.grounded?`grounded`:`air`}`}),...Lo(e.set),`style: ${It()}`],re=[...t.warnings,...s.world===t?[]:s.world.warnings];return x&&b.some(e=>e.upY<.3)&&re.push(`car ended up on its side or roof during the run (upY < 0.3)`),{images:[{suffix:``,png:Fo(A.toPNG()),width:k,height:0},...T],files:[{suffix:`.csv`,text:ne}],summary:I,warnings:re,meta:{frames:f.map(e=>b[e]),final:F,ticks:d,world:t.info(),scene:s.world.desc.name}}}async runAsset(e){let t=await Ka.load(e.asset,{params:e.params,seed:e.seed,scaleFigure:e.scaleFigure}),n=t.built,r=Math.max(1,e.views),i=Array.from({length:r},(e,t)=>(25+360/r*t)%360),a=e.times.map($e),[o,s]=e.size;this.pipeline.setOutputSize(o,s);let c=Math.min(o,Math.floor((Ya-6-70)/r)-6),l=Math.round(c*s/o),u=[],d=e=>[`front, +Z`,`-X side`,`back, -Z`,`+X side`][Math.round((e%360+360)%360/90)%4];for(let n of a){t.setTime(n);for(let n of i)t.setView(n,e.pitch??18,1,e.frame),t.render(this.pipeline),this.checkShaders(),u.push(no.cell(this.canvas,c,l,`view ${n.toFixed(0)} deg (${d(n)})`))}let f=n.stats,p=n.def,m=no.gridWidth(r,c,!0),h=new no(m),g=[`#asset ${p.name}  seed ${n.seed}  params ${JSON.stringify(n.params)}`,`${p.description}`,`triangles ${f.triangles} / budget ${p.budget.triangles}    draw calls ${f.drawCalls} / budget ${p.budget.drawCalls??2}    texels ${f.texels} in ${f.tiles.length} tiles: ${f.tiles.join(`, `)}`,`size ${f.size.map(e=>e.toFixed(2)).join(` x `)} m (declared ${p.bounds.join(` x `)})    parts: ${[...n.parts.keys()].join(`, `)||`none`}    anchors: ${[...n.anchors.keys()].join(`, `)||`none`}    colliders: ${n.colliders.length}`,...n.warnings.map(e=>`!${e}`),...e.scaleFigure!==!1&&p.name!==`walker`?[`figure on the right is 1.8 m tall`]:[]];h.text(g),h.grid(u,r,a.map(e=>Ze(e)));let _=[`asset ${p.name}: ${f.triangles}/${p.budget.triangles} tris, ${f.drawCalls}/${p.budget.drawCalls??2} draw calls, ${f.tiles.length} tiles (${f.texels} texels), size ${f.size.map(e=>e.toFixed(2)).join(`x`)} m, build ${f.buildMs.toFixed(1)} ms`,...Lo(e.set),`style: ${It()}`];return{images:[{suffix:``,png:Fo(h.toPNG()),width:m,height:0}],files:[],summary:_,warnings:n.warnings,meta:{stats:f,budget:p.budget,bounds:p.bounds,params:n.params,seed:n.seed,parts:[...n.parts.keys()],anchors:Object.fromEntries([...n.anchors].map(([e,t])=>[e,t.toArray()])),colliders:n.colliders}}}};function zo(e){let t=window;try{t.__harness=new Ro(e)}catch(e){t.__harness={ready:!1,fatal:e instanceof Error?e.message:String(e)}}}var Bo=[[`physics`,150],[`modules`,250],[`region`,800],[`assets`,700],[`atlas`,600],[`shape`,450],[`terrain`,450],[`layers`,0],[`placements`,300],[`ready`,700],[`frame`,600]],Vo={buildings:1100,"street-people":1e3,skyline:750,streets:650,trees:600,"parked-cars":300,"city-massing":200,"street-furniture":180,yards:150,areas:150,paths:120,pedestrians:100,traffic:100,"shopfront-furniture":100,merge:300},Ho=60,Uo={physics:`Starting up`,modules:`Reading the map`,region:`Fetching the city`,assets:`Gathering the pieces`,atlas:`Painting textures`,shape:`Shaping the ground`,terrain:`Raising the hills`,water:`Filling the Bay`,horizon:`Setting the horizon`,streets:`Laying the streets`,"parked-cars":`Parking cars`,buildings:`Building the houses`,skyline:`Raising the skyline`,"street-lights":`Lighting the streets`,"city-massing":`Filling in the city`,trees:`Planting trees`,areas:`Seeding the lawns`,paths:`Laying the paths`,yards:`Planting the back yards`,"street-furniture":`Setting out the street furniture`,"overhead-lines":`Stringing the wires`,"park-furniture":`Putting out the benches`,"park-path-furniture":`Putting out the benches`,closures:`Putting up the barricades`,"shopfront-furniture":`Opening the shops`,pedestrians:`Bringing people out`,traffic:`Starting the traffic`,"street-people":`Filling the sidewalks`,merge:`Putting it all together`,placements:`Placing people`,ready:`Waking the streets`,frame:`Lighting the scene`};function Wo(){return document.hidden?Promise.resolve():new Promise(e=>{let t=!1,n=()=>{if(t)return;t=!0;let n=new MessageChannel;n.port1.onmessage=()=>e(),n.port2.postMessage(0)};requestAnimationFrame(n),setTimeout(n,100)})}function Go(){let e=document.getElementById(`loading`),t=document.getElementById(`loading-fill`),n=document.getElementById(`loading-status`),r=new URLSearchParams(location.search).get(`loading`)===`hold`;if(!e||!t||!n)return{step:async()=>{},done(){},fail(){}};let i=null,a=0,o=.015,s=performance.now(),c=0,l=!1,u=[],d=e=>Vo[e]??Ho,f=()=>(i||Object.keys(Vo)).reduce((e,t)=>e+d(t),0),p=e=>e===`layers`?f():Bo.find(t=>t[0]===e)?.[1]??0,m=()=>Bo.reduce((e,[t])=>e+p(t),0),h=e=>{let t=0;for(let[n]of Bo){if(n===e.phase)break;t+=p(n)}if(e.phase!==`layers`)return[t,t+p(e.phase)];let n=i??[];for(let e=0;e<a&&e<n.length;e++)t+=d(n[e]);return[t,t+d(n[a]??``)]},g=(e,n)=>{e=Math.min(1,Math.max(o,e)),o=e,t.style.transitionDuration=`${Math.max(0,Math.round(n))}ms`,t.style.transform=`scaleX(${e.toFixed(4)})`};return{async step(e){if(l)return;let t=performance.now();c||=t,e.phase===`layers`&&`steps`in e&&e.steps&&(i?a++:i=e.steps);let r=e.phase===`layers`&&`label`in e&&e.label?e.label:e.phase;u.push([r,t]),n.textContent=Uo[r]??`Building ${r.replace(/-/g,` `)}`;let[o,d]=h(e),f=m(),p=o>800?Math.min(3,Math.max(.5,(t-c)/o)):1;g(Math.min(.985,d/f),(d-o)*p),((d-o)*p>=40||t-s>=120)&&(await Wo(),s=performance.now())},done(){if(!l){if(l=!0,g(1,250),r){let e=performance.now(),t=e=>(e/1e3).toFixed(1),r=[`Loaded in ${t(e)} s`,`  scripts ${t(u[0]?.[1]??e)}`];u.forEach(([n,i],a)=>r.push(`  ${n} ${t((u[a+1]?.[1]??e)-i)}`)),n.style.whiteSpace=`pre`,n.textContent=r.join(`
`),console.info(r.join(`
`))}else n.textContent=``,setTimeout(()=>{e.classList.add(`gone`),setTimeout(()=>e.remove(),900)},300)}},fail(){l=!0,e.remove()}}}var Ko=[];function qo(e,t,n=()=>``){let r=Object.getPrototypeOf(e);for(let i of Object.getOwnPropertyNames(r)){let a=Object.getOwnPropertyDescriptor(r,i);if(!a||typeof a.value!=`function`||i===`constructor`)continue;let o=a.value;e[i]=function(...e){let r=performance.now(),a=o.apply(this,e),s=performance.now()-r;if(s>t){let t=(Error().stack??``).split(`
`).slice(2,9).map(e=>e.trim().replace(/^at /,``).replace(/\(?(https?:\/\/[^)]*\/)?([^/)]+?)(\?[^:)]*)?:(\d+):\d+\)?$/,`$2:$4`)).join(` < `);Ko.push({at:r,ms:s,fn:i,from:t,what:n(i,e),inside:``}),Ko.length>2e3&&Ko.splice(0,500)}return a}}}var Jo=[[Dt.prototype,`warmUp`,e=>`warm-up ${e.desc.name} (uploads, shader compiles)`],[Dt.prototype,`frameFor`,e=>`ready ${e.desc.name} for glass`],[Dt.prototype,`render`,e=>`render ${e.desc.name}`],[Ga.prototype,`tick`,()=>`tick`],[Dt.prototype,`dispose`,e=>`free ${e.desc.name}`]],Yo=!1;function Xo(){if(!Yo){Yo=!0;for(let[e,t,n]of Jo){let r=e,i=r[t];typeof i==`function`&&(r[t]=function(...e){return ht.on?jt(n(this),()=>i.apply(this,e)):i.apply(this,e)})}}}var Zo={progress:e=>void Ot(`load: ${e.phase}`)};function Qo(e,t,n){let r=e.filter(e=>e.end>t&&e.start<n&&e.end>e.start),i=new Map;for(let e of r){let a=Math.min(e.end,n)-Math.max(e.start,t);for(let i of r)i.depth===e.depth+1&&i.start>=e.start&&i.end<=e.end&&(a-=Math.min(i.end,n)-Math.max(i.start,t));i.set(e.name,(i.get(e.name)??0)+Math.max(0,a))}return i}function $o(e){let t=[];for(let[n,r]of[...e].sort((e,t)=>e[0]-t[0]))r<=n||(t.length&&n<=t[t.length-1][1]?t[t.length-1][1]=Math.max(t[t.length-1][1],r):t.push([n,r]));return t}function es(e,t){let n=[];for(let[r,i]of e){let e=r;for(let[r,a]of t)a<=e||r>=i||(r>e&&n.push([e,r]),e=Math.max(e,a));e<i&&n.push([e,i])}return n}var ts=e=>e.reduce((e,[t,n])=>e+n-t,0),ns=(e,t)=>ts(e)-ts(es(e,t));function rs(e,t,n,r){let i=e.filter(e=>e.end===e.start&&e.name.startsWith(`load: `)),a=$o(e.filter(e=>e.end>e.start&&e.end>t&&e.start<n).map(e=>[e.start,e.end])),o=new Map,s=new Map,c=[],l=r?$o(r):null;return i.forEach((e,r)=>{let u=i[r+1];if(!u||u.name===`load: physics`||u.start<=t||e.start>=n)return;let d=e.name.slice(6);(e.start<t-1||u.start>n+1)&&c.push(d);let f=es([[Math.max(e.start,t),Math.min(u.start,n)]],a),p=l?ns(f,l):ts(f);p>=.5&&o.set(`room load: ${d}`,(o.get(`room load: ${d}`)??0)+p),ts(f)-p>=.5&&s.set(d,(s.get(d)??0)+ts(f)-p)}),{work:o,waiting:s,inFlight:c}}function is(e,t,n=null){let r=Qo(ht.spans,e,t),i=rs(ht.spans,e,t,n);for(let[e,t]of i.work)r.set(e,t);return{work:[...r].filter(([,e])=>e>=1).sort((e,t)=>t[1]-e[1]),waiting:[...i.waiting].filter(([,e])=>e>=1),inFlight:i.inFlight}}var as=class e{renderer;game;threshold;long=[];intervals=[];loafs=[];last=-1;frames=0;counters={geos:0,texs:0,progs:0,heap:0};pending=[];loads=0;loaf;overlay=null;constructor(e,t,n=50){this.renderer=e,this.game=t,this.threshold=n,Xo(),ht.on=!0;let r=typeof location<`u`?new URLSearchParams(location.search).get(`glwait`):null;r!==null&&qo(e.getContext(),+(r||5),(t,n)=>{let r=(e.info.programs??[]).find(e=>e.program===n[0]||e.vertexShader===n[0]||e.fragmentShader===n[0]);return r?`program "${r.name}"`:``});let i=!1;try{new PerformanceObserver(e=>this.loafs.push(...e.getEntries())).observe({type:`long-animation-frame`,buffered:!0}),i=!0}catch{try{new PerformanceObserver(e=>this.loafs.push(...e.getEntries().map(e=>({startTime:e.startTime,duration:e.duration})))).observe({type:`longtask`,buffered:!0})}catch{}}this.loaf=i,this.counters=this.read()}read(){let e=this.renderer.info,t=performance.memory;return{geos:e.memory.geometries,texs:e.memory.textures,progs:e.programs?.length??0,heap:(t?.usedJSHeapSize??0)/1048576}}frame(e,t=``){let n=this.read(),r={geos:n.geos-this.counters.geos,texs:n.texs-this.counters.texs,progs:n.progs-this.counters.progs,heap:n.heap-this.counters.heap};if(this.counters=n,this.last>=0){let n=e-this.last;this.intervals.push(n),n>this.threshold&&this.pending.push({at:this.last,ms:n,frame:this.frames-1,where:t,d:r})}for(this.last=e,this.frames++;this.pending.length&&(e-(this.pending[0].at+this.pending[0].ms)>1500||!this.loaf);)this.settle(this.pending.shift())}flush(){for(;this.pending.length;)this.settle(this.pending.shift())}settle(e){let t=e.at,n=e.at+e.ms,r=new Map,i=[];for(let e of this.loafs)if(!(e.startTime+e.duration<t+20||e.startTime>n-20))for(let t of e.scripts??[]){let e=(t.sourceURL??``).replace(/^.*\/(src|node_modules)\//,`$1/`).replace(/\?.*$/,``),n=`${t.sourceFunctionName||t.invoker||`?`}${e?` ${e}`:``}`;r.set(n,(r.get(n)??0)+t.duration),i.push([t.startTime,t.startTime+t.duration])}let{work:a,waiting:o,inFlight:s}=is(t,n,this.loaf?i:null),c=[];e.d.progs>0&&c.push(`${e.d.progs} programs compiled`),(e.d.geos>0||e.d.texs>0)&&c.push(`${e.d.geos} geometries, ${e.d.texs} textures uploaded`),e.d.heap<-8&&c.push(`heap ${e.d.heap.toFixed(0)} MB (gc)`);let l=Ko.filter(e=>e.at>=t&&e.at<n).sort((e,t)=>t.ms-e.ms);for(let e of l){let t=-1;for(let n of ht.spans)n.start<=e.at&&n.end>=e.at+e.ms&&n.depth>t&&(t=n.depth,e.inside=n.name)}l.length&&c.push(`GL waits ${l.reduce((e,t)=>e+t.ms,0).toFixed(0)} ms: ${l.slice(0,3).map(e=>`${e.fn}${e.what?` (${e.what})`:``} ${e.ms.toFixed(0)}${e.inside?` in "${e.inside}"`:``}`).join(`; `)}`);let u=this.game.loadTimes.slice(this.loads);this.loads=this.game.loadTimes.length,(o.length||s.length)&&c.push(`a load waiting${o.length?` (${o.map(([e,t])=>`${e} ${t.toFixed(0)} ms`).join(`, `)})`:``}${s.length?`, in flight across frames (${[...new Set(s)].join(`, `)})`:``}`);for(let e of u)c.push(`${e.scene} loaded (${e.ms.toFixed(0)} ms wall: ${Object.entries(e.parts).map(([e,t])=>`${e} ${t}`).join(`, `)})`);let d=[...r].sort((e,t)=>t[1]-e[1]).slice(0,3);d.length&&c.push(`scripts: ${d.map(([e,t])=>`${e} ${t.toFixed(0)}`).join(`; `)}`),this.long.push({at:t,ms:e.ms,frame:e.frame,where:e.where,causes:a,notes:c}),this.long.length>400&&this.long.shift(),this.draw()}static line(e,t=0){let n=e.causes.slice(0,4).map(([e,t])=>`${e} ${t.toFixed(0)}`).join(`, `);return`${((e.at-t)/1e3).toFixed(1).padStart(6)} s ${e.ms.toFixed(0).padStart(5)} ms${e.where?` at ${e.where}`:``}: ${n||`-`}${e.notes.length?` | ${e.notes.join(` | `)}`:``}`}showOverlay(){if(this.overlay)return;let e=this.overlay=document.createElement(`div`);e.id=`stalls`,e.style.cssText=`position:fixed;right:8px;top:8px;max-width:min(760px,60vw);color:#ffd27a;font:11px/1.35 ui-monospace,Menlo,monospace;white-space:pre-wrap;text-shadow:0 1px 2px #000,0 0 4px #000;pointer-events:none;background:rgba(0,0,0,0.35);padding:4px 6px`,document.body.appendChild(e),this.draw()}overlayShown(e){this.overlay&&(this.overlay.style.display=e?``:`none`)}draw(){if(!this.overlay)return;let t=this.long.slice(-8).reverse();this.overlay.textContent=`long frames (over ${this.threshold} ms): ${this.long.length}${this.loaf?``:`  (no Long Animation Frames API: named work only)`}\n`+(t.map(t=>e.line(t)).join(`
`)||`none yet`)}report(t=12){this.flush();let n=[...this.intervals].sort((e,t)=>e-t),r=e=>n.length?n[Math.min(n.length-1,Math.floor(n.length*e))]:0,i=new Map;for(let e of this.long)for(let[t,n]of e.causes)i.set(t,(i.get(t)??0)+n);let a=this.long[0]?.at??0;return[`frames ${n.length+1}  interval ms: p50 ${r(.5).toFixed(0)}  p95 ${r(.95).toFixed(0)}  p99 ${r(.99).toFixed(0)}  worst ${(n[n.length-1]??0).toFixed(0)}  long (over ${this.threshold}): ${this.long.length}  over 250: ${this.long.filter(e=>e.ms>250).length}  over 1000: ${this.long.filter(e=>e.ms>1e3).length}${this.loaf?``:`  (no LoAF)`}`,`named work in long frames (ms, own time): ${[...i].sort((e,t)=>t[1]-e[1]).slice(0,10).map(([e,t])=>`${e} ${t.toFixed(0)}`).join(`, `)||`-`}`,`worst ${t} long frames (s from the first, ms, where: named work | GPU, heap, loads, scripts):`,...[...this.long].sort((e,t)=>t.ms-e.ms).slice(0,t).map(t=>`  `+e.line(t,a)),...Ko.length?[`GL calls that waited 50 ms or more (s from the first frame, ms, call, its object, in what, from where):`,...Ko.filter(e=>e.ms>=50).map(e=>`  ${((e.at-a)/1e3).toFixed(1)} s ${e.ms.toFixed(0).padStart(5)} ${e.fn}${e.what?` ${e.what}`:``}${e.inside?` in "${e.inside}"`:``} < ${e.from.split(` < `).slice(0,4).join(` < `)}`)]:[]]}},os={"hayes-west":{note:`west on Hayes from the park's west end (Scott) to Divisadero, stopping short of the corner: past Nopa's Hayes windows (about 170 m)`,at:[-1440.4,-41.9],facing:261,points:[[-1440.4,-41.9],[-1474.2,-36.5],[-1608.4,-14.9]],kmh:40},"hayes-nopa":{note:`the last 100 m of hayes-west, from 95 m short of Nopa's Hayes windows to Divisadero`,at:[-1510,-30.8],facing:261,points:[[-1510,-30.8],[-1608.4,-14.9]],kmh:40},"fillmore-church":{note:`south on Fillmore from Hayes to Fell, the church's portico ahead, then right onto Fell westbound past its tower (about 0.2 km)`,at:[-1041,-104.8],facing:171,points:[[-1041,-104.8],[-1025.3,-6.4],[-1033,-3],[-1109,9.1]],kmh:35},"divisadero-north":{note:`north up Divisadero's northbound carriageway from Fell past Nopa, The Independent and Beretta (Grove) to McAllister, stopping short of the closure (about 0.4 km)`,at:[-1601.8,82.9],facing:351,points:[[-1601.8,82.9],[-1615.4,-2.1],[-1618.3,-20.1],[-1632.1,-106.6],[-1634.4,-123.3],[-1648.4,-210.4],[-1651.1,-226.6],[-1664.8,-313.4]],kmh:45},"divisadero-fulton":{note:`north up Divisadero's northbound carriageway from Grove past The Mill and Fulton (Eddie's corner) to short of McAllister (about 190 m; starts 107 m from Eddie's glass)`,at:[-1634.4,-123.3],facing:351,points:[[-1634.4,-123.3],[-1648.4,-210.4],[-1651.1,-226.6],[-1664.8,-313.4]],kmh:40},"fillmore-north":{note:`north up Fillmore's northbound lane from Hayes past Grove (Polenta's Fillmore glass across the street) to short of Fulton (about 0.2 km; starts 118 m from the glass, out of the rooms' prefetch)`,at:[-1037,-104.2],facing:351,points:[[-1037,-104.2],[-1053.4,-206.9],[-1070.1,-311.2]],kmh:40},"grove-east":{note:`east down Grove's eastbound lane from Steiner to short of Fillmore, past Polenta's door and corner pane (about 0.14 km; starts 135 m from its glass)`,at:[-1200.2,-180.8],facing:99,points:[[-1200.2,-180.8],[-1066,-202.4]],kmh:35},"fulton-west":{note:`west along Fulton's westbound lane from midway between Fillmore and Steiner past Steiner and the Archbishop's Mansion's porch (1000 Fulton) to 20 m short of Scott (about 0.21 km; starts 106 m from its glass)`,at:[-1136.2,-303],facing:261,points:[[-1136.2,-303],[-1217.8,-290],[-1342.9,-269.9]],kmh:40},"steiner-north":{note:`north up Steiner's northbound lane from Grove past the park's east side, across Fulton past the Archbishop's Mansion's corner and its round bay, toward McAllister (about 0.19 km; starts 121 m from its glass)`,at:[-1198.2,-183.6],facing:351,points:[[-1198.2,-183.6],[-1215,-288],[-1228.5,-372]],kmh:35},"scott-south":{note:`south down Scott's southbound lane from the park's west side across Hayes, past Lucinda's Deli (535 Scott), stopping 20 m short of Fell (about 145 m)`,at:[-1485.7,-92.9],facing:171,points:[[-1485.7,-92.9],[-1476.2,-33.7],[-1462.8,49.8]],kmh:40},"mcallister-west":{note:`west on McAllister's westbound lane from Steiner past Third Baptist's bell tower and gate to Pierce, stopping short of the corner (about 125 m)`,at:[-1250.2,-390.9],facing:260.9,points:[[-1250.2,-390.9],[-1372.6,-371.2]],kmh:40}};function ss(e,t){return e.map((n,r)=>{let i=e[Math.max(0,r-1)],a=e[Math.min(e.length-1,r+1)],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s)||1;return[+(n[0]-s/c*t).toFixed(2),+(n[1]+o/c*t).toFixed(2)]})}var cs={"park-loop":{note:`once round Alamo Square park from the car spawn: north on Steiner, west on Fulton, south on Scott, east on Hayes, north on Steiner (about 1.1 km)`,at:[-1185,-100.4],facing:351,points:ss([[-1185,-100.4],[-1217.4,-287.6],[-1507.1,-240.8],[-1473.8,-34.1],[-1183.2,-80.7],[-1186.6,-100.5]],2.6),kmh:45},divisadero:{note:`north up Divisadero's northbound carriageway from Fell to McAllister, stopping short of the closure (about 0.4 km)`,at:[-1601.8,82.9],facing:351,points:[[-1601.8,82.9],[-1615.4,-2.1],[-1618.3,-20.1],[-1632.1,-106.6],[-1634.4,-123.3],[-1648.4,-210.4],[-1651.1,-226.6],[-1664.8,-313.4]],kmh:50},...os},ls=e=>(e+540)%360-180,us=(e,t)=>Math.atan2(e,-t)*180/Math.PI;function ds(e,t,n){if(!e.car)throw Error(`this scene has no car`);e.possess(`car`),e.car.teleport(e.ground(t),n),e.rig.snapBehind(e.subject()),e.rig.setMode({kind:`follow`})}var fs=class{route;seg=0;stuck=0;done=!1;blocked=null;ticks=0;constructor(e){this.route=e}input(e){let t=e.telemetry().car,n=vt();if(this.ticks++,!t)return this.done=!0,n;let r=this.route.points;for(;this.seg<r.length-1&&Math.hypot(r[this.seg+1][0]-t.x,r[this.seg+1][1]-t.z)<6;)this.seg++;let i=r[r.length-1],a=Math.hypot(i[0]-t.x,i[1]-t.z);if(this.seg>=r.length-1||this.seg===r.length-2&&a<4)return this.done=t.kmh<1,n.brake=1,n;let o=10,s=this.seg,c=[t.x,t.z],l=r[s+1];for(;s<r.length-1;){let e=r[s+1],t=Math.hypot(e[0]-c[0],e[1]-c[1]);if(t>=o){l=[c[0]+(e[0]-c[0])*o/t,c[1]+(e[1]-c[1])*o/t];break}o-=t,c=e,l=e,s++}let u=ls(us(l[0]-t.x,l[1]-t.z)-t.heading);n.moveX=Math.max(-1,Math.min(1,u/22));let d=r[this.seg+1],f=r[this.seg+2],p=this.route.kmh;if(f){let e=Math.abs(ls(us(f[0]-d[0],f[1]-d[1])-us(d[0]-r[this.seg][0],d[1]-r[this.seg][1]))),n=Math.hypot(d[0]-t.x,d[1]-t.z);e>30&&n<30&&(p=Math.min(p,20))}return a<30&&(p=Math.min(p,12)),Math.abs(u)>35&&(p=Math.min(p,18)),this.stuck=t.kmh<1?this.stuck+1:0,this.stuck>180?(this.blocked={x:t.x,z:t.z,tick:this.ticks},this.done=!0,vt()):(t.kmh<p-2?n.throttle=1:t.kmh>p+4&&(n.brake=.6),n.moveY=n.throttle,n)}},ps=[360,480,540,720,900,1080,1440],ms=[`full`,`stats`,`off`],hs=`console-sf.settings.v1`,gs={resolution:null,hud:`full`,lookSpeed:1};function _s(e){return e===null||e===`full`||typeof e==`number`&&Number.isFinite(e)&&e>=90&&e<=4320}function vs(e){if(e===null)return{ok:!1,value:null};if(e===`full`)return{ok:!0,value:`full`};if(e==="default"||e===``)return{ok:!0,value:null};let t=Math.round(Number(e));return _s(t)?{ok:!0,value:t}:{ok:!1,value:null}}function ys(){let e={...gs};try{let t=JSON.parse(localStorage.getItem(hs)??`null`);t&&_s(t.resolution)&&(e.resolution=t.resolution),t&&ms.includes(t.hud)&&(e.hud=t.hud),t&&typeof t.lookSpeed==`number`&&t.lookSpeed>.05&&t.lookSpeed<20&&(e.lookSpeed=t.lookSpeed)}catch{}return e}function bs(){let e={};try{let t=new URLSearchParams(location.search),n=vs(t.get(`res`));n.ok&&(e.resolution=n.value);let r=t.get(`hud`);r&&ms.includes(r)&&(e.hud=r);let i=Number(t.get(`look`));t.has(`look`)&&i>0&&(e.lookSpeed=i)}catch{}return e}var xs=typeof window<`u`,Ss=xs?ys():{...gs},Cs=xs?bs():{},ws=new Set;function Ts(e){return e in Cs?Cs[e]:Ss[e]}function Es(e,t){let n=Ts(e);delete Cs[e],Ss[e]=t;try{localStorage.setItem(hs,JSON.stringify(Ss))}catch{}if(n!==t)for(let e of ws)e()}var Ds={get resolution(){return Ts(`resolution`)},set resolution(e){_s(e)&&Es(`resolution`,e)},get hud(){return Ts(`hud`)},set hud(e){ms.includes(e)&&Es(`hud`,e)},get lookSpeed(){return Ts(`lookSpeed`)},set lookSpeed(e){e>.05&&e<20&&Es(`lookSpeed`,+e.toFixed(4))},onChange(e){return ws.add(e),()=>ws.delete(e)}};function Os(e,t,n,r){let[i,a]=[Math.max(1,t[0]),Math.max(1,t[1])],o=Math.max(1,n||1),s=Math.round(a*o),c=e===`full`?s:e??r,l=Math.min(o,Math.max(1,c/a)),u=[Math.max(1,Math.round(i*l)),Math.max(1,Math.round(a*l))],d=Math.min(u[1],Math.max(16,Math.round(c)));return{output:u,internal:[Math.max(1,Math.round(d*u[0]/u[1])),d],lines:c,capped:c>u[1]}}var ks=`
#settings {
  position: fixed; inset: 0; z-index: 15; display: none; color: #fff3e3;
  font-family: -apple-system, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif; font-size: 13px; line-height: 1.45;
  background: linear-gradient(to right, rgba(10, 6, 3, 0.78) 0, rgba(10, 6, 3, 0.55) min(560px, 70vw), rgba(10, 6, 3, 0.12) 100%);
}
#settings.open { display: block; }
#settings .panel {
  position: absolute; top: 50%; left: clamp(16px, 4vw, 56px); transform: translateY(-50%);
  width: min(560px, calc(100vw - 32px)); max-height: calc(100vh - 32px); overflow-y: auto; box-sizing: border-box;
  padding: 20px 24px 18px; background: rgba(20, 13, 8, 0.86); border: 1px solid rgba(255, 215, 163, 0.18);
  border-radius: 10px; box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
}
#settings .kicker { font-size: 11px; font-weight: 600; letter-spacing: 0.34em; text-transform: uppercase; opacity: 0.66; }
#settings .title { margin: 4px 0 2px; font: italic 400 32px/1 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif; }
#settings h2 {
  margin: 16px 0 8px; padding-bottom: 5px; border-bottom: 1px solid rgba(255, 243, 227, 0.14);
  font-size: 11px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; color: #ffd7a3;
}
#settings .row { display: grid; grid-template-columns: 112px 1fr; column-gap: 14px; align-items: start; margin: 8px 0; }
#settings .label { padding-top: 6px; opacity: 0.8; }
#settings .chips { display: flex; flex-wrap: wrap; gap: 6px; }
#settings button {
  font: inherit; color: inherit; cursor: pointer; background: rgba(255, 243, 227, 0.06);
  border: 1px solid rgba(255, 243, 227, 0.2); border-radius: 6px; padding: 5px 10px; min-height: 30px;
}
#settings button:hover:not(:disabled) { background: rgba(255, 243, 227, 0.14); }
#settings button:focus-visible { outline: 2px solid #ffd7a3; outline-offset: 1px; }
#settings button[aria-pressed='true'] { background: #ffd7a3; border-color: #ffd7a3; color: #1a0f07; }
#settings button:disabled { opacity: 0.32; cursor: default; }
#settings .res button { min-width: 64px; padding: 4px 8px; text-align: left; }
#settings .res b { display: block; font-size: 14px; font-weight: 600; }
#settings .res small { display: block; font-size: 10.5px; opacity: 0.72; font-variant-numeric: tabular-nums; }
#settings .note { margin: 4px 0 0 126px; font-size: 12px; opacity: 0.72; }
#settings .value { padding-top: 6px; font-variant-numeric: tabular-nums; }
#settings .stepper { display: flex; align-items: center; gap: 8px; }
#settings .stepper span { min-width: 52px; text-align: center; font-variant-numeric: tabular-nums; }
#settings .keys { display: grid; grid-template-columns: max-content 1fr; column-gap: 14px; row-gap: 1px; font-size: 12px; padding-top: 5px; }
#settings .keys kbd { font: 11.5px/1.5 ui-monospace, Menlo, monospace; color: #ffd7a3; white-space: nowrap; }
#settings .keys span { opacity: 0.82; }
#settings .foot { display: flex; align-items: center; gap: 14px; margin-top: 18px; }
#settings .foot .resume { background: #ffd7a3; border-color: #ffd7a3; color: #1a0f07; font-weight: 600; padding: 7px 18px; }
#settings .foot span { font-size: 12px; opacity: 0.66; }
@media (max-width: 520px) {
  #settings .row { grid-template-columns: 1fr; row-gap: 6px; }
  #settings .label { padding-top: 0; }
  #settings .note { margin-left: 0; }
}
`,As=[[`W A S D`,`move: walk, or drive`],[`mouse`,`look`],[`shift`,`run`],[`space`,`jump; in a car, the handbrake`],[`E`,`get in or out, take a car, go through a door`],[`H`,`horn`],[`tab, right button`,`zoom while held`],[`wheel, - =`,`the lens (0: back to LENS°)`],[`V`,`eyes or third person`],[`, .`,`look speed`],[`T G`,`time of day; [ ] a quarter hour`],[`K`,`weather`],[`L`,`art style`],[`C`,`top view`],[`B`,`copy a bookmark`],[`P`,`pause`],[`M`,`mute`],[`N`,`music on or off (shift: its level)`],[`esc`,`this menu`]],js=class{hooks;root;openedAt=-1/0;wasLocked=!1;refreshers=[];perf;resNote;lastPerf=0;constructor(e){if(this.hooks=e,!document.getElementById(`settings-css`)){let e=document.createElement(`style`);e.id=`settings-css`,e.textContent=ks,document.head.appendChild(e)}this.root=document.createElement(`div`),this.root.id=`settings`,this.root.setAttribute(`role`,`dialog`),this.root.setAttribute(`aria-modal`,`true`),this.root.setAttribute(`aria-label`,`Settings`),this.build(),document.body.appendChild(this.root),this.root.addEventListener(`click`,e=>e.target===this.root&&this.close(!0));for(let e of[`wheel`,`mousedown`])this.root.addEventListener(e,e=>e.stopPropagation());addEventListener(`keydown`,e=>this.key(e),!0),document.addEventListener(`pointerlockchange`,()=>{let t=document.pointerLockElement===e.canvas;!t&&this.wasLocked&&this.open(),this.wasLocked=t}),addEventListener(`resize`,()=>this.isOpen&&this.refresh())}get isOpen(){return this.root.classList.contains(`open`)}open(){this.isOpen||(this.openedAt=performance.now(),this.lastPerf=-1/0,this.root.classList.add(`open`),document.pointerLockElement===this.hooks.canvas&&document.exitPointerLock?.(),this.refresh(),this.root.querySelector(`.resume`)?.focus({preventScroll:!0}))}close(e){this.isOpen&&(this.root.classList.remove(`open`),document.activeElement?.blur?.(),e&&Ms(this.hooks.canvas))}update(e){if(!this.isOpen||e-this.lastPerf<250)return;this.lastPerf=e;let t=this.hooks.frame();this.perf.textContent=`${t.fps.toFixed(0)} fps, slowest frame ${t.worstMs.toFixed(0)} ms in the last 2 s (paused: drawing only)`,this.resNote.textContent=this.describe(t.internal,t.output)}key(e){e.code===`Escape`?(e.stopPropagation(),this.isOpen?!e.repeat&&performance.now()-this.openedAt>300&&this.close(!0):this.open()):this.isOpen&&e.stopPropagation()}refresh(){for(let e of this.refreshers)e()}describe(e,t){let n=devicePixelRatio||1,r=`${Math.round(innerWidth*n)} × ${Math.round(innerHeight*n)}`,i=e[1]>this.hooks.baseLines()?` The pen lines are a pixel or two wide in the drawing, so they thin as lines are added.`:``,a=t[1]>innerHeight?`, on a canvas of ${t[0]} × ${t[1]}`:``;return`Drawing ${e[0]} × ${e[1]}${a}; this window is ${r} screen pixels.${i}`}build(){let e=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r},t=e(`div`,`panel`),n=e(`div`);n.append(e(`div`,`kicker`,`Paused`),e(`div`,`title`,`Settings`)),t.append(n);let r=n=>t.appendChild(e(`h2`,``,n)),i=(n,r)=>{let i=e(`div`,`row`);return i.append(e(`div`,`label`,n),r),t.append(i),i},a=(t,n,r,a,o=``)=>{let s=e(`div`,`chips ${o}`);return i(t,s),this.refreshers.push(()=>{s.replaceChildren();for(let t of n()){let n=e(`button`);n.type=`button`,typeof t.label==`string`?n.textContent=t.label:n.append(...t.label),n.disabled=!!t.disabled,t.title&&(n.title=t.title),n.setAttribute(`aria-pressed`,String(t.value===r())),n.addEventListener(`click`,()=>{a(t.value),this.refresh()}),s.append(n)}}),s};r(`Display`),a(`Resolution`,()=>{let t=this.hooks.baseLines(),n=[innerWidth,innerHeight],r=devicePixelRatio||1,i=[...new Set([...ps,t,...typeof Ds.resolution==`number`?[Ds.resolution]:[]])].sort((e,t)=>e-t),a=Math.round(innerHeight*r),o=(i,o)=>{let s=Os(i,n,r,t),c=i!==null&&i!==`full`&&s.capped;return{value:i,label:[e(`b`,``,o),e(`small`,``,`${s.internal[0]}×${s.internal[1]}`)],disabled:c,title:c?`this window has ${a} lines of screen pixels`:i===null?`the game's own`:i===`full`?`the window's own pixels`:void 0}};return[...i.map(e=>o(e===t?null:e,e===t?`${e} · default`:String(e))),o(`full`,`Full`)]},()=>Ds.resolution===this.hooks.baseLines()?null:Ds.resolution,e=>Ds.resolution=e,`res`),this.resNote=t.appendChild(e(`div`,`note`)),this.perf=i(`Frame rate`,e(`div`,`value`)).lastElementChild,a(`HUD`,()=>[{value:`full`,label:`Everything`},{value:`stats`,label:`One line`},{value:`off`,label:`Off`}],()=>Ds.hud,e=>Ds.hud=e),r(`Sound`),a(`Sound`,()=>[{value:!1,label:`On`},{value:!0,label:`Muted`}],()=>this.hooks.sound.muted,e=>e!==this.hooks.sound.muted&&this.hooks.sound.toggleMute()),a(`Music`,()=>[{value:!0,label:`On`},{value:!1,label:`Off`}],()=>qt.on,e=>qt.setOn(e)),a(`Music level`,()=>[...Jt].sort((e,t)=>e-t).map(e=>({value:e,label:e===0?`default`:`${e>0?`+`:`−`}${Math.abs(e)}`,title:e===0?void 0:`${e>0?`+`:``}${e} dB from the default`})),()=>qt.on?qt.db:NaN,e=>qt.setDb(e)),r(`Controls`);let o=e(`div`,`stepper`),s=e(`span`),c=(t,n,r)=>{let i=e(`button`,``,t);return i.type=`button`,i.title=n,i.addEventListener(`click`,()=>(r(),this.refresh())),i};o.append(c(`−`,`slower (the , key)`,()=>Ds.lookSpeed/=xt),s,c(`+`,`faster (the . key)`,()=>Ds.lookSpeed*=xt),c(`Reset`,`back to 1`,()=>Ds.lookSpeed=1)),this.refreshers.push(()=>s.textContent=`${Ds.lookSpeed.toFixed(2)}×`),i(`Look speed`,o);let l=e(`div`,`keys`);for(let[t,n]of As)l.append(e(`kbd`,``,t),e(`span`,``,n.replace(`LENS`,String(this.hooks.lens))));i(`Keys`,l);let u=e(`div`,`foot`),d=e(`button`,`resume`,`Resume`);d.type=`button`,d.addEventListener(`click`,()=>this.close(!0)),u.append(d,e(`span`,``,`or Esc, or a click on the city`)),t.append(u),this.root.append(t)}};function Ms(e){try{(e.requestPointerLock?.())?.catch?.(()=>{})}catch{}}var Ns=document.getElementById(`game`),Ps=document.getElementById(`hud`),Fs=document.getElementById(`hint`),$=new URLSearchParams(location.search),Is=$.has(`harness`)||$.has(`asset`)?null:Go();function Ls(e){Is?.fail();let t=document.getElementById(`fatal`);t.style.display=`block`,t.textContent=e}if($.has(`harness`))zo(Ns);else{addEventListener(`error`,e=>Ls(String(e.error?.stack||e.message))),addEventListener(`unhandledrejection`,e=>Ls(String(e.reason?.stack||e.reason)));let e=$.get(`scene`)??`alamo-square`;($.has(`asset`)?Us($.get(`asset`)):Bs(e)).catch(e=>Ls(String(e?.stack||e)))}var Rs=Object.entries(Qe).sort((e,t)=>e[1]-t[1]);function zs(e,t){let n=Rs.map(([,e])=>e);return t>0?n.find(t=>t>e+.001)??n[0]:[...n].reverse().find(t=>t<e-.001)??n[n.length-1]}async function Bs(e){await Nt($.get(`style`));let t=new Ha(Ns),n=()=>{let e=Os(Ds.resolution,[innerWidth,innerHeight],devicePixelRatio,Y.playInternalHeight);t.playLines=Ds.resolution===null?0:e.lines,t.setOutputSize(...e.output)};n(),addEventListener(`resize`,n),Ds.onChange(n);let r=await Dt.load(await Tt(e),Is?{progress:e=>Is.step(e)}:{});if($.has(`time`)&&r.setTime(+$.get(`time`)),$.has(`at`)){let[e,t,n]=$.get(`at`).split(`,`).map(Number);r.player.teleport([e,r.surfaceAt(e,t,r.ground([e,t])[1]+3)+.05,t],Number.isFinite(n)?n:void 0),r.rig.snapBehind(r.subject())}$.get(`spawn`)===`car`&&r.car&&r.possess(`car`);let i=$.has(`drive`)?cs[$.get(`drive`)]:void 0;if($.has(`drive`)&&!i)throw Error(`&drive: no route "${$.get(`drive`)}" (${Object.keys(cs).join(`, `)})`);let a=i?new fs(i):null;i&&ds(r,i.at,i.facing),r.rig.setOnFoot($.get(`view`)===`third`?`third`:`eye`),$.has(`lens`)&&r.rig.setLens(+$.get(`lens`),!0);let o=$.get(`opening`)??`classic`,s=o!==`0`&&!$.has(`at`)&&$.get(`spawn`)!==`car`&&!i&&r.rig.onFoot===`eye`?r.desc.bookmarks[o]:void 0;s&&r.rig.opening(s);let c=$.has(`stalls`)?+($.get(`stalls`)??0)>=16?+$.get(`stalls`):50:0,l=new Ga(r,{rooms:$.get(`rooms`)?.split(`,`).filter(Boolean),...c?{world:Zo}:{}}),u=c?new as(t.renderer,l,c):null;u?.showOverlay();let d=null,f=new wt(Ns);f.lookScale=()=>l.world.rig.lookScale(),f.sensitivity=Ds.lookSpeed,Ds.onChange(()=>f.sensitivity=Ds.lookSpeed);let p=Hs(),m=Vs(l);Is&&await Is.step({phase:`frame`});let h=0,g=performance.now(),_=60,v=!1,y=``,b=!1,x=!1,S=[],C=0,w=[0,0],T=new js({canvas:Ns,baseLines:()=>Y.playInternalHeight,frame:()=>({fps:_,worstMs:C,internal:w,output:t.outputSize}),sound:m,lens:pt.eye.lens}),E=e=>{if(u){let t=l.world.subject()?.position;u.frame(e,t?`${t.x.toFixed(0)},${t.z.toFixed(0)}`:``)}let n=Math.max(0,Math.min(.25,(e-g)/1e3));for(g=e,_+=(1/Math.max(n,.001)-_)*.05,S.push([e,e-(S.at(-1)?.[0]??e)]);S.length&&e-S[0][0]>2e3;)S.shift();C=S.reduce((e,t)=>Math.max(e,t[1]),0);let r=l.world;for(let e of f.presses.splice(0))if(e===`KeyT`)r.setTime(zs(r.hours,1));else if(e===`KeyG`)r.setTime(zs(r.hours,-1));else if(e===`BracketRight`)r.setTime(r.hours+.25);else if(e===`BracketLeft`)r.setTime(r.hours-.25);else if(e===`KeyP`)v=!v;else if(e===`KeyM`)y=m.toggleMute()?`sound muted`:`sound on`;else if(e===`KeyN`)y=f.held(`ShiftLeft`)||f.held(`ShiftRight`)?qt.nextLevel():qt.toggle();else if(e===`KeyK`){let e=Object.keys(Y.weathers);Y.weather=e[(e.indexOf(Y.weather)+1)%e.length],r.setTime(r.hours),y=`weather: ${Y.weather}`}else if(e===`KeyL`){let e=Vt(),t=e[(e.indexOf(It())+1)%e.length];Nt(t).then(()=>{l.world.setTime(l.world.hours),y=`style: ${t}`},e=>y=`style ${t}: ${e instanceof Error?e.message:e}`)}else if(e===`F8`)u?.overlayShown(document.getElementById(`stalls`)?.style.display===`none`);else if(e===`KeyC`)b=!b,r.rig.setMode(b?{kind:`top`,height:60}:{kind:`follow`});else if(e===`KeyV`)y=r.rig.onFoot===`eye`?`on foot: third person`:`on foot: eyes`;else if(e===`Comma`||e===`Period`)Ds.lookSpeed=f.sensitivity,y=`look speed ${f.sensitivity.toFixed(2)}`;else if(e===`KeyB`){let e={...r.rig.bookmark(),time:+r.hours.toFixed(2)},t=JSON.stringify(e);console.log(`bookmark:`,t),navigator.clipboard?.writeText(t).catch(()=>{}),y=`bookmark copied: ${t}`}if(!v&&!T.isOpen){h+=n;let e=0;for(;h>=.016666666666666666&&e<5;){let t=f.sample();l.tick(a&&!a.done?a.input(l.world):t),h-=Ht,e++}e===5&&(h=0)}m.update(n,f.held(`KeyH`));let i=l.render(t);w=i.internal,T.update(e),x||(x=!0,Is?.done());let o=l.world;l.error&&=(y=l.error,null);let s=o.telemetry(),c=s.subject===`car`&&s.car?`${s.car.kmh.toFixed(0)} km/h  wheels ${s.car.contact}`:`${s.walker.speed.toFixed(1)} m/s${s.walker.grounded?``:`  (air)`}`,D=s.subject===`car`?``:o.rig.onFoot===`eye`?`  eyes, lens ${o.rig.lens.toFixed(0)} deg`:`  third person`,O=`${o.desc.interior?o.desc.interior.name:o.desc.name}  ${Ze(o.hours)} ${o.desc.interior?`indoors`:Y.weather}  ${_.toFixed(0)} fps (slowest ${C.toFixed(0)} ms)  ${i.drawCalls} draws  ${i.triangles} tris  ${i.internal.join(`x`)}${v?`  PAUSED`:``}`,k=`${O}\n${s.subject}  ${c}  pos ${(s.subject===`car`&&s.car?[s.car.x,s.car.y,s.car.z]:[s.walker.x,s.walker.y,s.walker.z]).map(e=>e.toFixed(1)).join(`, `)}${D}\nWASD move  mouse look  shift run  space jump/handbrake  E get in/out, take a car, go through a door  H horn  M mute  N music (shift: level)\nTab or right button hold to zoom  wheel or - = lens (0: ${pt.eye.lens} deg)  V eyes/third person  , . look speed  T/G time  [ ] fine time  K weather  C top view  B bookmark  P pause  Esc settings\n`+y,A=d?`stalls on the drive ${$.get(`drive`)} (${a?.blocked?`BLOCKED`:`done`}):\n${d.join(`
`)}\nDONE`:``;Ps.style.display=T.isOpen?`none`:``,Ps.textContent=[Ds.hud===`full`?k:Ds.hud===`stats`?`${O}\n${y}`:``,A].filter(Boolean).join(`
`),a&&(a.done||a.blocked)&&!d&&(d=u?u.report():[`(add &stalls for the report)`],u?.overlayShown(!1)),Fs.textContent=f.locked||T.isOpen?``:`click to play`,p(l.useHint(),e),requestAnimationFrame(E)};requestAnimationFrame(E)}function Vs(e){let t=null,n=!1,r=!1,i=e=>{n||(n=!0,t=null,console.warn(`sound off: the audio could not start or failed`,e))},a=()=>{removeEventListener(`pointerdown`,a,!0),removeEventListener(`keydown`,a,!0),t||n||Yt(()=>import(`./browser-fHKjpQMd.js`).then(i=>{n||(t=i.startAudio(e.world,{muted:r}))}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url).catch(i)};return e.onSwap(e=>{try{t?.setWorld(e.to)}catch(e){i(e)}}),addEventListener(`pointerdown`,a,!0),addEventListener(`keydown`,a,!0),{update(e,n){if(t)try{t.update(e,{horn:n}),t.state.startsWith(`failed`)&&i(t.state)}catch(e){i(e)}},get muted(){return r},toggleMute(){return r=t?t.toggleMute():!r,r}}}function Hs(){let e=document.createElement(`div`);e.id=`use-hint`,e.style.cssText=`position:fixed;left:0;right:0;bottom:19%;text-align:center;color:#fff;font:14px/1.4 ui-monospace,Menlo,monospace;text-shadow:0 1px 2px #000,0 0 6px #000;white-space:pre;pointer-events:none;opacity:0.9`,document.body.appendChild(e);let t=null,n=0,r=null,i=0;return(a,o)=>{if(a===t){r=t;return}a!==r&&(r=a,i=o);let s=a===null?300:t===null?0:250;o-i<s||o-n<400||(t=a,n=o,e.textContent=t?`E  ${t}`:``)}}async function Us(e){await Nt($.get(`style`));let t=new Ha(Ns),n=()=>t.setOutputSize(innerWidth,innerHeight);n(),addEventListener(`resize`,n);let r;try{r=$.has(`params`)?JSON.parse($.get(`params`)):void 0}catch{throw Error(`params must be JSON, e.g. ?asset=victorian-house&params={"storeys":3}`)}let i=await Ka.load(e,{params:r,seed:$.has(`seed`)?+$.get(`seed`):1}),a=$.has(`time`)?+$.get(`time`):Qe.sunset,o=25,s=18,c=1,l=null;i.setTime(a),Ns.addEventListener(`mousedown`,e=>l=[e.clientX,e.clientY]),addEventListener(`mouseup`,()=>l=null),addEventListener(`mousemove`,e=>{l&&=(o=(o-(e.clientX-l[0])*.4+360)%360,s=Math.max(-5,Math.min(85,s+(e.clientY-l[1])*.3)),[e.clientX,e.clientY])}),Ns.addEventListener(`wheel`,e=>c=Math.max(.2,Math.min(4,c*Math.exp(e.deltaY*.001))),{passive:!0}),addEventListener(`keydown`,e=>{e.code===`KeyT`&&(a=zs(a,1)),e.code===`KeyG`&&(a=zs(a,-1)),i.setTime(a)});let u=i.built.stats,d=()=>{i.setView(o,s,c),i.render(t),Ps.textContent=`${e}  ${Ze(a)}  ${u.triangles}/${i.built.def.budget.triangles} tris  ${u.drawCalls} draw calls  ${u.size.map(e=>e.toFixed(1)).join(` x `)} m\n${i.built.warnings.join(`
`)}\ndrag orbit  wheel zoom  T/G time of day`,requestAnimationFrame(d)};requestAnimationFrame(d)}