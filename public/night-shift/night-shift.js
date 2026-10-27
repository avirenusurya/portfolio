var ol={halfWidth:.285,back:.04,front:.7},Hu=s=>Math.max(0,Math.min(1,s)),Tr=(s,t,e)=>{let n=Hu((e-s)/(t-s));return n*n*(3-2*n)};function Vu(s,t){let e=t[0]-s.position[0],n=t[2]-s.position[2],i=Math.cos(s.facing),r=Math.sin(s.facing);return[e*i-n*r,t[1]-s.position[1],e*r+n*i]}function Ii(s,t,e=0){let n=Vu(s,t);return Math.abs(n[0])<=ol.halfWidth-e&&n[2]>=ol.back+e&&n[2]<=ol.front-e}function Gu(s,t,e){let n=Hu((t-s.feed.a)/(s.consumed-s.feed.a)),i=Vu(e,s.position),r=Math.max(-.16,Math.min(.16,-i[0]))*Tr(.1,.75,n),o=Math.cos(e.facing),a=Math.sin(e.facing);return{progress:n,position:[s.position[0]+r*o,s.position[1]-Math.max(.08,s.position[1]+.08)*Tr(0,1,n),s.position[2]-r*a],scale:[1-Tr(.12,1,n)*.99,1-Tr(0,.85,n)*.97,1-Tr(.12,1,n)*.99]}}var Cd=0,Wl=1,Pd=2;var ms=1,Id=2,cr=3,ei=0,on=1,De=2,ni=0,lr=1,Xl=2,ql=3,Yl=4,Ld=5;var gs=100,Nd=101,Dd=102,Ud=103,Fd=104,Od=200,Bd=201,zd=202,kd=203,Zl=204,Kl=205,Hd=206,Vd=207,Gd=208,Wd=209,Xd=210,qd=211,Yd=212,Zd=213,Kd=214,oa=0,aa=1,ca=2,qs=3,la=4,ha=5,ua=6,da=7,Jl=0,Jd=1,jd=2,gn=0,jl=1,$l=2,Ql=3,th=4,eh=5,nh=6,ih=7,Il="attached",$d="detached",sh=300,qi=301,xs=302,La=303,Na=304,io=306,zi=1e3,En=1001,Ys=1002,we=1003,Da=1004;var _s=1005;var Ne=1006,hr=1007;var kn=1008;var un=1009,rh=1010,oh=1011,Yi=1012,Ua=1013,Hn=1014,xn=1015,_n=1016,Fa=1017,Oa=1018,ur=1020,ah=35902,ch=35899,lh=1021,hh=1022,vn=1023,Zn=1026,Zi=1027,Ba=1028,za=1029,Ki=1030,ka=1031;var Ha=1033,so=33776,ro=33777,oo=33778,ao=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Za=37496,Ka=37488,Ja=37489,co=37490,ja=37491,$a=37808,Qa=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,lo=36285,xc=36286;var cs=2300,ls=2301,ia=2302,Ll=2303,Nl=2400,Dl=2401,Ul=2402,Qd=2500;var uh=0,ho=1,dr=2,tf=3200;var _c=0,ef=1,wi="",Ie="srgb",sn="srgb-linear",Fr="linear",le="srgb";var sa=7680;var nf=519,sf=512,rf=513,of=514,vc=515,af=516,cf=517,yc=518,lf=519,dh=35044,uo=35048;var fh="300 es",Fn=2e3,Zs=2001;function Cp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hf(){let s=Ks("canvas");return s.style.display="block",s}var Wu={},Js=null;function Or(...s){let t="THREE."+s.shift();Js?Js("log",t,...s):console.log(t,...s)}function uf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Et(...s){s=uf(s);let t="THREE."+s.shift();if(Js)Js("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=uf(s);let t="THREE."+s.shift();if(Js)Js("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function as(...s){let t=s.join(" ");t in Wu||(Wu[t]=!0,Et(...s))}function df(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ff={[oa]:aa,[ca]:ua,[la]:da,[qs]:ha,[aa]:oa,[ua]:ca,[da]:la,[ha]:qs},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,Dr=Math.PI/180,hs=180/Math.PI;function On(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function ph(s,t){return(s%t+t)%t}function Ip(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Lp(s,t,e){return s!==t?(e-s)/(t-s):0}function Ur(s,t,e){return(1-e)*s+e*t}function Np(s,t,e,n){return Ur(s,t,1-Math.exp(-e*n))}function Dp(s,t=1){return t-Math.abs(ph(s,t*2)-t)}function Up(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Op(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bp(s,t){return s+Math.random()*(t-s)}function zp(s){return s*(.5-Math.random())}function kp(s){s!==void 0&&(Xu=s);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(s){return s*Dr}function Vp(s){return s*hs}function Gp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Wp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*d,c*f,c*h,a*l);break;case"YZY":s.set(c*h,a*d,c*f,a*l);break;case"ZXZ":s.set(c*f,c*h,a*d,a*l);break;case"XZX":s.set(a*d,c*p,c*u,a*l);break;case"YXY":s.set(c*u,a*d,c*p,a*l);break;case"ZYZ":s.set(c*p,c*u,a*d,a*l);break;default:Et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mh={DEG2RAD:Dr,RAD2DEG:hs,generateUUID:On,clamp:Qt,euclideanModulo:ph,mapLinear:Ip,inverseLerp:Lp,lerp:Ur,damp:Np,pingpong:Dp,smoothstep:Up,smootherstep:Fp,randInt:Op,randFloat:Bp,randFloatSpread:zp,seededRandom:kp,degToRad:Hp,radToDeg:Vp,isPowerOfTwo:Gp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:ue,denormalize:Un},Ft=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],f=n[i+3],h=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==u||d!==p){let g=c*h+l*u+d*p+f*x;g<0&&(h=-h,u=-u,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),R=Math.sin(M);m=Math.sin(m*M)/R,a=Math.sin(a*M)/R,c=c*m+h*a,l=l*m+u*a,d=d*m+p*a,f=f*m+x*a}else{c=c*m+h*a,l=l*m+u*a,d=d*m+p*a,f=f*m+x*a;let M=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=M,l*=M,d*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],f=r[o],h=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+d*f+c*u-l*h,t[e+1]=c*p+d*h+l*f-a*u,t[e+2]=l*p+d*u+a*h-c*f,t[e+3]=d*p-a*f-c*h-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),f=a(r/2),h=c(n/2),u=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=h*d*f+l*u*p,this._y=l*u*f-h*d*p,this._z=l*d*p+h*u*f,this._w=l*d*f-h*u*p;break;case"YXZ":this._x=h*d*f+l*u*p,this._y=l*u*f-h*d*p,this._z=l*d*p-h*u*f,this._w=l*d*f+h*u*p;break;case"ZXY":this._x=h*d*f-l*u*p,this._y=l*u*f+h*d*p,this._z=l*d*p+h*u*f,this._w=l*d*f-h*u*p;break;case"ZYX":this._x=h*d*f-l*u*p,this._y=l*u*f+h*d*p,this._z=l*d*p-h*u*f,this._w=l*d*f+h*u*p;break;case"YZX":this._x=h*d*f+l*u*p,this._y=l*u*f+h*d*p,this._z=l*d*p-h*u*f,this._w=l*d*f-h*u*p;break;case"XZY":this._x=h*d*f-l*u*p,this._y=l*u*f-h*d*p,this._z=l*d*p+h*u*f,this._w=l*d*f+h*u*p;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],f=e[10],h=n+a+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+i*l-r*c,this._y=i*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),d=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*d,this.y=n+c*d+a*l-r*f,this.z=i+c*f+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new C,qu=new re,Bt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],u=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],R=i[4],y=i[7],S=i[2],T=i[5],w=i[8];return r[0]=o*x+a*M+c*S,r[3]=o*g+a*R+c*T,r[6]=o*m+a*y+c*w,r[1]=l*x+d*M+f*S,r[4]=l*g+d*R+f*T,r[7]=l*m+d*y+f*w,r[2]=h*x+u*M+p*S,r[5]=h*g+u*R+p*T,r[8]=h*m+u*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],f=d*o-a*l,h=a*c-d*r,u=l*r-o*c,p=e*f+n*h+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(i*l-d*n)*x,t[2]=(a*n-i*o)*x,t[3]=h*x,t[4]=(d*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new Bt,Yu=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[sn]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}var Kt=Yp();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Is,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Ks("canvas")),Is.width=t.width,Is.height=t.height;let i=Is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ll(i[o].image)):r.push(ll(i[o]))}else r=ll(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ll(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}var Kp=0,hl=new C,Xe=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=En,i=En,r=Ne,o=kn,a=vn,c=un,l=s.DEFAULT_ANISOTROPY,d=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=On(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Et(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Et(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=sh;Xe.DEFAULT_ANISOTROPY=1;var de=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],d=c[4],f=c[8],h=c[1],u=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,y=(u+1)/2,S=(m+1)/2,T=(d+h)/4,w=(f+x)/4,_=(p+g)/4;return R>y&&R>S?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=T/n,r=w/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-x)/M,this.z=(h-d)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Xe(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new js(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,c,l,d,f,h,u,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,d,f,h,u,p,x,g)}set(t,e,n,i,r,o,a,c,l,d,f,h,u,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=d,m[10]=f,m[14]=h,m[3]=u,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*d,u=o*f,p=a*d,x=a*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=u+p*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=p+u*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*d,u=c*f,p=l*d,x=l*f;e[0]=h+x*a,e[4]=p*a-u,e[8]=o*l,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=u*a-p,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*d,u=c*f,p=l*d,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*d,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*d,u=o*f,p=a*d,x=a*f;e[0]=c*d,e[4]=p*l-u,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=u*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,u=o*l,p=a*c,x=a*l;e[0]=c*d,e[4]=x-h*f,e[8]=p*f+u,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*f+p,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,u=o*l,p=a*c,x=a*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=h*f+x,e[5]=o*d,e[9]=u*f-p,e[2]=p*f-u,e[6]=a*d,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,jp)}lookAt(t,e,n){let i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(n,fn),Li.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(n,fn)),Li.normalize(),Lo.crossVectors(fn,Li),i[0]=Li.x,i[4]=Lo.x,i[8]=fn.x,i[1]=Li.y,i[5]=Lo.y,i[9]=fn.y,i[2]=Li.z,i[6]=Lo.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],u=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],R=n[7],y=n[11],S=n[15],T=i[0],w=i[4],_=i[8],A=i[12],P=i[1],U=i[5],O=i[9],H=i[13],N=i[2],V=i[6],G=i[10],q=i[14],it=i[3],Y=i[7],Q=i[11],tt=i[15];return r[0]=o*T+a*P+c*N+l*it,r[4]=o*w+a*U+c*V+l*Y,r[8]=o*_+a*O+c*G+l*Q,r[12]=o*A+a*H+c*q+l*tt,r[1]=d*T+f*P+h*N+u*it,r[5]=d*w+f*U+h*V+u*Y,r[9]=d*_+f*O+h*G+u*Q,r[13]=d*A+f*H+h*q+u*tt,r[2]=p*T+x*P+g*N+m*it,r[6]=p*w+x*U+g*V+m*Y,r[10]=p*_+x*O+g*G+m*Q,r[14]=p*A+x*H+g*q+m*tt,r[3]=M*T+R*P+y*N+S*it,r[7]=M*w+R*U+y*V+S*Y,r[11]=M*_+R*O+y*G+S*Q,r[15]=M*A+R*H+y*q+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],f=t[6],h=t[10],u=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=c*u-l*h,R=a*u-l*f,y=a*h-c*f,S=o*u-l*d,T=o*h-c*d,w=o*f-a*d;return e*(x*M-g*R+m*y)-n*(p*M-g*S+m*T)+i*(p*R-x*S+m*w)-r*(p*y-x*T+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],d=t[10];return e*(o*d-a*l)-n*(r*d-a*c)+i*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],f=t[9],h=t[10],u=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*a-n*o,R=e*c-i*o,y=e*l-r*o,S=n*c-i*a,T=n*l-r*a,w=i*l-r*c,_=d*x-f*p,A=d*g-h*p,P=d*m-u*p,U=f*g-h*x,O=f*m-u*x,H=h*m-u*g,N=M*H-R*O+y*U+S*P-T*A+w*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return t[0]=(a*H-c*O+l*U)*V,t[1]=(i*O-n*H-r*U)*V,t[2]=(x*w-g*T+m*S)*V,t[3]=(h*T-f*w-u*S)*V,t[4]=(c*P-o*H-l*A)*V,t[5]=(e*H-i*P+r*A)*V,t[6]=(g*y-p*w-m*R)*V,t[7]=(d*w-h*y+u*R)*V,t[8]=(o*O-a*P+l*_)*V,t[9]=(n*P-e*O-r*_)*V,t[10]=(p*T-x*y+m*M)*V,t[11]=(f*y-d*T-u*M)*V,t[12]=(a*A-o*U-c*_)*V,t[13]=(e*U-n*A+i*_)*V,t[14]=(x*R-p*S-g*M)*V,t[15]=(d*S-f*R+h*M)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,f=a+a,h=r*l,u=r*d,p=r*f,x=o*d,g=o*f,m=a*f,M=c*l,R=c*d,y=c*f,S=n.x,T=n.y,w=n.z;return i[0]=(1-(x+m))*S,i[1]=(u+y)*S,i[2]=(p-R)*S,i[3]=0,i[4]=(u-y)*T,i[5]=(1-(h+m))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(p+R)*w,i[9]=(g-M)*w,i[10]=(1-(h+x))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ls.set(i[0],i[1],i[2]).length(),a=Ls.set(i[4],i[5],i[6]).length(),c=Ls.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ln.copy(this);let l=1/o,d=1/a,f=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=Fn,c=!1){let l=this.elements,d=2*r/(e-t),f=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Fn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Zs)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Fn,c=!1){let l=this.elements,d=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),u=-(n+i)/(n-i),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Fn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Zs)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new C,Ln=new Ht,Jp=new C(0,0,0),jp=new C(1,1,1),Li=new C,Lo=new C,fn=new C,Ku=new Ht,Ju=new re,$e=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],f=i[2],h=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$p=0,ju=new C,Ns=new re,hi=new Ht,No=new C,Ar=new C,Qp=new C,t0=new re,$u=new C(1,0,0),Qu=new C(0,1,0),td=new C(0,0,1),ed={type:"added"},e0={type:"removed"},Ds={type:"childadded",child:null},ul={type:"childremoved",child:null},pe=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new $e,n=new re,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Bt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?No.copy(t):No.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ar,No,this.up):hi.lookAt(No,Ar,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(hi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e0),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),f=o(t.shapes),h=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pe.DEFAULT_UP=new C(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},n0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,p=.005;l.inputState.pinching&&h>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Do={h:0,s:0,l:0};function dl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=ph(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Et("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Et("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Kt.workingToColorSpace(Je.copy(this),t),Math.round(Qt(Je.r*255,0,255))*65536+Math.round(Qt(Je.g*255,0,255))*256+Math.round(Qt(Je.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Je.copy(this),e);let n=Je.r,i=Je.g,r=Je.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ie){Kt.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,i=Je.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Do);let n=Ur(Ni.h,Do.h,e),i=Ur(Ni.s,Do.s,e),r=Ur(Ni.l,Do.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new _t;_t.NAMES=pf;var ki=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new C,ui=new C,fl=new C,di=new C,Us=new C,Fs=new C,nd=new C,pl=new C,ml=new C,gl=new C,xl=new de,_l=new de,vl=new de,Bi=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nn.subVectors(i,e),ui.subVectors(n,e),fl.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ui),c=Nn.dot(fl),l=ui.dot(ui),d=ui.dot(fl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(l*c-a*d)*h,p=(o*d-a*c)*h;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return xl.setScalar(0),_l.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),ui.subVectors(t,e),Nn.cross(ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Nn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Us.subVectors(i,n),Fs.subVectors(r,n),pl.subVectors(t,n);let c=Us.dot(pl),l=Fs.dot(pl);if(c<=0&&l<=0)return e.copy(n);ml.subVectors(t,i);let d=Us.dot(ml),f=Fs.dot(ml);if(d>=0&&f<=d)return e.copy(i);let h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Us,o);gl.subVectors(t,r);let u=Us.dot(gl),p=Fs.dot(gl);if(p>=0&&u<=p)return e.copy(r);let x=u*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Fs,a);let g=d*p-u*f;if(g<=0&&f-d>=0&&u-p>=0)return nd.subVectors(r,i),a=(f-d)/(f-d+(u-p)),e.copy(i).addScaledVector(nd,a);let m=1/(g+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ce=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Fo.subVectors(this.max,Er),Os.subVectors(t.a,Er),Bs.subVectors(t.b,Er),zs.subVectors(t.c,Er),Di.subVectors(Bs,Os),Ui.subVectors(zs,Bs),is.subVectors(Os,zs);let e=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-is.z,is.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,is.z,0,-is.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-is.y,is.x,0];return!yl(e,Os,Bs,zs,Fo)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,Os,Bs,zs,Fo))?!1:(Oo.crossVectors(Di,Ui),e=[Oo.x,Oo.y,Oo.z],yl(e,Os,Bs,zs,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fi=[new C,new C,new C,new C,new C,new C,new C,new C],Dn=new C,Uo=new Ce,Os=new C,Bs=new C,zs=new C,Di=new C,Ui=new C,is=new C,Er=new C,Fo=new C,Oo=new C,ss=new C;function yl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ss.fromArray(s,r);let a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=t.dot(ss),l=e.dot(ss),d=n.dot(ss);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Oe=new C,Bo=new Ft,i0=0,Le=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},s0=new Ce,Rr=new C,bl=new C,an=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):s0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(bl)),this.expandByPoint(Rr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},r0=0,An=new Ht,Ml=new pe,ks=new C,pn=new Ce,Cr=new Ce,Ge=new C,Ee=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cp(t)?kr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(pn.min,Cr.min),pn.expandByPoint(Ge),Ge.addVectors(pn.max,Cr.max),pn.expandByPoint(Ge)):(pn.expandByPoint(Cr.min),pn.expandByPoint(Cr.max))}pn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ge.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(t,l),Ge.add(ks)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new C,c[_]=new C;let l=new C,d=new C,f=new C,h=new Ft,u=new Ft,p=new Ft,x=new C,g=new C;function m(_,A,P){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,_),u.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),d.sub(l),f.sub(l),u.sub(h),p.sub(h);let U=1/(u.x*p.y-p.x*u.y);isFinite(U)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-u.y).multiplyScalar(U),g.copy(f).multiplyScalar(u.x).addScaledVector(d,-p.x).multiplyScalar(U),a[_].add(x),a[A].add(x),a[P].add(x),c[_].add(g),c[A].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,A=M.length;_<A;++_){let P=M[_],U=P.start,O=P.count;for(let H=U,N=U+O;H<N;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let R=new C,y=new C,S=new C,T=new C;function w(_){S.fromBufferAttribute(i,_),T.copy(S);let A=a[_];R.copy(A),R.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(T,A);let U=y.dot(c[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,U)}for(let _=0,A=M.length;_<A;++_){let P=M[_],U=P.start,O=P.count;for(let H=U,N=U+O;H<N;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,d=new C,f=new C;if(t)for(let h=0,u=t.count;h<u;h+=3){let p=t.getX(h+0),x=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),f.subVectors(i,r),d.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,u=e.count;h<u;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),f.subVectors(i,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,d=a.itemSize,f=a.normalized,h=new l.constructor(c.length*d),u=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*d;for(let m=0;m<d;m++)h[p++]=l[u++]}return new Le(h,d,f)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let h=l[d],u=t(h,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){let u=l[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let d=i[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],f=r[l];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},en=new C,er=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new C,o0=new C,a0=new Bt,nn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Sl.subVectors(n,e).cross(o0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a0.getNormalMatrix(t),i=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c0=0,cn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=On(),this.name="",this.type="Material",this.blending=lr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Kl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Et(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pi=new C,wl=new C,zo=new C,ko=new C,Hi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wl.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zo),a=ko.dot(this.direction),c=-ko.dot(zo),l=ko.lengthSq(),d=Math.abs(1-o*o),f,h,u,p;if(d>0)if(f=o*c-a,h=o*a-c,p=r*d,f>=0)if(h>=-p)if(h<=p){let x=1/d;f*=x,h*=x,u=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wl).addScaledVector(zo,h),u}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=t.x-o.x,h=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,R=n.z-o.z,y=Math.abs(c),S=Math.abs(l),T=Math.abs(d),w,_,A,P,U,O,H,N,V,G,q,it;if(y>=S&&y>=T?(A=c,O=f,V=p,it=m,c>=0?(w=l,_=d,P=h,U=u,H=x,N=g,G=M,q=R):(w=d,_=l,P=u,U=h,H=g,N=x,G=R,q=M)):S>=T?(A=l,O=h,V=x,it=M,l>=0?(w=d,_=c,P=u,U=f,H=g,N=p,G=R,q=m):(w=c,_=d,P=f,U=u,H=p,N=g,G=m,q=R)):(A=d,O=u,V=g,it=R,d>=0?(w=c,_=l,P=f,U=h,H=p,N=x,G=m,q=M):(w=l,_=c,P=h,U=f,H=x,N=p,G=M,q=m)),A===0)return null;let Y=w/A,Q=_/A,tt=1/A,Pt=P-Y*O,At=U-Q*O,he=H-Y*V,jt=N-Q*V,ee=G-Y*it,K=q-Q*it,B=ee*jt-K*he,nt=Pt*K-At*ee,vt=he*At-jt*Pt;if(i){if(B<0||nt<0||vt<0)return null}else if((B<0||nt<0||vt<0)&&(B>0||nt>0||vt>0))return null;let rt=B+nt+vt;if(rt===0)return null;let Nt=tt*(B*O+nt*V+vt*it);return(rt>0?Nt<0:Nt>0)?null:this.at(Nt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},id=new Ht,rs=new Hi,Ho=new an,sd=new C,Vo=new C,Go=new C,Wo=new C,Tl=new C,Xo=new C,rd=new C,qo=new C,Me=class extends pe{constructor(t=new Ee,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(Tl.fromBufferAttribute(f,t),o?Xo.addScaledVector(Tl,d):Xo.addScaledVector(Tl.sub(e),d))}e.add(Xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Ho.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ho,sd)===null||rs.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(r).invert(),rs.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],M=Math.max(g.start,u.start),R=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,S=R;y<S;y+=3){let T=a.getX(y),w=a.getX(y+1),_=a.getX(y+2);i=Yo(this,m,t,n,l,d,f,T,w,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),R=a.getX(g+1),y=a.getX(g+2);i=Yo(this,o,t,n,l,d,f,M,R,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],M=Math.max(g.start,u.start),R=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,S=R;y<S;y+=3){let T=y,w=y+1,_=y+2;i=Yo(this,m,t,n,l,d,f,T,w,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){let M=g,R=g+1,y=g+2;i=Yo(this,o,t,n,l,d,f,M,R,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function l0(s,t,e,n,i,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ei,a),c===null)return null;qo.copy(a),qo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(qo);return l<e.near||l>e.far?null:{distance:l,point:qo.clone(),object:s}}function Yo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Vo),s.getVertexPosition(c,Go),s.getVertexPosition(l,Wo);let d=l0(s,t,e,n,Vo,Go,Wo,rd);if(d){let f=new C;Bi.getBarycoord(rd,Vo,Go,Wo,f),i&&(d.uv=Bi.getInterpolatedAttribute(i,a,c,l,f,new Ft)),r&&(d.uv1=Bi.getInterpolatedAttribute(r,a,c,l,f,new Ft)),o&&(d.normal=Bi.getInterpolatedAttribute(o,a,c,l,f,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};Bi.getNormal(Vo,Go,Wo,h.normal),d.face=h,d.barycoord=f}return d}var Pr=new de,od=new de,ad=new de,h0=new de,cd=new Ht,Zo=new C,Al=new an,ld=new Ht,El=new Hi,Hr=class extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ce),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(i),t.ray.intersectsSphere(Al)!==!1&&(ld.copy(i).invert(),El.copy(t.ray).applyMatrix4(ld),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,El)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():Et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;od.fromBufferAttribute(i.attributes.skinIndex,t),ad.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Pr.copy(e),e.set(0,0,0,0)):(Pr.set(...e,1),e.set(0,0,0)),Pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ad.getComponent(r);if(o!==0){let a=od.getComponent(r);cd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(h0.copy(Pr).applyMatrix4(cd),o)}}return e.isVector4&&(e.w=Pr.w),e.applyMatrix4(this.bindMatrixInverse)}},nr=class extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},ir=class extends Xe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=we,d=we,f,h){super(null,o,a,c,l,d,i,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hd=new Ht,u0=new Ht,Vr=class s{constructor(t=[],e=[]){this.uuid=On(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ht;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:u0;hd.multiplyMatrices(a,e[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ir(e,t,t,vn,xn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(Et("Skeleton: No bone found with UUID:",r),o=new nr),this.bones.push(o),this.boneInverses.push(new Ht().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},xi=class extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new Ht,ud=new Ht,Ko=[],dd=new Ce,d0=new Ht,Ir=new Me,Lr=new an,Jn=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,d0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ce),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),dd.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Lr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hs),ud.multiplyMatrices(n,Hs),Ir.matrixWorld=ud,Ir.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){let c=Ko[o];c.instanceId=r,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(i*this.count),i,this.count,Ba,xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new an,f0=new Ft(.5,.5),Jo=new C,sr=class{constructor(t=new nn,e=new nn,n=new nn,i=new nn,r=new nn,o=new nn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],h=r[6],u=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],R=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-o,u-d,m-p,S-M).normalize(),i[1].setComponents(l+o,u+d,m+p,S+M).normalize(),i[2].setComponents(l+a,u+f,m+x,S+R).normalize(),i[3].setComponents(l-a,u-f,m-x,S-R).normalize(),n)i[4].setComponents(c,h,g,y).normalize(),i[5].setComponents(l-c,u-h,m-g,S-y).normalize();else if(i[4].setComponents(l-c,u-h,m-g,S-y).normalize(),e===Fn)i[5].setComponents(l+c,u+h,m+g,S+y).normalize();else if(e===Zs)i[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=f0.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Jo.x=i.normal.x>0?t.max.x:t.min.x,Jo.y=i.normal.y>0?t.max.y:t.min.y,Jo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vi=class extends cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new C,xa=new C,fd=new Ht,Nr=new Hi,jo=new an,Rl=new C,pd=new C,_i=class extends pe{constructor(t=new Ee,e=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ga.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new ye(n,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;fd.copy(i).invert(),Nr.copy(t.ray).applyMatrix4(fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=u,g=p-1;x<g;x+=l){let m=d.getX(x),M=d.getX(x+1),R=$o(this,t,Nr,c,m,M,x);R&&e.push(R)}if(this.isLineLoop){let x=d.getX(p-1),g=d.getX(u),m=$o(this,t,Nr,c,x,g,p-1);m&&e.push(m)}}else{let u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,g=p-1;x<g;x+=l){let m=$o(this,t,Nr,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=$o(this,t,Nr,c,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(ga.fromBufferAttribute(a,i),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ga,xa,Rl,pd)>n)return;Rl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Rl);if(!(l<t.near||l>t.far))return{distance:l,point:pd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var md=new C,gd=new C,Gr=class extends _i{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+md.distanceTo(gd);t.setAttribute("lineDistance",new ye(n,1))}else Et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wr=class extends _i{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xd=new Ht,Fl=new Hi,Qo=new an,ta=new C,Xr=class extends pe{constructor(t=new Ee,e=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;xd.copy(i).invert(),Fl.copy(t.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let p=h,x=u;p<x;p++){let g=l.getX(p);ta.fromBufferAttribute(f,g),_d(ta,g,c,i,t,e,this)}}else{let h=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=h,x=u;p<x;p++)ta.fromBufferAttribute(f,p),_d(ta,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _d(s,t,e,n,i,r,o){let a=Fl.distanceSqToPoint(s);if(a<e){let c=new C;Fl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qr=class extends Xe{constructor(t=[],e=qi,n,i,r,o,a,c,l,d){super(t,e,n,i,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var jn=class extends Xe{constructor(t,e,n=Hn,i,r,o,a=we,c=we,l,d=Zn,f=1){if(d!==Zn&&d!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,i,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_a=class extends jn{constructor(t,e=Hn,n=qi,i,r,o=we,a=we,c,l=Zn){let d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,i,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yr=class extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gi=class s extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],h=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function p(x,g,m,M,R,y,S,T,w,_,A){let P=y/w,U=S/_,O=y/2,H=S/2,N=T/2,V=w+1,G=_+1,q=0,it=0,Y=new C;for(let Q=0;Q<G;Q++){let tt=Q*U-H;for(let Pt=0;Pt<V;Pt++){let At=Pt*P-O;Y[x]=At*M,Y[g]=tt*R,Y[m]=N,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=T>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Pt/w),f.push(1-Q/_),q+=1}}for(let Q=0;Q<_;Q++)for(let tt=0;tt<w;tt++){let Pt=h+tt+V*Q,At=h+tt+V*(Q+1),he=h+(tt+1)+V*(Q+1),jt=h+(tt+1)+V*Q;c.push(Pt,At,jt),c.push(At,he,jt),it+=6}a.addGroup(u,it,A),u+=it,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zr=class s extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,d=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let u=n+f/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/t+1)/2,d.y=(o[h+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},va=class s extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let d=[],f=[],h=[],u=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function M(){let y=new C,S=new C,T=0,w=(e-t)/n;for(let _=0;_<=r;_++){let A=[],P=_/r,U=P*(e-t)+t;for(let O=0;O<=i;O++){let H=O/i,N=H*c+a,V=Math.sin(N),G=Math.cos(N);S.x=U*V,S.y=-P*n+g,S.z=U*G,f.push(S.x,S.y,S.z),y.set(V,w,G).normalize(),h.push(y.x,y.y,y.z),u.push(H,1-P),A.push(p++)}x.push(A)}for(let _=0;_<i;_++)for(let A=0;A<r;A++){let P=x[A][_],U=x[A+1][_],O=x[A+1][_+1],H=x[A][_+1];(t>0||A!==0)&&(d.push(P,U,H),T+=3),(e>0||A!==r-1)&&(d.push(U,O,H),T+=3)}l.addGroup(m,T,0),m+=T}function R(y){let S=p,T=new Ft,w=new C,_=0,A=y===!0?t:e,P=y===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,g*P,0),h.push(0,P,0),u.push(.5,.5),p++;let U=p;for(let O=0;O<=i;O++){let N=O/i*c+a,V=Math.cos(N),G=Math.sin(N);w.x=A*G,w.y=g*P,w.z=A*V,f.push(w.x,w.y,w.z),h.push(0,P,0),T.x=V*.5+.5,T.y=G*.5*P+.5,u.push(T.x,T.y),p++}for(let O=0;O<i;O++){let H=S+O,N=U+O;y===!0?d.push(N,N+1,H):d.push(N+1,N,H),_+=3}l.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class s extends va{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Bn=class s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,f=t/a,h=e/c,u=[],p=[],x=[],g=[];for(let m=0;m<d;m++){let M=m*h-o;for(let R=0;R<l;R++){let y=R*f-r;p.push(y,-M,0),x.push(0,0,1),g.push(R/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let R=M+l*m,y=M+l*(m+1),S=M+1+l*(m+1),T=M+1+l*m;u.push(R,y,T),u.push(y,S,T)}this.setIndex(u),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Kr=class s extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],d=[],f=t,h=(e-t)/i,u=new C,p=new Ft;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;u.x=f*Math.cos(m),u.y=f*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,d.push(p.x,p.y)}f+=h}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,R=M,y=M+n+1,S=M+n+2,T=M+1;a.push(R,y,T),a.push(y,S,T)}}this.setIndex(a),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function vs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(vd(i))i.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(vd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let n=vs(s[e]);for(let i in n)t[i]=n[i]}return t}function vd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function p0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var mf={clone:vs,merge:Qe},m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new de().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ya=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},us=class extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ln=class extends us{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ba=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oi(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ra(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function x0(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function yd(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function _0(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var $n=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends $n{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=t,a=2*e-n;break;case Ul:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:o=t,c=2*n-e;break;case Ul:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,M=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,R=(-1-u)*g+(1.5+u)*x+.5*p,y=u*g-u*x;for(let S=0;S!==a;++S)r[S]=m*o[d+S]+M*o[l+S]+R*o[c+S]+y*o[f+S];return r}},wa=class extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=(n-e)/(i-e),f=1-d;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*d;return r}},Ta=class extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends $n{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*p;return r}let h=a*2,u=t-1;for(let p=0;p!==a;++p){let x=o[l+p],g=o[c+p],m=u*h+p*2,M=f[m],R=f[m+1],y=t*h+p*2,S=d[y],T=d[y+1],w=y0(n,e,M,S,i);r[p]=gf(w,x,R,T,g)}return r}};function gf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function v0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function y0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=gf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let c=v0(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ra(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cs:e=this.InterpolantFactoryMethodDiscrete;break;case ls:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break;case Ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Et("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ra(this.settings)&&(bd(this.settings.inTangents,t),bd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ut("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ut("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Pp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],d=t[a+1];if(l!==d&&(a!==1||l!==t[0]))if(i)c=!0;else{let f=a*n,h=f-n,u=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[h+p]||x!==e[u+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let u=0;u!==n;++u)e[h+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ra(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function bd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=ls;var vi=class extends hn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=cs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Jr.prototype.ValueTypeName="color";var yi=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};yi.prototype.ValueTypeName="number";var Ea=class extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let d=l+a;l!==d;l+=4)re.slerpFlat(r,0,o,l-a,o,l,c);return r}},bi=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends hn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=cs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Xi.prototype.ValueTypeName="vector";var jr=class{constructor(t="",e=-1,n=[],i=Qd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(M0(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let d=x0(c);c=yd(c,1,d),l=yd(l,1,d),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new yi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],d=l.name.match(r);if(d&&d.length>1){let f=d[1],h=i[f];h||(i[f]=h=[]),h.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function b0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return Jr;case"quaternion":return bi;case"bool":case"boolean":return vi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function M0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=b0(s.type);if(s.times===void 0){let n=[],i=[];_0(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),ra(s.settings)&&(e.settings={inTangents:Oi(s.settings.inTangents,Float32Array),outTangents:Oi(s.settings.outTangents,Float32Array)}),e}var Yn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Md(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Md(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Md(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ra=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){let u=l[f],p=l[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new Ra,Qn=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},Ol=class extends Error{constructor(t,e){super(t),this.response=e}},or=class extends Qn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Yn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(mi[t]!==void 0){mi[t].push({onLoad:e,onProgress:n,onError:i});return}mi[t]=[],mi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let d=mi[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=h?parseInt(h):0,p=u!==0,x=0,g=new ReadableStream({start(m){M();function M(){f.read().then(({done:R,value:y})=>{if(R)m.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let T=0,w=d.length;T<w;T++){let _=d[T];_.onProgress&&_.onProgress(S)}m.enqueue(y),M()}},R=>{m.error(R)})}}});return new Response(g)}else throw new Ol(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(h);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{Yn.add(`file:${t}`,l);let d=mi[t];delete mi[t];for(let f=0,h=d.length;f<h;f++){let u=d[f];u.onLoad&&u.onLoad(l)}}).catch(l=>{let d=mi[t];if(d===void 0)throw this.manager.itemError(t),l;delete mi[t];for(let f=0,h=d.length;f<h;f++){let u=d[f];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,Ca=class extends Qn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Yn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Vs.get(o);f===void 0&&(f=[],Vs.set(o,f)),f.push({onLoad:e,onError:i})}return o}let a=Ks("img");function c(){d(),e&&e(this);let f=Vs.get(this)||[];for(let h=0;h<f.length;h++){let u=f[h];u.onLoad&&u.onLoad(this)}Vs.delete(this),r.manager.itemEnd(t)}function l(f){d(),i&&i(f),Yn.remove(`image:${t}`);let h=Vs.get(this)||[];for(let u=0;u<h.length;u++){let p=h[u];p.onError&&p.onError(f)}Vs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var $r=class extends Qn{constructor(t){super(t)}load(t,e,n,i){let r=new Xe,o=new Ca(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ds=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qr=class extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Cl=new Ht,Sd=new C,wd=new C,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ea=new C,na=new re,qn=new C,to=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ea,na,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new C,Td=new Ft,Ad=new Ft,We=class extends to{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ad),e.subVectors(Ad,Td)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bl=class extends ar{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},fs=class extends ds{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},zl=class extends ar{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},ti=class extends ds{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},zn=class extends to{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends ar{constructor(){super(new zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Si=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Pl=new WeakMap,eo=class extends Qn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Yn.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{Pl.has(o)===!0?(i&&i(Pl.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(l),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Yn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Pl.set(c,l),Yn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Yn.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=-90,Ws=1,Pa=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new We(Gs,Ws,t,e);i.layers=this.layers,this.add(i);let r=new We(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new We(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new We(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new We(Gs,Ws,t,e);c.layers=this.layers,this.add(c);let l=new We(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,h,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ia=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xh="\\[\\]\\.:\\/",S0=new RegExp("["+xh+"]","g"),_h="[^"+xh+"]",w0="[^"+xh.replace("\\.","")+"]",T0=/((?:WC+[\/:])*)/.source.replace("WC",_h),A0=/(WCOD+)?/.source.replace("WCOD",w0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),C0=new RegExp("^"+T0+A0+E0+R0+"$"),P0=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S0,"")}static parseTrackName(t){let e=C0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);P0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Hl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var Ed=new Ht,no=class{constructor(t,e,n=0,i=1/0){this.ray=new Hi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ed.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Vl(t[i],this,n,e);return n.sort(Rd),n}};function Rd(s,t){return s.distance-t.distance}function Vl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Vl(r[o],t,e,!0)}}var Gl=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function vh(s,t,e,n){let i=I0(n);switch(e){case lh:return s*t;case Ba:return s*t/i.components*i.byteLength;case za:return s*t/i.components*i.byteLength;case Ki:return s*t*2/i.components*i.byteLength;case ka:return s*t*2/i.components*i.byteLength;case hh:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case Ha:return s*t*4/i.components*i.byteLength;case so:case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(s,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(s,8)*Math.max(t,8)/2;case qa:case Ya:case Ka:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Za:case co:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case dc:case fc:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case lo:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(s){switch(s){case un:case rh:return{byteLength:1,components:1};case Yi:case oh:case _n:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case Hn:case Ua:case xn:return{byteLength:4,components:1};case ah:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function N0(s){let t=new WeakMap;function e(a,c){let l=a.array,d=a.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,d);else{f.sort((u,p)=>u.start-p.start);let h=0;for(let u=1;u<f.length;u++){let p=f[h],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,im=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Lm=`uniform sampler2D dfgLUT;
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
}`,Nm=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define NORMAL
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
}`,ex=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,ax=`#define TOON
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
}`,cx=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:D0,alphahash_pars_fragment:U0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:z0,aomap_fragment:k0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:q0,iridescence_fragment:Y0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:$0,color_fragment:Q0,color_pars_fragment:tm,color_pars_vertex:em,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:cm,emissivemap_pars_fragment:lm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Am,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:ym,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:Em,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Im,lights_physical_pars_fragment:Lm,lights_fragment_begin:Nm,lights_fragment_maps:Dm,lights_fragment_end:Um,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:km,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Km,morphtarget_pars_vertex:Jm,morphtarget_vertex:jm,normal_fragment_begin:$m,normal_fragment_maps:Qm,normal_pars_fragment:tg,normal_pars_vertex:eg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:cg,packing:lg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:dg,dithering_pars_fragment:fg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:_g,shadowmask_pars_fragment:vg,skinbase_vertex:yg,skinning_pars_vertex:bg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Eg,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Pg,uv_pars_vertex:Ig,uv_vertex:Lg,worldpos_vertex:Ng,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:kg,depth_frag:Hg,distance_vert:Vg,distance_frag:Gg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:qg,linedashed_frag:Yg,meshbasic_vert:Zg,meshbasic_frag:Kg,meshlambert_vert:Jg,meshlambert_frag:jg,meshmatcap_vert:$g,meshmatcap_frag:Qg,meshnormal_vert:tx,meshnormal_frag:ex,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:cx,points_frag:lx,shadow_vert:hx,shadow_frag:ux,sprite_vert:dx,sprite_frag:fx},ft={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},si={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new _t(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};si.physical={uniforms:Qe([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var bc={r:0,b:0,g:0},px=new Ht,kf=new Bt;kf.set(-1,0,0,0,1,0,0,0,1);function mx(s,t,e,n,i,r){let o=new _t(0),a=i===!0?0:1,c,l,d=null,f=0,h=null;function u(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let y=M.backgroundBlurriness>0;R=t.get(R,y)}return R}function p(M){let R=!1,y=u(M);y===null?g(o,a):y&&y.isColor&&(g(y,1),R=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,R){let y=u(R);y&&(y.isCubeTexture||y.mapping===io)?(l===void 0&&(l=new Me(new Gi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:vs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kf),l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,(d!==y||f!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Me(new Bn(2,2),new rn({name:"BackgroundMaterial",uniforms:vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,R){M.getRGB(bc,gh(s)),e.buffers.color.setClear(bc.r,bc.g,bc.b,R,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:x,dispose:m}}function gx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(U,O,H,N,V){let G=!1,q=f(U,N,H,O);r!==q&&(r=q,l(r.object)),G=u(U,N,H,V),G&&p(U,N,H,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(U,O,H,N),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(U){return s.bindVertexArray(U)}function d(U){return s.deleteVertexArray(U)}function f(U,O,H,N){let V=N.wireframe===!0,G=n[O.id];G===void 0&&(G={},n[O.id]=G);let q=U.isInstancedMesh===!0?U.id:0,it=G[q];it===void 0&&(it={},G[q]=it);let Y=it[H.id];Y===void 0&&(Y={},it[H.id]=Y);let Q=Y[V];return Q===void 0&&(Q=h(c()),Y[V]=Q),Q}function h(U){let O=[],H=[],N=[];for(let V=0;V<e;V++)O[V]=0,H[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function u(U,O,H,N){let V=r.attributes,G=O.attributes,q=0,it=H.getAttributes();for(let Y in it)if(it[Y].location>=0){let tt=V[Y],Pt=G[Y];if(Pt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Pt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Pt=U.instanceColor)),tt===void 0||tt.attribute!==Pt||Pt&&tt.data!==Pt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function p(U,O,H,N){let V={},G=O.attributes,q=0,it=H.getAttributes();for(let Y in it)if(it[Y].location>=0){let tt=G[Y];tt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let Pt={};Pt.attribute=tt,tt&&tt.data&&(Pt.data=tt.data),V[Y]=Pt,q++}r.attributes=V,r.attributesNum=q,r.index=N}function x(){let U=r.newAttributes;for(let O=0,H=U.length;O<H;O++)U[O]=0}function g(U){m(U,0)}function m(U,O){let H=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;H[U]=1,N[U]===0&&(s.enableVertexAttribArray(U),N[U]=1),V[U]!==O&&(s.vertexAttribDivisor(U,O),V[U]=O)}function M(){let U=r.newAttributes,O=r.enabledAttributes;for(let H=0,N=O.length;H<N;H++)O[H]!==U[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function R(U,O,H,N,V,G,q){q===!0?s.vertexAttribIPointer(U,O,H,V,G):s.vertexAttribPointer(U,O,H,N,V,G)}function y(U,O,H,N){x();let V=N.attributes,G=H.getAttributes(),q=O.defaultAttributeValues;for(let it in G){let Y=G[it];if(Y.location>=0){let Q=V[it];if(Q===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let tt=Q.normalized,Pt=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let he=At.buffer,jt=At.type,ee=At.bytesPerElement,K=jt===s.INT||jt===s.UNSIGNED_INT||Q.gpuType===Ua;if(Q.isInterleavedBufferAttribute){let B=Q.data,nt=B.stride,vt=Q.offset;if(B.isInstancedInterleavedBuffer){for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt,B.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let rt=0;rt<Y.locationSize;rt++)g(Y.location+rt);s.bindBuffer(s.ARRAY_BUFFER,he);for(let rt=0;rt<Y.locationSize;rt++)R(Y.location+rt,Pt/Y.locationSize,jt,tt,nt*ee,(vt+Pt/Y.locationSize*rt)*ee,K)}else{if(Q.isInstancedBufferAttribute){for(let B=0;B<Y.locationSize;B++)m(Y.location+B,Q.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let B=0;B<Y.locationSize;B++)g(Y.location+B);s.bindBuffer(s.ARRAY_BUFFER,he);for(let B=0;B<Y.locationSize;B++)R(Y.location+B,Pt/Y.locationSize,jt,tt,Pt*ee,Pt/Y.locationSize*B*ee,K)}}else if(q!==void 0){let tt=q[it];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(Y.location,tt);break;case 3:s.vertexAttrib3fv(Y.location,tt);break;case 4:s.vertexAttrib4fv(Y.location,tt);break;default:s.vertexAttrib1fv(Y.location,tt)}}}}M()}function S(){A();for(let U in n){let O=n[U];for(let H in O){let N=O[H];for(let V in N){let G=N[V];for(let q in G)d(G[q].object),delete G[q];delete N[V]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let H in O){let N=O[H];for(let V in N){let G=N[V];for(let q in G)d(G[q].object),delete G[q];delete N[V]}}delete n[U.id]}function w(U){for(let O in n){let H=n[O];for(let N in H){let V=H[N];if(V[U.id]===void 0)continue;let G=V[U.id];for(let q in G)d(G[q].object),delete G[q];delete V[U.id]}}}function _(U){for(let O in n){let H=n[O],N=U.isInstancedMesh===!0?U.id:0,V=H[N];if(V!==void 0){for(let G in V){let q=V[G];for(let it in q)d(q[it].object),delete q[it];delete V[G]}delete H[N],Object.keys(H).length===0&&delete n[O]}}}function A(){P(),o=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function xx(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,d){d!==0&&(s.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function a(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let u=0;u<d;u++)h+=l[u];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _x(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let _=w===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==un&&w!==xn&&!_&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(Et("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:T}}function vx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new nn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||n!==0||i;return i=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,u){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?d(null):l();else{let M=r?0:n,R=M*4,y=m.clippingState||null;c.value=y,y=d(p,h,R,u);for(let S=0;S!==R;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,u,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=u+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,y=u;R!==x;++R,y+=4)o.copy(f[R]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var pr=4,yx=6,bx=20,Mx=256,fo=new zn,_f=new _t,yh=null,bh=0,Mh=0,Sh=!1,Sx=new C,ys=new C,Sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Sx}=r;yh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,bh,Mh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:_n,format:vn,colorSpace:sn,depthBuffer:!1},i=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wx(r)),this._blurMaterial=Ax(r,t,e),this._ggxMaterial=Tx(r,t,e)}return i}_compileMaterial(t){let e=new Me(new Ee,t);this._renderer.compile(e,fo)}_sceneToCubeUV(t,e,n,i,r){let c=new We(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(_f),f.toneMapping=gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Gi,new Te({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(_f),m=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[R],r.y,r.z)):y===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[R]));let S=this._cubeSize;fr(i,y*S,R>2?S:0,S,S),f.setRenderTarget(i),m&&f.render(x,c),f.render(t,c)}f.toneMapping=u,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===qi||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),h=l*1.25,u=f*h,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-pr?n-p+pr:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=u,c.mipInt.value=p-e,fr(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,fo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,fr(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,fo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],f=3*d*(i>this._lodMax-pr?i-this._lodMax+pr:0),h=4*(this._cubeSize-d);fr(e,f,h,3*d,2*d),o.setRenderTarget(e),o.render(c,fo)}};function wx(s){let t=[],e=[],n=s,i=s-pr+1+yx;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,u=3,p=new Float32Array(u*h*f),x=new Float32Array(u*h*f);for(let m=0;m<f;m++){let M=m%3*2/3-1,R=m>2?0:-1,y=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];p.set(y,u*h*m);for(let S=0;S<h;S++){let T=d[S*2]*2-1,w=d[S*2+1]*2-1;m===0?ys.set(1,w,T):m===1?ys.set(-T,1,-w):m===2?ys.set(-T,w,1):m===3?ys.set(-1,w,-T):m===4?ys.set(-T,-1,w):ys.set(T,w,-1),ys.toArray(x,(m*h+S)*u)}}let g=new Ee;g.setAttribute("position",new Le(p,u)),g.setAttribute("outputDirection",new Le(x,u)),e.push(new Me(g,null)),n>pr&&n--}return{lodMeshes:e,sizeLods:t}}function vf(s,t,e){let n=new je(s,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Tx(s,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ax(s,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:bx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function yf(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bf(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ni});r.uniforms.tEquirect.value=e;let o=new Me(i,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Ne),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Ex(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===La||u===Na)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new wc(p.height);return x.fromEquirectangularTexture(s,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,p=u===La||u===Na,x=u===qi||u===xs;if(p||x){let g=e.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Sc(s)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let M=h.image;return p&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Sc(s)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,u){return u===La?h.mapping=qi:u===Na&&(h.mapping=xs),h}function c(h){let u=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&u++;return u===p}function l(h){let u=h.target;u.removeEventListener("dispose",l);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Rx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&as("WebGLRenderer: "+n+" extension not supported."),i}}}function Cx(s,t,e,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];let u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let u in h)t.update(h[u],s.ARRAY_BUFFER)}function l(f){let h=[],u=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(u!==null){let M=u.array;x=u.version;for(let R=0,y=M.length;R<y;R+=3){let S=M[R+0],T=M[R+1],w=M[R+2];h.push(S,T,T,w,w,S)}}else{let M=p.array;x=p.version;for(let R=0,y=M.length/3-1;R<y;R+=3){let S=R+0,T=R+1,w=R+2;h.push(S,T,T,w,w,S)}}let g=new(p.count>=65535?kr:zr)(h,1);g.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function d(f){let h=r.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Px(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,u){u!==0&&(s.drawElementsInstanced(n,h,r,f*o,u),e.update(h,n,u))}function d(f,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Ix(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lx(s,t,e){let n=new WeakMap,i=new de;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==f){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],R=0;u===!0&&(R=1),p===!0&&(R=2),x===!0&&(R=3);let y=a.attributes.position.count*R,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*f),w=new Br(T,y,S,f);w.type=xn,w.needsUpdate=!0;let _=R*4;for(let P=0;P<f;P++){let U=g[P],O=m[P],H=M[P],N=y*S*4*P;for(let V=0;V<U.count;V++){let G=V*_;u===!0&&(i.fromBufferAttribute(U,V),T[N+G+0]=i.x,T[N+G+1]=i.y,T[N+G+2]=i.z,T[N+G+3]=0),p===!0&&(i.fromBufferAttribute(O,V),T[N+G+4]=i.x,T[N+G+5]=i.y,T[N+G+6]=i.z,T[N+G+7]=0),x===!0&&(i.fromBufferAttribute(H,V),T[N+G+8]=i.x,T[N+G+9]=i.y,T[N+G+10]=i.z,T[N+G+11]=H.itemSize===4?i.w:1)}}h={count:f,texture:w,size:new Ft(y,S)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Nx(s,t,e,n,i){let r=new WeakMap;function o(l){let d=i.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var Dx={[jl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[th]:"ACES_FILMIC_TONE_MAPPING",[nh]:"AGX_TONE_MAPPING",[ih]:"NEUTRAL_TONE_MAPPING",[eh]:"CUSTOM_TONE_MAPPING"};function Ux(s,t,e,n,i,r){let o=new je(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ee;l.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ye([0,2,0,0,2,0],2));let d=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Me(l,d),h=new zn(-1,1,1,-1,0,1),u=null,p=null,x=!1,g,m=null,M=[],R=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),c!==null&&c.setSize(y,S);for(let T=0;T<M.length;T++){let w=M[T];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){M=y,R=M.length>0&&M[0].isRenderPass===!0;let S=o.width,T=o.height;M.length>0&&a===null&&(a=new je(S,T,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new je(S,T,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let _=M[w];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(x||y.toneMapping===gn&&M.length===0)return!1;if(m=S,S!==null){let T=S.width,w=S.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return R===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=gn,!0},this.hasRenderPass=function(){return R},this.end=function(y,S){y.toneMapping=g,x=!0;let T=o,w=a;for(let _=0;_<M.length;_++){let A=M[_];A.enabled!==!1&&(A.render(y,w,T,S),A.needsSwap!==!1&&(T=w,w=w===a?c:a))}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,d.defines={},Kt.getTransfer(u)===le&&(d.defines.SRGB_TRANSFER="");let _=Dx[p];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(f,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Hf=new Xe,Ah=new jn(1,1),Vf=new Br,Gf=new ma,Wf=new qr,Mf=[],Sf=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function gr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Mf[i];if(r===void 0&&(r=new Float32Array(i),Mf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ec(s,t){let e=Sf[t];e===void 0&&(e=new Int32Array(t),Sf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function Bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function kx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Af.set(n),s.uniformMatrix2fv(this.addr,!1,Af),He(e,n)}}function Hx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Tf.set(n),s.uniformMatrix3fv(this.addr,!1,Tf),He(e,n)}}function Vx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;wf.set(n),s.uniformMatrix4fv(this.addr,!1,wf),He(e,n)}}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function Yx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function Kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function Jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ah.compareFunction=e.isReversedDepthBuffer()?yc:vc,r=Ah):r=Hf,e.setTexture2D(t||r,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gf,i)}function Qx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wf,i)}function t_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vf,i)}function e_(s){switch(s){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Zx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return t_}}function n_(s,t){s.uniform1fv(this.addr,t)}function i_(s,t){let e=gr(t,this.size,2);s.uniform2fv(this.addr,e)}function s_(s,t){let e=gr(t,this.size,3);s.uniform3fv(this.addr,e)}function r_(s,t){let e=gr(t,this.size,4);s.uniform4fv(this.addr,e)}function o_(s,t){let e=gr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function a_(s,t){let e=gr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function c_(s,t){let e=gr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function l_(s,t){s.uniform1iv(this.addr,t)}function h_(s,t){s.uniform2iv(this.addr,t)}function u_(s,t){s.uniform3iv(this.addr,t)}function d_(s,t){s.uniform4iv(this.addr,t)}function f_(s,t){s.uniform1uiv(this.addr,t)}function p_(s,t){s.uniform2uiv(this.addr,t)}function m_(s,t){s.uniform3uiv(this.addr,t)}function g_(s,t){s.uniform4uiv(this.addr,t)}function x_(s,t,e){let n=this.cache,i=t.length,r=Ec(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ah:o=Hf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function __(s,t,e){let n=this.cache,i=t.length,r=Ec(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Gf,r[o])}function v_(s,t,e){let n=this.cache,i=t.length,r=Ec(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wf,r[o])}function y_(s,t,e){let n=this.cache,i=t.length,r=Ec(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vf,r[o])}function b_(s){switch(s){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return y_}}var Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}},Rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b_(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Ef(s,t){s.seq.push(t),s.map[t.id]=t}function M_(s,t,e){let n=s.name,i=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ef(e,l===void 0?new Eh(a,s,t):new Rh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Ch(a),Ef(e,f)),e=f}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);M_(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Rf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var S_=37297,w_=0;function T_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Cf=new Bt;function A_(s){Kt._getMatrix(Cf,Kt.workingColorSpace,s);let t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Fr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Pf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+T_(s.getShaderSource(t),a)}else return r}function E_(s,t){let e=A_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R_={[jl]:"Linear",[$l]:"Reinhard",[Ql]:"Cineon",[th]:"ACESFilmic",[nh]:"AgX",[ih]:"Neutral",[eh]:"Custom"};function C_(s,t){let e=R_[t];return e===void 0?(Et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mc=new C;function P_(){Kt.getLuminanceCoefficients(Mc);let s=Mc.x.toFixed(4),t=Mc.y.toFixed(4),e=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function L_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function mo(s){return s!==""}function If(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(D_,F_)}var U_=new Map;function F_(s,t){let e=Zt[t];if(e===void 0){let n=U_.get(t);if(n!==void 0)e=Zt[n],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(s){return s.replace(O_,B_)}function B_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Df(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var z_={[ms]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function k_(s){return z_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[qi]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function V_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":H_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[xs]:"ENVMAP_MODE_REFRACTION"};function W_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[Jl]:"ENVMAP_BLENDING_MULTIPLY",[Jd]:"ENVMAP_BLENDING_MIX",[jd]:"ENVMAP_BLENDING_ADD"};function q_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":X_[s.combine]||"ENVMAP_BLENDING_NONE"}function Y_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Z_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=k_(e),l=V_(e),d=W_(e),f=q_(e),h=Y_(e),u=I_(e),p=L_(r),x=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==gn?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),o=Ph(o),o=If(o,e),o=Lf(o,e),a=Ph(a),a=If(a,e),a=Lf(a,e),o=Nf(o),a=Nf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=M+g+o,y=M+m+a,S=Rf(i,i.VERTEX_SHADER,R),T=Rf(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(U){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(S)||"",N=i.getShaderInfoLog(T)||"",V=O.trim(),G=H.trim(),q=N.trim(),it=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,T);else{let Q=Pf(i,S,"vertex"),tt=Pf(i,T,"fragment");Ut("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+Q+`
`+tt)}else V!==""?Et("WebGLProgram: Program Info Log:",V):(G===""||q==="")&&(Y=!1);Y&&(U.diagnostics={runnable:it,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:m}})}i.deleteShader(S),i.deleteShader(T),_=new mr(i,x),A=N_(i,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(x,S_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}var K_=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lh(t),e.set(t,n)),n}},Lh=class{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}};function J_(s){return s===Ki||s===co||s===lo}function j_(s,t,e,n,i,r){let o=new $s,a=new Ih,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,A,P,U,O,H){let N=U.fog,V=O.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||G,q),Y=it&&it.mapping===io?it.image.height:null,Q=u[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Et("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=tt!==void 0?tt.length:0,At=0;V.morphAttributes.position!==void 0&&(At=1),V.morphAttributes.normal!==void 0&&(At=2),V.morphAttributes.color!==void 0&&(At=3);let he,jt,ee,K;if(Q){let _e=si[Q];he=_e.vertexShader,jt=_e.fragmentShader}else{he=_.vertexShader,jt=_.fragmentShader;let _e=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,_e,ae),ee=_e.id,K=ae.id}let B=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),vt=O.isInstancedMesh===!0,rt=O.isBatchedMesh===!0,Nt=!!_.map,oe=!!_.matcap,Ot=!!it,Xt=!!_.aoMap,ne=!!_.lightMap,Gt=!!_.bumpMap&&_.wireframe===!1,qt=!!_.normalMap,Ae=!!_.displacementMap,Se=!!_.emissiveMap,zt=!!_.metalnessMap,kt=!!_.roughnessMap,I=_.anisotropy>0,xe=_.clearcoat>0,te=_.dispersion>0,E=_.retroreflectivity>0,v=_.iridescence>0,F=_.sheen>0,W=_.transmission>0,Z=I&&!!_.anisotropyMap,st=xe&&!!_.clearcoatMap,ot=xe&&!!_.clearcoatNormalMap,J=xe&&!!_.clearcoatRoughnessMap,$=v&&!!_.iridescenceMap,ct=v&&!!_.iridescenceThicknessMap,Rt=F&&!!_.sheenColorMap,dt=F&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Ct=!!_.specularColorMap,Dt=!!_.specularIntensityMap,Vt=W&&!!_.transmissionMap,D=W&&!!_.thicknessMap,ht=!!_.gradientMap,j=!!_.alphaMap,ut=_.alphaTest>0,xt=!!_.alphaHash,et=!!_.extensions,It=gn;_.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(It=s.toneMapping);let wt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:jt,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:rt,batchingColor:rt&&O._colorsTexture!==null,instancing:vt,instancingColor:vt&&O.instanceColor!==null,instancingMorph:vt&&O.morphTexture!==null,outputColorSpace:B===null?s.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:oe,envMap:Ot,envMapMode:Ot&&it.mapping,envMapCubeUVHeight:Y,aoMap:Xt,lightMap:ne,bumpMap:Gt,normalMap:qt,displacementMap:Ae,emissiveMap:Se,normalMapObjectSpace:qt&&_.normalMapType===ef,normalMapTangentSpace:qt&&_.normalMapType===_c,packedNormalMap:qt&&_.normalMapType===_c&&J_(_.normalMap.format),metalnessMap:zt,roughnessMap:kt,anisotropy:I,anisotropyMap:Z,clearcoat:xe,clearcoatMap:st,clearcoatNormalMap:ot,clearcoatRoughnessMap:J,dispersion:te,retroreflection:E,iridescence:v,iridescenceMap:$,iridescenceThicknessMap:ct,sheen:F,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:lt,specularColorMap:Ct,specularIntensityMap:Dt,transmission:W,transmissionMap:Vt,thicknessMap:D,gradientMap:ht,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:xt,combine:_.combine,mapUv:Nt&&p(_.map.channel),aoMapUv:Xt&&p(_.aoMap.channel),lightMapUv:ne&&p(_.lightMap.channel),bumpMapUv:Gt&&p(_.bumpMap.channel),normalMapUv:qt&&p(_.normalMap.channel),displacementMapUv:Ae&&p(_.displacementMap.channel),emissiveMapUv:Se&&p(_.emissiveMap.channel),metalnessMapUv:zt&&p(_.metalnessMap.channel),roughnessMapUv:kt&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:st&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&p(_.sheenRoughnessMap.channel),specularMapUv:lt&&p(_.specularMap.channel),specularColorMapUv:Ct&&p(_.specularColorMap.channel),specularIntensityMapUv:Dt&&p(_.specularIntensityMap.channel),transmissionMapUv:Vt&&p(_.transmissionMap.channel),thicknessMapUv:D&&p(_.thicknessMap.channel),alphaMapUv:j&&p(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(qt||I),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Nt||j),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&qt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:nt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function g(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(A,_),M(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function m(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){let A=u[_.type],P;if(A){let U=si[A];P=mf.clone(U.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=d.get(A);return P!==void 0?++P.usedTimes:(P=new Z_(s,A,_,i),l.push(P),d.set(A,P)),P}function S(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:w}}function $_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Q_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Uf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ff(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,p,x,g,m){let M=s[t];return M===void 0?(M={id:h.id,object:h,geometry:u,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},s[t]=M):(M.id=h.id,M.object=h,M.geometry=u,M.material=p,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=g,M.group=m),t++,M}function c(h,u,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let R=a(h,u,p,x,g,m);p.transmission>0?n.push(R):p.transparent===!0?i.push(R):e.push(R)}function l(h,u,p,x,g,m){let M=a(h,u,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function d(h,u){e.length>1&&e.sort(h||Q_),n.length>1&&n.sort(u||Uf),i.length>1&&i.sort(u||Uf)}function f(){for(let h=t,u=s.length;h<u;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:d}}function t1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ff,s.set(n,[o])):i>=r.length?(o=new Ff,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function e1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new _t};break;case"SpotLight":e={position:new C,direction:new C,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function n1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var i1=0;function s1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function r1(s){let t=new e1,e=n1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,r=new Ht,o=new Ht;function a(l){let d=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,p=0,x=0,g=0,m=0,M=0,R=0,y=0,S=0,T=0,w=0,_=0,A=0,P=0;l.sort(s1);for(let O=0,H=l.length;O<H;O++){let N=l[O],V=N.color,G=N.intensity,q=N.distance,it=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ki?it=N.shadow.map.texture:it=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=V.r*G,f+=V.g*G,h+=V.b*G;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],G);P++}else if(N.isSunLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=it;let Pt=Q.getViewportCount();for(let At=0;At<Pt;At++)n.sunShadowMatrix[x+At]=Q.getMatrix(At),n.sunShadowCascade[x+At]=Q._cascadeData[At];x+=Pt,p++}n.sun[u]=Y,u++}else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=Y,g++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(V).multiplyScalar(G),Y.distance=q,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[M]=Y;let Q=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[M]=Q.matrix,N.castShadow){let tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=it,w++}M++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(V).multiplyScalar(G),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=Y,R++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=N.shadow.matrix,T++}n.point[m]=Y,m++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(G),Y.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[y]=Y,y++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==u||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==R||U.hemiLength!==y||U.numSunShadows!==p||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==w||U.numSpotMaps!==_||U.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=R,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,U.sunLength=u,U.directionalLength=g,U.pointLength=m,U.spotLength=M,U.rectAreaLength=R,U.hemiLength=y,U.numSunShadows=p,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=w,U.numSpotMaps=_,U.numLightProbes=P,n.version=i1++)}function c(l,d){let f=0,h=0,u=0,p=0,x=0,g=0,m=d.matrixWorldInverse;for(let M=0,R=l.length;M<R;M++){let y=l[M];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Of(s){let t=new r1(s),e=[],n=[],i=[];function r(h){f.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function o1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Of(s),t.set(i,[a])):r>=o.length?(a=new Of(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
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
}`,l1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],h1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Bf=new Ht,po=new C,Th=new C;function u1(s,t,e){let n=new sr,i=new Ft,r=new Ft,o=new de,a=new ba,c=new Ma,l={},d=e.maxTextureSize,f={[ei]:on,[on]:ei,[De]:De},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:a1,fragmentShader:c1}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Me(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let m=this.type;this.render=function(T,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Id&&(Et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let A=s.getRenderTarget(),P=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ni),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==this.type;H&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=T.length;N<V;N++){let G=T[N],q=G.shadow;if(q===void 0){Et("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let it=q.getFrameExtents();i.multiply(it),r.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/it.x),i.x=r.x*it.x,q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/it.y),i.y=r.y*it.y,q.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===cr){if(G.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new je(i.x,i.y,{format:Ki,type:_n,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new jn(i.x,i.y,xn),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=Zn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we}else G.isPointLight?(q.map=new wc(i.x),q.map.depthTexture=new _a(i.x,Hn)):(q.map=new je(i.x,i.y),q.map.depthTexture=new jn(i.x,i.y,Hn)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=Zn,this.type===ms?(q.map.depthTexture.compareFunction=Y?yc:vc,q.map.depthTexture.minFilter=Ne,q.map.depthTexture.magFilter=Ne):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=we,q.map.depthTexture.magFilter=we);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();G.isPointLight!==!0&&q.updateMatrices(G,_);for(let tt=0;tt<Q;tt++){let Pt=q.getCamera(tt);if(G.isPointLight){let At=q.camera,he=q.matrix,jt=G.distance||At.far;jt!==At.far&&(At.far=jt,At.updateProjectionMatrix()),po.setFromMatrixPosition(G.matrixWorld),At.position.copy(po),Th.copy(At.position),Th.add(l1[tt]),At.up.copy(h1[tt]),At.lookAt(Th),At.updateMatrixWorld(),he.makeTranslation(-po.x,-po.y,-po.z),Bf.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Bf,At.coordinateSystem,At.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,tt),s.clear();else{tt===0&&(s.setRenderTarget(q.map),s.clear());let At=q.getViewport(tt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),O.viewport(o)}n=q.getFrustum(tt),y(w,_,Pt,G,this.type)}q.isPointLightShadow!==!0&&this.type===cr&&M(q,_),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(A,P,U)};function M(T,w){let _=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new je(i.x,i.y,{format:Ki,type:_n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,_,h,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,_,u,x,null)}function R(T,w,_,A){let P=null,U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=_.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=P.uuid,H=w.uuid,N=l[O];N===void 0&&(N={},l[O]=N);let V=N[H];V===void 0&&(V=P.clone(),N[H]=V,w.addEventListener("dispose",S)),P=V}if(P.visible=w.visible,P.wireframe=w.wireframe,A===cr?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:f[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=s.properties.get(P);O.light=_}return P}function y(T,w,_,A,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let H=t.update(T),N=T.material;if(Array.isArray(N)){let V=H.groups;for(let G=0,q=V.length;G<q;G++){let it=V[G],Y=N[it.materialIndex];if(Y&&Y.visible){let Q=R(T,Y,A,P);T.onBeforeShadow(s,T,w,_,H,Q,it),s.renderBufferDirect(_,null,H,Q,T,it),T.onAfterShadow(s,T,w,_,H,Q,it)}}}else if(N.visible){let V=R(T,N,A,P);T.onBeforeShadow(s,T,w,_,H,V,null),s.renderBufferDirect(_,null,H,V,T,null),T.onAfterShadow(s,T,w,_,H,V,null)}}let O=T.children;for(let H=0,N=O.length;H<N;H++)y(O[H],w,_,A,P)}function S(T){T.target.removeEventListener("dispose",S);for(let _ in l){let A=l[_],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function d1(s,t){function e(){let D=!1,ht=new de,j=null,ut=new de(0,0,0,0);return{setMask:function(xt){j!==xt&&!D&&(s.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){D=xt},setClear:function(xt,et,It,wt,_e){_e===!0&&(xt*=wt,et*=wt,It*=wt),ht.set(xt,et,It,wt),ut.equals(ht)===!1&&(s.clearColor(xt,et,It,wt),ut.copy(ht))},reset:function(){D=!1,j=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,j=null,ut=null,xt=null;return{setReversed:function(et){if(ht!==et){let It=t.get("EXT_clip_control");et?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=et;let wt=xt;xt=null,this.setClear(wt)}},getReversed:function(){return ht},setTest:function(et){et?B(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(et){j!==et&&!D&&(s.depthMask(et),j=et)},setFunc:function(et){if(ht&&(et=ff[et]),ut!==et){switch(et){case oa:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=et}},setLocked:function(et){D=et},setClear:function(et){xt!==et&&(xt=et,ht&&(et=1-et),s.clearDepth(et))},reset:function(){D=!1,j=null,ut=null,xt=null,ht=!1}}}function i(){let D=!1,ht=null,j=null,ut=null,xt=null,et=null,It=null,wt=null,_e=null;return{setTest:function(ae){D||(ae?B(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!D&&(s.stencilMask(ae),ht=ae)},setFunc:function(ae,In,Wn){(j!==ae||ut!==In||xt!==Wn)&&(s.stencilFunc(ae,In,Wn),j=ae,ut=In,xt=Wn)},setOp:function(ae,In,Wn){(et!==ae||It!==In||wt!==Wn)&&(s.stencilOp(ae,In,Wn),et=ae,It=In,wt=Wn)},setLocked:function(ae){D=ae},setClear:function(ae){_e!==ae&&(s.clearStencil(ae),_e=ae)},reset:function(){D=!1,ht=null,j=null,ut=null,xt=null,et=null,It=null,wt=null,_e=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,d={},f={},h={},u=new WeakMap,p=[],x=null,g=!1,m=null,M=null,R=null,y=null,S=null,T=null,w=null,_=new _t(0,0,0),A=0,P=!1,U=null,O=null,H=null,N=null,V=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=it>=2);let Q=null,tt={},Pt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),he=new de().fromArray(Pt),jt=new de().fromArray(At);function ee(D,ht,j,ut){let xt=new Uint8Array(4),et=s.createTexture();s.bindTexture(D,et),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<j;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ht+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return et}let K={};K[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(s.DEPTH_TEST),o.setFunc(qs),Gt(!1),qt(Wl),B(s.CULL_FACE),Xt(ni);function B(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function nt(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function vt(D,ht){return h[D]!==ht?(s.bindFramebuffer(D,ht),h[D]=ht,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function rt(D,ht){let j=p,ut=!1;if(D){j=u.get(ht),j===void 0&&(j=[],u.set(ht,j));let xt=D.textures;if(j.length!==xt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let et=0,It=xt.length;et<It;et++)j[et]=s.COLOR_ATTACHMENT0+et;j.length=xt.length,ut=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,ut=!0);ut&&s.drawBuffers(j)}function Nt(D){return x!==D?(s.useProgram(D),x=D,!0):!1}let oe={[gs]:s.FUNC_ADD,[Nd]:s.FUNC_SUBTRACT,[Dd]:s.FUNC_REVERSE_SUBTRACT};oe[Ud]=s.MIN,oe[Fd]=s.MAX;let Ot={[Od]:s.ZERO,[Bd]:s.ONE,[zd]:s.SRC_COLOR,[Zl]:s.SRC_ALPHA,[Xd]:s.SRC_ALPHA_SATURATE,[Gd]:s.DST_COLOR,[Hd]:s.DST_ALPHA,[kd]:s.ONE_MINUS_SRC_COLOR,[Kl]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Vd]:s.ONE_MINUS_DST_ALPHA,[qd]:s.CONSTANT_COLOR,[Yd]:s.ONE_MINUS_CONSTANT_COLOR,[Zd]:s.CONSTANT_ALPHA,[Kd]:s.ONE_MINUS_CONSTANT_ALPHA};function Xt(D,ht,j,ut,xt,et,It,wt,_e,ae){if(D===ni){g===!0&&(nt(s.BLEND),g=!1);return}if(g===!1&&(B(s.BLEND),g=!0),D!==Ld){if(D!==m||ae!==P){if((M!==gs||S!==gs)&&(s.blendEquation(s.FUNC_ADD),M=gs,S=gs),ae)switch(D){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.ONE,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",D);break}else switch(D){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ql:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",D);break}R=null,y=null,T=null,w=null,_.set(0,0,0),A=0,m=D,P=ae}return}xt=xt||ht,et=et||j,It=It||ut,(ht!==M||xt!==S)&&(s.blendEquationSeparate(oe[ht],oe[xt]),M=ht,S=xt),(j!==R||ut!==y||et!==T||It!==w)&&(s.blendFuncSeparate(Ot[j],Ot[ut],Ot[et],Ot[It]),R=j,y=ut,T=et,w=It),(wt.equals(_)===!1||_e!==A)&&(s.blendColor(wt.r,wt.g,wt.b,_e),_.copy(wt),A=_e),m=D,P=!1}function ne(D,ht){D.side===De?nt(s.CULL_FACE):B(s.CULL_FACE);let j=D.side===on;ht&&(j=!j),Gt(j),D.blending===lr&&D.transparent===!1?Xt(ni):Xt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ut=D.stencilWrite;a.setTest(ut),ut&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){U!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),U=D)}function qt(D){D!==Cd?(B(s.CULL_FACE),D!==O&&(D===Wl?s.cullFace(s.BACK):D===Pd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),O=D}function Ae(D){D!==H&&(q&&s.lineWidth(D),H=D)}function Se(D,ht,j){D?(B(s.POLYGON_OFFSET_FILL),(N!==ht||V!==j)&&(N=ht,V=j,o.getReversed()&&(ht=-ht),s.polygonOffset(ht,j))):nt(s.POLYGON_OFFSET_FILL)}function zt(D){D?B(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function kt(D){D===void 0&&(D=s.TEXTURE0+G-1),Q!==D&&(s.activeTexture(D),Q=D)}function I(D,ht,j){j===void 0&&(Q===null?j=s.TEXTURE0+G-1:j=Q);let ut=tt[j];ut===void 0&&(ut={type:void 0,texture:void 0},tt[j]=ut),(ut.type!==D||ut.texture!==ht)&&(Q!==j&&(s.activeTexture(j),Q=j),s.bindTexture(D,ht||K[D]),ut.type=D,ut.texture=ht)}function xe(){let D=tt[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function v(){try{s.texSubImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function F(){try{s.texSubImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function st(){try{s.texStorage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function ot(){try{s.texStorage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function J(){try{s.texImage2D(...arguments)}catch(D){Ut("WebGLState:",D)}}function $(){try{s.texImage3D(...arguments)}catch(D){Ut("WebGLState:",D)}}function ct(D){return f[D]!==void 0?f[D]:s.getParameter(D)}function Rt(D,ht){f[D]!==ht&&(s.pixelStorei(D,ht),f[D]=ht)}function dt(D){he.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function lt(D){jt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),jt.copy(D))}function Ct(D,ht){let j=l.get(ht);j===void 0&&(j=new WeakMap,l.set(ht,j));let ut=j.get(D);ut===void 0&&(ut=s.getUniformBlockIndex(ht,D.name),j.set(D,ut))}function Dt(D,ht){let ut=l.get(ht).get(D);c.get(ht)!==ut&&(s.uniformBlockBinding(ht,ut,D.__bindingPointIndex),c.set(ht,ut))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,tt={},h={},u=new WeakMap,p=[],x=null,g=!1,m=null,M=null,R=null,y=null,S=null,T=null,w=null,_=new _t(0,0,0),A=0,P=!1,U=null,O=null,H=null,N=null,V=null,he.set(0,0,s.canvas.width,s.canvas.height),jt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:nt,bindFramebuffer:vt,drawBuffers:rt,useProgram:Nt,setBlending:Xt,setMaterial:ne,setFlipSided:Gt,setCullFace:qt,setLineWidth:Ae,setPolygonOffset:Se,setScissorTest:zt,activeTexture:kt,bindTexture:I,unbindTexture:xe,compressedTexImage2D:te,compressedTexImage3D:E,texImage2D:J,texImage3D:$,pixelStorei:Rt,getParameter:ct,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:st,texStorage3D:ot,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:dt,viewport:lt,reset:Vt}}function f1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,d=new WeakMap,f=new Set,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,v){return p?new OffscreenCanvas(E,v):Ks("canvas")}function g(E,v,F){let W=1,Z=te(E);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let st=Math.floor(W*Z.width),ot=Math.floor(W*Z.height);h===void 0&&(h=x(st,ot));let J=v?x(st,ot):h;return J.width=st,J.height=ot,J.getContext("2d").drawImage(E,0,0,st,ot),Et("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+ot+")."),J}else return"data"in E&&Et("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function M(E){s.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,v,F,W,Z,st=!1){if(E!==null){if(s[E]!==void 0)return s[E];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ot;W&&(ot=t.get("EXT_texture_norm16"),ot||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===s.RED&&(F===s.FLOAT&&(J=s.R32F),F===s.HALF_FLOAT&&(J=s.R16F),F===s.UNSIGNED_BYTE&&(J=s.R8),F===s.UNSIGNED_SHORT&&ot&&(J=ot.R16_EXT),F===s.SHORT&&ot&&(J=ot.R16_SNORM_EXT)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.R8UI),F===s.UNSIGNED_SHORT&&(J=s.R16UI),F===s.UNSIGNED_INT&&(J=s.R32UI),F===s.BYTE&&(J=s.R8I),F===s.SHORT&&(J=s.R16I),F===s.INT&&(J=s.R32I)),v===s.RG&&(F===s.FLOAT&&(J=s.RG32F),F===s.HALF_FLOAT&&(J=s.RG16F),F===s.UNSIGNED_BYTE&&(J=s.RG8),F===s.UNSIGNED_SHORT&&ot&&(J=ot.RG16_EXT),F===s.SHORT&&ot&&(J=ot.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RG8UI),F===s.UNSIGNED_SHORT&&(J=s.RG16UI),F===s.UNSIGNED_INT&&(J=s.RG32UI),F===s.BYTE&&(J=s.RG8I),F===s.SHORT&&(J=s.RG16I),F===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RGB8UI),F===s.UNSIGNED_SHORT&&(J=s.RGB16UI),F===s.UNSIGNED_INT&&(J=s.RGB32UI),F===s.BYTE&&(J=s.RGB8I),F===s.SHORT&&(J=s.RGB16I),F===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),F===s.UNSIGNED_INT&&(J=s.RGBA32UI),F===s.BYTE&&(J=s.RGBA8I),F===s.SHORT&&(J=s.RGBA16I),F===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(F===s.UNSIGNED_SHORT&&ot&&(J=ot.RGB16_EXT),F===s.SHORT&&ot&&(J=ot.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){let $=st?Fr:Kt.getTransfer(Z);F===s.FLOAT&&(J=s.RGBA32F),F===s.HALF_FLOAT&&(J=s.RGBA16F),F===s.UNSIGNED_BYTE&&(J=$===le?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&ot&&(J=ot.RGBA16_EXT),F===s.SHORT&&ot&&(J=ot.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(E,v){let F;return E?v===null||v===Hn||v===ur?F=s.DEPTH24_STENCIL8:v===xn?F=s.DEPTH32F_STENCIL8:v===Yi&&(F=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===ur?F=s.DEPTH_COMPONENT24:v===xn?F=s.DEPTH_COMPONENT32F:v===Yi&&(F=s.DEPTH_COMPONENT16),F}function T(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==Ne?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){let v=E.target;v.removeEventListener("dispose",w),A(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&f.delete(v)}function _(E){let v=E.target;v.removeEventListener("dispose",_),U(v)}function A(E){let v=n.get(E);if(v.__webglInit===void 0)return;let F=E.source,W=u.get(F);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(E),Object.keys(W).length===0&&u.delete(F)}n.remove(E)}function P(E){let v=n.get(E);s.deleteTexture(v.__webglTexture);let F=E.source,W=u.get(F);delete W[v.__cacheKey],o.memory.textures--}function U(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)s.deleteFramebuffer(v.__webglFramebuffer[W]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let W=0,Z=F.length;W<Z;W++){let st=n.get(F[W]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(F[W])}n.remove(E)}let O=0;function H(){O=0}function N(){return O}function V(E){O=E}function G(){let E=O;return E>=i.maxTextures&&Et("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,E}function q(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function it(E,v){let F=n.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let W=E.image;if(W===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(F,E,v);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function Y(E,v){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){nt(F,E,v);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function Q(E,v){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){nt(F,E,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function tt(E,v){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){vt(F,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}let Pt={[zi]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},At={[we]:s.NEAREST,[Da]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},he={[sf]:s.NEVER,[lf]:s.ALWAYS,[rf]:s.LESS,[vc]:s.LEQUAL,[of]:s.EQUAL,[yc]:s.GEQUAL,[af]:s.GREATER,[cf]:s.NOTEQUAL};function jt(E,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ne||v.magFilter===hr||v.magFilter===_s||v.magFilter===kn||v.minFilter===Ne||v.minFilter===hr||v.minFilter===_s||v.minFilter===kn)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Pt[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Pt[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Pt[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,At[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===we||v.minFilter!==_s&&v.minFilter!==kn||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));let W=v.source,Z=u.get(W);Z===void 0&&(Z={},u.set(W,Z));let st=q(v);if(st!==E.__cacheKey){Z[st]===void 0&&(Z[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[st].usedTimes++;let ot=Z[E.__cacheKey];ot!==void 0&&(Z[E.__cacheKey].usedTimes--,ot.usedTimes===0&&P(v)),E.__cacheKey=st,E.__webglTexture=Z[st].texture}return F}function K(E,v,F){return Math.floor(Math.floor(E/F)/v)}function B(E,v,F,W){let st=E.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{st.sort((Rt,dt)=>Rt.start-dt.start);let ot=0;for(let Rt=1;Rt<st.length;Rt++){let dt=st[ot],lt=st[Rt],Ct=dt.start+dt.count,Dt=K(lt.start,v.width,4),Vt=K(dt.start,v.width,4);lt.start<=Ct+1&&Dt===Vt&&K(lt.start+lt.count-1,v.width,4)===Dt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++ot,st[ot]=lt)}st.length=ot+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Rt=0,dt=st.length;Rt<dt;Rt++){let lt=st[Rt],Ct=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),Vt=Ct%v.width,D=Math.floor(Ct/v.width),ht=Dt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Vt,D,ht,j,F,W,v.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function nt(E,v,F){let W=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=s.TEXTURE_3D);let Z=ee(E,v),st=v.source;e.bindTexture(W,E.__webglTexture,s.TEXTURE0+F);let ot=n.get(st);if(st.version!==ot.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=Kt.getPrimaries(Kt.workingColorSpace),ut=v.colorSpace===wi?null:Kt.getPrimaries(v.colorSpace),xt=v.colorSpace===wi||j===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let $=g(v.image,!1,i.maxTextureSize);$=xe(v,$);let ct=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),dt=y(v.internalFormat,ct,Rt,v.normalized,v.colorSpace,v.isVideoTexture);jt(W,v);let lt,Ct=v.mipmaps,Dt=v.isVideoTexture!==!0,Vt=ot.__version===void 0||Z===!0,D=st.dataReady,ht=T(v,$);if(v.isDepthTexture)dt=S(v.format===Zi,v.type),Vt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,dt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,dt,$.width,$.height,0,ct,Rt,null));else if(v.isDataTexture)if(Ct.length>0){Dt&&Vt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,Ct[0].width,Ct[0].height);for(let j=0,ut=Ct.length;j<ut;j++)lt=Ct[j],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ct,Rt,lt.data):e.texImage2D(s.TEXTURE_2D,j,dt,lt.width,lt.height,0,ct,Rt,lt.data);v.generateMipmaps=!1}else Dt?(Vt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,$.width,$.height),D&&B(v,$,ct,Rt)):e.texImage2D(s.TEXTURE_2D,0,dt,$.width,$.height,0,ct,Rt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,Ct[0].width,Ct[0].height,$.depth);for(let j=0,ut=Ct.length;j<ut;j++)if(lt=Ct[j],v.format!==vn)if(ct!==null)if(Dt){if(D)if(v.layerUpdates.size>0){let xt=vh(lt.width,lt.height,v.format,v.type);for(let et of v.layerUpdates){let It=lt.data.subarray(et*xt/lt.data.BYTES_PER_ELEMENT,(et+1)*xt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,et,lt.width,lt.height,1,ct,It)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,$.depth,ct,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,dt,lt.width,lt.height,$.depth,0,lt.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,$.depth,ct,Rt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,dt,lt.width,lt.height,$.depth,0,ct,Rt,lt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Dt&&Vt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,Ct[0].width,Ct[0].height);for(let j=0,ut=Ct.length;j<ut;j++)lt=Ct[j],v.format!==vn?ct!==null?Dt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,dt,lt.width,lt.height,0,lt.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ct,Rt,lt.data):e.texImage2D(s.TEXTURE_2D,j,dt,lt.width,lt.height,0,ct,Rt,lt.data)}else if(v.isDataArrayTexture)if(Dt){if(Vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,$.width,$.height,$.depth),D)if(v.layerUpdates.size>0){let j=vh($.width,$.height,v.format,v.type);for(let ut of v.layerUpdates){let xt=$.data.subarray(ut*j/$.data.BYTES_PER_ELEMENT,(ut+1)*j/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,$.width,$.height,1,ct,Rt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,Rt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,$.width,$.height,$.depth,0,ct,Rt,$.data);else if(v.isData3DTexture)Dt?(Vt&&e.texStorage3D(s.TEXTURE_3D,ht,dt,$.width,$.height,$.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,Rt,$.data)):e.texImage3D(s.TEXTURE_3D,0,dt,$.width,$.height,$.depth,0,ct,Rt,$.data);else if(v.isFramebufferTexture){if(Vt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ht,dt,$.width,$.height);else{let j=$.width,ut=$.height;for(let xt=0;xt<ht;xt++)e.texImage2D(s.TEXTURE_2D,xt,dt,j,ut,0,ct,Rt,null),j>>=1,ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),$.parentNode!==j){j.appendChild($),f.add(v),j.onpaint=ut=>{let xt=ut.changedElements;for(let et of f)xt.includes(et.image)&&(et.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let xt=s.RGBA,et=s.RGBA,It=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,et,It,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Vt){let j=te(Ct[0]);e.texStorage2D(s.TEXTURE_2D,ht,dt,j.width,j.height)}for(let j=0,ut=Ct.length;j<ut;j++)lt=Ct[j],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ct,Rt,lt):e.texImage2D(s.TEXTURE_2D,j,dt,ct,Rt,lt);v.generateMipmaps=!1}else if(Dt){if(Vt){let j=te($);e.texStorage2D(s.TEXTURE_2D,ht,dt,j.width,j.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Rt,$)}else e.texImage2D(s.TEXTURE_2D,0,dt,ct,Rt,$);m(v)&&M(W),ot.__version=st.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function vt(E,v,F){if(v.image.length!==6)return;let W=ee(E,v),Z=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);let st=n.get(Z);if(Z.version!==st.__version||W===!0){e.activeTexture(s.TEXTURE0+F);let ot=Kt.getPrimaries(Kt.workingColorSpace),J=v.colorSpace===wi?null:Kt.getPrimaries(v.colorSpace),$=v.colorSpace===wi||ot===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Rt=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!ct&&!Rt?dt[et]=g(v.image[et],!0,i.maxCubemapSize):dt[et]=Rt?v.image[et].image:v.image[et],dt[et]=xe(v,dt[et]);let lt=dt[0],Ct=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Vt=y(v.internalFormat,Ct,Dt,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ht=st.__version===void 0||W===!0,j=Z.dataReady,ut=T(v,lt);jt(s.TEXTURE_CUBE_MAP,v);let xt;if(ct){D&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Vt,lt.width,lt.height);for(let et=0;et<6;et++){xt=dt[et].mipmaps;for(let It=0;It<xt.length;It++){let wt=xt[It];v.format!==vn?Ct!==null?D?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,Vt,wt.width,wt.height,0,wt.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,0,0,wt.width,wt.height,Ct,Dt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,Vt,wt.width,wt.height,0,Ct,Dt,wt.data)}}}else{if(xt=v.mipmaps,D&&ht){xt.length>0&&ut++;let et=te(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Vt,et.width,et.height)}for(let et=0;et<6;et++)if(Rt){D?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,Ct,Dt,dt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,dt[et].width,dt[et].height,0,Ct,Dt,dt[et].data);for(let It=0;It<xt.length;It++){let _e=xt[It].image[et].image;D?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,0,0,_e.width,_e.height,Ct,Dt,_e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,Vt,_e.width,_e.height,0,Ct,Dt,_e.data)}}else{D?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct,Dt,dt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,Ct,Dt,dt[et]);for(let It=0;It<xt.length;It++){let wt=xt[It];D?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,0,0,Ct,Dt,wt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,Vt,Ct,Dt,wt.image[et])}}}m(v)&&M(s.TEXTURE_CUBE_MAP),st.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function rt(E,v,F,W,Z,st){let ot=r.convert(F.format,F.colorSpace),J=r.convert(F.type),$=y(F.internalFormat,ot,J,F.normalized,F.colorSpace),ct=n.get(v),Rt=n.get(F);if(Rt.__renderTarget=v,!ct.__hasExternalTextures){let dt=Math.max(1,v.width>>st),lt=Math.max(1,v.height>>st);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,$,dt,lt,v.depth,0,ot,J,null):e.texImage2D(Z,st,$,dt,lt,0,ot,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),kt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,Rt.__webglTexture,0,zt(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,Rt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(E,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,st=S(v.stencilBuffer,Z),ot=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;kt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(v),st,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(v),st,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,st,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,E)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let st=W[Z],ot=r.convert(st.format,st.colorSpace),J=r.convert(st.type),$=y(st.internalFormat,ot,J,st.normalized,st.colorSpace);kt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(v),$,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(v),$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(E,v,F){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),jt(s.TEXTURE_CUBE_MAP,v.depthTexture);let ct=r.convert(v.depthTexture.format),Rt=r.convert(v.depthTexture.type),dt;v.depthTexture.format===Zn?dt=s.DEPTH_COMPONENT24:v.depthTexture.format===Zi&&(dt=s.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,v.width,v.height,0,ct,Rt,null)}}else it(v.depthTexture,0);let st=Z.__webglTexture,ot=zt(v),J=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,$=v.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)kt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,st,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,$,J,st,0);else if(v.depthTexture.format===Zi)kt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,st,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,$,J,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(E){let v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let W=0;W<6;W++)oe(v.__webglFramebuffer[W],E,W);else{let W=E.texture.mipmaps;W&&W.length>0?oe(v.__webglFramebuffer[0],E,0):oe(v.__webglFramebuffer,E,0)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=s.createRenderbuffer(),Nt(v.__webglDepthbuffer[W],E,!1);else{let Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,st)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Nt(v.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(E,v,F){let W=n.get(E);v!==void 0&&rt(W.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ot(E)}function ne(E){let v=E.texture,F=n.get(E),W=n.get(v);E.addEventListener("dispose",_);let Z=E.textures,st=E.isWebGLCubeRenderTarget===!0,ot=Z.length>1;if(ot||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=v.version,o.memory.textures++),st){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let $=0;$<v.mipmaps.length;$++)F.__webglFramebuffer[J][$]=s.createFramebuffer()}else F.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)F.__webglFramebuffer[J]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ot)for(let J=0,$=Z.length;J<$;J++){let ct=n.get(Z[J]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&kt(E)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let $=Z[J];F.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let ct=r.convert($.format,$.colorSpace),Rt=r.convert($.type),dt=y($.internalFormat,ct,Rt,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),lt=zt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,dt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,F.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),jt(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)rt(F.__webglFramebuffer[J][$],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else rt(F.__webglFramebuffer[J],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(v)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let J=0,$=Z.length;J<$;J++){let ct=Z[J],Rt=n.get(ct),dt=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Rt.__webglTexture),jt(dt,ct),rt(F.__webglFramebuffer,E,ct,s.COLOR_ATTACHMENT0+J,dt,0),m(ct)&&M(dt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),jt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)rt(F.__webglFramebuffer[$],E,v,s.COLOR_ATTACHMENT0,J,$);else rt(F.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,J,0);m(v)&&M(J),e.unbindTexture()}E.depthBuffer&&Ot(E)}function Gt(E){let v=E.textures;for(let F=0,W=v.length;F<W;F++){let Z=v[F];if(m(Z)){let st=R(E),ot=n.get(Z).__webglTexture;e.bindTexture(st,ot),M(st),e.unbindTexture()}}}let qt=[],Ae=[];function Se(E){if(E.samples>0){if(kt(E)===!1){let v=E.textures,F=E.width,W=E.height,Z=s.COLOR_BUFFER_BIT,st=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(E),J=v.length>1;if(J)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let $=E.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let Rt=n.get(v[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,F,W,0,0,F,W,Z,s.NEAREST),c===!0&&(qt.length=0,Ae.length=0,qt.push(s.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(qt.push(st),Ae.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let Rt=n.get(v[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,Rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function zt(E){return Math.min(i.maxSamples,E.samples)}function kt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(E){let v=o.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function xe(E,v){let F=E.colorSpace,W=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==sn&&F!==wi&&(Kt.getTransfer(F)===le?(W!==vn||Z!==un)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",F)),v}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=it,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=Xt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function p1(s,t){function e(n,i=wi){let r,o=Kt.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===Fa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rh)return s.BYTE;if(n===oh)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===Ua)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===hh)return s.RGB;if(n===vn)return s.RGBA;if(n===Zn)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===Ba)return s.RED;if(n===za)return s.RED_INTEGER;if(n===Ki)return s.RG;if(n===ka)return s.RG_INTEGER;if(n===Ha)return s.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===co||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===lo||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,h=null,u=null,p=null,x=typeof XRWebGLBinding<"u",g=new Nh,m={},M=e.getContextAttributes(),R=null,y=null,S=[],T=[],w=new Ft,_=null,A=null,P=new We;P.viewport=new de;let U=new We;U.viewport=new de;let O=[P,U],H=new Ia,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let B=S[K];return B===void 0&&(B=new Qs,S[K]=B),B.getTargetRaySpace()},this.getControllerGrip=function(K){let B=S[K];return B===void 0&&(B=new Qs,S[K]=B),B.getGripSpace()},this.getHand=function(K){let B=S[K];return B===void 0&&(B=new Qs,S[K]=B),B.getHandSpace()};function G(K){let B=T.indexOf(K.inputSource);if(B===-1)return;let nt=S[B];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||o),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",it);for(let K=0;K<S.length;K++){let B=T[K];B!==null&&(T[K]=null,S[K].disconnect(B))}N=null,V=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(R),u=null,h=null,f=null,i=null,y=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,vt=null,rt=null;M.depth&&(rt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?Zi:Zn,vt=M.stencil?ur:Hn);let Nt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Nt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new je(h.textureWidth,h.textureHeight,{format:vn,type:un,depthTexture:new jn(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new je(u.framebufferWidth,u.framebufferHeight,{format:vn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(K){for(let B=0;B<K.removed.length;B++){let nt=K.removed[B],vt=T.indexOf(nt);vt>=0&&(T[vt]=null,S[vt].disconnect(nt))}for(let B=0;B<K.added.length;B++){let nt=K.added[B],vt=T.indexOf(nt);if(vt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=T.length){T.push(nt),vt=Nt;break}else if(T[Nt]===null){T[Nt]=nt,vt=Nt;break}if(vt===-1)break}let rt=S[vt];rt&&rt.connect(nt)}}let Y=new C,Q=new C;function tt(K,B,nt){Y.setFromMatrixPosition(B.matrixWorld),Q.setFromMatrixPosition(nt.matrixWorld);let vt=Y.distanceTo(Q),rt=B.projectionMatrix.elements,Nt=nt.projectionMatrix.elements,oe=rt[14]/(rt[10]-1),Ot=rt[14]/(rt[10]+1),Xt=(rt[9]+1)/rt[5],ne=(rt[9]-1)/rt[5],Gt=(rt[8]-1)/rt[0],qt=(Nt[8]+1)/Nt[0],Ae=oe*Gt,Se=oe*qt,zt=vt/(-Gt+qt),kt=zt*-Gt;if(B.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),rt[10]===-1)K.projectionMatrix.copy(B.projectionMatrix),K.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let I=oe+zt,xe=Ot+zt,te=Ae-kt,E=Se+(vt-kt),v=Xt*Ot/xe*I,F=ne*Ot/xe*I;K.projectionMatrix.makePerspective(te,E,v,F,I,xe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Pt(K,B){B===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(B.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let B=K.near,nt=K.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),H.near=U.near=P.near=B,H.far=U.far=P.far=nt,(N!==H.near||V!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,V=H.far),H.layers.mask=K.layers.mask|6,P.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let vt=K.parent,rt=H.cameras;Pt(H,vt);for(let Nt=0;Nt<rt.length;Nt++)Pt(rt[Nt],vt);rt.length===2?tt(H,P,U):H.projectionMatrix.copy(P.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),At(K,H,vt)};function At(K,B,nt){nt===null?K.matrix.copy(B.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(B.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(B.projectionMatrix),K.projectionMatrixInverse.copy(B.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=hs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(K){return m[K]};let he=null;function jt(K,B){if(d=B.getViewerPose(l||o),p=B,d!==null){let nt=d.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let vt=!1;nt.length!==H.cameras.length&&(H.cameras.length=0,vt=!0);for(let Ot=0;Ot<nt.length;Ot++){let Xt=nt[Ot],ne=null;if(u!==null)ne=u.getViewport(Xt);else{let qt=f.getViewSubImage(h,Xt);ne=qt.viewport,Ot===0&&(t.setRenderTargetTextures(y,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(y))}let Gt=O[Ot];Gt===void 0&&(Gt=new We,Gt.layers.enable(Ot),Gt.viewport=new de,O[Ot]=Gt),Gt.matrix.fromArray(Xt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Xt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),Ot===0&&(H.matrix.copy(Gt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),vt===!0&&H.cameras.push(Gt)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ot=f.getDepthInformation(nt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,i.renderState)}if(rt&&rt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<nt.length;Ot++){let Xt=nt[Ot].camera;if(Xt){let ne=m[Xt];ne||(ne=new Yr,m[Xt]=ne);let Gt=f.getCameraImage(Xt);ne.sourceTexture=Gt}}}}for(let nt=0;nt<S.length;nt++){let vt=T[nt],rt=S[nt];vt!==null&&rt!==void 0&&rt.update(vt,B,l||o)}he&&he(K,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),p=null}let ee=new zf;ee.setAnimationLoop(jt),this.setAnimationLoop=function(K){he=K},this.dispose=function(){}}},x1=new Ht,Xf=new Bt;Xf.set(-1,0,0,0,1,0,0,0,1);function _1(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,R,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,R):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),R=M.envMap,y=M.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v1(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function l(y,S){let T=i[y.id];T===void 0&&(g(y),T=d(y),i[y.id]=T,y.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(y,w);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function d(y){let S=f();y.__bindingPointIndex=S;let T=s.createBuffer(),w=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,w,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=i[y.id],T=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,A=T.length;_<A;_++){let P=T[_];if(Array.isArray(P))for(let U=0,O=P.length;U<O;U++)u(P[U],_,U,w);else u(P,_,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(y,S,T,w){if(x(y,S,T,w)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let U=0;U<A.length;U++){let O=A[U],H=m(O);p(O,y.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function x(y,S,T,w){let _=y.value,A=S+"_"+T;if(w[A]===void 0)return typeof _=="number"||typeof _=="boolean"?w[A]=_:ArrayBuffer.isView(_)?w[A]=_.slice():w[A]=_.clone(),!0;{let P=w[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(y){let S=y.uniforms,T=0,w=16;for(let A=0,P=S.length;A<P;A++){let U=Array.isArray(S[A])?S[A]:[S[A]];for(let O=0,H=U.length;O<H;O++){let N=U[O],V=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=V.length;G<q;G++){let it=V[G],Y=m(it),Q=T%w,tt=Q%Y.boundary,Pt=Q+tt;T+=tt,Pt!==0&&w-Pt<Y.storage&&(T+=w-Pt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=Y.storage}}}let _=T%w;return _>0&&(T+=w-_),y.__size=T,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function R(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:R}}var y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function b1(){return ii===null&&(ii=new ir(y1,16,16,Ki,_n),ii.name="DFG_LUT",ii.minFilter=Ne,ii.magFilter=Ne,ii.wrapS=En,ii.wrapT=En,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Tc=class{constructor(t={}){let{canvas:e=hf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=u,g=new Set([Ha,ka,za]),m=new Set([un,Hn,Yi,ur,Fa,Oa]),M=new Uint32Array(4),R=new Int32Array(4),y=new C,S=null,T=null,w=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,O=null,H=null,N=null,V=null;this._outputColorSpace=Ie;let G=0,q=0,it=null,Y=-1,Q=null,tt=new de,Pt=new de,At=null,he=new _t(0),jt=0,ee=e.width,K=e.height,B=1,nt=null,vt=null,rt=new de(0,0,ee,K),Nt=new de(0,0,ee,K),oe=!1,Ot=new sr,Xt=!1,ne=!1,Gt=new Ht,qt=new C,Ae=new de,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function kt(){return it===null?B:1}let I=n;function xe(b,L){return e.getContext(b,L)}let te,E,v,F,W,Z,st,ot,J,$,ct,Rt,dt,lt,Ct,Dt,Vt,D,ht,j,ut,xt,et;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",In,!1),I===null){let L="webgl2";if(I=xe(L,b),I===null)throw xe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(b){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Ut("WebGLRenderer: "+b.message),b}function It(){te=new Rx(I),te.init(),ut=new p1(I,te),E=new _x(I,te,t,ut),v=new d1(I,te),E.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),H=I.createFramebuffer(),N=I.createFramebuffer(),V=I.createFramebuffer(),F=new Ix(I),W=new $_,Z=new f1(I,te,v,W,E,ut,F),st=new Ex(P),ot=new N0(I),xt=new gx(I,ot),J=new Cx(I,ot,F,xt),$=new Nx(I,J,ot,xt,F),D=new Lx(I,E,Z),Ct=new vx(W),ct=new j_(P,st,te,E,xt,Ct),Rt=new _1(P,W),dt=new t1,lt=new o1(te),Vt=new mx(P,st,v,$,p,c),Dt=new u1(P,$,E),et=new v1(I,F,E,v),ht=new xx(I,te,F),j=new Px(I,te,F),F.programs=ct.programs,P.capabilities=E,P.extensions=te,P.properties=W,P.renderLists=dt,P.shadowMap=Dt,P.state=v,P.info=F}x!==un&&(A=new Ux(x,e.width,e.height,a,i,r));let wt=new Dh(P,I);this.xr=wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(ee,K,!1))},this.getSize=function(b){return b.set(ee,K)},this.setSize=function(b,L,X=!0){if(wt.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,K=L,e.width=Math.floor(b*B),e.height=Math.floor(L*B),X===!0&&(e.style.width=b+"px",e.style.height=L+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(ee*B,K*B).floor()},this.setDrawingBufferSize=function(b,L,X){ee=b,K=L,B=X,e.width=Math.floor(b*X),e.height=Math.floor(L*X),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(x===un){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,L,X,z){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,L,X,z),v.viewport(tt.copy(rt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,L,X,z){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,L,X,z),v.scissor(Pt.copy(Nt).multiplyScalar(B).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){v.setScissorTest(oe=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,X=!0){let z=0;if(b){let k=!1;if(it!==null){let mt=it.texture.format;k=g.has(mt)}if(k){let mt=it.texture.type,bt=m.has(mt),pt=Vt.getClearColor(),Mt=Vt.getClearAlpha(),Tt=pt.r,Yt=pt.g,$t=pt.b;bt?(M[0]=Tt,M[1]=Yt,M[2]=$t,M[3]=Mt,I.clearBufferuiv(I.COLOR,0,M)):(R[0]=Tt,R[1]=Yt,R[2]=$t,R[3]=Mt,I.clearBufferiv(I.COLOR,0,R))}else z|=I.COLOR_BUFFER_BIT}L&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Vt.dispose(),dt.dispose(),lt.dispose(),W.dispose(),st.dispose(),$.dispose(),xt.dispose(),et.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Lu),wt.removeEventListener("sessionend",Nu),ns.stop()};function _e(b){b.preventDefault(),Or("WebGLRenderer: Context Lost."),U=!0}function ae(){Or("WebGLRenderer: Context Restored."),U=!1;let b=F.autoReset,L=Dt.enabled,X=Dt.autoUpdate,z=Dt.needsUpdate,k=Dt.type;It(),F.autoReset=b,Dt.enabled=L,Dt.autoUpdate=X,Dt.needsUpdate=z,Dt.type=k}function In(b){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wn(b){let L=b.target;L.removeEventListener("dispose",Wn),Mp(L)}function Mp(b){Sp(b),W.remove(b)}function Sp(b){let L=W.get(b).programs;L!==void 0&&(L.forEach(function(X){ct.releaseProgram(X)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,X,z,k,mt){L===null&&(L=Se);let bt=k.isMesh&&k.matrixWorld.determinantAffine()<0,pt=Ap(b,L,X,z,k);v.setMaterial(z,bt);let Mt=X.index,Tt=1;if(z.wireframe===!0){if(Mt=J.getWireframeAttribute(X),Mt===void 0)return;Tt=2}let Yt=X.drawRange,$t=X.attributes.position,St=Yt.start*Tt,ce=(Yt.start+Yt.count)*Tt;mt!==null&&(St=Math.max(St,mt.start*Tt),ce=Math.min(ce,(mt.start+mt.count)*Tt)),Mt!==null?(St=Math.max(St,0),ce=Math.min(ce,Mt.count)):$t!=null&&(St=Math.max(St,0),ce=Math.min(ce,$t.count));let Fe=ce-St;if(Fe<0||Fe===1/0)return;xt.setup(k,z,pt,X,Mt);let be,me=ht;if(Mt!==null&&(be=ot.get(Mt),me=j,me.setIndex(be)),k.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*kt()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(k.isLine){let Ze=z.linewidth;Ze===void 0&&(Ze=1),v.setLineWidth(Ze*kt()),k.isLineSegments?me.setMode(I.LINES):k.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else k.isPoints?me.setMode(I.POINTS):k.isSprite&&me.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(te.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ze=k._multiDrawStarts,yt=k._multiDrawCounts,tn=k._multiDrawCount,ie=Mt?ot.get(Mt).bytesPerElement:1,Tn=W.get(z).currentProgram.getUniforms();for(let Xn=0;Xn<tn;Xn++)Tn.setValue(I,"_gl_DrawID",Xn),me.render(Ze[Xn]/ie,yt[Xn])}else if(k.isInstancedMesh)me.renderInstances(St,Fe,k.count);else if(X.isInstancedBufferGeometry){let Ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,yt=Math.min(X.instanceCount,Ze);me.renderInstances(St,Fe,yt)}else me.render(St,Fe)};function Iu(b,L,X,z){O!==null&&b.isNodeMaterial&&O.setObject(z,b),Xt===!0&&Ct.setState(b,X,!1),b.transparent===!0&&b.side===De&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,Io(b,L,z),b.side=ei,b.needsUpdate=!0,Io(b,L,z),b.side=De):Io(b,L,z)}this.compile=function(b,L,X=null){X===null&&(X=b),O!==null&&O.renderStart(b,L,X),T=lt.get(X),T.init(L),_.push(T),X.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),b!==X&&b.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ne=this.localClippingEnabled,Xt=Ct.init(this.clippingPlanes,ne),Xt===!0&&Ct.setGlobalState(this.clippingPlanes,L),O!==null&&Dt.render(T.state.shadowsArray,X,L);let z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let mt=k.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let pt=mt[bt];Iu(pt,X,L,k),z.add(pt)}else Iu(mt,X,L,k),z.add(mt)}),T=_.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(b,L,X=null){let z=this.compile(b,L,X);return new Promise(k=>{function mt(){if(z.forEach(function(bt){let Mt=W.get(bt).currentProgram;(Mt===void 0||Mt.isReady())&&z.delete(bt)}),z.size===0){k(b);return}setTimeout(mt,10)}te.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let sl=null;function wp(b){sl&&sl(b)}function Lu(){ns.stop()}function Nu(){ns.start()}let ns=new zf;ns.setAnimationLoop(wp),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(b){sl=b,wt.setAnimationLoop(b),b===null?ns.stop():ns.start()},wt.addEventListener("sessionstart",Lu),wt.addEventListener("sessionend",Nu),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(b,L);let X=wt.enabled===!0&&wt.isPresenting===!0,z=A!==null&&(it===null||X)&&A.begin(P,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(L),L=wt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,L,it),T=lt.get(b,_.length),T.init(L),T.state.textureUnits=Z.getTextureUnits(),_.push(T),Gt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ot.setFromProjectionMatrix(Gt,Fn,L.reversedDepth),ne=this.localClippingEnabled,Xt=Ct.init(this.clippingPlanes,ne),S=dt.get(b,w.length),S.init(),w.push(S),wt.enabled===!0&&wt.isPresenting===!0){let bt=P.xr.getDepthSensingMesh();bt!==null&&rl(bt,L,-1/0,P.sortObjects)}rl(b,L,0,P.sortObjects),S.finish(),O!==null&&O.updateLights(T.state.lightsArray),P.sortObjects===!0&&S.sort(nt,vt),zt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,zt&&Vt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Ct.beginShadows();let k=T.state.shadowsArray;if(Dt.render(k,b,L),Xt===!0&&Ct.endShadows(),(z&&A.hasRenderPass())===!1){let bt=S.opaque,pt=S.transmissive;if(T.setupLights(),L.isArrayCamera){let Mt=L.cameras;if(pt.length>0)for(let Tt=0,Yt=Mt.length;Tt<Yt;Tt++){let $t=Mt[Tt];Uu(bt,pt,b,$t)}zt&&Vt.render(b);for(let Tt=0,Yt=Mt.length;Tt<Yt;Tt++){let $t=Mt[Tt];Du(S,b,$t,$t.viewport)}}else pt.length>0&&Uu(bt,pt,b,L),zt&&Vt.render(b),Du(S,b,L)}it!==null&&q===0&&(Z.updateMultisampleRenderTarget(it),Z.updateRenderTargetMipmap(it)),z&&A.end(P),b.isScene===!0&&b.onAfterRender(P,b,L),xt.resetDefaultState(),Y=-1,Q=null,_.pop(),_.length>0?(T=_[_.length-1],Z.setTextureUnits(T.state.textureUnits),Xt===!0&&Ct.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,O!==null&&O.renderEnd()};function rl(b,L,X,z){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ot)){z&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);let bt=$.update(b),pt=b.material;pt.visible&&S.push(b,bt,pt,X,Ae.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ot))){let bt=$.update(b),pt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ae.copy(bt.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(pt)){let Mt=bt.groups;for(let Tt=0,Yt=Mt.length;Tt<Yt;Tt++){let $t=Mt[Tt],St=pt[$t.materialIndex];St&&St.visible&&S.push(b,bt,St,X,Ae.z,$t,L)}}else pt.visible&&S.push(b,bt,pt,X,Ae.z,null,L)}}let mt=b.children;for(let bt=0,pt=mt.length;bt<pt;bt++)rl(mt[bt],L,X,z)}function Du(b,L,X,z){let{opaque:k,transmissive:mt,transparent:bt}=b;T.setupLightsView(X),Xt===!0&&Ct.setGlobalState(P.clippingPlanes,X),z&&v.viewport(tt.copy(z)),k.length>0&&Po(k,L,X),mt.length>0&&Po(mt,L,X),bt.length>0&&Po(bt,L,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Uu(b,L,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let St=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new je(1,1,{generateMipmaps:!0,type:St?_n:un,minFilter:kn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let mt=T.state.transmissionRenderTarget[z.id],bt=z.viewport||tt;mt.setSize(bt.z*P.transmissionResolutionScale,bt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),Mt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(he),jt=P.getClearAlpha(),jt<1&&P.setClearColor(16777215,.5),P.clear(),zt&&Vt.render(X);let Yt=P.toneMapping;P.toneMapping=gn;let $t=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Xt===!0&&Ct.setGlobalState(P.clippingPlanes,z),Po(b,X,z),Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt),te.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ce=0,Fe=L.length;ce<Fe;ce++){let be=L[ce],{object:me,geometry:Ze,material:yt,group:tn}=be;if(yt.side===De&&me.layers.test(z.layers)){let ie=yt.side;yt.side=on,yt.needsUpdate=!0,Fu(me,X,z,Ze,yt,tn),yt.side=ie,yt.needsUpdate=!0,St=!0}}St===!0&&(Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,Mt,Tt),P.setClearColor(he,jt),$t!==void 0&&(z.viewport=$t),P.toneMapping=Yt}function Po(b,L,X){let z=L.isScene===!0?L.overrideMaterial:null;for(let k=0,mt=b.length;k<mt;k++){let bt=b[k],{object:pt,geometry:Mt,group:Tt}=bt,Yt=bt.material;Yt.allowOverride===!0&&z!==null&&(Yt=z),pt.layers.test(X.layers)&&Fu(pt,L,X,Mt,Yt,Tt)}}function Fu(b,L,X,z,k,mt){O!==null&&k.isNodeMaterial&&O.setObject(b,k),b.onBeforeRender(P,L,X,z,k,mt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(P,L,X,z,b,mt),k.transparent===!0&&k.side===De&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,P.renderBufferDirect(X,L,z,k,b,mt),k.side=ei,k.needsUpdate=!0,P.renderBufferDirect(X,L,z,k,b,mt),k.side=De):P.renderBufferDirect(X,L,z,k,b,mt),b.onAfterRender(P,L,X,z,k,mt)}function Io(b,L,X){L.isScene!==!0&&(L=Se);let z=W.get(b),k=T.state.lights,mt=T.state.shadowsArray,bt=k.state.version,pt=ct.getParameters(b,k.state,mt,L,X,T.state.lightProbeGridArray),Mt=ct.getProgramCacheKey(pt),Tt=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=st.get(b.envMap||z.environment,Yt),z.envMapRotation=z.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",Wn),Tt=new Map,z.programs=Tt);let $t=Tt.get(Mt);if($t!==void 0){if(z.currentProgram===$t&&z.lightsStateVersion===bt)return Bu(b,pt),$t}else pt.uniforms=ct.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,X,pt),b.onBeforeCompile(pt,P),$t=ct.acquireProgram(pt,Mt),Tt.set(Mt,$t),z.uniforms=pt.uniforms;let St=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=Ct.uniform),Bu(b,pt),z.needsLights=Rp(b),z.lightsStateVersion=bt,z.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=$t,z.uniformsList=null,$t}function Ou(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=mr.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Bu(b,L){let X=W.get(b);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function Tp(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let X=0,z=b.length;X<z;X++){let k=b[X];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function Ap(b,L,X,z,k){L.isScene!==!0&&(L=Se),Z.resetTextureUnits();let mt=L.fog,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,pt=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Kt.workingColorSpace,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=st.get(z.envMap||bt,Mt),Yt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Fe=!!X.morphAttributes.color,be=gn;z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=P.toneMapping);let me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ze=me!==void 0?me.length:0,yt=W.get(z),tn=T.state.lights;if(Xt===!0&&(ne===!0||b!==Q)){let ve=b===Q&&z.id===Y;Ct.setState(z,b,ve)}let ie=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==tn.state.version||yt.outputColorSpace!==pt||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==Tt||z.fog===!0&&yt.fog!==mt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ct.numPlanes||yt.numIntersection!==Ct.numIntersection)||yt.vertexAlphas!==Yt||yt.vertexTangents!==$t||yt.morphTargets!==St||yt.morphNormals!==ce||yt.morphColors!==Fe||yt.toneMapping!==be||yt.morphTargetsCount!==Ze||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,yt.__version=z.version);let Tn=yt.currentProgram;ie===!0&&(Tn=Io(z,L,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Tn,yt));let Xn=!1,Ri=!1,Cs=!1,fe=Tn.getUniforms(),Pe=yt.uniforms;if(v.useProgram(Tn.program)&&(Xn=!0,Ri=!0,Cs=!0),z.id!==Y&&(Y=z.id,Ri=!0),yt.needsLights){let ve=Tp(T.state.lightProbeGridArray,k);yt.lightProbeGrid!==ve&&(yt.lightProbeGrid=ve,Ri=!0)}if(Xn||Q!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(I,"projectionMatrix",b.projectionMatrix),fe.setValue(I,"viewMatrix",b.matrixWorldInverse);let Pi=fe.map.cameraPosition;Pi!==void 0&&Pi.setValue(I,qt.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&fe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,Ri=!0,Cs=!0)}if(yt.needsLights&&(tn.state.sunShadowMap.length>0&&fe.setValue(I,"sunShadowMap",tn.state.sunShadowMap,Z),tn.state.directionalShadowMap.length>0&&fe.setValue(I,"directionalShadowMap",tn.state.directionalShadowMap,Z),tn.state.spotShadowMap.length>0&&fe.setValue(I,"spotShadowMap",tn.state.spotShadowMap,Z),tn.state.pointShadowMap.length>0&&fe.setValue(I,"pointShadowMap",tn.state.pointShadowMap,Z)),k.isSkinnedMesh){fe.setOptional(I,k,"bindMatrix"),fe.setOptional(I,k,"bindMatrixInverse");let ve=k.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),fe.setValue(I,"boneTexture",ve.boneTexture,Z))}k.isBatchedMesh&&(fe.setOptional(I,k,"batchingTexture"),fe.setValue(I,"batchingTexture",k._matricesTexture,Z),fe.setOptional(I,k,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",k._indirectTexture,Z),fe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",k._colorsTexture,Z));let Ci=X.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&D.update(k,X,Tn),(Ri||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,fe.setValue(I,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Pe.envMapIntensity.value=L.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=b1()),Ri){if(fe.setValue(I,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&Ep(Pe,Cs),mt&&z.fog===!0&&Rt.refreshFogUniforms(Pe,mt),Rt.refreshMaterialUniforms(Pe,z,B,K,T.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.lightProbeGrid){let ve=yt.lightProbeGrid;Pe.probesSH.value=ve.texture,Pe.probesMin.value.copy(ve.boundingBox.min),Pe.probesMax.value.copy(ve.boundingBox.max),Pe.probesResolution.value.copy(ve.resolution)}mr.upload(I,Ou(yt),Pe,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mr.upload(I,Ou(yt),Pe,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&fe.setValue(I,"center",k.center),fe.setValue(I,"modelViewMatrix",k.modelViewMatrix),fe.setValue(I,"normalMatrix",k.normalMatrix),fe.setValue(I,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let ve=z.uniformsGroups;for(let Pi=0,Ps=ve.length;Pi<Ps;Pi++){let ku=ve[Pi];et.update(ku,Tn),et.bind(ku,Tn)}}return Tn}function Ep(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Rp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,L,X){let z=W.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=L,W.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let X=W.get(b);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,X=0){it=b,G=L,q=X;let z=null,k=!1,mt=!1;if(b){let pt=W.get(b);if(pt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,pt.__webglFramebuffer),tt.copy(b.viewport),Pt.copy(b.scissor),At=b.scissorTest,v.viewport(tt),v.scissor(Pt),v.setScissorTest(At),Y=-1;return}else if(pt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(pt.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Yt=b.depthTexture;if(pt.__boundDepthTexture!==Yt){if(Yt!==null&&W.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(mt=!0);let Tt=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?z=Tt[L][X]:z=Tt[L],k=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?z=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[X]:z=Tt,tt.copy(b.viewport),Pt.copy(b.scissor),At=b.scissorTest}else tt.copy(rt).multiplyScalar(B).floor(),Pt.copy(Nt).multiplyScalar(B).floor(),At=oe;if(X!==0&&(z=H),v.bindFramebuffer(I.FRAMEBUFFER,z)&&v.drawBuffers(b,z),v.viewport(tt),v.scissor(Pt),v.setScissorTest(At),k){let pt=W.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,pt.__webglTexture,X)}else if(mt){let pt=L;for(let Mt=0;Mt<b.textures.length;Mt++){let Tt=W.get(b.textures[Mt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,X,pt)}}else if(b!==null&&X!==0){let pt=W.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,X)}Y=-1};function zu(b){let L=W.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=E.textureFormatReadable(b.format),L.__typeReadable=E.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,X,z,k,mt,bt,pt=0){if(!(b&&b.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt]),Mt){v.bindFramebuffer(I.FRAMEBUFFER,Mt);try{let Tt=b.textures[pt],Yt=Tt.format,$t=Tt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt);let St=zu(Tt);if(St.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-z&&X>=0&&X<=b.height-k&&I.readPixels(L,X,z,k,ut.convert(Yt),ut.convert($t),mt)}finally{let Tt=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,L,X,z,k,mt,bt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt]),Mt)if(L>=0&&L<=b.width-z&&X>=0&&X<=b.height-k){v.bindFramebuffer(I.FRAMEBUFFER,Mt);let Tt=b.textures[pt],Yt=Tt.format,$t=Tt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt);let St=zu(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(L,X,z,k,ut.convert(Yt),ut.convert($t),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Fe=it!==null?W.get(it).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Fe);let be=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await df(I,be,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ce),I.deleteSync(be),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,X=0){let z=Math.pow(2,-X),k=Math.floor(b.image.width*z),mt=Math.floor(b.image.height*z),bt=L!==null?L.x:0,pt=L!==null?L.y:0;Z.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,bt,pt,k,mt),v.unbindTexture()},this.copyTextureToTexture=function(b,L,X=null,z=null,k=0,mt=0){let bt,pt,Mt,Tt,Yt,$t,St,ce,Fe,be=b.isCompressedTexture?b.mipmaps[mt]:b.image;if(X!==null)bt=X.max.x-X.min.x,pt=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Yt=X.min.y,$t=X.isBox3?X.min.z:0;else{let Pe=Math.pow(2,-k);bt=Math.floor(be.width*Pe),pt=Math.floor(be.height*Pe),b.isDataArrayTexture?Mt=be.depth:b.isData3DTexture?Mt=Math.floor(be.depth*Pe):Mt=1,Tt=0,Yt=0,$t=0}z!==null?(St=z.x,ce=z.y,Fe=z.z):(St=0,ce=0,Fe=0);let me=ut.convert(L.format),Ze=ut.convert(L.type),yt;L.isData3DTexture?(Z.setTexture3D(L,0),yt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),yt=I.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),yt=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let tn=v.getParameter(I.UNPACK_ROW_LENGTH),ie=v.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=v.getParameter(I.UNPACK_SKIP_PIXELS),Xn=v.getParameter(I.UNPACK_SKIP_ROWS),Ri=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),v.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),v.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);let Cs=b.isDataArrayTexture||b.isData3DTexture,fe=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let Pe=W.get(b),Ci=W.get(L),ve=W.get(Pe.__renderTarget),Pi=W.get(Ci.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,ve.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ps=0;Ps<Mt;Ps++)Cs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(b).__webglTexture,k,$t+Ps),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(L).__webglTexture,mt,Fe+Ps)),I.blitFramebuffer(Tt,Yt,bt,pt,St,ce,bt,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||W.has(b)){let Pe=W.get(b),Ci=W.get(L);v.bindFramebuffer(I.READ_FRAMEBUFFER,N),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let ve=0;ve<Mt;ve++)Cs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,k,$t+ve):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,k),fe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ci.__webglTexture,mt,Fe+ve):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ci.__webglTexture,mt),k!==0?I.blitFramebuffer(Tt,Yt,bt,pt,St,ce,bt,pt,I.COLOR_BUFFER_BIT,I.NEAREST):fe?I.copyTexSubImage3D(yt,mt,St,ce,Fe+ve,Tt,Yt,bt,pt):I.copyTexSubImage2D(yt,mt,St,ce,Tt,Yt,bt,pt);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(yt,mt,St,ce,Fe,bt,pt,Mt,me,Ze,be.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,mt,St,ce,Fe,bt,pt,Mt,me,be.data):I.texSubImage3D(yt,mt,St,ce,Fe,bt,pt,Mt,me,Ze,be):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,mt,St,ce,bt,pt,me,Ze,be.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,mt,St,ce,be.width,be.height,me,be.data):I.texSubImage2D(I.TEXTURE_2D,mt,St,ce,bt,pt,me,Ze,be);v.pixelStorei(I.UNPACK_ROW_LENGTH,tn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),v.pixelStorei(I.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Ri),mt===0&&L.generateMipmaps&&I.generateMipmap(yt),v.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){G=0,q=0,it=null,v.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};function Uh(s,t){if(t===uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===dr||t===ho){let e=s.getIndex();if(e===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===dr)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function qf(s){let t=new Map,e=new Map,n=s.clone();return Yf(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yf(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Yf(s.children[n],t.children[n],e)}var Rc=class extends Qn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Vh(e)}),this.register(function(e){return new Gh(e)}),this.register(function(e){return new $h(e)}),this.register(function(e){return new Qh(e)}),this.register(function(e){return new tu(e)}),this.register(function(e){return new Xh(e)}),this.register(function(e){return new qh(e)}),this.register(function(e){return new Yh(e)}),this.register(function(e){return new Zh(e)}),this.register(function(e){return new Hh(e)}),this.register(function(e){return new Kh(e)}),this.register(function(e){return new Wh(e)}),this.register(function(e){return new jh(e)}),this.register(function(e){return new Jh(e)}),this.register(function(e){return new zh(e)}),this.register(function(e){return new Cc(e,Jt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Cc(e,Jt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new eu(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(t);o=Si.resolveURL(l,this.path)}else o=Si.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new or(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(d){e(d),r.manager.itemEnd(t)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===$f){try{o[Jt.KHR_BINARY_GLTF]=new nu(t)}catch(f){i&&i(f);return}r=JSON.parse(o[Jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new lu(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let f=this.pluginCallbacks[d](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let f=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(f){case Jt.KHR_MATERIALS_UNLIT:o[f]=new kh;break;case Jt.KHR_DRACO_MESH_COMPRESSION:o[f]=new iu(r,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:o[f]=new su;break;case Jt.KHR_MESH_QUANTIZATION:o[f]=new ru;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function M1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Ue(s,t,e){let n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(t){this.parser=t,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,d=new _t(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],sn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ps(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ti(d),l.distance=f;break;case"spot":l=new fs(d),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},kh=class{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Te}extendParams(t,e,n){let i=[];t.color=new _t(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],sn),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ie))}return Promise.all(i)}},Hh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Vh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ft(r,r)}return Promise.all(i)}},Gh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Wh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Xh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new _t(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Ie)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},qh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Yh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new _t().setRGB(r[0],r[1],r[2],sn),Promise.all(i)}},Zh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},Kh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new _t().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Ie)),Promise.all(i)}},Jh=class{constructor(t){this.parser=t,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},jh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?ln:null}extendMaterialParams(t,e){let n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},$h=class{constructor(t){this.parser=t,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Qh=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},tu=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},Cc=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,d=i.count,f=i.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,f,h,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){let u=new ArrayBuffer(d*f);return o.decodeGltfBuffer(new Uint8Array(u),d,f,h,i.mode,i.filter),u})})}else return null}},eu=class{constructor(t){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(d=>(c[l]=d,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let d=l.pop(),f=d.isGroup?d.children:[d],h=l[0].count,u=[];for(let p of f){let x=new Ht,g=new C,m=new re,M=new C(1,1,1),R=new Jn(p.geometry,p.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),R.setMatrixAt(S,x.compose(g,m,M));let y=null;for(let S in c)if(S==="_COLOR_0"){let T=c[S];R.instanceColor=new xi(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let w=R.geometry;y=new Ee,y.name=w.name;for(let _ in w.attributes)y.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)y.morphAttributes[_]=w.morphAttributes[_];w.index!==null&&y.setIndex(w.index),y.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)y.addGroup(_.start,_.count,_.materialIndex);w.boundingBox!==null&&(y.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(y.boundingSphere=w.boundingSphere.clone()),y.drawRange.start=w.drawRange.start,y.drawRange.count=w.drawRange.count,y.userData=Object.assign({},w.userData),R.geometry=y}let T=c[S];y.setAttribute(S,new xi(T.array,T.itemSize,T.normalized))}pe.prototype.copy.call(R,p),this.parser.assignFinalMaterial(R),u.push(R)}return d.isGroup?(d.clear(),d.add(...u),d):u[0]}))}},$f="glTF",go=12,Zf={JSON:1313821514,BIN:5130562},nu=class{constructor(t){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==$f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-go,r=new DataView(t,go),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Zf.JSON){let l=new Uint8Array(t,go+o,a);this.content=n.decode(l)}else if(c===Zf.BIN){let l=go+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},iu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let d in o){let f=au[d]||d.toLowerCase();a[f]=o[d]}for(let d in t.attributes){let f=au[d]||d.toLowerCase();if(o[d]!==void 0){let h=n.accessors[t.attributes[d]],u=_r[h.componentType];l[f]=u.name,c[f]=h.normalized===!0}}return e.getDependency("bufferView",r).then(function(d){return new Promise(function(f,h){i.decodeDracoFile(d,function(u){for(let p in u.attributes){let x=u.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}f(u)},a,l,sn,h)})})}},su=class{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},ru=class{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}},Pc=class extends $n{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,d=i-e,f=(n-e)/d,h=f*f,u=h*f,p=t*l,x=p-l,g=-2*u+3*h,m=u-h,M=1-g,R=m-h+f;for(let y=0;y!==a;y++){let S=o[x+y+a],T=o[x+y+c]*d,w=o[p+y+a],_=o[p+y]*d;r[y]=M*S+R*T+g*w+m*_}return r}},S1=new re,ou=class extends Pc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return S1.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kf={9728:we,9729:Ne,9984:Da,9985:hr,9986:_s,9987:kn},Jf={33071:En,33648:Ys,10497:zi},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},au={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:ls,STEP:cs},Oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),s.DefaultMaterial}function bs(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ri(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function A1(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,d=t.length;l<d;l++){let f=t[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,d=t.length;l<d;l++){let f=t[l];if(n){let h=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):s.attributes.position;o.push(h)}if(i){let h=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let d=l[0],f=l[1],h=l[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function E1(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R1(s){let t,e=s.extensions&&s.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Bh(e.attributes):t=s.indices+":"+Bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Bh(s.targets[n]);return t}function Bh(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function cu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var P1=new Ht,lu=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new M1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new $r(this.options.manager):this.textureLoader=new eo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return bs(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,d]of o.children.entries())r(d,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Si.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=Fh[i.type],a=_r[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Le(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fh[i.type],l=_r[i.componentType],d=l.BYTES_PER_ELEMENT,f=d*c,h=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(u&&u!==f){let m=Math.floor(h/u),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,R=e.cache.get(M);R||(x=new l(a,m*u,i.count*u/d),R=new tr(x,u/d),e.cache.add(M,R)),g=new er(R,c,h%u/d,p)}else a===null?x=new l(i.count*c):x=new l(a,h,i.count*c),g=new Le(x,c,p);if(i.sparse!==void 0){let m=Fh.SCALAR,M=_r[i.sparse.indices.componentType],R=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new M(o[1],R,i.sparse.count*m),T=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new Le(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,_=S.length;w<_;w++){let A=S[w];if(g.setX(A,T[w*c]),c>=2&&g.setY(A,T[w*c+1]),c>=3&&g.setZ(A,T[w*c+2]),c>=4&&g.setW(A,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return d.magFilter=Kf[h.magFilter]||Ne,d.minFilter=Kf[h.minFilter]||kn,d.wrapS=Jf[h.wrapS]||zi,d.wrapT=Jf[h.wrapT]||zi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==we&&d.minFilter!==Ne,i.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let d=Promise.resolve(c).then(function(f){return new Promise(function(h,u){let p=h;e.isImageBitmapLoader===!0&&(p=function(x){let g=new Xe(x);g.needsUpdate=!0,h(g)}),e.load(Si.resolveURL(f,r.path),p,void 0,u)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),ri(f,o),f.userData.mimeType=o.mimeType||C1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Jt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new rr,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Vi,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return us}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Jt.KHR_MATERIALS_UNLIT]){let f=i[Jt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,e))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],sn),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",f.baseColorTexture,Ie)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=De);let d=r.alphaMode||Oh.OPAQUE;if(d===Oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Oh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Te&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ft(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Te&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Te){let f=r.emissiveFactor;a.emissive=new _t().setRGB(f[0],f[1],f[2],sn)}return r.emissiveTexture!==void 0&&o!==Te&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ie)),Promise.all(l).then(function(){let f=new o(a);return r.name&&(f.name=r.name),ri(f,r),e.associations.set(f,{materials:t}),r.extensions&&bs(i,f,r),f})}createUniqueName(t){let e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return jf(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],d=R1(l),f=i[d];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=jf(new Ee,l,e),l.mode===Rn.TRIANGLE_STRIP?h=h.then(u=>Uh(u,ho)):l.mode===Rn.TRIANGLE_FAN&&(h=h.then(u=>Uh(u,dr))),i[d]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let d=o[c].material===void 0?T1(this.cache):this.getDependency("material",o[c].material);a.push(d)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let u=0,p=d.length;u<p;u++){let x=d[u],g=o[u],m,M=l[u];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0){let R=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");R&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=R&&y?new Hr(x,M):new Me(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Rn.LINES)m=new Gr(x,M);else if(g.mode===Rn.LINE_STRIP)m=new _i(x,M);else if(g.mode===Rn.LINE_LOOP)m=new Wr(x,M);else if(g.mode===Rn.POINTS)m=new Xr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&E1(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ri(m,r),g.extensions&&bs(i,m,g),e.assignFinalMaterial(m),f.push(m)}for(let u=0,p=f.length;u<p;u++)e.associations.set(f[u],{meshes:t,primitives:u});if(f.length===1)return r.extensions&&bs(i,f[0],r),f[0];let h=new mn;r.extensions&&bs(i,h,r),e.associations.set(h,{meshes:t});for(let u=0,p=f.length;u<p;u++)h.add(f[u]);return h})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new We(mh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new zn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ri(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,d=o.length;l<d;l++){let f=o[l];if(f){a.push(f);let h=new Ht;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Vr(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],d=[];for(let f=0,h=i.channels.length;f<h;f++){let u=i.channels[f],p=i.samplers[u.sampler],x=u.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(p),d.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(f){let h=f[0],u=f[1],p=f[2],x=f[3],g=f[4],m=[];for(let R=0,y=h.length;R<y;R++){let S=h[R],T=u[R],w=p[R],_=x[R],A=g[R];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let P=n._createAnimationTracks(S,T,w,_,A);if(P)for(let U=0;U<P.length;U++)m.push(P[U])}let M=new jr(r,void 0,m);return ri(M,i),M})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,d=a.length;l<d;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let d=l[0],f=l[1],h=l[2];h!==null&&d.traverse(function(u){u.isSkinnedMesh&&u.bind(h,P1)});for(let u=0,p=f.length;u<p;u++)d.add(f[u]);if(d.userData.pivot!==void 0&&f.length>0){let u=d.userData.pivot,p=f[0];d.pivot=new C().fromArray(u),d.position.x-=u[0],d.position.y-=u[1],d.position.z-=u[2],p.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let d;if(r.isBone===!0?d=new nr:l.length>1?d=new mn:l.length===1?d=l[0]:d=new pe,d!==l[0])for(let f=0,h=l.length;f<h;f++)d.add(l[f]);if(r.name&&(d.userData.name=r.name,d.name=o),ri(d,r),r.extensions&&bs(n,d,r),r.matrix!==void 0){let f=new Ht;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(d);i.associations.set(d,{...f})}return i.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new mn;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&bs(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let d=0,f=c.length;d<f;d++){let h=c[d];h.parent!==null?r.add(qf(h)):r.add(h)}let l=d=>{let f=new Map;for(let[h,u]of i.associations)(h instanceof cn||h instanceof Xe)&&f.set(h,u);return d.traverse(h=>{let u=i.associations.get(h);u!=null&&f.set(h,u)}),f};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Ji[r.path]===Ji.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(a);let d;switch(Ji[r.path]){case Ji.weights:d=yi;break;case Ji.rotation:d=bi;break;case Ji.translation:case Ji.scale:d=Xi;break;default:n.itemSize===1?d=yi:d=Xi;break}let f=i.interpolation!==void 0?w1[i.interpolation]:ls,h=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){let x=new d(c[u]+"."+Ji[r.path],e.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=cu(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof bi?ou:Pc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function I1(s,t,e){let n=t.attributes,i=new Ce;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let d=cu(_r[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,d=r.length;l<d;l++){let f=r[l];if(f.POSITION!==void 0){let h=e.json.accessors[f.POSITION],u=h.min,p=h.max;if(u!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),h.normalized){let x=cu(_r[h.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new an;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function jf(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=au[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Kt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),ri(s,t),I1(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?A1(s,t.targets,e):s})}var Qf={segments:[{a:90,b:91.03324549546667,pose:"gun-low",position:[-1.15,0,2.35],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},path:[[-1.15,0,2.35],[-1.22,0,.75]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:91.03324549546667,b:91.63324549546667,pose:"gun-low",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},path:[[-1.22,0,.75],[-1.22,.23,.08]],doorApproach:!0},{a:91.63324549546667,b:92.23324549546666,pose:"gun-low",position:[-1.22,.23,.08],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},doorAction:{side:"outside",opening:!0}},{a:92.23324549546666,b:93.18324549546666,pose:"gun-low",position:[-1.22,.23,.08],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},path:[[-1.22,.23,.08],[-1.22,.42,-.24],[-1.22,.59,-.98]],door:!0,doorClose:!0},{a:93.18324549546666,b:93.98324549546666,pose:"gun-low",position:[-1.22,.59,-.98],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},doorApproach:!0},{a:93.98324549546666,b:94.43324549546666,pose:"inside",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0}},{a:94.43324549546666,b:95.03324549546666,pose:"walk",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},doorAction:{side:"inside",opening:!0}},{a:95.03324549546666,b:96.48324549546666,pose:"walk",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},path:[[-1.22,.59,-.98],[-1.22,.42,-.24],[-1.22,.23,.08],[-1.22,0,.75]],door:!0,doorClose:!0},{a:96.48324549546666,b:99.2408812984588,pose:"walk",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},path:[[-1.22,0,.75],[-2.11,0,.5499999999999999],[-2.83,0,-.009999999999999988],[-4.2700000000000005,0,-.009999999999999988],[-4.27,0,1]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:99.2408812984588,b:100.0908812984588,pose:"uncover-cart",position:[-4.27,0,1],facing:1.5707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0}},{a:100.0908812984588,b:100.8908812984588,pose:"unfold-handle",position:[-4.27,0,1],facing:1.5707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0}},{a:100.8908812984588,b:102.00705513142381,pose:"walk",position:[-4.27,0,1],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},path:[[-4.27,0,1],[-4.2700000000000005,0,-.009999999999999988],[-3.55,0,-.02]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:102.00705513142381,b:102.55705513142381,pose:"cart-start",position:[-3.55,0,-.02],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0}},{a:102.55705513142381,b:103.24001005611724,pose:"push-cart",position:[-3.55,0,-.02],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:0,speed:0},cartPath:[[-3.55,0,1],[-3.55,0,1]],cartTurn:[0,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:0,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:103.24001005611724,b:106.68715561440166,pose:"push-cart",position:[-4.271248916810278,0,.2787510831897214],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:.7853981633974483,operator:0,distance:0,speed:0},cartPath:[[-3.55,0,1],[-1.21,0,3.34]],cartFacing:.7853981633974483,wheelFacing:.7853981633974483,cartMode:"rolling",wheelStart:0,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:106.68715561440166,b:107.3701105390951,pose:"push-cart",position:[-1.9312489168102784,0,2.6187510831897214],facing:0,operator:0,parkedCart:{position:[-1.21,0,3.34],facing:.7853981633974483,operator:0,distance:3.3092597359530425,speed:0},cartPath:[[-1.21,0,3.34],[-1.21,0,3.34]],cartTurn:[.7853981633974483,1.5707963267948966],cartArc:!1,cartMode:"turning",wheelStart:3.3092597359530425,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:107.3701105390951,b:107.69011053909509,pose:"push-cart",position:[-2.23,0,3.34],facing:0,operator:0,parkedCart:{position:[-1.21,0,3.34],facing:1.5707963267948966,operator:0,distance:3.3092597359530425,speed:0},cartPath:[[-1.21,0,3.34],[-.9499999999999997,0,3.34]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:3.3092597359530425,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:107.69011053909509,b:108.01011053909508,pose:"push-cart",position:[-1.9699999999999998,0,3.34],facing:0,operator:0,parkedCart:{position:[-.9499999999999997,0,3.34],facing:1.5707963267948966,operator:0,distance:3.5692597359530427,speed:0},cartPath:[[-.9499999999999997,0,3.34],[-.6899999999999995,0,3.34]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:3.5692597359530427,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:108.01011053909508,b:109.37602038848195,pose:"push-cart",position:[-1.7099999999999995,0,3.34],facing:0,operator:0,parkedCart:{position:[-.6899999999999995,0,3.34],facing:1.5707963267948966,operator:0,distance:3.829259735953043,speed:0},cartPath:[[-.6899999999999995,0,3.34],[-.4299999999999997,0,3.6]],cartTurn:[1.5707963267948966,0],cartArc:!0,cartMode:"turning",wheelStart:3.829259735953043,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:109.37602038848195,b:110.74193023786881,pose:"push-cart",position:[-.4299999999999995,0,2.5799999999999996],facing:0,operator:0,parkedCart:{position:[-.4299999999999997,0,3.6],facing:0,operator:0,distance:4.237666780919716,speed:0},cartPath:[[-.4299999999999997,0,3.6],[-.16999999999999993,0,3.8600000000000003]],cartTurn:[0,1.5707963267948966],cartArc:!0,cartMode:"turning",wheelStart:4.237666780919716,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:110.74193023786881,b:111.06193023786881,pose:"push-cart",position:[-1.1899999999999997,0,3.8600000000000003],facing:0,operator:0,parkedCart:{position:[-.16999999999999993,0,3.8600000000000003],facing:1.5707963267948966,operator:0,distance:4.64607382588639,speed:0},cartPath:[[-.16999999999999993,0,3.8600000000000003],[.0900000000000003,0,3.8600000000000003]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:4.64607382588639,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:111.06193023786881,b:113.49943023786881,pose:"push-cart",position:[-.9299999999999997,0,3.8600000000000003],facing:0,operator:0,parkedCart:{position:[.0900000000000003,0,3.8600000000000003],facing:1.5707963267948966,operator:0,distance:4.90607382588639,speed:0},cartPath:[[.0900000000000003,0,3.8600000000000003],[2.4300000000000006,0,3.8600000000000003]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:4.90607382588639,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:113.49943023786881,b:114.86534008725567,pose:"push-cart",position:[1.4100000000000006,0,3.8600000000000003],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,3.8600000000000003],facing:1.5707963267948966,operator:0,distance:7.2460738258863895,speed:0},cartPath:[[2.4300000000000006,0,3.8600000000000003],[2.170000000000001,0,3.6]],cartTurn:[1.5707963267948966,0],cartArc:!0,cartMode:"turning",wheelStart:7.2460738258863895,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:114.86534008725567,b:115.54829501194911,pose:"push-cart",position:[2.170000000000001,0,2.5800000000000005],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,3.6],facing:0,operator:0,distance:7.654480870853063,speed:0},cartPath:[[2.170000000000001,0,3.6],[2.170000000000001,0,3.6]],cartTurn:[0,-.7853981633974485],cartArc:!1,cartMode:"turning",wheelStart:7.654480870853063,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:115.54829501194911,b:116.23124993664254,pose:"push-cart",position:[2.8912489168102793,0,2.8787510831897216],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,3.6],facing:5.497787143782138,operator:0,distance:7.654480870853063,speed:0},cartPath:[[2.170000000000001,0,3.6],[2.170000000000001,0,3.6]],cartTurn:[5.497787143782138,4.71238898038469],cartArc:!1,cartMode:"turning",wheelStart:7.654480870853063,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:116.23124993664254,b:117.04374993664254,pose:"push-cart",position:[3.190000000000001,0,3.6],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,3.6],facing:4.71238898038469,operator:0,distance:7.654480870853063,speed:0},cartPath:[[2.170000000000001,0,3.6],[2.95,0,3.6]],cartFacing:4.71238898038469,wheelFacing:1.5707963267948966,cartMode:"reversing",wheelStart:7.654480870853063,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:117.04374993664254,b:118.44374993664255,pose:"clear-jam",position:[3.97,0,3.6],facing:4.71238898038469,operator:0,parkedCart:{position:[2.95,0,3.6],facing:4.71238898038469,operator:0,distance:8.434480870853061,speed:0},cartPath:[[2.95,0,3.6],[2.95,0,3.6]],cartFacing:4.71238898038469,cartMode:"jammed",wheelStart:8.434480870853061,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:118.44374993664255,b:119.12670486133598,pose:"push-cart",position:[3.97,0,3.6],facing:0,operator:0,parkedCart:{position:[2.95,0,3.6],facing:4.71238898038469,operator:0,distance:8.434480870853061,speed:0},cartPath:[[2.95,0,3.6],[2.95,0,3.6]],cartTurn:[4.71238898038469,5.497787143782138],cartArc:!1,cartMode:"turning",wheelStart:8.434480870853061,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:119.12670486133598,b:119.50972103447869,pose:"push-cart",position:[3.6712489168102787,0,2.8787510831897216],facing:0,operator:0,parkedCart:{position:[2.95,0,3.6],facing:5.497787143782138,operator:0,distance:8.434480870853061,speed:0},cartPath:[[2.95,0,3.6],[3.21,0,3.34]],cartFacing:5.497787143782138,wheelFacing:2.356194490192345,cartMode:"reversing",wheelStart:8.434480870853061,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:119.50972103447869,b:120.87563088386555,pose:"push-cart",position:[3.9312489168102784,0,2.6187510831897214],facing:0,operator:0,parkedCart:{position:[3.21,0,3.34],facing:5.497787143782138,operator:0,distance:8.802176397070067,speed:0},cartPath:[[3.21,0,3.34],[2.95,0,3.34]],cartTurn:[5.497787143782138,3.9269908169872414],cartArc:!0,cartMode:"turning",wheelStart:8.802176397070067,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:120.87563088386555,b:121.64166323015098,pose:"push-cart",position:[3.6712489168102787,0,4.061248916810278],facing:0,operator:0,parkedCart:{position:[2.95,0,3.34],facing:3.9269908169872414,operator:0,distance:9.09096378805036,speed:0},cartPath:[[2.95,0,3.34],[2.4300000000000006,0,2.8200000000000003]],cartFacing:3.9269908169872414,wheelFacing:-2.356194490192345,cartMode:"rolling",wheelStart:9.09096378805036,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:121.64166323015098,b:122.32461815484442,pose:"push-cart",position:[3.151248916810279,0,3.5412489168102788],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,2.8200000000000003],facing:3.9269908169872414,operator:0,distance:9.826354840484369,speed:0},cartPath:[[2.4300000000000006,0,2.8200000000000003],[2.4300000000000006,0,2.8200000000000003]],cartTurn:[3.9269908169872414,4.71238898038469],cartArc:!1,cartMode:"turning",wheelStart:9.826354840484369,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:122.32461815484442,b:122.86628482151109,pose:"push-cart",position:[3.4500000000000006,0,2.8200000000000003],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,2.8200000000000003],facing:4.71238898038469,operator:0,distance:9.826354840484369,speed:0},cartPath:[[2.4300000000000006,0,2.8200000000000003],[1.9100000000000001,0,2.8200000000000003]],cartFacing:4.71238898038469,wheelFacing:-1.5707963267948966,cartMode:"rolling",wheelStart:9.826354840484369,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:122.86628482151109,b:124.23219467089795,pose:"push-cart",position:[2.93,0,2.8200000000000003],facing:0,operator:0,parkedCart:{position:[1.9100000000000001,0,2.8200000000000003],facing:4.71238898038469,operator:0,distance:10.34635484048437,speed:0},cartPath:[[1.9100000000000001,0,2.8200000000000003],[1.6500000000000004,0,3.08]],cartTurn:[4.71238898038469,6.283185307179586],cartArc:!0,cartMode:"turning",wheelStart:10.34635484048437,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:124.23219467089795,b:125.04469467089795,pose:"push-cart",position:[1.6500000000000006,0,2.06],facing:0,operator:0,parkedCart:{position:[1.6500000000000004,0,3.08],facing:0,operator:0,distance:10.754761885451043,speed:0},cartPath:[[1.6500000000000004,0,3.08],[1.6500000000000004,0,2.3]],cartFacing:0,wheelFacing:3.141592653589793,cartMode:"reversing",wheelStart:10.754761885451043,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:125.04469467089795,b:126.41060452028482,pose:"push-cart",position:[1.6500000000000004,0,1.2799999999999998],facing:0,operator:0,parkedCart:{position:[1.6500000000000004,0,2.3],facing:0,operator:0,distance:11.534761885451044,speed:0},cartPath:[[1.6500000000000004,0,2.3],[1.3900000000000006,0,2.04]],cartTurn:[0,1.5707963267948966],cartArc:!0,cartMode:"turning",wheelStart:11.534761885451044,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:126.41060452028482,b:127.76477118695149,pose:"push-cart",position:[.37000000000000055,0,2.04],facing:0,operator:0,parkedCart:{position:[1.3900000000000006,0,2.04],facing:1.5707963267948966,operator:0,distance:11.943168930417716,speed:0},cartPath:[[1.3900000000000006,0,2.04],[.0900000000000003,0,2.04]],cartFacing:1.5707963267948966,wheelFacing:-1.5707963267948966,cartMode:"reversing",wheelStart:11.943168930417716,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:127.76477118695149,b:128.44772611164493,pose:"push-cart",position:[-.9299999999999997,0,2.04],facing:0,operator:0,parkedCart:{position:[.0900000000000003,0,2.04],facing:1.5707963267948966,operator:0,distance:13.243168930417717,speed:0},cartPath:[[.0900000000000003,0,2.04],[.0900000000000003,0,2.04]],cartTurn:[1.5707963267948966,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:13.243168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:128.44772611164493,b:129.13068103633836,pose:"push-cart",position:[-.6312489168102782,0,1.3187510831897216],facing:0,operator:0,parkedCart:{position:[.0900000000000003,0,2.04],facing:.7853981633974483,operator:0,distance:13.243168930417717,speed:0},cartPath:[[.0900000000000003,0,2.04],[.0900000000000003,0,2.04]],cartTurn:[.7853981633974483,1.5707963267948966],cartArc:!1,cartMode:"turning",wheelStart:13.243168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:129.13068103633836,b:131.29734770300502,pose:"push-cart",position:[-.9299999999999997,0,2.04],facing:0,operator:0,parkedCart:{position:[.0900000000000003,0,2.04],facing:1.5707963267948966,operator:0,distance:13.243168930417717,speed:0},cartPath:[[.0900000000000003,0,2.04],[2.170000000000001,0,2.04]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:13.243168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:131.29734770300502,b:131.98030262769845,pose:"push-cart",position:[1.1500000000000008,0,2.04],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,2.04],facing:1.5707963267948966,operator:0,distance:15.323168930417717,speed:0},cartPath:[[2.170000000000001,0,2.04],[2.170000000000001,0,2.04]],cartTurn:[1.5707963267948966,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:15.323168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:131.98030262769845,b:133.12935114712658,pose:"push-cart",position:[1.4487510831897223,0,1.3187510831897216],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,2.04],facing:.7853981633974483,operator:0,distance:15.323168930417717,speed:0},cartPath:[[2.170000000000001,0,2.04],[2.95,0,2.8200000000000003]],cartFacing:.7853981633974483,wheelFacing:.7853981633974483,cartMode:"rolling",wheelStart:15.323168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:133.12935114712658,b:133.81230607182002,pose:"push-cart",position:[2.2287510831897217,0,2.098751083189722],facing:0,operator:0,parkedCart:{position:[2.95,0,2.8200000000000003],facing:.7853981633974483,operator:0,distance:16.42625550906873,speed:0},cartPath:[[2.95,0,2.8200000000000003],[2.95,0,2.8200000000000003]],cartTurn:[.7853981633974483,1.5707963267948966],cartArc:!1,cartMode:"turning",wheelStart:16.42625550906873,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:133.81230607182002,b:135.16647273848668,pose:"push-cart",position:[1.9300000000000002,0,2.8200000000000003],facing:0,operator:0,parkedCart:{position:[2.95,0,2.8200000000000003],facing:1.5707963267948966,operator:0,distance:16.42625550906873,speed:0},cartPath:[[2.95,0,2.8200000000000003],[4.250000000000001,0,2.8200000000000003]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:16.42625550906873,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:135.16647273848668,b:136.53238258787354,pose:"push-cart",position:[3.230000000000001,0,2.8200000000000003],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,2.8200000000000003],facing:1.5707963267948966,operator:0,distance:17.726255509068732,speed:0},cartPath:[[4.250000000000001,0,2.8200000000000003],[4.510000000000001,0,3.08]],cartTurn:[1.5707963267948966,0],cartArc:!0,cartMode:"turning",wheelStart:17.726255509068732,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:136.53238258787354,b:138.96988258787354,pose:"push-cart",position:[4.510000000000001,0,2.06],facing:0,operator:0,parkedCart:{position:[4.510000000000001,0,3.08],facing:0,operator:0,distance:18.134662554035405,speed:0},cartPath:[[4.510000000000001,0,3.08],[4.510000000000001,0,.74]],cartFacing:0,wheelFacing:3.141592653589793,cartMode:"reversing",wheelStart:18.134662554035405,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:138.96988258787354,b:140.3357924372604,pose:"push-cart",position:[4.510000000000001,0,-.2799999999999998],facing:0,operator:0,parkedCart:{position:[4.510000000000001,0,.74],facing:0,operator:0,distance:20.474662554035405,speed:0},cartPath:[[4.510000000000001,0,.74],[4.250000000000001,0,.48]],cartTurn:[0,1.5707963267948966],cartArc:!0,cartMode:"turning",wheelStart:20.474662554035405,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:140.3357924372604,b:141.68995910392707,pose:"push-cart",position:[3.230000000000001,0,.48000000000000004],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,.48],facing:1.5707963267948966,operator:0,distance:20.883069599002077,speed:0},cartPath:[[4.250000000000001,0,.48],[2.95,0,.48]],cartFacing:1.5707963267948966,wheelFacing:-1.5707963267948966,cartMode:"reversing",wheelStart:20.883069599002077,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:141.68995910392707,b:142.3729140286205,pose:"push-cart",position:[1.9300000000000002,0,.4799999999999999],facing:0,operator:0,parkedCart:{position:[2.95,0,.48],facing:1.5707963267948966,operator:0,distance:22.183069599002078,speed:0},cartPath:[[2.95,0,.48],[2.95,0,.48]],cartTurn:[1.5707963267948966,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:22.183069599002078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:142.3729140286205,b:143.52196254804863,pose:"push-cart",position:[2.2287510831897217,0,-.2412489168102786],facing:0,operator:0,parkedCart:{position:[2.95,0,.48],facing:.7853981633974483,operator:0,distance:22.183069599002078,speed:0},cartPath:[[2.95,0,.48],[2.170000000000001,0,-.30000000000000004]],cartFacing:.7853981633974483,wheelFacing:-2.356194490192345,cartMode:"reversing",wheelStart:22.183069599002078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:143.52196254804863,b:144.20491747274207,pose:"push-cart",position:[1.4487510831897223,0,-1.0212489168102787],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,-.30000000000000004],facing:.7853981633974483,operator:0,distance:23.28615617765309,speed:0},cartPath:[[2.170000000000001,0,-.30000000000000004],[2.170000000000001,0,-.30000000000000004]],cartTurn:[.7853981633974483,0],cartArc:!1,cartMode:"turning",wheelStart:23.28615617765309,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:144.20491747274207,b:144.74658413940872,pose:"push-cart",position:[2.170000000000001,0,-1.32],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,-.30000000000000004],facing:0,operator:0,distance:23.28615617765309,speed:0},cartPath:[[2.170000000000001,0,-.30000000000000004],[2.170000000000001,0,.21999999999999997]],cartFacing:0,wheelFacing:0,cartMode:"rolling",wheelStart:23.28615617765309,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:144.74658413940872,b:146.91325080607538,pose:"push-cart",position:[2.170000000000001,0,-.8],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,.21999999999999997],facing:0,operator:0,distance:23.80615617765309,speed:0},cartPath:[[2.170000000000001,0,.21999999999999997],[2.170000000000001,0,-1.8600000000000003]],cartFacing:0,wheelFacing:3.141592653589793,cartMode:"reversing",wheelStart:23.80615617765309,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:146.91325080607538,b:148.27916065546225,pose:"push-cart",position:[2.170000000000001,0,-2.88],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,-1.8600000000000003],facing:0,operator:0,distance:25.886156177653092,speed:0},cartPath:[[2.170000000000001,0,-1.8600000000000003],[2.4300000000000006,0,-1.6]],cartTurn:[0,1.5707963267948966],cartArc:!0,cartMode:"turning",wheelStart:25.886156177653092,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:148.27916065546225,b:149.3624939887956,pose:"push-cart",position:[1.4100000000000006,0,-1.6000000000000003],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,-1.6],facing:1.5707963267948966,operator:0,distance:26.294563222619765,speed:0},cartPath:[[2.4300000000000006,0,-1.6],[3.4700000000000006,0,-1.6]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:26.294563222619765,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:149.3624939887956,b:150.04544891348903,pose:"push-cart",position:[2.4500000000000006,0,-1.6],facing:0,operator:0,parkedCart:{position:[3.4700000000000006,0,-1.6],facing:1.5707963267948966,operator:0,distance:27.334563222619764,speed:0},cartPath:[[3.4700000000000006,0,-1.6],[3.4700000000000006,0,-1.6]],cartTurn:[1.5707963267948966,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:27.334563222619764,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:150.04544891348903,b:151.19449743291716,pose:"push-cart",position:[2.748751083189722,0,-2.3212489168102786],facing:0,operator:0,parkedCart:{position:[3.4700000000000006,0,-1.6],facing:.7853981633974483,operator:0,distance:27.334563222619764,speed:0},cartPath:[[3.4700000000000006,0,-1.6],[4.250000000000001,0,-.8200000000000001]],cartFacing:.7853981633974483,wheelFacing:.7853981633974483,cartMode:"rolling",wheelStart:27.334563222619764,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:151.19449743291716,b:151.8774523576106,pose:"push-cart",position:[3.5287510831897224,0,-1.5412489168102788],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,-.8200000000000001],facing:.7853981633974483,operator:0,distance:28.43764980127078,speed:0},cartPath:[[4.250000000000001,0,-.8200000000000001],[4.250000000000001,0,-.8200000000000001]],cartTurn:[.7853981633974483,0],cartArc:!1,cartMode:"turning",wheelStart:28.43764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:151.8774523576106,b:152.29949743291718,pose:"push-cart",position:[4.250000000000001,0,-1.84],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,-.8200000000000001],facing:0,operator:0,distance:28.43764980127078,speed:0},cartPath:[[4.250000000000001,0,-.8200000000000001],[4.250000000000001,0,-.8200000000000001]],cartFacing:0,wheelStart:28.43764980127078,cartMode:"collecting"},{a:152.29949743291718,b:154.81562646517526,pose:"push-cart",position:[4.250000000000001,0,-1.84],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,-.8200000000000001],facing:0,operator:0,distance:28.43764980127078,speed:0},cartPath:[[4.250000000000001,0,-.8200000000000001],[4.250000000000001,0,3.08]],cartFacing:0,wheelFacing:0,cartMode:"rolling",wheelStart:28.43764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:154.81562646517526,b:155.4985813898687,pose:"push-cart",position:[4.250000000000001,0,2.06],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,3.08],facing:0,operator:0,distance:32.33764980127078,speed:0},cartPath:[[4.250000000000001,0,3.08],[4.250000000000001,0,3.08]],cartTurn:[0,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:32.33764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:155.4985813898687,b:156.18153631456212,pose:"push-cart",position:[3.5287510831897224,0,2.3587510831897216],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,3.08],facing:.7853981633974483,operator:0,distance:32.33764980127078,speed:0},cartPath:[[4.250000000000001,0,3.08],[4.250000000000001,0,3.08]],cartTurn:[.7853981633974483,1.5707963267948966],cartArc:!1,cartMode:"turning",wheelStart:32.33764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:156.18153631456212,b:157.35572986294923,pose:"push-cart",position:[3.230000000000001,0,3.08],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,3.08],facing:1.5707963267948966,operator:0,distance:32.33764980127078,speed:0},cartPath:[[4.250000000000001,0,3.08],[2.4300000000000006,0,3.08]],cartFacing:1.5707963267948966,wheelFacing:-1.5707963267948966,cartMode:"reversing",wheelStart:32.33764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:157.35572986294923,b:158.03868478764267,pose:"push-cart",position:[1.4100000000000006,0,3.08],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,3.08],facing:1.5707963267948966,operator:0,distance:34.15764980127078,speed:0},cartPath:[[2.4300000000000006,0,3.08],[2.4300000000000006,0,3.08]],cartTurn:[1.5707963267948966,2.356194490192345],cartArc:!1,cartMode:"turning",wheelStart:34.15764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:158.03868478764267,b:159.40459463702953,pose:"push-cart",position:[1.7087510831897221,0,3.8012489168102785],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,3.08],facing:2.356194490192345,operator:0,distance:34.15764980127078,speed:0},cartPath:[[2.4300000000000006,0,3.08],[2.4300000000000006,0,2.8200000000000003]],cartTurn:[2.356194490192345,3.9269908169872414],cartArc:!0,cartMode:"turning",wheelStart:34.15764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:159.40459463702953,b:160.35348631758956,pose:"push-cart",position:[3.151248916810279,0,3.5412489168102788],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,2.8200000000000003],facing:3.9269908169872414,operator:0,distance:34.446437192251075,speed:0},cartPath:[[2.4300000000000006,0,2.8200000000000003],[1.3900000000000006,0,1.78]],cartFacing:3.9269908169872414,wheelFacing:-2.356194490192345,cartMode:"rolling",wheelStart:34.446437192251075,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:160.35348631758956,b:161.036441242283,pose:"push-cart",position:[2.111248916810279,0,2.5012489168102787],facing:0,operator:0,parkedCart:{position:[1.3900000000000006,0,1.78],facing:3.9269908169872414,operator:0,distance:35.9172192971191,speed:0},cartPath:[[1.3900000000000006,0,1.78],[1.3900000000000006,0,1.78]],cartTurn:[3.9269908169872414,4.71238898038469],cartArc:!1,cartMode:"turning",wheelStart:35.9172192971191,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:161.036441242283,b:163.55257027454107,pose:"push-cart",position:[2.4100000000000006,0,1.7800000000000002],facing:0,operator:0,parkedCart:{position:[1.3900000000000006,0,1.78],facing:4.71238898038469,operator:0,distance:35.9172192971191,speed:0},cartPath:[[1.3900000000000006,0,1.78],[-2.51,0,1.78]],cartFacing:4.71238898038469,wheelFacing:-1.5707963267948966,cartMode:"rolling",wheelStart:35.9172192971191,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:163.55257027454107,b:164.2355251992345,pose:"push-cart",position:[-1.4899999999999998,0,1.7800000000000002],facing:0,operator:0,parkedCart:{position:[-2.51,0,1.78],facing:4.71238898038469,operator:0,distance:39.817219297119095,speed:0},cartPath:[[-2.51,0,1.78],[-2.51,0,1.78]],cartTurn:[4.71238898038469,3.9269908169872414],cartArc:!1,cartMode:"turning",wheelStart:39.817219297119095,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:164.2355251992345,b:164.9471939596545,pose:"push-cart",position:[-1.7887510831897213,0,2.5012489168102787],facing:0,operator:0,parkedCart:{position:[-2.51,0,1.78],facing:3.9269908169872414,operator:0,distance:39.817219297119095,speed:0},cartPath:[[-2.51,0,1.78],[-3.29,0,1]],cartFacing:3.9269908169872414,wheelFacing:-2.356194490192345,cartMode:"rolling",wheelStart:39.817219297119095,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:164.9471939596545,b:166.31310380904137,pose:"push-cart",position:[-2.5687510831897216,0,1.7212489168102787],facing:0,operator:0,parkedCart:{position:[-3.29,0,1],facing:3.9269908169872414,operator:0,distance:40.92030587577011,speed:0},cartPath:[[-3.29,0,1],[-3.55,0,1]],cartTurn:[3.9269908169872414,5.497787143782138],cartArc:!0,cartMode:"turning",wheelStart:40.92030587577011,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:166.31310380904137,b:166.9960587337348,pose:"push-cart",position:[-2.8287510831897213,0,.27875108318972164],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:5.497787143782138,operator:0,distance:41.20909326675041,speed:0},cartPath:[[-3.55,0,1],[-3.55,0,1]],cartTurn:[5.497787143782138,6.283185307179586],cartArc:!1,cartMode:"turning",wheelStart:41.20909326675041,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}},{a:166.9960587337348,b:167.7460587337348,pose:"fold-handle",position:[-3.55,0,-.02],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:167.7460587337348,b:169.3960587337348,pose:"bin-remove",position:[-3.55,0,-.02],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},box:"remove"},{a:169.3960587337348,b:171.38387508977667,pose:"carry-box",position:[-3.55,0,-.02],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-3.55,0,-.02],[-2.83,0,-.009999999999999988],[-2.11,0,.5499999999999999],[-1.22,0,.75]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285},box:"carry",extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:171.38387508977667,b:171.98387508977666,pose:"carry-box",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},path:[[-1.22,0,.75],[-1.22,.23,.08]],doorApproach:!0,box:"carry",extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:171.98387508977666,b:172.58387508977665,pose:"carry-box",position:[-1.22,.23,.08],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},doorAction:{side:"outside",opening:!0},box:"carry",extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:172.58387508977665,b:173.53387508977664,pose:"carry-box",position:[-1.22,.23,.08],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,.23,.08],[-1.22,.42,-.24],[-1.22,.59,-.98]],door:!0,doorClose:!0,box:"carry",extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:173.53387508977664,b:174.33387508977665,pose:"carry-box",position:[-1.22,.59,-.98],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},doorApproach:!0,box:"carry",extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:174.33387508977665,b:175.08387508977665,pose:"store-box",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},box:"store"},{a:175.08387508977665,b:175.68387508977665,pose:"walk",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},doorAction:{side:"inside",opening:!0}},{a:175.68387508977665,b:177.13387508977664,pose:"walk",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,.59,-.98],[-1.22,.42,-.24],[-1.22,.23,.08],[-1.22,0,.75]],door:!0,doorClose:!0},{a:177.13387508977664,b:179.89151089276876,pose:"walk",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,0,.75],[-2.11,0,.5499999999999999],[-2.83,0,-.009999999999999988],[-4.2700000000000005,0,-.009999999999999988],[-4.27,0,1]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:179.89151089276876,b:181.34151089276875,pose:"cover-cart",position:[-4.27,0,1],facing:1.5707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:181.34151089276875,b:184.09914669576088,pose:"walk",position:[-4.27,0,1],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-4.27,0,1],[-4.2700000000000005,0,-.009999999999999988],[-2.83,0,-.009999999999999988],[-2.11,0,.5499999999999999],[-1.22,0,.75]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:184.09914669576088,b:184.69914669576087,pose:"walk",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},path:[[-1.22,0,.75],[-1.22,.23,.08]],doorApproach:!0},{a:184.69914669576087,b:185.29914669576087,pose:"walk",position:[-1.22,.23,.08],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},doorAction:{side:"outside",opening:!0}},{a:185.29914669576087,b:186.24914669576086,pose:"walk",position:[-1.22,.23,.08],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,.23,.08],[-1.22,.42,-.24],[-1.22,.59,-.98]],door:!0,doorClose:!0},{a:186.24914669576086,b:187.04914669576087,pose:"walk",position:[-1.22,.59,-.98],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},doorApproach:!0},{a:187.04914669576087,b:187.69914669576087,pose:"inside",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:187.69914669576087,b:188.29914669576087,pose:"tools",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},doorAction:{side:"inside",opening:!0}},{a:188.29914669576087,b:189.74914669576086,pose:"tools",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,.59,-.98],[-1.22,.42,-.24],[-1.22,.23,.08],[-1.22,0,.75]],door:!0,doorClose:!0},{a:189.74914669576086,b:191.36606327977364,pose:"tools",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,0,.75],[-.05,0,2.65]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:191.36606327977364,b:192.21606327977364,pose:"set-bucket",position:[-.05,0,2.65],facing:1.3207963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:192.21606327977364,b:194.86606327977364,pose:"shovel",position:[-.05,0,2.65],facing:1.3207963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},repair:"B"},{a:194.86606327977364,b:195.81606327977363,pose:"lift-bucket",position:[-.05,0,2.65],facing:1.3207963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:195.81606327977363,b:197.64926772045095,pose:"tools",position:[-.05,0,2.65],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-.05,0,2.65],[2.35,0,1.85]],nav:{extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:197.64926772045095,b:198.49926772045094,pose:"set-bucket",position:[2.35,0,1.85],facing:1.7707963267948965,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:198.49926772045094,b:201.14926772045095,pose:"shovel",position:[2.35,0,1.85],facing:1.7707963267948965,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},repair:"A"},{a:201.14926772045095,b:202.09926772045094,pose:"lift-bucket",position:[2.35,0,1.85],facing:1.7707963267948965,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:202.09926772045094,b:203.51911152747508,pose:"tools",position:[2.35,0,1.85],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[2.35,0,1.85],[2.4592879108534946,0,1.1],[2.4,0,-.1]],nav:{extra:[{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:203.51911152747508,b:204.36911152747507,pose:"set-bucket",position:[2.4,0,-.1],facing:2.0707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:204.36911152747507,b:207.01911152747508,pose:"shovel",position:[2.4,0,-.1],facing:2.0707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},repair:"C"},{a:207.01911152747508,b:207.96911152747506,pose:"lift-bucket",position:[2.4,0,-.1],facing:2.0707963267948966,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:207.96911152747506,b:211.8434359084344,pose:"tools",position:[2.4,0,-.1],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[2.4,0,-.1],[2.4592879108534946,0,1.1],[2.430416337766509,0,1.2451471995799994],[2.348197053786585,0,1.3681970537865846],[2.2251471995799994,0,1.4504163377665091],[2.08,0,1.4792879108534946],[-.21999999999999997,0,1.4792879108534946],[-.3651471995799994,0,1.4504163377665091],[-1.22,0,.75]],nav:{extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285}},{a:211.8434359084344,b:212.5934359084344,pose:"power-off",position:[-1.22,0,.75],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}},{a:212.5934359084344,b:212.9434359084344,pose:"tools",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,0,.75],[-1.22,0,.75]],nav:{extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],radius:.285},extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:212.9434359084344,b:213.5434359084344,pose:"tools",position:[-1.22,0,.75],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},path:[[-1.22,0,.75],[-1.22,.23,.08]],doorApproach:!0,extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:213.5434359084344,b:214.14343590843438,pose:"tools",position:[-1.22,.23,.08],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},doorAction:{side:"outside",opening:!0},extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:214.14343590843438,b:215.09343590843437,pose:"tools",position:[-1.22,.23,.08],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},path:[[-1.22,.23,.08],[-1.22,.42,-.24],[-1.22,.59,-.98]],door:!0,doorClose:!0,extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:215.09343590843437,b:215.89343590843438,pose:"tools",position:[-1.22,.59,-.98],facing:3.141592653589793,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0},nav:{radius:.285,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48},{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}],ignore:["trailer","steps"]},doorApproach:!0,extra:[{id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96}]},{a:215.89343590843438,b:220.89343590843438,pose:"inside",position:[-1.22,.59,-.98],facing:0,operator:0,parkedCart:{position:[-3.55,0,1],facing:0,operator:0,distance:41.20909326675041,speed:0}}],jobs:[{id:"body-2",type:"body",zombie:2,position:[-.021310661691481603,-.045121489292107075,3.433565094897757],contactPosition:[-.284607260966642,.1754850932741267,3.575142929825626],rootPosition:[0,0,3.4],facing:-1.01914134426635,feed:{a:107.6501105390951,b:108.2301105390951},consumed:108.2301105390951,cartSegment:{a:107.3701105390951,b:107.69011053909509,pose:"push-cart",position:[-2.23,0,3.34],facing:0,operator:0,parkedCart:{position:[-1.21,0,3.34],facing:1.5707963267948966,operator:0,distance:3.3092597359530425,speed:0},cartPath:[[-1.21,0,3.34],[-.9499999999999997,0,3.34]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:3.3092597359530425,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-5",type:"body",zombie:5,position:[.6362432712393663,-.04512148929210699,3.7518217392586237],contactPosition:[.65,.1754850932741267,4.034180099441661],rootPosition:[.65,0,3.7],facing:0,feed:{a:110.91693023786881,b:111.49693023786881},consumed:111.49693023786881,cartSegment:{a:110.74193023786881,b:111.06193023786881,pose:"push-cart",position:[-1.1899999999999997,0,3.8600000000000003],facing:0,operator:0,parkedCart:{position:[-.16999999999999993,0,3.8600000000000003],facing:1.5707963267948966,operator:0,distance:4.64607382588639,speed:0},cartPath:[[-.16999999999999993,0,3.8600000000000003],[.0900000000000003,0,3.8600000000000003]],cartFacing:1.5707963267948966,wheelFacing:1.5707963267948966,cartMode:"rolling",wheelStart:4.64607382588639,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-8",type:"body",zombie:8,position:[1.269302922984978,-.045121489292107075,3.359770935336949],contactPosition:[1.5386577189978472,.1754850932741267,3.518383669415411],rootPosition:[1.25,0,3.35],facing:1.0427218783685368,feed:{a:115.93329501194911,b:116.51329501194911},consumed:116.51329501194911,cartSegment:{a:115.54829501194911,b:116.23124993664254,pose:"push-cart",position:[2.8912489168102793,0,2.8787510831897216],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,3.6],facing:5.497787143782138,operator:0,distance:7.654480870853063,speed:0},cartPath:[[2.170000000000001,0,3.6],[2.170000000000001,0,3.6]],cartTurn:[5.497787143782138,4.71238898038469],cartArc:!1,cartMode:"turning",wheelStart:7.654480870853063,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-7",type:"body",zombie:7,position:[2.7215173232948042,-.045121489292107075,3.240427990098158],contactPosition:[2.7306562230173417,.1754850932741267,3.52690637720396],rootPosition:[2.8,0,3.2],facing:-.20902294280626466,feed:{a:116.82624993664254,b:117.40624993664254},consumed:117.40624993664254,cartSegment:{a:116.23124993664254,b:117.04374993664254,pose:"push-cart",position:[3.190000000000001,0,3.6],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,3.6],facing:4.71238898038469,operator:0,distance:7.654480870853063,speed:0},cartPath:[[2.170000000000001,0,3.6],[2.95,0,3.6]],cartFacing:4.71238898038469,wheelFacing:1.5707963267948966,cartMode:"reversing",wheelStart:7.654480870853063,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-4",type:"body",zombie:4,position:[2.336534272480059,-.04512148929210685,2.203775468385586],contactPosition:[2.0906381462630814,.1754850932741267,2.4107315061612464],rootPosition:[2.35,0,2.2],facing:-.8884797719201483,feed:{a:121.43563088386556,b:122.01563088386555},consumed:122.01563088386555,cartSegment:{a:120.87563088386555,b:121.64166323015098,pose:"push-cart",position:[3.6712489168102787,0,4.061248916810278],facing:0,operator:0,parkedCart:{position:[2.95,0,3.34],facing:3.9269908169872414,operator:0,distance:9.09096378805036,speed:0},cartPath:[[2.95,0,3.34],[2.4300000000000006,0,2.8200000000000003]],cartFacing:3.9269908169872414,wheelFacing:-2.356194490192345,cartMode:"rolling",wheelStart:9.09096378805036,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-1",type:"body",zombie:1,position:[1.6858146428250673,-.04512148929210691,2.706474873478775],contactPosition:[1.438170667689549,.1754850932741267,2.907657746315185],rootPosition:[1.7,0,2.7],facing:-.9002747688143474,feed:{a:122.63961815484441,b:123.21961815484441},consumed:123.21961815484441,cartSegment:{a:122.32461815484442,b:122.86628482151109,pose:"push-cart",position:[3.4500000000000006,0,2.8200000000000003],facing:0,operator:0,parkedCart:{position:[2.4300000000000006,0,2.8200000000000003],facing:4.71238898038469,operator:0,distance:9.826354840484369,speed:0},cartPath:[[2.4300000000000006,0,2.8200000000000003],[1.9100000000000001,0,2.8200000000000003]],cartFacing:4.71238898038469,wheelFacing:-1.5707963267948966,cartMode:"rolling",wheelStart:9.826354840484369,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-0",type:"body",zombie:0,position:[.9665777504984598,-.045121489292107075,2.381795766029512],contactPosition:[.6844670894716162,.1754850932741267,2.410069619951762],rootPosition:[1,0,2.3],facing:-1.2351577764672874,feed:{a:127.97477118695149,b:128.55477118695148},consumed:128.55477118695148,cartSegment:{a:127.76477118695149,b:128.44772611164493,pose:"push-cart",position:[-.9299999999999997,0,2.04],facing:0,operator:0,parkedCart:{position:[.0900000000000003,0,2.04],facing:1.5707963267948966,operator:0,distance:13.243168930417717,speed:0},cartPath:[[.0900000000000003,0,2.04],[.0900000000000003,0,2.04]],cartTurn:[1.5707963267948966,.7853981633974483],cartArc:!1,cartMode:"turning",wheelStart:13.243168930417717,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-6",type:"body",zombie:6,position:[3.503338288024031,-.045121489292106964,.17639784133986292],contactPosition:[3.599449883815839,.1754850932741267,.4488997676316773],rootPosition:[3.45,0,.15000000000000002],facing:.4636476090008065,feed:{a:141.07079243726042,b:141.65079243726044},consumed:141.65079243726044,cartSegment:{a:140.3357924372604,b:141.68995910392707,pose:"push-cart",position:[3.230000000000001,0,.48000000000000004],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,.48],facing:1.5707963267948966,operator:0,distance:20.883069599002077,speed:0},cartPath:[[4.250000000000001,0,.48],[2.95,0,.48]],cartFacing:1.5707963267948966,wheelFacing:-1.5707963267948966,cartMode:"reversing",wheelStart:20.883069599002077,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-3",type:"body",zombie:3,position:[2.4243700588930515,-.04512148929210699,.573798903648923],contactPosition:[2.3005501161841617,.1754850932741267,.8488997676316775],rootPosition:[2.45,0,.5500000000000002],facing:-.4636476090008058,feed:{a:144.65991747274208,b:145.2399174727421},consumed:145.2399174727421,cartSegment:{a:144.20491747274207,b:144.74658413940872,pose:"push-cart",position:[2.170000000000001,0,-1.32],facing:0,operator:0,parkedCart:{position:[2.170000000000001,0,-.30000000000000004],facing:0,operator:0,distance:23.28615617765309,speed:0},cartPath:[[2.170000000000001,0,-.30000000000000004],[2.170000000000001,0,.21999999999999997]],cartFacing:0,wheelFacing:0,cartMode:"rolling",wheelStart:23.28615617765309,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}},{id:"body-9",type:"body",zombie:9,position:[3.708669952222359,-.04512148929210691,-.5722791131723455],contactPosition:[3.993775571794793,.1754850932741267,-.5825874591575146],rootPosition:[3.6604447242964087,0,-.6063968054073994],facing:1.4994888620096063,feed:{a:151.71949743291717,b:152.29949743291718},consumed:152.29949743291718,cartSegment:{a:151.19449743291716,b:151.8774523576106,pose:"push-cart",position:[3.5287510831897224,0,-1.5412489168102788],facing:0,operator:0,parkedCart:{position:[4.250000000000001,0,-.8200000000000001],facing:.7853981633974483,operator:0,distance:28.43764980127078,speed:0},cartPath:[[4.250000000000001,0,-.8200000000000001],[4.250000000000001,0,-.8200000000000001]],cartTurn:[.7853981633974483,0],cartArc:!1,cartMode:"turning",wheelStart:28.43764980127078,nav:{radius:.365,extra:[{id:"hole-A",x:3.15,z:1.55,r:.48},{id:"hole-B",x:.65,z:3,r:.48},{id:"hole-C",x:3.05,z:-.65,r:.48}]}}}],repairs:{B:194.66606327977365,A:200.94926772045096,C:206.8191115274751},unreachable:[],gunStoredAt:93.98324549546666,uncovered:100.0908812984588,undocked:102.55705513142381,handleReady:100.8908812984588,docked:166.9960587337348,binRemoved:169.3960587337348,boxReturnStart:169.3960587337348,boxStored:174.33387508977665,covered:181.34151089276875,repairStart:187.44914669576085,sleepAt:215.89343590843438,duration:220.89343590843438,collectionStart:102.55705513142381,collectionEnd:152.29949743291718};var Ic={minX:-4.98,maxX:4.98,minZ:-4.38,maxZ:4.38},N1=[{id:"trailer",minX:-4.2,maxX:.2,minZ:-2.72,maxZ:-.49},{id:"steps",minX:-1.8,maxX:-.7,minZ:-.49,maxZ:.24},{id:"table",minX:.55,maxX:1.45,minZ:-.07,maxZ:.75},{id:"chair",minX:-.09,maxX:.43,minZ:.06,maxZ:.61},{id:"post-left",x:-.22,z:1.1,r:.075},{id:"post-right",x:2.08,z:1.1,r:.075},{id:"cabinet",minX:3.71,maxX:4.3,minZ:-2.81,maxZ:-2.3},{id:"pole",x:3.9,z:-2.65,r:.12},{id:"fence",minX:.48,maxX:4.62,minZ:-3.38,maxZ:-3.23}],yn=s=>s.filter(t=>t.open!==!1).map(t=>({id:"hole-"+t.id,x:t.x,z:t.z,r:.48})),uu=({extra:s=[],ignore:t=[]}={})=>[...N1,...s].filter(e=>!t.includes(e.id)),hu=(s,t)=>s[0]>=Ic.minX+t&&s[0]<=Ic.maxX-t&&s[2]>=Ic.minZ+t&&s[2]<=Ic.maxZ-t;function Ti(s,{radius:t=.27,...e}={}){return hu(s,t)?uu(e).some(n=>n.r!==void 0?Math.hypot(s[0]-n.x,s[2]-n.z)<n.r+t-1e-6:s[0]>n.minX-t&&s[0]<n.maxX+t&&s[2]>n.minZ-t&&s[2]<n.maxZ+t):!0}function xo(s,t={}){if(!Ti(s,t))return[...s];for(let e=.08;e<=4;e+=.08)for(let n=0;n<32;n++){let i=n*Math.PI/16,r=[s[0]+Math.cos(i)*e,0,s[2]+Math.sin(i)*e];if(!Ti(r,t))return r}throw new Error("No reachable space near "+s)}function ji(s,t,{radius:e=.27,...n}={}){if(!hu(s,e)||!hu(t,e))return!1;for(let i of uu(n))if(i.r!==void 0){let r=t[0]-s[0],o=t[2]-s[2],a=r*r+o*o,c=a?Math.max(0,Math.min(1,((i.x-s[0])*r+(i.z-s[2])*o)/a)):0;if(Math.hypot(s[0]+r*c-i.x,s[2]+o*c-i.z)<i.r+e-1e-5)return!1}else{let r=0,o=1;for(let[a,c,l]of[[0,i.minX-e,i.maxX+e],[2,i.minZ-e,i.maxZ+e]]){let d=t[a]-s[a];if(Math.abs(d)<1e-9){if(s[a]<=c||s[a]>=l){r=2;break}}else{let f=(c-s[a])/d,h=(l-s[a])/d;f>h&&([f,h]=[h,f]),r=Math.max(r,f),o=Math.min(o,h)}}if(r<=o&&r<=1&&o>=0)return!1}return!0}var vr=new Map;function D1(s){let t=JSON.stringify(s);if(vr.has(t))return vr.get(t);let e=s.radius??.27,n=[];for(let a of uu(s))if(a.r!==void 0){let c=s.resolution??16,l=(a.r+e+.012)/Math.cos(Math.PI/c);for(let d=0;d<c;d++){let f=d*Math.PI*2/c;n.push([a.x+Math.cos(f)*l,0,a.z+Math.sin(f)*l])}}else for(let c of[a.minX-e-.025,a.maxX+e+.025])for(let l of[a.minZ-e-.025,a.maxZ+e+.025])n.push([c,0,l]);let i=n.filter(a=>!Ti(a,s)),r=i.map(()=>[]);for(let a=0;a<i.length;a++)for(let c=0;c<a;c++)if(ji(i[a],i[c],s)){let l=Math.hypot(i[a][0]-i[c][0],i[a][2]-i[c][2]);r[a].push([c,l]),r[c].push([a,l])}let o={nodes:i,edges:r};return vr.set(t,o),vr.size>30&&vr.delete(vr.keys().next().value),o}function Vn(s,t,e={}){let n=xo(s,e),i=xo(t,e);if(ji(n,i,e))return[n,i];let r=D1(e),o=[n,i,...r.nodes],a=o.map(()=>[]);for(let h=0;h<r.edges.length;h++)a[h+2]=r.edges[h].map(([u,p])=>[u+2,p]);for(let h=0;h<2;h++)for(let u=2;u<o.length;u++)if(ji(o[h],o[u],e)){let p=Math.hypot(o[h][0]-o[u][0],o[h][2]-o[u][2]);a[h].push([u,p]),a[u].push([h,p])}let c=o.map(()=>1/0),l=o.map(()=>-1),d=new Set;c[0]=0;for(let h=0;h<o.length;h++){let u=-1;for(let p=0;p<o.length;p++)!d.has(p)&&(u<0||c[p]<c[u])&&(u=p);if(u<0||!Number.isFinite(c[u])||u===1)break;d.add(u);for(let[p,x]of a[u])c[u]+x<c[p]&&(c[p]=c[u]+x,l[p]=u)}if(!Number.isFinite(c[1]))throw new Error("No collision-free route from "+n+" to "+i);let f=[];for(let h=1;h>=0&&(f.unshift(o[h]),h!==0);h=l[h]);return f}var qe=s=>s.slice(1).reduce((t,e,n)=>t+Math.hypot(...e.map((i,r)=>i-s[n][r])),0);function $i(s,t){let e=Math.max(0,t);for(let n=0;n<s.length-1;n++){let i=s[n],r=s[n+1],o=Math.hypot(...r.map((a,c)=>a-i[c]));if(e<=o||n===s.length-2){let a=o?Math.max(0,Math.min(1,e/o)):0;return{position:i.map((c,l)=>c+(r[l]-c)*a),facing:Math.atan2(r[0]-i[0],r[2]-i[2])}}e-=o}return{position:[...s[0]],facing:0}}function du(s,t,e,n={}){let i=xo(s,n),r=Math.max(1,Math.ceil(Math.hypot(t,e)/.065));for(let o=0;o<r;o++){let a=[i[0]+t/r,i[1],i[2]];Ti(a,n)||(i=a);let c=[i[0],i[1],i[2]+e/r];Ti(c,n)||(i=c)}return i}function tp(s,t){let e=Math.max(1,Math.hypot(s,t)),n=Math.SQRT1_2/e;return[(s+t)*n,0,(s-t)*n]}var Lc=.26,U1=-3.55,F1=1,vo=-4,pu=33,yo=-20,mu=12,Nc=pu-vo+1,O1=mu-yo+1,ep=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],fu=new Map,gu=class{constructor(){this.a=[]}push(t){let e=this.a,n=e.length;for(e.push(t);n;){let i=n-1>>1;if(e[i][0]<=t[0])break;e[n]=e[i],n=i}e[n]=t}pop(){let t=this.a,e=t[0],n=t.pop();if(t.length){let i=0;for(;i*2+1<t.length;){let r=i*2+1;if(r+1<t.length&&t[r+1][0]<t[r][0]&&r++,t[r][0]>=n[0])break;t[i]=t[r],i=r}t[i]=n}return e}},Ms=(s,t,e,n)=>[s[0]+e*Math.cos(t)+n*Math.sin(t),0,s[2]-e*Math.sin(t)+n*Math.cos(t)],_o=s=>s[0]<-3.75||s[2]<-3.1;function _u(s,t,e){let n=Math.atan2(Math.sin(t.facing-s.facing),Math.cos(t.facing-s.facing)),i=Math.sign(n),r=t.position[0]-s.position[0],o=t.position[2]-s.position[2],a=Math.hypot(r,o)/Math.SQRT2,c=Math.sign(r*Math.sin(s.facing)+o*Math.cos(s.facing)),l=Math.abs(n)*e;return{position:Ms(s.position,s.facing,c*i*a*(1-Math.cos(l)),c*a*Math.sin(l)),facing:s.facing+n*e}}var xu=class{constructor(t,{crossCracks:e=!1}={}){this.holes=e?[]:yn(t),this.options={extra:this.holes},this.validity=new Int8Array(Nc*O1*24),this.edges=new Map}id(t,e,n,i=0){return(((e-yo)*Nc+t-vo)*8+(n+8)%8)*3+i}decode(t){let e=t%3,n=(t-e)/3,i=n%8,r=(n-i)/8,o=r%Nc+vo,a=Math.floor(r/Nc)+yo;return{id:t,x:o,z:a,h:i,mode:e,position:[U1+o*Lc,0,F1+a*Lc],facing:i*Math.PI/4}}fits(t,e,n=0){if(n&&!_o(t)||Ti(t,{radius:.365,...this.options}))return!1;for(let[i,r]of[[-.48,.28],[.35,.28],[-.82,.1]])if(Ti(Ms(t,e,0,i),{radius:r,...this.options}))return!1;return!Ti(yr({position:t,facing:e,operator:n}),{radius:.28,...this.options})}valid(t){if(t<0||t>=this.validity.length)return!1;if(!this.validity[t]){let e=this.decode(t);this.validity[t]=this.fits(e.position,e.facing,e.mode)?1:-1}return this.validity[t]===1}neighbors(t){if(this.edges.has(t))return this.edges.get(t);let e=this.decode(t),n=[];for(let i of[-1,1]){let r=(e.h+i+8)%8,o=this.id(e.x,e.z,r,e.mode);this.valid(o)&&[.25,.5,.75].every(a=>this.fits(e.position,e.facing+i*Math.PI/4*a,e.mode))&&n.push([o,.53])}for(let i=0;i<8;i++){let r=ep[i],o=e.x+r[0],a=e.z+r[1];if(o<vo||o>pu||a<yo||a>mu)continue;let c=this.id(o,a,e.h,e.mode);if(!this.valid(c))continue;let l=this.decode(c);if(i!==e.h&&i!==(e.h+4)%8&&!(_o(e.position)&&_o(l.position)))continue;let d=[0,-.48,.35,-.82].every((u,p)=>ji(Ms(e.position,e.facing,0,u),Ms(l.position,e.facing,0,u),{radius:[.365,.28,.28,.1][p],...this.options}));d&&=ji(yr({position:e.position,facing:e.facing,operator:e.mode}),yr({position:l.position,facing:l.facing,operator:l.mode}),{radius:.28,...this.options});let f=(i-e.h+8)%8,h=f===0?1:f===4?1.22:4;d&&n.push([c,Lc*Math.hypot(...r)*h*(e.mode?4:1)])}for(let i of[-1,1])for(let r of[-1,1]){let o=ep[(e.h+i+8)%8],a=e.x+o[0]*r,c=e.z+o[1]*r,l=(e.h+i*2+8)%8;if(a<vo||a>pu||c<yo||c>mu)continue;let d=this.id(a,c,l,e.mode);if(!this.valid(d))continue;let f=this.decode(d);if(Array.from({length:13},(h,u)=>u/12).every(h=>{let u=_u(e,f,h);return this.fits(u.position,u.facing,e.mode)})){let h=Lc*Math.hypot(...o)*Math.PI/(2*Math.SQRT2);n.push([d,(h+.55)*(r<0?1.22:1)*(e.mode?4:1)])}}for(let i=0;i<3;i++)if(i!==e.mode){let r=this.id(e.x,e.z,e.h,i);if(!this.valid(r))continue;try{let o=this.operatorRoute(e,this.decode(r));qe(o)<2.8&&n.push([r,qe(o)+.65])}catch{}}return this.edges.set(t,n),n}operatorRoute(t,e){return Vn(yr({...t,operator:t.mode}),yr({...e,operator:e.mode}),{radius:.28,extra:[...this.holes,...vu(t)]})}canPickup(t){for(let e=0;e<this.validity.length;e++){let n=this.decode(e);if((n.mode===0||_o(t))&&Ii({position:n.position,facing:n.facing},t,.008)&&this.valid(e))return!0}return!1}find(t,e,{intake:n=!1,radius:i=.63,facing:r,operator:o,contacts:a}={}){let c=new Set,l=1/0;for(let g=0;g<this.validity.length;g++){if(o!==void 0&&g%3!==o||r!==void 0&&Math.floor(g/3)%8!==(Math.round(r/(Math.PI/4))%8+8)%8)continue;let m=this.decode(g),M=n?Ms(m.position,m.facing,0,.7):m.position,R=Math.hypot(M[0]-e[0],M[2]-e[2]);n?(a??[e]).some(y=>(m.mode===0||_o(y))&&Ii({position:m.position,facing:m.facing},y,.008))&&this.valid(g)&&c.add(g):R<l+.001&&this.valid(g)&&(R<l-.001&&c.clear(),l=R,c.add(g))}if(!c.size)throw new Error("No reachable cart intake near "+e);let d=new Float64Array(this.validity.length);d.fill(1/0),d[t]=0;let f=new Int32Array(d.length);f.fill(-1);let h=new gu,u=g=>{let m=this.decode(g).position;return Math.max(0,Math.hypot(m[0]-e[0],m[2]-e[2])-(n?i+.7:l))};h.push([u(t),t,0]);let p=-1;for(;h.a.length;){let[,g,m]=h.pop();if(m===d[g]){if(c.has(g)){p=g;break}for(let[M,R]of this.neighbors(g)){let y=m+R;y<d[M]&&(d[M]=y,f[M]=g,h.push([y+u(M),M,y]))}}}if(p<0)throw new Error("Cart route is obstructed near "+e);let x=[];for(let g=p;g>=0&&(x.unshift(this.decode(g)),g!==t);g=f[g]);return x}};function Dc(s,t={}){let e=JSON.stringify([s.map(n=>[n.id,n.x,n.z]),!!t.crossCracks]);return fu.has(e)||fu.set(e,new xu(s,t)),fu.get(e)}var yr=s=>Ms(s.position,s.facing,s.operator===1?.68:s.operator===2?-.68:0,s.operator?-.2:-1.02),br=yr;function vu(s){return[[0,.365]].map(([t,e],n)=>{let i=Ms(s.position,s.facing,0,t);return{id:"moving-cart-"+n,x:i[0],z:i[2],r:e}})}var yu=[-1.65,.52,-.53],oi=[-1.22,.59,-.98],Mr=[-1.22,.23,.08],Sr=[oi,[-1.22,.42,-.24],[-1.22,.23,.08],[-1.22,0,.75]],Mo=[Mr,[-1.22,.42,-.24],oi],So=[[-1.22,0,.75],Mr],np=s=>Math.max(0,Math.min(1,s)),bo=(s,t,e)=>{let n=np((e-s)/(t-s));return n*n*(3-2*n)},Uc=s=>s==="inside"?0:Math.PI;function ip(s){return[yu[0]-.94*s,yu[1],yu[2]+.09*bo(0,.2,s)]}function sp(s,t){s.position.fromArray(ip(t)),s.rotation.set(0,0,0)}var bu=s=>({a:s+.08,b:s+.78,opening:!1,automatic:!0});function wo(s,t){let e=np((t-s.a)/(s.b-s.a)),n=bo(.22,.82,e),i=s.side==="inside",r=i?[.1,1.25,-.24]:[.68,.88,.21],o=ip(n),a=bo(0,.18,e)*(1-bo(.32,.44,e));return{...s,progress:e,amount:n,weight:a,hand:"Right",point:o.map((c,l)=>c+r[l])}}function rp(s,t){let e;for(let n of t)n.a<=s&&(!e||n.a>e.a)&&(e=n);return e?e.automatic?1-bo(e.a,e.b,s):wo(e,s).amount:0}var Ss=[-3.55,0,1],op=[-3.55,0,-.02],ap=[-4.27,0,1],B1=.365,Ye={id:"harvester-dock",minX:-3.96,maxX:-3.14,minZ:.3,maxZ:1.96},To=-1.22,cp=[To,0,.75],z1=[To,.59,-.98];var Re=s=>[...s],Fc=s=>Math.max(0,Math.min(1,s)),lp=(s,t,e)=>s+Math.atan2(Math.sin(t-s),Math.cos(t-s))*e;function Oc(s,t=.18){s=Fc(s);let e=1-t;return s<t?{fraction:s*s/(2*t*e),rate:s/(t*e)}:s>1-t?{fraction:1-(1-s)*(1-s)/(2*t*e),rate:(1-s)/(t*e)}:{fraction:(s-t/2)/e,rate:1/e}}function Qi(s,t){let e=Fc((t-s.a)/(s.b-s.a)),n=Oc(e,s.motionRamp??.18),i=qe(s.cartPath),r=s.cartArc?i*Math.PI/(2*Math.SQRT2):i,o=s.cartArc?_u({position:s.cartPath[0],facing:s.cartTurn[0]},{position:s.cartPath[1],facing:s.cartTurn[1]},n.fraction):$i(s.cartPath,r*n.fraction),a=s.cartArc?o.facing:s.cartTurn?lp(s.cartTurn[0],s.cartTurn[1],s.linearTurn?e:e*e*(3-2*e)):s.cartFacing??o.facing,c={position:o.position,facing:a,operator:s.operator??0,wheelFacing:s.cartArc?a:s.wheelFacing??a,tight:o.position[0]<-4.3||o.position[2]<-3.1,distance:(s.wheelStart??0)+r*n.fraction,speed:r/(s.b-s.a)*n.rate};return c.pusher=br(c),c}function Gn(s,t){let e=Math.cos(s.facing),n=Math.sin(s.facing);return[s.position[0]+t[0]*e+t[2]*n,s.position[1]+t[1],s.position[2]-t[0]*n+t[2]*e]}function Bc(s,t,e=[-1.15,0,2.35],n=89,{skipUnreachable:i=!1,resumeCart:r=null,completedJobs:o=[],gunStoredAt:a}={}){let c=[],l=[],d={},f=[],h=n,u=Re(e),p=Re(Ss),x=0,g=0,m=0,M=1/0,R=yn(t),y=Dc(t,{crossCracks:!!r?.crossCracks}),S=y.holes,T=y.id(0,0,0),w={radius:B1,extra:S};r&&(p=Re(r.position),x=r.facing,g=r.operator??0,m=r.distance??0,T=r.node,u=br(r),l.push(...o));let _=new Map(s.map(B=>{let nt={...B};if(B.contactCandidates?.length&&!y.canPickup(B.contactPosition??B.position)){let vt=B.contactCandidates.find(rt=>y.canPickup(rt));vt&&(nt.contactPosition=vt)}return[B.id,nt]})),A=1/0,P=1/0,U=1/0,O=1/0,H=1/0,N=1/0,V=1/0;function G(B,nt,vt={}){let rt=vt.doorApproach?{nav:{radius:.285,extra:[...R,Ye],ignore:["trailer","steps"]}}:{},Nt={a:h,b:h+B,pose:nt,position:Re(u),facing:0,operator:g,parkedCart:{position:Re(p),facing:x,operator:g,distance:m,speed:0},...rt,...vt};return c.push(Nt),h=Nt.b,Nt.path&&(u=Re(Nt.path.at(-1))),Nt}function q(B,nt="walk",vt=R,rt={}){let Ot={extra:(h<P||h>=U)&&!vt.some(Gt=>Gt.id===Ye.id)?[...vt,Ye]:vt,radius:.285},Xt=Vn(u,B,Ot),ne=nt==="carry-box"?1.28:nt==="tools"?1.38:1.55;return G(Math.max(.35,qe(Xt)/ne),nt,{path:Xt,nav:Ot,...rt})}function it(B,nt,vt){return u=Re(B==="inside"?oi:Mr),G(.6,nt,{doorAction:{side:B,opening:!0},facing:Uc(B),...vt})}function Y(B="walk",nt={}){return q(cp,B,nt.extra??R,nt),G(.6,B,{path:So,doorApproach:!0,...nt}),it("outside",B,nt),G(.95,B,{path:Mo,door:!0,doorClose:!0,...nt}),G(.8,B,{doorApproach:!0,facing:Math.PI,...nt})}function Q(B="walk",nt={}){return u=Re(z1),it("inside",B,nt),G(1.45,B,{path:Sr,door:!0,doorClose:!0,...nt})}function tt(B){for(let nt=0;nt<=Math.ceil((B.b-B.a)/.035);nt++){let vt=Math.min(B.b,B.a+nt*.035),rt=Qi(B,vt);for(let[Nt,oe]of _){if(!Ii(rt,oe.contactPosition??oe.position))continue;let Ot=vt,Xt=Ot+(oe.type==="body"?.58:.36);l.push({...oe,feed:{a:Ot,b:Xt},consumed:Xt,cartSegment:B}),_.delete(Nt)}}}function Pt(B,{facing:nt,collect:vt=!0,pose:rt="push-cart",speed:Nt=.96,intake:oe=!1,radius:Ot=.63,operatorGoal:Xt,item:ne}={}){let Gt={facing:nt,intake:oe,radius:Ot,operator:Xt},qt;try{qt=y.find(T,B,Gt)}catch(Se){if(!oe||!ne?.contactCandidates?.length)throw Se;qt=y.find(T,B,{...Gt,contacts:ne.contactCandidates});let zt=qt.at(-1);ne.contactPosition=ne.contactCandidates.find(kt=>Ii({position:zt.position,facing:zt.facing},kt,.008))}let Ae;for(let Se=1;Se<qt.length;){let zt=qt[Se-1],kt=qt[Se];if(g=kt.mode,zt.mode!==kt.mode){let I=y.operatorRoute(zt,kt),xe=G(Math.max(.65,qe(I)/1.2),"walk",{path:I,nav:{radius:.28,extra:[...S,...vu(zt)]}});u=Re(I.at(-1)),Ae=xe,Se++}else if(zt.h!==kt.h){let I=Math.atan2(Math.sin(kt.facing-zt.facing),Math.cos(kt.facing-zt.facing)),xe=zt.x!==kt.x||zt.z!==kt.z,te=xe?qe([zt.position,kt.position])*Math.PI/(2*Math.SQRT2):0,E=G(Math.max(.45,Math.abs(I)/1.15,te/Nt),rt,{cartPath:[Re(zt.position),Re(xe?kt.position:zt.position)],cartTurn:[zt.facing,zt.facing+I],cartArc:xe,cartMode:"turning",wheelStart:m,operator:g,nav:w});m+=te,x=kt.facing,p=Re(kt.position),u=Qi(E,E.b).pusher,vt&&tt(E),Ae=E,Se++}else{let I=Se,xe=kt.x-zt.x,te=kt.z-zt.z;for(;I+1<qt.length&&qt[I+1].h===kt.h&&qt[I+1].mode===kt.mode&&qt[I+1].x-qt[I].x===xe&&qt[I+1].z-qt[I].z===te;)I++;let E=qt[I],v=qe([zt.position,E.position]),F=G(Math.max(.32,v/Nt),rt,{cartPath:[Re(zt.position),Re(E.position)],cartFacing:kt.facing,wheelFacing:Math.atan2(xe,te),cartMode:xe*Math.sin(kt.facing)+te*Math.cos(kt.facing)<0?"reversing":"rolling",wheelStart:m,operator:g,nav:w});m+=v,x=kt.facing,p=Re(E.position),u=Qi(F,F.b).pusher,vt&&tt(F),Ae=F,Se=I+1}}return T=qt.at(-1).id,Ae}r?(A=n-2,M=n-1,P=n-.01):(Y("gun-low"),a=h,G(.45,"inside"),Q(),q(ap,"walk",[...R,Ye]),G(.85,"uncover-cart",{facing:Math.PI/2}),A=h,G(.8,"unfold-handle",{facing:Math.PI/2}),M=h,q(op,"walk",[...R,Ye]),G(.55,"cart-start",{facing:0}),P=h);let At=0,he=!1;for(;_.size&&At++<s.length+2;){let B=[..._.values()].sort((nt,vt)=>Math.hypot(nt.position[0]-p[0],nt.position[2]-p[2])-Math.hypot(vt.position[0]-p[0],vt.position[2]-p[2]))[0];try{Pt(B.contactPosition??B.position,{intake:!0,radius:B.type==="body"?.63:.43,item:B})}catch(nt){if(!i)throw nt;f.push({id:B.id,reason:nt.message}),_.delete(B.id);continue}if(_.has(B.id)){let nt=G(.12,"push-cart",{cartPath:[Re(p),Re(p)],cartFacing:x,wheelStart:m,cartMode:"collecting",nav:w});tt(nt)}!he&&l.filter(nt=>nt.type==="body").length>=4&&(G(1.4,"clear-jam",{cartPath:[Re(p),Re(p)],cartFacing:x,cartMode:"jammed",wheelStart:m,operator:g,nav:w,facing:x}),he=!0)}if(_.size)throw new Error("Uncollected harvest items");let jt=Math.max(h,...l.map(B=>B.consumed));jt>h&&G(jt-h,"push-cart",{cartPath:[Re(p),Re(p)],cartFacing:x,wheelStart:m,cartMode:"collecting"}),Pt(Ss,{collect:!1,facing:0,speed:1.55,operatorGoal:0}),U=h,u=Re(op),G(.75,"fold-handle",{facing:0}),G(1.65,"bin-remove",{facing:0,box:"remove"}),O=h;let ee=h;Y("carry-box",{box:"carry",extra:[...R,Ye]}),H=h,G(.75,"store-box",{box:"store"}),Q(),q(ap,"walk",[...R,Ye]),G(1.45,"cover-cart",{facing:Math.PI/2}),N=h,Y(),G(.65,"inside"),Q("tools"),V=h-2.3;for(let B of[t[1],t[0],t[2]]){let nt=B.id==="B"?[-.05,0,2.65]:B.id==="A"?[2.35,0,1.85]:[2.4,0,-.1],vt=[...R.filter(oe=>!d[oe.id.slice(5)]),Ye];q(nt,"tools",vt);let rt=B.id==="B"?Math.PI/2-.25:B.id==="A"?Math.PI/2+.2:Math.PI/2+.5;G(.85,"set-bucket",{facing:rt});let Nt=G(2.65,"shovel",{facing:rt,repair:B.id});d[B.id]=Nt.b-.2,G(.95,"lift-bucket",{facing:rt})}q(cp,"tools",[Ye]),G(.75,"power-off",{facing:Math.PI}),Y("tools",{extra:[Ye]});let K=h;return G(5,"inside"),{segments:c,jobs:l,repairs:d,unreachable:f,gunStoredAt:a,uncovered:A,undocked:P,handleReady:M,docked:U,binRemoved:O,boxReturnStart:ee,boxStored:H,covered:N,repairStart:V,sleepAt:K,duration:h,collectionStart:P,collectionEnd:Math.max(P,...l.map(B=>B.consumed))}}function hp(s,t){let e=s.segments.find(f=>t>=f.a&&t<f.b);if(!e)return null;let n=Fc((t-e.a)/(e.b-e.a)),i=Oc(n),r=e.path?qe(e.path):0,o=e.path?$i(e.path,r*i.fraction):{position:e.position,facing:e.facing},a=e.parkedCart??{position:Re(Ss),facing:0,operator:0,speed:0,distance:0};if(e.cartPath){a=Qi(e,t);let f=Gn(a,a.operator?[a.operator===1?.32:-.32,.86,-.2]:[0,1.02,-.82]);o={position:a.pusher,facing:Math.atan2(f[0]-a.pusher[0],f[2]-a.pusher[2])}}e.pose==="cover-cart"&&(o.facing=lp(0,Math.PI/2,Fc((n-.18)/.47)));let c={visible:e.pose!=="inside"&&e.pose!=="store-box",...o,pose:e.pose,doorway:!!e.door,doorApproach:!!e.doorApproach,doorAction:e.doorAction?wo({...e.doorAction,a:e.a,b:e.b},t):null,speed:e.cartPath?e.cartTurn?Math.abs(e.cartTurn[1]-e.cartTurn[0])/(e.b-e.a):a.speed:e.path?r/(e.b-e.a)*i.rate:0,actionProgress:n},l=s.jobs.filter(f=>t>=f.feed.a&&t<f.consumed),d=s.jobs.filter(f=>t>=f.consumed).length;return{hero:c,segment:e,progress:n,activeJobs:l,job:l[0]??null,processed:d,total:s.jobs.length,cart:a,cartMode:e.cartMode??"parked",cartRunning:t>=s.undocked&&t<s.docked&&e.pose!=="clear-jam",coverMode:t<s.uncovered?e.pose==="uncover-cart"?"lifting":"covered":t>=s.covered?"covered":e.pose==="cover-cart"?"covering":"stowed",handleOpen:t>=s.handleReady&&t<s.docked+.75,boxMode:e.box??(t<s.binRemoved?"docked":"hidden"),grinding:l.length>0}}var ai={yaw:.45,butt:[-.37,1.38,0],scale:.78};function up(s,t){let e=t[0]-s[0],n=t[2]-s[2],i=Math.max(.5,Math.hypot(e,n)),{yaw:r,butt:o}=ai,a=o[0]*Math.cos(r)-o[2]*Math.sin(r);return Math.atan2(e,n)-r-Math.asin(Math.max(-.8,Math.min(.8,a/i)))}var Wt={sigh:12.1,cookStart:18.2,windowOpen:19.2,cookEnd:26.1,dinner:32,firstSpawn:39.7,firstCrack:38.45,fastEat:38.45,stand:40.2,dishesInside:44.6,gunPickup:45.4,gunOut:45.95,combat:49.5,sunrise:84,cleanup:90},ws=Wt.combat,Be=Wt.sunrise,Cn=Wt.cleanup,Pn=[{id:"A",x:3.15,z:1.55,first:39.7},{id:"B",x:.65,z:3,first:55.6},{id:"C",x:3.05,z:-.65,first:59}],ts=[-1.15,0,2.35],kc=[To,0,.75],Su=[To,.59,-.98],ci=[-2.65,.59,-1.1],wu=[.18,-.28,.34],ze=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),gt=(s,t,e)=>s+(t-s)*e,at=(s,t,e)=>{let n=ze((e-s)/(t-s));return n*n*(3-2*n)};var Ai=(s,t,e)=>s>=t&&s<e,Hc=[],Tu=[],bn=(s,t,e,n="walk",i=!1,r=!1)=>Hc.push({a:s,b:t,points:e,pose:n,doorway:i,doorApproach:r}),Ao=(s,t,e,n="walk")=>{let i={a:s,b:t,side:e,opening:!0};Tu.push(i),Hc.push({a:s,b:t,position:e==="inside"?oi:Mr,pose:n,facing:Uc(e),doorAction:i})},Eo=s=>Tu.push(bu(s)),Mn=(s,t,e,n="idle",i=-.65)=>Hc.push({a:s,b:t,position:e,pose:n,facing:i}),Au={extra:[Ye]};Ao(9,9.5,"inside");bn(9.5,11.35,Sr,"walk",!0);Eo(11.35);Mn(11.35,14.65,kc,"sigh",0);bn(14.65,16,So,"walk",!1,!0);Ao(16,16.55,"outside");bn(16.55,18.2,Mo,"walk",!0);Eo(18.2);bn(18.2,19.2,[Su,ci]);Mn(19.2,20,ci,"window-open",0);Mn(20,20.65,ci,"stove-on",0);Mn(20.65,21.15,ci,"cook-add",0);Mn(21.15,23.5,ci,"cook-stir",0);Mn(23.5,24.3,ci,"cook-toss",0);Mn(24.3,24.75,ci,"cook-stir",0);Mn(24.75,25.5,ci,"cook-serve",0);Mn(25.5,26.1,ci,"window-close",0);bn(26.1,27.1,[ci,oi],"carry-bowl");Ao(27.1,27.65,"inside","carry-bowl");bn(27.65,29.5,Sr,"carry-bowl",!0);Eo(29.5);bn(29.5,31.5,Vn(kc,[.18,0,1.04],Au),"carry-bowl");bn(31.5,32,[[.18,0,1.04],wu],"sit-down");Mn(Wt.dinner,Wt.stand,wu,"eat",Math.PI/2);bn(Wt.stand,Wt.stand+.6,[wu,[.18,0,1.04]],"stand-up");bn(Wt.stand+.6,42.4,[...Vn([.18,0,1.04],kc,Au),...So.slice(1)],"carry-bowl",!1,!0);Ao(42.4,42.95,"outside","carry-bowl");bn(42.95,Wt.dishesInside,Mo,"carry-bowl",!0);Eo(Wt.dishesInside);Mn(Wt.dishesInside,Wt.gunPickup,Su,"inside");Ao(Wt.gunPickup,Wt.gunOut,"inside","gun-low");bn(Wt.gunOut,47.55,Sr,"gun-low",!0);Eo(47.55);bn(47.55,ws,Vn(kc,ts,Au),"gun-low");Mn(ws,Be,ts,"aim",Math.PI/2-ai.yaw);Mn(Be,Cn,ts,"gun-low",Math.PI/2);function k1(s){let t=Hc.find(o=>Ai(s,o.a,o.b));if(!t||t.pose==="inside")return{visible:!1,position:Su,pose:"inside",speed:0,facing:0};let e=ze((s-t.a)/(t.b-t.a)),n=Oc(e),i=t.points?qe(t.points):0,r=t.points?{...$i(t.points,i*n.fraction),speed:i/(t.b-t.a)*n.rate}:{position:t.position,facing:t.facing,speed:0};return(t.pose==="sit-down"||t.pose==="stand-up")&&(r.facing=Math.PI/2,r.speed=0,r.seated=t.pose==="sit-down"?at(t.a,t.b,s):1-at(t.a,t.b,s)),{visible:!0,...r,pose:t.pose,actionProgress:e,doorway:t.doorway??!1,doorApproach:t.doorApproach??!1,doorAction:t.doorAction?wo(t.doorAction,s):null}}var H1=[["A",39.7],["A",52],["B",55.6],["C",59],["A",62.5],["B",66],["C",69.5],["A",73],["B",76.5],["C",80.2]],V1={A:[[1,0,2.3],[1.7,0,2.7],[2.35,0,2.2],[2.8,0,3.2]],B:[[0,0,3.4],[.65,0,3.7],[1.25,0,3.35]],C:[[2.45,0,.55],[3.45,0,.15],[3.75,0,-.6]]},G1={A:0,B:0,C:0},dn=H1.map(([s,t],e)=>({id:e,site:s,birth:t,goal:V1[s][G1[s]++],start:[Pn.find(n=>n.id===s).x,0,Pn.find(n=>n.id===s).z]})),zc=.34,Ro=s=>Math.max(s.birth+3.1,s.id===0?ws+2:0),Mu=s=>s>=ws&&s<Be,W1=dn.map(s=>Vn(s.start,s.goal,{radius:.25,extra:yn(Pn.filter(t=>t.id!==s.site))}));function Vc(s,t,e=[]){let n=e.filter(x=>x.zombie===s.id&&x.time<=t),i=new Set(n.map(x=>x.part)),r=n.find((x,g)=>x.part==="head"||x.part==="torso"||g>=2),o=Math.min(r?.time??1/0,Be+1.1),a=Math.min(t,o),c=at(s.birth,s.birth+3.1,a),l=W1[s.id],d=qe(l),f=Ro(s),h=Math.min(d,Math.max(0,a-f)*zc),u=$i(l,h),p=a>=f&&h<d&&t<o;return u.position[1]=-1.77*(1-c),{visible:t>=s.birth,emergence:c,position:u.position,facing:u.facing,walking:p,speed:p?zc:0,detached:i,death:o,fall:at(o,o+.65,t),burning:t>=Be&&t<Be+5.4,charred:t>=Be+4,alive:t<o,targetable:t>=s.birth+.75&&t<o&&Mu(t)}}function Eu(s=[],t=null,e=ts,n=null,i={}){let r=dn.map(a=>{let c=Vc(a,Cn-1,s),l=n?.[a.id],d=l?.rootPosition??l??c.position.map((p,x)=>x===1?0:p),f=l?.facing??c.facing,h=l?.position??[d[0]+Math.sin(f)*.16,.22,d[2]+Math.cos(f)*.16],u=l?.contactPosition??[d[0]+Math.sin(f)*.33,.18,d[2]+Math.cos(f)*.33];return{id:"body-"+a.id,type:"body",zombie:a.id,position:h,contactPosition:u,contactCandidates:l?.contactCandidates,rootPosition:d,facing:f}}),o=t??s.filter(a=>a.part!=="torso").map((a,c)=>({id:a.debrisId??"part-"+c,type:"part",zombie:a.zombie,part:a.part,position:a.landing??r[a.zombie].position}));return Bc([...r,...o],Pn,e,Cn,i)}var Ts=Qf,DM=Ts.duration,dp=[[0,"sleep"],[5,"nightfall"],[9,"wake"],[18.2,"cooking"],[27.1,"dinner"],[Wt.firstCrack,"interrupted"],[Wt.stand,"fetch-gun"],[ws,"combat"],[Be,"sunrise"],[Cn,"harvester-setup"]];function fp(s,t=[],e=null,n=0){e??=t.length?Eu(t):Ts;let i=n+Math.floor(Math.max(0,s)/e.duration),r=s%e.duration,o=r<0?r+e.duration:r,a=dp[0][1];for(let[M,R]of dp)o>=M&&(a=R);let c=o>=Cn?hp(e,o):null;c&&(a=o>=e.sleepAt?"sleep-again":o>=e.repairStart?"repair":o>=e.boxReturnStart?"storing-harvest":o>=e.undocked?"harvesting":"harvester-setup");let l=c?.hero??k1(o),d=at(5,9,o)*(1-at(Be-1,Be+3,o)),f=o>=6.8&&o<Be,h=e.segments.flatMap(M=>[...M.doorAction?[{...M.doorAction,a:M.a,b:M.b}]:[],...M.doorClose?[bu(M.b)]:[]]),u=rp(o,[...Tu,...h]),p=at(19.35,19.95,o)*(1-at(25.55,26.05,o)),x=Ai(o,25.1,Wt.dinner)||Ai(o,Wt.stand,Wt.dishesInside)?"carry":Ai(o,Wt.dinner,Wt.stand)?"table":"hidden";Ai(o,31.5,Wt.dinner)&&(x="set-table"),Ai(o,Wt.stand,Wt.stand+.6)&&(x="lift-table");let g=Pn.map(M=>{let R=dn.filter(S=>S.site===M.id).map(S=>S.birth).find(S=>o>=S-1.25&&o<S+3.1),y=e.repairs[M.id];return{...M,repaired:y,open:o>=M.first+.04&&o<y,patched:o>=y||i>0&&o<M.first+.04,rubble:o>=M.first+.04&&o<y,fracture:R===void 0?0:at(R-1.25,R-.1,o),heave:R===void 0?0:Math.sin(ze((o-R+.7)/3.1)*Math.PI),warning:R!==void 0&&o<R}}),m=dn.map(M=>{let R=Vc(M,o,t),y=e.jobs.find(S=>S.id==="body-"+M.id);return o>=Be+1.1&&y?.rootPosition&&(R.position=[...y.rootPosition],R.facing=y.facing),R.visible&&=o<(e.jobs.find(S=>S.id==="body-"+M.id)?.consumed??1/0),R});return{t:o,cycles:i,phase:a,night:d,lampOn:f,door:u,windowOpen:p,hero:l,cleanup:c,plan:e,sleeping:o<9||o>=e.sleepAt,canShoot:Mu(o),canMove:Mu(o),foodMode:x,cooking:Ai(o,20.65,25.5),burnerOn:Ai(o,20.35,25.5),gunVisible:Ai(o,Wt.gunPickup,e.gunStoredAt??e.segments.find(M=>M.pose==="inside").a),cart:c?.cart??{position:[...Ss],facing:0,speed:0,distance:0},cartMode:c?.cartMode??"parked",cartRunning:c?.cartRunning??!1,coverMode:c?.coverMode??"covered",handleOpen:c?.handleOpen??!1,boxMode:c?.boxMode??"docked",boxLoads:(c?.processed??0)/Math.max(1,e.jobs.length)*3,grinding:c?.grinding??!1,hasTools:!!c&&["tools","set-bucket","shovel","lift-bucket","power-off"].includes(l.pose),sites:g,zombies:m}}var Ru=["#ffffff","#151c25","#1b2538","#27344b","#3e5064","#65777e","#303334","#444747","#5c6060","#777b75","#9a9e91","#c6c4ac","#e4dfc8","#f3ebd2","#332a28","#5d3f32","#8c5d40","#9e7154","#ca9a6c","#ead3a2","#70422c","#b56132","#db8a46","#f2b65b","#f9df8b","#6e5840","#343b2e","#53603b","#6f8046","#91a85b","#b6c583","#203c42","#335b60","#4e9095","#8dc8c0","#4b3b4c","#725262","#8b9275","#4c242d","#8f3c36","#bd3e36","#b72b35","#b56a65","#d39183","#7f4648"],Gc=class{constructor(t){this.renderer=new Tc({canvas:t,antialias:!1,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});let e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info");t.dataset.renderer=n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER),t.dataset.dither="4x4 ordered palette",this.renderer.setPixelRatio(1),this.renderer.setSize(292,292,!1),this.renderer.setClearColor(16777215,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ms,this.renderer.localClippingEnabled=!0,this.renderer.toneMapping=gn,this.renderer.outputColorSpace=Ie,this.scene=new ki,this.camera=new zn(-7.85,7.85,7.85,-7.85,.1,60),this.camera.position.set(-12,10.34796,12),this.camera.lookAt(0,.55,0),this.ambient=new Qr("#e3e5db","#68705a",1.8),this.scene.add(this.ambient),this.sun=new ps("#fff0cd",2.8),this.sun.position.set(-8,5,-6),this.sun.target.position.set(0,0,0),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:.1,far:30}),this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.025,this.scene.add(this.sun,this.sun.target),this.lamp=new fs("#f2b65b",0,8,Math.PI/3,.38,2),this.lamp.position.set(3.9,3.87,-1.96),this.lamp.target.position.set(3.4,0,-.9),this.scene.add(this.lamp,this.lamp.target),this.windowLight=new ti("#e6a55b",0,3.3,2),this.windowLight.position.set(-2.45,1.63,-.3),this.scene.add(this.windowLight),this.porchLight=new ti("#f2b65b",0,4,2),this.porchLight.position.set(.15,2.15,.15),this.scene.add(this.porchLight),this.target=new je(292,292,{minFilter:we,magFilter:we,type:_n,depthBuffer:!0,stencilBuffer:!1}),this.target.depthTexture=new jn(292,292,Yi),this.postScene=new ki,this.postCamera=new zn(-1,1,1,-1,0,1);let i=Ru.map(r=>new _t(r).convertLinearToSRGB());this.postMaterial=new rn({uniforms:{picture:{value:this.target.texture},depth:{value:this.target.depthTexture},texel:{value:new Ft(1/292,1/292)},palette:{value:i}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}",fragmentShader:[`uniform sampler2D picture;uniform sampler2D depth;uniform vec2 texel;uniform vec3 palette[${Ru.length}];varying vec2 vUv;`,"float bayer2(vec2 p){return mod(p.x,2.0)*2.0+mod(p.y,2.0)*3.0-4.0*mod(p.x,2.0)*mod(p.y,2.0);}","float bayer4(vec2 p){return (4.0*bayer2(p)+bayer2(floor(p/2.0))+.5)/16.0;}","void main(){vec4 raw=texture2D(picture,vUv);if(raw.a<0.01){gl_FragColor=vec4(0.0);return;}","vec3 c=max(raw.rgb,vec3(0.0));c=(c*1.35)/(c*1.35+vec3(0.70));c=pow(c,vec3(1.0/2.2));","float d=texture2D(depth,vUv).r;float farther=0.0;","farther=max(farther,texture2D(depth,vUv+vec2(texel.x,0.0)).r-d);","farther=max(farther,texture2D(depth,vUv-vec2(texel.x,0.0)).r-d);","farther=max(farther,texture2D(depth,vUv+vec2(0.0,texel.y)).r-d);","farther=max(farther,texture2D(depth,vUv-vec2(0.0,texel.y)).r-d);","if(farther>0.010)c=mix(c,vec3(0.06,0.08,0.10),0.52);","float best=100.0;float next=100.0;vec3 picked=c;vec3 alternate=c;",`for(int i=0;i<${Ru.length};i++){vec3 delta=c-palette[i];float score=dot(delta,delta);if(score<best){next=best;alternate=picked;best=score;picked=palette[i];}else if(score<next){next=score;alternate=palette[i];}}`,"vec3 span=alternate-picked;float coverage=clamp(dot(c-picked,span)/max(dot(span,span),.00001),0.0,1.0);","if(coverage>bayer4(floor(gl_FragCoord.xy)))picked=alternate;","gl_FragColor=vec4(picked,raw.a);}"].join(`
`),transparent:!0,depthTest:!1,depthWrite:!1}),this.postScene.add(new Me(new Bn(2,2),this.postMaterial))}async load(t){let e=new Rc,n=await Promise.all(["camp.glb","survivor.glb","zombie.glb","props.glb"].map(i=>e.loadAsync(new URL(i,t).href)));if(this.environment=n[0].scene.getObjectByName("Environment"),this.heroTemplate=n[1].scene.getObjectByName("Hero_Root"),this.zombieTemplate=n[2].scene.getObjectByName("Zombie_Root"),this.propTemplate=n[3].scene.getObjectByName("PropLibrary"),!this.environment||!this.heroTemplate||!this.zombieTemplate||!this.propTemplate)throw new Error("Incomplete scene assets.");this.environment.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material.roughness=.94,i.name==="CanopyCloth"&&(i.material.side=De),/^Site_[ABC]_(Walls|Bottom)$/.test(i.name)&&(i.material=new Te({color:i.name.endsWith("Bottom")?"#151c25":"#303334",side:De})))}),this.scene.add(this.environment),this.door=this.environment.getObjectByName("DoorPivot"),this.sash=this.environment.getObjectByName("WindowSashPivot"),this.cloth=this.environment.getObjectByName("CanopyCloth"),this.clothBase=Float32Array.from(this.cloth.geometry.attributes.position.array),this.sites=["A","B","C"].map(i=>({plug:this.environment.getObjectByName("Site_"+i+"_Plug"),tar:this.environment.getObjectByName("Site_"+i+"_Tar"),rubble:this.environment.getObjectByName("Site_"+i+"_Rubble"),cracks:this.environment.getObjectByName("Site_"+i+"_Cracks"),mound:this.environment.getObjectByName("Site_"+i+"_Mound"),shards:Array.from({length:8},(r,o)=>this.environment.getObjectByName("Site_"+i+"_Shard_"+o))})),this.glows=["CabinGlass","DoorGlass","LampBulb","PorchBulb","KitchenBulb"].map(i=>{let r=this.environment.getObjectByName(i);return r.material=r.material.clone(),r})}update(t,e){let n=t.night;this.ambient.color.set("#e3e5db").lerp(new _t("#9eacc3"),n),this.ambient.groundColor.set("#68705a").lerp(new _t("#26314d"),n),this.ambient.intensity=gt(1.8,1.5,n),this.sun.color.set("#fff0cd").lerp(new _t("#899ec3"),n),this.sun.intensity=gt(2.8,.55,n),this.lamp.intensity=t.lampOn?38:0,this.windowLight.intensity=t.lampOn?1.9:0,this.porchLight.intensity=t.lampOn?8.5:0;for(let r of this.glows)r.material.color.set(t.lampOn?"#966a36":"#414b53"),r.material.emissive.set(t.lampOn?"#ff9f30":"#000000"),r.material.emissiveIntensity=t.lampOn?.7:0;sp(this.door,t.door),this.sash.rotation.x=-2.3*t.windowOpen,this.sites.forEach((r,o)=>{let a=t.sites[o];r.plug.visible=!a.open&&!a.patched,r.tar.visible=a.patched,r.rubble.visible=a.rubble,r.cracks.visible=a.open||a.fracture>0,r.cracks.scale.setScalar(a.open?1:Math.max(.01,a.fracture)),r.mound.visible=a.heave>.01,r.shards.forEach((c,l)=>{let d=l*Math.PI/4+.11,f=a.heave*(.6+Math.sin(e*28+l)*.025);c.rotation.set(Math.sin(d)*f,0,-Math.cos(d)*f)})});let i=this.cloth.geometry.attributes.position.array;for(let r=0;r<i.length;r+=3){let o=(this.clothBase[r]+.22)/2.3,a=(this.clothBase[r+2]+.57)/1.67,c=Math.sin(Math.PI*o)*Math.sin(Math.PI*a);i[r+1]=this.clothBase[r+1]+Math.sin(e*1.5+o*3+a*2)*.018*c}this.cloth.geometry.attributes.position.needsUpdate=!0}render(){this.renderer.setRenderTarget(this.target),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.drawCalls=this.renderer.info.render.calls+1,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postScene,this.postCamera)}dispose(){let t=new Set,e=new Set;this.scene.traverse(n=>{if(n.isMesh){t.add(n.geometry);for(let i of[n.material].flat())e.add(i)}});for(let n of t)n.dispose();for(let n of e)n.dispose();this.target.dispose(),this.postMaterial.dispose(),this.renderer.dispose()}};var X1=new C(0,1,0),pp=new C(0,-1,0),As=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),mp=s=>s*s*(3-2*s),q1=(s,t,e)=>s+Math.atan2(Math.sin(t-s),Math.cos(t-s))*e,Y1=s=>Math.sin(Math.PI*Math.pow(As(s),.55)),Z1=s=>1-(1-s)*(1-s);function gp(s,t,e=0){if(s>-1.72&&s<-.78){if(t<-.43&&t>-1.35)return .59;if(t<-.14&&t>=-.43)return .35;if(t<.24&&t>=-.14)return .17}return s>-4.1&&s<.1&&t<-.5&&t>-2.6||e>.4?.59:0}var Wc=class{constructor(t=!1){this.zombie=t,this.contacts={},this.lastTime=null,this.next="Left",this.stepCount=0,this.velocity=new C}clear(){this.lastTime=null,this.swing=null,this.velocity.set(0,0,0)}nominal(t,e){let n=t.localToWorld(new C(e==="Left"?.11:-.11,0,.035));return n.y=gp(n.x,n.z,t.position.y)+.06,n}limit(t,e,n){let i=t.worldToLocal(n.clone()),r=e==="Left"?1:-1;i.x=r*As(i.x*r,.045,.215),i.z=As(i.z,-.265,.285);let o=t.localToWorld(i);return o.y=n.y,o}landing(t,e,n,i){let r=this.nominal(t,e),o=n.clone().multiplyScalar(i*.54);return r.add(o),r.y=gp(r.x,r.z,t.position.y)+.06,this.limit(t,e,r)}update(t,e,n,i=0){t.updateMatrixWorld(!0);let r=this.lastTime===null?0:n-this.lastTime,o=this.previous?t.position.clone().sub(this.previous):new C,a=this.lastTime===null||r<0||r>.2||o.length()>.55||!this.contacts.Left;if(a){for(let u of["Left","Right"])this.contacts[u]={point:this.nominal(t,u),yaw:t.rotation.y};this.swing=null,this.stepCount=0,this.velocity.set(0,0,0)}let c=!a&&r>0;if(c){let u=o.clone().multiplyScalar(1/r);u.y=0,u.length()>2.2&&u.setLength(2.2),this.velocity.lerp(u,1-Math.exp(-r*18))}this.lastTime=n,this.previous=t.position.clone();let l=this.velocity.length(),d=l>.04&&i>.02;if(c&&this.swing){let u=this.swing,p=As((n-u.start)/u.duration),x=this.landing(t,u.side,d?this.velocity:new C,u.duration);u.to.lerp(x,1-Math.exp(-r*22));let g=u.from.clone().lerp(u.to,this.zombie?mp(p):Z1(p)),m=this.zombie?Math.sin(p*Math.PI):Y1(p);g.y+=m*(this.zombie?.028:.055)+m*Math.max(0,u.to.y-u.from.y)*.2,this.contacts[u.side]={point:this.limit(t,u.side,g),yaw:q1(u.yaw,t.rotation.y,mp(p)),pitch:this.zombie?0:-.16*m},p>=1&&(this.contacts[u.side].point.copy(this.limit(t,u.side,u.to)),this.swing=null,this.next=u.side==="Left"?"Right":"Left",this.stepCount++)}if(c&&!this.swing){let u=this.next,p=y=>this.nominal(t,y).distanceTo(this.contacts[y].point),x=u==="Left"?"Right":"Left";p(x)>p(u)+.12&&(u=x);let g=this.nominal(t,u),m=t.worldToLocal(this.contacts[u].point.clone()),M=u==="Left"?1:-1,R=Math.abs(Math.atan2(Math.sin(t.rotation.y-this.contacts[u].yaw),Math.cos(t.rotation.y-this.contacts[u].yaw)));if(d&&p(u)>(this.stepCount===0?.012:this.zombie?.08:.055)||!d&&p(u)>.1||m.x*M<.04||R>.5){let y=this.stepCount===0,S=(this.zombie?.6:As(.36/Math.max(l,.8),.2,.36))*(y?.7:1);this.swing={side:u,from:this.contacts[u].point.clone(),to:this.landing(t,u,d?this.velocity:new C,S),start:n,duration:S,yaw:this.contacts[u].yaw}}}let f=this.swing?As((n-this.swing.start)/this.swing.duration):0,h=Math.sin(f*Math.PI);e.Hips.position.y=(this.zombie?.79:.805)-h*(this.zombie?.008:.012),e.Hips.position.x=(this.swing?.side==="Left"?-.009:.009)*h,e.Torso.rotation.z+=(this.swing?.side==="Left"?-.014:.014)*h,t.updateMatrixWorld(!0);for(let u of["Left","Right"])this.contacts[u].point.copy(this.limit(t,u,this.contacts[u].point)),this.leg(t,e,u,this.contacts[u]);return{load:h,side:this.swing?.side,moving:d,speed:l}}leg(t,e,n,i){let r=e[n+"Thigh"],o=e[n+"Shin"],a=e[n+"Foot"],c=r.parent.worldToLocal(i.point.clone()),l=r.position.clone(),d=c.clone().sub(l),f=As(d.length(),.05,.795),h=d.normalize(),u=l.clone().addScaledVector(h,f),p=(.42**2-.38**2+f*f)/(2*f),x=Math.sqrt(Math.max(0,.42**2-p*p)),g=new C(0,0,1).addScaledVector(h,-h.z).normalize(),m=l.clone().addScaledVector(h,p).addScaledVector(g,x),M=new re().setFromUnitVectors(pp,m.clone().sub(l).normalize());r.quaternion.copy(M),o.quaternion.copy(M).invert().multiply(new re().setFromUnitVectors(pp,u.clone().sub(m).normalize())),t.updateMatrixWorld(!0);let R=new re().setFromAxisAngle(X1,i.yaw).multiply(new re().setFromAxisAngle(new C(1,0,0),i.pitch??0));a.quaternion.copy(o.getWorldQuaternion(new re).invert().multiply(R))}};var xp=new C(0,-1,0),Xc=s=>new C(...s),Cu={head:"Head",torso:"Torso",leftArm:"LeftUpperArm",rightArm:"RightUpperArm",leftForearm:"LeftForearm",rightForearm:"RightForearm",leftLeg:"LeftThigh",rightLeg:"RightThigh",leftShin:"LeftShin",rightShin:"RightShin"},qc=["Hips","Torso","Head","LeftUpperArm","RightUpperArm","LeftForearm","RightForearm","LeftHand","RightHand","LeftThigh","RightThigh","LeftShin","RightShin","LeftFoot","RightFoot"];function li(s){for(let t=s;t;t=t.parent)if(!t.visible)return!1;return!0}function Es(s){s.updateMatrixWorld(!0);let t=new Ce;return s.traverse(e=>{!e.isMesh||!li(e)||(e.geometry.boundingBox||e.geometry.computeBoundingBox(),t.union(e.geometry.boundingBox.clone().applyMatrix4(e.matrixWorld)))}),t}var wr=class{constructor(t,e,n,i=!1){this.prefix=e,this.gait=new Wc(i),this.root=t.clone(!0),this.bones={},this.bind={},this.meshes=[],this.materials=[],this.grips={};let r=new Map;this.root.traverse(o=>{if(o.isMesh){o.castShadow=!0,o.receiveShadow=!0;let a=o.material;if(!r.has(a)){let l=a.clone();l.roughness=.92,i&&(l.clippingPlanes=[new nn(new C(0,1,0),.012)],l.clipShadows=!0),r.set(a,l),this.materials.push({mat:l,color:l.color.clone()})}o.material=r.get(a);let c="torso";for(let l=o;l&&l!==this.root;l=l.parent){let d=Object.entries(Cu).find(([,f])=>l.name===e+"_"+f);if(d){c=d[0];break}}o.userData.part=c,this.meshes.push(o)}});for(let o of qc){let a=this.root.getObjectByName(e+"_"+o);if(!a)throw new Error("Missing articulated node "+e+"_"+o);this.bones[o]=a,this.bind[o]={position:a.position.clone(),quaternion:a.quaternion.clone()}}n.add(this.root)}reset(){for(let t of qc){let e=this.bones[t];e.position.copy(this.bind[t].position),e.quaternion.copy(this.bind[t].quaternion),e.visible=!0}this.grips={}}arm(t,e,n){let i=this.bones[t+"UpperArm"],r=this.bones[t+"Forearm"];this.root.updateMatrixWorld(!0);let o=this.root.localToWorld(Xc(e)),a=i.parent.worldToLocal(o),c=i.position.clone(),l=a.clone().sub(c),d=ze(l.length(),.045,.578),f=l.normalize(),h=(.3*.3-.28*.28+d*d)/(2*d),u=Math.sqrt(Math.max(0,.3*.3-h*h)),p=Xc(n||[t==="Left"?.9:-.9,-.2,-.1]);p.addScaledVector(f,-p.dot(f)).normalize();let x=c.clone().addScaledVector(f,h).addScaledVector(p,u),g=new re().setFromUnitVectors(xp,x.clone().sub(c).normalize()),m=new re().setFromUnitVectors(xp,a.clone().sub(x).normalize());i.quaternion.copy(g),r.quaternion.copy(g).invert().multiply(m),this.grips[t]=e}hero(t,e,n=0){t.hero.pose==="dying"&&!this.deathPose&&(this.deathPose=this.previousHeroPose),t.hero.pose!=="dying"&&(this.deathPose=null),this.reset();let i=t.hero,r=this.bones,o=i.actionProgress??0,a=i.doorway?1:i.doorApproach?at(.85,.35,i.position[2]):0;if(this.root.visible=i.visible,!i.visible){this.gait.clear();return}this.root.position.fromArray(i.position),this.root.rotation.set(0,i.facing,0);let c=[-.25,.79,.03],l=[.25,.79,.03],d=(u,p=.65)=>{r.Hips.position.y=gt(.86,.42,u),r.LeftThigh.rotation.x=r.RightThigh.rotation.x=-1.1*u,r.LeftShin.rotation.x=r.RightShin.rotation.x=2.2*u,r.LeftFoot.rotation.x=r.RightFoot.rotation.x=-1.1*u,r.Torso.rotation.x=p*u},f=["walk","idle","aim","gun-low","carry-bowl","carry-box","tools","push-cart","clear-jam"].includes(i.pose),h;if(f){h=this.gait.update(this.root,r,e,i.speed);let u=(h.side==="Left"?1:-1)*h.load;c[2]+=(i.doorway?.035:.14)*u,l[2]-=(i.doorway?.035:.14)*u,r.Torso.rotation.x+=Math.min(.09,i.speed*.035)}else this.gait.clear();if(i.pose==="sigh"){let u=at(.05,.22,o)*(1-at(.62,.9,o)),p=at(.4,.72,o);r.Hips.position.y=.86-.015*p,r.Torso.rotation.x=.04+.055*p,r.Head.rotation.x=.04+.12*u,c=[gt(-.25,-.055,u),gt(.79,1.62,u),gt(.03,.19,u)],l=[.3,.92-.08*p,-.025]}if(i.pose==="eat"||i.pose==="sit-down"||i.pose==="stand-up"){let u=i.pose==="eat"?1:i.seated;r.LeftThigh.rotation.x=r.RightThigh.rotation.x=-1.24*u,r.LeftShin.rotation.x=r.RightShin.rotation.x=1.24*u,r.Head.rotation.x=.12;let p=t.t>=Wt.fastEat,x=p?.55:1.6,g=e/x%1,m=at(.08,.3,g)*(1-at(.6,.85,g));this.eating=m,c=[-.05,gt(1.2,1.52,m),gt(.54,.32,m)],l=[.2,1.23,.44],r.Head.rotation.x+=.035*m,this.spoonDirection=[0,gt(-.07,.03,m),gt(.18,-.18,m)],r.Head.rotation.y-=.5*at(Wt.firstCrack,Wt.firstCrack+.18,t.t)*(1-at(Wt.firstCrack+.5,Wt.firstCrack+.9,t.t)),i.pose!=="eat"&&(r.Torso.rotation.x=.18*Math.sin(o*Math.PI),r.Head.rotation.x=.08,c=[-.15,1.08,.4],l=[.15,1.08,.4])}if(i.pose==="carry-bowl"&&(c=[-.15,1.08,.4],l=[.15,1.08,.4],r.Head.rotation.x=.08),i.pose==="carry-box"&&(r.Torso.rotation.x=.1,r.Head.rotation.x=.08,c=[-.32,1.04,.43],l=[.32,1.04,.43]),i.pose==="bin-remove"){let u=at(0,.11,o)*(1-at(.5,.94,o));d(u,.9),r.Head.rotation.x=.12+.1*u,c=[-.32,gt(1.04,.295,u),.43],l=[.32,gt(1.04,.295,u),.43]}if(i.pose==="uncover-cart"||i.pose==="cover-cart"){let u=i.pose==="cover-cart"?1-at(.1,.68,o):.45+.3*Math.sin(o*Math.PI);d(u,.75),i.pose==="cover-cart"&&(r.Hips.position.y=gt(.86,.3,u)),r.Head.rotation.x=.16,c=[-.2,.98,.35],l=[.2,.98,.35]}if((i.pose==="unfold-handle"||i.pose==="fold-handle")&&(d(i.pose==="unfold-handle"?.8:.32,.9),c=[-.2,1.02,.33],l=[.2,1.02,.33],r.Head.rotation.x=.15),i.pose==="cart-start"&&(d(.55,.95),c=[-.2,.88,.45],l=[.28,1.02,.2]),(i.pose==="push-cart"||i.pose==="clear-jam")&&(r.Torso.rotation.x=(t.cart?.operator?.34:.22)+(i.pose==="clear-jam"?.06*Math.sin(o*Math.PI):0),r.Head.rotation.x=.05,c=[-.28,1.02,.2],l=[.28,1.02,.2]),(i.pose.startsWith("cook-")||["window-open","window-close","stove-on"].includes(i.pose))&&(r.Hips.position.y=.74,r.Torso.rotation.x=.3,r.Head.rotation.x=.12,r.LeftThigh.rotation.x=r.RightThigh.rotation.x=-.55,r.LeftShin.rotation.x=r.RightShin.rotation.x=1.05,r.LeftFoot.rotation.x=r.RightFoot.rotation.x=-.5,c=[-.12,1.18,.36],l=[.31,.9,.3],r.Head.rotation.y=i.pose==="cook-stir"?Math.sin(e*2.5)*.045:0,(i.pose==="window-open"||i.pose==="window-close")&&(d(.85,.85),r.Head.rotation.x=.1,c=[-.12,.9,.47],l=[.26,.83,.1]),i.pose==="stove-on"&&(c=[-.12,.93,.38],l=[.26,.88,.3],r.Hips.position.y=.66,r.Torso.rotation.x=.45),i.pose==="cook-serve")){let u=at(.4,.85,o);c=[gt(-.12,-.15,u),gt(1.2,1.08,u),gt(.35,.4,u)],l=[gt(.31,.15,u),gt(.9,1.08,u),gt(.3,.4,u)]}if(i.pose==="aim"||i.pose==="gun-low"){let u=i.pose==="gun-low";c=u?[-.31,1.06,.12]:[-.09,1.19,.31],l=u?[.27,.79,.03]:[-.01,1.22,.57],r.Torso.rotation.x=u?.03:.25,r.Torso.rotation.z=-.035,r.Head.rotation.x=u?.06:-.025,u||(l[2]-=(t.pump??0)*.12*.78,r.Torso.rotation.x-=n*.055,r.RightUpperArm.rotation.z-=n*.04)}if((i.pose==="tools"||i.pose==="power-off")&&(c=[-.25,1.04,.15],l=[.31,.84,.02],i.pose==="power-off"&&(r.Head.rotation.y=-.35,c=[-.25,1.25,.4])),i.pose==="set-bucket"||i.pose==="lift-bucket"){let u=i.pose==="set-bucket",p=at(0,u?.3:.25,o),x=at(u?.74:.3,u?1:.88,o);r.Hips.position.y=u?gt(gt(.79,.5,p),.7,x):gt(gt(.7,.5,p),.79,x),r.Torso.rotation.x=u?gt(.35*p,.5,x):gt(gt(.5,.35,p),.03,x),r.Head.rotation.x=.18,c=[-.25,1.04,.15],l=u?[.31,.84,.02]:[gt(.025,.31,p),gt(.79,.84,p),gt(.5,.02,p)]}if(i.pose==="shovel"){let u=o*3%1,p=at(0,.25,u)*(1-at(.7,1,u));r.Hips.position.y=.7,r.LeftThigh.rotation.x=r.RightThigh.rotation.x=-.75,r.LeftShin.rotation.x=r.RightShin.rotation.x=1.25,r.LeftFoot.rotation.x=r.RightFoot.rotation.x=-.5,r.Torso.rotation.x=.5+.08*p,r.Head.rotation.x=.2,c=[-.025,1.07-.05*p,.32+.1*p],l=[.025,.79-.05*p,.5+.1*p],this.shovelStroke=p}if(i.doorAction){let u=i.doorAction,p=u.weight;r.Torso.rotation.x+=(u.side==="inside"?.18:.12)*p,r.Head.rotation.y+=(u.hand==="Right"?-.32:.32)*p,r.Head.rotation.x+=.06*p}if(i.hurt&&(r.Torso.rotation.x-=i.hurt*.12,r.Head.rotation.z+=i.hurt*.1),i.pose==="dying"){let u=i.deathProgress;r.Hips.rotation.x=u*1.53,r.Hips.position.y=gt(.805,.19,u),r.Torso.rotation.x=.08,r.Head.rotation.x=.08,r.LeftThigh.rotation.x=-.18*u,r.RightThigh.rotation.x=-.1*u,r.LeftShin.rotation.x=.35*u,r.RightShin.rotation.x=.2*u,c=[-.3,gt(1.16,.12,u),gt(.2,.62,u)],l=[.3,gt(1.12,.12,u),gt(.23,.7,u)]}this.root.updateMatrixWorld(!0);for(let{mat:u,color:p}of this.materials)u.color.copy(p).lerp(new _t("#b72b35"),(i.hurt??0)*.3);if(["set-bucket","lift-bucket","bin-remove","uncover-cart","cover-cart","unfold-handle","fold-handle","cart-start","window-open","window-close","stove-on","cook-add","cook-stir","cook-toss","cook-serve"].includes(i.pose))for(let u of["Left","Right"]){let p=this.root.localToWorld(Xc([u==="Left"?.11:-.11,.06,.045]));this.gait.leg(this.root,r,u,{point:p,yaw:i.facing})}for(let u of["Right","Left"]){let p=u==="Right"?c:l,x=t.handWorld?.[u];if(x){let M=this.root.worldToLocal(Xc(x.point)).toArray();p=p.map((R,y)=>gt(R,M[y],x.weight))}let g;i.doorAction?.hand===u&&(g=[u==="Right"?.9:-.9,-.1,-.6]),this.arm(u,p,g??(i.doorway||i.doorApproach?[gt(u==="Left"?.9:-.9,u==="Left"?-.6:.6,a),gt(-.2,-.1,a),gt(-.1,-.8,a)]:void 0));let m=this.bones[u+"Hand"];if(m.rotation.x=x?-.18:0,i.doorway||i.doorApproach){this.root.updateMatrixWorld(!0);let M=m.parent.getWorldQuaternion(new re).invert().multiply(this.root.getWorldQuaternion(new re)).multiply(new re().setFromAxisAngle(new C(1,0,0),x?-.18:0));m.quaternion.slerp(M,a)}}if(this.root.updateMatrixWorld(!0),i.pose==="dying"){if(this.deathPose)for(let p of qc){let x=r[p],g=this.deathPose[p],m=x.position.clone(),M=x.quaternion.clone();x.position.copy(g.position).lerp(m,i.deathProgress),x.quaternion.copy(g.quaternion).slerp(M,i.deathProgress)}this.root.updateMatrixWorld(!0);let u=new Ce;for(let p of this.meshes)u.union(new Ce().setFromObject(p));r.Hips.position.y+=Math.max(0,i.position[1]+.015-u.min.y),this.root.updateMatrixWorld(!0)}else this.previousHeroPose=Object.fromEntries(qc.map(u=>[u,{position:r[u].position.clone(),quaternion:r[u].quaternion.clone()}]))}zombie(t,e){if(this.reset(),this.root.scale.setScalar(1),this.root.visible=t.visible,!t.visible){this.gait.clear();return}this.root.position.fromArray(t.position),this.root.rotation.set(0,t.facing,0);let n=this.bones,i=["leftLeg","rightLeg","leftShin","rightShin"].some(l=>t.detached.has(l));t.emergence>=.999&&t.fall===0&&!i?this.gait.update(this.root,n,e,t.walking?t.speed??.34:0):this.gait.clear(),n.Torso.rotation.x=.12,n.Head.rotation.z=Math.sin(e*1.7)*.07;let r=t.emergence,o=[-.32,1.03+Math.sin(e*1.1)*.025,.53],a=[.32,1.1+Math.sin(e*1.1+.8)*.025,.47];if(r<.99){let l=ze((r-.78)/.22),d=gt(-t.position[1]+.07,1.03,l);n.Hips.position.y=gt(.6,.86,ze((r-.7)/.3)),o=[-.4,d,.45],a=[.4,d,.45],n.Torso.rotation.x=.3*(1-l)}if(t.attack&&t.alive){let l=t.attack.progress,d=at(0,.22,l)*(1-at(.24,.38,l)),f=at(.24,.39,l)*(1-at(.54,.92,l));n.Torso.rotation.x=.12+.24*f,n.Torso.rotation.y=(t.attack.side==="Left"?-1:1)*(.14*d-.1*f),n.Head.rotation.x=.08*f;let h=u=>[u==="Left"?.25:-.25,gt(1.06,1.22,d)-.09*f,gt(.45,.18,d)+.15*f];t.attack.side==="Left"?a=h("Left"):o=h("Right"),t.attack.side==="Bite"&&(n.Head.rotation.x=.28*f,n.Torso.rotation.x+=.1*f)}(t.detached.has("leftLeg")||t.detached.has("rightLeg")||t.detached.has("leftShin")||t.detached.has("rightShin"))&&(n.Hips.position.y=.5,n.Torso.rotation.x=.48,o=[-.3,.5,.65],a=[.3,.5,.65]),this.arm("Right",o),this.arm("Left",a),t.fall>0&&(n.Hips.rotation.x=t.fall*1.53,n.Hips.position.y=gt(n.Hips.position.y,.19,t.fall),n.LeftUpperArm.rotation.z+=t.fall*.25,n.RightUpperArm.rotation.z-=t.fall*.28);for(let l of t.detached){let d=this.bones[Cu[l]];d&&l!=="torso"&&(d.visible=!1)}let c=t.charred?.84:0;for(let{mat:l,color:d}of this.materials)l.color.copy(d).lerp(new _t("#333031"),c);this.root.updateMatrixWorld(!0)}part(t){return this.bones[Cu[t]||"Torso"]}};var se=s=>new C(...s),es=()=>new re;function Yc(s){let t=new mn;return s.add(t),t}var Sn=(s,t)=>se(t).applyAxisAngle(se([0,1,0]),s.facing).add(se(s.position)),Zc=class{constructor(t,e,n){this.scene=t,this.hero=e;let i=(f,h=t)=>{let u=n.getObjectByName(f);if(!u)throw new Error("Missing Blender prop "+f);let p=u.clone(!0);return p.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),h.add(p),p};this.gun=i("Gun",e.root),this.gun.scale.setScalar(ai.scale),this.gun.visible=!1,this.pump=this.gun.getObjectByName("ShotgunPump"),this.pumpNeutral=this.pump.position.clone(),this.muzzle=new pe,this.muzzle.position.set(0,.01,.72),this.gun.add(this.muzzle),this.flash=Yc(this.muzzle);let r=new Me(new Wi(.105,.25,5),new Te({color:"#f9df8b"}));r.rotation.x=Math.PI/2,r.position.z=.12,this.flash.add(r);let o=new Me(new Wi(.05,.14,4),new Te({color:"#fff3c1"}));o.rotation.x=Math.PI/2,o.position.z=.07,this.flash.add(o),this.flash.visible=!1,this.flashLight=new ti("#f6bd68",0,2,2),this.muzzle.add(this.flashLight),this.bowl=i("DinnerBowl"),this.food=this.bowl.getObjectByName("DinnerFood"),this.spoon=i("Spoon"),this.box=i("CollectionBox"),this.box.scale.setScalar(.8),this.boxContents=[0,1,2].map(f=>this.box.getObjectByName("BoxLoad_"+f)),this.bucket=i("TarBucket"),this.shovel=i("Shovel"),this.cart=i("HarvesterCart"),this.cover=i("HarvesterCover"),this.handle=this.cart.getObjectByName("HandlePivot"),this.wheels=["FL","FR","RL","RR"].map(f=>this.cart.getObjectByName("HarvesterWheel_"+f)),this.slats=Array.from({length:12},(f,h)=>this.cart.getObjectByName("ConveyorSlat_"+h)),this.vacuum=this.cart.getObjectByName("VacuumRotor"),this.roller=this.cart.getObjectByName("IntakeRoller"),this.crusher=this.cart.getObjectByName("HarvesterCrusher"),this.brushes=Array.from({length:12},(f,h)=>this.cart.getObjectByName("SuctionBrush_"+h)),this.wings=["L","R"].map(f=>this.cart.getObjectByName("IntakeWing_"+f)),this.steam=Yc(t),this.steamPuffs=[];for(let f=0;f<7;f++){let h=new Me(new Bn(.07,.1),new Te({color:"#c6c4ac",transparent:!0,opacity:.35,depthWrite:!1,side:De}));this.steam.add(h),this.steamPuffs.push(h)}this.cookingSmoke=Yc(t),this.smokePuffs=[];let a=new Zr(1,7);for(let f=0;f<13;f++){let h=new Me(a,new Te({color:f%3?"#bfc3b3":"#dfd5b9",transparent:!0,opacity:0,depthWrite:!1,side:De}));this.cookingSmoke.add(h),this.smokePuffs.push(h)}this.sleep=Yc(t),this.sleepSigns=[];let c=[],l=[];["11111","00010","00100","01000","11111"].forEach((f,h)=>[...f].forEach((u,p)=>{if(u!=="1")return;let x=c.length/3,g=(p-2)*.2,m=(2-h)*.2;c.push(g-.1,m-.1,0,g+.1,m-.1,0,g+.1,m+.1,0,g-.1,m+.1,0),l.push(x,x+1,x+2,x,x+2,x+3)}));let d=new Ee;d.setAttribute("position",new ye(c,3)),d.setIndex(l);for(let f=0;f<3;f++){let h=new Me(d,new Te({color:"#27344b",side:De}));h.scale.setScalar(.43-f*.07),this.sleep.add(h),this.sleepSigns.push(h)}}world(t,e){t.position.copy(this.hero.root.localToWorld(se(e))),t.quaternion.copy(this.hero.root.getWorldQuaternion(es()))}point(t,e=[0,0,0]){return t.localToWorld(se(e)).toArray()}grip(t,e,n,i=1){t.handWorld??={},t.handWorld[e]={point:n,weight:i}}kitchenNodes(){this.pan||(this.pan=this.scene.getObjectByName("Pan"),this.pan&&(this.panBase=this.pan.position.clone(),this.stir=this.scene.getObjectByName("StirSpoon"),this.stirBase=this.stir.position.clone(),this.sash=this.scene.getObjectByName("WindowSashPivot"),this.burner=this.scene.getObjectByName("StoveBurner")))}setupMachine(t,e){let n=t.hero,i=n.actionProgress??0,r=t.cleanup;t.handWorld={},this.kitchenNodes();let o=n.doorAction,a=o?.weight??0,c=o?.hand==="Left"?"Right":"Left",l=c==="Left"?1:-1,d=n.pose==="carry-bowl"&&n.position[1]>.45&&Math.cos(n.facing)>.5?at(.8,.25,Math.hypot(n.position[0]-oi[0],n.position[2]-oi[2]))*(1-at(.5,.9,t.door)):0,f=n.pose==="carry-bowl"&&n.doorApproach&&Math.cos(n.facing)<-.5?at(.65,.12,n.position[2]):0,h=n.pose==="carry-bowl"&&o?1-at(.6,.95,o.amount):0,u=Math.max(a,d,f,h),p=a>0?l:1,x=n.pose==="gun-low";if(x)this.gun.position.set(-.22,1.12,.25),this.gun.rotation.set(.55,.25,0,"YXZ");else{let w=-.08;if(t.aimTarget){let _=se(t.aimTarget).sub(se(n.position)).applyAxisAngle(se([0,1,0]),-n.facing).sub(se(ai.butt));w=ze(-Math.atan2(_.y-.035*ai.scale,Math.hypot(_.x,_.z)),-.45,.9)}this.gun.rotation.set(w,ai.yaw,0,"YXZ"),this.gun.position.copy(se(ai.butt).sub(se([0,-.035,-.5]).multiplyScalar(ai.scale).applyQuaternion(this.gun.quaternion)))}if(x){let w=Math.max(at(0,.2,n.position[1]),n.doorway||o?1:n.doorApproach?at(0,.25,i):0),_=o?.hand==="Right"?a:0;this.gun.position.lerp(se([gt(-.31,.31,_),1.02,.08]),w);let A=es().setFromEuler(new $e(-Math.PI/2,0,0,"YXZ"));this.gun.quaternion.slerp(A,w)}if(t.dead){let w=at(.08,.8,t.deathAge);this.gun.position.lerp(se([-.52,.08,.4]),w),this.gun.quaternion.slerp(es().setFromEuler(new $e(0,.35,Math.PI/2)),w)}if(this.pump.position.copy(this.pumpNeutral),this.pump.position.z-=(t.pump??0)*.12,this.gun.updateMatrix(),n.pose==="aim"||x){let w=se([-.035,-.09,-.005]).applyMatrix4(this.gun.matrix);if(this.grip(t,"Right",Sn(n,w.toArray()).toArray()),x&&o?.hand==="Right"&&this.grip(t,"Left",Sn(n,se([.035,-.09,-.005]).applyMatrix4(this.gun.matrix).toArray()).toArray(),a),!x){let _=this.pump.position.clone().add(se([.065,-.025,0])).applyMatrix4(this.gun.matrix);this.grip(t,"Left",Sn(n,_.toArray()).toArray())}}this.cart.position.fromArray(t.cart.position),this.cart.rotation.set(0,t.cart.facing,0);let g=t.handleOpen?0:2;n.pose==="unfold-handle"&&(g=2*(1-at(.22,.85,i))),n.pose==="fold-handle"&&(g=2*at(.2,.88,i)),this.handle.rotation.x=g;let m=t.cartRunning,M=n.pose==="clear-jam",R=m?e*7:M?-e*4:0;if(this.wheels.forEach(w=>w.rotation.set(t.cart.distance/.17,(t.cart.wheelFacing??t.cart.facing)-t.cart.facing,0,"YXZ")),this.vacuum&&(this.vacuum.rotation.y=R*3),this.brushes.forEach((w,_)=>{w&&(w.rotation.x=t.grinding?Math.sin(e*25+_)*.1:0)}),this.roller.rotation.x=R*1.5,this.crusher.rotation.x=R*2,this.wings.forEach((w,_)=>w.rotation.z=(_?-1:1)*1.48*(m&&!t.cart.tight?0:1)),this.slats.forEach((w,_)=>{let P=((_/12+(m?e*.9:M?-e*.45:0))%1+1)%1;w.position.set(0,.18+.46*P,.61-.69*P)}),this.cart.updateMatrixWorld(!0),["push-cart","clear-jam"].includes(n.pose)&&(t.cart.operator?this.grip(t,"Right",this.point(this.cart,[t.cart.operator===1?.32:-.32,.86,-.2])):(this.grip(t,"Right",this.point(this.cart.getObjectByName("HarvesterHandle_R"))),this.grip(t,"Left",this.point(this.cart.getObjectByName("HarvesterHandle_L"))))),["unfold-handle","fold-handle"].includes(n.pose)){let w=at(0,.2,i)*(1-at(.88,1,i));this.grip(t,"Right",this.point(this.cart.getObjectByName("HandleFoldGrip")),n.pose==="unfold-handle"?at(0,.15,i)*(1-at(.4,.6,i)):1-at(.25,.5,i))}n.pose==="cart-start"&&this.grip(t,"Right",this.point(this.cart.getObjectByName("PowerButton")),Math.sin(i*Math.PI)),this.cover.position.fromArray(Ss),this.cover.quaternion.identity(),this.cover.scale.setScalar(1);let y=se([-4.25,.12,1.43]);if(t.coverMode==="stowed"&&(this.cover.position.copy(y),this.cover.scale.set(.28,.25,.45)),["lifting","covering"].includes(t.coverMode)){let w=t.coverMode==="lifting"?at(.24,.85,i):1-at(.12,.82,i);this.cover.position.lerp(y,w),this.cover.position.y+=Math.sin(w*Math.PI)*.68,this.cover.scale.set(gt(1,.28,w),gt(1,.25,w),gt(1,.45,w)),this.cover.rotation.z=-.18*Math.sin(w*Math.PI),this.cover.updateMatrixWorld(!0);let _=at(0,.16,i)*(1-at(.55,.72,i));this.grip(t,"Right",this.point(this.cover,[-.34,.61,.38]),_),this.grip(t,"Left",this.point(this.cover,[-.34,.61,-.38]),_)}if(this.box.visible=t.boxMode!=="hidden",this.box.position.copy(se(Gn(t.cart,[0,.235,-.42]))),this.box.rotation.set(0,t.cart.facing,0),t.boxMode==="remove"){let w=at(.17,.48,i),_=at(.48,.9,i);this.box.position.copy(se(Gn(t.cart,[0,.235,-.42-.35*w]))).lerp(Sn(n,[0,.99,.2]),_),this.box.quaternion.slerp(es().setFromAxisAngle(se([0,1,0]),n.facing),_)}else t.boxMode==="carry"?(this.box.position.copy(Sn(n,[l*.56*a,.99,gt(.2,.08,a)])),this.box.rotation.set(0,n.facing,0)):t.boxMode==="store"&&(this.box.visible=!1);if(this.box.updateMatrixWorld(!0),["remove","carry"].includes(t.boxMode)){let w=t.boxMode==="carry"?1:at(0,.16,i);this.grip(t,"Right",this.point(this.box,[gt(-.4,.4,c==="Right"?a:0),.06,0]),w),this.grip(t,"Left",this.point(this.box,[gt(.4,-.4,c==="Left"?a:0),.06,0]),w)}this.bowl.visible=t.foodMode!=="hidden",this.spoon.visible=this.bowl.visible;let S=se([.72,.895,.34]),T=Sn(n,[p*.42*u,gt(1.1,1.05,u),gt(.43,.08,u)]);if(this.bowl.position.copy(T),this.bowl.rotation.set(0,n.facing,0),t.foodMode==="table"&&this.bowl.position.copy(S),t.foodMode==="set-table"||t.foodMode==="lift-table"){let w=t.foodMode==="set-table"?at(.25,.8,i):1-at(.12,.65,i);this.bowl.position.lerp(S,w)}if(this.bowl.updateMatrixWorld(!0),t.foodMode==="table"&&this.grip(t,"Left",this.point(this.bowl,[.15,-.02,0])),["carry","set-table","lift-table"].includes(t.foodMode)){let w=n.pose==="cook-serve"?at(.45,.85,i):1;this.grip(t,"Right",this.point(this.bowl,[gt(-.15,.12,p<0?u:0),-.02,0]),w),this.grip(t,"Left",this.point(this.bowl,[gt(.15,-.12,p>0?u:0),-.02,0]),w)}if(t.hasTools){let w=n.pose==="shovel"?at(0,.25,i*3%1)*(1-at(.7,1,i*3%1)):0,_=n.pose==="shovel"?1:n.pose==="set-bucket"?at(.75,1,i):n.pose==="lift-bucket"?1-at(0,.2,i):0,A=n.pose==="shovel"?1:n.pose==="set-bucket"?at(.15,.74,i):n.pose==="lift-bucket"?1-at(.3,.88,i):0;if(this.bucket.position.copy(Sn(n,[gt(.31,.43,A),gt(.48,.17,A),gt(.02,-.08,A)])),this.bucket.rotation.set(0,n.facing,0),this.shovel.position.copy(Sn(n,[gt(-.25,0,_),gt(1.04,.82-.05*w,_),gt(.15,.47+.1*w,_)])),this.shovel.quaternion.setFromAxisAngle(se([0,1,0]),n.facing).multiply(es().setFromEuler(new $e(-.55*_,0,-.06*(1-_)))),n.doorway&&(this.bucket.position.lerp(Sn(n,[.16,.58,.34]),1),this.shovel.position.lerp(Sn(n,[-.16,1.08,.33]),1),this.shovel.quaternion.slerp(es().setFromAxisAngle(se([0,1,0]),n.facing),1)),o){let P=[l*.42,1.04,.08];this.bucket.position.lerp(Sn(n,[P[0],P[1]-.36,P[2]]),a),this.shovel.position.lerp(Sn(n,P),a),this.shovel.quaternion.slerp(es().setFromAxisAngle(se([0,1,0]),n.facing),a)}this.bucket.updateMatrixWorld(!0),this.shovel.updateMatrixWorld(!0),this.grip(t,"Right",this.point(this.shovel,[0,.29*_,0])),n.pose==="shovel"?this.grip(t,"Left",this.point(this.shovel,[0,-.035,0])):this.grip(t,"Left",this.point(this.bucket,[0,.36,0]),n.pose==="set-bucket"?1-at(.74,.9,i):n.pose==="lift-bucket"?at(.05,.26,i):1)}if(o&&t.hasTools){let w=Sn(n,[l*.42,1.04,.08]).toArray(),_=t.handWorld[c]?.point??w;this.grip(t,c,se(_).lerp(se(w),a).toArray())}if(this.pan){this.pan.position.copy(this.panBase),this.pan.rotation.set(0,0,0),this.stir.position.copy(this.stirBase),this.stir.rotation.set(0,0,0),this.stir.visible=t.cooking,this.burner&&this.burner.traverse(_=>{_.name.startsWith("BurnerFlameJet")&&(_.visible=t.burnerOn)});let w=this.pan.getObjectByName("KitchenFood");if(w&&(w.position.y=0,w.visible=t.t>=20.85&&t.t<25.1),n.pose==="cook-stir"){let _=e*5.1;this.stir.position.x+=Math.sin(_)*.065,this.stir.position.z+=Math.cos(_)*.065,this.stir.rotation.set(Math.cos(_)*.16,0,Math.sin(_)*.16)}if(n.pose==="cook-toss"){let _=Math.sin(i*Math.PI);this.pan.position.y+=_*.095,this.pan.position.z-=_*.05,this.pan.rotation.x=-_*.25;let A=this.pan.getObjectByName("KitchenFood");A&&(A.position.y=Math.max(0,Math.sin((i-.15)*Math.PI*1.4))*.13)}if(this.pan.updateMatrixWorld(!0),this.stir.updateMatrixWorld(!0),["cook-stir","cook-toss","cook-add"].includes(n.pose)){let _=n.pose==="cook-add"?at(0,.6,i):1;this.grip(t,"Left",this.point(this.pan.getObjectByName("PanGrip")),_),this.grip(t,"Right",this.point(this.stir.getObjectByName("CookingStirGrip")),_)}if(n.pose==="stove-on"){let _=this.scene.getObjectByName("KitchenStoveKnob");_&&this.grip(t,"Right",this.point(_),at(.05,.3,i)*(1-at(.8,1,i)))}if(n.pose==="window-open"||n.pose==="window-close"){let _=n.pose==="window-open"?1-at(.2,.48,i):at(.62,.86,i)*(1-at(.9,1,i));this.sash&&this.grip(t,"Right",this.point(this.sash,[0,-1.09,.074]),_)}}if(o){let w=t.handWorld[o.hand];w?this.grip(t,o.hand,se(w.point).lerp(se(o.point),o.weight).toArray()):this.grip(t,o.hand,o.point,o.weight)}}update(t,e,n){let i=t.hero,r=i.actionProgress??0;this.gun.visible=t.gunVisible&&i.visible;let o=i.pose==="gun-low",a=n?e-n.time:100;this.flash.visible=this.gun.visible&&a>=0&&a<.085,this.flashLight.intensity=this.flash.visible?2.2:0,this.flash.rotation.z=n?n.time*13:0,this.food.visible=t.t<Wt.stand-.3,t.foodMode==="table"?(this.world(this.spoon,this.hero.grips.Right||[-.05,1.4,.37]),this.spoon.quaternion.multiply(es().setFromUnitVectors(se([0,0,1]),se(this.hero.spoonDirection||[0,-.07,.18]).normalize()))):this.bowl.visible&&(this.spoon.position.copy(this.bowl.localToWorld(se([0,.06,0]))),this.spoon.quaternion.copy(this.bowl.quaternion),this.spoon.rotateY(Math.PI/2)),this.boxContents.forEach((c,l)=>{c.visible=t.boxLoads>l,c.scale.y=ze(t.boxLoads-l,.02,1)}),this.bucket.visible=t.hasTools&&i.visible,this.shovel.visible=this.bucket.visible,this.steam.visible=t.cooking||this.bucket.visible,t.cooking&&this.pan?this.steam.position.copy(this.pan.localToWorld(se([0,.11,0]))):this.steam.position.copy(this.bucket.position),this.steamPuffs.forEach((c,l)=>{let d=(e*.4+l/7)%1;c.position.set(Math.sin(e*1.1+l)*.065,.04+d*.42,Math.cos(e+l)*.04),c.scale.setScalar(.8+d),c.material.opacity=(1-d)*.25}),this.cookingSmoke.visible=t.cooking&&t.windowOpen>.6,this.smokePuffs.forEach((c,l)=>{let d=((e-20.65)*.46+l/13)%1;c.position.set(-2.97-d*.2+Math.sin(d*7+l)*.055,1.98+d*1.55,-.36+.98*(1-Math.exp(-d*4)));let f=.065+d*.19;c.scale.set(f*(1+Math.sin(l)*.12),f*.82,1),c.material.opacity=at(0,.08,d)*(1-at(.38,1,d))*.4*at(20.65,21.05,e)}),this.sleep.visible=t.sleeping,this.sleepSigns.forEach((c,l)=>{let d=(e*.2+l*.27)%1;c.position.set(-2.8+.16*l+Math.sin(e+l)*.035,3.82+l*.28+d*.15,-.8)})}aim(t){if(!this.gun.visible)return;let e=this.hero.root.worldToLocal(t.clone()),n=e.sub(this.gun.position);this.gun.rotation.x=-Math.atan2(n.y,Math.hypot(n.x,n.z))}};var Ve=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},Lt=new pe,Kc=new Ce,Jc=new re,jc=new $e,$c=class{constructor(t){this.scene=t,this.debris=[],this.tracers=[];for(let n=0;n<24;n++){let i=new Ee;i.setAttribute("position",new Le(new Float32Array(6),3));let r=new Vi({color:"#f9df8b",transparent:!0,opacity:.8});r.color.multiplyScalar(2);let o=new _i(i,r);o.visible=!1,t.add(o),this.tracers.push(o)}this.bits=new Jn(new Gi(.035,.035,.035),new Te({color:"#ffffff"}),512),this.bits.instanceMatrix.setUsage(uo),this.bits.count=0,this.bits.frustumCulled=!1,t.add(this.bits),this.stains=new Jn(new Bn(.14,.14),new Te({color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}),512),this.stains.instanceMatrix.setUsage(uo),this.stains.count=0,this.stains.frustumCulled=!1,t.add(this.stains);let e=new Te({color:"#ffffff"});this.flames=new Jn(new Wi(.11,1,4),e,80),this.flames.instanceMatrix.setUsage(uo),this.flames.count=0,this.flames.frustumCulled=!1,t.add(this.flames),this.reminders=new Jn(new Kr(.83,1,16),new Te({color:"#b72b35",transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,side:De}),256),this.reminders.renderOrder=10,this.reminders.count=0,this.reminders.frustumCulled=!1,t.add(this.reminders)}detached(t,e,n,i){if(e==="torso")return null;let r=t.part(e);if(!r||!r.visible)return;t.root.updateMatrixWorld(!0);let o=r.clone(!0),a=new C,c=new re,l=new C;r.matrixWorld.decompose(a,c,l),o.position.copy(a),o.quaternion.copy(c),o.scale.copy(l),this.scene.add(o);let d=i*17+n.time*31,f=new C((Ve(d)-.5)*2.4,1.5+Ve(d+1)*1.6,(Ve(d+2)-.5)*2.4),h=(f.y+Math.sqrt(f.y**2+2*9.81*Math.max(.05,a.y-.12)))/9.81,u={id:"part-"+this.debris.length,type:"part",zombie:i,part:e,object:o,start:a,rotation:c,scale:l,velocity:f,land:h,time:n.time,site:dn[i].site,spin:new C((Ve(d+3)-.5)*8,(Ve(d+4)-.5)*7,(Ve(d+5)-.5)*8)},p=a.clone().addScaledVector(f,h+.108);p.y=.12,jc.set(u.spin.x*(h+.65),u.spin.y*(h+.65),u.spin.z*(h+.65)),Jc.setFromEuler(jc),o.quaternion.copy(c).multiply(Jc),o.position.copy(p),o.updateMatrixWorld(!0),Kc.setFromObject(o),p.y+=.025-Kc.min.y;let x=Kc.getCenter(new C),g=Kc.getSize(new C),m=xo([x.x,0,x.z],{radius:Math.hypot(g.x,g.z)*.5+.015,extra:yn(Pn)});return p.x+=m[0]-x.x,p.z+=m[2]-x.z,f.x=(p.x-a.x)/(h+.108),f.z=(p.z-a.z)/(h+.108),u.resting=p,o.position.copy(a),o.quaternion.copy(c),this.debris.push(u),u}restingItems(){return this.debris.map(t=>{let e=t.object.clone(!0);e.position.copy(t.resting),e.scale.copy(t.scale);let n=t.land+.65,i=new re().setFromEuler(new $e(t.spin.x*n,t.spin.y*n,t.spin.z*n));e.quaternion.copy(t.rotation).multiply(i),e.updateMatrixWorld(!0);let r=[];return e.traverse(o=>{if(!o.isMesh||!li(o))return;o.geometry.boundingBox||o.geometry.computeBoundingBox();let a=o.geometry.boundingBox;r.push(a.getCenter(new C).applyMatrix4(o.matrixWorld).toArray());for(let c of[a.min.x,a.max.x])for(let l of[a.min.y,a.max.y])for(let d of[a.min.z,a.max.z])r.push(new C(c,l,d).applyMatrix4(o.matrixWorld).toArray())}),{id:t.id,type:"part",zombie:t.zombie,part:t.part,position:Es(e).getCenter(new C).toArray(),contactCandidates:r}})}update(t,e,n,i){let r=t.harvestHints??[],o=1+Math.sin(e*5)*.08;this.reminders.count=Math.min(256,r.length),r.slice(0,256).forEach((h,u)=>{let p=(h.type==="body"?.48:.22)*o;Lt.position.set(h.position[0],.04,h.position[2]),Lt.rotation.set(-Math.PI/2,0,0),Lt.scale.set(p,p,1),Lt.updateMatrix(),this.reminders.setMatrixAt(u,Lt.matrix)}),this.reminders.instanceMatrix.needsUpdate=!0;let a=0;for(let h=0;h<this.tracers.length;h++){let u=n[n.length-1-h],p=this.tracers[h],x=u?e-u.time:100;if(p.visible=!!u&&x>=0&&x<.085,p.visible){let g=p.geometry.attributes.position.array;u.source.toArray(g,0),u.target.toArray(g,3),p.geometry.attributes.position.needsUpdate=!0,p.material.opacity=.8*(1-x/.085)}}for(let h=Math.max(0,n.length-9);h<n.length;h++){let u=n[h],p=e-u.time;if(!(p<0||p>.85||!u.hit))for(let x=0;x<30&&a<450;x++){let g=h*23+x*3,m=u.impacts?.[x%u.impacts.length]??u.target;Lt.position.copy(m).add(new C((Ve(g)-.5)*3.8*p,(1+Ve(g+1)*2.2)*p-4.905*p*p,(Ve(g+2)-.5)*3.8*p)),Lt.position.y=Math.max(.03,Lt.position.y),Lt.rotation.set(p*7+x,p*5+x,p*9);let M=Math.max(.15,1-p/.85)*(x%5===0?1.7:1);Lt.scale.set(M,M*.7,M),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t(x%3===0?"#b72b35":"#8f3c36")),a++}}for(let h of dn){let u=Pn.find(x=>x.id===h.site),p=t.t-h.birth;if(!(p<0||p>.7))for(let x=0;x<14&&a<480;x++){let g=x*Math.PI*.25;Lt.position.set(u.x+Math.cos(g)*(.4+p*.4),.05+Math.sin(p/.7*Math.PI)*.28,u.z+Math.sin(g)*(.4+p*.4)),Lt.rotation.set(x,p*5,x),Lt.scale.setScalar(1.3*(1-p/.9)),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t(x%2?"#5c6060":"#777b75")),a++}}for(let h of t.playerImpacts??[]){let u=e-h.time;if(!(u<0||u>.55))for(let p=0;p<16&&a<480;p++)Lt.position.fromArray(h.position).add(new C((Ve(p+71)-.5)*u*2.2,u*.8-4.905*u*u,(Ve(p+42)-.5)*u*2.2)),Lt.position.y=Math.max(.03,Lt.position.y),Lt.rotation.set(p,u*8,p),Lt.scale.setScalar(Math.max(.12,1-u/.55)),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t(p%2?"#b72b35":"#8f3c36")),a++}for(let h=0;h<n.length&&a<490;h++){let u=n[h],p=t.t-u.time-.34;p<0||p>1.25||(Lt.position.copy(u.source).add(new C(-.22-p*1.1,Math.max(-u.source.y+.04,p*1.8-4.905*p*p),p*.25)),Lt.rotation.set(p*14,p*8,p*13),Lt.scale.set(.8,1.8,.8),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t("#f2b65b")),a++)}if(t.grinding){for(let h=0;h<12;h++){let u=(t.t*3+h/12)%1;Lt.position.fromArray(Gn(t.cart,[(h%2?1:-1)*.33*(1-u),.055+Math.sin(u*Math.PI)*.055,.7-u*.27])),Lt.rotation.set(u*8,h,u*4),Lt.scale.setScalar((1-u)*.65),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t(h%3?"#8f3c36":"#777b75")),a++}for(let h=0;h<18;h++){let u=(t.t*3.2+h/18)%1;Lt.position.fromArray(Gn(t.cart,[(Ve(h)-.5)*.11,.68-u*u*.36,-.42])),Lt.rotation.set(h+u*8,h,u*5),Lt.scale.set(1.1,.7,1.1),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t(h%3?"#b56a65":"#d39183")),a++}for(let h=0;h<10;h++){let u=(t.t*.8+h*.13)%1;Lt.position.fromArray(Gn(t.cart,[(Ve(h+2)-.5)*u*.4,.65+u*.5-u*u,-.08+(Ve(h+4)-.5)*u*.3])),Lt.rotation.set(h,u*7,h),Lt.scale.setScalar((1-u)*.7),Lt.updateMatrix(),this.bits.setMatrixAt(a,Lt.matrix),this.bits.setColorAt(a,new _t("#b72b35")),a++}}this.bits.count=a,this.bits.instanceMatrix.needsUpdate=!0,this.bits.instanceColor&&(this.bits.instanceColor.needsUpdate=!0);let c=0;for(let h=0;h<t.zombies.length;h++){let u=t.zombies[h];if(!u.visible||!u.burning)continue;let p=i[h].root;for(let x=0;x<6;x++){let g=.5+.5*Math.sin(e*(9+x*.37)+h*4+x*2.8),m=.25+g*.36,M=new C(x%2?.12:-.12,gt(.35+x*.2,.2,u.fall),gt(0,.04+x*.18,u.fall));M.applyAxisAngle(new C(0,1,0),p.rotation.y),Lt.position.copy(p.position).add(M),Lt.position.y+=m*.5,Lt.rotation.set(0,x+e*.2,Math.sin(e*5+x)*.13),Lt.scale.set(.65+g*.5,m,.65+g*.5),Lt.updateMatrix(),this.flames.setMatrixAt(c,Lt.matrix);let R=new _t().setRGB(x%3===0?6:1.8,x%3===0?.8:.23,x%3===0?.08:.025);this.flames.setColorAt(c,R),c++}}this.flames.count=c,this.flames.instanceMatrix.needsUpdate=!0,this.flames.instanceColor&&(this.flames.instanceColor.needsUpdate=!0);for(let h of this.debris){let u=e-h.time,p=t.plan.jobs.find(M=>M.id===h.id)?.consumed??1/0;if(h.object.visible=u>=0&&t.t<p,h.object.scale.copy(h.scale),!h.object.visible)continue;let x=Math.min(u,h.land),g=Math.max(0,u-h.land);h.object.position.copy(h.start).addScaledVector(h.velocity,x),h.object.position.y-=4.905*x*x,g>0&&(h.object.position.x+=h.velocity.x*.18*Math.min(g,.6),h.object.position.z+=h.velocity.z*.18*Math.min(g,.6),h.object.position.y=.12+Math.sin(ze(g/.5)*Math.PI)*.1),h.object.position.x=ze(h.object.position.x,-4.7,4.7),h.object.position.z=ze(h.object.position.z,-4.1,4.1);let m=Math.min(u,h.land+.65);jc.set(h.spin.x*m,h.spin.y*m,h.spin.z*m),Jc.setFromEuler(jc),h.object.quaternion.copy(h.rotation).multiply(Jc),g>.5&&h.object.position.copy(h.resting)}let l=0,d=t.t<t.plan.repairStart?1:1-ze((t.t-t.plan.repairStart)/(t.plan.sleepAt-t.plan.repairStart));this.stains.material.opacity=.9*d;let f=(h,u,p,x,g)=>{l>=512||t.sites.some(m=>m.open&&Math.hypot(h-m.x,u-m.z)<.49)||(Lt.position.set(h,.023+l*3e-6,u),Lt.rotation.set(-Math.PI/2,0,x),Lt.scale.set(p,p*.65,1),Lt.updateMatrix(),this.stains.setMatrixAt(l,Lt.matrix),this.stains.setColorAt(l,new _t(g)),l++)};for(let h=0;h<n.length;h++){let u=n[h];if(!(!u.hit||u.time>t.t))for(let p=0;p<5;p++)f(u.target.x+(Ve(h*7+p)-.5)*.8,u.target.z+(Ve(h*9+p)-.5)*.8,.4+Ve(h+p)*1.5,p*2.3,p%2?"#8f3c36":"#4c242d")}for(let h of t.plan.jobs)if(t.t>=h.feed.a){let u=Gn(Qi(h.cartSegment,h.feed.a),[0,0,.65]),p=ze((t.t-h.feed.a)/.35);for(let x=0;x<4;x++)f(gt(h.position[0],u[0],x/4*p),gt(h.position[2],u[2],x/4*p),.45,x*.7,"#8f3c36")}for(let h of t.playerImpacts??[])if(h.time<=t.t)for(let u=0;u<3;u++)f(h.position[0]+(Ve(u+82)-.5)*.35,h.position[2]+(Ve(u+28)-.5)*.35,.5,u,"#8f3c36");this.stains.count=l,this.stains.instanceMatrix.needsUpdate=!0,this.stains.instanceColor&&(this.stains.instanceColor.needsUpdate=!0)}clear(){for(let t of this.debris)this.scene.remove(t.object);this.debris=[];for(let t of this.tracers)t.visible=!1;this.bits.count=0,this.flames.count=0,this.stains.count=0,this.reminders.count=0}};var Qc=class{constructor(t,{active:e,shoot:n,aim:i,joystick:r=()=>{}}){this.canvas=t,this.active=e,this.shoot=n,this.aim=i,this.joystick=r,this.keys=new Set,this.stick=null,this.touchAxis=[0,0],this.down=o=>{if(!this.active()||o.button>0)return;o.preventDefault(),t.focus({preventScroll:!0});let a=t.getBoundingClientRect();if(o.pointerType==="touch"&&!this.stick&&o.clientX-a.left<a.width*.46&&o.clientY-a.top>a.height*.48){this.stick={id:o.pointerId,x:o.clientX,y:o.clientY,moved:!1},t.setPointerCapture?.(o.pointerId);return}this.shoot(o.clientX,o.clientY)},this.move=o=>{if(this.active())if(this.stick?.id===o.pointerId){let a=o.clientX-this.stick.x,c=o.clientY-this.stick.y;Math.hypot(a,c)>7&&(this.stick.moved=!0),this.stick.moved&&(this.touchAxis=[Math.max(-1,Math.min(1,a/40)),Math.max(-1,Math.min(1,-c/40))],this.joystick({x:this.stick.x,y:this.stick.y,dx:a,dy:c}))}else o.pointerType!=="touch"&&this.aim(o.clientX,o.clientY)},this.up=o=>{this.stick?.id===o.pointerId&&(!this.stick.moved&&this.active()&&this.shoot(o.clientX,o.clientY),this.stick=null,this.touchAxis=[0,0],this.joystick(null))},this.cancel=o=>{this.stick?.id===o.pointerId&&(this.stick=null,this.touchAxis=[0,0],this.joystick(null))},this.keydown=o=>{this.active()&&(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"].includes(o.code)&&(o.preventDefault(),this.keys.add(o.code)),!o.repeat&&["Space","Enter"].includes(o.code)&&(o.preventDefault(),this.shoot()))},this.keyup=o=>this.keys.delete(o.code),this.blur=()=>this.clear(),t.addEventListener("pointerdown",this.down),t.addEventListener("pointermove",this.move),t.addEventListener("pointerup",this.up),t.addEventListener("pointercancel",this.cancel),t.addEventListener("lostpointercapture",this.cancel),t.addEventListener("keydown",this.keydown),t.addEventListener("keyup",this.keyup),t.addEventListener("blur",this.blur)}axes(){let t=(e,n)=>this.keys.has(e)||this.keys.has(n);return[this.touchAxis[0]+Number(t("KeyD","ArrowRight"))-Number(t("KeyA","ArrowLeft")),this.touchAxis[1]+Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))]}clear(){this.keys.clear(),this.touchAxis=[0,0],this.stick=null,this.joystick(null)}dispose(){let t=this.canvas;for(let[e,n]of[["pointerdown",this.down],["pointermove",this.move],["pointerup",this.up],["pointercancel",this.cancel],["lostpointercapture",this.cancel],["keydown",this.keydown],["keyup",this.keyup],["blur",this.blur]])t.removeEventListener(e,n);this.clear()}};var _p=1.85,K1=12,J1=30,Ei=s=>[...s],j1=s=>Math.atan2(Math.sin(s),Math.cos(s)),Rs=(s,t)=>s.x===t.x&&s.z===t.z,vp=s=>s.position[0]<-3.75||s.position[2]<-3.1,tl=class{constructor(t,e){this.source=t,this.anchor=t.undocked,this.time=this.anchor,this.lastPickup=this.time,this.navigator=Dc(e,{crossCracks:!0}),this.node=this.navigator.decode(this.navigator.id(0,0,0)),this.step=null,this.drive=0,this.done=!1,this.cart={position:Ei(this.node.position),facing:0,operator:0,distance:0,speed:0,wheelFacing:0},this.cart.pusher=br(this.cart),this.hero={visible:!0,position:Ei(this.cart.pusher),facing:0,pose:"push-cart",speed:0},this.jobs=t.jobs.map(n=>({...n,feed:{a:1/0,b:1/0},consumed:1/0})),this.plan={...t,duration:1/0,repairStart:1/0,sleepAt:1/0,repairs:Object.fromEntries(Object.keys(t.repairs).map(n=>[n,1/0])),jobs:this.jobs}}choice(t,e){let n=this.navigator.neighbors(t.id).map(([c])=>this.navigator.decode(c)),i=Math.abs(e[0])>.15?-Math.sign(e[0]):0,r=Math.abs(e[1])>.15?Math.sign(e[1]):0,o=n.filter(c=>c.mode===t.mode),a=c=>{let l=c.position[0]-t.position[0],d=c.position[2]-t.position[2];return(l*Math.sin(t.facing)+d*Math.cos(t.facing))/Math.max(1e-5,Math.hypot(l,d))};if(i){let c=o.some(d=>d.h===t.h&&!Rs(d,t)&&a(d)>.99);if(!r&&vp(t)&&!c){let d=o.find(f=>f.h===t.h&&!Rs(f,t)&&((f.position[0]-t.position[0])*Math.cos(t.facing)-(f.position[2]-t.position[2])*Math.sin(t.facing))*i>.2);if(d)return d}if(r){let d=o.find(f=>!Rs(f,t)&&f.h===(t.h+i*2+8)%8&&a(f)*r>.01);if(d)return d}let l=o.find(d=>Rs(d,t)&&d.h===(t.h+i+8)%8);if(l)return l;if(!r&&vp(t)){let d=o.find(f=>f.h===t.h&&!Rs(f,t)&&((f.position[0]-t.position[0])*Math.cos(t.facing)-(f.position[2]-t.position[2])*Math.sin(t.facing))*i>.2);if(d)return d}}return r?o.find(c=>c.h===t.h&&!Rs(c,t)&&a(c)*r>.99):null}nextNode(t,e){let n=this.choice(t,e),i=this.navigator.neighbors(t.id).map(([r])=>this.navigator.decode(r)).filter(r=>r.mode!==t.mode);if(t.mode){let r=i.find(o=>o.mode===0&&this.choice(o,e));r&&(n=r)}return n||(n=i.find(r=>this.choice(r,e))),n}begin(t){let e=this.node,n=this.nextNode(e,t);if(!n)return;let i={a:0,operator:e.mode,wheelStart:this.cart.distance,cartPath:[Ei(e.position),Ei(n.position)],node:n};if(e.mode!==n.mode)i.path=this.navigator.operatorRoute(e,n),i.b=Math.max(.3,qe(i.path)/1.6),i.pose="walk";else if(e.h!==n.h){let r=j1(n.facing-e.facing);i.cartTurn=[e.facing,e.facing+r],i.cartArc=!Rs(e,n),i.b=Math.max(Math.abs(r)/2.8,qe(i.cartPath)/_p),i.motionRamp=0,i.linearTurn=!0,i.pose="push-cart",i.mode="turning"}else{let r=n.position[0]-e.position[0],o=n.position[2]-e.position[2],a=r*Math.sin(e.facing)+o*Math.cos(e.facing)<-.01;i.cartFacing=e.facing,i.wheelFacing=Math.atan2(r,o),i.b=qe(i.cartPath)/(a?1.35:_p),i.motionRamp=0,i.pose="push-cart",i.mode=a?"reversing":"rolling"}this.step={segment:i,elapsed:0}}collect(){for(let t of this.jobs){if(Number.isFinite(t.feed.a))continue;let e=[t.contactPosition??t.position,...t.contactCandidates??[]],n=e.find(o=>Ii(this.cart,o,.003));if(!n)continue;t.contactPosition=Ei(n);let i=this.time,r=i+(t.type==="body"?.34:.22);t.feed={a:i,b:r},t.consumed=r,t.cartSegment={a:i,b:r,cartPath:[Ei(this.cart.position),Ei(this.cart.position)],cartFacing:this.cart.facing,operator:this.cart.operator,wheelStart:this.cart.distance},this.lastPickup=i}}update(t,e=[0,0]){let n=Ei(this.hero.position),i=Math.min(1,Math.hypot(...e));this.drive+=(i-this.drive)*(1-Math.exp(-t*10));for(let c=Math.max(0,t);c>1e-6;){let l=Math.min(.025,c);c-=l,this.time+=l;let d=this.jobs.some(f=>!Number.isFinite(f.feed.a));if(!this.step&&i>.08&&d&&this.begin(e),this.step){let{segment:f}=this.step,h=f.path||f.cartTurn?1:Math.max(.35,this.drive);if(this.step.elapsed=Math.min(f.b,this.step.elapsed+l*h),f.path){let u=$i(f.path,qe(f.path)*this.step.elapsed/f.b);this.hero={visible:!0,...u,pose:"walk",speed:1.6},this.cart.speed=0}else{this.cart=Qi(f,this.step.elapsed),this.cart.speed*=h;let u=Gn(this.cart,this.cart.operator?[this.cart.operator===1?.32:-.32,.86,-.2]:[0,1.02,-.82]);this.hero={visible:!0,position:Ei(this.cart.pusher),facing:Math.atan2(u[0]-this.cart.pusher[0],u[2]-this.cart.pusher[2]),pose:"push-cart",speed:0}}this.mode=f.mode??"parked",this.step.elapsed>=f.b-1e-8&&(this.node=f.node,this.cart.operator=this.node.mode,this.cart.pusher=br(this.cart),this.step=null)}else this.cart.speed=0,this.mode="parked";this.collect(),!this.step&&this.jobs.every(f=>f.consumed<=this.time)&&(this.done=!0)}this.hero.speed=t?Math.hypot(...this.hero.position.map((c,l)=>c-n[l]))/t:0;let r=this.jobs.filter(c=>c.feed.a<=this.time&&c.consumed>this.time),o=this.jobs.filter(c=>c.consumed<=this.time).length,a=this.time-this.lastPickup>=K1||this.time-this.anchor>=J1;return{hero:this.hero,cart:this.cart,cartMode:this.mode??"parked",activeJobs:r,processed:o,total:this.jobs.length,remaining:this.jobs.length-o,grinding:r.length>0,hints:a?this.jobs.filter(c=>!Number.isFinite(c.feed.a)):[]}}resumeCart(){return{...this.cart,node:this.node.id,crossCracks:!0}}};var wn={start:.87,reach:.98,impact:.48,duration:1.25,recovery:.38,invulnerable:.72,health:3},el=class{constructor(){this.reset()}reset(){this.health=wn.health,this.lastHurt=-1/0,this.death=null,this.attacks=new Map,this.impacts=[]}get dead(){return this.death!==null}clearAttack(t){this.attacks.delete(t)}apply(t){let e=t.t-this.lastHurt;if(t.health=this.health,t.dead=this.dead,t.playerImpacts=this.impacts,t.hero.hurt=e>=0?1-at(.04,.38,e):0,!this.death)return;let n=Math.max(0,t.t-this.death.time);t.deathAge=n,t.phase=n<1.8?"dying":"dead",t.canMove=!1,t.canShoot=!1,t.gunVisible=!0,t.foodMode="hidden",t.sleeping=!1,t.hero={visible:!0,position:[...this.death.position],facing:this.death.facing,pose:"dying",speed:0,deathProgress:at(.1,1.35,n),hurt:t.hero.hurt};for(let i of t.zombies)i.walking=!1,i.speed=0}update(t,e,n=()=>{}){if(this.dead){for(let r of t.zombies)r.walking=!1,r.speed=0;this.apply(t);return}if(t.t<ws||t.t>=Be){this.attacks.clear(),this.apply(t);return}let i=[Ye,...yn(t.sites)];for(let r=0;r<t.zombies.length;r++){let o=t.zombies[r];if(!o.visible||!o.alive||o.emergence<.999||t.t<Ro(dn[r])){this.clearAttack(r);continue}let a=Math.hypot(o.position[0]-t.hero.position[0],o.position[2]-t.hero.position[2]),c=ji(o.position,t.hero.position,{radius:.06,extra:i}),d=this.attacks.get(r);if(e>0&&(!d||t.t>=d.start+wn.duration+wn.recovery)&&a<=wn.start&&c){let h=r%2?"Left":"Right",u=p=>o.detached.has(p==="Left"?"leftArm":"rightArm")||o.detached.has(p==="Left"?"leftForearm":"rightForearm");u(h)&&(h=u(h==="Left"?"Right":"Left")?"Bite":h==="Left"?"Right":"Left"),d={start:t.t,hit:!1,side:h},this.attacks.set(r,d),n("zombie-attack",{zombie:r})}if(!d)continue;let f=t.t-d.start;if(f<=wn.duration&&(o.attack={progress:ze(f/wn.duration),side:d.side},o.walking=!1,o.speed=0),e>0&&!d.hit&&f>=wn.impact)if(d.hit=!0,a<=wn.reach&&c&&n(d.side==="Bite"?"zombie-bite":"zombie-hit",{zombie:r}),a<=wn.reach&&c&&t.t-this.lastHurt>=wn.invulnerable){if(this.health--,this.lastHurt=t.t,this.impacts.push({time:t.t,position:[t.hero.position[0],1.15,t.hero.position[2]]}),n("survivor-hurt"),this.health<=0){this.death={time:t.t,position:[...t.hero.position],facing:t.hero.facing},n("survivor-death");break}}else(a>wn.reach||!c)&&n("zombie-swipe-miss",{zombie:r})}this.apply(t)}};var Co={"night-ambience":{file:"night-ambience_loop.mp3",loop:!0,gain:.25},"door-open":{file:"door-open_01.mp3",gain:.34},"door-close":{file:"door-close_01.mp3",gain:.37},"survivor-sigh":{file:"survivor-sigh_01.mp3",gain:.48},"footstep-asphalt":{file:"footstep-asphalt_01.mp3",gain:.25,variation:.055,limit:3},"pan-sizzle-loop":{file:"pan-sizzle-loop_loop.mp3",loop:!0,gain:.24},"ground-crack":{file:"ground-crack_01.mp3",gain:.51,variation:.035},"zombie-emerge":{file:"zombie-emerge_01.mp3",gain:.38,variation:.045,limit:3},"zombie-groan":{file:"zombie-groan_01.mp3",gain:.3,variation:.07,limit:2},"zombie-attack":{file:"zombie-attack_01.mp3",gain:.43,variation:.04,limit:3},"shotgun-fire":{file:"shotgun-fire_01.mp3",gain:.83,limit:3},"shotgun-pump-cycle":{file:"shotgun-pump-cycle_01.mp3",gain:.42,limit:2},"flesh-impact":{file:"flesh-impact_01.mp3",gain:.49,variation:.04},"zombie-body-fall":{file:"zombie-body-fall_01.mp3",gain:.36,variation:.06},"sunrise-burn":{file:"sunrise-burn_01.mp3",gain:.43},"harvester-motor-loop":{file:"harvester-motor-loop_loop.mp3",loop:!0,gain:.28},"harvester-crusher-loop":{file:"harvester-crusher-loop_loop.mp3",loop:!0,gain:.4},"tar-shovel":{file:"tar-shovel_01.mp3",gain:.35,variation:.035},"survivor-hurt":{file:"survivor-hurt_01.mp3",gain:.58},"survivor-death":{file:"survivor-death_01.mp3",gain:.61}};function $1(s){return s==="shotgun-pump-back"?{id:"shotgun-pump-cycle"}:s==="footstep-metal"?{id:"footstep-asphalt",gain:.65,rate:1.12}:s==="zombie-footstep"?{id:"footstep-asphalt",gain:.43,rate:.86}:Co[s]?{id:s}:null}function Q1(s,t){return!t||!s||s.dead?{}:{"night-ambience":Math.max(0,Math.min(1,s.night??0)),"pan-sizzle-loop":s.cooking?1:0,"harvester-motor-loop":s.cartRunning?1:0,"harvester-crusher-loop":s.grinding?1:0}}var nl=class{constructor({base:t,fetcher:e=(...r)=>fetch(...r),contextFactory:n,onChange:i=()=>{}}){this.base=t,this.fetcher=e,this.contextFactory=n??(()=>{let r=globalThis.AudioContext??globalThis.webkitAudioContext;return r?new r({latencyHint:"interactive"}):null}),this.onChange=i,this.raw=new Map,this.buffers=new Map,this.voices=new Set,this.loops=new Map,this.active=!0,this.unlocked=!1,this.disposed=!1,this.errors=[],this.lastCue=""}status(){return{state:this.disposed?"disposed":this.context?this.context.state:this.unavailable?"unavailable":"ready",loaded:this.buffers.size||this.raw.size,playing:this.voices.size,lastCue:this.lastCue,errors:this.errors.length}}changed(){this.onChange(this.status())}preload(){return this.loading??=Promise.all(Object.entries(Co).map(async([t,e])=>{try{let n=await this.fetcher(new URL(e.file,this.base));if(!n.ok)throw Error("HTTP "+n.status);let i=await n.arrayBuffer();this.disposed||this.raw.set(t,i)}catch(n){this.errors.push(t+": "+n.message)}})).then(()=>this.changed())}async unlock(){if(this.disposed)return!1;try{if(this.context??=this.contextFactory(),!this.context)return this.unavailable=!0,this.changed(),!1;let t=this.context;this.master||(this.master=t.createGain(),this.master.gain.value=.72,this.compressor=t.createDynamicsCompressor(),this.compressor.threshold.value=-13,this.compressor.knee.value=15,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.18,this.master.connect(this.compressor),this.compressor.connect(t.destination));let e=t.resume();return this.unlocked=!0,this.active=!0,this.decoding??=(async()=>{await this.preload(),await Promise.all([...this.raw].map(async([n,i])=>{try{let r=await t.decodeAudioData(i.slice(0));this.disposed||this.buffers.set(n,r)}catch(r){this.errors.push(n+": "+r.message)}})),this.raw.clear()})(),await Promise.all([e,this.decoding]),this.changed(),t.state==="running"}catch(t){return this.errors.push(t.message),this.changed(),!1}}setActive(t){this.active!==t&&(this.active=t,!(!this.context||!this.unlocked)&&(t?this.context.resume().then(()=>this.changed()).catch(()=>{}):(this.reset(),this.context.suspend().catch(()=>{})),this.changed()))}start(t,{loop:e=!1,gain:n=1,rate:i=1,position:r}={}){let o=Co[t],a=this.buffers.get(t),c=this.context;if(!o||!a||!this.unlocked||!this.active||c?.state!=="running"||this.disposed)return null;let l=[...this.voices].filter(g=>g.id===t&&!g.stopping);l.length>=(o.limit??4)&&this.stop(l[0],.025);let d=[...this.voices].filter(g=>!g.stopping);d.length>=24&&this.stop(d.find(g=>!g.loop)??d[0],.025);let f=c.createBufferSource(),h=c.createGain(),u=c.createStereoPanner();f.buffer=a,f.loop=e,f.playbackRate.value=i*(1+(Math.random()-.5)*2*(o.variation??0));let p=o.gain*n;h.gain.setValueAtTime(e?0:p,c.currentTime),e&&h.gain.linearRampToValueAtTime(p,c.currentTime+.18),u.pan.value=r?Math.max(-.6,Math.min(.6,(r[0]-r[2])*.085)):0,f.connect(h),h.connect(u),u.connect(this.master);let x={id:t,source:f,level:h,pan:u,loop:e,stopping:!1};return this.voices.add(x),f.onended=()=>{f.disconnect(),h.disconnect(),u.disconnect(),this.voices.delete(x),this.changed()},f.start(),this.lastCue=t,this.changed(),x}stop(t,e=.12){if(!t||t.stopping)return;t.stopping=!0;let n=this.context.currentTime;t.level.gain.cancelScheduledValues(n),t.level.gain.setValueAtTime(t.level.gain.value,n),t.level.gain.linearRampToValueAtTime(0,n+e),t.source.stop(n+e+.01)}cue(t,e={}){let n=$1(t);!n||Co[n.id].loop||this.start(n.id,{...e,gain:n.gain??1,rate:n.rate??1})}sync(t,e=!0){this.lastState=t;let n=Q1(t,e&&this.active);for(let[i,r]of this.loops)n[i]>.005||(this.stop(r),this.loops.delete(i));for(let[i,r]of Object.entries(n))if(r>.005){let o=this.loops.get(i);o?o.level.gain.setTargetAtTime(Co[i].gain*r,this.context.currentTime,.12):(o=this.start(i,{loop:!0,gain:r}),o&&this.loops.set(i,o))}}reset(){for(let t of this.voices)this.stop(t,.035);this.loops.clear()}dispose(){this.disposed||(this.reset(),this.disposed=!0,this.raw.clear(),this.buffers.clear(),this.context?.close().catch(()=>{}),this.changed())}};var tv=.9,ev=8e3,nv=s=>at(.16,.34,s)*(1-at(.38,.6,s)),yp=s=>new C(...s),bp=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},il=class{constructor(t,{assetBase:e,audioBase:n,interactiveCleanup:i=!0,onState:r=()=>{},onCue:o=()=>{}}={}){this.canvas=t,this.assetBase=e,this.onState=r,this.onCue=o,this.camp=new Gc(t),this.elapsed=0,this.started=!1,this.paused=!1,this.hits=[],this.shots=[],this.lastShotAt=-100,this.ray=new no,this.pointer=new Ft,this.ground=new nn(new C(0,1,0),0),this.aim=new C(3.15,1.35,1.55),this.loop=0,this.frameId=0,this.destroyed=!1,this.plan=Ts,this.planFinal=!1,this.planEpoch=0,this.planning=!1,this.planningFailed=!1,this.plannerStartedAt=0,this.playerPosition=null,this.playerSpeed=0,this.playerVelocity=[0,0],this.playerFacing=Math.PI/2,this.zombieMemory=new Map,this.survival=new el,this.interactiveCleanup=i,this.harvestSession=null,this.reviewing=!1,this.sound=new nl({base:n??new URL("../audio/",e),onChange:a=>Object.assign(this.canvas.dataset,{audioState:a.state,audioLoaded:String(a.loaded),audioVoices:String(a.playing),audioCue:a.lastCue,audioErrors:String(a.errors)})}),this.frame=this.frame.bind(this),this.visibility=()=>{cancelAnimationFrame(this.frameId),this.controls?.clear(),this.sound.setActive(!document.hidden),!document.hidden&&this.started&&!this.paused&&(this.lastNow=performance.now(),this.frameId=requestAnimationFrame(this.frame))}}cue(t,e={}){let n=e.zombie!==void 0?this.state?.zombies[e.zombie]?.position:this.state?.hero.position;this.sound?.cue(t,{...e,position:n}),this.onCue(t,{time:this.state?.t??this.elapsed,...e})}async init(){if(await Promise.all([this.camp.load(this.assetBase),this.sound.preload()]),!this.destroyed){this.hero=new wr(this.camp.heroTemplate,"Hero",this.camp.scene),this.zombies=dn.map((t,e)=>{let n=new wr(this.camp.zombieTemplate,"Zombie",this.camp.scene,!0);for(let i of n.meshes)i.userData.zombie=e;return n}),this.cleanupProbe=new wr(this.camp.zombieTemplate,"Zombie",new ki,!0),this.props=new Zc(this.camp.scene,this.hero,this.camp.propTemplate),this.effects=new $c(this.camp.scene),this.blockers=[];for(let t of[this.camp.environment,this.props.cart,this.props.cover,this.props.box])t.traverse(e=>{e.isMesh&&this.blockers.push(e)});this.controls=new Qc(this.canvas,{active:()=>this.started&&this.state?.canMove,shoot:(t,e)=>{if(t!==void 0)this.firePointer(t,e);else{let n=this.state.zombies.findIndex(i=>i.targetable);n>=0&&this.fireZombie(n,"torso")}},aim:(t,e)=>{let n=this.pick(t,e);n&&this.aim.copy(n.point)},joystick:t=>{this.canvas.dataset.joystick=t?"active":"idle"}}),document.addEventListener("visibilitychange",this.visibility),this.update(),this.camp.render()}}play(){this.destroyed||(this.survival.dead&&this.restart(),this.started=!0,this.paused=!1,this.lastNow=performance.now(),cancelAnimationFrame(this.frameId),this.frameId=requestAnimationFrame(this.frame))}frame(t){if(this.destroyed||this.paused||document.hidden)return;let e=Math.min(.05,(t-this.lastNow)/1e3);if(this.lastNow=t,this.elapsed+=e,this.update(e),this.camp.render(),this.state.dead&&this.state.deathAge>=2.2){this.paused=!0;return}this.frameId=requestAnimationFrame(this.frame)}restart(){this.sound?.reset(),this.survival.reset(),this.hits=[],this.shots=[],this.lastShotAt=-100,this.effects.clear(),this.controls.clear(),this.zombieMemory.clear(),this.playerPosition=null,this.playerVelocity=[0,0],this.playerSpeed=0,this.harvestSession=null,this.reviewing=!1,this.planEpoch++,this.planning=!1,this.planningFailed=!1,this.plannerError=null,this.planner?.terminate(),this.plan=Ts,this.planFinal=!1,this.elapsed=Wt.combat,this.hero.gait.clear(),this.zombies.forEach(t=>t.gait.clear()),this.lastPhase=null,this.cue("night-retry"),this.update()}seek(t,{pause:e=!0}={}){this.sound?.reset(),this.planEpoch++,this.planning=!1,this.planningFailed=!1,this.plannerError=null,this.planner?.terminate(),this.hero?.gait.clear(),this.zombies?.forEach(n=>n.gait.clear()),this.survival.reset(),this.harvestSession=null,this.reviewing=e,this.elapsed=Math.max(0,Number(t)||0),this.started=!0,this.paused=e,this.controls?.clear(),cancelAnimationFrame(this.frameId),this.elapsed>=Be&&this.finalizePlan(),this.update(),this.camp.render(),e||(this.lastNow=performance.now(),this.frameId=requestAnimationFrame(this.frame))}cleanupInput(){let t=dn.map(e=>{let n=this.zombieMemory.get(e.id),i=Vc(e,Cn-1,this.hits),r=n?[n.position[0],0,n.position[2]]:i.position.map((c,l)=>l===1?0:c),o=n?.facing??i.facing;this.cleanupProbe.zombie({...i,visible:!0,position:r,facing:o},Cn-1);let a=this.cleanupProbe.meshes.filter(li).map(c=>Es(c).getCenter(new C).toArray());return{rootPosition:r,position:Es(this.cleanupProbe.root).getCenter(new C).toArray(),contactPosition:Es(this.cleanupProbe.root.getObjectByName("Zombie_Jacket")).getCenter(new C).toArray(),contactCandidates:a,facing:o}});return{hits:this.hits,parts:this.effects.restingItems(),startPosition:this.playerPosition??ts,bodyPositions:t}}finalizePlan(){if(this.planEpoch++,this.planner?.terminate(),this.planning=!1,!this.hits.length&&!this.zombieMemory.size&&!this.playerPosition)this.plan=Ts;else{let t=this.cleanupInput();this.plan=Eu(t.hits,t.parts,t.startPosition,t.bodyPositions,{skipUnreachable:!0})}this.planFinal=!0}failCleanup(t){this.planEpoch++,this.planning=!1,this.planningFailed=!0,this.plannerError=t,this.planner?.terminate(),this.planner=null}queueCleanup(){if(this.planning||this.planFinal||this.planningFailed)return;if(typeof Worker>"u"){this.failCleanup("Background workers unavailable");return}let t=++this.planEpoch;try{let e=new Worker(new URL("./cleanup-worker.js",import.meta.url),{type:"module"});this.planner=e,this.planning=!0,this.plannerStartedAt=performance.now(),e.onmessage=({data:n})=>{n.epoch!==this.planEpoch||this.destroyed||(n.plan?(this.planning=!1,e.terminate(),this.planner=null,this.plan=n.plan,this.planFinal=!0):this.failCleanup(n.error??"Background planner returned no route"))},e.onerror=n=>{t===this.planEpoch&&(n.preventDefault?.(),this.failCleanup(n.message??"Background planner failed"))},e.onmessageerror=()=>{t===this.planEpoch&&this.failCleanup("Background planner response could not be read")},e.postMessage({epoch:t,...this.cleanupInput()})}catch(e){this.failCleanup(e.message)}}moveActors(t,e){if(!t.harvestControl){if(t.canMove){this.playerPosition??=[...ts];let[n,i]=this.controls.axes(),r=tp(n,i),o=this.playerPosition,a=[Ye,...yn(t.sites),...t.zombies.filter(d=>d.alive&&d.emergence>.95).map((d,f)=>({id:"zombie-"+f,x:d.position[0],z:d.position[2],r:.24}))];if(e){let d=1-Math.exp(-e*(n||i?12:16));this.playerVelocity[0]=gt(this.playerVelocity[0],r[0]*1.8,d),this.playerVelocity[1]=gt(this.playerVelocity[1],r[2]*1.8,d),this.playerPosition=du(o,this.playerVelocity[0]*e,this.playerVelocity[1]*e,{extra:a}),Math.abs(this.playerPosition[0]-o[0])<1e-4&&(this.playerVelocity[0]=0),Math.abs(this.playerPosition[2]-o[2])<1e-4&&(this.playerVelocity[1]=0)}this.playerSpeed=e?Math.hypot(this.playerPosition[0]-o[0],this.playerPosition[2]-o[2])/e:0,t.hero.position=[...this.playerPosition],t.hero.speed=this.playerSpeed;let c=up(t.hero.position,this.aim.toArray()),l=Math.atan2(Math.sin(c-this.playerFacing),Math.cos(c-this.playerFacing));this.playerFacing+=e?ze(l,-e*5,e*5):l,t.hero.facing=this.playerFacing}else t.t>=Be&&t.t<Cn&&this.playerPosition&&(t.hero.position=[...this.playerPosition]);if(e)for(let n=0;n<t.zombies.length;n++){let i=t.zombies[n],r=dn[n];if(!i.visible)continue;let o=this.zombieMemory.get(n);if(i.emergence<.999&&i.alive){this.zombieMemory.set(n,{position:[...i.position],route:null,nextPlan:0});continue}if(o||(o={position:[...i.position],route:null,nextPlan:0},this.zombieMemory.set(n,o)),i.alive&&!t.dead&&t.t>=Ro(r)&&t.t<Be){let a=t.canMove?this.playerPosition:ts,c=Pn.find(w=>w.id===r.site),l=Math.hypot(o.position[0]-c.x,o.position[2]-c.z)<.8,d=yn(t.sites).filter(w=>!l||w.id!=="hole-"+r.site),f=[Ye,...d];for((t.t>=o.nextPlan||!o.route)&&(o.route=Vn(o.position,a,{radius:.24,extra:f}),o.nextPlan=t.t+.75);o.route.length>1&&Math.hypot(o.position[0]-o.route[1][0],o.position[2]-o.route[1][2])<.12;)o.route.shift();let h=o.route[1]??a,u=h[0]-o.position[0],p=h[2]-o.position[2],x=Math.hypot(u,p),g=Math.hypot(a[0]-o.position[0],a[2]-o.position[2]),m=t.zombies.filter((w,_)=>_!==n&&w.visible&&w.alive&&w.emergence>.99).map((w,_)=>({id:"other-"+_,x:w.position[0],z:w.position[2],r:.22})),M=o.position,R=this.survival?.attacks.get(n),y=R&&t.t<R.start+wn.duration,S=["leftLeg","rightLeg","leftShin","rightShin"].some(w=>i.detached.has(w)),T=zc*(S?.5:1);g>.77&&!y&&x>.001&&(o.position=du(o.position,u/x*e*T,p/x*e*T,{radius:.235,extra:[...f,...m]})),i.speed=Math.hypot(o.position[0]-M[0],o.position[2]-M[2])/e,i.walking=i.speed>.02,o.facing=Math.atan2(a[0]-o.position[0],a[2]-o.position[2])}i.facing=o.facing??i.facing,i.position=[o.position[0],i.alive?0:gt(o.position[1],0,i.fall),o.position[2]]}}}applyCleanup(t){if(!(t.t<Cn))for(let e of this.plan.jobs){let n=e.type==="part"?this.effects.debris.find(c=>c.id===e.id):null,i=e.type==="body"?this.zombies[e.zombie].root:n?.object;if(!i)continue;if(t.t>=e.consumed){i.visible=!1;continue}if(t.t<e.feed.a)continue;let r=Gu(e,t.t,t.cart),o=e.type==="body"?new C(1,1,1):n.scale;i.scale.copy(o).multiply(yp(r.scale)),i.updateMatrixWorld(!0);let a=Es(i).getCenter(new C);i.position.add(yp(r.position).sub(a))}}startHarvest(){this.harvestSession=new tl(this.plan,Pn),this.plan=this.harvestSession.plan,this.elapsed=this.harvestSession.anchor,this.controls.clear(),this.playerPosition=null,this.playerVelocity=[0,0]}finishHarvest(){let t=this.harvestSession;this.plan=Bc([],Pn,t.hero.position,t.time,{resumeCart:t.resumeCart(),completedJobs:t.jobs,gunStoredAt:t.source.gunStoredAt,skipUnreachable:!0}),t.finished=!0,this.elapsed=t.time,this.planFinal=!0,this.controls.clear()}update(t=0){this.elapsed>=this.plan.duration&&(this.elapsed%=this.plan.duration,this.loop++,this.hits=[],this.shots=[],this.effects?.clear(),this.controls?.clear(),this.zombieMemory.clear(),this.planEpoch++,this.planning=!1,this.planningFailed=!1,this.plannerError=null,this.planner?.terminate(),this.playerPosition=null,this.playerVelocity=[0,0],this.plan=Ts,this.planFinal=!1,this.lastShotAt=-100,this.survival.reset(),this.harvestSession=null),this.planning&&performance.now()-this.plannerStartedAt>=ev&&this.failCleanup("Background planner timed out"),!this.survival.dead&&t&&this.elapsed>=Be+.1&&!this.planFinal&&this.queueCleanup(),!this.survival.dead&&this.elapsed>=Cn-.25&&!this.planFinal&&(this.planning?this.elapsed=Cn-.25:this.finalizePlan()),this.started&&this.interactiveCleanup&&!this.reviewing&&!this.harvestSession&&this.planFinal&&this.elapsed>=this.plan.undocked&&!this.survival.dead&&this.startHarvest();let e=null;this.harvestSession&&!this.harvestSession.finished&&(this.elapsed=this.harvestSession.anchor,e=this.harvestSession.update(t,this.controls.axes()),this.harvestSession.done&&(this.finishHarvest(),e=null));let n=fp(this.elapsed,this.hits,this.plan,this.loop),i=this.state;e&&(Object.assign(n,{t:this.harvestSession.time,phase:"harvesting",harvestControl:!0,harvestHints:e.hints,canMove:!0,canShoot:!1,hero:e.hero,cart:e.cart,cartMode:e.cartMode,cartRunning:!0,grinding:e.grinding,gunVisible:!1,sleeping:!1,boxMode:"docked",boxLoads:e.processed/Math.max(1,e.total)*3,coverMode:"stowed",handleOpen:!0}),n.cleanup={...n.cleanup,hero:e.hero,cart:e.cart,cartMode:e.cartMode,cartRunning:!0,grinding:e.grinding,activeJobs:e.activeJobs,job:e.activeJobs[0]??null,processed:e.processed,total:e.total,remaining:e.remaining});let r=n.t;n.zombies.forEach((c,l)=>{let d=this.zombieMemory.get(l);d&&c.emergence>=.999&&(c.position=[d.position[0],0,d.position[2]],c.facing=d.facing??c.facing)}),this.survival.apply(n),this.moveActors(n,t),this.survival.update(n,t,(c,l)=>this.cue(c,l)),this.state=n,this.camp.update(n,r);let o=this.shots.length?n.t-this.shots.at(-1).time:100,a=o>=0&&o<.18?1-o/.18:0;n.pump=nv(o),n.aimTarget=this.aim.toArray(),this.props.setupMachine(n,r),this.hero.hero(n,r,a),n.heroSteps=this.hero.gait.stepCount,this.zombies.forEach((c,l)=>{let d=this.zombieMemory.get(l);d&&!t&&n.t>=Be&&(n.zombies[l].position=[d.position[0],0,d.position[2]]),c.zombie(n.zombies[l],r),n.zombies[l].steps=c.gait.stepCount}),this.props.update(n,r,this.shots.at(-1));for(let c of[...this.props.steamPuffs,...this.props.smokePuffs])c.quaternion.copy(this.camp.camera.quaternion);for(let c of this.props.sleepSigns)c.quaternion.copy(this.camp.camera.quaternion);this.camp.scene.updateMatrixWorld(!0),this.effects.update(n,r,this.shots,this.zombies),this.applyCleanup(n),this.camp.scene.updateMatrixWorld(!0),this.canvas.style.cursor=this.started&&n.canShoot?"crosshair":"default",Object.assign(this.canvas.dataset,{phase:n.phase,shooting:String(this.started&&n.canShoot),movement:String(this.started&&n.canMove),shots:String(this.shots.length),hits:String(this.hits.length),detached:String(this.effects.debris.length),lights:String(n.lampOn),food:n.foodMode,holes:String(n.sites.filter(c=>c.open).length),patches:String(n.sites.filter(c=>c.patched).length),heroX:n.hero.position[0].toFixed(3),heroZ:n.hero.position[2].toFixed(3),weapon:"pump-shotgun",pump:n.pump.toFixed(2),harvester:n.cartMode,grinding:String(n.grinding),window:n.windowOpen.toFixed(2),processed:String(n.cleanup?.processed??0),harvestItems:String(this.plan.jobs.length),cleanupItem:n.cleanup?.job?.id??"",cleanupStage:n.cleanup?.segment.pose??"",duration:Number.isFinite(this.plan.duration)?this.plan.duration.toFixed(2):"player-controlled",time:n.t.toFixed(2),harvestControl:String(!!n.harvestControl),remaining:String(n.cleanup?.remaining??Math.max(0,this.plan.jobs.length-(n.cleanup?.processed??0))),reminderTargets:String(n.harvestHints?.length??0),cleanupPlanner:this.planFinal?"ready":this.planning?"planning":this.planningFailed?"fallback":"idle",uncollected:String(this.plan.unreachable?.length??0),alive:String(!n.dead),health:String(n.health)}),i?.canMove&&!n.canMove&&this.controls.clear(),this.lastPhase!==n.phase&&(this.lastPhase=n.phase,this.onState(n)),t&&this.emitCues(i,n),this.sound?.sync(n,this.started&&!this.paused)}emitCues(t,e){if(t){t.door<.1&&e.door>=.1&&this.cue("door-open"),t.door>.1&&e.door<=.1&&this.cue("door-close"),t.phase!==e.phase&&e.phase==="sunrise"&&this.cue("sunrise-burn"),t.t<Wt.sigh&&e.t>=Wt.sigh&&this.cue("survivor-sigh"),(e.heroSteps??0)>(t.heroSteps??0)&&this.cue(e.hero.position[1]>.1?"footstep-metal":"footstep-asphalt");for(let n of dn)for(let[i,r]of[[-1.25,"ground-crack"],[0,"ground-burst"],[.4,"zombie-emerge"]])t.t<n.birth+i&&e.t>=n.birth+i&&this.cue(r,{zombie:n.id});if(e.cleanup?.segment!==t.cleanup?.segment&&e.cleanup){let n=e.cleanup.segment;n.pose==="bin-remove"&&this.cue("harvest-bin-lift"),n.pose==="uncover-cart"&&this.cue("cover-rustle"),n.pose==="clear-jam"&&this.cue("harvester-jam-reverse"),n.pose==="shovel"&&this.cue("tar-shovel"),n.pose==="set-bucket"&&this.cue("tar-bucket-set"),n.pose==="lift-bucket"&&this.cue("tar-bucket-lift")}t.grinding!==e.grinding&&this.cue("harvester-crusher-loop",{loop:e.grinding}),t.cartRunning!==e.cartRunning&&this.cue("harvester-motor-loop",{loop:e.cartRunning}),t.cooking!==e.cooking&&this.cue("pan-sizzle-loop",{loop:e.cooking}),t.windowOpen<.1&&e.windowOpen>=.1&&this.cue("window-hinge");for(let n of this.shots.slice(-3))for(let[i,r]of[[.17,"shotgun-pump-back"],[.38,"shotgun-pump-forward"],[1.12,"shotgun-shell-land"]])t.t<n.time+i&&e.t>=n.time+i&&this.cue(r);if(e.dead)for(let[n,i]of[[.55,"shotgun-drop"],[1,"survivor-body-fall"]])(t.deathAge??-1)<n&&e.deathAge>=n&&this.cue(i);else{for(let n=0;n<e.zombies.length;n++){let i=e.zombies[n],r=t.zombies[n];i.visible&&(i.steps??0)>(r.steps??0)&&this.cue("zombie-footstep",{zombie:n}),i.visible&&i.fall>=.99&&r.fall<.99&&this.cue("zombie-body-fall",{zombie:n})}if(Math.floor(t.t/4.7)!==Math.floor(e.t/4.7)){let n=e.zombies.map((i,r)=>({z:i,i:r})).filter(({z:i})=>i.visible&&i.alive&&i.emergence>.98);n.length&&this.cue("zombie-groan",{zombie:n[Math.floor(e.t/4.7)%n.length].i})}}}}pick(t,e){let n=this.canvas.getBoundingClientRect();this.pointer.set((t-n.left)/n.width*2-1,-(e-n.top)/n.height*2+1),this.ray.setFromCamera(this.pointer,this.camp.camera),this.ray.far=1/0;let i=this.zombies.flatMap((l,d)=>this.state.zombies[d].targetable?l.meshes.filter(li):[]),r=this.ray.intersectObjects(i,!1).find(l=>l.point.y>=.02);if(r)return{point:r.point,figure:r.object.userData.zombie,part:r.object.userData.part};let o=null,a=144;for(let l=0;l<this.zombies.length;l++)if(this.state.zombies[l].targetable)for(let d of["head","torso","leftForearm","rightForearm","leftShin","rightShin"]){let f=this.zombies[l].part(d);if(!f||!li(f))continue;let h=new Ce().setFromObject(f).getCenter(new C);if(h.y<.06)continue;let u=h.clone().project(this.camp.camera),p=n.left+(u.x+1)*n.width/2,x=n.top+(1-u.y)*n.height/2,g=(p-t)**2+(x-e)**2;g<a&&(a=g,o={point:h,figure:l,part:d})}if(o)return o;let c=this.ray.ray.intersectPlane(this.ground,new C);return c&&Math.abs(c.x)<5&&Math.abs(c.z)<4.4?{point:c.clone()}:null}firePointer(t,e){let n=this.pick(t,e);return n?this.shoot(n):!1}fireZombie(t,e="head"){if(!this.state?.zombies[t]?.targetable)return!1;let n=this.zombies[t].part(e);return!n||!li(n)?!1:this.shoot({point:new Ce().setFromObject(n).getCenter(new C),figure:t,part:e})}shoot(t){if(!this.started||!this.state.canShoot||this.elapsed-this.lastShotAt<tv)return!1;this.lastShotAt=this.elapsed,this.aim.copy(t.point),this.update();let e=this.props.muzzle.getWorldPosition(new C),n=t.point.clone().sub(e).normalize(),i=new C().crossVectors(n,new C(0,1,0)).normalize(),r=new C().crossVectors(i,n).normalize(),o=this.zombies.flatMap((p,x)=>this.state.zombies[x].targetable?p.meshes.filter(li):[]),a=[],c=new Map,l=[];for(let p=0;p<8;p++){let x=this.shots.length*31+p,g=p===0?0:.046,m=n.clone().addScaledVector(i,(bp(x)-.5)*g*2).addScaledVector(r,(bp(x+11)-.5)*g*2).normalize();this.ray.set(e,m),this.ray.far=12;let M=this.ray.intersectObjects(o,!1).find(T=>T.point.y>=.02),R=this.ray.intersectObjects(this.blockers.filter(li),!1)[0],y=M&&(!R||R.distance>M.distance-.035),S=y?M.point:R?.point??e.clone().addScaledVector(m,10);l.push(S.clone()),y&&(a.push(M.point.clone()),c.set(M.object.userData.zombie+":"+M.object.userData.part,{id:M.object.userData.zombie,part:M.object.userData.part}))}let d={time:this.state.t,source:e,target:t.point.clone(),hit:c.size>0,pellets:l,impacts:a};this.shots.push(d);let f=["leftArm","rightArm","leftLeg","rightLeg","head","leftForearm","rightForearm","leftShin","rightShin","torso"],h=[...c.values()].sort((p,x)=>f.indexOf(p.part)-f.indexOf(x.part)),u=new Set;for(let p of h){let x={leftForearm:"leftArm",rightForearm:"rightArm",leftShin:"leftLeg",rightShin:"rightLeg"}[p.part];if(x&&u.has(p.id+":"+x))continue;let g=this.effects.detached(this.zombies[p.id],p.part,d,p.id);g&&this.cue(p.part==="head"?"head-impact":"limb-sever",{zombie:p.id,part:p.part}),this.hits.push({zombie:p.id,part:p.part,time:this.state.t,debrisId:g?.id,landing:g?.resting.toArray()}),u.add(p.id+":"+p.part)}return this.planFinal=!1,this.cue("shotgun-fire"),d.hit&&(this.cue("flesh-impact"),this.cue("blood-spray")),this.update(),this.camp.render(),!0}reviewTimes(){let t=this.plan,e=t.jobs.find(a=>a.type==="body"),n=t.jobs.find(a=>a.type==="part"),i=t.segments.find(a=>a.pose==="shovel"),r=a=>{let c=t.segments.find(l=>l.pose===a);return c?(c.a+c.b)/2:t.undocked},o=a=>a.feed.a+(a.consumed-a.feed.a)*.45;return{cooking:22.6,dinner:35,cracking:Wt.firstCrack+.35,emergence:Wt.firstSpawn+1.1,"first-shot":Wt.combat+.1,combat:60,"cart-out":r("uncover-cart"),"harvest-approach":Math.max(t.undocked,e.feed.a-1.2),harvest:o(e),"loose-part":o(n??e),jam:r("clear-jam"),"cart-return":t.docked-.4,"bin-lift":r("bin-remove"),"store-box":t.boxReturnStart+1,"cover-cart":r("cover-cart"),repair:(i.a+i.b)/2,sleep:t.sleepAt+2}}snapshot(){return{time:this.state.t,phase:this.state.phase,started:this.started,alive:!this.state.dead,health:this.state.health,canShoot:this.started&&this.state.canShoot,canMove:this.started&&this.state.canMove,position:this.state.hero.position,weapon:"pump-shotgun",lights:this.state.lampOn,food:this.state.foodMode,harvester:this.state.cartMode,cooking:this.state.cooking,window:this.state.windowOpen,processed:this.state.cleanup?.processed??0,harvestItems:this.plan.jobs.length,openHoles:this.state.sites.filter(t=>t.open).length,patches:this.state.sites.filter(t=>t.patched).length,shots:this.shots.length,detachedParts:this.effects.debris.length,drawCalls:this.camp.drawCalls}}dispose(){this.destroyed=!0,this.sound?.dispose(),this.planEpoch++,this.planner?.terminate(),cancelAnimationFrame(this.frameId),this.controls?.dispose(),document.removeEventListener("visibilitychange",this.visibility),this.effects?.clear(),this.camp.dispose()}};var iv=[":host{display:block;position:relative;width:var(--night-shift-size,420px);max-width:100%;aspect-ratio:1;isolation:isolate;contain:layout paint style;}","*{box-sizing:border-box} .stage{position:relative;width:100%;height:100%;background:transparent;}","canvas{display:block;width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;touch-action:none;outline:none;-webkit-tap-highlight-color:transparent;}","canvas:focus-visible{outline:1px dashed #65777e;outline-offset:-8px;border-radius:8px;}",".play{position:absolute;right:12%;bottom:12%;display:grid;place-items:center;width:38px;height:38px;padding:0;border:1px solid #e2e4e2;border-radius:50%;background:#fff;color:#414b53;cursor:pointer;box-shadow:0 2px 9px #151c2510;transition:transform .18s,box-shadow .18s;}",".play:hover{transform:scale(1.07);box-shadow:0 3px 13px #151c251c}.play:focus-visible{outline:2px solid #4e9095;outline-offset:4px}.play:disabled{opacity:.30;cursor:wait}.play[hidden]{display:none}.play svg{width:14px;height:14px;margin-left:2px;}",".sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;}","@media(prefers-reduced-motion:reduce){.play{transition:none}}"].join(`
`),Pu=class extends HTMLElement{static observedAttributes=["review-at"];constructor(){super();let t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=iv,t.append(e);let n=document.createElement("div");n.className="stage",this.canvas=document.createElement("canvas"),this.canvas.width=292,this.canvas.height=292,this.canvas.tabIndex=0,this.canvas.setAttribute("role","application"),this.canvas.setAttribute("aria-label","Night Shift. Press play. During combat use WASD or arrows to move and click zombies to fire the pump shotgun. Space also fires. After sunrise, W pushes the harvester forward, S reverses, and A/D turn it left/right, regardless of its angle. On a phone drag the lower left area to move. Red rings reveal leftovers after a delay. The routine continues when the area is clear."),this.button=document.createElement("button"),this.button.className="play",this.button.type="button",this.button.disabled=!0,this.button.setAttribute("aria-label","Play Night Shift"),this.button.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3 1.5a.8.8 0 0 1 1.2-.7l10 6.1a1.2 1.2 0 0 1 0 2.1L4.2 15.1A.8.8 0 0 1 3 14.4Z"/></svg>',this.status=document.createElement("span"),this.status.className="sr",this.status.setAttribute("role","status"),this.status.textContent="Loading the camp.",n.append(this.canvas,this.button,this.status),t.append(n),this.button.addEventListener("click",()=>this.play())}connectedCallback(){this.engine||(this.ready=this.load())}async load(){try{let t=this.getAttribute("asset-base"),e=t?new URL(t.endsWith("/")?t:t+"/",document.baseURI):new URL("./assets/",import.meta.url),n=this.getAttribute("audio-base"),i=n?new URL(n.endsWith("/")?n:n+"/",document.baseURI):new URL("../audio/",e);if(this.engine=new il(this.canvas,{assetBase:e,audioBase:i,onCue:(r,o)=>this.dispatchEvent(new CustomEvent("nightshift-cue",{detail:{id:r,...o},bubbles:!0,composed:!0})),onState:r=>{this.engine?.started&&(r.phase==="dead"?(this.button.hidden=!1,this.button.setAttribute("aria-label","Retry Night Shift"),this.status.textContent="The survivor died. Press play to retry the night."):r.phase==="dying"?this.status.textContent="The survivor has been overwhelmed.":r.canShoot?this.status.textContent="Night. WASD moves. Click a zombie to fire. On a phone drag the lower left area to move and tap to shoot. Nearby zombies can attack and kill you.":r.harvestControl?this.status.textContent="Cleanup. W always pushes forward along the harvester\u2019s current heading; S reverses; A and D turn left and right. Arrow keys and the phone joystick work the same way. Pass over bodies, loose parts and cracked ground. Red rings highlight leftovers. When everything is collected, he parks the cart and finishes his chores.":r.phase==="cooking"?this.status.textContent="The survivor opens his kitchen window and cooks dinner.":r.phase==="sunrise"&&(this.status.textContent="Sunrise. The survivor will sweep up the remains with his harvester cart, store the red bin, and repair the ground."))}}),await this.engine.init(),!this.isConnected){this.engine?.dispose();return}return this.button.disabled=!1,this.status.textContent="Camp ready. Press play to begin.",this.hasAttribute("review-at")&&this.seek(Number(this.getAttribute("review-at"))),this.dispatchEvent(new CustomEvent("nightshift-ready",{bubbles:!0,composed:!0})),this}catch(t){throw this.status.textContent="The camp could not load.",console.error("Night Shift could not load.",t),this.dispatchEvent(new CustomEvent("nightshift-error",{detail:t,bubbles:!0,composed:!0})),t}}async play(){let t=this.engine?.sound.unlock();await this.ready,await t,this.isConnected&&(this.button.hidden=!0,this.engine.play(),this.canvas.focus({preventScroll:!0}),this.status.textContent="Night Shift started. During combat WASD moves and clicking fires the pump shotgun.")}seek(t){this.engine?.hero&&(this.button.hidden=!0,this.engine.seek(t))}fireZombie(t,e){return this.engine?.fireZombie(t,e)}snapshot(){return this.engine?.snapshot()}reviewTimes(){return this.engine?.reviewTimes()}attributeChangedCallback(t,e,n){t==="review-at"&&e!==n&&this.engine?.hero&&this.seek(Number(n))}disconnectedCallback(){this.engine?.dispose(),this.engine=null}};customElements.get("night-shift")||customElements.define("night-shift",Pu);export{Pu as NightShift};
/*! For license information please see night-shift.js.LEGAL.txt */
