// ==UserScript==
// @name         三国杀小抄
// @namespace    https://95chong.cn/
// @version      1.0.12
// @author       many people
// @description  三国杀OL辅助插件
// @license      CC0-1.0
// @downloadURL  https://xc.95chong.cn/downloads/sgs-xc.user.js
// @updateURL    https://xc.95chong.cn/downloads/sgs-xc.user.js
// @match        *://game.4399iw2.com/yxsgs/*
// @match        *://my.4399.com/yxsgs/*
// @match        *://*.sanguosha.com/*
// @match        *://web.kuaiwan.com/kwsgsn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function(){"use strict";var e=new Set;(async t=>{e.has(t)||(e.add(t),(e=>{typeof GM_addStyle==`function`?GM_addStyle(e):(document.head||document.documentElement).appendChild(document.createElement(`style`)).append(e)})(t))})(` .xiaochao-game-assist-switch[data-v-ef60bdbb]{pointer-events:auto;
position:relative}.xiaochao-game-assist-tip[data-v-ef60bdbb]{color:#eee5d2;white-space:pre-line;pointer-events:none;background:#1d1b18f5;border:1px solid #f2de9c80;border-radius:5px;margin:4px 0 0;padding:5px 8px;font-size:12px;line-height:1.45}.xiaochao-version-row[data-v-7931164d]{color:#f2de9c;
justify-content:center;align-items:center;gap:8px;margin:4px 0 2px;font-size:13px;line-height:1.4;display:flex}.xiaochao-version-row__update[data-v-7931164d]{color:#ffb4b4;cursor:pointer;background:#d9000029;border:1px solid #d900008c;border-radius:10px;
padding:1px 7px;font-size:11px}.xiaochao-version-dialog__lead[data-v-7931164d],.xiaochao-version-dialog__notes[data-v-7931164d]{color:#c9c1b1;margin:0 0 8px;font-size:13px;line-height:1.45}.xiaochao-version-dialog__button[data-v-7931164d]{color:#f2de9c;
cursor:pointer;background:#392f22d9;border:1px solid #f2de9c73;border-radius:4px;padding:4px 10px}.xiaochao-version-dialog__button--primary[data-v-7931164d]{background:#5a4830f2;border-color:#f2de9cb3}.shoupai[data-v-3a71bb5d]{color:#000;--shoupai-width:33px;
box-sizing:border-box;margin:0 calc(32px - var(--shoupai-width)) 2px 0;float:left;width:var(--shoupai-width);min-width:var(--shoupai-width);text-align:center;white-space:nowrap;text-shadow:1px 0 #ffffffb3,0 1px #ffffffb3,-1px 0 #ffffffb3,0 -1px #ffffffb3;
cursor:default;appearance:none;background:#d2c8a080;border:1px solid #000;border-radius:5px;height:38px;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Tahoma,Arial,sans-serif;font-size:13px;font-weight:bolder;line-height:1.1}.shoupai[data-v-3a71bb5d] .card-cn,.shoupai[data-v-3a71bb5d] .card-cn-long{font-family:Segoe UI Symbol,
Segoe UI,Tahoma,Arial,sans-serif;line-height:1;display:inline-block}.shoupai[data-v-3a71bb5d] .card-cn-long{letter-spacing:-1px;font-size:12px}.shoupai[data-v-3a71bb5d] .suit-glyph{vertical-align:-.08em;min-width:.56em;margin-right:0;font-size:1.45em;
font-weight:700;line-height:1;display:inline-block}.shoupai[data-v-3a71bb5d] .card-cn-long .suit-glyph{font-size:1.3em}.shoupai[data-v-3a71bb5d] .rank-glyph{margin-left:1px;display:inline-block}.shoupai[data-v-3a71bb5d] .suit-diamond,.shoupai[data-v-3a71bb5d] .suit-heart{color:#f04155}.shoupai[data-v-3a71bb5d] .suit-spade{color:#2c2c2c}.shoupai[data-v-3a71bb5d] .suit-club{color:#787878}.shoupai.R[data-v-3a71bb5d]{color:red}.shoupai.G[data-v-3a71bb5d]{background:0 0}.xc-deck-record[data-v-fc2d2b98]{box-sizing:border-box;
border-top:1px solid #f2de9c33;border-bottom:1px solid #f2de9c33;width:100%;padding:6px 0 4px}.xc-deck-record__group[data-v-fc2d2b98]{box-sizing:border-box;border:0;width:100%;margin:0 0 6px;padding:0;overflow:hidden}.xc-deck-record__group[data-v-fc2d2b98]:last-child{margin-bottom:0}.xc-deck-record__group-title[data-v-fc2d2b98]{color:#f2de9c;
justify-content:space-between;align-items:center;gap:8px;min-height:0;margin:0 6px 2px;font:700 12px/1.4 SimSun,serif;display:flex}.xc-deck-record__group-title span[data-v-fc2d2b98]{color:#b7aa8b;font:400 10px/1.4 SimSun,serif}.xc-deck-record__discard-title[data-v-fc2d2b98]{white-space:nowrap;
text-overflow:ellipsis;color:#e8d4a8;text-align:left;cursor:pointer;background:0 0;border:0;width:calc(100% - 12px);margin:0 6px 2px;padding:2px 0;font:700 12px/1.4 SimSun,serif;display:block;overflow:hidden}.xc-deck-record__discard-title[data-v-fc2d2b98]:hover{color:#fff3d0}.xc-deck-record__cards[data-v-fc2d2b98]{text-align:left;
box-sizing:border-box;width:auto;min-height:36px;margin:0 2px;padding:2px 4px 4px;display:block;position:relative;overflow:hidden}.xc-deck-record__cards[data-v-fc2d2b98]:empty:after{content:attr(data-empty);color:#b7aa8bbf;padding-left:4px;
font:12px/36px SimSun,serif}.xc-deck-record__unknown[data-v-fc2d2b98]{float:left;color:#a99a7a;background:#221b13d9;border:1px dashed #c9a15d73;border-radius:3px;margin:4px 0 0 2px;padding:2px 5px;font:11px/1.4 SimSun,serif}.xc-vue-skill-assist[data-v-e0b8bf6c]{clear:both;
width:100%;overflow:hidden}.xc-hero-block[data-v-e0b8bf6c]{margin:0 0 6px;padding:6px 8px;display:block}.xc-hero-block+.xc-hero-block[data-v-e0b8bf6c]{border-top:1px solid #f2de9c40}.card-detail-feature-title[data-v-e0b8bf6c]{color:#f2de9c;
margin-bottom:3px;font-size:12px;font-weight:700;line-height:1.4}.card-hero-feature-line[data-v-e0b8bf6c]{justify-content:space-between;align-items:center;gap:6px;display:flex}.card-hero-feature-line .suitRec[data-v-e0b8bf6c]{float:none;text-align:right;
flex:auto;width:auto;min-height:16px}.xc-suit-token[data-v-e0b8bf6c]{color:#2c2c2c;margin-left:2px;font-size:12px;font-weight:700;display:inline-block}.xc-suit-token.R[data-v-e0b8bf6c],.xc-suit-token.suit-heart[data-v-e0b8bf6c],.xc-suit-token.suit-diamond[data-v-e0b8bf6c]{color:#f04155}.xc-suit-token.suit-spade[data-v-e0b8bf6c]{color:#2c2c2c}.xc-suit-token.suit-club[data-v-e0b8bf6c]{color:#787878}.xc-suit-token .suit-glyph[data-v-e0b8bf6c]{font-size:1.05em}.card-detail-feature-result[data-v-e0b8bf6c]{text-align:center;
color:#f2de9c;white-space:pre-wrap;margin:4px 0 2px;font-size:12px;line-height:1.4}.xc-skill-options[data-v-e0b8bf6c]{flex-direction:column;gap:4px;margin:4px 0 2px;display:flex}.xc-skill-option[data-v-e0b8bf6c]{box-sizing:border-box;text-align:center;
color:#e8d4a8;cursor:pointer;background:#221b13d9;border:1px solid #c9a15d8c;border-radius:3px;width:100%;padding:3px 6px;font:700 12px/1.5 SimSun,serif}.xc-skill-option--highlight[data-v-e0b8bf6c]{color:#ffd76a;border-color:#f2de9c}.xc-skill-option[data-v-e0b8bf6c]:hover{color:#fff3d0;
background:#2e2418f5;border-color:#c9a15d}.knownCards[data-v-e0b8bf6c]{text-align:center;width:94%;height:auto;min-height:40px;margin:2px auto 4px;position:relative;overflow:hidden}.knownCards[data-v-e0b8bf6c]:after{text-align:center;content:attr(data-empty-label);
z-index:-1;color:#f2de9c;pointer-events:none;font:800 20px Arial Black,sans-serif;position:absolute;bottom:0;right:5px}.xc-turn-status[data-v-8eb1d127]{pointer-events:none;color:#f2de9c;flex:auto;justify-content:space-between;align-items:center;
gap:6px;min-width:0;margin:0;padding:0 2px 0 4px;font-size:11px;font-weight:700;line-height:1.2;display:flex}.xc-turn-status--compact[data-v-8eb1d127]{letter-spacing:.01em;flex-direction:column;justify-content:center;align-items:flex-start;
gap:3px;padding:4px 2px 4px 10px;font-size:11px;line-height:1.15}.xc-turn-status__item[data-v-8eb1d127]{white-space:nowrap;text-overflow:ellipsis;align-items:center;gap:3px;max-width:100%;display:inline-flex;overflow:hidden}.xc-turn-status__item svg[data-v-8eb1d127]{fill:none;
stroke:currentColor;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;flex:none;width:12px;height:12px}.xc-turn-status--compact .xc-turn-status__item svg[data-v-8eb1d127]{width:11px;height:11px}.xc-turn-status__item--sha[data-v-8eb1d127]{color:#f04155;
flex:none}.xc-turn-status--compact .xc-turn-status__item--sha[data-v-8eb1d127]{font-size:10px;font-weight:800}
/*$vite$:1*/ `);function t(){return{platform:`userscript`,async openExternal(e){window.open(e,`_blank`,`noopener`)},getSetting:e=>window.localStorage.getItem(e),setSetting:(e,t)=>window.localStorage.setItem(e,t),removeSetting:e=>window.localStorage.removeItem(e)}}function n({logger:e=console}={}){let t=new Set,
n=!1;function r(t,n){try{t()}catch(t){e.error(n,t)}}function i(e){return typeof e==`function`?n?(r(e,`[lifecycle] 延迟清理失败:`),e):(t.add(e),e):e}function a(e,t,n,r){return!e?.addEventListener||typeof n!=`function`?n:(e.addEventListener(t,n,r),
i(()=>e.removeEventListener(t,n,r)),n)}function o(){n||(n=!0,[...t].reverse().forEach(e=>{r(e,`[lifecycle] 清理失败:`)}),t.clear())}return{register:i,listen:a,dispose:o,get disposed(){return n},get size(){return t.size}}}Object.freeze([`SystemContext`,
`bgDiv`]);function r({globalObject:e=globalThis,documentObject:t=e.document}={}){if(e.PUERTS_JS_RESOURCES!==void 0)return[];let n=[];return e.SystemContext===void 0&&n.push(`SystemContext`),t?.getElementById?.(`bgDiv`)||n.push(`bgDiv`),n}function i({probe:e,
initialize:t,registerCleanup:n,status:r,timers:i=globalThis,intervalMs:a=1e3}){return r.state=`waiting`,r.missing=[],new Promise((o,s)=>{let c=!1,l,u=()=>{l!==void 0&&i.clearInterval(l),l=void 0},d=e=>{c=!0,u(),r.state=`failed`,r.error=String(e?.message||e),
s(e)},f=()=>{if(!c)try{if(r.missing=e(),r.missing.length)return;c=!0,u(),r.state=`initializing`,Promise.resolve().then(t).then(e=>{r.state=e===!1?`failed`:`ready`,o(e)},d)}catch(e){d(e)}};n(()=>{u(),c||(c=!0,r.state=`cancelled`,o(!1))}),c||(l=i.setInterval(f,
a),f())})}function a(e=globalThis,t={}){let n=e.__XIAOCHAO_ENGINEERING__||{};return Object.assign(n,{getMissingGameRuntimeDependencies:r,waitForGameRuntime:i,...t}),e.__XIAOCHAO_ENGINEERING__=n,n}function o(e){let t=Object.create(null);for(let n of e.split(`,
`))t[n]=1;return e=>e in t}var s={},c=[],l=()=>{},u=()=>!1,d=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),f=e=>e.startsWith(`onUpdate:`),p=Object.assign,m=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},
h=Object.prototype.hasOwnProperty,g=(e,t)=>h.call(e,t),_=Array.isArray,v=e=>D(e)===`[object Map]`,y=e=>D(e)===`[object Set]`,b=e=>D(e)===`[object Date]`,x=e=>typeof e==`function`,S=e=>typeof e==`string`,C=e=>typeof e==`symbol`,w=e=>typeof e==`object`&&!!e,
T=e=>(w(e)||x(e))&&x(e.then)&&x(e.catch),E=Object.prototype.toString,D=e=>E.call(e),ee=e=>D(e).slice(8,-1),te=e=>D(e)===`[object Object]`,ne=e=>S(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=o(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,
onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,oe=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),O=/\B([A-Z])/g,se=ie(e=>e.replace(O,
`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),ue=(e,t)=>!Object.is(e,t),de=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fe=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,
writable:r,value:n})},pe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},me,he=()=>me||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ge(e){if(_(e)){let t={};for(let n=0;n<e.length;
n++){let r=e[n],i=S(r)?be(r):ge(r);if(i)for(let e in i)t[e]=i[e]}return t}if(S(e)||w(e))return e}var _e=/;(?![^(]*\))/g,ve=/:([^]+)/,ye=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function be(e){let t={};return e.replace(ye,
e=>e.startsWith(`/*`)?``:e).split(_e).forEach(e=>{if(e){let n=e.split(ve);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function xe(e){let t=``;if(S(e))t=e;else if(_(e))for(let n=0;n<e.length;n++){let r=xe(e[n]);r&&(t+=r+` `)}else if(w(e))for(let n in e)e[n]&&(t+=n+` `);
return t.trim()}var Se=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Ce=o(Se);Se+``;function we(e){return!!e||e===``}function Te(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=ke(e[i],
t[i],n);return r}function Ee(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&ke(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function De(e,
t,n){let r=v(e),i=v(t);if(r||i||(r=y(e),i=y(t),r||i))return r&&i?Ee(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!ke(e[r],t[r],n))return!1}return String(e)===String(t)}function Oe(e,
t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function ke(e,t,n){if(e===t)return!0;let r=b(e),i=b(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=C(e),
i=C(t),r||i?e===t:(r=_(e),i=_(t),r||i?r&&i?Oe(e,t,n,Te):!1:(r=w(e),i=w(t),r||i?!r||!i?!1:Oe(e,t,n,De):String(e)===String(t))))}var Ae=e=>!!(e&&e.__v_isRef===!0),k=e=>S(e)?e:e==null?``:_(e)||w(e)&&(e.toString===E||!x(e.toString))?Ae(e)?k(e.value):JSON.stringify(e,
je,2):String(e),je=(e,t)=>Ae(t)?je(e,t.value):v(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Me(t,r)+` =>`]=n,e),{})}:y(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Me(e))}:C(t)?Me(t):w(t)&&!_(t)&&!te(t)?String(t):t,Me=(e,
t=``)=>C(e)?`Symbol(${e.description??t})`:e,Ne,Pe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ne&&(Ne.active?(this.parent=Ne,this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1):(this._active=!1,
this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;
let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Ne;try{return Ne=this,e()}finally{Ne=t}}}on(){++this._on===1&&(this.prevScope=Ne,
Ne=this)}off(){if(this._on>0&&--this._on===0){if(Ne===this)Ne=this.prevScope;else{let e=Ne;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,
n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);
this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Fe(){return Ne}var Ie,Le=new WeakSet,Re=class{constructor(e){this.fn=e,
this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&(Ne.active?Ne.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Le.has(this)&&(Le.delete(this),
this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||He(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tt(this),Ge(this);let e=Ie,t=Ze;Ie=this,Ze=!0;try{return this.fn()}finally{Ke(this),Ie=e,Ze=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;
e;e=e.nextDep)Ye(e);this.deps=this.depsTail=void 0,tt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Le.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qe(this)&&this.run()}get dirty(){return qe(this)}},
ze=0,Be,Ve;function He(e,t=!1){if(e.flags|=8,t){e.next=Ve,Ve=e;return}e.next=Be,Be=e}function Ue(){ze++}function We(){if(--ze>0)return;if(Ve){let e=Ve;for(Ve=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Be;){let t=Be;for(Be=void 0;
t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ge(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ke(e){let t,n=e.depsTail,
r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ye(r),Xe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function qe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Je(t.dep.computed)||t.dep.version!==t.version))return!0;
return!!e._dirty}function Je(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===nt)||(e.globalVersion=nt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qe(e))))return;e.flags|=2;let t=e.dep,n=Ie,r=Ze;Ie=e,Ze=!0;try{Ge(e);let n=e.fn(e._value);
(t.version===0||ue(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{Ie=n,Ze=r,Ke(e),e.flags&=-3}}function Ye(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,
e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ye(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),
n&&(n.prevDep=t,e.nextDep=void 0)}var Ze=!0,Qe=[];function $e(){Qe.push(Ze),Ze=!1}function et(){let e=Qe.pop();Ze=e===void 0||e}function tt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=Ie;Ie=void 0;try{t()}finally{Ie=e}}}var nt=0,rt=class{constructor(e,
t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},it=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,
this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!Ze||Ie===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ie)t=this.activeLink=new rt(Ie,this),Ie.deps?(t.prevDep=Ie.depsTail,Ie.depsTail.nextDep=t,Ie.depsTail=t):Ie.deps=Ie.depsTail=t,
at(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=Ie.depsTail,t.nextDep=void 0,Ie.depsTail.nextDep=t,Ie.depsTail=t,Ie.deps===t&&(Ie.deps=e)}return t}trigger(e){this.version++,
nt++,this.notify(e)}notify(e){Ue();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{We()}}};function at(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)at(e)}let n=e.dep.subs;
n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ot=new WeakMap,st=Symbol(``),ct=Symbol(``),lt=Symbol(``);function ut(e,t,n){if(Ze&&Ie){let t=ot.get(e);t||ot.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new it),r.map=t,r.key=n),r.track()}}function dt(e,
t,n,r,i,a){let o=ot.get(e);if(!o){nt++;return}let s=e=>{e&&e.trigger()};if(Ue(),t===`clear`)o.forEach(s);else{let i=_(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===lt||!C(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),
a&&s(o.get(lt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(st)),v(e)&&s(o.get(ct)));break;case`delete`:i||(s(o.get(st)),v(e)&&s(o.get(ct)));break;case`set`:v(e)&&s(o.get(st))}}We()}function ft(e){let t=$t(e);return t===e||(ut(t,`iterate`,
lt),Zt(e))?t:Xt(e)?Yt(e)?t.map(e=>nn(tn(e))):t.map(nn):t.map(tn)}function pt(e){return ut(e=$t(e),`iterate`,lt),e}function mt(e,t){return Xt(e)?nn(Yt(e)?tn(t):t):tn(t)}var ht={__proto__:null,[Symbol.iterator](){return gt(this,Symbol.iterator,
e=>mt(this,e))},concat(...e){return ft(this).concat(...e.map(e=>_(e)?ft(e):e))},entries(){return gt(this,`entries`,e=>(e[1]=mt(this,e[1]),e))},every(e,t){return vt(this,`every`,e,t,void 0,arguments)},filter(e,t){return vt(this,`filter`,e,t,
e=>e.map(e=>mt(this,e)),arguments)},find(e,t){return vt(this,`find`,e,t,e=>mt(this,e),arguments)},findIndex(e,t){return vt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return vt(this,`findLast`,e,t,e=>mt(this,e),arguments)},findLastIndex(e,
t){return vt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return vt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return bt(this,`includes`,e)},indexOf(...e){return bt(this,`indexOf`,e)},join(e){return ft(this).join(e)},lastIndexOf(...e){return bt(this,
`lastIndexOf`,e)},map(e,t){return vt(this,`map`,e,t,void 0,arguments)},pop(){return xt(this,`pop`)},push(...e){return xt(this,`push`,e)},reduce(e,...t){return yt(this,`reduce`,e,t)},reduceRight(e,...t){return yt(this,`reduceRight`,e,t)},shift(){return xt(this,
`shift`)},some(e,t){return vt(this,`some`,e,t,void 0,arguments)},splice(...e){return xt(this,`splice`,e)},toReversed(){return ft(this).toReversed()},toSorted(e){return ft(this).toSorted(e)},toSpliced(...e){return ft(this).toSpliced(...e)},unshift(...e){return xt(this,
`unshift`,e)},values(){return gt(this,`values`,e=>mt(this,e))}};function gt(e,t,n){let r=pt(e),i=r[t]();return r!==e&&!Zt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var _t=Array.prototype;function vt(e,
t,n,r,i,a){let o=pt(e),s=o!==e&&!Zt(e),c=o[t];if(c!==_t[t]){let t=c.apply(e,a);return s?tn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,mt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);
return s&&i?i(u):u}function yt(e,t,n,r){let i=pt(e),a=i!==e&&!Zt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=mt(e,t)),n.call(this,t,mt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);
return s?mt(e,c):c}function bt(e,t,n){let r=$t(e);ut(r,`iterate`,lt);let i=r[t](...n);return(i===-1||i===!1)&&Qt(n[0])?(n[0]=$t(n[0]),r[t](...n)):i}function xt(e,t,n=[]){$e(),Ue();let r=$t(e)[t].apply(e,n);return We(),et(),r}var St=o(`__proto__,
__v_isRef,__isVue`),Ct=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(C));function wt(e){C(e)||(e=String(e));let t=$t(this);return ut(t,`has`,e),t.hasOwnProperty(e)}var Tt=class{constructor(e=!1,
t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ut:Ht:i?Vt:Bt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;
let a=_(e);if(!r){let e;if(a&&(e=ht[t]))return e;if(t===`hasOwnProperty`)return wt}let o=Reflect.get(e,t,rn(e)?e:n);if((C(t)?Ct.has(t):St(t))||(r||ut(e,`get`,t),i))return o;if(rn(o)){let e=a&&ne(t)?o:o.value;return r&&w(e)?qt(e):e}return w(o)?r?qt(o):Gt(o):o}},
Et=class extends Tt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=_(e)&&ne(t);if(!this._isShallow){let e=Xt(i);if(!Zt(n)&&!Xt(n)&&(i=$t(i),n=$t(n)),!a&&rn(i)&&!rn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:g(e,t),s=Reflect.set(e,
t,n,rn(e)?e:r);return e===$t(r)&&s&&(o?ue(n,i)&&dt(e,`set`,t,n,i):dt(e,`add`,t,n)),s}deleteProperty(e,t){let n=g(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&dt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!C(t)||!Ct.has(t))&&ut(e,
`has`,t),n}ownKeys(e){return ut(e,`iterate`,_(e)?`length`:st),Reflect.ownKeys(e)}},Dt=class extends Tt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Ot=new Et,kt=new Dt,At=new Et(!0),jt=e=>e,Mt=e=>Reflect.getPrototypeOf(e);
function Nt(e,t,n){return function(...r){let i=this.__v_raw,a=$t(i),o=v(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?jt:t?nn:tn;return!t&&ut(a,`iterate`,c?ct:st),p(Object.create(l),{next(){let{value:e,done:t}=l.next();
return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Pt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ft(e,t){let n={get(n){let r=this.__v_raw,i=$t(r),a=$t(n);e||(ue(n,a)&&ut(i,`get`,
n),ut(i,`get`,a));let{has:o}=Mt(i),s=t?jt:e?nn:tn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&ut($t(t),`iterate`,st),t.size},has(t){let n=this.__v_raw,r=$t(n),
i=$t(t);return e||(ue(t,i)&&ut(r,`has`,t),ut(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=$t(a),s=t?jt:e?nn:tn;return!e&&ut(o,`iterate`,st),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return p(n,e?{add:Pt(`add`),
set:Pt(`set`),delete:Pt(`delete`),clear:Pt(`clear`)}:{add(e){let n=$t(this),r=Mt(n),i=$t(e),a=!t&&!Zt(e)&&!Xt(e)?i:e;return r.has.call(n,a)||ue(e,a)&&r.has.call(n,e)||ue(i,a)&&r.has.call(n,i)||(n.add(a),dt(n,`add`,a,a)),this},set(e,n){!t&&!Zt(n)&&!Xt(n)&&(n=$t(n));
let r=$t(this),{has:i,get:a}=Mt(r),o=i.call(r,e);o||=(e=$t(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ue(n,s)&&dt(r,`set`,e,n,s):dt(r,`add`,e,n),this},delete(e){let t=$t(this),{has:n,get:r}=Mt(t),i=n.call(t,e);i||=(e=$t(e),n.call(t,
e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&dt(t,`delete`,e,void 0,a),o},clear(){let e=$t(this),t=e.size!==0,n=e.clear();return t&&dt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Nt(r,
e,t)}),n}function It(e,t){let n=Ft(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(g(n,r)&&r in t?n:t,r,i)}var Lt={get:It(!1,!1)},Rt={get:It(!1,!0)},zt={get:It(!0,!1)},Bt=new WeakMap,Vt=new WeakMap,
Ht=new WeakMap,Ut=new WeakMap;function Wt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Gt(e){return Xt(e)?e:Jt(e,!1,Ot,Lt,Bt)}function Kt(e){return Jt(e,!1,
At,Rt,Vt)}function qt(e){return Jt(e,!0,kt,zt,Ht)}function Jt(e,t,n,r,i){if(!w(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Wt(ee(e));if(o===0)return e;let s=new Proxy(e,
o===2?r:n);return i.set(e,s),s}function Yt(e){return Xt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function Zt(e){return!!(e&&e.__v_isShallow)}function Qt(e){return e?!!e.__v_raw:!1}function $t(e){let t=e&&e.__v_raw;
return t?$t(t):e}function en(e){return!g(e,`__v_skip`)&&Object.isExtensible(e)&&fe(e,`__v_skip`,!0),e}var tn=e=>w(e)?Gt(e):e,nn=e=>w(e)?qt(e):e;function rn(e){return e?e.__v_isRef===!0:!1}function an(e){return on(e,!1)}function on(e,t){return rn(e)?e:new sn(e,
t)}var sn=class{constructor(e,t){this.dep=new it,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:$t(e),this._value=t?e:tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Zt(e)||Xt(e);
e=n?e:$t(e),ue(e,t)&&(this._rawValue=e,this._value=n?e:tn(e),this.dep.trigger())}};function A(e){return rn(e)?e.value:e}var cn={get:(e,t,n)=>t===`__v_raw`?e:A(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return rn(i)&&!rn(n)?(i.value=n,!0):Reflect.set(e,
t,n,r)}};function ln(e){return Yt(e)?e:new Proxy(e,cn)}var un=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new it(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nt-1,
this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return He(this,!0),!0}get value(){let e=this.dep.track();return Je(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};
function dn(e,t,n=!1){let r,i;return x(e)?r=e:(r=e.get,i=e.set),new un(r,i,n)}var fn={},pn=new WeakMap,mn=void 0;function hn(e,t=!1,n=mn){if(n){let t=pn.get(n);t||pn.set(n,t=[]),t.push(e)}}function gn(e,t,n=s){let{immediate:r,deep:i,once:a,
scheduler:o,augmentJob:c,call:u}=n,d=e=>i?e:Zt(e)||i===!1||i===0?_n(e,1):_n(e),f,p,h,g,v=!1,y=!1;if(rn(e)?(p=()=>e.value,v=Zt(e)):Yt(e)?(p=()=>d(e),v=!0):_(e)?(y=!0,v=e.some(e=>Yt(e)||Zt(e)),p=()=>e.map(e=>{if(rn(e))return e.value;if(Yt(e))return d(e);
if(x(e))return u?u(e,2):e()})):p=x(e)?t?u?()=>u(e,2):e:()=>{if(h){$e();try{h()}finally{et()}}let t=mn;mn=f;try{return u?u(e,3,[g]):e(g)}finally{mn=t}}:l,t&&i){let e=p,t=i===!0?1/0:i;p=()=>_n(e(),t)}let b=Fe(),S=()=>{f.stop(),b&&b.active&&m(b.effects,
f)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=y?Array(e.length).fill(fn):fn,w=e=>{if(f.flags&1&&(f.dirty||e)){if(t){let n=f.run();if(e||i||v||(y?n.some((e,t)=>ue(e,C[t])):ue(n,C))){h&&h();let e=mn;mn=f;try{let e=[n,C===fn?void 0:y&&C[0]===fn?[]:C,
g];C=n,u?u(t,3,e):t(...e)}finally{mn=e}}}else f.run()}};return c&&c(w),f=new Re(p),f.scheduler=o?()=>o(w,!1):w,g=e=>hn(e,!1,f),h=f.onStop=()=>{let e=pn.get(f);if(e){if(u)u(e,4);else for(let t of e)t();pn.delete(f)}},t?r?w(!0):C=f.run():o?o(w.bind(null,!0),!0):f.run(),
S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function _n(e,t=1/0,n){if(t<=0||!w(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,rn(e))_n(e.value,t,n);else if(_(e))for(let r=0;r<e.length;r++)_n(e[r],
t,n);else if(y(e)||v(e))e.forEach(e=>{_n(e,t,n)});else if(te(e)){for(let r in e)_n(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_n(e[r],t,n)}return e}function vn(e,t,n,r){try{return r?e(...r):e()}catch(e){bn(e,
t,n)}}function yn(e,t,n,r){if(x(e)){let i=vn(e,t,n,r);return i&&T(i)&&i.catch(e=>{bn(e,t,n)}),i}if(_(e)){let i=[];for(let a=0;a<e.length;a++)i.push(yn(e[a],t,n,r));return i}}function bn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||s;
if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){$e(),vn(a,null,10,[e,i,o]),et();return}}xn(e,n,i,r,o)}function xn(e,
t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Sn=[],Cn=-1,wn=[],Tn=null,En=0,Dn=Promise.resolve(),On=null;function kn(e){let t=On||Dn;return e?t.then(this?e.bind(this):e):t}function An(e){let t=Cn+1,n=Sn.length;for(;t<n;){let r=t+n>>>1,i=Sn[r],
a=In(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function jn(e){if(!(e.flags&1)){let t=In(e),n=Sn[Sn.length-1];!n||!(e.flags&2)&&t>=In(n)?Sn.push(e):Sn.splice(An(t),0,e),e.flags|=1,Mn()}}function Mn(){On||=Dn.then(Ln)}function Nn(e){if(!_(e))Tn&&e.id===-1?Tn.splice(En+1,0,
e):e.flags&1||(wn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)wn.push(e[t]);Mn()}function Pn(e,t,n=Cn+1){for(;n<Sn.length;n++){let t=Sn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;Sn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),
t.flags&4||(t.flags&=-2)}}}function Fn(e){if(wn.length){let e=[...new Set(wn)].sort((e,t)=>In(e)-In(t));if(wn.length=0,Tn){for(let t=0;t<e.length;t++)Tn.push(e[t]);return}for(Tn=e,En=0;En<Tn.length;En++){let e=Tn[En];e.flags&4&&(e.flags&=-2),
e.flags&8||e(),e.flags&=-2}Tn=null,En=0}}var In=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ln(e){try{for(Cn=0;Cn<Sn.length;Cn++){let e=Sn[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;
Cn<Sn.length;Cn++){let e=Sn[Cn];e&&(e.flags&=-2)}Cn=-1,Sn.length=0,Fn(e),On=null,(Sn.length||wn.length)&&Ln(e)}}var Rn=null,zn=null;function Bn(e){let t=Rn;return Rn=e,zn=e&&e.type.__scopeId||null,t}function Vn(e,t=Rn,n){if(!t||e._n)return e;
let r=(...n)=>{r._d&&ua(-1);let i=Bn(t),a=oa.length,o;try{o=e(...n)}finally{for(let e=oa.length;e>a;e--)ca();Bn(i),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hn(e,t){if(Rn===null)return e;let n=Ga(Rn),r=e.dirs||=[];for(let e=0;
e<t.length;e++){let[i,a,o,c=s]=t[e];i&&(x(i)&&(i={mounted:i,updated:i}),i.deep&&_n(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:c}))}return e}function Un(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];
a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&($e(),yn(c,n,8,[e.el,s,e,t]),et())}}function Wn(e,t){if(ja){let n=ja.provides,r=ja.parent&&ja.parent.provides;r===n&&(n=ja.provides=Object.create(r)),n[e]=t}}function Gn(e,t,n=!1){let r=Ma();if(r||pi){let i=pi?pi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;
if(i&&e in i)return i[e];if(arguments.length>1)return n&&x(t)?t.call(r&&r.proxy):t}}var Kn=Symbol.for(`v-scx`),qn=()=>Gn(Kn);function Jn(e,t,n){return Yn(e,t,n)}function Yn(e,t,n=s){let{immediate:r,deep:i,flush:a,once:o}=n,c=p({},n),u=t&&r||!t&&a!==`post`,
d;if(Ra){if(a===`sync`){let e=qn();d=e.__watcherHandles||=[]}else if(!u){let e=()=>{};return e.stop=l,e.resume=l,e.pause=l,e}}let f=ja;c.call=(e,t,n)=>yn(e,f,t,n);let m=!1;a===`post`?c.scheduler=e=>{Wi(e,f&&f.suspense)}:a!==`sync`&&(m=!0,c.scheduler=(e,
t)=>{t?e():jn(e)}),c.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};let h=gn(e,t,c);return Ra&&(d?d.push(h):u&&h()),h}function Xn(e,t,n){let r=this.proxy,i=S(e)?e.includes(`.`)?Zn(r,e):()=>r[e]:e.bind(r,r),a;x(t)?a=t:(a=t.handler,
n=t);let o=Fa(this),s=Yn(i,a.bind(r),n);return o(),s}function Zn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Qn=new WeakMap,$n=Symbol(`_vte`),er=e=>e.__isTeleport,tr=e=>e&&(e.disabled||e.disabled===``),
nr=e=>e&&(e.defer||e.defer===``),rr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,ir=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,ar=(e,t)=>{let n=e&&e.to;return S(n)?t?t(n):null:n},or={name:`Teleport`,__isTeleport:!0,
process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=tr(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=tr(e.props),
r=e.target=ar(e.props,m),a=dr(r,e,h,p);r&&(o!==`svg`&&rr(r)?o=`svg`:o!==`mathml`&&ir(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),ur(e,!1)))},S=e=>{let t=()=>{if(Qn.get(e)===t){if(Qn.delete(e),
tr(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),ur(e,!0)}x(e)}};Qn.set(e,t),Wi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),nr(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),ur(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,
u=Qn.get(e);if(u){u.flags|=8,Qn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=tr(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||rr(p)?o=`svg`:(o===`mathml`||ir(p))&&(o=`mathml`),y?(f(e.dynamicChildren,
y,_,i,a,o,s),Xi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):sr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=ar(t.props,m);e&&(t.target=e,sr(t,e,null,l,0))}else g&&sr(t,
p,h,l,1);ur(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=tr(f),m=a||!p,h=Qn.get(e);if(h&&(h.flags|=8,Qn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;
e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:sr,hydrate:cr};function sr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Qn.has(e)&&(!d||tr(u))&&c&16)for(let e=0;
e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function cr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;
else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=ar(t.props,c),h=tr(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,
t),f(m,c),t.targetAnchor||dr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||dr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),ur(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var lr=or;
function ur(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function dr(e,t,n,r,i=null){let a=t.targetStart=n(``),
o=t.targetAnchor=n(``);return a[$n]=o,e&&(r(a,e,i),r(o,e,i)),o}var fr=Symbol(`_leaveCb`);function pr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ia){t=n;break}}return t}function mr(e){if(!Cr(e))return er(e.type)&&e.children?pr(e.children):e;
if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&x(n.default))return n.default()}}function hr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;hr(er(n.type)&&mr(n)||n,
t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gr(e,t){return x(e)?p({name:e.name},t,{setup:e}):e}function _r(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function vr(e,
t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var yr=new WeakMap;function br(e,t,n,r,i=!1){if(_(e)){e.forEach((e,a)=>br(e,t&&(_(t)?t[a]:t),n,r,i));return}if(Sr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&br(e,
t,n,r.component.subTree);return}let a=r.shapeFlag&4?Ga(r.component):r.el,o=i?null:a,{i:c,r:l}=e,d=t&&t.r,f=c.refs===s?c.refs={}:c.refs,p=c.setupState,h=$t(p),v=p===s?u:e=>!vr(f,e)&&g(h,e),y=(e,t)=>!(t&&vr(f,t));if(d!=null&&d!==l){if(xr(t),S(d))f[d]=null,
v(d)&&(p[d]=null);else if(rn(d)){let e=t;y(d,e.k)&&(d.value=null),e.k&&(f[e.k]=null)}}if(x(l))vn(l,c,12,[o,f]);else{let t=S(l),r=rn(l);if(t||r){let s=()=>{if(e.f){let n=t?v(l)?p[l]:f[l]:y(l)||!e.k?l.value:f[e.k];if(i)_(n)&&m(n,a);else if(_(n))n.includes(a)||n.push(a);
else if(t)f[l]=[a],v(l)&&(p[l]=f[l]);else{let t=[a];y(l,e.k)&&(l.value=t),e.k&&(f[e.k]=t)}}else t?(f[l]=o,v(l)&&(p[l]=o)):r&&(y(l,e.k)&&(l.value=o),e.k&&(f[e.k]=o))};if(o){let t=()=>{s(),yr.delete(e)};t.id=-1,yr.set(e,t),Wi(t,n)}else xr(e),
s()}}}function xr(e){let t=yr.get(e);t&&(t.flags|=8,yr.delete(e))}he().requestIdleCallback,he().cancelIdleCallback;var Sr=e=>!!e.type.__asyncLoader,Cr=e=>e.type.__isKeepAlive;function wr(e,t){Er(e,`a`,t)}function Tr(e,t){Er(e,`da`,t)}function Er(e,
t,n=ja){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Or(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Cr(e.parent.vnode)&&Dr(r,t,n,e),e=e.parent}}function Dr(e,t,n,r){let i=Or(t,e,r,!0);Fr(()=>{m(r[t],
i)},n)}function Or(e,t,n=ja,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{$e();let i=Fa(n),a=yn(t,n,e,r);return i(),et(),a};return r?i.unshift(a):i.push(a),a}}var kr=e=>(t,n=ja)=>{(!Ra||e===`sp`)&&Or(e,(...e)=>t(...e),n)},Ar=kr(`bm`),
jr=kr(`m`),Mr=kr(`bu`),Nr=kr(`u`),Pr=kr(`bum`),Fr=kr(`um`),Ir=kr(`sp`),Lr=kr(`rtg`),Rr=kr(`rtc`);function zr(e,t=ja){Or(`ec`,e,t)}var Br=Symbol.for(`v-ndc`);function Vr(e,t,n,r){let i,a=n&&n[r],o=_(e);if(o||S(e)){let n=o&&Yt(e),r=!1,s=!1;n&&(r=!Zt(e),
s=Xt(e),e=pt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?nn(tn(e[n])):tn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(w(e)){if(e[Symbol.iterator])i=Array.from(e,(e,
n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Hr(e,t,n,r,i,a){if(n??={},Rn.ce||Rn.parent&&Sr(Rn.parent)&&Rn.parent.ce){let e=a!=null&&n.key==null?p({},
n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),M(),fa(j,null,[_a(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=oa.length;M();let c;try{let i=o&&Ur(o(n)),s=n.key||a||i&&i.key;c=fa(j,{key:(s&&!C(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},
i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=oa.length;e>s;e--)ca();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Ur(e){return e.some(e=>!pa(e)||!(e.type===ia||e.type===j&&!Ur(e.children)))?e:null}var Wr=e=>e?La(e)?Ga(e):Wr(e.parent):null,
Gr=p(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ei(e),$forceUpdate:e=>e.f||=()=>{jn(e.update)},
$nextTick:e=>e.n||=kn.bind(e.proxy),$watch:e=>Xn.bind(e)}),Kr=(e,t)=>e!==s&&!e.__isScriptSetup&&g(e,t),qr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:c,appContext:l}=e;if(t[0]!==`$`){let e=o[t];
if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Kr(r,t))return o[t]=1,r[t];else if(i!==s&&g(i,t))return o[t]=2,i[t];else if(g(a,t))return o[t]=3,a[t];else if(n!==s&&g(n,t))return o[t]=4,
n[t];else Yr&&(o[t]=0)}let u=Gr[t],d,f;if(u)return t===`$attrs`&&ut(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==s&&g(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,g(f,t))return f[t]},set({_:e},t,n){let{data:r,
setupState:i,ctx:a}=e;return Kr(i,t)?(i[t]=n,!0):r!==s&&g(r,t)?(r[t]=n,!0):g(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},c){let l;return!!(n[c]||e!==s&&c[0]!==`$`&&g(e,
c)||Kr(t,c)||g(a,c)||g(r,c)||g(Gr,c)||g(i.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?g(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Jr(e){return _(e)?e.reduce((e,
t)=>(e[t]=null,e),{}):e}var Yr=!0;function Xr(e){let t=ei(e),n=e.proxy,r=e.ctx;Yr=!1,t.beforeCreate&&Qr(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:h,
activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:S,unmounted:C,render:T,renderTracked:E,renderTriggered:D,errorCaptured:ee,serverPrefetch:te,expose:ne,inheritAttrs:re,components:ie,directives:ae,filters:oe}=t;if(u&&Zr(u,r,
null),o)for(let e in o){let t=o[e];x(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);w(t)&&(e.data=Gt(t))}if(Yr=!0,a)for(let e in a){let t=a[e],i=qa({get:x(t)?t.bind(n,n):x(t.get)?t.get.bind(n,n):l,set:!x(t)&&x(t.set)?t.set.bind(n):l});Object.defineProperty(r,
e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)$r(s[e],r,n,e);if(c){let e=x(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Wn(t,e[t])})}d&&Qr(d,e,`c`);function O(e,t){_(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(Ar,
f),O(jr,p),O(Mr,m),O(Nr,h),O(wr,g),O(Tr,v),O(zr,ee),O(Rr,E),O(Lr,D),O(Pr,b),O(Fr,C),O(Ir,te),_(ne)){if(ne.length){let t=e.exposed||={};ne.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===l&&(e.render=T),
re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),ae&&(e.directives=ae),te&&_r(e)}function Zr(e,t,n=l){_(e)&&(e=ai(e));for(let n in e){let r=e[n],i;i=w(r)?`default`in r?Gn(r.from||n,r.default,!0):Gn(r.from||n):Gn(r),rn(i)?Object.defineProperty(t,
n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Qr(e,t,n){yn(_(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function $r(e,t,n,r){let i=r.includes(`.`)?Zn(n,r):()=>n[r];if(S(e)){let n=t[e];x(n)&&Jn(i,
n)}else if(x(e))Jn(i,e.bind(n));else if(w(e)){if(_(e))e.forEach(e=>$r(e,t,n,r));else{let r=x(e.handler)?e.handler.bind(n):t[e.handler];x(r)&&Jn(i,r,e)}}}function ei(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,
s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>ti(c,e,o,!0)),ti(c,t,o)),w(t)&&a.set(t,c),c}function ti(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&ti(e,a,n,!0),i&&i.forEach(t=>ti(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=ni[i]||n&&n[i];
e[i]=r?r(e[i],t[i]):t[i]}return e}var ni={data:ri,props:ci,emits:ci,methods:si,computed:si,beforeCreate:oi,created:oi,beforeMount:oi,mounted:oi,beforeUpdate:oi,updated:oi,beforeDestroy:oi,beforeUnmount:oi,destroyed:oi,unmounted:oi,activated:oi,
deactivated:oi,errorCaptured:oi,serverPrefetch:oi,components:si,directives:si,watch:li,provide:ri,inject:ii};function ri(e,t){return t?e?function(){return p(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function ii(e,t){return si(ai(e),
ai(t))}function ai(e){if(_(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oi(e,t){return e?[...new Set([].concat(e,t))]:t}function si(e,t){return e?p(Object.create(null),e,t):t}function ci(e,t){return e?_(e)&&_(t)?[...new Set([...e,...t])]:p(Object.create(null),
Jr(e),Jr(t??{})):t}function li(e,t){if(!e)return t;if(!t)return e;let n=p(Object.create(null),e);for(let r in t)n[r]=oi(e[r],t[r]);return n}function ui(){return{app:null,config:{isNativeTag:u,performance:!1,globalProperties:{},optionMergeStrategies:{},
errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var di=0;function fi(e,t){return function(n,
r=null){x(n)||(n=p({},n)),r!=null&&!w(r)&&(r=null);let i=ui(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:di++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ja,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&x(e.install)?(a.add(e),
e.install(c,...t)):x(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,
o,l){if(!s){let u=c._ceVNode||_a(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Ga(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(yn(o,c._instance,16),e(null,c._container),
delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=pi;pi=c;try{return e()}finally{pi=t}}};return c}}var pi=null,mi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${oe(t)}Modifiers`]||e[`${se(t)}Modifiers`];
function hi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||s,i=n,a=t.startsWith(`update:`),o=a&&mi(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>S(e)?e.trim():e)),o.number&&(i=i.map(pe)));let c,l=r[c=le(t)]||r[c=le(oe(t))];!l&&a&&(l=r[c=le(se(t))]),
l&&yn(l,e,6,i);let u=r[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,yn(u,e,6,i)}}var gi=new WeakMap;function _i(e,t,n=!1){let r=n?gi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},
s=!1;if(!x(e)){let r=e=>{let n=_i(e,t,!0);n&&(s=!0,p(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(w(e)&&r.set(e,null),null):(_(a)?a.forEach(e=>o[e]=null):p(o,a),w(e)&&r.set(e,
o),o)}function vi(e,t){return!e||!d(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),g(e,t[0].toLowerCase()+t.slice(1))||g(e,se(t))||g(e,t))}function yi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,
render:l,renderCache:u,props:d,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Bn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Ca(l.call(t,e,u,d,m,p,h)),y=s}else{let e=t;v=Ca(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:bi(s)}}catch(t){oa.length=0,
bn(t,e,1),v=_a(ia)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(f)&&(y=xi(y,a)),b=ba(b,y,!1,!0))}return n.dirs&&(b=ba(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&hr(er(b.type)&&mr(b)||b,
n.transition),v=b,Bn(_),v}var bi=e=>{let t;for(let n in e)(n===`class`||n===`style`||d(n))&&((t||={})[n]=e[n]);return t},xi=(e,t)=>{let n={};for(let r in e)(!f(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Si(e,t,n){let{props:r,children:i,
component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ci(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(wi(o,r,
n)&&!vi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Ci(r,o,l):!!o;return!1}function Ci(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(wi(t,e,a)&&!vi(n,
a))return!0}return!1}function wi(e,t,n){let r=e[n],i=t[n];return n===`style`&&w(r)&&w(i)?!ke(r,i):r!==i}function Ti({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,
e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Ei={},Di=()=>Object.create(Ei),Oi=e=>Object.getPrototypeOf(e)===Ei;function ki(e,t,n,r=!1){let i={},a=Di();e.propsDefaults=Object.create(null),ji(e,
t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Kt(i):e.type.props?i:a,e.attrs=a}function Ai(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=$t(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;
for(let r=0;r<n.length;r++){let o=n[r];if(vi(e.emitsOptions,o))continue;let u=t[o];if(c){if(g(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=oe(o);i[t]=Mi(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ji(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!g(t,
a)&&((r=se(a))===a||!g(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Mi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!g(t,e))&&(delete a[e],l=!0)}l&&dt(e.attrs,`set`,``)}function ji(e,t,n,r){let[i,a]=e.propsOptions,o=!1,
c;if(t)for(let s in t){if(re(s))continue;let l=t[s],u;i&&g(i,u=oe(s))?!a||!a.includes(u)?n[u]=l:(c||={})[u]=l:vi(e.emitsOptions,s)||(!(s in r)||l!==r[s])&&(r[s]=l,o=!0)}if(a){let t=$t(n),r=c||s;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Mi(i,
t,s,r[s],e,!g(r,s))}}return o}function Mi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=g(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&x(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Fa(i);r=a[n]=e.call(null,
t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var Ni=new WeakMap;function Pi(e,t,n=!1){let r=n?Ni:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},l=[],u=!1;if(!x(e)){let r=e=>{u=!0;
let[n,r]=Pi(e,t,!0);p(o,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!u)return w(e)&&r.set(e,c),c;if(_(a))for(let e=0;e<a.length;e++){let t=oe(a[e]);Fi(t)&&(o[t]=s)}else if(a)for(let e in a){let t=oe(e);
if(Fi(t)){let n=a[e],r=o[t]=_(n)||x(n)?{type:n}:p({},n),i=r.type,s=!1,c=!0;if(_(i))for(let e=0;e<i.length;++e){let t=i[e],n=x(t)&&t.name;if(n===`Boolean`){s=!0;break}n===`String`&&(c=!1)}else s=x(i)&&i.name===`Boolean`;r[0]=s,r[1]=c,(s||g(r,
`default`))&&l.push(t)}}let d=[o,l];return w(e)&&r.set(e,d),d}function Fi(e){return e[0]!==`$`&&!re(e)}var Ii=e=>e===`_`||e===`_ctx`||e===`$stable`,Li=e=>_(e)?e.map(Ca):[Ca(e)],Ri=(e,t,n)=>{if(t._n)return t;let r=Vn((...e)=>Li(t(...e)),n);return r._c=!1,
r},zi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ii(n))continue;let i=e[n];if(x(i))t[n]=Ri(n,i,r);else if(i!=null){let e=Li(i);t[n]=()=>e}}},Bi=(e,t)=>{let n=Li(t);e.slots.default=()=>n},Vi=(e,t,n)=>{for(let r in t)(n||!Ii(r))&&(e[r]=t[r])},
Hi=(e,t,n)=>{let r=e.slots=Di();if(e.vnode.shapeFlag&32){let e=t._;e?(Vi(r,t,n),n&&fe(r,`_`,e,!0)):zi(t,r)}else t&&Bi(e,t)},Ui=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=s;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Vi(i,t,n):(a=!t.$stable,zi(t,
i)),o=t}else t&&(Bi(e,t),o={default:1});if(a)for(let e in i)!Ii(e)&&o[e]==null&&delete i[e]},Wi=na;function Gi(e){return Ki(e)}function Ki(e,t){let n=he();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:u,createComment:d,
setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=l,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ma(e,t)&&(r=be(e),me(e,i,a,!0),e=null),t.patchFlag===-2&&(l=!1,
t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===c&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case ra:y(e,t,n,r);break;case ia:b(e,
t,n,r);break;case aa:e??x(t,n,r,o);break;case j:ie(e,t,n,r,i,a,o,s,l);break;default:f&1?w(e,t,n,r,i,a,o,s,l):f&6?ae(e,t,n,r,i,a,o,s,l):(f&64||f&128)&&u.process(e,t,n,r,i,a,o,s,l,Ce)}d!=null&&i?br(d,e&&e.ref,a,t||e,!t):d==null&&e&&e.ref!=null&&br(e.ref,
null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=u(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=d(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,
e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,
n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=o(e.type,c,m&&m.is,m),h&8?p(d,e.children):h&16&&D(e.children,
d,null,i,s,qi(e,c),l,u),_&&Un(e,null,i,`created`),E(d,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!re(e)&&a(d,e,null,m[e],c,i);`value`in m&&a(d,`value`,null,m.value,c),(f=m.onVnodeBeforeMount)&&Da(f,i,e)}_&&Un(e,null,i,`beforeMount`);let v=Yi(s,
g);v&&g.beforeEnter(d),r(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Wi(()=>{try{f&&Da(f,i,e),v&&g.enter(d),_&&Un(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ta(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;
E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?wa(e[l]):Ca(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,t,n,r,i,o,c)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;
let m=e.props||s,h=t.props||s,g;if(n&&Ji(n,!1),(g=h.onVnodeBeforeUpdate)&&Da(g,n,t,e),f&&Un(t,e,n,`beforeUpdate`),n&&Ji(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,c=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,
``),d?te(e.dynamicChildren,d,l,n,r,qi(t,i),o):c||le(e,t,l,null,n,r,qi(t,i),o,!1),u>0){if(u&16)ne(l,m,h,n,i);else if(u&2&&m.class!==h.class&&a(l,`class`,null,h.class,i),u&4&&a(l,`style`,m.style,h.style,i),u&8){let e=t.dynamicProps;for(let t=0;
t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(l,r,o,s,i,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!c&&d==null&&ne(l,m,h,n,i);((g=h.onVnodeUpdated)||f)&&Wi(()=>{g&&Da(g,n,t,e),f&&Un(t,e,n,`updated`)},r)},te=(e,
t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===j||!ma(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},ne=(e,t,n,r,i)=>{if(t!==n){if(t!==s)for(let o in t)!re(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(re(o))continue;
let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ie=(e,t,n,i,a,o,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),
e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(te(e.dynamicChildren,m,n,a,o,s,c),(t.key!=null||a&&t===a.subTree)&&Xi(e,t,!0)):le(e,t,n,f,a,o,s,c,l)},ae=(e,t,
n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):oe(t,n,r,i,a,o,c):O(e,t,c)},oe=(e,t,n,r,i,a,o)=>{let s=e.component=Aa(e,r,i);if(Cr(e)&&(s.ctx.renderer=Ce),za(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=_a(ia);
b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},O=(e,t,n)=>{let r=t.component=e.component;if(Si(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,ce(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,
bu:n,u:r,parent:s,vnode:c}=e;{let n=Qi(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{Wi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ji(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&de(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Da(d,s,
t,c),Ji(e,!0);let f=yi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&Ti(e,f.el),r&&Wi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Wi(()=>Da(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,
m=Sr(t);if(Ji(e,!1),l&&de(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Da(o,d,t),Ji(e,!0),s&&Te){let t=()=>{e.subTree=yi(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,
e.parent?e.parent.type:void 0);let o=e.subTree=yi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Wi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Wi(()=>Da(o,d,e),i)}(t.shapeFlag&256||d&&Sr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Wi(e.a,i),e.isMounted=!0,
t=n=r=null}};e.scope.on();let c=e.effect=new Re(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>jn(u),Ji(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,
Ai(e,t.props,r,n),Ui(e,t.children,n),$e(),Pn(e),et()},le=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}if(f&256){ue(l,d,n,r,i,a,o,s,c);
return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&D(d,n,r,i,a,o,s,c))},ue=(e,t,n,r,i,a,o,s,l)=>{e||=c,t||=c;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let r=t[p]=l?wa(t[p]):Ca(t[p]);
v(e[p],r,n,null,i,a,o,s,l)}u>d?ye(e,i,a,!0,!1,f):D(t,n,r,i,a,o,s,l,f)},fe=(e,t,n,r,i,a,o,s,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],c=t[u]=l?wa(t[u]):Ca(t[u]);if(ma(r,c))v(r,c,n,null,i,a,o,s,l);else break;u++}for(;
u<=f&&u<=p;){let r=e[f],c=t[p]=l?wa(t[p]):Ca(t[p]);if(ma(r,c))v(r,c,n,null,i,a,o,s,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,c=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?wa(t[u]):Ca(t[u]),n,c,i,a,o,s,l),u++}}else if(u>p)for(;u<=f;)me(e[u],
i,a,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?wa(t[u]):Ca(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){me(r,i,a,!0);continue}let c;
if(r.key!=null)c=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ma(r,t[_])){c=_;break}c===void 0?me(r,i,a,!0):(C[c-h]=u+1,c>=S?S=c:x=!0,v(r,t[c],n,null,i,a,o,s,l),y++)}let w=x?Zi(C):c;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,c=t[e],f=t[e+1],
p=e+1<d?f.el||ea(f):r;C[u]===0?v(null,c,n,p,i,a,o,s,l):x&&(_<0||u!==w[_]?pe(c,n,p,2):_--)}}},pe=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,
n,a);return}if(d&64){c.move(e,t,n,Ce);return}if(c===j){r(s,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,a);r(e.anchor,t,n);return}if(c===aa){S(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[fr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Wi(()=>l.enter(s),
o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[fr];s._isLeaving&&s[fr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,
props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&($e(),br(s,null,n,e,!0),et()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);
return}let h=u&1&&f,g=!Sr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Da(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Un(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ce,r):l&&!l.hasOnce&&(a!==j||d>0&&d&64)?ye(l,
t,n,!1,!0):(a===j&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Wi(()=>{_&&Da(_,t,e),h&&Un(e,null,t,`unmounted`),v&&(e.el=null)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===j){_e(n,
r);return}if(t===aa){C(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},
_e=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;$i(c),$i(l),r&&de(r),i.stop(),a?(a.flags|=8,me(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,me(o,e,t,n)),s&&Wi(s,
t),Wi(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[$n];return n?h(n):t},
xe=!1,Se=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,Pn(r),Fn(),!1)},Ce={p:v,um:me,m:pe,r:ge,mt:oe,mc:D,pc:le,pbc:te,n:be,o:e},we,Te;return t&&([we,
Te]=t(Ce)),{render:Se,hydrate:we,createApp:fi(Se,we)}}function qi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ji({effect:e,job:t},
n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Yi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xi(e,t,n=!1){let r=e.children,i=t.children;if(_(r)&&_(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=wa(i[e]),
a.el=t.el),!n&&a.patchFlag!==-2&&Xi(t,a)),a.type===ra&&(a.patchFlag===-1&&(a=i[e]=wa(a)),a.el=t.el),a.type===ia&&!a.el&&(a.el=t.el)}}function Zi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],
e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Qi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qi(t)}function $i(e){if(e)for(let t=0;
t<e.length;t++)e[t].flags|=8}function ea(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ea(t.subTree):null}var ta=e=>e.__isSuspense;function na(e,t){t&&t.pendingBranch?_(e)?t.effects.push(...e):t.effects.push(e):Nn(e)}var j=Symbol.for(`v-fgt`),
ra=Symbol.for(`v-txt`),ia=Symbol.for(`v-cmt`),aa=Symbol.for(`v-stc`),oa=[],sa=null;function M(e=!1){oa.push(sa=e?null:[])}function ca(){oa.pop(),sa=oa[oa.length-1]||null}var la=1;function ua(e,t=!1){la+=e,e<0&&sa&&t&&(sa.hasOnce=!0)}function da(e){return e.dynamicChildren=la>0?sa||c:null,
ca(),la>0&&sa&&sa.push(e),e}function N(e,t,n,r,i,a){return da(P(e,t,n,r,i,a,!0))}function fa(e,t,n,r,i){return da(_a(e,t,n,r,i,!0))}function pa(e){return e?e.__v_isVNode===!0:!1}function ma(e,t){return e.type===t.type&&e.key===t.key}var ha=({key:e})=>e??null,
ga=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:S(e)||rn(e)||x(e)?{i:Rn,r:e,k:t,f:!!n}:e);function P(e,t=null,n=null,r=0,i=null,a=e===j?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ha(t),
ref:t&&ga(t),scopeId:zn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,
dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Rn};return s?(Ta(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=S(n)?8:16),la>0&&!o&&sa&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&sa.push(c),c}var _a=va;function va(e,t=null,n=null,r=0,i=null,
a=!1){if((!e||e===Br)&&(e=ia),pa(e)){let r=ba(e,t,!0);return n&&Ta(r,n),la>0&&!a&&sa&&(r.shapeFlag&6?sa[sa.indexOf(e)]=r:sa.push(r)),r.patchFlag=-2,r}if(Ka(e)&&(e=e.__vccOpts),t){t=ya(t);let{class:e,style:n}=t;e&&!S(e)&&(t.class=xe(e)),w(n)&&(Qt(n)&&!_(n)&&(n=p({},
n)),t.style=ge(n))}let o=S(e)?1:ta(e)?128:er(e)?64:w(e)?4:x(e)?2:0;return P(e,t,n,r,i,o,a,!0)}function ya(e){return e?Qt(e)||Oi(e)?p({},e):e:null}function ba(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ea(i||{},
t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ha(l),ref:t&&t.ref?n&&a?_(a)?a.concat(ga(t)):[a,ga(t)]:ga(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,
staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==j?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,
ssContent:e.ssContent&&ba(e.ssContent),ssFallback:e.ssFallback&&ba(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&hr(u,c.clone(u)),u}function xa(e=` `,t=0){return _a(ra,
null,e,t)}function Sa(e=``,t=!1){return t?(M(),fa(ia,null,e)):_a(ia,null,e)}function Ca(e){return e==null||typeof e==`boolean`?_a(ia):_(e)?_a(j,null,e.slice()):pa(e)?wa(e):_a(ra,null,String(e))}function wa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ba(e)}function Ta(e,
t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(_(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ta(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Oi(t)?t._ctx=Rn:r===3&&Rn&&(Rn.slots._===1?t._=1:(t._=2,
e.patchFlag|=1024))}}else if(x(t)){if(r&65){Ta(e,{default:t});return}t={default:t,_ctx:Rn},n=32}else t=String(t),r&64?(n=16,t=[xa(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ea(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=xe([t.class,
r.class]));else if(e===`style`)t.style=ge([t.style,r.style]);else if(d(e)){let n=t[e],i=r[e];i&&n!==i&&!(_(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!f(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Da(e,t,n,r=null){yn(e,
t,7,[n,r])}var Oa=ui(),ka=0;function Aa(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Oa,a={uid:ka++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pe(!0),render:null,
proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pi(r,i),emitsOptions:_i(r,i),emit:null,
emitted:null,propsDefaults:s,inheritAttrs:r.inheritAttrs,ctx:s,data:s,props:s,attrs:s,slots:s,refs:s,setupState:s,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,
bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=hi.bind(null,a),e.ce&&e.ce(a),a}var ja=null,Ma=()=>ja||Rn,Na,Pa;{let e=he(),t=(t,n)=>{let r;
return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Na=t(`__VUE_INSTANCE_SETTERS__`,e=>ja=e),Pa=t(`__VUE_SSR_SETTERS__`,e=>Ra=e)}var Fa=e=>{let t=ja;return Na(e),e.scope.on(),()=>{e.scope.off(),Na(t)}},Ia=()=>{ja&&ja.scope.off(),
Na(null)};function La(e){return e.vnode.shapeFlag&4}var Ra=!1;function za(e,t=!1,n=!1){t&&Pa(t);let{props:r,children:i}=e.vnode,a=La(e);ki(e,r,a,t),Hi(e,i,n||t);let o=a?Ba(e,t):void 0;return t&&Pa(!1),o}function Ba(e,t){let n=e.type;e.accessCache=Object.create(null),
e.proxy=new Proxy(e.ctx,qr);let{setup:r}=n;if(r){$e();let n=e.setupContext=r.length>1?Wa(e):null,i=Fa(e),a=vn(r,e,0,[e.props,n]),o=T(a);if(et(),i(),(o||e.sp)&&!Sr(e)&&_r(e),o){if(a.then(Ia,Ia),t)return a.then(n=>{Pa(!0);try{Va(e,n,t)}finally{Pa(!1)}}).catch(t=>{bn(t,
e,0)});e.asyncDep=a}else Va(e,a,t)}else Ha(e,t)}function Va(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:w(t)&&(e.setupState=ln(t)),Ha(e,n)}function Ha(e,t,n){let r=e.type;e.render||=r.render||l;{let t=Fa(e);$e();try{Xr(e)}finally{et(),
t()}}}var Ua={get(e,t){return ut(e,`get`,``),e[t]}};function Wa(e){return{attrs:new Proxy(e.attrs,Ua),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ga(e){return e.exposed?e.exposeProxy||=new Proxy(ln(en(e.exposed)),{get(t,
n){if(n in t)return t[n];if(n in Gr)return Gr[n](e)},has(e,t){return t in e||t in Gr}}):e.proxy}function Ka(e){return x(e)&&`__vccOpts`in e}var qa=(e,t)=>dn(e,t,Ra),Ja=`3.5.43`,Ya=void 0,Xa=typeof window<`u`&&window.trustedTypes;if(Xa)try{Ya=Xa.createPolicy(`vue`,
{createHTML:e=>e})}catch{}var Za=Ya?e=>Ya.createHTML(e):e=>e,Qa=`http://www.w3.org/2000/svg`,$a=`http://www.w3.org/1998/Math/MathML`,eo=typeof document<`u`?document:null,to=eo&&eo.createElement(`template`),no={insert:(e,t,n)=>{t.insertBefore(e,
n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?eo.createElementNS(Qa,e):t===`mathml`?eo.createElementNS($a,e):n?eo.createElement(e,{is:n}):eo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,
r.multiple),i},createText:e=>eo.createTextNode(e),createComment:e=>eo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>eo.querySelector(e),
setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{to.innerHTML=Za(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);
let i=to.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ro=Symbol(`_vtc`);function io(e,
t,n){let r=e[ro];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ao=Symbol(`_vod`),oo=Symbol(`_vsh`),so={name:`show`,beforeMount(e,{value:t},{transition:n}){e[ao]=e.style.display===`none`?``:e.style.display,
n&&t?n.beforeEnter(e):co(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),co(e,!0),r.enter(e)):r.leave(e,()=>{co(e,!1)}):co(e,t))},beforeUnmount(e,{value:t}){co(e,
t)}};function co(e,t){e.style.display=t?e[ao]:`none`,e[oo]=!t}var lo=Symbol(``),uo=/(?:^|;)\s*display\s*:/;function fo(e,t,n){let r=e.style,i=S(n),a=!1;if(n&&!i){if(t){if(S(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();
n[t]??mo(r,t,``)}else for(let e in t)n[e]??mo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?mo(r,i,``):vo(e,i,!S(t)&&t?t[i]:void 0,o)||mo(r,i,o)}}else if(i){if(t!==n){let e=r[lo];e&&(n+=`;`+e),r.cssText=n,a=uo.test(n)}}else t&&e.removeAttribute(`style`);
ao in e&&(e[ao]=a?r.display:``,e[oo]&&(r.display=`none`))}var po=/\s*!important$/;function mo(e,t,n){if(_(n))n.forEach(n=>mo(e,t,n));else if(n??=``,t.startsWith(`--`))po.test(n)?e.setProperty(t,n.replace(po,``),`important`):e.setProperty(t,
n);else{let r=_o(e,t);po.test(n)?e.setProperty(se(r),n.replace(po,``),`important`):e[r]=n}}var ho=[`Webkit`,`Moz`,`ms`],go={};function _o(e,t){let n=go[t];if(n)return n;let r=oe(t);if(r!==`filter`&&r in e)return go[t]=r;r=ce(r);for(let n=0;
n<ho.length;n++){let i=ho[n]+r;if(i in e)return go[t]=i}return t}function vo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&S(r)&&n===r}var yo=`http://www.w3.org/1999/xlink`;function bo(e,t,n,r,i,a=Ce(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(yo,
t.slice(6,t.length)):e.setAttributeNS(yo,t,n):n==null||a&&!we(n)?e.removeAttribute(t):e.setAttribute(t,a?``:C(n)?String(n):n)}function xo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Za(n):n);return}let a=e.tagName;
if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;
if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=we(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function So(e,t,n,r){e.addEventListener(t,n,r)}function Co(e,t,n,r){e.removeEventListener(t,
n,r)}var wo=Symbol(`_vei`);function To(e,t,n,r,i=null){let a=e[wo]||(e[wo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Oo(t);r?So(e,n,a[t]=Mo(r,i),s):o&&(Co(e,n,o,s),a[t]=void 0)}}var Eo=/(Once|Passive|Capture)$/,Do=/^on:?(?:Once|Passive|Capture)$/;
function Oo(e){let t,n;for(;(n=e.match(Eo))&&!Do.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var ko=0,Ao=Promise.resolve(),jo=()=>ko||=(Ao.then(()=>ko=0),Date.now());
function Mo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(_(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;
n++){let e=i[n];e&&yn(e,t,5,a)}}else yn(r,t,5,[e])};return n.value=e,n.attached=jo(),n}var No=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Po=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?io(e,r,o):t===`style`?fo(e,
n,r):d(t)?f(t)||To(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Fo(e,t,r,o))?(xo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&bo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Io(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!S(r)))?xo(e,
oe(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),bo(e,t,r,o))};function Fo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&No(t)&&x(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;
if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return No(t)&&S(n)?!1:t in e}function Io(e,t){let n=e._def.props;if(!n)return!1;let r=oe(t);return Array.isArray(n)?n.some(e=>oe(e)===r):Object.keys(n).some(e=>oe(e)===r)}var Lo=[`ctrl`,
`shift`,`alt`,`meta`],Ro={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,
right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Lo.some(n=>e[`${n}Key`]&&!t.includes(n))},zo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Ro[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},
Bo=p({patchProp:Po},no),Vo;function Ho(){return Vo||=Gi(Bo)}var Uo=((...e)=>{let t=Ho().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Go(e);if(!r)return;let i=t._component;!x(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);
let a=n(r,!1,Wo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Wo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Go(e){return S(e)?document.querySelector(e):e}var Ko={class:`xc-frame-header__status`},
qo=[`data-collapsed`,`aria-expanded`,`aria-label`,`data-tooltip`],Jo={__name:`PanelHeader`,props:{collapsed:{type:Boolean,required:!0}},emits:[`toggle`,`drag-start`],setup(e){return(t,n)=>(M(),N(`header`,{id:`header`,class:`xc-frame-header xiaochao-panel__header`,
onPointerdown:n[2]||=e=>t.$emit(`drag-start`,e)},[P(`div`,Ko,[Hr(t.$slots,`default`)]),P(`button`,{type:`button`,id:`toggle-me`,class:`xc-frame-toggle xiaochao-panel__toggle`,"data-collapsed":e.collapsed?`1`:`0`,"aria-expanded":String(!e.collapsed),
"aria-label":e.collapsed?`展开小抄`:`折叠小抄`,"data-tooltip":e.collapsed?`展开小抄`:`折叠小抄`,onPointerdown:n[0]||=zo(()=>{},[`stop`]),onClick:n[1]||=e=>t.$emit(`toggle`)},[...n[3]||=[P(`span`,{class:`xc-frame-toggle__icon`,"aria-hidden":`true`},[P(`span`,
{class:`xc-frame-toggle__arrow xc-frame-toggle__arrow--bottom-left`}),P(`span`,{class:`xc-frame-toggle__arrow xc-frame-toggle__arrow--top-right`})],-1)]],40,qo)],32))}},Yo=[{id:`cards`,label:`常规`},{id:`rogue`,label:`山河图`},{id:`tools`,label:`工具`}];
function Xo(e=`cards`,t,n=!1,r){let i=an(n),a=an(e),o=qa(()=>Yo.find(e=>e.id===a.value)?.label||``);function s(){i.value=!i.value,r?.(i.value)}function c(e){Yo.some(t=>t.id===e)&&(a.value=e,t?.(e))}return{isCollapsed:i,activeTabId:a,activeTabLabel:o,
toggleCollapsed:s,selectTab:c}}var Zo={class:`xc-main-tabs xiaochao-panel__tabs`,style:{"pointer-events":`auto`,flex:`0 0 auto`},"aria-label":`小抄功能分类`},Qo=[`aria-selected`,`onClick`],$o={__name:`PanelTabs`,props:{activeTabId:{type:String,required:!0},
toolsHasUpdate:{type:Boolean,default:!1}},emits:[`select`],setup(e){return(t,n)=>(M(),N(`nav`,Zo,[(M(!0),N(j,null,Vr(A(Yo),n=>(M(),N(`button`,{key:n.id,type:`button`,role:`tab`,class:xe([`xc-main-tab`,{active:n.id===e.activeTabId,"xc-main-tab--update":n.id===`tools`&&e.toolsHasUpdate}]),
"aria-selected":n.id===e.activeTabId,onClick:e=>t.$emit(`select`,n.id)},k(n.label),11,Qo))),128))]))}};function es(e,t,n,r=8,i=8){let a=(e.left+e.right-t.width)/2,o=Math.max(i,n.width-t.width-i),s=Math.min(Math.max(i,a),o),c=e.top-t.height-r,
l=c>=i,u=Math.max(i,n.height-t.height-i);return{left:s,top:l?c:Math.min(Math.max(i,e.bottom+r),u),placement:l?`top`:`bottom`}}var ts={__name:`TooltipLayer`,setup(e){let t=an(),n=an(``),r=an(!1),i=an(0),a=an(0),o=an(`top`),s;jr(()=>{document.addEventListener(`mouseover`,
l,!0),document.addEventListener(`mouseout`,u,!0),document.addEventListener(`pointerover`,l,!0),document.addEventListener(`pointerout`,u,!0),document.addEventListener(`focusin`,d,!0),document.addEventListener(`focusout`,f,!0),window.addEventListener(`resize`,
_),window.addEventListener(`scroll`,_,!0)}),Pr(()=>{document.removeEventListener(`mouseover`,l,!0),document.removeEventListener(`mouseout`,u,!0),document.removeEventListener(`pointerover`,l,!0),document.removeEventListener(`pointerout`,u,!0),
document.removeEventListener(`focusin`,d,!0),document.removeEventListener(`focusout`,f,!0),window.removeEventListener(`resize`,_),window.removeEventListener(`scroll`,_,!0)});function c(e){let t=e instanceof Element?e:e instanceof Node?e.parentElement:null;
return t?t.closest(`[data-tooltip]`):null}function l(e){let t=c(e.target);t&&!p(t,e.relatedTarget)&&m(t)}function u(e){s&&!p(s,e.relatedTarget)&&g(s)}function d(e){let t=c(e.target);t&&m(t)}function f(e){s&&!p(s,e.relatedTarget)&&g(s)}function p(e,
t){return t instanceof Node&&e.contains(t)}function m(e){let t=e.getAttribute(`data-tooltip`)?.trim();t&&(s=e,n.value=t,h(e),r.value=!0,kn(_))}function h(e){let n=t.value;if(!n)return;let r=e.closest(`dialog[open]`)||document.body;n.parentNode!==r&&r.appendChild(n)}function g(e){e===s&&(s=void 0,
r.value=!1)}function _(){if(!s?.isConnected||!t.value){s&&!s.isConnected&&g(s);return}let e=s.getBoundingClientRect(),n=t.value.getBoundingClientRect(),r=es(e,{width:n.width,height:n.height},{width:window.innerWidth,height:window.innerHeight});
i.value=r.left,a.value=r.top,o.value=r.placement}return(e,s)=>(M(),fa(lr,{to:`body`},[Hn(P(`div`,{ref_key:`tooltipElement`,ref:t,class:xe([`xiaochao-tooltip`,`xiaochao-tooltip--${o.value}`]),style:ge({left:`${i.value}px`,top:`${a.value}px`}),
role:`tooltip`},k(n.value),7),[[so,r.value]])]))}},ns={class:`xiaochao-settings-section`,"aria-labelledby":`display-settings-title`},rs={class:`xiaochao-settings-section__body`},is={class:`xiaochao-settings-grid xiaochao-display-switch-grid`},
as=[`data-tooltip`],os={class:`xiaochao-block-switch__label`},ss=[`data-tooltip`,`title`],cs=[`aria-label`,`checked`,`onChange`],ls={__name:`DisplaySettingsSection`,props:{configStore:{type:Object,required:!0}},setup(e){let t=e,n=[{key:`display.seatUiEnabled`,
label:`显示明牌`,tooltip:`在其他武将牌下方显示明牌`},{key:`display.deckHudEnabled`,label:`局内牌堆`,tooltip:`在游戏右上角轮次信息旁显示最近用牌与顶/底/弃入口，数字键 1–5 快速查看`},{key:`display.deckRecordEnabled`,label:`牌堆记录`,tooltip:`在常规页显示牌堆顶、牌堆底与本回合弃牌`},{key:`display.cardLabelsEnabled`,
label:`卡牌标签`,tooltip:`在自己的手牌上显示卡牌来源标签`},{key:`display.countdownEnabled`,label:`出牌读秒`,tooltip:`在游戏原有倒计时进度条上显示具体剩余秒数，不会隐藏游戏进度条`},{key:`cards.handSortEnabled`,label:`扩展理牌`,tooltip:`扩展原生整理手牌按钮
可按类型花色点数整理
长按可拖动，双击可锁定`}],r=Gt(Object.fromEntries(n.map(({key:e})=>[e,t.configStore.get(e)]))),i=n.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{r[e]=t}));Pr(()=>i.forEach(e=>e()));function a(e,n){t.configStore.set(e,n.currentTarget.checked)}return(e,
t)=>(M(),N(`section`,ns,[t[2]||=P(`header`,{class:`xiaochao-settings-section__header`},[P(`h4`,{id:`display-settings-title`,class:`xiaochao-settings-section__title`},`局内显示`),P(`span`,{class:`xiaochao-settings-section__summary`},`对局界面辅助信息`)],-1),
P(`div`,rs,[P(`div`,is,[(M(),N(j,null,Vr(n,e=>P(`div`,{key:e.key,class:`xiaochao-block-switch`,"data-tooltip":e.tooltip},[P(`span`,os,k(e.label),1),P(`label`,{class:`xiaochao-block-switch__toggle`,"data-tooltip":e.tooltip,title:e.tooltip},[P(`input`,
{type:`checkbox`,"aria-label":e.label,checked:r[e.key],onChange:t=>a(e.key,t)},null,40,cs),t[0]||=P(`span`,{class:`xiaochao-block-switch__slider`},null,-1),t[1]||=P(`span`,{class:`xiaochao-block-switch__state`,"aria-hidden":`true`},null,-1)],8,
ss)],8,as)),64))])])]))}};function us(e,t,n,r=12){let i=(e.left+e.right-t.width)/2,a=(e.top+e.bottom-t.height)/2,o=Math.max(r,n.width-t.width-r),s=Math.max(r,n.height-t.height-r);return{left:Math.min(Math.max(r,i),o),top:Math.min(Math.max(r,
a),s)}}var ds={class:`xiaochao-dialog__header`},fs=[`aria-label`],ps={class:`xiaochao-dialog__content`},ms={key:0,class:`xiaochao-dialog__footer`},hs={__name:`BaseDialog`,props:{open:{type:Boolean,required:!0},title:{type:String,required:!0},
anchorSelector:{type:String,default:`#createIframe`},closeOnBackdrop:{type:Boolean,default:!0},dialogClass:{type:String,default:``}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=an(),a=`xiaochao-dialog-title-${Math.random().toString(36).slice(2)}`,
o;Jn(()=>n.open,s),jr(()=>{s(),window.addEventListener(`resize`,f)}),Pr(()=>{window.removeEventListener(`resize`,f),d()});function s(){let e=i.value;e&&(n.open&&!e.open?(o=document.activeElement,e.showModal(),kn(f)):!n.open&&e.open&&d())}function c(){r(`close`)}function l(e){e.preventDefault(),
c()}function u(e){n.closeOnBackdrop&&e.target===i.value&&c()}function d(){let e=i.value;e?.open&&e.close(),o?.isConnected&&o.focus(),o=void 0}function f(){let e=i.value;if(!e?.open)return;let t=document.querySelector(n.anchorSelector)?.getBoundingClientRect()||{left:0,
right:window.innerWidth,top:0,bottom:window.innerHeight},r=e.getBoundingClientRect(),a=us(t,{width:r.width,height:r.height},{width:window.innerWidth,height:window.innerHeight});e.style.left=`${a.left}px`,e.style.top=`${a.top}px`}return(t,n)=>(M(),
fa(lr,{to:`body`},[P(`dialog`,{ref_key:`dialogElement`,ref:i,class:xe([`xiaochao-dialog`,e.dialogClass]),"aria-labelledby":a,onCancel:l,onClick:u},[P(`header`,ds,[P(`h2`,{id:a,class:`xiaochao-dialog__title`},k(e.title),1),P(`button`,{type:`button`,
class:`xiaochao-dialog__close`,"aria-label":`关闭${e.title}`,onClick:c},` × `,8,fs)]),P(`section`,ps,[Hr(t.$slots,`default`)]),t.$slots.footer?(M(),N(`footer`,ms,[Hr(t.$slots,`footer`)])):Sa(``,!0)],34)]))}},gs=[{key:`block.shaEffect`,label:`杀特效`,
tooltip:`屏蔽普通杀和属性杀的命中特效`},{key:`block.healEffect`,label:`回血特效`,tooltip:`屏蔽牌局中的回血动画`},{key:`block.jinnangEffect`,label:`锦囊特效`,tooltip:`屏蔽无中生有、南蛮、无懈等锦囊动画`},{key:`block.killEffect`,label:`击杀特效`,tooltip:`屏蔽角色被击杀时的终结特效`},{key:`block.otherSkinState`,
label:`他人动态`,tooltip:`将其他角色的动态皮肤按静态形态显示`},{key:`block.laoXianWindow`,label:`老仙特效`,tooltip:`自动关闭南华老仙的天书特效窗口`},{key:`block.entranceEffect`,label:`登场动画`,tooltip:`屏蔽武将、皮肤及山河首领进场动画`},{key:`block.interactEffect`,label:`牌局互动`,tooltip:`屏蔽鲜花、鸡蛋等牌局互动动画`},
{key:`block.mvpWindow`,label:`MVP结算`,tooltip:`跳过牌局结束后的MVP展示`}],_s=[{key:`block.adWindow`,label:`广告`,tooltip:`屏蔽大厅自动弹出的活动广告`},{key:`block.noticeWindow`,label:`狗托`,tooltip:`屏蔽顶部滚动的狗托弹幕`},{key:`block.factionSlogan`,label:`口号`,tooltip:`屏蔽开局时玩家自动发送的势力口号`},
{key:`block.taskRedDot`,label:`任务红点`,tooltip:`隐藏任务相关的红点提示`},{key:`block.packageWindow`,label:`开包动画`,tooltip:`屏蔽武将、皮肤等开包结果弹窗`},{key:`block.probWindow`,label:`出货动画`,tooltip:`屏蔽祈愿台翻翻乐等出货弹窗`}],vs=[...gs,..._s],ys={class:`xiaochao-settings-section`,
"aria-label":`屏蔽设置`},bs={class:`xiaochao-settings-section__body`},xs={class:`xiaochao-block-entry__count`},Ss={class:`xiaochao-block-select-bar`},Cs=[`data-tooltip`],ws={class:`xiaochao-block-group__title`},Ts={class:`xiaochao-block-group__grid`},
Es=[`data-tooltip`],Ds={class:`xiaochao-block-switch__label`},Os=[`data-tooltip`,`title`],ks=[`aria-label`,`checked`,`onChange`],As={__name:`BlockSettingsSection`,props:{configStore:{type:Object,required:!0}},setup(e){let t=e,n=[{id:`effect`,
title:`特效屏蔽（开启以屏蔽）`,settings:gs},{id:`other`,title:`其他屏蔽（开启以屏蔽）`,settings:_s}],r=an(!1),i=Gt(Object.fromEntries(vs.map(({key:e})=>[e,t.configStore.get(e)]))),a=vs.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{i[e]=t})),o=qa(()=>vs.filter(({key:e})=>i[e]).length),
s=qa(()=>o.value===vs.length);Pr(()=>a.forEach(e=>e()));function c(e,n){t.configStore.set(e,n.currentTarget.checked)}function l(e){for(let{key:n}of vs)t.configStore.set(n,e)}function u(){l(!s.value)}return(e,t)=>(M(),N(`section`,ys,[P(`div`,
bs,[P(`button`,{type:`button`,class:`xiaochao-block-entry`,"data-tooltip":`屏蔽各种恼人的元素`,onClick:t[0]||=e=>r.value=!0},[t[2]||=P(`span`,null,`屏蔽设置`,-1),P(`span`,xs,k(o.value)+`/`+k(A(vs).length),1)])]),_a(hs,{open:r.value,title:`屏蔽设置`,"dialog-class":`xiaochao-block-dialog`,
onClose:t[1]||=e=>r.value=!1},{default:Vn(()=>[P(`div`,Ss,[P(`button`,{type:`button`,class:`xiaochao-block-select-btn`,"data-tooltip":s.value?`关闭全部屏蔽项`:`开启全部屏蔽项`,onClick:u},k(s.value?`一键取消`:`一键全选`),9,Cs)]),(M(),N(j,null,Vr(n,e=>P(`section`,
{key:e.id,class:`xiaochao-block-group`},[P(`h4`,ws,k(e.title),1),P(`div`,Ts,[(M(!0),N(j,null,Vr(e.settings,e=>(M(),N(`div`,{key:e.key,class:`xiaochao-block-switch`,"data-tooltip":e.tooltip},[P(`span`,Ds,k(e.label),1),P(`label`,{class:`xiaochao-block-switch__toggle`,
"data-tooltip":e.tooltip,title:e.tooltip},[P(`input`,{type:`checkbox`,"aria-label":e.label,checked:i[e.key],onChange:t=>c(e.key,t)},null,40,ks),t[3]||=P(`span`,{class:`xiaochao-block-switch__slider`},null,-1)],8,Os)],8,Es))),128))])])),64))]),
_:1},8,[`open`])]))}},js={class:`xiaochao-settings-section`,"aria-label":`清除红点`},Ms={class:`xiaochao-settings-section__body`},Ns={class:`xiaochao-block-entry__count`},Ps={__name:`ClearRedDotSection`,props:{clearRedDots:{type:Function,required:!0}},
setup(e){let t=e,n=an(!1),r=an(``),i=0;Pr(()=>window.clearTimeout(i));function a(){n.value=!0;let e=t.clearRedDots();r.value=e.found?e.count?`已清除 ${e.count}`:`没有红点`:`未就绪`,window.clearTimeout(i),i=window.setTimeout(()=>{n.value=!1,r.value=``},1400)}return(e,
t)=>(M(),N(`section`,js,[P(`div`,Ms,[P(`button`,{type:`button`,class:xe([`xiaochao-block-entry`,{"xiaochao-block-entry--flash":n.value}]),"data-tooltip":`清除消不掉的红点`,onClick:a},[t[0]||=P(`span`,null,`清除红点`,-1),P(`span`,Ns,k(r.value),1)],2)])]))}};
function Fs(){return{platform:`electron`,async openExternal(e){if(typeof window.electron?.openExternal==`function`){await window.electron.openExternal(e);return}window.open(e,`_blank`,`noopener`)},getSetting:e=>window.localStorage.getItem(e),
setSetting:(e,t)=>window.localStorage.setItem(e,t),removeSetting:e=>window.localStorage.removeItem(e)}}var Is=gr({__name:`GuanxingEntry`,props:{platform:{}},setup(e){let n=e;function r(){(n.platform===`electron`?Fs():t()).openExternal(`https://gx.95chong.cn/`)}return(e,
t)=>(M(),N(`button`,{type:`button`,class:`xiaochao-block-entry xiaochao-block-entry--center`,"data-tooltip":`在浏览器新页面打开自助观星`,onClick:r},[...t[0]||=[P(`span`,null,`自助观星`,-1)]]))}}),Ls=[{key:`skin.localSkin`,label:`皮肤解锁`,tooltip:`已拥有的皮肤正常换肤
未拥有的皮肤本地解锁，他人不可见`},{key:`skin.otherLocalSkin`,label:`他人换肤`,tooltip:`给其他角色本地换肤
仅本局生效，仅自己可见
旁观模式下不生效`}],Rs=[{key:`skin.officialBackground`,label:`官方背景`,tooltip:`解锁官方背景功能的所有背景`},{key:`skin.skinPaper`,label:`皮肤做背景`,tooltip:`进入皮肤详情界面进行设置
收藏后可在局内右上角背景按钮快速切换
如果要使用动态皮肤做背景
请先将皮肤切换为动态形态再设置`},{key:`skin.allPaper`,label:`全局背景`,tooltip:`全局背景也替换为皮肤做背景`,visibleWhen:`skin.skinPaper`}],zs=[...Ls,...Rs],Bs={class:`xiaochao-settings-section`,"aria-label":`皮肤与背景`},Vs={class:`xiaochao-settings-section__body`},Hs={class:`xiaochao-block-entry__count`},
Us={class:`xiaochao-block-group__title`},Ws={class:`xiaochao-block-group__grid`},Gs=[`data-tooltip`],Ks={class:`xiaochao-block-switch__label`},qs=[`data-tooltip`,`title`],Js=[`aria-label`,`checked`,`onChange`],Ys={__name:`SkinBackgroundSettingsSection`,
props:{configStore:{type:Object,required:!0}},setup(e){let t=e,n=[{id:`skin`,title:`皮肤设置`,settings:Ls},{id:`background`,title:`背景设置`,settings:Rs}],r=an(!1),i=Gt(Object.fromEntries(zs.map(({key:e})=>[e,t.configStore.get(e)]))),a=zs.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{i[e]=t})),
o=qa(()=>zs.filter(({key:e})=>i[e]).length);Pr(()=>a.forEach(e=>e()));function s(e){return!e.visibleWhen||i[e.visibleWhen]}function c(e,n){t.configStore.set(e,n.currentTarget.checked)}return(e,t)=>(M(),N(`section`,Bs,[P(`div`,Vs,[P(`button`,
{type:`button`,class:`xiaochao-block-entry`,"data-tooltip":`本地解锁自己与他人的武将皮肤
本地解锁官方主题背景
本地解锁将任意皮肤做背景`,onClick:t[0]||=e=>r.value=!0},[t[2]||=P(`span`,null,`皮肤与背景`,-1),P(`span`,Hs,k(o.value)+`/`+k(A(zs).length),1)])]),_a(hs,{open:r.value,title:`皮肤与背景`,"dialog-class":`xiaochao-block-dialog`,onClose:t[1]||=e=>r.value=!1},{default:Vn(()=>[(M(),
N(j,null,Vr(n,e=>P(`section`,{key:e.id,class:`xiaochao-block-group`},[P(`h4`,Us,k(e.title),1),P(`div`,Ws,[(M(!0),N(j,null,Vr(e.settings,e=>(M(),N(j,{key:e.key},[s(e)?(M(),N(`div`,{key:0,class:`xiaochao-block-switch`,"data-tooltip":e.tooltip},[P(`span`,
Ks,k(e.label),1),P(`label`,{class:`xiaochao-block-switch__toggle`,"data-tooltip":e.tooltip,title:e.tooltip},[P(`input`,{type:`checkbox`,"aria-label":e.label,checked:i[e.key],onChange:t=>c(e.key,t)},null,40,Js),t[3]||=P(`span`,{class:`xiaochao-block-switch__slider`},
null,-1),t[4]||=P(`span`,{class:`xiaochao-block-switch__state`},null,-1)],8,qs)],8,Gs)):Sa(``,!0)],64))),128))])])),64))]),_:1},8,[`open`])]))}},Xs=`autoTask.enabled`,Zs=`自动完成砍树、敲鼓等枯燥的点击流程
自动领取活跃任务、月卡、签到、活动等奖励
这是总开关，下面的选项可在此基础上排除部分内容
自动化操作存在账号风险，请自行斟酌`,Qs=[{key:`autoTask.skipTavern`,label:`酒馆`,tooltip:`跳过酒馆碎片任务，也不同步酒馆进度`},{key:`autoTask.skipMail`,label:`邮件`,tooltip:`跳过邮件附件`},{key:`autoTask.skipDailyGeneralBag`,label:`武将包`,tooltip:`跳过每日免费武将包`},{key:`autoTask.skipSignTrialCard`,
label:`体验卡`,tooltip:`签到会有体验武将，领取会污染将池
开启表示跳过，月底记得手动领取`},{key:`autoTask.skipDiJiaQuan`,label:`抵价券`,tooltip:`不领取任何含抵价券的奖励`},{key:`autoTask.skipHuanLeDou`,label:`欢乐豆`,tooltip:`不领取任何含欢乐豆的奖励
低于600豆时的免费领豆也会跳过`}],$s=[Xs,...Qs.map(({key:e})=>e)],ec={class:`xiaochao-settings-section`,"aria-label":`自动领取`},tc={class:`xiaochao-settings-section__body`},nc=[`data-tooltip`],rc={class:`xiaochao-block-entry__count`},ic={class:`xiaochao-block-group`},
ac={class:`xiaochao-block-group__grid`},oc=[`data-tooltip`],sc=[`data-tooltip`,`title`],cc=[`checked`],lc={class:`xiaochao-block-group`},uc={class:`xiaochao-block-group__grid`},dc=[`data-tooltip`,`title`],fc=[`aria-label`,`checked`,`disabled`,
`onChange`],pc={class:`xiaochao-block-check__label`},mc={__name:`AutoTaskSettingsSection`,props:{configStore:{type:Object,required:!0}},setup(e){let t=e,n=an(!1),r=an(t.configStore.get(Xs)),i=Gt(Object.fromEntries(Qs.map(({key:e})=>[e,t.configStore.get(e)]))),
a=[t.configStore.subscribe(Xs,({value:e})=>{r.value=e}),...Qs.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{i[e]=t}))],o=qa(()=>Qs.filter(({key:e})=>i[e]).length);Pr(()=>a.forEach(e=>e()));function s(e){t.configStore.set(Xs,e.currentTarget.checked)}function c(e,
n){t.configStore.set(e,n.currentTarget.checked)}return(e,t)=>(M(),N(`section`,ec,[P(`div`,tc,[P(`button`,{type:`button`,class:`xiaochao-block-entry`,"data-tooltip":A(Zs),onClick:t[0]||=e=>n.value=!0},[t[2]||=P(`span`,null,`自动领取`,-1),P(`span`,
rc,k(r.value?`开·跳过${o.value}`:`关`),1)],8,nc)]),_a(hs,{open:n.value,title:`自动领取`,"dialog-class":`xiaochao-block-dialog`,onClose:t[1]||=e=>n.value=!1},{default:Vn(()=>[P(`section`,ic,[t[5]||=P(`h4`,{class:`xiaochao-block-group__title`},`总开关`,-1),
P(`div`,ac,[P(`div`,{class:`xiaochao-block-switch`,"data-tooltip":A(Zs)},[t[4]||=P(`span`,{class:`xiaochao-block-switch__label`},`自动领取`,-1),P(`label`,{class:`xiaochao-block-switch__toggle`,"data-tooltip":A(Zs),title:A(Zs)},[P(`input`,{type:`checkbox`,
"aria-label":`自动领取`,checked:r.value,onChange:s},null,40,cc),t[3]||=P(`span`,{class:`xiaochao-block-switch__slider`},null,-1)],8,sc)],8,oc)])]),P(`section`,lc,[t[7]||=P(`h4`,{class:`xiaochao-block-group__title`},`跳过项（勾选 = 不领）`,-1),P(`div`,uc,[(M(!0),
N(j,null,Vr(A(Qs),e=>(M(),N(`label`,{key:e.key,class:xe([`xiaochao-block-check`,{"xiaochao-block-check--disabled":!r.value}]),"data-tooltip":e.tooltip,title:e.tooltip},[P(`input`,{type:`checkbox`,"aria-label":e.label,checked:i[e.key],disabled:!r.value,
onChange:t=>c(e.key,t)},null,40,fc),t[6]||=P(`span`,{class:`xiaochao-block-check__box`},null,-1),P(`span`,pc,k(e.label),1)],10,dc))),128))])])]),_:1},8,[`open`])]))}},hc=`rogue.mapEnabled`,gc=`rogue.hideStory`,_c=[{key:hc,label:`山河地图`,tooltip:`小地图上预览城池事件`},
{key:gc,label:`隐藏对白`,tooltip:`山河图场景对白不显示`}],vc=`打开集市`,yc=`打开山河图集市窗口（RogueJiShiWindow）`,bc=`集市透视`,xc=`根据同步包 shopData.itemId + Rplot 预览集市商品与价格；暂无数据时不显示`,Sc={class:`xiaochao-settings-section xiaochao-rogue-section`,"aria-label":`山河图`},Cc={class:`xiaochao-settings-section__body`},
wc={class:`xiaochao-settings-grid xiaochao-rogue-switch-grid`},Tc=[`data-tooltip`],Ec={class:`xiaochao-block-switch__label`},Dc=[`data-tooltip`,`title`],Oc=[`aria-label`,`checked`,`onChange`],kc=[`data-tooltip`],Ac={class:`xiaochao-rogue-shop-preview__title`},
jc={class:`xiaochao-rogue-shop-preview__list`,role:`list`},Mc=[`data-level`,`title`],Nc=[`data-tooltip`],Pc={__name:`RogueSettingsSection`,props:{configStore:{type:Object,required:!0},openShop:{type:Function,required:!0},getShopPreview:{type:Function,
default:null},subscribeShopPreview:{type:Function,default:null}},setup(e){let t=e,n=Gt(Object.fromEntries(_c.map(({key:e})=>[e,t.configStore.get(e)]))),r=_c.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{n[e]=t})),i=an(typeof t.getShopPreview==`function`?[...t.getShopPreview()]:[]),
a=typeof t.subscribeShopPreview==`function`?t.subscribeShopPreview(e=>{i.value=Array.isArray(e)?[...e]:[]}):null;Pr(()=>{r.forEach(e=>e()),typeof a==`function`&&a()});function o(e,n){t.configStore.set(e,n.currentTarget.checked)}function s(){t.openShop()}return(e,
t)=>(M(),N(`section`,Sc,[t[2]||=P(`header`,{class:`xiaochao-settings-section__header`},[P(`h4`,{class:`xiaochao-settings-section__title`},`山河图辅助`),P(`span`,{class:`xiaochao-settings-section__summary`},`地图透视 · 对白 · 集市`)],-1),P(`div`,Cc,[P(`div`,
wc,[(M(!0),N(j,null,Vr(A(_c),e=>(M(),N(`div`,{key:e.key,class:`xiaochao-block-switch`,"data-tooltip":e.tooltip},[P(`span`,Ec,k(e.label),1),P(`label`,{class:`xiaochao-block-switch__toggle`,"data-tooltip":e.tooltip,title:e.tooltip},[P(`input`,
{type:`checkbox`,"aria-label":e.label,checked:n[e.key],onChange:t=>o(e.key,t)},null,40,Oc),t[0]||=P(`span`,{class:`xiaochao-block-switch__slider`},null,-1),t[1]||=P(`span`,{class:`xiaochao-block-switch__state`,"aria-hidden":`true`},null,-1)],8,
Dc)],8,Tc))),128))]),i.value.length?(M(),N(`div`,{key:0,class:`xiaochao-rogue-shop-preview`,"data-tooltip":A(xc),"aria-label":`集市透视`},[P(`div`,Ac,k(A(bc)),1),P(`div`,jc,[(M(!0),N(j,null,Vr(i.value,e=>(M(),N(`button`,{key:e.id,type:`button`,
class:`xiaochao-rogue-shop-preview__item`,"data-level":e.level>=1&&e.level<=4?e.level:0,title:e.title||e.label,role:`listitem`},k(e.label),9,Mc))),128))])],8,kc)):Sa(``,!0),P(`button`,{type:`button`,class:`xiaochao-block-entry xiaochao-block-entry--center xiaochao-rogue-shop-btn`,
"data-tooltip":A(yc),onClick:s},[P(`span`,null,k(A(vc)),1)],8,Nc)])]))}},Fc=`assist.extraEnabled`,Ic=`assist.autoBotEnabled`,Lc=`assist.autoHGEnabled`,Rc=`assist.baiShengEnabled`,zc=`assist.autoBotTavernTarget`,Bc=[`开启后可使用进阶武将辅助`,`魔孙权：显示权御增益状态`,
`南华老仙：显示天书选择提示`,`裴秀：显示地图路线辅助`,`许劭：显示评鉴可连词框`].join(`
`);[`自动选将、出牌、桌上准备；大厅可建密码房或国战房`,`优先跟官方小杀推荐，超时改本地规则，再不行点托管`,`自己建的托管房才会补人机并开局；进别人的房只准备`,`可设酒馆时长目标，完成后自动停止`,`与盖主速刷同时开时，选将和出牌让给盖主`,`自动化操作存在账号风险，请自行斟酌`].join(`
`),[`主公点将黄盖苦肉自杀速刷`,`可用来刷武将百胜战功和官阶任务`,`1.小号创建自选身份密码房，选择主公`,`2.大号加入房间开启自动挂机和百胜战功`,`3.小号打开盖主速刷（自动点黄盖、苦肉、结算再开）`,`4.保持两窗口在前台`,`自动化操作存在账号风险，请自行斟酌`].join(`
`);var Vc=[{key:Fc,label:`辅助功能`,tooltip:Bc}],Hc=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Uc={class:`xiaochao-settings-section`,"aria-label":`辅助功能`},Wc={class:`xiaochao-settings-section__body`},Gc={class:`xiaochao-settings-grid xiaochao-display-switch-grid`},
Kc=[`data-tooltip`,`onMouseenter`],qc={class:`xiaochao-block-switch__label`},Jc=[`data-tooltip`,`title`],Yc=[`aria-label`,`checked`,`onChange`],Xc={key:0,class:`xiaochao-game-assist-tip`},Zc=Hc({__name:`GameAssistSettingsSection`,props:{configStore:{type:Object,
required:!0}},setup(e){let t=e,n=Gt(Object.fromEntries(Vc.map(({key:e})=>[e,t.configStore.get(e)]))),r=an(``),i=qa(()=>Vc.find(e=>e.key===r.value)?.tooltip||``),a=[...Vc.map(({key:e})=>t.configStore.subscribe(e,({value:t})=>{n[e]=t}))];for(let e of[Ic,
Lc,Rc])t.configStore.get(e)===!0&&t.configStore.set(e,!1);Pr(()=>a.forEach(e=>e()));function o(e,n){t.configStore.set(e,n.currentTarget.checked)}return(e,t)=>(M(),N(`section`,Uc,[P(`div`,Wc,[P(`div`,Gc,[(M(!0),N(j,null,Vr(A(Vc),e=>(M(),N(`div`,
{key:e.key,class:`xiaochao-block-switch xiaochao-game-assist-switch`,"data-tooltip":e.tooltip,onMouseenter:t=>r.value=e.key,onMouseleave:t[0]||=e=>r.value=``},[P(`span`,qc,k(e.label),1),P(`label`,{class:`xiaochao-block-switch__toggle`,"data-tooltip":e.tooltip,
title:e.tooltip},[P(`input`,{type:`checkbox`,"aria-label":e.label,checked:n[e.key],onChange:t=>o(e.key,t)},null,40,Yc),t[1]||=P(`span`,{class:`xiaochao-block-switch__slider`},null,-1),t[2]||=P(`span`,{class:`xiaochao-block-switch__state`,"aria-hidden":`true`},
null,-1)],8,Jc)],40,Kc))),128))]),i.value?(M(),N(`p`,Xc,k(i.value),1)):Sa(``,!0)])]))}},[[`__scopeId`,`data-v-ef60bdbb`]]),Qc=`https://xc.95chong.cn/downloads`;function $c(e,t){let n=String(e||`0`).split(`.`).map(e=>Number.parseInt(e,10)||0),
r=String(t||`0`).split(`.`).map(e=>Number.parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e+=1){if((n[e]||0)>(r[e]||0))return 1;if((n[e]||0)<(r[e]||0))return-1}return 0}function el(e,t){return $c(e,t)>0}function tl(e){try{let t=new URL(e);
return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}}function nl(e,t=Qc){if(!e||typeof e!=`object`)return null;let n=e,r=String(n.version??n.scriptVersion??``).trim();if(!r)return null;let i=String(n.notes??n.changelog??``).trim(),
a=String(n.pageUrl??n.url??t).trim();return{version:r,notes:i,pageUrl:tl(a)?a:t}}function rl(){return`1.0.12`}var il=`update.dismissedVersion`;function al(e){return{currentVersion:e,latestVersion:null,notes:``,pageUrl:Qc,hasUpdate:!1,dialogOpen:!1,
failureMessage:``}}function ol(e,t,n={}){let r=n.currentVersion||rl(),i=n.manifestUrl||`https://95chong.cn/api/xiaochao-version`,a=n.fetchImpl||(typeof fetch==`function`?fetch.bind(globalThis):void 0),o=al(r),s=new Set,c=!1;function l(e){o=e,
s.forEach(e=>e(o))}function u(){let t=o.latestVersion;t&&e.set(il,t),o.dialogOpen&&l({...o,dialogOpen:!1})}function d(e){let t=el(e.version,r);l({currentVersion:r,latestVersion:e.version,notes:e.notes,pageUrl:e.pageUrl,hasUpdate:t,dialogOpen:!1,
failureMessage:``})}async function f(){if(!a){l({...o,failureMessage:`检查失败`});return}try{let e=await a(i,{method:`GET`,mode:`cors`,credentials:`omit`,cache:`no-store`,referrerPolicy:`no-referrer`});if(c)return;if(!e.ok){l({...o,failureMessage:`检查失败`});
return}let t=await e.json();if(c)return;let n=nl(t);n?d(n):l({...o,failureMessage:`检查失败`})}catch(e){console.warn(`[检查更新] 拉取失败:`,e),c||l({...o,failureMessage:`检查失败`})}}return{getSnapshot:()=>o,subscribe(e){return s.add(e),()=>s.delete(e)},start(){},
async checkNow(){return c||n.skipRemoteCheck||await f(),o},dismissDialog(){u()},async openUpdatePage(){let e=o.pageUrl||`https://xc.95chong.cn/downloads`;try{await t(e)}catch{typeof window<`u`&&window.open(e,`_blank`,`noopener`)}u()},dispose(){c=!0,
s.clear()}}}function sl(e,t,n={}){let r=ol(e,t,n);return r.start(),r}var cl={class:`xiaochao-settings-section`,"aria-label":`小抄版本`},ll={class:`xiaochao-settings-section__body`},ul={class:`xiaochao-version-row`},dl=[`data-tooltip`],fl={key:0},
pl=Hc(gr({__name:`VersionNoticeSection`,props:{updateNoticeController:{}},setup(e){let t=e,n=an(t.updateNoticeController?.getSnapshot()??{currentVersion:rl(),latestVersion:null,notes:``,pageUrl:`https://xc.95chong.cn/downloads`,hasUpdate:!1,
dialogOpen:!1,failureMessage:``}),r=an(!1),i=an(``),a=t.updateNoticeController?.subscribe(e=>{n.value=e});Pr(()=>a?.());function o(){t.updateNoticeController?.openUpdatePage()}async function s(){if(n.value.hasUpdate){o();return}if(!r.value){r.value=!0,
i.value=``;try{let e=await t.updateNoticeController?.checkNow();if(!e||e.hasUpdate)return;i.value=e.latestVersion?`已是最新`:e.failureMessage||`检查失败`}finally{r.value=!1}}}return(e,t)=>(M(),N(`section`,cl,[P(`div`,ll,[P(`div`,ul,[P(`span`,null,`小抄 `+k(n.value.currentVersion),1),
P(`button`,{type:`button`,class:`xiaochao-version-row__update`,"data-tooltip":n.value.latestVersion?`线上 ${n.value.latestVersion}`:`检查门户上的版本`,onClick:s},k(r.value?`正在检查`:n.value.hasUpdate?`有更新`:`检查更新`),9,dl),i.value?(M(),N(`span`,fl,k(i.value),1)):Sa(``,!0)])])]))}}),[[`__scopeId`,
`data-v-7931164d`]]);function ml(e){return e===`左膀`||e===`右膀`||e.includes(`臂膀`)}var hl={1:{suit:`heart`,glyph:`♥`,red:!0},2:{suit:`diamond`,glyph:`♦`,red:!0},3:{suit:`spade`,glyph:`♠`,red:!1},4:{suit:`club`,glyph:`♣`,red:!1}};function gl(e,
t=()=>null){let n=new Map,r=null,i=null;return{resolve(a){let o=El(a)??0,s=n.get(o);if(s)return s;let c=e();c!==r&&(r=c,i=_l(c),n.clear());let l=null;try{l=i?.GetInstance(o)??null}catch{i=null}let u=Object.freeze(bl(o,l,t));return n.set(o,u),
u},clear(){r=null,i=null,n.clear()}}}function _l(e){let t=vl(e);if(!t)return null;for(let e=Dl(t)?.constructor;e;e=Object.getPrototypeOf(e))if(typeof e.GetInstance==`function`)return e;return null}function vl(e){if(!e)return null;let t=Dl(e),
n=e.seatContainer?.seatUIs??[],r=[Dl(t?.SelfSeatUi),...n.map(Dl)].filter(Boolean);for(let e of r){let t=Dl(e.cardContainer);for(let e of[`cardUis`,`cardUIs`,`equipCardUis`,`equipCardUIs`,`judgeCardUis`,`judgeCardUIs`,`decideCardUis`,`decideCardUIs`]){let n=yl(Array.isArray(t?.[e])?t[e][0]:null);
if(n)return n}for(let t of[`judgeCardUis`,`judgeCardUIs`,`decideCardUis`,`decideCardUIs`]){let n=yl(Array.isArray(e[t])?e[t][0]:null);if(n)return n}let n=Dl(e.seat);for(let e of[`HandCards`,`handCards`,`EquipCards`,`equipCards`]){let t=yl(Array.isArray(n?.[e])?n[e][0]:null);
if(t&&typeof t==`object`)return t}}return null}function yl(e){let t=Dl(e);return t?.Card??t?.card??t?.cardInfo??e}function bl(e,t,n){let r=Cl(Dl(t)),i=n(e)??Sl(e),a=xl(i)||!xl(r)?i??r:r,o=Math.floor(e/1e4),s=Math.floor(e/100)%100,c=hl[El(a?.Color??a?.color??a?.CardSuit??a?.cardSuit??a?.suit)??o],
l=El(a?.CardNumber??a?.cardNumber??a?.Number??a?.number??a?.Point??a?.point)??s;return{cardId:e,name:Tl(a,[`CardName`,`cardName`,`Name`,`name`]),suit:c?.suit??``,suitGlyph:c?.glyph??``,rank:wl(l),isRed:c?.red??!1,cardType:El(a?.CardType??a?.cardType??a?.Type??a?.type)??0,
artworkUrl:``}}function xl(e){return!!Tl(e,[`CardName`,`cardName`,`Name`,`name`,`IconName`,`iconName`])}function Sl(e){let t=globalThis,n=Dl(t.CtrUtil),r=Dl(t.SystemContext),i=[Dl(n?.AllDatas),Dl(n?.allDatas),Dl(r?.AllDatas),Dl(r?.allDatas)].filter(Boolean);
for(let t of i){let n=Dl(Dl(t[`sys_playcard.sgs`])?.GamePlayCards)?.card;if(!Array.isArray(n))continue;let r=Dl(n.find(t=>{let n=Dl(t);return Number(n?.id??n?.ID??n?.CardID??n?.cardId)===e}));if(r)return r}return null}function Cl(e){return e?[e,
Dl(e.Config),Dl(e.config),Dl(e.Data),Dl(e.data),Dl(e.Info),Dl(e.info),Dl(e.CardInfo),Dl(e.cardInfo)].filter(Boolean).find(e=>[`CardName`,`cardName`,`Name`,`name`,`IconName`,`iconName`,`Color`,`color`,`Number`,`number`].some(t=>e[t]!==void 0))??e:null}function wl(e){return e===1||e===14?`A`:e===11?`J`:e===12?`Q`:e===13?`K`:e===15?`2`:e===16?`小王`:e===17?`大王`:e>0?String(e):``}function Tl(e,
t){if(!e)return``;for(let n of t)if(typeof e[n]==`string`&&e[n])return e[n];return``}function El(e){let t=Number(e);return Number.isInteger(t)&&t>0?t:null}function Dl(e){return typeof e==`object`&&e?e:null}var Ol=[`title`,`data-card-id`],kl={class:`suit-glyph`},
Al={class:`rank-glyph`},jl=Hc(gr({__name:`ShoupaiCardFace`,props:{cardId:{},gameCardCatalog:{}},setup(e){let t=e,n=qa(()=>t.gameCardCatalog.resolve(t.cardId)),r=qa(()=>!(t.cardId>0)),i=qa(()=>(n.value.name||`？`).slice(0,2)),a=qa(()=>{let e=n.value.suit;
return e===`heart`?`suit-heart`:e===`diamond`?`suit-diamond`:e===`spade`?`suit-spade`:e===`club`?`suit-club`:``}),o=qa(()=>{let e=`${n.value.suitGlyph||``}${n.value.rank||``}`.length>=3?`card-cn-long`:`card-cn`;return a.value?`${e} ${a.value}`:e}),
s=qa(()=>r.value?`未知牌`:[n.value.name||`未知牌`,n.value.suitGlyph,n.value.rank].filter(Boolean).join(` `));return(t,a)=>(M(),N(`button`,{type:`button`,class:xe([`shoupai`,{R:n.value.isRed,G:r.value}]),disabled:``,title:s.value,"data-card-id":e.cardId>0?String(e.cardId):void 0},[r.value?(M(),
N(j,{key:0},[xa(`？`)],64)):(M(),N(j,{key:1},[P(`span`,{class:xe(o.value)},[P(`span`,kl,k(n.value.suitGlyph),1),P(`span`,Al,k(n.value.rank),1)],2),a[0]||=P(`br`,null,null,-1),xa(` `+k(i.value),1)],64))],10,Ol))}}),[[`__scopeId`,`data-v-3a71bb5d`]]),
Ml={key:0,class:`xc-deck-record`,"aria-label":`牌堆记录`},Nl={class:`xc-deck-record__group`},Pl={class:`xc-deck-record__group-title`},Fl={key:0},Il=[`data-empty`],Ll={class:`xc-deck-record__group`},Rl={class:`xc-deck-record__group-title`},zl={key:0},
Bl=[`data-empty`],Vl={class:`xc-deck-record__group xc-deck-record__group--discard`},Hl=[`title`],Ul=[`data-empty`],Wl={key:0,class:`xc-deck-record__unknown`},Gl=Hc(gr({__name:`DeckRecordSection`,props:{configStore:{},deckRecordStore:{},gameCardCatalog:{}},
setup(e){let t=e,n=an(t.deckRecordStore.getSnapshot()),r=an(t.configStore.get(`display.deckRecordEnabled`)),i=an(t.configStore.get(`display.discardSortMode`)),a=t.deckRecordStore.subscribe(e=>{n.value=e}),o=t.configStore.subscribe(`display.deckRecordEnabled`,({value:e})=>{r.value=e}),
s=t.configStore.subscribe(`display.discardSortMode`,({value:e})=>{i.value=e});Pr(()=>{a(),o(),s()});let c=qa(()=>p(n.value.currentTurnDiscardCardIds)),l=qa(()=>`本回合弃牌 · ${u[i.value]??u[d[0]]}`),u={"suit-type-number":`花色→类型→点数`,"type-suit-number":`类型→花色→点数`,
"number-suit-type":`点数→花色→类型`},d=Object.keys(u);function f(){let e=d.indexOf(i.value);t.configStore.set(`display.discardSortMode`,d[(e+1)%d.length])}function p(e){let n=e.flatMap((e,n)=>{let r=t.gameCardCatalog.resolve(e);return ml(r.name)?[]:[{...r,
originalIndex:n}]}),r=u[i.value]?i.value:d[0];return n.sort((e,t)=>{let n=m(e.suit)-m(t.suit),i=e.cardType-t.cardType||e.name.localeCompare(t.name,`zh-CN`),a=h(e.rank)-h(t.rank);return(r===`suit-type-number`?[n,i,a]:r===`type-suit-number`?[i,
n,a]:[a,n,i]).find(e=>e!==0)||e.originalIndex-t.originalIndex})}function m(e){return[`spade`,`heart`,`club`,`diamond`].indexOf(e)}function h(e){return{A:1,J:11,Q:12,K:13,小王:16,大王:17}[e]||Number(e)||99}return(t,a)=>r.value?(M(),N(`section`,Ml,[P(`div`,
Nl,[P(`div`,Pl,[a[0]||=P(`strong`,null,`牌堆顶`,-1),n.value.deckTopCardIds.length?(M(),N(`span`,Fl,`左侧最先摸到`)):Sa(``,!0)]),P(`div`,{class:`xc-deck-record__cards`,"data-empty":n.value.deckTopCardIds.length?void 0:`暂无已知牌`},[(M(!0),N(j,null,Vr(n.value.deckTopCardIds,(t,
n)=>(M(),fa(jl,{key:`top-${t}-${n}`,"card-id":t,"game-card-catalog":e.gameCardCatalog},null,8,[`card-id`,`game-card-catalog`]))),128))],8,Il)]),P(`div`,Ll,[P(`div`,Rl,[a[1]||=P(`strong`,null,`牌堆底`,-1),n.value.deckBottomCardIds.length?(M(),N(`span`,
zl,`右侧为最底部`)):Sa(``,!0)]),P(`div`,{class:`xc-deck-record__cards`,"data-empty":n.value.deckBottomCardIds.length?void 0:`暂无已知牌`},[(M(!0),N(j,null,Vr(n.value.deckBottomCardIds,(t,n)=>(M(),fa(jl,{key:`bottom-${t}-${n}`,"card-id":t,"game-card-catalog":e.gameCardCatalog},
null,8,[`card-id`,`game-card-catalog`]))),128))],8,Bl)]),P(`div`,Vl,[P(`button`,{type:`button`,class:`xc-deck-record__discard-title`,title:`点击切换弃牌排序（当前：${u[i.value]??u[A(d)[0]]}）`,onClick:f},k(l.value),9,Hl),P(`div`,{class:`xc-deck-record__cards`,
"data-empty":c.value.length||n.value.currentTurnHiddenDiscardCount?void 0:`暂无已知牌`},[(M(!0),N(j,null,Vr(c.value,(t,n)=>(M(),fa(jl,{key:`turn-${t.cardId}-${n}`,"card-id":t.cardId,"game-card-catalog":e.gameCardCatalog},null,8,[`card-id`,`game-card-catalog`]))),128)),
n.value.currentTurnHiddenDiscardCount?(M(),N(`span`,Wl,` 未知牌 × `+k(n.value.currentTurnHiddenDiscardCount),1)):Sa(``,!0)],8,Ul)])])):Sa(``,!0)}}),[[`__scopeId`,`data-v-fc2d2b98`]]);function Kl(e,t){let n=t.resolve(e);return!n.suitGlyph&&!n.rank?``:`${n.suitGlyph||``}${n.rank||``}`}function ql(e,
t){let n=String(t||``).trim();return n?[...e,n]:[...e]}function Jl(e){let t=String(e||``).match(/^([♥♦♠♣])(.*)$/);if(!t)return{glyph:``,rank:e,suitClass:``,isRed:!1};let n=t[1];return{glyph:n,rank:t[2]||``,suitClass:n===`♥`?`suit-heart`:n===`♦`?`suit-diamond`:n===`♠`?`suit-spade`:n===`♣`?`suit-club`:``,
isRed:n===`♥`||n===`♦`}}var Yl={key:0,class:`card-tab-hero-section xc-vue-skill-assist`},Xl=[`data-feature`],Zl={key:0,class:`card-hero-feature-line`},Ql={class:`card-detail-feature-title`},$l=[`data-feature-suit`],eu={class:`suit-glyph`},tu={key:1,
class:`card-detail-feature-title`},nu=[`data-empty-label`],ru=[`data-feature-result`],iu={key:4,class:`xc-skill-options`},au=[`onClick`],ou=Hc(gr({__name:`SkillAssistSection`,props:{skillAssistStore:{},gameCardCatalog:{}},setup(e){let t=e,n=an(t.skillAssistStore.getSnapshot());
Pr(t.skillAssistStore.subscribe(e=>{n.value=e}));let r=qa(()=>n.value.panels.filter(e=>e.visible));function i(e){return Jl(e)}let a=an(``),o;Pr(()=>clearTimeout(o));async function s(e,t){try{await navigator.clipboard.writeText(t)}catch{return}a.value=e,
clearTimeout(o),o=setTimeout(()=>{a.value=``},500)}return(t,o)=>n.value.inGame&&r.value.length?(M(),N(`section`,Yl,[(M(!0),N(j,null,Vr(r.value,t=>(M(),N(`article`,{key:t.id,class:`xc-hero-block card-tab-panel xc-hero-active`,"data-feature":t.id},[t.showSuitSequence?(M(),
N(`div`,Zl,[P(`span`,Ql,k(t.title),1),P(`div`,{class:`suitRec`,"data-feature-suit":t.id},[(M(!0),N(j,null,Vr(t.suitTokens,(e,n)=>(M(),N(`span`,{key:`${t.id}-suit-${n}`,class:xe([`xc-suit-token`,[i(e).suitClass,{R:i(e).isRed}]])},[P(`span`,eu,
k(i(e).glyph),1),xa(k(i(e).rank),1)],2))),128))],8,$l)])):(M(),N(`div`,tu,k(t.title),1)),t.shownCardZoneId&&t.cardIds.length?(M(),N(`div`,{key:2,class:`knownCards quanBianYanXi`,"data-empty-label":t.emptyCardLabel||void 0},[(M(!0),N(j,null,
Vr(t.cardIds,n=>(M(),fa(jl,{key:`${t.id}-${n}`,"card-id":n,"game-card-catalog":e.gameCardCatalog},null,8,[`card-id`,`game-card-catalog`]))),128))],8,nu)):Sa(``,!0),t.showResult&&t.resultText?(M(),N(`div`,{key:3,class:`function res card-detail-feature-result`,
"data-feature-result":t.id},k(t.resultText),9,ru)):Sa(``,!0),t.resultOptions.length?(M(),N(`div`,iu,[(M(!0),N(j,null,Vr(t.resultOptions,(e,n)=>(M(),N(`button`,{key:`${t.id}-option-${n}`,type:`button`,class:xe([`xc-skill-option`,{"xc-skill-option--highlight":t.highlightedOptions[n]}]),
title:`点击复制`,onClick:r=>s(`${t.id}-${n}`,e)},k(a.value===`${t.id}-${n}`?`复制成功`:e),11,au))),128))])):Sa(``,!0)],8,Xl))),128))])):Sa(``,!0)}}),[[`__scopeId`,`data-v-e0b8bf6c`]]),su=[`回合开始时`,`准备阶段`,`判定阶段`,`摸牌阶段`,`出牌阶段`,`弃牌阶段`,`结束阶段`,`回合结束时`,`回合结束后`],
cu=Object.freeze({currentSeatId:null,phase:null,shaRemaining:null});function lu(){let e=cu,t=new Set;function n(n){(n.currentSeatId!==e.currentSeatId||n.phase!==e.phase||n.shaRemaining!==e.shaRemaining)&&(e=Object.freeze({...n}),t.forEach(t=>t(e)))}return{getSnapshot:()=>e,
handleGameEvent(t){if(t.type===`game-started`||t.type===`game-ended`){n(cu);return}if(t.type===`phase-changed`){let r=e.currentSeatId===t.seatId&&t.phase!==0;n({currentSeatId:t.seatId,phase:t.phase,shaRemaining:r?e.shaRemaining:null});return}if(t.type===`sha-count-updated`){if(e.currentSeatId!==null&&e.currentSeatId!==t.seatId)return;
n({currentSeatId:t.seatId,phase:e.phase,shaRemaining:uu(t.used,t.limit)})}},subscribe(n){return t.add(n),n(e),()=>t.delete(n)},clear(){t.clear(),e=cu}}}function uu(e,t){return t<0||t>=99?1/0:Math.max(0,t-(Number.isFinite(e)?e:0))}function du(e){if(e===null)return`等待开局`;
let t=su[e]??`阶段 ${e}`;return e>=1&&e<=6?`${t}（${e}）`:t}function fu(e){return e===null?`-`:e===1/0?`∞`:String(e)}function pu(e,t){return t.subscribe(t=>e.handleGameEvent(t))}var mu={class:`xc-turn-status__item`,title:`当前阶段`},hu={class:`xc-turn-status__item xc-turn-status__item--sha`,
title:`当前行动角色本回合剩余出杀次数`},gu=Hc(gr({__name:`TurnStatusBar`,props:{turnStatusStore:{},compact:{type:Boolean}},setup(e){let t=e,n=an(t.turnStatusStore.getSnapshot());return Pr(t.turnStatusStore.subscribe(e=>{n.value=e})),(t,r)=>(M(),N(`div`,{class:xe([`xc-turn-status`,
{"xc-turn-status--compact":e.compact}]),"aria-label":`当前阶段与出杀次数`},[P(`span`,mu,[r[0]||=P(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[P(`path`,{d:`M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2`})],-1),
xa(` `+k(A(du)(n.value.phase)),1)]),P(`span`,hu,[r[1]||=P(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[P(`path`,{d:`m11 19-6-6M5 21l-2-2M8 16l-4 4M9.5 17.5 21 6V3h-3L6.5 14.5`})],-1),e.compact?(M(),N(j,{key:0},[xa(`出杀次数 `+k(A(fu)(n.value.shaRemaining)),1)],64)):(M(),
N(j,{key:1},[xa(`剩余：`+k(A(fu)(n.value.shaRemaining)),1)],64))])],2))}}),[[`__scopeId`,`data-v-8eb1d127`]]),_u=`xiaochao-toast-host`,vu={success:`#a9d49a`,warning:`#f2d27a`,error:`#f08a7a`};function yu(e,t=`success`,n=4e3){if(typeof document>`u`||!document.body)return;
let r=document.getElementById(_u);r||(r=document.createElement(`div`),r.id=_u,Object.assign(r.style,{position:`fixed`,top:`64px`,left:`50%`,transform:`translateX(-50%)`,zIndex:`2147483647`,display:`flex`,flexDirection:`column`,alignItems:`center`,
gap:`6px`,pointerEvents:`none`}),document.body.appendChild(r));let i=document.createElement(`div`);i.textContent=e,Object.assign(i.style,{padding:`7px 14px`,border:`1px solid rgba(242, 222, 156, .5)`,borderRadius:`5px`,background:`rgba(29, 27, 24, .94)`,
boxShadow:`0 6px 18px rgba(0, 0, 0, .3)`,color:vu[t],font:`13px/1.5 system-ui, sans-serif`,whiteSpace:`pre-line`,textAlign:`center`}),r.appendChild(i),setTimeout(()=>i.remove(),n)}function bu(e,t,n,r=8){let i=Math.max(r,n.width-t.width-r),a=Math.max(r,
n.height-t.height-r);return{left:Math.min(Math.max(r,e.left),i),top:Math.min(Math.max(r,e.top),a)}}function xu(e,t){return Math.hypot(e,t)>5}function Su(e,t,n,r=25){return n-e<=r||n-t<=r}var Cu={left:`--xc-panel-left`,top:`--xc-panel-top`,right:`--xc-panel-right`,
width:`--xc-panel-width`,height:`--xc-panel-height`,minWidth:`--xc-panel-min-width`,maxWidth:`--xc-panel-max-width`,minHeight:`--xc-panel-min-height`,maxHeight:`--xc-panel-max-height`};function wu(e,t){for(let[n,r]of Object.entries(t)){let t=Cu[n];
r===void 0?e.style.removeProperty(t):e.style.setProperty(t,r)}}function Tu(e,t){return e.style.getPropertyValue(Cu[t]).trim()}var Eu,Du=0,Ou=-1;function ku(e){let t=document.getElementById(`bgDiv`);if(Du=Math.max(0,Math.round(e)),!Eu){let e=window.Laya?.Browser;
Eu={padding:window.padding,backgroundWidth:t?.style.getPropertyValue(`width`)||``,backgroundWidthPriority:t?.style.getPropertyPriority(`width`)||``,layaBrowser:e,layaClientWidthDescriptor:e?Object.getOwnPropertyDescriptor(e,`clientWidth`):void 0},
Mu(e)}window.padding=Du;let n=ju();t?.style.setProperty(`width`,`${n}px`,`important`),document.documentElement.style.setProperty(`--sgs-center-x`,`${n/2}px`),document.documentElement.classList.add(`xiaochao-game-viewport--docked`),Ou!==Du&&(Ou=Du,
Nu())}function Au(){if(!Eu)return;let e=Eu;Eu=void 0,Du=0,Ou=-1,e.layaBrowser&&e.layaClientWidthDescriptor&&Object.defineProperty(e.layaBrowser,"clientWidth",e.layaClientWidthDescriptor),window.padding=e.padding;let t=document.getElementById(`bgDiv`);
e.backgroundWidth?t?.style.setProperty(`width`,e.backgroundWidth,e.backgroundWidthPriority):t?.style.removeProperty(`width`),document.documentElement.classList.remove(`xiaochao-game-viewport--docked`),document.documentElement.style.removeProperty(`--sgs-center-x`),
Nu()}function ju(){return Math.max(320,document.documentElement.clientWidth-Du)}function Mu(e){if(!e)return;let t=Object.getOwnPropertyDescriptor(e,`clientWidth`);t?.configurable&&typeof t.get==`function`&&Object.defineProperty(e,"clientWidth",
{configurable:t.configurable,enumerable:t.enumerable,get:ju})}function Nu(){window.dispatchEvent(new Event(`resize`)),window.dispatchEvent(new Event(`SGSresize`))}var Pu={class:`xiaochao-panel__content xiaochao-cards-pane`},Fu={class:`xiaochao-quick-tools`,
"aria-label":`快捷工具`},Iu={class:`xiaochao-panel__content xiaochao-rogue-entry`},Lu={class:`xiaochao-panel__content xiaochao-tools-entry`},Ru={class:`xiaochao-settings-section`,"aria-label":`工具栏`},zu={class:`xiaochao-settings-section__body xiaochao-tools-entry__actions`},
Bu=`48px`,Vu=`148px`,Hu=gr({__name:`App`,props:{platform:{},layout:{},configStore:{},recentCardStore:{},deckRecordStore:{},gameCardCatalog:{},skillAssistStore:{},peixiuRouteStore:{},turnStatusStore:{},autoTaskController:{},clearRedDots:{type:Function},
rogueController:{},updateNoticeController:{}},setup(e){let n=e,r=n.configStore.get(`panel.activeTab`),i=Xo(Yo.some(e=>e.id===r)?r:`cards`,x,n.configStore.get(`panel.collapsed`),b),a=an(),o=an(n.configStore.get(`panel.dockedRight`)),s=an(!1),
c=an(!1),l=an(n.updateNoticeController?.getSnapshot().hasUpdate??!1),u=n.updateNoticeController?.subscribe(e=>{l.value=e.hasUpdate}),d=an(!1);function f(){(n.platform===`electron`?Fs():t()).openExternal(`https://xc.95chong.cn/`)}let p=``,m=``,
h,g;jr(()=>{let e=a.value;e&&(wu(e,{top:`${n.layout.top}px`,right:`${n.layout.right}px`,width:n.layout.width,height:`${n.layout.height}px`}),e.style.fontFamily=n.layout.fontFamily,p=`${n.layout.height}px`,m=n.layout.width,o.value?C(e):E(e),
i.isCollapsed.value&&y(e),window.addEventListener(`resize`,D))}),Pr(()=>{h?.(),g?.(),u?.(),window.removeEventListener(`resize`,D),Au()});function _(){let e=a.value;e&&(i.isCollapsed.value?wu(e,{height:p,width:m,minWidth:void 0,maxWidth:void 0,
minHeight:void 0,maxHeight:void 0}):(p=Tu(e,`height`)||`${e.offsetHeight}px`,m=Tu(e,`width`)||n.layout.width,y(e)),i.toggleCollapsed(),o.value?C(e):ee(e))}function v(){try{n.configStore.resetAll();for(let e of[`sgsol.rememberedCredentials.v2`,
`sgsol.rememberedCredentials.v2.4399`])window.localStorage.removeItem(e),window.xiaochaoStorage?.saveCredentials?.(e.endsWith(`.4399`)?`4399`:`official`,[]);for(let e of Object.keys(window.sessionStorage))(e.startsWith(`XC`)||e.toLowerCase().includes(`xiaochao`))&&window.sessionStorage.removeItem(e);
yu(`小抄配置已重置，正在刷新页面`,`success`,1800),window.setTimeout(()=>window.location.reload(),600)}catch(e){console.warn(`[reset-xiaochao] 清除配置失败:`,e),yu(`清除配置失败，请查看控制台`,`error`,4e3)}finally{d.value=!1}}function y(e){wu(e,{height:Bu,minHeight:Bu,maxHeight:Bu,
width:Vu,minWidth:Vu,maxWidth:Vu})}function b(e){n.configStore.set(`panel.collapsed`,e)}function x(e){n.configStore.set(`panel.activeTab`,e);let t=document.getElementById(`iframe-source`);t&&(t.scrollTop=0)}function S(e){if(e.button!==0||!a.value)return;
e.preventDefault();let t=a.value,n=e.currentTarget;n.setPointerCapture?.(e.pointerId);let r=o.value,i=t.getBoundingClientRect(),l=e.clientX,u=e.clientY,d=r?l-i.width/2:i.left,f=r?u-15:i.top,p=!1,m,g=0,_=()=>{g=0;let e=m;if(!e)return;let n=e.clientX-l,
i=e.clientY-u;if(!p&&!xu(n,i))return;p||(p=!0,r&&w(t,e.clientX,e.clientY),wu(t,{right:`auto`}),t.classList.add(`xiaochao-panel--dragging`),s.value=!0);let a=bu({left:d+n,top:f+i},{width:t.offsetWidth,height:t.offsetHeight},{width:window.innerWidth,
height:window.innerHeight});wu(t,{left:`${a.left}px`,top:`${a.top}px`}),c.value=Su(e.clientX,a.left+t.offsetWidth,window.innerWidth)},v=e=>{m=e,g||=window.requestAnimationFrame(_)},y=e=>{if(g&&(window.cancelAnimationFrame(g),_()),!p)return h?.();
let n=t.getBoundingClientRect();Su(e.clientX,n.right,window.innerWidth)?C(t):T(t),h?.()};h=()=>{g&&window.cancelAnimationFrame(g),window.removeEventListener(`pointermove`,v),window.removeEventListener(`pointerup`,y),window.removeEventListener(`pointercancel`,
b),window.removeEventListener(`blur`,b),n.removeEventListener(`lostpointercapture`,b),n.hasPointerCapture?.(e.pointerId)&&n.releasePointerCapture(e.pointerId),t.classList.remove(`xiaochao-panel--dragging`),s.value=!1,c.value=!1,h=void 0};let b=()=>{p&&T(t),
h?.()};window.addEventListener(`pointermove`,v),window.addEventListener(`pointerup`,y,{once:!0}),window.addEventListener(`pointercancel`,b,{once:!0}),window.addEventListener(`blur`,b,{once:!0}),n.addEventListener(`lostpointercapture`,b,{once:!0})}function C(e){o.value=!0,
wu(e,{left:`auto`,right:`0px`,top:`0px`,height:i.isCollapsed.value?Bu:`100vh`}),n.configStore.set(`panel.dockedRight`,!0),ee(e)}function w(e,t,r){o.value=!1;let i=e.offsetWidth,a=Math.min(n.layout.height,window.innerHeight);Au(),wu(e,{right:`auto`,
width:m,height:`${a}px`,left:`${Math.max(0,t-i/2)}px`,top:`${Math.max(0,r-15)}px`}),n.configStore.set(`panel.dockedRight`,!1)}function T(e){let t={left:e.offsetLeft,top:e.offsetTop};o.value=!1,n.configStore.set(`panel.dockedRight`,!1),Au(),
wu(e,{left:`${t.left}px`,top:`${t.top}px`,right:`auto`}),n.configStore.set(`panel.position`,t)}function E(e){let t=n.configStore.get(`panel.position`);if(!t)return;let r=bu(t,{width:e.offsetWidth,height:e.offsetHeight},{width:window.innerWidth,
height:window.innerHeight});wu(e,{left:`${r.left}px`,top:`${r.top}px`,right:`auto`})}function D(){let e=a.value;if(!e)return;if(o.value)return C(e);let t=e.getBoundingClientRect(),n=bu(t,t,{width:window.innerWidth,height:window.innerHeight});
wu(e,{left:`${n.left}px`,top:`${n.top}px`,right:`auto`})}function ee(e){o.value&&!i.isCollapsed.value?ku(e.getBoundingClientRect().width):Au()}function te(e){if(e.button!==0||!a.value)return;let t=a.value,n=e.clientY,r=t.offsetHeight,i=Math.max(160,
window.innerHeight-t.offsetTop),o=e=>{p=`${Math.min(i,Math.max(160,r+e.clientY-n))}px`,wu(t,{height:p})},s=()=>g?.();g=()=>{window.removeEventListener(`pointermove`,o),window.removeEventListener(`pointerup`,s),g=void 0},window.addEventListener(`pointermove`,
o),window.addEventListener(`pointerup`,s,{once:!0})}return(t,n)=>(M(),N(j,null,[P(`section`,{ref_key:`panelElement`,ref:a,id:`createIframe`,class:xe([`createIframe xiaochao-panel`,{"xiaochao-panel--collapsed":A(i).isCollapsed.value,"xiaochao-panel--docked-right":o.value}]),
"aria-label":`三国杀小抄`},[_a(Jo,{collapsed:A(i).isCollapsed.value,onToggle:_,onDragStart:S},{default:Vn(()=>[_a(gu,{"turn-status-store":e.turnStatusStore,compact:A(i).isCollapsed.value},null,8,[`turn-status-store`,`compact`])]),_:1},8,[`collapsed`]),
Hn(_a($o,{"active-tab-id":A(i).activeTabId.value,"tools-has-update":l.value,onSelect:A(i).selectTab},null,8,[`active-tab-id`,`tools-has-update`,`onSelect`]),[[so,!A(i).isCollapsed.value]]),Hn(P(`main`,Pu,[_a(ou,{"skill-assist-store":e.skillAssistStore,
"game-card-catalog":e.gameCardCatalog},null,8,[`skill-assist-store`,`game-card-catalog`]),_a(Gl,{"config-store":e.configStore,"deck-record-store":e.deckRecordStore,"game-card-catalog":e.gameCardCatalog},null,8,[`config-store`,`deck-record-store`,
`game-card-catalog`]),_a(ls,{"config-store":e.configStore},null,8,[`config-store`]),_a(Zc,{"config-store":e.configStore},null,8,[`config-store`]),P(`div`,Fu,[_a(As,{"config-store":e.configStore},null,8,[`config-store`]),_a(Ps,{"clear-red-dots":e.clearRedDots},
null,8,[`clear-red-dots`]),_a(Ys,{"config-store":e.configStore},null,8,[`config-store`]),_a(mc,{"config-store":e.configStore},null,8,[`config-store`])])],512),[[so,!A(i).isCollapsed.value&&A(i).activeTabId.value===`cards`]]),Hn(P(`main`,Iu,[_a(Pc,
{"config-store":e.configStore,"open-shop":()=>e.rogueController?.openShop()??!1,"get-shop-preview":()=>e.rogueController?.getShopPreview()??[],"subscribe-shop-preview":t=>e.rogueController?.subscribeShopPreview(t)??(()=>{})},null,8,[`config-store`,
`open-shop`,`get-shop-preview`,`subscribe-shop-preview`])],512),[[so,!A(i).isCollapsed.value&&A(i).activeTabId.value===`rogue`]]),Hn(P(`main`,Lu,[_a(pl,{"update-notice-controller":e.updateNoticeController},null,8,[`update-notice-controller`]),
P(`section`,Ru,[P(`div`,zu,[_a(Is,{platform:e.platform},null,8,[`platform`]),P(`button`,{type:`button`,class:`xiaochao-block-entry xiaochao-block-entry--center`,"data-tooltip":`在浏览器新页面打开小抄主页`,onClick:f},[...n[3]||=[P(`span`,null,`小抄主页`,-1)]]),
P(`button`,{type:`button`,class:`xiaochao-block-entry xiaochao-block-entry--center`,"data-tooltip":`清除小抄配置和授权缓存`,onClick:n[0]||=e=>d.value=!0},[...n[4]||=[P(`span`,null,`重置小抄`,-1)]])])])],512),[[so,!A(i).isCollapsed.value&&A(i).activeTabId.value===`tools`]]),
P(`main`,{id:`iframe-source`,class:`xiaochao-panel__content`,style:ge({display:A(i).isCollapsed.value||A(i).activeTabId.value===`cards`||A(i).activeTabId.value===`tools`||A(i).activeTabId.value===`rogue`?`none`:``})},null,4),Hn(P(`div`,{id:`frame-resize-handle`,
"data-tooltip":`拖动调整高度`,onPointerdown:zo(te,[`stop`])},null,544),[[so,!A(i).isCollapsed.value]])],2),Hn(P(`div`,{class:xe([`xiaochao-dock-preview`,{"xiaochao-dock-preview--active":c.value}]),"aria-hidden":`true`},null,2),[[so,s.value]]),_a(ts),
_a(hs,{open:d.value,title:`重置小抄`,"dialog-class":`xiaochao-reset-dialog`,onClose:n[2]||=e=>d.value=!1},{footer:Vn(()=>[P(`button`,{type:`button`,class:`xiaochao-reset-dialog__cancel`,onClick:n[1]||=e=>d.value=!1},`取消`),P(`button`,{type:`button`,
class:`xiaochao-reset-dialog__confirm`,onClick:v},`清除并重载`)]),default:Vn(()=>[n[5]||=P(`p`,null,`确定清除小抄配置数据吗？此操作无法撤销。`,-1)]),_:1},8,[`open`])],64))}}),Uu=`xiaochao-vue-panel-shell-style`,Wu=`
#createIframe.createIframe {
  --xc-font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
  position: fixed !important;
  left: var(--xc-panel-left, auto) !important;
  top: var(--xc-panel-top, auto) !important;
  right: var(--xc-panel-right, auto) !important;
  width: var(--xc-panel-width, 340px) !important;
  height: var(--xc-panel-height, 720px) !important;
  min-width: var(--xc-panel-min-width, 0px) !important;
  max-width: var(--xc-panel-max-width, none) !important;
  min-height: var(--xc-panel-min-height, 0px) !important;
  max-height: var(--xc-panel-max-height, none) !important;
  transform: none !important;
  z-index: 2147483600;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  color: #f2de9c;
  background: rgb(35, 32, 29);
  border-radius: 8px;
  clip-path: inset(0 round 8px);
  user-select: none;
  pointer-events: none;
  transition: width .18s ease, height .18s ease, box-shadow .18s ease;
}
#createIframe.xiaochao-panel--collapsed {
  border: 0;
  border-radius: 12px;
  clip-path: inset(0 round 12px);
  box-shadow: 0 0 10px 2px rgba(255, 220, 120, .28);
}
#createIframe.xiaochao-panel--docked-right {
  border-radius: 8px 0 0 8px;
  clip-path: inset(0 round 8px 0 0 8px);
  box-shadow: -4px 0 12px rgba(0, 0, 0, .32);
}
#createIframe.xiaochao-panel--dragging {
  cursor: grabbing;
  opacity: .96;
}
#createIframe .xc-frame-header {
  min-height: 26px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: grab;
  touch-action: none;
  pointer-events: auto;
}
#createIframe.xiaochao-panel--collapsed .xc-frame-header {
  min-height: 48px;
  height: 48px;
  padding: 0 2px 0 0;
}
#createIframe.xiaochao-panel--collapsed .xc-frame-toggle {
  width: 30px;
  height: 30px;
  margin: 0 6px 0 0;
  border-radius: 9px;
  flex: 0 0 auto;
}
#createIframe.xiaochao-panel--collapsed .xc-frame-header__status {
  margin: 0;
  align-self: stretch;
}
#createIframe .xc-frame-header__status {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  margin: 0 2px 0 0;
}
#createIframe .xiaochao-reset-toolbar {
  flex: 0 0 auto;
  margin: 0 3px 0 0;
  padding: 3px 6px;
  border: 1px solid rgba(242, 222, 156, .24);
  border-radius: 4px;
  background: rgba(54, 43, 31, .82);
  color: #c9b98f;
  font: 10px/1.2 system-ui, sans-serif;
  cursor: pointer;
  pointer-events: auto;
}
#createIframe .xiaochao-reset-toolbar:hover {
  border-color: rgba(242, 222, 156, .55);
  background: rgba(74, 58, 39, .94);
  color: #fff1bd;
}
#createIframe.xiaochao-panel--collapsed .xiaochao-reset-toolbar { display: none; }
#createIframe .xiaochao-reset-dialog p {
  margin: 0;
  color: #d2c7b3;
  font-size: 13px;
  line-height: 1.6;
}
#createIframe .xiaochao-reset-dialog__cancel,
#createIframe .xiaochao-reset-dialog__confirm {
  padding: 5px 12px;
  border: 1px solid rgba(242, 222, 156, .3);
  border-radius: 4px;
  background: rgba(54, 43, 31, .9);
  color: #e3d6b9;
  cursor: pointer;
}
#createIframe .xiaochao-reset-dialog__confirm {
  border-color: rgba(214, 111, 87, .58);
  background: rgba(105, 48, 39, .78);
  color: #ffe3d4;
}
#createIframe .xiaochao-reset-dialog__cancel:hover,
#createIframe .xiaochao-reset-dialog__confirm:hover { filter: brightness(1.18); }
#createIframe .xc-frame-toggle {
  position: relative;
  width: 26px;
  height: 26px;
  margin: 1px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: #f2de9c;
  cursor: pointer;
  pointer-events: auto;
}
#createIframe .xc-frame-toggle:hover {
  color: #fff1bd;
  background: rgba(242, 222, 156, .1);
  border-color: rgba(242, 222, 156, .2);
}
#createIframe .xc-frame-toggle__icon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
#createIframe .xc-frame-toggle__arrow {
  position: absolute;
  width: 7px;
  height: 7px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  box-sizing: border-box;
  transition: left .18s ease, right .18s ease, top .18s ease, bottom .18s ease, transform .18s ease;
}
#createIframe .xc-frame-toggle__arrow--bottom-left { left: 4px; bottom: 4px; transform: rotate(0deg); }
#createIframe .xc-frame-toggle__arrow--top-right { right: 4px; top: 4px; transform: rotate(180deg); }
#createIframe .xc-frame-toggle[data-collapsed="1"] .xc-frame-toggle__arrow--bottom-left { left: 6px; bottom: 6px; transform: rotate(180deg); }
#createIframe .xc-frame-toggle[data-collapsed="1"] .xc-frame-toggle__arrow--top-right { right: 6px; top: 6px; transform: rotate(0deg); }
#createIframe .xiaochao-panel__tabs {
  display: flex;
  flex-wrap: nowrap;
  padding: 2px;
  background: linear-gradient(180deg, #2a241f 0%, #1a1714 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, .22);
  pointer-events: auto;
}
#createIframe .xiaochao-panel__tabs .xc-main-tab {
  flex: 1 1 0;
  min-width: 0;
  margin: 0 1px;
  padding: 3px 3px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: #a09080;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
}
#createIframe .xiaochao-panel__tabs .xc-main-tab:hover {
  background: rgba(55, 40, 32, .75);
  color: #f2de9c;
}
#createIframe .xiaochao-panel__tabs .xc-main-tab.active {
  border-color: rgba(242, 222, 156, .28);
  background: linear-gradient(180deg, #3d342c 0%, #2f2822 100%);
  box-shadow: inset 0 1px 0 rgba(242, 222, 156, .1);
  color: #f2de9c;
  font-weight: 700;
}
#createIframe .xiaochao-panel__tabs .xc-main-tab--update {
  position: relative;
}
#createIframe .xiaochao-panel__tabs .xc-main-tab--update::after {
  content: '';
  position: absolute;
  top: 3px;
  right: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d90000;
  box-shadow: 0 0 0 1px rgba(35, 32, 29, .85);
}
#createIframe #iframe-source { pointer-events: auto; }
#createIframe .xiaochao-panel__content {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  background: #23201d;
  pointer-events: auto;
}
#createIframe .xiaochao-panel__content::-webkit-scrollbar { width: 0; height: 0; display: none; }
#createIframe .xiaochao-tools-entry { flex: 0 0 auto; overflow: hidden; padding-top: 0; }
#createIframe .xiaochao-tools-entry .xiaochao-settings-section {
  margin: 4px 0 0;
}
#createIframe .xiaochao-tools-entry__actions {
  padding: 1px 0;
}
#createIframe .xiaochao-tools-entry__actions .xiaochao-settings-section {
  margin: 0;
}
#createIframe .xiaochao-tools-entry__actions .xiaochao-block-entry {
  width: calc(100% - 8px);
  min-height: 28px;
  margin: 3px 4px;
  padding: 0 10px;
  font-size: 12px;
}
#createIframe .xiaochao-rogue-entry { flex: 0 0 auto; overflow: hidden; padding-top: 0; }
#createIframe .xiaochao-rogue-entry .xiaochao-settings-section {
  margin: 4px 0 0;
}
#createIframe .xiaochao-settings-grid.xiaochao-rogue-switch-grid {
  grid-template-columns: 1fr 1fr;
  gap: 4px 6px;
  margin-bottom: 4px;
  padding: 4px 6px;
}
#createIframe .xiaochao-rogue-switch-grid > .xiaochao-block-switch {
  min-width: 0;
}
#createIframe .xiaochao-settings-grid.xiaochao-display-switch-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px 4px;
  margin-bottom: 0;
  padding: 6px 4px 8px;
}
#createIframe .xiaochao-display-switch-grid > .xiaochao-block-switch {
  min-width: 0;
  pointer-events: auto;
}
#createIframe .xiaochao-game-assist-switch {
  position: relative;
  pointer-events: auto;
}
#createIframe .xiaochao-display-switch-grid .xiaochao-block-switch__label {
  margin: 0 0 2px;
  text-align: center;
  font-size: 11px;
}
#createIframe .xiaochao-display-switch-grid .xiaochao-block-switch__toggle {
  margin: 0 auto;
}
#createIframe .xiaochao-rogue-shop-btn {
  width: calc(100% - 12px);
  margin: 2px 6px 6px;
}
#createIframe .xiaochao-rogue-shop-preview {
  margin: 2px 6px 4px;
  padding: 0;
  border: none;
  background: transparent;
  box-sizing: border-box;
}
#createIframe .xiaochao-rogue-shop-preview__title {
  margin: 0 2px 4px;
  color: #c9c1b1;
  font-size: 11px;
  letter-spacing: 0.04em;
  line-height: 1.2;
}
/*
 * 接缝：只用 grid gap 露一次底色，禁止每格四边 border（会双线）。
 * 等级辨识：左侧色条 + 同色浅底 + 文字色（1 灰、2 蓝、3 紫、4 橙）。
 */
#createIframe .xiaochao-rogue-shop-preview__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: transparent;
}
#createIframe .xiaochao-rogue-shop-preview__item {
  --rogue-shop-accent: rgba(242, 222, 156, 0.45);
  --rogue-shop-glow: rgba(242, 222, 156, 0.08);
  width: auto;
  min-width: 0;
  height: 24px;
  margin: 0;
  padding: 0 6px 0 8px;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  color: #f2de9c;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  background:
    linear-gradient(90deg, var(--rogue-shop-glow) 0%, transparent 42%),
    linear-gradient(180deg, #342e27 0%, #251f1a 100%);
  box-shadow: inset 3px 0 0 var(--rogue-shop-accent);
}
#createIframe .xiaochao-rogue-shop-preview__item[data-level="1"] {
  --rogue-shop-accent: #b9b3a6;
  --rogue-shop-glow: rgba(214, 210, 200, 0.14);
  color: #e4e0d6;
}
#createIframe .xiaochao-rogue-shop-preview__item[data-level="2"] {
  --rogue-shop-accent: #5ea6ff;
  --rogue-shop-glow: rgba(94, 166, 255, 0.2);
  color: #9cccff;
}
#createIframe .xiaochao-rogue-shop-preview__item[data-level="3"] {
  --rogue-shop-accent: #c07cff;
  --rogue-shop-glow: rgba(192, 124, 255, 0.22);
  color: #d7b0ff;
}
#createIframe .xiaochao-rogue-shop-preview__item[data-level="4"] {
  --rogue-shop-accent: #ff9f2e;
  --rogue-shop-glow: rgba(255, 159, 46, 0.24);
  color: #ffc56d;
  text-shadow: 0 0 8px rgba(255, 159, 46, 0.28);
}
#createIframe .xc-two-column-switch-row {
  justify-content: flex-start;
  gap: 4px;
}
#createIframe .xc-two-column-switch-row > .switch-container {
  flex: 0 0 calc(50% - 2px);
  min-width: 0;
  max-width: calc(50% - 2px);
}
#createIframe #frame-resize-handle { pointer-events: auto; }
.xiaochao-dock-preview {
  position: fixed;
  z-index: 2147483599;
  top: 0;
  right: 0;
  width: 25px;
  height: 100vh;
  pointer-events: none;
  background: rgba(55, 40, 32, .8);
  border-left: 1px solid rgba(242, 222, 156, .25);
  transition: width .12s ease, background .12s ease, box-shadow .12s ease;
}
.xiaochao-dock-preview--active {
  width: 38px;
  background: rgba(201, 161, 93, .42);
  box-shadow: -4px 0 14px rgba(242, 222, 156, .28);
}
.xiaochao-tooltip {
  position: fixed;
  z-index: 2147483647;
  box-sizing: border-box;
  max-width: min(280px, calc(100vw - 16px));
  padding: 5px 8px;
  border: 1px solid rgba(242, 222, 156, .5);
  border-radius: 5px;
  background: rgba(29, 27, 24, .96);
  box-shadow: 0 6px 18px rgba(0, 0, 0, .3);
  color: #eee5d2;
  font: 12px/1.45 var(--xc-font-ui, system-ui, sans-serif);
  overflow-wrap: anywhere;
  white-space: pre-line;
  pointer-events: none;
  user-select: none;
}
.xiaochao-dialog {
  position: fixed;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  box-sizing: border-box;
  width: min(420px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(242, 222, 156, .45);
  border-radius: 8px;
  background: #23201d;
  box-shadow: 0 14px 42px rgba(0, 0, 0, .5);
  color: #f2de9c;
  font-family: var(--xc-font-ui, system-ui, sans-serif);
}
.xiaochao-dialog::backdrop {
  background: rgba(0, 0, 0, .48);
  backdrop-filter: blur(1px);
}
.xiaochao-dialog__header {
  display: flex;
  align-items: center;
  min-height: 38px;
  padding: 0 6px 0 12px;
  border-bottom: 1px solid rgba(242, 222, 156, .18);
  background: linear-gradient(180deg, #302923 0%, #211d19 100%);
}
.xiaochao-dialog__title {
  flex: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}
.xiaochao-dialog__close {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  background: transparent;
  color: #c4b28a;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.xiaochao-dialog__close:hover {
  border-color: rgba(242, 222, 156, .22);
  background: rgba(242, 222, 156, .08);
  color: #fff1bd;
}
.xiaochao-dialog__content {
  box-sizing: border-box;
  max-height: calc(100vh - 110px);
  padding: 12px;
  overflow: auto;
}
.xiaochao-dialog__footer {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  border-top: 1px solid rgba(242, 222, 156, .18);
}
.xiaochao-dialog__footer > * + * {
  margin-left: 8px;
}
#createIframe .xiaochao-settings-section,
.xiaochao-dialog .xiaochao-settings-section {
  box-sizing: border-box;
  margin: 0 0 6px;
}
#createIframe [data-migrated-to-vue="true"],
#createIframe .switch-container-row[hidden] {
  display: none !important;
}
#createIframe .nav[data-xc-hide-phrase="1"] {
  display: none !important;
}
#createIframe .xiaochao-settings-section__header,
.xiaochao-dialog .xiaochao-settings-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 22px;
  box-sizing: border-box;
  margin: 0 2px 3px;
  padding: 0 6px 0 7px;
  border-left: 3px solid #d7b66b;
  border-radius: 3px;
  background: linear-gradient(90deg, rgba(117, 84, 38, .32), rgba(44, 36, 28, .08) 72%, transparent);
}
#createIframe .xiaochao-settings-section__title,
.xiaochao-dialog .xiaochao-settings-section__title {
  margin: 0;
  color: #f2de9c;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .5px;
}
#createIframe .xiaochao-settings-section__summary,
.xiaochao-dialog .xiaochao-settings-section__summary {
  color: rgba(214, 197, 156, .56);
  font-size: 10px;
  line-height: 1;
}
#createIframe .xiaochao-settings-section__body,
.xiaochao-dialog .xiaochao-settings-section__body {
  overflow: hidden;
  border: 1px solid rgba(242, 222, 156, .16);
  border-radius: 7px;
  background:
    linear-gradient(135deg, rgba(242, 222, 156, .035), transparent 45%),
    rgba(25, 22, 19, .66);
  box-shadow: inset 0 1px rgba(255, 242, 198, .035), 0 2px 6px rgba(0, 0, 0, .14);
}
#createIframe .xiaochao-settings-grid,
.xiaochao-dialog .xiaochao-settings-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 0;
  padding: 1px 6px;
}
#createIframe .xiaochao-setting-switch,
.xiaochao-dialog .xiaochao-setting-switch {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  min-width: 0;
  min-height: 28px;
  box-sizing: border-box;
  padding: 0 2px;
  border: 0;
  border-bottom: 1px solid rgba(242, 222, 156, .1);
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
}
#createIframe .xiaochao-setting-switch:hover,
.xiaochao-dialog .xiaochao-setting-switch:hover {
  background: linear-gradient(90deg, rgba(215, 182, 107, .1), rgba(215, 182, 107, .025));
}
#createIframe .xiaochao-setting-switch:last-child,
.xiaochao-dialog .xiaochao-setting-switch:last-child { border-bottom: 0; }
#createIframe .xiaochao-setting-switch__label,
.xiaochao-dialog .xiaochao-setting-switch__label {
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 5px;
  color: #d6c59c;
  font-size: 12px;
  line-height: 28px;
  white-space: nowrap;
}
#createIframe .xiaochao-setting-switch__input,
.xiaochao-dialog .xiaochao-setting-switch__input {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
#createIframe .xiaochao-setting-switch__track,
.xiaochao-dialog .xiaochao-setting-switch__track {
  position: relative !important;
  display: block !important;
  flex: 0 0 44px !important;
  box-sizing: border-box;
  width: 44px !important;
  height: 20px !important;
  border: 1px solid rgba(242, 222, 156, .26);
  border-radius: 999px;
  background: linear-gradient(180deg, #221e1a 0%, #1a1613 100%);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .4);
  transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
#createIframe .xiaochao-setting-switch:hover .xiaochao-setting-switch__track,
.xiaochao-dialog .xiaochao-setting-switch:hover .xiaochao-setting-switch__track {
  border-color: rgba(242, 222, 156, .42);
}
#createIframe .xiaochao-setting-switch__thumb,
.xiaochao-dialog .xiaochao-setting-switch__thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f5e6b8 0%, #dcc98a 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(255, 255, 255, .28);
  transition: transform .2s cubic-bezier(.4, 0, .2, 1), background .2s ease;
}
#createIframe .xiaochao-setting-switch__status,
.xiaochao-dialog .xiaochao-setting-switch__status {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: rgba(169, 149, 114, .92);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: .04em;
  pointer-events: none;
}
#createIframe .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track,
.xiaochao-dialog .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track {
  border-color: rgba(242, 222, 156, .55);
  background: linear-gradient(180deg, #d4b56a 0%, #b8923f 100%);
  box-shadow: inset 0 1px 0 rgba(255, 248, 210, .25), 0 0 8px rgba(212, 181, 106, .18);
}
#createIframe .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track .xiaochao-setting-switch__thumb,
.xiaochao-dialog .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track .xiaochao-setting-switch__thumb {
  transform: translateX(24px);
  background: linear-gradient(180deg, #fffaf0 0%, #f2de9c 100%);
}
#createIframe .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track .xiaochao-setting-switch__status,
.xiaochao-dialog .xiaochao-setting-switch__input:checked + .xiaochao-setting-switch__track .xiaochao-setting-switch__status {
  right: auto;
  left: 5px;
  color: #2a2010;
}
#createIframe .xiaochao-setting-switch__input:focus-visible + .xiaochao-setting-switch__track,
.xiaochao-dialog .xiaochao-setting-switch__input:focus-visible + .xiaochao-setting-switch__track {
  box-shadow: 0 0 0 2px rgba(242, 222, 156, .2);
}
.xiaochao-block-dialog {
  width: min(250px, calc(100vw - 32px));
}
.xiaochao-block-dialog .xiaochao-dialog__content {
  padding: 12px 10px 14px;
}
.xiaochao-block-select-bar {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 10px;
}
.xiaochao-block-select-btn {
  box-sizing: border-box;
  min-height: 24px;
  padding: 0 10px;
  border: 1px solid rgba(242, 222, 156, .42);
  border-radius: 4px;
  background: rgba(57, 47, 34, .72);
  box-shadow: inset 0 1px rgba(255, 242, 198, .04);
  color: #e6d6a8;
  font: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
.xiaochao-block-select-btn:hover {
  border-color: rgba(242, 222, 156, .62);
  background: linear-gradient(90deg, rgba(215, 182, 107, .2), rgba(57, 47, 34, .78));
  color: #f2de9c;
}
.xiaochao-block-select-btn:active {
  border-color: rgba(242, 222, 156, .78);
  background: linear-gradient(90deg, rgba(215, 182, 107, .36), rgba(215, 182, 107, .1));
  color: #fff6d8;
}
.xiaochao-block-group {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.xiaochao-block-group + .xiaochao-block-group {
  margin-top: 16px;
}
.xiaochao-block-group__title + .xiaochao-block-group__grid {
  margin-top: 8px;
}
.xiaochao-block-group:first-child { margin-top: 0; }
.xiaochao-block-select-bar + .xiaochao-block-group { margin-top: 0; }
.xiaochao-block-group__title {
  box-sizing: border-box;
  min-height: 26px;
  margin: 0;
  padding: 4px 8px;
  border-left: 3px solid rgba(255, 215, 94, .65);
  border-radius: 3px;
  background: linear-gradient(90deg, rgba(107, 68, 39, .5), rgba(46, 39, 22, .32) 72%, rgba(46, 39, 22, .08));
  color: #f2de9c;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
}
.xiaochao-block-group__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px 4px;
}
.xiaochao-block-switch {
  box-sizing: border-box;
  min-width: 0;
}
.xiaochao-block-switch__label {
  display: block;
  margin: 0 10px 2px;
  color: #f2de9c;
  font-size: 12.5px;
  white-space: nowrap;
}
.xiaochao-block-switch__label::before,
.xiaochao-block-switch__label::after {
  content: none !important;
  display: none !important;
}
.xiaochao-block-switch__toggle {
  position: relative;
  display: block;
  width: 52px;
  height: 24px;
  margin-left: 10px;
}
.xiaochao-block-switch__toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}
.xiaochao-block-switch__slider {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(242, 222, 156, .26);
  border-radius: 999px;
  background: linear-gradient(180deg, #221e1a 0%, #1a1613 100%);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .4);
  cursor: pointer;
  transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.xiaochao-block-switch__slider::before {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f5e6b8 0%, #dcc98a 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(255, 255, 255, .28);
  content: "";
  transition: transform .2s cubic-bezier(.4, 0, .2, 1), background .2s ease, box-shadow .2s ease;
}
.xiaochao-block-switch__toggle:hover input + .xiaochao-block-switch__slider {
  border-color: rgba(242, 222, 156, .42);
}
.xiaochao-block-switch__toggle input:checked + .xiaochao-block-switch__slider {
  border-color: rgba(242, 222, 156, .55);
  background: linear-gradient(180deg, #d4b56a 0%, #b8923f 100%);
  box-shadow: inset 0 1px 0 rgba(255, 248, 210, .25), 0 0 8px rgba(212, 181, 106, .18);
}
.xiaochao-block-switch__toggle input:checked + .xiaochao-block-switch__slider::before {
  transform: translateX(28px);
  background: linear-gradient(180deg, #fffaf0 0%, #f2de9c 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255, 255, 255, .5);
}
.xiaochao-block-switch__toggle input:focus-visible + .xiaochao-block-switch__slider {
  box-shadow: 0 0 0 2px rgba(242, 222, 156, .2);
}
.xiaochao-block-switch__state {
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  color: rgba(169, 149, 114, .92);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: .04em;
  pointer-events: none;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .28);
}
.xiaochao-block-switch__state::before { content: "关"; }
.xiaochao-block-switch__toggle input:checked + .xiaochao-block-switch__slider + .xiaochao-block-switch__state {
  right: auto;
  left: 6px;
  color: #2a2010;
  text-shadow: 0 1px 0 rgba(255, 248, 210, .28);
}
.xiaochao-block-switch__toggle input:checked + .xiaochao-block-switch__slider + .xiaochao-block-switch__state::before {
  content: "开";
}
.xiaochao-block-check {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-width: 0;
  min-height: 24px;
  margin: 0;
  cursor: pointer;
}
.xiaochao-block-check input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}
.xiaochao-block-check__box {
  position: relative;
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  border: 1px solid rgba(242, 222, 156, .45);
  border-radius: 3px;
  background: linear-gradient(180deg, #221e1a 0%, #1a1613 100%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4);
}
.xiaochao-block-check__box::after {
  position: absolute;
  top: 1px;
  left: 4px;
  width: 5px;
  height: 9px;
  border: solid transparent;
  border-width: 0 2px 2px 0;
  content: "";
  transform: rotate(40deg);
}
.xiaochao-block-check:hover .xiaochao-block-check__box {
  border-color: rgba(242, 222, 156, .7);
}
.xiaochao-block-check input:checked + .xiaochao-block-check__box {
  border-color: rgba(242, 222, 156, .7);
  background: linear-gradient(180deg, #d4b56a 0%, #b8923f 100%);
}
.xiaochao-block-check input:checked + .xiaochao-block-check__box::after {
  border-color: #2a2010;
}
.xiaochao-block-check input:focus-visible + .xiaochao-block-check__box {
  box-shadow: 0 0 0 2px rgba(242, 222, 156, .2);
}
.xiaochao-block-check--disabled {
  opacity: .45;
  cursor: default;
}
.xiaochao-block-check__label {
  margin-left: 6px;
  color: #f2de9c;
  font-size: 12.5px;
  line-height: 16px;
  white-space: nowrap;
}
/* 快捷工具：屏蔽/红点/皮肤/领取 两行两列紧凑入口 */
#createIframe .xiaochao-quick-tools {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
  margin: 0 0 6px;
}
#createIframe .xiaochao-quick-tools .xiaochao-settings-section {
  margin: 0;
  min-width: 0;
}
#createIframe .xiaochao-quick-tools .xiaochao-settings-section__body {
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}
#createIframe .xiaochao-quick-tools .xiaochao-block-entry {
  width: calc(100% - 2px);
  min-height: 24px;
  margin: 1px;
  padding: 0 6px;
  border-radius: 4px;
  font-size: 11px;
  gap: 4px;
}
#createIframe .xiaochao-quick-tools .xiaochao-block-entry > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#createIframe .xiaochao-quick-tools .xiaochao-block-entry__count {
  flex-shrink: 0;
  font-size: 10px;
}
/* 功能入口按钮：统一描边，避免看起来像静态文案 */
#createIframe .xiaochao-block-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 8px);
  min-height: 28px;
  box-sizing: border-box;
  margin: 3px 4px;
  padding: 0 10px;
  border: 1px solid rgba(242, 222, 156, .42);
  border-radius: 5px;
  background: rgba(57, 47, 34, .72);
  box-shadow: inset 0 1px rgba(255, 242, 198, .04);
  color: #e6d6a8;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  pointer-events: auto;
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
#createIframe .xiaochao-block-entry:hover {
  border-color: rgba(242, 222, 156, .62);
  background: linear-gradient(90deg, rgba(215, 182, 107, .2), rgba(57, 47, 34, .78));
  color: #f2de9c;
}
#createIframe .xiaochao-block-entry:active,
#createIframe .xiaochao-block-entry--flash {
  border-color: rgba(242, 222, 156, .78);
  background: linear-gradient(90deg, rgba(215, 182, 107, .36), rgba(215, 182, 107, .1));
  color: #fff6d8;
}
#createIframe .xiaochao-block-entry--center {
  justify-content: center;
  text-align: center;
}
#createIframe .xiaochao-block-entry__count {
  color: rgba(214, 197, 156, .7);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

/* @property / conic 动画放到末尾：旧 Chromium 若解析失败，不影响上方开关等关键样式 */
@property --xiaochao-border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
#createIframe.xiaochao-panel--collapsed::before {
  content: '';
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2px;
  border-radius: inherit;
  pointer-events: none;
  background: conic-gradient(
    from var(--xiaochao-border-angle),
    transparent 0deg 245deg,
    rgba(210, 182, 111, .22) 270deg,
    #fff4c2 305deg,
    #d2b66f 330deg,
    transparent 360deg
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: xiaochaoCollapsedBorderRun 2.2s linear infinite;
}
@keyframes xiaochaoCollapsedBorderRun {
  to { --xiaochao-border-angle: 360deg; }
}
`,Gu=new WeakMap;function Ku(e=document){let t=e.getElementById(Uu);t?t.textContent=Wu:(t=e.createElement(`style`),t.id=Uu,t.textContent=Wu,(e.head||e.documentElement).appendChild(t)),Gu.set(t,(Gu.get(t)||0)+1);let n=!1;return()=>{if(n||!t)return;
n=!0;let e=(Gu.get(t)||1)-1;if(e<=0){Gu.delete(t),t.remove();return}Gu.set(t,e)}}function qu(e,t,n,r,i,a,o,s,c,l=null,u=()=>({found:!1,count:0}),d=null,f=null){let p=Ku(),m=document.createElement(`div`);m.id=`xiaochao-app`,document.body.appendChild(m);
let h=Uo(Hu,{platform:e,layout:t,configStore:n,recentCardStore:r,deckRecordStore:i,gameCardCatalog:a,skillAssistStore:o,peixiuRouteStore:s,turnStatusStore:c,autoTaskController:l,clearRedDots:u,rogueController:d,updateNoticeController:f});h.mount(m);
let g=m.querySelector(`#createIframe`),_=m.querySelector(`#iframe-source`);if(!g||!_)throw h.unmount(),m.remove(),Error(`Vue 面板外壳创建失败`);let v=!1;return{app:h,rootElement:m,panelElement:g,contentElement:_,unmount(){v||(v=!0,h.unmount(),m.remove(),
p())}}}var Ju=`XC::config`,F=(e,t)=>({defaultValue:e,previousStorageKey:t,parse(e){if(typeof e==`boolean`)return e;if(e===`true`||e===`1`||e===1)return!0;if(e===`false`||e===`0`||e===0)return!1}}),Yu={cards:`cards`,rogue:`rogue`,settings:`cards`,
tools:`tools`,卡牌:`cards`,常规:`cards`,山河图:`rogue`,配置:`cards`,工具:`tools`},Xu={"panel.activeTab":{defaultValue:`cards`,previousStorageKey:`XC::mainPanelActiveTab`,parse:e=>typeof e==`string`?Yu[e]:void 0},"panel.collapsed":F(!1,`XC::mainPanelCollapsed`),
"panel.dockedRight":F(!1,`XC::mainPanelDockedRight`),"panel.position":{defaultValue:null,previousStorageKey:`XC::mainPanelPosition`,parse(e){if(e===null)return null;if(!e||typeof e!=`object`)return;let t=e;return Number.isFinite(t.left)&&Number.isFinite(t.top)?{left:Number(t.left),
top:Number(t.top)}:void 0}},"display.seatUiEnabled":F(!0,`SEAT_UI_SWITCH`),"display.deckHudEnabled":F(!0),"display.recentCardMode":{defaultValue:`current`,parse:e=>e===`current`||e===`player`?e:void 0},"display.deckRecordEnabled":F(!0,`DECK_RECORD_SWITCH`),
"display.discardSortMode":{defaultValue:`suit-type-number`,previousStorageKey:`DISCARD_SORT_MODE`,parse:e=>{let t=String(e);return[`suit-type-number`,`type-suit-number`,`number-suit-type`].includes(t)?t:void 0}},"display.cardLabelsEnabled":F(!0,
`CARD_LABEL_SWITCH`),"display.countdownEnabled":F(!0,`COUNT_DOWN_SWITCH`),"rooms.hidePassword":F(!1,`onlyNoPasswordRoomSwitch`),"cards.handSortEnabled":F(!0,`HAND_SORT_SWITCH`),"cards.handSortLockedMode":{defaultValue:``,previousStorageKey:`XC::handSortLockedMode`,
parse(e){if(e===`type-suit-number`||e===`CardType`)return`CardType`;if(e===`suit-type-number`||e===`CardFlower`)return`CardFlower`;if(e===`number-suit-type`||e===`CardNumber`)return`CardNumber`;if(e===``||e===null)return``}},"cards.handSortPosition":{defaultValue:null,
previousStorageKey:`XC::handSortPosition`,parse(e){if(e===null)return null;if(!e||typeof e!=`object`)return;let t=e,n=Number(t.right),r=Number(t.top);if(!(!Number.isFinite(n)||!Number.isFinite(r)||n<0||r<0))return{right:Math.min(1e4,n),top:Math.min(1e4,
r)}}},"block.adWindow":F(!1,`SKIP_AD_WINDOW_SWITCH`),"block.mvpWindow":F(!1,`SKIP_MVP_WINDOW_SWITCH`),"block.packageWindow":F(!1,`SKIP_PACKAGE_WINDOW_SWITCH`),"block.noticeWindow":F(!1,`SKIP_NOTICE_WINDOW_SWITCH`),"block.laoXianWindow":F(!1,
`SKIP_LAOXIAN_WINDOW_SWITCH`),"block.probWindow":F(!1,`SKIP_PROB_WINDOW_SWITCH`),"block.shaEffect":F(!1,`BLOCK_SHA_EFFECT_SWITCH`),"block.healEffect":F(!1,`BLOCK_HEAL_EFFECT_SWITCH`),"block.jinnangEffect":F(!1,`BLOCK_JINNANG_EFFECT_SWITCH`),
"block.killEffect":F(!1,`BLOCK_KILL_EFFECT_SWITCH`),"block.entranceEffect":F(!1,`BLOCK_ENTRANCE_EFFECT_SWITCH`),"block.otherSkinState":F(!1,`BLOCK_SKIN_STATE_SWITCH`),"block.taskRedDot":F(!1,`RED_DOT_BLOCK_SWITCH`),"block.interactEffect":F(!1,
`BLOCK_INTERACT_EFFECT_SWITCH`),"block.factionSlogan":F(!1,`BLOCK_FACTION_SLOGAN_SWITCH`),"skin.localSkin":F(!0,`LOCAL_SKIN_SWITCH`),"skin.otherLocalSkin":F(!1,`OTHER_LOCAL_SKIN_SWITCH`),"skin.officialBackground":F(!0,`OFFICIAL_BACKGROUND_SWITCH`),
"skin.skinPaper":F(!0,`SKIN_PAPER_SWITCH`),"skin.allPaper":F(!1,`ALL_PAPER_SWITCH`),"autoTask.enabled":F(!1,`AUTO_TASK_SWITCH`),"autoTask.skipTavern":F(!0,`AUTO_TASK_TAVERN`),"autoTask.skipMail":F(!0,`AUTO_TASK_SKIP_MAIL`),"autoTask.skipDailyGeneralBag":F(!0,
`AUTO_TASK_SKIP_DAILY_WU_JIANG`),"autoTask.skipSignTrialCard":F(!0,`AUTO_SIGN_SKIP_SWITCH`),"autoTask.skipDiJiaQuan":F(!0,`AUTO_TASK_SKIP_DI_JIA_QUAN`),"autoTask.skipHuanLeDou":F(!0,`AUTO_TASK_SKIP_HUAN_LE_DOU`),"rogue.mapEnabled":F(!0,`ROGUE_CITY_SWITCH`),
"rogue.hideStory":F(!1,`ROGUE_STORY_SWITCH`),"assist.extraEnabled":F(!1,`EXTRA_ASSIST_SWITCH`),"assist.autoBotEnabled":F(!1),"assist.autoHGEnabled":F(!1),"assist.baiShengEnabled":F(!1),"assist.autoBotTavernTarget":{defaultValue:`none`,previousStorageKey:`XC_AUTO_BOT_TAVERN_TARGET`,
parse(e){return e===`none`||e===`dailyGame`||e===`dailyWin`||e===`weeklyWin`?e:void 0}},"update.dismissedVersion":{defaultValue:``,parse(e){return typeof e==`string`?e:void 0}}};function Zu(){return Object.fromEntries(Object.entries(Xu).map(([e,
t])=>[e,t.defaultValue]))}var Qu=`xc:config-change`;function $u(e,t=typeof window>`u`?void 0:window){let n=e.read(),r=new Map;function i(e){return n[e]}function a(i,a){let o=Xu[i].parse(a);if(o===void 0)throw TypeError(`无效的小抄配置：${i}`);let s=n[i];
if(ed(s,o))return;n={...n,[i]:o},e.write(n);let c={key:i,value:o,previousValue:s};r.get(i)?.forEach(e=>e(c)),t&&typeof CustomEvent<`u`&&t.dispatchEvent(new CustomEvent(Qu,{detail:c}))}function o(e){a(e,Xu[e].defaultValue)}function s(){let i=n;
n=Zu(),e.clear(),e.write(n);for(let e of Object.keys(Xu)){if(ed(i[e],n[e]))continue;let a={key:e,value:n[e],previousValue:i[e]};r.get(e)?.forEach(e=>e(a)),t&&typeof CustomEvent<`u`&&t.dispatchEvent(new CustomEvent(Qu,{detail:a}))}}function c(e,
t){let n=r.get(e)||new Set;return n.add(t),r.set(e,n),()=>{n.delete(t),n.size||r.delete(e)}}return{get:i,set:a,reset:o,subscribe:c,snapshot:()=>structuredClone(n),resetAll:s}}function ed(e,t){return JSON.stringify(e)===JSON.stringify(t)}function td(e){return{read(){let t=Zu(),
n=nd(e.getSetting(Ju)),r=n?.values||{},i=!n||n.version!==1;for(let n of Object.keys(Xu)){let a=Xu[n],o=r[n];o===void 0&&a.previousStorageKey&&(o=rd(e.getSetting(a.previousStorageKey)),o!==void 0&&(i=!0));let s=a.parse(o);s===void 0?o!==void 0&&(i=!0):t[n]=s}return i&&this.write(t),
t},write(t){let n={version:1,values:t};e.setSetting(Ju,JSON.stringify(n))},clear(){e.removeSetting(Ju);for(let t of Object.keys(Xu)){let n=Xu[t].previousStorageKey;n&&e.removeSetting(n)}}}}function nd(e){if(e)try{let t=JSON.parse(e);return!t||typeof t!=`object`||!t.values||typeof t.values!=`object`?void 0:{version:Number(t.version)||0,
values:t.values}}catch{return}}function rd(e){if(e!==null)try{return JSON.parse(e)}catch{return e}}var id=`xiaochao-seat-display-visibility-style`,ad=`xcSeatDisplayEnabled`;function od(e,t=document){let n=t.documentElement,r=t.createElement(`style`);
r.id=id,r.textContent=`
html #seatUI { display: none !important; }
html[data-xc-seat-display-enabled="false"] #xiaochao-vue-seat-overlay { display: none !important; }
`,t.head.appendChild(r);let i=e=>{n.dataset[ad]=String(e)};i(e.get(`display.seatUiEnabled`));let a=e.subscribe(`display.seatUiEnabled`,({value:e})=>{i(e)});return()=>{a(),delete n.dataset[ad],r.remove()}}function sd(){return{inGame:!1,isSpectating:!1,
selfSeatId:null,controlledSeatIds:[],mode:`unknown`,playerCount:0,seats:[]}}function cd(e){if(!e?.inGame)return sd();let t=fd(e.selfSeatId),n=[...new Set((Array.isArray(e.controlledSeatIds)?e.controlledSeatIds:[t]).map(fd).filter(e=>e!==null))],
r=new Map;for(let n of Array.isArray(e.seats)?e.seats:[]){let e=fd(n?.seatId);if(e===null||r.has(e))continue;let i=new Map;for(let e of Array.isArray(n.knownCards)?n.knownCards:[]){let t=Number(e?.cardId);if(!Number.isInteger(t)||t<=0||i.has(t))continue;
let n=i.get(t),r=dd(e?.tags);i.set(t,{cardId:t,name:typeof e.name==`string`&&e.name?e.name:n?.name??``,tags:[...new Set([...n?.tags??[],...r])]})}let a=[];for(let e of Array.isArray(n.possibleCards)?n.possibleCards:[]){let t=Number(e?.cardId);
!Number.isInteger(t)||t<=0||i.has(t)||a.some(e=>e.cardId===t)||a.push({cardId:t,name:typeof e.name==`string`?e.name:``,tags:dd(e?.tags)})}let o=new Map;for(let e of Array.isArray(n.equipmentCards)?n.equipmentCards:[]){let t=Number(e?.cardId);
if(!Number.isInteger(t)||t<=0)continue;let n=o.get(t);o.set(t,{cardId:t,name:typeof e.name==`string`?e.name:n?.name??``,tags:[...new Set([...n?.tags??[],...dd(e.tags)])],hints:[...new Set([...n?.hints??[],...dd(e.hints)])]})}for(let e of o.keys())i.delete(e);
let s=a.filter(e=>!o.has(e.cardId));r.set(e,{seatId:e,displayOrder:pd(n.displayOrder,r.size+1),playerName:typeof n.playerName==`string`?n.playerName:``,isSelf:n.isSelf===!0||e===t,isAlive:n.isAlive!==!1,anchor:ud(n.anchor),knownCards:[...i.values()],...o.size?{equipmentCards:[...o.values()]}:{},...s.length?{possibleCards:s}:{},
unknownCardCount:Math.max(0,Math.floor(Number(n.unknownCardCount)||0))})}let i=[...r.values()].sort((e,t)=>e.displayOrder-t.displayOrder||e.seatId-t.seatId);return{inGame:!0,isSpectating:e.isSpectating===!0,selfSeatId:t,controlledSeatIds:n,
mode:ld(e.mode,e.isSpectating===!0),playerCount:i.length,seats:i}}function ld(e,t){return t?`spectator`:e===`identity`||e===`nation-war`?e:`unknown`}function ud(e){if(!e||typeof e!=`object`)return null;let t=e,n=[t.x,t.y,t.width,t.height,t.stageWidth,
t.stageHeight].map(Number);return!n.every(Number.isFinite)||n[2]<=0||n[3]<=0||n[4]<=0||n[5]<=0?null:{x:n[0],y:n[1],width:n[2],height:n[3],stageWidth:n[4],stageHeight:n[5]}}function dd(e){return Array.isArray(e)?e.map(e=>String(e??``).trim()).filter(Boolean):[]}function fd(e){let t=Number(e);
return Number.isInteger(t)&&t>=0&&t<=8?t:null}function pd(e,t){let n=Number(e);return Number.isInteger(n)&&n>=1&&n<=8?n:t}var md=5,hd=-1,gd=`XC::knownHands`,_d=108e5;function vd(e=xd()){let t=jd(sd()),n=jd(sd()),r=new Map,i=new Map,a=new Map,
o=new Map,s=new Map,c=bd(e,r,i,o,s),l=new Set;function u(t){JSON.stringify(n)!==JSON.stringify(t)&&(n=jd(t),yd(e,r,i,o,s),l.forEach(e=>e(n)))}function d(){u(Ed(t,r,a,o,s))}function f(e){e.forEach(e=>{e>0&&s.delete(e)})}function p(e,n){let a=[...n].filter(e=>e!==hd);
a.length?n.size===1&&(s.delete(e),wd(r,a[0],[e],1),Sd(i,t,a[0])):s.delete(e)}function m(){r.clear(),i.clear(),a.clear(),o.clear(),s.clear(),c=!1,yd(e,r,i,o,s)}return{getSnapshot:()=>n,hasRestoredKnownHands:()=>c,replace:e=>{let n=cd(e);t.inGame&&!n.inGame?m():(Cd(r,
i,t,n),Ad(a,t,n),kd(a,n)),t=jd(n),d()},applyKnownHandMovement(e){f(e.cardIds),e.fromZone===md&&(Td(r,e.fromSeatId,e.cardIds,e.cardCount),Dd(a,e.fromSeatId,e.cardIds),r.has(e.fromSeatId)||i.delete(e.fromSeatId)),e.toZone===md&&(Od(a,e.toSeatId,
e.cardIds),wd(r,e.toSeatId,e.cardIds,e.cardCount),Sd(i,t,e.toSeatId)),d()},applyHiddenHandMovement({fromSeatId:e,toSeatId:n,wholeHand:a}){if(!Number.isInteger(e)||e<0||e>=255)return;let o=n!==null&&Number.isInteger(n)&&n>=0&&n<255?n:hd;if(o===e)return;
let c=r.get(e)?.cardIds??[];if(r.delete(e),i.delete(e),a){o!==hd&&c.length&&(wd(r,o,c,c.length),Sd(i,t,o));for(let[t,n]of s)n.delete(e)&&(n.add(o),p(t,n))}else{c.forEach(t=>s.set(t,new Set([e,o])));for(let t of s.values())t.has(e)&&t.add(o)}d()},
revealKnownHand(e,n){if(!Number.isInteger(e)||e<0||e>=255)return;let a=[...new Set(n.filter(e=>e>0))];if(a.length){f(a),r.set(e,{cardIds:a}),Sd(i,t,e);for(let[t,n]of s)n.delete(e)&&p(t,n);d()}},mergeKnownHand(e,n){if(!Number.isInteger(e)||e<0||e>=255)return;
let o=n.filter(e=>e>0);o.length&&(f(o),Od(a,e,o),wd(r,e,o,o.length),Sd(i,t,e),d())},setPersistentKnownCardTags(e,t){if(!(e>0))return;let n=[...new Set(t.map(e=>String(e).trim()).filter(Boolean))],r=o.get(e)??[];JSON.stringify(r)!==JSON.stringify(n)&&(n.length?o.set(e,
n):o.delete(e),d())},resetKnownHands(){m(),d()},clear:()=>{m(),t=jd(sd()),u(sd())},subscribe(e){return l.add(e),e(n),()=>l.delete(e)}}}function yd(e,t,n,r,i){if(e)try{if(!t.size&&!r.size&&!i.size){e.removeItem(gd);return}e.setItem(gd,JSON.stringify({savedAt:Date.now(),
hands:[...t],occupants:[...n],persistentTags:[...r],possible:[...i].map(([e,t])=>[e,[...t]])}))}catch{}}function bd(e,t,n,r,i){if(!e)return!1;try{let a=JSON.parse(e.getItem(gd)||`null`);if(!a||Date.now()-Number(a.savedAt)>_d)return!1;for(let[e,
n]of Array.isArray(a.hands)?a.hands:[]){let r=Number(e),i=Array.isArray(n?.cardIds)?[...new Set(n.cardIds.map(Number).filter(e=>Number.isInteger(e)&&e>0))]:[];Number.isInteger(r)&&r>=0&&r<255&&i.length&&t.set(r,{cardIds:i})}for(let[e,t]of Array.isArray(a.occupants)?a.occupants:[])Number.isInteger(Number(e))&&typeof t==`string`&&n.set(Number(e),
t);for(let[e,t]of Array.isArray(a.persistentTags)?a.persistentTags:[]){let n=Array.isArray(t)?t.map(String).filter(Boolean):[];Number(e)>0&&n.length&&r.set(Number(e),n)}for(let[e,t]of Array.isArray(a.possible)?a.possible:[]){let n=Array.isArray(t)?t.map(Number).filter(e=>Number.isInteger(e)&&e>=hd&&e<255):[];
Number(e)>0&&n.length&&i.set(Number(e),new Set(n))}return t.size>0||r.size>0||i.size>0}catch{return!1}}function xd(){try{return typeof window>`u`?null:window.sessionStorage}catch{return null}}function Sd(e,t,n){let r=t.seats.find(e=>e.seatId===n)?.playerName.trim();
r&&e.set(n,r)}function Cd(e,t,n,r){if(!n.inGame||!r.inGame||e.size===0)return;let i=new Map;r.seats.forEach(e=>{let t=e.playerName.trim();if(!t)return;let n=i.get(t)??[];n.push(e.seatId),i.set(t,n)});let a=new Map,o=new Map;for(let[r,s]of e){let e=t.get(r)??n.seats.find(e=>e.seatId===r)?.playerName.trim(),
c=e?i.get(e):void 0,l=c?.length===1?c[0]:r,u=a.get(l)??{cardIds:[]};u.cardIds=[...new Set([...u.cardIds,...s.cardIds])],a.set(l,u),e&&o.set(l,e)}e.clear(),a.forEach((t,n)=>e.set(n,t)),t.clear(),o.forEach((e,n)=>t.set(n,e))}function wd(e,t,n,
r){if(!Number.isInteger(t)||t<0||t>=255)return;let i=e.get(t)??{cardIds:[]},a=n.filter(e=>e>0);for(let e of a)i.cardIds.includes(e)||i.cardIds.push(e);e.set(t,i)}function Td(e,t,n,r){let i=e.get(t);if(i){for(let e of n){let t=i.cardIds.indexOf(e);
e<=0||t<0||i.cardIds.splice(t,1)}i.cardIds.length===0&&e.delete(t)}}function Ed(e,t,n=new Map,r=new Map,i=new Map){if(!e.inGame)return e;let a=new Set([...e.seats.flatMap(e=>e.knownCards.map(e=>e.cardId)),...e.seats.flatMap(e=>(e.equipmentCards??[]).map(e=>e.cardId)),...[...t.values()].flatMap(e=>e.cardIds)]),
o=new Map;for(let[e,t]of i)a.has(e)||t.forEach(t=>{t<0||o.set(t,[...o.get(t)??[],e])});return cd({...e,seats:e.seats.map(e=>{let i=new Set((e.equipmentCards??[]).map(e=>e.cardId).filter(e=>e>0)),a=t.get(e.seatId),s=(o.get(e.seatId)??[]).filter(e=>!i.has(e)).map(e=>({cardId:e,
name:``,tags:[...r.get(e)??[]]})),c=n.get(e.seatId),l=(c?e.knownCards.filter(e=>!c.has(e.cardId)):e.knownCards).filter(e=>!i.has(e.cardId)),u=l.some(e=>r.has(e.cardId));if(!a&&l.length===e.knownCards.length&&!u)return s.length?{...e,possibleCards:s}:e;
let d=new Set(l.map(e=>e.cardId)),f=[...l.map(e=>({...e,tags:[...new Set([...e.tags,...r.get(e.cardId)??[]])]})),...(a?.cardIds??[]).filter(e=>!d.has(e)&&!i.has(e)).map(e=>({cardId:e,name:``,tags:[...r.get(e)??[]]}))],p=e.knownCards.length+e.unknownCardCount;
return{...e,knownCards:f,...s.length?{possibleCards:s}:{},unknownCardCount:Math.max(0,p-f.length)}})})}function Dd(e,t,n){let r=n.filter(e=>e>0);if(!r.length)return;let i=e.get(t)??new Set;r.forEach(e=>i.add(e)),e.set(t,i)}function Od(e,t,n){let r=e.get(t);
r&&(n.forEach(e=>r.delete(e)),r.size||e.delete(t))}function kd(e,t){for(let[n,r]of e){let i=new Set(t.seats.find(e=>e.seatId===n)?.knownCards.map(e=>e.cardId)??[]);for(let e of r)i.has(e)||r.delete(e);r.size||e.delete(n)}}function Ad(e,t,n){if(!t.inGame||!n.inGame||!e.size)return;
let r=new Map;for(let[i,a]of e){let e=t.seats.find(e=>e.seatId===i)?.playerName.trim(),o=e?n.seats.filter(t=>t.playerName.trim()===e):[],s=o.length===1?o[0].seatId:i,c=r.get(s)??new Set;a.forEach(e=>c.add(e)),r.set(s,c)}e.clear(),r.forEach((t,
n)=>e.set(n,t))}function jd(e){return e.seats.forEach(e=>{[...e.knownCards,...e.possibleCards??[]].forEach(e=>{Object.freeze(e.tags),Object.freeze(e)}),Object.freeze(e.knownCards),e.possibleCards&&Object.freeze(e.possibleCards),Object.freeze(e)}),
Object.freeze(e.seats),Object.freeze(e)}function I(e){if(Bd(e.__XIAOCHAO_GAME_SCENE__))return e.__XIAOCHAO_GAME_SCENE__;let t=Id(e);return!t||!t.IsGameScene?null:zd(t.CurrentScene,1)}var Md=null,Nd=null,Pd=0,Fd=3e3;function Id(e){if(Md&&`CurrentScene`in Md)return Md;
Md=null,Ld(e);let t=(Nd&&Vd(Nd._events)?Nd._events:null)?.SWITCH_SCENE;for(let e of Array.isArray(t)?t:[t]){let t=Vd(e)?e.caller:null;if(Vd(t)&&`CurrentScene`in t)return Md=t,t}return null}function Ld(e){if(!Nd&&Date.now()>=Pd){let t=Rd(e);
Vd(t)?Nd=t:Pd=Date.now()+Fd}return Nd}function Rd(e){let t=e.Laya?.ClassUtils;try{let e=t?.getClass?.(`PopUpWindow`)?.prototype;for(let t=e;t;t=Object.getPrototypeOf(t)){let n=Object.getOwnPropertyDescriptor(t,`ged`)?.get;if(n){let t=n.call(Object.create(e));
if(t)return t;break}}}catch{}try{let e=t?.getInstance?.(`PopUpWindow`,null),n=e?.ged;try{(e?.destroy)?.call(e)}catch{}return n}catch{return null}}function zd(e,t=2){if(Bd(e))return e;if(t<=0||!Vd(e))return null;for(let n of Object.keys(e)){let r;
try{r=e[n]}catch{continue}if(!Vd(r))continue;let i=zd(r,t-1);if(i)return i}return null}function Bd(e){return!Vd(e)||!Vd(e.seatContainer)?!1:Array.isArray(e.seatContainer.seatUIs)}function Vd(e){return typeof e==`object`&&!!e}var Hd=[`seatID`,
`seatId`,`SeatID`,`SeatId`,`index`,`Index`,`id`,`ID`],Ud=[`order`,`seatOrder`,`displayOrder`,`Order`],Wd=[`playerName`,`name`,`Name`,`nickName`,`NickName`],Gd=[`knownCards`,`handCards`,`HandCards`,`cards`,`Cards`],Kd=[`HandShowCards`,`handShowCards`],
qd=[`HandShowCardIDs`,`handShowCardIDs`],Jd=[`cardUis`,`cardUIs`,`handCardUis`,`handCardUIs`],Yd=[`equipCardUis`,`equipCardUIs`],Xd=[`cardId`,`cardID`,`CardId`,`CardID`,`id`,`ID`,`key`],Zd=[`name`,`Name`,`cardName`],Qd=[`handCardCount`,`cardCount`,
`HandCardCount`],$d=[`TagArr1`,`tagArr1`];function ef(e){let t=e?.seatContainer?.seatUIs;if(!Array.isArray(t)||t.length===0)return{inGame:!1};let n=nf(e,t),r=t.flatMap((t,r)=>{let i=sf(t),a=sf(i?.seat)??i;if(!a)return[];let o=pf(a,Hd)??pf(i,
Hd);if(o===null)return[];let s=t===e?.SelfSeatUi||(df(a,[`isSelf`,`IsSelf`])??!1),c=s||n.includes(o),l=cf(a,Gd),u=cf(a,Kd).filter(e=>df(sf(e),[`IsHide`,`isHide`])!==!0),d=cf(a,qd),f=sf(i?.cardContainer),p=cf(f,Jd),m=[...cf(f,Yd),...cf(i,Yd)],
h=[...new Set(m)].flatMap(e=>af(e)).map(e=>({...e,hints:tf(e.name)})),g=new Set(h.map(e=>e.cardId)),_=p.filter(e=>rf(e)),v=(c?[...l,...u,...d,..._]:[...u,...d]).flatMap(e=>af(e)).filter(e=>!g.has(e.cardId)),y=mf(a,Qd)??Math.max(l.length,v.length);
return[{seatId:o,displayOrder:ff(i,Ud)??ff(a,Ud)??r+1,playerName:lf(a,Wd),isSelf:s,isAlive:!(df(a,[`isDead`,`IsDead`])??!1),anchor:of(i,e),knownCards:v,equipmentCards:h,unknownCardCount:Math.max(0,y-v.length)}]}),i=r.find(e=>e.isSelf);return{inGame:r.length>0,
isSpectating:!i,selfSeatId:i?.seatId??null,controlledSeatIds:n.length?n:i?[i.seatId]:[],mode:i?e?.isGuoZhan===!0?`nation-war`:`identity`:`spectator`,seats:r}}function tf(e){return e.includes(`阴风甲`)?[`阴风甲`]:[]}function nf(e,t=[]){let n=sf(e),
r=(Array.isArray(e.mySeats)?e.mySeats:cf(n,[`MySeats`,`controlledSeats`])).flatMap(e=>{let t=sf(e),n=t?pf(t,Hd):Number(e);return Number.isInteger(n)&&Number(n)>=0&&Number(n)<255?[Number(n)]:[]});for(let e of t){let t=sf(e),n=sf(t?.seat)??t;
if(!n||(df(n,[`isFriend`,`IsFriend`,`isTeammate`,`IsTeammate`,`isTeamMate`,`IsTeamMate`])??df(t,[`isFriend`,`IsFriend`,`isTeammate`,`IsTeammate`,`isTeamMate`,`IsTeamMate`]))!==!0)continue;let i=pf(n,Hd)??pf(t,Hd);i!==null&&r.push(i)}return[...new Set(r)]}function rf(e){let t=sf(e),
n=sf(t?.card)??sf(t?.Card)??sf(t?.cardInfo)??t;return!t&&!n||(df(t,[`IsHide`,`isHide`,`isBack`,`IsBack`,`back`])??df(n,[`IsHide`,`isHide`,`isBack`,`IsBack`,`back`]))===!0||(df(t,[`isShow`,`IsShow`,`isFront`,`IsFront`])??df(n,[`isShow`,`IsShow`,
`isFront`,`IsFront`]))===!1?!1:ff(n,Xd)!==null}function af(e){if(Number.isInteger(Number(e))&&Number(e)>0)return[{cardId:Number(e),name:``,tags:[]}];let t=sf(e),n=sf(t?.card)??sf(t?.Card)??sf(t?.cardInfo)??t,r=ff(n,Xd);return r===null?[]:[{cardId:r,
name:lf(n,Zd),tags:[...new Set([...uf(t,$d),...uf(n,$d)])]}]}function of(e,t){let n=hf(e,[`width`,`Width`,`displayWidth`]),r=hf(e,[`height`,`Height`,`displayHeight`]);if(!(n>0&&r>0))return null;let i=0,a=0,o=1,s=1,c=e,l=0;for(;c&&l++<12;)i+=(hf(c,[`x`,
`_x`])||0)*o,a+=(hf(c,[`y`,`_y`])||0)*s,o*=hf(c,[`scaleX`,`_scaleX`])||1,s*=hf(c,[`scaleY`,`_scaleY`])||1,c=sf(c.parent);let u=hf(sf(t),[`width`,`Width`,`designWidth`])||hf(sf(globalThis.Laya)?.stage,[`width`])||1920,d=hf(sf(t),[`height`,`Height`,
`designHeight`])||hf(sf(globalThis.Laya)?.stage,[`height`])||1080;return{x:i,y:a,width:n*o,height:r*s,stageWidth:u,stageHeight:d}}function sf(e){return typeof e==`object`&&e?e:null}function cf(e,t){if(!e)return[];for(let n of t)if(Array.isArray(e[n]))return e[n];
return[]}function lf(e,t){if(!e)return``;for(let n of t)if(typeof e[n]==`string`)return e[n];return``}function uf(e,t){if(!e)return[];for(let n of t)if(Array.isArray(e[n]))return e[n].map(e=>String(e??``).trim()).filter(Boolean);return[]}function df(e,
t){if(!e)return null;for(let n of t)if(typeof e[n]==`boolean`)return e[n];return null}function ff(e,t){if(!e)return null;for(let n of t){let t=Number(e[n]);if(Number.isInteger(t)&&t>0)return t}return null}function pf(e,t){if(!e)return null;
for(let n of t){let t=Number(e[n]);if(Number.isInteger(t)&&t>=0&&t<255)return t}return null}function mf(e,t){if(!e)return null;for(let n of t){let t=Number(e[n]);if(Number.isInteger(t)&&t>=0)return t}return null}function hf(e,t){if(!e)return 0;
for(let n of t){let t=Number(e[n]);if(Number.isFinite(t))return t}return 0}function gf(e,t=window,{pollIntervalMs:n=500,sceneMissingGraceMs:r=8e3}={}){let i=!1,a=0,o=()=>{if(i)return;let n=I(t);if(!n&&e.getSnapshot().inGame){if(a||=Date.now(),
Date.now()-a<r)return}else a=0;e.replace(ef(n))};o();let s=t.setInterval(o,n);return()=>{i||(i=!0,t.clearInterval(s),e.clear())}}function _f(){let e=new Set;return{publish(t){let n=vf(t);n&&e.forEach(e=>e(n))},subscribe(t){return e.add(t),()=>e.delete(t)},
clear(){e.clear()}}}function vf(e){if(!e||typeof e.type!=`string`)return null;if(e.type===`game-started`||e.type===`game-ended`||e.type===`game-reconnected`||e.type===`deck-shuffled`)return Object.freeze({type:e.type,...e.type===`game-started`&&e.freshGame?{freshGame:!0}:{}});
if(e.type===`spell-damage-resolved`){let t=bf(e.seatId),n=L(e.spellId),r=Number(e.damage);return t===null||n===null||!Number.isFinite(r)?null:Object.freeze({type:e.type,seatId:t,spellId:n,damage:r})}if(e.type===`card-list-ready`){let t=[...new Set(e.cardIds.map(yf).filter(xf))];
return t.length?Object.freeze({type:e.type,cardIds:Object.freeze(t)}):null}if(e.type===`cards-moved`){let t=L(e.cardCount);return t===null||t===0?null:Object.freeze({type:e.type,cardCount:t,cardIds:Object.freeze(e.cardIds.map(L).filter(xf)),
fromId:L(e.fromId)??0,fromZone:L(e.fromZone)??0,fromPosition:L(e.fromPosition)??0,fromZoneParam:L(e.fromZoneParam)??0,toId:L(e.toId)??0,toZone:L(e.toZone)??0,toPosition:L(e.toPosition)??0,toZoneParam:L(e.toZoneParam)??0,moveType:L(e.moveType)??0,
spellId:L(e.spellId)??0,srcSeatId:e.srcSeatId===null||e.srcSeatId===void 0?null:bf(e.srcSeatId)})}if(e.type===`temporary-cards-reordered`){let t=bf(e.seatId),n=L(e.spellId),r=e.trace.map(L).filter(xf);return t===null||n===null||r.length!==1&&r.length!==3?null:Object.freeze({type:e.type,
seatId:t,spellId:n,zoneParam:e.zoneParam===null||e.zoneParam===void 0?null:L(e.zoneParam),trace:Object.freeze(r)})}if(e.type===`seat-state-changed`){let t=bf(e.seatId),n=L(e.stateId),r=Number(e.value);return t===null||n===null||!Number.isFinite(r)?null:Object.freeze({type:e.type,
seatId:t,stateId:n,value:r})}if(e.type===`player-died`){let t=bf(e.seatId),n=e.killerSeatId===null?null:bf(e.killerSeatId);return t===null?null:Object.freeze({type:e.type,seatId:t,killerSeatId:n})}if(e.type===`spell-targeted`){let t=bf(e.seatId),
n=L(e.spellId),r=[...new Set(e.targetSeatIds.map(bf).filter(xf))],i=[...new Set(e.cardIds.map(yf).filter(xf))];return t===null||n===null||!r.length&&!i.length?null:Object.freeze({type:e.type,seatId:t,spellId:n,targetSeatIds:Object.freeze(r),
cardIds:Object.freeze(i),effectIndex:e.effectIndex===null||e.effectIndex===void 0?null:L(e.effectIndex)})}if(e.type===`spell-data-updated`){let t=bf(e.seatId),n=L(e.dataId);return t===null||n===null?null:Object.freeze({type:e.type,seatId:t,
dataId:n,datas:Object.freeze(e.datas.map(Number).filter(Number.isFinite))})}if(e.type===`opt-target`){let t=bf(e.seatId),n=L(e.spellId);return t===null||n===null?null:Object.freeze({type:e.type,seatId:t,srcSeatId:e.srcSeatId===null?null:bf(e.srcSeatId),
targetSeatId:e.targetSeatId===null?null:L(e.targetSeatId),spellId:n,param:L(e.param)??0,params:Object.freeze(e.params.map(L).filter(xf)),cardIds:Object.freeze((e.cardIds??[]).map(L).filter(e=>e!==null&&e>0)),optType:e.optType===null||e.optType===void 0?null:L(e.optType)})}if(e.type===`spell-opt-rep`){let t=bf(e.seatId),
n=L(e.spellId);return t===null||n===null?null:Object.freeze({type:e.type,seatId:t,spellId:n,optType:L(e.optType)??0,datas:Object.freeze(e.datas.map(L).filter(xf))})}let t=bf(e.seatId);if(t===null)return null;if(e.type===`turn-started`)return Object.freeze({type:e.type,
seatId:t,turnCount:L(e.turnCount)??0,round:L(e.round)??0});if(e.type===`phase-changed`){let n=L(e.phase);return n===null?null:Object.freeze({type:e.type,seatId:t,phase:n})}if(e.type===`sha-count-updated`){let n=Number(e.used),r=Number(e.limit);
return!Number.isFinite(n)||!Number.isFinite(r)?null:Object.freeze({type:e.type,seatId:t,used:n,limit:r})}if(e.type===`hand-cards-revealed`){let n=[...new Set(e.cardIds.map(yf).filter(xf))];return n.length?Object.freeze({type:e.type,seatId:t,
cardIds:Object.freeze(n)}):null}if(e.type===`friend-hand-tags-updated`){let t=[...new Set(e.cardIds.map(yf).filter(xf))];return bf(e.seatId)===null?null:Object.freeze({type:e.type,seatId:e.seatId,cardIds:Object.freeze(t)})}if(e.type===`cards-used`){let n=[...new Set(e.cardIds.map(yf).filter(xf))];
if(!n.length)return null;let r=e.source===`use-spell`?`use-spell`:`use-card`,i=e.useType===null||e.useType===void 0?null:L(e.useType);return Object.freeze({type:e.type,seatId:t,cardIds:Object.freeze(n),source:r,useType:i,isSend:e.isSend===!0,
fromZone:e.fromZone===null||e.fromZone===void 0?null:L(e.fromZone)})}if(e.type===`spell-triggered`){let n=[...new Set(e.spellIds.map(yf).filter(xf))];return n.length?Object.freeze({type:e.type,seatId:t,spellIds:Object.freeze(n)}):null}return null}function L(e){let t=Number(e);
return Number.isInteger(t)&&t>=0?t:null}function yf(e){let t=Number(e);return Number.isInteger(t)&&t>0?t:null}function bf(e){let t=Number(e);return Number.isInteger(t)&&t>=0&&t<255?t:null}function xf(e){return e!==null}function Sf(e,t=`current`){let n=wf(Cf(t)),
r=new Set,i=e=>{let t=wf(e);Tf(n,t)||(n=t,r.forEach(e=>e(n)))},a=e.subscribe(e=>{if(e.type===`game-started`||e.type===`game-ended`){i(Cf(n.displayMode));return}if(e.type===`turn-started`){i({...n,activeSeatId:e.seatId,currentTurnCardId:null});
return}if(e.type===`cards-used`||e.type===`spell-targeted`&&e.cardIds.length){let t=e.cardIds[e.cardIds.length-1];i({...n,lastPlayerCardId:t,currentTurnCardId:e.seatId===n.activeSeatId?t:n.currentTurnCardId})}});return{getSnapshot:()=>n,setDisplayMode(e){(e===`player`||e===`current`)&&i({...n,
displayMode:e})},subscribe(e){return r.add(e),e(n),()=>r.delete(e)},clear(){a(),r.clear(),n=wf(Cf(n.displayMode))}}}function Cf(e){return{displayMode:e,activeSeatId:null,lastPlayerCardId:null,currentTurnCardId:null}}function wf(e){return Object.freeze({...e,
displayedCardId:e.displayMode===`current`?e.currentTurnCardId:e.lastPlayerCardId})}function Tf(e,t){return e.displayMode===t.displayMode&&e.activeSeatId===t.activeSeatId&&e.lastPlayerCardId===t.lastPlayerCardId&&e.currentTurnCardId===t.currentTurnCardId}function Ef(e,
t){let n=!1;return e.subscribe(e=>{e.inGame!==n&&(n=e.inGame,t.publish({type:e.inGame?`game-started`:`game-ended`}))})}var Df=new Set([`MsgGameTurnNtf`]),Of=new Set([`GsCGamephaseNtf`]),kf=new Set([`PubGsCUseCard`,`PubGsCUseSpell`]),Af=`PubGsCMoveCard`,
jf=`ClientHappyGetFriendHandcardRep`,Mf=`GsCRoleOptTargetNtf`,Nf=`CGsRoleSpellOptRep`,Pf=`SmsgGamePlayerDead`,Ff=`PubGsCUseSpell`,If=`GsCUpdateRoleDataExNtf`,Lf=`GsCTriggerSpellNew`,Rf=`MsgGamePlayCardNtf`,zf=new Set([`MsgGameOver`,`decodeMsgGameOver`,
`ClientLeavetableRep`,`ClientLeaveTableRep`]),Bf=1,Vf=[`SeatID`,`SeatId`,`seatID`,`seatId`,`SrcSeatID`,`SrcSeatId`,`FromSeatID`,`FromSeatId`],Hf=[`SrcSeatID`,`SrcSeatId`,`srcSeatID`,`srcSeatId`],Uf=[`targetSeatID`,`TargetSeatID`,`targetSeatId`,
`TargetSeatId`,`DestSeatID`,`DestSeatId`],Wf=[`CardID`,`CardId`,`cardID`,`cardId`],Gf=[`CardIDs`,`CardIds`,`cardIDs`,`cardIds`,`Cards`];function Kf(e){let t=up(e);if(!t)return[];let n=mp(t,[`ClassName`,`className`]);if(!n)return[];if(n===`decodeMsgGameStart`||n===`MsgGameStart`)return[{type:`game-started`,
freshGame:!0}];if(n===`MsgReconnectGame`)return[{type:`game-reconnected`}];if(/shuffle|reshuffle|洗牌/i.test(n))return[{type:`deck-shuffled`}];if(zf.has(n))return[{type:`game-ended`}];if(n===`GsCUpdateHpNtf`){let e=qf(t);return e?[e]:[]}let r=Jf(t);
if(r)return[r];if(n===Mf){let e=tp(t);return e?[e]:[]}if(n===Nf)return np(t);if(n===If)return[Xf(t),Zf(t)].filter(e=>e!==null);if(n===Rf){let e=bp(t.ProtoObj),n=t.CardList??t.cardList??e?.CardList??e?.cardList,r=xp(n)?Array.from(n,Number).filter(e=>Number.isInteger(e)&&e>0):[];
return r.length?[{type:`card-list-ready`,cardIds:r}]:[]}if(n===Lf){let e=Qf(t);return e?[e]:[]}let i=$f(t,n);return Of.has(n)?[i,Yf(t)].filter(e=>e!==null):i?[i]:[]}function qf(e){let t=R(e,[`SpellID`,`SpellId`,`spellID`,`spellId`]),n=gp(e,[`SeatID`,
`SeatId`,`seatID`,`seatId`,`DestSeatID`,`DestSeatId`]),r=_p(e,[`Damage`,`damage`]);return t===null||n===null||r===null||r<=0?null:{type:`spell-damage-resolved`,seatId:n,spellId:t,damage:r}}function Jf(e){let t=bp(bp(bp(e.Protocol)?.Data??e.Data)?.ProtoObj??e.ProtoObj),
n=R(t??{},[`error_id`,`ErrorID`,`errorId`]);if(!t||n!==0&&n!==1)return null;let r=gp(t,[`seat_id`,`SeatID`,`seatId`]),i=t.card_list??t.CardList??t.cardList;return r===null||!xp(i)?null:{type:`friend-hand-tags-updated`,seatId:r,cardIds:Array.from(i,
Number).filter(e=>Number.isInteger(e)&&e>0)}}function Yf(e){let t=gp(e,[...Vf,`CurrentID`,`CurrentId`,`currentID`,`currentId`]),n=R(e,[`Round`,`round`]);return t===null||n===null?null:{type:`phase-changed`,seatId:t,phase:n}}function Xf(e){let t=R(e,[`DataID`,
`DataId`,`dataID`,`dataId`]),n=e.Datas??e.datas;if(t!==Bf||!Array.isArray(n)||n.length<3)return null;let r=gp(e,Vf),i=Number(n[1]),a=Number(n[2]);return r===null||!Number.isFinite(a)?null:{type:`sha-count-updated`,seatId:r,used:Number.isFinite(i)?i:0,
limit:a}}function Zf(e){if(e.IsSpell!==!0&&e.isSpell!==!0)return null;let t=R(e,[`DataID`,`DataId`,`dataID`,`dataId`]),n=e.Datas??e.datas,r=gp(e,Vf);return t===null||r===null||!Array.isArray(n)?null:{type:`spell-data-updated`,seatId:r,dataId:t,
datas:n.map(Number)}}function Qf(e){let t=gp(e,[`TriggerSeatId`,`TriggerSeatID`,`triggerSeatId`,`triggerSeatID`]),n=e.TriggerSpellData??e.triggerSpellData;if(t===null||!Array.isArray(n))return null;let r=n.map(e=>R((e&&typeof e==`object`?e:null)??{},[`SpellId`,
`SpellID`,`spellId`,`spellID`])).filter(e=>e!==null&&e>0);return r.length?{type:`spell-triggered`,seatId:t,spellIds:r}:null}function $f(e,t){if(t===Af)return ep(e);if(Df.has(t))return{type:`turn-started`,seatId:gp(e,[...Vf,`CurrentID`,`CurrentId`,
`currentID`,`currentId`])??0,turnCount:R(e,[`TurnCnt`,`turnCnt`,`Turn`,`turn`,`TurnCount`,`turnCount`])??0,round:R(e,[`Round`,`round`])??0};if(Of.has(t)){let t=gp(e,[...Vf,`CurrentID`,`CurrentId`,`currentID`,`currentId`]),n=R(e,[`Round`,`round`]);
return t===null||n===null||n!==0?null:{type:`turn-started`,seatId:t,turnCount:0,round:0}}let n=gp(e,Vf);if(n===null)return null;let r=R(e,[`StateID`,`StateId`,`stateID`,`stateId`]),i=_p(e,[`Value`,`value`]);if(r!==null&&i!==null)return{type:`seat-state-changed`,
seatId:n,stateId:r,value:i};if(t===Pf)return{type:`player-died`,seatId:n,killerSeatId:gp(e,[`MurderSeatID`,`MurderSeatId`,`murderSeatID`,`murderSeatId`,`KillerSeatID`,`KillerSeatId`])};if(t===Ff){let t=R(e,[`SpellID`,`SpellId`,`spellID`,`spellId`]),
r=cp(e,[`DestSeatIDs`,`DestSeatIds`,`Targets`]),i=fp(e);if(t!==null&&(r.length||i.length))return{type:`spell-targeted`,seatId:n,spellId:t,targetSeatIds:r,cardIds:i,effectIndex:R(e,[`EffectIndex`,`effectIndex`])}}if(t===jf){let t=fp(e);return t.length?{type:`hand-cards-revealed`,
seatId:n,cardIds:t}:null}if(!kf.has(t))return null;let a=fp(e);return a.length?{type:`cards-used`,seatId:n,cardIds:a,source:t===`PubGsCUseSpell`?`use-spell`:`use-card`,useType:R(e,[`UseType`,`useType`]),isSend:e.isSend===!0,fromZone:R(e,[`fromZone`,
`FromZone`])}:null}function ep(e){let t=R(e,[`CardCount`,`cardCount`]),n=R(e,[`MoveType`,`moveType`]);if(!t||!n||e.isSend===!0)return null;let r=R(e,[`FromZone`,`fromZone`])??0,i=R(e,[`ToZone`,`toZone`])??0;return{type:`cards-moved`,cardCount:t,
cardIds:op(e),fromId:ap(R(e,[`FromID`,`FromId`,`fromID`,`fromId`])??0,r),fromZone:r,fromPosition:R(e,[`FromPosition`,`fromPosition`])??0,fromZoneParam:R(e,[`FromZoneParam`,`fromZoneParam`])??0,toId:ap(R(e,[`ToID`,`ToId`,`toID`,`toId`])??0,i),
toZone:i,toPosition:R(e,[`ToPosition`,`toPosition`])??0,toZoneParam:R(e,[`ToZoneParam`,`toZoneParam`])??0,moveType:n,spellId:R(e,[`SpellID`,`SpellId`,`spellID`,`spellId`])??0,srcSeatId:gp(e,Hf)}}function tp(e){let t=R(e,[`SpellID`,`SpellId`,
`spellID`,`spellId`]),n=gp(e,[`SeatID`,`SeatId`,`seatID`,`seatId`])??gp(e,Hf);return t===null||n===null?null:{type:`opt-target`,seatId:n,srcSeatId:gp(e,Hf),targetSeatId:R(e,Uf),spellId:t,param:R(e,[`Param`,`param`])??0,params:rp(e,[`Params`,
`params`]),cardIds:rp(e,[`CardIDs`,`CardIds`,`cardIDs`,`cardIds`]),optType:R(e,[`Type`,`type`])}}function np(e){let t=gp(e,Vf),n=R(e,[`SpellID`,`SpellId`,`spellID`,`spellId`]);if(t===null||n===null)return[];let r=[{type:`spell-opt-rep`,seatId:t,
spellId:n,optType:R(e,[`Type`,`type`])??0,datas:rp(e,[`Datas`,`datas`])}],i=sp(e,[`Args`,`args`,`Params`,`params`,`Param`,`param`,`Values`,`values`,`Result`,`result`]);return(i.length===1||i.length===3)&&r.push({type:`temporary-cards-reordered`,
seatId:t,spellId:n,zoneParam:R(e,[`ZoneParam`,`TempZoneParam`,`ToZoneParam`,`toZoneParam`]),trace:i}),r}function rp(e,t){for(let n of t){let t=e[n];if(Array.isArray(t))return t.map(yp).filter(lp)}return[]}var ip=new Set([0,1,2,3,9,12]);function ap(e,
t){return e===0&&ip.has(t)?255:e}function op(e){for(let t of Gf){let n=e[t];if(Array.isArray(n))return n.map(e=>{let t=bp(e);return t?R(t,Wf)??0:yp(e)??0})}for(let t of Wf){let n=yp(e[t]);if(n!==null)return[n]}return[]}function sp(e,t){for(let n of t){let t=e[n];
if(!Array.isArray(t))continue;let r=t.map(yp).filter(lp);if(r.length===t.length)return r}return[]}function cp(e,t){for(let n of t){let t=e[n];if(Array.isArray(t))return t.map(e=>yp(e)).filter(e=>e!==null&&e<255)}return[]}function lp(e){return e!==null}function up(e){for(let t=e.length-1;
t>=0;--t){let n=bp(e[t]);if(n&&mp(n,[`ClassName`,`className`]))return n}return null}function dp(e){let t=up(e);return t?{payload:t,className:mp(t,[`ClassName`,`className`])}:null}function fp(e){let t=[];for(let n of Gf){let r=e[n];Array.isArray(r)&&r.forEach(e=>pp(t,
e))}for(let n of Wf)pp(t,e[n]);return[...new Set(t)]}function pp(e,t){let n=bp(t),r=n?hp(n,Wf):vp(t);r!==null&&e.push(r)}function mp(e,t){for(let n of t)if(typeof e[n]==`string`)return e[n];return``}function hp(e,t){for(let n of t){let t=vp(e[n]);
if(t!==null)return t}return null}function gp(e,t){for(let n of t){let t=yp(e[n]);if(t!==null&&t<255)return t}return null}function R(e,t){for(let n of t){let t=yp(e[n]);if(t!==null)return t}return null}function _p(e,t){for(let n of t){let t=Number(e[n]);
if(Number.isFinite(t))return t}return null}function vp(e){let t=Number(e);return Number.isInteger(t)&&t>0?t:null}function yp(e){let t=Number(e);return Number.isInteger(t)&&t>=0?t:null}function bp(e){return typeof e==`object`&&e?e:null}function xp(e){return Array.isArray(e)||ArrayBuffer.isView(e)||bp(e)!==null&&Number.isInteger(e.length)}function Sp(e,
t=window,n={}){let r=Cp((...t)=>{if(n.mutateMessage){let e=dp(t);if(e)try{n.mutateMessage(e.payload,e.className)}catch(e){console.warn(`[xiaochao] 协议改写失败`,e)}}Kf(t).forEach(t=>e.publish(t))});return()=>{r.restore()}}function Cp(e){let t=Object.getOwnPropertyDescriptor(console,
`log`),n=console.log,r=(...t)=>(e(...t),typeof n==`function`?n.apply(console,t):void 0);try{Object.defineProperty(console,"log",{configurable:!0,enumerable:t?.enumerable??!0,get:()=>r,set:e=>{n=e}})}catch{return{restore:()=>void 0}}return{restore(){if(console.log===r)try{t?Object.defineProperty(console,
"log",t):delete console.log}catch{}}}}var wp=255,Tp=1,Ep=2,Dp=65280,Op=0,kp=65282,Ap=`XC::vueDeckRecordSnapshot`,jp=108e5;function Mp(e,t=zp(),n=null){let r=Vp(t),i=!!r,a=r?.movements.at(-1)?.sequence??0,o=0,s=0,c=[],l=0,u=Lp(r?{...r,currentTurnDiscardCardIds:[],
currentTurnHiddenDiscardCount:0,currentTurnCount:0,currentRound:0}:Rp()),d=new Set,f=(e={})=>{u=Lp({movements:e.movements??[...u.movements],discardCardIds:e.discardCardIds??[...u.discardCardIds],hiddenDiscardCount:e.hiddenDiscardCount??u.hiddenDiscardCount,
currentTurnDiscardCardIds:c.filter(e=>e.turnCount===o&&e.round===s).map(e=>e.cardId),currentTurnHiddenDiscardCount:l,currentTurnCount:o,currentRound:s,deckTopCardIds:e.deckTopCardIds??[...u.deckTopCardIds],deckBottomCardIds:e.deckBottomCardIds??[...u.deckBottomCardIds],...p()}),
Bp(t,u),d.forEach(e=>e(u))};function p(){if(!n)return{};let{top:e,bottom:t}=n.getDrawPile();return{deckTopCardIds:[...e],deckBottomCardIds:[...t]}}let m=n?.subscribe(()=>{let{top:e,bottom:t}=n.getDrawPile();Pp(e,u.deckTopCardIds)&&Pp(t,u.deckBottomCardIds)||f()}),
h=()=>{c=[],l=0},g=e.subscribe(e=>{if(e.type===`game-started`&&i){i=!1;return}if(e.type===`game-started`||e.type===`game-ended`){i=!1,a=0,o=0,s=0,h(),u=Lp(Rp()),Bp(t,u),d.forEach(e=>e(u));return}if(e.type===`turn-started`){e.turnCount>0?(o=e.turnCount,
s=0):s+=1,h(),f();return}if(e.type!==`cards-moved`)return;let n=Np(++a,e),r=[...u.discardCardIds],p=u.hiddenDiscardCount,m=[...u.deckTopCardIds],g=[...u.deckBottomCardIds];if(e.fromId===wp&&e.fromZone===Tp&&Kp(m,g,e.fromPosition,e.cardCount,
e.cardIds),e.fromId===wp&&e.fromZone===Ep){let t=Fp(r,e.cardIds);p=Math.max(0,p-Math.max(0,e.cardCount-t));let n=Ip(c,e.cardIds,o,s);l=Math.max(0,l-Math.max(0,e.cardCount-n))}if(e.toId===wp&&e.toZone===Ep){let t=e.cardIds.filter(e=>e>0);r.push(...t),
p+=Math.max(0,e.cardCount-t.length);for(let e of t)c.push({cardId:e,turnCount:o,round:s});l+=Math.max(0,e.cardCount-t.length),c=c.slice(-160)}e.toId===wp&&e.toZone===Tp&&Gp(m,g,e.toPosition,e.cardCount,e.cardIds),f({movements:[...u.movements,
n].slice(-120),discardCardIds:r.slice(-160),hiddenDiscardCount:p,deckTopCardIds:m,deckBottomCardIds:g})});return{getSnapshot:()=>u,subscribe(e){return d.add(e),e(u),()=>d.delete(e)},clear(){g(),m?.(),d.clear(),a=0,o=0,s=0,h(),u=Lp(Rp());try{t?.removeItem(Ap)}catch{}}}}function Np(e,
t){return{sequence:e,cardCount:t.cardCount,cardIds:[...t.cardIds],fromId:t.fromId,fromZone:t.fromZone,fromPosition:t.fromPosition,fromZoneParam:t.fromZoneParam,toId:t.toId,toZone:t.toZone,toPosition:t.toPosition,toZoneParam:t.toZoneParam,moveType:t.moveType}}function Pp(e,
t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Fp(e,t){let n=0;for(let r of t){if(r<=0)continue;let t=e.lastIndexOf(r);t<0||(e.splice(t,1),n+=1)}return n}function Ip(e,t,n,r){let i=0;for(let a of t)if(!(a<=0))for(let t=e.length-1;
t>=0;--t){let o=e[t];if(o.cardId===a&&o.turnCount===n&&o.round===r){e.splice(t,1),i+=1;break}}return i}function Lp(e){return e.movements.forEach(e=>{Object.freeze(e.cardIds),Object.freeze(e)}),Object.freeze(e.movements),Object.freeze(e.discardCardIds),
Object.freeze(e.currentTurnDiscardCardIds),Object.freeze(e.deckTopCardIds),Object.freeze(e.deckBottomCardIds),Object.freeze(e)}function Rp(){return{movements:[],discardCardIds:[],hiddenDiscardCount:0,currentTurnDiscardCardIds:[],currentTurnHiddenDiscardCount:0,
currentTurnCount:0,currentRound:0,deckTopCardIds:[],deckBottomCardIds:[]}}function zp(){try{return typeof window>`u`?null:window.sessionStorage}catch{return null}}function Bp(e,t){if(e)try{e.setItem(Ap,JSON.stringify({savedAt:Date.now(),snapshot:{...t,
currentTurnDiscardCardIds:[],currentTurnHiddenDiscardCount:0}}))}catch{}}function Vp(e){if(!e)return null;try{let t=JSON.parse(e.getItem(Ap)||`null`);if(!t||Date.now()-Number(t.savedAt)>jp)return null;let n=t.snapshot;return!n||!Array.isArray(n.movements)?null:{movements:n.movements.filter(e=>e&&typeof e==`object`).slice(-120).map(e=>({sequence:Up(e.sequence),
cardCount:Up(e.cardCount),cardIds:Hp(e.cardIds),fromId:Up(e.fromId),fromZone:Up(e.fromZone),fromPosition:Up(e.fromPosition),fromZoneParam:Up(e.fromZoneParam),toId:Up(e.toId),toZone:Up(e.toZone),toPosition:Up(e.toPosition),toZoneParam:Up(e.toZoneParam),
moveType:Up(e.moveType)})),discardCardIds:Hp(n.discardCardIds).slice(-160),hiddenDiscardCount:Up(n.hiddenDiscardCount),currentTurnDiscardCardIds:[],currentTurnHiddenDiscardCount:0,currentTurnCount:0,currentRound:0,deckTopCardIds:Hp(n.deckTopCardIds),
deckBottomCardIds:Hp(n.deckBottomCardIds)}}catch{return null}}function Hp(e){return Array.isArray(e)?e.map(Number).filter(e=>Number.isInteger(e)&&e>=0):[]}function Up(e){let t=Number(e);return Number.isInteger(t)&&t>=0?t:0}function Wp(e,t){return Array.from({length:Math.max(0,
e)},(e,n)=>Number(t[n])>0?Number(t[n]):0)}function Gp(e,t,n,r,i){let a=Wp(r,i);n===Dp?e.unshift(...a.reverse()):n===Op&&t.push(...a)}function Kp(e,t,n,r,i){if(n===Dp){e.splice(0,Math.max(0,r));return}if(n===Op){t.splice(Math.max(0,t.length-r),
r);return}n===kp&&(Fp(e,i),Fp(t,i))}function qp(){let e=Yp({activeList:null,anchor:null}),t=new Set,n=n=>{e=Yp(n),t.forEach(t=>t(e))};return{getSnapshot:()=>e,setActiveList(t,r){(e.activeList!==t||r?.force)&&n({...e,activeList:t})},setAnchor(t){Jp(e.anchor,
t)||n({...e,anchor:t?{...t}:null})},subscribe(n){return t.add(n),n(e),()=>t.delete(n)},clear(){t.clear(),e=Yp({activeList:null,anchor:null})}}}function Jp(e,t){return e===t?!0:!e||!t?!1:e.left===t.left&&e.top===t.top&&e.width===t.width&&e.height===t.height}function Yp(e){return e.anchor&&Object.freeze(e.anchor),
Object.freeze(e)}var Xp=null;function Zp(e,t=z(I(window))){if(!(e>0)||!t)return null;let n=Qp(t);if(!n||typeof n.GetInstance!=`function`)return null;try{return n.GetInstance.call(n,e)??null}catch{return Xp=null,null}}function Qp(e){if(Xp?.scene===e&&Xp.provider)return Xp.provider;
let t=lm(e);for(let n=z(t)?.constructor;n;n=Object.getPrototypeOf(n))if(typeof n.GetInstance==`function`)return Xp={scene:e,provider:n},n;return Xp=null,null}function $p(e,t,n=93,r=130,i=z(I(window)),a){if(!e||!(t>0)||!i)return null;let o=cm(i),
s=Zp(t,i);if(!o||!s||typeof o.createNormalCardUi!=`function`)return null;let c=null;try{if(c=z(o.createNormalCardUi.call(o,s)),!c||typeof c.Draw!=`function`)return c&&sm({ui:c,owner:o,cardId:t}),null;c.mouseEnabled=!1,c.mouseThrough=!0,c.NeedToolTip=t>0;
let i=Math.max(1,Math.round(n)),l=Math.max(1,Math.round(r));typeof c.SetActualSize==`function`?dm(c,`SetActualSize`,i,l):dm(c,`size`,i,l);let u=Number.isFinite(a?.x)?Number(a.x):0,d=Number.isFinite(a?.y)?Number(a.y):0;dm(c,`pos`,u,d);let f=am(e);
return f?(c.Draw.call(c,f),em(c),{ui:c,owner:o,cardId:t}):(sm({ui:c,owner:o,cardId:t}),null)}catch{return c&&sm({ui:c,owner:o,cardId:t}),null}}function em(e){e.__xcSuppressLabel=!0;let t=z(e.Card)??z(e.card),n=t&&Object.prototype.hasOwnProperty.call(t,
`tagArr1`)?`tagArr1`:t&&Object.prototype.hasOwnProperty.call(t,`TagArr1`)?`TagArr1`:null,r=n&&t?t[n]:void 0;try{t&&n&&(t[n]=[]),dm(e,`AddCardTag`),dm(e,`UpdateTag`),dm(e,`layoutTagUI`)}catch{}finally{t&&n&&(r===void 0?delete t[n]:t[n]=r)}let i=z(e.__xcLabelBtn);
i&&(i.visible=!1)}function tm(){let e=z(z(I(window))?.gameRoundInfo),t=e?.constructor;for(let n=e?Object.getPrototypeOf(e):null;n;n=Object.getPrototypeOf(n)){if(!Object.prototype.hasOwnProperty.call(n,`addDrawChild`)||typeof n.addDrawChild!=`function`||typeof n.constructor!=`function`||t&&n.constructor===t)continue;
let e=nm(n.constructor);if(e)return e}let n=z(z(globalThis.Laya)?.ClassUtils),r=n?.getClass;if(typeof r==`function`)try{let e=nm(r.call(n,`SgsSprite`));if(e)return e}catch{}let i=z(globalThis.Laya)?.Sprite;if(typeof i==`function`){for(let t=e?Object.getPrototypeOf(e):null;
t;t=Object.getPrototypeOf(t))if(typeof t.addDrawChild==`function`)try{let e=z(Object.create(t));if(!e||(i.call(e),typeof e.addDrawChild!=`function`))continue;return rm(e),e}catch{}}return null}function nm(e){if(typeof e!=`function`)return null;
try{let t=z(new e);return!t||typeof t.addDrawChild!=`function`?null:(rm(t),t)}catch{return null}}function rm(e){e.name=`xcOfficialDrawHost`,e.mouseEnabled=!1,e.mouseThrough=!0,dm(z(e.graphics),`clear`);let t=Array.isArray(e._children)?[...e._children]:[];
for(let e of t)try{dm(z(e),`removeSelf`)}catch{}}function im(e){if(!e||typeof e.addDrawChild!=`function`)return!1;if(e.name===`xcOfficialDrawHost`)return!0;for(let t=Object.getPrototypeOf(e);t;t=Object.getPrototypeOf(t))if(Object.prototype.hasOwnProperty.call(t,
`addDrawChild`)&&typeof t.addDrawChild==`function`)return!0;return!1}function am(e){if(im(e))return e;let t=z(e.__xcCardDrawLayer);if(im(t))return(z(t.parent)??z(t._parent))!==e&&dm(e,`addChild`,t),t;let n=tm();return n?(e.__xcCardDrawLayer=n,
n.zOrder=10,dm(e,`addChild`,n),n):null}function om(e){if(!e)return;let t=z(e.__xcCardDrawLayer);if(t){try{dm(t,`removeSelf`),t.name===`xcOfficialDrawHost`&&dm(t,`destroy`,!1)}catch{}e.__xcCardDrawLayer=null}}function sm(e){if(e)try{dm(e.ui,
`clear`),dm(e.ui,`removeSelf`),e.ui.alpha=1,e.ui.mouseEnabled=!0,e.ui.mouseThrough=!1,dm(e.ui,`AddCardTag`),e.ui.Card=null,dm(e.ui,`UpdateTag`),dm(e.owner,`ReturnNormalCardUi`,e.ui)}catch{}}function cm(e){let t=z(z(e.SelfSeatUi)?.cardContainer);
if(t&&typeof t.createNormalCardUi==`function`)return t;for(let t of um(z(e.seatContainer),`seatUIs`).map(z)){let e=z(t?.cardContainer);if(e&&typeof e.createNormalCardUi==`function`)return e}return null}function lm(e){let t=[z(e.SelfSeatUi),...um(z(e.seatContainer),
`seatUIs`).map(z)].filter(Boolean);for(let e of t){let t=z(e.cardContainer);for(let e of[`cardUis`,`cardUIs`,`handCardUis`,`handCardUIs`,`equipCardUis`,`equipCardUIs`,`judgeCardUis`,`judgeCardUIs`,`decideCardUis`,`decideCardUIs`]){let n=um(t,
e)[0];if(n)return z(n)?.Card??z(n)?.card??z(n)?.theCard??n}let n=z(e.seat),r=um(n,`HandCards`)[0]??um(n,`handCards`)[0]??um(n,`handShowCards`)[0];if(r)return r}return null}function um(e,t){return Array.isArray(e?.[t])?e[t]:[]}function dm(e,
t,...n){let r=e?.[t];return typeof r==`function`?r.apply(e,n):void 0}function z(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}var fm=36,pm=22,mm=8,hm=4,gm=12,_m=2,vm=.72,ym=10,bm=740,xm=29,Sm=[`top`,`bottom`,`discard`],
Cm={top:`牌堆顶（左侧最先摸到）`,bottom:`牌堆底（右侧为最底部）`,discard:`本回合弃牌堆`},wm={top:{prefix:`顶`,fill:`rgba(34, 27, 19, 0.94)`,hoverFill:`rgba(46, 36, 24, 0.96)`,border:`rgba(201, 161, 93, 0.58)`,hoverBorder:`#d2b66f`,text:`#E8D4A8`,hoverText:`#FFF3D0`},bottom:{prefix:`底`,
fill:`rgba(34, 30, 22, 0.94)`,hoverFill:`rgba(40, 34, 26, 0.96)`,border:`rgba(176, 150, 104, 0.58)`,hoverBorder:`#c9b07a`,text:`#D8C69C`,hoverText:`#FFF3D0`},discard:{prefix:`弃`,fill:`rgba(42, 26, 22, 0.94)`,hoverFill:`rgba(48, 30, 26, 0.96)`,
border:`#8E6458`,hoverBorder:`#C4785A`,text:`#E2C0B0`,hoverText:`#FFE2D6`}};function Tm(e,t,n,r){let i=!1,a=null,o=null,s=null,c=[],l=null,u=[],d=``,f=0,p=e=>e.filter(e=>e>0&&!ml(r?.resolve(e).name??``)),m=()=>{f&&=(window.clearTimeout(f),0)},
h=()=>{m(),f=window.setTimeout(()=>{f=0,!i&&n.setActiveList(null)},120)},g=()=>{if(u.forEach(e=>sm(e)),u=[],d=``,l){om(l);try{B(l,`removeSelf`),typeof l.addDrawChild!=`function`&&B(l,`destroy`,!1)}catch{}l=null}},_=()=>{m(),g();for(let e of c)try{B(e.visual,
`removeSelf`),B(e.visual,`destroy`,!0),B(e.hit,`removeSelf`),B(e.hit,`destroy`,!0)}catch{}c=[];try{B(s,`removeSelf`),B(s,`destroy`,!0)}catch{}a=o=s=null,n.setAnchor(null),n.setActiveList(null)},v={onEnter(e){m(),n.setActiveList(e)},onLeave:h,
onClick(e){m(),n.setActiveList(e)}},y=()=>{if(!s||s.destroyed){g();return}let r=n.getSnapshot().activeList;if(!r){g();return}let i=t.getSnapshot(),a=e.get(`display.discardSortMode`),o=r===`top`?i.deckTopCardIds:r===`bottom`?i.deckBottomCardIds:Dm(i.currentTurnDiscardCardIds,
a),c=p(o),f=c.filter(Boolean).length,_=`${Cm[r]}${f?` · ${f}张`:``}`,v=`${r}:${a}:${c.join(`,`)}:${_}`;if(l&&d===v)return;g();let y=Em(s,r,c,_,{onEnter:m,onLeave:h});if(!y)return;l=y.popup,u=y.cards,d=v;let b=fm*Sm.length+mm*(Sm.length-1),x=Number(l.width||y.width),
S=Math.max(43,Number(Fm(s.__xcRoundInfo)?.height||43))+_m,C=Math.max(4-Number(s.x||0),b-x);B(l,`pos`,C,S+pm+4)},b=()=>{if(i)return;let r=Fm(I(window)),u=Fm(r?.gameRoundInfo),d=Fm(u?._parent)??u??r;if(!e.get(`display.deckHudEnabled`)||!r||!u||!d||r.destroyed||u.destroyed){_();
return}if(a!==r||o!==d||!s||s.destroyed){_();let e=km(d,u,v);if(!e)return;s=e.root,c=e.buttons,s.__xcRoundInfo=u,a=r,o=d}let f=Math.max(43,Number(u.height||43)),m=fm*Sm.length+mm*(Sm.length-1),h=f+_m;B(s,`pos`,Number(u.x||0),Number(u.y||0)),
B(s,`size`,Math.max(m,Number(l?.width||0)),h+pm+Number(l?.height||0)),s.visible=!0,c.forEach((e,t)=>{let n=t*44;B(e.visual,`pos`,n,h),B(e.hit,`pos`,n,h),e.visual.visible=!0,e.hit.visible=!0});let g=t.getSnapshot();jm(c,{top:g.deckTopCardIds.filter(Boolean).length,
bottom:g.deckBottomCardIds.filter(Boolean).length,discard:p(g.currentTurnDiscardCardIds).length+g.currentTurnHiddenDiscardCount});let b=Pm(s,0,h);b&&n.setAnchor({left:b.x,top:b.y,width:m,height:pm}),y()},x=t.subscribe(b),S=e.subscribe(`display.deckHudEnabled`,
b),C=e.subscribe(`display.discardSortMode`,b),w=n.subscribe(e=>{e.activeList&&m(),y()}),T=window.setInterval(b,250);return b(),()=>{i=!0,window.clearInterval(T),m(),x(),S(),C(),w(),_()}}function Em(e,t,n,r,i){let a=Fm(globalThis.Laya),o=a?.Text;
if(typeof o!=`function`)return null;let s=a?.Sprite;if(typeof s!=`function`)return null;let c=Fm(new s);if(!c)return null;c.name=`xcNativeDeckRecordList`,c.mouseEnabled=!0,c.mouseThrough=!1,c.zOrder=1001;let l=93*vm,u=130*vm,d=n.length>1?Math.max(4,
Math.min(l+7,(720-l)/(n.length-1))):0,f=n.length?Math.min(bm,Math.ceil(20+l+d*(n.length-1))):184,p=n.length?Math.ceil(31+u+ym):54;B(c,`size`,f,p),Om(c,f,p,t);let m=Fm(new o);m.text=r,m.font=`SimSun`,m.fontSize=14,m.color=`#E8D4A8`,m.stroke=1,
m.strokeColor=`#3a2014`,m.align=`left`,m.bold=!1,m.width=f-20,m.height=24,B(m,`pos`,ym,3),B(c,`addChild`,m);let h=[];if(n.length){let e=Fm(I(window));n.forEach((t,n)=>{if(!(t>0))return;let r=$p(c,t,l,u,e,{x:ym+d*n,y:xm});r&&(r.ui.zOrder=10+n,
h.push(r))})}else{let e=Fm(new o);e.text=`暂无已知牌`,e.font=`SimSun`,e.fontSize=13,e.color=`#B7AA8B`,e.align=`center`,e.width=f,e.height=24,B(e,`pos`,0,25),B(c,`addChild`,e)}let g=Fm(a?.Event);return B(c,`on`,g?.ROLL_OVER??`mouseover`,c,i.onEnter),
B(c,`on`,g?.ROLL_OUT??`mouseout`,c,i.onLeave),B(e,`addChild`,c),{popup:c,cards:h,width:f,buttonRowOffset:28}}function Dm(e,t){return[...e]}function Om(e,t,n,r){let i=wm[r],a=Fm(e.graphics);B(a,`clear`);try{B(a,`drawPath`,0,0,[[`moveTo`,hm,0],[`arcTo`,
t,0,t,n,hm],[`arcTo`,t,n,0,n,hm],[`arcTo`,0,n,0,0,hm],[`arcTo`,0,0,hm,0,hm],[`closePath`]],{fillStyle:`rgba(29, 23, 18, 0.97)`},{strokeStyle:i.border,lineWidth:1})}catch{B(a,`drawRect`,0,0,t,n,`rgba(29, 23, 18, 0.97)`,i.border,1)}}function km(e,
t,n){let r=Fm(Fm(globalThis)?.Laya)?.Sprite;if(typeof r!=`function`)return null;let i=Fm(new r);if(!i)return null;i.name=`xcNativeDeckRecordOverlay`,i.mouseEnabled=!0,i.mouseThrough=!0,i.zOrder=Math.max(100,Number(t.zOrder||0)+2),B(e,`addChild`,
i);let a=[];for(let[e,t]of Sm.entries()){let r=Am(t,e,i,n);if(!r){try{B(i,`removeSelf`),B(i,`destroy`,!0)}catch{}return null}a.push(r)}return{root:i,buttons:a}}function Am(e,t,n,r){let i=Fm(globalThis.Laya),a=i?.Sprite,o=i?.Text;if(typeof a!=`function`||typeof o!=`function`)return null;
let s=wm[e],c=Fm(new a);c.name=`xcNativeDeckRecordButton-${e}`,c.mouseEnabled=!1,c.mouseThrough=!0,c.zOrder=120+t,B(c,`size`,fm,pm),Mm(c,s,!1);let l=Fm(new o);l.name=`xcNativeDeckRecordButtonLabel-${e}`,l.font=`SimSun`,l.bold=!0,l.align=`center`,
l.valign=`middle`,l.color=s.text,l.fontSize=gm,l.width=fm,l.height=pm,l.text=`${s.prefix} 0`,B(l,`pos`,0,0),B(c,`addChild`,l);let u=Fm(new a);u.name=`xcNativeDeckRecordButtonHit-${e}`,u.mouseEnabled=!0,u.mouseThrough=!1,u.zOrder=130+t,B(u,`size`,
fm,pm);let d=Fm(i?.Event),f={kind:e,visual:c,hit:u,label:l,hover:!1};return B(u,`on`,d?.ROLL_OVER??`mouseover`,u,()=>{f.hover=!0,Mm(c,s,!0),l.color=s.hoverText,r.onEnter(e)}),B(u,`on`,d?.ROLL_OUT??`mouseout`,u,()=>{f.hover=!1,Mm(c,s,!1),l.color=s.text,
r.onLeave()}),B(u,`on`,d?.CLICK??`click`,u,()=>r.onClick(e)),B(n,`addChild`,c),B(n,`addChild`,u),f}function jm(e,t){for(let n of e){let e=wm[n.kind],r=`${e.prefix} ${Math.max(0,t[n.kind]||0)}`;n.label.text!==r&&(n.label.text=r),n.hover||(n.label.color=e.text)}}function Mm(e,
t,n){let r=Fm(e.graphics);B(r,`clear`),Nm(r,fm,pm,n?t.hoverFill:t.fill,n?t.hoverBorder:t.border)}function Nm(e,t,n,r,i){if(!e)return;let a=Math.min(hm,t/2,n/2);try{B(e,`drawPath`,0,0,[[`moveTo`,a,0],[`arcTo`,t,0,t,n,a],[`arcTo`,t,n,0,n,a],[`arcTo`,0,
n,0,0,a],[`arcTo`,0,0,a,0,a],[`closePath`]],{fillStyle:r},{strokeStyle:i,lineWidth:1})}catch{B(e,`drawRect`,0,0,t,n,r,i,1)}}function Pm(e,t,n){if(!e||typeof e.localToGlobal!=`function`)return{x:Number(e?.x||0)+t,y:Number(e?.y||0)+n};try{let r=Fm(Fm(globalThis)?.Laya)?.Point,
i=typeof r==`function`?new r(t,n):{x:t,y:n},a=Fm(e.localToGlobal.call(e,i,!1));return a?{x:Number(a.x||0),y:Number(a.y||0)}:null}catch{return null}}function B(e,t,...n){let r=e?.[t];return typeof r==`function`?r.apply(e,n):void 0}function Fm(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function Im(e,
t=window){let n=e.get(`display.countdownEnabled`),r=new Map,i=null,a=()=>{if(!n){for(let e of r.values())Gm(e);r.clear(),i=null;return}let e=t.Laya?.stage;if(!e)return;let a=new Set,o=[];Km(e,t=>{Vm(t)&&(Um(t,r.get(t)),Lm(t,e)&&o.push(t))});
let s=i&&o.includes(i)?i:Rm(o,e);if(i=s,s){a.add(s);let e=r.get(s);e||(e=Hm(t),e&&(e.visible=!1,s.addChild?.(e),r.set(s,e))),e&&Wm(e,s.RemainValue)}for(let[e,t]of r)a.has(e)||(Gm(t),r.delete(e));s||(i=null)},o=e.subscribe(`display.countdownEnabled`,({value:e})=>{n=!!e,
a()}),s=t.setInterval(a,250);return a(),()=>{window.clearInterval(s),o(),r.forEach(Gm),r.clear()}}function Lm(e,t){let n=e,r=0;for(;n&&r++<20;){if(n.destroyed===!0||n.visible===!1||Number(n.alpha??1)<=0)return!1;if(n===t)return!0;n=n.parent}return!1}function Rm(e,
t){if(!e.length)return null;let n=Number(t.width)||1920,r=e.filter(e=>{let t=Bm(e),r=Math.max(0,Number(e.width??0)),i=Math.max(0,Number(e.height??0));return t.x>=Math.max(100,n*.2)&&t.x<=n*.75&&t.y>=0&&r>=120&&i>0});return r.length?[...r].sort((e,
t)=>zm(t,n)-zm(e,n))[0]:null}function zm(e,t){let n=Bm(e),r=Math.max(0,Number(e.width??0)),i=n.x+r/2;return-Math.max(0,n.y)*4-Math.abs(i-t/2)*.25}function Bm(e){if(typeof e.localToGlobal==`function`)try{let t=e.localToGlobal({x:0,y:0},!0);if(Number.isFinite(t?.x)&&Number.isFinite(t?.y))return{x:Number(t.x),
y:Number(t.y)}}catch{}let t=0,n=0,r=1,i=e,a=0;for(;i&&a++<20;)t+=Number(i.x??0)*r,n+=Number(i.y??0),r*=Number(i.scaleX??1)||1,i=i.parent;return{x:t,y:n}}function Vm(e){return typeof e.RemainValue==`number`&&Number.isFinite(e.RemainValue)&&typeof e.addChild==`function`}function Hm(e){let t=e.Laya,
n=[t?.ClassUtils?.getClass?.(`SgsText`),t?.ClassUtils?.getClass?.(`SgsLabel`),t?.Label,t?.Text].filter(e=>!!e);for(let e of n)try{let t=new e;return t.labelSize=17,t.fontSize=17,t.color=`#f2de9c`,t.mouseEnabled=!1,t.zOrder=1e3,t.name=`xiaochao-countdown-seconds`,
t.__xiaochaoCountdownSeconds=!0,t}catch{}return null}function Um(e,t){let n=Array.isArray(e._children)?e._children:[];for(let e of n){let n=e;n!==t&&(n.__xiaochaoCountdownSeconds===!0||n.name===`xiaochao-countdown-seconds`)&&Gm(n)}}function Wm(e,
t){let n=Math.max(0,t).toFixed(0);e.visible=!0,e.__xiaochaoCountdownValue!==n&&(e.__xiaochaoCountdownValue=n,`label`in e?e.label=n:e.text=n)}function Gm(e){try{e.removeSelf?.(),e.destroy?.(!0)}catch{}}function Km(e,t){let n=[e],r=new Set;for(;
n.length>0&&r.size<5e3;){let e=n.pop();if(e&&!r.has(e)){if(r.add(e),t(e),Array.isArray(e._children)){n.push(...e._children);continue}if(typeof e.numChildren==`number`&&typeof e.getChildAt==`function`)for(let t=0;t<e.numChildren;t+=1){let r=e.getChildAt(t);
r&&n.push(r)}}}}function qm(e,t=window){let n=e.get(`display.cardLabelsEnabled`),r=new Set,i=()=>{let e=Jm(t);e.forEach(s),e.forEach(Ym)},a=e.subscribe(`display.cardLabelsEnabled`,({value:e})=>{n=e,i()});i();let o=t.setInterval(i,1e3);return()=>{a(),
t.clearInterval(o);for(let e of r)if(Object.getOwnPropertyDescriptor(e.prototype,`AddCardTag`)?.value===e.patchedMethod)try{Object.defineProperty(e.prototype,"AddCardTag",e.originalDescriptor)}catch{}r.clear()};function s(e){let t=Object.getPrototypeOf(e);
for(;t&&!Object.prototype.hasOwnProperty.call(t,`AddCardTag`);)t=Object.getPrototypeOf(t);if(!t||Xm(r,t))return;let i=Object.getOwnPropertyDescriptor(t,`AddCardTag`);if(!i||typeof i.value!=`function`)return;let a=function(...e){let t=String(e[0]??``),
r=n&&t===`炁`?`AddCardTag2`:`__AddCardTag`,a=this[r];return typeof a==`function`?a.apply(this,e):i.value.apply(this,e)};try{Object.defineProperty(t,"AddCardTag",{...i,value:a}),r.add({prototype:t,originalDescriptor:i,patchedMethod:a})}catch{}}}function Jm(e){let t=Zm(Zm(I(e)?.SelfSeatUi)?.cardContainer);
if(!t)return[];for(let e of[`cardUis`,`cardUIs`,`handCardUis`,`handCardUIs`])if(Array.isArray(t[e]))return t[e].map(Zm).filter(Qm);return[]}function Ym(e){for(let t of[`UpdateTag`,`updateTag`]){let n=e[t];if(typeof n==`function`){try{n.call(e)}catch{}return}}}function Xm(e,
t){for(let n of e)if(n.prototype===t)return!0;return!1}function Zm(e){return typeof e==`object`&&e?e:null}function Qm(e){return e!==null}var $m=`__xcGeneralTip_`;function eh(e){let{key:t,targets:n,enabled:r,getText:i,globalObject:a=window,style:o}=e;
if(t)for(let e of n){let n=ah(e.seatAvatar);if(!n)continue;let s=r?String(i(e)||``):``,c=`${$m}${t}`,l=oh(n[c]);if(l||s){if(!l){let e=a.Laya?.Text;if(!e)continue;l=new e,l.name=`xcGeneralCardTip-${t}`,l.leading=0,l.mouseEnabled=!1,l.zOrder=999,
n[c]=l,rh(l,n,o);let r=n.addChild;typeof r==`function`&&r.call(n,l)}rh(l,n,o),l.text!==s&&(l.text=s),l.visible=!!s}}}function th(e,t){let n=`${$m}${t}`;for(let t of e){let e=ah(t.seatAvatar);if(!e)continue;let r=oh(e[n]);if(r){try{r.removeSelf?.(),
r.destroy?.(!0)}catch{}delete e[n]}}}function nh(e){return Array.isArray(e)?e.map(e=>{let t=ah(e);return{seat:t?.seat??t,seatAvatar:ah(t?.seatAvatar)??null}}):[]}function rh(e,t,n){e.fontSize=n?.fontSize??12,e.color=n?.color??`#FFFFFF`,e.stroke=n?.stroke??2,
e.strokeColor=n?.strokeColor??`#000000`,e.align=n?.align??`right`,e.bold=n?.bold??!1,e.bgColor=n?.bgColor;let r=n?.place?.(t)??ih(t);e.width=r.width,e.height=r.height,e.pos?.(r.x,r.y)}function ih(e){let t=Number(e.width)||0;return{x:Math.max(0,
t-70-15),y:40,width:70,height:90}}function ah(e){return e&&typeof e==`object`?e:null}function oh(e){return e&&typeof e==`object`?e:null}function sh(e,t){let n=Number(e);return!Number.isFinite(n)||n<4e9?0:t?2:1}function ch(e){return sh(e,!1)!==0}function lh(e,
t=window){let n=``,r=0,i=e.subscribe(e=>{(e.type===`game-started`||e.type===`game-ended`)&&(n=``)}),a=t.setInterval(o,500);return o(),()=>{i(),t.clearInterval(a)};function o(){try{s(),c(),l()}catch{}}function s(){th(nh(vh(vh(I(t))?.seatContainer)?.seatUIs),
`player-id`)}function c(){let e=vh(I(t));if(!e){n=``;return}let r=gh(e).map(e=>({seatUi:e,seat:vh(e.seat)})).filter(e=>e.seat&&e.seat.isHide!==!0);for(let{seatUi:e,seat:t}of r){let n=vh(t?.playerInfo)??vh(t?.PlayerInfo),r=n?.ClientId??n?.clientId;
if(r==null||r===``)continue;let i=vh(e.otherTopManager),a=typeof i?.SetPlayNameVisible==`function`?i.SetPlayNameVisible:null;a&&a.call(i,Number(r)<4e9)}if(mh(e,t))return;let i=r.map(({seat:e})=>ph(e)).filter(e=>e.kind!==0).map(e=>e.id);if(!i.length)return;
let a=i.sort().join(`,`);a!==n&&(n=a,yu(`对战AI小杀！`,`warning`,4e3))}function l(){uh(t,u);let e=dh(t);if(!e){r=0;return}let n=Number(e.userData&&e.userData.ClientId);if(!Number.isFinite(n))return;let i=vh(e.result7Btn);if(i&&(i.visible=n<4e9),!ch(n)){r=0;
return}u(n)}function u(e){ch(e)&&r!==e&&(r=e,yu(`小抄: 这是个人机`,`warning`,5e3))}}function uh(e,t){let n=vh(vh(e.Laya)?.ClassUtils),r=n?.getClass;if(typeof r!=`function`)return;let i=null;try{i=r.call(n,`UserInfoView`)}catch{return}let a=i?.prototype,
o=a?.onWinInfo;if(!a||typeof o!=`function`||o.__xcAiProfileWrapped===!0)return;let s=function(...e){let n=o.apply(this,e),r=Number(this.userData&&this.userData.ClientId);ch(r)&&t(r);let i=vh(this.result7Btn);return i&&Number.isFinite(r)&&(i.visible=r<4e9),
n};s.__xcAiProfileWrapped=!0;try{Object.defineProperty(a,"onWinInfo",{configurable:!0,writable:!0,value:s})}catch{}}function dh(e){let t=vh(vh(e.Laya)?.stage);if(!t)return null;let n=_h(t).filter(e=>[4,5,6].includes(Number(e.layerOrder))),r=0;
for(let e of n){let t=fh(e,0,()=>r++<4e3);if(t)return t}return null}function fh(e,t,n){if(t>16||e.destroyed===!0||e.visible===!1||!n())return null;if((typeof e.constructor==`function`?e.constructor.name:``)===`UserInfoView`||e.name===`UserInfoView`)return e;
for(let r of _h(e)){let e=fh(r,t+1,n);if(e)return e}return null}function ph(e){let t=vh(e?.playerInfo)??vh(e?.PlayerInfo),n=t?.ClientId??t?.clientId;return{kind:sh(n,t?.IsNormalRobot),id:String(n??``)}}function mh(e,t){let n=typeof e.constructor==`function`?e.constructor.name:``,
r=String(e.sceneName??e.name??n);return r.includes(`Rogue`)||r.includes(`山河`)?!0:hh(e,t).includes(`山河图`)}function hh(e,t){let n=[e.modeName,e.ModeName,e.gameModeName],r=vh(t.GameContext);try{let e=typeof r?.GetModeVO==`function`?vh(r.GetModeVO()):null;
n.push(e?.ModeName,e?.modeName,e?.Name,e?.name)}catch{}return n.filter(e=>typeof e==`string`).join(` `)}function gh(e){let t=vh(e.seatContainer),n=t?.seatUIs??t?.seatUis;return Array.isArray(n)?n.map(vh).filter(e=>e!==null):[]}function _h(e){let t=[e._children,
e.children],n=[];for(let e of t)if(Array.isArray(e))for(let t of e){let e=vh(t);e&&n.push(e)}return n}function vh(e){return typeof e==`object`&&e?e:null}var yh={ActivityGameDataManager:[`RksSWJGDataNtf`],ActivityManager:[`ClientJDInfoNtf`],
BlessManager:[`ClientQifuRankRep`],ChatSysNewsManager:[`decodeSSCChatmsgNtf`,`ServerProxy`,`timeOutNoticeId`],GameGeneralManager:[`ClientGeneralFromRep`],GameGoodsManager:[`DbsCcMovegoodsRep`],GameShopManager:[`CcGoodsPriceRep`],GeneralSkinManager:[`ClientSkinFromRep`],
MailManager:[`decodeClientGetMailNtf`],NewFuLiManager:[`decodeSetOutGiftInfoResp`],OfficerManager:[`ClientOfficerInfoRep`],RogueLikePveManager:[`decodeRogueLikeDataSync`],TaskManager:[`SmsgTaskFailed`],TaskRedDotManager:[`EXCHANGE_RED_VIEW_FIRST_UPDATE`,
`ActivityManager`],UserInfoManger:[`ClientTTRankInfoRep`],WelfareManger:[`ClientLotteryRep`],WindowManager:[`HIDE_WINDOW`,`GameEventDispatcher`]},bh={ActivityManager:{SendGetWyqjTiyanCardReq:`CLIENT_NEWBIE_WANT_STRONG_GENERAL_EXPERIENCE_CARD_REQ`},
GameEventDispatcher:{ShowWindow:`弹窗被功能关闭拦截`},GameShopManager:{BuySingleItem:[`triggerTask`,`extraOperate`,`DealPassId`]},TaskManager:{RequestTaskAward:`TaskRewardSelectWindow`,GetAllTaskDataByTaskID:`GetNoGetTaskDataByTaskID`}},xh=[`BottomLayer`,
`BackgroundLayer`,`SceneLayer`,`AnimationLayer`,`WindowLayer`,`TopUILayer`,`PromptLayer`];function Sh(e=window){let t=new Map;function n(){return Ld(e)}function r(e){let a=t.get(e);if(a)return a;let o=e===`ServerProxy`?Eh(r(`WindowManager`)?.proxy):e===`GameEventDispatcher`?n():i(e);
return o&&t.set(e,o),o}function i(e){let t=yh[e];if(!t)return null;let[n,i=`ServerProxy`,a]=t,o=Eh(r(i)?._events)?.[n];for(let e of Array.isArray(o)?o:[o]){let t=Eh(Eh(e)?.caller);if(t&&(!a||a in t))return t}return null}function a(e){let t=Eh(r(`WindowManager`)?.constructor)?.managerList;
if(!Array.isArray(t))return null;for(let n of t){let t=Eh(n);if(t&&e(t))return t}return null}function o(){return Eh(Id(e)?.CurrentScene)}function s(){return Id(e)?.IsGameScene?o():null}function c(){let t=[e.GameContext,e.Laya?.Browser?.window?.GameContext];
for(let e of t){let t=Eh(e);if(typeof t?.GetModeVO==`function`||typeof t?.CanOperationInGame==`function`)return t}return null}function l(){let t=Eh(s()?.SelfSeatUi),n=t?.getEffectType;if(typeof n==`function`)try{let e=wh(Eh(n.call(t,2)));if(e)return e}catch{}let r=Th(Eh(e.Laya?.stage)??{});
for(let e=0;e<r.length&&e<Ch;e+=1){let t=wh(r[e],!0);if(t)return t;r.push(...Th(r[e]))}return null}function u(t){try{let n=e.Laya?.ClassUtils?.getClass?.(t);return Eh(n?.prototype)}catch{return null}}function d(t){try{let n=Eh(Eh(e.Laya)?.ClassUtils),
r=n?.getInstance,i=typeof r==`function`?Eh(r.call(n,t)):null;return typeof i?.Init==`function`&&i.Init(),i}catch{return null}}function f(t){let n=Eh(e.Laya?.stage);return n?Th(n).find(e=>e.layerOrder===xh.indexOf(t))??null:null}function p(t,
n){let r=Eh(e.Laya?.stage);return r?Th(r).filter(e=>e.layerOrder===xh.indexOf(t)).flatMap(e=>Th(e).filter(e=>e.name===n||e.sceneName===n||Eh(e.constructor)?.name===n)):[]}function m(e){return p(`WindowLayer`,e)}function h(e){let t=Eh(r(`WindowManager`)?.WindowInstanceDict),
n=t?.get;if(typeof n==`function`){let r=Eh(n.call(t,e));if(r)return r}return m(e)[0]??null}function g(e,t,n){let r=bh[t]?.[n],i=Eh(e);if(!r||!i)return null;let a=typeof r==`string`?[r]:r,o=Object.getPrototypeOf(i)??Eh(i.constructor)?.prototype;
if(!o)return null;for(let e of Object.getOwnPropertyNames(o)){if(e===`constructor`)continue;let t=[Object.getOwnPropertyDescriptor(o,e)?.value];for(let n of[e,`__${e}`])try{t.push(i[n])}catch{}if(t.some(e=>{if(typeof e!=`function`)return!1;
let t=Function.prototype.toString.call(e);return a.every(e=>t.includes(e))}))return e}return null}return{manager:r,dispatcher:n,scene:o,gameScene:s,gameContext:c,baseEffectPrototype:l,classPrototype:u,createInstance:d,layer:f,window:h,findWindows:m,
findInLayer:p,managerFromList:a,obfuscatedMethodName:g}}var Ch=3e3;function wh(e,t=!1){if(!e||t&&!(`effectUrl`in e))return null;for(let t=Object.getPrototypeOf(e);t&&t!==Object.prototype;t=Object.getPrototypeOf(t))if(Object.prototype.hasOwnProperty.call(t,
`InitEffect`)&&typeof t.playEffect==`function`)return t;return null}function Th(e){let t=e._children;return Array.isArray(t)?t.map(Eh).filter(e=>e!==null):[]}function Eh(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}var Dh=[1,2,2,4,3,3,3,3];
function Oh(e){return Dh[e]??0}function kh(e,t){if(e.length!==Dh.length)return 0;let n=Ah(t);return n?Oh(e.findIndex(e=>Ah(e)===n)):0}function Ah(e){let t=Number(e);return Number.isFinite(t)&&t>0?String(t):``}function jh(e=window){let t=e.setInterval(n,500);
return n(),()=>e.clearInterval(t);function n(){try{let t=Sh(e),n=Nh(e);if(!Mh(V(n?.TableSetting)??V(n?.tableSetting)))return;let r=Bh(V(n?.TabbleSeatInfos)??V(n?.tabbleSeatInfos)??V(n?.TableSeatInfos)??V(n?.tableSeatInfos));if(r.length!==8)return;
let i=Kh(Fh(e,t));for(let e of i){let t=kh(r,Wh(V(e.seat)));t>0&&Hh(V(e.figureManager)??V(e.FigureManager),t)}}catch{}}}function Mh(e){if(!e)return!1;let t=e.IsChooseFigure??e.isChooseFigure??e.ChooseFigure??e.chooseFigure;return t===!0||t===1||t===`1`}function Nh(e){let t=e,
n=Sh(e),r=V(n.manager(`WindowManager`)?.constructor)?.managerList,i=[Ph(n),Ih(Array.isArray(r)?r:[]),Rh(t,`RoomControler`),V(V(t.GameContext)?.RoomControler),V(V(t.GameContext)?.roomControler),Lh(n.gameContext())];for(let e of i)if(e)return e;
let a=V(Ld(e)?._events);if(!a)return null;for(let e of Object.values(a)){let t=Array.isArray(e)?e:[e];for(let e of t){let t=V(V(e)?.caller);if(zh(t))return t}}return null}function Ph(e){let t=V(e.manager(`ServerProxy`)?._events)?.GsCReadyResp,
n=Array.isArray(t)?t:[t];for(let e of n){let t=V(V(e)?.caller);if(zh(t))return t}return null}function Fh(e,t){let n=V(I(e));if(Kh(n).length>0)return n;let r=V(t.scene());return Kh(r).length>0?r:null}function Ih(e){for(let t of e){let e=V(t);
if(zh(e))return e}return null}function Lh(e){if(!e)return null;for(let t of Object.values(e)){let e=V(t);if(zh(e))return e}return null}function Rh(e,t){for(let n of[V(e.zy),V(e.laya),V(e.Laya)]){let e=n?.class;if(typeof e==`function`)try{let r=e.call(n,
t),i=V(r);if(zh(i))return i;if(typeof r==`function`){let e=r,t=V(e.instance)??V(e.I);if(zh(t))return t}}catch{}}try{let n=V(V(e.Laya)?.ClassUtils),r=n?.getClass;if(typeof r!=`function`)return null;let i=r.call(n,t);return V(i?.instance)??V(i?.I)}catch{return null}}function zh(e){return!!(e&&(e.TableSetting||e.tableSetting||e.TabbleSeatInfos||e.tabbleSeatInfos||e.TableSeatInfos))}function Bh(e){if(!e)return[];
let t=Vh(e.datum??e.Datum??e.list??e.objs??e).map(Uh);return t.length===8?t:[]}function Vh(e){return Array.isArray(e)?e:e&&typeof e==`object`&&typeof e.length==`number`?Array.from(e):[]}function Hh(e,t){if(!(!e||t<=0||Number(e.Figure)===t)){if(typeof e.SetFigure==`function`){try{e.SetFigure(t)}catch{}return}e.Figure=t}}function Uh(e){let t=V(e),
n=V(t?.SeatPlayerInfo)??V(t?.seatPlayerInfo)??V(t?.playerInfo)??V(t?.data)??V(t?.Data)??V(t?.value)??t;return Gh(n?.ClientId??n?.clientId??n?.ClientID)}function Wh(e){let t=V(e?.playerInfo)??V(e?.PlayerInfo)??e;return Gh(t?.ClientId??t?.clientId??t?.ClientID)}function Gh(e){let t=Number(e);
return Number.isFinite(t)&&t>0?String(t):``}function Kh(e){let t=V(e?.seatContainer),n=t?.seatUIs??t?.seatUis;return Array.isArray(n)?n.map(V).filter(e=>e!==null):[]}function V(e){return typeof e==`object`&&e?e:null}var qh=[`sys_h5_quest.sgs`,
`ff_task_daily.sgs`,`gn_new_fuli.sgs`,`cha_dbs_general_series.sgs`,`sys_gs_dbs_fs_goodsbaseinfo.sgs`];function Jh(e){return`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}T000002`}function Yh(e,
t,n){return(!e||String(e)<=n)&&(!t||String(t)>=n)}function Xh(e,t){if(!e)return!0;let n=String(e),r=n.match(/[0-9]{8}T[0-9]{6}/g)??n.split(`,`);return Yh(r[0],r[1],t)}function Zh(e,t){let n=tg(e);if(!n)return!1;let r=n.ClientTimeStart??n.clientTimeStart??n.TimeStart??n.timeStart??n.begintime??n.BeginTime,
i=n.ClientTimeEnd??n.clientTimeEnd??n.TimeEnd??n.timeEnd??n.endtime??n.EndTime,a=n.duration??n.Duration??n.duration2??n.Duration2;return Yh(r,i,t)&&Xh(a,t)}function Qh(e,t){let n=new Set,r=e=>{let t=Number(e);Number.isFinite(t)&&t>0&&n.add(t)};
for(let n of eg($h(e[`sys_h5_quest.sgs`])?.Task))Zh(n,t)&&r(tg(n)?.Id);for(let n of eg($h(e[`ff_task_daily.sgs`])?.taskteam)){let e=tg(n);e&&Number(e.id)===0&&Number(e.taskid)>0&&Zh(e,t)&&r(e.taskid)}for(let n of eg($h(e[`gn_new_fuli.sgs`])?.taskteam))Zh(n,
t)&&r(tg(n)?.taskid);let i=[];for(let t of eg($h(e[`cha_dbs_general_series.sgs`])?.Collection)){let e=tg(t)?.seriesList;if(typeof e==`string`||typeof e==`number`)for(let t of String(e).split(`,`)){let e=Number(t);Number.isFinite(e)&&e>0&&i.push(e)}}let a=new Map;
for(let t of eg(tg($h(e[`sys_gs_dbs_fs_goodsbaseinfo.sgs`])?.goodslist)?.goods)){let e=tg(t),n=Number(e?.a);Number.isFinite(n)&&typeof e?.b==`string`&&a.set(n,e.b)}return{taskIds:n,seriesList:i,goodsNames:a}}function $h(e){return tg(tg(e)?.root)}function eg(e){return Array.isArray(e)?e:e&&typeof e==`object`?[e]:[]}function tg(e){return typeof e==`object`&&e?e:null}function ng(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function rg(e){return Array.isArray(e)?e:[]}function ig(e){let t=ng(e);
return ng(t?.Root)??ng(t?.root)??t}function ag(e){let t=ng(e),n=ng(t?.root)??ng(t?.Root)??t,r=new Map;for(let e of rg(n?.abbreviation??n?.Abbreviation)){let t=ng(e);t&&typeof t.Short==`string`&&typeof t.Long==`string`&&r.set(t.Short,t.Long)}return r}function og(e,
t){let n={};for(let[r,i]of Object.entries(e))n[t.get(r)??r]=i;return n}function sg(e,t){if(t==null)return``;let n=String(t);return e[n]??n}function cg(e){let t={};for(let n of rg(e.Text??e.text)){let e=ng(n);if(!e)continue;let r=e.ID??e.id,
i=e.text??e.Text;r!=null&&i!=null&&(t[String(r)]=String(i))}return t}function lg(e){let t={};for(let n of rg(e.Chapter)){let e=ng(n);if(!e)continue;let r=e.seasonID,i=e.chapter,a=e.cityName,o=String(e.location??``),s=e.bosslocation,c=`${r}-${i}${a??``}`;
for(let e of o.split(`;`))e&&(t[e]=c);s!=null&&s!==``&&(t[String(s)]=`${c}BOSS`)}return t}function ug(e,t){let n={};for(let r of rg(e.Level)){let e=ng(r);if(!e)continue;let i=e.cityID??e.cityId;if(i==null)continue;let[a,o]=String(e.citycoordinate??`0,0`).split(`,
`),s=Number(a)||0,c=-(Number(o)||0),l=(typeof e.citypic==`string`?e.citypic:``).replace(/^city_([0-9]+)_(.+?)(\.png)?$/,(e,t,n)=>`${t}${n}`);n[String(i)]={x:s,y:c,boss:e.startshow,cp:t[String(i)],spell:e.scenespell,desc:e.scenesDesc,name:typeof e.cityname==`string`?e.cityname:l}}return n}function dg(e,
t){let n={};for(let r of rg(e.General)){let e=ng(r);if(!e)continue;let i=og(e,t),a=String(i.generalgroup??``);if(!a)continue;let o={...i};typeof o.generalname==`string`&&(o.generalname=o.generalname.replace(/&/g,``)),(n[a]||=[]).push(o)}for(let e of Object.values(n))for(let t of e){let e=typeof t.JumpStage==`string`?t.JumpStage.split(`;`):null;
if(!e||e.length<2)continue;let r=e[0];r.startsWith(`2066`)&&(r=String(Number(r)-2e4));let i=Number(e[1])-1,a=n[r]?.[i]??n[r]?.[0];a&&(t.next=a)}return n}function fg(e,t,n,r){if(!e)return;let i=ng(e.info)??e;r.fight+=String(i.info??``),r.lost+=`${e.start?`[先手]`:``}${String(e.generalname??``)}`;
let a=ng(e.next);if(a){r.lost+=`>`,a.stage=t;let i=ng(a.info)??(a.info={});ng(i).pre=e.generalname,r.generals.push(a),fg(a,t+1,n,r)}else n||(r.fight+=`+`,r.lost+=` `)}function pg(e,t,n,r){let i={};for(let a of rg(e.Fight)){let e=ng(a);if(!e)continue;
let o=e.fightID??e.fightId;if(o==null)continue;let s=[...n[String(e.Ggroup??e.ggroup??``)]??[]].map(e=>({...e}));if(e.startnum){let t=s.find(t=>t.generalID==e.startnum||t.generalId==e.startnum);t&&(t.start=!0)}let c={fight:``,lost:``,generals:[...s]};
s.forEach((e,t,n)=>{fg(e,1,t===n.length-1,c)});let l=[...e.rewarditem?String(e.rewarditem).split(`;`):[],...String(e.reward??``).split(`;`)].map(e=>r[e]??e).filter(Boolean).join(`
`);i[String(o)]={...e,generals:c.generals,fight:c.fight,lost:c.lost.trim(),get:`${e.itemgroup??``}铜币\n${l}`.trim(),text:sg(t,e.text),name:sg(t,e.name)}}for(let[e,t]of Object.entries(n))e in i||(i[e]={generals:[...t],baseGenerals:[...t]});return i}function mg(e){let t={};
for(let n of rg(e.Other)){let e=ng(n);e&&e.reward!=null&&(t[String(e.reward)]=String(e.rewardname??``))}for(let n of rg(e.RewardGroup??e.Reward??e.reward)){let e=ng(n);if(!e)continue;let r=e.reward??e.ID??e.id;if(r==null)continue;let i=String(e.rewarddesc??e.rewardname??e.name??``),
a=typeof e.allreward==`string`?e.allreward:``,o=`${a?a.split(`;`).map(e=>e?.split(`,`)).map(e=>e?.[0]!==void 0&&e[0]!==``?[`随机`,`普通`,`稀有`,`史诗`,`传说`][Number(e[0])]:``).filter(Boolean).join(`/`):``}${i.replace(`多选一`,`自选`)}`,s=Number(e.abandonmoney);
t[String(r)]=Number.isFinite(s)&&s>0?`${o}/${s}铜币`:o}return t}function hg(e,t={}){let n={};for(let t of rg(e.Tactics)){let e=ng(t);e&&e.plot!=null&&(n[String(e.plot)]={name:String(e.plotname??``).replace(/·/g,``),desc:String(e.plotdesc??``).replace(/ /g,
``),school:e.school,money:e.money,level:e.level,type:2})}for(let r of rg(e.Spell)){let e=ng(r);if(!e||e.id==null)continue;let i=Number(e.spellid),a=Number.isFinite(i)?t.spells?.get(i):void 0;n[String(e.id)]={name:a?.name??``,desc:a?.desc??``,
spellid:i,money:e.money,level:e.level,type:3}}let r={6:`火杀`,7:`雷杀`,11:`冰杀`,12:`闪闪`};for(let i of rg(e.Card)){let e=ng(i);if(!e||e.id==null)continue;let a=Number(e.cardid),o=Number.isFinite(a)?t.cards?.get(a):void 0,s=Number(e.isequip)||0;n[String(e.id)]={name:o?.subType!=null&&r[o.subType]||o?.name||``,
desc:o?.desc??``,money:e.money,level:e.level,type:4+s}}return n}function gg(e,t,n,r,i,a,o){if(e==null||e===``||e===0||e===`0`)return``;let s=String(e);if(s.includes(`,`)){let[e,t]=s.split(`,`);return`${[`随机`,`普通`,`稀有`,`史诗`,`传说`][Number(t)]??``}${{2:`战法`,3:`技能`,4:`手牌`,5:`装备`}[Number(e)]??``}`}let c=r[s];
if(c){let e=Number(t);return(Number.isFinite(e)&&e>1?String(e):``)+c}let l=i[s];if(l?.name)return l.name;let u=a[s];return u?.length?(o[String(Math.trunc(Number(n)/10))],u.map(e=>String(e.generalname??``)).filter(Boolean).join(`
`)):s}function _g(e,t,n,r,i,a){let o={};for(let s of rg(e.Choose)){let e=ng(s);if(!e)continue;let c=e.effectID??e.effectId;if(c==null)continue;let l=Number(e.type);if(l===7){let n=t[String(e.event1)];n?o[String(c)]={...n}:o[String(c)]={};continue}if(l===3&&String(e.event1)===`2`){o[String(c)]={get:`营地`,
camp:!0};continue}let u=gg(e.lostitem,e.lostnum,c,n,r,i,a),d=gg(e.getitem,e.getnum,c,n,r,i,a);o[String(c)]={lost:u?`失去 ${u}`:``,get:d&&e.showitem?d.replace(`随机`,`特定`):d}}return o}function vg(e){let t=e.ID??e.id;return t==null?null:String(t)}function yg(e,
t){let n={};for(let r of rg(e.Adventure)){let e=ng(r),i=e?vg(e):null;i&&(n[i]=sg(t,e.chapname??e.chapName))}return n}function bg(e){let t={};for(let n of rg(e.Adventure)){let e=ng(n),r=e?vg(e):null;r&&(t[r]=[e.effect1,e.effect2,e.effect3].filter(e=>e!=null))}return t}function xg(e){let t={};
for(let n of rg(e.EnemyGrowth)){let e=ng(n);e&&(t[`${e.moon}_${e.diffnum}`]=e)}return t}function Sg(e){let t={};for(let n of rg(e.EnemyNumGrowth)){let e=ng(n);e&&(t[`${e.type}_${e.num}`]=e)}return t}function Cg(e){let t={};for(let n of rg(e.EnemyDiffGrowth)){let e=ng(n);
e&&(t[`${e.diffnum}_${e.chap}`]=e)}return t}function wg(e){let t={},n=[...rg(e.DifficultySelection),...rg(e.EXDifficultySelection)];for(let e of n){let n=ng(e);if(!n||n.seasonID==null||n.difID==null)continue;let r=String(n.seasonID);(t[r]||={})[String(n.difID)]=n}return t}function Tg(e){let t={};
for(let n of rg(e.Chapter)){let e=ng(n);if(!e||e.seasonID==null)continue;let r=String(e.seasonID),i=e.chapter??e.chapterID??e.chapterId;if(i==null)continue;let a=Number(e.bosslocation);Number.isFinite(a)&&((t[r]||={})[String(i)]=a)}return t}function Eg(){return{Rcity:{},
Rfight:{},Radventure:{},RadventureChoices:{},Rchoose:{},text:{},Rplot:{},Rreward:{},Rgrow:{},RnumGrow:{},RdiffGrow:{},Rdiff:{},RchapBoss:{},RcurSeason:0}}function Dg(e,t={}){let n=ig(e);if(!n)return Eg();let r=ag(e),i=cg(n),a=ug(n,lg(n)),o=dg(n,
r),s=mg(n),c=hg(n,t),l=pg(n,i,o,s),u=yg(n,i),d=bg(n),f=_g(n,l,s,c,o,u),p=ng(rg(n.Season)[0]);return{Rcity:a,Rfight:l,Radventure:u,RadventureChoices:d,Rchoose:f,text:i,Rplot:c,Rreward:s,Rgrow:xg(n),RnumGrow:Sg(n),RdiffGrow:Cg(n),Rdiff:wg(n),
RchapBoss:Tg(n),RcurSeason:Number(p?.seasonID??p?.ID??0)||0}}function Og(e){return!!(e&&Object.keys(e.Rcity).length>0)}function kg(e){let t=Ag(e);if(!t)return null;let n=jg(t.NHtrigger),r=jg(t.NHeffect),i=jg(t.XSPJ),a=jg(t.PXreward);if(!n.length&&!r.length&&!i.length&&!a.length)return null;
let o={};for(let e of n){let t=Ag(e),n=Number(t?.triggerID),r=Number(t?.triggerType);Number.isInteger(n)&&n>0&&(o[n]=r)}let s=r.map(e=>{let t=Ag(e);return{type:Number(t?.effectType)||0,desc:String(t?.desc||``).replace(/^你可以?(.*?)。?$/,`$1`)}}).sort((e,
t)=>e.type-t.type||e.desc.length-t.desc.length),c=[];for(let e=0;e<s.length;e+=1){let t=s[e],n=s[e-1],r=t.desc;if(t.type!==n?.type){let e=Math.max(0,13-r.length);r+=`<span style="color: rgba(0,0,0,0);stroke:none;">${`～`.repeat(e)}</span><span style="color: rgba(255,255,0,1);"+
"">第${t.type}类型</span>`}c.push(r)}let l=i.map(e=>{let t=Ag(e);return{id:Number(t?.id)||0,name:String(t?.name||``),spell:Number(t?.spell)||0,triggerID:Number(t?.triggerID)||0}}).filter(e=>e.id&&e.name&&e.spell),u={};for(let e of a){let t=Ag(e),
n=Number(t?.ID??t?.id);if(!Number.isInteger(n)||n<=0)continue;let r=String(t?.desc??t?.describe??t?.Desc??``).replace(/<[^>]*>/g,``).replace(/#.*/g,``).replace(/[;\n]+$/g,``).trim();u[n]={rewardId:n,name:String(t?.name||`地图技#${n}`),description:r}}return{nanHua:{trigger:o,
effectHtml:c},shiLun:l,peiXiuRewards:u}}function Ag(e){return e&&typeof e==`object`?e:null}function jg(e){return Array.isArray(e)?e:[]}var Mg=`/220/h5_2/res/config/Config_w.sgs`,Ng=`https://web.sanguosha.com`,Pg=`https://test.sanguosha.com/h5/res/config//Config_w.sgs`,
Fg=`hd_roguelike.sgs`,Ig=1e3,Lg=2e4,Rg=3;function zg(e=window){let t=null,n=new Map,r=null,i=null,a=null,o=null,s=!1,c=!1,l=0,u=0,d=e.setInterval(f,Ig);f();function f(){if(s||c||t)return;let f=Qg(e);if(!f){if(!e.Laya)return;u+=1,u===30&&console.error(`[xiaochao] 卡牌配置等待游戏解码库超时`,
Zg(e));return}c=!0,Bg(e,f).then(c=>{s||(t=c.cards,n=c.spellIdsByName,r=c.autoTaskData,i=c.rogueMapData,a=c.extraAssistData,o=c.spellExtendRaw,e.__XIAOCHAO_OFFICIAL_CARD_DICTIONARY__=c.cards,e.clearInterval(d))}).catch(t=>{l+=1,console.error(`[xiaochao] 卡牌配置加载失败: ${String(t?.message??t)}`),
l>=Rg&&e.clearInterval(d)}).finally(()=>{c=!1})}return{getCard(e){return t?.[e]??null},findSpellIdsByName(e){return[...n.get(e)??[]]},getAutoTaskData(){return r},getRogueMapData(){return i},getExtraAssistData(){return a},getSpellExtendRaw(){return o},
size(){return t?Object.keys(t).length:0},dispose(){s=!0,e.clearInterval(d)}}}async function Bg(e,t){let n=await t.loadZip(await Yg(qg(e))),[r,i,a,o,s]=await Promise.all([Kg(n,t,`sys_playcard.sgs`),Kg(n,t,`cha_spell.sgs`),Vg(n,t),Kg(n,t,Fg).catch(e=>(console.warn(`[xiaochao] 山河配置读取失败: ${Fg}`,
e),null)),Kg(n,t,`cha_spellextend.sgs`).catch(e=>(console.warn(`[xiaochao] 进阶辅助配置读取失败: cha_spellextend.sgs`,e),null))]),c=Wg(r,i),l=null;if(o)try{l=Dg(o,Hg(r,i)),Object.keys(l.Rcity).length||(console.warn(`[xiaochao] 山河配置解析后 Rcity 为空`),l=null)}catch(e){console.warn(`[xiaochao] 山河配置解析失败`,
e)}let u=null;if(s)try{u=kg(s)}catch(e){console.warn(`[xiaochao] 进阶辅助配置解析失败`,e)}return{cards:c,spellIdsByName:Ug(i),autoTaskData:a,rogueMapData:l,extraAssistData:u,spellExtendRaw:s}}async function Vg(e,t){let n={};await Promise.all(qh.map(async r=>{try{n[r]=await Kg(e,
t,r)}catch(e){console.warn(`[xiaochao] 自动任务配置读取失败: ${r}`,e)}}));try{return Qh(n,Jh(new Date))}catch(e){return console.warn(`[xiaochao] 自动任务配置解析失败`,e),null}}function Hg(e,t){let n=new Map;for(let e of e_(t_(t_(t)?.GameSpells)?.spell)){let t=t_(e),
r=Number(t?.a);Number.isFinite(r)&&n.set(r,{name:typeof t?.c==`string`?t.c:``,desc:typeof t?.o==`string`?Gg(t.o):``})}let r=t_(e),i=new Map;for(let e of e_(r?.abbreviation)){let t=t_(e);typeof t?.Short==`string`&&typeof t.Long==`string`&&i.set(t.Short,
t.Long)}let a=new Map;for(let e of e_(t_(r?.GamePlayCards)?.card)){let t=t_(e);if(!t)continue;let r={};for(let[e,n]of Object.entries(t))r[i.get(e)??e]=n;let o=Number(r.id);if(!Number.isInteger(o)||o<=0)continue;let s=n.get(Number(r.spellId));
a.set(o,{name:typeof r.name==`string`?r.name:s?.name??``,desc:s?.desc,subType:Number(r.subType),type:Number(r.type),color:r.color,number:r.number??r.num})}return{spells:n,cards:a}}function Ug(e){let t=new Map;for(let n of e_(t_(t_(e)?.GameSpells)?.spell)){let e=t_(n),
r=Number(e?.a);if(!Number.isInteger(r)||r<=0||typeof e?.c!=`string`)continue;let i=t.get(e.c)??[];i.push(r),t.set(e.c,i)}return t}function Wg(e,t){let n=t_(e),r=new Map;for(let e of e_(n?.abbreviation)){let t=t_(e);typeof t?.Short==`string`&&typeof t.Long==`string`&&r.set(t.Short,
t.Long)}let i=new Map;for(let e of e_(t_(t_(t)?.GameSpells)?.spell)){let t=t_(e),n=Number(t?.a);Number.isFinite(n)&&i.set(n,{name:typeof t?.c==`string`?t.c:``,desc:typeof t?.o==`string`?Gg(t.o):``})}let a={};for(let e of e_(t_(n?.GamePlayCards)?.card)){let t=t_(e);
if(!t)continue;let n={};for(let[e,i]of Object.entries(t))n[r.get(e)??e]=i;let o=Number(n.id);if(!Number.isInteger(o)||o<=0)continue;let s=i.get(Number(n.spellId));a[o]={...n,name:n.name??s?.name,desc:s?.desc}}return a}function Gg(e){return e.replace(/<[^<>]*>/g,
``).replace(/#.*/g,``).replace(/[;\n]+$/g,``)}async function Kg(e,t,n){let r=e.file(n);if(!r)throw Error(`Config_w.sgs 缺少 ${n}`);let i=await r.async(`arraybuffer`);return JSON.parse(new TextDecoder().decode(t.gunzip(t.decrypt(i))))}function qg(e){if(e.location.host===`test.sanguosha.com`)return Pg;
try{let t=e.performance.getEntriesByType(`resource`);for(let n=t.length-1;n>=0;--n){let r=t[n];if(r.responseEnd>0&&Jg(r.name,e))return r.name}}catch{}return`${Ng}${Mg}?v=${e.resourceVersion??``}`}function Jg(e,t){try{let n=new URL(e,t.location.href);
return n.origin===Ng&&n.pathname.replace(/\/+/g,`/`)===Mg}catch{return!1}}async function Yg(e){let t;for(let n=0;n<Rg;n+=1){let n=new AbortController,r=setTimeout(()=>n.abort(),Lg);try{let t=await fetch(e,{signal:n.signal});if(!t.ok)throw Error(`HTTP ${t.status}`);
return await t.arrayBuffer()}catch(e){t=e}finally{clearTimeout(r)}}throw t}function Xg(e){let t=e;return{JSZip:t.JSZip??(typeof JSZip>`u`?void 0:JSZip),CtrUtil:t.CtrUtil??(typeof CtrUtil>`u`?void 0:CtrUtil),Zlib:t.Zlib??(typeof Zlib>`u`?void 0:Zlib)}}function Zg(e){let t=Xg(e);
return JSON.stringify({JSZip:typeof t.JSZip?.loadAsync,CtrUtil:typeof t.CtrUtil?.Ctr?.Ofb_Dec,Zlib:typeof t.Zlib?.Gunzip})}function Qg(e){let t=Xg(e),n=$g(t.JSZip),r=$g($g(t.CtrUtil)?.Ctr),i=$g(t.Zlib),a=n?.loadAsync,o=r?.Ofb_Dec,s=i?.Gunzip;
return typeof a!=`function`||typeof o!=`function`||typeof s!=`function`?null:{loadZip:e=>a.call(n,e),decrypt:e=>o.call(r,e),gunzip:e=>new s(e).decompress()}}function $g(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function e_(e){return Array.isArray(e)?e:[]}function t_(e){return typeof e==`object`&&e?e:null}function n_(e,
t){let n=!1,r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=0,d=()=>{o&&(sm(o),o=null,u=0)},f=()=>{d();try{s_(a,`removeSelf`),s_(a,`destroy`,!0)}catch{}r=i=a=s=c=l=null},p=()=>{if(n)return;let m=c_(I(window)),h=c_(m?.gameRoundInfo),g=c_(h?._parent)??h??m;
if(!m||!h||!g||m.destroyed||h.destroyed){f();return}if(r!==m||i!==g||!a||a.destroyed){f();let e=c_(globalThis)?.Laya,t=c_(e)?.Sprite;if(typeof t!=`function`||(a=c_(new t),!a))return;a.name=`xcNativeRecentCardOverlay`,a.mouseEnabled=!0,a.mouseThrough=!0,
a.zOrder=Math.max(100,Number(h.zOrder||0)+1),s_(g,`addChild`,a),r=m,i=g}let _=e.get(`display.deckHudEnabled`),v=t.getSnapshot(),y=_?Number(v.displayedCardId||0):0,b=Math.max(43,Number(h.height||43))+24,x=Math.max(.5,Math.min(.68,b/130)),S=Math.ceil(93*x),
C=Math.ceil(130*x);a.visible=_,s_(a,`pos`,Number(h.x||0)-S-5,Number(h.y||0)),s_(a,`size`,S,C),u!==y&&(d(),y>0&&(o=$p(a,y,S,C,m)),u=o?y:0);let w=v.displayMode===`current`?`当前`:`玩家`;s=r_(a,s,`${w}\n用牌`,S,C),c=i_(a,c,w,S,C),l=a_(a,l,S,C,()=>{let n=t.getSnapshot().displayMode===`current`?`player`:`current`;
t.setDisplayMode(n),e.set(`display.recentCardMode`,n),p()}),s&&(s.visible=!o),c&&(c.visible=!!o)},m=t.subscribe(p),h=e.subscribe(`display.deckHudEnabled`,p),g=window.setInterval(p,250);return p(),()=>{n=!0,window.clearInterval(g),m(),h(),f()}}function r_(e,
t,n,r,i){let a=c_(globalThis.Laya),o=a?.Sprite,s=a?.Text,c=t;if(!c&&typeof o==`function`&&typeof s==`function`){c=c_(new o);let t=c_(new s);if(!c||!t)return null;c.name=`xcNativeRecentCardPlaceholder`,c.mouseEnabled=!1,c.mouseThrough=!0,t.name=`xcNativeRecentCardPlaceholderText`,
t.fontSize=12,t.color=`#B7AA8B`,t.align=`center`,t.valign=`middle`,t.leading=2,s_(c,`addChild`,t),s_(e,`addChild`,c)}if(!c)return null;s_(c,`size`,r,i),s_(c,`pos`,0,0);let l=c_(c.graphics);s_(l,`clear`),s_(l,`drawRect`,0,0,r,i,`rgba(29,23,18,0.7)`,
`#8B744C`,1);let u=c_(o_(c,`_children`)[0]);return u&&(u.text=n,u.width=r,u.height=i,s_(u,`pos`,0,0)),c}function i_(e,t,n,r,i){let a=c_(globalThis.Laya),o=a?.Sprite,s=a?.Text,c=t;if(!c&&typeof o==`function`&&typeof s==`function`){c=c_(new o);
let t=c_(new s);if(!c||!t)return null;c.name=`xcNativeRecentCardLabel`,c.mouseEnabled=!1,c.zOrder=160,t.name=`xcNativeRecentCardLabelText`,t.font=`SimSun`,t.bold=!0,t.align=`center`,t.color=`#fff3d0`,t.stroke=1,t.strokeColor=`#3a2014`,s_(c,
`addChild`,t),s_(e,`addChild`,c)}if(!c)return null;let l=Math.max(28,Math.round(r*.52)),u=Math.max(14,Math.round(Math.min(18,i*.16))),d=c_(c.graphics);s_(d,`clear`),s_(d,`drawRect`,0,0,l,u,`#39281d`,`#d2a56e`,1);let f=c_(s_(c,`getChildByName`,
`xcNativeRecentCardLabelText`))??c_(o_(c,`_children`)[0]);return f&&(f.text=n,f.fontSize=Math.max(10,Math.min(12,u-3)),f.width=l,f.height=u,s_(f,`pos`,0,0)),s_(c,`size`,l,u),s_(c,`pos`,-Math.max(3,Math.round(Math.min(r,i)*.05)),Math.max(0,i-u-6)),
c}function a_(e,t,n,r,i){if(t)return s_(t,`size`,n,r),t;let a=c_(globalThis.Laya),o=a?.Sprite;if(typeof o!=`function`)return null;let s=c_(new o);return s?(s.name=`xcNativeRecentCardHitArea`,s.mouseEnabled=!0,s.mouseThrough=!1,s.zOrder=170,
s_(s,`size`,n,r),s_(s,`on`,c_(a?.Event)?.CLICK??`click`,s,i),s_(e,`addChild`,s),s):null}function o_(e,t){return Array.isArray(e?.[t])?e[t]:[]}function s_(e,t,...n){let r=e?.[t];return typeof r==`function`?r.apply(e,n):void 0}function c_(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}var l_=5,
u_=new Set([`炁`,`心幽`]),d_=`XC::knownCardRegistry`,f_=108e5;function p_(e=g_()){let t=new Map;m_(t,e);function n(){if(e)try{e.setItem(d_,JSON.stringify({savedAt:Date.now(),records:[...t.values()].map(e=>({cardId:e.cardId,tags:[...e.tags],persistentTags:[...e.persistentTags],
originalOwnerSeatId:e.originalOwnerSeatId,location:e.location}))}))}catch{}}function r(e){if(!Number.isInteger(e)||e<=0)return null;let n=t.get(e);return n||(n={cardId:e,tags:new Set,persistentTags:new Set,originalOwnerSeatId:null,location:null},
t.set(e,n)),n}return{rememberPersistentTag(e,t,i=null){let a=r(e),o=String(t).trim();a&&o&&(a.tags.add(o),a.persistentTags.add(o),i!==null&&Number.isInteger(i)&&i>=0&&a.originalOwnerSeatId===null&&(a.originalOwnerSeatId=i),n())},forgetPersistentTag(e,
r){let i=t.get(e),a=String(r).trim();i&&a&&i.persistentTags.has(a)&&(i.persistentTags.delete(a),i.tags.delete(a),n())},observeKnownHandCard(e,t,i){let a=r(e);if(a){a.tags=__(i);for(let e of a.tags)u_.has(e)&&(a.persistentTags.add(e),e===`炁`&&a.originalOwnerSeatId===null&&(a.originalOwnerSeatId=t));
a.location={seatId:t,zone:l_,position:0,zoneParam:0},n()}},getPersistentTags(e){return[...t.get(e)?.persistentTags??[]]},getOriginalOwnerSeatId(e){return t.get(e)?.originalOwnerSeatId??null},clearLocations(e,r){for(let n of t.values())n.location?.seatId===e&&n.location.zone===r&&(n.location=null);
n()},resolveHiddenMovement(e,n=null){if(e.cardIds.some(e=>e>0))return[...e.cardIds];let r=[...t.values()].filter(t=>v_(t.location,e)&&(n===null||t.originalOwnerSeatId===n&&t.persistentTags.has(`炁`)));return r.length===e.cardCount?r.map(e=>e.cardId):[...e.cardIds]},
applyMovement(e,t){for(let n of t){let t=r(n);t&&(t.location={seatId:e.toId,zone:e.toZone,position:e.toPosition,zoneParam:e.toZoneParam},e.fromZone===l_&&e.toZone!==l_&&(t.tags=new Set(t.persistentTags)))}n()},hasRestoredRecords(){return t.size>0},
clear(){t.clear();try{e?.removeItem(d_)}catch{}}}}function m_(e,t){if(t)try{let n=JSON.parse(t.getItem(d_)||`null`);if(!n||Date.now()-Number(n.savedAt)>f_||!Array.isArray(n.records))return;for(let t of n.records){let n=Number(t?.cardId);if(!Number.isInteger(n)||n<=0)continue;
let r=t.location&&typeof t.location==`object`?h_(t.location):null;e.set(n,{cardId:n,tags:__(Array.isArray(t.tags)?t.tags:[]),persistentTags:__(Array.isArray(t.persistentTags)?t.persistentTags:[]),originalOwnerSeatId:Number.isInteger(Number(t.originalOwnerSeatId))?Number(t.originalOwnerSeatId):null,
location:r})}}catch{}}function h_(e){let t=[`seatId`,`zone`,`position`,`zoneParam`].map(t=>Number(e[t]));return t.every(e=>Number.isInteger(e)&&e>=0)?{seatId:t[0],zone:t[1],position:t[2],zoneParam:t[3]}:null}function g_(){try{return typeof window>`u`?null:window.sessionStorage}catch{return null}}function __(e){return new Set(e.map(e=>String(e??``).trim()).filter(Boolean))}function v_(e,
t){return!(!e||e.seatId!==t.fromId||e.zone!==t.fromZone||t.fromPosition&&e.position&&e.position!==t.fromPosition||t.fromZoneParam&&e.zoneParam&&e.zoneParam!==t.fromZoneParam)}var y_=Object.freeze({UNKNOWN:`unknown`,YANXI:`yanxi`}),b_=Object.freeze({TOP:65280,
BOTTOM:0,UNSPECIFIED:65282});function x_(e){return e.filter(e=>Number.isInteger(e)&&e>0)}function S_(e){return typeof e==`number`&&Number.isInteger(e)&&e>=0&&e<255}function C_(e,t,n){let r=x_(t);return r.length?[{zone:`hand`,ownerId:e,cardIds:r,
position:`unspecified`,partial:n}]:[]}function w_(e,t,n=!1){let r=x_(e);return r.length?[{zone:`deck`,ownerId:255,cardIds:r,position:t,partial:!0,...n?{packUnknown:!0}:{}}]:[]}var T_=`XC::mingpaiDrawPileOrder`,E_=108e5;function D_(e=null){let t=[],
n=[];i();function r(){if(e)try{!t.some(Boolean)&&!n.some(Boolean)?e.removeItem(T_):e.setItem(T_,JSON.stringify({savedAt:Date.now(),top:t,bottom:n}))}catch{}}function i(){if(e)try{let r=JSON.parse(e.getItem(T_)||`null`);if(!r||Date.now()-Number(r.savedAt)>E_)return;
t=O_(r.top),n=O_(r.bottom)}catch{}}function a(e){let r=new Set(e.filter(e=>e>0));r.size&&(t=t.map(e=>r.has(e)?0:e),n=n.map(e=>r.has(e)?0:e),s())}function o(e){let r=new Set(e.filter(e=>e>0));r.size&&(t=t.filter(e=>!r.has(e)),n=n.filter(e=>!r.has(e)),
s())}function s(){for(;t.length&&!t[t.length-1];)t.pop();for(;n.length&&!n[0];)n.shift()}return{peek(e,r){let i=Math.max(0,r);if(e===b_.TOP)return Array.from({length:i},(e,n)=>t[n]??0);if(e===b_.BOTTOM){let e=n.length-i;return Array.from({length:i},(t,
r)=>n[e+r]??0).reverse()}return Array.from({length:i},()=>0)},remove(e,i,c){let l=Math.max(0,i),u=[...new Set(c.filter(e=>e>0))];if(u.length){let r=new Set;for(let e of u){let i=t.indexOf(e);if(i>=0){t.splice(i,1),r.add(e);continue}i=n.indexOf(e),
i>=0&&(n.splice(i,1),r.add(e))}let i=Math.max(0,l-r.size);e===b_.TOP&&i?t.splice(0,i):e===b_.BOTTOM&&i&&n.splice(Math.max(0,n.length-i),i)}else e===b_.TOP?t.splice(0,l):e===b_.BOTTOM?n.splice(Math.max(0,n.length-l),l):o(u);a(u),s(),r()},add(e,
i,o){let c=Array.from({length:Math.max(0,i)},(e,t)=>o[t]>0?o[t]:0);a(c),e===b_.TOP?t.unshift(...c.reverse()):e===b_.BOTTOM&&n.push(...c),s(),r()},reveal(e,i){let o=i.filter(e=>e>0);if(o.length){if(e===b_.TOP)a(o),o.forEach((e,n)=>{t[n]=e}),
t=Array.from({length:t.length},(e,n)=>t[n]??0);else if(e===b_.BOTTOM){a(o);let e=Math.max(0,o.length-n.length);n=[...Array.from({length:e},()=>0),...n];let t=n.length-o.length;o.forEach((e,r)=>{n[t+r]=e})}else return;s(),r()}},getSnapshot:()=>({top:[...t],
bottom:[...n]}),invalidate(){t=[],n=[],r()},clear(){t=[],n=[],r()}}}function O_(e){return Array.isArray(e)?e.map(e=>Number.isInteger(Number(e))&&Number(e)>0?Number(e):0):[]}var k_=new Set([3,8,10]);function A_(e=L_()){let t=p_(e),n=D_(e),r=new Map,
i=new Map,a=new Set;I_(i,e);let o=s();function s(){let e=l(),t={...e};for(let[e,n]of r)t[e]=Object.freeze([...n]);let a=P_([...e[y_.UNKNOWN]??[],...r.get(y_.UNKNOWN)??[]]);a.length?t[y_.UNKNOWN]=Object.freeze(a):delete t[y_.UNKNOWN];let o=[...i.values()].map(e=>Object.freeze({cardId:e.cardId,
tags:Object.freeze([...e.tags]),persistentTags:Object.freeze([...e.persistentTags]),originalOwnerSeatId:e.originalOwnerSeatId,location:e.location,zoneId:e.location?j_(e.location.seatId,e.location.zone):null})),s=n.getSnapshot();return Object.freeze({zones:Object.freeze(t),
records:Object.freeze(o),drawPile:Object.freeze({top:Object.freeze([...s.top]),bottom:Object.freeze([...s.bottom])})})}function c(){let e=s();F_(o,e)||(o=e,a.forEach(e=>e(o)))}function l(){let e={};for(let t of i.values()){if(!t.location||t.cardId<=0)continue;
let n=j_(t.location.seatId,t.location.zone);e[n]||(e[n]=[]),e[n].includes(t.cardId)||e[n].push(t.cardId),k_.has(t.location.zone)&&(e[y_.UNKNOWN]||(e[y_.UNKNOWN]=[]),e[y_.UNKNOWN].includes(t.cardId)||e[y_.UNKNOWN].push(t.cardId))}return e}function u(e,
n,r){t.observeKnownHandCard(e,n,r);let a=t.getPersistentTags(e),o=i.get(e),s=new Set([...o?.tags??[],...r,...a]),c=new Set(a);i.set(e,{cardId:e,tags:s,persistentTags:c,originalOwnerSeatId:t.getOriginalOwnerSeatId(e),location:{seatId:n,zone:5,
position:0,zoneParam:0}})}function d(e,n){t.applyMovement(e,n);for(let r of n){if(!(r>0))continue;let n=i.get(r),a=new Set(t.getPersistentTags(r));if(i.set(r,{cardId:r,tags:n?new Set([...n.tags,...a]):new Set(a),persistentTags:a,originalOwnerSeatId:t.getOriginalOwnerSeatId(r),
location:{seatId:e.toId,zone:e.toZone,position:e.toPosition,zoneParam:e.toZoneParam}}),e.fromZone===5&&e.toZone!==5){let e=i.get(r);e.tags=new Set(e.persistentTags)}}}return{getSnapshot:()=>o,getZoneCardIds(e){return o.zones[e]??M_},setZoneCardIds(e,
t){let n=P_(t);n.length?r.set(e,n):r.delete(e),c()},addZoneCardIds(e,t){let n=P_(t);n.length&&(r.set(e,P_([...r.get(e)??[],...n])),c())},removeZoneCardIds(e,t){let n=new Set(P_(t));if(!n.size)return;let i=(r.get(e)??[]).filter(e=>!n.has(e));
i.length?r.set(e,i):r.delete(e),c()},clearZone(e){(r.has(e)||e in o.zones)&&(r.delete(e),c())},findKZ(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return{keys:Object.freeze([0]),zones:Object.freeze([`?`])};let n=i.get(t);if(!n?.location)return{keys:Object.freeze([t]),
zones:Object.freeze([y_.UNKNOWN])};let r=j_(n.location.seatId,n.location.zone),a=k_.has(n.location.zone)?[r,y_.UNKNOWN]:[r];return{keys:Object.freeze([t]),zones:Object.freeze(a)}},getHandCardIds(e){return o.zones[j_(e,5)]??M_},getDrawPileCardIds(){return o.zones[j_(255,1)]??M_},
reconcileVisibleHands(e){let n=new Set,r=new Map;for(let t of e){let e=P_(t.cardIds);r.set(t.seatId,e),e.forEach(e=>n.add(e))}let a=new Set(r.keys());for(let e of i.values())e.location?.zone===5&&(a.add(e.location.seatId),n.has(e.cardId)||(e.location=null));
for(let e of a)t.clearLocations(e,5);for(let[e,t]of r)t.forEach(t=>u(t,e,[]));c()},clearKnownDrawPileOrder(){n.invalidate(),j_(255,1),t.clearLocations(255,1);for(let[e,t]of i)t.location?.zone===1&&t.location.seatId===255&&i.delete(e);c()},observeKnownHandCard(e,
t,n=[]){u(e,t,n),c()},rememberPersistentCardTag(e,n,r=null){t.rememberPersistentTag(e,n,r);let a=i.get(e);a&&(a.tags.add(n),a.persistentTags.add(n),a.originalOwnerSeatId===null&&r!==null&&(a.originalOwnerSeatId=r),c())},forgetPersistentCardTag(e,
n){let r=String(n).trim();if(!r)return;t.forgetPersistentTag(e,r);let a=i.get(e);if(!a){c();return}a.tags.delete(r),a.persistentTags.delete(r),c()},observeKnownDrawPileCards(e,t){let r=P_(e);r.length&&(n.reveal(t,r),d({cardCount:r.length,cardIds:r,
fromId:255,fromZone:1,fromPosition:t,fromZoneParam:0,toId:255,toZone:1,toPosition:t,toZoneParam:0},r),c())},getPersistentTags(e){return t.getPersistentTags(e)},getOriginalOwnerSeatId(e){return t.getOriginalOwnerSeatId(e)},resolveHiddenMovement(e,
r=null){return N_(e.fromId,e.fromZone)&&!e.cardIds.some(e=>e>0)&&(e.fromPosition===b_.TOP||e.fromPosition===b_.BOTTOM)?n.peek(e.fromPosition,e.cardCount):t.resolveHiddenMovement(e,r)},applyMovement(e,t){if(N_(e.fromId,e.fromZone)&&n.remove(e.fromPosition,
e.cardCount,t),N_(e.toId,e.toZone)&&n.add(e.toPosition,e.cardCount,t),d(e,t),k_.has(e.fromZone)){let e=t.filter(e=>e>0);if(e.length){let t=(r.get(y_.UNKNOWN)??[]).filter(t=>!e.includes(t));t.length?r.set(y_.UNKNOWN,t):r.delete(y_.UNKNOWN)}}c()},
projectSkillCards(e,t){let n=P_(t);n.length?r.set(e,n):r.delete(e),c()},hasRestoredRecords(){return t.hasRestoredRecords()||i.size>0},clear(){t.clear(),n.clear(),i.clear(),r.clear(),c()},subscribe(e){return a.add(e),e(o),()=>a.delete(e)}}}function j_(e,
t){return`${t}-${e}`}var M_=Object.freeze([]);function N_(e,t){return e===255&&t===1}function P_(e){let t=new Set,n=[];for(let r of e){let e=Number(r);!Number.isInteger(e)||e<=0||t.has(e)||(t.add(e),n.push(e))}return n}function F_(e,t){return JSON.stringify(e)===JSON.stringify(t)}function I_(e,
t){if(t)try{let n=JSON.parse(t.getItem(`XC::knownCardRegistry`)||`null`);if(!n||!Array.isArray(n.records)||Date.now()-Number(n.savedAt)>108e5)return;for(let t of n.records){let n=Number(t?.cardId);if(!Number.isInteger(n)||n<=0)continue;let r=t.location&&typeof t.location==`object`?{seatId:Number(t.location.seatId),
zone:Number(t.location.zone),position:Number(t.location.position),zoneParam:Number(t.location.zoneParam)}:null;(!r||[r.seatId,r.zone,r.position,r.zoneParam].every(e=>Number.isInteger(e)&&e>=0))&&e.set(n,{cardId:n,tags:new Set(Array.isArray(t.tags)?t.tags.map(String):[]),
persistentTags:new Set(Array.isArray(t.persistentTags)?t.persistentTags.map(String):[]),originalOwnerSeatId:Number.isInteger(Number(t.originalOwnerSeatId))?Number(t.originalOwnerSeatId):null,location:r})}}catch{}}function L_(){try{return typeof window>`u`?null:window.sessionStorage}catch{return null}}var R_=400,
z_=0;function B_(e,t){if(typeof window>`u`)return;let n=window.__XIAOCHAO_MINGPAI_TRACE__??=[];z_+=1,n.push({seq:z_,time:Date.now(),kind:e,detail:t}),n.length>R_&&n.splice(0,n.length-R_)}function V_(e,t,n,r=`unknown`){for(let i of e)i.cardIds.length&&(B_(`reveal`,
{source:r,...i,cardIds:[...i.cardIds]}),i.zone===`hand`?(i.cardIds.forEach(e=>t.observeKnownHandCard(e,i.ownerId,[])),i.partial?n.mergeKnownHand(i.ownerId,i.cardIds):n.revealKnownHand(i.ownerId,i.cardIds)):t.observeKnownDrawPileCards(i.cardIds,
H_(i.position)),i.packUnknown&&t.addZoneCardIds(y_.UNKNOWN,i.cardIds))}function H_(e){return e===`top`?b_.TOP:e===`bottom`?b_.BOTTOM:b_.UNSPECIFIED}var U_=(e=!1)=>t=>S_(t.targetSeatId)?C_(t.targetSeatId,[...t.params],e):[],W_=e=>{let t=e.params[0]??0;
return t<=0||!S_(e.srcSeatId)?[]:C_(e.srcSeatId,e.params.slice(1,t+1),!0)},G_=e=>{let t=e.params[1]??0;return t<=0||e.params.length<=2||!S_(e.targetSeatId)?[]:C_(e.targetSeatId,e.params.slice(-t),!0)},K_=e=>t=>t.isSelfSrc?e(t):[],q_=(e,t)=>n=>n.param===e?t(n):[],
J_=new Map;function Y_(e,t){for(let n of e)J_.set(n,t)}Y_([4,5,921,372,811,357,3119,501,3437,4025],U_()),Y_([851,361,774,3310,3876],q_(0,U_())),Y_([898],q_(0,W_)),Y_([987,988,3483],q_(1,G_)),Y_([943],q_(0,e=>{let t=x_(e.params);return t.length===1?w_(t,
`top`):[]})),Y_([3266],q_(0,K_(e=>{let t=e.params.filter((e,t)=>t%3==1);return e.targetSeatId===255?w_(t,`top`):S_(e.targetSeatId)?C_(e.targetSeatId,t,!0):[]}))),Y_([3903],q_(0,K_(e=>{if(e.targetSeatId!==255)return[];let t=e.params[0]??0;return t>0?w_(e.params.slice(2,2+t),
`top`):[]}))),Y_([7010,7011],K_(e=>e.targetSeatId===255?w_([...e.params],`top`,!0):[]));function X_(e){return J_.get(e.spellId)?.(e)??[]}var Z_=`心幽`,Q_=5,$_=5;function ev(e){return Number.isInteger(e)&&e>$_}function tv(e){return!e.spellMatched||e.toZone!==Q_?!1:e.casterSeatId===null?e.srcSeatId===null||e.srcSeatId===e.toId:e.toId===e.casterSeatId}function nv(e,
t){if(!e||!t.length)return!1;let n=e.seatContainer?.seatUIs;return!Array.isArray(n)||!n.length?!1:n.some(e=>{let n=pv(e),r=pv(n?.seat)??n;if(!r)return!1;let i=r.HasSkill;return typeof i==`function`&&t.some(e=>{try{return!!i.call(r,e)}catch{return!1}})})}function rv(e,
t,n){if(!e||!n.length)return!1;let r=e.seatContainer?.seatUIs;if(!Array.isArray(r))return!1;for(let e of r){let r=pv(e),i=pv(r?.seat)??r;if(!i||(dv(i)??dv(r))!==t)continue;let a=i.HasSkill;return typeof a==`function`&&n.some(e=>{try{return!!a.call(i,
e)}catch{return!1}})}return!1}function iv(e,t){let n=cv(e.spellNames??[],t);return[...new Set([...e.skillIds,...n].filter(e=>Number.isInteger(e)&&e>0))]}function av(e,t,n,r=()=>!1){if(!n||!t||e.triggerOnly)return!1;let i=t.seatContainer?.seatUIs;
if(!Array.isArray(i)||!i.length)return!1;let a=iv(e,t),o=new Set(e.generalNames??[]);return e.selfOnly?i.some(e=>{let n=pv(e),i=pv(n?.seat)??n,s=dv(pv(n?.seat))??dv(n);return s===null||!r(s)?!1:rv(t,s,a)||uv(i,o)}):nv(t,a)?!0:i.some(e=>{let t=pv(e);
return uv(pv(t?.seat)??t,o)})}var ov=null;function sv(e){ov=e}function cv(e,t){if(!e.length||!t)return[];let n=new Set(e),r=lv(t);if(!r)return ov?e.flatMap(e=>ov(e)):[];let i=[];for(let[e,t]of Object.entries(r)){let r=pv(t),a=typeof r?.name==`string`?r.name:typeof r?.Name==`string`?r.Name:typeof t==`string`?t:``;
if(!n.has(a))continue;let o=Number(r?.id??r?.ID??r?.spellId??e);Number.isInteger(o)&&o>0&&i.push(o)}return i}function lv(e){let t=pv(e);for(let e of[`spellDict`,`SpellDict`,`initMap`]){let n=pv(t?.[e]),r=pv(n?.spellDict)??n;if(r&&Object.keys(r).length)return r}let n=pv(pv(globalThis.jI)?.spellDict);
return n&&Object.keys(n).length?n:null}function uv(e,t){if(!e||!t.size)return!1;for(let n of[`General`,`general`,`General2`,`general2`]){let r=pv(e[n]);for(let e of[`cardName`,`specifyName`,`trueSpecifyName`,`Name`,`name`]){let n=r?.[e];if(typeof n==`string`&&t.has(n))return!0}}let n=pv(pv(globalThis.jI)?.generalDict);
return n?[...fv(e,[`generalIds`,`GeneralIds`,`WuJiangs`,`generals`]),Number(e.GeneralId),Number(e.General2Id)].some(e=>{let r=n[String(e)],i=typeof r==`string`?r:pv(r)?.name;return typeof i==`string`&&t.has(i)}):!1}function dv(e){if(!e)return null;
for(let t of[`seatID`,`seatId`,`SeatID`,`SeatId`,`index`,`Index`,`id`,`ID`]){let n=Number(e[t]);if(Number.isInteger(n)&&n>=0&&n<255)return n}return null}function fv(e,t){if(!e)return[];for(let n of t){let t=e[n];if(Array.isArray(t))return t.map(Number).filter(e=>Number.isInteger(e)&&e>0)}return[]}function pv(e){return e&&typeof e==`object`?e:null}var mv=new Map;
function hv(e,t){for(let n of e)mv.set(n,t)}var gv=(e,t)=>(n=>e(n.optType)?t(n):[]);hv([3659],e=>S_(e.seatId)?C_(e.seatId,[...e.datas],!0):[]),hv([3744],gv(e=>e!==73,e=>w_([...e.datas],`top`))),hv([3868],gv(e=>e===50,e=>w_([...e.datas],`top`))),
hv([7009],e=>w_([...e.datas],`top`)),hv([3336],gv(e=>e===50,e=>w_([...e.datas].reverse(),`bottom`)));function _v(e){return mv.get(e.spellId)?.(e)??[]}var vv=1,yv=11,bv=new Set([4400,4401]);function xv(e){return e.toZone===yv}function Sv(e){let t=[...e.cardIds];
if(e.spellId===713&&e.moveType===21&&e.cardCount===t.length-2){let e=t.splice(0,1)[0];t.splice(e,1)}return t}function Cv(e,t){let n=Math.max(0,e),r=t.filter(e=>e>0).length;return r!==0&&r!==n?Array.from({length:n},()=>0):Array.from({length:n},(e,
n)=>t[n]>0?t[n]:0)}var wv=[{match:e=>[3208,7011,987,988,3903].includes(e.spellId),position:b_.TOP},{match:e=>e.spellId===3746&&e.cardCount===1&&e.toZone===3,position:b_.TOP},{match:e=>e.spellId===3776&&e.toZone===10&&e.cardCount===3,position:b_.BOTTOM},
{match:e=>e.moveType===13&&e.cardCount===1,position:b_.TOP},{match:e=>e.spellId===795&&e.toZone===4&&e.moveType===8&&e.cardCount===1,position:b_.TOP},{match:e=>e.spellId===3101&&e.toZone===5&&e.cardCount===1,position:b_.BOTTOM},{match:(e,t)=>!t&&[7016,7017].includes(e.spellId)&&e.toZone===5&&e.cardCount===1,
position:b_.TOP}];function Tv(e,t={}){if(e.fromZone!==vv||e.fromPosition!==b_.UNSPECIFIED)return e.fromPosition;let n=t.nationWar===!0;return wv.find(t=>t.match(e,n))?.position??e.fromPosition}var Ev=new Set([605]);function Dv(e){return Ev.has(e.spellId)&&e.fromZone===5}function Ov(e){return e.toZone===vv&&e.toId===255&&e.toPosition===b_.TOP&&e.cardIds.some(e=>bv.has(e))?b_.UNSPECIFIED:e.toPosition}var kv=[e=>e.spellId===7011&&e.moveType===19,
e=>e.spellId===3744&&e.moveType===21];function Av(e){return e.fromZone!==e.toZone||e.fromId!==e.toId||!e.cardIds.some(e=>e>0)?!1:!kv.some(t=>t(e))}var jv=5,Mv=1,Nv=2,Pv=3,Fv=4,Iv=8,Lv=10,Rv=255,zv=361,Bv=1,Vv=2,Hv=3065,Uv=3157,Wv=new Set([3750,3753]),
Gv=3511,Kv=3488,qv=3543,Jv=3571,Yv=1,Xv=2,Zv=780;function Qv(e){let t=null,n=null,r=new Map,i=new Map,a=new Map,o=null,s=new Map,c=null,l=[],u=new Map,d=new Map,f=new Map,p=null;function m(s){if(s.type===`game-started`||s.type===`game-ended`){v();
return}if(s.type===`phase-changed`){t=s.seatId;return}if(s.type===`seat-state-changed`&&s.stateId===Jv){d.set(s.seatId,Math.trunc(s.value/100));return}if(s.type===`spell-data-updated`&&s.dataId===Jv){let e=s.datas[0];(e===Yv||e===Xv)&&u.set(s.seatId,
e);return}if(s.type===`spell-opt-rep`){n&&s.spellId===zv&&s.optType===22&&s.seatId===n.casterSeatId&&(s.datas[0]===Bv||s.datas[0]===Vv)&&(n.choice=s.datas[0]);return}if(s.type!==`spell-targeted`)return;let c=$v(s.cardIds);if(s.spellId===zv){let e=s.targetSeatIds.filter(e=>e!==s.seatId);
n=e.length===1&&s.targetSeatIds.length===1?{casterSeatId:s.seatId,targetSeatId:e[0],shown:[],choice:0}:n;return}if(s.spellId===Hv&&s.effectIndex===1&&c.length){r.set(s.seatId,c);return}if(s.spellId===Uv&&c.length){i.set(s.seatId,c);return}if(Wv.has(s.spellId)){let e=`${s.spellId}-${s.seatId}`;
a.delete(e),s.effectIndex===2&&!s.targetSeatIds.length&&c.length&&a.set(e,c);return}if(s.spellId===Gv&&c.length&&e.isControlledSeat(s.seatId)){o=c;return}s.spellId===Jv&&s.effectIndex===1&&f.set(s.seatId,[])}function h(u){let d=$v(u.cardIds),
m=d.length===0,h=u.cardCount;if(u.spellId===zv&&n){let t=n;if(u.moveType===21&&u.fromZone===jv&&u.toZone===jv&&u.fromId===t.targetSeatId&&u.toId===t.targetSeatId&&d.length===h)return t.shown=d,null;if(u.moveType===18&&u.fromZone===jv&&u.toZone===jv&&u.fromId===t.targetSeatId&&u.toId===t.casterSeatId){if(n=null,!m||!t.shown.length)return null;
let r=e.hand(t.targetSeatId),i=t.shown.filter(e=>r.known.includes(e));return i.length===t.shown.length?t.choice===Bv?ey(i,h):t.choice===Vv&&r.unknownCount===0?ey(r.known.filter(e=>!t.shown.includes(e)),h):null:null}}if(u.spellId===Hv&&u.moveType===15&&u.fromZone===jv&&u.toZone===Fv&&u.toZoneParam===Hv&&u.toId===u.fromId){let e=ty(r,
u.fromId);return m&&e?ey(e,h):null}if(u.spellId===Uv&&u.fromZone===Nv&&u.toZone===jv){let e=ty(i,u.toId);return m&&e?ey(e,h):null}if(Wv.has(u.spellId)&&u.fromZone===Nv&&u.toZone===Mv&&u.toPosition===b_.TOP&&u.moveType===15&&u.srcSeatId!==null&&u.srcSeatId!==void 0){let e=ty(a,
`${u.spellId}-${u.srcSeatId}`);return m&&e?ey(e,h):null}if(u.spellId===Gv&&u.fromZone===Nv&&u.toZone===jv&&o){let e=o;return!m||e.length!==h?null:(o=null,[...e])}if(u.spellId===Kv&&m&&u.moveType===11){if(u.fromZone===jv&&u.toZone===Lv){let e=s.get(u.fromId)??null;
return c=e,e?ey([e],h):null}if(u.fromZone===Lv&&(u.toZone===Mv||u.toZone===Nv)){let e=c;return c=null,e?ey([e],h):null}}if(u.spellId===qv&&m&&u.fromZone===Nv&&u.toZone===Mv)return ey([...l].reverse().filter(t=>e.isRedCard(t)===!0).slice(0,h),
h);if(u.spellId===Jv&&u.fromZone===Iv&&u.toZone===jv&&u.moveType===8){let e=m?g(u):null;return f.delete(u.toId),e}if(u.spellId===Zv&&m&&u.fromZone===jv&&u.toZone===Mv&&u.fromPosition===b_.UNSPECIFIED&&h===1&&u.fromId!==t&&p!==null&&e.hand(u.fromId).known.includes(p)){let e=p;
return p=null,[e]}return null}function g(t){let n=d.get(t.toId),r=n===Yv||n===Xv?n:u.get(t.toId);if(r!==Yv&&r!==Xv)return null;let i=f.get(t.toId);if(!i?.length)return null;let a=new Set(e.zoneCardIds(t.fromId,Iv));return ey(i.filter(t=>a.has(t)&&e.isRedCard(t)===(r===Yv)),
t.cardCount)}function _(e,n){let r=$v(n);if(e.toZone===Nv&&e.toId===Rv&&r.length&&(l.push(...r),l.length>200&&l.splice(0,l.length-200)),e.fromZone===Nv&&e.fromId===Rv&&r.length){let e=new Set(r);for(let t=l.length-1;t>=0;--t)e.has(l[t])&&l.splice(t,1)}if(e.spellId===Kv&&e.moveType===21&&e.fromZone===jv&&e.toZone===jv&&r.length===1&&s.set(e.fromId,
r[0]),e.spellId===Jv&&e.fromZone===Pv&&e.toZone===Iv&&e.moveType===6&&e.srcSeatId!==null&&e.srcSeatId!==void 0&&r.length===e.cardCount){let t=f.get(e.srcSeatId)??[];f.set(e.srcSeatId,[...new Set([...t,...r])])}e.spellId===Zv&&e.fromZone===jv&&e.toZone===jv&&e.fromPosition===b_.UNSPECIFIED&&e.cardCount===1&&e.fromId===t&&(p=r[0]??null)}function v(){n=null,
r.clear(),i.clear(),a.clear(),o=null,s.clear(),c=null,l.length=0,u.clear(),d.clear(),f.clear(),p=null}return{observe:m,recover:h,record:_,clear:v}}function $v(e){return e.filter(e=>Number.isInteger(e)&&e>0)}function ey(e,t){return e.length===t&&t>0?[...e]:null}function ty(e,
t){let n=e.get(t)??null;return e.delete(t),n}function ny(e,t,{engine:n,isRedCard:r=()=>null}={}){let i=n??A_(),a=Qv({hand(t){let n=e.getSnapshot().seats.find(e=>e.seatId===t);return{known:n?.knownCards.map(e=>e.cardId).filter(e=>e>0)??[],unknownCount:n?.unknownCardCount??0}},
zoneCardIds:(e,t)=>i.getZoneCardIds(j_(e,t)),isControlledSeat:e=>w(e),isRedCard:r}),o=new Map,s=0,c=new Set,l=[],u=new Map,d=null,f=null,p=0,m=null,h=!1,g=!1,_=!1,v=e.subscribe(t=>{if(!g){g=!0;try{t.seats.forEach(t=>{let n=new Set((t.equipmentCards??[]).map(e=>e.cardId).filter(e=>e>0));
t.knownCards.forEach(r=>{if(n.has(r.cardId))return;i.observeKnownHandCard(r.cardId,t.seatId,r.tags);let a=i.getPersistentTags(r.cardId);a.length&&e.setPersistentKnownCardTags(r.cardId,a)})})}finally{g=!1}_&&C()}}),y=t.subscribe(t=>{if(t.type===`cards-moved`){E(t);
return}let n=t;if(a.observe(n),n.type===`deck-shuffled`){S();return}if(n.type===`game-reconnected`){S(),_=!0,C();return}if(n.type===`game-ended`){o.clear(),s=0,i.clear(),D(),e.resetKnownHands();return}if(n.type===`game-started`){o.clear(),s=0,
D(),i.clear(),e.resetKnownHands();return}if(n.type===`card-list-ready`){B_(`card-list`,{count:n.cardIds.length,maxId:Math.max(...n.cardIds)});return}if(n.type===`hand-cards-revealed`){B_(`reveal`,{source:`hand-cards-revealed`,zone:`hand`,ownerId:n.seatId,
cardIds:[...n.cardIds]}),n.cardIds.forEach(e=>{i.observeKnownHandCard(e,n.seatId,[])}),e.revealKnownHand(n.seatId,n.cardIds);return}if(n.type===`temporary-cards-reordered`){by(n,o);return}if(n.type===`opt-target`){let t=n.srcSeatId??n.seatId,
r=X_({spellId:n.spellId,param:n.param,params:n.params,srcSeatId:t,targetSeatId:n.targetSeatId,isSelfSrc:w(t)});B_(`opt-target`,{spellId:n.spellId,param:n.param,params:[...n.params],optType:n.optType??null,srcSeatId:t,targetSeatId:n.targetSeatId,
matchedReveals:r.length}),V_(r,i,e,`opt-target:${n.spellId}`);return}if(n.type===`spell-opt-rep`){let t=_v({spellId:n.spellId,optType:n.optType,seatId:n.seatId,datas:n.datas,isSelfSeat:w(n.seatId)});B_(`spell-opt-rep`,{spellId:n.spellId,optType:n.optType,
seatId:n.seatId,datas:[...n.datas],matchedReveals:t.length}),V_(t,i,e,`spell-opt-rep:${n.spellId}`);return}if(n.type===`seat-state-changed`&&n.stateId===oy){ee(n.seatId,n.value);return}if(n.type===`player-died`){te(n.seatId,n.killerSeatId);
return}n.type===`cards-used`&&n.cardIds.filter(e=>e>0).forEach(b),n.type===`phase-changed`&&ev(n.phase)&&x(),n.type===`spell-targeted`&&sy.has(n.spellId)&&ne(n.seatId,n.targetSeatIds),n.type===`spell-targeted`&&(ie(n),ay(n.spellId)&&(m={seatId:n.seatId,
expiresAfterMovement:p+8}))});function b(t){i.getPersistentTags(t).includes(`心幽`)&&(i.forgetPersistentCardTag(t,Z_),e.setPersistentKnownCardTags(t,i.getPersistentTags(t)))}function x(){i.getSnapshot().records.forEach(e=>{e.persistentTags.includes(`心幽`)&&b(e.cardId)})}function S(){o.clear(),
s=0,l.length=0,m=null,a.clear(),i.clearKnownDrawPileOrder()}function C(){let t=e.getSnapshot();t.inGame&&(i.reconcileVisibleHands(t.seats.map(e=>{let t=new Set((e.equipmentCards??[]).map(e=>e.cardId).filter(e=>e>0));return{seatId:e.seatId,cardIds:e.knownCards.map(e=>e.cardId).filter(e=>e>0&&!t.has(e))}})),
_=!1)}function w(t){if(t===null)return!1;let n=e.getSnapshot();return t===n.selfSeatId||n.controlledSeatIds.includes(t)}function T(t){let n=t.cardIds.filter(e=>e>0);if(t.fromZone===5){let r=t.moveType===ly&&n.length===t.cardCount;return V_([{zone:`hand`,
ownerId:t.fromId,cardIds:n,position:`unspecified`,partial:!r}],i,e,`same-zone-show:${t.spellId}`),!0}return t.fromZone===1&&t.fromId===255&&(B_(`reveal`,{source:`same-zone-show:${t.spellId}`,zone:`deck`,ownerId:t.fromId,cardIds:n,position:t.toPosition}),
i.observeKnownDrawPileCards(n,t.toPosition),!0)}function E(t){if(xv(t))return;let n={...t,cardIds:Cv(t.cardCount,Sv(t)),fromPosition:Tv(t,{nationWar:e.getSnapshot().mode===`nation-war`}),toPosition:Ov(t)},r=a.recover(n),c=r?{...n,cardIds:r}:n;
if(Av(c)&&T(c)){a.record(c,c.cardIds);return}p+=1,ae(),oe(c.cardIds),f&&p>f.expiresAfterMovement&&(f=null);let l=hy(ry(c)?{...c,fromPosition:cy}:c,o),u={...c,cardIds:l},h=re(c),g=O(u),_=c.fromZone===5&&!py(u,e),v=g.some(e=>e>0)?g:_?[...u.cardIds]:i.resolveHiddenMovement(u,
h),y=v.some(e=>e>0)?v:dy(u,e,i),b=c.fromZone===5&&!y.some(e=>e>0),x=b&&py(u,e),S=x?my(u,e):y;tv({spellMatched:ay(c.spellId),toZone:c.toZone,toId:c.toId,srcSeatId:c.srcSeatId??null,casterSeatId:m&&p<=m.expiresAfterMovement?m.seatId:null})&&S.filter(e=>e>0).forEach(e=>{i.rememberPersistentCardTag(e,
Z_)}),h!==null&&S.some(e=>e>0)&&(S.filter(e=>e>0).forEach(e=>{i.rememberPersistentCardTag(e,`炁`,h)}),f=null,d=null),B_(`move`,{spellId:c.spellId,moveType:c.moveType,from:[c.fromZone,c.fromId,t.fromPosition],to:[c.toZone,c.toId,c.toPosition],
count:c.cardCount,rawIds:[...t.cardIds],resolvedIds:[...S],remappedFromPosition:c.fromPosition===t.fromPosition?void 0:c.fromPosition}),_y(c,S,o,()=>++s),i.applyMovement(c,S),a.record(c,S);let C=S.filter(e=>e>0);k_.has(c.toZone)&&C.length&&i.addZoneCardIds(y_.UNKNOWN,
C),k_.has(c.fromZone)&&C.length&&i.removeZoneCardIds(y_.UNKNOWN,C),S.forEach(t=>{let n=i.getPersistentTags(t);n.length&&e.setPersistentKnownCardTags(t,n)}),e.applyKnownHandMovement({cardCount:c.cardCount,cardIds:S,fromSeatId:c.fromId,fromZone:c.fromZone,
toSeatId:c.toId,toZone:c.toZone}),b&&e.applyHiddenHandMovement({fromSeatId:c.fromId,toSeatId:c.toZone===5?c.toId:null,wholeHand:x})}function D(){c.clear(),l.length=0,u.clear(),d=null,f=null,m=null,p=0,h=!1}function ee(e,t){if(h=!0,t>0){c.add(e);
return}c.has(e)&&(u.set(e,new Set([...c].filter(t=>t!==e))),c.delete(e))}function te(e,t){if(!(!h||(c.has(e)?t!==null&&c.has(t):t!==null&&u.get(e)?.has(t)===!0))){d=null,u.delete(e);return}d={victimSeatId:e,killerSeatId:t},u.delete(e)}function ne(e,
t){let n=[...new Set(t)].filter(t=>t!==e);n.length===1&&(f={originalOwnerSeatId:n[0],recipientSeatId:e,expiresAfterMovement:p+2})}function re(e){return e.fromZone!==2||e.toZone!==5||e.cardIds.some(e=>e>0)?null:f?.recipientSeatId===e.toId?f.originalOwnerSeatId:d&&(d.killerSeatId===null||d.killerSeatId===e.toId)?d.victimSeatId:null}function ie(e){let t=[...new Set(e.cardIds.filter(e=>e>0))];
t.length&&(l.push({spellId:e.spellId,casterSeatId:e.seatId,targetSeatIds:[...e.targetSeatIds],cardIds:t,expiresAfterMovement:p+6}),l.length>12&&l.splice(0,l.length-12))}function ae(){for(let e=l.length-1;e>=0;--e)p>l[e].expiresAfterMovement&&l.splice(e,1)}function oe(e){let t=new Set(e.filter(e=>e>0));
if(t.size)for(let e=l.length-1;e>=0;--e)l[e].cardIds.some(e=>t.has(e))&&l.splice(e,1)}function O(e){if(e.cardIds.some(e=>e>0)||e.fromZone===1)return[...e.cardIds];let t=l.filter(t=>t.cardIds.length===e.cardCount&&(!e.spellId||!t.spellId||e.spellId===t.spellId)&&(t.casterSeatId===e.fromId||t.casterSeatId===e.toId||t.targetSeatIds.includes(e.fromId)||t.targetSeatIds.includes(e.toId)));
if(t.length!==1)return[...e.cardIds];let[n]=t;return l.splice(l.indexOf(n),1),[...n.cardIds]}return{engine:i,dispose(){y(),v(),o.clear(),s=0,D(),a.clear()}}}function ry(e){return e.spellId===3208&&e.fromZone===10&&e.toZone===5&&!e.cardIds.some(e=>e>0)}var iy={id:`xinyou`,
title:`心幽`,skillIds:[],spellNames:[`心幽`]};function ay(e){return!Number.isInteger(e)||e<=0?!1:iv(iy,I(window)).includes(e)}var oy=3730,sy=new Set([3730,3731]),cy=0,ly=24,uy=4;function dy(e,t,n){if(e.cardIds.some(e=>e>0)||e.cardCount<=0)return[...e.cardIds];
let r=t.getSnapshot(),i=fy(e,r.seats.find(t=>t.seatId===e.fromId),r.controlledSeatIds.includes(e.fromId),n);if(!i.length)return[...e.cardIds];if(i.length===e.cardCount)return i;if(e.fromZone!==5||!r.controlledSeatIds.includes(e.fromId))return[...e.cardIds];
let a=e.fromPosition;return!Number.isInteger(a)||a<0||a+e.cardCount>i.length?[...e.cardIds]:i.slice(a,a+e.cardCount)}function fy(e,t,n,r){let i=e=>[...new Set(e.filter(e=>e>0))];if(e.fromZone===5&&t){let e=i(t.knownCards.map(e=>e.cardId));if(n||t.unknownCardCount===0)return e}return e.fromZone===uy&&t?i((t.equipmentCards??[]).map(e=>e.cardId)):i([...r.getZoneCardIds(j_(e.fromId,
e.fromZone))])}function py(e,t){if(e.fromZone!==5)return!1;if(Dv(e))return!0;let n=t.getSnapshot().seats.find(t=>t.seatId===e.fromId);if(!n)return!1;let r=n.knownCards.length+n.unknownCardCount;return r>0&&e.cardCount>=r}function my(e,t){let n=t.getSnapshot().seats.find(t=>t.seatId===e.fromId)?.knownCards.map(e=>e.cardId).filter(e=>e>0)??[];
return!n.length||n.length>e.cardCount?[...e.cardIds]:[...n,...Array.from({length:e.cardCount-n.length},()=>0)]}function hy(e,t){if(e.cardIds.filter(e=>e>0).length||!k_.has(e.fromZone))return[...e.cardIds];let n=xy(e.fromId,e.fromZone,e.fromPosition,
e.fromZoneParam,e.spellId),r=t.get(n);if(r&&r.cardIds.length>=e.cardCount)return gy(r,e);let i=`${e.fromId}:${e.fromZone}:`,a=[...t.entries()].filter(([t,n])=>{if(!t.startsWith(i)||!t.endsWith(`:${e.spellId}`)||n.cardIds.length<e.cardCount)return!1;
let[,,,r]=t.split(`:`).map(Number);return!e.fromZoneParam||r===e.fromZoneParam});return a.length===1?gy(a[0][1],e):[...e.cardIds]}function gy(e,t){let n=t.cardCount;return n<=0||n>e.logicalCardIds.length?[...t.cardIds]:n===e.logicalCardIds.length?[...e.logicalCardIds]:t.fromPosition===cy?e.logicalCardIds.slice(-n):e.logicalCardIds.slice(0,
n)}function _y(e,t,n,r){let i=t.filter(e=>e>0);if(k_.has(e.fromZone)&&vy(n,e,i,r),!k_.has(e.toZone)||!i.length)return;let a=xy(e.toId,e.toZone,e.toPosition,e.toZoneParam,e.spellId),o=n.get(a),s=[...new Set([...o?.cardIds??[],...i])];n.delete(a),
n.set(a,yy(s,r()))}function vy(e,t,n,r){let i=`${t.fromId}:${t.fromZone}:`;for(let[t,a]of[...e]){if(!t.startsWith(i))continue;let o=a.cardIds.filter(e=>!n.includes(e));o.length?(e.delete(t),e.set(t,yy(o,r()))):e.delete(t)}}function yy(e,t=0){return{cardIds:[...e],
logicalCardIds:[...e],gridByCardId:new Map(e.map((e,t)=>[e,t])),topGridCount:e.length,traceClosed:!1,sequence:t}}function by(e,t){let n=[...t.entries()].filter(([t])=>t.startsWith(`${e.seatId}:`)&&t.endsWith(`:${e.spellId}`)).filter(([t])=>e.zoneParam===null||e.zoneParam===void 0||Number(t.split(`:`)[3])===e.zoneParam).sort((e,
t)=>t[1].sequence-e[1].sequence);if(!n.length)return;let[r,i]=n[0];if(e.trace.length===1){i.traceClosed=!0;return}let[a,o,s]=e.trace;if(a>=i.logicalCardIds.length||o>=i.topGridCount*2)return;let c=i.logicalCardIds[a],l=i.gridByCardId.get(c);
if(l===void 0)return;let u=[...i.gridByCardId].find(([e,t])=>e!==c&&t===o)?.[0];u!==void 0&&i.gridByCardId.set(u,l),i.gridByCardId.set(c,o),i.logicalCardIds.splice(a,1);let d=(s%i.topGridCount+i.topGridCount)%i.topGridCount;i.logicalCardIds.splice(Math.min(d,
i.logicalCardIds.length),0,c),i.sequence=Math.max(i.sequence,...n.map(([,e])=>e.sequence))+1,t.delete(r),t.set(r,i)}function xy(e,t,n,r,i){return`${e}:${t}:${n}:${r}:${i}`}var Sy=5,Cy=1,wy=255;function Ty(e,t){let n=`${Sy}-`,r=j_(wy,Cy),i=[],
a=[];for(let o of Oy(t)){let{zones:t}=e.findKZ(o),s=t.some(e=>e.startsWith(n)),c=t.includes(r)||t.some(e=>e.startsWith(`${Cy}-`));s&&i.push(o),c&&a.push(o)}let o=i,s=a,c=Oy(t);return s.length===2?o=c.filter(e=>!s.includes(e)):o.length===1&&(s=c.filter(e=>!o.includes(e))),
{handCardIds:o,deckCardIds:s}}function Ey(e){let t=Oy(e.candidateIds),n=new Set(Oy(e.handCardIds)),r=new Set(Oy(e.deckCardIds)),i=t.filter(e=>n.has(e)),a=t.filter(e=>r.has(e));return a.length===2?i=t.filter(e=>!a.includes(e)):i.length===1&&(a=t.filter(e=>!i.includes(e))),
{handCardIds:i,deckCardIds:a}}function Dy(e){let t=e.getSnapshot(),n=[],r=[];for(let[e,i]of Object.entries(t.zones))e.startsWith(`${Sy}-`)&&n.push(...i),(e.startsWith(`${Cy}-`)||e===j_(wy,Cy))&&r.push(...i);return r.push(...e.getDrawPileCardIds()),
{handCardIds:Oy(n),deckCardIds:Oy(r)}}function Oy(e){let t=new Set,n=[];for(let r of e){let e=Number(r);!Number.isInteger(e)||e<=0||t.has(e)||(t.add(e),n.push(e))}return n}var ky=41,Ay=50,jy=4,My=4,Ny=5,Py=.72,Fy=`#D90000`,Iy=10,Ly=2/3,Ry=12,
zy=2,By=10,Vy=14,Hy=.85,Uy=8,Wy=26,Gy=120,Ky=250,qy=`fzltchjw`,Jy=`__xcVueMingpaiNativeGuard`;function Yy(e,t,n,r,i){let a=!1,o=null,s=null,c=null,l=new Map,u=new Map,d=new Map,f=new Map,p=[],m=!1,h=0,g=null,_=[],v=null,y=``,b=null,x=0,S=()=>{x&&window.clearTimeout(x),
x=0},C=()=>{b===null&&(S(),x=window.setTimeout(()=>{x=0,w()},Gy))};function w(){if(_.forEach(e=>sm(e)),_=[],v=null,y=``,g){om(g);try{H(g,`removeSelf`),typeof g.addDrawChild!=`function`&&H(g,`destroy`,!1)}catch{}}g=null}function T(e){Zy(e),sb(e.strip),
l.delete(e.seatId),v===e.seatId&&w(),b===e.seatId&&(b=null)}function E(){S(),w(),[...l.values()].forEach(T),c&&sb(c),o=s=c=null,b=null}function D(){let e=U(I(window)),t=U(e?.gameRoundInfo),n=U(t?._parent)??t??e;if(!e||!n||e.destroyed||n.destroyed)return E(),
null;if(o!==e||s!==n||!c||c.destroyed||!(c.parent||c._parent)){E();let t=ib(`xcVueMingpaiPreviewRoot`);if(!t)return null;t.mouseEnabled=!0,t.mouseThrough=!0,t.zOrder=2e5,H(t,`pos`,0,0),H(n,`addChild`,t),H(n,`sortChildren`),o=e,s=n,c=t}let r=tb(c);
return H(c,`size`,Math.max(1,Number(s?.width)||r.x+r.width),Math.max(1,Number(s?.height)||r.y+r.height)),c}function ee(e,t){let n=ib(`xcVueMingpaiPreviewStrip-${e}`),r=ib(`xcVueMingpaiPreviewHit-${e}`);if(!n||!r)return null;n.mouseEnabled=!0,
n.mouseThrough=!0,n.zOrder=100+e,r.mouseEnabled=!0,r.mouseThrough=!1,r.hitTestPrior=!0,r.zOrder=1e3,H(n,`addChild`,r),H(t,`addChild`,n);let i={seatId:e,strip:n,hit:r,signature:``,cardIds:[],possibleIds:[],tagsByCardId:new Map,anchor:null,nativeSprite:null},
a=ub();return H(r,`on`,a?.ROLL_OVER??`mouseover`,i,()=>{(b===null||b===e)&&(S(),ie(i))}),H(r,`on`,a?.ROLL_OUT??`mouseout`,i,C),H(r,`on`,a?.CLICK??`click`,i,t=>{H(t,`stopPropagation`),S(),b=b===e?null:e,b===null?w():ie(i)}),l.set(e,i),i}function te(e,
t,n,r,i){let a=[{cardIds:t,possible:!1},{cardIds:n,possible:!0}].filter(e=>e.cardIds.length),o=`${t.join(`,`)}|${n.join(`,`)}|${JSON.stringify([...r])}`;e.signature!==o&&(cb(e.strip).filter(t=>t!==e.hit).forEach(sb),a.forEach((t,n)=>{let i=n*54,
a=t.cardIds.length>Ny,o=a?t.cardIds.slice(0,4):t.cardIds;if(o.forEach((n,a)=>{let o=ne(n,t.possible,r.get(n)??[]);o&&(H(o,`pos`,45*a,i),o.zOrder=a+2,H(e.strip,`addChild`,o))}),a){let t=re();t&&(H(t,`pos`,45*o.length,i),t.zOrder=o.length+2,H(e.strip,
`addChild`,t))}}),H(e.strip,`sortChildren`),e.signature=o),e.cardIds=t,e.possibleIds=n,e.tagsByCardId=r,e.anchor=i;let s=Math.max(0,...a.map(e=>Math.min(e.cardIds.length,Ny))),l=s*ky+Math.max(0,s-1)*jy,u=a.length*Ay+Math.max(0,a.length-1)*My,
d=tb(c),f=l*Ly,p=u*Ly,m=db(i.x-zy,d.x+Ry,d.x+d.width-f-Ry),h=db(i.y+i.height+By,d.y+Ry,d.y+d.height-p-Ry);H(e.strip,`size`,l,u),H(e.strip,`scale`,Ly,Ly),e.strip.scaleX=Ly,e.strip.scaleY=Ly,H(e.strip,`pos`,m,h),H(e.hit,`size`,l,u),H(e.hit,`pos`,0,0),
e.strip.visible=a.length>0}function ne(e,t=!1,r=[]){let i=n.resolve(e),a=ib(`xcVueMingpaiPreviewTag-${e}`);if(!a)return null;a.mouseEnabled=!1,a.mouseThrough=!0,H(a,`size`,ky,Ay),ob(a,ky,Ay,`rgba(255, 239, 207, 0.7)`,`#392F22`,1,4);let o=i.isRed?`#E23E3E`:`#020000`,
s=i.rank||`?`,c=i.suitGlyph||``,l=ib(`xcVueMingpaiPreviewRankSuit`),u=ab(c,20,o,`left`),d=ab(s,20,o,`left`);if(l&&u&&d){l.mouseEnabled=!1,l.mouseThrough=!0;let e=Math.max(1,Math.ceil(Number(d.textWidth)||20*Math.max(.55,s.length*.55))),t=c?Math.max(1,
Math.ceil(Number(u.textWidth)||20)):0,n=e+t,r=Math.min(1,ky/n);H(l,`size`,n,31),l.scaleX=r,H(l,`pos`,(ky-n*r)/2,0),H(u,`size`,t,31),H(u,`pos`,0,0),H(d,`size`,e,31),H(d,`pos`,t,0),H(l,`addChild`,u),H(l,`addChild`,d),H(a,`addChild`,l)}let f=ab((i.name||`?`).slice(0,2)||`?`,18,
`#020000`,`center`);if(f&&(H(f,`size`,ky,26),H(f,`pos`,0,26),H(a,`addChild`,f)),t){let e=Math.max(9,Math.round(ky*.27)),t=Math.max(14,Math.round(Ay*.34)),n=ab(`?`,Math.max(13,Math.round(Ay*.28)),Fy,`center`,!0);n&&(n.name=`xcVueMingpaiPossibleMark`,
H(n,`size`,e,t),H(n,`pos`,30,33),H(a,`addChild`,n)),a.alpha=Py}if(r.length){let t=ab(r.join(`·`),10,`#FFF1A8`,`center`,!0);t&&(t.name=`xcVueMingpaiPersistentTag-${e}`,t.stroke=2,t.strokeColor=`#332411`,H(t,`size`,ky,14),H(t,`pos`,0,0),H(a,`addChild`,
t))}return a}function re(){let e=ib(`xcVueMingpaiPreviewEllipsis`);if(!e)return null;e.mouseEnabled=!1,e.mouseThrough=!0,H(e,`size`,ky,Ay),ob(e,ky,Ay,`rgba(255, 239, 207, 0.7)`,`#392F22`,1,4);let t=ab(`…`,22,`#020000`,`center`);return t&&(H(t,
`size`,ky,Ay),H(t,`pos`,0,-1),H(e,`addChild`,t)),e}function ie(e){if(!c||!e.anchor||!e.cardIds.length&&!e.possibleIds.length){w();return}let n=tb(c),r=rb(e.anchor,n),i=r===`right`?n.x+n.width-Ry-e.anchor.x-e.anchor.width-Vy:e.anchor.x-n.x-Ry-Vy,
a=Math.round(93*Hy),o=Math.round(130*Hy),s=Math.max(a+16,i||1600),l=[{label:`确定牌（${e.cardIds.length}）`,color:`#FFF3D0`,cardIds:e.cardIds,possible:!1},{label:`可能牌（${e.possibleIds.length}）`,color:`#C9C1B1`,cardIds:e.possibleIds,possible:!0}].filter(e=>e.cardIds.length).map(e=>{let t=e.cardIds.length,
n=Math.max(1,Math.min(t,Math.floor((s-16+8)/(a+8))||1)),r=Math.ceil(t/n),i=16+n*a+Math.max(0,n-1)*8,c=Wy+r*o+Math.max(0,r-1)*8;return{...e,columns:n,rows:r,width:i,height:c}}),f=Math.min(s,Math.max(...l.map(e=>e.width))),p=16+l.reduce((e,t)=>e+t.height,0)+Math.max(0,
l.length-1)*Iy,m=t.getSnapshot().controlledSeatIds.includes(e.seatId)&&e.seatId!==t.getSnapshot().selfSeatId,h=u.get(e.seatId)??new Set,b=d.get(e.seatId)??new Set,x=`${e.seatId}:${e.cardIds.join(`,`)}|${e.possibleIds.join(`,`)}:${[...h].join(`,
`)}:${[...b].join(`,`)}:${m}:${Math.round(f)}:${r}`;if(!g||y!==x){w();let t=ib(`xcVueMingpaiCardList`);if(!t)return;t.mouseEnabled=!0,t.mouseThrough=!1,t.zOrder=1e4,H(t,`size`,f,p),ob(t,f,p,`rgba(29, 23, 18, 0.96)`,`#C9A15D`,1,6);let n=ub();
H(t,`on`,n?.ROLL_OVER??`mouseover`,t,S),H(t,`on`,n?.ROLL_OUT??`mouseout`,t,C),H(c,`addChild`,t);let r=Uy;l.forEach((i,s)=>{let c=r,u=ab(i.label,14,i.color,`left`);u&&(H(u,`size`,Math.max(1,f-16),Wy),H(u,`pos`,Uy,c),H(t,`addChild`,u)),i.cardIds.forEach((r,
s)=>{let l=s%i.columns,u=Math.floor(s/i.columns),d=Uy+l*(a+8),f=c+Wy+u*(o+8),p=$p(t,r,a,o);if(p)H(p.ui,`pos`,d,f),_.push(p);else{let n=ne(r,i.possible,e.tagsByCardId.get(r)??[]);if(n){let e=a/ky,r=o/Ay;H(n,`scale`,e,r),n.scaleX=e,n.scaleY=r,
H(n,`pos`,d,f),H(t,`addChild`,n)}}if(i.label.startsWith(`确定牌`)&&m){if(h.has(r)||b.has(r)){let e=ab(h.has(r)?`队友标记`:`已选择`,13,`#8FE6FF`,`center`,!0);e&&(e.name=`xcVueMingpaiTeamMarker-${r}`,e.stroke=2,e.strokeColor=`#142B39`,e.zOrder=1500+s,H(e,
`size`,a,18),H(e,`pos`,d,f+o-20),H(t,`addChild`,e))}let i=ib(`xcVueMingpaiTeamMarkHit-${e.seatId}-${r}`);i&&(i.mouseEnabled=!0,i.mouseThrough=!1,i.hitTestPrior=!0,i.zOrder=1800+s,H(i,`size`,a,o),H(i,`pos`,d,f),H(i.graphics,`drawRect`,0,0,a,
o,`rgba(0,0,0,0.01)`,null,0),H(i,`on`,n?.CLICK??`click`,i,t=>{H(t,`stopPropagation`),O(e,r)}),H(t,`addChild`,i))}if(i.possible){p&&(p.ui.alpha=Py);let e=ab(`?`,22,Fy,`center`,!0);e&&(e.name=`xcVueMingpaiPopupPossibleMark-${r}`,e.zOrder=900+s,
H(e,`size`,18,24),H(e,`pos`,d+a-22,f+o-30),H(t,`addChild`,e))}}),r+=i.height+(s<l.length-1?Iy:0)}),g=t,y=x}v=e.seatId;let T=db(r===`right`?e.anchor.x+e.anchor.width+Vy:e.anchor.x-f-Vy,n.x+Ry,n.x+n.width-f-Ry),E=db(e.anchor.y+(e.anchor.height-p)/2,
n.y+Ry,n.y+n.height-p-Ry);H(g,`pos`,T,E)}function ae(){if(a)return;if(!e.get(`display.seatUiEnabled`)){E();return}let n=t.getSnapshot();if(!n.inGame){E();return}let i=D();if(!i||!o)return;let s=Qy(o),c=r?.getSnapshot(),u=Date.now(),d=u-h>=1e3;
d&&(h=u);let f=new Set;for(let e of n.seats){let t=s.get(e.seatId);if(t&&d&&le(ue(t),[`炁`],!1),t){let e=de(t),n=ue(t);e.forEach(e=>se(e)),n.forEach(e=>se(e)),le(n,[`心幽`],!0),le(e,[`心幽`],!0)}if(e.seatId===n.selfSeatId)continue;let a=t?$y(t,i):null,
o=r?.getHandCardIds(e.seatId)??[],u=new Set((e.equipmentCards??[]).map(e=>e.cardId).filter(e=>e>0)),p=[...new Set([...e.knownCards.map(e=>e.cardId),...o])].filter(e=>e>0&&!u.has(e)),m=new Map((c?.records??[]).filter(e=>e.persistentTags.length).map(e=>[e.cardId,
e.persistentTags])),h=new Map(p.flatMap(t=>{let n=e.knownCards.find(e=>e.cardId===t)?.tags??[],r=m.get(t)??[],i=mb([...n,...r]);return i.length?[[t,i]]:[]})),g=(e.possibleCards??[]).map(e=>e.cardId).filter(e=>e>0&&!u.has(e)),_=l.get(e.seatId);
if(!t||!a||!p.length&&!g.length){_&&T(_);continue}let y=_??ee(e.seatId,i);y&&(Xy(y,t),te(y,p,g,h,a),f.add(e.seatId),v===e.seatId&&ie(y))}[...l.values()].filter(e=>!f.has(e.seatId)).forEach(T)}function oe(){if(!(a||m)){m=!0;try{ae()}finally{m=!1}}}function O(e,
n){let r=t.getSnapshot();if(!r.controlledSeatIds.includes(e.seatId)||e.seatId===r.selfSeatId)return;let i=d.get(e.seatId)??new Set;if(i.has(n))i.delete(n);else{let e=fb(o);for(;i.size>=e;)i.delete(i.values().next().value);i.add(n)}i.size?d.set(e.seatId,
i):d.delete(e.seatId),ie(e);let a=f.get(e.seatId);a&&window.clearTimeout(a);let s=window.setTimeout(()=>{f.delete(e.seatId);let n=d.get(e.seatId)??new Set,r=new Set(t.getSnapshot().seats.find(t=>t.seatId===e.seatId)?.knownCards.map(e=>e.cardId)??[]),
i=[...n].filter(e=>r.has(e));if(!i.length)return;let a=U(I(window)),o=U(a?.Manager??a?.manager),s=o?.SendMsgQuickChatCardTagReq;if(typeof s==`function`&&pb())try{u.set(e.seatId,new Set(i)),s.call(o,e.seatId,i),d.delete(e.seatId),ie(e)}catch(e){console.warn(`[明牌] 队友手牌标记发送失败`,
e)}},100);f.set(e.seatId,s)}function se(e){let t=U(e);if(!t)return;let n=Object.getPrototypeOf(t);for(;n&&!Object.prototype.hasOwnProperty.call(n,`UpdateTag`);)n=Object.getPrototypeOf(n);if(!n||p.some(e=>e.prototype===n))return;let r=Object.getOwnPropertyDescriptor(n,
`UpdateTag`);if(!r||typeof r.value!=`function`)return;let i=r.value,a=function(...e){return ce(this),i.apply(this,e)};try{Object.defineProperty(n,"UpdateTag",{...r,value:a}),p.push({prototype:n,descriptor:r})}catch{}}function ce(t){if(!e.get(`display.cardLabelsEnabled`))return;
let n=U(t.Card)??U(t.card);if(!n)return;let i=Number(n.cardId??n.cardID??n.CardId??n.CardID??n.id??n.ID??n.key);if(!Number.isInteger(i)||i<=0||!r?.getPersistentTags(i).includes(`心幽`))return;let a=Object.prototype.hasOwnProperty.call(n,`tagArr1`)?`tagArr1`:`TagArr1`,
o=Array.isArray(n[a])?n[a].map(String):[];o.includes(`心幽`)||(n[a]=[...o,`心幽`])}function le(t,n,i){let a=e.get(`display.cardLabelsEnabled`);for(let e of t){let t=U(e),o=U(t?.Card)??U(t?.card)??t;if(!t||!o)continue;let s=Number(o.cardId??o.cardID??o.CardId??o.CardID??o.id??o.ID??o.key);
if(!Number.isInteger(s)||s<=0)continue;let c=r?.getPersistentTags(s)??[],l=a?n.filter(e=>c.includes(e)):[],u=Object.prototype.hasOwnProperty.call(o,`tagArr1`)?`tagArr1`:`TagArr1`,d=o[u],f=Array.isArray(d)?d.map(String):[],p=[...new Set([...f.filter(e=>!n.includes(e)),...l])];
if((l.length||f.some(e=>n.includes(e)))&&JSON.stringify(f)!==JSON.stringify(p))try{H(t,`AddCardTag`),o[u]=p,H(t,`UpdateTag`)}catch{}finally{if(i)continue;d===void 0?delete o[u]:o[u]=d}}}function ue(e){return[...hb(U(e.cardContainer),[`equipCardUis`,
`equipCardUIs`]),...hb(e,[`equipCardUis`,`equipCardUIs`])]}function de(e){return hb(U(e.cardContainer),[`cardUis`,`cardUIs`,`handCardUis`,`handCardUIs`])}function fe(e){if(e.type!==`friend-hand-tags-updated`)return;u.set(e.seatId,new Set(e.cardIds));
let t=l.get(e.seatId);t&&v===e.seatId&&ie(t)}let pe=t.subscribe(oe),me=r?.subscribe(oe),he=i?.subscribe(fe),ge=e.subscribe(`display.seatUiEnabled`,oe),_e=window.setInterval(oe,Ky);return oe(),()=>{a=!0,window.clearInterval(_e),pe(),me?.(),he?.(),
f.forEach(e=>window.clearTimeout(e)),f.clear(),ge();for(let e of p)if(Object.getOwnPropertyDescriptor(e.prototype,`UpdateTag`))try{Object.defineProperty(e.prototype,"UpdateTag",e.descriptor)}catch{}p.length=0,E()}}function Xy(e,t){let n=U((U(t.otherTopManager)??U(t.topManager))?.handCardSpr);
if(e.nativeSprite&&e.nativeSprite!==n&&Zy(e),!n||n.destroyed||n===t)return;let r=Number(n.width||n._width||0),i=Number(n.height||n._height||0);if(r>480||i>240)return;let a=String(n.name||``);if(/Scene|Layer|Stage|Table|Desk|gamescene/i.test(a)||(e.nativeSprite=n,
n[Jy]))return;let o=Object.getOwnPropertyDescriptor(n,`visible`),s=lb(Object.getPrototypeOf(n),`visible`),c=o??s,l=o&&`value`in o?!!o.value:!!n.visible,u=e=>{typeof c?.set==`function`?c.set.call(n,e):l=e},d={ownDescriptor:o,requestedVisible:!!n.visible,
write:u,read:()=>l};try{Object.defineProperty(n,Jy,{configurable:!0,value:d}),Object.defineProperty(n,"visible",{configurable:!0,enumerable:o?.enumerable??!1,get:()=>!1,set(e){d.requestedVisible=!!e,u(!1),`_visible`in n&&(n._visible=!1)}}),
u(!1),`_visible`in n&&(n._visible=!1)}catch{}}function Zy(e){let t=e.nativeSprite;e.nativeSprite=null;let n=U(t?.[Jy]);if(t&&n)try{n.ownDescriptor?Object.defineProperty(t,"visible",n.ownDescriptor):delete t.visible,delete t[Jy],n.write(n.requestedVisible),
`_visible`in t&&(t._visible=n.requestedVisible),H(t,`OnUpdateCard`)}catch{}}function Qy(e){let t=new Map,n=U(e.seatContainer)?.seatUIs;for(let e of Array.isArray(n)?n:[]){let n=U(e),r=U(n?.seat),i=Number(r?.index??r?.Index??n?.seatID);n&&Number.isInteger(i)&&t.set(i,
n)}return t}function $y(e,t){let n=U(e.seatAvatar);for(let r of[U(n?.generalCard),n,e]){if(!r)continue;let e=eb(r);if(!e)continue;let n=nb(r,t,e.x,e.y),i=nb(r,t,e.x+e.width,e.y+e.height);if(n&&i)return{x:Math.min(n.x,i.x),y:Math.min(n.y,i.y),
width:Math.abs(i.x-n.x),height:Math.abs(i.y-n.y)}}return null}function eb(e){if(e.destroyed)return null;let t=e=>{let t=U(e),n=Math.max(0,Number(t?.width)||0),r=Math.max(0,Number(t?.height)||0);return n<40||r<50?null:{x:Number(t?.x)||0,y:Number(t?.y)||0,
width:n,height:r}},n=t(e.showRect);if(n)return n;try{let n=t(H(e,`getSelfBounds`));if(n)return n}catch{}let r=Math.max(0,Number(e.width)||Number(e.ScaledWidth)||0),i=Math.max(0,Number(e.height)||Number(e.ScaledHeight)||0);return r>=40&&i>=50?{x:0,
y:0,width:r,height:i}:null}function tb(e){let t=U(U(globalThis.Laya)?.stage),n=Math.max(1,Number(t?.width)||Number(e?.width)||1600),r=Math.max(1,Number(t?.height)||Number(e?.height)||900);if(t&&e){let i=nb(t,e,0,0),a=nb(t,e,n,r);if(i&&a)return{x:Math.min(i.x,
a.x),y:Math.min(i.y,a.y),width:Math.max(1,Math.abs(a.x-i.x)),height:Math.max(1,Math.abs(a.y-i.y))}}return{x:0,y:0,width:n,height:r}}function nb(e,t,n,r){try{let i=U(globalThis.Laya)?.Point,a=(e,t)=>typeof i==`function`?new i(e,t):{x:e,y:t},
o=typeof e.localToGlobal==`function`?U(e.localToGlobal.call(e,a(n,r))):{x:n,y:r};if(!o)return null;let s=typeof t.globalToLocal==`function`?U(t.globalToLocal.call(t,a(Number(o.x),Number(o.y)))):o,c=Number(s?.x),l=Number(s?.y);return Number.isFinite(c)&&Number.isFinite(l)?{x:c,
y:l}:null}catch{return null}}function rb(e,t){return t.x+t.width-Ry-e.x-e.width>=e.x-t.x-Ry?`right`:`left`}function ib(e){let t=U(globalThis.Laya)?.Sprite;if(typeof t!=`function`)return null;let n=U(new t);return n&&(n.name=e),n}function ab(e,
t,n,r,i=!1){let a=U(globalThis.Laya)?.Text;if(typeof a!=`function`)return null;let o=U(new a);return o?(o.text=e,o.font=qy,o.fontSize=t,o.color=n,o.stroke=0,o.align=r,o.valign=`middle`,o.bold=i,o.mouseEnabled=!1,o):null}function ob(e,t,n,r,
i,a,o){let s=U(e.graphics);if(!s)return;let c=Math.min(o,t/2,n/2);H(s,`clear`);try{H(s,`drawPath`,0,0,[[`moveTo`,c,0],[`arcTo`,t,0,t,n,c],[`arcTo`,t,n,0,n,c],[`arcTo`,0,n,0,0,c],[`arcTo`,0,0,c,0,c],[`closePath`]],{fillStyle:r},{strokeStyle:i,
lineWidth:a})}catch{H(s,`drawRect`,0,0,t,n,r,i,a)}}function sb(e){try{if(H(e,`removeSelf`),typeof e.addDrawChild==`function`)return;H(e,`destroy`,!1)}catch{}}function cb(e){let t=e._children;return Array.isArray(t)?t.map(U).filter(Boolean):[]}function lb(e,
t){for(let n=e;n;n=Object.getPrototypeOf(n)){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e}return null}function ub(){return U(U(globalThis.Laya)?.Event)}function db(e,t,n){return Math.max(t,Math.min(Math.max(t,n),e))}function fb(e){let t=U(e?.seatContainer)?.seatUIs;
for(let e of Array.isArray(t)?t:[]){let t=U(e),n=U(t?.nativeHost)??U(t?.propTip)??U(t?.proptip),r=U(U(n?.proptip)?.paramVo)??U(U(n?.proptip)?.paramVO)??U(n?.paramVo),i=Number(r?.RecCardLimit);if(Number.isFinite(i)&&i>0)return Math.max(1,Math.min(20,
Math.floor(i)))}return 1}function pb(){let e=globalThis,t=U(e.zy)??U(e.laya),n=t?.class;if(typeof n!=`function`)return!0;try{return U(U(n.call(t,`SettingManager`))?.SkillSets)?.IsShowCardTag!==!1}catch{return!0}}function mb(e){return[...new Set(e.map(e=>String(e).trim()).filter(e=>e&&!e.startsWith(`来源:`)&&!e.startsWith(`来源于`)))]}function H(e,
t,...n){let r=e?.[t];return typeof r==`function`?r.apply(e,n):void 0}function U(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function hb(e,t){if(!e)return[];for(let n of t){let t=e[n];if(Array.isArray(t))return t}return[]}var gb=Object.freeze([7016,7017]);
function _b(e){let t=xb(e.candidateIds),{handCardIds:n,deckCardIds:r}=Ey(e),i=n.length===1||n.length===2,a=i?n.map(t=>bb(t,e.gameCardCatalog)):[],o=!i,s=t.map(t=>{let a=[];return n.includes(t)&&a.push(`hand`),r.includes(t)&&a.push(`deck`),{cardId:t,
name:bb(t,e.gameCardCatalog),locations:Object.freeze(a),highlight:i&&n.includes(t)&&n.length<3,pilePosition:vb(t,e.drawPile)}}),c={hand:`手牌`,deck:`牌堆`},l=o?`【宴戏】未知`:`【宴戏】${a.join(`/`)}`,u=s.map(e=>{let t=e.locations.map(e=>c[e]).join(`/`),n=e.pilePosition?`（牌堆${e.pilePosition.edge===`top`?`顶`:`底`}第${e.pilePosition.index}张）`:e.locations.includes(`deck`)?`（牌堆相对位置未知）`:``;
return`${e.name}：${t||`未知`}${n}`});return{candidateIds:Object.freeze(t),handCardIds:Object.freeze(n),deckCardIds:Object.freeze(r),unknown:o,summaryNames:Object.freeze(a),lines:Object.freeze(s),resultText:[l,...u].join(`
`)}}function vb(e,t){if(!t)return null;let n=t.top.indexOf(e);if(n>=0)return{edge:`top`,index:n+1};let r=t.bottom.indexOf(e);return r>=0?{edge:`bottom`,index:t.bottom.length-r}:null}function yb(e){return gb.includes(e)}function bb(e,t){return t.resolve(e).name||`牌${e}`}function xb(e){let t=new Set,
n=[];for(let r of e){let e=Number(r);!Number.isInteger(e)||e<=0||t.has(e)||(t.add(e),n.push(e))}return n}var Sb=7011,Cb=`yanjiao`,wb=`mizhu`,Tb=3492,Eb=Object.freeze([{id:`quanbian`,title:`权变`,skillIds:[Sb],spellNames:[`权变`],shownCardZoneId:`unknown`,
showSuitSequence:!0},{id:`jianying`,title:`渐营`,skillIds:[491],spellNames:[`渐营`],showSuitSequence:!0},{id:`yanxi`,title:`宴戏`,skillIds:[7016,7017],spellNames:[`宴戏`],shownCardZoneId:`yanxi`,showResult:!0},{id:`zhouxuan`,title:`周旋`,skillIds:[3065],
spellNames:[`周旋`],selfOnly:!0,showResult:!0},{id:Cb,title:`严教`,skillIds:[945],spellNames:[`严教`],showResult:!0},{id:wb,title:`资援`,skillIds:[291],spellNames:[`资援`,`界资援`],selfOnly:!0,showResult:!0},{id:`chengxiang`,title:`称象`,skillIds:[441,Tb],
spellNames:[`称象`,`界称象`],triggerOnly:!0,showResult:!0},{id:`yicheng`,title:`易城`,skillIds:[3440],spellNames:[`易城`],showResult:!0},{id:`shuangxiong`,title:`双雄`,skillIds:[3269,14169],selfOnly:!0,showResult:!0},{id:`jizhan`,title:`吉占`,skillIds:[3033],
spellNames:[`吉占`],showResult:!0},{id:`hezhong`,title:`和衷`,skillIds:[3329],spellNames:[`和衷`],showResult:!0},{id:`quandao`,title:`权道`,skillIds:[3184],spellNames:[`权道`],generalNames:[`神孙权`],selfOnly:!0,showResult:!0}]),Db=13,Ob=13,kb=15,Ab=5;function jb(e){return{11:`J`,12:`Q`,13:`K`}[e]??String(e)}function Mb(e){return e.map(jb).join(`+`)}function Nb(e){let t=Hb(Bb(e)),
n=[],r=[],i=(e,a)=>{if(a===0){n.push([...r]);return}if(e>Db||a<0)return;let o=Math.min(t[e],Math.floor(a/e));for(let t=o;t>=0;--t){for(let n=0;n<t;n+=1)r.push(e);i(e+1,a-e*t),r.splice(r.length-t,t)}};return i(1,Ob),n.sort((e,t)=>t.length-e.length||e.join(`,
`).localeCompare(t.join(`,`))).slice(0,kb)}function Pb(e){let t=Hb(Bb(e)),n=Math.floor(Bb(e).reduce((e,t)=>e+t,0)/2),r=new Map([[0,[Vb()]]]);for(let e=1;e<=Db;e+=1){let i=t[e];if(i)for(let t of[...r.keys()].sort((e,t)=>t-e)){let a=r.get(t);
for(let o=1;o<=i;o+=1){let i=t+e*o;if(i>n)break;let s=r.get(i)??[];r.set(i,s);for(let t of a){let n=[...t];n[0]+=o,n[e]+=o,s.push(n)}}}}r.delete(0);let i=new Map;for(let e of[...r.keys()].sort((e,t)=>t-e)){let n=r.get(e);for(let e=0;e<n.length;
e+=1)for(let r=e;r<n.length;r+=1){let a=Ub(t,n[e],n[r]);if(!a)continue;let[o,s]=n[e][0]<=n[r][0]?[n[e],n[r]]:[n[r],n[e]],c=i.get(a[0])??[];c.push([o,s,a]),i.set(a[0],c)}}let a=[];for(let e of[...i.keys()].sort((e,t)=>e-t))if(i.get(e).sort((e,
t)=>e[0][0]-t[0][0]).forEach(([e,t,n])=>a.push({left:Wb(e),right:Wb(t),rest:Wb(n)})),a.length>=Ab)break;return a}function Fb(e,t){let n=Bb(e).sort((e,t)=>e-t);if(!n.length)return[];let r=[],i=(e,a,o)=>{if(!(o>Ob)){r.unshift({ranks:[...e],k:t&&o===Ob?e.length:0});
for(let t=a;t<n.length;t+=1)t>a&&n[t]===n[t-1]||(e.push(n[t]),i(e,t+1,o+n[t]),e.pop())}};return i([],0,0),r.filter(e=>!r.some(t=>e.ranks.length<t.ranks.length&&e.ranks.every(e=>t.ranks.includes(e)))).sort((e,t)=>t.k-e.k||t.ranks.length-e.ranks.length).map(e=>({ranks:e.ranks,
exact:e.k>0}))}function Ib(e,t){let n=Bb(e).sort((e,t)=>e-t),r=Bb(t).sort((e,t)=>e-t);if(!n.length||!r.length)return[];let i=Math.max(n.length,r.length),a=[];for(let e=2;e<=i;e+=1){let t=Rb(n,e);for(let n of Rb(r,e))for(let e of t)zb(n)<=zb(e)||n.some(t=>e.includes(t))||i>=3&&!n.some((t,
n)=>t<e[n])||a.push(`${n.map(jb).join(`,`)}→${e.map(jb).join(`,`)}`)}let o=[...new Set(n)];for(let e of new Set(r)){let t=o.filter(t=>t<e);t.length&&a.push(`${jb(e)}→${t.map(jb).join(`/`)}`)}return a}function Lb(e,t){return Bb(e).reduce((e,
n)=>(n>t?e.greater+=1:n<t?e.less+=1:e.equal+=1,e),{greater:0,less:0,equal:0})}function Rb(e,t){let n=[],r=(i,a)=>{if(i.length===t){n.push([...i]);return}for(let t=a;t<e.length;t+=1)t>a&&e[t]===e[t-1]||(i.push(e[t]),r(i,t+1),i.pop())};return r([],0),
n}function zb(e){return e.reduce((e,t)=>e+t,0)}function Bb(e){return e.filter(e=>Number.isInteger(e)&&e>=1&&e<=Db)}function Vb(){return Array(14).fill(0)}function Hb(e){let t=Vb();for(let n of e)t[0]+=1,t[n]+=1;return t}function Ub(e,t,n){let r=[...e];
for(let e=0;e<r.length;e+=1)if(r[e]-=t[e]+n[e],r[e]<0||e>0&&r[e]>=2)return null;return r}function Wb(e){return e.flatMap((e,t)=>t>0?Array(e).fill(t):[])}var Gb=2,Kb=[`乐`,`兵`,`闪电`],qb=new Set([`杀`,`火杀`,`雷杀`,`冰杀`,`普通杀`]),Jb=[`无中`,`洞烛`,`顺手`,`过拆`,
`过河`,`逐近`,`决斗`,`南蛮`,`万箭`,`出其`,`水淹`,`随机`,`洪荒`,`同舟`,`力争`,`移花`],Yb=[`五谷`,`桃园`,`火攻`,`借刀`,`撒豆`],Xb={A:1,J:11,Q:12,K:13};function Zb(e){return Xb[e.rank]??(Number.parseInt(e.rank,10)||0)}function Qb(e){let t=e.filter(e=>e.suit===`heart`||e.suit===`diamond`).length,
n=e.filter(e=>e.suit===`spade`||e.suit===`club`).length;return`【双雄】${t>n?`弃 黑`:t<n?`弃 红`:`平`}\n${t}红 ${n}黑`}function $b(e,t){let{greater:n,less:r,equal:i}=Lb(t.map(Zb),e);return`【吉占】猜${n>r?`大`:`小`}\n跟${e}比，${n}张大 ${r}张小 ${i}平`}function ex(e,
t){let n=nx(t,Jb,e),r=nx(t,Yb,e);return`【和衷】${n.greater>n.less?`大`:n.greater<n.less?`小`:r.greater>r.less?`大`:r.greater<r.less?`小`:`平`}\n${n.greater}.${r.greater}大 ${n.less}.${r.less}小`}function tx(e){return`【权道】杀：普通锦囊\n${e.filter(e=>qb.has(e.name)).length}：${e.filter(e=>e.cardType===Gb&&!Kb.some(t=>e.name.startsWith(t))).length}`}function nx(e,
t,n){return Lb(e.filter(e=>t.some(t=>e.name.startsWith(t))).map(Zb),n)}var rx=1,ix=5,ax=8,ox=[4,6],sx=6,cx=28,lx=31,ux=`未收到本局牌表，无法统计牌堆`,dx=3,fx={isSelfSeat:()=>!1},px={quanbian:`权变牌`,yanxi:`宴戏牌`};function mx(e,t,n=fx,r=Eb){let i=!1,a=new Map(r.map(e=>[e.id,
{definition:e,visible:!1,suitTokens:[],resultText:null,resultOptions:[],highlightedOptions:[],pinned:!1}])),o=!1,s=null,c=[],l={quanbianCount:0,quanbianSuits:[],luanjiSuits:[]},u=p(),d=new Set,f=e.subscribe(()=>m(p()));function p(){return Object.freeze({inGame:o,
currentSeatId:s,panels:Object.freeze(r.map(t=>{let n=a.get(t.id),r=t.shownCardZoneId??null;return t.id===`mizhu`&&n.visible&&oe(n),t.id===`quandao`&&n.visible&&se(n),t.id===`shuangxiong`&&n.visible&&w(n),Object.freeze({id:t.id,title:t.title,
visible:n.visible,suitTokens:Object.freeze([...n.suitTokens]),cardIds:Object.freeze([...r?e.getZoneCardIds(r):[]]),resultText:n.resultText,resultOptions:Object.freeze([...n.resultOptions]),highlightedOptions:Object.freeze([...n.highlightedOptions]),
showSuitSequence:!!t.showSuitSequence,showResult:!!t.showResult,shownCardZoneId:r,emptyCardLabel:px[t.id]??null})}))})}function m(e){hx(u,e)||(u=e,d.forEach(e=>e(u)))}function h(e){e.suitTokens=[],e.resultText=null,e.resultOptions=[],e.highlightedOptions=[]}function g(e){e.visible=!0,
e.pinned=!0}function _(t){h(t);let n=t.definition.shownCardZoneId;n&&n!==y_.UNKNOWN&&e.clearZone(n)}function v(){l.quanbianCount=0,l.quanbianSuits=[],l.luanjiSuits=[];let e=a.get(`jianying`);e&&(e.suitTokens=[])}function y(){v(),i=!1,a.forEach(e=>{e.visible=!1,
e.pinned=!1,h(e)})}function b(e,t){let n=a.get(e);n&&n.visible!==t&&(n.visible=t,t||_(n))}function x(e,t,n=[]){e.resultOptions=[...t],e.highlightedOptions=t.map((e,t)=>!!n[t])}return{getSnapshot:()=>u,setInGame(e){o!==e&&(o=e,o||(s=null,a.forEach(e=>{e.visible=!1,
e.pinned=!1,_(e)})),m(p()))},setCurrentSeatId(e){s!==e&&(s=e,v(),m(p()))},setPanelVisible(e,t){let n=a.get(e);n&&!t&&(n.pinned=!1),b(e,t),m(p())},refreshVisibility(e){let t=!1;for(let i of r){let r=a.get(i.id),s=o&&r.pinned||av(i,e,o,n.isSelfSeat);
r.visible!==s&&(r.visible=s,s||_(r),t=!0)}t&&m(p())},handleGameEvent(e,t){if(e.type===`game-started`){o=!0,y(),m(p());return}if(e.type===`game-ended`){o=!1,s=null,c=[],y(),m(p());return}if(e.type===`card-list-ready`){c=e.cardIds;return}if(e.type===`turn-started`){s=e.seatId,
v(),E(),m(p());return}if(e.type===`spell-triggered`){e.spellIds.some(e=>T(e,t))&&(i=!0);return}if(e.type===`spell-damage-resolved`&&e.spellId===3065){let t=a.get(`zhouxuan`);t?.pinned&&t.resultText&&(t.resultText=t.resultText.replace(`命中状态：协议未提供结果`,
`命中状态：是（造成${e.damage}点伤害）`).replace(`命中状态：待游戏结算`,`命中状态：是（造成${e.damage}点伤害）`).replace(`等待后续结算`,`已造成伤害，后续结算完成`),m(p()));return}if(e.type===`cards-used`){S(e,t),C(e,t),m(p());return}if(e.type===`spell-targeted`){de(e.seatId,e.spellId,e.cardIds),
fe(e.seatId,e.spellId,e.effectIndex??null,e.cardIds),m(p());return}if(e.type===`cards-moved`){pe(e),(D(e,t)||e.spellId===3065)&&m(p());return}if(e.type===`spell-opt-rep`){ee(e)&&m(p());return}e.type===`opt-target`&&(ie(e),de(e.srcSeatId??e.seatId,
e.spellId,e.params.filter(e=>e>0)),ae(e),te(e),m(p()))},subscribe(e){return d.add(e),e(u),()=>d.delete(e)},clear(){f(),d.clear(),o=!1,s=null,c=[],y(),u=p()}};function S(e,n){let r=a.get(`jianying`);if(r?.visible&&e.source===`use-card`&&!(e.useType!==1||e.isSend)&&(s===null||e.seatId===s)&&rv(n,
e.seatId,iv(r.definition,n)))for(let n of e.cardIds)r.suitTokens=ql(r.suitTokens,Kl(n,t))}function C(e,n){let r=a.get(`quanbian`);if(r?.visible&&!(e.source!==`use-card`||e.useType!==1||e.isSend)&&e.fromZone!==rx&&s!==null&&e.seatId===s&&rv(n,
e.seatId,iv(r.definition,n))){for(let n of e.cardIds){let e=t.resolve(n);e.cardType!==dx&&(l.quanbianCount+=1),e.suitGlyph&&!l.quanbianSuits.includes(e.suitGlyph)&&l.quanbianSuits.push(e.suitGlyph)}r.suitTokens=[`[${l.quanbianCount}]`,...l.quanbianSuits]}}function w(t){let n=O();
n!==void 0&&(t.resultText=Qb(le([ix,...ox].flatMap(t=>e.getZoneCardIds(`${t}-${n}`)))))}function T(e,t){let n=a.get(`chengxiang`)?.definition;return(n?iv(n,t):[441,Tb]).includes(e)}function E(){i=!1;let e=a.get(`chengxiang`);e&&(e.visible||e.pinned)&&(e.pinned=!1,
e.visible=!1,_(e))}function D(e,n){let r=e.cardIds.filter(e=>e>0);if(T(e.spellId,n)){let n=a.get(`chengxiang`);if(!n)return!1;if(e.fromZone===ax&&n.visible)return E(),!0;if(i&&e.toZone===ax&&e.moveType===sx&&r.length){let i=Fb(r.map(e=>Zb(t.resolve(e))),
e.spellId===Tb);return g(n),x(n,i.map(e=>Mb(e.ranks)),i.map(e=>e.exact)),!0}return!1}return e.spellId===3033&&e.fromZone===rx&&e.toZone===ax&&r.length===1?ne(r[0],Zb(t.resolve(r[0]))):e.spellId===3329&&s!==null&&e.fromId===s&&re(e.cardIds[0]>0?Zb(t.resolve(e.cardIds[0])):0,
r)}function ee(e){if(e.spellId!==3033||e.optType!==lx)return!1;let n=e.datas[1]??0;return ne(n,Zb(t.resolve(n))||(e.datas[3]??0))}function te(e){e.spellId===3329&&re(e.param,[])}function ne(e,t){let n=a.get(`jizhan`);return!n||!(t>=1&&t<=13)?!1:(g(n),
n.resultText=c.length?$b(t,le(ce(e>0?[e]:[]))):`【吉占】跟${t}比\n${ux}`,!0)}function re(e,t){let n=a.get(`hezhong`);return!n||!(e>=1&&e<=13)?!1:(g(n),n.resultText=c.length?ex(e,le(ce(t))):`【和衷】跟${e}比\n${ux}`,!0)}function ie(e){if(e.spellId!==945||e.param!==0)return;
let n=a.get(Cb);if(!n)return;let r=e.params.filter(e=>e>0),i=r.length?r:(e.cardIds??[]).filter(e=>e>0);if(!i.length)return;let o=Pb(i.map(e=>_x(e,t)));g(n),x(n,o.map(e=>`${Mb(e.left)}=${Mb(e.right)}`)),n.resultText=o.length?null:`【严教】无解！`}function ae(n){if(n.spellId!==3440||n.param!==0||!ue(n.seatId))return;
let r=n.params.filter(e=>e>0);if(!r.length)return;let i=a.get(`yicheng`);if(!i)return;if(g(i),n.optType!==cx){h(i);return}let o=e.getHandCardIds(n.seatId).filter(e=>e>0).map(e=>_x(e,t)),s=Ib(r.map(e=>_x(e,t)),o);x(i,s),i.resultText=s.length?null:`【易城】无法交换！`}function oe(r){let i=n.getControlledSeatIds?.()??[],
a=i.length>1,o=[];for(let r of i){let i=e.getHandCardIds(r).filter(e=>e>0).map(e=>_x(e,t)),s=a?`${n.getSeatLabel?.(r)||`座位${r+1}`}：`:``;Nb(i).forEach(e=>o.push(`${s}${Mb(e)}`))}x(r,o),r.resultText=o.length?null:`【资援】无解！`}function O(){let e=n.getControlledSeatIds?.()??[];
return e.find(e=>n.isSelfSeat(e))??e[0]}function se(t){let n=O();n!==void 0&&(t.resultText=tx(le(e.getHandCardIds(n).filter(e=>e>0))))}function ce(t){let n=new Set(t);for(let t of e.getSnapshot().records)t.location&&t.location.zone!==rx&&n.add(t.cardId);
return c.filter(e=>!n.has(e))}function le(e){return e.map(e=>t.resolve(e))}function ue(e){return n.isSelfSeat(e)||(n.getControlledSeatIds?.()??[]).includes(e)}function de(r,i,o){if(!yb(i)||!o.length||!n.isSelfSeat(r))return;let s=a.get(`yanxi`);
if(!s)return;g(s);let c=Ty(e,o),l=Dy(e),u=_b({candidateIds:[...o],handCardIds:c.handCardIds.length?c.handCardIds:l.handCardIds,deckCardIds:c.deckCardIds.length?c.deckCardIds:l.deckCardIds,drawPile:e.getSnapshot().drawPile,gameCardCatalog:t});
s.resultText=u.resultText,e.projectSkillCards(y_.YANXI,u.candidateIds)}function fe(e,r,i,o){if(r!==3065||i!==1||!o.length||!n.isSelfSeat(e))return;let s=a.get(`zhouxuan`);if(!s)return;let c=o.map(e=>t.resolve(e).name||`牌${e}`);g(s),s.resultText=`【周旋】放置牌：${c.join(`、`)}\n命中状态：待游戏结算\n后续提示：等待牌移入周旋区`,
s.resultOptions=[],s.highlightedOptions=[]}function pe(e){if(e.spellId!==3065)return;let t=a.get(`zhouxuan`);t?.pinned&&t.resultText&&(e.toZone===ox[0]&&e.toZoneParam===3065?t.resultText=t.resultText.replace(`后续提示：等待牌移入周旋区`,`后续提示：牌已放置，等待后续结算`).replace(`命中状态：待游戏结算`,
`命中状态：协议未提供结果`):e.fromZone===ox[0]&&e.fromZoneParam===3065&&(t.resultText=t.resultText.replace(`后续提示：牌已放置，等待后续结算`,`后续提示：牌已离开周旋区，请查看当前技能结算`)))}}function hx(e,t){return e.inGame!==t.inGame||e.currentSeatId!==t.currentSeatId||e.panels.length!==t.panels.length?!1:e.panels.every((e,
n)=>{let r=t.panels[n];return e.id===r.id&&e.visible===r.visible&&e.resultText===r.resultText&&gx(e.resultOptions,r.resultOptions)&&gx(e.highlightedOptions,r.highlightedOptions)&&gx(e.suitTokens,r.suitTokens)&&gx(e.cardIds,r.cardIds)})}function gx(e,
t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function _x(e,t){return Zb(t.resolve(e))}function vx(e,t,n=()=>I(window),r=window,{pollIntervalMs:i=500}={}){let a=!1,o=()=>{a||e.refreshVisibility(n())},s=t.subscribe(t=>{e.handleGameEvent(t,
n()),(t.type===`game-started`||t.type===`game-ended`||t.type===`turn-started`||t.type===`player-died`||t.type===`seat-state-changed`)&&o()});o();let c=r.setInterval(o,i);return()=>{a||(a=!0,s(),r.clearInterval(c))}}function yx(){let e=new WeakMap,
t=[];function n(t,n){let r=e.get(t);return!r?.has(n)&&(r||(r=new Set,e.set(t,r)),r.add(n),!0)}function r(t,n){e.get(t)?.delete(n)}function i(e){return e!==null&&(typeof e==`object`||typeof e==`function`)}return{wrap(e,a,o){if(!i(e))return!1;
let s=e[a];if(typeof s!=`function`||!n(e,a))return!1;let c=Object.getOwnPropertyDescriptor(e,a),l=o(s),u=!1,d=function(...e){return u?s.apply(this,e):l.apply(this,e)};try{Object.defineProperty(e,a,{value:d,configurable:!0,writable:!0,enumerable:c?.enumerable??!1})}catch{return r(e,
a),!1}return t.push(()=>{if(u=!0,r(e,a),e[a]===d)try{c?Object.defineProperty(e,a,c):delete e[a]}catch{}}),!0},wrapGetter(e,a,o){if(!i(e))return!1;let s=Object.getOwnPropertyDescriptor(e,a),c=s?.get;if(!s||typeof c!=`function`||!n(e,a))return!1;
let l=e,u=o(()=>c.call(l)),d=!1,f=function(){if(d)return c.call(this);let e=l;l=this;try{return u()}finally{l=e}};try{Object.defineProperty(e,a,{...s,get:f,configurable:!0})}catch{return r(e,a),!1}return t.push(()=>{if(d=!0,r(e,a),Object.getOwnPropertyDescriptor(e,
a)?.get===f)try{Object.defineProperty(e,a,s)}catch{}}),!0},isWrapped(t,n){return i(t)&&!!e.get(t)?.has(n)},restoreAll(){t.splice(0).reverse().forEach(e=>e())}}}var bx=new Set(`中原人杰地灵，天下归心！.一统中原，天下归心！.赴此雄途，一统山河！.对酒当歌，人生几何！.周公吐哺，天下归心。.雄踞北方，睥睨天下！.兵锋四向，所向披靡！.势贯长虹，锐不可当！.魏武挥鞭，龙骧虎战！.魏风烈烈，霸业千秋！.枕山河之固，展霸业鸿图！.执戟兴邦，志在八方！.魏骑驰骋，踏破山河！.枕山河之固，扬魏武雄风！.魏德昭彰，恩威并施！.志在魏邦，雄图万里！.战合肥，破成都胜者为王！.外驱胡虏，内平吴蜀！.魏武藏奇略，霸业定乾坤！.诸公半虎狼，魏旗不留藏!.长驱蹈匈奴，左顾凌鲜卑！.扇挥白羽迥，甲锁黄金明！.魏光璀璨耀星河.魏恩广布润人心.护魏山河，霸业千秋！.舳舻千里，旌旗蔽空.受禅汉庭，魏起征程！.奇谋鬼才，算无遗策！.魏威如岳，气吞山河！.大魏雄师，势不可挡！.匡扶汉室，入主中原.忠义为先，蜀汉必兴！.鞠躬尽瘁，死而后已！.惟贤惟德，方能匡复汉室！.能进能退，方能百战不殆！.蜀风烈烈，其志昭昭！.天地英雄气，千秋尚凛然.蜀道崎岖，壮志不屈！.蜀锦为裳，剑指北方！.血染征袍，荡涤乱世！.汉业兴亡惟我在.蜀汉精忠，义贯长虹！.壮志盈怀，忠义为先！.蜀汉英魂，壮志凌云！.蜀汉兴邦，志在四方.犯我大吴疆土，虽远必诛.上有天堂，下有苏杭！.羽扇纶巾，计定天下！.何人敢犯大吴疆土.赴汤蹈火，在所不辞！.犯大吴疆土者，吾必击而破之！.江东子弟，何惧于天下！.天下英雄谁敌手.英雄何不带吴钩.东吴水师，横行江海！.吴钩似霜，斩破千障！.吴营谋深，弹指乾坤！.天险固垒，欲攻则锐！.智谋如渊，踏浪焚天！.江东子弟多才俊谁怕！`.split(`.`)),
xx=2;function Sx(e,t,n){if(t===`CClientGameRewardPointNTF`){n.killEffect&&(e.Type=0);return}if(t===`decodeSSCChatmsgNtf`){if(n.factionSlogan&&Cx(e)){let t=e.data;t&&typeof t==`object`&&delete t.protoObj}return}if(t===`ClientGeneralSkinRep`&&n.otherSkinState){let t=e.GeneralSkinList;
if(!Array.isArray(t))return;for(let e of t){if(!e||typeof e!=`object`)continue;let t=e;n.isOwnGeneral(Number(t.GeneralID))||(t.state=0)}}}function Cx(e){let t=e.ProtoObj;if(!t||typeof t!=`object`)return!1;let{Channel:n,channel:r,chatMsg:i,ChatMsg:a}=t,
o=i||a;return(n??r)==xx&&typeof o==`string`&&bx.has(o)}var wx=`__xcSystemNoticeVisibilityGuard`;function Tx(){let e=new Set;function t(t){if(t.destroyed)return!1;let n=t[wx];if(n)return n.blocked=!0,kx(t),!0;let r=Object.getOwnPropertyDescriptor(t,
`visible`),i=r??Ox(Object.getPrototypeOf(t),`visible`),a=Object.getOwnPropertyDescriptor(t,`_visible`),o=typeof i?.get==`function`?()=>i.get.call(t):()=>r&&`value`in r?r.value:t._visible,s=typeof i?.set==`function`?e=>i.set.call(t,e):null,c={ui:t,
blocked:!0,requestedVisible:typeof t._visible==`boolean`?t._visible:o()!==!1,ownVisibleDescriptor:r,visibleDescriptor:i??void 0,ownRenderDescriptor:a,fallback:!1};try{if(Object.defineProperty(t,wx,{configurable:!0,value:c}),!a?.configurable||!(`value`in a))throw Error(`_visible 渲染字段不可接管`);
let n=function(){let e=this[wx];return!e?.blocked&&!!e?.requestedVisible};return Object.defineProperty(t,"_visible",{configurable:!0,enumerable:a.enumerable,get:n,set(e){let t=this[wx];t&&(t.requestedVisible=!!e)}}),Object.defineProperty(t,
"visible",{configurable:!0,enumerable:r?.enumerable??!1,get:n,set(e){let t=this[wx];t&&(t.requestedVisible=!!e,!t.blocked&&s&&s(!!e))}}),e.add(c),kx(t),!0}catch{c.fallback=!0;try{return a&&Object.defineProperty(t,"_visible",a),r?Object.defineProperty(t,
"visible",r):delete t.visible,delete t[wx],t.visible=!1,`_visible`in t&&(t._visible=!1),e.add(c),!0}catch(e){return console.warn(`[屏蔽设置] 隐藏顶部广播失败`,e),!1}}}function n(t){e.delete(t);let{ui:n}=t;if(n.destroyed)return!1;let r=t.requestedVisible;
try{if(t.fallback)return n.visible=r,`_visible`in n&&(n._visible=r),!0;Object.defineProperty(n,"_visible",{...t.ownRenderDescriptor,value:r});let e=t.ownVisibleDescriptor;return e?Object.defineProperty(n,"visible",`value`in e?{...e,value:r}:e):delete n.visible,
delete n[wx],!e&&typeof t.visibleDescriptor?.set==`function`&&t.visibleDescriptor.set.call(n,r),kx(n),!0}catch(e){return console.warn(`[屏蔽设置] 恢复顶部广播失败`,e),!1}}function r(r,i){Array.from(e).forEach(e=>{(e.ui.destroyed||!i)&&n(e)}),i&&r.forEach(t)}function i(){Array.from(e).forEach(n)}return{sync:r,
restoreAll:i}}function Ex(e){let t=[e.marqueeUI,...Dx(e.marqueeUIList),...Dx(e.marqueeUIActList)];return Array.from(new Set(t.filter(e=>!!e&&typeof e==`object`&&!e.destroyed)))}function Dx(e){try{if(Array.isArray(e))return e.filter(e=>e!=null);
let t=e&&typeof e==`object`?e:null;if(!t)return[];if(Array.isArray(t.datum))return t.datum.filter(e=>e!=null);if(Array.isArray(t._objDatum)&&t._objDatum.length)return t._objDatum.filter(e=>e!=null);if(t._maps&&typeof t._maps==`object`)return Object.values(t._maps).flat().filter(e=>e!=null)}catch{}return[]}function Ox(e,
t){for(let n=e;n;n=Object.getPrototypeOf(n)){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e}}function kx(e){typeof e.repaint==`function`&&e.repaint.call(e)}var Ax=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAADklEQVR4AWNgGAWgEAAAAQgAAfZFpq0AAAAASUVORK5CYII=`,
jx=`data:basic;base64,EwBMQVlBQU5JTUFUSU9OOjEuNy4wBgBEcmFnb24OAHJvb3QKYm9uZQpwbGF5AfwAAAAAAQAAAAIAq6omQgIAAP//AgAAAAAAAAIAq6omQgEAAH9DAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAf0MAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAEAAAACAgAAAAAAAgCrqiZCAQAAfkMAAIA/AAAAAAAAAAAAAIA/AACAPwAAgD8AAAAAAAAAAAAAAAABAAB/QwAAgD8AAAAAAAAAAAAAgD8AAIA/AACAPwAAAAAAAAAACAAIAAEAAAAcAHBsYWNlaG9sZGVyLnBuZwpwbGFjZWhvbGRlcgoAAIA/AACAPwAAgEAAAIBAAADAfwAAwH8AAMB/AADAfwEAAgAAAAAAAAACAAQAcm9vdAkAdW5kZWZpbmVkAADAfwAABABib25lBAByb290AADAfwAACAAQAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAgL8AAIC/AAAAAAAAAAAAAAAAAAABAAEAAAAAAQAAAAEAAAAAAAEABABib25lBABib25lBABudWxsAAAeAApib25lCnBsYWNlaG9sZGVyCnBsYWNlaG9sZGVyCgEBAQAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgEAAAIBAAAAAAAAAAAAAAAAAAAAAAA==`,
Mx=`/res/assets/animate/game/neweffect/EF_Basic_Sha_`,Nx=`/res/assets/animate/game/neweffect/OtherEffect/FX_MatchGame_huixie_`,Px=[`FX_`,`xuanhujishi`,`xinglinchunman`,`miaoshouhuichun`],Fx=[`interactProp/fx_uihd_caoxie`,`interactProp/Ol_DaoJu_jidan`],
Ix=[`EF_Plot_tiesuo`,`Plot_tiesuolianhuan`,`EFF_jiu`,`EFF_hejiu`];function Lx(e){return e.sha||e.heal||e.interact}function Rx(e,t){let n=t.sha&&e.includes(Mx),r=t.heal&&(e.includes(Nx)||Px.some(t=>e.includes(`res/assets/animate/game/effect/${t}`))),
i=t.interact&&Fx.some(t=>e.includes(`res/assets/animate/${t}`));return n||r||i}function zx(e,t,n=globalThis.location?.href??`http://localhost/`){let r;try{r=new URL(e,n).pathname}catch{return e}return r?r.endsWith(`placeholder.png`)?Ax:!r.endsWith(`.sk`)||Ix.some(e=>r.includes(e))?e:Rx(r,
t)?jx:e:e}var Bx=new Set([4,5,6,7,8,9,10,12,13,14,15,83,84,85]),Vx=new Set([`tiesuo`,`huogong`,`wuxie`]),Hx=[`PlayWuzhongshengyouEffect`,`PlayTiesuoEffect`,`PlayHuoGongEffect`,`PlayWuxieEffect`,`PlayShunshouEffect`,`PlayJuedouEffect`,`PlayTaoyuanEffect`],
Ux=[`fx_uihd_caoxie`,`Ol_DaoJu_jidan`],Wx=10187,Gx=[`CHAT_MARQUEE_ADD`,`CHAT_MARQUEE2023_ADD`,`CHAT_MARQUEE2023_ACT_ADD`],Kx=[`ShowMarquee`,`intActDataMarquee`,`ShowNextActMarquee`],qx=[`generalIds`,`GeneralIds`,`WuJiangs`,`generals`],Jx={GetPropSpecialWindow:`block.probWindow`,
AdPushWindow:`block.adWindow`,RogueLike1v1ZhanJiWindow:`block.mvpWindow`,GameResultWindow:`block.mvpWindow`,GameMvpWindow:`block.mvpWindow`,GameZhanJiWindow:`block.mvpWindow`,GeneralOpenResultWindow:`block.packageWindow`,SkinOpenResultWindowNew:`block.packageWindow`,
OldbackOneClickDrawAwdWin:`block.packageWindow`,SelectSkinWindow:`block.packageWindow`},Yx={"block.adWindow":`AdPushWindow`};function Xx(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=yx(),a=Tx(),o=[],s=new Set,c=[],l=!1,u=!1,d=t=>e.get(t)===!0,
f=()=>({sha:d(`block.shaEffect`),heal:d(`block.healEffect`),interact:d(`block.interactEffect`)}),p=e=>{let t=f();return Lx(t)?zx(String(e||``),t):e};function m(e,t=0){if(l)return;let n=setTimeout(()=>{s.delete(n),l||e()},t);s.add(n)}function h(e,
t=20,n=500){return new Promise(r=>{let i=t=>{if(l)return r(null);let a=null;try{a=e()}catch{a=null}if(a)return r(a);if(t<=0)return r(null);m(()=>i(t-1),n)};i(t)})}function g(e,t,...n){let r=W(e),i=r?.[t];return typeof i==`function`?i.apply(r,
n):void 0}function _(){return r.manager(`UserInfoManger`)??r.manager(`UserInfoManager`)}function v(){let e=_();g(e,`event`,W(e?.constructor)?.PLAY_NEXT_LEGEND_SHOW??e?.PLAY_NEXT_LEGEND_SHOW)}function y(e,t=0,n=500){let i=!1;return new Set([r.window(e),...r.findWindows(e)].filter(Boolean)).forEach(t=>{if(t&&!t.destroyed)try{typeof t.Close==`function`?(t.Close(),
i=!0):typeof t.close==`function`?(t.close(),i=!0):typeof t.destroy==`function`&&(t.destroy(!0),i=!0)}catch(t){console.warn(`[屏蔽设置] 关闭窗口失败:`,e,t)}}),t>0&&m(()=>y(e,t-1,n),n),i}function b(e,t=0,n=500){if(!d(e))return!1;let i=Yx[e];if(!i)return!1;
e===`block.adWindow`&&new Set([r.window(i),...r.findWindows(i)].filter(Boolean)).forEach(e=>{if(!e||e.destroyed)return;let t=e.curViewList;Array.isArray(t)&&t.forEach(e=>{try{g(e,`closeClicker`)}catch(e){console.warn(`[屏蔽设置] 广告视图关闭失败:`,e)}})});
let a=y(i);return!a&&t>0&&m(()=>b(e,t-1,n),n),a}function x(e=0){if(!d(`block.adWindow`))return!1;let t=!1;return new Set([r.scene(),...r.findInLayer(`SceneLayer`,`ModeScene`)].filter(Boolean)).forEach(e=>{if(typeof e?.hideAdView==`function`)try{e.hideAdView(),
t=!0}catch(e){console.warn(`[屏蔽设置] 隐藏大厅广告失败:`,e)}}),e>0&&m(()=>x(e-1),500),t}async function S(e){let t=Jx[e];if(!t||!d(t))return;let n=await h(()=>r.window(e));if(n&&(await h(()=>!n.isShowWait),!(n.destroyed||l)))switch(e){case`GetPropSpecialWindow`:g(n,
`Hide`),g(n,`Close`);break;case`AdPushWindow`:b(`block.adWindow`);break;case`RogueLike1v1ZhanJiWindow`:g(n,`onClickClose`);break;case`GameResultWindow`:case`GameMvpWindow`:case`GameZhanJiWindow`:if(u){u=!1;break}g(n,`laterClose`);break;case`GeneralOpenResultWindow`:case`SkinOpenResultWindowNew`:case`OldbackOneClickDrawAwdWin`:g(n,
`Close`);break;case`SelectSkinWindow`:Number(W(n.selectView)?.usingSkinID)>=0&&g(n,`Close`)}}async function C(){i.wrap(r.classPrototype(`GameMvpWindow`),`updateBg`,e=>function(...t){return d(`block.mvpWindow`)&&typeof this.SetSkin==`function`?this.SetSkin(t[0]):e.apply(this,
t)});let e=await h(()=>r.dispatcher()),t=e?r.obfuscatedMethodName(e,`GameEventDispatcher`,`ShowWindow`):null;e&&t&&i.wrap(e,t,e=>function(t,...n){if(t===`AdPushWindow`&&d(`block.adWindow`))return;let r=e.call(this,t,...n);return typeof t==`string`&&Jx[t]&&m(()=>void S(t)),
r}),b(`block.adWindow`,20,500)}async function w(){i.wrap(r.classPrototype(`ModeScene`),`showAdView`,e=>function(...t){if(!d(`block.adWindow`))return e.apply(this,t);x(3)}),x(3);let e=await h(()=>{let e=W(r.scene()?.leftView);return e?W(Object.getPrototypeOf(e)):null},1e3);
i.wrap(e,`getBtnRes`,e=>function(...t){let n=e.apply(this,t);return!d(`block.adWindow`)||!Array.isArray(n)?n:n.filter(e=>W(e)?.type!==Wx).sort((e,t)=>!W(e)?.zhutiIcon==!W(t)?.zhutiIcon?0:W(t)?.zhutiIcon?1:-1)})}let T=null;function E(){a.sync(T?Ex(T):[],
d(`block.noticeWindow`))}function D(){let e=W(r.dispatcher()?._events);for(let t of Gx){let n=e?.[t];for(let e of Array.isArray(n)?n:[n]){let t=W(W(e)?.caller);if(typeof t?.ShowMarquee==`function`&&typeof t.HideAllMarquee==`function`)return t}}return null}async function ee(){let e=await h(D,120,250);
if(!e)return;T=e;for(let t of Kx)i.wrap(e,t,e=>function(...t){let n=e.apply(this,t);return E(),n});let t=r.dispatcher();Gx.forEach(n=>g(t,`on`,n,e,E)),o.push(()=>{Gx.forEach(n=>g(t,`off`,n,e,E)),a.restoreAll(),T=null}),E()}function te(){i.wrap(r.classPrototype(`TianShuWindow`),
`updateWinUI`,e=>function(...t){return W(t[0])?.type==6&&d(`block.laoXianWindow`)?g(this,`Close`):e.apply(this,t)})}function ne(){(async()=>{let e=await h(()=>_()??r.managerFromList(e=>typeof e.CheckUserAvatarAnimate==`function`&&Array.isArray(e.playedList)&&Array.isArray(e.fullAvatarShowUserList)),60,100);
i.wrap(e,`CheckUserAvatarAnimate`,e=>function(...t){let n=W(t[0]),r=this.playedList;if(!d(`block.entranceEffect`)||!n||!g(this,`IsInSeat`,n.ClientId)||!Array.isArray(r)||r.indexOf(n.ClientId)>=0)return e.apply(this,t);r.push(n.ClientId)});let t=await h(()=>r.managerFromList(e=>typeof e.PlayLegendShow==`function`&&typeof e.EndFullLegendShow==`function`),60,100);
i.wrap(t,`PlayLegendShow`,e=>function(...t){if(!d(`block.entranceEffect`))return e.apply(this,t);v()});let n=await h(()=>{let e=W(r.scene()?.seatListView)?.seatList,t=W(W((Array.isArray(e)?W(e[0]):null)?.constructor)?.prototype);return typeof t?.PlaySeatShowAnimate==`function`?t:null},60,100);
i.wrap(n,`PlaySeatShowAnimate`,e=>function(...t){if(!d(`block.entranceEffect`))return e.apply(this,t);g(this,`clearAvatarAnimate`),v()});let a=await h(()=>typeof r.gameScene()?.showGameRewardPointEffect2==`function`?r.gameScene():null,60,100);
for(let e of[`showGameRewardPointEffect2`,`showGameRewardPointEffect5`])i.wrap(a,e,e=>function(...t){if(!d(`block.healEffect`))return e.apply(this,t)});let o=await h(()=>{let e=W(W(W(W(r.gameScene()?.SelfSeatUi)?.seat)?.constructor)?.prototype);
return typeof e?.ShowSkillAnimation==`function`?e:null},60,100);i.wrap(o,`ShowSkillAnimation`,e=>function(...t){if(!d(`block.jinnangEffect`)||!Bx.has(Number(W(t[0])?.ID)))return e.apply(this,t)});let s=await h(()=>{let e=W(W(W(r.gameScene()?.SelfSeatUi)?.constructor)?.prototype);
return typeof e?.ShowEffect==`function`?e:null},60,100);i.wrap(s,`ShowEffect`,e=>function(...t){let[n,,r]=t;if(!d(`block.jinnangEffect`)||n!==`nanmanhit`&&n!==`jiaoyin`)return e.apply(this,t);re(W(r))});let c=await h(ie,60,100);if(c){i.wrap(c,
`ShowEffect`,e=>function(...t){return d(`block.jinnangEffect`)&&Vx.has(String(t[0]))?null:e.apply(this,t)});for(let e of[`PlayEffect`,`PlayEffectSYS`])i.wrap(c,e,e=>function(...t){if(!d(`block.jinnangEffect`)||!Bx.has(Number(t[0])))return e.apply(this,
t)});for(let e of Hx)i.wrap(c,e,e=>function(...t){if(!d(`block.jinnangEffect`))return e.apply(this,t)})}let l=await h(()=>{let e=W(r.gameScene()?.seatContainer);return typeof e?.ReadyInteractProp==`function`?e:null},60,100);i.wrap(l,`ReadyInteractProp`,
ae),oe()})()}function re(e){let t=e?.HitTrigger;if(typeof t!=`function`)return;let r=Number(e?.HitDelay)||0,i=n.Laya?.timer?.once;r>0&&typeof i==`function`?i.call(n.Laya?.timer,r,null,t):t()}function ie(){let e=W(r.dispatcher()?._events);if(!e)return null;
for(let t of Object.values(e))for(let e of Array.isArray(t)?t:[t]){let t=W(W(e)?.caller);if(typeof t?.PlayNanManEffect==`function`&&typeof t.PlayEffectSYS==`function`)return t}return null}function ae(e){return function(...t){if(!d(`block.interactEffect`))return e.apply(this,
t);let[n,,,i=!1]=t,a=r.managerFromList(e=>typeof e.GetPropByGoodsID==`function`&&typeof e.GetPropEffByGoodsId==`function`&&typeof e.GetPropByID==`function`),o=W(g(a,`GetPropByGoodsID`,n));if(i){let e=W(g(a,`GetPropEffByGoodsId`,n));e?.WinEffect&&(o=W(g(a,
`GetPropByID`,Number(e.WinEffect)))??o)}if(!Ux.includes(String(o?.aniname)))return e.apply(this,t);let s=r.manager(`WindowManager`),c=W(s?.constructor);g(s,`event`,c?.TABLEGAME_INTERACT_PROP_PLAY_DONE??s?.TABLEGAME_INTERACT_PROP_PLAY_DONE),
i&&g(s,`event`,c?.TABLEGAME_INTERACT_PROP_PLAY_EFF_DONE??s?.TABLEGAME_INTERACT_PROP_PLAY_EFF_DONE),this.PlayingInterProp=null,this.PlayingPropNum=0}}function oe(){let e=r.baseEffectPrototype();e&&(i.wrap(e,`InitEffect`,e=>function(t,...n){return e.call(this,
p(t),...n)}),i.wrap(e,`playEffect`,e=>function(...t){let r=this.effectUrl;if(d(`block.entranceEffect`)&&typeof r==`string`&&r.includes(`FX_SHT_SLCX`)){g(W(this._parent)?.currentBossCityItem,`ShowBossIcon`),g(this,`event`,n.Laya?.Event?.STOPPED??`stopped`);
return}return e.apply(this,t)}))}async function O(){let e=await h(()=>r.manager(`RogueLikePveManager`),40,500),t=await h(()=>r.classPrototype(`RogueComChangeWindow`),40,500);e&&t&&i.wrap(t,`SetData`,t=>function(...n){let i=W(n[0]);if(d(`block.entranceEffect`)&&i?.onlyCallback&&i.closetime==2.1){let n=W(r.scene()?.cityView),
a=n?.currentBossCityItem;return n?.IsBossShow&&a&&g(a,`ShowBossIcon`),i.notNeedCallBackEvent||g(e,`event`,e.TRIGGER_CURRENT_EVENT),i={...i,closetime:0,callback:null,notNeedCallBackEvent:!0},t.call(this,i)}return t.apply(this,n)});let n=await h(()=>W(W(W(r.scene()?.cityView)?.constructor)?.prototype),40,500);
i.wrap(n,`ShowBossEffect`,e=>function(...t){if(!d(`block.entranceEffect`))return e.apply(this,t);g(this.bossEffect,`stop`),g(this.bossEffect,`destroy`),this.bossEffect=null,g(this.currentBossCityItem,`ShowBossIcon`)})}async function se(){let e=await h(ce);
i.wrap(e,`executeSwitchScene`,e=>function(...t){ne();let n=e.apply(this,t),r=W(t[0])?.SceneName;return r&&m(()=>{r===`TableScene`&&le(),ne()}),n})}function ce(){let e=W(r.dispatcher()?._events)?.SWITCH_SCENE;for(let t of Array.isArray(e)?e:[e]){let e=W(W(t)?.caller);
if(e&&`CurrentScene`in e)return e}return null}function le(){let e=r.scene();i.wrap(e?Object.getPrototypeOf(e):null,`showRecordWindow`,e=>function(...t){return u=!!t[0],e.apply(this,t)})}async function ue(){let e=await h(()=>{let e=r.gameContext();
if(!e)return null;let t=typeof e==`function`?e:W(e.constructor);return t&&Object.getOwnPropertyDescriptor(t,`ShowGameDetonationEffects`)?.get?t:null},40,500);i.wrapGetter(e,`ShowGameDetonationEffects`,e=>()=>!d(`block.killEffect`)&&e())}function de(){let e=[r.manager(`TaskRedDotManager`),
r.managerFromList(e=>typeof e.setNodeState==`function`&&!!W(e.tree)?.root)].filter(e=>!!e);return e.find(e=>typeof e.setNodeState==`function`&&!!W(W(e.tree)?.root)?.state)??e.find(e=>typeof e.setNodeState==`function`)??null}async function fe(){let e=await h(()=>de(),40,500);
i.wrap(e,`setNodeState`,e=>function(t,n){if(t===1/0){Zx(W(this.tree)?.root).forEach(t=>e.call(this,t,0));return}return e.call(this,t,d(`block.taskRedDot`)?0:n)}),d(`block.taskRedDot`)&&pe()}function pe(){let e=de();if(e&&typeof e.setNodeState==`function`)for(let t of Zx(W(e.tree)?.root))g(e,
`setNodeState`,t,0)}function me(){let e=n.XMLHttpRequest?.prototype;i.wrap(e,`open`,e=>function(t,n,...r){return e.call(this,t,p(n),...r)})}function he(e){if(!Number.isFinite(e))return!1;let t=W(W(r.gameScene()?.SelfSeatUi)?.seat);for(let n of qx){let r=t?.[n];
if(Array.isArray(r))return r.some(t=>Number(t)===e)}return!1}function ge(e,t){Sx(e,t,{killEffect:d(`block.killEffect`),otherSkinState:d(`block.otherSkinState`),factionSlogan:d(`block.factionSlogan`),isOwnGeneral:he})}return c.push(e.subscribe(`block.adWindow`,({value:e})=>{e&&(b(`block.adWindow`,6,500),
x(3))}),e.subscribe(`block.noticeWindow`,()=>E()),e.subscribe(`block.taskRedDot`,({value:e})=>{e&&pe()})),me(),h(()=>r.dispatcher()&&r.manager(`WindowManager`),1/0,1e3).then(e=>{e&&(te(),[C,w,ee,se,O,ue,fe].forEach(e=>{e().catch(e=>console.warn(`[屏蔽设置] 安装失败:`,
e))}),ne())}),{filterMessage:ge,clearRedDots(){let e=de();if(typeof e?.setNodeState!=`function`)return{found:!1,count:0};let t=Zx(W(e.tree)?.root);for(let n of t)g(e,`setNodeState`,n,0);return{found:!0,count:t.length}},dispose(){l=!0,s.forEach(e=>clearTimeout(e)),
s.clear(),c.splice(0).forEach(e=>e()),o.splice(0).forEach(e=>e()),i.restoreAll()}}}function Zx(e){let t=W(e);if(!t?.state)return[];let n=[],r=[t];for(;r.length;){let e=r.shift(),t=Qx(e);t.length?r.push(...t):n.push(e)}return n}function Qx(e){let t=e.children;
return typeof t?.filter==`function`?t.filter(e=>!!W(e)?.state).map(W).filter(e=>!!e):[]}function W(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function G(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function K(e,
t,...n){let r=G(e),i=r?.[t];return typeof i==`function`?i.apply(r,n):void 0}function $x(e){let t=G(e);return G(t?Object.getPrototypeOf(t):null)??G(G(t?.constructor)?.prototype)}var eS=300;function tS(e,t={}){try{let n=globalThis,r=Array.isArray(n.__XIAOCHAO_SKIN_TRACE__)?n.__XIAOCHAO_SKIN_TRACE__:[];
n.__XIAOCHAO_SKIN_TRACE__=r,r.push({time:Date.now(),kind:e,detail:t}),r.length>eS&&r.splice(0,r.length-eS)}catch{}}function nS(e,t,n){try{let r=e?.getItem(t);return r?JSON.parse(r):n}catch{return n}}function rS(e,t,n){try{e?.setItem(t,JSON.stringify(n))}catch{}}function iS(e){return e?.getItem(`LastUserName`)||e?.getItem(`SGS_LASTLOGIN_ACCOUNT`)||e?.getItem(`SGS_LASTLOGIN_ACCOUNT1`)||`default`}function aS(){let e=new Set,
t=!1;function n(n,r){let i=setTimeout(()=>{e.delete(i),t||n()},r);e.add(i)}return{get disposed(){return t},later:n,poll(e,r,i){return new Promise(a=>{let o=r=>{if(t)return a(null);let s=null;try{s=e()}catch{s=null}if(s)return a(s);if(r<=0)return a(null);
n(()=>o(r-1),i)};o(r)})},dispose(){t=!0,e.forEach(e=>clearTimeout(e)),e.clear()}}}function oS(e,t,n,r,i){n.poll(()=>{let t=e.dispatcher(),n=t?e.obfuscatedMethodName(t,`GameEventDispatcher`,`ShowWindow`):null;return t&&n?{dispatcher:t,methodName:n}:null},1/0,1e3).then(e=>{e&&t.wrap(e.dispatcher,
e.methodName,e=>function(t,...n){let a=e.call(this,t,...n);if(typeof t==`string`&&r.includes(t))try{i(t,n)}catch(e){console.warn(`[皮肤与背景] 窗口处理失败:`,t,e)}return a})})}function sS(e,t,n,r){n.poll(()=>{let t=G(e.dispatcher()?._events)?.SWITCH_SCENE;
for(let e of Array.isArray(t)?t:[t]){let t=G(G(e)?.caller);if(t&&typeof t.executeSwitchScene==`function`)return t}return null},1/0,1e3).then(e=>{t.wrap(e,`executeSwitchScene`,e=>function(...t){let i=e.apply(this,t);return n.later(()=>{try{r()}catch(e){console.warn(`[皮肤与背景] 场景切换处理失败:`,
e)}},0),i})})}function cS(e,t=!0){let n=G(e);if(!n)return null;let r=G(t?n.General??n.general:n.General2??n.general2),i=Number(t?n.GeneralId??n.generalID??r?.GeneralId??r?.CardId:n.General2Id??n.general2ID??r?.GeneralId??r?.CardId);if(!(i>0)||!r||r.IsShibing)return null;
let a=t?n.SkinID??r.SkinID:n.Skin2ID??r.SkinID,o=t?r.DySkinType??n.DySkinType:r.DySkinType??n.DySkinType2;return{seat:n,isZhu:t,general:r,generalID:i,skinID:Number(a)||0,isDynamic:!!r.IsDynamic,skinType:Number(o)||1}}function lS(e,t,n){if(t.generalID===n)return!0;
try{return typeof e.inSkinGeneralId==`function`&&!!e.inSkinGeneralId.call(e,t.generalID,n)}catch{return!1}}function uS(e){if(e.dynamicState)return!0;let t=G(e.skinData);try{if(typeof t?.canUpdateDynamic==`function`&&t.canUpdateDynamic.call(t))return!0}catch{}return!!(t?.CanUpdate||t?.IsSkillEffect||t?.IsDynamic||Number(t?.ResType)>0||t?.DynamicSkinBigSkeletonUrl||t?.DynamicSkinBigUrl)}var dS=`::XC_OFFICIAL_BACKGROUND_CHOICE`,
fS=/\/sgs_ccon(?:[?#]|$)/,pS=/GAME_BG_(?:STRUCT|USEID)/,mS=/SetGameWallPaper|NowModeCachedUseId|usuallyWallBtnClick/,hS=[`maskLock`,`tagLock`,`lbPowerVal`,`vipImg`],gS=[`IsCanShow`,`IsCanUse`,`IsInPlatform`,`IsSamePower`],_S=1,vS=`__xcOfficialBackgroundRequestUrl`;
function yS(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=t.storage??n.localStorage,a=t.menuExtension,o=yx(),s=aS(),c=new WeakMap,l=new Set,u=[],d=0,f=!1,p=!1,m=()=>e.get(`skin.officialBackground`)===!0,h=()=>!!a?.enabled();function g(){return`${iS(i)}${dS}`}function _(){let e=nS(i,
g(),null),t=Number(e&&typeof e==`object`?e.id:e);return Number.isFinite(t)&&t>0?t:0}function v(e){let t=Number(e);return f||!m()||!Number.isFinite(t)||t<=0?!1:(rS(i,g(),{id:t,savedAt:Date.now()}),!0)}function y(e){T(),d+=1;try{return e()}finally{--d}}function b(){let e=n.XMLHttpRequest?.prototype;
o.wrap(e,`open`,e=>function(...t){return this[vS]=String(t[1]??``),e.apply(this,t)}),o.wrap(e,`send`,e=>function(...t){if(m()&&bS(String(this[vS]??``),t[0])){try{this.abort()}catch{}return}return e.apply(this,t)})}function x(){let e=r.managerFromList(e=>typeof e.SendSettingLog==`function`);
o.wrap(e,`SendSettingLog`,e=>function(...t){if(!(m()&&(d>0||mS.test(String(Error().stack??``)))))return e.apply(this,t)})}let S=null;function C(){let e=r.dispatcher();if(e){if(S!==e&&typeof e.on==`function`){let t={},n=e=>v(e);e.on.call(e,`SELECT_WALLPAPER`,
t,n),S=e,u.push(()=>K(e,`off`,`SELECT_WALLPAPER`,t,n))}o.wrap(e,`event`,e=>function(t,n,...r){return e.call(this,t,w(t,n),...r)})}}function w(e,t){if(e!==`BACKGROUND_USEDID_GOT`||!m())return t;let n=_();return n?Array.isArray(t)&&t.length>1&&t[1]===``?Number(t[0])===n?t:[n,...t.slice(1)]:!Array.isArray(t)&&r.scene()?.SceneName===`RogueLikeGameScene`&&Number(t)>0?Number(t)===n?t:n:t:t}function T(){x(),
C()}function E(e,t){o.wrapGetter(e,t,e=>()=>m()||e())}function D(e){let t=$x(e);gS.forEach(e=>E(t,e))}function ee(e){E($x(e),`canUsed`)}function te(e){if(!m())return;hS.forEach(t=>{let n=G(e[t]);n&&(n.visible=!1)});let t=G(e.bg);t&&`Gray`in t&&(t.Gray=!1)}function ne(e){return Number(e.ID??e.Id??e.id??G(e.data)?.ID??0)}function re(e,
t){let n=G(e),r=$x(n);if(n&&r){for(let e of[`initUI`,`updateUI`])o.wrap(r,e,e=>function(...t){let n=e.apply(this,t);return te(this),n});o.wrap(r,`onSelectedClicked`,e=>(c.set(r,e),function(...t){let n=m()?K(this,`useWall`):e.apply(this,t);return a?.onOfficialWallpaperUsed(),
n})),o.wrap(r,`useWall`,e=>function(...t){if(!m())return e.apply(this,t);let n=y(()=>e.apply(this,t));return v(ne(this)),le(this),n}),ie(n,r,t),te(n)}}function ie(e,t,r){let i=G(e.selectedBtn),a=e.onSelectedClicked,o=G(n.Laya?.Event),s=r?o?.CLICK:o?.MOUSE_DOWN;
if(!i||typeof a!=`function`||!s)return;let l=c.get(t);l&&K(i,`off`,s,e,l),K(i,`off`,s,e,a),K(i,`on`,s,e,a)}function ae(e){let t=r.manager(`GeneralSkinManager`);if(!t)return e();let n=[],i={IsForever:!0,Expirydate:2**53-1};for(let e of[`GetSkinInBagBySkinID`,
`GetSkinListBySkinID`]){let r=t[e];typeof r==`function`&&(n.push([e,Object.getOwnPropertyDescriptor(t,e)]),t[e]=e===`GetSkinInBagBySkinID`?function(...e){return r.apply(this,e)||i}:function(...e){let t=r.apply(this,e);return Array.isArray(t)&&t[0]?t:[i]})}try{return e()}finally{for(let[e,
r]of n)r?Object.defineProperty(t,e,r):delete t[e]}}function oe(e){o.wrap($x(e),`onShowSkinitems`,e=>function(...t){let n=m()?ae(()=>e.apply(this,t)):e.apply(this,t);if(m()||h()){O(this,`wallPaperSkinItems`).forEach(e=>{m()&&ee(e.data),re(e,!0)});
let e=fe(this,_());e&&le(e)}return n})}function O(e,t){let n=e[t];return Array.isArray(n)?n.map(G).filter(e=>e!==null):[]}function se(e){O(e,`wallPaperItems`).forEach(e=>re(e,!1)),O(e,`wallPaperSkinItems`).forEach(e=>{m()&&ee(e.data),re(e,!0)})}function ce(e){let t=G(e.panel);
t&&(K(e,`clearItems`),K(t,`removeSelf`),K(t,`destroy`,!0),e.panel=null)}function le(e){for(let t of l){let n=O(t,`wallPaperSkinItems`),r=O(t,`wallPaperItems`);if(n.includes(e)||r.includes(e))for(let t of[...r,...n])ue(t,t===e)}}function ue(e,
t){let n=G(e.selectedImg);n&&(n.visible=t,n.zOrder=999,t&&K(e,`setChildIndex`,n,Number(e.numChildren)||0))}function de(e){let t=[...O(e,`wallPaperItems`),...O(e,`wallPaperSkinItems`)].find(e=>G(e.selectedImg)?.visible);return t?ne(t):0}function fe(e,
t){return[...O(e,`wallPaperItems`),...O(e,`wallPaperSkinItems`)].find(e=>ne(e)===t)}function pe(e){f=!0;try{y(()=>K(e,`useWall`))}finally{f=!1}}function me(e){if(!m())return!1;if(T(),oe(e),l.has(e))return se(e),!0;O(e,`wallPaperItems`).forEach(e=>re(e,!1)),
ce(e),e.wallPaperSkinItems=[],K(e,`onShowSkinitems`);let t=de(e);if(K(e,`initData`),!e.usedData){let t=O(e,`wallPaperItems`),n=t.find(e=>!G(e.maskLock)?.visible&&!G(e.tagLock)?.visible)??t[0];n&&(pe(n),K(e,`initData`))}D(e.usedData),K(e,`RefreList`),
K(e,`loadMore`),se(e);let n=G(e.panel);n&&(n.visible=G(e.tabGroup)?.SelectedValue===_S);let r=_(),i=fe(e,r||t);return i&&(r?K(i,`useWall`):(pe(i),v(t))),l.add(e),!0}function he(e){oe(e),se(e)}function ge(e){let t=G(e);t&&(K(t,`RefreList`),t.panel&&(ce(t),
t.wallPaperSkinItems=[],G(t.tabGroup)?.SelectedValue===_S&&K(t,`onShowSkinitems`)),O(t,`wallPaperItems`).forEach(e=>K(e,`initUI`)),O(t,`wallPaperSkinItems`).forEach(e=>K(e,`updateUI`)),l.delete(t))}function _e(e){let t=G(e.wallPaperUI),n=G(t?.tabGroup)?.BtnList;
return t&&Array.isArray(n)&&n.length?t:null}function ve(e){(m()||h())&&s.poll(()=>_e(e),100,50).then(e=>{e&&(m()?me(e):h()&&he(e),a?.attachMenu(e))})}function ye(e){o.wrap($x(e),`onClickSkin`,e=>function(...t){let n=e.apply(this,t);return ve(this),
n})}function be(e){K(e,`onClickSkin`);let t=G(e.wallPaperUI);return t?(t.visible=!1,K(G(n.Laya?.stage),`off`,G(n.Laya?.Event)?.CLICK,e,e.stageclickHandler),!0):!1}function xe(){T();let e=G(r.scene()?.topMenu);if(!e){(m()||h())&&Se();return}if(ye(e),!m()){ge(e.wallPaperUI),
h()&&(e.wallPaperUI||be(e))?ve(e):G(e.wallPaperUI)&&a?.detachMenu(e.wallPaperUI);return}(e.wallPaperUI||be(e))&&ve(e)}function Se(){p||(p=!0,s.poll(()=>G(r.scene()?.topMenu),100,50).then(e=>{p=!1,e&&xe()}))}b();let Ce=e.subscribe(`skin.officialBackground`,()=>xe());
return sS(r,o,s,xe),s.poll(()=>r.dispatcher()&&G(r.scene()?.topMenu),1/0,1e3).then(e=>{e&&xe()}),{sync:xe,dispose(){Ce(),s.dispose(),u.splice(0).forEach(e=>e()),o.restoreAll()}}}function bS(e,t){if(!fS.test(e))return!1;let n=String(t??``);try{n=decodeURIComponent(n)}catch{}return pS.test(n)}var xS=`XC::localSkins`,
SS=[`ChangeSkinWindow`,`SelectSkinWindow`],CS=[`timeBg`,`composeBg`,`composeIcon`,`composeTxt1`,`composeTxt2`,`composeTxt`,`timeLimiteTxt`],wS=[`generalIds`,`GeneralIds`,`WuJiangs`,`generals`],TS=[0,50,200,600,1500],ES=3e3;function DS(e,t={}){let n=t.globalObject??window,
r=t.locator??Sh(n),i=t.storage??n.localStorage,a=yx(),o=aS(),s=[],c=new WeakMap,l=new Map,u=new WeakMap,d=new Set,f=new WeakMap,p=new Map,m=new WeakMap,h=new Set,g=null,_=0,v=0,y=0,b=null,x=()=>e.get(`skin.localSkin`)===!0,S=()=>e.get(`skin.otherLocalSkin`)===!0,
C=()=>G(n.Laya?.Event);function w(){let e=nS(i,xS,{});return e&&typeof e==`object`?e:{}}function T(e){let t=w()[String(Number(e))];return t&&Number(t.skinID)>=0?{skinID:Number(t.skinID),isDynamic:t.isDynamic!==!1}:null}function E(e,t,n){e>0&&rS(i,
xS,{...w(),[e]:{skinID:t,isDynamic:n}})}function D(){let e=G(G(r.gameScene()?.SelfSeatUi)?.seat);return typeof e?.SetGeneralSkin==`function`?e:null}function ee(e){if(!Number.isFinite(e))return!1;let t=G(G(r.gameScene()?.SelfSeatUi)?.seat);for(let n of wS){let r=t?.[n];
if(Array.isArray(r))return r.some(t=>Number(t)===e)}return!1}function te(e,t){if(t!==`ClientGeneralSkinRep`||!x())return;let n=e.GeneralSkinList;if(Array.isArray(n))for(let e of n){let t=G(e);if(!t||!ee(Number(t.GeneralID)))continue;t.state=1;
let n=T(t.GeneralID);n&&(t.SkinID=n.skinID,t.state=+!!n.isDynamic)}}function ne(e,t,n){let r=D();if(!r||!(e>0))return!1;for(let i of[!0,!1]){let a=cS(r,i);if(a&&lS(r,a,e))return K(r,`SetGeneralSkin`,e,t,n,a.skinType,!0),!0}return!1}function re(e){let t=G(e.skinData),
n=Number(e.SkinID??e.skinId??e.skinID??t?.skinID);return Number.isFinite(n)&&n>=0?n:null}function ie(e){let t=c.get(e);if(t)return t;let n={skinID:re(e),supportsDynamic:uS(e),dynamicState:e.dynamicState,hasSkin:e.hasSkin,isUsing:e.isUsing,bgMouseEnabled:G(e.bg)?.mouseEnabled,
blackbgVisible:G(e.blackbg)?.visible,visibility:Object.fromEntries(CS.map(t=>[t,G(e[t])?.visible]))};return c.set(e,n),n}function ae(e){if(!x())return;let t=ie(e);e.dynamicState=t.hasSkin?t.dynamicState?-1:-2:-3,e.hasSkin=!0;let n=G(e.bg);n&&(n.mouseEnabled=!0);
let r=G(e.blackbg);r&&(r.visible=!1),e.isUsing=!1,CS.forEach(t=>{let n=G(e[t]);n&&(n.visible=!1)})}function oe(e){let t=c.get(e);if(!t)return;e.dynamicState=t.dynamicState,e.hasSkin=t.hasSkin,e.isUsing=t.isUsing;let n=G(e.bg);n&&t.bgMouseEnabled!==void 0&&(n.mouseEnabled=t.bgMouseEnabled);
let r=G(e.blackbg);r&&t.blackbgVisible!==void 0&&(r.visible=t.blackbgVisible),CS.forEach(n=>{let r=G(e[n]);r&&t.visibility[n]!==void 0&&(r.visible=t.visibility[n])}),c.delete(e)}function O(e){a.wrap(e,`render`,e=>function(...t){let n=c.get(this),
r=e.apply(this,t);return x()?(n&&re(this)!==n.skinID&&c.delete(this),ae(this)):oe(this),r})}function se(e){let t=e?[[e,l.get(e)]]:[...l.entries()];for(let[e,n]of t)n?.forEach(oe),l.delete(e)}function ce(e,t){let n=u.get(e);if(!n||!Number.isFinite(t)||t<0)return null;
for(let e of n.items){let n=c.get(e);if(n&&Number(n.skinID)===t)return{item:e,original:n}}return null}function le(e,t,n){let r=u.get(e);if(!r)return{handled:!1};let i=Number(e.closeSelectSkinId);if(r.handled&&r.handled.skinID===i)return{handled:!0,
result:r.handled.result};let a=ce(e,i);if(!a||!x())return Number(e.closeSelectDynamicState)<0?(e.closeSelectDynamicState=0,{handled:!0,result:!1}):{handled:!1};if(e.clickCheck!==!0)return{handled:!1};let o=Number(e.defaultGeneralID??e.realGeneralID??e.generalID),
s=a.original.supportsDynamic;o>0&&E(o,i,s);let c=!1;a.original.hasSkin?(e.closeSelectDynamicState=+!!a.original.dynamicState,c=t.apply(e,n)):e.closeSelectDynamicState=0;let l=!1;try{l=ne(o,i,s)}catch(e){console.warn(`[皮肤解锁] 本地应用失败:`,e),yu(`本地换肤失败，请重试`,
`error`)}let d=l||c;return tS(`local-select`,{generalID:o,skinID:i,owned:!!a.original.hasSkin,isDynamic:s,applied:l,selfSeat:!!D(),seatGenerals:[!0,!1].map(e=>cS(D(),e)?.generalID??null)}),r.handled={skinID:i,result:d},{handled:!0,result:d}}function ue(e,
t){let n=u.get(e);return n?(n.items=new Set(t),n.handled=void 0,!0):(u.set(e,{items:new Set(t)}),a.wrap(e,`closeSelectSure`,e=>function(...t){if(Se(this)){let e=ke(this);if(e.handled)return e.applied}let n=le(this,e,t);return tS(`close-select`,
{skinID:this.closeSelectSkinId,dynamicState:this.closeSelectDynamicState,clickCheck:this.clickCheck,handled:n.handled}),n.handled?n.result:e.apply(this,t)})||a.isWrapped(e,`closeSelectSure`))}function de(e){let t=r.window(e);return t&&!t.destroyed?t:null}function fe(e){let t=e;
for(let e=0;t&&e<8;e+=1){let e=SS.find(e=>e===t?.name);if(e)return e;t=G(t._parent)}return SS.find(t=>G(de(t)?.selectView)===e)??null}async function pe(e){if(!x()){se(e);return}let t=await o.poll(()=>{let t=G(de(e)?.selectView)?.itemList;return Array.isArray(t)&&t.length>1?t:null},300,20),
n=G(de(e)?.selectView);if(tS(`local-preview`,{windowName:e,windowFound:!!de(e),inGame:!!r.gameScene(),generalID:n?.realGeneralID??n?.generalID,itemCount:Array.isArray(n?.itemList)?n.itemList.length:null,showCount:Array.isArray(n?.ShowItemList)?n.ShowItemList.length:null,
listArray:Array.isArray(G(n?.list)?.array)?(G(n?.list)?.array).length:null,viewKeys:n?Object.keys(n).slice(0,80):[],items:(Array.isArray(n?.itemList)?n.itemList:[]).slice(0,40).map(e=>{let t=G(e);return{skinID:t?re(t):null,hasSkin:t?.hasSkin,
dynamicState:t?.dynamicState,visible:t?.visible}})}),!t||!x())return;se(e);let i=G(de(e)?.selectView),a=t.map(G).filter(e=>e!==null);i&&ue(i,a)&&(l.set(e,new Set(a)),a.forEach(e=>{O(e),ae(e)}))}function me(){for(let e of SS)de(e)&&(x()?pe(e):se(e))}function he(e){let t=m.get(e);
return t||(t=++y,m.set(e,t)),t}function ge(e,t,n){return`${he(e)}:${t?`main`:`deputy`}:${n}`}function _e(e){return e?.Index??e?.index??e?.seatID}function ve(e){let t=G(e.lookOnBtn);return!t||t.destroyed?!1:`_visible`in t?t._visible===!0:t.visible===!0}function ye(e){let t=G(e.seat);
if(!t)return e.isZhu!==!1;if(t.General2&&typeof e.getTipGeneral==`function`)try{let n=e.getTipGeneral.call(e);if(n===t.General2)return!1;if(n===t.General)return!0}catch{}return e.isZhu!==!1}function be(e,t){if(e.IsSelf||!(t>0))return null;for(let n of[!0,!1]){let r=cS(e,
n);if(!r||!lS(e,r,t))continue;let i=p.get(ge(e,n,r.generalID));if(i?.epoch===_)return i;let a=`${he(e)}:${n?`main`:`deputy`}:`;for(let[t,n]of p)if(t.startsWith(a)&&n.epoch===_&&lS(e,r,n.generalID))return n}return null}function xe(e){if(!e||e.cancelled||e.completed||e.epoch!==_||!S()||e.scene!==r.gameScene()||e.seat.destroyed||e.seat.IsSelf||_e(e.seat)!==e.seatIndex)return!1;
let t=cS(e.seat,e.isZhu);return!!(t&&lS(e.seat,t,e.generalID))}function Se(e,t=0){let n=f.get(e);if(n&&!n.completed)return n;let r=[...d].filter(e=>!e.completed&&e.epoch===_).sort((e,t)=>t.token-e.token);if(!r.length)return null;let i=Number(e.realGeneralID??e.generalID)||Number(t)||0;
if(i){let e=r.find(e=>e.generalID===i);if(e)return e}if(g&&r.includes(g)&&(!i||g.generalID===i))return g;let a=r.filter(t=>!t.view||t.view===e);return!i&&a.length===1?a[0]:null}function Ce(e,t){f.set(e,t),t.view=e;let n=cS(t.seat,t.isZhu);n&&(e.usingSkinID=n.skinID,
e.closeSelectSkinId=n.skinID,e.closeSelectDynamicState=+!!n.isDynamic)}function we(e){e&&(e.cancelled=!0,e.completed=!0,d.delete(e),g===e&&(g=null))}function Te(){[...d].forEach(we),g=null}function Ee(e){if(!xe(e))return!1;let t=de(`ChangeSkinWindow`)??de(`SelectSkinWindow`),
n=G(t?.selectView);if(!t||!n)return!1;let r=Number(t.generalID??n.realGeneralID??e.generalID);return r===e.generalID&&(Ce(n,e),g===e&&(g=null),K(n,`sortList`),K(n,`updateContent`),tS(`other-bind`,{generalID:r,windowName:t.name,itemCount:Array.isArray(n.itemList)?n.itemList.length:null,
showCount:Array.isArray(n.ShowItemList)?n.ShowItemList.length:null}),!0)}function De(e){TS.forEach(t=>o.later(()=>{g===e&&Ee(e)},t)),o.later(()=>{if(g!==e)return;let t=G((de(`ChangeSkinWindow`)??de(`SelectSkinWindow`))?.selectView);t&&(f.set(t,
e),t.clickCheck=!1),we(e)},ES)}function Oe(e,t,n){let r=ce(e,t);if(r)return r.original.supportsDynamic;if(typeof n==`boolean`)return n;let i=Number(n)||0;return i>0||i===-1}function ke(e){let t=Se(e);if(!t)return{handled:!1,applied:!1};f.delete(e);
let n=!1;if(e.clickCheck===!0&&xe(t)){let r=cS(t.seat,t.isZhu),i=Number(e.closeSelectSkinId);if(r&&Number.isFinite(i)&&i>=0){let a=Oe(e,i,e.closeSelectDynamicState),o=ge(t.seat,t.isZhu,r.generalID),s=p.get(o);p.set(o,{epoch:_,seat:t.seat,generalID:r.generalID,
skinID:i,isDynamic:a,skinType:r.skinType});try{K(t.seat,`SetGeneralSkin`,r.generalID,i,a,r.skinType,!0),n=!0}catch(e){s?p.set(o,s):p.delete(o),console.warn(`[他人换肤] 本地应用失败:`,e),yu(`给其他角色换肤失败，请重试`,`error`)}}}return we(t),{handled:!0,applied:n}}function Ae(e,
t,n,r){let i=G(e.seat);if(!i)return;let a=Object.getOwnPropertyDescriptor(i,`IsSelf`),o=e.canChangeSkin,s=e.activated,c=e.isZhu,l;try{e.canChangeSkin=!1,l=r.apply(e,t)}finally{e.canChangeSkin=o}if(ve(e))return l;let u=!1;try{return Object.defineProperty(i,
"IsSelf",{value:!0,configurable:!0}),u=!0,e.canChangeSkin=!0,e.activated=!1,e.isZhu=n,r.apply(e,t)}finally{e.canChangeSkin=o,e.activated=s,e.isZhu=c,u&&(a?Object.defineProperty(i,"IsSelf",a):delete i.IsSelf)}}let k=new WeakMap;function je(e){let t=$x(e);
t&&(a.wrap(t,`onSKinClick`,e=>(k.set(t,e),function(...t){let n=G(this.seat);return!S()||!n||n.IsSelf||ve(this)?e.apply(this,t):Me(this,t,e)||e.apply(this,t)})),a.wrap(t,`OnSomeTextureOver`,e=>function(...n){let r=G(this.seat);if(!r||r.IsSelf)return e.apply(this,
n);if(!S()){let t=e.apply(this,n),r=G(this.skinBtn);return r&&Object.assign(r,{visible:!1,mouseEnabled:!1}),t}let i=ye(this),a=Ae(this,n,i,e);if(ve(this))return a;let o=G(this.skinBtn);if(o&&!h.has(o)){let e=C()?.CLICK,n=k.get(t);e&&(n&&K(o,
`off`,e,this,n),K(o,`off`,e,this,this.onSKinClick),K(o,`on`,e,this,this.onSKinClick)),h.add(o)}if(o&&(o.mouseEnabled=!0,o.__xcOtherSkinIsZhu=i,r.General2&&typeof this.getTipGeneral==`function`)){let e=Math.round(Number(this.width||146)/2);o.x=i?Math.max(0,104-e):104}return a}))}function Me(e,
t,n){let i=G(e.skinBtn),a=typeof i?.__xcOtherSkinIsZhu==`boolean`?i.__xcOtherSkinIsZhu:ye(e),o=cS(e.seat,a),s=r.gameScene();if(!o||o.seat.IsSelf||!s)return!1;g&&we(g);let c={token:++v,epoch:_,scene:s,seat:o.seat,seatIndex:_e(o.seat),isZhu:o.isZhu,
generalID:o.generalID,view:null,cancelled:!1,completed:!1};d.add(c),g=c;let l=e.isZhu;try{e.isZhu=o.isZhu,n.apply(e,t)}catch(e){return we(c),console.warn(`[他人换肤] 打开换肤框失败:`,e),!1}finally{e.isZhu=l}return g===c&&De(c),!0}function Ne(e){let t=$x(e);
t&&a.wrap(t,`SetGeneralSkin`,e=>function(...t){let n=be(this,Number(t[0]));return n&&(t[1]=n.skinID,t[2]=n.isDynamic,t[3]=n.skinType,t[4]=!0),e.apply(this,t)})}function Pe(e){let t=new Set,n=e=>{let r=G(e);if(r){for(let e of[r.otherTopManager,
r.topManager]){let n=G(e);typeof n?.OnSomeTextureOver==`function`&&typeof n.onSKinClick==`function`&&t.add(n)}r.fuSeatUI&&r.fuSeatUI!==r&&n(r.fuSeatUI)}},r=G(e?.seatContainer)?.seatUIs;return Array.isArray(r)&&r.forEach(n),n(e?.SelfSeatUi),[...t]}function Fe(){h.forEach(e=>{e.visible=!1,
e.mouseEnabled=!1})}function Ie(){Fe(),h.clear(),Te(),p.clear(),_+=1}function Le(){let e=r.gameScene();e&&b&&e!==b&&Ie(),e&&(b=e),Ne(G(e?.SelfSeatUi)?.seat);let t=Pe(e);return t.forEach(e=>{je(e),Ne(e.seat)}),S()||(Fe(),Te(),p.clear()),t.length}function Re(){o.poll(()=>r.gameScene()?Le()>0:!1,60,500)}function ze(e){let t=$x(e);
t&&(a.wrap(t,`initUsingSKinID`,e=>function(t,...n){let i=Se(this,Number(t));if(i&&Number(t)===i.generalID){if(xe(i)){Ce(this,i),g===i&&(g=null);return}f.set(this,i)}let a=e.call(this,t,...n);if(!(Number(this.usingSkinID)>0)){let e=K(r.manager(`GeneralSkinManager`),
`GetSelfUsingSkinID`,t);e!==void 0&&(this.usingSkinID=e)}return a}),a.wrap(t,`UpdateInfo`,e=>function(t,...n){let r=e.call(this,t,...n),i=Se(this,Number(t));i&&Number(t)===i.generalID&&(xe(i)?(Ce(this,i),K(this,`sortList`),K(this,`updateContent`)):f.set(this,
i));let a=this;return o.poll(()=>fe(a),30,100).then(e=>{tS(`update-info`,{generalID:t,windowName:e,session:!!i}),e&&pe(e)}),r}),a.wrap(t,`closeSelectSure`,e=>function(...t){let n=ke(this);return n.handled?n.applied:e.apply(this,t)}))}function Be(){for(let e of SS){let t=r.createInstance(e);
if(t){ze(t.selectView),tS(`picker-prototype`,{name:e,viewFound:!!t.selectView});try{K(t,`destroy`,!0)}catch{}}}}function Ve(e){let t=G(de(e)?.selectView);tS(`window-show`,{windowName:e,windowFound:!!de(e),viewFound:!!t,openingSession:!!g}),
t&&ze(t),pe(e)}return s.push(e.subscribe(`skin.localSkin`,()=>me()),e.subscribe(`skin.otherLocalSkin`,()=>{Le(),S()&&Re()})),oS(r,a,o,SS,Ve),sS(r,a,o,()=>{Le(),Re(),me()}),o.poll(()=>r.dispatcher()&&r.manager(`WindowManager`),1/0,1e3).then(e=>{e&&(Be(),
Le(),r.gameScene()&&Re())}),{filterMessage:te,dispose(){s.splice(0).forEach(e=>e()),o.dispose(),se(),Fe(),Te(),p.clear(),a.restoreAll()}}}var OS=`xcSkinBackgroundFavorites`,kS=`__xcSkinBackgroundFavoritesTab`,AS=95,jS=40;function MS(e){let{globalObject:t,
store:n,patcher:r}=e,i=new WeakMap,a=new Set,o=new WeakMap,s=new WeakMap,c=null,l=null,u=()=>G(t.Laya),d=()=>G(u()?.Event);function f(e){let t=i.get(e);return t||(t={items:[]},i.set(e,t)),t}function p(e){return G(e.tabGroup)?.SelectedValue===OS}function m(e){let t=(Array.isArray(e.wallPaperSkinItems)?e.wallPaperSkinItems:[]).map(G).find(e=>typeof e?.constructor==`function`);
t&&(c=t.constructor);let n=G(e.panel);typeof n?.constructor==`function`&&(l=n.constructor)}function h(e){let t=f(e);t.items.splice(0).forEach(e=>K(e,`destroy`,!0)),K(t.empty,`destroy`,!0),t.empty=void 0}function g(e){let t=f(e);if(t.panel&&t.panel!==e.panel&&!t.panel.destroyed)return t.panel;
let n=G(e.panel);typeof n?.constructor==`function`&&(l=n.constructor);let r=l;if(!r)return null;let i;try{i=new r}catch{return null}i.name=`WallSkinPanel`,K(i,`size`,Number(n?.width)||311,Number(n?.height)||Math.max(200,Number(e.panelHeight)-20||400)),
K(i,`pos`,Number(n?.x)||0,Number(n?.y)||10),i.visible=!1,i.mouseEnabled=!0;let a=Number(K(e,`getChildIndex`,e.tabGroup));return Number.isInteger(a)&&a>=0&&typeof e.addChildAt==`function`?K(e,`addChildAt`,i,a):K(e,`addChild`,i),t.panel=i,i}function _(e){return e.resource.type===0&&e.resource.url?e.resource.url:e.previewUrl}function v(e){let t=G(G(e)?.bitmap);
return!!t&&t.destroyed!==!0&&t._destroyed!==!0&&t.released!==!0}function y(e){let t=G(e.bg),n=t?o.get(t):void 0;t&&n&&(o.delete(t),K(G(n.__xcSourceTexture),`_removeReference`),K(n,`destroy`,!1))}function b(e){let t=G(e.bg);if(!t)return!1;let n=G(t.texture);
if(!n||t.skin&&n.url!==t.skin)return K(t,`size`,AS,jS),!1;if(!v(n))return C(e);if(n===o.get(t))return!0;let r=Number(n.width),i=Number(n.height);if(!(r>0&&i>0))return!1;let a=AS/jS,s=r,c=i,l=0,d=0;r/i>a?(s=i*a,l=(r-s)/2):r/i<a&&(c=r/a,d=(i-c)/2);
let f=G(K(G(u()?.Texture),`createFromTexture`,n,l,d,s,c));return f?(Object.defineProperty(f,"url",{value:String(t.skin||n.url)}),K(n,`_addReference`),f.__xcSourceTexture=n,y(e),o.set(t,f),t.texture=f,K(t,`size`,AS,jS),!0):!1}function x(e){let t=G(e.bg),
n=d()?.COMPLETE;t&&n&&(K(t,`off`,n,e,S),K(t,`once`,n,e,S))}function S(){b(this)}function C(e){let t=G(e.bg),n=String(t?.skin||``);if(!t||!n)return!1;try{K(G(u()?.loader),`clearRes`,n,!0)}catch{}return t.skin=``,t.skin=n,x(e),!0}function w(t,
n,r,i){let a=c;if(!a)return null;let s;try{s=new a}catch{return null}let l=d()?.CLICK,u=G(s.selectedBtn);u&&typeof s.onSelectedClicked==`function`&&K(u,`off`,l,s,s.onSelectedClicked);let f=async t=>{if(K(t,`stopPropagation`),!e.enabled())return!1;
let r=await e.applyFavorite(n.resource);return r&&oe(),r};s.onSelectedClicked=f,s.useWall=f,s.UpdateSelectedUI=function(){let t=G(this.selectedImg);t&&(t.visible=e.isCurrent(n));let r=G(this.bg);r&&(r.visible=!0);let i=r?.texture;r&&i&&i===o.get(r)&&!v(i)&&C(this)};
let p=s.updateUI;typeof p==`function`&&(s.updateUI=function(...e){let t=G(this.bg);t&&(x(this),K(t,`size`,AS,jS),t.scrollRect=null);let n=p.apply(this,e);return t&&(t.visible=!0),n});let m=s.destroy;typeof m==`function`&&(s.destroy=function(...e){let t=m.apply(this,
e);return y(this),t}),K(u,`on`,l,s,f),K(i,`addChild`,s),K(s,`UpdateData`,{ID:-(r+1),SkinID:Number(n.skinId)||0,Name:n.name,IconURL:_(n),IsUsual:e.isCurrent(n),canUsed:!0}),K(s,`UpdateSelectedUI`);let h=G(s.selectedImg);return h&&(h.visible=e.isCurrent(n),
h.zOrder=999,K(s,`setChildIndex`,h,Number(s.numChildren)||0)),K(s,`pos`,5+r%3*101,1+65*Math.floor(r/3)),s.visible=!0,s.mouseEnabled=!0,s}function T(e,t){let n=u()?.Sprite,r=u()?.Text;if(!n||!r)return null;let i=new n,a=new r,o=Number(e.width)||311,
s=Math.max(100,Number(e.height)||400);return Object.assign(a,{text:t?`皮肤背景列表尚未就绪`:`还没有收藏背景
请在皮肤详情中点击“收藏背景”`,font:`SimSun`,fontSize:12,color:`#DDCF98`,align:`center`,valign:`middle`,leading:8,mouseEnabled:!1}),K(a,`size`,o,s),K(i,`size`,o,s),i.mouseEnabled=!1,i.Drawed=!1,i.Draw=function(){this.Drawed=!0,this.visible=!0},i.ClearDraw=function(){this.Drawed=!1,
this.visible=!1},K(i,`addChild`,a),K(e,`addChild`,i),i}function E(e){m(e);let t=g(e);if(!t)return!1;h(e);let r=f(e),i=n.favorites();!i.length||!c?r.empty=T(t,i.length>0)??void 0:i.forEach((n,i)=>{let a=w(e,n,i,t);a&&r.items.push(a)}),K(t,`UpdateDrawContent`);
let a=G(t.vScrollBar);return K(a,`stopScroll`),a&&(a.value=0),K(t,`refresh`),!0}function D(e,t){let n=f(e),r=G(e.loadMoreTxt),i=G(e.loadMoreBg);if(t){n.loadMoreVisibility??={text:r?.visible,background:i?.visible},r&&(r.visible=!1),i&&(i.visible=!1);
return}let a=n.loadMoreVisibility;a&&(r&&(r.visible=a.text),i&&(i.visible=a.background),n.loadMoreVisibility=void 0)}function ee(e,t,r=!0){let i=f(e);if(!t)return r&&D(e,!1),i.panel&&i.panel!==e.panel&&(i.panel.visible=!1),!0;let a=n.favorites();
(Array.isArray(e.wallPaperItems)?e.wallPaperItems:[]).forEach(e=>{let t=G(e);t&&(t.visible=!1)});let o=G(e.noSkinWallSpr);if(o&&(o.visible=!1),m(e),!e.panel||a.length&&!c){let t=e.visible!==!1;t&&(e.visible=!1);try{K(e,`loadMore`)}finally{t&&(e.visible=!0)}m(e)}let s=G(e.panel);
s&&(s.visible=!1),D(e,!0);let l=g(e);return l?(E(e),l.visible=!0,!0):!1}function te(e){let t=G(e.tabGroup),n=t?.BtnList;if(!t||!Array.isArray(n))return null;let r=n.map(G).find(e=>e?.value===OS||e?.[kS]);if(r)return r;let i=G(n[0]),a=null;try{a=typeof i?.constructor==`function`?new i.constructor:null}catch{a=null}if(!a)return null;
let o=Array.isArray(i?.skins)?Array.from(i.skins):[];if(o.some(Boolean)&&typeof a.InitSkin==`function`?K(a,`InitSkin`,...o):K(a,`init`),i){K(a,`size`,Number(i.width)||Number(a.width)||0,Number(i.height)||Number(a.height)||0);let e=G(i.textField);
e?.font&&(a.labelFont=e.font),Number(e?.fontSize)>0&&(a.labelSize=Number(e.fontSize)),typeof e?.bold==`boolean`&&(a.labelBold=e.bold),Number(e?.stroke)>0&&(a.labelStroke=Number(e.stroke)),Array.isArray(i._labelColors)&&(a.labelColors=i._labelColors.join(`,
`)),Array.isArray(i._strokeColors)&&(a.strokeColors=i._strokeColors.join(`,`)),Array.isArray(i._labelPadding)&&(a.labelPadding=i._labelPadding.join(`,`)),i._soundRes&&(a.soundRes=i._soundRes)}return Object.assign(a,{label:`小抄背景`,value:OS,name:`ChangeBgSkinBtn`,[kS]:!0,
visible:!0,enabled:!0,mouseEnabled:!0}),n.splice(Math.min(2,n.length),0,a),K(t,`addChild`,a),K(a,`AfterInitUiByGroup`,{label:a.label,value:a.value}),K(t,`layout`),K(t,`LayoutBtn`),a}function ne(t){let n=G(t.tabGroup),i=Object.getPrototypeOf(t);
if(!n||!i||typeof i.onTabClick!=`function`)return!1;r.wrap(i,`onTabClick`,t=>(s.set(i,t),function(...n){if((Array.isArray(n[0])?n[0][0]:n[0])===OS&&e.enabled())return ee(this,!0);ee(this,!1,!1);try{return t.apply(this,n)}finally{f(this).loadMoreVisibility=void 0}})),
typeof i.RefreList==`function`&&r.wrap(i,`RefreList`,t=>function(...n){return p(this)&&e.enabled()?ee(this,!0):t.apply(this,n)});let a=f(t);if(!a.tabBound){let e=String(G(n.constructor)?.TAP_CLICKED||`TAP_CLICKED`),r=s.get(i);r&&K(n,`off`,e,
t,r),K(n,`off`,e,t,i.onTabClick),K(n,`on`,e,t,i.onTabClick),a.tabEvent=e,a.tabBound=!0}return!0}function re(t){if(!e.enabled()){ie(t);return}te(t)&&ne(t)&&(a.add(t),p(t)&&ee(t,!0))}function ie(e){let t=G(e.tabGroup);p(e)&&K(t,`SelectTab`,0),
ee(e,!1);let n=f(e);if(n.tabBound){let r=Object.getPrototypeOf(e),i=n.tabEvent||String(G(t?.constructor)?.TAP_CLICKED||`TAP_CLICKED`),a=r?s.get(r):void 0;K(t,`off`,i,e,r?.onTabClick),a&&(K(t,`off`,i,e,a),K(t,`on`,i,e,a))}h(e);let r=t?.BtnList;
if(Array.isArray(r)){for(let e=r.length-1;e>=0;--e)G(r[e])?.[kS]&&K(r.splice(e,1)[0],`destroy`,!0);K(t,`layout`),K(t,`LayoutBtn`)}n.panel&&n.panel!==e.panel&&K(n.panel,`destroy`,!0),i.delete(e),a.delete(e)}function ae(){for(let e of a)e.destroyed&&a.delete(e);
return[...a]}function oe(){ae().forEach(e=>f(e).items.forEach(e=>K(e,`UpdateSelectedUI`)))}let O=n.onFavoritesChange(()=>{ae().forEach(e=>{p(e)&&E(e)})});return{attach:re,detach:ie,refreshSelection:oe,dispose(){O(),ae().forEach(ie)}}}var NS=[.8,0,0,0,0,0,.8,0,0,0,0,0,.8,0,0,0,0,0,1,0],
PS=[`ChuChang`,`GongJi`,`HuDong`],FS=`__xcSkinBackgroundSprite`;function IS(e){let{globalObject:t,locator:n,store:r,tasks:i}=e,a=new Map,o={},s=r.loadResource(),c,l=``,u={width:0,height:0},d={},f=[],p=0,m=!1,h=()=>G(t.Laya),g=()=>G(h()?.Event);
function _(){let e=G(t.SystemContext),n=G(h()?.stage);return{width:Number(e?.gameWidth)||Number(n?.width)||0,height:Number(e?.gameHeight)||Number(n?.height)||0}}function v(){if(!c)return;let{width:e,height:t}=_(),n=Math.max(u.width?e/u.width:1,
u.height?t/u.height:1);K(c,`scale`,n,n),K(c,`pos`,e/2,t/2)}function y(){if(m)return;let e=G(h()?.stage),t=g()?.RESIZE;e&&t&&(K(e,`on`,t,o,v),m=!0)}function b(){if(c?._parent)return!0;let e=n.layer(`BackgroundLayer`),t=h()?.Sprite;if(!e||!t)return!1;
c=c??G(e[FS])??new t,e[FS]=c,K(e,`addChild`,c),c.zOrder=0;let r=h()?.ColorFilter;return r&&(c.filters=[new r(NS)]),y(),!0}function x(e){let t=a.get(e);if(t)return t;let r=G(n.gameScene()?.SelfSeatUi);try{let t=G(K(r,`getEffectType`,e===`BaseEffect`?2:4));
if(typeof t?.constructor==`function`)return a.set(e,t.constructor),a.get(e)}catch{}if(e===`BaseEffect`){let t=n.baseEffectPrototype();if(typeof t?.constructor==`function`)return a.set(e,t.constructor),a.get(e)}return S(),a.get(e)??null}function S(){let e=n.createInstance(`SkinInfoWindow`),
t=G(e?.skinBigSps);if(e&&t)try{Object.assign(e,{skinData:{skinBaseVo:{}},generalinfo:{ItemID:1}}),K(e,`showRightInfo`),K(t,`CreateBgEffect`),K(t,`CreateSpineEffect`),C(`BaseEffect`,G(t.bgEffect)?.constructor),C(`BaseSpineEffect`,G(t.spineBg)?.constructor)}catch{}finally{try{K(e,
`destroy`,!0)}catch{}}}function C(e,t){typeof t==`function`&&a.set(e,t)}function w(){p+=1,f.splice(0).forEach(e=>K(e,`destroy`)),Object.values(d).forEach(e=>{e.visible=!0})}function T(){for(w(),d={};Number(c?.numChildren)>0;)K(K(c,`removeChildAt`,0),
`destroy`);l=``}function E(e,t,n){let r=h()?.Sprite;if(!r||!c)return;let i=new r;K(i,`loadImage`,e),K(i,`pos`,-t/2,-n/2),K(c,`addChild`,i)}function D(e,t,n,r){let i=x(t===2?`BaseEffect`:`BaseSpineEffect`);if(!i||!c)return;let a=t===2?`sk`:`json`,[o,
s]=t===3?[[`beijing`,`daiji`,`qianjing`],`DaiJi`]:[[`beijing`,`xingxiang`],`play`];for(let l of o){let o=new i;K(c,`addChild`,o),o.AutoReleaseRes=!0,K(o,`InitEffect`,`${e}/${l}.${a}`,s,!0),K(o,`playEffect`),t===2&&K(o,`size`,n,r),d[l]=o}}async function ee(e=s){let{url:t,
type:n=0,width:a=0,height:o=0}=e;return!t||!c?._parent&&!await i.poll(()=>b(),20,500)?!1:(l!==t&&(T(),u={width:Number(a),height:Number(o)},Number(n)===0?E(t,Number(a),Number(o)):Number(n)!==1&&D(t,Number(n),Number(a),Number(o)),v(),l=t,s={url:t,
type:Number(n),width:Number(a),height:Number(o)},r.saveResource(s)),!0)}function te(e,t,n){if(n!==p)return;let r=f.indexOf(e);r>=0&&f.splice(r,1),K(e,`destroy`),d[t]&&(d[t].visible=!0)}function ne(e){if(!c?._parent||Number(s.type)!==3||!PS.includes(e))return!1;
let t=x(`BaseSpineEffect`);if(!t||f.length)return!1;w();let n=p,r=e===`ChuChang`?[`daiji`,`qianjing`]:[`xingxiang`,`qianjing`],[i]=r;for(let a of r){if(n!==p)break;let r=a===`xingxiang`?`daiji`:a;d[r]&&(d[r].visible=!1);let l=new t;f.push(l),
K(c,`addChild`,l),l.AutoReleaseRes=!0;let u=()=>{n===p&&(a===i?w():te(l,r,n))};K(l,`once`,g()?.STOPPED,o,u);let m=t.PLAY_NAME_LOSE;if(m&&K(l,`once`,m,o,u),K(l,`InitEffect`,`${s.url}/${a}.json`,e,!1),n!==p)break;K(l,`playEffect`)}return!0}function re(e=!1){if(T(),
s={},!e)return;r.clearResource();let t=n.layer(`BackgroundLayer`);K(c,`removeSelf`),t&&t[FS]===c&&delete t[FS],c=void 0}return{get resource(){return s},hasBackground:()=>!!(s.url||c||r.loadResource().url),setBackground:ee,async setEnabled(e){if(e){let e=r.loadResource();
e.url&&(s=e),await ee();return}w(),K(c,`removeSelf`)},clearBackground:re,playAction:ne,rememberEffectClass:C,dispose(){T(),K(c,`removeSelf`);let e=G(h()?.stage);m&&K(e,`off`,g()?.RESIZE,o,v),m=!1}}}var LS=`::paperRes`,RS=`::XC_SKIN_BACKGROUND_FAVORITES`;
function zS(e){let t=e&&typeof e==`object`?e:null,n=t?.resource&&typeof t.resource==`object`?t.resource:null;if(!t?.id||!n?.url)return null;let r=Number(n.type),i=Number(n.width),a=Number(n.height);return!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<=0||a<=0?null:{id:String(t.id),
skinId:String(t.skinId||``),generalId:Number(t.generalId)||0,state:Number(t.state)||0,name:String(t.name||`三国杀皮肤`),generalName:String(t.generalName||``),previewUrl:String(t.previewUrl||``),resource:{url:String(n.url),type:r,width:i,height:a},
savedAt:Number(t.savedAt)||0}}function BS(e){let t=()=>`${iS(e)}${LS}`,n=()=>`${iS(e)}${RS}`,r=new Set;function i(){let t=nS(e,n(),[]),r=Array.isArray(t)?t:Array.isArray(t?.items)?t.items:[],i=new Set;return r.map(zS).filter(e=>!e||i.has(e.id)?!1:(i.add(e.id),!0))}function a(t){rS(e,
n(),t),r.forEach(e=>{try{e()}catch(e){console.warn(`[皮肤做背景] 收藏刷新失败:`,e)}})}return{loadResource(){let n=nS(e,t(),{});return n&&typeof n==`object`?n:{}},saveResource(n){rS(e,t(),n)},clearResource(){try{e?.removeItem(t())}catch{}},favorites:i,
isFavorite:e=>!!e&&i().some(t=>t.id===e),addFavorite(e){let t=zS(e);return t?(a([t,...i().filter(e=>e.id!==t.id)]),!0):!1},removeFavorite(e){let t=i(),n=t.filter(t=>t.id!==e);return n.length!==t.length&&(a(n),!0)},onFavoritesChange(e){return r.add(e),()=>r.delete(e)}}}var VS=[`RogueLikeBigMapScene`,
`RogueSmallMapScene`],HS=3,US=50,WS=28,GS={60500:3,62300:2,66100:2};function KS(e,t){return{width:e?594:t?536:350,height:e?335:t?380:464}}function qS(e,t){return!e&&!t}function JS(e,t){let n=t.globalObject??window,r=t.locator??Sh(n),i=t.storage??n.localStorage,
a=yx(),o=aS(),s=BS(i),c=IS({globalObject:n,locator:r,store:s,tasks:o}),l=()=>G(n.Laya),u=()=>G(l()?.Event),d=()=>e.get(`skin.skinPaper`)===!0,f=MS({globalObject:n,store:s,patcher:a,enabled:d,applyFavorite:e=>w(e),isCurrent:e=>C(e)});function p(){return d()?e.get(`skin.allPaper`)===!0?!VS.includes(String(r.scene()?.SceneName??``)):!!r.gameScene():!1}async function m(e,
t=!0){if(t){let t=e.replace(`/big/static/`,`/big/bigSkin/`),n=await fetch(t);if(n.ok)return{response:n,url:t}}let n=await fetch(e);return n.ok?{response:n,url:e}:null}async function h(e,t,n){if(!e)return{url:``,type:0,width:t,height:n};let r=await m(e).catch(()=>null),
i=r?.url||e;if(!r?.response.ok||typeof createImageBitmap!=`function`)return{url:i,type:0,width:t,height:n};try{let e=await createImageBitmap(await r.response.blob()),t={width:e.width,height:e.height};return e.close?.(),{url:i,type:0,...t}}catch{return{url:i,
type:0,width:t,height:n}}}function g(e){let t=G(e.skinBigSps);c.rememberEffectClass(`BaseEffect`,G(t?.bgEffect)?.constructor),c.rememberEffectClass(`BaseSpineEffect`,G(t?.spineBg)?.constructor)}async function _(e){if(qS(e.is169,e.isHor))return null;
let t=String(G(e.skinImg)?.skin||``);if(!t)return null;let n=G(G(e.skinData)?.skinBaseVo),{width:r,height:i}=KS(e.is169,e.isHor),a=Number(e.isDynamicPlay)===1&&Number(n?.ResType)||0,o=String(n?.DynamicSkinBigSkeletonUrl||``);return g(e),a===1?{videoUrl:`${String(n?.DynamicSkinBigUrl||``)}.mp4`}:(a===3?n?.NewSkinJudge?o=String(K(n,
`DynamicSkinBigSkeletonUrlNew`,e.juexingState)||``):a=4:a!==2&&a!==4&&({url:o,width:r,height:i}=await h(t,r,i),a=0),{resource:{url:o,type:a,width:r,height:i}})}async function v(e){let t=G(e.skinData),n=G(e.paperGeneralInfo);if(!t||qS(t.Is169,
t.IsBanner))return null;let r=Number(e.CurDynamicState)||1,{width:i,height:a}=KS(t.Is169,t.IsBanner),o=uS(e),s=o&&Number(t.ResType)||0,c=o?String(t.DynamicSkinBigSkeletonUrl||``):``;s===1&&(s=0),s===3&&(t.NewSkinJudge?c=String(K(t,`DynamicSkinBigSkeletonUrlNew`,
r)||``):s=4);let l=String(K(t,`SkinBigUrl`,r)||``);if(![2,3,4].includes(s)||!c){let e=l||String(n?.GeneralBigImgUrl||``);return{state:0,previewUrl:e,resource:await h(e,i,a)}}return{state:r,previewUrl:l,resource:{url:c,type:s,width:i,height:a}}}function y(e){let t=e?.skinID??e?.SkinID??e?.ID??e?.id??e?.baseID;
return t==null?``:String(t)}function b(e){let t=G(G(e.skinData)?.skinBaseVo),n=Number(G(e.skinData)?.generalID)||0,r=Number(e.juexingState??e.CurDynamicState??0)||0,i=y(t);if(i)return`${n}:${i}:${r}`;let a=String(G(e.skinImg)?.skin||``);return a?`resource:${a}:${r}`:``}function x(e){let t=Number(G(e.skinData)?.ResType)||0;
return uS(e)&&[2,3,4].includes(t)?Number(e.CurDynamicState)||1:0}function S(e,t){let n=G(e.skinData),r=n?.skinID??n?.SkinID??e.skinId??e.SkinID;return r==null||r===``?``:`${Number(n?.generalID??G(e.paperGeneralInfo)?.GeneralID)||0}:${String(r)}:${Number(t)||0}`}function C(e){let t=c.resource;
return t.url===e.resource.url&&Number(t.type)===Number(e.resource.type)}async function w(e,t){if(!e?.url)return yu(`当前皮肤未找到可用背景资源`,`warning`,4e3),!1;K(t,`Close`);try{return t&&await new Promise(e=>o.later(()=>e(void 0),300)),await c.setBackground(e)?(f.refreshSelection(),
yu(`背景设置成功`,`success`,4e3),!0):(yu(`背景设置失败，请重试`,`error`,4e3),!1)}catch(e){return console.warn(`[皮肤做背景] 设置失败:`,e),yu(`背景设置失败，请重试`,`error`,4e3),!1}}function T(e){return Number(e.isDynamicPlay)===1&&Number(G(G(e.skinData)?.skinBaseVo)?.ResType)===1}function E(e,
t){!e||e.enabled===!1&&t!==3||(e.phase=t,K(e,`changeState`))}function D(e){let t=G(e.graphics);K(t,`clear`),K(t,`drawRect`,0,0,e.width,e.height,`rgba(0,0,0,0.001)`,null,0)}function ee(e,t,n,r,i){let a=`myFuncBtnHit${t}`,o=G(e[a]),s=l()?.Sprite,
c=G(e.contentSprite);if(!o){if(!s||!c)return null;o=new s,Object.assign(o,{name:`xcSkinInfoActionHit${t}`,mouseEnabled:!0,mouseChildren:!1,mouseThrough:!1,hitTestPrior:!0});let r=u();K(o,`on`,r?.MOUSE_OVER,o,()=>E(n,1)),K(o,`on`,r?.MOUSE_OUT,
o,()=>E(n,0)),K(o,`on`,r?.MOUSE_DOWN,o,()=>E(n,2)),K(o,`on`,r?.MOUSE_UP,o,()=>E(n,1)),K(o,`on`,r?.CLICK,e,t=>{K(t,`stopPropagation`),i(e)}),e[a]=o,K(c,`addChild`,o)}K(o,`size`,r,US),K(o,`pos`,n.x,n.y),o.zOrder=Math.max(1e4,Number(n.zOrder)+1||1e4);
let d=l()?.Rectangle;return o.hitArea=d?new d(0,0,r,US):null,o.mouseEnabled=!0,D(o),E(n,n.enabled===!1?3:0),o}function te(){let e=r.createInstance(`SgsFlatButton`);if(e)return e;let t=G(G(r.scene()?.topMenu)?.settingBtn);try{return typeof t?.constructor==`function`?new t.constructor:null}catch{return null}}async function ne(e,
t){let n=G(G(e.skinData)?.skinBaseVo),r=String(n?.name||`三国杀皮肤`),i=t||String(G(e.skinImg)?.skin||``);if(!i)return;let a=i.match(/\/([0-9]+)(_[0-9])?(\.png|\.mp4)/i);if(!a){yu(`当前皮肤资源地址无法识别`,`warning`,4e3);return}let o=GS[Number(a[1])]||(a[2]?2:1),
s=o>1?Array.from({length:o},(e,t)=>`_${t+1}`):[``];for(let e of s){let t=await m(i.replace(/(\/[0-9]+)(_[0-9])?(\.png|\.mp4)/i,`$1${e}$3`),!!n?.bigSkin).catch(()=>null);if(!t?.response.ok)continue;let o=URL.createObjectURL(await t.response.blob()),
s=document.createElement(`a`);s.href=o,s.download=`${r}${e}${a[3]}`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(o)}}async function re(e){if(qS(e.is169,e.isHor))return!1;let t=await _(e);return t?.videoUrl?(await ne(e,
t.videoUrl),!1):t?w(t.resource,e):!1}function ie(e){let t=G(e.myFuncBtn2);if(!t)return;let n=b(e),r=!!n&&s.isFavorite(n),i=T(e);Object.assign(t,{label:i?`无法收藏`:r?`取消收藏`:`收藏背景`,enabled:!i,mouseEnabled:!1,labelSize:r?15:16,phase:i?3:0}),K(t,`changeState`);
let a=G(e.myFuncBtnHit2);a&&(a.mouseEnabled=!i)}async function ae(e){if(qS(e.is169,e.isHor))return!1;if(!d())return yu(`请先打开皮肤做背景`,`warning`,4e3),!1;let t=b(e);if(!t)return yu(`当前皮肤信息不完整，暂时无法收藏`,`warning`,4e3),!1;if(s.isFavorite(t))return s.removeFavorite(t),
ie(e),yu(`已取消收藏背景`,`success`,3e3),!0;let n=await _(e);if(n?.videoUrl)return yu(`视频皮肤暂不支持做背景和收藏`,`warning`,4e3),!1;if(!n?.resource?.url)return yu(`当前皮肤未找到可收藏的背景资源`,`warning`,4e3),!1;let r=G(G(e.skinData)?.skinBaseVo);return s.addFavorite({id:t,
skinId:y(r),generalId:Number(G(e.skinData)?.generalID)||0,state:Number(e.juexingState??e.CurDynamicState??0)||0,name:String(r?.name||r?.skinname||`三国杀皮肤`),generalName:``,previewUrl:String(G(e.skinImg)?.skin||``),resource:n.resource,savedAt:Date.now()}),
ie(e),yu(`已收藏到“小抄背景”`,`success`,3e3),!0}function oe(e){let t=G(e.skinFrame),n=G(e.contentSprite);if(!t||!n)return!1;g(e);let r=Number(t.x)||0,i=Number(t.y)||0,a=Number(t.width)||360,o=Math.min(360,a),s=qS(e.is169,e.isHor),c=s?[e=>ne(e)]:[e=>ne(e),
re,ae],l=Math.floor((o-HS*(c.length-1))/c.length),u=r+a/2-o/2,d=T(e);for(let t=0;t<3;t+=1){let r=c[t],a=G(e[`myFuncBtn${t}`]),o=G(e[`myFuncBtnHit${t}`]);if(!r){a&&Object.assign(a,{visible:!1,enabled:!1}),o&&Object.assign(o,{visible:!1,mouseEnabled:!1});
continue}if(!a){if(a=te(),!a)return!1;K(a,`InitSkin`,`skinInfo_dynamicBtn_normal`,`skinInfo_dynamicBtn_over`,`skinInfo_dynamicBtn_down`,`skinInfo_dynamicBtn_disable`),e[`myFuncBtn${t}`]=a,typeof n.addDrawChild==`function`?K(n,`addDrawChild`,
a):K(n,`addChild`,a)}K(a,`removeEventListener`),Object.assign(a,{label:[`保存图片`,d?`保存视频`:`设为背景`,`收藏背景`][t],width:l,height:US,labelSize:16,labelFont:`fzltchjw`,labelPadding:`0,0,10,0`,labelColors:`#FCE1AA,#FCE1AA,#FCE1AA,#FCE1AA`,align:`center`,
valign:`middle`,visible:!0,mouseEnabled:!1,mouseChildren:!1,enabled:!0,phase:0}),K(a,`changeState`),K(a,`pos`,u+t*(l+HS),i-US);let s=ee(e,t,a,l,r);s&&(s.visible=!0,t===2&&d&&(s.mouseEnabled=!1))}return s||ie(e),!0}function O(){o.poll(()=>{let e=r.window(`SkinInfoWindow`);
return e&&!e.isShowWait?e:null},50,100).then(e=>{e&&!e.destroyed&&d()&&oe(e)})}function se(e,t,n=!1,r=!1){let i=G(G(e)?.graphics);if(!i)return;let a=r?`#FFF2C8`:`#F7D88A`;if(K(i,`clear`),K(i,`drawCircle`,14,14,13,r?`rgba(68,45,25,0.96)`:`rgba(39,29,22,0.88)`,
n?`#FFE28A`:`#B98B4C`,1),t===`background`){K(i,`drawRect`,6.5,7.5,15,12,null,a,1.5),K(i,`drawCircle`,17.5,11,1.5,a),K(i,`drawPoly`,8,18,[0,0,4.5,-5,7.5,-2.5,10.5,-6,12,0],a);return}K(i,`drawPoly`,14,14,[0,-8,2.4,-2.8,8,-2.3,3.8,1.4,5.1,7,0,4,-5.1,7,-3.8,1.4,-8,-2.3,-2.4,-2.8],
n?`#FFD866`:null,a,1.5)}function ce(e,t=!1){se(K(G(e.myFuncBtnPaperActions),`getChildAt`,1),`favorite`,!!e.__xcPaperFavoriteActive,t)}function le(e,t,n=`surface`){n===`actions`?e.__xcPaperActionsHovered=t:e.__xcPaperSurfaceHovered=t;let r=G(e.myFuncBtnPaperActions);
if(!r)return;let i=()=>{let t=G(e.skinData),n=d()&&!qS(t?.Is169,t?.IsBanner)&&!!(e.__xcPaperSurfaceHovered||e.__xcPaperActionsHovered);Object.assign(r,{visible:n,mouseEnabled:n})};t?i():o.later(i,0)}async function ue(e){if(!d())return yu(`请先打开皮肤做背景`,
`warning`,4e3),!1;try{let t=await v(e);return t?w(t.resource):!1}catch(e){return console.warn(`[皮肤做背景] 换肤窗口设背景失败:`,e),yu(`设背景失败，请重试`,`error`,4e3),!1}}async function de(e){if(!d())return yu(`请先打开皮肤做背景`,`warning`,4e3),!1;try{let t=await v(e);
if(!t?.resource.url)return!1;let n=S(e,t.state);if(!n)return!1;if(s.isFavorite(n))return s.removeFavorite(n),e.__xcPaperFavoriteActive=!1,ce(e),yu(`已取消收藏背景`,`success`,3e3),!0;let r=G(e.skinData);return s.addFavorite({id:n,skinId:String(r?.skinID??r?.SkinID??e.skinId??e.SkinID??``),
generalId:Number(r?.generalID??G(e.paperGeneralInfo)?.GeneralID)||0,state:t.state,name:String(r?.name||r?.skinname||`三国杀皮肤`),generalName:``,previewUrl:t.previewUrl,resource:t.resource,savedAt:Date.now()}),e.__xcPaperFavoriteActive=!0,ce(e),
yu(`已收藏到“小抄背景”`,`success`,3e3),!0}catch(e){return console.warn(`[皮肤做背景] 换肤窗口收藏失败:`,e),yu(`收藏背景失败，请重试`,`error`,4e3),!1}}function fe(e,t){K(t,`pos`,Number(e.x)+8,Number(e.y)+Number(e.height)-WS-8)}function pe(e,t,n){let r=l()?.Sprite;if(!r)return null;
let i=new r,a=u();i.name=t===`background`?`xcSetSkinBackgroundIcon`:`xcFavoriteSkinBackgroundIcon`,K(i,`size`,WS,WS),Object.assign(i,{mouseEnabled:!0,mouseChildren:!1,toolTip:t===`background`?`设为背景`:`收藏背景`});let o=()=>t===`favorite`&&!!e.__xcPaperFavoriteActive;
return K(i,`on`,a?.CLICK,e,t=>{K(t,`stopPropagation`),n(e)}),K(i,`on`,a?.MOUSE_OVER,i,()=>{le(e,!0,`actions`),se(i,t,o(),!0)}),K(i,`on`,a?.MOUSE_OUT,i,()=>{se(i,t,o(),!1),le(e,!1,`actions`)}),se(i,t),i}function me(e){let t=l()?.Sprite,n=pe(e,
`background`,ue),r=pe(e,`favorite`,de);if(!t||!n||!r)return null;let i=new t;i.name=`xcSkinBackgroundActions`,K(i,`size`,60,WS),i.zOrder=1e4,K(r,`pos`,32,0),K(i,`addChild`,n),K(i,`addChild`,r);let a=u();return K(i,`on`,a?.MOUSE_OVER,e,()=>le(e,!0,
`actions`)),K(i,`on`,a?.MOUSE_OUT,e,()=>le(e,!1,`actions`)),i}function he(e,t,n){e.paperGeneralInfo=n.generalInfo;let r=G(e.myFuncBtnPaperActions);if(!r){if(r=me(e),!r)return null;e.myFuncBtnPaperActions=r,K(t,`addChild`,r);let n=u(),i=()=>le(e,!0),
a=()=>le(e,!1);K(e,`on`,n?.MOUSE_OVER,e,i),K(e,`on`,n?.MOUSE_OUT,e,a),K(e.bg,`on`,n?.MOUSE_OVER,e,i),K(e.bg,`on`,n?.MOUSE_OUT,e,a)}let i=S(e,x(e));return e.__xcPaperFavoriteActive=!!i&&s.isFavorite(i),ce(e),fe(e,r),e.__xcPaperSurfaceHovered=!1,
e.__xcPaperActionsHovered=!1,le(e,!1),!e.__xcPaperRenderBound&&typeof e.render==`function`&&(a.wrap(e,`render`,e=>function(...t){let n=e.apply(this,t),r=G(this.myFuncBtnPaperActions);return r&&(fe(this,r),this.__xcPaperSurfaceHovered=!1,this.__xcPaperActionsHovered=!1,
le(this,!1)),n}),e.__xcPaperRenderBound=!0),r}function ge(e){let t=e?.__xcPaperButtons;t instanceof Set&&t.forEach(e=>Object.assign(e,{visible:!1,mouseEnabled:!1}))}async function _e(e){if(!d())return ge(G(e.selectView)),!1;let t=await o.poll(()=>{let t=G(e.selectView),
n=t?.itemList;return Array.isArray(n)&&n.length?t:null},20,100),n=G(t?.pannelContent)??t;if(!t||!n||!Array.isArray(t.itemList))return!1;let r=t.__xcPaperButtons instanceof Set?t.__xcPaperButtons:new Set;t.__xcPaperButtons=r;let i=new Set;for(let e of t.itemList){let a=G(e);
if(!a)continue;let o=he(a,n,t);o&&(i.add(o),r.add(o))}r.forEach(e=>{i.has(e)||Object.assign(e,{visible:!1,mouseEnabled:!1})});let s=G(t.pannel);return s&&!s.__xcPaperRefreshBound&&typeof s.refresh==`function`&&(a.wrap(s,`refresh`,t=>function(...n){let r=t.apply(this,
n);return queueMicrotask(()=>void _e(e)),r}),s.__xcPaperRefreshBound=!0),!0}function ve(){let e=r.window(`ChangeSkinWindow`);e&&_e(e)}function ye(){o.poll(()=>r.window(`ChangeSkinWindow`),20,100).then(e=>{e&&_e(e)})}function be(){let t=p();
tS(`paper-visibility`,{show:t,sceneName:r.scene()?.SceneName,inGame:!!r.gameScene(),allPaper:e.get(`skin.allPaper`),resource:c.resource,layerFound:!!r.layer(`BackgroundLayer`)}),c.setEnabled(t)}function xe(){be(),t.syncWallpaperMenu(),ve()}function Se(e,
n){if(!d())return;if(n===`decodeGameChooseAllGenNtf`){c.playAction(`ChuChang`);return}let r=t.selfSeatId();if(r!==null){if(n===`PubGsCUseCard`){Number(e.SeatID)===r&&Number(e.useType)===1&&Number(e.spellID)===1&&!e.isSend&&c.playAction(`GongJi`);
return}if(n===`GsClientBroadcastChatGoods`){let t=G(e.ProtoObj),n=t?.seatInfo;(Array.isArray(n)&&n.some(e=>Number(G(e)?.seatId)===r)||Number(t?.seatid)===r)&&c.playAction(`HuDong`)}}}let Ce={enabled:d,onOfficialWallpaperUsed(){c.hasBackground()&&c.clearBackground(!0),
f.refreshSelection()},attachMenu:e=>f.attach(e),detachMenu:e=>f.detach(e)},we=[e.subscribe(`skin.skinPaper`,xe),e.subscribe(`skin.allPaper`,be)];return oS(r,a,o,[`SkinInfoWindow`,`ChangeSkinWindow`],e=>{e===`SkinInfoWindow`?O():ye()}),sS(r,
a,o,be),o.poll(()=>r.dispatcher()&&r.scene(),1/0,1e3).then(e=>{e&&be()}),{menuExtension:Ce,filterMessage:Se,dispose(){we.splice(0).forEach(e=>e()),o.dispose(),f.dispose(),c.dispose(),a.restoreAll()}}}var YS=`::XC_DAILY_AUTO_CLAIM_RECORD`,XS=288e5,
ZS=864e5;function QS(e){return new Date(e+XS).toISOString().slice(0,10)}function $S(e){return Math.floor((e+XS)/ZS)}function eC(e,t,n=Date.now,r=console.warn){let i=new Map;function a(){return`${t()}${YS}`}function o(){let t=QS(n());try{let n=JSON.parse(e?.getItem(a())||`null`);
if(n?.day===t&&Array.isArray(n.keys))return{day:t,keys:n.keys.map(String)}}catch{}return{day:t,keys:[]}}function s(e){return!!e&&o().keys.includes(e)}function c(t){if(!t)return;let n=o();if(!n.keys.includes(t)){n.keys.push(t);try{e?.setItem(a(),
JSON.stringify(n))}catch{}}}function l(e){let t=n();return t-(i.get(e)??-1/0)<15e3?!1:(i.set(e,t),!0)}function u(e,t,n){try{return t()}catch(t){return r(`[自动领取] ${n}失败:`,e,t),!1}}return{claimedToday:s,markClaimedToday:c,acquire:l,onceToday(e,
t){return!e||s(e)||u(e,t,`每日领取`)===!1?!1:(c(e),!0)},throttled(e,t){return!e||!l(e)?!1:u(e,t,`领取`)!==!1}}}var tC=[161114,161115,161116],nC=new Set([97,98,126,127]),rC=new Set([`9020101`,`9030101`]),iC=/兑换|兑取|换取|消费|消耗|扣除|合成|盲盒/,aC=/累计实际扣除|扣除绑定元宝|扣除元宝|消耗绑定元宝|消耗元宝|累计消费|消费/g,
oC=30,sC=new Set([34,35]);function cC(e){let t=FC(e),n=FC(t?.baseVo);return t?._id??t?.id??t?.taskId??n?._id??n?.id}function lC(e){let t=FC(e),n=FC(t?.baseVo),r=n?.TaskRewardItem||n?.taskRewardItem||t?.TaskRewardItem||t?.taskRewardItem;return Array.isArray(r)?r:[]}function uC(e){let t=FC(e);
return t?.ItemID??t?.itemID??t?.itemId??t?.id??t?.ID??t?.goodsId??t?.GoodsID??t?.baseId??t?.BaseID}function dC(e,t){let n=FC(e);return String(t.goodsName(uC(e))||n?.itemName||n?.ItemName||n?.name||n?.Name||n?.goodsName||n?.GoodsName||``)}function fC(e,
t,n){return(Array.isArray(e)?e:e?[e]:[]).some(e=>n(uC(e),dC(e,t)))}function pC(e,t){return fC(e,t,(e,t)=>t.includes(`抵价券`))}function mC(e){return rC.has(String(e))}function hC(e,t){return fC(e,t,(e,t)=>t.includes(`欢乐豆`)||mC(e))}function gC(e,
t){return t.skipDiJiaQuan&&pC(e,t)||t.skipHuanLeDou&&hC(e,t)}function _C(e){try{let t=FC(e);if(Array.isArray(e))return e.filter(PC);if(Array.isArray(t?.datum))return t.datum.filter(PC);if(Array.isArray(t?._objDatum)&&t._objDatum.length)return t._objDatum.filter(PC);
let n=FC(t?._maps);if(n)return Object.values(n).flat().filter(PC)}catch{}return[]}function vC(e,t){return e.call(`GetServerTaskDataByTaskID`,t)||e.call(`GetAllTaskDataByTaskID`,t)}function yC(e,t){let n=new Map,r=e=>{let t=cC(e);t==null||n.has(String(t))||nC.has(Number(t))||n.set(String(t),
e)};for(let n of t.taskIds??[])r(vC(e,n));for(let t of[`allTasks`,`taskLocalConditionDict`,`typeTaskDict`])_C(e.manager[t]).forEach(r);return t.skipTavern||tC.forEach(t=>r(vC(e,t))),[...n.values()]}function bC(e){try{if(e.HasExpired===!0||e.hasExpired===!0)return!0}catch{}let t=FC(e.baseVo)??e;
try{if(t.EffectClientTime===!1||t.effectClientTime===!1)return!0}catch{}return!1}function xC(e){let t=FC(e.baseVo);return!!(t?.HaveSelectReward||t?.haveSelectReward||e.HaveSelectReward||e.haveSelectReward)}function SC(e){let t=FC(e.baseVo)??e,
n=Number(t.clientTaskType??t.ClientTaskType??e.clientTaskType??e.ClientTaskType??0);return sC.has(n)}function CC(e,t){return!SC(e)&&lC(e).some(e=>{let n=FC(e);return t.goodsHasPropItem(n?.ItemID??n?.itemID??n?.itemId??n?.id)})}function wC(e,
t,n){return lC(t).length>0?!1:n.taskIds?![...n.taskIds].some(t=>String(t)===String(e)):t.currentConfig===!1||t.hiddenOrLegacyTask===!0}function TC(e){return Array.isArray(e.taskConditions)?e.taskConditions.map(FC).filter(e=>e!==null):[]}function EC(e){let t=FC(e.baseVo)??e;
return[t._name,t.name,t.Name,t._desc,t.desc,t.Desc,e._name,e.name,e.Name,e._desc,e.desc,e.Desc,...TC(e).map(e=>e._desc||e.desc||e.Desc)].filter(Boolean).join(` `)}function DC(e){return/累计实际扣除|扣除元宝|扣除绑定元宝|消耗元宝|消耗绑定元宝|累计消费|消费/.test(e)}function OC(e){if(SC(e))return!1;
let t=EC(e),n=DC(t),r=t.replace(new RegExp(aC.source,`g`),``);if(iC.test(r)||TC(e).some(e=>Number(e._reqType??e.reqType??e.ReqType)===oC)&&!n)return!0;if(n)return!1;let i=FC(e.baseVo)??e,a=Number(i.maxComplete??i._maxComplete??e.maxComplete??e._maxComplete??0),
o=Number(e.CanRewardCount??e.canRewardCount??0);return Number.isFinite(a)&&a>1||Number.isFinite(o)&&o>1}function kC(e,t,n=cC(e)){let r=FC(e);if(!r)return!0;let i=Number(n);return Number.isFinite(i)&&tC.includes(i)&&t.skipTavern?!0:!r.CanAward||bC(r)||xC(r)||CC(r,
t)||wC(n,r,t)||OC(r)}function AC(e,t,n){try{if(!e.call(`GetNoGetTaskDataByTaskID`,t)||e.call(`GetServerTaskDataByTaskID`,t))return!1;let r=FC(n||e.call(`GetAllTaskDataByTaskID`,t));return!(r?.isFromServer||r?.IsFromServer)}catch{return!1}}function jC(e){let t=FC(e),
n=Number(t?.CanRewardCount??t?.canRewardCount??0);return Number.isFinite(n)&&n>0?Math.floor(n):0}function MC(e,t,n){return`${AC(e,t,n)&&e.has(`et`)?`taskAccept:`:`task:`}${String(t)}`}function NC(e,t,n,r){let i=e.call(`GetServerTaskDataByTaskID`,
t)||e.call(`GetAllTaskDataByTaskID`,t)||n;if(kC(i,r,t))return!1;if(AC(e,t,i)&&e.has(`et`))return e.call(`et`,t,t,0);if(!e.has(`RequestTaskAward`))return!1;let a=jC(i),o=e.call(`RequestTaskAward`,t,0,a);return o===!1&&a!==0?e.call(`RequestTaskAward`,
t,0,0):o}function PC(e){return e!=null}function FC(e){return typeof e==`object`&&e?e:null}var IC=600,LC=[1200,5e3,11e3,18e3,35e3],RC=[2,3],zC=[`SendClientPrivilegeCardInfoReq`,`SendClientPrivilegeInfoReq`,`ReqPrivilegeCardInfo`,`ReqClientPrivilegeCardInfo`,
`SendPrivilegeCardInfoReq`],BC=`kanshu:treeUsing`,VC=12130001,HC=[13360001,11578201],UC={id:8100101,type:3},WC=new Set([`道具过期提醒`,`不良游戏行为警告`]),GC=`系统未知好友`,KC=[71,72],qC=[[`festivalSign:sync:config`,`SendFestivalSignConfigReq`],[`festivalSign:sync:data`,
`SendClientFestivalSignDataReq`],[`festivalSign:sync:newConfig`,`SendNewFestivalSignConfigReq`],[`accumulatedSign:sync:config`,`SendAccumlateSignConfigReq`],[`accumulatedSign:sync:login`,`SendAccumlateLoginReq`]],JC=[`GetAccumlateAwdState`,
`GetAccumlateSignAwdState`,`GetAccumlateLoginAwdState`,`GetAccumulateAwdState`,`GetAccumSignAwdState`],YC=[`SendNewClientAccumlateSignGetRewardReq`,`SendClientAccumlateSignGetRewardReq`,`SendNewClientAccumlateLoginGetRewardReq`,`SendClientAccumlateLoginGetRewardReq`,
`SendAccumulateSignGetRewardReq`,`SendAccumSignGetRewardReq`];function XC(e){let{locator:t,windows:n,claims:r,tasks:i}=e,a=new WeakMap,o=!1,s=!1,c,l=e=>new Promise(t=>i.later(t,e)),u=()=>!i.disposed&&e.enabled();async function d(e,t,n){for(let r=0;
r<=t;r+=1){if(i.disposed)return null;try{let t=e();if(t)return t}catch{}r<t&&await l(n)}return null}function f(e){return t.manager(e)}function p(e,n,r){if(!e)return null;let i=e[r];if(typeof i==`function`)return i;let a=t.obfuscatedMethodName(e,
n,r),o=a?e[a]:null;return typeof o==`function`?o:null}function m(e,t,n,...r){let i=p(e,t,n);return i?i.apply(e,r):void 0}function h(e,t){return typeof e?.[t]==`function`}function g(e,t,...n){let r=e?.[t];return typeof r==`function`?r.apply(e,
n):void 0}function _(e){if(c===void 0){let e=n.get(`SgxFPreviewWindow`,null)?.getGoodConfig;c=typeof e==`function`?e:null,n.release(`SgxFPreviewWindow`)}if(!c)return null;try{let t=c(e);return typeof t==`object`&&t?t:null}catch{return null}}function v(t){let n=e.configData()?.goodsNames.get(Number(t));
if(n)return n;let r=_(t),i=q(r?.baseInfo);return String(i?.name||i?.Name||r?.name||r?.Name||``)}function y(){let t=e.options();return{skipTavern:t.skipTavern,skipDiJiaQuan:t.skipDiJiaQuan,skipHuanLeDou:t.skipHuanLeDou,taskIds:e.configData()?.taskIds??null,
goodsName:v,goodsHasPropItem:e=>!!_(e)?.CheckHasPropItem}}function b(e){return gC(e,y())}function x(e,t,n,r=5e3){return!t||typeof e.once!=`function`?(n(),Promise.resolve(!0)):new Promise((i,a)=>{let o={},s=!1,c=n=>{s||(s=!0,clearTimeout(u),
g(e,`off`,t,o,l),i(n))},l=()=>c(!0),u=setTimeout(()=>c(!1),r);g(e,`once`,t,o,l);try{n()}catch(n){clearTimeout(u),g(e,`off`,t,o,l),a(n)}})}function S(e,t){return q(e.constructor)?.[t]??e[t]}async function C(){let t=f(`TaskManager`);if(!u()||!t)return;
try{await Promise.resolve(g(t,`getTaskListFromServer`))}catch{}let n=e.options();if(!n.skipTavern&&h(t,`reqTaskProgressByIds`)&&r.throttled(`tavern:sync`,()=>g(t,`reqTaskProgressByIds`,[...tC])),await l(500),!u())return;let i={manager:t,has:e=>p(t,
`TaskManager`,e)!==null,call:(e,...n)=>m(t,`TaskManager`,e,...n)},a=y();for(let e of yC(i,a).filter(e=>!kC(e,a))){let t=cC(e);if(t==null)continue;let o=lC(e);if(n.skipDiJiaQuan&&pC(o,a)||n.skipHuanLeDou&&hC(o,a)||!r.acquire(MC(i,t,e)))continue;
let s=!1;try{s=NC(i,t,e,a)}catch(e){console.warn(`[自动领取] 任务领取失败:`,t,e);continue}s!==!1&&await l(600)}}async function w(e){return!h(e,`SendGetNewJDInfoReq`)||x(e,S(e,`NEW_JD_INFO_SUC`),()=>g(e,`SendGetNewJDInfoReq`))}async function T(e){if(!h(e,
`SendGetNewJDRewardReq`)||!await w(e)||!e.HasNewJDRewardRed)return!1;let t=Number(e.NewJDLevel);if(!Number.isInteger(t)||t<0)return!1;let i=t>=1,a=[],o=n.get(`NewJunDianViewCtrl`,null);if(!o)return!1;try{let t=q(g(o,`createSubView`,1));if(!Array.isArray(t?.curScoreAwards))return!1;
for(let n of t.curScoreAwards)if(Number(t.currentScore)>=Number(n.Point))for(let t of[!1,!0]){if(t&&!i)continue;let r=t?n.FfItemId:n.ItemId,o=t?e.NewJDHaveRewardList_bp:e.NewJDHaveRewardList;Number(r)>0&&Array.isArray(o)&&!o.includes(n.Id)&&(b([{itemId:r}])||a.push({id:n.Id,
isBp:t}))}}finally{n.release(`NewJunDianViewCtrl`)}let s=!1,c=S(e,`NEW_JD_REWARD_REP`);for(let{id:t,isBp:n}of a){let i=n?e.NewJDHaveRewardList_bp:e.NewJDHaveRewardList;if(!(Array.isArray(i)&&i.includes(t))&&r.acquire(`activity:newJD:${String(t)}:${String(n)}`))try{let r=await x(e,
c,()=>g(e,`SendGetNewJDRewardReq`,t,n,!1));if(s=!0,!r)break}catch(e){console.warn(`[自动领取] 节钺令领取失败:`,t,n,e);break}}return s&&await w(e),s}function E(e){let t=a.get(e);if(t)return t;let n=T(e).finally(()=>{a.get(e)===n&&a.delete(e)});return a.set(e,
n),n}function D(e,t){if(!t.canGetWYQJCard||!p(e,`ActivityManager`,`SendGetWyqjTiyanCardReq`))return;let i=[];try{let e=n.get(`WyqjSmallView`,{NeedLevel:0});i=(Array.isArray(e?.items)?e.items:[]).map(e=>Number(q(e?.vo)?.generalId||0)).filter(e=>e>0)}catch{i=[]}finally{n.release(`WyqjSmallView`)}i.length&&r.throttled(`activity:wyqj:card`,()=>m(e,
`ActivityManager`,`SendGetWyqjTiyanCardReq`,[i[0]]))}function ee(e){h(e,`SendReqInviteLoginCfg`)&&r.throttled(`activity:inviteLogin:sync:cfg`,()=>g(e,`SendReqInviteLoginCfg`)),h(e,`SendReqInviteLoginInfo`)&&r.throttled(`activity:inviteLogin:sync:info`,()=>g(e,
`SendReqInviteLoginInfo`)),h(e,`SendReqInviteLoginAssitRecords`)&&r.throttled(`activity:inviteLogin:sync:assistRecords`,()=>g(e,`SendReqInviteLoginAssitRecords`));let t=!1;try{t=h(e,`IsHaveInviteLoginRedPoint`)?!!g(e,`IsHaveInviteLoginRedPoint`):!!e.inviteNew_GetCoinnum}catch{t=!1}t&&h(e,
`SendReqInviteLoginGetCoin`)&&r.throttled(`activity:inviteLogin:getCoin`,()=>g(e,`SendReqInviteLoginGetCoin`))}function te(){let e=f(`GameGoodsManager`),t=new Set,n=[];for(let r of[`goodsList`,`goodsDict`,`goodsDic`,`GoodsDict`,`goodsMap`,`allGoods`])for(let i of rw(e?.[r]))t.has(i)||(t.add(i),
n.push(i));let r=n.filter(e=>mC(iw(e)));if(r.length)return r.reduce((e,t)=>{let n=Number(t.Count??t.count??t.Num??t.num??0);return e+(Number.isFinite(n)?n:0)},0)}function ne(t){if(e.options().skipHuanLeDou||!h(t,`SendClientGetWeekFreeBeanReq`))return;
let n=te(),i=q(t?.ddzData)??q(t?.DdzData),a=i?.FreeBeanCount??i?.freeBeanCount,o=Number(a);a!=null&&a!==``&&Number.isFinite(o)&&n!==void 0&&n<IC&&o>0&&r.throttled(`activity:lowBeanFree`,()=>g(t,`SendClientGetWeekFreeBeanReq`))}function re(e){let t=[],
n=q(e.vo),r=Number(n?.reward??n?.Reward??e.rewardLevels??e.reward??0),i=Number.isFinite(r)&&r>0?r:Math.max(aw(e.awardsLow),aw(e.awardsHigh)),a=(n,r)=>{if(h(e,`HasGetReward`)&&g(e,`HasGetReward`,n,r))return;let i=e[r?`awardsHigh`:`awardsLow`];
if(Array.isArray(i)&&i[n])return;let a=q(g(e,`GetRewardVO`,n,r)),o=[a?.Awards,a?.awards,a?.reward,a?.rewards].find(Array.isArray);o?t.push(...o):(a?.ItemID||a?.itemId||a?.goodsId)&&t.push(a)};for(let e=1;e<=i;e+=1)a(e,!1),a(e,!0);return t}function ie(e){if(!h(e,
`SendSetOutRewardAllReq`))return;h(e,`SendAllSetOutGidtInfoReq`)&&r.throttled(`newFuLi:setOut:sync:info`,()=>g(e,`SendAllSetOutGidtInfoReq`)),h(e,`SendAllTaskInfoReq`)&&r.throttled(`newFuLi:setOut:sync:task`,()=>g(e,`SendAllTaskInfoReq`));let t=new Map;
for(let n of _C(e.passDataDic)){let e=q(n),r=q(e?.vo)?.id??e?.passId??e?.PassID??e?.id??e?.ID;if(r==null||r===``)continue;let i=Number(r),a=Number.isFinite(i)&&String(r).trim()!==``?i:r;t.has(String(a))||t.set(String(a),{id:a,data:n})}t.forEach(({id:t,
data:n})=>{let i=q(g(e,`GetPassData`,t))??q(n);if(!i||!h(i,`HasCanGetReward`)||!g(i,`HasCanGetReward`))return;let a=re(i);a.length&&b(a)||r.throttled(`newFuLi:setOut:${String(t)}`,()=>g(e,`SendSetOutRewardAllReq`,t))})}async function ae(){let e=f(`ActivityManager`),
t=f(`TaskManager`);if(!u()||!e||!t||(g(e,`SendDDZTLLInfoReq`),g(e,`SendGetJDInfoReq`),await E(e),!u()))return;D(e,t),ee(e),ne(f(`ActivityGameDataManager`)),e.HasDDZTLLRewardRed&&!b(e.tllLastCanRewardInfo)&&r.throttled(`activity:DDZTLL:0`,()=>g(e,
`SendDDZTLLAwardReq`,0,!1,!0)),e.HasJDRewardRed&&h(e,`ReqDrawAllJDRwd`)&&!b(e.JDShowRewardList)&&r.throttled(`activity:JD:all`,()=>g(e,`ReqDrawAllJDRwd`));let n=Math.min(Math.floor(Number(t.jdTaskRewardNum??t.JdTaskRewardNum??0)/3),3);for(let e=1;
e<=n;e+=1)g(t,`HasRewardQuest`,e)||r.throttled(`task:JDCalcQuest:${e}`,()=>g(t,`SendGetJdCalcQuestRewardReq`,e));let i=f(`NewFuLiManager`);i&&ie(i)}async function oe(){if(!(o||!u()||e.options().skipMail)){o=!0;try{let e=await d(()=>f(`MailManager`),20,500);
if(!e)return;for(let t of[`GetSystemMailList`,`SendClientGetMailListReq`])if(h(e,t))try{g(e,t),await l(1500);break}catch(e){console.warn(`[自动领取] 同步邮件列表失败:`,e)}await d(()=>Array.isArray(e.systemMailList),20,500);let t=e.systemMailList;if(!Array.isArray(t))return;
let r=t.filter(e=>e?.mid&&e.hasAttachMent&&!e.Geted);if(!r.length)return;let i=r.some(e=>Number(e.AttachmentType)===1)?n.opened(`MailWindow`)??n.get(`MailWindow`):null;i&&!n.opened(`MailWindow`)&&n.release(`MailWindow`,3e4);let a=q(i?.mailContentWindow),
o=q(i?.manager)??e,s=f(`ActivityManager`);h(s,`AskRechargeInfoAgain`)&&g(s,`AskRechargeInfoAgain`),await l(500);for(let e of r){if(!u())return;let t=e.mid;try{if(WC.has(String(e.title))||!e.hasAttachMent)continue;!e.read&&h(o,`ReadMail`)&&(g(o,
`ReadMail`,t),await l(300));let n=Number(e.AttachmentType),r=g(q(e.attachment),`getStringKey`,`key`),i=Array.isArray(r)?r[0]??``:``,s=e.fromUserName&&e.fromUserName!==GC?e.fromUserName:``;if(n===1){if(!a)continue;let t=s?2:0;g(a,`ChangeWindow`,
t,e),await l(300);let n=q(q(a.winArr)?.[t]);if(!n||!h(n,`getBtnClick`))continue;g(n,`getBtnClick`),g(n,`Close`),g(a,`close`)}else n===2&&h(o,`SendClientDbsGetgmawardReq`)&&(g(o,`SendClientDbsGetgmawardReq`,i,t,s),await l(800));await l(500)}catch(n){console.warn(`[自动领取] 单封邮件领取失败:`,
t,e?.title,n)}}}finally{o=!1}}}function O(e){let t=!1;for(let n of zC)if(h(e,n))try{g(e,n),t=!0;break}catch{}if(h(e,`ReqJbpInfo`))try{g(e,`ReqJbpInfo`),t=!0}catch{}return t}function se(){let e=f(`BlessManager`);if(!e)return!1;let t=e.FreeBlessItemEnough;
if(typeof t==`function`)try{return!!t.call(e)}catch{return!1}return!!t}function ce(e){let t=q(e);if(!t||Number(t.Status)!==1)return 0;let n=Number(t.Level);return Number.isFinite(n)?n*100+VC:0}function le(e){try{g(e,`SaveKanShuPhpData`)}catch{}try{g(e,
`ReqJbpInfo`)}catch{}}function ue(e){let t=q(e.constructor)?.KANSHU_GET_AWARD;if(!t||!h(e,`once`))return null;let n={},r=()=>le(e);return g(e,`once`,t,n,r),()=>g(e,`off`,t,n,r)}async function de(e){let t=ce(e.JbpUserData);if(t&&r.claimedToday(`kanshu:${t}`))return le(e),!1;
if(!t){let t=Number(q(e.JbpUserData)?.Status);if(t!==0)return t===2&&le(e),!1;if(!r.claimedToday(BC)){if(!h(e,`ReqJbpTreeUsing`))return!1;try{if(g(e,`ReqJbpTreeUsing`)===!1)return!1;r.markClaimedToday(BC)}catch(e){return console.warn(`[自动领取] 砍树请求失败:`,
e),!1}}await d(()=>ce(e.JbpUserData)||(g(e,`ReqJbpInfo`),ce(e.JbpUserData)||!1),12,500)}let n=ce(e.JbpUserData);if(!n||r.claimedToday(`kanshu:${n}`)||!se())return!1;let i=null;try{let t=f(`GameShopManager`);if(!p(t,`GameShopManager`,`BuySingleItem`))return!1;
let a=m(t,`GameShopManager`,`BuySingleItem`,n);if(a===!1||typeof a==`number`&&a!==0)return!1;let o=f(`GameGoodsManager`);return await d(()=>h(o,`GetGoodsByBaseID`)&&g(o,`GetGoodsByBaseID`,n),20,500)?h(e,`ReqJbpAwd`)?(i=ue(e),g(e,`ReqJbpAwd`,
n)===!1?(i?.(),!1):(r.markClaimedToday(`kanshu:${n}`),i||le(e),!0)):!1:(console.warn(`[自动领取] 浇树道具未到账，稍后重试:`,n),!1)}catch(e){return i?.(),console.warn(`[自动领取] 浇树领取失败:`,e),!1}}function fe(e){for(let t of RC){let n=q(g(e,`GetCardDataByType`,t));
n?.bActive&&n.bReward&&r.onceToday(`yueka:reward:${t}:${String(n.rewardDays)}`,()=>g(e,`SendClientPrivilegeRewardReq`,n.rewardDays,t)),n?.bActive&&t===3&&i.later(()=>{let i=g(n,`AddAwardsCanAwardList`);Array.isArray(i)&&i.forEach((i,a)=>{if(!i)return;
let o=Number(n.days)+a+1;r.onceToday(`yueka:addAward:${t}:${o}`,()=>g(e,`SendClientPrivilegeRewardReq`,o,t))})},5e3),g(e,`CanShowPrivilegeDaliyReward`,t)&&r.onceToday(`yueka:daily:${t}`,()=>g(e,`PrivilegeCardDaliyRewardReq`,t))}}async function pe(){let e=f(`WelfareManger`);
u()&&e&&(O(e),await l(800),u()&&(await de(e),u()&&fe(e)))}async function me(){if(!u())return;let e=n.get(`GuildDrumWindow`);if(!e)return;g(e,`initDrums`),g(e,`updateItems`),await l(1e3);let t=(Array.isArray(e.itemList)?e.itemList:[]).find(e=>e?.leftTime),
r=Math.max(1,Number(t?.leftTime)||0),a=()=>{if(!u()){n.release(`GuildDrumWindow`,500);return}g(t??null,`btnClick`),--r,r<=0?n.release(`GuildDrumWindow`,500):i.later(a,300)};i.later(a,300)}function he(e){let t=_C(e.FestivalSignConfigDic),n=_C(e.FestivalSignDataDic);
t.forEach((t,i)=>{let a=ZC(t);if(a==null)return;let o=q(n.find(e=>String(ZC(e))===String(a))??n[i]);if(o?.isActive===!1)return;let s=Number(o?.signDays||0);if(!s)return;let c=o;if(h(e,`GetFestivalSignData`))try{c=q(g(e,`GetFestivalSignData`,
a))??o}catch{c=o}let l=new Set((Array.isArray(c?.awardData)?c.awardData:[]).map(Number).filter(e=>Number.isFinite(e)&&e>0)),u=q(t)?.awards;(Array.isArray(u)?u:[]).forEach(t=>{let n=Number(q(t)?.days??q(t)?.day);!Number.isFinite(n)||n<=0||n>s||l.has(n)||b(t)||r.onceToday(`festivalSign:old:${String(a)}:${n}`,()=>h(e,
`SendClientFestivalSignGetRewardReq`)?g(e,`SendClientFestivalSignGetRewardReq`,a,n):!1)})})}function ge(e){let t=new Map;_C(e.NewFestivalSignDataDic).forEach(e=>{let n=ZC(e),r=q(e);n!=null&&r&&t.set(String(n),r)}),KC.forEach(n=>{let r=q(g(e,
`GetNewFestivalSignData`,n));r&&t.set(String(ZC(r)??n),r)}),t.forEach(t=>{let n=ZC(t);(Array.isArray(t.awards)?t.awards:[]).forEach(t=>{let i=q(t)?.date;i&&h(e,`GetFesSignAwdState`)&&Number(g(e,`GetFesSignAwdState`,t))===2&&(b(t)||r.onceToday(`festivalSign:new:${String(n)}:${String(i)}`,()=>h(e,
`SendNewClientFestivalSignGetRewardReq`)?g(e,`SendNewClientFestivalSignGetRewardReq`,n,i):!1))})})}function _e(e,t,n,r,i,a){let o;for(let i of JC)if(h(e,i))for(let a of[[t,n],[t,r],[n]])try{let t=Number(g(e,i,...a));if(t===2)return 2;Number.isFinite(t)&&t>0&&o===void 0&&(o=t)}catch{}let s=q(n);
if(s?.stat===!0||s?.Stat===!0||s?.claimed===!0||s?.Claimed===!0||s?.hasReward===!0||s?.HasReward===!0)return 1;let c=q(a),l=[c?.awardStates,c?.AwardStates,c?.awardsState,c?.rewardStates,c?.states,c?.awardData,c?.AwardData].find(Array.isArray)?.[i],
u=Number(l);if(u===2)return 2;if(Number.isFinite(u)&&u>0||l!=null)return u;if(o!==void 0)return o;if(tw(a)>=r&&!nw(a).has(r)||s?.CanAward||s?.canAward||s?.CanGet||s?.canGet||s?.CanReceive||s?.canReceive)return 2}function ve(e){let t=[e.AccumlateLoginDic,
e.AccumlateSignDataDic,e.AccumlateLoginDataDic,e.AccumulateLoginDic,e.AccumulateSignDataDic,e.AccumulateLoginDataDic,e.AccumSignDataDic,e.AccumLoginDataDic].flatMap(_C),n=new Map;t.forEach(e=>{let t=ZC(e);t!=null&&n.set(String(t),e)}),QC(e.AccumlateSignConfigDic,
e.AccumlateLoginConfigDic,e.AccumulateSignConfigDic,e.AccumulateLoginConfigDic,e.AccumSignConfigDic,e.AccumLoginConfigDic,...t).forEach((i,a)=>{let o=ZC(i);if(o==null)return;let s=n.get(String(o))??t[a]??i;($C(i).length?$C(i):$C(s)).forEach((t,
n)=>{let i=ew(t,n+1);!Number.isFinite(i)||i<=0||_e(e,o,t,i,n,s)!==2||b(t)||r.onceToday(`accumulatedSign:${String(o)}:${i}`,()=>{for(let n of YC)if(h(e,n))return g(e,n,o,i,t);return!1})})})}async function ye(e){qC.forEach(([t,n])=>{h(e,n)&&r.throttled(t,()=>g(e,
n))}),await l(800),u()&&(he(e),ge(e),ve(e))}function be(e,t){let n=String(e??``);return!t||n===`9020101`||!n.startsWith(`90`)}function xe(e,t){return q(e.baseData)?.ID??q(e.data)?.ID??q(e.vo)?.ID??e.id??t}function Se(e,t){let n=Number(e.days??q(e.baseData)?.days??q(e.data)?.days??q(e.vo)?.days);
return Number.isFinite(n)&&n>0?n:xe(e,t)}function Ce(e,t,n){return h(e,`OnSignClick`)?r.onceToday(`${t}:${String(n)}`,()=>g(e,`OnSignClick`)):!1}async function we(e,t,n){let r=!1,i=Array.isArray(e.itemList)?e.itemList:[];for(let a=0;a<i.length;
a+=1){let o=i[a],s=xe(o,a);if(!be(s,t))continue;let c=Number(o.type);if(n&&c===1&&Number(e.signState)===2){if(!Ce(o,`sign:checkIn`,s))continue;r=!0,await l(500)}else if(c===1&&Number(e.signState)!==2||c===2||c===3){if(!Ce(o,`sign:itemReward`,
s))continue;await l(500)}}let a=Array.isArray(e.totalItemList)?e.totalItemList:[];for(let e=0;e<a.length;e+=1){let t=a[e],n=Number(t.type);if(n!==2&&n!==3)continue;let r=q(t.success);r?.visible||r?._visible||Ce(t,`sign:totalReward`,Se(t,e))&&await l(500)}return r}function Te(e){let t=n.get(`NormalShopBuyWindow`);
return!t||!h(t,`enterWindow`)||!h(t,`confirmBuy`)?(n.release(`NormalShopBuyWindow`),!1):(g(t,`enterWindow`,e,1),g(t,`confirmBuy`),n.release(`NormalShopBuyWindow`),!0)}async function Ee(t){if(await l(1e4),u())try{let i=n.get(`DailySignNewView`);
i&&(n.release(`DailySignNewView`,1e4),await we(i,t,!0)&&(await l(1500),await we(i,t,!1)));let a=f(`GameShopManager`);for(let e of HC){let t=_(e);t&&h(a,`CheckGoodsLimit`)&&g(a,`CheckGoodsLimit`,t)===!1&&r.onceToday(`shop:free:${e}`,()=>Te(e))}let o=f(`OfficerManager`);
g(o,`CanGetOfficerWeekReward`)&&r.onceToday(`officer:week`,()=>g(o,`sendGetWeekReward`)),g(o,`CanGetOfficerDayReward`)&&!e.options().skipHuanLeDou&&r.onceToday(`officer:day`,()=>g(o,`sendGetDayReward`))}catch(e){console.error(`[自动领取] 签到失败:`,
e)}}async function De(){let t=f(`ActivityManager`);if(!u()||!t||(await ye(t),!u()))return;Ee(e.options().skipSignTrialCard);let n=f(`GameGeneralManager`);if(!n)return;for(let t of e.configData()?.seriesList??[])g(n,`LampRewardCanAward`,t)&&!g(n,
`LampHasReward`,t)&&r.onceToday(`generalLamp:${t}`,()=>g(n,`LampRewardReq`,t));let i=q(q(n.atlasGeneralDict)?._maps)??{};Object.entries(i).filter(([,e])=>e).map(([e])=>Number(e)).forEach(e=>r.onceToday(`generalAtlas:${e}`,()=>g(n,`GeneralAtlasRewardReq`,
e)))}function Oe(){if(!u()||e.options().skipDailyGeneralBag)return;let t=n.get(`GeneralOpenWindow`);if(!t)return;let a=q(q(q(t.newView)?.freeTimeTxt))?._text,o=((typeof a==`string`?a.split(`:`).map(Number):[]).reduce((e,t,n)=>e+t*60**(2-n),0)||0)*1e3;
o?s||(s=!0,i.later(()=>{s=!1,Oe()},o)):r.onceToday(`wujiang:bag:${UC.id}:${UC.type}`,()=>g(t,`onNewOpenBag`,UC.id,UC.type))&&n.closeOpened(`GeneralOpenResultWindow`,8,500),n.release(`GeneralOpenWindow`,5e3)}function ke(e,t){t().catch(t=>console.warn(`[自动领取] ${e}失败:`,
t))}return{runPass(){u()&&(ke(`任务`,C),ke(`活动`,ae),ke(`邮件`,oe),ke(`福利`,pe),ke(`公会三敲`,me),ke(`签到`,De))},claimDailyGeneralBag(){try{Oe()}catch(e){console.warn(`[自动领取] 武将包失败:`,e)}},scheduleLowBeanFree(e){u()&&LC.forEach(e=>{i.later(()=>{u()&&ne(f(`ActivityGameDataManager`))},
e)})}}}function ZC(e){let t=q(e);return t?.id??t?.ID??t?.activityId??t?.ActivityID??t?.activity_id??t?.signId??t?.SignID}function QC(...e){let t=new Map,n=e=>{let n=ZC(e);n!=null&&!t.has(String(n))&&t.set(String(n),e)};return e.forEach(e=>{n(e),
_C(e).forEach(n)}),[...t.values()]}function $C(e){let t=q(e);return[t?.awards,t?.Awards,t?.awardList,t?.AwardList,t?.rewardList,t?.RewardList,t?.rewards,t?.Rewards].find(Array.isArray)??[]}function ew(e,t){let n=q(e),r=Number(n?.day??n?.Day??n?.days??n?.Days??n?.loginDay??n?.LoginDay??n?.loginDays??n?.LoginDays??n?.logindays??n?.needDay??n?.needDays??n?.needLoginDays??n?.requiredLoginDays??t);
return Number.isFinite(r)?r:t}function tw(e){if(typeof e==`number`)return Number.isFinite(e)?e:0;let t=q(e),n=Number(t?.signDays??t?.SignDays??t?.loginDays??t?.LoginDays??t?.logindays??t?.days??t?.Days??t?.currentDay??t?.CurrentDay??t?.progress??t?.Progress??0);
return Number.isFinite(n)?n:0}function nw(e){let t=q(e),n=[t?.claimedDays,t?.ClaimedDays,t?.claimedRewardDays,t?.ClaimedRewardDays,t?.getRewardDays,t?.GetRewardDays].find(Array.isArray)??[];return new Set(n.map(Number).filter(e=>Number.isFinite(e)&&e>0))}function rw(e){let t=q(e);
if(!e)return[];let n=e=>e.map(q).filter(e=>e!==null);return Array.isArray(e)?n(e):Array.isArray(t?.datum)?n(t.datum):Array.isArray(t?._objDatum)?n(t._objDatum):q(t?._maps)?n(Object.values(t._maps)):q(t?._map)?n(Object.values(t._map)):[]}function iw(e){let t=q(e.baseInfo);
return e.BaseID??e.baseID??e.baseId??e.GoodsBaseID??e.goodsBaseID??e.goodsBaseId??t?.ID??t?.id}function aw(e){return Array.isArray(e)?e.length:0}function q(e){return typeof e==`object`&&e?e:null}function ow(e,t,n){let r=new Map,i=new Map,a=0;
function o(e){let t=r.get(e);if(r.delete(e),i.delete(e),t&&!t.parent)try{typeof t.Close==`function`?t.Close():typeof t.destroy==`function`&&t.destroy()}catch(t){console.warn(`[自动领取] 释放窗口失败:`,e,t)}}function s(t,n){let a=r.get(t);if(a&&!a.destroyed)return i.delete(t),
a;r.delete(t);let o=null;try{let r=(e.Laya?.ClassUtils)?.getInstance?.(t,n);o=typeof r==`object`&&r?r:null}catch{return null}if(!o)return null;if(typeof o.Init==`function`&&n!==null)try{o.Init()}catch(e){console.warn(`[自动领取] 窗口初始化失败:`,t,e)}return r.set(t,
o),o}function c(e,t=0){if(!r.has(e))return;if(t<=0){o(e);return}let s=++a;i.set(e,s),n.later(()=>{i.get(e)===s&&o(e)},t)}function l(e){return t.window(e)}function u(e,r=0,i=500){let a=!1,o=new Set,s=t.window(e);return s&&o.add(s),t.findWindows(e).forEach(e=>o.add(e)),
o.forEach(t=>{if(!t.destroyed)try{if(typeof t.Close==`function`)t.Close();else if(typeof t.close==`function`)t.close();else if(typeof t.destroy==`function`)t.destroy(!0);else return;a=!0}catch(t){console.warn(`[自动领取] 关闭窗口失败:`,e,t)}}),r>0&&n.later(()=>u(e,
r-1,i),i),a}return{get:s,release:c,opened:l,closeOpened:u,dispose(){[...r.keys()].forEach(o)}}}var sw=[1e3,5e3,2e4],cw=2e4,lw=3e4,uw=30,dw=1e3,fw=2e3,pw=6e4,mw=`XC::lastTaskDate`;function hw(e,t,n={}){let r=n.globalObject??window,i=n.locator??Sh(r),
a=n.storage??(typeof localStorage>`u`?void 0:localStorage),o=n.now??Date.now,s=aS(),c=yx(),l=ow(r,i,s),u=eC(a,()=>iS(a),o),d=new Set,f=[],p={phase:`idle`,lastReason:``,lastStartedAt:0,lastFinishedAt:0,message:`未运行`},m=!1,h=0,g=null,_=0,v=S(),
y=XC({locator:i,windows:l,claims:u,tasks:s,enabled:()=>e.get(Xs),options:b,configData:()=>n.cardConfigSource?.getAutoTaskData()??null});function b(){return{skipTavern:e.get(`autoTask.skipTavern`),skipMail:e.get(`autoTask.skipMail`),skipDailyGeneralBag:e.get(`autoTask.skipDailyGeneralBag`),
skipSignTrialCard:e.get(`autoTask.skipSignTrialCard`),skipDiJiaQuan:e.get(`autoTask.skipDiJiaQuan`),skipHuanLeDou:e.get(`autoTask.skipHuanLeDou`)}}function x(e){p={...p,...e},d.forEach(e=>{try{e(p)}catch(e){console.warn(`[自动领取] 状态订阅失败:`,e)}})}function S(){try{let e=a?.getItem(mw),
t=e==null?NaN:Number(JSON.parse(e));return Number.isFinite(t)?t:-1}catch{return-1}}function C(e){try{a?.setItem(mw,JSON.stringify(e))}catch{}}function w(){return!!(i.dispatcher()&&i.manager(`TaskManager`)&&i.manager(`ActivityManager`)&&i.manager(`NewFuLiManager`))}function T(e,
t){if(!e)return t;let n=e.daily||t.daily;return{reason:[e.reason,t.reason].filter(Boolean).join(`+`)||`auto`,postGame:!!(e.postGame&&t.postGame&&!n),daily:n,login:e.login||t.login}}function E(e){return{reason:e,postGame:e===`postGame`,daily:!0,
login:e===`login`}}function D(t){g=T(g,t);let n=Math.max(1e3,h-o()+500);s.later(()=>{let t=g;g=null,t&&e.get(`autoTask.enabled`)&&ee(t)},n)}function ee(t){if(!e.get(`autoTask.enabled`)||s.disposed)return;if(m){D(t);return}if(!w()){x({phase:`waiting`,
lastReason:t.reason,message:`等待管理器就绪`});return}let n=sw[sw.length-1]+cw;m=!0,h=o()+n,x({phase:`running`,lastReason:t.reason,lastStartedAt:o(),message:`运行中（${t.reason}）`}),s.later(()=>{m=!1,h=0,x({phase:`idle`,lastFinishedAt:o(),message:g?`排队等待下一轮`:`本轮结束`})},
n),e.get(`autoTask.skipDailyGeneralBag`)||y.claimDailyGeneralBag(),sw.forEach(t=>{s.later(()=>{e.get(`autoTask.enabled`)&&!s.disposed&&y.runPass()},t)})}function te(t=`auto`,n=!1){if(!e.get(`autoTask.enabled`))return!1;let r=E(t);if(t===`postGame`){let e=o();
if(_&&e-_<lw)return!1;_=e}return!n&&m?!1:(x({phase:`waiting`,lastReason:t,message:`已调度（${t}）`}),s.later(async()=>{e.get(`autoTask.enabled`)&&!s.disposed&&(await s.poll(()=>w()||null,uw,dw)&&e.get(`autoTask.enabled`)?ee(r):s.disposed||x({phase:`idle`,
message:`管理器未就绪，本轮取消`}))},fw),!0)}function ne(t){let n=$S(o());n!==v&&(v=n,C(n),e.get(`autoTask.enabled`)&&te(t,!0))}function re(){if(!e.get(`autoTask.enabled`))return;let t=$S(o());v===t?te(`postGame`,!0):(v=t,C(t),te(`gameEnd`,!0))}s.poll(()=>w()||null,1/0,1e3).then(t=>{t&&e.get(`autoTask.enabled`)&&te(`login`,!0)}),
f.push(t.subscribe(e=>{e.type===`game-ended`&&re()})),$s.forEach(t=>{f.push(e.subscribe(t,({value:n,previousValue:r})=>{t===`autoTask.enabled`&&n===!0&&r!==!0&&te(`switch`,!0),t===`autoTask.skipTavern`&&n===!1&&e.get(`autoTask.enabled`)&&te(`tavern`,!0)}))});
let ie=setInterval(()=>ne(`heartbeat`),pw);return f.push(()=>clearInterval(ie)),sS(i,c,s,()=>{e.get(`autoTask.enabled`)&&y.scheduleLowBeanFree(`scene`)}),{schedule:te,getStatus:()=>p,subscribe(e){return d.add(e),()=>d.delete(e)},dispose(){f.forEach(e=>e()),
f.length=0,d.clear(),l.dispose(),c.restoreAll(),s.dispose(),m=!1,g=null,x({phase:`idle`,message:`已卸载`})}}}function gw(e){return{get:()=>e.getRogueMapData(),ready:()=>Og(e.getRogueMapData()),dispose(){}}}var J=Object.freeze({panelWidth:190,labelPad:6,
topSpacer:6,cornerRadius:6,backgroundAlpha:.7,layoutGap:4,viewportPad:4,cityDefaultWidth:250,cityDefaultHeight:100,pollMs:700,cityZOrder:999,leaderZOrder:998,dashLength:7,dashGap:5,leaderLineWidth:3,leaderColor:`#e56666`,titleColor:`#ff7043`,
titleSize:17,generalColor:`#f2de9c`,generalWarningColor:`rgb(240, 65, 85)`,generalSize:17,bodyColor:`#f2de9c`,bodySize:15,detailColor:`#c9b98f`,detailSize:14,panelFill:`#241f18`,panelStroke:`rgba(242,222,156,0.45)`,dividerColor:`rgba(242,222,156,0.35)`,
difficultyRaidGate:100}),_w=Object.freeze({difficulty:0,seasonId:1,accday:0,passChapter:0,chapterId:0,seedItem:Object.freeze([])}),vw=Object.freeze({1:{key:`draw`,seed:5},2:{key:`exshatimes`,diffKey:`skill`,seed:7},3:{key:`getarmor`,seed:3},4:{key:`hp`,
seed:1},5:{key:`cardnum`,seed:4},6:{key:`armor`,seed:2}}),yw=[`att_ZD`,`att_KN`,`att_EM`,`att_LY`];function bw(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function xw(e){return Array.isArray(e)?e:[]}function Sw(e,t=0){let n=Number(e);
return Number.isFinite(n)?n:t}function Cw(e){return e>=1?Math.floor(e):e>=0?Math.round(e):Math.floor(e)}function ww(e,t){return e>=101&&e<=109?`${t}1`:e>=111&&e<=119?`${t}2`:e>=121&&e<=129?`${t}3`:null}function Tw(e,t,n){let r={};for(let n=0;
n<t&&n<yw.length;n+=1)for(let t of String(e[yw[n]]??``).split(`;`)){let[e,n]=t.split(`,`);e&&n!=null&&(r[e]=(r[e]||0)+Sw(n))}if(n>100)for(let t of[`att_JJ`]){let i=ww(n,t);if(i)for(let t of String(e[i]??``).split(`;`)){let[e,i,a]=t.split(`,
`);!i||a==null||Sw(e)>n||(r[i]=(r[i]||0)+Sw(a))}}return r}function Ew(e,t,n){let r=vw[t]?.seed;if(r==null)return e;let i=e;for(let e of n){let t=bw(e);if(!t||Number(t.itemType)!==1||Number(t.attrType)!==r||Number(t.goal)!==1&&Number(t.goal)!==3)continue;
let n=Sw(t.value??t.num??t.val);i+=t.sub?-n:n}return i}function Dw(e,t,n,r){let i=vw[t],a=i.key,o=`diffKey`in i?i.diffKey:a,s=Sw(n.growRow?.[a])+Sw(n.diffRow?.[o]??n.diffRow?.[a])+Sw(n.diffGrowRow?.[a]),c=r?.[a]==null?1:Sw(r[a])/100;s=Cw(s*c);
let l=Tw(e,n.bigDif,n.difficulty),u=Sw(e[a])+s+Sw(l[a]);return u=Math.max(+(t===4),u),u=Ew(u,t,n.seedItem),{value:u,add:s,extra:l}}function Ow(e,t){let n=Sw(t.difficulty),r=String(t.seasonId||e.RcurSeason||1),i=e.Rdiff[r]??{},a=bw(i[String(n)])??bw(i[n])??null,
o=Math.max(1,Sw(a?.bdif,1)),s=Sw(t.passChapter)+1,c=Sw(t.accday),l=bw(e.Rgrow[`${c}_${n}`])??null,u=bw(e.RdiffGrow[`${o}_${s}`])??null,d=e.RchapBoss[r]??{};return{difficulty:n,chapter:s,bigDif:o,growRow:l,diffRow:a,diffGrowRow:u,bossLocation:Sw(d[String(t.chapterId)]??d[t.chapterId]),
seedItem:xw(t.seedItem)}}function kw(e,t,n,r){let i=xw(t.generals??t.baseGenerals).filter(e=>{let t=bw(e);return!t||Number(t.hide)===1?!1:Sw(t.startChapter)<=r.chapter}),a=n!=null&&r.bossLocation===Number(n)?1:Number(t.isSingle??t.issingle)===1?2:3;
return bw(e.RnumGrow[`${a}_${i.length}`])??null}function Aw(e,t,n,r,i){let a=Ow(t,n),o=kw(t,r,i,a),s=Dw(e,4,a,o),c=Math.max(1,Sw(e.maxhp)+s.add+Sw(s.extra.maxhp)),l=Dw(e,5,a,o).value,u=Dw(e,1,a,o).value,d=1+Dw(e,2,a,o).value,f=Dw(e,6,a,o).value,
p=Dw(e,3,a,o).value,m=[`${s.value}${c===s.value?``:`/${c}`}血`,`${l}牌`,`摸${u}`,`杀${d}`];return f&&m.push(`甲${f}${p?`+${p}`:``}`),m.join(` `)}function jw(e){let t=String(e.generalname??``);return e.start?`[先手]${t}`:t}function Mw(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function Nw(e,
t){let n=e.Radventure[String(t)];if(n)return String(n);let r=e.Rfight[String(t)];return String(r?.name||r?.text||`未知事件`)}function Pw(e,t){let n=String(t),r=e.RadventureChoices[n];if(Array.isArray(r)&&r.length)return r;let i=[];for(let t=1;t<=3;
t+=1){let r=`${n}${t}`,a=`${n}${String(t).padStart(2,`0`)}`,o=e.Rchoose[a]?a:r;e.Rchoose[String(o)]&&i.push(o)}return i.length&&(e.Radventure[n]||!Fw(e,n))?i:[]}function Fw(e,t){let n=e.Rfight[String(t)];return n?(Array.isArray(n.generals)?n.generals:[]).some(e=>{let t=Mw(e);
return!!(t&&jw(t))}):!1}function Iw(e,t){for(let n of Pw(e,t))if(e.Rchoose[String(n)]?.camp)return!0;let n=String(t);for(let t=1;t<=3;t+=1){let r=`${n}${t}`,i=`${n}${String(t).padStart(2,`0`)}`;if(e.Rchoose[i]?.camp||e.Rchoose[r]?.camp)return!0}return!1}function Lw(e,
t){let n=String(t);return!!(e.Radventure[n]||Pw(e,t).length>0)}function Rw(e,t,n=_w,r){if(Lw(e,t)){let i=[];for(let a of Pw(e,t)){let t=e.Rchoose[String(a)];if(!t||t.camp)continue;if(Array.isArray(t.generals)&&t.generals.length)for(let a of t.generals){let o=Mw(a);
if(!o)continue;let s=jw(o);s&&i.push({kind:`general`,text:s});let c=Aw(o,e,n,t,r);c&&i.push({kind:`stats`,text:c})}let o=[];!t.generals?.length&&t.lost&&o.push(String(t.lost)),t.get&&o.push(String(t.get)),o.length&&i.push({kind:`reward`,text:o.join(`
`)})}return i}let i=e.Rfight[String(t)];if(!i)return[];let a=[],o=Array.isArray(i.generals)?i.generals:[];for(let t of o){let o=Mw(t);if(!o)continue;let s=jw(o);s&&a.push({kind:`general`,text:s});let c=Aw(o,e,n,i,r);c&&a.push({kind:`stats`,
text:c})}if(i.get)for(let e of String(i.get).split(`
`).filter(Boolean))a.push({kind:`reward`,text:e});return a}function zw(e,t,n=_w){let r=[];for(let i of t)e.Rcity[String(i.id)]&&(Iw(e,i.event)||r.push({id:i.id,title:Nw(e,i.event),lines:Rw(e,i.event,n,i.id)}));return r}function Bw(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function Vw(e){let t=Bw(e);
return!t||t.destroyed?!1:typeof t._visible==`boolean`?t._visible:t.visible!==!1}function Hw(e){return(Number(e)||0)<=J.difficultyRaidGate}function Uw(e){let t=Bw(e?.raidItem);return t&&Vw(t)?t:null}function Ww(e){let t=Uw(e);if(!t||t.open!==!0)return null;
let n=Kw(e,t,!0);return n?{id:`raid`,x:n.left,y:n.top,w:n.right-n.left,h:n.bottom-n.top,centerX:(n.left+n.right)/2,centerY:(n.top+n.bottom)/2}:null}function Gw(e,t){if(!e)return null;let n=Number(e.x)||0,r=Number(e.y)||0,i=Number(e.width)||0,
a=Number(e.height)||0,o=i>0?-n:-1/0,s=a>0?-r:-1/0,c=i>0?i-n:1/0,l=a>0?a-r:1/0,u=J.viewportPad,d=Kw(e,Bw(t?.topProcesserView),!0)??Kw(e,Bw(t?.topView),!0);d&&(s=Math.max(s,d.bottom+u));let f=Kw(e,Bw(t?.bottomView),!0)??Kw(e,Bw(t?.bottomBar),!0);
return f&&(l=Math.min(l,f.top-u)),!(l>s)||!(c>o)?null:{left:o+u,top:s+u,right:c-u,bottom:l-u}}function Kw(e,t,n=!1){if(!e||!t||!Vw(t))return null;let r=Number(t.width)||0,i=Number(t.height)||0;if((!Number(t.numChildren)||n)&&r>0&&i>0&&typeof e.globalToLocal==`function`&&typeof t.localToGlobal==`function`)try{let n=Bw(globalThis.Laya)?.Point,
a=n?new n(0,0):{x:0,y:0},o=n?new n(r,i):{x:r,y:i},s=t.localToGlobal.call(t,a),c=t.localToGlobal.call(t,o),l=e.globalToLocal.call(e,s),u=e.globalToLocal.call(e,c),d=[Number(l?.x),Number(u?.x)].filter(Number.isFinite),f=[Number(l?.y),Number(u?.y)].filter(Number.isFinite);
if(d.length===2&&f.length===2)return{left:Math.min(...d),top:Math.min(...f),right:Math.max(...d),bottom:Math.max(...f)}}catch{}return null}function qw(e,t,n){let r=Number(e.x)||0,i=Number(e.y)||0,a,o;try{a=Number(e.PosXCenter),o=Number(e.PosYDown)}catch{}return{x:Number.isFinite(a)?a:r+J.cityDefaultWidth*t/2,
y:Number.isFinite(o)?(i+o)/2:i+J.cityDefaultHeight*n/2}}function Jw(e,t,n,r){let i=[],a=Number(e.x)||0,o=Number(e.y)||0,s=Bw(e.cityImg),c=Number(s?.width)||0,l=Number(s?.height)||0;if(c>0&&l>0){let e=Number(s?.x)||0,t=Number(s?.y)||0;i.push({x:a+e*n,
y:o+t*r,w:c*n,h:l*r,centerX:0,centerY:0})}let u=Bw(e.citynameImg);if(Vw(u)){let e=Number(u?.width)||0,t=Number(u?.height)||0;if(e>0&&t>0){let s=Number(u?.x)||0,c=Number(u?.y)||0;i.push({x:a+s*n,y:o+c*r,w:e*n,h:t*r,centerX:0,centerY:0})}}if(!i.length)return t;
let d=Math.min(...i.map(e=>e.x)),f=Math.min(...i.map(e=>e.y)),p=Math.max(...i.map(e=>e.x+e.w)),m=Math.max(...i.map(e=>e.y+e.h));return{x:d,y:f,w:p-d,h:m-f,centerX:(d+p)/2,centerY:(f+m)/2}}function Yw(e,t,n){let r=e?.GetCityItemById,i=typeof r==`function`?Bw(r.call(e,
t)):null;if(i){let t=Number(i.scaleX)||Number(e?.directionX)||1,n=Number(i.scaleY)||Number(e?.directionY)||t,r=qw(i,t,n),a={x:Number(i.x)||0,y:Number(i.y)||0,w:J.cityDefaultWidth*t,h:J.cityDefaultHeight*n,centerX:r.x,centerY:r.y};return{...a,
visualArea:Jw(i,a,t,n)}}let a=Number(e?.directionX)||1,o=Number(e?.directionY)||a,s={x:n.x*a,y:n.y*o,w:J.cityDefaultWidth*a,h:J.cityDefaultHeight*o,centerX:n.x*a+J.cityDefaultWidth*a/2,centerY:n.y*o+J.cityDefaultHeight*o/2};return{...s,visualArea:s}}function Xw(e,
t){let n=e?.GetCityItemById;if(typeof n!=`function`)return!0;let r=Bw(Bw(n.call(e,t))?.cityImg);if(!r)return!0;let i=Number(r.textureWidth)||0,a=Number(r.textureHeight)||0,o=Number(r.width)||0,s=Number(r.height)||0;return i>0&&a>0&&o===i&&s===a}function Zw(e,
t){let n=Number(e?.directionX)||1;return`${n}|${Number(e?.directionY)||n}|${t.map(t=>{let n=t.event??``,r=Qw(e,t.id);return`${t.id}:${n}:${r}`}).join(`,`)}`}function Qw(e,t){let n=e?.GetCityItemById;if(typeof n!=`function`)return`unknown`;let r=Bw(n.call(e,
t));return r?r.HasEvent===!0||r.HasEvent===1?`true`:r.HasEvent===!1||r.HasEvent===0?`false`:`unknown`:`unknown`}function $w(e,t,n,r,i=J.dashLength,a=J.dashGap){let o=n-e,s=r-t,c=Math.hypot(o,s);if(!c)return[];let l=o/c,u=s/c,d=[];for(let n=0;
n<c;n+=i+a){let r=Math.min(n+i,c);d.push({fromX:e+l*n,fromY:t+u*n,toX:e+l*r,toY:t+u*r})}return d.length&&(d[d.length-1].toX=n,d[d.length-1].toY=r),d}function eT(e,t,n){return!(e.x+e.w+n<=t.x||t.x+t.w+n<=e.x||e.y+e.h+n<=t.y||t.y+t.h+n<=e.y)}function tT(e,
t,n,r,i,a){let o=0;for(let s=0;s<e.length;s+=1){let c=e[s];o+=Math.hypot(c.x-i,c.y-a)*.2,r&&(c.y<r.top&&(o+=60),c.y+c.h>r.bottom&&(o+=40),(c.x<r.left||c.x+c.w>r.right)&&(o+=30));for(let t=s+1;t<e.length;t+=1)eT(c,e[t],n)&&(o+=35);for(let e of t)eT(c,
e,0)&&(o+=2)}return o}function nT(e,t,n,r,i){if(!i)return{x:e,y:t};let a=i.right-i.left,o=i.bottom-i.top;if(!(a>=n)||!(o>=r))return{x:e,y:t};let s=Math.max(i.left,i.right-n),c=Math.max(i.top,i.bottom-r);return{x:Math.min(Math.max(e,i.left),
s),y:Math.min(Math.max(t,i.top),c)}}function rT(e,t=[],n=J.layoutGap,r=null){if(!e.length)return[];let i=[[0,0],[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,-1],[-1,1],[1,1]],a=e.map(e=>{let t=nT(e.x0,e.y0,e.w,e.h,r);return{...e,x0:t.x,y0:t.y,x:t.x,
y:t.y}});for(let e=0;e<a.length;e+=1){let o=a[e],s={x:o.x,y:o.y,score:1/0};for(let[c,l]of i){for(let i=0;i<=3;i+=1){if(c===0&&l===0&&i>0)continue;let u={x:o.x0+c*i*(o.w/4+n),y:o.y0+l*i*(o.h/5+n),w:o.w,h:o.h,centerX:0,centerY:0},d=nT(u.x,u.y,
u.w,u.h,r),f={...u,x:d.x,y:d.y},p=tT([f,...a.filter((t,n)=>n!==e).map(e=>({x:e.x,y:e.y,w:e.w,h:e.h,centerX:0,centerY:0}))],t,n,r,o.x0,o.y0);if(p<s.score&&(s={x:f.x,y:f.y,score:p}),p<1)break}if(s.score<1)break}o.x=s.x,o.y=s.y}return a}function iT(e,
t){let n=Math.max(1,Math.ceil(e.length/10)),r=0,i=!1,a=!1;for(let e of t){let t=Math.max(1,e.text.split(`
`).length);e.kind===`stats`?r+=t*(J.detailSize+6):e.kind===`general`?(a=!0,r+=t*(J.generalSize+8)):(i=!0,r+=t*(J.bodySize+6))}return J.topSpacer*2+n*(J.titleSize+8)+r+(a&&i?8:0)+(t.length?4:0)}function aT(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function oT(e,
t,...n){let r=e?.[t];if(typeof r==`function`)return r.apply(e,n)}function sT(e){let t=aT(globalThis.Laya)?.[e];return typeof t==`function`?t:null}function cT(e,t,n,r=!1){let i=sT(`Label`)??sT(`Text`);if(!i)return null;let a=aT(new i);return a?(a.width=J.panelWidth,
a.wordWrap=!0,a.align=`left`,a.valign=`top`,a.leading=2,a.padding=`3,${J.labelPad},3,${J.labelPad}`,a.color=t,a.fontSize=n,a.bold=r,a.text=e,a.mouseEnabled=!1,a):null}function lT(e,t,n,r,i,a,o){let s=aT(e.graphics);if(!s)return;let c=Math.min(o,
t/2,n/2);oT(s,`clear`);try{oT(s,`drawPath`,0,0,[[`moveTo`,c,0],[`arcTo`,t,0,t,n,c],[`arcTo`,t,n,0,n,c],[`arcTo`,0,n,0,0,c],[`arcTo`,0,0,c,0,c],[`closePath`]],{fillStyle:r},{strokeStyle:i,lineWidth:a})}catch{oT(s,`drawRect`,0,0,t,n,r,i,a)}}function uT(){let e=sT(`Sprite`);
if(!e)return null;let t=aT(new e);return t?(t.width=J.panelWidth,t.height=5,oT(aT(t.graphics),`drawLine`,J.labelPad,3,J.panelWidth-J.labelPad,3,J.dividerColor,1),t):null}function dT(e){let t=sT(`VBox`),n=sT(`Sprite`);if(!t||!n)return[];let r=aT(new t);
if(!r)return[];r.name=`city`,r.zOrder=J.cityZOrder,r.mouseEnabled=!1,r.mouseThrough=!0,oT(r,`pos`,e.x,e.y);let i=aT(new n);i&&(i.alpha=J.backgroundAlpha,i.mouseEnabled=!1,oT(r,`addChild`,i));let a=aT(new n);a&&(a.height=J.topSpacer,a.mouseEnabled=!1,
oT(r,`addChild`,a));let o=J.topSpacer,s=cT(e.title,J.titleColor,J.titleSize,!0);s&&(oT(r,`addChild`,s),o+=Number(s.height)||J.titleSize+8);let c=e.lines??[],l=c.some(e=>e.kind===`general`||e.kind===`stats`),u=c.findIndex(e=>e.kind===`reward`),
d=!1;for(let e=0;e<c.length;e+=1){let t=c[e];if(t.kind===`reward`&&l&&!d){let e=uT();e&&(oT(r,`addChild`,e),o+=Number(e.height)||5),d=!0}else if(e===0&&t.kind===`reward`&&u===0){let e=uT();e&&(oT(r,`addChild`,e),o+=Number(e.height)||5)}let n=t.kind===`stats`?J.detailColor:t.kind===`general`?t.warning?J.generalWarningColor:J.generalColor:J.bodyColor,
i=t.kind===`stats`?J.detailSize:t.kind===`general`?J.generalSize:J.bodySize,a=cT(t.text,n,i,!0);a&&(oT(r,`addChild`,a),o+=Number(a.height)||i+6)}let f=o+J.topSpacer;r.layoutEnabled=!0,r.vScrollBarSkin=``,r.width=J.panelWidth,r.height=f,i&&(lT(i,
J.panelWidth,f,J.panelFill,J.panelStroke,1,J.cornerRadius),oT(i,`pos`,0,0));let p=[r],m=fT(e,f);return m&&p.push(m),p}function fT(e,t){let n=sT(`Sprite`);if(!n)return null;let r=e.x+e.w/2,i=e.y+t/2,a=e.centerX,o=e.centerY;if(Math.hypot(a-r,
o-i)<J.layoutGap)return null;let s=aT(new n);if(!s)return null;s.name=`cityLeader`,s.zOrder=J.leaderZOrder,s.mouseEnabled=!1;let c=aT(s.graphics);for(let e of $w(r,i,a,o))oT(c,`drawLine`,e.fromX,e.fromY,e.toX,e.toY,J.leaderColor,J.leaderLineWidth);
return s}function pT(e){if(e&&typeof e.numChildren==`number`)for(let t=Number(e.numChildren)-1;t>=0;--t){let n=aT(oT(e,`getChildAt`,t));if(n&&(n.name===`city`||n.name===`cityLeader`)){oT(e,`removeChild`,n);try{typeof n.destroy==`function`&&n.destroy(!0)}catch{}}}}function mT(e,
t){if(e){pT(e);for(let n of t)oT(e,`addChild`,n)}}function hT(e){if(!e||typeof e.numChildren!=`number`)return!1;for(let t=0;t<Number(e.numChildren);t+=1)if(aT(oT(e,`getChildAt`,t))?.name===`city`)return!0;return!1}function gT(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function _T(e){let t=gT(e.ProtoObj)??gT(e.protoObj)??e;
return gT(t.allData)??gT(t.AllData)??gT(t.data)??gT(t.Data)??t}function vT(e){let t=_T(e);if(!t)return null;let n=gT(t.chapterData)??gT(t.ChapterData),r=n?.locations??n?.Locations;return Array.isArray(r)?r.map(e=>{let t=gT(e)??{};return{id:t.location??t.Location??t.id??t.ID,
event:t.event??t.Event}}).filter(e=>e.id!=null&&e.event!=null):null}function yT(e,t){let n=_T(e)??{},r=gT(n.seasonData)??gT(n.SeasonData)??{},i=gT(n.chapterData)??gT(n.ChapterData)??{},a=gT(n.gameData)??gT(n.GameData)??{},o=gT(a.seedData)??gT(a.SeedData)??{},
s=Number(r.difficulty??r.Difficulty),c=Number(r.seasonId??r.SeasonId??r.seasonID),l=Number(i.accday??i.Accday),u=Number(i.chapterId??i.ChapterId),d=Array.isArray(a.passChapter)?a.passChapter.length:Number(a.passChapter??t.passChapter),f=Array.isArray(o.seedItem)?o.seedItem:Array.isArray(a.seedItem)?a.seedItem:t.seedItem;
return{difficulty:Number.isFinite(s)?s:t.difficulty,seasonId:Number.isFinite(c)&&c>0?c:t.seasonId,accday:Number.isFinite(l)?l:t.accday,passChapter:Number.isFinite(d)?d:t.passChapter,chapterId:Number.isFinite(u)?u:t.chapterId,seedItem:f}}function bT(e,
t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=t.configSource??(t.cardConfigSource?gw(t.cardConfigSource):null);if(!i)throw Error(`[xiaochao] 山河地图需要 cardConfigSource 或 configSource`);let a=t.intervalMs??J.pollMs,o=!1,s=[],c=!1,l={..._w,
seedItem:[]},u=``,d=0,f=null;function p(){return e.get(hc)===!0}function m(e){return!e||e.destroyed?!1:typeof e._visible==`boolean`?e._visible:e.visible!==!1}function h(){for(let e of[`RogueSmallMapScene`,`RogueLikeBigMapScene`]){let t=gT(r.findInLayer(`SceneLayer`,
e)[0]);if(t&&!t.destroyed)return t}return null}function g(){let e=h();if(!e||!m(e))return null;let t=gT(e?.cityView);return t&&!t.destroyed&&typeof t.GetCityItemById==`function`?t:null}function _(e){if(e===`fill-empty`&&(s.length||c))return;
let t=gT(r.manager(`RogueLikePveManager`)),n=[t,gT(t?.allData),gT(t?.AllData),gT(t?.data),gT(t?.gameData),gT(h())];for(let t of n){if(!t)continue;let n=vT(t);if(n!=null&&(e!==`fill-empty`||n.length)){s=n,c=!0,l=yT(t,l);return}}}function v(e=!1){if(e){let e=c;
c=!1,_(`fill-empty`),s.length||(c=e);return}_(`fill-empty`)}function y(e){d+=1,u=``,pT(e??f??g()),g()||(f=null)}let b=!1;function x(e=!1){if(o)return;if(!p()){y(),b=!1,S({reason:`disabled`});return}let t=g(),n=!!t;n&&!b?v(!0):n&&s.length?_(`reconcile`):v(!1),
b=n;let r=i.get();if(!r||!Object.keys(r.Rcity).length){y(),S({reason:`no-config`});return}if(!t||!s.length){y(),S({reason:t?`no-cities`:`no-cityView`,cities:s});return}if(f=t,l.difficulty>0&&Hw(l.difficulty)&&!Uw(t)){y(t),S({reason:`raid-gate`,
cities:s,difficulty:l.difficulty});return}let a=Zw(t,s),c=s.filter(e=>Qw(t,e.id)!==`false`);if(!c.length){y(t),u=a,S({reason:`no-active-cities`,cities:s,fingerprint:a});return}if(c.some(e=>r.Rcity[String(e.id)]&&!Xw(t,e.id))){(e||a!==u)&&(pT(t),
u=``),S({reason:`pending-images`,cities:s,activeCities:c});return}if(!e&&a===u&&hT(t)){S({reason:`fingerprint-hit`,cities:s,fingerprint:a});return}let m=++d,x=[],C=Ww(t);C&&x.push(C);let w=zw(r,c,l);if(!w.length){y(t),u=a,S({reason:`no-drafts`,
cities:s,activeCities:c,fingerprint:a});return}let T=rT(w.map(e=>{let n=r.Rcity[String(e.id)]??{x:0,y:0},i=Yw(t,e.id,n),a=i.visualArea||i;Qw(t,e.id)===`true`&&x.push({id:e.id,x:a.x,y:a.y,w:a.w,h:a.h,centerX:i.centerX,centerY:i.centerY});let o=iT(e.title,
e.lines);return{...e,x0:i.centerX-J.panelWidth/2,y0:i.centerY-o/2,x:i.centerX-J.panelWidth/2,y:i.centerY-o/2,w:J.panelWidth,h:o,centerX:i.centerX,centerY:i.centerY}}),x,J.layoutGap,Gw(t,h()));m===d&&(mT(t,T.flatMap(e=>dT(e))),u=a,S({reason:`mounted`,
cities:s,drafts:w.map(e=>({id:e.id,title:e.title,lineCount:e.lines.length,kinds:e.lines.map(e=>e.kind)})),panels:T.map(e=>({id:e.id,title:e.title,x:e.x,y:e.y,w:e.w,h:e.h})),fingerprint:a}))}function S(e){try{n.__XIAOCHAO_ROGUE_MAP_DEBUG__={at:Date.now(),
enabled:p(),cityCount:s.length,synced:c,difficulty:l.difficulty,...e}}catch{}}let C=n.setInterval(()=>{o||x()},a),w=e.subscribe(hc,({value:e})=>{e?x(!0):y()});return p()&&x(!0),{filterMessage(e,t){if(t!==`decodeRogueLikeDataSync`)return;let n=vT(e);
n&&(s=n,c=!0),l=yT(e,l),p()&&x(!0)},dispose(){o=!0,w(),n.clearInterval(C),y(),i.dispose()}}}var xT=`RogueJiShiWindow`,ST=Object.freeze({2:`战法`,3:`技能`,4:`手牌`,5:`装备`});function CT(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function wT(e){return Array.isArray(e)?e:[]}function TT(e){let t=CT(e.data)??CT(e.Data);
return CT(e.ProtoObj)??CT(e.protoObj)??CT(t?.ProtoObj)??CT(t?.protoObj)??e}function ET(e){let t=TT(e),n=Number(t.dataMark??t.DataMark??e.dataMark??e.DataMark);return Number.isFinite(n)?(n>>4&1)==1:!1}function DT(e){let t=TT(e),n=CT(t.shopData)??CT(t.ShopData)??CT(e.shopData)??CT(e.ShopData);
if(n)return n;let r=CT(t.allData)??CT(t.AllData)??CT(t.data)??CT(t.Data)??CT(e.allData)??CT(e.AllData)??CT(e.data)??CT(e.Data);return CT(r?.shopData)??CT(r?.ShopData)}function OT(e){return!!(e&&Object.keys(e).length>0)}function kT(e,t){let n=wT(e),
r=t&&typeof t==`object`?t:{},i=[];for(let e of n){if(e==null||e===``)continue;let t=String(e),n=r[t];if(!n)continue;let a=n.money!=null&&String(n.money)!==``?` ${String(n.money)}铜`:``,o=ST[Number(n.type)]??``,s=Number(n.level)||0,c=s>=1&&s<=4?s:0;
i.push({id:t,label:`${n.name||t}${a}`,title:`${o}${n.desc||``}`,level:c})}return i}function AT(e={}){let t=e.globalObject??window,n=e.locator??Sh(t),r=e.cardConfigSource,i=yx(),a=new Set,o=new Set,s=!1,c=null,l=!1,u=[],d=null,f=null;function p(e){u=e;
for(let e of o)try{e(u)}catch(e){console.warn(`[山河图] 集市透视订阅回调失败`,e)}}function m(e,t=0){if(s)return;let n=setTimeout(()=>{a.delete(n),s||e()},t);a.add(n)}function h(e,t=40,n=500){return new Promise(r=>{let i=t=>{if(s)return r(null);let a=null;
try{a=e()}catch{a=null}if(a)return r(a);if(t<=0)return r(null);m(()=>i(t-1),n)};i(t)})}function g(){f||=h(()=>{let e=r?.getRogueMapData()?.Rplot??null;return OT(e)?e:null}).then(e=>{if(f=null,!e||!d||s)return;let t=d;d=null,p(kT(t,e))})}function _(e){let t=e.itemId??e.ItemId,
n=wT(t),i=r?.getRogueMapData()?.Rplot??null;if(n.length&&!OT(i)){d=n,u.length||p([]),g();return}d=null,p(kT(t,i))}function v(e,t){t&&(c=e.bShow===!0||e.BShow===!0),e.bShow=!0,`BShow`in e&&(e.BShow=!0)}function y(){let e=CT(n.manager(`RogueLikePveManager`));
return e?DT(e)??DT(CT(e.allData)??{})??DT(CT(e.AllData)??{}):null}function b(e=63){if(l)return console.warn(`[山河图] 集市数据已请求过，跳过重复请求, dm=`,e),!0;let t=CT(n.manager(`RogueLikePveManager`)),r=t?.RogueLikeDataReq;if(typeof r!=`function`)return!1;
try{return l=!0,r.call(t,e),!0}catch(e){return l=!1,console.warn(`[山河图] 请求集市数据失败`,e),!1}}function x(){l=!1}function S(){let e=y();if(!e){b();return}v(e,c===null),wT(e.itemId??e.ItemId).length&&_(e)}function C(){S();let e=n.dispatcher();if(!e)return yu(`游戏尚未就绪，稍后再打开集市`),!1;
let t=e[n.obfuscatedMethodName(e,`GameEventDispatcher`,`ShowWindow`)??`ShowWindow`];if(typeof t!=`function`)return yu(`无法打开集市窗口`),!1;try{return t.call(e,xT),!0}catch(e){return console.warn(`[山河图] 打开集市失败`,e),yu(`打开集市失败`),!1}}function w(e,t){if(t!==`decodeRogueLikeDataSync`)return;
let n=ET(e),r=DT(e);if(n&&!r){b();return}r&&(n&&(x(),v(r,!0)),_(r))}return h(()=>{let e=CT(n.gameContext())??CT(t.GameContext)??CT(CT(t.Laya?.Browser?.window)?.GameContext);return e&&typeof e.ShowTextPrompt==`function`?e:null}).then(e=>{e&&!s&&i.wrap(e,
`ShowTextPrompt`,e=>function(t,...r){return String(t||``)===`购买成功`&&c===!1&&n.window(`RogueJiShiWindow`)?e.call(this,`购买失败：小抄可提前显示山河图集市<br>但是目前还没到购买东西的月份。`,...r):e.call(this,t,...r)})}),{openShop:C,getPreview:()=>u,subscribePreview(e){o.add(e);
try{e(u)}catch{}return()=>{o.delete(e)}},filterMessage:w,dispose(){s=!0,a.forEach(e=>clearTimeout(e)),a.clear(),o.clear(),i.restoreAll(),c=null,l=!1,d=null,f=null,u=[]}}}var jT=`RogueChapterStoryWindow`,MT=`__XIAOCHAO_STORY_PROBE__`,NT=`__XIAOCHAO_ROGUE_STORY_READY__`;
function PT(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function FT(e){if(!e||e.destroyed)return!1;try{if(typeof e.Close==`function`)return e.Close.call(e),!0;if(typeof e.close==`function`)return e.close.call(e),!0}catch(e){console.warn(`[山河图] 关闭对白失败`,
e)}return!1}function IT(e,t){try{e[NT]=t}catch{}}function LT(e){return e!==null&&(typeof e==`object`||typeof e==`function`)&&typeof e.then==`function`}function RT(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=yx(),a=new Set,o=!1,
s=!1,c=()=>e.get(gc)===!0;function l(e,t=0){if(o)return;let n=setTimeout(()=>{a.delete(n),o||e()},t);a.add(n)}function u(e,t=40,n=500){return new Promise(r=>{let i=t=>{if(o)return r(null);let a=null;try{a=e()}catch{a=null}if(a)return r(a);if(t<=0)return r(null);
l(()=>i(t-1),n)};i(t)})}function d(){c()&&new Set([r.window(jT),...r.findWindows(jT)].filter(Boolean)).forEach(e=>FT(PT(e)))}function f(e){if(!c())return;let t=e=>{c()&&(FT(PT(e)),l(d))};if(LT(e)){Promise.resolve(e).then(t,()=>l(d));return}t(e)}function p(){if(s||o)return s;
let e=r.dispatcher();if(!e)return!1;let t=r.obfuscatedMethodName(e,`GameEventDispatcher`,`ShowWindow`)??`ShowWindow`;return typeof e[t]==`function`&&(s=i.wrap(e,t,e=>function(t,...n){if(t===MT){let e={destroyed:!1,Close(){e.destroyed=!0,e.__probeClosed=!0}};
return c()&&FT(e),e}let r=e.call(this,t,...n);return t===jT&&c()&&f(r),r}),s&&(IT(n,!0),c()&&d()),s)}p()||u(()=>p()?!0:null).then(()=>{!s&&!o&&console.warn(`[山河图] 隐藏对白未挂上 ShowWindow`)});let m=e.subscribe(gc,({value:e})=>{e&&d()});return{dispose(){o=!0,
IT(n,!1),m(),a.forEach(e=>clearTimeout(e)),a.clear(),i.restoreAll()}}}function zT(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=bT(e,{globalObject:n,locator:r,cardConfigSource:t.cardConfigSource}),a=RT(e,{globalObject:n,locator:r}),
o=AT({globalObject:n,locator:r,cardConfigSource:t.cardConfigSource});return{openShop:()=>o.openShop(),getShopPreview:()=>o.getPreview(),subscribeShopPreview:e=>o.subscribePreview(e),filterMessage:(e,t)=>{i.filterMessage(e,t),o.filterMessage(e,
t)},dispose(){i.dispose(),a.dispose(),o.dispose()}}}var BT=3793,VT=Object.freeze([`伤害+1`,`目标+1`,`无视防具`,`不可响应`,`额外结算`,`无次数`]);function HT(e){let t=UT(e);if(!t)return``;let n=t.GetSkillBuffInfo,r=t.GetSeatState;if(typeof n!=`function`||typeof r!=`function`)return``;
let i,a=!1;try{i=n.call(t,BT),a=!!r.call(t,BT)}catch{return``}if(!a)return``;let o=Number(Array.isArray(i)?i[0]:0)||0;return o?VT.filter((e,t)=>!!(o&1<<t+1)).join(`
`):``}function UT(e){return e&&typeof e==`object`?e:null}function WT(e){let t=e.patcher??yx(),n=e.globalObject??(typeof window<`u`?window:{}),r=e.locator.classPrototype(`TianShuWindow`);return r?(t.wrap(r,`updateWinUI`,t=>function(...r){let i=XT(r[0]),
a=Number(i?.type),o=e.isEnabled(),s=o?e.getConfig():null;a===1&&o&&s?.trigger&&Array.isArray(i?.ids)&&i.ids.sort((e,t)=>Number(s.trigger[e]??0)-Number(s.trigger[t]??0));let c=t.apply(this,r);return a===1&&o?(GT(this,n,e),s&&(e.isTipVisible?.()??!0)?JT(this,
i,s,n):qT(this)):(KT(this),a!==1&&qT(this)),c}),()=>{let n=e.locator.window(`TianShuWindow`);n&&(KT(n),qT(n)),e.patcher||t.restoreAll()}):()=>void 0}function GT(e,t,n){let r=XT(e.wenhao);if(r){r.visible=!0;return}let i=n.locator.createInstance(`SgsSpriteFilterBtn`);
if(!i)return;r=i,e.wenhao=r;let a=e.addChild;typeof a==`function`&&a.call(e,r),YT(r,`InitSkin`,`hall_user_wenhao_up`,`hall_user_wenhao_over`,`hall_user_wenhao_down`,`hall_user_wenhao_disabled`),r.pos?.(670,270),r.zOrder=100,r.mouseEnabled=!0;
let o=t?.Laya?.Event?.CLICK??`click`;YT(r,`on`,o,e,function(){let e=XT(this.html);e&&(e.visible=!e.visible)})}function KT(e){let t=XT(e.wenhao);t&&(t.visible=!1)}function qT(e){let t=XT(e.html);t&&(t.visible=!1)}function JT(e,t,n,r){let i=Array.isArray(t?.ids)?t.ids:[];
if(!i.length||!n.effectHtml.length){qT(e);return}(Array.isArray(e.selectItems)?e.selectItems:[]).forEach((e,t)=>{let r=Number(i[t]),a=Number(n.trigger[r]??0);a&&(e.UseCnt=`第${a}类型`),a===3&&(e.SelectBgVisible=!0)});let a=Math.min(...i.map(e=>Number(n.trigger[e]??99))),
o=a<=1?-70:a>=3?116:8,s=r?.Laya?.HTMLDivElement,c=XT(e.html);if(!c&&s){c=new s,c.name=`xcNanHuaTip`,c.mouseEnabled=!1,c.mouseThrough=!0;let t=XT(c.style)??(c.style={});Object.assign(t,{width:507,color:`white`,fontSize:15,fontFamily:`FZLBGBK`,
stroke:1,strokeColor:`#000000`}),e.html=c;let n=e.addChild;typeof n==`function`&&n.call(e,c)}if(!c)return;let l=n.effectHtml.slice(Math.max(0,a-1));c.innerHTML=`<div style="width:507px;">${l.join(``)}</div> `,c.visible=!0,c.pos?.(150,o)}function YT(e,
t,...n){if(!e)return;let r=e[t];if(typeof r==`function`)try{return r.apply(e,n)}catch{return}}function XT(e){return e&&typeof e==`object`?e:null}var ZT={1:{border:`#5BE49B`,backing:`#14532F`,label:`#D9FFE9`},2:{border:`#FF6B57`,backing:`#54201A`,
label:`#FFE3DC`},3:{border:`#4D5BFF`,backing:`#1B2158`,label:`#DFE3FF`}};function QT(e){let t=e.patcher??yx(),n=e.globalObject??(typeof window<`u`?window:{}),r=e.gridSize??6,i=!1,a=()=>{let n=e.locator.classPrototype(`PingJianWindow`);return!n||typeof n.updateItemUI!=`function`?!1:(t.wrap(n,
`updateItemUI`,e=>function(...t){let n=e.apply(this,t);return c(this),n}),t.wrap(n,`destroy`,e=>function(...t){return oE(this),e.apply(this,t)}),l(),!0)},o=0,s=setInterval(()=>{i||(o+=1,(a()||o>=60)&&clearInterval(s))},1e3);a();function c(e){setTimeout(()=>{i||u(e)},0)}function l(){let t=e.locator.window(`PingJianWindow`);
t&&u(t)}function u(t){if(!tE(t,r)||!e.isEnabled()){aE(t);return}let i=eE(t,e.getEntries(),r),a=nE(t,i);if(t.__xcShiLunOverlaySignature===a)return;t.__xcShiLunOverlaySignature=a;let o=rE(t,n);if(!o)return;o.visible=!0;let s=sE(o.graphics);s?.clear?.();
let c=Array.isArray(t.items)?t.items:[],l=Number(c.find(Boolean)?.width)||40,u=Number(c.find(Boolean)?.height)||40,d=t.__xcShiLunOverlayLabels??[];t.__xcShiLunOverlayLabels=d;let f=0;for(let r of i){let i=ZT[r.entry.triggerID]||ZT[1],a=1/0,
p=1/0,m=-1/0,h=-1/0;for(let e of r.cells){let t=c[e];t&&(a=Math.min(a,Number(t.x)||0),p=Math.min(p,Number(t.y)||0),m=Math.max(m,(Number(t.x)||0)+l),h=Math.max(h,(Number(t.y)||0)+u))}if(!(m>a&&h>p))continue;let g=a-3,_=p-3,v=m-a+6,y=h-p+6;s?.drawRect?.(g,
_,v,y,null,i.border,2);let b=e.resolveSpellName(r.entry.spell,r.entry.name);if(!b)continue;let x=iE(t,d,f++,n,o);if(!x)continue;let S=Math.max(28,b.length*14);s?.drawRect?.(g+3,_+3,S+10,18,i.backing,null,0),x.text=b,x.color=i.label,x.size?.(S+10,18),
x.pos?.(g+5,_+3),x.visible=!0}for(let e=f;e<d.length;e+=1){let t=d[e];t&&(t.visible=!1)}}return()=>{i=!0,clearInterval(s);let n=e.locator.window(`PingJianWindow`);n&&oE(n),e.patcher||t.restoreAll()}}function $T(e,t,n,r,i=6){let a=new Set(n),
o=[],s=new Set,c=(e,t,n)=>{if(e.every(e=>a.has(e)))return;let r=`${e.join(`-`)}:${t.id}`;s.has(r)||(s.add(r),o.push({cells:e,entry:t,horizontal:n}))},l=(n,r)=>n.every((n,i)=>e[n]===r.name[i]&&t[n]===r.spell);for(let e=0;e<i;e+=1)for(let t of r){let n=t.name.length;
for(let r=0;r+n<=i;r+=1){let a=Array.from({length:n},(t,n)=>e*i+r+n);l(a,t)&&c(a,t,!0)}}for(let e=0;e<i;e+=1)for(let t of r){let n=t.name.length;for(let r=0;r+n<=i;r+=1){let a=Array.from({length:n},(t,n)=>(r+n)*i+e);l(a,t)&&c(a,t,!1)}}return o}function eE(e,
t,n){return $T(Array.isArray(e.WordsStr)?e.WordsStr:[],Array.isArray(e.gridSkillIdArr)?e.gridSkillIdArr:[],Array.isArray(e.matchedIds)?e.matchedIds:[],t,n)}function tE(e,t){return!e||e.destroyed||!sE(e.seat)?.IsSelf?!1:Array.isArray(e.WordsStr)&&e.WordsStr.length===t*t&&Array.isArray(e.items)&&e.items.length===e.WordsStr.length}function nE(e,
t){return[Array.isArray(e.WordsStr)?e.WordsStr.join(``):``,Array.isArray(e.gridSkillIdArr)?e.gridSkillIdArr.join(`,`):``,Array.isArray(e.matchedIds)?e.matchedIds.join(`,`):``,Array.isArray(e.hideIds)?e.hideIds.join(`,`):``,t.map(e=>`${e.cells.join(`-`)}:${e.entry.id}`).join(`|`),
sE(e.seat)?.Index??``].join(`#`)}function rE(e,t){let n=sE(e.contentSprite)??e,r=sE(e.__xcShiLunOverlayLayer);if(r&&!r.destroyed&&r.parent===n)return r;if(r&&!r.destroyed)try{r.removeSelf?.()}catch{}let i=t?.Laya?.Sprite;if(!i)return null;if(r=new i,
r.name=`xcShiLunOverlayLayer`,r.mouseEnabled=!1,r.mouseThrough=!0,r.zOrder=999,typeof n.addDrawChild==`function`)try{n.addDrawChild(r)}catch{n.addChild?.(r)}else n.addChild?.(r);return n.sortChildren?.(),e.__xcShiLunOverlayLayer=r,e.__xcShiLunOverlayLabels=[],
r}function iE(e,t,n,r,i){let a=t[n];if(!a||a.destroyed){let e=r?.Laya?.Text;if(!e)return null;a=new e,a.name=`xcShiLunOverlayLabel_${n}`,a.mouseEnabled=!1,a.mouseThrough=!0,a.bold=!0,a.fontSize=14,a.stroke=2,a.strokeColor=`#0A0A0A`,a.align=`left`,
a.valign=`middle`,a.wordWrap=!1,t[n]=a}return a.parent!==i&&i.addChild?.(a),a}function aE(e){let t=sE(e.__xcShiLunOverlayLayer);t&&!t.destroyed&&(sE(t.graphics)?.clear?.(),t.visible=!1),e.__xcShiLunOverlayLabels?.forEach(e=>{e&&(e.visible=!1)}),
e.__xcShiLunOverlaySignature=``}function oE(e){let t=sE(e.__xcShiLunOverlayLayer);if(t&&!t.destroyed)try{t.destroy?.(!0)}catch{}e.__xcShiLunOverlayLayer=null,e.__xcShiLunOverlayLabels=[],e.__xcShiLunOverlaySignature=``}function sE(e){return e&&typeof e==`object`?e:null}var cE=[1,2,3,4],
lE={1:{name:`红桃`,mark:`♥`,dx:-1,dy:0},2:{name:`方块`,mark:`♦`,dx:0,dy:-1},3:{name:`黑桃`,mark:`♠`,dx:1,dy:0},4:{name:`梅花`,mark:`♣`,dx:0,dy:1}};function uE(e,...t){if(!e||typeof e!=`object`)return;let n=e;for(let e of t)if(n[e]!==void 0&&n[e]!==null)return n[e]}function dE(e){return Array.isArray(e)?e.map(Number).filter(Number.isFinite):String(e||``).split(`,
`).map(e=>Number(e.trim())).filter(Number.isFinite)}function fE(e){let t=Number(e)||0;if(t<=25)return t;let n=Math.floor(t/10),r=t%10;return n>=1&&n<=5&&r>=1&&r<=5?(n-1)*5+r:t}function pE(e){let t=fE(e);return{row:Math.floor((t-1)/5),col:(t-1)%5}}function mE(e,
t){return e<0||e>=5||t<0||t>=5?0:e*5+t+1}function hE(e){return e>=1&&e<=25}function gE(e){return(Array.isArray(e)?e:String(e||``).split(`|`).filter(Boolean)).map(e=>{if(e&&typeof e==`object`&&!Array.isArray(e)){let t=e;return{cell:Number(uE(t,
`cell`,`cellID`,`CellID`)??0),effect:Number(uE(t,`effect`,`EffectID`,`Effect`)??0),param1:Number(uE(t,`param1`,`Param1`)??0),param2:Number(uE(t,`param2`,`Param2`)??0)}}let[t,n,r=0,i=0]=dE(e);return{cell:t,effect:n,param1:r,param2:i}})}function _E(e){return(Array.isArray(e)?e:String(e||``).split(`|`).filter(Boolean)).map(e=>{if(e&&typeof e==`object`&&!Array.isArray(e)){let t=e,
n=Number(uE(t,`cell`,`cellID`,`CellID`)??0);return{cell:fE(n),rawCell:n,rewardId:Number(uE(t,`rewardId`,`RewardID`)??0),type:String(uE(t,`type`,`Type`,`rewardType`,`RewardType`,`kind`)??``),isCard:t.isCard===!0||t.IsCard===!0,isHealing:t.isHealing===!0||t.IsHealing===!0}}let[t,
n]=dE(e);return{cell:fE(t),rawCell:Number(t),rewardId:Number(n)||0,type:``,isCard:!1,isHealing:!1}})}function vE(e){if(!e||typeof e!=`object`)return null;let t=e,n=new Set(dE(uE(t,`Cells`,`cells`,`cell`)).map(fE).filter(hE)),r=new Map;for(let e of gE(uE(t,
`spcell`,`SpecialCells`,`specialCells`))){let t=fE(e.cell);hE(t)&&r.set(t,{cell:t,effect:Number(e.effect)||0,param1:Number(e.param1)||0,param2:Number(e.param2)||0})}let i=_E(uE(t,`reward`,`RewardCells`,`Rewards`,`rewardCells`)),a=[...new Set(i.filter(e=>hE(e.cell)&&n.has(e.cell)).map(e=>e.cell))].sort((e,
t)=>e-t);return{id:Number(uE(t,`cellID`,`CellID`,`id`,`mapId`,`ID`)??0)||0,name:String(t.name||``),cells:n,start:fE(uE(t,`precell`,`PreCell`,`start`)||0),specials:r,rewards:i,rewardCells:a,color:Number(uE(t,`color`,`Color`)??0)||0}}function yE(e){let t=String(e||``).replace(/\s+/g,
``);return/^(?:杀|火杀|雷杀|冰杀|刺杀|神杀)$/.test(t)?`sha`:/^(?:酒|雄黄酒)$/.test(t)?`jiu`:t===`桃`?`tao`:/诸葛连弩|连弩/.test(t)?`zhuge`:t===`闪电`?`shandian`:/^(?:闪|无懈可击)$/.test(t)?`unusable`:`other`}function bE(e){let t=e&&typeof e==`object`?e:{},n=dE(uE(t,`Cells`,
`cells`,`cell`)).join(`,`),r=gE(uE(t,`spcell`,`SpecialCells`,`specialCells`)).map(e=>[fE(e.cell),e.effect,e.param1,e.param2].join(`,`)).join(`|`),i=_E(uE(t,`reward`,`RewardCells`,`Rewards`,`rewardCells`)).map(e=>[e.cell,e.rewardId,e.type,+!!e.isCard,+!!e.isHealing].join(`,
`)).join(`|`);return[Number(uE(t,`cellID`,`CellID`,`id`)??0)||0,Number(uE(t,`PreCell`,`precell`,`start`)??0)||0,n,r,i].join(`;`)}var xE=()=>({suitCounts:[0,0,0,0,0],handCards:[],selectedCardKey:``,hasZhugeEquipped:!1,remainingSha:1,jiuLimit:0,
peachLimit:0,shandianLimit:1,hp:null,maxHp:null,isDying:!1});function SE(e){return e&&typeof e==`object`?e:null}function CE(e){return Number(e?.CardId??e?.cardId??e?.ID??e?.id??0)||0}function wE(e){return Number(e?.FlowerOnSeat??e?.flower??e?.Flower??e?.CardSuit??e?.cardSuit??e?.suit??e?.Color??e?.color??0)||0}function TE(e,
t){let n=CE(e),r=n?t?.getCard?.(n):null;return String(e?.CardName||e?.cardName||e?.Name||e?.name||r?.name||``)}function EE(e,t,n){let r=CE(e),i=r?n?.getCard?.(r):null;return String(i?.name||t||`牌`)+String(i?.cn??``)}function DE(...e){for(let t of e){let e=Number(t);
if(Number.isFinite(e))return e}return null}function OE(e){let t=e?.getElementById?.(`sha`)?.textContent||``;if(/∞/.test(t))return 1/0;let n=t.match(/(?:剩余\s*[：:]?\s*)?(\d+)/);return n?Math.max(0,Number(n[1])||0):1}function kE(e={}){try{let t=e.globalObject??(typeof window<`u`?window:{}),
n=I(t),r=SE(n?.SelfSeatUi)??SE(SE(n)?.selfSeatUi),i=SE(r?.seat)??{},a=SE(r?.cardContainer)??{},o=Array.isArray(a.handCardUis)&&a.handCardUis.length?a.handCardUis:a.cardUis||[],s=a.equipCardUis||[],c=new Set([...a.selectCardUis||[],...a.selectedCardUis||[]]),
l=new Set(Array.from(SE(a.selectCardContext)?.SelectedCardIds??SE(a.SelectContext)?.SelectedCardIds??[],Number)),u=a.activatedCardtems??a.activatedCardItems,d=new Set(Array.isArray(u)?u:[]),f=[0,0,0,0,0],p=o.map((t,n)=>{let r=SE(t),i=SE(r?.Card)??SE(r?.theCard)??r,
a=CE(i),o=wE(i),s=TE(i,e.cardLookup),p=yE(s),m=r?.Activated??r?.activated??i?.Activated??i?.activated??(Array.isArray(u)?d.has(t):void 0);return o>=1&&o<=4&&(f[o]+=1),{key:a?String(a):`hand-${n}`,id:a,suit:o,name:s,displayName:EE(i,s,e.cardLookup),
kind:p,playable:m===void 0||!!m,selected:!!(r?.selected||i?.selected||c.has(t)||l.has(a))}}),m=s.some(t=>{let n=SE(t);return yE(TE(SE(n?.Card)??SE(n?.theCard)??n,e.cardLookup))===`zhuge`}),h=DE(i.currentHp,i.CurrentHp,i.Hp,i.HP),g=DE(i.maxHp,
i.MaxHp,i.maxHP,i.MaxHP),_=!!(i.isDying||i.IsDying||i.dying||h!=null&&h<=0),v=h!=null&&g!=null?Math.max(0,g-h):0,y=p.filter(e=>e.kind===`jiu`&&e.playable),b=p.filter(e=>e.kind===`tao`&&e.playable),x=_?y.length:Math.min(1,y.length),S=h!=null&&g!=null?Math.min(b.length,
_?Math.max(1,1-h):v):0;return{suitCounts:f,handCards:p,selectedCardKey:(p.find(e=>e.selected)||null)?.key||``,hasZhugeEquipped:m,remainingSha:m?1/0:e.remainingSha??OE(t.document),jiuLimit:x,peachLimit:S,shandianLimit:e.shandianLimit??1,hp:h,
maxHp:g,isDying:_}}catch{return xE()}}function AE(e,t){let n=e??(typeof window<`u`?window:{}),r=SE(I(n)),i=SE(r?.SelfSeatUi)??SE(r?.selfSeatUi),a=SE(i?.seat)??SE(i?.Seat),o=SE(t)??SE(n.GameContext)??SE(SE(n.Laya?.Browser?.window)?.GameContext),
s=a?.SeatID??a?.seatID??a?.SeatId??a?.seatId??a?.index??a?.Index??i?.SeatID??i?.seatID??i?.SeatId??i?.seatId??i?.index??i?.Index??o?.mySeatID??o?.MySeatID??o?.selfSeatID??o?.SelfSeatID??o?.myID??o?.MyID;return s==null?``:String(s)}function jE(e,
t){let n=e??(typeof window<`u`?window:{}),r=SE(t)??SE(n.GameContext)??SE(SE(n.Laya?.Browser?.window)?.GameContext),i=r?.currentID??r?.CurrentID??r?.currentId??r?.CurrentId;return i==null?``:String(i)}function ME(e,t,n,r){let i=new Set;for(let t of e?.rewards||[])(Number(t.type)===26||Number(t.rawCell)===26||Number(t.cell)===26)&&Number(t.rewardId)&&i.add(Number(t.rewardId));
for(let e of t){let t=r(e);t&&i.add(t)}return[...i].map(e=>n.getReward?.(e)??{rewardId:e,name:`地图技#${e}`,description:``}).filter(e=>e.name)}function NE(e,t){let n=(e?.rewards||[]).find(e=>Number(e.cell)===Number(t));return Number(n?.rewardId)||0}function PE(e){let t=0,
n=e;for(;n;)n&=n-1,t+=1;return t}function FE(e,t,n){let r=lE[t],i=[];if(!r)return i;let a=pE(e);for(let e=1;e<=4;e+=1){let t=mE(a.row+r.dy*e,a.col+r.dx*e);if(!t||!n.has(t))break;i.push(t)}return i}function IE(e,t,n){let r=lE[t.param1],i=Number(t.param2)||0;
if(!r||i<=0)return null;let a=pE(e),o=[],s=e;for(let e=1;e<=i;e+=1){let t=mE(a.row+r.dy*e,a.col+r.dx*e);if(!t||!n.cells.has(t))break;o.push(t),s=t}return{dir:t.param1,steps:i,path:o,end:s}}function LE(e,t,n,r,i=0,a=0){let o=FE(e,t,n.cells);
if(!o.length)return null;let s=o[o.length-1],c=Number(i)||0,l=Number(a)||0,u=[],d=null,f=e=>{for(let t of e){let e=n.specials.get(t);!d&&Number(e?.effect)===3&&(d={cell:t,special:e});let i=r.get(t);if(i===void 0)continue;let a=1<<i;c&a||(c|=a)}};
f(o);let p=d;if(p){let e=IE(s,p.special,n);if(e&&e.end!==s){let t=s;s=e.end,f(e.path),u.push({triggerCell:p.cell,from:t,to:e.end,dir:e.dir,steps:e.steps,path:e.path})}}return{pos:s,mask:c&~i,step:{dir:t,from:e,to:s,line:o,specialMoves:u,triggeredMask:l}}}function RE(e,
t,n,r){return cE.map(i=>LE(e,i,t.map,t.rewardIndex,n,r)).filter(e=>!!e)}function zE(e){let t=[];for(let n=e;n?.parent;n=n.parent)n.step&&t.push(n.step);return t.reverse(),{pos:e.pos,mask:e.mask,count:e.count,valueCount:e.count,triggeredMask:e.triggeredMask||0,
diamondCount:e.diamonds||0,path:t}}function BE(e){return(e?.path||[]).map(e=>e?.dir||0).join(`,`)}function VE(e,t){for(let n=e;n;n=n.parent)if(n.stateKey===t)return!0;return!1}function HE(e){let t=new Map;return e.rewardCells.forEach((e,n)=>t.set(e,
n)),t}function UE(e,t){let n=0;for(let r of e){let e=t.get(r);e!==void 0&&(n|=1<<e)}return n}function WE(e,t){let n=0;for(let r of t){let t=fE(r);hE(t)&&Number(e.specials.get(t)?.effect)===3&&(n|=1<<t-1)}return n}function GE(e,t){return Number(t?.effect)===2?!0:e?e.isHealing?!0:/heal|recover|health|hp|回复|体力/i.test(String(e.type??``)):!1}function KE(e,
t){return e.rewards.find(e=>fE(e.cell)===fE(t))??null}function qE(e,t,n){let r=Number(n.hp),i=Number(n.maxHp),a=Number.isFinite(r)&&Number.isFinite(i)&&i>0&&r>=i,o=0;for(let n of e.rewardCells){let r=t.get(n);if(r===void 0)continue;let i=e.specials.get(n),
s=a&&GE(KE(e,n),i);Number(i?.effect)!==3&&!s&&(o|=1<<r)}return o}function JE(e,t){let n=vE(e);if(!n)return{map:{id:0,name:``,cells:new Set,start:0,specials:new Map,rewards:[],rewardCells:[],color:0},rewardIndex:new Map,goalMask:0,startMask:0,
valuableMask:0,triggeredMask:0};let r=fE(t.startCell??n.start);hE(r)&&(n.start=r);let i=HE(n),a=Array.isArray(t.collectedCells)?t.collectedCells.map(fE):[],o=t.includeStartAsCollected===!1?UE(a,i):UE([n.start,...a],i),s=Array.isArray(t.triggeredCells)?t.triggeredCells:a;
return{map:n,rewardIndex:i,goalMask:n.rewardCells.length?(1<<n.rewardCells.length)-1:0,startMask:o,valuableMask:qE(n,i,t),triggeredMask:WE(n,[r,...s])}}function YE(e,t={}){let n=JE(e,t),r=t.valuableOnly?n.valuableMask:n.goalMask,i=cE.includes(Number(t.forcedFirstDirection))?Number(t.forcedFirstDirection):0,
a=i?LE(n.map.start,i,n.map,n.rewardIndex,n.startMask,n.triggeredMask):null,o=!!i&&!a,s=o?{dir:i,from:n.map.start,to:n.map.start,line:[],specialMoves:[],triggeredMask:n.triggeredMask,gainedMask:0}:null,c={pos:n.map.start,mask:n.startMask,count:PE(n.startMask),
depth:0,diamonds:0,parent:null,step:null,triggeredMask:n.triggeredMask,stateKey:`${n.map.start}:${n.startMask}`},l=[c],u=new Map([[c.stateKey,{steps:0,diamonds:0}]]),d=[],f=[],p=Math.max(2,Number(t.maxSolutions)||2);for(let e=0;l.length&&e<1e5;
e+=1){l.sort((e,t)=>e.depth-t.depth||e.diamonds-t.diamonds);let e=l.shift(),t=u.get(e.stateKey);if(t&&t.steps===e.depth&&t.diamonds===e.diamonds){if(f.push(e),(e.mask&r)===r){if(d.push(e),d.length>=p)break;continue}for(let t of RE(e.pos,n,e.mask,
e.triggeredMask)){if(e.depth===0&&i&&!o&&t.step.dir!==i)continue;let n=e.mask|t.mask,r=t.step.triggeredMask||e.triggeredMask,a=`${t.pos}:${n}`,s=e.depth+1,c=e.diamonds+Number(t.step.dir===2),d=u.get(a);VE(e,a)||d&&(d.steps<s||d.steps===s&&d.diamonds<=c)||(u.set(a,
{steps:s,diamonds:c}),l.push({pos:t.pos,mask:n,count:PE(n),depth:s,diamonds:c,parent:e,step:{...t.step,gainedMask:n&~e.mask},triggeredMask:r,stateKey:a}))}}}let m=d.length?d:f.sort((e,t)=>PE(t.mask&r)-PE(e.mask&r)||e.depth-t.depth||e.diamonds-t.diamonds),
h=[],g=new Set;for(let e of m){let t=zE(e);s&&t.path.unshift(s);let n=BE(t);if(!g.has(n)&&(g.add(n),h.push(t),h.length>=p))break}let _=h[0]||zE(c);return{map:n.map,solution:_,solutions:h.length?h:[_],complete:(_.mask&r)===r,targetMask:r,startMask:n.startMask,
valuableMask:n.valuableMask}}function XE(e){let t=Array.isArray(e.handCards)?e.handCards.map((e,t)=>({key:String(e?.key??e?.id??`card-${t}`),id:Number(e?.id)||0,suit:Number(e?.suit??0)||0,name:String(e?.name||e?.displayName||`牌`),displayName:String(e?.displayName||e?.name||`牌`),
kind:e?.kind||yE(e?.name||e?.displayName||``),playable:e?.playable!==!1,selected:!!e?.selected})):[];if(!t.length&&Array.isArray(e.suitCounts)){let n=e.suitCounts;t=cE.flatMap(e=>Array.from({length:Math.max(0,Number(n[e])||0)},(t,n)=>({key:`suit-${e}-${n}`,
id:0,suit:e,name:`${lE[e].name}牌`,displayName:`${lE[e].mark}牌${n+1}`,kind:`other`,playable:!0,selected:!1})))}let n=String(e.forcedFirstCardKey||e.selectedCardKey||``);t=t.filter(e=>e.playable&&e.kind!==`unusable`&&cE.includes(e.suit));let r=new Map;
for(let e of t){let t=`${e.suit}:${e.kind}`,n=r.get(t)??[];n.push(e),r.set(t,n)}let i={other:0,zhuge:1,tao:2,jiu:3,sha:4,shandian:5};return[...r.values()].flatMap(e=>(e.sort((e,t)=>Number(t.key===n)-Number(e.key===n)||e.id-t.id||e.key.localeCompare(t.key)),
e)).sort((e,t)=>e.suit-t.suit||(i[e.kind]??9)-(i[t.kind]??9))}function ZE(e){let t=XE(e),n=new Map,r=String(e.forcedFirstCardKey||e.selectedCardKey||``);for(let e of t){let t=`${e.suit}:${e.kind}`,r=n.get(t)??[];r.push(e),n.set(t,r)}let i={other:0,
zhuge:1,tao:2,jiu:3,sha:4,shandian:5};return[...n.entries()].map(([e,t])=>(t.sort((e,t)=>Number(t.key===r)-Number(e.key===r)||e.id-t.id||e.key.localeCompare(t.key)),{key:e,suit:t[0].suit,kind:t[0].kind,cards:t,total:t.length})).sort((e,t)=>e.suit-t.suit||(i[e.kind]??9)-(i[t.kind]??9))}function QE(e,
t){let n=e.remainingSha,r=e.jiuLeft,i=e.peachLeft,a=e.hasZhuge,o=e.shandianLeft;if(t.kind===`sha`){if(!a&&!(n>0))return null;!a&&n!==1/0&&--n}else if(t.kind===`jiu`){if(!(r>0))return null;--r}else if(t.kind===`tao`){if(!(i>0))return null;--i}else if(t.kind===`shandian`){if(!(o>0))return null;
--o}else t.kind===`zhuge`&&(a=!0);return{remainingSha:n,jiuLeft:r,peachLeft:i,hasZhuge:a,shandianLeft:o}}function $E(e,t={}){let n=ZE(t),r=n.map(e=>e.total),i={remainingSha:t.remainingSha===1/0?1/0:Number.isFinite(Number(t.remainingSha))?Math.max(0,
Number(t.remainingSha)):99,jiuLeft:Number.isFinite(Number(t.jiuLimit??1))?Math.max(0,Number(t.jiuLimit??1)):1,peachLeft:Number.isFinite(Number(t.peachLimit))?Math.max(0,Number(t.peachLimit)):0,hasZhuge:!!t.hasZhugeEquipped,shandianLeft:Number.isFinite(Number(t.shandianLimit))?Math.max(0,
Number(t.shandianLimit)):1},a=String(t.forcedFirstCardKey||t.selectedCardKey||``),o=e?.path||[],s=new Map,c=e=>o.slice(e).map(e=>({...e,available:!1})),l=(e,t,r)=>{if(e>=o.length)return{path:[],availableStepCount:0};let i=o[e];if(!i?.dir)return{path:c(e),
availableStepCount:0};let u=[e,t.join(`,`),r.remainingSha===1/0?`I`:r.remainingSha,r.jiuLeft,r.peachLeft,+!!r.hasZhuge,r.shandianLeft].join(`:`),d=s.get(u);if(d)return d;let f=null;n.forEach((n,o)=>{if(n.suit!==i.dir||t[o]<=0)return;let s=n.cards[n.total-t[o]];
if(e===0&&a&&s?.key!==a)return;let c=QE(r,s);if(!c)return;let u=t.slice();--u[o];let d=l(e+1,u,c),p={path:[{...i,card:s,available:!0},...d.path],availableStepCount:1+d.availableStepCount};(!f||p.availableStepCount>f.availableStepCount)&&(f=p)});
let p=f||{path:c(e),availableStepCount:0};return s.set(u,p),p};return{...e,...l(0,r,i)}}function eD(e,t){let n=e.solution?.path?.length??1/0,r=t.solution?.path?.length??1/0;if(n!==r)return n-r;let i=Number(e.solution?.diamondCount)||0,a=Number(t.solution?.diamondCount)||0;
return i===a?0:i-a}function tD(e,t={}){if(!vE(e))return null;let n=YE(e,{...t,maxSolutions:32}),r=(n.solutions||[]).map(e=>({solution:$E(e,t),valueCount:PE(e.mask&n.valuableMask&~n.startMask)})).filter(e=>e.solution),i=r.filter(e=>(e.solution.path||[]).some(e=>e?.dir)),
a=(i.length?i:r).sort(eD),o=[],s=new Set;for(let e of a){let t=BE(e.solution);if(!s.has(t)&&(s.add(t),o.push(e.solution),o.length>=16))break}let c=$E(n.solution||{pos:n.map.start,mask:0,count:0,triggeredMask:0,path:[]},t);o.length||o.push(c);
let l=o.slice(0,3);return{map:n.map,solution:l[0],solutions:l,complete:(l[0].availableStepCount||0)===(l[0].path||[]).length,valuableMask:n.valuableMask,shortest:n,shortestDepth:(n.solution?.path||[]).length}}function nD(e){let t=[];for(let n of e?.path||[]){if(!n?.dir)continue;
let e=[n.from,...n.line];for(let r=1;r<e.length;r+=1)t.push({from:e[r-1],to:e[r],special:!1,step:n});for(let e of n.specialMoves||[]){let r=[e.from,...e.path];for(let e=1;e<r.length;e+=1)t.push({from:r[e-1],to:r[e],special:!0,step:n})}}return t}function rD(e,
t=0){let n=[0,0,0,0,0],r=e[Number(t)||0]||e[0];if(!r)return n;for(let e of r.path||[]){let t=Number(e?.dir)||0;cE.includes(t)&&Array.isArray(e.line)&&e.line.length&&(n[t]+=1)}return n}function iD(e){let t=String(e?.displayName||e?.name||`牌`).replace(/\uFE0F/g,
``),n=t.match(/([♥♦♠♣])([0-9AJQK]*)/i),r=lE[Number(e?.suit)]?.mark||``,i=n?`${n[1]}${n[2]||``}`:r,a=n?.index??0;return{text:`${i}${(n?`${t.slice(0,a)}${t.slice(a+n[0].length)}`:t)||`牌`}`,suitText:i,red:/[♥♦]/.test(i)}}function aD(e){let t=(e?.path||[]).filter(e=>e?.card).map(e=>iD(e.card).text);
return t.length?`建议牌序：${t.join(`→`)}`:``}function oD(e){let t=(e?.path||[]).filter(e=>e?.card);if(!t.length)return[];let n=[{text:`建议牌序：`,color:`#3B2512`}];return t.forEach((e,t)=>{t>0&&n.push({text:`→`,color:`#0A0A0A`});let r=iD(e.card),i={text:r.text,
color:`#0A0A0A`};r.suitText&&(i.accent=r.suitText),r.red&&(i.accentColor=`#E8402F`),n.push(i)}),n}var sD=216,cD=35,lD=sD/3,uD=`fzltchjw`;function Y(e){return e&&typeof e==`object`?e:null}function dD(e,t,n){let r=e.Laya?.Point;return r?new r(t,
n):{x:t,y:n}}function fD(e,t,n,r){let i=typeof e.localToGlobal==`function`?e.localToGlobal:typeof e.localToScene==`function`?e.localToScene:null,a=typeof t.globalToLocal==`function`?t.globalToLocal:null;if(i&&a&&n.width>0&&n.height>0)try{let o=a.call(t,
i.call(e,dD(r,0,0))),s=a.call(t,i.call(e,dD(r,n.width,n.height))),c=Math.abs(Number(s.x)-Number(o.x)),l=Math.abs(Number(s.y)-Number(o.y));if(Number.isFinite(c)&&Number.isFinite(l)&&c>0&&l>0)return{x:Math.min(Number(o.x),Number(s.x)),y:Math.min(Number(o.y),
Number(s.y)),width:c,height:l,scaleX:c/n.width,scaleY:l/n.height}}catch{}return{x:Number(e.x)||0,y:Number(e.y)||0,width:n.width,height:n.height,scaleX:1,scaleY:1}}function pD(e){return{width:Number((typeof e.getDisplayedBoardPixelWidth==`function`?e.getDisplayedBoardPixelWidth():0)||(typeof e.getBoardPixelWidth==`function`?e.getBoardPixelWidth():0)||Y(e.boardEffectRoot)?.width||(typeof e.getBoardPixelSize==`function`?e.getBoardPixelSize():0)||0)||0,
height:Number((typeof e.getDisplayedBoardPixelHeight==`function`?e.getDisplayedBoardPixelHeight():0)||(typeof e.getBoardPixelHeight==`function`?e.getBoardPixelHeight():0)||Y(e.boardEffectRoot)?.height||(typeof e.getBoardPixelSize==`function`?e.getBoardPixelSize():0)||0)||0}}function mD(e,
t){let n=Y(e.__xcPeiXiuRouteLayer);if(n?.parent)return n;let r=t.Laya?.Sprite,i=Y(e.boardEffectRoot);if(!r||!i)return null;let a=new r;if(a.name=`xcPeiXiuRouteLayer`,a.mouseEnabled=!1,a.mouseThrough=!0,a.zOrder=999,typeof i.addDrawChild==`function`)try{i.addDrawChild(a)}catch{i.addChild?.(a)}else i.addChild?.(a);
return i.sortChildren?.(),e.__xcPeiXiuRouteLayer=a,e.__xcPeiXiuRouteLabels=[],a}function hD(e,t,n){let r=n.Laya?.Sprite,i=Y(e.boardEffectRoot);if(!r||!i)return null;let a=Y(e.__xcPeiXiuRouteControlRoot);if((!a||a.destroyed)&&(a=new r,a.name=`xcPeiXiuRouteControlRoot`,
a.mouseEnabled=!1,a.mouseThrough=!0,a.alpha=1,a.zOrder=1100,e.__xcPeiXiuRouteControlRoot=a),a.parent!==i)try{i.addChild?.(a),i.sortChildren?.()}catch{return null}return a.size?.(t.width||0,(t.height||0)+64),a}function gD(e,t,n,r,i){e.drawLine?.(t.x,
t.y,n.x,n.y,r,i);let a=Math.atan2(n.y-t.y,n.x-t.x),o=Math.max(12,i*2.2),s=Math.PI/6;e.drawLine?.(n.x,n.y,n.x-Math.cos(a-s)*o,n.y-Math.sin(a-s)*o,r,i),e.drawLine?.(n.x,n.y,n.x-Math.cos(a+s)*o,n.y-Math.sin(a+s)*o,r,i)}function _D(e,t){let n=[255,213,74],
r=[255,91,70],i=t>1?Math.max(0,Math.min(1,e/(t-1))):0;return`#${n.map((e,t)=>Math.round(e+(r[t]-e)*i).toString(16).padStart(2,`0`)).join(``)}`}function vD(e,t,n){return n<=1?{x:e.x,y:e.y}:{x:e.x+(t-(n-1)/2)*28,y:e.y-16}}function yD(e,t=0){(e.__xcPeiXiuRouteLabels||[]).forEach((e,
n)=>{n>=t&&(e.visible=!1)})}function bD(e,t,n){let r=Y(e.__xcPeiXiuRouteLayer),i=n.Laya?.Label;if(!r||!i)return null;let a=e.__xcPeiXiuRouteLabels||=[];if(!a[t]){let e=new i;e.mouseEnabled=!1,e.align=`center`,e.valign=`middle`,e.bold=!0,e.font=uD,
e.stroke=2,e.zOrder=1e3,r.addChild?.(e),a[t]=e}return a[t].visible=!0,a[t]}function xD(e,t=16){let n=0;for(let r of String(e||``))/[\u4e00-\u9fff\u3000-\u303f♥♦♠♣→]/.test(r)?n+=Math.round(t*1.1):/[0-9A-Za-z]/.test(r)?n+=Math.round(t*.62):n+=Math.round(t*.56);
return n}function SD(e){return String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function CD(e,t,n,r){let i=hD(e,t,r),a=r.Laya?.Text,o=r.Laya?.Sprite;if(!i||!a||!o)return;let s=cE.filter(e=>Number(n[e]||0)>0),
c=Y(e.__xcPeiXiuRemainingSuitPanel);if((!c||c.destroyed||c.parent!==i)&&(c=new o,c.name=`xcPeiXiuRemainingSuitPanel`,c.mouseEnabled=!1,c.mouseThrough=!0,c.zOrder=121,c.__xcPeiXiuSuitLabels=[],i.addChild?.(c),e.__xcPeiXiuRemainingSuitPanel=c),!s.length){c.visible=!1;
return}let l=xD(`剩余步骤`,18),u=xD(`，`,18),d=s.map(e=>xD(`${Number(n[e]||0)}×${lE[e].mark}`,18)),f=d.reduce((e,t)=>e+t,0)+(s.length-1)*(u+12),p=16+l+f;c.pos?.(Math.max(4,t.width-p-8),-18.5),c.size?.(p,cD),c.graphics?.clear?.();let m=c.__xcPeiXiuSuitLabels||=[],
h=(e,t,n,r,i)=>{let o=m[e];return(!o||o.destroyed)&&(o=new a,o.font=uD,o.fontSize=18,o.bold=!0,o.align=`center`,o.valign=`middle`,o.stroke=2,o.mouseEnabled=!1,o.mouseThrough=!0,c.addChild?.(o),m[e]=o),o.text=t,o.color=n,o.strokeColor=r,o.size?.(i,
cD),o.visible=!0,o};h(0,`剩余步骤`,`#3B2512`,`#D9BE8A`,l).pos?.(8,0);let g=8+l,_=1;s.forEach((e,t)=>{t>0&&(h(_,`，`,`#A88952`,`#D9BE8A`,u).pos?.(g,0),_+=1,g+=u+6);let r=e===1||e===2?`#E8402F`:`#3B2512`;h(_,`${Number(n[e]||0)}×${lE[e].mark}`,r,`#D9BE8A`,
d[t]).pos?.(g,0),_+=1,g+=d[t]+6});for(let e=_;e<m.length;e+=1)m[e]&&(m[e].visible=!1);c.visible=!0}function wD(e,t,n,r,i,a,o){let s=hD(e,t,a),c=a.Laya?.Sprite,l=a.Laya?.Text;if(!s||!c||!l)return;let u=Math.max(1,Math.min(3,n.length||1)),d=lD*u,
f=Y(e.__xcPeiXiuRouteSlider);(!f||f.destroyed||f.parent!==s)&&(f=new c,f.name=`xcPeiXiuRouteSlider`,f.size?.(d,cD),f.mouseEnabled=!1,f.mouseThrough=!0,f.zOrder=120,f.__labels=[`上策`,`中策`,`下策`].map(e=>{let t=new l;return t.mouseEnabled=!1,t.font=uD,
t.fontSize=18,t.bold=!0,t.align=`center`,t.valign=`middle`,t.stroke=2,t.strokeColor=`#163D29`,t.text=e,t.size?.(lD,cD),f.addChild?.(t),t}),s.addChild?.(f),e.__xcPeiXiuRouteSlider=f),f.size?.(d,cD),f.visible=i,f.pos?.(4,-18.5);let p=r>=u?0:r;
f.graphics?.clear?.(),f.graphics?.drawRect?.(0,0,d,cD,`#2A241B`),f.graphics?.drawRect?.(p*lD+2,2,68,31,`#356B86`),f.graphics?.drawRect?.(p*lD+3,32,66,2,`#FFE29A`);for(let e=1;e<u;e+=1)f.graphics?.drawLine?.(e*lD,3,e*lD,32,`#A88952`,1);(f.__labels||[]).forEach((e,
t)=>{e.pos?.(t*lD,0),e.visible=t<u;let r=(n[t]?.path||[]).filter(e=>e?.dir).length;e.text=`${t===0?`上策`:t===1?`中策`:`下策`}${r}`,e.color=t===p?`#FFF6D4`:`#9B927F`});let m=a.Laya?.stage||Y(e.parent)||s,h=Y(e.boardEffectRoot),g=Y(e.__xcPeiXiuRouteSliderHitRoot);
if(!g||g.destroyed){g=new c,g.name=`xcPeiXiuRouteSliderHitRoot`,g.mouseEnabled=!0,g.mouseThrough=!0,g.zOrder=10001,g.__hits=[];for(let t=0;t<3;t+=1){let n=new c;n.name=`xcPeiXiuRouteSliderHit-${t}`,n.mouseEnabled=!0,n.mouseThrough=!1,n.on?.(a.Laya?.Event?.CLICK||`click`,
e,function(e){e?.stopPropagation?.(),o(t)}),g.addChild?.(n),g.__hits.push(n)}e.__xcPeiXiuRouteSliderHitRoot=g}if(g.parent!==m)try{m.addChild?.(g)}catch{}let _=h?fD(h,m,t,a):{x:0,y:0,width:t.width,height:t.height,scaleX:1,scaleY:1},v=d*_.scaleX,
y=cD*_.scaleY;g.pos?.(_.x+4*_.scaleX,_.y+-18.5*_.scaleY),g.size?.(v,y),(g.__hits||[]).forEach((e,t)=>{e.pos?.(t*lD*_.scaleX,0),e.size?.(lD*_.scaleX,y),e.visible=i&&t<u,e.mouseEnabled=e.visible}),g.visible=i,m.sortChildren?.()}function TD(e,
t,n,r){let i=aD(n),a=r.Laya?.stage,o=Y(e.boardEffectRoot),s=r.Laya?.Sprite,c=r.Laya?.HTMLDivElement;if(!i||!a?.addChild||!o||!s||!c){let t=Y(e.__xcPeiXiuCardSequenceLabel);return t&&(t.visible=!1),``}let l=Y(e.__xcPeiXiuCardSequenceLabel);if(!l||l.destroyed||!Y(l.__xcPeiXiuRichTextNode)||Y(l.__xcPeiXiuRichTextNode)?.destroyed){try{l?.destroy?.(!0)}catch{}l=new s,
l.name=`xcPeiXiuCardSequenceLabel`,l.mouseEnabled=!1,l.mouseThrough=!0,l.zOrder=1e4;let t=new c;t.name=`xcPeiXiuCardSequenceRichText`,t.mouseEnabled=!1,t.mouseThrough=!0,Object.assign(Y(t.style)??{},{color:`#0A0A0A`,fontSize:34,fontFamily:uD,
bold:!0,stroke:2,strokeColor:`#D9BE8A`,wordWrap:!1}),t.pos?.(0,3),l.addChild?.(t),l.__xcPeiXiuRichTextNode=t,e.__xcPeiXiuCardSequenceLabel=l}if(l.parent!==a)try{a.addChild?.(l)}catch{return``}let u=fD(o,a,t,r),d=Math.max(240,Math.min(900,u.width+152));
l.pos?.(u.x+4*u.scaleX,u.y+u.height+60*u.scaleY+12),l.size?.(d,56);let f=Y(l.__xcPeiXiuRichTextNode);f?.size?.(d,50),f?.style&&Object.assign(Y(f.style),{width:d,color:`#0A0A0A`,fontSize:34,fontFamily:uD,bold:!0,stroke:2,strokeColor:`#D9BE8A`,
wordWrap:!1});let p=oD(n).map(e=>{let t=String(e.text||``),n=String(e.accent||``),r=n?t.indexOf(n):-1;return r<0?SD(t):`${SD(t.slice(0,r))}<font color='${e.accentColor||`#0A0A0A`}'>${SD(n)}</font>${SD(t.slice(r+n.length))}`}).join(``);return f&&(f.innerHTML=``,
f.innerHTML=p,f.visible=!0,f.layout?.(),f.repaint?.()),l.repaint?.(),a.sortChildren?.(),l.visible=!0,i}function ED(e,t,n){let r=e.__xcPeiXiuSkillBubbleHideTimer;r&&n.clearTimeout?.(r),e.__xcPeiXiuSkillBubbleHideTimer=n.setTimeout?.(()=>{e.__xcPeiXiuSkillBubbleHideTimer=null;
let t=Y(e.__xcPeiXiuSkillBubble);t&&(t.visible=!1)},Math.max(0,t))}function DD(e,t,n,r){let i=r.Laya?.Sprite,a=r.Laya?.Text,o=r.Laya?.stage;if(!i||!a||!o||!t)return;e.__xcPeiXiuSkillBubbleHideTimer&&=(r.clearTimeout?.(e.__xcPeiXiuSkillBubbleHideTimer),
null);let s=Y(e.__xcPeiXiuSkillBubble);if(!s||s.destroyed){s=new i,s.name=`xcPeiXiuSkillBubble`,s.mouseEnabled=!1;let t=new a;t.name=`xcPeiXiuSkillBubbleText`,t.font=uD,t.fontSize=26,t.color=`#FFF6D4`,t.wordWrap=!0,s.addChild?.(t),s.__xcPeiXiuText=t,
e.__xcPeiXiuSkillBubble=s}s.parent!==o&&o.addChild?.(s);let c=Math.min(560,Math.max(260,xD(t,26)+32));s.size?.(c,78),s.graphics?.clear?.(),s.graphics?.drawRect?.(0,0,c,78,`#2A241B`);let l=Y(s.__xcPeiXiuText);l&&(l.text=t,l.fontSize=26,l.size?.(c-28,60),
l.pos?.(14,9));let u=Number(n.x)||0,d=Number(n.y)||0;s.pos?.(u,d-78-8),s.visible=!0}function OD(e,t,n,r,i){let a=i.Laya?.stage,o=Y(e.boardEffectRoot),s=i.Laya?.Label;if(!a?.addChild||!o||!s)return;let c=fD(o,a,t,i),l=e.__xcPeiXiuSkillLabels||=[],
u=n.length?[{name:`已获得：`,description:``},...n.map((e,t)=>({...e,name:`${t?`、`:``}${e.name}`}))]:[],d=Math.max(120,c.width-8),f=[],p=0,m=!1;for(let e of u){let t=Math.max(40,xD(String(e.name||``),32)+12);if(p+t>d){m=!0;break}f.push({...e,width:t}),
p+=t}m&&f.length&&(p+26<=d?f.push({rewardId:0,name:`…`,description:``,width:26}):f.length>1&&(f[f.length-1].name=`${String(f[f.length-1].name||``).replace(/…?$/,`…`)}`));let h=c.x+4*c.scaleX,g=c.y+c.height+60*c.scaleY+12+(r?56:0);f.forEach((t,
n)=>{let r=l[n];(!r||r.destroyed)&&(r=new s,r.name=`xcPeiXiuSkillLabel-${n}`,r.mouseEnabled=!0,r.mouseThrough=!1,r.font=uD,r.fontSize=32,r.bold=!0,r.color=`#0A0A0A`,r.stroke=2,r.strokeColor=`#D9BE8A`,r.align=`left`,r.valign=`top`,r.wordWrap=!1,
r.zOrder=10001,r.on?.(i.Laya?.Event?.ROLL_OVER||`rollover`,r,function(){let t=String(this.__xcPeiXiuSkillDescription||``);t&&DD(e,t,this,i)}),r.on?.(i.Laya?.Event?.ROLL_OUT||`rollout`,r,function(){ED(e,50,i)}),a.addChild?.(r),l[n]=r),r.parent!==a&&a.addChild?.(r),
r.text=t.name,r.__xcPeiXiuSkillDescription=t.description||``,r.fontSize=32,r.size?.(t.width,44),r.pos?.(h+f.slice(0,n).reduce((e,t)=>e+t.width,0),g),r.visible=!0}),l.forEach((e,t)=>{t>=f.length&&(e.visible=!1)}),a.sortChildren?.()}function kD(e){if(!e)return;
Y(e.__xcPeiXiuRouteLayer)?.graphics?.clear?.(),yD(e,0);let t=Y(e.__xcPeiXiuRouteSlider);t&&(t.visible=!1);let n=Y(e.__xcPeiXiuRouteSliderHitRoot);n&&(n.visible=!1);let r=Y(e.__xcPeiXiuCardSequenceLabel);r&&(r.visible=!1),(e.__xcPeiXiuSkillLabels||[]).forEach(e=>{e.visible=!1});
let i=Y(e.__xcPeiXiuSkillBubble);i&&(i.visible=!1);let a=Y(e.__xcPeiXiuRemainingSuitPanel);a&&(a.visible=!1),e.__xcPeiXiuRouteRenderSignature=``}function AD(e,t){if(!e)return;e.__xcPeiXiuSkillBubbleHideTimer&&t?.clearTimeout&&t.clearTimeout(e.__xcPeiXiuSkillBubbleHideTimer);
let n=[e.__xcPeiXiuRouteSliderHitRoot,e.__xcPeiXiuCardSequenceLabel,e.__xcPeiXiuSkillBubble,e.__xcPeiXiuRemainingSuitPanel,...e.__xcPeiXiuSkillLabels||[],e.__xcPeiXiuRouteControlRoot,e.__xcPeiXiuRouteLayer];for(let e of n){let t=Y(e);if(t)try{t.removeSelf?.(),
t.destroy?.(!0)}catch{}}e.__xcPeiXiuRouteLayer=null,e.__xcPeiXiuRouteControlRoot=null,e.__xcPeiXiuRouteLabels=[],e.__xcPeiXiuRouteSlider=null,e.__xcPeiXiuRouteSliderHitRoot=null,e.__xcPeiXiuCardSequenceLabel=null,e.__xcPeiXiuRemainingSuitPanel=null,
e.__xcPeiXiuSkillBubble=null,e.__xcPeiXiuSkillLabels=[],e.__xcPeiXiuRouteCache=null,e.__xcPeiXiuRouteRenderSignature=``,e.__xcPeiXiuRouteVariant=0}function jD(e){let{host:t,planned:n,skills:r,globalObject:i}=e,a=mD(t,i);if(!a)return!1;let o=pD(t),
s=[0,1,2].includes(Number(t.__xcPeiXiuRouteVariant))?Number(t.__xcPeiXiuRouteVariant):0,c=n?.solutions||[];s>=c.length&&(s=0),t.__xcPeiXiuRouteVariant=s;let l=[Y(t.__xcPeiXiuRouteCache)?.key||``,s,c.length,o.width,o.height].join(`|`);if(!e.force&&t.__xcPeiXiuRouteRenderSignature===l)return!1;
t.__xcPeiXiuRouteRenderSignature=l;let u=Y(a.graphics);if(u?.clear?.(),!n||!c.length||!t.getMarkerPos)return kD(t),!0;a.size?.(o.width||0,(o.height||0)+64);let d=c[s]||c[0],f=nD(d),p=[...new Set(f.filter(e=>e.step?.available===!1).map(e=>e.step))],
m=new Map(p.map((e,t)=>[e,t]));for(let e of[...f].sort((e,t)=>Number(e.step?.available!==!1)-Number(t.step?.available!==!1)))gD(u,t.getMarkerPos(e.from),t.getMarkerPos(e.to),e.step?.available===!1?_D(m.get(e.step)||0,p.length):e.special?`#7C5CFF`:`#56E39F`,
e.step?.available===!1?4:3);let h=d?.path||[],g=new Map,_=new Map;h.forEach(e=>{if(!e?.dir)return;let t=e.to;g.set(t,(g.get(t)||0)+1)});let v=0,y=0;h.forEach(e=>{if(!e?.dir)return;y+=1;let n=e.to,r=t.getMarkerPos(e.to),a=_.get(n)||0,o=vD(r,
a,g.get(n)||1);_.set(n,a+1);let s=m.get(e)??-1,c=e.available===!1?_D(s,p.length):`#2FB87A`,l=e.available===!1?_D(s,p.length):`#16734A`;u?.drawCircle?.(o.x,o.y,12,c,l,2);let d=bD(t,v,i);d&&(d.text=String(y),d.fontSize=y>=10?14:16,d.color=e.available===!1?`#5C2A14`:`#0A3D28`,
d.strokeColor=e.available===!1?`#FFFBE8`:`#F2FFF7`,d.size?.(24,22),d.pos?.(o.x-12,o.y-11)),v+=1}),yD(t,v),OD(t,o,r,!!TD(t,o,d,i),i);let b=c.some(e=>(e.path||[]).some(e=>e.dir));return wD(t,o,c,s,b,i,n=>{t.__xcPeiXiuRouteVariant=n,e.onVariantChange?.(n)}),
CD(t,o,rD(c,s),i),!0}function X(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function MD(e){let t=X(e),n=String(X(t?.constructor)?.name||``);return!!t&&(t.name===`PeiXiuMapBackground`||t.name===`peixiuSpBg`||t.resName===`peixiuSpBg`||t._name===`peixiuSpBg`||t.sceneName===`PeiXiuMapBackground`||/PeiXiuMapBackground/i.test(n))}function ND(e){let t=X(e),
n=X(t?.mapState);return!!(t&&n&&n.mapConfig)}function PD(e){let t=X(e);return!!(t&&MD(t)&&ND(t)&&Array.isArray(t.boardCellSlots)&&t.boardEffectRoot&&typeof t.refreshBoardEffectLayer==`function`&&typeof t.getMarkerPos==`function`)}function FD(e){return!e||e.destroyed||e._destroyed||!e.parent&&!e._parent?!1:typeof e._visible==`boolean`?e._visible:e.visible!==!1}function ID(e,
t=new Set,n=2e4){if(!e||typeof e!=`object`||t.size>=n)return null;let r=[e];for(;r.length&&t.size<n;){let e=r.shift();if(!e||typeof e!=`object`||t.has(e))continue;if(t.add(e),PD(e)&&FD(e))return e;let n=X(e);for(let e of[n?.parent,n?._parent,
n?.root,n?.view,n?.content,n?.SpecialBackground,n?.specialBackground,n?.peixiuSpBg,X(n?.currentData)?.SpecialBackground,X(n?.currentData)?.specialBackground])e&&!t.has(e)&&r.push(e);let i=Array.isArray(n?._children)?n._children:Array.isArray(n?.children)?n.children:Array.isArray(n?._childs)?n._childs:[];
for(let e of i)e&&!t.has(e)&&r.push(e)}return null}function LD(e){let t=X(e.mapState),n=X(t?.mapConfig),r=fE(e.displayCurrentPos??t?.currentPos??0);if(hE(r)&&(!n?.HasCell||typeof n.HasCell==`function`&&n.HasCell(r)))return r;let i=fE(n?.precell??n?.PreCell??n?.start??0);
return hE(i)?i:fE(n?.cellID??n?.id??0)}function RD(e){let t=X(e.mapState)?.drawnCells;return(Array.isArray(t)?t:[]).map(fE).filter(hE)}function zD(e){let t=e.patcher??yx(),n=e.globalObject??(typeof window<`u`?window:{}),r=e.pollIntervalMs??800,
i=new Set,a=new WeakMap,o=null,s=!1,c=!1,l=!1,u=!1,d=null,f=new WeakMap,p={gameContext:null,selfSeatId:``,ids:new Set};function m(t,r={}){try{n.__XIAOCHAO_PEIXIU_DEBUG__={at:Date.now(),stage:t,enabled:e.isEnabled(),nodeAttachmentPatched:l,classPatchChecked:c,
patched:s,...r}}catch{}}function h(e){let t=a.get(e);if(t)return t;let n={};for(let t of[`mapState`,`boardEffectRoot`,`parent`,`destroyed`])Object.defineProperty(n,t,{configurable:!0,get:()=>e[t]});return n.getMarkerPos=t=>e.getMarkerPos?.call(e,
t)??{x:0,y:0},n.getDisplayedBoardPixelWidth=()=>e.getDisplayedBoardPixelWidth?.call(e)??0,n.getDisplayedBoardPixelHeight=()=>e.getDisplayedBoardPixelHeight?.call(e)??0,n.getBoardPixelWidth=()=>e.getBoardPixelWidth?.call(e)??Number(X(e.boardEffectRoot)?.width||0),
n.getBoardPixelHeight=()=>e.getBoardPixelHeight?.call(e)??Number(X(e.boardEffectRoot)?.height||0),n.getBoardPixelSize=()=>e.getBoardPixelSize?.call(e)??0,a.set(e,n),n}function g(){!u&&e.isEnabled()&&(d!=null&&n.clearTimeout?.(d),d=n.setTimeout?.(()=>{d=null,
o&&FD(o)&&ee(o,!0)},32)??null)}function _(e,n){if(!e||typeof e[n]!=`function`)return;let r=f.get(e);r||(r=new Set,f.set(e,r)),!r.has(n)&&t.wrap(e,n,e=>function(...t){let n=e.apply(this,t);return g(),n})&&r.add(n)}function v(){let e=X(I(n)),
t=X((X(e?.SelfSeatUi)??X(e?.selfSeatUi))?.cardContainer);if(!t)return;let r=X(Object.getPrototypeOf(t));for(let e of[`layoutCardUIs`,`UpdateSelectCards`,`OnCardCountChanged`,`updateCardUIs`,`refreshCardUIs`])_(r,e);let i=X((Array.isArray(t.handCardUis)&&t.handCardUis.length?t.handCardUis:Array.isArray(t.cardUis)?t.cardUis:[])[0]);
_(X(i&&Object.getPrototypeOf(i)),`setSelected`)}let y=new WeakSet;function b(t){if(!t||typeof t!=`object`||y.has(t))return;let r=t;y.add(t);let i=0,a=()=>{if(u||!e.isEnabled()||r.destroyed||r._destroyed){y.delete(t);return}if(PD(r)){y.delete(t),
m(`map-attached`,{name:r.name,resName:r.resName}),w(r);return}if(i+=1,i>=12){y.delete(t);return}n.setTimeout?.(a,100)};typeof n.requestAnimationFrame==`function`?n.requestAnimationFrame(a):n.setTimeout?.(a,0)}let x=n.setInterval?.(()=>{S()},
r);S();function S(){if(u)return;if(C(),E(),!e.isEnabled()){te();return}let t=I(n),r=e.locator.scene(),i=X(n.Laya)?.stage,a=(PD(o)&&FD(o)?o:null)||ID(t)||ID(r)||ID(i);a&&w(a)||(m(`map-not-found`,{hasGameScene:!!t,hasScene:!!r,hasStage:!!i}),
o&&PD(o)&&FD(o)?e.routeStore?.clear():ne())}function C(){if(l)return;let e=X(X(X(n.Laya)?.Node)?.prototype);e&&typeof e._setParent==`function`&&(l=t.wrap(e,`_setParent`,e=>function(...t){let n=e.apply(this,t),r=t[0],i=X(r),a=MD(this)||!!X(this.mapState)?.mapConfig||i?.peixiuSpBg===this||X(i?.currentData)?.specialBackground===this;
return r&&a&&b(this),n}),m(l?`node-hook-installed`:`node-hook-failed`))}function w(t){if(!FD(t)||!PD(t))return!1;if(o&&o!==t&&ne(),t.__xcPeiXiuRouteOwnerSeatID==null){let r=jE(n,e.locator.gameContext());r&&(t.__xcPeiXiuRouteOwnerSeatID=r)}return i.add(t),
o=t,v(),m(`map-active`,{name:t.name,resName:t.resName,hasMapConfig:!!X(t.mapState)?.mapConfig,boardWidth:Number(X(t.boardEffectRoot)?.width||0),boardHeight:Number(X(t.boardEffectRoot)?.height||0)}),s?ee(t):s=T(t),!0}function T(e){let t=X(e.constructor)?.prototype??X(Object.getPrototypeOf(e));
if(!t)return!1;let n=D(t);return ee(e,!0),n}function E(){if(c)return;let t=e.locator.classPrototype(`PeiXiuMapBackground`);t&&(c=!0,D(t)&&(s=!0))}function D(r){let a=!1;typeof r.renderMapState==`function`&&(a=t.wrap(r,`renderMapState`,t=>function(...n){let r=t.apply(this,
n);return e.isEnabled()&&w(this),r})||a),typeof r.refreshBoardEffectLayer==`function`&&(a=t.wrap(r,`refreshBoardEffectLayer`,t=>function(...n){let r=t.apply(this,n);return e.isEnabled()&&w(this),r})||a),typeof r.HideOnScene==`function`&&(a=t.wrap(r,
`HideOnScene`,t=>function(...n){return kD(h(this)),e.routeStore?.clear(),t.apply(this,n)})||a);let s=typeof r.Destroy==`function`?`Destroy`:typeof r.destroy==`function`?`destroy`:``;return s&&(a=t.wrap(r,s,t=>function(...r){return AD(h(this),
n),i.delete(this),o===this&&(o=null),e.routeStore?.clear(),t.apply(this,r)})||a),a}function ee(t,r=!1){if(!e.isEnabled()||!FD(t)){kD(h(t)),e.routeStore?.clear();return}let i=X(t.mapState)?.mapConfig;if(!i){kD(h(t)),e.routeStore?.clear();return}let a=kE({globalObject:n,
cardLookup:e.cardLookup}),o=vE(i),s=X(e.locator.gameContext())??X(n.GameContext),c=AE(n,s);(p.gameContext!==s||p.selfSeatId!==c)&&(p.gameContext=s,p.selfSeatId=c,p.ids.clear());let l=RD(t);ME({rewards:(o?.rewards||[]).map(e=>({cell:e.cell,rawCell:e.rawCell,
rewardId:e.rewardId,type:e.type}))},l,{getReward:e.getReward},e=>NE(o,e)).forEach(e=>p.ids.add(e.rewardId));let u=[...new Set(l)],d=LD(t),f=bE(i),g=[f,d,u.join(`,`)].join(`#`),_=h(t);t.__xcPeiXiuRouteProgressKey!==g&&(t.__xcPeiXiuRouteProgressKey=g,
_.__xcPeiXiuRouteVariant=0,_.__xcPeiXiuRouteRenderSignature=``,t.__xcPeiXiuRouteCache=void 0);let v=[`planner-v5`,f,d,u.join(`,`),a.handCards.map(e=>[e.key,e.suit,e.kind,+!!e.playable,+!!e.selected].join(`:`)).join(`|`),[a.remainingSha===1/0?`I`:a.remainingSha,
a.jiuLimit,a.peachLimit,a.shandianLimit,+!!a.hasZhugeEquipped,a.hp??`U`,a.maxHp??`U`,a.selectedCardKey].join(`,`)].join(`#`),y=X(t.__xcPeiXiuRouteCache),b;try{b=y?.key===v?y.result:tD(i,{startCell:d,collectedCells:u,handCards:a.handCards,remainingSha:a.remainingSha,
jiuLimit:a.jiuLimit,peachLimit:a.peachLimit,shandianLimit:a.shandianLimit,hasZhugeEquipped:a.hasZhugeEquipped,hp:a.hp,maxHp:a.maxHp,forcedFirstCardKey:a.selectedCardKey})}catch(n){m(`route-plan-failed`,{error:String(n?.stack||n)}),e.routeStore?.clear(),
kD(h(t));return}t.__xcPeiXiuRouteCache={key:v,result:b};let x=[...p.ids].map(t=>e.getReward?.(t)??{rewardId:t,name:`地图技#${t}`,description:``}).filter(e=>e.name);b?e.routeStore?.publish(b,x):e.routeStore?.clear(),m(jD({host:_,planned:b,skills:x,
globalObject:n,force:r,onVariantChange:()=>ee(t,!0)})?`route-rendered`:`route-render-skipped`,{planned:!!b,solutions:b?.solutions.length||0,solutionSteps:b?.solutions.map(e=>e.path.length)||[],rewardCells:b?.map.rewardCells.length||0,complete:b?.complete===!0,
handCards:a.handCards.length,startCell:d,collectedCells:u.length,hasLayer:!!X(_.__xcPeiXiuRouteLayer)?.parent})}function te(){for(let e of i)kD(h(e));o&&kD(h(o)),e.routeStore?.clear()}function ne(){o&&(kD(h(o)),AD(h(o),n),e.routeStore?.clear()),
o=null}return()=>{u=!0,d!=null&&n.clearTimeout?.(d),d=null,x!=null&&n.clearInterval?.(x);for(let e of i)AD(h(e),n);i.clear(),o=null,e.routeStore?.clear(),e.patcher||t.restoreAll()}}var BD={id:`zuifeng`,title:`醉锋`,skillIds:[],spellNames:[`醉锋`]};
function VD(e){return iv(BD,e)}function HD(){let e=new Map;return{noteUse(t){!Number.isInteger(t)||t<0||e.set(t,(e.get(t)??0)+1)},resetSeat(t){e.delete(t)},resetAll(){e.clear()},used(t){return e.get(t)??0}}}function UD(e,t){return!Number.isFinite(e)||e<=0?0:Math.max(0,
Math.floor(e)-(Number.isFinite(t)&&t>0?Math.floor(t):0))}function WD(e,t,n){let r=qD(e);if(!r||!t.length||!GD(r,t))return``;let i=KD(r);return i<=0?``:`醉锋${UD(i,n)}`}function GD(e,t){let n=e.HasSkill;return typeof n==`function`&&t.some(t=>{try{return!!n.call(e,
t)}catch{return!1}})}function KD(e){for(let t of[`MaxHp`,`maxHp`,`MaxHP`,`hpMax`,`HpMax`]){let n=Number(e[t]);if(Number.isFinite(n)&&n>0)return n}for(let t of[`GetMaxHp`,`GetMaxHP`]){let n=e[t];if(typeof n==`function`)try{let t=Number(n.call(e));
if(Number.isFinite(t)&&t>0)return t}catch{}}return 0}function qD(e){return typeof e==`object`&&e?e:null}function JD(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=yx(),a=t.pollIntervalMs??800,o=!1,s=e.get(Fc)===!0,c=null,l=!1,u=[];
u.push(e.subscribe(Fc,({value:e})=>{s=e===!0,s||t.peixiuRouteStore?.clear(),m()})),u.push(WT({isEnabled:()=>s,getConfig:()=>{let e=p();return e?{trigger:e.nanHua.trigger,effectHtml:e.nanHua.effectHtml}:null},locator:r,patcher:i,globalObject:n})),
u.push(QT({isEnabled:()=>s,getEntries:()=>p()?.shiLun??[],resolveSpellName:(e,t)=>t,locator:r,patcher:i,globalObject:n})),u.push(zD({isEnabled:()=>s,locator:r,patcher:i,globalObject:n,cardLookup:{getCard:t.getCard},getReward:e=>p()?.peiXiuRewards[e]??null,
routeStore:t.peixiuRouteStore}));let d=HD();t.gameEvents&&u.push(t.gameEvents.subscribe(e=>{if(e.type===`game-started`||e.type===`game-ended`){d.resetAll(),h();return}if(e.type===`turn-started`){d.resetSeat(e.seatId),h();return}e.type===`spell-targeted`&&VD(I(n)).includes(e.spellId)&&(d.noteUse(e.seatId),
h())}));let f=n.setInterval?.(()=>{g(),m(),h()},a);f!=null&&u.push(()=>n.clearInterval?.(f)),g(),m();function p(){if(c)return c;let e=t.getExtraAssistData?.();if(e)return c=e;let n=t.getSpellExtendRaw?.();return n?c=kg(n):null}function m(){if(o)return;
let e=nh(I(n)?.seatContainer?.seatUIs);if(!s){th(e,`quanyu`);return}eh({key:`quanyu`,targets:e,enabled:!0,getText:e=>HT(e.seat),globalObject:n})}function h(){if(o)return;let e=I(n),t=nh(e?.seatContainer?.seatUIs),r=VD(e);eh({key:`zuifeng`,targets:t,
enabled:!0,getText:e=>{let t=XD(e.seat),n=YD(t);return WD(t,r,n===null?0:d.used(n))},style:{fontSize:16,color:`#FFE14A`,stroke:3,strokeColor:`#1A1004`,align:`center`,bold:!0,bgColor:`#3A2410`,place:e=>{let t=Number(e.width)||90,n=Number(e.height)||120;
return{x:0,y:Math.max(0,n-22),width:t,height:20}}},globalObject:n})}function g(){if(l||o)return;let e=I(n)?.seatContainer?.seatUIs,t=Array.isArray(e)?XD(e[0]):null,r=XD(t?.seat),a=XD(t?.seatAvatar);if(!r||!a)return;let s=Object.getPrototypeOf(r),
c=Object.getPrototypeOf(a);s&&c&&(l=!0,i.wrap(s,`SetSkillBuffInfo`,e=>function(...t){let n=e.apply(this,t);return Number(t[0])===3793&&m(),n}),i.wrap(c,`SetGeneralCard`,e=>function(...t){let n=e.apply(this,t);return m(),h(),n}))}return{dispose(){o=!0;
for(let e of u.splice(0))try{e()}catch{}i.restoreAll(),m(),h()}}}function YD(e){if(!e)return null;for(let t of[`seatID`,`seatId`,`SeatID`,`SeatId`,`index`,`Index`]){let n=Number(e[t]);if(Number.isInteger(n)&&n>=0&&n<255)return n}return null}function XD(e){return e&&typeof e==`object`?e:null}var ZD=Object.freeze({active:!1,
mapName:``,variants:Object.freeze([]),skills:Object.freeze([])}),QD=[`最佳`,`备选一`,`备选二`];function $D(){let e=ZD,t=``,n=new Set;function r(r,i){let a=r.solutions.map((e,t)=>eO(e,t)),o=JSON.stringify([r.map.id,a.map(e=>[e.complete,e.rewardCount,
e.steps.map(e=>[e.suit,e.cardName,e.available,e.to])]),i.map(e=>e.rewardId)]);t===o&&e.active||(t=o,e=Object.freeze({active:!0,mapName:r.map.name||`裴秀地图`,variants:Object.freeze(a),skills:Object.freeze(i.map(e=>Object.freeze({...e})))}),n.forEach(t=>t(e)))}function i(){e.active&&(t=``,
e=ZD,n.forEach(t=>t(e)))}return{getSnapshot:()=>e,publish:r,clear:i,subscribe(e){return n.add(e),()=>n.delete(e)}}}function eO(e,t){let n=rD([e]),r=e.path.filter(e=>e.dir).map(e=>{let t=lE[e.dir]??{name:`未知`,mark:`?`,dx:0,dy:0};return Object.freeze({suit:e.dir,
suitName:t.name,suitMark:t.mark,cardName:e.card?.displayName||e.card?.name||`无可用牌`,from:e.from,to:e.to,cells:Object.freeze([...e.line,...e.specialMoves.flatMap(e=>e.path)]),available:e.available!==!1&&!!e.card,hasWarp:e.specialMoves.length>0})}),
i=e.availableStepCount??r.filter(e=>e.available).length;return Object.freeze({id:t,label:QD[t]??`备选${t}`,complete:i===r.length,availableStepCount:i,totalStepCount:r.length,rewardCount:e.valueCount??e.count,steps:Object.freeze(r),remainingSuits:Object.freeze(cE.map(e=>Object.freeze({suit:e,
name:lE[e].name,mark:lE[e].mark,count:n[e]})))})}var tO=[3,1,0],nO=1200,rO=`系统提示`,iO=`小杀(普通)`;function aO(e){return e%2==0?`skill`:`confirm`}function oO(e){return Number(e)===25}function sO(e){if(!e||typeof e!=`object`)return``;let t=e,n=t.general??t.General??t.card??t.Card;
return String(n?.name??n?.Name??t.name??``)}function cO(e){return Array.isArray(e)?e.find(e=>sO(e)===`黄盖`)??null:null}function lO(e){if(!e||typeof e!=`object`)return 0;let t=e,n=t.Skill??t.skill;return Number(n?.SkillId??n?.ID??n?.id??t.SkillId??t.skillId??0)||0}function uO(e,
t=`_enabled`){if(!e||typeof e!=`object`)return!1;let n=e;return n[t]!==!1&&n.enabled!==!1}function dO(e){return!e||typeof e!=`object`?``:String(e.name??``)}function fO(e){return/btnOK|btnSure|确定|确认|出牌/.test(e)}function pO(e){return/btnCancel|取消|不出|pass/i.test(e)}function Z(e){return e&&typeof e==`object`?e:null}function mO(e,
t){let n=Z(e);if(!n)return!1;let r=(t?.Laya)?.Event?.CLICK||`click`,i={type:r};try{if(typeof n.onMouse==`function`)return n.onMouse(i),!0;if(typeof n.event==`function`)return n.event(r,n.name??i),!0;if(typeof n.onClick==`function`)return n.onClick(),!0;
if(typeof n.click==`function`)return n.click(),!0}catch{return!1}return!1}function hO(e,t){let n=Z(e);if(!n)return!1;try{if(typeof n.onMouse==`function`)return n.onMouse({type:`click`}),!0}catch{}try{if(typeof n.event==`function`)return n.event(`click`,
String(n.name||`click`)),!0}catch{}try{if(typeof n.onClick==`function`){let e=(t?.Laya)?.Event?.CLICK||`click`;return n.onClick({type:e}),!0}}catch{}return!1}function gO(e,t){let n=Z(e.seatListView)?.seatList;if(!Array.isArray(n))return null;
let r=n.map(Z).filter(e=>!!e);if(t>0){let e=r.find(e=>{let n=CO(e);return Number(n?.clientId??n?.ClientId??n?.userID??n?.UserID??n?.playerid??n?.playerID??0)===t});if(e)return e}let i=r.find(e=>{let t=CO(e);return!!(e.isSelf||e.IsSelf||t?.isSelf||t?.IsSelf)});
if(i)return i;let a=r.filter(e=>{let t=CO(e);return!!(t?.isMaster||t?.IsMaster)});return a.length===1?a[0]:null}function _O(e){let t=Z(e.seatListView)?.seatList;return Array.isArray(t)?t.map(Z).filter(e=>!!e&&!e.WaitInfo&&!e.waitInfo):[]}var vO=0;
function yO(e,t,n){if(Date.now()<vO)return!0;let r=_O(t);if(!r.length)return!1;let i=Z(t.seatListView),a=n?.setTimeout?.bind(n)??setTimeout;return r.forEach((r,o)=>{a(()=>{if(typeof i?.showBtns==`function`&&i.showBtns(r),typeof i?.addAiHandler==`function`)try{i.addAiHandler(1,
r)}catch{}hO(t.addAiBtn,n),AO(e,rO,iO)},o*200)}),vO=Date.now()+r.length*200+600,!0}function bO(e){let t=Z(e.layer(`PromptLayer`)?.confirmWin)??Z(e.window(`ConfirmWindow`));if(!t||String(Z(t.confirmData)?.title??``)!==`提示`)return!1;let n=(t.buttonArr||[]).map(Z).find(e=>String(e?.label??``)===`取消`);
if(!n)return!1;let r=n.callBack;return typeof r==`function`?(r.apply(n.thisObject??t,n.args||[]),!0):hO(n)}function xO(e){let t=Id(e??(typeof window<`u`?window:{}));return t?.IsTableScene?Z(t.CurrentScene):null}function SO(e,t){let n=e.manager(`UserInfoManger`),
r=e.gameContext()??Z(t??{})?.GameContext;return Number(n?.myID??n?.MyID??n?.userID??n?.UserID??Z(r)?.myID??Z(r)?.UserID??0)||0}function CO(e){return Z(e?.WaitInfo)??Z(e?.waitInfo)}function wO(e){if(e.destroyed||e.visible===!1)return`skipped`;
let t=cO(e.generalUis);if(!t)return`missing`;if(e.__xcHgSelectedGeneralUi===t)return`skipped`;let n=Z(t),r=typeof n?.onClickGeneralCard==`function`?()=>n.onClickGeneralCard():typeof e.onClickGeneralCard==`function`?()=>e.onClickGeneralCard(t):null;
if(!r)return`missing`;e.__xcHgSelectedGeneralUi=t;try{return r(),setTimeout(()=>{e.destroyed||e.visible===!1||e.__xcHgSelectedGeneralUi===t&&r()},500),`picked`}catch{return delete e.__xcHgSelectedGeneralUi,`missing`}}function TO(e){return[e.skillItems,
e.SkillItems,Z(e.skillBar)?.skillItems,Z(e.SkillBar)?.skillItems].find(Array.isArray)??[]}function EO(e,t,n){let r=TO(e).find(e=>lO(e)===t);return r?mO(r,n):!1}function DO(e,t,n){for(let r of t){let t=Z(e[r]);if(t&&uO(t,`_enabled`))return mO(t,
n)}return!1}function OO(e,t){let n=Z(e.buttonBar)?.btnList||[],r=n.find(e=>pO(dO(e))&&uO(e,`_enabled`));if(r)return mO(r,t);let i=n.find(e=>fO(dO(e))&&uO(e,`_enabled`));return i?mO(i,t):DO(n,tO,t)}function kO(e,t){let n=Z(I(e)),r=Z(n?.SelfSeatUi)??Z(n?.selfSeatUi),
i=Z(r?.seat)??Z(r?.Seat);if(!r||!i)return`idle`;let a=typeof i.HasSkill==`function`?i.HasSkill:typeof i.hasSkill==`function`?i.hasSkill:null;if(!(a?a.call(i,62):TO(r).some(e=>lO(e)===62)))return OO(r,e),`deal`;let o=aO(t);if(o===`skill`)EO(r,62,
e);else{let t=Z(r.buttonBar)??Z(r.ButtonBar);DO(t?.btnList||t?.buttons||[],tO,e)}return o}function AO(e,t,n){let r=Z(e.layer(`PromptLayer`)?.confirmWin)??Z(e.window(`ConfirmWindow`));if(!r)return!1;let i=Z(r.confirmData);if(i&&String(i.title??``)&&String(i.title)!==t)return!1;
let a=(r.buttonArr||[]).map(Z).find(e=>String(e?.label??``)===n);if(!a)return!1;let o=a.callBack;return typeof o==`function`?(o.apply(a.thisObject??r,a.args||[]),!0):mO(a)}function jO(e){let t=Z(e.dianjiangView);if(!e.__xcDianjiangOpened&&typeof t?.openDianjiang==`function`)try{t.openDianjiang(),
e.__xcDianjiangOpened=!0}catch{e.__xcDianjiangOpened=!1}}function MO(e,t,n={}){let r=xO(t);if(!r)return`idle`;let i=Z(r.seatListView)?.seatList;if(!Array.isArray(i)||!i.length||!r.startUI)return`idle`;let a=CO(gO(r,SO(e,t)));return a?!a.isMaster&&!a.IsMaster?(!a.isReady&&!a.IsReady&&mO(Z(r.startUI)?.readyBtn,
t),`ready`):n.fillAi&&(bO(e)||(jO(r),yO(e,r,t)))?`waiting`:hO(Z(Z(r.startUI)?.startBtn),t)?`started`:`waiting`:`waiting`}function NO(e,t){return MO(e,t,{fillAi:!0})}function PO(e){return e.window(`SelectGeneralWindow`)??e.findWindows(`SelectGeneralWindow`)[0]??null}function FO(e){return e&&typeof e==`object`?e:null}function IO(e,
t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=t.pollIntervalMs??400,a=!1,o=e.get(Lc)===!0,s=0,c=0,l=0,u=0,d=new Set,f=[];f.push(e.subscribe(Lc,({value:e})=>{o=e===!0,h(),l=0,o&&v(0)})),t.gameEvents&&f.push(t.gameEvents.subscribe(e=>{o&&!a&&(e.type===`game-ended`&&v(nO),
e.type===`game-started`&&(c=0))}));let p=n.setInterval?.(()=>y(),i);p!=null&&f.push(()=>n.clearInterval?.(p)),o&&v(0);function m(){return s}function h(){return s+=1,s}function g(e){return!a&&o&&s===e}function _(e,t){let n=m(),r=setTimeout(()=>{d.delete(r),
g(n)&&e()},t);d.add(r)}function v(e){let t=m();_(()=>{g(t)&&xO(n)&&NO(r,n)},e)}function y(){if(a||!o)return;let t=PO(r);if(t&&Array.isArray(t.generalUis)&&t.generalUis.length){if(wO(t)===`missing`){l+=1,l>=8&&(console.warn(`[盖主速刷] 本次选将未找到黄盖，已停止`),
e.set(Lc,!1));return}l=0}if(xO(n)){let e=Date.now();e-u>=2e3&&(u=e,NO(r,n))}}let b=n.setInterval?.(()=>{!a&&o&&(kO(n,c),c+=1)},500);return b!=null&&f.push(()=>n.clearInterval?.(b)),{filterMessage(t,n){if(!o||a||n!==`ClientLeavetableRep`)return;
let r=FO(t.ProtoObj)??FO(t.protoObj)??t;oO(r.Why??r.why)&&(console.warn(`[盖主速刷] 房主长时间未开局，已被请出房间，已自动关闭`),e.set(Lc,!1))},dispose(){a=!0,o=!1,h();for(let e of d)clearTimeout(e);d.clear();for(let e of f.splice(0))try{e()}catch{}}}}function LO(e,
t){return{key:e,firstSeenAt:t,fallbackLevel:0,localStartedAt:0,lastOfficialActionAt:0,trusteeRequestedAt:0,trusteeAttempts:0}}function RO(e,t,n){return!e||e.key!==t?LO(t,n):e}function zO(e,t,n){if(n.officialActed)return{...e,lastOfficialActionAt:t};
if(e.fallbackLevel===0){let r=t-e.firstSeenAt;return!n.officialAvailable||r>=1e3?{...e,fallbackLevel:1,localStartedAt:t}:e}return e.fallbackLevel===1&&e.localStartedAt&&t-e.localStartedAt>=3e3?{...e,fallbackLevel:2}:e}function BO(e,t,n){return!(!n||e.fallbackLevel<2||e.trusteeAttempts>=1||e.trusteeRequestedAt&&t-e.trusteeRequestedAt<3e3)}function VO(e){return e.enabled?e.modeType===74||/身份(?:军争)?演武|军争演武/.test(String(e.modeLabel||``))?!0:e.trusteeAiManual===!1&&e.canOpenAiHelp===!1?!1:e.trusteeAiManual===!0||e.canOpenAiHelp===!0||e.trusteeAiManual!==!1:!1}function HO(...e){let t=[];
for(let n of e){let e=Array.isArray(n)?n:n==null||n===``?[]:[n];for(let n of e){let e=Number(n);Number.isFinite(e)&&e!==0&&t.push(e)}}return t}function UO(e,t=``){return[e.skillId||0,e.cardIds.join(`,`),e.seatIds.join(`,`),e.buttonName||``,
e.optionIndex??``,+!!e.actionable,t].join(`|`)}function WO(e){return!Array.isArray(e)||!e.length?null:e.find(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return t.CanSelect!==!1&&t.visible!==!1})??e[0]}function GO(e,t,n){return[`铁索`].includes(e)?[0]:[`无懈`,
`国无`].includes(e)&&n?[3,1,0,2]:([`桃`,`粽`,`生死`].includes(e)||e===`落井`)&&t?[1,2,3,0]:[0,1,2,3]}var KO=new Set([358,7001,7002,7003,7004,7005,7007,7008]);function qO(e){if(e.sceneName===`RogueLike1v1Scene`)return 11;let t=String(e.modeLabel||``);
return t.includes(`国战老友`)?28:t.includes(`身份老友`)?29:1}function JO(e){let t=String(e||``).replace(/\s/g,``);return t.includes(`国战演武`)||t.includes(`身份演武`)||t.includes(`欢乐`)&&!t.includes(`演武`)?`identity-drill`:`none`}function YO(e){return e>=3?`小杀(王者)`:e===2?`小杀(高级)`:`小杀(普通)`}function XO(e,
t={}){e.showMoreHandler?.();let n=e.modeBox?.labels;if(Array.isArray(n)&&n.length&&e.modeBox){let r=t.preferIdentity?n.findIndex(e=>String(e).trim()===`自选身份`):-1;e.modeBox.selectedIndex=r>=0?r:n.length-1}e.timeBox&&(e.timeBox.selectedIndex=1),
e.banItemBox&&(e.banItemBox.selected=!0),e.passwordInput&&(e.passwordInput.text=`439`)}function ZO(e,t,n=KO){let r=e.filter(e=>e>0&&!n.has(e));return t>0&&r.includes(t)?t:r.find(e=>e!==t)||0}function QO(e,t=0){return e.every((e,n)=>n===t||!!e.ai)}var $O=2;
function ek(e){return e&&typeof e==`object`?e:null}function tk(e,t){let n=e.manager(`GameGeneralManager`);if(!n||typeof n.HasGeneral!=`function`)return!0;try{return!!n.HasGeneral(t)}catch{return!0}}function nk(e,t){let n=[];for(let r of e){let e=ek(r);
if(!e||Number(e.flags)!==2048)continue;let i=Number(e.characterId??e.CharacterId??0);i>0&&!KO.has(i)&&tk(t,i)&&(e.completed===!0||Number(e.finishTime)>0||n.push(i))}return n}function rk(e,t){if(typeof e.clearFigureState!=`function`||typeof e.updateAllFigureState!=`function`||typeof e.getfigureState!=`function`)return!1;
try{return e.figureId=$O,e.clearFigureState(),e.event?.(`DJ_TAP_FIGURE_CHANGE`,$O),t>0&&typeof e.updateAllFigureState==`function`&&e.updateAllFigureState(t),e.event?.(`DJ_SELECT_GENERAL`,{ItemID:t,Id:t}),e.saveFigureConfiger?.(),Number(e.getfigureState($O)||0)===t||t===0}catch{return!1}}function ik(e,
t,n,r=0){let i=ek(t.dianjiangView),a=ek(i?.figureManager)??ek(i?.manager)??ek(t.figureManager);if(!i||!a)return 0;if(typeof i.onOpenDJClick==`function`)try{i.onOpenDJClick()}catch{}let o=ZO(n,r);return!o||typeof a.canDianJiang==`function`&&!a.canDianJiang()||!rk(a,
o)?0:(t.__xcBaiShengDianjiang={generalId:o,at:Date.now()},o)}function ak(e){let t=ek(e.XC),n=ek(t?.cardConfig)??ek(t?.CardConfig)??ek(e.__XIAOCHAO_CARD_CONFIG__),r=n?.Ach??n?.ach;return Array.isArray(r)?r:[]}function ok(e){return e&&typeof e==`object`?e:null}function sk(e){return e.deadSeatId===e.selfSeatId&&QO(e.seats.slice(1),-1)}function ck(e,
t){let n=ok(ok(ok(I(t))?.SelfSeatUi)?.seat);return Number(n?.SeatID??n?.seatID??n?.index??-1)}function lk(e){return(ok(ok(I(e))?.seatContainer)?.seatUIs||[]).map(e=>ok(e)??{})}function uk(e,t){let n=mO(ok(ok(ok(I(t))?.topMenu)?.backBtn),t);
return AO(e,`退出游戏`,`确定`),n}function dk(){return{managedRoom:!1,kind:1,lastHallMark:``,lastCreateAt:0,lastStartAt:0,baiShengGeneralId:0,aiPromptDone:!1}}function Q(e){return e&&typeof e==`object`?e:null}function fk(e){return Q(Id(e)?.CurrentScene)}function pk(e){if(typeof e==`string`||typeof e==`number`)return String(e);
let t=Q(e);return String(t?.text??t?.label??``)}function mk(e,t){let n=pk(t);n&&/[\u4e00-\u9fff]/.test(n)&&e.push(n)}function hk(e,t,n=0){let r=Q(e);if(!r||n>3||t.length>24)return;mk(t,r.text),mk(t,r.label),mk(t,r.name);let i=r._childs||r._children;
if(Array.isArray(i))for(let e of i)hk(e,t,n+1)}function gk(e,t,n=0){let r=Q(e);if(!r||n>6||t.length>24)return;if((r.selected===!0||r.Selected===!0)&&hk(r,t),Array.isArray(r.labels)&&r.selectedIndex!=null){let e=r.labels[Number(r.selectedIndex)];
e!=null&&mk(t,e)}let i=r._childs||r._children;if(Array.isArray(i))for(let e of i)gk(e,t,n+1)}function _k(e){let t=Q(e);if(!t)return!1;try{if(typeof t.onMouse==`function`)return t.onMouse({type:`click`}),!0;if(typeof t.event==`function`)return t.event(`click`,
t.name),!0;if(typeof t.onClick==`function`)return t.onClick(),!0}catch{return!1}return!1}function vk(e,t=0){let n=Q(e);if(!n||t>2)return``;let r=[n.text,n.label,n.name,n.roomName,n.RoomName].map(pk).filter(e=>/[\u4e00-\u9fff]/.test(e));if(r.length)return r.join(``);
let i=n._childs||n._children;return Array.isArray(i)?i.map(e=>vk(e,t+1)).filter(Boolean).join(``):``}function yk(e){let t=Q(e?.roomListView),n=t?.roomUis||t?.itemUis||t?.roomList||t?.list;return Array.isArray(n)?n.slice(0,12).map(e=>vk(e)).filter(Boolean):[]}function bk(e){let t=e.join(``);
return t.includes(`身份演武`)?`身份演武`:t.includes(`国战演武`)?`国战演武`:t.includes(`欢乐`)?`欢乐`:``}function xk(e,t,n=0){let r=Q(e);if(!r||n>8||t.length>8)return;let i=Number(r.selectIndex??r.selectedIndex??r.tabIndex),a=r.btnList||r.tabBtns||r.tabs||r.labels;
if(Number.isInteger(i)&&i>=0&&Array.isArray(a)&&a.length>i&&a.length<=16){let e=typeof a[i]==`string`?String(a[i]):vk(a[i]);e&&t.push(e)}let o=r._childs||r._children;if(Array.isArray(o))for(let e of o)xk(e,t,n+1)}function Sk(e,t){let n=Q(e?.roomListView),
r=[];gk(e,r),gk(n,r);let i=null;try{let e=t?.gameContext();i=typeof e?.GetModeVO==`function`?Q(e.GetModeVO()):null}catch{i=null}let a=[];return xk(e,a),[...a,pk(Q(Q(e?.topMenu)?.areaServerLabel)?.text),pk(e?.modeName),pk(n?.modeName),pk(n?.modeLabel),
pk(n?.title),pk(n?.nameTxt),pk(i?.ModeName??i?.modeName??i?.Name??i?.name),bk(yk(e)),...r].filter(Boolean).join(` `)}function Ck(e){let t=e.manager(`UserInfoManger`);return Number(t?.officerLevel??t?.OfficerLevel??0)||0}function wk(e){return Q(e?.WaitInfo)??Q(e?.waitInfo)}function Tk(e,
t){let n=e.map(Q).filter(e=>!!e);if(t>0){let e=n.find(e=>{let n=wk(e);return Number(n?.clientId??n?.ClientId??n?.userID??n?.UserID??n?.playerid??n?.playerID??0)===t});if(e)return e}let r=n.find(e=>{let t=wk(e);return!!(e.isSelf||e.IsSelf||t?.isSelf||t?.IsSelf)});
if(r)return r;let i=n.filter(e=>{let t=wk(e);return!!(t?.isMaster||t?.IsMaster)});return i.length===1?i[0]:null}function Ek(e,t){let n=Q(e.seatListView),r=[...jk(e)].reverse().find(e=>e.empty)?.seat;if(!r||!n)return!1;if(typeof n.showBtns==`function`&&n.showBtns(r),
typeof n.sitHandler==`function`)try{return n.sitHandler(),!0}catch{return!1}return mO(r,t)}var Dk=new WeakMap,Ok=0;function kk(e,t,n=1){let r=Q(e.seatListView);if(!r||typeof r.addAiHandler!=`function`)return!1;let i=Dk.get(t)??0;if(Date.now()-i<800)return!1;
Dk.set(t,Date.now()),typeof r.showBtns==`function`&&r.showBtns(t);try{return r.addAiHandler(n,t),!0}catch{return!1}}function Ak(e,t){let n=Number(e.seatId??e.SeatId??e.seatID??e.index??e.Index);return Number.isFinite(n)&&n>0?n:t+1}function jk(e){let t=(Q(e.seatListView)?.seatList||[]).map((e,
t)=>{let n=Q(e);return n?{seat:n,index:t,raw:Number(n.seatId??n.SeatId??n.seatID??n.index??n.Index),empty:!n.WaitInfo&&!n.waitInfo}:null}).filter(e=>!!e),n=t.some(e=>e.raw===0);return t.map(e=>({seat:e.seat,empty:e.empty,number:n?Number.isFinite(e.raw)?e.raw+1:e.index+1:Ak(e.seat,
e.index)}))}function Mk(e){let t=Q(e.layer(`PromptLayer`)?.confirmWin)??Q(e.window(`ConfirmWindow`));if(!t)return!1;let n=Q(t.confirmData);if(String(n?.title??``)!==`提示`)return!1;let r=(t.buttonArr||[]).map(Q).find(e=>String(e?.label??``)===`取消`);
if(!r)return!1;let i=r.callBack;return typeof i==`function`?(i.apply(r.thisObject??t,r.args||[]),!0):mO(r)}function Nk(e,t){let n=Q(e.startUI),r=Q(n?.startBtn);if(r&&r.enabled!==!1){let e=t.Laya?.Event?.CLICK||`click`;if(typeof r.onClick==`function`)try{return r.onClick({type:e}),!0}catch{}if(mO(r,
t))return!0}for(let e of[`onStartClick`,`startHandler`,`onClickStart`]){let t=n?.[e];if(typeof t==`function`)try{return t.call(n),!0}catch{}}return!1}function Pk(e,t){let n=(e._childs||e._children||[]).map(Q).find(e=>e&&String(e.name)===`zgs_robot_tex`);
if(!n)return!1;if(!mO(n,t)&&typeof e.onBtnClick==`function`)try{e.onBtnClick(n)}catch{}let r=Q(e.btnListGo)??Q(t.gamescene)?.btnListGo;if(r&&typeof r.onTouch==`function`)try{return r.onTouch(1),!0}catch{return!1}return!0}function Fk(e,t){let n=Q(t.roomListView);
if(typeof n?.onShowOfWindow==`function`)try{n.onShowOfWindow()}catch{}let r=e.window(`CreatOFRoomWindow`)??e.findWindows(`CreatOFRoomWindow`)[0];if(!r||typeof r.sureCreate!=`function`)return!1;try{return r.sureCreate(),!0}catch{return!1}}function Ik(e,
t,n=0){let r=Q(e);if(!r||n>8)return null;if(pk(r.text??r.label).replace(/\s/g,``)===t)return r;let i=r._childs||r._children;if(!Array.isArray(i))return null;for(let e of i){let r=Ik(e,t,n+1);if(r)return Q(r)?.parent??r}return null}function Lk(e,
t,n,r){let i=e.window(`CreateTableWindow`)??e.findWindows(`CreateTableWindow`)[0];if(!i){let e=Q(t.roomListView);return!_k(e?.createRoomSBtn)&&!_k(e?.createBtn)&&!_k(Ik(t,`创建房间`))&&mO(e?.createRoomSBtn,n),!1}return XO(i,{preferIdentity:r}),
_k(i.sureBtn)||mO(i.sureBtn,n),!0}function Rk(e,t,n,r){let i=fk(t);if(!i)return n;let a=String(i.SceneName||``);if(a===`RogueLike1v1Scene`)return n.lastHallMark===a&&r-n.lastCreateAt<8e3?{...n,kind:11}:(Pk(i,t),{...n,kind:11,managedRoom:!0,
lastHallMark:a,lastCreateAt:r});if(!i?.roomListView)return n;let o=JO(Sk(i,e));if(o===`none`)return n;let s=`${a}:${o}`;return n.lastHallMark===s&&r-n.lastCreateAt<8e3?n:o===`country`?Fk(e,i)?{...n,kind:28,managedRoom:!0,lastHallMark:s,lastCreateAt:r}:n:Lk(e,
i,t,!0)?{...n,kind:1,managedRoom:!0,lastHallMark:s,lastCreateAt:r}:n}function zk(e,t,n,r){let i=xO(t);if(!i){let e=fk(t);return e&&String(e.SceneName)===`TableScene`&&Ek(e,t),n}let a=Q(i.seatListView)?.seatList;if(!Array.isArray(a)||!a.length||!i.startUI)return n;
let o=qO({sceneName:String(i.SceneName||``),modeLabel:Sk(i)}),s={...n,kind:o};if(r.baiSheng&&r.onBaiSheng){let e=r.onBaiSheng(i,n.baiShengGeneralId);e&&(s.baiShengGeneralId=e)}let c=Tk(a,SO(e,t)),l=Q(c?.WaitInfo)??Q(c?.waitInfo),u=/身份演武|国战演武|欢乐/.test(Sk(i)),
d=jk(i),f=!!c&&d[d.length-1]?.seat===c;if(s.managedRoom||u){if(Mk(e))return s;if(!f)return Ek(i,t),s}if(!l)return s;if(!l.isMaster&&!l.IsMaster)return!l.isReady&&!l.IsReady&&mO(Q(i.startUI)?.readyBtn,t),s;if(s.managedRoom||u){if(Date.now()<Ok)return s;
let t=jk(i),n=Ck(e)>=23?3:2,a=t.filter(e=>e.empty).map(e=>({seat:e.seat,level:e.number>=t.length/2?n:1})).sort((e,t)=>t.level-e.level);if(a.length){let t=r.schedule??(e=>e());return a.forEach((n,r)=>{t(()=>{kk(i,n.seat,n.level),AO(e,rO,YO(n.level))},
r*200)}),t(()=>{_k(i.addAiBtn),AO(e,rO,YO(1))},a.length*200),Ok=Date.now()+(a.length+1)*200+400,s}}return(s.managedRoom||u)&&jk(i).some(e=>e.empty)||I(t)||Nk(i,t),s}function $(e){return e&&typeof e==`object`?e:null}function Bk(e,t){return String(e)===String(t)}function Vk(e){let t=$(e),
n=$(t?.Card)??$(t?.theCard)??t;return Number(n?.CardId??n?.cardId??n?.ID??n?.id??0)||0}function Hk(e){let t=$(e),n=$(t?.seat)??$(t?.Seat)??t;return Number(n?.SeatID??n?.seatID??n?.index??t?.seatID??0)}function Uk(e){let t=$(e),n=$(t?.Card)??t;
return String(n?.CardName??n?.cardName??n?.name??``).replace(/[♠♥♣♦0-9AJQK]+$/g,``)}function Wk(e){let t=$(e);return!!(t?.selected||$(t?.Card)?.Selected||$(t?.seat)?.Selected)}function Gk(e){let t=$(e),n=$(t?.Card),r=t?.activated??t?.Activated??n?.activated??n?.Activated;
return r===!0||r===1}function Kk(e,t){try{if(typeof e.onMouse==`function`)return e.onMouse({type:t}),!0;if(typeof e.event==`function`)return e.event(t,t===`click`?e.name:e),!0}catch{return!1}return!1}function qk(e){let t=$(e);if(!t)return!1;
try{if(typeof t.setSelected==`function`)return t.setSelected(!0),!0;if(typeof t.CardUI_Click==`function`)return t.CardUI_Click(null),!0}catch{return!1}return Kk(t,`click`)}function Jk(e){let t=$(e);if(!t)return!1;if(typeof t.seatClickHandler==`function`)try{return t.seatClickHandler(),!0}catch{return!1}return Kk(t,
`SELECTE`)}function Yk(e){let t=$(e);if(!t)return!1;if(typeof t.onClick==`function`)try{return t.onClick(),!0}catch{return!1}return Kk(t,`click`)}function Xk(e,t,n){let r=e.map($).find(e=>e&&(e.name===t||String(e.name)===t));return!r||!uO(r,
`_enabled`)?!1:Yk(r)}function Zk(e,t,n){for(let n of t){let t=$(e[n]);if(t&&uO(t,`_enabled`))return Yk(t)}return!1}function Qk(e,t,n,r,i){let a=$(e.CurStepHelpData)??$(e.curStepHelpData),o=$(a?.protocol),s=HO(a?.cardIds,a?.CardIDs,o?.CardIDs,
o?.CardID),c=HO(a?.completeSeatIds,a?.seatIds,o?.DestSeatIDs,o?.SeatIDs),l=String(o?._className_??o?.className??``),u=/UseCard/i.test(l)?void 0:Number(a?.skillId??a?.SkillId??0)||void 0,d=String(a?.buttonName||``)||void 0,f=a?.optionIndex??a?.OptionIndex,
p=f==null||f===``?void 0:Number(f),m=Array.isArray(a?.cardUis)?a.cardUis:[],h=a?.target,g=i?.visible===!0;return{skillId:u,cardIds:s,seatIds:c,buttonName:d,optionIndex:p,actionable:!!(u||s.length||m.length||c.length||d||h||g&&p!==void 0)}}function $k(e,
t,n,r,i,a,o){if(!e.actionable)return`absent`;let s=($(t.CurStepHelpData)??$(t.curStepHelpData))?.target;if(s&&typeof s==`object`){let e=$(s);return a?.visible&&Array.isArray(a.btnList)&&a.btnList.includes(s)?!uO(e,`_enabled`)||typeof a.btnClick!=`function`?`invalid`:(a.btnClick(s),
`acted`):r.includes(s)?uO(e,`_enabled`)?(Yk(e),`acted`):`invalid`:typeof e?.CardUI_Click==`function`?(e.CardUI_Click(null),`acted`):typeof e?.seatClickHandler==`function`?(e.seatClickHandler(),`acted`):(e&&Kk(e,`click`),`acted`)}if(e.skillId){let t=i.find(t=>Bk(lO(t),
e.skillId));if(t&&!Wk(t))return Gk(t)?(Kk($(t),`click`),`acted`):`waiting`}if(e.cardIds.length){let n=$(t.cardContainer),i=[...n?.activatedCardtems||[],...n?.cardUis||[],...n?.handCardUis||[]];if(e.cardIds.some(e=>!i.some(t=>Bk(Vk(t),e))))return`waiting`;
let s=i.find(t=>e.cardIds.some(e=>Bk(Vk(t),e))&&!Wk(t));if(s)return Gk(s)?(qk(s),!e.seatIds.length&&!e.buttonName&&e.optionIndex===void 0&&!a?.visible&&Xk(r,`btnOK`,o),`acted`):`invalid`}if(e.seatIds.length){let t=e.seatIds.map(e=>n.find(t=>Bk(Hk(t),
e)));if(t.some(e=>!e))return`invalid`;let r=t.find(e=>e&&!Wk(e));if(r&&Gk(r))return Jk(r),`acted`}if(e.buttonName)return Xk(r,e.buttonName,o)?`acted`:`waiting`;if(a?.visible&&e.optionIndex!==void 0){let t=$(a.btnList?.[e.optionIndex]);return!t||!uO(t,
`_enabled`)||typeof a.btnClick!=`function`?`invalid`:(a.btnClick(t),`acted`)}return`absent`}function eA(e,t,n,r,i){let a=$(e.cardContainer),o=$(a?.SelectContext)??$(a?.selectCardContext);if(Number($(o?.Skill)?.SkillId??$(o?.Skill)?.ID??0)===700&&Number(o?.SelectCountMin)===0&&Number(o?.SelectCountMax)===0)return Xk(n,
`btnCancel`,i)||Xk(n,`btnOK`,i);if([...a?.activatedCardtems||[],...a?.cardUis||[]].filter(e=>Wk(e)).length)return Xk(n,`btnOK`,i);let s=a?.activatedCardtems||[],c=[...s,...a?.cardUis||[],...a?.handCardUis||[]].find(e=>!Wk(e)&&(s.includes(e)||Gk(e)));
if(c){qk(c);let e=t.find(e=>Gk(e)&&!Wk(e));return e&&Jk(e),Zk(n,GO(Uk(c),t.some(e=>{let t=$($(e)?.seat);return t&&!t.isDead&&Number(t.currentHp??t.Hp)<=0}),!1),i),!0}let l=n.find(e=>{let t=String($(e)?.name||``);return/btnCancel|取消|不出/.test(t)&&uO(e,
`_enabled`)});if(l)return Yk(l);let u=r.find(e=>Gk(e)&&!Wk(e));return u?Kk($(u),`click`):Xk(n,`btnOK`,i)||Zk(n,[0,1,2,3],i)}function tA(e){if(typeof e.RequestAiHelp==`function`)try{e.RequestAiHelp()}catch{}else if(typeof e.requestAiHelp==`function`)try{e.requestAiHelp()}catch{}}function nA(e){if(typeof e.onTrusteeshipClick==`function`)try{return e.onTrusteeshipClick(),!0}catch{return!1}return!1}function rA(e,
t,n){let r=e.gameContext()??$(t.GameContext),i=r?.currentID??r?.CurrentID??r?.currentId,a=$(n.seat),o=a?.SeatID??a?.seatID??a?.index;return i!=null&&o!=null&&String(i)===String(o)}function iA(e,t){let n=e.gameContext()??$(t.GameContext),r=0,
i=null;try{let e=typeof n?.GetModeVO==`function`?$(n.GetModeVO()):null;r=Number(e?.ModeType??e?.modeType??n?.GetModeType?.()??0)||0,e&&`TrusteeAiManual`in e&&(i=!!e.TrusteeAiManual)}catch{}let a=null;try{typeof n?.CanOpenAiHelp==`function`&&(a=!!n.CanOpenAiHelp())}catch{a=null}let o=String($($(I(t))?.topMenu)?.areaServerLabel?.text||``);
return VO({enabled:!0,modeType:r,modeLabel:o,trusteeAiManual:i,canOpenAiHelp:a})}function aA(e,t,n){let r=$(e.gameScene())??I(t)??$(t.gamescene),i=$(r?.SelfSeatUi)??$(r?.selfSeatUi);if(!r||!i)return{decision:n.decision,mode:`off`};let a=$(i.seat);
if(Number(a?.OnlineState)>=3&&typeof i.stageMoveHandler==`function`)try{i.stageMoveHandler()}catch{}let o=$(i.buttonBar)??$(i.ButtonBar),s=o?.btnList||o?.buttons||[],c=i.skillItems||[],l=$(r.seatContainer)?.seatUIs||[],u=$(i.selectView)??$(i.SelectView),
d=Qk(i,l,s,c,u),f=Date.now(),p=UO(d,String($(i.cardContainer)?.SelectContext??``)),m=RO(n.decision,p,f),h=rA(e,t,i),g=iA(e,t);if(g&&h&&tA(r),g&&d.actionable&&m.fallbackLevel===0){let e=$k(d,i,l,s,c,u,t);if(e===`acted`&&(d.cardIds.length||d.seatIds.length||d.skillId||d.buttonName))return m=zO(m,
f,{officialActed:!0,officialAvailable:!0}),{decision:m,mode:`ai`};m=zO(m,f,{officialAvailable:e===`waiting`})}else m=zO(m,f,{officialAvailable:g&&d.actionable});if(m.fallbackLevel>=2&&BO(m,f,h)&&nA(i))return{decision:{...m,trusteeAttempts:m.trusteeAttempts+1,
trusteeRequestedAt:f},mode:`trustee`};let _=eA(i,l,s,c,t);return{decision:m,mode:_||m.fallbackLevel>0?`local`:n.mode}}var oA={none:{taskId:0,label:`无目标`,targetSeconds:0},dailyGame:{taskId:161114,label:`每日游戏时间`,targetSeconds:1800},dailyWin:{taskId:161115,
label:`每日胜利时间`,targetSeconds:1800},weeklyWin:{taskId:161116,label:`每周胜利时间`,targetSeconds:5400}},sA=[161114,161115,161116];function cA(e){return e&&typeof e==`object`?e:null}function lA(e){let t=Math.max(0,Math.floor(Number(e)||0)),n=Math.floor(t/60),
r=t%60;return n?r?`${n}分${r}秒`:`${n}分`:`${r}秒`}function uA(e,t,...n){let r=e.manager(`TaskManager`);if(!r)return null;let i=r[e.obfuscatedMethodName(r,`TaskManager`,t)||t];if(typeof i!=`function`)return null;try{return i.apply(r,n)}catch{return null}}function dA(e){let t=e.manager(`TaskManager`);
if(!t)return!1;let n=t.reqTaskProgressByIds??t.ReqTaskProgressByIds;if(typeof n!=`function`)return!1;try{return n.call(t,[...sA]),!0}catch{return!1}}function fA(e,t){if(t===`none`)return null;let n=oA[t],r=cA(uA(e,`GetServerTaskDataByTaskID`,
n.taskId)||uA(e,`GetAllTaskDataByTaskID`,n.taskId));if(!r)return{key:t,current:0,target:n.targetSeconds,completed:!1,available:!1};let i=Array.isArray(r.task_condition)?r.task_condition:Array.isArray(r.taskConditions)?r.taskConditions:[],a=i.find(e=>Number(e?.condition_id??0)===0)||i[0]||null,
o=i.find(e=>Number(e?.condition_id??n.taskId)===n.taskId)||a,s=Math.max(0,Number(a?.condition_cnt??o?.progress??0)||0),c=Math.max(1,Number(o?.condition_max??cA(r.baseVo)?.TaskCount??n.targetSeconds)||n.targetSeconds),l=Number(r.task_state)===3||Number(r.award_cnt)>=1||Number(r.complete_cnt)>=1||r.IsGetAward===!0||r.isGetAward===!0||s>=c;
return{key:t,current:l?c:Math.min(s,c),target:c,completed:l,available:!0}}function pA(e,t){return t===`none`?`未设置`:!e||!e.available?`等待酒馆任务数据`:e.completed?`${oA[t].label}已完成`:`进度：${lA(e.current)}`}var mA=[`SelectGeneralWindow`,`SelectCountryWarGeneralWindow`,
`SelectGeneralHappyWindow`,`SelectGeneralHappyNewWindow`],hA=[`GameMvpWindow`,`GameZhanJiWindow`,`GeneralOpenResultWindow`,`SkinOpenResultWindowNew`,`SelectSkinWindow`,`RogueLike1v1ZhanJiWindow`,`ShouQiKaAskWindow`];function gA(e){return e&&typeof e==`object`?e:null}function _A(e){if(e.destroyed||e.visible===!1)return`skipped`;
let t=WO(e.generalUis);if(!t)return`missing`;if(e.__xcAutoBotSelectedGeneralUi===t)return`skipped`;let n=gA(t),r=typeof n?.onClickGeneralCard==`function`?()=>n.onClickGeneralCard():typeof e.onClickGeneralCard==`function`?()=>e.onClickGeneralCard(t):null;
if(!r)return`missing`;e.__xcAutoBotSelectedGeneralUi=t;try{return r(),setTimeout(()=>{e.destroyed||e.visible===!1||e.__xcAutoBotSelectedGeneralUi===t&&r()},500),`picked`}catch{return delete e.__xcAutoBotSelectedGeneralUi,`missing`}}function vA(e,
t){if(!Array.isArray(e))return!1;let n=e.find(Boolean);return n?mO(n,t):!1}function yA(e){for(let t of[`laterClose`,`CloseWin`,`Close`,`close`,`onClose`]){let n=e[t];if(typeof n==`function`)try{return n.call(e),!0}catch{}}return!1}function bA(e,
t,n){let r=gA(e);if(!r)return;String(r.name||``).startsWith(t)&&r.visible!==!1&&r.mouseEnabled!==!1&&n.push(r);let i=Number(r.numChildren||0);for(let e=0;e<i;e+=1)typeof r.getChildAt==`function`&&bA(r.getChildAt(e),t,n)}function xA(e,t){let n=[`WuGuFengDengWindow`,
`SelectCardWindow`],r=!1;for(let i of n){let n=e.window(i)??e.findWindows(i)[0];if(!n||n.destroyed||n.visible===!1)continue;vA(n.cardUis??n.itemUis??n.cardList??n.ItemList,t)&&(r=!0);let a=gA(n.btnOK)??gA(n.sureBtn)??gA(n.btnSure);a&&(mO(a,
t),r=!0)}return r}function SA(e){let t=!1;for(let n of hA){let r=e.window(n)??e.findWindows(n)[0];r&&!r.destroyed&&r.visible!==!1&&yA(r)&&(t=!0)}return t}function CA(e,t){let n=e.window(`JinLan2025Window`)??e.findWindows(`JinLan2025Window`)[0];
if(!n||n.destroyed||n.visible===!1||n.isPlayingSelectClose)return!1;let r=[];bA(n.contentSprite??n,`JinLan2025Option_`,r);let i=r[0];return i?mO(i,t):!1}function wA(e,t){let n=!1,r=e.window(`SayRogueLike1V1Window`)??e.findWindows(`SayRogueLike1V1Window`)[0];
if(r&&!r.destroyed&&r.visible!==!1){let e=gA(r.sureBtn)??gA(r.btnSure)??gA(r.btnOK);(e&&mO(e,t)||yA(r))&&(n=!0)}let i=e.window(`RogueLike1v1GameShopWindow`)??e.findWindows(`RogueLike1v1GameShopWindow`)[0];if(i&&!i.destroyed&&i.visible!==!1){vA(i.itemUis??i.goodsList??i.cardUis,
t)&&(n=!0);let e=gA(i.buyBtn)??gA(i.sureBtn)??gA(i.btnOK);e&&mO(e,t)&&(n=!0)}return n}function TA(e,t,n){let r=SA(e);return CA(e,t)&&(r=!0),n===11&&wA(e,t)&&(r=!0),r}function EA(e){let t=[],n=new Set,r=e=>{e&&!n.has(e)&&(n.add(e),t.push(e))};
for(let t of mA)r(e.window(t)),e.findWindows(t).forEach(e=>r(e));return t}var DA=`XC_AUTO_BOT_STATE`,OA=`XC_AUTO_BOT_SESSION`,kA=5e3,AA=5e3;function jA(e){return e&&typeof e==`object`?e:null}function MA(e,t){try{t?e.localStorage?.setItem?.(DA,
`1`):e.localStorage?.removeItem?.(DA)}catch{}}function NA(e,t){try{e.localStorage?.setItem?.(OA,JSON.stringify({managedRoom:t.managedRoom,kind:t.kind,baiShengGeneralId:t.baiShengGeneralId,aiPromptDone:t.aiPromptDone}))}catch{}}function PA(e){let t=dk();
try{let n=e.localStorage?.getItem?.(OA);if(!n)return t;let r=JSON.parse(n);typeof r.managedRoom==`boolean`&&(t.managedRoom=r.managedRoom),(r.kind===11||r.kind===28||r.kind===29||r.kind===1)&&(t.kind=r.kind),Number(r.baiShengGeneralId)>0&&(t.baiShengGeneralId=Number(r.baiShengGeneralId)),
r.aiPromptDone===!0&&(t.aiPromptDone=!0)}catch{}return t}function FA(e,t={}){let n=t.globalObject??window,r=t.locator??Sh(n),i=t.pollIntervalMs??400,a=!1,o=e.get(Ic)===!0,s=e.get(Rc)===!0,c=e.get(zc),l=0,u=0,d=0,f=0,p=null,m=PA(n),h={decision:null,
mode:`off`},g=new Set,_=[];MA(n,o),_.push(e.subscribe(Ic,({value:e})=>{o=e===!0,MA(n,o),b(),h={decision:null,mode:`off`},o||(m=dk()),NA(n,m),o&&!T()&&E(0)})),_.push(e.subscribe(Rc,({value:e})=>{s=e===!0})),_.push(e.subscribe(zc,({value:e})=>{c=e,
w(!0),o&&T()})),t.gameEvents&&_.push(t.gameEvents.subscribe(e=>{if(o&&!a){if(e.type===`game-ended`){if(h={decision:null,mode:`off`},w(!0),T())return;E(nO)}if(e.type===`player-died`){let t=ck(r,n);if(!sk({deadSeatId:e.seatId,selfSeatId:t,seats:lk(n)}))return;
S(()=>uk(r,n),kA)}}}));let v=n.setInterval?.(()=>D(),i);v!=null&&_.push(()=>n.clearInterval?.(v));let y=n.setInterval?.(()=>ee(),400);y!=null&&_.push(()=>n.clearInterval?.(y)),o&&!T()&&(w(!0),E(0));function b(){return l+=1,l}function x(e){return!a&&o&&l===e}function S(e,
t){let n=l,r=setTimeout(()=>{g.delete(r),x(n)&&e()},t);g.add(r)}function C(){return e.get(Lc)===!0}function w(e){e&&dA(r),p=fA(r,c)}function T(){if(c===`none`)return!1;let t=p??fA(r,c);return p=t,!t?.available||!t.completed?!1:(e.set(Ic,!1),!0)}function E(e){S(()=>{C()||(m=zk(r,
n,m,{baiSheng:s,onBaiSheng:(e,t)=>ik(r,e,nk(ak(n),r),t),schedule:S}),NA(n,m))},e)}function D(){if(a||!o)return;let e=Date.now();if(!(e-f>=AA&&(f=e,w(!1),T()))&&(TA(r,n,m.kind),!C())){for(let e of EA(r))Array.isArray(e.generalUis)&&e.generalUis.length&&_A(e);
e-d>=2e3&&(d=e,m=Rk(r,n,m,e),NA(n,m)),e-u>=500&&(u=e,m=zk(r,n,m,{baiSheng:s,onBaiSheng:(e,t)=>ik(r,e,nk(ak(n),r),t),schedule:S}),NA(n,m))}}function ee(){if(a||!o||C())return;xA(r,n),h=aA(r,n,h);let e=jA(jA(I(n))?.SelfSeatUi);if(m.kind===28&&e&&typeof e.canHalfShow==`function`)try{e.canHalfShow()&&e.onHalfShow?.()}catch{}}return{filterMessage(e,
t){if(o&&!a){if(t===`MsgGameOver`){h={decision:null,mode:`off`},w(!0),S(()=>{T()||E(0)},nO);return}(t===`SmsgUpdateTaskProgressToClient`||t===`decodeUserQuestInfoRep`)&&(w(!1),T())}},getStatus(){return{tavernText:pA(p,c),managedRoom:m.managedRoom,
kind:m.kind}},dispose(){a=!0,o=!1,b(),MA(n,!1);for(let e of g)clearTimeout(e);g.clear();for(let e of _.splice(0))try{e()}catch{}}}}var IA=`https://95chong.cn/api/game-gift-codes`,LA=`::XC_GAME_GIFT_CODE_ATTEMPTS`,RA=1e3,zA=1e3,BA=2e3,VA=2e3;
function HA(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function UA(e,t){let n=t.manager(`UserInfoManger`),r=HA(n?.Self)??HA(n?.self),i=e?.clientId??e?.ClientId??e?.ClientID??r?.clientId??r?.ClientId??r?.ClientID??n?.clientId??n?.ClientId??n?.userID??n?.UserID;
return i==null||i===``?``:String(i)}function WA(e){let t=e.Laya?.ClassUtils;if(!t)return null;let n=HA(t.getClass?.(`UserData`)?.Self);if(n?.clientId||n?.ClientId||n?.ClientID)return n;let r=null;try{r=HA(t.getInstance?.(`BirthdayWishWin`,null)),
typeof r?.refreshIcon==`function`&&r.refreshIcon.call(r)}catch{r=null}let i=HA(r?.userData),a=HA((i?HA(Object.getPrototypeOf(i)?.constructor):null)?.Self)??i;if(r&&!r.parent)try{typeof r.Close==`function`?r.Close.call(r):typeof r.destroy==`function`&&r.destroy.call(r,!0)}catch{}return a}function GA(e){let t=new Set,
n=[];for(let r of Array.isArray(e)?e:[]){let e=String(typeof r==`string`?r:HA(r)?.code??``).trim();e&&!t.has(e)&&(t.add(e),n.push(e))}return n}function KA(e,t){try{let n=JSON.parse(e?.getItem(`${t}${LA}`)||`[]`);return new Set((Array.isArray(n)?n:[]).map(String).filter(Boolean))}catch{return new Set}}function qA(e,
t,n){try{e?.setItem(`${t}${LA}`,JSON.stringify([...n]))}catch{}}function JA(e={}){let t=e.globalObject??window,n=e.locator??Sh(t),r=e.storage??t.localStorage,i=e.fetcher??globalThis.fetch?.bind(globalThis),a=e.endpoint??IA,o=e.loginDelayMs??zA,
s=e.exchangeIntervalMs??BA,c=aS(),l=ow(t,n,c),u=new Map,d=new Set,f=Date.now(),p=null,m=``,h=!1,g=null;console.info(`[礼包码] 控制器已启动`);function _(){let e=g?.clientId??g?.ClientId??g?.ClientID;if(e==null||e===``){let e=WA(t),n=e?.clientId??e?.ClientId??e?.ClientID;
n!=null&&n!==``&&(g=e)}return UA(g,n)}async function v(){if(!i)return[];let e=await i(a,{method:`GET`,mode:`cors`,credentials:`omit`,cache:`no-store`,referrerPolicy:`no-referrer`});if(!e.ok)throw Error(`礼包码服务返回 ${e.status}`);let t=HA(await e.json());
if(!t?.ok)throw Error(String(t?.error||t?.message||`礼包码服务异常`));return GA(t.codes)}async function y(e){if(!e||_()!==e||c.disposed)return`retry`;let t;try{t=await v()}catch(e){return console.warn(`[礼包码] 拉取失败:`,e),`retry`}let n=KA(r,e),i=t.filter(e=>!n.has(e));
if(!i.length)return console.info(`[礼包码] 账号 ${e} 的礼包码都已尝试过`),`done`;let a=`发现 ${i.length} 个新礼包码，开始自动兑换`;console.info(`[礼包码] ${a}`),yu(a);for(let t of i){if(c.disposed||_()!==e)return`retry`;let a=l.get(`GiftExchangeWindow`),o=HA(a?.giftInput);
if(!a||!o||typeof a.getClicked!=`function`)return console.warn(`[礼包码] 游戏兑换窗口尚未就绪，稍后重试`),`retry`;try{o.text=t,a.getClicked.call(a),n.add(t),qA(r,e,n),console.info(`[礼包码] 已尝试兑换:`,t)}catch(e){console.warn(`[礼包码] 兑换失败:`,t,e)}finally{l.release(`GiftExchangeWindow`,
VA)}t!==i[i.length-1]&&await new Promise(e=>c.later(e,s))}return`done`}function b(){if(m||c.disposed)return;let e=_();if(!e){!h&&Date.now()-f>8e3&&(h=!0,console.warn(`[礼包码] 还没读到账号编号，兑换未开始`));return}if(d.has(e))return;let t=Date.now(),n=u.get(e);
n==null&&(u.set(e,t),console.info(`[礼包码] 当前账号 ${e}，稍后自动兑换`),o>0)||t-n<o||(m=e,y(e).then(t=>{t===`done`&&d.add(e)}).finally(()=>{m===e&&(m=``)}))}return b(),p=setInterval(b,RA),()=>{p!=null&&clearInterval(p),p=null,l.dispose(),c.dispose()}}var YA=`__xiaochaoBagSearch`,
XA=`__xiaochaoGeneralPoolSearch`,ZA=[`ModeGeneralPoolWindow`],QA=[`Init`,`layout`,`onOpened`];function $A(e={}){let t=e.globalObject??window,n=e.locator??Sh(t),r=yx(),i=new Set,a=!1,o=()=>{if(a)return;let e=n.classPrototype(`BagView`);e&&!r.isWrapped(e,
`Init`)&&r.wrap(e,`Init`,e=>function(...n){let r=e.apply(this,n);return ej(this,t,i),r});for(let e of ZA){let a=n.classPrototype(e);if(a)for(let e of QA)typeof a[e]!=`function`||r.isWrapped(a,e)||r.wrap(a,e,e=>function(...n){let r=e.apply(this,
n);return tj(this,t,i),r})}for(let e of ZA){let r=n.window(e);r&&r.destroyed!==!0&&tj(r,t,i);for(let r of n.findWindows(e))r.destroyed!==!0&&tj(r,t,i)}for(let e of[...i])cj(e.container.parent)?.destroyed===!0&&e.dispose()};o();let s=t.setInterval?.(o,
e.pollIntervalMs??800);return()=>{a=!0,s!=null&&t.clearInterval?.(s),r.restoreAll();for(let e of i)e.dispose();i.clear()}}function ej(e,t,n){if(e[YA]||typeof e.showBags!=`function`)return;let r=rj(t,`搜索道具`,180,24);if(!r)return;r.container.name=`xiaochao-bag-search-container`,
r.container.pos?.(520,28),e.addChild?.(r.container);let i=e.showBags,a=typeof e.updatePageIdx==`function`?e.updatePageIdx:void 0,o={...r,keyword:``,filtering:!1,fullList:[],filteredList:[],originalShowBags:i,originalUpdatePageIdx:a,dispose:()=>void 0},
s=fj(t,()=>{o.keyword=sj(o.input.text),o.filtering=!0,e.curPage=1;let t=o.fullList.length>0?o.fullList:lj(e.bagDatas);o.filteredList=ij(t,o.keyword),o.originalShowBags.call(e,o.filteredList),o.keyword&&(e.bagDatas=t),o.filtering=!1,e.updatePageIdx?.()},100);
e.showBags=function(e){let t=lj(e);if(o.filtering||(o.fullList=t),!o.keyword||o.filtering)return o.filteredList=[],o.originalShowBags.call(this,t);o.filteredList=ij(o.fullList,o.keyword);let n=o.originalShowBags.call(this,o.filteredList);return this.bagDatas=o.fullList,
n},a&&(e.updatePageIdx=function(...e){if(!o.keyword)return o.originalUpdatePageIdx?.apply(this,e);let t=this.bagDatas;this.bagDatas=o.filteredList;try{return o.originalUpdatePageIdx?.apply(this,e)}finally{this.bagDatas=t}});let c=String(t.Laya?.Event?.INPUT??`input`);
o.input.on?.(c,e,s),o.dispose=()=>{o.input.off?.(c,e,s),s.cancel(),e.showBags!==i&&(e.showBags=i),a&&e.updatePageIdx!==a&&(e.updatePageIdx=a),e[YA]===o&&delete e[YA],dj(o.container),n.delete(o)},e[YA]=o,n.add(o)}function tj(e,t,n){let r=e[XA];
if(r){r.placeSearch();return}let i=nj(e);if(!i)return;let a=rj(t,`搜索武将`,170,24);if(!a)return;a.container.name=`xiaochao-general-pool-search-container`,a.container.zOrder=0,(cj(e.contentSprite)??e).addChild?.(a.container);let o=e[i],s=typeof e.layout==`function`?e.layout:void 0,
c={...a,keyword:``,originalUpdateItems:o,originalLayout:s,placeSearch:()=>void 0,dispose:()=>void 0},l=()=>{uj(a.container.width,170);let t=uj(a.container.height,24),n=e.closeAllBtn??e.openBtn;if(n){let e=uj(n.x)+uj(n.width)+8,r=uj(n.y)+Math.max(0,(uj(n.height)-t)/2);
a.container.pos?.(e,r),a.container.visible=n.visible!==!1;return}a.container.visible=!1};c.placeSearch=l,l(),e[i]=function(...e){if(!c.keyword)return c.originalUpdateItems.apply(this,e);let t=Array.isArray(e[1])?e[1]:[];return c.originalUpdateItems.call(this,
e[0],aj(t,c.keyword),...e.slice(2))},s&&(e.layout=function(...e){let t=c.originalLayout?.apply(this,e);return l(),t});let u=fj(t,()=>{c.keyword=sj(c.input.text);let t=e.tabGroup?.selectedIndex??e.tabGroup?.selected??0;if(typeof e.tabClicked==`function`){e.tabClicked(t);
return}e[i]?.()},100),d=String(t.Laya?.Event?.INPUT??`input`),f=String(t.Laya?.Event?.ENTER??`enter`);c.input.on?.(d,e,u),c.input.on?.(f,e,u),c.dispose=()=>{c.input.off?.(d,e,u),c.input.off?.(f,e,u),u.cancel(),e[i]!==o&&(e[i]=o),s&&e.layout!==s&&(e.layout=s),
e[XA]===c&&delete e[XA],dj(c.container),n.delete(c)},e[XA]=c,n.add(c)}function nj(e){for(let t of[`updateItems`,`UpdateItems`,`updateGeneralItems`])if(typeof e[t]==`function`)return t;return null}function rj(e,t,n,r){let i=e.Laya,a=i?.Sprite,
o=i?.TextInput;if(typeof a!=`function`||typeof o!=`function`)return null;try{let e=new a;e.size?.(n,r),e.graphics?.drawRect?.(0,0,n,r,`#201A12`,`#8B6F3A`,1),e.zOrder=10;let i=new o(``);return i.size?.(n-12,r-4),i.pos?.(6,2),i.color=`#E8D7AA`,
i.prompt=t,i.promptColor=`#8F8060`,i.font=`SimSun`,i.fontSize=14,i.align=`left`,i.valign=`middle`,i.padding=`2,4,2,4`,i.bg=null,i.mouseEnabled=!0,e.mouseEnabled=!0,e.addChild?.(i),{input:i,container:e}}catch(e){return console.warn(`[搜索] 创建“${t}”输入框失败`,
e),null}}function ij(e,t){return t?e.filter(e=>{let n=cj(e);return oj(cj(n?.baseInfo),n).includes(t)}):e}function aj(e,t){return t?e.filter(e=>{let n=cj(e);return oj(n,cj(n?.baseInfo),cj(n?.general),cj(n?.generalVo),cj(n?.vo),cj(n?.data)).includes(t)}):e}function oj(...e){let t=[`specifyName`,
`name`,`Name`,`cnName`,`generalName`,`GeneralName`,`showName`,`title`,`desc`,`description`,`id`,`Id`,`generalId`,`GeneralId`];return e.flatMap(e=>t.map(t=>e?.[t])).filter(e=>e!=null).join(``).toLocaleLowerCase()}function sj(e){return String(e??``).trim().toLocaleLowerCase()}function cj(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function lj(e){return Array.isArray(e)?e:[]}function uj(e,
t=0){let n=Number(e);return Number.isFinite(n)?n:t}function dj(e){try{e.removeSelf?.(),e.destroy?.(!0)}catch{}}function fj(e,t,n){let r,i=()=>{r!=null&&e.clearTimeout?.(r),r=e.setTimeout?.(()=>{r=void 0,t()},n)};return i.cancel=()=>{r!=null&&e.clearTimeout?.(r),
r=void 0},i}var pj=[{label:`类型`,mode:`CardType`},{label:`花色`,mode:`CardFlower`},{label:`点数`,mode:`CardNumber`}],mj=34,hj=22,gj=11,_j=300,vj=16,yj=60,bj=3554,xj=[3,4,1,2],Sj=`__xcHandSortSegmentControl`,Cj=`__xcHandSortSegmentPatched`,wj=`#D9BE8A`,
Tj=`#FFE2A3`,Ej=`#3A250D`,Dj=`rgba(34,27,19,0.9)`,Oj=`#8B744C`,kj=`rgba(46,36,24,0.96)`,Aj=`#C4A36A`,jj=`#6A5538`,Mj=`#FFE2A3`;function Nj(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function Pj(e,t=0){let n=Number(e);
return Number.isFinite(n)?n:t}function Fj(e,t,n){return String(e?.Event?.[t]??n)}function Ij(e){let t=e?.cardUis??e?.cardUIs;return Array.isArray(t)?t:[]}function Lj(e){return Ij(e).map(e=>Number(e?.Card?.CardId??e?.Card?.CardID??0)||0).sort((e,
t)=>e-t).join(`,`)}function Rj(e){let t=xj.indexOf(Number(e));return t>=0?t:xj.length+Math.max(0,Number(e)||0)}function zj(e,t,n){let r=e?.Card,i=t?.Card;return n===`CardFlower`?Rj(r?.FlowerOnSeat)-Rj(i?.FlowerOnSeat):n===`CardNumber`?(Number(r?.CardNumber)||0)-(Number(i?.CardNumber)||0):0}function Bj(e){try{return!!e?.seat?.HasSkill?.(bj)}catch{return!1}}function Vj(e){let t=e?.host;
return!!t&&!t.destroyed&&t.visible!==!1&&t._visible!==!1&&t.enabled!==!1&&t._enabled!==!1&&t.gray!==!0}function Hj(e,t){e&&!e.destroyed&&(e.visible=t,`_visible`in e&&(e._visible=t))}function Uj(e,t){if(!e||!Ij(e).length)return!1;if(t===`CardType`)return typeof e.SortNormalCards==`function`&&(e.SortNormalCards(),!0);
if(t!==`CardFlower`&&t!==`CardNumber`)return!1;let n=Ij(e);n.sort((e,n)=>zj(e,n,t));for(let t of n)t.clear?.(!1),t.Draw?.(e);return e.invalidateLayoutHandCard?.(),!0}function Wj(e,t,n,r,i,a,o){let s=e.graphics;if(s){if(s.clear?.(),typeof s.drawRoundRect==`function`){s.drawRoundRect(0,0,
t,n,o,r,i,a);return}s.drawRect?.(0,0,t,n,r,i,a)}}function Gj(e){Wj(e,mj*pj.length,hj,Dj,Oj,1,4);for(let t=1;t<pj.length;t+=1){let n=t*mj;e.graphics?.drawLine?.(n,3,n,19,jj,1)}}function Kj(e){let t=e.graphics;t&&(t.clear?.(),t.drawLine?.(2,4,2,2,
Mj,1),t.drawLine?.(2,2,6,2,Mj,1),t.drawLine?.(6,2,6,4,Mj,1),t.drawRect?.(1,4,6,5,Mj))}function qj(e,t){let n=e.Text??e.Label;if(typeof n!=`function`)return null;let r=new n;return r.text=t,r.font=`SimSun`,r.fontSize=gj,r.color=wj,r.stroke=1,
r.strokeColor=Ej,r.align=`center`,r.valign=`middle`,r.mouseEnabled=!1,r.mouseThrough=!0,r}function Jj(e){e.segments.forEach((t,n)=>{let r=pj[n]?.mode===e.lockedMode;Hj(t.hover,r||t.hovered),Hj(t.lock,r),t.label&&(t.label.color=r||t.hovered?Tj:wj)})}function Yj(e,
t){let n=Number(e?.stageX??e?.mouseX??e?.x),r=Number(e?.stageY??e?.mouseY??e?.y);if(!Number.isFinite(n)||!Number.isFinite(r))return null;let i=Nj(t.parent);if(typeof i?.globalToLocal!=`function`)return{x:n,y:r};try{let e=i.globalToLocal({x:n,
y:r},!0),t=Number(e?.x),a=Number(e?.y);return Number.isFinite(t)&&Number.isFinite(a)?{x:t,y:a}:{x:n,y:r}}catch{return{x:n,y:r}}}function Xj(e,t){let n=Number(e?.width),r=Number(e?.height);return{minX:0,maxX:Number.isFinite(n)?Math.max(0,n-Number(t?.width||102)):0,
minY:0,maxY:Number.isFinite(r)&&r>0?Math.max(0,r-Number(t?.height||hj)):1/0}}function Zj(e,t,n,r){if(!e||!t||t.destroyed)return;let i=mj*pj.length;t.width=i,t.height=hj;let a=Number(e.width),o=Number(e.HandCardRightSpace);if(!Number.isFinite(a)||!Number.isFinite(o)||r)return;
let s=n.get(`cards.handSortPosition`),c=Math.max(0,Math.floor(a-o-i)),l=Math.max(0,Math.floor(a-i)),u=Number.isFinite(Number(t.y))?Number(t.y):yj,d=Number(e.height),f=s?Number.isFinite(d)&&d>0?Math.max(0,Math.min(d-hj,s.top)):Math.max(0,s.top):u,
p=s?Math.max(0,Math.min(l,a-i-s.right)):c;typeof t.pos==`function`?t.pos(p,f):(t.x=p,t.y=f)}function Qj(e){return Nj(Nj(e.Laya)?.stage)}function $j(e,t){let n=e.dragStage;n?.off&&(n.off(Fj(t,`MOUSE_MOVE`,`mousemove`),e,e.dragMoveHandler),n.off(Fj(t,
`MOUSE_UP`,`mouseup`),e,e.dragEndHandler)),e.dragStage=null}function eM(e,t){if(e&&!e.destroyed){e.destroyed=!0,$j(e,t);try{e.visual?.destroy?.(!0),e.hits.forEach(e=>e?.destroy?.(!0));let n=e.host;if(n&&!n.destroyed){n.off?.(Fj(t,`MOUSE_DOWN`,
`mousedown`),e,e.dragStartHandler),n.label=e.originalLabel,n.width=e.originalWidth,n.height=e.originalHeight,e.background&&!e.background.destroyed&&(e.background.visible=e.originalBackgroundVisible,`_visible`in e.background&&(e.background._visible=e.originalBackgroundRenderVisible));
let r=Number(e.selfSeatUi?.width),i=Number(e.selfSeatUi?.HandCardRightSpace),a=Number.isFinite(r)&&Number.isFinite(i)?r-i-60:Number.isFinite(Number(e.originalX))?Number(e.originalX):0,o=Number.isFinite(Number(e.originalY))?Number(e.originalY):yj;
typeof n.pos==`function`?n.pos(a,o):(n.x=a,n.y=o),typeof n.on==`function`&&typeof e.selfSeatUi?.sortCardHandler==`function`&&n.on(Fj(t,`CLICK`,`click`),e.selfSeatUi,e.selfSeatUi.sortCardHandler),delete n[Sj]}}catch{}}}function tM(e){if(!e||e.destroyed)return!1;
Jj(e);let t=e.selfSeatUi?.cardContainer,n=Lj(t);if(e.handSignature===null?e.handSignature=n:n!==e.handSignature&&(e.handSignature=n,e.lockedMode&&!Bj(e.selfSeatUi)&&(e.pendingAutoSort=!0)),!e.lockedMode||Bj(e.selfSeatUi))return e.pendingAutoSort=!1,!1;
if(Vj(e)&&Hj(e.host,!0),!e.pendingAutoSort||e.sorting||!Vj(e))return!1;e.sorting=!0;try{return Uj(t,e.lockedMode)?(e.pendingAutoSort=!1,e.handSignature=Lj(t),Hj(e.host,!0),!0):!1}finally{e.sorting=!1}}function nM(e,t,n){let r=Nj(e?.sortCardBtn);
if(!r||r.destroyed)return null;let i=r[Sj];if(!t.get(`cards.handSortEnabled`))return i&&eM(i,Nj(n.Laya)),null;if(i&&!i.destroyed&&i.host===r)return Zj(e,r,t,i.dragging),i;i&&eM(i,Nj(n.Laya));let a=Nj(n.Laya);if(!a?.Sprite)return null;let o=new a.Sprite,
s=mj*pj.length;o.name=`xcHandSortSegmentVisual`,o.mouseEnabled=!1,o.mouseThrough=!0,o.size?.(s,hj),Gj(o);let c=t.get(`cards.handSortLockedMode`),l={host:r,selfSeatUi:e,visual:o,hits:[],segments:[],originalLabel:r.label,originalWidth:r.width,
originalHeight:r.height,originalX:r.x,originalY:r.y,background:Nj(r.background),originalBackgroundVisible:r.background?.visible,originalBackgroundRenderVisible:r.background?._visible,lockedMode:c,handSignature:Lj(e.cardContainer),pendingAutoSort:!!c,
lastClickMode:null,lastClickAt:0,sorting:!1,dragging:!1,dragMoved:!1,dragStage:null,dragStartPointer:null,dragStartPosition:null,dragMoveHandler:()=>void 0,dragEndHandler:()=>void 0,dragStartHandler:()=>void 0,suppressClickUntil:0,destroyed:!1};
return l.dragMoveHandler=e=>{if(!l.dragging||l.destroyed||!l.host)return;let t=Yj(e,l.host);if(!t||!l.dragStartPointer)return;let n=t.x-l.dragStartPointer.x,r=t.y-l.dragStartPointer.y;if(!l.dragMoved&&n*n+r*r<vj)return;l.dragMoved=!0;let i=Xj(l.selfSeatUi,
l.host),a=Math.max(i.minX,Math.min(i.maxX,l.dragStartPosition.x+n)),o=Math.max(i.minY,Math.min(i.maxY,l.dragStartPosition.y+r));typeof l.host.pos==`function`?l.host.pos(a,o):(l.host.x=a,l.host.y=o)},l.dragEndHandler=()=>{if(!l.dragging||($j(l,
a),l.dragging=!1,!l.dragMoved))return;let e=Number(l.selfSeatUi?.width),n=Number(l.host?.x),r=Number(l.host?.y);if(!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(r)){l.suppressClickUntil=Date.now()+_j;return}t.set(`cards.handSortPosition`,
{right:Math.max(0,e-n-Number(l.host?.width||102)),top:Math.max(0,r)}),l.suppressClickUntil=Date.now()+_j},l.dragStartHandler=e=>{if(!l||l.destroyed||!Vj(l))return;let t=Yj(e,l.host)??Yj(Qj(n),l.host),r=Qj(n);t&&r?.on&&($j(l,a),l.dragging=!0,
l.dragMoved=!1,l.dragStartPointer=t,l.dragStartPosition={x:Pj(l.host?.x),y:Pj(l.host?.y)},l.dragStage=r,r.on(Fj(a,`MOUSE_MOVE`,`mousemove`),l,l.dragMoveHandler),r.on(Fj(a,`MOUSE_UP`,`mouseup`),l,l.dragEndHandler))},r.off?.(Fj(a,`CLICK`,`click`),
e,e.sortCardHandler),r.label=``,r.background&&!r.background.destroyed&&(r.background.visible=!1,`_visible`in r.background&&(r.background._visible=!1)),r[Sj]=l,Zj(e,r,t,!1),r.addChild?.(o),pj.forEach((e,n)=>{let i=new a.Sprite;i.name=`xcHandSortSegmentHover-${e.mode}`,
i.mouseEnabled=!1,i.mouseThrough=!0,i.size?.(30,18),i.pos?.(n*mj+2,2),Wj(i,30,18,kj,Aj,1,3),i.visible=!1,o.addChild?.(i);let s=qj(a,e.label);s&&(s.name=`xcHandSortSegmentLabel-${e.mode}`,s.width=mj,s.height=hj,s.pos?.(n*mj,0),o.addChild?.(s));
let c=new a.Sprite;c.name=`xcHandSortSegmentLock-${e.mode}`,c.mouseEnabled=!1,c.mouseThrough=!0,c.size?.(8,10),c.pos?.(n*mj+mj-9,1),Kj(c),c.visible=!1,o.addChild?.(c),l.segments.push({hover:i,label:s??i,lock:c,hovered:!1});let u=new a.Sprite;
u.name=`xcHandSortSegmentHit-${e.mode}`,u.mouseEnabled=!0,u.mouseThrough=!1,u.hitTestPrior=!0,u.size?.(mj,hj),u.pos?.(n*mj,0),u.graphics?.drawRect?.(0,0,mj,hj,`rgba(0,0,0,0)`),u.on?.(Fj(a,`ROLL_OVER`,`mouseover`),l,()=>{let e=l.segments[n];
e&&(e.hovered=!0,Jj(l))}),u.on?.(Fj(a,`ROLL_OUT`,`mouseout`),l,()=>{let e=l.segments[n];e&&(e.hovered=!1,Jj(l))}),u.on?.(Fj(a,`CLICK`,`click`),l,n=>{if(n?.stopPropagation?.(),!Vj(l))return;if(l.suppressClickUntil){let e=Date.now()<=l.suppressClickUntil;
if(l.suppressClickUntil=0,e)return}let r=Date.now(),i=l.lastClickMode===e.mode&&r-l.lastClickAt<=_j;if(l.lastClickMode=i?null:e.mode,l.lastClickAt=i?0:r,Uj(l.selfSeatUi?.cardContainer,e.mode)){if(l.handSignature=Lj(l.selfSeatUi?.cardContainer),
l.lockedMode&&l.lockedMode!==e.mode)l.lastClickMode=null,l.lastClickAt=0,l.lockedMode=e.mode,l.pendingAutoSort=!1,l.selfSeatUi.__xcHandSortLockedMode=e.mode,t.set(`cards.handSortLockedMode`,e.mode);else if(i){let n=l.lockedMode===e.mode?``:e.mode;
l.lockedMode=n,l.pendingAutoSort=!1,l.handSignature=Lj(l.selfSeatUi?.cardContainer),l.selfSeatUi.__xcHandSortLockedMode=n,t.set(`cards.handSortLockedMode`,n)}Jj(l),Hj(l.host,!0)}}),r.addChild?.(u),l.hits.push(u)}),r.on?.(Fj(a,`MOUSE_DOWN`,`mousedown`),
l,l.dragStartHandler),Jj(l),l}function rM(e,t,n,r){let i=Nj(Object.getPrototypeOf(e));if(!i||typeof i.showSortCardbtn!=`function`)return null;let a=(e,n)=>{typeof i[e]!=`function`||t.isWrapped(i,e)||t.wrap(i,e,e=>function(...t){let r=e.apply(this,
t);return n(this),r})};return a(`showSortCardbtn`,e=>{let t=nM(e,n,r);t?.lockedMode&&!Bj(e)&&Vj(t)&&Hj(t.host,!0),tM(t)}),a(`OnStageResize`,e=>{nM(e,n,r)}),a(`layoutCardContainerRight`,e=>{nM(e,n,r)}),i[Cj]=!0,i}function iM(e,t=window){let n=yx(),
r=()=>Nj(t.Laya),i=null,a=null,o=()=>{let o=I(t),s=Nj(o?.SelfSeatUi)??Nj(o?.selfSeatUi);if(!e.get(`cards.handSortEnabled`)||!s){i&&=(eM(i,r()),null);return}a=rM(s,n,e,t)??a;let c=nM(s,e,t);i&&c!==i&&eM(i,r()),i=c,i&&tM(i)},s=t.setInterval(o,250),
c=e.subscribe(`cards.handSortEnabled`,o),l=e.subscribe(`cards.handSortLockedMode`,o);return o(),()=>{t.clearInterval(s),c(),l(),n.restoreAll(),a&&delete a[Cj],i&&eM(i,r()),i=null}}var aM=`__xcSelectionTools`;function oM(e=window){let t=Sh(e),
n=new Set,r=!1;function i(){if(r)return;let e=[...t.findWindows(`SelectCardWindow`)],i=new Set(e);for(let e of n)(!i.has(e)||e.destroyed)&&o(e);for(let t of e)a(t)}function a(t){if(t[aM]||!sM(t).length)return;let r=e.Laya,i=r?.Text;if(typeof i!=`function`)return;
let a=new i;a.name=`xcSelectionTools`,a.size?.(230,28),a.mouseEnabled=!0,a.zOrder=1e3;let o=t.btnOK??t.sureBtn??t.btnSure,s=Number(o?.x??0),c=Number(o?.y??Number(t.height??600)-42);a.pos?.(s-230,c),(t.content??t.box??t).addChild?.(a),[[`全选`,()=>fM(t,
`all`)],[`反选`,()=>fM(t,`invert`)],[`快速选择`,()=>fM(t,`quick`)]].forEach(([e,t],n)=>{let o=new i;o.text=e,o.size?.(70,26),o.pos?.(n*74,0),o.fontSize=14,o.align=`center`,o.valign=`middle`,o.color=`#f2de9c`,o.bgColor=`#342f28`,o.mouseEnabled=!0,
o.on?.(String(r?.Event?.CLICK??`click`),a,t),a.addChild?.(o)}),t[aM]=a,n.add(t)}function o(e){let t=e[aM];t?.removeSelf?.(),t?.destroy?.(!0),delete e[aM],n.delete(e)}let s=e.setInterval(i,250);return i(),()=>{r=!0,e.clearInterval(s),[...n].forEach(o)}}function sM(e){for(let t of[`selectCardUis`,
`cardUis`,`cardUIs`,`itemUis`,`itemList`])if(Array.isArray(e[t]))return e[t];return[]}function cM(e){return e.selected===!0||e.isSelected===!0||e.Selected===!0}function lM(e){return e.disabled!==!0&&e.gray!==!0&&e.visible!==!1}function uM(e,
t){let n=Math.max(0,Number(e.SelectCountMin??e.selectCountMin??e.TargetCountMin)||0),r=Number(e.TargetCountMax??e.SelectCountMax??e.selectCountMax);return{min:n,max:Math.max(n,Math.min(t,r>0?r:t))}}function dM(e,t,n){if(cM(t)!==n){for(let e of[`setSelected`,
`SetSelected`,`__setSelected`])if(typeof t[e]==`function`){t[e](n);return}for(let n of[`onSelectedClicked`,`onTouchCard`,`CardUI_Click`])if(typeof e[n]==`function`){e[n](t);return}t.selected=n,t.isSelected=n}}function fM(e,t){let n=sM(e).filter(lM),
{min:r,max:i}=uM(e,n.length),a=n.filter(cM),o=t===`all`?n.slice(0,i):t===`invert`?n.filter(e=>!cM(e)).slice(0,i):n.slice(0,Math.max(r,Math.min(i,a.length||i))),s=new Set(o);n.forEach(t=>dM(e,t,s.has(t)));for(let t of[`UpdateSelectCards`,`updateSelectCards`,
`UpdateButtonState`,`updateButtonState`])if(typeof e[t]==`function`){e[t]();break}}function pM(e){return e!==null&&(typeof e==`object`||typeof e==`function`)?e:null}function mM(e){return e?(Array.isArray(e.btns)?e.btns:Array.isArray(e.btnList)?e.btnList:[]).map(pM).filter(Boolean):[]}function hM(e){return!e||e.destroyed?!1:e.visible!==!1&&e._visible!==!1&&e.enabled!==!1&&e._enabled!==!1&&e.disabled!==!0&&e.gray!==!0}function gM(e=window){let t=Sh(e),
n=yx(),r=!1,i=null,a=null;function o(){let n=pM(t.gameScene())??pM(I(e))??pM(e.gamescene),r=pM(n?.SelfSeatUi)??pM(n?.selfSeatUi);return!r||r.destroyed?null:r}function s(e){return pM(e.buttonBar)??pM(e.ButtonBar)}function c(e,t){let n=s(e);return pM(n?.[t])??mM(n).find(e=>String(e.name||``)===t)??null}function l(e){let t=pM(Object.getPrototypeOf(e));
return t&&typeof t.ButtonBar_UpdateCallback==`function`?t:typeof e.ButtonBar_UpdateCallback==`function`?e:null}function u(){let e=o();if(!e)return!1;let t=l(e);if(!t)return!1;if(i===t&&n.isWrapped(t,`ButtonBar_UpdateCallback`))return!0;let r=n.wrap(t,
`ButtonBar_UpdateCallback`,e=>function(t,...n){let r=e.call(this,t,...n);return String(t??``)!==`btnOK`||r?r:e.call(this,`btnReset`,...n)});return r&&(i=t),r}function d(e){let t=c(e,`btnReset`),n=c(e,`btnOK`);if(n&&hM(t)&&!hM(n)){try{typeof n.setEnabled==`function`?n.setEnabled(!0):typeof n.setEnable==`function`&&n.setEnable(!0)}catch{}try{typeof n.setGray==`function`&&n.setGray(!1)}catch{}n.enabled=!0,
n._enabled=!0,n.disabled=!1,n.gray=!1,n.mouseEnabled=!0}}function f(e){let t=s(e);if(!t||typeof t.Update!=`function`)return;let r=pM(Object.getPrototypeOf(t)),i=r&&typeof r.Update==`function`?r:t;a===i&&n.isWrapped(i,`Update`)||n.wrap(i,`Update`,
e=>function(...t){let n=e.apply(this,t),r=o();return r&&s(r)===this&&d(r),n})&&(a=i)}function p(){if(r)return;u();let e=o();e&&(f(e),d(e))}let m=e.setInterval(p,100);return p(),()=>{r=!0,e.clearInterval(m),n.restoreAll(),i=null,a=null}}var _M=`rooms.hidePassword`,
vM=`__xcClassicNoPasswordCheckBox`,yM=`__xcClassicRoomFilterSource`,bM=`__xcClassicRoomFilterInstalled`,xM=1;function SM(e,t={}){let n=t.globalObject??window,r=yx(),i=t.pollIntervalMs??400,a=!1,o=null,s=null,c=null,l=null,u=!1,d=n.setInterval(()=>{try{p()}catch(e){console.warn(`[room-filter] sync failed`,
e)}},i),f=e.subscribe(_M,()=>g());p();function p(){if(a)return;let e=wM(n),t=CM(e?.roomListView);if(TM(e)!==`HallScene`||!t){_(),o=null;return}o=t,h(e,t),m(t)}function m(t){t[bM]!==xM&&typeof t.ReloadRoomList==`function`&&(delete t[bM],r.wrap(t,
`ReloadRoomList`,t=>function(r,...i){Array.isArray(r)&&!u&&(this[yM]=r),p();let a=[r,...i];return wM(n)?.roomListView===this&&e.get(_M)&&Array.isArray(r)&&(a[0]=(this[yM]??r).filter(e=>CM(e)?.hasPass!==!0)),t.apply(this,a)})&&(t[bM]=xM))}function h(t,
r){if(t.roomListView!==r)return;let i=CM(r.isWaitCheckBox);if(!i)return;let a=i.constructor;if(typeof a!=`function`)return;let o=CM(r[vM]);if(!o){o=new a(`不显示密码房`),o.selected=e.get(_M);let t=n.Laya?.Event?.CHANGE??`change`;l=()=>{e.set(_M,o?.selected===!0),
g()},o.on?.(t,r,l),r.addChild?.(o),r[vM]=o}o.selected=e.get(_M),o.visible=!0,o.pos?.(Number(i.x||0)+Number(i.width||0)+12,Number(i.y||0)),c=o,s=r}function g(){p();let e=o?.[yM]??o?.tableDataList??o?.hallManager?.roomList;if(o&&Array.isArray(e)){u=!0;
try{o.ReloadRoomList(e)}finally{u=!1}}}function _(){if(!c)return;let e=n.Laya?.Event?.CHANGE??`change`;try{c.off?.(e,s,l)}catch{}try{c.removeSelf?.()}catch{}try{c.destroy?.(!0)}catch{}s?.[vM]===c&&delete s[vM],c=null,s=null,l=null}return{dispose(){a=!0,
n.clearInterval(d),f(),_(),r.restoreAll(),o&&(delete o[bM],delete o[yM])}}}function CM(e){return typeof e==`object`&&e?e:null}function wM(e){let t=CM(CM(Id(e))?.CurrentScene);if(t&&(TM(t)===`HallScene`||t.roomListView))return t;let n=CM(e.Laya?.stage)?._children;
if(!Array.isArray(n))return t;let r=CM(n.find(e=>Number(CM(e)?.layerOrder)===2))?._children;if(!Array.isArray(r))return t;let i=r.map(e=>({node:CM(e),depth:0}));for(;i.length;){let{node:e,depth:t}=i.shift();if(e){if(TM(e)===`HallScene`||e.roomListView)return e;
if(!(t>=2||!Array.isArray(e._children)))for(let n of e._children)i.push({node:CM(n),depth:t+1})}}return t}function TM(e){return String(e?.SceneName??e?.sceneName??``)}function EM(e){let t=n(),r=$u(td(e)),i=vd(),o=_f(),s=zg(window),c=gl(()=>I(window),
e=>s.getCard(e)),l=Sf(o,r.get(`display.recentCardMode`)),u=A_(),d=Mp(o,void 0,{getDrawPile:()=>u.getSnapshot().drawPile,subscribe:e=>u.subscribe(e)}),f=qp(),p=ny(i,o,{engine:u,isRedCard:e=>{let t=c.resolve(e);return t?.suit?t.isRed:null}});
sv(e=>s.findSpellIdsByName(e));let m=mx(u,c,{isSelfSeat(e){let t=i.getSnapshot();return e===t.selfSeatId||t.controlledSeatIds.includes(e)},getControlledSeatIds(){let e=i.getSnapshot(),t=e.selfSeatId===null?[]:[e.selfSeatId];return[...new Set([...t,...e.controlledSeatIds])]},
getSeatLabel(e){return i.getSnapshot().seats.find(t=>t.seatId===e)?.playerName??``}}),h=$D();t.register(s.dispose),t.register(od(r));let g=SM(r);t.register(g.dispose),t.register(gf(i)),t.register(Ef(i,o)),t.register(p.dispose),t.register(Yy(r,
i,c,u,o)),t.register(Im(r)),t.register(qm(r)),t.register(lh(o)),t.register(jh()),t.register(iM(r)),t.register(oM()),t.register(gM());let _=Xx(r);t.register(_.dispose);let v=DS(r);t.register(v.dispose);let y,b=JS(r,{selfSeatId:()=>i.getSnapshot().selfSeatId,
syncWallpaperMenu:()=>y?.sync()});t.register(b.dispose),y=yS(r,{menuExtension:b.menuExtension}),t.register(y.dispose);let x=hw(r,o,{cardConfigSource:s});t.register(x.dispose),t.register(JA()),t.register($A());let S=JD(r,{getExtraAssistData:()=>s.getExtraAssistData(),
getSpellExtendRaw:()=>s.getSpellExtendRaw(),getCard:e=>s.getCard(e),peixiuRouteStore:h,gameEvents:o});t.register(S.dispose);let C=IO(r,{gameEvents:o});t.register(C.dispose);let w=FA(r,{gameEvents:o});t.register(w.dispose);let T=sl(r,t=>e.openExternal(t));
t.register(T.dispose);let E=zT(r,{cardConfigSource:s});t.register(E.dispose);let D=[_.filterMessage,v.filterMessage,b.filterMessage,E.filterMessage,C.filterMessage,w.filterMessage];t.register(Sp(o,window,{mutateMessage:(e,t)=>{for(let n of D)try{n(e,
t)}catch(e){console.warn(`[xiaochao] 协议改写失败`,t,e)}}})),t.register(n_(r,l)),t.register(Tm(r,d,f,c)),t.register(vx(m,o,()=>I(window)));let ee=lu();t.register(pu(ee,o)),t.register(ee.clear),t.register(l.clear),t.register(o.clear),t.register(c.clear),
t.register(d.clear),t.register(f.clear),t.register(m.clear),t.register(h.clear),t.register(u.clear);let te;function ne(n=OM){return te?.panelElement.isConnected?te:(te?.unmount(),te=qu(e.platform,n,r,l,d,c,m,h,ee,x,()=>_.clearRedDots(),E,T),
t.register(te.unmount),te)}let re=a(window,{lifecycle:t,platform:e,getSeatState:()=>i.getSnapshot(),getRecentCardState:()=>l.getSnapshot(),getDeckRecordState:()=>d.getSnapshot(),getMingpaiState:()=>u.getSnapshot(),getSkillAssistState:()=>m.getSnapshot(),
resolveGameCard:e=>c.resolve(e),getCardConfigSize:()=>s.size(),mountPanelShell:ne});window.__XIAOCHAO_STARTUP__??=DM,re.waitForGameRuntime({probe:()=>re.getMissingGameRuntimeDependencies({globalObject:window}),initialize:()=>document.body?(ne(),!0):!1,
registerCleanup:e=>t.register(e),status:DM}).catch(e=>console.error(`[xiaochao] 面板挂载失败`,e))}var DM={},OM={top:31,right:155,width:`250px`,height:kM(),fontFamily:`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei UI","Microsoft YaHei",
"PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Noto Sans SC",Arial,sans-serif`};function kM(){try{let e=Number(localStorage.getItem(`XC::mainFrameExpandedHeight`));return Number.isFinite(e)&&e>=160?Math.round(e):480}catch{return 480}}EM(t())})();

