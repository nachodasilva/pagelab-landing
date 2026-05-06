(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},el={},Hs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),sc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Ro=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var Qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qs=Object.assign,Ks={};function it(e,n,t){this.props=e,this.context=n,this.refs=Ks,this.updater=t||Qs}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ys(){}Ys.prototype=it.prototype;function Ai(e,n,t){this.props=e,this.context=n,this.refs=Ks,this.updater=t||Qs}var Ui=Ai.prototype=new Ys;Ui.constructor=Ai;qs(Ui,it.prototype);Ui.isPureReactComponent=!0;var Oo=Array.isArray,Xs=Object.prototype.hasOwnProperty,Bi={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Xs.call(n,r)&&!Gs.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Yt,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function mc(e,n){return{$$typeof:Yt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yt}function hc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Io=/\/+/g;function xl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):n.toString(36)}function yr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yt:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+xl(o,0):r,Oo(l)?(t="",e!=null&&(t=e.replace(Io,"$&/")+"/"),yr(l,n,t,"",function(d){return d})):l!=null&&(Wi(l)&&(l=mc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Io,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+xl(i,a);o+=yr(i,n,t,u,l)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+xl(i,a++),o+=yr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,n,t){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function vc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},gc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Bi};function Js(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=it;L.Fragment=lc;L.Profiler=oc;L.PureComponent=Ai;L.StrictMode=ic;L.Suspense=cc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;L.act=Js;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qs({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Bi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Xs.call(n,u)&&!Gs.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Yt,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sc,_context:e},e.Consumer=e};L.createElement=Zs;L.createFactory=function(e){var n=Zs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:uc,render:e}};L.isValidElement=Wi;L.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:vc}};L.memo=function(e,n){return{$$typeof:dc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=xr.transition;xr.transition={};try{e()}finally{xr.transition=n}};L.unstable_act=Js;L.useCallback=function(e,n){return se.current.useCallback(e,n)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,n){return se.current.useEffect(e,n)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return se.current.useMemo(e,n)};L.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Hs.exports=L;var Qn=Hs.exports;const yc=tc(Qn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=Qn,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Sc=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)jc.call(n,r)&&!Nc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:wc,type:e,key:i,ref:o,props:l,_owner:Sc.current}}el.Fragment=kc;el.jsx=bs;el.jsxs=bs;$s.exports=el;var s=$s.exports,Ql={},ea={exports:{}},ye={},na={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,_){var P=N.length;N.push(_);e:for(;0<P;){var H=P-1>>>1,X=N[H];if(0<l(X,_))N[H]=_,N[P]=X,P=H;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],P=N.pop();if(P!==_){N[0]=P;e:for(var H=0,X=N.length,bt=X>>>1;H<bt;){var vn=2*(H+1)-1,yl=N[vn],gn=vn+1,er=N[gn];if(0>l(yl,P))gn<X&&0>l(er,yl)?(N[H]=er,N[gn]=P,H=gn):(N[H]=yl,N[vn]=P,H=vn);else if(gn<X&&0>l(er,P))N[H]=er,N[gn]=P,H=gn;else break e}}return _}function l(N,_){var P=N.sortIndex-_.sortIndex;return P!==0?P:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,v=null,m=3,x=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var _=t(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=N)r(d),_.sortIndex=_.expirationTime,n(u,_);else break;_=t(d)}}function g(N){if(k=!1,p(N),!w)if(t(u)!==null)w=!0,vl(S);else{var _=t(d);_!==null&&gl(g,_.startTime-N)}}function S(N,_){w=!1,k&&(k=!1,f(z),z=-1),x=!0;var P=m;try{for(p(_),v=t(u);v!==null&&(!(v.expirationTime>_)||N&&!Ce());){var H=v.callback;if(typeof H=="function"){v.callback=null,m=v.priorityLevel;var X=H(v.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?v.callback=X:v===t(u)&&r(u),p(_)}else r(u);v=t(u)}if(v!==null)var bt=!0;else{var vn=t(d);vn!==null&&gl(g,vn.startTime-_),bt=!1}return bt}finally{v=null,m=P,x=!1}}var E=!1,C=null,z=-1,$=5,T=-1;function Ce(){return!(e.unstable_now()-T<$)}function at(){if(C!==null){var N=e.unstable_now();T=N;var _=!0;try{_=C(!0,N)}finally{_?ut():(E=!1,C=null)}}else E=!1}var ut;if(typeof c=="function")ut=function(){c(at)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,nc=Mo.port2;Mo.port1.onmessage=at,ut=function(){nc.postMessage(null)}}else ut=function(){D(at,0)};function vl(N){C=N,E||(E=!0,ut())}function gl(N,_){z=D(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,vl(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(N,_,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,N={id:h++,callback:_,priorityLevel:N,startTime:P,expirationTime:X,sortIndex:-1},P>H?(N.sortIndex=P,n(d,N),t(u)===null&&N===t(d)&&(k?(f(z),z=-1):k=!0,gl(g,P-H))):(N.sortIndex=X,n(u,N),w||x||(w=!0,vl(S))),N},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(N){var _=m;return function(){var P=m;m=_;try{return N.apply(this,arguments)}finally{m=P}}}})(ta);na.exports=ta;var Ec=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Qn,ge=Ec;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,Tt={};function Ln(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Tt[e]=n,e=0;e<n.length;e++)ra.add(n[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Do={},Ao={};function _c(e){return ql.call(Ao,e)?!0:ql.call(Do,e)?!1:zc.test(e)?Ao[e]=!0:(Do[e]=!0,!1)}function Pc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,n,t,r){if(n===null||typeof n>"u"||Pc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vi=/[\-:]([a-z])/g;function $i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Vi,$i);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Vi,$i);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Vi,$i);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Lc(n,t,l,r)&&(t=null),r||l===null?_c(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ye=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ia=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,wl;function yt(e){if(wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wl=n&&n[1]||""}return`
`+wl+e}var kl=!1;function jl(e,n){if(!e||kl)return"";kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yt(e):""}function Tc(e){switch(e.tag){case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Mn:return"Portal";case Kl:return"Profiler";case Qi:return"StrictMode";case Yl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return n=e.displayName||null,n!==null?n:Gl(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Gl(e(n))}catch{}}return null}function Fc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(n);case 8:return n===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mc(e){var n=sa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Mc(e))}function aa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=sa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ua(e,n){n=n.checked,n!=null&&Hi(e,"checked",n,!1)}function Jl(e,n){ua(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bl(e,n.type,t):n.hasOwnProperty("defaultValue")&&bl(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function bl(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function qn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ei(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(xt(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function ca(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $o(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?da(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){Rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function pa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function ma(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=pa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Oc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ti(e,n){if(n){if(Oc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function ri(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Kn=null,Yn=null;function Ho(e){if(e=Zt(e)){if(typeof ii!="function")throw Error(y(280));var n=e.stateNode;n&&(n=il(n),ii(e.stateNode,e.type,n))}}function ha(e){Kn?Yn?Yn.push(e):Yn=[e]:Kn=e}function va(){if(Kn){var e=Kn,n=Yn;if(Yn=Kn=null,Ho(e),n)for(e=0;e<n.length;e++)Ho(n[e])}}function ga(e,n){return e(n)}function ya(){}var Sl=!1;function xa(e,n,t){if(Sl)return e(n,t);Sl=!0;try{return ga(e,n,t)}finally{Sl=!1,(Kn!==null||Yn!==null)&&(ya(),va())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var oi=!1;if(He)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){oi=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{oi=!1}function Ic(e,n,t,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(h){this.onError(h)}}var St=!1,Tr=null,Fr=!1,si=null,Dc={onError:function(e){St=!0,Tr=e}};function Ac(e,n,t,r,l,i,o,a,u){St=!1,Tr=null,Ic.apply(Dc,arguments)}function Uc(e,n,t,r,l,i,o,a,u){if(Ac.apply(this,arguments),St){if(St){var d=Tr;St=!1,Tr=null}else throw Error(y(198));Fr||(Fr=!0,si=d)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function wa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qo(e){if(Tn(e)!==e)throw Error(y(188))}function Bc(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Qo(l),e;if(i===r)return Qo(l),n;i=i.sibling}throw Error(y(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(y(189))}}if(t.alternate!==r)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function ka(e){return e=Bc(e),e!==null?ja(e):null}function ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ja(e);if(n!==null)return n;e=e.sibling}return null}var Sa=ge.unstable_scheduleCallback,qo=ge.unstable_cancelCallback,Wc=ge.unstable_shouldYield,Vc=ge.unstable_requestPaint,Q=ge.unstable_now,$c=ge.unstable_getCurrentPriorityLevel,Xi=ge.unstable_ImmediatePriority,Na=ge.unstable_UserBlockingPriority,Mr=ge.unstable_NormalPriority,Hc=ge.unstable_LowPriority,Ea=ge.unstable_IdlePriority,nl=null,De=null;function Qc(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Yc,qc=Math.log,Kc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(qc(e)/Kc|0)|0}var ir=64,or=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=wt(a):(i&=o,i!==0&&(r=wt(i)))}else o=t&~l,o!==0?r=wt(o):i!==0&&(r=wt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Te(n),l=1<<t,r|=e[t],n&=~l;return r}function Xc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Te(i),a=1<<o,u=l[o];u===-1?(!(a&t)||a&r)&&(l[o]=Xc(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ca(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Zc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Te(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Gi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Te(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _a,Zi,Pa,La,Ta,ui=!1,sr=[],tn=null,rn=null,ln=null,Rt=new Map,Ot=new Map,Je=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Rt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(n.pointerId)}}function ft(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&Zi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function bc(e,n,t,r,l){switch(n){case"focusin":return tn=ft(tn,e,n,t,r,l),!0;case"dragenter":return rn=ft(rn,e,n,t,r,l),!0;case"mouseover":return ln=ft(ln,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Rt.set(i,ft(Rt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ot.set(i,ft(Ot.get(i)||null,e,n,t,r,l)),!0}return!1}function Fa(e){var n=wn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=wa(t),n!==null){e.blockedOn=n,Ta(e.priority,function(){Pa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ci(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);li=r,t.target.dispatchEvent(r),li=null}else return n=Zt(t),n!==null&&Zi(n),e.blockedOn=t,!1;n.shift()}return!0}function Yo(e,n,t){wr(e)&&t.delete(n)}function ed(){ui=!1,tn!==null&&wr(tn)&&(tn=null),rn!==null&&wr(rn)&&(rn=null),ln!==null&&wr(ln)&&(ln=null),Rt.forEach(Yo),Ot.forEach(Yo)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,ui||(ui=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,ed)))}function It(e){function n(l){return pt(l,e)}if(0<sr.length){pt(sr[0],e);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&pt(tn,e),rn!==null&&pt(rn,e),ln!==null&&pt(ln,e),Rt.forEach(n),Ot.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Fa(t),t.blockedOn===null&&Je.shift()}var Xn=Ye.ReactCurrentBatchConfig,Or=!0;function nd(e,n,t,r){var l=M,i=Xn.transition;Xn.transition=null;try{M=1,Ji(e,n,t,r)}finally{M=l,Xn.transition=i}}function td(e,n,t,r){var l=M,i=Xn.transition;Xn.transition=null;try{M=4,Ji(e,n,t,r)}finally{M=l,Xn.transition=i}}function Ji(e,n,t,r){if(Or){var l=ci(e,n,t,r);if(l===null)Rl(e,n,r,Ir,t),Ko(e,r);else if(bc(l,e,n,t,r))r.stopPropagation();else if(Ko(e,r),n&4&&-1<Jc.indexOf(e)){for(;l!==null;){var i=Zt(l);if(i!==null&&_a(i),i=ci(e,n,t,r),i===null&&Rl(e,n,r,Ir,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Rl(e,n,r,null,t)}}var Ir=null;function ci(e,n,t,r){if(Ir=null,e=Yi(r),e=wn(e),e!==null)if(n=Tn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=wa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ir=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case Xi:return 1;case Na:return 4;case Mr:case Hc:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var en=null,bi=null,kr=null;function Ra(){if(kr)return kr;var e,n=bi,t=n.length,r,l="value"in en?en.value:en.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Xo(){return!1}function xe(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Xo,this.isPropagationStopped=Xo,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=xe(ot),Gt=W({},ot,{view:0,detail:0}),rd=xe(Gt),El,Cl,mt,tl=W({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(El=e.screenX-mt.screenX,Cl=e.screenY-mt.screenY):Cl=El=0,mt=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Go=xe(tl),ld=W({},tl,{dataTransfer:0}),id=xe(ld),od=W({},Gt,{relatedTarget:0}),zl=xe(od),sd=W({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=xe(sd),ud=W({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=xe(ud),dd=W({},ot,{data:0}),Zo=xe(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function no(){return hd}var vd=W({},Gt,{key:function(e){if(e.key){var n=fd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=xe(vd),yd=W({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=xe(yd),xd=W({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),wd=xe(xd),kd=W({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=xe(kd),Sd=W({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nd=xe(Sd),Ed=[9,13,27,32],to=He&&"CompositionEvent"in window,Nt=null;He&&"documentMode"in document&&(Nt=document.documentMode);var Cd=He&&"TextEvent"in window&&!Nt,Oa=He&&(!to||Nt&&8<Nt&&11>=Nt),bo=" ",es=!1;function Ia(e,n){switch(e){case"keyup":return Ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function zd(e,n){switch(e){case"compositionend":return Da(n);case"keypress":return n.which!==32?null:(es=!0,bo);case"textInput":return e=n.data,e===bo&&es?null:e;default:return null}}function _d(e,n){if(On)return e==="compositionend"||!to&&Ia(e,n)?(e=Ra(),kr=bi=en=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oa&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Aa(e,n,t,r){ha(r),n=Dr(n,"onChange"),0<n.length&&(t=new eo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Et=null,Dt=null;function Ld(e){Xa(e,0)}function rl(e){var n=An(e);if(aa(n))return e}function Td(e,n){if(e==="change")return n}var Ua=!1;if(He){var _l;if(He){var Pl="oninput"in document;if(!Pl){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Pl=typeof ts.oninput=="function"}_l=Pl}else _l=!1;Ua=_l&&(!document.documentMode||9<document.documentMode)}function rs(){Et&&(Et.detachEvent("onpropertychange",Ba),Dt=Et=null)}function Ba(e){if(e.propertyName==="value"&&rl(Dt)){var n=[];Aa(n,Dt,e,Yi(e)),xa(Ld,n)}}function Fd(e,n,t){e==="focusin"?(rs(),Et=n,Dt=t,Et.attachEvent("onpropertychange",Ba)):e==="focusout"&&rs()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Dt)}function Rd(e,n){if(e==="click")return rl(n)}function Od(e,n){if(e==="input"||e==="change")return rl(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Id;function At(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!ql.call(n,l)||!Me(e[l],n[l]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,n){var t=ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ls(t)}}function Wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Va(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Dd(e){var n=Va(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wa(t.ownerDocument.documentElement,t)){if(r!==null&&ro(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=is(t,i);var o=is(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=He&&"documentMode"in document&&11>=document.documentMode,In=null,di=null,Ct=null,fi=!1;function os(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fi||In==null||In!==Lr(r)||(r=In,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ct&&At(Ct,r)||(Ct=r,r=Dr(di,"onSelect"),0<r.length&&(n=new eo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=In)))}function ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Dn={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Ll={},$a={};He&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function ll(e){if(Ll[e])return Ll[e];if(!Dn[e])return e;var n=Dn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $a)return Ll[e]=n[t];return e}var Ha=ll("animationend"),Qa=ll("animationiteration"),qa=ll("animationstart"),Ka=ll("transitionend"),Ya=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Ya.set(e,n),Ln(n,[e])}for(var Tl=0;Tl<ss.length;Tl++){var Fl=ss[Tl],Ud=Fl.toLowerCase(),Bd=Fl[0].toUpperCase()+Fl.slice(1);pn(Ud,"on"+Bd)}pn(Ha,"onAnimationEnd");pn(Qa,"onAnimationIteration");pn(qa,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ka,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function as(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Uc(r,n,void 0,e),e.currentTarget=null}function Xa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;as(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;as(l,a,d),i=u}}}if(Fr)throw e=si,Fr=!1,si=null,e}function O(e,n){var t=n[gi];t===void 0&&(t=n[gi]=new Set);var r=e+"__bubble";t.has(r)||(Ga(n,e,2,!1),t.add(r))}function Ml(e,n,t){var r=0;n&&(r|=4),Ga(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[cr]){e[cr]=!0,ra.forEach(function(t){t!=="selectionchange"&&(Wd.has(t)||Ml(t,!1,e),Ml(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Ml("selectionchange",!1,n))}}function Ga(e,n,t,r){switch(Ma(n)){case 1:var l=nd;break;case 4:l=td;break;default:l=Ji}t=l.bind(null,n,t,e),l=void 0,!oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Rl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xa(function(){var d=i,h=Yi(t),v=[];e:{var m=Ya.get(e);if(m!==void 0){var x=eo,w=e;switch(e){case"keypress":if(jr(t)===0)break e;case"keydown":case"keyup":x=gd;break;case"focusin":w="focus",x=zl;break;case"focusout":w="blur",x=zl;break;case"beforeblur":case"afterblur":x=zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wd;break;case Ha:case Qa:case qa:x=ad;break;case Ka:x=jd;break;case"scroll":x=rd;break;case"wheel":x=Nd;break;case"copy":case"cut":case"paste":x=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Jo}var k=(n&4)!==0,D=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Mt(c,f),g!=null&&k.push(Bt(c,g,p)))),D)break;c=c.return}0<k.length&&(m=new x(m,w,null,t,h),v.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==li&&(w=t.relatedTarget||t.fromElement)&&(wn(w)||w[Qe]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=t.relatedTarget||t.toElement,x=d,w=w?wn(w):null,w!==null&&(D=Tn(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(k=Go,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Jo,g="onPointerLeave",f="onPointerEnter",c="pointer"),D=x==null?m:An(x),p=w==null?m:An(w),m=new k(g,c+"leave",x,t,h),m.target=D,m.relatedTarget=p,g=null,wn(h)===d&&(k=new k(f,c+"enter",w,t,h),k.target=p,k.relatedTarget=D,g=k),D=g,x&&w)n:{for(k=x,f=w,c=0,p=k;p;p=Fn(p))c++;for(p=0,g=f;g;g=Fn(g))p++;for(;0<c-p;)k=Fn(k),c--;for(;0<p-c;)f=Fn(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break n;k=Fn(k),f=Fn(f)}k=null}else k=null;x!==null&&us(v,m,x,k,!1),w!==null&&D!==null&&us(v,D,w,k,!0)}}e:{if(m=d?An(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Td;else if(ns(m))if(Ua)S=Od;else{S=Md;var E=Fd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Rd);if(S&&(S=S(e,d))){Aa(v,S,t,h);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(E=d?An(d):window,e){case"focusin":(ns(E)||E.contentEditable==="true")&&(In=E,di=d,Ct=null);break;case"focusout":Ct=di=In=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,os(v,t,h);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":os(v,t,h)}var C;if(to)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else On?Ia(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Oa&&t.locale!=="ko"&&(On||z!=="onCompositionStart"?z==="onCompositionEnd"&&On&&(C=Ra()):(en=h,bi="value"in en?en.value:en.textContent,On=!0)),E=Dr(d,z),0<E.length&&(z=new Zo(z,e,null,t,h),v.push({event:z,listeners:E}),C?z.data=C:(C=Da(t),C!==null&&(z.data=C)))),(C=Cd?zd(e,t):_d(e,t))&&(d=Dr(d,"onBeforeInput"),0<d.length&&(h=new Zo("onBeforeInput","beforeinput",null,t,h),v.push({event:h,listeners:d}),h.data=C))}Xa(v,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Mt(e,t),i!=null&&r.unshift(Bt(e,i,l)),i=Mt(e,n),i!=null&&r.push(Bt(e,i,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Mt(t,i),u!=null&&o.unshift(Bt(t,u,a))):l||(u=Mt(t,i),u!=null&&o.push(Bt(t,u,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Vd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace($d,"")}function dr(e,n,t){if(n=cs(n),cs(e)!==n&&t)throw Error(y(425))}function Ar(){}var pi=null,mi=null;function hi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(qd)}:vi;function qd(e){setTimeout(function(){throw e})}function Ol(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),It(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);It(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),Ie="__reactFiber$"+st,Wt="__reactProps$"+st,Qe="__reactContainer$"+st,gi="__reactEvents$"+st,Kd="__reactListeners$"+st,Yd="__reactHandles$"+st;function wn(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fs(e);e!==null;){if(t=e[Ie])return t;e=fs(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Ie]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function il(e){return e[Wt]||null}var yi=[],Un=-1;function mn(e){return{current:e}}function I(e){0>Un||(e.current=yi[Un],yi[Un]=null,Un--)}function R(e,n){Un++,yi[Un]=e.current,e.current=n}var fn={},le=mn(fn),de=mn(!1),En=fn;function bn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Ur(){I(de),I(le)}function ps(e,n,t){if(le.current!==fn)throw Error(y(168));R(le,n),R(de,t)}function Za(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(y(108,Fc(e)||"Unknown",l));return W({},t,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,En=le.current,R(le,e),R(de,de.current),!0}function ms(e,n,t){var r=e.stateNode;if(!r)throw Error(y(169));t?(e=Za(e,n,En),r.__reactInternalMemoizedMergedChildContext=e,I(de),I(le),R(le,e)):I(de),R(de,t)}var Be=null,ol=!1,Il=!1;function Ja(e){Be===null?Be=[e]:Be.push(e)}function Xd(e){ol=!0,Ja(e)}function hn(){if(!Il&&Be!==null){Il=!0;var e=0,n=M;try{var t=Be;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Be=null,ol=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Sa(Xi,hn),l}finally{M=n,Il=!1}}return null}var Bn=[],Wn=0,Wr=null,Vr=0,we=[],ke=0,Cn=null,We=1,Ve="";function yn(e,n){Bn[Wn++]=Vr,Bn[Wn++]=Wr,Wr=e,Vr=n}function ba(e,n,t){we[ke++]=We,we[ke++]=Ve,we[ke++]=Cn,Cn=e;var r=We;e=Ve;var l=32-Te(r)-1;r&=~(1<<l),t+=1;var i=32-Te(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Te(n)+l|t<<l|r,Ve=i+e}else We=1<<i|t<<l|r,Ve=e}function lo(e){e.return!==null&&(yn(e,1),ba(e,1,0))}function io(e){for(;e===Wr;)Wr=Bn[--Wn],Bn[Wn]=null,Vr=Bn[--Wn],Bn[Wn]=null;for(;e===Cn;)Cn=we[--ke],we[ke]=null,Ve=we[--ke],we[ke]=null,We=we[--ke],we[ke]=null}var ve=null,he=null,A=!1,Le=null;function eu(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,he=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Cn!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,he=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(A){var n=he;if(n){var t=n;if(!hs(e,n)){if(xi(e))throw Error(y(418));n=on(t.nextSibling);var r=ve;n&&hs(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(xi(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!A)return vs(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hi(e.type,e.memoizedProps)),n&&(n=he)){if(xi(e))throw nu(),Error(y(418));for(;n;)eu(e,n),n=on(n.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ve?on(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=he;e;)e=on(e.nextSibling)}function et(){he=ve=null,A=!1}function oo(e){Le===null?Le=[e]:Le.push(e)}var Gd=Ye.ReactCurrentBatchConfig;function ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var r=t.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gs(e){var n=e._init;return n(e._payload)}function tu(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=cn(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,g){return c===null||c.tag!==6?(c=$l(p,f.mode,g),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,g){var S=p.type;return S===Rn?h(f,c,p.props.children,g,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gs(S)===c.type)?(g=l(c,p.props),g.ref=ht(f,c,p),g.return=f,g):(g=Pr(p.type,p.key,p.props,null,f.mode,g),g.ref=ht(f,c,p),g.return=f,g)}function d(f,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Hl(p,f.mode,g),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,g,S){return c===null||c.tag!==7?(c=Nn(p,f.mode,g,S),c.return=f,c):(c=l(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$l(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tr:return p=Pr(c.type,c.key,c.props,null,f.mode,p),p.ref=ht(f,null,c),p.return=f,p;case Mn:return c=Hl(c,f.mode,p),c.return=f,c;case Ge:var g=c._init;return v(f,g(c._payload),p)}if(xt(c)||ct(c))return c=Nn(c,f.mode,p,null),c.return=f,c;pr(f,c)}return null}function m(f,c,p,g){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tr:return p.key===S?u(f,c,p,g):null;case Mn:return p.key===S?d(f,c,p,g):null;case Ge:return S=p._init,m(f,c,S(p._payload),g)}if(xt(p)||ct(p))return S!==null?null:h(f,c,p,g,null);pr(f,p)}return null}function x(f,c,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,a(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return f=f.get(g.key===null?p:g.key)||null,u(c,f,g,S);case Mn:return f=f.get(g.key===null?p:g.key)||null,d(c,f,g,S);case Ge:var E=g._init;return x(f,c,p,E(g._payload),S)}if(xt(g)||ct(g))return f=f.get(p)||null,h(c,f,g,S,null);pr(c,g)}return null}function w(f,c,p,g){for(var S=null,E=null,C=c,z=c=0,$=null;C!==null&&z<p.length;z++){C.index>z?($=C,C=null):$=C.sibling;var T=m(f,C,p[z],g);if(T===null){C===null&&(C=$);break}e&&C&&T.alternate===null&&n(f,C),c=i(T,c,z),E===null?S=T:E.sibling=T,E=T,C=$}if(z===p.length)return t(f,C),A&&yn(f,z),S;if(C===null){for(;z<p.length;z++)C=v(f,p[z],g),C!==null&&(c=i(C,c,z),E===null?S=C:E.sibling=C,E=C);return A&&yn(f,z),S}for(C=r(f,C);z<p.length;z++)$=x(C,f,z,p[z],g),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?z:$.key),c=i($,c,z),E===null?S=$:E.sibling=$,E=$);return e&&C.forEach(function(Ce){return n(f,Ce)}),A&&yn(f,z),S}function k(f,c,p,g){var S=ct(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var E=S=null,C=c,z=c=0,$=null,T=p.next();C!==null&&!T.done;z++,T=p.next()){C.index>z?($=C,C=null):$=C.sibling;var Ce=m(f,C,T.value,g);if(Ce===null){C===null&&(C=$);break}e&&C&&Ce.alternate===null&&n(f,C),c=i(Ce,c,z),E===null?S=Ce:E.sibling=Ce,E=Ce,C=$}if(T.done)return t(f,C),A&&yn(f,z),S;if(C===null){for(;!T.done;z++,T=p.next())T=v(f,T.value,g),T!==null&&(c=i(T,c,z),E===null?S=T:E.sibling=T,E=T);return A&&yn(f,z),S}for(C=r(f,C);!T.done;z++,T=p.next())T=x(C,f,z,T.value,g),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?z:T.key),c=i(T,c,z),E===null?S=T:E.sibling=T,E=T);return e&&C.forEach(function(at){return n(f,at)}),A&&yn(f,z),S}function D(f,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Rn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tr:e:{for(var S=p.key,E=c;E!==null;){if(E.key===S){if(S=p.type,S===Rn){if(E.tag===7){t(f,E.sibling),c=l(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gs(S)===E.type){t(f,E.sibling),c=l(E,p.props),c.ref=ht(f,E,p),c.return=f,f=c;break e}t(f,E);break}else n(f,E);E=E.sibling}p.type===Rn?(c=Nn(p.props.children,f.mode,g,p.key),c.return=f,f=c):(g=Pr(p.type,p.key,p.props,null,f.mode,g),g.ref=ht(f,c,p),g.return=f,f=g)}return o(f);case Mn:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Hl(p,f.mode,g),c.return=f,f=c}return o(f);case Ge:return E=p._init,D(f,c,E(p._payload),g)}if(xt(p))return w(f,c,p,g);if(ct(p))return k(f,c,p,g);pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,p),c.return=f,f=c):(t(f,c),c=$l(p,f.mode,g),c.return=f,f=c),o(f)):t(f,c)}return D}var nt=tu(!0),ru=tu(!1),$r=mn(null),Hr=null,Vn=null,so=null;function ao(){so=Vn=Hr=null}function uo(e){var n=$r.current;I($r),e._currentValue=n}function ki(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Gn(e,n){Hr=e,so=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(so!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Hr===null)throw Error(y(308));Vn=e,Hr.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var kn=null;function co(e){kn===null?kn=[e]:kn.push(e)}function lu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,co(n)):(t.next=l.next,l.next=t),n.interleaved=t,qe(e,r)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,qe(e,t)}return l=r.interleaved,l===null?(n.next=n,co(r)):(n.next=l.next,l.next=n),r.interleaved=n,qe(e,t)}function Sr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Gi(e,t)}}function ys(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,r){var l=e.updateQueue;Ze=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(i!==null){var v=l.baseState;o=0,h=d=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=n,x=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){v=w.call(x,v,m);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,v,m):w,m==null)break e;v=W({},v,m);break e;case 2:Ze=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=x,u=v):h=h.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=v),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=v}}function xs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Jt={},Ae=mn(Jt),Vt=mn(Jt),$t=mn(Jt);function jn(e){if(e===Jt)throw Error(y(174));return e}function po(e,n){switch(R($t,n),R(Vt,e),R(Ae,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ni(n,e)}I(Ae),R(Ae,n)}function tt(){I(Ae),I(Vt),I($t)}function ou(e){jn($t.current);var n=jn(Ae.current),t=ni(n,e.type);n!==t&&(R(Vt,e),R(Ae,t))}function mo(e){Vt.current===e&&(I(Ae),I(Vt))}var U=mn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dl=[];function ho(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Nr=Ye.ReactCurrentDispatcher,Al=Ye.ReactCurrentBatchConfig,zn=0,B=null,K=null,G=null,Kr=!1,zt=!1,Ht=0,Zd=0;function ne(){throw Error(y(321))}function vo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function go(e,n,t,r,l,i){if(zn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Nr.current=e===null||e.memoizedState===null?nf:tf,e=t(r,l),zt){i=0;do{if(zt=!1,Ht=0,25<=i)throw Error(y(301));i+=1,G=K=null,n.updateQueue=null,Nr.current=rf,e=t(r,l)}while(zt)}if(Nr.current=Yr,n=K!==null&&K.next!==null,zn=0,G=K=B=null,Kr=!1,n)throw Error(y(300));return e}function yo(){var e=Ht!==0;return Ht=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?B.memoizedState=G=e:G=G.next=e,G}function Ee(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=G===null?B.memoizedState:G.next;if(n!==null)G=n,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},G===null?B.memoizedState=G=e:G=G.next=e}return G}function Qt(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=Ee(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var h=d.lane;if((zn&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=v,o=r):u=u.next=v,B.lanes|=h,_n|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Me(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,_n|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=Ee(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,n.memoizedState)||(ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function su(){}function au(e,n){var t=B,r=Ee(),l=n(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,xo(du.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||G!==null&&G.memoizedState.tag&1){if(t.flags|=2048,qt(9,cu.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(y(349));zn&30||uu(t,n,l)}return l}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cu(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function du(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function pu(e){var n=qe(e,1);n!==null&&Fe(n,e,1,-1)}function ws(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},n.queue=e,e=e.dispatch=ef.bind(null,B,e),[n.memoizedState,e]}function qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Ee().memoizedState}function Er(e,n,t,r){var l=Oe();B.flags|=e,l.memoizedState=qt(1|n,t,void 0,r===void 0?null:r)}function sl(e,n,t,r){var l=Ee();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=qt(n,t,i,r);return}}B.flags|=e,l.memoizedState=qt(1|n,t,i,r)}function ks(e,n){return Er(8390656,8,e,n)}function xo(e,n){return sl(2048,8,e,n)}function hu(e,n){return sl(4,2,e,n)}function vu(e,n){return sl(4,4,e,n)}function gu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yu(e,n,t){return t=t!=null?t.concat([e]):null,sl(4,4,gu.bind(null,n,e),t)}function wo(){}function xu(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wu(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ku(e,n,t){return zn&21?(Me(t,n)||(t=Ca(),B.lanes|=t,_n|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function Jd(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),n()}finally{M=t,Al.transition=r}}function ju(){return Ee().memoizedState}function bd(e,n,t){var r=un(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Su(e))Nu(n,t);else if(t=lu(e,n,t,r),t!==null){var l=oe();Fe(t,e,r,l),Eu(t,n,r)}}function ef(e,n,t){var r=un(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Su(e))Nu(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Me(a,o)){var u=n.interleaved;u===null?(l.next=l,co(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=lu(e,n,l,r),t!==null&&(l=oe(),Fe(t,e,r,l),Eu(t,n,r))}}function Su(e){var n=e.alternate;return e===B||n!==null&&n===B}function Nu(e,n){zt=Kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Eu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Gi(e,t)}}var Yr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},nf={readContext:Ne,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:ks,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Er(4194308,4,gu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Er(4194308,4,e,n)},useInsertionEffect:function(e,n){return Er(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:ws,useDebugValue:wo,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=ws(!1),n=e[0];return e=Jd.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,l=Oe();if(A){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),Z===null)throw Error(y(349));zn&30||uu(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ks(du.bind(null,r,i,e),[e]),r.flags|=2048,qt(9,cu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Oe(),n=Z.identifierPrefix;if(A){var t=Ve,r=We;t=(r&~(1<<32-Te(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ht++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tf={readContext:Ne,useCallback:xu,useContext:Ne,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Ul,useRef:mu,useState:function(){return Ul(Qt)},useDebugValue:wo,useDeferredValue:function(e){var n=Ee();return ku(n,K.memoizedState,e)},useTransition:function(){var e=Ul(Qt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:ju,unstable_isNewReconciler:!1},rf={readContext:Ne,useCallback:xu,useContext:Ne,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Bl,useRef:mu,useState:function(){return Bl(Qt)},useDebugValue:wo,useDeferredValue:function(e){var n=Ee();return K===null?n.memoizedState=e:ku(n,K.memoizedState,e)},useTransition:function(){var e=Bl(Qt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:ju,unstable_isNewReconciler:!1};function _e(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ji(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),l=un(e),i=$e(r,l);i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(Fe(n,e,l,r),Sr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),l=un(e),i=$e(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(Fe(n,e,l,r),Sr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=un(e),l=$e(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(Fe(n,e,r,t),Sr(n,e,r))}};function js(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(l,i):!0}function Cu(e,n,t){var r=!1,l=fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=fe(n)?En:le.current,r=n.contextTypes,i=(r=r!=null)?bn(e,l):fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ss(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function Si(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},fo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=fe(n)?En:le.current,l.context=bn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(ji(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&al.enqueueReplaceState(l,l.state,null),Qr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Tc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ni(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function zu(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gr||(Gr=!0,Ri=r),Ni(e,n)},t}function _u(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ni(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ni(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ns(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=xf.bind(null,e,n,t),n.then(e,e))}function Es(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Cs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var of=Ye.ReactCurrentOwner,ce=!1;function ie(e,n,t,r){n.child=e===null?ru(n,null,t,r):nt(n,e.child,t,r)}function zs(e,n,t,r,l){t=t.render;var i=n.ref;return Gn(n,l),r=go(e,n,t,r,i,l),t=yo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ke(e,n,l)):(A&&t&&lo(n),n.flags|=1,ie(e,n,r,l),n.child)}function _s(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!_o(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Pu(e,n,i,r,l)):(e=Pr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(o,r)&&e.ref===n.ref)return Ke(e,n,l)}return n.flags|=1,e=cn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Pu(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(At(i,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ke(e,n,l)}return Ei(e,n,t,r,l)}function Lu(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Hn,me),me|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(Hn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,R(Hn,me),me|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,R(Hn,me),me|=r;return ie(e,n,l,t),n.child}function Tu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ei(e,n,t,r,l){var i=fe(t)?En:le.current;return i=bn(n,i),Gn(n,l),t=go(e,n,t,r,i,l),r=yo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ke(e,n,l)):(A&&r&&lo(n),n.flags|=1,ie(e,n,t,l),n.child)}function Ps(e,n,t,r,l){if(fe(t)){var i=!0;Br(n)}else i=!1;if(Gn(n,l),n.stateNode===null)Cr(e,n),Cu(n,t,r),Si(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var u=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=fe(t)?En:le.current,d=bn(n,d));var h=t.getDerivedStateFromProps,v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ss(n,o,r,d),Ze=!1;var m=n.memoizedState;o.state=m,Qr(n,r,o,l),u=n.memoizedState,a!==r||m!==u||de.current||Ze?(typeof h=="function"&&(ji(n,t,h,r),u=n.memoizedState),(a=Ze||js(n,t,a,r,m,u,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,iu(e,n),a=n.memoizedProps,d=n.type===n.elementType?a:_e(n.type,a),o.props=d,v=n.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ne(u):(u=fe(t)?En:le.current,u=bn(n,u));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Ss(n,o,r,u),Ze=!1,m=n.memoizedState,o.state=m,Qr(n,r,o,l);var w=n.memoizedState;a!==v||m!==w||de.current||Ze?(typeof x=="function"&&(ji(n,t,x,r),w=n.memoizedState),(d=Ze||js(n,t,d,r,m,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ci(e,n,t,r,i,l)}function Ci(e,n,t,r,l,i){Tu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ms(n,t,!1),Ke(e,n,i);r=n.stateNode,of.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=nt(n,e.child,null,i),n.child=nt(n,null,a,i)):ie(e,n,a,i),n.memoizedState=r.state,l&&ms(n,t,!0),n.child}function Fu(e){var n=e.stateNode;n.pendingContext?ps(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ps(e,n.context,!1),po(e,n.containerInfo)}function Ls(e,n,t,r,l){return et(),oo(l),n.flags|=256,ie(e,n,t,r),n.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function _i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,n,t){var r=n.pendingProps,l=U.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(U,l&1),e===null)return wi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Nn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=_i(t),n.memoizedState=zi,e):ko(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return sf(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=cn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=cn(a,i):(i=Nn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?_i(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=zi,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ko(e,n){return n=dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&oo(r),nt(n,e.child,null,t),e=ko(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sf(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(y(422))),mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Nn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&nt(n,e.child,null,o),n.child.memoizedState=_i(o),n.memoizedState=zi,i);if(!(n.mode&1))return mr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=Wl(i,r,void 0),mr(e,n,o,r)}if(a=(o&e.childLanes)!==0,ce||a){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qe(e,l),Fe(r,e,l,-1))}return zo(),r=Wl(Error(y(421))),mr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=wf.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,he=on(l.nextSibling),ve=n,A=!0,Le=null,e!==null&&(we[ke++]=We,we[ke++]=Ve,we[ke++]=Cn,We=e.id,Ve=e.overflow,Cn=n),n=ko(n,r.children),n.flags|=4096,n)}function Ts(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ki(e.return,n,t)}function Vl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ru(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ts(e,t,n);else if(e.tag===19)Ts(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&qr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vl(n,!0,t,null,i);break;case"together":Vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ke(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_n|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=cn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=cn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function af(e,n,t){switch(n.tag){case 3:Fu(n),et();break;case 5:ou(n);break;case 1:fe(n.type)&&Br(n);break;case 4:po(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;R($r,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Mu(e,n,t):(R(U,U.current&1),e=Ke(e,n,t),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ru(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Ke(e,n,t)}var Ou,Pi,Iu,Du;Ou=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Iu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,jn(Ae.current);var i=null;switch(t){case"input":l=Zl(e,l),r=Zl(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}ti(t,r);var o;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tt.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tt.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};Du=function(e,n,t,r){t!==r&&(n.flags|=4)};function vt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function uf(e,n,t){var r=n.pendingProps;switch(io(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Ur(),te(n),null;case 3:return r=n.stateNode,tt(),I(de),I(le),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(Di(Le),Le=null))),Pi(e,n),te(n),null;case 5:mo(n);var l=jn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Iu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(y(166));return te(n),null}if(e=jn(Ae.current),fr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ie]=n,r[Wt]=i,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<kt.length;l++)O(kt[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Vo(r,i),O("invalid",r)}ti(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Tt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(t){case"input":rr(r),Wo(r,i,!0);break;case"textarea":rr(r),$o(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ar)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ie]=n,e[Wt]=r,Ou(e,n,!1,!1),n.stateNode=e;e:{switch(o=ri(t,r),t){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<kt.length;l++)O(kt[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Bo(e,r),l=Zl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),O("invalid",e);break;case"textarea":Vo(e,r),l=ei(e,r),O("invalid",e);break;default:l=r}ti(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ma(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fa(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ft(e,u):typeof u=="number"&&Ft(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Hi(e,i,u,o))}switch(t){case"input":rr(e),Wo(e,r,!1);break;case"textarea":rr(e),$o(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ar)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Du(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(y(166));if(t=jn($t.current),jn(Ae.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ie]=n,(i=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ie]=n,n.stateNode=r}return te(n),null;case 13:if(I(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&n.mode&1&&!(n.flags&128))nu(),et(),n.flags|=98560,i=!1;else if(i=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Ie]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),i=!1}else Le!==null&&(Di(Le),Le=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):zo())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Pi(e,n),e===null&&Ut(n.stateNode.containerInfo),te(n),null;case 10:return uo(n.type._context),te(n),null;case 17:return fe(n.type)&&Ur(),te(n),null;case 19:if(I(U),i=n.memoizedState,i===null)return te(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)vt(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=qr(e),o!==null){for(n.flags|=128,vt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(U,U.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>lt&&(n.flags|=128,r=!0,vt(i,!1),n.lanes=4194304)}else{if(!r)if(e=qr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return te(n),null}else 2*Q()-i.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,vt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=U.current,R(U,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Co(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function cf(e,n){switch(io(n),n.tag){case 1:return fe(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),I(de),I(le),ho(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return mo(n),null;case 13:if(I(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(U),null;case 4:return tt(),null;case 10:return uo(n.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var hr=!1,re=!1,df=typeof WeakSet=="function"?WeakSet:Set,j=null;function $n(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Li(e,n,t){try{t()}catch(r){V(e,n,r)}}var Fs=!1;function ff(e,n){if(pi=Or,e=Va(),ro(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,d=0,h=0,v=e,m=null;n:for(;;){for(var x;v!==t||l!==0&&v.nodeType!==3||(a=o+l),v!==i||r!==0&&v.nodeType!==3||(u=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break n;if(m===t&&++d===l&&(a=o),m===i&&++h===r&&(u=o),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(mi={focusedElem:e,selectionRange:t},Or=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:_e(n.type,k),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return w=Fs,Fs=!1,w}function _t(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(n,t,i)}l=l.next}while(l!==r)}}function ul(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ti(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Au(e){var n=e.alternate;n!==null&&(e.alternate=null,Au(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ie],delete n[Wt],delete n[gi],delete n[Kd],delete n[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,n,t),e=e.sibling;e!==null;)Fi(e,n,t),e=e.sibling}function Mi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mi(e,n,t),e=e.sibling;e!==null;)Mi(e,n,t),e=e.sibling}var J=null,Pe=!1;function Xe(e,n,t){for(t=t.child;t!==null;)Bu(e,n,t),t=t.sibling}function Bu(e,n,t){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:re||$n(t,n);case 6:var r=J,l=Pe;J=null,Xe(e,n,t),J=r,Pe=l,J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?Ol(e.parentNode,t):e.nodeType===1&&Ol(e,t),It(e)):Ol(J,t.stateNode));break;case 4:r=J,l=Pe,J=t.stateNode.containerInfo,Pe=!0,Xe(e,n,t),J=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(t,n,o),l=l.next}while(l!==r)}Xe(e,n,t);break;case 1:if(!re&&($n(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}Xe(e,n,t);break;case 21:Xe(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Xe(e,n,t),re=r):Xe(e,n,t);break;default:Xe(e,n,t)}}function Rs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new df),n.forEach(function(r){var l=kf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Pe=!1;break e;case 3:J=a.stateNode.containerInfo,Pe=!0;break e;case 4:J=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(J===null)throw Error(y(160));Bu(i,o,l),J=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){V(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wu(n,e),n=n.sibling}function Wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Re(e),r&4){try{_t(3,e,e.return),ul(3,e)}catch(k){V(e,e.return,k)}try{_t(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:ze(n,e),Re(e),r&512&&t!==null&&$n(t,t.return);break;case 5:if(ze(n,e),Re(e),r&512&&t!==null&&$n(t,t.return),e.flags&32){var l=e.stateNode;try{Ft(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ua(l,i),ri(a,o);var d=ri(a,i);for(o=0;o<u.length;o+=2){var h=u[o],v=u[o+1];h==="style"?ma(l,v):h==="dangerouslySetInnerHTML"?fa(l,v):h==="children"?Ft(l,v):Hi(l,h,v,d)}switch(a){case"input":Jl(l,i);break;case"textarea":ca(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?qn(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?qn(l,!!i.multiple,i.defaultValue,!0):qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wt]=i}catch(k){V(e,e.return,k)}}break;case 6:if(ze(n,e),Re(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(ze(n,e),Re(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{It(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:ze(n,e),Re(e);break;case 13:ze(n,e),Re(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(No=Q())),r&4&&Rs(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(re=(d=re)||h,ze(n,e),re=d):ze(n,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(v=j=h;j!==null;){switch(m=j,x=m.child,m.tag){case 0:case 11:case 14:case 15:_t(4,m,m.return);break;case 1:$n(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){Is(v);continue}}x!==null?(x.return=m,j=x):Is(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=pa("display",o))}catch(k){V(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(k){V(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ze(n,e),Re(e),r&4&&Rs(e);break;case 21:break;default:ze(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Uu(t)){var r=t;break e}t=t.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ft(l,""),r.flags&=-33);var i=Ms(e);Mi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ms(e);Fi(e,a,o);break;default:throw Error(y(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pf(e,n,t){j=e,Vu(e)}function Vu(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=hr;var d=re;if(hr=o,(re=u)&&!d)for(j=l;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?Ds(l):u!==null?(u.return=o,j=u):Ds(l);for(;i!==null;)j=i,Vu(i),i=i.sibling;j=l,hr=a,re=d}Os(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Os(e)}}function Os(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||ul(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:_e(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&xs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xs(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&It(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||n.flags&512&&Ti(n)}catch(m){V(n,n.return,m)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Is(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Ds(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ul(4,n)}catch(u){V(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){V(n,l,u)}}var i=n.return;try{Ti(n)}catch(u){V(n,i,u)}break;case 5:var o=n.return;try{Ti(n)}catch(u){V(n,o,u)}}}catch(u){V(n,n.return,u)}if(n===e){j=null;break}var a=n.sibling;if(a!==null){a.return=n.return,j=a;break}j=n.return}}var mf=Math.ceil,Xr=Ye.ReactCurrentDispatcher,jo=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,F=0,Z=null,q=null,b=0,me=0,Hn=mn(0),Y=0,Kt=null,_n=0,cl=0,So=0,Pt=null,ue=null,No=0,lt=1/0,Ue=null,Gr=!1,Ri=null,an=null,vr=!1,nn=null,Zr=0,Lt=0,Oi=null,zr=-1,_r=0;function oe(){return F&6?Q():zr!==-1?zr:zr=Q()}function un(e){return e.mode&1?F&2&&b!==0?b&-b:Gd.transition!==null?(_r===0&&(_r=Ca()),_r):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Fe(e,n,t,r){if(50<Lt)throw Lt=0,Oi=null,Error(y(185));Xt(e,t,r),(!(F&2)||e!==Z)&&(e===Z&&(!(F&2)&&(cl|=t),Y===4&&be(e,b)),pe(e,r),t===1&&F===0&&!(n.mode&1)&&(lt=Q()+500,ol&&hn()))}function pe(e,n){var t=e.callbackNode;Gc(e,n);var r=Rr(e,e===Z?b:0);if(r===0)t!==null&&qo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qo(t),n===1)e.tag===0?Xd(As.bind(null,e)):Ja(As.bind(null,e)),Qd(function(){!(F&6)&&hn()}),t=null;else{switch(za(r)){case 1:t=Xi;break;case 4:t=Na;break;case 16:t=Mr;break;case 536870912:t=Ea;break;default:t=Mr}t=Gu(t,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $u(e,n){if(zr=-1,_r=0,F&6)throw Error(y(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Rr(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var l=F;F|=2;var i=Qu();(Z!==e||b!==n)&&(Ue=null,lt=Q()+500,Sn(e,n));do try{gf();break}catch(a){Hu(e,a)}while(!0);ao(),Xr.current=i,F=l,q!==null?n=0:(Z=null,b=0,n=Y)}if(n!==0){if(n===2&&(l=ai(e),l!==0&&(r=l,n=Ii(e,l))),n===1)throw t=Kt,Sn(e,0),be(e,r),pe(e,Q()),t;if(n===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!hf(l)&&(n=Jr(e,r),n===2&&(i=ai(e),i!==0&&(r=i,n=Ii(e,i))),n===1))throw t=Kt,Sn(e,0),be(e,r),pe(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(y(345));case 2:xn(e,ue,Ue);break;case 3:if(be(e,r),(r&130023424)===r&&(n=No+500-Q(),10<n)){if(Rr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(xn.bind(null,e,ue,Ue),n);break}xn(e,ue,Ue);break;case 4:if(be(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Te(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=vi(xn.bind(null,e,ue,Ue),r);break}xn(e,ue,Ue);break;case 5:xn(e,ue,Ue);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===t?$u.bind(null,e):null}function Ii(e,n){var t=Pt;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Di(n)),e}function Di(e){ue===null?ue=e:ue.push.apply(ue,e)}function hf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function be(e,n){for(n&=~So,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),r=1<<t;e[t]=-1,n&=~r}}function As(e){if(F&6)throw Error(y(327));Zn();var n=Rr(e,0);if(!(n&1))return pe(e,Q()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=ai(e);r!==0&&(n=r,t=Ii(e,r))}if(t===1)throw t=Kt,Sn(e,0),be(e,n),pe(e,Q()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xn(e,ue,Ue),pe(e,Q()),null}function Eo(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(lt=Q()+500,ol&&hn())}}function Pn(e){nn!==null&&nn.tag===0&&!(F&6)&&Zn();var n=F;F|=1;var t=Se.transition,r=M;try{if(Se.transition=null,M=1,e)return e()}finally{M=r,Se.transition=t,F=n,!(F&6)&&hn()}}function Co(){me=Hn.current,I(Hn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hd(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:tt(),I(de),I(le),ho();break;case 5:mo(r);break;case 4:tt();break;case 13:I(U);break;case 19:I(U);break;case 10:uo(r.type._context);break;case 22:case 23:Co()}t=t.return}if(Z=e,q=e=cn(e.current,null),b=me=n,Y=0,Kt=null,So=cl=_n=0,ue=Pt=null,kn!==null){for(n=0;n<kn.length;n++)if(t=kn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}kn=null}return e}function Hu(e,n){do{var t=q;try{if(ao(),Nr.current=Yr,Kr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(zn=0,G=K=B=null,zt=!1,Ht=0,jo.current=null,t===null||t.return===null){Y=1,Kt=n,q=null;break}e:{var i=e,o=t.return,a=t,u=n;if(n=b,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Es(o);if(x!==null){x.flags&=-257,Cs(x,o,a,i,n),x.mode&1&&Ns(i,d,n),n=x,u=d;var w=n.updateQueue;if(w===null){var k=new Set;k.add(u),n.updateQueue=k}else w.add(u);break e}else{if(!(n&1)){Ns(i,d,n),zo();break e}u=Error(y(426))}}else if(A&&a.mode&1){var D=Es(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Cs(D,o,a,i,n),oo(rt(u,a));break e}}i=u=rt(u,a),Y!==4&&(Y=2),Pt===null?Pt=[i]:Pt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=zu(i,u,n);ys(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(an===null||!an.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=_u(i,a,n);ys(i,g);break e}}i=i.return}while(i!==null)}Ku(t)}catch(S){n=S,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Qu(){var e=Xr.current;return Xr.current=Yr,e===null?Yr:e}function zo(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(_n&268435455)&&!(cl&268435455)||be(Z,b)}function Jr(e,n){var t=F;F|=2;var r=Qu();(Z!==e||b!==n)&&(Ue=null,Sn(e,n));do try{vf();break}catch(l){Hu(e,l)}while(!0);if(ao(),F=t,Xr.current=r,q!==null)throw Error(y(261));return Z=null,b=0,Y}function vf(){for(;q!==null;)qu(q)}function gf(){for(;q!==null&&!Wc();)qu(q)}function qu(e){var n=Xu(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Ku(e):q=n,jo.current=null}function Ku(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cf(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,q=null;return}}else if(t=uf(t,n,me),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);Y===0&&(Y=5)}function xn(e,n,t){var r=M,l=Se.transition;try{Se.transition=null,M=1,yf(e,n,t,r)}finally{Se.transition=l,M=r}return null}function yf(e,n,t,r){do Zn();while(nn!==null);if(F&6)throw Error(y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Zc(e,i),e===Z&&(q=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,Gu(Mr,function(){return Zn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var o=M;M=1;var a=F;F|=4,jo.current=null,ff(e,t),Wu(t,e),Dd(mi),Or=!!pi,mi=pi=null,e.current=t,pf(t),Vc(),F=a,M=o,Se.transition=i}else e.current=t;if(vr&&(vr=!1,nn=e,Zr=l),i=e.pendingLanes,i===0&&(an=null),Qc(t.stateNode),pe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gr)throw Gr=!1,e=Ri,Ri=null,e;return Zr&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Oi?Lt++:(Lt=0,Oi=e):Lt=0,hn(),null}function Zn(){if(nn!==null){var e=za(Zr),n=Se.transition,t=M;try{if(Se.transition=null,M=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Zr=0,F&6)throw Error(y(331));var l=F;for(F|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(j=d;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:_t(8,h,i)}var v=h.child;if(v!==null)v.return=h,j=v;else for(;j!==null;){h=j;var m=h.sibling,x=h.return;if(Au(h),h===d){j=null;break}if(m!==null){m.return=x,j=m;break}j=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_t(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(S){V(a,a.return,S)}if(a===o){j=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}if(F=l,hn(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{M=t,Se.transition=n}}return!1}function Us(e,n,t){n=rt(t,n),n=zu(e,n,1),e=sn(e,n,1),n=oe(),e!==null&&(Xt(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)Us(e,e,t);else for(;n!==null;){if(n.tag===3){Us(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=rt(t,e),e=_u(n,e,1),n=sn(n,e,1),e=oe(),n!==null&&(Xt(n,1,e),pe(n,e));break}}n=n.return}}function xf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(Y===4||Y===3&&(b&130023424)===b&&500>Q()-No?Sn(e,0):So|=t),pe(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=oe();e=qe(e,n),e!==null&&(Xt(e,n,t),pe(e,t))}function wf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function kf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(n),Yu(e,t)}var Xu;Xu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,af(e,n,t);ce=!!(e.flags&131072)}else ce=!1,A&&n.flags&1048576&&ba(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Cr(e,n),e=n.pendingProps;var l=bn(n,le.current);Gn(n,t),l=go(null,n,r,e,l,t);var i=yo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(i=!0,Br(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(n),l.updater=al,n.stateNode=l,l._reactInternals=n,Si(n,r,e,t),n=Ci(null,n,r,!0,i,t)):(n.tag=0,A&&i&&lo(n),ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Cr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Sf(r),e=_e(r,e),l){case 0:n=Ei(null,n,r,e,t);break e;case 1:n=Ps(null,n,r,e,t);break e;case 11:n=zs(null,n,r,e,t);break e;case 14:n=_s(null,n,r,_e(r.type,e),t);break e}throw Error(y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Ei(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Ps(e,n,r,l,t);case 3:e:{if(Fu(n),e===null)throw Error(y(387));r=n.pendingProps,i=n.memoizedState,l=i.element,iu(e,n),Qr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=rt(Error(y(423)),n),n=Ls(e,n,r,t,l);break e}else if(r!==l){l=rt(Error(y(424)),n),n=Ls(e,n,r,t,l);break e}else for(he=on(n.stateNode.containerInfo.firstChild),ve=n,A=!0,Le=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===l){n=Ke(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return ou(n),e===null&&wi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(n.flags|=32),Tu(e,n),ie(e,n,o,t),n.child;case 6:return e===null&&wi(n),null;case 13:return Mu(e,n,t);case 4:return po(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),zs(e,n,r,l,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,R($r,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!de.current){n=Ke(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=$e(-1,t&-t),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ki(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ki(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Gn(n,t),l=Ne(l),r=r(l),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,l=_e(r,n.pendingProps),l=_e(r.type,l),_s(e,n,r,l,t);case 15:return Pu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Cr(e,n),n.tag=1,fe(r)?(e=!0,Br(n)):e=!1,Gn(n,t),Cu(n,r,l),Si(n,r,l,t),Ci(null,n,r,!0,e,t);case 19:return Ru(e,n,t);case 22:return Lu(e,n,t)}throw Error(y(156,n.tag))};function Gu(e,n){return Sa(e,n)}function jf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new jf(e,n,t,r)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Ki)return 14}return 2}function cn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")_o(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rn:return Nn(t.children,l,i,n);case Qi:o=8,l|=8;break;case Kl:return e=je(12,t,n,l|2),e.elementType=Kl,e.lanes=i,e;case Yl:return e=je(13,t,n,l),e.elementType=Yl,e.lanes=i,e;case Xl:return e=je(19,t,n,l),e.elementType=Xl,e.lanes=i,e;case oa:return dl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:o=10;break e;case ia:o=9;break e;case qi:o=11;break e;case Ki:o=14;break e;case Ge:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=je(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Nn(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function dl(e,n,t,r){return e=je(22,e,r,n),e.elementType=oa,e.lanes=t,e.stateNode={isHidden:!1},e}function $l(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function Hl(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,n,t,r,l,i,o,a,u){return e=new Nf(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function Ef(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zu(e){if(!e)return fn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(fe(t))return Za(e,t,n)}return n}function Ju(e,n,t,r,l,i,o,a,u){return e=Po(t,r,!0,e,l,i,o,a,u),e.context=Zu(null),t=e.current,r=oe(),l=un(t),i=$e(r,l),i.callback=n??null,sn(t,i,l),e.current.lanes=l,Xt(e,l,r),pe(e,r),e}function fl(e,n,t,r){var l=n.current,i=oe(),o=un(l);return t=Zu(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,o),e!==null&&(Fe(e,l,o,i),Sr(e,l,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Lo(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function Cf(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}pl.prototype.render=To.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));fl(e,n,null,null)};pl.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){fl(null,e,null,null)}),n[Qe]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Fa(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function zf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=br(o);i.call(d)}}var o=Ju(n,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=o,e[Qe]=o.current,Ut(e.nodeType===8?e.parentNode:e),Pn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=br(u);a.call(d)}}var u=Po(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=u,e[Qe]=u.current,Ut(e.nodeType===8?e.parentNode:e),Pn(function(){fl(n,u,t,r)}),u}function hl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=br(o);a.call(u)}}fl(n,o,e,l)}else o=zf(t,n,e,l,r);return br(o)}_a=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(Gi(n,t|1),pe(n,Q()),!(F&6)&&(lt=Q()+500,hn()))}break;case 13:Pn(function(){var r=qe(e,1);if(r!==null){var l=oe();Fe(r,e,1,l)}}),Lo(e,1)}};Zi=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=oe();Fe(n,e,134217728,t)}Lo(e,134217728)}};Pa=function(e){if(e.tag===13){var n=un(e),t=qe(e,n);if(t!==null){var r=oe();Fe(t,e,n,r)}Lo(e,n)}};La=function(){return M};Ta=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};ii=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(y(90));aa(r),Jl(r,l)}}}break;case"textarea":ca(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};ga=Eo;ya=Pn;var _f={usingClientEntryPoint:!1,Events:[Zt,An,il,ha,va,Eo]},gt={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ka(e),e===null?null:e.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(Pf),De=gr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(n))throw Error(y(200));return Ef(e,n,null,t)};ye.createRoot=function(e,n){if(!Fo(e))throw Error(y(299));var t=!1,r="",l=bu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Po(e,1,!1,null,null,t,!1,r,l),e[Qe]=n.current,Ut(e.nodeType===8?e.parentNode:e),new To(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ka(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Pn(e)};ye.hydrate=function(e,n,t){if(!ml(n))throw Error(y(200));return hl(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Fo(e))throw Error(y(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=bu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ju(n,null,e,1,t??null,l,!1,i,o),e[Qe]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new pl(n)};ye.render=function(e,n,t){if(!ml(n))throw Error(y(200));return hl(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(y(40));return e._reactRootContainer?(Pn(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ye.unstable_batchedUpdates=Eo;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ml(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return hl(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),ea.exports=ye;var Lf=ea.exports,Vs=Lf;Ql.createRoot=Vs.createRoot,Ql.hydrateRoot=Vs.hydrateRoot;const Tf="/pagelab-landing/assets/hero-B4bZDeAh.jpg";function Ff(){const[e,n]=Qn.useState("contado"),[t,r]=Qn.useState(null),l={esencial:{contado:200,cuotas:260,suscripcion:300},completa:{contado:400,cuotas:520,suscripcion:600}};Qn.useEffect(()=>{const h=new IntersectionObserver(m=>{m.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll("[data-animate]").forEach(m=>h.observe(m)),()=>h.disconnect()},[]);const i=h=>{var v;(v=document.getElementById(h))==null||v.scrollIntoView({behavior:"smooth"})},o=h=>new Intl.NumberFormat("es-CL").format(h*1e3),a=h=>{if(e==="contado")return null;const v=l[h][e];return Math.round(v/(e==="cuotas"?3:6))},u=h=>{if(e==="contado")return{main:o(l[h][e]),sub:"Pago único"};const v=a(h),m=l[h][e],x=e==="cuotas"?3:6;return{main:o(v),sub:`${x} cuotas (total $${o(m)})`}},d=h=>{r(t===h?null:h)};return s.jsxs("div",{className:"landing-page",children:[s.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --color-noir: #121212;
          --color-charcoal: #2B2B2B;
          --color-iron: #565656;
          --color-fog: #848484;
          --color-silver: #B3B3B3;
          --color-cloud: #E0E0E0;
          --color-white: #FFFFFF;
          --color-accent: #4A90E2;
          --color-accent-hover: #357ABD;
          
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-5: 1.25rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-10: 2.5rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-20: 5rem;
          
          --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          font-family: var(--font-family);
          color: var(--color-noir);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          background: var(--color-white);
        }

        .landing-page {
          background: var(--color-white);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        /* Header */
        .header {
          padding: var(--space-5) 0;
          background: var(--color-white);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #F5F5F5;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          text-transform: lowercase;
          color: var(--color-noir);
        }

        .nav {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }

        .nav a {
          font-size: 0.9375rem;
          color: var(--color-iron);
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .nav a:hover {
          color: var(--color-noir);
        }

        .nav-cta {
          background: var(--color-noir);
          color: var(--color-white) !important;
          padding: var(--space-2) var(--space-4);
          border-radius: 6px;
          font-weight: 500;
        }

        .nav-cta:hover {
          background: var(--color-charcoal);
          color: var(--color-white) !important;
        }

        /* Hero */
        .hero {
          padding: var(--space-20) 0 var(--space-16);
          background: var(--color-white);
          overflow: hidden;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: #F5F5F5;
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-iron);
          margin-bottom: var(--space-6);
        }

        .hero-headline {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: var(--space-5);
          color: var(--color-noir);
        }

        .hero-subheadline {
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.7;
          color: var(--color-iron);
          margin-bottom: var(--space-8);
          font-weight: 400;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-3);
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-8);
        }

        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        .hero-image-wrapper {
          animation: heroSlideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }

        .hero-image-wrapper img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
          animation: heroFloat 5s ease-in-out 1.1s infinite;
          display: block;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          font-family: var(--font-family);
        }

        .btn-primary {
          background: var(--color-noir);
          color: var(--color-white);
        }

        .btn-primary:hover {
          background: var(--color-charcoal);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--color-noir);
          border: 1px solid #E0E0E0;
        }

        .btn-secondary:hover {
          background: #FAFAFA;
        }

        .social-proof {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-5);
          background: #F9FAFB;
          border-radius: 8px;
          border: 1px solid #F0F0F0;
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--color-iron);
        }

        .proof-check {
          width: 16px;
          height: 16px;
          color: var(--color-accent);
        }

        /* Section */
        .section {
          padding: var(--space-16) 0;
        }

        .section-alt {
          background: #FAFAFA;
        }

        .section-gray {
          background: #F5F5F5;
        }

        .section-dark {
          background: var(--color-noir);
          color: var(--color-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .section-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-fog);
          margin-bottom: var(--space-3);
        }

        .section-headline {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-4);
          color: var(--color-noir);
        }

        .section-dark .section-headline {
          color: var(--color-white);
        }

        .section-subheadline {
          font-size: 1.0625rem;
          color: var(--color-iron);
          max-width: 560px;
          margin: 0 auto;
          font-weight: 400;
        }

        .section-dark .section-subheadline {
          color: var(--color-silver);
        }

        /* Pain Points */
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-5);
          max-width: 960px;
          margin: 0 auto;
        }

        .pain-card {
          padding: var(--space-6);
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .pain-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }

        .pain-icon {
          width: 40px;
          height: 40px;
          background: #F5F5F5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .pain-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--color-iron);
        }

        .pain-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-fog);
          margin-bottom: var(--space-3);
        }

        .pain-content {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
        }

        /* Process */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--space-8);
          max-width: 900px;
          margin: 0 auto;
        }

        .process-step {
          text-align: center;
        }

        .step-icon {
          width: 48px;
          height: 48px;
          background: var(--color-noir);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
        }

        .step-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .step-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--space-3);
          color: var(--color-noir);
        }

        .step-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-iron);
          margin-bottom: var(--space-3);
        }

        .step-time {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* Benefits */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
          max-width: 1000px;
          margin: 0 auto;
        }

        .benefit-card {
          padding: var(--space-5);
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .benefit-card:hover {
          border-color: var(--color-cloud);
          transform: translateY(-2px);
        }

        .benefit-icon {
          width: 36px;
          height: 36px;
          background: #F5F5F5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .benefit-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--color-noir);
        }

        .benefit-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--space-2);
          color: var(--color-noir);
        }

        .benefit-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-iron);
        }

        /* Pricing */
        .pricing-toggle {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-10);
          background: #F5F5F5;
          padding: 4px;
          border-radius: 8px;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
        }

        .pricing-toggle button {
          flex: 1;
          padding: var(--space-2) var(--space-4);
          border: none;
          background: transparent;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--color-iron);
          font-family: var(--font-family);
        }

        .pricing-toggle button.active {
          background: var(--color-white);
          color: var(--color-noir);
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          padding: var(--space-6);
          position: relative;
          transition: all 0.2s ease;
        }

        .pricing-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .plan-badge {
          display: inline-block;
          padding: 4px var(--space-3);
          background: #F5F5F5;
          border-radius: 100px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-iron);
          margin-bottom: var(--space-4);
        }

        .plan-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .plan-description {
          font-size: 0.875rem;
          color: var(--color-iron);
          margin-bottom: var(--space-5);
          line-height: 1.6;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: var(--color-noir);
          margin-bottom: var(--space-2);
        }

        .price-currency {
          font-size: 1.25rem;
          color: var(--color-iron);
          font-weight: 600;
        }

        .price-period {
          font-size: 0.875rem;
          color: var(--color-fog);
          margin-bottom: var(--space-5);
        }

        .delivery-info {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3);
          background: #F9FAFB;
          border-radius: 6px;
          margin-bottom: var(--space-5);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-iron);
        }

        .features-list {
          list-style: none;
          margin-top: var(--space-5);
          border-top: 1px solid #F5F5F5;
          padding-top: var(--space-5);
        }

        .features-list li {
          padding: var(--space-2) 0;
          padding-left: var(--space-6);
          position: relative;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-iron);
        }

        .features-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 14px;
          width: 14px;
          height: 14px;
          background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6667 3.5L5.25 9.91667L2.33334 7' stroke='%234A90E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center;
        }

        /* Testimonials */
        .testimonials-wrapper {
          overflow: hidden;
          position: relative;
          padding: var(--space-4) 0;
        }

        .testimonials {
          display: flex;
          gap: var(--space-6);
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .testimonials:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial {
          background: var(--color-white);
          padding: var(--space-6);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          min-width: 380px;
          max-width: 380px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
          margin-bottom: var(--space-5);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-iron);
        }

        .author-info strong {
          display: block;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-noir);
        }

        .author-info span {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* FAQ Accordion */
        .faq-list {
          max-width: 720px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid #ECECEC;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          padding: var(--space-5) 0;
          background: none;
          border: none;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 1rem;
          color: var(--color-noir);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: var(--color-iron);
        }

        .faq-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          transition: transform 0.2s ease;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-answer.open {
          max-height: 500px;
        }

        .faq-answer-content {
          padding-bottom: var(--space-5);
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
        }

        /* Footer */
        .footer {
          background: var(--color-noir);
          color: var(--color-silver);
          padding: var(--space-10) 0 var(--space-6);
          text-align: center;
        }

        .footer-stats {
          display: flex;
          gap: var(--space-8);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-8);
          padding-bottom: var(--space-8);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-stat {
          font-size: 0.875rem;
        }

        .footer-text {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* Animations */
        @media (prefers-reduced-motion: no-preference) {
          [data-animate] {
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          [data-animate].visible {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
          }

          .hero-content {
            text-align: center;
          }

          .hero-cta {
            justify-content: center;
          }

          .social-proof {
            justify-content: center;
          }

          .hero-image-wrapper {
            max-width: 520px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: var(--space-16) 0 var(--space-12);
          }

          .section {
            padding: var(--space-12) 0;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
          }

          .social-proof {
            flex-direction: column;
            gap: var(--space-2);
          }

          .pricing-toggle {
            flex-direction: column;
            max-width: 100%;
          }

          .footer-stats {
            flex-direction: column;
            gap: var(--space-4);
          }

          .nav {
            display: none;
          }

          .process-visual {
            display: none;
          }

          .portfolio-card {
            min-width: 320px;
            max-width: 320px;
          }
        }

        /* WhatsApp Button */
        .whatsapp-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          text-decoration: none;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-button svg {
          width: 32px;
          height: 32px;
          fill: white;
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-button svg {
            width: 28px;
            height: 28px;
          }
        }


        .process-visual {
          max-width: 500px;
          margin: var(--space-12) auto 0;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%);
          border-radius: 12px;
          border: 1px solid #ECECEC;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .process-visual::before {
          content: '';
          width: 60%;
          height: 60%;
          background: var(--color-white);
          border-radius: 8px;
          border: 2px dashed #E0E0E0;
        }

        /* Portfolio Section */
        .portfolio-wrapper {
          overflow: hidden;
          position: relative;
          padding: var(--space-4) 0;
        }

        .portfolio-slider {
          display: flex;
          gap: var(--space-6);
          animation: scrollPortfolio 40s linear infinite;
          width: max-content;
        }

        .portfolio-slider:hover {
          animation-play-state: paused;
        }

        @keyframes scrollPortfolio {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .portfolio-card {
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          overflow: hidden;
          min-width: 420px;
          max-width: 420px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .portfolio-screenshot {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: var(--color-white);
        }

        .portfolio-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .portfolio-card-content {
          padding: var(--space-5);
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--color-fog);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-2);
          font-weight: 600;
        }

        .project-info h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--space-3);
          color: var(--color-noir);
        }

        .project-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-iron);
        }
      `}),s.jsx("header",{className:"header",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"header-container",children:[s.jsx("div",{className:"logo",children:"Pagelab."}),s.jsxs("nav",{className:"nav",children:[s.jsx("a",{onClick:()=>i("proceso"),children:"Proceso"}),s.jsx("a",{onClick:()=>i("pricing"),children:"Precios"}),s.jsx("a",{onClick:()=>i("faq"),children:"FAQ"}),s.jsx("a",{className:"nav-cta",onClick:()=>i("pricing"),children:"Comenzar"})]})]})})}),s.jsx("section",{className:"hero",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"hero-layout",children:[s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:s.jsx("path",{d:"M7 1L8.545 5.13L13 5.545L9.5 8.635L10.545 13L7 10.635L3.455 13L4.5 8.635L1 5.545L5.455 5.13L7 1Z",fill:"currentColor"})}),"Entrega en 48-72 horas · Sin costos ocultos"]}),s.jsx("h1",{className:"hero-headline",children:"Tu página web profesional lista en 3 días"}),s.jsx("p",{className:"hero-subheadline",children:"Diseñamos y desarrollamos páginas web de calidad para tu negocio. Proceso simple, entrega rápida, sin complicaciones."}),s.jsxs("div",{className:"hero-cta",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>i("pricing"),children:"Ver Planes →"}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>i("proceso"),children:"Cómo funciona"})]}),s.jsxs("div",{className:"social-proof",children:[s.jsxs("div",{className:"proof-item",children:[s.jsx("svg",{className:"proof-check",viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M13.3333 4L6 11.3333L2.66667 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"+127 páginas entregadas"]}),s.jsxs("div",{className:"proof-item",children:[s.jsx("svg",{className:"proof-check",viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M13.3333 4L6 11.3333L2.66667 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"100% en tiempo"]}),s.jsxs("div",{className:"proof-item",children:[s.jsx("svg",{className:"proof-check",viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M13.3333 4L6 11.3333L2.66667 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Sin contratos largos"]})]})]}),s.jsx("div",{className:"hero-image-wrapper",children:s.jsx("img",{src:Tf,alt:"Ejemplos de páginas web creadas por Pagelab"})})]})})}),s.jsx("section",{className:"section section-alt","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-headline",children:"¿Por qué necesitas una página web?"}),s.jsx("p",{className:"section-subheadline",children:"Ya sea que estés empezando o buscando mejorar tu presencia online"})]}),s.jsxs("div",{className:"pain-grid",children:[s.jsxs("div",{className:"pain-card",children:[s.jsx("div",{className:"pain-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"2"}),s.jsx("path",{d:"M12 6v6l4 2",strokeWidth:"2",strokeLinecap:"round"})]})}),s.jsx("div",{className:"pain-title",children:"ESTÁS PERDIENDO CLIENTES"}),s.jsx("div",{className:"pain-content",children:"Hoy todos buscan en internet antes de comprar. Si no tienes presencia online, estás dejando que tus competidores capten a tus clientes potenciales."})]}),s.jsxs("div",{className:"pain-card",children:[s.jsx("div",{className:"pain-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M2 17l10 5 10-5M2 12l10 5 10-5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),s.jsx("div",{className:"pain-title",children:"NO SABES POR DÓNDE EMPEZAR"}),s.jsx("div",{className:"pain-content",children:"Precios que varían de $200k a $5M, procesos confusos, términos técnicos. Solo quieres una página que funcione, pero no sabes a quién recurrir."})]}),s.jsxs("div",{className:"pain-card",children:[s.jsx("div",{className:"pain-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",strokeWidth:"2"}),s.jsx("path",{d:"M9 12l2 2 4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),s.jsx("div",{className:"pain-title",children:"NECESITAS ALGO CONFIABLE"}),s.jsx("div",{className:"pain-content",children:"Buscas un servicio profesional que cumpla lo que promete: tiempos claros, precios transparentes y un resultado de calidad."})]})]})]})}),s.jsx("section",{className:"section",id:"proceso","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("div",{className:"section-eyebrow",children:"Proceso"}),s.jsx("h2",{className:"section-headline",children:"Así de simple debería ser siempre"}),s.jsx("p",{className:"section-subheadline",children:"3 pasos. Menos de una semana. Tu página publicada."})]}),s.jsxs("div",{className:"process-grid",children:[s.jsxs("div",{className:"process-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx("div",{className:"step-number",children:"01"})}),s.jsx("h3",{className:"step-title",children:"Eliges y pagas"}),s.jsx("p",{className:"step-description",children:"Esencial ($200k) o Completa ($400k). En cuotas si quieres. Sin letra chica."}),s.jsx("div",{className:"step-time",children:"⏱ 5 minutos"})]}),s.jsxs("div",{className:"process-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx("div",{className:"step-number",children:"02"})}),s.jsx("h3",{className:"step-title",children:"Llenas un form corto"}),s.jsx("p",{className:"step-description",children:"Tus textos (o los hacemos con IA), imágenes, colores de marca. Super guiado."}),s.jsx("div",{className:"step-time",children:"⏱ 10 minutos"})]}),s.jsxs("div",{className:"process-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx("div",{className:"step-number",children:"03"})}),s.jsx("h3",{className:"step-title",children:"Recibe tu página"}),s.jsx("p",{className:"step-description",children:"Preview en 3-5 días, haces ajustes, publicamos. Ya está. En serio."}),s.jsx("div",{className:"step-time",children:"⏱ 3-5 días total"})]})]}),s.jsx("div",{className:"process-visual"})]})}),s.jsx("section",{className:"section section-gray","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-headline",children:"Por qué esto no es como lo que ya probaste"})}),s.jsxs("div",{className:"benefits-grid",children:[s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M13 2L3 14h8l-1 8 10-12h-8l1-8z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("h3",{className:"benefit-title",children:"Velocidad Real"}),s.jsx("p",{className:"benefit-description",children:'3-5 días de entrega. No "2-3 semanas si todo sale bien". Literalmente en días, no semanas.'})]}),s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"2"}),s.jsx("path",{d:"M12 6v6l4 2",strokeWidth:"2",strokeLinecap:"round"})]})}),s.jsx("h3",{className:"benefit-title",children:"Precio Honesto"}),s.jsx("p",{className:"benefit-description",children:'$200-400k. Punto. No "desde" $200k que termina en $800k después de "ajustes adicionales".'})]}),s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",strokeWidth:"2"}),s.jsx("path",{d:"M9 12l2 2 4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),s.jsx("h3",{className:"benefit-title",children:"Tech Moderna"}),s.jsx("p",{className:"benefit-description",children:"React, no WordPress. Rápido en mobile. Se ve profesional porque lo es."})]}),s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("h3",{className:"benefit-title",children:"Generado con IA"}),s.jsx("p",{className:"benefit-description",children:"Usamos Claude/GPT-4 para copy, diseño, optimización. Calidad consistente, siempre."})]}),s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("h3",{className:"benefit-title",children:"Sin Venderte Humo"}),s.jsx("p",{className:"benefit-description",children:"No prometemos SEO mágico ni 1000% más conversiones. Solo una página bien hecha, rápido."})]}),s.jsxs("div",{className:"benefit-card",children:[s.jsx("div",{className:"benefit-icon",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M21.5 12H16l-2 3h-4l-2-3H2.5M5.8 2.1L2 12v8a2 2 0 002 2h16a2 2 0 002-2v-8l-3.8-9.9a2 2 0 00-1.9-1.1H7.7a2 2 0 00-1.9 1.1z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx("h3",{className:"benefit-title",children:"Ajustes Incluidos"}),s.jsx("p",{className:"benefit-description",children:'1-2 rondas de cambios incluidas. Sin cobros extra por "ah, cambia ese color". Soporte real.'})]})]})]})}),s.jsxs("section",{className:"section section-alt","data-animate":!0,children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"section-header",children:[s.jsx("div",{className:"section-eyebrow",children:"Portafolio"}),s.jsx("h2",{className:"section-headline",children:"Nuestros Trabajos"}),s.jsx("p",{className:"section-subheadline",children:"Páginas reales que generan resultados reales para negocios como el tuyo"})]})}),s.jsx("div",{className:"portfolio-wrapper",children:s.jsxs("div",{className:"portfolio-slider",children:[s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #0273ef 0%, #0056b3 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"2.5rem",letterSpacing:"-0.02em"},children:"KIVO"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Marketing Digital"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"KIVO"}),s.jsx("p",{className:"project-description",children:"Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión con planes, testimonios y FAQ interactivo."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #2d5016 0%, #4a7c2a 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"1.75rem",textAlign:"center",padding:"2rem"},children:"FLORESTA LA ERMITA"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Eventos & Turismo"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Floresta La Ermita"}),s.jsx("p",{className:"project-description",children:"Centro de eventos en la cordillera. Diseño elegante con galería, formularios de cotización y experiencia inmersiva."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"ACERCA CONSULTORES"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Consultoría"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Acerca Consultores"}),s.jsx("p",{className:"project-description",children:"Sistema de cotización online para consultoría empresarial. Formularios inteligentes y cálculo automático."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"CONTIGO PAN Y CEBOLLA"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Gastronomía"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Contigo Pan y Cebolla"}),s.jsx("p",{className:"project-description",children:"Sitio para emprendimiento gastronómico. Menú digital, reservas online y galería de platos."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #00695c 0%, #00897b 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"CONECTA FRANQUICIAS"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Negocios"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Conecta Franquicias"}),s.jsx("p",{className:"project-description",children:"Marketplace de franquicias. Buscador avanzado, fichas de negocios y sistema de matching."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #0273ef 0%, #0056b3 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"2.5rem",letterSpacing:"-0.02em"},children:"KIVO"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Marketing Digital"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"KIVO"}),s.jsx("p",{className:"project-description",children:"Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión con planes, testimonios y FAQ interactivo."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #2d5016 0%, #4a7c2a 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"1.75rem",textAlign:"center",padding:"2rem"},children:"FLORESTA LA ERMITA"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Eventos & Turismo"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Floresta La Ermita"}),s.jsx("p",{className:"project-description",children:"Centro de eventos en la cordillera. Diseño elegante con galería, formularios de cotización y experiencia inmersiva."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"ACERCA CONSULTORES"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Consultoría"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Acerca Consultores"}),s.jsx("p",{className:"project-description",children:"Sistema de cotización online para consultoría empresarial. Formularios inteligentes y cálculo automático."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"CONTIGO PAN Y CEBOLLA"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Gastronomía"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Contigo Pan y Cebolla"}),s.jsx("p",{className:"project-description",children:"Sitio para emprendimiento gastronómico. Menú digital, reservas online y galería de platos."})]})]})]}),s.jsxs("div",{className:"portfolio-card",children:[s.jsx("div",{className:"portfolio-screenshot",children:s.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #00695c 0%, #00897b 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",fontSize:"1.5rem",textAlign:"center",padding:"2rem"},children:"CONECTA FRANQUICIAS"})}),s.jsxs("div",{className:"portfolio-card-content",children:[s.jsx("div",{className:"project-category",children:"Negocios"}),s.jsxs("div",{className:"project-info",children:[s.jsx("h3",{children:"Conecta Franquicias"}),s.jsx("p",{className:"project-description",children:"Marketplace de franquicias. Buscador avanzado, fichas de negocios y sistema de matching."})]})]})]})]})})]}),s.jsx("section",{className:"section section-dark",id:"pricing","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-headline",children:"Planes y Precios"})}),s.jsxs("div",{className:"pricing-toggle",children:[s.jsx("button",{className:e==="contado"?"active":"",onClick:()=>n("contado"),children:"Al Contado"}),s.jsx("button",{className:e==="cuotas"?"active":"",onClick:()=>n("cuotas"),children:"3 Cuotas"}),s.jsx("button",{className:e==="suscripcion"?"active":"",onClick:()=>n("suscripcion"),children:"6 Meses"})]}),s.jsxs("div",{className:"pricing-cards",children:[s.jsxs("div",{className:"pricing-card",children:[s.jsx("div",{className:"plan-badge",children:"Esencial"}),s.jsx("h3",{className:"plan-title",children:"Landing Simple"}),s.jsx("p",{className:"plan-description",children:"Perfecto para validar tu idea o lanzar una campaña específica"}),s.jsxs("div",{className:"price",children:[s.jsx("span",{className:"price-currency",children:"$"}),u("esencial").main,e!=="contado"&&s.jsx("span",{style:{fontSize:"1rem",fontWeight:500},children:"/mes"})]}),s.jsx("div",{className:"price-period",children:u("esencial").sub}),s.jsxs("div",{className:"delivery-info",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 2v12M2 8h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),"Entrega: 48-72 horas"]}),s.jsx("button",{className:"btn btn-primary",style:{width:"100%",marginBottom:"var(--space-5)"},children:"Comenzar"}),s.jsxs("ul",{className:"features-list",children:[s.jsx("li",{children:"1 página optimizada"}),s.jsx("li",{children:"Diseño responsive"}),s.jsx("li",{children:"Formulario de contacto"}),s.jsx("li",{children:"Botón de WhatsApp"}),s.jsx("li",{children:"Google Analytics"}),s.jsx("li",{children:"Certificado de seguridad"}),s.jsx("li",{children:"2 rondas de ajustes"}),s.jsx("li",{children:"15 días de soporte"})]})]}),s.jsxs("div",{className:"pricing-card",children:[s.jsx("div",{className:"plan-badge",children:"Completa"}),s.jsx("h3",{className:"plan-title",children:"Landing Pro"}),s.jsx("p",{className:"plan-description",children:"Para empresas que necesitan explicar su propuesta y convertir"}),s.jsxs("div",{className:"price",children:[s.jsx("span",{className:"price-currency",children:"$"}),u("completa").main,e!=="contado"&&s.jsx("span",{style:{fontSize:"1rem",fontWeight:500},children:"/mes"})]}),s.jsx("div",{className:"price-period",children:u("completa").sub}),s.jsxs("div",{className:"delivery-info",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 2v12M2 8h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),"Entrega: 5 días"]}),s.jsx("button",{className:"btn btn-primary",style:{width:"100%",marginBottom:"var(--space-5)"},children:"Comenzar"}),s.jsxs("ul",{className:"features-list",children:[s.jsx("li",{children:"Todo de Esencial +"}),s.jsx("li",{children:"Hasta 6 secciones"}),s.jsx("li",{children:"10 imágenes optimizadas"}),s.jsx("li",{children:"2 formularios personalizados"}),s.jsx("li",{children:"Animaciones de scroll"}),s.jsx("li",{children:"Meta Pixel (Ads)"}),s.jsx("li",{children:"Iconografía personalizada"}),s.jsx("li",{children:"2 rondas de ajustes"}),s.jsx("li",{children:"30 días de soporte"}),s.jsx("li",{children:"Sesión capacitación 30min"})]})]})]})]})}),s.jsxs("section",{className:"section section-alt","data-animate":!0,children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-headline",children:"Lo que dicen quienes ya no tienen que lidiar con agencias"})})}),s.jsx("div",{className:"testimonials-wrapper",children:s.jsxs("div",{className:"testimonials",children:[s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Después de gastar $1.5M en una agencia que nunca entregó, Pagelab me hizo la página en 4 días por $400k. Funciona, se ve bien, y no tuve que perseguir a nadie."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"MU"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Martín Ulloa"}),s.jsx("span",{children:"Fundador de Tekio"})]})]})]}),s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Llevaba 3 semanas peleando con Wix. Les pagué un viernes, el martes ya estaba publicado. La única vez que algo salió como prometieron."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"VR"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Valentina Rojas"}),s.jsx("span",{children:"Arquitecta"})]})]})]}),s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Necesitaba una página para una campaña que empezaba en una semana. Todos me dijeron que imposible. Pagelab lo hizo en 4 días. Salvaron mi lanzamiento."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"DC"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Diego Campos"}),s.jsx("span",{children:"Startup Fintech"})]})]})]}),s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Después de gastar $1.5M en una agencia que nunca entregó, Pagelab me hizo la página en 4 días por $400k. Funciona, se ve bien, y no tuve que perseguir a nadie."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"MU"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Martín Ulloa"}),s.jsx("span",{children:"Fundador de Tekio"})]})]})]}),s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Llevaba 3 semanas peleando con Wix. Les pagué un viernes, el martes ya estaba publicado. La única vez que algo salió como prometieron."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"VR"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Valentina Rojas"}),s.jsx("span",{children:"Arquitecta"})]})]})]}),s.jsxs("div",{className:"testimonial",children:[s.jsx("div",{className:"testimonial-quote",children:'"Necesitaba una página para una campaña que empezaba en una semana. Todos me dijeron que imposible. Pagelab lo hizo en 4 días. Salvaron mi lanzamiento."'}),s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"author-avatar",children:"DC"}),s.jsxs("div",{className:"author-info",children:[s.jsx("strong",{children:"Diego Campos"}),s.jsx("span",{children:"Startup Fintech"})]})]})]})]})})]}),s.jsx("section",{className:"section",id:"faq","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-headline",children:"Las preguntas que todos hacen"})}),s.jsx("div",{className:"faq-list",children:[{q:"¿Realmente puedo tener mi página en 3-5 días?",a:"Sí. Una vez que nos envías tu información (textos, imágenes, colores), comenzamos de inmediato. Plan Esencial listo en 48-72 horas, Plan Completa en 5 días. Incluye tiempo para ajustes."},{q:"¿Qué pasa si no me gusta el resultado?",a:"Ambos planes incluyen 2 rondas de ajustes. Revisas el preview antes de publicar y pedís los cambios que necesites. Solo publicamos cuando estés 100% conforme."},{q:"¿Necesito conocimientos técnicos?",a:"Para nada. Solo necesitas enviarnos tus textos (o ideas para que los redactemos), imágenes y logo. Nosotros nos encargamos de todo lo técnico: diseño, programación, publicación y seguridad."},{q:"¿La página va a funcionar bien en celulares?",a:"Sí, todas nuestras páginas son responsive (se adaptan automáticamente a celular, tablet y computador). La mayoría de tus visitantes entrarán desde el celular, por eso le damos especial atención."},{q:"¿Tengo que pagar hosting o dominio aparte?",a:"El hosting está incluido sin costo mensual. El dominio (tu-negocio.cl) lo puedes traer si ya tienes uno, o te ayudamos a comprarlo (cuesta aprox $15-20k/año). No hay costos ocultos."},{q:"¿Puedo cancelar o pedir reembolso?",a:"Como son proyectos personalizados que comenzamos apenas confirmas, no hacemos reembolsos. Pero trabajamos contigo hasta que quedes conforme con el resultado - ese es nuestro compromiso."}].map((h,v)=>s.jsxs("div",{className:"faq-item",children:[s.jsxs("button",{className:"faq-question",onClick:()=>d(v),children:[h.q,s.jsx("svg",{className:`faq-icon ${t===v?"open":""}`,viewBox:"0 0 20 20",fill:"none",children:s.jsx("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx("div",{className:`faq-answer ${t===v?"open":""}`,children:s.jsx("div",{className:"faq-answer-content",children:h.a})})]},v))})]})}),s.jsx("section",{className:"section section-dark","data-animate":!0,children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-headline",children:"¿Listo para tener tu página web?"}),s.jsx("p",{className:"section-subheadline",children:"Proceso simple, entrega rápida, resultado profesional. Comienza hoy mismo."})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"var(--space-8)"},children:s.jsx("button",{className:"btn btn-primary",onClick:()=>i("pricing"),style:{background:"var(--color-white)",color:"var(--color-noir)"},children:"Ver Planes →"})})]})}),s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"footer-stats",children:[s.jsx("div",{className:"footer-stat",children:"+127 páginas entregadas este año"}),s.jsx("div",{className:"footer-stat",children:"Promedio: 4 días"}),s.jsx("div",{className:"footer-stat",children:"100% satisfechos"})]}),s.jsx("div",{className:"footer-text",children:"© 2026 Pagelab. Páginas web profesionales, entrega rápida."})]})}),s.jsx("a",{href:"https://wa.me/56900000000",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-button","aria-label":"Contactar por WhatsApp",children:s.jsx("svg",{viewBox:"0 0 24 24",children:s.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})}Ql.createRoot(document.getElementById("root")).render(s.jsx(yc.StrictMode,{children:s.jsx(Ff,{})}));
