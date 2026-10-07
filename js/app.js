(()=>{var Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sp=0,yh=1,Mp=2;var Rs=1,Tp=2,Ar=3,ai=0,Yt=1,_t=2,In=0,yr=1,wa=2,Sh=3,Mh=4,vp=5;var bs=100,Rp=101,bp=102,Pp=103,wp=104,Up=200,Ip=201,Ep=202,Cp=203,Th=204,vh=205,Np=206,Dp=207,Hp=208,Fp=209,Op=210,Lp=211,kp=212,Vp=213,qp=214,Ho=0,Fo=1,Oo=2,$s=3,Lo=4,ko=5,Vo=6,qo=7,hl=0,Bp=1,zp=2,zn=0,Ua=1,Ia=2,Ea=3,Ps=4,Ca=5,Na=6,Da=7,ih="attached",Gp="detached",Rh=300,$i=301,ws=302,ul=303,dl=304,Ha=306,yn=1e3,$t=1001,Jn=1002,Ut=1003,Sr=1004;var Ii=1005;var It=1006,es=1007;var Tn=1008;var pn=1009,bh=1010,Ph=1011,Mr=1012,pl=1013,Gn=1014,vn=1015,Zt=1016,fl=1017,ml=1018,Tr=1020,wh=35902,Uh=35899,Ih=1021,Eh=1022,ln=1023,Xn=1026,ts=1027,gl=1028,xl=1029,ns=1030,Al=1031;var yl=1033,Fa=33776,Oa=33777,La=33778,ka=33779,Sl=35840,Ml=35841,Tl=35842,vl=35843,Rl=36196,bl=37492,Pl=37496,wl=37488,Ul=37489,Va=37490,Il=37491,El=37808,Cl=37809,Nl=37810,Dl=37811,Hl=37812,Fl=37813,Ol=37814,Ll=37815,kl=37816,Vl=37817,ql=37818,Bl=37819,zl=37820,Gl=37821,jl=36492,Kl=36494,Wl=36495,Yl=36283,_l=36284,qa=36285,Zl=36286;var Ai=2300,yi=2301,Co=2302,sh=2303,rh=2400,ah=2401,oh=2402,jp=2500;var Ch=0,Ba=1,vr=2,Kp=3200;var za=0,Wp=1,jn="",vt="srgb",rn="srgb-linear",Zr="linear",lt="srgb";var No=7680;var Yp=519,_p=512,Zp=513,Qp=514,Ql=515,Jp=516,Xp=517,Jl=518,$p=519,Nh=35044;var Dh="300 es",qn=2e3,er=2001;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){let i=tr("canvas");return i.style.display="block",i}var Cd={},nr=null;function Qr(...i){let e="THREE."+i.shift();nr?nr("log",e,...i):console.log(e,...i)}function tf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=tf(i);let e="THREE."+i.shift();if(nr)nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Be(...i){i=tf(i);let e="THREE."+i.shift();if(nr)nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ms(...i){let e=i.join(" ");e in Cd||(Cd[e]=!0,Ce(...i))}function nf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sf={[Ho]:Fo,[Oo]:Vo,[Lo]:qo,[$s]:ko,[Fo]:Ho,[Vo]:Oo,[qo]:Lo,[ko]:$s},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,Kr=Math.PI/180,gs=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function Gm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jm(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Km(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Wm(i,e=1){return e-Math.abs(Hh(i,e*2)-e)}function Ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qm(i,e){return i+Math.random()*(e-i)}function Jm(i){return i*(.5-Math.random())}function Xm(i){i!==void 0&&(Nd=i);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $m(i){return i*Kr}function eg(i){return i*gs}function tg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ig(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*p,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ei={DEG2RAD:Kr,RAD2DEG:gs,generateUUID:Un,clamp:Ze,euclideanModulo:Hh,mapLinear:Gm,inverseLerp:jm,lerp:Wr,damp:Km,pingpong:Wm,smoothstep:Ym,smootherstep:_m,randInt:Zm,randFloat:Qm,randFloatSpread:Jm,seededRandom:Xm,degToRad:$m,radToDeg:eg,isPowerOfTwo:tg,ceilPowerOfTwo:ng,floorPowerOfTwo:ig,setQuaternionFromProperEuler:sg,normalize:mt,denormalize:Vn},qh=class qh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;var ne=qh,Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],f=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*x;m<0&&(d=-d,p=-p,f=-f,x=-x,m=-m);let g=1-o;if(m<.9995){let R=Math.acos(m),b=Math.sin(R);g=Math.sin(g*R)/b,o=Math.sin(o*R)/b,l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+x*o;let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bh=class Bh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bh.prototype.isVector3=!0;var I=Bh,Ec=new I,Dd=new Kt,zh=class zh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=s[0],m=s[3],g=s[6],R=s[1],b=s[4],S=s[7],T=s[2],v=s[5],w=s[8];return r[0]=a*x+o*R+l*T,r[3]=a*m+o*b+l*v,r[6]=a*g+o*S+l*w,r[1]=c*x+h*R+u*T,r[4]=c*m+h*b+u*v,r[7]=c*g+h*S+u*w,r[2]=d*x+p*R+f*T,r[5]=d*m+p*b+f*v,r[8]=d*g+p*S+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=t*u+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zh.prototype.isMatrix3=!0;var Ke=zh,Cc=new Ke,Hd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){let i={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rn]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:Hd,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Hd,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var _e=rg();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ks,ir=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=tr("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ag=0,Si=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var og=0,Dc=new I,Et=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$t,s=$t,r=It,a=Tn,o=ln,l=pn,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Un(),this.name="",this.source=new Si(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Jn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Jn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Rh;Et.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,S=(p+1)/2,T=(g+1)/2,v=(h+d)/4,w=(u+x)/4,A=(f+m)/4;return b>S&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=v/n,r=w/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=v/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=A/r),this.set(n,s,r,t),this}let R=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(m-f)/R,this.y=(u-x)/R,this.z=(d-h)/R,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var gt=Gh,Bo=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Et(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Si(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var cl=class cl{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,f,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,x=c*u;t[0]=d+x*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(n,xn),ki.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(n,xn)),ki.normalize(),io.crossVectors(xn,ki),s[0]=ki.x,s[4]=io.x,s[8]=xn.x,s[1]=ki.y,s[5]=io.y,s[9]=xn.y,s[2]=ki.z,s[6]=io.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],R=n[3],b=n[7],S=n[11],T=n[15],v=s[0],w=s[4],A=s[8],P=s[12],E=s[1],N=s[5],k=s[9],V=s[13],D=s[2],O=s[6],K=s[10],j=s[14],se=s[3],W=s[7],X=s[11],te=s[15];return r[0]=a*v+o*E+l*D+c*se,r[4]=a*w+o*N+l*O+c*W,r[8]=a*A+o*k+l*K+c*X,r[12]=a*P+o*V+l*j+c*te,r[1]=h*v+u*E+d*D+p*se,r[5]=h*w+u*N+d*O+p*W,r[9]=h*A+u*k+d*K+p*X,r[13]=h*P+u*V+d*j+p*te,r[2]=f*v+x*E+m*D+g*se,r[6]=f*w+x*N+m*O+g*W,r[10]=f*A+x*k+m*K+g*X,r[14]=f*P+x*V+m*j+g*te,r[3]=R*v+b*E+S*D+T*se,r[7]=R*w+b*N+S*O+T*W,r[11]=R*A+b*k+S*K+T*X,r[15]=R*P+b*V+S*j+T*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],R=l*p-c*d,b=o*p-c*u,S=o*d-l*u,T=a*p-c*h,v=a*d-l*h,w=a*u-o*h;return t*(x*R-m*b+g*S)-n*(f*R-m*T+g*v)+s*(f*b-x*T+g*w)-r*(f*S-x*v+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],R=t*o-n*a,b=t*l-s*a,S=t*c-r*a,T=n*l-s*o,v=n*c-r*o,w=s*c-r*l,A=h*x-u*f,P=h*m-d*f,E=h*g-p*f,N=u*m-d*x,k=u*g-p*x,V=d*g-p*m,D=R*V-b*k+S*N+T*E-v*P+w*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*V-l*k+c*N)*O,e[1]=(s*k-n*V-r*N)*O,e[2]=(x*w-m*v+g*T)*O,e[3]=(d*v-u*w-p*T)*O,e[4]=(l*E-a*V-c*P)*O,e[5]=(t*V-s*E+r*P)*O,e[6]=(m*S-f*w-g*b)*O,e[7]=(h*w-d*S+p*b)*O,e[8]=(a*k-o*E+c*A)*O,e[9]=(n*E-t*k-r*A)*O,e[10]=(f*v-x*S+g*R)*O,e[11]=(u*S-h*v-p*R)*O,e[12]=(o*P-a*N-l*A)*O,e[13]=(t*N-n*P+s*A)*O,e[14]=(x*b-f*T-m*R)*O,e[15]=(h*T-u*b+d*R)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,x=a*h,m=a*u,g=o*u,R=l*c,b=l*h,S=l*u,T=n.x,v=n.y,w=n.z;return s[0]=(1-(x+g))*T,s[1]=(p+S)*T,s[2]=(f-b)*T,s[3]=0,s[4]=(p-S)*v,s[5]=(1-(d+g))*v,s[6]=(m+R)*v,s[7]=0,s[8]=(f+b)*w,s[9]=(m-R)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(l)f=r/(a-r),x=a*r/(a-r);else if(o===qn)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===er)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),f,x;if(l)f=1/(a-r),x=a/(a-r);else if(o===qn)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===er)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};cl.prototype.isMatrix4=!0;var je=cl,Vs=new I,On=new je,lg=new I(0,0,0),cg=new I(1,1,1),ki=new I,io=new I,xn=new I,Od=new je,Ld=new Kt,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hg=0,kd=new I,qs=new Kt,ui=new je,so=new I,Or=new I,ug=new I,dg=new Kt,Vd=new I(1,0,0),qd=new I(0,1,0),Bd=new I(0,0,1),zd={type:"added"},pg={type:"removed"},Bs={type:"childadded",child:null},Hc={type:"childremoved",child:null},Rt=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new $n,n=new Kt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Or,so,this.up):ui.lookAt(so,Or,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(ui),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pg),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_e.workingColorSpace){return this.r=e,this.g=t,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_e.workingColorSpace){if(e=Hh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fc(a,r,e+1/3),this.g=Fc(a,r,e),this.b=Fc(a,r,e-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return _e.workingToColorSpace(Xt.copy(this),e),Math.round(Ze(Xt.r*255,0,255))*65536+Math.round(Ze(Xt.g*255,0,255))*256+Math.round(Ze(Xt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_e.workingColorSpace){_e.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_e.workingColorSpace){return _e.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=vt){_e.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ro);let n=Wr(Vi.h,ro.h,t),s=Wr(Vi.s,ro.s,t),r=Wr(Vi.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Re;Re.NAMES=rf;var $r=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ei=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new I,di=new I,Oc=new I,pi=new I,zs=new I,Gs=new I,Gd=new I,Lc=new I,kc=new I,Vc=new I,qc=new gt,Bc=new gt,zc=new gt,ji=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),di.subVectors(n,t),Oc.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(di),l=Ln.dot(Oc),c=di.dot(di),h=di.dot(Oc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),qc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qc,r.x),a.addScaledVector(Bc,r.y),a.addScaledVector(zc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),di.subVectors(e,t),Ln.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Ln.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,n),Gs.subVectors(r,n),Lc.subVectors(e,n);let l=zs.dot(Lc),c=Gs.dot(Lc);if(l<=0&&c<=0)return t.copy(n);kc.subVectors(e,s);let h=zs.dot(kc),u=Gs.dot(kc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(zs,a);Vc.subVectors(e,r);let p=zs.dot(Vc),f=Gs.dot(Vc);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Gs,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Gd.subVectors(r,s),o=(u-h)/(u-h+(p-f)),t.copy(s).addScaledVector(Gd,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(zs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),oo.subVectors(this.max,Lr),js.subVectors(e.a,Lr),Ks.subVectors(e.b,Lr),Ws.subVectors(e.c,Lr),qi.subVectors(Ks,js),Bi.subVectors(Ws,Ks),hs.subVectors(js,Ws);let t=[0,-qi.z,qi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,qi.z,0,-qi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-qi.y,qi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!Gc(t,js,Ks,Ws,oo)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,js,Ks,Ws,oo))?!1:(lo.crossVectors(qi,Bi),t=[lo.x,lo.y,lo.z],Gc(t,js,Ks,Ws,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,ao=new an,js=new I,Ks=new I,Ws=new I,qi=new I,Bi=new I,hs=new I,Lr=new I,oo=new I,lo=new I,us=new I;function Gc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lt=new I,co=new ne,mg=0,St=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ea=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},gg=new an,kr=new I,jc=new I,hn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(jc)),this.expandByPoint(kr.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xg=0,wn=new je,Kc=new Rt,Ys=new I,An=new an,Vr=new an,jt=new I,Pt=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(An.min,Vr.min),An.expandByPoint(jt),jt.addVectors(An.max,Vr.max),An.expandByPoint(jt)):(An.expandByPoint(Vr.min),An.expandByPoint(Vr.max))}An.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),jt.add(Ys)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new I,l[A]=new I;let c=new I,h=new I,u=new I,d=new ne,p=new ne,f=new ne,x=new I,m=new I;function g(A,P,E){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(N),o[A].add(x),o[P].add(x),o[E].add(x),l[A].add(m),l[P].add(m),l[E].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,P=R.length;A<P;++A){let E=R[A],N=E.start,k=E.count;for(let V=N,D=N+k;V<D;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new I,S=new I,T=new I,v=new I;function w(A){T.fromBufferAttribute(s,A),v.copy(T);let P=o[A];b.copy(P),b.sub(T.multiplyScalar(T.dot(P))).normalize(),S.crossVectors(v,P);let N=S.dot(l[A])<0?-1:1;a.setXYZW(A,b.x,b.y,b.z,N)}for(let A=0,P=R.length;A<P;++A){let E=R[A],N=E.start,k=E.count;for(let V=N,D=N+k;V<D;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new St(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new I,ar=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wc=new I,Ag=new I,yg=new Ke,sn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wc.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yg.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sg=0,on=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=yr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=vh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new I,Yc=new I,ho=new I,uo=new I,Mi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(Yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ho),o=uo.dot(this.direction),l=-uo.dot(ho),c=uo.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yc).addScaledVector(ho,d),p}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,f=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,R=n.y-a.y,b=n.z-a.z,S=Math.abs(l),T=Math.abs(c),v=Math.abs(h),w,A,P,E,N,k,V,D,O,K,j,se;if(S>=T&&S>=v?(P=l,k=u,O=f,se=g,l>=0?(w=c,A=h,E=d,N=p,V=x,D=m,K=R,j=b):(w=h,A=c,E=p,N=d,V=m,D=x,K=b,j=R)):T>=v?(P=c,k=d,O=x,se=R,c>=0?(w=h,A=l,E=p,N=u,V=m,D=f,K=b,j=g):(w=l,A=h,E=u,N=p,V=f,D=m,K=g,j=b)):(P=h,k=p,O=m,se=b,h>=0?(w=l,A=c,E=u,N=d,V=f,D=x,K=g,j=R):(w=c,A=l,E=d,N=u,V=x,D=f,K=R,j=g)),P===0)return null;let W=w/P,X=A/P,te=1/P,Ne=E-W*k,be=N-X*k,ct=V-W*O,tt=D-X*O,rt=K-W*se,Z=j-X*se,$=rt*tt-Z*ct,xe=Ne*Z-be*rt,qe=ct*be-tt*Ne;if(s){if($<0||xe<0||qe<0)return null}else if(($<0||xe<0||qe<0)&&($>0||xe>0||qe>0))return null;let Me=$+xe+qe;if(Me===0)return null;let ze=te*($*k+xe*O+qe*se);return(Me>0?ze<0:ze>0)?null:this.at(ze/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jd=new je,ds=new Mi,po=new hn,Kd=new I,fo=new I,mo=new I,go=new I,_c=new I,xo=new I,Wd=new I,Ao=new I,$e=class extends Rt{constructor(e=new Pt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),a?xo.addScaledVector(_c,h):xo.addScaledVector(_c.sub(t),h))}t.add(xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(po.containsPoint(ds.origin)===!1&&(ds.intersectSphere(po,Kd)===null||ds.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(jd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex],R=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,T=b;S<T;S+=3){let v=o.getX(S),w=o.getX(S+1),A=o.getX(S+2);s=yo(this,g,e,n,c,h,u,v,w,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let R=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=yo(this,a,e,n,c,h,u,R,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex],R=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,T=b;S<T;S+=3){let v=S,w=S+1,A=S+2;s=yo(this,g,e,n,c,h,u,v,w,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let R=m,b=m+1,S=m+2;s=yo(this,a,e,n,c,h,u,R,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ai,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:i}}function yo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fo),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);let h=Mg(i,e,t,n,fo,mo,go,Wd);if(h){let u=new I;ji.getBarycoord(Wd,fo,mo,go,u),s&&(h.uv=ji.getInterpolatedAttribute(s,o,l,c,u,new ne)),r&&(h.uv1=ji.getInterpolatedAttribute(r,o,l,c,u,new ne)),a&&(h.normal=ji.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ji.getNormal(fo,mo,go,d.normal),h.face=d,h.barycoord=u}return h}var qr=new gt,Yd=new gt,_d=new gt,Tg=new gt,Zd=new je,So=new I,Zc=new hn,Qd=new je,Qc=new Mi,na=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(s),e.ray.intersectsSphere(Zc)!==!1&&(Qd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yd.fromBufferAttribute(s.attributes.skinIndex,e),_d.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(...t,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=_d.getComponent(r);if(a!==0){let o=Yd.getComponent(r);Zd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tg.copy(qr).applyMatrix4(Zd),a)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},or=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},lr=class extends Et{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=new je,vg=new je,ia=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:vg;Jd.multiplyMatrices(o,t[r]),Jd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new lr(t,e,e,ln,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new or),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ti=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_s=new je,Xd=new je,Mo=[],$d=new an,Rg=new je,Br=new $e,zr=new hn,xs=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),$d.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union($d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),zr.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),Xd.multiplyMatrices(n,_s),Br.matrixWorld=Xd,Br.raycast(e,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,gl,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new hn,bg=new ne(.5,.5),To=new I,cr=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,a=new sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],R=r[12],b=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,g-f,T-R).normalize(),s[1].setComponents(c+a,p+h,g+f,T+R).normalize(),s[2].setComponents(c+o,p+u,g+x,T+b).normalize(),s[3].setComponents(c-o,p-u,g-x,T-b).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,p-d,g-m,T-S).normalize();else if(s[4].setComponents(c-l,p-d,g-m,T-S).normalize(),t===qn)s[5].setComponents(c+l,p+d,g+m,T+S).normalize();else if(t===er)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=bg.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ki=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Go=new I,jo=new I,ep=new je,Gr=new Mi,vo=new hn,Jc=new I,tp=new I,vi=class extends Rt{constructor(e=new Pt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Go.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Go.distanceTo(jo);e.setAttribute("lineDistance",new pt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;ep.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=p,m=f-1;x<m;x+=c){let g=h.getX(x),R=h.getX(x+1),b=Ro(this,e,Gr,l,g,R,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(f-1),m=h.getX(p),g=Ro(this,e,Gr,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=p,m=f-1;x<m;x+=c){let g=Ro(this,e,Gr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ro(this,e,Gr,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ro(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Go.fromBufferAttribute(o,s),jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Go,jo,Jc,tp)>n)return;Jc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jc);if(!(c<e.near||c>e.far))return{distance:c,point:tp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var np=new I,ip=new I,sa=class extends vi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)np.fromBufferAttribute(t,s),ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+np.distanceTo(ip);e.setAttribute("lineDistance",new pt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ra=class extends vi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},hr=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new je,lh=new Mi,bo=new hn,Po=new I,aa=class extends Rt{constructor(e=new Pt,t=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;sp.copy(s).invert(),lh.copy(e.ray).applyMatrix4(sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=d,x=p;f<x;f++){let m=c.getX(f);Po.fromBufferAttribute(u,m),rp(Po,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,x=p;f<x;f++)Po.fromBufferAttribute(u,f),rp(Po,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rp(i,e,t,n,s,r,a){let o=lh.distanceSqToPoint(i);if(o<t){let l=new I;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wi=class extends Et{constructor(e,t,n,s,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var oa=class extends Et{constructor(e=[],t=$i,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ur=class extends Et{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends Et{constructor(e,t,n=Gn,s,r,a,o=Ut,l=Ut,c,h=Xn,u=1){if(h!==Xn&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Si(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ko=class extends Yi{constructor(e,t=Gn,n=$i,s,r,a=Ut,o=Ut,l,c=Xn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_i=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function f(x,m,g,R,b,S,T,v,w,A,P){let E=S/w,N=T/A,k=S/2,V=T/2,D=v/2,O=w+1,K=A+1,j=0,se=0,W=new I;for(let X=0;X<K;X++){let te=X*N-V;for(let Ne=0;Ne<O;Ne++){let be=Ne*E-k;W[x]=be*R,W[m]=te*b,W[g]=D,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=v>0?1:-1,h.push(W.x,W.y,W.z),u.push(Ne/w),u.push(1-X/A),j+=1}}for(let X=0;X<A;X++)for(let te=0;te<w;te++){let Ne=d+te+O*X,be=d+te+O*(X+1),ct=d+(te+1)+O*(X+1),tt=d+(te+1)+O*X;l.push(Ne,be,tt),l.push(be,ct,tt),se+=6}o.addGroup(p,se,P),p+=se,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var As=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,x=[],m=n/2,g=0;R(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function R(){let S=new I,T=new I,v=0,w=(t-e)/n;for(let A=0;A<=r;A++){let P=[],E=A/r,N=E*(t-e)+e;for(let k=0;k<=s;k++){let V=k/s,D=V*l+o,O=Math.sin(D),K=Math.cos(D);T.x=N*O,T.y=-E*n+m,T.z=N*K,u.push(T.x,T.y,T.z),S.set(O,w,K).normalize(),d.push(S.x,S.y,S.z),p.push(V,1-E),P.push(f++)}x.push(P)}for(let A=0;A<s;A++)for(let P=0;P<r;P++){let E=x[P][A],N=x[P+1][A],k=x[P+1][A+1],V=x[P][A+1];(e>0||P!==0)&&(h.push(E,N,V),v+=3),(t>0||P!==r-1)&&(h.push(N,k,V),v+=3)}c.addGroup(g,v,0),g+=v}function b(S){let T=f,v=new ne,w=new I,A=0,P=S===!0?e:t,E=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),f++;let N=f;for(let k=0;k<=s;k++){let D=k/s*l+o,O=Math.cos(D),K=Math.sin(D);w.x=P*K,w.y=m*E,w.z=P*O,u.push(w.x,w.y,w.z),d.push(0,E,0),v.x=O*.5+.5,v.y=K*.5*E+.5,p.push(v.x,v.y),f++}for(let k=0;k<s;k++){let V=T+k,D=N+k;S===!0?h.push(D,D+1,V):h.push(D+1,D,V),A+=3}c.addGroup(g,A,S===!0?1:2),g+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ne:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new je;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},dr=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends dr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ap=new I,op=new I,Xc=new Fh,$c=new Fh,eh=new Fh,Yo=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(op.subVectors(s[0],s[1]).add(s[0]),c=op);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ap.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ap),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Xc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,x,m),$c.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,x,m),eh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,x,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$c.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Xc.calc(l),$c.calc(l),eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pg(i,e){let t=1-i;return t*t*e}function wg(i,e){return 2*(1-i)*i*e}function Ug(i,e){return i*i*e}function Yr(i,e,t,n){return Pg(i,e)+wg(i,t)+Ug(i,n)}function Ig(i,e){let t=1-i;return t*t*t*e}function Eg(i,e){let t=1-i;return 3*t*t*i*e}function Cg(i,e){return 3*(1-i)*i*i*e}function Ng(i,e){return i*i*i*e}function _r(i,e,t,n,s){return Ig(i,e)+Eg(i,t)+Cg(i,n)+Ng(i,s)}var ca=class extends Mn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends Mn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y),_r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends Mn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Mn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Mn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends Mn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y),Yr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(lp(o,l.x,c.x,h.x,u.x),lp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Yo,CubicBezierCurve:ca,CubicBezierCurve3:_o,EllipseCurve:dr,LineCurve:ha,LineCurve3:Zo,QuadraticBezierCurve:ua,QuadraticBezierCurve3:Qo,SplineCurve:da}),Jo=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},ys=class extends Jo{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ua(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ca(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new dr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ss=class extends ys{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ys().fromJSON(s))}return this}};function Dg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=af(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=kg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return pa(r,a,t,o,l,c,0),a}function af(i,e,t,n,s){let r;if(s===Zg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cp(a/n|0,i[a],i[a+1],r);return r&&pr(r,r.next)&&(ma(r),r=r.next),r}function Ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||wt(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Gg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fg(i,n,s,r):Hg(i)){e.push(l.i,i.i,c.i),ma(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Og(Ms(i),e),pa(i,e,t,n,s,r,2)):a===2&&Lg(i,e,t,n,s,r):pa(Ms(i),e,t,n,s,r,1);break}}}function Hg(i){let e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&jr(s,o,r,l,a,c,f.x,f.y)&&wt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Fg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=hh(p,f,e,t,n),R=hh(x,m,e,t,n),b=i.prevZ,S=i.nextZ;for(;b&&b.z>=g&&S&&S.z<=R;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==a&&jr(o,h,l,u,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=p&&S.x<=x&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&jr(o,h,l,u,c,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=g;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==a&&jr(o,h,l,u,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=R;){if(S.x>=p&&S.x<=x&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&jr(o,h,l,u,c,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Og(i,e){let t=i;do{let n=t.prev,s=t.next.next;!pr(n,s)&&lf(n,t,t.next,s)&&fa(n,s)&&fa(s,n)&&(e.push(n.i,t.i,s.i),ma(t),ma(t.next),t=i=s),t=t.next}while(t!==i);return Ms(t)}function Lg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wg(a,o)){let l=cf(a,o);a=Ms(a,a.next),l=Ms(l,l.next),pa(a,e,t,n,s,r,0),pa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function kg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=af(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kg(c))}s.sort(Vg);for(let r=0;r<s.length;r++)t=qg(s[r],t);return t}function Vg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function qg(i,e){let t=Bg(i,e);if(!t)return e;let n=cf(t,i);return Ms(n,n.next),Ms(t,t.next)}function Bg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(pr(i,t))return t;do{if(pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&of(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);fa(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&zg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function zg(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function Gg(i,e,t,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jg(s)}function jg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function hh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Kg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function of(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function jr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&of(i,e,t,n,s,r,a,o)}function Wg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yg(i,e)&&(fa(i,e)&&fa(e,i)&&_g(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||pr(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pr(i,e){return i.x===e.x&&i.y===e.y}function lf(i,e,t,n){let s=Uo(wt(i,e,t)),r=Uo(wt(i,e,n)),a=Uo(wt(t,n,i)),o=Uo(wt(t,n,e));return!!(s!==r&&a!==o||s===0&&wo(i,t,e)||r===0&&wo(i,n,e)||a===0&&wo(t,i,n)||o===0&&wo(t,e,n))}function wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Uo(i){return i>0?1:i<0?-1:0}function Yg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fa(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function _g(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cf(i,e){let t=uh(i.i,i.x,i.y),n=uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cp(i,e,t,n){let s=uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var dh=class{static triangulate(e,t,n=2){return Dg(e,t,n)}},fs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];hp(e),up(n,e);let a=e.length;t.forEach(hp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,up(n,t[l]);let o=dh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function up(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fr=class i extends Pt{constructor(e=new Ss([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Qg,b,S=!1,T,v,w,A;if(g){b=g.getSpacedPoints(h),S=!0,d=!1;let ee=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ee),v=new I,w=new I,A=new I}d||(m=0,p=0,f=0,x=0);let P=o.extractPoints(c),E=P.shape,N=P.holes;if(!fs.isClockWise(E)){E=E.reverse();for(let ee=0,re=N.length;ee<re;ee++){let ae=N[ee];fs.isClockWise(ae)&&(N[ee]=ae.reverse())}}function V(ee){let ae=10000000000000001e-36,oe=ee[0];for(let he=1;he<=ee.length;he++){let ke=he%ee.length,Oe=ee[ke],Ge=Oe.x-oe.x,We=Oe.y-oe.y,C=Ge*Ge+We*We,ht=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(oe.x),Math.abs(oe.y)),nt=ae*ht*ht;if(C<=nt){ee.splice(ke,1),he--;continue}oe=Oe}}V(E),N.forEach(V);let D=N.length,O=E;for(let ee=0;ee<D;ee++){let re=N[ee];E=E.concat(re)}function K(ee,re,ae){return re||Be("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,ae)}let j=E.length;function se(ee,re,ae){let oe,he,ke,Oe=ee.x-re.x,Ge=ee.y-re.y,We=ae.x-ee.x,C=ae.y-ee.y,ht=Oe*Oe+Ge*Ge,nt=Oe*C-Ge*We;if(Math.abs(nt)>Number.EPSILON){let U=Math.sqrt(ht),y=Math.sqrt(We*We+C*C),L=re.x-Ge/U,z=re.y+Oe/U,Y=ae.x-C/y,le=ae.y+We/y,ce=((Y-L)*C-(le-z)*We)/(Oe*C-Ge*We);oe=L+Oe*ce-ee.x,he=z+Ge*ce-ee.y;let _=oe*oe+he*he;if(_<=2)return new ne(oe,he);ke=Math.sqrt(_/2)}else{let U=!1;Oe>Number.EPSILON?We>Number.EPSILON&&(U=!0):Oe<-Number.EPSILON?We<-Number.EPSILON&&(U=!0):Math.sign(Ge)===Math.sign(C)&&(U=!0),U?(oe=-Ge,he=Oe,ke=Math.sqrt(ht)):(oe=Oe,he=Ge,ke=Math.sqrt(ht/2))}return new ne(oe/ke,he/ke)}let W=[];for(let ee=0,re=O.length,ae=re-1,oe=ee+1;ee<re;ee++,ae++,oe++)ae===re&&(ae=0),oe===re&&(oe=0),W[ee]=se(O[ee],O[ae],O[oe]);let X=[],te,Ne=W.concat();for(let ee=0,re=D;ee<re;ee++){let ae=N[ee];te=[];for(let oe=0,he=ae.length,ke=he-1,Oe=oe+1;oe<he;oe++,ke++,Oe++)ke===he&&(ke=0),Oe===he&&(Oe=0),te[oe]=se(ae[oe],ae[ke],ae[Oe]);X.push(te),Ne=Ne.concat(te)}let be;if(m===0)be=fs.triangulateShape(O,N);else{let ee=[],re=[];for(let ae=0;ae<m;ae++){let oe=ae/m,he=p*Math.cos(oe*Math.PI/2),ke=f*Math.sin(oe*Math.PI/2)+x;for(let Oe=0,Ge=O.length;Oe<Ge;Oe++){let We=K(O[Oe],W[Oe],ke);xe(We.x,We.y,-he),oe===0&&ee.push(We)}for(let Oe=0,Ge=D;Oe<Ge;Oe++){let We=N[Oe];te=X[Oe];let C=[];for(let ht=0,nt=We.length;ht<nt;ht++){let U=K(We[ht],te[ht],ke);xe(U.x,U.y,-he),oe===0&&C.push(U)}oe===0&&re.push(C)}}be=fs.triangulateShape(ee,re)}let ct=be.length,tt=f+x;for(let ee=0;ee<j;ee++){let re=d?K(E[ee],Ne[ee],tt):E[ee];S?(w.copy(T.normals[0]).multiplyScalar(re.x),v.copy(T.binormals[0]).multiplyScalar(re.y),A.copy(b[0]).add(w).add(v),xe(A.x,A.y,A.z)):xe(re.x,re.y,0)}for(let ee=1;ee<=h;ee++)for(let re=0;re<j;re++){let ae=d?K(E[re],Ne[re],tt):E[re];S?(w.copy(T.normals[ee]).multiplyScalar(ae.x),v.copy(T.binormals[ee]).multiplyScalar(ae.y),A.copy(b[ee]).add(w).add(v),xe(A.x,A.y,A.z)):xe(ae.x,ae.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let re=ee/m,ae=p*Math.cos(re*Math.PI/2),oe=f*Math.sin(re*Math.PI/2)+x;for(let he=0,ke=O.length;he<ke;he++){let Oe=K(O[he],W[he],oe);xe(Oe.x,Oe.y,u+ae)}for(let he=0,ke=N.length;he<ke;he++){let Oe=N[he];te=X[he];for(let Ge=0,We=Oe.length;Ge<We;Ge++){let C=K(Oe[Ge],te[Ge],oe);S?xe(C.x,C.y+b[h-1].y,b[h-1].x+ae):xe(C.x,C.y,u+ae)}}}rt(),Z();function rt(){let ee=s.length/3;if(d){let re=0,ae=j*re;for(let oe=0;oe<ct;oe++){let he=be[oe];qe(he[2]+ae,he[1]+ae,he[0]+ae)}re=h+m*2,ae=j*re;for(let oe=0;oe<ct;oe++){let he=be[oe];qe(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let re=0;re<ct;re++){let ae=be[re];qe(ae[2],ae[1],ae[0])}for(let re=0;re<ct;re++){let ae=be[re];qe(ae[0]+j*h,ae[1]+j*h,ae[2]+j*h)}}n.addGroup(ee,s.length/3-ee,0)}function Z(){let ee=s.length/3,re=0;$(O,re),re+=O.length;for(let ae=0,oe=N.length;ae<oe;ae++){let he=N[ae];$(he,re),re+=he.length}n.addGroup(ee,s.length/3-ee,1)}function $(ee,re){let ae=ee.length;for(;--ae>=0;){let oe=ae,he=ae-1;he<0&&(he=ee.length-1);for(let ke=0,Oe=h+m*2;ke<Oe;ke++){let Ge=j*ke,We=j*(ke+1),C=re+oe+Ge,ht=re+he+Ge,nt=re+he+We,U=re+oe+We;Me(C,ht,nt,U)}}}function xe(ee,re,ae){l.push(ee),l.push(re),l.push(ae)}function qe(ee,re,ae){ze(ee),ze(re),ze(ae);let oe=s.length/3,he=R.generateTopUV(n,s,oe-3,oe-2,oe-1);ft(he[0]),ft(he[1]),ft(he[2])}function Me(ee,re,ae,oe){ze(ee),ze(re),ze(oe),ze(re),ze(ae),ze(oe);let he=s.length/3,ke=R.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);ft(ke[0]),ft(ke[1]),ft(ke[3]),ft(ke[1]),ft(ke[2]),ft(ke[3])}function ze(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function ft(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ch[s.type]().fromJSON(s)),new i(n,e.options)}},Qg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-f),new ne(x,1-g)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-f),new ne(m,1-g)]}};function Jg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zi=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let R=g*d-a;for(let b=0;b<c;b++){let S=b*u-r;f.push(S,-R,0),x.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let R=0;R<o;R++){let b=R+c*g,S=R+c*(g+1),T=R+1+c*(g+1),v=R+1+c*g;p.push(b,S,v),p.push(S,T,v)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ga=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let R=[],b=g/n,S=a+b*o,T=e*Math.cos(S),v=Math.sqrt(e*e-T*T),w=0;g===0&&a===0?w=.5/t:g===n&&l===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){let P=A/t,E=s+P*r;u.x=-v*Math.cos(E),u.y=T,u.z=v*Math.sin(E),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+w,1-b),R.push(c++)}h.push(R)}for(let g=0;g<n;g++)for(let R=0;R<t;R++){let b=h[g][R+1],S=h[g][R],T=h[g+1][R],v=h[g+1][R+1];(g!==0||a>0)&&p.push(b,S,v),(g!==n-1||l<Math.PI)&&p.push(S,T,v)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dp(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Us(i[t]);for(let s in n)e[s]=n[s]}return e}function dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_e.workingColorSpace}var Ci={clone:Us,merge:en},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mr=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xa=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xo=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Do(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function t0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function pp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function n0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=e,o=2*t-n;break;case oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=e,l=2*n-t;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(s-t),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,R=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,b=(-1-p)*m+(1.5+p)*x+.5*f,S=p*m-p*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+R*a[c+T]+b*a[l+T]+S*a[u+T];return r}},tl=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},nl=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-t)/(s-t),x=1-f;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*f;return r}let d=o*2,p=e-1;for(let f=0;f!==o;++f){let x=a[c+f],m=a[l+f],g=p*d+f*2,R=u[g],b=u[g+1],S=e*d+f*2,T=h[S],v=h[S+1],w=s0(n,t,R,T,s);r[f]=hf(w,x,b,v,m)}return r}};function hf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function i0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function s0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=hf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=i0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Do(e.settings)&&(n.settings={inTangents:Gi(e.settings.inTangents,Array),outTangents:Gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ai:t=this.InterpolantFactoryMethodDiscrete;break;case yi:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ai;case this.InterpolantFactoryMethodLinear:return yi;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Do(this.settings)&&(fp(this.settings.inTangents,e),fp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&zm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let x=t[u+f];if(x!==t[d+f]||x!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Do(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=yi;var Ri=class extends dn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ai;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="color";var bi=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};bi.prototype.ValueTypeName="number";var sl=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pi=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends dn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Ai;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Qi.prototype.ValueTypeName="vector";var ya=class{constructor(e="",t=-1,n=[],s=jp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(a0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=t0(l);l=pp(l,1,h),c=pp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new bi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function r0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Aa;case"quaternion":return Pi;case"bool":case"boolean":return Ri;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function a0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=r0(i.type);if(i.times===void 0){let n=[],s=[];n0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Do(i.settings)&&(t.settings={inTangents:Gi(i.settings.inTangents,Float32Array),outTangents:Gi(i.settings.outTangents,Float32Array)}),t}var Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(mp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!mp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function mp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var rl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uf=new rl,ni=class{constructor(e){this.manager=e!==void 0?e:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},ph=class extends Error{constructor(e,t){super(e),this.response=t}},gr=class extends ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=gi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,x=0,m=new ReadableStream({start(g){R();function R(){u.read().then(({done:b,value:S})=>{if(b)g.close();else{x+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:p});for(let v=0,w=h.length;v<w;v++){let A=h[v];A.onProgress&&A.onProgress(T)}g.enqueue(S),R()}},b=>{g.error(b)})}}});return new Response(m)}else throw new ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{Qn.add(`file:${e}`,c);let h=gi[e];delete gi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zs=new WeakMap,al=class extends ni{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Zs.get(a);u===void 0&&(u=[],Zs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=tr("img");function l(){h(),t&&t(this);let u=Zs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Zs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Qn.remove(`image:${e}`);let d=Zs.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Sa=class extends ni{constructor(e){super(e)}load(e,t,n,s){let r=new Et,a=new al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ts=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},th=new je,gp=new I,xp=new I,xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(gp),xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Io=new I,Eo=new Kt,Zn=new I,Ta=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Io,Eo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Eo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Io,Eo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Eo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new I,Ap=new ne,yp=new ne,kt=class extends Ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,yp),t.subVectors(yp,Ap)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends xr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},va=class extends Ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},mh=class extends xr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},ii=class extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},si=class extends Ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gh=class extends xr{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ui=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nh=new WeakMap,Ra=class extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{nh.has(a)===!0?(s&&s(nh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),nh.set(l,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qs=-90,Js=1,ol=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Qs,Js,e,t);s.layers=this.layers,this.add(s);let r=new kt(Qs,Js,e,t);r.layers=this.layers,this.add(r);let a=new kt(Qs,Js,e,t);a.layers=this.layers,this.add(a);let o=new kt(Qs,Js,e,t);o.layers=this.layers,this.add(o);let l=new kt(Qs,Js,e,t);l.layers=this.layers,this.add(l);let c=new kt(Qs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ll=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=o0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function o0(){this._document.hidden===!1&&this.reset()}var Lh="\\[\\]\\.:\\/",l0=new RegExp("["+Lh+"]","g"),kh="[^"+Lh+"]",c0="[^"+Lh.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",kh),u0=/(WCOD+)?/.source.replace("WCOD",c0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),f0=new RegExp("^"+h0+u0+d0+p0+"$"),m0=["material","materials","bones","map"],xh=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(e){let t=f0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);m0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=xh;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pT=new Float32Array(1);var ri=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jh=class jh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};jh.prototype.isMatrix2=!0;var Ah=jh;var Pa=class extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Vh(i,e,t,n){let s=g0(n);switch(t){case Ih:return i*e;case gl:return i*e/s.components*s.byteLength;case xl:return i*e/s.components*s.byteLength;case ns:return i*e*2/s.components*s.byteLength;case Al:return i*e*2/s.components*s.byteLength;case Eh:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case yl:return i*e*4/s.components*s.byteLength;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case vl:return Math.max(i,16)*Math.max(e,8)/4;case Sl:case Tl:return Math.max(i,8)*Math.max(e,8)/2;case Rl:case bl:case wl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Va:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jl:case Kl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(i){switch(i){case pn:case bh:return{byteLength:1,components:1};case Mr:case Ph:case Zt:return{byteLength:2,components:1};case fl:case ml:return{byteLength:2,components:4};case Gn:case pl:case vn:return{byteLength:4,components:1};case wh:case Uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Df(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function x0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],x=u[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,gx=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,xx=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iA=`float getShadowMask() {
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
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,aA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
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
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
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
#endif`,pA=`#ifdef USE_TRANSMISSION
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
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
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
}`,PA=`#define DISTANCE
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
}`,wA=`#define DISTANCE
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`uniform float scale;
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
}`,CA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,DA=`uniform vec3 diffuse;
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
}`,HA=`#define LAMBERT
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
}`,FA=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,OA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,kA=`#define NORMAL
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
}`,VA=`#define NORMAL
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
}`,qA=`#define PHONG
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
}`,BA=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,zA=`#define STANDARD
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
}`,GA=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,jA=`#define TOON
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
}`,KA=`#define TOON
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
}`,WA=`uniform float size;
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
}`,YA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,ZA=`uniform vec3 color;
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
}`,QA=`uniform float rotation;
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
}`,JA=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:A0,alphahash_pars_fragment:y0,alphamap_fragment:S0,alphamap_pars_fragment:M0,alphatest_fragment:T0,alphatest_pars_fragment:v0,aomap_fragment:R0,aomap_pars_fragment:b0,batching_pars_vertex:P0,batching_vertex:w0,begin_vertex:U0,beginnormal_vertex:I0,bsdfs:E0,iridescence_fragment:C0,bumpmap_pars_fragment:N0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:L0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:q0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:G0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:W0,emissivemap_pars_fragment:Y0,colorspace_fragment:_0,colorspace_pars_fragment:Z0,envmap_fragment:Q0,envmap_common_pars_fragment:J0,envmap_pars_fragment:X0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_pars_fragment:ax,lights_lambert_fragment:ox,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:ux,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:fx,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:Ax,lights_fragment_end:yx,lightprobes_pars_fragment:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:Rx,map_fragment:bx,map_pars_fragment:Px,map_particle_fragment:wx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Cx,morphcolor_vertex:Nx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:Lx,normal_pars_fragment:kx,normal_pars_vertex:Vx,normal_vertex:qx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Wx,packing:Yx,premultiplied_alpha_fragment:_x,project_vertex:Zx,dithering_fragment:Qx,dithering_pars_fragment:Jx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:tA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:sA,skinning_pars_vertex:rA,skinning_vertex:aA,skinnormal_vertex:oA,specularmap_fragment:lA,specularmap_pars_fragment:cA,tonemapping_fragment:hA,tonemapping_pars_fragment:uA,transmission_fragment:dA,transmission_pars_fragment:pA,uv_pars_fragment:fA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:xA,background_vert:AA,background_frag:yA,backgroundCube_vert:SA,backgroundCube_frag:MA,cube_vert:TA,cube_frag:vA,depth_vert:RA,depth_frag:bA,distance_vert:PA,distance_frag:wA,equirect_vert:UA,equirect_frag:IA,linedashed_vert:EA,linedashed_frag:CA,meshbasic_vert:NA,meshbasic_frag:DA,meshlambert_vert:HA,meshlambert_frag:FA,meshmatcap_vert:OA,meshmatcap_frag:LA,meshnormal_vert:kA,meshnormal_frag:VA,meshphong_vert:qA,meshphong_frag:BA,meshphysical_vert:zA,meshphysical_frag:GA,meshtoon_vert:jA,meshtoon_frag:KA,points_vert:WA,points_frag:YA,shadow_vert:_A,shadow_frag:ZA,sprite_vert:QA,sprite_frag:JA},ge={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},li={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};li.physical={uniforms:en([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Xl={r:0,b:0,g:0},XA=new je,Hf=new Ke;Hf.set(-1,0,0,0,1,0,0,0,1);function $A(i,e,t,n,s,r){let a=new Re(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(R){let b=R.isScene===!0?R.background:null;if(b&&b.isTexture){let S=R.backgroundBlurriness>0;b=e.get(b,S)}return b}function f(R){let b=!1,S=p(R);S===null?m(a,o):S&&S.isColor&&(m(S,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(R,b){let S=p(b);S&&(S.isCubeTexture||S.mapping===Ha)?(c===void 0&&(c=new $e(new _i(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Us(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=_e.getTransfer(S.colorSpace)!==lt,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new Zi(2,2),new Ht({name:"BackgroundMaterial",uniforms:Us(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_e.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function m(R,b){R.getRGB(Xl,Oh(i)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,m(a,o)},render:f,addToRenderList:x,dispose:g}}function ey(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,k,V,D,O){let K=!1,j=u(N,D,V,k);r!==j&&(r=j,c(r.object)),K=p(N,D,V,O),K&&f(N,D,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(N,k,V,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,k,V,D){let O=D.wireframe===!0,K=n[k.id];K===void 0&&(K={},n[k.id]=K);let j=N.isInstancedMesh===!0?N.id:0,se=K[j];se===void 0&&(se={},K[j]=se);let W=se[V.id];W===void 0&&(W={},se[V.id]=W);let X=W[O];return X===void 0&&(X=d(l()),W[O]=X),X}function d(N){let k=[],V=[],D=[];for(let O=0;O<t;O++)k[O]=0,V[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:D,object:N,attributes:{},index:null}}function p(N,k,V,D){let O=r.attributes,K=k.attributes,j=0,se=V.getAttributes();for(let W in se)if(se[W].location>=0){let te=O[W],Ne=K[W];if(Ne===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Ne=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Ne=N.instanceColor)),te===void 0||te.attribute!==Ne||Ne&&te.data!==Ne.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function f(N,k,V,D){let O={},K=k.attributes,j=0,se=V.getAttributes();for(let W in se)if(se[W].location>=0){let te=K[W];te===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let Ne={};Ne.attribute=te,te&&te.data&&(Ne.data=te.data),O[W]=Ne,j++}r.attributes=O,r.attributesNum=j,r.index=D}function x(){let N=r.newAttributes;for(let k=0,V=N.length;k<V;k++)N[k]=0}function m(N){g(N,0)}function g(N,k){let V=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;V[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),O[N]!==k&&(i.vertexAttribDivisor(N,k),O[N]=k)}function R(){let N=r.newAttributes,k=r.enabledAttributes;for(let V=0,D=k.length;V<D;V++)k[V]!==N[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function b(N,k,V,D,O,K,j){j===!0?i.vertexAttribIPointer(N,k,V,O,K):i.vertexAttribPointer(N,k,V,D,O,K)}function S(N,k,V,D){x();let O=D.attributes,K=V.getAttributes(),j=k.defaultAttributeValues;for(let se in K){let W=K[se];if(W.location>=0){let X=O[se];if(X===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){let te=X.normalized,Ne=X.itemSize,be=e.get(X);if(be===void 0)continue;let ct=be.buffer,tt=be.type,rt=be.bytesPerElement,Z=tt===i.INT||tt===i.UNSIGNED_INT||X.gpuType===pl;if(X.isInterleavedBufferAttribute){let $=X.data,xe=$.stride,qe=X.offset;if($.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)g(W.location+Me,$.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<W.locationSize;Me++)m(W.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Me=0;Me<W.locationSize;Me++)b(W.location+Me,Ne/W.locationSize,tt,te,xe*rt,(qe+Ne/W.locationSize*Me)*rt,Z)}else{if(X.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)g(W.location+$,X.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let $=0;$<W.locationSize;$++)m(W.location+$);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let $=0;$<W.locationSize;$++)b(W.location+$,Ne/W.locationSize,tt,te,Ne*rt,Ne/W.locationSize*$*rt,Z)}}else if(j!==void 0){let te=j[se];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}R()}function T(){P();for(let N in n){let k=n[N];for(let V in k){let D=k[V];for(let O in D){let K=D[O];for(let j in K)h(K[j].object),delete K[j];delete D[O]}}delete n[N]}}function v(N){if(n[N.id]===void 0)return;let k=n[N.id];for(let V in k){let D=k[V];for(let O in D){let K=D[O];for(let j in K)h(K[j].object),delete K[j];delete D[O]}}delete n[N.id]}function w(N){for(let k in n){let V=n[k];for(let D in V){let O=V[D];if(O[N.id]===void 0)continue;let K=O[N.id];for(let j in K)h(K[j].object),delete K[j];delete O[N.id]}}}function A(N){for(let k in n){let V=n[k],D=N.isInstancedMesh===!0?N.id:0,O=V[D];if(O!==void 0){for(let K in O){let j=O[K];for(let se in j)h(j[se].object),delete j[se];delete O[K]}delete V[D],Object.keys(V).length===0&&delete n[k]}}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfObject:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function ty(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ny(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let A=w===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pn&&w!==vn&&!A&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:v}}function iy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new sn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{let R=r?0:n,b=R*4,S=g.clippingState||null;l.value=S,S=h(f,d,b,p);for(let T=0;T!==b;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,S=p;b!==x;++b,S+=4)a.copy(u[b]).applyMatrix4(R,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var br=4,sy=6,ry=20,ay=256,Ga=new si,df=new Re,Kh=null,Wh=0,Yh=0,_h=!1,oy=new I,Is=new I,wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=oy}=r;Kh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kh,Wh,Yh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Zt,format:ln,colorSpace:rn,depthBuffer:!1},s=pf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ly(r)),this._blurMaterial=hy(r,e,t),this._ggxMaterial=cy(r,e,t)}return s}_compileMaterial(e){let t=new $e(new Pt,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(df),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new _i,new Sn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,R=e.background;R?R.isColor&&(m.color.copy(R),e.background=null,g=!0):(m.color.copy(df),g=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;Rr(s,S*T,b>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$i||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,p=u*d,{_lodMax:f}=this,x=this._sizeLods[n],m=3*x*(n>f-br?n-f+br:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=f-t,Rr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,Rr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(o,Ga)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-br?s-this._lodMax+br:0),d=4*(this._cubeSize-h);Rr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Ga)}};function ly(i){let e=[],t=[],n=i,s=i-br+1+sy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,f=new Float32Array(p*d*u),x=new Float32Array(p*d*u);for(let g=0;g<u;g++){let R=g%3*2/3-1,b=g>2?0:-1,S=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];f.set(S,p*d*g);for(let T=0;T<d;T++){let v=h[T*2]*2-1,w=h[T*2+1]*2-1;g===0?Is.set(1,w,v):g===1?Is.set(-v,1,-w):g===2?Is.set(-v,w,1):g===3?Is.set(-1,w,-v):g===4?Is.set(-v,-1,w):Is.set(v,w,-1),Is.toArray(x,(g*d+T)*p)}}let m=new Pt;m.setAttribute("position",new St(f,p)),m.setAttribute("outputDirection",new St(x,p)),t.push(new $e(m,null)),n>br&&n--}return{lodMeshes:t,sizeLods:e}}function pf(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cy(i,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function hy(i,e,t){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:ry,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ff(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function mf(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:In});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=It),new ol(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function uy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===ul||p===dl)if(e.has(d)){let f=e.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let x=new ec(f.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,f=p===ul||p===dl,x=p===$i||p===ws;if(f||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new wr(i)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let R=d.image;return f&&R&&R.height>0||x&&R&&l(R)?(n===null&&(n=new wr(i)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===ul?d.mapping=$i:p===dl&&(d.mapping=ws),d}function l(d){let p=0,f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function py(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,f=u.attributes.position,x=0;if(f===void 0)return;if(p!==null){let R=p.array;x=p.version;for(let b=0,S=R.length;b<S;b+=3){let T=R[b+0],v=R[b+1],w=R[b+2];d.push(T,v,v,w,w,T)}}else{let R=f.array;x=f.version;for(let b=0,S=R.length/3-1;b<S;b+=3){let T=b+0,v=b+1,w=b+2;d.push(T,v,v,w,w,T)}}let m=new(f.count>=65535?ta:ea)(d,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function my(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gy(i,e,t){let n=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let P=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let S=o.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let v=new Float32Array(S*T*4*u),w=new Jr(v,S,T,u);w.type=vn,w.needsUpdate=!0;let A=b*4;for(let E=0;E<u;E++){let N=m[E],k=g[E],V=R[E],D=S*T*4*E;for(let O=0;O<N.count;O++){let K=O*A;p===!0&&(s.fromBufferAttribute(N,O),v[D+K+0]=s.x,v[D+K+1]=s.y,v[D+K+2]=s.z,v[D+K+3]=0),f===!0&&(s.fromBufferAttribute(k,O),v[D+K+4]=s.x,v[D+K+5]=s.y,v[D+K+6]=s.z,v[D+K+7]=0),x===!0&&(s.fromBufferAttribute(V,O),v[D+K+8]=s.x,v[D+K+9]=s.y,v[D+K+10]=s.z,v[D+K+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ne(S,T)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ay={[Ua]:"LINEAR_TONE_MAPPING",[Ia]:"REINHARD_TONE_MAPPING",[Ea]:"CINEON_TONE_MAPPING",[Ps]:"ACES_FILMIC_TONE_MAPPING",[Na]:"AGX_TONE_MAPPING",[Da]:"NEUTRAL_TONE_MAPPING",[Ca]:"CUSTOM_TONE_MAPPING"};function yy(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pt;c.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pt([0,2,0,0,2,0],2));let h=new mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $e(c,h),d=new si(-1,1,1,-1,0,1),p=null,f=null,x=!1,m,g=null,R=[],b=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let v=0;v<R.length;v++){let w=R[v];w.setSize&&w.setSize(S,T)}},this.setEffects=function(S){R=S,b=R.length>0&&R[0].isRenderPass===!0;let T=a.width,v=a.height;R.length>0&&o===null&&(o=new Vt(T,v,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(T,v,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<R.length;w++){let A=R[w];A.setSize&&A.setSize(T,v)}},this.begin=function(S,T){if(x||S.toneMapping===zn&&R.length===0)return!1;if(g=T,T!==null){let v=T.width,w=T.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return b===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=zn,!0},this.hasRenderPass=function(){return b},this.end=function(S,T){S.toneMapping=m,x=!0;let v=a,w=o;for(let A=0;A<R.length;A++){let P=R[A];P.enabled!==!1&&(P.render(S,w,v,T),P.needsSwap!==!1&&(v=w,w=w===o?l:o))}if(p!==S.outputColorSpace||f!==S.toneMapping){p=S.outputColorSpace,f=S.toneMapping,h.defines={},_e.getTransfer(p)===lt&&(h.defines.SRGB_TRANSFER="");let A=Ay[f];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(g),S.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ff=new Et,Jh=new Yi(1,1),Of=new Jr,Lf=new zo,kf=new oa,gf=[],xf=[],Af=new Float32Array(16),yf=new Float32Array(9),Sf=new Float32Array(4);function Ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Sf.set(n),i.uniformMatrix2fv(this.addr,!1,Sf),zt(t,n)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),zt(t,n)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),zt(t,n)}}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=t.isReversedDepthBuffer()?Jl:Ql,r=Jh):r=Ff,t.setTexture2D(e||r,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function Ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kf,s)}function ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Of,s)}function Vy(i){switch(i){case 5126:return Sy;case 35664:return My;case 35665:return Ty;case 35666:return vy;case 35674:return Ry;case 35675:return by;case 35676:return Py;case 5124:case 35670:return wy;case 35667:case 35671:return Uy;case 35668:case 35672:return Iy;case 35669:case 35673:return Ey;case 5125:return Cy;case 36294:return Ny;case 36295:return Dy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return ky}}function qy(i,e){i.uniform1fv(this.addr,e)}function By(i,e){let t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function zy(i,e){let t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Gy(i,e){let t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function jy(i,e){let t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ky(i,e){let t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wy(i,e){let t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yy(i,e){i.uniform1iv(this.addr,e)}function _y(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function Qy(i,e){i.uniform4iv(this.addr,e)}function Jy(i,e){i.uniform1uiv(this.addr,e)}function Xy(i,e){i.uniform2uiv(this.addr,e)}function $y(i,e){i.uniform3uiv(this.addr,e)}function eS(i,e){i.uniform4uiv(this.addr,e)}function tS(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jh:a=Ff;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function nS(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lf,r[a])}function iS(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kf,r[a])}function sS(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Of,r[a])}function rS(i){switch(i){case 5126:return qy;case 35664:return By;case 35665:return zy;case 35666:return Gy;case 35674:return jy;case 35675:return Ky;case 35676:return Wy;case 5124:case 35670:return Yy;case 35667:case 35671:return _y;case 35668:case 35672:return Zy;case 35669:case 35673:return Qy;case 5125:return Jy;case 36294:return Xy;case 36295:return $y;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}var Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},$h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rS(t.type)}},eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function Mf(i,e){i.seq.push(e),i.map[e.id]=e}function aS(i,e,t){let n=i.name,s=n.length;for(Zh.lastIndex=0;;){let r=Zh.exec(n),a=Zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mf(t,c===void 0?new Xh(o,i,e):new $h(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new eu(o),Mf(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);aS(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oS=37297,lS=0;function cS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vf=new Ke;function hS(i){_e._getMatrix(vf,_e.workingColorSpace,i);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(_e.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cS(i.getShaderSource(e),o)}else return r}function uS(i,e){let t=hS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dS={[Ua]:"Linear",[Ia]:"Reinhard",[Ea]:"Cineon",[Ps]:"ACESFilmic",[Na]:"AgX",[Da]:"Neutral",[Ca]:"Custom"};function pS(i,e){let t=dS[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $l=new I;function fS(){_e.getLuminanceCoefficients($l);let i=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function gS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ka(i){return i!==""}function bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(AS,SS)}var yS=new Map;function SS(i,e){let t=Je[e];if(t===void 0){let n=yS.get(e);if(n!==void 0)t=Je[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tu(t)}var MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(MS,TS)}function TS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var vS={[Rs]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function RS(i){return vS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bS={[$i]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function PS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wS={[ws]:"ENVMAP_MODE_REFRACTION"};function US(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IS={[hl]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function ES(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":IS[i.combine]||"ENVMAP_BLENDING_NONE"}function CS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=RS(t),c=PS(t),h=US(t),u=ES(t),d=CS(t),p=mS(t),f=gS(r),x=s.createProgram(),m,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ka).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ka).join(`
`),g.length>0&&(g+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),g=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Je.tonemapping_pars_fragment:"",t.toneMapping!==zn?pS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),fS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),a=tu(a),a=bf(a,t),a=Pf(a,t),o=tu(o),o=bf(o,t),o=Pf(o,t),a=wf(a),o=wf(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=R+m+a,S=R+g+o,T=Tf(s,s.VERTEX_SHADER,b),v=Tf(s,s.FRAGMENT_SHADER,S);s.attachShader(x,T),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(N){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(v)||"",O=k.trim(),K=V.trim(),j=D.trim(),se=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,v);else{let X=Rf(s,T,"vertex"),te=Rf(s,v,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+X+`
`+te)}else O!==""?Ce("WebGLProgram: Program Info Log:",O):(K===""||j==="")&&(W=!1);W&&(N.diagnostics={runnable:se,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:j,prefix:g}})}s.deleteShader(T),s.deleteShader(v),A=new Pr(s,x),P=xS(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let P;this.getAttributes=function(){return P===void 0&&w(this),P};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,oS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=v,this}var DS=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}};function HS(i){return i===ns||i===Va||i===qa}function FS(i,e,t,n,s,r){let a=new Xr,o=new nu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,P,E,N,k,V){let D=N.fog,O=k.geometry,K=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?N.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,se=e.get(A.envMap||K,j),W=se&&se.mapping===Ha?se.image.height:null,X=p[A.type];A.precision!==null&&(d=n.getMaxPrecision(A.precision),d!==A.precision&&Ce("WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ne=te!==void 0?te.length:0,be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let ct,tt,rt,Z;if(X){let Mt=li[X];ct=Mt.vertexShader,tt=Mt.fragmentShader}else{ct=A.vertexShader,tt=A.fragmentShader;let Mt=o.getVertexShaderStage(A),ut=o.getFragmentShaderStage(A);o.update(A,Mt,ut),rt=Mt.id,Z=ut.id}let $=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),qe=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,ze=!!A.map,ft=!!A.matcap,ee=!!se,re=!!A.aoMap,ae=!!A.lightMap,oe=!!A.bumpMap&&A.wireframe===!1,he=!!A.normalMap,ke=!!A.displacementMap,Oe=!!A.emissiveMap,Ge=!!A.metalnessMap,We=!!A.roughnessMap,C=A.anisotropy>0,ht=A.clearcoat>0,nt=A.dispersion>0,U=A.retroreflectivity>0,y=A.iridescence>0,L=A.sheen>0,z=A.transmission>0,Y=C&&!!A.anisotropyMap,le=ht&&!!A.clearcoatMap,ce=ht&&!!A.clearcoatNormalMap,_=ht&&!!A.clearcoatRoughnessMap,J=y&&!!A.iridescenceMap,ue=y&&!!A.iridescenceThicknessMap,De=L&&!!A.sheenColorMap,me=L&&!!A.sheenRoughnessMap,de=!!A.specularMap,He=!!A.specularColorMap,Ve=!!A.specularIntensityMap,Ye=z&&!!A.transmissionMap,F=z&&!!A.thicknessMap,pe=!!A.gradientMap,Q=!!A.alphaMap,fe=A.alphaTest>0,Se=!!A.alphaHash,ie=!!A.extensions,Fe=zn;A.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Ie={shaderID:X,shaderType:A.type,shaderName:A.name,vertexShader:ct,fragmentShader:tt,defines:A.defines,customVertexShaderID:rt,customFragmentShaderID:Z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:qe,instancingColor:qe&&k.instanceColor!==null,instancingMorph:qe&&k.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ze,matcap:ft,envMap:ee,envMapMode:ee&&se.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:ae,bumpMap:oe,normalMap:he,displacementMap:ke,emissiveMap:Oe,normalMapObjectSpace:he&&A.normalMapType===Wp,normalMapTangentSpace:he&&A.normalMapType===za,packedNormalMap:he&&A.normalMapType===za&&HS(A.normalMap.format),metalnessMap:Ge,roughnessMap:We,anisotropy:C,anisotropyMap:Y,clearcoat:ht,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:_,dispersion:nt,retroreflection:U,iridescence:y,iridescenceMap:J,iridescenceThicknessMap:ue,sheen:L,sheenColorMap:De,sheenRoughnessMap:me,specularMap:de,specularColorMap:He,specularIntensityMap:Ve,transmission:z,transmissionMap:Ye,thicknessMap:F,gradientMap:pe,opaque:A.transparent===!1&&A.blending===yr&&A.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:Se,combine:A.combine,mapUv:ze&&f(A.map.channel),aoMapUv:re&&f(A.aoMap.channel),lightMapUv:ae&&f(A.lightMap.channel),bumpMapUv:oe&&f(A.bumpMap.channel),normalMapUv:he&&f(A.normalMap.channel),displacementMapUv:ke&&f(A.displacementMap.channel),emissiveMapUv:Oe&&f(A.emissiveMap.channel),metalnessMapUv:Ge&&f(A.metalnessMap.channel),roughnessMapUv:We&&f(A.roughnessMap.channel),anisotropyMapUv:Y&&f(A.anisotropyMap.channel),clearcoatMapUv:le&&f(A.clearcoatMap.channel),clearcoatNormalMapUv:ce&&f(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_&&f(A.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&f(A.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(A.sheenColorMap.channel),sheenRoughnessMapUv:me&&f(A.sheenRoughnessMap.channel),specularMapUv:de&&f(A.specularMap.channel),specularColorMapUv:He&&f(A.specularColorMap.channel),specularIntensityMapUv:Ve&&f(A.specularIntensityMap.channel),transmissionMapUv:Ye&&f(A.transmissionMap.channel),thicknessMapUv:F&&f(A.thicknessMap.channel),alphaMapUv:Q&&f(A.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||C),vertexNormals:!!O.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(ze||Q),fog:!!D,useFog:A.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||O.attributes.normal===void 0&&he===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ze&&A.map.isVideoTexture===!0&&_e.getTransfer(A.map.colorSpace)===lt,decodeVideoTextureEmissive:Oe&&A.emissiveMap.isVideoTexture===!0&&_e.getTransfer(A.emissiveMap.colorSpace)===lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===_t,flipSided:A.side===Yt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ie&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&A.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(A){let P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(let E in A.defines)P.push(E),P.push(A.defines[E]);return A.isRawShaderMaterial===!1&&(g(P,A),R(P,A),P.push(i.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function g(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numSunLights),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numSunLightShadows),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function R(A,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function b(A){let P=p[A.type],E;if(P){let N=li[P];E=Ci.clone(N.uniforms)}else E=A.uniforms;return E}function S(A,P){let E=h.get(P);return E!==void 0?++E.usedTimes:(E=new NS(i,P,A,s),c.push(E),h.set(P,E)),E}function T(A){if(--A.usedTimes===0){let P=c.indexOf(A);c[P]=c[c.length-1],c.pop(),h.delete(A.cacheKey),A.destroy()}}function v(A){o.remove(A)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:v,programs:c,dispose:w}}function OS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function LS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function If(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,f,x,m,g){let R=i[e];return R===void 0?(R={id:d.id,object:d,geometry:p,material:f,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=R):(R.id=d.id,R.object=d,R.geometry=p,R.material=f,R.materialVariant=a(d),R.groupOrder=x,R.renderOrder=d.renderOrder,R.z=m,R.group=g),e++,R}function l(d,p,f,x,m,g,R){R.reversedDepth===!0&&(m=-m);let b=o(d,p,f,x,m,g);f.transmission>0?n.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(d,p,f,x,m,g){let R=o(d,p,f,x,m,g);f.transmission>0?n.unshift(R):f.transparent===!0?s.unshift(R):t.unshift(R)}function h(d,p){t.length>1&&t.sort(d||LS),n.length>1&&n.sort(p||If),s.length>1&&s.sort(p||If)}function u(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function kS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ef,i.set(n,[a])):s>=r.length?(a=new Ef,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function qS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var BS=0;function zS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GS(i){let e=new VS,t=qS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new je,a=new je;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,R=0,b=0,S=0,T=0,v=0,w=0,A=0,P=0,E=0;c.sort(zS);for(let k=0,V=c.length;k<V;k++){let D=c[k],O=D.color,K=D.intensity,j=D.distance,se=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ns?se=D.shadow.map.texture:se=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*K,u+=O.g*K,d+=O.b*K;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],K);E++}else if(D.isSunLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let X=D.shadow,te=t.get(D);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[f]=te,n.sunShadowMap[f]=se;let Ne=X.getViewportCount();for(let be=0;be<Ne;be++)n.sunShadowMatrix[x+be]=X.getMatrix(be),n.sunShadowCascade[x+be]=X._cascadeData[be];x+=Ne,f++}n.sun[p]=W,p++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let X=D.shadow,te=t.get(D);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(K),W.distance=j,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[R]=W;let X=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,X.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[R]=X.matrix,D.castShadow){let te=t.get(D);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,n.spotShadow[R]=te,n.spotShadowMap[R]=se,w++}R++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(O).multiplyScalar(K),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=W,b++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let X=D.shadow,te=t.get(D);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,te.shadowCameraNear=X.camera.near,te.shadowCameraFar=X.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(K),W.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[S]=W,S++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==R||N.rectAreaLength!==b||N.hemiLength!==S||N.numSunShadows!==f||N.numDirectionalShadows!==T||N.numPointShadows!==v||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=m,n.spot.length=R,n.rectArea.length=b,n.point.length=g,n.hemi.length=S,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,N.sunLength=p,N.directionalLength=m,N.pointLength=g,N.spotLength=R,N.rectAreaLength=b,N.hemiLength=S,N.numSunShadows=f,N.numDirectionalShadows=T,N.numPointShadows=v,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=E,n.version=BS++)}function l(c,h){let u=0,d=0,p=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let R=0,b=c.length;R<b;R++){let S=c[R];if(S.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(S.isSpotLight){let T=n.spot[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Cf(i){let e=new GS(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cf(i),e.set(s,[o])):r>=a.length?(o=new Cf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`,YS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],_S=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Nf=new je,ja=new I,Qh=new I;function ZS(i,e,t){let n=new cr,s=new ne,r=new ne,a=new gt,o=new Xo,l=new $o,c={},h=t.maxTextureSize,u={[ai]:Yt,[Yt]:ai,[_t]:_t},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:KS,fragmentShader:WS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pt;f.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $e(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let g=this.type;this.render=function(v,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Tp&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let P=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(In),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=g!==this.type;V&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=v.length;D<O;D++){let K=v[D],j=K.shadow;if(j===void 0){Ce("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let se=j.getFrameExtents();s.multiply(se),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,j.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||V===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ar){if(K.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Vt(s.x,s.y,{format:ns,type:Zt,minFilter:It,magFilter:It,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new Yi(s.x,s.y,vn),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=Xn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut}else K.isPointLight?(j.map=new ec(s.x),j.map.depthTexture=new Ko(s.x,Gn)):(j.map=new Vt(s.x,s.y),j.map.depthTexture=new Yi(s.x,s.y,Gn)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=Xn,this.type===Rs?(j.map.depthTexture.compareFunction=W?Jl:Ql,j.map.depthTexture.minFilter=It,j.map.depthTexture.magFilter=It):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let X=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();K.isPointLight!==!0&&j.updateMatrices(K,A);for(let te=0;te<X;te++){let Ne=j.getCamera(te);if(K.isPointLight){let be=j.camera,ct=j.matrix,tt=K.distance||be.far;tt!==be.far&&(be.far=tt,be.updateProjectionMatrix()),ja.setFromMatrixPosition(K.matrixWorld),be.position.copy(ja),Qh.copy(be.position),Qh.add(YS[te]),be.up.copy(_S[te]),be.lookAt(Qh),be.updateMatrixWorld(),ct.makeTranslation(-ja.x,-ja.y,-ja.z),Nf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Nf,be.coordinateSystem,be.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,te),i.clear();else{te===0&&(i.setRenderTarget(j.map),i.clear());let be=j.getViewport(te);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),k.viewport(a)}n=j.getFrustum(te),S(w,A,Ne,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ar&&R(j,A),j.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,E,N)};function R(v,w){let A=e.update(x);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new Vt(s.x,s.y,{format:ns,type:Zt}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,x,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,A,p,x,null)}function b(v,w,A,P){let E=null,N=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)E=N;else if(E=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let k=E.uuid,V=w.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let O=D[V];O===void 0&&(O=E.clone(),D[V]=O,w.addEventListener("dispose",T)),E=O}if(E.visible=w.visible,E.wireframe=w.wireframe,P===Ar?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let k=i.properties.get(E);k.light=A}return E}function S(v,w,A,P,E){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===Ar)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);let V=e.update(v),D=v.material;if(Array.isArray(D)){let O=V.groups;for(let K=0,j=O.length;K<j;K++){let se=O[K],W=D[se.materialIndex];if(W&&W.visible){let X=b(v,W,P,E);v.onBeforeShadow(i,v,w,A,V,X,se),i.renderBufferDirect(A,null,V,X,v,se),v.onAfterShadow(i,v,w,A,V,X,se)}}}else if(D.visible){let O=b(v,D,P,E);v.onBeforeShadow(i,v,w,A,V,O,null),i.renderBufferDirect(A,null,V,O,v,null),v.onAfterShadow(i,v,w,A,V,O,null)}}let k=v.children;for(let V=0,D=k.length;V<D;V++)S(k[V],w,A,P,E)}function T(v){v.target.removeEventListener("dispose",T);for(let A in c){let P=c[A],E=v.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function QS(i,e){function t(){let F=!1,pe=new gt,Q=null,fe=new gt(0,0,0,0);return{setMask:function(Se){Q!==Se&&!F&&(i.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){F=Se},setClear:function(Se,ie,Fe,Ie,Mt){Mt===!0&&(Se*=Ie,ie*=Ie,Fe*=Ie),pe.set(Se,ie,Fe,Ie),fe.equals(pe)===!1&&(i.clearColor(Se,ie,Fe,Ie),fe.copy(pe))},reset:function(){F=!1,Q=null,fe.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,Q=null,fe=null,Se=null;return{setReversed:function(ie){if(pe!==ie){let Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;let Ie=Se;Se=null,this.setClear(Ie)}},getReversed:function(){return pe},setTest:function(ie){ie?$(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!F&&(i.depthMask(ie),Q=ie)},setFunc:function(ie){if(pe&&(ie=sf[ie]),fe!==ie){switch(ie){case Ho:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ie}},setLocked:function(ie){F=ie},setClear:function(ie){Se!==ie&&(Se=ie,pe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){F=!1,Q=null,fe=null,Se=null,pe=!1}}}function s(){let F=!1,pe=null,Q=null,fe=null,Se=null,ie=null,Fe=null,Ie=null,Mt=null;return{setTest:function(ut){F||(ut?$(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ut){pe!==ut&&!F&&(i.stencilMask(ut),pe=ut)},setFunc:function(ut,Fn,Yn){(Q!==ut||fe!==Fn||Se!==Yn)&&(i.stencilFunc(ut,Fn,Yn),Q=ut,fe=Fn,Se=Yn)},setOp:function(ut,Fn,Yn){(ie!==ut||Fe!==Fn||Ie!==Yn)&&(i.stencilOp(ut,Fn,Yn),ie=ut,Fe=Fn,Ie=Yn)},setLocked:function(ut){F=ut},setClear:function(ut){Mt!==ut&&(i.clearStencil(ut),Mt=ut)},reset:function(){F=!1,pe=null,Q=null,fe=null,Se=null,ie=null,Fe=null,Ie=null,Mt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],x=null,m=!1,g=null,R=null,b=null,S=null,T=null,v=null,w=null,A=new Re(0,0,0),P=0,E=!1,N=null,k=null,V=null,D=null,O=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,se=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=se>=2);let X=null,te={},Ne=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ct=new gt().fromArray(Ne),tt=new gt().fromArray(be);function rt(F,pe,Q,fe){let Se=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Q;Fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ie}let Z={};Z[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc($s),oe(!1),he(yh),$(i.CULL_FACE),re(In);function $(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function xe(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function qe(F,pe){return d[F]!==pe?(i.bindFramebuffer(F,pe),d[F]=pe,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(F,pe){let Q=f,fe=!1;if(F){Q=p.get(pe),Q===void 0&&(Q=[],p.set(pe,Q));let Se=F.textures;if(Q.length!==Se.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Fe=Se.length;ie<Fe;ie++)Q[ie]=i.COLOR_ATTACHMENT0+ie;Q.length=Se.length,fe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Q)}function ze(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ft={[bs]:i.FUNC_ADD,[Rp]:i.FUNC_SUBTRACT,[bp]:i.FUNC_REVERSE_SUBTRACT};ft[Pp]=i.MIN,ft[wp]=i.MAX;let ee={[Up]:i.ZERO,[Ip]:i.ONE,[Ep]:i.SRC_COLOR,[Th]:i.SRC_ALPHA,[Op]:i.SRC_ALPHA_SATURATE,[Hp]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Cp]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[Fp]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[qp]:i.ONE_MINUS_CONSTANT_ALPHA};function re(F,pe,Q,fe,Se,ie,Fe,Ie,Mt,ut){if(F===In){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),F!==vp){if(F!==g||ut!==E){if((R!==bs||T!==bs)&&(i.blendEquation(i.FUNC_ADD),R=bs,T=bs),ut)switch(F){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Be("WebGLState: Invalid blending: ",F);break}else switch(F){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",F);break}b=null,S=null,v=null,w=null,A.set(0,0,0),P=0,g=F,E=ut}return}Se=Se||pe,ie=ie||Q,Fe=Fe||fe,(pe!==R||Se!==T)&&(i.blendEquationSeparate(ft[pe],ft[Se]),R=pe,T=Se),(Q!==b||fe!==S||ie!==v||Fe!==w)&&(i.blendFuncSeparate(ee[Q],ee[fe],ee[ie],ee[Fe]),b=Q,S=fe,v=ie,w=Fe),(Ie.equals(A)===!1||Mt!==P)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Mt),A.copy(Ie),P=Mt),g=F,E=!1}function ae(F,pe){F.side===_t?xe(i.CULL_FACE):$(i.CULL_FACE);let Q=F.side===Yt;pe&&(Q=!Q),oe(Q),F.blending===yr&&F.transparent===!1?re(In):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let fe=F.stencilWrite;o.setTest(fe),fe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){N!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),N=F)}function he(F){F!==Sp?($(i.CULL_FACE),F!==k&&(F===yh?i.cullFace(i.BACK):F===Mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),k=F}function ke(F){F!==V&&(j&&i.lineWidth(F),V=F)}function Oe(F,pe,Q){F?($(i.POLYGON_OFFSET_FILL),(D!==pe||O!==Q)&&(D=pe,O=Q,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,Q))):xe(i.POLYGON_OFFSET_FILL)}function Ge(F){F?$(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function We(F){F===void 0&&(F=i.TEXTURE0+K-1),X!==F&&(i.activeTexture(F),X=F)}function C(F,pe,Q){Q===void 0&&(X===null?Q=i.TEXTURE0+K-1:Q=X);let fe=te[Q];fe===void 0&&(fe={type:void 0,texture:void 0},te[Q]=fe),(fe.type!==F||fe.texture!==pe)&&(X!==Q&&(i.activeTexture(Q),X=Q),i.bindTexture(F,pe||Z[F]),fe.type=F,fe.texture=pe)}function ht(){let F=te[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function L(){try{i.texSubImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function le(){try{i.texStorage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function ce(){try{i.texStorage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function _(){try{i.texImage2D(...arguments)}catch(F){Be("WebGLState:",F)}}function J(){try{i.texImage3D(...arguments)}catch(F){Be("WebGLState:",F)}}function ue(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function De(F,pe){u[F]!==pe&&(i.pixelStorei(F,pe),u[F]=pe)}function me(F){ct.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ct.copy(F))}function de(F){tt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function He(F,pe){let Q=c.get(pe);Q===void 0&&(Q=new WeakMap,c.set(pe,Q));let fe=Q.get(F);fe===void 0&&(fe=i.getUniformBlockIndex(pe,F.name),Q.set(F,fe))}function Ve(F,pe){let fe=c.get(pe).get(F);l.get(pe)!==fe&&(i.uniformBlockBinding(pe,fe,F.__bindingPointIndex),l.set(pe,fe))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,te={},d={},p=new WeakMap,f=[],x=null,m=!1,g=null,R=null,b=null,S=null,T=null,v=null,w=null,A=new Re(0,0,0),P=0,E=!1,N=null,k=null,V=null,D=null,O=null,ct.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:xe,bindFramebuffer:qe,drawBuffers:Me,useProgram:ze,setBlending:re,setMaterial:ae,setFlipSided:oe,setCullFace:he,setLineWidth:ke,setPolygonOffset:Oe,setScissorTest:Ge,activeTexture:We,bindTexture:C,unbindTexture:ht,compressedTexImage2D:nt,compressedTexImage3D:U,texImage2D:_,texImage3D:J,pixelStorei:De,getParameter:ue,updateUBOMapping:He,uniformBlockBinding:Ve,texStorage2D:le,texStorage3D:ce,texSubImage2D:y,texSubImage3D:L,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:me,viewport:de,reset:Ye}}function JS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u=new Set,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,y){return f?new OffscreenCanvas(U,y):tr("canvas")}function m(U,y,L){let z=1,Y=nt(U);if((Y.width>L||Y.height>L)&&(z=L/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let le=Math.floor(z*Y.width),ce=Math.floor(z*Y.height);d===void 0&&(d=x(le,ce));let _=y?x(le,ce):d;return _.width=le,_.height=ce,_.getContext("2d").drawImage(U,0,0,le,ce),Ce("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),_}else return"data"in U&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),U;return U}function g(U){return U.generateMipmaps}function R(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,y,L,z,Y,le=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce;z&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=y;if(y===i.RED&&(L===i.FLOAT&&(_=i.R32F),L===i.HALF_FLOAT&&(_=i.R16F),L===i.UNSIGNED_BYTE&&(_=i.R8),L===i.UNSIGNED_SHORT&&ce&&(_=ce.R16_EXT),L===i.SHORT&&ce&&(_=ce.R16_SNORM_EXT)),y===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(_=i.R8UI),L===i.UNSIGNED_SHORT&&(_=i.R16UI),L===i.UNSIGNED_INT&&(_=i.R32UI),L===i.BYTE&&(_=i.R8I),L===i.SHORT&&(_=i.R16I),L===i.INT&&(_=i.R32I)),y===i.RG&&(L===i.FLOAT&&(_=i.RG32F),L===i.HALF_FLOAT&&(_=i.RG16F),L===i.UNSIGNED_BYTE&&(_=i.RG8),L===i.UNSIGNED_SHORT&&ce&&(_=ce.RG16_EXT),L===i.SHORT&&ce&&(_=ce.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(_=i.RG8UI),L===i.UNSIGNED_SHORT&&(_=i.RG16UI),L===i.UNSIGNED_INT&&(_=i.RG32UI),L===i.BYTE&&(_=i.RG8I),L===i.SHORT&&(_=i.RG16I),L===i.INT&&(_=i.RG32I)),y===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(_=i.RGB8UI),L===i.UNSIGNED_SHORT&&(_=i.RGB16UI),L===i.UNSIGNED_INT&&(_=i.RGB32UI),L===i.BYTE&&(_=i.RGB8I),L===i.SHORT&&(_=i.RGB16I),L===i.INT&&(_=i.RGB32I)),y===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),L===i.UNSIGNED_INT&&(_=i.RGBA32UI),L===i.BYTE&&(_=i.RGBA8I),L===i.SHORT&&(_=i.RGBA16I),L===i.INT&&(_=i.RGBA32I)),y===i.RGB&&(L===i.UNSIGNED_SHORT&&ce&&(_=ce.RGB16_EXT),L===i.SHORT&&ce&&(_=ce.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),y===i.RGBA){let J=le?Zr:_e.getTransfer(Y);L===i.FLOAT&&(_=i.RGBA32F),L===i.HALF_FLOAT&&(_=i.RGBA16F),L===i.UNSIGNED_BYTE&&(_=J===lt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ce&&(_=ce.RGBA16_EXT),L===i.SHORT&&ce&&(_=ce.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_}function T(U,y){let L;return U?y===null||y===Gn||y===Tr?L=i.DEPTH24_STENCIL8:y===vn?L=i.DEPTH32F_STENCIL8:y===Mr&&(L=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===Tr?L=i.DEPTH_COMPONENT24:y===vn?L=i.DEPTH_COMPONENT32F:y===Mr&&(L=i.DEPTH_COMPONENT16),L}function v(U,y){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ut&&U.minFilter!==It?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function w(U){let y=U.target;y.removeEventListener("dispose",w),P(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function A(U){let y=U.target;y.removeEventListener("dispose",A),N(y)}function P(U){let y=n.get(U);if(y.__webglInit===void 0)return;let L=U.source,z=p.get(L);if(z){let Y=z[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(U),Object.keys(z).length===0&&p.delete(L)}n.remove(U)}function E(U){let y=n.get(U);i.deleteTexture(y.__webglTexture);let L=U.source,z=p.get(L);delete z[y.__cacheKey],a.memory.textures--}function N(U){let y=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let Y=0;Y<y.__webglFramebuffer[z].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[z][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)i.deleteFramebuffer(y.__webglFramebuffer[z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=U.textures;for(let z=0,Y=L.length;z<Y;z++){let le=n.get(L[z]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(L[z])}n.remove(U)}let k=0;function V(){k=0}function D(){return k}function O(U){k=U}function K(){let U=k;return U>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,U}function j(U){let y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function se(U,y){let L=n.get(U);if(U.isVideoTexture&&C(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&L.__version!==U.version){let z=U.image;if(z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(L,U,y);return}}else U.isExternalTexture&&(L.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+y)}function W(U,y){let L=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&L.__version!==U.version){xe(L,U,y);return}else U.isExternalTexture&&(L.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+y)}function X(U,y){let L=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&L.__version!==U.version){xe(L,U,y);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+y)}function te(U,y){let L=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&L.__version!==U.version){qe(L,U,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+y)}let Ne={[yn]:i.REPEAT,[$t]:i.CLAMP_TO_EDGE,[Jn]:i.MIRRORED_REPEAT},be={[Ut]:i.NEAREST,[Sr]:i.NEAREST_MIPMAP_NEAREST,[Ii]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[es]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ct={[_p]:i.NEVER,[$p]:i.ALWAYS,[Zp]:i.LESS,[Ql]:i.LEQUAL,[Qp]:i.EQUAL,[Jl]:i.GEQUAL,[Jp]:i.GREATER,[Xp]:i.NOTEQUAL};function tt(U,y){if(y.type===vn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===It||y.magFilter===es||y.magFilter===Ii||y.magFilter===Tn||y.minFilter===It||y.minFilter===es||y.minFilter===Ii||y.minFilter===Tn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ne[y.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ne[y.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ne[y.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,be[y.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Ii&&y.minFilter!==Tn||y.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function rt(U,y){let L=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",w));let z=y.source,Y=p.get(z);Y===void 0&&(Y={},p.set(z,Y));let le=j(y);if(le!==U.__cacheKey){Y[le]===void 0&&(Y[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Y[le].usedTimes++;let ce=Y[U.__cacheKey];ce!==void 0&&(Y[U.__cacheKey].usedTimes--,ce.usedTimes===0&&E(y)),U.__cacheKey=le,U.__webglTexture=Y[le].texture}return L}function Z(U,y,L){return Math.floor(Math.floor(U/L)/y)}function $(U,y,L,z){let le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,L,z,y.data);else{le.sort((De,me)=>De.start-me.start);let ce=0;for(let De=1;De<le.length;De++){let me=le[ce],de=le[De],He=me.start+me.count,Ve=Z(de.start,y.width,4),Ye=Z(me.start,y.width,4);de.start<=He+1&&Ve===Ye&&Z(de.start+de.count-1,y.width,4)===Ve?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;let _=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let De=0,me=le.length;De<me;De++){let de=le[De],He=Math.floor(de.start/4),Ve=Math.ceil(de.count/4),Ye=He%y.width,F=Math.floor(He/y.width),pe=Ve,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,pe,Q,L,z,y.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,_),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function xe(U,y,L){let z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=i.TEXTURE_3D);let Y=rt(U,y),le=y.source;t.bindTexture(z,U.__webglTexture,i.TEXTURE0+L);let ce=n.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=_e.getPrimaries(_e.workingColorSpace),fe=y.colorSpace===jn?null:_e.getPrimaries(y.colorSpace),Se=y.colorSpace===jn||Q===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,s.maxTextureSize);J=ht(y,J);let ue=r.convert(y.format,y.colorSpace),De=r.convert(y.type),me=S(y.internalFormat,ue,De,y.normalized,y.colorSpace,y.isVideoTexture);tt(z,y);let de,He=y.mipmaps,Ve=y.isVideoTexture!==!0,Ye=ce.__version===void 0||Y===!0,F=le.dataReady,pe=v(y,J);if(y.isDepthTexture)me=T(y.format===ts,y.type),Ye&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,me,J.width,J.height,0,ue,De,null));else if(y.isDataTexture)if(He.length>0){Ve&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,me,He[0].width,He[0].height);for(let Q=0,fe=He.length;Q<fe;Q++)de=He[Q],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,De,de.data):t.texImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,ue,De,de.data);y.generateMipmaps=!1}else Ve?(Ye&&t.texStorage2D(i.TEXTURE_2D,pe,me,J.width,J.height),F&&$(y,J,ue,De)):t.texImage2D(i.TEXTURE_2D,0,me,J.width,J.height,0,ue,De,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,me,He[0].width,He[0].height,J.depth);for(let Q=0,fe=He.length;Q<fe;Q++)if(de=He[Q],y.format!==ln)if(ue!==null)if(Ve){if(F)if(y.layerUpdates.size>0){let Se=Vh(de.width,de.height,y.format,y.type);for(let ie of y.layerUpdates){let Fe=de.data.subarray(ie*Se/de.data.BYTES_PER_ELEMENT,(ie+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ie,de.width,de.height,1,ue,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,J.depth,0,de.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,ue,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,J.depth,0,ue,De,de.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ve&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,me,He[0].width,He[0].height);for(let Q=0,fe=He.length;Q<fe;Q++)de=He[Q],y.format!==ln?ue!==null?Ve?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,de.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ue,De,de.data):t.texImage2D(i.TEXTURE_2D,Q,me,de.width,de.height,0,ue,De,de.data)}else if(y.isDataArrayTexture)if(Ve){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,me,J.width,J.height,J.depth),F)if(y.layerUpdates.size>0){let Q=Vh(J.width,J.height,y.format,y.type);for(let fe of y.layerUpdates){let Se=J.data.subarray(fe*Q/J.data.BYTES_PER_ELEMENT,(fe+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ue,De,Se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,De,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,ue,De,J.data);else if(y.isData3DTexture)Ve?(Ye&&t.texStorage3D(i.TEXTURE_3D,pe,me,J.width,J.height,J.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,De,J.data)):t.texImage3D(i.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,ue,De,J.data);else if(y.isFramebufferTexture){if(Ye)if(Ve)t.texStorage2D(i.TEXTURE_2D,pe,me,J.width,J.height);else{let Q=J.width,fe=J.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,me,Q,fe,0,ue,De,null),Q>>=1,fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),u.add(y),Q.onpaint=fe=>{let Se=fe.changedElements;for(let ie of u)Se.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Se=i.RGBA,ie=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ie,Fe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ve&&Ye){let Q=nt(He[0]);t.texStorage2D(i.TEXTURE_2D,pe,me,Q.width,Q.height)}for(let Q=0,fe=He.length;Q<fe;Q++)de=He[Q],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,De,de):t.texImage2D(i.TEXTURE_2D,Q,me,ue,De,de);y.generateMipmaps=!1}else if(Ve){if(Ye){let Q=nt(J);t.texStorage2D(i.TEXTURE_2D,pe,me,Q.width,Q.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,De,J)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,De,J);g(y)&&R(z),ce.__version=le.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function qe(U,y,L){if(y.image.length!==6)return;let z=rt(U,y),Y=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+L);let le=n.get(Y);if(Y.version!==le.__version||z===!0){t.activeTexture(i.TEXTURE0+L);let ce=_e.getPrimaries(_e.workingColorSpace),_=y.colorSpace===jn?null:_e.getPrimaries(y.colorSpace),J=y.colorSpace===jn||ce===_?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ue&&!De?me[ie]=m(y.image[ie],!0,s.maxCubemapSize):me[ie]=De?y.image[ie].image:y.image[ie],me[ie]=ht(y,me[ie]);let de=me[0],He=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type),Ye=S(y.internalFormat,He,Ve,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,pe=le.__version===void 0||z===!0,Q=Y.dataReady,fe=v(y,de);tt(i.TEXTURE_CUBE_MAP,y);let Se;if(ue){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,de.width,de.height);for(let ie=0;ie<6;ie++){Se=me[ie].mipmaps;for(let Fe=0;Fe<Se.length;Fe++){let Ie=Se[Fe];y.format!==ln?He!==null?F?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ie.width,Ie.height,He,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ye,Ie.width,Ie.height,0,Ie.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ie.width,Ie.height,He,Ve,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ye,Ie.width,Ie.height,0,He,Ve,Ie.data)}}}else{if(Se=y.mipmaps,F&&pe){Se.length>0&&fe++;let ie=nt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,He,Ve,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,me[ie].width,me[ie].height,0,He,Ve,me[ie].data);for(let Fe=0;Fe<Se.length;Fe++){let Mt=Se[Fe].image[ie].image;F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Mt.width,Mt.height,He,Ve,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ye,Mt.width,Mt.height,0,He,Ve,Mt.data)}}else{F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,He,Ve,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,He,Ve,me[ie]);for(let Fe=0;Fe<Se.length;Fe++){let Ie=Se[Fe];F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,He,Ve,Ie.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ye,He,Ve,Ie.image[ie])}}}g(y)&&R(i.TEXTURE_CUBE_MAP),le.__version=Y.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Me(U,y,L,z,Y,le){let ce=r.convert(L.format,L.colorSpace),_=r.convert(L.type),J=S(L.internalFormat,ce,_,L.normalized,L.colorSpace),ue=n.get(y),De=n.get(L);if(De.__renderTarget=y,!ue.__hasExternalTextures){let me=Math.max(1,y.width>>le),de=Math.max(1,y.height>>le);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,J,me,de,y.depth,0,ce,_,null):t.texImage2D(Y,le,J,me,de,0,ce,_,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),We(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,Y,De.__webglTexture,0,Ge(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,Y,De.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(U,y,L){if(i.bindRenderbuffer(i.RENDERBUFFER,U),y.depthBuffer){let z=y.depthTexture,Y=z&&z.isDepthTexture?z.type:null,le=T(y.stencilBuffer,Y),ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(y),le,y.width,y.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(y),le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,U)}else{let z=y.textures;for(let Y=0;Y<z.length;Y++){let le=z[Y],ce=r.convert(le.format,le.colorSpace),_=r.convert(le.type),J=S(le.internalFormat,ce,_,le.normalized,le.colorSpace);We(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(y),J,y.width,y.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(U,y,L){let z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y.depthTexture);let ue=r.convert(y.depthTexture.format),De=r.convert(y.depthTexture.type),me;y.depthTexture.format===Xn?me=i.DEPTH_COMPONENT24:y.depthTexture.format===ts&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,y.width,y.height,0,ue,De,null)}}else se(y.depthTexture,0);let le=Y.__webglTexture,ce=Ge(y),_=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,J=y.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xn)We(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,_,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,J,_,le,0);else if(y.depthTexture.format===ts)We(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,_,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,J,_,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(U){let y=n.get(U),L=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){let z=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=z}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let z=0;z<6;z++)ft(y.__webglFramebuffer[z],U,z);else{let z=U.texture.mipmaps;z&&z.length>0?ft(y.__webglFramebuffer[0],U,0):ft(y.__webglFramebuffer,U,0)}else if(L){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=i.createRenderbuffer(),ze(y.__webglDepthbuffer[z],U,!1);else{let Y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}else{let z=U.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ze(y.__webglDepthbuffer,U,!1);else{let Y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(U,y,L){let z=n.get(U);y!==void 0&&Me(z.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ee(U)}function ae(U){let y=U.texture,L=n.get(U),z=n.get(y);U.addEventListener("dispose",A);let Y=U.textures,le=U.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=y.version,a.memory.textures++),le){L.__webglFramebuffer=[];for(let _=0;_<6;_++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[_]=[];for(let J=0;J<y.mipmaps.length;J++)L.__webglFramebuffer[_][J]=i.createFramebuffer()}else L.__webglFramebuffer[_]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let _=0;_<y.mipmaps.length;_++)L.__webglFramebuffer[_]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ce)for(let _=0,J=Y.length;_<J;_++){let ue=n.get(Y[_]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&We(U)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let _=0;_<Y.length;_++){let J=Y[_];L.__webglColorRenderbuffer[_]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[_]);let ue=r.convert(J.format,J.colorSpace),De=r.convert(J.type),me=S(J.internalFormat,ue,De,J.normalized,J.colorSpace,U.isXRRenderTarget===!0),de=Ge(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_,i.RENDERBUFFER,L.__webglColorRenderbuffer[_])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(L.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y);for(let _=0;_<6;_++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Me(L.__webglFramebuffer[_][J],U,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,J);else Me(L.__webglFramebuffer[_],U,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);g(y)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let _=0,J=Y.length;_<J;_++){let ue=Y[_],De=n.get(ue),me=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,De.__webglTexture),tt(me,ue),Me(L.__webglFramebuffer,U,ue,i.COLOR_ATTACHMENT0+_,me,0),g(ue)&&R(me)}t.unbindTexture()}else{let _=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_,z.__webglTexture),tt(_,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Me(L.__webglFramebuffer[J],U,y,i.COLOR_ATTACHMENT0,_,J);else Me(L.__webglFramebuffer,U,y,i.COLOR_ATTACHMENT0,_,0);g(y)&&R(_),t.unbindTexture()}U.depthBuffer&&ee(U)}function oe(U){let y=U.textures;for(let L=0,z=y.length;L<z;L++){let Y=y[L];if(g(Y)){let le=b(U),ce=n.get(Y).__webglTexture;t.bindTexture(le,ce),R(le),t.unbindTexture()}}}let he=[],ke=[];function Oe(U){if(U.samples>0){if(We(U)===!1){let y=U.textures,L=U.width,z=U.height,Y=i.COLOR_BUFFER_BIT,le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(U),_=y.length>1;if(_)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let J=U.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),_){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let De=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,L,z,0,0,L,z,Y,i.NEAREST),l===!0&&(he.length=0,ke.length=0,he.push(i.COLOR_ATTACHMENT0+ue),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(he.push(le),ke.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let De=n.get(y[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ge(U){return Math.min(s.maxSamples,U.samples)}function We(U){let y=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function C(U){let y=a.render.frame;h.get(U)!==y&&(h.set(U,y),U.update())}function ht(U,y){let L=U.colorSpace,z=U.format,Y=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||L!==rn&&L!==jn&&(_e.getTransfer(L)===lt?(z!==ln||Y!==pn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",L)),y}function nt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=se,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XS(i,e){function t(n,s=jn){let r,a=_e.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Eh)return i.RGB;if(n===ln)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Fa||n===Oa||n===La||n===ka)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===Ml||n===Tl||n===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===bl||n===Pl||n===wl||n===Ul||n===Va||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===bl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Va)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===El||n===Cl||n===Nl||n===Dl||n===Hl||n===Fl||n===Ol||n===Ll||n===kl||n===Vl||n===ql||n===Bl||n===zl||n===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Kl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===_l||n===qa||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:$S,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ru=class extends Bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new su,g={},R=t.getContextAttributes(),b=null,S=null,T=[],v=[],w=new ne,A=null,P=null,E=new kt;E.viewport=new gt;let N=new kt;N.viewport=new gt;let k=[E,N],V=new ll,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=T[Z];return $===void 0&&($=new sr,T[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=T[Z];return $===void 0&&($=new sr,T[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=T[Z];return $===void 0&&($=new sr,T[Z]=$),$.getHandSpace()};function K(Z){let $=v.indexOf(Z.inputSource);if($===-1)return;let xe=T[$];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<T.length;Z++){let $=v[Z];$!==null&&(v[Z]=null,T[Z].disconnect($))}D=null,O=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(b),p=null,d=null,u=null,s=null,S=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",j),s.addEventListener("inputsourceschange",se),R.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,qe=null,Me=null;R.depth&&(Me=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=R.stencil?ts:Xn,qe=R.stencil?Tr:Gn);let ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Vt(d.textureWidth,d.textureHeight,{format:ln,type:pn,depthTexture:new Yi(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Vt(p.framebufferWidth,p.framebufferHeight,{format:ln,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Z){for(let $=0;$<Z.removed.length;$++){let xe=Z.removed[$],qe=v.indexOf(xe);qe>=0&&(v[qe]=null,T[qe].disconnect(xe))}for(let $=0;$<Z.added.length;$++){let xe=Z.added[$],qe=v.indexOf(xe);if(qe===-1){for(let ze=0;ze<T.length;ze++)if(ze>=v.length){v.push(xe),qe=ze;break}else if(v[ze]===null){v[ze]=xe,qe=ze;break}if(qe===-1)break}let Me=T[qe];Me&&Me.connect(xe)}}let W=new I,X=new I;function te(Z,$,xe){W.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);let qe=W.distanceTo(X),Me=$.projectionMatrix.elements,ze=xe.projectionMatrix.elements,ft=Me[14]/(Me[10]-1),ee=Me[14]/(Me[10]+1),re=(Me[9]+1)/Me[5],ae=(Me[9]-1)/Me[5],oe=(Me[8]-1)/Me[0],he=(ze[8]+1)/ze[0],ke=ft*oe,Oe=ft*he,Ge=qe/(-oe+he),We=Ge*-oe;if($.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(Ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let C=ft+Ge,ht=ee+Ge,nt=ke-We,U=Oe+(qe-We),y=re*ee/ht*C,L=ae*ee/ht*C;Z.projectionMatrix.makePerspective(nt,U,y,L,C,ht),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ne(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let $=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),V.near=N.near=E.near=$,V.far=N.far=E.far=xe,(D!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,O=V.far),V.layers.mask=Z.layers.mask|6,E.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let qe=Z.parent,Me=V.cameras;Ne(V,qe);for(let ze=0;ze<Me.length;ze++)Ne(Me[ze],qe);Me.length===2?te(V,E,N):V.projectionMatrix.copy(E.projectionMatrix),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),be(Z,V,qe)};function be(Z,$,xe){xe===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=gs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return g[Z]};let ct=null;function tt(Z,$){if(h=$.getViewerPose(c||a),f=$,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let qe=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,qe=!0);for(let ee=0;ee<xe.length;ee++){let re=xe[ee],ae=null;if(p!==null)ae=p.getViewport(re);else{let he=u.getViewSubImage(d,re);ae=he.viewport,ee===0&&(e.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(S))}let oe=k[ee];oe===void 0&&(oe=new kt,oe.layers.enable(ee),oe.viewport=new gt,k[ee]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ee===0&&(V.matrix.copy(oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),qe===!0&&V.cameras.push(oe)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ee=u.getDepthInformation(xe[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ee=0;ee<xe.length;ee++){let re=xe[ee].camera;if(re){let ae=g[re];ae||(ae=new la,g[re]=ae);let oe=u.getCameraImage(re);ae.sourceTexture=oe}}}}for(let xe=0;xe<T.length;xe++){let qe=v[xe],Me=T[xe];qe!==null&&Me!==void 0&&Me.update(qe,$,c||a)}ct&&ct(Z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),f=null}let rt=new Df;rt.setAnimationLoop(tt),this.setAnimationLoop=function(Z){ct=Z},this.dispose=function(){}}},tM=new je,Vf=new Ke;Vf.set(-1,0,0,0,1,0,0,0,1);function nM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Oh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,R,b,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,R,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Yt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Yt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let R=e.get(g),b=R.envMap,S=R.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,R,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*R,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,R){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let R=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){let v=T.program;n.uniformBlockBinding(S,v)}function c(S,T){let v=s[S.id];v===void 0&&(m(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",R));let w=T.program;n.updateUBOMapping(S,w);let A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){let T=u();S.__bindingPointIndex=T;let v=i.createBuffer(),w=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let T=s[S.id],v=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,P=v.length;A<P;A++){let E=v[A];if(Array.isArray(E))for(let N=0,k=E.length;N<k;N++)p(E[N],A,N,w);else p(E,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,T,v,w){if(x(S,T,v,w)===!0){let A=S.__offset,P=S.value;if(Array.isArray(P)){let E=0;for(let N=0;N<P.length;N++){let k=P[N],V=g(k);f(k,S.__data,E),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(E+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(P,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function f(S,T,v){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,v)}function x(S,T,v,w){let A=S.value,P=T+"_"+v;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:ArrayBuffer.isView(A)?w[P]=A.slice():w[P]=A.clone(),!0;{let E=w[P];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return w[P]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(E.equals(A)===!1)return E.copy(A),!0}}return!1}function m(S){let T=S.uniforms,v=0,w=16;for(let P=0,E=T.length;P<E;P++){let N=Array.isArray(T[P])?T[P]:[T[P]];for(let k=0,V=N.length;k<V;k++){let D=N[k],O=Array.isArray(D.value)?D.value:[D.value];for(let K=0,j=O.length;K<j;K++){let se=O[K],W=g(se),X=v%w,te=X%W.boundary,Ne=X+te;v+=te,Ne!==0&&w-Ne<W.storage&&(v+=w-Ne),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=W.storage}}}let A=v%w;return A>0&&(v+=w-A),S.__size=v,S.__cache={},this}function g(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",S),T}function R(S){let T=S.target;T.removeEventListener("dispose",R);let v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function rM(){return oi===null&&(oi=new lr(sM,16,16,ns,Zt),oi.name="DFG_LUT",oi.minFilter=It,oi.magFilter=It,oi.wrapS=$t,oi.wrapT=$t,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var tc=class{constructor(e={}){let{canvas:t=ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=p,m=new Set([yl,Al,xl]),g=new Set([pn,Gn,Mr,Tr,fl,ml]),R=new Uint32Array(4),b=new Int32Array(4),S=new I,T=null,v=null,w=[],A=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,N=!1,k=null,V=null,D=null,O=null;this._outputColorSpace=vt;let K=0,j=0,se=null,W=-1,X=null,te=new gt,Ne=new gt,be=null,ct=new Re(0),tt=0,rt=t.width,Z=t.height,$=1,xe=null,qe=null,Me=new gt(0,0,rt,Z),ze=new gt(0,0,rt,Z),ft=!1,ee=new cr,re=!1,ae=!1,oe=new je,he=new I,ke=new gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function We(){return se===null?$:1}let C=n;function ht(M,H){return t.getContext(M,H)}let nt,U,y,L,z,Y,le,ce,_,J,ue,De,me,de,He,Ve,Ye,F,pe,Q,fe,Se,ie;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Fn,!1),C===null){let H="webgl2";if(C=ht(H,M),C===null)throw ht(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(M){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),Be("WebGLRenderer: "+M.message),M}function Fe(){nt=new dy(C),nt.init(),fe=new XS(C,nt),U=new ny(C,nt,e,fe),y=new QS(C,nt),U.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),V=C.createFramebuffer(),D=C.createFramebuffer(),O=C.createFramebuffer(),L=new my(C),z=new OS,Y=new JS(C,nt,y,z,U,fe,L),le=new uy(E),ce=new x0(C),Se=new ey(C,ce),_=new py(C,ce,L,Se),J=new xy(C,_,ce,Se,L),F=new gy(C,U,Y),He=new iy(z),ue=new FS(E,le,nt,U,Se,He),De=new nM(E,z),me=new kS,de=new jS(nt),Ye=new $A(E,le,y,J,f,l),Ve=new ZS(E,J,U),ie=new iM(C,L,U,y),pe=new ty(C,nt,L),Q=new fy(C,nt,L),L.programs=ue.programs,E.capabilities=U,E.extensions=nt,E.properties=z,E.renderLists=me,E.shadowMap=Ve,E.state=y,E.info=L}x!==pn&&(P=new yy(x,t.width,t.height,o,s,r));let Ie=new ru(E,C);this.xr=Ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(rt,Z,!1))},this.getSize=function(M){return M.set(rt,Z)},this.setSize=function(M,H,G=!0){if(Ie.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=M,Z=H,t.width=Math.floor(M*$),t.height=Math.floor(H*$),G===!0&&(t.style.width=M+"px",t.style.height=H+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(rt*$,Z*$).floor()},this.setDrawingBufferSize=function(M,H,G){rt=M,Z=H,$=G,t.width=Math.floor(M*G),t.height=Math.floor(H*G),this.setViewport(0,0,M,H)},this.setEffects=function(M){if(x===pn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let H=0;H<M.length;H++)if(M[H].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,H,G,q){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,H,G,q),y.viewport(te.copy(Me).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,H,G,q){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,H,G,q),y.scissor(Ne.copy(ze).multiplyScalar($).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(M){y.setScissorTest(ft=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){qe=M},this.getClearColor=function(M){return M.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,G=!0){let q=0;if(M){let B=!1;if(se!==null){let ye=se.texture.format;B=m.has(ye)}if(B){let ye=se.texture.type,ve=g.has(ye),Ae=Ye.getClearColor(),Pe=Ye.getClearAlpha(),Ee=Ae.r,Qe=Ae.g,it=Ae.b;ve?(R[0]=Ee,R[1]=Qe,R[2]=it,R[3]=Pe,C.clearBufferuiv(C.COLOR,0,R)):(b[0]=Ee,b[1]=Qe,b[2]=it,b[3]=Pe,C.clearBufferiv(C.COLOR,0,b))}else q|=C.COLOR_BUFFER_BIT}H&&(q|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),Ye.dispose(),me.dispose(),de.dispose(),z.dispose(),le.dispose(),J.dispose(),Se.dispose(),ie.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Td),Ie.removeEventListener("sessionend",vd),cs.stop()};function Mt(M){M.preventDefault(),Qr("WebGLRenderer: Context Lost."),N=!0}function ut(){Qr("WebGLRenderer: Context Restored."),N=!1;let M=L.autoReset,H=Ve.enabled,G=Ve.autoUpdate,q=Ve.needsUpdate,B=Ve.type;Fe(),L.autoReset=M,Ve.enabled=H,Ve.autoUpdate=G,Ve.needsUpdate=q,Ve.type=B}function Fn(M){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Yn(M){let H=M.target;H.removeEventListener("dispose",Yn),Hm(H)}function Hm(M){Fm(M),z.remove(M)}function Fm(M){let H=z.get(M).programs;H!==void 0&&(H.forEach(function(G){ue.releaseProgram(G)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,G,q,B,ye){H===null&&(H=Oe);let ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,Ae=km(M,H,G,q,B);y.setMaterial(q,ve);let Pe=G.index,Ee=1;if(q.wireframe===!0){if(Pe=_.getWireframeAttribute(G),Pe===void 0)return;Ee=2}let Qe=G.drawRange,it=G.attributes.position,we=Qe.start*Ee,dt=(Qe.start+Qe.count)*Ee;ye!==null&&(we=Math.max(we,ye.start*Ee),dt=Math.min(dt,(ye.start+ye.count)*Ee)),Pe!==null?(we=Math.max(we,0),dt=Math.min(dt,Pe.count)):it!=null&&(we=Math.max(we,0),dt=Math.min(dt,it.count));let Ot=dt-we;if(Ot<0||Ot===1/0)return;Se.setup(B,q,Ae,G,Pe);let bt,yt=pe;if(Pe!==null&&(bt=ce.get(Pe),yt=Q,yt.setIndex(bt)),B.isMesh)q.wireframe===!0?(y.setLineWidth(q.wireframeLinewidth*We()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(B.isLine){let Qt=q.linewidth;Qt===void 0&&(Qt=1),y.setLineWidth(Qt*We()),B.isLineSegments?yt.setMode(C.LINES):B.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else B.isPoints?yt.setMode(C.POINTS):B.isSprite&&yt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Qt=B._multiDrawStarts,Te=B._multiDrawCounts,tn=B._multiDrawCount,at=Pe?ce.get(Pe).bytesPerElement:1,Pn=z.get(q).currentProgram.getUniforms();for(let _n=0;_n<tn;_n++)Pn.setValue(C,"_gl_DrawID",_n),yt.render(Qt[_n]/at,Te[_n])}else if(B.isInstancedMesh)yt.renderInstances(we,Ot,B.count);else if(G.isInstancedBufferGeometry){let Qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Te=Math.min(G.instanceCount,Qt);yt.renderInstances(we,Ot,Te)}else yt.render(we,Ot)};function Md(M,H,G,q){k!==null&&M.isNodeMaterial&&k.setObject(q,M),re===!0&&He.setState(M,G,!1),M.transparent===!0&&M.side===_t&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,no(M,H,q),M.side=ai,M.needsUpdate=!0,no(M,H,q),M.side=_t):no(M,H,q)}this.compile=function(M,H,G=null){G===null&&(G=M),k!==null&&k.renderStart(M,H,G),v=de.get(G),v.init(H),A.push(v),G.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(),k!==null&&k.updateLights(v.state.lightsArray),ae=this.localClippingEnabled,re=He.init(this.clippingPlanes,ae),re===!0&&He.setGlobalState(this.clippingPlanes,H),k!==null&&Ve.render(v.state.shadowsArray,G,H);let q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ye=B.material;if(ye)if(Array.isArray(ye))for(let ve=0;ve<ye.length;ve++){let Ae=ye[ve];Md(Ae,G,H,B),q.add(Ae)}else Md(ye,G,H,B),q.add(ye)}),v=A.pop(),k!==null&&k.renderEnd(),q},this.compileAsync=function(M,H,G=null){let q=this.compile(M,H,G);return new Promise(B=>{function ye(){if(q.forEach(function(ve){let Pe=z.get(ve).currentProgram;(Pe===void 0||Pe.isReady())&&q.delete(ve)}),q.size===0){B(M);return}setTimeout(ye,10)}nt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Uc=null;function Om(M){Uc&&Uc(M)}function Td(){cs.stop()}function vd(){cs.start()}let cs=new Df;cs.setAnimationLoop(Om),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(M){Uc=M,Ie.setAnimationLoop(M),M===null?cs.stop():cs.start()},Ie.addEventListener("sessionstart",Td),Ie.addEventListener("sessionend",vd),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(M,H);let G=Ie.enabled===!0&&Ie.isPresenting===!0,q=P!==null&&(se===null||G)&&P.begin(E,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(H),H=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,H,se),v=de.get(M,A.length),v.init(H),v.state.textureUnits=Y.getTextureUnits(),A.push(v),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(oe,qn,H.reversedDepth),ae=this.localClippingEnabled,re=He.init(this.clippingPlanes,ae),T=me.get(M,w.length),T.init(),w.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){let ve=E.xr.getDepthSensingMesh();ve!==null&&Ic(ve,H,-1/0,E.sortObjects)}Ic(M,H,0,E.sortObjects),T.finish(),k!==null&&k.updateLights(v.state.lightsArray),E.sortObjects===!0&&T.sort(xe,qe),Ge=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Ge&&Ye.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&He.beginShadows();let B=v.state.shadowsArray;if(Ve.render(B,M,H),re===!0&&He.endShadows(),(q&&P.hasRenderPass())===!1){let ve=T.opaque,Ae=T.transmissive;if(v.setupLights(),H.isArrayCamera){let Pe=H.cameras;if(Ae.length>0)for(let Ee=0,Qe=Pe.length;Ee<Qe;Ee++){let it=Pe[Ee];bd(ve,Ae,M,it)}Ge&&Ye.render(M);for(let Ee=0,Qe=Pe.length;Ee<Qe;Ee++){let it=Pe[Ee];Rd(T,M,it,it.viewport)}}else Ae.length>0&&bd(ve,Ae,M,H),Ge&&Ye.render(M),Rd(T,M,H)}se!==null&&j===0&&(Y.updateMultisampleRenderTarget(se),Y.updateRenderTargetMipmap(se)),q&&P.end(E),M.isScene===!0&&M.onAfterRender(E,M,H),Se.resetDefaultState(),W=-1,X=null,A.pop(),A.length>0?(v=A[A.length-1],Y.setTextureUnits(v.state.textureUnits),re===!0&&He.setGlobalState(E.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,k!==null&&k.renderEnd()};function Ic(M,H,G,q){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLightProbeGrid)v.pushLightProbeGrid(M);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ee)){q&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);let ve=J.update(M),Ae=M.material;Ae.visible&&T.push(M,ve,Ae,G,ke.z,null,H)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ee))){let ve=J.update(M),Ae=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ke.copy(ve.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Ae)){let Pe=ve.groups;for(let Ee=0,Qe=Pe.length;Ee<Qe;Ee++){let it=Pe[Ee],we=Ae[it.materialIndex];we&&we.visible&&T.push(M,ve,we,G,ke.z,it,H)}}else Ae.visible&&T.push(M,ve,Ae,G,ke.z,null,H)}}let ye=M.children;for(let ve=0,Ae=ye.length;ve<Ae;ve++)Ic(ye[ve],H,G,q)}function Rd(M,H,G,q){let{opaque:B,transmissive:ye,transparent:ve}=M;v.setupLightsView(G),re===!0&&He.setGlobalState(E.clippingPlanes,G),q&&y.viewport(te.copy(q)),B.length>0&&to(B,H,G),ye.length>0&&to(ye,H,G),ve.length>0&&to(ve,H,G),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function bd(M,H,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[q.id]===void 0){let we=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[q.id]=new Vt(1,1,{generateMipmaps:!0,type:we?Zt:pn,minFilter:Tn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let ye=v.state.transmissionRenderTarget[q.id],ve=q.viewport||te;ye.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);let Ae=E.getRenderTarget(),Pe=E.getActiveCubeFace(),Ee=E.getActiveMipmapLevel();E.setRenderTarget(ye),E.getClearColor(ct),tt=E.getClearAlpha(),tt<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&Ye.render(G);let Qe=E.toneMapping;E.toneMapping=zn;let it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),re===!0&&He.setGlobalState(E.clippingPlanes,q),to(M,G,q),Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye),nt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let dt=0,Ot=H.length;dt<Ot;dt++){let bt=H[dt],{object:yt,geometry:Qt,material:Te,group:tn}=bt;if(Te.side===_t&&yt.layers.test(q.layers)){let at=Te.side;Te.side=Yt,Te.needsUpdate=!0,Pd(yt,G,q,Qt,Te,tn),Te.side=at,Te.needsUpdate=!0,we=!0}}we===!0&&(Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye))}E.setRenderTarget(Ae,Pe,Ee),E.setClearColor(ct,tt),it!==void 0&&(q.viewport=it),E.toneMapping=Qe}function to(M,H,G){let q=H.isScene===!0?H.overrideMaterial:null;for(let B=0,ye=M.length;B<ye;B++){let ve=M[B],{object:Ae,geometry:Pe,group:Ee}=ve,Qe=ve.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Ae.layers.test(G.layers)&&Pd(Ae,H,G,Pe,Qe,Ee)}}function Pd(M,H,G,q,B,ye){k!==null&&B.isNodeMaterial&&k.setObject(M,B),M.onBeforeRender(E,H,G,q,B,ye),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,H,G,q,M,ye),B.transparent===!0&&B.side===_t&&B.forceSinglePass===!1?(B.side=Yt,B.needsUpdate=!0,E.renderBufferDirect(G,H,q,B,M,ye),B.side=ai,B.needsUpdate=!0,E.renderBufferDirect(G,H,q,B,M,ye),B.side=_t):E.renderBufferDirect(G,H,q,B,M,ye),M.onAfterRender(E,H,G,q,B,ye)}function no(M,H,G){H.isScene!==!0&&(H=Oe);let q=z.get(M),B=v.state.lights,ye=v.state.shadowsArray,ve=B.state.version,Ae=ue.getParameters(M,B.state,ye,H,G,v.state.lightProbeGridArray),Pe=ue.getProgramCacheKey(Ae),Ee=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=le.get(M.envMap||q.environment,Qe),q.envMapRotation=q.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",Yn),Ee=new Map,q.programs=Ee);let it=Ee.get(Pe);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===ve)return Ud(M,Ae),it}else Ae.uniforms=ue.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,G,Ae),M.onBeforeCompile(Ae,E),it=ue.acquireProgram(Ae,Pe),Ee.set(Pe,it),q.uniforms=Ae.uniforms;let we=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=He.uniform),Ud(M,Ae),q.needsLights=qm(M),q.lightsStateVersion=ve,q.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.sunLights.value=B.state.sun,we.sunLightShadows.value=B.state.sunShadow,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.sunShadowMatrix.value=B.state.sunShadowMatrix,we.sunShadowCascade.value=B.state.sunShadowCascade,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),q.lightProbeGrid=v.state.lightProbeGridArray.length>0,q.currentProgram=it,q.uniformsList=null,it}function wd(M){if(M.uniformsList===null){let H=M.currentProgram.getUniforms();M.uniformsList=Pr.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Ud(M,H){let G=z.get(M);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.batchingColor=H.batchingColor,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.instancingMorph=H.instancingMorph,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function Lm(M,H){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let G=0,q=M.length;G<q;G++){let B=M[G];if(B.texture!==null&&B.boundingBox.containsPoint(S))return B}return null}function km(M,H,G,q,B){H.isScene!==!0&&(H=Oe),Y.resetTextureUnits();let ye=H.fog,ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Ae=se===null?E.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_e.workingColorSpace,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ee=le.get(q.envMap||ve,Pe),Qe=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,it=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),we=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,Ot=!!G.morphAttributes.color,bt=zn;q.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(bt=E.toneMapping);let yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=yt!==void 0?yt.length:0,Te=z.get(q),tn=v.state.lights;if(re===!0&&(ae===!0||M!==X)){let Tt=M===X&&q.id===W;He.setState(q,M,Tt)}let at=!1;q.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==tn.state.version||Te.outputColorSpace!==Ae||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==Ee||q.fog===!0&&Te.fog!==ye||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==He.numPlanes||Te.numIntersection!==He.numIntersection)||Te.vertexAlphas!==Qe||Te.vertexTangents!==it||Te.morphTargets!==we||Te.morphNormals!==dt||Te.morphColors!==Ot||Te.toneMapping!==bt||Te.morphTargetsCount!==Qt||!!Te.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Te.__version=q.version);let Pn=Te.currentProgram;at===!0&&(Pn=no(q,H,B),k&&q.isNodeMaterial&&k.onUpdateProgram(q,Pn,Te));let _n=!1,Fi=!1,Os=!1,At=Pn.getUniforms(),Dt=Te.uniforms;if(y.useProgram(Pn.program)&&(_n=!0,Fi=!0,Os=!0),q.id!==W&&(W=q.id,Fi=!0),Te.needsLights){let Tt=Lm(v.state.lightProbeGridArray,B);Te.lightProbeGrid!==Tt&&(Te.lightProbeGrid=Tt,Fi=!0)}if(_n||X!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(C,"projectionMatrix",M.projectionMatrix),At.setValue(C,"viewMatrix",M.matrixWorldInverse);let Li=At.map.cameraPosition;Li!==void 0&&Li.setValue(C,he.setFromMatrixPosition(M.matrixWorld)),U.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Fi=!0,Os=!0)}if(Te.needsLights&&(tn.state.sunShadowMap.length>0&&At.setValue(C,"sunShadowMap",tn.state.sunShadowMap,Y),tn.state.directionalShadowMap.length>0&&At.setValue(C,"directionalShadowMap",tn.state.directionalShadowMap,Y),tn.state.spotShadowMap.length>0&&At.setValue(C,"spotShadowMap",tn.state.spotShadowMap,Y),tn.state.pointShadowMap.length>0&&At.setValue(C,"pointShadowMap",tn.state.pointShadowMap,Y)),B.isSkinnedMesh){At.setOptional(C,B,"bindMatrix"),At.setOptional(C,B,"bindMatrixInverse");let Tt=B.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),At.setValue(C,"boneTexture",Tt.boneTexture,Y))}B.isBatchedMesh&&(At.setOptional(C,B,"batchingTexture"),At.setValue(C,"batchingTexture",B._matricesTexture,Y),At.setOptional(C,B,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",B._indirectTexture,Y),At.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",B._colorsTexture,Y));let Oi=G.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&F.update(B,G,Pn),(Fi||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,At.setValue(C,"receiveShadow",B.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Dt.envMapIntensity.value=H.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=rM()),Fi){if(At.setValue(C,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Vm(Dt,Os),ye&&q.fog===!0&&De.refreshFogUniforms(Dt,ye),De.refreshMaterialUniforms(Dt,q,$,Z,v.state.transmissionRenderTarget[M.id]),Te.needsLights&&Te.lightProbeGrid){let Tt=Te.lightProbeGrid;Dt.probesSH.value=Tt.texture,Dt.probesMin.value.copy(Tt.boundingBox.min),Dt.probesMax.value.copy(Tt.boundingBox.max),Dt.probesResolution.value.copy(Tt.resolution)}Pr.upload(C,wd(Te),Dt,Y)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pr.upload(C,wd(Te),Dt,Y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(C,"center",B.center),At.setValue(C,"modelViewMatrix",B.modelViewMatrix),At.setValue(C,"normalMatrix",B.normalMatrix),At.setValue(C,"modelMatrix",B.matrixWorld),q.uniformsGroups!==void 0){let Tt=q.uniformsGroups;for(let Li=0,Ls=Tt.length;Li<Ls;Li++){let Ed=Tt[Li];ie.update(Ed,Pn),ie.bind(Ed,Pn)}}return Pn}function Vm(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.sunLights.needsUpdate=H,M.sunLightShadows.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function qm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,H,G){let q=z.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=H,z.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:G,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){let G=z.get(M);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,G=0){se=M,K=H,j=G;let q=null,B=!1,ye=!1;if(M){let Ae=z.get(M);if(Ae.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(C.FRAMEBUFFER,Ae.__webglFramebuffer),te.copy(M.viewport),Ne.copy(M.scissor),be=M.scissorTest,y.viewport(te),y.scissor(Ne),y.setScissorTest(be),W=-1;return}else if(Ae.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(Ae.__hasExternalTextures)Y.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qe=M.depthTexture;if(Ae.__boundDepthTexture!==Qe){if(Qe!==null&&z.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}let Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);let Ee=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ee[H])?q=Ee[H][G]:q=Ee[H],B=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?q=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Ee)?q=Ee[G]:q=Ee,te.copy(M.viewport),Ne.copy(M.scissor),be=M.scissorTest}else te.copy(Me).multiplyScalar($).floor(),Ne.copy(ze).multiplyScalar($).floor(),be=ft;if(G!==0&&(q=V),y.bindFramebuffer(C.FRAMEBUFFER,q)&&y.drawBuffers(M,q),y.viewport(te),y.scissor(Ne),y.setScissorTest(be),B){let Ae=z.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,G)}else if(ye){let Ae=H;for(let Pe=0;Pe<M.textures.length;Pe++){let Ee=z.get(M.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,Ee.__webglTexture,G,Ae)}}else if(M!==null&&G!==0){let Ae=z.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,G)}W=-1};function Id(M){let H=z.get(M);return(H.__readFormat!==M.format||H.__readType!==M.type)&&(H.__readFormat=M.format,H.__readType=M.type,H.__formatReadable=U.textureFormatReadable(M.format),H.__typeReadable=U.textureTypeReadable(M.type)),H}this.readRenderTargetPixels=function(M,H,G,q,B,ye,ve,Ae=0){if(!(M&&M.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){y.bindFramebuffer(C.FRAMEBUFFER,Pe);try{let Ee=M.textures[Ae],Qe=Ee.format,it=Ee.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae);let we=Id(Ee);if(we.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-q&&G>=0&&G<=M.height-B&&C.readPixels(H,G,q,B,fe.convert(Qe),fe.convert(it),ye)}finally{let Ee=se!==null?z.get(se).__webglFramebuffer:null;y.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,H,G,q,B,ye,ve,Ae=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe)if(H>=0&&H<=M.width-q&&G>=0&&G<=M.height-B){y.bindFramebuffer(C.FRAMEBUFFER,Pe);let Ee=M.textures[Ae],Qe=Ee.format,it=Ee.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae);let we=Id(Ee);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,dt),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),C.readPixels(H,G,q,B,fe.convert(Qe),fe.convert(it),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Ot=se!==null?z.get(se).__webglFramebuffer:null;y.bindFramebuffer(C.FRAMEBUFFER,Ot);let bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await nf(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(dt),C.deleteSync(bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,G=0){let q=Math.pow(2,-G),B=Math.floor(M.image.width*q),ye=Math.floor(M.image.height*q),ve=H!==null?H.x:0,Ae=H!==null?H.y:0;Y.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ve,Ae,B,ye),y.unbindTexture()},this.copyTextureToTexture=function(M,H,G=null,q=null,B=0,ye=0){let ve,Ae,Pe,Ee,Qe,it,we,dt,Ot,bt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(G!==null)ve=G.max.x-G.min.x,Ae=G.max.y-G.min.y,Pe=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Qe=G.min.y,it=G.isBox3?G.min.z:0;else{let Dt=Math.pow(2,-B);ve=Math.floor(bt.width*Dt),Ae=Math.floor(bt.height*Dt),M.isDataArrayTexture?Pe=bt.depth:M.isData3DTexture?Pe=Math.floor(bt.depth*Dt):Pe=1,Ee=0,Qe=0,it=0}q!==null?(we=q.x,dt=q.y,Ot=q.z):(we=0,dt=0,Ot=0);let yt=fe.convert(H.format),Qt=fe.convert(H.type),Te;H.isData3DTexture?(Y.setTexture3D(H,0),Te=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Y.setTexture2DArray(H,0),Te=C.TEXTURE_2D_ARRAY):(Y.setTexture2D(H,0),Te=C.TEXTURE_2D),y.activeTexture(C.TEXTURE0),y.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=y.getParameter(C.UNPACK_ROW_LENGTH),at=y.getParameter(C.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(C.UNPACK_SKIP_PIXELS),_n=y.getParameter(C.UNPACK_SKIP_ROWS),Fi=y.getParameter(C.UNPACK_SKIP_IMAGES);y.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),y.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),y.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(C.UNPACK_SKIP_IMAGES,it);let Os=M.isDataArrayTexture||M.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){let Dt=z.get(M),Oi=z.get(H),Tt=z.get(Dt.__renderTarget),Li=z.get(Oi.__renderTarget);y.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ls=0;Ls<Pe;Ls++)Os&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,z.get(M).__webglTexture,B,it+Ls),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,z.get(H).__webglTexture,ye,Ot+Ls)),C.blitFramebuffer(Ee,Qe,ve,Ae,we,dt,ve,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);y.bindFramebuffer(C.READ_FRAMEBUFFER,null),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||z.has(M)){let Dt=z.get(M),Oi=z.get(H);y.bindFramebuffer(C.READ_FRAMEBUFFER,D),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,O);for(let Tt=0;Tt<Pe;Tt++)Os?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,B,it+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dt.__webglTexture,B),At?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oi.__webglTexture,ye,Ot+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Oi.__webglTexture,ye),B!==0?C.blitFramebuffer(Ee,Qe,ve,Ae,we,dt,ve,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):At?C.copyTexSubImage3D(Te,ye,we,dt,Ot+Tt,Ee,Qe,ve,Ae):C.copyTexSubImage2D(Te,ye,we,dt,Ee,Qe,ve,Ae);y.bindFramebuffer(C.READ_FRAMEBUFFER,null),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else At?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Te,ye,we,dt,Ot,ve,Ae,Pe,yt,Qt,bt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,ye,we,dt,Ot,ve,Ae,Pe,yt,bt.data):C.texSubImage3D(Te,ye,we,dt,Ot,ve,Ae,Pe,yt,Qt,bt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,we,dt,ve,Ae,yt,Qt,bt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,we,dt,bt.width,bt.height,yt,bt.data):C.texSubImage2D(C.TEXTURE_2D,ye,we,dt,ve,Ae,yt,Qt,bt);y.pixelStorei(C.UNPACK_ROW_LENGTH,tn),y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at),y.pixelStorei(C.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(C.UNPACK_SKIP_ROWS,_n),y.pixelStorei(C.UNPACK_SKIP_IMAGES,Fi),ye===0&&H.generateMipmaps&&C.generateMipmap(Te),y.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){K=0,j=0,se=null,y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(e),t.unpackColorSpace=_e._getUnpackColorSpace()}};var qf={type:"change"},lu={type:"start"},zf={type:"end"},sc=new Mi,Bf=new sn,oM=Math.cos(70*Ei.DEG2RAD),Gt=new I,fn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ou=1e-6,rc=class extends Pa{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Kt,this._lastTargetPosition=new I,this._quat=new Kt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ri,this._sphericalDelta=new ri,this._scale=1,this._panOffset=new I,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new I,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cM.bind(this),this._onPointerDown=lM.bind(this),this._onPointerUp=hM.bind(this),this._onContextMenu=xM.bind(this),this._onMouseWheel=pM.bind(this),this._onKeyDown=fM.bind(this),this._onTouchStart=mM.bind(this),this._onTouchMove=gM.bind(this),this._onMouseDown=uM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=AM.bind(this),this._interceptControlUp=yM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Gt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<oM?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ou||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ou||this._lastTargetPosition.distanceToSquared(this.target)>ou?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function lM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zf),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(lu)}function dM(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function pM(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zf))}function fM(i){this.enabled!==!1&&this._handleKeyDown(i)}function mM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(lu)}function gM(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function xM(i){this.enabled!==!1&&i.preventDefault()}function AM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gf={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},is=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new pu(e)}),this.register(function(e){return new fu(e)}),this.register(function(e){return new Au(e)}),this.register(function(e){return new yu(e)}),this.register(function(e){return new Su(e)}),this.register(function(e){return new Mu(e)}),this.register(function(e){return new mu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new xu(e)}),this.register(function(e){return new Tu(e)}),this.register(function(e){return new vu(e)}),this.register(function(e){return new Ru(e)}),this.register(function(e){return new bu(e)}),this.register(function(e){return new Pu(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new du,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},st={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},cu="KHR_mesh_quantization",Rn={};Rn[Ut]=st.NEAREST;Rn[Sr]=st.NEAREST_MIPMAP_NEAREST;Rn[Ii]=st.NEAREST_MIPMAP_LINEAR;Rn[It]=st.LINEAR;Rn[es]=st.LINEAR_MIPMAP_NEAREST;Rn[Tn]=st.LINEAR_MIPMAP_LINEAR;Rn[$t]=st.CLAMP_TO_EDGE;Rn[yn]=st.REPEAT;Rn[Jn]=st.MIRRORED_REPEAT;var jf={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},SM=new Re,Kf=12,MM=1179937895,TM=2,Wf=8,vM=1313821514,RM=5130562;function Ni(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function bM(i){return new TextEncoder().encode(i).buffer}function PM(i){return Ni(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function wM(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=Ei.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Yf(i){return Math.ceil(i/4)*4}function hu(i,e=0){let t=Yf(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function uu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function UM(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var du=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r186"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,a=s.json;n=s.options;let o=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.copyright&&(a.asset.copyright=n.copyright),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){let p=hu(d.result),f=new DataView(new ArrayBuffer(Wf));f.setUint32(0,p.byteLength,!0),f.setUint32(4,RM,!0);let x=hu(bM(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Wf));m.setUint32(0,x.byteLength,!0),m.setUint32(4,vM,!0);let g=new ArrayBuffer(Kf),R=new DataView(g);R.setUint32(0,MM,!0),R.setUint32(4,TM,!0);let b=Kf+m.byteLength+x.byteLength+f.byteLength+p.byteLength;R.setUint32(8,b,!0);let S=new Blob([g,m,x,f,p],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(S),T.onloadend=function(){t(T.result)}}}else if(a.buffers&&a.buffers.length>0){let d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){let p=d.result;a.buffers[0].uri=p,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new I;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new I;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(p){return p.colorSpace===vt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Wi&&(e=await this.decompressTextureAsync(e)),t instanceof Wi&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),l=uu();l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);let h=c.getImageData(0,0,a,o);if(s){c.drawImage(s,0,0,a,o);let p=n(e),f=c.getImageData(0,0,a,o).data;for(let x=2;x<f.length;x+=4)h.data[x]=p(f[x]/256)*256}if(r){c.drawImage(r,0,0,a,o);let p=n(t),f=c.getImageData(0,0,a,o).data;for(let x=1;x<f.length;x+=4)h.data[x]=p(f[x]/256)*256}c.putImageData(h,0,0);let d=(e||t).clone();return d.source=new Si(l),d.colorSpace=jn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async buildNormalMapTextureAsync(e,t,n){e instanceof Wi&&(e=await this.decompressTextureAsync(e));let s=e.image,r=uu();r.width=s.width,r.height=s.height;let a=r.getContext("2d",{willReadFrequently:!0});a.drawImage(s,0,0,r.width,r.height);let o=a.getImageData(0,0,r.width,r.height),l=o.data;for(let h=0;h<l.length;h+=4)t&&(l[h+0]=255-l[h+0]),n&&(l[h+1]=255-l[h+1]);a.putImageData(o,0,0);let c=e.clone();return c.source=new Si(r),c}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case st.BYTE:case st.UNSIGNED_BYTE:o=1;break;case st.SHORT:case st.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===st.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Yf(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let f=n;f<n+s;f++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[f*e.itemSize+x]:(x===0?m=e.getX(f):x===1?m=e.getY(f):x===2?m=e.getZ(f):x===3&&(m=e.getW(f)),e.normalized===!0&&(m=Ei.normalize(m,e.array))),t===st.FLOAT?h.setFloat32(u,m,!0):t===st.INT?h.setInt32(u,m,!0):t===st.UNSIGNED_INT?h.setUint32(u,m,!0):t===st.SHORT?h.setInt16(u,m,!0):t===st.UNSIGNED_SHORT?h.setUint16(u,m,!0):t===st.BYTE?h.setInt8(u,m):t===st.UNSIGNED_BYTE&&h.setUint8(u,m),u+=o}u%l!==0&&(u+=l-u%l)}let d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===st.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=hu(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=st.FLOAT;else if(e.array.constructor===Int32Array)o=st.INT;else if(e.array.constructor===Uint32Array)o=st.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=st.SHORT;else if(e.array.constructor===Uint16Array)o=st.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=st.BYTE;else if(e.array.constructor===Uint8Array)o=st.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=wM(e,n,s),c;t!==void 0&&(c=e===t.index?st.ELEMENT_ARRAY_BUFFER:st.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:s,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);let d={mimeType:s},p=uu();p.width=Math.min(e.width,l.maxTextureSize),p.height=Math.min(e.height,l.maxTextureSize);let f=p.getContext("2d",{willReadFrequently:!0});if(n===!0&&(f.translate(0,p.height),f.scale(1,-1)),e.data!==void 0){t!==ln&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<m.length;g+=4)m[g+0]=e.data[g+0],m[g+1]=e.data[g+1],m[g+2]=e.data[g+2],m[g+3]=e.data[g+3];f.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)f.drawImage(e,0,0,p.width,p.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(UM(p,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):d.uri=ir.getDataURL(p,s);let x=o.images.push(d)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Rn[e.magFilter],minFilter:Rn[e.minFilter],wrapS:Rn[e.wrapS],wrapT:Rn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Wi&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType,o=this.processImage(e.image,e.format,e.flipY,a),l={sampler:this.processSampler(e)};a==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:o},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=o,e.name&&(l.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,l)});let c=r.textures.push(l)-1;return s.textures.set(e,c),c}async processMaterialAsync(e,t){let n=this.cache,s=this.json,r=t!==void 0&&t.hasAttribute("tangent"),a=e.normalMap?e.uuid+":"+r:e.uuid;if(n.materials.has(a))return n.materials.get(a);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=e.color.toArray().concat([e.opacity]);if(Ni(l,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),o.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),o.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let d={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(d,e.emissiveMap),o.emissiveTexture=d}}if(e.normalMap){let h=e.normalScale,u=h.x<0,d=r?h.y<0:h.y>0,p=e.normalMap;if(u||d){n.normalMaps.has(e.normalMap)===!1&&n.normalMaps.set(e.normalMap,{});let x=n.normalMaps.get(e.normalMap),m=`${u}:${d}`;x[m]===void 0&&(x[m]=await this.buildNormalMapTextureAsync(e.normalMap,u,d)),p=x[m]}let f={index:await this.processTextureAsync(p),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(f.scale=Math.abs(h.x)),this.applyTextureTransform(f,e.normalMap),o.normalTexture=f}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),o.occlusionTexture=h}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===_t&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,o)});let c=s.materials.push(o)-1;return n.materials.set(a,c),c}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let S=0,T=e.material.length;S<T;S++)s.push(e.material[S].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=st.LINES:e.isLineLoop?o=st.LINE_LOOP:e.isLine?o=st.LINE_STRIP:e.isPoints?o=st.POINTS:o=e.material.wireframe?st.LINES:st.TRIANGLES;let l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let f=null;for(let S in a.attributes){if(S.slice(0,5)==="morph")continue;let T=a.attributes[S];if(S=d[S]||S.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(S)&&!S.startsWith("_")&&(S="_"+S),t.attributes.has(this.getUID(T))){c[S]=t.attributes.get(this.getUID(T));continue}f=null;let w=T.array;S==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),f=is.Utils.toTypedBufferAttribute(T,Uint16Array)):(w instanceof Uint32Array||w instanceof Int32Array)&&!S.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${S}" converted to type FLOAT.`),f=is.Utils.toTypedBufferAttribute(T,Float32Array));let A=this.processAccessor(f||T,a);A!==null&&(S.startsWith("_")||this.detectMeshQuantization(S,T),c[S]=A,t.attributes.set(this.getUID(T),A))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let S=[],T=[],v={};if(e.morphTargetDictionary!==void 0)for(let w in e.morphTargetDictionary)v[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){let A={},P=!1;for(let E in a.morphAttributes){if(E!=="position"&&E!=="normal"){P||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),P=!0);continue}let N=a.morphAttributes[E][w],k=E.toUpperCase(),V=a.attributes[E];if(t.attributes.has(this.getUID(N,!0))){A[k]=t.attributes.get(this.getUID(N,!0));continue}let D=N.clone();if(!a.morphTargetsRelative)for(let O=0,K=N.count;O<K;O++)for(let j=0;j<N.itemSize;j++)j===0&&D.setX(O,N.getX(O)-V.getX(O)),j===1&&D.setY(O,N.getY(O)-V.getY(O)),j===2&&D.setZ(O,N.getZ(O)-V.getZ(O)),j===3&&D.setW(O,N.getW(O)-V.getW(O));A[k]=this.processAccessor(D,a),t.attributes.set(this.getUID(V,!0),A[k])}u.push(A),S.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&T.push(v[w])}l.weights=S,T.length>0&&(l.extras={},l.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&a.groups.length===0)return null;let m=!1;if(x&&a.index===null){let S=[];for(let T=0,v=a.attributes.position.count;T<v;T++)S[T]=T;a.setIndex(S),m=!0}let g=x?e.material:[e.material],R=x?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let S=0,T=R.length;S<T;S++){let v={mode:o,attributes:c};if(this.serializeUserData(a,v),u.length>0&&(v.targets=u),a.index!==null){let A=this.getUID(a.index);(R[S].start!==void 0||R[S].count!==void 0)&&(A+=":"+R[S].start+":"+R[S].count),t.attributes.has(A)?v.indices=t.attributes.get(A):(v.indices=this.processAccessor(a.index,a,R[S].start,R[S].count),t.attributes.set(A,v.indices)),v.indices===null&&delete v.indices}let w=await this.processMaterialAsync(g[R[S].materialIndex],a);w!==null&&(v.material=w),h.push(v)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(S){S.writeMesh&&S.writeMesh(e,l)});let b=n.meshes.push(l)-1;return t.meshes.set(r,b),b}detectMeshQuantization(e,t){if(this.extensionsUsed[cu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Gf[s]&&Gf[s].includes(n)&&(this.extensionsUsed[cu]=!0,this.extensionsRequired[cu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Ei.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=is.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let h=r[c],u=ot.parseTrackName(h.name),d=ot.findNode(t,u.nodeName),p=jf[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let f=1,x=h.values.length/h.times.length;p===jf.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):h.getInterpolation()===Ai?m="STEP":m="LINEAR",o.push({input:this.processAccessor(new St(h.times,f)),output:this.processAccessor(new St(h.values,x)),interpolation:m}),a.push({sampler:o.length-1,target:{node:s.get(d),path:p}})}let l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],l=new Float32Array(r.bones.length*16),c=new je;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new St(l,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ni(o,[0,0,0,1])||(r.rotation=o),Ni(l,[0,0,0])||(r.translation=l),Ni(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),PM(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let a=t.nodes.push(r)-1;if(s.set(e,a),e.children.length>0){let o=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,s=this.nodeMap,r=e.pivot,a={},o=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();Ni(o,[0,0,0,1])||(a.rotation=o),Ni(l,[0,0,0])||(a.translation=l),Ni(c,[1,1,1])||(a.scale=c),a.extras={pivot:r.toArray()},e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a);let h=t.nodes.push(a)-1;s.set(e,h);let u={},d=[-r.x,-r.y,-r.z];if(Ni(d,[0,0,0])||(u.translation=d),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(u.mesh=x)}else e.isCamera&&(u.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let f=[t.nodes.push(u)-1];if(e.children.length>0){let x=[];for(let m=0,g=e.children.length;m<g;m++){let R=e.children[m];if(R.visible||n.onlyVisible===!1){let b=await this.processNodeAsync(R);b!==null&&x.push(b)}}x.length>0&&(u.children=x)}return a.children=f,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,a)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let a=0,o=e.children.length;a<o;a++){let l=e.children[a];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new ei;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof ei?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(e.length===1)for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);else for(let s=0;s<e.length;s++){let r=t.animations[s]||[];for(let a=0;a<r.length;++a)this.processAnimation(r[a],e[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},pu=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},fu=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},mu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},gu=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},xu=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Au=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},yu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Su=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Mu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(SM)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Tu=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},vu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Ru=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},bu=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Pu=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),l=new je,c=new I,h=new Kt,u=new I;for(let p=0;p<s.count;p++)s.getMatrixAt(p,l),l.decompose(c,h,u),c.toArray(r,p*3),h.toArray(a,p*4),u.toArray(o,p*3);let d={TRANSLATION:n.processAccessor(new St(r,3)),ROTATION:n.processAccessor(new St(a,4)),SCALE:n.processAccessor(new St(o,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};is.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n)),o;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r],o=ot.parseTrackName(a.name),l=ot.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(yi)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();let p=new u.ValueBufferType(c*u.times.length);for(let f=0;f<u.times.length;f++)p[f*c+h]=u.values[f];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[l.uuid]=u,t.push(u);continue}let d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*c+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){let f=this.insertKeyframe(u,a.times[p]);u.values[f*c+h]=a.values[p]}}return i.tracks=t,i},toTypedBufferAttribute:function(i,e){let t=new St(new e(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let n=0,s=i.count;n<s;n++)for(let r=0;r<i.itemSize;r++)t.setComponent(n,r,i.getComponent(n,r));return t}};function wu(i,e){if(e===Ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===vr||e===Ba){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===vr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function _f(i){let e=new Map,t=new Map,n=i.clone();return Zf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Zf(i.children[n],e.children[n],t)}var ac=class extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new oc(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new oc(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ui.extractUrlBase(e);a=Ui.resolveURL(c,this.path)}else a=Ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===em){try{a[et.KHR_BINARY_GLTF]=new _u(e)}catch(u){s&&s(u);return}r=JSON.parse(a[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new td(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:a[u]=new Nu;break;case et.KHR_DRACO_MESH_COMPRESSION:a[u]=new Zu(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:a[u]=new Qu;break;case et.KHR_MESH_QUANTIZATION:a[u]=new Ju;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function IM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ft(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cu=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ii(h),c.distance=u;break;case"spot":c=new va(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Nu=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(r,r)}return Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],rn),Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?un:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ju=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Wu=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Yu=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let f of u){let x=new je,m=new I,g=new Kt,R=new I(1,1,1),b=new xs(f.geometry,f.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&R.fromBufferAttribute(l.SCALE,T),b.setMatrixAt(T,x.compose(m,g,R));let S=null;for(let T in l)if(T==="_COLOR_0"){let v=l[T];b.instanceColor=new Ti(v.array,v.itemSize,v.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(S===null){let w=b.geometry;S=new Pt,S.name=w.name;for(let A in w.attributes)S.setAttribute(A,w.attributes[A]);for(let A in w.morphAttributes)S.morphAttributes[A]=w.morphAttributes[A];w.index!==null&&S.setIndex(w.index),S.morphTargetsRelative=w.morphTargetsRelative;for(let A of w.groups)S.addGroup(A.start,A.count,A.materialIndex);w.boundingBox!==null&&(S.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(S.boundingSphere=w.boundingSphere.clone()),S.drawRange.start=w.drawRange.start,S.drawRange.count=w.drawRange.count,S.userData=Object.assign({},w.userData),b.geometry=S}let v=l[T];S.setAttribute(T,new Ti(v.array,v.itemSize,v.normalized))}Rt.prototype.copy.call(b,f),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},em="glTF",Wa=12,Qf={JSON:1313821514,BIN:5130562},_u=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==em)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wa,r=new DataView(e,Wa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qf.JSON){let c=new Uint8Array(e,Wa+a,o);this.content=n.decode(c)}else if(l===Qf.BIN){let c=Wa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=$u[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=$u[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Ir[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let f in p.attributes){let x=p.attributes[f],m=l[f];m!==void 0&&(x.normalized=m)}u(p)},o,c,rn,d)})})}},Qu=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ju=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},lc=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,x=f-c,m=-2*p+3*d,g=p-d,R=1-m,b=g-d+u;for(let S=0;S!==o;S++){let T=a[x+S+o],v=a[x+S+l]*h,w=a[f+S+o],A=a[f+S]*h;r[S]=R*T+b*v+m*w+g*A}return r}},EM=new Kt,Xu=class extends lc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return EM.fromArray(r).normalize().toArray(r),r}},En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jf={9728:Ut,9729:It,9984:Sr,9985:es,9986:Ii,9987:Tn},Xf={33071:$t,33648:Jn,10497:yn},Uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CM={CUBICSPLINE:void 0,LINEAR:yi,STEP:Ai},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function Es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function HM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FM(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eu(t.attributes):e=i.indices+":"+Eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Eu(i.targets[n]);return e}function Eu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ed(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var LM=new je,td=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Sa(this.options.manager):this.textureLoader=new Ra(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Es(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ui.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Uu[s.type],o=Ir[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new St(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Uu[s.type],c=Ir[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,x,m;if(p&&p!==u){let g=Math.floor(d/p),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(R);b||(x=new c(o,g*p,s.count*p/h),b=new rr(x,p/h),t.cache.add(R,b)),m=new ar(b,l,d%p/h,f)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new St(x,l,f);if(s.sparse!==void 0){let g=Uu.SCALAR,R=Ir[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new R(a[1],b,s.sparse.count*g),v=new c(a[2],S,s.sparse.count*l);o!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=T.length;w<A;w++){let P=T[w];if(m.setX(P,v[w*l]),l>=2&&m.setY(P,v[w*l+1]),l>=3&&m.setZ(P,v[w*l+2]),l>=4&&m.setW(P,v[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Jf[d.magFilter]||It,h.minFilter=Jf[d.minFilter]||Tn,h.wrapS=Xf[d.wrapS]||yn,h.wrapT=Xf[d.wrapT]||yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==It,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(x){let m=new Et(x);m.needsUpdate=!0,d(m)}),t.load(Ui.resolveURL(u,r.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ci(u,a),u.userData.mimeType=a.mimeType||OM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new hr,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ki,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Wt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let u=s[et.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],rn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_t);let h=r.alphaMode||Iu.OPAQUE;if(h===Iu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Iu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Sn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Sn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Sn){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&a!==Sn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Es(s,u,r),u})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $f(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=FM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$f(new Pt,c,t),c.mode===En.TRIANGLE_STRIP?d=d.then(p=>wu(p,Ba)):c.mode===En.TRIANGLE_FAN&&(d=d.then(p=>wu(p,vr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?NM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let x=h[p],m=a[p],g,R=c[p];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,S=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&S?new na(x,R):new $e(x,R),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===En.LINES)g=new sa(x,R);else if(m.mode===En.LINE_STRIP)g=new vi(x,R);else if(m.mode===En.LINE_LOOP)g=new ra(x,R);else if(m.mode===En.POINTS)g=new aa(x,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&HM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ci(g,r),m.extensions&&Es(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Es(s,u[0],r),u[0];let d=new qt;r.extensions&&Es(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Ei.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new si(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ia(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],f=s.samplers[p.sampler],x=p.target,m=x.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,R=s.parameters!==void 0?s.parameters[f.output]:f.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",R)),c.push(f),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],x=u[3],m=u[4],g=[];for(let b=0,S=d.length;b<S;b++){let T=d[b],v=p[b],w=f[b],A=x[b],P=m[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let E=n._createAnimationTracks(T,v,w,A,P);if(E)for(let N=0;N<E.length;N++)g.push(E[N])}let R=new ya(r,void 0,g);return ci(R,s),R})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,LM)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,f=u[0];h.pivot=new I().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],f.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new or:c.length>1?h=new qt:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ci(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new qt;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Es(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(_f(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof on||d instanceof Et)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}ss[r.path]===ss.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ss[r.path]){case ss.weights:h=bi;break;case ss.rotation:h=Pi;break;case ss.translation:case ss.scale:h=Qi;break;default:n.itemSize===1?h=bi:h=Qi;break}let u=s.interpolation!==void 0?CM[s.interpolation]:yi,d=this._getArrayFromAccessor(n);for(let p=0,f=l.length;p<f;p++){let x=new h(l[p]+"."+ss[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ed(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Pi?Xu:lc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kM(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=ed(Ir[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let x=ed(Ir[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function $f(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=$u[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return _e.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_e.workingColorSpace}" not supported.`),ci(i,e),kM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?DM(i,e.targets,t):i})}var cc=class extends ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _i;e.deleteAttribute("uv");let t=new Wt({side:Yt}),n=new Wt,s=new ii(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new xs(e,n,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new $e(e,Er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new $e(e,Er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new $e(e,Er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new $e(e,Er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new $e(e,Er(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new $e(e,Er(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Er(i){return new xa({color:0,emissive:16777215,emissiveIntensity:i})}var Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VM=new si(-1,1,1,-1,0,1),nd=class extends Pt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},qM=new nd,rs=class{constructor(e){this._mesh=new $e(qM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hc=class extends bn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ci.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ya=class extends bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uc=class extends bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var dc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hc(Cr),this.copyPass.material.blending=In,this.timer=new ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ya!==void 0&&(a instanceof Ya?n=!0:a instanceof uc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pc=class extends bn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var tm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Nr=class i extends bn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:Zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Vt(r,a,{type:Zt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Vt(r,a,{type:Zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=tm;this.highPassUniforms=Ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ci.clone(Cr.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,premultipliedAlpha:!0,blending:wa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new Sn,this._fsQuad=new rs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Nr.BlurDirectionX=new ne(1,0);Nr.BlurDirectionY=new ne(0,1);var _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fc=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ci.clone(_a.uniforms),this.material=new mr({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_e.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ca&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var mc={light:"images/veneer-light.jpg",dark:"images/veneer-dark.jpg",ply:"images/veneer-ply.jpg"};var Rc = 26.5,
  Ja = 32.5,
  id = .75,
  Hs = .4,
  Fs = 2,
  Ac = ["Top", "Upper", "Middle", "Lower", "Bottom"],
  ud = [0, 1, 2, 3].map(i => Math.PI / 4 + i * Math.PI / 2),
  BM = 3,
  zM = 1.2,
  GM = .07,
  jM = 2048,
  KM = 256,
  WM = [{
    flipX: !1,
    flipY: !1,
    crop: 0
  }, {
    flipX: !1,
    flipY: !0,
    crop: .6
  }, {
    flipX: !0,
    flipY: !1,
    crop: .3
  }, {
    flipX: !0,
    flipY: !0,
    crop: .9
  }, {
    flipX: !1,
    flipY: !0,
    crop: .15
  }],
  am = i => ud[i] + Math.PI / 2,
  om = i => am(BM) - i.ov / i.r / 2,
  os = {
    light: {
      label: "Light",
      url: mc.light,
      cmH: 10.5,
      glow: 1,
      backlit: [1, .93, .78],
      rough: .7
    },
    dark: {
      label: "Dark",
      url: mc.dark,
      cmH: 9.8,
      glow: .4,
      backlit: [1, .8, .58],
      rough: .66
    }
  },
  dd = {
    original: {
      label: "Original",
      bands: ["light", "light", "dark", "light", "light"]
    },
    light: {
      label: "All light",
      bands: ["light", "light", "light", "light", "light"]
    },
    dark: {
      label: "All dark",
      bands: ["dark", "dark", "dark", "dark", "dark"]
    },
    bookends: {
      label: "Dark ends",
      bands: ["dark", "light", "light", "light", "dark"]
    },
    alternating: {
      label: "Alternating",
      bands: ["light", "dark", "light", "dark", "light"]
    }
  },
  lm = {
    birch: {
      label: "Birch",
      color: 16777215,
      map: !0,
      rough: .78
    },
    black: {
      label: "Black",
      color: 3814961,
      map: !0,
      rough: .7
    },
    white: {
      label: "White",
      color: 15724265,
      map: !1,
      rough: .6
    }
  },
  cm = {
    black: {
      label: "Black",
      color: 1842717
    },
    white: {
      label: "White",
      color: 15329507
    }
  },
  hm = {
    bands: [...dd.original.bands],
    lightOn: !0,
    brightness: .7,
    kelvin: 2700,
    room: "day",
    frame: "birch",
    hardware: "black",
    height: Rc,
    diameter: Ja,
    ply: 3,
    kerfPly: .15,
    kerfOpal: .15,
    marks: !0,
    serial: "",
    acrylic: 3,
    overlap: 20,
    veneer: .55,
    plySheet: "610x610",
    plySheetW: 61,
    plySheetH: 61,
    acrSheet: "375x600",
    acrSheetW: 37.5,
    acrSheetH: 60
  },
  gc = {
    height: [18, 40],
    diameter: [24, 46],
    kelvin: [2200, 4e3],
    brightness: [0, 1],
    ply: [2, 6],
    acrylic: [2, 8],
    overlap: [5, 50],
    veneer: [.2, 1.5],
    kerf: [0, .4],
    plySheetW: [10, 121.9],
    plySheetH: [10, 91.4],
    acrSheetW: [10, 121.9],
    acrSheetH: [10, 91.4]
  },
  Le = structuredClone(hm),
  Ct = {
    explode: 0,
    cutaway: !1,
    spin: !1,
    importing: !1,
    room: !1
  },
  YM = matchMedia("(prefers-reduced-motion: reduce)").matches,
  Xe = (i, e = document) => e.querySelector(i),
  ls = (i, e = document) => [...e.querySelectorAll(i)],
  cn = (i, e = 1) => (Math.round(i * 10 ** e) / 10 ** e).toFixed(e),
  Hi = (i, e, t) => Math.min(t, Math.max(e, i)),
  Cs = (i, e, t) => {
    let n = Hi((t - i) / (e - i), 0, 1);
    return n * n * (3 - 2 * n)
  };

function um(i) {
  let e = i.diameter / Ja,
    t = i.height - 2 * id,
    n = t / 25,
    s = x => x * e,
    r = x => x * n,
    a = t / 2,
    o = -t / 2,
    l = [13.1, 14.85, 16.25, 14.85, 13.1].map(s),
    c = [4.5, 9, 16, 20.5].map(r),
    h = r(1),
    u = {
      ribH: t,
      top: a,
      bot: o,
      tiers: l,
      steps: c,
      slit: h,
      slitW: Math.max(.12, (i.veneer + .4) / 10), // 1.2 mm, wider for veneer over 0.8 mm
      rIn: s(8.25),
      rSlot: s(11),
      rMid: s(11.2),
      yDisc: a - r(2),
      yRing: o + r(2),
      discR: s(11),
      holeR: 2,
      ledgeL: (i.veneer + .5) / 10, // ledge reach past the support edge: veneer + 0.5 mm
      ledgeE: .2, // ledge height, 2 mm
      ringIn: s(8.25),
      ply: i.ply / 10,
      opal: i.acrylic / 10,
      lockR: s(8.25 + .6 * 2.75) // support slot takes 60 % of the overlap, acrylic notch 40 %
    },
    d = x => a - x,
    p = c;
  u.bands = [{
    r: l[0],
    yTop: a + id,
    yBot: d(p[0] + h)
  }, {
    r: l[1],
    yTop: d(p[0]),
    yBot: d(p[1] + h)
  }, {
    r: l[2],
    yTop: d(p[1]),
    yBot: d(p[2])
  }, {
    r: l[3],
    yTop: d(p[2] - h),
    yBot: d(p[3])
  }, {
    r: l[4],
    yTop: d(p[3] - h),
    yBot: o - id
  }], u.bands.forEach(x => {
    x.h = x.yTop - x.yBot, x.ov = i.overlap / 10, x.vt = i.veneer / 10, x.len = 2 * Math.PI * (x.r + x.vt / 2) + x.ov // the band bends around its mid-thickness
  });
  let f = u.bands;
  return u.visible = [
    [f[0].yTop, f[1].yTop],
    [f[1].yTop, f[2].yTop],
    [f[2].yTop, f[2].yBot],
    [f[2].yBot, f[3].yBot],
    [f[3].yBot, f[4].yBot]
  ].map(([x, m]) => x - m), u.socketTop = u.yDisc + 1.2, u.socketBot = u.yDisc - 4.8, u.bulbY = u.socketBot - 1.4 - 2.6, u.canopyY = u.yDisc + 62, u
}

function dm(i) {
  let {
    top: e,
    bot: t,
    tiers: n,
    steps: s,
    slit: r,
    slitW: a,
    rIn: o,
    lockR: l,
    rMid: c,
    yDisc: h,
    yRing: u
  } = i, d = A => e - A, p = [], f = (A, P) => p.push(new ne(A, P));
  f(o, e), f(n[0], e), f(n[0], d(s[0] + r)), f(n[0] + a, d(s[0] + r)), f(n[0] + a, d(s[0])), f(n[1], d(s[0])), f(n[1], d(s[1] + r)), f(n[1] + a, d(s[1] + r)), f(n[1] + a, d(s[1])), f(n[2], d(s[1])), f(n[2], d(s[2])), f(n[2] + i.ledgeL, d(s[2])), f(n[2] + i.ledgeL, d(s[2] + i.ledgeE)), f(n[3] + a, d(s[2] + i.ledgeE)), f(n[3] + a, d(s[2] - r)), f(n[3], d(s[2] - r)), f(n[3], d(s[3])), f(n[4] + a, d(s[3])), f(n[4] + a, d(s[3] - r)), f(n[4], d(s[3] - r)), f(n[4], t), f(o, t);
  let x = i.opal / 2;
  f(o, u - x), f(l, u - x), f(l, u + x), f(o, u + x);
  let m = u + x,
    g = h - x,
    R = (m + g) / 2,
    b = (g - m) / 2,
    S = c - o,
    T = (b * b + S * S) / (2 * S),
    v = c - T,
    w = 56;
  for (let A = 1; A < w; A++) {
    let P = m + (g - m) * A / w,
      E = P - R;
    f(v + Math.sqrt(T * T - E * E), P)
  }
  return f(o, h - x), f(l, h - x), f(l, h + x), f(o, h + x), p
}
var yc = Xe("#stage"),
  pm = Xe("#c"),
  gn;
try {
  gn = new tc({
    canvas: pm,
    antialias: !0,
    preserveDrawingBuffer: !1
  })
} catch (i) {
  throw Xe("#webglError").hidden = !1, i
}
gn.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
gn.toneMapping = Ps;
gn.toneMappingExposure = 1;
gn.shadowMap.enabled = !0;
gn.shadowMap.type = Rs;
gn.localClippingEnabled = !0;
var Hn = new ei,
  mn = new kt(30, 1, .02, 30);
mn.position.set(.925, .14, .337);
var Nt = new rc(mn, pm);
Nt.target.set(0, -.005, 0);
Nt.enableDamping = !0;
Nt.dampingFactor = .08;
Nt.minDistance = .32;
Nt.maxDistance = 3.2;
Nt.autoRotateSpeed = 1.2;
Nt.update();
var _M = new wr(gn);
Hn.environment = _M.fromScene(new cc, .04).texture;
var fm = new Ma(16777215, 10135198, 1);
Hn.add(fm);
var Kn = new vs(16774374, 2);
Kn.position.set(1.2, 2.6, 1.6);
Kn.castShadow = !0;
Kn.shadow.mapSize.set(2048, 2048);
Object.assign(Kn.shadow.camera, {
  left: -.6,
  right: .6,
  top: .6,
  bottom: -.6,
  near: .5,
  far: 6
});
Kn.shadow.bias = -4e-4;
Kn.shadow.radius = 6;
Kn.target.position.set(0, -.6, 0);
Hn.add(Kn, Kn.target);
var Dn = new ii(16757867, 1, 0, 1);
Dn.castShadow = !0;
Dn.shadow.mapSize.set(1024, 1024);
Dn.shadow.camera.near = .034;
Dn.shadow.camera.far = 5;
Dn.shadow.bias = -.003;
Dn.shadow.radius = 3;
var Hr = new ii(16757867, .1, 0, 1);
Hn.add(Dn, Hr);

function ZM() {
  let n = document.createElement("canvas");
  n.width = 2160, n.height = 1440;
  let s = n.getContext("2d");
  s.fillStyle = "#c3cfc7", s.fillRect(0, 0, n.width, n.height);
  let r = 2.5 * 24,
    a = 2.5 * 24;
  for (let l = 0; l <= 86; l++) {
    let c = l % 5 === 0,
      h = Math.round(r + l * 24) + .5;
    s.strokeStyle = c ? "rgba(33,78,64,0.8)" : "rgba(33,78,64,0.4)", s.lineWidth = c ? 2.4 : 1.2, s.beginPath(), s.moveTo(h, a), s.lineTo(h, n.height - 24), s.stroke()
  }
  for (let l = 0; l <= 56; l++) {
    let c = l % 5 === 0,
      h = Math.round(a + l * 24) + .5;
    s.strokeStyle = c ? "rgba(33,78,64,0.8)" : "rgba(33,78,64,0.4)", s.lineWidth = c ? 2.4 : 1.2, s.beginPath(), s.moveTo(r, h), s.lineTo(n.width - 24, h), s.stroke()
  }
  s.fillStyle = "rgba(33,78,64,0.85)", s.font = `${24*.62}px sans-serif`, s.textAlign = "center", s.textBaseline = "middle";
  for (let l = 0; l <= 86; l++) s.fillText(String(l), r + l * 24, a - 24 * .9);
  s.textAlign = "right";
  for (let l = 0; l <= 56; l++) s.fillText(String(l), r - 24 * .4, a + l * 24);
  let o = new ur(n);
  return o.colorSpace = vt, o.anisotropy = gn.capabilities.getMaxAnisotropy(), o
}
var bc = new $e(new Zi(40, 40), new Wt({
  color: 13226443,
  roughness: .95
}));
bc.rotation.x = -Math.PI / 2;
bc.position.y = -.8;
bc.receiveShadow = !0;
var Xa = new $e(new Zi(.9, .6), new Wt({
  map: ZM(),
  roughness: .85
}));
Xa.rotation.x = -Math.PI / 2;
Xa.rotation.z = .12;
Xa.position.set(.04, -.7995, .02);
Xa.receiveShadow = !0;
Hn.add(bc, Xa);
var $a = new dc(gn);
$a.addPass(new pc(Hn, mn));
var ad = new Nr(new ne(512, 512), .2, .55, .9);
$a.addPass(ad);
$a.addPass(new fc);
var od = {},
  ld = {};

function QM(i) {
  return new Promise((e, t) => {
    let n = new Image;
    n.onload = () => e(n), n.onerror = t, n.src = i
  })
}

function JM(i, e = Jn) {
  let t = new Et(i);
  return t.colorSpace = vt, t.wrapS = yn, t.wrapT = e, t.anisotropy = gn.capabilities.getMaxAnisotropy(), t.userData.mimeType = "image/jpeg", t.needsUpdate = !0, t
}
var cd = new sn(new I(0, 0, -1), 0),
  mm = [];

function pd(i) {
  return mm.push(i), i
}

function XM(i) {
  return i.onBeforeCompile = e => {
    e.fragmentShader = e.fragmentShader.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
	totalEmissiveRadiance *= ( gl_FrontFacing ? 1.0 : 0.12 );`)
  }, i.customProgramCacheKey = () => "insideFaceDamp", i
}
var gm = [0, 1, 2, 3, 4].map(i => pd(XM(new Wt({
  name: `Veneer band ${i+1}`,
  side: _t,
  roughness: .7,
  metalness: 0
}))));

function xm() {
  let i = document.createElement("canvas");
  return i.width = jM, i.height = KM, i
}

function Am(i) {
  let e = new ur(i);
  return e.colorSpace = vt, e.wrapS = e.wrapT = $t, e.anisotropy = gn.capabilities.getMaxAnisotropy(), e.userData.mimeType = "image/jpeg", e
}
var fd = [0, 1, 2, 3, 4].map(xm),
  ym = [0, 1, 2, 3, 4].map(xm),
  Sm = fd.map(Am),
  Mm = ym.map(Am),
  as = pd(new Wt({
    name: "Support, plywood",
    roughness: .78
  })),
  Sc = pd(new Wt({
    name: "Opal acrylic",
    color: 15988211,
    roughness: .42,
    metalness: 0,
    transparent: !0,
    opacity: .84,
    side: _t
  })),
  Ns = new Wt({
    name: "Hardware",
    color: 1842717,
    roughness: .48,
    metalness: .05
  }),
  Fr = new Wt({
    name: "Bulb",
    color: 16052714,
    roughness: .2,
    metalness: 0
  }),
  $M = new Ki({
    color: 3112291,
    transparent: !0,
    opacity: .95,
    depthTest: !1
  }),
  hi = new qt;
hi.name = "Nordgrain veneer pendant";
hi.scale.setScalar(.01);
Hn.add(hi);
var Mc = new qt;
Mc.scale.setScalar(.01);
Hn.add(Mc);
var Tc = new qt;
Hn.add(Tc);
var Ue = um(Le),
  Cn = null;

function vc(i) {
  i.traverse(e => {
    e.geometry && e.geometry.dispose()
  }), i.clear()
}

function eT(i) {
  let e = i.r + i.vt / 2,
    t = 2 * Math.PI * i.r,
    n = t + i.ov,
    s = om(i),
    r = Math.ceil(n / .3),
    a = [],
    o = [],
    l = [],
    c = [];
  for (let u = 0; u < 2; u++) {
    let d = u === 0 ? i.yTop : i.yBot;
    for (let p = 0; p <= r; p++) {
      let f = n * p / r,
        x = s + f / i.r,
        m = e + i.vt * Cs(t - zM, t, f),
        g = Math.sin(x),
        R = Math.cos(x);
      a.push(g * m, d, R * m), o.push(g, 0, R), l.push(f / n, u === 0 ? 1 : 0)
    }
  }
  for (let u = 0; u < r; u++) {
    let d = u,
      p = u + 1,
      f = u + r + 1,
      x = u + r + 2;
    c.push(d, f, p, f, x, p)
  }
  let h = new Pt;
  return h.setAttribute("position", new pt(a, 3)), h.setAttribute("normal", new pt(o, 3)), h.setAttribute("uv", new pt(l, 2)), h.setIndex(c), h
}

function nm(i, e, t = 128) {
  let n = new Ss(notchedDiscPoints(i, Ue.ply / 2, Ue.lockR, ud, t, reliefR(Ue.ply * 10) / 10).map(([x, y]) => new ne(x, y)));
  let s = new ys;
  s.absarc(0, 0, e, 0, Math.PI * 2, !0), n.holes.push(s);
  let r = new fr(n, {
    depth: Ue.opal,
    bevelEnabled: !1,
    curveSegments: t
  });
  return r.rotateX(-Math.PI / 2), r.translate(0, -Ue.opal / 2, 0), r
}

function im(i, e) {
  let t = [];
  for (let n = 0; n <= 128; n++) {
    let s = n / 128 * Math.PI * 2;
    t.push(new I(Math.sin(s) * i, e, Math.cos(s) * i))
  }
  return new vi(new Pt().setFromPoints(t), $M)
}

function Pc() {
  Ue = um(Le), vc(hi), vc(Mc);
  let i = {
      bands: [],
      ribs: [],
      hover: []
    },
    e = new qt;
  e.name = "Veneer bands", Ue.bands.forEach((d, p) => {
    let f = new $e(eT(d), gm[p]);
    f.name = `Band ${p+1} (${Ac[p].toLowerCase()})`, f.castShadow = !0, e.add(f), i.bands.push(f);
    let x = new qt;
    x.add(im(d.r + .25, d.yTop), im(d.r + .25, d.yBot)), x.visible = !1, Mc.add(x), i.hover.push(x)
  });
  let t = new qt;
  t.name = "Supports";
  let n = new Ss(dm(Ue)),
    s = new fr(n, {
      depth: Ue.ply,
      bevelEnabled: !1,
      curveSegments: 1
    });
  s.translate(0, 0, -Ue.ply / 2), ud.forEach((d, p) => {
    let f = new $e(s, as);
    f.rotation.y = d, f.name = `Support ${p+1}`, f.castShadow = !0, f.receiveShadow = !0, t.add(f), i.ribs.push(f)
  });
  let r = new $e(nm(Ue.discR, Ue.holeR), Sc);
  r.name = "Opal disc (top)", r.position.y = Ue.yDisc, r.castShadow = !0, r.receiveShadow = !0;
  let a = new $e(nm(Ue.discR, Ue.ringIn), Sc);
  a.name = "Opal ring (bottom)", a.position.y = Ue.yRing, a.castShadow = !0, a.receiveShadow = !0, i.disc = r, i.ring = a;
  let o = new qt;
  o.name = "Socket and bulb";
  let l = (d, p, f, x, m, g, R = 40) => {
    let b = new $e(new As(d, p, f, R), m);
    return b.position.y = x, b.name = g, b.castShadow = m !== Fr, o.add(b), b
  };
  l(1.95, 1.95, Ue.socketTop - Ue.socketBot, (Ue.socketTop + Ue.socketBot) / 2, Ns, "Socket"), l(2.6, 2.6, .45, Ue.yDisc + Ue.opal / 2 + .225, Ns, "Socket ring, upper"), l(2.6, 2.6, .45, Ue.yDisc - Ue.opal / 2 - .225, Ns, "Socket ring, lower"), l(.9, 1.2, .8, Ue.socketTop + .4, Ns, "Strain relief"), l(1.6, 1.35, 1.4, Ue.socketBot - .7, Fr, "Bulb neck", 24);
  let c = new $e(new ga(3, 40, 24), Fr);
  c.position.y = Ue.bulbY, c.name = "Bulb", o.add(c);
  let h = new $e(new As(.32, .32, 1, 12), Ns);
  h.name = "Cable", h.castShadow = !0;
  let u = new $e(new As(4.2, 4.6, 2.6, 48), Ns);
  u.name = "Ceiling canopy", u.position.y = Ue.canopyY + 1.3, i.hw = o, i.cable = h, i.canopy = u, hi.add(e, t, r, a, o, h, u), Cn = i, vm(), Qa(), Wn(), md(), Ad(), xd(), roomPlace()
}

function tT(i) {
  let e = Ue.bands[i],
    t = os[Le.bands[i]],
    n = od[Le.bands[i]],
    s = WM[i],
    r = fd[i],
    a = r.getContext("2d"),
    o = Math.min(1, e.h / t.cmH),
    l = n.height * o,
    c = (n.height - l) * s.crop;
  a.save(), a.setTransform(s.flipX ? -1 : 1, 0, 0, s.flipY ? -1 : 1, s.flipX ? r.width : 0, s.flipY ? r.height : 0), a.drawImage(n, 0, c, n.width, l, 0, 0, r.width, r.height), a.restore(), Sm[i].needsUpdate = !0
}

function Tm(i) {
  tT(i);
  let e = Ue.bands[i],
    t = os[Le.bands[i]],
    n = ym[i],
    s = n.width,
    r = n.height,
    a = n.getContext("2d", {
      willReadFrequently: !0
    });
  a.drawImage(fd[i], 0, 0);
  let o = new Float32Array(r),
    l = Ue.bands.filter(R => R.r < e.r - .01);
  for (let R = 0; R < r; R++) {
    let b = e.yTop - (R + .5) / r * e.h,
      S = b - Ue.bulbY,
      T = Math.pow(e.r / Math.hypot(e.r, S), 3);
    T = Math.pow(T, .55);
    for (let v of l) {
      let w = Math.max(v.yBot, e.yBot),
        A = Math.min(v.yTop, e.yTop);
      A > w && (T *= 1 - .5 * Cs(w - .15, w + .15, b) * (1 - Cs(A - .15, A + .15, b)))
    }
    for (let [v, w] of [
        [Ue.yDisc, Ue.holeR],
        [Ue.yRing, Ue.ringIn]
      ]) {
      let A = (v - Ue.bulbY) / S;
      if (A > 0 && A < 1) {
        let P = e.r * A;
        T *= 1 - .5 * Cs(w - .3, w + .3, P) * (1 - Cs(Ue.discR - .3, Ue.discR + .3, P))
      }
    }
    o[R] = T
  }
  let c = new Float32Array(s),
    h = 2 * Math.PI * e.r,
    u = h + e.ov,
    d = om(e);
  for (let R = 0; R < s; R++) {
    let b = (R + .5) / s * u,
      S = d + b / e.r,
      T = 1;
    for (let w = 0; w < 4; w++) {
      let A = S - am(w);
      A = Math.atan2(Math.sin(A), Math.cos(A));
      let P = Math.abs(A) * e.r;
      T *= 1 - .42 * Math.exp(-((P / .32) ** 2)) - .16 * Math.exp(-((P / 1.5) ** 2))
    }
    let v = 1 - Cs(e.ov - .05, e.ov + .05, b) + Cs(h - .05, h + .05, b);
    T *= 1 - .3 * Math.min(1, v), c[R] = T
  }
  let p = a.getImageData(0, 0, s, r),
    f = p.data,
    [x, m, g] = t.backlit;
  for (let R = 0; R < r; R++) {
    let b = o[R];
    for (let S = 0; S < s; S++) {
      let T = Math.pow(b * c[S], .4545),
        v = (R * s + S) * 4;
      f[v] = f[v] * T * x, f[v + 1] = f[v + 1] * T * m, f[v + 2] = f[v + 2] * T * g
    }
  }
  a.putImageData(p, 0, 0), Mm[i].needsUpdate = !0
}

function vm() {
  for (let i = 0; i < 5; i++) Tm(i)
}

function nT(i) {
  let e = i / 100,
    t, n, s;
  return e <= 66 ? (t = 255, n = 99.4708025861 * Math.log(e) - 161.1195681661, s = e <= 19 ? 0 : 138.5177312231 * Math.log(e - 10) - 305.0447927307) : (t = 329.698727446 * Math.pow(e - 60, -.1332047592), n = 288.1221695283 * Math.pow(e - 60, -.0755148492), s = 255), new Re().setRGB(Hi(t, 0, 255) / 255, Hi(n, 0, 255) / 255, Hi(s, 0, 255) / 255, vt)
}
var Rm = {
  day: {
    bg: 14015959,
    hemi: 1.05,
    sun: 2.1,
    env: .75,
    exposure: 1,
    glow: .62,
    bulb: .55,
    bloom: .06,
    thr: 1.6
  },
  evening: {
    bg: 1251350,
    hemi: .04,
    sun: 0,
    env: .05,
    exposure: 1,
    glow: 1.5,
    bulb: .75,
    bloom: .32,
    thr: .9
  }
};

function Wn() {
  let i = Rm[Le.room],
    e = Le.lightOn && !Ct.importing,
    t = nT(Le.kelvin),
    n = Le.brightness,
    s = e ? i.glow * (.15 + n) : 0;
  Ue.bands.forEach((a, o) => {
    let l = Le.bands[o],
      c = os[l],
      h = gm[o];
    h.map = Sm[o], h.roughness = c.rough, h.emissiveMap = Mm[o], h.emissive.copy(t), h.emissiveIntensity = s * c.glow, h.name = `${c.label} veneer, band ${o+1}`, h.needsUpdate = !0
  });
  let r = lm[Le.frame];
  as.color.set(r.color), as.map = r.map ? ld.ply : null, as.roughness = r.rough, as.emissive.copy(t), as.emissiveIntensity = e ? (Le.frame === "black" ? .05 : .16) * i.glow * n : 0, as.name = `${r.label} support, ${cn(Le.ply)} mm plywood`, as.needsUpdate = !0, Sc.name = `Opal acrylic, ${cn(Le.acrylic)} mm`, Sc.emissive.copy(t), Sc.emissiveIntensity = e ? .5 * i.glow * (.15 + n) : 0, Ns.color.set(cm[Le.hardware].color), Fr.emissive.copy(t), Fr.emissiveIntensity = e ? 1.2 + 4 * n : 0, Fr.color.set(e ? 16777215 : 15855593), Dn.color.copy(t), Hr.color.copy(t), Dn.intensity = e ? i.bulb * (.08 + n * 1.1) : 0, Hr.intensity = e ? i.bulb * .06 * n : 0, Dn.visible = Dn.intensity > 0, Hr.visible = Hr.intensity > 0, Hn.background = new Re(i.bg), Hn.fog = new $r(i.bg, 3.2, 9), fm.intensity = i.hemi, Kn.intensity = i.sun, Kn.visible = i.sun > 0, Hn.environmentIntensity = i.env, gn.toneMappingExposure = i.exposure, ad.strength = e ? i.bloom : 0, ad.threshold = i.thr, yc.dataset.room = Le.room, roomSync()
}

function Qa() {
  if (!Cn) return;
  let i = Ct.explode;
  Cn.bands.forEach((s, r) => {
    s.position.y = (2 - r) * 7 * i
  }), Cn.hover.forEach((s, r) => {
    s.position.y = (2 - r) * 7 * i
  }), Cn.ribs.forEach((s, r) => {
    let a = ud[r];
    s.position.set(Math.cos(a) * 9 * i, 0, -Math.sin(a) * 9 * i)
  }), Cn.disc.position.y = Ue.yDisc + 22 * i, Cn.ring.position.y = Ue.yRing - 22 * i, Cn.hw.position.y = 22 * i;
  let e = Ue.socketTop + .8 + 22 * i,
    t = Ue.canopyY;
  Cn.cable.scale.y = Math.max(.01, t - e), Cn.cable.position.y = (e + t) / 2;
  let n = (Ue.bulbY + 22 * i) * .01;
  Dn.position.set(0, n, 0), Hr.position.set(0, n, 0)
}

function hd() {
  for (let i of mm) i.clippingPlanes = Ct.cutaway ? [cd] : [], i.needsUpdate = !0
}
var sd = Xe("#elev");

function md() {
  let e = 214 / Ue.visible.reduce((n, s) => n + s, 0),
    t = Math.max(...Ue.tiers);
  sd.innerHTML = "", Ue.bands.forEach((n, s) => {
    let r = Le.bands[s],
      a = document.createElement("div");
    a.className = "elev-row", a.style.height = `${Ue.visible[s]*e}px`;
    let o = document.createElement("button");
    o.type = "button", o.className = "band-chip", o.dataset.i = s, o.dataset.veneer = r, o.style.width = `${n.r/t*100}%`, o.style.backgroundImage = `url(${os[r].url})`;
    let l = r === "light" ? "dark" : "light";
    o.setAttribute("aria-label", `${Ac[s]} band, ${os[r].label.toLowerCase()} veneer. Switch to ${l}.`);
    let c = document.createElement("div");
    c.className = "chip-col", c.appendChild(o);
    let h = document.createElement("div");
    h.className = "band-label", h.innerHTML = `<span>${Ac[s]}</span><span class="band-veneer">${os[r].label}</span>`, a.append(c, h), sd.appendChild(a), o.addEventListener("click", () => {
      Le.bands[s] = l, Tm(s), Wn(), md(), Ad(), sm();
      let u = sd.querySelector(`[data-i="${s}"]`);
      u && u.focus(), Ds(s)
    }), o.addEventListener("pointerenter", () => Ds(s)), o.addEventListener("pointerleave", () => Ds(-1)), o.addEventListener("focus", () => Ds(s)), o.addEventListener("blur", () => Ds(-1))
  }), sm()
}

function Ds(i) {
  Cn && Cn.hover.forEach((e, t) => {
    e.visible = t === i && !Ct.importing
  })
}
var iT = Xe("#presets");
Object.entries(dd).forEach(([i, e]) => {
  let t = document.createElement("button");
  t.type = "button", t.className = "chip", t.dataset.preset = i, t.textContent = e.label, t.addEventListener("click", () => {
    Le.bands = [...e.bands], vm(), Wn(), md(), Ad()
  }), iT.appendChild(t)
});

function sm() {
  ls("#presets .chip").forEach(i => {
    let e = dd[i.dataset.preset].bands;
    i.setAttribute("aria-pressed", String(e.every((t, n) => t === Le.bands[n])))
  })
}

function gd(i, e, t) {
  let n = Xe(i),
    s = () => ls("button", n).forEach(r => r.setAttribute("aria-pressed", String(r.dataset.value === Le[e])));
  return ls("button", n).forEach(r => r.addEventListener("click", () => {
    Le[e] = r.dataset.value, s(), t()
  })), s(), s
}
var sT = gd("#room", "room", Wn),
  rT = gd("#frame", "frame", Wn),
  aT = gd("#hardware", "hardware", Wn),
  bm = Xe("#lightOn");

function eo() {
  bm.setAttribute("aria-checked", String(Le.lightOn)), Xe("#lightState").textContent = Le.lightOn ? "On" : "Off", Xe("#brightness").value = Le.brightness, Xe("#brightnessOut").textContent = `${Math.round(Le.brightness*100)}%`, Xe("#kelvin").value = Le.kelvin, Xe("#kelvinOut").textContent = `${Le.kelvin} K`, Xe("#lightControls").classList.toggle("is-off", !Le.lightOn)
}
bm.addEventListener("click", () => {
  Le.lightOn = !Le.lightOn, eo(), Wn()
});
Xe("#brightness").addEventListener("input", i => {
  Le.brightness = +i.target.value, eo(), Wn()
});
Xe("#kelvin").addEventListener("input", i => {
  Le.kelvin = +i.target.value, eo(), Wn()
});
var rd = !1;

function Pm() {
  rd || (rd = !0, requestAnimationFrame(() => {
    rd = !1, Pc()
  }))
}
Xe("#height").addEventListener("input", i => {
  Le.height = +i.target.value, xd(), syncLaser(), Pm()
});
Xe("#diameter").addEventListener("input", i => {
  Le.diameter = +i.target.value, xd(), syncLaser(), Pm()
});
Xe("#resetSize").addEventListener("click", () => {
  Le.height = Rc, Le.diameter = Ja, Pc()
});

function xd() {
  Xe("#height").value = Le.height, Xe("#diameter").value = Le.diameter, Xe("#heightOut").textContent = `${cn(Le.height)} cm`, Xe("#diameterOut").textContent = `${cn(Le.diameter)} cm`, Xe("#dimLine").textContent = `${cn(Le.diameter)} cm wide, ${cn(Le.height)} cm high`, Xe("#resetSize").disabled = Le.height === Rc && Le.diameter === Ja
}

function Ad() {
  let i = [];
  Ue.bands.forEach((s, r) => {
    i.push([`${Ac[r]} band, ${os[Le.bands[r]].label.toLowerCase()} veneer`, "1", `${cn(s.len)} \xD7 ${cn(s.h)} cm`])
  }), i.push([`Support, ${cn(Le.ply)} mm plywood`, "4", `${cn(Ue.ribH)} \xD7 ${cn(Ue.tiers[2]+Ue.ledgeL-Ue.rIn)} cm`]), i.push([`Opal disc, ${cn(Le.acrylic)} mm acrylic`, "1", `\xD8 ${cn(Ue.discR*2)}, hole \xD8 ${cn(Ue.holeR*2)} cm`]), i.push([`Opal ring, ${cn(Le.acrylic)} mm acrylic`, "1", `\xD8 ${cn(Ue.discR*2)} / ${cn(Ue.ringIn*2)} cm`]);
  let e = Xe("#cutList tbody");
  e.innerHTML = i.map(s => `<tr><th scope="row">${s[0]}</th><td>${s[1]}</td><td>${s[2]}</td></tr>`).join("");
  let t = {
    light: 0,
    dark: 0
  };
  Ue.bands.forEach((s, r) => {
    t[Le.bands[r]] += s.len
  });
  let n = [];
  t.light && n.push(`${cn(t.light/100,2)} m of light`), t.dark && n.push(`${cn(t.dark/100,2)} m of dark`), Xe("#veneerTotal").textContent = `Veneer strip needed: ${n.join(" and ")}, including a ${Le.overlap} mm glued overlap per band.`, syncLaser()
}
var oT = {
    front: {
      pos: [.925, .14, .337],
      target: [0, -.005, 0]
    },
    below: {
      pos: [.395, -.82, .144],
      target: [0, 0, 0]
    },
    above: {
      pos: [.423, .86, .154],
      target: [0, -.02, 0]
    },
    room: {
      pos: [2.75, -.12, 1.3],
      target: [0, -.48, 0]
    }
  },
  Nn = null;

function yd(i) {
  ls("#views button").forEach(l => l.setAttribute("aria-pressed", String(l.dataset.view === i)));
  let e = oT[i],
    t = i === "room" ? 1 : cT(),
    n = new I(...e.target),
    s = new I(...e.pos).multiplyScalar(t);
  if (YM) {
    mn.position.copy(s), Nt.target.copy(n), Nt.update();
    return
  }
  let r = new ri().setFromVector3(mn.position.clone().sub(Nt.target)),
    a = new ri().setFromVector3(s.clone().sub(n)),
    o = a.theta - r.theta;
  o = Math.atan2(Math.sin(o), Math.cos(o)), Nn = {
    t0: performance.now(),
    dur: 750,
    s0: r,
    s1: a,
    dTheta: o,
    tgt0: Nt.target.clone(),
    tgt1: n
  }
}

function lT(i) {
  if (!Nn) return;
  let e = Hi((i - Nn.t0) / Nn.dur, 0, 1),
    t = e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    {
      s0: n,
      s1: s
    } = Nn,
    r = new ri(n.radius + (s.radius - n.radius) * t, n.phi + (s.phi - n.phi) * t, n.theta + Nn.dTheta * t);
  Nt.target.lerpVectors(Nn.tgt0, Nn.tgt1, t), mn.position.copy(Nt.target).add(new I().setFromSpherical(r)), e >= 1 && (Nn = null)
}

function cT() {
  return Math.max(Le.diameter / Ja, Le.height / Rc) * (1 + Ct.explode * .9)
}
ls("#views button").forEach(i => i.addEventListener("click", () => yd(i.dataset.view)));
Nt.addEventListener("start", () => {
  Nn = null, ls("#views button").forEach(i => i.setAttribute("aria-pressed", "false"))
});
Xe("#cutaway").addEventListener("change", i => {
  Ct.cutaway = i.target.checked, hd()
});
Xe("#spin").addEventListener("change", i => {
  Ct.spin = i.target.checked, Nt.autoRotate = Ct.spin
});
Xe("#explode").addEventListener("input", i => {
  let e = 1 + Ct.explode * .9;
  Ct.explode = +i.target.value;
  let t = 1 + Ct.explode * .9;
  if (!Ct.importing)
    if (Nn) Nn.s1.radius *= t / e;
    else {
      let n = mn.position.clone().sub(Nt.target).multiplyScalar(t / e);
      mn.position.copy(Nt.target).add(n)
    } Qa()
});
var rm;

function Di(i, e = "ok") {
  let t = Xe("#toast");
  t.textContent = i, t.dataset.kind = e, t.classList.add("show"), clearTimeout(rm), rm = setTimeout(() => t.classList.remove("show"), e === "error" ? 6e3 : 3200)
}

function wm() {
  return `nordgrain-veneer-pendant-${Math.round(Le.diameter*10)}x${Math.round(Le.height*10)}mm`
}

function Um(i, e) {
  let t = URL.createObjectURL(i),
    n = document.createElement("a");
  n.href = t, n.download = e, document.body.appendChild(n), n.click(), n.remove(), setTimeout(() => URL.revokeObjectURL(t), 4e3)
}

function Im(i) {
  Ct.importing && wc();
  let e = Ct.explode;
  Ct.explode = 0, Qa(), hi.userData = {
    lampConfig: structuredClone(Le),
    generator: "Nordgrain veneer pendant configurator",
    units: "metres"
  }, hi.updateMatrixWorld(!0);
  let t = ls("[data-export]");
  t.forEach(s => s.disabled = !0);
  let n = () => {
    Ct.explode = e, Qa(), t.forEach(s => s.disabled = !1)
  };
  new is().parse(hi, s => {
    let r = `${wm()}.${i?"glb":"gltf"}`,
      a = i ? new Blob([s], {
        type: "model/gltf-binary"
      }) : new Blob([JSON.stringify(s)], {
        type: "model/gltf+json"
      });
    Um(a, r), n(), Di(`Downloaded ${r}`)
  }, s => {
    n(), console.error(s), Di("Export failed. Try the other format, or reload the page and export again.", "error")
  }, {
    binary: i,
    onlyVisible: !0,
    maxTextureSize: 2048
  })
}
ls("[data-export]").forEach(i => i.addEventListener("click", () => Im(i.dataset.export === "glb")));

function hT(i) {
  let e = structuredClone(hm);
  return !i || typeof i != "object" || (Array.isArray(i.bands) && i.bands.length === 5 && (e.bands = i.bands.map(t => t in os ? t : "light")), typeof i.lightOn == "boolean" && (e.lightOn = i.lightOn), Number.isFinite(i.brightness) && (e.brightness = Hi(i.brightness, ...gc.brightness)), Number.isFinite(i.kelvin) && (e.kelvin = Math.round(Hi(i.kelvin, ...gc.kelvin) / 50) * 50), i.room in Rm && (e.room = i.room), i.frame in lm && (e.frame = i.frame), i.hardware in cm && (e.hardware = i.hardware), Number.isFinite(i.height) && (e.height = Math.round(Hi(i.height, ...gc.height) * 2) / 2), Number.isFinite(i.diameter) && (e.diameter = Math.round(Hi(i.diameter, ...gc.diameter) * 2) / 2), Number.isFinite(i.ply) && (e.ply = Math.round(Hi(i.ply, ...gc.ply) * 10) / 10), Number.isFinite(i.kerfPly) && (e.kerfPly = Math.round(Hi(i.kerfPly, ...gc.kerf) * 100) / 100), Number.isFinite(i.kerfOpal) && (e.kerfOpal = Math.round(Hi(i.kerfOpal, ...gc.kerf) * 100) / 100), typeof i.marks == "boolean" && (e.marks = i.marks), Number.isFinite(i.acrylic) && (e.acrylic = Math.round(Hi(i.acrylic, ...gc.acrylic) * 10) / 10), Number.isFinite(i.overlap) && (e.overlap = Math.round(Hi(i.overlap, ...gc.overlap))), Number.isFinite(i.veneer) && (e.veneer = Math.round(Hi(i.veneer, ...gc.veneer) * 100) / 100), Object.entries(SHEET_KEYS).forEach(([mat, k]) => {
    i[k + "Sheet"] in SHEETS[mat] && (e[k + "Sheet"] = i[k + "Sheet"]), ["W", "H"].forEach(d => Number.isFinite(i[k + "Sheet" + d]) && (e[k + "Sheet" + d] = Math.round(Hi(i[k + "Sheet" + d], ...gc[k + "Sheet" + d]) * 10) / 10))
  }), e.serial = laserCleanSerial(i.serial)), e.serial || (e.serial = Le.serial || laserNewSerial()), e
}

function Em(i) {
  Le = hT(i), sT(), rT(), aT(), eo(), Pc()
}

function wc() {
  vc(Tc), Ct.importing = !1, hi.visible = !0, Xe("#importNote").hidden = !0, Wn(), yd(Ct.room ? "room" : "front")
}

function uT(i, e) {
  vc(Tc), Tc.add(i), i.traverse(o => {
    o.isMesh && (o.castShadow = !0, o.receiveShadow = !0)
  }), Ct.importing = !0, hi.visible = !1, Ds(-1), Wn();
  let t = new an().setFromObject(i),
    n = t.getSize(new I),
    s = t.getCenter(new I),
    r = Math.max(n.x, n.y, n.z) || .3,
    a = new I(.925, .18, .337).normalize();
  Nt.target.copy(s), mn.position.copy(s).addScaledVector(a, r * 2.4), Nt.maxDistance = Math.max(3.2, r * 8), Nt.update(), Xe("#importName").textContent = e, Xe("#importNote").hidden = !1
}

function Cm(i) {
  if (!i) return;
  if (!/\.(glb|gltf|glf)$/i.test(i.name)) {
    Di(`${i.name} isn't a glTF model. Choose a .glb or .gltf file.`, "error");
    return
  }
  let e = new FileReader,
    t = n => {
      console.error(n);
      let s = /external|uri|fetch|load/i.test(String(n && n.message)) ? `${i.name} links to files that weren't uploaded. Use a .glb or a .gltf with embedded data.` : `${i.name} couldn't be read as glTF. Check that the file isn't damaged.`;
      Di(s, "error")
    };
  e.onload = () => {
    try {
      new ac().parse(e.result, "", n => {
        let s = null;
        n.scene.traverse(r => {
          !s && r.userData && r.userData.lampConfig && (s = r.userData.lampConfig)
        }), s ? (Ct.importing && wc(), Em(s), Di(`Loaded settings from ${i.name}`)) : (uT(n.scene, i.name), Di(`Opened ${i.name}. It wasn't made here, so it is shown as a model only.`))
      }, t)
    } catch (n) {
      t(n)
    }
  }, e.onerror = () => Di(`${i.name} couldn't be read from disk.`, "error"), e.readAsArrayBuffer(i)
}
var xc = Xe("#fileInput");
Xe("#openModel").addEventListener("click", () => xc.click());
xc.addEventListener("change", () => {
  Cm(xc.files[0]), xc.value = ""
});
Xe("#backToLamp").addEventListener("click", wc);
["click", "input"].forEach(i => Xe(".panel").addEventListener(i, e => {
  Ct.importing && e.target.closest("button, input") && !e.target.closest("#fileSection") && wc()
}, !0));
var Sd = Xe("#dropzone"),
  Za = 0;
window.addEventListener("dragenter", i => {
  [...i.dataTransfer?.types || []].includes("Files") && (Za++, Sd.hidden = !1)
});
window.addEventListener("dragleave", () => {
  Za = Math.max(0, Za - 1), Za || (Sd.hidden = !0)
});
window.addEventListener("dragover", i => i.preventDefault());
window.addEventListener("drop", i => {
  i.preventDefault(), Za = 0, Sd.hidden = !0;
  let e = i.dataTransfer?.files?.[0];
  e && Cm(e)
});

/* =====================================================================
   Dining room view
   ---------------------------------------------------------------------
   A simple room built from boxes and planes, using the veneer photos
   already in the file for the plank floor and the walnut table top.
   Scene units are metres. The ceiling sits at the top of the canopy,
   so the room follows the lamp size; the floor is 2.5 m below it and
   the table top 74 cm above the floor. All room surfaces face inward,
   so from outside (for example the Above view) you look in, like a
   dolls' house.
   ===================================================================== */
var ROOM = {
    height: 2.5,
    x0: -2.2, // wall behind the lamp in the front view, with the window
    x1: 3.4,
    z0: -2.5,
    z1: 3.1,
    tableH: .74
  },
  roomGroup = null,
  roomGlass = null;

function roomCeilingY() {
  return (Ue.canopyY + 2.6) / 100
}

// Plank texture: rows of boards cut at random from a veneer photo, with darker joints.
function roomWood(img, rows, w = 2048, h = 2048) {
  let c = document.createElement("canvas");
  c.width = w, c.height = h;
  let g = c.getContext("2d"),
    rh = h / rows;
  for (let r = 0; r < rows; r++) {
    for (let x = -Math.random() * w * .5; x < w;) {
      let len = w * (.3 + Math.random() * .45),
        sw = img.width * .6,
        sh = img.height * .55;
      g.drawImage(img, Math.random() * (img.width - sw), Math.random() * (img.height - sh), sw, sh, x, r * rh, len, rh);
      g.fillStyle = Math.random() < .5 ? `rgba(0,0,0,${(Math.random() * .1).toFixed(3)})` : `rgba(255,255,255,${(Math.random() * .06).toFixed(3)})`;
      g.fillRect(x, r * rh, len, rh);
      g.fillStyle = "rgba(40,25,15,.35)", g.fillRect(x, r * rh, 2, rh), x += len
    }
    g.fillStyle = "rgba(40,25,15,.4)", g.fillRect(0, r * rh, w, 2)
  }
  let t = new ur(c);
  return t.colorSpace = vt, t.wrapS = t.wrapT = yn, t.anisotropy = gn.capabilities.getMaxAnisotropy(), t
}

function roomBuild() {
  let g = new qt,
    H = ROOM.height,
    W = ROOM.x1 - ROOM.x0,
    D = ROOM.z1 - ROOM.z0,
    cx = (ROOM.x0 + ROOM.x1) / 2,
    mat = (color, roughness = .9) => new Wt({
      color,
      roughness,
      metalness: 0
    }),
    add = (geo, m, x, y, z, cast = !1, parent = g) => {
      let o = new $e(geo, m);
      return o.position.set(x, y, z), o.castShadow = cast, o.receiveShadow = !0, parent.add(o), o
    };
  g.name = "Dining room";

  // floor, ceiling and four walls
  let floor = mat(16777215, .6);
  if (od.light) {
    let t = roomWood(od.light, 10);
    t.repeat.set(W / 2, D / 2), floor.map = t
  } else floor.color.set(13149562);
  add(new Zi(W, D), floor, cx, -H, 0).rotation.x = -Math.PI / 2;
  add(new Zi(W, D), mat(15987180, .95), cx, 0, 0).rotation.x = Math.PI / 2;
  let wall = mat(15263964, .92);
  add(new Zi(D, H), wall, ROOM.x0, -H / 2, 0).rotation.y = Math.PI / 2;
  add(new Zi(D, H), wall, ROOM.x1, -H / 2, 0).rotation.y = -Math.PI / 2;
  add(new Zi(W, H), wall, cx, -H / 2, ROOM.z0);
  add(new Zi(W, H), wall, cx, -H / 2, ROOM.z1).rotation.y = Math.PI;

  // skirting boards
  let sk = mat(14473166, .7),
    sh = .08,
    st = .015;
  add(new _i(st, sh, D), sk, ROOM.x0 + st / 2, -H + sh / 2, 0), add(new _i(st, sh, D), sk, ROOM.x1 - st / 2, -H + sh / 2, 0), add(new _i(W, sh, st), sk, cx, -H + sh / 2, ROOM.z0 + st / 2), add(new _i(W, sh, st), sk, cx, -H + sh / 2, ROOM.z1 - st / 2);

  // window in the back wall: glowing pane, frame, mullion and sill
  let wz = -1.15,
    ww = 1.25,
    wh = 1.45,
    wy = -H + .85 + wh / 2,
    fr = mat(15921901, .5),
    ft = .05,
    fd = .06;
  roomGlass = new Wt({
    color: 0,
    roughness: 1,
    emissive: 15266294,
    emissiveIntensity: 1
  });
  add(new Zi(ww, wh), roomGlass, ROOM.x0 + .004, wy, wz).rotation.y = Math.PI / 2;
  add(new _i(fd, ft, ww + 2 * ft), fr, ROOM.x0 + fd / 2, wy + wh / 2 + ft / 2, wz), add(new _i(fd, ft, ww + 2 * ft), fr, ROOM.x0 + fd / 2, wy - wh / 2 - ft / 2, wz), add(new _i(fd, wh, ft), fr, ROOM.x0 + fd / 2, wy, wz - ww / 2 - ft / 2), add(new _i(fd, wh, ft), fr, ROOM.x0 + fd / 2, wy, wz + ww / 2 + ft / 2), add(new _i(fd * .8, wh, .03), fr, ROOM.x0 + fd * .4, wy, wz), add(new _i(.2, .03, ww + .2), fr, ROOM.x0 + .1, wy - wh / 2 - ft - .015, wz);

  // rug
  add(new Zi(2.1, 2.9), mat(11121573, 1), 0, -H + .004, 0).rotation.x = -Math.PI / 2;

  // table: walnut top 0.95 x 1.9 m, 74 cm high, under the lamp
  let top = mat(11770764, .5); // tint the veneer photo towards walnut
  if (od.dark) {
    let t = roomWood(od.dark, 5, 2048, 1024);
    t.center.set(.5, .5), t.rotation = Math.PI / 2, top.map = t
  } else top.color.set(7029296);
  let tt = .035,
    ty = -H + ROOM.tableH,
    legH = ROOM.tableH - tt,
    legM = mat(5913384, .55);
  add(new _i(.95, tt, 1.9), top, 0, ty - tt / 2, 0, !0);
  for (let sx of [-1, 1])
    for (let sz of [-1, 1]) add(new _i(.05, legH, .05), legM, sx * .38, -H + legH / 2, sz * .82, !0);

  // a ceramic bowl on the table
  add(new As(.13, .075, .07, 48), mat(15724527, .35), 0, ty + .035, .32, !0);

  // four chairs, facing the table
  let ch = mat(2763305, .55);
  for (let sx of [-1, 1])
    for (let sz of [-1, 1]) {
      let c = new qt;
      c.position.set(sx * .62, -H, sz * .45), c.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2, g.add(c);
      add(new _i(.44, .03, .42), ch, 0, .45, 0, !0, c);
      for (let lx of [-1, 1])
        for (let lz of [-1, 1]) add(new _i(.03, lz > 0 ? .84 : .44, .03), ch, lx * .195, (lz > 0 ? .84 : .44) / 2, lz * .185, !0, c);
      add(new _i(.42, .13, .02), ch, 0, .72, .19, !0, c)
    }
  return g
}

// Place the room under the canopy; called whenever the lamp is rebuilt.
function roomPlace() {
  roomGroup && roomGroup.position.set(0, roomCeilingY(), 0)
}

// Called at the end of the lighting update: window glow follows Daylight / Evening, and in
// the evening the lamp gets a soft unshadowed fill that stands in for light bounced off the room.
function roomSync() {
  if (!roomGlass || !Ct.room) return;
  let eve = Le.room === "evening";
  roomGlass.emissive.set(eve ? 1056294 : 15332854), roomGlass.emissiveIntensity = eve ? .9 : 1.15;
  eve && Le.lightOn && !Ct.importing && (Hr.intensity += .3 * Le.brightness, Hr.visible = !0)
}

function roomApply() {
  let on = Ct.room;
  on && !roomGroup && (roomGroup = roomBuild(), Hn.add(roomGroup)), roomGroup && (roomGroup.visible = on), bc.visible = Xa.visible = !on;
  // the sun's shadow has to cover the table and chairs
  let r = on ? 1.6 : .6;
  Object.assign(Kn.shadow.camera, {
    left: -r,
    right: r,
    top: r,
    bottom: -r,
    far: on ? 8 : 6
  }), Kn.shadow.camera.updateProjectionMatrix(), Nt.maxDistance = on ? 3 : 3.2, roomPlace(), Wn()
}
Xe("#roomView").addEventListener("change", i => {
  Ct.room = i.target.checked, roomApply(), Ct.importing || yd(Ct.room ? "room" : "front")
});

/* =====================================================================
   Laser cutting files for the Epilog Fusion Pro 48
   ---------------------------------------------------------------------
   All units in this block are millimetres.

   Joints: each plywood support has a horizontal slot (opal thickness
   high) running in from its inner edge, and the opal disc and ring have
   a radial notch (plywood thickness wide) running in from their outer
   edge. Slot and notch each take half of the overlap, so the parts
   cross-lock: the support can't twist or slide sideways on the disc.

   Kerf: every cut outline is offset by half the kerf away from the
   part material, so finished parts, slots and notches come out at
   their nominal size.

   Cut lines: fill none, 0.01 mm stroke.  Engraving: text converted to
   filled outlines with no stroke.
   ===================================================================== */
var LASER = {
  bedW: 1219.2, // Fusion Pro 48 work area, 48 x 36 in
  bedH: 914.4,
  margin: 6, // keep-out from the sheet edge
  gap: 6, // between neighbouring parts
  sheetGap: 60, // between sheets in the combined file
  cutColor: "#FF0000", // vector cut lines
  cutWidth: 0.01,
  engraveColor: "#000000", // raster engraving
  fitOverlap: 20 // joint overlap on the fit-test pieces, split like the real joint
};

/* Stock sheet sizes, mm, as width x height on the bed. "custom" uses the size entered in cm. */
var SHEETS = {
  plywood: {
    bed: { label: "Laser bed, 121.9 \xD7 91.4 cm", w: 1219.2, h: 914.4 },
    "610x610": { label: "61 \xD7 61 cm (24 \xD7 24 in)", w: 609.6, h: 609.6 },
    "610x457": { label: "61 \xD7 45.7 cm (24 \xD7 18 in)", w: 609.6, h: 457.2 },
    "610x305": { label: "61 \xD7 30.5 cm (24 \xD7 12 in)", w: 609.6, h: 304.8 },
    "305x610": { label: "30.5 \xD7 61 cm (12 \xD7 24 in)", w: 304.8, h: 609.6 },
    "305x305": { label: "30.5 \xD7 30.5 cm (12 \xD7 12 in)", w: 304.8, h: 304.8 },
    "600x600": { label: "60 \xD7 60 cm", w: 600, h: 600 },
    "600x400": { label: "60 \xD7 40 cm", w: 600, h: 400 },
    "600x300": { label: "60 \xD7 30 cm", w: 600, h: 300 },
    custom: { label: "Custom size" }
  },
  acrylic: {
    "375x600": { label: "37.5 \xD7 60 cm", w: 375, h: 600 },
    "500x600": { label: "50 \xD7 60 cm", w: 500, h: 600 },
    "600x600": { label: "60 \xD7 60 cm", w: 600, h: 600 },
    "610x610": { label: "61 \xD7 61 cm (24 \xD7 24 in)", w: 609.6, h: 609.6 },
    "600x800": { label: "60 \xD7 80 cm", w: 600, h: 800 },
    bed: { label: "Laser bed, 121.9 \xD7 91.4 cm", w: 1219.2, h: 914.4 },
    custom: { label: "Custom size" }
  }
};
// config keys per material: plySheet / plySheetW / plySheetH and acrSheet / acrSheetW / acrSheetH
var SHEET_KEYS = {
  plywood: "ply",
  acrylic: "acr"
};

function sheetSize(mat, cfg = Le) {
  let k = SHEET_KEYS[mat],
    key = cfg[k + "Sheet"],
    s = SHEETS[mat][key] || Object.values(SHEETS[mat]).find(v => v.w);
  return key === "custom" ? {
    w: cfg[k + "SheetW"] * 10,
    h: cfg[k + "SheetH"] * 10
  } : {
    w: s.w,
    h: s.h
  }
}


/* Familjen Grotesk Medium outlines (SIL Open Font License), font units, y up */
var LASER_FONT = {"upm":1200,"cap":780,"adv":{" ":240,"!":345,"\"":540,"#":720,"$":680,"%":1020,"&":834,"'":300,"(":420,")":420,"*":465,"+":680,",":270,"-":360,".":270,"/":420,"0":680,"1":680,"2":680,"3":680,"4":680,"5":680,"6":680,"7":680,"8":680,"9":680,":":345,";":345,"<":680,"=":680,">":680,"?":585,"@":1005,"A":735,"B":715,"C":745,"D":775,"E":655,"F":620,"G":785,"H":810,"I":310,"J":313,"K":725,"L":600,"M":1050,"N":840,"O":795,"P":705,"Q":795,"R":715,"S":690,"T":690,"U":790,"V":735,"W":1095,"X":730,"Y":660,"Z":710,"[":420,"\\":410,"]":420,"^":680,"_":720,"`":600,"a":675,"b":675,"c":605,"d":675,"e":620,"f":375,"g":665,"h":665,"i":295,"j":295,"k":630,"l":297,"m":1000,"n":665,"o":645,"p":675,"q":675,"r":445,"s":555,"t":375,"u":665,"v":595,"w":940,"x":590,"y":585,"z":560,"{":420,"|":360,"}":420,"~":680,"×":680,"Ø":795,"°":510,"–":720,"—":1080,"’":270,"ä":675,"ö":645,"å":675,"Ä":735,"Ö":795,"Å":735,"é":620,"ø":645,"·":270},"d":{"!":"M115 255L100 750L100 780L245 780L245 750L230 255ZM173 -6Q135 -6 114 16Q93 37 93 73Q93 109 114 130Q135 151 173 151Q211 151 232 130Q252 109 252 73Q252 37 232 16Q211 -6 173 -6Z","\"":"M102 480L87 750L87 780L213 780L213 750L198 480ZM342 480L327 750L327 780L453 780L453 750L438 480Z","#":"M109 0L143 206L45 206L62 312L160 312L191 489L92 489L109 594L208 594L239 780L351 780L320 594L468 594L499 780L611 780L580 594L675 594L658 489L563 489L532 312L629 312L611 206L515 206L481 0L369 0L403 206L256 206L221 0ZM267 307L424 307L457 493L299 493Z","$":"M296 -120L296 900L385 900L385 -120ZM355 -15Q273 -15 214 8Q155 31 116 70Q78 108 58 157Q39 206 35 258L167 258Q170 217 192 179Q213 141 254 117Q296 93 359 93Q428 93 464 123Q500 153 500 204Q500 253 466 282Q432 310 379 328L287 360Q232 379 181 404Q130 430 98 473Q66 516 66 584Q66 652 100 699Q134 746 194 770Q253 795 331 795Q429 795 488 762Q548 728 576 674Q605 621 610 560L478 560Q476 593 460 622Q445 651 412 670Q380 688 326 688Q266 688 234 662Q201 637 201 594Q201 547 237 520Q273 494 327 476L422 444Q478 426 526 400Q575 373 605 330Q635 286 635 215Q635 108 560 46Q485 -15 355 -15Z","%":"M255 410Q203 410 160 436Q117 462 91 505Q65 548 65 600Q65 653 91 696Q117 739 160 765Q203 791 255 791Q308 791 351 765Q394 739 420 696Q446 653 446 600Q446 548 420 505Q394 462 351 436Q308 410 255 410ZM255 501Q295 501 324 528Q353 556 353 600Q353 645 324 672Q295 700 255 700Q215 700 186 672Q158 645 158 600Q158 556 186 528Q215 501 255 501ZM188 0L188 5L718 780L832 780L832 774L302 0ZM765 -10Q713 -10 670 16Q627 42 601 85Q575 128 575 180Q575 233 601 276Q627 319 670 345Q713 371 765 371Q818 371 861 345Q904 319 930 276Q956 233 956 180Q956 128 930 85Q904 42 861 16Q818 -10 765 -10ZM765 81Q805 81 834 108Q863 136 863 180Q863 225 834 252Q805 280 765 280Q725 280 696 252Q668 225 668 180Q668 136 696 108Q725 81 765 81Z","&":"M313 -14Q229 -14 170 16Q110 45 78 95Q45 145 45 207Q45 281 90 332Q134 382 203 412L203 436Q170 464 144 506Q119 547 119 602Q119 653 144 696Q169 739 219 766Q269 792 344 792Q449 792 504 744Q559 695 559 622Q559 573 535 536Q511 499 473 474Q435 450 392 433L392 409L502 306Q517 292 529 277Q541 262 550 247L574 247Q590 286 600 328Q609 369 613 410L804 410L804 310L698 310Q690 276 674 244Q659 212 639 180L821 6L821 0L654 0L565 91L541 91Q506 46 452 16Q398 -14 313 -14ZM338 95Q387 95 423 112Q459 128 488 157L270 364Q229 340 202 308Q176 277 176 230Q176 172 220 134Q263 95 338 95ZM318 480Q368 502 403 533Q438 564 438 611Q438 648 415 673Q392 698 343 698Q292 698 268 672Q245 645 245 607Q245 569 266 538Q287 508 318 480Z","'":"M102 480L87 750L87 780L213 780L213 750L198 480Z","(":"M225 -180Q187 -122 153 -48Q119 26 98 114Q78 202 78 300Q78 399 98 486Q119 574 153 648Q187 722 225 780L354 780L354 774Q314 713 280 638Q245 563 224 478Q204 393 204 300Q204 208 224 122Q245 37 280 -38Q314 -113 354 -174L354 -180Z",")":"M66 -180L66 -174Q107 -113 141 -38Q175 37 196 122Q216 208 216 300Q216 393 196 478Q175 563 141 638Q107 713 66 774L66 780L195 780Q235 722 268 648Q301 574 322 486Q342 399 342 300Q342 202 322 114Q301 26 268 -48Q235 -122 195 -180Z","*":"M150 393L80 444Q102 475 121 498Q140 522 162 545L155 568Q124 573 94 581Q65 589 29 601L56 683Q92 672 120 662Q149 651 177 636L196 651Q192 682 190 712Q188 742 189 780L277 780Q277 742 276 712Q274 682 269 651L288 636Q317 651 346 662Q374 672 409 683L436 601Q400 589 371 581Q342 573 310 568L303 545Q325 522 344 498Q364 475 385 444L316 393Q293 424 276 450Q259 475 245 503L220 503Q206 475 190 450Q173 424 150 393Z","+":"M283 100L283 336L40 336L40 445L283 445L283 680L397 680L397 445L640 445L640 336L397 336L397 100Z",",":"M42 -150L42 -144Q66 -104 84 -68Q101 -33 113 -2Q84 5 68 26Q51 46 51 78Q51 114 73 136Q95 158 135 158Q176 158 198 134Q219 109 219 64Q219 20 200 -34Q181 -89 147 -150Z","-":"M54 255L54 366L306 366L306 255Z",".":"M136 -6Q95 -6 73 16Q51 39 51 77Q51 116 73 138Q95 160 136 160Q177 160 198 138Q219 116 219 77Q219 39 198 16Q177 -6 136 -6Z","/":"M14 -100L14 -94L295 800L406 800L406 794L125 -100Z","0":"M340 -14Q189 -14 115 93Q41 200 41 390Q41 580 115 687Q189 794 340 794Q492 794 566 687Q639 580 639 390Q639 200 566 93Q492 -14 340 -14ZM340 97Q423 97 461 170Q499 244 499 390Q499 537 461 610Q423 683 340 683Q258 683 220 610Q181 537 181 390Q181 244 220 170Q258 97 340 97Z","1":"M94 0L94 104L280 104L280 541L110 541L109 634L159 637Q201 640 230 650Q259 660 278 690Q297 720 307 780L415 780L415 104L586 104L586 0Z","2":"M67 0L67 116Q152 182 212 231Q271 280 314 321Q386 390 421 444Q456 499 456 559Q456 617 424 652Q392 688 329 688Q260 688 226 644Q193 600 193 532L67 532Q67 609 98 668Q128 728 188 761Q247 794 333 794Q454 794 522 732Q591 670 591 566Q591 480 545 408Q499 335 419 263Q386 233 343 200Q300 166 250 135L250 113L613 113L613 0Z","3":"M341 -13Q267 -13 212 10Q158 32 122 69Q86 106 68 150Q51 195 50 240L183 240Q190 180 230 138Q271 95 345 95Q415 95 450 134Q485 173 485 229Q485 299 433 338Q381 378 291 378L259 378L259 478L356 582Q374 602 391 618Q408 634 428 648L428 672L93 672L93 780L587 780L587 666L403 482L403 458Q509 440 564 383Q620 326 620 234Q620 160 586 104Q551 49 488 18Q426 -13 341 -13Z","4":"M45 187L45 307L371 780L518 780L518 774L263 407Q248 385 230 362Q213 340 190 317L190 293L636 293L636 187ZM400 0L400 240L403 240L403 426L524 426L524 240L527 240L527 0Z","5":"M337 -12Q264 -12 212 9Q161 30 128 64Q95 97 79 134Q63 172 60 205L193 205Q197 182 214 156Q230 131 262 114Q294 96 342 96Q416 96 452 144Q487 191 487 263Q487 337 448 381Q408 425 339 425Q301 425 274 412Q248 399 232 380Q215 362 206 345L78 345L123 780L573 780L573 670L229 670L205 459L229 459Q250 487 284 506Q319 525 379 525Q453 525 508 492Q562 460 592 402Q622 344 622 266Q622 184 588 122Q553 59 489 24Q425 -12 337 -12Z","6":"M345 -14Q256 -14 192 22Q129 59 95 122Q61 184 61 263Q61 328 81 386Q101 443 132 495Q164 547 199 594Q206 604 223 626Q240 649 261 677Q282 705 302 732Q323 760 340 780L498 780L498 774Q457 726 412 672Q368 618 324 562Q293 523 274 496Q254 469 245 455L269 455Q288 474 318 488Q347 502 393 502Q463 502 516 471Q568 440 597 384Q626 329 626 257Q626 181 592 120Q559 58 496 22Q434 -14 345 -14ZM348 89Q418 89 457 133Q496 177 496 251Q496 329 456 370Q415 412 347 412Q273 412 232 366Q192 321 192 252Q192 209 210 172Q227 135 262 112Q296 89 348 89Z","7":"M120 0L120 6L400 522Q426 570 445 596Q464 623 488 643L488 667L66 667L66 780L614 780L614 660L273 0Z","8":"M340 -14Q204 -14 126 48Q47 110 47 210Q47 280 87 328Q127 376 199 398L199 422Q141 444 110 487Q78 530 78 590Q78 649 109 695Q140 741 198 768Q257 794 339 794Q462 794 532 738Q603 681 603 589Q603 529 572 486Q541 444 481 422L481 398Q555 376 594 328Q633 280 633 210Q633 144 598 94Q564 44 499 15Q434 -14 340 -14ZM340 89Q415 89 456 128Q496 166 496 225Q496 285 456 323Q415 361 340 361Q266 361 225 323Q184 285 184 225Q184 166 225 128Q266 89 340 89ZM340 460Q403 460 438 492Q472 524 472 576Q472 627 438 659Q403 691 340 691Q279 691 244 659Q209 627 209 576Q209 524 244 492Q279 460 340 460Z","9":"M182 0L182 6Q224 55 268 108Q311 161 357 219Q380 249 402 278Q424 308 436 325L412 325Q392 307 363 292Q334 278 287 278Q218 278 166 310Q113 341 84 396Q54 452 54 524Q54 601 88 662Q122 723 185 758Q248 794 337 794Q427 794 490 758Q552 722 586 660Q619 597 619 517Q619 453 599 396Q579 338 548 286Q516 234 482 186Q474 176 458 154Q441 132 420 104Q399 76 378 48Q357 21 341 0ZM334 369Q407 369 448 414Q488 459 488 528Q488 572 471 609Q454 646 420 668Q386 691 334 691Q265 691 225 648Q185 605 185 529Q185 452 226 410Q267 369 334 369Z",":":"M174 369Q133 369 111 392Q89 414 89 452Q89 491 111 513Q133 535 174 535Q215 535 236 513Q257 491 257 452Q257 414 236 392Q215 369 174 369ZM174 69Q133 69 111 92Q89 114 89 152Q89 191 111 213Q133 235 174 235Q215 235 236 213Q257 191 257 152Q257 114 236 92Q215 69 174 69Z",";":"M174 369Q133 369 111 392Q89 414 89 452Q89 491 111 513Q133 535 174 535Q215 535 236 513Q257 491 257 452Q257 414 236 392Q215 369 174 369ZM80 -75L80 -69Q104 -29 122 6Q139 42 151 73Q122 80 106 100Q89 121 89 153Q89 189 111 211Q133 233 173 233Q214 233 236 208Q257 184 257 139Q257 95 238 40Q219 -14 185 -75Z","<":"M640 139L40 290L40 492L640 642L640 524L147 401L147 377L640 254Z","=":"M40 454L40 562L640 562L640 454ZM40 219L40 327L640 327L640 219Z",">":"M40 139L40 256L534 378L534 402L40 526L40 642L640 491L640 289Z","?":"M216 240L216 397Q274 410 319 432Q364 453 390 486Q416 518 416 567Q416 619 384 654Q352 689 288 689Q243 689 214 671Q186 653 172 623Q159 593 157 557L31 557Q34 622 63 676Q92 729 149 760Q206 792 293 792Q410 792 478 730Q546 668 546 566Q546 476 492 416Q437 355 338 322L338 240ZM277 -6Q239 -6 218 16Q198 37 198 73Q198 109 218 130Q239 151 277 151Q316 151 336 130Q357 109 357 73Q357 37 336 16Q316 -6 277 -6Z","@":"M522 -132Q385 -132 278 -78Q170 -25 109 78Q48 180 48 326Q48 471 109 576Q170 681 278 738Q387 794 530 794Q672 794 770 741Q868 688 918 596Q969 503 969 386Q969 295 940 227Q912 159 864 122Q815 84 755 84Q703 84 672 110Q641 135 628 165L604 165Q584 130 552 107Q520 84 468 84Q409 84 367 116Q325 147 303 203Q281 259 281 333Q281 444 330 511Q378 578 467 578Q516 578 547 558Q578 538 593 510L617 510L617 570L714 570L714 243Q714 205 726 186Q738 168 765 168Q800 168 824 196Q849 224 862 272Q875 319 875 377Q875 536 783 623Q691 710 530 710Q410 710 324 663Q239 616 193 530Q147 444 147 329Q147 215 192 130Q237 45 321 -2Q405 -48 523 -48Q601 -48 674 -28Q746 -8 794 18L800 18L800 -72Q754 -94 681 -113Q608 -132 522 -132ZM494 166Q544 166 574 211Q605 256 605 332Q605 408 574 453Q544 498 494 498Q448 498 420 456Q393 414 393 332Q393 250 420 208Q448 166 494 166Z","A":"M12 0L12 6L257 780L478 780L723 6L723 0L579 0L375 672L351 672L146 0ZM192 211L225 321L500 321L533 211Z","B":"M83 0L83 780L370 780Q512 780 576 728Q641 676 641 588Q641 532 613 493Q585 454 527 438L527 414Q602 399 641 354Q680 308 680 228Q680 126 612 63Q543 0 392 0ZM218 105L381 105Q465 105 502 139Q540 173 540 234Q540 297 500 330Q461 362 382 362L218 362ZM218 464L365 464Q433 464 468 490Q504 516 504 570Q504 675 365 675L218 675Z","C":"M386 -15Q220 -15 128 92Q36 199 36 390Q36 581 128 688Q219 795 385 795Q483 795 554 758Q625 721 666 655Q706 589 714 502L574 502Q565 588 515 638Q465 687 385 687Q285 687 232 610Q180 532 180 390Q180 245 234 169Q287 93 384 93Q468 93 517 145Q566 197 574 278L714 278Q706 192 666 126Q625 59 554 22Q484 -15 386 -15Z","D":"M83 0L83 780L350 780Q555 780 647 678Q739 575 739 390Q739 205 647 102Q555 0 350 0ZM224 112L340 112Q429 112 486 140Q542 168 568 230Q595 291 595 390Q595 490 568 551Q542 612 486 640Q429 668 340 668L224 668Z","E":"M83 0L83 780L599 780L599 667L222 667L222 471L516 471L516 365L222 365L222 113L605 113L605 0Z","F":"M83 0L83 780L593 780L593 667L222 667L222 466L510 466L510 360L222 360L222 0Z","G":"M374 -14Q265 -14 190 38Q114 89 75 181Q36 273 36 393Q36 514 76 604Q116 695 195 745Q274 795 392 795Q490 795 558 761Q626 727 665 666Q704 604 715 520L580 520Q568 600 520 644Q471 687 389 687Q281 687 229 608Q177 530 177 393Q177 249 232 170Q287 92 393 92Q483 92 532 144Q582 197 587 289L349 289L349 395L716 395L716 0L611 0L611 93L587 93Q566 51 516 18Q467 -14 374 -14Z","H":"M83 0L83 780L223 780L223 475L587 475L587 780L727 780L727 0L587 0L587 360L223 360L223 0Z","I":"M85 0L85 780L225 780L225 0Z","J":"M1 -150L1 -144Q25 -110 45 -74Q65 -37 77 14Q89 64 89 141L89 780L229 780L229 141Q229 59 218 6Q207 -48 190 -84Q173 -120 154 -150Z","K":"M83 0L83 780L220 780L220 465L280 465L523 780L679 780L679 774L394 415L713 6L713 0L545 0L280 349L220 349L220 0Z","L":"M83 0L83 780L223 780L223 113L570 113L570 0Z","M":"M83 0L83 780L333 780L509 111L539 111L717 780L967 780L967 0L833 0L833 663L808 663L635 0L406 0L233 663L208 663L208 0Z","N":"M83 0L83 780L330 780L606 111L630 111L630 780L757 780L757 0L509 0L234 670L210 670L210 0Z","O":"M397 -14Q276 -14 196 36Q115 85 76 176Q36 267 36 390Q36 514 76 604Q115 695 196 744Q276 794 397 794Q520 794 600 744Q680 695 720 604Q759 514 759 390Q759 267 720 176Q680 85 600 36Q520 -14 397 -14ZM398 94Q509 94 562 172Q615 249 615 390Q615 532 562 609Q509 686 398 686Q286 686 233 609Q180 532 180 390Q180 249 233 172Q286 94 398 94Z","P":"M83 0L83 780L385 780Q535 780 604 718Q672 655 672 550Q672 445 604 382Q535 320 385 320L222 320L222 0ZM222 428L370 428Q451 428 491 456Q531 484 531 550Q531 615 491 644Q451 672 370 672L222 672Z","Q":"M397 -14Q276 -14 196 36Q115 85 76 176Q36 267 36 390Q36 514 76 604Q115 695 196 744Q276 794 397 794Q520 794 600 744Q680 695 720 604Q759 514 759 390Q759 267 720 176Q680 85 600 36Q520 -14 397 -14ZM398 94Q509 94 562 172Q615 249 615 390Q615 532 562 609Q509 686 398 686Q286 686 233 609Q180 532 180 390Q180 249 233 172Q286 94 398 94ZM546 -150L405 31L546 55L701 -144L701 -150Z","R":"M83 0L83 780L394 780Q494 780 555 752Q616 724 644 676Q673 627 673 566Q673 491 632 438Q591 385 512 363L694 6L694 0L546 0L375 344L221 344L221 0ZM221 448L379 448Q456 448 494 475Q531 502 531 560Q531 619 494 646Q456 672 379 672L221 672Z","S":"M360 -15Q277 -15 217 8Q157 31 118 70Q79 108 59 157Q39 206 35 258L167 258Q170 217 192 179Q214 141 257 117Q300 93 365 93Q436 93 473 123Q510 153 510 204Q510 253 476 282Q441 310 387 328L293 360Q238 378 187 404Q136 430 104 473Q71 516 71 584Q71 652 105 699Q139 746 198 770Q258 795 336 795Q434 795 494 762Q553 728 582 674Q610 621 615 560L483 560Q481 593 466 622Q450 651 418 670Q385 688 331 688Q271 688 238 662Q206 637 206 594Q206 547 242 520Q278 494 332 476L427 445Q483 427 532 400Q582 374 614 330Q645 287 645 215Q645 107 569 46Q493 -15 360 -15Z","T":"M275 0L275 667L30 667L30 780L660 780L660 667L415 667L415 0Z","U":"M395 -14Q230 -14 152 73Q73 160 73 323L73 780L215 780L215 323Q215 212 257 156Q299 100 397 100Q495 100 536 156Q578 212 578 323L578 780L716 780L716 323Q716 160 638 73Q561 -14 395 -14Z","V":"M255 0L12 774L12 780L156 780L361 120L385 120L587 780L723 780L723 774L481 0Z","W":"M162 0L31 774L31 780L168 780L279 108L303 108L435 780L669 780L802 108L826 108L936 780L1065 780L1065 774L935 0L692 0L560 672L536 672L404 0Z","X":"M17 0L17 6L259 416L53 774L53 780L201 780L358 506L380 506L534 780L678 780L678 774L472 416L713 6L713 0L557 0L374 327L352 327L168 0Z","Y":"M260 0L260 330L10 774L10 780L163 780L277 576Q291 553 303 528Q315 502 328 469L350 469Q364 502 376 528Q388 553 401 576L512 780L651 780L651 774L400 328L400 0Z","Z":"M41 0L41 124L390 535Q413 562 437 589Q461 616 490 643L490 667L79 667L79 780L659 780L659 656L309 245Q287 218 262 191Q238 164 210 137L210 113L666 113L666 0Z","[":"M96 -179L96 779L378 779L378 682L216 682L216 -82L378 -82L378 -179Z","\\":"M290 -100L9 794L9 800L120 800L401 -94L401 -100Z","]":"M42 -179L42 -82L204 -82L204 682L42 682L42 779L324 779L324 -179Z","^":"M42 390L42 396L250 780L430 780L638 396L638 390L506 390L350 678L326 678L172 390Z","_":"M-6 -160L-6 -79L726 -79L726 -160Z","`":"M292 660L200 834L200 840L326 840L400 666L400 660Z","a":"M283 -13Q202 -13 148 26Q94 66 67 137Q40 208 40 301Q40 395 68 466Q95 536 149 575Q203 614 283 614Q349 614 390 588Q430 561 448 522L472 522L472 600L595 600L595 0L472 0L472 78L448 78Q430 41 390 14Q349 -13 283 -13ZM313 89Q381 89 422 146Q462 204 462 300Q462 397 422 454Q381 512 313 512Q249 512 214 458Q179 403 179 300Q179 197 214 143Q249 89 313 89Z","b":"M395 -13Q327 -13 286 14Q246 41 227 78L203 78L203 0L80 0L80 800L215 800L215 531L239 531Q260 569 298 592Q336 614 396 614Q474 614 528 575Q581 536 608 466Q636 395 636 301Q636 208 608 137Q581 66 528 26Q474 -13 395 -13ZM362 89Q426 89 462 143Q497 197 497 300Q497 403 462 458Q426 512 362 512Q294 512 254 454Q214 397 214 300Q214 204 254 146Q294 89 362 89Z","c":"M313 -15Q178 -15 109 71Q40 157 40 300Q40 449 112 532Q184 615 314 615Q426 615 492 554Q558 494 572 385L439 385Q431 447 400 480Q368 514 316 514Q247 514 213 458Q179 401 179 300Q179 199 213 142Q247 86 315 86Q368 86 400 120Q431 154 439 215L572 215Q557 107 490 46Q424 -15 313 -15Z","d":"M280 -13Q200 -13 146 26Q93 66 66 137Q39 208 39 301Q39 395 66 466Q94 536 148 575Q201 614 279 614Q339 614 377 592Q415 569 435 531L459 531L459 800L594 800L594 0L471 0L471 78L447 78Q429 41 388 14Q348 -13 280 -13ZM312 89Q380 89 420 146Q461 204 461 300Q461 397 420 454Q380 512 312 512Q248 512 213 458Q178 403 178 300Q178 197 213 143Q248 89 312 89Z","e":"M320 -15Q183 -15 112 71Q40 157 40 301Q40 397 72 467Q104 537 166 576Q228 615 318 615Q447 615 515 534Q583 454 583 300L583 267L171 267Q176 185 214 135Q251 85 320 85Q372 85 404 115Q436 145 448 192L576 192Q565 134 534 88Q504 41 451 13Q398 -15 320 -15ZM172 357L451 357Q448 435 414 476Q379 518 317 518Q254 518 217 477Q180 436 172 357Z","f":"M116 0L116 501L30 501L30 600L116 600L116 638Q116 686 133 723Q150 760 190 781Q229 802 298 802Q323 802 345 799L345 701Q333 704 313 704Q274 704 260 686Q247 668 247 634L247 600L345 600L345 501L247 501L247 0Z","g":"M320 -214Q246 -214 198 -196Q151 -178 123 -150Q95 -121 82 -90Q70 -59 67 -33L200 -33Q206 -64 234 -90Q261 -115 322 -115Q389 -115 424 -77Q459 -39 459 39L459 108L435 108Q420 67 382 42Q344 16 280 16Q166 16 103 97Q40 178 40 317Q40 406 68 474Q95 541 149 578Q203 615 280 615Q346 615 384 590Q421 564 438 525L462 525L462 600L585 600L585 39Q585 -83 518 -148Q452 -214 320 -214ZM308 118Q376 118 414 172Q452 227 452 316Q452 405 414 459Q376 513 309 513Q246 513 211 462Q176 412 176 316Q176 218 211 168Q246 118 308 118Z","h":"M80 0L80 800L215 800L215 525L239 525Q260 567 297 591Q334 615 394 615Q496 615 544 552Q593 488 593 383L593 0L458 0L458 358Q458 428 433 466Q408 503 354 503Q288 503 252 452Q215 400 215 324L215 0Z","i":"M80 0L80 600L215 600L215 0ZM148 677Q111 677 92 697Q72 717 72 750Q72 783 92 804Q111 824 148 824Q186 824 206 804Q225 783 225 750Q225 717 206 697Q186 677 148 677Z","j":"M19 -200L19 -194Q47 -162 64 -118Q80 -74 80 -5L80 600L215 600L215 -21Q215 -94 198 -132Q182 -171 159 -200ZM148 677Q111 677 92 697Q72 717 72 750Q72 783 92 804Q111 824 148 824Q186 824 206 804Q225 783 225 750Q225 717 206 697Q186 677 148 677Z","k":"M81 0L81 800L215 800L215 363L263 363L445 600L591 600L591 594L375 319L615 6L615 0L455 0L263 258L215 258L215 0Z","l":"M127 0Q102 30 90 69Q77 108 77 179L77 800L212 800L212 195Q212 117 229 76Q246 34 273 6L273 0Z","m":"M80 0L80 600L203 600L203 510L227 510Q243 557 281 586Q319 615 385 615Q448 615 490 587Q531 559 551 510L575 510Q593 558 632 586Q672 615 738 615Q836 615 882 552Q928 488 928 383L928 0L793 0L793 358Q793 428 770 466Q748 503 698 503Q637 503 604 452Q572 400 572 324L572 0L437 0L437 358Q437 428 414 466Q392 503 342 503Q281 503 248 452Q215 400 215 324L215 0Z","n":"M80 0L80 600L203 600L203 510L227 510Q245 558 284 586Q324 615 393 615Q496 615 544 552Q593 488 593 383L593 0L458 0L458 358Q458 428 433 466Q408 503 354 503Q288 503 252 452Q215 400 215 324L215 0Z","o":"M323 -15Q180 -15 110 70Q40 156 40 300Q40 444 110 530Q180 615 323 615Q466 615 536 530Q606 444 606 300Q606 156 536 70Q466 -15 323 -15ZM323 83Q397 83 432 140Q467 196 467 300Q467 405 432 461Q397 517 323 517Q248 517 214 461Q179 405 179 300Q179 196 214 140Q248 83 323 83Z","p":"M80 -200L80 600L203 600L203 522L227 522Q246 559 286 586Q327 614 395 614Q474 614 528 574Q581 535 608 464Q636 393 636 300Q636 206 608 136Q581 65 528 26Q474 -13 396 -13Q336 -13 298 10Q260 32 239 69L215 69L215 -200ZM362 89Q426 89 462 143Q497 197 497 300Q497 403 462 458Q426 512 362 512Q294 512 254 454Q214 397 214 300Q214 204 254 146Q294 89 362 89Z","q":"M461 -200L461 69L437 69Q417 32 379 10Q341 -13 281 -13Q203 -13 150 26Q96 65 68 136Q41 206 41 300Q41 393 68 464Q95 535 148 574Q202 614 282 614Q350 614 390 586Q431 559 449 522L473 522L473 600L596 600L596 -200ZM314 89Q382 89 422 146Q463 204 463 300Q463 397 422 454Q382 512 314 512Q250 512 215 458Q180 403 180 300Q180 197 215 143Q250 89 314 89Z","r":"M80 0L80 600L202 600L202 494L226 494Q232 522 248 548Q264 573 298 590Q331 606 389 606L415 606L415 482L378 482Q291 482 253 438Q215 393 215 300L215 0Z","s":"M290 -15Q199 -15 142 16Q85 46 58 94Q31 142 27 192L157 192Q161 164 178 139Q194 114 223 99Q252 84 296 84Q346 84 371 104Q396 123 396 155Q396 183 375 202Q354 222 309 237L237 262Q187 280 146 302Q105 323 80 356Q55 389 55 441Q55 520 113 568Q171 615 275 615Q350 615 398 590Q447 566 472 524Q497 483 501 432L376 432Q372 469 346 494Q321 519 270 519Q227 519 204 502Q182 484 182 453Q182 423 204 404Q227 384 273 368L344 345Q394 328 435 306Q476 285 500 252Q523 218 523 166Q523 85 464 35Q404 -15 290 -15Z","t":"M162 0Q139 27 126 65Q112 103 112 179L112 501L30 501L30 600L114 600L114 750L246 750L246 600L345 600L345 501L247 501L247 196Q247 116 264 74Q282 33 307 6L307 0Z","u":"M273 -15Q171 -15 122 49Q72 113 72 217L72 600L207 600L207 242Q207 173 232 135Q257 97 311 97Q378 97 414 149Q450 201 450 277L450 600L585 600L585 0L464 0L464 90L440 90Q425 43 384 14Q342 -15 273 -15Z","v":"M193 0L15 594L15 600L151 600L291 111L315 111L456 600L580 600L580 594L403 0Z","w":"M141 0L40 597L40 600L166 600L249 105L271 105L366 600L582 600L678 105L700 105L782 600L900 600L900 597L799 0L580 0L483 499L457 499L361 0Z","x":"M14 0L14 6L202 316L36 594L36 600L179 600L289 407L310 407L417 600L551 600L551 594L390 319L577 6L577 0L429 0L300 227L279 227L153 0Z","y":"M113 -200L113 -196Q140 -153 170 -96Q201 -40 225 16L14 594L14 600L148 600L235 360Q248 326 260 287Q272 248 285 190L309 190Q321 248 334 287Q346 326 358 360L445 600L571 600L571 594L376 68Q343 -22 310 -91Q278 -160 254 -200Z","z":"M42 0L42 116L278 403Q295 424 312 444Q329 463 344 477L344 501L56 501L56 600L505 600L505 485L271 197Q255 177 238 158Q222 140 204 123L204 99L518 99L518 0Z","{":"M363 -199Q270 -199 220 -178Q171 -156 154 -120Q136 -85 136 -42Q136 7 147 58Q158 109 158 151Q158 195 132 223Q106 251 42 253L42 348Q106 350 132 378Q158 406 158 449Q158 492 147 544Q136 595 136 642Q136 685 154 721Q171 757 220 778Q270 799 363 799L363 705Q300 705 278 682Q256 659 256 622Q256 585 267 540Q278 494 278 450Q278 409 258 372Q239 335 181 312L181 288Q239 265 258 228Q278 192 278 150Q278 106 267 61Q256 16 256 -21Q256 -58 278 -82Q300 -105 363 -105Z","|":"M128 -200L128 800L233 800L233 -200Z","}":"M57 -199L57 -105Q121 -105 143 -82Q165 -58 165 -21Q165 16 154 61Q143 106 143 150Q143 192 162 228Q182 265 239 288L239 312Q182 335 162 372Q143 409 143 450Q143 494 154 540Q165 585 165 622Q165 659 143 682Q121 705 57 705L57 799Q152 799 200 778Q249 757 267 721Q285 685 285 642Q285 595 274 544Q263 492 263 449Q263 406 289 378Q315 350 378 348L378 253Q315 251 289 223Q263 195 263 151Q263 109 274 58Q285 7 285 -42Q285 -85 267 -120Q249 -156 200 -178Q152 -199 57 -199Z","~":"M65 295Q65 349 81 394Q97 438 131 465Q165 492 220 492Q262 492 298 478Q333 464 364 446Q395 428 422 414Q450 400 477 400Q505 400 521 419Q537 438 537 485L646 485Q646 434 630 389Q615 344 582 316Q548 289 494 289Q454 289 419 303Q384 317 353 335Q322 353 294 367Q265 381 238 381Q208 381 191 360Q174 339 174 295Z","×":"M139 112L62 189L263 390L62 590L140 669L341 468L542 669L619 592L418 391L619 190L540 112L340 313Z","Ø":"M398 -14Q257 -14 170 55L97 -31L32 25L109 116Q73 168 54 237Q36 306 36 390Q36 514 76 604Q115 695 196 744Q276 794 398 794Q469 794 526 776Q583 759 626 726L699 812L764 755L686 664Q723 612 741 543Q759 474 759 390Q759 267 720 176Q680 85 600 36Q520 -14 398 -14ZM398 94Q509 94 562 172Q615 249 615 390Q615 432 611 469Q607 506 597 545L573 545Q560 518 546 499Q531 480 515 461L251 150Q277 123 314 108Q350 94 398 94ZM200 239L224 239Q236 264 251 283Q266 302 280 319L545 630Q491 686 398 686Q286 686 233 609Q180 532 180 390Q180 349 184 312Q189 276 200 239Z","°":"M255 410Q203 410 160 436Q117 462 91 505Q65 548 65 600Q65 653 91 696Q117 739 160 765Q203 791 255 791Q308 791 351 765Q394 739 420 696Q446 653 446 600Q446 548 420 505Q394 462 351 436Q308 410 255 410ZM255 501Q295 501 324 528Q353 556 353 600Q353 645 324 672Q295 700 255 700Q215 700 186 672Q158 645 158 600Q158 556 186 528Q215 501 255 501Z","–":"M54 255L54 366L666 366L666 255Z","—":"M54 253L54 367L1026 367L1026 253Z","’":"M42 480L42 486Q66 526 84 562Q101 597 113 628Q84 635 68 656Q51 676 51 708Q51 744 73 766Q95 788 135 788Q176 788 198 764Q219 739 219 694Q219 650 200 596Q181 541 147 480Z","ä":"M283 -13Q202 -13 148 26Q94 66 67 137Q40 208 40 301Q40 395 68 466Q95 536 149 575Q203 614 283 614Q349 614 390 588Q430 561 448 522L472 522L472 600L595 600L595 0L472 0L472 78L448 78Q430 41 390 14Q349 -13 283 -13ZM313 89Q381 89 422 146Q462 204 462 300Q462 397 422 454Q381 512 313 512Q249 512 214 458Q179 403 179 300Q179 197 214 143Q249 89 313 89ZM229 680Q195 680 177 700Q159 719 159 750Q159 782 177 801Q195 820 229 820Q263 820 281 801Q299 782 299 750Q299 719 281 700Q263 680 229 680ZM432 680Q398 680 380 700Q362 719 362 750Q362 782 380 801Q398 820 432 820Q466 820 484 801Q502 782 502 750Q502 719 484 700Q466 680 432 680Z","ö":"M323 -15Q180 -15 110 70Q40 156 40 300Q40 444 110 530Q180 615 323 615Q466 615 536 530Q606 444 606 300Q606 156 536 70Q466 -15 323 -15ZM323 83Q397 83 432 140Q467 196 467 300Q467 405 432 461Q397 517 323 517Q248 517 214 461Q179 405 179 300Q179 196 214 140Q248 83 323 83ZM222 680Q188 680 170 700Q152 719 152 750Q152 782 170 801Q188 820 222 820Q256 820 274 801Q292 782 292 750Q292 719 274 700Q256 680 222 680ZM425 680Q391 680 373 700Q355 719 355 750Q355 782 373 801Q391 820 425 820Q459 820 477 801Q495 782 495 750Q495 719 477 700Q459 680 425 680Z","å":"M283 -13Q202 -13 148 26Q94 66 67 137Q40 208 40 301Q40 395 68 466Q95 536 149 575Q203 614 283 614Q349 614 390 588Q430 561 448 522L472 522L472 600L595 600L595 0L472 0L472 78L448 78Q430 41 390 14Q349 -13 283 -13ZM313 89Q381 89 422 146Q462 204 462 300Q462 397 422 454Q381 512 313 512Q249 512 214 458Q179 403 179 300Q179 197 214 143Q249 89 313 89ZM330 649Q273 649 240 682Q208 714 208 762Q208 811 240 843Q273 875 330 875Q387 875 420 843Q453 811 453 762Q453 714 420 682Q387 649 330 649ZM330 712Q352 712 365 726Q378 741 378 762Q378 783 365 798Q352 812 330 812Q308 812 296 798Q283 783 283 762Q283 741 296 726Q308 712 330 712Z","Ä":"M12 0L12 6L257 780L478 780L723 6L723 0L579 0L375 672L351 672L146 0ZM192 211L225 321L500 321L533 211ZM267 860Q233 860 215 880Q197 899 197 930Q197 962 215 981Q233 1000 267 1000Q301 1000 319 981Q337 962 337 930Q337 899 319 880Q301 860 267 860ZM470 860Q436 860 418 880Q400 899 400 930Q400 962 418 981Q436 1000 470 1000Q504 1000 522 981Q540 962 540 930Q540 899 522 880Q504 860 470 860Z","Ö":"M397 -14Q276 -14 196 36Q115 85 76 176Q36 267 36 390Q36 514 76 604Q115 695 196 744Q276 794 397 794Q520 794 600 744Q680 695 720 604Q759 514 759 390Q759 267 720 176Q680 85 600 36Q520 -14 397 -14ZM398 94Q509 94 562 172Q615 249 615 390Q615 532 562 609Q509 686 398 686Q286 686 233 609Q180 532 180 390Q180 249 233 172Q286 94 398 94ZM297 860Q263 860 245 880Q227 899 227 930Q227 962 245 981Q263 1000 297 1000Q331 1000 349 981Q367 962 367 930Q367 899 349 880Q331 860 297 860ZM500 860Q466 860 448 880Q430 899 430 930Q430 962 448 981Q466 1000 500 1000Q534 1000 552 981Q570 962 570 930Q570 899 552 880Q534 860 500 860Z","Å":"M12 0L12 6L257 780L478 780L723 6L723 0L579 0L375 672L351 672L146 0ZM192 211L225 321L500 321L533 211ZM368 829Q311 829 278 862Q246 894 246 942Q246 991 278 1023Q311 1055 368 1055Q425 1055 458 1023Q491 991 491 942Q491 894 458 862Q425 829 368 829ZM368 892Q390 892 403 906Q416 921 416 942Q416 963 403 978Q390 992 368 992Q346 992 334 978Q321 963 321 942Q321 921 334 906Q346 892 368 892Z","é":"M320 -15Q183 -15 112 71Q40 157 40 301Q40 397 72 467Q104 537 166 576Q228 615 318 615Q447 615 515 534Q583 454 583 300L583 267L171 267Q176 185 214 135Q251 85 320 85Q372 85 404 115Q436 145 448 192L576 192Q565 134 534 88Q504 41 451 13Q398 -15 320 -15ZM172 357L451 357Q448 435 414 476Q379 518 317 518Q254 518 217 477Q180 436 172 357ZM266 660L266 666L340 840L466 840L466 834L374 660Z","ø":"M96 -24L39 26L94 91Q40 171 40 300Q40 444 110 530Q180 615 323 615Q428 615 495 566L549 630L607 580L550 512Q606 433 606 300Q606 156 536 70Q466 -15 323 -15Q268 -15 224 -2Q180 12 147 36ZM323 83Q397 83 436 142Q476 200 476 315Q476 344 474 364Q471 385 467 401L443 401Q437 385 426 368Q415 351 397 330L225 126Q259 83 323 83ZM178 203L202 203Q208 219 219 236Q230 253 245 270L420 477Q385 517 323 517Q248 517 209 459Q170 401 170 286Q170 258 172 239Q175 220 178 203Z","·":"M136 229Q95 229 73 252Q51 274 51 312Q51 351 73 373Q95 395 136 395Q177 395 198 373Q219 351 219 312Q219 274 198 252Q177 229 136 229Z"},"kern":{"A\"":-80,"A'":-80,"A*":-80,"AS":-10,"AT":-100,"AU":-20,"AV":-50,"AW":-20,"AY":-70,"Aa":-20,"Af":-30,"As":-10,"At":-20,"Au":-10,"Av":-30,"Aw":-10,"Ay":-30,"A°":-80,"A’":-80,"Aä":-20,"Aå":-20,"Ä\"":-80,"Ä'":-80,"Ä*":-80,"ÄS":-10,"ÄT":-100,"ÄU":-20,"ÄV":-50,"ÄW":-20,"ÄY":-70,"Äa":-20,"Äf":-30,"Äs":-10,"Ät":-20,"Äu":-10,"Äv":-30,"Äw":-10,"Äy":-30,"Ä°":-80,"Ä’":-80,"Ää":-20,"Äå":-20,"Å\"":-80,"Å'":-80,"Å*":-80,"ÅS":-10,"ÅT":-100,"ÅU":-20,"ÅV":-50,"ÅW":-20,"ÅY":-70,"Åa":-20,"Åf":-30,"Ås":-10,"Åt":-20,"Åu":-10,"Åv":-30,"Åw":-10,"Åy":-30,"Å°":-80,"Å’":-80,"Åä":-20,"Åå":-20,"B\"":-20,"B'":-20,"B*":-20,"BT":-30,"BV":-20,"BY":-30,"Bw":-10,"Bx":-10,"By":-10,"B°":-20,"B’":-20,"C!":-20,"CA":-10,"CB":-20,"CD":-20,"CE":-20,"CF":-20,"CH":-20,"CI":-20,"CJ":-20,"CK":-20,"CL":-20,"CM":-20,"CN":-20,"CP":-20,"CR":-20,"CT":-30,"CU":-30,"CV":-30,"CW":-20,"CX":-30,"CY":-30,"C|":-20,"CÄ":-10,"CÅ":-10,"E-":-60,"ES":-20,"EU":-20,"Ea":-30,"Ef":-20,"Eg":-10,"Es":-20,"Eu":-10,"Ev":-30,"Ew":-20,"Ey":-30,"E–":-60,"E—":-60,"Eä":-30,"Eå":-30,"E·":-60,"F,":-120,"F-":-60,"F.":-120,"FA":-100,"FS":-30,"FU":-20,"Fa":-50,"Fg":-60,"Fm":-40,"Fn":-40,"Fp":-40,"Fr":-40,"Fs":-50,"Fu":-50,"Fv":-50,"Fw":-40,"Fx":-60,"Fy":-60,"Fz":-60,"F–":-60,"F—":-60,"Fä":-50,"Få":-50,"FÄ":-100,"FÅ":-100,"F·":-60,"G!":-10,"G\"":-20,"G'":-20,"G*":-20,"GB":-10,"GD":-10,"GE":-10,"GF":-10,"GH":-10,"GI":-10,"GJ":-10,"GK":-10,"GL":-10,"GM":-10,"GN":-10,"GP":-10,"GR":-10,"GS":-20,"GT":-60,"GV":-40,"GX":-20,"GY":-60,"G|":-10,"G°":-20,"G’":-20,"K-":-120,"KS":-60,"Ka":-60,"Kf":-20,"Kg":-60,"Ks":-30,"Kt":-30,"Ku":-40,"Kv":-80,"Kw":-50,"Ky":-80,"K–":-120,"K—":-120,"Kä":-60,"Kå":-60,"K·":-120,"L\"":-150,"L'":-150,"L*":-150,"L-":-90,"LS":-30,"LT":-130,"LU":-60,"LV":-90,"LW":-50,"LY":-130,"La":-20,"Lf":-30,"Lt":-20,"Lv":-60,"Lw":-40,"Ly":-80,"L°":-150,"L–":-90,"L—":-90,"L’":-150,"Lä":-20,"Lå":-20,"L·":-90,"P,":-120,"P.":-120,"PA":-60,"PT":-30,"PV":-20,"PX":-60,"PY":-40,"PZ":-50,"PÄ":-60,"PÅ":-60,"RT":-30,"RY":-20,"S\"":-20,"S'":-20,"S*":-20,"SA":-10,"ST":-70,"SU":-20,"SV":-30,"SW":-20,"SX":-40,"SY":-40,"SZ":-20,"Sv":-30,"Sy":-30,"S°":-20,"S’":-20,"SÄ":-10,"SÅ":-10,"T,":-120,"T-":-120,"T.":-120,"TA":-100,"TS":-30,"Ta":-60,"Tg":-80,"Tm":-40,"Tn":-40,"Tp":-40,"Tr":-40,"Ts":-60,"Tu":-40,"Tv":-80,"Tw":-40,"Tx":-60,"Ty":-60,"Tz":-60,"T–":-120,"T—":-120,"Tä":-60,"Tå":-60,"TÄ":-100,"TÅ":-100,"T·":-120,"UA":-20,"UX":-10,"UÄ":-20,"UÅ":-20,"V,":-60,"V-":-30,"V.":-60,"VA":-50,"VS":-20,"Va":-30,"Vg":-30,"Vs":-30,"Vu":-20,"V–":-30,"V—":-30,"Vä":-30,"Vå":-30,"VÄ":-50,"VÅ":-50,"V·":-30,"WA":-20,"WÄ":-20,"WÅ":-20,"X-":-60,"XS":-30,"XU":-10,"Xa":-30,"Xf":-30,"Xg":-30,"Xs":-30,"Xt":-10,"Xu":-30,"Xv":-30,"Xw":-10,"Xy":-40,"X–":-60,"X—":-60,"Xä":-30,"Xå":-30,"X·":-60,"Y,":-120,"Y-":-120,"Y.":-120,"YA":-70,"YS":-40,"Ya":-60,"Yf":-20,"Yg":-80,"Ym":-30,"Yn":-30,"Yp":-30,"Yr":-30,"Ys":-40,"Yu":-30,"Yv":-20,"Yw":-20,"Yx":-30,"Yy":-20,"Yz":-30,"Y–":-120,"Y—":-120,"Yä":-60,"Yå":-60,"YÄ":-70,"YÅ":-70,"Y·":-120,"Z-":-60,"ZS":-20,"ZU":-10,"Za":-20,"Zu":-20,"Zv":-10,"Zy":-10,"Z–":-60,"Z—":-60,"Zä":-20,"Zå":-20,"Z·":-60,"a\"":-30,"a'":-30,"a*":-30,"aT":-60,"aV":-30,"aY":-50,"a°":-30,"a’":-30,"ä\"":-30,"ä'":-30,"ä*":-30,"äT":-60,"äV":-30,"äY":-50,"ä°":-30,"ä’":-30,"å\"":-30,"å'":-30,"å*":-30,"åT":-60,"åV":-30,"åY":-50,"å°":-30,"å’":-30,"c\"":-30,"c'":-30,"c*":-30,"cA":-20,"cT":-80,"cV":-50,"cY":-60,"cv":-20,"cy":-20,"c°":-30,"c’":-30,"cÄ":-20,"cÅ":-20,"e\"":-50,"e'":-50,"e*":-50,"eA":-20,"eT":-80,"eV":-50,"eY":-60,"ev":-10,"ey":-20,"e°":-50,"e’":-50,"eÄ":-20,"eÅ":-20,"é\"":-50,"é'":-50,"é*":-50,"éA":-20,"éT":-80,"éV":-50,"éY":-60,"év":-10,"éy":-20,"é°":-50,"é’":-50,"éÄ":-20,"éÅ":-20,"fA":-30,"fÄ":-30,"fÅ":-30,"g\"":-30,"g'":-30,"g*":-30,"gT":-60,"gV":-30,"gY":-50,"g°":-30,"g’":-30,"h\"":-40,"h'":-40,"h*":-40,"hT":-60,"hV":-30,"hY":-60,"h°":-40,"h’":-40,"k\"":-30,"k'":-30,"k*":-30,"k-":-60,"kT":-60,"kV":-30,"ka":-30,"kf":-20,"kg":-30,"ks":-20,"ku":-20,"kv":-10,"kw":-20,"ky":-10,"k°":-30,"k–":-60,"k—":-60,"k’":-30,"kä":-30,"kå":-30,"k·":-60,"m\"":-40,"m'":-40,"m*":-40,"mT":-60,"mV":-30,"mY":-60,"m°":-40,"m’":-40,"n\"":-40,"n'":-40,"n*":-40,"nT":-60,"nV":-30,"nY":-60,"n°":-40,"n’":-40,"qT":-60,"qV":-30,"qY":-50,"r,":-60,"r-":-30,"r.":-60,"rA":-40,"rX":-30,"rY":-20,"ra":-20,"rg":-15,"r–":-30,"r—":-30,"rä":-20,"rå":-20,"rÄ":-40,"rÅ":-40,"r·":-30,"sA":-20,"sT":-60,"sV":-50,"sY":-60,"sf":-10,"sv":-20,"sw":-10,"sy":-20,"sÄ":-20,"sÅ":-20,"uT":-60,"uV":-30,"uY":-30,"v,":-60,"v.":-60,"vA":-30,"vT":-60,"vX":-30,"vY":-30,"vZ":-10,"vÄ":-30,"vÅ":-30,"w,":-20,"w.":-20,"wA":-10,"wT":-40,"wY":-10,"wÄ":-10,"wÅ":-10,"x-":-30,"xT":-60,"xY":-60,"xa":-15,"xg":-20,"xs":-20,"x–":-30,"x—":-30,"xä":-15,"xå":-15,"x·":-30,"y,":-70,"y.":-70,"yA":-30,"yT":-40,"yX":-30,"yY":-30,"yZ":-30,"yÄ":-30,"yÅ":-30,"zT":-60,"zY":-40,".T":-120,".U":-40,".V":-60,".Y":-120,".v":-60,".w":-20,".y":-50,",T":-120,",U":-40,",V":-60,",Y":-120,",v":-60,",w":-20,",y":-50,"·T":-120,"·V":-30,"·Y":-120,"·x":-30,"*A":-60,"*a":-30,"*ä":-30,"*å":-30,"*Ä":-60,"*Å":-60,"-T":-120,"-V":-30,"-Y":-120,"-x":-30,"–T":-120,"–V":-30,"–Y":-120,"–x":-30,"—T":-120,"—V":-30,"—Y":-120,"—x":-30,"’A":-60,"’a":-30,"’ä":-30,"’å":-30,"’Ä":-60,"’Å":-60,"\"A":-60,"\"a":-30,"\"ä":-30,"\"å":-30,"\"Ä":-60,"\"Å":-60,"'A":-60,"'a":-30,"'ä":-30,"'å":-30,"'Ä":-60,"'Å":-60,"°A":-60,"°a":-30,"°ä":-30,"°å":-30,"°Ä":-60,"°Å":-60,"AC":-20,"AG":-20,"AO":-20,"AQ":-20,"Ac":-20,"Ad":-20,"Ae":-20,"Ao":-20,"Aq":-20,"AØ":-20,"Aö":-20,"AÖ":-20,"Aé":-20,"Aø":-20,"ÄC":-20,"ÄG":-20,"ÄO":-20,"ÄQ":-20,"Äc":-20,"Äd":-20,"Äe":-20,"Äo":-20,"Äq":-20,"ÄØ":-20,"Äö":-20,"ÄÖ":-20,"Äé":-20,"Äø":-20,"ÅC":-20,"ÅG":-20,"ÅO":-20,"ÅQ":-20,"Åc":-20,"Åd":-20,"Åe":-20,"Åo":-20,"Åq":-20,"ÅØ":-20,"Åö":-20,"ÅÖ":-20,"Åé":-20,"Åø":-20,"D\"":-20,"D'":-20,"D*":-20,"DA":-20,"DT":-50,"DV":-20,"DX":-30,"DY":-40,"DZ":-20,"Dx":-10,"D°":-20,"D’":-20,"DÄ":-20,"DÅ":-20,"EC":-20,"EG":-20,"EO":-20,"EQ":-20,"Ec":-30,"Ed":-30,"Ee":-30,"Eo":-30,"Eq":-30,"EØ":-20,"Eö":-30,"EÖ":-20,"Eé":-30,"Eø":-30,"FC":-20,"FG":-20,"FO":-20,"FQ":-20,"Fc":-50,"Fd":-50,"Fe":-50,"Fo":-50,"Fq":-50,"FØ":-20,"Fö":-50,"FÖ":-20,"Fé":-50,"Fø":-50,"KC":-50,"KG":-50,"KO":-50,"KQ":-50,"Kc":-60,"Kd":-60,"Ke":-60,"Ko":-60,"Kq":-60,"KØ":-50,"Kö":-60,"KÖ":-50,"Ké":-60,"Kø":-60,"LC":-30,"LG":-30,"LO":-30,"LQ":-30,"Lc":-20,"Ld":-20,"Le":-20,"Lo":-20,"Lq":-20,"LØ":-30,"Lö":-20,"LÖ":-30,"Lé":-20,"Lø":-20,"O\"":-20,"O'":-20,"O*":-20,"OA":-20,"OT":-50,"OV":-20,"OX":-30,"OY":-40,"OZ":-20,"Ox":-10,"O°":-20,"O’":-20,"OÄ":-20,"OÅ":-20,"Ö\"":-20,"Ö'":-20,"Ö*":-20,"ÖA":-20,"ÖT":-50,"ÖV":-20,"ÖX":-30,"ÖY":-40,"ÖZ":-20,"Öx":-10,"Ö°":-20,"Ö’":-20,"ÖÄ":-20,"ÖÅ":-20,"Ø\"":-20,"Ø'":-20,"Ø*":-20,"ØA":-20,"ØT":-50,"ØV":-20,"ØX":-30,"ØY":-40,"ØZ":-20,"Øx":-10,"Ø°":-20,"Ø’":-20,"ØÄ":-20,"ØÅ":-20,"Q\"":-20,"Q'":-20,"Q*":-20,"QA":-20,"QT":-50,"QV":-20,"QX":-30,"QY":-40,"QZ":-20,"Qx":-10,"Q°":-20,"Q’":-20,"QÄ":-20,"QÅ":-20,"TC":-50,"TG":-50,"TO":-50,"TQ":-50,"Tc":-60,"Td":-60,"Te":-60,"To":-60,"Tq":-60,"TØ":-50,"Tö":-60,"TÖ":-50,"Té":-60,"Tø":-60,"UC":-30,"UG":-30,"UO":-30,"UQ":-30,"UØ":-30,"UÖ":-30,"VC":-20,"VG":-20,"VO":-20,"VQ":-20,"Vc":-20,"Vd":-20,"Ve":-20,"Vo":-20,"Vq":-20,"VØ":-20,"Vö":-20,"VÖ":-20,"Vé":-20,"Vø":-20,"XC":-40,"XG":-40,"XO":-40,"XQ":-40,"Xc":-30,"Xd":-30,"Xe":-30,"Xo":-30,"Xq":-30,"XØ":-40,"Xö":-30,"XÖ":-40,"Xé":-30,"Xø":-30,"YC":-40,"YG":-40,"YO":-40,"YQ":-40,"Yc":-70,"Yd":-70,"Ye":-70,"Yo":-70,"Yq":-70,"YØ":-40,"Yö":-70,"YÖ":-40,"Yé":-70,"Yø":-70,"ZC":-20,"ZG":-20,"ZO":-20,"ZQ":-20,"Zc":-20,"Zd":-20,"Ze":-20,"Zo":-20,"Zq":-20,"ZØ":-20,"Zö":-20,"ZÖ":-20,"Zé":-20,"Zø":-20,"b\"":-30,"b'":-30,"b*":-30,"bA":-20,"bT":-80,"bV":-50,"bX":-30,"bY":-70,"bf":-20,"bv":-10,"bx":-15,"by":-10,"b°":-30,"b’":-30,"bÄ":-20,"bÅ":-20,"kc":-30,"kd":-30,"ke":-30,"ko":-30,"kq":-30,"kö":-30,"ké":-30,"kø":-30,"o\"":-30,"o'":-30,"o*":-30,"oA":-20,"oT":-80,"oV":-50,"oX":-30,"oY":-70,"of":-20,"ov":-10,"ox":-15,"oy":-10,"o°":-30,"o’":-30,"oÄ":-20,"oÅ":-20,"ö\"":-30,"ö'":-30,"ö*":-30,"öA":-20,"öT":-80,"öV":-50,"öX":-30,"öY":-70,"öf":-20,"öv":-10,"öx":-15,"öy":-10,"ö°":-30,"ö’":-30,"öÄ":-20,"öÅ":-20,"ø\"":-30,"ø'":-30,"ø*":-30,"øA":-20,"øT":-80,"øV":-50,"øX":-30,"øY":-70,"øf":-20,"øv":-10,"øx":-15,"øy":-10,"ø°":-30,"ø’":-30,"øÄ":-20,"øÅ":-20,"p\"":-30,"p'":-30,"p*":-30,"pA":-20,"pT":-80,"pV":-50,"pX":-30,"pY":-70,"pf":-20,"pv":-10,"px":-15,"py":-10,"p°":-30,"p’":-30,"pÄ":-20,"pÅ":-20,"rc":-25,"rd":-25,"re":-25,"ro":-25,"rq":-25,"rö":-25,"ré":-25,"rø":-25,"xc":-20,"xd":-20,"xe":-20,"xo":-20,"xq":-20,"xö":-20,"xé":-20,"xø":-20,".C":-40,".G":-40,".O":-40,".Q":-40,".Ø":-40,".Ö":-40,",C":-40,",G":-40,",O":-40,",Q":-40,",Ø":-40,",Ö":-40,"*c":-10,"*d":-10,"*e":-10,"*o":-10,"*q":-10,"*ö":-10,"*é":-10,"*ø":-10,"’c":-10,"’d":-10,"’e":-10,"’o":-10,"’q":-10,"’ö":-10,"’é":-10,"’ø":-10,"\"c":-10,"\"d":-10,"\"e":-10,"\"o":-10,"\"q":-10,"\"ö":-10,"\"é":-10,"\"ø":-10,"'c":-10,"'d":-10,"'e":-10,"'o":-10,"'q":-10,"'ö":-10,"'é":-10,"'ø":-10,"°c":-10,"°d":-10,"°e":-10,"°o":-10,"°q":-10,"°ö":-10,"°é":-10,"°ø":-10}};
var LASER_GLYPHS = {};
for (let [ch, d] of Object.entries(LASER_FONT.d)) {
  let cmds = [];
  d.replace(/([MLQCZ])([^MLQCZ]*)/g, (_, c, a) => {
    cmds.push([c, ...a.trim().split(/\s+/).filter(Boolean).map(Number)]);
    return "";
  });
  LASER_GLYPHS[ch] = cmds;
}

var fmm = v => {
  let s = String(Math.round(v * 1e3) / 1e3);
  return s === "-0" ? "0" : s
};
var xmlEsc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function laserNewSerial() {
  let d = new Date(),
    p = n => String(n).padStart(2, "0"),
    abc = "0123456789ABCDEFGHJKMNPQRSTVWXYZ", // Crockford base 32, no I L O U
    r = crypto.getRandomValues(new Uint8Array(4));
  return `NG-${p(d.getFullYear() % 100)}${p(d.getMonth() + 1)}${p(d.getDate())}-${[...r].map(b => abc[b & 31]).join("")}`
}

function laserCleanSerial(s) {
  return String(s || "").toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 24)
}

/* ---------- text as filled outlines ---------- */
function laserTextWidth(str, cap) {
  let w = 0;
  for (let n = 0; n < str.length; n++) {
    let ch = str[n] in LASER_FONT.adv ? str[n] : "?";
    w += LASER_FONT.adv[ch];
    if (n + 1 < str.length) w += LASER_FONT.kern[ch + str[n + 1]] || 0
  }
  return w * cap / LASER_FONT.cap
}

// x, y is the baseline anchor. cap = cap height in mm. angle in degrees, clockwise on the sheet.
function laserText(str, x, y, cap, {
  anchor = "start",
  angle = 0
} = {}) {
  let k = cap / LASER_FONT.cap,
    w = laserTextWidth(str, cap),
    shift = anchor === "middle" ? -w / 2 : anchor === "end" ? -w : 0,
    a = angle * Math.PI / 180,
    c = Math.cos(a),
    s = Math.sin(a),
    pt = (lx, ly) => `${fmm(x + lx * c - ly * s)} ${fmm(y + lx * s + ly * c)}`,
    out = [],
    pen = 0;
  for (let n = 0; n < str.length; n++) {
    let ch = str[n] in LASER_FONT.adv ? str[n] : "?";
    for (let [cmd, ...v] of LASER_GLYPHS[ch] || []) {
      let pts = [];
      for (let j = 0; j < v.length; j += 2) pts.push(pt(shift + (pen + v[j]) * k, -v[j + 1] * k));
      out.push(cmd + pts.join(" "))
    }
    pen += LASER_FONT.adv[ch];
    if (n + 1 < str.length) pen += LASER_FONT.kern[ch + str[n + 1]] || 0
  }
  return out.join("")
}

// Centred on (cx, cy), shrunk to fit maxW. Returns "" when it can't be engraved legibly.
function laserFitText(str, cx, cy, maxW, cap, angle = 0) {
  let w = laserTextWidth(str, cap);
  if (w > maxW) cap *= maxW / w;
  if (cap < 1.6) return "";
  let a = angle * Math.PI / 180,
    ox = -Math.sin(a) * cap / 2,
    oy = Math.cos(a) * cap / 2;
  return laserText(str, cx + ox, cy + oy, cap, {
    anchor: "middle",
    angle
  })
}

/* ---------- outline helpers ---------- */
// Miter offset of a simple polygon. d > 0 grows the part (moves the cut away from the material).
function laserOffset(pts, d) {
  let P = pts.filter((p, n) => {
      let q = pts[(n + 1) % pts.length];
      return Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-6
    }),
    N = P.length,
    area = 0;
  for (let n = 0; n < N; n++) {
    let [x0, y0] = P[n], [x1, y1] = P[(n + 1) % N];
    area += x0 * y1 - x1 * y0
  }
  let sg = area > 0 ? 1 : -1,
    nrm = (p, q) => {
      let dx = q[0] - p[0],
        dy = q[1] - p[1],
        l = Math.hypot(dx, dy);
      return [sg * dy / l, -sg * dx / l]
    };
  return P.map((p, n) => {
    let a = nrm(P[(n - 1 + N) % N], p),
      b = nrm(p, P[(n + 1) % N]),
      mx = a[0] + b[0],
      my = a[1] + b[1],
      ml = Math.hypot(mx, my);
    if (ml < 1e-9) return [p[0] + a[0] * d, p[1] + a[1] * d];
    mx /= ml, my /= ml;
    let L = d / Math.max(mx * a[0] + my * a[1], .25);
    return [p[0] + mx * L, p[1] + my * L]
  })
}

var laserPoly = (pts, ox, oy) => pts.map(([x, y], n) => `${n ? "L" : "M"}${fmm(ox + x)} ${fmm(oy + y)}`).join("") + "Z";
var laserCircle = (cx, cy, r) => `M${fmm(cx + r)} ${fmm(cy)}A${fmm(r)} ${fmm(r)} 0 1 0 ${fmm(cx - r)} ${fmm(cy)}A${fmm(r)} ${fmm(r)} 0 1 0 ${fmm(cx + r)} ${fmm(cy)}Z`;

// Relief radius at the notch bottoms, mm. Capped so a flat stays between the two reliefs.
function reliefR(T) {
  return Math.min(1, T / 4)
}

// Outline of a disc with radial notches at `angles`, as segments in maths coordinates (y up),
// offset outward by d (half the kerf). R outer radius, w half the notch width, m notch bottom radius.
// Each notch bottom has two round relief cuts (dog-bones) of radius rr: semicircles through the
// inside corners, so the acrylic has no sharp corner and the square end of a support still seats flat.
// A segment is {p} (line to p) or {p, c, r, cw} (arc to p around c).
function notchedDiscSegs(R, w, m, rr, angles, d = 0) {
  let Ro = R + d,
    wo = w - d,
    mo = m + d,
    a = Math.sqrt(Ro * Ro - wo * wo),
    q = rr / Math.SQRT2,
    rho = rr - d,
    s = Math.sqrt(Math.max(0, rho * rho - (d - q) ** 2)),
    segs = [];
  return angles.forEach((phi, k) => {
    let c = Math.cos(phi),
      sn = Math.sin(phi),
      P = (r, l) => [r * c - l * sn, r * sn + l * c], // r along the support, l sideways
      next = k + 1 < angles.length ? angles[k + 1] : angles[0] + 2 * Math.PI;
    k || segs.push({
      p: P(a, -wo)
    });
    rr > 0 ? segs.push({
      p: P(m + q + s, -wo)
    }, {
      p: P(mo, -(w - q - s)),
      c: P(m + q, -w + q),
      r: rho,
      cw: !0
    }, {
      p: P(mo, w - q - s)
    }, {
      p: P(m + q + s, wo),
      c: P(m + q, w - q),
      r: rho,
      cw: !0
    }) : segs.push({
      p: P(mo, -wo)
    }, {
      p: P(mo, wo)
    });
    segs.push({
      p: P(a, wo)
    }, {
      p: [a * Math.cos(next) + wo * Math.sin(next), a * Math.sin(next) - wo * Math.cos(next)],
      c: [0, 0],
      r: Ro,
      cw: !1
    })
  }), segs
}

// Start angle and swept angle (always positive) of an arc segment that starts at `from`.
function arcSpan(from, sg) {
  let t0 = Math.atan2(from[1] - sg.c[1], from[0] - sg.c[0]),
    t1 = Math.atan2(sg.p[1] - sg.c[1], sg.p[0] - sg.c[0]),
    d = sg.cw ? t0 - t1 : t1 - t0;
  for (; d <= 1e-12;) d += 2 * Math.PI;
  return {
    t0,
    d
  }
}

// Polyline outline for the 3D model (same units as R).
function notchedDiscPoints(R, w, m, angles, seg = 128, rr = 0) {
  let segs = notchedDiscSegs(R, w, m, rr, angles),
    pts = [segs[0].p];
  for (let i = 1; i < segs.length; i++) {
    let sg = segs[i];
    if (sg.c) {
      let {
        t0,
        d
      } = arcSpan(segs[i - 1].p, sg), n = sg.r < R / 4 ? 8 : Math.max(2, Math.ceil(d / (2 * Math.PI) * seg));
      for (let j = 1; j < n; j++) {
        let t = t0 + (sg.cw ? -d : d) * j / n;
        pts.push([sg.c[0] + sg.r * Math.cos(t), sg.c[1] + sg.r * Math.sin(t)])
      }
    }
    pts.push(sg.p)
  }
  return pts.pop(), pts
}

// The same outline as an SVG path with true arcs, seen from above (sheet y points down).
function notchedDiscPath(cx, cy, segs) {
  let P = ([x, y]) => `${fmm(cx + x)} ${fmm(cy - y)}`,
    d = `M${P(segs[0].p)}`;
  for (let i = 1; i < segs.length; i++) {
    let sg = segs[i];
    if (sg.c) {
      let sw = arcSpan(segs[i - 1].p, sg).d;
      // y is flipped on the sheet, so clockwise in maths coordinates is sweep-flag 1
      d += `A${fmm(sg.r)} ${fmm(sg.r)} 0 ${sw > Math.PI ? 1 : 0} ${sg.cw ? 1 : 0} ${P(sg.p)}`
    } else d += `L${P(sg.p)}`
  }
  return d + "Z"
}

/* ---------- parts and sheet layout ---------- */
var cm1 = v => cn(v / 10).replace(/\.0$/, ""); // mm -> "61" or "45.7" (cm)

function laserJoint(cfg = Le, geo = um(cfg)) {
  return {
    slot: cfg.acrylic,
    notch: cfg.ply,
    depthSupport: (geo.lockR - geo.rIn) * 10,
    depthDisc: (geo.discR - geo.lockR) * 10
  }
}

// Draw a part at (ox, oy). rot = 1 turns it a quarter turn clockwise on the sheet.
function laserPlace(it, ox, oy, rot) {
  let T = rot ? (x, y) => [ox + it.h - y, oy + x] : (x, y) => [ox + x, oy + y],
    cut = it.shapes.map(s => {
      if (s.t === "poly") return laserPoly(s.pts.map(([x, y]) => T(x, y)), 0, 0);
      let [cx, cy] = T(s.cx, s.cy);
      // the disc and ring have four notches 90 degrees apart, so a quarter turn leaves them unchanged
      return s.t === "circle" ? laserCircle(cx, cy, s.r) : notchedDiscPath(cx, cy, s.segs)
    }),
    engrave = it.texts.map(t => {
      let [cx, cy] = T(t.cx, t.cy);
      return laserFitText(t.str, cx, cy, t.maxW, t.cap, (t.angle || 0) + (rot ? 90 : 0))
    }).filter(Boolean);
  return {
    cut,
    engrave
  }
}

function laserPlan(cfg = Le, geo = um(cfg)) {
  let kp = cfg.kerfPly / 2,
    ko = cfg.kerfOpal / 2,
    T = cfg.ply,
    O = cfg.acrylic,
    serial = cfg.serial || "",
    mm = v => v * 10,
    parts = {
      plywood: [],
      acrylic: []
    },
    problems = [];

  // Supports: 4 identical plywood ribs. The serial is engraved on support 1 only,
  // on the tab above the top disc, which is hidden once the lamp is assembled.
  let rib = laserOffset(dm(geo).map(p => [mm(p.x - geo.rIn), mm(geo.top - p.y)]), kp),
    x0 = Math.min(...rib.map(p => p[0])),
    y0 = Math.min(...rib.map(p => p[1])),
    ribPts = rib.map(([x, y]) => [x - x0, y - y0]),
    ribW = Math.max(...ribPts.map(p => p[0])),
    ribH = Math.max(...ribPts.map(p => p[1])),
    tabH = mm(geo.top - (geo.yDisc + geo.opal / 2)),
    tabW = mm(geo.tiers[0] - geo.rIn);
  for (let n = 1; n <= 4; n++) parts.plywood.push({
    id: `support-${n}`,
    kind: "support",
    w: ribW,
    h: ribH,
    shapes: [{
      t: "poly",
      pts: ribPts
    }],
    texts: n === 1 && cfg.marks && serial ? [{
      str: serial,
      cx: tabW / 2 - x0,
      cy: tabH / 2 - y0,
      maxW: tabW - 8,
      cap: Math.min(3, tabH * .34)
    }] : []
  });

  // Opal disc (top) and ring (bottom), notched for the supports
  let R = mm(geo.discR),
    Ro = R + ko,
    disc = {
      t: "disc",
      cx: Ro,
      cy: Ro,
      segs: notchedDiscSegs(R, T / 2, mm(geo.lockR), reliefR(T), ud, ko)
    };
  parts.acrylic.push({
    id: "disc",
    kind: "disc",
    w: 2 * Ro,
    h: 2 * Ro,
    shapes: [{
      t: "circle",
      cx: Ro,
      cy: Ro,
      r: mm(geo.holeR) - ko
    }, disc],
    texts: []
  }, {
    id: "ring",
    kind: "ring",
    w: 2 * Ro,
    h: 2 * Ro,
    shapes: [{
      t: "circle",
      cx: Ro,
      cy: Ro,
      r: mm(geo.ringIn) - ko
    }, disc],
    texts: []
  });

  // Fit-test pieces: a small copy of the joint, with the same split and reliefs. Cut these first.
  let V = LASER.fitOverlap,
    share = (geo.lockR - geo.rIn) / (geo.discR - geo.rIn), // 0.6
    Ds = V * share, // slot depth in the plywood piece
    Dn = V - Ds, // notch depth in the acrylic piece
    cw = 40,
    ch = 24,
    plyTest = laserOffset([
      [0, 0],
      [cw, 0],
      [cw, ch],
      [0, ch],
      [0, ch / 2 + O / 2],
      [Ds, ch / 2 + O / 2],
      [Ds, ch / 2 - O / 2],
      [0, ch / 2 - O / 2]
    ], kp).map(([x, y]) => [x + kp, y + kp]),
    // acrylic strip, V wide in the joint direction, notch from its right edge; reliefs as short polylines
    w = T / 2,
    rr = reliefR(T),
    q = rr / Math.SQRT2,
    relief = (cx, cy, from) => Array.from({
      length: 11
    }, (_, j) => {
      let t = from - Math.PI * j / 10;
      return [cx + rr * Math.cos(t), cy + rr * Math.sin(t)]
    }),
    acrNominal = [
      [0, 0],
      [V, 0],
      [V, 20 - w],
      ...relief(V - Dn + q, 20 - w + q, -Math.PI / 4),
      ...relief(V - Dn + q, 20 + w - q, 5 * Math.PI / 4),
      [V, 20 + w],
      [V, 40],
      [0, 40]
    ],
    acrTest = laserOffset(acrNominal, ko).map(([x, y]) => [x + ko, y + ko]);
  parts.plywood.push({
    id: "fit-test-plywood",
    kind: "fit",
    fit: !0,
    w: cw + 2 * kp,
    h: ch + 2 * kp,
    shapes: [{
      t: "poly",
      pts: plyTest
    }],
    texts: []
  });
  parts.acrylic.push({
    id: "fit-test-acrylic",
    kind: "fit",
    fit: !0,
    w: V + 2 * ko,
    h: 40 + 2 * ko,
    shapes: [{
      t: "poly",
      pts: acrTest
    }],
    texts: []
  });

  // Shelf-pack each material. Plywood goes on the chosen stock sheet, the rest on the full bed.
  let ps = sheetSize("plywood", cfg),
    as = sheetSize("acrylic", cfg),
    materials = [{
      key: "plywood",
      name: `Plywood ${cn(T)} mm`,
      slug: "plywood",
      kerf: cfg.kerfPly,
      w: ps.w,
      h: ps.h
    }, {
      key: "acrylic",
      name: `Opal acrylic ${cn(O)} mm`,
      slug: "acrylic",
      kerf: cfg.kerfOpal,
      w: as.w,
      h: as.h
        }],
    sheets = [];
  for (let mat of materials) {
    let items = parts[mat.key];
    if (!items.length) continue;
    let M = LASER.margin,
      uw = mat.w - 2 * M,
      uh = mat.h - 2 * M,
      sheet, x, y, rowH, open = () => {
        sheet = {
          mat,
          w: mat.w,
          h: mat.h,
          placed: []
        }, sheets.push(sheet), x = y = M, rowH = 0
      };
    open();
    for (let it of items) {
      let rot = it.w <= uw && it.h <= uh ? 0 : it.h <= uw && it.w <= uh ? 1 : -1;
      if (rot < 0) {
        problems.push({
          it,
          mat
        });
        continue
      }
      let w = rot ? it.h : it.w,
        h = rot ? it.w : it.h;
      x + w > mat.w - M && x > M && (x = M, y += rowH + LASER.gap, rowH = 0);
      y + h > mat.h - M && sheet.placed.length && open();
      sheet.placed.push({
        it,
        x,
        y,
        rot
      }), x += w + LASER.gap, rowH = Math.max(rowH, h)
    }
    sheet.placed.length || sheets.pop()
  }
  let perMat = {};
  return sheets.forEach(s => {
    perMat[s.mat.key] = (perMat[s.mat.key] || 0) + 1, s.part = perMat[s.mat.key]
  }), sheets.forEach(s => {
    let of = perMat[s.mat.key];
    s.title = of > 1 ? `${s.mat.name}, ${s.part} of ${of}` : s.mat.name, s.slug = of > 1 ? `${s.mat.slug}-${s.part}` : s.mat.slug, s.sizeLabel = `${cm1(s.w)} \xD7 ${cm1(s.h)} cm`;
    let p = s.placed.map(q => q.it),
      cnt = k => p.filter(q => q.kind === k).length,
      what = [];
    cnt("support") && what.push(`${cnt("support")} support${cnt("support") > 1 ? "s" : ""}`), cnt("disc") && what.push("top disc"), cnt("ring") && what.push("bottom ring");
    cnt("fit") && what.push("fit test"), s.what = what.join(", ")
  }), {
    sheets,
    problems,
    plySheets: perMat.plywood || 0,
    acrSheets: perMat.acrylic || 0,
    plySize: ps,
    acrSize: as,
    cfg
  }
}

function laserProblem(plan) {
  let seen = {},
    msgs = [];
  return plan.problems.forEach(({
    it,
    mat
  }) => {
    if (seen[mat.key] || it.kind === "fit") return;
    seen[mat.key] = 1;
    let a = Math.max(it.w, it.h),
      b = Math.min(it.w, it.h),
      what = it.kind === "support" ? `The supports are ${cm1(a)} \xD7 ${cm1(b)} cm` : `The disc and ring are \xD8 ${cm1(a)} cm`;
    msgs.push(`${what} and don't fit on a ${cm1(mat.w)} \xD7 ${cm1(mat.h)} cm ${mat.key} sheet${it.kind === "support" ? ", even turned" : ""}.`)
  }), msgs.length ? msgs.join(" ") + " Choose a larger sheet or a smaller lamp." : ""
}

function laserSheetSvg(sheet, idx, ox) {
  let id = `sheet-${idx + 1}`,
    cutEl = (d, pid) => `      <path id="${id}-${pid}" d="${d}" fill="none" stroke="${LASER.cutColor}" stroke-width="${LASER.cutWidth}"/>`,
    engEl = d => `      <path d="${d}" fill="${LASER.engraveColor}" stroke="none"/>`,
    eng = [],
    cut = [],
    fit = [];
  for (let {
      it,
      x,
      y,
      rot
    } of sheet.placed) {
    let r = laserPlace(it, ox + x, y, rot);
    r.cut.forEach((d, n) => (it.fit ? fit : cut).push(cutEl(d, it.id + (n < r.cut.length - 1 ? "-inner" : "")))), r.engrave.forEach(d => eng.push(engEl(d)))
  }
  let layer = (lid, label, body) => body.length ? `    <g id="${id}-${lid}" inkscape:groupmode="layer" inkscape:label="${xmlEsc(label)}">
${body.join("\n")}
    </g>
` : "";
  return `  <g id="${id}" inkscape:groupmode="layer" inkscape:label="${xmlEsc(`${idx + 1} ${sheet.title}, ${sheet.sizeLabel}`)}">
${layer("engrave", "Engrave (serial)", eng)}${layer("fit", "Fit test (cut first)", fit)}${layer("cut", "Cut", cut)}  </g>`
}

function laserSvg(plan, which = null) {
  let cfg = plan.cfg,
    list = which == null ? plan.sheets.map((s, n) => [s, n]) : [
      [plan.sheets[which], which]
    ],
    offs = [],
    W = 0;
  list.forEach(([s], k) => {
    offs.push(W), W += s.w + (k < list.length - 1 ? LASER.sheetGap : 0)
  });
  let H = Math.max(...list.map(([s]) => s.h)),
    j = laserJoint(cfg),
    meta = {
      generator: "Nordgrain veneer pendant configurator",
      serial: cfg.serial,
      created: new Date().toISOString(),
      laser: "Epilog Fusion Pro 48",
      bed_mm: [LASER.bedW, LASER.bedH],
      units: "mm",
      cut: {
        fill: "none",
        stroke: LASER.cutColor,
        strokeWidth_mm: LASER.cutWidth
      },
      engrave: {
        fill: LASER.engraveColor,
        stroke: "none",
        content: "serial number on support 1"
      },
      plywood_mm: cfg.ply,
      plywoodSheet_mm: [plan.plySize.w, plan.plySize.h],
      acrylicSheet_mm: [plan.acrSize.w, plan.acrSize.h],
      acrylic_mm: cfg.acrylic,
      kerf_mm: {
        plywood: cfg.kerfPly,
        acrylic: cfg.kerfOpal
      },
      joint_mm: {
        supportSlotHeight: j.slot,
        supportSlotDepth: +j.depthSupport.toFixed(2),
        discNotchWidth: j.notch,
        discNotchDepth: +j.depthDisc.toFixed(2)
      },
      veneer: "not included",
      sheets: plan.sheets.map((s, n) => `${n + 1}: ${s.title}, ${s.sizeLabel} (${s.what})`),
      lampConfig: cfg
    },
    body = list.map(([s, n], k) => laserSheetSvg(s, n, offs[k])).join("\n"),
    title = which == null ? "all sheets" : `sheet ${which + 1} of ${plan.sheets.length}, ${list[0][0].title}`;
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Nordgrain layered veneer pendant, serial ${cfg.serial}. Laser cutting file for Epilog Fusion Pro 48, 1:1 in mm.
     Each sheet is a layer the size of its stock sheet (the Fusion Pro 48 bed is ${LASER.bedW} x ${LASER.bedH} mm),
     with sub-layers: Engrave (serial, filled text, no stroke), Fit test (cut first) and Cut (fill none, ${LASER.cutWidth} mm stroke).
     Outlines are already offset by half the kerf. Veneer bands are not included. -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" version="1.1" width="${fmm(W)}mm" height="${fmm(H)}mm" viewBox="0 0 ${fmm(W)} ${fmm(H)}">
  <title>${xmlEsc(`${cfg.serial} Nordgrain layered veneer pendant, ${title}`)}</title>
  <desc>${xmlEsc(`Serial ${cfg.serial}. ${cn(cfg.diameter)} x ${cn(cfg.height)} cm lamp. Plywood ${cn(cfg.ply)} mm on ${cm1(plan.plySize.w)} x ${cm1(plan.plySize.h)} cm sheets, opal acrylic ${cn(cfg.acrylic)} mm on ${cm1(plan.acrSize.w)} x ${cm1(plan.acrSize.h)} cm sheets. Kerf: plywood ${cn(cfg.kerfPly, 2)} mm, acrylic ${cn(cfg.kerfOpal, 2)} mm.`)}</desc>
  <metadata id="nordgrain-lamp"><![CDATA[${JSON.stringify(meta)}]]></metadata>
  <sodipodi:namedview id="namedview" inkscape:document-units="mm" pagecolor="#ffffff" bordercolor="#666666"/>
${body}
</svg>
`
}

function laserFileName(plan, which = null) {
  let base = `${wm()}-${plan.cfg.serial}`;
  return which == null ? `${base}-laser.svg` : `${base}-sheet-${which + 1}-${plan.sheets[which].slug}.svg`
}

function laserDownload(which = null) {
  Le.serial || (Le.serial = laserNewSerial(), syncLaser());
  let plan = laserPlan(),
    problem = laserProblem(plan);
  if (problem) return void Di(problem, "error");
  let name = laserFileName(plan, which);
  Um(new Blob([laserSvg(plan, which)], {
    type: "image/svg+xml"
  }), name);
  Di(`Downloaded ${name}`)
}

/* ---------- laser controls ---------- */
Le.serial || (Le.serial = laserNewSerial());
var laserSheetsEl = Xe("#laserSheets");
Object.entries(SHEET_KEYS).forEach(([mat, k]) => Object.entries(SHEETS[mat]).forEach(([key, v]) => {
  let o = document.createElement("option");
  o.value = key, o.textContent = v.label, Xe(`#${k}Sheet`).appendChild(o)
}));

function syncLaser() {
  let set = (sel, v) => {
      let el = Xe(sel);
      el && document.activeElement !== el && (el.value = v)
    },
    out = (sel, v) => Xe(sel).textContent = v;
  set("#ply", Le.ply), out("#plyOut", `${cn(Le.ply)} mm`), set("#overlap", Le.overlap), out("#overlapOut", `${Le.overlap} mm`), set("#veneer", Le.veneer), out("#veneerOut", `${cn(Le.veneer, 2)} mm`), out("#overlapHint", `Band lengths include the seam overlap and ${cn(Math.PI * Le.veneer, 1)} mm extra for wrapping ${cn(Le.veneer, 2)} mm veneer around the supports. The slits in the supports are ${cn(Math.max(1.2, Le.veneer + .4), 1)} mm wide, and the middle band rests on a 2 mm ledge on each support that reaches ${cn(Le.veneer + .5, 2)} mm out.`), set("#acrylic", Le.acrylic), out("#acrylicOut", `${cn(Le.acrylic)} mm`), set("#kerfPly", Le.kerfPly), out("#kerfPlyOut", `${cn(Le.kerfPly, 2)} mm`), set("#kerfOpal", Le.kerfOpal), out("#kerfOpalOut", `${cn(Le.kerfOpal, 2)} mm`), Xe("#marks").checked = Le.marks, Object.values(SHEET_KEYS).forEach(k => {
    set(`#${k}Sheet`, Le[k + "Sheet"]), set(`#${k}SheetW`, Le[k + "SheetW"]), set(`#${k}SheetH`, Le[k + "SheetH"]), Xe(`#${k}Custom`).hidden = Le[k + "Sheet"] !== "custom"
  }), set("#serial", Le.serial), out("#lede", `Five bands of thin veneer on four ${cn(Le.ply)} mm plywood supports, locked into ${cn(Le.acrylic)} mm opal acrylic: a disc at the top and a ring at the bottom.`);
  let plan = laserPlan(),
    j = laserJoint(),
    problem = laserProblem(plan),
    count = (n, sz) => `${n} sheet${n > 1 ? "s" : ""} of ${cm1(sz.w)} \xD7 ${cm1(sz.h)} cm`,
    layout = problem || `Plywood: ${count(plan.plySheets, plan.plySize)}. Acrylic: ${count(plan.acrSheets, plan.acrSize)}.`;
  out("#laserNote", `${layout} The supports have ${cn(j.slot)} mm slots ${cn(j.depthSupport)} mm deep; the disc and ring have ${cn(j.notch)} mm notches ${cn(j.depthDisc)} mm deep with ${+reliefR(Le.ply).toFixed(2)} mm round reliefs in the corners.`.replace(/\s+/g, " ").trim()), Xe("#laserNote").dataset.kind = problem ? "error" : "", Xe("#laserAll").disabled = !!problem, laserSheetsEl.innerHTML = "", plan.sheets.forEach((sh, n) => {
    let b = document.createElement("button");
    b.type = "button", b.className = "chip", b.disabled = !!problem, b.textContent = `${n + 1}. ${sh.title}`, b.title = `${sh.what}, ${sh.sizeLabel}. Download as its own file.`, b.addEventListener("click", () => laserDownload(n)), laserSheetsEl.appendChild(b)
  })
}
Xe("#ply").addEventListener("input", i => {
  Le.ply = +i.target.value, syncLaser(), Pm()
});
Xe("#veneer").addEventListener("input", i => {
  Le.veneer = +i.target.value, syncLaser(), Pm()
});
Xe("#overlap").addEventListener("input", i => {
  Le.overlap = +i.target.value, syncLaser(), Pm()
});
Xe("#acrylic").addEventListener("input", i => {
  Le.acrylic = +i.target.value, syncLaser(), Pm()
});
Object.values(SHEET_KEYS).forEach(k => {
  Xe(`#${k}Sheet`).addEventListener("change", i => {
    Le[k + "Sheet"] = i.target.value, syncLaser()
  });
  ["W", "H"].forEach(d => {
    let key = `${k}Sheet${d}`,
      el = Xe("#" + key);
    el.addEventListener("input", () => {
      let v = parseFloat(el.value);
      Number.isFinite(v) && (Le[key] = Math.round(Hi(v, ...gc[key]) * 10) / 10, syncLaser())
    }), el.addEventListener("change", () => {
      el.value = Le[key], syncLaser()
    })
  })
});
Xe("#kerfPly").addEventListener("input", i => {
  Le.kerfPly = +i.target.value, syncLaser()
});
Xe("#kerfOpal").addEventListener("input", i => {
  Le.kerfOpal = +i.target.value, syncLaser()
});
Xe("#marks").addEventListener("change", i => {
  Le.marks = i.target.checked, syncLaser()
});
Xe("#serial").addEventListener("input", i => {
  Le.serial = laserCleanSerial(i.target.value)
});
Xe("#serial").addEventListener("change", i => {
  Le.serial || (Le.serial = laserNewSerial()), i.target.value = Le.serial, syncLaser()
});
Xe("#newSerial").addEventListener("click", () => {
  Le.serial = laserNewSerial(), Xe("#serial").value = Le.serial, syncLaser()
});
Xe("#laserAll").addEventListener("click", () => laserDownload(null));

function Nm() {
  let i = yc.clientWidth,
    e = yc.clientHeight;
  if (!i || !e) return;
  gn.setSize(i, e, !1), $a.setSize(i, e), mn.aspect = i / e, mn.fov = i / e < .9 ? 38 : 30;
  let t = Xe(".toolbar").offsetHeight + 16;
  mn.setViewOffset(i, e, 0, Math.min(t * .5, e * .15), i, e), mn.updateProjectionMatrix()
}
new ResizeObserver(Nm).observe(yc);
var Dr = new I;

function Dm(i) {
  lT(i), Nt.update(), Ct.cutaway && (Dr.copy(mn.position).sub(Nt.target), Dr.y = 0, Dr.lengthSq() < 1e-8 && Dr.set(0, 0, 1), Dr.normalize(), cd.normal.copy(Dr).negate(), cd.constant = 0), $a.render(), requestAnimationFrame(Dm)
}
Promise.all(["light", "dark", "ply"].map(i => QM(mc[i]).then(e => {
od[i] = e
}))).then(() => {
ld.ply = JM(od.ply, yn), ld.ply.repeat.set(1 / 22, 1 / 7.5), eo(), Pc(), hd(), Nm(), requestAnimationFrame(Dm), document.body.classList.add("ready"), window.__lamp = {
  config: () => Le,
  exportModel: Im,
  applyConfig: Em,
  goView: yd,
  view: Ct,
  applyExplode: Qa,
  applyCutaway: hd,
  setHover: Ds
}
}).catch(i => {
console.error(i), Di("The veneer textures failed to load. Reload the page.", "error")
});
})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/