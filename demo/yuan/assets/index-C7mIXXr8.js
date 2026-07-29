(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="160",tu=0,Gl=1,iu=2,$h=1,nu=2,Fi=3,Zi=0,Jt=1,xi=2,qi=0,Ps=1,Fo=2,Vl=3,Wl=4,su=5,Nn=100,ru=101,au=102,Xl=103,ql=104,ou=200,lu=201,cu=202,hu=203,Ho=204,Go=205,du=206,uu=207,fu=208,pu=209,mu=210,gu=211,vu=212,_u=213,yu=214,xu=0,Mu=1,Su=2,fa=3,bu=4,wu=5,Tu=6,Eu=7,Yh=0,Au=1,Cu=2,_n=0,jh=1,Zh=2,Kh=3,Jh=4,Ru=5,Qh=6,ed=300,Us=301,Ns=302,Vo=303,Wo=304,Na=306,Xo=1e3,Mi=1001,qo=1002,kt=1003,$l=1004,$a=1005,Ut=1006,Pu=1007,yr=1008,yn=1009,Lu=1010,Iu=1011,pl=1012,td=1013,gn=1014,vn=1015,$i=1016,id=1017,nd=1018,Vn=1020,Du=1021,Si=1023,Uu=1024,Nu=1025,Wn=1026,Os=1027,$o=1028,sd=1029,Ou=1030,rd=1031,ad=1033,Ya=33776,ja=33777,Za=33778,Ka=33779,Yl=35840,jl=35841,Zl=35842,Kl=35843,od=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,ic=37810,nc=37811,sc=37812,rc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,dc=37819,uc=37820,fc=37821,Ja=36492,pc=36494,mc=36495,zu=36283,gc=36284,vc=36285,_c=36286,ld=3e3,Xn=3001,ku=3200,Bu=3201,cd=0,Fu=1,fi="",yt="srgb",Ki="srgb-linear",ml="display-p3",Oa="display-p3-linear",pa="linear",ft="srgb",ma="rec709",ga="p3",is=7680,yc=519,Hu=512,Gu=513,Vu=514,hd=515,Wu=516,Xu=517,qu=518,$u=519,Yo=35044,xc="300 es",jo=1035,Wi=2e3,va=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const cr=Math.PI/180,xr=180/Math.PI;function Yi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function gl(r,e){return(r%e+e)%e}function Yu(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function ju(r,e,t){return r!==e?(t-r)/(e-r):0}function hr(r,e,t){return(1-t)*r+t*e}function Zu(r,e,t,i){return hr(r,e,1-Math.exp(-t*i))}function Ku(r,e=1){return e-Math.abs(gl(r,e*2)-e)}function Ju(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ef(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tf(r,e){return r+Math.random()*(e-r)}function nf(r){return r*(.5-Math.random())}function sf(r){r!==void 0&&(Mc=r);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(r){return r*cr}function af(r){return r*xr}function Zo(r){return(r&r-1)===0&&r!==0}function of(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _a(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lf(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sc={DEG2RAD:cr,RAD2DEG:xr,generateUUID:Yi,clamp:Nt,euclideanModulo:gl,mapLinear:Yu,inverseLerp:ju,lerp:hr,damp:Zu,pingpong:Ku,smoothstep:Ju,smootherstep:Qu,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:af,isPowerOfTwo:Zo,ceilPowerOfTwo:of,floorPowerOfTwo:_a,setQuaternionFromProperEuler:lf,normalize:lt,denormalize:Ci};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,n,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],_=n[1],y=n[4],x=n[7],R=n[2],A=n[5],C=n[8];return s[0]=a*v+o*_+l*R,s[3]=a*m+o*y+l*A,s[6]=a*f+o*x+l*C,s[1]=c*v+h*_+d*R,s[4]=c*m+h*y+d*A,s[7]=c*f+h*x+d*C,s[2]=u*v+p*_+g*R,s[5]=u*m+p*y+g*A,s[8]=u*f+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Ze;function dd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cf(){const r=ya("canvas");return r.style.display="block",r}const bc={};function dr(r){r in bc||(bc[r]=!0,console.warn(r))}const wc=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tc=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Ki]:{transfer:pa,primaries:ma,toReference:r=>r,fromReference:r=>r},[yt]:{transfer:ft,primaries:ma,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oa]:{transfer:pa,primaries:ga,toReference:r=>r.applyMatrix3(Tc),fromReference:r=>r.applyMatrix3(wc)},[ml]:{transfer:ft,primaries:ga,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Tc),fromReference:r=>r.applyMatrix3(wc).convertLinearToSRGB()}},hf=new Set([Ki,Oa]),at={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Dr[e].toReference,n=Dr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Dr[r].primaries},getTransfer:function(r){return r===fi?pa:Dr[r].transfer}};function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ns;class ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=ya("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ls(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ls(t[i]/255)*255):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let df=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(to(n[a].image)):s.push(to(n[a]))}else s=to(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function to(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uf=0;class Qt extends Hs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=Mi,n=Mi,s=Ut,a=yr,o=Si,l=yn,c=Qt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Yi(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xn?yt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Xn:ld}set encoding(e){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xn?yt:fi}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ed;Qt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,n=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,R=(f+1)/2,A=(h+u)/4,C=(d+v)/4,D=(g+m)/4;return y>x&&y>R?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):x>R?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=A/n,s=D/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=C/s,n=D/s),this.set(i,n,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ff extends Hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xn?yt:fi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Qt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends ff{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pf extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,f*_);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*_;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+v*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,i=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new w,Ec=new Ar;class Cr{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Nr.subVectors(this.max,$s),ss.subVectors(e.a,$s),rs.subVectors(e.b,$s),as.subVectors(e.c,$s),rn.subVectors(rs,ss),an.subVectors(as,rs),En.subVectors(ss,as);let t=[0,-rn.z,rn.y,0,-an.z,an.y,0,-En.z,En.y,rn.z,0,-rn.x,an.z,0,-an.x,En.z,0,-En.x,-rn.y,rn.x,0,-an.y,an.x,0,-En.y,En.x,0];return!no(t,ss,rs,as,Nr)||(t=[1,0,0,0,1,0,0,0,1],!no(t,ss,rs,as,Nr))?!1:(Or.crossVectors(rn,an),t=[Or.x,Or.y,Or.z],no(t,ss,rs,as,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new w,new w,new w,new w,new w,new w,new w,new w],mi=new w,Ur=new Cr,ss=new w,rs=new w,as=new w,rn=new w,an=new w,En=new w,$s=new w,Nr=new w,Or=new w,An=new w;function no(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){An.fromArray(r,s);const o=n.x*Math.abs(An.x)+n.y*Math.abs(An.y)+n.z*Math.abs(An.z),l=e.dot(An),c=t.dot(An),h=i.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mf=new Cr,Ys=new w,so=new w;class za{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mf.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ys,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(so)),this.expandByPoint(Ys.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new w,ro=new w,zr=new w,on=new w,ao=new w,kr=new w,oo=new w;class md{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ro.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),on.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=on.dot(this.direction),l=-on.dot(zr),c=on.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ro).addScaledVector(zr,u),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),n=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,n,s){ao.subVectors(t,e),kr.subVectors(i,e),oo.crossVectors(ao,kr);let a=this.direction.dot(oo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);const l=o*this.direction.dot(kr.crossVectors(on,kr));if(l<0)return null;const c=o*this.direction.dot(ao.cross(on));if(c<0||l+c>a)return null;const h=-o*on.dot(oo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,n,s,a,o,l,c,h,d,u,p,g,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,v,m)}set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,vf)}lookAt(e,t,i){const n=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ln.crossVectors(i,ai),ln.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ln.crossVectors(i,ai)),ln.normalize(),Br.crossVectors(ai,ln),n[0]=ln.x,n[4]=Br.x,n[8]=ai.x,n[1]=ln.y,n[5]=Br.y,n[9]=ai.y,n[2]=ln.z,n[6]=Br.z,n[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],_=i[3],y=i[7],x=i[11],R=i[15],A=n[0],C=n[4],D=n[8],S=n[12],E=n[1],F=n[5],H=n[9],te=n[13],L=n[2],k=n[6],V=n[10],q=n[14],W=n[3],X=n[7],$=n[11],ne=n[15];return s[0]=a*A+o*E+l*L+c*W,s[4]=a*C+o*F+l*k+c*X,s[8]=a*D+o*H+l*V+c*$,s[12]=a*S+o*te+l*q+c*ne,s[1]=h*A+d*E+u*L+p*W,s[5]=h*C+d*F+u*k+p*X,s[9]=h*D+d*H+u*V+p*$,s[13]=h*S+d*te+u*q+p*ne,s[2]=g*A+v*E+m*L+f*W,s[6]=g*C+v*F+m*k+f*X,s[10]=g*D+v*H+m*V+f*$,s[14]=g*S+v*te+m*q+f*ne,s[3]=_*A+y*E+x*L+R*W,s[7]=_*C+y*F+x*k+R*X,s[11]=_*D+y*H+x*V+R*$,s[15]=_*S+y*te+x*q+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+v*(+t*l*p-t*c*u+s*a*u-n*a*p+n*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,y=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,x=h*v*c-g*d*c+g*o*p-a*v*p-h*o*f+a*d*f,R=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,A=t*_+i*y+n*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(v*u*s-d*m*s-v*n*p+i*m*p+d*n*f-i*u*f)*C,e[2]=(o*m*s-v*l*s+v*n*c-i*m*c-o*n*f+i*l*f)*C,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*C,e[4]=y*C,e[5]=(h*m*s-g*u*s+g*n*p-t*m*p-h*n*f+t*u*f)*C,e[6]=(g*l*s-a*m*s-g*n*c+t*m*c+a*n*f-t*l*f)*C,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*p+t*l*p)*C,e[8]=x*C,e[9]=(g*d*s-h*v*s-g*i*p+t*v*p+h*i*f-t*d*f)*C,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*f+t*o*f)*C,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*C,e[12]=R*C,e[13]=(h*v*n-g*d*n+g*i*u-t*v*u-h*i*m+t*d*m)*C,e[14]=(g*o*n-a*v*n-g*i*l+t*v*l+a*i*m-t*o*m)*C,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,v=a*h,m=a*d,f=o*d,_=l*c,y=l*h,x=l*d,R=i.x,A=i.y,C=i.z;return n[0]=(1-(v+f))*R,n[1]=(p+x)*R,n[2]=(g-y)*R,n[3]=0,n[4]=(p-x)*A,n[5]=(1-(u+f))*A,n[6]=(m+_)*A,n[7]=0,n[8]=(g+y)*C,n[9]=(m-_)*C,n[10]=(1-(u+v))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=os.set(n[0],n[1],n[2]).length();const a=os.set(n[4],n[5],n[6]).length(),o=os.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],gi.copy(this);const c=1/s,h=1/a,d=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,t.setFromRotationMatrix(gi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=Wi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===Wi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===va)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Wi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*c,p=(i+n)*h;let g,v;if(o===Wi)g=(a+s)*d,v=-2*d;else if(o===va)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new w,gi=new xt,gf=new w(0,0,0),vf=new w(1,1,1),ln=new w,Br=new w,ai=new w,Ac=new xt,Cc=new Ar;class ka{constructor(e=0,t=0,i=0,n=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const Rc=new w,ls=new Ar,zi=new xt,Fr=new w,js=new w,yf=new w,xf=new Ar,Pc=new w(1,0,0),Lc=new w(0,1,0),Ic=new w(0,0,1),Mf={type:"added"},Sf={type:"removed"};class ct extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new w,t=new ka,i=new Ar,n=new w(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(js,Fr,this.up):zi.lookAt(Fr,js,this.up),this.quaternion.setFromRotationMatrix(zi),n&&(zi.extractRotation(n.matrixWorld),ls.setFromRotationMatrix(zi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ct.DEFAULT_UP=new w(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new w,ki=new w,lo=new w,Bi=new w,cs=new w,hs=new w,Dc=new w,co=new w,ho=new w,uo=new w;let Hr=!1;class ui{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),vi.subVectors(e,t),n.cross(vi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){vi.subVectors(n,t),ki.subVectors(i,t),lo.subVectors(e,t);const a=vi.dot(vi),o=vi.dot(ki),l=vi.dot(lo),c=ki.dot(ki),h=ki.dot(lo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,i,n,s,a,o,l){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static isFrontFacing(e,t,i,n){return vi.subVectors(i,t),ki.subVectors(e,t),vi.cross(ki).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),vi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),ui.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;cs.subVectors(n,i),hs.subVectors(s,i),co.subVectors(e,i);const l=cs.dot(co),c=hs.dot(co);if(l<=0&&c<=0)return t.copy(i);ho.subVectors(e,n);const h=cs.dot(ho),d=hs.dot(ho);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(cs,a);uo.subVectors(e,s);const p=cs.dot(uo),g=hs.dot(uo);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(hs,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Dc.subVectors(s,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(Dc,o);const f=1/(m+v+u);return a=v*f,o=u*f,t.copy(i).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function fo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=at.workingColorSpace){if(e=gl(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fo(a,s,e+1/3),this.g=fo(a,s,e),this.b=fo(a,s,e-1/3)}return at.toWorkingColorSpace(this,n),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return at.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Nt(Ht.r*255,0,255))*65536+Math.round(Nt(Ht.g*255,0,255))*256+Math.round(Nt(Ht.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,n=Ht.g,s=Ht.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=yt){at.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,n=Ht.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Gr);const i=hr(cn.h,Gr.h,t),n=hr(cn.s,Gr.s,t),s=hr(cn.l,Gr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ne;Ne.NAMES=vd;let bf=0;class Kn extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Ps,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bt extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new w,Vr=new ie;class si{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}}class _d extends si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yd extends si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends si{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wf=0;const hi=new xt,po=new ct,ds=new w,oi=new Cr,Zs=new Cr,Dt=new w;class Mt extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?yd:_d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(oi.min,Zs.min),oi.expandByPoint(Dt),Dt.addVectors(oi.max,Zs.max),oi.expandByPoint(Dt)):(oi.expandByPoint(Zs.min),oi.expandByPoint(Zs.max))}oi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Dt.add(ds)),n=Math.max(n,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new w,h[E]=new w;const d=new w,u=new w,p=new w,g=new ie,v=new ie,m=new ie,f=new w,_=new w;function y(E,F,H){d.fromArray(n,E*3),u.fromArray(n,F*3),p.fromArray(n,H*3),g.fromArray(a,E*2),v.fromArray(a,F*2),m.fromArray(a,H*2),u.sub(d),p.sub(d),v.sub(g),m.sub(g);const te=1/(v.x*m.y-m.x*v.y);isFinite(te)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(te),_.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(te),c[E].add(f),c[F].add(f),c[H].add(f),h[E].add(_),h[F].add(_),h[H].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,F=x.length;E<F;++E){const H=x[E],te=H.start,L=H.count;for(let k=te,V=te+L;k<V;k+=3)y(i[k+0],i[k+1],i[k+2])}const R=new w,A=new w,C=new w,D=new w;function S(E){C.fromArray(s,E*3),D.copy(C);const F=c[E];R.copy(F),R.sub(C.multiplyScalar(C.dot(F))).normalize(),A.crossVectors(D,F);const te=A.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=te}for(let E=0,F=x.length;E<F;++E){const H=x[E],te=H.start,L=H.count;for(let k=te,V=te+L;k<V;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,d=new w;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new si(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new xt,Cn=new md,Wr=new za,Nc=new w,us=new w,fs=new w,ps=new w,mo=new w,Xr=new w,qr=new ie,$r=new ie,Yr=new ie,Oc=new w,zc=new w,kc=new w,jr=new w,Zr=new w;class K extends ct{constructor(e=new Mt,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(mo.fromBufferAttribute(d,e),a?Xr.addScaledVector(mo,h):Xr.addScaledVector(mo.sub(t),h))}t.add(Xr)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Wr,Nc)===null||Cn.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Uc),!(i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){const A=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);n=Kr(this,f,e,i,c,h,d,A,C,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);n=Kr(this,a,e,i,c,h,d,_,y,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){const A=x,C=x+1,D=x+2;n=Kr(this,f,e,i,c,h,d,A,C,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,y=m+1,x=m+2;n=Kr(this,a,e,i,c,h,d,_,y,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Tf(r,e,t,i,n,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Zi,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:r}}function Kr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,us),r.getVertexPosition(l,fs),r.getVertexPosition(c,ps);const h=Tf(r,e,t,i,us,fs,ps,jr);if(h){n&&(qr.fromBufferAttribute(n,o),$r.fromBufferAttribute(n,l),Yr.fromBufferAttribute(n,c),h.uv=ui.getInterpolation(jr,us,fs,ps,qr,$r,Yr,new ie)),s&&(qr.fromBufferAttribute(s,o),$r.fromBufferAttribute(s,l),Yr.fromBufferAttribute(s,c),h.uv1=ui.getInterpolation(jr,us,fs,ps,qr,$r,Yr,new ie),h.uv2=h.uv1),a&&(Oc.fromBufferAttribute(a,o),zc.fromBufferAttribute(a,l),kc.fromBufferAttribute(a,c),h.normal=ui.getInterpolation(jr,us,fs,ps,Oc,zc,kc,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};ui.getNormal(us,fs,ps,d.normal),h.face=d}return h}class Ji extends Mt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(d,2));function g(v,m,f,_,y,x,R,A,C,D,S){const E=x/C,F=R/D,H=x/2,te=R/2,L=A/2,k=C+1,V=D+1;let q=0,W=0;const X=new w;for(let $=0;$<V;$++){const ne=$*F-te;for(let se=0;se<k;se++){const G=se*E-H;X[v]=G*_,X[m]=ne*y,X[f]=L,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[f]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(se/C),d.push(1-$/D),q+=1}}for(let $=0;$<D;$++)for(let ne=0;ne<C;ne++){const se=u+ne+k*$,G=u+ne+k*($+1),Y=u+(ne+1)+k*($+1),de=u+(ne+1)+k*$;l.push(se,G,de),l.push(G,Y,de),W+=6}o.addGroup(p,W,S),p+=W,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const i=zs(r[t]);for(const n in i)e[n]=i[n]}return e}function Ef(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xd(r){return r.getRenderTarget()===null?r.outputColorSpace:at.workingColorSpace}const Mr={clone:zs,merge:Yt};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Md extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yi extends Md{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class Rf extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new yi(ms,gs,e,t);n.layers=this.layers,this.add(n);const s=new yi(ms,gs,e,t);s.layers=this.layers,this.add(s);const a=new yi(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new yi(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new yi(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new yi(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sd extends Qt{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pf extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xn?yt:fi),this.texture=new Sd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ji(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:qi});s.uniforms.tEquirect.value=t;const a=new K(n,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=Ut),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const go=new w,Lf=new w,If=new Ze;class In{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=go.subVectors(i,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(go),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||If.getNormalMatrix(e),n=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new za,Jr=new w;class vl{constructor(e=new In,t=new In,i=new In,n=new In,s=new In,a=new In){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],_=n[13],y=n[14],x=n[15];if(i[0].setComponents(l-s,u-c,m-p,x-f).normalize(),i[1].setComponents(l+s,u+c,m+p,x+f).normalize(),i[2].setComponents(l+a,u+h,m+g,x+_).normalize(),i[3].setComponents(l-a,u-h,m-g,x-_).normalize(),i[4].setComponents(l-o,u-d,m-v,x-y).normalize(),t===Wi)i[5].setComponents(l+o,u+d,m+v,x+y).normalize();else if(t===va)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Jr.x=n.normal.x>0?e.max.x:e.min.x,Jr.y=n.normal.y>0?e.max.y:e.min.y,Jr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bd(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Df(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const d=c.array,u=c.usage,p=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){const u=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,c),p.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){const f=g[v];t?r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,n(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Gs extends Mt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const _=f*u-a;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const y=_+c*f,x=_+c*(f+1),R=_+1+c*(f+1),A=_+1+c*f;p.push(y,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jm=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Km=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qm=`#define NORMAL
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
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
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
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ng=`#define STANDARD
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
}`,sg=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,rg=`#define TOON
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
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,og=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ug=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,We={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Of,alphamap_pars_fragment:zf,alphatest_fragment:kf,alphatest_pars_fragment:Bf,aomap_fragment:Ff,aomap_pars_fragment:Hf,batching_pars_vertex:Gf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:$f,bumpmap_pars_fragment:Yf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:ip,common:np,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:ap,displacementmap_vertex:op,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:hp,colorspace_pars_fragment:dp,envmap_fragment:up,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Ap,envmap_vertex:gp,fog_vertex:vp,fog_pars_vertex:_p,fog_fragment:yp,fog_pars_fragment:xp,gradientmap_pars_fragment:Mp,lightmap_fragment:Sp,lightmap_pars_fragment:bp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ep,lights_toon_fragment:Cp,lights_toon_pars_fragment:Rp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Dp,lights_fragment_begin:Up,lights_fragment_maps:Np,lights_fragment_end:Op,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:Fp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphcolor_vertex:$p,morphnormal_vertex:Yp,morphtarget_pars_vertex:jp,morphtarget_vertex:Zp,normal_fragment_begin:Kp,normal_fragment_maps:Jp,normal_pars_fragment:Qp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:am,opaque_fragment:om,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:dm,dithering_pars_fragment:um,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:vm,shadowmask_pars_fragment:_m,skinbase_vertex:ym,skinning_pars_vertex:xm,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:bm,specularmap_pars_fragment:wm,tonemapping_fragment:Tm,tonemapping_pars_fragment:Em,transmission_fragment:Am,transmission_pars_fragment:Cm,uv_pars_fragment:Rm,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Im,background_vert:Dm,background_frag:Um,backgroundCube_vert:Nm,backgroundCube_frag:Om,cube_vert:zm,cube_frag:km,depth_vert:Bm,depth_frag:Fm,distanceRGBA_vert:Hm,distanceRGBA_frag:Gm,equirect_vert:Vm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:$m,meshbasic_frag:Ym,meshlambert_vert:jm,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:Jm,meshnormal_vert:Qm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ig,meshphysical_vert:ng,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:ag,points_vert:og,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:dg,sprite_frag:ug},ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ai={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ai.physical={uniforms:Yt([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Qr={r:0,b:0,g:0};function fg(r,e,t,i,n,s,a){const o=new Ne(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),_=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Na)?(h===void 0&&(h=new K(new Ji(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:zs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,(d!==y||u!==y.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new K(new Gs(2,2),new Kt({name:"BackgroundMaterial",uniforms:zs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Qr,xd(r)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function pg(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function d(L,k,V,q,W){let X=!1;if(a){const $=v(q,V,k);c!==$&&(c=$,p(c.object)),X=f(L,q,V,W),X&&_(L,q,V,W)}else{const $=k.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==$)&&(c.geometry=q.id,c.program=V.id,c.wireframe=$,X=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(L,k,V,q),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,k,V){const q=V.wireframe===!0;let W=o[L.id];W===void 0&&(W={},o[L.id]=W);let X=W[k.id];X===void 0&&(X={},W[k.id]=X);let $=X[q];return $===void 0&&($=m(u()),X[q]=$),$}function m(L){const k=[],V=[],q=[];for(let W=0;W<n;W++)k[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function f(L,k,V,q){const W=c.attributes,X=k.attributes;let $=0;const ne=V.getAttributes();for(const se in ne)if(ne[se].location>=0){const Y=W[se];let de=X[se];if(de===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),Y===void 0||Y.attribute!==de||de&&Y.data!==de.data)return!0;$++}return c.attributesNum!==$||c.index!==q}function _(L,k,V,q){const W={},X=k.attributes;let $=0;const ne=V.getAttributes();for(const se in ne)if(ne[se].location>=0){let Y=X[se];Y===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));const de={};de.attribute=Y,Y&&Y.data&&(de.data=Y.data),W[se]=de,$++}c.attributes=W,c.attributesNum=$,c.index=q}function y(){const L=c.newAttributes;for(let k=0,V=L.length;k<V;k++)L[k]=0}function x(L){R(L,0)}function R(L,k){const V=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;V[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),W[L]!==k&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),W[L]=k)}function A(){const L=c.newAttributes,k=c.enabledAttributes;for(let V=0,q=k.length;V<q;V++)k[V]!==L[V]&&(r.disableVertexAttribArray(V),k[V]=0)}function C(L,k,V,q,W,X,$){$===!0?r.vertexAttribIPointer(L,k,V,W,X):r.vertexAttribPointer(L,k,V,q,W,X)}function D(L,k,V,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=q.attributes,X=V.getAttributes(),$=k.defaultAttributeValues;for(const ne in X){const se=X[ne];if(se.location>=0){let G=W[ne];if(G===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const Y=G.normalized,de=G.itemSize,we=t.get(G);if(we===void 0)continue;const Se=we.buffer,Be=we.type,Ge=we.bytesPerElement,Ie=i.isWebGL2===!0&&(Be===r.INT||Be===r.UNSIGNED_INT||G.gpuType===td);if(G.isInterleavedBufferAttribute){const tt=G.data,U=tt.stride,Vt=G.offset;if(tt.isInstancedInterleavedBuffer){for(let Ee=0;Ee<se.locationSize;Ee++)R(se.location+Ee,tt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ee=0;Ee<se.locationSize;Ee++)x(se.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ee=0;Ee<se.locationSize;Ee++)C(se.location+Ee,de/se.locationSize,Be,Y,U*Ge,(Vt+de/se.locationSize*Ee)*Ge,Ie)}else{if(G.isInstancedBufferAttribute){for(let tt=0;tt<se.locationSize;tt++)R(se.location+tt,G.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let tt=0;tt<se.locationSize;tt++)x(se.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let tt=0;tt<se.locationSize;tt++)C(se.location+tt,de/se.locationSize,Be,Y,de*Ge,de/se.locationSize*tt*Ge,Ie)}}else if($!==void 0){const Y=$[ne];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(se.location,Y);break;case 3:r.vertexAttrib3fv(se.location,Y);break;case 4:r.vertexAttrib4fv(se.location,Y);break;default:r.vertexAttrib1fv(se.location,Y)}}}}A()}function S(){H();for(const L in o){const k=o[L];for(const V in k){const q=k[V];for(const W in q)g(q[W].object),delete q[W];delete k[V]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;const k=o[L.id];for(const V in k){const q=k[V];for(const W in q)g(q[W].object),delete q[W];delete k[V]}delete o[L.id]}function F(L){for(const k in o){const V=o[k];if(V[L.id]===void 0)continue;const q=V[L.id];for(const W in q)g(q[W].object),delete q[W];delete V[L.id]}}function H(){te(),h=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function mg(r,e,t,i){const n=i.isWebGL2;let s;function a(h){s=h}function o(h,d){r.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,u){if(u===0)return;let p,g;if(n)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,d,u),t.update(d,s,u)}function c(h,d,u){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function gg(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,x=a||e.has("OES_texture_float"),R=y&&x,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:A}}function vg(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new In,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,y=_*4;let x=f.clippingState||null;l.value=x,x=h(g,u,y,p);for(let R=0;R!==y;++R)x[R]=t[R];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==v;++y,x+=4)a.copy(d[y]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function _g(r){let e=new WeakMap;function t(a,o){return o===Vo?a.mapping=Us:o===Wo&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vo||o===Wo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pf(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ba extends Md{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Bc=[.125,.215,.35,.446,.526,.582],On=20,vo=new Ba,Fc=new Ne;let _o=null,yo=0,xo=0;const Dn=(1+Math.sqrt(5))/2,vs=1/Dn,Hc=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Dn,vs),new w(0,Dn,-vs),new w(vs,0,Dn),new w(-vs,0,Dn),new w(Dn,vs,0),new w(-Dn,vs,0)];class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){_o=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,yo,xo),e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:$i,format:Si,colorSpace:Ki,depthBuffer:!1},n=Vc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(s)),this._blurMaterial=xg(s,e,t)}return n}_compileMaterial(e){const t=new K(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,i,n){const o=new yi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fc),h.toneMapping=_n,h.autoClear=!1;const p=new bt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new K(new Ji,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Fc),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;ea(n,_*y,f>2?y:0,y,y),h.setRenderTarget(n),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Us||e.mapping===Ns;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Hc[(n-1)%Hc.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new K(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*On-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):On;m>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const f=[];let _=0;for(let C=0;C<On;++C){const D=C/v,S=Math.exp(-D*D/2);f.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const x=this._sizeLods[n],R=3*x*(n>y-As?n-y+As:0),A=4*(this._cubeSize-x);ea(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(d,vo)}}function yg(r){const e=[],t=[],i=[];let n=r;const s=r-As+1+Bc.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-As?l=Bc[a-r+As-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(S,v*g*A),y.set(u,m*g*A);const E=[A,A,A,A,A,A];x.set(E,f*g*A)}const R=new Mt;R.setAttribute("position",new si(_,v)),R.setAttribute("uv",new si(y,m)),R.setAttribute("faceIndex",new si(x,f)),e.push(R),n>As&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vc(r,e,t){const i=new bi(r,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function xg(r,e,t){const i=new Float32Array(On),n=new w(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Wc(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Xc(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mg(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vo||l===Wo,h=l===Us||l===Ns;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Gc(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&n(d)){t===null&&(t=new Gc(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Sg(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function bg(r,e,t,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete n[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const R=_[y+0],A=_[y+1],C=_[y+2];u.push(R,A,A,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const R=y+0,A=y+1,C=y+2;u.push(R,A,A,C,C,R)}}else return;const m=new(dd(u)?yd:_d)(u,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function wg(r,e,t,i){const n=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){r.drawElements(s,g,o,p*l),t.update(g,s,1)}function d(p,g,v){if(v===0)return;let m,f;if(n)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,o,p*l,v),t.update(g,s,v)}function u(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,v);let f=0;for(let _=0;_<v;_++)f+=g[_];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Tg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Eg(r,e){return r[0]-e[0]}function Ag(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Cg(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new Ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let k=function(){te.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let S=0;y===!0&&(S=1),x===!0&&(S=2),R===!0&&(S=3);let E=h.attributes.position.count*S,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*F*4*v),te=new pd(H,E,F,v);te.type=vn,te.needsUpdate=!0;const L=S*4;for(let V=0;V<v;V++){const q=A[V],W=C[V],X=D[V],$=E*F*4*V;for(let ne=0;ne<q.count;ne++){const se=ne*L;y===!0&&(a.fromBufferAttribute(q,ne),H[$+se+0]=a.x,H[$+se+1]=a.y,H[$+se+2]=a.z,H[$+se+3]=0),x===!0&&(a.fromBufferAttribute(W,ne),H[$+se+4]=a.x,H[$+se+5]=a.y,H[$+se+6]=a.z,H[$+se+7]=0),R===!0&&(a.fromBufferAttribute(X,ne),H[$+se+8]=a.x,H[$+se+9]=a.y,H[$+se+10]=a.z,H[$+se+11]=X.itemSize===4?a.w:1)}}m={count:v,texture:te,size:new ie(E,F)},s.set(h,m),h.addEventListener("dispose",k)}let f=0;for(let y=0;y<u.length;y++)f+=u[y];const _=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let v=i[h.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];i[h.id]=v}for(let x=0;x<g;x++){const R=v[x];R[0]=x,R[1]=u[x]}v.sort(Ag);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Eg);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const R=o[x],A=R[0],C=R[1];A!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+x)!==m[A]&&h.setAttribute("morphTarget"+x,m[A]),f&&h.getAttribute("morphNormal"+x)!==f[A]&&h.setAttribute("morphNormal"+x,f[A]),n[x]=C,_+=C):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Rg(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class wd extends Qt{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Wn&&(i=gn),i===void 0&&h===Os&&(i=Vn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Td=new Qt,Ed=new wd(1,1);Ed.compareFunction=hd;const Ad=new pd,Cd=new pf,Rd=new Sd,qc=[],$c=[],Yc=new Float32Array(16),jc=new Float32Array(9),Zc=new Float32Array(4);function Vs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=qc[n];if(s===void 0&&(s=new Float32Array(n),qc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Fa(r,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Pg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function Dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Ug(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Zc.set(i),r.uniformMatrix2fv(this.addr,!1,Zc),Pt(t,i)}}function Ng(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;jc.set(i),r.uniformMatrix3fv(this.addr,!1,jc),Pt(t,i)}}function Og(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Yc.set(i),r.uniformMatrix4fv(this.addr,!1,Yc),Pt(t,i)}}function zg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function Hg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function Wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function Xg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Ed:Td;t.setTexture2D(e||s,n)}function qg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Cd,n)}function $g(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Rd,n)}function Yg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ad,n)}function jg(r){switch(r){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Bg;case 35669:case 35673:return Fg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Yg}}function Zg(r,e){r.uniform1fv(this.addr,e)}function Kg(r,e){const t=Vs(e,this.size,2);r.uniform2fv(this.addr,t)}function Jg(r,e){const t=Vs(e,this.size,3);r.uniform3fv(this.addr,t)}function Qg(r,e){const t=Vs(e,this.size,4);r.uniform4fv(this.addr,t)}function e0(r,e){const t=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function t0(r,e){const t=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function i0(r,e){const t=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function n0(r,e){r.uniform1iv(this.addr,e)}function s0(r,e){r.uniform2iv(this.addr,e)}function r0(r,e){r.uniform3iv(this.addr,e)}function a0(r,e){r.uniform4iv(this.addr,e)}function o0(r,e){r.uniform1uiv(this.addr,e)}function l0(r,e){r.uniform2uiv(this.addr,e)}function c0(r,e){r.uniform3uiv(this.addr,e)}function h0(r,e){r.uniform4uiv(this.addr,e)}function d0(r,e,t){const i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Td,s[a])}function u0(r,e,t){const i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Cd,s[a])}function f0(r,e,t){const i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Rd,s[a])}function p0(r,e,t){const i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ad,s[a])}function m0(r){switch(r){case 5126:return Zg;case 35664:return Kg;case 35665:return Jg;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return i0;case 5124:case 35670:return n0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class v0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m0(t.type)}}class _0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Kc(r,e){r.seq.push(e),r.map[e.id]=e}function y0(r,e,t){const i=r.name,n=i.length;for(Mo.lastIndex=0;;){const s=Mo.exec(i),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Kc(t,c===void 0?new g0(o,r,e):new v0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new _0(o),Kc(t,d)),t=d}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);y0(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Jc(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const x0=37297;let M0=0;function S0(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function b0(r){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(r);let i;switch(e===t?i="":e===ga&&t===ma?i="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(i="LinearSRGBToLinearDisplayP3"),r){case Ki:case Oa:return[i,"LinearTransferOETF"];case yt:case ml:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Qc(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+S0(r.getShaderSource(e),a)}else return n}function w0(r,e){const t=b0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function T0(r,e){let t;switch(e){case jh:t="Linear";break;case Zh:t="Reinhard";break;case Kh:t="OptimizedCineon";break;case Jh:t="ACESFilmic";break;case Qh:t="AgX";break;case Ru:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function A0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function C0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R0(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cs(r){return r!==""}function eh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(r){return r.replace(P0,I0)}const L0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I0(r,e){let t=We[e];if(t===void 0){const i=L0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(r){return r.replace(D0,U0)}function U0(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function nh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function k0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case Au:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function B0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F0(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=N0(t),c=O0(t),h=z0(t),d=k0(t),u=B0(t),p=t.isWebGL2?"":E0(t),g=A0(t),v=C0(s),m=n.createProgram();let f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(f=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[p,nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?We.tonemapping_pars_fragment:"",t.toneMapping!==_n?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Ko(a),a=eh(a,t),a=th(a,t),o=Ko(o),o=eh(o,t),o=th(o,t),a=ih(a),o=ih(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+f+a,R=y+_+o,A=Jc(n,n.VERTEX_SHADER,x),C=Jc(n,n.FRAGMENT_SHADER,R);n.attachShader(m,A),n.attachShader(m,C),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function D(H){if(r.debug.checkShaderErrors){const te=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(A).trim(),k=n.getShaderInfoLog(C).trim();let V=!0,q=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,A,C);else{const W=Qc(n,A,"vertex"),X=Qc(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+W+`
`+X)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||k==="")&&(q=!1);q&&(H.diagnostics={runnable:V,programLog:te,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:_}})}n.deleteShader(A),n.deleteShader(C),S=new ha(n,m),E=R0(n,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(m,x0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=C,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new V0(e),t.set(e,i)),i}}class V0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function W0(r,e,t,i,n,s,a){const o=new gd,l=new G0,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,E,F,H,te){const L=H.fog,k=te.geometry,V=S.isMeshStandardMaterial?H.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=q&&q.mapping===Na?q.image.height:null,X=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=$!==void 0?$.length:0;let se=0;k.morphAttributes.position!==void 0&&(se=1),k.morphAttributes.normal!==void 0&&(se=2),k.morphAttributes.color!==void 0&&(se=3);let G,Y,de,we;if(X){const Wt=Ai[X];G=Wt.vertexShader,Y=Wt.fragmentShader}else G=S.vertexShader,Y=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const Se=r.getRenderTarget(),Be=te.isInstancedMesh===!0,Ge=te.isBatchedMesh===!0,Ie=!!S.map,tt=!!S.matcap,U=!!q,Vt=!!S.aoMap,Ee=!!S.lightMap,ze=!!S.bumpMap,_e=!!S.normalMap,mt=!!S.displacementMap,Xe=!!S.emissiveMap,T=!!S.metalnessMap,M=!!S.roughnessMap,O=S.anisotropy>0,Q=S.clearcoat>0,Z=S.iridescence>0,ee=S.sheen>0,xe=S.transmission>0,he=O&&!!S.anisotropyMap,me=Q&&!!S.clearcoatMap,Re=Q&&!!S.clearcoatNormalMap,qe=Q&&!!S.clearcoatRoughnessMap,j=Z&&!!S.iridescenceMap,ot=Z&&!!S.iridescenceThicknessMap,Ke=ee&&!!S.sheenColorMap,Oe=ee&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ge=!!S.specularColorMap,Ve=!!S.specularIntensityMap,rt=xe&&!!S.transmissionMap,vt=xe&&!!S.thicknessMap,Ye=!!S.gradientMap,re=!!S.alphaMap,P=S.alphaTest>0,oe=!!S.alphaHash,le=!!S.extensions,De=!!k.attributes.uv1,Ae=!!k.attributes.uv2,ht=!!k.attributes.uv3;let dt=_n;return S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(dt=r.toneMapping),{isWebGL2:h,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:Y,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ge,instancing:Be,instancingColor:Be&&te.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ki,map:Ie,matcap:tt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:W,aoMap:Vt,lightMap:Ee,bumpMap:ze,normalMap:_e,displacementMap:u&&mt,emissiveMap:Xe,normalMapObjectSpace:_e&&S.normalMapType===Fu,normalMapTangentSpace:_e&&S.normalMapType===cd,metalnessMap:T,roughnessMap:M,anisotropy:O,anisotropyMap:he,clearcoat:Q,clearcoatMap:me,clearcoatNormalMap:Re,clearcoatRoughnessMap:qe,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:ee,sheenColorMap:Ke,sheenRoughnessMap:Oe,specularMap:Te,specularColorMap:ge,specularIntensityMap:Ve,transmission:xe,transmissionMap:rt,thicknessMap:vt,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===Ps,alphaMap:re,alphaTest:P,alphaHash:oe,combine:S.combine,mapUv:Ie&&v(S.map.channel),aoMapUv:Vt&&v(S.aoMap.channel),lightMapUv:Ee&&v(S.lightMap.channel),bumpMapUv:ze&&v(S.bumpMap.channel),normalMapUv:_e&&v(S.normalMap.channel),displacementMapUv:mt&&v(S.displacementMap.channel),emissiveMapUv:Xe&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:he&&v(S.anisotropyMap.channel),clearcoatMapUv:me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(S.sheenRoughnessMap.channel),specularMapUv:Te&&v(S.specularMap.channel),specularColorMapUv:ge&&v(S.specularColorMap.channel),specularIntensityMapUv:Ve&&v(S.specularIntensityMap.channel),transmissionMapUv:rt&&v(S.transmissionMap.channel),thicknessMapUv:vt&&v(S.thicknessMap.channel),alphaMapUv:re&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ae,vertexUv3s:ht,pointsUvs:te.isPoints===!0&&!!k.attributes.uv&&(Ie||re),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xi,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)E.push(F),E.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(E,S),y(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function x(S){const E=g[S.type];let F;if(E){const H=Ai[E];F=Mr.clone(H.uniforms)}else F=S.uniforms;return F}function R(S,E){let F;for(let H=0,te=c.length;H<te;H++){const L=c[H];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new F0(r,E,S,s),c.push(F)),F}function A(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:D}}function X0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rh(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(d,u,p,g,v,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||q0),i.length>1&&i.sort(u||sh),n.length>1&&n.sort(u||sh)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function $0(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new rh,r.set(i,[a])):n>=s.length?(a=new rh,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Y0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ne};break;case"SpotLight":t={position:new w,direction:new w,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function j0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z0=0;function K0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function J0(r,e){const t=new Y0,i=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new w);const s=new w,a=new xt,o=new xt;function l(h,d){let u=0,p=0,g=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let v=0,m=0,f=0,_=0,y=0,x=0,R=0,A=0,C=0,D=0,S=0;h.sort(K0);const E=d===!0?Math.PI:1;for(let H=0,te=h.length;H<te;H++){const L=h[H],k=L.color,V=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*V*E,p+=k.g*V*E,g+=k.b*V*E;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);S++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const $=L.shadow,ne=i.get(L);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,n.directionalShadow[v]=ne,n.directionalShadowMap[v]=W,n.directionalShadowMatrix[v]=L.shadow.matrix,x++}n.directional[v]=X,v++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(V*E),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[f]=X;const $=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,$.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[f]=$.matrix,L.castShadow){const ne=i.get(L);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,n.spotShadow[f]=ne,n.spotShadowMap[f]=W,A++}f++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(k).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=X,_++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){const $=L.shadow,ne=i.get(L);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,ne.shadowCameraNear=$.camera.near,ne.shadowCameraFar=$.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=L.shadow.matrix,R++}n.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*E),X.groundColor.copy(L.groundColor).multiplyScalar(V*E),n.hemi[y]=X,y++}}_>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==_||F.hemiLength!==y||F.numDirectionalShadows!==x||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==C||F.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=f,n.rectArea.length=_,n.point.length=m,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=A+C-D,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=S,F.directionalLength=v,F.pointLength=m,F.spotLength=f,F.rectAreaLength=_,F.hemiLength=y,F.numDirectionalShadows=x,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=C,F.numLightProbes=S,n.version=Z0++)}function c(h,d){let u=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const x=h[_];if(x.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),u++}else if(x.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const R=n.rectArea[v];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(x.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const R=n.point[p];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const R=n.hemi[m];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function ah(r,e){const t=new J0(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(d){i.push(d)}function o(d){n.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q0(r,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ah(r,e),t.set(s,[l])):a>=o.length?(l=new ah(r,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class ev extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tv extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sv(r,e,t){let i=new vl;const n=new ie,s=new ie,a=new Ot,o=new ev({depthPacking:Bu}),l=new tv,c={},h=t.maxTextureSize,d={[Zi]:Jt,[Jt]:Zi,[xi]:xi},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:iv,fragmentShader:nv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new K(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let f=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),E=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),H=r.state;H.setBlending(qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const te=f!==Fi&&this.type===Fi,L=f===Fi&&this.type!==Fi;for(let k=0,V=A.length;k<V;k++){const q=A[k],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const X=W.getFrameExtents();if(n.multiply(X),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/X.x),n.x=s.x*X.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/X.y),n.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||te===!0||L===!0){const ne=this.type!==Fi?{minFilter:kt,magFilter:kt}:{};W.map!==null&&W.map.dispose(),W.map=new bi(n.x,n.y,ne),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const $=W.getViewportCount();for(let ne=0;ne<$;ne++){const se=W.getViewport(ne);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),H.viewport(a),W.updateMatrices(q,ne),i=W.getFrustum(),x(C,D,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Fi&&_(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,E,F)};function _(A,C){const D=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,D,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,D,p,v,null)}function y(A,C,D,S){let E=null;const F=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)E=F;else if(E=D.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=E.uuid,te=C.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let k=L[te];k===void 0&&(k=E.clone(),L[te]=k,C.addEventListener("dispose",R)),E=k}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Fi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=r.properties.get(E);H.light=D}return E}function x(A,C,D,S,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const te=e.update(A),L=A.material;if(Array.isArray(L)){const k=te.groups;for(let V=0,q=k.length;V<q;V++){const W=k[V],X=L[W.materialIndex];if(X&&X.visible){const $=y(A,X,S,E);A.onBeforeShadow(r,A,C,D,te,$,W),r.renderBufferDirect(D,null,te,$,A,W),A.onAfterShadow(r,A,C,D,te,$,W)}}}else if(L.visible){const k=y(A,L,S,E);A.onBeforeShadow(r,A,C,D,te,k,null),r.renderBufferDirect(D,null,te,k,A,null),A.onAfterShadow(r,A,C,D,te,k,null)}}const H=A.children;for(let te=0,L=H.length;te<L;te++)x(H[te],C,D,S,E)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const S=c[D],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function rv(r,e,t){const i=t.isWebGL2;function n(){let P=!1;const oe=new Ot;let le=null;const De=new Ot(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!P&&(r.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){P=Ae},setClear:function(Ae,ht,dt,Lt,Wt){Wt===!0&&(Ae*=Lt,ht*=Lt,dt*=Lt),oe.set(Ae,ht,dt,Lt),De.equals(oe)===!1&&(r.clearColor(Ae,ht,dt,Lt),De.copy(oe))},reset:function(){P=!1,le=null,De.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,le=null,De=null;return{setTest:function(Ae){Ae?Ge(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!P&&(r.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(le!==Ae){switch(Ae){case xu:r.depthFunc(r.NEVER);break;case Mu:r.depthFunc(r.ALWAYS);break;case Su:r.depthFunc(r.LESS);break;case fa:r.depthFunc(r.LEQUAL);break;case bu:r.depthFunc(r.EQUAL);break;case wu:r.depthFunc(r.GEQUAL);break;case Tu:r.depthFunc(r.GREATER);break;case Eu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=Ae}},setLocked:function(Ae){P=Ae},setClear:function(Ae){De!==Ae&&(r.clearDepth(Ae),De=Ae)},reset:function(){P=!1,oe=null,le=null,De=null}}}function a(){let P=!1,oe=null,le=null,De=null,Ae=null,ht=null,dt=null,Lt=null,Wt=null;return{setTest:function(ut){P||(ut?Ge(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(ut){oe!==ut&&!P&&(r.stencilMask(ut),oe=ut)},setFunc:function(ut,Xt,Ti){(le!==ut||De!==Xt||Ae!==Ti)&&(r.stencilFunc(ut,Xt,Ti),le=ut,De=Xt,Ae=Ti)},setOp:function(ut,Xt,Ti){(ht!==ut||dt!==Xt||Lt!==Ti)&&(r.stencilOp(ut,Xt,Ti),ht=ut,dt=Xt,Lt=Ti)},setLocked:function(ut){P=ut},setClear:function(ut){Wt!==ut&&(r.clearStencil(ut),Wt=ut)},reset:function(){P=!1,oe=null,le=null,De=null,Ae=null,ht=null,dt=null,Lt=null,Wt=null}}}const o=new n,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,x=null,R=null,A=null,C=null,D=null,S=new Ne(0,0,0),E=0,F=!1,H=null,te=null,L=null,k=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),W=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=X>=2);let ne=null,se={};const G=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),de=new Ot().fromArray(G),we=new Ot().fromArray(Y);function Se(P,oe,le,De){const Ae=new Uint8Array(4),ht=r.createTexture();r.bindTexture(P,ht),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<le;dt++)i&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(oe+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return ht}const Be={};Be[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),Be[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Be[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ge(r.DEPTH_TEST),l.setFunc(fa),Xe(!1),T(Gl),Ge(r.CULL_FACE),_e(qi);function Ge(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function Ie(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function tt(P,oe){return p[P]!==oe?(r.bindFramebuffer(P,oe),p[P]=oe,i&&(P===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=oe),P===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function U(P,oe){let le=v,De=!1;if(P)if(le=g.get(oe),le===void 0&&(le=[],g.set(oe,le)),P.isWebGLMultipleRenderTargets){const Ae=P.texture;if(le.length!==Ae.length||le[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,dt=Ae.length;ht<dt;ht++)le[ht]=r.COLOR_ATTACHMENT0+ht;le.length=Ae.length,De=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,De=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,De=!0);De&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Vt(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const Ee={[Nn]:r.FUNC_ADD,[ru]:r.FUNC_SUBTRACT,[au]:r.FUNC_REVERSE_SUBTRACT};if(i)Ee[Xl]=r.MIN,Ee[ql]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[Xl]=P.MIN_EXT,Ee[ql]=P.MAX_EXT)}const ze={[ou]:r.ZERO,[lu]:r.ONE,[cu]:r.SRC_COLOR,[Ho]:r.SRC_ALPHA,[mu]:r.SRC_ALPHA_SATURATE,[fu]:r.DST_COLOR,[du]:r.DST_ALPHA,[hu]:r.ONE_MINUS_SRC_COLOR,[Go]:r.ONE_MINUS_SRC_ALPHA,[pu]:r.ONE_MINUS_DST_COLOR,[uu]:r.ONE_MINUS_DST_ALPHA,[gu]:r.CONSTANT_COLOR,[vu]:r.ONE_MINUS_CONSTANT_COLOR,[_u]:r.CONSTANT_ALPHA,[yu]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(P,oe,le,De,Ae,ht,dt,Lt,Wt,ut){if(P===qi){f===!0&&(Ie(r.BLEND),f=!1);return}if(f===!1&&(Ge(r.BLEND),f=!0),P!==su){if(P!==_||ut!==F){if((y!==Nn||A!==Nn)&&(r.blendEquation(r.FUNC_ADD),y=Nn,A=Nn),ut)switch(P){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFunc(r.ONE,r.ONE);break;case Vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,R=null,C=null,D=null,S.set(0,0,0),E=0,_=P,F=ut}return}Ae=Ae||oe,ht=ht||le,dt=dt||De,(oe!==y||Ae!==A)&&(r.blendEquationSeparate(Ee[oe],Ee[Ae]),y=oe,A=Ae),(le!==x||De!==R||ht!==C||dt!==D)&&(r.blendFuncSeparate(ze[le],ze[De],ze[ht],ze[dt]),x=le,R=De,C=ht,D=dt),(Lt.equals(S)===!1||Wt!==E)&&(r.blendColor(Lt.r,Lt.g,Lt.b,Wt),S.copy(Lt),E=Wt),_=P,F=!1}function mt(P,oe){P.side===xi?Ie(r.CULL_FACE):Ge(r.CULL_FACE);let le=P.side===Jt;oe&&(le=!le),Xe(le),P.blending===Ps&&P.transparent===!1?_e(qi):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const De=P.stencilWrite;c.setTest(De),De&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){H!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),H=P)}function T(P){P!==tu?(Ge(r.CULL_FACE),P!==te&&(P===Gl?r.cullFace(r.BACK):P===iu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),te=P}function M(P){P!==L&&(W&&r.lineWidth(P),L=P)}function O(P,oe,le){P?(Ge(r.POLYGON_OFFSET_FILL),(k!==oe||V!==le)&&(r.polygonOffset(oe,le),k=oe,V=le)):Ie(r.POLYGON_OFFSET_FILL)}function Q(P){P?Ge(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Z(P){P===void 0&&(P=r.TEXTURE0+q-1),ne!==P&&(r.activeTexture(P),ne=P)}function ee(P,oe,le){le===void 0&&(ne===null?le=r.TEXTURE0+q-1:le=ne);let De=se[le];De===void 0&&(De={type:void 0,texture:void 0},se[le]=De),(De.type!==P||De.texture!==oe)&&(ne!==le&&(r.activeTexture(le),ne=le),r.bindTexture(P,oe||Be[P]),De.type=P,De.texture=oe)}function xe(){const P=se[ne];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(P){de.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function rt(P){we.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),we.copy(P))}function vt(P,oe){let le=d.get(oe);le===void 0&&(le=new WeakMap,d.set(oe,le));let De=le.get(P);De===void 0&&(De=r.getUniformBlockIndex(oe,P.name),le.set(P,De))}function Ye(P,oe){const De=d.get(oe).get(P);h.get(oe)!==De&&(r.uniformBlockBinding(oe,De,P.__bindingPointIndex),h.set(oe,De))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,se={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,x=null,R=null,A=null,C=null,D=null,S=new Ne(0,0,0),E=0,F=!1,H=null,te=null,L=null,k=null,V=null,de.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ge,disable:Ie,bindFramebuffer:tt,drawBuffers:U,useProgram:Vt,setBlending:_e,setMaterial:mt,setFlipSided:Xe,setCullFace:T,setLineWidth:M,setPolygonOffset:O,setScissorTest:Q,activeTexture:Z,bindTexture:ee,unbindTexture:xe,compressedTexImage2D:he,compressedTexImage3D:me,texImage2D:Te,texImage3D:ge,updateUBOMapping:vt,uniformBlockBinding:Ye,texStorage2D:Ke,texStorage3D:Oe,texSubImage2D:Re,texSubImage3D:qe,compressedTexSubImage2D:j,compressedTexSubImage3D:ot,scissor:Ve,viewport:rt,reset:re}}function av(r,e,t,i,n,s,a){const o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):ya("canvas")}function v(T,M,O,Q){let Z=1;if((T.width>Q||T.height>Q)&&(Z=Q/Math.max(T.width,T.height)),Z<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=M?_a:Math.floor,xe=ee(Z*T.width),he=ee(Z*T.height);d===void 0&&(d=g(xe,he));const me=O?g(xe,he):d;return me.width=xe,me.height=he,me.getContext("2d").drawImage(T,0,0,xe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+he+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Zo(T.width)&&Zo(T.height)}function f(T){return o?!1:T.wrapS!==Mi||T.wrapT!==Mi||T.minFilter!==kt&&T.minFilter!==Ut}function _(T,M){return T.generateMipmaps&&M&&T.minFilter!==kt&&T.minFilter!==Ut}function y(T){r.generateMipmap(T)}function x(T,M,O,Q,Z=!1){if(o===!1)return M;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=M;if(M===r.RED&&(O===r.FLOAT&&(ee=r.R32F),O===r.HALF_FLOAT&&(ee=r.R16F),O===r.UNSIGNED_BYTE&&(ee=r.R8)),M===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(ee=r.R8UI),O===r.UNSIGNED_SHORT&&(ee=r.R16UI),O===r.UNSIGNED_INT&&(ee=r.R32UI),O===r.BYTE&&(ee=r.R8I),O===r.SHORT&&(ee=r.R16I),O===r.INT&&(ee=r.R32I)),M===r.RG&&(O===r.FLOAT&&(ee=r.RG32F),O===r.HALF_FLOAT&&(ee=r.RG16F),O===r.UNSIGNED_BYTE&&(ee=r.RG8)),M===r.RGBA){const xe=Z?pa:at.getTransfer(Q);O===r.FLOAT&&(ee=r.RGBA32F),O===r.HALF_FLOAT&&(ee=r.RGBA16F),O===r.UNSIGNED_BYTE&&(ee=xe===ft?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(T,M,O){return _(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){return T===kt||T===$l||T===$a?r.NEAREST:r.LINEAR}function C(T){const M=T.target;M.removeEventListener("dispose",C),S(M),M.isVideoTexture&&h.delete(M)}function D(T){const M=T.target;M.removeEventListener("dispose",D),F(M)}function S(T){const M=i.get(T);if(M.__webglInit===void 0)return;const O=T.source,Q=u.get(O);if(Q){const Z=Q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(Q).length===0&&u.delete(O)}i.remove(T)}function E(T){const M=i.get(T);r.deleteTexture(M.__webglTexture);const O=T.source,Q=u.get(O);delete Q[M.__cacheKey],a.memory.textures--}function F(T){const M=T.texture,O=i.get(T),Q=i.get(M);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let ee=0;ee<O.__webglFramebuffer[Z].length;ee++)r.deleteFramebuffer(O.__webglFramebuffer[Z][ee]);else r.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)r.deleteFramebuffer(O.__webglFramebuffer[Z]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,ee=M.length;Z<ee;Z++){const xe=i.get(M[Z]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(M[Z])}i.remove(M),i.remove(T)}let H=0;function te(){H=0}function L(){const T=H;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),H+=1,T}function k(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function V(T,M){const O=i.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,T,M);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+M)}function q(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){de(O,T,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+M)}function W(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){de(O,T,M);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+M)}function X(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){we(O,T,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+M)}const $={[Xo]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[qo]:r.MIRRORED_REPEAT},ne={[kt]:r.NEAREST,[$l]:r.NEAREST_MIPMAP_NEAREST,[$a]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Pu]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},se={[Hu]:r.NEVER,[$u]:r.ALWAYS,[Gu]:r.LESS,[hd]:r.LEQUAL,[Vu]:r.EQUAL,[qu]:r.GEQUAL,[Wu]:r.GREATER,[Xu]:r.NOTEQUAL};function G(T,M,O){if(O?(r.texParameteri(T,r.TEXTURE_WRAP_S,$[M.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,$[M.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,$[M.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ne[M.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ne[M.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Mi||M.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,A(M.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==kt&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===kt||M.minFilter!==$a&&M.minFilter!==yr||M.type===vn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(r.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Y(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let Z=u.get(Q);Z===void 0&&(Z={},u.set(Q,Z));const ee=k(M);if(ee!==T.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ee].usedTimes++;const xe=Z[T.__cacheKey];xe!==void 0&&(Z[T.__cacheKey].usedTimes--,xe.usedTimes===0&&E(M)),T.__cacheKey=ee,T.__webglTexture=Z[ee].texture}return O}function de(T,M,O){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=Y(T,M),ee=M.source;t.bindTexture(Q,T.__webglTexture,r.TEXTURE0+O);const xe=i.get(ee);if(ee.version!==xe.__version||Z===!0){t.activeTexture(r.TEXTURE0+O);const he=at.getPrimaries(at.workingColorSpace),me=M.colorSpace===fi?null:at.getPrimaries(M.colorSpace),Re=M.colorSpace===fi||he===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const qe=f(M)&&m(M.image)===!1;let j=v(M.image,qe,!1,n.maxTextureSize);j=Xe(M,j);const ot=m(j)||o,Ke=s.convert(M.format,M.colorSpace);let Oe=s.convert(M.type),Te=x(M.internalFormat,Ke,Oe,M.colorSpace,M.isVideoTexture);G(Q,M,ot);let ge;const Ve=M.mipmaps,rt=o&&M.isVideoTexture!==!0&&Te!==od,vt=xe.__version===void 0||Z===!0,Ye=R(M,j,ot);if(M.isDepthTexture)Te=r.DEPTH_COMPONENT,o?M.type===vn?Te=r.DEPTH_COMPONENT32F:M.type===gn?Te=r.DEPTH_COMPONENT24:M.type===Vn?Te=r.DEPTH24_STENCIL8:Te=r.DEPTH_COMPONENT16:M.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wn&&Te===r.DEPTH_COMPONENT&&M.type!==pl&&M.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gn,Oe=s.convert(M.type)),M.format===Os&&Te===r.DEPTH_COMPONENT&&(Te=r.DEPTH_STENCIL,M.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vn,Oe=s.convert(M.type))),vt&&(rt?t.texStorage2D(r.TEXTURE_2D,1,Te,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,Te,j.width,j.height,0,Ke,Oe,null));else if(M.isDataTexture)if(Ve.length>0&&ot){rt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ye,Te,Ve[0].width,Ve[0].height);for(let re=0,P=Ve.length;re<P;re++)ge=Ve[re],rt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,Ke,Oe,ge.data):t.texImage2D(r.TEXTURE_2D,re,Te,ge.width,ge.height,0,Ke,Oe,ge.data);M.generateMipmaps=!1}else rt?(vt&&t.texStorage2D(r.TEXTURE_2D,Ye,Te,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,Ke,Oe,j.data)):t.texImage2D(r.TEXTURE_2D,0,Te,j.width,j.height,0,Ke,Oe,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,Te,Ve[0].width,Ve[0].height,j.depth);for(let re=0,P=Ve.length;re<P;re++)ge=Ve[re],M.format!==Si?Ke!==null?rt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,j.depth,Ke,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,j.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,j.depth,Ke,Oe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,j.depth,0,Ke,Oe,ge.data)}else{rt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ye,Te,Ve[0].width,Ve[0].height);for(let re=0,P=Ve.length;re<P;re++)ge=Ve[re],M.format!==Si?Ke!==null?rt?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,Ke,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,Ke,Oe,ge.data):t.texImage2D(r.TEXTURE_2D,re,Te,ge.width,ge.height,0,Ke,Oe,ge.data)}else if(M.isDataArrayTexture)rt?(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,Te,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ke,Oe,j.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,j.width,j.height,j.depth,0,Ke,Oe,j.data);else if(M.isData3DTexture)rt?(vt&&t.texStorage3D(r.TEXTURE_3D,Ye,Te,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ke,Oe,j.data)):t.texImage3D(r.TEXTURE_3D,0,Te,j.width,j.height,j.depth,0,Ke,Oe,j.data);else if(M.isFramebufferTexture){if(vt)if(rt)t.texStorage2D(r.TEXTURE_2D,Ye,Te,j.width,j.height);else{let re=j.width,P=j.height;for(let oe=0;oe<Ye;oe++)t.texImage2D(r.TEXTURE_2D,oe,Te,re,P,0,Ke,Oe,null),re>>=1,P>>=1}}else if(Ve.length>0&&ot){rt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ye,Te,Ve[0].width,Ve[0].height);for(let re=0,P=Ve.length;re<P;re++)ge=Ve[re],rt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ke,Oe,ge):t.texImage2D(r.TEXTURE_2D,re,Te,Ke,Oe,ge);M.generateMipmaps=!1}else rt?(vt&&t.texStorage2D(r.TEXTURE_2D,Ye,Te,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ke,Oe,j)):t.texImage2D(r.TEXTURE_2D,0,Te,Ke,Oe,j);_(M,ot)&&y(Q),xe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function we(T,M,O){if(M.image.length!==6)return;const Q=Y(T,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const ee=i.get(Z);if(Z.version!==ee.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);const xe=at.getPrimaries(at.workingColorSpace),he=M.colorSpace===fi?null:at.getPrimaries(M.colorSpace),me=M.colorSpace===fi||xe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,qe=M.image[0]&&M.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!Re&&!qe?j[re]=v(M.image[re],!1,!0,n.maxCubemapSize):j[re]=qe?M.image[re].image:M.image[re],j[re]=Xe(M,j[re]);const ot=j[0],Ke=m(ot)||o,Oe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),ge=x(M.internalFormat,Oe,Te,M.colorSpace),Ve=o&&M.isVideoTexture!==!0,rt=ee.__version===void 0||Q===!0;let vt=R(M,ot,Ke);G(r.TEXTURE_CUBE_MAP,M,Ke);let Ye;if(Re){Ve&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ge,ot.width,ot.height);for(let re=0;re<6;re++){Ye=j[re].mipmaps;for(let P=0;P<Ye.length;P++){const oe=Ye[P];M.format!==Si?Oe!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Oe,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Oe,Te,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ge,oe.width,oe.height,0,Oe,Te,oe.data)}}}else{Ye=M.mipmaps,Ve&&rt&&(Ye.length>0&&vt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ge,j[0].width,j[0].height));for(let re=0;re<6;re++)if(qe){Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,j[re].width,j[re].height,Oe,Te,j[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,j[re].width,j[re].height,0,Oe,Te,j[re].data);for(let P=0;P<Ye.length;P++){const le=Ye[P].image[re].image;Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,le.width,le.height,Oe,Te,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ge,le.width,le.height,0,Oe,Te,le.data)}}else{Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,Te,j[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,Oe,Te,j[re]);for(let P=0;P<Ye.length;P++){const oe=Ye[P];Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Oe,Te,oe.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ge,Oe,Te,oe.image[re])}}}_(M,Ke)&&y(r.TEXTURE_CUBE_MAP),ee.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Se(T,M,O,Q,Z,ee){const xe=s.convert(O.format,O.colorSpace),he=s.convert(O.type),me=x(O.internalFormat,xe,he,O.colorSpace);if(!i.get(M).__hasExternalTextures){const qe=Math.max(1,M.width>>ee),j=Math.max(1,M.height>>ee);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,me,qe,j,M.depth,0,xe,he,null):t.texImage2D(Z,ee,me,qe,j,0,xe,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,i.get(O).__webglTexture,0,ze(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,i.get(O).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(T,M,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||_e(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===vn?Q=r.DEPTH_COMPONENT32F:Z.type===gn&&(Q=r.DEPTH_COMPONENT24));const ee=ze(M);_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,Q,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,Q,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const Q=ze(M);O&&_e(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],xe=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),me=x(ee.internalFormat,xe,he,ee.colorSpace),Re=ze(M);O&&_e(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,me,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,Z=ze(M);if(M.depthTexture.format===Wn)_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Os)_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ge(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=r.createRenderbuffer(),Be(M.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Be(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function tt(T,M,O){const Q=i.get(T);M!==void 0&&Se(Q.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ie(T)}function U(T){const M=T.texture,O=i.get(T),Q=i.get(M);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,a.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,xe=m(T)||o;if(Z){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[he][me]=r.createFramebuffer()}else O.__webglFramebuffer[he]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[he]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ee)if(n.drawBuffers){const he=T.texture;for(let me=0,Re=he.length;me<Re;me++){const qe=i.get(he[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&_e(T)===!1){const he=ee?M:[M];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const Re=he[me];O.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const qe=s.convert(Re.format,Re.colorSpace),j=s.convert(Re.type),ot=x(Re.internalFormat,qe,j,Re.colorSpace,T.isXRRenderTarget===!0),Ke=ze(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,ot,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,O.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),G(r.TEXTURE_CUBE_MAP,M,xe);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Se(O.__webglFramebuffer[he][me],T,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Se(O.__webglFramebuffer[he],T,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(M,xe)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const he=T.texture;for(let me=0,Re=he.length;me<Re;me++){const qe=he[me],j=i.get(qe);t.bindTexture(r.TEXTURE_2D,j.__webglTexture),G(r.TEXTURE_2D,qe,xe),Se(O.__webglFramebuffer,T,qe,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,0),_(qe,xe)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?he=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Q.__webglTexture),G(he,M,xe),o&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Se(O.__webglFramebuffer[me],T,M,r.COLOR_ATTACHMENT0,he,me);else Se(O.__webglFramebuffer,T,M,r.COLOR_ATTACHMENT0,he,0);_(M,xe)&&y(he),t.unbindTexture()}T.depthBuffer&&Ie(T)}function Vt(T){const M=m(T)||o,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,Z=O.length;Q<Z;Q++){const ee=O[Q];if(_(ee,M)){const xe=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=i.get(ee).__webglTexture;t.bindTexture(xe,he),y(xe),t.unbindTexture()}}}function Ee(T){if(o&&T.samples>0&&_e(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,Q=T.height;let Z=r.COLOR_BUFFER_BIT;const ee=[],xe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=i.get(T),me=T.isWebGLMultipleRenderTargets===!0;if(me)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){ee.push(r.COLOR_ATTACHMENT0+Re),T.depthBuffer&&ee.push(xe);const qe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(qe===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[xe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[xe])),me){const j=i.get(M[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,j,0)}r.blitFramebuffer(0,0,O,Q,0,0,O,Q,Z,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const qe=i.get(M[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ze(T){return Math.min(n.maxSamples,T.samples)}function _e(T){const M=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Xe(T,M){const O=T.colorSpace,Q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===jo||O!==Ki&&O!==fi&&(at.getTransfer(O)===ft?o===!1?e.has("EXT_sRGB")===!0&&Q===Si?(T.format=jo,T.minFilter=Ut,T.generateMipmaps=!1):M=ud.sRGBToLinear(M):(Q!==Si||Z!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=tt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e}function ov(r,e,t){const i=t.isWebGL2;function n(s,a=fi){let o;const l=at.getTransfer(a);if(s===yn)return r.UNSIGNED_BYTE;if(s===id)return r.UNSIGNED_SHORT_4_4_4_4;if(s===nd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lu)return r.BYTE;if(s===Iu)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===td)return r.INT;if(s===gn)return r.UNSIGNED_INT;if(s===vn)return r.FLOAT;if(s===$i)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Du)return r.ALPHA;if(s===Si)return r.RGBA;if(s===Uu)return r.LUMINANCE;if(s===Nu)return r.LUMINANCE_ALPHA;if(s===Wn)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$o)return r.RED;if(s===sd)return r.RED_INTEGER;if(s===Ou)return r.RG;if(s===rd)return r.RG_INTEGER;if(s===ad)return r.RGBA_INTEGER;if(s===Ya||s===ja||s===Za||s===Ka)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yl||s===jl||s===Zl||s===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jl||s===Ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Jl)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ql)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ec||s===tc||s===ic||s===nc||s===sc||s===rc||s===ac||s===oc||s===lc||s===cc||s===hc||s===dc||s===uc||s===fc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ec)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ic)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ac)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ja||s===pc||s===mc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ja)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zu||s===gc||s===vc||s===_c)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ja)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class lv extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class hv extends Hs{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const _=[],y=[],x=new ie;let R=null;const A=new yi;A.layers.enable(1),A.viewport=new Ot;const C=new yi;C.layers.enable(2),C.viewport=new Ot;const D=[A,C],S=new lv;S.layers.enable(1),S.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=_[G];return Y===void 0&&(Y=new So,_[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=_[G];return Y===void 0&&(Y=new So,_[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=_[G];return Y===void 0&&(Y=new So,_[G]=Y),Y.getHandSpace()};function H(G){const Y=y.indexOf(G.inputSource);if(Y===-1)return;const de=_[Y];de!==void 0&&(de.update(G.inputSource,G.frame,c||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function te(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",te),n.removeEventListener("inputsourceschange",L);for(let G=0;G<_.length;G++){const Y=y[G];Y!==null&&(y[G]=null,_[G].disconnect(Y))}E=null,F=null,e.setRenderTarget(m),p=null,u=null,d=null,n=null,f=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",te),n.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,Y),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new bi(p.framebufferWidth,p.framebufferHeight,{format:Si,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,de=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?Os:Wn,de=v.stencil?Vn:gn);const Se={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Se),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new bi(u.textureWidth,u.textureHeight,{format:Si,type:yn,depthTexture:new wd(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Be=e.properties.get(f);Be.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),se.setContext(n),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(G){for(let Y=0;Y<G.removed.length;Y++){const de=G.removed[Y],we=y.indexOf(de);we>=0&&(y[we]=null,_[we].disconnect(de))}for(let Y=0;Y<G.added.length;Y++){const de=G.added[Y];let we=y.indexOf(de);if(we===-1){for(let Be=0;Be<_.length;Be++)if(Be>=y.length){y.push(de),we=Be;break}else if(y[Be]===null){y[Be]=de,we=Be;break}if(we===-1)break}const Se=_[we];Se&&Se.connect(de)}}const k=new w,V=new w;function q(G,Y,de){k.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const we=k.distanceTo(V),Se=Y.projectionMatrix.elements,Be=de.projectionMatrix.elements,Ge=Se[14]/(Se[10]-1),Ie=Se[14]/(Se[10]+1),tt=(Se[9]+1)/Se[5],U=(Se[9]-1)/Se[5],Vt=(Se[8]-1)/Se[0],Ee=(Be[8]+1)/Be[0],ze=Ge*Vt,_e=Ge*Ee,mt=we/(-Vt+Ee),Xe=mt*-Vt;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Xe),G.translateZ(mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=Ge+mt,M=Ie+mt,O=ze-Xe,Q=_e+(we-Xe),Z=tt*Ie/M*T,ee=U*Ie/M*T;G.projectionMatrix.makePerspective(O,Q,Z,ee,T,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;S.near=C.near=A.near=G.near,S.far=C.far=A.far=G.far,(E!==S.near||F!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,F=S.far);const Y=G.parent,de=S.cameras;W(S,Y);for(let we=0;we<de.length;we++)W(de[we],Y);de.length===2?q(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),X(G,S,Y)};function X(G,Y,de){de===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=xr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let $=null;function ne(G,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let we=!1;de.length!==S.cameras.length&&(S.cameras.length=0,we=!0);for(let Se=0;Se<de.length;Se++){const Be=de[Se];let Ge=null;if(p!==null)Ge=p.getViewport(Be);else{const tt=d.getViewSubImage(u,Be);Ge=tt.viewport,Se===0&&(e.setRenderTargetTextures(f,tt.colorTexture,u.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(f))}let Ie=D[Se];Ie===void 0&&(Ie=new yi,Ie.layers.enable(Se),Ie.viewport=new Ot,D[Se]=Ie),Ie.matrix.fromArray(Be.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Be.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Se===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),we===!0&&S.cameras.push(Ie)}}for(let de=0;de<_.length;de++){const we=y[de],Se=_[de];we!==null&&Se!==void 0&&Se.update(we,Y,c||a)}$&&$(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const se=new bd;se.setAnimationLoop(ne),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}function dv(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,xd(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function uv(r,e,t,i){let n={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=n[_.id];x===void 0&&(g(_),x=h(_),n[_.id]=x,_.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const y=d();_.__bindingPointIndex=y;const x=r.createBuffer(),R=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=n[_.id],x=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,E=D.length;S<E;S++){const F=D[S];if(p(F,A,S,R)===!0){const H=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let k=0;k<te.length;k++){const V=te[k],q=v(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,H+L,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,y,x,R){const A=_.value,C=y+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const D=R[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const R=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,F=S.length;E<F;E++){const H=S[E],te=Array.isArray(H.value)?H.value:[H.value];for(let L=0,k=te.length;L<k;L++){const V=te[L],q=v(V),W=x%R;W!==0&&R-W<q.boundary&&(x+=R-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=q.storage}}}const A=x%R;return A>0&&(x+=R-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function f(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:f}}class Pd{constructor(e={}){const{canvas:t=cf(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const y=this;let x=!1,R=0,A=0,C=null,D=-1,S=null;const E=new Ot,F=new Ot;let H=null;const te=new Ne(0);let L=0,k=t.width,V=t.height,q=1,W=null,X=null;const $=new Ot(0,0,k,V),ne=new Ot(0,0,k,V);let se=!1;const G=new vl;let Y=!1,de=!1,we=null;const Se=new xt,Be=new ie,Ge=new w,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return C===null?q:1}let U=i;function Vt(b,I){for(let z=0;z<b.length;z++){const B=b[z],N=t.getContext(B,I);if(N!==null)return N}return null}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&I.shift(),U=Vt(I,b),U===null)throw Vt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,ze,_e,mt,Xe,T,M,O,Q,Z,ee,xe,he,me,Re,qe,j,ot,Ke,Oe,Te,ge,Ve,rt;function vt(){Ee=new Sg(U),ze=new gg(U,Ee,e),Ee.init(ze),ge=new ov(U,Ee,ze),_e=new rv(U,Ee,ze),mt=new Tg(U),Xe=new X0,T=new av(U,Ee,_e,Xe,ze,ge,mt),M=new _g(y),O=new Mg(y),Q=new Df(U,ze),Ve=new pg(U,Ee,Q,ze),Z=new bg(U,Q,mt,Ve),ee=new Rg(U,Z,Q,mt),Ke=new Cg(U,ze,T),qe=new vg(Xe),xe=new W0(y,M,O,Ee,ze,Ve,qe),he=new dv(y,Xe),me=new $0,Re=new Q0(Ee,ze),ot=new fg(y,M,O,_e,ee,u,l),j=new sv(y,ee,ze),rt=new uv(U,mt,ze,_e),Oe=new mg(U,Ee,mt,ze),Te=new wg(U,Ee,mt,ze),mt.programs=xe.programs,y.capabilities=ze,y.extensions=Ee,y.properties=Xe,y.renderLists=me,y.shadowMap=j,y.state=_e,y.info=mt}vt();const Ye=new hv(y,U);this.xr=Ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(k,V,!1))},this.getSize=function(b){return b.set(k,V)},this.setSize=function(b,I,z=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,V=I,t.width=Math.floor(b*q),t.height=Math.floor(I*q),z===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(k*q,V*q).floor()},this.setDrawingBufferSize=function(b,I,z){k=b,V=I,q=z,t.width=Math.floor(b*z),t.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,I,z,B){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,I,z,B),_e.viewport(E.copy($).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,I,z,B){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,I,z,B),_e.scissor(F.copy(ne).multiplyScalar(q).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){_e.setScissorTest(se=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(b=!0,I=!0,z=!0){let B=0;if(b){let N=!1;if(C!==null){const ue=C.texture.format;N=ue===ad||ue===rd||ue===sd}if(N){const ue=C.texture.type,Me=ue===yn||ue===gn||ue===pl||ue===Vn||ue===id||ue===nd,Ce=ot.getClearColor(),Ue=ot.getClearAlpha(),$e=Ce.r,ke=Ce.g,Fe=Ce.b;Me?(p[0]=$e,p[1]=ke,p[2]=Fe,p[3]=Ue,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=$e,g[1]=ke,g[2]=Fe,g[3]=Ue,U.clearBufferiv(U.COLOR,0,g))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),z&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),Re.dispose(),Xe.dispose(),M.dispose(),O.dispose(),ee.dispose(),Ve.dispose(),rt.dispose(),xe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Wt),Ye.removeEventListener("sessionend",ut),we&&(we.dispose(),we=null),Xt.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=mt.autoReset,I=j.enabled,z=j.autoUpdate,B=j.needsUpdate,N=j.type;vt(),mt.autoReset=b,j.enabled=I,j.autoUpdate=z,j.needsUpdate=B,j.type=N}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const I=b.target;I.removeEventListener("dispose",le),De(I)}function De(b){Ae(b),Xe.remove(b)}function Ae(b){const I=Xe.get(b).programs;I!==void 0&&(I.forEach(function(z){xe.releaseProgram(z)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,B,N,ue){I===null&&(I=Ie);const Me=N.isMesh&&N.matrixWorld.determinant()<0,Ce=Kd(b,I,z,B,N);_e.setMaterial(B,Me);let Ue=z.index,$e=1;if(B.wireframe===!0){if(Ue=Z.getWireframeAttribute(z),Ue===void 0)return;$e=2}const ke=z.drawRange,Fe=z.attributes.position;let St=ke.start*$e,ri=(ke.start+ke.count)*$e;ue!==null&&(St=Math.max(St,ue.start*$e),ri=Math.min(ri,(ue.start+ue.count)*$e)),Ue!==null?(St=Math.max(St,0),ri=Math.min(ri,Ue.count)):Fe!=null&&(St=Math.max(St,0),ri=Math.min(ri,Fe.count));const It=ri-St;if(It<0||It===1/0)return;Ve.setup(N,B,Ce,z,Ue);let Ui,gt=Oe;if(Ue!==null&&(Ui=Q.get(Ue),gt=Te,gt.setIndex(Ui)),N.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*tt()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(N.isLine){let je=B.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*tt()),N.isLineSegments?gt.setMode(U.LINES):N.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else N.isPoints?gt.setMode(U.POINTS):N.isSprite&&gt.setMode(U.TRIANGLES);if(N.isBatchedMesh)gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)gt.renderInstances(St,It,N.count);else if(z.isInstancedBufferGeometry){const je=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Va=Math.min(z.instanceCount,je);gt.renderInstances(St,It,Va)}else gt.render(St,It)};function ht(b,I,z){b.transparent===!0&&b.side===xi&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,Ir(b,I,z),b.side=Zi,b.needsUpdate=!0,Ir(b,I,z),b.side=xi):Ir(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),m=Re.get(z),m.init(),_.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(y._useLegacyLights);const B=new Set;return b.traverse(function(N){const ue=N.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Ce=ue[Me];ht(Ce,z,N),B.add(Ce)}else ht(ue,z,N),B.add(ue)}),_.pop(),m=null,B},this.compileAsync=function(b,I,z=null){const B=this.compile(b,I,z);return new Promise(N=>{function ue(){if(B.forEach(function(Me){Xe.get(Me).currentProgram.isReady()&&B.delete(Me)}),B.size===0){N(b);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dt=null;function Lt(b){dt&&dt(b)}function Wt(){Xt.stop()}function ut(){Xt.start()}const Xt=new bd;Xt.setAnimationLoop(Lt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(b){dt=b,Ye.setAnimationLoop(b),b===null?Xt.stop():Xt.start()},Ye.addEventListener("sessionstart",Wt),Ye.addEventListener("sessionend",ut),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(I),I=Ye.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,I,C),m=Re.get(b,_.length),m.init(),_.push(m),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(Se),de=this.localClippingEnabled,Y=qe.init(this.clippingPlanes,de),v=me.get(b,f.length),v.init(),f.push(v),Ti(b,I,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(W,X),this.info.render.frame++,Y===!0&&qe.beginShadows();const z=m.state.shadowsArray;if(j.render(z,b,I),Y===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(v,b),m.setupLights(y._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let N=0,ue=B.length;N<ue;N++){const Me=B[N];Ol(v,b,Me,Me.viewport)}}else Ol(v,b,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(y,b,I),Ve.resetDefaultState(),D=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ti(b,I,z,B){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){B&&Ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const Me=ee.update(b),Ce=b.material;Ce.visible&&v.push(b,Me,Ce,z,Ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const Me=ee.update(b),Ce=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ge.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ge.copy(Me.boundingSphere.center)),Ge.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(Ce)){const Ue=Me.groups;for(let $e=0,ke=Ue.length;$e<ke;$e++){const Fe=Ue[$e],St=Ce[Fe.materialIndex];St&&St.visible&&v.push(b,Me,St,z,Ge.z,Fe)}}else Ce.visible&&v.push(b,Me,Ce,z,Ge.z,null)}}const ue=b.children;for(let Me=0,Ce=ue.length;Me<Ce;Me++)Ti(ue[Me],I,z,B)}function Ol(b,I,z,B){const N=b.opaque,ue=b.transmissive,Me=b.transparent;m.setupLightsView(z),Y===!0&&qe.setGlobalState(y.clippingPlanes,z),ue.length>0&&Zd(N,ue,I,z),B&&_e.viewport(E.copy(B)),N.length>0&&Lr(N,I,z),ue.length>0&&Lr(ue,I,z),Me.length>0&&Lr(Me,I,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Zd(b,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=ze.isWebGL2;we===null&&(we=new bi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?$i:yn,minFilter:yr,samples:ue?4:0})),y.getDrawingBufferSize(Be),ue?we.setSize(Be.x,Be.y):we.setSize(_a(Be.x),_a(Be.y));const Me=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(te),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const Ce=y.toneMapping;y.toneMapping=_n,Lr(b,z,B),T.updateMultisampleRenderTarget(we),T.updateRenderTargetMipmap(we);let Ue=!1;for(let $e=0,ke=I.length;$e<ke;$e++){const Fe=I[$e],St=Fe.object,ri=Fe.geometry,It=Fe.material,Ui=Fe.group;if(It.side===xi&&St.layers.test(B.layers)){const gt=It.side;It.side=Jt,It.needsUpdate=!0,zl(St,z,B,ri,It,Ui),It.side=gt,It.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(we),T.updateRenderTargetMipmap(we)),y.setRenderTarget(Me),y.setClearColor(te,L),y.toneMapping=Ce}function Lr(b,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ue=b.length;N<ue;N++){const Me=b[N],Ce=Me.object,Ue=Me.geometry,$e=B===null?Me.material:B,ke=Me.group;Ce.layers.test(z.layers)&&zl(Ce,I,z,Ue,$e,ke)}}function zl(b,I,z,B,N,ue){b.onBeforeRender(y,I,z,B,N,ue),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,I,z,B,b,ue),N.transparent===!0&&N.side===xi&&N.forceSinglePass===!1?(N.side=Jt,N.needsUpdate=!0,y.renderBufferDirect(z,I,B,N,b,ue),N.side=Zi,N.needsUpdate=!0,y.renderBufferDirect(z,I,B,N,b,ue),N.side=xi):y.renderBufferDirect(z,I,B,N,b,ue),b.onAfterRender(y,I,z,B,N,ue)}function Ir(b,I,z){I.isScene!==!0&&(I=Ie);const B=Xe.get(b),N=m.state.lights,ue=m.state.shadowsArray,Me=N.state.version,Ce=xe.getParameters(b,N.state,ue,I,z),Ue=xe.getProgramCacheKey(Ce);let $e=B.programs;B.environment=b.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||B.environment),$e===void 0&&(b.addEventListener("dispose",le),$e=new Map,B.programs=$e);let ke=$e.get(Ue);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===Me)return Bl(b,Ce),ke}else Ce.uniforms=xe.getUniforms(b),b.onBuild(z,Ce,y),b.onBeforeCompile(Ce,y),ke=xe.acquireProgram(Ce,Ue),$e.set(Ue,ke),B.uniforms=Ce.uniforms;const Fe=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=qe.uniform),Bl(b,Ce),B.needsLights=Qd(b),B.lightsStateVersion=Me,B.needsLights&&(Fe.ambientLightColor.value=N.state.ambient,Fe.lightProbe.value=N.state.probe,Fe.directionalLights.value=N.state.directional,Fe.directionalLightShadows.value=N.state.directionalShadow,Fe.spotLights.value=N.state.spot,Fe.spotLightShadows.value=N.state.spotShadow,Fe.rectAreaLights.value=N.state.rectArea,Fe.ltc_1.value=N.state.rectAreaLTC1,Fe.ltc_2.value=N.state.rectAreaLTC2,Fe.pointLights.value=N.state.point,Fe.pointLightShadows.value=N.state.pointShadow,Fe.hemisphereLights.value=N.state.hemi,Fe.directionalShadowMap.value=N.state.directionalShadowMap,Fe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Fe.spotShadowMap.value=N.state.spotShadowMap,Fe.spotLightMatrix.value=N.state.spotLightMatrix,Fe.spotLightMap.value=N.state.spotLightMap,Fe.pointShadowMap.value=N.state.pointShadowMap,Fe.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=ke,B.uniformsList=null,ke}function kl(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=ha.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Bl(b,I){const z=Xe.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Kd(b,I,z,B,N){I.isScene!==!0&&(I=Ie),T.resetTextureUnits();const ue=I.fog,Me=B.isMeshStandardMaterial?I.environment:null,Ce=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ki,Ue=(B.isMeshStandardMaterial?O:M).get(B.envMap||Me),$e=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!z.morphAttributes.position,St=!!z.morphAttributes.normal,ri=!!z.morphAttributes.color;let It=_n;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(It=y.toneMapping);const Ui=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=Ui!==void 0?Ui.length:0,je=Xe.get(B),Va=m.state.lights;if(Y===!0&&(de===!0||b!==S)){const ci=b===S&&B.id===D;qe.setState(B,b,ci)}let _t=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Va.state.version||je.outputColorSpace!==Ce||N.isBatchedMesh&&je.batching===!1||!N.isBatchedMesh&&je.batching===!0||N.isInstancedMesh&&je.instancing===!1||!N.isInstancedMesh&&je.instancing===!0||N.isSkinnedMesh&&je.skinning===!1||!N.isSkinnedMesh&&je.skinning===!0||N.isInstancedMesh&&je.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&je.instancingColor===!1&&N.instanceColor!==null||je.envMap!==Ue||B.fog===!0&&je.fog!==ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==qe.numPlanes||je.numIntersection!==qe.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==ke||je.morphTargets!==Fe||je.morphNormals!==St||je.morphColors!==ri||je.toneMapping!==It||ze.isWebGL2===!0&&je.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,je.__version=B.version);let wn=je.currentProgram;_t===!0&&(wn=Ir(B,I,N));let Fl=!1,qs=!1,Wa=!1;const Bt=wn.getUniforms(),Tn=je.uniforms;if(_e.useProgram(wn.program)&&(Fl=!0,qs=!0,Wa=!0),B.id!==D&&(D=B.id,qs=!0),Fl||S!==b){Bt.setValue(U,"projectionMatrix",b.projectionMatrix),Bt.setValue(U,"viewMatrix",b.matrixWorldInverse);const ci=Bt.map.cameraPosition;ci!==void 0&&ci.setValue(U,Ge.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,qs=!0,Wa=!0)}if(N.isSkinnedMesh){Bt.setOptional(U,N,"bindMatrix"),Bt.setOptional(U,N,"bindMatrixInverse");const ci=N.skeleton;ci&&(ze.floatVertexTextures?(ci.boneTexture===null&&ci.computeBoneTexture(),Bt.setValue(U,"boneTexture",ci.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Bt.setOptional(U,N,"batchingTexture"),Bt.setValue(U,"batchingTexture",N._matricesTexture,T));const Xa=z.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&ze.isWebGL2===!0)&&Ke.update(N,z,wn),(qs||je.receiveShadow!==N.receiveShadow)&&(je.receiveShadow=N.receiveShadow,Bt.setValue(U,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Tn.envMap.value=Ue,Tn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),qs&&(Bt.setValue(U,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Jd(Tn,Wa),ue&&B.fog===!0&&he.refreshFogUniforms(Tn,ue),he.refreshMaterialUniforms(Tn,B,q,V,we),ha.upload(U,kl(je),Tn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ha.upload(U,kl(je),Tn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Bt.setValue(U,"center",N.center),Bt.setValue(U,"modelViewMatrix",N.modelViewMatrix),Bt.setValue(U,"normalMatrix",N.normalMatrix),Bt.setValue(U,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ci=B.uniformsGroups;for(let qa=0,eu=ci.length;qa<eu;qa++)if(ze.isWebGL2){const Hl=ci[qa];rt.update(Hl,wn),rt.bind(Hl,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Jd(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Qd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,I,z){Xe.get(b.texture).__webglTexture=I,Xe.get(b.depthTexture).__webglTexture=z;const B=Xe.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const z=Xe.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){C=b,R=I,A=z;let B=!0,N=null,ue=!1,Me=!1;if(b){const Ue=Xe.get(b);Ue.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(b):Ue.__hasExternalTextures&&T.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Me=!0);const ke=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?N=ke[I][z]:N=ke[I],ue=!0):ze.isWebGL2&&b.samples>0&&T.useMultisampledRTT(b)===!1?N=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[z]:N=ke,E.copy(b.viewport),F.copy(b.scissor),H=b.scissorTest}else E.copy($).multiplyScalar(q).floor(),F.copy(ne).multiplyScalar(q).floor(),H=se;if(_e.bindFramebuffer(U.FRAMEBUFFER,N)&&ze.drawBuffers&&B&&_e.drawBuffers(b,N),_e.viewport(E),_e.scissor(F),_e.setScissorTest(H),ue){const Ue=Xe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ue.__webglTexture,z)}else if(Me){const Ue=Xe.get(b.texture),$e=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,z||0,$e)}D=-1},this.readRenderTargetPixels=function(b,I,z,B,N,ue,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){_e.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ue=b.texture,$e=Ue.format,ke=Ue.type;if($e!==Si&&ge.convert($e)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=ke===$i&&(Ee.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(ke!==yn&&ge.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===vn&&(ze.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-B&&z>=0&&z<=b.height-N&&U.readPixels(I,z,B,N,ge.convert($e),ge.convert(ke),ue)}finally{const Ue=C!==null?Xe.get(C).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,I,z=0){const B=Math.pow(2,-z),N=Math.floor(I.image.width*B),ue=Math.floor(I.image.height*B);T.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,b.x,b.y,N,ue),_e.unbindTexture()},this.copyTextureToTexture=function(b,I,z,B=0){const N=I.image.width,ue=I.image.height,Me=ge.convert(z.format),Ce=ge.convert(z.type);T.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,b.x,b.y,N,ue,Me,Ce,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,b.x,b.y,Me,Ce,I.image),B===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z,B,N=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Ue=ge.convert(B.format),$e=ge.convert(B.type);let ke;if(B.isData3DTexture)T.setTexture3D(B,0),ke=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)T.setTexture2DArray(B,0),ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ri=U.getParameter(U.UNPACK_SKIP_PIXELS),It=U.getParameter(U.UNPACK_SKIP_ROWS),Ui=U.getParameter(U.UNPACK_SKIP_IMAGES),gt=z.isCompressedTexture?z.mipmaps[N]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(ke,N,I.x,I.y,I.z,ue,Me,Ce,Ue,$e,gt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ke,N,I.x,I.y,I.z,ue,Me,Ce,Ue,gt.data)):U.texSubImage3D(ke,N,I.x,I.y,I.z,ue,Me,Ce,Ue,$e,gt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ri),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ui),N===0&&B.generateMipmaps&&U.generateMipmap(ke),_e.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,_e.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ml?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Xn:ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xn?yt:Ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fv extends Pd{}fv.prototype.isWebGL1Renderer=!0;class pv extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new w;class xa{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jn extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const Ks=new w,ys=new w,xs=new w,Ms=new ie,Js=new ie,Ld=new xt,ta=new w,Qs=new w,ia=new w,oh=new ie,bo=new ie,lh=new ie;class Sn extends ct{constructor(e=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mv(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new xa(i,3,0,!1)),_s.setAttribute("uv",new xa(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-xs.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;na(ta.set(-.5,-.5,0),xs,a,ys,n,s),na(Qs.set(.5,-.5,0),xs,a,ys,n,s),na(ia.set(.5,.5,0),xs,a,ys,n,s),oh.set(0,0),bo.set(1,0),lh.set(1,1);let o=e.ray.intersectTriangle(ta,Qs,ia,!1,Ks);if(o===null&&(na(Qs.set(-.5,.5,0),xs,a,ys,n,s),bo.set(0,1),o=e.ray.intersectTriangle(ta,ia,Qs,!1,Ks),o===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:ui.getInterpolation(Ks,ta,Qs,ia,oh,bo,lh,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(r,e,t,i,n,s){Ms.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Js.x=s*Ms.x-n*Ms.y,Js.y=n*Ms.x+s*Ms.y):Js.copy(Ms),r.copy(e),r.x+=Js.x,r.y+=Js.y,r.applyMatrix4(Ld)}class ch extends Qt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=kt,h=kt,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hh=new w,dh=new w,uh=new xt,wo=new md,sa=new za;class Id extends ct{constructor(e=new Mt,t=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)hh.fromBufferAttribute(t,n-1),dh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=hh.distanceTo(dh);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(n),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;uh.copy(n).invert(),wo.copy(e.ray).applyMatrix4(uh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,d=new w,u=new w,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let y=f,x=_-1;y<x;y+=p){const R=g.getX(y),A=g.getX(y+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,A),wo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let y=f,x=_-1;y<x;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),wo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const fh=new w,ph=new w;class gv extends Id{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)fh.fromBufferAttribute(t,n),ph.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+fh.distanceTo(ph);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xl extends Id{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rr extends Qt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],u=i[n+1]-h,p=(a-h)/u;return(n+p)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ie:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new w,n=[],s=[],a=[],o=new w,l=new xt;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Nt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ml extends Di{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new ie,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vv extends Ml{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+i*o}}}const ra=new w,To=new Sl,Eo=new Sl,Ao=new Sl;class Dd extends Di{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(ra.subVectors(n[0],n[1]).add(n[0]),c=ra);const d=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(ra.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),To.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Eo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Ao.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Eo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ao.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(To.calc(l),Eo.calc(l),Ao.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mh(r,e,t,i,n){const s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function _v(r,e){const t=1-r;return t*t*e}function yv(r,e){return 2*(1-r)*r*e}function xv(r,e){return r*r*e}function ur(r,e,t,i){return _v(r,e)+yv(r,t)+xv(r,i)}function Mv(r,e){const t=1-r;return t*t*t*e}function Sv(r,e){const t=1-r;return 3*t*t*r*e}function bv(r,e){return 3*(1-r)*r*r*e}function wv(r,e){return r*r*r*e}function fr(r,e,t,i,n){return Mv(r,e)+Sv(r,t)+bv(r,i)+wv(r,n)}class Ud extends Di{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(fr(e,n.x,s.x,a.x,o.x),fr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tv extends Di{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(fr(e,n.x,s.x,a.x,o.x),fr(e,n.y,s.y,a.y,o.y),fr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nd extends Di{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ev extends Di{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends Di{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(e,n.x,s.x,a.x),ur(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends Di{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(e,n.x,s.x,a.x),ur(e,n.y,s.y,a.y),ur(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(mh(o,l.x,c.x,h.x,d.x),mh(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ie().fromArray(n))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:vv,CatmullRomCurve3:Dd,CubicBezierCurve:Ud,CubicBezierCurve3:Tv,EllipseCurve:Ml,LineCurve:Nd,LineCurve3:Ev,QuadraticBezierCurve:Od,QuadraticBezierCurve3:zd,SplineCurve:kd});class Av extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Jo[n.type]().fromJSON(n))}return this}}class Cv extends Av{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Nd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new Od(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){const o=new Ud(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new kd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){const c=new Ml(e,t,i,n,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bl extends Mt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Nt(n,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,d=new w,u=new ie,p=new w,g=new w,v=new w;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){const y=i+_*h*n,x=Math.sin(y),R=Math.cos(y);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*x,d.y=e[A].y,d.z=e[A].x*R,a.push(d.x,d.y,d.z),u.x=_/t,u.y=A/(e.length-1),o.push(u.x,u.y);const C=l[3*A+0]*x,D=l[3*A+1],S=l[3*A+0]*R;c.push(C,D,S)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,R=x,A=x+e.length,C=x+e.length+1,D=x+1;s.push(R,A,D),s.push(C,D,A)}this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.points,e.segments,e.phiStart,e.phiLength)}}class Sr extends bl{constructor(e=1,t=1,i=4,n=8){const s=new Cv;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Sr(e.radius,e.length,e.capSegments,e.radialSegments)}}class bn extends Mt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new w,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends Mt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=i/2;let f=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function _(){const x=new w,R=new w;let A=0;const C=(t-e)/i;for(let D=0;D<=s;D++){const S=[],E=D/s,F=E*(t-e)+e;for(let H=0;H<=n;H++){const te=H/n,L=te*l+o,k=Math.sin(L),V=Math.cos(L);R.x=F*k,R.y=-E*i+m,R.z=F*V,d.push(R.x,R.y,R.z),x.set(k,C,V).normalize(),u.push(x.x,x.y,x.z),p.push(te,1-E),S.push(g++)}v.push(S)}for(let D=0;D<n;D++)for(let S=0;S<s;S++){const E=v[S][D],F=v[S+1][D],H=v[S+1][D+1],te=v[S][D+1];h.push(E,F,te),h.push(F,H,te),A+=6}c.addGroup(f,A,0),f+=A}function y(x){const R=g,A=new ie,C=new w;let D=0;const S=x===!0?e:t,E=x===!0?1:-1;for(let H=1;H<=n;H++)d.push(0,m*E,0),u.push(0,E,0),p.push(.5,.5),g++;const F=g;for(let H=0;H<=n;H++){const L=H/n*l+o,k=Math.cos(L),V=Math.sin(L);C.x=S*V,C.y=m*E,C.z=S*k,d.push(C.x,C.y,C.z),u.push(0,E,0),A.x=k*.5+.5,A.y=V*.5*E+.5,p.push(A.x,A.y),g++}for(let H=0;H<n;H++){const te=R+H,L=F+H;x===!0?h.push(L,L+1,te):h.push(L+1,L,te),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn extends st{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wl extends Mt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new w,x=new w,R=new w;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],x),p(t[A+2],R),l(y,x,R,_)}function l(_,y,x,R){const A=R+1,C=[];for(let D=0;D<=A;D++){C[D]=[];const S=_.clone().lerp(x,D/A),E=y.clone().lerp(x,D/A),F=A-D;for(let H=0;H<=F;H++)H===0&&D===A?C[D][H]=S:C[D][H]=S.clone().lerp(E,H/F)}for(let D=0;D<A;D++)for(let S=0;S<2*(A-D)-1;S++){const E=Math.floor(S/2);S%2===0?(u(C[D][E+1]),u(C[D+1][E]),u(C[D][E])):(u(C[D][E+1]),u(C[D+1][E+1]),u(C[D+1][E]))}}function c(_){const y=new w;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const _=new w;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=m(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;a.push(x,1-R)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],R=a[_+4],A=Math.max(y,x,R),C=Math.min(y,x,R);A>.9&&C<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function p(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new w,y=new w,x=new w,R=new w,A=new ie,C=new ie,D=new ie;for(let S=0,E=0;S<s.length;S+=9,E+=6){_.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),D.set(a[E+4],a[E+5]),R.copy(_).add(y).add(x).divideScalar(3);const F=m(R);v(A,E+0,_,F),v(C,E+2,y,F),v(D,E+4,x,F)}}function v(_,y,x,R){R<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.vertices,e.indices,e.radius,e.details)}}class Tl extends wl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tl(e.radius,e.detail)}}class Ws extends Mt{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,p=new w,g=new ie;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let f=0;f<i;f++){const _=f+m,y=_,x=_+i+1,R=_+i+2,A=_+1;o.push(y,x,A),o.push(x,R,A)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ct extends Mt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new w,u=new w,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let x=0;f===0&&a===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(n+A*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(n+A*s)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+x,1-y),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const y=h[f][_+1],x=h[f][_],R=h[f+1][_],A=h[f+1][_+1];(f!==0||a>0)&&p.push(y,x,A),(f!==i-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pr extends Mt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new w,d=new w,u=new w;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const v=g/n*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const v=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,_=(n+1)*p+g;a.push(v,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ma extends Mt{constructor(e=new zd(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new ie;let h=new w;const d=[],u=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function v(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),_(),f()}function m(y){h=e.getPointAt(y/t,h);const x=a.normals[y],R=a.binormals[y];for(let A=0;A<=n;A++){const C=A/n*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);l.x=S*x.x+D*R.x,l.y=S*x.y+D*R.y,l.z=S*x.z+D*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=n;x++){const R=(n+1)*(y-1)+(x-1),A=(n+1)*y+(x-1),C=(n+1)*y+x,D=(n+1)*(y-1)+x;g.push(R,A,D),g.push(A,C,D)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=n;x++)c.x=y/t,c.y=x/n,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ma(new Jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rv extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ni extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class El extends yl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Bd extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Pv extends Bd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new xt,gh=new w,vh=new w;class Lv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iv extends Lv{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dv extends Bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Iv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let Uv=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _h(){return(typeof performance>"u"?Date:performance).now()}class Nv extends gv{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ne(i),n=new Ne(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=u===s?i:n;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Mt;h.setAttribute("position",new Qe(l,3)),h.setAttribute("color",new Qe(c,3));const d=new yl({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const Fd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ov=new Ba(-1,1,1,-1,0,1);class zv extends Mt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const kv=new zv;class Al{constructor(e){this._mesh=new K(kv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ov)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bv extends Xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mr.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Al(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yh extends Xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Fv extends Xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bv(Fd),this.copyPass.material.blending=qi,this.clock=new Uv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(a instanceof yh?i=!0:a instanceof Fv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gv extends Xs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Vv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ks extends Xs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bi(s,a,{type:$i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new bi(s,a,{type:$i});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new bi(s,a,{type:$i});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=Vv;this.highPassUniforms=Mr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ie(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Fd;this.copyUniforms=Mr.clone(h.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new bt,this.fsQuad=new Al(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ks.BlurDirectionX=new ie(1,0);ks.BlurDirectionY=new ie(0,1);const Wv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xv extends Xs{constructor(){super();const e=Wv;this.uniforms=Mr.clone(e.uniforms),this.material=new Rv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Pr=1,qv=.6,$v=.4,Yv=.6;class jv{composer;renderer;initialized=!1;constructor(e){this.renderer=e}init(e,t,i,n){const s=new ks(new ie(i,n),qv,$v,Yv);this.composer=new Hv(this.renderer),this.composer.addPass(new Gv(e,t)),this.composer.addPass(s),this.composer.addPass(new Xv),this.renderer.autoClear=!1,this.initialized=!0}setSize(e,t){this.initialized&&this.composer.setSize(e,t)}render(e,t){if(!this.initialized){this.renderer.render(e,t);return}this.renderer.clear(),t.layers.set(0),this.composer.render();const i=e.background;e.background=null,this.renderer.clearDepth(),t.layers.set(Pr),this.renderer.render(e,t),e.background=i,t.layers.enableAll()}}class Zv{constructor(e){this.fixedDt=e}accumulator=0;lastTime=0;rafId=null;running=!1;start(e,t){this.running=!0,this.lastTime=performance.now()/1e3;const i=()=>{if(!this.running)return;const n=performance.now()/1e3,s=Math.min(n-this.lastTime,.25);this.lastTime=n;try{this.tick(s,e,t)}catch(a){console.error("[Clock] 主循环 update 抛错（已跳过该帧，游戏继续运行）:",a)}this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i)}stop(){this.running=!1,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null}simulate(e,t,i){this.tick(e,t,i)}tick(e,t,i){for(this.accumulator+=e;this.accumulator>=this.fixedDt;)t(this.fixedDt),this.accumulator-=this.fixedDt;const n=this.accumulator/this.fixedDt;i(n)}}async function Kv(r){return{renderer:new Pd({canvas:r,antialias:!0}),isWebGPU:!1}}class Jv{camera;viewSize=40;dist=60;target=new w(0,0,0);cur=new w(0,0,0);overrideTarget=null;smoothK=8;snapThreshold=3;constructor(e){this.camera=new Ba(-1,1,1,-1,.1,500),this.resize(e),this.cur.copy(this.target),this.setCameraPosition(this.cur)}resize(e){const t=this.viewSize/2,i=t*e;this.camera.left=-i,this.camera.right=i,this.camera.top=t,this.camera.bottom=-t,this.camera.updateProjectionMatrix()}follow(e,t){const i=this.overrideTarget??e;if(this.target.copy(i),this.overrideTarget!==null)this.cur.copy(i);else if(this.cur.distanceTo(this.target)<this.snapThreshold)this.cur.copy(i);else{const s=1-Math.exp(-this.smoothK*t);this.cur.lerp(this.target,s)}this.setCameraPosition(this.cur)}setOverride(e){this.overrideTarget=e?e.clone():null}setCameraPosition(e){const t=this.dist*Math.cos(Math.PI/4),i=this.dist*Math.sin(Math.PI/4),n=t*Math.sin(Math.PI/4),s=t*Math.cos(Math.PI/4);this.camera.position.set(e.x+n,e.y+i,e.z+s),this.camera.lookAt(e)}}class Qv{constructor(e){this.el=e,e.addEventListener("touchstart",this.onTouchStart,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1}),e.addEventListener("touchend",this.onTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this.onTouchEnd,{passive:!1}),e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseup",this.onMouseUp),e.addEventListener("mouseleave",this.onMouseUp)}joystickStartCbs=[];joystickCbs=[];joystickEndCbs=[];active=!1;originX=0;originY=0;zoneWidthRatio=.6;zoneBottomRatio=.5;maxRadius=60;onJoystickStart(e){this.joystickStartCbs.push(e)}onJoystick(e){this.joystickCbs.push(e)}onJoystickEnd(e){this.joystickEndCbs.push(e)}isInZone(e,t){const i=this.el.getBoundingClientRect(),n=e-i.left,s=t-i.top,a=this.el.clientWidth,o=this.el.clientHeight,l=a*this.zoneWidthRatio,c=(a-l)/2,h=o*this.zoneBottomRatio;return n>=c&&n<=c+l&&s>=h}hitsLayer(e){return e===this.el}start(e,t){this.active=!0,this.originX=e,this.originY=t;for(const i of this.joystickStartCbs)i(e,t)}move(e,t){if(!this.active)return;const i=e-this.originX,n=t-this.originY,s=Math.min(1,Math.hypot(i,n)/this.maxRadius);for(const a of this.joystickCbs)a(i/this.maxRadius,n/this.maxRadius,s)}end(){if(this.active){this.active=!1;for(const e of this.joystickEndCbs)e()}}onTouchStart=e=>{if(e.preventDefault(),e.touches.length===1){const t=e.touches[0];this.hitsLayer(e.target)&&this.isInZone(t.clientX,t.clientY)&&this.start(t.clientX,t.clientY)}};onTouchMove=e=>{if(e.preventDefault(),e.touches.length===1&&this.active){const t=e.touches[0];this.move(t.clientX,t.clientY)}};onTouchEnd=e=>{e.preventDefault(),e.touches.length===0&&this.end()};onMouseDown=e=>{this.hitsLayer(e.target)&&this.isInZone(e.clientX,e.clientY)&&this.start(e.clientX,e.clientY)};onMouseMove=e=>{this.move(e.clientX,e.clientY)};onMouseUp=()=>{this.end()}}class e_{group;constructor(){this.group=new pt;const e=new Dv(16774368,1.3);e.position.set(40,60,40),e.castShadow=!1,this.group.add(e);const t=new Pv(12113151,6967864,.7);this.group.add(t)}}class t_{constructor(e,t){this.size=e,this.cellMeters=t}worldToCell(e,t){const i=this.size*this.cellMeters/2,n=Math.floor((e+i)/this.cellMeters),s=Math.floor((t+i)/this.cellMeters);return{cx:n,cz:s}}cellToWorld(e,t){const i=this.size*this.cellMeters/2,n=e*this.cellMeters+this.cellMeters/2-i,s=t*this.cellMeters+this.cellMeters/2-i;return{x:n,z:s}}isInside(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size}get worldSizeMeters(){return this.size*this.cellMeters}}class i_{mesh;constructor(e){this.mesh=new pt;const t=e.worldSizeMeters,i=new Gs(t,t);i.rotateX(-Math.PI/2);const n=new bt({map:this.buildTexture(e),color:15395562}),s=new K(i,n);this.mesh.add(s);const a=new Nv(t,e.size,4864552,3812894),o=a.material;o.transparent=!0,o.opacity=.35,this.mesh.add(a)}buildTexture(e){const t=e.size,i=16,n=t*i,s=document.createElement("canvas");s.width=n,s.height=n;const a=s.getContext("2d");a.fillStyle="#c9b896",a.fillRect(0,0,n,n);const o=this.mulberry32(2654435769),l=a.getImageData(0,0,n,n),c=l.data;for(let d=0;d<c.length;d+=4){const u=(o()-.5)*28;c[d]=Math.max(0,Math.min(255,c[d]+u)),c[d+1]=Math.max(0,Math.min(255,c[d+1]+u*.9)),c[d+2]=Math.max(0,Math.min(255,c[d+2]+u*.7))}a.putImageData(l,0,0);for(let d=0;d<t;d++)for(let u=0;u<t;u++){const p=this.hash2(u,d);if(p%100<12){const g=u*i+p%i,v=d*i+(p>>4)%i,m=8+p%13,f=4876858+p%3*659460;a.fillStyle=`#${f.toString(16).padStart(6,"0")}`,a.globalAlpha=.55,a.beginPath(),a.ellipse(g,v,m,m*.7,p%180,0,Math.PI*2),a.fill()}}a.globalAlpha=1,a.fillStyle="#5a5048";for(let d=0;d<t*t*.04;d++){const u=o(),p=Math.floor(u*n),g=Math.floor(o()*n);a.globalAlpha=.4+o()*.3,a.fillRect(p,g,2,2)}a.globalAlpha=1;const h=new Rr(s);return h.colorSpace=yt,h.minFilter=Ut,h.magFilter=Ut,h}hash2(e,t){let i=e*374761393+t*668265263;return i=(i^i>>13)*1274126177,(i^i>>16)>>>0}mulberry32(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let i=t;return i=Math.imul(i^i>>15,i|1),i^=i+Math.imul(i^i>>7,i|61),((i^i>>14)>>>0)/4294967296}}}const Pi=Math.min(2,typeof window<"u"?window.devicePixelRatio:1),Hd=20,Cl=2.4,Gd=1;function Rl(r,e,t,i,n){r.scale(Pi,Pi),r.fillStyle="rgba(0,0,0,0.55)";const s=n*.4;r.beginPath(),r.moveTo(s,2),r.arcTo(t-2,2,t-2,i-2,s),r.arcTo(t-2,i-2,2,i-2,s),r.arcTo(2,i-2,2,2,s),r.arcTo(2,2,t-2,2,s),r.closePath(),r.fill(),r.fillStyle="#ffffff",r.font=`600 ${n}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,t/2,i/2)}function tn(r,e=3,t=1){const i=Hd*t,n=i*Cl,s=i*Gd,a=r.length*s+i;let o=null;try{const d=document.createElement("canvas");d.width=a*Pi,d.height=n*Pi;const u=d.getContext("2d");u&&(Rl(u,r,a,n,i),o=new Rr(d),o.colorSpace=yt,o.minFilter=Ut)}catch{}const l=new Jn({map:o??void 0,transparent:!0,depthTest:!1}),c=new Sn(l),h=.03125;return c.scale.set(a*h,n*h,1),c.position.y=e,c.renderOrder=999,c.layers.set(Pr),c}function nn(r=1.6,e=.7,t="(0,0)"){const i=(Hd-2)*e,n=i*Cl,s=i*Gd,a=t.length*s+i;let o=null;try{const d=document.createElement("canvas");d.width=a*Pi,d.height=n*Pi;const u=d.getContext("2d");u&&(Rl(u,t,a,n,i),o=new Rr(d),o.colorSpace=yt,o.minFilter=Ut)}catch{}const l=new Jn({map:o??void 0,transparent:!0,depthTest:!1}),c=new Sn(l),h=.03125;return c.scale.set(a*h,n*h,1),c.position.y=r,c.renderOrder=999,c.visible=!1,c.layers.set(Pr),c}function n_(r,e){const i=r.material.map;if(!(!i||!i.image))try{const n=i.image,s=n.getContext("2d");if(s){const a=n.width/Pi,o=n.height/Pi,l=o/Cl;s.setTransform(Pi,0,0,Pi,0,0),s.clearRect(0,0,a,o),Rl(s,e,a,o,l),i.needsUpdate=!0}}catch{}}function Pl(...r){for(const e of r){if(!e)continue;const t=e.material;t.map?.dispose(),t.dispose()}}class Qn{static textures=new Map;static initialized=!1;static init(){if(this.initialized)return;const e={player:{fill:"#4dd860",border:"#000000"},enemy:{fill:"#ff4444",border:"#000000"},boss:{fill:"#cc0000",border:"#ffd700"}};for(const[t,i]of Object.entries(e)){const n=[];for(let s=0;s<=20;s++)n.push(this.renderBar(s/20,i));this.textures.set(t,n)}this.initialized=!0}static renderBar(e,t){const i=document.createElement("canvas");i.width=64,i.height=16;try{const s=i.getContext("2d");s&&(s.fillStyle="rgba(0,0,0,0.5)",s.fillRect(0,0,64,16),s.fillStyle=t.fill,s.fillRect(2,2,Math.ceil(60*e),12),s.strokeStyle=t.border,s.lineWidth=t.border==="#ffd700"?2:1,s.strokeRect(.5,.5,63,15))}catch{}const n=new Rr(i);return n.colorSpace=yt,n}static create(e,t,i=!1){this.initialized||this.init();const n=t?"boss":e,s=this.textures.get(n)[20],a=new Jn({map:s,transparent:!0,depthTest:!1}),o=new Sn(a),l=t?4:i?3:1.5,c=t||i?.5:.3;return o.scale.set(l,c,1),o.renderOrder=999,o.visible=t,o.layers.set(Pr),o}static update(e,t,i,n,s){this.initialized||this.init();const a=i?"boss":t,o=Math.max(0,Math.min(20,Math.floor(n*20))),l=e.material,c=l.userData?.isFlashClone?l.userData.originalMat:l;if(c.map=this.textures.get(a)[o],s&&!l.userData.isFlashClone){const h=l.clone();h.color.setHex(16777215),h.userData={isFlashClone:!0,originalMat:l,expireAt:performance.now()+200},e.material=h}e.visible=n<1||i}static tickFlash(e){const t=e.material;if(t.userData?.isFlashClone&&performance.now()>=t.userData.expireAt){const i=t.userData.originalMat;e.material=i,t.dispose()}}}let s_=1;class sn{id;team;pos;hp;atkCooldown=0;outOfCombatFor=1/0;homePos;facing;turretAim;isBoss=!1;flashUntil=0;mesh;nameLabel;coordLabel;starLabel;healthBar;lastLabelPos=new w(NaN,NaN,NaN);constructor(e,t=0,i=0){this.id=s_++,this.team=e,this.pos=new w(t,0,i),this.hp=0,this.mesh=new ct}tickCooldown(e){this.atkCooldown=Math.max(0,this.atkCooldown-e)}canAttack(){return this.atkCooldown<=0}resetCooldown(e){this.atkCooldown=e}takeDamage(e){this.hp=Math.max(0,this.hp-e),this.markCombat()}markCombat(){this.outOfCombatFor=0}heal(e){this.hp=Math.min(this.maxHp,this.hp+e),this.healthBar&&Qn.update(this.healthBar,this.team,this.isBoss,this.hp/this.maxHp,!1)}get alive(){return this.hp>0}syncMesh(){this.mesh.position.copy(this.pos),this.facing&&(this.mesh.rotation.y=Math.atan2(-this.facing.x,-this.facing.z));const e=this.mesh.getObjectByName("turretHead");e&&(this.turretAim?e.rotation.y=Math.atan2(this.turretAim.x,this.turretAim.z)-this.mesh.rotation.y:this.facing&&(e.rotation.y=Math.PI)),this.coordLabel&&this.coordLabel.visible&&!this.pos.equals(this.lastLabelPos)&&(this.lastLabelPos.copy(this.pos),n_(this.coordLabel,this.coordText()))}coordText(){return`(${this.pos.x.toFixed(0)},${this.pos.z.toFixed(0)})`}}const kn={matchDurationSec:600,phases:{exploreEnd:30,deployEnd:90,econEnd:180,midGameEnd:360,lateGameEnd:540,victory:600},migration:{packUpGuideSec:2,deployGuideSec:1.5,guideInterruptable:!1}},Bn={gridSize:96,cellMeters:2},Je={commandCenter:{maxLevel:4,levels:[{hp:1500,workerCap:6,turretAttack:12,turretRange:12,turretAtkInterval:.5,upgradeCost:300},{hp:2e3,workerCap:8,turretAttack:14,turretRange:12,turretAtkInterval:.5,upgradeCost:600},{hp:2500,workerCap:10,turretAttack:17,turretRange:15,turretAtkInterval:.5,upgradeCost:900},{hp:3e3,workerCap:12,turretAttack:21,turretRange:15,turretAtkInterval:.5}]},rifleBarracks:{maxLevel:4,levels:[{hp:500,unitCap:6,prodTimeSec:9,prodUnit:"rifle",factoryUnitLevel:1,upgradeCost:200,rallyOffset:{x:0,z:5}},{hp:600,unitCap:8,prodTimeSec:9,prodUnit:"rifle",factoryUnitLevel:2,upgradeCost:400,rallyOffset:{x:0,z:5}},{hp:700,unitCap:10,prodTimeSec:9,prodUnit:"rifle",factoryUnitLevel:3,upgradeCost:600,rallyOffset:{x:0,z:5}},{hp:800,unitCap:12,prodTimeSec:9,prodUnit:"rifle",factoryUnitLevel:4,rallyOffset:{x:0,z:5}}]},flamerBarracks:{maxLevel:4,levels:[{hp:550,unitCap:3,prodTimeSec:12,prodUnit:"flamer",factoryUnitLevel:1,upgradeCost:250,rallyOffset:{x:0,z:5}},{hp:650,unitCap:4,prodTimeSec:12,prodUnit:"flamer",factoryUnitLevel:2,upgradeCost:500,rallyOffset:{x:0,z:5}},{hp:750,unitCap:5,prodTimeSec:12,prodUnit:"flamer",factoryUnitLevel:3,upgradeCost:750,rallyOffset:{x:0,z:5}},{hp:850,unitCap:6,prodTimeSec:12,prodUnit:"flamer",factoryUnitLevel:4,rallyOffset:{x:0,z:5}}]},mechFactory:{maxLevel:4,levels:[{hp:700,unitCap:2,prodTimeSec:20,prodUnit:"mech",factoryUnitLevel:1,upgradeCost:400,rallyOffset:{x:0,z:5}},{hp:900,unitCap:3,prodTimeSec:20,prodUnit:"mech",factoryUnitLevel:2,upgradeCost:800,rallyOffset:{x:0,z:5}},{hp:1100,unitCap:4,prodTimeSec:20,prodUnit:"mech",factoryUnitLevel:3,upgradeCost:1200,rallyOffset:{x:0,z:5}},{hp:1300,unitCap:5,prodTimeSec:20,prodUnit:"mech",factoryUnitLevel:4,rallyOffset:{x:0,z:5}}]},turret:{maxLevel:4,levels:[{hp:400,turretAttack:12,turretRange:12,turretAtkInterval:.5,upgradeCost:150},{hp:500,turretAttack:14,turretRange:12,turretAtkInterval:.5,upgradeCost:300},{hp:600,turretAttack:17,turretRange:15,turretAtkInterval:.5,upgradeCost:450},{hp:700,turretAttack:21,turretRange:15,turretAtkInterval:.5}]}},r_=new Set(["rifleBarracks","flamerBarracks","mechFactory"]),a_={turret:[{angle:0,radius:6},{angle:Math.PI/12,radius:7},{angle:-Math.PI/12,radius:7},{angle:0,radius:10}],rifleBarracks:[{angle:Math.PI/2,radius:6},{angle:Math.PI/3,radius:6.5},{angle:Math.PI/2,radius:9},{angle:Math.PI/3,radius:9.5}],flamerBarracks:[{angle:Math.PI*5/9,radius:6},{angle:Math.PI*7/9,radius:6},{angle:Math.PI*5/9,radius:9}],mechFactory:[{angle:-Math.PI/2,radius:6},{angle:-Math.PI/3,radius:6.5},{angle:-Math.PI/2,radius:9}]};var it;(function(r){r.assertEqual=n=>{};function e(n){}r.assertIs=e;function t(n){throw new Error}r.assertNever=t,r.arrayToEnum=n=>{const s={};for(const a of n)s[a]=a;return s},r.getValidEnumValues=n=>{const s=r.objectKeys(n).filter(o=>typeof n[n[o]]!="number"),a={};for(const o of s)a[o]=n[o];return r.objectValues(a)},r.objectValues=n=>r.objectKeys(n).map(function(s){return n[s]}),r.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{const s=[];for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&s.push(a);return s},r.find=(n,s)=>{for(const a of n)if(s(a))return a},r.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function i(n,s=" | "){return n.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}r.joinValues=i,r.jsonStringifyReplacer=(n,s)=>typeof s=="bigint"?s.toString():s})(it||(it={}));var xh;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(xh||(xh={}));const pe=it.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),dn=r=>{switch(typeof r){case"undefined":return pe.undefined;case"string":return pe.string;case"number":return Number.isNaN(r)?pe.nan:pe.number;case"boolean":return pe.boolean;case"function":return pe.function;case"bigint":return pe.bigint;case"symbol":return pe.symbol;case"object":return Array.isArray(r)?pe.array:r===null?pe.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?pe.promise:typeof Map<"u"&&r instanceof Map?pe.map:typeof Set<"u"&&r instanceof Set?pe.set:typeof Date<"u"&&r instanceof Date?pe.date:pe.object;default:return pe.unknown}},J=it.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Qi extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(s){return s.message},i={_errors:[]},n=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(n);else if(a.code==="invalid_return_type")n(a.returnTypeError);else if(a.code==="invalid_arguments")n(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return n(this),i}static assert(e){if(!(e instanceof Qi))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,it.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const n of this.issues)if(n.path.length>0){const s=n.path[0];t[s]=t[s]||[],t[s].push(e(n))}else i.push(e(n));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Qi.create=r=>new Qi(r);const Qo=(r,e)=>{let t;switch(r.code){case J.invalid_type:r.received===pe.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case J.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,it.jsonStringifyReplacer)}`;break;case J.unrecognized_keys:t=`Unrecognized key(s) in object: ${it.joinValues(r.keys,", ")}`;break;case J.invalid_union:t="Invalid input";break;case J.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${it.joinValues(r.options)}`;break;case J.invalid_enum_value:t=`Invalid enum value. Expected ${it.joinValues(r.options)}, received '${r.received}'`;break;case J.invalid_arguments:t="Invalid function arguments";break;case J.invalid_return_type:t="Invalid function return type";break;case J.invalid_date:t="Invalid date";break;case J.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:it.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case J.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="bigint"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case J.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case J.custom:t="Invalid input";break;case J.invalid_intersection_types:t="Intersection results could not be merged";break;case J.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case J.not_finite:t="Number must be finite";break;default:t=e.defaultError,it.assertNever(r)}return{message:t}};let o_=Qo;function l_(){return o_}const c_=r=>{const{data:e,path:t,errorMaps:i,issueData:n}=r,s=[...t,...n.path||[]],a={...n,path:s};if(n.message!==void 0)return{...n,path:s,message:n.message};let o="";const l=i.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:e,defaultError:o}).message;return{...n,path:s,message:o}};function ce(r,e){const t=l_(),i=c_({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===Qo?void 0:Qo].filter(n=>!!n)});r.common.issues.push(i)}class ei{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const n of t){if(n.status==="aborted")return Pe;n.status==="dirty"&&e.dirty(),i.push(n.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const n of t){const s=await n.key,a=await n.value;i.push({key:s,value:a})}return ei.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const n of t){const{key:s,value:a}=n;if(s.status==="aborted"||a.status==="aborted")return Pe;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||n.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const Pe=Object.freeze({status:"aborted"}),or=r=>({status:"dirty",value:r}),pi=r=>({status:"valid",value:r}),Mh=r=>r.status==="aborted",Sh=r=>r.status==="dirty",Bs=r=>r.status==="valid",Sa=r=>typeof Promise<"u"&&r instanceof Promise;var ve;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e?.message})(ve||(ve={}));class Ii{constructor(e,t,i,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=n}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const bh=(r,e)=>{if(Bs(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Qi(r.common.issues);return this._error=t,this._error}}};function He(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:n}=r;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:n}:{errorMap:(a,o)=>{const{message:l}=r;return a.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??i??o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:l??t??o.defaultError}},description:n}}class et{get description(){return this._def.description}_getType(e){return dn(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:dn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ei,ctx:{common:e.parent.common,data:e.data,parsedType:dn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Sa(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){const i={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:dn(e)},n=this._parseSync({data:e,path:i.path,parent:i});return bh(i,n)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:dn(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:t});return Bs(i)?{value:i.value}:{issues:t.common.issues}}catch(i){i?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(i=>Bs(i)?{value:i.value}:{issues:t.common.issues})}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:dn(e)},n=this._parse({data:e,path:i.path,parent:i}),s=await(Sa(n)?n:Promise.resolve(n));return bh(i,s)}refine(e,t){const i=n=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(n):t;return this._refinement((n,s)=>{const a=e(n),o=()=>s.addIssue({code:J.custom,...i(n)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,n)=>e(i)?!0:(n.addIssue(typeof t=="function"?t(i,n):t),!1))}_refinement(e){return new jn({schema:this,typeName:Le.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return ji.create(this,this._def)}nullable(){return Zn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Li.create(this)}promise(){return Ca.create(this,this._def)}or(e){return wa.create([this,e],this._def)}and(e){return Ta.create(this,e,this._def)}transform(e){return new jn({...He(this._def),schema:this,typeName:Le.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Ra({...He(this._def),innerType:this,defaultValue:t,typeName:Le.ZodDefault})}brand(){return new qd({typeName:Le.ZodBranded,type:this,...He(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Pa({...He(this._def),innerType:this,catchValue:t,typeName:Le.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Il.create(this,e)}readonly(){return La.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const h_=/^c[^\s-]{8,}$/i,d_=/^[0-9a-z]+$/,u_=/^[0-9A-HJKMNP-TV-Z]{26}$/i,f_=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,p_=/^[a-z0-9_-]{21}$/i,m_=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,g_=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,v_=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,__="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ro;const y_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,x_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,M_=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,S_=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,b_=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,w_=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Vd="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",T_=new RegExp(`^${Vd}$`);function Wd(r){let e="[0-5]\\d";r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`);const t=r.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function E_(r){return new RegExp(`^${Wd(r)}$`)}function A_(r){let e=`${Vd}T${Wd(r)}`;const t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function C_(r,e){return!!((e==="v4"||!e)&&y_.test(r)||(e==="v6"||!e)&&M_.test(r))}function R_(r,e){if(!m_.test(r))return!1;try{const[t]=r.split(".");if(!t)return!1;const i=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),n=JSON.parse(atob(i));return!(typeof n!="object"||n===null||"typ"in n&&n?.typ!=="JWT"||!n.alg||e&&n.alg!==e)}catch{return!1}}function P_(r,e){return!!((e==="v4"||!e)&&x_.test(r)||(e==="v6"||!e)&&S_.test(r))}class Xi extends et{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==pe.string){const s=this._getOrReturnCtx(e);return ce(s,{code:J.invalid_type,expected:pe.string,received:s.parsedType}),Pe}const i=new ei;let n;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(n=this._getOrReturnCtx(e,n),ce(n,{code:J.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(n=this._getOrReturnCtx(e,n),ce(n,{code:J.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(n=this._getOrReturnCtx(e,n),a?ce(n,{code:J.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&ce(n,{code:J.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")v_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"email",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Ro||(Ro=new RegExp(__,"u")),Ro.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"emoji",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")f_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"uuid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")p_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"nanoid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")h_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"cuid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")d_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"cuid2",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")u_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"ulid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),ce(n,{validation:"url",code:J.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"regex",code:J.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?A_(s).test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?T_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?E_(s).test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{code:J.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?g_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"duration",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?C_(e.data,s.version)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"ip",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="jwt"?R_(e.data,s.alg)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"jwt",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="cidr"?P_(e.data,s.version)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"cidr",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?b_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"base64",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="base64url"?w_.test(e.data)||(n=this._getOrReturnCtx(e,n),ce(n,{validation:"base64url",code:J.invalid_string,message:s.message}),i.dirty()):it.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(n=>e.test(n),{validation:t,code:J.invalid_string,...ve.errToObj(i)})}_addCheck(e){return new Xi({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ve.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ve.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ve.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ve.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...ve.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ve.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ve.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ve.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...ve.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...ve.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...ve.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ve.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...ve.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...ve.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...ve.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...ve.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...ve.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...ve.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...ve.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...ve.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...ve.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...ve.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...ve.errToObj(t)})}nonempty(e){return this.min(1,ve.errToObj(e))}trim(){return new Xi({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Xi({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Xi({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Xi.create=r=>new Xi({checks:[],typeName:Le.ZodString,coerce:r?.coerce??!1,...He(r)});function L_(r,e){const t=(r.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,n=t>i?t:i,s=Number.parseInt(r.toFixed(n).replace(".","")),a=Number.parseInt(e.toFixed(n).replace(".",""));return s%a/10**n}class Fs extends et{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==pe.number){const s=this._getOrReturnCtx(e);return ce(s,{code:J.invalid_type,expected:pe.number,received:s.parsedType}),Pe}let i;const n=new ei;for(const s of this._def.checks)s.kind==="int"?it.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),ce(i,{code:J.invalid_type,expected:"integer",received:"float",message:s.message}),n.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),n.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),n.dirty()):s.kind==="multipleOf"?L_(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.not_multiple_of,multipleOf:s.value,message:s.message}),n.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),ce(i,{code:J.not_finite,message:s.message}),n.dirty()):it.assertNever(s);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,ve.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ve.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ve.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ve.toString(t))}setLimit(e,t,i,n){return new Fs({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:ve.toString(n)}]})}_addCheck(e){return new Fs({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ve.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ve.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:ve.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ve.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ve.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&it.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Fs.create=r=>new Fs({checks:[],typeName:Le.ZodNumber,coerce:r?.coerce||!1,...He(r)});class br extends et{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==pe.bigint)return this._getInvalidInput(e);let i;const n=new ei;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),n.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),n.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),ce(i,{code:J.not_multiple_of,multipleOf:s.value,message:s.message}),n.dirty()):it.assertNever(s);return{status:n.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return ce(t,{code:J.invalid_type,expected:pe.bigint,received:t.parsedType}),Pe}gte(e,t){return this.setLimit("min",e,!0,ve.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ve.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ve.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ve.toString(t))}setLimit(e,t,i,n){return new br({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:ve.toString(n)}]})}_addCheck(e){return new br({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}br.create=r=>new br({checks:[],typeName:Le.ZodBigInt,coerce:r?.coerce??!1,...He(r)});class el extends et{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==pe.boolean){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.boolean,received:i.parsedType}),Pe}return pi(e.data)}}el.create=r=>new el({typeName:Le.ZodBoolean,coerce:r?.coerce||!1,...He(r)});class ba extends et{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==pe.date){const s=this._getOrReturnCtx(e);return ce(s,{code:J.invalid_type,expected:pe.date,received:s.parsedType}),Pe}if(Number.isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return ce(s,{code:J.invalid_date}),Pe}const i=new ei;let n;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(n=this._getOrReturnCtx(e,n),ce(n,{code:J.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(n=this._getOrReturnCtx(e,n),ce(n,{code:J.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):it.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ba({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:ve.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:ve.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}ba.create=r=>new ba({checks:[],coerce:r?.coerce||!1,typeName:Le.ZodDate,...He(r)});class wh extends et{_parse(e){if(this._getType(e)!==pe.symbol){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.symbol,received:i.parsedType}),Pe}return pi(e.data)}}wh.create=r=>new wh({typeName:Le.ZodSymbol,...He(r)});class tl extends et{_parse(e){if(this._getType(e)!==pe.undefined){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.undefined,received:i.parsedType}),Pe}return pi(e.data)}}tl.create=r=>new tl({typeName:Le.ZodUndefined,...He(r)});class il extends et{_parse(e){if(this._getType(e)!==pe.null){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.null,received:i.parsedType}),Pe}return pi(e.data)}}il.create=r=>new il({typeName:Le.ZodNull,...He(r)});class nl extends et{constructor(){super(...arguments),this._any=!0}_parse(e){return pi(e.data)}}nl.create=r=>new nl({typeName:Le.ZodAny,...He(r)});class Th extends et{constructor(){super(...arguments),this._unknown=!0}_parse(e){return pi(e.data)}}Th.create=r=>new Th({typeName:Le.ZodUnknown,...He(r)});class Mn extends et{_parse(e){const t=this._getOrReturnCtx(e);return ce(t,{code:J.invalid_type,expected:pe.never,received:t.parsedType}),Pe}}Mn.create=r=>new Mn({typeName:Le.ZodNever,...He(r)});class Eh extends et{_parse(e){if(this._getType(e)!==pe.undefined){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.void,received:i.parsedType}),Pe}return pi(e.data)}}Eh.create=r=>new Eh({typeName:Le.ZodVoid,...He(r)});class Li extends et{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),n=this._def;if(t.parsedType!==pe.array)return ce(t,{code:J.invalid_type,expected:pe.array,received:t.parsedType}),Pe;if(n.exactLength!==null){const a=t.data.length>n.exactLength.value,o=t.data.length<n.exactLength.value;(a||o)&&(ce(t,{code:a?J.too_big:J.too_small,minimum:o?n.exactLength.value:void 0,maximum:a?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),i.dirty())}if(n.minLength!==null&&t.data.length<n.minLength.value&&(ce(t,{code:J.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),i.dirty()),n.maxLength!==null&&t.data.length>n.maxLength.value&&(ce(t,{code:J.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>n.type._parseAsync(new Ii(t,a,t.path,o)))).then(a=>ei.mergeArray(i,a));const s=[...t.data].map((a,o)=>n.type._parseSync(new Ii(t,a,t.path,o)));return ei.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new Li({...this._def,minLength:{value:e,message:ve.toString(t)}})}max(e,t){return new Li({...this._def,maxLength:{value:e,message:ve.toString(t)}})}length(e,t){return new Li({...this._def,exactLength:{value:e,message:ve.toString(t)}})}nonempty(e){return this.min(1,e)}}Li.create=(r,e)=>new Li({type:r,minLength:null,maxLength:null,exactLength:null,typeName:Le.ZodArray,...He(e)});function Ts(r){if(r instanceof Tt){const e={};for(const t in r.shape){const i=r.shape[t];e[t]=ji.create(Ts(i))}return new Tt({...r._def,shape:()=>e})}else return r instanceof Li?new Li({...r._def,type:Ts(r.element)}):r instanceof ji?ji.create(Ts(r.unwrap())):r instanceof Zn?Zn.create(Ts(r.unwrap())):r instanceof $n?$n.create(r.items.map(e=>Ts(e))):r}class Tt extends et{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=it.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==pe.object){const c=this._getOrReturnCtx(e);return ce(c,{code:J.invalid_type,expected:pe.object,received:c.parsedType}),Pe}const{status:i,ctx:n}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Mn&&this._def.unknownKeys==="strip"))for(const c in n.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const h=s[c],d=n.data[c];l.push({key:{status:"valid",value:c},value:h._parse(new Ii(n,d,n.path,c)),alwaysSet:c in n.data})}if(this._def.catchall instanceof Mn){const c=this._def.unknownKeys;if(c==="passthrough")for(const h of o)l.push({key:{status:"valid",value:h},value:{status:"valid",value:n.data[h]}});else if(c==="strict")o.length>0&&(ce(n,{code:J.unrecognized_keys,keys:o}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const h of o){const d=n.data[h];l.push({key:{status:"valid",value:h},value:c._parse(new Ii(n,d,n.path,h)),alwaysSet:h in n.data})}}return n.common.async?Promise.resolve().then(async()=>{const c=[];for(const h of l){const d=await h.key,u=await h.value;c.push({key:d,value:u,alwaysSet:h.alwaysSet})}return c}).then(c=>ei.mergeObjectSync(i,c)):ei.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return ve.errToObj,new Tt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{const n=this._def.errorMap?.(t,i).message??i.defaultError;return t.code==="unrecognized_keys"?{message:ve.errToObj(e).message??n}:{message:n}}}:{}})}strip(){return new Tt({...this._def,unknownKeys:"strip"})}passthrough(){return new Tt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Tt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Tt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Le.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Tt({...this._def,catchall:e})}pick(e){const t={};for(const i of it.objectKeys(e))e[i]&&this.shape[i]&&(t[i]=this.shape[i]);return new Tt({...this._def,shape:()=>t})}omit(e){const t={};for(const i of it.objectKeys(this.shape))e[i]||(t[i]=this.shape[i]);return new Tt({...this._def,shape:()=>t})}deepPartial(){return Ts(this)}partial(e){const t={};for(const i of it.objectKeys(this.shape)){const n=this.shape[i];e&&!e[i]?t[i]=n:t[i]=n.optional()}return new Tt({...this._def,shape:()=>t})}required(e){const t={};for(const i of it.objectKeys(this.shape))if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof ji;)s=s._def.innerType;t[i]=s}return new Tt({...this._def,shape:()=>t})}keyof(){return Xd(it.objectKeys(this.shape))}}Tt.create=(r,e)=>new Tt({shape:()=>r,unknownKeys:"strip",catchall:Mn.create(),typeName:Le.ZodObject,...He(e)});Tt.strictCreate=(r,e)=>new Tt({shape:()=>r,unknownKeys:"strict",catchall:Mn.create(),typeName:Le.ZodObject,...He(e)});Tt.lazycreate=(r,e)=>new Tt({shape:r,unknownKeys:"strip",catchall:Mn.create(),typeName:Le.ZodObject,...He(e)});class wa extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function n(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Qi(o.ctx.common.issues));return ce(t,{code:J.invalid_union,unionErrors:a}),Pe}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(n);{let s;const a=[];for(const l of i){const c={...t,common:{...t.common,issues:[]},parent:null},h=l._parseSync({data:t.data,path:t.path,parent:c});if(h.status==="valid")return h;h.status==="dirty"&&!s&&(s={result:h,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(l=>new Qi(l));return ce(t,{code:J.invalid_union,unionErrors:o}),Pe}}get options(){return this._def.options}}wa.create=(r,e)=>new wa({options:r,typeName:Le.ZodUnion,...He(e)});const Hi=r=>r instanceof rl?Hi(r.schema):r instanceof jn?Hi(r.innerType()):r instanceof Aa?[r.value]:r instanceof Yn?r.options:r instanceof al?it.objectValues(r.enum):r instanceof Ra?Hi(r._def.innerType):r instanceof tl?[void 0]:r instanceof il?[null]:r instanceof ji?[void 0,...Hi(r.unwrap())]:r instanceof Zn?[null,...Hi(r.unwrap())]:r instanceof qd||r instanceof La?Hi(r.unwrap()):r instanceof Pa?Hi(r._def.innerType):[];class Ll extends et{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==pe.object)return ce(t,{code:J.invalid_type,expected:pe.object,received:t.parsedType}),Pe;const i=this.discriminator,n=t.data[i],s=this.optionsMap.get(n);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(ce(t,{code:J.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Pe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const n=new Map;for(const s of t){const a=Hi(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(n.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);n.set(o,s)}}return new Ll({typeName:Le.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...He(i)})}}function sl(r,e){const t=dn(r),i=dn(e);if(r===e)return{valid:!0,data:r};if(t===pe.object&&i===pe.object){const n=it.objectKeys(e),s=it.objectKeys(r).filter(o=>n.indexOf(o)!==-1),a={...r,...e};for(const o of s){const l=sl(r[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(t===pe.array&&i===pe.array){if(r.length!==e.length)return{valid:!1};const n=[];for(let s=0;s<r.length;s++){const a=r[s],o=e[s],l=sl(a,o);if(!l.valid)return{valid:!1};n.push(l.data)}return{valid:!0,data:n}}else return t===pe.date&&i===pe.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class Ta extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),n=(s,a)=>{if(Mh(s)||Mh(a))return Pe;const o=sl(s.value,a.value);return o.valid?((Sh(s)||Sh(a))&&t.dirty(),{status:t.value,value:o.data}):(ce(i,{code:J.invalid_intersection_types}),Pe)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>n(s,a)):n(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Ta.create=(r,e,t)=>new Ta({left:r,right:e,typeName:Le.ZodIntersection,...He(t)});class $n extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.array)return ce(i,{code:J.invalid_type,expected:pe.array,received:i.parsedType}),Pe;if(i.data.length<this._def.items.length)return ce(i,{code:J.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Pe;!this._def.rest&&i.data.length>this._def.items.length&&(ce(i,{code:J.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new Ii(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>ei.mergeArray(t,a)):ei.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new $n({...this._def,rest:e})}}$n.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new $n({items:r,typeName:Le.ZodTuple,rest:null,...He(e)})};class Ea extends et{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.object)return ce(i,{code:J.invalid_type,expected:pe.object,received:i.parsedType}),Pe;const n=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)n.push({key:s._parse(new Ii(i,o,i.path,o)),value:a._parse(new Ii(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?ei.mergeObjectAsync(t,n):ei.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof et?new Ea({keyType:e,valueType:t,typeName:Le.ZodRecord,...He(i)}):new Ea({keyType:Xi.create(),valueType:e,typeName:Le.ZodRecord,...He(t)})}}class Ah extends et{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.map)return ce(i,{code:J.invalid_type,expected:pe.map,received:i.parsedType}),Pe;const n=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,l],c)=>({key:n._parse(new Ii(i,o,i.path,[c,"key"])),value:s._parse(new Ii(i,l,i.path,[c,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,h=await l.value;if(c.status==="aborted"||h.status==="aborted")return Pe;(c.status==="dirty"||h.status==="dirty")&&t.dirty(),o.set(c.value,h.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,h=l.value;if(c.status==="aborted"||h.status==="aborted")return Pe;(c.status==="dirty"||h.status==="dirty")&&t.dirty(),o.set(c.value,h.value)}return{status:t.value,value:o}}}}Ah.create=(r,e,t)=>new Ah({valueType:e,keyType:r,typeName:Le.ZodMap,...He(t)});class wr extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.set)return ce(i,{code:J.invalid_type,expected:pe.set,received:i.parsedType}),Pe;const n=this._def;n.minSize!==null&&i.data.size<n.minSize.value&&(ce(i,{code:J.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),n.maxSize!==null&&i.data.size>n.maxSize.value&&(ce(i,{code:J.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const s=this._def.valueType;function a(l){const c=new Set;for(const h of l){if(h.status==="aborted")return Pe;h.status==="dirty"&&t.dirty(),c.add(h.value)}return{status:t.value,value:c}}const o=[...i.data.values()].map((l,c)=>s._parse(new Ii(i,l,i.path,c)));return i.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,t){return new wr({...this._def,minSize:{value:e,message:ve.toString(t)}})}max(e,t){return new wr({...this._def,maxSize:{value:e,message:ve.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}wr.create=(r,e)=>new wr({valueType:r,minSize:null,maxSize:null,typeName:Le.ZodSet,...He(e)});class rl extends et{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}rl.create=(r,e)=>new rl({getter:r,typeName:Le.ZodLazy,...He(e)});class Aa extends et{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ce(t,{received:t.data,code:J.invalid_literal,expected:this._def.value}),Pe}return{status:"valid",value:e.data}}get value(){return this._def.value}}Aa.create=(r,e)=>new Aa({value:r,typeName:Le.ZodLiteral,...He(e)});function Xd(r,e){return new Yn({values:r,typeName:Le.ZodEnum,...He(e)})}class Yn extends et{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return ce(t,{expected:it.joinValues(i),received:t.parsedType,code:J.invalid_type}),Pe}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return ce(t,{received:t.data,code:J.invalid_enum_value,options:i}),Pe}return pi(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Yn.create(e,{...this._def,...t})}exclude(e,t=this._def){return Yn.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}Yn.create=Xd;class al extends et{_parse(e){const t=it.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==pe.string&&i.parsedType!==pe.number){const n=it.objectValues(t);return ce(i,{expected:it.joinValues(n),received:i.parsedType,code:J.invalid_type}),Pe}if(this._cache||(this._cache=new Set(it.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const n=it.objectValues(t);return ce(i,{received:i.data,code:J.invalid_enum_value,options:n}),Pe}return pi(e.data)}get enum(){return this._def.values}}al.create=(r,e)=>new al({values:r,typeName:Le.ZodNativeEnum,...He(e)});class Ca extends et{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==pe.promise&&t.common.async===!1)return ce(t,{code:J.invalid_type,expected:pe.promise,received:t.parsedType}),Pe;const i=t.parsedType===pe.promise?t.data:Promise.resolve(t.data);return pi(i.then(n=>this._def.type.parseAsync(n,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Ca.create=(r,e)=>new Ca({type:r,typeName:Le.ZodPromise,...He(e)});class jn extends et{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Le.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),n=this._def.effect||null,s={addIssue:a=>{ce(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),n.type==="preprocess"){const a=n.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Pe;const l=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return l.status==="aborted"?Pe:l.status==="dirty"||t.value==="dirty"?or(l.value):l});{if(t.value==="aborted")return Pe;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?Pe:o.status==="dirty"||t.value==="dirty"?or(o.value):o}}if(n.type==="refinement"){const a=o=>{const l=n.refinement(o,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Pe:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?Pe:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(n.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Bs(a))return Pe;const o=n.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>Bs(a)?Promise.resolve(n.transform(a.value,s)).then(o=>({status:t.value,value:o})):Pe);it.assertNever(n)}}jn.create=(r,e,t)=>new jn({schema:r,typeName:Le.ZodEffects,effect:e,...He(t)});jn.createWithPreprocess=(r,e,t)=>new jn({schema:e,effect:{type:"preprocess",transform:r},typeName:Le.ZodEffects,...He(t)});class ji extends et{_parse(e){return this._getType(e)===pe.undefined?pi(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ji.create=(r,e)=>new ji({innerType:r,typeName:Le.ZodOptional,...He(e)});class Zn extends et{_parse(e){return this._getType(e)===pe.null?pi(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Zn.create=(r,e)=>new Zn({innerType:r,typeName:Le.ZodNullable,...He(e)});class Ra extends et{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===pe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Ra.create=(r,e)=>new Ra({innerType:r,typeName:Le.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...He(e)});class Pa extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Sa(n)?n.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Qi(i.common.issues)},input:i.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new Qi(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Pa.create=(r,e)=>new Pa({innerType:r,typeName:Le.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...He(e)});class Ch extends et{_parse(e){if(this._getType(e)!==pe.nan){const i=this._getOrReturnCtx(e);return ce(i,{code:J.invalid_type,expected:pe.nan,received:i.parsedType}),Pe}return{status:"valid",value:e.data}}}Ch.create=r=>new Ch({typeName:Le.ZodNaN,...He(r)});class qd extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class Il extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Pe:s.status==="dirty"?(t.dirty(),or(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const n=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return n.status==="aborted"?Pe:n.status==="dirty"?(t.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:i.path,parent:i})}}static create(e,t){return new Il({in:e,out:t,typeName:Le.ZodPipeline})}}class La extends et{_parse(e){const t=this._def.innerType._parse(e),i=n=>(Bs(n)&&(n.value=Object.freeze(n.value)),n);return Sa(t)?t.then(n=>i(n)):i(t)}unwrap(){return this._def.innerType}}La.create=(r,e)=>new La({innerType:r,typeName:Le.ZodReadonly,...He(e)});var Le;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(Le||(Le={}));const ol=Xi.create,ye=Fs.create,hn=el.create,I_=nl.create;Mn.create;const di=Li.create,be=Tt.create;wa.create;const D_=Ll.create;Ta.create;$n.create;const jt=Ea.create,Ss=Aa.create,ti=Yn.create;Ca.create;ji.create;Zn.create;const nt={ore:{nodeCount:8,nodeReserve:600,perTrip:10,gatherSec:1.5,startAmount:250},worker:{startCount:3,maxCount:8,cost:50,prodTime:6,gatherRadius:12,speed:4.5,idleOnDepleted:!0},noOreHint:{enabled:!0,deployText:"此处采集范围内无矿石，建议迁移到新矿点",depletedText:"采集范围内的矿石已采完，请收起基地寻找新矿点",durationMs:4e3}},Rh={grunt:1,miniBoss:10},ii={rifle:{hp:45,attack:6,atkInterval:.5,range:6,speed:4,cost:50},flamer:{hp:80,attack:8,atkInterval:.6,range:4,speed:3.5,cost:100},mech:{hp:400,attack:35,atkInterval:.7,range:3,speed:3,cost:300}},mr={combatThresholds:{lv2:1,lv3:3,lv4:6,lv5:9,lv6:12,lv7:15},multiplier:{lv1:1,lv2:1.2,lv3:1.5,lv4:1.8,lv5:2.2,lv6:2.5,lv7:3},overflowSharesToSquad:!0},un={hp:250,shield:50,attack:18,atkInterval:.5,range:7,speed:4.5},Fn={combatThresholds:{lv2:2,lv3:6,lv4:12,lv5:18,lv6:24,lv7:30},multiplier:{lv1:1,lv2:1.15,lv3:1.35,lv4:1.6,lv5:1.9,lv6:2.2,lv7:2.6},shareFromAnyAllyKill:!0,shareRatio:1,persistOnDeath:!0,skillUnlocks:{lv2:{shockwaveCooldownDelta:-1},lv3:{shockwaveRadiusDelta:1},lv4:{shockwaveDamageMul:1.2},lv5:{shockwaveCooldownDelta:-1},lv6:{shockwaveRadiusDelta:1},lv7:{shockwaveDamageMul:1.3}}},zt={projectile:{poolSize:200,speed:25,lifetimeSec:2,flightHeight:1.2},squad:{tetherRadius:6,tetherBreakDist:9,regroupPushStrength:6,alertRange:15},revive:{cost:200,timeByCcLevel:{lv1:15,lv2:10,lv3:5,lv4:4}}},Dl={lightning:16772608,regen:4521830},Ia={lightning:{rifleBarracks:{onAttack:{type:"chainLightning",damage:10,chains:2}},flamerBarracks:{onAttack:{type:"lightningChain",damage:12,chains:3,decay:.3}},mechFactory:{onAttack:{type:"aoe",radius:3,damage:40}},turret:{onAttack:{type:"ricochet",chains:1,damage:6}},commandCenter:null},regen:{rifleBarracks:{aura:{type:"hot",hpPerSec:6,afterCombatSec:2}},flamerBarracks:{aura:{type:"hot",hpPerSec:10,afterCombatSec:2}},mechFactory:{aura:{type:"hot",hpPerSec:25,afterCombatSec:2}},turret:{aura:{type:"hot",hpPerSec:18,afterCombatSec:2}},commandCenter:null}},Ph=[{id:"lightning",label:"雷电核心",description:"攻击时释放闪电，对周围敌人造成额外伤害（连锁闪电 / 闪电链 / 范围爆炸 / 弹射，随镶嵌建筑变化）",spawnRegion:"resource"},{id:"regen",label:"自愈核心",description:"赋予建筑产出单位脱战自愈光环（脱离战斗 2 秒后持续恢复生命）",spawnRegion:"relic"}],pn={cooldownSec:6,damage:60,radius:6,oreCost:0,projectileSpeed:18,maxRange:15,hitRadius:2},da=[{id:"wreckZone",count:4,pool:{rifleBarracks:3,flamerBarracks:2,mechFactory:1,turret:2},spots:[{x:30,z:-20,guards:{unitType:"rifle",count:1}},{x:45,z:-5,guards:{unitType:"flamer",count:1}},{x:35,z:15,guards:{unitType:"rifle",count:2}},{x:50,z:25,guards:{unitType:"rifle",count:1}}]},{id:"relicZone",count:2,pool:{rifleBarracks:0,flamerBarracks:0,mechFactory:1,turret:2},spots:[{x:-15,z:-45,guards:{unitType:"flamer",count:1}},{x:20,z:-55,guards:{unitType:"rifle",count:1}}]}],Gt={condition:{worn:{probability:.7,repairCost:100,repairSec:8},damaged:{probability:.25,repairCost:150,repairSec:12},intact:{probability:.05,repairCost:50,repairSec:4}},damagedUpgradeChance:.3,advancedVehicles:["mechFactory","turret"],repairRange:4,repairPanelAnchorY:3.7,harass:{spawnDist:5,byCondition:{worn:{units:{rifle:2}},damaged:{units:{rifle:2,flamer:1}},intact:{units:{}}}}};function Vi(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ei=[{time:90,type:"main",edge:"north",units:{rifle:8}},{time:140,type:"harass",edge:"random",units:{rifle:3}},{time:190,type:"harass",edge:"random",units:{rifle:4}},{time:240,type:"main",edge:"north",units:{rifle:10}},{time:290,type:"harass",edge:"random",units:{rifle:3,flamer:1}},{time:340,type:"main",edge:"north",units:{rifle:10,flamer:4,mech:2}},{time:390,type:"harass",edge:"random",units:{rifle:3,flamer:1}},{time:440,type:"harass",edge:"random",units:{rifle:4,flamer:1}},{time:490,type:"harass",edge:"random",units:{rifle:4,flamer:1}},{time:540,type:"main",edge:"north",units:{rifle:12,flamer:6,mech:4},miniBoss:!0}],U_={hp:1200,attack:30,atkInterval:.7,range:9},xn={start:{x:0,z:0},oreNodes:[{x:10,z:8},{x:-12,z:6},{x:14,z:-10},{x:-8,z:-14},{x:30,z:20},{x:-25,z:28},{x:35,z:-25},{x:-30,z:-30}],relicSites:[{id:"northwest",x:-50,z:-50},{id:"southeast",x:50,z:50},{id:"southwest",x:-50,z:50}],enemyBase:{x:50,z:-50}},Gi={alertRange:15,leashRange:20},lr=[{id:"northwest",scavengers:[{unitType:"rifle",count:3},{unitType:"flamer",count:1}],reward:{type:"coreRandom"}},{id:"southeast",scavengers:[{unitType:"rifle",count:2},{unitType:"flamer",count:1}],reward:{type:"coreRandom"}},{id:"southwest",scavengers:[{unitType:"rifle",count:3},{unitType:"flamer",count:2}],miniBoss:!0,reward:{type:"coreRandom"},extraOreCrate:500}],Lh=[[{unitType:"mech",count:2},{unitType:"rifle",count:8}],[{unitType:"mech",count:2},{unitType:"flamer",count:8}],[{unitType:"mech",count:2},{unitType:"rifle",count:4},{unitType:"flamer",count:4}]],Ih=[{unitType:"mech",count:1},{unitType:"flamer",count:2},{unitType:"rifle",count:2}],Is={pos:{x:50,z:-50},buildings:[{type:"commandCenter",level:1,offset:{x:0,z:0}},{type:"rifleBarracks",level:1,offset:{x:-4,z:-2}},{type:"rifleBarracks",level:1,offset:{x:4,z:-2}},{type:"mechFactory",level:1,offset:{x:0,z:-4}},{type:"turret",level:1,offset:{x:0,z:-8}},{type:"turret",level:1,offset:{x:-8,z:0}},{type:"turret",level:1,offset:{x:8,z:0}},{type:"turret",level:1,offset:{x:0,z:4}}],rewards:{turret:150,rifleBarracks:450,flamerBarracks:450,mechFactory:450,commandCenter:1300},enemyIncomePerSec:10},ll=[{id:"large",buildings:[{type:"commandCenter",level:1,offset:{x:0,z:0}},{type:"mechFactory",level:1,offset:{x:0,z:-4}},{type:"turret",level:1,offset:{x:0,z:-8}},{type:"turret",level:1,offset:{x:-8,z:0}},{type:"turret",level:1,offset:{x:8,z:0}},{type:"turret",level:1,offset:{x:0,z:4}},{type:"rifleBarracks",level:1,offset:{x:-4,z:-2}},{type:"rifleBarracks",level:1,offset:{x:4,z:-2}}],rewards:{turret:150,rifleBarracks:450,flamerBarracks:450,mechFactory:450,commandCenter:1300},enemyIncomePerSec:10,barracksSlots:2},{id:"smallA",buildings:[{type:"commandCenter",level:1,offset:{x:0,z:0}},{type:"turret",level:1,offset:{x:-4,z:0}},{type:"turret",level:1,offset:{x:4,z:0}},{type:"rifleBarracks",level:1,offset:{x:0,z:-4}}],rewards:{turret:150,rifleBarracks:450,flamerBarracks:450,mechFactory:450,commandCenter:800},enemyIncomePerSec:5,barracksSlots:1},{id:"smallB",buildings:[{type:"commandCenter",level:1,offset:{x:0,z:0}},{type:"turret",level:1,offset:{x:4,z:0}},{type:"rifleBarracks",level:1,offset:{x:0,z:-4}}],rewards:{turret:150,rifleBarracks:450,flamerBarracks:450,mechFactory:450,commandCenter:600},enemyIncomePerSec:3,barracksSlots:1}],fe=ye().positive(),N_=be({hp:fe,unitCap:ye().int().positive().optional(),prodTimeSec:ye().int().positive().optional(),prodUnit:ti(["rifle","flamer","mech"]).optional(),factoryUnitLevel:ye().int().min(1).max(4).optional(),upgradeCost:fe.optional(),rallyOffset:be({x:ye(),z:ye()}).optional(),turretAttack:fe.optional(),turretRange:fe.optional(),turretAtkInterval:fe.optional(),workerCap:ye().int().positive().optional()}),O_=jt(be({maxLevel:ye().int().positive(),levels:di(N_).min(1)}));function z_(){be({gridSize:ye().int().positive(),cellMeters:fe}).parse(Bn),be({matchDurationSec:fe,migration:be({packUpGuideSec:fe,deployGuideSec:fe,guideInterruptable:hn()})}).parse(kn),O_.parse(Je);for(const[f,_]of Object.entries(Je))if(_.levels.length!==_.maxLevel)throw new Error(`配置错误：MODULES.${f}.levels 长度(${_.levels.length}) != maxLevel(${_.maxLevel})`);be({ore:be({nodeCount:ye().int().positive(),nodeReserve:fe,perTrip:fe,gatherSec:fe,startAmount:ye().nonnegative()}),worker:be({startCount:ye().int().nonnegative(),maxCount:ye().int().positive(),cost:fe,prodTime:fe,gatherRadius:fe,speed:fe,idleOnDepleted:hn()}),noOreHint:be({enabled:hn(),deployText:ol().min(1),depletedText:ol().min(1),durationMs:fe})}).parse(nt);const r=be({hp:fe,attack:ye().nonnegative(),atkInterval:fe,range:ye().nonnegative(),speed:fe,cost:fe});jt(r).parse(ii),be({combatThresholds:jt(fe),multiplier:jt(fe),overflowSharesToSquad:hn()}).parse(mr),be({combatThresholds:jt(fe),multiplier:jt(fe),shareFromAnyAllyKill:hn(),shareRatio:fe,persistOnDeath:hn(),skillUnlocks:jt(jt(I_()))}).parse(Fn),be({hp:fe,shield:ye().nonnegative(),attack:fe,atkInterval:fe,range:fe,speed:fe}).parse(un),be({projectile:be({poolSize:ye().int().positive(),speed:fe,lifetimeSec:fe,flightHeight:fe}),squad:be({tetherRadius:fe,tetherBreakDist:fe,regroupPushStrength:fe}),revive:be({cost:ye().nonnegative(),timeByCcLevel:jt(fe)})}).parse(zt);const e=D_("type",[be({type:Ss("chainLightning"),damage:fe,chains:ye().int().positive()}),be({type:Ss("lightningChain"),damage:fe,chains:ye().int().positive(),decay:ye().min(0).max(1)}),be({type:Ss("aoe"),radius:fe,damage:fe}),be({type:Ss("ricochet"),chains:ye().int().positive(),damage:fe}),be({type:Ss("slow"),duration:fe})]),t=be({type:Ss("hot"),hpPerSec:fe,afterCombatSec:fe}),i=be({onAttack:e.optional(),aura:t.optional()}).nullable();jt(jt(i)).parse(Ia);for(const[f,_]of Object.entries(Ia))for(const[y,x]of Object.entries(_))if(x!==null&&!x.onAttack&&!x.aura)throw new Error(`配置错误：CORE_EFFECTS.${f}.${y} 既无 onAttack 也无 aura`);be({cooldownSec:fe,damage:fe,radius:fe,oreCost:ye().nonnegative()}).parse(pn);const s=be({id:ti(["wreckZone","relicZone"]),count:ye().int().positive(),pool:be({rifleBarracks:ye().nonnegative(),flamerBarracks:ye().nonnegative(),mechFactory:ye().nonnegative(),turret:ye().nonnegative()}),spots:di(be({x:ye(),z:ye()}))});di(s).parse(da);for(const f of da){if(f.spots.length!==f.count)throw new Error(`配置错误：WRECK_REGIONS ${f.id} spots 数量(${f.spots.length}) != count(${f.count})`);if(Object.values(f.pool).reduce((y,x)=>y+x,0)<=0)throw new Error(`配置错误：WRECK_REGIONS ${f.id} pool 总权重必须 > 0`)}for(const f of da)for(const _ of f.spots)if(_.guards){if(_.guards.count!==1&&_.guards.count!==2)throw new Error(`配置错误：${f.id} spot guards.count 应为 1 或 2`);if(!["rifle","flamer","mech"].includes(_.guards.unitType))throw new Error(`配置错误：${f.id} spot guards.unitType 无效`)}const a=be({probability:ye().min(0).max(1),repairCost:ye().nonnegative(),repairSec:fe});be({condition:be({worn:a,damaged:a,intact:a}),damagedUpgradeChance:ye().min(0).max(1),advancedVehicles:di(ti(["rifleBarracks","flamerBarracks","mechFactory","turret"])).min(1),harass:be({spawnDist:fe,byCondition:be({worn:be({units:jt(ti(["rifle","flamer","mech"]),ye().int().nonnegative())}),damaged:be({units:jt(ti(["rifle","flamer","mech"]),ye().int().nonnegative())}),intact:be({units:jt(ti(["rifle","flamer","mech"]),ye().int().nonnegative())})})})}).parse(Gt);const o=Gt.condition.worn.probability+Gt.condition.damaged.probability+Gt.condition.intact.probability;if(Math.abs(o-1)>1e-6)throw new Error(`配置错误：WRECKS.condition 概率之和(${o}) != 1`);const l=be({time:ye().nonnegative(),type:ti(["main","harass"]),units:be({rifle:ye().int().nonnegative().optional(),flamer:ye().int().nonnegative().optional(),mech:ye().int().nonnegative().optional()}),edge:ti(["north","south","east","west","random"]),miniBoss:hn().optional()});di(l).min(1).parse(Ei);for(let f=1;f<Ei.length;f++)if(Ei[f].time<=Ei[f-1].time)throw new Error(`配置错误：WAVES[${f}].time(${Ei[f].time}) 应 > WAVES[${f-1}].time(${Ei[f-1].time})`);for(const f of Ei)if((f.units.rifle??0)+(f.units.flamer??0)+(f.units.mech??0)===0&&!f.miniBoss)throw new Error(`配置错误：WAVES ${f.time}s 波既无单位也无 miniBoss`);be({hp:fe,attack:fe,atkInterval:fe,range:fe}).parse(U_);const c=be({x:ye(),z:ye()});be({start:c,oreNodes:di(c.extend({reserve:ye().positive().optional()})).min(1),relicSites:di(c.extend({id:ti(["northwest","southeast","southwest"])})).length(3),enemyBase:c}).parse(xn);const h=xn.relicSites.map(f=>f.id);if(new Set(h).size!==h.length)throw new Error("配置错误：MAP_LAYOUT.relicSites 遗迹 id 重复");const d=be({id:ti(["northwest","southeast","southwest"]),scavengers:di(be({unitType:ti(["rifle","flamer","mech"]),count:ye().int().positive()})).min(1),miniBoss:hn().optional(),reward:be({type:ti(["coreRandom","oreCrate"]),oreAmount:ye().int().positive().optional()}),extraOreCrate:ye().int().positive().optional()});di(d).length(3).parse(lr);const u=lr.map(f=>f.id);if(new Set(u).size!==u.length)throw new Error("配置错误：RELIC_SITES 遗迹 id 重复");for(const f of lr)if(f.reward.type==="oreCrate"&&!f.reward.oreAmount)throw new Error(`配置错误：遗迹 ${f.id} reward.type=oreCrate 但缺 oreAmount`);for(const f of lr)for(const _ of f.scavengers)if(_.unitType==="mech")throw new Error(`配置错误：遗迹 ${f.id} 散兵含 mech（spec §3.4 只用 rifle/flamer）`);if(be({alertRange:ye().positive(),leashRange:ye().positive()}).parse(Gi),Gi.leashRange<=Gi.alertRange)throw new Error("配置错误：RELIC_GUARD.leashRange 应 > alertRange");const p=be({type:ti(["commandCenter","rifleBarracks","flamerBarracks","mechFactory","turret"]),level:ye().int().positive(),offset:be({x:ye(),z:ye()})});be({pos:be({x:ye(),z:ye()}),buildings:di(p).length(8),rewards:be({turret:fe,rifleBarracks:fe,flamerBarracks:fe,mechFactory:fe,commandCenter:fe}),enemyIncomePerSec:fe}).parse(Is);const g=Is.buildings.map(f=>f.type),v=f=>g.filter(_=>_===f).length;if(v("commandCenter")!==1)throw new Error("配置错误：ENEMY_BASE 应恰好 1 指挥中心");if(v("turret")!==4)throw new Error("配置错误：ENEMY_BASE 应恰好 4 炮塔");for(const f of Is.buildings)if(f.level<1)throw new Error(`配置错误：ENEMY_BASE 建筑 ${f.type} level 应为正`);const m=be({id:ti(["large","smallA","smallB"]),buildings:di(p).min(1),rewards:be({turret:fe,rifleBarracks:fe,flamerBarracks:fe,mechFactory:fe,commandCenter:fe}),enemyIncomePerSec:fe,barracksSlots:ye().int().nonnegative()});di(m).length(3).parse(ll);for(const f of ll)if(f.buildings.filter(y=>y.type==="commandCenter").length!==1)throw new Error(`配置错误：ENEMY_BASES[${f.id}] 应恰好 1 指挥中心`)}const At={channelSec:4,arriveOffsetZ:5,squadRingRadius:2,startRingRadius:4,startRingWidth:.06,arriveRingRadius:1.5,arriveRingWidth:.06,expandDuration:.8,pulseDuration:4,ringColor:3394815},Dh={masterSeed:0,mapHalfSize:90,minDistFromStart:12,minDistBetweenAny:5,ore:{largeClusters:3,perLargeCluster:4,smallClusters:6,perSmallCluster:2,scattered:15,largeClusterRadius:10,smallClusterRadius:6,minDistBetweenNodes:6},relics:{largeCount:2,smallCount:4,smallRelicCoreCount:2,minDistFromStart:35,minDistBetween:25},scatteredChests:{count:8,orePerChest:150,minDistFromStart:20,minDistBetween:10},scavengers:{campCount:5,perCamp:3},enemyBases:{largeCount:1,smallCount:2,minDistFromStart:40,minDistBetween:35},wrecks:{count:6,dangerZoneRatio:.5,dangerZoneRadius:12,minDistFromStart:25,minDistBetween:12,guardChance:.6,guardCount:1,anchorLevel:{largeRelic:4,smallRelic:3,camp:2}}},bs={unit:{rifle:{bodyHeight:1.6,bodyRadius:.35,headRadius:.3},flamer:{bodyHeight:1.7,bodyRadius:.38,headRadius:.32},mech:{bodyHeight:2.8,bodySize:1.6}},hero:{bodyHeight:2.4,bodyRadius:.5,headRadius:.4},miniBoss:{bodyHeight:4.5,bodySize:2.4},module:{vehicle:{length:3.8,width:1.8,height:1.6},building:{commandCenter:{body:4.5,roof:1.5},rifleBarracks:{body:3,roof:.4},flamerBarracks:{body:3,chimney:1.5},mechFactory:{body:3.2,roof:1.2},turret:{base:1,ball:1,barrel:2.5}}}};class en{static instance=new en;matCache=new Map;standardMaterial(e,t){const i=t?.emissive??0,n=t?.emissiveIntensity??(i?.6:0),s=t?.side??Zi,a=`${e}-${i}-${n}-${s}`;let o=this.matCache.get(a);return o||(o=new ni({color:e,roughness:t?.metal?.4:.75,metalness:t?.metal?.6:0,emissive:i,emissiveIntensity:n,side:s}),this.matCache.set(a,o)),o}isCachedMaterial(e){for(const t of this.matCache.values())if(t===e)return!0;return!1}teamAccentMaterial(e){const t=e==="player"?4491519:16729156;return this.standardMaterial(t,{emissive:t,emissiveIntensity:.3})}box(e,t,i,n,s){const a=new Ji(e,t,i),o=this.standardMaterial(n,s);return new K(a,o)}wheel(e){const t=new st(e,e,e*.5,8);t.rotateZ(Math.PI/2);const i=this.standardMaterial(2236962,{metal:!0});return new K(t,i)}BUILDING_BODY_COLORS={commandCenter:16314584,rifleBarracks:14733472,flamerBarracks:14733472,mechFactory:12105920,turret:8421512};moduleBuilding(e,t,i){const n=new pt,s=this.standardMaterial(this.BUILDING_BODY_COLORS[e]),a=this.teamAccentMaterial(i),l=(bs.module.building[e]??{body:3}).body??3,c=this.box(l,l,l,this.BUILDING_BODY_COLORS[e]);if(c.position.y=l/2,n.add(c),e==="commandCenter"){const h=new Ct(2.8,16,8,0,Math.PI*2,0,Math.PI/2),d=new K(h,this.standardMaterial(16314584));d.position.y=l+.2,n.add(d);const u=new pt;u.name="turretHead",u.position.y=l+.2+2.8,n.add(u);const p=new st(.2,.25,2,8);p.rotateX(Math.PI/2);const g=new K(p,this.standardMaterial(5263448,{metal:!0}));g.position.set(0,.3,1),u.add(g);const v=new ct;if(v.name="muzzle",v.position.set(0,.3,2),u.add(v),t>=2){const _=g.clone();_.position.x=.35,u.add(_)}const m=this.box(1.5,2,.5,14532736);m.position.set(0,1,l/2),n.add(m);const f=this.box(.1,1.5,.6,i==="player"?4491519:16729156,{emissive:i==="player"?4491519:16729156,emissiveIntensity:.2});if(f.position.set(0,l+2.5,0),n.add(f),t>=2)for(const[_,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const x=new K(new st(.4,.5,2,6),s);x.position.set(_*l*.4,l+1,y*l*.4),n.add(x)}if(t>=3){const _=new K(new st(.05,.05,1.5,4),s);_.position.y=l+3.5,n.add(_)}}else if(e==="rifleBarracks"){const h=this.box(l+.4,.4,l+.4,13154440);h.position.y=l+.2,n.add(h);const d=this.box(.6,.6,.1,i==="player"?4491519:16729156);d.position.set(-.8,l*.5,l/2),n.add(d);const u=d.clone();u.position.x=.8,n.add(u);const p=d.clone();if(p.position.x=0,n.add(p),t>=2){const g=this.box(.8,1,.8,13154440);g.position.set(l*.4,l+.7,0),n.add(g)}if(t>=3){const g=this.box(1.5,2,1.5,14207128);g.position.set(l*.6,1,0),n.add(g)}}else if(e==="flamerBarracks"){const h=this.box(l+.4,1,l+.4,12097624);h.rotation.z=.15,h.position.y=l+.5,n.add(h);const d=new K(new st(.4,.6,1.5,6),this.standardMaterial(5916728,{emissive:16737843,emissiveIntensity:.4}));d.position.set(.5,l+1,.5),n.add(d);const u=this.box(.4,.6,.4,i==="player"?4491519:16729156,{emissive:i==="player"?4491519:16729156,emissiveIntensity:.2});if(u.position.set(-l*.4,.3,l/2),n.add(u),t>=2){const p=d.clone();p.position.x=-.5,n.add(p)}if(t>=3){const p=new K(d.geometry,this.standardMaterial(5916728,{emissive:16737843,emissiveIntensity:.8}));p.position.set(0,l+1.2,-.5),n.add(p)}}else if(e==="mechFactory"){const h=this.box((l+.4)*.6,.3,l+.4,11053232);h.rotation.z=-.4,h.position.set(-.8,l+.8,0),n.add(h);const d=h.clone();d.rotation.z=.4,d.position.x=.8,n.add(d);const u=this.box(2,2.5,.3,8939144);u.position.set(0,1.25,l/2),n.add(u);const p=this.box(.5,.3,.05,i==="player"?4491519:16729156,{emissive:i==="player"?4491519:16729156,emissiveIntensity:.2});if(p.position.set(0,2,l/2+.2),n.add(p),t>=2){const g=new K(new st(.1,.1,1.5,6),s);g.position.set(l*.4,l+.5,0),g.rotation.z=.5,n.add(g)}if(t>=3){const g=new K(new st(.05,.05,1.5,4),s);g.position.y=l+1.5,n.add(g);const v=new K(new Ct(.15,6,6),a);v.position.y=l+2.3,n.add(v)}}else if(e==="turret"){const h=new st(1.5,1.8,1,12),d=new K(h,this.standardMaterial(6316136,{metal:!0}));d.position.y=.5,n.add(d);const u=new st(1.85,1.85,.2,12),p=new K(u,a);p.position.y=.5,n.add(p);const g=new pt;g.name="turretHead",n.add(g);const v=new Ct(1,12,8),m=new K(v,this.standardMaterial(8421512,{metal:!0}));m.position.y=1.8,g.add(m);const f=new st(.2,.25,2.5,8);f.rotateX(Math.PI/2);const _=new K(f,this.standardMaterial(5263448,{metal:!0}));_.position.set(0,1.8,1.25),g.add(_);const y=new ct;if(y.name="muzzle",y.position.set(0,1.8,2.5),g.add(y),t>=2){const x=_.clone();x.position.x=.4,g.add(x)}if(t>=3){const x=new K(new st(.15,.2,1,6),this.standardMaterial(5263448,{metal:!0}));x.geometry.rotateX(Math.PI/2),x.position.set(0,1.8,3),g.add(x)}}return n}moduleVehicle(e,t){const i=new pt,n=bs.module.vehicle,s=this.box(n.width,n.height,n.length,this.BUILDING_BODY_COLORS[e]);s.position.y=n.height/2+.4,i.add(s);const a=[[-1,-1],[1,-1],[-1,1],[1,1]];for(const[h,d]of a){const u=this.wheel(.4);u.position.set(h*n.width*.5,.2,d*n.length*.35),i.add(u)}const o=this.box(.05,.3,n.length*.8,t==="player"?4491519:16729156,{emissive:t==="player"?4491519:16729156,emissiveIntensity:.2});o.position.set(n.width/2+.03,n.height*.7+.4,0),i.add(o);const l=n.height/2+.4,c=this.box(n.width,n.height*.8,.75,2241348,{metal:!0});if(c.position.set(0,l,-3.8*.5-.375),i.add(c),e==="commandCenter"){const h=new Ct(1.2,12,6,0,Math.PI*2,0,Math.PI/2),d=new K(h,this.standardMaterial(16314584));d.position.y=n.height+.4,i.add(d);const u=new pt;u.name="turretHead",u.position.y=n.height+.4+1,i.add(u);const p=new st(.15,.2,1.6,8);p.rotateX(Math.PI/2);const g=new K(p,this.standardMaterial(5263448,{metal:!0}));g.position.set(0,0,.8),u.add(g);const v=new ct;v.name="muzzle",v.position.set(0,0,1.6),u.add(v)}else if(e==="rifleBarracks"){const h=this.box(.8,.8,.8,13154440);h.position.y=n.height+.8,i.add(h)}else if(e==="flamerBarracks"){const h=new K(new st(.3,.4,1,6),this.standardMaterial(5916728));h.position.y=n.height+.9,i.add(h)}else if(e==="mechFactory"){const h=this.box(n.width*.8,.2,n.length*.6,11053232);h.position.y=n.height+.5,h.rotation.x=.2,i.add(h)}return i}UNIT_BODY_COLORS={rifle:15788232,flamer:15259808,mech:13158608};unit(e,t,i){const n=new pt,s=this.teamAccentMaterial(i),a=bs.unit[e]??bs.unit.rifle;if(e==="mech"){const o=a,l=this.box(o.bodySize,o.bodyHeight*.6,o.bodySize*.8,this.UNIT_BODY_COLORS.mech,{metal:!0});l.position.y=o.bodyHeight*.5,n.add(l);const c=this.box(.6,.5,.6,11053232,{metal:!0});c.position.y=o.bodyHeight*.85,n.add(c);for(const p of[-1,1]){const g=this.box(.4,o.bodyHeight*.4,.5,8947848,{metal:!0});g.position.set(p*o.bodySize*.3,o.bodyHeight*.2,0),n.add(g)}for(const p of[-1,1]){const g=this.box(.5,.4,.5,i==="player"?4491519:16729156,{emissive:i==="player"?4491519:16729156,emissiveIntensity:.2});g.position.set(p*o.bodySize*.6,o.bodyHeight*.7,0),n.add(g)}const h=new pr(3,.15,8,24);h.rotateX(Math.PI/2);const d=this.standardMaterial(6316136,{metal:!0}),u=new K(h,d);if(u.name="mechBlade",u.position.y=o.bodyHeight*.3,u.visible=!1,n.add(u),t>=4){const p=new K(new Ji(o.bodySize*.6,.3,o.bodySize*.4),s);p.position.y=o.bodyHeight*.6,n.add(p)}}else{const o=a,l=this.standardMaterial(this.UNIT_BODY_COLORS[e]),c=new Sr(o.bodyRadius,o.bodyHeight*.5,4,8),h=new K(c,l);h.position.y=o.bodyHeight*.5,n.add(h);const d=new K(new Ct(o.headRadius,8,6),l);d.position.y=o.bodyHeight+o.headRadius,n.add(d);const u=new K(new Ct(o.headRadius*1.05,8,6,0,Math.PI*2,0,Math.PI*.4),s);if(u.position.y=o.bodyHeight+o.headRadius,n.add(u),e==="rifle"){const p=new st(.06,.06,1.2,6);p.rotateX(Math.PI/2);const g=new K(p,this.standardMaterial(4473924,{metal:!0}));g.position.set(o.bodyRadius+.1,o.bodyHeight*.6,-.6),n.add(g);const v=this.box(.2,.3,.15,5913114);v.position.set(o.bodyRadius,o.bodyHeight*.5,-.1),n.add(v);const m=new ct;if(m.name="muzzle",m.position.set(o.bodyRadius+.1,o.bodyHeight*.6,-1.2),n.add(m),t>=2){const f=new K(new st(.05,.05,.4,6),this.standardMaterial(4473924,{metal:!0}));f.geometry.rotateX(Math.PI/2),f.position.set(o.bodyRadius+.1,o.bodyHeight*.6,-1.4),n.add(f)}}else{const p=new st(.25,.35,.8,8);p.rotateX(Math.PI/2);const g=new K(p,this.standardMaterial(8939059,{metal:!0}));g.position.set(o.bodyRadius+.1,o.bodyHeight*.6,-.4),n.add(g);const v=new st(.3,.3,.8,8);v.rotateZ(Math.PI/2);const m=new K(v,this.standardMaterial(5592405,{metal:!0}));m.position.set(-o.bodyRadius-.2,o.bodyHeight*.6,.2),n.add(m);const f=new ct;if(f.name="muzzle",f.position.set(o.bodyRadius+.1,o.bodyHeight*.6,-.8),n.add(f),t>=4){const _=m.clone();_.position.y=o.bodyHeight*.9,n.add(_)}}}return n}hero(e,t){const i=new pt,n=16314576,s=bs.hero,a=new Sr(s.bodyRadius,s.bodyHeight*.5,6,10),o=new K(a,this.standardMaterial(n));o.position.y=s.bodyHeight*.5,i.add(o);const l=new K(new Ct(s.headRadius,12,8),this.standardMaterial(n));l.position.y=s.bodyHeight+s.headRadius,i.add(l);const c=new qn(s.headRadius*.9,s.headRadius*1.2,8),h=new K(c,this.standardMaterial(16763955,{metal:!0,emissive:16763955,emissiveIntensity:.2}));h.position.y=s.bodyHeight+s.headRadius*2,i.add(h);const d=new Gs(s.bodyRadius*2,s.bodyHeight*.8),u=new K(d,this.standardMaterial(t==="player"?4491519:16729156,{emissive:t==="player"?2245802:11149858,emissiveIntensity:.2,side:xi}));u.position.set(0,s.bodyHeight*.5,s.bodyRadius),i.add(u);const p=new st(.06,.06,1.8,6),g=new K(p,this.standardMaterial(14527027,{metal:!0}));g.position.set(s.bodyRadius+.3,s.bodyHeight*.7,-.3),i.add(g);const v=new K(new Ct(.25,10,8),this.standardMaterial(16763955,{emissive:16763955,emissiveIntensity:.8}));v.position.set(s.bodyRadius+.3,s.bodyHeight+.4,-.3),i.add(v);const m=new ct;if(m.name="muzzle",m.position.copy(v.position),i.add(m),e>=4)for(const f of[-1,1]){const _=this.box(.4,.3,.4,16763955,{metal:!0});_.position.set(f*s.bodyRadius*1.2,s.bodyHeight*.8,0),i.add(_)}if(e>=7){const f=new pr(s.headRadius*1.5,.05,8,16);f.rotateX(Math.PI/2);const _=new K(f,this.standardMaterial(16763955,{emissive:16763955,emissiveIntensity:.6}));_.position.y=s.bodyHeight+s.headRadius*3,i.add(_)}return i}miniBoss(e){const t=new pt,i=e==="enemy"?4860458:3811914,n=e==="enemy"?16729156:8930508,s=bs.miniBoss,a=this.box(s.bodySize,s.bodyHeight*.6,s.bodySize*.8,i,{metal:!0});a.position.y=s.bodyHeight*.5,t.add(a);const o=this.box(.9,.7,.9,i,{metal:!0});o.position.y=s.bodyHeight*.85,t.add(o);for(const u of[-1,1]){const p=new qn(.3,.6,6),g=new K(p,this.standardMaterial(n,{emissive:n,emissiveIntensity:.3}));g.position.set(u*.3,s.bodyHeight*1.1,0),g.rotation.z=u*.4,t.add(g)}for(const u of[-1,1]){const p=this.box(.6,.5,.5,i,{metal:!0});p.position.set(u*s.bodySize*.7,s.bodyHeight*.7,0),t.add(p)}for(const u of[-1,1]){const p=new st(.3,.4,2,8);p.rotateX(Math.PI/2);const g=new K(p,this.standardMaterial(4473924,{metal:!0,emissive:n,emissiveIntensity:.2}));g.position.set(u*s.bodySize*.6,s.bodyHeight*.5,-2.4*.5),t.add(g)}const l=new ct;l.name="muzzle",l.position.set(0,s.bodyHeight*.5,-2.4),t.add(l);for(const u of[-1,1]){const p=this.box(.6,s.bodyHeight*.4,.7,i,{metal:!0});p.position.set(u*s.bodySize*.3,s.bodyHeight*.2,0),t.add(p)}const c=new K(new Ct(.4,12,8),this.standardMaterial(n,{emissive:n,emissiveIntensity:.6}));c.name="bossCore",c.position.y=s.bodyHeight*.6,t.add(c);const h=new bn(2.5,16);h.rotateX(-Math.PI/2);const d=new K(h,new bt({color:0,transparent:!0,opacity:.4}));return d.position.y=.05,t.add(d),t}WRECK_COLORS={worn:9075290,damaged:4864554,intact:13154440};wreck(e,t){const i=new pt,n=this.moduleVehicle(e,"player"),s=this.WRECK_COLORS[t]??this.WRECK_COLORS.worn;if(n.traverse(a=>{if(a instanceof K&&a.material instanceof ni){const o=a.material.clone();o.color.setHex(s),t==="damaged"?(o.emissive.setHex(2228224),o.emissiveIntensity=.3):t==="intact"&&(o.emissive.setHex(1118464),o.emissiveIntensity=.2),a.material=o}}),i.add(n),t==="worn"){i.rotation.z=.08;const a=new K(new st(.15,.15,.2,6),this.standardMaterial(3815994,{metal:!0}));a.geometry.rotateZ(Math.PI/2),a.position.set(-1.2,.3,.7),i.add(a)}else if(t==="damaged"){i.rotation.z=.25;for(const[h,d]of[[-1.2,-.7],[1.2,.7]]){const u=new K(new st(.15,.15,.2,6),this.standardMaterial(3815994,{metal:!0}));u.geometry.rotateZ(Math.PI/2),u.position.set(h,.3,d),i.add(u)}const a=new K(new st(.4,.6,.3,8),this.standardMaterial(2763306));a.position.set(0,1.8,0),i.add(a);const o=new K(new st(.4,.4,.3,8),new bt({color:657930}));o.geometry.rotateX(Math.PI/2),o.position.set(.5,1,.8),i.add(o);const l=new Jn({color:3355443,transparent:!0,opacity:.5}),c=new Sn(l);c.name="wreckSmoke",c.position.set(0,2.5,0),c.scale.setScalar(1),i.add(c)}else{const a=new pr(2,.05,8,24);a.rotateX(Math.PI/2);const o=new K(a,new bt({color:16763972,transparent:!0,opacity:.4}));o.name="wreckGlow",o.position.y=.1,i.add(o)}for(let a=0;a<4;a++){const o=a/4*Math.PI*2,l=2,c=new K(new Ct(.3,6,4),new bt({color:4872746,transparent:!0,opacity:.7}));c.position.set(Math.cos(o)*l,.1,Math.sin(o)*l),c.scale.y=.3,i.add(c)}return i}}const k_="#FFD700",B_="#000000",zn=48,aa=.7,Uh=1.4,cl=.7,F_=.05;function hl(){return zn*cl*(1+F_)}function H_(r){return{w:Math.ceil(r*hl()),h:zn}}function G_(r,e,t,i,n,s){r.beginPath();for(let a=0;a<10;a++){const o=Math.PI/5*a-Math.PI/2,l=a%2===0?i:i*.4,c=e+Math.cos(o)*l,h=t+Math.sin(o)*l;a===0?r.moveTo(c,h):r.lineTo(c,h)}r.closePath(),r.fillStyle=n,r.fill(),r.strokeStyle=s,r.lineWidth=1.5,r.stroke()}class wi{static textures=new Map;static bigStarTexture=null;static initialized=!1;static init(){if(this.initialized)return;const e=Math.min(2,typeof window<"u"?window.devicePixelRatio:1);for(let t=1;t<=5;t++)this.textures.set(t,this.renderStars(t,e,!1));this.bigStarTexture=this.renderStars(1,e,!0),this.initialized=!0}static renderStars(e,t,i){const{w:n,h:s}=i?{w:zn,h:zn}:H_(e),a=document.createElement("canvas");a.width=n*t,a.height=s*t;try{const l=a.getContext("2d");if(l){l.scale(t,t);const c=i?zn/2*cl*Uh:zn/2*cl;if(i){const d=l.createRadialGradient(n/2,s/2,c*.5,n/2,s/2,c*1.5);d.addColorStop(0,"rgba(255,215,0,0.5)"),d.addColorStop(1,"rgba(255,215,0,0)"),l.fillStyle=d,l.fillRect(0,0,n,s)}const h=hl();for(let d=0;d<e;d++){const u=i?n/2:(d+.5)*h;G_(l,u,s/2,c,k_,B_)}}}catch{}const o=new Rr(a);return o.colorSpace=yt,o}static create(){this.initialized||this.init();const e=this.textures.get(1),t=new Jn({map:e,transparent:!0,depthTest:!1}),i=new Sn(t);return i.scale.set(aa,aa,1),i.renderOrder=999,i.visible=!1,i.layers.set(Pr),i}static setLevel(e,t){this.initialized||this.init();const i=Math.max(1,Math.min(7,t));if(i===1){e.visible=!1;return}e.visible=!0;const n=e.material,s=aa;if(i===7){n.map=this.bigStarTexture;const a=aa*Uh;e.scale.set(a,a,1)}else{const a=i-1;n.map=this.textures.get(a);const o=s*(a*hl()/zn);e.scale.set(o,s,1)}n.needsUpdate=!0}static dispose(e){e.material.dispose()}}const V_={commandCenter:"指挥中心",rifleBarracks:"步枪兵营",flamerBarracks:"喷火兵营",mechFactory:"机甲工厂",turret:"炮塔"};class Ri extends sn{type;level;form;coreId;coreEffect;oldMesh=null;pendingDeploy=!1;constructor(e,t,i,n=0,s=0){super(i,n,s),this.type=e,this.level=t,this.form="building",this.hp=this.maxHp,this.mesh=this.buildMesh()}get maxHp(){return Je[this.type].levels[this.level-1].hp}upgrade(){const e=Je[this.type];if(this.level>=e.maxLevel)throw new Error(`${this.type} 已满级 ${e.maxLevel}`);this.level++,this.hp=this.maxHp,this.starLabel&&wi.setLevel(this.starLabel,this.level)}toVehicleForm(){this.form!=="vehicle"&&(this.oldMesh=this.mesh,this.form="vehicle",this.mesh=this.buildMesh(),this.mesh.position.copy(this.oldMesh.position),this.reattachCoreEffect())}toBuildingForm(){this.form!=="building"&&(this.oldMesh=this.mesh,this.form="building",this.mesh=this.buildMesh(),this.mesh.position.copy(this.oldMesh.position),this.facing=void 0,this.reattachCoreEffect())}reattachCoreEffect(){if(!this.coreEffect)return;const e=this.coreEffect.mesh;e.parent&&e.parent.remove(e),this.mesh.add(e)}consumeOldMesh(){const e=this.oldMesh;return this.oldMesh=null,e}buildMesh(){const e=en.instance;this.mesh=this.form==="vehicle"?e.moduleVehicle(this.type,this.team):e.moduleBuilding(this.type,this.level,this.team),this.mesh.position.set(this.pos.x,0,this.pos.z);const t=this.type==="commandCenter",i=this.form==="vehicle"?2.5:t?6.5:this.type==="turret"?2.8:this.type==="rifleBarracks"?4:(this.type==="flamerBarracks",5),n=i+.7,s=i+1.4;return this.nameLabel=tn(this.nameText(),s),this.coordLabel=nn(n,1,this.coordText()),this.mesh.add(this.nameLabel),this.mesh.add(this.coordLabel),this.starLabel=wi.create(),this.starLabel.position.y=s+.9,wi.setLevel(this.starLabel,this.level),this.mesh.add(this.starLabel),this.healthBar=Qn.create(this.team,this.isBoss,!0),this.healthBar.position.y=i,this.mesh.add(this.healthBar),this.mesh}nameText(){const e=V_[this.type],t=this.form==="vehicle"?"·车":"";return`${e}${t}`}update(e){}}class W_{computeTargets(e,t,i){const n=new Map,s={};for(const a of t){const o=a_[a.type];if(!o)continue;const l=s[a.type]??0,c=o[Math.min(l,o.length-1)];n.set(a.id,this.slotToWorld(e.pos,c,i)),s[a.type]=l+1}return n}slotToWorld(e,t,i){const n=new w(Math.sin(i),0,-Math.cos(i)),a=new w(Math.cos(i),0,Math.sin(i)).clone().negate(),o=n.multiplyScalar(Math.cos(t.angle)*t.radius).add(a.multiplyScalar(Math.sin(t.angle)*t.radius));return e.clone().add(o)}}class X_{moveToward(e,t,i,n,s=!0){const a=new w().subVectors(t,e.pos);a.y=0;const o=a.length();if(o<.1){e.pos.copy(t),e.pos.y=0;return}e.facing={x:a.x/o,z:a.z/o};const l=s?Math.min(3,1+o/8):1,c=i*l,h=Math.min(c,o/n),d=Math.min(o,h*n);e.pos.add(a.normalize().multiplyScalar(d)),e.pos.y=0}applySeparation(e,t,i,n,s=[]){for(let a=0;a<e.length;a++)for(let o=a+1;o<e.length;o++){const l=e[a],c=e[o],h=new w().subVectors(l.pos,c.pos);h.y=0;const d=h.length();if(d>0&&d<t){const u=h.normalize().multiplyScalar((t-d)*i*n);l.pos.add(u),c.pos.sub(u)}}for(const a of e)for(const o of s){const l=new w().subVectors(a.pos,o.pos);l.y=0;const c=l.length();if(c>0&&c<t){const h=l.normalize().multiplyScalar((t-c)*i*n);a.pos.add(h)}}}}class q_{phase="caravan";migrationProgress=0;get deploySec(){return kn.migration.deployGuideSec}get packUpSec(){return kn.migration.packUpGuideSec}requestDeploy(){this.phase==="caravan"&&(this.phase="deploying",this.migrationProgress=0)}requestPackUp(){this.phase==="base"&&(this.phase="packing",this.migrationProgress=0)}update(e){this.phase==="deploying"?(this.migrationProgress+=e/this.deploySec,this.migrationProgress>=1&&(this.phase="base",this.migrationProgress=1)):this.phase==="packing"&&(this.migrationProgress+=e/this.packUpSec,this.migrationProgress>=1&&(this.phase="caravan",this.migrationProgress=1))}isTransitioning(){return this.phase==="deploying"||this.phase==="packing"}}class $_{constructor(e,t){this.uiLayer=t,this.el=document.createElement("div"),this.el.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:10;",this.base=document.createElement("div"),this.base.style.cssText=`
      position:absolute;width:120px;height:120px;border-radius:50%;
      border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);
      display:none;transform:translate(-50%,-50%);
    `,this.el.appendChild(this.base),this.stick=document.createElement("div"),this.stick.style.cssText=`
      position:absolute;width:60px;height:60px;border-radius:50%;
      background:rgba(255,255,255,0.5);display:none;transform:translate(-50%,-50%);
    `,this.el.appendChild(this.stick),e.onJoystickStart((i,n)=>this.show(i,n)),e.onJoystick((i,n)=>this.updateStick(i*this.maxRadius,n*this.maxRadius)),e.onJoystickEnd(()=>this.hide())}el;base;stick;maxRadius=60;show(e,t){const i=this.uiLayer.toLocal(e,t);this.base.style.left=`${i.x}px`,this.base.style.top=`${i.y}px`,this.base.style.display="block",this.stick.style.left=`${i.x}px`,this.stick.style.top=`${i.y}px`,this.stick.style.display="block"}hide(){this.base.style.display="none",this.stick.style.display="none"}updateStick(e,t){const i=parseFloat(this.base.style.left),n=parseFloat(this.base.style.top);this.stick.style.left=`${i+e}px`,this.stick.style.top=`${n+t}px`}}class Y_{el;btn;constructor(e){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;left:50%;bottom:30px;transform:translateX(-50%);z-index:10;",this.btn=document.createElement("button"),this.btn.style.cssText=`
      padding:14px 24px;font-size:16px;border-radius:12px;
      border:2px solid rgba(255,255,255,0.45);
      background:#ff6633;color:#fff;font-family:sans-serif;min-width:120px;
      box-shadow:0 0 8px rgba(255,102,51,0.5);
    `,this.btn.textContent="展开基地",this.btn.addEventListener("click",e),this.el.appendChild(this.btn)}setMode(e){this.btn.textContent=e==="caravan"?"展开基地":"收起基地",this.btn.style.background="#ff6633"}setLoading(e,t=0){e?(this.btn.disabled=!0,this.btn.textContent=`${Math.floor(t*100)}%`):this.btn.disabled=!1}}class j_{balance;constructor(e){this.balance=e}earn(e){this.balance+=e}spend(e){return this.balance<e?!1:(this.balance-=e,!0)}canAfford(e){return this.balance>=e}}class Z_ extends sn{reserve;perTrip;isDisposed=!1;maxReserve=nt.ore.nodeReserve;crystals=[];baseMesh=null;constructor(e,t){super("player",e,t),this.reserve=nt.ore.nodeReserve,this.perTrip=nt.ore.perTrip,this.hp=1/0,this.mesh=this.buildMesh()}get maxHp(){return 1/0}take(){if(this.reserve<=0)return 0;const e=Math.min(this.perTrip,this.reserve);return this.reserve-=e,this.updateCrystalsVisibility(),e}get depleted(){return this.reserve<=0}updateCrystalsVisibility(){const e=this.maxReserve>0?this.reserve/this.maxReserve:0,t=Math.ceil(e*5);for(let i=0;i<this.crystals.length;i++)this.crystals[i].visible=i<t}get crystalVisibleCount(){return this.crystals.filter(e=>e.visible).length}disposeMesh(e){this.isDisposed||(e.remove(this.mesh),this.mesh.traverse(t=>{if(t instanceof K){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(n=>n.dispose()):i.dispose()}}),Pl(this.nameLabel,this.coordLabel),this.isDisposed=!0)}buildMesh(){const e=new pt,t=58879,i=()=>new ni({color:t,emissive:t,emissiveIntensity:.45,roughness:.3}),n=new ni({color:3816004,roughness:.9}),s=new K(new qn(1.2,2,4),i());s.position.set(0,2,0),e.add(s),this.crystals.push(s);const a=[[1.4,.5,1.4],[-1.4,.5,1.4],[1.4,.5,-1.4],[-1.4,.5,-1.4]];for(const[o,l,c]of a){const h=new K(new qn(.6,1,4),i());h.position.set(o,l,c),e.add(h),this.crystals.push(h)}return this.baseMesh=new K(new st(1.8,1.8,.4,6),n),this.baseMesh.position.set(0,.2,0),e.add(this.baseMesh),e.position.set(this.pos.x,0,this.pos.z),this.nameLabel=tn(this.nameText(),4.5),this.coordLabel=nn(3.5,1,this.coordText()),e.add(this.nameLabel),e.add(this.coordLabel),this.updateCrystalsVisibility(),e}nameText(){return"矿点"}update(e){}}const K_={rifle:"步枪兵",flamer:"喷火兵",mech:"机甲"};class Et extends sn{unitType;factoryLevel;combatLevel=1;combatKills=0;pendingLevelUp=!1;sourceBuildingId;squadId;constructor(e,t,i,n=0,s=0){super(i,n,s),this.unitType=e,this.factoryLevel=t,this.mesh=this.buildMesh(),this.hp=this.maxHp}get finalLevel(){return Math.max(this.factoryLevel,this.combatLevel)}get maxHp(){return ii[this.unitType].hp*mr.multiplier[this.lvlKey(this.finalLevel)]}get attack(){return ii[this.unitType].attack*mr.multiplier[this.lvlKey(this.finalLevel)]}get speed(){return ii[this.unitType].speed}get range(){return ii[this.unitType].range}get atkInterval(){return ii[this.unitType].atkInterval}applyCombatXp(e){if(this.combatLevel>=7)return;const t=this.hp/this.maxHp,i=this.combatLevel;this.combatKills+=e,this.combatLevel=this.computeCombatLevel(),this.hp=this.maxHp*t,this.combatLevel!==i&&(this.pendingLevelUp=!0,this.starLabel&&wi.setLevel(this.starLabel,this.finalLevel))}computeCombatLevel(){const e=mr.combatThresholds;return this.combatKills>=e.lv7?7:this.combatKills>=e.lv6?6:this.combatKills>=e.lv5?5:this.combatKills>=e.lv4?4:this.combatKills>=e.lv3?3:this.combatKills>=e.lv2?2:1}lvlKey(e){return"lv"+e}buildMesh(){const t=en.instance.unit(this.unitType,this.finalLevel,this.team);t.position.set(this.pos.x,0,this.pos.z);const i=this.unitType==="mech",n=i?3.6:2.3,s=i?4.2:2.9,a=i?4.9:3.6;return this.nameLabel=tn(this.nameText(),a,.8),this.coordLabel=nn(s,.8,this.coordText()),t.add(this.nameLabel),t.add(this.coordLabel),this.starLabel=wi.create(),this.starLabel.position.y=a+.9,wi.setLevel(this.starLabel,this.finalLevel),t.add(this.starLabel),this.healthBar=Qn.create(this.team,this.isBoss),this.healthBar.position.y=n,t.add(this.healthBar),t}nameText(){return K_[this.unitType]}update(e){}}class Un extends sn{heroLevel=1;heroKills=0;pendingHealViz=0;dead=!1;reviveTimer=0;oldMeshes=[];constructor(e,t=0,i=0){super(e,t,i),this.mesh=this.buildMesh(),this.hp=this.maxHp}get maxHp(){return(un.hp+un.shield)*Fn.multiplier[this.lvlKey(this.heroLevel)]}get attack(){return un.attack*Fn.multiplier[this.lvlKey(this.heroLevel)]}get range(){return un.range}get speed(){return un.speed}get atkInterval(){return un.atkInterval}applySharedXp(e){if(this.heroLevel>=7)return;const t=this.heroLevel,i=this.hp/this.maxHp;if(this.heroKills+=e,this.heroLevel=this.computeHeroLevel(),this.heroLevel>t){const n=this.maxHp-this.hp;this.hp=this.maxHp,this.pendingHealViz+=n,this.rebuildMeshForLevel()}else this.hp=this.maxHp*i,this.pendingHealViz=0}rebuildMeshForLevel(){const e=this.mesh;this.oldMeshes.push(e),this.mesh=this.buildMesh(),this.mesh.position.copy(e.position),this.mesh.visible=e.visible,this.dead&&this.mesh.traverse(t=>{if(t instanceof K){const i=t.material;i.transparent=!0,i.opacity=.3}}),e.traverse(t=>{t instanceof K&&t.geometry?.dispose()})}consumeOldMeshes(){const e=this.oldMeshes;return this.oldMeshes=[],e}get unlockedSkills(){const e=[];for(let t=1;t<=this.heroLevel;t++){const i=Fn.skillUnlocks["lv"+t];i&&e.push(...Object.keys(i))}return e}die(){this.dead=!0,this.reviveTimer=0}startRevive(e,t){const i="lv"+e;this.reviveTimer=zt.revive.timeByCcLevel[i]??zt.revive.timeByCcLevel.lv3,this.pos.set(t.x,0,t.z)}computeHeroLevel(){const e=Fn.combatThresholds;return this.heroKills>=e.lv7?7:this.heroKills>=e.lv6?6:this.heroKills>=e.lv5?5:this.heroKills>=e.lv4?4:this.heroKills>=e.lv3?3:this.heroKills>=e.lv2?2:1}lvlKey(e){return"lv"+e}update(e){this.syncMesh(),this.dead&&this.mesh.traverse(t=>{if(t instanceof K){const i=t.material;i.transparent=!0,i.opacity=.3}})}buildMesh(){const e=en.instance;return this.mesh=e.hero(this.heroLevel,this.team),this.mesh.position.set(this.pos.x,0,this.pos.z),this.nameLabel=tn(this.nameText(),4.7),this.coordLabel=nn(4,1,this.coordText()),this.mesh.add(this.nameLabel),this.mesh.add(this.coordLabel),this.starLabel=wi.create(),this.starLabel.position.y=4.7+.9,wi.setLevel(this.starLabel,this.heroLevel),this.mesh.add(this.starLabel),this.healthBar=Qn.create(this.team,this.isBoss),this.healthBar.position.y=3.3,this.mesh.add(this.healthBar),this.mesh}nameText(){return"英雄"}}function J_(r){const{member:e,core:t,enemies:i,alertRange:n,isMoving:s}=r;if(s)return{action:"follow",targetPos:{x:t.pos.x,z:t.pos.z}};const a=Q_(e,i,n);return a?Math.hypot(a.pos.x-e.pos.x,a.pos.z-e.pos.z)>e.range?{action:"approach",targetPos:{x:a.pos.x,z:a.pos.z}}:{action:"hold",targetPos:{x:e.pos.x,z:e.pos.z}}:{action:"follow",targetPos:{x:t.pos.x,z:t.pos.z}}}function Q_(r,e,t){let i=null,n=t;for(const s of e){if(!s.alive||s.team===r.team)continue;const a=Math.hypot(s.pos.x-r.pos.x,s.pos.z-r.pos.z);a<=n&&(n=a,i=s)}return i}class mn extends Et{constructor(e,t=0,i=0){super("mech",1,e,t,i),this.hp=this.maxHp,this.mesh=this.buildMiniBossMesh(),this.isBoss=!0}get maxHp(){return 1200}get attack(){return 30}get range(){return 9}get atkInterval(){return .7}get finalLevel(){return 1}buildMiniBossMesh(){const t=en.instance.miniBoss(this.team);return t.position.set(this.pos.x,0,this.pos.z),this.nameLabel=tn(this.nameText(),7.1,1.2),this.coordLabel=nn(6.3,1,this.coordText()),t.add(this.nameLabel),t.add(this.coordLabel),this.healthBar=Qn.create(this.team,this.isBoss),this.healthBar.position.y=5.5,t.add(this.healthBar),t}nameText(){return"MiniBoss"}}class Nh extends sn{gatherState="idle";targetNode=null;gatherTimer=0;carrying=0;constructor(e,t,i="player"){super(i,e,t),this.hp=60,this.mesh=this.buildMesh()}get maxHp(){return 60}update(e){}updateGather(e,t){const i=t.commandCenter.pos;switch(this.gatherState){case"idle":{this.targetNode=this.findNearestOre(i,t.oreNodes),this.targetNode&&(this.gatherState="toOre");break}case"toOre":{if(!this.targetNode||this.targetNode.depleted){this.gatherState="idle";break}this.moveToward(this.targetNode.pos,nt.worker.speed,e)&&(this.gatherState="gathering",this.gatherTimer=0);break}case"gathering":{this.gatherTimer+=e,this.gatherTimer>=nt.ore.gatherSec&&(this.carrying=this.targetNode.take(),this.gatherState="toCc");break}case"toCc":{this.moveToward(i,nt.worker.speed,e)&&(t.pool.earn(this.carrying),this.carrying=0,this.gatherState="idle");break}}this.syncMesh()}moveToward(e,t,i){const n=e.x-this.pos.x,s=e.z-this.pos.z,a=Math.hypot(n,s);if(a<.5)return!0;this.facing={x:n/a,z:s/a};const o=Math.min(a,t*i);return this.pos.x+=n/a*o,this.pos.z+=s/a*o,!1}findNearestOre(e,t){let i=null,n=1/0;for(const s of t){if(s.depleted)continue;const a=s.pos.distanceTo(e);a>nt.worker.gatherRadius||a<n&&(n=a,i=s)}return i}buildMesh(){const e=new pt,t=new ni({color:8978312,roughness:.6}),i=new ni({color:6737151,emissive:6737151,emissiveIntensity:.4,roughness:.2}),n=new ni({color:2236962,metalness:.6,roughness:.4}),s=new ni({color:10133672,metalness:.6,roughness:.4}),a=new K(new Ji(1.2,.7,.8),t);a.position.set(0,.7,0),e.add(a);const o=new K(new Ct(.3),i);o.position.set(0,1.15,.1),e.add(o);const l=new st(.35,.35,.2,6);l.rotateZ(Math.PI/2);const c=new K(l,n);c.position.set(-.5,.35,0),e.add(c);const h=new K(l.clone(),n);h.position.set(.5,.35,0),e.add(h);const d=new qn(.25,.7,8);d.rotateX(Math.PI/2);const u=new K(d,s);return u.position.set(0,.7,-.75),u.rotation.x=Math.PI,e.add(u),e.position.copy(this.pos),this.nameLabel=tn(this.nameText(),2,.7),this.coordLabel=nn(1.2,.7,this.coordText()),e.add(this.nameLabel),e.add(this.coordLabel),e}nameText(){return"农民"}}const Oh={commandCenter:2.5,rifleBarracks:2.5,flamerBarracks:2.5,mechFactory:2.5,turret:2.5};function Pn(r,e,t){const i=r.clone().project(e);if(i.z>1||i.z<-1)return null;const n=t.left+(i.x*.5+.5)*t.width,s=t.top+(-i.y*.5+.5)*t.height;return{x:n,y:s,z:i.z}}function er(r,e,t,i,n={}){const s=n.topPad??48,a=n.bottomPad??140,o=n.sidePad??12,l=t.width/2,c=i.left+l+o,h=i.right-l-o,d=Math.min(Math.max(r,c),h),u=i.top+s,p=i.bottom-a,g=Math.min(Math.max(e,u),p),v=e>p&&g!==e;return{x:d,y:g,flipBelow:v}}function Hn(r){return r.form==="vehicle"?4.3:r.type&&Object.prototype.hasOwnProperty.call(Oh,r.type)?Oh[r.type]:r.nameLabel?r.nameLabel.position.y+.9:4}class ey{_workers=[];oreNodes;cc;pool;producingTimer=0;workerPaused=!1;onResource;noOreSink;_hadOre=!0;setResourceSink(e){this.onResource=e}setNoOreSink(e){this.noOreSink=e}hasOreInRange(){const e=nt.worker.gatherRadius;for(const t of this.oreNodes)if(!t.depleted&&t.pos.distanceTo(this.cc.pos)<=e)return!0;return!1}checkOnDeploy(){const e=this.hasOreInRange();this._hadOre=e,nt.noOreHint.enabled&&(e||this.noOreSink?.("deploy"))}checkEdgeDepleted(){if(!nt.noOreHint.enabled){this._hadOre=this.hasOreInRange();return}const e=this.hasOreInRange();this._hadOre&&!e&&this.noOreSink?.("depleted"),this._hadOre=e}ccWorldPos(){return{x:this.cc.pos.x,y:Hn(this.cc),z:this.cc.pos.z}}constructor(e,t,i){this.cc=e,this.oreNodes=t,this.pool=i}get workers(){return this._workers}get workerList(){return this._workers}get workerCap(){return Je.commandCenter.levels[this.cc.level-1].workerCap??nt.worker.maxCount}getProducingTimer(){return this.producingTimer}setWorkerPaused(e){e&&this.producingTimer>0&&(this.pool.earn(nt.worker.cost),this.onResource?.({amount:nt.worker.cost,worldPos:this.ccWorldPos(),reason:"refund"}),this.producingTimer=0),this.workerPaused=e}get isWorkerPaused(){return this.workerPaused}spawnInitialWorkers(){for(let e=0;e<nt.worker.startCount;e++){const t=e/nt.worker.startCount*Math.PI*2,i=new Nh(this.cc.pos.x+Math.cos(t)*3,this.cc.pos.z+Math.sin(t)*3);this._workers.push(i)}this.checkOnDeploy()}get occupiedCap(){return this._workers.length+(this.producingTimer>0?1:0)}requestProduceWorker(){return this.occupiedCap>=this.workerCap||this.producingTimer>0||!this.pool.spend(nt.worker.cost)?!1:(this.producingTimer=nt.worker.prodTime,!0)}onWorkerDeath(e){const t=this._workers.indexOf(e);t>=0&&this._workers.splice(t,1),this.producingTimer===0&&!this.workerPaused&&this.requestProduceWorker()}workersForPackUp(){return this.producingTimer>0&&(this.pool.earn(nt.worker.cost),this.onResource?.({amount:nt.worker.cost,worldPos:this.ccWorldPos(),reason:"refund"}),this.producingTimer=0),[...this._workers]}repositionWorkers(){for(let e=0;e<this._workers.length;e++){const t=e/this._workers.length*Math.PI*2;this._workers[e].pos.set(this.cc.pos.x+Math.cos(t)*3,0,this.cc.pos.z+Math.sin(t)*3),this._workers[e].gatherState="idle",this._workers[e].targetNode=null}this.checkOnDeploy()}update(e){if(this.producingTimer>0&&(this.producingTimer-=e,this.producingTimer<=0)){this.producingTimer=0;const i=Math.random()*Math.PI*2;this._workers.push(new Nh(this.cc.pos.x+Math.cos(i)*3,this.cc.pos.z+Math.sin(i)*3))}this.producingTimer===0&&!this.workerPaused&&this.occupiedCap<this.workerCap&&this.requestProduceWorker();const t={commandCenter:this.cc,oreNodes:this.oreNodes,pool:this.pool};for(const i of this._workers){const n=i.gatherState;i.updateGather(e,t),n==="toCc"&&i.gatherState==="idle"&&this.onResource?.({amount:nt.ore.perTrip,worldPos:this.ccWorldPos(),reason:"deposit"})}this.checkEdgeDepleted()}}class ty{pool;states=new Map;onResource;setResourceSink(e){this.onResource=e}moduleWorldPos(e){return{x:e.pos.x,y:Hn(e),z:e.pos.z}}constructor(e){this.pool=e}registerBuilding(e){this.states.set(e.id,{module:e,queueTimer:0,unitCount:0,paused:!1})}hasBuilding(e){return this.states.has(e.id)}getState(e){return this.states.get(e.id)}getUnitCount(e){return this.getState(e)?.unitCount??0}getQueueTimer(e){return this.getState(e)?.queueTimer??0}setPaused(e,t){const i=this.getState(e);if(i){if(t&&i.queueTimer>0){const s=Je[e.type].levels[e.level-1].prodUnit;s&&(this.pool.earn(ii[s].cost),this.onResource?.({amount:ii[s].cost,worldPos:this.moduleWorldPos(i.module),reason:"refund"})),i.queueTimer=0}i.paused=t}}isPaused(e){return this.getState(e)?.paused??!1}forceAddUnitCount(e){const t=this.getState(e);t&&t.unitCount++}requestProduce(e){const t=this.getState(e);if(!t||t.queueTimer!==0)return!1;const i=Je[e.type].levels[e.level-1],n=i.unitCap??0;if(t.unitCount>=n)return!1;const s=i.prodUnit,a=ii[s].cost;return this.pool.spend(a)?(t.queueTimer=i.prodTimeSec,!0):!1}onUnitDeath(e){if(e.sourceBuildingId==null)return;const t=this.states.get(e.sourceBuildingId);t&&(t.unitCount=Math.max(0,t.unitCount-1),t.queueTimer===0&&!t.paused&&this.requestProduce(t.module))}clearQueues(){for(const e of this.states.values()){if(e.queueTimer>0){const i=Je[e.module.type].levels[e.module.level-1].prodUnit;i&&(this.pool.earn(ii[i].cost),this.onResource?.({amount:ii[i].cost,worldPos:this.moduleWorldPos(e.module),reason:"refund"}))}e.queueTimer=0}}update(e,t){for(const i of this.states.values())i.queueTimer===0&&!i.paused&&this.requestProduce(i.module);for(const i of this.states.values())i.queueTimer>0&&(i.queueTimer-=e,i.queueTimer<=0&&(i.queueTimer=0,this.spawnUnit(i,t)))}spawnUnit(e,t){const i=e.module,n=Je[i.type].levels[i.level-1],s=n.prodUnit,a=n.rallyOffset??{x:0,z:0},o=new Et(s,n.factoryUnitLevel??1,i.team,i.pos.x+a.x,i.pos.z+a.z);o.sourceBuildingId=i.id,e.unitCount++,t(o,i)}}class iy{pool;constructor(e){this.pool=e}getUpgradeCost(e){const t=Je[e.type];return e.level>=t.maxLevel?null:t.levels[e.level-1].upgradeCost??null}canUpgrade(e){const t=this.getUpgradeCost(e);return t==null?!1:this.pool.canAfford(t)}requestUpgrade(e){const t=this.getUpgradeCost(e);if(t==null||!this.pool.spend(t))return!1;const i=Je[e.type],n=e.hp,s=i.levels[e.level].hp-i.levels[e.level-1].hp;return e.upgrade(),e.hp=n+s,!0}}class ny{hero;constructor(e){this.hero=e}onUnitKill(e,t,i){const n=t.expValue;e&&e.team===this.hero.team&&this.hero.heroLevel<7&&this.hero.applySharedXp(n),e instanceof Et&&(e.finalLevel<7?e.applyCombatXp(n):mr.overflowSharesToSquad&&e.squadId!=null&&this.distributeToSquad(i(e.squadId),n))}distributeToSquad(e,t){const i=e.filter(s=>s instanceof Et&&s.finalLevel<7);if(i.length===0)return;const n=t/i.length;for(const s of i)s.applyCombatXp(n)}}class sy{leader;members=[];hero;base;move;constructor(e,t,i){this.hero=e,this.base=i,this.leader=e,this.move=t}addMember(e){this.members.push(e)}pickSuccessor(){const e=this.members.filter(i=>i.alive),t=i=>e.find(n=>n.unitType===i);return t("mech")??t("rifle")??t("flamer")??null}isWiped(){return this.leader===this.base}controlCorePos(){return this.leader.pos}updateLeader(){if(this.hero.alive&&!this.hero.dead){if(this.leader!==this.hero){const t=this.dist2D(this.hero.pos,this.leader.pos);(this.leader===this.base||t<=zt.squad.tetherRadius)&&(this.leader=this.hero)}return}(this.leader===this.hero||this.leader===this.base||!this.leader.alive)&&(this.leader=this.pickSuccessor()??this.base)}regroupHero(e){if(!this.hero.alive||this.hero.dead||this.leader===this.hero||this.leader===this.base)return;this.dist2D(this.hero.pos,this.leader.pos)>zt.squad.tetherRadius&&this.move.moveToward(this.hero,this.leader.pos,this.hero.speed,e,!1)}update(e,t,i,n,s,a=[]){this.updateLeader(),this.regroupHero(e);for(const o of this.members){if(!o.alive)continue;this.dist2D(o.pos,this.leader.pos)>zt.squad.tetherBreakDist&&this.move.moveToward(o,this.leader.pos,o.speed,e,!1)}s&&s.update(e,i,n,a,!t)}dist2D(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}}const Po=16769098,ry=16711680,zh=16737792,kh=1.5;class dl{static geos;static mats;static initialized=!1;static init(){if(this.initialized)return;const e=new st(.06,.06,.6,6);e.rotateX(Math.PI/2);const t=new Sr(.1,.4,4,8);t.rotateX(Math.PI/2),this.geos={rifle:e,turret:t,hero:new Ct(.2,10,8),miniBoss:new Ct(.45,12,10),skill:new Ct(.6,12,10)};const i=()=>({player:new ni({color:Po,emissive:Po,emissiveIntensity:kh}),enemy:new ni({color:ry,emissive:zh,emissiveIntensity:kh})});this.mats={rifle:i(),turret:i(),hero:i(),miniBoss:i(),skill:i()},this.initialized=!0}static create(e,t){return this.initialized||this.init(),new K(this.geos[e],this.mats[e][t])}static createTrail(e,t){if(this.initialized||this.init(),e==="hero"||e==="miniBoss"||e==="skill"){const i=e==="hero"?.15:e==="miniBoss"?.3:.45,n=new Ct(i,6,4),s=t==="player"?Po:zh,a=new bt({color:s,transparent:!0,opacity:.3});return new K(n,a)}return null}}class Ds extends sn{active=!1;payload;projectileType;meshInternal;trailInternal;velocity=new w;elapsed=0;startPos=new w;maxRange;constructor(){super("player",0,0),this.hp=1}get maxHp(){return 1}get damage(){return this.payload?.damage??0}static pool=[];static initialized=!1;static initPool(){if(!this.initialized){for(let e=0;e<zt.projectile.poolSize;e++)this.pool.push(new Ds);this.initialized=!0}}static acquire(){this.initialized||this.initPool();const e=this.pool.find(t=>!t.active);return e?(e.active=!0,e.payload||(e.payload={damage:1,source:e}),e):null}static release(e){e.active=!1,e.elapsed=0,e.maxRange=void 0,e.payload&&(e.payload.explosion=void 0),e.meshInternal?.parent&&e.meshInternal.parent.remove(e.meshInternal),e.trailInternal?.parent&&e.trailInternal.parent.remove(e.trailInternal)}init(e,t,i,n,s,a){this.pos.copy(e),this.startPos.copy(e),this.payload=i,this.elapsed=0,this.projectileType=n,this.maxRange=a?.maxRange;const o=new w().subVectors(t,e);o.y=0,o.length()>0&&o.normalize();const c=a?.speed??zt.projectile.speed;this.velocity.copy(o).multiplyScalar(c),n&&s?(this.meshInternal=dl.create(n,s),this.trailInternal=dl.createTrail(n,s)??void 0):(this.meshInternal=void 0,this.trailInternal=void 0)}get projectileMesh(){return this.meshInternal}get projectileTrail(){return this.trailInternal}nameText(){return"弹道"}update(e){if(!this.active)return;this.pos.add(this.velocity.clone().multiplyScalar(e)),this.elapsed+=e;const t=this.elapsed>=zt.projectile.lifetimeSec,i=this.maxRange!==void 0&&this.pos.distanceTo(this.startPos)>=this.maxRange;if(t||i){this.payload?.explosion&&this.payload.explosion.onExplode?.(this.pos.clone()),Ds.release(this);return}if(this.meshInternal&&(this.meshInternal.position.copy(this.pos),this.velocity.lengthSq()>0)){const n=this.pos.clone().add(this.velocity);this.meshInternal.lookAt(n)}if(this.trailInternal&&this.velocity.lengthSq()>0){const n=this.pos.clone().sub(this.velocity.clone().normalize().multiplyScalar(.5));this.trailInternal.position.copy(n)}}}class Zt{static pool=[];static active=new Map;static poolSize=0;static init(e,t=200){if(!(this.poolSize>0)){for(let i=0;i<t;i++){const n=new Jn({color:16777215}),s=new Sn(n);s.visible=!1,e.add(s),this.pool.push(s)}this.poolSize=t}}static spawn(e){const t=this.pool.find(n=>!n.visible&&!this.active.has(n));if(!t)return null;t.visible=!0,t.position.copy(e.pos),t.scale.setScalar(e.scale);const i=t.material;return i.color.setHex(e.color),i.opacity=1,this.active.set(t,{expireAt:performance.now()+e.duration*1e3,duration:e.duration*1e3,colorRamp:e.colorRamp,velocity:e.velocity?e.velocity.clone():void 0,drag:e.drag??0}),t}static update(e=0){const t=performance.now();for(const[i,n]of this.active){if(t>=n.expireAt){i.visible=!1,this.active.delete(i);continue}if(n.velocity&&e>0&&(i.position.addScaledVector(n.velocity,e),n.drag>0)){const o=Math.max(0,1-n.drag*e);n.velocity.multiplyScalar(o)}const s=i.material,a=n.expireAt-t;if(n.colorRamp){const o=1-a/n.duration;s.color.copy(this.sampleRamp(n.colorRamp,o))}a<n.duration*.3&&(s.opacity=a/(n.duration*.3))}}static _c1=new Ne;static _c2=new Ne;static sampleRamp(e,t){if(t<=e[0].t)return this._c1.setHex(e[0].color);const i=e[e.length-1];if(t>=i.t)return this._c1.setHex(i.color);for(let n=0;n<e.length-1;n++){const s=e[n],a=e[n+1];if(t>=s.t&&t<=a.t){const o=a.t-s.t,l=o>0?(t-s.t)/o:0;return this._c1.setHex(s.color),this._c2.setHex(a.color),this._c1.lerp(this._c2,l)}}return this._c1.setHex(i.color)}}class Gn{static pool=[];static active=new Map;static poolSize=0;static uiLayer=null;static init(e,t=30){if(this.poolSize>0)return;const i=document.createElement("div");i.setAttribute("data-damage-container","true"),i.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:50;",e.appendChild(i);for(let n=0;n<t;n++){const s=document.createElement("div");s.setAttribute("data-damage-text","true"),s.style.cssText="position:absolute;font-weight:900;display:none;white-space:nowrap;user-select:none;",i.appendChild(s),this.pool.push(s)}this.poolSize=t}static spawn(e){const t=this.pool.find(d=>!this.active.has(d));if(!t)return;const i=Math.round(e.amount);let n,s,a,o;if(e.heal)n=e.heal.color,s=e.heal.fontSize??18,a=`${e.heal.prefix}${i}`,o="1px";else{const d=e.isCrit;e.targetTeam==="player"?(n="#ff3333",s=d?26:18):(n=d?"#ff9933":"#ffffff",s=d?26:18),a=d?`<span style="font-size:0.8em;vertical-align:super">▲</span><span>-${i}</span>`:`-${i}`,o=d?"2px":"1px"}t.innerHTML=a,t.style.color=n,t.style.fontSize=`${s}px`,t.style.textShadow=`${o} ${o} 0 #000,-${o} -${o} 0 #000,${o} -${o} 0 #000,-${o} ${o} 0 #000`;const l=Gn.uiLayer,c=l?l.toLocal(e.screenPos.x,e.screenPos.y).x:e.screenPos.x,h=l?l.toLocal(e.screenPos.x,e.screenPos.y).y:e.screenPos.y;t.style.left=`${c}px`,t.style.top=`${h}px`,t.style.display="block",t.style.opacity="1",this.active.set(t,{screenX:c,screenY:h,bornAt:performance.now(),driftX:(Math.random()-.5)*30})}static update(){const e=performance.now(),t=800;for(const[i,n]of this.active){const a=(e-n.bornAt)/t;if(a>=1){i.style.display="none",i.style.opacity="1",this.active.delete(i);continue}const o=a*60;i.style.left=`${n.screenX+n.driftX}px`,i.style.top=`${n.screenY-o}px`,i.style.opacity=a<.7?"1":`${1-(a-.7)/.3}`}}}const oa=[{t:0,color:16777215},{t:.15,color:16777130},{t:.4,color:16768307},{t:.7,color:16746547},{t:1,color:1118481}];class ay{experience;getSquad;projectiles=[];scene;camera;canvas;allTargetsCache=[];onAttack=null;constructor(e,t){this.experience=e,this.getSquad=t}setScene(e){this.scene=e,dl.init()}setCamera(e){this.camera=e}setCanvas(e){this.canvas=e}projectileTypeOf(e){return e instanceof mn?"miniBoss":e instanceof Un?"hero":e instanceof Ri&&(e.type==="turret"||e.type==="commandCenter")?"turret":"rifle"}applyDamage(e,t,i,n=!1){e.alive&&e.team!==i.team&&(e.takeDamage(t),e.healthBar&&Qn.update(e.healthBar,e.team,e.isBoss,e.hp/e.maxHp,!0),this.triggerFlash(e),this.spawnHitEffect(i,e,t,n),this.onAttack&&this.onAttack(i,e,t),e.alive||this.onDeath(e,i))}scanNearestEnemy(e,t,i){let n=null,s=i;for(const a of t){if(!a.alive||a.team===e.team)continue;const o=this.dist2D(e.pos,a.pos);o<=s&&(s=o,n=a)}return n}update(e,t,i,n=[],s=!0){const a=[...t,...i,...n];this.allTargetsCache=a;for(const o of t){if(!o.alive||(this.tickCooldown(o,e),!s&&o.team==="player")||!this.canAttack(o))continue;const c=this.scanNearestEnemy(o,a,this.rangeOf(o));c&&(this.resetCooldown(o),this.performAttack(o,c))}for(const o of i){const l=Je[o.type].levels[o.level-1];if(!o.alive||l.turretAttack==null)continue;this.tickCooldown(o,e);const c=[...t,...n,...i],h=this.scanNearestEnemy(o,c,l.turretRange??0);if(h){const d=h.pos.x-o.pos.x,u=h.pos.z-o.pos.z,p=Math.hypot(d,u);p>.01&&(o.turretAim={x:d/p,z:u/p})}h&&this.canAttack(o)&&(this.resetCooldown(o),this.spawnProjectile(o,h,{damage:l.turretAttack??0,source:o}),this.triggerMuzzleFlash(o))}this.updateProjectiles(e,a)}onDeath(e,t){const i=this.expValueOf(e);this.experience.onUnitKill(t instanceof Et||t instanceof Un?t:null,{team:e.team,expValue:i},this.getSquad),this.spawnDeathExplosion(e)}spawnDeathExplosion(e){if(!this.scene)return;const t=e.pos.clone().add(new w(0,this.particleHeight(),0));if(e instanceof Ri){for(let i=0;i<24;i++){const n=i/24*Math.PI*2,s=5+Math.random()*3,a=new w(Math.cos(n)*s,2+Math.random()*2,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16777215,scale:1.6,duration:.7,colorRamp:oa,velocity:a,drag:2})}for(let i=0;i<6;i++){const n=new w((Math.random()-.5)*.5,1.5+Math.random(),(Math.random()-.5)*.5);Zt.spawn({pos:t.clone(),color:2236962,scale:1,duration:.8,velocity:n,drag:1})}for(let i=0;i<10;i++){const n=Math.random()*Math.PI*2,s=7+Math.random()*4,a=new w(Math.cos(n)*s,1+Math.random()*2,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16777215,scale:.5,duration:.5,colorRamp:oa,velocity:a,drag:3})}}else if(e instanceof mn)for(let i=0;i<20;i++){const n=i/20*Math.PI*2,s=4+Math.random()*3,a=new w(Math.cos(n)*s,1.5+Math.random()*2,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16777215,scale:1.2,duration:.6,colorRamp:oa,velocity:a,drag:2})}else if(e instanceof Et)for(let i=0;i<10;i++){const n=i/10*Math.PI*2,s=3+Math.random()*2,a=new w(Math.cos(n)*s,1+Math.random(),Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16777215,scale:.7,duration:.45,colorRamp:oa,velocity:a,drag:3})}}expValueOf(e){return e instanceof mn?Rh.miniBoss:e instanceof Et?Rh.grunt:0}performAttack(e,t){const i=t.pos.x-e.pos.x,n=t.pos.z-e.pos.z,s=Math.hypot(i,n);s>.01&&(e.facing={x:i/s,z:n/s});const a=this.attackOf(e);if(e instanceof Et&&e.unitType==="flamer")this.applyDamage(t,a,e),this.spawnFlameCone(e,t);else if(e instanceof Et&&e.unitType==="mech"&&!(e instanceof mn)){this.applyAoe(e.pos,3,a,e),this.triggerMechBlade(e);for(let o=0;o<12;o++){const l=o/12*Math.PI*2,c=e.pos.clone().add(new w(Math.cos(l)*3,this.particleHeight(),Math.sin(l)*3));Zt.spawn({pos:c,color:16746547,scale:.3,duration:.3})}}else this.spawnProjectile(e,t,{damage:a,source:e}),this.triggerMuzzleFlash(e)}applyAoe(e,t,i,n){for(const s of this.allTargetsCache)!s.alive||s.team===n.team||this.dist2D(e,s.pos)<=t&&this.applyDamage(s,i,n,!0)}spawnProjectile(e,t,i){const n=Ds.acquire();if(!n)return;const s=this.projectileTypeOf(e),a=this.muzzleWorldPositionOf(e),o=new w(t.pos.x-e.pos.x,0,t.pos.z-e.pos.z),l=o.length();l>0&&o.normalize();const c=a,h=new w(a.x+o.x*l,a.y,a.z+o.z*l);n.init(c,h,i,s,e.team),this.scene&&n.projectileMesh&&this.scene.add(n.projectileMesh),this.scene&&n.projectileTrail&&this.scene.add(n.projectileTrail),this.projectiles.push(n)}spawnSkillProjectile(e,t,i,n,s){const a=Ds.acquire();if(!a)return;const o="skill",l=this.muzzleWorldPositionOf(e),c=new w(l.x+t.x*s,l.y,l.z+t.z*s);a.init(l,c,i,o,e.team,{speed:n,maxRange:s}),this.scene&&a.projectileMesh&&this.scene.add(a.projectileMesh),this.scene&&a.projectileTrail&&this.scene.add(a.projectileTrail),this.projectiles.push(a)}muzzleWorldPositionOf(e){e.syncMesh();const t=e.mesh.getObjectByName("muzzle");if(!t)throw new Error(`发射者 ${e.constructor.name} 缺少 muzzle 节点，无法确定子弹出生点`);const i=new w;return t.getWorldPosition(i),i}particleHeight(){return zt.projectile.flightHeight}updateProjectiles(e,t){for(const i of this.projectiles){if(!i.active)continue;const n=i.pos.clone();if(i.update(e),!i.active)continue;const s=i.payload.explosion?.hitRadius??1;for(const a of t)if(a.alive&&a.team!==i.payload.source.team&&this.segPointDist2D(n,i.pos,a.pos)<=s){i.payload.explosion?(this.applyAoe(i.pos,i.payload.explosion.radius,i.payload.damage,i.payload.source),i.payload.explosion.onExplode?.(i.pos.clone())):this.applyDamage(a,i.payload.damage,i.payload.source),Ds.release(i);break}}this.projectiles=this.projectiles.filter(i=>i.active)}segPointDist2D(e,t,i){const n=t.x-e.x,s=t.z-e.z,a=i.x-e.x,o=i.z-e.z,l=n*n+s*s;if(l===0)return Math.hypot(a,o);let c=(a*n+o*s)/l;c<0?c=0:c>1&&(c=1);const h=e.x+n*c,d=e.z+s*c;return Math.hypot(i.x-h,i.z-d)}attackOf(e){return e instanceof Et||e instanceof Un?e.attack:e instanceof Ri?Je[e.type].levels[e.level-1].turretAttack??0:0}rangeOf(e){return e instanceof Et||e instanceof Un?e.range:0}tickCooldown(e,t){e.tickCooldown(t)}canAttack(e){return e.canAttack()}resetCooldown(e){e.resetCooldown(this.atkIntervalOf(e))}atkIntervalOf(e){return e instanceof Et||e instanceof Un?e.atkInterval:e instanceof Ri?Je[e.type].levels[e.level-1].turretAtkInterval??.5:1}dist2D(e,t){const i=e.x-t.x,n=e.z-t.z;return Math.hypot(i,n)}triggerFlash(e){e.mesh.traverse(t=>{if(!(t instanceof K))return;const i=t.material;if(!i||i.userData?.isFlashClone||!("emissive"in i)||!(i.emissive instanceof Ne))return;const n=i.clone();n.emissive.setHex(16777215),n.emissiveIntensity=.4,n.userData={isFlashClone:!0,originalMat:i,expireAt:performance.now()+100},t.material=n})}tickFlash(){const e=performance.now(),t=new Set(this.allTargetsCache);for(const i of t)!i||!i.mesh||i.mesh.traverse(n=>{if(n instanceof K){const s=n.material;s?.userData?.isFlashClone&&e>=s.userData.expireAt&&(n.material=s.userData.originalMat,s.dispose())}})}spawnHitEffect(e,t,i,n){if(!(!this.scene||!this.camera)&&(this.spawnHitParticles(e,t.pos.clone().add(new w(0,this.particleHeight(),0))),t.pos)){const s=t.pos.clone().add(new w(0,2,0)),a=s.clone().project(this.camera),o=this.canvas?.getBoundingClientRect(),l=o?.width??window.innerWidth,c=o?.height??window.innerHeight,h=o?.left??0,d=o?.top??0,u={x:h+(a.x*.5+.5)*l,y:d+(-a.y*.5+.5)*c};Gn.spawn({worldPos:s,amount:i,targetTeam:t.team,isCrit:n,screenPos:u})}}spawnHitParticles(e,t){if(e instanceof Et&&e.unitType==="rifle")for(let i=0;i<8;i++){const n=i/8*Math.PI*2+Math.random()*.3,s=1.5+Math.random()*1,a=new w(Math.cos(n)*s,.5+Math.random()*.5,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16769098,scale:.2,duration:.3,velocity:a,drag:4})}else if(e instanceof mn)for(let i=0;i<10;i++){const n=i/10*Math.PI*2+Math.random()*.3,s=2.5+Math.random()*1.5,a=new w(Math.cos(n)*s,.8+Math.random()*.7,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:6702250,scale:.25,duration:.35,velocity:a,drag:3.5})}else if(e instanceof Un)for(let i=0;i<6;i++){const n=i/6*Math.PI*2,s=1.5+Math.random()*.8,a=new w(Math.cos(n)*s,.4,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:16763955,scale:.3,duration:.35,velocity:a,drag:3})}else if(e instanceof Ri&&e.type==="turret")for(let i=0;i<6;i++){const n=i/6*Math.PI*2+Math.random()*.4,s=1.8+Math.random()*1.2,a=new w(Math.cos(n)*s,1.2+Math.random()*1,Math.sin(n)*s);Zt.spawn({pos:t.clone(),color:10066329,scale:.2,duration:.35,velocity:a,drag:3})}}triggerMechBlade(e){const t=e.mesh.getObjectByName("mechBlade");t&&(t.visible=!0,t.scale.setScalar(.3),t.userData.bladeAnim={startAt:performance.now(),phase:"expand"})}triggerMuzzleFlash(e){if(!this.scene)return;const t=this.muzzleWorldPositionOf(e),i=new w(0,0,-1).applyQuaternion(e.mesh.quaternion);Zt.spawn({pos:t,color:16777215,scale:.6,duration:.08,velocity:i.clone().multiplyScalar(8),drag:4})}spawnFlameCone(e,t){const i=t.pos.x-e.pos.x,n=t.pos.z-e.pos.z,s=Math.hypot(i,n);if(s<.01)return;const a=i/s,o=n/s,l=e.pos.clone().add(new w(a,0,o));l.y=this.particleHeight();for(let c=0;c<8;c++){const h=(Math.random()-.5)*.9,d=Math.cos(h),u=Math.sin(h),p=a*d-o*u,g=a*u+o*d,v=6+Math.random()*3;Zt.spawn({pos:l.clone(),color:16737843,scale:.5,duration:.3,velocity:new w(p*v,.5,g*v),drag:2})}}}const oy="#7df9ff",ly="#00e5ff",cy="#0088aa",la="#005566",hy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="oreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${oy}"/>
      <stop offset="50%" stop-color="${ly}"/>
      <stop offset="100%" stop-color="${cy}"/>
    </linearGradient>
  </defs>
  <polygon points="16,2 28,10 28,22 16,30 4,22 4,10" fill="url(#oreGrad)" stroke="${la}" stroke-width="1.5"/>
  <polyline points="16,2 16,16 28,10" fill="none" stroke="${la}" stroke-width="1" opacity="0.6"/>
  <polyline points="16,16 4,10" fill="none" stroke="${la}" stroke-width="1" opacity="0.6"/>
  <polyline points="16,16 16,30" fill="none" stroke="${la}" stroke-width="1" opacity="0.6"/>
  <polygon points="16,2 28,10 16,16" fill="#ffffff" opacity="0.4"/>
</svg>`,es=r=>{if(typeof window<"u"&&typeof window.btoa=="function")return window.btoa(r);const e=globalThis;return e.Buffer?e.Buffer.from(r,"utf-8").toString("base64"):dy(r)};function dy(r){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";let t="",i=0;for(;i<r.length;){const n=r.charCodeAt(i++)&255,s=i<r.length?r.charCodeAt(i++)&255:-1,a=i<r.length?r.charCodeAt(i++)&255:-1;t+=e[n>>2],t+=e[(n&3)<<4|(s>=0?s>>4:0)],t+=s>=0?e[(s&15)<<2|(a>=0?a>>6:0)]:"=",t+=a>=0?e[a&63]:"="}return t}const Ul=`data:image/svg+xml;base64,${es(hy)}`,uy="#FFD700",fy="#000000",py=1.4;function $d(r,e){const t=r/2,i=t,n=t,s=[];for(let o=0;o<10;o++){const l=Math.PI/5*o-Math.PI/2,c=o%2===0?t*.92:t*.92*.4;s.push(`${(i+Math.cos(l)*c).toFixed(2)},${(n+Math.sin(l)*c).toFixed(2)}`)}const a=e?`<defs><radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
         <stop offset="0%" stop-color="rgba(255,215,0,0.5)"/>
         <stop offset="100%" stop-color="rgba(255,215,0,0)"/>
       </radialGradient></defs>
       <circle cx="${i}" cy="${n}" r="${t}" fill="url(#starGlow)"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${r}">${a}<polygon points="${s.join(" ")}" fill="${uy}" stroke="${fy}" stroke-width="1.5"/></svg>`}const my=`data:image/svg+xml;base64,${es($d(24,!1))}`,gy=`data:image/svg+xml;base64,${es($d(24,!0))}`;function Ha(r,e=14){const t=Math.max(1,Math.min(7,Math.floor(r)));if(t===1)return"";if(t===7){const s=Math.round(e*py);return`<img src="${gy}" alt="Lv7" style="width:${s}px;height:${s}px;vertical-align:middle;display:inline-block"/>`}const i=t-1;return`<img src="${my}" alt="★" style="width:${e}px;height:${e}px;vertical-align:middle;display:inline-block;margin-left:2px"/>`.repeat(i)}function ts(r=14){return`<img src="${Ul}" alt="矿石" style="width:${r}px;height:${r}px;vertical-align:middle;display:inline-block"/>`}const Ga='stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"',vy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" ${Ga}>
  <path d="M6 20 L8 14 L22 14 L24 20 Z"/>
  <path d="M11 14 C 11 10, 19 10, 19 14"/>
  <circle cx="10" cy="22" r="2.5"/>
  <circle cx="20" cy="22" r="2.5"/>
  <line x1="6" y1="17" x2="2" y2="17"/>
  <path d="M2 15 L0 17 L2 19"/>
</svg>`,_y=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" ${Ga}>
  <circle cx="16" cy="8" r="3"/>
  <line x1="16" y1="11" x2="16" y2="22"/>
  <line x1="16" y1="22" x2="13" y2="28"/>
  <line x1="16" y1="22" x2="19" y2="28"/>
  <line x1="17" y1="15" x2="29" y2="15"/>
  <line x1="27" y1="13" x2="27" y2="17"/>
  <line x1="17" y1="15" x2="14" y2="19"/>
</svg>`,yy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" ${Ga}>
  <circle cx="16" cy="8" r="3"/>
  <line x1="16" y1="11" x2="16" y2="22"/>
  <line x1="16" y1="22" x2="13" y2="28"/>
  <line x1="16" y1="22" x2="19" y2="28"/>
  <line x1="17" y1="14" x2="28" y2="14"/>
  <line x1="17" y1="18" x2="28" y2="18"/>
  <line x1="28" y1="14" x2="28" y2="18"/>
  <rect x="4" y="12" width="4" height="8" rx="2"/>
</svg>`,xy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" ${Ga}>
  <rect x="10" y="6" width="12" height="12" rx="1.5"/>
  <rect x="14" y="9" width="4" height="4" rx="0.5"/>
  <line x1="13" y1="18" x2="12" y2="28"/>
  <line x1="12" y1="28" x2="9" y2="28"/>
  <line x1="19" y1="18" x2="20" y2="28"/>
  <line x1="20" y1="28" x2="23" y2="28"/>
</svg>`,My=`data:image/svg+xml;base64,${es(vy)}`,Sy=`data:image/svg+xml;base64,${es(_y)}`,by=`data:image/svg+xml;base64,${es(yy)}`,wy=`data:image/svg+xml;base64,${es(xy)}`;class Ty{el;oreEl;oreIconEl;oreNumEl;timeEl;waveEl;pulseParent=document.body;constructor(){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;top:0;left:0;right:0;height:40px;display:flex;align-items:center;justify-content:center;gap:24px;background:rgba(0,0,0,0.5);color:#fff;font:600 18px monospace;pointer-events:none;z-index:10;",this.oreEl=document.createElement("span"),this.oreEl.style.cssText="display:flex;align-items:center;gap:6px;",this.oreIconEl=document.createElement("img"),this.oreIconEl.src=Ul,this.oreIconEl.style.cssText="width:24px;height:24px;",this.oreNumEl=document.createElement("span"),this.oreEl.appendChild(this.oreIconEl),this.oreEl.appendChild(this.oreNumEl),this.timeEl=document.createElement("span"),this.el.appendChild(this.oreEl),this.el.appendChild(this.timeEl),this.waveEl=document.createElement("span"),this.el.appendChild(this.waveEl),this.setOre(0),this.setTime(0)}get oreText(){return this.oreNumEl.textContent??""}get timeText(){return this.timeEl.textContent??""}get waveText(){return this.waveEl.textContent??""}setWave(e){const t=e.waveType==="main"?"主波":"骚扰",i=e.waveType==="main"?"#ff6644":"#ffcc44";e.countdownSec>0?this.waveEl.textContent=`⚔ 下一波 ${Math.ceil(e.countdownSec)}s · ${t}`:this.waveEl.textContent=`⚔ 波次进行中 · ${t}`,this.waveEl.style.color=i,e.isIncoming&&(this.waveEl.animate([{backgroundColor:"transparent"},{backgroundColor:"#ff4444"},{backgroundColor:"transparent"}],{duration:600,iterations:2}),this.triggerWavePulse())}attachPulseParent(e){this.pulseParent=e}triggerWavePulse(){const e=this.pulseParent.querySelector("[data-wave-pulse]");e&&e.remove();const t=document.createElement("div");t.setAttribute("data-wave-pulse","true"),t.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:50;background:radial-gradient(circle at center, transparent 40%, rgba(255,0,0,0.4) 100%);opacity:0;",this.pulseParent.appendChild(t);const i=t.animate([{opacity:0},{opacity:1},{opacity:0}],{duration:1200});i.onfinish=()=>t.remove()}setOre(e){const t=Math.floor(e);this.oreNumEl.textContent=t.toLocaleString("en-US")}setTime(e){const t=Math.max(0,Math.floor(e)),i=Math.floor(t/60),n=t%60;this.timeEl.textContent=`${i}:${n.toString().padStart(2,"0")}`}getOreIconScreenPos(){const e=this.oreIconEl.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}bumpOreIcon(){this.oreIconEl.style.transition="transform 0.15s ease-out",this.oreIconEl.style.transform="scale(1.3)",setTimeout(()=>{this.oreIconEl.style.transform="scale(1)"},150)}}class Ey{el;offsetX=0;offsetY=0;constructor(){this.el=document.createElement("div"),this.el.id="ui-layer",this.el.style.cssText="position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;z-index:10;"}sync(e){const t=e.getBoundingClientRect();this.offsetX=t.left,this.offsetY=t.top,this.el.style.left=`${t.left}px`,this.el.style.top=`${t.top}px`,this.el.style.width=`${t.width}px`,this.el.style.height=`${t.height}px`}toLocal(e,t){return{x:e-this.offsetX,y:t-this.offsetY}}}const Ay={info:"#5b9bd5",warn:"#e8a317",error:"#e04848"};class Lo{static pool=[];static active=new Map;static initialized=!1;static POOL_SIZE=6;static DEFAULT_DURATION=3500;static init(e=document.body){if(this.initialized)return;const t=document.createElement("div");t.setAttribute("data-toast-container","true"),t.style.cssText="position:fixed;left:50%;top:14vh;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;z-index:60;",e.appendChild(t);for(let i=0;i<this.POOL_SIZE;i++){const n=document.createElement("div");n.setAttribute("data-toast","true"),n.style.cssText="display:none;padding:10px 16px;border-radius:8px;background:rgba(20,22,28,0.92);color:#fff;font-size:15px;font-weight:600;border-left:4px solid #5b9bd5;white-space:nowrap;user-select:none;box-shadow:0 4px 14px rgba(0,0,0,0.45);backdrop-filter:blur(2px);",t.appendChild(n),this.pool.push(n)}this.initialized=!0}static show(e){this.initialized||this.init();const t=this.pool.find(a=>!this.active.has(a));if(!t)return;const i=e.type??"info",n=e.durationMs??this.DEFAULT_DURATION;t.textContent=e.text,t.style.borderLeftColor=Ay[i],t.style.display="block";const s=t.animate([{opacity:0},{opacity:1}],{duration:150,fill:"forwards",easing:"ease-out"});this.active.set(t,{endAt:performance.now()+n,anim:s})}static update(){const e=performance.now(),t=250;for(const[i]of this.active){if(this.active.get(i).endAt-e>0||i.__fading)continue;i.__fading=!0;const a=i.animate([{opacity:1},{opacity:0}],{duration:t,fill:"forwards",easing:"ease-in"});a.onfinish=()=>{i.style.display="none",i.__fading=!1,this.active.delete(i)}}}}const Cy=Dl.lightning,Io=5,Ry=.12,Py=.05,Ly=.09,Bh=24;class ua{static slots=[];static active=new Map;static poolSize=0;static scene=null;static init(e,t=12){if(!(this.poolSize>0)){this.scene=e;for(let i=0;i<t;i++){const n=new pt;n.visible=!1,e.add(n),this.slots.push(n)}this.poolSize=t}}static spawn(e,t,i=.1){if(!this.scene)return null;const n=this.slots.find(d=>!d.visible&&!this.active.has(d));if(!n)return null;const s=this.buildJitteredPoints(e,t),a=new Dd(s);this.clearSlot(n);const o=new Ma(a,Bh,Ly,6,!1),l=new bt({color:Cy,transparent:!0,opacity:.5});n.add(new K(o,l));const c=new Ma(a,Bh,Py,6,!1),h=new bt({color:16777215,transparent:!0,opacity:1});return n.add(new K(c,h)),n.visible=!0,this.active.set(n,{startAt:performance.now(),duration:i*1e3,coreOpacity:1,glowOpacity:.5,materials:[l,h]}),n}static spawnBurst(e,t,i=8){if(this.scene)for(let n=0;n<i;n++){const s=n/i*Math.PI*2+(Math.random()-.5)*.5,a=t*(.7+Math.random()*.3),o=new w(e.x+Math.cos(s)*a,e.y,e.z+Math.sin(s)*a);this.spawn(e,o)}}static update(){if(!this.scene)return;const e=performance.now();for(const[t,i]of this.active){const n=e-i.startAt;if(n>=i.duration){this.recycle(t,i);continue}const s=n/i.duration;i.materials[0].opacity=i.glowOpacity*(1-s),i.materials[1].opacity=i.coreOpacity*(1-s)}}static recycle(e,t){this.clearSlot(e),e.visible=!1,this.active.delete(e),t.materials.forEach(i=>i.dispose())}static clearSlot(e){for(let t=e.children.length-1;t>=0;t--){const i=e.children[t];i.geometry?.dispose();const n=i.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n?.dispose(),e.remove(i)}}static buildJitteredPoints(e,t){const i=new w().subVectors(t,e),n=i.length();if(n<.001)return[e.clone(),t.clone()];const s=i.clone().normalize(),a=new w(-s.z,0,s.x).normalize(),o=[],l=(e.y+t.y)/2;for(let c=0;c<=Io;c++){const h=c/Io,d=new w().lerpVectors(e,t,h);if(c!==0&&c!==Io){const u=n*Ry,p=(Math.random()*2-1)*u;d.add(a.clone().multiplyScalar(p))}d.y=l,o.push(d)}return o}}const Iy=5,Do=1.2;class Dy{combat;getBuildingById;scene;constructor(e,t){this.combat=e,this.getBuildingById=t}setScene(e){this.scene=e,ua.init(e)}applying=!1;onUnitAttack(e,t,i){if(this.applying)return;const n=this.resolveSourceBuilding(e);if(!n||!n.coreId)return;const s=this.lookupOnAttack(n.coreId,n.type);if(s){this.applying=!0;try{this.applyAttackEffect(s,e,t)}finally{this.applying=!1}}}resolveSourceBuilding(e){if(e instanceof Ri)return e;const t=e.sourceBuildingId;if(t!=null)return this.getBuildingById(t)}lookupOnAttack(e,t){return Ia[e]?.[t]?.onAttack??void 0}applyAttackEffect(e,t,i){switch(e.type){case"chainLightning":{this.combat.applyDamage(i,e.damage,t);const n=this.findChainTargets(i,t.team,e.chains);for(const s of n)this.spawnLightning(i,s),this.combat.applyDamage(s,e.damage,t);break}case"aoe":{const n=this.allEnemiesOf(t.team);for(const s of n)s.alive&&this.dist2D(s.pos,i.pos)<=e.radius&&this.combat.applyDamage(s,e.damage,t);this.spawnLightningBurst(i,e.radius);break}case"ricochet":{const n=this.findChainTargets(i,t.team,e.chains);for(const s of n)this.combat.applyDamage(s,e.damage,t);break}case"lightningChain":{const n=this.findChainTargets(i,t.team,e.chains);let s=i;n.forEach((a,o)=>{const l=e.damage*Math.pow(e.decay,o);this.spawnLightning(s,a),this.combat.applyDamage(a,l,t),s=a});break}case"slow":{i.markCombat();break}}}spawnLightning(e,t){if(!this.scene)return;const i=new w(e.pos.x,Do,e.pos.z),n=new w(t.pos.x,Do,t.pos.z);ua.spawn(i,n)}spawnLightningBurst(e,t){if(!this.scene)return;const i=new w(e.pos.x,Do,e.pos.z);ua.spawnBurst(i,t)}findChainTargets(e,t,i){return this.allEnemiesOf(t).filter(s=>s.alive&&s!==e&&this.dist2D(s.pos,e.pos)<=Iy).sort((s,a)=>this.dist2D(s.pos,e.pos)-this.dist2D(a.pos,e.pos)).slice(0,i)}enemies=[];setEnemies(e){this.enemies=e}allEnemiesOf(e){return this.enemies.filter(t=>t.team!==e)}dist2D(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}auraAccumulator=0;vizAccumulator=0;healedThisSec=new Map;auraTick(e,t,i,n){for(const a of t)a.outOfCombatFor+=e;for(this.auraAccumulator+=e;this.auraAccumulator>=.5;){this.auraAccumulator-=.5;for(const a of t){if(!a.alive)continue;const o=a.sourceBuildingId;if(o==null)continue;const l=i(o);if(!l||!l.coreId)continue;const c=this.lookupAura(l.coreId,l.type);if(!(!c||c.type!=="hot")&&a.outOfCombatFor>=c.afterCombatSec){const h=c.hpPerSec*.5,d=a.hp;a.heal(h);const u=a.hp-d;u>0&&this.healedThisSec.set(a.id,(this.healedThisSec.get(a.id)??0)+u)}}}if(this.vizAccumulator+=e,this.vizAccumulator<1)return;if(this.vizAccumulator=0,!n){this.healedThisSec.clear();return}const s=[];for(const a of t){const o=a.sourceBuildingId;let l=!1;if(a.alive&&o!=null){const h=i(o);if(h&&h.coreId){const d=this.lookupAura(h.coreId,h.type);d&&d.type==="hot"&&a.outOfCombatFor>=d.afterCombatSec&&a.hp<a.maxHp&&(l=!0)}}const c=Math.round(this.healedThisSec.get(a.id)??0);s.push({unitId:a.id,amount:c,selfHealing:l})}this.healedThisSec.clear(),n(s)}lookupAura(e,t){return Ia[e]?.[t]?.aura??void 0}}class Uy{hero;combat;cdLeft=0;onCast;constructor(e,t){this.hero=e,this.combat=t}get cooldownLeft(){return this.cdLeft}canCast(){return this.cdLeft<=0&&this.hero.alive&&!this.hero.dead}get currentCooldownSec(){return pn.cooldownSec+this.sumDelta("shockwaveCooldownDelta")}get currentDamage(){return pn.damage*this.prodMul("shockwaveDamageMul")}get currentRadius(){return pn.radius+this.sumDelta("shockwaveRadiusDelta")}cast(e){if(!this.canCast())return null;const t=this.combat.scanNearestEnemy(this.hero,e,pn.maxRange);if(t){this.hero.facing={x:t.pos.x-this.hero.pos.x,z:t.pos.z-this.hero.pos.z};const o=Math.hypot(this.hero.facing.x,this.hero.facing.z);o>1e-6&&(this.hero.facing.x/=o,this.hero.facing.z/=o),this.hero.syncMesh()}const i=this.hero.facing?.x??0,n=this.hero.facing?.z??1,s=new w(i,0,n).normalize(),a={damage:this.currentDamage,source:this.hero,explosion:{radius:this.currentRadius,hitRadius:pn.hitRadius}};return this.onCast?.(this.hero,s,a),this.cdLeft=this.currentCooldownSec,this.hero.pos.clone()}update(e){this.cdLeft>0&&(this.cdLeft=Math.max(0,this.cdLeft-e))}sumDelta(e){let t=0;for(let i=1;i<=this.hero.heroLevel;i++){const n=Fn.skillUnlocks["lv"+i];n&&typeof n[e]=="number"&&(t+=n[e])}return t}prodMul(e){let t=1;for(let i=1;i<=this.hero.heroLevel;i++){const n=Fn.skillUnlocks["lv"+i];n&&typeof n[e]=="number"&&(t*=n[e])}return t}}class Ny{hero;state="idle";progress=0;elapsed=0;onChannelStart;onProgress;onComplete;onCancel;constructor(e){this.hero=e}get active(){return this.state==="channeling"}get currentProgress(){return this.progress}get secLeft(){return Math.max(0,At.channelSec-this.elapsed)}start(){return this.state!=="idle"||!this.hero.alive||this.hero.dead?!1:(this.state="channeling",this.progress=0,this.elapsed=0,this.onChannelStart?.(),!0)}cancel(){this.state==="channeling"&&(this.reset(),this.onCancel?.())}update(e){if(this.state==="channeling"){if(!this.hero.alive||this.hero.dead){this.cancel();return}this.elapsed+=e,this.progress=Math.min(1,this.elapsed/At.channelSec),this.onProgress?.(this.progress,this.secLeft),this.progress>=1&&(this.state="done",this.onComplete?.(),this.reset())}}reset(){this.state="idle",this.progress=0,this.elapsed=0}}class gr extends sn{coreId;state="idle";floatPhase=Math.random()*Math.PI*2;constructor(e,t,i){super("player",t,i),this.coreId=e,this.hp=1/0,this.mesh=this.buildMesh()}get maxHp(){return 1/0}get interactable(){return this.state==="idle"||this.state==="dropped"}pickup(){this.state!=="socketed"&&(this.state="carried",this.mesh.visible=!1)}drop(e){this.state==="carried"&&(this.state="dropped",this.pos.set(e.x,0,e.z),this.mesh.position.x=e.x,this.mesh.position.z=e.z,this.mesh.visible=!0)}socket(){if(this.state!=="carried")throw new Error(`RelicObject 只能在 carried 态镶嵌，当前 ${this.state}`);this.state="socketed",this.mesh.visible=!1}nameText(){return"遗迹核心"}update(e){(this.state==="idle"||this.state==="dropped")&&(this.floatPhase+=e*2,this.mesh.position.y=1.5+Math.sin(this.floatPhase)*.3)}buildMesh(){const e=new Tl(1.2,0),t=Dl[this.coreId],i=new ni({color:t,emissive:t,emissiveIntensity:1.2}),n=new K(e,i);return n.position.set(this.pos.x,1.5,this.pos.z),this.nameLabel=tn(this.nameText(),2.4),this.coordLabel=nn(1.2,1,this.coordText()),n.add(this.nameLabel),n.add(this.coordLabel),n}}class Oy{mesh;floatPhase=0;mode="follow";socketedBaseY=0;constructor(e){const t=Dl[e],i=new Ct(.5,16,16),n=new ni({color:t,emissive:t,emissiveIntensity:1.5,transparent:!0,opacity:.9});this.mesh=new K(i,n);const s=new Ct(.7,16,16),a=new ni({color:t,emissive:t,emissiveIntensity:.6,transparent:!0,opacity:.3,side:Jt}),o=new K(s,a);this.mesh.add(o)}followLeader(e){this.mode="follow",this.mesh.position.set(e.x,4,e.z)}placeOnGround(e){this.mode="ground",this.mesh.position.set(e.x,1,e.z)}socketTo(e,t){this.mode="socketed",this.socketedBaseY=t+1,this.mesh.position.set(0,this.socketedBaseY,0),(e.mesh??e).add(this.mesh)}update(e){this.floatPhase+=e*2;const t=this.mode==="follow"?4:this.mode==="ground"?1:this.socketedBaseY;this.mesh.position.y=t+Math.sin(this.floatPhase)*.3}}class zy{el;btn;label;cdMask;cdText;constructor(e){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;left:50%;bottom:30px;transform:translateX(calc(-50% + 80px));z-index:10;",this.btn=document.createElement("button"),this.btn.style.cssText=`
      padding:14px 24px;font-size:16px;border-radius:12px;
      border:2px solid rgba(255,255,255,0.45);
      background:#5d4ba8;color:#ffcc33;font-family:sans-serif;min-width:120px;
      box-shadow:0 0 8px rgba(255,204,51,0.5);
      position:relative;overflow:hidden;
    `,this.btn.addEventListener("click",e),this.label=document.createElement("span"),this.label.style.cssText="pointer-events:none;",this.label.textContent="🌟 流星爆",this.cdMask=document.createElement("div"),this.cdMask.style.cssText="position:absolute;right:0;top:0;bottom:0;width:0;background:rgba(0,0,0,0.6);pointer-events:none;z-index:1;display:none;",this.cdText=document.createElement("div"),this.cdText.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:900;color:#fff;text-shadow:1px 1px 2px #000;pointer-events:none;z-index:2;display:none;",this.btn.appendChild(this.label),this.btn.appendChild(this.cdMask),this.btn.appendChild(this.cdText),this.el.appendChild(this.btn)}setReady(e,t){const i=e&&t;this.btn.disabled=!i,this.btn.style.background=i?"#5d4ba8":"#666666",this.btn.style.color="#ffcc33",this.btn.style.opacity=i?"1":"0.5"}setCooldown(e,t){e>0?(this.cdMask.style.width=`${Math.min(100,e*100)}%`,this.cdText.textContent=String(Math.ceil(t)),this.cdMask.style.display="block",this.cdText.style.display="block",this.label.textContent=" "):(this.cdMask.style.width="0",this.cdMask.style.display="none",this.cdText.style.display="none",this.label.textContent="🌟 流星爆")}setDead(e){e&&(this.btn.disabled=!0,this.label.textContent="💀 已阵亡",this.btn.style.background="#3a3a3a",this.btn.style.color="#fff",this.btn.style.opacity="0.4",this.cdMask.style.display="none",this.cdText.style.display="none")}}class ky{el;btn;label;fill;mode="recall";constructor(e){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;left:50%;bottom:30px;transform:translateX(calc(-50% - 80px));z-index:10;",this.btn=document.createElement("button"),this.btn.style.cssText=`
      padding:14px 24px;font-size:16px;border-radius:12px;
      border:2px solid rgba(255,255,255,0.45);
      background:#22c55e;color:#fff;font-family:sans-serif;min-width:120px;
      box-shadow:0 0 8px rgba(34,197,94,0.5);
      position:relative;overflow:hidden;
    `,this.btn.addEventListener("click",e),this.label=document.createElement("span"),this.label.style.cssText="pointer-events:none;",this.label.textContent="🏰 回城",this.fill=document.createElement("div"),this.fill.className="recall-fill",this.fill.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,255,255,0.45);pointer-events:none;z-index:1;display:none;",this.btn.appendChild(this.label),this.btn.appendChild(this.fill),this.el.appendChild(this.btn)}get currentMode(){return this.mode}setMode(e){this.mode!==e&&(this.mode=e,e==="pack"?(this.btn.style.background="#ff6633",this.btn.style.boxShadow="0 0 8px rgba(255,102,51,0.5)",this.label.textContent="📦 收起基地",this.fill.style.display="none"):(this.btn.style.background="#22c55e",this.btn.style.boxShadow="0 0 8px rgba(34,197,94,0.5)",this.label.textContent="🏰 回城"))}setReady(e){this.btn.disabled=!e,this.mode==="pack"?(this.btn.style.background="#ff6633",this.btn.style.opacity="1"):(this.btn.style.background=e?"#22c55e":"#666666",this.btn.style.opacity=e?"1":"0.5"),this.btn.style.color="#fff"}setChanneling(e,t){this.mode!=="pack"&&(e>0&&e<1?(this.fill.style.width=`${Math.min(100,e*100)}%`,this.fill.style.display="block",this.label.textContent=`🔄 回城中 ${Math.ceil(t)}`):(this.fill.style.width="0",this.fill.style.display="none",this.label.textContent="🏰 回城"))}setDead(e){e&&(this.btn.disabled=!0,this.label.textContent="💀 已阵亡",this.btn.style.background="#3a3a3a",this.btn.style.color="#fff",this.btn.style.opacity="0.4",this.fill.style.display="none")}}const By="#ffcc33",Fy="#4a4a55",Hy="#1e1e28",Fh=80,Hh="production-toggle-style";function Gy(){if(document.getElementById(Hh))return;const r=document.createElement("style");r.id=Hh,r.textContent=`
    @keyframes toggle-glow-flow {
      to { stroke-dashoffset: -283; }
    }
    .toggle-glow-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      pointer-events: none;
      z-index: 0;
    }
    .toggle-glow-rect {
      fill: none;
      stroke-linecap: round;
      /* 外层金弧：亮弧 80 + 间隙 203，总 283 = rect 周长（78×78 r=17 ≈ 283，无缝循环） */
      stroke-dasharray: 80 203;
      animation: toggle-glow-flow 1.2s linear infinite;
      /* 多层 drop-shadow 叠加发光：6px 强光晕 + 外层弥散光，让流光醒目 */
      filter:
        drop-shadow(0 0 6px rgba(255, 204, 51, 1))
        drop-shadow(0 0 10px rgba(255, 204, 51, 0.6))
        drop-shadow(0 0 16px rgba(255, 204, 51, 0.3));
    }
    .toggle-glow-highlight {
      fill: none;
      stroke-linecap: round;
      /* 内层白色高光弧：与金弧同步流动（同 dasharray + 同动画），叠加在金弧内侧提亮 */
      stroke-dasharray: 80 203;
      animation: toggle-glow-flow 1.2s linear infinite;
    }
    .toggle-btn {
      transition: transform 0.08s ease-out;
    }
    .toggle-btn.pressed {
      transform: scale(0.9);
    }
    .toggle-info {
      font-size: 10px;
      font-weight: 600;
      font-family: sans-serif;
      color: #ccc;
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 3px;
      margin-top: 3px;
      margin-bottom: 9px;
    }
    .toggle-info .toggle-cost {
      display: inline-flex;
      align-items: center;
      gap: 1px;
      color: #ffcc33;
    }
    .toggle-progress-wrap {
      position: absolute;
      left: 6px;
      right: 6px;
      bottom: 4px;
      height: 5px;
      background: rgba(0,0,0,0.5);
      border-radius: 3px;
      overflow: hidden;
      pointer-events: none;
    }
    .toggle-progress {
      height: 100%;
      width: 100%;
      background: #22c55e;
      border-radius: 3px;
      transform-origin: left center;
      transform: scaleX(0);
    }
    .toggle-idle-text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 3px;
      text-align: center;
      font-size: 9px;
      font-weight: 600;
      font-family: sans-serif;
      pointer-events: none;
    }
  `,document.head.appendChild(r)}class Vy{el;onToggle;constructor(e){this.onToggle=e,Gy(),this.el=document.createElement("div"),this.el.style.cssText="position:absolute;left:12px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px;z-index:10;",this.el.style.display="none"}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}render(e){const t=new Set(e.map(s=>s.key)),i=Array.from(this.el.querySelectorAll(".toggle-wrap"));for(const s of i){const a=s.getAttribute("data-key");t.has(a)||s.remove()}let n=null;for(const s of e){const o=this.el.querySelector(`.toggle-wrap[data-key="${Wy(s.key)}"]`)??this.createWrap(s);this.applyState(o,s);const l=n?n.nextSibling:this.el.firstChild;o!==l&&(n?this.el.insertBefore(o,n.nextSibling):this.el.insertBefore(o,this.el.firstChild)),n=o}}createWrap(e){const t=document.createElement("div");t.className="toggle-wrap",t.setAttribute("data-key",e.key),t.style.cssText=`position:relative;width:${Fh}px;height:${Fh}px;`;const i="http://www.w3.org/2000/svg",n=document.createElementNS(i,"svg");n.setAttribute("class","toggle-glow-svg"),n.setAttribute("viewBox","0 0 80 80"),n.setAttribute("preserveAspectRatio","none");const s={x:"1",y:"1",width:"78",height:"78",rx:"17",ry:"17"},a=document.createElementNS(i,"rect");a.setAttribute("class","toggle-glow-rect"),a.setAttribute("stroke","#ffcc33"),a.setAttribute("stroke-width","6");for(const[f,_]of Object.entries(s))a.setAttribute(f,_);n.appendChild(a);const o=document.createElementNS(i,"rect");o.setAttribute("class","toggle-glow-highlight"),o.setAttribute("stroke","#ffffff"),o.setAttribute("stroke-width","4");for(const[f,_]of Object.entries(s))o.setAttribute(f,_);n.appendChild(o),t.appendChild(n);const l=document.createElement("button");l.className="toggle-btn",l.type="button",l.style.cssText=`width:100%;height:100%;border-radius:12px;background:${Hy};border:2px solid rgba(255,255,255,0.45);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:1;outline:none;`,l.style.appearance="none",l.style.webkitAppearance="none";const c=document.createElement("img");c.className="toggle-icon",c.src=e.iconDataUri,c.style.cssText="width:40px;height:40px;pointer-events:none;",c.alt="",l.appendChild(c);const h=document.createElement("span");h.className="toggle-state",h.style.cssText="position:absolute;top:2px;right:4px;font-size:9px;font-weight:700;font-family:sans-serif;pointer-events:none;padding:1px 3px;border-radius:4px;background:rgba(0,0,0,0.5);",l.appendChild(h);const d=document.createElement("div");d.className="toggle-info",l.appendChild(d);const u=document.createElement("div");u.className="toggle-progress-wrap",u.style.display="none";const p=document.createElement("div");p.className="toggle-progress",u.appendChild(p),l.appendChild(u);const g=document.createElement("div");g.className="toggle-idle-text",g.style.display="none",l.appendChild(g),t.appendChild(l);const v=()=>{l.classList.add("pressed"),this.onToggle(e.key)},m=()=>{l.classList.remove("pressed")};return l.addEventListener("pointerdown",v),l.addEventListener("pointerup",m),l.addEventListener("pointerleave",m),l.addEventListener("pointercancel",m),t}applyState(e,t){const i=String(t.isPaused);if(e.getAttribute("data-paused")!==i){e.setAttribute("data-paused",i);const c=e.querySelector(".toggle-state"),h=e.querySelector(".toggle-glow-svg"),d=e.querySelector(".toggle-icon");t.isPaused?(c.textContent="OFF",c.style.color=Fy,h.style.display="none",d.style.opacity="0.3"):(c.textContent="ON",c.style.color=By,h.style.display="block",d.style.opacity="1")}const n=e.querySelector(".toggle-progress-wrap"),s=e.querySelector(".toggle-progress"),a=e.querySelector(".toggle-idle-text"),o=t.progress??0;o>0?(n.style.display="block",s.style.transform=`scaleX(${Math.min(1,o)})`,a.style.display="none"):(n.style.display="none",!t.isPaused&&t.idleReason?(a.style.display="block",t.idleReason==="full"?(a.textContent="已满员",a.style.color="#888888"):(a.textContent="矿石不足",a.style.color="#ff6644")):a.style.display="none");const l=`${t.unitCount??0}/${t.unitCap??0}|${t.cost??0}`;if(e.getAttribute("data-info")!==l){e.setAttribute("data-info",l);const c=e.querySelector(".toggle-info"),h=t.unitCount??0,d=t.unitCap??0,u=t.cost??0;c.innerHTML=`<span>${h}/${d}</span><span class="toggle-cost">${ts(10)}${u}</span>`}}}function Wy(r){return/^[A-Za-z0-9_-]+$/.test(r)?r:typeof CSS<"u"&&CSS.escape?CSS.escape(r):r.replace(/[^A-Za-z0-9_-]/g,e=>"\\"+e)}class li{static uiLayer=null;el;titleEl;bodyEl;constructor(){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);background:rgba(0,0,0,0.7);color:#fff;padding:12px 16px;border-radius:10px;font:500 14px sans-serif;text-align:center;z-index:10;display:none;flex-direction:column;gap:8px;min-width:200px;will-change:left,top;",this.titleEl=document.createElement("div"),this.titleEl.style.cssText="font-weight:600;margin-bottom:4px;",this.el.appendChild(this.titleEl),this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="display:flex;flex-direction:column;gap:6px;",this.el.appendChild(this.bodyEl)}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}isVisible(){return this.el.style.display!=="none"}anchorTo(e,t,i){const n=li.uiLayer,s=n?n.toLocal(e,t).x:e,a=n?n.toLocal(e,t).y:t;this.el.style.left=`${s}px`,this.el.style.top=`${a}px`,this.el.style.transform=i?"translate(-50%,0)":"translate(-50%,-100%)"}setTitle(e){this.titleEl.innerHTML=e}setButtons(e){this.bodyEl.innerHTML="";for(const t of e){const i=this.createButton(t);this.bodyEl.appendChild(i)}}setBody(e){this.bodyEl.innerHTML=e}clearBody(){this.bodyEl.innerHTML=""}appendHtml(e){this.bodyEl.insertAdjacentHTML("beforeend",e)}appendButtons(e){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:6px;margin-top:4px;";for(const i of e){const n=this.createButton(i);t.appendChild(n)}this.bodyEl.appendChild(t)}createButton(e){const t=document.createElement("button");return t.style.cssText="padding:8px 16px;font-size:14px;border-radius:8px;border:none;background:#4488ff;color:#fff;cursor:pointer;",e.cost!=null?t.innerHTML=`${e.label} ${ts(14)}${e.cost}`:t.textContent=e.label,e.id&&(t.id=e.id),t.disabled=!!e.disabled,e.disabled&&(t.style.background="#666666",t.style.cursor="not-allowed",e.cost!=null&&(t.style.color="#ff8888")),t.onclick=()=>{t.disabled||e.onClick()},t}syncButtonAffordability(e,t){const i=this.bodyEl.querySelector(`#${e}`);i&&(i.disabled=!t,i.style.background=t?"#4488ff":"#666666",i.style.cursor=t?"pointer":"not-allowed",i.style.color=t?"#fff":"#ff8888")}}class Xy extends li{render(e){this.setTitle("回城中"),this.clearBody();const t=Math.round(e.progress*100);this.appendHtml(`<div style="background:#444;height:10px;border-radius:5px;overflow:hidden;margin:4px 0;"><div style="background:#22c55e;height:100%;width:${t}%;"></div></div>`),this.appendHtml(`<div style="font-size:12px;color:#88ff88">${e.remainingSec.toFixed(1)}s</div>`)}}class qy extends li{ccSignature="";render(e){this.setTitle(`指挥中心 ${Ha(e.level)}`);const t=`${e.revive.state}|${e.level}|${e.isMaxLevel}|${e.worker.isProducing}|${e.worker.cap}|${e.isPaused}`;t!==this.ccSignature?(this.ccSignature=t,this.clearBody(),this.buildReviveRegion(e),this.buildWorkerRegion(e),this.buildButtons(e)):(this.updateReviveRegion(e),this.updateWorkerRegion(e),this.updateReviveButton(e),e.isMaxLevel||this.syncUpgrade(e.canUpgrade))}buildReviveRegion(e){if(e.revive.state==="reviving"){this.appendHtml(`<div id="cc-revive-text" style="font-size:12px;opacity:0.9">复活中 ${e.revive.timer.toFixed(1)}/${e.revive.duration.toFixed(1)}s</div>`);const t=(1-e.revive.timer/e.revive.duration)*100;this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;margin-bottom:4px;"><div id="cc-revive-bar" style="background:#44aa66;height:100%;width:${t}%;"></div></div>`)}}updateReviveRegion(e){if(e.revive.state!=="reviving")return;const t=this.bodyEl.querySelector("#cc-revive-bar"),i=this.bodyEl.querySelector("#cc-revive-text");t&&(t.style.width=`${(1-e.revive.timer/e.revive.duration)*100}%`),i&&(i.textContent=`复活中 ${e.revive.timer.toFixed(1)}/${e.revive.duration.toFixed(1)}s`)}buildWorkerRegion(e){const t=e.worker,i=`<span style="opacity:0.85">· 单价 ${ts(12)} ${t.unitCost}</span>`;if(t.isProducing)this.appendHtml(`<div id="cc-worker-status" style="font-size:12px;opacity:0.9">正在生产：农民 ${i}</div>`),this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;margin:4px 0;"><div id="cc-worker-bar" style="background:#44aa66;height:100%;width:${t.progress*100}%;"></div></div>`),this.appendHtml(`<div id="cc-worker-text" style="font-size:11px;opacity:0.7">${t.remainingSec.toFixed(1)}/${t.prodTimeSec.toFixed(1)}s · 农民 ${t.count}/${t.cap}</div>`);else{const n=e.isPaused?"已暂停":"待生产";this.appendHtml(`<div id="cc-worker-status" style="font-size:12px;opacity:0.7">${n} · 农民 ${t.count}/${t.cap} ${i}</div>`)}}updateWorkerRegion(e){if(!e.worker.isProducing)return;const t=this.bodyEl.querySelector("#cc-worker-bar"),i=this.bodyEl.querySelector("#cc-worker-text");t&&(t.style.width=`${e.worker.progress*100}%`),i&&(i.textContent=`${e.worker.remainingSec.toFixed(1)}/${e.worker.prodTimeSec.toFixed(1)}s · 农民 ${e.worker.count}/${e.worker.cap}`)}updateReviveButton(e){e.revive.state!=="reviving"&&this.syncButtonAffordability("cc-revive-btn",e.revive.canRequest)}syncUpgrade(e){this.syncButtonAffordability("cc-upgrade-btn",e)}buildButtons(e){const t=[];t.push({label:e.isPaused?"继续生产":"暂停生产",onClick:e.onTogglePause}),e.isMaxLevel?t.push({label:"已满级",disabled:!0,onClick:()=>{}}):t.push({label:"升级",cost:e.upgradeCost,disabled:!e.canUpgrade,onClick:e.onUpgrade,id:"cc-upgrade-btn"}),e.revive.state==="reviving"?t.push({label:"复活中",disabled:!0,onClick:()=>{}}):t.push({label:"复活英雄",cost:e.revive.cost,disabled:!e.revive.canRequest,onClick:e.onRevive,id:"cc-revive-btn"}),this.appendButtons(t)}}class $y extends li{prodSignature="";render(e){this.setTitle(`${e.label} ${Ha(e.level)}`);const t=e.production,i=`${t.isProducing}|${t.unitLabel}|${t.prodTimeSec}|${t.unitCap}|${e.isPaused}|${e.socketedCoreLabel??""}|${e.canSocket}|${e.hasCore}`;i!==this.prodSignature?(this.prodSignature=i,this.clearBody(),this.buildProdRegion(t),this.buildButtons(e)):(this.updateProdRegion(t),e.isMaxLevel||this.syncUpgrade(e.canUpgrade))}buildProdRegion(e){const t=`<span style="opacity:0.85">· 单价 ${ts(12)} ${e.unitCost}</span>`;if(e.isProducing){this.appendHtml(`<div id="pp-status" style="font-size:12px;opacity:0.9">正在生产：${e.unitLabel} ${t}</div>`),this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;margin:4px 0;"><div id="pp-bar" style="background:#4488ff;height:100%;width:${e.progress*100}%;"></div></div>`);const i=e.prodTimeSec*(1-e.progress);this.appendHtml(`<div id="pp-text" style="font-size:11px;opacity:0.7">${i.toFixed(1)}/${e.prodTimeSec.toFixed(1)}s · 容量 ${e.unitCount}/${e.unitCap}</div>`)}else this.appendHtml(`<div id="pp-status" style="font-size:12px;opacity:0.7">待生产 · 容量 ${e.unitCount}/${e.unitCap} ${t}</div>`)}updateProdRegion(e){const t=this.bodyEl.querySelector("#pp-bar"),i=this.bodyEl.querySelector("#pp-text");if(t&&(t.style.width=`${e.progress*100}%`),i){const n=e.prodTimeSec*(1-e.progress);i.textContent=`${n.toFixed(1)}/${e.prodTimeSec.toFixed(1)}s · 容量 ${e.unitCount}/${e.unitCap}`}}buildButtons(e){const t=[];t.push({label:e.isPaused?"继续生产":"暂停生产",onClick:e.onTogglePause}),e.isMaxLevel?t.push({label:"已满级",disabled:!0,onClick:()=>{}}):t.push({label:"升级",cost:e.upgradeCost,disabled:!e.canUpgrade,onClick:e.onUpgrade,id:"pp-upgrade-btn"}),e.socketedCoreLabel?this.appendHtml(`<div style="font-size:12px;color:#ffd166;font-weight:600">✦ 已镶嵌：${e.socketedCoreLabel}</div>`):t.push({label:"镶嵌核心",disabled:!e.canSocket||!e.hasCore,onClick:e.onSocket}),this.appendButtons(t)}syncUpgrade(e){this.syncButtonAffordability("pp-upgrade-btn",e)}}class Yy extends li{render(e){this.setTitle(`防御炮塔 ${Ha(e.level)}`),this.clearBody();const t=[];e.isMaxLevel?t.push({label:"已满级",disabled:!0,onClick:()=>{}}):t.push({label:"升级",cost:e.upgradeCost,disabled:!e.canUpgrade,onClick:e.onUpgrade,id:"turret-upgrade-btn"}),e.socketedCoreLabel?this.appendHtml(`<div style="font-size:12px;color:#ffd166;font-weight:600">✦ 已镶嵌：${e.socketedCoreLabel}</div>`):t.push({label:"镶嵌核心",disabled:!e.canSocket||!e.hasCore,onClick:e.onSocket,id:"turret-socket-btn"}),this.appendButtons(t)}syncUpgrade(e){this.syncButtonAffordability("turret-upgrade-btn",e)}}class jy extends li{render(e){if(this.setTitle(e.label),this.clearBody(),this.appendHtml(`<div style="font-size:12px;opacity:0.8">状态：${e.conditionLabel}</div>`),e.starLevel>1){const i="★".repeat(e.starLevel-1);this.appendHtml(`<div style="font-size:13px;color:#ffd24d">星级：${i}（修出 Lv${e.starLevel} 建筑）</div>`)}this.appendHtml(`<div style="font-size:12px;opacity:0.7">修复时间：${e.durationSec}s</div>`);const t=[{label:"修复",cost:e.cost,disabled:!e.canAfford,onClick:e.onRepair,id:"wreck-repair-btn"}];this.appendButtons(t)}syncRepair(e){this.syncButtonAffordability("wreck-repair-btn",e)}}class Zy extends li{render(e){this.setTitle(e.label),this.clearBody();const t=e.status==="repairing"?"#4488ff":"#888888",i=Math.round(e.progress*100);this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;margin:4px 0;"><div style="background:${t};height:100%;width:${i}%;"></div></div>`);const n=e.status==="repairing"?`修理中 · ${e.remainingSec.toFixed(0)}s`:`暂停 · 剩余 ${e.remainingSec.toFixed(0)}s`,s=e.status==="repairing"?"#88ccff":"#ffaa44";this.appendHtml(`<div style="font-size:12px;color:${s}">${n}</div>`)}}class Ky extends li{render(e){this.setTitle(e.title),this.clearBody();const t=Math.round(e.progress*100);this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;margin:4px 0;"><div style="background:#4488ff;height:100%;width:${t}%;"></div></div>`),this.appendHtml(`<div style="font-size:12px;color:#88ccff">${e.remainingSec.toFixed(1)}s</div>`)}}const Jy=80;class Qy extends li{constructor(){super(),this.el.style.background="transparent",this.el.style.padding="0",this.el.style.minWidth="0",this.el.style.gap="0"}render(e){this.clearBody();const t=Math.max(0,Math.min(100,Math.round(e.progress*100))),i=e.team==="player"?"#4488ff":"#ff4444";this.appendHtml(`<div style="background:#444;height:6px;border-radius:3px;overflow:hidden;width:${Jy}px;border:1px solid #000;box-sizing:border-box;"><div style="background:${i};height:100%;width:${t}%;"></div></div>`)}}class ex extends li{renderProgress(e){this.setTitle(e.label),this.clearBody();const t=e.progress*100;this.appendHtml(`<div style="background:#444;height:8px;border-radius:4px;overflow:hidden;margin:4px 0;"><div style="background:#ffcc44;height:100%;width:${t}%;transition:width 0.1s;"></div></div>`),this.appendHtml(`<div style="font-size:11px;opacity:0.7">${e.timer.toFixed(1)}/${e.duration.toFixed(1)}s</div>`)}renderBlocked(e){this.setTitle(""),this.clearBody(),this.appendHtml(`<div style="font-size:13px;opacity:0.8">${e}</div>`)}renderInfo(e,t,i){this.setTitle(e),this.clearBody(),this.appendHtml(`<div style="font-size:12px;opacity:0.85;line-height:1.5;">${t}</div>`),this.appendButtons([{label:"拾取核心",onClick:i}])}}class tx extends li{constructor(){super(),this.el.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:none;flex-direction:column;align-items:center;justify-content:center;font:500 14px sans-serif;z-index:100;padding:40px 20px;"}render(e){this.clearBody(),this.appendHtml('<div style="font:600 18px sans-serif;margin-bottom:16px;">── 建筑管理 ──</div>');const t=this.el.querySelector('[data-action="close"]');t&&t.remove(),this.el.querySelectorAll("[data-manage-row]").forEach(n=>n.remove());const i=document.createElement("button");i.setAttribute("data-action","close"),i.textContent="✕ 关闭",i.style.cssText="position:absolute;top:12px;right:12px;padding:6px 12px;border:none;border-radius:6px;background:#666;color:#fff;cursor:pointer;",i.onclick=e.onClose,this.el.appendChild(i);for(const n of e.buildings){const s=document.createElement("div");s.setAttribute("data-manage-row",""),s.style.cssText="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #333;min-width:340px;";const a=document.createElement("div");a.style.cssText="flex:1;text-align:left;",a.innerHTML=`${n.label} ${Ha(n.level)} <span style="opacity:0.7;font-size:12px">[核心:${n.coreLabel}]</span>`,s.appendChild(a);const o=document.createElement("button");o.setAttribute("data-action","upgrade"),o.style.cssText="padding:6px 12px;font-size:13px;border:none;border-radius:6px;background:#4488ff;color:#fff;cursor:pointer;min-width:110px;",n.isMaxLevel?(o.textContent="已满级",o.disabled=!0,o.style.background="#666",o.style.cursor="not-allowed"):(o.innerHTML=`升级 ${ts(13)}${n.upgradeCost}`,o.dataset.cost=String(n.upgradeCost),o.disabled=!n.canUpgrade,n.canUpgrade||(o.style.background="#666",o.style.color="#ff8888",o.style.cursor="not-allowed"),o.onclick=n.onUpgrade),s.appendChild(o),this.el.appendChild(s)}}syncAllUpgrades(e){const t=this.el.querySelectorAll('button[data-action="upgrade"]');for(const i of t){const n=Number(i.dataset.cost??0);if(!n)continue;const s=e>=n;i.disabled=!s,i.style.background=s?"#4488ff":"#666",i.style.color=s?"#fff":"#ff8888",i.style.cursor=s?"pointer":"not-allowed"}}}class ix{el;sig="";constructor(){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;right:20px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.8);color:#fff;padding:12px;border-radius:12px;font:500 14px sans-serif;z-index:10;display:none;text-align:center;min-width:110px;"}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}render(e){e.state!==this.sig&&(this.sig=e.state,this.buildStructure(e)),this.updateDynamic(e)}buildStructure(e){if(this.el.innerHTML="",e.state==="reviving")this.el.innerHTML='<div id="rb-text" style="font-size:12px;opacity:0.9;margin-bottom:6px;">复活中</div><div style="background:#444;width:80px;height:6px;border-radius:3px;overflow:hidden;margin:0 auto 4px;"><div id="rb-bar" style="background:#44aa66;height:100%;width:0%;"></div></div><div id="rb-timer" style="font-size:13px;">0.0/0.0s</div>';else{const t=document.createElement("button");t.id="rb-btn",t.style.cssText="padding:10px 16px;font-size:14px;border:none;border-radius:8px;color:#fff;",t.innerHTML=`💀 复活 ${ts(14)}${e.cost}`,t.onclick=()=>{t.disabled||e.onRequest()},this.el.appendChild(t)}}updateDynamic(e){if(e.state==="reviving"){const i=this.el.querySelector("#rb-bar"),n=this.el.querySelector("#rb-timer"),s=e.duration>0?(1-e.timer/e.duration)*100:0;i&&(i.style.width=`${s}%`),n&&(n.textContent=`${e.timer.toFixed(1)}/${e.duration.toFixed(1)}s`);return}const t=this.el.querySelector("#rb-btn");t&&(t.disabled=!e.canRequest,t.style.background=e.canRequest?"#44aa66":"#666",t.style.cursor=e.canRequest?"pointer":"not-allowed",t.style.color=e.canRequest?"#fff":"#ff8888")}}class nx{state="idle";reviveTimer=0;reviveDuration=0;canRequest(e,t,i){return!t.alive&&i&&this.state==="idle"&&e.balance>=zt.revive.cost}request(e,t){e.spend(zt.revive.cost),this.state="reviving";const i="lv"+t;this.reviveDuration=zt.revive.timeByCcLevel[i]??zt.revive.timeByCcLevel.lv3,this.reviveTimer=this.reviveDuration}update(e,t){this.state==="reviving"&&(this.reviveTimer-=e,this.reviveTimer<=0&&(this.reviveTimer=0,this.state="idle",t()))}get progress(){return this.reviveDuration===0?0:1-this.reviveTimer/this.reviveDuration}}class sx{group;fill;ring;constructor(e){const t=Math.max(.01,e);this.group=new pt,this.group.position.y=.3,this.group.visible=!0;const i=new bn(t,64),n=new bt({color:16777215,transparent:!0,opacity:.05,depthWrite:!1});this.fill=new K(i,n),this.fill.rotation.x=-Math.PI/2,this.fill.renderOrder=0,this.group.add(this.fill);const s=128,a=new Float32Array((s+1)*3);for(let c=0;c<=s;c++){const h=c/s*Math.PI*2;a[c*3]=Math.cos(h)*t,a[c*3+1]=0,a[c*3+2]=Math.sin(h)*t}const o=new Mt;o.setAttribute("position",new si(a,3));const l=new El({color:16777215,transparent:!0,opacity:.4,dashSize:.6,gapSize:.4,depthWrite:!1});this.ring=new xl(o,l),this.ring.computeLineDistances(),this.ring.position.y=.001,this.ring.renderOrder=1,this.group.add(this.ring)}setPosition(e,t){this.group.position.x=e,this.group.position.z=t}dispose(){this.fill.geometry.dispose(),this.fill.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.parent&&this.group.parent.remove(this.group)}}class ca{group;fill;ring;constructor(e){const t=Math.max(.01,e);this.group=new pt,this.group.position.y=.3,this.group.visible=!0;const i=new bn(t,64),n=new bt({color:16729156,transparent:!0,opacity:.05,depthWrite:!1});this.fill=new K(i,n),this.fill.rotation.x=-Math.PI/2,this.fill.renderOrder=0,this.group.add(this.fill);const s=128,a=new Float32Array((s+1)*3);for(let c=0;c<=s;c++){const h=c/s*Math.PI*2;a[c*3]=Math.cos(h)*t,a[c*3+1]=0,a[c*3+2]=Math.sin(h)*t}const o=new Mt;o.setAttribute("position",new si(a,3));const l=new El({color:16729156,transparent:!0,opacity:.4,dashSize:.6,gapSize:.4,depthWrite:!1});this.ring=new xl(o,l),this.ring.computeLineDistances(),this.ring.position.y=.001,this.ring.renderOrder=1,this.group.add(this.ring)}setPosition(e,t){this.group.position.x=e,this.group.position.z=t}dispose(){this.fill.geometry.dispose(),this.fill.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.parent&&this.group.parent.remove(this.group)}}class rx{group;fill;ring;radius;color;constructor(e,t){const i=Math.max(.01,e);this.radius=i,this.color=t,this.group=new pt,this.group.position.y=.3,this.group.visible=!0;const n=new bn(i,64),s=new bt({color:t,transparent:!0,opacity:.05,depthWrite:!1});this.fill=new K(n,s),this.fill.rotation.x=-Math.PI/2,this.fill.renderOrder=0,this.group.add(this.fill);const a=128,o=new Float32Array((a+1)*3);for(let h=0;h<=a;h++){const d=h/a*Math.PI*2;o[h*3]=Math.cos(d)*i,o[h*3+1]=0,o[h*3+2]=Math.sin(d)*i}const l=new Mt;l.setAttribute("position",new si(o,3));const c=new El({color:t,transparent:!0,opacity:.4,dashSize:.6,gapSize:.4,depthWrite:!1});this.ring=new xl(l,c),this.ring.computeLineDistances(),this.ring.position.y=.001,this.ring.renderOrder=1,this.group.add(this.ring)}setPosition(e,t){this.group.position.x=e,this.group.position.z=t}dispose(){this.fill.geometry.dispose(),this.fill.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.parent&&this.group.parent.remove(this.group)}}class ax{group;disc;ring;constructor(e){this.group=new pt,this.group.position.y=.3,this.group.visible=!1;const t=new bn(Math.max(.01,e),32),i=new bt({color:16763972,transparent:!0,opacity:.5,depthWrite:!1});this.disc=new K(t,i),this.disc.rotation.x=-Math.PI/2,this.disc.renderOrder=0,this.group.add(this.disc);const n=new Ws(Math.max(.01,e-.05),Math.max(.02,e),32),s=new bt({color:16763972,transparent:!0,opacity:.6,depthWrite:!1});this.ring=new K(n,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.001,this.ring.renderOrder=1,this.group.add(this.ring)}show(){this.group.visible=!0}hide(){this.group.visible=!1}dispose(){this.disc.geometry.dispose(),this.disc.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose()}}class Gh extends sn{condition;vehicleType;starLevel;state="idle";repairTimer=0;rangeRing;constructor(e,t,i,n,s=1){super("player",i,n),this.condition=e,this.vehicleType=t,this.starLevel=s,this.hp=1/0,this.mesh=this.buildMesh()}get maxHp(){return 1/0}get interactable(){return this.state==="idle"}get repairDuration(){return Gt.condition[this.condition].repairSec}get repairCost(){return Gt.condition[this.condition].repairCost}startRepair(){this.state==="idle"&&(this.state="repairing",this.repairTimer=this.repairDuration,this.rangeRing.show())}pause(){this.state==="repairing"&&(this.state="paused")}resume(){this.state==="paused"&&(this.state="repairing")}nameText(){return"废弃车"}update(e){this.state==="repairing"&&(this.repairTimer=Math.max(0,this.repairTimer-e),this.repairTimer<=0&&(this.state="done",this.mesh.visible=!1))}dispose(){const e=en.instance;this.mesh.traverse(t=>{if(!(t===this.nameLabel||t===this.coordLabel||t===this.starLabel)){if(t instanceof K){t.geometry&&t.geometry.dispose();const i=Array.isArray(t.material)?t.material:[t.material];for(const n of i)n&&!e.isCachedMaterial(n)&&n.dispose()}else if(t instanceof Sn){const i=t.material;i&&!e.isCachedMaterial(i)&&i.dispose()}}}),Pl(this.nameLabel,this.coordLabel),this.starLabel&&wi.dispose(this.starLabel),this.rangeRing.dispose()}buildMesh(){const t=en.instance.wreck(this.vehicleType,this.condition);t.position.set(this.pos.x,0,this.pos.z);const i={rifleBarracks:"步枪兵营",flamerBarracks:"喷火兵营",mechFactory:"机甲工厂",turret:"炮塔"},n={worn:"废弃",damaged:"损坏",intact:"完好"};return this.nameLabel=tn(`${n[this.condition]}${i[this.vehicleType]}·车`,2.8),this.coordLabel=nn(1.6,1,this.coordText()),t.add(this.nameLabel),t.add(this.coordLabel),this.starLabel=wi.create(),this.starLabel.position.y=2.8+.9,wi.setLevel(this.starLabel,this.starLevel),t.add(this.starLabel),this.rangeRing=new ax(Gt.repairRange),this.rangeRing.group.position.x=this.pos.x,this.rangeRing.group.position.z=this.pos.z,t}}class ox{wrecks=[];generateWrecks(e){const t=Vi(e),i=[];for(const n of da)for(let s=0;s<n.count;s++){const a=this.pickCondition(t),o=this.pickVehicleType(n,a,t),l=n.spots[s];i.push(new Gh(a,o,l.x,l.z))}return this.wrecks=i,i}generateWrecksFromLayout(e,t){const i=Vi(e),n=[];for(const s of t){const a=this.pickCondition(i),o=this.pickVehicleTypeGlobal(a,i);n.push(new Gh(a,o,s.x,s.z,s.starLevel))}return this.wrecks=n,n}globalPool(){return{rifleBarracks:3,flamerBarracks:2,mechFactory:1,turret:2}}pickVehicleTypeGlobal(e,t){if(e==="intact")return this.weightedPick(this.advancedPool(),t);const i=this.weightedPick(this.globalPool(),t);return e==="damaged"&&t()<Gt.damagedUpgradeChance?this.weightedPick(this.advancedPool(),t):i}startRepair(e,t,i){return e.state!=="idle"||!t.canAfford(e.repairCost)?!1:(t.spend(e.repairCost),e.startRepair(),i?.(e),!0)}update(e,t,i){const n=[];for(const s of this.wrecks){if(s.state==="idle")continue;if(s.state==="done"){n.push(s);continue}const a=i(s);if(s.state==="repairing"){if(!a){s.pause();continue}s.update(e),s.state==="done"&&n.push(s)}else a&&(s.resume(),s.update(e),s.state==="done"&&n.push(s))}for(const s of n)t(s),this.wrecks=this.wrecks.filter(a=>a!==s)}pickCondition(e){const t=e(),{worn:i,damaged:n}=Gt.condition;return t<i.probability?"worn":t<i.probability+n.probability?"damaged":"intact"}pickVehicleType(e,t,i){if(t==="intact")return this.weightedPick(this.advancedPool(),i);const n=this.weightedPick(e.pool,i);return t==="damaged"&&i()<Gt.damagedUpgradeChance?this.weightedPick(this.advancedPool(),i):n}advancedPool(){const e={rifleBarracks:0,flamerBarracks:0,mechFactory:0,turret:0};for(const t of Gt.advancedVehicles)e[t]=1;return e}weightedPick(e,t){const i=Object.entries(e).filter(([,a])=>a>0);if(i.length===0)throw new Error("weightedPick: pool 无非零权重项（配置错误）");const n=i.reduce((a,[,o])=>a+o,0);let s=t()*n;for(const[a,o]of i)if(s-=o,s<0)return a;return i[i.length-1][0]}}class lx{grid;field;generated=!1;constructor(e){this.grid=e,this.field=new Float32Array(e.size*e.size*2)}generate(e,t=[]){const i=this.grid.size;this.field.fill(0);const n=new Set;for(const h of t)this.grid.isInside(h.cx,h.cz)&&n.add(h.cz*i+h.cx);const s=this.grid.worldToCell(e.x,e.z);if(!this.grid.isInside(s.cx,s.cz))return;const a=s.cz*i+s.cx,o=new Float32Array(i*i).fill(1/0),l=new Uint8Array(i*i);o[a]=0;const c=i*i;for(let h=0;h<c;h++){let d=-1,u=1/0;for(let m=0;m<c;m++)!l[m]&&o[m]<u&&(u=o[m],d=m);if(d===-1)break;l[d]=1;const p=d%i,g=Math.floor(d/i),v=[{cx:p+1,cz:g},{cx:p-1,cz:g},{cx:p,cz:g+1},{cx:p,cz:g-1}];for(const m of v){if(!this.grid.isInside(m.cx,m.cz))continue;const f=m.cz*i+m.cx;if(n.has(f))continue;const _=o[d]+1;if(_<o[f]){o[f]=_;const y=p-m.cx,x=g-m.cz,R=Math.hypot(y,x);this.field[f*2]=R>0?y/R:0,this.field[f*2+1]=R>0?x/R:0}}}this.field[a*2]=0,this.field[a*2+1]=0,this.generated=!0}query(e){if(!this.generated)return new w(0,0,0);const t=this.grid.worldToCell(e.x,e.z);if(!this.grid.isInside(t.cx,t.cz))return new w(0,0,0);const i=t.cz*this.grid.size+t.cx,n=this.field[i*2],s=this.field[i*2+1];return new w(n,0,s)}clear(){this.field.fill(0),this.generated=!1}}const tr=Bn.gridSize*Bn.cellMeters/2,ir=5;class cx{triggered=new Set;rng;lastTriggeredTime=0;constructor(e){this.rng=Vi(e)}update(e,t,i,n){for(const s of Ei)t<s.time||this.triggered.has(s.time)||(this.triggered.add(s.time),this.spawnWave(s,i,n),this.lastTriggeredTime=t)}get nextWave(){for(const e of Ei)if(!this.triggered.has(e.time))return e;return null}get currentWave(){let e=null;for(const t of Ei)this.triggered.has(t.time)&&(e=t);return e}get incomingWaveTime(){return this.lastTriggeredTime}spawnWave(e,t,i){const n=e.type==="main"?e.edge:this.pickRandomEdge(t),s=this.spreadAlongEdge(n,this.countUnits(e)+(e.miniBoss?1:0));let a=0;for(const[o,l]of Object.entries(e.units)){const c=o;for(let h=0;h<(l??0);h++)i({unitType:c,level:1,pos:s[a++]})}e.miniBoss&&i({unitType:"mech",level:1,pos:s[a],miniBoss:!0})}countUnits(e){return(e.units.rifle??0)+(e.units.flamer??0)+(e.units.mech??0)}pickRandomEdge(e){return Math.abs(e.x)>=Math.abs(e.z)?e.x>=0?"east":"west":e.z>=0?"south":"north"}spreadAlongEdge(e,t){const i=[];for(let s=0;s<t;s++){const o=(t===1?0:s/(t-1)*2-1)*20+(this.rng()-.5)*4;switch(e){case"north":i.push({x:o,z:-tr+ir});break;case"south":i.push({x:o,z:tr-ir});break;case"east":i.push({x:tr-ir,z:o});break;case"west":i.push({x:-tr+ir,z:o});break;default:i.push({x:o,z:-tr+ir})}}return i}}class hx{movement;constructor(e){this.movement=e}update(e,t,i,n=[]){for(const s of t){if(!s.alive||n.some(l=>l.alive&&Math.hypot(l.pos.x-s.pos.x,l.pos.z-s.pos.z)<=s.range))continue;const o=i.query(s.pos);if(o.lengthSq()>0){const l=o.length();s.facing={x:o.x/l,z:o.z/l};const c=s.speed*e;s.pos.add(o.multiplyScalar(c)),s.pos.y=0}}this.movement.applySeparation(t,3,8,e)}}class dx{el;content;btn;constructor(){this.el=document.createElement("div"),this.el.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:none;flex-direction:column;align-items:center;justify-content:center;font:600 24px sans-serif;z-index:100;",this.content=document.createElement("div"),this.content.style.cssText="text-align:center;margin-bottom:24px;",this.el.appendChild(this.content),this.btn=document.createElement("button"),this.btn.textContent="重新开始",this.btn.style.cssText="padding:12px 32px;font-size:18px;border-radius:8px;border:none;background:#4488ff;color:#fff;cursor:pointer;",this.el.appendChild(this.btn)}show(e,t,i){const n=e==="win"?"🎉 胜利":"💀 失败",s=Math.floor(t),a=Math.floor(s/60),o=s%60,l=`${a}:${o.toString().padStart(2,"0")}`;this.content.innerHTML=`<div style="font-size:36px;margin-bottom:12px">${n}</div><div style="font-size:18px;opacity:0.8">用时 ${l}（${s}s）</div>`,this.btn.onclick=i,this.el.style.display="flex"}hide(){this.el.style.display="none"}}const ux=16763955,fx=1,px=.85;class Uo{static slots=[];static active=new Map;static poolSize=0;static scene=null;static init(e,t=4){if(!(this.poolSize>0)){this.scene=e;for(let i=0;i<t;i++){const n=new pt;n.visible=!1,e.add(n),this.slots.push(n)}this.poolSize=t}}static spawn(e,t,i=.5){if(!this.scene)return null;const n=this.slots.find(l=>!l.visible&&!this.active.has(l));if(!n)return null;this.clearSlot(n);const s=new Ws(px,fx,64),a=new bt({color:ux,transparent:!0,opacity:1,depthWrite:!1}),o=new K(s,a);return o.rotation.x=-Math.PI/2,o.renderOrder=2,n.add(o),n.position.set(e.x,.3,e.z),o.scale.setScalar(.01),n.visible=!0,this.active.set(n,{startAt:performance.now(),duration:i*1e3,maxRadius:t,material:a}),n}static update(){if(!this.scene)return;const e=performance.now();for(const[t,i]of this.active){const n=e-i.startAt;if(n>=i.duration){this.recycle(t,i);continue}const s=n/i.duration;t.children[0].scale.setScalar(i.maxRadius*s),i.material.opacity=1-s}}static recycle(e,t){this.clearSlot(e),e.visible=!1,this.active.delete(e),t.material.dispose()}static clearSlot(e){for(let t=e.children.length-1;t>=0;t--){const i=e.children[t];i.geometry?.dispose();const n=i.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n?.dispose(),e.remove(i)}}}const No=1,Oo=.15,mx=6;class Ln{static slots=[];static active=new Map;static poolSize=0;static scene=null;static init(e,t=4){if(!(this.poolSize>0)){this.scene=e;for(let i=0;i<t;i++){const n=new pt;n.visible=!1,e.add(n),this.slots.push(n)}this.poolSize=t}}static spawnPulse(e,t,i,n=Oo){return this.spawn(e,t,i,"pulse",n)}static spawnExpand(e,t,i=At.expandDuration,n=Oo){return this.spawn(e,t,i,"expand",n)}static spawnCharge(e,t,i,n=Oo){return this.spawn(e,t,i,"charge",n)}static release(e){const t=this.active.get(e);t&&this.recycle(e,t)}static update(){if(!this.scene)return;const e=performance.now();for(const[t,i]of this.active){const n=e-i.startAt;if(n>=i.duration){this.recycle(t,i);continue}const s=t.children[0];if(s)if(i.mode==="pulse"){const a=n/1e3*mx;i.material.opacity=.6+.2*Math.sin(a),s.scale.setScalar(i.radius)}else if(i.mode==="charge"){const a=n/i.duration,o=i.radius*a;s.scale.setScalar(o),i.material.opacity=.8;const l=t.children[1];l&&l.scale.setScalar(o)}else{const a=n/i.duration;s.scale.setScalar(i.radius*a),i.material.opacity=1-a}}}static spawn(e,t,i,n,s){if(!this.scene)return null;const a=this.slots.find(d=>!d.visible&&!this.active.has(d));if(!a)return null;this.clearSlot(a);const o=Math.max(0,No-s),l=new Ws(o,No,64),c=new bt({color:At.ringColor,transparent:!0,opacity:n==="pulse"?.6:1,depthWrite:!1}),h=new K(l,c);if(h.rotation.x=-Math.PI/2,h.renderOrder=2,a.add(h),n==="charge"){const d=new bn(No,64),u=new bt({color:At.ringColor,transparent:!0,opacity:.15,depthWrite:!1}),p=new K(d,u);p.rotation.x=-Math.PI/2,p.renderOrder=1,a.add(p)}return a.position.set(e.x,.3,e.z),h.scale.setScalar(n==="pulse"?t:.01),a.visible=!0,this.active.set(a,{startAt:performance.now(),duration:i*1e3,mode:n,radius:t,material:c}),a}static recycle(e,t){this.clearSlot(e),e.visible=!1,this.active.delete(e),t.material.dispose()}static clearSlot(e){for(let t=e.children.length-1;t>=0;t--){const i=e.children[t];i.geometry?.dispose();const n=i.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n?.dispose(),e.remove(i)}}}const gx=4521830,Vh=200,vx=400,nr=.35,_x=.8,sr=1,yx=1.3,xx=.85,Mx=1;class ws{static slots=[];static active=new Map;static unitToSlot=new Map;static scene=null;static init(e,t=24){if(!(this.slots.length>0)){this.scene=e;for(let i=0;i<t;i++){const n=new pt;n.visible=!1,e.add(n),this.slots.push(n)}}}static attach(e,t){if(!this.scene||this.unitToSlot.has(e))return;const i=this.slots.find(o=>!this.active.has(o));if(!i)return;const n=new Ws(xx,Mx,64),s=new bt({color:gx,transparent:!0,opacity:0,depthWrite:!1}),a=new K(n,s);a.rotation.x=-Math.PI/2,a.renderOrder=2,i.position.set(0,.1,0),i.add(a),i.visible=!0,t.add(i),this.active.set(i,{unitId:e,mesh:t,group:i,material:s,phase:"fadeIn",phaseStart:performance.now()}),this.unitToSlot.set(e,i)}static pulse(e){const t=this.unitToSlot.get(e);if(!t)return;const i=this.active.get(t);i&&i.phase!=="fadeOut"&&(i.phase="pulse",i.phaseStart=performance.now())}static detach(e){const t=this.unitToSlot.get(e);if(!t)return;const i=this.active.get(t);i&&(i.phase="fadeOut",i.phaseStart=performance.now())}static update(){if(!this.scene)return;const e=performance.now();for(const[t,i]of this.active){const n=e-i.phaseStart,s=t.children[0];if(s)if(i.phase==="fadeIn"){const a=Math.min(1,n/Vh);i.material.opacity=nr*a,s.scale.setScalar(sr*(.8+.2*a)),a>=1&&(i.phase="idle")}else if(i.phase==="idle")i.material.opacity=nr,s.scale.setScalar(sr);else if(i.phase==="pulse"){const a=Math.min(1,n/vx),o=Math.sin(a*Math.PI);i.material.opacity=nr+o*(_x-nr),s.scale.setScalar(sr+o*(yx-sr)),a>=1&&(i.phase="idle")}else{const a=Math.min(1,n/Vh);i.material.opacity=nr*(1-a),s.scale.setScalar(sr*(1-.2*a)),a>=1&&this.recycle(t,i)}}}static recycle(e,t){e.parent&&e.parent.remove(e);for(let i=e.children.length-1;i>=0;i--){const n=e.children[i];n.geometry?.dispose();const s=n.material;Array.isArray(s)?s.forEach(a=>a.dispose()):s?.dispose(),e.remove(n)}e.visible=!1,this.active.delete(e),this.unitToSlot.delete(t.unitId)}}class rr{static slots=[];static active=new Map;static poolSize=0;static scene=null;static init(e,t=8){if(!(this.poolSize>0)){this.scene=e;for(let i=0;i<t;i++){const n=new pt;n.visible=!1,e.add(n),this.slots.push(n)}this.poolSize=t}}static spawn(e,t,i,n,s=.8){if(!this.scene)return null;const a=this.slots.find(h=>!h.visible&&!this.active.has(h));if(!a)return null;this.clearSlot(a);const o=new st(n,n,i,16,1,!0);o.translate(0,i/2,0);const l=new bt({color:t,transparent:!0,opacity:1,depthWrite:!1,side:xi}),c=new K(o,l);return c.renderOrder=2,a.add(c),a.position.set(e.x,0,e.z),a.visible=!0,this.active.set(a,{startAt:performance.now(),duration:s*1e3,height:i,material:l}),a}static update(){if(!this.scene)return;const e=performance.now();for(const[t,i]of this.active){const n=e-i.startAt;if(n>=i.duration){this.recycle(t,i);continue}const s=n/i.duration,a=t.children[0];a.scale.y=1-s;const o=1-s,l=Math.sin(s*Math.PI);i.material.opacity=o*(.9+.6*l)}}static recycle(e,t){this.clearSlot(e),e.visible=!1,this.active.delete(e),t.material.dispose()}static clearSlot(e){for(let t=e.children.length-1;t>=0;t--){const i=e.children[t];i.geometry?.dispose();const n=i.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n?.dispose(),e.remove(i)}}}class vr{static container;static pool=[];static poolSize=0;static uiLayer=null;static init(e,t=30){if(!(this.poolSize>0)){this.container=document.createElement("div"),this.container.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:50;",e.appendChild(this.container);for(let i=0;i<t;i++){const n=document.createElement("img");n.src=Ul,n.style.cssText="position:absolute;width:28px;height:28px;display:none;filter:drop-shadow(0 0 4px rgba(0,229,255,0.6));",this.container.appendChild(n),this.pool.push(n)}this.poolSize=t}}static spawn(e){const t=this.amountToCount(e.amount),i=vr.uiLayer,n=e.hud.getOreIconScreenPos(),s=i?i.toLocal(n.x,n.y):{x:n.x,y:n.y},a=[];for(let o=0;o<t;o++){const l=this.pool.find(c=>c.style.display==="none");if(!l)break;l.style.left=`${e.fromScreen.x+(Math.random()-.5)*30}px`,l.style.top=`${e.fromScreen.y+(Math.random()-.5)*30}px`,l.style.display="block",l.style.opacity="1",l.style.transform="scale(1)",a.push(l)}a.forEach((o,l)=>{setTimeout(()=>{this.flyOne(o,e.fromScreen,s,600,()=>{e.hud.bumpOreIcon(),o.style.display="none"})},l*80)})}static flyOne(e,t,i,n,s){const a=(t.x+i.x)/2+(Math.random()-.5)*80,o=Math.min(t.y,i.y)-60-Math.random()*40,l=performance.now(),c=()=>{const h=performance.now()-l,d=Math.min(h/n,1),u=(1-d)**2*t.x+2*(1-d)*d*a+d**2*i.x,p=(1-d)**2*t.y+2*(1-d)*d*o+d**2*i.y;e.style.left=`${u}px`,e.style.top=`${p}px`;const g=d<.8?1:1-(d-.8)/.2*.4;e.style.transform=`scale(${g}) rotate(${d*180}deg)`,d<1?requestAnimationFrame(c):s()};requestAnimationFrame(c)}static amountToCount(e){return e<50?3:e<150?5:e<400?8:12}}class Rs{static pool=[];static active=new Map;static poolSize=0;static uiLayer=null;static init(e,t=16){if(this.poolSize>0)return;const i=document.createElement("div");i.setAttribute("data-resource-container","true"),i.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:50;",e.appendChild(i);for(let n=0;n<t;n++){const s=document.createElement("div");s.setAttribute("data-resource-text","true"),s.style.cssText="position:absolute;font-weight:900;display:none;white-space:nowrap;user-select:none;",i.appendChild(s),this.pool.push(s)}this.poolSize=t}static spawn(e){const t=this.pool.find(o=>!this.active.has(o));if(!t)return;t.innerHTML=`${ts(16)}<span style="vertical-align:-2px">+${Math.round(e.amount)}</span>`,t.style.color="#1e90ff",t.style.fontSize="20px";const i="1px";t.style.textShadow=`${i} ${i} 0 #000,-${i} -${i} 0 #000,${i} -${i} 0 #000,-${i} ${i} 0 #000`;const n=Rs.uiLayer,s=n?n.toLocal(e.screenPos.x,e.screenPos.y).x:e.screenPos.x,a=n?n.toLocal(e.screenPos.x,e.screenPos.y).y:e.screenPos.y;t.style.left=`${s}px`,t.style.top=`${a}px`,t.style.display="block",t.style.opacity="1",this.active.set(t,{screenX:s,screenY:a,bornAt:performance.now(),driftX:(Math.random()-.5)*30})}static update(){const e=performance.now(),t=900;for(const[i,n]of this.active){const a=(e-n.bornAt)/t;if(a>=1){i.style.display="none",i.style.opacity="1",this.active.delete(i);continue}const o=a*70;i.style.left=`${n.screenX+n.driftX}px`,i.style.top=`${n.screenY-o}px`,i.style.opacity=a<.7?"1":`${1-(a-.7)/.3}`}}}class _r extends sn{oreAmount;state="guarded";constructor(e,t,i,n="guarded"){super("player",t,i),this.oreAmount=e,this.state=n,this.hp=1/0,this.mesh=this.buildMesh(),n==="openable"&&this.setGlow(1)}get maxHp(){return 1/0}get interactable(){return this.state==="openable"}unlock(){this.state==="guarded"&&(this.state="openable",this.setGlow(1))}open(){this.state==="openable"&&(this.state="opened",this.mesh.visible=!1)}nameText(){return"宝箱"}update(e){}dispose(){const e=this.mesh;e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose(),Pl(this.nameLabel,this.coordLabel)}buildMesh(){const e=new Ji(1.3,1.3,1.3),t=58879,i=new ni({color:t,emissive:t,emissiveIntensity:.6,roughness:.3}),n=new K(e,i);return n.position.set(this.pos.x,.65,this.pos.z),this.nameLabel=tn(this.nameText(),2),this.coordLabel=nn(1.2,1,this.coordText()),n.add(this.nameLabel),n.add(this.coordLabel),n}setGlow(e){const i=this.mesh.material;i.emissiveIntensity=e}}class Sx{combat;movement;alertRange;constructor(e,t,i,n){this.combat=e,this.movement=t,this.alertRange=i}update(e,t,i){for(const n of t)n.alive&&this.tickGuard(n,e,i);this.movement.applySeparation(t.filter(n=>n.alive),3,8,e)}tickGuard(e,t,i){e.tickCooldown(t);const n=this.scanGuardTarget(e,i);if(n){const s=this.dist2D(e.pos,n.pos);if(s>e.range)this.movement.moveToward(e,n.pos,e.speed,t,!1);else{const a=n.pos.x-e.pos.x,o=n.pos.z-e.pos.z;s>.01&&(e.facing={x:a/s,z:o/s})}e.canAttack()&&s<=e.range&&(e.resetCooldown(e.atkInterval),this.combat.performAttack(e,n))}else if(e.homePos){const s=new w(e.homePos.x,0,e.homePos.z);this.movement.moveToward(e,s,e.speed,t,!1)}}scanGuardTarget(e,t){if(!e.homePos)return null;let i=null,n=this.alertRange;for(const s of t){if(!s.alive||s.team===e.team)continue;const a=Math.hypot(s.pos.x-e.homePos.x,s.pos.z-e.homePos.z);a<=n&&(n=a,i=s)}return i}dist2D(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}}class bx{sites=[];rng;constructor(e){this.rng=Vi(e)}generate(){this.sites=[];const e=[],t=[],i=[];for(const n of lr){const s=this.sitePos(n.id),a=this.spawnScavengers(n,s),o=this.spawnReward(n,s),l=this.spawnLootCrates(n,s);this.sites.push({id:n.id,pos:s,scavengers:a,reward:o,lootCrates:l}),e.push(...a),i.push(o),t.push(...l)}return{scavengers:e,lootCrates:t,relics:i}}generateFromLayout(e){this.sites=[];const t=[],i=[],n=[];for(const s of e){const a={x:s.x,z:s.z},o=this.spawnScavengersFromTemplate(s.guardTemplate,a,s.hasMiniboss);let l=null;s.coreId&&(l=new gr(s.coreId,a.x,a.z),n.push(l));const c=[];for(const h of s.chests)c.push(new _r(h.ore,a.x+h.offset.x,a.z+h.offset.z));t.push(...o),i.push(...c),this.sites.push({id:s.size==="large"?"southwest":"northwest",pos:a,scavengers:o,reward:l??new gr("lightning",a.x,a.z),lootCrates:c})}return{scavengers:t,lootCrates:i,relics:n}}spawnScavengersFromTemplate(e,t,i){const n=[],s=e.reduce((o,l)=>o+l.count,0);let a=0;for(const o of e)for(let l=0;l<o.count;l++){const c=a/Math.max(1,s)*Math.PI*2,h=3+l%2,d=t.x+Math.cos(c)*h,u=t.z+Math.sin(c)*h,p=new Et(o.unitType,1,"enemy",d,u);p.homePos={x:t.x,z:t.z},n.push(p),a++}if(i){const o=new mn("enemy",t.x+5,t.z);o.homePos={x:t.x,z:t.z},n.push(o)}return n}updateScavengerStates(){for(const e of this.sites)if(!e.scavengers.some(i=>i.alive))for(const i of e.lootCrates)i.unlock()}allScavengers(){const e=[];for(const t of this.sites)for(const i of t.scavengers)i.alive&&e.push(i);return e}sitePos(e){const t=xn.relicSites.find(i=>i.id===e);if(!t)throw new Error(`RelicSiteSystem: MAP_LAYOUT 缺遗迹点 ${e}`);return{x:t.x,z:t.z}}spawnScavengers(e,t){const i=[],n=this.totalScavengers(e);let s=0;for(const a of e.scavengers)for(let o=0;o<a.count;o++){const l=s/Math.max(1,n)*Math.PI*2,c=3+o%2,h=t.x+Math.cos(l)*c,d=t.z+Math.sin(l)*c,u=new Et(a.unitType,1,"enemy",h,d);u.homePos={x:t.x,z:t.z},i.push(u),s++}if(e.miniBoss){const a=new mn("enemy",t.x+5,t.z);a.homePos={x:t.x,z:t.z},i.push(a)}return i}totalScavengers(e){return e.scavengers.reduce((t,i)=>t+i.count,0)}spawnReward(e,t){const i=this.pickCore();return new gr(i,t.x,t.z)}spawnLootCrates(e,t){if(!e.extraOreCrate)return[];const i=e.extraOreCrate,n=5,s=Math.PI/2,a=[];for(let o=0;o<3;o++){const l=s+o/3*Math.PI*2,c=t.x+Math.cos(l)*n,h=t.z+Math.sin(l)*n;a.push(new _r(i,c,h))}return a}pickCore(){return this.rng()<.5?"lightning":"regen"}}class wx{buildings=[];commandCenterAlive=!1;rewarded=new Set;pool;buildingRewards=new Map;constructor(e){this.pool=e}onResource;setResourceSink(e){this.onResource=e}generate(){const e=xn.enemyBase.x,t=xn.enemyBase.z;return this.buildings=Is.buildings.map(i=>new Ri(i.type,i.level,"enemy",e+i.offset.x,t+i.offset.z)),this.commandCenterAlive=!0,this.buildings}generateFromLayout(e){this.buildings=[],this.buildingRewards.clear();for(const t of e)for(const i of t.def.buildings){const n=new Ri(i.type,i.level,"enemy",t.x+i.offset.x,t.z+i.offset.z);this.buildings.push(n),this.buildingRewards.set(n.id,t.def.rewards[i.type]??0)}return this.commandCenterAlive=!0,this.buildings}update(e){for(const t of this.buildings){if(t.alive||this.rewarded.has(t.id))continue;const i=this.buildingRewards.size>0?this.buildingRewards.get(t.id)??0:Is.rewards[t.type]??0;i>0&&(this.pool.earn(i),this.onResource?.({amount:i,worldPos:{x:t.pos.x,y:Hn(t),z:t.pos.z},reason:"captureReward"})),this.rewarded.add(t.id),t.type==="commandCenter"&&(this.commandCenterAlive=!1)}}}class Tx{states=new Map;oreBalance=0;registerBuilding(e){this.states.set(e.id,{module:e,queueTimer:0,unitCount:0})}unregisterBuilding(e){this.states.delete(e.id)}forceAddUnitCount(e){const t=this.states.get(e.id);t&&t.unitCount++}getUnitCount(e){return this.states.get(e.id)?.unitCount??0}getQueueTimer(e){return this.states.get(e.id)?.queueTimer??0}onUnitDeath(e){if(e.sourceBuildingId==null)return;const t=this.states.get(e.sourceBuildingId);t&&(t.unitCount=Math.max(0,t.unitCount-1),t.queueTimer===0&&this.requestProduce(t.module))}requestProduce(e){const t=this.states.get(e.id);if(!t||t.queueTimer!==0)return!1;const i=Je[e.type].levels[e.level-1];if(!i.prodUnit||!i.prodTimeSec||i.unitCap==null||t.unitCount>=i.unitCap)return!1;const n=ii[i.prodUnit].cost;return this.oreBalance<n?!1:(this.oreBalance-=n,t.queueTimer=i.prodTimeSec,!0)}update(e,t,i){this.oreBalance+=Is.enemyIncomePerSec*e;for(const n of this.states.values())n.queueTimer===0&&this.requestProduce(n.module);for(const n of this.states.values())n.queueTimer>0&&(n.queueTimer-=e,n.queueTimer<=0&&(n.queueTimer=0,this.spawnUnit(n,i)))}spawnUnit(e,t){const i=e.module,n=Je[i.type].levels[i.level-1],s=n.prodUnit,a=n.rallyOffset??{x:0,z:0},o=new Et(s,n.factoryUnitLevel??1,i.team,i.pos.x+a.x,i.pos.z+a.z);o.sourceBuildingId=i.id,o.homePos={x:i.pos.x,z:i.pos.z},e.unitCount++,t(o,i)}}class Ex{explored;visible;grid;constructor(e){this.grid=e,this.explored=new Uint8Array(e.size*e.size),this.visible=new Uint8Array(e.size*e.size)}updateVisible(e){this.visible.fill(0);const t=Math.ceil(Math.max(0,...e.map(i=>i.sight))/this.grid.cellMeters)+1;for(const i of e){const{cx:n,cz:s}=this.grid.worldToCell(i.x,i.z);for(let a=-t;a<=t;a++)for(let o=-t;o<=t;o++){const l=n+o,c=s+a;if(!this.grid.isInside(l,c))continue;const h=this.grid.cellToWorld(l,c);if(Math.hypot(h.x-i.x,h.z-i.z)<=i.sight){const u=c*this.grid.size+l;this.visible[u]=1,this.explored[u]=1}}}}getCellState(e,t){if(!this.grid.isInside(e,t))return"unexplored";const i=t*this.grid.size+e;return this.visible[i]?"visible":this.explored[i]?"explored":"unexplored"}isEntityVisible(e){const{cx:t,cz:i}=this.grid.worldToCell(e.x,e.z);return this.getCellState(t,i)==="visible"}get exploredData(){return this.explored}get visibleData(){return this.visible}}const Ax=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Cx=`
uniform sampler2D uExploredTex;
uniform sampler2D uVisibleTex;
varying vec2 vUv;
void main() {
  // DataTexture 用 Uint8Array 存 0/1，GPU 采样自动归一化（除以 255），
  // 故存 1 时采样得到 1/255 ≈ 0.004 而非 1.0。这里 ×255 还原成真实 0/1 值。
  // LinearFilter 在相邻 cell（0/255）间插值，产生 0..255 渐变 → 软边。
  //
  // uv.y 方向修正：PlaneGeometry rotateX(-π/2) 后，uv.y=0 对应世界 z=+h/2（南），
  // uv.y=1 对应世界 z=-h/2（北）。但 FogOfWar 存储用 cz=size-1-... 反了，
  // 即纹理 py=size-1-cz。故采样时翻转 v：用 1.0-vUv.y 让纹理 py 对齐 cz（南向递增）。
  vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
  float explored = texture2D(uExploredTex, uv).r * 255.0;
  float visible = texture2D(uVisibleTex, uv).r * 255.0;
  // 三态合成 alpha（越大越遮挡）
  // explored=0 → 1.0（纯黑遮挡）
  // explored=1,visible=0 → 0.6（暗灰半遮挡）
  // explored=1,visible=1 → 0.0（透明）
  float alpha = mix(
    mix(1.0, 0.6, explored),
    0.0,
    visible * explored
  );
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
}
`;class Rx{mesh;exploredTex;visibleTex;constructor(e){const t=e.size;this.exploredTex=new ch(new Uint8Array(t*t),t,t,$o),this.visibleTex=new ch(new Uint8Array(t*t),t,t,$o);for(const s of[this.exploredTex,this.visibleTex])s.minFilter=Ut,s.magFilter=Ut,s.needsUpdate=!0;const i=new Gs(e.worldSizeMeters,e.worldSizeMeters);i.rotateX(-Math.PI/2);const n=new Kt({uniforms:{uExploredTex:{value:this.exploredTex},uVisibleTex:{value:this.visibleTex}},vertexShader:Ax,fragmentShader:Cx,transparent:!0,depthWrite:!1});this.mesh=new K(i,n),this.mesh.position.y=.1}updateTextures(e){this.exploredTex.image.data.set(e.exploredData),this.visibleTex.image.data.set(e.visibleData),this.exploredTex.needsUpdate=!0,this.visibleTex.needsUpdate=!0}}class Px{constructor(e){this.fog=e}update(e){this.fog.updateVisible(e)}}const ar={sight:{commandCenter:22,rifleBarracks:15,flamerBarracks:15,mechFactory:15,turret:10,hero:20,rifle:12,flamer:12,mech:12,worker:8},exploredOpacity:.4};be({sight:jt(ol(),ye().positive()),exploredOpacity:ye().min(0).max(1)});function Lx(r){return r.isBoss?"miniboss":"unit"}function Ix(r,e){switch(r){case"relic":return"#ffcc44";case"crate":return"#00e5ff";case"ore":return"#00e5ff";case"wreck":return"#cc8844";case"coreLightning":return"#ffee00";case"coreRegen":return"#44ff66"}return e==="player"?"#44ff66":"#ff4444"}function Dx(r){return r==="coreLightning"||r==="coreRegen"||r==="crate"}function Ux(r){return r==="visible"?1:r==="explored"?.5:0}function Nx(r,e){return e==="unexplored"?!1:r==="unit"||r==="miniboss"||r==="hero"?e==="visible":!0}function Ox(r){switch(r){case"miniboss":return 10;case"hero":return 9;case"coreLightning":return 9;case"coreRegen":return 9;case"building":return 8;case"unit":return 5;case"relic":return 7;case"crate":return 6;case"ore":return 4;case"wreck":return 5}}function zx(r){const e=[],t=(i,n,s,a)=>{i.alive&&Nx(n,a)&&e.push({x:i.x,z:i.z,kind:n,team:s,fog:a})};return r.playerUnits.forEach(i=>t(i,"unit","player","visible")),r.hero&&t(r.hero,"hero","player","visible"),r.playerBuildings.forEach(i=>t(i,"building","player","visible")),r.enemyMobile.forEach(i=>t(i,Lx(i),"enemy",i.visible?"visible":"unexplored")),r.enemyBuildings.forEach(i=>t(i,"building","enemy",i.fog)),r.cores.forEach(i=>{if(i.state==="socketed")return;const n=i.coreId==="lightning"?"coreLightning":"coreRegen";e.push({x:i.x,z:i.z,kind:n,team:"player",fog:i.fog})}),r.crates.forEach(i=>t(i,"crate","player",i.fog)),r.ores.forEach(i=>t(i,"ore","player",i.fog)),r.wrecks.forEach(i=>t(i,"wreck","player",i.fog)),e}const fn=96,Da=192,Tr=Math.SQRT1_2;function Er(r){return r*Tr}function Ua(r){return(r-Er(r))/2}function Wh(r,e,t){const i=(r+fn)/Da*Er(t)+Ua(t),n=(e+fn)/Da*Er(t)+Ua(t),s=i-t/2,a=n-t/2,o=(s-a)*Tr,l=(s+a)*Tr;return{px:o+t/2,py:l+t/2}}function kx(r,e,t){const i=r-t/2,n=e-t/2,s=(i+n)*Tr,a=(n-i)*Tr,o=s+t/2,l=a+t/2,c=(o-Ua(t))/Er(t)*Da-fn,h=(l-Ua(t))/Er(t)*Da-fn;return{x:Math.max(-fn,Math.min(fn,c)),z:Math.max(-fn,Math.min(fn,h))}}const Bx=[new w(-1,-1,-1),new w(1,-1,-1),new w(1,1,-1),new w(-1,1,-1)];function Fx(r){r.updateMatrixWorld(!0);const e=new w(0,0,-1).applyQuaternion(r.quaternion),t=[];for(const i of Bx){const n=i.clone().unproject(r),s=e.y,a=s===0?0:-n.y/s,o=n.x+a*e.x,l=n.z+a*e.z;t.push({x:o,z:l})}return t}const Es=300,$t=Math.round(Es*Math.SQRT2),Hx=.94,Gx=.66,zo=2,Xh="rgba(68,136,255,0.9)",Vx="rgba(68,136,255,0.5)",_i=$t*Hx;class Wx{el;canvas;ctx;camera;cameraRig;grid;fog;dragging=!1;fogCanvas;fogCtx;fogImageData;aborter=new AbortController;constructor(e,t,i,n){this.camera=e,this.cameraRig=t,this.grid=i,this.fog=n,this.el=document.createElement("div");const s=Es+zo*2;this.el.style.cssText=`position:absolute;top:48px;right:12px;width:${s}px;height:${s}px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:${Xh};opacity:${Gx};pointer-events:none;z-index:50;`;const a=document.createElement("div");a.style.cssText=`position:absolute;left:${zo}px;top:${zo}px;width:${Es}px;height:${Es}px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:rgba(0,0,0,0.6);pointer-events:auto;`,this.el.appendChild(a),this.canvas=document.createElement("canvas"),this.canvas.width=$t,this.canvas.height=$t,this.canvas.style.cssText=`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:${Es}px;height:${Es}px;display:block;`,a.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.fogCanvas=document.createElement("canvas"),this.fogCanvas.width=this.grid.size,this.fogCanvas.height=this.grid.size,this.fogCtx=this.fogCanvas.getContext("2d"),this.fogImageData=this.fogCtx.createImageData(this.grid.size,this.grid.size),this.bindPointer()}render(e){const t=this.ctx;t.clearRect(0,0,$t,$t),this.drawFog(),t.imageSmoothingEnabled=!1;const n=_i*Math.SQRT1_2/_i*$t;t.save(),t.translate($t/2,$t/2),t.rotate(Math.PI/4),t.drawImage(this.fogCanvas,-n/2,-n/2,n,n),t.restore();const s=[...e.blips].sort(Xx);for(const a of s){const{px:o,py:l}=Wh(a.x,a.z,_i),c=o/_i*$t,h=l/_i*$t,d=Ux(a.fog);d<=0||this.drawBlip(c,h,a,d)}this.drawFrustum(),this.drawGlowRing()}drawGlowRing(){const e=this.ctx,t=$t/2;e.save(),e.strokeStyle=Xh,e.lineWidth=2,e.shadowColor=Vx,e.shadowBlur=8,e.beginPath(),e.moveTo(t,0),e.lineTo($t,t),e.lineTo(t,$t),e.lineTo(0,t),e.closePath(),e.stroke(),e.restore()}drawFog(){const e=this.fog.exploredData,t=this.fog.visibleData,i=this.fogImageData.data,n=this.grid.size*this.grid.size;for(let s=0;s<n;s++){let a,o,l;t[s]?(a=80,o=90,l=110):e[s]?(a=40,o=40,l=50):(a=10,o=10,l=15);const c=s*4;i[c]=a,i[c+1]=o,i[c+2]=l,i[c+3]=255}this.fogCtx.putImageData(this.fogImageData,0,0)}drawBlip(e,t,i,n){const s=this.ctx;s.globalAlpha=n,s.fillStyle=Ix(i.kind,i.team);const a=Ox(i.kind);i.kind==="building"||i.kind==="crate"||i.kind==="wreck"?s.fillRect(e-a,t-a,a*2,a*2):i.kind==="coreLightning"||i.kind==="coreRegen"?(s.beginPath(),s.moveTo(e,t-a),s.lineTo(e+a*.8,t-a*.4),s.lineTo(e+a*.8,t+a*.4),s.lineTo(e,t+a),s.lineTo(e-a*.8,t+a*.4),s.lineTo(e-a*.8,t-a*.4),s.closePath(),s.fill()):i.kind==="relic"?(s.beginPath(),s.moveTo(e,t-a),s.lineTo(e+a,t),s.lineTo(e,t+a),s.lineTo(e-a,t),s.closePath(),s.fill()):(s.beginPath(),s.arc(e,t,a,0,Math.PI*2),s.fill()),(Dx(i.kind)||i.kind==="miniboss")&&(s.strokeStyle="#ffffff",s.lineWidth=i.kind==="miniboss"?3:2,s.stroke()),s.globalAlpha=1}drawFrustum(){const e=Fx(this.camera),t=this.ctx;t.save(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.fillStyle="rgba(255,255,255,0.05)",t.beginPath(),e.forEach((i,n)=>{const{px:s,py:a}=Wh(i.x,i.z,_i),o=s/_i*$t,l=a/_i*$t;n===0?t.moveTo(o,l):t.lineTo(o,l)}),t.closePath(),t.fill(),t.stroke(),t.restore()}bindPointer(){const e=s=>{s.preventDefault(),this.dragging=!0,this.canvas.setPointerCapture(s.pointerId),this.applyOverride(s)},t=s=>{this.dragging&&this.applyOverride(s)},i=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}this.cameraRig.setOverride(null)}},n={signal:this.aborter.signal};this.canvas.addEventListener("pointerdown",e,n),this.canvas.addEventListener("pointermove",t,n),this.canvas.addEventListener("pointerup",i,n)}applyOverride(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,n=e.clientY-t.top,s=i/t.width*_i,a=n/t.height*_i,o=kx(s,a,_i);this.cameraRig.setOverride(new w(o.x,0,o.z))}dispose(){this.aborter.abort(),this.el.remove()}}function Xx(r,e){const t={ore:0,wreck:1,crate:2,relic:3,building:4,unit:5,miniboss:6,hero:7,coreLightning:8,coreRegen:8};return(t[r.kind]??0)-(t[e.kind]??0)}class Yd{points=[];register(e,t){this.points.push({pos:e,minDist:t})}isClear(e){for(const{pos:t,minDist:i}of this.points){const n=e.x-t.x,s=e.z-t.z;if(Math.sqrt(n*n+s*s)<i-.01)return!1}return!0}}class jd{availableCells=[];grid;mapHalfSize;constructor(e,t=5){this.mapHalfSize=e,this.grid=t;for(let i=0;i<t*t;i++)this.availableCells.push(i)}excludeNearStart(e){const t=this.mapHalfSize*2/this.grid,i=this.mapHalfSize;this.availableCells=this.availableCells.filter(n=>{const s=n%this.grid,a=Math.floor(n/this.grid),o=s*t+t/2-i,l=a*t+t/2-i;return Math.sqrt(o*o+l*l)>=e})}allocate(e){if(this.availableCells.length===0)return null;const t=Math.floor(e()*this.availableCells.length),i=this.availableCells.splice(t,1)[0],n=this.mapHalfSize*2/this.grid,s=this.mapHalfSize,a=i%this.grid,o=Math.floor(i/this.grid),l=n*.2,c=a*n+l+e()*(n-l*2)-s,h=o*n+l+e()*(n-l*2)-s;return{x:c,z:h}}}function ul(r,e,t,i,n=0,s=200){const a=e.mapHalfSize-n,o=i??e.minDistFromStart;for(let l=0;l<s;l++){const c=(r()*2-1)*a,h=(r()*2-1)*a,d={x:c,z:h};if(!(Math.sqrt(c*c+h*h)<o-.01)&&t.isClear(d))return d}for(let l=0;l<s;l++){const c=(r()*2-1)*a,h=(r()*2-1)*a,d={x:c,z:h};if(!(Math.sqrt(c*c+h*h)<o-.01))return d}return null}function qh(r,e,t,i,n,s,a,o,l,c){const h=[];for(let d=0;d<i;d++){let u=!1;for(let p=0;p<200;p++){const g=r()*Math.PI*2,v=r()*t,m={x:e.x+Math.cos(g)*v,z:e.z+Math.sin(g)*v};if(!(Math.abs(m.x)>o||Math.abs(m.z)>o)&&!(Math.sqrt(m.x*m.x+m.z*m.z)<l-.01)&&c.isClear(m)){c.register(m,a),h.push({x:m.x,z:m.z,clusterType:n,clusterId:s}),u=!0;break}}if(!u)for(let p=0;p<200;p++){const g=r()*Math.PI*2,v=r()*t,m={x:e.x+Math.cos(g)*v,z:e.z+Math.sin(g)*v};if(!(Math.abs(m.x)>o||Math.abs(m.z)>o)&&!(Math.sqrt(m.x*m.x+m.z*m.z)<l-.01)){h.push({x:m.x,z:m.z,clusterType:n,clusterId:s});break}}}return h}function qx(r,e,t){const{ore:i}=e,n=[];let s=0;const a=new Yd,o=new jd(e.mapHalfSize,5);o.excludeNearStart(e.minDistFromStart);for(let l=0;l<i.largeClusters;l++){const c=o.allocate(r);if(!c)continue;t.register(c,i.minDistBetweenNodes);const h=qh(r,c,i.largeClusterRadius,i.perLargeCluster,"large",s++,i.minDistBetweenNodes,e.mapHalfSize,e.minDistFromStart,a);n.push(...h)}for(let l=0;l<i.smallClusters;l++){const c=o.allocate(r);if(!c)continue;t.register(c,i.minDistBetweenNodes);const h=qh(r,c,i.smallClusterRadius,i.perSmallCluster,"small",s++,i.minDistBetweenNodes,e.mapHalfSize,e.minDistFromStart,a);n.push(...h)}for(let l=0;l<i.scattered;l++){let c=!1;for(let h=0;h<200;h++){const d=ul(r,e,t,void 0);if(!d)break;if(a.isClear(d)){a.register(d,i.minDistBetweenNodes),t.register(d,e.minDistBetweenAny),n.push(d),c=!0;break}}if(!c){const h=ul(r,e,t,void 0);h&&(t.register(h,e.minDistBetweenAny),n.push(h))}}return n}function $x(r,e,t,i){const n=[],{relics:s,scatteredChests:a}=e;for(let c=0;c<s.largeCount;c++){const h=i.allocate(r);if(!h)continue;t.register(h,s.minDistBetween);const d=Lh[Math.floor(r()*Lh.length)],u=r()<.5?"lightning":"regen",p=[];for(let g=0;g<3;g++){const v=Math.PI/2+g/3*Math.PI*2;p.push({ore:500,offset:{x:Math.cos(v)*5,z:Math.sin(v)*5}})}n.push({x:h.x,z:h.z,size:"large",guardTemplate:d,hasMiniboss:!0,coreId:u,chests:p})}const o=new Set;for(;o.size<s.smallRelicCoreCount;)o.add(Math.floor(r()*s.smallCount));for(let c=0;c<s.smallCount;c++){const h=i.allocate(r);if(!h)continue;if(t.register(h,s.minDistBetween),o.has(c)){const u=r()<.5?"lightning":"regen";n.push({x:h.x,z:h.z,size:"small",guardTemplate:Ih,hasMiniboss:!1,coreId:u,chests:[]})}else n.push({x:h.x,z:h.z,size:"small",guardTemplate:Ih,hasMiniboss:!1,chests:[{ore:300,offset:{x:3,z:0}}]})}const l=[];for(let c=0;c<a.count;c++){const h=i.allocate(r);h&&(t.register(h,e.minDistBetweenAny),l.push({x:h.x,z:h.z,ore:a.orePerChest}))}return{relics:n,scatteredChests:l}}function Yx(r,e){return r.buildings.map(t=>{if(!(t.type==="rifleBarracks"||t.type==="flamerBarracks"))return t;const n=e()<.5?"rifleBarracks":"flamerBarracks";return{...t,type:n}})}function jx(r,e,t,i){const n=[],{enemyBases:s}=e;for(const a of ll){const o=i.allocate(r);if(!o)continue;t.register(o,s.minDistBetween);const l=Yx(a,r);n.push({x:o.x,z:o.z,def:{...a,buildings:l}})}return n}function Zx(r,e,t,i){const n=[],{scavengers:s}=e;for(let a=0;a<s.campCount;a++){const o=i.allocate(r);if(!o)continue;t.register(o,e.minDistBetweenAny);const l=[];for(let c=0;c<s.perCamp;c++){const h=r()<.6?"rifle":"flamer";l.push({unitType:h})}n.push({x:o.x,z:o.z,units:l})}return n}function Kx(r,e){const t=[];for(const i of r)t.push({pos:{x:i.x,z:i.z},type:i.size==="large"?"largeRelic":"smallRelic"});for(const i of e)t.push({pos:{x:i.x,z:i.z},type:"camp"});return t}function Jx(r,e,t,i,n){const s=[],{wrecks:a}=e,o=Math.round(a.count*a.dangerZoneRatio),l=a.count-o,c=Kx(i,n),h=()=>{if(r()>=a.guardChance)return;const p=r()<.5?"rifle":"flamer",g=r()<.5?1:2;return{unitType:p,count:g}};let d=0;for(let p=0;p<o&&c.length!==0;p++){const g=c[Math.floor(r()*c.length)];let v=null;for(let f=0;f<200;f++){const _=r()*Math.PI*2,y=a.dangerZoneRadius*(.5+r()*.5),x={x:g.pos.x+Math.cos(_)*y,z:g.pos.z+Math.sin(_)*y};if(!(Math.abs(x.x)>e.mapHalfSize||Math.abs(x.z)>e.mapHalfSize)&&t.isClear(x)){v=x;break}}if(!v)for(let f=0;f<200;f++){const _=r()*Math.PI*2,y=a.dangerZoneRadius*(.5+r()*.5),x={x:g.pos.x+Math.cos(_)*y,z:g.pos.z+Math.sin(_)*y};if(!(Math.abs(x.x)>e.mapHalfSize||Math.abs(x.z)>e.mapHalfSize)){v=x;break}}if(!v)continue;t.register(v,a.minDistBetween);const m=a.anchorLevel[g.type];s.push({x:v.x,z:v.z,inDangerZone:!0,starLevel:m,anchorType:g.type,guard:h()}),d++}const u=l+(o-d);for(let p=0;p<u;p++){const g=ul(r,e,t,a.minDistFromStart);g&&(t.register(g,a.minDistBetween),s.push({x:g.x,z:g.z,inDangerZone:!1,starLevel:1,guard:h()}))}return s}function Qx(r,e){const t=new Yd,i=new jd(e.mapHalfSize,5);i.excludeNearStart(e.minDistFromStart);const n=Vi(r^20306),s=Vi(r^21217),a=Vi(r^46174),o=Vi(r^51806),l=Vi(r^40503),c=qx(n,e,t),h=jx(a,e,t,i),{relics:d,scatteredChests:u}=$x(s,e,t,i),p=Zx(o,e,t,i),g=Jx(l,e,t,d,p);return{start:{x:0,z:0},oreNodes:c,relicSites:d,scatteredChests:u,scavengerCamps:p,enemyBases:h,wrecks:g}}const eM=1/30,ko=un.speed,Bo={x:0,z:1};class Nl{clock=new Zv(eM);renderer;postFX;scene=new pv;cameraRig;input;grid=new t_(Bn.gridSize,Bn.cellMeters);terrain=new i_(this.grid);formation=new W_;movement=new X_;phase=new q_;leader;gatherRing;alertRings=new Map;turretRings=new Map;turretLevels=new Map;followers=[];joystick;phaseBtn;pool=new j_(nt.ore.startAmount);hud=new Ty;uiLayer=new Ey;minimap;oreNodes=[];economy=null;production=new ty(this.pool);upgradeSys=new iy(this.pool);hero=new Un("player");units=[];experience=null;matchTime=0;squad;combat;enemies=[];core;skill;relics=[];carriedOrb=null;carriedRelic=null;skillBtn;recallBtn;toggleBar;heroInBaseRange=!1;recall;recallGuidePanel;recallStartSlots=[];commandCenterPanel=new qy;productionPanel=new $y;turretPanel=new Yy;wreckPanel=new jy;relicPanel=new ex;managePanel=new tx;reviveButton=new ix;reviveSys=null;managePanelOpen=!1;interactTarget=null;interactTimer=0;interactDuration=3;lastApproachTargetId=null;lastApproachType=null;currentApproachTarget=null;lastOreBalanceForButtonRefresh=-1;wreckSystem=new ox;wreckRepairPanels=new Map;migrationPanel=new Ky;productionProgressPanels=new Map;relicSiteSystem;guardAI=null;lootCrates=[];scavengers=[];enemyBaseSystem=null;enemyProduction=null;enemyGarrisons=[];masterSeed=Dh.masterSeed||Date.now()>>>0;mapLayout;flowField=null;waveSystem=null;enemyMovement=null;gameOverPanel=null;flowFieldTarget=new w(0,0,0);gameOver=!1;fogOfWar;fogMesh;fogSystem;lastSeenIncomingTime=0;joystickVec=new ie(0,0);joystickMag=0;leaderFacing=0;viewW=0;viewH=0;async start(){z_();const e=document.createElement("canvas");e.style.cssText="display:block;",document.getElementById("app").appendChild(e),document.getElementById("app").appendChild(this.uiLayer.el),this.renderer=await Kv(e),this.renderer.renderer.setPixelRatio(window.devicePixelRatio),this.scene.add(this.terrain.mesh),this.scene.background=new Ne(1710638);const t=new e_;this.scene.add(t.group),this.applyViewport();const i=this.viewW/this.viewH;this.cameraRig=new Jv(i),this.postFX=new jv(this.renderer.renderer),this.postFX.init(this.scene,this.cameraRig.camera,this.viewW,this.viewH),this.input=new Qv(this.uiLayer.el),this.setupInput(),this.joystick=new $_(this.input,this.uiLayer),this.phaseBtn=new Y_(()=>this.onPhaseButton()),this.uiLayer.el.appendChild(this.joystick.el),this.uiLayer.el.appendChild(this.phaseBtn.el),this.skillBtn=new zy(()=>this.onSkillButton()),this.uiLayer.el.appendChild(this.skillBtn.el),this.recallBtn=new ky(()=>this.onRecallButton()),this.uiLayer.el.appendChild(this.recallBtn.el),this.toggleBar=new Vy(n=>this.onToggleProduction(n)),this.uiLayer.el.appendChild(this.toggleBar.el),this.recallGuidePanel=new Xy,this.uiLayer.el.appendChild(this.recallGuidePanel.el),this.uiLayer.el.appendChild(this.commandCenterPanel.el),this.uiLayer.el.appendChild(this.productionPanel.el),this.uiLayer.el.appendChild(this.turretPanel.el),this.uiLayer.el.appendChild(this.wreckPanel.el),this.uiLayer.el.appendChild(this.relicPanel.el),this.uiLayer.el.appendChild(this.managePanel.el),this.uiLayer.el.appendChild(this.migrationPanel.el),this.uiLayer.el.appendChild(this.reviveButton.el),this.gameOverPanel=new dx,this.uiLayer.el.appendChild(this.gameOverPanel.el),this.uiLayer.el.appendChild(this.hud.el),this.hud.attachPulseParent(this.uiLayer.el),li.uiLayer=this.uiLayer,this.scene.add(this.hero.mesh),this.hero.mesh.visible=!1,this.spawnInitialCaravan(),this.spawnInitialWorld(),window.addEventListener("resize",()=>this.onResize()),this.clock.start(n=>this.update(n),()=>this.render()),requestAnimationFrame(()=>this.uiLayer.sync(this.renderer.renderer.domElement))}spawnInitialCaravan(){this.leader=new Ri("commandCenter",1,"player",xn.start.x,xn.start.z),this.leader.toVehicleForm(),this.scene.add(this.leader.mesh),this.gatherRing=new sx(nt.worker.gatherRadius),this.gatherRing.setPosition(this.leader.pos.x,this.leader.pos.z),this.scene.add(this.gatherRing.group)}spawnInitialWorld(){this.mapLayout=Qx(this.masterSeed,Dh),this.spawnOreNodes(),this.economy=new ey(this.leader,this.oreNodes,this.pool),this.followers.forEach(n=>{Je[n.type].levels[0].prodUnit&&this.production.registerBuilding(n)}),this.experience=new ny(this.hero),this.squad=new sy(this.hero,this.movement,this.leader),this.combat=new ay(this.experience,n=>this.units.filter(s=>s.squadId===n)),this.combat.setScene(this.scene),this.combat.setCamera(this.cameraRig.camera),this.combat.setCanvas(this.renderer.renderer.domElement),Zt.init(this.scene),Uo.init(this.scene,4),Ln.init(this.scene,12),ws.init(this.scene,24),rr.init(this.scene,8),Gn.init(this.uiLayer.el),Gn.uiLayer=this.uiLayer,Rs.init(this.uiLayer.el,16),Rs.uiLayer=this.uiLayer,vr.init(this.uiLayer.el),vr.uiLayer=this.uiLayer,Lo.init(),this.guardAI=new Sx(this.combat,this.movement,Gi.alertRange,Gi.leashRange),this.core=new Dy(this.combat,n=>this.findBuildingById(n)),this.core.setScene(this.scene),this.skill=new Uy(this.hero,this.combat),this.skill.onCast=(n,s,a)=>{a.explosion&&(a.explosion.onExplode=o=>{Uo.spawn(o,this.skill.currentRadius,.6);for(let l=0;l<16;l++){const c=l/16*Math.PI*2,h=4+Math.random()*3;Zt.spawn({pos:o.clone(),color:16763955,scale:.5,duration:.5,velocity:new w(Math.cos(c)*h,1+Math.random()*2,Math.sin(c)*h),drag:2})}}),this.combat.spawnSkillProjectile(n,s,a,pn.projectileSpeed,pn.maxRange)},this.recall=new Ny(this.hero),this.recall.onChannelStart=()=>this.onRecallChannelStart(),this.recall.onProgress=(n,s)=>this.onRecallProgress(n,s),this.recall.onComplete=()=>this.onRecallComplete(),this.recall.onCancel=()=>this.onRecallCancel(),this.reviveSys=new nx,this.combat.onAttack=(n,s,a)=>{this.core.onUnitAttack(n,s,a)},this.relicSiteSystem=new bx(this.masterSeed^21217);const e=this.relicSiteSystem.generateFromLayout(this.mapLayout.relicSites);this.scavengers.push(...e.scavengers),this.lootCrates=e.lootCrates;for(const n of e.relics)this.relics.push(n);e.scavengers.forEach(n=>{if(this.scene.add(n.mesh),n.homePos){const s=new ca(Gi.alertRange);s.setPosition(n.homePos.x,n.homePos.z),this.scene.add(s.group),this.alertRings.set(n.id,s)}}),e.lootCrates.forEach(n=>this.scene.add(n.mesh)),e.relics.forEach(n=>this.scene.add(n.mesh));for(const n of this.mapLayout.scatteredChests){const s=new _r(n.ore,n.x,n.z,"openable");this.lootCrates.push(s),this.scene.add(s.mesh)}for(const n of this.mapLayout.scavengerCamps)for(let s=0;s<n.units.length;s++){const a=s/n.units.length*Math.PI*2,o=n.x+Math.cos(a)*3,l=n.z+Math.sin(a)*3,c=new Et(n.units[s].unitType,1,"enemy",o,l);c.homePos={x:n.x,z:n.z},this.scavengers.push(c),this.scene.add(c.mesh);const h=new ca(Gi.alertRange);h.setPosition(n.x,n.z),this.scene.add(h.group),this.alertRings.set(c.id,h)}this.spawnWreckScavengers(),this.enemyBaseSystem=new wx(this.pool);const t=this.enemyBaseSystem.generateFromLayout(this.mapLayout.enemyBases);t.forEach(n=>this.scene.add(n.mesh));const i=n=>{if(!this.cameraRig)return;const s=this.cameraRig.camera,a=this.renderer.renderer.domElement.getBoundingClientRect(),o=new w(n.worldPos.x,n.worldPos.y,n.worldPos.z),l=Pn(o,s,a);l&&Rs.spawn({screenPos:{x:l.x,y:l.y},amount:n.amount})};this.economy?.setResourceSink(i),this.economy?.setNoOreSink(n=>{Lo.show({text:n==="deploy"?nt.noOreHint.deployText:nt.noOreHint.depletedText,type:"warn",durationMs:nt.noOreHint.durationMs})}),this.production.setResourceSink(i),this.enemyBaseSystem.setResourceSink(i),this.enemyProduction=new Tx;for(const n of t)if(Je[n.type].levels[0].prodUnit){this.enemyProduction.registerBuilding(n);const s=new ca(Gi.alertRange);s.setPosition(n.pos.x,n.pos.z),this.scene.add(s.group),this.alertRings.set(n.id,s)}this.wreckSystem.generateWrecksFromLayout(this.masterSeed^40503,this.mapLayout.wrecks),this.wreckSystem.wrecks.forEach(n=>{this.scene.add(n.mesh),this.scene.add(n.rangeRing.group)}),this.flowField=new lx(this.grid),this.flowField.generate(this.leader.pos),this.waveSystem=new cx(this.masterSeed^41244),this.enemyMovement=new hx(this.movement),this.fogOfWar=new Ex(this.grid),this.fogMesh=new Rx(this.grid),this.fogSystem=new Px(this.fogOfWar),this.scene.add(this.fogMesh.mesh),this.minimap=new Wx(this.cameraRig.camera,this.cameraRig,this.grid,this.fogOfWar),this.uiLayer.el.appendChild(this.minimap.el)}spawnOreNodes(){for(const e of this.mapLayout.oreNodes){const t=new Z_(e.x,e.z);this.oreNodes.push(t),this.scene.add(t.mesh)}}setupInput(){this.input.onJoystickStart(()=>{}),this.input.onJoystick((e,t,i)=>{this.joystickMag=i,i>0&&this.joystickVec.set(e,t).normalize()}),this.input.onJoystickEnd(()=>{this.joystickMag=0})}onPhaseButton(){this.phase.phase==="caravan"?(this.phase.requestDeploy(),this.leader.facing={...Bo},this.followers.forEach(e=>{e.facing={...Bo}})):this.phase.phase==="base"&&this.phase.requestPackUp()}onSkillButton(){if(this.phase.phase!=="base")return;const e=[...this.enemies,...this.scavengers,...this.enemyGarrisons,...this.enemyBuildingsForCombat()];this.skill.cast(e)}onRecallButton(){this.phase.phase==="base"&&(this.heroInBaseRange?this.phase.requestPackUp():this.recall.start())}onToggleProduction(e){if(!this.economy)return;if(e==="cc"){this.economy.setWorkerPaused(!this.economy.isWorkerPaused);return}const t=Number(e),i=this.findModuleById(t);i&&this.production.setPaused(i,!this.production.isPaused(i))}findModuleById(e){return this.leader.id===e?this.leader:this.followers.find(t=>t.id===e)}iconForModuleType(e){switch(e){case"rifleBarracks":return Sy;case"flamerBarracks":return by;case"mechFactory":return wy;default:return""}}renderToggleBar(){if(!this.economy)return;const e=this.economy.getProducingTimer()>0,t=nt.worker.cost,i=e||this.economy.isWorkerPaused?void 0:this.economy.workers.length>=this.economy.workerCap?"full":this.pool.balance<t?"noOre":void 0,n=[{key:"cc",iconDataUri:My,isPaused:this.economy.isWorkerPaused,progress:e?1-this.economy.getProducingTimer()/nt.worker.prodTime:0,unitCount:this.economy.workers.length,unitCap:this.economy.workerCap,cost:t,idleReason:i}];for(const s of this.followers){if(!r_.has(s.type))continue;const a=Je[s.type].levels[s.level-1],o=a.prodUnit,l=this.production.getQueueTimer(s),c=a.prodTimeSec??0,h=o?ii[o].cost:0,d=this.production.isPaused(s),u=this.production.getUnitCount(s),p=a.unitCap??0,g=l>0,v=g||d?void 0:u>=p?"full":this.pool.balance<h?"noOre":void 0;n.push({key:String(s.id),iconDataUri:this.iconForModuleType(s.type),isPaused:d,progress:g&&c>0?1-l/c:0,unitCount:u,unitCap:p,cost:h,idleReason:v})}this.toggleBar.render(n)}onRecallChannelStart(){const e=this.hero.pos.clone();this.recallStartSlots=[];const t=Ln.spawnPulse(e,At.startRingRadius,At.pulseDuration,At.startRingWidth);t&&this.recallStartSlots.push(t);const i=Ln.spawnCharge(e,At.startRingRadius,At.channelSec,At.startRingWidth);i&&this.recallStartSlots.push(i),this.recallGuidePanel.show(),this.recallGuidePanel.render({progress:0,remainingSec:At.channelSec}),this.recallBtn.setChanneling(.001,At.channelSec)}onRecallProgress(e,t){this.recallGuidePanel.render({progress:e,remainingSec:t}),this.recallBtn.setChanneling(e,t);const i=this.renderer.renderer.domElement.getBoundingClientRect();if(i.width===0||i.height===0)return;const n=Hn(this.hero),s=new w(this.hero.mesh.position.x,this.hero.mesh.position.y+n,this.hero.mesh.position.z),a=Pn(s,this.cameraRig.camera,i);if(!a)return;const o=er(a.x,a.y,this.recallGuidePanel.el.getBoundingClientRect(),i);this.recallGuidePanel.anchorTo(o.x,o.y,o.flipBelow)}onRecallComplete(){this.recallStartSlots.forEach(s=>Ln.release(s)),this.recallStartSlots=[],this.recallGuidePanel.hide(),this.recallBtn.setChanneling(0,0);const e=this.leader,t=e?e.pos:xn.start,i=[this.hero,...this.units.filter(s=>s.squadId===1&&s.alive)],n=i.length;i.forEach((s,a)=>{if(a===0)s.pos.set(t.x,0,t.z+At.arriveOffsetZ);else{const o=a/n*Math.PI*2;s.pos.set(t.x+Math.cos(o)*At.squadRingRadius,0,t.z+Math.sin(o)*At.squadRingRadius+2)}}),i.forEach(s=>{Ln.spawnExpand(new w(s.pos.x,0,s.pos.z),At.arriveRingRadius,At.expandDuration,At.arriveRingWidth)})}onRecallCancel(){this.recallStartSlots.forEach(e=>Ln.release(e)),this.recallStartSlots=[],this.recallGuidePanel.hide(),this.recallBtn.setChanneling(0,0)}updateRecall(e){if(this.recall.active){if(this.joystickMag>.1){this.recall.cancel();return}if(this.phase.phase!=="base"){this.recall.cancel();return}this.recall.update(e)}}onHealViz(e){for(const t of e){const i=this.unitById(t.unitId);if(!i){ws.detach(t.unitId);continue}t.selfHealing?(ws.attach(t.unitId,i.mesh),t.amount>0&&(ws.pulse(t.unitId),this.spawnHealText(i,t.amount))):ws.detach(t.unitId)}}unitById(e){const t=this.units.find(i=>i.id===e);return t||(this.hero&&this.hero.id===e?this.hero:null)}spawnHealText(e,t){if(!this.cameraRig)return;const i=this.cameraRig.camera,n=this.renderer.renderer.domElement.getBoundingClientRect(),s=e.pos.clone().add(new w(0,2,0)),a=Pn(s,i,n);a&&Gn.spawn({worldPos:{x:s.x,y:s.y,z:s.z},amount:t,targetTeam:e.team,isCrit:!1,screenPos:{x:a.x,y:a.y},heal:{color:"#33ff66",prefix:"+"}})}checkSquadWipe(){if(!this.carriedRelic||this.carriedRelic.state!=="carried")return;const e=!this.hero.alive||this.hero.dead,t=this.units.some(i=>i.alive);if(e&&!t){const i=this.squad?this.squad.controlCorePos():this.hero.pos;this.carriedRelic.drop({x:i.x,z:i.z}),this.carriedOrb&&(this.scene.remove(this.carriedOrb.mesh),this.carriedOrb=null),this.carriedRelic=null}}updateContextPanel(){if(this.managePanelOpen){this.hideAllApproachPanels(),this.lastApproachTargetId=null,this.lastApproachType=null;return}if(this.phase.phase!=="base"){this.hideAllApproachPanels(),this.lastApproachTargetId=null,this.lastApproachType=null;return}const e=this.squad?this.squad.controlCorePos():this.hero.pos,t=[],i=(o,l,c,h)=>{if(!o.alive)return;const d=Math.hypot(o.pos.x-e.x,o.pos.z-e.z);d<=c&&t.push({entity:o,type:l,dist:d,priority:h})};this.leader.alive&&i(this.leader,"commandCenter",4,3);for(const o of this.followers)Je[o.type].levels[0].prodUnit?i(o,"production",4,3):o.type==="turret"&&i(o,"turret",4,3);for(const o of this.relics)o.interactable&&i(o,"relic",2,1);for(const o of this.lootCrates)o.state!=="opened"&&i(o,"crate",2,1);for(const o of this.wreckSystem.wrecks)o.interactable&&i(o,"wreck",Gt.repairRange,2);if(t.length===0){this.hideAllApproachPanels(),this.lastApproachTargetId=null,this.lastApproachType=null;return}t.sort((o,l)=>o.dist-l.dist||o.priority-l.priority);const n=t[0],s=n.type==="relic"&&this.interactTarget!==n.entity;(n.type==="turret"||n.type==="wreck"||s)&&n.entity.id===this.lastApproachTargetId&&n.type===this.lastApproachType||(this.hideAllApproachPanels(),this.renderApproachPanel(n),this.lastApproachTargetId=n.entity.id,this.lastApproachType=n.type,this.currentApproachTarget=n.entity)}hideAllApproachPanels(){this.commandCenterPanel.hide(),this.productionPanel.hide(),this.turretPanel.hide(),this.wreckPanel.hide(),this.relicPanel.hide(),this.currentApproachTarget=null}updateApproachPanelAnchor(){const e=this.currentApproachTarget;if(!e||!e.alive)return;const t=this.renderer.renderer.domElement.getBoundingClientRect();if(t.width===0||t.height===0)return;const i=Hn(e),n=new w(e.mesh.position.x,e.mesh.position.y+i,e.mesh.position.z),s=Pn(n,this.cameraRig.camera,t);if(!s)return;const a=[this.commandCenterPanel,this.productionPanel,this.turretPanel,this.wreckPanel,this.relicPanel].find(l=>l.isVisible());if(!a)return;const o=er(s.x,s.y,a.el.getBoundingClientRect(),t);a.anchorTo(o.x,o.y,o.flipBelow)}updateWreckRepairPanels(){const e=this.renderer.renderer.domElement.getBoundingClientRect();if(e.width===0||e.height===0)return;const t=new Set;for(const i of this.wreckSystem.wrecks){if(i.state!=="repairing"&&i.state!=="paused")continue;t.add(i.id);let n=this.wreckRepairPanels.get(i.id);n||(n=new Zy,this.uiLayer.el.appendChild(n.el),this.wreckRepairPanels.set(i.id,n)),n.render({label:i.nameText(),progress:1-i.repairTimer/i.repairDuration,remainingSec:i.repairTimer,status:i.state==="repairing"?"repairing":"paused"}),n.show();const s=new w(i.mesh.position.x,i.mesh.position.y+Gt.repairPanelAnchorY,i.mesh.position.z),a=Pn(s,this.cameraRig.camera,e);if(!a){n.hide();continue}const o=er(a.x,a.y,n.el.getBoundingClientRect(),e);n.anchorTo(o.x,o.y,o.flipBelow)}for(const[i,n]of this.wreckRepairPanels)t.has(i)||(n.el.remove(),this.wreckRepairPanels.delete(i))}updateMigrationPanel(){if(!this.phase.isTransitioning()){this.migrationPanel.hide();return}const e=this.renderer.renderer.domElement.getBoundingClientRect();if(e.width===0||e.height===0)return;const t=this.phase.phase==="deploying",i=t?kn.migration.deployGuideSec:kn.migration.packUpGuideSec,n=this.phase.migrationProgress;this.migrationPanel.render({title:t?"展开基地中":"收起基地中",progress:n,remainingSec:(1-n)*i}),this.migrationPanel.show();const s=Hn(this.leader),a=new w(this.leader.mesh.position.x,this.leader.mesh.position.y+s,this.leader.mesh.position.z),o=Pn(a,this.cameraRig.camera,e);if(!o){this.migrationPanel.hide();return}const l=er(o.x,o.y,this.migrationPanel.el.getBoundingClientRect(),e);this.migrationPanel.anchorTo(l.x,l.y,l.flipBelow)}updateProductionProgressPanels(){if(this.phase.phase!=="base"){this.productionProgressPanels.size>0&&(this.productionProgressPanels.forEach(a=>a.el.remove()),this.productionProgressPanels.clear());return}const e=this.renderer.renderer.domElement.getBoundingClientRect();if(e.width===0||e.height===0)return;const t=new Set;for(const a of this.followers){const o=Je[a.type].levels[a.level-1];if(!o.prodUnit||!o.prodTimeSec)continue;const l=this.production.getQueueTimer(a);if(l<=0)continue;t.add(a.id);const c=this.getOrCreateProgressPanel(a.id);if(this.currentApproachTarget?.id===a.id){c.hide();continue}c.render({progress:1-l/o.prodTimeSec,team:"player"}),c.show(),this.anchorPanelToBuilding(c,a)}const i=this.leader,n=this.economy;if(n&&i.alive){const a=n.getProducingTimer();if(a>0){t.add(i.id);const o=this.getOrCreateProgressPanel(i.id);this.currentApproachTarget?.id===i.id?o.hide():(o.render({progress:1-a/nt.worker.prodTime,team:"player"}),o.show(),this.anchorPanelToBuilding(o,i))}}const s=this.enemyProduction;if(s&&this.enemyBaseSystem)for(const a of this.enemyBaseSystem.buildings){const o=Je[a.type].levels[a.level-1];if(!o.prodUnit||!o.prodTimeSec)continue;const l=s.getQueueTimer(a);if(l<=0)continue;t.add(a.id);const c=this.getOrCreateProgressPanel(a.id);if(!this.fogOfWar.isEntityVisible(a.pos)){c.hide();continue}c.render({progress:1-l/o.prodTimeSec,team:"enemy"}),c.show(),this.anchorPanelToBuilding(c,a)}for(const[a,o]of this.productionProgressPanels)t.has(a)||(o.el.remove(),this.productionProgressPanels.delete(a))}getOrCreateProgressPanel(e){let t=this.productionProgressPanels.get(e);return t||(t=new Qy,this.uiLayer.el.appendChild(t.el),this.productionProgressPanels.set(e,t)),t}static PROGRESS_STAR_OFFSET=.5;anchorPanelToBuilding(e,t){const i=this.renderer.renderer.domElement.getBoundingClientRect(),n=Hn(t)+Nl.PROGRESS_STAR_OFFSET,s=new w(t.mesh.position.x,t.mesh.position.y+n,t.mesh.position.z),a=Pn(s,this.cameraRig.camera,i);if(!a){e.hide();return}const o=er(a.x,a.y,e.el.getBoundingClientRect(),i);e.anchorTo(o.x,o.y,o.flipBelow)}renderApproachPanel(e){switch(e.type){case"commandCenter":this.renderCommandCenter(e.entity);break;case"production":this.renderProduction(e.entity);break;case"turret":this.renderTurret(e.entity);break;case"wreck":this.renderWreck(e.entity);break;case"relic":case"crate":this.renderRelicOrCrate(e.entity,e.type);break}}syncApproachButtonAffordability(){if(this.managePanelOpen){this.managePanel.syncAllUpgrades(this.pool.balance);return}if(this.phase.phase==="base"){if(this.turretPanel.isVisible()){const e=this.currentApproachTarget;if(!e)return;const t=Je[e.type].maxLevel,i=e.level>=t?0:Je[e.type].levels[e.level-1].upgradeCost??0;this.turretPanel.syncUpgrade(e.level<t&&this.pool.balance>=i)}else if(this.wreckPanel.isVisible()){const e=this.currentApproachTarget;if(!e)return;const t=this.scavengers.some(i=>i.alive&&Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)<10);this.wreckPanel.syncRepair(!t&&this.pool.balance>=e.repairCost)}}}renderCommandCenter(e){this.commandCenterPanel.show();const t=Je.commandCenter.maxLevel,i=e.level>=t?0:Je.commandCenter.levels[e.level-1].upgradeCost??0,n=this.pool.balance>=i&&e.level<t,s=this.economy,a=nt.worker.prodTime,o=s.getProducingTimer(),l=o>0;this.commandCenterPanel.render({level:e.level,upgradeCost:i,canUpgrade:n,isMaxLevel:e.level>=t,revive:{state:this.reviveSys?.state??"idle",canRequest:this.reviveSys?this.reviveSys.canRequest(this.pool,this.hero,e.alive):!1,cost:zt.revive.cost,timer:this.reviveSys?.reviveTimer??0,duration:this.reviveSys?.reviveDuration??0},worker:{count:s.workers.length,cap:s.workerCap,isProducing:l,progress:l&&a>0?1-o/a:0,remainingSec:o,prodTimeSec:a,unitCost:nt.worker.cost},isPaused:s.isWorkerPaused,onUpgrade:()=>{this.upgradeModuleWithViz(e)},onRevive:()=>{this.reviveSys?.request(this.pool,this.leader.level)},onTogglePause:()=>{s.setWorkerPaused(!s.isWorkerPaused)}})}openManagePanel(){this.managePanelOpen=!0,this.hideAllApproachPanels();const e=[this.leader,...this.followers].map(t=>{const i=Je[t.type].maxLevel;return{label:this.buildingLabel(t.type),level:t.level,coreLabel:t.coreId?this.coreLabel(t.coreId):"无",upgradeCost:t.level>=i?0:Je[t.type].levels[t.level-1].upgradeCost??0,canUpgrade:t.level<i&&this.pool.balance>=(t.level>=i?0:Je[t.type].levels[t.level-1].upgradeCost??0),isMaxLevel:t.level>=i,onUpgrade:()=>{this.upgradeModuleWithViz(t)}}});this.managePanel.render({buildings:e,onClose:()=>{this.managePanelOpen=!1,this.managePanel.hide()}}),this.managePanel.show()}renderProduction(e){this.productionPanel.show();const t=Je[e.type].levels[e.level-1],i=Je[e.type].maxLevel,n=e.level>=i?0:Je[e.type].levels[e.level-1].upgradeCost??0,s=this.pool.balance>=n&&e.level<i,a=t.prodUnit,o=this.production.getQueueTimer(e),l=t.prodTimeSec??0,c=o>0;this.productionPanel.render({label:this.buildingLabel(e.type),level:e.level,upgradeCost:n,canUpgrade:s,isMaxLevel:e.level>=i,canSocket:!!this.carriedRelic&&!e.coreId,hasCore:!!this.carriedRelic,socketedCoreLabel:e.coreId?this.coreLabel(e.coreId):void 0,isPaused:this.production.isPaused(e),production:{unitLabel:a?this.unitLabel(a):"—",unitCost:a?ii[a].cost:0,progress:c&&l>0?1-o/l:0,queueTimer:o,prodTimeSec:l,unitCount:this.production.getUnitCount(e),unitCap:t.unitCap??0,isProducing:c},onUpgrade:()=>{this.upgradeModuleWithViz(e)},onSocket:()=>{this.socketCore(e),this.lastApproachTargetId=null},onTogglePause:()=>{this.production.setPaused(e,!this.production.isPaused(e))}})}renderTurret(e){this.turretPanel.show();const t=Je[e.type].maxLevel,i=e.level>=t?0:Je[e.type].levels[e.level-1].upgradeCost??0;this.turretPanel.render({level:e.level,upgradeCost:i,canUpgrade:this.pool.balance>=i&&e.level<t,isMaxLevel:e.level>=t,canSocket:!!this.carriedRelic&&!e.coreId,hasCore:!!this.carriedRelic,socketedCoreLabel:e.coreId?this.coreLabel(e.coreId):void 0,onUpgrade:()=>{this.upgradeModuleWithViz(e),this.lastApproachTargetId=null},onSocket:()=>{this.socketCore(e),this.lastApproachTargetId=null}})}renderWreck(e){this.wreckPanel.show();const i=!this.scavengers.some(n=>n.alive&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<10)&&this.pool.balance>=e.repairCost;this.wreckPanel.render({label:"损坏的"+this.buildingLabel(e.vehicleType),conditionLabel:this.conditionLabel(e.condition),cost:e.repairCost,durationSec:e.repairDuration,canAfford:i,starLevel:e.starLevel,onRepair:()=>{this.wreckSystem.startRepair(e,this.pool,n=>this.spawnWreckHarassers(n))}})}renderRelicOrCrate(e,t){if(this.relicPanel.show(),t==="relic"){const i=e;this.carriedRelic?this.relicPanel.renderBlocked("需先镶嵌当前携带的核心"):this.interactTarget===e?this.relicPanel.renderProgress({label:this.coreLabel(i.coreId),progress:this.interactTimer/this.interactDuration,timer:this.interactTimer,duration:this.interactDuration}):this.relicPanel.renderInfo(this.coreLabel(i.coreId),this.coreDescription(i.coreId),()=>{this.interactTarget=e,this.interactTimer=0})}else e.state==="guarded"?this.relicPanel.renderBlocked("清散兵后可开"):this.interactTarget===e?this.relicPanel.renderProgress({label:"矿石宝箱",progress:this.interactTimer/this.interactDuration,timer:this.interactTimer,duration:this.interactDuration}):this.relicPanel.renderProgress({label:"矿石宝箱",progress:0,timer:0,duration:this.interactDuration})}updateTickInteraction(e){if(this.managePanelOpen||this.phase.phase!=="base"){this.interactTarget=null,this.interactTimer=0;return}const t=this.squad?this.squad.controlCorePos():this.hero.pos;if(this.interactTarget&&this.interactTarget.alive){if(Math.hypot(this.interactTarget.pos.x-t.x,this.interactTarget.pos.z-t.z)>2){this.interactTarget=null,this.interactTimer=0;return}if(this.interactTarget instanceof gr&&this.carriedRelic){this.interactTarget=null,this.interactTimer=0;return}if(this.interactTarget instanceof _r&&this.interactTarget.state!=="openable"){this.interactTarget=null,this.interactTimer=0;return}this.interactTimer+=e,this.interactTimer>=this.interactDuration&&(this.completeInteraction(this.interactTarget),this.interactTarget=null,this.interactTimer=0)}else this.tryStartInteraction(t)}tryStartInteraction(e){let t=null,i=2;for(const n of this.lootCrates)if(n.state==="openable"){const s=Math.hypot(n.pos.x-e.x,n.pos.z-e.z);s<=i&&(t=n,i=s)}t&&(this.interactTarget=t,this.interactTimer=0)}completeInteraction(e){if(e instanceof gr)this.pickupRelic(e);else if(e instanceof _r){const t=e.oreAmount;e.open(),this.pool.earn(t),this.scene.remove(e.mesh),e.dispose(),this.lootCrates=this.lootCrates.filter(n=>n!==e);const i=this.worldToScreen(e.pos);vr.spawn({fromScreen:i,amount:t,hud:this.hud})}}worldToScreen(e){const t=e.clone().project(this.cameraRig.camera);return{x:(t.x+1)/2*this.viewW,y:(-t.y+1)/2*this.viewH}}coreLabel(e){return Ph.find(t=>t.id===e)?.label??""}coreDescription(e){return Ph.find(t=>t.id===e)?.description??""}unitLabel(e){return{rifle:"步枪兵",flamer:"喷火兵",mech:"机甲"}[e]}pickupRelic(e){e.pickup(),this.carriedRelic=e,this.carriedOrb=new Oy(e.coreId),this.scene.add(this.carriedOrb.mesh)}socketCore(e){if(!this.carriedRelic||!this.carriedOrb)return;e.coreId=this.carriedRelic.coreId,this.carriedRelic.socket();const t=this.moduleRoofHeight(e);this.carriedOrb.mesh.parent&&this.carriedOrb.mesh.parent.remove(this.carriedOrb.mesh),this.carriedOrb.socketTo(e,t),e.coreEffect=this.carriedOrb,this.carriedRelic=null,this.carriedOrb=null}moduleRoofHeight(e){return{commandCenter:6,rifleBarracks:3.4,flamerBarracks:4.5,mechFactory:4.4,turret:3}[e.type]??3}onWreckRepaired(e){const t=new Ri(e.vehicleType,e.starLevel,"player",e.pos.x,e.pos.z);t.toVehicleForm(),this.phase.phase==="base"&&(t.pendingDeploy=!0),this.followers.push(t),this.scene.add(t.mesh),this.scene.remove(e.mesh),this.scene.remove(e.rangeRing.group),e.dispose()}updateApproachVehicles(e){const t=this.followers.filter(s=>s.pendingDeploy);if(t.length===0)return;const i=this.formation.computeTargets(this.leader,this.followers,0);for(const s of t){const a=i.get(s.id);if(!a)continue;this.movement.moveToward(s,a,ko,e,!1),Math.hypot(s.pos.x-a.x,s.pos.z-a.z)<.5&&(s.facing={...Bo},s.pendingDeploy=!1,s.toBuildingForm(),this.swapMeshInScene(s),Je[s.type].levels[0].prodUnit&&this.production.registerBuilding(s))}const n=[this.leader,...this.followers.filter(s=>!s.pendingDeploy)];this.movement.applySeparation(t,3,8,e,n)}spawnWaveEnemy(e){if(e.miniBoss){const i=new mn("enemy",e.pos.x,e.pos.z);this.enemies.push(i),this.scene.add(i.mesh);return}const t=new Et(e.unitType,e.level,"enemy",e.pos.x,e.pos.z);this.enemies.push(t),this.scene.add(t.mesh)}spawnWreckScavengers(){for(const e of this.mapLayout.wrecks)if(e.guard)for(let t=0;t<e.guard.count;t++){const i=t/e.guard.count*Math.PI*2,n=e.x+Math.cos(i)*2,s=e.z+Math.sin(i)*2,a=new Et(e.guard.unitType,1,"enemy",n,s);if(a.homePos={x:e.x,z:e.z},this.scavengers.push(a),this.scene.add(a.mesh),a.homePos){const o=new ca(Gi.alertRange);o.setPosition(a.homePos.x,a.homePos.z),this.scene.add(o.group),this.alertRings.set(a.id,o)}}}spawnWreckHarassers(e){const t=Gt.harass.byCondition[e.condition],i=Object.entries(t.units),n=i.reduce((o,[,l])=>o+l,0);if(n===0)return;const s=Gt.harass.spawnDist;let a=0;for(const[o,l]of i)for(let c=0;c<l;c++){const h=a/n*Math.PI*2,d=e.pos.x+Math.cos(h)*s,u=e.pos.z+Math.sin(h)*s,p=new Et(o,1,"enemy",d,u);p.homePos={x:e.pos.x,z:e.pos.z},this.scavengers.push(p),this.scene.add(p.mesh),a++}}checkGameOver(){this.gameOver||(this.leader.hp<=0?this.triggerGameOver("lose"):this.matchTime>=kn.matchDurationSec&&this.triggerGameOver("win"))}triggerGameOver(e){this.gameOver=!0,this.gameOverPanel&&this.gameOverPanel.show(e,this.matchTime,()=>{location.reload()})}buildingLabel(e){return{commandCenter:"指挥中心",rifleBarracks:"步枪兵营",flamerBarracks:"喷火兵营",mechFactory:"机甲工厂",turret:"防御炮塔"}[e]}conditionLabel(e){return{worn:"普通废弃",damaged:"严重损坏",intact:"完整遗留"}[e]}update(e){this.phase.update(e),this.phaseBtn.setMode(this.phase.phase==="base"?"base":"caravan"),this.phaseBtn.setLoading(this.phase.isTransitioning(),this.phase.migrationProgress);const t=this.phase.phase==="caravan"||this.phase.phase==="deploying";if(this.phaseBtn.el.style.display=t?"block":"none",this.handlePhaseTransition(),this.matchTime+=e,this.squad&&this.combat){const n=this.joystickMag>.1,o=[...this.phase.phase==="base"?[...this.units,this.hero]:[],...this.enemies],c=[...[this.leader,...this.followers],...this.enemyBuildingsForCombat()],h=[...this.scavengers,...this.enemyGarrisons];this.squad.update(e,n,o,c,this.combat,h),this.swapHeroMeshIfNeeded(),this.swapUnitLevelUpViz()}if(this.guardAI){const n=[this.leader,...this.followers],s=[...this.units,this.hero,...n],a=[...this.scavengers,...this.enemyGarrisons];this.guardAI.update(e,a,s)}if(this.waveSystem&&this.flowField&&this.enemyMovement){const n={x:this.leader.pos.x,z:this.leader.pos.z};this.waveSystem.update(e,this.matchTime,n,a=>this.spawnWaveEnemy(a));const s=[...this.units,this.hero,this.leader,...this.followers];this.enemyMovement.update(e,this.enemies,this.flowField,s)}if(this.enemies=this.enemies.filter(n=>n.alive?(n.syncMesh(),!0):(this.scene.remove(n.mesh),!1)),this.scavengers=this.scavengers.filter(n=>{if(!n.alive){this.scene.remove(n.mesh);const s=this.alertRings.get(n.id);return s&&(s.dispose(),this.alertRings.delete(n.id)),!1}return n.syncMesh(),!0}),this.enemyGarrisons=this.enemyGarrisons.filter(n=>n.alive?(n.syncMesh(),!0):(this.scene.remove(n.mesh),n.sourceBuildingId!=null&&this.enemyProduction&&this.enemyProduction.onUnitDeath(n),!1)),!this.leader.alive&&this.leader.mesh.parent&&(this.scene.remove(this.leader.mesh),this.hero.hp=0),this.followers=this.followers.filter(n=>n.alive?(n.syncMesh(),!0):(n.mesh.parent&&this.scene.remove(n.mesh),this.units.forEach(s=>{s.sourceBuildingId===n.id&&(s.hp=0)}),!1)),this.phase.phase==="packing"&&(this.units=this.units.filter(a=>{if(!a.alive)return!1;if(!a.mesh.parent)return!0;const o=this.findBuildingById(a.sourceBuildingId??this.leader.id);return o&&(this.movement.moveToward(a,o.pos,6,e),a.syncMesh(),Math.hypot(a.pos.x-o.pos.x,a.pos.z-o.pos.z)<=1&&this.scene.remove(a.mesh)),!0}),this.hero.alive&&this.hero.mesh.visible&&(this.movement.moveToward(this.hero,this.leader.pos,6,e),this.hero.syncMesh(),Math.hypot(this.hero.pos.x-this.leader.pos.x,this.hero.pos.z-this.leader.pos.z)<=1&&(this.hero.mesh.visible=!1)),this.economy))for(const a of this.economy.workerList){if(!a.mesh.parent)continue;this.movement.moveToward(a,this.leader.pos,6,e,!1),a.syncMesh(),Math.hypot(a.pos.x-this.leader.pos.x,a.pos.z-this.leader.pos.z)<=1&&this.scene.remove(a.mesh)}if(this.fogSystem){const n=this.collectFogSources();this.fogSystem.update(n),this.fogMesh.updateTextures(this.fogOfWar),this.applyEntityFogVisibility()}if(this.checkGameOver(),this.phase.phase==="base"){this.economy?.update(e),this.production.update(e,(s,a)=>{s.squadId=1,this.units.push(s),this.scene.add(s.mesh),this.squad?.addMember(s)}),this.units.forEach(s=>s.syncMesh()),this.economy?.workerList.forEach(s=>{}),this.upgradeSys,this.experience,!this.hero.alive&&!this.hero.dead&&this.hero.die(),this.hero.update(e),this.reviveSys&&this.reviveSys.update(e,()=>{this.hero.dead=!1,this.hero.hp=this.hero.maxHp,this.hero.pos.set(this.leader.pos.x,0,this.leader.pos.z),this.hero.mesh.traverse(s=>{if(s instanceof K){const a=s.material;a.transparent=!1,a.opacity=1}})}),this.skill.update(e),this.updateRecall(e),this.core.auraTick(e,this.units,s=>this.findBuildingById(s),s=>this.onHealViz(s)),this.core.setEnemies([...this.units,this.hero,...this.enemies,...this.scavengers,...this.enemyGarrisons]),this.relics.forEach(s=>s.update(e)),this.carriedOrb&&this.carriedRelic&&this.carriedRelic.state==="carried"&&(this.carriedOrb.followLeader(this.squad.controlCorePos()),this.carriedOrb.update(e));for(const s of[this.leader,...this.followers])s.coreEffect&&s.coreEffect.update(e);this.checkSquadWipe(),this.relicSiteSystem.updateScavengerStates();const n=s=>{const a=Gt.repairRange;return this.hero.alive&&Math.hypot(this.hero.pos.x-s.pos.x,this.hero.pos.z-s.pos.z)<=a?!0:this.units.some(o=>o.alive&&Math.hypot(o.pos.x-s.pos.x,o.pos.z-s.pos.z)<=a)};if(this.wreckSystem.update(e,s=>this.onWreckRepaired(s),n),this.enemyProduction&&this.enemyBaseSystem&&(this.enemyProduction.update(e,this.enemyBaseSystem.buildings,(s,a)=>{s.squadId=void 0,this.enemyGarrisons.push(s),this.scene.add(s.mesh)}),this.enemyBaseSystem.update(e)),this.updateTickInteraction(e),this.units=this.units.filter(s=>s.alive?(s.syncMesh(),!0):(this.scene.remove(s.mesh),s.sourceBuildingId!=null&&this.production.onUnitDeath(s),!1)),this.enemyBaseSystem)for(const s of this.enemyBaseSystem.buildings){if(!s.alive&&s.mesh.parent&&this.scene.remove(s.mesh),!s.alive&&this.enemyProduction){this.enemyProduction.unregisterBuilding(s);const a=this.alertRings.get(s.id);a&&(a.dispose(),this.alertRings.delete(s.id))}s.alive&&s.type==="turret"&&s.syncMesh()}}this.phase.phase==="packing"&&this.production.clearQueues();for(const n of this.collectHealthBarEntities())n.healthBar&&Qn.tickFlash(n.healthBar);if(Zt.update(e),Gn.update(),Rs.update(),Lo.update(),this.combat.tickFlash(),ua.update(),Uo.update(),Ln.update(),ws.update(),rr.update(),this.syncTurretRings(),this.updateContextPanel(),this.pool.balance!==this.lastOreBalanceForButtonRefresh&&(this.lastOreBalanceForButtonRefresh=this.pool.balance,this.syncApproachButtonAffordability()),this.hero.syncMesh(),this.hud.setOre(this.pool.balance),this.hud.setTime(Math.max(0,kn.matchDurationSec-this.matchTime)),this.waveSystem){const n=this.waveSystem.nextWave,s=this.waveSystem.currentWave,a=this.waveSystem.incomingWaveTime;a!==this.lastSeenIncomingTime&&a>0?(this.lastSeenIncomingTime=a,this.hud.setWave({countdownSec:0,waveType:s.type,isIncoming:!0})):n?this.hud.setWave({countdownSec:Math.max(0,n.time-this.matchTime),waveType:n.type,isIncoming:!1}):this.hud.setWave({countdownSec:0,waveType:s?.type??"main",isIncoming:!1})}if(this.skillBtn){this.skillBtn.setReady(this.skill?.canCast()??!1,!0);const n=this.skill?.currentCooldownSec??0,s=this.skill?.cooldownLeft??0,a=n>0?Math.min(1,s/n):0;this.skillBtn.setCooldown(a,s),this.skillBtn.setDead(!this.hero.alive&&this.hero.dead)}if(this.skillBtn){const n=this.phase.phase==="base";this.skillBtn.el.style.display=n?"block":"none"}if(this.recallBtn){const n=this.phase.phase==="base";if(this.recallBtn.el.style.display=n?"block":"none",n){const s=this.hero.pos.x-this.leader.pos.x,a=this.hero.pos.z-this.leader.pos.z;this.heroInBaseRange=Math.hypot(s,a)<=nt.worker.gatherRadius,this.recall.active||this.recallBtn.setMode(this.heroInBaseRange?"pack":"recall"),this.recall.active||this.recallBtn.setReady(this.hero.alive&&!this.hero.dead),this.recallBtn.setDead(!this.hero.alive&&this.hero.dead)}}this.hero.alive||this.phase.phase!=="base"?this.reviveButton.hide():this.reviveSys&&(this.reviveButton.show(),this.reviveButton.render({state:this.reviveSys.state,canRequest:this.reviveSys.canRequest(this.pool,this.hero,this.leader.alive),cost:zt.revive.cost,timer:this.reviveSys.reviveTimer,duration:this.reviveSys.reviveDuration,onRequest:()=>{this.reviveSys?.request(this.pool,this.leader.level)}})),this.phase.phase==="caravan"?this.updateCaravan(e):this.phase.phase==="base"&&(this.updateSquad(e),this.updateApproachVehicles(e)),this.phase.phase==="base"?(this.toggleBar.show(),this.renderToggleBar()):this.toggleBar.hide(),this.leader.syncMesh(),this.followers.forEach(n=>n.syncMesh()),this.gatherRing.setPosition(this.leader.pos.x,this.leader.pos.z);const i=this.phase.phase==="base"?this.squad?this.squad.controlCorePos():this.leader.pos:this.leader.pos;this.cameraRig.follow(i,e),this.minimap.render({blips:this.collectMinimapBlips()}),this.updateApproachPanelAnchor(),this.updateWreckRepairPanels(),this.updateMigrationPanel(),this.updateProductionProgressPanels()}syncTurretRings(){const e=o=>o==="player"?16777215:16729156,t=o=>Je.turret.levels[o.level-1].turretRange??0,i=[this.leader,...this.followers].filter(o=>o.type==="turret"&&o.alive),n=this.enemyBaseSystem?.buildings.filter(o=>o.type==="turret"&&o.alive)??[],s=[...i,...n];for(const o of s){const l=this.turretLevels.get(o.id);if(!this.turretRings.has(o.id)||l!==o.level){const h=this.turretRings.get(o.id);h&&h.dispose();const d=new rx(t(o),e(o.team));d.setPosition(o.pos.x,o.pos.z),this.scene.add(d.group),this.turretRings.set(o.id,d),this.turretLevels.set(o.id,o.level)}else this.turretRings.get(o.id).setPosition(o.pos.x,o.pos.z)}const a=new Set(s.map(o=>o.id));for(const o of[...this.turretRings.keys()])a.has(o)||(this.turretRings.get(o).dispose(),this.turretRings.delete(o),this.turretLevels.delete(o))}dispose(){this.gatherRing.dispose(),this.alertRings.forEach(e=>e.dispose()),this.alertRings.clear(),this.turretRings.forEach(e=>e.dispose()),this.turretRings.clear(),this.turretLevels.clear()}collectHealthBarEntities(){const e=[...this.units,this.hero,...this.enemies,...this.scavengers,...this.enemyGarrisons,this.leader,...this.followers];if(this.enemyBaseSystem)for(const t of this.enemyBaseSystem.buildings)e.push(t);return e}collectMinimapBlips(){const e=s=>({x:s.pos.x,z:s.pos.z,alive:s.alive,isBoss:s.isBoss===!0}),t=s=>{const{cx:a,cz:o}=this.grid.worldToCell(s.x,s.z);return this.fogOfWar.getCellState(a,o)},i=this.phase.phase==="base"?this.squad?this.squad.controlCorePos():this.leader.pos:this.leader.pos,n=s=>({...e(s),fog:t(s.pos)});return zx({playerUnits:this.units.map(e),hero:this.hero&&this.hero.mesh.visible?e(this.hero):null,playerBuildings:[this.leader,...this.followers].map(e),enemyMobile:[...this.enemies,...this.scavengers,...this.enemyGarrisons].map(s=>({...e(s),visible:this.fogOfWar.isEntityVisible(s.pos)})),enemyBuildings:this.enemyBaseSystem?this.enemyBaseSystem.buildings.map(n):[],cores:this.relics.filter(s=>s.state!=="socketed").map(s=>({coreId:s.coreId,state:s.state,x:s.state==="carried"?i.x:s.pos.x,z:s.state==="carried"?i.z:s.pos.z,fog:s.state==="carried"?"visible":t(s.pos)})),crates:this.lootCrates.map(s=>({x:s.pos.x,z:s.pos.z,alive:s.state!=="opened",fog:t(s.pos)})),ores:this.oreNodes.map(s=>({x:s.pos.x,z:s.pos.z,alive:!s.depleted,fog:t(s.pos)})),wrecks:this.wreckSystem.wrecks.map(s=>({x:s.pos.x,z:s.pos.z,alive:!0,fog:t(s.pos)}))})}handlePhaseTransition(){if(this.phase.phase==="base"&&this.leader.form==="vehicle"){this.leader.toBuildingForm(),this.swapMeshInScene(this.leader),this.gatherRing.setPosition(this.leader.pos.x,this.leader.pos.z),this.followers.forEach(e=>{e.toBuildingForm(),this.swapMeshInScene(e),e.pendingDeploy=!1,Je[e.type].levels[0].prodUnit&&!this.production.hasBuilding(e)&&this.production.registerBuilding(e)}),this.hero.pos.set(this.leader.pos.x,0,this.leader.pos.z+5),this.hero.mesh.visible=!0,this.economy&&(this.economy.workers.length===0?this.economy.spawnInitialWorkers():this.economy.repositionWorkers(),this.economy.workerList.forEach(e=>this.scene.add(e.mesh)));{const e=this.hero.pos;this.units.forEach((t,i)=>{const n=i/Math.max(1,this.units.length)*Math.PI*2;t.pos.set(e.x+Math.cos(n)*4,0,e.z+Math.sin(n)*4),this.scene.add(t.mesh)})}this.flowField&&(this.flowField.generate(this.leader.pos),this.flowFieldTarget.copy(this.leader.pos))}this.phase.phase==="caravan"&&this.leader.form==="building"&&(this.leader.toVehicleForm(),this.swapMeshInScene(this.leader),this.gatherRing.setPosition(this.leader.pos.x,this.leader.pos.z),this.followers.forEach(e=>{e.toVehicleForm(),this.swapMeshInScene(e)}),this.hero.mesh.visible=!1,this.economy&&this.economy.workersForPackUp().forEach(e=>this.scene.remove(e.mesh)),this.units.forEach(e=>{this.scene.remove(e.mesh)}),this.flowField&&(this.flowField.generate(this.leader.pos),this.flowFieldTarget.copy(this.leader.pos)))}swapMeshInScene(e){const t=e.consumeOldMesh();t&&this.scene.remove(t),this.scene.add(e.mesh)}swapHeroMeshIfNeeded(){const e=this.hero.consumeOldMeshes();if(e.length===0){if(this.hero.pendingHealViz>0){const i=this.hero.pendingHealViz;this.hero.pendingHealViz=0,i>0&&this.spawnHealText(this.hero,i)}return}for(const i of e)i.parent&&this.scene.remove(i);this.scene.add(this.hero.mesh),rr.spawn(this.hero.pos,16763955,5,.8,.8);const t=this.hero.pendingHealViz;this.hero.pendingHealViz=0,t>0&&this.spawnHealText(this.hero,t)}swapUnitLevelUpViz(){for(const e of this.units)if(e.pendingLevelUp){e.pendingLevelUp=!1;const t=e.unitType==="mech"?4.5:3,i=e.unitType==="mech"?1:.6;rr.spawn(e.pos,8965375,t,i,.8)}}upgradeModuleWithViz(e){if(this.upgradeSys.requestUpgrade(e)){const t=e.type==="commandCenter"?3.2:2.5;rr.spawn(e.pos,16763955,9,t,.8)}}findBuildingById(e){return this.leader.id===e?this.leader:this.followers.find(t=>t.id===e)}enemyBuildingsForCombat(){return this.enemyBaseSystem?.buildings??[]}collectFogSources(){const e=[],t=n=>{if(n.alive){const s=ar.sight[n.type];s&&e.push({x:n.pos.x,z:n.pos.z,sight:s})}},i=n=>{if(n.alive){const s=ar.sight[n.unitType]??ar.sight.hero;s&&e.push({x:n.pos.x,z:n.pos.z,sight:s})}};return t(this.leader),this.followers.forEach(t),this.hero.alive&&this.phase.phase==="base"&&e.push({x:this.hero.pos.x,z:this.hero.pos.z,sight:ar.sight.hero}),this.units.forEach(i),e}applyEntityFogVisibility(){const e=[...this.enemies,...this.scavengers,...this.enemyGarrisons];for(const n of e){if(!n.mesh)continue;const{cx:s,cz:a}=this.grid.worldToCell(n.pos.x,n.pos.z),o=this.fogOfWar.getCellState(s,a);n.mesh.visible=o==="visible"}const t=[...this.enemyBuildingsForCombat(),...this.relics.filter(n=>n.state==="idle"||n.state==="dropped"),...this.lootCrates,...this.wreckSystem.wrecks,...this.oreNodes],i=ar.exploredOpacity;for(const n of t){if(!n.mesh)continue;const{cx:s,cz:a}=this.grid.worldToCell(n.pos.x,n.pos.z),o=this.fogOfWar.getCellState(s,a);if(o==="unexplored"){n.mesh.visible=!1;continue}n.mesh.visible=!0;const l=o==="explored"?i:1;n.mesh.traverse(c=>{if(c instanceof K){if(l<1&&!c.userData.fogMatCloned){const u=c.material,g=(Array.isArray(u)?u:u?[u]:[]).map(v=>en.instance.isCachedMaterial(v)?v.clone():v);c.material=Array.isArray(u)?g:g[0],c.userData.fogMatCloned=!0}const h=c.material,d=Array.isArray(h)?h:h?[h]:[];for(const u of d)u.transparent=l<1,u.opacity=l}else if(c instanceof Sn){const h=c.material;h&&(h.opacity=l)}})}}updateCaravan(e){if(this.joystickMag>.1){const{x:i,y:n}=this.joystickVec,s=new w(i+n,0,-i+n);if(s.lengthSq()>.001){this.leaderFacing=Math.atan2(s.x,-s.z);const a=s.length();this.leader.facing={x:s.x/a,z:s.z/a};const o=ko*this.joystickMag;this.leader.pos.add(s.normalize().multiplyScalar(o*e)),this.leader.pos.y=0,this.clampToMap(this.leader)}}const t=this.formation.computeTargets(this.leader,this.followers,this.leaderFacing);for(const i of this.followers){const n=t.get(i.id);n&&this.movement.moveToward(i,n,ko*1.2,e)}this.movement.applySeparation(this.followers,3,8,e,[this.leader]),this.flowField&&Math.hypot(this.leader.pos.x-this.flowFieldTarget.x,this.leader.pos.z-this.flowFieldTarget.z)>5&&(this.flowField.generate(this.leader.pos),this.flowFieldTarget.copy(this.leader.pos))}updateSquad(e){if(!this.squad)return;const t=this.squad.leader;if(this.joystickMag>.1&&!this.squad.isWiped()){const{x:a,y:o}=this.joystickVec,l=new w(a+o,0,-a+o);if(l.lengthSq()>.001){const c=l.length();t.facing={x:l.x/c,z:l.z/c};const h=t.speed*this.joystickMag;t.pos.add(l.normalize().multiplyScalar(h*e)),t.pos.y=0,this.clampToMap(t)}}const i=[...this.enemies,...this.scavengers,...this.enemyGarrisons],n=this.joystickMag>.1;for(const a of this.squad.members){if(!a.alive||Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z)>zt.squad.tetherBreakDist)continue;const l=J_({member:a,core:t,enemies:i,alertRange:zt.squad.alertRange,isMoving:n});if(l.action==="follow"||l.action==="approach"){const c=new w(l.targetPos.x,0,l.targetPos.z);this.movement.moveToward(a,c,a.speed,e,!1)}}const s=this.units.filter(a=>a!==this.squad.leader);this.movement.applySeparation(s,3,8,e,[this.squad.leader])}clampToMap(e){const t=Bn.gridSize*Bn.cellMeters/2;e.pos.x=Sc.clamp(e.pos.x,-t,t),e.pos.z=Sc.clamp(e.pos.z,-t,t)}render(){this.postFX.render(this.scene,this.cameraRig.camera)}onResize(){this.applyViewport()}applyViewport(){const t=window.innerWidth,i=window.innerHeight;let n,s;t/i>.5625?(s=i,n=s*.5625):(n=t,s=n/.5625),this.viewW=n,this.viewH=s,this.renderer.renderer.setSize(n,s,!0),this.cameraRig?.resize(n/s),this.postFX?.setSize(n,s),this.uiLayer.sync(this.renderer.renderer.domElement)}}(function(){const e=document.createElement("style");e.id="button-feedback",e.textContent=["button { transition: transform 0.1s ease-out; }","button:active:not(:disabled) { transform: scale(0.92); }","button:disabled { transform: none; }"].join(`
`),document.head.appendChild(e)})();const tM=document.getElementById("app"),iM=new Nl;iM.start().catch(r=>{console.error("游戏启动失败:",r),tM.innerHTML=`<div style="color:red;padding:20px;font-family:sans-serif;">启动失败: ${r.message}</div>`});
