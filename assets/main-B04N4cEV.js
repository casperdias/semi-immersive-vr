(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="160",Bd=0,Vo=1,Hd=2,Cc=1,mo=2,Rn=3,ii=0,Vt=1,kt=2,Zn=0,Qi=1,Wo=2,Xo=3,qo=4,Gd=5,xi=100,Vd=101,Wd=102,$o=103,Yo=104,Xd=200,qd=201,$d=202,Yd=203,Zr=204,Qr=205,jd=206,Kd=207,Jd=208,Zd=209,Qd=210,eu=211,tu=212,nu=213,iu=214,au=0,su=1,ru=2,ks=3,ou=4,lu=5,cu=6,du=7,go=0,uu=1,pu=2,Qn=0,hu=1,fu=2,mu=3,Rc=4,gu=5,xu=6,Pc=300,ta=301,na=302,eo=303,to=304,Us=306,no=1e3,mn=1001,io=1002,Yt=1003,jo=1004,Zs=1005,rn=1006,vu=1007,Ua=1008,ei=1009,bu=1010,_u=1011,xo=1012,Dc=1013,Kn=1014,Jn=1015,Na=1016,Ic=1017,Uc=1018,bi=1020,yu=1021,gn=1023,wu=1024,Mu=1025,_i=1026,ia=1027,Su=1028,Nc=1029,Eu=1030,Oc=1031,zc=1033,Qs=33776,er=33777,tr=33778,nr=33779,Ko=35840,Jo=35841,Zo=35842,Qo=35843,Fc=36196,el=37492,tl=37496,nl=37808,il=37809,al=37810,sl=37811,rl=37812,ol=37813,ll=37814,cl=37815,dl=37816,ul=37817,pl=37818,hl=37819,fl=37820,ml=37821,ir=36492,gl=36494,xl=36495,Tu=36283,vl=36284,bl=36285,_l=36286,Bc=3e3,yi=3001,Au=3200,ku=3201,vo=0,Lu=1,cn="",Nt="srgb",zn="srgb-linear",bo="display-p3",Ns="display-p3-linear",Ls="linear",xt="srgb",Cs="rec709",Rs="p3",ki=7680,yl=519,Cu=512,Ru=513,Pu=514,Hc=515,Du=516,Iu=517,Uu=518,Nu=519,ao=35044,wl="300 es",so=1035,In=2e3,Ps=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,ro=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Ou(n,e){return(n%e+e)%e}function sr(n,e,t){return(1-t)*n+t*e}function Ml(n){return(n&n-1)===0&&n!==0}function oo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,a,s,r,o,l,d){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d)}set(e,t,i,a,s,r,o,l,d){const c=this.elements;return c[0]=e,c[1]=a,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=r,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],d=i[1],c=i[4],p=i[7],f=i[2],h=i[5],g=i[8],x=a[0],m=a[3],u=a[6],v=a[1],b=a[4],_=a[7],L=a[2],M=a[5],E=a[8];return s[0]=r*x+o*v+l*L,s[3]=r*m+o*b+l*M,s[6]=r*u+o*_+l*E,s[1]=d*x+c*v+p*L,s[4]=d*m+c*b+p*M,s[7]=d*u+c*_+p*E,s[2]=f*x+h*v+g*L,s[5]=f*m+h*b+g*M,s[8]=f*u+h*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8];return t*r*c-t*o*d-i*s*c+i*o*l+a*s*d-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],p=c*r-o*d,f=o*l-c*s,h=d*s-r*l,g=t*p+i*f+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=p*x,e[1]=(a*d-c*i)*x,e[2]=(o*i-a*r)*x,e[3]=f*x,e[4]=(c*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=h*x,e[7]=(i*l-d*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*r+d*o)+r+e,-a*d,a*l,-a*(-d*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new tt;function Gc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zu(){const n=Ds("canvas");return n.style.display="block",n}const Sl={};function Aa(n){n in Sl||(Sl[n]=!0,console.warn(n))}const El=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tl=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[zn]:{transfer:Ls,primaries:Cs,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:xt,primaries:Cs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ns]:{transfer:Ls,primaries:Rs,toReference:n=>n.applyMatrix3(Tl),fromReference:n=>n.applyMatrix3(El)},[bo]:{transfer:xt,primaries:Rs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Tl),fromReference:n=>n.applyMatrix3(El).convertLinearToSRGB()}},Fu=new Set([zn,Ns]),ut={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qa[e].toReference,a=qa[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qa[n].primaries},getTransfer:function(n){return n===cn?Ls:qa[n].transfer}};function ea(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Ds("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ea(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bu=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(lr(a[r].image)):s.push(lr(a[r]))}else s=lr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function lr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class Zt extends la{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=mn,a=mn,s=rn,r=Ua,o=gn,l=ei,d=Zt.DEFAULT_ANISOTROPY,c=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ti(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===yi?Nt:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?yi:Bc}set encoding(e){Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?Nt:cn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Pc;Zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,d=l[0],c=l[4],p=l[8],f=l[1],h=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(c-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(d+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,_=(h+1)/2,L=(u+1)/2,M=(c+f)/4,E=(p+x)/4,I=(g+m)/4;return b>_&&b>L?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=M/i,s=E/i):_>L?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=M/a,s=I/a):L<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(L),i=E/s,a=I/s),this.set(i,a,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-x)/v,this.z=(f-c)/v,this.w=Math.acos((d+h+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends la{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yi?Nt:cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Gu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xc extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vu extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],d=i[a+1],c=i[a+2],p=i[a+3];const f=s[r+0],h=s[r+1],g=s[r+2],x=s[r+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(p!==x||l!==f||d!==h||c!==g){let m=1-o;const u=l*f+d*h+c*g+p*x,v=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const L=Math.sqrt(b),M=Math.atan2(L,u*v);m=Math.sin(m*M)/L,o=Math.sin(o*M)/L}const _=o*v;if(l=l*m+f*_,d=d*m+h*_,c=c*m+g*_,p=p*m+x*_,m===1-o){const L=1/Math.sqrt(l*l+d*d+c*c+p*p);l*=L,d*=L,c*=L,p*=L}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],d=i[a+2],c=i[a+3],p=s[r],f=s[r+1],h=s[r+2],g=s[r+3];return e[t]=o*g+c*p+l*h-d*f,e[t+1]=l*g+c*f+d*p-o*h,e[t+2]=d*g+c*h+o*f-l*p,e[t+3]=c*g-o*p-l*f-d*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,d=o(i/2),c=o(a/2),p=o(s/2),f=l(i/2),h=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*c*p+d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p-f*h*g;break;case"YXZ":this._x=f*c*p+d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p+f*h*g;break;case"ZXY":this._x=f*c*p-d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p-f*h*g;break;case"ZYX":this._x=f*c*p-d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p+f*h*g;break;case"YZX":this._x=f*c*p+d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p-f*h*g;break;case"XZY":this._x=f*c*p-d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],d=t[2],c=t[6],p=t[10],f=i+o+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-d)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(c-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+d)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-d)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+d)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+r*o+a*d-s*l,this._y=a*c+r*l+s*o-i*d,this._z=s*c+r*d+i*l-a*o,this._w=r*c-i*o-a*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*r+t*this._w,this._x=h*i+t*this._x,this._y=h*a+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,o),p=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=a*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,d=2*(r*a-o*i),c=2*(o*t-s*a),p=2*(s*i-r*t);return this.x=t+l*d+r*p-o*c,this.y=i+l*c+o*d-s*p,this.z=a+l*p+s*c-r*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new k,Al=new za;class Fa{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,un):un.fromBufferAttribute(s,r),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Ya.subVectors(this.max,ha),Ci.subVectors(e.a,ha),Ri.subVectors(e.b,ha),Pi.subVectors(e.c,ha),Vn.subVectors(Ri,Ci),Wn.subVectors(Pi,Ri),di.subVectors(Ci,Pi);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-di.z,di.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,di.z,0,-di.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-di.y,di.x,0];return!dr(t,Ci,Ri,Pi,Ya)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,Ci,Ri,Pi,Ya))?!1:(ja.crossVectors(Vn,Wn),t=[ja.x,ja.y,ja.z],dr(t,Ci,Ri,Pi,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new k,new k,new k,new k,new k,new k,new k,new k],un=new k,$a=new Fa,Ci=new k,Ri=new k,Pi=new k,Vn=new k,Wn=new k,di=new k,ha=new k,Ya=new k,ja=new k,ui=new k;function dr(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){ui.fromArray(n,s);const o=a.x*Math.abs(ui.x)+a.y*Math.abs(ui.y)+a.z*Math.abs(ui.z),l=e.dot(ui),d=t.dot(ui),c=i.dot(ui);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>o)return!1}return!0}const Wu=new Fa,fa=new k,ur=new k;class Os{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wu.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(fa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(ur)),this.expandByPoint(fa.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new k,pr=new k,Ka=new k,Xn=new k,hr=new k,Ja=new k,fr=new k;class qc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){pr.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(pr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ka),o=Xn.dot(this.direction),l=-Xn.dot(Ka),d=Xn.lengthSq(),c=Math.abs(1-r*r);let p,f,h,g;if(c>0)if(p=r*l-o,f=r*o-l,g=s*c,p>=0)if(f>=-g)if(f<=g){const x=1/c;p*=x,f*=x,h=p*(p+r*f+2*o)+f*(r*p+f+2*l)+d}else f=s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;else f=-s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;else f<=-g?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+d):f<=g?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+d):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+d);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(pr).addScaledVector(Ka,f),h}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),a=An.dot(An)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const d=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,a=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,a=(e.min.x-f.x)*d),c>=0?(s=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,a,s){hr.subVectors(t,e),Ja.subVectors(i,e),fr.crossVectors(hr,Ja);let r=this.direction.dot(fr),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Ja.crossVectors(Xn,Ja));if(l<0)return null;const d=o*this.direction.dot(hr.cross(Xn));if(d<0||l+d>r)return null;const c=-o*Xn.dot(fr);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m)}set(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=d,u[6]=c,u[10]=p,u[14]=f,u[3]=h,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),r=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),d=Math.sin(a),c=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=r*c,h=r*p,g=o*c,x=o*p;t[0]=l*c,t[4]=-l*p,t[8]=d,t[1]=h+g*d,t[5]=f-x*d,t[9]=-o*l,t[2]=x-f*d,t[6]=g+h*d,t[10]=r*l}else if(e.order==="YXZ"){const f=l*c,h=l*p,g=d*c,x=d*p;t[0]=f+x*o,t[4]=g*o-h,t[8]=r*d,t[1]=r*p,t[5]=r*c,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*c,h=l*p,g=d*c,x=d*p;t[0]=f-x*o,t[4]=-r*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=r*c,t[9]=x-f*o,t[2]=-r*d,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*c,h=r*p,g=o*c,x=o*p;t[0]=l*c,t[4]=g*d-h,t[8]=f*d+x,t[1]=l*p,t[5]=x*d+f,t[9]=h*d-g,t[2]=-d,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,h=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=x-f*p,t[8]=g*p+h,t[1]=p,t[5]=r*c,t[9]=-o*c,t[2]=-d*c,t[6]=h*p+g,t[10]=f-x*p}else if(e.order==="XZY"){const f=r*l,h=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=-p,t[8]=d*c,t[1]=f*p+x,t[5]=r*c,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*c,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,i){const a=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),qn.crossVectors(i,tn),qn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),qn.crossVectors(i,tn)),qn.normalize(),Za.crossVectors(tn,qn),a[0]=qn.x,a[4]=Za.x,a[8]=tn.x,a[1]=qn.y,a[5]=Za.y,a[9]=tn.y,a[2]=qn.z,a[6]=Za.z,a[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],d=i[12],c=i[1],p=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],b=i[7],_=i[11],L=i[15],M=a[0],E=a[4],I=a[8],y=a[12],T=a[1],N=a[5],H=a[9],ae=a[13],P=a[2],z=a[6],X=a[10],ne=a[14],Y=a[3],J=a[7],Z=a[11],V=a[15];return s[0]=r*M+o*T+l*P+d*Y,s[4]=r*E+o*N+l*z+d*J,s[8]=r*I+o*H+l*X+d*Z,s[12]=r*y+o*ae+l*ne+d*V,s[1]=c*M+p*T+f*P+h*Y,s[5]=c*E+p*N+f*z+h*J,s[9]=c*I+p*H+f*X+h*Z,s[13]=c*y+p*ae+f*ne+h*V,s[2]=g*M+x*T+m*P+u*Y,s[6]=g*E+x*N+m*z+u*J,s[10]=g*I+x*H+m*X+u*Z,s[14]=g*y+x*ae+m*ne+u*V,s[3]=v*M+b*T+_*P+L*Y,s[7]=v*E+b*N+_*z+L*J,s[11]=v*I+b*H+_*X+L*Z,s[15]=v*y+b*ae+_*ne+L*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],d=e[13],c=e[2],p=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*p-a*d*p-s*o*f+i*d*f+a*o*h-i*l*h)+x*(+t*l*h-t*d*f+s*r*f-a*r*h+a*d*c-s*l*c)+m*(+t*d*p-t*o*h-s*r*p+i*r*h+s*o*c-i*d*c)+u*(-a*o*c-t*l*p+t*o*f+a*r*p-i*r*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],p=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=p*m*d-x*f*d+x*l*h-o*m*h-p*l*u+o*f*u,b=g*f*d-c*m*d-g*l*h+r*m*h+c*l*u-r*f*u,_=c*x*d-g*p*d+g*o*h-r*x*h-c*o*u+r*p*u,L=g*p*l-c*x*l-g*o*f+r*x*f+c*o*m-r*p*m,M=t*v+i*b+a*_+s*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(x*f*s-p*m*s-x*a*h+i*m*h+p*a*u-i*f*u)*E,e[2]=(o*m*s-x*l*s+x*a*d-i*m*d-o*a*u+i*l*u)*E,e[3]=(p*l*s-o*f*s-p*a*d+i*f*d+o*a*h-i*l*h)*E,e[4]=b*E,e[5]=(c*m*s-g*f*s+g*a*h-t*m*h-c*a*u+t*f*u)*E,e[6]=(g*l*s-r*m*s-g*a*d+t*m*d+r*a*u-t*l*u)*E,e[7]=(r*f*s-c*l*s+c*a*d-t*f*d-r*a*h+t*l*h)*E,e[8]=_*E,e[9]=(g*p*s-c*x*s-g*i*h+t*x*h+c*i*u-t*p*u)*E,e[10]=(r*x*s-g*o*s+g*i*d-t*x*d-r*i*u+t*o*u)*E,e[11]=(c*o*s-r*p*s-c*i*d+t*p*d+r*i*h-t*o*h)*E,e[12]=L*E,e[13]=(c*x*a-g*p*a+g*i*f-t*x*f-c*i*m+t*p*m)*E,e[14]=(g*o*a-r*x*a-g*i*l+t*x*l+r*i*m-t*o*m)*E,e[15]=(r*p*a-c*o*a+c*i*l-t*p*l-r*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,d=s*r,c=s*o;return this.set(d*r+i,d*o-a*l,d*l+a*o,0,d*o+a*l,c*o+i,c*l-a*r,0,d*l-a*o,c*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,d=s+s,c=r+r,p=o+o,f=s*d,h=s*c,g=s*p,x=r*c,m=r*p,u=o*p,v=l*d,b=l*c,_=l*p,L=i.x,M=i.y,E=i.z;return a[0]=(1-(x+u))*L,a[1]=(h+_)*L,a[2]=(g-b)*L,a[3]=0,a[4]=(h-_)*M,a[5]=(1-(f+u))*M,a[6]=(m+v)*M,a[7]=0,a[8]=(g+b)*E,a[9]=(m-v)*E,a[10]=(1-(f+x))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Di.set(a[0],a[1],a[2]).length();const r=Di.set(a[4],a[5],a[6]).length(),o=Di.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],pn.copy(this);const d=1/s,c=1/r,p=1/o;return pn.elements[0]*=d,pn.elements[1]*=d,pn.elements[2]*=d,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=p,pn.elements[9]*=p,pn.elements[10]*=p,t.setFromRotationMatrix(pn),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=In){const l=this.elements,d=2*s/(t-e),c=2*s/(i-a),p=(t+e)/(t-e),f=(i+a)/(i-a);let h,g;if(o===In)h=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===Ps)h=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=In){const l=this.elements,d=1/(t-e),c=1/(i-a),p=1/(r-s),f=(t+e)*d,h=(i+a)*c;let g,x;if(o===In)g=(r+s)*p,x=-2*p;else if(o===Ps)g=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new k,pn=new yt,Xu=new k(0,0,0),qu=new k(1,1,1),qn=new k,Za=new k,tn=new k,kl=new yt,Ll=new za;class zs{constructor(e=0,t=0,i=0,a=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],d=a[5],c=a[9],p=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $u=0;const Cl=new k,Ii=new za,kn=new yt,Qa=new k,ma=new k,Yu=new k,ju=new za,Rl=new k(1,0,0),Pl=new k(0,1,0),Dl=new k(0,0,1),Ku={type:"added"},Ju={type:"removed"};class Lt extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new k,t=new zs,i=new za,a=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new tt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ma,Qa,this.up):kn.lookAt(Qa,ma,this.up),this.quaternion.setFromRotationMatrix(kn),a&&(kn.extractRotation(a.matrixWorld),Ii.setFromRotationMatrix(kn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ku)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const p=l[d];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),d=r(e.textures),c=r(e.images),p=r(e.shapes),f=r(e.skeletons),h=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const d in o){const c=o[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Lt.DEFAULT_UP=new k(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new k,Ln=new k,mr=new k,Cn=new k,Ui=new k,Ni=new k,Il=new k,gr=new k,xr=new k,vr=new k;let es=!1;class on{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hn.subVectors(e,t),a.cross(hn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){hn.subVectors(a,t),Ln.subVectors(i,t),mr.subVectors(e,t);const r=hn.dot(hn),o=hn.dot(Ln),l=hn.dot(mr),d=Ln.dot(Ln),c=Ln.dot(mr),p=r*d-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,h=(d*l-o*c)*f,g=(r*c-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,a,s,r,o,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(e,t,i,a,s,r,o,l)}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(e,t,i,a){return hn.subVectors(i,t),Ln.subVectors(e,t),hn.cross(Ln).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),on.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;Ui.subVectors(a,i),Ni.subVectors(s,i),gr.subVectors(e,i);const l=Ui.dot(gr),d=Ni.dot(gr);if(l<=0&&d<=0)return t.copy(i);xr.subVectors(e,a);const c=Ui.dot(xr),p=Ni.dot(xr);if(c>=0&&p<=c)return t.copy(a);const f=l*p-c*d;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),t.copy(i).addScaledVector(Ui,r);vr.subVectors(e,s);const h=Ui.dot(vr),g=Ni.dot(vr);if(g>=0&&h<=g)return t.copy(s);const x=h*d-l*g;if(x<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(i).addScaledVector(Ni,o);const m=c*g-h*p;if(m<=0&&p-c>=0&&h-g>=0)return Il.subVectors(s,a),o=(p-c)/(p-c+(h-g)),t.copy(a).addScaledVector(Il,o);const u=1/(m+x+f);return r=x*u,o=f*u,t.copy(i).addScaledVector(Ui,r).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function br(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ut.workingColorSpace){if(e=Ou(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=br(r,s,e+1/3),this.g=br(r,s,e),this.b=br(r,s,e-1/3)}return ut.toWorkingColorSpace(this,a),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=Yc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ut.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,a=Gt.g,s=Gt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,d;const c=(o+r)/2;if(o===r)l=0,d=0;else{const p=r-o;switch(d=c<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nt){ut.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,a=Gt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ts);const i=sr($n.h,ts.h,t),a=sr($n.s,ts.s,t),s=sr($n.l,ts.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new We;We.NAMES=Yc;let Zu=0;class ai extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Qi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Qr,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zr&&(i.blendSrc=this.blendSrc),this.blendDst!==Qr&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class St extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new k,ns=new we;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),a=ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),a=ht(a,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ao&&(e.usage=this.usage),e}}class jc extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kc extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qu=0;const sn=new yt,_r=new Lt,Oi=new k,nn=new Fa,ga=new Fa,Ut=new k;class bt extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?Kc:jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(nn.min,ga.min),nn.expandByPoint(Ut),Ut.addVectors(nn.max,ga.max),nn.expandByPoint(Ut)):(nn.expandByPoint(ga.min),nn.expandByPoint(ga.max))}nn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Ut.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Ut));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)Ut.fromBufferAttribute(o,d),l&&(Oi.fromBufferAttribute(e,d),Ut.add(Oi)),a=Math.max(a,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,r=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,d=[],c=[];for(let T=0;T<o;T++)d[T]=new k,c[T]=new k;const p=new k,f=new k,h=new k,g=new we,x=new we,m=new we,u=new k,v=new k;function b(T,N,H){p.fromArray(a,T*3),f.fromArray(a,N*3),h.fromArray(a,H*3),g.fromArray(r,T*2),x.fromArray(r,N*2),m.fromArray(r,H*2),f.sub(p),h.sub(p),x.sub(g),m.sub(g);const ae=1/(x.x*m.y-m.x*x.y);isFinite(ae)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(h,-x.y).multiplyScalar(ae),v.copy(h).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ae),d[T].add(u),d[N].add(u),d[H].add(u),c[T].add(v),c[N].add(v),c[H].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,N=_.length;T<N;++T){const H=_[T],ae=H.start,P=H.count;for(let z=ae,X=ae+P;z<X;z+=3)b(i[z+0],i[z+1],i[z+2])}const L=new k,M=new k,E=new k,I=new k;function y(T){E.fromArray(s,T*3),I.copy(E);const N=d[T];L.copy(N),L.sub(E.multiplyScalar(E.dot(N))).normalize(),M.crossVectors(I,N);const ae=M.dot(c[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=ae}for(let T=0,N=_.length;T<N;++T){const H=_[T],ae=H.start,P=H.count;for(let z=ae,X=ae+P;z<X;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const a=new k,s=new k,r=new k,o=new k,l=new k,d=new k,c=new k,p=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),c.subVectors(r,s),p.subVectors(a,s),c.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,m),o.add(c),l.add(c),d.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),c.subVectors(r,s),p.subVectors(a,s),c.cross(p),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const d=o.array,c=o.itemSize,p=o.normalized,f=new d.constructor(l.length*c);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*c;for(let u=0;u<c;u++)f[g++]=d[h++]}return new xn(f,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],d=e(l,i);t.setAttribute(o,d)}const s=this.morphAttributes;for(const o in s){const l=[],d=s[o];for(let c=0,p=d.length;c<p;c++){const f=d[c],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const d=r[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let p=0,f=d.length;p<f;p++){const h=d[p];c.push(h.toJSON(e.data))}c.length>0&&(a[l]=c,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const c=a[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],p=s[d];for(let f=0,h=p.length;f<h;f++)c.push(p[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let d=0,c=r.length;d<c;d++){const p=r[d];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new yt,pi=new qc,is=new Os,Nl=new k,zi=new k,Fi=new k,Bi=new k,yr=new k,as=new k,ss=new we,rs=new we,os=new we,Ol=new k,zl=new k,Fl=new k,ls=new k,cs=new k;class C extends Lt{constructor(e=new bt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=o[l],p=s[l];c!==0&&(yr.fromBufferAttribute(p,e),r?as.addScaledVector(yr,c):as.addScaledVector(yr.sub(t),c))}t.add(as)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(is.containsPoint(pi.origin)===!1&&(pi.intersectSphere(is,Nl)===null||pi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,L=b;_<L;_+=3){const M=o.getX(_),E=o.getX(_+1),I=o.getX(_+2);a=ds(this,u,e,i,d,c,p,M,E,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,u=x;m<u;m+=3){const v=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);a=ds(this,r,e,i,d,c,p,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,L=b;_<L;_+=3){const M=_,E=_+1,I=_+2;a=ds(this,u,e,i,d,c,p,M,E,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,u=x;m<u;m+=3){const v=m,b=m+1,_=m+2;a=ds(this,r,e,i,d,c,p,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function ep(n,e,t,i,a,s,r,o){let l;if(e.side===Vt?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ii,o),l===null)return null;cs.copy(o),cs.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(cs);return d<t.near||d>t.far?null:{distance:d,point:cs.clone(),object:n}}function ds(n,e,t,i,a,s,r,o,l,d){n.getVertexPosition(o,zi),n.getVertexPosition(l,Fi),n.getVertexPosition(d,Bi);const c=ep(n,e,t,i,zi,Fi,Bi,ls);if(c){a&&(ss.fromBufferAttribute(a,o),rs.fromBufferAttribute(a,l),os.fromBufferAttribute(a,d),c.uv=on.getInterpolation(ls,zi,Fi,Bi,ss,rs,os,new we)),s&&(ss.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,l),os.fromBufferAttribute(s,d),c.uv1=on.getInterpolation(ls,zi,Fi,Bi,ss,rs,os,new we),c.uv2=c.uv1),r&&(Ol.fromBufferAttribute(r,o),zl.fromBufferAttribute(r,l),Fl.fromBufferAttribute(r,d),c.normal=on.getInterpolation(ls,zi,Fi,Bi,Ol,zl,Fl,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const p={a:o,b:l,c:d,normal:new k,materialIndex:0};on.getNormal(zi,Fi,Bi,p.normal),c.face=p}return c}class re extends bt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],d=[],c=[],p=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(p,2));function g(x,m,u,v,b,_,L,M,E,I,y){const T=_/E,N=L/I,H=_/2,ae=L/2,P=M/2,z=E+1,X=I+1;let ne=0,Y=0;const J=new k;for(let Z=0;Z<X;Z++){const V=Z*N-ae;for(let Q=0;Q<z;Q++){const O=Q*T-H;J[x]=O*v,J[m]=V*b,J[u]=P,d.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[u]=M>0?1:-1,c.push(J.x,J.y,J.z),p.push(Q/E),p.push(1-Z/I),ne+=1}}for(let Z=0;Z<I;Z++)for(let V=0;V<E;V++){const Q=f+V+z*Z,O=f+V+z*(Z+1),te=f+(V+1)+z*(Z+1),j=f+(V+1)+z*Z;l.push(Q,O,j),l.push(O,te,j),Y+=6}o.addGroup(h,Y,y),h+=Y,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=aa(n[t]);for(const a in i)e[a]=i[a]}return e}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jc(n){return n.getRenderTarget()===null?n.outputColorSpace:ut.workingColorSpace}const np={clone:aa,merge:$t};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Zc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,d=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/d,a*=r.width/l,i*=r.height/d}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class sp extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const s=new Kt(Hi,Gi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Hi,Gi,e,t);l.layers=this.layers,this.add(l);const d=new Kt(Hi,Gi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const d of t)this.remove(d);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,d,c]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(t,c),e.setRenderTarget(p,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends Zt{constructor(e,t,i,a,s,r,o,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:ta,super(e,t,i,a,s,r,o,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?Nt:cn),this.texture=new Qc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new re(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Zn});s.uniforms.tEquirect.value=t;const r=new C(a,s),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=rn),new sp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const wr=new k,op=new k,lp=new tt;class mi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=wr.subVectors(i,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lp.getNormalMatrix(e),a=this.coplanarPoint(wr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Os,us=new k;class _o{constructor(e=new mi,t=new mi,i=new mi,a=new mi,s=new mi,r=new mi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],d=a[4],c=a[5],p=a[6],f=a[7],h=a[8],g=a[9],x=a[10],m=a[11],u=a[12],v=a[13],b=a[14],_=a[15];if(i[0].setComponents(l-s,f-d,m-h,_-u).normalize(),i[1].setComponents(l+s,f+d,m+h,_+u).normalize(),i[2].setComponents(l+r,f+c,m+g,_+v).normalize(),i[3].setComponents(l-r,f-c,m-g,_-v).normalize(),i[4].setComponents(l-o,f-p,m-x,_-b).normalize(),t===In)i[5].setComponents(l+o,f+p,m+x,_+b).normalize();else if(t===Ps)i[5].setComponents(o,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(us.x=a.normal.x>0?e.max.x:e.min.x,us.y=a.normal.y>0?e.max.y:e.min.y,us.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cp(n,e){const t=e.isWebGL2,i=new WeakMap;function a(d,c){const p=d.array,f=d.usage,h=p.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,p,f),d.onUploadCallback();let x;if(p instanceof Float32Array)x=n.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=n.SHORT;else if(p instanceof Uint32Array)x=n.UNSIGNED_INT;else if(p instanceof Int32Array)x=n.INT;else if(p instanceof Int8Array)x=n.BYTE;else if(p instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:h}}function s(d,c,p){const f=c.array,h=c._updateRange,g=c.updateRanges;if(n.bindBuffer(p,d),h.count===-1&&g.length===0&&n.bufferSubData(p,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){const u=g[x];t?n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}c.clearUpdateRanges()}h.count!==-1&&(t?n.bufferSubData(p,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):n.bufferSubData(p,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),c.onUploadCallback()}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=i.get(d);c&&(n.deleteBuffer(c.buffer),i.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const f=i.get(d);(!f||f.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);if(p===void 0)i.set(d,a(d,c));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,c),p.version=d.version}}return{get:r,remove:o,update:l}}class wt extends bt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),d=o+1,c=l+1,p=e/o,f=t/l,h=[],g=[],x=[],m=[];for(let u=0;u<c;u++){const v=u*f-r;for(let b=0;b<d;b++){const _=b*p-s;g.push(_,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const b=v+d*u,_=v+d*(u+1),L=v+1+d*(u+1),M=v+1+d*u;h.push(b,_,M),h.push(_,L,M)}this.setIndex(h),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`
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
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
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
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lh=`PhysicalMaterial material;
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
#endif`,ch=`struct PhysicalMaterial {
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
}`,dh=`
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
#endif`,uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_h=`#if defined( USE_POINTS_UV )
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
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sh=`#ifdef USE_MORPHNORMALS
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
#endif`,Eh=`#ifdef USE_MORPHTARGETS
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
#endif`,Th=`#ifdef USE_MORPHTARGETS
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
#endif`,Ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ph=`#ifdef USE_NORMALMAP
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
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yh=`float getShadowMask() {
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
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kh=`#ifdef USE_SKINNING
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
#endif`,Jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
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
#endif`,Qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,xf=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Tf=`#define LAMBERT
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
}`,Af=`#define LAMBERT
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
}`,kf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Cf=`#define NORMAL
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
}`,Rf=`#define NORMAL
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
}`,Pf=`#define PHONG
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
}`,Df=`#define PHONG
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
}`,If=`#define STANDARD
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
}`,Uf=`#define STANDARD
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
}`,Nf=`#define TOON
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
}`,Of=`#define TOON
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
}`,zf=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,Hf=`uniform vec3 color;
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
}`,Gf=`uniform float rotation;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:dp,alphahash_pars_fragment:up,alphamap_fragment:pp,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:vp,batching_vertex:bp,begin_vertex:_p,beginnormal_vertex:yp,bsdfs:wp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:kp,color_fragment:Lp,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Dp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Op,emissivemap_fragment:zp,emissivemap_pars_fragment:Fp,colorspace_fragment:Bp,colorspace_pars_fragment:Hp,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:ih,envmap_vertex:qp,fog_vertex:$p,fog_pars_vertex:Yp,fog_fragment:jp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_fragment:Zp,lightmap_pars_fragment:Qp,lights_lambert_fragment:eh,lights_lambert_pars_fragment:th,lights_pars_begin:nh,lights_toon_fragment:ah,lights_toon_pars_fragment:sh,lights_phong_fragment:rh,lights_phong_pars_fragment:oh,lights_physical_fragment:lh,lights_physical_pars_fragment:ch,lights_fragment_begin:dh,lights_fragment_maps:uh,lights_fragment_end:ph,logdepthbuf_fragment:hh,logdepthbuf_pars_fragment:fh,logdepthbuf_pars_vertex:mh,logdepthbuf_vertex:gh,map_fragment:xh,map_pars_fragment:vh,map_particle_fragment:bh,map_particle_pars_fragment:_h,metalnessmap_fragment:yh,metalnessmap_pars_fragment:wh,morphcolor_vertex:Mh,morphnormal_vertex:Sh,morphtarget_pars_vertex:Eh,morphtarget_vertex:Th,normal_fragment_begin:Ah,normal_fragment_maps:kh,normal_pars_fragment:Lh,normal_pars_vertex:Ch,normal_vertex:Rh,normalmap_pars_fragment:Ph,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Ih,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Nh,opaque_fragment:Oh,packing:zh,premultiplied_alpha_fragment:Fh,project_vertex:Bh,dithering_fragment:Hh,dithering_pars_fragment:Gh,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:Wh,shadowmap_pars_fragment:Xh,shadowmap_pars_vertex:qh,shadowmap_vertex:$h,shadowmask_pars_fragment:Yh,skinbase_vertex:jh,skinning_pars_vertex:Kh,skinning_vertex:Jh,skinnormal_vertex:Zh,specularmap_fragment:Qh,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:af,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:df,background_frag:uf,backgroundCube_vert:pf,backgroundCube_frag:hf,cube_vert:ff,cube_frag:mf,depth_vert:gf,depth_frag:xf,distanceRGBA_vert:vf,distanceRGBA_frag:bf,equirect_vert:_f,equirect_frag:yf,linedashed_vert:wf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:Tf,meshlambert_frag:Af,meshmatcap_vert:kf,meshmatcap_frag:Lf,meshnormal_vert:Cf,meshnormal_frag:Rf,meshphong_vert:Pf,meshphong_frag:Df,meshphysical_vert:If,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Of,points_vert:zf,points_frag:Ff,shadow_vert:Bf,shadow_frag:Hf,sprite_vert:Gf,sprite_frag:Vf},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},bn={basic:{uniforms:$t([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:$t([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:$t([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};bn.physical={uniforms:$t([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ps={r:0,b:0,g:0};function Wf(n,e,t,i,a,s,r){const o=new We(0);let l=s===!0?0:1,d,c,p=null,f=0,h=null;function g(m,u){let v=!1,b=u.isScene===!0?u.background:null;b&&b.isTexture&&(b=(u.backgroundBlurriness>0?t:e).get(b)),b===null?x(o,l):b&&b.isColor&&(x(b,1),v=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Us)?(c===void 0&&(c=new C(new re(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:aa(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,(p!==b||f!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,p=b,f=b.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new C(new wt(2,2),new Mi({name:"BackgroundMaterial",uniforms:aa(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||f!==b.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,p=b,f=b.version,h=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function x(m,u){m.getRGB(ps,Jc(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Xf(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let d=l,c=!1;function p(P,z,X,ne,Y){let J=!1;if(r){const Z=x(ne,X,z);d!==Z&&(d=Z,h(d.object)),J=u(P,ne,X,Y),J&&v(P,ne,X,Y)}else{const Z=z.wireframe===!0;(d.geometry!==ne.id||d.program!==X.id||d.wireframe!==Z)&&(d.geometry=ne.id,d.program=X.id,d.wireframe=Z,J=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,I(P,z,X,ne),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,z,X){const ne=X.wireframe===!0;let Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let J=Y[z.id];J===void 0&&(J={},Y[z.id]=J);let Z=J[ne];return Z===void 0&&(Z=m(f()),J[ne]=Z),Z}function m(P){const z=[],X=[],ne=[];for(let Y=0;Y<a;Y++)z[Y]=0,X[Y]=0,ne[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:ne,object:P,attributes:{},index:null}}function u(P,z,X,ne){const Y=d.attributes,J=z.attributes;let Z=0;const V=X.getAttributes();for(const Q in V)if(V[Q].location>=0){const te=Y[Q];let j=J[Q];if(j===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),te===void 0||te.attribute!==j||j&&te.data!==j.data)return!0;Z++}return d.attributesNum!==Z||d.index!==ne}function v(P,z,X,ne){const Y={},J=z.attributes;let Z=0;const V=X.getAttributes();for(const Q in V)if(V[Q].location>=0){let te=J[Q];te===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const j={};j.attribute=te,te&&te.data&&(j.data=te.data),Y[Q]=j,Z++}d.attributes=Y,d.attributesNum=Z,d.index=ne}function b(){const P=d.newAttributes;for(let z=0,X=P.length;z<X;z++)P[z]=0}function _(P){L(P,0)}function L(P,z){const X=d.newAttributes,ne=d.enabledAttributes,Y=d.attributeDivisors;X[P]=1,ne[P]===0&&(n.enableVertexAttribArray(P),ne[P]=1),Y[P]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),Y[P]=z)}function M(){const P=d.newAttributes,z=d.enabledAttributes;for(let X=0,ne=z.length;X<ne;X++)z[X]!==P[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function E(P,z,X,ne,Y,J,Z){Z===!0?n.vertexAttribIPointer(P,z,X,Y,J):n.vertexAttribPointer(P,z,X,ne,Y,J)}function I(P,z,X,ne){if(i.isWebGL2===!1&&(P.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Y=ne.attributes,J=X.getAttributes(),Z=z.defaultAttributeValues;for(const V in J){const Q=J[V];if(Q.location>=0){let O=Y[V];if(O===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){const te=O.normalized,j=O.itemSize,me=t.get(O);if(me===void 0)continue;const he=me.buffer,Ce=me.type,Ne=me.bytesPerElement,ze=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||O.gpuType===Dc);if(O.isInterleavedBufferAttribute){const nt=O.data,F=nt.stride,Pt=O.offset;if(nt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Q.locationSize;Ie++)L(Q.location+Ie,nt.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ie=0;Ie<Q.locationSize;Ie++)_(Q.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Ie=0;Ie<Q.locationSize;Ie++)E(Q.location+Ie,j/Q.locationSize,Ce,te,F*Ne,(Pt+j/Q.locationSize*Ie)*Ne,ze)}else{if(O.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)L(Q.location+nt,O.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let nt=0;nt<Q.locationSize;nt++)_(Q.location+nt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let nt=0;nt<Q.locationSize;nt++)E(Q.location+nt,j/Q.locationSize,Ce,te,j*Ne,j/Q.locationSize*nt*Ne,ze)}}else if(Z!==void 0){const te=Z[V];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Q.location,te);break;case 3:n.vertexAttrib3fv(Q.location,te);break;case 4:n.vertexAttrib4fv(Q.location,te);break;default:n.vertexAttrib1fv(Q.location,te)}}}}M()}function y(){H();for(const P in o){const z=o[P];for(const X in z){const ne=z[X];for(const Y in ne)g(ne[Y].object),delete ne[Y];delete z[X]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const z=o[P.id];for(const X in z){const ne=z[X];for(const Y in ne)g(ne[Y].object),delete ne[Y];delete z[X]}delete o[P.id]}function N(P){for(const z in o){const X=o[z];if(X[P.id]===void 0)continue;const ne=X[P.id];for(const Y in ne)g(ne[Y].object),delete ne[Y];delete X[P.id]}}function H(){ae(),c=!0,d!==l&&(d=l,h(d.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:H,resetDefaultState:ae,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:_,disableUnusedAttributes:M}}function qf(n,e,t,i){const a=i.isWebGL2;let s;function r(c){s=c}function o(c,p){n.drawArrays(s,c,p),t.update(p,s,1)}function l(c,p,f){if(f===0)return;let h,g;if(a)h=n,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,c,p,f),t.update(p,s,f)}function d(c,p,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<f;g++)this.render(c[g],p[g]);else{h.multiDrawArraysWEBGL(s,c,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=p[x];t.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function $f(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const d=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,_=r||e.has("OES_texture_float"),L=b&&_,M=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:L,maxSamples:M}}function Yf(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new mi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||i!==0||a;return a=f,i=p.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=c(p,f,0)},this.setState=function(p,f,h){const g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!a||g===null||g.length===0||s&&!m)s?c(null):d();else{const v=s?0:i,b=v*4;let _=u.clippingState||null;l.value=_,_=c(g,f,b,h);for(let L=0;L!==b;++L)_[L]=t[L];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,f,h,g){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=h+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=h;b!==x;++b,_+=4)r.copy(p[b]).applyMatrix4(v,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jf(n){let e=new WeakMap;function t(r,o){return o===eo?r.mapping=ta:o===to&&(r.mapping=na),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===eo||o===to)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const d=new rp(l.height/2);return d.fromEquirectangularTexture(n,r),e.set(r,d),r.addEventListener("dispose",a),t(d.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class td extends Zc{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,r=s+d*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Bl=[.125,.215,.35,.446,.526,.582],vi=20,Mr=new td,Hl=new We;let Sr=null,Er=0,Tr=0;const gi=(1+Math.sqrt(5))/2,Vi=1/gi,Gl=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,gi,Vi),new k(0,gi,-Vi),new k(Vi,0,gi),new k(-Vi,0,gi),new k(gi,Vi,0),new k(-gi,Vi,0)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,Er,Tr),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Na,format:gn,colorSpace:zn,depthBuffer:!1},a=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(s)),this._blurMaterial=Jf(s,e,t)}return a}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,i,a){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,f=c.toneMapping;c.getClearColor(Hl),c.toneMapping=Qn,c.autoClear=!1;const h=new St({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new C(new re,h);let x=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(Hl),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(d[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,d[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,d[u]));const b=this._cubeSize;hs(a,v*b,u>2?b:0,b,b),c.setRenderTarget(a),x&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ta||e.mapping===na;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Mr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Gl[(a-1)%Gl.length];this._blur(e,a-1,a,s,r)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new C(this._lodPlanes[a],d),f=d.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*vi-1),x=s/g,m=isFinite(s)?1+Math.floor(c*x):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const u=[];let v=0;for(let E=0;E<vi;++E){const I=E/x,y=Math.exp(-I*I/2);u.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<u.length;E++)u[E]=u[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[a],L=3*_*(a>b-Ji?a-b+Ji:0),M=4*(this._cubeSize-_);hs(t,L,M,3*_,2*_),l.setRenderTarget(t),l.render(p,Mr)}}function Kf(n){const e=[],t=[],i=[];let a=n;const s=n-Ji+1+Bl.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-Ji?l=Bl[r-n+Ji-1]:r===0&&(l=0),i.push(l);const d=1/(o-2),c=-d,p=1+d,f=[c,c,p,c,p,p,c,c,p,p,c,p],h=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*h),b=new Float32Array(m*g*h),_=new Float32Array(u*g*h);for(let M=0;M<h;M++){const E=M%3*2/3-1,I=M>2?0:-1,y=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(y,x*g*M),b.set(f,m*g*M);const T=[M,M,M,M,M,M];_.set(T,u*g*M)}const L=new bt;L.setAttribute("position",new xn(v,x)),L.setAttribute("uv",new xn(b,m)),L.setAttribute("faceIndex",new xn(_,u)),e.push(L),a>Ji&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wl(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Jf(n,e,t){const i=new Float32Array(vi),a=new k(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xl(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ql(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}function Zf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,d=l===eo||l===to,c=l===ta||l===na;if(d||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Vl(n)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(d&&p&&p.height>0||c&&p&&a(p)){t===null&&(t=new Vl(n));const f=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function a(o){let l=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&l++;return l===d}function s(o){const l=o.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Qf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function em(n,e,t,i){const a={},s=new WeakMap;function r(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",r),delete a[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const h=p.morphAttributes;for(const g in h){const x=h[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],n.ARRAY_BUFFER)}}function d(p){const f=[],h=p.index,g=p.attributes.position;let x=0;if(h!==null){const v=h.array;x=h.version;for(let b=0,_=v.length;b<_;b+=3){const L=v[b+0],M=v[b+1],E=v[b+2];f.push(L,M,M,E,E,L)}}else if(g!==void 0){const v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const L=b+0,M=b+1,E=b+2;f.push(L,M,M,E,E,L)}}else return;const m=new(Gc(f)?Kc:jc)(f,1);m.version=x;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function c(p){const f=s.get(p);if(f){const h=p.index;h!==null&&f.version<h.version&&d(p)}else d(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function tm(n,e,t,i){const a=i.isWebGL2;let s;function r(h){s=h}let o,l;function d(h){o=h.type,l=h.bytesPerElement}function c(h,g){n.drawElements(s,g,o,h*l),t.update(g,s,1)}function p(h,g,x){if(x===0)return;let m,u;if(a)m=n,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,o,h*l,x),t.update(g,s,x)}function f(h,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(h[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,o,h,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];t.update(u,s,1)}}this.setMode=r,this.setIndex=d,this.render=c,this.renderInstances=p,this.renderMultiDraw=f}function nm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function im(n,e){return n[0]-e[0]}function am(n,e){return Math.abs(e[1])-Math.abs(n[1])}function sm(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,r=new vt,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,c,p){const f=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let z=function(){ae.dispose(),s.delete(c),c.removeEventListener("dispose",z)};var h=z;m!==void 0&&m.texture.dispose();const b=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,L=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let y=0;b===!0&&(y=1),_===!0&&(y=2),L===!0&&(y=3);let T=c.attributes.position.count*y,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*N*4*x),ae=new Xc(H,T,N,x);ae.type=Jn,ae.needsUpdate=!0;const P=y*4;for(let X=0;X<x;X++){const ne=M[X],Y=E[X],J=I[X],Z=T*N*4*X;for(let V=0;V<ne.count;V++){const Q=V*P;b===!0&&(r.fromBufferAttribute(ne,V),H[Z+Q+0]=r.x,H[Z+Q+1]=r.y,H[Z+Q+2]=r.z,H[Z+Q+3]=0),_===!0&&(r.fromBufferAttribute(Y,V),H[Z+Q+4]=r.x,H[Z+Q+5]=r.y,H[Z+Q+6]=r.z,H[Z+Q+7]=0),L===!0&&(r.fromBufferAttribute(J,V),H[Z+Q+8]=r.x,H[Z+Q+9]=r.y,H[Z+Q+10]=r.z,H[Z+Q+11]=J.itemSize===4?r.w:1)}}m={count:x,texture:ae,size:new we(T,N)},s.set(c,m),c.addEventListener("dispose",z)}let u=0;for(let b=0;b<f.length;b++)u+=f[b];const v=c.morphTargetsRelative?1:1-u;p.getUniforms().setValue(n,"morphTargetBaseInfluence",v),p.getUniforms().setValue(n,"morphTargetInfluences",f),p.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let x=i[c.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];i[c.id]=x}for(let _=0;_<g;_++){const L=x[_];L[0]=_,L[1]=f[_]}x.sort(am);for(let _=0;_<8;_++)_<g&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(im);const m=c.morphAttributes.position,u=c.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const L=o[_],M=L[0],E=L[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+_)!==m[M]&&c.setAttribute("morphTarget"+_,m[M]),u&&c.getAttribute("morphNormal"+_)!==u[M]&&c.setAttribute("morphNormal"+_,u[M]),a[_]=E,v+=E):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),u&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),a[_]=0)}const b=c.morphTargetsRelative?1:1-v;p.getUniforms().setValue(n,"morphTargetBaseInfluence",b),p.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function rm(n,e,t,i){let a=new WeakMap;function s(l){const d=i.render.frame,c=l.geometry,p=e.get(l,c);if(a.get(p)!==d&&(e.update(p),a.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return p}function r(){a=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:r}}class nd extends Zt{constructor(e,t,i,a,s,r,o,l,d,c){if(c=c!==void 0?c:_i,c!==_i&&c!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_i&&(i=Kn),i===void 0&&c===ia&&(i=bi),super(null,a,s,r,o,l,c,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const id=new Zt,ad=new nd(1,1);ad.compareFunction=Hc;const sd=new Xc,rd=new Vu,od=new Qc,$l=[],Yl=[],jl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function ca(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=$l[a];if(s===void 0&&(s=new Float32Array(a),$l[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function um(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),Rt(t,i)}}function pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),Rt(t,i)}}function hm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;jl.set(i),n.uniformMatrix4fv(this.addr,!1,jl),Rt(t,i)}}function fm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function wm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?ad:id;t.setTexture2D(e||s,a)}function Mm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||rd,a)}function Sm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||od,a)}function Em(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||sd,a)}function Tm(n){switch(n){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return dm;case 35674:return um;case 35675:return pm;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return vm;case 36294:return bm;case 36295:return _m;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}function Am(n,e){n.uniform1fv(this.addr,e)}function km(n,e){const t=ca(e,this.size,2);n.uniform2fv(this.addr,t)}function Lm(n,e){const t=ca(e,this.size,3);n.uniform3fv(this.addr,t)}function Cm(n,e){const t=ca(e,this.size,4);n.uniform4fv(this.addr,t)}function Rm(n,e){const t=ca(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pm(n,e){const t=ca(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dm(n,e){const t=ca(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Im(n,e){n.uniform1iv(this.addr,e)}function Um(n,e){n.uniform2iv(this.addr,e)}function Nm(n,e){n.uniform3iv(this.addr,e)}function Om(n,e){n.uniform4iv(this.addr,e)}function zm(n,e){n.uniform1uiv(this.addr,e)}function Fm(n,e){n.uniform2uiv(this.addr,e)}function Bm(n,e){n.uniform3uiv(this.addr,e)}function Hm(n,e){n.uniform4uiv(this.addr,e)}function Gm(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||id,s[r])}function Vm(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||rd,s[r])}function Wm(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||od,s[r])}function Xm(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||sd,s[r])}function qm(n){switch(n){case 5126:return Am;case 35664:return km;case 35665:return Lm;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Fm;case 36295:return Bm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class $m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tm(t.type)}}class Ym{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Zl(n,e){n.seq.push(e),n.map[e.id]=e}function Km(n,e,t){const i=n.name,a=i.length;for(Ar.lastIndex=0;;){const s=Ar.exec(i),r=Ar.lastIndex;let o=s[1];const l=s[2]==="]",d=s[3];if(l&&(o=o|0),d===void 0||d==="["&&r+2===a){Zl(t,d===void 0?new $m(o,n,e):new Ym(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new jm(o),Zl(t,p)),t=p}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);Km(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function Ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jm=37297;let Zm=0;function Qm(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function e0(n){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n);let i;switch(e===t?i="":e===Rs&&t===Cs?i="LinearDisplayP3ToLinearSRGB":e===Cs&&t===Rs&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Ns:return[i,"LinearTransferOETF"];case Nt:case bo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Qm(n.getShaderSource(e),r)}else return a}function t0(n,e){const t=e0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function n0(n,e){let t;switch(e){case hu:t="Linear";break;case fu:t="Reinhard";break;case mu:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case xu:t="AgX";break;case gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function i0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function a0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function s0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Zi(n){return n!==""}function tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(n){return n.replace(o0,c0)}const l0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function c0(n,e){let t=Ze[e];if(t===void 0){const i=l0.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(d0,u0)}function u0(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ac(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function h0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case go:e="ENVMAP_BLENDING_MULTIPLY";break;case uu:e="ENVMAP_BLENDING_MIX";break;case pu:e="ENVMAP_BLENDING_ADD";break}return e}function g0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function x0(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=p0(t),d=h0(t),c=f0(t),p=m0(t),f=g0(t),h=t.isWebGL2?"":i0(t),g=a0(t),x=s0(s),m=a.createProgram();let u,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zi).join(`
`),u.length>0&&(u+=`
`),v=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zi).join(`
`),v.length>0&&(v+=`
`)):(u=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),v=[h,ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Qn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),r=lo(r),r=tc(r,t),r=nc(r,t),o=lo(o),o=tc(o,t),o=nc(o,t),r=ic(r),o=ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=b+u+r,L=b+v+o,M=Ql(a,a.VERTEX_SHADER,_),E=Ql(a,a.FRAGMENT_SHADER,L);a.attachShader(m,M),a.attachShader(m,E),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function I(H){if(n.debug.checkShaderErrors){const ae=a.getProgramInfoLog(m).trim(),P=a.getShaderInfoLog(M).trim(),z=a.getShaderInfoLog(E).trim();let X=!0,ne=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,m,M,E);else{const Y=ec(a,M,"vertex"),J=ec(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+Y+`
`+J)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||z==="")&&(ne=!1);ne&&(H.diagnostics={runnable:X,programLog:ae,vertexShader:{log:P,prefix:u},fragmentShader:{log:z,prefix:v}})}a.deleteShader(M),a.deleteShader(E),y=new Ts(a,m),T=r0(a,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(m,Jm)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let v0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _0(e),t.set(e,i)),i}}class _0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function y0(n,e,t,i,a,s,r){const o=new $c,l=new b0,d=[],c=a.isWebGL2,p=a.logarithmicDepthBuffer,f=a.vertexTextures;let h=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,T,N,H,ae){const P=H.fog,z=ae.geometry,X=y.isMeshStandardMaterial?H.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Y=ne&&ne.mapping===Us?ne.image.height:null,J=g[y.type];y.precision!==null&&(h=a.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,V=Z!==void 0?Z.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let O,te,j,me;if(J){const gt=bn[J];O=gt.vertexShader,te=gt.fragmentShader}else O=y.vertexShader,te=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const he=n.getRenderTarget(),Ce=ae.isInstancedMesh===!0,Ne=ae.isBatchedMesh===!0,ze=!!y.map,nt=!!y.matcap,F=!!ne,Pt=!!y.aoMap,Ie=!!y.lightMap,Ge=!!y.bumpMap,Le=!!y.normalMap,ft=!!y.displacementMap,$e=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,ue=y.clearcoat>0,ce=y.iridescence>0,pe=y.sheen>0,Re=y.transmission>0,ge=B&&!!y.anisotropyMap,Ae=ue&&!!y.clearcoatMap,Oe=ue&&!!y.clearcoatNormalMap,Ye=ue&&!!y.clearcoatRoughnessMap,de=ce&&!!y.iridescenceMap,ot=ce&&!!y.iridescenceThicknessMap,Je=pe&&!!y.sheenColorMap,He=pe&&!!y.sheenRoughnessMap,De=!!y.specularMap,ke=!!y.specularColorMap,qe=!!y.specularIntensityMap,D=Re&&!!y.transmissionMap,le=Re&&!!y.thicknessMap,fe=!!y.gradientMap,K=!!y.alphaMap,R=y.alphaTest>0,$=!!y.alphaHash,oe=!!y.extensions,Se=!!z.attributes.uv1,Ee=!!z.attributes.uv2,se=!!z.attributes.uv3;let ye=Qn;return y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ye=n.toneMapping),{isWebGL2:c,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:te,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ne,instancing:Ce,instancingColor:Ce&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:zn,map:ze,matcap:nt,envMap:F,envMapMode:F&&ne.mapping,envMapCubeUVHeight:Y,aoMap:Pt,lightMap:Ie,bumpMap:Ge,normalMap:Le,displacementMap:f&&ft,emissiveMap:$e,normalMapObjectSpace:Le&&y.normalMapType===Lu,normalMapTangentSpace:Le&&y.normalMapType===vo,metalnessMap:A,roughnessMap:w,anisotropy:B,anisotropyMap:ge,clearcoat:ue,clearcoatMap:Ae,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Ye,iridescence:ce,iridescenceMap:de,iridescenceThicknessMap:ot,sheen:pe,sheenColorMap:Je,sheenRoughnessMap:He,specularMap:De,specularColorMap:ke,specularIntensityMap:qe,transmission:Re,transmissionMap:D,thicknessMap:le,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Qi,alphaMap:K,alphaTest:R,alphaHash:$,combine:y.combine,mapUv:ze&&x(y.map.channel),aoMapUv:Pt&&x(y.aoMap.channel),lightMapUv:Ie&&x(y.lightMap.channel),bumpMapUv:Ge&&x(y.bumpMap.channel),normalMapUv:Le&&x(y.normalMap.channel),displacementMapUv:ft&&x(y.displacementMap.channel),emissiveMapUv:$e&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:ge&&x(y.anisotropyMap.channel),clearcoatMapUv:Ae&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(y.sheenRoughnessMap.channel),specularMapUv:De&&x(y.specularMap.channel),specularColorMapUv:ke&&x(y.specularColorMap.channel),specularIntensityMapUv:qe&&x(y.specularIntensityMap.channel),transmissionMapUv:D&&x(y.transmissionMap.channel),thicknessMapUv:le&&x(y.thicknessMap.channel),alphaMapUv:K&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Le||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:Ee,vertexUv3s:se,pointsUvs:ae.isPoints===!0&&!!z.attributes.uv&&(ze||K),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ae.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(T,y),b(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function _(y){const T=g[y.type];let N;if(T){const H=bn[T];N=np.clone(H.uniforms)}else N=y.uniforms;return N}function L(y,T){let N;for(let H=0,ae=d.length;H<ae;H++){const P=d[H];if(P.cacheKey===T){N=P,++N.usedTimes;break}}return N===void 0&&(N=new x0(n,T,y,s),d.push(N)),N}function M(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function E(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:L,releaseProgram:M,releaseShaderCache:E,programs:d,dispose:I}}function w0(){let n=new WeakMap;function e(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function t(s){n.delete(s)}function i(s,r,o){n.get(s)[r]=o}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function M0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(p,f,h,g,x,m){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:h,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},n[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=h,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function o(p,f,h,g,x,m){const u=r(p,f,h,g,x,m);h.transmission>0?i.push(u):h.transparent===!0?a.push(u):t.push(u)}function l(p,f,h,g,x,m){const u=r(p,f,h,g,x,m);h.transmission>0?i.unshift(u):h.transparent===!0?a.unshift(u):t.unshift(u)}function d(p,f){t.length>1&&t.sort(p||M0),i.length>1&&i.sort(f||sc),a.length>1&&a.sort(f||sc)}function c(){for(let p=e,f=n.length;p<f;p++){const h=n[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:c,sort:d}}function S0(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new rc,n.set(i,[r])):a>=s.length?(r=new rc,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function E0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new We};break;case"SpotLight":t={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function T0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A0=0;function k0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function L0(n,e){const t=new E0,i=T0(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new k);const s=new k,r=new yt,o=new yt;function l(c,p){let f=0,h=0,g=0;for(let H=0;H<9;H++)a.probe[H].set(0,0,0);let x=0,m=0,u=0,v=0,b=0,_=0,L=0,M=0,E=0,I=0,y=0;c.sort(k0);const T=p===!0?Math.PI:1;for(let H=0,ae=c.length;H<ae;H++){const P=c[H],z=P.color,X=P.intensity,ne=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*X*T,h+=z.g*X*T,g+=z.b*X*T;else if(P.isLightProbe){for(let J=0;J<9;J++)a.probe[J].addScaledVector(P.sh.coefficients[J],X);y++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const Z=P.shadow,V=i.get(P);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,a.directionalShadow[x]=V,a.directionalShadowMap[x]=Y,a.directionalShadowMatrix[x]=P.shadow.matrix,_++}a.directional[x]=J,x++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(z).multiplyScalar(X*T),J.distance=ne,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,a.spot[u]=J;const Z=P.shadow;if(P.map&&(a.spotLightMap[E]=P.map,E++,Z.updateMatrices(P),P.castShadow&&I++),a.spotLightMatrix[u]=Z.matrix,P.castShadow){const V=i.get(P);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,a.spotShadow[u]=V,a.spotShadowMap[u]=Y,M++}u++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(z).multiplyScalar(X),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),a.rectArea[v]=J,v++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),J.distance=P.distance,J.decay=P.decay,P.castShadow){const Z=P.shadow,V=i.get(P);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,a.pointShadow[m]=V,a.pointShadowMap[m]=Y,a.pointShadowMatrix[m]=P.shadow.matrix,L++}a.point[m]=J,m++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(X*T),J.groundColor.copy(P.groundColor).multiplyScalar(X*T),a.hemi[b]=J,b++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=h,a.ambient[2]=g;const N=a.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==u||N.rectAreaLength!==v||N.hemiLength!==b||N.numDirectionalShadows!==_||N.numPointShadows!==L||N.numSpotShadows!==M||N.numSpotMaps!==E||N.numLightProbes!==y)&&(a.directional.length=x,a.spot.length=u,a.rectArea.length=v,a.point.length=m,a.hemi.length=b,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=M,a.spotShadowMap.length=M,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=M+E-I,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=y,N.directionalLength=x,N.pointLength=m,N.spotLength=u,N.rectAreaLength=v,N.hemiLength=b,N.numDirectionalShadows=_,N.numPointShadows=L,N.numSpotShadows=M,N.numSpotMaps=E,N.numLightProbes=y,a.version=A0++)}function d(c,p){let f=0,h=0,g=0,x=0,m=0;const u=p.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){const _=c[v];if(_.isDirectionalLight){const L=a.directional[f];L.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),f++}else if(_.isSpotLight){const L=a.spot[g];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),g++}else if(_.isRectAreaLight){const L=a.rectArea[x];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),L.halfWidth.set(_.width*.5,0,0),L.halfHeight.set(0,_.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const L=a.point[h];L.position.setFromMatrixPosition(_.matrixWorld),L.position.applyMatrix4(u),h++}else if(_.isHemisphereLight){const L=a.hemi[m];L.direction.setFromMatrixPosition(_.matrixWorld),L.direction.transformDirection(u),m++}}}return{setup:l,setupView:d,state:a}}function oc(n,e){const t=new L0(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function r(p){i.push(p)}function o(p){a.push(p)}function l(p){t.setup(i,p)}function d(p){t.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o}}function C0(n,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new oc(n,e),t.set(s,[l])):r>=o.length?(l=new oc(n,e),o.push(l)):l=o[r],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class R0 extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function U0(n,e,t){let i=new _o;const a=new we,s=new we,r=new vt,o=new R0({depthPacking:ku}),l=new P0,d={},c=t.maxTextureSize,p={[ii]:Vt,[Vt]:ii,[kt]:kt},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:D0,fragmentShader:I0}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let u=this.type;this.render=function(M,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const y=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ae=u!==Rn&&this.type===Rn,P=u===Rn&&this.type!==Rn;for(let z=0,X=M.length;z<X;z++){const ne=M[z],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const J=Y.getFrameExtents();if(a.multiply(J),s.copy(Y.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/J.x),a.x=s.x*J.x,Y.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/J.y),a.y=s.y*J.y,Y.mapSize.y=s.y)),Y.map===null||ae===!0||P===!0){const V=this.type!==Rn?{minFilter:Yt,magFilter:Yt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wi(a.x,a.y,V),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const Z=Y.getViewportCount();for(let V=0;V<Z;V++){const Q=Y.getViewport(V);r.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),H.viewport(r),Y.updateMatrices(ne,V),i=Y.getFrustum(),_(E,I,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Rn&&v(Y,I),Y.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,N)};function v(M,E){const I=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wi(a.x,a.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,I,f,x,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,I,h,x,null)}function b(M,E,I,y){let T=null;const N=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)T=N;else if(T=I.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=T.uuid,ae=E.uuid;let P=d[H];P===void 0&&(P={},d[H]=P);let z=P[ae];z===void 0&&(z=T.clone(),P[ae]=z,E.addEventListener("dispose",L)),T=z}if(T.visible=E.visible,T.wireframe=E.wireframe,y===Rn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:p[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=I}return T}function _(M,E,I,y,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Rn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const ae=e.update(M),P=M.material;if(Array.isArray(P)){const z=ae.groups;for(let X=0,ne=z.length;X<ne;X++){const Y=z[X],J=P[Y.materialIndex];if(J&&J.visible){const Z=b(M,J,y,T);M.onBeforeShadow(n,M,E,I,ae,Z,Y),n.renderBufferDirect(I,null,ae,Z,M,Y),M.onAfterShadow(n,M,E,I,ae,Z,Y)}}}else if(P.visible){const z=b(M,P,y,T);M.onBeforeShadow(n,M,E,I,ae,z,null),n.renderBufferDirect(I,null,ae,z,M,null),M.onAfterShadow(n,M,E,I,ae,z,null)}}const H=M.children;for(let ae=0,P=H.length;ae<P;ae++)_(H[ae],E,I,y,T)}function L(M){M.target.removeEventListener("dispose",L);for(const I in d){const y=d[I],T=M.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function N0(n,e,t){const i=t.isWebGL2;function a(){let R=!1;const $=new vt;let oe=null;const Se=new vt(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!R&&(n.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){R=Ee},setClear:function(Ee,se,ye,lt,gt){gt===!0&&(Ee*=lt,se*=lt,ye*=lt),$.set(Ee,se,ye,lt),Se.equals($)===!1&&(n.clearColor(Ee,se,ye,lt),Se.copy($))},reset:function(){R=!1,oe=null,Se.set(-1,0,0,0)}}}function s(){let R=!1,$=null,oe=null,Se=null;return{setTest:function(Ee){Ee?Ne(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Ee){$!==Ee&&!R&&(n.depthMask(Ee),$=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case au:n.depthFunc(n.NEVER);break;case su:n.depthFunc(n.ALWAYS);break;case ru:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case ou:n.depthFunc(n.EQUAL);break;case lu:n.depthFunc(n.GEQUAL);break;case cu:n.depthFunc(n.GREATER);break;case du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){R=Ee},setClear:function(Ee){Se!==Ee&&(n.clearDepth(Ee),Se=Ee)},reset:function(){R=!1,$=null,oe=null,Se=null}}}function r(){let R=!1,$=null,oe=null,Se=null,Ee=null,se=null,ye=null,lt=null,gt=null;return{setTest:function(st){R||(st?Ne(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(st){$!==st&&!R&&(n.stencilMask(st),$=st)},setFunc:function(st,Dt,Qt){(oe!==st||Se!==Dt||Ee!==Qt)&&(n.stencilFunc(st,Dt,Qt),oe=st,Se=Dt,Ee=Qt)},setOp:function(st,Dt,Qt){(se!==st||ye!==Dt||lt!==Qt)&&(n.stencilOp(st,Dt,Qt),se=st,ye=Dt,lt=Qt)},setLocked:function(st){R=st},setClear:function(st){gt!==st&&(n.clearStencil(st),gt=st)},reset:function(){R=!1,$=null,oe=null,Se=null,Ee=null,se=null,ye=null,lt=null,gt=null}}}const o=new a,l=new s,d=new r,c=new WeakMap,p=new WeakMap;let f={},h={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,L=null,M=null,E=null,I=null,y=new We(0,0,0),T=0,N=!1,H=null,ae=null,P=null,z=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=J>=2);let V=null,Q={};const O=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),j=new vt().fromArray(O),me=new vt().fromArray(te);function he(R,$,oe,Se){const Ee=new Uint8Array(4),se=n.createTexture();n.bindTexture(R,se),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<oe;ye++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D($,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D($+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return se}const Ce={};Ce[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(ks),$e(!1),A(Vo),Ne(n.CULL_FACE),Le(Zn);function Ne(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function ze(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function nt(R,$){return h[R]!==$?(n.bindFramebuffer(R,$),h[R]=$,i&&(R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=$),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=$)),!0):!1}function F(R,$){let oe=x,Se=!1;if(R)if(oe=g.get($),oe===void 0&&(oe=[],g.set($,oe)),R.isWebGLMultipleRenderTargets){const Ee=R.texture;if(oe.length!==Ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let se=0,ye=Ee.length;se<ye;se++)oe[se]=n.COLOR_ATTACHMENT0+se;oe.length=Ee.length,Se=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Se=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Pt(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const Ie={[xi]:n.FUNC_ADD,[Vd]:n.FUNC_SUBTRACT,[Wd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[$o]=n.MIN,Ie[Yo]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ie[$o]=R.MIN_EXT,Ie[Yo]=R.MAX_EXT)}const Ge={[Xd]:n.ZERO,[qd]:n.ONE,[$d]:n.SRC_COLOR,[Zr]:n.SRC_ALPHA,[Qd]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[jd]:n.DST_ALPHA,[Yd]:n.ONE_MINUS_SRC_COLOR,[Qr]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[Kd]:n.ONE_MINUS_DST_ALPHA,[eu]:n.CONSTANT_COLOR,[tu]:n.ONE_MINUS_CONSTANT_COLOR,[nu]:n.CONSTANT_ALPHA,[iu]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(R,$,oe,Se,Ee,se,ye,lt,gt,st){if(R===Zn){u===!0&&(ze(n.BLEND),u=!1);return}if(u===!1&&(Ne(n.BLEND),u=!0),R!==Gd){if(R!==v||st!==N){if((b!==xi||M!==xi)&&(n.blendEquation(n.FUNC_ADD),b=xi,M=xi),st)switch(R){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,L=null,E=null,I=null,y.set(0,0,0),T=0,v=R,N=st}return}Ee=Ee||$,se=se||oe,ye=ye||Se,($!==b||Ee!==M)&&(n.blendEquationSeparate(Ie[$],Ie[Ee]),b=$,M=Ee),(oe!==_||Se!==L||se!==E||ye!==I)&&(n.blendFuncSeparate(Ge[oe],Ge[Se],Ge[se],Ge[ye]),_=oe,L=Se,E=se,I=ye),(lt.equals(y)===!1||gt!==T)&&(n.blendColor(lt.r,lt.g,lt.b,gt),y.copy(lt),T=gt),v=R,N=!1}function ft(R,$){R.side===kt?ze(n.CULL_FACE):Ne(n.CULL_FACE);let oe=R.side===Vt;$&&(oe=!oe),$e(oe),R.blending===Qi&&R.transparent===!1?Le(Zn):Le(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Se=R.stencilWrite;d.setTest(Se),Se&&(d.setMask(R.stencilWriteMask),d.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),d.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),B(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(R){H!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),H=R)}function A(R){R!==Bd?(Ne(n.CULL_FACE),R!==ae&&(R===Vo?n.cullFace(n.BACK):R===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),ae=R}function w(R){R!==P&&(Y&&n.lineWidth(R),P=R)}function B(R,$,oe){R?(Ne(n.POLYGON_OFFSET_FILL),(z!==$||X!==oe)&&(n.polygonOffset($,oe),z=$,X=oe)):ze(n.POLYGON_OFFSET_FILL)}function ue(R){R?Ne(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function ce(R){R===void 0&&(R=n.TEXTURE0+ne-1),V!==R&&(n.activeTexture(R),V=R)}function pe(R,$,oe){oe===void 0&&(V===null?oe=n.TEXTURE0+ne-1:oe=V);let Se=Q[oe];Se===void 0&&(Se={type:void 0,texture:void 0},Q[oe]=Se),(Se.type!==R||Se.texture!==$)&&(V!==oe&&(n.activeTexture(oe),V=oe),n.bindTexture(R,$||Ce[R]),Se.type=R,Se.texture=$)}function Re(){const R=Q[V];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(R){j.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function D(R){me.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function le(R,$){let oe=p.get($);oe===void 0&&(oe=new WeakMap,p.set($,oe));let Se=oe.get(R);Se===void 0&&(Se=n.getUniformBlockIndex($,R.name),oe.set(R,Se))}function fe(R,$){const Se=p.get($).get(R);c.get($)!==Se&&(n.uniformBlockBinding($,Se,R.__bindingPointIndex),c.set($,Se))}function K(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},V=null,Q={},h={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,L=null,M=null,E=null,I=null,y=new We(0,0,0),T=0,N=!1,H=null,ae=null,P=null,z=null,X=null,j.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:Ne,disable:ze,bindFramebuffer:nt,drawBuffers:F,useProgram:Pt,setBlending:Le,setMaterial:ft,setFlipSided:$e,setCullFace:A,setLineWidth:w,setPolygonOffset:B,setScissorTest:ue,activeTexture:ce,bindTexture:pe,unbindTexture:Re,compressedTexImage2D:ge,compressedTexImage3D:Ae,texImage2D:De,texImage3D:ke,updateUBOMapping:le,uniformBlockBinding:fe,texStorage2D:Je,texStorage3D:He,texSubImage2D:Oe,texSubImage3D:Ye,compressedTexSubImage2D:de,compressedTexSubImage3D:ot,scissor:qe,viewport:D,reset:K}}function O0(n,e,t,i,a,s,r){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let p;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return h?new OffscreenCanvas(A,w):Ds("canvas")}function x(A,w,B,ue){let ce=1;if((A.width>ue||A.height>ue)&&(ce=ue/Math.max(A.width,A.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const pe=w?oo:Math.floor,Re=pe(ce*A.width),ge=pe(ce*A.height);p===void 0&&(p=g(Re,ge));const Ae=B?g(Re,ge):p;return Ae.width=Re,Ae.height=ge,Ae.getContext("2d").drawImage(A,0,0,Re,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Re+"x"+ge+")."),Ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ml(A.width)&&Ml(A.height)}function u(A){return o?!1:A.wrapS!==mn||A.wrapT!==mn||A.minFilter!==Yt&&A.minFilter!==rn}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==Yt&&A.minFilter!==rn}function b(A){n.generateMipmap(A)}function _(A,w,B,ue,ce=!1){if(o===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=w;if(w===n.RED&&(B===n.FLOAT&&(pe=n.R32F),B===n.HALF_FLOAT&&(pe=n.R16F),B===n.UNSIGNED_BYTE&&(pe=n.R8)),w===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(pe=n.R8UI),B===n.UNSIGNED_SHORT&&(pe=n.R16UI),B===n.UNSIGNED_INT&&(pe=n.R32UI),B===n.BYTE&&(pe=n.R8I),B===n.SHORT&&(pe=n.R16I),B===n.INT&&(pe=n.R32I)),w===n.RG&&(B===n.FLOAT&&(pe=n.RG32F),B===n.HALF_FLOAT&&(pe=n.RG16F),B===n.UNSIGNED_BYTE&&(pe=n.RG8)),w===n.RGBA){const Re=ce?Ls:ut.getTransfer(ue);B===n.FLOAT&&(pe=n.RGBA32F),B===n.HALF_FLOAT&&(pe=n.RGBA16F),B===n.UNSIGNED_BYTE&&(pe=Re===xt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(A,w,B){return v(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function M(A){return A===Yt||A===jo||A===Zs?n.NEAREST:n.LINEAR}function E(A){const w=A.target;w.removeEventListener("dispose",E),y(w),w.isVideoTexture&&c.delete(w)}function I(A){const w=A.target;w.removeEventListener("dispose",I),N(w)}function y(A){const w=i.get(A);if(w.__webglInit===void 0)return;const B=A.source,ue=f.get(B);if(ue){const ce=ue[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(A),Object.keys(ue).length===0&&f.delete(B)}i.remove(A)}function T(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const B=A.source,ue=f.get(B);delete ue[w.__cacheKey],r.memory.textures--}function N(A){const w=A.texture,B=i.get(A),ue=i.get(w);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(B.__webglFramebuffer[ce]))for(let pe=0;pe<B.__webglFramebuffer[ce].length;pe++)n.deleteFramebuffer(B.__webglFramebuffer[ce][pe]);else n.deleteFramebuffer(B.__webglFramebuffer[ce]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ce])}else{if(Array.isArray(B.__webglFramebuffer))for(let ce=0;ce<B.__webglFramebuffer.length;ce++)n.deleteFramebuffer(B.__webglFramebuffer[ce]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,pe=w.length;ce<pe;ce++){const Re=i.get(w[ce]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),r.memory.textures--),i.remove(w[ce])}i.remove(w),i.remove(A)}let H=0;function ae(){H=0}function P(){const A=H;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),H+=1,A}function z(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function X(A,w){const B=i.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ue=A.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,A,w);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+w)}function ne(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){j(B,A,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+w)}function Y(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){j(B,A,w);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+w)}function J(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+w)}const Z={[no]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},V={[Yt]:n.NEAREST,[jo]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[vu]:n.LINEAR_MIPMAP_NEAREST,[Ua]:n.LINEAR_MIPMAP_LINEAR},Q={[Cu]:n.NEVER,[Nu]:n.ALWAYS,[Ru]:n.LESS,[Hc]:n.LEQUAL,[Pu]:n.EQUAL,[Uu]:n.GEQUAL,[Du]:n.GREATER,[Iu]:n.NOTEQUAL};function O(A,w,B){if(B?(n.texParameteri(A,n.TEXTURE_WRAP_S,Z[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Z[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Z[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,V[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,V[w.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==mn||w.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,M(w.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Yt&&w.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Yt||w.minFilter!==Zs&&w.minFilter!==Ua||w.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Na&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function te(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",E));const ue=w.source;let ce=f.get(ue);ce===void 0&&(ce={},f.set(ue,ce));const pe=z(w);if(pe!==A.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ce[pe].usedTimes++;const Re=ce[A.__cacheKey];Re!==void 0&&(ce[A.__cacheKey].usedTimes--,Re.usedTimes===0&&T(w)),A.__cacheKey=pe,A.__webglTexture=ce[pe].texture}return B}function j(A,w,B){let ue=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=n.TEXTURE_3D);const ce=te(A,w),pe=w.source;t.bindTexture(ue,A.__webglTexture,n.TEXTURE0+B);const Re=i.get(pe);if(pe.version!==Re.__version||ce===!0){t.activeTexture(n.TEXTURE0+B);const ge=ut.getPrimaries(ut.workingColorSpace),Ae=w.colorSpace===cn?null:ut.getPrimaries(w.colorSpace),Oe=w.colorSpace===cn||ge===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Ye=u(w)&&m(w.image)===!1;let de=x(w.image,Ye,!1,a.maxTextureSize);de=$e(w,de);const ot=m(de)||o,Je=s.convert(w.format,w.colorSpace);let He=s.convert(w.type),De=_(w.internalFormat,Je,He,w.colorSpace,w.isVideoTexture);O(ue,w,ot);let ke;const qe=w.mipmaps,D=o&&w.isVideoTexture!==!0&&De!==Fc,le=Re.__version===void 0||ce===!0,fe=L(w,de,ot);if(w.isDepthTexture)De=n.DEPTH_COMPONENT,o?w.type===Jn?De=n.DEPTH_COMPONENT32F:w.type===Kn?De=n.DEPTH_COMPONENT24:w.type===bi?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:w.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&De===n.DEPTH_COMPONENT&&w.type!==xo&&w.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Kn,He=s.convert(w.type)),w.format===ia&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,w.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bi,He=s.convert(w.type))),le&&(D?t.texStorage2D(n.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,De,de.width,de.height,0,Je,He,null));else if(w.isDataTexture)if(qe.length>0&&ot){D&&le&&t.texStorage2D(n.TEXTURE_2D,fe,De,qe[0].width,qe[0].height);for(let K=0,R=qe.length;K<R;K++)ke=qe[K],D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ke.width,ke.height,Je,He,ke.data):t.texImage2D(n.TEXTURE_2D,K,De,ke.width,ke.height,0,Je,He,ke.data);w.generateMipmaps=!1}else D?(le&&t.texStorage2D(n.TEXTURE_2D,fe,De,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Je,He,de.data)):t.texImage2D(n.TEXTURE_2D,0,De,de.width,de.height,0,Je,He,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){D&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,De,qe[0].width,qe[0].height,de.depth);for(let K=0,R=qe.length;K<R;K++)ke=qe[K],w.format!==gn?Je!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ke.width,ke.height,de.depth,Je,ke.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,De,ke.width,ke.height,de.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ke.width,ke.height,de.depth,Je,He,ke.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,De,ke.width,ke.height,de.depth,0,Je,He,ke.data)}else{D&&le&&t.texStorage2D(n.TEXTURE_2D,fe,De,qe[0].width,qe[0].height);for(let K=0,R=qe.length;K<R;K++)ke=qe[K],w.format!==gn?Je!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ke.width,ke.height,Je,ke.data):t.compressedTexImage2D(n.TEXTURE_2D,K,De,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ke.width,ke.height,Je,He,ke.data):t.texImage2D(n.TEXTURE_2D,K,De,ke.width,ke.height,0,Je,He,ke.data)}else if(w.isDataArrayTexture)D?(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,De,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Je,He,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Je,He,de.data);else if(w.isData3DTexture)D?(le&&t.texStorage3D(n.TEXTURE_3D,fe,De,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Je,He,de.data)):t.texImage3D(n.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Je,He,de.data);else if(w.isFramebufferTexture){if(le)if(D)t.texStorage2D(n.TEXTURE_2D,fe,De,de.width,de.height);else{let K=de.width,R=de.height;for(let $=0;$<fe;$++)t.texImage2D(n.TEXTURE_2D,$,De,K,R,0,Je,He,null),K>>=1,R>>=1}}else if(qe.length>0&&ot){D&&le&&t.texStorage2D(n.TEXTURE_2D,fe,De,qe[0].width,qe[0].height);for(let K=0,R=qe.length;K<R;K++)ke=qe[K],D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Je,He,ke):t.texImage2D(n.TEXTURE_2D,K,De,Je,He,ke);w.generateMipmaps=!1}else D?(le&&t.texStorage2D(n.TEXTURE_2D,fe,De,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,He,de)):t.texImage2D(n.TEXTURE_2D,0,De,Je,He,de);v(w,ot)&&b(ue),Re.__version=pe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,B){if(w.image.length!==6)return;const ue=te(A,w),ce=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const pe=i.get(ce);if(ce.version!==pe.__version||ue===!0){t.activeTexture(n.TEXTURE0+B);const Re=ut.getPrimaries(ut.workingColorSpace),ge=w.colorSpace===cn?null:ut.getPrimaries(w.colorSpace),Ae=w.colorSpace===cn||Re===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ye=w.image[0]&&w.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Oe&&!Ye?de[K]=x(w.image[K],!1,!0,a.maxCubemapSize):de[K]=Ye?w.image[K].image:w.image[K],de[K]=$e(w,de[K]);const ot=de[0],Je=m(ot)||o,He=s.convert(w.format,w.colorSpace),De=s.convert(w.type),ke=_(w.internalFormat,He,De,w.colorSpace),qe=o&&w.isVideoTexture!==!0,D=pe.__version===void 0||ue===!0;let le=L(w,ot,Je);O(n.TEXTURE_CUBE_MAP,w,Je);let fe;if(Oe){qe&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ke,ot.width,ot.height);for(let K=0;K<6;K++){fe=de[K].mipmaps;for(let R=0;R<fe.length;R++){const $=fe[R];w.format!==gn?He!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,$.width,$.height,He,$.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,ke,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,$.width,$.height,He,De,$.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,ke,$.width,$.height,0,He,De,$.data)}}}else{fe=w.mipmaps,qe&&D&&(fe.length>0&&le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ke,de[0].width,de[0].height));for(let K=0;K<6;K++)if(Ye){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,He,De,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,de[K].width,de[K].height,0,He,De,de[K].data);for(let R=0;R<fe.length;R++){const oe=fe[R].image[K].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,oe.width,oe.height,He,De,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,ke,oe.width,oe.height,0,He,De,oe.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,He,De,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,He,De,de[K]);for(let R=0;R<fe.length;R++){const $=fe[R];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,He,De,$.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,ke,He,De,$.image[K])}}}v(w,Je)&&b(n.TEXTURE_CUBE_MAP),pe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function he(A,w,B,ue,ce,pe){const Re=s.convert(B.format,B.colorSpace),ge=s.convert(B.type),Ae=_(B.internalFormat,Re,ge,B.colorSpace);if(!i.get(w).__hasExternalTextures){const Ye=Math.max(1,w.width>>pe),de=Math.max(1,w.height>>pe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,pe,Ae,Ye,de,w.depth,0,Re,ge,null):t.texImage2D(ce,pe,Ae,Ye,de,0,Re,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,0,Ge(w)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,w,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ue=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Le(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Jn?ue=n.DEPTH_COMPONENT32F:ce.type===Kn&&(ue=n.DEPTH_COMPONENT24));const pe=Ge(w);Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ue,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ue,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const ue=Ge(w);B&&Le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ue=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<ue.length;ce++){const pe=ue[ce],Re=s.convert(pe.format,pe.colorSpace),ge=s.convert(pe.type),Ae=_(pe.internalFormat,Re,ge,pe.colorSpace),Oe=Ge(w);B&&Le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ae,w.width,w.height):Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Ae,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const ue=i.get(w.depthTexture).__webglTexture,ce=Ge(w);if(w.depthTexture.format===_i)Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(w.depthTexture.format===ia)Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ze(A){const w=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]=n.createRenderbuffer(),Ce(w.__webglDepthbuffer[ue],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ce(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(A,w,B){const ue=i.get(A);w!==void 0&&he(ue.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ze(A)}function F(A){const w=A.texture,B=i.get(A),ue=i.get(w);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=w.version,r.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,pe=A.isWebGLMultipleRenderTargets===!0,Re=m(A)||o;if(ce){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)B.__webglFramebuffer[ge][Ae]=n.createFramebuffer()}else B.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)B.__webglFramebuffer[ge]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(pe)if(a.drawBuffers){const ge=A.texture;for(let Ae=0,Oe=ge.length;Ae<Oe;Ae++){const Ye=i.get(ge[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Le(A)===!1){const ge=pe?w:[w];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Oe=ge[Ae];B.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Ae]);const Ye=s.convert(Oe.format,Oe.colorSpace),de=s.convert(Oe.type),ot=_(Oe.internalFormat,Ye,de,Oe.colorSpace,A.isXRRenderTarget===!0),Je=Ge(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ot,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),O(n.TEXTURE_CUBE_MAP,w,Re);for(let ge=0;ge<6;ge++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)he(B.__webglFramebuffer[ge][Ae],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else he(B.__webglFramebuffer[ge],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(w,Re)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const ge=A.texture;for(let Ae=0,Oe=ge.length;Ae<Oe;Ae++){const Ye=ge[Ae],de=i.get(Ye);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),O(n.TEXTURE_2D,Ye,Re),he(B.__webglFramebuffer,A,Ye,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),v(Ye,Re)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ue.__webglTexture),O(ge,w,Re),o&&w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)he(B.__webglFramebuffer[Ae],A,w,n.COLOR_ATTACHMENT0,ge,Ae);else he(B.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,ge,0);v(w,Re)&&b(ge),t.unbindTexture()}A.depthBuffer&&ze(A)}function Pt(A){const w=m(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0,ce=B.length;ue<ce;ue++){const pe=B[ue];if(v(pe,w)){const Re=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(pe).__webglTexture;t.bindTexture(Re,ge),b(Re),t.unbindTexture()}}}function Ie(A){if(o&&A.samples>0&&Le(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ue=A.height;let ce=n.COLOR_BUFFER_BIT;const pe=[],Re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),Ae=A.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){pe.push(n.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&pe.push(Re);const Ye=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ye===!1&&(A.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),Ae){const de=i.get(w[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,B,ue,0,0,B,ue,ce,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]);const Ye=i.get(w[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ge(A){return Math.min(a.maxSamples,A.samples)}function Le(A){const w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(A){const w=r.render.frame;c.get(A)!==w&&(c.set(A,w),A.update())}function $e(A,w){const B=A.colorSpace,ue=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===so||B!==zn&&B!==cn&&(ut.getTransfer(B)===xt?o===!1?e.has("EXT_sRGB")===!0&&ue===gn?(A.format=so,A.minFilter=rn,A.generateMipmaps=!1):w=Vc.sRGBToLinear(w):(ue!==gn||ce!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}this.allocateTextureUnit=P,this.resetTextureUnits=ae,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=Y,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Le}function z0(n,e,t){const i=t.isWebGL2;function a(s,r=cn){let o;const l=ut.getTransfer(r);if(s===ei)return n.UNSIGNED_BYTE;if(s===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bu)return n.BYTE;if(s===_u)return n.SHORT;if(s===xo)return n.UNSIGNED_SHORT;if(s===Dc)return n.INT;if(s===Kn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===Na)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yu)return n.ALPHA;if(s===gn)return n.RGBA;if(s===wu)return n.LUMINANCE;if(s===Mu)return n.LUMINANCE_ALPHA;if(s===_i)return n.DEPTH_COMPONENT;if(s===ia)return n.DEPTH_STENCIL;if(s===so)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Su)return n.RED;if(s===Nc)return n.RED_INTEGER;if(s===Eu)return n.RG;if(s===Oc)return n.RG_INTEGER;if(s===zc)return n.RGBA_INTEGER;if(s===Qs||s===er||s===tr||s===nr)if(l===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ko||s===Jo||s===Zo||s===Qo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ko)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===el||s===tl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===el)return l===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nl||s===il||s===al||s===sl||s===rl||s===ol||s===ll||s===cl||s===dl||s===ul||s===pl||s===hl||s===fl||s===ml)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===al)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ol)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ll)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ml)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ir||s===gl||s===xl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ir)return l===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tu||s===vl||s===bl||s===_l)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ir)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class F0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(d,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const c=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],f=c.position.distanceTo(p.position),h=.02,g=.005;d.inputState.pinching&&f>h+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=h-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class H0 extends la{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,d=null,c=null,p=null,f=null,h=null,g=null;const x=t.getContextAttributes();let m=null,u=null;const v=[],b=[],_=new we;let L=null;const M=new Kt;M.layers.enable(1),M.viewport=new vt;const E=new Kt;E.layers.enable(2),E.viewport=new vt;const I=[M,E],y=new F0;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let te=v[O];return te===void 0&&(te=new kr,v[O]=te),te.getTargetRaySpace()},this.getControllerGrip=function(O){let te=v[O];return te===void 0&&(te=new kr,v[O]=te),te.getGripSpace()},this.getHand=function(O){let te=v[O];return te===void 0&&(te=new kr,v[O]=te),te.getHandSpace()};function H(O){const te=b.indexOf(O.inputSource);if(te===-1)return;const j=v[te];j!==void 0&&(j.update(O.inputSource,O.frame,d||r),j.dispatchEvent({type:O.type,data:O.inputSource}))}function ae(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",P);for(let O=0;O<v.length;O++){const te=b[O];te!==null&&(b[O]=null,v[O].disconnect(te))}T=null,N=null,e.setRenderTarget(m),h=null,f=null,p=null,a=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||r},this.setReferenceSpace=function(O){d=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(O){if(a=O,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(_),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),u=new wi(h.framebufferWidth,h.framebufferHeight,{format:gn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,j=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?ia:_i,j=x.stencil?bi:Kn);const he={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};p=new XRWebGLBinding(a,t),f=p.createProjectionLayer(he),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new wi(f.textureWidth,f.textureHeight,{format:gn,type:ei,depthTexture:new nd(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ce=e.properties.get(u);Ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),d=null,r=await a.requestReferenceSpace(o),Q.setContext(a),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(O){for(let te=0;te<O.removed.length;te++){const j=O.removed[te],me=b.indexOf(j);me>=0&&(b[me]=null,v[me].disconnect(j))}for(let te=0;te<O.added.length;te++){const j=O.added[te];let me=b.indexOf(j);if(me===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=b.length){b.push(j),me=Ce;break}else if(b[Ce]===null){b[Ce]=j,me=Ce;break}if(me===-1)break}const he=v[me];he&&he.connect(j)}}const z=new k,X=new k;function ne(O,te,j){z.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(j.matrixWorld);const me=z.distanceTo(X),he=te.projectionMatrix.elements,Ce=j.projectionMatrix.elements,Ne=he[14]/(he[10]-1),ze=he[14]/(he[10]+1),nt=(he[9]+1)/he[5],F=(he[9]-1)/he[5],Pt=(he[8]-1)/he[0],Ie=(Ce[8]+1)/Ce[0],Ge=Ne*Pt,Le=Ne*Ie,ft=me/(-Pt+Ie),$e=ft*-Pt;te.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX($e),O.translateZ(ft),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const A=Ne+ft,w=ze+ft,B=Ge-$e,ue=Le+(me-$e),ce=nt*ze/w*A,pe=F*ze/w*A;O.projectionMatrix.makePerspective(B,ue,ce,pe,A,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Y(O,te){te===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(te.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(a===null)return;y.near=E.near=M.near=O.near,y.far=E.far=M.far=O.far,(T!==y.near||N!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);const te=O.parent,j=y.cameras;Y(y,te);for(let me=0;me<j.length;me++)Y(j[me],te);j.length===2?ne(y,M,E):y.projectionMatrix.copy(M.projectionMatrix),J(O,y,te)};function J(O,te,j){j===null?O.matrix.copy(te.matrixWorld):(O.matrix.copy(j.matrixWorld),O.matrix.invert(),O.matrix.multiply(te.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(te.projectionMatrix),O.projectionMatrixInverse.copy(te.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ro*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)};let Z=null;function V(O,te){if(c=te.getViewerPose(d||r),g=te,c!==null){const j=c.views;h!==null&&(e.setRenderTargetFramebuffer(u,h.framebuffer),e.setRenderTarget(u));let me=!1;j.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let he=0;he<j.length;he++){const Ce=j[he];let Ne=null;if(h!==null)Ne=h.getViewport(Ce);else{const nt=p.getViewSubImage(f,Ce);Ne=nt.viewport,he===0&&(e.setRenderTargetTextures(u,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(u))}let ze=I[he];ze===void 0&&(ze=new Kt,ze.layers.enable(he),ze.viewport=new vt,I[he]=ze),ze.matrix.fromArray(Ce.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ce.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),he===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(ze)}}for(let j=0;j<v.length;j++){const me=b[j],he=v[j];me!==null&&he!==void 0&&he.update(me,te,d||r)}Z&&Z(O,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Q=new ed;Q.setAnimationLoop(V),this.setAnimationLoop=function(O){Z=O},this.dispose=function(){}}}function G0(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Jc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,v,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),c(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&h(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,b):u.isSpriteMaterial?d(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Vt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Vt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*b,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function h(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Vt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function V0(n,e,t,i){let a={},s={},r=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,b){const _=b.program;i.uniformBlockBinding(v,_)}function d(v,b){let _=a[v.id];_===void 0&&(g(v),_=c(v),a[v.id]=_,v.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(v,L);const M=e.render.frame;s[v.id]!==M&&(f(v),s[v.id]=M)}function c(v){const b=p();v.__bindingPointIndex=b;const _=n.createBuffer(),L=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=a[v.id],_=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,E=_.length;M<E;M++){const I=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,T=I.length;y<T;y++){const N=I[y];if(h(N,M,y,L)===!0){const H=N.__offset,ae=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let z=0;z<ae.length;z++){const X=ae[z],ne=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+P,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,_,L){const M=v.value,E=b+"_"+_;if(L[E]===void 0)return typeof M=="number"||typeof M=="boolean"?L[E]=M:L[E]=M.clone(),!0;{const I=L[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return L[E]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(v){const b=v.uniforms;let _=0;const L=16;for(let E=0,I=b.length;E<I;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let T=0,N=y.length;T<N;T++){const H=y[T],ae=Array.isArray(H.value)?H.value:[H.value];for(let P=0,z=ae.length;P<z;P++){const X=ae[P],ne=x(X),Y=_%L;Y!==0&&L-Y<ne.boundary&&(_+=L-Y),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ne.storage}}}const M=_%L;return M>0&&(_+=L-M),v.__size=_,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function u(){for(const v in a)n.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:d,dispose:u}}class wo{constructor(e={}){const{canvas:t=zu(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const h=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const b=this;let _=!1,L=0,M=0,E=null,I=-1,y=null;const T=new vt,N=new vt;let H=null;const ae=new We(0);let P=0,z=t.width,X=t.height,ne=1,Y=null,J=null;const Z=new vt(0,0,z,X),V=new vt(0,0,z,X);let Q=!1;const O=new _o;let te=!1,j=!1,me=null;const he=new yt,Ce=new we,Ne=new k,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return E===null?ne:1}let F=i;function Pt(S,U){for(let W=0;W<S.length;W++){const q=S[W],G=t.getContext(q,U);if(G!==null)return G}return null}try{const S={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",$,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&U.shift(),F=Pt(U,S),F===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ie,Ge,Le,ft,$e,A,w,B,ue,ce,pe,Re,ge,Ae,Oe,Ye,de,ot,Je,He,De,ke,qe,D;function le(){Ie=new Qf(F),Ge=new $f(F,Ie,e),Ie.init(Ge),ke=new z0(F,Ie,Ge),Le=new N0(F,Ie,Ge),ft=new nm(F),$e=new w0,A=new O0(F,Ie,Le,$e,Ge,ke,ft),w=new jf(b),B=new Zf(b),ue=new cp(F,Ge),qe=new Xf(F,Ie,ue,Ge),ce=new em(F,ue,ft,qe),pe=new rm(F,ce,ue,ft),Je=new sm(F,Ge,A),Ye=new Yf($e),Re=new y0(b,w,B,Ie,Ge,qe,Ye),ge=new G0(b,$e),Ae=new S0,Oe=new C0(Ie,Ge),ot=new Wf(b,w,B,Le,pe,f,l),de=new U0(b,pe,Ge),D=new V0(F,ft,Ge,Le),He=new qf(F,Ie,ft,Ge),De=new tm(F,Ie,ft,Ge),ft.programs=Re.programs,b.capabilities=Ge,b.extensions=Ie,b.properties=$e,b.renderLists=Ae,b.shadowMap=de,b.state=Le,b.info=ft}le();const fe=new H0(b,F);this.xr=fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(z,X,!1))},this.getSize=function(S){return S.set(z,X)},this.setSize=function(S,U,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,X=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(z*ne,X*ne).floor()},this.setDrawingBufferSize=function(S,U,W){z=S,X=U,ne=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,U,W,q){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,U,W,q),Le.viewport(T.copy(Z).multiplyScalar(ne).floor())},this.getScissor=function(S){return S.copy(V)},this.setScissor=function(S,U,W,q){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,U,W,q),Le.scissor(N.copy(V).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){Le.setScissorTest(Q=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(S=!0,U=!0,W=!0){let q=0;if(S){let G=!1;if(E!==null){const Te=E.texture.format;G=Te===zc||Te===Oc||Te===Nc}if(G){const Te=E.texture.type,Pe=Te===ei||Te===Kn||Te===xo||Te===bi||Te===Ic||Te===Uc,Fe=ot.getClearColor(),Ve=ot.getClearAlpha(),Qe=Fe.r,je=Fe.g,Ke=Fe.b;Pe?(h[0]=Qe,h[1]=je,h[2]=Ke,h[3]=Ve,F.clearBufferuiv(F.COLOR,0,h)):(g[0]=Qe,g[1]=je,g[2]=Ke,g[3]=Ve,F.clearBufferiv(F.COLOR,0,g))}else q|=F.COLOR_BUFFER_BIT}U&&(q|=F.DEPTH_BUFFER_BIT),W&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Ae.dispose(),Oe.dispose(),$e.dispose(),w.dispose(),B.dispose(),pe.dispose(),qe.dispose(),D.dispose(),Re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",gt),fe.removeEventListener("sessionend",st),me&&(me.dispose(),me=null),Dt.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=ft.autoReset,U=de.enabled,W=de.autoUpdate,q=de.needsUpdate,G=de.type;le(),ft.autoReset=S,de.enabled=U,de.autoUpdate=W,de.needsUpdate=q,de.type=G}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const U=S.target;U.removeEventListener("dispose",oe),Se(U)}function Se(S){Ee(S),$e.remove(S)}function Ee(S){const U=$e.get(S).programs;U!==void 0&&(U.forEach(function(W){Re.releaseProgram(W)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,q,G,Te){U===null&&(U=ze);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Fe=Nd(S,U,W,q,G);Le.setMaterial(q,Pe);let Ve=W.index,Qe=1;if(q.wireframe===!0){if(Ve=ce.getWireframeAttribute(W),Ve===void 0)return;Qe=2}const je=W.drawRange,Ke=W.attributes.position;let Et=je.start*Qe,en=(je.start+je.count)*Qe;Te!==null&&(Et=Math.max(Et,Te.start*Qe),en=Math.min(en,(Te.start+Te.count)*Qe)),Ve!==null?(Et=Math.max(Et,0),en=Math.min(en,Ve.count)):Ke!=null&&(Et=Math.max(Et,0),en=Math.min(en,Ke.count));const It=en-Et;if(It<0||It===1/0)return;qe.setup(G,q,Fe,W,Ve);let En,_t=He;if(Ve!==null&&(En=ue.get(Ve),_t=De,_t.setIndex(En)),G.isMesh)q.wireframe===!0?(Le.setLineWidth(q.wireframeLinewidth*nt()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(G.isLine){let et=q.linewidth;et===void 0&&(et=1),Le.setLineWidth(et*nt()),G.isLineSegments?_t.setMode(F.LINES):G.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else G.isPoints?_t.setMode(F.POINTS):G.isSprite&&_t.setMode(F.TRIANGLES);if(G.isBatchedMesh)_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)_t.renderInstances(Et,It,G.count);else if(W.isInstancedBufferGeometry){const et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ys=Math.min(W.instanceCount,et);_t.renderInstances(Et,It,Ys)}else _t.render(Et,It)};function se(S,U,W){S.transparent===!0&&S.side===kt&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Xa(S,U,W),S.side=ii,S.needsUpdate=!0,Xa(S,U,W),S.side=kt):Xa(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),m=Oe.get(W),m.init(),v.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(b._useLegacyLights);const q=new Set;return S.traverse(function(G){const Te=G.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Fe=Te[Pe];se(Fe,W,G),q.add(Fe)}else se(Te,W,G),q.add(Te)}),v.pop(),m=null,q},this.compileAsync=function(S,U,W=null){const q=this.compile(S,U,W);return new Promise(G=>{function Te(){if(q.forEach(function(Pe){$e.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){G(S);return}setTimeout(Te,10)}Ie.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ye=null;function lt(S){ye&&ye(S)}function gt(){Dt.stop()}function st(){Dt.start()}const Dt=new ed;Dt.setAnimationLoop(lt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(S){ye=S,fe.setAnimationLoop(S),S===null?Dt.stop():Dt.start()},fe.addEventListener("sessionstart",gt),fe.addEventListener("sessionend",st),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,E),m=Oe.get(S,v.length),m.init(),v.push(m),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(he),j=this.localClippingEnabled,te=Ye.init(this.clippingPlanes,j),x=Ae.get(S,u.length),x.init(),u.push(x),Qt(S,U,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Y,J),this.info.render.frame++,te===!0&&Ye.beginShadows();const W=m.state.shadowsArray;if(de.render(W,S,U),te===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(x,S),m.setupLights(b._useLegacyLights),U.isArrayCamera){const q=U.cameras;for(let G=0,Te=q.length;G<Te;G++){const Pe=q[G];$s(x,S,Pe,Pe.viewport)}}else $s(x,S,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(b,S,U),qe.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Qt(S,U,W,q){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||O.intersectsSprite(S)){q&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const Pe=pe.update(S),Fe=S.material;Fe.visible&&x.push(S,Pe,Fe,W,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||O.intersectsObject(S))){const Pe=pe.update(S),Fe=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(Fe)){const Ve=Pe.groups;for(let Qe=0,je=Ve.length;Qe<je;Qe++){const Ke=Ve[Qe],Et=Fe[Ke.materialIndex];Et&&Et.visible&&x.push(S,Pe,Et,W,Ne.z,Ke)}}else Fe.visible&&x.push(S,Pe,Fe,W,Ne.z,null)}}const Te=S.children;for(let Pe=0,Fe=Te.length;Pe<Fe;Pe++)Qt(Te[Pe],U,W,q)}function $s(S,U,W,q){const G=S.opaque,Te=S.transmissive,Pe=S.transparent;m.setupLightsView(W),te===!0&&Ye.setGlobalState(b.clippingPlanes,W),Te.length>0&&Ud(G,Te,U,W),q&&Le.viewport(T.copy(q)),G.length>0&&Wa(G,U,W),Te.length>0&&Wa(Te,U,W),Pe.length>0&&Wa(Pe,U,W),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ud(S,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Te=Ge.isWebGL2;me===null&&(me=new wi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Na:ei,minFilter:Ua,samples:Te?4:0})),b.getDrawingBufferSize(Ce),Te?me.setSize(Ce.x,Ce.y):me.setSize(oo(Ce.x),oo(Ce.y));const Pe=b.getRenderTarget();b.setRenderTarget(me),b.getClearColor(ae),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();const Fe=b.toneMapping;b.toneMapping=Qn,Wa(S,W,q),A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me);let Ve=!1;for(let Qe=0,je=U.length;Qe<je;Qe++){const Ke=U[Qe],Et=Ke.object,en=Ke.geometry,It=Ke.material,En=Ke.group;if(It.side===kt&&Et.layers.test(q.layers)){const _t=It.side;It.side=Vt,It.needsUpdate=!0,zo(Et,W,q,en,It,En),It.side=_t,It.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me)),b.setRenderTarget(Pe),b.setClearColor(ae,P),b.toneMapping=Fe}function Wa(S,U,W){const q=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Te=S.length;G<Te;G++){const Pe=S[G],Fe=Pe.object,Ve=Pe.geometry,Qe=q===null?Pe.material:q,je=Pe.group;Fe.layers.test(W.layers)&&zo(Fe,U,W,Ve,Qe,je)}}function zo(S,U,W,q,G,Te){S.onBeforeRender(b,U,W,q,G,Te),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(b,U,W,q,S,Te),G.transparent===!0&&G.side===kt&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,b.renderBufferDirect(W,U,q,G,S,Te),G.side=ii,G.needsUpdate=!0,b.renderBufferDirect(W,U,q,G,S,Te),G.side=kt):b.renderBufferDirect(W,U,q,G,S,Te),S.onAfterRender(b,U,W,q,G,Te)}function Xa(S,U,W){U.isScene!==!0&&(U=ze);const q=$e.get(S),G=m.state.lights,Te=m.state.shadowsArray,Pe=G.state.version,Fe=Re.getParameters(S,G.state,Te,U,W),Ve=Re.getProgramCacheKey(Fe);let Qe=q.programs;q.environment=S.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(S.isMeshStandardMaterial?B:w).get(S.envMap||q.environment),Qe===void 0&&(S.addEventListener("dispose",oe),Qe=new Map,q.programs=Qe);let je=Qe.get(Ve);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===Pe)return Bo(S,Fe),je}else Fe.uniforms=Re.getUniforms(S),S.onBuild(W,Fe,b),S.onBeforeCompile(Fe,b),je=Re.acquireProgram(Fe,Ve),Qe.set(Ve,je),q.uniforms=Fe.uniforms;const Ke=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ke.clippingPlanes=Ye.uniform),Bo(S,Fe),q.needsLights=zd(S),q.lightsStateVersion=Pe,q.needsLights&&(Ke.ambientLightColor.value=G.state.ambient,Ke.lightProbe.value=G.state.probe,Ke.directionalLights.value=G.state.directional,Ke.directionalLightShadows.value=G.state.directionalShadow,Ke.spotLights.value=G.state.spot,Ke.spotLightShadows.value=G.state.spotShadow,Ke.rectAreaLights.value=G.state.rectArea,Ke.ltc_1.value=G.state.rectAreaLTC1,Ke.ltc_2.value=G.state.rectAreaLTC2,Ke.pointLights.value=G.state.point,Ke.pointLightShadows.value=G.state.pointShadow,Ke.hemisphereLights.value=G.state.hemi,Ke.directionalShadowMap.value=G.state.directionalShadowMap,Ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ke.spotShadowMap.value=G.state.spotShadowMap,Ke.spotLightMatrix.value=G.state.spotLightMatrix,Ke.spotLightMap.value=G.state.spotLightMap,Ke.pointShadowMap.value=G.state.pointShadowMap,Ke.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=je,q.uniformsList=null,je}function Fo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Bo(S,U){const W=$e.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Nd(S,U,W,q,G){U.isScene!==!0&&(U=ze),A.resetTextureUnits();const Te=U.fog,Pe=q.isMeshStandardMaterial?U.environment:null,Fe=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zn,Ve=(q.isMeshStandardMaterial?B:w).get(q.envMap||Pe),Qe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ke=!!W.morphAttributes.position,Et=!!W.morphAttributes.normal,en=!!W.morphAttributes.color;let It=Qn;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(It=b.toneMapping);const En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=En!==void 0?En.length:0,et=$e.get(q),Ys=m.state.lights;if(te===!0&&(j===!0||S!==y)){const an=S===y&&q.id===I;Ye.setState(q,S,an)}let Mt=!1;q.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ys.state.version||et.outputColorSpace!==Fe||G.isBatchedMesh&&et.batching===!1||!G.isBatchedMesh&&et.batching===!0||G.isInstancedMesh&&et.instancing===!1||!G.isInstancedMesh&&et.instancing===!0||G.isSkinnedMesh&&et.skinning===!1||!G.isSkinnedMesh&&et.skinning===!0||G.isInstancedMesh&&et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&et.instancingColor===!1&&G.instanceColor!==null||et.envMap!==Ve||q.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ye.numPlanes||et.numIntersection!==Ye.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==je||et.morphTargets!==Ke||et.morphNormals!==Et||et.morphColors!==en||et.toneMapping!==It||Ge.isWebGL2===!0&&et.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,et.__version=q.version);let li=et.currentProgram;Mt===!0&&(li=Xa(q,U,G));let Ho=!1,pa=!1,js=!1;const Bt=li.getUniforms(),ci=et.uniforms;if(Le.useProgram(li.program)&&(Ho=!0,pa=!0,js=!0),q.id!==I&&(I=q.id,pa=!0),Ho||y!==S){Bt.setValue(F,"projectionMatrix",S.projectionMatrix),Bt.setValue(F,"viewMatrix",S.matrixWorldInverse);const an=Bt.map.cameraPosition;an!==void 0&&an.setValue(F,Ne.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,pa=!0,js=!0)}if(G.isSkinnedMesh){Bt.setOptional(F,G,"bindMatrix"),Bt.setOptional(F,G,"bindMatrixInverse");const an=G.skeleton;an&&(Ge.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Bt.setValue(F,"boneTexture",an.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Bt.setOptional(F,G,"batchingTexture"),Bt.setValue(F,"batchingTexture",G._matricesTexture,A));const Ks=W.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&Ge.isWebGL2===!0)&&Je.update(G,W,li),(pa||et.receiveShadow!==G.receiveShadow)&&(et.receiveShadow=G.receiveShadow,Bt.setValue(F,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ci.envMap.value=Ve,ci.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),pa&&(Bt.setValue(F,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&Od(ci,js),Te&&q.fog===!0&&ge.refreshFogUniforms(ci,Te),ge.refreshMaterialUniforms(ci,q,ne,X,me),Ts.upload(F,Fo(et),ci,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(F,Fo(et),ci,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Bt.setValue(F,"center",G.center),Bt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Bt.setValue(F,"normalMatrix",G.normalMatrix),Bt.setValue(F,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const an=q.uniformsGroups;for(let Js=0,Fd=an.length;Js<Fd;Js++)if(Ge.isWebGL2){const Go=an[Js];D.update(Go,li),D.bind(Go,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Od(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,U,W){$e.get(S.texture).__webglTexture=U,$e.get(S.depthTexture).__webglTexture=W;const q=$e.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const W=$e.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){E=S,L=U,M=W;let q=!0,G=null,Te=!1,Pe=!1;if(S){const Ve=$e.get(S);Ve.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),q=!1):Ve.__webglFramebuffer===void 0?A.setupRenderTarget(S):Ve.__hasExternalTextures&&A.rebindTextures(S,$e.get(S.texture).__webglTexture,$e.get(S.depthTexture).__webglTexture);const Qe=S.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Pe=!0);const je=$e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[U])?G=je[U][W]:G=je[U],Te=!0):Ge.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?G=$e.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[W]:G=je,T.copy(S.viewport),N.copy(S.scissor),H=S.scissorTest}else T.copy(Z).multiplyScalar(ne).floor(),N.copy(V).multiplyScalar(ne).floor(),H=Q;if(Le.bindFramebuffer(F.FRAMEBUFFER,G)&&Ge.drawBuffers&&q&&Le.drawBuffers(S,G),Le.viewport(T),Le.scissor(N),Le.setScissorTest(H),Te){const Ve=$e.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ve.__webglTexture,W)}else if(Pe){const Ve=$e.get(S.texture),Qe=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,W||0,Qe)}I=-1},this.readRenderTargetPixels=function(S,U,W,q,G,Te,Pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Le.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const Ve=S.texture,Qe=Ve.format,je=Ve.type;if(Qe!==gn&&ke.convert(Qe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=je===Na&&(Ie.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(je!==ei&&ke.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Jn&&(Ge.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-q&&W>=0&&W<=S.height-G&&F.readPixels(U,W,q,G,ke.convert(Qe),ke.convert(je),Te)}finally{const Ve=E!==null?$e.get(E).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(S,U,W=0){const q=Math.pow(2,-W),G=Math.floor(U.image.width*q),Te=Math.floor(U.image.height*q);A.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,S.x,S.y,G,Te),Le.unbindTexture()},this.copyTextureToTexture=function(S,U,W,q=0){const G=U.image.width,Te=U.image.height,Pe=ke.convert(W.format),Fe=ke.convert(W.type);A.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,S.x,S.y,G,Te,Pe,Fe,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Pe,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,S.x,S.y,Pe,Fe,U.image),q===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,q,G=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=S.max.x-S.min.x+1,Pe=S.max.y-S.min.y+1,Fe=S.max.z-S.min.z+1,Ve=ke.convert(q.format),Qe=ke.convert(q.type);let je;if(q.isData3DTexture)A.setTexture3D(q,0),je=F.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Ke=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),en=F.getParameter(F.UNPACK_SKIP_PIXELS),It=F.getParameter(F.UNPACK_SKIP_ROWS),En=F.getParameter(F.UNPACK_SKIP_IMAGES),_t=W.isCompressedTexture?W.mipmaps[G]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,S.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(je,G,U.x,U.y,U.z,Te,Pe,Fe,Ve,Qe,_t.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(je,G,U.x,U.y,U.z,Te,Pe,Fe,Ve,_t.data)):F.texSubImage3D(je,G,U.x,U.y,U.z,Te,Pe,Fe,Ve,Qe,_t),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ke),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,en),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,En),G===0&&q.generateMipmaps&&F.generateMipmap(je),Le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){L=0,M=0,E=null,Le.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bo?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?yi:Bc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?Nt:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class W0 extends wo{}W0.prototype.isWebGL1Renderer=!0;class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ha{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class da extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class X0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new k;class Is{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),a=ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),a=ht(a,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Is(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hn extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const xa=new k,Xi=new k,qi=new k,$i=new we,va=new we,ld=new yt,fs=new k,ba=new k,ms=new k,lc=new we,Lr=new we,cc=new we;class si extends Lt{constructor(e=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new X0(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Is(i,3,0,!1)),Wi.setAttribute("uv",new Is(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;gs(fs.set(-.5,-.5,0),qi,r,Xi,a,s),gs(ba.set(.5,-.5,0),qi,r,Xi,a,s),gs(ms.set(.5,.5,0),qi,r,Xi,a,s),lc.set(0,0),Lr.set(1,0),cc.set(1,1);let o=e.ray.intersectTriangle(fs,ba,ms,!1,xa);if(o===null&&(gs(ba.set(-.5,.5,0),qi,r,Xi,a,s),Lr.set(0,1),o=e.ray.intersectTriangle(fs,ms,ba,!1,xa),o===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:on.getInterpolation(xa,fs,ba,ms,lc,Lr,cc,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gs(n,e,t,i,a,s){$i.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(va.x=s*$i.x-a*$i.y,va.y=a*$i.x+s*$i.y):va.copy($i),n.copy(e),n.x+=va.x,n.y+=va.y,n.applyMatrix4(ld)}class ua extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new k,uc=new k,pc=new yt,Cr=new qc,xs=new Os;class Fn extends Lt{constructor(e=new bt,t=new ua){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)dc.fromBufferAttribute(t,a-1),uc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=dc.distanceTo(uc);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(a),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;pc.copy(a).invert(),Cr.copy(e.ray).applyMatrix4(pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=new k,c=new k,p=new k,f=new k,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const u=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=h){const L=g.getX(b),M=g.getX(b+1);if(d.fromBufferAttribute(m,L),c.fromBufferAttribute(m,M),Cr.distanceSqToSegment(d,c,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=h){if(d.fromBufferAttribute(m,b),c.fromBufferAttribute(m,b+1),Cr.distanceSqToSegment(d,c,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Ga extends Zt{constructor(e,t,i,a,s,r,o,l,d){super(e,t,i,a,s,r,o,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,d;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),d=i[a]-r,d<0)o=a+1;else if(d>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const c=i[a],f=i[a+1]-c,h=(r-c)/f;return(a+h)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new we:new k);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new k,a=[],s=[],r=[],o=new k,l=new yt;for(let h=0;h<=e;h++){const g=h/e;a[h]=this.getTangentAt(g,new k)}s[0]=new k,r[0]=new k;let d=Number.MAX_VALUE;const c=Math.abs(a[0].x),p=Math.abs(a[0].y),f=Math.abs(a[0].z);c<=d&&(d=c,i.set(1,0,0)),p<=d&&(d=p,i.set(0,1,0)),f<=d&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(a[h-1],a[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(zt(a[h-1].dot(a[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}r[h].crossVectors(a[h],s[h])}if(t===!0){let h=Math.acos(zt(s[0].dot(s[e]),-1,1));h/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],h*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mo extends Sn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new we,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),d=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,h=d-this.aY;l=f*c-h*p+this.aX,d=f*p+h*c+this.aY}return i.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class q0 extends Mo{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,d){a(r,o,d*(o-s),d*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,d,c,p){let f=(r-s)/d-(o-s)/(d+c)+(o-r)/c,h=(o-r)/c-(l-r)/(c+p)+(l-o)/p;f*=c,h*=c,a(r,o,f,h)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const vs=new k,Rr=new So,Pr=new So,Dr=new So;class cd extends Sn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new k){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let d,c;this.closed||o>0?d=a[(o-1)%s]:(vs.subVectors(a[0],a[1]).add(a[0]),d=vs);const p=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?c=a[(o+2)%s]:(vs.subVectors(a[s-1],a[s-2]).add(a[s-1]),c=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(p),h),x=Math.pow(p.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(c),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Rr.initNonuniformCatmullRom(d.x,p.x,f.x,c.x,g,x,m),Pr.initNonuniformCatmullRom(d.y,p.y,f.y,c.y,g,x,m),Dr.initNonuniformCatmullRom(d.z,p.z,f.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(d.x,p.x,f.x,c.x,this.tension),Pr.initCatmullRom(d.y,p.y,f.y,c.y,this.tension),Dr.initCatmullRom(d.z,p.z,f.z,c.z,this.tension));return i.set(Rr.calc(l),Pr.calc(l),Dr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new k().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hc(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function $0(n,e){const t=1-n;return t*t*e}function Y0(n,e){return 2*(1-n)*n*e}function j0(n,e){return n*n*e}function ka(n,e,t,i){return $0(n,e)+Y0(n,t)+j0(n,i)}function K0(n,e){const t=1-n;return t*t*t*e}function J0(n,e){const t=1-n;return 3*t*t*n*e}function Z0(n,e){return 3*(1-n)*n*n*e}function Q0(n,e){return n*n*n*e}function La(n,e,t,i,a){return K0(n,e)+J0(n,t)+Z0(n,i)+Q0(n,a)}class dd extends Sn{constructor(e=new we,t=new we,i=new we,a=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new we){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eg extends Sn{constructor(e=new k,t=new k,i=new k,a=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new k){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y),La(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ud extends Sn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tg extends Sn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends Sn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ka(e,a.x,s.x,r.x),ka(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ng extends Sn{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(ka(e,a.x,s.x,r.x),ka(e,a.y,s.y,r.y),ka(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],d=a[r],c=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(hc(o,l.x,d.x,c.x,p.x),hc(o,l.y,d.y,c.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new we().fromArray(a))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:cd,CubicBezierCurve:dd,CubicBezierCurve3:eg,EllipseCurve:Mo,LineCurve:ud,LineCurve3:tg,QuadraticBezierCurve:pd,QuadraticBezierCurve3:ng,SplineCurve:hd});class ig extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),d=l===0?0:1-r/l;return o.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let d=0;d<l.length;d++){const c=l[d];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new fc[a.type]().fromJSON(a))}return this}}class ag extends ig{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ud(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new pd(this.currentPoint.clone(),new we(e,t),new we(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new dd(this.currentPoint.clone(),new we(e,t),new we(i,a),new we(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const d=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+d,t+c,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const d=new Mo(e,t,i,a,s,r,o,l);if(this.curves.length>0){const p=d.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(d);const c=d.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Eo extends bt{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=zt(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],d=[],c=1/t,p=new k,f=new we,h=new k,g=new k,x=new k;let m=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,h.x=u*1,h.y=-m,h.z=u*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,h.x=u*1,h.y=-m,h.z=u*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(g)}for(let v=0;v<=t;v++){const b=i+v*c*a,_=Math.sin(b),L=Math.cos(b);for(let M=0;M<=e.length-1;M++){p.x=e[M].x*_,p.y=e[M].y,p.z=e[M].x*L,r.push(p.x,p.y,p.z),f.x=v/t,f.y=M/(e.length-1),o.push(f.x,f.y);const E=l[3*M+0]*_,I=l[3*M+1],y=l[3*M+0]*L;d.push(E,I,y)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const _=b+v*e.length,L=_,M=_+e.length,E=_+e.length+1,I=_+1;s.push(L,M,I),s.push(E,I,M)}this.setIndex(s),this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.points,e.segments,e.phiStart,e.phiLength)}}class To extends Eo{constructor(e=1,t=1,i=4,a=8){const s=new ag;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new To(e.radius,e.length,e.capSegments,e.radialSegments)}}class dn extends bt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],d=new k,c=new we;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const h=i+p/t*a;d.x=e*Math.cos(h),d.y=e*Math.sin(h),r.push(d.x,d.y,d.z),o.push(0,0,1),c.x=(r[f]/e+1)/2,c.y=(r[f+1]/e+1)/2,l.push(c.x,c.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xe extends bt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const d=this;a=Math.floor(a),s=Math.floor(s);const c=[],p=[],f=[],h=[];let g=0;const x=[],m=i/2;let u=0;v(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2));function v(){const _=new k,L=new k;let M=0;const E=(t-e)/i;for(let I=0;I<=s;I++){const y=[],T=I/s,N=T*(t-e)+e;for(let H=0;H<=a;H++){const ae=H/a,P=ae*l+o,z=Math.sin(P),X=Math.cos(P);L.x=N*z,L.y=-T*i+m,L.z=N*X,p.push(L.x,L.y,L.z),_.set(z,E,X).normalize(),f.push(_.x,_.y,_.z),h.push(ae,1-T),y.push(g++)}x.push(y)}for(let I=0;I<a;I++)for(let y=0;y<s;y++){const T=x[y][I],N=x[y+1][I],H=x[y+1][I+1],ae=x[y][I+1];c.push(T,N,ae),c.push(N,H,ae),M+=6}d.addGroup(u,M,0),u+=M}function b(_){const L=g,M=new we,E=new k;let I=0;const y=_===!0?e:t,T=_===!0?1:-1;for(let H=1;H<=a;H++)p.push(0,m*T,0),f.push(0,T,0),h.push(.5,.5),g++;const N=g;for(let H=0;H<=a;H++){const P=H/a*l+o,z=Math.cos(P),X=Math.sin(P);E.x=y*X,E.y=m*T,E.z=y*z,p.push(E.x,E.y,E.z),f.push(0,T,0),M.x=z*.5+.5,M.y=X*.5*T+.5,h.push(M.x,M.y),g++}for(let H=0;H<a;H++){const ae=L+H,P=N+H;_===!0?c.push(P,P+1,ae):c.push(P+1,P,ae),I+=3}d.addGroup(u,I,_===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bn extends xe{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Bn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends bt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],d=[],c=[];let p=e;const f=(t-e)/a,h=new k,g=new we;for(let x=0;x<=a;x++){for(let m=0;m<=i;m++){const u=s+m/i*r;h.x=p*Math.cos(u),h.y=p*Math.sin(u),l.push(h.x,h.y,h.z),d.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,c.push(g.x,g.y)}p+=f}for(let x=0;x<a;x++){const m=x*(i+1);for(let u=0;u<i;u++){const v=u+m,b=v,_=v+i+1,L=v+i+2,M=v+1;o.push(b,_,M),o.push(_,L,M)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class at extends bt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let d=0;const c=[],p=new k,f=new k,h=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const v=[],b=u/i;let _=0;u===0&&r===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const M=L/t;p.x=-e*Math.cos(a+M*s)*Math.sin(r+b*o),p.y=e*Math.cos(r+b*o),p.z=e*Math.sin(a+M*s)*Math.sin(r+b*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(M+_,1-b),v.push(d++)}c.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){const b=c[u][v+1],_=c[u][v],L=c[u+1][v],M=c[u+1][v+1];(u!==0||r>0)&&h.push(b,_,M),(u!==i-1||l<Math.PI)&&h.push(_,L,M)}this.setIndex(h),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vn extends bt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],l=[],d=[],c=new k,p=new k,f=new k;for(let h=0;h<=i;h++)for(let g=0;g<=a;g++){const x=g/a*s,m=h/i*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),o.push(p.x,p.y,p.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),f.subVectors(p,c).normalize(),l.push(f.x,f.y,f.z),d.push(g/a),d.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=a;g++){const x=(a+1)*h+g-1,m=(a+1)*(h-1)+g-1,u=(a+1)*(h-1)+g,v=(a+1)*h+g;r.push(x,m,v),r.push(m,u,v)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ie extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Me extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bs extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class fd extends Bs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ir=new yt,mc=new k,gc=new k;class md{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xc=new yt,_a=new k,Ur=new k;class sg extends md{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Ur.copy(i.position),Ur.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ur),i.updateMatrixWorld(),a.makeTranslation(-_a.x,-_a.y,-_a.z),xc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc)}}class ni extends Bs{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rg extends md{constructor(){super(new td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mn extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs extends Bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const ct=60,Xe=40,Ot=14,Nr=[new k(-16,0,6),new k(0,0,-6),new k(16,0,6)];function og(){const n=new da;n.background=new We(1711918),n.fog=new Ha(1711918,40,90),n.add(new Hs(13691135,.55));const e=[[-18,Ot-.5,8],[-18,Ot-.5,-8],[0,Ot-.5,8],[0,Ot-.5,-8],[18,Ot-.5,8],[18,Ot-.5,-8]];for(const[i,a,s]of e){const r=new ni(15267071,1.2,28);r.position.set(i,a,s),n.add(r)}const t=new Mn(16777215,.5);return t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),n.add(t),{scene:n}}function lg(n){cg(n),dg(n),ug(n)}function cg(n){const e=new ie({color:15263976,roughness:.8,metalness:0}),t=new ie({color:14541804,roughness:.85,metalness:0}),i=new ie({color:16119288,roughness:.9,metalness:0});new ie({color:2764605,roughness:.7,metalness:.1});const a=new C(new wt(ct,Xe),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ua({color:13421772});for(let u=-ct/2;u<=ct/2;u+=3){const v=new bt().setFromPoints([new k(u,.01,-Xe/2),new k(u,.01,Xe/2)]);n.add(new Fn(v,s))}for(let u=-Xe/2;u<=Xe/2;u+=3){const v=new bt().setFromPoints([new k(-ct/2,.01,u),new k(ct/2,.01,u)]);n.add(new Fn(v,s))}const r=new C(new wt(ct,Xe),i);r.rotation.x=Math.PI/2,r.position.y=Ot,n.add(r);const o=[{w:ct,h:Ot,x:0,y:Ot/2,z:-Xe/2,ry:0},{w:ct,h:Ot,x:0,y:Ot/2,z:Xe/2,ry:Math.PI},{w:Xe,h:Ot,x:-ct/2,y:Ot/2,z:0,ry:Math.PI/2},{w:Xe,h:Ot,x:ct/2,y:Ot/2,z:0,ry:-Math.PI/2}];for(const u of o){const v=new C(new wt(u.w,u.h),t);v.position.set(u.x,u.y,u.z),v.rotation.y=u.ry,n.add(v)}const l=new Me({color:11581640}),d=[{w:ct,x:0,z:-Xe/2+.05,ry:0},{w:ct,x:0,z:Xe/2-.05,ry:Math.PI},{w:Xe,x:-ct/2+.05,z:0,ry:Math.PI/2},{w:Xe,x:ct/2-.05,z:0,ry:-Math.PI/2}];for(const u of d){const v=new C(new re(u.w,.5,.1),l);v.position.set(u.x,.25,u.z),v.rotation.y=u.ry,n.add(v)}const c=new Me({color:16777215}),p=new ie({color:15663088,emissive:15663088,emissiveIntensity:.9});for(const[u,,v]of[[-18,0,8],[-18,0,-8],[0,0,8],[0,0,-8],[18,0,8],[18,0,-8]]){const b=new C(new re(6,.25,.8),c);b.position.set(u,Ot-.12,v),n.add(b);const _=new C(new xe(.1,.1,5.6,16),p);_.rotation.z=Math.PI/2,_.position.set(u,Ot-.3,v),n.add(_)}const f=new Me({color:9083568}),h=new Me({color:5929626}),g=new C(new re(3.2,7.2,.15),f);g.position.set(0,3.6,Xe/2-.05),n.add(g);const x=new C(new re(2.8,6.8,.1),h);x.position.set(0,3.4,Xe/2-.04),n.add(x);const m=new Me({color:6993128,transparent:!0,opacity:.35});for(const u of[-14,0,14]){const v=new C(new re(5,4,.15),f);v.position.set(u,8,-Xe/2+.05),n.add(v);const b=new C(new re(4.4,3.4,.08),m);b.position.set(u,8,-Xe/2+.06),n.add(b)}}function dg(n){const e=new ie({color:15791336,roughness:.55,metalness:.05}),t=new ie({color:4871528,roughness:.7,metalness:.05}),i=new ie({color:13687016,roughness:.6,metalness:0}),a=new ie({color:8952234,roughness:.4,metalness:.5}),s=[{x:-16,z:5},{x:0,z:-6},{x:16,z:5}];for(const{x:m,z:u}of s){const v=new C(new re(7,3,3),t);v.position.set(m,1.5,u),v.castShadow=!0,n.add(v);const b=new C(new re(7.2,.15,3.2),e);b.position.set(m,3.08,u),b.castShadow=!0,n.add(b);for(const[_,L]of[[-3.2,-1.3],[3.2,-1.3],[-3.2,1.3],[3.2,1.3]]){const M=new C(new re(.2,3,.2),a);M.position.set(m+_,1.5,u+L),n.add(M)}for(let _=0;_<3;_++){const L=new C(new re(2,.6,.05),i);L.position.set(m-2.2+_*2.2,1.8,u+1.52),n.add(L)}if(m===0){const _=new ie({color:13426158,roughness:.3,metalness:.3}),L=new C(new re(1.2,.2,.9),_);L.position.set(2.5,3.15,u),n.add(L);const M=new C(new xe(.05,.05,.6,16),a);M.position.set(2.5,3.55,u-.3),n.add(M);const E=new C(new at(.09,16,14),a);E.position.set(2.5,3.85,u),n.add(E)}}for(let m=-22;m<=22;m+=11)for(let u=0;u<3;u++){const v=new C(new re(9,.12,1.2),i);v.position.set(m,5+u*2.2,-Xe/2+.8),n.add(v);for(const b of[-4,4]){const _=new C(new re(.1,.5,1),a);_.position.set(m+b,4.75+u*2.2,-Xe/2+.8),n.add(_)}}const r=new C(new re(3,3,22),t);r.position.set(-ct/2+2,1.5,0),r.castShadow=!0,n.add(r);const o=new C(new re(3.2,.15,22.2),e);o.position.set(-ct/2+2,3.08,0),n.add(o);const l=new C(new re(3,3,22),t);l.position.set(ct/2-2,1.5,0),l.castShadow=!0,n.add(l);const d=new C(new re(3.2,.15,22.2),e);d.position.set(ct/2-2,3.08,0),n.add(d);const c=new ie({color:6978186,roughness:.6,metalness:.1}),p=new ie({color:8965341,transparent:!0,opacity:.4,roughness:.1,metalness:0}),f=new C(new re(6,5,2.5),c);f.position.set(-20,4.5,-Xe/2+1.5),n.add(f);const h=new C(new re(5,3,.08),p);h.position.set(-20,4.8,-Xe/2+2.8),n.add(h);const g=new C(new re(6.2,3,2.8),t);g.position.set(-20,1.5,-Xe/2+1.6),n.add(g);const x=new C(new re(6.2,.15,2.8),e);x.position.set(-20,3.08,-Xe/2+1.6),n.add(x)}function ug(n){const e=new ie({color:11197934,transparent:!0,opacity:.7,roughness:.05,metalness:0}),t=new ie({color:4033344,transparent:!0,opacity:.85,roughness:.15,metalness:0}),i=new ie({color:8010768,transparent:!0,opacity:.85,roughness:.2,metalness:0}),a=new ie({color:12597547,transparent:!0,opacity:.85,roughness:.15,metalness:0}),s=new ie({color:16777215,roughness:.7,metalness:0}),r=new ie({color:8952234,roughness:.35,metalness:.6});new ie({color:16774604,roughness:.8});const o=[{x:-24,y:5.3,z:-Xe/2+.7,mat:t,r:.22,h:.7},{x:-22,y:5.3,z:-Xe/2+.7,mat:i,r:.18,h:.9},{x:-20,y:5.3,z:-Xe/2+.7,mat:a,r:.2,h:.75},{x:-18,y:5.3,z:-Xe/2+.7,mat:e,r:.16,h:.65},{x:-13,y:5.3,z:-Xe/2+.7,mat:i,r:.2,h:.85},{x:-11,y:5.3,z:-Xe/2+.7,mat:t,r:.25,h:.6},{x:-2,y:5.3,z:-Xe/2+.7,mat:a,r:.18,h:.8},{x:0,y:5.3,z:-Xe/2+.7,mat:e,r:.22,h:.7},{x:2,y:5.3,z:-Xe/2+.7,mat:t,r:.2,h:.9},{x:10,y:5.3,z:-Xe/2+.7,mat:i,r:.19,h:.7},{x:12,y:5.3,z:-Xe/2+.7,mat:a,r:.21,h:.8},{x:22,y:5.3,z:-Xe/2+.7,mat:e,r:.23,h:.65},{x:24,y:5.3,z:-Xe/2+.7,mat:t,r:.17,h:.9},{x:-23,y:7.5,z:-Xe/2+.7,mat:a,r:.2,h:.8},{x:-21,y:7.5,z:-Xe/2+.7,mat:e,r:.18,h:.7},{x:-1,y:7.5,z:-Xe/2+.7,mat:i,r:.22,h:.85},{x:1,y:7.5,z:-Xe/2+.7,mat:t,r:.2,h:.7},{x:21,y:7.5,z:-Xe/2+.7,mat:a,r:.19,h:.75}];for(const M of o){const E=new C(new xe(M.r,M.r*.9,M.h,20),M.mat);E.position.set(M.x,M.y+M.h/2,M.z),n.add(E);const I=new C(new xe(M.r*.7,M.r*.7,.12,20),s);I.position.set(M.x,M.y+M.h+.06,M.z),n.add(I)}pg(n,-ct/2+2.5,3.2,-6,r,s),hg(n,-ct/2+2.5,3.2,4,r,s),fg(n,ct/2-2.5,3.2,-5,r);for(let M=0;M<4;M++){const E=M%2===0?i:e,I=new C(new xe(.22,.2,.5,20),E);I.position.set(ct/2-2.5+(M-1.5)*.7,3.5,5+M%2*.6),n.add(I)}const l=new Me({color:16769154}),d=new C(new re(3.5,5,.06),l);d.position.set(ct/2-.06,6,10),d.rotation.y=-Math.PI/2,n.add(d);const c=Pn(`⚠ KESELAMATAN
LABORATORIUM`,15022389);c.scale.set(4,1.6,1),c.position.set(ct/2-.3,6.5,10),n.add(c);const p=new C(new xe(.06,.06,1.5,16),r);p.position.set(-ct/2+.2,9,14),p.rotation.z=Math.PI/2,n.add(p);for(const M of[-.5,0,.5]){const E=new C(new vn(.14,.03,12,24,Math.PI),r);E.position.set(-ct/2+.25,8.6,14+M),E.rotation.y=Math.PI/2,n.add(E)}const f=new Me({color:16448250}),h=new C(new re(.05,2.5,1.5),f);h.position.set(-ct/2+.28,7.8,14),n.add(h);const g=new Me({color:15158332}),x=new Me({color:15965202});for(const[M,E,I]of[[-8,14,g],[8,14,x]]){const y=new C(new xe(.45,.38,1,20),I);y.position.set(M,.5,E),n.add(y)}const m=new Me({color:12597547}),u=new C(new xe(.2,.22,1.1,20),m);u.position.set(ct/2-.8,1.8,-14),n.add(u);const v=new C(new xe(.1,.2,.3,20),r);v.position.set(ct/2-.8,2.5,-14),n.add(v);const b=new Me({color:16777215}),_=new C(new xe(.7,.7,.1,24),b);_.rotation.x=Math.PI/2,_.position.set(8,10.5,-Xe/2+.1),n.add(_);const L=new C(new vn(.7,.06,12,40),r);L.rotation.x=Math.PI/2,L.position.set(8,10.5,-Xe/2+.12),n.add(L)}function pg(n,e,t,i,a,s){const r=new C(new xe(.65,.7,.7,24),s);r.position.set(e,t+.35,i),n.add(r);const o=new C(new xe(.66,.66,.12,24),a);o.position.set(e,t+.76,i),n.add(o);const l=new C(new at(.1,16,14),a);l.position.set(e,t+.88,i),n.add(l)}function hg(n,e,t,i,a,s){const r=new C(new re(.7,.12,.55),a);r.position.set(e,t+.06,i),n.add(r);const o=new C(new re(.12,1.4,.12),a);o.position.set(e,t+.76,i-.1),n.add(o);const l=new C(new xe(.1,.12,.5,16),a);l.position.set(e,t+1.7,i-.15),l.rotation.z=.4,n.add(l);const d=new C(new xe(.06,.08,.35,16),s);d.position.set(e+.05,t+.75,i+.05),n.add(d)}function fg(n,e,t,i,a){const s=new ie({color:2899536,roughness:.6,metalness:.15}),r=new C(new re(1,.18,1),s);r.position.set(e,t+.09,i),n.add(r);const o=new C(new xe(.38,.38,.04,20),a);o.position.set(e,t+.2,i),n.add(o);const l=new ie({color:16737792,emissive:16737792,emissiveIntensity:.6,transparent:!0,opacity:.7}),d=new C(new dn(.3,20),l);d.rotation.x=-Math.PI/2,d.position.set(e,t+.22,i),n.add(d);const c=new Me({color:11197934,transparent:!0,opacity:.8}),p=new C(new at(.3,20,16),c);p.position.set(e,t+.55,i),n.add(p);const f=new C(new xe(.08,.12,.35,20),c);f.position.set(e,t+.9,i),n.add(f)}function xd(n){const e=[];{const t=Nr[0],i=new jt;i.position.copy(t);const a=new Me({color:11197934,transparent:!0,opacity:.75}),s=new Me({color:7027216,transparent:!0,opacity:.9}),r=new Me({color:8952234}),o=new Me({color:16448250}),l=new Me({color:15791336}),d=new C(new re(6.8,.12,2.8),l);d.position.set(0,3.14,0),i.add(d);const c=new Me({color:14540253}),p=new C(new re(2,.18,.45),c);p.position.set(-1.5,3.3,.2),i.add(p);for(let y=0;y<5;y++){const T=new C(new xe(.07,.07,.55,16),s);T.position.set(-2.2+y*.42,3.62,.2),i.add(T)}const f=new C(new at(.38,20,16),a);f.position.set(.8,3.62,-.3),i.add(f);const h=new C(new xe(.1,.15,.45,20),a);h.position.set(.8,4.05,-.3),i.add(h);const g=new C(new at(.32,18,16),s);g.position.set(.8,3.58,-.3),i.add(g);const x=new C(new xe(.04,.04,1,16),r);x.position.set(.8,4.2,-.3),i.add(x);const m=new C(new re(.5,.35,.15),o);m.position.set(.8,4.85,-.3),i.add(m);const u=new Me({color:16775399}),v=new C(new re(.7,.9,.05),u);v.position.set(2.3,3.85,-.5),v.rotation.y=-.3,i.add(v);const b=new Me({color:8952234}),_=new C(new re(.35,.12,.06),b);_.position.set(2.3,4.34,-.46),_.rotation.y=-.3,i.add(_);const L=Pn("❓ Fenomena 1 — Kualitas Air",54527);L.position.set(0,3.2,0),i.add(L);const M=Pn("✅ Selesai",3066993);M.position.set(0,4.2,0),M.visible=!1,i.add(M);const E=new ie({color:54527,emissive:54527,emissiveIntensity:.5,transparent:!0,opacity:.25,side:kt}),I=new C(new dn(3.2,32),E);I.rotation.x=-Math.PI/2,I.position.y=.02,i.add(I),n.add(i),e.push({group:i,glowMat:E,idx:0,pos:t,done:!1,doneSprite:M,_probe:x,_meter:m})}{const t=Nr[1],i=new jt;i.position.copy(t);const a=new Me({color:11197934,transparent:!0,opacity:.7}),s=new Me({color:5910024,transparent:!0,opacity:.9});new Me({color:1735226,transparent:!0,opacity:.85});const r=new Me({color:8952234}),o=new Me({color:16448250});new Me({color:15965202});const l=new C(new re(6.8,.12,2.8),new Me({color:15791336}));l.position.set(0,3.14,0),i.add(l);const d=new C(new re(.22,.9,.14),o);d.position.set(-2,3.75,0),i.add(d);const c=new C(new re(.16,.3,.05),new Me({color:1714714}));c.position.set(-2,3.88,.1),i.add(c);const p=new C(new xe(.03,.03,.5,16),r);p.position.set(-2,3.05,0),i.add(p);const f=new C(new xe(.42,.38,.8,20),a);f.position.set(-.5,3.7,.2),i.add(f);const h=new C(new xe(.38,.34,.6,20),s);h.position.set(-.5,3.6,.2),i.add(h),new Me({color:2899536});const g=new C(new xe(.05,.05,1.4,14),r);g.position.set(1.2,3.9,-.7),i.add(g);const x=new C(new re(1.4,1,.05),new Me({color:16775399}));x.position.set(1.2,4.85,-.7),i.add(x);const m=Pn("K⁺  Ca²⁺  Cl⁻",1735226);m.scale.set(2.8,.75,1),m.position.set(1.2,4.92,-.6),i.add(m);const u=new C(new re(.55,.4,.22),o);u.position.set(2.2,3.4,0),i.add(u);const v=new C(new re(.38,.22,.06),new Me({color:662026}));v.position.set(2.2,3.44,.14),i.add(v);for(const[E,I]of[[2.8,s],[3.3,a]]){const y=new C(new xe(.18,.16,.7,20),I);y.position.set(E,3.55,-.5),i.add(y)}const b=Pn("❓ Fenomena 2 — Komposisi TDS",16750848);b.position.set(0,3.2,0),i.add(b);const _=Pn("✅ Selesai",3066993);_.position.set(0,4.2,0),_.visible=!1,i.add(_);const L=new ie({color:16750848,emissive:16750848,emissiveIntensity:.5,transparent:!0,opacity:.25,side:kt}),M=new C(new dn(3.2,32),L);M.rotation.x=-Math.PI/2,M.position.y=.02,i.add(M),n.add(i),e.push({group:i,glowMat:L,idx:1,pos:t,done:!1,doneSprite:_,_beaker:f,_liq:h})}{const t=Nr[2],i=new jt;i.position.copy(t);const a=new Me({color:8018990}),s=new Me({color:5025616}),r=new Me({color:11059264}),o=new Me({color:11887901}),l=new Me({color:11197934,transparent:!0,opacity:.7}),d=new Me({color:16448250}),c=new Me({color:8952234}),p=new C(new re(6.8,.12,2.8),new Me({color:15791336}));p.position.set(0,3.14,0),i.add(p);const f=[{x:-2,mat:s,height:.9,label:`Thn 1
62%`,lColor:5025616},{x:0,mat:r,height:1.1,label:`Thn 2
78%`,lColor:11059264},{x:2,mat:o,height:.35,label:`Thn 3
34%`,lColor:15158332}];for(const N of f){const H=new C(new re(1.2,.2,.9),a);H.position.set(N.x,3.35,.2),i.add(H);for(let P=-1;P<=1;P+=2){const z=new C(new xe(.04,.055,N.height,5),N.mat),X=N.x+P*.22;z.position.set(X,3.45+N.height/2,.2),i.add(z);const ne=new C(new at(N.height>.8?.14:.06,12,8),N.mat);ne.position.set(X+(N.mat===o?.1:0),3.45+N.height+.08,.2),i.add(ne)}const ae=Pn(N.label,N.lColor);ae.scale.set(2,.75,1),ae.position.set(N.x,3.45+N.height+.6,.2),i.add(ae)}const h=new C(new re(.22,.75,.14),d);h.position.set(-2.9,3.65,-.4),i.add(h);const g=new C(new xe(.025,.025,.55,16),c);g.position.set(-2.9,3.12,-.4),i.add(g);const x=new C(new re(.15,.22,.05),new Me({color:662026}));x.position.set(-2.9,3.72,-.33),i.add(x);const m=new Me({color:8018990,transparent:!0,opacity:.9}),u=new C(new xe(.28,.25,.6,20),l);u.position.set(2.8,3.55,-.4),i.add(u);const v=new C(new xe(.24,.22,.38,20),m);v.position.set(2.8,3.44,-.4),i.add(v);const b=new Me({color:16775399}),_=new C(new re(.8,1,.05),b);_.position.set(3.2,3.95,-.6),_.rotation.y=-.25,i.add(_);const L=[5025616,11059264,15158332],M=[.22,.3,.1];for(let N=0;N<3;N++){const H=new Me({color:L[N]}),ae=new C(new re(.12,M[N],.04),H);ae.position.set(3.05+N*.2,3.5+M[N]/2,-.57),ae.rotation.y=-.25,i.add(ae)}const E=Pn("❓ Fenomena 3 — Panen Padi",4521864);E.position.set(0,3.2,0),i.add(E);const I=Pn("✅ Selesai",3066993);I.position.set(0,4.4,0),I.visible=!1,i.add(I);const y=new ie({color:4521864,emissive:4521864,emissiveIntensity:.5,transparent:!0,opacity:.25,side:kt}),T=new C(new dn(3.2,32),y);T.rotation.x=-Math.PI/2,T.position.y=.02,i.add(T),n.add(i),e.push({group:i,glowMat:y,idx:2,pos:t,done:!1,doneSprite:I,_stems:i.children})}return e}function Pn(n,e){const t=document.createElement("canvas");t.width=320,t.height=72;const i=t.getContext("2d");i.fillStyle="rgba(10,20,40,0.85)",i.beginPath(),i.roundRect(4,8,312,56,16),i.fill();const a=e>>16&255,s=e>>8&255,r=e&255;i.strokeStyle=`rgb(${a},${s},${r})`,i.lineWidth=3,i.beginPath(),i.roundRect(4,8,312,56,16),i.stroke(),i.fillStyle=`rgb(${a},${s},${r})`,i.font="bold 24px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,160,36);const o=new Ga(t),l=new Hn({map:o,transparent:!0}),d=new si(l);return d.scale.set(5,1.1,1),d}function mg(n,e){for(const t of n){if(t.done){t.glowMat.emissiveIntensity=.15+Math.sin(e*1.2)*.05,t.glowMat.opacity=.12;continue}const i=.5+.5*Math.sin(e*2.2+t.idx*1.3);if(t.glowMat.emissiveIntensity=.3+i*.5,t.glowMat.opacity=.15+i*.15,t.idx===0&&(t._probe&&(t._probe.position.y=4.2+Math.sin(e*1.4)*.12),t._meter&&(t._meter.position.y=4.85+Math.sin(e*1.4)*.12)),t.idx===1&&t._liq){const a=1+Math.sin(e*2.5)*.04;t._liq.scale.set(1,a,1)}t.idx===2&&(t.group.rotation.z=Math.sin(e*.6)*.008),t.group.position.y=Math.sin(e*.5+t.idx)*.04}}const Tt=70,qt=50,rt=18;new k(-18,0,10),new k(0,0,-8),new k(18,0,10);function gg(){const n=new da;n.background=new We(1708552),n.fog=new Ha(1708552,35,85),n.add(new Hs(16771248,.4));const e=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];for(const[s,r,o]of e){const l=new ni(16765056,1.1,30);l.position.set(s,r,o),n.add(l)}const t=new ni(16737792,1.5,18);t.position.set(-18,6,8),n.add(t);const i=new ni(8956671,.8,14);i.position.set(0,6,-6),n.add(i);const a=new Mn(16773324,.4);return a.position.set(10,20,10),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a),{scene:n}}function xg(n){vg(n),_g(n),Sg(n)}function vg(n){const e=new ie({color:5919299,roughness:.9,metalness:0}),t=new ie({color:4866096,roughness:.85,metalness:0}),i=new ie({color:3024410,roughness:.9,metalness:0}),a=new C(new wt(Tt,qt),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ua({color:3813920});for(let g=-Tt/2;g<=Tt/2;g+=5){const x=new bt().setFromPoints([new k(g,.01,-qt/2),new k(g,.01,qt/2)]);n.add(new Fn(x,s))}for(let g=-qt/2;g<=qt/2;g+=5){const x=new bt().setFromPoints([new k(-Tt/2,.01,g),new k(Tt/2,.01,g)]);n.add(new Fn(x,s))}const r=new C(new wt(Tt,qt),i);r.rotation.x=Math.PI/2,r.position.y=rt,n.add(r);const o=new Me({color:1971728});for(let g=-Tt/2;g<=Tt/2;g+=4){const x=new C(new re(.4,.15,qt),o);x.position.set(g,rt,0),n.add(x)}const l=.6,d=[{pos:[0,rt/2,-qt/2],size:[Tt,rt,l]},{pos:[0,rt/2,qt/2],size:[Tt,rt,l]},{pos:[-Tt/2,rt/2,0],size:[l,rt,qt]},{pos:[Tt/2,rt/2,0],size:[l,rt,qt]}];for(const g of d){const x=new C(new re(...g.size),t);x.position.set(...g.pos),n.add(x)}const c=new Me({color:3813408}),p=[[-Tt/2+1,rt/2,-qt/2+1],[Tt/2-1,rt/2,-qt/2+1],[-Tt/2+1,rt/2,qt/2-1],[Tt/2-1,rt/2,qt/2-1],[-Tt/2+1,rt/2,0],[Tt/2-1,rt/2,0]];for(const[g,x,m]of p){const u=new C(new re(1.2,rt,1.2),c);u.position.set(g,x,m),n.add(u)}const f=new Me({color:8947848}),h=new ie({color:16774592,emissive:16765024,emissiveIntensity:1.2});for(const[g,,x]of bg){const m=new C(new re(1.5,.4,.6),f);m.position.set(g,rt-.8,x),n.add(m);const u=new C(new at(.25,16,10),h);u.position.set(g,rt-1.1,x),n.add(u)}}const bg=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];function _g(n){yg(n,-18,0,6),wg(n,0,0,-12),Mg(n,18,0,6)}function yg(n,e,t,i){const a=new jt;a.position.set(e,t,i);const s=new Me({color:3944480}),r=new C(new re(5,.4,5),s);r.position.y=.2,a.add(r);const o=new ie({color:7372944,metalness:.7,roughness:.3}),l=new C(new xe(2,2,5.5,24),o);l.position.y=3.15,a.add(l);const d=new C(new at(2,24,14,0,Math.PI*2,0,Math.PI/2),o);d.position.y=5.9,a.add(d);const c=new C(new at(2,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),o);c.position.y=.4,a.add(c);const p=new Me({color:9474208});for(let L=1.5;L<=5.5;L+=1.5){const M=new C(new vn(2.06,.09,10,40),p);M.rotation.x=Math.PI/2,M.position.y=L+.5,a.add(M)}const f=new ie({color:6719658,metalness:.6,roughness:.4}),h=new C(new xe(.12,.12,2,16),f);h.position.set(.8,7.2,0),a.add(h);const g=new C(new xe(.15,.15,1.8,16),f);g.rotation.z=Math.PI/2,g.position.set(-2.8,1.2,0),a.add(g);const x=new C(new at(.18,16,14),f);x.position.set(-3.7,1.2,0),a.add(x);const m=new C(new xe(.15,.15,1.2,16),f);m.position.set(-3.7,.6,0),a.add(m);const u=new ie({color:13378082,metalness:.5,roughness:.5}),v=new C(new xe(.22,.22,.5,16),u);v.rotation.z=Math.PI/2,v.position.set(-2.85,2.5,0),a.add(v);const b=new C(new xe(.1,.1,2.5,16),f);b.position.set(-.5,8,0),a.add(b);const _=new ie({color:8965375,transparent:!0,opacity:.35,roughness:.2,metalness:0});for(let L=0;L<5;L++){const M=new C(new at(.12+L*.04,12,10),_);M.position.set(-.5,8.8+L*.28,0),M.userData.bubbleIndex=L,a.add(M)}return ko(a,`FERMENTOR
DRUM`,0,9.5,0,16752704),n.add(a),a}function wg(n,e,t,i){const a=new jt;a.position.set(e,t,i);const s=new ie({color:11189196,metalness:.8,roughness:.25}),r=new ie({color:5596791,metalness:.7,roughness:.35}),o=new ie({color:8952234,metalness:.6,roughness:.4}),l=new C(new re(4,.4,4),r);l.position.y=.2,a.add(l);const d=new C(new xe(.8,1,8,24),s);d.position.y=4.4,a.add(d);for(let E=1.5;E<=7.5;E+=1.2){const I=new C(new xe(.95,.95,.12,24),r);I.position.y=E,a.add(I)}const c=new C(new xe(.7,.7,1.5,20),r);c.position.y=9.2,a.add(c);const p=new ie({color:8956620,metalness:.8,roughness:.2});for(let E=0;E<4;E++){const I=new C(new vn(.5,.06,12,36),p);I.rotation.x=Math.PI/2,I.position.y=9.1+E*.28,a.add(I)}const f=new C(new at(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);f.position.y=10.2,a.add(f);const h=new C(new xe(.12,.12,2.5,16),o);h.rotation.z=Math.PI/2,h.position.set(-1.85,6.5,0),a.add(h);const g=new C(new xe(.1,.1,1.5,16),o);g.position.set(.5,11,0),a.add(g);const x=new C(new xe(.13,.13,2,16),o);x.rotation.z=Math.PI/2,x.position.set(1.8,9.6,0),a.add(x);const m=new C(new xe(.16,.16,1.4,16),o);m.position.set(.8,.3,0),a.add(m);const u=new ie({color:8016432,metalness:.3,roughness:.7}),v=new C(new xe(.65,.6,1.2,20),u);v.position.set(.8,-.2,0),a.add(v);const b=new C(new xe(.66,.66,.08,20),r);b.position.set(.8,.42,0),a.add(b);const _=new ie({color:11197951,transparent:!0,opacity:.5}),L=new C(new xe(.07,.07,4,16),_);L.position.set(-.92,3,.7),a.add(L);const M=new C(new xe(.06,.06,2.5,16),new ie({color:6332608,transparent:!0,opacity:.7}));return M.position.set(-.92,2.25,.7),a.add(M),ko(a,`DESTILATOR
KOLOM`,0,11.5,0,8441087),n.add(a),a}function Mg(n,e,t,i){const a=new jt;a.position.set(e,t,i);const s=new ie({color:4473924,metalness:.6,roughness:.5}),r=new Me({color:9127187}),o=new ie({color:16737792,emissive:16724736,emissiveIntensity:.9}),l=new ie({color:7368816,metalness:.8,roughness:.3}),d=new C(new re(3.5,2,3),r);d.position.y=1,a.add(d);const c=new C(new re(3.5,.15,3),s);c.position.y=2.08,a.add(c);for(let E=-1.4;E<=1.4;E+=.5){const I=new C(new re(.1,.16,2.5),new Me({color:2236962}));I.position.set(E,2.08,0),a.add(I)}const p=new C(new Bn(.5,1.2,14),o);p.position.y=2.9,a.add(p);const f=new C(new Bn(.3,.9,14),o.clone());f.position.set(.6,2.85,.4),a.add(f);const h=new C(new xe(1.2,1,1.4,24),l);h.position.y=3.75,a.add(h);const g=new ie({color:8145424,transparent:!0,opacity:.85}),x=new C(new xe(1.18,1.18,.8,24),g);x.position.y=3.85,a.add(x);const m=new ie({color:14540253,transparent:!0,opacity:.25});for(let E=0;E<3;E++){const I=new C(new at(.25+E*.12,12,10),m);I.position.set((E-1)*.4,5+E*.5,(E-1)*.3),I.userData.steamIndex=E,a.add(I)}const u=new ie({color:13421772,metalness:.5}),v=new C(new xe(.22,.22,.08,20),u);v.rotation.x=Math.PI/2,v.position.set(1.5,3.2,-1.4),a.add(v);const b=new C(new dn(.2,12),new ie({color:16777215}));b.rotation.x=-Math.PI/2,b.position.set(1.5,3.21,-1.62),a.add(b);const _=new Me({color:3355443}),L=new C(new xe(.25,.3,3,20),_);L.position.set(-1.2,3.5,-1.2),a.add(L);const M=new ie({color:8947848,transparent:!0,opacity:.2});for(let E=0;E<4;E++){const I=new C(new at(.18+E*.1,12,10),M);I.position.set(-1.2,5+E*.6,-1.2),I.userData.smokeIndex=E,a.add(I)}return ko(a,`KOMPOR
PEMANAS`,0,7.5,0,16746564),n.add(a),a}function Sg(n){const e=new ie({color:5910544,metalness:.2,roughness:.8}),t=new ie({color:8947848,metalness:.6,roughness:.4}),i=[[-28,0,-16],[-28,0,-12],[-28,0,-8],[-24,0,-16],[-24,0,-12],[-24,0,-8]];for(const[c,,p]of i){const f=new C(new xe(.7,.65,1.5,20),e);f.position.set(c,.75,p),n.add(f);const h=new C(new vn(.72,.05,10,28),t);h.rotation.x=Math.PI/2,h.position.set(c,1.2,p),n.add(h);const g=h.clone();g.position.set(c,.4,p),n.add(g)}As(n,`MOLASSES
STORAGE`,-26,3.2,-12,16755234,1.8);const a=new Me({color:5275840}),s=[[28,0,-18],[28,0,-15],[28,0,-12]];for(const[c,,p]of s){const f=new C(new re(.8,.5,1.2),a);f.position.set(c,.25,p),n.add(f);const h=new C(new re(.8,.5,1.2),a);h.position.set(c+.9,.25,p),n.add(h)}As(n,"NPK / UREA",29,2.8,-15,8956671,1.6);const r=new ie({color:13412928,metalness:.5});for(let c=0;c<3;c++){const p=new C(new xe(.3,.3,.9,20),r);p.position.set(28,.45,-6+c*1.2),n.add(p)}As(n,`RAGI
(YEAST)`,29,2.4,-5,16768384,1.5),zr(n,-Tt/2+.8,5,-10,`⚠️ BAHAYA
GAS BERTEKANAN`),zr(n,-Tt/2+.8,5,10,`🔥 AREA
PANAS`),zr(n,Tt/2-.8,5,-10,`☣️ LIMBAH
VINASSE`),Or(n,-18,.05,5,0),Or(n,-9,.05,3,-Math.PI/4),Or(n,9,.05,3,Math.PI/4),Eg(n);const o=new ie({color:5583633}),l=new C(new re(2.5,.15,2.5),o);l.position.set(0,.08,-12),n.add(l);const d=new C(new re(2.3,.08,2.3),new ie({color:3807232,transparent:!0,opacity:.9}));d.position.set(0,.12,-12),n.add(d)}function Eg(n){const e=new ie({color:10066346,metalness:.6,roughness:.4}),t=new C(new xe(.14,.14,22,16),e);t.rotation.z=Math.PI/2,t.position.set(-9,11,0),n.add(t);const i=new C(new xe(.14,.14,5,16),e);i.position.set(0,8.5,-12),n.add(i);const a=new C(new xe(.14,.14,20,16),e);a.rotation.z=Math.PI/2,a.position.set(9,11,0),n.add(a);for(const[s,r]of[[-18,6],[0,-12],[18,6]]){const o=new C(new xe(.14,.14,3,16),e);o.position.set(s,9.5,r),n.add(o)}}function Or(n,e,t,i,a){const s=new Me({color:16755200}),r=new C(new re(.3,.05,5),s);r.position.set(e,t,i),r.rotation.y=a,n.add(r);const o=new C(new Bn(.5,.9,4),s);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(e+Math.sin(a)*3,t,i+Math.cos(a)*-3),n.add(o)}function zr(n,e,t,i,a){const s=new Me({color:16763904}),r=new C(new re(1.8,1.2,.06),s);r.position.set(e,t,i),e<0?r.rotation.y=Math.PI/2:r.rotation.y=-Math.PI/2,n.add(r),As(n,a,e,t,i,2236962,1.2,r.rotation.y)}function ko(n,e,t,i,a,s=16777215){const r=e.split(`
`),o=document.createElement("canvas");o.width=256,o.height=64*r.length;const l=o.getContext("2d");l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o.width,o.height);const d="#"+s.toString(16).padStart(6,"0");l.fillStyle=d,l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",r.forEach((h,g)=>{l.fillText(h,128,32+g*64)});const c=new Ga(o),p=new Hn({map:c,depthTest:!1}),f=new si(p);f.scale.set(3.5,1*r.length,1),f.position.set(t,i,a),n.add(f)}function As(n,e,t,i,a,s=16777215,r=2,o=0){const l=e.split(`
`),d=document.createElement("canvas");d.width=256,d.height=64*l.length;const c=d.getContext("2d");c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,d.width,d.height);const p="#"+s.toString(16).padStart(6,"0");c.fillStyle=p,c.font="bold 28px sans-serif",c.textAlign="center",c.textBaseline="middle",l.forEach((x,m)=>c.fillText(x,128,32+m*64));const f=new Ga(d),h=new Hn({map:f,depthTest:!1}),g=new si(h);g.scale.set(r*l.length*.7+1,r*.7*l.length*.5+.5,1),g.position.set(t,i,a),n.add(g)}const vd=60,bd=50,_n=new k(0,0,-10);function Tg(){const n=new da;n.background=new We(8900331),n.fog=new Ba(11589872,.008),n.add(new fd(10409208,8034896,1.1));const e=new Mn(16774604,2.4);e.position.set(25,40,20),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.5,e.shadow.camera.far=140,e.shadow.camera.left=-44,e.shadow.camera.right=44,e.shadow.camera.top=44,e.shadow.camera.bottom=-44,n.add(e);const t=new Mn(12114175,.6);t.position.set(-20,18,-15),n.add(t);const i=new ni(16769168,.8,35);i.position.set(0,5,0),n.add(i);const a=new ni(16772761,1,18);return a.position.set(_n.x,8,_n.z),n.add(a),{scene:n}}function Ag(n){kg(n),Lg(n),Cg(n),Rg(n),Pg(n),Dg(n),Ug(n)}function kg(n){const e=new Me({color:1849872});new Me({color:2760202});const t=new C(new wt(vd*2,bd*2),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new Me({color:4864032}),a=new C(new wt(3,22),i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),n.add(a)}function Lg(n){const e=new Me({color:8017200}),t=new ua({color:4874304}),i=vd/2,a=bd/2,s=[[-i,-a],[i,-a],[i,a],[-i,a],[-i,-a]],r=s.map(([l,d])=>new k(l,1.2,d)),o=new bt().setFromPoints(r);n.add(new Fn(o,t));for(let l=0;l<4;l++){const[d,c]=s[l],[p,f]=s[l+1],h=Math.ceil(Math.sqrt((p-d)**2+(f-c)**2)/8);for(let g=0;g<=h;g++){const x=g/h,m=new C(new xe(.1,.1,2.4,5),e);m.position.set(d+(p-d)*x,1.2,c+(f-c)*x),n.add(m)}}}function Cg(n){const e=new Me({color:3815472}),t=new Me({color:2762776}),i=new Me({color:1574912,transparent:!0,opacity:.92}),a=new Me({color:667664,transparent:!0,opacity:.85}),s=.6,r=22,o=16,l=1.5,d=new C(new re(r+s*2,l,s),e);d.position.set(0,l/2,-8),n.add(d);const c=d.clone();c.position.set(0,l/2,o/2),n.add(c);const p=new C(new re(s,l,o),e);p.position.set(r/2,l/2,0),n.add(p);const f=p.clone();f.position.set(-r/2,l/2,0),n.add(f);const h=new C(new wt(r,o),t);h.rotation.x=-Math.PI/2,h.position.y=.01,n.add(h);const g=new C(new wt(r-s*2,o-s*2),i);g.rotation.x=-Math.PI/2,g.position.y=.8,n.add(g);const x=new C(new re(s,l,o),e);x.position.set(4,l/2,0),n.add(x);const m=new C(new wt(r/2-4-s*1.5,o-s*2),a);m.rotation.x=-Math.PI/2,m.position.set(r/2-(r/4-2+s*.5)-1.5,.8,0),n.add(m),_d(n,`REAKTOR
BIOREMEDIASI`,0,2.5,-o/2-1.2,4259712)}function Rg(n){const e=new Me({color:5271648}),t=new Me({color:3162160}),i=new C(new xe(.22,.22,14,20),e);i.rotation.x=Math.PI/2,i.position.set(-1.2,1.8,-3),n.add(i);const a=new C(new re(.5,.5,.5),e);a.position.set(-1.2,1.8,-8),n.add(a);const s=new C(new xe(.22,.22,2,20),e);s.position.set(-1.2,.8,-8.2),n.add(s);for(const r of[-2,-5,-8]){const o=new C(new re(.3,.6,.15),t);o.position.set(-.7,2.1,r),n.add(o)}}function Pg(n){const e=new Me({color:9056272}),t=new Me({color:13388320}),i=new Me({color:3160112}),a=_n.x,s=_n.z,r=new C(new xe(.15,.2,3.5,16),i);r.position.set(a,1.75,s),n.add(r);const o=new C(new re(1,.8,1.2),e);o.position.set(a,3.5,s),n.add(o);const l=new C(new vn(.55,.1,12,32),t);l.position.set(a,3.5,s-.7),l.rotation.x=Math.PI/2,n.add(l);for(let d=0;d<4;d++){const c=new C(new xe(.05,.05,1,14),t);c.rotation.z=d/4*Math.PI,c.position.set(a,3.5,s-.7),n.add(c)}_d(n,`KRAN
VINASSE`,a,5.5,s,16752736)}function Dg(n){const e=new Me({color:1728544}),t=new Me({color:2785344,transparent:!0,opacity:.8}),i=[[-7,-4],[-8,0],[-7,3],[-9,-2]];for(const[r,o]of i){const l=new C(new wt(2+Math.random()*1.5,1.2+Math.random()),t);l.rotation.x=-Math.PI/2,l.position.set(r,.85,o),n.add(l)}const a=[[-24,-18],[-20,18],[22,-14],[26,8],[-28,4],[16,20],[-12,-20],[18,-20]];for(const[r,o]of a)Ig(n,r,o,e);const s=new Me({color:9089088});for(let r=-3;r<=3;r++){const o=new C(new xe(.07,.09,3.5+Math.random(),6),s);o.position.set(-28+r*.4,1.75,-22+Math.random()*2),n.add(o)}}function Ig(n,e,t,i){const a=.6+Math.random()*.5,s=new C(new Bn(.6+Math.random()*.3,a,6),i);s.position.set(e,a/2,t),n.add(s)}function Ug(n){const e=new St({color:6993128,side:Vt}),t=new C(new at(120,20,14),e);n.add(t);const i=new St({color:16776672,side:kt}),a=new C(new dn(8,24),i);a.position.set(30,22,-88),a.lookAt(0,14,0),n.add(a);const s=new St({color:16774560,transparent:!0,opacity:.35,side:kt}),r=new C(new dn(13,24),s);r.position.copy(a.position),r.rotation.copy(a.rotation),n.add(r);const o=new St({color:16448250,transparent:!0,opacity:.88,side:kt});[[0,22,-85,1.1],[-35,20,-78,.9],[50,21,-80,1],[-30,22,85,1],[35,20,80,.85],[-90,21,10,.9],[90,20,-5,.8]].forEach(([l,d,c,p])=>{const f=new k(l,d,c).normalize();[-1,0,1].forEach(h=>{const x=new k().crossVectors(f,new k(0,1,0)).normalize().clone().multiplyScalar(h*7*p),m=new C(new at(5*p,8,6),o);m.position.set(l+x.x,d+(h===0?2*p:0),c+x.z),n.add(m)})})}function Ng(n){const e=new St({color:16744480,transparent:!0,opacity:.6,side:kt}),t=new C(new vn(1.2,.25,10,32),e);t.position.set(_n.x,5.5,_n.z),t.rotation.x=Math.PI/2,n.add(t);const i=new Hn({color:3066993}),a=new si(i);return a.scale.set(1.5,1.5,1.5),a.position.set(_n.x,7,_n.z),a.visible=!1,n.add(a),{idx:0,pos:{x:_n.x,z:_n.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isValve:!0}}function Og(n,e){!n||n.done||(n.glowMat.opacity=.4+.35*Math.sin(e*3.5),n.glowMesh.rotation.z=e*1.2)}function _d(n,e,t,i,a,s){const r=new C(new re(2.5,.8,.1),new St({color:s}));r.position.set(t,i,a),n.add(r)}const ji=56,Ki=44,yn=new k(0,0,-14);function zg(){const n=new da;n.background=new We(1715780),n.fog=new Ba(1583168,.012),n.add(new Hs(10537192,1));const e=new Mn(15267071,1.6);e.position.set(0,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,n.add(e);const t=new ni(6343935,2,28);t.position.set(yn.x,4,yn.z),n.add(t);const i=new Mn(9482448,.8);return i.position.set(-18,10,-10),n.add(i),{scene:n}}function Fg(n){Bg(n),Hg(n),Gg(n),Vg(n),Wg(n)}function Bg(n){const e=new ie({color:1712688,roughness:.9,metalness:.05}),t=new ie({color:1846332,roughness:.85,metalness:0}),i=new ie({color:1120288,roughness:1,metalness:0}),a=ji/2,s=Ki/2,r=10,o=new C(new wt(ji,Ki),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new wt(ji,Ki),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[ji,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[ji,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[Ki,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[Ki,r]}];for(const f of d){const h=new C(new wt(...f.size),t);h.position.set(...f.pos),h.rotation.set(...f.rot),n.add(h)}const c=new St({color:9488639});for(let f=-18;f<=18;f+=12){const h=new C(new re(.3,.08,18),c);h.position.set(f,r-.05,0),n.add(h)}const p=new ua({color:1716304});for(let f=-a;f<=a;f+=4){const h=[new k(f,.01,-s),new k(f,.01,s)];n.add(new Fn(new bt().setFromPoints(h),p))}for(let f=-s;f<=s;f+=4){const h=[new k(-a,.01,f),new k(a,.01,f)];n.add(new Fn(new bt().setFromPoints(h),p))}}function Hg(n){const e=new ie({color:2767434,roughness:.7}),t=new ie({color:1714224,roughness:.8}),i=new ie({color:2130080,transparent:!0,opacity:.35,roughness:.1,metalness:.1}),a=new ie({color:2099712,transparent:!0,opacity:.85,roughness:.3}),s=new ie({color:4213328,roughness:.5,metalness:.3});[{x:-16,z:2},{x:0,z:2},{x:16,z:2}].forEach(({x:o,z:l})=>{const d=new C(new re(8,.15,3.5),e);d.position.set(o,3.1,l),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[x,m]of[[-3.5,-1.4],[3.5,-1.4],[-3.5,1.4],[3.5,1.4]]){const u=new C(new re(.15,3.1,.15),t);u.position.set(o+x,1.55,l+m),n.add(u)}const c=new C(new re(3,1.6,1.6),i);c.position.set(o-1,4.1,l),n.add(c);const p=new C(new wt(2.8,1.5),a);p.rotation.x=-Math.PI/2,p.position.set(o-1,3.42,l),n.add(p);const f=new C(new re(.5,.4,.4),s);f.position.set(o+2.2,3.35,l-.5),n.add(f);const h=new ie({color:8429712,roughness:.6}),g=new C(new xe(.04,.04,.9,8),h);g.position.set(o+1.8,3.75,l-.5),n.add(g)})}function Gg(n){const e=new ie({color:2767402,roughness:.8}),t=new ie({color:4214880,roughness:.6,metalness:.2}),i=new ie({color:6303776,roughness:.7}),a=new St({color:4259788});for(let s=-18;s<=18;s+=18){const r=new C(new re(8,6,.2),e);r.position.set(s,3,-22+.15),n.add(r);for(let o=0;o<3;o++){const l=new C(new re(7.6,.08,.5),e);l.position.set(s,1.2+o*2,-22+.45),n.add(l);for(let c=-2;c<=2;c++){const p=.3+Math.random()*.5,f=new C(new xe(.18,.18,p,8),c%2===0?t:i);f.position.set(s+c*1.4,1.25+o*2+p/2,-22+.5),n.add(f)}const d=new C(new re(6,.06,.08),a);d.position.set(s,1.18+o*2,-22+.6),n.add(d)}}}function Vg(n){const e=new ie({color:1714224,roughness:.6,metalness:.3}),t=new ie({color:6192,roughness:.1,metalness:.2,emissive:new We(16544),emissiveIntensity:.5}),i=new ie({color:3160128,roughness:.5,metalness:.5}),a=new ie({color:2765376,roughness:.8}),s=yn.x,r=yn.z,o=new C(new xe(.5,.65,3.4,16),e);o.position.set(s,1.7,r),o.castShadow=!0,n.add(o);const l=new C(new re(2.4,1.8,.12),i);l.position.set(s,4.4,r),n.add(l);const d=new C(new re(2.2,1.6,.06),t);d.position.set(s,4.4,r-.04),n.add(d);const c=new C(new re(1.8,.06,.7),a);c.position.set(s,3.55,r+.3),n.add(c);const p=new St({color:4245759});for(let m=0;m<3;m++){const u=new C(new re(1.5,.02,.08),p);u.position.set(s,3.59,r+.12+m*.16),n.add(u)}const f=new St({color:43775}),h=new C(new re(2.8,.5,.08),f);h.position.set(s,5.7,r),n.add(h);const g=new St({color:4259839}),x=new C(new re(.3,.3,.1),g);x.position.set(s-1.3,4.4,r-.1),n.add(x)}function Wg(n){const e=ji/2,t=Ki/2,i=new ie({color:3689016,roughness:.8});for(const[l,d]of[[e-1.5,-t+1.2],[e-1.5,t-1.2]]){const c=new C(new re(2.4,5,1.6),i);c.position.set(l,2.5,d),c.castShadow=!0,n.add(c);const p=new C(new re(.06,.4,.06),new ie({color:10526816,metalness:.8,roughness:.2}));p.position.set(l-.7,2.5,d-.85),n.add(p)}const a=new ie({color:1720416,roughness:.9}),s=new St({color:54527});for(const l of[-10,0,10]){const d=new C(new re(.08,3,2.2),a);d.position.set(-e+.08,4.5,l),n.add(d);const c=new C(new re(.04,2.4,.08),s);c.position.set(-e+.1,5.2,l),n.add(c)}const r=new ie({color:6963232,roughness:.9}),o=new ie({color:1728544,roughness:1});for(const[l,d]of[[-e+2,t-2],[-e+2,-t+2]]){const c=new C(new xe(.4,.3,.7,12),r);c.position.set(l,.35,d),n.add(c);const p=new C(new Bn(.7,1.4,8),o);p.position.set(l,1.4,d),n.add(p)}}function Xg(n){const e=new St({color:52479,transparent:!0,opacity:.65,side:kt}),t=new C(new vn(1.1,.2,10,32),e);t.position.set(yn.x,6.2,yn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new Hn({color:3066993}),a=new si(i);return a.scale.set(1.5,1.5,1.5),a.position.set(yn.x,7.2,yn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:yn.x,z:yn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isTerminal:!0}}function qg(n,e){!n||n.done||(n.glowMat.opacity=.4+.3*Math.sin(e*4),n.glowMesh.rotation.z=e*1.5)}const Yn=52,jn=40,wn=new k(0,0,-12);function $g(){const n=new da;n.background=new We(1714748),n.fog=new Ba(1450032,.01),n.add(new Hs(11585760,1));const e=new Mn(14741759,1.6);e.position.set(5,18,8),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-28,e.shadow.camera.right=28,e.shadow.camera.top=28,e.shadow.camera.bottom=-28,n.add(e);const t=new ni(16768384,2.2,22);t.position.set(wn.x,5,wn.z),n.add(t);const i=new Mn(8425664,.7);return i.position.set(-15,8,-5),n.add(i),{scene:n}}function Yg(n){jg(n),Kg(n),Jg(n),Zg(n),Qg(n)}function jg(n){const e=new ie({color:1450030,roughness:.85,metalness:.05}),t=new ie({color:1582132,roughness:.9}),i=new ie({color:924200,roughness:1}),a=Yn/2,s=jn/2,r=9,o=new C(new wt(Yn,jn),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new wt(Yn,jn),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Yn,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Yn,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[jn,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[jn,r]}];for(const f of d){const h=new C(new wt(...f.size),t);h.position.set(...f.pos),h.rotation.set(...f.rot),n.add(h)}const c=new ua({color:1714746});for(let f=-a;f<=a;f+=3){const h=[new k(f,.01,-s),new k(f,.01,s)];n.add(new Fn(new bt().setFromPoints(h),c))}for(let f=-s;f<=s;f+=3){const h=[new k(-a,.01,f),new k(a,.01,f)];n.add(new Fn(new bt().setFromPoints(h),c))}const p=new St({color:6334719});for(const[f,h,g,x]of[[0,-s+.1,Yn,.1],[0,s-.1,Yn,.1],[-a+.1,0,.1,jn],[a-.1,0,.1,jn]]){const m=new C(new re(g,.06,x),p);m.position.set(f,r-.05,h),n.add(m)}}function Kg(n){const e=new ie({color:2635848,roughness:.7}),t=new ie({color:1581104,roughness:.8}),i=[new ie({color:1705216,transparent:!0,opacity:.9}),new ie({color:5908480,transparent:!0,opacity:.8}),new ie({color:8435776,transparent:!0,opacity:.7})],a=new ie({color:8965375,transparent:!0,opacity:.3,roughness:.05,metalness:.05});[[-14,6],[0,6],[14,6]].forEach(([r,o],l)=>{const d=new C(new re(7,.12,3),e);d.position.set(r,3.1,o),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[g,x]of[[-3,-1.2],[3,-1.2],[-3,1.2],[3,1.2]]){const m=new C(new re(.12,3.1,.12),t);m.position.set(r+g,1.55,o+x),n.add(m)}for(let g=0;g<3;g++){const x=new C(new xe(.3,.28,.8,12),a);x.position.set(r-1.8+g*1.8,3.56,o-.5),n.add(x);const m=.3+g*.1,u=new C(new xe(.27,.25,m,12),i[g]);u.position.set(r-1.8+g*1.8,3.17+m/2,o-.5),n.add(u)}const c=new ie({color:2113642,roughness:.9}),p=new C(new re(1.2,.04,.9),c);p.position.set(r+2.5,3.18,o+.5),n.add(p);const f=new ie({color:4243616,roughness:.5,metalness:.3}),h=new C(new xe(.05,.05,1,8),f);h.position.set(r-2.8,3.75,o),h.rotation.z=.3,n.add(h)})}function Jg(n){const e=new ie({color:1579552,roughness:.5,metalness:.5}),t=new ie({color:2107440,roughness:.5,metalness:.6}),i=new ie({color:4227264,roughness:.1,metalness:.8}),a=new ie({color:2113696,roughness:.1,metalness:.9}),s=wn.x,r=wn.z,o=new C(new re(3.5,.5,3),e);o.position.set(s,.25,r),o.castShadow=!0,n.add(o);const l=new C(new re(.4,4,.4),t);l.position.set(s-.8,2.25,r),l.castShadow=!0,n.add(l);const d=new C(new re(1.8,.35,.35),t);d.position.set(s+.1,4.1,r),n.add(d);const c=new C(new xe(.3,.35,1.2,16),i);c.position.set(s+.8,3.4,r),n.add(c);const p=new C(new xe(.1,.2,.5,12),i);p.position.set(s+.8,2.55,r),n.add(p);const f=new C(new xe(.18,.22,.6,12),a);f.position.set(s+.8,4.85,r),n.add(f);const h=new C(new re(1.2,.06,1),e);h.position.set(s+.8,2.3,r),n.add(h);const g=new St({color:16763968,transparent:!0,opacity:.7}),x=new C(new dn(.25,16),g);x.rotation.x=-Math.PI/2,x.position.set(s+.8,2.34,r),n.add(x)}function Zg(n){const e=new ie({color:794688,roughness:.9}),t=new St({color:54527}),i=[new St({color:16728128}),new St({color:4259712})],a=new C(new re(18,5.5,.1),e);a.position.set(0,4.5,-20+.12),n.add(a);const s=new C(new re(17.6,.35,.08),t);s.position.set(0,6.95,-20+.17),n.add(s);for(let r=0;r<2;r++){const o=new C(new re(15,.25,.06),i[r]);o.position.set(0,6-r*1.2,-20+.17),n.add(o);const l=r===0?[8,6.4,.4]:[.6,.5,.1];for(let d=0;d<3;d++){const c=new C(new re(l[d],.55,.06),i[r]);c.position.set(-7.5+l[d]/2+d*5.2,5-r*1.2,-20+.17),n.add(c)}}}function Qg(n){const e=Yn/2,t=jn/2,i=new ie({color:2636344,roughness:.85});for(const s of[-12,0,12]){const r=new C(new re(1.8,5,2),i);r.position.set(e-1,2.5,s),r.castShadow=!0,n.add(r)}const a=new ie({color:3817520,roughness:.9});for(const s of[-8,8]){const r=new C(new xe(.4,.35,.9,10),a);r.position.set(s,.45,t-2),n.add(r)}}function ex(n){const e=new St({color:16763904,transparent:!0,opacity:.65,side:kt}),t=new C(new vn(1,.2,10,32),e);t.position.set(wn.x+.8,5.8,wn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new Hn({color:3066993}),a=new si(i);return a.scale.set(1.5,1.5,1.5),a.position.set(wn.x+.8,7,wn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:wn.x+.8,z:wn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isScope:!0}}function tx(n,e){!n||n.done||(n.glowMat.opacity=.4+.28*Math.sin(e*3.8),n.glowMesh.rotation.z=e*1.3)}const nx=.65;function Ue(n,e,t,i){return{minX:n-t,maxX:n+t,minZ:e-i,maxZ:e+i}}const bs=60,Fr=40,Br=70,Hr=50,ix=[Ue(0,-20,bs/2+2,1.5),Ue(0,Fr/2,bs/2+2,1.5),Ue(-30,0,1.5,Fr/2+2),Ue(bs/2,0,1.5,Fr/2+2),Ue(-16,5,3.6,1.8),Ue(0,-6,3.6,1.8),Ue(16,5,3.6,1.8),Ue(-28,0,2,11.5),Ue(bs/2-2,0,2,11.5),Ue(-20,-18.4,3.5,1.6)],ax=[Ue(0,-25,Br/2+2,1.5),Ue(0,Hr/2,Br/2+2,1.5),Ue(-35,0,1.5,Hr/2+2),Ue(Br/2,0,1.5,Hr/2+2),Ue(-18,6,2.8,2.8),Ue(0,-12,2,2.5),Ue(18,6,2.5,2.5),Ue(-26,-12,4,6),Ue(28,-13,3,6)],Gr=60,Vr=50,sx=[Ue(0,-25,Gr/2+2,1.5),Ue(0,Vr/2,Gr/2+2,1.5),Ue(-30,0,1.5,Vr/2+2),Ue(Gr/2,0,1.5,Vr/2+2),Ue(0,-8,11.6,.8),Ue(0,8,11.6,.8),Ue(-11,0,.8,8.6),Ue(11,0,.8,8.6),Ue(0,-10,.8,.8)];let sa=ix;function rx(){sa=ax}function ox(){sa=sx}const ya=56,Wr=44,lx=[Ue(0,-22,ya/2+2,1.5),Ue(0,Wr/2,ya/2+2,1.5),Ue(-28,0,1.5,Wr/2+2),Ue(ya/2,0,1.5,Wr/2+2),Ue(-16,2,4.5,2),Ue(0,2,4.5,2),Ue(16,2,4.5,2),Ue(0,-14,1.4,1.4),Ue(-18,-21.5,4.5,.8),Ue(0,-21.5,4.5,.8),Ue(18,-21.5,4.5,.8),Ue(ya/2-1.5,-10,1.5,1.5),Ue(ya/2-1.5,10,1.5,1.5)],Yi=52,Xr=40,cx=[Ue(0,-20,Yi/2+2,1.5),Ue(0,Xr/2,Yi/2+2,1.5),Ue(-26,0,1.5,Xr/2+2),Ue(Yi/2,0,1.5,Xr/2+2),Ue(-14,6,4,2),Ue(0,6,4,2),Ue(14,6,4,2),Ue(.8,-12,1.8,1.8),Ue(Yi/2-1,-12,1.5,1.5),Ue(Yi/2-1,0,1.5,1.5),Ue(Yi/2-1,12,1.5,1.5)];function dx(){sa=lx}function ux(){sa=cx}function px(n,e,t){const i=nx;let a=n.x+e;for(const r of sa)a+i>r.minX&&a-i<r.maxX&&n.z+i>r.minZ&&n.z-i<r.maxZ&&(e>0?a=r.minX-i:a=r.maxX+i,e=a-n.x);let s=n.z+t;for(const r of sa)a+i>r.minX&&a-i<r.maxX&&s+i>r.minZ&&s-i<r.maxZ&&(t>0?s=r.minZ-i:s=r.maxZ+i,t=s-n.z);return{dx:e,dz:t}}const ee={playerName:"",currentLevel:1,totalPoints:0,levelAttempts:0,levelPoints:0,phenomenonIndex:0,answered:!1,wrongAnswers:0,levelBreakdown:[],pointsAtLevelStart:0,stage3:{valveOpened:!1},stage4:{selectedItems:[],reactorResult:null,terminalDone:!1},stage5:{scopeDone:!1},completedRooms:[]};function hx(){ee.levelAttempts=0,ee.levelPoints=0,ee.phenomenonIndex=0,ee.answered=!1,ee.wrongAnswers=0}const fx={1:"Level 1 – Lab Sains",2:"Level 2 – Pabrik Etanol",3:"Level 3 – Kolam Remediasi",4:"Level 4 – Membuat Reaktor Sederhana",5:"Level 5 – Lab Observasi"};function yd(n){const e=ee.totalPoints-ee.pointsAtLevelStart;ee.levelBreakdown.push({level:n,label:fx[n]||`Level ${n}`,points:e})}class mx{constructor(e){this.scene=e,this.group=new jt,this._build(),e.add(this.group),this.group.position.set(0,0,12),this.speed=.12,this.keys={},this._moving=!1,this._walkCycle=0,this._legAngle=0,this._armAngle=0,this._facingAngle=0,this._bindKeys(),this._bindTouch()}_bindKeys(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}_bindTouch(){if(this._touchAxis={x:0,y:0},!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1))return;const t=document.getElementById("mobile-controls");t&&(t.style.display="block");const i=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob");if(!i||!a)return;const s=32;let r=null,o=null,l=0,d=0;const c=h=>{if(r!==null)return;r=h.changedTouches[0].identifier,o=i.getBoundingClientRect(),l=o.left+o.width/2,d=o.top+o.height/2,h.preventDefault()},p=h=>{for(const g of h.changedTouches){if(g.identifier!==r)continue;const x=g.clientX-l,m=g.clientY-d,u=Math.sqrt(x*x+m*m),v=Math.min(u,s),b=Math.atan2(m,x),_=Math.cos(b)*v,L=Math.sin(b)*v;a.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${L}px))`,this._touchAxis.x=_/s,this._touchAxis.y=-L/s,h.preventDefault()}},f=h=>{for(const g of h.changedTouches)g.identifier===r&&(r=null,a.style.transform="translate(-50%, -50%)",this._touchAxis.x=0,this._touchAxis.y=0)};i.addEventListener("touchstart",c,{passive:!1}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})}_build(){const e=new ie({color:16108455,roughness:.7,metalness:0}),t=new ie({color:2719929,roughness:.6,metalness:.05}),i=new ie({color:2899536,roughness:.65,metalness:.05}),a=new ie({color:2890254,roughness:.8,metalness:0}),s=new ie({color:1710618,roughness:.6,metalness:.1}),r=new ie({color:16448250,roughness:.7,metalness:0}),o=new C(new xe(.48,.52,1.6,16),t);o.position.y=2.2,o.castShadow=!0,this.group.add(o),this._torso=o;const l=new C(new xe(.5,.54,1.58,16),r);l.position.y=2.2,this.group.add(l),this._coat=l;for(const g of[-1,1]){const x=new C(new at(.28,12,10),r);x.position.set(g*.62,2.9,0),this.group.add(x)}const d=new C(new at(.52,20,16),e);d.position.y=3.62,d.scale.set(1,1.05,1),d.castShadow=!0,this.group.add(d),this._head=d;const c=new C(new at(.54,16,10,0,Math.PI*2,0,Math.PI*.55),a);c.position.y=3.85,this.group.add(c);for(const g of[-1,1]){const x=new C(new at(.1,8,8),e);x.position.set(g*.53,3.65,0),this.group.add(x)}const p=new ie({color:1710618});for(const g of[-1,1]){const x=new C(new at(.07,8,8),p);x.position.set(g*.2,3.72,.47),this.group.add(x)}const f=new ie({color:13936778}),h=new C(new at(.05,8,8),f);h.position.set(0,3.58,.52),this.group.add(h),this._legs=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new jt;m.position.set(x*.3,1.55,0);const u=new C(new xe(.2,.18,.72,12),i);u.position.y=-.36,u.castShadow=!0,m.add(u);const v=new jt;v.position.y=-.72,m.add(v);const b=new C(new xe(.16,.14,.64,12),i);b.position.y=-.32,b.castShadow=!0,v.add(b);const _=new C(new To(.13,.3,6,10),s);_.rotation.x=Math.PI/2,_.position.set(0,-.68,.12),v.add(_),this.group.add(m),this._legs.push({pivot:m,kneePivot:v,side:x,i:g===-1?0:1})}this._arms=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new jt;m.position.set(x*.76,2.92,0);const u=new C(new xe(.16,.14,.62,12),r);u.position.y=-.31,u.castShadow=!0,m.add(u);const v=new jt;v.position.y=-.62,m.add(v);const b=new C(new xe(.13,.12,.56,12),e);b.position.y=-.28,v.add(b);const _=new C(new at(.13,10,8),e);_.position.y=-.6,v.add(_),this.group.add(m),this._arms.push({pivot:m,elbowPivot:v,side:x,i:g===-1?0:1})}this._nameLabel=null}setName(e){if(this._nameLabel&&this.group.remove(this._nameLabel),!e)return;const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.clearRect(0,0,256,64),i.fillStyle="rgba(15,25,40,0.8)",i.roundRect(4,4,248,56,12),i.fill(),i.fillStyle="#2ecc71",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const a=new Ga(t),s=new Hn({map:a,transparent:!0}),r=new si(s);r.scale.set(3.5,.9,1),r.position.y=5.2,this._nameLabel=r,this.group.add(r)}update(e,t=!1,i=null){const a=this.keys;let s=0,r=0;if((a.KeyW||a.ArrowUp)&&(s+=1),(a.KeyS||a.ArrowDown)&&(s-=1),(a.KeyA||a.ArrowLeft)&&(r-=1),(a.KeyD||a.ArrowRight)&&(r+=1),this._touchAxis&&(s+=this._touchAxis.y,r+=this._touchAxis.x,s=Math.max(-1,Math.min(1,s)),r=Math.max(-1,Math.min(1,r))),this._moving=s!==0||r!==0,this._moving&&!t){let o=0,l=0;const d=s<0;if(d&&i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}else if(d)o=-Math.sin(this._facingAngle)*this.speed,l=-Math.cos(this._facingAngle)*this.speed;else if(i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}else{o=r,l=-s;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}({dx:o,dz:l}=px(this.group.position,o,l)),this.group.position.x+=o,this.group.position.z+=l;const c=ee.currentLevel===2?33:ee.currentLevel===3?27:28,p=ee.currentLevel===2?23:ee.currentLevel===3?22:18;this.group.position.x=Math.max(-c,Math.min(c,this.group.position.x)),this.group.position.z=Math.max(-p,Math.min(p,this.group.position.z)),d||(this._facingAngle=Math.atan2(o,l)),this.group.rotation.y=this._facingAngle,this._walkCycle+=.18;const f=this._walkCycle;for(const{pivot:h,kneePivot:g,i:x}of this._legs){const m=f+x*Math.PI,u=Math.sin(m)*.55;h.rotation.x=u;const v=Math.max(0,-Math.sin(m)*.45);g.rotation.x=v}for(const{pivot:h,elbowPivot:g,side:x,i:m}of this._arms){const u=f+(1-m)*Math.PI,v=Math.sin(u)*.42;h.rotation.x=v,h.rotation.z=x*(.08+Math.sin(u+Math.PI*.5)*.06),g.rotation.x=Math.max(0,Math.sin(u+.4)*.28)}this._torso&&(this._torso.rotation.y=Math.sin(f+Math.PI)*.08),this._coat&&(this._coat.rotation.y=Math.sin(f+Math.PI)*.08),this._head&&(this._head.position.y=3.62+Math.abs(Math.sin(f*2))*.06),this.group.position.y=Math.abs(Math.sin(f*2))*.055}else{this._walkCycle=0;for(const{pivot:o,kneePivot:l}of this._legs)o.rotation.x*=.75,l.rotation.x*=.75;for(const{pivot:o,elbowPivot:l,side:d}of this._arms)o.rotation.x*=.75,o.rotation.z+=(d*.08-o.rotation.z)*.15,l.rotation.x*=.75;this._torso&&(this._torso.rotation.y*=.8),this._coat&&(this._coat.rotation.y*=.8),this._head&&(this._head.position.y=3.62+Math.sin(e*1.2)*.02),this.group.position.y=Math.sin(e*1.4)*.04}return{x:this.group.position.x,z:this.group.position.z}}get position(){return this.group.position}removeFromScene(e){e.remove(this.group)}addToScene(e){this.scene=e,e.add(this.group)}}const gx=[{id:1,title:"Fenomena 1",image:null,tableData:{headers:["Stasiun","Suhu (°C)","pH","DO (mg/L)","COD (mg/L)","TDS (mg/L)"],rows:[{label:"Hulu",values:["30,39","7,26","8,38","635","777"],classes:["","","blue","",""]},{label:"Tengah",values:["31,17","6,96","1,90","775","1.343"],classes:["","","red","","red"]},{label:"Hilir",values:["29,63","7,36","11,12","879","1.300"],classes:["","","","red",""]}],note:"Biru: rata-rata terendah | Merah: rata-rata tertinggi. Sumber: Zahra, 2023"},context:"Seorang peneliti lingkungan mengamati data kualitas air sungai di stasiun berbeda, yaitu: hulu, tengah, dan hilir dari aliran anak Sungai Bengawan solo yang berdekatan dengan pabrik etanol. Data menunjukkan:",question:"Berdasarkan data, Stasiun Tengah menunjukkan nilai TDS melonjak drastis menjadi 1.343 mg/L, namun nilai DO justru berada di angka 1,90 mg/L dengan COD 90.000 mg/L. Jika diketahui sumber pencemar adalah limbah vinasse yang kaya bahan organik, manakah evaluasi paling kritis mengenai data tersebut?",options:[{label:"A",text:"Tingginya TDS disebabkan oleh mineral anorganik, sedangkan seluruh bakteri telah terurai oleh bakteri dari hulu ke tengah.",correct:!1},{label:"B",text:"Masuknya limbah vinasse seharusnya meningkatkan TDS, DO, dan COD secara simultan.",correct:!0},{label:"C",text:"TDS, COD, dan DO memiliki hubungan yang terbalik, semakin banyak zat terlarut, semakin sedikit oksigen yang dibutuhkan.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Limbah organik vinasse seharusnya berkontribusi pada TDS dan COD. Jika TDS dan COD naik tajam karena limbah masuk, DO seharusnya tidak turun drastis."},{id:2,title:"Fenomena 2",image:null,tableData:null,standardTable:{title:"Baku Mutu Air Limbah Industri Bir/Etanol (Permen LH No.5/2014)",headers:["Parameter","Kadar Maks (mg/L)","Beban Maks (g/hL)"],rows:[["BOD₅","40","24,0"],["COD","100","60,0"],["TSS","40","24,0"],["pH","6,0 – 9,0","—"],["Debit limbah maks","—","6 hL/hL produk"]]},context:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",question:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",options:[{label:"A",text:"Adanya bakteri coliform dan mikroorganisme pengurai.",correct:!1},{label:"B",text:"Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi.",correct:!0},{label:"C",text:"Suspensi padatan lumpur yang belum mengendap.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi mendominasi nilai TDS di Stasiun Tengah."},{id:3,title:"Fenomena 3",image:null,riceGraph:!0,tableData:null,context:"Perhatikan grafik produktivitas lahan persawahan padi berikut:",question:"Manakah interpretasi ilmiah yang paling tepat menjelaskan mekanisme penyebab fenomena penurunan hasil panen padi tersebut?",options:[{label:"A",text:"Kenaikan hasil panen di Tahun ke-2 terjadi karena suplai bahan organik berada di bawah ambang batas pencemaran sehingga justru memperkaya hara tanah, namun pada Tahun ke-3 akumulasi pH dan COD telah menyebabkan kerusakan pada jaringan akar padi.",correct:!0},{label:"B",text:"Penurunan hasil panen pada Tahun ke-3 disebabkan oleh kurangnya pasokan air, karena tingginya nilai COD menyebabkan air menjadi kental dan sulit diserap oleh akar tanaman.",correct:!1},{label:"C",text:"Peningkatan hasil panen pada Tahun ke-2 disebabkan oleh bakteri patogen dalam limbah yang memicu mutasi genetik pada padi menjadi varietas unggul, sedangkan penurunan di Tahun ke-3 adalah fase kematian alami bakteri tersebut.",correct:!1}],correctKey:"A",explanation:"✅ <strong>Jawaban benar!</strong><br>Meskipun COD naik menjadi 80, pH tanah sebesar 8,6 masih dalam rentang toleransi padi. Bahan organik dalam limbah vinasse mengandung N, P, dan K. Pada tahap ini, efek negatif belum mendominasi, sehingga tanaman justru merespons positif terhadap tambahan nutrisi tersebut. Ketika COD mencapai >100 mg/L dan pH >9 kondisi tanah menjadi toksik. pH yang tinggi menyebabkan ion logam di tanah menjadi larut dan meracuni akar, serta menghambat penyerapan Fosfor. Hal ini menyebabkan tanaman gagal tumbuh."}],wa={phenomena:gx},xx=879,vx=635,_s=1e3;function bx(n){const e=Math.max(0,Math.min(_s,n)),t=_s-e,i=e/_s,a=Math.round(xx*i),s=Math.round(vx*i),r=Math.pow(10,-3.8),o=Math.pow(10,-7),l=(r*e+o*t)/_s,d=Math.max(3.5,Math.min(7,-Math.log10(l)));return{cod:a,bod:s,ph:parseFloat(d.toFixed(2)),dilutionFactor:i}}function _x(n,e){const t=Math.max(0,Math.min(72,e)),i=Math.round(n.bod*Math.exp(-.08*t)),a=n.bod-i,s=n.cod*.55,r=n.cod*.45,o=s*Math.exp(-.08*t),l=Math.round(o+r),d=parseFloat(Math.min(6.8,n.ph+(6.8-n.ph)*(1-Math.exp(-.08*.5*t))).toFixed(2)),c=n.bod>0?Math.round(a/n.bod*100):0,p=n.cod>0?Math.round((n.cod-l)/n.cod*100):0,f=i<=40&&l<=100;return{cod:l,bod:i,ph:d,bodRemovalPct:c,codRemovalPct:p,compliant:f}}const wd="biovine_scores",Lo="biovine_checkpoint";function yx({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}){const s=wx();s.push({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}),s.length>200&&s.splice(0,s.length-200);try{localStorage.setItem(wd,JSON.stringify(s))}catch(r){console.warn("[db] saveScore failed:",r)}}function wx(){try{return JSON.parse(localStorage.getItem(wd)||"[]")}catch{return[]}}function Mx({playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i,completedRooms:a}){const s={playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i||[],completedRooms:a||[],savedAt:new Date().toISOString()};try{localStorage.setItem(Lo,JSON.stringify(s))}catch(r){console.warn("[db] saveCheckpoint failed:",r)}}function Co(){try{const n=localStorage.getItem(Lo);return n?JSON.parse(n):null}catch{return null}}function Md(){localStorage.removeItem(Lo)}const Ro="https://script.google.com/macros/s/AKfycbys_sNNVIFJCQGmvNHUMuiLpZGINttOvNN5LnIJ8z5Gak8h8KQ8BdTo342_K5H05RxbXw/exec";function Sx(n){const{playerName:e,totalPoints:t,levelBreakdown:i,completedRooms:a}=ee,s={1:null,2:null,3:null,4:null,5:null};i.forEach(l=>{s[l.level]=l.points});const r=s[n]??0,o={playerName:e,totalPoints:t,completedLevel:n,thisLevelPoints:r,level1Points:s[1],level2Points:s[2],level3Points:s[3],level4Points:s[4],level5Points:s[5],completedRooms:a,timestamp:new Date().toISOString()};fetch(Ro,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).catch(l=>{console.warn("[sheets] Upload failed (network error):",l)})}function Ex(n){const e={sheet:"Kelompok",...n};return fetch(Ro,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{throw console.warn("[sheets] Experiment upload failed (network error):",t),t})}function Tx(n){const e={sheet:"Esai",playerName:n.playerName||"",essayAnswer:n.essayAnswer||"",timestamp:n.timestamp||new Date().toISOString()};fetch(Ro,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{console.warn("[sheets] Essay upload failed (network error):",t)})}const fn=n=>document.getElementById(n),Po="experiment-form-overlay",bc="experiment-form-css";function Ax(){if(document.getElementById(bc))return;const n=document.createElement("style");n.id=bc,n.textContent=`
    #${Po} {
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,5,15,0.94);
      display: flex; align-items: flex-start; justify-content: center;
      overflow-y: auto; padding: 24px 12px;
      font-family: system-ui, sans-serif; color: #e8ecf0;
      animation: exp-fadein .3s ease;
    }
    @keyframes exp-fadein { from { opacity:0 } to { opacity:1 } }

    .exp-card {
      width: 100%; max-width: 900px;
      background: linear-gradient(160deg, #0d1b2a, #091525);
      border: 1px solid rgba(60,140,220,.35);
      border-radius: 18px; padding: 28px 28px 32px;
      box-shadow: 0 0 60px rgba(40,120,220,.18);
      position: relative;
    }

    .exp-header { margin-bottom: 20px; }
    .exp-badge {
      display: inline-block;
      background: rgba(40,120,220,.2); border: 1px solid rgba(40,120,220,.4);
      color: #7ec8ff; border-radius: 20px;
      padding: 4px 14px; font-size: 12px; font-weight: 700;
      letter-spacing: .04em; text-transform: uppercase; margin-bottom: 8px;
    }
    .exp-title {
      margin: 0 0 6px; font-size: 22px; font-weight: 800;
      color: #fff; line-height: 1.25;
    }
    .exp-subtitle { font-size: 13px; color: #8a9ab0; margin: 0; line-height: 1.6; }

    .exp-close-btn {
      position: absolute; top: 20px; right: 20px;
      background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
      color: #ccc; border-radius: 8px;
      padding: 6px 12px; cursor: pointer; font-size: 14px;
      transition: background .18s;
    }
    .exp-close-btn:hover { background: rgba(255,60,60,.18); color: #fff; }

    .exp-section { margin-top: 24px; }
    .exp-section-title {
      font-size: 14px; font-weight: 700; color: #7ec8ff;
      text-transform: uppercase; letter-spacing: .06em;
      margin-bottom: 12px; padding-bottom: 6px;
      border-bottom: 1px solid rgba(60,140,220,.2);
    }

    /* Identity row */
    .exp-identity-row { display: flex; gap: 14px; flex-wrap: wrap; }
    .exp-field { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 160px; }
    .exp-field label { font-size: 12px; color: #8a9ab0; font-weight: 600; letter-spacing: .03em; }
    .exp-input {
      background: rgba(255,255,255,.05); border: 1px solid rgba(60,140,220,.3);
      border-radius: 8px; color: #e8ecf0;
      padding: 8px 12px; font-size: 14px; outline: none;
      transition: border-color .18s;
    }
    .exp-input:focus { border-color: rgba(60,180,255,.7); background: rgba(255,255,255,.08); }
    .exp-input::placeholder { color: #3a5070; }

    /* Tables */
    .exp-table-wrap {
      overflow-x: auto;
      border-radius: 10px;
      border: 1px solid rgba(60,140,220,.2);
    }
    .exp-table {
      width: 100%; border-collapse: collapse; font-size: 13px;
      min-width: 560px;
    }
    .exp-obs-table { min-width: 900px; }

    .exp-table th {
      background: rgba(40,100,180,.25); color: #7ec8ff;
      padding: 8px 10px; font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: .04em;
      border: 1px solid rgba(60,140,220,.18); white-space: nowrap;
    }
    .exp-table td {
      border: 1px solid rgba(60,140,220,.12);
      padding: 4px;
      background: rgba(255,255,255,.02);
    }
    .exp-treatment-label {
      padding: 8px 12px !important;
      font-size: 12px; font-weight: 700;
      color: #8a9ab0; white-space: nowrap;
      background: rgba(40,100,180,.12) !important;
      min-width: 110px;
    }
    .exp-cell {
      width: 100%; min-width: 60px;
      background: transparent; border: none; outline: none;
      color: #e8ecf0; font-size: 13px;
      padding: 6px 8px;
      box-sizing: border-box;
    }
    .exp-cell:focus {
      background: rgba(60,180,255,.08);
      border-radius: 4px;
    }
    .exp-cell::placeholder { color: #2a4060; }

    /* Submit row */
    .exp-submit-row {
      margin-top: 28px; display: flex;
      flex-direction: column; align-items: flex-start; gap: 12px;
    }
    .exp-note {
      font-size: 12px; color: #5a7090; line-height: 1.5;
    }
    .exp-btn {
      padding: 12px 30px; border-radius: 10px; border: none; cursor: pointer;
      font-size: 15px; font-weight: 700;
      background: linear-gradient(135deg, #1565c0, #0d47a1);
      color: #fff; letter-spacing: .02em;
      box-shadow: 0 4px 18px rgba(21,101,192,.35);
      transition: opacity .18s, transform .15s;
    }
    .exp-btn:hover:not(:disabled) { opacity: .9; transform: translateY(-1px); }
    .exp-btn:disabled { opacity: .55; cursor: not-allowed; transform: none; }

    .exp-status {
      padding: 10px 16px; border-radius: 8px; font-size: 14px; font-weight: 600;
    }
    .exp-status.ok  { background: rgba(30,150,80,.18); border: 1px solid rgba(30,200,80,.35); color: #5de0a0; }
    .exp-status.err { background: rgba(180,40,40,.18); border: 1px solid rgba(220,60,60,.35); color: #ff8080; }
    .exp-status.hidden { display: none; }
  `,document.head.appendChild(n)}function kx(){const n=document.createElement("div");return n.id=Po,n}function qr(){var n;(n=document.getElementById(Po))==null||n.remove()}function ys(n){return["warna","bau","keruh","ph","sal","tds","cod","bod","do"].map(t=>`<td><input type="text" class="exp-cell" id="${n}-${t}" /></td>`).join("")}function Do(){Ax(),qr();const n=kx();n.innerHTML=`
    <div class="exp-card">
      <button class="exp-close-btn" id="exp-close">✕ Tutup</button>

      <div class="exp-header">
        <div class="exp-badge">🧪 Percobaan Nyata</div>
        <h2 class="exp-title">Upload Hasil Percobaan Kelompok</h2>
        <p class="exp-subtitle">
          Isi data hasil percobaan nyata yang telah kelompokmu lakukan di laboratorium.<br>
          Pengisian ini bersifat <strong>opsional</strong> dan tidak mempengaruhi poin permainan.
        </p>
      </div>

      <!-- ─── Identitas ─────────────────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📋 Identitas Kelompok</div>
        <div class="exp-identity-row">
          <div class="exp-field">
            <label for="exp-kelompok">Nomor Kelompok <span style="color:#e06060">*</span></label>
            <input type="text" id="exp-kelompok" placeholder="Contoh: 3" maxlength="20" class="exp-input" />
          </div>
          <div class="exp-field">
            <label for="exp-kelas">Kelas <span style="color:#e06060">*</span></label>
            <input type="text" id="exp-kelas" placeholder="Contoh: X-IPA-2" maxlength="30" class="exp-input" />
          </div>
          <div class="exp-field" style="flex:2">
            <label for="exp-nama">Nama Anggota (opsional)</label>
            <input type="text" id="exp-nama" placeholder="Nama-nama anggota kelompok…" maxlength="150" class="exp-input" />
          </div>
        </div>
      </div>

      <!-- ─── Tabel Pengamatan Mikroorganisme ───────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">🔬 Tabel Pengamatan Mikroorganisme</div>
        <div class="exp-table-wrap">
          <table class="exp-table">
            <thead>
              <tr>
                <th>Nama Mikroorganisme</th>
                <th colspan="2">Keadaan Lingkungan</th>
              </tr>
              <tr>
                <th></th>
                <th>Intensitas Cahaya</th>
                <th>Suhu Ruang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" class="exp-cell" id="t1-mikro"  placeholder="Nama mikroorganisme…" /></td>
                <td><input type="text" class="exp-cell" id="t1-cahaya" placeholder="Contoh: 1200 lux"    /></td>
                <td><input type="text" class="exp-cell" id="t1-suhu"   placeholder="Contoh: 27 °C"       /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Hasil Pengamatan Awal ─────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📊 Hasil Pengamatan Awal</div>
        <div class="exp-table-wrap">
          <table class="exp-table exp-obs-table">
            <thead>
              <tr>
                <th rowspan="2">Treatment</th>
                <th colspan="9">Hasil Pengamatan Awal</th>
              </tr>
              <tr>
                <th>Warna</th><th>Bau</th><th>Kekeruhan</th>
                <th>PH</th><th>Salinitas</th><th>TDS</th>
                <th>COD</th><th>BOD</th><th>DO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="exp-treatment-label">Dengan<br>Mikroorganisme</td>
                ${ys("awal-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${ys("awal-tp")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Hasil Pengamatan Akhir ────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📊 Hasil Pengamatan Akhir</div>
        <div class="exp-table-wrap">
          <table class="exp-table exp-obs-table">
            <thead>
              <tr>
                <th rowspan="2">Treatment</th>
                <th colspan="9">Hasil Pengamatan Akhir</th>
              </tr>
              <tr>
                <th>Warna</th><th>Bau</th><th>Kekeruhan</th>
                <th>PH</th><th>Salinitas</th><th>TDS</th>
                <th>COD</th><th>BOD</th><th>DO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="exp-treatment-label">Dengan<br>Mikroorganisme</td>
                ${ys("akhir-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${ys("akhir-tp")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Submit ────────────────────────────────────────────── -->
      <div class="exp-submit-row">
        <p class="exp-note">
          📌 Data ini akan dikirimkan ke sheet <strong>Kelompok</strong> untuk digunakan oleh guru/peneliti.
          Kolom yang kosong akan dikirim sebagai tanda hubung (–).
        </p>
        <button class="exp-btn" id="exp-submit">📤 Kirim Hasil Percobaan</button>
        <div class="exp-status hidden" id="exp-status"></div>
      </div>
    </div>
  `,document.body.appendChild(n),fn("exp-close").onclick=qr,n.addEventListener("click",t=>{t.target===n&&qr()}),fn("exp-submit").onclick=()=>{const t=fn("exp-kelompok").value.trim(),i=fn("exp-kelas").value.trim();if(!t||!i){e("⚠️ Nomor Kelompok dan Kelas wajib diisi!",!1);return}const a=["warna","bau","keruh","ph","sal","tds","cod","bod","do"];function s(l){return Object.fromEntries(a.map(d=>{var c;return[d,((c=fn(`${l}-${d}`))==null?void 0:c.value.trim())||"–"]}))}const r={nomorKelompok:t,kelas:i,namaAnggota:fn("exp-nama").value.trim()||"–",playerName:ee.playerName||"–",timestamp:new Date().toISOString(),mikroorganisme:fn("t1-mikro").value.trim()||"–",intensitasCahaya:fn("t1-cahaya").value.trim()||"–",suhuRuang:fn("t1-suhu").value.trim()||"–",awalDengan:s("awal-dg"),awalTanpa:s("awal-tp"),akhirDengan:s("akhir-dg"),akhirTanpa:s("akhir-tp")},o=fn("exp-submit");o.disabled=!0,o.textContent="⏳ Mengirim…",Ex(r).then(()=>{e("✅ Berhasil! Data percobaan kelompokmu telah dikirimkan.",!0),o.textContent="✅ Terkirim"}).catch(()=>{e("❌ Gagal mengirim. Periksa koneksi internet dan coba lagi.",!1),o.disabled=!1,o.textContent="📤 Kirim Ulang"})};function e(t,i){const a=fn("exp-status");a.className="exp-status "+(i?"ok":"err"),a.innerHTML=t,a.scrollIntoView({behavior:"smooth",block:"nearest"})}}const _e=n=>document.getElementById(n);let co=null,$r=null;function Lx(n,e){co=n,$r=e||null;const t=Co(),i=_e("resume-section");if(t&&i&&$r){const a=new Date(t.savedAt),s=a.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});i.classList.remove("hidden"),i.innerHTML=`
      <div class="resume-card">
        <div class="resume-info">
          <span class="resume-avatar">🎮</span>
          <div>
            <strong>${t.playerName}</strong>
            <div style="font-size:12px;color:#aaa;margin-top:2px">
              Level ${t.currentLevel} &nbsp;·&nbsp; ${t.totalPoints} poin &nbsp;·&nbsp; ${s}
            </div>
          </div>
        </div>
        <button class="btn-resume" id="btn-resume-game">▶ Lanjutkan</button>
        <button class="btn-new-checkpoint" id="btn-discard-checkpoint" title="Mulai baru">✕</button>
      </div>
    `,document.getElementById("btn-resume-game").onclick=()=>{Sd(),$r(t)},document.getElementById("btn-discard-checkpoint").onclick=()=>{Md(),i.classList.add("hidden")}}else i&&i.classList.add("hidden");_e("profile-screen").classList.remove("hidden")}function Sd(){_e("profile-screen").classList.add("hidden")}function Cx(n){const e=_e("synopsis-screen");e.classList.remove("hidden");const t=[{tag:"Bagian 1 dari 3",title:"Industri Etanol di Desa Bekonang",text:"Industri etanol di Desa Bekonang, Sukoharjo, adalah warisan <strong>turun-temurun</strong> yang sudah ada sejak zaman kolonial. Banyak pabrik di sini memproduksi minuman keras tradisional bernama <strong>ciu</strong> dibuat dari tetes tebu, tape singkong, atau nira aren melalui proses fermentasi dan penyulingan.<br><br>Seiring waktu, industri ini berkembang menjadi produksi <strong>etanol medis</strong> yang digunakan untuk kebutuhan rumah sakit dan dunia kesehatan."},{tag:"Bagian 2 dari 3",title:"Masalah: Limbah Vinasse",text:"Proses produksi etanol menghasilkan limbah cair bernama <strong>vinasse</strong>. Setiap harinya, satu pabrik bisa menghasilkan <strong>150–200 liter</strong> limbah ini tanpa sistem pengolahan yang memadai.<br><br>Vinasse berwarna <strong>hitam pekat</strong>, berbau menyengat, dan sangat berbahaya jika dibuang langsung ke sungai. Vinasse <strong>menyerap oksigen</strong> di dalam air, menyebabkan ikan-ikan mati dan sungai tercemar parah."},{tag:"Bagian 3 dari 3",title:"Solusi: Vinasse → Pupuk Organik Cair",text:"Kabar baiknya, limbah vinasse bisa diolah menjadi <strong>Pupuk Organik Cair (POC)</strong>! Caranya dengan menambahkan <strong>mikroorganisme berupa ragi</strong> ke dalam vinasse yang sudah diaerasi minimal 24 jam.<br><br>Setelah ditumbuhkan selama <strong>15 hari</strong> dalam bak terbuka beraeasi, limbah berubah menjadi pupuk: tidak berbau asam, berwarna coklat muda. Diaplikasikan ke tanaman dengan perbandingan <strong>1 : 10</strong> (POC : air). Ukur kadar COD, BOD, dan pH untuk memastikan kualitasnya!"}];let i=0,a=!1,s=null;const r=_e("syn-seg-tag"),o=_e("syn-seg-title"),l=_e("syn-seg-text"),d=_e("syn-dots"),c=_e("btn-syn-prev"),p=_e("btn-syn-next"),f=_e("btn-syn-skip"),h=_e("synopsis-content-panel"),g=_e("syn-mouth");function x(){m(),s=setInterval(()=>{a=!a,g&&g.setAttribute("d",a?"M84 124 Q100 144 116 124":"M84 126 Q100 138 116 126")},280)}function m(){s&&(clearInterval(s),s=null),g&&g.setAttribute("d","M84 126 Q100 138 116 126")}function u(){m(),e.classList.add("hidden"),n()}function v(b){const _=t[b];h.classList.remove("synopsis-slide"),h.offsetWidth,h.classList.add("synopsis-slide"),r.textContent=_.tag,o.textContent=_.title,l.innerHTML=_.text,d.innerHTML=t.map((L,M)=>`<span class="synopsis-dot ${M===b?"active":""}"></span>`).join(""),c.style.display=b===0?"none":"",p.textContent=b===t.length-1?"🚀 Mulai Petualangan →":"Lanjutkan →",x()}v(0),c.onclick=()=>{i>0&&v(--i)},p.onclick=()=>{i<t.length-1?v(++i):u()},f.onclick=()=>u()}const ws=[{id:"c4gsn1rkK1g",title:"Video Edukasi: Limbah Vinasse & Dampak Lingkungan",subtitle:"Pelajari dampak pencemaran vinasse terhadap lingkungan sekitar"}];let Ed=!1;const Td=[];window.onYouTubeIframeAPIReady=()=>{Ed=!0,Td.splice(0).forEach(n=>n())};function Rx(){return new Promise(n=>{if(Ed){n();return}if(Td.push(n),!document.getElementById("yt-api-script")){const e=document.createElement("script");e.id="yt-api-script",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}function Px(n){const e=_e("youtube-screen");e.classList.remove("hidden");let t=0,i=null;function a(){const r=e.querySelector(".youtube-frame-wrap");r.innerHTML='<div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>'}function s(r){const o=ws[r];_e("yt-title").textContent=o.title,_e("yt-subtitle").textContent=o.subtitle,_e("yt-counter").textContent=`${r+1} / ${ws.length}`;const l=_e("btn-yt-next");l.textContent=r<ws.length-1?"Video Berikutnya →":"Lanjutkan ke Simulasi →",l.disabled=!1,l.title="",i&&(i.destroy(),i=null),a(),Rx().then(()=>{i=new YT.Player("yt-player-container",{videoId:o.id,playerVars:{rel:0,modestbranding:1,playsinline:1},events:{}})})}s(0),_e("btn-yt-next").onclick=()=>{t+=1,t<ws.length?s(t):(i&&(i.destroy(),i=null),e.classList.add("hidden"),n())}}function Dx(n){const e=_e("intro-video-screen");e.classList.remove("hidden"),qx(),$x();const t=_e("intro-3d-canvas"),i=window.innerWidth,a=window.innerHeight,s=new wo({canvas:t,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,a,!1),s.shadowMap.enabled=!0,s.shadowMap.type=mo;const r=new da;r.background=new We(8900331),r.fog=new Ha(12114160,90,210);const o=new Kt(50,i/a,.1,300);o.position.set(0,65,75),o.lookAt(0,0,0),r.add(new fd(10409208,5929536,1.2));const l=new Mn(16775136,2.8);l.position.set(40,80,50),l.castShadow=!0,l.shadow.mapSize.setScalar(2048),l.shadow.camera.left=l.shadow.camera.bottom=-90,l.shadow.camera.right=l.shadow.camera.top=90,l.shadow.camera.far=220,r.add(l);const d=new Mn(11587839,.45);d.position.set(-30,25,-20),r.add(d),r.add(new C(new at(190,16,8),new St({color:6991584,side:Vt})));function c(D,le=.78,fe=0,K,R){const $={color:D,roughness:le,metalness:fe};return K!==void 0&&($.emissive=K,$.emissiveIntensity=R||.2),new ie($)}function p(D,le,fe,K,R,$,oe){const Se=new C(new re(K,R,$),oe);return Se.position.set(D,le+R*.5,fe),Se.castShadow=!0,Se.receiveShadow=!0,r.add(Se),Se}function f(D,le,fe,K,R,$,oe,Se){const Ee=new C(new xe(K,R,$,oe),Se);return Ee.position.set(D,le+$*.5,fe),Ee.castShadow=!0,Ee.receiveShadow=!0,r.add(Ee),Ee}function h(D,le,fe,K,R,$=.84){const oe=new C(new wt(fe,K),new ie({color:R,transparent:!0,opacity:$,roughness:.04,metalness:.18}));return oe.rotation.x=-Math.PI/2,oe.position.set(D,.22,le),r.add(oe),oe}function g(D,le,fe,K,R,$,oe=5596791,Se=.24){const Ee=new k(D,le,fe),se=new k(K,R,$),ye=se.clone().sub(Ee),lt=ye.length();if(lt<.05)return;const gt=new C(new xe(Se,Se,lt,8),c(oe,.45,.65));gt.position.copy(Ee.clone().add(se).multiplyScalar(.5)),gt.quaternion.setFromUnitVectors(new k(0,1,0),ye.normalize()),r.add(gt)}const x=new C(new wt(260,260),c(8033368,.95));x.rotation.x=-Math.PI/2,x.receiveShadow=!0,r.add(x),p(6,-.05,1,82,.1,68,c(11708816,.88));const m=7,u=13,v=5,b=7,_=1.4,L=.36,M=D=>-21+D*b,E=[8008464,6965782,4872744,2977352,2127994,1608346,960716],I=[],y=[];for(let D=0;D<m;D++){const le=M(D),fe=E[D],K=c(8028272,.78);p(0,0,le-v/2,u*2+L*2,_,L,K),p(0,0,le+v/2,u*2+L*2,_,L,K),p(-u,0,le,L,_,v,K),p(u,0,le,L,_,v,K),p(0,-.25,le,u*2,.28,v,c(10524800,.88));const R=.76+D*.015,$=h(0,le,u*2-.1,v-.12,fe,R);if(I.push({mesh:$,baseOp:R}),D===3||D===4)for(let oe=-1;oe<=1;oe++){const Se=f(oe*7,.25,le,.75,.75,.28,12,c(11189196,.4,.55,3381708,.3));y.push(Se),p(oe*7,.28,le,.14,1,.14,c(8948121,.5,.5))}}const T=c(12761250,.88);for(let D=0;D<=m;D++){const le=-21-b/2+D*b;p(6,0,le,82,.12,2,T)}p(-20,0,1,2.2,.12,70,T),p(32,0,1,2.2,.12,70,T);for(let D=0;D<m-1;D++){const le=D%2===0?u+.5:-13.5,fe=M(D),K=M(D+1);p(le,0,(fe+K)*.5,2.2,_,Math.abs(K-fe)+.5,c(6977672,.65,.3))}p(-28,0,-30,12,5.5,8,c(5924984,.62,.1)),p(-28,5.5,-30,12.5,.55,8.5,c(3819608,.5));for(let D=-1.5;D<=1.5;D+=.65)p(-22.8,0,-30+D,.1,2.4,.1,c(3359829,.4,.7));p(-27,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9)),p(-29.5,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9));const N=-34,H=-30;f(N,0,H,1.1,.9,14,16,c(8952234,.38,.55)),f(N,14,H,1.2,1.2,.3,16,c(11189196,.35,.5)),[2,4.5,7.5,10.5,13].forEach(D=>{f(N,D,H,1.18,1.18,.18,16,c(10070715,.42,.6))}),g(N+1.1,1.2,H,-22,1.2,-30,4478310,.28),p(N-2.2,6,H,2.8,1.4,1.4,c(6977672,.55,.3)),g(N-1.1,6.5,H,N-1.8,6.5,H,5596791,.22);const ae=-24,P=-14,z=12,X=9;p(ae,0,P,z,1.5,X,c(7241328,.75)),p(ae,0,P,z-L*2,.24,X-L*2,c(10129544,.88));const ne=h(ae,P,z-.8,X-.8,5926976,.82);g(-22,.9,-28,-22,.9,-14,4478310,.3),g(-18.2,.9,-14,-13.2,.9,-21,4478310,.3),p(-28,0,8,8,4.5,6.5,c(6975600,.65,.1)),p(-28,4.5,8,8.5,.42,7,c(3817552,.5)),f(-25.5,4.9,6,.34,.34,4.5,10,c(8947864,.5,.3));for(let D=0;D<3;D++)g(-18.5,.8,-21+D*14,-21,.8,-21+D*14,4478310,.2);[-14,-6,2].forEach(D=>{p(-32+D*.3,0,32,6,.42,9.5,c(10522720,.93))});const Y=30,J=18,Z=10;f(Y,0,J,Z+.55,Z+.55,1.6,48,c(8030328,.7)),f(Y,0,J,Z,Z,1.6,48,c(8030328,.7)),f(Y,-.25,J,Z,Z,.28,48,c(10127472,.88));const V=new C(new dn(Z-.08,48),new ie({color:3057848,transparent:!0,opacity:.86,roughness:.04,metalness:.2}));V.rotation.x=-Math.PI/2,V.position.set(Y,.22,J),r.add(V),f(Y,1.6,J,.58,.58,3.8,10,c(5925495,.5,.5)),p(Y,1.6,J,Z*2-.3,.22,.38,c(8952234,.45,.4));const Q=new C(new Bn(4.5,2.8,32),c(5911312,.85));Q.rotation.x=Math.PI,Q.position.set(Y,.9,J),r.add(Q),g(u+.4,.9,M(6),Y-Z-.6,.9,J,4482696,.3),[[44,-10],[52,-10]].forEach(([D,le])=>{p(D,0,le,6.5,1.1,10,c(7899288,.7)),h(D,le,6,9.5,6728396,.82)}),f(58,0,-5,.95,.95,3.4,14,c(14544639,.32,.28,8930559,.4)),g(Y+Z+.5,.9,J,44,.9,-10,4482696,.28),g(48,.9,-10,52,.9,-10,4482696,.25),g(55.5,.9,-10,58,.9,-5,4482696,.25),p(58,0,16,.36,9,.36,c(10066602,.4,.6)),p(58,9,16,1.6,.9,1,c(13378082,.5,.3,16711680,.55));const O=new C(new at(.32,8,8),new ie({color:16720418,emissive:16711680,emissiveIntensity:2.5}));O.position.set(58,10.2,16),r.add(O);const te=[];for(let D=0;D<4;D++){const le=new C(new at(.22,6,6),new ie({color:2293691,emissive:52360,emissiveIntensity:1.8,transparent:!0,opacity:.9}));le.userData.i=D,r.add(le),te.push(le)}const j=h(72,8,18,60,2263227,.78);g(58,.9,-5,66,.9,0,4482696,.3);const me=new ie({color:7027210,roughness:.95}),he=[c(2981178,.9),c(3837764,.88),c(4888896,.85),c(2263098,.92),c(5474352,.87),c(1992226,.93)],Ce=[];for(let D=-58;D<=78;D+=6.5)Ce.push([D,-42]),Ce.push([D,44]);for(let D=-40;D<=42;D+=6.5)Ce.push([-58,D]),Ce.push([78,D]);[[-44,-22],[-46,-8],[-44,18],[-44,30],[56,-28],[58,-12],[56,10],[56,30],[-36,38],[-18,40],[2,40],[20,40],[38,40],[-36,-36],[-18,-38],[2,-38],[22,-38],[42,-36],[52,-36]].forEach(D=>Ce.push(D)),Ce.forEach(([D,le])=>{const fe=.85+Math.random()*.75,K=new C(new xe(.18*fe,.3*fe,2.2*fe,7),me);K.position.set(D,1.1*fe,le),K.castShadow=!0,r.add(K);const R=he[Math.floor(Math.random()*he.length)];if(Math.random()>.42){const $=new C(new at(1.5*fe,8,7),R);$.position.set(D,3.8*fe,le),$.castShadow=!0,r.add($)}else for(let $=0;$<3;$++){const oe=new C(new Bn((1.3-$*.28)*fe,1.3*fe,8),R);oe.position.set(D,(2.5+$*1.2)*fe,le),oe.castShadow=!0,r.add(oe)}});const Ne=new cd([new k(-23,.7,-30),new k(-23,.7,-21),new k(ae,.7,P),new k(-13,.7,-21),new k(0,.7,-21),new k(13,.7,-21),new k(14,.7,-17.5),new k(13,.7,-14),new k(0,.7,-14),new k(-13,.7,-14),new k(-14,.7,-10.5),new k(-13,.7,-7),new k(0,.7,-7),new k(13,.7,-7),new k(14,.7,-3.5),new k(13,.7,0),new k(0,.7,0),new k(-13,.7,0),new k(-14,.7,3.5),new k(-13,.7,7),new k(0,.7,7),new k(13,.7,7),new k(14,.7,10.5),new k(13,.7,14),new k(0,.7,14),new k(-13,.7,14),new k(-14,.7,17.5),new k(-13,.7,21),new k(0,.7,21),new k(13,.7,21),new k(22,.7,21),new k(Y,.7,J),new k(44,.7,-10),new k(58,.7,-5),new k(66,.7,0)]);function ze(D,le,fe){const K=D>>16&255,R=D>>8&255,$=D&255,oe=le>>16&255,Se=le>>8&255,Ee=le&255;return Math.round(K+(oe-K)*fe)<<16|Math.round(R+(Se-R)*fe)<<8|Math.round($+(Ee-$)*fe)}const nt=90,F=[];for(let D=0;D<nt;D++){const le=D/nt,fe=ze(8005632,1091800,le),K=D%3!==0,R=K?new Ao(.1+D%6*.04,.28+D%5*.07,20):new dn(.16+D%7*.03,12),$=new C(R,new ie({color:fe,emissive:fe,emissiveIntensity:K?.65:.3,roughness:.04,metalness:.1,transparent:!0,opacity:K?.72:.52,side:kt}));$.rotation.x=-Math.PI/2,$.userData.t=le,$.userData.ph=D*.618033%1,r.add($),F.push($)}const Pt=[],Ie=50,Ge=[[-7,0],[0,0],[7,0],[-7,7],[0,7],[7,7]];for(let D=0;D<Ie;D++){const le=Ge[D%Ge.length],fe=new C(new at(.07+Math.random()*.09,5,5),new ie({color:12118271,transparent:!0,opacity:.72}));fe.userData.phase=D/Ie*Math.PI*2,fe.userData.ox=le[0]+(Math.random()-.5)*10,fe.userData.oz=le[1]+(Math.random()-.5)*(v-1),r.add(fe),Pt.push(fe)}const Le=[],ft=28;for(let D=0;D<ft;D++){const le=new C(new at(.14,5,5),new ie({color:7025425,transparent:!0,opacity:.78}));le.userData.phase=D/ft,le.userData.ang=Math.random()*Math.PI*2,le.userData.r=1.5+Math.random()*(Z-3),r.add(le),Le.push(le)}const $e=[],A=36;for(let D=0;D<A;D++){const le=new C(new at(.3+Math.random()*.22,7,7),new ie({color:15661311,emissive:11197934,emissiveIntensity:.18,transparent:!0,opacity:.55,roughness:.85}));le.userData.life=D/A,le.userData.ox=(Math.random()-.5)*1.2,le.userData.oz=(Math.random()-.5)*1.2,r.add(le),$e.push(le)}const w=[],B=22;for(let D=0;D<B;D++){const le=new C(new at(.26,5,5),new ie({color:11184810,transparent:!0,opacity:.38}));le.userData.life=D/B,le.userData.ox=(Math.random()-.5)*.6,le.userData.oz=(Math.random()-.5)*.6,r.add(le),w.push(le)}const ue=[],ce=12;for(let D=0;D<ce;D++){const le=new C(new at(.13,5,5),new ie({color:14548872,transparent:!0,opacity:.88}));le.userData.phase=D/ce,le.userData.ox=(Math.random()-.5)*3.5,r.add(le),ue.push(le)}function pe(D,le,fe=56,K=32){const R=document.createElement("canvas"),$=R.getContext("2d");R.width=768,R.height=320,$.fillStyle="rgba(0, 0, 0, 0.7)",$.fillRect(0,0,R.width,R.height),$.font=`bold ${fe}px Arial`,$.fillStyle="#2ecc71",$.textAlign="center",$.textBaseline="top",$.fillText(D,R.width/2,20),$.font=`${K}px Arial`,$.fillStyle="#a8d8a8";const oe=K+8,Se=R.width-40,Ee=le.split(" ");let se="",ye=fe+30;Ee.forEach(Dt=>{const Qt=se+(se?" ":"")+Dt;$.measureText(Qt).width>Se&&se?($.fillText(se,R.width/2,ye),se=Dt,ye+=oe):se=Qt}),se&&$.fillText(se,R.width/2,ye),$.strokeStyle="#2ecc71",$.lineWidth=2,$.strokeRect(10,10,R.width-20,R.height-20);const lt=new Ga(R),gt=new Hn({map:lt,sizeAttenuation:!0}),st=new si(gt);return st.scale.set(10,4.2,1),st}[{title:"🏭 Bangunan Penyaringan",desc:"Fasilitas awal yang menyaring limbah dari sumber. Bar screen mengalirkan limbah mentah ke bak ekualisasi.",pos:[-28,9,-30]},{title:"🍷 Kolom Penyulingan",desc:"Proses pemisahan etanol dari limbah vinasse melalui pemanasan dan kondensasi.",pos:[-34,14.5,-30]},{title:"🪣 Bak Ekualisasi",desc:"Menyeimbangkan pH, suhu, dan debit limbah agar stabil sebelum proses biologis.",pos:[ae,4,P]},{title:"⚡ Stasiun Pompa",desc:"Memompa limbah dari bak ekualisasi ke sistem aerasi untuk pengolahan lanjutan.",pos:[-28,6,8]},{title:"⚙️ Bak Aerasi",desc:"Menginjeksi oksigen melalui aerator untuk mendukung pertumbuhan bakteri pengurai limbah.",pos:[0,4,0]}].forEach(D=>{const le=pe(D.title,D.desc,52,28);le.position.set(D.pos[0],D.pos[1],D.pos[2]),r.add(le)});const ge=[{tag:"Tahap 1 dari 5",title:"Penampungan Awal (Bak Ekualisasi)",subtitle:"Equalization Basin",waterQuality:5,camPos:[-40,32,-36],camLook:[-24,0,-24],desc:"Limbah vinasse yang pekat dari industri etanol dialirkan dan ditampung terlebih dahulu di bak penampungan awal IPAL Ciunik. Pada tahap ini, dilakukan penyamaan atau stabilisasi debit, suhu, dan tingkat keasaman (pH) limbah agar kondisinya ideal dan tidak merusak sistem pengolahan di tahap selanjutnya."},{tag:"Tahap 2 dari 5",title:"Proses Aerasi (Injeksi Oksigen)",subtitle:"Aeration Process",waterQuality:28,camPos:[-10,28,-10],camLook:[0,0,0],desc:"Setelah stabil, limbah dialirkan ke dalam bak aerasi. Di dalam bak ini, air limbah dipompa dan disuplai dengan gelembung udara (oksigen) secara terus-menerus menggunakan mesin aerator. Oksigen ini sangat krusial untuk menjaga agar kondisi air tetap kaya oksigen terlarut."},{tag:"Tahap 3 dari 5",title:"Penambahan Mikroorganisme (Bakteri Pengurai)",subtitle:"Biological Treatment",waterQuality:55,camPos:[8,32,16],camLook:[6,0,2],desc:"Bersamaan dengan suplai oksigen yang melimpah, ditambahkan mikroorganisme aerobik (bakteri pengurai) ke dalam bak aerasi. Mikroorganisme ini bekerja dengan cara menguraikan polutan serta zat-zat organik berbahaya yang terkandung dalam vinasse, mengubahnya menjadi pupuk organik cair."},{tag:"Tahap 4 dari 5",title:"Pengendapan (Clarifier)",subtitle:"Secondary Clarifier",waterQuality:80,camPos:[32,28,28],camLook:[30,0,18],desc:"Setelah zat organik hancur terurai, campuran air limbah dan mikroorganisme dialirkan ke bak pengendap. Gumpalan bakteri dan sisa kotoran akan dibiarkan mengendap ke dasar bak, sementara air yang sudah jernih akan terpisah dan naik ke permukaan."},{tag:"Tahap 5 dari 5",title:"Pelepasan Air Bersih (Output)",subtitle:"Clean Water Discharge",waterQuality:100,camPos:[62,30,30],camLook:[54,0,14],desc:"Air hasil pemisahan tersebut kini memiliki kadar polutan (seperti BOD dan COD) yang sangat rendah dan sudah memenuhi standar baku mutu lingkungan. Air ini dapat dikembalikan atau dilepas ke alam tanpa mencemari ekosistem sekitarnya atau dimanfaatkan menjadi pupuk organik cair."}],Ae=_e("intro-stage-label");let Oe=-1;const Ye=11,de=Ye*ge.length;function ot(D){return D<.5?2*D*D:-1+(4-2*D)*D}function Je(D,le,fe){return[D[0]+(le[0]-D[0])*fe,D[1]+(le[1]-D[1])*fe,D[2]+(le[2]-D[2])*fe]}let He=null;const De=new gd,ke=_e("btn-intro-continue");ke.disabled=!1;function qe(){He=requestAnimationFrame(qe);const D=De.getElapsedTime(),fe=D%de/Ye,K=Math.min(Math.floor(fe),ge.length-1),R=fe-Math.floor(fe),$=(K+ge.length-1)%ge.length,oe=.15;let Se,Ee;if(R<oe){const se=ot(R/oe);Se=Je(ge[$].camPos,ge[K].camPos,se),Ee=Je(ge[$].camLook,ge[K].camLook,se)}else{const se=ge[K].camPos,ye=ge[K].camLook;Se=[se[0]+Math.sin(D*.26)*1.4,se[1]+Math.sin(D*.19)*.6,se[2]+Math.cos(D*.22)*1.1],Ee=[...ye]}if(o.position.set(Se[0],Se[1],Se[2]),o.lookAt(Ee[0],Ee[1],Ee[2]),K!==Oe&&Ae){Oe=K;const se=ge[K],ye=se.waterQuality,lt=ye<40?"#e05020":ye<75?"#d4aa20":"#22bb55";Ae.innerHTML=`<div class="sl-tag">${se.tag}</div><div class="sl-title">${se.title}</div><div class="sl-subtitle">${se.subtitle}</div><div class="sl-desc">${se.desc}</div><div class="sl-wq"><span style="font-size:11px;opacity:.75;margin-right:6px">Kualitas Air</span><div class="sl-wq-bar"><div class="sl-wq-fill" style="width:${ye}%;background:${lt}"></div></div><span class="sl-wq-val" style="color:${lt}">${ye}%</span></div><div class="sl-dots">${ge.map((gt,st)=>`<span class="sl-dot${st===K?" active":""}"></span>`).join("")}</div>`}F.forEach(se=>{se.userData.t=(se.userData.t+.00145)%1;const ye=se.userData.t;se.position.copy(Ne.getPoint(ye)),se.position.y=.27;const lt=(se.userData.ph+D*.32)%1;se.scale.setScalar(.4+lt*2.2),se.material.opacity=Math.max(0,.8-lt*.88);const gt=ze(8005632,1091800,ye);se.material.color.setHex(gt),se.material.emissive.setHex(gt)}),Pt.forEach(se=>{const ye=(D*.82+se.userData.phase)%(Math.PI*2)/(Math.PI*2);se.position.set(se.userData.ox,.22+ye*1.55,se.userData.oz),se.material.opacity=ye<.72?.7:(1-ye)*4.5}),Le.forEach(se=>{const ye=(D*.22+se.userData.phase)%1;se.position.set(Y+Math.cos(se.userData.ang+D*.04)*se.userData.r,1.3-ye*1.2,J+Math.sin(se.userData.ang+D*.04)*se.userData.r),se.material.opacity=ye>.75?(1-ye)*5:.72}),y.forEach((se,ye)=>{se.rotation.y=D*(1.5+ye%3*.4)}),$e.forEach(se=>{se.userData.life=(se.userData.life+.0048)%1;const ye=se.userData.life;se.position.set(N+se.userData.ox+Math.sin(ye*4.2+D*.7)*.55,14.3+ye*8,H+se.userData.oz+Math.cos(ye*3.5+D*.5)*.55),se.scale.setScalar(.5+ye*2.8),se.material.opacity=Math.max(0,.55-ye*.62)}),w.forEach(se=>{se.userData.life=(se.userData.life+.0036)%1;const ye=se.userData.life;se.position.set(-25.5+se.userData.ox+Math.sin(ye*3.5+D)*.5,4.9+ye*5.5,6+se.userData.oz+Math.cos(ye*2.8+D*.6)*.4),se.material.opacity=Math.max(0,(1-ye)*.4),se.scale.setScalar(.18+ye*1.25)}),ue.forEach(se=>{const ye=(D*1.05+se.userData.phase)%1;se.position.set(58+se.userData.ox,3.8-ye*4.5,-5),se.material.opacity=.88*(1-ye)}),O.material.emissiveIntensity=1.2+1.5*Math.sin(D*5.8),te.forEach(se=>{const ye=(D*.58+se.userData.i*.25)%1;se.position.set(58+ye*14,10.2+Math.sin(ye*Math.PI)*5,16+ye*6),se.material.opacity=(1-ye)*.88}),I.forEach(se=>{se.mesh.material.opacity=se.baseOp+.03*Math.sin(D*.75+se.baseOp*14)}),V.material.opacity=.84+.05*Math.sin(D*1.05),ne.material.opacity=.8+.04*Math.sin(D*.68),j.material.opacity=.75+.06*Math.sin(D*.88),s.render(r,o)}qe(),_e("btn-intro-continue").onclick=()=>{cancelAnimationFrame(He),s.dispose(),e.classList.add("hidden"),n()}}function Ad(n){_e("instructions-screen").classList.remove("hidden");const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=_e("instr-controls-text");t&&(t.innerHTML=e?"Gunakan <strong>joystick virtual</strong> di kiri bawah layar untuk bergerak. Dekati objek bercahaya lalu ketuk tombol <strong>E</strong> di kanan bawah untuk berinteraksi.":"Gunakan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> atau tombol panah untuk bergerak. Dekati objek bercahaya lalu tekan <kbd>E</kbd> untuk berinteraksi.");const i=_e("instr-level-guide");if(i){const a=[{num:1,icon:"🔬",name:"Lab Sains",desc:"Amati 3 fenomena pencemaran vinasse di laboratorium dan jawab pertanyaan ilmiah."},{num:2,icon:"🏭",name:"Pabrik Etanol",desc:"Kunjungi 3 stasiun pabrik, lakukan simulasi pengolahan COD/BOD/pH secara interaktif."},{num:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme yang tepat di toko, hitung dosis, lalu buka kran vinasse."},{num:4,icon:"🔧",name:"Membuat Reaktor Sederhana",desc:"Rancang prototype reaktor IPAL: pilih alat & bahan, ikuti prosedur, evaluasi hasilnya."},{num:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis kegagalan reaktor dari Level 4 dan jawab soal evaluasi mikroskop."}];i.innerHTML=a.map(s=>`
      <div class="level-guide-card">
        <span class="lg-icon">${s.icon}</span>
        <div><strong>Level ${s.num} – ${s.name}</strong><div class="lg-desc">${s.desc}</div></div>
      </div>
    `).join("")}_e("btn-start-game").onclick=()=>{_e("instructions-screen").classList.add("hidden"),n()}}function _c(){Ad(()=>{});const n=_e("btn-start-game");n.textContent="✕ Tutup Petunjuk"}function Ix(){Wt(),_e("btn-glossary").onclick=()=>uo(),_e("btn-instructions-hud").onclick=()=>_c();const n=document.getElementById("btn-instructions-hud-mobile"),e=document.getElementById("btn-glossary-mobile"),t=document.getElementById("btn-pause-menu-mobile");n&&n.addEventListener("touchstart",i=>{i.preventDefault(),_c()},{passive:!1}),e&&e.addEventListener("touchstart",i=>{i.preventDefault(),uo()},{passive:!1}),t&&t.addEventListener("touchstart",i=>{i.preventDefault(),_e("btn-pause-menu").click()},{passive:!1})}function Ux(n,e,t){const i=_e("pause-menu-overlay");_e("btn-pause-menu").onclick=()=>{const a=Co(),s=_e("pause-checkpoint-info"),r=_e("btn-pm-resume");if(a){const o=new Date(a.savedAt),l=o.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+o.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});s.innerHTML=`💾 Checkpoint tersimpan: <strong>${a.playerName}</strong> · Level ${a.currentLevel} · ${a.totalPoints} poin<br><small style="color:#aaa">${l}</small>`,r.disabled=!1,r.title=""}else s.innerHTML='<span style="color:#aaa">Belum ada checkpoint tersimpan.</span>',r.disabled=!0,r.title="Tidak ada checkpoint tersimpan";i.classList.remove("hidden")},_e("btn-pm-continue").onclick=()=>{i.classList.add("hidden")},_e("btn-pm-resume").onclick=()=>{i.classList.add("hidden"),n()},_e("btn-pm-newgame").onclick=()=>{confirm("Yakin ingin memulai ulang? Semua progres sesi ini akan hilang.")&&(i.classList.add("hidden"),e())},_e("btn-pm-experiment").onclick=()=>{i.classList.add("hidden"),Do()},_e("btn-pm-change-level").onclick=()=>{i.classList.add("hidden"),zx(a=>{t&&t(a)})},i.addEventListener("click",a=>{a.target===i&&i.classList.add("hidden")})}function Wt(){_e("hud-player").textContent=ee.playerName||"Pemain",_e("hud-level").textContent=`Level ${ee.currentLevel}`,_e("hud-points").textContent=ee.totalPoints;const n=_e("hud-attempts");n.innerHTML="";for(let e=0;e<3;e++){const t=document.createElement("div");t.className="attempt-dot"+(e<ee.levelAttempts?" used":""),n.appendChild(t)}}function Io(n){const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;let t=_e("interact-prompt");t||(t=document.createElement("div"),t.id="interact-prompt",t.style.cssText=`
      position:fixed; bottom:${e?"200px":"120px"}; left:50%; transform:translateX(-50%);
      background:rgba(10,20,40,0.88); color:#fff; padding:10px 22px;
      border-radius:24px; font-size:15px; pointer-events:none;
      border:2px solid #00d4ff; box-shadow:0 0 18px #00d4ff88;
      transition:opacity 0.25s; z-index:200; white-space:nowrap;
    `,document.body.appendChild(t)),e&&n&&(n=n.replace(/Tekan <kbd>E<\/kbd>/g,"👆 Ketuk tombol <b>E</b>")),n?(t.innerHTML=n,t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},260))}function Nx(n,e,t){const i=_e("stage-screen");i.classList.remove("hidden"),i.style.pointerEvents="all",ee.phenomenonIndex=n,kd(n,()=>{i.classList.add("hidden"),i.style.pointerEvents="none",e&&e()},()=>{i.classList.add("hidden"),i.style.pointerEvents="none",t&&t()},!0)}function Sa(n){var t;ee.levelAttempts++,yd(ee.currentLevel);const e=((t=ee.levelBreakdown.at(-1))==null?void 0:t.points)??0;Wx(e,"🏠 Kembali ke Pilihan Ruangan →",()=>{hx(),Wt(),n&&n()})}const Ox=[{level:1,icon:"🔬",name:"Lab Sains",desc:"Analisis fenomena pencemaran vinasse melalui kuis MCQ",color:"#2980b9"},{level:2,icon:"🏭",name:"Pabrik Etanol",desc:"Simulasi pengukuran COD, BOD & pH limbah vinasse",color:"#e67e22"},{level:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme & buka kran bioremediasi",color:"#27ae60"},{level:4,icon:"⚙️",name:"Membuat Reaktor Sederhana",desc:"Rancang reaktor pengolahan limbah IPAL",color:"#8e44ad"},{level:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis hasil reaktor & evaluasi akhir",color:"#c0392b"}];function zx(n){const e=document.createElement("div");e.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.85);
    display:flex;align-items:center;justify-content:center;
    z-index:9998;flex-direction:column;gap:20px;padding:40px 20px;
    font-family:system-ui,sans-serif;color:#fff;
  `;const t=document.createElement("div");t.style.cssText=`
    background:linear-gradient(160deg,#0d1b2a,#091525);border:1px solid rgba(60,140,220,.35);
    border-radius:18px;padding:32px 40px;text-align:center;max-width:600px;
  `,t.innerHTML=`
    <h2 style="margin:0 0 20px;font-size:24px;color:#a0d8ff">Pilih Level</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px">
      ${[1,2,3,4,5].map(a=>`
        <button data-level="${a}" style="
          padding:16px;border-radius:10px;border:2px solid rgba(60,140,220,.4);
          background:rgba(10,25,45,0.8);color:#7ec8ff;font-size:16px;font-weight:700;
          cursor:pointer;transition:all .2s;
        ">Level ${a}</button>
      `).join("")}
    </div>
  `,e.appendChild(t),document.body.appendChild(e),t.querySelectorAll("button[data-level]").forEach(a=>{a.onclick=()=>{e.remove(),n(parseInt(a.dataset.level))},a.onmouseover=()=>{a.style.borderColor="rgba(60,200,255,.7)",a.style.background="rgba(0,100,180,0.2)"},a.onmouseout=()=>{a.style.borderColor="rgba(60,140,220,.4)",a.style.background="rgba(10,25,45,0.8)"}});const i=document.createElement("button");i.style.cssText=`
    padding:10px 24px;border-radius:8px;border:1px solid rgba(255,255,255,.2);
    background:rgba(255,255,255,.08);color:#ccc;font-size:14px;cursor:pointer;
    transition:all .2s;
  `,i.textContent="✕ Batal",i.onmouseover=()=>{i.style.background="rgba(255,60,60,.18)",i.style.color="#fff"},i.onmouseout=()=>{i.style.background="rgba(255,255,255,.08)",i.style.color="#ccc"},i.onclick=()=>e.remove(),e.appendChild(i)}function Fx(n){const e=document.getElementById("room-select-overlay");e.classList.remove("hidden");function t(){const i=document.getElementById("room-select-grid");i.innerHTML=Ox.map(s=>{const r=ee.completedRooms.includes(s.level);return`
        <button class="room-card ${r?"room-card--done":""}" data-level="${s.level}"
          style="--room-color:${s.color}">
          <div class="room-card-icon">${s.icon}</div>
          <div class="room-card-body">
            <div class="room-card-name">Level ${s.level} — ${s.name}</div>
            <div class="room-card-desc">${s.desc}</div>
          </div>
          <div class="room-card-status">${r?"✅ Selesai":"▶ Mulai"}</div>
        </button>
      `}).join(""),document.getElementById("room-hub-points").textContent=`🪙 ${ee.totalPoints} poin`,document.getElementById("room-hub-progress").textContent=`${ee.completedRooms.length} / 5 ruangan selesai`,i.querySelectorAll(".room-card").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.level);e.classList.add("hidden"),n(r)})});let a=document.getElementById("room-hub-optional");a||(a=document.createElement("div"),a.id="room-hub-optional",a.style.cssText=`
        margin-top:14px;padding-top:12px;
        border-top:1px solid rgba(255,255,255,.08);
      `,i.parentElement.insertBefore(a,i.nextSibling)),a.innerHTML=`
      <div style="font-size:11px;font-weight:700;color:#4a6080;text-transform:uppercase;
                  letter-spacing:.06em;margin-bottom:8px">
        ⬇ Opsional
      </div>
      <button id="btn-room-upload-exp" style="
        width:100%;display:flex;align-items:center;gap:14px;
        background:rgba(21,101,192,.12);border:1px solid rgba(100,160,255,.25);
        border-radius:12px;padding:12px 16px;cursor:pointer;text-align:left;
        color:#7eb8ff;transition:background .18s;">
        <div style="font-size:26px;line-height:1">📋</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:700;margin-bottom:2px">Upload Hasil Percobaan Nyata</div>
          <div style="font-size:12px;color:#4a7090">
            Isi tabel data kelompokmu dari percobaan di laboratorium — tidak mempengaruhi poin
          </div>
        </div>
        <div style="font-size:12px;color:#2a6090;white-space:nowrap">📤 Opsional</div>
      </button>
    `,a.querySelector("#btn-room-upload-exp").onmouseenter=function(){this.style.background="rgba(21,101,192,.22)"},a.querySelector("#btn-room-upload-exp").onmouseleave=function(){this.style.background="rgba(21,101,192,.12)"},a.querySelector("#btn-room-upload-exp").onclick=()=>{e.classList.add("hidden"),Do()}}t(),e._refresh=t}function Bx(){var t;yd(ee.currentLevel),yx({playerName:ee.playerName,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedAt:new Date().toISOString(),essayAnswer:((t=ee.stage5)==null?void 0:t.essayAnswer)||""}),Md();const n=ee.levelBreakdown.map(i=>`
    <tr>
      <td style="text-align:left;padding:6px 12px;color:#ccc">${i.label}</td>
      <td style="text-align:right;padding:6px 12px;font-weight:700;color:#ffe040">+${i.points}</td>
    </tr>
  `).join(""),e=document.createElement("div");e.id="game-complete-overlay",e.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    z-index:9999;font-family:system-ui,sans-serif;color:#fff;text-align:center;
    animation:fadeIn .5s ease;overflow-y:auto;padding:20px 0;
  `,e.innerHTML=`
    <div style="max-width:560px;width:92%;padding:36px 32px;
          background:linear-gradient(135deg,#1a2a1a,#0d1a10);
          border-radius:20px;border:2px solid #2ecc71;box-shadow:0 0 60px rgba(46,204,113,.4)">
      <div style="font-size:64px;margin-bottom:8px">🏆</div>
      <h1 style="font-size:26px;margin:0 0 6px;color:#2ecc71">Selamat, Kamu Menyelesaikan<br>3D BIOVINE!</h1>
      <p style="font-size:14px;color:#aaa;margin:0 0 20px">
        Kamu telah berhasil mengolah limbah vinasse menjadi<br>
        <strong style="color:#ffe040">Pupuk Organik Cair (POC)</strong> yang bermanfaat 🌿
      </p>

      <!-- Per-level breakdown -->
      <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px;margin-bottom:20px;text-align:left">
        <div style="font-size:13px;font-weight:700;color:#2ecc71;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em">📊 Rincian Poin per Level</div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tbody>
            ${n}
          </tbody>
          <tfoot>
            <tr style="border-top:1px solid rgba(255,255,255,.15)">
              <td style="text-align:left;padding:8px 12px;font-weight:700;color:#fff">Total</td>
              <td style="text-align:right;padding:8px 12px;font-size:22px;font-weight:700;color:#ffe040">${ee.totalPoints}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button id="btn-gc-restart" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;
          box-shadow:0 4px 16px rgba(46,204,113,.4)">
          🔄 Main Lagi dari Awal
        </button>
        <button id="btn-gc-experiment" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;
          border:1px solid rgba(100,160,255,.35);box-shadow:0 4px 16px rgba(21,101,192,.35)">
          📋 Upload Hasil Percobaan
        </button>
        <button id="btn-gc-close" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)">
          ✕ Tutup
        </button>
      </div>
    </div>
    <style>@keyframes fadeIn{from{opacity:0}to{opacity:1}}</style>
  `,document.body.appendChild(e),e.querySelector("#btn-gc-close").onclick=()=>{e.remove(),Wt()},e.querySelector("#btn-gc-restart").onclick=()=>{e.remove(),window.location.reload()},e.querySelector("#btn-gc-experiment").onclick=()=>{Do()}}function kd(n,e,t,i=!1){const a=wa.phenomena[n],s=_e("stage-screen");ee.wrongAnswers=0;const r=s.querySelector(".stage-panel");r&&r.remove();const o=document.createElement("div");o.className="stage-panel fade-in",o.innerHTML=`
    <div class="phenomenon-header">
      <span class="phenomenon-badge">${a.title}</span>
      <div class="header-right">
        <span class="timer-display" id="timer-${n}">⏱️ 2:00</span>
        ${i?"":`<span class="question-progress">${n+1} / ${wa.phenomena.length}</span>`}
      </div>
      ${t?'<button class="panel-close-btn" id="panel-close-btn" title="Tutup">✕</button>':""}
    </div>
    ${i?"":`
    <div class="progress-bar-wrap">
      ${wa.phenomena.map((v,b)=>`<div class="prog-dot ${b<n?"done":b===n?"active":""}"></div>`).join("")}
    </div>`}
  `,t&&setTimeout(()=>{const v=o.querySelector("#panel-close-btn");v&&(v.onclick=()=>{clearInterval(f),t()})},0);const l=document.createElement("div");if(l.className="question-text",l.innerHTML=a.context,o.appendChild(l),a.image){const v=document.createElement("div");v.style.cssText="text-align:center;margin:10px 0";const b=document.createElement("img");b.src=a.image,b.alt=a.title||"Gambar soal",b.style.cssText="max-width:100%;max-height:260px;border-radius:10px;border:2px solid rgba(255,255,255,.15);object-fit:contain",v.appendChild(b),o.appendChild(v)}a.tableData&&o.appendChild(Hx(a.tableData)),a.standardTable&&o.appendChild(Gx(a.standardTable)),a.riceGraph&&o.appendChild(Vx());const d=document.createElement("div");d.className="question-text",d.style.marginTop="4px",d.style.borderLeftColor="#e67e22",d.innerHTML=`<strong>❓ Pertanyaan:</strong><br>${a.question}`,o.appendChild(d);const c=document.createElement("div");c.className="answer-options";let p=120,f=null;function h(v){const b=Math.floor(v/60),_=v%60;return`⏱️ ${b}:${_.toString().padStart(2,"0")}`}function g(){const v=o.querySelector(`#timer-${n}`);v&&(v.textContent=h(p),p<=10&&(v.style.color="#ff5555")),p--,p<0&&(clearInterval(f),x||(x=!0,c.querySelectorAll(".answer-btn").forEach(b=>b.disabled=!0),ee.totalPoints+=0,Wt(),Yr(o,!1,"❌ Waktu habis! Nilai: 0 poin"),u.classList.add("visible")))}f=setInterval(g,1e3);let x=!1;a.options.forEach(v=>{const b=document.createElement("button");b.className="answer-btn",b.innerHTML=`<strong>${v.label}.</strong> ${v.text}`,b.dataset.correct=v.correct,b.onclick=()=>{if(!x)if(v.correct){x=!0,clearInterval(f),b.classList.add("correct");const _=ee.wrongAnswers===0?100:ee.wrongAnswers<=1?50:25;ee.totalPoints+=_,Wt(),Yr(o,!0,a.explanation+`<br><strong>+${_} poin!</strong>`),u.classList.add("visible"),c.querySelectorAll(".answer-btn").forEach(L=>L.disabled=!0)}else b.classList.add("wrong"),b.disabled=!0,ee.wrongAnswers++,Wt(),Yr(o,!1,"❌ Jawaban kurang tepat. Coba pilihan lain!")},c.appendChild(b)}),o.appendChild(c);const m=document.createElement("div");m.className="feedback-box",m.id="feedback-box",o.appendChild(m);const u=document.createElement("button");u.className="next-btn",u.textContent=i?"✅ Selesai":n<wa.phenomena.length-1?"Fenomena Berikutnya →":"✅ Selesai Level 1",u.onclick=()=>{clearInterval(f),i||n>=wa.phenomena.length-1?(s.classList.add("hidden"),s.style.pointerEvents="none",e&&e()):(ee.phenomenonIndex++,kd(ee.phenomenonIndex,e,t,!1))},o.appendChild(u),s.appendChild(o)}function Yr(n,e,t){const i=n.querySelector("#feedback-box");i&&(i.className="feedback-box "+(e?"correct":"wrong"),i.innerHTML=t)}function Hx(n){const e=document.createElement("div");e.className="data-table-wrap";let t='<table class="data-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+=`<tr><td><strong>${i.label}</strong></td>`,i.values.forEach((a,s)=>{const r=i.classes[s]?` class="${i.classes[s]}"`:"";t+=`<td${r}>${a}</td>`}),t+="</tr>";return t+="</tbody></table>",n.note&&(t+=`<div class="info-label" style="margin-top:6px">📌 ${n.note}</div>`),e.innerHTML=t,e}function Gx(n){const e=document.createElement("div");e.className="std-table-wrap";let t=`<div class="info-label" style="margin-bottom:6px">📋 ${n.title}</div>`;t+='<table class="std-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+="<tr>"+i.map(a=>`<td>${a}</td>`).join("")+"</tr>";return t+="</tbody></table>",e.innerHTML=t,e}function Vx(){const n=document.createElement("div");n.className="rice-graph-wrap";const e=document.createElement("img");return e.src="rice-graph.png",e.alt="Grafik produktivitas panen padi",e.style.cssText="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;",n.appendChild(e),n}function Wx(n,e,t){const i=_e("result-overlay");i.classList.remove("hidden");const a=n>=75;_e("result-icon").textContent=a?"🎉":n>=50?"👍":"💡",_e("result-title").textContent=a?"Luar Biasa!":n>=50?"Bagus!":"Terus Belajar!",_e("result-score").textContent=`+${n} poin`,_e("result-total").textContent=`Total: ${ee.totalPoints} poin`;const s=ee.levelAttempts,r=s===1?"🥇 Berhasil di percobaan pertama!":s===2?"🥈 Berhasil di percobaan ke-2.":"🥉 Berhasil di percobaan ke-3.";_e("result-attempts").textContent=r;const o=_e("btn-result-continue");o.textContent=e,o.onclick=()=>{i.classList.add("hidden"),t()}}function uo(){_e("glossary-modal").classList.toggle("hidden")}function Xx(){const n=_e("hud");n.innerHTML=`
    <div id="hud-bar">
      <div id="hud-left">
        <span id="hud-player">Pemain</span>
        <span id="hud-level">Level 1</span>
      </div>
      <div id="hud-center">
        <div class="progress-bar-wrap" id="level-progress">
          ${[1,2,3,4,5].map((t,i)=>`<div class="prog-dot ${i===0?"active":""}" title="Level ${t}"></div>`).join("")}
        </div>
      </div>
      <div id="hud-right">
        <span id="hud-points">0</span>
        <div id="hud-attempts"></div>
        <button id="btn-instructions-hud"><span class="btn-icon">📋</span><span class="btn-label"> Petunjuk</span></button>
        <button id="btn-glossary"><span class="btn-icon">📖</span><span class="btn-label"> Buku Saku</span></button>
        <button id="btn-pause-menu"><span class="btn-icon">⚙️</span><span class="btn-label"> Menu</span></button>
      </div>
    </div>
  `,n.style.display="none";const e=_e("ui-overlay");e.innerHTML=`
    <!-- PAUSE MENU MODAL -->
    <div id="pause-menu-overlay" class="hidden">
      <div id="pause-menu-card">
        <div id="pause-menu-title">⚙️ Menu Permainan</div>
        <div id="pause-checkpoint-info"></div>
        <button class="btn-pause-action" id="btn-pm-continue">▶ Lanjutkan Bermain</button>
        <button class="btn-pause-action btn-pause-checkpoint" id="btn-pm-resume">↩ Kembali ke Checkpoint</button>
        <button class="btn-pause-action btn-pause-newgame" id="btn-pm-newgame">🔄 Mulai Ulang (New Game)</button>
        <button class="btn-pause-action" id="btn-pm-experiment" style="background:rgba(21,101,192,.25);border-color:rgba(100,160,255,.4);color:#7ec8ff">📋 Upload Hasil Percobaan</button>
        <button class="btn-pause-action" id="btn-pm-change-level" style="background:rgba(180,100,20,.25);border-color:rgba(220,140,60,.4);color:#ffb366">🔀 Ubah Level</button>
      </div>
    </div>

    <!-- PROFILE SCREEN -->
    <div class="screen" id="profile-screen">
      <div class="profile-card">
        <div class="logo">🌿</div>
        <h1>3D BIOVINE</h1>
        <p class="subtitle">Game Edukasi Penyelamatan Lingkungan<br>dari Pencemaran Limbah Vinasse</p>

        <!-- Checkpoint resume banner (populated dynamically) -->
        <div id="resume-section" class="hidden"></div>

        <label for="input-name">Nama Karakter Kamu</label>
        <input type="text" id="input-name" placeholder="Masukkan nama karakter..." maxlength="30" />
        <button class="btn-primary" id="btn-profile-start">Mulai Petualangan →</button>
      </div>
    </div>

    <!-- INSTRUCTIONS SCREEN -->
    <div class="screen hidden" id="instructions-screen">
      <div class="instructions-card">
        <h2>📋 Petunjuk Permainan</h2>

        <div class="instr-section">
          <h3>🎯 Misi Utama</h3>
          <p>Selamatkan lingkungan dari pencemaran limbah <strong>Vinasse</strong> akibat industri etanol di kawasan Bekonang. Kamu akan menjelajahi kawasan pabrik, sungai, dan persawahan untuk memahami dampak pencemaran ini.</p>
        </div>

        <div class="instr-section">
          <h3>�️ Kontrol Gerak</h3>
          <p id="instr-controls-text"></p>
        </div>

        <div class="instr-section">
          <h3>�📊 Sistem Level</h3>
          <p>Terdapat <strong>6 Level</strong> yang harus diselesaikan secara berurutan. Setiap level memiliki 3 fenomena dengan masing-masing 1 pertanyaan.</p>
        </div>

        <div class="instr-section">
          <h3>🪙 Sistem Poin</h3>
          <table class="point-table">
            <thead><tr><th>Percobaan</th><th>Poin Diperoleh</th></tr></thead>
            <tbody>
              <tr><td>✅ Percobaan ke-1 (0 salah)</td><td>100 poin</td></tr>
              <tr><td>✅ Percobaan ke-2 (≤2 salah)</td><td>50 poin</td></tr>
              <tr><td>✅ Percobaan ke-3</td><td>25 poin</td></tr>
            </tbody>
          </table>
        </div>

        <div class="instr-section">
          <h3>�️ Panduan Level</h3>
          <div id="instr-level-guide"></div>
        </div>

        <div class="instr-section">
          <h3>💡 Tips Bermain</h3>
          <ul class="instr-tips">
            <li>🔴 Jawab dengan hati-hati karena setiap jawaban salah mengurangi poin yang kamu dapatkan.</li>
            <li>🟡 Progres permainan tersimpan otomatis setiap kali kamu menyelesaikan sebuah level!</li>
            <li>🟢 Jika kamu menutup permainan, kamu bisa <strong>melanjutkan dari level terakhir</strong> kapan saja.</li>
            <li>🔵 Gunakan <strong>Buku Saku</strong> di HUD jika kamu tidak mengenal istilah kimia.</li>
          </ul>
        </div>

        <div class="instr-section">
          <h3>�📖 Bantuan</h3>
          <p>Klik ikon <strong>"Buku Saku"</strong> di pojok kanan atas jika kamu butuh penjelasan tentang istilah kimia seperti pH, BOD, COD, DO, atau Vinasse.</p>
        </div>

        <button class="btn-primary" id="btn-start-game">🚀 Mulai Level 1</button>
      </div>
    </div>

    <!-- SYNOPSIS SCREEN (shown before intro video) -->
    <div class="screen hidden" id="synopsis-screen">
      <div class="synopsis-container">
        <!-- Avatar panel -->
        <div class="synopsis-avatar-wrap">
          <svg viewBox="0 0 200 400" class="synopsis-avatar" xmlns="http://www.w3.org/2000/svg">
            <!-- Shadow -->
            <ellipse cx="100" cy="393" rx="52" ry="6" fill="rgba(0,0,0,0.18)"/>
            <!-- Shoes -->
            <ellipse cx="80"  cy="387" rx="19" ry="7" fill="#1a1a2a"/>
            <ellipse cx="120" cy="387" rx="19" ry="7" fill="#1a1a2a"/>
            <!-- Legs (dark trousers) -->
            <rect x="68"  y="290" width="22" height="100" rx="9" fill="#2c3e50"/>
            <rect x="110" y="290" width="22" height="100" rx="9" fill="#2c3e50"/>
            <!-- Lab coat body -->
            <path d="M40 163 L160 163 L164 302 L36 302 Z" fill="#f0f4f8"/>
            <!-- Lab coat lapels -->
            <path d="M100 163 L76 214 L52 192 L40 163 Z" fill="#dde3e8"/>
            <path d="M100 163 L124 214 L148 192 L160 163 Z" fill="#dde3e8"/>
            <!-- Shirt / tie area -->
            <path d="M100 163 L76 214 L124 214 Z" fill="#2980b9"/>
            <polygon points="100,175 94,210 100,220 106,210" fill="#1a5276"/>
            <!-- Right arm (relaxed along side) -->
            <path d="M160 178 Q182 208 175 252" stroke="#dde3e8" stroke-width="28" fill="none" stroke-linecap="round"/>
            <path d="M160 178 Q182 208 175 252" stroke="#f5cba7" stroke-width="20" fill="none" stroke-linecap="round"/>
            <ellipse cx="174" cy="257" rx="13" ry="10" fill="#f5cba7"/>
            <!-- Left arm (raised / gesturing at viewer) -->
            <path d="M40 178 Q14 202 18 248" stroke="#f0f4f8" stroke-width="28" fill="none" stroke-linecap="round"/>
            <path d="M40 178 Q14 202 18 248" stroke="#f5cba7" stroke-width="20" fill="none" stroke-linecap="round"/>
            <ellipse cx="17" cy="253" rx="13" ry="10" fill="#f5cba7"/>
            <!-- Pointing index finger -->
            <line x1="17" y1="248" x2="4" y2="236" stroke="#f5cba7" stroke-width="7" stroke-linecap="round"/>
            <!-- Neck -->
            <rect x="87" y="140" width="26" height="28" rx="9" fill="#f5cba7"/>
            <!-- Head -->
            <ellipse cx="100" cy="98" rx="56" ry="60" fill="#f5cba7"/>
            <!-- Hair (dark, neat) -->
            <path d="M46 82 Q46 36 100 36 Q154 36 154 82 Q150 48 100 48 Q50 48 46 82 Z" fill="#1c0c02"/>
            <!-- Side hair -->
            <path d="M46 78 Q44 108 48 132" stroke="#1c0c02" stroke-width="9" fill="none" stroke-linecap="round"/>
            <path d="M154 78 Q156 108 152 132" stroke="#1c0c02" stroke-width="9" fill="none" stroke-linecap="round"/>
            <!-- Ears -->
            <ellipse cx="46"  cy="100" rx="8" ry="12" fill="#e8a87c"/>
            <ellipse cx="154" cy="100" rx="8" ry="12" fill="#e8a87c"/>
            <!-- Eyes (whites) -->
            <ellipse cx="78"  cy="98" rx="13" ry="14" fill="white"/>
            <ellipse cx="122" cy="98" rx="13" ry="14" fill="white"/>
            <!-- Irises -->
            <circle cx="80"  cy="100" r="9" fill="#2c1a0e"/>
            <circle cx="124" cy="100" r="9" fill="#2c1a0e"/>
            <!-- Pupils / highlight -->
            <circle cx="82"  cy="98" r="3.5" fill="white"/>
            <circle cx="126" cy="98" r="3.5" fill="white"/>
            <!-- Eyebrows -->
            <path d="M65 83 Q78 76 91 83" stroke="#1c0c02" stroke-width="3.2" fill="none" stroke-linecap="round"/>
            <path d="M109 83 Q122 76 135 83" stroke="#1c0c02" stroke-width="3.2" fill="none" stroke-linecap="round"/>
            <!-- Glasses frames -->
            <rect x="62"  y="87" width="30" height="22" rx="7" fill="rgba(180,220,255,0.08)" stroke="#556" stroke-width="2.5"/>
            <rect x="108" y="87" width="30" height="22" rx="7" fill="rgba(180,220,255,0.08)" stroke="#556" stroke-width="2.5"/>
            <line x1="92"  y1="98" x2="108" y2="98" stroke="#556" stroke-width="2.5"/>
            <line x1="62"  y1="98" x2="52"  y2="94" stroke="#556" stroke-width="2.5"/>
            <line x1="138" y1="98" x2="148" y2="94" stroke="#556" stroke-width="2.5"/>
            <!-- Mouth (animated by JS) -->
            <path id="syn-mouth" d="M84 126 Q100 138 116 126" stroke="#c0392b" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <!-- Cheek blush -->
            <ellipse cx="64"  cy="115" rx="9" ry="6" fill="rgba(255,150,100,0.18)"/>
            <ellipse cx="136" cy="115" rx="9" ry="6" fill="rgba(255,150,100,0.18)"/>
            <!-- Lab coat pocket with pen -->
            <rect x="116" y="212" width="30" height="36" rx="6" fill="none" stroke="#c8d0d8" stroke-width="1.5"/>
            <line x1="125" y1="212" x2="125" y2="206" stroke="#888" stroke-width="2" stroke-linecap="round"/>
            <line x1="131" y1="212" x2="131" y2="204" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
            <line x1="137" y1="212" x2="137" y2="207" stroke="#e74c3c" stroke-width="2" stroke-linecap="round"/>
            <!-- Name badge -->
            <rect x="48" y="212" width="46" height="32" rx="5" fill="rgba(41,128,185,0.18)" stroke="rgba(41,128,185,0.5)" stroke-width="1.5"/>
            <text x="71" y="226" text-anchor="middle" fill="#7ed6f7" font-size="6.5" font-family="monospace" font-weight="bold">PENELITI</text>
            <text x="71" y="236" text-anchor="middle" fill="#95a5a6" font-size="5.5" font-family="monospace">BIOVINE</text>
          </svg>
        </div>

        <!-- Text content panel -->
        <div class="synopsis-content" id="synopsis-content-panel">
          <button id="btn-syn-skip" class="synopsis-btn-skip">Lewati ⟶</button>
          <div id="syn-seg-tag"   class="synopsis-segment-tag">Bagian 1 dari 3</div>
          <div id="syn-seg-title" class="synopsis-segment-title">Industri Etanol di Desa Bekonang</div>
          <div id="syn-seg-text"  class="synopsis-text"></div>
          <div class="synopsis-photos">
            <img src="synopsis/Synopsis-1.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
            <img src="synopsis/Synopsis-2.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
            <img src="synopsis/Synopsis-3.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
          </div>
          <div id="syn-dots" class="synopsis-dots"></div>
          <div class="synopsis-nav">
            <button id="btn-syn-prev" class="synopsis-btn-prev">← Kembali</button>
            <button id="btn-syn-next" class="synopsis-btn-next">Lanjutkan →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- YOUTUBE VIDEOS SCREEN (shown before 3D IPAL sim) -->
    <div class="screen hidden" id="youtube-screen">
      <div class="youtube-container">
        <div class="youtube-header">
          <div class="youtube-logo">🎬</div>
          <div>
            <div class="youtube-title" id="yt-title">Video Edukasi</div>
            <div class="youtube-subtitle" id="yt-subtitle">Tonton video berikut (opsional sebelum melanjutkan)</div>
          </div>
          <div class="youtube-counter" id="yt-counter">1 / 2</div>
        </div>
        <div class="youtube-frame-wrap">
          <div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>
        </div>
        <button class="btn-primary youtube-btn-next" id="btn-yt-next">Lanjutkan →</button>
      </div>
    </div>

    <!-- INTRO VIDEO SCREEN -->
    <div class="screen hidden" id="intro-video-screen">
      <div class="intro-scene-wrap">
        <canvas id="intro-3d-canvas"></canvas>

        <!-- Title overlay top-left -->
        <div class="intro-overlay-title">
          <div class="intro-overlay-logo">🌿</div>
          <div>
            <div class="intro-overlay-h">3D BIOVINE</div>
            <div class="intro-overlay-sub">Simulasi IPAL Kawasan Industri &amp; Sistem Pengelolaan Limbah Vinasse</div>
          </div>
        </div>

        <!-- Stage label bottom-left -->
        <div id="intro-stage-label"></div>

        <!-- Continue button bottom-right -->
        <button class="btn-primary intro-btn-continue" id="btn-intro-continue">Lanjutkan ke Petunjuk →</button>
      </div>
    </div>

    <!-- STAGE SCREEN (quiz panel appended dynamically) -->
    <div class="screen hidden" id="stage-screen" style="background:transparent; pointer-events:none;"></div>

    <!-- ROOM SELECT HUB -->
    <div class="popup-overlay hidden" id="room-select-overlay">
      <div class="room-hub-card">
        <div class="room-hub-header">
          <div>
            <div class="room-hub-title">🏫 Pilih Ruangan</div>
            <div class="room-hub-sub">Kamu bisa masuk ke ruangan mana saja, dalam urutan bebas</div>
          </div>
          <div class="room-hub-meta">
            <div id="room-hub-points">🪙 0 poin</div>
            <div id="room-hub-progress">0 / 5 ruangan selesai</div>
          </div>
        </div>
        <div id="room-select-grid" class="room-select-grid"></div>
      </div>
    </div>

    <!-- RESULT POPUP -->
    <div class="popup-overlay hidden" id="result-overlay">
      <div class="popup-card">
        <div class="result-icon" id="result-icon">🎉</div>
        <h2 id="result-title">Luar Biasa!</h2>
        <div class="result-score" id="result-score">+100 poin</div>
        <p id="result-total">Total: 100 poin</p>
        <p id="result-attempts">🥇 Berhasil di percobaan pertama!</p>
        <button class="btn-primary" id="btn-result-continue">Lanjut ke Level 2 →</button>
      </div>
    </div>

    <!-- GLOSSARY MODAL -->
    <div id="glossary-modal" class="hidden">
      <div class="glossary-card">
        <button class="glossary-close" id="btn-close-glossary">✕ Tutup</button>
        <h2>📖 Buku Saku Kimia Lingkungan</h2>

        <!-- Page 1: Handbook image -->
        <div class="glossary-page" id="glossary-page-1">
          <img src="HandbookVinasse.png" alt="Handbook Vinasse" style="width:100%;border-radius:8px;">
        </div>

        <!-- Page 2: Glossary terms -->
        <div class="glossary-page hidden" id="glossary-page-2">
          <div class="glossary-item">
            <div class="term">Vinasse</div>
            <div class="definition">Limbah cair hasil penyulingan (distilasi) fermentasi tebu menjadi etanol. Berwarna coklat kehitaman, berbau manis menyengat, sangat asam, dan kaya bahan organik seperti asam asetat, asam laktat, gliserol, fenol, dan melanoid.</div>
          </div>
          <div class="glossary-item">
            <div class="term">COD (Chemical Oxygen Demand)</div>
            <div class="definition">Jumlah oksigen yang diperlukan untuk mengurai <em>seluruh</em> bahan organik dalam air secara kimia. Nilai tinggi menandakan banyak polutan organik. Satuan: mg/L.</div>
          </div>
          <div class="glossary-item">
            <div class="term">BOD (Biochemical Oxygen Demand)</div>
            <div class="definition">Jumlah oksigen terlarut yang dibutuhkan mikroorganisme untuk mengurai bahan organik secara biologis (aerobik). Nilai tinggi = air tercemar berat. Satuan: mg/L.</div>
          </div>
          <div class="glossary-item">
            <div class="term">DO (Dissolved Oxygen)</div>
            <div class="definition">Kadar oksigen yang terlarut dalam air. DO rendah (&lt;4 mg/L) berarti air tidak sehat bagi organisme akuatik. Air bersih normal memiliki DO ≥ 6 mg/L.</div>
          </div>
          <div class="glossary-item">
            <div class="term">TDS (Total Dissolved Solids)</div>
            <div class="definition">Total padatan (ion anorganik + senyawa organik terlarut) dalam air. Satuan mg/L. Baku mutu air minum: ≤ 500 mg/L. TDS tinggi mengindikasikan pencemaran berat.</div>
          </div>
          <div class="glossary-item">
            <div class="term">pH</div>
            <div class="definition">Derajat keasaman air. pH &lt; 7 = asam; pH 7 = netral; pH &gt; 7 = basa. Limbah vinasse bersifat sangat asam (pH rendah), merusak ekosistem perairan dan tanah pertanian.</div>
          </div>
          <div class="glossary-item">
            <div class="term">Bakteri Coliform</div>
            <div class="definition">Kelompok bakteri indikator pencemaran feses/organik. Pertumbuhannya meningkat seiring naiknya BOD & COD. Berbahaya bagi kesehatan manusia, dapat menyebabkan diare hingga kematian.</div>
          </div>
          <div class="glossary-item">
            <div class="term">Bakteri Metanogenik & Asidogenik</div>
            <div class="definition">Kelompok bakteri anaerob yang ditemukan dalam limbah vinasse. Bakteri asidogenik menghasilkan asam organik, sedangkan metanogenik menghasilkan gas metana (CH₄) dalam proses fermentasi anaerob.</div>
          </div>
        </div>

        <!-- Page navigation -->
        <div class="glossary-nav">
          <button class="glossary-nav-btn" id="btn-glossary-prev" disabled>← Kembali</button>
          <span id="glossary-page-indicator">1 / 2</span>
          <button class="glossary-nav-btn" id="btn-glossary-next">Berikutnya →</button>
        </div>
      </div>
    </div>
  `,_e("btn-profile-start").onclick=()=>{const t=_e("input-name").value.trim();if(!t){_e("input-name").style.borderColor="#e74c3c",_e("input-name").focus();return}ee.playerName=t,Sd(),co&&co(t)},_e("input-name").addEventListener("keydown",t=>{t.key==="Enter"&&_e("btn-profile-start").click()}),setTimeout(()=>{const t=_e("btn-close-glossary");t&&(t.onclick=()=>uo());let i=1;const a=2;function s(){_e("glossary-page-1").classList.toggle("hidden",i!==1),_e("glossary-page-2").classList.toggle("hidden",i!==2),_e("glossary-page-indicator").textContent=`${i} / ${a}`,_e("btn-glossary-prev").disabled=i===1,_e("btn-glossary-next").disabled=i===a;const l=_e("glossary-modal").querySelector(".glossary-card");l&&(l.scrollTop=0)}_e("btn-glossary-next").onclick=()=>{i<a&&(i++,s())},_e("btn-glossary-prev").onclick=()=>{i>1&&(i--,s())};const r=_e("glossary-modal");new MutationObserver(()=>{r.classList.contains("hidden")||(i=1,s())}).observe(r,{attributes:!0,attributeFilter:["class"]})},100)}function qx(){if(_e("intro-ipal-labels-styles"))return;const n=`
    .intro-ipal-labels-panel {
      position: fixed;
      top: 20px;
      left: 20px;
      background: rgba(25, 50, 75, 0.9);
      border: 2px solid rgba(52, 152, 219, 0.6);
      border-radius: 12px;
      padding: 16px;
      max-width: 280px;
      z-index: 100;
      color: #ddeeff;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      animation: slideInTop 0.4s ease-out;
    }

    .intro-ipal-labels-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(52, 152, 219, 0.3);
    }

    .intro-ipal-labels-title {
      font-size: 13px;
      font-weight: 700;
      color: #3498db;
      letter-spacing: 0.5px;
    }

    .intro-ipal-labels-close {
      background: none;
      border: none;
      color: #3498db;
      font-size: 16px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: color 0.2s;
    }

    .intro-ipal-labels-close:hover {
      color: #2ecc71;
    }

    .intro-ipal-labels-item {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
      font-size: 12px;
      line-height: 1.4;
    }

    .intro-ipal-labels-item:last-child {
      margin-bottom: 0;
    }

    .intro-ipal-labels-icon {
      font-size: 18px;
      min-width: 20px;
      text-align: center;
    }

    .intro-ipal-labels-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .intro-ipal-labels-name {
      font-weight: 600;
      color: #a0f0c0;
    }

    .intro-ipal-labels-desc {
      color: #80b0c0;
      font-size: 11px;
    }

    @keyframes slideInTop {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,e=document.createElement("style");e.id="intro-ipal-labels-styles",e.textContent=n,document.head.appendChild(e)}function $x(){if(_e("intro-ipal-labels-panel"))return;const n=document.createElement("div");n.id="intro-ipal-labels-panel",n.className="intro-ipal-labels-panel",n.innerHTML=`
    <div class="intro-ipal-labels-header">
      <div class="intro-ipal-labels-title">📍 Komponen IPAL</div>
      <button class="intro-ipal-labels-close" id="btn-close-intro-ipal-labels" title="Tutup">✕</button>
    </div>

    <div class="intro-ipal-labels-item">
      <div class="intro-ipal-labels-icon">🏭</div>
      <div class="intro-ipal-labels-content">
        <div class="intro-ipal-labels-name">Bangunan Penyaringan</div>
        <div class="intro-ipal-labels-desc">Fasilitas awal yang menyaring limbah dari sumber. Bar screen mengalirkan limbah mentah ke bak ekualisasi.</div>
      </div>
    </div>

    <div class="intro-ipal-labels-item">
      <div class="intro-ipal-labels-icon">🍷</div>
      <div class="intro-ipal-labels-content">
        <div class="intro-ipal-labels-name">Kolom Penyulingan</div>
        <div class="intro-ipal-labels-desc">Proses pemisahan etanol dari limbah vinasse melalui pemanasan dan kondensasi.</div>
      </div>
    </div>

    <div class="intro-ipal-labels-item">
      <div class="intro-ipal-labels-icon">🪣</div>
      <div class="intro-ipal-labels-content">
        <div class="intro-ipal-labels-name">Bak Ekualisasi</div>
        <div class="intro-ipal-labels-desc">Menyeimbangkan pH, suhu, dan debit limbah agar stabil sebelum proses biologis.</div>
      </div>
    </div>

    <div class="intro-ipal-labels-item">
      <div class="intro-ipal-labels-icon">⚡</div>
      <div class="intro-ipal-labels-content">
        <div class="intro-ipal-labels-name">Stasiun Pompa</div>
        <div class="intro-ipal-labels-desc">Memompa limbah dari bak ekualisasi ke sistem aerasi untuk pengolahan lanjutan.</div>
      </div>
    </div>

    <div class="intro-ipal-labels-item">
      <div class="intro-ipal-labels-icon">⚙️</div>
      <div class="intro-ipal-labels-content">
        <div class="intro-ipal-labels-name">Bak Aerasi</div>
        <div class="intro-ipal-labels-desc">Menginjeksi oksigen melalui aerator untuk mendukung pertumbuhan bakteri pengurai limbah.</div>
      </div>
    </div>
  `;const e=_e("intro-video-screen");e?e.appendChild(n):document.body.appendChild(n);const t=_e("btn-close-intro-ipal-labels");t&&(t.onclick=()=>{n.style.animation="slideInTop 0.3s ease-out reverse",setTimeout(()=>n.remove(),300)})}const Be=n=>document.getElementById(n);function Yx(n){tv();const e=Be("sim-overlay");e&&e.remove();const t=document.createElement("div");t.id="sim-overlay",t.className="sim-overlay",t.innerHTML=jx(),document.body.appendChild(t),requestAnimationFrame(()=>{Kx(t,n)})}function jx(){return`
    <div class="sim-card">
      <!-- Header -->
      <div class="sim-header">
        <span class="sim-badge">🔬 SIMULASI LAB</span>
        <h2 class="sim-title">Pengolahan Limbah Vinasse</h2>
        <p class="sim-subtitle">Ukur TDS, DO & pH — lalu uji efektivitas aerasi</p>
      </div>

      <!-- Step 1: Multi-glass drag-to-pour -->
      <div class="sim-step" id="sim-step-1">
        <div class="step-title">
          <span class="step-num">1</span>
          Tuangkan Vinasse ke dalam Beker — seret gelas ke beker
        </div>
        <!-- Row of vinasse glasses (5 × 200 mL) -->
        <div class="glasses-row-wrap">
          <div class="glasses-row" id="glasses-row">
            ${[0,1,2,3,4].map(n=>`
              <div class="vinasse-glass" id="vglass-${n}" data-idx="${n}">
                <div class="vg-liquid" id="vglass-liq-${n}"></div>
                <div class="vg-label">200 mL</div>
              </div>
            `).join("")}
          </div>
          <div class="glasses-hint">↙️ Seret gelas ke BEKER KANAN untuk menuangkan vinasse</div>
        </div>
        <!-- Beaker drop target -->
        <div class="beaker-pour-row">
          <div class="beaker-drop-zone" id="beaker-drop-zone">
            <div class="beaker-drops" id="beaker-drops"></div>
            <div class="beaker-wrap">
              <div class="beaker">
                <div class="beaker-vinasse" id="beaker-vinasse"></div>
                <div class="beaker-water"   id="beaker-water"></div>
                <div class="beaker-scale">
                  ${[1e3,800,600,400,200,0].map(n=>`<span>${n}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>
          <div class="pour-readout">
            <div class="vol-display" id="vol-display">
              <div class="vol-display-row">
                <span class="vol-display-icon">🟤</span>
                <span><b><span id="vol-display-num">0</span> mL</b> Vinasse</span>
              </div>
              <div class="vol-display-row secondary">
                <span class="vol-display-icon">💧</span>
                <span><span id="vol-display-water">1000</span> mL Air Suling</span>
              </div>
            </div>
            <div class="beaker-drop-label" id="beaker-drop-label">Jatuhkan di sini</div>
            <button class="sim-btn-sm" id="btn-reset-pour">🔄 Isi Ulang Gelas</button>
            <div class="vol-legend" style="margin-top:10px">
              <span class="legend-box water-box"></span> Air suling
              <span class="legend-box vinasse-box"></span> Vinasse
            </div>
          </div>
        </div>
        <button class="sim-btn" id="btn-titrate" disabled>📏 Ukur Parameter →</button>
      </div>

      <!-- Step 2: TDS/DO Meter dip -->
      <div class="sim-step hidden" id="sim-step-2">
        <div class="step-title">
          <span class="step-num">2</span>
          Ukur Parameter — Celupkan TDS/DO Meter
        </div>
        <div class="meter-layout">
          <!-- Instruction -->
          <div class="meter-instruction" id="meter-instruction">
            ⤵️ Seret probe sensor ke dalam BEAKER untuk mengukur TDS · DO · pH · SAL
          </div>
          <!-- Instrument row: display unit + cable + probe + beaker -->
          <div class="meter-instrument-row">
            <!-- Display unit (left stick, static) -->
            <div class="meter-display-unit">
              <div class="mdu-head">
                <div class="mdu-brand">TDS · DO · pH · SAL</div>
                <div class="mdu-screen">
                  <div class="mr-row"><span class="mr-lbl">DO</span><span class="mr-val" id="mr-do">—</span><span class="mr-unit">ppm</span></div>
                  <div class="mr-row"><span class="mr-lbl">TDS</span><span class="mr-val" id="mr-tds">—</span><span class="mr-unit">ppm</span></div>
                  <div class="mr-row"><span class="mr-lbl">pH</span><span class="mr-val" id="mr-ph">—</span></div>
                  <div class="mr-row"><span class="mr-lbl">SAL</span><span class="mr-val" id="mr-sal">—</span><span class="mr-unit">‰</span></div>
                </div>
              </div>
              <div class="mdu-stick"></div>
            </div>
            <!-- Cable (decorative) -->
            <svg class="meter-cable-svg" viewBox="0 0 80 40" preserveAspectRatio="none">
              <path d="M0,20 C20,6 60,34 80,20" stroke="#3a7a9a" stroke-width="2.5" fill="none" stroke-dasharray="5,4"/>
            </svg>
            <!-- Probe stick + beaker drop zone -->
            <div class="meter-probe-column">
              <div class="meter-probe-stick" id="meter-probe-stick" title="Seret ke dalam larutan">
                <div class="mps-handle">⊕</div>
                <div class="mps-shaft"></div>
                <div class="mps-tip"></div>
              </div>
              <div class="meter-beaker-wrap">
                <div class="meter-beaker" id="meter-beaker">
                  <div class="meter-bk-vinasse" id="meter-bk-vinasse"></div>
                  <div class="meter-bk-ripple" id="meter-bk-ripple"></div>
                  <div class="meter-bk-scale">
                    ${[1e3,800,600,400,200].map(n=>`<span>${n}</span>`).join("")}
                  </div>
                </div>
                <div class="meter-bk-label" id="meter-vol-label">— mL</div>
              </div>
            </div>
          </div>
          <!-- Results appear below instrument row after measurement -->
          <div class="meter-result-grid hidden" id="meter-result-grid"></div>
          <div class="meter-note hidden" id="meter-note"></div>
          <button class="sim-btn hidden" id="btn-go-aerate">💨 Lanjut ke Simulasi Aerasi →</button>
          <button class="sim-btn-back hidden" id="btn-back-meter">↶ Kembali ke Step 1</button>
        <button class="sim-btn-back hidden" id="btn-back-meter" style="margin-left:8px">⏮ Kembali ke Step 1</button>
        </div>
      </div>

      <!-- Step 3: Aeration -->
      <div class="sim-step hidden" id="sim-step-3">
        <div class="step-title">
          <span class="step-num">3</span>
          Simulasi Aerasi (Biodegradasi Aerobik)
        </div>

        <div class="aerator-panel">
          <div class="aerator-visual" id="aerator-visual">
            <div class="aerator-tank">
              <div class="aerator-liquid" id="aerator-liquid"></div>
              <div class="bubble-container" id="bubble-container"></div>
            </div>
            <div class="aerator-machine" id="aerator-machine">
              <div class="motor-body"></div>
              <div class="motor-shaft"></div>
            </div>
          </div>

          <div class="aerator-controls">
            <label class="toggle-label">
              <span>Aerator</span>
              <label class="toggle-switch">
                <input type="checkbox" id="aerator-toggle">
                <span class="toggle-slider"></span>
              </label>
              <span id="aerator-status" class="status-off">MATI</span>
            </label>

            <div class="duration-wrap" id="duration-wrap">
              <label>Durasi Aerasi</label>
              <div class="duration-buttons">
                ${[6,12,24,48,72].map(n=>`
                  <button class="dur-btn" data-hours="${n}">${n} jam</button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>

        <button class="sim-btn hidden" id="btn-calc-result">📊 Hitung Hasil Pengolahan →</button>
        <button class="sim-btn-back hidden" id="btn-back-aerate">↶ Kembali ke Step 2</button>
        <button class="sim-btn-back hidden" id="btn-back-aerate" style="margin-left:8px">⏮ Kembali ke Step 2</button>
      </div>

      <!-- Step 4: Results -->
      <div class="sim-step hidden" id="sim-step-4">
        <div class="step-title">
          <span class="step-num">4</span>
          Hasil Pengolahan & Evaluasi
        </div>
        <div class="results-grid" id="results-grid">
          <!-- populated by JS -->
        </div>
        <div class="compliance-banner" id="compliance-banner"></div>
        <div class="sim-conclusion" id="sim-conclusion"></div>

        <button class="sim-btn hidden" id="btn-sim-finish" style="margin-top:8px">✅ Selesai Level 2 →</button>
      </div>

    </div>
  `}function Kx(n,e){let t=0,i=null,a=null,s=!1,r=null;{let ae=function(){document.getElementById("vol-display-num").textContent=t,document.getElementById("vol-display-water").textContent=1e3-t},P=function(j){const me=document.getElementById(`vglass-liq-${j}`),he=document.getElementById(`vglass-${j}`);!me||!he||(me.style.height=E[j]/200*100+"%",E[j]<=0&&(he.classList.add("empty"),he.classList.remove("dragging")))},z=function(){const j=document.getElementById("beaker-drops");if(!j)return;const me=document.createElement("div");me.className="sim-drop",me.style.setProperty("--spread",(Math.random()-.5)*10+"px"),me.style.setProperty("--dur",.28+Math.random()*.24+"s"),j.appendChild(me),setTimeout(()=>me.remove(),600)},X=function(){T||y===null||(T=setInterval(()=>{if(y===null||E[y]<=0||t>=1e3){ne();return}const j=Math.min(25,E[y],1e3-t);E[y]-=j,t=Math.min(1e3,t+j),jr(t),ae(),Be("btn-titrate").disabled=!1;const me=document.getElementById("vg-ghost-liquid");me&&(me.style.height=E[y]/200*100+"%"),P(y)},80),N=setInterval(z,55))},ne=function(){clearInterval(T),clearInterval(N),T=N=null},Y=function(j,me){I.style.left=j-18+"px",I.style.top=me-64+"px";const he=document.getElementById("beaker-drop-zone");if(!he)return;const Ce=he.getBoundingClientRect(),Ne=j>=Ce.left&&j<=Ce.right&&me>=Ce.top&&me<=Ce.bottom;Ne!==H&&(H=Ne,he.classList.toggle("active",Ne),I.classList.toggle("tilting",Ne),Ne?X():ne())},J=function(j,me,he){var Ne;if(E[j]<=0)return;y=j,H=!1,(Ne=document.getElementById(`vglass-${j}`))==null||Ne.classList.add("dragging"),I.classList.remove("hidden");const Ce=document.getElementById("vg-ghost-liquid");Ce&&(Ce.style.height=E[j]/200*100+"%"),Y(me,he)},Z=function(){var me,he;if(y===null)return;ne(),P(y),(me=document.getElementById(`vglass-${y}`))==null||me.classList.remove("dragging"),y=null,H=!1,I.classList.add("hidden"),I.classList.remove("tilting"),(he=document.getElementById("beaker-drop-zone"))==null||he.classList.remove("active");const j=document.getElementById("beaker-drop-label");j&&(j.textContent=t>0?`✓ ${t} mL dituang — seret gelas lagi untuk menambah`:"Jatuhkan di sini")},V=function(j){y!==null&&Y(j.clientX,j.clientY)},Q=function(){Z()},O=function(j){y!==null&&(Y(j.touches[0].clientX,j.touches[0].clientY),j.preventDefault())},te=function(){Z()};var o=ae,l=P,d=z,c=X,p=ne,f=Y,h=J,g=Z,x=V,m=Q,u=O,v=te;const E=Array(5).fill(200);t=0,jr(0);const I=document.createElement("div");I.id="vg-ghost",I.className="vg-ghost hidden",I.innerHTML='<div class="vg-ghost-liquid" id="vg-ghost-liquid"></div>',document.body.appendChild(I);let y=null,T=null,N=null,H=!1;for(let j=0;j<5;j++){const me=document.getElementById(`vglass-${j}`);me&&(me.addEventListener("mousedown",he=>{J(j,he.clientX,he.clientY),he.preventDefault()}),me.addEventListener("touchstart",he=>{J(j,he.touches[0].clientX,he.touches[0].clientY),he.preventDefault()},{passive:!1}))}window.addEventListener("mousemove",V),window.addEventListener("mouseup",Q),window.addEventListener("touchmove",O,{passive:!1}),window.addEventListener("touchend",te),document.getElementById("btn-reset-pour").onclick=()=>{var me;Z(),t=0;for(let he=0;he<5;he++)E[he]=200,P(he),(me=document.getElementById(`vglass-${he}`))==null||me.classList.remove("empty");jr(0),ae(),Be("btn-titrate").disabled=!0;const j=document.getElementById("beaker-drop-label");j&&(j.textContent="Jatuhkan di sini")},r=()=>{Z(),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Q),window.removeEventListener("touchmove",O),window.removeEventListener("touchend",te);const j=document.getElementById("vg-ghost");j&&j.remove()}}Be("btn-titrate").onclick=()=>{r&&(r(),r=null),i=bx(t),Ma("sim-step-1","sim-step-2"),Jx(t)},Be("btn-go-aerate").onclick=()=>{Ma("sim-step-2","sim-step-3"),Zx(i)},Be("btn-back-meter").onclick=()=>{Ma("sim-step-2","sim-step-1"),Be("btn-go-aerate").classList.add("hidden"),Be("btn-back-meter").classList.add("hidden")},Be("aerator-toggle").onchange=function(){s=this.checked;const b=Be("aerator-status");b.textContent=s?"NYALA":"MATI",b.className=s?"status-on":"status-off",Be("aerator-machine").classList.toggle("running",s),Qx(s),s?Be("duration-wrap").classList.remove("locked"):(Be("duration-wrap").classList.add("locked"),a=null,n.querySelectorAll(".dur-btn").forEach(_=>_.classList.remove("active")),Be("btn-calc-result").classList.add("hidden"))},n.querySelectorAll(".dur-btn").forEach(b=>{b.onclick=()=>{s&&(n.querySelectorAll(".dur-btn").forEach(_=>_.classList.remove("active")),b.classList.add("active"),a=parseInt(b.dataset.hours),Be("btn-calc-result").classList.remove("hidden"),Be("btn-back-aerate").classList.remove("hidden"))}}),Be("btn-calc-result").onclick=()=>{const b=_x(i,a);Ma("sim-step-3","sim-step-4"),ev(i,b,t,a),Be("btn-sim-finish").classList.remove("hidden"),Be("btn-sim-finish").onclick=()=>{Be("sim-overlay").remove(),e&&e()}},Be("btn-back-aerate").onclick=()=>{Ma("sim-step-3","sim-step-2"),Be("btn-calc-result").classList.add("hidden"),Be("btn-back-aerate").classList.add("hidden"),Be("btn-go-aerate").classList.remove("hidden"),Be("btn-back-meter").classList.remove("hidden")}}const Ms={200:{doVal:1.8,tds:22,ph:2.2,sal:13},400:{doVal:2.3,tds:26,ph:2.8,sal:13.8},600:{doVal:3.2,tds:27,ph:3,sal:14},800:{doVal:4,tds:30.1,ph:3.7,sal:15}};function Ld(n){const e=[200,400,600,800];if(n<=200)return{...Ms[200]};if(n>=800)return{...Ms[800]};let t=200,i=800;for(let o=0;o<e.length-1;o++)if(n>e[o]&&n<=e[o+1]){t=e[o],i=e[o+1];break}const a=(n-t)/(i-t),s=Ms[t],r=Ms[i];return{doVal:parseFloat((s.doVal+(r.doVal-s.doVal)*a).toFixed(1)),tds:parseFloat((s.tds+(r.tds-s.tds)*a).toFixed(1)),ph:parseFloat((s.ph+(r.ph-s.ph)*a).toFixed(1)),sal:parseFloat((s.sal+(r.sal-s.sal)*a).toFixed(1))}}function Jx(n,e){const t=n/1e3*100,i=Be("meter-bk-vinasse");i&&(i.style.height=t+"%");const a=Be("meter-vol-label");a&&(a.textContent=n+" mL");const s=Be("meter-bk-ripple"),r=Ld(n),o=Be("meter-probe-stick"),l=Be("meter-beaker");let d=!1,c=null;function p(){c&&(c.remove(),c=null),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",x)}function f(v){return v.changedTouches?{x:v.changedTouches[0].clientX,y:v.changedTouches[0].clientY}:v.touches?{x:v.touches[0].clientX,y:v.touches[0].clientY}:{x:v.clientX,y:v.clientY}}function h(v){if(!c)return;const{x:b,y:_}=f(v);c.style.left=b-15+"px",c.style.top=_-12+"px";const L=l.getBoundingClientRect();l.classList.toggle("drop-hover",b>=L.left&&b<=L.right&&_>=L.top&&_<=L.bottom)}function g(v){v.preventDefault(),h(v)}function x(v){if(!c)return;const{x:b,y:_}=f(v),L=l.getBoundingClientRect(),M=b>=L.left&&b<=L.right&&_>=L.top&&_<=L.bottom;p(),l.classList.remove("drop-hover"),M&&!d?(d=!0,o.classList.add("probe-dipped"),u()):o.style.opacity="1"}function m(v){if(d)return;v.preventDefault(),o.style.opacity="0.35",c=document.createElement("div"),c.className="meter-probe-ghost",c.innerHTML='<div class="mps-handle">⊕</div><div class="mps-shaft"></div><div class="mps-tip"></div>';const{x:b,y:_}=f(v);c.style.left=b-15+"px",c.style.top=_-12+"px",document.body.appendChild(c),window.addEventListener("mousemove",h),window.addEventListener("mouseup",x),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",x)}function u(){Be("meter-instruction").textContent="Sensor mendeteksi parameter larutan…",setTimeout(()=>{s&&(s.classList.remove("ripple-active"),s.offsetWidth,s.classList.add("ripple-active"))},300),setTimeout(()=>{Ss("mr-do",r.doVal,1200,1),Ss("mr-tds",r.tds,1200,1),Ss("mr-ph",r.ph,1200,2),Ss("mr-sal",r.sal,1200,1)},500),setTimeout(()=>{Be("meter-instruction").textContent="✅ Pengukuran selesai — catat hasil parameter!";const v=Be("meter-result-grid");v.innerHTML=[{icon:"💧",label:"DO",value:r.doVal.toFixed(1)+" ppm",sub:"Dissolved Oxygen",status:r.doVal<2?"danger":r.doVal<4?"warn":"good"},{icon:"📊",label:"TDS",value:r.tds.toFixed(1)+" ppm",sub:"Total Dissolved Solids",status:r.tds>30?"danger":r.tds>25?"warn":"good"},{icon:"⚗️",label:"pH",value:r.ph.toFixed(1),sub:r.ph<4?"Sangat Asam ⚠️":r.ph<6?"Asam":"Mendekati Netral",status:r.ph<4?"danger":r.ph<6?"warn":"good"},{icon:"🧂",label:"Salinometer",value:r.sal.toFixed(1)+" ‰",sub:"Kadar salinitas",status:r.sal>15?"danger":r.sal>13?"warn":"good"}].map(_=>`
        <div class="param-card ${_.status}">
          <span class="param-icon">${_.icon}</span>
          <span class="param-label">${_.label}</span>
          <span class="param-value">${_.value}</span>
          <span class="param-sub">${_.sub}</span>
        </div>
      `).join(""),v.classList.remove("hidden");const b=Be("meter-note");b.innerHTML=`⚗️ <strong>Interpretasi:</strong> Dengan ${n} mL vinasse,
        DO = <b>${r.doVal.toFixed(1)} ppm</b>, TDS = <b>${r.tds.toFixed(1)} ppm</b>,
        pH = <b>${r.ph.toFixed(1)}</b> (${r.ph<4?"sangat asam":"asam"}),
        Salinometer = <b>${r.sal.toFixed(1)} ‰</b>.
        <div class="meter-source">📄 Sumber: Irmanto, et al. (2013)</div>`,b.classList.remove("hidden"),Be("btn-go-aerate").classList.remove("hidden"),Be("btn-back-meter").classList.remove("hidden"),setTimeout(()=>Be("btn-go-aerate").scrollIntoView({behavior:"smooth",block:"nearest"}),100)},1800)}o.addEventListener("mousedown",m),o.addEventListener("touchstart",m,{passive:!1})}function Ss(n,e,t,i){const a=Be(n);if(!a)return;const s=performance.now(),r=l=>1-(1-l)**2;function o(l){const d=Math.min(1,(l-s)/t);a.textContent=(e*r(d)).toFixed(i),d<1&&requestAnimationFrame(o)}requestAnimationFrame(o)}function jr(n){const t=n/1e3*100,i=100-t,a=Be("beaker-vinasse"),s=Be("beaker-water");a.style.height=t+"%",a.style.bottom="0%",s.style.height=i+"%",s.style.bottom=t+"%"}function Zx(n){const e=Be("aerator-liquid");if(!e)return;const t=Math.min(1,n.cod/45e3),i=Math.round(60+t*60),a=Math.round(20+t*5),s=0;e.style.background=`rgb(${i},${a},${s})`}function Qx(n){const e=Be("bubble-container");if(e&&(e.innerHTML="",!!n))for(let t=0;t<14;t++){const i=document.createElement("div");i.className="bubble",i.style.left=5+Math.random()*85+"%",i.style.animationDuration=1.2+Math.random()*2+"s",i.style.animationDelay=Math.random()*2+"s",i.style.width=i.style.height=4+Math.random()*8+"px",e.appendChild(i)}}function ev(n,e,t,i){const a=Be("results-grid"),s=Be("compliance-banner"),r=Be("sim-conclusion"),o=Ld(t);a.innerHTML=`
    <div class="param-grid" style="margin-bottom:0">
      <div class="param-card neutral">
        <span class="param-icon">🧪</span>
        <span class="param-label">Vinasse Dituang</span>
        <span class="param-value">${t} mL</span>
        <span class="param-sub">dari 1 000 mL total larutan</span>
      </div>
      <div class="param-card ${o.doVal<2?"danger":o.doVal<4?"warn":"good"}">
        <span class="param-icon">📏</span>
        <span class="param-label">Hasil TDS/DO Meter</span>
        <span class="param-value">DO ${o.doVal.toFixed(1)} ppm</span>
        <span class="param-sub">TDS ${o.tds.toFixed(1)} ppm · pH ${o.ph.toFixed(1)} · SAL ${o.sal.toFixed(1)} ‰</span>
      </div>
      <div class="param-card neutral">
        <span class="param-icon">⏱️</span>
        <span class="param-label">Durasi Aerasi</span>
        <span class="param-value">${i} Jam</span>
        <span class="param-sub">simulasi aerasi aerobik</span>
      </div>
    </div>
  `,s.className="compliance-banner "+(e.compliant?"compliant":"not-compliant"),s.innerHTML=e.compliant?"✅ Effluent <strong>MEMENUHI</strong> baku mutu Permen LH No.5/2014 setelah aerasi!":"⛔ Effluent <strong>BELUM MEMENUHI</strong> baku mutu — perlu pengolahan lanjut atau durasi aerasi lebih panjang.",r.innerHTML=`
    <strong>📝 Kesimpulan:</strong> Dengan volume vinasse <b>${t} mL</b> dan aerasi selama
    <b>${i} jam</b>, pH meningkat dari <b>${n.ph}</b> menjadi <b>${e.ph}</b>
    karena asam organik teroksidasi oleh mikroba aerob.
    ${e.compliant?"Pengolahan ini efektif dan limbah sudah layak dibuang ke badan air penerima.":"Disarankan menambah durasi aerasi atau menggunakan teknologi lanjutan (koagulasi/MBBR) agar sesuai regulasi."}
  `}function Ma(n,e){const t=Be(n),i=Be(e);t.classList.add("step-exit"),setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("step-exit"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}function tv(){if(document.getElementById("sim-styles"))return;const n=`
    /* ── Simulation overlay ───────────────────────────── */
    .sim-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 12, 25, 0.96);
      display: flex; align-items: center; justify-content: center;
      z-index: 400; overflow-y: auto; padding: 24px 12px;
    }
    .sim-card {
      background: rgba(12, 22, 40, 0.98);
      border: 1px solid #1a4a6a;
      border-radius: 16px;
      max-width: 820px; width: 100%;
      padding: 28px 32px;
      color: #e0eeff;
      box-shadow: 0 0 40px rgba(0, 120, 200, 0.25);
    }
    .sim-header { text-align: center; margin-bottom: 28px; }
    .sim-badge {
      background: rgba(0, 200, 255, 0.15);
      border: 1px solid #00c8ff;
      color: #00c8ff; padding: 4px 14px;
      border-radius: 20px; font-size: 12px; letter-spacing: 1px;
    }
    .sim-title { margin: 10px 0 4px; font-size: 22px; color: #a0d8ff; }
    .sim-subtitle { color: #7090a0; font-size: 13px; }

    /* ── Steps ────────────────────────────────────────── */
    .sim-step { margin-top: 16px; }
    .sim-step.hidden { display: none; }
    .step-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 15px; font-weight: 700; color: #80c8ff;
      margin-bottom: 16px;
    }
    .step-num {
      background: #0a4070; color: #40aaff;
      width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 800; flex-shrink: 0;
    }
    @keyframes stepEnter { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform: none; } }
    @keyframes stepExit  { from { opacity:1; transform: none; } to { opacity:0; transform: translateY(-8px); } }
    .step-enter { animation: stepEnter 0.4s ease forwards; }
    .step-exit  { animation: stepExit  0.3s ease forwards; }

    /* ── Volume buttons (kept for compat) ────────────── */
    .volume-selector { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
    .vol-btn {
      padding: 10px 18px; border-radius: 8px; border: 2px solid #1a4a6a;
      background: rgba(10, 30, 55, 0.8); color: #7ab0d8; cursor: pointer;
      font-size: 14px; font-weight: 600; transition: all 0.2s;
    }
    .vol-btn:hover { border-color: #00aaff; color: #00aaff; }
    .vol-btn.active { border-color: #00d4ff; color: #00d4ff; background: rgba(0,180,255,0.1); }

    /* ── Multi-glass drag-to-pour mechanic ─────────────── */
    .glasses-row-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 16px; }
    .glasses-row { display: flex; gap: 8px; align-items: flex-end; }
    .glasses-hint { font-size: 11px; color: #4a7a9a; font-style: italic; text-align: center; }
    .vinasse-glass {
      position: relative; width: 38px; height: 56px;
      border: 2px solid #7a3818; border-top: none; border-radius: 0 0 6px 6px;
      background: rgba(18, 6, 0, 0.82); overflow: hidden;
      cursor: grab; transition: box-shadow 0.2s, border-color 0.2s, opacity 0.3s;
      user-select: none;
    }
    .vinasse-glass:not(.empty):hover { box-shadow: 0 0 8px rgba(180,80,20,0.5); border-color: #bb6020; }
    .vinasse-glass.empty { opacity: 0.28; cursor: not-allowed; border-color: #3a2010; }
    .vinasse-glass.dragging { opacity: 0.45; cursor: grabbing; }
    .vg-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 85%;
      background: linear-gradient(180deg, rgba(195,78,5,0.88) 0%, rgba(120,36,0,0.96) 100%);
      transition: height 0.18s ease;
    }
    .vg-label {
      position: absolute; bottom: 2px; left: 0; right: 0;
      font-size: 7px; text-align: center; color: rgba(255,205,145,0.85);
      font-weight: 700; pointer-events: none; z-index: 2;
    }
    .vg-ghost {
      position: fixed; z-index: 9999; pointer-events: none;
      width: 38px; height: 56px;
      border: 2px solid #ff7020; border-top: none; border-radius: 0 0 8px 8px;
      background: rgba(18, 6, 0, 0.92); overflow: hidden;
      transform-origin: bottom center; transition: transform 0.18s;
      box-shadow: 0 0 16px rgba(220,100,20,0.7);
    }
    .vg-ghost.tilting { transform: rotate(-42deg); }
    .vg-ghost-liquid {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(180deg, rgba(200,85,5,0.9) 0%, rgba(140,40,0,0.97) 100%);
      transition: height 0.18s ease;
    }
    .beaker-pour-row { display: flex; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 16px; }
    .beaker-drop-zone {
      position: relative; padding: 10px 12px;
      border: 2px dashed rgba(80,120,160,0.3); border-radius: 12px;
      transition: border-color 0.2s, background 0.2s;
    }
    .beaker-drop-zone.active {
      border-color: rgba(0,210,120,0.75); background: rgba(0,80,55,0.14);
    }
    .beaker-drops {
      position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
      width: 30px; height: 40px; pointer-events: none; overflow: visible;
    }
    .beaker-drop-label { font-size: 10px; color: #4a6a8a; font-style: italic; text-align: center; margin-top: 4px; }
    .pour-readout { display: flex; flex-direction: column; gap: 8px; }
    .vol-display {
      background: rgba(10,25,45,0.9); border-radius: 10px; padding: 12px 16px;
      border: 1px solid #1a4a6a; min-width: 150px;
    }
    .vol-display-row { display: flex; align-items: center; gap: 8px; color: #a0c8e0; font-size: 14px; font-weight: 600; }
    .vol-display-row.secondary { margin-top: 6px; color: #607890; font-size: 13px; font-weight: 400; }
    .vol-display-icon { font-size: 18px; }
    .vol-display-tip { font-size: 11px; color: #4a7090; margin-top: 8px; font-style: italic; }
    .sim-btn-sm {
      padding: 6px 14px; border-radius: 8px;
      background: transparent; color: #607890;
      border: 1.5px solid #2a4a6a; font-size: 12px;
      cursor: pointer; transition: all 0.2s;
    }
    .sim-btn-sm:hover { border-color: #4a7a9a; color: #aac8e0; }
    .sim-drop {
      position: absolute; width: 5px; height: 9px;
      border-radius: 50% 50% 45% 45%; background: rgba(160, 65, 0, 0.92);
      left: calc(50% + var(--spread, 0px)); transform: translateX(-50%);
      animation: simDropFall var(--dur, 0.45s) ease-in forwards;
    }
    @keyframes simDropFall {
      from { transform: translateX(-50%) translateY(0);    opacity: 1; }
      to   { transform: translateX(-50%) translateY(80px); opacity: 0; }
    }

    /* ── Beaker visualisation ─────────────────────────── */
    .beaker-wrap { display: flex; flex-direction: column; align-items: center; }
    .beaker {
      position: relative; width: 70px; height: 140px;
      border: 3px solid #88bbcc; border-top: none;
      border-radius: 0 0 8px 8px;
      overflow: hidden; background: rgba(20, 50, 70, 0.3);
    }
    .beaker-scale {
      position: absolute; right: 4px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 8px; color: #88aaaa; pointer-events: none;
      padding: 2px 0;
    }
    .beaker-water {
      position: absolute; left: 0; right: 0;
      background: rgba(100, 170, 220, 0.5);
      transition: height 0.5s ease, bottom 0.5s ease;
      border-bottom: 1px solid rgba(120, 200, 255, 0.4);
    }
    .beaker-vinasse {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: rgba(100, 40, 0, 0.85);
      transition: height 0.5s ease;
      border-top: 1px solid rgba(160, 80, 20, 0.6);
    }
    .vol-legend { font-size: 12px; color: #8090a0; line-height: 1.8; }
    .legend-box { display: inline-block; width: 12px; height: 12px; margin-right: 4px; vertical-align: middle; border-radius: 2px; }
    .water-box   { background: rgba(100, 170, 220, 0.8); }
    .vinasse-box { background: rgba(100, 40, 0, 0.9); }

    /* ── Sim button ───────────────────────────────────── */
    .sim-btn {
      display: inline-block; margin-top: 14px;
      padding: 11px 26px; border-radius: 10px;
      background: linear-gradient(135deg, #0a5080, #0a8080);
      color: #fff; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .sim-btn:hover:not(:disabled) { filter: brightness(1.2); }
    .sim-btn:disabled { opacity: 0.4; cursor: default; }
    .sim-btn.hidden { display: none; }

    /* ── Parameter cards ──────────────────────────────── */
    .param-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px; margin-bottom: 14px;
    }
    .param-card {
      background: rgba(10, 25, 45, 0.9); border-radius: 10px;
      padding: 12px 14px; border-left: 4px solid #444;
      display: flex; flex-direction: column; gap: 3px;
    }
    .param-card.danger { border-left-color: #e74c3c; }
    .param-card.warn   { border-left-color: #f39c12; }
    .param-card.good   { border-left-color: #2ecc71; }
    .param-card.neutral{ border-left-color: #3498db; }
    .param-icon  { font-size: 20px; }
    .param-label { font-size: 11px; color: #7090a0; text-transform: uppercase; letter-spacing: 0.5px; }
    .param-value { font-size: 18px; font-weight: 800; color: #d0f0ff; }
    .param-sub   { font-size: 11px; color: #8090a0; }

    .titration-note {
      background: rgba(10, 30, 50, 0.8); border-left: 4px solid #1a6a8a;
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      color: #a0c8d8; margin-bottom: 4px; line-height: 1.6;
    }

    /* ── Aerator panel ────────────────────────────────── */
    .aerator-panel { display: flex; gap: 28px; align-items: flex-start; flex-wrap: wrap; }
    .aerator-visual { flex-shrink: 0; }
    .aerator-tank {
      width: 150px; height: 100px;
      border: 3px solid #4a6a7a; border-top: none;
      border-radius: 0 0 10px 10px;
      background: rgba(5, 20, 35, 0.8);
      position: relative; overflow: hidden;
    }
    .aerator-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 70%;
      background: rgba(80, 30, 5, 0.85);
      transition: background 1s;
    }
    .bubble-container { position: absolute; inset: 0; pointer-events: none; }
    .bubble {
      position: absolute; bottom: 0;
      background: rgba(180, 220, 255, 0.5);
      border-radius: 50%;
      animation: bubbleRise linear infinite;
    }
    @keyframes bubbleRise {
      from { bottom: 0; opacity: 0.7; }
      to   { bottom: 100%; opacity: 0; transform: translateX(8px); }
    }
    .aerator-machine {
      width: 150px; height: 40px;
      background: linear-gradient(180deg, #3a4a5a, #2a3540);
      border-radius: 6px; display: flex; align-items: center;
      padding: 0 12px; gap: 10px; margin-top: 4px;
      border: 2px solid #4a6a7a;
    }
    .motor-body {
      width: 22px; height: 22px; border-radius: 50%;
      background: #607080; border: 3px solid #9ab0c0;
    }
    .motor-shaft {
      flex: 1; height: 6px; background: #607080; border-radius: 3px;
    }
    .aerator-machine.running .motor-body {
      background: #80c040; border-color: #a0ff60;
      box-shadow: 0 0 10px rgba(120, 255, 60, 0.6);
      animation: motorSpin 0.4s linear infinite;
    }
    @keyframes motorSpin {
      from { transform: rotate(0deg); } to { transform: rotate(360deg); }
    }

    .aerator-controls { flex: 1; min-width: 220px; }
    .toggle-label {
      display: flex; align-items: center; gap: 12px;
      font-size: 14px; font-weight: 600; color: #a0c8d8; margin-bottom: 18px;
    }
    .toggle-switch { position: relative; width: 46px; height: 24px; }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .toggle-slider {
      position: absolute; inset: 0; cursor: pointer;
      background: #2a3a4a; border-radius: 24px; transition: 0.3s;
    }
    .toggle-slider:before {
      content: ''; position: absolute;
      width: 18px; height: 18px; border-radius: 50%;
      background: #8090a0; left: 3px; top: 3px; transition: 0.3s;
    }
    .toggle-switch input:checked + .toggle-slider { background: #0a6040; }
    .toggle-switch input:checked + .toggle-slider:before {
      background: #40ff80; transform: translateX(22px);
      box-shadow: 0 0 8px rgba(60, 255, 100, 0.7);
    }
    .status-on  { color: #40ff80; font-weight: 800; }
    .status-off { color: #ff5540; font-weight: 800; }

    .duration-wrap label { font-size: 13px; color: #7090a0; margin-bottom: 8px; display: block; }
    .duration-wrap.locked { opacity: 0.4; pointer-events: none; }
    .duration-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
    .dur-btn {
      padding: 8px 14px; border-radius: 7px;
      border: 2px solid #1a3a5a; background: rgba(10, 25, 45, 0.8);
      color: #7090a0; cursor: pointer; font-size: 13px; transition: all 0.2s;
    }
    .dur-btn:hover { border-color: #0088cc; color: #00aaff; }
    .dur-btn.active { border-color: #00ccff; color: #00ccff; background: rgba(0, 150, 200, 0.12); }

    /* ── Results table ────────────────────────────────── */
    .results-grid {
      display: grid; gap: 1px; border-radius: 8px; overflow: hidden;
      border: 1px solid #1a3a5a; margin-bottom: 14px;
    }
    .results-header-row,
    .results-row {
      display: grid;
      grid-template-columns: 1.4fr 1.2fr 1.2fr 0.9fr 1fr 0.6fr;
      gap: 0; padding: 8px 12px; font-size: 13px; align-items: center;
    }
    .results-header-row {
      background: rgba(10, 40, 70, 0.9); color: #7090a0;
      font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .results-row { background: rgba(8, 20, 38, 0.8); color: #c0d8e8; }
    .results-row:nth-child(even) { background: rgba(10, 25, 45, 0.8); }
    .results-row.pass  { border-left: 3px solid #2ecc71; }
    .results-row.fail  { border-left: 3px solid #e74c3c; }

    .compliance-banner {
      padding: 10px 16px; border-radius: 8px; font-size: 14px;
      margin-bottom: 12px; text-align: center;
    }
    .compliance-banner.compliant {
      background: rgba(30, 100, 40, 0.25); border: 1px solid #2ecc71; color: #80ee90;
    }
    .compliance-banner.not-compliant {
      background: rgba(100, 20, 20, 0.25); border: 1px solid #e74c3c; color: #ff8888;
    }

    .sim-conclusion {
      background: rgba(10, 30, 50, 0.8); border-left: 4px solid #1a6080;
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      color: #a0c8d8; line-height: 1.7; margin-bottom: 16px;
    }

    /* ── Eval question ────────────────────────────────── */
    .sim-question-wrap { border-top: 1px solid #1a3a5a; padding-top: 18px; }
    .sim-question {
      background: rgba(10, 25, 45, 0.8); border-left: 4px solid #e67e22;
      padding: 10px 14px; border-radius: 6px; font-size: 14px;
      color: #d8e8f0; margin-bottom: 12px; line-height: 1.6;
    }
    .sim-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
    .sim-option-btn {
      padding: 10px 14px; border-radius: 8px;
      border: 2px solid #1a3a5a; background: rgba(10, 25, 45, 0.8);
      color: #c0d8e8; cursor: pointer; text-align: left; font-size: 14px;
      transition: all 0.2s;
    }
    .sim-option-btn:hover:not(:disabled) { border-color: #00aaff; color: #00d4ff; }
    .sim-option-btn.correct { border-color: #2ecc71; background: rgba(30, 100, 40, 0.2); color: #80ee90; }
    .sim-option-btn.wrong   { border-color: #e74c3c; background: rgba(100, 20, 20, 0.2); color: #ff8888; }
    .sim-option-btn:disabled { opacity: 0.65; cursor: default; }

    .sim-feedback {
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      line-height: 1.6; margin-bottom: 8px;
    }
    .sim-feedback.hidden  { display: none; }
    .sim-feedback.correct { background: rgba(30, 100, 40, 0.2); border-left: 4px solid #2ecc71; color: #a0e8a0; }
    .sim-feedback.wrong   { background: rgba(100, 20, 20, 0.2); border-left: 4px solid #e74c3c; color: #ff9090; }

    /* ── TDS/DO Meter (two-stick design) ────────────── */
    .meter-layout { display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px; }
    .meter-instrument-row { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
    /* --- Display unit (left stick) --- */
    .meter-display-unit { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .mdu-head {
      width: 108px; background: linear-gradient(180deg,#0a1e2e,#102838);
      border: 2px solid #2a6a7a; border-radius: 7px 7px 4px 4px;
      padding: 8px; display: flex; flex-direction: column; align-items: center; gap: 5px;
    }
    .mdu-brand { font-size: 8px; color: #2a9a7a; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
    .mdu-screen {
      width: 100%; background: #040e06; border: 1px solid #1a4a2a;
      border-radius: 4px; padding: 5px 7px; display: flex; flex-direction: column; gap: 3px;
    }
    .mdu-stick { width: 14px; height: 68px; background: linear-gradient(180deg,#2a5a7a,#1a3a5a); border: 1px solid #3a7a9a; border-top: none; border-radius: 0 0 5px 5px; }
    .mr-row  { display: flex; align-items: baseline; gap: 3px; }
    .mr-lbl  { color: #2a8a5a; width: 26px; font-size: 9px; font-weight: 800; letter-spacing: 0.5px; flex-shrink: 0; }
    .mr-val  { color: #00ff8a; font-size: 16px; font-weight: 900; font-family: monospace; min-width: 36px; text-align: right; }
    .mr-unit { color: #2a7a5a; font-size: 9px; }
    /* --- Decorative cable --- */
    .meter-cable-svg { width: 80px; height: 40px; flex-shrink: 0; }
    /* --- Probe column --- */
    .meter-probe-column { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    /* Draggable probe stick */
    .meter-probe-stick {
      display: flex; flex-direction: column; align-items: center;
      cursor: grab; user-select: none; transition: opacity 0.2s;
    }
    .meter-probe-stick:active { cursor: grabbing; }
    .meter-probe-stick.probe-dipped { opacity: 0.45; cursor: not-allowed; }
    .mps-handle {
      width: 30px; height: 22px;
      background: linear-gradient(180deg,#3a6a8a,#2a5a7a);
      border: 1.5px solid #4a8a9a; border-radius: 4px 4px 2px 2px;
      display: flex; align-items: center; justify-content: center; font-size: 12px; color: #88ccdd;
    }
    .mps-shaft { width: 6px; height: 50px; background: linear-gradient(180deg,#4a8aaa,#2a6a8a); border-left: 1px solid #5a9aaa; border-right: 1px solid #2a6a7a; }
    .mps-tip { width: 14px; height: 14px; background: radial-gradient(circle,#40ffaa,#00cc80); border-radius: 50%; box-shadow: 0 0 8px rgba(0,220,130,0.8); }
    /* Ghost (follows cursor while dragging) */
    .meter-probe-ghost { position: fixed; pointer-events: none; z-index: 9999; display: flex; flex-direction: column; align-items: center; }
    /* Beaker / drop zone */
    .meter-beaker-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .meter-beaker {
      position: relative; width: 86px; height: 110px;
      border: 2.5px solid #4a8a9a; border-top: none; border-radius: 0 0 10px 10px;
      overflow: hidden; background: rgba(8,22,35,0.5); transition: border-color 0.2s;
    }
    .meter-beaker.drop-hover { border-color: #00ff8a; box-shadow: 0 0 10px rgba(0,255,138,0.4); }
    .meter-bk-vinasse { position: absolute; bottom: 0; left: 0; right: 0; height: 0%; background: rgba(100,38,0,0.88); transition: height 0.6s ease; }
    .meter-bk-scale {
      position: absolute; right: 3px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 7px; color: #88aaaa; pointer-events: none; padding: 2px 0;
    }
    .meter-bk-ripple {
      position: absolute; left: 50%; transform: translateX(-50%);
      width: 16px; height: 8px; border: 1.5px solid rgba(255,255,255,0.55); border-radius: 50%;
      opacity: 0; pointer-events: none;
    }
    @keyframes rippleMeter {
      0%   { opacity: 0.9; transform: translateX(-50%) scale(1); }
      100% { opacity: 0;   transform: translateX(-50%) scale(5); }
    }
    .meter-bk-ripple.ripple-active { animation: rippleMeter 0.55s ease-out forwards; }
    .meter-bk-label { font-size: 11px; color: #4a7a9a; text-align: center; }
    .meter-instruction {
      background: rgba(10,25,45,0.7); border-left: 3px solid #1a6a8a;
      padding: 9px 12px; border-radius: 5px; font-size: 13px; color: #80a8c0; line-height: 1.5;
    }
    .meter-result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 10px; }
    .meter-result-grid.hidden { display: none; }
    .meter-note {
      background: rgba(10,30,50,0.8); border-left: 4px solid #1a6a8a;
      padding: 10px 14px; border-radius: 6px; font-size: 13px; color: #a0c8d8; line-height: 1.6;
    }
    .meter-note.hidden { display: none; }
    .meter-source { margin-top: 7px; font-size: 11px; color: #4a7090; font-style: italic; }
    .sim-btn-back { display: inline-block; margin-top: 14px; margin-left: 8px; padding: 11px 20px; border-radius: 10px; background: rgba(100,100,100,0.3); color: #aaa; font-size: 14px; font-weight: 600; border: 1px solid rgba(100,100,100,0.5); cursor: pointer; transition: all 0.2s; }
    .sim-btn-back:hover { background: rgba(100,100,100,0.5); color: #ddd; }
    .sim-btn-back.hidden { display: none; }
    .sim-btn-back { display: inline-block; margin-top: 14px; padding: 11px 20px; border-radius: 10px; background: rgba(100,100,100,0.4); color: #ccc; font-size: 14px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .sim-btn-back:hover { background: rgba(120,120,120,0.6); color: #fff; }
    .sim-btn-back.hidden { display: none; }
    .titration-layout {
    .tit-apparatus {
      display: flex; flex-direction: column; align-items: center; flex-shrink: 0;
    }
    .tit-label-sm { font-size: 11px; color: #6080a0; text-align: center; margin-bottom: 4px; }
    .tit-burette {
      width: 30px; height: 150px;
      border: 2px solid #5a7a9a; border-radius: 3px 3px 0 0;
      position: relative; overflow: hidden;
      background: rgba(5, 10, 20, 0.5);
    }
    .tit-burette-liquid {
      position: absolute; top: 0; left: 0; right: 0;
      background: linear-gradient(180deg, rgba(80,0,150,.9), rgba(160,0,230,.9));
      transition: height .4s ease;
    }
    .tit-burette-scale {
      position: absolute; right: 2px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 7px; color: rgba(255,255,255,.35); pointer-events: none; padding: 2px 0;
    }
    .tit-tip-col {
      display: flex; flex-direction: column; align-items: center; position: relative;
    }
    .tit-tip-line { width: 7px; height: 26px; background: linear-gradient(180deg,#4a6a8a,#3a5a7a); }
    .tit-drop {
      position: absolute; top: 18px;
      width: 10px; height: 13px;
      background: rgba(160, 0, 240, 0.9);
      border-radius: 50% 50% 60% 60%;
      opacity: 0;
    }
    @keyframes titDropFall {
      0%   { opacity: 1; transform: translateY(0)    scaleY(1);   }
      40%  { opacity: 1; transform: translateY(28px) scaleY(1.1); }
      100% { opacity: 0; transform: translateY(82px) scaleY(0.7); }
    }
    .tit-drop.falling { animation: titDropFall .55s ease-in forwards; }
    .tit-flask {
      width: 120px; height: 88px;
      border: 2px solid #5a7a9a; border-radius: 4px 4px 12px 12px;
      position: relative; overflow: hidden;
      background: rgba(5, 15, 25, 0.4);
    }
    .tit-flask-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 65%;
      transition: background 1s ease;
    }
    .tit-ripple {
      position: absolute; bottom: 62%; left: 50%; transform: translateX(-50%);
      width: 10px; height: 5px;
      border: 1.5px solid rgba(255,255,255,.45); border-radius: 50%;
      opacity: 0; pointer-events: none;
    }
    @keyframes rippleSpread {
      0%   { opacity: .8; transform: translateX(-50%) scale(1); }
      100% { opacity: 0;  transform: translateX(-50%) scale(5); }
    }
    .tit-ripple.ripple-active { animation: rippleSpread .5s ease-out forwards; }
    .tit-vol-display { font-size: 12px; color: #7090a0; margin-top: 7px; text-align: center; }
    .tit-vol-display span { font-size: 15px; font-weight: 700; color: #90b8d0; }
    .tit-panel { flex: 1; min-width: 200px; }
    .tit-reagent-box {
      display: flex; gap: 10px; align-items: flex-start;
      background: rgba(70,0,120,.12); border: 1px solid rgba(120,0,200,.3);
      border-radius: 8px; padding: 10px 12px; margin-bottom: 14px;
      font-size: 13px; color: #b0a0d0; line-height: 1.5;
    }
    .tit-reagent-dot {
      width: 18px; height: 18px; border-radius: 50%;
      background: rgba(140,0,220,.85); border: 1px solid rgba(200,100,255,.5);
      flex-shrink: 0; margin-top: 2px;
    }
    .tit-status {
      background: rgba(10,25,45,.7); border-left: 3px solid rgba(120,0,200,.5);
      padding: 9px 12px; border-radius: 5px;
      font-size: 13px; color: #a090c0; margin-bottom: 14px; line-height: 1.5;
    }
    .tit-ep-notice {
      background: rgba(30,80,40,.25); border: 1px solid #2ecc71; color: #80ee90;
      padding: 9px 12px; border-radius: 7px; font-size: 13px; margin-bottom: 14px;
    }
    .tit-ep-notice.hidden { display: none; }
    .tit-drop-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .tit-btn {
      padding: 10px 18px; border-radius: 9px; border: none; cursor: pointer;
      font-size: 14px; font-weight: 700; transition: all .2s;
    }
    .tit-primary   { background: linear-gradient(135deg,#1a4a8a,#1a6aaa); color: #fff; }
    .tit-primary:hover:not(:disabled)   { filter: brightness(1.2); }
    .tit-secondary { background: rgba(50,20,80,.7); border: 1px solid rgba(120,0,200,.5); color:#c090e0; }
    .tit-secondary:hover:not(:disabled) { border-color: rgba(180,60,255,.7); color:#d8b0ff; }
    .tit-btn:disabled { opacity: .4; cursor: default; }
    .tit-results { margin-top: 20px; }
    .tit-results.hidden { display: none; }
    .tit-results-heading {
      font-size: 14px; font-weight: 700; color: #60b0d0;
      margin-bottom: 12px; padding-top: 16px; border-top: 1px solid #1a3a5a;
    }

    /* ── Valve titration controls ─────────────────────────── */
    .tit-valve-section { display:flex; flex-direction:column; gap:10px; }
    .tit-valve-visual {
      display:flex; align-items:center; gap:14px;
      background:rgba(5,15,30,0.7); border:1px solid #1a3a5a;
      border-radius:10px; padding:10px 14px;
    }
    .tit-valve-wheel {
      width:46px; height:46px; border-radius:50%;
      border:3px solid #2a4a6a; background:rgba(10,25,45,0.9);
      position:relative; flex-shrink:0;
      transition:border-color 0.2s, box-shadow 0.2s;
    }
    .tit-valve-wheel::before {
      content:''; position:absolute;
      width:80%; height:4px; background:#2a4a6a;
      top:50%; left:10%; transform:translateY(-50%);
      border-radius:2px; transition:background 0.2s;
    }
    .tit-valve-wheel::after {
      content:''; position:absolute;
      width:4px; height:80%; background:#2a4a6a;
      left:50%; top:10%; transform:translateX(-50%);
      border-radius:2px; transition:background 0.2s;
    }
    .tit-valve-wheel.slow {
      border-color:#0088ff;
      animation:valveSpin 1.4s linear infinite;
    }
    .tit-valve-wheel.slow::before, .tit-valve-wheel.slow::after { background:#0088ff; }
    .tit-valve-wheel.fast {
      border-color:#ff4400;
      animation:valveSpin 0.28s linear infinite;
      box-shadow:0 0 12px rgba(255,80,0,0.5);
    }
    .tit-valve-wheel.fast::before, .tit-valve-wheel.fast::after { background:#ff6600; }
    @keyframes valveSpin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
    .tit-valve-info { flex:1; min-width:0; }
    .tit-valve-label {
      font-size:13px; font-weight:800; color:#6080a0;
      letter-spacing:1px; transition:color 0.2s; margin-bottom:2px;
    }
    .tit-valve-sublabel { font-size:11px; color:#405060; line-height:1.4; }
    .tit-flow-indicator { font-size:12px; color:#5070a0; display:flex; align-items:center; gap:6px; }
    .tit-hold-row { display:flex; gap:8px; }
    .tit-valve-slow, .tit-valve-fast {
      flex:1; padding:10px 12px; border-radius:9px;
      font-size:13px; font-weight:700; cursor:pointer;
      transition:all 0.15s; user-select:none; -webkit-user-select:none;
    }
    .tit-valve-slow {
      background:linear-gradient(135deg,#0a3060,#0a5080);
      color:#70ccff; border:1px solid #0a60a0;
    }
    .tit-valve-slow:active { background:linear-gradient(135deg,#0a4080,#0a70b0); box-shadow:0 0 10px rgba(0,150,255,0.4); }
    .tit-valve-fast {
      background:linear-gradient(135deg,#3a1010,#6a2010);
      color:#ff9060; border:1px solid #802010;
    }
    .tit-valve-fast:active { background:linear-gradient(135deg,#502020,#9a3020); box-shadow:0 0 10px rgba(255,100,0,0.4); }
    .tit-valve-slow:disabled, .tit-valve-fast:disabled { opacity:0.35; cursor:default; }
    .tit-warning {
      background:rgba(80,50,0,0.3); border:1px solid #c08020;
      color:#ffc040; border-radius:7px; padding:8px 12px;
      font-size:13px; font-weight:600;
    }
    .tit-warning.hidden { display:none; }
    .tit-overflow {
      background:rgba(100,10,10,0.35); border:1px solid #cc2020;
      border-radius:8px; padding:12px 14px;
      display:flex; flex-direction:column; gap:8px;
    }
    .tit-overflow.hidden { display:none; }
    .tit-overflow-msg { font-size:13px; font-weight:700; color:#ff7070; }
    .tit-overflow-sub { font-size:12px; color:#ff9090; line-height:1.5; }
    @keyframes flaskShake {
      0%,100% { transform:translateX(0); }
      15%  { transform:translateX(-5px) rotate(-1.5deg); }
      30%  { transform:translateX(5px)  rotate( 1.5deg); }
      50%  { transform:translateX(-4px) rotate(-1deg); }
      70%  { transform:translateX(4px); }
    }
    .tit-flask.overflow-shake {
      animation:flaskShake 0.5s ease-in-out;
      border-color:#cc2020 !important;
      box-shadow:0 0 18px rgba(200,30,30,0.6);
    }
    .overflow-particle {
      position:absolute; width:5px; height:9px;
      background:rgba(160,0,220,0.75); border-radius:50%;
      pointer-events:none;
      animation:overflowSpill 1.2s ease-out forwards;
    }
    @keyframes overflowSpill {
      0%   { transform:translateY(0)     scaleY(1);   opacity:0.85; }
      50%  { transform:translateY(-20px) scaleY(1.3); opacity:0.5; }
      100% { transform:translateY(-50px) scaleY(0.4); opacity:0; }
    }
    /* keep titration CSS class names but hide unused elements gracefully */
    .titration-layout, .tit-apparatus, .tit-panel,
    .tit-burette, .tit-flask, .tit-valve-section { display: none; }
  `,e=document.createElement("style");e.id="sim-styles",e.textContent=n,document.head.appendChild(e)}const Es={context:`
    Limbah vinasse dikenal memiliki warna hitam pekat karena kandungan pigmen melanoidin yang sulit terurai dan senyawa fenolik yang bersifat antimikroba.<br><br>
    Seorang siswa mencoba membuat POC (Pupuk Organik Cair) dari vinasse dengan memasukkan biostarter yang berisi <em>Staphylococcus aureus</em> dan <em>Streptococcus sp.</em>, dengan alasan bahwa kedua bakteri ini dikenal dapat menguraikan jaringan pada infeksi, sehingga dianggap juga mampu menguraikan bahan organik limbah dengan cepat.<br><br>
    Setelah 21 hari, kadar pencemaran (COD) dalam vinasse tidak turun secara signifikan dan warna cairan tetap hitam pekat, menandakan proses penguraian gagal total.
  `,question:"Berdasarkan karakteristik limbah dan fisiologi mikroba, berikan evaluasi kesalahan yang dilakukan siswa tersebut dalam memilih mikroorganisme adalah…",options:[{label:"A",text:"Mikroorganisme yang dipilih adalah bakteri patogen yang membutuhkan inang hidup, sehingga mereka mati karena tidak terdapat jaringan hidup di dalam limbah vinasse.",correct:!1},{label:"B",text:"Siswa tidak menggunakan mikroorganisme spesifik yang memiliki resistensi terhadap senyawa fenolik dan enzim khusus untuk memutus ikatan pigmen melanoidin.",correct:!0},{label:"C",text:"Kedua bakteri tersebut adalah bakteri anaerob obligat yang langsung mati saat terkena oksigen di permukaan limbah cair.",correct:!1}],explanation:"✅ <strong>Benar!</strong> Vinasse mengandung Melanoidin dan Fenol. Senyawa fenolik bersifat bakterisidal bagi mikroba biasa yang tidak memiliki mekanisme pertahanan diri. Pengolahan vinasse membutuhkan mikroba yang mampu bertahan hidup di lingkungan yang mengandung racun fenol dengan kadar COD, BOD, pH yang tinggi."},Ca=[{id:"azolla",name:"Azolla microphylla",image:"Azolla-microphylla.png",price:50,pigment:"Klorofil a+b (hijau)",description:`Paku air (fern) akuatik yang bersimbiosis dengan sianobakteri
      <em>Anabaena azollae</em>. Melalui fotosintesis menghasilkan O₂ ke limbah.
      Akarnya mengeluarkan <em>eksudat rizosfer</em> yang mengandung enzim pengurai
      bahan organik. Efektif menurunkan BOD dan COD — potensi penurunan COD hingga
      <b>96%</b> melalui fitoremediasi.`,citation:"Thepsilvisut et al., 2024; Rizky et al., 2017",outcome:"reward_high",rewardText:`🏆 <b>Pilihan Terbaik!</b> <em>Azolla</em> adalah agen fitoremediasi yang sangat
      efektif untuk vinasse. Akar dan eksudat rizosfernya mampu menyerap polutan organik,
      nutrisi, dan menurunkan COD hingga <b>96%</b>. Nilai poin bonus diberikan!`},{id:"nannochloropsis",name:"Nannochloropsis",image:"Nannochlopsis.png",price:30,pigment:"Klorofil a + karotenoid (hijau kekuningan)",description:`Mikroalga laut berukuran sangat kecil (~2–5 µm) dengan dinding sel
      yang sangat kuat. Kaya akan pigmen karotenoid. Hidup pada lingkungan dengan
      <b>salinitas tinggi</b>. Umumnya spesies laut; tidak toleran terhadap air tawar.`,citation:"Puente-Padilla et al., 2025",outcome:"punishment",punishmentText:`⛔ <b>Pilihan Salah!</b> <em>Nannochloropsis</em> adalah spesies laut yang
      membutuhkan salinitas tinggi. Vinasse adalah limbah industri gula/etanol berbasis
      air tawar — lingkungan ini tidak sesuai dan alga akan mati sebelum bekerja.
      Kamu kehilangan 1 nyawa!`},{id:"spirulina",name:"Spirulina platensis",image:"Spirulina-plantesis.png",price:40,pigment:"Fikosianin (biru), klorofil a (hijau)",description:`Sianobakteri filamen dengan pertumbuhan relatif cepat. Bersifat
      <em>fotoheterotrof</em> — membutuhkan cahaya dan CO₂. Menyukai kondisi
      <b>pH basa</b> (pH 8–11). Mengandung karbohidrat tinggi dan pigmen fikosianin
      yang khas berwarna biru.`,citation:"Asghari et al., 2016; Sinaga et al., 2020; Yuliandri et al., 2013",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Cukup Baik.</b> <em>Spirulina</em> memang efektif menyerap
      nutrien, namun ia menyukai kondisi pH basa sementara vinasse umumnya asam (pH 3–5).
      Perlu pengkondisian pH terlebih dahulu. Skor sedang diberikan.`},{id:"chlorella",name:"Chlorella vulgaris",image:"Chlorella-vulgaris.png",price:40,pigment:"Klorofil a+b, karotenoid (hijau)",description:`Mikroalga <em>kosmopolitan</em> yang toleran terhadap lingkungan tercemar.
      Memiliki <b>fitohormon dan poliamin</b> untuk adaptasi ekosistem air tercemar.
      Mampu memecah <b>lignin dan senyawa melanoidin</b>. Dapat hidup pada kondisi
      anaerobik. Banyak digunakan dalam penelitian bioremediasi vinasse.`,citation:"Hallmann et al., 2016; Rahmanta et al., 2025",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Baik!</b> <em>Chlorella vulgaris</em> adalah mikroalga
      kosmopolitan yang toleran dan mampu memecah melanoidin. Sangat relevan untuk
      bioremediasi vinasse. Skor sedang diberikan.`}],nv={azolla:{dose:"200 g biomassa segar / L vinasse",duration:"7 hari",codRemoval:"96%",bodRemoval:"94%",notes:"Pertahankan cahaya cukup (> 1000 lux) dan suhu 25–30 °C."},nannochloropsis:{dose:"—",duration:"—",codRemoval:"~0%",bodRemoval:"~0%",notes:"⛔ Tidak cocok untuk vinasse air tawar. Alga akan mati dalam 24 jam."},spirulina:{dose:"1 g biomassa kering / L vinasse (+ buffer pH 8)",duration:"14 hari",codRemoval:"55%",bodRemoval:"60%",notes:"Perlu netralisasi pH vinasse ke 7–8 sebelum inokulasi."},chlorella:{dose:"0.5 g biomassa kering / L vinasse",duration:"10 hari",codRemoval:"70%",bodRemoval:"75%",notes:"Pertahankan kondisi anaerob-fakultatif. Berikan CO₂ setiap 2 hari."}};function yc(n,e){const t=nv[n];if(!t||t.codRemoval==="~0%")return null;const i=t.dose.match(/^([\d.]+)\s*(g\s*biomassa\s*(?:segar|kering))/i),a=i?parseFloat(i[1]):.5,s=i?i[2].trim():"g";return{total:(a*e).toFixed(1),unit:s,duration:t.duration,codRemoval:t.codRemoval,bodRemoval:t.bodRemoval,notes:t.notes}}const ve=n=>document.getElementById(n);function iv(n){lv(),cv(),Va(),dv(),av(()=>{sv(e=>{rv(e,()=>{ov(n)})})})}function av(n){const e=Gs("s3-overlay");e.innerHTML=`
    <div class="s3-card" id="s3-challenge-card">
      <div class="s3-header">
        <span class="s3-badge">🧪 LEVEL 3 – MENEMUKAN SOLUSI</span>
        <h2 class="s3-title">Tantangan: Pilih Mikroorganisme yang Tepat</h2>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step active">1. Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">2. Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <div class="s3-context" id="s3-ctx"></div>
      <div class="s3-question" id="s3-q"></div>
      <div class="s3-options"  id="s3-opts"></div>
      <div class="s3-feedback hidden" id="s3-fb"></div>
      <button class="s3-btn hidden" id="s3-next-challenge">
        🛒 Lanjut ke Toko Mikroorganisme →
      </button>
    </div>
  `,document.body.appendChild(e),ve("s3-ctx").innerHTML=Es.context,ve("s3-q").innerHTML=`<strong>❓ Pertanyaan:</strong><br>${Es.question}`;const t=ve("s3-opts");let i=!1;Es.options.forEach(a=>{const s=document.createElement("button");s.className="s3-option",s.innerHTML=`<strong>${a.label}.</strong> ${a.text}`,s.onclick=()=>{if(!i)if(a.correct){i=!0,s.classList.add("correct"),t.querySelectorAll(".s3-option").forEach(l=>l.disabled=!0);const r=ee.wrongAnswers??0,o=r===0?100:r<=2?50:25;ee.totalPoints+=o,ee.levelAttempts++,Wt(),wc("s3-fb",!0,Es.explanation+`<br><br>🎉 +${o} poin tambahan!`),ve("s3-next-challenge").classList.remove("hidden")}else s.classList.add("wrong"),s.disabled=!0,ee.wrongAnswers=(ee.wrongAnswers??0)+1,Wt(),wc("s3-fb",!1,"❌ Kurang tepat. Coba pilihan lain!")},t.appendChild(s)}),ve("s3-next-challenge").onclick=()=>{Va(),n()}}function sv(n){const e=Gs("s3-overlay");e.innerHTML=`
    <div class="s3-card s3-shop-card">
      <div class="s3-header">
        <span class="s3-badge">🛒 TOKO MIKROORGANISME</span>
        <h2 class="s3-title">Pilih Mikroorganisme untuk Bioremediasi Vinasse</h2>
        <p class="s3-subtitle">Poin kamu saat ini: <span id="s3-shop-pts" class="s3-pts-badge"></span>
        — Pilih mikroorganisme yang sesuai dengan karakteristik vinasse (air tawar, pH asam, melanoidin).</p>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">2. Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <div class="s3-shop-grid" id="s3-shop-grid"></div>

      <div class="s3-shop-result hidden" id="s3-shop-result"></div>
      <button class="s3-btn hidden" id="s3-btn-to-lab">🔬 Lanjut ke Lab Kalkulasi →</button>
      <button class="s3-btn s3-btn-restart hidden" id="s3-btn-restart">
        🔄 Poin tidak cukup — Mulai dari Awal
      </button>
    </div>
  `,document.body.appendChild(e);let t=null;function i(){const a=ve("s3-shop-grid");a.innerHTML="",Ca.forEach(s=>{const r=document.createElement("div");r.className="s3-micro-card",t&&s.id===t&&r.classList.add("chosen");const o=ee.totalPoints>=s.price;r.innerHTML=`
        <div class="s3-micro-img-wrap"><img src="${s.image}" alt="${s.name}" class="s3-micro-img"></div>
        <div class="s3-micro-name">${s.name}</div>
        <div class="s3-micro-pigment">🔬 Pigmen: ${s.pigment}</div>
        <div class="s3-micro-desc">${s.description}</div>
        <div class="s3-micro-citation">📄 ${s.citation}</div>
        <div class="s3-micro-price ${o?"":"unaffordable"}">
          💰 ${s.price} poin
          ${o?"":'<span class="s3-not-enough">(poin tidak cukup)</span>'}
        </div>
        <button class="s3-buy-btn ${!o||t?"disabled":""}"
                data-id="${s.id}" ${!o||t?"disabled":""}>
          ${t&&s.id===t?"✅ Dipilih":"Beli"}
        </button>
      `,a.appendChild(r)})}i(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin",ve("s3-shop-grid").addEventListener("click",a=>{const s=a.target.closest(".s3-buy-btn");if(!s||s.disabled||t)return;const r=Ca.find(l=>l.id===s.dataset.id);if(!r)return;ee.totalPoints-=r.price,Wt(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin";const o=ve("s3-shop-result");o.classList.remove("hidden"),r.outcome==="punishment"?(o.className="s3-shop-result punishment",o.innerHTML=r.punishmentText+"<br><br>💡 <b>Coba lagi</b> — pilih mikroorganisme yang lebih tepat!",i(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin",Ca.filter(d=>d.outcome!=="punishment").some(d=>ee.totalPoints>=d.price)||(o.innerHTML+="<br><br>⛔ <b>Poin kamu tidak cukup</b> untuk membeli mikroorganisme yang tepat.",ve("s3-btn-restart").classList.remove("hidden"))):(t=r.id,o.className="s3-shop-result "+(r.outcome==="reward_high"?"reward-high":"reward-mid"),o.innerHTML=r.rewardText,i(),setTimeout(()=>ve("s3-btn-to-lab").classList.remove("hidden"),800))}),ve("s3-btn-to-lab").onclick=()=>{Va(),n(t)},ve("s3-btn-restart").onclick=()=>{window.location.reload()}}function rv(n,e){const t=Ca.find(_=>_.id===n)||Ca[0],i=Gs("s3-overlay");i.innerHTML=`
    <div class="s3-card">
      <div class="s3-header">
        <span class="s3-badge">🔬 LAB KALKULASI</span>
        <h2 class="s3-title">Tuangkan Mikroorganisme ke Vinasse</h2>
        <p class="s3-subtitle">Mikroorganisme dipilih: <b>${t.name}</b></p>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <!-- Volume selector -->
      <div class="s3-lab-section">
        <label class="s3-lab-label">📦 Pilih Volume Vinasse yang Akan Diolah</label>
        <div class="s3-vol-btns">
          ${[10,50,100,500,1e3].map(_=>`
            <button class="s3-vol-btn" data-vol="${_}">${_} L</button>
          `).join("")}
        </div>
      </div>

      <!-- Sprinkler scene (hidden until volume picked) -->
      <div class="s3-sprinkler-scene hidden" id="s3-sprinkler-scene">
        <div class="s3-spk-label" id="s3-spk-dose-label"></div>
        <!-- Multi-glass pour scene -->
        <div class="s3-glass-pour-layout">
          <div class="s3-glass-side">
            <div class="s3-glass-row" id="s3-glass-row">
              <!-- glasses built by JS when volume is picked -->
            </div>
            <div class="s3-glass-hint" id="s3-pour-hint">↓ Seret gelas ke kolam vinasse</div>
          </div>
          <div class="s3-tank-side">
            <div class="s3-tank-drop-zone" id="s3-tank-drop-zone">
              <div class="s3-tank-drops" id="s3-tank-drops"></div>
              <div class="s3-spk-tank">
                <div class="s3-spk-vinasse"></div>
                <div class="s3-spk-micro-layer" id="s3-spk-micro-layer"></div>
                <div class="s3-spk-target-line" id="s3-spk-target-line"></div>
                <div class="s3-spk-tank-label">Kolam Vinasse</div>
              </div>
            </div>
            <div class="s3-tank-drop-lbl" id="s3-tank-drop-lbl">Jatuhkan di sini</div>
          </div>
        </div>
        <div class="s3-pour-counter hidden" id="s3-pour-counter">
          Dituangkan: <b id="s3-poured-amt">0.0</b> <span id="s3-poured-unit"></span>
          &nbsp;/&nbsp; Target: <b id="s3-target-amt"></b> <span id="s3-target-unit"></span>
        </div>
        <div class="s3-pour-progress-wrap hidden" id="s3-pour-progress-wrap">
          <div class="s3-pour-bar-fill" id="s3-pour-bar-fill"></div>
          <div class="s3-pour-target-mark"></div>
        </div>
        <div class="s3-pour-feedback hidden" id="s3-pour-feedback"></div>
        <button class="s3-btn hidden" id="s3-btn-confirm-pour">✅ Konfirmasi Takaran</button>
      </div>

      <!-- Result cards (hidden until pour complete) -->
      <div class="s3-lab-result hidden" id="s3-lab-result">
        <div class="s3-calc-grid" id="s3-calc-grid"></div>
        <div class="s3-lab-notes" id="s3-lab-notes"></div>
      </div>

      <button class="s3-btn hidden" id="s3-btn-to-valve">🚰 Aktifkan Kran Vinasse →</button>
    </div>
  `,document.body.appendChild(i);let a=null,s=0,r=!1,o=null,l=0,d=[],c=null,p=null,f=null,h=!1,g=null;const x=6,u={azolla:"#4ecb47",nannochloropsis:"#c8b820",spirulina:"#2ab8d8",chlorella:"#38d878"}[t.id]||"#80e880";i.querySelectorAll(".s3-vol-btn").forEach(_=>{_.onclick=()=>{i.querySelectorAll(".s3-vol-btn").forEach(V=>V.classList.remove("active")),_.classList.add("active"),a=parseInt(_.dataset.vol);const L=yc(n,a);g&&(g(),g=null),s=0,r=!1,ve("s3-lab-result").classList.add("hidden"),ve("s3-btn-to-valve").classList.add("hidden"),ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height="0%",ve("s3-pour-counter").classList.add("hidden"),ve("s3-pour-progress-wrap").classList.add("hidden"),ve("s3-pour-feedback").classList.add("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),ve("s3-pour-hint").classList.remove("hidden"),ve("s3-poured-amt").textContent="0.0",ve("s3-pour-bar-fill").style.width="0%",L?(ve("s3-target-amt").textContent=L.total,ve("s3-target-unit").textContent=L.unit,ve("s3-poured-unit").textContent=L.unit,ve("s3-spk-target-line").style.display=""):ve("s3-spk-target-line").style.display="none",ve("s3-spk-dose-label").innerHTML=L?`Dosis yang dibutuhkan: <b>${L.total} ${L.unit}</b> untuk ${a} L vinasse`:`⛔ ${t.name} tidak cocok untuk vinasse ini`,o=L;const M=L?parseFloat(L.total):0;l=M*.25,d=Array(x).fill(l),c=null;const E=ve("s3-glass-row");if(E.innerHTML="",L)for(let V=0;V<x;V++){const Q=document.createElement("div");Q.className="s3-micro-glass",Q.id=`s3-mg-${V}`,Q.dataset.idx=String(V),Q.innerHTML=`<div class="s3-mg-liquid" id="s3-mg-liq-${V}" style="background:${u};height:85%"></div><div class="s3-mg-label">¼</div>`,E.appendChild(Q)}const I=document.getElementById("s3-mg-ghost");I&&I.remove();const y=document.createElement("div");y.id="s3-mg-ghost",y.className="s3-mg-ghost hidden",y.innerHTML=`<div class="s3-mg-ghost-liquid" id="s3-mg-ghost-liquid" style="background:${u}"></div>`,document.body.appendChild(y);function T(V){const Q=document.getElementById(`s3-mg-liq-${V}`),O=document.getElementById(`s3-mg-${V}`);!Q||!O||(Q.style.height=l>0?d[V]/l*100+"%":"0%",d[V]<=0&&(O.classList.add("empty"),O.classList.remove("dragging")))}function N(){const V=document.getElementById("s3-tank-drops");if(!V)return;const Q=document.createElement("div");Q.className="s3-mg-drop",Q.style.background=u,Q.style.setProperty("--spread",(Math.random()-.5)*10+"px"),Q.style.setProperty("--dur",.26+Math.random()*.26+"s"),V.appendChild(Q),setTimeout(()=>Q.remove(),600)}function H(){if(p||c===null||!o)return;const V=M*1.5;p=setInterval(()=>{if(c===null||d[c]<=0||s>=V){ae();return}const Q=Math.max(M*.01,.001),O=Math.min(Q,d[c],V-s);d[c]-=O,s=Math.min(s+O,V),T(c),ve("s3-poured-amt").textContent=s.toFixed(1);const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?d[c]/l*100+"%":"0%");const j=Math.min(s/V,1)*30;ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height=j+"%",ve("s3-spk-micro-layer").style.background=u;const me=Math.min(s/V,1)*100;ve("s3-pour-bar-fill").style.width=me+"%";const he=M>0?s/M:0;ve("s3-pour-bar-fill").style.background=he<.7?"#20a0d0":he<.8?"#60d060":he<=1.2?"#00e870":he<=1.5?"#e8a020":"#e04020"},80),f=setInterval(N,55)}function ae(){clearInterval(p),clearInterval(f),p=f=null}function P(V,Q){y.style.left=V-18+"px",y.style.top=Q-60+"px";const O=document.getElementById("s3-tank-drop-zone");if(!O)return;const te=O.getBoundingClientRect(),j=V>=te.left&&V<=te.right&&Q>=te.top&&Q<=te.bottom;j!==h&&(h=j,O.classList.toggle("active",j),y.classList.toggle("tilting",j),j?H():ae())}function z(V,Q,O){var j;if(d[V]<=0)return;c=V,h=!1,(j=document.getElementById(`s3-mg-${V}`))==null||j.classList.add("dragging"),y.classList.remove("hidden");const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?d[V]/l*100+"%":"85%"),r||(r=!0,ve("s3-pour-hint").classList.add("hidden"),ve("s3-pour-counter").classList.remove("hidden"),ve("s3-pour-progress-wrap").classList.remove("hidden"),ve("s3-btn-confirm-pour").classList.remove("hidden")),P(Q,O)}function X(){var Q,O;if(c===null)return;ae(),T(c),(Q=document.getElementById(`s3-mg-${c}`))==null||Q.classList.remove("dragging"),c=null,h=!1,y.classList.add("hidden"),y.classList.remove("tilting"),(O=document.getElementById("s3-tank-drop-zone"))==null||O.classList.remove("active");const V=document.getElementById("s3-tank-drop-lbl");V&&(V.textContent=s>0&&o?`✓ ${s.toFixed(1)} ${o.unit} dituang`:"Jatuhkan di sini")}for(let V=0;V<x;V++){const Q=document.getElementById(`s3-mg-${V}`);Q&&(Q.addEventListener("mousedown",O=>{z(V,O.clientX,O.clientY),O.preventDefault()}),Q.addEventListener("touchstart",O=>{z(V,O.touches[0].clientX,O.touches[0].clientY),O.preventDefault()},{passive:!1}))}function ne(V){c!==null&&P(V.clientX,V.clientY)}function Y(){X()}function J(V){c!==null&&(P(V.touches[0].clientX,V.touches[0].clientY),V.preventDefault())}function Z(){X()}window.addEventListener("mousemove",ne),window.addEventListener("mouseup",Y),window.addEventListener("touchmove",J,{passive:!1}),window.addEventListener("touchend",Z),g=()=>{X(),window.removeEventListener("mousemove",ne),window.removeEventListener("mouseup",Y),window.removeEventListener("touchmove",J),window.removeEventListener("touchend",Z);const V=document.getElementById("s3-mg-ghost");V&&V.remove()},ve("s3-sprinkler-scene").classList.remove("hidden"),ve("s3-sprinkler-scene").scrollIntoView({behavior:"smooth",block:"nearest"})}});function v(_){const L=ve("s3-calc-grid"),M=ve("s3-lab-notes");_?(L.innerHTML=[{icon:"⚗️",label:"Volume Vinasse",value:`${a} L`},{icon:"🧫",label:"Dosis Mikro",value:`${_.total} ${_.unit}`},{icon:"⏱️",label:"Durasi Perlakuan",value:_.duration}].map(E=>`
        <div class="s3-calc-card">
          <span class="s3-calc-icon">${E.icon}</span>
          <span class="s3-calc-label">${E.label}</span>
          <span class="s3-calc-value">${E.value}</span>
        </div>`).join(""),M.innerHTML=`📝 <b>Catatan:</b> ${_.notes}`):(L.innerHTML=`
        <div class="s3-calc-card fail">
          <span class="s3-calc-icon">⛔</span>
          <span class="s3-calc-label">Tidak dapat digunakan</span>
          <span class="s3-calc-value">${t.name} tidak cocok untuk vinasse ini</span>
        </div>`,M.innerHTML="⚠️ Pilihan mikroorganisme tidak valid untuk kondisi vinasse ini."),ve("s3-lab-result").classList.remove("hidden"),ve("s3-btn-to-valve").classList.remove("hidden"),ve("s3-lab-result").scrollIntoView({behavior:"smooth",block:"nearest"})}function b(){setTimeout(()=>{if(s=0,r=!1,l>0)for(let L=0;L<x;L++){d[L]=l;const M=document.getElementById(`s3-mg-liq-${L}`),E=document.getElementById(`s3-mg-${L}`);M&&(M.style.height="85%"),E&&E.classList.remove("empty","dragging")}ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height="0%",ve("s3-poured-amt").textContent="0.0",ve("s3-pour-bar-fill").style.width="0%",ve("s3-pour-counter").classList.add("hidden"),ve("s3-pour-progress-wrap").classList.add("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),ve("s3-pour-hint").classList.remove("hidden"),ve("s3-pour-feedback").classList.add("hidden");const _=document.getElementById("s3-tank-drop-lbl");_&&(_.textContent="Jatuhkan di sini")},2500)}ve("s3-btn-confirm-pour").onclick=()=>{const _=yc(n,a),L=ve("s3-pour-feedback");if(L.classList.remove("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),!_){L.className="s3-pour-feedback punishment",L.innerHTML="⚠️ Mikroorganisme ini tidak cocok — hasilnya tidak optimal.",setTimeout(()=>v(null),1200);return}const M=parseFloat(_.total),E=s/M;E<.8?(L.className="s3-pour-feedback wrong",L.innerHTML=`⚠️ <b>Kurang!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        padahal target <b>${_.total} ${_.unit}</b>. Seret lebih banyak gelas!`,b()):E>1.2?(L.className="s3-pour-feedback wrong",L.innerHTML=`⚠️ <b>Terlalu banyak!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        target hanya <b>${_.total} ${_.unit}</b>. Coba lagi!`,b()):(L.className="s3-pour-feedback correct",L.innerHTML=`✅ <b>Tepat!</b> <b>${s.toFixed(1)} ${_.unit}</b> — sesuai dosis bioremediasi!`,ve("s3-spk-micro-layer").style.transition="height 1.2s ease",ve("s3-spk-micro-layer").style.height="30%",setTimeout(()=>v(_),1500))},ve("s3-btn-to-valve").onclick=()=>{g&&(g(),g=null),Va(),e()}}function ov(n){const e=Gs("s3-overlay");e.innerHTML=`
    <div class="s3-card s3-valve-card">
      <div class="s3-header">
        <span class="s3-badge">🚰 AKTIVASI KRAN VINASSE</span>
        <h2 class="s3-title">Saatnya Memulai Bioremediasi!</h2>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">4. Kran Vinasse</span>
      </div>

      <div class="s3-valve-scene" id="s3-valve-scene">
        <!-- Animated pipe and valve -->
        <div class="s3-pipe s3-pipe-top"></div>
        <div class="s3-valve-body" id="s3-valve-body">
          <div class="s3-valve-wheel" id="s3-valve-wheel">⊕</div>
          <div class="s3-valve-label">KRAN<br>VINASSE</div>
        </div>
        <div class="s3-pipe s3-pipe-bottom"></div>
        <div class="s3-flow-container" id="s3-flow">
          <!-- Flow animated with CSS when valve open -->
        </div>
        <div class="s3-tank" id="s3-tank">
          <div class="s3-tank-liquid" id="s3-tank-liquid"></div>
          <div class="s3-tank-label">Reaktor<br>Bioremediasi</div>
        </div>
      </div>

      <div class="s3-valve-instruction" id="s3-valve-instr">
        Klik tombol di bawah untuk membuka kran dan mengalirkan vinasse ke reaktor bioremediasi!
      </div>

      <button class="s3-btn s3-valve-btn" id="s3-btn-open-valve">
        🔓 Buka Kran Vinasse
      </button>

      <div class="s3-level-complete hidden" id="s3-level-complete">
        <div class="s3-complete-icon">🎉</div>
        <h3>Level 3 Selesai!</h3>
        <p>Vinasse mengalir ke reaktor bioremediasi. Mikroorganisme pilihanmu akan bekerja
           memecah melanoidin dan polutan organik dalam vinasse.</p>
        <div class="s3-final-score">
          Total Poin: <span id="s3-final-pts"></span>
        </div>
        <button class="s3-btn" id="s3-btn-finish">✅ Lanjut ke Level 4 →</button>
      </div>
    </div>
  `,document.body.appendChild(e);let t=!1;ve("s3-btn-open-valve").onclick=()=>{if(t)return;t=!0;const i=ve("s3-valve-wheel");i.style.animation="valveSpin 0.8s ease forwards";const a=ve("s3-flow");a.innerHTML="";for(let s=0;s<8;s++){const r=document.createElement("div");r.className="s3-drop",r.style.animationDelay=s*.12+"s",r.style.left=30+Math.random()*30+"%",a.appendChild(r)}a.classList.add("flowing"),setTimeout(()=>{ve("s3-tank-liquid").style.height="75%"},600),ve("s3-btn-open-valve").disabled=!0,ve("s3-btn-open-valve").textContent="✅ Kran Terbuka",ve("s3-valve-instr").textContent="Vinasse mengalir ke reaktor bioremediasi…",setTimeout(()=>{ve("s3-level-complete").classList.remove("hidden"),ve("s3-final-pts").textContent=ee.totalPoints+" poin"},1800)},ve("s3-btn-finish").onclick=()=>{Va(),n&&n()}}function Gs(n){const e=document.createElement("div");return e.id=n,e.className="s3-overlay",e}function Va(){const n=ve("s3-overlay");n&&n.remove()}function wc(n,e,t){const i=ve(n);i&&(i.className="s3-feedback "+(e?"correct":"wrong"),i.innerHTML=t,i.classList.remove("hidden"))}function lv(){if(ve("s3-styles"))return;const n=`
    /* ── Overlay ─────────────────────────────────────── */
    .s3-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 12, 20, 0.97);
      display: flex; align-items: center; justify-content: center;
      z-index: 500; overflow-y: auto; padding: 20px 12px;
    }
    .s3-card {
      background: rgba(10, 20, 35, 0.99);
      border: 1px solid #1a4060;
      border-radius: 16px;
      max-width: 860px; width: 100%;
      padding: 26px 30px;
      color: #ddeeff;
      box-shadow: 0 0 50px rgba(0,150,255,0.15);
    }
    .s3-shop-card { max-width: 1040px; }

    /* ── Header ──────────────────────────────────────── */
    .s3-header { text-align: center; margin-bottom: 20px; }
    .s3-badge {
      background: rgba(0,200,100,0.12); border: 1px solid #00c864;
      color: #00e870; padding: 4px 14px; border-radius: 20px;
      font-size: 12px; letter-spacing: 1px;
    }
    .s3-title   { margin: 10px 0 4px; font-size: 20px; color: #a0f0c0; }
    .s3-subtitle { color: #7090a0; font-size: 13px; margin: 0; }
    .s3-pts-badge {
      background: rgba(255,200,0,0.15); border: 1px solid #ffc800;
      color: #ffe040; padding: 2px 10px; border-radius: 12px;
      font-weight: 700;
    }

    /* ── Step indicator ──────────────────────────────── */
    .s3-step-indicator {
      display: flex; align-items: center; justify-content: center;
      gap: 6px; margin-bottom: 20px; flex-wrap: wrap;
    }
    .s3-step {
      padding: 4px 12px; border-radius: 12px; font-size: 12px;
      background: rgba(20,40,60,0.8); color: #507090;
      border: 1px solid #1a3a5a;
    }
    .s3-step.active { background: rgba(0,100,60,0.25); color: #40e890; border-color: #00c864; }
    .s3-step.done   { background: rgba(0,100,60,0.1);  color: #40a870; border-color: #007040; }
    .s3-step-arrow  { color: #304050; font-size: 14px; }

    /* ── Context / question ──────────────────────────── */
    .s3-context {
      background: rgba(8,20,38,0.8); border-left: 4px solid #00a060;
      padding: 12px 16px; border-radius: 6px; font-size: 14px;
      line-height: 1.7; color: #b0d8c0; margin-bottom: 14px;
    }
    .s3-question {
      background: rgba(8,20,38,0.8); border-left: 4px solid #e67e22;
      padding: 10px 16px; border-radius: 6px; font-size: 14px;
      line-height: 1.6; color: #d8e0cc; margin-bottom: 12px;
    }

    /* ── Options ─────────────────────────────────────── */
    .s3-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
    .s3-option {
      padding: 10px 14px; border-radius: 8px;
      border: 2px solid #1a3a5a; background: rgba(8,20,38,0.8);
      color: #b0c8d8; cursor: pointer; text-align: left;
      font-size: 13px; transition: all 0.2s; line-height: 1.5;
    }
    .s3-option:hover:not(:disabled) { border-color: #00aaff; color: #00d4ff; }
    .s3-option.correct { border-color: #2ecc71; background: rgba(30,100,40,0.2); color: #80ee90; }
    .s3-option.wrong   { border-color: #e74c3c; background: rgba(100,20,20,0.2); color: #ff8888; }
    .s3-option:disabled { opacity: 0.6; cursor: default; }

    /* ── Feedback ────────────────────────────────────── */
    .s3-feedback {
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      line-height: 1.7; margin-bottom: 8px;
    }
    .s3-feedback.hidden  { display: none; }
    .s3-feedback.correct { background: rgba(30,100,40,0.2); border-left: 4px solid #2ecc71; color: #a0e8a0; }
    .s3-feedback.wrong   { background: rgba(100,20,20,0.2); border-left: 4px solid #e74c3c; color: #ff9090; }

    /* ── Button ──────────────────────────────────────── */
    .s3-btn {
      display: inline-block; margin-top: 14px;
      padding: 11px 26px; border-radius: 10px;
      background: linear-gradient(135deg, #0a6030, #0a8040);
      color: #fff; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .s3-btn:hover:not(:disabled) { filter: brightness(1.2); }
    .s3-btn:disabled { opacity: 0.4; cursor: default; }
    .s3-btn.hidden   { display: none; }
    .s3-btn-restart  { background: linear-gradient(135deg, #7a0a0a, #b01414); margin-left: 10px; }

    /* ── Shop grid ───────────────────────────────────── */
    .s3-shop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 14px; margin-bottom: 16px;
    }
    .s3-micro-card {
      background: rgba(8, 20, 38, 0.9); border: 2px solid #1a3a5a;
      border-radius: 12px; padding: 14px; display: flex;
      flex-direction: column; gap: 6px; transition: border-color 0.2s;
    }
    .s3-micro-card.chosen { border-color: #00e870; background: rgba(0,60,30,0.25); }
    .s3-micro-img-wrap { text-align: center; margin-bottom: 2px; }
    .s3-micro-img { width: 100%; max-height: 110px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
    .s3-micro-name   { font-size: 15px; font-weight: 700; color: #c0e8d8; text-align: center; }
    .s3-micro-pigment { font-size: 11px; color: #6090a0; font-style: italic; }
    .s3-micro-desc   { font-size: 12px; color: #8090a0; line-height: 1.5; flex: 1; }
    .s3-micro-citation { font-size: 10px; color: #506070; }
    .s3-micro-price  { font-size: 13px; font-weight: 700; color: #ffe040; }
    .s3-micro-price.unaffordable { color: #886040; }
    .s3-not-enough   { color: #cc6633; font-size: 11px; margin-left: 4px; }
    .s3-buy-btn {
      margin-top: 4px; padding: 7px 0; border-radius: 7px; width: 100%;
      border: 2px solid #00a060; background: rgba(0,80,40,0.25);
      color: #40e880; cursor: pointer; font-size: 13px; font-weight: 700;
      transition: all 0.2s;
    }
    .s3-buy-btn:hover:not(:disabled) { background: rgba(0,120,60,0.4); }
    .s3-buy-btn.disabled, .s3-buy-btn:disabled { opacity: 0.35; cursor: default; border-color: #2a4a3a; color: #4a7a5a; }

    /* ── Shop result banner ──────────────────────────── */
    .s3-shop-result {
      padding: 12px 16px; border-radius: 8px; margin: 10px 0; font-size: 14px; line-height: 1.7;
    }
    .s3-shop-result.hidden     { display: none; }
    .s3-shop-result.reward-high { background: rgba(0,100,50,0.25); border: 1px solid #00c864; color: #80ff90; }
    .s3-shop-result.reward-mid  { background: rgba(0,80,120,0.2); border: 1px solid #0088cc; color: #80ccff; }
    .s3-shop-result.punishment  { background: rgba(140,10,10,0.25); border: 1px solid #cc2222; color: #ff8080; }

    /* ── Lab section ─────────────────────────────────── */
    .s3-lab-intro {
      background: rgba(8,20,38,0.8); border-left: 4px solid #1a80a0;
      padding: 12px 16px; border-radius: 6px; font-size: 13px;
      color: #a0c0d8; line-height: 1.7; margin-bottom: 16px;
    }
    .s3-lab-intro ul { margin: 6px 0 0 16px; }
    .s3-lab-section  { margin-bottom: 16px; }
    .s3-lab-label    { font-size: 13px; color: #7090a0; display: block; margin-bottom: 8px; }
    .s3-vol-btns     { display: flex; gap: 8px; flex-wrap: wrap; }
    .s3-vol-btn {
      padding: 8px 16px; border-radius: 7px;
      border: 2px solid #1a3a5a; background: rgba(8,20,38,0.8);
      color: #6090a0; cursor: pointer; font-size: 13px; font-weight: 600;
      transition: all 0.2s;
    }
    .s3-vol-btn:hover  { border-color: #00aaff; color: #00ccff; }
    .s3-vol-btn.active { border-color: #00e870; color: #00e870; background: rgba(0,100,50,0.15); }

    /* ── Calc result grid ────────────────────────────── */
    .s3-lab-result { margin-top: 10px; }
    .s3-calc-grid  {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px; margin-bottom: 10px;
    }
    .s3-calc-card {
      background: rgba(8,20,38,0.9); border: 1px solid #1a3a5a;
      border-radius: 9px; padding: 10px 12px;
      display: flex; flex-direction: column; gap: 4px; align-items: center;
    }
    .s3-calc-card.fail { border-color: #cc2222; }
    .s3-calc-icon  { font-size: 20px; }
    .s3-calc-label { font-size: 11px; color: #6090a0; text-align: center; }
    .s3-calc-value { font-size: 15px; font-weight: 700; color: #a0e8d8; text-align: center; }
    .s3-lab-notes  {
      background: rgba(8,20,38,0.8); border-left: 4px solid #1a6080;
      padding: 8px 14px; border-radius: 6px; font-size: 12px;
      color: #80a8c0; line-height: 1.6;
    }

    /* ── Glass pour mechanic ────────────────────────── */
    .s3-sprinkler-scene { margin: 12px 0 6px; }
    .s3-sprinkler-scene.hidden { display: none; }
    .s3-spk-label { font-size: 13px; color: #80b0c8; text-align: center; margin-bottom: 10px; }
    /* Layout: glasses on left, tank on right */
    .s3-glass-pour-layout {
      display: flex; align-items: flex-end; gap: 20px;
      flex-wrap: wrap; justify-content: center; margin: 4px 0 12px;
    }
    .s3-glass-side { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .s3-glass-row  { display: flex; gap: 6px; align-items: flex-end; min-height: 64px; }
    .s3-glass-hint { font-size: 11px; color: #3a8a5a; font-style: italic; text-align: center; }
    /* Individual micro glass */
    .s3-micro-glass {
      position: relative; width: 36px; height: 54px;
      border: 2px solid #2a6a4a; border-top: none; border-radius: 0 0 6px 6px;
      background: rgba(5, 18, 10, 0.85); overflow: hidden;
      cursor: grab; user-select: none;
      transition: box-shadow 0.2s, border-color 0.2s, opacity 0.3s;
    }
    .s3-micro-glass:not(.empty):hover { box-shadow: 0 0 8px rgba(0,200,80,0.4); border-color: #3a9a6a; }
    .s3-micro-glass.empty    { opacity: 0.28; cursor: not-allowed; border-color: #1a3a2a; }
    .s3-micro-glass.dragging { opacity: 0.45; cursor: grabbing; }
    .s3-mg-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 85%;
      transition: height 0.18s ease;
    }
    .s3-mg-label {
      position: absolute; bottom: 2px; left: 0; right: 0;
      font-size: 7px; text-align: center; color: rgba(200,255,210,0.8);
      font-weight: 700; pointer-events: none; z-index: 2;
    }
    /* Ghost glass follows cursor */
    .s3-mg-ghost {
      position: fixed; z-index: 9999; pointer-events: none;
      width: 36px; height: 54px;
      border: 2px solid rgba(0,255,120,0.7); border-top: none; border-radius: 0 0 8px 8px;
      background: rgba(5, 18, 10, 0.92); overflow: hidden;
      transform-origin: bottom center; transition: transform 0.18s;
      box-shadow: 0 0 14px rgba(0,220,80,0.6);
    }
    .s3-mg-ghost.tilting { transform: rotate(-42deg); }
    .s3-mg-ghost-liquid { position: absolute; bottom: 0; left: 0; right: 0; transition: height 0.18s ease; }
    /* Tank side */
    .s3-tank-side  { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .s3-tank-drop-zone {
      position: relative; padding: 8px 10px;
      border: 2px dashed rgba(60,130,80,0.3); border-radius: 12px;
      transition: border-color 0.2s, background 0.2s;
    }
    .s3-tank-drop-zone.active { border-color: rgba(0,210,90,0.7); background: rgba(0,80,40,0.12); }
    .s3-tank-drops {
      position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
      width: 30px; height: 30px; pointer-events: none; overflow: visible;
    }
    .s3-tank-drop-lbl { font-size: 10px; color: #3a6a4a; font-style: italic; text-align: center; }
    /* Drop particle */
    .s3-mg-drop {
      position: absolute; width: 5px; height: 9px;
      border-radius: 50% 50% 45% 45%;
      left: calc(50% + var(--spread, 0px)); transform: translateX(-50%);
      animation: mgDropFall var(--dur, 0.42s) ease-in forwards;
    }
    @keyframes mgDropFall {
      from { transform: translateX(-50%) translateY(0);    opacity: 0.9; }
      to   { transform: translateX(-50%) translateY(60px); opacity: 0; }
    }
    /* Vinasse tank (shared) */
    .s3-spk-tank {
      position: relative; width: 200px; height: 75px;
      border: 3px solid #4a6a7a; border-top: none; border-radius: 0 0 12px 12px;
      background: rgba(5, 15, 25, 0.6); overflow: hidden;
    }
    .s3-spk-vinasse {
      position: absolute; bottom: 0; left: 0; right: 0; height: 55%;
      background: rgba(70, 28, 5, 0.85);
    }
    .s3-spk-micro-layer { position: absolute; bottom: 55%; left: 0; right: 0; height: 0%; }
    .s3-spk-target-line {
      position: absolute; left: 0; right: 0; bottom: 70%;
      height: 2px; background: rgba(255, 220, 0, 0.8); z-index: 4; pointer-events: none;
    }
    .s3-spk-target-line::after {
      content: 'TARGET'; position: absolute; right: 4px; top: -10px;
      font-size: 8px; font-weight: 700; color: #ffd040; letter-spacing: 0.5px;
    }
    .s3-spk-tank-label {
      position: absolute; bottom: 4px; left: 0; right: 0;
      text-align: center; font-size: 10px; color: rgba(255,255,255,0.3); pointer-events: none;
    }
    /* Pour status row */
    .s3-glass-hint { margin: 8px 0 0; font-size: 12px; color: #3a8a5a; text-align: center; }
    .s3-pour-counter {
      margin: 8px 0 0; text-align: center; font-size: 13px; color: #a0c8e0;
    }
    .s3-pour-counter.hidden { display: none; }
    /* Progress bar */
    .s3-pour-progress-wrap {
      position: relative; height: 14px;
      background: rgba(10,20,30,0.6); border-radius: 7px;
      margin: 8px 0; overflow: visible;
    }
    .s3-pour-progress-wrap.hidden { display: none; }
    .s3-pour-bar-fill {
      height: 100%; width: 0%; border-radius: 7px;
      transition: width 0.08s, background 0.25s;
    }
    /* Target marker on progress bar at 66.7% (= 100% / 150% max) */
    .s3-pour-target-mark {
      position: absolute; top: -3px; bottom: -3px; left: 66.7%; width: 3px;
      background: rgba(255,220,0,0.9); border-radius: 2px; pointer-events: none;
    }
    .s3-pour-target-mark::after {
      content: '▲'; position: absolute; bottom: -12px; left: 50%;
      transform: translateX(-50%); font-size: 9px; color: #ffd040;
    }
    /* Pour feedback banners */
    .s3-pour-feedback {
      margin: 8px 0; padding: 10px 14px; border-radius: 8px;
      font-size: 13px; line-height: 1.6;
    }
    .s3-pour-feedback.hidden     { display: none; }
    .s3-pour-feedback.correct    { background: rgba(0,80,40,0.3);   border: 1px solid #00c864; color: #80ff90; }
    .s3-pour-feedback.wrong      { background: rgba(140,30,10,0.25); border: 1px solid #cc4422; color: #ff9060; }
    .s3-pour-feedback.punishment { background: rgba(140,10,10,0.25); border: 1px solid #cc2222; color: #ff8080; }

    /* ── Valve scene ─────────────────────────────────── */
    .s3-valve-card { max-width: 600px; }
    .s3-valve-scene {
      display: flex; flex-direction: column; align-items: center;
      gap: 0; margin: 16px auto; width: 160px; position: relative;
    }
    .s3-pipe {
      width: 28px; height: 40px;
      background: linear-gradient(90deg, #4a6070, #6a8090, #4a6070);
      border-radius: 4px; position: relative; z-index: 1;
    }
    .s3-valve-body {
      background: linear-gradient(180deg, #3a4a5a, #2a3540);
      border: 3px solid #4a6a7a; border-radius: 8px;
      width: 80px; padding: 8px 6px; text-align: center;
      position: relative; z-index: 2;
    }
    .s3-valve-wheel {
      font-size: 28px; color: #e05010; cursor: pointer;
      display: inline-block; transition: color 0.4s;
      transform-origin: center;
    }
    .s3-valve-label { font-size: 9px; color: #8090a0; line-height: 1.2; }
    @keyframes valveSpin {
      0%   { transform: rotate(0deg);   color: #e05010; }
      50%  { transform: rotate(180deg); color: #ff8020; }
      100% { transform: rotate(360deg); color: #40e870; }
    }
    .s3-tank {
      width: 120px; height: 90px; margin-top: 0;
      border: 3px solid #4a7a6a; border-top: none;
      border-radius: 0 0 10px 10px;
      background: rgba(5,20,15,0.8); position: relative; overflow: hidden;
    }
    .s3-tank-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 0;
      background: linear-gradient(180deg, rgba(100,40,5,0.6), rgba(60,20,0,0.9));
      transition: height 1.4s ease;
    }
    .s3-tank-label {
      position: absolute; inset: 0; display: flex; align-items: center;
      justify-content: center; font-size: 10px; color: #6090a0; text-align: center;
      pointer-events: none;
    }
    /* Flow drops */
    .s3-flow-container {
      width: 28px; height: 30px; position: relative; overflow: hidden;
    }
    .s3-drop {
      position: absolute; width: 5px; height: 10px;
      background: rgba(80,30,0,0.8); border-radius: 3px;
      animation: dropFall 0.6s linear infinite;
      opacity: 0;
    }
    @keyframes dropFall {
      from { top: -10px; opacity: 1; }
      to   { top: 100%;  opacity: 0; }
    }
    .s3-flow-container.flowing .s3-drop { opacity: 1; }

    .s3-valve-instruction {
      text-align: center; font-size: 13px; color: #7090a0;
      margin: 8px 0 0; line-height: 1.5;
    }
    .s3-valve-btn {
      background: linear-gradient(135deg, #8a2010, #c04020);
      display: block; margin: 10px auto 0;
    }
    .s3-valve-btn:hover:not(:disabled) { filter: brightness(1.25); }

    /* ── Level complete ──────────────────────────────── */
    .s3-level-complete {
      margin-top: 18px; text-align: center;
      padding: 18px; border-radius: 10px;
      background: rgba(0,80,40,0.2); border: 1px solid #00c864;
    }
    .s3-level-complete.hidden { display: none; }
    .s3-complete-icon { font-size: 40px; margin-bottom: 6px; }
    .s3-level-complete h3 { color: #40ff80; margin: 0 0 8px; font-size: 20px; }
    .s3-level-complete p  { font-size: 13px; color: #80a890; line-height: 1.6; margin: 0 0 12px; }
    .s3-final-score {
      font-size: 18px; font-weight: 700; color: #ffe040; margin-bottom: 10px;
    }
  `,e=document.createElement("style");e.id="s3-styles",e.textContent=n,document.head.appendChild(e)}function cv(){if(ve("ipal-labels-styles"))return;const n=`
    .ipal-labels-panel {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: rgba(25, 50, 75, 0.9);
      border: 2px solid rgba(52, 152, 219, 0.6);
      border-radius: 12px;
      padding: 16px;
      max-width: 280px;
      z-index: 100;
      color: #ddeeff;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      animation: slideInLeft 0.4s ease-out;
    }

    .ipal-labels-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(52, 152, 219, 0.3);
    }

    .ipal-labels-title {
      font-size: 13px;
      font-weight: 700;
      color: #3498db;
      letter-spacing: 0.5px;
    }

    .ipal-labels-close {
      background: none;
      border: none;
      color: #3498db;
      font-size: 16px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: color 0.2s;
    }

    .ipal-labels-close:hover {
      color: #2ecc71;
    }

    .ipal-labels-item {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
      font-size: 12px;
      line-height: 1.4;
    }

    .ipal-labels-item:last-child {
      margin-bottom: 0;
    }

    .ipal-labels-icon {
      font-size: 18px;
      min-width: 20px;
      text-align: center;
    }

    .ipal-labels-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .ipal-labels-name {
      font-weight: 600;
      color: #a0f0c0;
    }

    .ipal-labels-desc {
      color: #80b0c0;
      font-size: 11px;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,e=document.createElement("style");e.id="ipal-labels-styles",e.textContent=n,document.head.appendChild(e)}function dv(){if(ve("ipal-labels-panel"))return;const n=document.createElement("div");n.id="ipal-labels-panel",n.className="ipal-labels-panel",n.innerHTML=`
    <div class="ipal-labels-header">
      <div class="ipal-labels-title">📍 Komponen 3D IPAL</div>
      <button class="ipal-labels-close" id="btn-close-ipal-labels" title="Tutup">✕</button>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">⚙️</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Aerator</div>
        <div class="ipal-labels-desc">Pemompa udara untuk proses aerasi. Menginjeksi gelembung oksigen ke air limbah.</div>
      </div>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">🪣</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Bak Penampungan</div>
        <div class="ipal-labels-desc">Reservoir untuk menyimpan dan mengolah limbah vinasse secara bertahap.</div>
      </div>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">🩸</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Aliran Air</div>
        <div class="ipal-labels-desc">Jalur pemindahan air limbah yang sudah diolah menuju tahap berikutnya.</div>
      </div>
    </div>
  `,document.body.appendChild(n);const e=ve("btn-close-ipal-labels");e&&(e.onclick=()=>{n.style.animation="slideInLeft 0.3s ease-out reverse",setTimeout(()=>n.remove(),300)})}const uv=[{id:"aerator_1",category:"alat",name:"Aerator (1 unit)",emoji:"💨",desc:"Pompa udara kecil untuk mensuplai O₂ ke dalam cairan. 1 unit = aerasi lemah.",effect:{aerationLevel:1},required:!0},{id:"aerator_2",category:"alat",name:"Aerator (2 unit)",emoji:"💨💨",desc:"Dua pompa udara — aerasi sedang, O₂ terdistribusi lebih merata.",effect:{aerationLevel:2},required:!1},{id:"aerator_3",category:"alat",name:"Aerator (3 unit)",emoji:"💨💨💨",desc:"Tiga pompa udara — aerasi maksimal, O₂ penuh, pH lebih cepat turun.",effect:{aerationLevel:3},required:!1},{id:"aquarium",category:"alat",name:"Aquarium / Bak Kolam",emoji:"🪣",desc:"Wadah penampung cairan vinasse. Diletakkan dalam kondisi tertutup rapat saat percobaan berjalan.",effect:{hasContainer:!0},required:!0},{id:"selang",category:"alat",name:"Pipa / Selang",emoji:"🔩",desc:"Menghubungkan aerator ke dalam cairan. Diperlukan agar gelembung udara sampai ke dasar.",effect:{hasHose:!0},required:!0},{id:"listrik",category:"alat",name:"Aliran Listrik",emoji:"⚡",desc:"Sumber daya untuk aerator dan lampu. Wajib jika menggunakan peralatan listrik.",effect:{hasPower:!0},required:!0},{id:"penyaring",category:"alat",name:"Penyaring",emoji:"🕸️",desc:"Filter mekanik untuk menyaring biomassa Azolla atau partikel kasar setelah perlakuan.",effect:{hasFilter:!0},required:!1},{id:"lampu",category:"alat",name:"Lampu (Grow-light)",emoji:"💡",desc:"Pencahayaan tambahan > 1000 lux untuk mendukung fotosintesis Azolla. Sangat dianjurkan.",effect:{hasLight:!0},required:!1}],pv=[{id:"vinasse",category:"bahan",name:"Limbah Vinasse",emoji:"🪣",desc:"Bahan utama — limbah cair dari distilasi etanol. COD awal ±80.000 mg/L, pH 3–4.",required:!0},{id:"azolla_bio",category:"bahan",name:"Azolla microphylla (biomassa)",emoji:"🌿",desc:"Agen bioremediasi utama. Dosis: 200 g biomassa segar per 1 L vinasse.",required:!0},{id:"air_pengencer",category:"bahan",name:"Air Pengencer",emoji:"💧",desc:"Untuk mengencerkan vinasse ke konsentrasi yang optimal bagi pertumbuhan Azolla.",required:!1},{id:"buffer_ph",category:"bahan",name:"Buffer pH (NaHCO₃)",emoji:"🧪",desc:"Meningkatkan pH vinasse ke 5–7 agar Azolla dapat hidup pada fase awal inokulasi.",required:!1}],hv=[{step:1,icon:"🪣",title:"Siapkan Wadah",desc:"Masukkan air limbah vinasse ke dalam aquarium/bak/kolam yang sudah disiapkan.",requires:["aquarium","vinasse"]},{step:2,icon:"🧫",title:"Ukur Parameter Awal",desc:"Ukur kadar COD, BOD dengan titrasi; pH menggunakan kertas lakmus atau pH meter.",requires:[]},{step:3,icon:"🌿",title:"Tambahkan Mikroorganisme",desc:"Tambahkan Azolla microphylla dengan 3 variasi konsentrasi (10%, 50%, 100% dosis referensi). Jika cair: pengenceran; jika padat: tambahkan bibit terlebih dahulu.",requires:["azolla_bio"]},{step:4,icon:"💨",title:"Nyalakan Aerator",desc:"Nyalakan aerator yang telah terhubung selang. Sesuaikan kecepatan aerasi sesuai jumlah aerator yang dipilih.",requires:["aerator_1","selang","listrik"]},{step:5,icon:"💡",title:"Tambahkan Pencahayaan",desc:"Pasang grow-light karena Azolla membutuhkan cahaya untuk fotosintesis. Target: > 1000 lux.",requires:["lampu"]},{step:6,icon:"🔒",title:"Tutup & Jalankan",desc:"Tutup aquarium dan biarkan aerator terus menyala tanpa terputus selama 7 hari (durasi berdasarkan literatur).",requires:["aquarium"]},{step:7,icon:"🔬",title:"Amati Perubahan",desc:"Catat perubahan warna, bau, dan kondisi Azolla setiap hari. Warna vinasse berubah dari hitam → coklat muda menandakan penurunan melanoidin.",requires:[]},{step:8,icon:"📊",title:"Ukur Parameter Akhir",desc:"Ukur COD, BOD, dan pH akhir. Bandingkan dengan nilai awal untuk menghitung persentase penurunan.",requires:[]},{step:9,icon:"📝",title:"Tulis Laporan",desc:"Susun laporan penelitian: latar belakang, metode, hasil (tabel COD/BOD awal-akhir), pembahasan, dan kesimpulan.",requires:[]}];function fv(n,e){const t=new Set(n),i=t.has("aquarium"),a=t.has("aerator_1")||t.has("aerator_2")||t.has("aerator_3"),s=t.has("aerator_3")?3:t.has("aerator_2")?2:t.has("aerator_1")?1:0,r=t.has("selang"),o=t.has("listrik"),l=t.has("lampu"),d=t.has("penyaring"),c=t.has("azolla_bio"),p=t.has("vinasse"),f=t.has("buffer_ph"),h=[];if(i||h.push("Aquarium/Bak (wadah wajib)"),a||h.push("Aerator (aerasi wajib untuk O₂)"),r||h.push("Pipa/Selang (penghubung aerator)"),o||h.push("Aliran Listrik (sumber daya aerator)"),c||h.push("Azolla microphylla (agen bioremediasi)"),p||h.push("Limbah Vinasse (bahan utama)"),h.length>0)return{success:!1,codReduction:0,bodReduction:0,grade:"Gagal",gradeColor:"#ff4444",missing:h,feedback:`❌ Rancangan tidak lengkap! Item yang kurang: ${h.join(", ")}.`};let g=60,x=58;s>=2&&(g+=12,x+=10),s>=3&&(g+=8,x+=6),l&&(g+=16,x+=14),f&&(g+=8,x+=8),d&&(g+=4),g=Math.min(g,96),x=Math.min(x,94);let m,u;g>=85?(m="Sangat Baik ⭐⭐⭐",u="#40ff80"):g>=70?(m="Baik ⭐⭐",u="#a0c840"):(m="Cukup ⭐",u="#e0a020");const v=e&&e.concentrations||[10,50,100],b=e&&e.duration||7,_=Math.min(1,.6+b/25),L=v.map(M=>{const E=Math.min(1,.4+M/100*.6)*_,I=Math.round(g*E),y=Math.round(x*E);let T;return M<=15?T="Dosis sangat rendah; penurunan terbatas":M<=40?T="Dosis rendah; penurunan sedang":M<=80?T="Dosis moderat; efisiensi cukup baik":M<=110?T="Dosis optimal; performa terbaik":T="Dosis lebih; tidak banyak tambahan manfaat",{conc:M,cod:I,bod:y,note:T}});return{success:!0,aerationLvl:s,hasLight:l,hasFilter:d,hasBuffer:f,codReduction:g,bodReduction:x,grade:m,gradeColor:u,missing:[],feedback:`✅ Reaktor berhasil dirancang! Perkiraan penurunan COD rata-rata: <b>${g}%</b>, BOD: <b>${x}%</b>.`,perConcentration:L}}const it=n=>document.getElementById(n);function Cd(n){bv(),ra(),mv(e=>{gv(e,t=>{const i=fv(e,t);ee.stage4.selectedItems=e,ee.stage4.reactorResult=i,ee.stage4.concentrationCfg=t,xv(i,()=>{vv(i,n)})})})}function mv(n){const e=[...uv,...pv],t=Ws();t.innerHTML=`
    <div class="s4-card s4-builder-card">
      <div class="s4-header">
        <span class="s4-badge">🛠️ BUILDER REAKTOR</span>
        <h2 class="s4-title">Pilih Alat & Bahan untuk Reaktor Vinassemu</h2>
        <p class="s4-subtitle">Centang semua komponen yang ingin kamu masukkan ke dalam rancangan reaktor.
          Item wajib ditandai <span class="s4-required-tag">WAJIB</span>.</p>
      </div>
      ${Vs(1)}

      <div class="s4-builder-grid" id="s4-builder-grid"></div>

      <div class="s4-selection-summary" id="s4-sel-summary">
        <span id="s4-sel-count">0 item dipilih</span>
        <span id="s4-sel-aerator" class="s4-aer-badge hidden">💨 Aerasi: —</span>
      </div>

      <button class="s4-btn" id="s4-btn-build">⚗️ Lihat Prosedur & Bangun Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=new Set(e.filter(r=>r.required).map(r=>r.id));function a(){const r=it("s4-builder-grid");r.innerHTML="";for(const o of["alat","bahan"]){const l=document.createElement("div");l.className="s4-cat-label",l.textContent=o==="alat"?"🔩 ALAT":"🧪 BAHAN",r.appendChild(l),e.filter(c=>c.category===o).forEach(c=>{const p=i.has(c.id),f=document.createElement("div");f.className=`s4-item-card${p?" selected":""}`,f.dataset.id=c.id;const h=c.id.startsWith("aerator_");f.innerHTML=`
          <div class="s4-item-check">${p?"☑":"☐"}</div>
          <div class="s4-item-emoji">${c.emoji}</div>
          <div class="s4-item-name">${c.name}
            ${c.required?'<span class="s4-required-tag">WAJIB</span>':""}
          </div>
          <div class="s4-item-desc">${c.desc}</div>
        `,f.onclick=()=>{c.required||(h&&["aerator_1","aerator_2","aerator_3"].forEach(g=>i.delete(g)),i.has(c.id)?i.delete(c.id):i.add(c.id),s(),a())},r.appendChild(f)})}}function s(){it("s4-sel-count").textContent=`${i.size} item dipilih`;const r=i.has("aerator_3")?3:i.has("aerator_2")?2:i.has("aerator_1")?1:0,o=it("s4-sel-aerator");r>0?(o.textContent=`💨 Aerasi: ${r} unit`,o.classList.remove("hidden")):o.classList.add("hidden")}a(),s(),it("s4-btn-build").onclick=()=>{ra(),n([...i])}}function gv(n,e){const t=Ws();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">🧪 PERLAKUAN & ULANGAN</span>
        <h2 class="s4-title">Rancangan Percobaan: Konsentrasi, Ulangan & Dosis</h2>
        <p class="s4-subtitle">Tentukan variasi konsentrasi Azolla, jumlah ulangan, dan lama perlakuan sesuai rancangan penelitianmu.</p>
      </div>
      ${Vs(2)}

      <!-- Concentration tiers -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">🌿 Variasi Konsentrasi Azolla (pilih 3 taraf)</div>
        <p class="s4-cfg-hint">Geser setiap slider untuk mengatur konsentrasi relatif terhadap dosis referensi (200 g/L).
          Standar praktikum: 10%, 50%, 100%.</p>
        <div class="s4-conc-sliders" id="s4-conc-sliders"></div>
        <div class="s4-conc-preview" id="s4-conc-preview"></div>
      </div>

      <!-- Repetitions -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">🔁 Jumlah Ulangan (Replikasi)</div>
        <p class="s4-cfg-hint">Lebih banyak ulangan = data lebih valid secara statistik. Minimal 3 ulangan disarankan.</p>
        <div class="s4-rep-btns" id="s4-rep-btns">
          ${[1,2,3,4,5].map(h=>`<button class="s4-rep-btn${h===3?" active":""}" data-rep="${h}">${h}×</button>`).join("")}
        </div>
        <div class="s4-rep-feedback" id="s4-rep-feedback"></div>
      </div>

      <!-- Duration -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">⏱️ Lama Perlakuan</div>
        <p class="s4-cfg-hint">Durasi inkubasi dengan aerasi aktif. Literatur: 7–15 hari optimal untuk Azolla.</p>
        <div class="s4-dur-btns" id="s4-dur-btns">
          ${[3,5,7,10,14].map(h=>`<button class="s4-dur-btn${h===7?" active":""}" data-day="${h}">${h} hari</button>`).join("")}
        </div>
        <div class="s4-dur-feedback" id="s4-dur-feedback"></div>
      </div>

      <button class="s4-btn" id="s4-btn-cfg-done">📋 Lanjut ke Prosedur →</button>
    </div>
  `,document.body.appendChild(t);const i=[10,50,100],a=[...i],s=it("s4-conc-sliders");function r(){it("s4-conc-preview").innerHTML=a.map((h,g)=>{const x=(200*h/100).toFixed(1);return`<div class="s4-conc-pill">
        <span class="s4-conc-pill-label">T${g+1}</span>
        <b>${h}%</b> <span class="s4-conc-pill-sub">(${x} g/L)</span>
      </div>`}).join("")}for(let h=0;h<3;h++){const g=document.createElement("div");g.className="s4-slider-row",g.innerHTML=`
      <span class="s4-slider-tier">T${h+1}</span>
      <input type="range" class="s4-slider" min="5" max="200" step="5"
             value="${i[h]}" id="s4-slider-${h}">
      <span class="s4-slider-val" id="s4-slval-${h}">${i[h]}%</span>
    `,s.appendChild(g),document.getElementById(`s4-slider-${h}`).addEventListener("input",x=>{a[h]=parseInt(x.target.value),it(`s4-slval-${h}`).textContent=a[h]+"%",r()})}r();let o=3;const l={1:"⚠️ 1 ulangan tidak memenuhi syarat validitas statistik.",2:"⚠️ 2 ulangan cukup minimal.",3:"✅ 3 ulangan — standar minimum penelitian ilmiah.",4:"✅ 4 ulangan — lebih baik, data makin valid.",5:"✅ 5 ulangan — sangat baik untuk replikasi!"};function d(){it("s4-rep-feedback").innerHTML=l[o]||"",it("s4-rep-feedback").className="s4-rep-feedback "+(o>=3?"good":"warn")}it("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(h=>{h.onclick=()=>{it("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(g=>g.classList.remove("active")),h.classList.add("active"),o=parseInt(h.dataset.rep),d()}}),d();let c=7;const p={3:"⚠️ 3 hari terlalu singkat untuk degradasi Azolla yang signifikan.",5:"🟡 5 hari: penurunan mulai terlihat tetapi belum optimal.",7:"✅ 7 hari: sesuai rekomendasi literatur (Rizky et al., 2017).",10:"✅ 10 hari: lebih optimal, terutama jika aerasi sedang.",14:"✅ 14 hari: maksimal untuk hasil terbaik pada dosis rendah."};function f(){it("s4-dur-feedback").innerHTML=p[c]||"",it("s4-dur-feedback").className="s4-dur-feedback "+(c>=7?"good":c>=5?"warn":"bad")}it("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(h=>{h.onclick=()=>{it("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(g=>g.classList.remove("active")),h.classList.add("active"),c=parseInt(h.dataset.day),f()}}),f(),it("s4-btn-cfg-done").onclick=()=>{ra(),e({concentrations:[...a],repetitions:o,duration:c})}}function xv(n,e){var s;const t=Ws();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">📋 PROSEDUR PRAKTIKUM</span>
        <h2 class="s4-title">Langkah-langkah Percobaan Reaktor Vinasse</h2>
        <p class="s4-subtitle">Baca setiap langkah percobaan, lalu klik <b>Selesai Baca</b> untuk melanjutkan.</p>
      </div>
      ${Vs(3)}
      <div class="s4-procedure-list" id="s4-proc-list"></div>
      <div class="s4-cfg-summary" id="s4-cfg-summary"></div>
      <button class="s4-btn" id="s4-btn-proc-done">✅ Selesai Baca — Lihat Hasil Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=(s=ee.stage4)==null?void 0:s.concentrationCfg;i&&(it("s4-cfg-summary").innerHTML=`
      <div class="s4-info-box">
        Rancangan kamu: Konsentrasi <b>${i.concentrations.join("%, ")}%</b>
        · Ulangan <b>${i.repetitions}×</b> · Durasi <b>${i.duration} hari</b>
      </div>`);const a=it("s4-proc-list");hv.forEach(r=>{const o=document.createElement("div");o.className="s4-proc-step",o.innerHTML=`
      <div class="s4-proc-icon">${r.icon}</div>
      <div class="s4-proc-body">
        <div class="s4-proc-title">Langkah ${r.step}: ${r.title}</div>
        <div class="s4-proc-desc">${r.desc}</div>
      </div>
    `,a.appendChild(o)}),it("s4-btn-proc-done").onclick=()=>{ra(),e()}}function vv(n,e){var s;const t=Ws(),i=((s=ee.stage4)==null?void 0:s.concentrationCfg)||{repetitions:3,duration:7};if(t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">⚗️ HASIL RANCANGAN REAKTOR</span>
        <h2 class="s4-title">Simulasi Performa Reaktor Vinassemu</h2>
      </div>
      ${Vs(4)}

      ${n.success?`
        <!-- Reactor diagram -->
        <div class="s4-reactor-wrap" id="s4-reactor-wrap">
          <div class="s4-reactor-diagram">
            <!-- Lamp indicator -->
            <div class="s4-rd-lamp ${n.hasLight?"on":"off"}" id="s4-rd-lamp">
              ${n.hasLight?"💡":"🔦"}
              <span>${n.hasLight?"Lampu ON":"Tanpa Lampu"}</span>
            </div>
            <!-- Aquarium body -->
            <div class="s4-rd-tank" id="s4-rd-tank">
              <div class="s4-rd-liquid" id="s4-rd-liquid"></div>
              <div class="s4-rd-azolla" id="s4-rd-azolla"></div>
              <div class="s4-rd-bubbles" id="s4-rd-bubbles"></div>
              <div class="s4-rd-tank-label">Reaktor Vinasse</div>
            </div>
            <!-- Aerator units -->
            <div class="s4-rd-aerators">
              ${Array.from({length:n.aerationLvl||1},(r,o)=>`
                <div class="s4-rd-aer-unit" style="animation-delay:${o*.4}s">💨</div>
              `).join("")}
              <span class="s4-rd-aer-label">Aerator ×${n.aerationLvl||1}</span>
            </div>
          </div>

          <!-- Animated run button -->
          <button class="s4-btn s4-run-btn" id="s4-run-sim">▶ Jalankan Simulasi Reaktor</button>
          <p class="s4-run-hint">Klik untuk melihat simulasi penurunan COD & BOD selama ${i.duration} hari</p>
        </div>

        <!-- Results (hidden until sim runs) -->
        <div class="s4-sim-results hidden" id="s4-sim-results">
          <div class="s4-grade-badge" style="color:${n.gradeColor}">${n.grade}</div>

          <!-- COD/BOD bar charts animated -->
          <div class="s4-perf-bars" id="s4-perf-bars">
            <div class="s4-bar-section-title">📊 Rata-rata Penurunan Parameter (semua konsentrasi)</div>
            <div class="s4-bar-row">
              <span class="s4-bar-label">📉 Penurunan COD</span>
              <div class="s4-bar-track"><div class="s4-bar-fill" id="s4-bar-cod" style="width:0%;background:${n.gradeColor}"></div></div>
              <span class="s4-bar-val" id="s4-val-cod">0%</span>
            </div>
            <div class="s4-bar-row">
              <span class="s4-bar-label">💧 Penurunan BOD</span>
              <div class="s4-bar-track"><div class="s4-bar-fill" id="s4-bar-bod" style="width:0%;background:${n.gradeColor}"></div></div>
              <span class="s4-bar-val" id="s4-val-bod">0%</span>
            </div>
          </div>

          <!-- Per-concentration table -->
          <div class="s4-conc-table-wrap">
            <div class="s4-cfg-label">🧪 Hasil Per Variasi Konsentrasi</div>
            <table class="s4-conc-table">
              <thead><tr>
                <th>Taraf</th><th>Konsentrasi</th><th>Dosis (g/L)</th>
                <th>COD turun</th><th>BOD turun</th><th>Keterangan</th>
              </tr></thead>
              <tbody id="s4-conc-tbody"></tbody>
            </table>
          </div>

          <!-- Design tags -->
          <div class="s4-design-tags">
            ${n.hasLight?'<span class="s4-tag green">💡 Lampu ✔</span>':'<span class="s4-tag red">💡 Tanpa Lampu</span>'}
            ${n.hasFilter?'<span class="s4-tag green">🕸️ Filter ✔</span>':'<span class="s4-tag gray">🕸️ Tanpa Filter</span>'}
            ${n.hasBuffer?'<span class="s4-tag green">⚗️ Buffer pH ✔</span>':'<span class="s4-tag gray">⚗️ Tanpa Buffer</span>'}
            <span class="s4-tag blue">💨 Aerasi ${n.aerationLvl||1} unit</span>
            <span class="s4-tag blue">🔁 ${i.repetitions}× ulangan</span>
            <span class="s4-tag blue">⏱️ ${i.duration} hari</span>
          </div>

          <div class="s4-level-complete">
            <div class="s4-complete-icon">🎉</div>
            <h3>Level 4 Selesai!</h3>
            <p>Reaktor berhasil dirancang dan disimulasikan. Saatnya melakukan evaluasi pada Level 5.</p>
            <div class="s4-final-score">Total Poin: <span>${ee.totalPoints}</span></div>
          </div>
        </div>
      `:`
        <div class="s4-result-box fail">
          <div class="s4-result-icon">❌</div>
          <div class="s4-result-feedback">${n.feedback}</div>
          <ul class="s4-missing-list">${n.missing.map(r=>`<li>⚠️ ${r}</li>`).join("")}</ul>
        </div>
        <div class="s4-retry-hint">Kembali untuk melengkapi rancangan reaktormu.</div>
      `}

      <button class="s4-btn ${n.success?"hidden":""}" id="s4-btn-finish">
        ${n.success?"➡️ Lanjut ke Level 5 – Evaluasi":"🔄 Coba Lagi"}
      </button>
    </div>
  `,document.body.appendChild(t),!n.success){it("s4-btn-finish").onclick=()=>{ra(),Cd(e)};return}let a=!1;it("s4-run-sim").onclick=()=>{if(a)return;a=!0,it("s4-run-sim").disabled=!0,it("s4-run-sim").textContent="⏳ Simulasi berjalan…";const r=it("s4-rd-liquid"),o=it("s4-rd-azolla");it("s4-rd-bubbles").classList.add("active"),r.classList.add("treating"),o.classList.add("growing"),setTimeout(()=>{it("s4-run-sim").textContent="✅ Simulasi Selesai",it("s4-sim-results").classList.remove("hidden");const d=it("s4-conc-tbody");d.innerHTML="",n.perConcentration.forEach((c,p)=>{const f=document.createElement("tr");f.innerHTML=`
          <td>T${p+1}</td>
          <td>${c.conc}%</td>
          <td>${(200*c.conc/100).toFixed(1)} g/L</td>
          <td style="color:${n.gradeColor}">${c.cod}%</td>
          <td style="color:${n.gradeColor}">${c.bod}%</td>
          <td style="font-size:11px;color:#6090a0">${c.note}</td>
        `,d.appendChild(f)}),setTimeout(()=>{it("s4-bar-cod").style.width=Math.min(100,n.codReduction)+"%",it("s4-val-cod").textContent=n.codReduction+"%",it("s4-bar-bod").style.width=Math.min(100,n.bodReduction)+"%",it("s4-val-bod").textContent=n.bodReduction+"%"},100),setTimeout(()=>{const c=document.createElement("button");c.className="s4-btn",c.style.marginTop="8px",c.textContent="➡️ Lanjut ke Level 5 – Evaluasi",c.onclick=()=>{ra(),e&&e()},it("s4-sim-results").appendChild(c),c.scrollIntoView({behavior:"smooth",block:"nearest"})},900)},2200)}}function Vs(n){return`<div class="s4-step-indicator">
    ${[{n:1,label:"Builder"},{n:2,label:"Konsentrasi"},{n:3,label:"Prosedur"},{n:4,label:"Hasil"}].map((t,i)=>`
      ${i>0?'<span class="s4-step-arrow">→</span>':""}
      <span class="s4-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Ws(){const n=document.createElement("div");return n.id="s4-overlay",n.className="s4-overlay",n}function ra(){const n=it("s4-overlay");n&&n.remove()}function bv(){if(it("s4-styles"))return;const n=document.createElement("style");n.id="s4-styles",n.textContent=`
    .s4-overlay {
      position:fixed;inset:0;background:rgba(5,10,22,0.97);
      display:flex;align-items:center;justify-content:center;
      z-index:500;overflow-y:auto;padding:20px 12px;
    }
    .s4-card {
      background:rgba(8,18,34,0.99);border:1px solid #1a3a60;
      border-radius:16px;max-width:860px;width:100%;
      padding:26px 30px;color:#ddeeff;
      box-shadow:0 0 50px rgba(0,100,255,0.12);
    }
    .s4-builder-card { max-width:1000px; }
    .s4-header { text-align:center;margin-bottom:18px; }
    .s4-badge {
      background:rgba(0,100,200,0.15);border:1px solid #0080d0;
      color:#40ccff;padding:4px 14px;border-radius:20px;
      font-size:12px;letter-spacing:1px;
    }
    .s4-title  { margin:10px 0 4px;font-size:20px;color:#80ccff; }
    .s4-subtitle { color:#607090;font-size:13px;margin:0; }

    .s4-step-indicator {
      display:flex;align-items:center;justify-content:center;
      gap:6px;margin-bottom:20px;flex-wrap:wrap;
    }
    .s4-step {
      padding:4px 12px;border-radius:12px;font-size:12px;
      background:rgba(20,40,70,0.8);color:#405070;border:1px solid #1a3a5a;
    }
    .s4-step.active { background:rgba(0,60,120,0.3);color:#40aaff;border-color:#0080cc; }
    .s4-step.done   { background:rgba(0,60,100,0.15);color:#4080a0;border-color:#004060; }
    .s4-step-arrow  { color:#304050;font-size:14px; }

    .s4-context {
      background:rgba(6,16,34,0.85);border-left:4px solid #0080c0;
      padding:12px 16px;border-radius:6px;font-size:14px;
      line-height:1.7;color:#90c8e0;margin-bottom:14px;
    }
    .s4-question {
      background:rgba(6,16,34,0.85);border-left:4px solid #e07020;
      padding:10px 16px;border-radius:6px;font-size:14px;
      line-height:1.6;color:#d8ddc8;margin-bottom:12px;
    }
    .s4-options { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s4-option {
      padding:10px 14px;border-radius:8px;border:2px solid #1a3a5a;
      background:rgba(6,16,34,0.8);color:#90b0c8;cursor:pointer;
      text-align:left;font-size:13px;transition:all 0.2s;line-height:1.5;
    }
    .s4-option:hover:not(:disabled) { border-color:#0090ff;color:#40ccff; }
    .s4-option.correct { border-color:#2ecc71;background:rgba(20,80,30,0.2);color:#80ee90; }
    .s4-option.wrong   { border-color:#e74c3c;background:rgba(80,10,10,0.2);color:#ff8888; }
    .s4-option:disabled { opacity:0.6;cursor:default; }
    .s4-feedback {
      padding:10px 14px;border-radius:6px;font-size:13px;
      line-height:1.7;margin-bottom:8px;
    }
    .s4-feedback.hidden  { display:none; }
    .s4-feedback.correct { background:rgba(20,80,30,0.2);border-left:4px solid #2ecc71;color:#a0e8a0; }
    .s4-feedback.wrong   { background:rgba(80,10,10,0.2);border-left:4px solid #e74c3c;color:#ff9090; }

    .s4-btn {
      display:inline-block;margin-top:14px;padding:11px 26px;border-radius:10px;
      background:linear-gradient(135deg,#0a3a70,#0a5090);
      color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;
      transition:all 0.2s;
    }
    .s4-btn:hover:not(:disabled) { filter:brightness(1.2); }
    .s4-btn:disabled { opacity:0.4;cursor:default; }
    .s4-btn.hidden   { display:none; }

    /* Builder grid */
    .s4-builder-grid {
      display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
      gap:10px;margin-bottom:14px;max-height:54vh;overflow-y:auto;
      padding-right:4px;
    }
    .s4-cat-label {
      grid-column:1/-1;font-size:12px;font-weight:700;color:#40aaff;
      letter-spacing:2px;padding:6px 0 2px;border-bottom:1px solid #1a3a5a;
    }
    .s4-item-card {
      background:rgba(6,18,38,0.9);border:2px solid #1a3a5a;
      border-radius:10px;padding:12px;cursor:pointer;
      transition:border-color 0.2s,background 0.2s;
      display:flex;flex-direction:column;gap:4px;
    }
    .s4-item-card:hover { border-color:#0080cc; }
    .s4-item-card.selected { border-color:#40aaff;background:rgba(0,40,80,0.3); }
    .s4-item-check { font-size:18px;color:#40aaff; }
    .s4-item-emoji { font-size:24px;text-align:center; }
    .s4-item-name  { font-size:13px;font-weight:700;color:#90c8e0; }
    .s4-item-desc  { font-size:11px;color:#506070;line-height:1.5; }
    .s4-required-tag {
      background:rgba(0,60,120,0.3);border:1px solid #0060aa;
      color:#60aaff;font-size:10px;padding:1px 6px;border-radius:8px;
      margin-left:4px;vertical-align:middle;
    }
    .s4-selection-summary {
      display:flex;align-items:center;gap:12px;
      font-size:13px;color:#6090b0;margin:4px 0 8px;
    }
    .s4-aer-badge {
      background:rgba(0,60,100,0.2);border:1px solid #0060a0;
      color:#40aaff;padding:3px 10px;border-radius:10px;font-size:12px;
    }
    .s4-aer-badge.hidden { display:none; }

    /* Procedure */
    .s4-procedure-list {
      display:flex;flex-direction:column;gap:10px;
      max-height:55vh;overflow-y:auto;padding-right:4px;
    }
    .s4-proc-step {
      display:flex;gap:12px;align-items:flex-start;
      background:rgba(6,16,34,0.85);border:1px solid #1a3a5a;
      border-radius:8px;padding:10px 14px;
    }
    .s4-proc-icon  { font-size:22px;flex-shrink:0; }
    .s4-proc-title { font-size:13px;font-weight:700;color:#80b8d8;margin-bottom:4px; }
    .s4-proc-desc  { font-size:12px;color:#7090a0;line-height:1.6; }

    /* Result */
    .s4-result-box {
      padding:14px 18px;border-radius:10px;margin:10px 0;
      font-size:14px;line-height:1.7;
    }
    .s4-result-box.success { background:rgba(0,80,40,0.2);border:1px solid #00aa60;color:#80ffa0; }
    .s4-result-box.fail    { background:rgba(100,10,10,0.2);border:1px solid #aa2020;color:#ff9090; }
    .s4-result-icon { font-size:26px;margin-bottom:6px; }
    .s4-missing-list { margin:8px 0 0 16px;font-size:13px;color:#ff9090; }
    .s4-grade-badge {
      text-align:center;font-size:22px;font-weight:800;margin:10px 0;
      text-shadow:0 0 12px currentColor;
    }
    .s4-perf-bars { display:flex;flex-direction:column;gap:10px;margin:12px 0; }
    .s4-bar-row { display:flex;align-items:center;gap:10px; }
    .s4-bar-label { font-size:13px;color:#7090b0;width:160px;flex-shrink:0; }
    .s4-bar-track {
      flex:1;height:14px;background:rgba(10,20,40,0.8);
      border-radius:7px;overflow:hidden;border:1px solid #1a3a5a;
    }
    .s4-bar-fill  { height:100%;border-radius:7px;transition:width 0.8s ease; }
    .s4-bar-val   { font-size:14px;font-weight:700;color:#a0c8e0;width:44px;text-align:right; }
    .s4-design-tags { display:flex;flex-wrap:wrap;gap:8px;margin:10px 0; }
    .s4-tag {
      padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;
    }
    .s4-tag.green { background:rgba(0,80,40,0.25);color:#40ff80;border:1px solid #00aa60; }
    .s4-tag.red   { background:rgba(80,10,10,0.2);color:#ff8080;border:1px solid #aa3030; }
    .s4-tag.gray  { background:rgba(30,40,50,0.3);color:#607080;border:1px solid #2a3a4a; }
    .s4-tag.blue  { background:rgba(0,50,100,0.25);color:#60aaff;border:1px solid #0060a0; }
    .s4-level-complete {
      margin-top:16px;text-align:center;padding:16px;border-radius:10px;
      background:rgba(0,60,120,0.2);border:1px solid #0080c0;
    }
    .s4-complete-icon { font-size:38px;margin-bottom:6px; }
    .s4-level-complete h3 { color:#40aaff;margin:0 0 8px;font-size:20px; }
    .s4-level-complete p  { font-size:13px;color:#7090a0;line-height:1.6;margin:0 0 10px; }
    .s4-final-score { font-size:18px;font-weight:700;color:#ffe040;margin-bottom:8px; }
    .s4-retry-hint {
      text-align:center;color:#7090a0;font-size:13px;margin:10px 0;
    }

    /* Concentration config panel */
    .s4-cfg-section {
      background:rgba(6,16,34,0.7);border:1px solid #1a3a5a;
      border-radius:10px;padding:14px 16px;margin-bottom:14px;
    }
    .s4-cfg-label {
      font-size:13px;font-weight:700;color:#60aaff;margin-bottom:4px;
    }
    .s4-cfg-hint { font-size:12px;color:#506070;margin:0 0 10px;line-height:1.5; }
    .s4-conc-sliders { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s4-slider-row { display:flex;align-items:center;gap:10px; }
    .s4-slider-tier { font-size:12px;font-weight:700;color:#40aaff;width:22px;flex-shrink:0; }
    .s4-slider {
      flex:1;accent-color:#0080cc;
      cursor:pointer;
    }
    .s4-slider-val { font-size:13px;font-weight:700;color:#a0c8e0;width:44px;text-align:right;flex-shrink:0; }
    .s4-conc-preview { display:flex;gap:10px;flex-wrap:wrap;margin-top:4px; }
    .s4-conc-pill {
      background:rgba(0,40,80,0.4);border:1px solid #0060a0;
      border-radius:8px;padding:5px 10px;font-size:13px;color:#80c0e0;
    }
    .s4-conc-pill-label { font-size:10px;color:#40aaff;margin-right:4px; }
    .s4-conc-pill-sub   { font-size:11px;color:#506070; }
    /* Rep/Duration group buttons */
    .s4-rep-btns, .s4-dur-btns {
      display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;
    }
    .s4-rep-btn, .s4-dur-btn {
      padding:6px 16px;border-radius:8px;border:2px solid #1a3a5a;
      background:rgba(6,16,34,0.8);color:#6090b0;cursor:pointer;
      font-size:13px;font-weight:600;transition:all 0.15s;
    }
    .s4-rep-btn.active, .s4-dur-btn.active {
      border-color:#0080cc;background:rgba(0,50,100,0.3);color:#40aaff;
    }
    .s4-rep-feedback, .s4-dur-feedback {
      font-size:12px;line-height:1.5;padding:4px 0;
    }
    .s4-rep-feedback.good, .s4-dur-feedback.good { color:#40cc80; }
    .s4-rep-feedback.warn, .s4-dur-feedback.warn { color:#e0a020; }
    .s4-rep-feedback.bad,  .s4-dur-feedback.bad  { color:#ff6060; }
    /* Info box */
    .s4-info-box {
      background:rgba(0,40,80,0.2);border-left:4px solid #0070c0;
      padding:8px 14px;border-radius:6px;font-size:13px;color:#80b8e0;
      margin-bottom:12px;line-height:1.6;
    }
    .s4-bar-section-title {
      font-size:12px;color:#4080a0;grid-column:1/-1;margin-bottom:4px;
    }

    /* Reactor diagram */
    .s4-reactor-wrap { display:flex;flex-direction:column;align-items:center;gap:12px;margin:12px 0; }
    .s4-reactor-diagram {
      display:flex;align-items:flex-end;gap:20px;
      background:rgba(5,12,25,0.6);border:1px solid #1a3a5a;
      border-radius:12px;padding:14px 20px;
    }
    /* Lamp */
    .s4-rd-lamp {
      display:flex;flex-direction:column;align-items:center;gap:4px;
      font-size:22px;color:#8090a0;font-size:12px;
    }
    .s4-rd-lamp.on  { color:#ffe060;text-shadow:0 0 10px #ffe040; }
    .s4-rd-lamp.off { color:#404050;opacity:0.5; }
    /* Tank */
    .s4-rd-tank {
      width:160px;height:100px;border:3px solid #4a6a8a;border-radius:6px;
      background:rgba(5,15,30,0.7);position:relative;overflow:hidden;
    }
    .s4-rd-liquid {
      position:absolute;bottom:0;left:0;right:0;height:70%;
      background:rgba(60,20,5,0.85);
      transition:background 2s ease;
    }
    .s4-rd-liquid.treating { background:rgba(30,60,10,0.6); }
    .s4-rd-azolla {
      position:absolute;bottom:70%;left:0;right:0;height:0%;
      background:rgba(40,140,40,0.6);
      transition:height 2s ease;
    }
    .s4-rd-azolla.growing { height:15%; }
    .s4-rd-bubbles { position:absolute;inset:0;pointer-events:none; }
    .s4-rd-tank-label {
      position:absolute;bottom:4px;left:0;right:0;
      text-align:center;font-size:10px;color:rgba(255,255,255,0.3);
    }
    /* Animated bubbles via pseudo element injected by JS class */
    .s4-rd-bubbles.active::before,
    .s4-rd-bubbles.active::after {
      content:'';position:absolute;
      width:6px;height:6px;border-radius:50%;
      background:rgba(80,200,255,0.35);
      bottom:0;animation:rdBubbleRise 1.4s ease-in infinite;
    }
    .s4-rd-bubbles.active::before { left:35%;animation-delay:0s; }
    .s4-rd-bubbles.active::after  { left:60%;animation-delay:0.7s; }
    @keyframes rdBubbleRise {
      0%   { transform:translateY(0);opacity:.7; }
      100% { transform:translateY(-90px);opacity:0; }
    }
    /* Aerator units */
    .s4-rd-aerators {
      display:flex;flex-direction:column;align-items:center;gap:4px;
    }
    .s4-rd-aer-unit {
      font-size:20px;
      animation:aerPulse 1.2s ease-in-out infinite;
    }
    @keyframes aerPulse {
      0%,100% { opacity:.6;transform:scale(1); }
      50%      { opacity:1;transform:scale(1.15); }
    }
    .s4-rd-aer-label { font-size:11px;color:#4080a0;margin-top:2px; }
    .s4-run-btn { font-size:16px;padding:12px 32px; }
    .s4-run-hint { font-size:12px;color:#405060;margin:0; }
    .s4-sim-results { margin-top:10px; }
    .s4-sim-results.hidden { display:none; }
    /* Concentration table */
    .s4-conc-table-wrap { margin:12px 0; }
    .s4-conc-table {
      width:100%;border-collapse:collapse;font-size:12px;
    }
    .s4-conc-table th {
      background:rgba(0,40,80,0.4);color:#60aaff;
      padding:6px 8px;border:1px solid #1a3a5a;text-align:left;
    }
    .s4-conc-table td {
      padding:5px 8px;border:1px solid #0e2040;color:#90b8d0;
    }
    .s4-conc-table tr:nth-child(even) td { background:rgba(0,20,40,0.2); }
  `,document.head.appendChild(n)}const _v=[{id:"no_light",title:"Kegagalan: Azolla Tidak Dapat Berfotosintesis",emoji:"🌑",condition:n=>!n.hasLight,symptom:"Warna vinasse tetap hitam pekat setelah 7 hari. Azolla menguning dan mati pada hari ke-3.",cause:"Aquarium tidak mendapat pencahayaan yang cukup (< 200 lux). Azolla tidak dapat melakukan fotosintesis sehingga tidak menghasilkan O₂.",theory:"Azolla microphylla adalah fototrofi obligat — ia wajib mendapat cahaya (> 1000 lux) untuk mengaktifkan fotosistem II dan menghasilkan ATP yang diperlukan untuk pertumbuhan dan produksi eksudat enzimatis pengurai melanoidin.",fix:"Pasang grow-light 1000–3000 lux, atau letakkan reaktor di bawah sinar matahari langsung.",scoreImpact:-15},{id:"low_aeration",title:"Kegagalan: Aerasi Kurang — O₂ Tidak Mencukupi",emoji:"💧",condition:n=>n.aerationLvl<2,symptom:"pH turun sangat lambat. Bau asam tetap tajam pada hari ke-5. COD hanya turun ~40%.",cause:"Hanya 1 aerator yang digunakan. Distribusi O₂ tidak merata — zona anoksik terbentuk di sudut reaktor dan menghambat aktivitas Azolla.",theory:"Proses aerob dalam bioremediasi sangat bergantung pada suplai O₂ terlarut (DO). Nilai DO optimal adalah > 4 mg/L. Dengan 1 aerator kecil, zona pusat reaktor mungkin cukup, tetapi sudut-sudut reaktor akan mengalami anoksia yang menghambat degradasi polutan.",fix:"Tambahkan minimal 2 aerator dan atur posisi selang agar gelembung udara mencapai seluruh volume cairan.",scoreImpact:-10},{id:"no_buffer",title:"Peringatan: pH Terlalu Asam di Awal",emoji:"⚗️",condition:n=>!n.hasBuffer,symptom:n=>`Azolla tumbuh lambat ${n&&n.duration<=5?"di hari-hari pertama percobaan":"pada minggu pertama"}. Beberapa tanaman mengalami klorosis (daun kuning) karena stres pH asam.`,cause:"Vinasse murni memiliki pH 3–4. Azolla bekerja optimal pada pH 5–7. Tanpa buffer pH, fase adaptasi berlangsung lama.",theory:"Enzim nitrogenase pada simbiont Anabaena azollae sangat sensitif terhadap pH rendah. Pada pH < 4.5, aktivitas nitrogenase menurun drastis sehingga fiksasi N₂ dan produksi eksudat berhenti. Penambahan NaHCO₃ (buffer) membantu menstabilkan pH ke 5.5–6.5 pada fase awal.",fix:"Tambahkan NaHCO₃ atau air kapur secukupnya hingga pH vinasse mencapai 5.5–6 sebelum inokulasi Azolla.",scoreImpact:-5},{id:"no_filter",title:"Catatan: Effluen Belum Tersaring",emoji:"🕸️",condition:n=>!n.hasFilter,symptom:"Cairan effluen mengandung partikel biomassa Azolla yang terlepas, membuat cairan tampak keruh meski COD sudah turun.",cause:"Tidak ada penyaring mekanik di akhir proses. Biomassa Azolla yang mati terlarut dan meningkatkan TSS (Total Suspended Solid) effluen.",theory:"Standar baku mutu air limbah (PERMEN LH No. 5/2014) mensyaratkan TSS < 200 mg/L untuk buangan ke badan air. Tanpa filtrasi, meski COD/BOD sudah memenuhi syarat, TSS bisa melebihi batas.",fix:"Pasang penyaring mesh 100–200 µm di outlet reaktor sebelum effluen dibuang atau diproses lanjut menjadi POC.",scoreImpact:0}],Si=n=>document.getElementById(n);function yv(n){Ev(),Xs(),wv(()=>{Mv(()=>{Sv(n)})})}function wv(n){var a;const e=ee.stage4.reactorResult||{},t=_v.filter(s=>s.condition(e)),i=No();if(i.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">🔍 LEVEL 5 – EVALUASI PERCOBAAN</span>
        <h2 class="s5-title">Apa yang Terjadi pada Reaktormu?</h2>
        <p class="s5-subtitle">Analisis kegagalan dan keberhasilan percobaan berdasarkan desain yang kamu buat.</p>
      </div>
      ${Uo(1)}

      ${t.length===0?`
        <div class="s5-success-banner">
          <div class="s5-success-icon">🏆</div>
          <h3>Reaktor Sempurna!</h3>
          <p>Desain reaktormu sudah sangat baik — tidak ditemukan kegagalan kritis.
            Reaktor berjalan optimal dengan semua komponen terpenuhi.</p>
        </div>
      `:`
        <div class="s5-analysis-intro">
          📋 Ditemukan <b>${t.length}</b> poin evaluasi pada reaktormu. Pelajari setiap temuan:
        </div>
        <div class="s5-scenario-list" id="s5-scen-list"></div>
      `}

      <button class="s5-btn" id="s5-btn-to-mcq">
        ✏️ Lanjut ke Evaluasi Esai →
      </button>
    </div>
  `,document.body.appendChild(i),t.length>0){const s=((a=ee.stage4)==null?void 0:a.concentrationCfg)||null,r=Si("s5-scen-list");t.forEach((o,l)=>{const d=typeof o.symptom=="function"?o.symptom(s):o.symptom,c=document.createElement("div");c.className="s5-scenario-card",c.innerHTML=`
        <div class="s5-scen-header" onclick="this.parentElement.classList.toggle('open')">
          <span class="s5-scen-emoji">${o.emoji}</span>
          <span class="s5-scen-title">${o.title}</span>
          <span class="s5-scen-chevron">▼</span>
        </div>
        <div class="s5-scen-body">
          <div class="s5-scen-row"><span class="s5-scen-lbl">🔎 Gejala</span><p>${d}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">⚙️ Penyebab</span><p>${o.cause}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">📚 Teori</span><p>${o.theory}</p></div>
          <div class="s5-scen-row fix"><span class="s5-scen-lbl">✅ Solusi</span><p>${o.fix}</p></div>
        </div>
      `,l===0&&c.classList.add("open"),r.appendChild(c)})}Si("s5-btn-to-mcq").onclick=()=>{Xs(),n()}}function Mv(n){const e=`Dalam proyek yang telah kalian buat, limbah vinasse dari industri etanol di Bekonang memiliki karakteristik pH yang sangat asam, kadar COD dan BOD yang sangat tinggi, serta mengandung pigmen melanoidin dan senyawa fenol.
Berdasarkan konsep bioremediasi yang telah kalian pelajari, analisislah mengapa penggunaan bakteri pengurai seringkali gagal dalam memulihkan limbah vinasse ini? Selanjutnya, jelaskan mekanisme pemilihan agen biologis dapat secara efektif menurunkan kadar polutan dalam proses valorisasi limbah tersebut menjadi Pupuk Organik Cair (POC) yang aman bagi lingkungan`,t=No();t.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">✏️ EVALUASI ESAI</span>
        <h2 class="s5-title">Jawab Pertanyaan Berikut</h2>
      </div>
      ${Uo(2)}
      <div class="s5-question s5-essay-question">${e.replace(/\n/g,"<br>")}</div>
      <textarea class="s5-essay-textarea" id="s5-essay-input"
        placeholder="Tuliskan jawaban analisismu di sini..."
        rows="8"></textarea>
      <div class="s5-essay-hint">Jawaban akan ditampilkan di halaman ringkasan akhir.</div>
      <button class="s5-btn" id="s5-btn-essay-submit" disabled>✅ Simpan Jawaban</button>
    </div>
  `,document.body.appendChild(t);const i=Si("s5-essay-input"),a=Si("s5-btn-essay-submit");i.oninput=()=>{a.disabled=i.value.trim().length<10},a.onclick=()=>{ee.stage5=ee.stage5||{},ee.stage5.essayAnswer=i.value.trim(),Tx({playerName:ee.playerName||"",essayAnswer:ee.stage5.essayAnswer,timestamp:new Date().toISOString()}),Xs(),n()}}function Sv(n){var s,r;const e=ee.stage4.reactorResult||{},t=((s=ee.stage4)==null?void 0:s.concentrationCfg)||null,i=(e.perConcentration||[]).map((o,l)=>`
    <tr>
      <td>T${l+1}</td>
      <td>${o.conc}%</td>
      <td>${(200*o.conc/100).toFixed(1)} g/L</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.cod}%</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.bod}%</td>
      <td style="font-size:11px;color:#6090a0">${o.note}</td>
    </tr>
  `).join(""),a=No();a.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">📊 RINGKASAN EVALUASI</span>
        <h2 class="s5-title">Kesimpulan Percobaan Reaktor Vinasse</h2>
      </div>
      ${Uo(3)}

      <div class="s5-debrief-grid">
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">📉</div>
          <div class="s5-deb-label">Efisiensi COD (rata-rata)</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.codReduction||0}%</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">💧</div>
          <div class="s5-deb-label">Efisiensi BOD (rata-rata)</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.bodReduction||0}%</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">⭐</div>
          <div class="s5-deb-label">Nilai Reaktor</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.grade||"—"}</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">🏅</div>
          <div class="s5-deb-label">Total Poin</div>
          <div class="s5-deb-value" style="color:#ffe040">${ee.totalPoints}</div>
        </div>
      </div>

      ${t?`
        <div class="s5-conc-recap">
          <div class="s5-conc-recap-title">🧪 Rancangan Percobaan yang Digunakan</div>
          <div class="s5-info-box">
            Konsentrasi: <b>${t.concentrations.join("%, ")}%</b>
            &nbsp;·&nbsp; Ulangan: <b>${t.repetitions}×</b>
            &nbsp;·&nbsp; Durasi: <b>${t.duration} hari</b>
          </div>
          ${i?`
            <table class="s5-conc-table">
              <thead><tr>
                <th>Taraf</th><th>Konsentrasi</th><th>Dosis (g/L)</th>
                <th>COD turun</th><th>BOD turun</th><th>Keterangan</th>
              </tr></thead>
              <tbody>${i}</tbody>
            </table>
          `:""}
        </div>
      `:""}

      <div class="s5-conclusion">
        <h4>💡 Kesimpulan Ilmiah</h4>
        <p>Bioremediasi dengan <b>Azolla microphylla</b> terbukti efektif menurunkan kadar COD dan BOD pada limbah vinasse.
          Efisiensi maksimal tercapai dengan kombinasi: pencahayaan cukup, aerasi multi-unit, dan pengkondisian pH awal.
          Namun, nilai akhir COD belum memenuhi baku mutu PERMEN LH No. 5/2014 (300 mg/L) — artinya perlakuan
          lanjutan seperti koagulasi atau wetland buatan masih diperlukan untuk aplikasi skala industri.</p>
        <p>Produk akhir proses ini adalah <b>Pupuk Organik Cair (POC)</b> kaya kalium yang dapat
          digunakan kembali di perkebunan tebu — sebuah pendekatan <em>circular economy</em>!</p>
      </div>

      <div class="s5-level-complete">
        <div class="s5-complete-icon">🎉</div>
        <h3>Level 5 Selesai!</h3>
        <p>Selamat! Kamu telah menyelesaikan seluruh tahap percobaan bioremediasi vinasse.</p>
        <div class="s5-final-score">Total Poin: <span>${ee.totalPoints}</span></div>
      </div>

      ${(r=ee.stage5)!=null&&r.essayAnswer?`
        <div class="s5-essay-recap">
          <div class="s5-essay-recap-title">✏️ Jawaban Esaimu</div>
          <div class="s5-essay-recap-body">${ee.stage5.essayAnswer.replace(/\n/g,"<br>")}</div>
        </div>
      `:""}

      <button class="s5-btn" id="s5-btn-finish">🏁 Lihat Hasil Akhir →</button>
    </div>
  `,document.body.appendChild(a),Si("s5-btn-finish").onclick=()=>{Xs(),n&&n()}}function Uo(n){return`<div class="s5-step-indicator">
    ${[{n:1,label:"Analisis"},{n:2,label:"Esai"},{n:3,label:"Kesimpulan"}].map((t,i)=>`
      ${i>0?'<span class="s5-step-arrow">→</span>':""}
      <span class="s5-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function No(){const n=document.createElement("div");return n.id="s5-overlay",n.className="s5-overlay",n}function Xs(){const n=Si("s5-overlay");n&&n.remove()}function Ev(){if(Si("s5-styles"))return;const n=document.createElement("style");n.id="s5-styles",n.textContent=`
    .s5-overlay {
      position:fixed;inset:0;background:rgba(5,8,18,0.97);
      display:flex;align-items:center;justify-content:center;
      z-index:500;overflow-y:auto;padding:20px 12px;
    }
    .s5-card {
      background:rgba(6,14,28,0.99);border:1px solid #2a3060;
      border-radius:16px;max-width:860px;width:100%;
      padding:26px 30px;color:#dde8ff;
      box-shadow:0 0 50px rgba(60,0,200,0.12);
    }
    .s5-header { text-align:center;margin-bottom:18px; }
    .s5-badge {
      background:rgba(60,0,180,0.15);border:1px solid #6040cc;
      color:#9080ff;padding:4px 14px;border-radius:20px;
      font-size:12px;letter-spacing:1px;
    }
    .s5-title  { margin:10px 0 4px;font-size:20px;color:#b0a0ff; }
    .s5-subtitle { color:#5060a0;font-size:13px;margin:0; }

    .s5-step-indicator {
      display:flex;align-items:center;justify-content:center;
      gap:6px;margin-bottom:20px;flex-wrap:wrap;
    }
    .s5-step {
      padding:4px 12px;border-radius:12px;font-size:12px;
      background:rgba(20,20,60,0.8);color:#404070;border:1px solid #2a2a5a;
    }
    .s5-step.active { background:rgba(40,20,100,0.3);color:#8070ff;border-color:#6050cc; }
    .s5-step.done   { background:rgba(20,10,60,0.15);color:#5050a0;border-color:#3030a0; }
    .s5-step-arrow  { color:#303050;font-size:14px; }

    .s5-success-banner {
      text-align:center;padding:20px;border-radius:10px;
      background:rgba(0,80,40,0.2);border:1px solid #00aa60;margin-bottom:16px;
    }
    .s5-success-banner h3 { color:#40ff80;margin:6px 0; }
    .s5-success-banner p  { font-size:13px;color:#70a880; }
    .s5-success-icon { font-size:36px;margin-bottom:4px; }

    .s5-analysis-intro {
      font-size:13px;color:#8090c0;
      background:rgba(10,10,40,0.6);padding:10px 14px;border-radius:6px;
      border-left:4px solid #5040cc;margin-bottom:14px;
    }

    .s5-scenario-list { display:flex;flex-direction:column;gap:8px;margin-bottom:14px; }
    .s5-scenario-card {
      background:rgba(8,8,28,0.9);border:1px solid #2a2a5a;border-radius:10px;overflow:hidden;
    }
    .s5-scen-header {
      display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;
      background:rgba(20,18,60,0.6);user-select:none;
    }
    .s5-scen-header:hover { background:rgba(30,25,70,0.8); }
    .s5-scen-emoji { font-size:20px; }
    .s5-scen-title { flex:1;font-size:14px;font-weight:700;color:#9090d8; }
    .s5-scen-chevron { color:#5050a0;font-size:12px;transition:transform 0.2s; }
    .s5-scenario-card.open .s5-scen-chevron { transform:rotate(180deg); }
    .s5-scen-body {
      display:none;padding:12px 14px;
      border-top:1px solid #1a1a4a;
    }
    .s5-scenario-card.open .s5-scen-body { display:block; }
    .s5-scen-row { margin-bottom:10px; }
    .s5-scen-row p { font-size:13px;color:#7080a0;line-height:1.6;margin:4px 0 0 0; }
    .s5-scen-lbl {
      font-size:11px;font-weight:700;color:#7070c0;
      background:rgba(20,20,60,0.5);padding:2px 8px;border-radius:8px;
    }
    .s5-scen-row.fix .s5-scen-lbl { color:#40ff80;background:rgba(0,60,20,0.3); }
    .s5-scen-row.fix p { color:#60c890; }

    .s5-question {
      background:rgba(8,8,30,0.85);border-left:4px solid #7060cc;
      padding:12px 16px;border-radius:6px;font-size:14px;
      line-height:1.7;color:#c0c8e8;margin-bottom:12px;
    }
    .s5-options { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s5-option {
      padding:10px 14px;border-radius:8px;border:2px solid #2a2a5a;
      background:rgba(8,8,30,0.8);color:#8090c0;cursor:pointer;
      text-align:left;font-size:13px;transition:all 0.2s;line-height:1.5;
    }
    .s5-option:hover:not(:disabled) { border-color:#7060ff;color:#a090ff; }
    .s5-option.correct { border-color:#2ecc71;background:rgba(20,80,30,0.2);color:#80ee90; }
    .s5-option.wrong   { border-color:#e74c3c;background:rgba(80,10,10,0.2);color:#ff8888; }
    .s5-option:disabled { opacity:0.6;cursor:default; }
    .s5-feedback {
      padding:10px 14px;border-radius:6px;font-size:13px;line-height:1.7;margin-bottom:8px;
    }
    .s5-feedback.hidden  { display:none; }
    .s5-feedback.correct { background:rgba(20,80,30,0.2);border-left:4px solid #2ecc71;color:#a0e8a0; }
    .s5-feedback.wrong   { background:rgba(80,10,10,0.2);border-left:4px solid #e74c3c;color:#ff9090; }

    .s5-btn {
      display:inline-block;margin-top:14px;padding:11px 26px;border-radius:10px;
      background:linear-gradient(135deg,#2a1070,#3a20a0);
      color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s;
    }
    .s5-btn:hover { filter:brightness(1.2); }
    .s5-btn.hidden { display:none; }

    /* Debrief */
    .s5-debrief-grid {
      display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:12px 0;
    }
    .s5-debrief-card {
      background:rgba(8,8,30,0.9);border:1px solid #2a2a5a;
      border-radius:10px;padding:12px;text-align:center;
    }
    .s5-deb-icon  { font-size:22px;margin-bottom:4px; }
    .s5-deb-label { font-size:11px;color:#5060a0;margin-bottom:6px; }
    .s5-deb-value { font-size:20px;font-weight:800; }

    .s5-conclusion {
      background:rgba(8,8,30,0.85);border-left:4px solid #5040cc;
      padding:12px 16px;border-radius:6px;margin:12px 0;
    }
    .s5-conclusion h4 { color:#9080ff;margin:0 0 8px;font-size:14px; }
    .s5-conclusion p  { font-size:13px;color:#7080a0;line-height:1.7;margin:0 0 8px; }
    .s5-conclusion p:last-child { margin:0; }

    .s5-level-complete {
      margin-top:16px;text-align:center;padding:16px;border-radius:10px;
      background:rgba(40,20,100,0.2);border:1px solid #6040cc;
    }
    .s5-complete-icon { font-size:38px;margin-bottom:6px; }
    .s5-level-complete h3 { color:#a090ff;margin:0 0 8px;font-size:20px; }
    .s5-level-complete p  { font-size:13px;color:#6070a0;line-height:1.6;margin:0 0 10px; }
    .s5-final-score { font-size:18px;font-weight:700;color:#ffe040;margin-bottom:8px; }

    /* Concentration recap in debrief */
    .s5-conc-recap { margin:12px 0; }
    .s5-conc-recap-title {
      font-size:13px;font-weight:700;color:#60aaff;margin-bottom:6px;
    }
    .s5-info-box {
      background:rgba(0,40,80,0.2);border-left:4px solid #0070c0;
      padding:8px 14px;border-radius:6px;font-size:13px;color:#80b8e0;
      margin-bottom:10px;line-height:1.6;
    }
    .s5-conc-table {
      width:100%;border-collapse:collapse;font-size:12px;margin-top:6px;
    }
    .s5-conc-table th {
      background:rgba(0,40,80,0.4);color:#60aaff;
      padding:6px 8px;border:1px solid #1a3a5a;text-align:left;
    }
    .s5-conc-table td {
      padding:5px 8px;border:1px solid #0e2040;color:#90b8d0;
    }
    .s5-conc-table tr:nth-child(even) td { background:rgba(0,20,40,0.2); }

    /* Essay step */
    .s5-essay-question {
      white-space: pre-line;
    }
    .s5-essay-textarea {
      width:100%;box-sizing:border-box;margin-top:12px;
      background:rgba(5,10,25,0.9);border:1px solid #2a3a6a;
      border-radius:8px;color:#c8d8f8;font-size:13px;
      line-height:1.7;padding:12px 14px;resize:vertical;
      font-family:inherit;outline:none;transition:border-color 0.2s;
    }
    .s5-essay-textarea:focus { border-color:#6050cc; }
    .s5-essay-hint {
      font-size:11px;color:#404870;margin-top:6px;margin-bottom:2px;
    }

    /* Essay answer recap in debrief */
    .s5-essay-recap {
      margin:12px 0;background:rgba(5,10,30,0.85);
      border-left:4px solid #5040cc;border-radius:6px;padding:12px 16px;
    }
    .s5-essay-recap-title {
      font-size:13px;font-weight:700;color:#9080ff;margin-bottom:8px;
    }
    .s5-essay-recap-body {
      font-size:13px;color:#8090b8;line-height:1.8;white-space:pre-wrap;
    }
  `,document.head.appendChild(n)}const qs=document.getElementById("game-canvas"),Gn=new wo({canvas:qs,antialias:!0});Gn.setPixelRatio(Math.min(window.devicePixelRatio,2));Gn.setSize(window.innerWidth,window.innerHeight);Gn.shadowMap.enabled=!0;Gn.shadowMap.type=mo;Gn.toneMapping=Rc;Gn.toneMappingExposure=1.1;Gn.outputColorSpace=Nt;let ri=null;const{scene:Jt}=og();lg(Jt);const{scene:Ei}=gg();xg(Ei);const{scene:Un}=Tg();Ag(Un);const{scene:Nn}=zg();Fg(Nn);const{scene:On}=$g();Yg(On);ri=Jt;const dt=new Kt(60,window.innerWidth/window.innerHeight,.1,1e3);dt.position.set(0,18,38);dt.lookAt(0,0,0);const pt=new mx(Jt);let Oa=xd(Jt),Ra=null,Pa=null,Da=null,oi=Oa;function Oo(n,e){var t,i;n&&(n.glowMesh&&(e.remove(n.glowMesh),(t=n.glowMesh.geometry)==null||t.dispose()),n.glowMat&&n.glowMat.dispose(),n.doneSprite&&(e.remove(n.doneSprite),(i=n.doneSprite.material)==null||i.dispose()))}const Mc=22,Sc=26,Ec=24,Tc=22,Ac=21,kc=14,Kr=.08;let oa=!1,Ea=null,po=!1,Ia=0,fi=Math.PI,Lc=Math.PI,Jr=0,Ti=27,Ai=17;function Tv(n,e){Ti=n,Ai=e}function Av(n){if(!oa){Jr+=.0012,dt.position.x=Math.sin(Jr)*38,dt.position.z=Math.cos(Jr)*38,dt.position.y=18+Math.sin(n*.3)*1.5,dt.lookAt(0,2,0);return}const e=pt.position.x,t=pt.position.z;if(po&&Ea){Ia=Math.min(1,Ia+.04);const l=1-Math.pow(1-Ia,3),d=Ea.x,c=Ea.z,p=Ea.y??4,f=d+(e-d)*.35,h=c+(t-c)*.35,g=p+6,x=ee.currentLevel===2?Sc:ee.currentLevel===3?Ec:ee.currentLevel===4?Tc:ee.currentLevel===5?Ac:Mc,m=e+Math.sin(fi)*x,u=t+Math.cos(fi)*x,v=kc;dt.position.x=m+(f-m)*l,dt.position.y=v+(g-v)*l,dt.position.z=u+(h-u)*l,dt.fov=60-20*l,dt.updateProjectionMatrix(),dt.lookAt(d,p,c);return}Math.abs(dt.fov-60)>.5&&(dt.fov+=(60-dt.fov)*.1,dt.updateProjectionMatrix()),Lc=(pt.group?pt.group.rotation.y:fi)+Math.PI;let a=Lc-fi;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;fi+=a*.04;const s=ee.currentLevel===2?Sc:ee.currentLevel===3?Ec:ee.currentLevel===4?Tc:ee.currentLevel===5?Ac:Mc;let r=e+Math.sin(fi)*s,o=t+Math.cos(fi)*s;r=Math.max(-Ti,Math.min(Ti,r)),o=Math.max(-Ai,Math.min(Ai,o)),dt.position.x+=(r-dt.position.x)*Kr,dt.position.z+=(o-dt.position.z)*Kr,dt.position.y+=(kc-dt.position.y)*Kr,dt.lookAt(e,3,t)}function kv(){const n=new k(pt.position.x-dt.position.x,0,pt.position.z-dt.position.z).normalize(),e=new k().crossVectors(n,new k(0,1,0)).normalize();return{fwd:n,right:e}}const Lv=6.5;let Ft=null,ln=!1;function Cv(){if(ln)return;let n=null,e=1/0;for(const t of oi){if(t.done)continue;const i=pt.position.x-t.pos.x,a=pt.position.z-t.pos.z,s=Math.sqrt(i*i+a*a);s<Lv&&s<e&&(e=s,n=t)}if(n!==Ft){Ft=n;const t=ee.currentLevel===2?`Tekan <kbd>E</kbd> &nbsp;— 🏭 Stasiun ${n?n.idx+1:""}`:ee.currentLevel===3?"Tekan <kbd>E</kbd> &nbsp;— 🚰 Buka Kran Vinasse":ee.currentLevel===4?"Tekan <kbd>E</kbd> &nbsp;— 💻 IPAL Builder Terminal":ee.currentLevel===5?"Tekan <kbd>E</kbd> &nbsp;— 🔬 Analisis Mikroskop":`Tekan <kbd>E</kbd> &nbsp;— ❓ Fenomena ${n?n.idx+1:""}`;Io(n?t:null)}}window.addEventListener("keydown",n=>{n.code==="KeyE"&&Ft&&!ln&&oa&&Rd(Ft)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("btn-interact-mobile");n&&n.addEventListener("touchstart",e=>{e.preventDefault(),Ft&&!ln&&oa&&Rd(Ft)},{passive:!1})});function Rd(n){ln=!0,Io(null),Ea=n.pos?{x:n.pos.x,y:3,z:n.pos.z}:{x:0,y:3,z:0},po=!0,Ia=0;function e(){po=!1,Ia=0}if(ee.currentLevel===3&&n.isValve){iv(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),ln=!1,Ft=null,ee.stage3.valveOpened=!0,setTimeout(()=>Sa(()=>Ta(3)),600)});return}if(ee.currentLevel===4&&n.isTerminal){Cd(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),ln=!1,Ft=null,ee.stage4.terminalDone=!0,setTimeout(()=>Sa(()=>Ta(4)),600)});return}if(ee.currentLevel===5&&n.isScope){yv(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),ln=!1,Ft=null,ee.stage5.scopeDone=!0,setTimeout(()=>Sa(()=>Ta(5)),600)});return}Nx(n.idx,()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.emissive.set(3066993),n.glowMat.emissiveIntensity=.2,e(),ln=!1,Ft=null,oi.every(i=>i.done)&&ee.currentLevel===1&&setTimeout(()=>Sa(()=>Ta(1)),600)},()=>{e(),ln=!1,Ft=null})}function Ta(n){if(ee.completedRooms.includes(n)||ee.completedRooms.push(n),Sx(n),Mx({playerName:ee.playerName,currentLevel:n,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedRooms:ee.completedRooms}),ee.completedRooms.length>=5){Bx();return}ho()}function ho(){ln=!0,Ft=null,Io(null),Fx(n=>{ln=!1,Pd(n)})}function Pd(n){ee.currentLevel=n,ee.pointsAtLevelStart=ee.totalPoints,n===1?Rv():n===2?Pv():n===3?Dv():n===4?Iv():n===5&&Uv()}function Rv(){[Jt,Ei,Un,Nn,On].forEach(n=>{try{pt.removeFromScene(n)}catch{}}),pt.addToScene(Jt),pt.position.set(0,0,12),ri=Jt,Oa=xd(Jt),oi=Oa,Tv(27,17),Ft=null,Wt()}function Pv(){ri=Ei,rx(),Ti=30,Ai=20,[Jt,Un,Nn,On].forEach(n=>{try{pt.removeFromScene(n)}catch{}}),pt.addToScene(Ei),pt.position.set(0,0,18),oi=[],Ft=null,Wt(),setTimeout(()=>Yx(()=>{setTimeout(()=>Sa(()=>Ta(2)),600)}),400)}function Dv(){ri=Un,ox(),Ti=26,Ai=21,[Jt,Ei,Nn,On].forEach(n=>{try{pt.removeFromScene(n)}catch{}}),pt.addToScene(Un),pt.position.set(0,0,16),Oo(Ra,Un),Ra=Ng(Un),oi=[Ra],Ft=null,Wt()}function Iv(){ri=Nn,dx(),Ti=24,Ai=18,[Jt,Ei,Un,On].forEach(n=>{try{pt.removeFromScene(n)}catch{}}),pt.addToScene(Nn),pt.position.set(0,0,14),Oo(Pa,Nn),Pa=Xg(Nn),oi=[Pa],Ft=null,Wt()}function Uv(){ri=On,ux(),Ti=22,Ai=16,[Jt,Ei,Un,Nn].forEach(n=>{try{pt.removeFromScene(n)}catch{}}),pt.addToScene(On),pt.position.set(0,0,12),Oo(Da,On),Da=ex(On),oi=[Da],Ft=null,Wt()}window.addEventListener("resize",()=>{Gn.setSize(window.innerWidth,window.innerHeight),dt.aspect=window.innerWidth/window.innerHeight,dt.updateProjectionMatrix()});qs.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1});qs.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1});qs.addEventListener("touchend",n=>n.preventDefault(),{passive:!1});Xx();function Dd(){oa=!0,document.getElementById("hud").style.display="block",Ix(),Wt(),Ux(()=>{const n=Co();n&&(ee.completedRooms=n.completedRooms||[],ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],Wt()),ho()},()=>{location.reload()},Pd),pt.addToScene(Jt),pt.position.set(0,0,12),ri=Jt,oi=Oa,ho()}function Nv(n){ee.playerName=n.playerName,ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],ee.completedRooms=n.completedRooms||[],ee.pointsAtLevelStart=n.totalPoints,pt.setName(ee.playerName),Dd()}Lx(n=>{pt.setName(n),Cx(()=>{Px(()=>{Dx(()=>{Ad(()=>{Dd()})})})})},n=>{Nv(n)});const Ov=new gd;function Id(){requestAnimationFrame(Id);const n=Ov.getElapsedTime();Av(n),pt.update(n,ln||!oa,kv()),oa&&Cv(),ee.currentLevel===1?mg(Oa,n):ee.currentLevel===3&&Ra?Og(Ra,n):ee.currentLevel===4&&Pa?qg(Pa,n):ee.currentLevel===5&&Da&&tx(Da,n),Gn.render(ri,dt)}Id();
