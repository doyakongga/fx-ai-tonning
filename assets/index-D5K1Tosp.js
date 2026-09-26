(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},ws=[],ri=()=>{},bf=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yo=n=>n.startsWith("onUpdate:"),Bt=Object.assign,Hc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lp=Object.prototype.hasOwnProperty,xt=(n,e)=>Lp.call(n,e),Xe=Array.isArray,ss=n=>jr(n)==="[object Map]",Ni=n=>jr(n)==="[object Set]",Iu=n=>jr(n)==="[object Date]",it=n=>typeof n=="function",Pt=n=>typeof n=="string",oi=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Ef=n=>(St(n)||it(n))&&it(n.then)&&it(n.catch),Tf=Object.prototype.toString,jr=n=>Tf.call(n),Dp=n=>jr(n).slice(8,-1),wf=n=>jr(n)==="[object Object]",Vc=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ip=/-\w/g,Cn=So(n=>n.replace(Ip,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,Hi=So(n=>n.replace(Np,"-$1").toLowerCase()),Af=So(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ho=So(n=>n?`on${Af(n)}`:""),Gt=(n,e)=>!Object.is(n,e),Va=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Mo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Up=n=>{const e=Pt(n)?Number(n):NaN;return isNaN(e)?n:e};let Nu;const bo=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function On(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Pt(i)?kp(i):On(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(n)||St(n))return n}const Fp=/;(?![^(]*\))/g,Op=/:([^]+)/,Bp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function kp(n){const e={};return n.replace(Bp,t=>t.startsWith("/*")?"":t).split(Fp).forEach(t=>{if(t){const i=t.split(Op);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ke(n){let e="";if(Pt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=Ke(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=kc(Hp);function Rf(n){return!!n||n===""}function zp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Gn(n[s],e[s],t);return i}function Uu(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&Gn(r,i[o],t)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function Gp(n,e,t){let i=ss(n),s=ss(e);if(i||s||(i=Ni(n),s=Ni(e),i||s))return i&&s?Uu(n,e,t):!1;const r=Object.keys(n).length,a=Object.keys(e).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Gn(n[o],e[o],t))return!1}return String(n)===String(e)}function Fu(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const a=i(n,e,t);return s.delete(n),r.delete(e),a}function Gn(n,e,t){if(n===e)return!0;let i=Iu(n),s=Iu(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=oi(n),s=oi(e),i||s?n===e:(i=Xe(n),s=Xe(e),i||s?i&&s?Fu(n,e,t,zp):!1:(i=St(n),s=St(e),i||s?!i||!s?!1:Fu(n,e,t,Gp):String(n)===String(e))))}function zc(n,e){return n.findIndex(t=>Gn(t,e))}const Pf=n=>!!(n&&n.__v_isRef===!0),xe=n=>Pt(n)?n:n==null?"":Xe(n)||St(n)&&(n.toString===Tf||!it(n.toString))?Pf(n)?xe(n.value):JSON.stringify(n,Lf,2):String(n),Lf=(n,e)=>Pf(e)?Lf(n,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Vo(i,r)+" =>"]=s,t),{})}:Ni(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Vo(t))}:oi(e)?Vo(e):St(e)&&!Xe(e)&&!wf(e)?String(e):e,Vo=(n,e="")=>{var t;return oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class Wp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=zt;try{return zt=this,e()}finally{zt=t}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let e=zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $p(){return zt}let Ct;const zo=new WeakSet;class Df{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zo.has(this)&&(zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),Uf(this);const e=Ct,t=Hn;Ct=this,Hn=!0;try{return this.fn()}finally{Ff(this),Ct=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$c(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let If=0,Ir,Nr;function Nf(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Ir,Ir=n}function Gc(){If++}function Wc(){if(--If>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ir;){let e=Ir;for(Ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),$c(i),Xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Fl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Of(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr)||(n.globalVersion=kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fl(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=Hn;Ct=n,Hn=!0;try{Uf(n);const s=n.fn(n._value);(e.version===0||Gt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=t,Hn=i,Ff(n),n.flags&=-3}}function $c(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)$c(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const Bf=[];function Ui(){Bf.push(Hn),Hn=!1}function Fi(){const n=Bf.pop();Hn=n===void 0?!0:n}function Ou(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let kr=0;class qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!Hn||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new qp(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,kf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,kr++,this.notify(e)}notify(e){Gc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wc()}}}function kf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ol=new WeakMap,Rs=Symbol(""),Bl=Symbol(""),Hr=Symbol("");function Jt(n,e,t){if(Hn&&Ct){let i=Ol.get(n);i||Ol.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Eo),s.map=i,s.key=t),s.track()}}function Ei(n,e,t,i,s,r){const a=Ol.get(n);if(!a){kr++;return}const o=l=>{l&&l.trigger()};if(Gc(),e==="clear")a.forEach(o);else{const l=Xe(n),c=l&&Vc(t);if(l&&t==="length"){const d=Number(i);a.forEach((h,f)=>{(f==="length"||f===Hr||!oi(f)&&f>=d)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Hr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Rs)),ss(n)&&o(a.get(Bl)));break;case"delete":l||(o(a.get(Rs)),ss(n)&&o(a.get(Bl)));break;case"set":ss(n)&&o(a.get(Rs));break}}Wc()}function Bs(n){const e=mt(n);return e===n||(Jt(e,"iterate",Hr),Rn(n))?e:li(n)?rs(n)?e.map(t=>as(Pn(t))):e.map(as):e.map(Pn)}function To(n){return Jt(n=mt(n),"iterate",Hr),n}function jn(n,e){return li(n)?as(rs(n)?Pn(e):e):Pn(e)}const Yp={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Bs(this).concat(...n.map(e=>Xe(e)?Bs(e):e))},entries(){return Go(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wo(this,"includes",n)},indexOf(...n){return Wo(this,"indexOf",n)},join(n){return Bs(this).join(n)},lastIndexOf(...n){return Wo(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...n){return pr(this,"push",n)},reduce(n,...e){return Bu(this,"reduce",n,e)},reduceRight(n,...e){return Bu(this,"reduceRight",n,e)},shift(){return pr(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return pr(this,"splice",n)},toReversed(){return Bs(this).toReversed()},toSorted(n){return Bs(this).toSorted(n)},toSpliced(...n){return Bs(this).toSpliced(...n)},unshift(...n){return pr(this,"unshift",n)},values(){return Go(this,"values",n=>jn(this,n))}};function Go(n,e,t){const i=To(n),s=i[e]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Kp=Array.prototype;function pi(n,e,t,i,s,r){const a=To(n),o=a!==n&&!Rn(n),l=a[e];if(l!==Kp[e]){const h=l.apply(n,r);return o?Pn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,jn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const d=l.call(a,c,i);return o&&s?s(d):d}function Bu(n,e,t,i){const s=To(n),r=s!==n&&!Rn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,d,h){return o&&(o=!1,c=jn(n,c)),t.call(this,c,jn(n,d),h,n)}):t.length>3&&(a=function(c,d,h){return t.call(this,c,d,h,n)}));const l=s[e](a,...i);return o?jn(n,l):l}function Wo(n,e,t){const i=mt(n);Jt(i,"iterate",Hr);const s=i[e](...t);return(s===-1||s===!1)&&Kc(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function pr(n,e,t=[]){Ui(),Gc();const i=mt(n)[e].apply(n,t);return Wc(),Fi(),i}const Jp=kc("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(oi));function Zp(n){oi(n)||(n=String(n));const e=mt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?om:$f:r?Wf:Gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Xe(e);if(!s){let l;if(a&&(l=Yp[t]))return l;if(t==="hasOwnProperty")return Zp}const o=Reflect.get(e,t,Zt(e)?e:i);if((oi(t)?Hf.has(t):Jp(t))||(s||Jt(e,"get",t),r))return o;if(Zt(o)){const l=a&&Vc(t)?o:o.value;return s&&St(l)?Hl(l):l}return St(o)?s?Hl(o):qc(o):o}}class zf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Xe(e)&&Vc(t);if(!this._isShallow){const c=li(r);if(!Rn(i)&&!li(i)&&(r=mt(r),i=mt(i)),!a&&Zt(r)&&!Zt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:xt(e,t),l=Reflect.set(e,t,i,Zt(e)?e:s);return e===mt(s)&&l&&(o?Gt(i,r)&&Ei(e,"set",t,i):Ei(e,"add",t,i)),l}deleteProperty(e,t){const i=xt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ei(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!oi(t)||!Hf.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",Xe(e)?"length":Rs),Reflect.ownKeys(e)}}class Qp extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jp=new zf,em=new Qp,tm=new zf(!0);const kl=n=>n,ca=n=>Reflect.getPrototypeOf(n);function nm(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),a=ss(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),d=t?kl:e?as:Pn;return!e&&Jt(r,"iterate",l?Bl:Rs),Bt(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[d(h[0]),d(h[1])]:d(h),done:f}}})}}function ua(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function im(n,e){const t={get(s){const r=this.__v_raw,a=mt(r),o=mt(s);n||(Gt(s,o)&&Jt(a,"get",s),Jt(a,"get",o));const{has:l}=ca(a),c=e?kl:n?as:Pn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Jt(mt(s),"iterate",Rs),s.size},has(s){const r=this.__v_raw,a=mt(r),o=mt(s);return n||(Gt(s,o)&&Jt(a,"has",s),Jt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=mt(o),c=e?kl:n?as:Pn;return!n&&Jt(l,"iterate",Rs),o.forEach((d,h)=>s.call(r,c(d),c(h),a))}};return Bt(t,n?{add:ua("add"),set:ua("set"),delete:ua("delete"),clear:ua("clear")}:{add(s){const r=mt(this),a=ca(r),o=mt(s),l=!e&&!Rn(s)&&!li(s)?o:s;return a.has.call(r,l)||Gt(s,l)&&a.has.call(r,s)||Gt(o,l)&&a.has.call(r,o)||(r.add(l),Ei(r,"add",l,l)),this},set(s,r){!e&&!Rn(r)&&!li(r)&&(r=mt(r));const a=mt(this),{has:o,get:l}=ca(a);let c=o.call(a,s);c||(s=mt(s),c=o.call(a,s));const d=l.call(a,s);return a.set(s,r),c?Gt(r,d)&&Ei(a,"set",s,r):Ei(a,"add",s,r),this},delete(s){const r=mt(this),{has:a,get:o}=ca(r);let l=a.call(r,s);l||(s=mt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Ei(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,a=s.clear();return r&&Ei(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nm(s,n,e)}),t}function Xc(n,e){const t=im(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(xt(t,s)&&s in i?t:i,s,r)}const sm={get:Xc(!1,!1)},rm={get:Xc(!1,!0)},am={get:Xc(!0,!1)};const Gf=new WeakMap,Wf=new WeakMap,$f=new WeakMap,om=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(n){return li(n)?n:Yc(n,!1,jp,sm,Gf)}function cm(n){return Yc(n,!1,tm,rm,Wf)}function Hl(n){return Yc(n,!0,em,am,$f)}function Yc(n,e,t,i,s){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=lm(Dp(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function rs(n){return li(n)?rs(n.__v_raw):!!(n&&n.__v_isReactive)}function li(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function Kc(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function um(n){return!xt(n,"__v_skip")&&Object.isExtensible(n)&&Cf(n,"__v_skip",!0),n}const Pn=n=>St(n)?qc(n):n,as=n=>St(n)?Hl(n):n;function Zt(n){return n?n.__v_isRef===!0:!1}function Be(n){return dm(n,!1)}function dm(n,e){return Zt(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new Eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:Pn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Rn(e)||li(e);e=i?e:mt(e),Gt(e,t)&&(this._rawValue=e,this._value=i?e:Pn(e),this.dep.trigger())}}function Je(n){return Zt(n)?n.value:n}const hm={get:(n,e,t)=>e==="__v_raw"?n:Je(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Zt(s)&&!Zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xf(n){return rs(n)?n:new Proxy(n,hm)}class pm{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Eo,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function mm(n){return new pm(n)}class gm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vm(n,e,t=!1){let i,s;return it(n)?i=n:(i=n.get,s=n.set),new gm(i,s,t)}const da={},Qa=new WeakMap;let Ss;function _m(n,e=!1,t=Ss){if(t){let i=Qa.get(t);i||Qa.set(t,i=[]),i.push(n)}}function xm(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=S=>s?S:Rn(S)||s===!1||s===0?Ti(S,1):Ti(S);let d,h,f,p,x=!1,b=!1;if(Zt(n)?(h=()=>n.value,x=Rn(n)):rs(n)?(h=()=>c(n),x=!0):Xe(n)?(b=!0,x=n.some(S=>rs(S)||Rn(S)),h=()=>n.map(S=>{if(Zt(S))return S.value;if(rs(S))return c(S);if(it(S))return l?l(S,2):S()})):it(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Ui();try{f()}finally{Fi()}}const S=Ss;Ss=d;try{return l?l(n,3,[p]):n(p)}finally{Ss=S}}:h=ri,e&&s){const S=h,A=s===!0?1/0:s;h=()=>Ti(S(),A)}const v=$p(),m=()=>{d.stop(),v&&v.active&&Hc(v.effects,d)};if(r&&e){const S=e;e=(...A)=>{const E=S(...A);return m(),E}}let T=b?new Array(n.length).fill(da):da;const P=S=>{if(!(!(d.flags&1)||!d.dirty&&!S))if(e){const A=d.run();if(S||s||x||(b?A.some((E,L)=>Gt(E,T[L])):Gt(A,T))){f&&f();const E=Ss;Ss=d;try{const L=[A,T===da?void 0:b&&T[0]===da?[]:T,p];T=A,l?l(e,3,L):e(...L)}finally{Ss=E}}}else d.run()};return o&&o(P),d=new Df(h),d.scheduler=a?()=>a(P,!1):P,p=S=>_m(S,!1,d),f=d.onStop=()=>{const S=Qa.get(d);if(S){if(l)l(S,4);else for(const A of S)A();Qa.delete(d)}},e?i?P(!0):T=d.run():a?a(P.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Ti(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Zt(n))Ti(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)Ti(n[i],e,t);else if(Ni(n)||ss(n))n.forEach(i=>{Ti(i,e,t)});else if(wf(n)){for(const i in n)Ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ti(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ea(n,e,t,i){try{return i?n(...i):n()}catch(s){wo(s,e,t)}}function Ln(n,e,t,i){if(it(n)){const s=ea(n,e,t,i);return s&&Ef(s)&&s.catch(r=>{wo(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}function wo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||pt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const d=o.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](n,l,c)===!1)return}o=o.parent}if(r){Ui(),ea(r,null,10,[n,l,c]),Fi();return}}ym(n,t,s,i,a)}function ym(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const rn=[];let Qn=-1;const sr=[];let ns=null,tr=0;const qf=Promise.resolve();let ja=null;function ei(n){const e=ja||qf;return n?e.then(this?n.bind(this):n):e}function Sm(n){let e=Qn+1,t=rn.length;for(;e<t;){const i=e+t>>>1,s=rn[i],r=Vr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Jc(n){if(!(n.flags&1)){const e=Vr(n),t=rn[rn.length-1];!t||!(n.flags&2)&&e>=Vr(t)?rn.push(n):rn.splice(Sm(e),0,n),n.flags|=1,Yf()}}function Yf(){ja||(ja=qf.then(Jf))}function Mm(n){if(!Xe(n))ns&&n.id===-1?ns.splice(tr+1,0,n):n.flags&1||(sr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)sr.push(n[e]);Yf()}function ku(n,e,t=Qn+1){for(;t<rn.length;t++){const i=rn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;rn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kf(n){if(sr.length){const e=[...new Set(sr)].sort((t,i)=>Vr(t)-Vr(i));if(sr.length=0,ns){for(let t=0;t<e.length;t++)ns.push(e[t]);return}for(ns=e,tr=0;tr<ns.length;tr++){const t=ns[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ns=null,tr=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jf(n){try{for(Qn=0;Qn<rn.length;Qn++){const e=rn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ea(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<rn.length;Qn++){const e=rn[Qn];e&&(e.flags&=-2)}Qn=-1,rn.length=0,Kf(),ja=null,(rn.length||sr.length)&&Jf()}}let Tn=null,Zf=null;function eo(n){const e=Tn;return Tn=n,Zf=n&&n.type.__scopeId||null,e}function Oi(n,e=Tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ro(-1);const r=eo(e),a=Ps.length;let o;try{o=n(...s)}finally{for(let l=Ps.length;l>a;l--)Th();eo(r),i._d&&ro(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ti(n,e){if(Tn===null)return n;const t=Do(Tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=pt]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&Ti(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function fs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Ui(),Ln(l,t,8,[n.el,o,n,e]),Fi())}}function bm(n,e){if(on){let t=on.provides;const i=on.parent&&on.parent.provides;i===t&&(t=on.provides=Object.create(i)),t[n]=e}}function za(n,e,t=!1){const i=tu();if(i||rr){let s=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const Em=Symbol.for("v-scx"),Tm=()=>za(Em);function wm(n,e){return Zc(n,null,{flush:"sync"})}function wn(n,e,t){return Zc(n,e,t)}function Zc(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Bt({},t),l=e&&i||!e&&r!=="post";let c;if($r){if(r==="sync"){const p=Tm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const d=on;o.call=(p,x,b)=>Ln(p,d,x,b);let h=!1;r==="post"?o.scheduler=p=>{nn(p,d&&d.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(p,x)=>{x?p():Jc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=xm(n,e,o);return $r&&(c?c.push(f):l&&f()),f}function Am(n,e,t){const i=this.proxy,s=Pt(n)?n.includes(".")?Qf(i,n):()=>i[n]:n.bind(i,i);let r;it(e)?r=e:(r=e.handler,t=e);const a=na(this),o=Zc(s,r.bind(i),t);return a(),o}function Qf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const ts=new WeakMap,jf=Symbol("_vte"),Ao=n=>n.__isTeleport,Ms=n=>n&&(n.disabled||n.disabled===""),Cm=n=>n&&(n.defer||n.defer===""),Hu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Vu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Vl=(n,e)=>{const t=n&&n.to;return Pt(t)?e?e(t):null:t},Rm={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,a,o,l,c){const{mc:d,pc:h,pbc:f,o:{insert:p,querySelector:x,createText:b,createComment:v,parentNode:m}}=c,T=Ms(e.props);let{dynamicChildren:P}=e;const S=(L,y,C)=>{L.shapeFlag&16&&d(L.children,y,C,s,r,a,o,l)},A=(L=e)=>{const y=Ms(L.props),C=L.target=Vl(L.props,x),N=zl(C,L,b,p);C&&(a!=="svg"&&Hu(C)?a="svg":a!=="mathml"&&Vu(C)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(C),y||(S(L,C,N),Ar(L,!1)))},E=L=>{const y=()=>{if(ts.get(L)===y){if(ts.delete(L),Ms(L.props)){const C=m(L.el)||t;S(L,C,L.anchor),Ar(L,!0)}A(L)}};ts.set(L,y),nn(y,r)};if(n==null){const L=e.el=b(""),y=e.anchor=b("");if(p(L,t,i),p(y,t,i),Cm(e.props)||r&&r.pendingBranch){E(e);return}T&&(S(e,t,y),Ar(e,!0)),A()}else{e.el=n.el;const L=e.anchor=n.anchor,y=ts.get(n);if(y){y.flags|=8,ts.delete(n),E(e);return}e.targetStart=n.targetStart;const C=e.target=n.target,N=e.targetAnchor=n.targetAnchor,O=Ms(n.props),I=O?t:C,U=O?L:N;if(a==="svg"||Hu(C)?a="svg":(a==="mathml"||Vu(C))&&(a="mathml"),P?(f(n.dynamicChildren,P,I,s,r,a,o),eu(n,e,!0)):l||h(n,e,I,U,s,r,a,o,!1),T)O?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):fa(e,t,L,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const k=Vl(e.props,x);k&&(e.target=k,fa(e,k,null,c,0))}else O&&fa(e,C,N,c,1);Ar(e,T)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:d,target:h,props:f}=n,p=Ms(f),x=r||!p,b=ts.get(n);if(b&&(b.flags|=8,ts.delete(n)),h&&(s(c),s(d)),r&&s(l),!b&&(p||h)&&a&16)for(let v=0;v<o.length;v++){const m=o[v];i(m,e,t,x,!!m.dynamicChildren)}},move:fa,hydrate:Pm};function fa(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:d}=n,h=r===2;if(h&&i(a,e,t),!ts.has(n)&&(!h||Ms(d))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,t,2);h&&i(o,e,t)}function Pm(n,e,t,i,s,r,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:d}},h){function f(v,m){let T=m;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")e.targetStart=T;else if(T.data==="teleport anchor"){e.targetAnchor=T,v._lpa=e.targetAnchor&&a(e.targetAnchor);break}}T=a(T)}}function p(v,m){m.anchor=h(a(v),m,o(v),t,i,s,r)}const x=e.target=Vl(e.props,l),b=Ms(e.props);if(x){const v=x._lpa||x.firstChild;e.shapeFlag&16&&(b?(p(n,e),f(x,v),e.targetAnchor||zl(x,e,d,c,o(n)===x?n:null)):(e.anchor=a(n),f(x,v),e.targetAnchor||zl(x,e,d,c),h(v&&a(v),e,x,t,i,s,r))),Ar(e,b)}else b&&e.shapeFlag&16&&(p(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const ta=Rm;function Ar(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function zl(n,e,t,i,s=null){const r=e.targetStart=t(""),a=e.targetAnchor=t("");return r[jf]=a,n&&(i(r,n,s),i(a,n,s)),a}const Mn=Symbol("_leaveCb"),mr=Symbol("_enterCb");function Lm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zi(()=>{n.isMounted=!0}),oh(()=>{n.isUnmounting=!0}),n}const xn=[Function,Array],eh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},th=n=>{const e=n.subTree;return e.component?th(e.component):e},Dm={name:"BaseTransition",props:eh,setup(n,{slots:e}){const t=tu(),i=Lm();return()=>{const s=e.default&&sh(e.default(),!0),r=s&&s.length?nh(s):t.subTree?qe():void 0;if(!r)return;const a=mt(n),{mode:o}=a;if(i.isLeaving)return $o(r);const l=to(r);if(!l)return $o(r);let c=Gl(l,a,i,t,h=>c=h);l.type!==an&&zr(l,c);let d=t.subTree&&to(t.subTree);if(d&&d.type!==an&&!bs(d,l)&&th(t).type!==an){let h=Gl(d,a,i,t);if(zr(d,h),o==="out-in"&&l.type!==an)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,d=void 0},$o(r);o==="in-out"&&l.type!==an?h.delayLeave=(f,p,x)=>{const b=ih(i,d);b[String(d.key)]=d,f[Mn]=()=>{p(),f[Mn]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function nh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==an){e=t;break}}return e}const Im=Dm;function ih(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Gl(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:x,onLeaveCancelled:b,onBeforeAppear:v,onAppear:m,onAfterAppear:T,onAppearCancelled:P}=e,S=String(n.key),A=ih(t,n),E=(C,N)=>{C&&Ln(C,i,9,N)},L=(C,N)=>{const O=N[1];E(C,N),Xe(C)?C.every(I=>I.length<=1)&&O():C.length<=1&&O()},y={mode:a,persisted:o,beforeEnter(C){let N=l;if(!t.isMounted)if(r)N=v||l;else return;C[Mn]&&C[Mn](!0);const O=A[S];O&&bs(n,O)&&O.el[Mn]&&O.el[Mn](),E(N,[C])},enter(C){if(A[S]===n)return;let N=c,O=d,I=h;if(!t.isMounted)if(r)N=m||c,O=T||d,I=P||h;else return;let U=!1;C[mr]=V=>{U||(U=!0,V?E(I,[C]):E(O,[C]),y.delayedLeave&&y.delayedLeave(),C[mr]=void 0)};const k=C[mr].bind(null,!1);N?L(N,[C,k]):k()},leave(C,N){const O=String(n.key);if(C[mr]&&C[mr](!0),t.isUnmounting)return N();E(f,[C]);let I=!1;C[Mn]=k=>{I||(I=!0,N(),k?E(b,[C]):E(x,[C]),C[Mn]=void 0,A[O]===n&&delete A[O])};const U=C[Mn].bind(null,!1);A[O]=n,p?L(p,[C,U]):U()},clone(C){const N=Gl(C,e,t,i,s);return s&&s(N),N}};return y}function $o(n){if(Co(n))return n=os(n),n.children=null,n}function to(n){if(!Co(n))return Ao(n.type)&&n.children?nh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function zr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;zr(Ao(t.type)&&to(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function sh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===je?(a.patchFlag&128&&s++,i=i.concat(sh(a.children,e,o))):(e||a.type!==an)&&i.push(o!=null?os(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function rh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const no=new WeakMap;function Ur(n,e,t,i,s=!1){if(Xe(n)){n.forEach((b,v)=>Ur(b,e&&(Xe(e)?e[v]:e),t,i,s));return}if(Fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ur(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Do(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,d=o.refs===pt?o.refs={}:o.refs,h=o.setupState,f=mt(h),p=h===pt?bf:b=>zu(d,b)?!1:xt(f,b),x=(b,v)=>!(v&&zu(d,v));if(c!=null&&c!==l){if(Gu(e),Pt(c))d[c]=null,p(c)&&(h[c]=null);else if(Zt(c)){const b=e;x(c,b.k)&&(c.value=null),b.k&&(d[b.k]=null)}}if(it(l))ea(l,o,12,[a,d]);else{const b=Pt(l),v=Zt(l);if(b||v){const m=()=>{if(n.f){const T=b?p(l)?h[l]:d[l]:x()||!n.k?l.value:d[n.k];if(s)Xe(T)&&Hc(T,r);else if(Xe(T))T.includes(r)||T.push(r);else if(b)d[l]=[r],p(l)&&(h[l]=d[l]);else{const P=[r];x(l,n.k)&&(l.value=P),n.k&&(d[n.k]=P)}}else b?(d[l]=a,p(l)&&(h[l]=a)):v&&(x(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const T=()=>{m(),no.delete(n)};T.id=-1,no.set(n,T),nn(T,t)}else Gu(n),m()}}}function Gu(n){const e=no.get(n);e&&(e.flags|=8,no.delete(n))}bo().requestIdleCallback;bo().cancelIdleCallback;const Fr=n=>!!n.type.__asyncLoader,Co=n=>n.type.__isKeepAlive;function Nm(n,e){ah(n,"a",e)}function Um(n,e){ah(n,"da",e)}function ah(n,e,t=on){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ro(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Co(s.parent.vnode)&&Fm(i,e,t,s),s=s.parent}}function Fm(n,e,t,i){const s=Ro(e,n,i,!0);ci(()=>{Hc(i[e],s)},t)}function Ro(n,e,t=on,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Ui();const o=na(t),l=Ln(e,t,n,a);return o(),Fi(),l});return i?s.unshift(r):s.push(r),r}}const Vi=n=>(e,t=on)=>{(!$r||n==="sp")&&Ro(n,(...i)=>e(...i),t)},Om=Vi("bm"),zi=Vi("m"),Bm=Vi("bu"),km=Vi("u"),oh=Vi("bum"),ci=Vi("um"),Hm=Vi("sp"),Vm=Vi("rtg"),zm=Vi("rtc");function Gm(n,e=on){Ro("ec",n,e)}const Wm=Symbol.for("v-ndc");function yt(n,e,t,i){let s;const r=t,a=Xe(n);if(a||Pt(n)){const o=a&&rs(n);let l=!1,c=!1;o&&(l=!Rn(n),c=li(n),n=To(n)),s=new Array(n.length);for(let d=0,h=n.length;d<h;d++)s[d]=e(l?c?as(Pn(n[d])):Pn(n[d]):n[d],d,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(St(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const d=o[l];s[l]=e(n[d],d,l,r)}}else s=[];return s}const Wl=n=>n?Ch(n)?Do(n):Wl(n.parent):null,Or=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wl(n.parent),$root:n=>Wl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ch(n),$forceUpdate:n=>n.f||(n.f=()=>{Jc(n.update)}),$nextTick:n=>n.n||(n.n=ei.bind(n.proxy)),$watch:n=>Am.bind(n)}),Xo=(n,e)=>n!==pt&&!n.__isScriptSetup&&xt(n,e),$m={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Xo(i,e))return a[e]=1,i[e];if(s!==pt&&xt(s,e))return a[e]=2,s[e];if(xt(r,e))return a[e]=3,r[e];if(t!==pt&&xt(t,e))return a[e]=4,t[e];$l&&(a[e]=0)}}const c=Or[e];let d,h;if(c)return e==="$attrs"&&Jt(n.attrs,"get",""),c(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==pt&&xt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,xt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Xo(s,e)?(s[e]=t,!0):i!==pt&&xt(i,e)?(i[e]=t,!0):xt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==pt&&o[0]!=="$"&&xt(n,o)||Xo(e,o)||xt(r,o)||xt(i,o)||xt(Or,o)||xt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function io(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function Wu(n,e){return!n||!e?n||e:Xe(n)&&Xe(e)?n.concat(e):Bt({},io(n),io(e))}let $l=!0;function Xm(n){const e=ch(n),t=n.proxy,i=n.ctx;$l=!1,e.beforeCreate&&$u(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:d,beforeMount:h,mounted:f,beforeUpdate:p,updated:x,activated:b,deactivated:v,beforeDestroy:m,beforeUnmount:T,destroyed:P,unmounted:S,render:A,renderTracked:E,renderTriggered:L,errorCaptured:y,serverPrefetch:C,expose:N,inheritAttrs:O,components:I,directives:U,filters:k}=e;if(c&&qm(c,i,null),a)for(const W in a){const j=a[W];it(j)&&(i[W]=j.bind(t))}if(s){const W=s.call(t,t);St(W)&&(n.data=qc(W))}if($l=!0,r)for(const W in r){const j=r[W],te=it(j)?j.bind(t,t):it(j.get)?j.get.bind(t,t):ri,le=!it(j)&&it(j.set)?j.set.bind(t):ri,de=Lt({get:te,set:le});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>de.value,set:Re=>de.value=Re})}if(o)for(const W in o)lh(o[W],i,t,W);if(l){const W=it(l)?l.call(t):l;Reflect.ownKeys(W).forEach(j=>{bm(j,W[j])})}d&&$u(d,n,"c");function X(W,j){Xe(j)?j.forEach(te=>W(te.bind(t))):j&&W(j.bind(t))}if(X(Om,h),X(zi,f),X(Bm,p),X(km,x),X(Nm,b),X(Um,v),X(Gm,y),X(zm,E),X(Vm,L),X(oh,T),X(ci,S),X(Hm,C),Xe(N))if(N.length){const W=n.exposed||(n.exposed={});N.forEach(j=>{Object.defineProperty(W,j,{get:()=>t[j],set:te=>t[j]=te,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===ri&&(n.render=A),O!=null&&(n.inheritAttrs=O),I&&(n.components=I),U&&(n.directives=U),C&&rh(n)}function qm(n,e,t=ri){Xe(n)&&(n=Xl(n));for(const i in n){const s=n[i];let r;St(s)?"default"in s?r=za(s.from||i,s.default,!0):r=za(s.from||i):r=za(s),Zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function $u(n,e,t){Ln(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function lh(n,e,t,i){let s=i.includes(".")?Qf(t,i):()=>t[i];if(Pt(n)){const r=e[n];it(r)&&wn(s,r)}else if(it(n))wn(s,n.bind(t));else if(St(n))if(Xe(n))n.forEach(r=>lh(r,e,t,i));else{const r=it(n.handler)?n.handler.bind(t):e[n.handler];it(r)&&wn(s,r,n)}}function ch(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>so(l,c,a,!0)),so(l,e,a)),St(e)&&r.set(e,l),l}function so(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&so(n,r,t,!0),s&&s.forEach(a=>so(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ym[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Ym={data:Xu,props:qu,emits:qu,methods:Cr,computed:Cr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Cr,directives:Cr,watch:Jm,provide:Xu,inject:Km};function Xu(n,e){return e?n?function(){return Bt(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function Km(n,e){return Cr(Xl(n),Xl(e))}function Xl(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function en(n,e){return n?[...new Set([].concat(n,e))]:e}function Cr(n,e){return n?Bt(Object.create(null),n,e):e}function qu(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Bt(Object.create(null),io(n),io(e??{})):e}function Jm(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=en(n[i],e[i]);return t}function uh(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function Qm(n,e){return function(i,s=null){it(i)||(i=Bt({},i)),s!=null&&!St(s)&&(s=null);const r=uh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Zm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:R0,get config(){return r.config},set config(d){},use(d,...h){return a.has(d)||(d&&it(d.install)?(a.add(d),d.install(c,...h)):it(d)&&(a.add(d),d(c,...h))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,h){return h?(r.components[d]=h,c):r.components[d]},directive(d,h){return h?(r.directives[d]=h,c):r.directives[d]},mount(d,h,f){if(!l){const p=c._ceVNode||dt(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,d,f),l=!0,c._container=d,d.__vue_app__=c,Do(p.component)}},onUnmount(d){o.push(d)},unmount(){l&&(Ln(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,h){return r.provides[d]=h,c},runWithContext(d){const h=rr;rr=c;try{return d()}finally{rr=h}}};return c}}let rr=null;function jm(n,e,t=pt){const i=tu(),s=Cn(e),r=Hi(e),a=dh(n,s),o=mm((l,c)=>{let d,h=pt,f;return wm(()=>{const p=n[s];Gt(d,p)&&(d=p,c())}),{get(){return l(),t.get?t.get(d):d},set(p){const x=t.set?t.set(p):p;if(!Gt(x,d)&&!(h!==pt&&Gt(p,h)))return;const b=i.vnode.props,v=!!(b&&(e in b||s in b||r in b)&&(`onUpdate:${e}`in b||`onUpdate:${s}`in b||`onUpdate:${r}`in b));v||(d=p,c()),i.emit(`update:${e}`,x),Gt(p,h)&&(Gt(p,x)&&!Gt(x,f)||v&&h!==pt&&!Gt(x,d))&&c(),h=p,f=x}}});return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?a||pt:o,done:!1}:{done:!0}}}},o}const dh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Cn(e)}Modifiers`]||n[`${Hi(e)}Modifiers`];function e0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),a=r&&dh(i,e.slice(7));a&&(a.trim&&(s=t.map(d=>Pt(d)?d.trim():d)),a.number&&(s=s.map(Mo)));let o,l=i[o=Ho(e)]||i[o=Ho(Cn(e))];!l&&r&&(l=i[o=Ho(Hi(e))]),l&&Ln(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ln(c,n,6,s)}}const t0=new WeakMap;function fh(n,e,t=!1){const i=t?t0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!it(n)){const l=c=>{const d=fh(c,e,!0);d&&(o=!0,Bt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(St(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>a[l]=null):Bt(a,r),St(n)&&i.set(n,a),a)}function Po(n,e){return!n||!xo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),xt(n,e[0].toLowerCase()+e.slice(1))||xt(n,Hi(e))||xt(n,e))}function Yu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:d,props:h,data:f,setupState:p,ctx:x,inheritAttrs:b}=n,v=eo(n);let m,T;try{if(t.shapeFlag&4){const S=s||i,A=S;m=ni(c.call(A,S,d,h,p,f,x)),T=o}else{const S=e;m=ni(S.length>1?S(h,{attrs:o,slots:a,emit:l}):S(h,null)),T=e.props?o:n0(o)}}catch(S){Ps.length=0,wo(S,n,1),m=dt(an)}let P=m;if(T&&b!==!1){const S=Object.keys(T),{shapeFlag:A}=P;S.length&&A&7&&(r&&S.some(yo)&&(T=i0(T,r)),P=os(P,T,!1,!0))}if(t.dirs&&(P=os(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const S=Ao(P.type)&&to(P)||P;zr(S,t.transition)}return m=P,eo(v),m}const n0=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},i0=(n,e)=>{const t={};for(const i in n)(!yo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function s0(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ku(i,a,c):!!a;if(l&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const f=d[h];if(hh(a,i,f)&&!Po(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ku(i,a,c):!0:!!a;return!1}function Ku(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(hh(e,n,r)&&!Po(t,r))return!0}return!1}function hh(n,e,t){const i=n[t],s=e[t];return t==="style"&&St(i)&&St(s)?!Gn(i,s):i!==s}function r0({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ph={},mh=()=>Object.create(ph),gh=n=>Object.getPrototypeOf(n)===ph;function a0(n,e,t,i=!1){const s={},r=mh();n.propsDefaults=Object.create(null),vh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function o0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=mt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let h=0;h<d.length;h++){let f=d[h];if(Po(n.emitsOptions,f))continue;const p=e[f];if(l)if(xt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const x=Cn(f);s[x]=ql(l,o,x,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{vh(n,e,s,r)&&(c=!0);let d;for(const h in o)(!e||!xt(e,h)&&((d=Hi(h))===h||!xt(e,d)))&&(l?t&&(t[h]!==void 0||t[d]!==void 0)&&(s[h]=ql(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!xt(e,h))&&(delete r[h],c=!0)}c&&Ei(n.attrs,"set","")}function vh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Dr(l))continue;const c=e[l];let d;s&&xt(s,d=Cn(l))?!r||!r.includes(d)?t[d]=c:(o||(o={}))[d]=c:Po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=mt(t),c=o||pt;for(let d=0;d<r.length;d++){const h=r[d];t[h]=ql(s,l,h,c[h],n,!xt(c,h))}}return a}function ql(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=xt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&it(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const d=na(s);i=c[t]=l.call(null,e),d()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Hi(t))&&(i=!0))}return i}const l0=new WeakMap;function _h(n,e,t=!1){const i=t?l0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!it(n)){const d=h=>{l=!0;const[f,p]=_h(h,e,!0);Bt(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!l)return St(n)&&i.set(n,ws),ws;if(Xe(r))for(let d=0;d<r.length;d++){const h=Cn(r[d]);Ju(h)&&(a[h]=pt)}else if(r)for(const d in r){const h=Cn(d);if(Ju(h)){const f=r[d],p=a[h]=Xe(f)||it(f)?{type:f}:Bt({},f),x=p.type;let b=!1,v=!0;if(Xe(x))for(let m=0;m<x.length;++m){const T=x[m],P=it(T)&&T.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(v=!1)}else b=it(x)&&x.name==="Boolean";p[0]=b,p[1]=v,(b||xt(p,"default"))&&o.push(h)}}const c=[a,o];return St(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"&&!Dr(n)}const Qc=n=>n==="_"||n==="_ctx"||n==="$stable",jc=n=>Xe(n)?n.map(ni):[ni(n)],c0=(n,e,t)=>{if(e._n)return e;const i=Oi((...s)=>jc(e(...s)),t);return i._c=!1,i},xh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Qc(s))continue;const r=n[s];if(it(r))e[s]=c0(s,r,i);else if(r!=null){const a=jc(r);e[s]=()=>a}}},yh=(n,e)=>{const t=jc(e);n.slots.default=()=>t},Sh=(n,e,t)=>{for(const i in e)(t||!Qc(i))&&(n[i]=e[i])},u0=(n,e,t)=>{const i=n.slots=mh();if(n.vnode.shapeFlag&32){const s=e._;s?(Sh(i,e,t),t&&Cf(i,"_",s,!0)):xh(e,i)}else e&&yh(n,e)},d0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=pt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Sh(s,e,t):(r=!e.$stable,xh(e,s)),a=e}else e&&(yh(n,e),a={default:1});if(r)for(const o in s)!Qc(o)&&a[o]==null&&delete s[o]},nn=g0;function f0(n){return h0(n)}function h0(n,e){const t=bo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:d,parentNode:h,nextSibling:f,setScopeId:p=ri,insertStaticContent:x}=n,b=(R,H,$,ae=null,re=null,se=null,pe=void 0,me=null,ve=!!H.dynamicChildren)=>{if(R===H)return;R&&!bs(R,H)&&(ae=ie(R),Re(R,re,se,!0),R=null),H.patchFlag===-2&&(ve=!1,H.dynamicChildren=null),H.dynamicChildren&&R&&R.dynamicChildren&&R.dynamicChildren.hasOnce&&(H.dynamicChildren===ws&&(H.dynamicChildren=[]),H.dynamicChildren.hasOnce=!0);const{type:oe,ref:Ee,shapeFlag:D}=H;switch(oe){case Lo:v(R,H,$,ae);break;case an:m(R,H,$,ae);break;case Ga:R==null&&T(H,$,ae,pe);break;case je:I(R,H,$,ae,re,se,pe,me,ve);break;default:D&1?A(R,H,$,ae,re,se,pe,me,ve):D&6?U(R,H,$,ae,re,se,pe,me,ve):(D&64||D&128)&&oe.process(R,H,$,ae,re,se,pe,me,ve,ke)}Ee!=null&&re?Ur(Ee,R&&R.ref,se,H||R,!H):Ee==null&&R&&R.ref!=null&&Ur(R.ref,null,se,R,!0)},v=(R,H,$,ae)=>{if(R==null)i(H.el=o(H.children),$,ae);else{const re=H.el=R.el;H.children!==R.children&&c(re,H.children)}},m=(R,H,$,ae)=>{R==null?i(H.el=l(H.children||""),$,ae):H.el=R.el},T=(R,H,$,ae)=>{[R.el,R.anchor]=x(R.children,H,$,ae,R.el,R.anchor)},P=({el:R,anchor:H},$,ae)=>{let re;for(;R&&R!==H;)re=f(R),i(R,$,ae),R=re;i(H,$,ae)},S=({el:R,anchor:H})=>{let $;for(;R&&R!==H;)$=f(R),s(R),R=$;s(H)},A=(R,H,$,ae,re,se,pe,me,ve)=>{if(H.type==="svg"?pe="svg":H.type==="math"&&(pe="mathml"),R==null)E(H,$,ae,re,se,pe,me,ve);else{const oe=R.el&&R.el._isVueCE?R.el:null;try{oe&&oe._beginPatch(),C(R,H,re,se,pe,me,ve)}finally{oe&&oe._endPatch()}}},E=(R,H,$,ae,re,se,pe,me)=>{let ve,oe;const{props:Ee,shapeFlag:D,transition:Se,dirs:be}=R;if(ve=R.el=a(R.type,se,Ee&&Ee.is,Ee),D&8?d(ve,R.children):D&16&&y(R.children,ve,null,ae,re,qo(R,se),pe,me),be&&fs(R,null,ae,"created"),L(ve,R,R.scopeId,pe,ae),Ee){for(const u in Ee)u!=="value"&&!Dr(u)&&r(ve,u,null,Ee[u],se,ae);"value"in Ee&&r(ve,"value",null,Ee.value,se),(oe=Ee.onVnodeBeforeMount)&&Kn(oe,ae,R)}be&&fs(R,null,ae,"beforeMount");const _=p0(re,Se);_&&Se.beforeEnter(ve),i(ve,H,$),((oe=Ee&&Ee.onVnodeMounted)||_||be)&&nn(()=>{try{oe&&Kn(oe,ae,R),_&&Se.enter(ve),be&&fs(R,null,ae,"mounted")}finally{}},re)},L=(R,H,$,ae,re)=>{if($&&p(R,$),ae)for(let se=0;se<ae.length;se++)p(R,ae[se]);if(re){let se=re.subTree;if(H===se||Eh(se.type)&&(se.ssContent===H||se.ssFallback===H)){const pe=re.vnode;L(R,pe,pe.scopeId,pe.slotScopeIds,re.parent)}}},y=(R,H,$,ae,re,se,pe,me,ve=0)=>{for(let oe=ve;oe<R.length;oe++){const Ee=R[oe]=me?bi(R[oe]):ni(R[oe]);b(null,Ee,H,$,ae,re,se,pe,me)}},C=(R,H,$,ae,re,se,pe)=>{const me=H.el=R.el;let{patchFlag:ve,dynamicChildren:oe,dirs:Ee}=H;ve|=R.patchFlag&16;const D=R.props||pt,Se=H.props||pt;let be;if($&&hs($,!1),(be=Se.onVnodeBeforeUpdate)&&Kn(be,$,H,R),Ee&&fs(H,R,$,"beforeUpdate"),$&&hs($,!0),oe&&(!R.dynamicChildren||R.dynamicChildren.length!==oe.length)&&(ve=0,pe=!1,oe=null),(D.innerHTML&&Se.innerHTML==null||D.textContent&&Se.textContent==null)&&d(me,""),oe?N(R.dynamicChildren,oe,me,$,ae,qo(H,re),se):pe||j(R,H,me,null,$,ae,qo(H,re),se,!1),ve>0){if(ve&16)O(me,D,Se,$,re);else if(ve&2&&D.class!==Se.class&&r(me,"class",null,Se.class,re),ve&4&&r(me,"style",D.style,Se.style,re),ve&8){const _=H.dynamicProps;for(let u=0;u<_.length;u++){const w=_[u],F=D[w],B=Se[w];(B!==F||w==="value")&&r(me,w,F,B,re,$)}}ve&1&&R.children!==H.children&&d(me,H.children)}else!pe&&oe==null&&O(me,D,Se,$,re);((be=Se.onVnodeUpdated)||Ee)&&nn(()=>{be&&Kn(be,$,H,R),Ee&&fs(H,R,$,"updated")},ae)},N=(R,H,$,ae,re,se,pe)=>{for(let me=0;me<H.length;me++){const ve=R[me],oe=H[me],Ee=ve.el&&(ve.type===je||!bs(ve,oe)||ve.shapeFlag&198)?h(ve.el):$;b(ve,oe,Ee,null,ae,re,se,pe,!0)}},O=(R,H,$,ae,re)=>{if(H!==$){if(H!==pt)for(const se in H)!Dr(se)&&!(se in $)&&r(R,se,H[se],null,re,ae);for(const se in $){if(Dr(se))continue;const pe=$[se],me=H[se];pe!==me&&se!=="value"&&r(R,se,me,pe,re,ae)}"value"in $&&r(R,"value",H.value,$.value,re)}},I=(R,H,$,ae,re,se,pe,me,ve)=>{const oe=H.el=R?R.el:o(""),Ee=H.anchor=R?R.anchor:o("");let{patchFlag:D,dynamicChildren:Se,slotScopeIds:be}=H;be&&(me=me?me.concat(be):be),R==null?(i(oe,$,ae),i(Ee,$,ae),y(H.children||[],$,Ee,re,se,pe,me,ve)):D>0&&D&64&&Se&&R.dynamicChildren&&R.dynamicChildren.length===Se.length?(N(R.dynamicChildren,Se,$,re,se,pe,me),(H.key!=null||re&&H===re.subTree)&&eu(R,H,!0)):j(R,H,$,Ee,re,se,pe,me,ve)},U=(R,H,$,ae,re,se,pe,me,ve)=>{H.slotScopeIds=me,R==null?H.shapeFlag&512?re.ctx.activate(H,$,ae,pe,ve):k(H,$,ae,re,se,pe,ve):V(R,H,ve)},k=(R,H,$,ae,re,se,pe)=>{const me=R.component=M0(R,ae,re);if(Co(R)&&(me.ctx.renderer=ke),b0(me,!1,pe),me.asyncDep){if(re&&re.registerDep(me,X,pe),!R.el){const ve=me.subTree=dt(an);m(null,ve,H,$),R.placeholder=ve.el}}else X(me,R,H,$,re,se,pe)},V=(R,H,$)=>{const ae=H.component=R.component;if(s0(R,H,$))if(ae.asyncDep&&!ae.asyncResolved){H.el=R.el,W(ae,H,$);return}else ae.next=H,ae.update();else H.el=R.el,ae.vnode=H},X=(R,H,$,ae,re,se,pe)=>{const me=()=>{if(R.isMounted){let{next:D,bu:Se,u:be,parent:_,vnode:u}=R;{const he=Mh(R);if(he){D&&(D.el=u.el,W(R,D,pe)),he.asyncDep.then(()=>{nn(()=>{R.isUnmounted||oe()},re)});return}}let w=D,F;hs(R,!1),D?(D.el=u.el,W(R,D,pe)):D=u,Se&&Va(Se),(F=D.props&&D.props.onVnodeBeforeUpdate)&&Kn(F,_,D,u),hs(R,!0);const B=Yu(R),Q=R.subTree;R.subTree=B,b(Q,B,h(Q.el),ie(Q),R,re,se),D.el=B.el,w===null&&r0(R,B.el),be&&nn(be,re),(F=D.props&&D.props.onVnodeUpdated)&&nn(()=>Kn(F,_,D,u),re)}else{let D;const{el:Se,props:be}=H,{bm:_,m:u,parent:w,root:F,type:B}=R,Q=Fr(H);hs(R,!1),_&&Va(_),!Q&&(D=be&&be.onVnodeBeforeMount)&&Kn(D,w,H),hs(R,!0);{F.ce&&F.ce._hasShadowRoot()&&F.ce._injectChildStyle(B,R.parent?R.parent.type:void 0);const he=R.subTree=Yu(R);b(null,he,$,ae,R,re,se),H.el=he.el}if(u&&nn(u,re),!Q&&(D=be&&be.onVnodeMounted)){const he=H;nn(()=>Kn(D,w,he),re)}(H.shapeFlag&256||w&&Fr(w.vnode)&&w.vnode.shapeFlag&256)&&R.a&&nn(R.a,re),R.isMounted=!0,H=$=ae=null}};R.scope.on();const ve=R.effect=new Df(me);R.scope.off();const oe=R.update=ve.run.bind(ve),Ee=R.job=ve.runIfDirty.bind(ve);Ee.i=R,Ee.id=R.uid,ve.scheduler=()=>Jc(Ee),hs(R,!0),oe()},W=(R,H,$)=>{H.component=R;const ae=R.vnode.props;R.vnode=H,R.next=null,o0(R,H.props,ae,$),d0(R,H.children,$),Ui(),ku(R),Fi()},j=(R,H,$,ae,re,se,pe,me,ve=!1)=>{const oe=R&&R.children,Ee=R?R.shapeFlag:0,D=H.children,{patchFlag:Se,shapeFlag:be}=H;if(Se>0){if(Se&128){le(oe,D,$,ae,re,se,pe,me,ve);return}else if(Se&256){te(oe,D,$,ae,re,se,pe,me,ve);return}}be&8?(Ee&16&&Qe(oe,re,se),D!==oe&&d($,D)):Ee&16?be&16?le(oe,D,$,ae,re,se,pe,me,ve):Qe(oe,re,se,!0):(Ee&8&&d($,""),be&16&&y(D,$,ae,re,se,pe,me,ve))},te=(R,H,$,ae,re,se,pe,me,ve)=>{R=R||ws,H=H||ws;const oe=R.length,Ee=H.length,D=Math.min(oe,Ee);let Se;for(Se=0;Se<D;Se++){const be=H[Se]=ve?bi(H[Se]):ni(H[Se]);b(R[Se],be,$,null,re,se,pe,me,ve)}oe>Ee?Qe(R,re,se,!0,!1,D):y(H,$,ae,re,se,pe,me,ve,D)},le=(R,H,$,ae,re,se,pe,me,ve)=>{let oe=0;const Ee=H.length;let D=R.length-1,Se=Ee-1;for(;oe<=D&&oe<=Se;){const be=R[oe],_=H[oe]=ve?bi(H[oe]):ni(H[oe]);if(bs(be,_))b(be,_,$,null,re,se,pe,me,ve);else break;oe++}for(;oe<=D&&oe<=Se;){const be=R[D],_=H[Se]=ve?bi(H[Se]):ni(H[Se]);if(bs(be,_))b(be,_,$,null,re,se,pe,me,ve);else break;D--,Se--}if(oe>D){if(oe<=Se){const be=Se+1,_=be<Ee?H[be].el:ae;for(;oe<=Se;)b(null,H[oe]=ve?bi(H[oe]):ni(H[oe]),$,_,re,se,pe,me,ve),oe++}}else if(oe>Se)for(;oe<=D;)Re(R[oe],re,se,!0),oe++;else{const be=oe,_=oe,u=new Map;for(oe=_;oe<=Se;oe++){const _e=H[oe]=ve?bi(H[oe]):ni(H[oe]);_e.key!=null&&u.set(_e.key,oe)}let w,F=0;const B=Se-_+1;let Q=!1,he=0;const Z=new Array(B);for(oe=0;oe<B;oe++)Z[oe]=0;for(oe=be;oe<=D;oe++){const _e=R[oe];if(F>=B){Re(_e,re,se,!0);continue}let Le;if(_e.key!=null)Le=u.get(_e.key);else for(w=_;w<=Se;w++)if(Z[w-_]===0&&bs(_e,H[w])){Le=w;break}Le===void 0?Re(_e,re,se,!0):(Z[Le-_]=oe+1,Le>=he?he=Le:Q=!0,b(_e,H[Le],$,null,re,se,pe,me,ve),F++)}const ce=Q?m0(Z):ws;for(w=ce.length-1,oe=B-1;oe>=0;oe--){const _e=_+oe,Le=H[_e],ye=H[_e+1],Me=_e+1<Ee?ye.el||bh(ye):ae;Z[oe]===0?b(null,Le,$,Me,re,se,pe,me,ve):Q&&(w<0||oe!==ce[w]?de(Le,$,Me,2):w--)}}},de=(R,H,$,ae,re=null)=>{const{el:se,type:pe,transition:me,children:ve,shapeFlag:oe}=R;if(oe&6){de(R.component.subTree,H,$,ae);return}if(oe&128){R.suspense.move(H,$,ae);return}if(oe&64){pe.move(R,H,$,ke);return}if(pe===je){i(se,H,$);for(let D=0;D<ve.length;D++)de(ve[D],H,$,ae);i(R.anchor,H,$);return}if(pe===Ga){P(R,H,$);return}if(ae!==2&&oe&1&&me)if(ae===0)me.persisted&&!se[Mn]?i(se,H,$):(me.beforeEnter(se),i(se,H,$),nn(()=>me.enter(se),re));else{const{leave:D,delayLeave:Se,afterLeave:be}=me,_=()=>{R.ctx.isUnmounted?s(se):i(se,H,$)},u=()=>{const w=se._isLeaving||!!se[Mn];se._isLeaving&&se[Mn](!0),me.persisted&&!w?_():D(se,()=>{_(),be&&be()})};Se?Se(se,_,u):u()}else i(se,H,$)},Re=(R,H,$,ae=!1,re=!1)=>{const{type:se,props:pe,ref:me,children:ve,dynamicChildren:oe,shapeFlag:Ee,patchFlag:D,dirs:Se,cacheIndex:be,memo:_}=R;if((D===-2||oe&&oe.hasOnce)&&(re=!1),me!=null&&(Ui(),Ur(me,null,$,R,!0),Fi()),be!=null&&(!R.ctx||R.ctx===H)&&(H.renderCache[be]=void 0),Ee&256){H.ctx.deactivate(R);return}const u=Ee&1&&Se,w=!Fr(R);let F;if(w&&(F=pe&&pe.onVnodeBeforeUnmount)&&Kn(F,H,R),Ee&6)nt(R.component,$,ae);else{if(Ee&128){R.suspense.unmount($,ae);return}u&&fs(R,null,H,"beforeUnmount"),Ee&64?R.type.remove(R,H,$,ke,ae):oe&&!oe.hasOnce&&(se!==je||D>0&&D&64)?Qe(oe,H,$,!1,!0):(se===je&&D&384||!re&&Ee&16)&&Qe(ve,H,$),ae&&Ue(R)}const B=_!=null&&be==null;(w&&(F=pe&&pe.onVnodeUnmounted)||u||B)&&nn(()=>{F&&Kn(F,H,R),u&&fs(R,null,H,"unmounted"),B&&(R.el=null)},$)},Ue=R=>{const{type:H,el:$,anchor:ae,transition:re}=R;if(H===je){ct($,ae);return}if(H===Ga){S(R),re&&!re.persisted&&re.afterLeave&&re.afterLeave();return}const se=()=>{s($),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(R.shapeFlag&1&&re&&!re.persisted){const{leave:pe,delayLeave:me}=re,ve=()=>pe($,se);me?me(R.el,se,ve):ve()}else se()},ct=(R,H)=>{let $;for(;R!==H;)$=f(R),s(R),R=$;s(H)},nt=(R,H,$)=>{const{bum:ae,scope:re,job:se,subTree:pe,um:me,m:ve,a:oe}=R;Zu(ve),Zu(oe),ae&&Va(ae),re.stop(),se?(se.flags|=8,Re(pe,R,H,$)):R.vnode.el&&pe&&(pe.transition=R.vnode.transition,Re(pe,R,H,$)),me&&nn(me,H),nn(()=>{R.isUnmounted=!0},H)},Qe=(R,H,$,ae=!1,re=!1,se=0)=>{for(let pe=se;pe<R.length;pe++)Re(R[pe],H,$,ae,re)},ie=R=>{if(R.shapeFlag&6)return ie(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const H=f(R.anchor||R.el),$=H&&H[jf];return $?f($):H};let ue=!1;const Ce=(R,H,$)=>{let ae;R==null?H._vnode&&(Re(H._vnode,null,null,!0),ae=H._vnode.component):b(H._vnode||null,R,H,null,null,null,$),H._vnode=R,ue||(ue=!0,ku(ae),Kf(),ue=!1)},ke={p:b,um:Re,m:de,r:Ue,mt:k,mc:y,pc:j,pbc:N,n:ie,o:n};return{render:Ce,hydrate:void 0,createApp:Qm(Ce)}}function qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function p0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function eu(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=bi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&eu(a,o)),o.type===Lo&&(o.patchFlag===-1&&(o=s[r]=bi(o)),o.el=a.el),o.type===an&&!o.el&&(o.el=a.el)}}function m0(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Mh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mh(e)}function Zu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function bh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?bh(e.subTree):null}const Eh=n=>n.__isSuspense;function g0(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Mm(n)}const je=Symbol.for("v-fgt"),Lo=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Ps=[];let mn=null;function q(n=!1){Ps.push(mn=n?null:[])}function Th(){Ps.pop(),mn=Ps[Ps.length-1]||null}let Gr=1;function ro(n,e=!1){Gr+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function wh(n){return n.dynamicChildren=Gr>0?mn||ws:null,Th(),Gr>0&&mn&&mn.push(n),n}function J(n,e,t,i,s,r){return wh(g(n,e,t,i,s,r,!0))}function us(n,e,t,i,s){return wh(dt(n,e,t,i,s,!0))}function ao(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const Ah=({key:n})=>n??null,Wa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Zt(n)||it(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function g(n,e=null,t=null,i=0,s=null,r=n===je?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ah(e),ref:e&&Wa(e),scopeId:Zf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return o?(oo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Gr>0&&!a&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const dt=v0;function v0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wm)&&(n=an),ao(n)){const o=os(n,e,!0);return t&&oo(o,t),Gr>0&&!r&&mn&&(o.shapeFlag&6?mn[mn.indexOf(n)]=o:mn.push(o)),o.patchFlag=-2,o}if(A0(n)&&(n=n.__vccOpts),e){e=_0(e);let{class:o,style:l}=e;o&&!Pt(o)&&(e.class=Ke(o)),St(l)&&(Kc(l)&&!Xe(l)&&(l=Bt({},l)),e.style=On(l))}const a=Pt(n)?1:Eh(n)?128:Ao(n)?64:St(n)?4:it(n)?2:0;return g(n,e,t,i,s,a,r,!0)}function _0(n){return n?Kc(n)||gh(n)?Bt({},n):n:null}function os(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?x0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ah(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(Wa(e)):[r,Wa(e)]:Wa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==je?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&os(n.ssContent),ssFallback:n.ssFallback&&os(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&zr(d,l.clone(d)),d}function Vn(n=" ",e=0){return dt(Lo,null,n,e)}function sn(n,e){const t=dt(Ga,null,n);return t.staticCount=e,t}function qe(n="",e=!1){return e?(q(),us(an,null,n)):dt(an,null,n)}function ni(n){return n==null||typeof n=="boolean"?dt(an):Xe(n)?dt(je,null,n.slice()):ao(n)?bi(n):dt(Lo,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:os(n)}function oo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),oo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gh(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(it(e)){if(i&65){oo(n,{default:e});return}e={default:e,_ctx:Tn},t=32}else e=String(e),i&64?(t=16,e=[Vn(e)]):t=8;n.children=e,n.shapeFlag|=t}function x0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ke([e.class,i.class]));else if(s==="style")e.style=On([e.style,i.style]);else if(xo(s)){const r=e[s],a=i[s];a&&r!==a&&!(Xe(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!yo(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Kn(n,e,t,i=null){Ln(n,e,7,[t,i])}const y0=uh();let S0=0;function M0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||y0,r={uid:S0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(i,s),emitsOptions:fh(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=e0.bind(null,r),n.ce&&n.ce(r),r}let on=null;const tu=()=>on||Tn;let lo,Wr;{const n=bo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};lo=e("__VUE_INSTANCE_SETTERS__",t=>on=t),Wr=e("__VUE_SSR_SETTERS__",t=>$r=t)}const na=n=>{const e=on;return lo(n),n.scope.on(),()=>{n.scope.off(),lo(e)}},Qu=()=>{on&&on.scope.off(),lo(null)};function Ch(n){return n.vnode.shapeFlag&4}let $r=!1;function b0(n,e=!1,t=!1){e&&Wr(e);const{props:i,children:s}=n.vnode,r=Ch(n);a0(n,i,r,e),u0(n,s,t||e);const a=r?E0(n,e):void 0;return e&&Wr(!1),a}function E0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$m);const{setup:i}=t;if(i){Ui();const s=n.setupContext=i.length>1?w0(n):null,r=na(n),a=ea(i,n,0,[n.props,s]),o=Ef(a);if(Fi(),r(),(o||n.sp)&&!Fr(n)&&rh(n),o){if(a.then(Qu,Qu),e)return a.then(l=>{Wr(!0);try{ju(n,l,e)}finally{Wr(!1)}}).catch(l=>{wo(l,n,0)});n.asyncDep=a}else ju(n,a)}else Rh(n)}function ju(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Xf(e)),Rh(n)}function Rh(n,e,t){const i=n.type;n.render||(n.render=i.render||ri);{const s=na(n);Ui();try{Xm(n)}finally{Fi(),s()}}}const T0={get(n,e){return Jt(n,"get",""),n[e]}};function w0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,T0),slots:n.slots,emit:n.emit,expose:e}}function Do(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xf(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function A0(n){return it(n)&&"__vccOpts"in n}const Lt=(n,e)=>vm(n,e,$r);function C0(n,e,t){try{ro(-1);const i=arguments.length;return i===2?St(e)&&!Xe(e)?ao(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ao(t)&&(t=[t]),dt(n,e,t))}finally{ro(1)}}const R0="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yl;const ed=typeof window<"u"&&window.trustedTypes;if(ed)try{Yl=ed.createPolicy("vue",{createHTML:n=>n})}catch{}const Ph=Yl?n=>Yl.createHTML(n):n=>n,P0="http://www.w3.org/2000/svg",L0="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,td=Mi&&Mi.createElement("template"),D0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Mi.createElementNS(P0,n):e==="mathml"?Mi.createElementNS(L0,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{td.innerHTML=Ph(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=td.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qi="transition",gr="animation",Xr=Symbol("_vtc"),Lh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},I0=Bt({},eh,Lh),N0=n=>(n.displayName="Transition",n.props=I0,n),ls=N0((n,{slots:e})=>C0(Im,U0(n),e)),ps=(n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},nd=n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1;function U0(n){const e={};for(const I in n)I in Lh||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:d=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=F0(s),b=x&&x[0],v=x&&x[1],{onBeforeEnter:m,onEnter:T,onEnterCancelled:P,onLeave:S,onLeaveCancelled:A,onBeforeAppear:E=m,onAppear:L=T,onAppearCancelled:y=P}=e,C=(I,U,k,V)=>{I._enterCancelled=V,ms(I,U?d:o),ms(I,U?c:a),k&&k()},N=(I,U)=>{I._isLeaving=!1,ms(I,h),ms(I,p),ms(I,f),U&&U()},O=I=>(U,k)=>{const V=I?L:T,X=()=>C(U,I,k);ps(V,[U,X]),id(()=>{ms(U,I?l:r),mi(U,I?d:o),nd(V)||sd(U,i,b,X)})};return Bt(e,{onBeforeEnter(I){ps(m,[I]),mi(I,r),mi(I,a)},onBeforeAppear(I){ps(E,[I]),mi(I,l),mi(I,c)},onEnter:O(!1),onAppear:O(!0),onLeave(I,U){I._isLeaving=!0;const k=()=>N(I,U);mi(I,h),I._enterCancelled?(mi(I,f),od(I)):(od(I),mi(I,f)),id(()=>{I._isLeaving&&(ms(I,h),mi(I,p),nd(S)||sd(I,i,v,k))}),ps(S,[I,k])},onEnterCancelled(I){C(I,!1,void 0,!0),ps(P,[I])},onAppearCancelled(I){C(I,!0,void 0,!0),ps(y,[I])},onLeaveCancelled(I){N(I),ps(A,[I])}})}function F0(n){if(n==null)return null;if(St(n))return[Yo(n.enter),Yo(n.leave)];{const e=Yo(n);return[e,e]}}function Yo(n){return Up(n)}function mi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Xr]||(n[Xr]=new Set)).add(e)}function ms(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Xr];t&&(t.delete(e),t.size||(n[Xr]=void 0))}function id(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let O0=0;function sd(n,e,t,i){const s=n._endId=++O0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=B0(n,e);if(!a)return i();const c=a+"end";let d=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++d>=l&&h()};setTimeout(()=>{d<l&&h()},o+1),n.addEventListener(c,f)}function B0(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),s=i(`${qi}Delay`),r=i(`${qi}Duration`),a=rd(s,r),o=i(`${gr}Delay`),l=i(`${gr}Duration`),c=rd(o,l);let d=null,h=0,f=0;e===qi?a>0&&(d=qi,h=a,f=r.length):e===gr?c>0&&(d=gr,h=c,f=l.length):(h=Math.max(a,c),d=h>0?a>c?qi:gr:null,f=d?d===qi?r.length:l.length:0);const p=d===qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${qi}Property`).toString());return{type:d,timeout:h,propCount:f,hasTransform:p}}function rd(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ad(t)+ad(n[i])))}function ad(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function od(n){return(n?n.ownerDocument:document).body.offsetHeight}function k0(n,e,t){const i=n[Xr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const co=Symbol("_vod"),Dh=Symbol("_vsh"),vr={name:"show",beforeMount(n,{value:e},{transition:t}){n[co]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):_r(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),_r(n,!0),i.enter(n)):i.leave(n,()=>{_r(n,!1)}):_r(n,e))},beforeUnmount(n,{value:e}){_r(n,e)}};function _r(n,e){n.style.display=e?n[co]:"none",n[Dh]=!e}const H0=Symbol(""),V0=/(?:^|;)\s*display\s*:/;function z0(n,e,t){const i=n.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Rr(i,o,"")}else for(const a in e)t[a]==null&&Rr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?W0(n,a,!Pt(e)&&e?e[a]:void 0,o)||Rr(i,a,o):Rr(i,a,"")}}else if(s){if(e!==t){const a=i[H0];a&&(t+=";"+a),i.cssText=t,r=V0.test(t)}}else e&&n.removeAttribute("style");co in n&&(n[co]=r?i.display:"",n[Dh]&&(i.display="none"))}const ha=/\s*!important$/;function Rr(n,e,t){if(Xe(t))t.forEach(i=>Rr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))ha.test(t)?n.setProperty(e,t.replace(ha,""),"important"):n.setProperty(e,t);else{const i=G0(n,e);ha.test(t)?n.setProperty(Hi(i),t.replace(ha,""),"important"):n[i]=t}}const ld=["Webkit","Moz","ms"],Ko={};function G0(n,e){const t=Ko[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Ko[e]=i;i=Af(i);for(let s=0;s<ld.length;s++){const r=ld[s]+i;if(r in n)return Ko[e]=r}return e}function W0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Pt(i)&&t===i}const cd="http://www.w3.org/1999/xlink";function ud(n,e,t,i,s,r=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(cd,e.slice(6,e.length)):n.setAttributeNS(cd,e,t):t==null||r&&!Rf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":oi(t)?String(t):t)}function dd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ph(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Rf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function wi(n,e,t,i){n.addEventListener(e,t,i)}function $0(n,e,t,i){n.removeEventListener(e,t,i)}const fd=Symbol("_vei");function X0(n,e,t,i,s=null){const r=n[fd]||(n[fd]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=K0(e);if(i){const c=r[e]=Q0(i,s);wi(n,o,c,l)}else a&&($0(n,o,a,l),r[e]=void 0)}}const q0=/(Once|Passive|Capture)$/,Y0=/^on:?(?:Once|Passive|Capture)$/;function K0(n){let e,t;for(;(t=n.match(q0))&&!Y0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Hi(n.slice(2)),e]}let Jo=0;const J0=Promise.resolve(),Z0=()=>Jo||(J0.then(()=>Jo=0),Jo=Date.now());function Q0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Xe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Ln(c,e,5,o)}}else Ln(s,e,5,[i])};return t.value=n,t.attached=Z0(),t}const hd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,j0=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?k0(n,i,a):e==="style"?z0(n,t,i):xo(e)?yo(e)||X0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eg(n,e,i,a))?(dd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ud(n,e,i,a,r,e!=="value")):n._isVueCE&&(tg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?dd(n,Cn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ud(n,e,i,a))};function eg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&hd(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hd(e)&&Pt(t)?!1:e in n}function tg(n,e){const t=n._def.props;if(!t)return!1;const i=Cn(e);return Array.isArray(t)?t.some(s=>Cn(s)===i):Object.keys(t).some(s=>Cn(s)===i)}const cs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>Va(e,t):e};function ng(n){n.target.composing=!0}function pd(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gn=Symbol("_assign"),pa=Symbol("_initialValue");function Zo(n,e,t){return e&&(n=n.trim()),t&&(n=Mo(n)),n}const ar={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[pa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[pa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[gn]=cs(s);const r=i||s.props&&s.props.type==="number";wi(n,e?"change":"input",a=>{a.target.composing||n[gn](Zo(n.value,t,r))}),(t||r)&&wi(n,"change",()=>{n.value=Zo(n.value,t,r)}),e||(wi(n,"compositionstart",ng),wi(n,"compositionend",pd),wi(n,"change",pd))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[pa];delete n[pa],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[gn](Zo(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[gn]=cs(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Mo(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ig={deep:!0,created(n,e,t){n[gn]=cs(t),wi(n,"change",()=>{const i=n._modelValue,s=cr(n),r=n.checked,a=n[gn];if(Xe(i)){const o=zc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Ni(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a(Ih(n,r))})},mounted:md,beforeUpdate(n,e,t){n[gn]=cs(t),md(n,e,t)}};function md(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Xe(e))s=zc(e,i.props.value)>-1;else if(Ni(e))s=e.has(i.props.value);else{if(e===t)return;s=Gn(e,Ih(n,!0))}n.checked!==s&&(n.checked=s)}const sg={created(n,{value:e},t){n.checked=Gn(e,t.props.value),n[gn]=cs(t),wi(n,"change",()=>{n[gn](cr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[gn]=cs(i),e!==t&&(n.checked=Gn(e,i.props.value))}},rg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,wi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Mo(cr(l)):cr(l)),r=n.multiple,a=r?Ni(n._modelValue)?new Set(s):s:s[0],o=n._pendingValue=[r,r?Xe(a)?s.slice():s:a];try{n[gn](a)}finally{ei(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[gn]=cs(i)},mounted(n,{value:e}){gd(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[gn]=cs(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!ag(e,t[1],t[0]))&&gd(n,e)}};function ag(n,e,t){if(!t||Xe(n))return Gn(n,e);if(Ni(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function gd(n,e){const t=n.multiple,i=Xe(e);if(!(t&&!i&&!Ni(e))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=cr(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=zc(e,o)>-1}else a.selected=e.has(o);else if(Gn(cr(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function cr(n){return"_value"in n?n._value:n.value}function Ih(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const og={created(n,e,t){ma(n,e,t,null,"created")},mounted(n,e,t){ma(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){ma(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){ma(n,e,t,i,"updated")}};function lg(n,e){switch(n){case"SELECT":return rg;case"TEXTAREA":return ar;default:switch(e){case"checkbox":return ig;case"radio":return sg;default:return ar}}}function ma(n,e,t,i,s){const a=lg(n.tagName,t.props&&t.props.type)[s];a&&a(n,e,t,i)}const cg=["ctrl","shift","alt","meta"],ug={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cg.some(t=>n[`${t}Key`]&&!e.includes(t))},Et=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=ug[e[a]];if(o&&o(s,e))return}return n(s,...r)})},dg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qr=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Hi(s.key);if(e.some(a=>a===r||dg[a]===r))return n(s)})},fg=Bt({patchProp:j0},D0);let vd;function hg(){return vd||(vd=f0(fg))}const pg=(...n)=>{const e=hg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=gg(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,mg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function gg(n){return Pt(n)?document.querySelector(n):n}const vg="/fx-ai-tunning/demo.mp4",_g=[{band:"ZARD",song:"負けないで",genre:"J-Pop Rock",description:"清亮干净的流行摇滚节奏，适合分解和弦与扫弦",params:{channel:"Rhythm",amp_model:"65 Black Vib",gain:25,master_volume:70,treble:6,mid:2,bass:-2,modulation:{type:"Chorus",rate:0,depth:30,enabled:!0},delay:{enabled:!0,delay_type:"Digital",time_ms:300,feedback:15,mix:15},reverb:{enabled:!0,type:"Hall",mix:25,decay:35}},tip:"ZARD 的招牌音色，坂井泉水的歌多以干净清澈的吉他打底，Chorus 让音色更宽广。"},{band:"ZARD",song:"揺れる想い",genre:"J-Pop Rock",description:"略带颗粒感的 Crunch，突出旋律感",params:{channel:"Rhythm",amp_model:"J800 Lo",gain:40,master_volume:65,treble:4,mid:3,bass:0,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!0,delay_type:"Digital",time_ms:250,feedback:20,mix:18},reverb:{enabled:!0,type:"Hall",mix:22,decay:30}},tip:"推一点点失真让扫弦更有力量，但不要太脏，保留旋律的清晰度。"},{band:"AC/DC",song:"Back in Black",genre:"Hard Rock",description:"Malcolm Young 式的经典 Crunch 节奏音色",params:{channel:"Rhythm",amp_model:"J800 Lo",gain:55,master_volume:75,treble:5,mid:4,bass:2,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!1,delay_type:"Digital",time_ms:0,feedback:0,mix:0},reverb:{enabled:!0,type:"Hall",mix:10,decay:25}},tip:'AC/DC 的秘诀是"刚刚好的失真"，不要开太大，靠吉他本身的输出推。右手力度很重要。'},{band:"AC/DC",song:"Highway to Hell",genre:"Hard Rock",description:"Angus Young 式的温暖过载独奏音色",params:{channel:"Lead",amp_model:"J800 Hi",gain:60,master_volume:70,treble:3,mid:6,bass:1,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!0,delay_type:"Analog",time_ms:350,feedback:25,mix:20},reverb:{enabled:!0,type:"Hall",mix:15,decay:25}},tip:"中频推高是 Angus 音色的关键，延迟让独奏更有空间感。"},{band:"Guns N' Roses",song:"Sweet Child O' Mine",genre:"Hard Rock",description:"Slash 标志性的温暖失真 + 延迟前奏音色",params:{channel:"Lead",amp_model:"J800 Hi",gain:65,master_volume:72,treble:4,mid:5,bass:0,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!0,delay_type:"Analog",time_ms:450,feedback:30,mix:28},reverb:{enabled:!0,type:"Hall",mix:18,decay:30}},tip:"Slash 的前奏靠延迟制造回声感，Gain 不要太满，保留音符的清晰度。"},{band:"Guns N' Roses",song:"November Rain",genre:"Hard Rock",description:"干净温暖的分解和弦音色，适合抒情段落",params:{channel:"Rhythm",amp_model:"65 Black Vib",gain:20,master_volume:68,treble:3,mid:2,bass:1,modulation:{type:"Chorus",rate:0,depth:25,enabled:!0},delay:{enabled:!0,delay_type:"Analog",time_ms:380,feedback:20,mix:20},reverb:{enabled:!0,type:"Hall",mix:30,decay:45}},tip:"November Rain 的吉他部分要干净温暖，大混响营造殿堂感。"},{band:"Beyond",song:"海阔天空",genre:"Cantonese Rock",description:"黄贯中经典温暖失真，充满力量与情感",params:{channel:"Lead",amp_model:"J800 Hi",gain:58,master_volume:70,treble:3,mid:5,bass:2,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!0,delay_type:"Digital",time_ms:400,feedback:22,mix:20},reverb:{enabled:!0,type:"Hall",mix:22,decay:30}},tip:"Beyond 的音色特点是中频饱满、温暖不刺耳，延迟和混响让音色更宽广。"},{band:"Beyond",song:"真的爱你",genre:"Cantonese Rock",description:"明亮有力的节奏音色，适合扫弦",params:{channel:"Rhythm",amp_model:"J800 Lo",gain:45,master_volume:72,treble:5,mid:4,bass:1,modulation:{type:"None",rate:0,depth:0,enabled:!1},delay:{enabled:!0,delay_type:"Digital",time_ms:300,feedback:18,mix:16},reverb:{enabled:!0,type:"Hall",mix:18,decay:30}},tip:"真的爱你的节奏吉他要明亮有力，Treble 适当提亮让扫弦更清晰。"}],ks=-135,Qo=270,Kl={channel:"Clean",amp_model:"65 Black Nor",gain:50,master_volume:50,music_vol:50,treble:0,mid:0,bass:0,amp_high:0,amp_mid:0,amp_low:0,modulation:{type:"Chorus",rate:0,depth:0,enabled:!1},delay:{enabled:!1,delay_type:"Digital",time_ms:0,feedback:0,mix:0},reverb:{enabled:!1,type:"Hall",mix:0,decay:0},amp_misc:{phase_in:0,phase_out:0,treb_fc:1900,midd_fc:1e3,midd_q:.7,bass_fc:400}},Es=[{id:"master",label:"GUITAR.VOL",sub:"",min:0,max:100,kind:"main",press:null},{id:"bass",label:"BASS",sub:"SAVE",min:-12,max:12,kind:"main",press:"保存当前预设到通道"},{id:"mid",label:"MID.",sub:"TUNE",min:-12,max:12,kind:"main",press:"开启/关闭调音器"},{id:"treble",label:"TRE.",sub:"D.CTRL",min:-12,max:12,kind:"main",press:"进入鼓机控制"},{id:"gain",label:"GAIN",sub:"QUIT",min:0,max:100,kind:"main",press:"退出当前菜单/模式"}],Ts=[{id:"musicVol",label:"RVB.",sub:"D.VOL",min:0,max:100,kind:"main",press:null},{id:"dlyTime",label:"DLY.",sub:"D.TYPE",min:0,max:500,unit:"ms",kind:"fx",press:"选择延迟 / 混响类型 · 编辑参数",fx:"delay"},{id:"dlyMix",label:"D.MIX",sub:"",min:0,max:100,kind:"fx",press:"选择延迟类型 / 调整混合量",fx:"delay"},{id:"modRate",label:"MOD.",sub:"D.SPEED",min:0,max:100,kind:"fx",press:"选择调制类型 / 编辑速度",fx:"modulation"},{id:"modDepth",label:"AMP",sub:"CH.VOL",min:0,max:100,kind:"main",press:"切换音箱模型 / 通道音量"}],Yi=[...Es,...Ts],jo=new Set(["dlyTime","dlyMix","modRate","modDepth"]),el=0,xg=[Es[0],{type:"switch",name:"power"},Es[1],Es[2],Es[3],Es[4]],yg=[Ts[0],{type:"switch",name:"bt"},Ts[1],Ts[2],Ts[3],Ts[4]],Sg={reverb:["Hall","Church"],delay:["Digital","Analog"],modulation:["Chorus","Flanger","Phaser","Tremolo","Vibrato"],amp:["65 Black Nor","65 Black Nor OD","65 Black Vib","65 Black Vib OD","J800 Lo","J800 Lo OD","J800 Hi","J800 Hi OD","DualRect Red","DualRect Red OD","5153 EL34","5153 EL34 OD","5153 6L6","5153 6L6 OD"]},_d={orange:{name:"橙色",shell:["#ff8a3d","#fa7226","#ef5f18","#e04f0e","#cf4408"],area:["#ef5f18","#e55310","#d84808","#c73f04"],stroke:"rgba(0, 0, 0, 0.9)",accent:"#ff7a1a"},black:{name:"黑色",shell:["#56565f","#45454d","#38383f","#2b2b31","#1f1f25"],area:["#38383f","#313137","#29292f","#212127"],stroke:"rgba(255, 255, 255, 0.1)",accent:"#d8dce4"},silver:{name:"铁灰",shell:["#c4c8cf","#b4b8bf","#a4a8af","#94989f","#81858c"],area:["#a4a8af","#9ca0a7","#8f939a","#81858c"],stroke:"rgba(255, 255, 255, 0.22)",accent:"#c9cdd4"},pink:{name:"粉色",shell:["#f4bccb","#efabbd","#e99aae","#e0899e","#d4768c"],area:["#e99aae","#e390a4","#d98397","#cc7488"],stroke:"rgba(255, 255, 255, 0.3)",accent:"#f6a9bd"}},xr={reverb:{title:"Selecting Reverb FX...",types:{Church:{icon:"church",color:"#b06bff",vb:"0 0 80 80"},Hall:{icon:"hall",color:"#ffd76a",vb:"0 0 100 100"}}},delay:{title:"Selecting Delay FX...",types:{Digital:{icon:"digital",color:"#8fbcd4",vb:"0 0 100 26"},Analog:{icon:"analog",color:"#d96a4f",vb:"0 0 30 52"}}},modulation:{title:"Selecting Modulation FX...",types:{Chorus:{icon:"mod-chorus",color:"#4da6ff",vb:"0 0 30 52"},Flanger:{icon:"mod-flanger",color:"#e0407a",vb:"0 0 30 52"},Phaser:{icon:"mod-phaser",color:"#f57c20",vb:"0 0 30 52"},Tremolo:{icon:"mod-tremolo",color:"#2e8b57",vb:"0 0 30 52"},Vibrato:{icon:"mod-vibrato",color:"#87ceeb",vb:"0 0 30 52"}}},amp:{title:"Selecting AMP Model...",types:{"65 Black Nor":{icon:"amp-fender-nor",color:"#ff8a4d",vb:"0 0 112 52"},"65 Black Nor OD":{icon:"amp-fender-nor",color:"#ff6a1a",vb:"0 0 112 52"},"65 Black Vib":{icon:"amp-fender-vib",color:"#ffb347",vb:"0 0 112 52"},"65 Black Vib OD":{icon:"amp-fender-vib",color:"#ff9020",vb:"0 0 112 52"},"J800 Lo":{icon:"amp-marshall-lo",color:"#ffd76a",vb:"0 0 112 52"},"J800 Lo OD":{icon:"amp-marshall-lo",color:"#ffb820",vb:"0 0 112 52"},"J800 Hi":{icon:"amp-marshall-hi",color:"#ff8c1a",vb:"0 0 112 52"},"J800 Hi OD":{icon:"amp-marshall-hi",color:"#ff600a",vb:"0 0 112 52"},"DualRect Red":{icon:"amp-mesa-rect",color:"#ff5fb0",vb:"0 0 112 52"},"DualRect Red OD":{icon:"amp-mesa-rect",color:"#ff2090",vb:"0 0 112 52"},"5153 EL34":{icon:"amp-evh-el34",color:"#c060ff",vb:"0 0 112 52"},"5153 EL34 OD":{icon:"amp-evh-el34",color:"#a020ff",vb:"0 0 112 52"},"5153 6L6":{icon:"amp-evh-6l6",color:"#5fb0ff",vb:"0 0 112 52"},"5153 6L6 OD":{icon:"amp-evh-6l6",color:"#2080ff",vb:"0 0 112 52"}}}};function tl(n){const e=String(n||"").trim(),t=e.toLowerCase();if(["65 black nor","65 black nor od","65 black vib","65 black vib od","j800 lo","j800 lo od","j800 hi","j800 hi od","dualrect red","dualrect red od","5153 el34","5153 el34 od","5153 6l6","5153 6l6 od"].includes(t))return e;const s=t.includes(" od")||t.endsWith("od");return t.includes("nor")&&(t.includes("65")||t.includes("black"))?"65 Black Nor"+(s?" OD":""):t.includes("vib")&&(t.includes("65")||t.includes("black"))?"65 Black Vib"+(s?" OD":""):t.includes("j800")||t.includes("jcm800")||t.includes("marshall")?(t.includes("lo")?"J800 Lo":t.includes("hi")?"J800 Hi":"J800 Lo")+(s?" OD":""):t.includes("dualrect")||t.includes("rect")||t.includes("mesa")?"DualRect Red"+(s?" OD":""):t.includes("5153")||t.includes("5150")||t.includes("evh")?(t.includes("el34")?"5153 EL34":"5153 6L6")+(s?" OD":""):t.includes("classic rock")||t.includes("crunch")?"J800 Lo":t.includes("metal")||t.includes("hi-gain")||t.includes("high")?"5153 6L6":t.includes("lead 800")||t.includes("lead")?"J800 Hi":t.includes("blues")?"65 Black Nor":t.includes("fender")||t.includes("jc clean")||t.includes("clean")?"65 Black Vib":"65 Black Nor"}function nl(n){return String(n||"").toLowerCase()==="church"?"Church":"Hall"}function Mg(n){return n<100?10:n<1e3?50:n<1e4?100:1e3}const xd="HHHHhha_session";function bg(){let n=localStorage.getItem(xd);return n||(n="sess_"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),localStorage.setItem(xd,n)),n}function Eg(){function n(t,i={}){bg()}function e(t){const i=t.target.closest("[data-track]")||t.target.closest("button, a, .preset-card, .example-btn");i&&(i.getAttribute("data-track")||(i.textContent||"").trim().replace(/\s+/g," ").slice(0,24)||i.tagName,n("click",{}))}return zi(()=>{n(),document.addEventListener("click",e,!0)}),ci(()=>{document.removeEventListener("click",e,!0)}),{track:n}}function Tg(){let n=null,e=!1,t=null,i=null;const s=()=>{e||(e=!0,requestAnimationFrame(()=>{const o=window.scrollY;t==null||t.classList.toggle("scrolled",o>30),i==null||i.classList.toggle("show",o>400),e=!1}))};zi(()=>{t=document.querySelector(".navbar"),i=document.querySelector(".back-top"),n=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(l.target.classList.add("fade-in"),n.unobserve(l.target))})},{threshold:.15}),document.querySelectorAll(".reveal").forEach(o=>n.observe(o)),window.addEventListener("scroll",s,{passive:!0}),s()}),ci(()=>{n==null||n.disconnect(),window.removeEventListener("scroll",s)});function r(){n&&document.querySelectorAll(".reveal:not(.fade-in)").forEach(o=>n.observe(o))}function a(){window.scrollTo({top:0,behavior:"smooth"})}return{scrollToTop:a,rescan:r}}function un(n,e,t){const i=Number(n);return Number.isNaN(i)?e:Math.min(t,Math.max(e,i))}function gi(n,e=0,t=100){return Math.round(un(n,e,t)/5)*5}function $a(n){if(!n)return null;const e=n,t=e.channel?e.channel.charAt(0).toUpperCase()+e.channel.slice(1).toLowerCase():"Rhythm",i=e.delay||{},r=String(i.delay_type||i.type||"Digital").toLowerCase()==="analog"?"Analog":"Digital",a=i.time_ms??i.time??0,o=i.mix??0,l={enabled:i.enabled===!0,delay_type:r,time_ms:un(a,0,500),feedback:gi(i.feedback??0),mix:gi(o)},c=e.modulation||{},d=String(c.type??"").trim(),f={type:d&&d.toLowerCase()!=="none"?d:"Chorus",rate:gi(c.rate??0),depth:gi(c.depth??0),enabled:c.enabled===!0},p=e.reverb||{},x={enabled:p.enabled===!0,type:String(p.type||"").toLowerCase()==="church"?"Church":"Hall",mix:gi(p.mix??0),decay:gi(p.decay??30)},b=["65 Black Nor","65 Black Nor OD","65 Black Vib","65 Black Vib OD","J800 Lo","J800 Lo OD","J800 Hi","J800 Hi OD","DualRect Red","DualRect Red OD","5153 EL34","5153 EL34 OD","5153 6L6","5153 6L6 OD"];function v(P){const S=String(P||"").trim();if(!S)return"65 Black Nor";const A=b.find(L=>L.toLowerCase()===S.toLowerCase());if(A)return A;const E=S.toLowerCase();return E==="clean"||E==="fender clean"||E==="blues"?"65 Black Vib":E==="crunch"||E==="classic rock"?"J800 Lo":E==="british stack"||E==="lead 800"||E==="metal"?"J800 Hi":E.includes("nor")&&E.includes("65")?"65 Black Nor":E.includes("vib")&&E.includes("65")?"65 Black Vib":E.includes("j800")||E.includes("jcm800")?E.includes("lo")?"J800 Lo":"J800 Hi":E.includes("rect")?"DualRect Red":E.includes("5153")||E.includes("5150")?E.includes("el34")?"5153 EL34":"5153 6L6":"65 Black Nor"}const m=e.amp_misc||{},T={phase_in:Number(m.phase_in)||0,phase_out:Number(m.phase_out)||0,treb_fc:un(m.treb_fc??1900,50,2e4),midd_fc:un(m.midd_fc??1e3,50,2e4),midd_q:un(m.midd_q??.7,.1,10),bass_fc:un(m.bass_fc??400,50,2e4),hpf:un(m.hpf??0,0,1e3),lpf:un(m.lpf??0,0,19e3)};return{channel:t,amp_model:v(e.amp_model),gain:gi(e.gain??50),master_volume:gi(e.master_volume??e.master??70),music_vol:gi(e.music_vol??50),treble:un(e.treble??0,-12,12),mid:un(e.mid??e.middle??0,-12,12),bass:un(e.bass??0,-12,12),amp_high:un(e.amp_high??0,-12,12),amp_mid:un(e.amp_mid??0,-12,12),amp_low:un(e.amp_low??0,-12,12),modulation:f,delay:l,reverb:x,amp_misc:T}}const wg={key:0},Ag=["cx"],Cg=["cx"],Rg={key:1},Pg=["cx"],Lg=["cx"],Dg={key:2},Ig=["cx"],Ng=["cx"],Ug={key:3},Fg=["cx"],Og=["cx"],Bg={key:4},kg=["cx"],Hg=["cx"],Vg={key:5},zg=["cx"],Gg=["cx"],Wg={key:6},$g=["cx"],Xg=["cx"],Nh={__name:"AmpIcon",props:{icon:{type:String,required:!0}},setup(n){return(e,t)=>n.icon==="amp-fender-nor"?(q(),J("g",wg,[t[0]||(t[0]=g("rect",{x:"33",y:"1",width:"50",height:"10",rx:"1.5",fill:"#2a2a2a"},null,-1)),t[1]||(t[1]=g("rect",{x:"38",y:"3",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[2]||(t[2]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"5",fill:"#2a2a2a"},null,-1)),t[3]||(t[3]=g("path",{d:"M11 5 H101 Q106 5 106 10 V13 H6 V10 Q6 5 11 5 Z",fill:"#303030"},null,-1)),t[4]||(t[4]=g("circle",{cx:"20",cy:"13",r:"1.5",fill:"#b8b8b8"},null,-1)),t[5]||(t[5]=g("circle",{cx:"20",cy:"13",r:"0.45",fill:"#2a2a2a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"13",r:"2.3",fill:"#b8b8b8"},null,8,Ag),g("circle",{cx:i,cy:"12",r:"0.8",fill:"#2a2a2a"},null,8,Cg)])),64)),t[6]||(t[6]=g("rect",{x:"94",y:"11",width:"3.5",height:"4",rx:"1",fill:"#b8b8b8"},null,-1)),t[7]||(t[7]=g("rect",{x:"94.5",y:"11.5",width:"2.5",height:"1.5",rx:"0.5",fill:"#ff3a3a"},null,-1)),t[8]||(t[8]=g("rect",{x:"10",y:"19",width:"92",height:"23",rx:"1",fill:"#b8b8b8",opacity:"0.5"},null,-1)),t[9]||(t[9]=g("rect",{x:"10",y:"8",width:"92",height:"34.5",rx:"2",fill:"none",stroke:"#1a1a1a","stroke-width":"0.8"},null,-1)),t[10]||(t[10]=g("text",{x:"56",y:"33","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#2a2a2a"},"65 Black Nor",-1))])):n.icon==="amp-fender-vib"?(q(),J("g",Rg,[t[11]||(t[11]=g("rect",{x:"33",y:"1",width:"50",height:"10",rx:"1.5",fill:"#2a2a2a"},null,-1)),t[12]||(t[12]=g("rect",{x:"38",y:"3",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[13]||(t[13]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"5",fill:"#2a2a2a"},null,-1)),t[14]||(t[14]=g("path",{d:"M11 5 H101 Q106 5 106 10 V13 H6 V10 Q6 5 11 5 Z",fill:"#303030"},null,-1)),t[15]||(t[15]=g("circle",{cx:"20",cy:"13",r:"1.5",fill:"#b8b8b8"},null,-1)),t[16]||(t[16]=g("circle",{cx:"20",cy:"13",r:"0.45",fill:"#2a2a2a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"13",r:"2.3",fill:"#b8b8b8"},null,8,Pg),g("circle",{cx:i,cy:"12",r:"0.8",fill:"#2a2a2a"},null,8,Lg)])),64)),t[17]||(t[17]=g("rect",{x:"94",y:"11",width:"3.5",height:"4",rx:"1",fill:"#b8b8b8"},null,-1)),t[18]||(t[18]=g("rect",{x:"94.5",y:"11.5",width:"2.5",height:"1.5",rx:"0.5",fill:"#ff3a3a"},null,-1)),t[19]||(t[19]=g("rect",{x:"10",y:"19",width:"92",height:"23",rx:"1",fill:"#b8b8b8",opacity:"0.5"},null,-1)),t[20]||(t[20]=g("rect",{x:"10",y:"8",width:"92",height:"34.5",rx:"2",fill:"none",stroke:"#1a1a1a","stroke-width":"0.8"},null,-1)),t[21]||(t[21]=g("text",{x:"56",y:"33","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#2a2a2a"},"65 Black Vib",-1))])):n.icon==="amp-marshall-lo"?(q(),J("g",Dg,[t[22]||(t[22]=g("rect",{x:"33",y:"3",width:"50",height:"6",rx:"1.5",fill:"#2a2a2a"},null,-1)),t[23]||(t[23]=g("rect",{x:"38",y:"5",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[24]||(t[24]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"2",fill:"#2a2a2a"},null,-1)),t[25]||(t[25]=g("rect",{x:"10",y:"32",width:"92",height:"10",rx:"1",fill:"#b8860b",opacity:"0.7"},null,-1)),t[26]||(t[26]=g("rect",{x:"10",y:"11.5",width:"92",height:"30",rx:"2",fill:"none",stroke:"#b8860b","stroke-width":"0.8"},null,-1)),t[27]||(t[27]=g("text",{x:"56",y:"25","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#b8860b"},"J800 Lo",-1)),t[28]||(t[28]=g("circle",{cx:"20",cy:"37",r:"1.8",fill:"#b8b8b8"},null,-1)),t[29]||(t[29]=g("circle",{cx:"20",cy:"37",r:"0.8",fill:"#1a1a1a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"37",r:"2.3",fill:"#b8b8b8"},null,8,Ig),g("circle",{cx:i,cy:"36",r:"0.6",fill:"#2a2a2a"},null,8,Ng)])),64)),t[30]||(t[30]=g("rect",{x:"94",y:"35",width:"3.5",height:"4",rx:"0.5",fill:"#b8b8b8"},null,-1)),t[31]||(t[31]=g("rect",{x:"94.5",y:"35",width:"2.5",height:"1.5",fill:"#ff3a3a"},null,-1))])):n.icon==="amp-marshall-hi"?(q(),J("g",Ug,[t[32]||(t[32]=g("rect",{x:"33",y:"3",width:"50",height:"6",rx:"1.5",fill:"#2a2a2a"},null,-1)),t[33]||(t[33]=g("rect",{x:"38",y:"5",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[34]||(t[34]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"2",fill:"#2a2a2a"},null,-1)),t[35]||(t[35]=g("rect",{x:"10",y:"32",width:"92",height:"10",rx:"1",fill:"#b8860b",opacity:"0.7"},null,-1)),t[36]||(t[36]=g("rect",{x:"10",y:"11.5",width:"92",height:"30",rx:"2",fill:"none",stroke:"#b8860b","stroke-width":"0.8"},null,-1)),t[37]||(t[37]=g("text",{x:"56",y:"25","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#b8860b"},"J800 Hi",-1)),t[38]||(t[38]=g("circle",{cx:"20",cy:"37",r:"1.8",fill:"#b8b8b8"},null,-1)),t[39]||(t[39]=g("circle",{cx:"20",cy:"37",r:"0.8",fill:"#1a1a1a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"37",r:"2.3",fill:"#b8b8b8"},null,8,Fg),g("circle",{cx:i,cy:"36",r:"0.6",fill:"#2a2a2a"},null,8,Og)])),64)),t[40]||(t[40]=g("rect",{x:"94",y:"35",width:"3.5",height:"4",rx:"0.5",fill:"#b8b8b8"},null,-1)),t[41]||(t[41]=g("rect",{x:"94.5",y:"35",width:"2.5",height:"1.5",fill:"#ff3a3a"},null,-1))])):n.icon==="amp-mesa-rect"?(q(),J("g",Bg,[t[42]||(t[42]=g("rect",{x:"33",y:"1",width:"50",height:"10",rx:"1.5",fill:"#2a2a2a"},null,-1)),t[43]||(t[43]=g("rect",{x:"38",y:"3",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[44]||(t[44]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"5",fill:"#2a2a2a"},null,-1)),t[45]||(t[45]=g("path",{d:"M11 5 H101 Q106 5 106 10 V13 H6 V10 Q6 5 11 5 Z",fill:"#303030"},null,-1)),t[46]||(t[46]=g("circle",{cx:"20",cy:"13",r:"1.7",fill:"#b8b8b8"},null,-1)),t[47]||(t[47]=g("circle",{cx:"20",cy:"13",r:"0.7",fill:"#2a2a2a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"13",r:"2.3",fill:"#b8b8b8"},null,8,kg),g("circle",{cx:i,cy:"12",r:"0.8",fill:"#2a2a2a"},null,8,Hg)])),64)),t[48]||(t[48]=g("rect",{x:"94",y:"11",width:"3.5",height:"4",rx:"1",fill:"#b8b8b8"},null,-1)),t[49]||(t[49]=g("rect",{x:"94.5",y:"11.5",width:"2.5",height:"1.5",rx:"0.5",fill:"#ff3a3a"},null,-1)),t[50]||(t[50]=g("rect",{x:"10",y:"19",width:"92",height:"23",rx:"1",fill:"#909090",opacity:"0.5"},null,-1)),t[51]||(t[51]=g("circle",{cx:"14",cy:"24",r:"1",fill:"#1a1a1a"},null,-1)),t[52]||(t[52]=g("circle",{cx:"98",cy:"24",r:"1",fill:"#1a1a1a"},null,-1)),t[53]||(t[53]=g("circle",{cx:"14",cy:"38",r:"1",fill:"#1a1a1a"},null,-1)),t[54]||(t[54]=g("circle",{cx:"98",cy:"38",r:"1",fill:"#1a1a1a"},null,-1)),t[55]||(t[55]=g("rect",{x:"10",y:"8",width:"92",height:"34.5",rx:"2",fill:"none",stroke:"#1a1a1a","stroke-width":"0.8"},null,-1)),t[56]||(t[56]=g("text",{x:"56",y:"33","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#d92020"},"DualRect Red",-1))])):n.icon==="amp-evh-el34"?(q(),J("g",Vg,[t[57]||(t[57]=g("rect",{x:"33",y:"3",width:"50",height:"6",rx:"1.5",fill:"#b8b8b8"},null,-1)),t[58]||(t[58]=g("rect",{x:"38",y:"5",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[59]||(t[59]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"2",fill:"#b8b8b8"},null,-1)),t[60]||(t[60]=g("rect",{x:"10",y:"32",width:"92",height:"10",rx:"1",fill:"#2a2a2a"},null,-1)),t[61]||(t[61]=g("rect",{x:"10",y:"11.5",width:"92",height:"30",rx:"2",fill:"none",stroke:"#2a2a2a","stroke-width":"0.8"},null,-1)),t[62]||(t[62]=g("text",{x:"56",y:"25","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#2a2a2a"},"5153 EL34",-1)),t[63]||(t[63]=g("circle",{cx:"20",cy:"37",r:"1.8",fill:"#b8b8b8"},null,-1)),t[64]||(t[64]=g("circle",{cx:"20",cy:"37",r:"0.8",fill:"#2a2a2a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"37",r:"2.3",fill:"#b8b8b8"},null,8,zg),g("circle",{cx:i,cy:"36",r:"0.6",fill:"#2a2a2a"},null,8,Gg)])),64)),t[65]||(t[65]=g("rect",{x:"94",y:"35",width:"3.5",height:"4",rx:"0.5",fill:"#b8b8b8"},null,-1)),t[66]||(t[66]=g("rect",{x:"94.5",y:"35",width:"2.5",height:"1.5",fill:"#ff3a3a"},null,-1))])):n.icon==="amp-evh-6l6"?(q(),J("g",Wg,[t[67]||(t[67]=g("rect",{x:"33",y:"3",width:"50",height:"6",rx:"1.5",fill:"#b8b8b8"},null,-1)),t[68]||(t[68]=g("rect",{x:"38",y:"5",width:"40",height:"2",rx:"1.5",fill:"#1a1a1a"},null,-1)),t[69]||(t[69]=g("rect",{x:"6",y:"7",width:"100",height:"40",rx:"2",fill:"#b8b8b8"},null,-1)),t[70]||(t[70]=g("rect",{x:"10",y:"32",width:"92",height:"10",rx:"1",fill:"#2a2a2a"},null,-1)),t[71]||(t[71]=g("rect",{x:"10",y:"11.5",width:"92",height:"30",rx:"2",fill:"none",stroke:"#2a2a2a","stroke-width":"0.8"},null,-1)),t[72]||(t[72]=g("text",{x:"56",y:"25","text-anchor":"middle","font-size":"6.5","font-weight":"900","letter-spacing":"0.4",fill:"#2a2a2a"},"5153 6L6",-1)),t[73]||(t[73]=g("circle",{cx:"20",cy:"37",r:"1.8",fill:"#b8b8b8"},null,-1)),t[74]||(t[74]=g("circle",{cx:"20",cy:"37",r:"0.8",fill:"#2a2a2a"},null,-1)),(q(),J(je,null,yt([36,47,58,69,80],(i,s)=>g("g",{key:s},[g("circle",{cx:i,cy:"37",r:"2.3",fill:"#b8b8b8"},null,8,$g),g("circle",{cx:i,cy:"36",r:"0.6",fill:"#2a2a2a"},null,8,Xg)])),64)),t[75]||(t[75]=g("rect",{x:"94",y:"35",width:"3.5",height:"4",rx:"0.5",fill:"#b8b8b8"},null,-1)),t[76]||(t[76]=g("rect",{x:"94.5",y:"35",width:"2.5",height:"1.5",fill:"#ff3a3a"},null,-1))])):qe("",!0)}},hi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},qg={class:"lcd-popup-head"},Yg={class:"lcd-popup-title"},Kg={key:0},Jg={key:0,class:"fx-view"},Zg={class:"fx-pick"},Qg={class:"fx-select-title"},jg={class:"fx-icon-bar"},ev={key:1,class:"od-pedal"},tv=["viewBox"],nv={key:0,fill:"currentColor","shape-rendering":"crispEdges",transform:"translate(0, -10)"},iv={key:1,fill:"currentColor"},sv={key:2,"shape-rendering":"crispEdges"},rv=["x"],av=["x"],ov=["x"],lv=["x"],cv=["cx"],uv=["x"],dv={key:3},fv={key:5},hv={key:6},pv=["cx"],mv=["x"],gv={key:7},vv={key:8},_v={key:9},xv={key:10},yv={class:"fx-type-row"},Sv={class:"fx-type"},Mv={class:"fx-params"},bv={key:0,class:"fx-header"},Ev=["onClick"],Tv={class:"lcd-name"},wv=["onMousedown"],Av={class:"lcd-val"},Cv=["onMousedown"],Rv={key:1,class:"lcd-val"},Pv={key:1,class:"lcd-popup-body"},Lv=["onClick"],Dv={class:"lcd-name"},Iv=["onMousedown"],Nv={class:"lcd-val"},Uv=["onMousedown"],Fv={key:1,class:"lcd-val"},Ov={class:"press-desc"},Bv={__name:"LcdPopup",props:{knob:{type:Object,required:!0},info:{type:Object,default:null},editable:{type:Boolean,default:!1},allowCycle:{type:Boolean,default:!1},shakeIdx:{type:Number,default:null}},emits:["close","row-click","step","step-end","cycle"],setup(n,{emit:e}){const t=e;return(i,s)=>{var r,a,o,l,c,d;return q(),J("div",{class:Ke(["lcd-popup",{"amp-params":((r=n.info)==null?void 0:r.fxHeader)==="AMPLIFIER"||((a=n.info)==null?void 0:a.fxHeader)==="AMP MISC"}]),onClick:s[8]||(s[8]=Et(()=>{},["stop"]))},[g("div",qg,[g("span",Yg,[Vn(xe(n.knob.label),1),n.knob.sub?(q(),J("em",Kg,"/"+xe(n.knob.sub),1)):qe("",!0)]),g("span",{class:"lcd-popup-close",onClick:s[0]||(s[0]=h=>t("close"))},"×")]),(o=n.info)!=null&&o.fxView?(q(),J("div",Jg,[g("div",Zg,[g("div",Qg,xe(n.info.fxView.title),1),g("div",jg,[n.allowCycle&&n.info.cycleCat?(q(),J("button",{key:0,class:"fx-arrow fx-arrow-left",onClick:s[1]||(s[1]=Et(h=>t("cycle",n.info.cycleCat,-1),["stop"]))},"‹")):qe("",!0),n.info.fxView.type&&n.info.fxView.type.endsWith(" OD")?(q(),J("div",ev,[...s[9]||(s[9]=[sn('<svg viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-5888700d><rect x="3" y="6" width="26" height="40" rx="3" fill="#28b73a" data-v-5888700d></rect><circle cx="10.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="9.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="21.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="20.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="23" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="20.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1  " fill="#fff" data-v-5888700d></circle><rect x="2.6" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect></svg>',1)])])):qe("",!0),n.info.fxView.icon?(q(),J("div",{key:2,class:Ke(["fx-icon",{"fx-icon-with-od":n.info.fxView.type&&n.info.fxView.type.endsWith(" OD"),"fx-icon-compact":n.info.fxView.icon==="digital","fx-icon-slim":n.info.fxView.icon==="hall","fx-icon-amp":n.info.fxView.icon&&n.info.fxView.icon.startsWith("amp-")}]),style:On({color:n.info.fxView.color})},[(q(),J("svg",{viewBox:n.info.fxView.vb,fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n.info.fxView.icon==="church"?(q(),J("g",nv,[...s[10]||(s[10]=[sn('<rect x="8" y="74" width="64" height="4" data-v-5888700d></rect><rect x="7" y="75" width="66" height="3" data-v-5888700d></rect><rect x="6" y="76" width="68" height="2" data-v-5888700d></rect><rect x="8" y="74" width="64" height="1" fill-opacity="0.85" data-v-5888700d></rect><rect x="7" y="75" width="66" height="1" fill-opacity="0.85" data-v-5888700d></rect><rect x="8" y="77" width="64" height="1" fill-opacity="0.55" data-v-5888700d></rect><rect x="7" y="77" width="66" height="1" fill-opacity="0.55" data-v-5888700d></rect><rect x="6" y="77" width="68" height="1" fill-opacity="0.55" data-v-5888700d></rect><rect x="8" y="78" width="64" height="1" fill="#060a14" data-v-5888700d></rect><rect x="6" y="79" width="68" height="1" fill="#060a14" data-v-5888700d></rect><rect x="15" y="62" width="21" height="12" data-v-5888700d></rect><rect x="18" y="56" width="15" height="6" data-v-5888700d></rect><rect x="21" y="50" width="9" height="6" data-v-5888700d></rect><rect x="16" y="63" width="2" height="10" fill-opacity="0.9" data-v-5888700d></rect><rect x="33" y="63" width="3" height="10" fill-opacity="0.5" data-v-5888700d></rect><rect x="44" y="62" width="21" height="12" data-v-5888700d></rect><rect x="47" y="56" width="15" height="6" data-v-5888700d></rect><rect x="50" y="50" width="9" height="6" data-v-5888700d></rect><rect x="62" y="63" width="2" height="10" fill-opacity="0.9" data-v-5888700d></rect><rect x="44" y="63" width="3" height="10" fill-opacity="0.5" data-v-5888700d></rect><rect x="22" y="60" width="36" height="10" data-v-5888700d></rect><rect x="26" y="56" width="28" height="4" data-v-5888700d></rect><rect x="29" y="50" width="22" height="6" data-v-5888700d></rect><rect x="32" y="46" width="16" height="4" data-v-5888700d></rect><rect x="34" y="42" width="12" height="4" data-v-5888700d></rect><rect x="36" y="38" width="8" height="4" data-v-5888700d></rect><rect x="38" y="34" width="4" height="4" data-v-5888700d></rect><rect x="39" y="30" width="2" height="4" data-v-5888700d></rect><rect x="24" y="60" width="4" height="8" fill-opacity="0.9" data-v-5888700d></rect><rect x="27" y="56" width="4" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="30" y="50" width="3" height="6" fill-opacity="0.9" data-v-5888700d></rect><rect x="33" y="46" width="3" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="35" y="42" width="2" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="37" y="38" width="2" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="38" y="34" width="1" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="39" y="30" width="1" height="4" fill-opacity="0.9" data-v-5888700d></rect><rect x="52" y="60" width="4" height="8" fill-opacity="0.5" data-v-5888700d></rect><rect x="49" y="56" width="4" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="47" y="50" width="3" height="6" fill-opacity="0.5" data-v-5888700d></rect><rect x="44" y="46" width="3" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="43" y="42" width="2" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="41" y="38" width="2" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="41" y="34" width="1" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="40" y="30" width="1" height="4" fill-opacity="0.5" data-v-5888700d></rect><rect x="38" y="20" width="4" height="10" data-v-5888700d></rect><rect x="32" y="24" width="16" height="5" data-v-5888700d></rect><rect x="38" y="20" width="4" height="2" fill="#ffffff" data-v-5888700d></rect><rect x="33" y="25" width="4" height="2" fill="#ffffff" data-v-5888700d></rect><rect x="34" y="58" width="12" height="16" fill="#060a14" data-v-5888700d></rect><rect x="36" y="54" width="8" height="4" fill="#060a14" data-v-5888700d></rect><rect x="38" y="50" width="4" height="4" fill="#060a14" data-v-5888700d></rect><rect x="39" y="48" width="2" height="2" fill="#060a14" data-v-5888700d></rect><rect x="38" y="62" width="4" height="12" data-v-5888700d></rect><rect x="38" y="62" width="2" height="12" fill-opacity="0.9" data-v-5888700d></rect><rect x="22" y="65" width="8" height="9" fill="#060a14" data-v-5888700d></rect><rect x="24" y="61" width="4" height="4" fill="#060a14" data-v-5888700d></rect><rect x="25" y="59" width="2" height="2" fill="#060a14" data-v-5888700d></rect><rect x="50" y="65" width="8" height="9" fill="#060a14" data-v-5888700d></rect><rect x="52" y="61" width="4" height="4" fill="#060a14" data-v-5888700d></rect><rect x="53" y="59" width="2" height="2" fill="#060a14" data-v-5888700d></rect><rect x="36" y="16" width="8" height="14" fill="currentColor" fill-opacity="0.4" data-v-5888700d></rect><rect x="30" y="20" width="20" height="9" fill="currentColor" fill-opacity="0.4" data-v-5888700d></rect><rect x="15" y="48" width="21" height="24" fill="currentColor" fill-opacity="0.22" data-v-5888700d></rect><rect x="44" y="48" width="21" height="24" fill="currentColor" fill-opacity="0.22" data-v-5888700d></rect><rect x="6" y="72" width="68" height="5" fill="currentColor" fill-opacity="0.22" data-v-5888700d></rect><rect x="24" y="60" width="4" height="8" fill="#d8b0ff" data-v-5888700d></rect><rect x="27" y="56" width="4" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="30" y="50" width="3" height="6" fill="#d8b0ff" data-v-5888700d></rect><rect x="33" y="46" width="3" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="35" y="42" width="2" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="37" y="38" width="2" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="38" y="34" width="1" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="39" y="30" width="1" height="4" fill="#d8b0ff" data-v-5888700d></rect><rect x="38" y="20" width="4" height="2" fill="#ffffff" data-v-5888700d></rect><rect x="33" y="25" width="4" height="2" fill="#ffffff" data-v-5888700d></rect><rect x="39" y="33" width="2" height="2" fill="#f0e0ff" data-v-5888700d></rect><rect x="38" y="62" width="2" height="12" fill="#f0d8ff" data-v-5888700d></rect>',77)])])):n.info.fxView.icon==="hall"?(q(),J("g",iv,[...s[11]||(s[11]=[sn('<polygon points="12,38 50,8 88,38" data-v-5888700d></polygon><rect x="12" y="32" width="76" height="7" data-v-5888700d></rect><path d="M19 44 H81 V69 L89 84 H12 L19 69 Z" data-v-5888700d></path><rect x="30" y="49" width="5" height="26" fill="#05120c" data-v-5888700d></rect><rect x="47" y="49" width="5" height="26" fill="#05120c" data-v-5888700d></rect><rect x="64" y="49" width="5" height="26" fill="#05120c" data-v-5888700d></rect><polygon points="12,38 50,8 35,38" fill="#ffe9a0" data-v-5888700d></polygon><polygon points="50,8 88,38 65,38" fill-opacity="0.4" data-v-5888700d></polygon><rect x="12" y="32" width="76" height="2" fill="#fff5cc" data-v-5888700d></rect><rect x="12" y="37" width="76" height="2" fill-opacity="0.5" data-v-5888700d></rect><rect x="19" y="44" width="62" height="25" fill-opacity="0.18" data-v-5888700d></rect><rect x="12" y="69" width="77" height="15" fill-opacity="0.15" data-v-5888700d></rect><rect x="49" y="6" width="2" height="4" fill="#ffffff" data-v-5888700d></rect><rect x="19" y="44" width="2" height="25" fill="#ffe9a0" data-v-5888700d></rect><rect x="79" y="44" width="2" height="25" fill-opacity="0.35" data-v-5888700d></rect>',15)])])):n.info.fxView.icon==="digital"?(q(),J("g",sv,[s[12]||(s[12]=sn('<rect x="0" y="3" width="100" height="20" fill="currentColor" data-v-5888700d></rect><rect x="0" y="3" width="100" height="1.4" fill="#ffffff" opacity="0.4" data-v-5888700d></rect><rect x="0" y="21.6" width="100" height="1.4" fill="#000000" opacity="0.28" data-v-5888700d></rect><rect x="0" y="3" width="9" height="20" fill="#4a6a7a" opacity="0.6" data-v-5888700d></rect><rect x="91" y="3" width="10" height="20" fill="#4a6a7a" opacity="0.6" data-v-5888700d></rect><rect x="5" y="6" width="2.5" height="14" rx="1" fill="#2a2a2a" data-v-5888700d></rect><rect x="92.8" y="6" width="2.5" height="14" rx="1" fill="#2a2a2a" data-v-5888700d></rect><circle cx="3" cy="6.5" r="1" fill="#08141a" opacity="0.75" data-v-5888700d></circle><circle cx="3" cy="19.5" r="1" fill="#08141a" opacity="0.75" data-v-5888700d></circle><circle cx="97" cy="6.5" r="1" fill="#08141a" opacity="0.75" data-v-5888700d></circle><circle cx="97" cy="19.5" r="1" fill="#08141a" opacity="0.75" data-v-5888700d></circle><rect x="13" y="4" width="32" height="16" rx="1.4" fill="#08141a" data-v-5888700d></rect><path d="M13.9 4.9 L32 4.9 L22.5 19.1 L13.9 19.1 Z" fill="#4a6a7a" opacity="2" data-v-5888700d></path><path d="M32 4.9 L22.5 19.1" stroke="#d8ffe8" stroke-opacity="0.4" stroke-width="0.7" data-v-5888700d></path>',14)),(q(),J(je,null,yt([54,60,66,72,78],(h,f)=>g("g",{key:f},[g("rect",{x:h,y:"5.8",width:"4",height:"1.8",fill:"#ff5a4d"},null,8,rv),g("rect",{x:h,y:"8.3",width:"4",height:"1.8",fill:"#ffd24d"},null,8,av),g("rect",{x:h,y:"10.3",width:"4",height:"1.8",fill:"#3ee06a"},null,8,ov),g("rect",{x:h,y:"12.5",width:"4",height:"1.8",fill:"#3ee06a"},null,8,lv)])),64)),(q(),J(je,null,yt([54,61,68,75,82],(h,f)=>g("g",{key:"k"+f},[g("circle",{cx:h,cy:"18",r:"2.3",fill:"#08141a"},null,8,cv),g("rect",{x:h-.25,y:"16.5",width:"0.8",height:"1.6",rx:"0.25",fill:"#d8ffe8",opacity:"0.8"},null,8,uv)])),64))])):n.info.fxView.icon==="analog"?(q(),J("g",dv,[...s[13]||(s[13]=[sn('<rect x="3" y="6" width="26" height="40" rx="3" fill="#d92020" data-v-5888700d></rect><circle cx="10.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="9.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="21.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="20.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="23" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="20.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1" fill="#fff" data-v-5888700d></circle><rect x="2.1" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect>',11)])])):n.info.fxView.icon&&n.info.fxView.icon.startsWith("amp-")?(q(),us(Nh,{key:4,icon:n.info.fxView.icon},null,8,["icon"])):n.info.fxView.icon==="mod-chorus"?(q(),J("g",fv,[...s[14]||(s[14]=[sn('<rect x="3" y="6" width="26" height="40" rx="3" fill="#4da6ff" data-v-5888700d></rect><circle cx="10.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="9.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="21.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="20.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="23" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="20.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1" fill="#fff" data-v-5888700d></circle><rect x="2.1" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect>',11)])])):n.info.fxView.icon==="mod-flanger"?(q(),J("g",hv,[s[15]||(s[15]=g("rect",{x:"3",y:"6",width:"26",height:"40",rx:"3",fill:"#e0407a"},null,-1)),(q(),J(je,null,yt([6.5,12.5,18.5,24.5],(h,f)=>g("g",{key:f},[g("circle",{cx:h,cy:"16",r:"2.3",fill:"#1a1a1a"},null,8,pv),g("rect",{x:h-.5,y:"13.5",width:"1",height:"2.5",rx:"0.3",fill:"#c8c8c8"},null,8,mv)])),64)),s[16]||(s[16]=g("circle",{cx:"16",cy:"38",r:"2.5",fill:"#1a1a1a"},null,-1)),s[17]||(s[17]=g("circle",{cx:"16",cy:"38",r:"1",fill:"#fff"},null,-1)),s[18]||(s[18]=g("rect",{x:"1.8",y:"30",width:"1",height:"3",fill:"#c8c8c8"},null,-1)),s[19]||(s[19]=g("rect",{x:"29",y:"30",width:"1",height:"3",fill:"#c8c8c8"},null,-1))])):n.info.fxView.icon==="mod-phaser"?(q(),J("g",gv,[...s[20]||(s[20]=[sn('<rect x="3" y="6" width="26" height="40" rx="3" fill="#f57c20" data-v-5888700d></rect><circle cx="16" cy="16" r="3.5" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="13" width="1.4" height="3" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1" fill="#fff" data-v-5888700d></circle><rect x="2.1" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect>',7)])])):n.info.fxView.icon==="mod-tremolo"?(q(),J("g",vv,[...s[21]||(s[21]=[sn('<rect x="3" y="6" width="26" height="40" rx="3" fill="#2e8b57" data-v-5888700d></rect><circle cx="10.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="9.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="21.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="20.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="23" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="20.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1" fill="#fff" data-v-5888700d></circle><rect x="2.1" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect>',11)])])):n.info.fxView.icon==="mod-vibrato"?(q(),J("g",_v,[...s[22]||(s[22]=[sn('<rect x="3" y="6" width="26" height="40" rx="3" fill="#87ceeb" data-v-5888700d></rect><circle cx="10.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="9.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="21.5" cy="14" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="20.8" y="11.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="23" r="3" fill="#1a1a1a" data-v-5888700d></circle><rect x="15.3" y="20.5" width="1.4" height="2.5" rx="0.3" fill="#c8c8c8" data-v-5888700d></rect><circle cx="16" cy="38" r="2.5" fill="#1a1a1a" data-v-5888700d></circle><circle cx="16" cy="38" r="1" fill="#fff" data-v-5888700d></circle><rect x="2.1" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect><rect x="29" y="30" width="1" height="3" fill="#c8c8c8" data-v-5888700d></rect>',11)])])):(q(),J("g",xv,[...s[23]||(s[23]=[sn('<path d="M12 57 Q7 59 4 65" stroke="#9aa4ad" stroke-width="2.4" fill="none" stroke-linecap="round" data-v-5888700d></path><rect x="11" y="51" width="16" height="8" rx="1.5" fill="#b8c0c9" data-v-5888700d></rect><rect x="72" y="50" width="12" height="10" rx="3" fill="currentColor" data-v-5888700d></rect><circle cx="80" cy="55" r="2.3" fill="#04151a" data-v-5888700d></circle><rect x="25" y="13" width="50" height="72" rx="9" fill="currentColor" data-v-5888700d></rect><circle cx="50" cy="72" r="9.5" fill="#071317" data-v-5888700d></circle><circle cx="50" cy="72" r="3.8" fill="#0d2730" data-v-5888700d></circle>',7)])]))],8,tv))],6)):qe("",!0),n.allowCycle&&n.info.cycleCat?(q(),J("button",{key:3,class:"fx-arrow fx-arrow-right",onClick:s[2]||(s[2]=Et(h=>t("cycle",n.info.cycleCat,1),["stop"]))},"›")):qe("",!0)]),g("div",yv,[g("div",Sv,xe(n.info.fxView.type),1)])]),g("div",Mv,[n.info.fxHeader?(q(),J("div",bv,xe(n.info.fxHeader),1)):qe("",!0),(q(!0),J(je,null,yt(n.info.rows,(h,f)=>(q(),J("div",{key:f,class:Ke(["lcd-row",{editable:n.editable&&h.key,shake:n.shakeIdx===f}]),onClick:Et(p=>t("row-click",h,f),["stop"])},[g("span",Tv,xe(h.name),1),n.editable&&h.key?(q(),J(je,{key:0},[g("button",{class:"step-btn",onMousedown:Et(p=>t("step",h,-1),["stop","prevent"]),onMouseleave:s[3]||(s[3]=p=>t("step-end"))},"−",40,wv),g("span",Av,xe(h.val),1),g("button",{class:"step-btn",onMousedown:Et(p=>t("step",h,1),["stop","prevent"]),onMouseleave:s[4]||(s[4]=p=>t("step-end"))},"+",40,Cv)],64)):(q(),J("span",Rv,xe(h.val),1))],10,Ev))),128))])])):(q(),J("div",Pv,[(q(!0),J(je,null,yt((l=n.info)==null?void 0:l.rows,(h,f)=>(q(),J("div",{key:f,class:Ke(["lcd-row",{editable:n.editable&&h.key,shake:n.shakeIdx===f}]),onClick:Et(p=>t("row-click",h,f),["stop"])},[g("span",Dv,xe(h.name),1),n.editable&&h.key?(q(),J(je,{key:0},[g("button",{class:"step-btn",onMousedown:Et(p=>t("step",h,-1),["stop","prevent"]),onMouseleave:s[5]||(s[5]=p=>t("step-end"))},"−",40,Iv),g("span",Nv,xe(h.val),1),g("button",{class:"step-btn",onMousedown:Et(p=>t("step",h,1),["stop","prevent"]),onMouseleave:s[6]||(s[6]=p=>t("step-end"))},"+",40,Uv)],64)):(q(),J("span",Fv,xe(h.val),1))],10,Lv))),128)),n.knob.press?(q(),J("div",{key:0,class:Ke(["lcd-press",{clickable:n.editable&&((c=n.info)==null?void 0:c.cycleCat)}]),onClick:s[7]||(s[7]=h=>{var f;return n.editable&&((f=n.info)!=null&&f.cycleCat)?t("cycle",n.info.cycleCat):void 0})},[s[24]||(s[24]=g("span",{class:"press-tag"},"PRESS",-1)),g("span",Ov,xe(n.editable&&((d=n.info)!=null&&d.cycleCat)?"点击切换下一类型":n.knob.press),1)],2)):qe("",!0)]))],2)}}},kv=hi(Bv,[["__scopeId","data-v-5888700d"]]),Hv={class:"pedal-wrap"},Vv={class:"knob-row"},zv={class:"switch-top-label"},Gv={class:"switch-row"},Wv=["onClick"],$v={class:"knob-top-label"},Xv={class:"lbl-main"},qv={key:0,class:"lbl-sub"},Yv={class:"dial"},Kv={class:"tip-bubble"},Jv={class:"knob-row bottom-row"},Zv={class:"switch-top-label"},Qv={class:"switch-row"},jv=["onClick","onMousedown"],e_={class:"knob-top-label"},t_={class:"lbl-main"},n_={key:0,class:"lbl-sub"},i_={class:"dial"},s_={class:"top-line"},r_={class:"lcd-wrap"},a_={class:"lcd-row lcd-ch"},o_={key:0,class:"lcd-cursor"},l_={class:"lcd-row lcd-amp"},c_={key:0,class:"lcd-amp-icon",viewBox:"0 0 112 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u_={class:"indicators"},d_={class:"ind-half"},f_={class:"ind-cell"},h_={class:"ind-cell"},p_={class:"ind-half"},m_={class:"ind-cell"},g_={class:"ind-cell"},v_={class:"pedal-area"},__={class:"footswitches"},x_={class:"fs-wrap"},y_={class:"fs-wrap"},S_={class:"shell-picker"},M_=["title","onClick"],yd="pedalTipCount",b_=2,Sd=780,E_={__name:"JoyoPedal",props:{params:{type:Object,default:null},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},skipAnim:{type:Boolean,default:!1},power:{type:Boolean,default:!1},standby:{type:Boolean,default:!1},theme:{type:String,default:"orange"}},emits:["ready","change","power","update:theme"],setup(n,{emit:e}){const t=n,i=e;function s(){const _=parseInt(localStorage.getItem(yd)||"0",10);return Number.isFinite(_)?_:0}const r=Be(!1);wn(()=>t.params,_=>{_&&s()<b_&&(r.value=!0)},{immediate:!0});function a(){r.value=!1,localStorage.setItem(yd,String(s()+1))}const o=Lt(()=>$a(t.params)),l=Lt(()=>{var u,w;const _=(u=o.value)==null?void 0:u.amp_model;return _&&((w=xr.amp.types[_])==null?void 0:w.icon)||null}),c=Lt(()=>t.power===!0),d=Be(!1);wn(c,(_,u)=>{d.value=_,!_&&u!==void 0&&pe()},{immediate:!0});function h(){i("power",c.value?"off":"on")}function f(){c.value&&(d.value=!d.value)}const p=Be({});Yi.forEach(_=>{p.value[_.id]=ks});const x=Be(!1),b=Be(new Set),v=Be(!1);let m=null;function T(_){const u=o.value;if(!u)return _.min;switch(_.id){case"gain":return u.gain;case"bass":return u.bass;case"mid":return u.mid;case"treble":return u.treble;case"master":return u.master_volume;case"modRate":return u.modulation.rate;case"modDepth":return u.master_volume;case"dlyTime":return u.delay.time_ms;case"dlyMix":return u.delay.mix;case"musicVol":return 50;default:return _.min}}function P(_){return!0}let S=!1;function A(_){if(!o.value)return;const u=JSON.parse(JSON.stringify(o.value));_(u),S=!0,i("change",u)}function E(_,u=1){_&&A(w=>{const F=Sg[_],B=_==="reverb"?nl(w.reverb.type):_==="delay"?w.delay.delay_type:_==="modulation"?w.modulation.type||"Chorus":tl(w.amp_model),Q=F.findIndex(Z=>Z.toLowerCase()===String(B).toLowerCase()),he=F[(Q+u+F.length)%F.length];_==="reverb"?w.reverb.type=he:_==="delay"?w.delay.delay_type=he:_==="modulation"?w.modulation.type=he:w.amp_model=he})}function L(_,u){_.key&&A(w=>{const F=_.key.indexOf("."),B=F>=0?w[_.key.slice(0,F)]:w,Q=F>=0?_.key.slice(F+1):_.key;if(_.key==="amp_misc.hpf"||_.key==="amp_misc.lpf"){const ye=_.key==="amp_misc.hpf",Me=ye?25:1e3,ze=ye?1e3:19e3,Ye=G=>ye?5:G>1e4?1e3:100,Ze=Number(B[Q])||0;Ze===0?(ye&&u>0||!ye&&u<0)&&(B[Q]=ye?Me:ze):ye&&u<0&&Ze<=Me||!ye&&u>0&&Ze>=ze?B[Q]=0:B[Q]=Math.max(Me,Math.min(ze,Ze+Ye(Ze)*u));return}const he=Number(B[Q]),Z=_.step==="freq"?Mg(he):_.step,ce=he+Z*u,_e=Z<1?1:0,Le=parseFloat(ce.toFixed(_e));B[Q]=Math.max(_.min,Math.min(_.max,Le))})}let y=null;function C(_,u){L(_,u),N(),y=setTimeout(()=>{y=setInterval(()=>L(_,u),90)},420),window.addEventListener("mouseup",N,{once:!0})}function N(){y&&(clearTimeout(y),clearInterval(y),y=null),window.removeEventListener("mouseup",N)}ci(N);function O(_){_&&A(u=>{u.channel=_})}function I(){c.value&&(o.value?O(o.value.channel==="Lead"?"Rhythm":"Lead"):Qe.value=Qe.value==="Lead"?"Rhythm":"Lead")}function U(){c.value&&(o.value?O(o.value.channel==="Clean"?"Rhythm":"Clean"):Qe.value=Qe.value==="Clean"?"Rhythm":"Clean")}function k(_){const u=o.value;if(!u)return"";switch(_.id){case"dlyTime":return(u.delay.enabled&&!u.reverb.enabled?u.delay.delay_type:nl(u.reverb.type))||"None";case"dlyMix":return u.delay.delay_type||"None";case"modRate":return u.modulation.type||"None";case"modDepth":return tl(u.amp_model)||"None"}const w=T(_);return(_.min<0&&w>0?"+":"")+w+(_.unit||"")}function V(_,u,w){const F=u*5+w,B=b.value.has(_.id),Q=x.value&&b.value.size===0?80+F*130:0;return{transform:`rotate(${p.value[_.id]}deg)`,transition:B?"transform 0.2s ease-out":x.value?"transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)":"none",transitionDelay:Q+"ms"}}let X=0;wn(()=>t.params,async _=>{if(S&&(S=!1,_)){const F={...p.value},B=new Set;Yi.forEach(Q=>{if(jo.has(Q.id)){F[Q.id]=el;return}const he=Math.min(Q.max,Math.max(Q.min,T(Q))),Z=ks+(he-Q.min)/(Q.max-Q.min)*Qo;Math.abs(p.value[Q.id]-Z)>.01&&B.add(Q.id),F[Q.id]=Z}),b.value=B,p.value=F;return}if(_&&t.skipAnim){m&&(clearTimeout(m),m=null);const F={};Yi.forEach(B=>{if(jo.has(B.id)){F[B.id]=el;return}const Q=Math.min(B.max,Math.max(B.min,T(B)));F[B.id]=ks+(Q-B.min)/(B.max-B.min)*Qo}),b.value=new Set(Yi.map(B=>B.id)),p.value=F,x.value=!1,v.value=!0,i("ready");return}b.value=new Set;const u=++X;if(m&&(clearTimeout(m),m=null),!_){v.value=!1,b.value=new Set,x.value=!1;const F={};Yi.forEach(B=>{F[B.id]=ks}),p.value=F;return}v.value=!1,x.value=!1;const w={};Yi.forEach(F=>{w[F.id]=ks}),p.value=w,await ei(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{if(u!==X)return;const F={};Yi.forEach(B=>{if(jo.has(B.id)){F[B.id]=el;return}const Q=Math.min(B.max,Math.max(B.min,T(B)));F[B.id]=ks+(Q-B.min)/(B.max-B.min)*Qo}),p.value=F,x.value=!0,m=setTimeout(()=>{u===X&&(v.value=!0,i("ready"))},3200)})})},{immediate:!0});function W(_){_.key==="Escape"&&ke.value&&(ke.value=null)}zi(()=>{document.addEventListener("keydown",W),Re=new ResizeObserver(Ue),Re.observe(j.value),window.addEventListener("resize",Ue),Ue()}),ci(()=>{m&&clearTimeout(m),document.removeEventListener("keydown",W),window.removeEventListener("resize",Ue),Re==null||Re.disconnect()});const j=Be(null),te=Be(null),le=Be(1),de=Be(0);let Re=null;function Ue(){var he;const _=((he=j.value)==null?void 0:he.clientWidth)||0;if(!_||!te.value)return;const w=Math.max(.35,_/Sd)*.92,F=Sd*w,B=(_-F)/2,Q=te.value.offsetHeight;Math.abs(w-le.value)<.005&&Math.abs(B-de.value)<.5||(le.value=w,de.value=B,j.value.style.height=Math.round(Q*w)+"px")}const ct=Be(!1),nt=Be(!1);wn(o,_=>{_&&(ct.value=!!_.modulation.enabled||!!_.delay.enabled,nt.value=!!_.delay.enabled||!!_.reverb.enabled)},{immediate:!0});const Qe=Be("Clean"),ie=Lt(()=>{var u;const _=((u=o.value)==null?void 0:u.channel)||(c.value?Qe.value:"");return _?_==="Clean"?{drive:"RHYTHM",channel:"CLEAN"}:_==="Lead"?{drive:"LEAD",channel:"DRIVE"}:{drive:"RHYTHM",channel:"DRIVE"}:{drive:"",channel:""}}),ue=Lt(()=>t.theme||"orange"),Ce=Lt(()=>{const _=_d[ue.value];return{"--sh1":_.shell[0],"--sh2":_.shell[1],"--sh3":_.shell[2],"--sh4":_.shell[3],"--sh5":_.shell[4],"--ar1":_.area[0],"--ar2":_.area[1],"--ar3":_.area[2],"--ar4":_.area[3],"--joyo-stroke":_.stroke,"--accent":_.accent}}),ke=Be(null),Te=Be(!1),R=Lt(()=>ke.value&&Yi.find(_=>_.id===ke.value)||null),H=Lt(()=>R.value?be(R.value):null),$=Be(null);let ae=null;function re(_,u){t.editable||!_.key||($.value=u,ae&&clearTimeout(ae),ae=setTimeout(()=>{$.value=null},400))}function se(_){c.value&&($.value=null,ke.value===_.id?(ke.value=null,Te.value=!1):(ke.value=_.id,Te.value=!1))}function pe(){ke.value=null,Te.value=!1,$.value=null}let me=null;const ve=Be(!1);function oe(_){_.id==="modDepth"&&(ve.value=!1,me&&clearTimeout(me),me=setTimeout(()=>{me=null,ve.value=!0,Se()},500))}function Ee(){me&&(clearTimeout(me),me=null)}function D(_){if(ve.value){ve.value=!1;return}se(_)}function Se(){ke.value==="modDepth"?Te.value=!Te.value:(ke.value="modDepth",Te.value=!0)}function be(_){const u=o.value||Kl,w=(Q,he,Z,ce,_e,Le)=>({name:Q,val:he,key:Z,step:ce,min:_e,max:Le}),F=Q=>Math.round(Q/500*20)*5,B={label:_.label,sub:_.sub,value:k(_),unit:_.unit||"",press:_.press,enabled:P(),rows:[],fxView:null,fxHeader:null,cycleCat:null};if(_.kind==="main")switch(_.id){case"master":B.rows=[w("GUITAR VOL",u.master_volume+"%","master_volume",5,0,100),{name:"SOURCE",val:"Input"}];break;case"musicVol":B.rows=[{name:"MUSIC VOL",val:"50%"},{name:"SOURCE",val:"Bluetooth"}];break;case"bass":B.rows=[w("BASS",(u.bass>0?"+":"")+u.bass+" dB","bass",1,-12,12),{name:"SAVE",val:"长按保存预设"}];break;case"mid":B.rows=[w("MID",(u.mid>0?"+":"")+u.mid+" dB","mid",1,-12,12),{name:"TUNER",val:"按下开启调音器"}];break;case"treble":B.rows=[w("TREBLE",(u.treble>0?"+":"")+u.treble+" dB","treble",1,-12,12),{name:"DRUM CTRL",val:"按下控制鼓机"}];break;case"gain":B.rows=[w("GAIN",u.gain+"%","gain",5,0,100),{name:"QUIT",val:"按下退出菜单"}];break;case"modDepth":{const Q=tl(u.amp_model),he=xr.amp.types[Q]||xr.amp.types["65 Black Nor"];if(B.fxView={title:xr.amp.title,type:Q,icon:he.icon,color:he.color,vb:he.vb,cat:"amp",on:!0,togglable:!1},Te.value){B.fxHeader="AMP MISC",B.rows=[w("PHASE.IN",u.amp_misc.phase_in?"Inv":"Nor","amp_misc.phase_in",1,0,1),w("PHASE.OUT",u.amp_misc.phase_out?"Inv":"Nor","amp_misc.phase_out",1,0,1),w("TREB.FC",u.amp_misc.treb_fc+"Hz","amp_misc.treb_fc","freq",50,2e4),w("MIDD.FC",u.amp_misc.midd_fc+"Hz","amp_misc.midd_fc","freq",50,2e4),w("MIDD.Q",u.amp_misc.midd_q.toFixed(1),"amp_misc.midd_q",.1,.1,10),w("BASS.FC",u.amp_misc.bass_fc+"Hz","amp_misc.bass_fc","freq",50,2e4)];break}B.fxHeader="AMPLIFIER",B.cycleCat="amp",B.rows=[w("CH VOL",u.master_volume+"%","master_volume",5,0,100),w("HPF",u.amp_misc.hpf?u.amp_misc.hpf+"Hz":"OFF","amp_misc.hpf",5,25,1e3),w("LPF",u.amp_misc.lpf?u.amp_misc.lpf+"Hz":"OFF","amp_misc.lpf","lpf",1e3,19e3),w("HIGH",(u.amp_high>0?"+":"")+u.amp_high+" dB","amp_high",1,-12,12),w("MID",(u.amp_mid>0?"+":"")+u.amp_mid+" dB","amp_mid",1,-12,12),w("LOW",(u.amp_low>0?"+":"")+u.amp_low+" dB","amp_low",1,-12,12)];break}}else{let Q=_.fx||null;if(_.id==="dlyTime"&&(Q=u.delay.enabled&&!u.reverb.enabled?"delay":"reverb"),Q){const he=xr[Q];let Z="---";Q==="reverb"?Z=nl(u.reverb.type):Q==="delay"?Z=u.delay.delay_type:Z=u.modulation.type&&String(u.modulation.type).toLowerCase()!=="none"?u.modulation.type:"Chorus";const ce=Object.keys(he.types).find(ye=>ye.toLowerCase()===String(Z).toLowerCase()),_e=ce?he.types[ce]:Q==="reverb"?he.types.Hall:Q==="modulation"&&!Z?{icon:"",color:"#7fd8ff",vb:"0 0 100 100"}:{icon:"pedal",color:"#7fd8ff",vb:"0 0 100 100"},Le=Q==="reverb"?!!u.reverb.enabled:Q==="delay"?!!u.delay.enabled:!!u.modulation.enabled;B.fxView={title:he.title,type:Z,icon:_e.icon,color:_e.color,vb:_e.vb,cat:Q,on:Le,togglable:!0},B.cycleCat=Q}Q==="modulation"?(B.fxHeader="MODULATION",B.rows=[w("RATE",u.modulation.rate+"%","modulation.rate",5,0,100),w("DEPTH",u.modulation.depth+"%","modulation.depth",5,0,100)]):Q==="delay"?_.id==="dlyMix"?(B.fxHeader="DELAY",B.rows=[w("MIX",u.delay.mix+"%","delay.mix",5,0,100),w("TIME",F(u.delay.time_ms)+"%","delay.time_ms",25,0,500),w("F.BACK",u.delay.feedback+"%","delay.feedback",5,0,100)]):B.rows=[{name:"TYPE",val:u.delay.delay_type},w("TIME",u.delay.time_ms+" ms","delay.time_ms",10,0,500),w("FEEDBACK",u.delay.feedback+"%","delay.feedback",5,0,100),w("MIX",u.delay.mix+"%","delay.mix",5,0,100)]:Q==="reverb"&&(B.fxHeader="REVERB",B.rows=[w("MIX",u.reverb.mix+"%","reverb.mix",5,0,100),w("DECAY",u.reverb.decay+"%","reverb.decay",5,0,100)])}return B}return(_,u)=>(q(),J("div",Hv,[g("div",{ref_key:"fitEl",ref:j,class:"pedal-fit"},[g("div",{ref_key:"stageEl",ref:te,class:"pedal-stage",style:On({transform:`translateX(${de.value}px) scale(${le.value})`})},[g("div",{class:Ke(["pedal",{off:!c.value}]),style:On(Ce.value)},[u[21]||(u[21]=sn('<div class="grille-top" data-v-af9c7bb1><div class="grille-mesh" data-v-af9c7bb1></div><div class="curve-highlight" data-v-af9c7bb1></div><svg class="grille-joyo-svg" viewBox="0 0 440 100" xmlns="http://www.w3.org/2000/svg" data-v-af9c7bb1><defs data-v-af9c7bb1><pattern id="mesh-dark" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" data-v-af9c7bb1><rect width="4" height="4" fill="#0a0807" data-v-af9c7bb1></rect><circle cx="2" cy="2" r="1" fill="#3a332d" opacity="0.45" data-v-af9c7bb1></circle><circle cx="1.5" cy="4.5" r="0.5" fill="#060504" opacity="0.45" data-v-af9c7bb1></circle></pattern><filter id="joyo-grain" x="-10%" y="-20%" width="120%" height="140%" data-v-af9c7bb1><feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="10" seed="5" result="noise" data-v-af9c7bb1></feTurbulence><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" result="grainy" data-v-af9c7bb1></feDisplacementMap><feDropShadow in="grainy" dx="0" dy="1" stdDeviation="0" flood-color="#fff" flood-opacity="0.18" data-v-af9c7bb1></feDropShadow><feDropShadow dx="0" dy="-1" stdDeviation="0" flood-color="#000" flood-opacity="0.8" data-v-af9c7bb1></feDropShadow></filter></defs><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial Black, Impact, sans-serif" font-size="62" font-weight="900" letter-spacing="10" fill="url(#mesh-dark)" filter="url(#joyo-grain)" data-v-af9c7bb1>JOYO</text></svg></div>',1)),g("div",{class:"panel",onClick:pe},[g("div",Vv,[(q(!0),J(je,null,yt(Je(xg),(w,F)=>(q(),J(je,{key:F},[w.type==="switch"?(q(),J("div",{key:0,class:Ke(["switch-cell",{"is-on":c.value}])},[g("div",zv,[u[5]||(u[5]=g("span",null,"POWER",-1)),g("span",{class:Ke(["ind-led lead",{on:c.value}])},null,2)]),g("div",Gv,[g("div",{class:Ke(["toggle-switch",{on:c.value}]),onClick:Et(h,["stop"])},[...u[6]||(u[6]=[g("span",{class:"lever"},null,-1)])],2),u[7]||(u[7]=g("div",{class:"switch-labels"},[g("span",{class:"on-lbl"},"ON"),g("span",{class:"off-lbl"},"OFF")],-1))])],2)):(q(),J("div",{key:1,class:"knob",onClick:Et(B=>se(w),["stop"])},[g("div",$v,[g("span",Xv,xe(w.label),1),w.sub?(q(),J("span",qv,"/"+xe(w.sub),1)):qe("",!0)]),g("div",Yv,[g("div",{class:"cap",style:On(V(w,0,Je(Es).indexOf(w)))},[...u[8]||(u[8]=[g("span",{class:"pointer"},null,-1)])],4),r.value&&w.id==="master"?(q(),J("div",{key:0,class:"knob-tip",onClick:u[0]||(u[0]=Et(()=>{},["stop"]))},[u[10]||(u[10]=g("span",{class:"tip-ring"},null,-1)),g("div",Kv,[u[9]||(u[9]=g("span",{class:"tip-text"},"👆 点击旋钮查看参数",-1)),g("button",{class:"tip-close",onClick:Et(a,["stop"])},"知道了")])])):qe("",!0)]),g("div",{class:Ke(["knob-value",{small:(k(w)||"").length>5}])},xe(k(w)),3)],8,Wv))],64))),128))]),g("div",Jv,[(q(!0),J(je,null,yt(Je(yg),(w,F)=>(q(),J(je,{key:F},[w.type==="switch"?(q(),J("div",{key:0,class:Ke(["switch-cell",{"is-on":d.value}])},[g("div",Zv,[u[11]||(u[11]=g("svg",{class:"bt-icon",viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"})],-1)),g("span",{class:Ke(["ind-led clean",{on:d.value}])},null,2)]),g("div",Qv,[g("div",{class:Ke(["toggle-switch",{on:d.value}]),onClick:Et(f,["stop"])},[...u[12]||(u[12]=[g("span",{class:"lever"},null,-1)])],2),u[13]||(u[13]=g("div",{class:"switch-labels"},[g("span",{class:"on-lbl"},"ON"),g("span",{class:"off-lbl"},"OFF")],-1))])],2)):(q(),J("div",{key:1,class:Ke(["knob",{disabled:!1}]),onClick:Et(B=>D(w),["stop"]),onMousedown:Et(B=>oe(w),["stop"]),onMouseup:Ee,onMouseleave:Ee,onContextmenu:u[1]||(u[1]=Et(()=>{},["prevent"]))},[g("div",e_,[g("span",t_,xe(w.label),1),w.sub?(q(),J("span",n_,"/"+xe(w.sub),1)):qe("",!0)]),g("div",i_,[g("div",{class:"cap",style:On(V(w,1,Je(Ts).indexOf(w)))},[...u[14]||(u[14]=[g("span",{class:"pointer"},null,-1)])],4)]),g("div",{class:Ke(["knob-value",{small:(k(w)||"").length>5}])},xe(k(w)),3)],42,jv))],64))),128))])]),g("div",{class:"display",onClick:u[2]||(u[2]=Et(()=>{},["stop"]))},[g("div",s_,[u[16]||(u[16]=g("div",{class:"joyo-badge"},"JOYO",-1)),g("div",r_,[g("div",{class:Ke(["lcd",{busy:n.loading&&!n.params,idle:!n.params&&!n.loading}])},[g("div",a_,[u[15]||(u[15]=Vn(" CHANNEL: ",-1)),g("b",null,xe(n.params?n.params.channel.toUpperCase():"---"),1),n.loading&&!n.params?(q(),J("span",o_,"▮")):qe("",!0)]),g("div",l_,xe(n.loading&&!n.params?"ANALYZING...":n.params?n.params.amp_model.toUpperCase():"STANDBY"),1),n.params&&l.value?(q(),J("svg",c_,[dt(Nh,{icon:l.value},null,8,["icon"])])):qe("",!0)],2),R.value?(q(),us(kv,{key:0,knob:R.value,info:H.value,editable:n.editable,"allow-cycle":n.editable||n.standby,"shake-idx":$.value,onClose:pe,onRowClick:re,onStep:C,onStepEnd:N,onCycle:E},null,8,["knob","info","editable","allow-cycle","shake-idx"])):qe("",!0)]),u[17]||(u[17]=g("div",{class:"model-name"},[Vn("JAM BUDDY "),g("i",null,"II")],-1))]),g("div",u_,[g("div",d_,[g("div",f_,[g("span",{class:Ke(["cm-lbl rhythm",{on:ie.value.drive==="RHYTHM"}])},"RHYTHM",2),g("span",{class:Ke(["ind-led rhythm",{on:ie.value.drive==="RHYTHM"}])},null,2)]),g("div",h_,[g("span",{class:Ke(["cm-lbl lead",{on:ie.value.drive==="LEAD"}])},"LEAD",2),g("span",{class:Ke(["ind-led lead",{on:ie.value.drive==="LEAD"}])},null,2)]),u[18]||(u[18]=g("span",{class:"group-name"},"DRIVE MODE",-1))]),g("div",p_,[g("div",m_,[g("span",{class:Ke(["cm-lbl drive",{on:ie.value.channel==="DRIVE"}])},"DRIVE",2),g("span",{class:Ke(["ind-led drive",{on:ie.value.channel==="DRIVE"}])},null,2)]),g("div",g_,[g("span",{class:Ke(["cm-lbl clean",{on:ie.value.channel==="CLEAN"}])},"CLEAN",2),g("span",{class:Ke(["ind-led clean",{on:ie.value.channel==="CLEAN"}])},null,2)]),u[19]||(u[19]=g("span",{class:"group-name"},"CHANNEL",-1))])]),u[20]||(u[20]=sn('<div class="looper" data-v-af9c7bb1><svg class="line" viewBox="0 0 400 30" preserveAspectRatio="none" data-v-af9c7bb1><path d="M 400 4 L 80 4 Q 0 4 0 20" stroke="#f0f0f0" stroke-width="2" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke" data-v-af9c7bb1></path></svg><span class="looper-text" data-v-af9c7bb1>LOOPER CONTROL</span><svg class="line" viewBox="0 0 400 30" preserveAspectRatio="none" data-v-af9c7bb1><path d="M 0 4 L 320 4 Q 400 4 400 20" stroke="#f0f0f0" stroke-width="2" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke" data-v-af9c7bb1></path></svg></div>',1))]),g("div",v_,[g("div",__,[g("div",x_,[g("div",{class:Ke(["fs-slot",{on:ct.value}])},[g("div",{class:Ke(["fs",{clickable:c.value}]),onClick:u[3]||(u[3]=w=>c.value?I():void 0)},null,2)],2)]),g("div",y_,[g("div",{class:Ke(["fs-slot",{on:nt.value}])},[g("div",{class:Ke(["fs",{clickable:c.value}]),onClick:u[4]||(u[4]=w=>c.value?U():void 0)},null,2)],2)])])])],6),g("div",S_,[(q(!0),J(je,null,yt(Je(_d),(w,F)=>(q(),J("span",{key:F,class:Ke(["sp-dot",{active:ue.value===F}]),style:On({background:w.shell[2],borderColor:ue.value===F?"#fff":"rgba(255,255,255,0.3)"}),title:w.name,onClick:B=>i("update:theme",F)},null,14,M_))),128))])],4)],512)]))}},T_=hi(E_,[["__scopeId","data-v-af9c7bb1"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="186",w_=0,Md=1,A_=2,Xa=1,C_=2,Pr=3,Ls=0,fn=1,Ai=2,Pi=0,Br=1,bd=2,Ed=3,Td=4,R_=5,nr=100,P_=101,L_=102,D_=103,I_=104,N_=200,U_=201,F_=202,O_=203,Uh=204,Fh=205,B_=206,k_=207,H_=208,V_=209,z_=210,G_=211,W_=212,$_=213,X_=214,Jl=0,Zl=1,Ql=2,Yr=3,jl=4,ec=5,tc=6,nc=7,Oh=0,q_=1,Y_=2,ai=0,Bh=1,kh=2,Hh=3,Vh=4,zh=5,Gh=6,Wh=7,$h=300,Ds=301,ur=302,il=303,sl=304,Io=306,ic=1e3,Ri=1001,sc=1002,Wt=1003,K_=1004,ga=1005,$t=1006,rl=1007,As=1008,En=1009,Xh=1010,qh=1011,Kr=1012,iu=1013,ui=1014,kn=1015,di=1016,su=1017,ru=1018,Jr=1020,Yh=35902,Kh=35899,Jh=1021,Zh=1022,An=1023,Bi=1026,Cs=1027,Qh=1028,au=1029,Is=1030,ou=1031,lu=1033,qa=33776,Ya=33777,Ka=33778,Ja=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,uc=37492,dc=37496,fc=37488,hc=37489,uo=37490,pc=37491,mc=37808,gc=37809,vc=37810,_c=37811,xc=37812,yc=37813,Sc=37814,Mc=37815,bc=37816,Ec=37817,Tc=37818,wc=37819,Ac=37820,Cc=37821,Rc=36492,Pc=36494,Lc=36495,Dc=36283,Ic=36284,fo=36285,Nc=36286,J_=3200,wd=0,Z_=1,Ci="",bn="srgb",ho="srgb-linear",po="linear",Mt="srgb",al=7680,Q_=519,j_=512,ex=513,tx=514,cu=515,nx=516,ix=517,uu=518,sx=519,rx=35044,Ad="300 es",si=2e3,mo=2001;function ax(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ox(){const n=go("canvas");return n.style.display="block",n}const Cd={};function Rd(...n){const e="THREE."+n.shift();console.log(e,...n)}function jh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=jh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ht(...n){n=jh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function or(...n){const e=n.join(" ");e in Cd||(Cd[e]=!0,et(...n))}function lx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const cx={[Jl]:Zl,[Ql]:tc,[jl]:nc,[Yr]:ec,[Zl]:Jl,[tc]:Ql,[nc]:jl,[ec]:Yr};class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Uc=180/Math.PI;function ia(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,e){return(n%e+e)%e}function ll(n,e,t){return(1-t)*n+t*e}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _u=class _u{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_u.prototype.isVector2=!0;let ft=_u;class fr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],f=r[a+0],p=r[a+1],x=r[a+2],b=r[a+3];if(h!==b||l!==f||c!==p||d!==x){let v=l*f+c*p+d*x+h*b;v<0&&(f=-f,p=-p,x=-x,b=-b,v=-v);let m=1-o;if(v<.9995){const T=Math.acos(v),P=Math.sin(T);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P,l=l*m+f*o,c=c*m+p*o,d=d*m+x*o,h=h*m+b*o}else{l=l*m+f*o,c=c*m+p*o,d=d*m+x*o,h=h*m+b*o;const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[a],f=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+d*h+l*p-c*f,e[t+1]=l*x+d*f+c*h-o*p,e[t+2]=c*x+d*p+o*f-l*h,e[t+3]=d*x-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xu=class xu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*d,this.y=i+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;let ee=xu;const cl=new ee,Pd=new fr,yu=class yu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],b=s[0],v=s[3],m=s[6],T=s[1],P=s[4],S=s[7],A=s[2],E=s[5],L=s[8];return r[0]=a*b+o*T+l*A,r[3]=a*v+o*P+l*E,r[6]=a*m+o*S+l*L,r[1]=c*b+d*T+h*A,r[4]=c*v+d*P+h*E,r[7]=c*m+d*S+h*L,r[2]=f*b+p*T+x*A,r[5]=f*v+p*P+x*E,r[8]=f*m+p*S+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*r,p=c*r-a*l,x=t*h+i*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(s*c-d*i)*b,e[2]=(o*i-s*a)*b,e[3]=f*b,e[4]=(d*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ul.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yu.prototype.isMatrix3=!0;let tt=yu;const ul=new tt,Ld=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){const n={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ho]:{primaries:e,whitePoint:i,transfer:po,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const ot=dx();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class fx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=go("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hx=0;class du{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dl(s[a].image)):r.push(dl(s[a]))}else r=dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let px=0;const fl=new ee;class Qt extends Us{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=Ri,s=Ri,r=$t,a=As,o=An,l=En,c=Qt.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ia(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=$h;Qt.DEFAULT_ANISOTROPY=1;const Su=class Su{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],b=l[2],v=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-b)<.01&&Math.abs(x-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+b)<.1&&Math.abs(x+v)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,S=(p+1)/2,A=(m+1)/2,E=(d+f)/4,L=(h+b)/4,y=(x+v)/4;return P>S&&P>A?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=E/i,r=L/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=y/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=L/r,s=y/r),this.set(i,s,r,t),this}let T=Math.sqrt((v-x)*(v-x)+(h-b)*(h-b)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(v-x)/T,this.y=(h-b)/T,this.z=(f-d)/T,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Su.prototype.isVector4=!0;let Dt=Su;class mx extends Us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Qt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new du(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends mx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gx extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const _o=class _o{constructor(e,t,i,s,r,a,o,l,c,d,h,f,p,x,b,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,h,f,p,x,b,v)}set(e,t,i,s,r,a,o,l,c,d,h,f,p,x,b,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=f,m[3]=p,m[7]=x,m[11]=b,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*d,p=a*h,x=o*d,b=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=c*d,b=c*h;t[0]=f+b*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-x,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=c*d,b=c*h;t[0]=f-b*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*d,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,x=o*d,b=o*h;t[0]=l*d,t[4]=x*c-p,t[8]=f*c+b,t[1]=l*h,t[5]=b*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*d,t[4]=b-f*h,t[8]=x*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+x,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+b,t[5]=a*d,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*d,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,_x)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ki.crossVectors(i,hn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ki.crossVectors(i,hn)),Ki.normalize(),va.crossVectors(hn,Ki),s[0]=Ki.x,s[4]=va.x,s[8]=hn.x,s[1]=Ki.y,s[5]=va.y,s[9]=hn.y,s[2]=Ki.z,s[6]=va.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],b=i[6],v=i[10],m=i[14],T=i[3],P=i[7],S=i[11],A=i[15],E=s[0],L=s[4],y=s[8],C=s[12],N=s[1],O=s[5],I=s[9],U=s[13],k=s[2],V=s[6],X=s[10],W=s[14],j=s[3],te=s[7],le=s[11],de=s[15];return r[0]=a*E+o*N+l*k+c*j,r[4]=a*L+o*O+l*V+c*te,r[8]=a*y+o*I+l*X+c*le,r[12]=a*C+o*U+l*W+c*de,r[1]=d*E+h*N+f*k+p*j,r[5]=d*L+h*O+f*V+p*te,r[9]=d*y+h*I+f*X+p*le,r[13]=d*C+h*U+f*W+p*de,r[2]=x*E+b*N+v*k+m*j,r[6]=x*L+b*O+v*V+m*te,r[10]=x*y+b*I+v*X+m*le,r[14]=x*C+b*U+v*W+m*de,r[3]=T*E+P*N+S*k+A*j,r[7]=T*L+P*O+S*V+A*te,r[11]=T*y+P*I+S*X+A*le,r[15]=T*C+P*U+S*W+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],b=e[7],v=e[11],m=e[15],T=l*p-c*f,P=o*p-c*h,S=o*f-l*h,A=a*p-c*d,E=a*f-l*d,L=a*h-o*d;return t*(b*T-v*P+m*S)-i*(x*T-v*A+m*E)+s*(x*P-b*A+m*L)-r*(x*S-b*E+v*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],b=e[13],v=e[14],m=e[15],T=t*o-i*a,P=t*l-s*a,S=t*c-r*a,A=i*l-s*o,E=i*c-r*o,L=s*c-r*l,y=d*b-h*x,C=d*v-f*x,N=d*m-p*x,O=h*v-f*b,I=h*m-p*b,U=f*m-p*v,k=T*U-P*I+S*O+A*N-E*C+L*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/k;return e[0]=(o*U-l*I+c*O)*V,e[1]=(s*I-i*U-r*O)*V,e[2]=(b*L-v*E+m*A)*V,e[3]=(f*E-h*L-p*A)*V,e[4]=(l*N-a*U-c*C)*V,e[5]=(t*U-s*N+r*C)*V,e[6]=(v*S-x*L-m*P)*V,e[7]=(d*L-f*S+p*P)*V,e[8]=(a*I-o*N+c*y)*V,e[9]=(i*N-t*I-r*y)*V,e[10]=(x*E-b*S+m*T)*V,e[11]=(h*S-d*E-p*T)*V,e[12]=(o*C-a*O-l*y)*V,e[13]=(t*O-i*C+s*y)*V,e[14]=(b*P-x*A-v*T)*V,e[15]=(d*A-h*P+f*T)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,f=r*c,p=r*d,x=r*h,b=a*d,v=a*h,m=o*h,T=l*c,P=l*d,S=l*h,A=i.x,E=i.y,L=i.z;return s[0]=(1-(b+m))*A,s[1]=(p+S)*A,s[2]=(x-P)*A,s[3]=0,s[4]=(p-S)*E,s[5]=(1-(f+m))*E,s[6]=(v+T)*E,s[7]=0,s[8]=(x+P)*L,s[9]=(v-T)*L,s[10]=(1-(f+b))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length();const o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);const c=1/a,d=1/o,h=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=si,l=!1){const c=this.elements,d=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===si)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===mo)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=si,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===si)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===mo)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};_o.prototype.isMatrix4=!0;let Ot=_o;const Vs=new ee,In=new Ot,vx=new ee(0,0,0),_x=new ee(1,1,1),Ki=new ee,va=new ee,hn=new ee,Id=new Ot,Nd=new fr;class Ns{constructor(e=0,t=0,i=0,s=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const Ud=new ee,zs=new fr,vi=new Ot,_a=new ee,Sr=new ee,yx=new ee,Sx=new fr,Fd=new ee(1,0,0),Od=new ee(0,1,0),Bd=new ee(0,0,1),kd={type:"added"},Mx={type:"removed"},Gs={type:"childadded",child:null},hl={type:"childremoved",child:null};class vn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new ee,t=new Ns,i=new fr,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new tt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Sr,_a,this.up):vi.lookAt(_a,Sr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(vi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mx),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new ee(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,i),m=this._getHandJoint(c,b);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ya={h:0,s:0,l:0};function ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=ux(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ml(a,r,e+1/3),this.g=ml(a,r,e),this.b=ml(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=bn){ot.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ya);const i=ll(Ji.h,ya.h,t),s=ll(Ji.s,ya.s,t),r=ll(Ji.l,ya.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new gt;gt.NAMES=np;class Ex extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ns,this.environmentIntensity=1,this.environmentRotation=new Ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new ee,_i=new ee,gl=new ee,xi=new ee,Ws=new ee,$s=new ee,Hd=new ee,vl=new ee,_l=new ee,xl=new ee,yl=new Dt,Sl=new Dt,Ml=new Dt;class Bn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),_i.subVectors(i,t),gl.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(_i),l=Nn.dot(gl),c=_i.dot(_i),d=_i.dot(gl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,x=(a*d-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return yl.setScalar(0),Sl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yl,r.x),a.addScaledVector(Sl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),_i.subVectors(e,t),Nn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Nn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ws.subVectors(s,i),$s.subVectors(r,i),vl.subVectors(e,i);const l=Ws.dot(vl),c=$s.dot(vl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,s);const d=Ws.dot(_l),h=$s.dot(_l);if(d>=0&&h<=d)return t.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Ws,a);xl.subVectors(e,r);const p=Ws.dot(xl),x=$s.dot(xl);if(x>=0&&p<=x)return t.copy(r);const b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector($s,o);const v=d*x-p*h;if(v<=0&&h-d>=0&&p-x>=0)return Hd.subVectors(r,s),o=(h-d)/(h-d+(p-x)),t.copy(s).addScaledVector(Hd,o);const m=1/(v+b+f);return a=b*m,o=f*m,t.copy(i).addScaledVector(Ws,a).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sa{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Ma.subVectors(this.max,Mr),Xs.subVectors(e.a,Mr),qs.subVectors(e.b,Mr),Ys.subVectors(e.c,Mr),Zi.subVectors(qs,Xs),Qi.subVectors(Ys,qs),gs.subVectors(Xs,Ys);let t=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-gs.y,gs.x,0];return!bl(t,Xs,qs,Ys,Ma)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Xs,qs,Ys,Ma))?!1:(ba.crossVectors(Zi,Qi),t=[ba.x,ba.y,ba.z],bl(t,Xs,qs,Ys,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Un=new ee,Sa=new sa,Xs=new ee,qs=new ee,Ys=new ee,Zi=new ee,Qi=new ee,gs=new ee,Mr=new ee,Ma=new ee,ba=new ee,vs=new ee;function bl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vs.fromArray(n,r);const o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),d=i.dot(vs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ft=new ee,Ea=new ft;let Tx=0;class Di extends Us{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rx,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ip extends Di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends Di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ii extends Di{constructor(e,t,i){super(new Float32Array(e),t,i)}}const wx=new sa,br=new ee,El=new ee;class fu{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(El)),this.expandByPoint(br.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ax=0;const yn=new Ot,Tl=new vn,Ks=new ee,pn=new sa,Er=new sa,Vt=new ee;class Gi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?sp:ip)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ii(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,Er.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,Er.max),pn.expandByPoint(Vt)):(pn.expandByPoint(Er.min),pn.expandByPoint(Er.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Vt.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(e,c),Vt.add(Ks)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new ee,l[y]=new ee;const c=new ee,d=new ee,h=new ee,f=new ft,p=new ft,x=new ft,b=new ee,v=new ee;function m(y,C,N){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,N),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(O),v.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(O),o[y].add(b),o[C].add(b),o[N].add(b),l[y].add(v),l[C].add(v),l[N].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let y=0,C=T.length;y<C;++y){const N=T[y],O=N.start,I=N.count;for(let U=O,k=O+I;U<k;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const P=new ee,S=new ee,A=new ee,E=new ee;function L(y){A.fromBufferAttribute(s,y),E.copy(A);const C=o[y];P.copy(C),P.sub(A.multiplyScalar(A.dot(C))).normalize(),S.crossVectors(E,C);const O=S.dot(l[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,O)}for(let y=0,C=T.length;y<C;++y){const N=T[y],O=N.start,I=N.count;for(let U=O,k=O+I;U<k;U+=3)L(e.getX(U+0)),L(e.getX(U+1)),L(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new ee,r=new ee,a=new ee,o=new ee,l=new ee,c=new ee,d=new ee,h=new ee;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),b=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,v),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,v),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let b=0,v=l.length;b<v;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*d;for(let m=0;m<d;m++)f[x++]=c[p++]}return new Di(f,d,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new ee,Cx=new ee,Rx=new tt;class is{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wl.subVectors(i,t).cross(Cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rx.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Px=0;class No extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Br,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Fh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new is().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new ee,Al=new ee,Ta=new ee,wa=new ee;class Lx{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Al.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(Al);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=wa.dot(this.direction),l=-wa.dot(Ta),c=wa.lengthSq(),d=Math.abs(1-a*a);let h,f,p,x;if(d>0)if(h=a*l-o,f=a*o-l,x=r*d,h>=0)if(f>=-x)if(f<=x){const b=1/d;h*=b,f*=b,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Al).addScaledVector(Ta,f),p}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,x=t.x-a.x,b=t.y-a.y,v=t.z-a.z,m=i.x-a.x,T=i.y-a.y,P=i.z-a.z,S=Math.abs(l),A=Math.abs(c),E=Math.abs(d);let L,y,C,N,O,I,U,k,V,X,W,j;if(S>=A&&S>=E?(C=l,I=h,V=x,j=m,l>=0?(L=c,y=d,N=f,O=p,U=b,k=v,X=T,W=P):(L=d,y=c,N=p,O=f,U=v,k=b,X=P,W=T)):A>=E?(C=c,I=f,V=b,j=T,c>=0?(L=d,y=l,N=p,O=h,U=v,k=x,X=P,W=m):(L=l,y=d,N=h,O=p,U=x,k=v,X=m,W=P)):(C=d,I=p,V=v,j=P,d>=0?(L=l,y=c,N=h,O=f,U=x,k=b,X=m,W=T):(L=c,y=l,N=f,O=h,U=b,k=x,X=T,W=m)),C===0)return null;const te=L/C,le=y/C,de=1/C,Re=N-te*I,Ue=O-le*I,ct=U-te*V,nt=k-le*V,Qe=X-te*j,ie=W-le*j,ue=Qe*nt-ie*ct,Ce=Re*ie-Ue*Qe,ke=ct*Ue-nt*Re;if(s){if(ue<0||Ce<0||ke<0)return null}else if((ue<0||Ce<0||ke<0)&&(ue>0||Ce>0||ke>0))return null;const Te=ue+Ce+ke;if(Te===0)return null;const R=de*(ue*I+Ce*V+ke*j);return(Te>0?R<0:R>0)?null:this.at(R/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rp extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ns,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vd=new Ot,_s=new Lx,Aa=new fu,zd=new ee,Ca=new ee,Ra=new ee,Pa=new ee,Cl=new ee,La=new ee,Gd=new ee,Da=new ee;class fi extends vn{constructor(e=new Gi,t=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Cl.fromBufferAttribute(h,e),a?La.addScaledVector(Cl,d):La.addScaledVector(Cl.sub(t),d))}t.add(La)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Aa.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Aa,zd)===null||_s.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){const v=f[x],m=a[v.materialIndex],T=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let S=T,A=P;S<A;S+=3){const E=o.getX(S),L=o.getX(S+1),y=o.getX(S+2);s=Ia(this,m,e,i,c,d,h,E,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let v=x,m=b;v<m;v+=3){const T=o.getX(v),P=o.getX(v+1),S=o.getX(v+2);s=Ia(this,a,e,i,c,d,h,T,P,S),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){const v=f[x],m=a[v.materialIndex],T=Math.max(v.start,p.start),P=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let S=T,A=P;S<A;S+=3){const E=S,L=S+1,y=S+2;s=Ia(this,m,e,i,c,d,h,E,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let v=x,m=b;v<m;v+=3){const T=v,P=v+1,S=v+2;s=Ia(this,a,e,i,c,d,h,T,P,S),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Dx(n,e,t,i,s,r,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ls,o),l===null)return null;Da.copy(o),Da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:n}}function Ia(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ca),n.getVertexPosition(l,Ra),n.getVertexPosition(c,Pa);const d=Dx(n,e,t,i,Ca,Ra,Pa,Gd);if(d){const h=new ee;Bn.getBarycoord(Gd,Ca,Ra,Pa,h),s&&(d.uv=Bn.getInterpolatedAttribute(s,o,l,c,h,new ft)),r&&(d.uv1=Bn.getInterpolatedAttribute(r,o,l,c,h,new ft)),a&&(d.normal=Bn.getInterpolatedAttribute(a,o,l,c,h,new ee),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new ee,materialIndex:0};Bn.getNormal(Ca,Ra,Pa,f.normal),d.face=f,d.barycoord=h}return d}class ap extends Qt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Wt,d=Wt,h,f){super(null,a,o,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xs=new fu,Ix=new ft(.5,.5),Na=new ee;class op{constructor(e=new is,t=new is,i=new is,s=new is,r=new is,a=new is){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],p=r[7],x=r[8],b=r[9],v=r[10],m=r[11],T=r[12],P=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,p-d,m-x,A-T).normalize(),s[1].setComponents(c+a,p+d,m+x,A+T).normalize(),s[2].setComponents(c+o,p+h,m+b,A+P).normalize(),s[3].setComponents(c-o,p-h,m-b,A-P).normalize(),i)s[4].setComponents(l,f,v,S).normalize(),s[5].setComponents(c-l,p-f,m-v,A-S).normalize();else if(s[4].setComponents(c-l,p-f,m-v,A-S).normalize(),t===si)s[5].setComponents(c+l,p+f,m+v,A+S).normalize();else if(t===mo)s[5].setComponents(l,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=Ix.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends Qt{constructor(e=[],t=Ds,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nx extends Qt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Qt{constructor(e,t,i=ui,s,r,a,o=Wt,l=Wt,c,d=Bi,h=1){if(d!==Bi&&d!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ux extends Zr{constructor(e,t=ui,i=Ds,s,r,a=Wt,o=Wt,l,c=Bi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cp extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ra extends Gi{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(d,3)),this.setAttribute("uv",new Ii(h,2));function x(b,v,m,T,P,S,A,E,L,y,C){const N=S/L,O=A/y,I=S/2,U=A/2,k=E/2,V=L+1,X=y+1;let W=0,j=0;const te=new ee;for(let le=0;le<X;le++){const de=le*O-U;for(let Re=0;Re<V;Re++){const Ue=Re*N-I;te[b]=Ue*T,te[v]=de*P,te[m]=k,c.push(te.x,te.y,te.z),te[b]=0,te[v]=0,te[m]=E>0?1:-1,d.push(te.x,te.y,te.z),h.push(Re/L),h.push(1-le/y),W+=1}}for(let le=0;le<y;le++)for(let de=0;de<L;de++){const Re=f+de+V*le,Ue=f+de+V*(le+1),ct=f+(de+1)+V*(le+1),nt=f+(de+1)+V*le;l.push(Re,Ue,nt),l.push(Ue,ct,nt),j+=6}o.addGroup(p,j,C),p+=j,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class aa extends Gi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,h=e/o,f=t/l,p=[],x=[],b=[],v=[];for(let m=0;m<d;m++){const T=m*f-a;for(let P=0;P<c;P++){const S=P*h-r;x.push(S,-T,0),b.push(0,0,1),v.push(P/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const P=T+c*m,S=T+c*(m+1),A=T+1+c*(m+1),E=T+1+c*m;p.push(P,S,E),p.push(S,A,E)}this.setIndex(p),this.setAttribute("position",new Ii(x,3)),this.setAttribute("normal",new Ii(b,3)),this.setAttribute("uv",new Ii(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Wd(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Wd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const s in i)e[s]=i[s]}return e}function Wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ox={clone:dr,merge:tn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hx extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ua=new ee,Fa=new fr,Jn=new ee;class dp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ua,Fa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ua,Fa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new ee,$d=new ft,Xd=new ft;class Fn extends dp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Xd),t.subVectors(Xd,$d)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hu extends dp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Js=-90,Zs=1;class Gx extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(Js,Zs,e,t);s.layers=this.layers,this.add(s);const r=new Fn(Js,Zs,e,t);r.layers=this.layers,this.add(r);const a=new Fn(Js,Zs,e,t);a.layers=this.layers,this.add(a);const o=new Fn(Js,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Fn(Js,Zs,e,t);l.layers=this.layers,this.add(l);const c=new Fn(Js,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Wx extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mu=class Mu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Mu.prototype.isMatrix2=!0;let qd=Mu;function Yd(n,e,t,i){const s=$x(i);switch(t){case Jh:return n*e;case Qh:return n*e/s.components*s.byteLength;case au:return n*e/s.components*s.byteLength;case Is:return n*e*2/s.components*s.byteLength;case ou:return n*e*2/s.components*s.byteLength;case Zh:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case lu:return n*e*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(n,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case cc:case uc:case fc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dc:case uo:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fo:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(n){switch(n){case En:case Xh:return{byteLength:1,components:1};case Kr:case qh:case di:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case ui:case iu:case kn:return{byteLength:4,components:1};case Yh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xx(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],b=h[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,h[f]=b)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const b=h[p];n.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`#ifdef USE_BATCHING
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
#endif`,ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gy=`#define PI 3.141592653589793
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
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_y=`vec3 transformedNormal = objectNormal;
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
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,By=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ky=`#ifdef USE_ENVMAP
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
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wy=`PhysicalMaterial material;
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
#endif`,$y=`uniform sampler2D dfgLUT;
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
}`,Xy=`
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ky=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
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
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,g1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,O1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
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
}`,eS=`#if DEPTH_PACKING == 3200
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
}`,tS=`#define DISTANCE
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
}`,nS=`#define DISTANCE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#define LAMBERT
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
}`,uS=`#define LAMBERT
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
}`,dS=`#define MATCAP
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
}`,fS=`#define MATCAP
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
}`,hS=`#define NORMAL
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
}`,pS=`#define NORMAL
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
}`,mS=`#define PHONG
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
}`,gS=`#define PHONG
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
}`,vS=`#define STANDARD
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
}`,_S=`#define STANDARD
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
}`,xS=`#define TOON
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
}`,yS=`#define TOON
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
}`,SS=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,bS=`#include <common>
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
}`,ES=`uniform vec3 color;
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
}`,TS=`uniform float rotation;
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
}`,wS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:qx,alphahash_pars_fragment:Yx,alphamap_fragment:Kx,alphamap_pars_fragment:Jx,alphatest_fragment:Zx,alphatest_pars_fragment:Qx,aomap_fragment:jx,aomap_pars_fragment:ey,batching_pars_vertex:ty,batching_vertex:ny,begin_vertex:iy,beginnormal_vertex:sy,bsdfs:ry,iridescence_fragment:ay,bumpmap_pars_fragment:oy,clipping_planes_fragment:ly,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:dy,color_fragment:fy,color_pars_fragment:hy,color_pars_vertex:py,color_vertex:my,common:gy,cube_uv_reflection_fragment:vy,defaultnormal_vertex:_y,displacementmap_pars_vertex:xy,displacementmap_vertex:yy,emissivemap_fragment:Sy,emissivemap_pars_fragment:My,colorspace_fragment:by,colorspace_pars_fragment:Ey,envmap_fragment:Ty,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ay,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:ky,envmap_vertex:Ry,fog_vertex:Py,fog_pars_vertex:Ly,fog_fragment:Dy,fog_pars_fragment:Iy,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Oy,lights_pars_begin:By,lights_toon_fragment:Hy,lights_toon_pars_fragment:Vy,lights_phong_fragment:zy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Wy,lights_physical_pars_fragment:$y,lights_fragment_begin:Xy,lights_fragment_maps:qy,lights_fragment_end:Yy,lightprobes_pars_fragment:Ky,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:jy,map_fragment:e1,map_pars_fragment:t1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:r1,morphinstance_vertex:a1,morphcolor_vertex:o1,morphnormal_vertex:l1,morphtarget_pars_vertex:c1,morphtarget_vertex:u1,normal_fragment_begin:d1,normal_fragment_maps:f1,normal_pars_fragment:h1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:y1,opaque_fragment:S1,packing:M1,premultiplied_alpha_fragment:b1,project_vertex:E1,dithering_fragment:T1,dithering_pars_fragment:w1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:C1,shadowmap_pars_fragment:R1,shadowmap_pars_vertex:P1,shadowmap_vertex:L1,shadowmask_pars_fragment:D1,skinbase_vertex:I1,skinning_pars_vertex:N1,skinning_vertex:U1,skinnormal_vertex:F1,specularmap_fragment:O1,specularmap_pars_fragment:B1,tonemapping_fragment:k1,tonemapping_pars_fragment:H1,transmission_fragment:V1,transmission_pars_fragment:z1,uv_pars_fragment:G1,uv_pars_vertex:W1,uv_vertex:$1,worldpos_vertex:X1,background_vert:q1,background_frag:Y1,backgroundCube_vert:K1,backgroundCube_frag:J1,cube_vert:Z1,cube_frag:Q1,depth_vert:j1,depth_frag:eS,distance_vert:tS,distance_frag:nS,equirect_vert:iS,equirect_frag:sS,linedashed_vert:rS,linedashed_frag:aS,meshbasic_vert:oS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:dS,meshmatcap_frag:fS,meshnormal_vert:hS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:vS,meshphysical_frag:_S,meshtoon_vert:xS,meshtoon_frag:yS,points_vert:SS,points_frag:MS,shadow_vert:bS,shadow_frag:ES,sprite_vert:TS,sprite_frag:wS},Pe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ii={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Oa={r:0,b:0,g:0},AS=new Ot,hp=new tt;hp.set(-1,0,0,0,1,0,0,0,1);function CS(n,e,t,i,s,r){const a=new gt(0);let o=s===!0?0:1,l,c,d=null,h=0,f=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const S=T.backgroundBlurriness>0;P=e.get(P,S)}return P}function x(T){let P=!1;const S=p(T);S===null?v(a,o):S&&S.isColor&&(v(S,1),P=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,P){const S=p(P);S&&(S.isCubeTexture||S.mapping===Io)?(c===void 0&&(c=new fi(new ra(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:dr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AS.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hp),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==Mt,(d!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new fi(new aa(2,2),new Wn({name:"BackgroundMaterial",uniforms:dr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function v(T,P){T.getRGB(Oa,up(n)),t.buffers.color.setClear(Oa.r,Oa.g,Oa.b,P,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,v(a,o)},render:x,addToRenderList:b,dispose:m}}function RS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(O,I,U,k,V){let X=!1;const W=h(O,k,U,I);r!==W&&(r=W,c(r.object)),X=p(O,k,U,V),X&&x(O,k,U,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(O,I,U,k),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function d(O){return n.deleteVertexArray(O)}function h(O,I,U,k){const V=k.wireframe===!0;let X=i[I.id];X===void 0&&(X={},i[I.id]=X);const W=O.isInstancedMesh===!0?O.id:0;let j=X[W];j===void 0&&(j={},X[W]=j);let te=j[U.id];te===void 0&&(te={},j[U.id]=te);let le=te[V];return le===void 0&&(le=f(l()),te[V]=le),le}function f(O){const I=[],U=[],k=[];for(let V=0;V<t;V++)I[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:k,object:O,attributes:{},index:null}}function p(O,I,U,k){const V=r.attributes,X=I.attributes;let W=0;const j=U.getAttributes();for(const te in j)if(j[te].location>=0){const de=V[te];let Re=X[te];if(Re===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(Re=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(Re=O.instanceColor)),de===void 0||de.attribute!==Re||Re&&de.data!==Re.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(O,I,U,k){const V={},X=I.attributes;let W=0;const j=U.getAttributes();for(const te in j)if(j[te].location>=0){let de=X[te];de===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const Re={};Re.attribute=de,de&&de.data&&(Re.data=de.data),V[te]=Re,W++}r.attributes=V,r.attributesNum=W,r.index=k}function b(){const O=r.newAttributes;for(let I=0,U=O.length;I<U;I++)O[I]=0}function v(O){m(O,0)}function m(O,I){const U=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;U[O]=1,k[O]===0&&(n.enableVertexAttribArray(O),k[O]=1),V[O]!==I&&(n.vertexAttribDivisor(O,I),V[O]=I)}function T(){const O=r.newAttributes,I=r.enabledAttributes;for(let U=0,k=I.length;U<k;U++)I[U]!==O[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function P(O,I,U,k,V,X,W){W===!0?n.vertexAttribIPointer(O,I,U,V,X):n.vertexAttribPointer(O,I,U,k,V,X)}function S(O,I,U,k){b();const V=k.attributes,X=U.getAttributes(),W=I.defaultAttributeValues;for(const j in X){const te=X[j];if(te.location>=0){let le=V[j];if(le===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){const de=le.normalized,Re=le.itemSize,Ue=e.get(le);if(Ue===void 0)continue;const ct=Ue.buffer,nt=Ue.type,Qe=Ue.bytesPerElement,ie=nt===n.INT||nt===n.UNSIGNED_INT||le.gpuType===iu;if(le.isInterleavedBufferAttribute){const ue=le.data,Ce=ue.stride,ke=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Te=0;Te<te.locationSize;Te++)m(te.location+Te,ue.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<te.locationSize;Te++)v(te.location+Te);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Te=0;Te<te.locationSize;Te++)P(te.location+Te,Re/te.locationSize,nt,de,Ce*Qe,(ke+Re/te.locationSize*Te)*Qe,ie)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)m(te.location+ue,le.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<te.locationSize;ue++)v(te.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let ue=0;ue<te.locationSize;ue++)P(te.location+ue,Re/te.locationSize,nt,de,Re*Qe,Re/te.locationSize*ue*Qe,ie)}}else if(W!==void 0){const de=W[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(te.location,de);break;case 3:n.vertexAttrib3fv(te.location,de);break;case 4:n.vertexAttrib4fv(te.location,de);break;default:n.vertexAttrib1fv(te.location,de)}}}}T()}function A(){C();for(const O in i){const I=i[O];for(const U in I){const k=I[U];for(const V in k){const X=k[V];for(const W in X)d(X[W].object),delete X[W];delete k[V]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;const I=i[O.id];for(const U in I){const k=I[U];for(const V in k){const X=k[V];for(const W in X)d(X[W].object),delete X[W];delete k[V]}}delete i[O.id]}function L(O){for(const I in i){const U=i[I];for(const k in U){const V=U[k];if(V[O.id]===void 0)continue;const X=V[O.id];for(const W in X)d(X[W].object),delete X[W];delete V[O.id]}}}function y(O){for(const I in i){const U=i[I],k=O.isInstancedMesh===!0?O.id:0,V=U[k];if(V!==void 0){for(const X in V){const W=V[X];for(const j in W)d(W[j].object),delete W[j];delete V[X]}delete U[k],Object.keys(U).length===0&&delete i[I]}}}function C(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:v,disableUnusedAttributes:T}}function PS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function LS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==An&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const y=L===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==En&&L!==kn&&!y&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(et("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:S,maxSamples:A,samples:E}}function DS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new is,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,b=h.clipIntersection,v=h.clipShadows,m=n.get(h);if(!s||x===null||x.length===0||r&&!v)r?d(null):c();else{const T=r?0:i,P=T*4;let S=m.clippingState||null;l.value=S,S=d(x,f,P,p);for(let A=0;A!==P;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,x){const b=h!==null?h.length:0;let v=null;if(b!==0){if(v=l.value,x!==!0||v===null){const m=p+b*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(v===null||v.length<m)&&(v=new Float32Array(m));for(let P=0,S=p;P!==b;++P,S+=4)a.copy(h[P]).applyMatrix4(T,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}const ir=4,IS=6,NS=20,US=256,Tr=new hu,Kd=new gt;let Rl=null,Pl=0,Ll=0,Dl=!1;const FS=new ee,ys=new ee;class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=FS}=r;Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Pl,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:di,format:An,colorSpace:ho,depthBuffer:!1},s=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=OS(r)),this._blurMaterial=kS(r,e,t),this._ggxMaterial=BS(r,e,t)}return s}_compileMaterial(e){const t=new fi(new Gi,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,s,r){const l=new Fn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Kd),h.toneMapping=ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new ra,new rp({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let m=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,m=!0):(v.color.copy(Kd),m=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[P]));const A=this._cubeSize;Qs(s,S*A,P>2?A:0,A,A),h.setRenderTarget(s),m&&h.render(b,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=c*1.25,p=h*f,{_lodMax:x}=this,b=this._sizeLods[i],v=3*b*(i>x-ir?i-x+ir:0),m=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Qs(r,v,m,3*b,2*b),s.setRenderTarget(r),s.render(o,Tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Qs(e,v,m,3*b,2*b),s.setRenderTarget(e),s.render(o,Tr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[s],h=3*d*(s>this._lodMax-ir?s-this._lodMax+ir:0),f=4*(this._cubeSize-d);Qs(t,h,f,3*d,2*d),a.setRenderTarget(t),a.render(l,Tr)}}function OS(n){const e=[],t=[];let i=n;const s=n-ir+1+IS;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,p=3,x=new Float32Array(p*f*h),b=new Float32Array(p*f*h);for(let m=0;m<h;m++){const T=m%3*2/3-1,P=m>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(S,p*f*m);for(let A=0;A<f;A++){const E=d[A*2]*2-1,L=d[A*2+1]*2-1;m===0?ys.set(1,L,E):m===1?ys.set(-E,1,-L):m===2?ys.set(-E,L,1):m===3?ys.set(-1,L,-E):m===4?ys.set(-E,-1,L):ys.set(E,L,-1),ys.toArray(b,(m*f+A)*p)}}const v=new Gi;v.setAttribute("position",new Di(x,p)),v.setAttribute("outputDirection",new Di(b,p)),t.push(new fi(v,null)),i>ir&&i--}return{lodMeshes:t,sizeLods:e}}function Zd(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function BS(n,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:US,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function kS(n,e,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:NS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Qd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function jd(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pp extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ra(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Pi});r.uniforms.tEquirect.value=t;const a=new fi(s,r),o=t.minFilter;return t.minFilter===As&&(t.minFilter=$t),new Gx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function HS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===il||p===sl)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const b=new pp(x.height);return b.fromEquirectangularTexture(n,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,x=p===il||p===sl,b=p===Ds||p===ur;if(x||b){let v=t.get(f);const m=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Jd(n)),v=x?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const T=f.image;return x&&T&&T.height>0||b&&T&&l(T)?(i===null&&(i=new Jd(n)),v=x?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",d),v.texture):null}}}return f}function o(f,p){return p===il?f.mapping=Ds:p===sl&&(f.mapping=ur),f}function l(f){let p=0;const x=6;for(let b=0;b<x;b++)f[b]!==void 0&&p++;return p===x}function c(f){const p=f.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function VS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&or("WebGLRenderer: "+i+" extension not supported."),s}}}function zS(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let b=0;if(x===void 0)return;if(p!==null){const T=p.array;b=p.version;for(let P=0,S=T.length;P<S;P+=3){const A=T[P+0],E=T[P+1],L=T[P+2];f.push(A,E,E,L,L,A)}}else{const T=x.array;b=x.version;for(let P=0,S=T.length/3-1;P<S;P+=3){const A=P+0,E=P+1,L=P+2;f.push(A,E,E,L,L,A)}}const v=new(x.count>=65535?sp:ip)(f,1);v.version=b;const m=r.get(h);m&&e.remove(m),r.set(h,v)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function GS(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,h*a,p),t.update(f,i,p))}function d(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let b=0;for(let v=0;v<p;v++)b+=f[v];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function WS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $S(n,e,t){const i=new WeakMap,s=new Dt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var p=N;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),b===!0&&(S=2),v===!0&&(S=3);let A=o.attributes.position.count*S,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*E*4*h),y=new ep(L,A,E,h);y.type=kn,y.needsUpdate=!0;const C=S*4;for(let O=0;O<h;O++){const I=m[O],U=T[O],k=P[O],V=A*E*4*O;for(let X=0;X<I.count;X++){const W=X*C;x===!0&&(s.fromBufferAttribute(I,X),L[V+W+0]=s.x,L[V+W+1]=s.y,L[V+W+2]=s.z,L[V+W+3]=0),b===!0&&(s.fromBufferAttribute(U,X),L[V+W+4]=s.x,L[V+W+5]=s.y,L[V+W+6]=s.z,L[V+W+7]=0),v===!0&&(s.fromBufferAttribute(k,X),L[V+W+8]=s.x,L[V+W+9]=s.y,L[V+W+10]=s.z,L[V+W+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:y,size:new ft(A,E)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let v=0;v<c.length;v++)x+=c[v];const b=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function XS(n,e,t,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const qS={[Bh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function YS(n,e,t,i,s,r){const a=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Gi;c.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const d=new Hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new fi(c,d),f=new hu(-1,1,1,-1,0,1);let p=null,x=null,b=!1,v,m=null,T=[],P=!1;this.setSize=function(S,A){a.setSize(S,A),o!==null&&o.setSize(S,A),l!==null&&l.setSize(S,A);for(let E=0;E<T.length;E++){const L=T[E];L.setSize&&L.setSize(S,A)}},this.setEffects=function(S){T=S,P=T.length>0&&T[0].isRenderPass===!0;const A=a.width,E=a.height;T.length>0&&o===null&&(o=new zn(A,E,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new zn(A,E,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<T.length;L++){const y=T[L];y.setSize&&y.setSize(A,E)}},this.begin=function(S,A){if(b||S.toneMapping===ai&&T.length===0)return!1;if(m=A,A!==null){const E=A.width,L=A.height;(a.width!==E||a.height!==L)&&this.setSize(E,L)}return P===!1&&S.setRenderTarget(a),v=S.toneMapping,S.toneMapping=ai,!0},this.hasRenderPass=function(){return P},this.end=function(S,A){S.toneMapping=v,b=!0;let E=a,L=o;for(let y=0;y<T.length;y++){const C=T[y];C.enabled!==!1&&(C.render(S,L,E,A),C.needsSwap!==!1&&(E=L,L=L===o?l:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,d.defines={},ot.getTransfer(p)===Mt&&(d.defines.SRGB_TRANSFER="");const y=qS[x];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(m),S.render(h,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const mp=new Qt,Fc=new Zr(1,1),gp=new ep,vp=new gx,_p=new lp,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fo(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function KS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function jS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),Ht(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),Ht(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),Ht(t,i)}}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function uM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fc.compareFunction=t.isReversedDepthBuffer()?uu:cu,r=Fc):r=mp,t.setTexture2D(e||r,s)}function dM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vp,s)}function fM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_p,s)}function hM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function pM(n){switch(n){case 5126:return KS;case 35664:return JS;case 35665:return ZS;case 35666:return QS;case 35674:return jS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return sM;case 35669:case 35673:return rM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(n,e){n.uniform1fv(this.addr,e)}function gM(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function vM(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function xM(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yM(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SM(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MM(n,e){n.uniform1iv(this.addr,e)}function bM(n,e){n.uniform2iv(this.addr,e)}function EM(n,e){n.uniform3iv(this.addr,e)}function TM(n,e){n.uniform4iv(this.addr,e)}function wM(n,e){n.uniform1uiv(this.addr,e)}function AM(n,e){n.uniform2uiv(this.addr,e)}function CM(n,e){n.uniform3uiv(this.addr,e)}function RM(n,e){n.uniform4uiv(this.addr,e)}function PM(n,e,t){const i=this.cache,s=e.length,r=Fo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fc:a=mp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function LM(n,e,t){const i=this.cache,s=e.length,r=Fo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vp,r[a])}function DM(n,e,t){const i=this.cache,s=e.length,r=Fo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_p,r[a])}function IM(n,e,t){const i=this.cache,s=e.length,r=Fo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gp,r[a])}function NM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return bM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return IM}}class UM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class FM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function BM(n,e,t){const i=n.name,s=i.length;for(Il.lastIndex=0;;){const r=Il.exec(i),a=Il.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){af(t,c===void 0?new UM(o,n,e):new FM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new OM(o),af(t,h)),t=h}}}class Za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);BM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function of(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kM=37297;let HM=0;function VM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const lf=new tt;function zM(n){ot._getMatrix(lf,ot.workingColorSpace,n);const e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case po:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+VM(n.getShaderSource(e),o)}else return r}function GM(n,e){const t=zM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const WM={[Bh]:"Linear",[kh]:"Reinhard",[Hh]:"Cineon",[Vh]:"ACESFilmic",[Gh]:"AgX",[Wh]:"Neutral",[zh]:"Custom"};function $M(n,e){const t=WM[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new ee;function XM(){ot.getLuminanceCoefficients(Ba);const n=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function YM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function uf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(JM,QM)}const ZM=new Map;function QM(n,e){let t=rt[e];if(t===void 0){const i=ZM.get(e);if(i!==void 0)t=rt[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oc(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(n){return n.replace(jM,eb)}function eb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tb={[Xa]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function nb(n){return tb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ib={[Ds]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function sb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ib[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const rb={[ur]:"ENVMAP_MODE_REFRACTION"};function ab(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ob={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[q_]:"ENVMAP_BLENDING_MIX",[Y_]:"ENVMAP_BLENDING_ADD"};function lb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ob[n.combine]||"ENVMAP_BLENDING_NONE"}function cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ub(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nb(t),c=sb(t),d=ab(t),h=lb(t),f=cb(t),p=qM(t),x=YM(r),b=s.createProgram();let v,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(v=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?rt.tonemapping_pars_fragment:"",t.toneMapping!==ai?$M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Oc(a),a=uf(a,t),a=df(a,t),o=Oc(o),o=uf(o,t),o=df(o,t),a=ff(a),o=ff(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=T+v+a,S=T+m+o,A=of(s,s.VERTEX_SHADER,P),E=of(s,s.FRAGMENT_SHADER,S);s.attachShader(b,A),s.attachShader(b,E),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function L(O){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(b)||"",U=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(E)||"",V=I.trim(),X=U.trim(),W=k.trim();let j=!0,te=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,A,E);else{const le=cf(s,A,"vertex"),de=cf(s,E,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+le+`
`+de)}else V!==""?et("WebGLProgram: Program Info Log:",V):(X===""||W==="")&&(te=!1);te&&(O.diagnostics={runnable:j,programLog:V,vertexShader:{log:X,prefix:v},fragmentShader:{log:W,prefix:m}})}s.deleteShader(A),s.deleteShader(E),y=new Za(s,b),C=KM(s,b)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(b,kM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=E,this}let db=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hb(e),t.set(e,i)),i}}class hb{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function pb(n){return n===Is||n===uo||n===fo}function mb(n,e,t,i,s,r){const a=new tp,o=new fb,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,C,N,O,I,U){const k=O.fog,V=I.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||X,W),te=j&&j.mapping===Io?j.image.height:null,le=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&et("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Re=de!==void 0?de.length:0;let Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let ct,nt,Qe,ie;if(le){const wt=ii[le];ct=wt.vertexShader,nt=wt.fragmentShader}else{ct=y.vertexShader,nt=y.fragmentShader;const wt=o.getVertexShaderStage(y),vt=o.getFragmentShaderStage(y);o.update(y,wt,vt),Qe=wt.id,ie=vt.id}const ue=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Te=I.isBatchedMesh===!0,R=!!y.map,H=!!y.matcap,$=!!j,ae=!!y.aoMap,re=!!y.lightMap,se=!!y.bumpMap&&y.wireframe===!1,pe=!!y.normalMap,me=!!y.displacementMap,ve=!!y.emissiveMap,oe=!!y.metalnessMap,Ee=!!y.roughnessMap,D=y.anisotropy>0,Se=y.clearcoat>0,be=y.dispersion>0,_=y.retroreflectivity>0,u=y.iridescence>0,w=y.sheen>0,F=y.transmission>0,B=D&&!!y.anisotropyMap,Q=Se&&!!y.clearcoatMap,he=Se&&!!y.clearcoatNormalMap,Z=Se&&!!y.clearcoatRoughnessMap,ce=u&&!!y.iridescenceMap,_e=u&&!!y.iridescenceThicknessMap,Le=w&&!!y.sheenColorMap,ye=w&&!!y.sheenRoughnessMap,Me=!!y.specularMap,ze=!!y.specularColorMap,Ye=!!y.specularIntensityMap,Ze=F&&!!y.transmissionMap,G=F&&!!y.thicknessMap,we=!!y.gradientMap,fe=!!y.alphaMap,Ae=y.alphaTest>0,Ne=!!y.alphaHash,ge=!!y.extensions;let $e=ai;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&($e=n.toneMapping);const Ge={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:ct,fragmentShader:nt,defines:y.defines,customVertexShaderID:Qe,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:R,matcap:H,envMap:$,envMapMode:$&&j.mapping,envMapCubeUVHeight:te,aoMap:ae,lightMap:re,bumpMap:se,normalMap:pe,displacementMap:me,emissiveMap:ve,normalMapObjectSpace:pe&&y.normalMapType===Z_,normalMapTangentSpace:pe&&y.normalMapType===wd,packedNormalMap:pe&&y.normalMapType===wd&&pb(y.normalMap.format),metalnessMap:oe,roughnessMap:Ee,anisotropy:D,anisotropyMap:B,clearcoat:Se,clearcoatMap:Q,clearcoatNormalMap:he,clearcoatRoughnessMap:Z,dispersion:be,retroreflection:_,iridescence:u,iridescenceMap:ce,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:ze,specularIntensityMap:Ye,transmission:F,transmissionMap:Ze,thicknessMap:G,gradientMap:we,opaque:y.transparent===!1&&y.blending===Br&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:Ne,combine:y.combine,mapUv:R&&x(y.map.channel),aoMapUv:ae&&x(y.aoMap.channel),lightMapUv:re&&x(y.lightMap.channel),bumpMapUv:se&&x(y.bumpMap.channel),normalMapUv:pe&&x(y.normalMap.channel),displacementMapUv:me&&x(y.displacementMap.channel),emissiveMapUv:ve&&x(y.emissiveMap.channel),metalnessMapUv:oe&&x(y.metalnessMap.channel),roughnessMapUv:Ee&&x(y.roughnessMap.channel),anisotropyMapUv:B&&x(y.anisotropyMap.channel),clearcoatMapUv:Q&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(y.sheenRoughnessMap.channel),specularMapUv:Me&&x(y.specularMap.channel),specularColorMapUv:ze&&x(y.specularColorMap.channel),specularIntensityMapUv:Ye&&x(y.specularIntensityMap.channel),transmissionMapUv:Ze&&x(y.transmissionMap.channel),thicknessMapUv:G&&x(y.thicknessMap.channel),alphaMapUv:fe&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(pe||D),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(R||fe),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ue,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:R&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ai,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)C.push(N),C.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(C,y),T(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function m(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function T(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){const C=p[y.type];let N;if(C){const O=ii[C];N=Ox.clone(O.uniforms)}else N=y.uniforms;return N}function S(y,C){let N=d.get(C);return N!==void 0?++N.usedTimes:(N=new ub(n,C,y,s),c.push(N),d.set(C,N)),N}function A(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function L(){o.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:P,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:L}}function gb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,x,b,v,m){let T=n[e];return T===void 0?(T={id:f.id,object:f,geometry:p,material:x,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:v,group:m},n[e]=T):(T.id=f.id,T.object=f,T.geometry=p,T.material=x,T.materialVariant=a(f),T.groupOrder=b,T.renderOrder=f.renderOrder,T.z=v,T.group=m),e++,T}function l(f,p,x,b,v,m,T){T.reversedDepth===!0&&(v=-v);const P=o(f,p,x,b,v,m);x.transmission>0?i.push(P):x.transparent===!0?s.push(P):t.push(P)}function c(f,p,x,b,v,m){const T=o(f,p,x,b,v,m);x.transmission>0?i.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function d(f,p){t.length>1&&t.sort(f||vb),i.length>1&&i.sort(p||pf),s.length>1&&s.sort(p||pf)}function h(){for(let f=e,p=n.length;f<p;f++){const x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function _b(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new mf,n.set(i,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ee,color:new gt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function yb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sb=0;function Mb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bb(n){const e=new xb,t=yb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const s=new ee,r=new Ot,a=new Ot;function o(c){let d=0,h=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,x=0,b=0,v=0,m=0,T=0,P=0,S=0,A=0,E=0,L=0,y=0,C=0,N=0;c.sort(Mb);for(let I=0,U=c.length;I<U;I++){const k=c[I],V=k.color,X=k.intensity,W=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Is?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=V.r*X,h+=V.g*X,f+=V.b*X;else if(k.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(k.sh.coefficients[te],X);N++}else if(k.isSunLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[x]=de,i.sunShadowMap[x]=j;const Re=le.getViewportCount();for(let Ue=0;Ue<Re;Ue++)i.sunShadowMatrix[b+Ue]=le.getMatrix(Ue),i.sunShadowCascade[b+Ue]=le._cascadeData[Ue];b+=Re,x++}i.sun[p]=te,p++}else if(k.isDirectionalLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.directionalShadow[v]=de,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=k.shadow.matrix,A++}i.directional[v]=te,v++}else if(k.isSpotLight){const te=e.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(V).multiplyScalar(X),te.distance=W,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,i.spot[T]=te;const le=k.shadow;if(k.map&&(i.spotLightMap[y]=k.map,y++,le.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[T]=le.matrix,k.castShadow){const de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.spotShadow[T]=de,i.spotShadowMap[T]=j,L++}T++}else if(k.isRectAreaLight){const te=e.get(k);te.color.copy(V).multiplyScalar(X),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),i.rectArea[P]=te,P++}else if(k.isPointLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),te.distance=k.distance,te.decay=k.decay,k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=k.shadow.matrix,E++}i.point[m]=te,m++}else if(k.isHemisphereLight){const te=e.get(k);te.skyColor.copy(k.color).multiplyScalar(X),te.groundColor.copy(k.groundColor).multiplyScalar(X),i.hemi[S]=te,S++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.sunLength!==p||O.directionalLength!==v||O.pointLength!==m||O.spotLength!==T||O.rectAreaLength!==P||O.hemiLength!==S||O.numSunShadows!==x||O.numDirectionalShadows!==A||O.numPointShadows!==E||O.numSpotShadows!==L||O.numSpotMaps!==y||O.numLightProbes!==N)&&(i.sun.length=p,i.directional.length=v,i.spot.length=T,i.rectArea.length=P,i.point.length=m,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,O.sunLength=p,O.directionalLength=v,O.pointLength=m,O.spotLength=T,O.rectAreaLength=P,O.hemiLength=S,O.numSunShadows=x,O.numDirectionalShadows=A,O.numPointShadows=E,O.numSpotShadows=L,O.numSpotMaps=y,O.numLightProbes=N,i.version=Sb++)}function l(c,d){let h=0,f=0,p=0,x=0,b=0,v=0;const m=d.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){const S=c[T];if(S.isSunLight){const A=i.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),h++}else if(S.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(S.isSpotLight){const A=i.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),x++}else if(S.isRectAreaLight){const A=i.rectArea[b];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function gf(n){const e=new bb(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function d(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Eb(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gf(n),e.set(s,[o])):r>=a.length?(o=new gf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Ab=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],Cb=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],vf=new Ot,wr=new ee,Nl=new ee;function Rb(n,e,t){let i=new op;const s=new ft,r=new ft,a=new Dt,o=new Vx,l=new zx,c={},d=t.maxTextureSize,h={[Ls]:fn,[fn]:Ls,[Ai]:Ai},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Tb,fragmentShader:wb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Gi;x.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fi(x,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let m=this.type;this.render=function(E,L,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===C_&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xa);const C=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Pi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=m!==this.type;U&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(V=>V.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,V=E.length;k<V;k++){const X=E[k],W=X.shadow;if(W===void 0){et("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));const te=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Pr){if(X.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new zn(s.x,s.y,{format:Is,type:di,minFilter:$t,magFilter:$t,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Zr(s.x,s.y,kn),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Bi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt}else X.isPointLight?(W.map=new pp(s.x),W.map.depthTexture=new Ux(s.x,ui)):(W.map=new zn(s.x,s.y),W.map.depthTexture=new Zr(s.x,s.y,ui)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Bi,this.type===Xa?(W.map.depthTexture.compareFunction=te?uu:cu,W.map.depthTexture.minFilter=$t,W.map.depthTexture.magFilter=$t):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const le=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,y);for(let de=0;de<le;de++){const Re=W.getCamera(de);if(X.isPointLight){const Ue=W.camera,ct=W.matrix,nt=X.distance||Ue.far;nt!==Ue.far&&(Ue.far=nt,Ue.updateProjectionMatrix()),wr.setFromMatrixPosition(X.matrixWorld),Ue.position.copy(wr),Nl.copy(Ue.position),Nl.add(Ab[de]),Ue.up.copy(Cb[de]),Ue.lookAt(Nl),Ue.updateMatrixWorld(),ct.makeTranslation(-wr.x,-wr.y,-wr.z),vf.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),W._frustum.setFromProjectionMatrix(vf,Ue.coordinateSystem,Ue.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,de),n.clear();else{de===0&&(n.setRenderTarget(W.map),n.clear());const Ue=W.getViewport(de);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),I.viewport(a)}i=W.getFrustum(de),S(L,y,Re,X,this.type)}W.isPointLightShadow!==!0&&this.type===Pr&&T(W,y),W.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(C,N,O)};function T(E,L){const y=e.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new zn(s.x,s.y,{format:Is,type:di}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(L,null,y,f,b,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(L,null,y,p,b,null)}function P(E,L,y,C){let N=null;const O=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)N=O;else if(N=y.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const I=N.uuid,U=L.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let V=k[U];V===void 0&&(V=N.clone(),k[U]=V,L.addEventListener("dispose",A)),N=V}if(N.visible=L.visible,N.wireframe=L.wireframe,C===Pr?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:h[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=n.properties.get(N);I.light=y}return N}function S(E,L,y,C,N){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Pr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const U=e.update(E),k=E.material;if(Array.isArray(k)){const V=U.groups;for(let X=0,W=V.length;X<W;X++){const j=V[X],te=k[j.materialIndex];if(te&&te.visible){const le=P(E,te,C,N);E.onBeforeShadow(n,E,L,y,U,le,j),n.renderBufferDirect(y,null,U,le,E,j),E.onAfterShadow(n,E,L,y,U,le,j)}}}else if(k.visible){const V=P(E,k,C,N);E.onBeforeShadow(n,E,L,y,U,V,null),n.renderBufferDirect(y,null,U,V,E,null),E.onAfterShadow(n,E,L,y,U,V,null)}}const I=E.children;for(let U=0,k=I.length;U<k;U++)S(I[U],L,y,C,N)}function A(E){E.target.removeEventListener("dispose",A);for(const y in c){const C=c[y],N=E.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function Pb(n,e){function t(){let G=!1;const we=new Dt;let fe=null;const Ae=new Dt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!G&&(n.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ge,$e,Ge,wt){wt===!0&&(Ne*=Ge,ge*=Ge,$e*=Ge),we.set(Ne,ge,$e,Ge),Ae.equals(we)===!1&&(n.clearColor(Ne,ge,$e,Ge),Ae.copy(we))},reset:function(){G=!1,fe=null,Ae.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,fe=null,Ae=null,Ne=null;return{setReversed:function(ge){if(we!==ge){const $e=e.get("EXT_clip_control");ge?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const Ge=Ne;Ne=null,this.setClear(Ge)}},getReversed:function(){return we},setTest:function(ge){ge?ue(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!G&&(n.depthMask(ge),fe=ge)},setFunc:function(ge){if(we&&(ge=cx[ge]),Ae!==ge){switch(ge){case Jl:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case Ql:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case ec:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=ge}},setLocked:function(ge){G=ge},setClear:function(ge){Ne!==ge&&(Ne=ge,we&&(ge=1-ge),n.clearDepth(ge))},reset:function(){G=!1,fe=null,Ae=null,Ne=null,we=!1}}}function s(){let G=!1,we=null,fe=null,Ae=null,Ne=null,ge=null,$e=null,Ge=null,wt=null;return{setTest:function(vt){G||(vt?ue(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(vt){we!==vt&&!G&&(n.stencilMask(vt),we=vt)},setFunc:function(vt,Dn,qn){(fe!==vt||Ae!==Dn||Ne!==qn)&&(n.stencilFunc(vt,Dn,qn),fe=vt,Ae=Dn,Ne=qn)},setOp:function(vt,Dn,qn){(ge!==vt||$e!==Dn||Ge!==qn)&&(n.stencilOp(vt,Dn,qn),ge=vt,$e=Dn,Ge=qn)},setLocked:function(vt){G=vt},setClear:function(vt){wt!==vt&&(n.clearStencil(vt),wt=vt)},reset:function(){G=!1,we=null,fe=null,Ae=null,Ne=null,ge=null,$e=null,Ge=null,wt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},f={},p=new WeakMap,x=[],b=null,v=!1,m=null,T=null,P=null,S=null,A=null,E=null,L=null,y=new gt(0,0,0),C=0,N=!1,O=null,I=null,U=null,k=null,V=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),W=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),W=j>=2);let le=null,de={};const Re=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),ct=new Dt().fromArray(Re),nt=new Dt().fromArray(Ue);function Qe(G,we,fe,Ae){const Ne=new Uint8Array(4),ge=n.createTexture();n.bindTexture(G,ge),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<fe;$e++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(we+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return ge}const ie={};ie[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Yr),se(!1),pe(Md),ue(n.CULL_FACE),ae(Pi);function ue(G){d[G]!==!0&&(n.enable(G),d[G]=!0)}function Ce(G){d[G]!==!1&&(n.disable(G),d[G]=!1)}function ke(G,we){return f[G]!==we?(n.bindFramebuffer(G,we),f[G]=we,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Te(G,we){let fe=x,Ae=!1;if(G){fe=p.get(we),fe===void 0&&(fe=[],p.set(we,fe));const Ne=G.textures;if(fe.length!==Ne.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,$e=Ne.length;ge<$e;ge++)fe[ge]=n.COLOR_ATTACHMENT0+ge;fe.length=Ne.length,Ae=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(fe)}function R(G){return b!==G?(n.useProgram(G),b=G,!0):!1}const H={[nr]:n.FUNC_ADD,[P_]:n.FUNC_SUBTRACT,[L_]:n.FUNC_REVERSE_SUBTRACT};H[D_]=n.MIN,H[I_]=n.MAX;const $={[N_]:n.ZERO,[U_]:n.ONE,[F_]:n.SRC_COLOR,[Uh]:n.SRC_ALPHA,[z_]:n.SRC_ALPHA_SATURATE,[H_]:n.DST_COLOR,[B_]:n.DST_ALPHA,[O_]:n.ONE_MINUS_SRC_COLOR,[Fh]:n.ONE_MINUS_SRC_ALPHA,[V_]:n.ONE_MINUS_DST_COLOR,[k_]:n.ONE_MINUS_DST_ALPHA,[G_]:n.CONSTANT_COLOR,[W_]:n.ONE_MINUS_CONSTANT_COLOR,[$_]:n.CONSTANT_ALPHA,[X_]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(G,we,fe,Ae,Ne,ge,$e,Ge,wt,vt){if(G===Pi){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),G!==R_){if(G!==m||vt!==N){if((T!==nr||A!==nr)&&(n.blendEquation(n.FUNC_ADD),T=nr,A=nr),vt)switch(G){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",G);break}else switch(G){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ed:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Td:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",G);break}P=null,S=null,E=null,L=null,y.set(0,0,0),C=0,m=G,N=vt}return}Ne=Ne||we,ge=ge||fe,$e=$e||Ae,(we!==T||Ne!==A)&&(n.blendEquationSeparate(H[we],H[Ne]),T=we,A=Ne),(fe!==P||Ae!==S||ge!==E||$e!==L)&&(n.blendFuncSeparate($[fe],$[Ae],$[ge],$[$e]),P=fe,S=Ae,E=ge,L=$e),(Ge.equals(y)===!1||wt!==C)&&(n.blendColor(Ge.r,Ge.g,Ge.b,wt),y.copy(Ge),C=wt),m=G,N=!1}function re(G,we){G.side===Ai?Ce(n.CULL_FACE):ue(n.CULL_FACE);let fe=G.side===fn;we&&(fe=!fe),se(fe),G.blending===Br&&G.transparent===!1?ae(Pi):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ae=G.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function pe(G){G!==w_?(ue(n.CULL_FACE),G!==I&&(G===Md?n.cullFace(n.BACK):G===A_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=G}function me(G){G!==U&&(W&&n.lineWidth(G),U=G)}function ve(G,we,fe){G?(ue(n.POLYGON_OFFSET_FILL),(k!==we||V!==fe)&&(k=we,V=fe,a.getReversed()&&(we=-we),n.polygonOffset(we,fe))):Ce(n.POLYGON_OFFSET_FILL)}function oe(G){G?ue(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ee(G){G===void 0&&(G=n.TEXTURE0+X-1),le!==G&&(n.activeTexture(G),le=G)}function D(G,we,fe){fe===void 0&&(le===null?fe=n.TEXTURE0+X-1:fe=le);let Ae=de[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},de[fe]=Ae),(Ae.type!==G||Ae.texture!==we)&&(le!==fe&&(n.activeTexture(fe),le=fe),n.bindTexture(G,we||ie[G]),Ae.type=G,Ae.texture=we)}function Se(){const G=de[le];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function _(){try{n.compressedTexImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function u(){try{n.texSubImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function w(){try{n.texSubImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function B(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function Q(){try{n.texStorage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function he(){try{n.texStorage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function Z(){try{n.texImage2D(...arguments)}catch(G){ht("WebGLState:",G)}}function ce(){try{n.texImage3D(...arguments)}catch(G){ht("WebGLState:",G)}}function _e(G){return h[G]!==void 0?h[G]:n.getParameter(G)}function Le(G,we){h[G]!==we&&(n.pixelStorei(G,we),h[G]=we)}function ye(G){ct.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ct.copy(G))}function Me(G){nt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),nt.copy(G))}function ze(G,we){let fe=c.get(we);fe===void 0&&(fe=new WeakMap,c.set(we,fe));let Ae=fe.get(G);Ae===void 0&&(Ae=n.getUniformBlockIndex(we,G.name),fe.set(G,Ae))}function Ye(G,we){const Ae=c.get(we).get(G);l.get(we)!==Ae&&(n.uniformBlockBinding(we,Ae,G.__bindingPointIndex),l.set(we,Ae))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},le=null,de={},f={},p=new WeakMap,x=[],b=null,v=!1,m=null,T=null,P=null,S=null,A=null,E=null,L=null,y=new gt(0,0,0),C=0,N=!1,O=null,I=null,U=null,k=null,V=null,ct.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ce,bindFramebuffer:ke,drawBuffers:Te,useProgram:R,setBlending:ae,setMaterial:re,setFlipSided:se,setCullFace:pe,setLineWidth:me,setPolygonOffset:ve,setScissorTest:oe,activeTexture:Ee,bindTexture:D,unbindTexture:Se,compressedTexImage2D:be,compressedTexImage3D:_,texImage2D:Z,texImage3D:ce,pixelStorei:Le,getParameter:_e,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:Q,texStorage3D:he,texSubImage2D:u,texSubImage3D:w,compressedTexSubImage2D:F,compressedTexSubImage3D:B,scissor:ye,viewport:Me,reset:Ze}}function Lb(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,d=new WeakMap,h=new Set;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(_,u){return x?new OffscreenCanvas(_,u):go("canvas")}function v(_,u,w){let F=1;const B=be(_);if((B.width>w||B.height>w)&&(F=w/Math.max(B.width,B.height)),F<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const Q=Math.floor(F*B.width),he=Math.floor(F*B.height);f===void 0&&(f=b(Q,he));const Z=u?b(Q,he):f;return Z.width=Q,Z.height=he,Z.getContext("2d").drawImage(_,0,0,Q,he),et("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+Q+"x"+he+")."),Z}else return"data"in _&&et("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),_;return _}function m(_){return _.generateMipmaps}function T(_){n.generateMipmap(_)}function P(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(_,u,w,F,B,Q=!1){if(_!==null){if(n[_]!==void 0)return n[_];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let he;F&&(he=e.get("EXT_texture_norm16"),he||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=u;if(u===n.RED&&(w===n.FLOAT&&(Z=n.R32F),w===n.HALF_FLOAT&&(Z=n.R16F),w===n.UNSIGNED_BYTE&&(Z=n.R8),w===n.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),w===n.SHORT&&he&&(Z=he.R16_SNORM_EXT)),u===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(Z=n.R8UI),w===n.UNSIGNED_SHORT&&(Z=n.R16UI),w===n.UNSIGNED_INT&&(Z=n.R32UI),w===n.BYTE&&(Z=n.R8I),w===n.SHORT&&(Z=n.R16I),w===n.INT&&(Z=n.R32I)),u===n.RG&&(w===n.FLOAT&&(Z=n.RG32F),w===n.HALF_FLOAT&&(Z=n.RG16F),w===n.UNSIGNED_BYTE&&(Z=n.RG8),w===n.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),w===n.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),u===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(Z=n.RG8UI),w===n.UNSIGNED_SHORT&&(Z=n.RG16UI),w===n.UNSIGNED_INT&&(Z=n.RG32UI),w===n.BYTE&&(Z=n.RG8I),w===n.SHORT&&(Z=n.RG16I),w===n.INT&&(Z=n.RG32I)),u===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),w===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),w===n.UNSIGNED_INT&&(Z=n.RGB32UI),w===n.BYTE&&(Z=n.RGB8I),w===n.SHORT&&(Z=n.RGB16I),w===n.INT&&(Z=n.RGB32I)),u===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),w===n.UNSIGNED_INT&&(Z=n.RGBA32UI),w===n.BYTE&&(Z=n.RGBA8I),w===n.SHORT&&(Z=n.RGBA16I),w===n.INT&&(Z=n.RGBA32I)),u===n.RGB&&(w===n.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),w===n.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),w===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),w===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),u===n.RGBA){const ce=Q?po:ot.getTransfer(B);w===n.FLOAT&&(Z=n.RGBA32F),w===n.HALF_FLOAT&&(Z=n.RGBA16F),w===n.UNSIGNED_BYTE&&(Z=ce===Mt?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),w===n.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),w===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(_,u){let w;return _?u===null||u===ui||u===Jr?w=n.DEPTH24_STENCIL8:u===kn?w=n.DEPTH32F_STENCIL8:u===Kr&&(w=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===ui||u===Jr?w=n.DEPTH_COMPONENT24:u===kn?w=n.DEPTH_COMPONENT32F:u===Kr&&(w=n.DEPTH_COMPONENT16),w}function E(_,u){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Wt&&_.minFilter!==$t?Math.log2(Math.max(u.width,u.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?u.mipmaps.length:1}function L(_){const u=_.target;u.removeEventListener("dispose",L),C(u),u.isVideoTexture&&d.delete(u),u.isHTMLTexture&&h.delete(u)}function y(_){const u=_.target;u.removeEventListener("dispose",y),O(u)}function C(_){const u=i.get(_);if(u.__webglInit===void 0)return;const w=_.source,F=p.get(w);if(F){const B=F[u.__cacheKey];B.usedTimes--,B.usedTimes===0&&N(_),Object.keys(F).length===0&&p.delete(w)}i.remove(_)}function N(_){const u=i.get(_);n.deleteTexture(u.__webglTexture);const w=_.source,F=p.get(w);delete F[u.__cacheKey],a.memory.textures--}function O(_){const u=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(u.__webglFramebuffer[F]))for(let B=0;B<u.__webglFramebuffer[F].length;B++)n.deleteFramebuffer(u.__webglFramebuffer[F][B]);else n.deleteFramebuffer(u.__webglFramebuffer[F]);u.__webglDepthbuffer&&n.deleteRenderbuffer(u.__webglDepthbuffer[F])}else{if(Array.isArray(u.__webglFramebuffer))for(let F=0;F<u.__webglFramebuffer.length;F++)n.deleteFramebuffer(u.__webglFramebuffer[F]);else n.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&n.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&n.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let F=0;F<u.__webglColorRenderbuffer.length;F++)u.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(u.__webglColorRenderbuffer[F]);u.__webglDepthRenderbuffer&&n.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const w=_.textures;for(let F=0,B=w.length;F<B;F++){const Q=i.get(w[F]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(w[F])}i.remove(_)}let I=0;function U(){I=0}function k(){return I}function V(_){I=_}function X(){const _=I;return _>=s.maxTextures&&et("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,_}function W(_){const u=[];return u.push(_.wrapS),u.push(_.wrapT),u.push(_.wrapR||0),u.push(_.magFilter),u.push(_.minFilter),u.push(_.anisotropy),u.push(_.internalFormat),u.push(_.format),u.push(_.type),u.push(_.generateMipmaps),u.push(_.premultiplyAlpha),u.push(_.flipY),u.push(_.unpackAlignment),u.push(_.colorSpace),u.join()}function j(_,u){const w=i.get(_);if(_.isVideoTexture&&D(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&w.__version!==_.version){const F=_.image;if(F===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(w,_,u);return}}else _.isExternalTexture&&(w.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+u)}function te(_,u){const w=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&w.__version!==_.version){Ce(w,_,u);return}else _.isExternalTexture&&(w.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+u)}function le(_,u){const w=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&w.__version!==_.version){Ce(w,_,u);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+u)}function de(_,u){const w=i.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&w.__version!==_.version){ke(w,_,u);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+u)}const Re={[ic]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[sc]:n.MIRRORED_REPEAT},Ue={[Wt]:n.NEAREST,[K_]:n.NEAREST_MIPMAP_NEAREST,[ga]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},ct={[j_]:n.NEVER,[sx]:n.ALWAYS,[ex]:n.LESS,[cu]:n.LEQUAL,[tx]:n.EQUAL,[uu]:n.GEQUAL,[nx]:n.GREATER,[ix]:n.NOTEQUAL};function nt(_,u){if(u.type===kn&&e.has("OES_texture_float_linear")===!1&&(u.magFilter===$t||u.magFilter===rl||u.magFilter===ga||u.magFilter===As||u.minFilter===$t||u.minFilter===rl||u.minFilter===ga||u.minFilter===As)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,Re[u.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,Re[u.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,Re[u.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,Ue[u.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,Ue[u.minFilter]),u.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ct[u.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Wt||u.minFilter!==ga&&u.minFilter!==As||u.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,s.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function Qe(_,u){let w=!1;_.__webglInit===void 0&&(_.__webglInit=!0,u.addEventListener("dispose",L));const F=u.source;let B=p.get(F);B===void 0&&(B={},p.set(F,B));const Q=W(u);if(Q!==_.__cacheKey){B[Q]===void 0&&(B[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,w=!0),B[Q].usedTimes++;const he=B[_.__cacheKey];he!==void 0&&(B[_.__cacheKey].usedTimes--,he.usedTimes===0&&N(u)),_.__cacheKey=Q,_.__webglTexture=B[Q].texture}return w}function ie(_,u,w){return Math.floor(Math.floor(_/w)/u)}function ue(_,u,w,F){const Q=_.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,u.width,u.height,w,F,u.data);else{Q.sort((Le,ye)=>Le.start-ye.start);let he=0;for(let Le=1;Le<Q.length;Le++){const ye=Q[he],Me=Q[Le],ze=ye.start+ye.count,Ye=ie(Me.start,u.width,4),Ze=ie(ye.start,u.width,4);Me.start<=ze+1&&Ye===Ze&&ie(Me.start+Me.count-1,u.width,4)===Ye?ye.count=Math.max(ye.count,Me.start+Me.count-ye.start):(++he,Q[he]=Me)}Q.length=he+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,u.width);for(let Le=0,ye=Q.length;Le<ye;Le++){const Me=Q[Le],ze=Math.floor(Me.start/4),Ye=Math.ceil(Me.count/4),Ze=ze%u.width,G=Math.floor(ze/u.width),we=Ye,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Ze,G,we,fe,w,F,u.data)}_.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Ce(_,u,w){let F=n.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),u.isData3DTexture&&(F=n.TEXTURE_3D);const B=Qe(_,u),Q=u.source;t.bindTexture(F,_.__webglTexture,n.TEXTURE0+w);const he=i.get(Q);if(Q.version!==he.__version||B===!0){if(t.activeTexture(n.TEXTURE0+w),(typeof ImageBitmap<"u"&&u.image instanceof ImageBitmap)===!1){const fe=ot.getPrimaries(ot.workingColorSpace),Ae=u.colorSpace===Ci?null:ot.getPrimaries(u.colorSpace),Ne=u.colorSpace===Ci||fe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,u.unpackAlignment);let ce=v(u.image,!1,s.maxTextureSize);ce=Se(u,ce);const _e=r.convert(u.format,u.colorSpace),Le=r.convert(u.type);let ye=S(u.internalFormat,_e,Le,u.normalized,u.colorSpace,u.isVideoTexture);nt(F,u);let Me;const ze=u.mipmaps,Ye=u.isVideoTexture!==!0,Ze=he.__version===void 0||B===!0,G=Q.dataReady,we=E(u,ce);if(u.isDepthTexture)ye=A(u.format===Cs,u.type),Ze&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,Le,null));else if(u.isDataTexture)if(ze.length>0){Ye&&Ze&&t.texStorage2D(n.TEXTURE_2D,we,ye,ze[0].width,ze[0].height);for(let fe=0,Ae=ze.length;fe<Ae;fe++)Me=ze[fe],Ye?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(n.TEXTURE_2D,fe,ye,Me.width,Me.height,0,_e,Le,Me.data);u.generateMipmaps=!1}else Ye?(Ze&&t.texStorage2D(n.TEXTURE_2D,we,ye,ce.width,ce.height),G&&ue(u,ce,_e,Le)):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,Le,ce.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){Ye&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,ye,ze[0].width,ze[0].height,ce.depth);for(let fe=0,Ae=ze.length;fe<Ae;fe++)if(Me=ze[fe],u.format!==An)if(_e!==null)if(Ye){if(G)if(u.layerUpdates.size>0){const Ne=Yd(Me.width,Me.height,u.format,u.type);for(const ge of u.layerUpdates){const $e=Me.data.subarray(ge*Ne/Me.data.BYTES_PER_ELEMENT,(ge+1)*Ne/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,ge,Me.width,Me.height,1,_e,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,ce.depth,_e,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,ye,Me.width,Me.height,ce.depth,0,Me.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,ce.depth,_e,Le,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,ye,Me.width,Me.height,ce.depth,0,_e,Le,Me.data);u.layerUpdates.size>0&&u.clearLayerUpdates()}else{Ye&&Ze&&t.texStorage2D(n.TEXTURE_2D,we,ye,ze[0].width,ze[0].height);for(let fe=0,Ae=ze.length;fe<Ae;fe++)Me=ze[fe],u.format!==An?_e!==null?Ye?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,ye,Me.width,Me.height,0,Me.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(n.TEXTURE_2D,fe,ye,Me.width,Me.height,0,_e,Le,Me.data)}else if(u.isDataArrayTexture)if(Ye){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,ye,ce.width,ce.height,ce.depth),G)if(u.layerUpdates.size>0){const fe=Yd(ce.width,ce.height,u.format,u.type);for(const Ae of u.layerUpdates){const Ne=ce.data.subarray(Ae*fe/ce.data.BYTES_PER_ELEMENT,(Ae+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,ce.width,ce.height,1,_e,Le,Ne)}u.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Le,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,_e,Le,ce.data);else if(u.isData3DTexture)Ye?(Ze&&t.texStorage3D(n.TEXTURE_3D,we,ye,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Le,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,_e,Le,ce.data);else if(u.isFramebufferTexture){if(Ze)if(Ye)t.texStorage2D(n.TEXTURE_2D,we,ye,ce.width,ce.height);else{let fe=ce.width,Ae=ce.height;for(let Ne=0;Ne<we;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,ye,fe,Ae,0,_e,Le,null),fe>>=1,Ae>>=1}}else if(u.isHTMLTexture){if("texElementImage2D"in n){const fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ce.parentNode!==fe){fe.appendChild(ce),h.add(u),fe.onpaint=Ae=>{const Ne=Ae.changedElements;for(const ge of h)Ne.includes(ge.image)&&(ge.needsUpdate=!0)},fe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{const Ne=n.RGBA,ge=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,ge,$e,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ye&&Ze){const fe=be(ze[0]);t.texStorage2D(n.TEXTURE_2D,we,ye,fe.width,fe.height)}for(let fe=0,Ae=ze.length;fe<Ae;fe++)Me=ze[fe],Ye?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,_e,Le,Me):t.texImage2D(n.TEXTURE_2D,fe,ye,_e,Le,Me);u.generateMipmaps=!1}else if(Ye){if(Ze){const fe=be(ce);t.texStorage2D(n.TEXTURE_2D,we,ye,fe.width,fe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Le,ce)}else t.texImage2D(n.TEXTURE_2D,0,ye,_e,Le,ce);m(u)&&T(F),he.__version=Q.version,u.onUpdate&&u.onUpdate(u)}_.__version=u.version}function ke(_,u,w){if(u.image.length!==6)return;const F=Qe(_,u),B=u.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+w);const Q=i.get(B);if(B.version!==Q.__version||F===!0){t.activeTexture(n.TEXTURE0+w);const he=ot.getPrimaries(ot.workingColorSpace),Z=u.colorSpace===Ci?null:ot.getPrimaries(u.colorSpace),ce=u.colorSpace===Ci||he===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const _e=u.isCompressedTexture||u.image[0].isCompressedTexture,Le=u.image[0]&&u.image[0].isDataTexture,ye=[];for(let ge=0;ge<6;ge++)!_e&&!Le?ye[ge]=v(u.image[ge],!0,s.maxCubemapSize):ye[ge]=Le?u.image[ge].image:u.image[ge],ye[ge]=Se(u,ye[ge]);const Me=ye[0],ze=r.convert(u.format,u.colorSpace),Ye=r.convert(u.type),Ze=S(u.internalFormat,ze,Ye,u.normalized,u.colorSpace),G=u.isVideoTexture!==!0,we=Q.__version===void 0||F===!0,fe=B.dataReady;let Ae=E(u,Me);nt(n.TEXTURE_CUBE_MAP,u);let Ne;if(_e){G&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ze,Me.width,Me.height);for(let ge=0;ge<6;ge++){Ne=ye[ge].mipmaps;for(let $e=0;$e<Ne.length;$e++){const Ge=Ne[$e];u.format!==An?ze!==null?G?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,0,0,Ge.width,Ge.height,ze,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,Ze,Ge.width,Ge.height,0,Ge.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,0,0,Ge.width,Ge.height,ze,Ye,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,Ze,Ge.width,Ge.height,0,ze,Ye,Ge.data)}}}else{if(Ne=u.mipmaps,G&&we){Ne.length>0&&Ae++;const ge=be(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ze,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Le){G?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ye[ge].width,ye[ge].height,ze,Ye,ye[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ze,ye[ge].width,ye[ge].height,0,ze,Ye,ye[ge].data);for(let $e=0;$e<Ne.length;$e++){const wt=Ne[$e].image[ge].image;G?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,0,0,wt.width,wt.height,ze,Ye,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,Ze,wt.width,wt.height,0,ze,Ye,wt.data)}}else{G?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Ye,ye[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ze,ze,Ye,ye[ge]);for(let $e=0;$e<Ne.length;$e++){const Ge=Ne[$e];G?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,0,0,ze,Ye,Ge.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,Ze,ze,Ye,Ge.image[ge])}}}m(u)&&T(n.TEXTURE_CUBE_MAP),Q.__version=B.version,u.onUpdate&&u.onUpdate(u)}_.__version=u.version}function Te(_,u,w,F,B,Q){const he=r.convert(w.format,w.colorSpace),Z=r.convert(w.type),ce=S(w.internalFormat,he,Z,w.normalized,w.colorSpace),_e=i.get(u),Le=i.get(w);if(Le.__renderTarget=u,!_e.__hasExternalTextures){const ye=Math.max(1,u.width>>Q),Me=Math.max(1,u.height>>Q);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,Q,ce,ye,Me,u.depth,0,he,Z,null):t.texImage2D(B,Q,ce,ye,Me,0,he,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),Ee(u)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,B,Le.__webglTexture,0,oe(u)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,B,Le.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(_,u,w){if(n.bindRenderbuffer(n.RENDERBUFFER,_),u.depthBuffer){const F=u.depthTexture,B=F&&F.isDepthTexture?F.type:null,Q=A(u.stencilBuffer,B),he=u.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(u)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(u),Q,u.width,u.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(u),Q,u.width,u.height):n.renderbufferStorage(n.RENDERBUFFER,Q,u.width,u.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,_)}else{const F=u.textures;for(let B=0;B<F.length;B++){const Q=F[B],he=r.convert(Q.format,Q.colorSpace),Z=r.convert(Q.type),ce=S(Q.internalFormat,he,Z,Q.normalized,Q.colorSpace);Ee(u)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(u),ce,u.width,u.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(u),ce,u.width,u.height):n.renderbufferStorage(n.RENDERBUFFER,ce,u.width,u.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(_,u,w){const F=u.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const B=i.get(u.depthTexture);if(B.__renderTarget=u,(!B.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),F){if(B.__webglInit===void 0&&(B.__webglInit=!0,u.depthTexture.addEventListener("dispose",L)),B.__webglTexture===void 0){B.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),nt(n.TEXTURE_CUBE_MAP,u.depthTexture);const _e=r.convert(u.depthTexture.format),Le=r.convert(u.depthTexture.type);let ye;u.depthTexture.format===Bi?ye=n.DEPTH_COMPONENT24:u.depthTexture.format===Cs&&(ye=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,u.width,u.height,0,_e,Le,null)}}else j(u.depthTexture,0);const Q=B.__webglTexture,he=oe(u),Z=F?n.TEXTURE_CUBE_MAP_POSITIVE_X+w:n.TEXTURE_2D,ce=u.depthTexture.format===Cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(u.depthTexture.format===Bi)Ee(u)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,Q,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,Q,0);else if(u.depthTexture.format===Cs)Ee(u)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,Q,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(_){const u=i.get(_),w=_.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==_.depthTexture){const F=_.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),F){const B=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,F.removeEventListener("dispose",B)};F.addEventListener("dispose",B),u.__depthDisposeCallback=B}u.__boundDepthTexture=F}if(_.depthTexture&&!u.__autoAllocateDepthBuffer)if(w)for(let F=0;F<6;F++)H(u.__webglFramebuffer[F],_,F);else{const F=_.texture.mipmaps;F&&F.length>0?H(u.__webglFramebuffer[0],_,0):H(u.__webglFramebuffer,_,0)}else if(w){u.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,u.__webglFramebuffer[F]),u.__webglDepthbuffer[F]===void 0)u.__webglDepthbuffer[F]=n.createRenderbuffer(),R(u.__webglDepthbuffer[F],_,!1);else{const B=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=u.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,Q)}}else{const F=_.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(n.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=n.createRenderbuffer(),R(u.__webglDepthbuffer,_,!1);else{const B=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=u.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(_,u,w){const F=i.get(_);u!==void 0&&Te(F.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&$(_)}function re(_){const u=_.texture,w=i.get(_),F=i.get(u);_.addEventListener("dispose",y);const B=_.textures,Q=_.isWebGLCubeRenderTarget===!0,he=B.length>1;if(he||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=u.version,a.memory.textures++),Q){w.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer[Z]=[];for(let ce=0;ce<u.mipmaps.length;ce++)w.__webglFramebuffer[Z][ce]=n.createFramebuffer()}else w.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer=[];for(let Z=0;Z<u.mipmaps.length;Z++)w.__webglFramebuffer[Z]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(he)for(let Z=0,ce=B.length;Z<ce;Z++){const _e=i.get(B[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(_.samples>0&&Ee(_)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Z=0;Z<B.length;Z++){const ce=B[Z];w.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[Z]);const _e=r.convert(ce.format,ce.colorSpace),Le=r.convert(ce.type),ye=S(ce.internalFormat,_e,Le,ce.normalized,ce.colorSpace,_.isXRRenderTarget===!0),Me=oe(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ye,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,w.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),R(w.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),nt(n.TEXTURE_CUBE_MAP,u);for(let Z=0;Z<6;Z++)if(u.mipmaps&&u.mipmaps.length>0)for(let ce=0;ce<u.mipmaps.length;ce++)Te(w.__webglFramebuffer[Z][ce],_,u,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce);else Te(w.__webglFramebuffer[Z],_,u,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(u)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Z=0,ce=B.length;Z<ce;Z++){const _e=B[Z],Le=i.get(_e);let ye=n.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ye=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,Le.__webglTexture),nt(ye,_e),Te(w.__webglFramebuffer,_,_e,n.COLOR_ATTACHMENT0+Z,ye,0),m(_e)&&T(ye)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Z=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,F.__webglTexture),nt(Z,u),u.mipmaps&&u.mipmaps.length>0)for(let ce=0;ce<u.mipmaps.length;ce++)Te(w.__webglFramebuffer[ce],_,u,n.COLOR_ATTACHMENT0,Z,ce);else Te(w.__webglFramebuffer,_,u,n.COLOR_ATTACHMENT0,Z,0);m(u)&&T(Z),t.unbindTexture()}_.depthBuffer&&$(_)}function se(_){const u=_.textures;for(let w=0,F=u.length;w<F;w++){const B=u[w];if(m(B)){const Q=P(_),he=i.get(B).__webglTexture;t.bindTexture(Q,he),T(Q),t.unbindTexture()}}}const pe=[],me=[];function ve(_){if(_.samples>0){if(Ee(_)===!1){const u=_.textures,w=_.width,F=_.height;let B=n.COLOR_BUFFER_BIT;const Q=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(_),Z=u.length>1;if(Z)for(let _e=0;_e<u.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ce=_.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let _e=0;_e<u.length;_e++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Le=i.get(u[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,w,F,0,0,w,F,B,n.NEAREST),l===!0&&(pe.length=0,me.length=0,pe.push(n.COLOR_ATTACHMENT0+_e),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(pe.push(Q),me.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let _e=0;_e<u.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Le=i.get(u[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){const u=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[u])}}}function oe(_){return Math.min(s.maxSamples,_.samples)}function Ee(_){const u=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function D(_){const u=a.render.frame;d.get(_)!==u&&(d.set(_,u),_.update())}function Se(_,u){const w=_.colorSpace,F=_.format,B=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||w!==ho&&w!==Ci&&(ot.getTransfer(w)===Mt?(F!==An||B!==En)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",w)),u}function be(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.getTextureUnits=k,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=ae,this.setupRenderTarget=re,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Db(n,e){function t(i,s=Ci){let r;const a=ot.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return n.BYTE;if(i===qh)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===iu)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Jh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===An)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===Qh)return n.RED;if(i===au)return n.RED_INTEGER;if(i===Is)return n.RG;if(i===ou)return n.RG_INTEGER;if(i===lu)return n.RGBA_INTEGER;if(i===qa||i===Ya||i===Ka||i===Ja)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===ac||i===oc||i===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===uc||i===dc||i===fc||i===hc||i===uo||i===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===uc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fc)return r.COMPRESSED_R11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return r.COMPRESSED_RG11_EAC;if(i===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===Sc||i===Mc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rc||i===Pc||i===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Rc)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Ic||i===fo||i===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nb=`
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

}`;class Ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:Ib,fragmentShader:Nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fb extends Us{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const b=typeof XRWebGLBinding<"u",v=new Ub,m={},T=t.getContextAttributes();let P=null,S=null;const A=[],E=[],L=new ft;let y=null,C=null;const N=new Fn;N.viewport=new Dt;const O=new Fn;O.viewport=new Dt;const I=[N,O],U=new Wx;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=A[ie];return ue===void 0&&(ue=new pl,A[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=A[ie];return ue===void 0&&(ue=new pl,A[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=A[ie];return ue===void 0&&(ue=new pl,A[ie]=ue),ue.getHandSpace()};function X(ie){const ue=E.indexOf(ie.inputSource);if(ue===-1)return;const Ce=A[ue];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,c||a),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let ie=0;ie<A.length;ie++){const ue=E[ie];ue!==null&&(E[ie]=null,A[ie].disconnect(ue))}k=null,V=null,v.reset();for(const ie in m)delete m[ie];if(e.setRenderTarget(P),p=null,f=null,h=null,s=null,S=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),C!==null){const ie=C.camera;ie.fov=C.fov,ie.zoom=C.zoom,ie.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ke=null,Te=null;T.depth&&(Te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=T.stencil?Cs:Bi,ke=T.stencil?Jr:ui);const R={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(R),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zn(f.textureWidth,f.textureHeight,{format:An,type:En,depthTexture:new Zr(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ce={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new zn(p.framebufferWidth,p.framebufferHeight,{format:An,type:En,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(ie){for(let ue=0;ue<ie.removed.length;ue++){const Ce=ie.removed[ue],ke=E.indexOf(Ce);ke>=0&&(E[ke]=null,A[ke].disconnect(Ce))}for(let ue=0;ue<ie.added.length;ue++){const Ce=ie.added[ue];let ke=E.indexOf(Ce);if(ke===-1){for(let R=0;R<A.length;R++)if(R>=E.length){E.push(Ce),ke=R;break}else if(E[R]===null){E[R]=Ce,ke=R;break}if(ke===-1)break}const Te=A[ke];Te&&Te.connect(Ce)}}const te=new ee,le=new ee;function de(ie,ue,Ce){te.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Ce.matrixWorld);const ke=te.distanceTo(le),Te=ue.projectionMatrix.elements,R=Ce.projectionMatrix.elements,H=Te[14]/(Te[10]-1),$=Te[14]/(Te[10]+1),ae=(Te[9]+1)/Te[5],re=(Te[9]-1)/Te[5],se=(Te[8]-1)/Te[0],pe=(R[8]+1)/R[0],me=H*se,ve=H*pe,oe=ke/(-se+pe),Ee=oe*-se;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ee),ie.translateZ(oe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Te[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const D=H+oe,Se=$+oe,be=me-Ee,_=ve+(ke-Ee),u=ae*$/Se*D,w=re*$/Se*D;ie.projectionMatrix.makePerspective(be,_,u,w,D,Se),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Re(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ue=ie.near,Ce=ie.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),U.near=O.near=N.near=ue,U.far=O.far=N.far=Ce,(k!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,V=U.far),U.layers.mask=ie.layers.mask|6,N.layers.mask=U.layers.mask&-5,O.layers.mask=U.layers.mask&-3;const ke=ie.parent,Te=U.cameras;Re(U,ke);for(let R=0;R<Te.length;R++)Re(Te[R],ke);Te.length===2?de(U,N,O):U.projectionMatrix.copy(N.projectionMatrix),C===null&&ie.isPerspectiveCamera&&(C={camera:ie,fov:ie.fov,zoom:ie.zoom}),Ue(ie,U,ke)};function Ue(ie,ue,Ce){Ce===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Uc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(U)},this.getCameraTexture=function(ie){return m[ie]};let ct=null;function nt(ie,ue){if(d=ue.getViewerPose(c||a),x=ue,d!==null){const Ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ke=!1;Ce.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let $=0;$<Ce.length;$++){const ae=Ce[$];let re=null;if(p!==null)re=p.getViewport(ae);else{const pe=h.getViewSubImage(f,ae);re=pe.viewport,$===0&&(e.setRenderTargetTextures(S,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(S))}let se=I[$];se===void 0&&(se=new Fn,se.layers.enable($),se.viewport=new Dt,I[$]=se),se.matrix.fromArray(ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(re.x,re.y,re.width,re.height),$===0&&(U.matrix.copy(se.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(se)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const $=h.getDepthInformation(Ce[0]);$&&$.isValid&&$.texture&&v.init($,s.renderState)}if(Te&&Te.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let $=0;$<Ce.length;$++){const ae=Ce[$].camera;if(ae){let re=m[ae];re||(re=new cp,m[ae]=re);const se=h.getCameraImage(ae);re.sourceTexture=se}}}}for(let Ce=0;Ce<A.length;Ce++){const ke=E[Ce],Te=A[Ce];ke!==null&&Te!==void 0&&Te.update(ke,ue,c||a)}ct&&ct(ie,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Qe=new fp;Qe.setAnimationLoop(nt),this.setAnimationLoop=function(ie){ct=ie},this.dispose=function(){}}}const Ob=new Ot,xp=new tt;xp.set(-1,0,0,0,1,0,0,0,1);function Bb(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,up(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function s(v,m,T,P,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(v,m):m.isMeshLambertMaterial?(r(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(v,m),h(v,m)):m.isMeshPhongMaterial?(r(v,m),d(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,S)):m.isMeshMatcapMaterial?(r(v,m),x(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),b(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&o(v,m)):m.isPointsMaterial?l(v,m,T,P):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===fn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===fn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const T=e.get(m),P=T.envMap,S=T.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(xp),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function o(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,T,P){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*T,v.scale.value=P*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,T){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,m){m.matcap&&(v.matcap.value=m.matcap)}function b(v,m){const T=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kb(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const E=A.program;i.uniformBlockBinding(S,E)}function c(S,A){let E=s[S.id];E===void 0&&(v(S),E=d(S),s[S.id]=E,S.addEventListener("dispose",T));const L=A.program;i.updateUBOMapping(S,L);const y=e.render.frame;r[S.id]!==y&&(f(S),r[S.id]=y)}function d(S){const A=h();S.__bindingPointIndex=A;const E=n.createBuffer(),L=S.__size,y=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const A=s[S.id],E=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let y=0,C=E.length;y<C;y++){const N=E[y];if(Array.isArray(N))for(let O=0,I=N.length;O<I;O++)p(N[O],y,O,L);else p(N,y,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,A,E,L){if(b(S,A,E,L)===!0){const y=S.__offset,C=S.value;if(Array.isArray(C)){let N=0;for(let O=0;O<C.length;O++){const I=C[O],U=m(I);x(I,S.__data,N),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(N+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,S.__data)}}function x(S,A,E){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,E)}function b(S,A,E,L){const y=S.value,C=A+"_"+E;if(L[C]===void 0)return typeof y=="number"||typeof y=="boolean"?L[C]=y:ArrayBuffer.isView(y)?L[C]=y.slice():L[C]=y.clone(),!0;{const N=L[C];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return L[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function v(S){const A=S.uniforms;let E=0;const L=16;for(let C=0,N=A.length;C<N;C++){const O=Array.isArray(A[C])?A[C]:[A[C]];for(let I=0,U=O.length;I<U;I++){const k=O[I],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,W=V.length;X<W;X++){const j=V[X],te=m(j),le=E%L,de=le%te.boundary,Re=le+de;E+=de,Re!==0&&L-Re<te.storage&&(E+=L-Re),k.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=te.storage}}}const y=E%L;return y>0&&(E+=L-y),S.__size=E,S.__cache={},this}function m(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):et("WebGLRenderer: Unsupported uniform value type.",S),A}function T(S){const A=S.target;A.removeEventListener("dispose",T);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function P(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const Hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function Vb(){return Zn===null&&(Zn=new ap(Hb,16,16,Is,di),Zn.name="DFG_LUT",Zn.minFilter=$t,Zn.magFilter=$t,Zn.wrapS=Ri,Zn.wrapT=Ri,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class zb{constructor(e={}){const{canvas:t=ox(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const b=p,v=new Set([lu,ou,au]),m=new Set([En,ui,Kr,Jr,su,ru]),T=new Uint32Array(4),P=new Int32Array(4),S=new ee;let A=null,E=null;const L=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1,I=null,U=null,k=null,V=null;this._outputColorSpace=bn;let X=0,W=0,j=null,te=-1,le=null;const de=new Dt,Re=new Dt;let Ue=null;const ct=new gt(0);let nt=0,Qe=t.width,ie=t.height,ue=1,Ce=null,ke=null;const Te=new Dt(0,0,Qe,ie),R=new Dt(0,0,Qe,ie);let H=!1;const $=new op;let ae=!1,re=!1;const se=new Ot,pe=new ee,me=new Dt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ee(){return j===null?ue:1}let D=i;function Se(M,z){return t.getContext(M,z)}let be,_,u,w,F,B,Q,he,Z,ce,_e,Le,ye,Me,ze,Ye,Ze,G,we,fe,Ae,Ne,ge;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),D===null){const z="webgl2";if(D=Se(z,M),D===null)throw Se(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(M){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),ht("WebGLRenderer: "+M.message),M}function $e(){be=new VS(D),be.init(),Ae=new Db(D,be),_=new LS(D,be,e,Ae),u=new Pb(D,be),_.reversedDepthBuffer&&f&&u.buffers.depth.setReversed(!0),U=D.createFramebuffer(),k=D.createFramebuffer(),V=D.createFramebuffer(),w=new WS(D),F=new gb,B=new Lb(D,be,u,F,_,Ae,w),Q=new HS(N),he=new Xx(D),Ne=new RS(D,he),Z=new zS(D,he,w,Ne),ce=new XS(D,Z,he,Ne,w),G=new $S(D,_,B),ze=new DS(F),_e=new mb(N,Q,be,_,Ne,ze),Le=new Bb(N,F),ye=new _b,Me=new Eb(be),Ze=new CS(N,Q,u,ce,x,l),Ye=new Rb(N,ce,_),ge=new kb(D,w,_,u),we=new PS(D,be,w),fe=new GS(D,be,w),w.programs=_e.programs,N.capabilities=_,N.extensions=be,N.properties=F,N.renderLists=ye,N.shadowMap=Ye,N.state=u,N.info=w}b!==En&&(C=new YS(b,t.width,t.height,o,s,r));const Ge=new Fb(N,D);this.xr=Ge,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(M){M!==void 0&&(ue=M,this.setSize(Qe,ie,!1))},this.getSize=function(M){return M.set(Qe,ie)},this.setSize=function(M,z,ne=!0){if(Ge.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=M,ie=z,t.width=Math.floor(M*ue),t.height=Math.floor(z*ue),ne===!0&&(t.style.width=M+"px",t.style.height=z+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(Qe*ue,ie*ue).floor()},this.setDrawingBufferSize=function(M,z,ne){Qe=M,ie=z,ue=ne,t.width=Math.floor(M*ne),t.height=Math.floor(z*ne),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(b===En){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,z,ne,Y){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,z,ne,Y),u.viewport(de.copy(Te).multiplyScalar(ue).round())},this.getScissor=function(M){return M.copy(R)},this.setScissor=function(M,z,ne,Y){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,z,ne,Y),u.scissor(Re.copy(R).multiplyScalar(ue).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(M){u.setScissorTest(H=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,ne=!0){let Y=0;if(M){let K=!1;if(j!==null){const Ie=j.texture.format;K=v.has(Ie)}if(K){const Ie=j.texture.type,Oe=m.has(Ie),De=Ze.getClearColor(),He=Ze.getClearAlpha(),We=De.r,st=De.g,at=De.b;Oe?(T[0]=We,T[1]=st,T[2]=at,T[3]=He,D.clearBufferuiv(D.COLOR,0,T)):(P[0]=We,P[1]=st,P[2]=at,P[3]=He,D.clearBufferiv(D.COLOR,0,P))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Ze.dispose(),ye.dispose(),Me.dispose(),F.dispose(),Q.dispose(),ce.dispose(),Ne.dispose(),ge.dispose(),_e.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Eu),Ge.removeEventListener("sessionend",Tu),ds.stop()};function wt(M){M.preventDefault(),Rd("WebGLRenderer: Context Lost."),O=!0}function vt(){Rd("WebGLRenderer: Context Restored."),O=!1;const M=w.autoReset,z=Ye.enabled,ne=Ye.autoUpdate,Y=Ye.needsUpdate,K=Ye.type;$e(),w.autoReset=M,Ye.enabled=z,Ye.autoUpdate=ne,Ye.needsUpdate=Y,Ye.type=K}function Dn(M){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qn(M){const z=M.target;z.removeEventListener("dispose",qn),Ep(z)}function Ep(M){Tp(M),F.remove(M)}function Tp(M){const z=F.get(M).programs;z!==void 0&&(z.forEach(function(ne){_e.releaseProgram(ne)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,ne,Y,K,Ie){z===null&&(z=ve);const Oe=K.isMesh&&K.matrixWorld.determinantAffine()<0,De=Cp(M,z,ne,Y,K);u.setMaterial(Y,Oe);let He=ne.index,We=1;if(Y.wireframe===!0){if(He=Z.getWireframeAttribute(ne),He===void 0)return;We=2}const st=ne.drawRange,at=ne.attributes.position;let Ve=st.start*We,_t=(st.start+st.count)*We;Ie!==null&&(Ve=Math.max(Ve,Ie.start*We),_t=Math.min(_t,(Ie.start+Ie.count)*We)),He!==null?(Ve=Math.max(Ve,0),_t=Math.min(_t,He.count)):at!=null&&(Ve=Math.max(Ve,0),_t=Math.min(_t,at.count));const Ut=_t-Ve;if(Ut<0||Ut===1/0)return;Ne.setup(K,Y,De,ne,He);let Rt,Tt=we;if(He!==null&&(Rt=he.get(He),Tt=fe,Tt.setIndex(Rt)),K.isMesh)Y.wireframe===!0?(u.setLineWidth(Y.wireframeLinewidth*Ee()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(K.isLine){let Xt=Y.linewidth;Xt===void 0&&(Xt=1),u.setLineWidth(Xt*Ee()),K.isLineSegments?Tt.setMode(D.LINES):K.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else K.isPoints?Tt.setMode(D.POINTS):K.isSprite&&Tt.setMode(D.TRIANGLES);if(K.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,Fe=K._multiDrawCounts,jt=K._multiDrawCount,ut=He?he.get(He).bytesPerElement:1,_n=F.get(Y).currentProgram.getUniforms();for(let Yn=0;Yn<jt;Yn++)_n.setValue(D,"_gl_DrawID",Yn),Tt.render(Xt[Yn]/ut,Fe[Yn])}else if(K.isInstancedMesh)Tt.renderInstances(Ve,Ut,K.count);else if(ne.isInstancedBufferGeometry){const Xt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Fe=Math.min(ne.instanceCount,Xt);Tt.renderInstances(Ve,Ut,Fe)}else Tt.render(Ve,Ut)};function bu(M,z,ne,Y){I!==null&&M.isNodeMaterial&&I.setObject(Y,M),ae===!0&&ze.setState(M,ne,!1),M.transparent===!0&&M.side===Ai&&M.forceSinglePass===!1?(M.side=fn,M.needsUpdate=!0,la(M,z,Y),M.side=Ls,M.needsUpdate=!0,la(M,z,Y),M.side=Ai):la(M,z,Y)}this.compile=function(M,z,ne=null){ne===null&&(ne=M),I!==null&&I.renderStart(M,z,ne),E=Me.get(ne),E.init(z),y.push(E),ne.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),M!==ne&&M.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),re=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,re),ae===!0&&ze.setGlobalState(this.clippingPlanes,z),I!==null&&Ye.render(E.state.shadowsArray,ne,z);const Y=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ie=K.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){const De=Ie[Oe];bu(De,ne,z,K),Y.add(De)}else bu(Ie,ne,z,K),Y.add(Ie)}),E=y.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(M,z,ne=null){const Y=this.compile(M,z,ne);return new Promise(K=>{function Ie(){if(Y.forEach(function(Oe){const He=F.get(Oe).currentProgram;(He===void 0||He.isReady())&&Y.delete(Oe)}),Y.size===0){K(M);return}setTimeout(Ie,10)}be.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Bo=null;function wp(M){Bo&&Bo(M)}function Eu(){ds.stop()}function Tu(){ds.start()}const ds=new fp;ds.setAnimationLoop(wp),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(M){Bo=M,Ge.setAnimationLoop(M),M===null?ds.stop():ds.start()},Ge.addEventListener("sessionstart",Eu),Ge.addEventListener("sessionend",Tu),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;I!==null&&I.renderStart(M,z);const ne=Ge.enabled===!0&&Ge.isPresenting===!0,Y=C!==null&&(j===null||ne)&&C.begin(N,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(z),z=Ge.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,z,j),E=Me.get(M,y.length),E.init(z),E.state.textureUnits=B.getTextureUnits(),y.push(E),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(se,si,z.reversedDepth),re=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,re),A=ye.get(M,L.length),A.init(),L.push(A),Ge.enabled===!0&&Ge.isPresenting===!0){const Oe=N.xr.getDepthSensingMesh();Oe!==null&&ko(Oe,z,-1/0,N.sortObjects)}ko(M,z,0,N.sortObjects),A.finish(),I!==null&&I.updateLights(E.state.lightsArray),N.sortObjects===!0&&A.sort(Ce,ke),oe=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,oe&&Ze.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ze.beginShadows();const K=E.state.shadowsArray;if(Ye.render(K,M,z),ae===!0&&ze.endShadows(),(Y&&C.hasRenderPass())===!1){const Oe=A.opaque,De=A.transmissive;if(E.setupLights(),z.isArrayCamera){const He=z.cameras;if(De.length>0)for(let We=0,st=He.length;We<st;We++){const at=He[We];Au(Oe,De,M,at)}oe&&Ze.render(M);for(let We=0,st=He.length;We<st;We++){const at=He[We];wu(A,M,at,at.viewport)}}else De.length>0&&Au(Oe,De,M,z),oe&&Ze.render(M),wu(A,M,z)}j!==null&&W===0&&(B.updateMultisampleRenderTarget(j),B.updateRenderTargetMipmap(j)),Y&&C.end(N),M.isScene===!0&&M.onAfterRender(N,M,z),Ne.resetDefaultState(),te=-1,le=null,y.pop(),y.length>0?(E=y[y.length-1],B.setTextureUnits(E.state.textureUnits),ae===!0&&ze.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?A=L[L.length-1]:A=null,I!==null&&I.renderEnd()};function ko(M,z,ne,Y){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)ne=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($)){Y&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const Oe=ce.update(M),De=M.material;De.visible&&A.push(M,Oe,De,ne,me.z,null,z)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($))){const Oe=ce.update(M),De=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),me.copy(Oe.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(De)){const He=Oe.groups;for(let We=0,st=He.length;We<st;We++){const at=He[We],Ve=De[at.materialIndex];Ve&&Ve.visible&&A.push(M,Oe,Ve,ne,me.z,at,z)}}else De.visible&&A.push(M,Oe,De,ne,me.z,null,z)}}const Ie=M.children;for(let Oe=0,De=Ie.length;Oe<De;Oe++)ko(Ie[Oe],z,ne,Y)}function wu(M,z,ne,Y){const{opaque:K,transmissive:Ie,transparent:Oe}=M;E.setupLightsView(ne),ae===!0&&ze.setGlobalState(N.clippingPlanes,ne),Y&&u.viewport(de.copy(Y)),K.length>0&&oa(K,z,ne),Ie.length>0&&oa(Ie,z,ne),Oe.length>0&&oa(Oe,z,ne),u.buffers.depth.setTest(!0),u.buffers.depth.setMask(!0),u.buffers.color.setMask(!0),u.setPolygonOffset(!1)}function Au(M,z,ne,Y){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Ve=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Ve?di:En,minFilter:As,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ie=E.state.transmissionRenderTarget[Y.id],Oe=Y.viewport||de;Ie.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const De=N.getRenderTarget(),He=N.getActiveCubeFace(),We=N.getActiveMipmapLevel();N.setRenderTarget(Ie),N.getClearColor(ct),nt=N.getClearAlpha(),nt<1&&N.setClearColor(16777215,.5),N.clear(),oe&&Ze.render(ne);const st=N.toneMapping;N.toneMapping=ai;const at=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),ae===!0&&ze.setGlobalState(N.clippingPlanes,Y),oa(M,ne,Y),B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let _t=0,Ut=z.length;_t<Ut;_t++){const Rt=z[_t],{object:Tt,geometry:Xt,material:Fe,group:jt}=Rt;if(Fe.side===Ai&&Tt.layers.test(Y.layers)){const ut=Fe.side;Fe.side=fn,Fe.needsUpdate=!0,Cu(Tt,ne,Y,Xt,Fe,jt),Fe.side=ut,Fe.needsUpdate=!0,Ve=!0}}Ve===!0&&(B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie))}N.setRenderTarget(De,He,We),N.setClearColor(ct,nt),at!==void 0&&(Y.viewport=at),N.toneMapping=st}function oa(M,z,ne){const Y=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Ie=M.length;K<Ie;K++){const Oe=M[K],{object:De,geometry:He,group:We}=Oe;let st=Oe.material;st.allowOverride===!0&&Y!==null&&(st=Y),De.layers.test(ne.layers)&&Cu(De,z,ne,He,st,We)}}function Cu(M,z,ne,Y,K,Ie){I!==null&&K.isNodeMaterial&&I.setObject(M,K),M.onBeforeRender(N,z,ne,Y,K,Ie),M.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(N,z,ne,Y,M,Ie),K.transparent===!0&&K.side===Ai&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,N.renderBufferDirect(ne,z,Y,K,M,Ie),K.side=Ls,K.needsUpdate=!0,N.renderBufferDirect(ne,z,Y,K,M,Ie),K.side=Ai):N.renderBufferDirect(ne,z,Y,K,M,Ie),M.onAfterRender(N,z,ne,Y,K,Ie)}function la(M,z,ne){z.isScene!==!0&&(z=ve);const Y=F.get(M),K=E.state.lights,Ie=E.state.shadowsArray,Oe=K.state.version,De=_e.getParameters(M,K.state,Ie,z,ne,E.state.lightProbeGridArray),He=_e.getProgramCacheKey(De);let We=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;const st=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=Q.get(M.envMap||Y.environment,st),Y.envMapRotation=Y.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",qn),We=new Map,Y.programs=We);let at=We.get(He);if(at!==void 0){if(Y.currentProgram===at&&Y.lightsStateVersion===Oe)return Pu(M,De),at}else De.uniforms=_e.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,ne,De),M.onBeforeCompile(De,N),at=_e.acquireProgram(De,He),We.set(He,at),Y.uniforms=De.uniforms;const Ve=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=ze.uniform),Pu(M,De),Y.needsLights=Pp(M),Y.lightsStateVersion=Oe,Y.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.sunLights.value=K.state.sun,Ve.sunLightShadows.value=K.state.sunShadow,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.sunShadowMatrix.value=K.state.sunShadowMatrix,Ve.sunShadowCascade.value=K.state.sunShadowCascade,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=at,Y.uniformsList=null,at}function Ru(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Za.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Pu(M,z){const ne=F.get(M);ne.outputColorSpace=z.outputColorSpace,ne.batching=z.batching,ne.batchingColor=z.batchingColor,ne.instancing=z.instancing,ne.instancingColor=z.instancingColor,ne.instancingMorph=z.instancingMorph,ne.skinning=z.skinning,ne.morphTargets=z.morphTargets,ne.morphNormals=z.morphNormals,ne.morphColors=z.morphColors,ne.morphTargetsCount=z.morphTargetsCount,ne.numClippingPlanes=z.numClippingPlanes,ne.numIntersection=z.numClipIntersection,ne.vertexAlphas=z.vertexAlphas,ne.vertexTangents=z.vertexTangents,ne.toneMapping=z.toneMapping}function Ap(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(z.matrixWorld);for(let ne=0,Y=M.length;ne<Y;ne++){const K=M[ne];if(K.texture!==null&&K.boundingBox.containsPoint(S))return K}return null}function Cp(M,z,ne,Y,K){z.isScene!==!0&&(z=ve),B.resetTextureUnits();const Ie=z.fog,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,De=j===null?N.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ot.workingColorSpace,He=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=Q.get(Y.envMap||Oe,He),st=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!ne.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,Ut=!!ne.morphAttributes.color;let Rt=ai;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const Tt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Xt=Tt!==void 0?Tt.length:0,Fe=F.get(Y),jt=E.state.lights;if(ae===!0&&(re===!0||M!==le)){const At=M===le&&Y.id===te;ze.setState(Y,M,At)}let ut=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==jt.state.version||Fe.outputColorSpace!==De||K.isBatchedMesh&&Fe.batching===!1||!K.isBatchedMesh&&Fe.batching===!0||K.isBatchedMesh&&Fe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Fe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Fe.instancing===!1||!K.isInstancedMesh&&Fe.instancing===!0||K.isSkinnedMesh&&Fe.skinning===!1||!K.isSkinnedMesh&&Fe.skinning===!0||K.isInstancedMesh&&Fe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Fe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Fe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Fe.instancingMorph===!1&&K.morphTexture!==null||Fe.envMap!==We||Y.fog===!0&&Fe.fog!==Ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ze.numPlanes||Fe.numIntersection!==ze.numIntersection)||Fe.vertexAlphas!==st||Fe.vertexTangents!==at||Fe.morphTargets!==Ve||Fe.morphNormals!==_t||Fe.morphColors!==Ut||Fe.toneMapping!==Rt||Fe.morphTargetsCount!==Xt||!!Fe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Fe.__version=Y.version);let _n=Fe.currentProgram;ut===!0&&(_n=la(Y,z,K),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,_n,Fe));let Yn=!1,Wi=!1,Fs=!1;const bt=_n.getUniforms(),It=Fe.uniforms;if(u.useProgram(_n.program)&&(Yn=!0,Wi=!0,Fs=!0),Y.id!==te&&(te=Y.id,Wi=!0),Fe.needsLights){const At=Ap(E.state.lightProbeGridArray,K);Fe.lightProbeGrid!==At&&(Fe.lightProbeGrid=At,Wi=!0)}if(Yn||le!==M){u.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),bt.setValue(D,"projectionMatrix",M.projectionMatrix),bt.setValue(D,"viewMatrix",M.matrixWorldInverse);const Xi=bt.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,pe.setFromMatrixPosition(M.matrixWorld)),_.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),le!==M&&(le=M,Wi=!0,Fs=!0)}if(Fe.needsLights&&(jt.state.sunShadowMap.length>0&&bt.setValue(D,"sunShadowMap",jt.state.sunShadowMap,B),jt.state.directionalShadowMap.length>0&&bt.setValue(D,"directionalShadowMap",jt.state.directionalShadowMap,B),jt.state.spotShadowMap.length>0&&bt.setValue(D,"spotShadowMap",jt.state.spotShadowMap,B),jt.state.pointShadowMap.length>0&&bt.setValue(D,"pointShadowMap",jt.state.pointShadowMap,B)),K.isSkinnedMesh){bt.setOptional(D,K,"bindMatrix"),bt.setOptional(D,K,"bindMatrixInverse");const At=K.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),bt.setValue(D,"boneTexture",At.boneTexture,B))}K.isBatchedMesh&&(bt.setOptional(D,K,"batchingTexture"),bt.setValue(D,"batchingTexture",K._matricesTexture,B),bt.setOptional(D,K,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",K._indirectTexture,B),bt.setOptional(D,K,"batchingColorTexture"),K._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",K._colorsTexture,B));const $i=ne.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&G.update(K,ne,_n),(Wi||Fe.receiveShadow!==K.receiveShadow)&&(Fe.receiveShadow=K.receiveShadow,bt.setValue(D,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(It.envMapIntensity.value=z.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Vb()),Wi){if(bt.setValue(D,"toneMappingExposure",N.toneMappingExposure),Fe.needsLights&&Rp(It,Fs),Ie&&Y.fog===!0&&Le.refreshFogUniforms(It,Ie),Le.refreshMaterialUniforms(It,Y,ue,ie,E.state.transmissionRenderTarget[M.id]),Fe.needsLights&&Fe.lightProbeGrid){const At=Fe.lightProbeGrid;It.probesSH.value=At.texture,It.probesMin.value.copy(At.boundingBox.min),It.probesMax.value.copy(At.boundingBox.max),It.probesResolution.value.copy(At.resolution)}Za.upload(D,Ru(Fe),It,B)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Za.upload(D,Ru(Fe),It,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(D,"center",K.center),bt.setValue(D,"modelViewMatrix",K.modelViewMatrix),bt.setValue(D,"normalMatrix",K.normalMatrix),bt.setValue(D,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const At=Y.uniformsGroups;for(let Xi=0,Os=At.length;Xi<Os;Xi++){const Du=At[Xi];ge.update(Du,_n),ge.bind(Du,_n)}}return _n}function Rp(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.sunLights.needsUpdate=z,M.sunLightShadows.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Pp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,z,ne){const Y=F.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),F.get(M.texture).__webglTexture=z,F.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ne,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const ne=F.get(M);ne.__webglFramebuffer=z,ne.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,ne=0){j=M,X=z,W=ne;let Y=null,K=!1,Ie=!1;if(M){const De=F.get(M);if(De.__useDefaultFramebuffer!==void 0){u.bindFramebuffer(D.FRAMEBUFFER,De.__webglFramebuffer),de.copy(M.viewport),Re.copy(M.scissor),Ue=M.scissorTest,u.viewport(de),u.scissor(Re),u.setScissorTest(Ue),te=-1;return}else if(De.__webglFramebuffer===void 0)B.setupRenderTarget(M);else if(De.__hasExternalTextures)B.rebindTextures(M,F.get(M.texture).__webglTexture,F.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const st=M.depthTexture;if(De.__boundDepthTexture!==st){if(st!==null&&F.has(st)&&(M.width!==st.image.width||M.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ie=!0);const We=F.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[z])?Y=We[z][ne]:Y=We[z],K=!0):M.samples>0&&B.useMultisampledRTT(M)===!1?Y=F.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[ne]:Y=We,de.copy(M.viewport),Re.copy(M.scissor),Ue=M.scissorTest}else de.copy(Te).multiplyScalar(ue).floor(),Re.copy(R).multiplyScalar(ue).floor(),Ue=H;if(ne!==0&&(Y=U),u.bindFramebuffer(D.FRAMEBUFFER,Y)&&u.drawBuffers(M,Y),u.viewport(de),u.scissor(Re),u.setScissorTest(Ue),K){const De=F.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,ne)}else if(Ie){const De=z;for(let He=0;He<M.textures.length;He++){const We=F.get(M.textures[He]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+He,We.__webglTexture,ne,De)}}else if(M!==null&&ne!==0){const De=F.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,ne)}te=-1};function Lu(M){const z=F.get(M);return(z.__readFormat!==M.format||z.__readType!==M.type)&&(z.__readFormat=M.format,z.__readType=M.type,z.__formatReadable=_.textureFormatReadable(M.format),z.__typeReadable=_.textureTypeReadable(M.type)),z}this.readRenderTargetPixels=function(M,z,ne,Y,K,Ie,Oe,De=0){if(!(M&&M.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=F.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){u.bindFramebuffer(D.FRAMEBUFFER,He);try{const We=M.textures[De],st=We.format,at=We.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De);const Ve=Lu(We);if(Ve.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-Y&&ne>=0&&ne<=M.height-K&&D.readPixels(z,ne,Y,K,Ae.convert(st),Ae.convert(at),Ie)}finally{const We=j!==null?F.get(j).__webglFramebuffer:null;u.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(M,z,ne,Y,K,Ie,Oe,De=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=F.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He)if(z>=0&&z<=M.width-Y&&ne>=0&&ne<=M.height-K){u.bindFramebuffer(D.FRAMEBUFFER,He);const We=M.textures[De],st=We.format,at=We.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De);const Ve=Lu(We);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.bufferData(D.PIXEL_PACK_BUFFER,Ie.byteLength,D.STREAM_READ),D.readPixels(z,ne,Y,K,Ae.convert(st),Ae.convert(at),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ut=j!==null?F.get(j).__webglFramebuffer:null;u.bindFramebuffer(D.FRAMEBUFFER,Ut);const Rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lx(D,Rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ie),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(_t),D.deleteSync(Rt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,ne=0){const Y=Math.pow(2,-ne),K=Math.floor(M.image.width*Y),Ie=Math.floor(M.image.height*Y),Oe=z!==null?z.x:0,De=z!==null?z.y:0;B.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,Oe,De,K,Ie),u.unbindTexture()},this.copyTextureToTexture=function(M,z,ne=null,Y=null,K=0,Ie=0){let Oe,De,He,We,st,at,Ve,_t,Ut;const Rt=M.isCompressedTexture?M.mipmaps[Ie]:M.image;if(ne!==null)Oe=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,We=ne.min.x,st=ne.min.y,at=ne.isBox3?ne.min.z:0;else{const It=Math.pow(2,-K);Oe=Math.floor(Rt.width*It),De=Math.floor(Rt.height*It),M.isDataArrayTexture?He=Rt.depth:M.isData3DTexture?He=Math.floor(Rt.depth*It):He=1,We=0,st=0,at=0}Y!==null?(Ve=Y.x,_t=Y.y,Ut=Y.z):(Ve=0,_t=0,Ut=0);const Tt=Ae.convert(z.format),Xt=Ae.convert(z.type);let Fe;z.isData3DTexture?(B.setTexture3D(z,0),Fe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Fe=D.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Fe=D.TEXTURE_2D),u.activeTexture(D.TEXTURE0),u.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),u.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),u.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const jt=u.getParameter(D.UNPACK_ROW_LENGTH),ut=u.getParameter(D.UNPACK_IMAGE_HEIGHT),_n=u.getParameter(D.UNPACK_SKIP_PIXELS),Yn=u.getParameter(D.UNPACK_SKIP_ROWS),Wi=u.getParameter(D.UNPACK_SKIP_IMAGES);u.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),u.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),u.pixelStorei(D.UNPACK_SKIP_PIXELS,We),u.pixelStorei(D.UNPACK_SKIP_ROWS,st),u.pixelStorei(D.UNPACK_SKIP_IMAGES,at);const Fs=M.isDataArrayTexture||M.isData3DTexture,bt=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const It=F.get(M),$i=F.get(z),At=F.get(It.__renderTarget),Xi=F.get($i.__renderTarget);u.bindFramebuffer(D.READ_FRAMEBUFFER,At.__webglFramebuffer),u.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Os=0;Os<He;Os++)Fs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,F.get(M).__webglTexture,K,at+Os),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,F.get(z).__webglTexture,Ie,Ut+Os)),D.blitFramebuffer(We,st,Oe,De,Ve,_t,Oe,De,D.DEPTH_BUFFER_BIT,D.NEAREST);u.bindFramebuffer(D.READ_FRAMEBUFFER,null),u.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||F.has(M)){const It=F.get(M),$i=F.get(z);u.bindFramebuffer(D.READ_FRAMEBUFFER,k),u.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let At=0;At<He;At++)Fs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,K,at+At):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,K),bt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$i.__webglTexture,Ie,Ut+At):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$i.__webglTexture,Ie),K!==0?D.blitFramebuffer(We,st,Oe,De,Ve,_t,Oe,De,D.COLOR_BUFFER_BIT,D.NEAREST):bt?D.copyTexSubImage3D(Fe,Ie,Ve,_t,Ut+At,We,st,Oe,De):D.copyTexSubImage2D(Fe,Ie,Ve,_t,We,st,Oe,De);u.bindFramebuffer(D.READ_FRAMEBUFFER,null),u.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bt?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Fe,Ie,Ve,_t,Ut,Oe,De,He,Tt,Xt,Rt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,Ie,Ve,_t,Ut,Oe,De,He,Tt,Rt.data):D.texSubImage3D(Fe,Ie,Ve,_t,Ut,Oe,De,He,Tt,Xt,Rt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ie,Ve,_t,Oe,De,Tt,Xt,Rt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ie,Ve,_t,Rt.width,Rt.height,Tt,Rt.data):D.texSubImage2D(D.TEXTURE_2D,Ie,Ve,_t,Oe,De,Tt,Xt,Rt);u.pixelStorei(D.UNPACK_ROW_LENGTH,jt),u.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),u.pixelStorei(D.UNPACK_SKIP_PIXELS,_n),u.pixelStorei(D.UNPACK_SKIP_ROWS,Yn),u.pixelStorei(D.UNPACK_SKIP_IMAGES,Wi),Ie===0&&z.generateMipmaps&&D.generateMipmap(Fe),u.unbindTexture()},this.initRenderTarget=function(M){F.get(M).__webglFramebuffer===void 0&&B.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?B.setTextureCube(M,0):M.isData3DTexture?B.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?B.setTexture2DArray(M,0):B.setTexture2D(M,0),u.unbindTexture()},this.resetState=function(){X=0,W=0,j=null,u.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const cn=15,Gb=.25,_f=.15,xf=.9,Wb=.02,Ul='"Arial Black", "Arial Black", Arial, sans-serif',$b=-.045,yf=1,Xb=1,qb=`
  void main() { gl_Position = vec4(position, 1.0); }
`,Yb={__name:"GlitchText",props:{text:{type:String,default:"GUITAR AI ASSISTANT"},bg:{type:String,default:"#32f08c"},color:{type:String,default:"#000000"}},setup(n){const e=n,t=Be(null);let i=null,s=null,r=null,a=null,o=null,l=null,c=null,d=0,h=null,f=!1;const p=new Float32Array(4*cn*cn);for(let y=0;y<cn*cn;y++)p[y*4]=255*Math.random()-125,p[y*4+1]=255*Math.random()-125;const x={x:0,y:0,prevX:0,prevY:0,vX:0,vY:0};function b(y){const C=t.value.getBoundingClientRect(),N=(y.clientX-C.left)/C.width,O=1-(y.clientY-C.top)/C.height;x.vX=N-x.prevX,x.vY=O-x.prevY,x.x=N,x.y=O,x.prevX=N,x.prevY=O}function v(){x.x=0,x.y=0,x.prevX=0,x.prevY=0,x.vX=0,x.vY=0}function m(){for(let I=0;I<cn*cn;I++)p[I*4]*=xf,p[I*4+1]*=xf;const y=cn*x.x,C=cn*x.y,N=cn*Gb,O=N*N;for(let I=0;I<cn;I++){const U=C-I;for(let k=0;k<cn;k++){const V=y-k,X=V*V+U*U;if(X>=O)continue;const W=4*(k+cn*I),j=Math.min(N/Math.sqrt(X),10);p[W]+=100*_f*x.vX*j,p[W+1]-=100*_f*x.vY*j}}c.needsUpdate=!0}function T(){const y=t.value.getBoundingClientRect();if(!y.width||!y.height)return;const C=y.width/y.height,N=2048,O=Math.round(N/C),I=document.createElement("canvas");I.width=N,I.height=O;const U=I.getContext("2d");U.clearRect(0,0,N,O),U.textAlign="center",U.textBaseline="alphabetic",U.fillStyle=e.color;const k=200;U.letterSpacing="0px",U.font=`900 ${k}px ${Ul}`;const V=U.measureText(e.text).width||1;let X=k*(N*yf)/V;U.letterSpacing=`${$b*X}px`,U.font=`900 ${X}px ${Ul}`;const W=U.measureText(e.text).width||1;X=X*(N*yf)/W,U.font=`900 ${X}px ${Ul}`;const j=U.measureText(e.text),te=j.actualBoundingBoxAscent||X,le=j.actualBoundingBoxDescent||0,de=te+le||X,Re=O*Xb/de,Ue=O/2+(te-le)/2;U.save(),U.translate(0,O/2),U.scale(1,Re),U.translate(0,-O/2),U.fillText(e.text,N/2,Ue),U.restore(),l==null||l.dispose(),l=new Nx(I),l.minFilter=$t,l.generateMipmaps=!1,a&&(a.uniforms.uTex.value=l)}const P=`
  precision highp float;
  uniform sampler2D uTex;   // 文字纹理
  uniform sampler2D uData;  // 网格偏移场（15×15，RGBA float）
  uniform vec2 uRes;
  uniform vec3 uBg;

  void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    // 每格取一个偏移量（最近邻采样 → 边界笔直），偏移量连续变化 → 果冻般的推挤形变
    vec4 off = texture2D(uData, uv);
    vec4 c = texture2D(uTex, uv - ${Wb} * off.rg);
    gl_FragColor = vec4(mix(uBg, c.rgb, c.a), 1.0);
  }
`;function S(){f||(d=requestAnimationFrame(S),m(),i.render(s,r))}function A(){if(!i||f)return;const y=t.value.getBoundingClientRect();if(!y.width||!y.height)return;i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(y.width,y.height,!1);const C=new ft;i.getDrawingBufferSize(C),a.uniforms.uRes.value.set(C.x,C.y),T()}function E(y){y.preventDefault(),f=!0,cancelAnimationFrame(d)}function L(){var y;f=!1,(y=i.resetState)==null||y.call(i),A(),d=requestAnimationFrame(S)}return zi(()=>{i=new zb({canvas:t.value,antialias:!0}),s=new Ex,r=new hu(-1,1,1,-1,0,1),c=new ap(p,cn,cn,An,kn),c.needsUpdate=!0,o=new aa(2,2),a=new Wn({vertexShader:qb,fragmentShader:P,uniforms:{uTex:{value:null},uData:{value:c},uRes:{value:new ft(1,1)},uBg:{value:new gt().setStyle(e.bg,Ci)}}}),s.add(new fi(o,a)),T(),t.value.addEventListener("mousemove",b),t.value.addEventListener("mouseleave",v),t.value.addEventListener("webglcontextlost",E),t.value.addEventListener("webglcontextrestored",L),h=new ResizeObserver(A),h.observe(t.value),A(),d=requestAnimationFrame(S)}),ci(()=>{cancelAnimationFrame(d),h==null||h.disconnect();const y=t.value;y==null||y.removeEventListener("mousemove",b),y==null||y.removeEventListener("mouseleave",v),y==null||y.removeEventListener("webglcontextlost",E),y==null||y.removeEventListener("webglcontextrestored",L),o==null||o.dispose(),a==null||a.dispose(),l==null||l.dispose(),c==null||c.dispose(),i==null||i.dispose(),o=null,a=null,l=null,c=null,i=null,s=null,r=null,h=null}),(y,C)=>(q(),J("canvas",{ref_key:"canvasEl",ref:t,class:"glitch-canvas"},null,512))}},Kb=hi(Yb,[["__scopeId","data-v-a430410e"]]),Jb=["src","alt"],Zb={key:0,class:"slide-caption"},Qb={key:0,class:"caption-title"},jb={key:1,class:"caption-sub"},eE={class:"dots"},tE=["onClick","aria-label"],nE={__name:"ImageCarousel",props:{images:{type:Array,required:!0},height:{type:String,default:"70vh"},autoPlay:{type:Boolean,default:!1},interval:{type:Number,default:5e3}},setup(n){const e=n,t=Be(0),i=Be(null),s=Lt(()=>e.images.length),r=Lt(()=>({transform:`translateX(-${t.value*100}%)`,transition:"transform 0.6s ease"}));function a(){t.value<=0?t.value=s.value-1:t.value--}function o(){t.value>=s.value-1?t.value=0:t.value++}function l(P){t.value=P}let c=0,d=0;function h(P){c=P.touches[0].clientX}function f(P){d=P.changedTouches[0].clientX;const S=c-d;Math.abs(S)>50&&(S>0?o():a())}function p(P){P.key==="ArrowLeft"?(a(),P.preventDefault()):P.key==="ArrowRight"&&(o(),P.preventDefault())}let x=null;function b(){e.autoPlay&&(x=setInterval(o,e.interval))}function v(){x&&(clearInterval(x),x=null)}function m(){v()}function T(){b()}return wn(()=>e.autoPlay,P=>{P?b():v()}),zi(()=>{b(),window.addEventListener("keydown",p)}),ci(()=>{v(),window.removeEventListener("keydown",p)}),(P,S)=>(q(),J("section",{class:"carousel",style:On({height:n.height}),onTouchstartPassive:h,onTouchend:f,onMouseenter:m,onMouseleave:T},[g("div",{ref_key:"trackRef",ref:i,class:"carousel-track",style:On(r.value)},[(q(!0),J(je,null,yt(n.images,(A,E)=>(q(),J("div",{key:E,class:"slide"},[g("img",{src:A.src,alt:A.title||`slide-${E}`,draggable:"false"},null,8,Jb),A.title||A.subtitle?(q(),J("div",Zb,[A.title?(q(),J("h2",Qb,xe(A.title),1)):qe("",!0),A.subtitle?(q(),J("p",jb,xe(A.subtitle),1)):qe("",!0)])):qe("",!0)]))),128))],4),g("button",{class:"arrow arrow-prev",onClick:a,"aria-label":"上一张"},[...S[0]||(S[0]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M15 18l-6-6 6-6"})],-1)])]),g("button",{class:"arrow arrow-next",onClick:o,"aria-label":"下一张"},[...S[1]||(S[1]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M9 6l6 6-6 6"})],-1)])]),g("div",eE,[(q(!0),J(je,null,yt(n.images,(A,E)=>(q(),J("button",{key:E,class:Ke(["dot",{active:E===t.value}]),onClick:L=>l(E),"aria-label":`跳转到第 ${E+1} 张`},null,10,tE))),128))])],36))}},iE=hi(nE,[["__scopeId","data-v-ac1de677"]]),Sf=[{id:"joyo-jam-buddy-2",brand:"Joyo",model:"Jam Buddy II",type:"便携充电音箱效果器",description:"自带通道切换、箱模、EQ、调制、延迟、混响，锂电供电口袋尺寸",status:"supported",image:"joyo.jpg"},{id:"boss-katana-air",brand:"Boss",model:"Katana-Air",type:"无线便携音箱效果器",description:"立体箱模拟 + 无线传输 + 内置效果，音色成熟稳定",status:"planned",image:"boss.jpg"},{id:"fender-mustang-micro",brand:"Fender",model:"Mustang Micro",type:"耳机接口便携效果器",description:"经典 Fender 箱模 + 基础效果，插进耳机直接练",status:"planned",image:"fender.jpg"},{id:"positive-grid-spark",brand:"Positive Grid",model:"Spark 40 / Mini",type:"智能音箱效果器",description:"BIAS 引擎 + 应用商店 + 自动和弦识别，智能调参",status:"planned",image:"spark.jpg"},{id:"nux-mighty-plug-pro",brand:"NUX",model:"Mighty Plug Pro",type:"USB 耳机效果器",description:"IR 采样 + 板载效果 + USB 录音，桌面练琴神器",status:"planned"},{id:"mooer-hornet",brand:"Mooer",model:"Hornet",type:"便携蓝牙音箱效果器",description:"MOOER 云音色库 + 充电 + 蓝牙伴奏，国产性价比",status:"planned"}],sE={class:"pedal-selector"},rE={class:"supported-list"},aE=["onClick"],oE={class:"hero-photo"},lE=["src","alt"],cE={key:1,class:"photo-placeholder"},uE={class:"hero-info"},dE={class:"pedal-brand"},fE={class:"pedal-model"},hE={class:"pedal-type"},pE={class:"pedal-desc"},mE={key:0,class:"hero-check"},gE={key:0,class:"planned-wrap"},vE={class:"planned-chips"},_E={__name:"PedalSelector",props:{modelValue:{type:String,default:"joyo-jam-buddy-2"}},emits:["update:modelValue","select"],setup(n,{emit:e}){const t=n,i=e,s=Lt({get:()=>t.modelValue,set:c=>i("update:modelValue",c)}),r=Lt(()=>Sf.filter(c=>c.status==="supported")),a=Lt(()=>Sf.filter(c=>c.status!=="supported"));function o(c){c.status==="supported"&&(s.value=c.id,i("select",c))}function l(c){return s.value===c.id}return(c,d)=>(q(),J("div",sE,[d[4]||(d[4]=g("div",{class:"selector-header"},[g("h3",{class:"selector-title"},"选择你的效果器"),g("p",{class:"selector-hint"},"AI 会根据设备型号输出对应参数")],-1)),g("div",rE,[(q(!0),J(je,null,yt(r.value,h=>(q(),J("div",{key:h.id,class:Ke(["pedal-hero",{active:l(h)}]),onClick:f=>o(h)},[g("div",oE,[h.image?(q(),J("img",{key:0,src:h.image,alt:h.model,loading:"lazy"},null,8,lE)):(q(),J("span",cE,[...d[0]||(d[0]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),g("circle",{cx:"12",cy:"12",r:"3.2"}),g("path",{d:"M8 5l1.5-2h5L16 5"})],-1)])])),d[1]||(d[1]=g("span",{class:"badge supported"},"已支持",-1))]),g("div",uE,[g("div",dE,xe(h.brand),1),g("div",fE,xe(h.model),1),g("div",hE,xe(h.type),1),g("div",pE,xe(h.description),1),l(h)?(q(),J("span",mE,[...d[2]||(d[2]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M20 6L9 17l-5-5"})],-1),Vn(" 当前使用 ",-1)])])):qe("",!0)])],10,aE))),128))]),a.value.length?(q(),J("div",gE,[d[3]||(d[3]=g("span",{class:"planned-label"},"更多设备即将支持：",-1)),g("div",vE,[(q(!0),J(je,null,yt(a.value,h=>(q(),J("span",{key:h.id,class:"planned-chip"},xe(h.brand)+" "+xe(h.model),1))),128))])])):qe("",!0)]))}},xE=hi(_E,[["__scopeId","data-v-0f7b2cc7"]]),pu="HHHHhha-user",ki=Be(null);function yE(){try{const n=localStorage.getItem(pu);ki.value=n?JSON.parse(n):null}catch{ki.value=null}}yE();const SE=Lt(()=>!!ki.value),ME=Lt(()=>{var n;return((n=ki.value)==null?void 0:n.nickname)||""}),bE=Lt(()=>{var n;return((n=ki.value)==null?void 0:n.avatar)||""});function EE({nickname:n,avatar:e}){var i;const t={nickname:String(n||"").trim().slice(0,12)||"吉他手",avatar:e||"",createdAt:((i=ki.value)==null?void 0:i.createdAt)||Date.now()};return ki.value=t,localStorage.setItem(pu,JSON.stringify(t)),t}function TE(){ki.value=null,localStorage.removeItem(pu)}function mu(){return{user:ki,isLoggedIn:SE,nickname:ME,avatar:bE,saveUser:EE,logout:TE}}const yp="HHHHhha-favorites",$n=Be([]);function wE(){try{const n=localStorage.getItem(yp);$n.value=n?JSON.parse(n):[]}catch{$n.value=[]}}wE();function gu(){localStorage.setItem(yp,JSON.stringify($n.value))}function AE(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Sp(n,e){if(!n||!e)return!1;const t=n.trim().toLowerCase();return $n.value.some(i=>{var a;if(((a=i.description)==null?void 0:a.trim().toLowerCase())!==t)return!1;const s=i.params||{},r=e||{};return JSON.stringify(s)===JSON.stringify(r)})}function CE({description:n,params:e,explanation:t,tips:i,pedalId:s}){if(Sp(n,e))return null;const r={id:AE(),description:n||"",params:e?JSON.parse(JSON.stringify(e)):{},explanation:t||"",tips:i?[...i]:[],pedalId:s||"joyo-jam-buddy-2",createdAt:Date.now()};return $n.value.unshift(r),gu(),r}function RE(n){const e=$n.value.findIndex(t=>t.id===n);e>=0&&($n.value.splice(e,1),gu())}function PE(){$n.value=[],gu()}function LE(n){return $n.value.find(e=>e.id===n)}const DE=Lt(()=>$n.value.length);function Qr(){return{favorites:$n,count:DE,isFavorited:Sp,addFavorite:CE,removeFavorite:RE,clearAll:PE,getById:LE}}function js(n,e){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${n}"/>`+e+"</svg>";return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t)}const Sn="#ffffff",Mf=[{id:"pick",name:"拨片",src:js("#ff8a4d",`<path d="M20 20 Q32 14 44 20 Q42 40 32 50 Q22 40 20 20 Z" fill="${Sn}" opacity="0.95"/><path d="M27 24 Q32 22 37 24" stroke="#ff8a4d" stroke-width="2.5" fill="none" stroke-linecap="round"/>`)},{id:"amp",name:"音箱",src:js("#4ade80",`<rect x="16" y="18" width="32" height="28" rx="3" fill="${Sn}"/><circle cx="25" cy="32" r="6" fill="#1a2e22"/><circle cx="39" cy="32" r="6" fill="#1a2e22"/><rect x="20" y="48" width="24" height="3" rx="1.5" fill="${Sn}"/>`)},{id:"note",name:"音符",src:js("#7c6bf0",`<rect x="36" y="14" width="4" height="28" fill="${Sn}"/><path d="M40 14 Q50 17 50 24 L40 24 Z" fill="${Sn}"/><ellipse cx="29" cy="42" rx="9" ry="7" fill="${Sn}"/>`)},{id:"vinyl",name:"黑胶",src:js("#ffd76a",`<circle cx="32" cy="32" r="18" fill="#222"/><circle cx="32" cy="32" r="18" fill="none" stroke="${Sn}" stroke-width="1" opacity="0.35"/><circle cx="32" cy="32" r="13" fill="none" stroke="${Sn}" stroke-width="1" opacity="0.25"/><circle cx="32" cy="32" r="5" fill="${Sn}"/>`)},{id:"guitar",name:"电吉他",src:js("#4a9ff0",`<g transform="rotate(-35 32 32)"><rect x="30" y="10" width="4" height="26" rx="1.5" fill="${Sn}"/><path d="M22 34 Q22 30 32 30 Q42 30 42 34 Q42 46 32 48 Q22 46 22 34 Z" fill="${Sn}"/><circle cx="32" cy="38" r="3.5" fill="#1d3a5c"/></g>`)},{id:"rock",name:"摇滚",src:js("#ff5f8f",`<path d="M36 10 L22 34 L30 34 L26 54 L44 28 L35 28 Z" fill="${Sn}"/>`)}],IE={class:"profile-dialog"},NE={class:"dialog-head"},UE={class:"avatar-preview"},FE=["src"],OE={key:1,class:"avatar-fallback"},BE={class:"preset-grid"},kE=["title","onClick"],HE=["src","alt"],VE={class:"upload-btn"},zE={key:0,class:"error-text"},GE={class:"dialog-actions"},WE={__name:"ProfileDialog",props:{open:{type:Boolean,default:!1},mode:{type:String,default:"edit"}},emits:["close","saved"],setup(n,{emit:e}){const t=n,i=e,{user:s,saveUser:r}=mu(),a=Be(""),o=Be(""),l=Be("");wn(()=>t.open,f=>{var p,x;f&&(a.value=((p=s.value)==null?void 0:p.nickname)||"",o.value=((x=s.value)==null?void 0:x.avatar)||Mf[0].src,l.value="")});function c(f){o.value=f}function d(f){var b;const p=(b=f.target.files)==null?void 0:b[0];if(!p)return;if(!p.type.startsWith("image/")){l.value="请选择图片文件";return}const x=new FileReader;x.onload=()=>{const v=new Image;v.onload=()=>{const T=document.createElement("canvas");T.width=128,T.height=128;const P=T.getContext("2d"),S=Math.min(v.width,v.height),A=(v.width-S)/2,E=(v.height-S)/2;P.drawImage(v,A,E,S,S,0,0,128,128),o.value=T.toDataURL("image/jpeg",.85),l.value=""},v.onerror=()=>{l.value="图片读取失败"},v.src=x.result},x.readAsDataURL(p),f.target.value=""}function h(){const f=a.value.trim();if(f.length<1){l.value="昵称不能为空";return}if(f.length>12){l.value="昵称最多 12 个字符";return}r({nickname:f,avatar:o.value}),i("saved"),i("close")}return(f,p)=>(q(),us(ta,{to:"body"},[dt(ls,{name:"fade"},{default:Oi(()=>[n.open?(q(),J("div",{key:0,class:"profile-mask",onClick:p[3]||(p[3]=Et(x=>i("close"),["self"]))},[g("div",IE,[g("div",NE,[g("h3",null,xe(n.mode==="create"?"创建你的乐手档案":"编辑个人资料"),1),g("button",{class:"icon-close",onClick:p[0]||(p[0]=x=>i("close")),"aria-label":"关闭"},"×")]),g("div",UE,[o.value?(q(),J("img",{key:0,src:o.value,alt:"头像预览"},null,8,FE)):(q(),J("span",OE,"♪"))]),p[5]||(p[5]=g("label",{class:"field-label"},"昵称",-1)),ti(g("input",{"onUpdate:modelValue":p[1]||(p[1]=x=>a.value=x),class:"nick-input",type:"text",maxlength:"12",placeholder:"给自己起个名字（最多12字）",onKeyup:qr(h,["enter"])},null,544),[[ar,a.value]]),p[6]||(p[6]=g("label",{class:"field-label"},"选择头像",-1)),g("div",BE,[(q(!0),J(je,null,yt(Je(Mf),x=>(q(),J("button",{key:x.id,class:Ke(["preset-item",{active:o.value===x.src}]),title:x.name,onClick:b=>c(x.src)},[g("img",{src:x.src,alt:x.name},null,8,HE)],10,kE))),128))]),g("label",VE,[p[4]||(p[4]=Vn(" 从电脑上传图片 ",-1)),g("input",{type:"file",accept:"image/*",onChange:d,hidden:""},null,32)]),l.value?(q(),J("p",zE,xe(l.value),1)):qe("",!0),g("div",GE,[n.mode==="edit"?(q(),J("button",{key:0,class:"btn-ghost",onClick:p[2]||(p[2]=x=>i("close"))},"取消")):qe("",!0),g("button",{class:"btn-primary",onClick:h},xe(n.mode==="create"?"开始使用":"保存"),1)])])])):qe("",!0)]),_:1})]))}},Mp=hi(WE,[["__scopeId","data-v-6dcc56d5"]]),$E=["title"],XE=["src"],qE={key:1,class:"user-default",viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor"},YE={class:"dd-head"},KE=["src"],JE={key:1,class:"dd-avatar dd-avatar-empty"},ZE={class:"dd-info"},QE={class:"dd-nick"},jE={class:"dd-plan"},eT={class:"dd-group"},tT={key:0,class:"dd-badge"},nT={class:"settings-sub"},iT={key:0,class:"dd-group"},sT={__name:"UserMenu",emits:["open-favorites","open-custom","open-settings"],setup(n,{emit:e}){const t=e,{isLoggedIn:i,nickname:s,avatar:r,logout:a}=mu(),{count:o}=Qr(),l=Be(!1),c=Be(!1),d=Be("edit"),h=Be(null);function f(){l.value=!l.value}function p(){l.value=!1,d.value=i.value?"edit":"create",c.value=!0}function x(){l.value=!1,t("open-favorites")}function b(){l.value=!1,t("open-custom")}function v(A=""){l.value=!1,t("open-settings",A)}function m(){l.value=!1,a()}const T=Be(!1);function P(A){l.value&&h.value&&!h.value.contains(A.target)&&(l.value=!1)}function S(A){A.key==="Escape"&&(l.value=!1,c.value=!1)}return zi(()=>{document.addEventListener("click",P),document.addEventListener("keydown",S)}),ci(()=>{document.removeEventListener("click",P),document.removeEventListener("keydown",S)}),(A,E)=>(q(),J("div",{class:"user-menu",ref_key:"menuEl",ref:h},[g("button",{class:Ke(["user-trigger",{logged:Je(i)}]),onClick:Et(f,["stop"]),title:Je(i)?Je(s):"打开用户菜单"},[Je(i)&&Je(r)?(q(),J("img",{key:0,src:Je(r),alt:"用户头像",class:"user-avatar"},null,8,XE)):(q(),J("svg",qE,[...E[9]||(E[9]=[g("circle",{cx:"12",cy:"8",r:"4"},null,-1),g("path",{d:"M4 21 C4 15.5 7.6 13 12 13 C16.4 13 20 15.5 20 21 Z"},null,-1)])]))],10,$E),dt(ls,{name:"drop"},{default:Oi(()=>[l.value?(q(),J("div",{key:0,class:"user-dropdown",onClick:E[7]||(E[7]=Et(()=>{},["stop"]))},[g("div",YE,[Je(i)&&Je(r)?(q(),J("img",{key:0,src:Je(r),alt:"",class:"dd-avatar"},null,8,KE)):(q(),J("div",JE,[...E[10]||(E[10]=[g("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"#8a8a96"},[g("circle",{cx:"12",cy:"8",r:"4"}),g("path",{d:"M4 21 C4 15.5 7.6 13 12 13 C16.4 13 20 15.5 20 21 Z"})],-1)])])),g("div",ZE,[g("div",QE,xe(Je(i)?Je(s):"未命名乐手"),1),g("span",jE,xe(Je(i)?"免费":"游客"),1)])]),g("button",{class:"dd-primary",onClick:p},xe(Je(i)?"编辑资料":"创建档案"),1),g("div",eT,[g("button",{class:"dd-item",onClick:x},[E[11]||(E[11]=g("span",null,"我的收藏",-1)),Je(o)>0?(q(),J("span",tT,xe(Je(o)),1)):qe("",!0)]),g("button",{class:"dd-item",onClick:b},[...E[12]||(E[12]=[g("span",null,"自定义参数",-1)])]),g("div",{class:Ke(["dd-settings-wrap",{open:T.value}]),onMouseenter:E[5]||(E[5]=L=>T.value=!0),onMouseleave:E[6]||(E[6]=L=>T.value=!1)},[g("button",{class:"dd-item",onClick:E[0]||(E[0]=L=>v())},[...E[13]||(E[13]=[g("span",null,"设置",-1),g("svg",{class:"dd-arrow",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("polyline",{points:"9 18 15 12 9 6"})],-1)])]),g("div",nT,[g("button",{class:"sub-item",onClick:E[1]||(E[1]=L=>v("general"))},"通用"),g("button",{class:"sub-item",onClick:E[2]||(E[2]=L=>v("apikey"))},"API Key"),g("button",{class:"sub-item",onClick:E[3]||(E[3]=L=>v("backup"))},"数据备份"),g("button",{class:"sub-item",onClick:E[4]||(E[4]=L=>v("about"))},"关于")])],34)]),Je(i)?(q(),J("div",iT,[g("button",{class:"dd-item danger",onClick:m},"退出登录")])):qe("",!0)])):qe("",!0)]),_:1}),dt(Mp,{open:c.value,mode:d.value,onClose:E[8]||(E[8]=L=>c.value=!1)},null,8,["open","mode"])],512))}},rT=hi(sT,[["__scopeId","data-v-5b31d552"]]),bp="HHHHhha-custom-tones",Xn=Be([]);function aT(){try{const n=localStorage.getItem(bp);Xn.value=n?JSON.parse(n):[]}catch{Xn.value=[]}}aT();function Oo(){localStorage.setItem(bp,JSON.stringify(Xn.value))}function oT(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function lT(n){if(!n)return null;const e={id:oT(),name:`自定义 #${Xn.value.length+1}`,params:JSON.parse(JSON.stringify(n)),createdAt:Date.now()};return Xn.value.unshift(e),Oo(),e}function cT(n){const e=Xn.value.findIndex(t=>t.id===n);e>=0&&(Xn.value.splice(e,1),Oo())}function uT(n,e){const t=Xn.value.find(i=>i.id===n);t&&e&&(t.name=e,Oo())}function dT(){Xn.value=[],Oo()}const fT=Lt(()=>Xn.value.length);function vo(){return{customs:Xn,count:fT,addCustom:lT,removeCustom:cT,renameCustom:uT,clearAll:dT}}const vu=[{version:"v1.6",date:"2026-09-24",major:!0,title:"AI 参数全覆盖",notes:["AMPLIFIER 参数（amp_high/amp_mid/amp_low）纳入 AI 生成范围——之前 AI 只调面板 EQ，现在放大器独立 EQ 也能调了","AMP MISC 高级参数（phase/截止频率/Q值/HPF/LPF）纳入 AI 生成范围——8 个参数全部有 Schema、Prompt、归一化覆盖","后端四层同步扩展：tone.py 新增 AmpMisc Schema、prompt_service 注入参数说明和调参原则、main.py 提取/钳制逻辑、知识库补充定义",'System Prompt 精度提升：明确"大部分场景保持默认，仅特定需求才微调"的优先级指引，避免 AI 乱动微调参数',"调参只改参数值不再自动开启效果（两层副作用修复），旋钮下方文字 NONE→None","MOD./D.SPEED 弹窗无调制时图标区留空，不再显示兜底蓝色踏板图标"]},{version:"v1.52",date:"2026-09-24",major:!1,title:"调参与踏板解耦",notes:["修复：弹窗里点 +/- 调参时踏板 LED 跟着亮——两层根因：adjust() 调参后自动把效果 enabled=true（第一层）+ normalizeParams 里 reverb.mix>0 自动兜底 enabled=true（第二层），两处副作用都会触发踏板状态更新","调参现在只改参数值，normalizeParams 只看显式 enabled 字段，效果开关由 ON/OFF 按钮独立控制，踏板和参数互不影响",'MOD./D.SPEED 弹窗：无调制效果时图标区留空，不再显示兜底蓝色踏板图标（LcdPopup.vue 的 fx-icon div 加 v-if="info.fxView.icon" 跳过空图标）','设置抽屉"关于"组文案改为「版本更新日志」（原 FX Tone AI）',"关于页版本日志改为全宽时间线排版（参考 Linear Changelog）"]},{version:"v1.51",date:"2026-09-23",major:!1,title:"图标与细节打磨",notes:["Analog / Chorus / Vibrato / Tremolo 图标统一为 OD 小踏板样式，配色区分","Digital 数字机架整体缩小一档，Hall 神殿比例微调","无调制效果时弹窗图标区留空、旋钮显示 NONE，不再出现兜底图标","修复：切换箱体时其他旋钮跟着动、AI 结果页误显切换箭头、自定义模式误显收藏按钮、刷新偶发白屏"]},{version:"v1.5",date:"2026-09-23",major:!0,title:"开机待机",notes:["开机即可试效果：四个效果弹窗支持左右切换效果器与箱体","LCD 屏右侧实时显示当前箱体图标，CHANNEL 通道名大写","开机为干净待机：效果参数全部清零显示 NONE，不预载音色","关机时自动收起打开中的参数弹窗"]},{version:"v1.41",date:"2026-09-23",major:!1,title:"代码架构与自动化测试",notes:["踏板组件拆分：面板纯数据抽离到 pedalMeta.js，LCD 弹窗独立为 LcdPopup.vue（主文件 2600+ 行减至 1750 行）","新增 Playwright 冒烟测试：开机 → 弹窗调参 → 关机全流程自动回归（npm run test:e2e）","清理无引用的死代码与样式，功能表现不变"]},{version:"v1.4",date:"2026-09-23",major:!0,title:"复古像素 UI",notes:["箱体图标全面换新：复古像素窗口风格（阶梯标签页、状态栏圆点、CRT 扫描线、红色关闭钮）","7 组箱体按血统分色：Fender 白网格 / Marshall 金 / Mesa 红 / EVH 浅蓝","OD 版箱体带芯片标识，组内型号以点亮圆点数区分"]},{version:"v1.33",date:"2026-09-23",major:!1,title:"小交互优化",notes:["新增 F11 全屏体验提示（结果面板右上角）","退出自定义模式回到关机待机状态","进入自定义模式始终从默认参数起步，旋钮回正"]},{version:"v1.32",date:"2026-09-23",major:!1,title:"通道指示灯逻辑",notes:["待机 / 关机时通道灯全灭","开机 Clean 通道 = CLEAN + RHYTHM 默认双亮","通道灯改为纯指示灯不可点击，切换通道走脚踏板"]},{version:"v1.31",date:"2026-09-22",major:!1,title:"编码器旋钮",notes:["DLY. / D.MIX / MOD. / AMP 四旋钮为编码器：开机后恒指 12 点钟，参数变化不带动指针（真机行为）","调参时只有被调的旋钮平滑转动，其余旋钮保持不动"]},{version:"v1.3",date:"2026-09-22",major:!0,title:"电源系统",notes:["新增 POWER / 蓝牙拨动开关，还原真机开关手感","开机全流程动画：旋钮平滑转位、LCD 文字淡入、电源灯呼吸点亮、蓝牙自动开启","关机反向动画，LCD 玻璃恒纯黑；刷新页面保持关机待机"]},{version:"v1.21",date:"2026-09-22",major:!1,title:"调参细节优化",notes:["HPF / LPF 到边界不再越界跳变，OFF 与频率切换符合真机逻辑","D.MIX 屏 TIME 改为百分比显示","AI 模式下点击只读参数行会抖动，提示去自定义模式调参"]},{version:"v1.2",date:"2026-09-22",major:!0,title:"AMP/CH.VOL 双菜单",notes:["单击 AMPLIFIER：CH VOL / HPF / LPF / HIGH / MID / LOW","长按 AMP MISC：输入输出相位、高/中/低频截止频率、中频 Q 值","14 种经典箱体（Fender 65 黑面 / Marshall J800 / Mesa Dual Rect / EVH 5153，各含 OD 版）","± 按钮支持长按连调，越调越快"]},{version:"v1.1",date:"2026-09-21",major:!0,title:"效果弹窗系统",notes:["点击效果旋钮弹出真机 Selecting FX 屏幕","全套像素实物图标：混响教堂/神殿、数字机架/模拟踏板/磁带机、五种调制踏板","PRESS 循环切换效果类型，支持 ON/OFF"]},{version:"v1.03",date:"2026-09-21",major:!1,title:"外观对齐真机",notes:["JOYO 网格 3D 质感、音箱面网凹槽","LOOPER CONTROL L 型连线、踏板侧接口等细节还原"]},{version:"v1.02",date:"2026-09-21",major:!1,title:"外壳配色",notes:["新增官方四色外壳：橙（默认）/ 黑 / 铁灰 / 粉","机身右侧色点选择器一键换壳"]},{version:"v1.01",date:"2026-09-21",major:!1,title:"旋钮引导提示",notes:["首次生成音色后，虚线圆圈提示点击旋钮查看参数","每个用户最多出现两次，不再打扰"]},{version:"v1.0",date:"2026-09-20",major:!0,title:"初始上线",notes:["AI 音色生成：描述需求 → AI 分析 → 生成全套音色参数 → 效果器旋钮自动摆位","Joyo Jam Buddy II 效果器拟真面板（旋钮 / LCD / 踏板 / 网格）","预设音色库一键套用、收藏夹、自定义调参模式","本地乐手档案、首页轮播"]}],Bc=vu[0].version,hT={key:0,class:"settings-page"},pT={class:"sp-side"},mT={class:"sp-nav"},gT=["onClick"],vT=["innerHTML"],_T={class:"sp-main"},xT={class:"sp-head"},yT={class:"sp-body"},ST={class:"setting-group"},MT={class:"setting-row"},bT=["aria-pressed"],ET={class:"setting-group"},TT={class:"api-key-row"},wT=["type"],AT=["title"],CT=["innerHTML"],RT={class:"row-actions",style:{"margin-top":"10px"}},PT={key:1,class:"save-status"},LT={key:2,class:"save-status"},DT={class:"setting-group"},IT={class:"setting-row column"},NT={class:"row-text"},UT={class:"row-label"},FT={class:"row-desc"},OT={class:"row-actions"},BT={class:"setting-group"},kT={class:"row-actions",style:{gap:"8px"}},HT={class:"btn-small",style:{cursor:"pointer","user-select":"none"}},VT={key:0,class:"save-status",style:{"margin-left":"4px"}},zT={class:"row-desc",style:{"margin-top":"8px"}},GT={class:"setting-group"},WT={class:"about-row"},$T={key:0,class:"changelog-view"},XT={class:"changelog-head"},qT={class:"changelog-cur"},YT={class:"changelog-body"},KT={class:"release-head"},JT={key:0,class:"release-tag"},ZT={class:"release-date"},QT={class:"release-title"},jT={class:"release-notes"},ka="HHHHhha_llm_api_key",ew='<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',tw='<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',nw={__name:"SettingsDrawer",props:Wu({autoPlay:{type:Boolean,default:!0},group:{type:String,default:""}},{open:{default:!1},openModifiers:{}}),emits:Wu(["update:autoPlay"],["update:open"]),setup(n,{emit:e}){const t=n,i=e,{isLoggedIn:s,nickname:r,logout:a}=mu(),o=jm(n,"open"),l=Be(!1),c=Be(""),d=Be(""),h=Be("");function f(){const I=localStorage.getItem(ka)||"";d.value=I,c.value=I}function p(){const I=c.value.trim();if(!I){localStorage.removeItem(ka),d.value="",h.value="";return}localStorage.setItem(ka,I),d.value=I,h.value="已保存",setTimeout(()=>{h.value=""},1500)}function x(){c.value="",localStorage.removeItem(ka),d.value=""}const{favorites:b}=Qr(),{customs:v}=vo();function m(){const I=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),favorites:b.value,customs:v.value},null,2)],{type:"application/json"}),U=URL.createObjectURL(I),k=document.createElement("a");k.href=U,k.download=`guitar-tone-backup-${new Date().toISOString().slice(0,10)}.json`,k.click(),URL.revokeObjectURL(U)}const T=Be("");function P(I){var V;const U=(V=I.target.files)==null?void 0:V[0];if(!U)return;T.value="";const k=new FileReader;k.onload=()=>{try{const X=JSON.parse(k.result);let W=0;Array.isArray(X.favorites)&&X.favorites.length&&X.favorites.forEach(j=>{j.description&&j.params&&(Qr().addFavorite(j),W++)}),Array.isArray(X.customs)&&X.customs.length&&X.customs.forEach(j=>{j.params&&(vo().addCustom(j.params,j.name),W++)}),T.value=`成功导入 ${W} 条数据`,setTimeout(()=>{T.value=""},2500)}catch{T.value="导入失败：文件格式不对",setTimeout(()=>{T.value=""},2500)}},k.readAsText(U),I.target.value=""}const S=Be(!1),A=[{key:"general",name:"通用",icon:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.08a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'},{key:"apikey",name:"API Key",icon:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>'},{key:"account",name:"账户",icon:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{key:"backup",name:"数据备份",icon:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'},{key:"about",name:"关于",icon:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}],E=Be("general");wn(o,I=>{if(!I){l.value=!1;return}f(),E.value=A.some(U=>U.key===t.group)?t.group:"general"});function L(){i("update:autoPlay",!t.autoPlay)}function y(){l.value=!0}function C(){confirm("确定要清除本地档案吗？昵称和头像都会被删除。")&&a()}const N=Be(!1);function O(I){I.key==="Escape"&&(o.value=!1)}return zi(()=>{document.addEventListener("keydown",O),f()}),ci(()=>document.removeEventListener("keydown",O)),(I,U)=>(q(),us(ta,{to:"body"},[dt(ls,{name:"fade"},{default:Oi(()=>{var k;return[o.value?(q(),J("div",hT,[g("aside",pT,[U[7]||(U[7]=g("div",{class:"sp-logo"},[Vn("Guitar Tone "),g("em",null,"AI")],-1)),g("nav",mT,[(q(),J(je,null,yt(A,V=>g("button",{key:V.key,class:Ke(["sp-nav-item",{active:E.value===V.key}]),onClick:X=>E.value=V.key},[(q(),J("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:V.icon},null,8,vT)),g("span",null,xe(V.name),1)],10,gT)),64))])]),g("div",_T,[g("div",xT,[g("h2",null,xe((k=A.find(V=>V.key===E.value))==null?void 0:k.name),1),g("button",{class:"drawer-close",onClick:U[0]||(U[0]=V=>o.value=!1),"aria-label":"关闭设置"},"×")]),g("div",yT,[ti(g("div",ST,[g("div",MT,[U[9]||(U[9]=g("div",{class:"row-text"},[g("div",{class:"row-label"},"轮播图自动播放"),g("div",{class:"row-desc"},"首页大图是否自动切换")],-1)),g("button",{class:Ke(["switch",{on:n.autoPlay}]),onClick:L,"aria-pressed":n.autoPlay},[...U[8]||(U[8]=[g("span",{class:"knob"},null,-1)])],10,bT)])],512),[[vr,E.value==="general"]]),ti(g("div",ET,[U[10]||(U[10]=g("div",{class:"row-text",style:{"margin-bottom":"10px"}},[g("div",{class:"row-label"},"DeepSeek API Key"),g("div",{class:"row-desc"},"在 platform.deepseek.com 获取。必须填写，否则无法生成音色")],-1)),g("div",TT,[ti(g("input",{"onUpdate:modelValue":U[1]||(U[1]=V=>c.value=V),type:S.value?"text":"password",placeholder:"sk-xxxxxxxxxxxxxxxx",autocomplete:"off",spellcheck:"false",class:"api-key-input"},null,8,wT),[[og,c.value]]),g("button",{class:"btn-small btn-eye",onClick:U[2]||(U[2]=V=>S.value=!S.value),title:S.value?"隐藏":"显示"},[(q(),J("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:S.value?tw:ew},null,8,CT))],8,AT)]),g("div",RT,[g("button",{class:"btn-small",onClick:p},"保存"),d.value?(q(),J("button",{key:0,class:"btn-small danger",onClick:x},"清除")):qe("",!0),h.value?(q(),J("span",PT,xe(h.value),1)):d.value?(q(),J("span",LT,"● 已配置")):qe("",!0)])],512),[[vr,E.value==="apikey"]]),ti(g("div",DT,[g("div",IT,[g("div",NT,[g("div",UT,xe(Je(s)?Je(r):"未创建档案"),1),g("div",FT,xe(Je(s)?"本地乐手档案":"设置昵称和头像，保存在本浏览器"),1)]),g("div",OT,[g("button",{class:"btn-small",onClick:y},xe(Je(s)?"编辑资料":"创建档案"),1),Je(s)?(q(),J("button",{key:0,class:"btn-small danger",onClick:U[3]||(U[3]=(...V)=>Je(a)&&Je(a)(...V))},"退出登录")):qe("",!0)])]),g("button",{class:"setting-link",style:{"margin-top":"14px"},onClick:C},"清除本地档案")],512),[[vr,E.value==="account"]]),ti(g("div",BT,[g("div",kT,[g("button",{class:"btn-small",onClick:m},"导出备份"),g("label",HT,[U[11]||(U[11]=Vn(" 导入备份 ",-1)),g("input",{type:"file",accept:"application/json",style:{display:"none"},onChange:P},null,32)]),T.value?(q(),J("span",VT,xe(T.value),1)):qe("",!0)]),g("div",zT,"收藏 "+xe(Je(b).length)+" 条 · 自定义 "+xe(Je(v).length)+" 条",1)],512),[[vr,E.value==="backup"]]),ti(g("div",GT,[g("div",WT,[U[12]||(U[12]=g("span",null,"版本更新日志",-1)),g("button",{class:"version",onClick:U[4]||(U[4]=V=>N.value=!0),title:"查看更新日志"},xe(Je(Bc)),1)]),U[13]||(U[13]=g("a",{class:"setting-link",href:"https://github.com",target:"_blank",rel:"noopener"}," GitHub 项目主页 ↗ ",-1))],512),[[vr,E.value==="about"]])])]),dt(ls,{name:"fade"},{default:Oi(()=>[N.value?(q(),J("div",$T,[g("div",XT,[g("button",{class:"changelog-back",onClick:U[5]||(U[5]=V=>N.value=!1),"aria-label":"返回设置"},"←"),U[14]||(U[14]=g("h3",null,"版本更新",-1)),g("span",qT,"当前 "+xe(Je(Bc)),1)]),g("div",YT,[(q(!0),J(je,null,yt(Je(vu),V=>(q(),J("div",{key:V.version,class:"release-card"},[g("div",KT,[g("span",{class:Ke(["release-ver",{major:V.major}])},xe(V.version),3),V.major?(q(),J("span",JT,"大更新")):qe("",!0),g("span",ZT,xe(V.date),1)]),g("div",QT,xe(V.title),1),g("ul",jT,[(q(!0),J(je,null,yt(V.notes,(X,W)=>(q(),J("li",{key:W},xe(X),1))),128))])]))),128))])])):qe("",!0)]),_:1})])):qe("",!0)]}),_:1}),dt(Mp,{open:l.value,mode:"edit",onClose:U[6]||(U[6]=k=>l.value=!1)},null,8,["open"])]))}},iw=hi(nw,[["__scopeId","data-v-03f3569c"]]),sw={class:"fav-dialog"},rw={class:"fav-head"},aw={class:"fav-body"},ow={key:0,class:"fav-empty"},lw={key:1,class:"fav-list"},cw={class:"fav-item-top"},uw={class:"fav-desc"},dw=["onClick"],fw={key:0,class:"fav-params"},hw={class:"fav-item-bottom"},pw={class:"fav-time"},mw=["onClick"],gw={key:0,class:"fav-foot"},vw={class:"fav-count"},_w={__name:"FavoritesDialog",props:{open:{type:Boolean,default:!1}},emits:["close","apply"],setup(n,{emit:e}){const t=e,{favorites:i,removeFavorite:s,clearAll:r}=Qr();function a(h){const f=new Date(h),p=x=>String(x).padStart(2,"0");return`${f.getFullYear()}/${p(f.getMonth()+1)}/${p(f.getDate())} ${p(f.getHours())}:${p(f.getMinutes())}`}function o(h){t("apply",h),t("close")}function l(h){s(h)}function c(){confirm("确定清空全部收藏？此操作不可恢复。")&&r()}function d(h){if(!h)return"";const f=[];return h.gain!=null&&f.push(`Gain ${h.gain}`),h.volume!=null&&f.push(`Vol ${h.volume}`),h.delay_type&&f.push(h.delay_type),h.reverb_type&&f.push(h.reverb_type),h.modulation&&f.push(h.modulation),f.slice(0,3).join(" · ")}return(h,f)=>(q(),us(ta,{to:"body"},[dt(ls,{name:"fade"},{default:Oi(()=>[n.open?(q(),J("div",{key:0,class:"fav-mask",onClick:f[1]||(f[1]=Et(p=>t("close"),["self"]))},[g("div",sw,[g("div",rw,[f[2]||(f[2]=g("h2",null,"我的收藏",-1)),g("button",{class:"fav-close",onClick:f[0]||(f[0]=p=>t("close"))},"×")]),g("div",aw,[Je(i).length===0?(q(),J("div",ow,[...f[3]||(f[3]=[g("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"#3a3a4e","stroke-width":"1.5"},[g("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})],-1),g("p",null,"还没有收藏的音色",-1),g("span",null,"生成音色后点心形按钮即可收藏",-1)])])):(q(),J("div",lw,[(q(!0),J(je,null,yt(Je(i),p=>(q(),J("div",{key:p.id,class:"fav-item"},[g("div",cw,[g("span",uw,xe(p.description||"（未填写描述）"),1),g("button",{class:"fav-del",onClick:x=>l(p.id),title:"删除"},[...f[4]||(f[4]=[g("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M6 6l1 14a2 2 0 002 2h6a2 2 0 002-2l1-14"})],-1)])],8,dw)]),d(p.params)?(q(),J("div",fw,xe(d(p.params)),1)):qe("",!0),g("div",hw,[g("span",pw,xe(a(p.createdAt)),1),g("button",{class:"fav-apply",onClick:x=>o(p)},"应用到效果器",8,mw)])]))),128))]))]),Je(i).length>0?(q(),J("div",gw,[g("button",{class:"fav-clear",onClick:c},"清空全部"),g("span",vw,"共 "+xe(Je(i).length)+" 条",1)])):qe("",!0)])])):qe("",!0)]),_:1})]))}},xw=hi(_w,[["__scopeId","data-v-d403fc63"]]),yw={class:"ctm-dialog"},Sw={class:"ctm-head"},Mw={class:"ctm-body"},bw={key:0,class:"ctm-empty"},Ew={key:1,class:"ctm-list"},Tw={class:"ctm-item-top"},ww=["data-id","value","onBlur","onKeydown"],Aw={key:1,class:"ctm-name"},Cw={class:"ctm-actions"},Rw=["onClick"],Pw=["onClick"],Lw={key:0,class:"ctm-params"},Dw={class:"ctm-item-bottom"},Iw={class:"ctm-time"},Nw=["onClick"],Uw={class:"ctm-foot"},Fw={key:1,class:"ctm-count"},Ow={__name:"CustomTonesDialog",props:{open:{type:Boolean,default:!1}},emits:["close","apply","create"],setup(n,{emit:e}){const t=e,{customs:i,removeCustom:s,renameCustom:r,clearAll:a}=vo();function o(m){const T=new Date(m),P=S=>String(S).padStart(2,"0");return`${T.getFullYear()}/${P(T.getMonth()+1)}/${P(T.getDate())} ${P(T.getHours())}:${P(T.getMinutes())}`}function l(m){var P,S,A;if(!m)return"";const T=[];return m.channel&&T.push(m.channel),m.amp_model&&T.push(m.amp_model),m.gain!=null&&T.push(`Gain ${m.gain}`),(P=m.modulation)!=null&&P.type&&m.modulation.type!=="None"&&T.push(m.modulation.type),(S=m.delay)!=null&&S.enabled&&T.push(`${m.delay.delay_type} Delay`),(A=m.reverb)!=null&&A.enabled&&T.push(m.reverb.type),T.slice(0,4).join(" · ")}function c(m){t("apply",m),t("close")}function d(){t("create"),t("close")}function h(m){s(m)}function f(){confirm("确定清空全部自定义参数？此操作不可恢复。")&&a()}const p=Be("");function x(m){p.value=m.id,ei(()=>{const T=document.querySelector(`.ctm-rename-input[data-id="${m.id}"]`);T&&(T.focus(),T.select())})}function b(m,T){const P=T.target.value.trim();P&&r(m.id,P),p.value=""}function v(){p.value=""}return(m,T)=>(q(),us(ta,{to:"body"},[dt(ls,{name:"fade"},{default:Oi(()=>[n.open?(q(),J("div",{key:0,class:"ctm-mask",onClick:T[1]||(T[1]=Et(P=>t("close"),["self"]))},[g("div",yw,[g("div",Sw,[T[2]||(T[2]=g("h2",null,"自定义参数",-1)),g("button",{class:"ctm-close",onClick:T[0]||(T[0]=P=>t("close"))},"×")]),g("div",Mw,[Je(i).length===0?(q(),J("div",bw,[...T[3]||(T[3]=[g("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"#3a3a4e","stroke-width":"1.5"},[g("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),g("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),g("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),g("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),g("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),g("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),g("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),g("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),g("line",{x1:"17",y1:"16",x2:"23",y2:"16"})],-1),g("p",null,"还没有保存的自定义参数",-1),g("span",null,'点下方按钮进入效果器，调好后点"保存"即可',-1)])])):(q(),J("div",Ew,[(q(!0),J(je,null,yt(Je(i),P=>(q(),J("div",{key:P.id,class:"ctm-item"},[g("div",Tw,[p.value===P.id?(q(),J("input",{key:0,class:"ctm-rename-input","data-id":P.id,value:P.name,onBlur:S=>b(P,S),onKeydown:[qr(S=>b(P,S),["enter"]),qr(v,["esc"])],spellcheck:"false"},null,40,ww)):(q(),J("span",Aw,xe(P.name),1)),g("div",Cw,[g("button",{class:"ctm-edit",onClick:S=>x(P),title:"改名"},[...T[4]||(T[4]=[g("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})],-1)])],8,Rw),g("button",{class:"ctm-del",onClick:S=>h(P.id),title:"删除"},[...T[5]||(T[5]=[g("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M6 6l1 14a2 2 0 002 2h6a2 2 0 002-2l1-14"})],-1)])],8,Pw)])]),l(P.params)?(q(),J("div",Lw,xe(l(P.params)),1)):qe("",!0),g("div",Dw,[g("span",Iw,xe(o(P.createdAt)),1),g("button",{class:"ctm-apply",onClick:S=>c(P)},"一键应用",8,Nw)])]))),128))]))]),g("div",Uw,[Je(i).length>0?(q(),J("button",{key:0,class:"ctm-clear",onClick:f},"清空全部")):qe("",!0),Je(i).length>0?(q(),J("span",Fw,"共 "+xe(Je(i).length)+" 条",1)):qe("",!0),g("button",{class:"ctm-create",onClick:d},"＋ 新建自定义音色")])])])):qe("",!0)]),_:1})]))}},Bw=hi(Ow,[["__scopeId","data-v-b3a50903"]]);let Ha=null;async function kw(){if(Ha)return Ha;const n=await fetch("./joyo_jam_buddy_ii.json");if(!n.ok)throw new Error(`知识库加载失败：HTTP ${n.status}`);return Ha=await n.json(),Ha}function Hw(n){const e=n.amp_models.map(r=>`- ${r.name}（${r.style}）：${r.description}`).join(`
`),t=n.effects.modulation.map(r=>r.name).join(", "),i=n.effects.reverb.types.join(", ");return`你是一位专业的电吉他音色工程师，精通 Joyo Jam Buddy II 效果器的参数调节。

# 设备信息
设备：Joyo Jam Buddy II（便携吉他音箱+综合效果器）
通道：${n.channels.map(r=>r.name).join(", ")}
控制参数：Gain(0-100), Bass(-12~12), Mid(-12~12), Treble(-12~12), Master Volume(0-100)

# 可用的音箱模型（amp_model 必须从以下选择）
${e}

# 可用效果
- 调制效果（modulation.type）：${t}, None
- 延迟（delay）：time_ms(0-500), feedback(0-100), mix(0-100)
- 混响（reverb）：type(${i}), mix(0-100), decay(0-100)

# AMPLIFIER 参数（amp_high/amp_mid/amp_low）
放大器独立 EQ，与面板 Bass/Mid/Treble 旋钮互不影响，根据曲风主动微调：
- amp_high: -12~12 整数，放大器高频 EQ（正值提亮，负值压暗）
- amp_mid: -12~12 整数，放大器中频 EQ（正值突出，负值凹陷）
- amp_low: -12~12 整数，放大器低频 EQ（正值厚实，负值收紧）
各曲风参考：金属 amp_low +3~5（增厚低频）、amp_high +1~2（保留切割感）；布鲁斯 amp_high +1~2（通透感）；流行/清音 amp_high +1（微提亮）；硬摇滚 amp_mid -1~-2（中频微凹留空间）

# AMP MISC 高级参数（amp_misc）
放大器高级微调参数，根据曲风和用户描述主动调整：
- phase_in: true/false，输入相位反转（默认 false）
- phase_out: true/false，输出相位反转（默认 false）
- treb_fc: 50-20000Hz，高音截止频率（默认 1900）
- midd_fc: 50-20000Hz，中音截止频率（默认 1000）
- midd_q: 0.1-10.0，中音 Q 值（默认 0.7，值越大带宽越窄）
- bass_fc: 50-20000Hz，低音截止频率（默认 400）
- hpf: 0=OFF 或 25-1000Hz，高通滤波器（切掉低频隆隆声，默认 OFF/0）
- lpf: 0=OFF 或 1000-19000Hz，低通滤波器（切掉高频刺耳，默认 OFF/0）
使用场景：金属/硬摇滚 hpf 可设 80-100Hz 切低频浑浊；高频刺耳或干硬时 lpf 设 5000-8000Hz；用户提到"太闷"可提高 treb_fc；"中频太突出"可降 midd_q

# 输出要求（严格遵守）
你必须只输出一个 JSON 对象，不要输出任何其他文字、解释或 Markdown 代码块标记。
JSON 结构如下：

{
  "channel": "Clean或Rhythm或Lead",
  "amp_model": "从上面列表中选一个",
  "gain": 0-100的整数,
  "bass": -12到12的整数,
  "mid": -12到12的整数,
  "treble": -12到12的整数,
  "master_volume": 0-100的整数,
  "amp_high": -12到12的整数,
  "amp_mid": -12到12的整数,
  "amp_low": -12到12的整数,
  "modulation": {
    "type": "效果类型或None",
    "rate": 0-100整数,
    "depth": 0-100整数
  },
  "delay": {
    "enabled": true或false,
    "delay_type": "Digital/Analog",
    "time_ms": 0-500整数,
    "feedback": 0-100整数,
    "mix": 0-100整数
  },
  "reverb": {
    "enabled": true或false,
    "type": "Hall/Church",
    "mix": 0-100整数,
    "decay": 0-100整数
  },
  "amp_misc": {
    "phase_in": false,
    "phase_out": false,
    "treb_fc": 1900,
    "midd_fc": 1000,
    "midd_q": 0.7,
    "bass_fc": 400,
    "hpf": 0,
    "lpf": 0
  },
  "explanation": "为什么这样调的简短说明（中文，50字以内）",
  "tips": ["调音色小贴士1", "小贴士2"]
}

# 调参原则
- 摇滚风格通常用 Rhythm 或 Lead 通道，gain 在 50-80
- 清音用 Clean 通道，gain 在 10-30
- 金属用 Lead 通道，gain 在 80-95，bass 偏高
- 延迟时间通常 250-450ms，主音独奏 mix 可以高一点
- 当用户提到具体艺人/歌曲时，要主动匹配其标志性效果：例如枪花 Sweet Child O' Mine（Slash）必须开 Analog 模拟延迟约 380-450ms、mix 20-30；U2 风格开较大 Digital 延迟；提到 Solo/前奏/主音/旋律演奏时默认给适量延迟（mix 15-25），不要默认关闭
- 只有纯粹的节奏吉他、金属下切、干琴音色才关闭延迟
- delay_type：Digital 数字延迟精确清晰（流行/独奏），Analog 模拟延迟温暖发暗（布鲁斯/复古）
- enabled 必须与实际参数严格一致：需要该效果时 enabled 必须为 true 且给出有效数值；不需要时 enabled 必须为 false，且 delay 的 time_ms/feedback/mix 全部填 0、reverb 的 mix 填 0。禁止出现 enabled=false 却带有大于 0 的参数值
- 混响不要太大，mix 一般 10-30
- reverb.decay 是混响拖尾长度，一般 20-45：短曲风/金属偏小（15-25），氛围/独奏偏大（35-50）
- reverb.type 只能从 Hall、Church 中二选一，严禁输出这两个之外的任何类型：Hall 大厅混响开阔自然（摇滚/布鲁斯/清音/日常通用），Church 教堂混响宏大深远空灵（大空间、氛围、抒情 Solo）
- 中频(mid)是吉他音色的核心，不要切太多
- amp_high/amp_mid/amp_low 根据曲风主动微调（金属 amp_low +3~5、清音 amp_high +1），不要默认全填 0
- amp_misc 参数根据曲风和用户描述主动调整：金属/硬摇滚 hpf 可设 80-100Hz；高频刺耳 lpf 设 5000-8000Hz；不要全部输出默认值
`}function Vw({description:n,style:e,song_reference:t,guitar_type:i}){const s=[`我想要的音色描述：${n}`];return e&&s.push(`音乐风格：${e}`),t&&s.push(`参考歌曲/艺人：${t}`),i&&s.push(`吉他类型：${i}`),s.push("请根据以上信息，给出 Joyo Jam Buddy II 的参数推荐。只输出 JSON。"),s.join(`
`)}const zw="https://api.deepseek.com/v1",Gw="deepseek-chat";function Ww(n){if(!n)return null;try{return JSON.parse(n.trim())}catch{}const e=n.match(/\{[\s\S]*\}/);if(e)try{return JSON.parse(e[0])}catch{}let t=0,i=-1;for(let s=0;s<n.length;s++){const r=n[s];if(r==="{")t===0&&(i=s),t++;else if(r==="}"&&(t--,t===0&&i!==-1)){const a=n.slice(i,s+1);try{return JSON.parse(a)}catch{i=-1}}}return null}async function $w({systemPrompt:n,userPrompt:e,apiKey:t,baseUrl:i=zw,model:s=Gw,timeout:r=3e4}){var f,p,x;const a=(t||"").trim();if(!a)return{success:!1,error:"未配置 API Key，请在「设置 → API Key」里填入你的 DeepSeek API Key"};const o=`${i.replace(/\/$/,"")}/chat/completions`,l={Authorization:`Bearer ${a}`,"Content-Type":"application/json"},c={model:s,messages:[{role:"system",content:n},{role:"user",content:e}],temperature:.3,max_tokens:800,response_format:{type:"json_object"}},d=new AbortController,h=setTimeout(()=>d.abort(),r);try{const b=await fetch(o,{method:"POST",headers:l,body:JSON.stringify(c),signal:d.signal});if(!b.ok){const P=await b.text().catch(()=>"");return{success:!1,error:`API 请求失败（HTTP ${b.status}）：${P.slice(0,200)}`}}const v=await b.json(),m=(x=(p=(f=v==null?void 0:v.choices)==null?void 0:f[0])==null?void 0:p.message)==null?void 0:x.content;if(m==null)return{success:!1,error:`API 响应格式异常：${JSON.stringify(v).slice(0,200)}`};const T=Ww(m);return T===null?{success:!1,error:`LLM 输出无法解析为 JSON，原始输出：${String(m).slice(0,200)}`}:(T.success=!0,T)}catch(b){return b.name==="AbortError"?{success:!1,error:`请求超时（${r/1e3}s），请稍后重试`}:{success:!1,error:`网络请求失败：${b.message}`}}finally{clearTimeout(h)}}function Nt(n,e,t){if(n==null)return t;const i=n[e];return i??t}function Kt(n,e){const t=parseInt(n,10);return Number.isNaN(t)?e:t}function Xw(n,e){const t=parseFloat(n);return Number.isNaN(t)?e:t}function dn(n,e,t){return Math.min(t,Math.max(e,n))}function es(n,e=0){return Math.round(dn(Kt(n,e),0,100)/5)*5}const qw=["65 black nor","65 black nor od","65 black vib","65 black vib od","j800 lo","j800 lo od","j800 hi","j800 hi od","dualrect red","dualrect red od","5153 el34","5153 el34 od","5153 6l6","5153 6l6 od"],er={"65 black nor":"65 Black Nor","65 black nor od":"65 Black Nor OD","65 black vib":"65 Black Vib","65 black vib od":"65 Black Vib OD","j800 lo":"J800 Lo","j800 lo od":"J800 Lo OD","j800 hi":"J800 Hi","j800 hi od":"J800 Hi OD","dualrect red":"DualRect Red","dualrect red od":"DualRect Red OD","5153 el34":"5153 EL34","5153 el34 od":"5153 EL34 OD","5153 6l6":"5153 6L6","5153 6l6 od":"5153 6L6 OD"};function Yw(n){const e=String(n||"").trim().toLowerCase();if(!e)return"65 Black Nor";if(qw.includes(e))return er[e];const t=e.includes(" od")||e.endsWith("od");if(e.includes("nor")&&e.includes("65"))return er["65 black nor"+(t?" od":"")];if(e.includes("vib")&&e.includes("65"))return er["65 black vib"+(t?" od":"")];if(e.includes("j800")||e.includes("jcm800")){const i=e.includes("lo")?"j800 lo":"j800 hi";return er[i+(t?" od":"")]}if(e.includes("dualrect")||e.includes("rect"))return er["dualrect red"+(t?" od":"")];if(e.includes("5153")||e.includes("5150")||e.includes("evh")){const i=e.includes("el34")?"5153 el34":"5153 6l6";return er[i+(t?" od":"")]}return"65 Black Nor"}function Kw(n){if(!n||n.success!==!0)return{success:!1,error:(n==null?void 0:n.error)||"LLM 返回无效数据",params:null,explanation:"",tips:[]};try{const e=n.modulation||{},t=n.delay||{},i=n.reverb||{},s=n.amp_misc||{},r=Kt(Nt(t,"time_ms",0),0),a=Kt(Nt(t,"mix",0),0),o=Nt(t,"enabled",!1)===!0||r>0||a>0,c=String(Nt(t,"delay_type","Digital")).trim().toLowerCase()==="analog"?"Analog":"Digital",d=Kt(Nt(i,"mix",15),15),h=Kt(Nt(i,"decay",30),30),f=Nt(i,"enabled",!0)===!0||d>0,x=String(Nt(i,"type","Hall")).trim().toLowerCase()==="church"?"Church":"Hall",b=String(Nt(e,"type","")).trim(),v=b&&b.toLowerCase()!=="none"?b:"Chorus",m={phase_in:Nt(s,"phase_in",!1)===!0,phase_out:Nt(s,"phase_out",!1)===!0,treb_fc:dn(Kt(Nt(s,"treb_fc",1900),1900),50,2e4),midd_fc:dn(Kt(Nt(s,"midd_fc",1e3),1e3),50,2e4),midd_q:Math.round(dn(Xw(Nt(s,"midd_q",.7),.7),.1,10)*10)/10,bass_fc:dn(Kt(Nt(s,"bass_fc",400),400),50,2e4),hpf:dn(Kt(Nt(s,"hpf",0),0),0,1e3),lpf:dn(Kt(Nt(s,"lpf",0),0),0,19e3)},T={channel:String(n.channel||"Rhythm"),amp_model:Yw(n.amp_model),gain:es(n.gain,50),bass:dn(Kt(n.bass,0),-12,12),mid:dn(Kt(n.mid,0),-12,12),treble:dn(Kt(n.treble,0),-12,12),master_volume:es(n.master_volume,70),amp_high:dn(Kt(n.amp_high,0),-12,12),amp_mid:dn(Kt(n.amp_mid,0),-12,12),amp_low:dn(Kt(n.amp_low,0),-12,12),modulation:{type:v,rate:es(Nt(e,"rate",0),0),depth:es(Nt(e,"depth",0),0),enabled:Nt(e,"enabled",!1)===!0},delay:{enabled:o,delay_type:c,time_ms:dn(r,0,500),feedback:es(Nt(t,"feedback",0),0),mix:es(a,0)},reverb:{enabled:f,type:x,mix:es(d,15),decay:es(h,30)},amp_misc:m};let P=n.tips||[];return Array.isArray(P)||(P=P?[String(P)]:[]),{success:!0,params:T,explanation:String(n.explanation||""),tips:P}}catch(e){return{success:!1,error:`参数解析失败：${e.message}`,params:null,explanation:"",tips:[]}}}const Jw={class:"app"},Zw={class:"navbar"},Qw={class:"nav-inner"},jw={class:"nav-menu"},eA={class:"nav-actions"},tA={class:"carousel-breakout"},nA={class:"container",id:"recommend"},iA={class:"input-panel reveal"},sA={class:"form-group"},rA=["onKeydown"],aA={class:"quick-examples"},oA=["onClick"],lA={class:"form-row"},cA={class:"form-group"},uA={class:"form-group"},dA={class:"actions"},fA=["disabled"],hA={key:0,class:"error"},pA={class:"result-header"},mA={key:1,class:"result-header-placeholder"},gA=["title"],vA=["title"],_A=["fill","stroke"],xA={key:0,class:"explanation"},yA={key:1,class:"tips"},SA={class:"video-section reveal",id:"demo"},MA={class:"container"},bA={class:"video-wrap"},EA={key:0,class:"video-float"},TA={class:"float-header"},wA=["src"],AA={key:1,class:"presets-section",id:"presets"},CA={class:"container"},RA={class:"preset-grid"},PA=["onClick"],LA={class:"preset-band"},DA={class:"preset-song"},IA={class:"preset-genre"},NA={key:0,id:"preset-detail",class:"preset-detail"},UA={class:"preset-desc"},FA={class:"params-grid"},OA={class:"param-card"},BA={class:"param-card"},kA={class:"param-value amp"},HA={class:"param-card"},VA={class:"param-value"},zA={class:"param-card"},GA={class:"param-value"},WA={class:"param-card"},$A={class:"param-value"},XA={class:"param-card"},qA={class:"param-value"},YA={class:"param-card"},KA={class:"param-value"},JA={class:"param-card"},ZA={class:"param-value"},QA={key:0},jA={class:"param-card"},e2={key:0,class:"param-value"},t2={key:1,class:"param-value"},n2={class:"param-card"},i2={class:"param-value"},s2={class:"preset-tip"},r2={class:"preset-actions"},a2={key:2,class:"about-page"},o2={class:"container"},l2={class:"about-section"},c2={class:"changelog-section"},u2={class:"cl-intro"},d2={class:"ver-badge"},f2={class:"cl-list"},h2={class:"release-head"},p2={key:0,class:"release-tag"},m2={class:"release-date"},g2={class:"release-title"},v2={class:"release-notes"},_2={key:0,class:"toast"},x2={class:"big-logo"},y2={__name:"App",setup(n){const e=[{src:"ai2.jpg",title:"AI音色助手",subtitle:"告别盲调，AI 精准映射每一个参数旋钮"},{src:"ai3.jpg",title:"摇滚不停歇",subtitle:"定制你的专属音色库，随时开燥"}],t=Be(!0);Eg();const{scrollToTop:i,rescan:s}=Tg(),r=Be("joyo-jam-buddy-2"),a=Be(null);function o(_){var u;a.value={..._,params:$a(_.params)},(u=document.getElementById("preset-detail"))==null||u.scrollIntoView({behavior:"smooth"})}function l(_){Se.value="recommend",S.value=!1,A.value=!0,E.value=!0,p.value=!1,f.value={success:!0,params:$a(_.params),explanation:_.description,tips:_.tip?[_.tip]:[]},d.value.description=`${_.band} ${_.song}`,a.value=null,ei(()=>{var u,w;(w=(u=v.value)==null?void 0:u.$el)==null||w.scrollIntoView({behavior:"smooth",block:"start"})})}function c(_){var u;Se.value="recommend",d.value.description=`我喜欢 ${_.band}《${_.song}》那种音色，想在这个基础上调整：`,d.value.song_reference=`${_.band} ${_.song}`,d.value.style=_.genre||"",a.value=null,(u=document.getElementById("recommend"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})}const d=Be({description:"",style:"",song_reference:"",guitar_type:""}),h=Be(!1),f=Be(null),p=Be(!1),x=Be(""),b=Be(null),v=Be(null),m=Be(null),T=Be(!1),P=Be(!1),S=Be(!1),A=Be(!1),E=Be(!1),L=Be(localStorage.getItem("pedal_shell_theme")||"orange");wn(L,_=>localStorage.setItem("pedal_shell_theme",_));const y=Be("自定义音色"),C=Be(!1);function N(){var _;Se.value="recommend",S.value=!0,A.value=!0,E.value=!1,h.value=!1,x.value="",a.value=null,y.value=((_=d.value.description)==null?void 0:_.trim())||"自定义音色",p.value=!0,f.value={success:!0,params:JSON.parse(JSON.stringify(Kl)),explanation:"",tips:[]},ei(()=>{var u;(u=b.value)==null||u.scrollIntoView({behavior:"smooth",block:"start"})})}function O(){S.value?(S.value=!1,A.value=!1,E.value=!1,h.value=!1,x.value="",p.value=!1,f.value=null):N()}function I(_){f.value&&(f.value={...f.value,params:_})}const U=Be(!1);function k(_){_==="on"?(A.value=!0,S.value=!1,E.value=!1,U.value=!1,h.value=!1,x.value="",a.value=null,p.value=!1,f.value={success:!0,params:JSON.parse(JSON.stringify(Kl)),explanation:"",tips:[]}):(A.value=!1,E.value=!1,U.value=!1,S.value=!1,h.value=!1,x.value="",p.value=!1,f.value=null)}const{addCustom:V}=vo(),X=Be("");let W=null;function j(){var _;(_=f.value)!=null&&_.params&&(V(f.value.params),X.value="保存成功！可在「自定义参数」中查看",W&&clearTimeout(W),W=setTimeout(()=>{X.value=""},2e3))}function te(_){Se.value="recommend",S.value=!0,A.value=!0,E.value=!1,p.value=!1,y.value=_.name||"自定义音色",f.value={success:!0,params:JSON.parse(JSON.stringify(_.params)),explanation:"",tips:[]},ei(()=>{var u,w;(w=(u=v.value)==null?void 0:u.$el)==null||w.scrollIntoView({behavior:"smooth",block:"start"})})}const le=Lt(()=>S.value?y.value:d.value.description),{favorites:de,isFavorited:Re,addFavorite:Ue,removeFavorite:ct}=Qr(),nt=Be(!1),Qe=Be(!1),ie=Be("");function ue(_=""){ie.value=_,Qe.value=!0}const Ce=Lt(()=>f.value?Re(le.value,f.value.params):!1),ke=Lt(()=>h.value&&!f.value?"AI 正在分析你的音色需求":f.value&&!p.value?"正在自动调节旋钮参数…":f.value&&S.value&&p.value?"自定义模式 · 点击旋钮直接调参":f.value&&p.value?"参数已就绪":"等待输入…");function Te(){if(f.value)if(Ce.value){const _=le.value.trim().toLowerCase(),u=de.value.find(w=>{var F;return((F=w.description)==null?void 0:F.trim().toLowerCase())===_});u&&ct(u.id)}else Ue({description:le.value,params:f.value.params,explanation:f.value.explanation,tips:f.value.tips,pedalId:r.value})}function R(_){Se.value="recommend",S.value=!1,A.value=!0,E.value=!0,p.value=!1,f.value={success:!0,params:_.params,explanation:_.explanation,tips:_.tips},d.value.description=_.description,r.value=_.pedalId||"joyo-jam-buddy-2",ei(()=>{var u,w;(w=(u=v.value)==null?void 0:u.$el)==null||w.scrollIntoView({behavior:"smooth",block:"start"})})}function H(){const _=m.value;_&&_.play()}function $(){const _=m.value;_&&(_.paused?_.play():_.pause())}async function ae(){const _=m.value;if(_)try{document.pictureInPictureElement?(await document.exitPictureInPicture(),P.value=!1):document.pictureInPictureEnabled?(T.value||await _.play(),await _.requestPictureInPicture()):(P.value=!P.value,P.value&&!T.value&&await _.play())}catch{}}function re(){T.value=!0}function se(){T.value=!1}function pe(){document.pictureInPictureElement||(P.value=!1)}const me=["枪花 Sweet Child Of Mine 温暖失真","Metallica 厚重的金属节奏音色","干净明亮的流行清音，带一点合唱"];function ve(_){d.value.description=_}function oe(){var _;(_=document.getElementById("recommend"))==null||_.scrollIntoView({behavior:"smooth",block:"start"})}async function Ee(){var _;if(!d.value.description.trim()){x.value="请先描述你想要的音色";return}h.value=!0,S.value=!1,p.value=!1,x.value="",f.value=null;try{const u=localStorage.getItem("HHHHhha_llm_api_key")||"",w=await kw(),F=Hw(w),B=Vw(d.value),Q=await $w({systemPrompt:F,userPrompt:B,apiKey:u}),he=Kw(Q);if(he.success){const Z=$a(he.params);f.value={success:!0,params:Z,explanation:he.explanation,tips:he.tips},A.value=!0,E.value=!0,await ei(),(_=b.value)==null||_.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy({top:20})}else x.value=he.error||"推荐失败，请重试"}catch(u){x.value=u.message||"请求失败，请稍后重试"}finally{h.value=!1}}function D(){d.value={description:"",style:"",song_reference:"",guitar_type:""},f.value=null,x.value="",A.value=!1,E.value=!1,S.value=!1,p.value=!1}const Se=Be("recommend");function be(_){Se.value=_}return wn(Se,()=>ei(()=>{s(),window.scrollTo({top:0})})),(_,u)=>(q(),J(je,null,[g("div",Jw,[g("nav",Zw,[g("div",Qw,[dt(iw,{open:Qe.value,"onUpdate:open":u[0]||(u[0]=w=>Qe.value=w),group:ie.value,autoPlay:t.value,"onUpdate:autoPlay":u[1]||(u[1]=w=>t.value=w)},null,8,["open","group","autoPlay"]),u[20]||(u[20]=sn('<div class="nav-logo"><span class="logo-word">FX Tone <em>AI</em></span><span class="logo-mark" aria-hidden="true"><span class="yx-logo"><span class="frame-back"></span><span class="frame-front"><span class="letters">YX</span></span></span></span></div>',1)),g("div",jw,[g("a",{href:"#",class:Ke(["nav-item",{active:Se.value==="recommend"}]),onClick:u[2]||(u[2]=Et(w=>be("recommend"),["prevent"]))},"首页",2),g("a",{href:"#",class:Ke(["nav-item",{active:Se.value==="presets"}]),onClick:u[3]||(u[3]=Et(w=>be("presets"),["prevent"]))},"音色仓库",2),g("a",{href:"#",class:Ke(["nav-item",{active:Se.value==="about"}]),onClick:u[4]||(u[4]=Et(w=>be("about"),["prevent"]))},"关于",2)]),g("div",eA,[u[19]||(u[19]=g("a",{href:"https://github.com",target:"_blank",class:"nav-btn"},"GitHub",-1)),dt(rT,{onOpenFavorites:u[5]||(u[5]=w=>nt.value=!0),onOpenCustom:u[6]||(u[6]=w=>C.value=!0),onOpenSettings:ue})])])]),Se.value==="recommend"?(q(),J(je,{key:0},[g("div",tA,[dt(iE,{images:e,height:"80vh","auto-play":t.value,interval:6e3},null,8,["auto-play"]),g("button",{class:"carousel-cta",onClick:oe},[...u[21]||(u[21]=[Vn(" 立即调音 ",-1),g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)])])]),g("main",nA,[g("section",iA,[dt(xE,{modelValue:r.value,"onUpdate:modelValue":u[7]||(u[7]=w=>r.value=w)},null,8,["modelValue"]),u[27]||(u[27]=g("h2",null,"描述你想要的音色",-1)),g("div",sA,[u[22]||(u[22]=g("label",null,"音色描述 *",-1)),ti(g("textarea",{"onUpdate:modelValue":u[8]||(u[8]=w=>d.value.description=w),rows:"3",placeholder:"例如：我想要枪花 Sweet Child O' Mine 前奏那种温暖、带点合唱的失真音色",onKeydown:[qr(Et(Ee,["ctrl","prevent"]),["enter"]),qr(Et(Ee,["meta","prevent"]),["enter"])]},null,40,rA),[[ar,d.value.description]]),u[23]||(u[23]=g("span",{class:"form-hint"},"Ctrl + Enter 快速生成",-1))]),g("div",aA,[u[24]||(u[24]=g("span",{class:"label"},"试试这些：",-1)),(q(),J(je,null,yt(me,w=>g("button",{key:w,class:"example-btn",onClick:F=>ve(w)},xe(w),9,oA)),64))]),g("div",lA,[g("div",cA,[u[25]||(u[25]=g("label",null,"音乐风格",-1)),ti(g("input",{"onUpdate:modelValue":u[9]||(u[9]=w=>d.value.style=w),placeholder:"如 rock / blues / metal"},null,512),[[ar,d.value.style]])]),g("div",uA,[u[26]||(u[26]=g("label",null,"参考歌曲/艺人",-1)),ti(g("input",{"onUpdate:modelValue":u[10]||(u[10]=w=>d.value.song_reference=w),placeholder:"如 Guns N' Roses"},null,512),[[ar,d.value.song_reference]])])]),g("div",dA,[g("button",{class:"btn-primary","data-track":"生成音色参数按钮",disabled:h.value,onClick:Ee},xe(h.value?"调参中...":"生成音色参数"),9,fA),g("button",{class:"btn-secondary","data-track":"重置按钮",onClick:D},"重置")]),x.value?(q(),J("p",hA,xe(x.value),1)):qe("",!0)]),g("section",{ref_key:"resultPanel",ref:b,class:"result-panel"},[u[32]||(u[32]=g("div",{class:"f11-hint"},"F11 / Fn+F11进入全屏体验",-1)),g("div",pA,[h.value||f.value&&!S.value&&E.value?(q(),J(je,{key:0},[g("h2",null,xe(f.value?d.value.description||"你调好的音色":"AI 调音中…"),1),g("div",{class:Ke(["header-status",{done:p.value}])},[g("span",{class:Ke(["status-dot",{blink:h.value||f.value&&!p.value}])},null,2),Vn(" "+xe(ke.value),1)],2)],64)):(q(),J("div",mA)),g("button",{class:Ke(["custom-btn",{active:S.value}]),onClick:O,title:S.value?"退出自定义模式":"自定义参数"},[u[28]||(u[28]=sn('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#c0c0cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',1)),g("span",null,xe(S.value?"退出自定义":"自定义"),1)],10,gA),S.value?(q(),J("button",{key:2,class:"save-btn",onClick:j,title:"把当前参数存到自定义参数列表"},[...u[29]||(u[29]=[g("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"}),g("polyline",{points:"17 21 17 13 7 13 7 21"}),g("polyline",{points:"7 3 7 8 15 8"})],-1),g("span",null,"保存",-1)])])):qe("",!0),E.value?(q(),J("button",{key:3,class:Ke(["fav-btn",{active:Ce.value}]),onClick:Te,title:Ce.value?"取消收藏":"收藏这个音色"},[(q(),J("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:Ce.value?"#ff4d6d":"none",stroke:Ce.value?"#ff4d6d":"#c0c0cc","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[...u[30]||(u[30]=[g("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},null,-1)])],8,_A)),g("span",null,xe(Ce.value?"已收藏":"收藏"),1)],10,vA)):qe("",!0)]),dt(T_,{ref_key:"pedalRef",ref:v,params:f.value?f.value.params:null,power:A.value,loading:h.value,editable:S.value,standby:A.value&&!E.value&&!h.value,"skip-anim":U.value,theme:L.value,"onUpdate:theme":u[11]||(u[11]=w=>L.value=w),onReady:u[12]||(u[12]=w=>p.value=!0),onChange:I,onPower:k},null,8,["params","power","loading","editable","standby","skip-anim","theme"]),f.value&&f.value.explanation?(q(),J("div",xA,xe(f.value.explanation),1)):qe("",!0),f.value&&f.value.tips&&f.value.tips.length?(q(),J("div",yA,[u[31]||(u[31]=g("h3",null,"调琴小贴士",-1)),g("ul",null,[(q(!0),J(je,null,yt(f.value.tips,(w,F)=>(q(),J("li",{key:F},xe(w),1))),128))])])):qe("",!0)],512)]),g("section",SA,[g("div",MA,[u[35]||(u[35]=g("h2",{class:"presets-title"},"效果展示",-1)),u[36]||(u[36]=g("p",{class:"presets-sub"},"AI 调音助手的实际效果演示",-1)),g("div",bA,[g("video",{ref_key:"videoRef",ref:m,class:"demo-video",src:vg,preload:"metadata",playsinline:"",onPlay:re,onPause:se,onEnterpictureinpicture:pe,onLeavepictureinpicture:pe,onClick:$},null,544),!T.value&&!P.value?(q(),J("button",{key:0,class:"play-center",onClick:H,"aria-label":"播放"},[...u[33]||(u[33]=[g("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M8 5v14l11-7z"})],-1)])])):qe("",!0),g("button",{class:"pip-btn",onClick:ae,"aria-label":"小窗口播放",title:"小窗口播放"},[...u[34]||(u[34]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),g("rect",{x:"12",y:"13",width:"7",height:"5",rx:"1"})],-1)])])])])])],64)):qe("",!0),(q(),us(ta,{to:"body"},[dt(ls,{name:"float-fade"},{default:Oi(()=>{var w;return[P.value?(q(),J("div",EA,[g("div",TA,[u[37]||(u[37]=g("span",null,"效果展示",-1)),g("button",{class:"float-close",onClick:u[13]||(u[13]=F=>P.value=!1),"aria-label":"关闭浮窗"},"×")]),g("video",{src:(w=m.value)==null?void 0:w.currentSrc,class:"float-video",autoplay:"",controls:"",playsinline:""},null,8,wA)])):qe("",!0)]}),_:1})])),Se.value==="presets"?(q(),J("section",AA,[g("div",CA,[u[48]||(u[48]=g("h2",{class:"presets-title"},"音色仓库",-1)),u[49]||(u[49]=g("p",{class:"presets-sub"},"经典乐队标志性歌曲的 Joyo Jam Buddy II 参数预设",-1)),g("div",RA,[(q(!0),J(je,null,yt(Je(_g),(w,F)=>(q(),J("div",{key:F,class:Ke(["preset-card",{active:a.value===w}]),onClick:B=>o(w)},[g("div",LA,xe(w.band),1),g("div",DA,xe(w.song),1),g("div",IA,xe(w.genre),1)],10,PA))),128))]),a.value?(q(),J("div",NA,[g("h3",null,xe(a.value.band)+" - "+xe(a.value.song),1),g("p",UA,xe(a.value.description),1),g("div",FA,[g("div",OA,[u[38]||(u[38]=g("div",{class:"param-label"},"通道",-1)),g("div",{class:Ke(["param-value",a.value.params.channel==="Lead"?"lead":"rhythm"])},xe(a.value.params.channel),3)]),g("div",BA,[u[39]||(u[39]=g("div",{class:"param-label"},"音箱模型",-1)),g("div",kA,xe(a.value.params.amp_model),1)]),g("div",HA,[u[40]||(u[40]=g("div",{class:"param-label"},"Gain",-1)),g("div",VA,xe(a.value.params.gain),1)]),g("div",zA,[u[41]||(u[41]=g("div",{class:"param-label"},"Master",-1)),g("div",GA,xe(a.value.params.master_volume),1)]),g("div",WA,[u[42]||(u[42]=g("div",{class:"param-label"},"Treble",-1)),g("div",$A,xe(a.value.params.treble>0?"+":"")+xe(a.value.params.treble),1)]),g("div",XA,[u[43]||(u[43]=g("div",{class:"param-label"},"Middle",-1)),g("div",qA,xe(a.value.params.mid>0?"+":"")+xe(a.value.params.mid),1)]),g("div",YA,[u[44]||(u[44]=g("div",{class:"param-label"},"Bass",-1)),g("div",KA,xe(a.value.params.bass>0?"+":"")+xe(a.value.params.bass),1)]),g("div",JA,[u[45]||(u[45]=g("div",{class:"param-label"},"Modulation",-1)),g("div",ZA,[Vn(xe(a.value.params.modulation.type),1),a.value.params.modulation.enabled?(q(),J("span",QA,xe(a.value.params.modulation.depth),1)):qe("",!0)])]),g("div",jA,[u[46]||(u[46]=g("div",{class:"param-label"},"Delay",-1)),a.value.params.delay.enabled?(q(),J("div",e2,xe(a.value.params.delay.delay_type)+" "+xe(a.value.params.delay.time_ms)+"ms",1)):(q(),J("div",t2,"关闭"))]),g("div",n2,[u[47]||(u[47]=g("div",{class:"param-label"},"Reverb",-1)),g("div",i2,xe(a.value.params.reverb.type),1)])]),g("div",s2,xe(a.value.tip),1),g("div",r2,[g("button",{class:"btn-primary",onClick:u[14]||(u[14]=w=>l(a.value))},"直接用这个音色"),g("button",{class:"btn-secondary",onClick:u[15]||(u[15]=w=>c(a.value))},"以此为基础让 AI 调")])])):qe("",!0)])])):qe("",!0),Se.value==="about"?(q(),J("section",a2,[g("div",o2,[g("section",l2,[u[52]||(u[52]=sn('<div class="about-hero"><span class="about-badge">GT-AI · 人机协作实录</span><h2>关于 FX Tone AI</h2><p class="about-sub">这不是套模板做出来的网站 —— 它是一个吉他手和 AI 智能体，从一句话开始，一轮一轮聊出来、改出来的作品。</p></div><div class="about-grid"><div class="about-story"><h3 class="about-h3">从一句话开始，我们是这样一起设计的</h3><ol class="story-timeline"><li><span class="step-no">01</span><div class="step-body"><h4>痛点：音色在脑子里，参数全靠手拧</h4><p>Joyo Jam Buddy II 上十几个旋钮，想找一首老歌里的音色，只能凭感觉一个个试。最初的需求只有一句话：「我描述想要的感觉，AI 直接告诉我该怎么调。」</p></div></li><li><span class="step-no">02</span><div class="step-body"><h4>对话：把效果器「讲」给 AI 听</h4><p>我把设备说明书、旋钮布局和自己弹琴的经验一条条发给 AI，它帮我梳理出通道、音箱模型、增益、EQ、调制、延迟、混响的完整参数体系 —— 机器的语言和乐手的语言，第一次对上了。</p></div></li><li><span class="step-no">03</span><div class="step-body"><h4>调教：把大师音色经验写成规则</h4><p>反复讨论「教堂混响为什么空灵」「模拟延迟为什么温暖」，再把这些经验沉淀成 AI 的调参提示词。从此一句自然语言描述，就能生成一组靠谱的效果器参数。</p></div></li><li><span class="step-no">04</span><div class="step-body"><h4>搭骨架：先跑通，再变美</h4><p>AI 用 FastAPI 搭好后端接口、Vue 3 搭好前端页面，第一版很朴素：几个滑块加数字。能用，但还不像在弹一块真正的效果器。</p></div></li><li><span class="step-no">05</span><div class="step-body"><h4>对着真机照片，一像素一像素地抠</h4><p>我拍下手里的真机发给 AI：橙色金属壳、黑色网罩、金色齿轮旋钮、四颗通道指示灯、LCD 屏幕、双踩钉……它逐版复刻；屏幕里的「Selecting FX…」选择界面和教堂、机架、单块图标，也是照着实拍图改了一轮又一轮。</p></div></li><li><span class="step-no">06</span><div class="step-body"><h4>继续：作品还在生长</h4><p>你现在看到的每个细节，几乎都来自一次真实的对话。它还会继续进化 —— 就像调音色一样，永远可以再拧一点点。</p></div></li></ol></div><aside class="about-side"><div class="about-card"><h3 class="about-h3">这场协作怎么分工</h3><div class="role-row"><div class="role human"><div class="role-tag">我（人）</div><ul><li>说清需求与痛点</li><li>拍真机、提供素材</li><li>做审美判断</li><li>一句「这里不对」推动重来</li></ul></div><div class="role ai"><div class="role-tag">AI 智能体</div><ul><li>读资料、建参数模型</li><li>写前后端代码</li><li>画 SVG 图标与界面</li><li>根据反馈反复打磨</li></ul></div></div></div><div class="about-card"><h3 class="about-h3">技术栈</h3><div class="tech-chips"><span class="chip">FastAPI</span><span class="chip">Vue 3</span><span class="chip">大语言模型</span><span class="chip">内联 SVG</span><span class="chip">WebGL Canvas</span><span class="chip">REST API</span></div><p class="about-note">专为 Joyo Jam Buddy II 充电吉他音箱效果器设计</p></div></aside></div>',2)),g("section",c2,[g("div",u2,[u[50]||(u[50]=g("h3",{class:"about-h3"},"版本更新日志",-1)),u[51]||(u[51]=g("p",{class:"cl-sub"},"这个网站是吉他手和 AI 一轮一轮聊出来的 —— 每个版本的进化都记在这里。",-1)),g("span",d2,"当前 "+xe(Je(Bc)),1)]),g("div",f2,[(q(!0),J(je,null,yt(Je(vu),w=>(q(),J("div",{key:w.version,class:"cl-item"},[g("span",{class:Ke(["cl-dot",{major:w.major}])},null,2),g("div",h2,[g("span",{class:Ke(["release-ver",{major:w.major}])},xe(w.version),3),w.major?(q(),J("span",p2,"大更新")):qe("",!0),g("span",m2,xe(w.date),1)]),g("div",g2,xe(w.title),1),g("ul",v2,[(q(!0),J(je,null,yt(w.notes,(F,B)=>(q(),J("li",{key:B},xe(F),1))),128))])]))),128))])])])])])):qe("",!0),dt(xw,{open:nt.value,onClose:u[16]||(u[16]=w=>nt.value=!1),onApply:R},null,8,["open"]),dt(Bw,{open:C.value,onClose:u[17]||(u[17]=w=>C.value=!1),onApply:te,onCreate:N},null,8,["open"]),u[53]||(u[53]=g("footer",{class:"footer"},[g("p",null,"专为 Joyo Jam Buddy II 设计 | 摇滚乐手的 AI 调音助手"),g("p",{class:"footer-sub"},"基于 Vue3 + LLM 构建（纯静态，无需后端）")],-1)),g("button",{class:"back-top",onClick:u[18]||(u[18]=(...w)=>Je(i)&&Je(i)(...w)),title:"返回顶部"},"↑"),dt(ls,{name:"toast"},{default:Oi(()=>[X.value?(q(),J("div",_2,xe(X.value),1)):qe("",!0)]),_:1})]),u[55]||(u[55]=g("div",{class:"big-logo-spacer","aria-hidden":"true"},null,-1)),g("div",x2,[dt(Kb,{text:"GUITAR"}),u[54]||(u[54]=g("span",{class:"big-logo-credit"},"Tribute to TRAE",-1))])],64))}};pg(y2).mount("#app");
